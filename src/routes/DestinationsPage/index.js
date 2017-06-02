import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import { getCollectionPhotos, searchPhotos, likePhoto, unlikePhoto } from '../../components/Unsplash';
import { DestinationsList } from '../../components/Destinations';

// @TODO: Tidy up and DRY out code
// @TODO: Maybe try to export like/unlike into its own file

export default class DestinationsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			destinations: [],
			hasError: false
		}

	}

	componentWillMount() {

		this.onUpdateCollectionPhotos(this.props.match.params.id);

	}

	render() {
		return (
			<div className="container container--padded">
				<h2 className="subheading">{this.state.name}</h2>
				<Link to="/" className="btn btn--link">Go back home?</Link>
				{ this.state.hasError
					? <p className="copy">Sorry, the collection you're looking for does not exist.</p>
					: <DestinationsList destinations={this.state.destinations} onLike={this.onLike} />
				}
			</div>
		);
	}

	// Compute state from props
	onUpdateCollectionPhotos(collectionID) {
		getCollectionPhotos(collectionID)
			.then((json) => {

				if (json.errors) {

					throw new Error(json.errors);

				} else {

					this.setState({
						name: this.props.match.params.name,
						destinations: json,
						hasError: false
					});

				}

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
					this.onUpdateCollectionPhotos(this.props.match.params.id);

				}).catch((err) => {
					console.log(err);
				});

		} else {

			likePhoto(destination.id)
				.then((json) => {

					// Update the search results and state
					this.onUpdateCollectionPhotos(this.props.match.params.id);

				}).catch((err) => {
					console.log(err);
				});

		}

	}

}
