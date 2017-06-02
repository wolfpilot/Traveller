import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import { searchPhotos, likePhoto, unlikePhoto } from '../../components/Unsplash';
import { DestinationsList } from '../../components/Destinations';
import Pager from '../../components/Pager/';

export default class SearchPage extends Component {
	constructor(props) {
		super(props);

		// @TODO: Fix page state not reverting to 1
		// @TODO: upon searching for new terms.

		this.state = {
			searchTerm: '',
			destinations: [],
			page: 1,
			totalPages: 1,
			hasError: false
		}
	}

	componentWillMount() {
		// Compute state from props
		this.setState({ searchTerm: this.props.match.params.term });
		this.getPhotos(this.props.match.params.term);

	}

	componentWillReceiveProps(nextProps) {

		if (nextProps.location.search) {

			this.setState({
				page: parseInt(nextProps.location.search.replace("?page=", "")),
				searchTerm: nextProps.match.params.term
			});
		} else {
			this.setState({ searchTerm: nextProps.match.params.term });
		}

		this.getPhotos(nextProps.match.params.term, nextProps.location.search.replace("?page=", ""));

	}

	render() {
		return (
			<div className="container container--padded">
				<h2 className="title">{this.state.searchTerm}</h2>
				<Link to="/" className="btn btn--link">Go back home?</Link>
				{ this.state.hasError
					? <p className="copy">No photos could be found for this search term.</p>
					: <DestinationsList destinations={this.state.destinations} onLike={this.onLike} />
				}
				<Pager totalPages={this.state.totalPages} page={this.state.page} term={this.state.searchTerm} />
			</div>
		);
	}

	getPhotos(term, page) {
		searchPhotos(term, page)
			.then((json) => {

				if (json.errors || !json.results.length) {
					throw new Error(json.errors || 'No photos could be found for this search term.');
				}

				this.setState({
					destinations: json.results,
					totalPages: json.total_pages,
					hasError: false
				});

			}).catch((err) => {
				console.error(err);
				this.setState({ hasError: true });
			});
	}

	// @TODO: Liking/unliking photos updates the state for the entire destinations array.
	// @TODO: Find a way to update the state for only one photo.

	onLike = (destination) => {

		if (destination.liked_by_user) {

			unlikePhoto(destination.id)
				.then((json) => {

					// Update the search results and state
					this.getPhotos(this.props.match.params.term);

				}).catch((err) => {
					console.log(err);
				});

		} else {

			likePhoto(destination.id)
				.then((json) => {

					// Update the search results and state
					this.getPhotos(this.props.match.params.term);

				}).catch((err) => {
					console.log(err);
				});

		}

	}

}
