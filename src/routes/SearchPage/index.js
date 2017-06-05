import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import { searchPhotos, likePhoto, unlikePhoto } from '../../components/Unsplash';
import { DestinationsList } from '../../components/Destinations';
import Pager from '../../components/Pager/';

export default class SearchPage extends Component {
	constructor(props) {
		super(props);

		// @TODO: Fix getPhotos promise sometimes returning new results
		// @TODO: Perhaps store loaded destinations as state
		// @TODO: and return them again when loading already visited pages?

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

		// If not on the same page, get new photos
		if (nextProps.location.search && (parseInt(nextProps.location.search.replace("?page=", "")) !== this.state.page)) {

			this.setState({
				searchTerm: nextProps.match.params.term,
				page: parseInt(nextProps.location.search.replace("?page=", ""))
			});

			this.getPhotos(nextProps.match.params.term, nextProps.location.search.replace("?page=", ""));

		}

		// If different search term, get new photos
		if (nextProps.match.params.term !== this.state.searchTerm) {

			this.setState({
				searchTerm: nextProps.match.params.term,
				page: 1
			});

			this.getPhotos(nextProps.match.params.term);

		}

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

	onLike = (destination) => {

		if (destination.liked_by_user) {

			unlikePhoto(destination.id)
				.then((json) => {

					// Update the search results and state
					this.getPhotos(this.props.match.params.term, this.state.page);

				}).catch((err) => {
					console.log(err);
				});

		} else {

			likePhoto(destination.id)
				.then((json) => {

					// Update the search results and state
					this.getPhotos(this.props.match.params.term, this.state.page);

				}).catch((err) => {
					console.log(err);
				});

		}

	}

}
