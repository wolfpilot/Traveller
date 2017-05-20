import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import { getCollectionPhotos } from '../../components/Unsplash';

import { DestinationsList } from '../../components/Destinations';

export default class CollectionsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			destinations: [],
			hasError: false
		}

	}

	componentWillMount() {

		// Compute state from props
		getCollectionPhotos(this.props.match.params.id)
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

	render() {
		return (
			<div className="container container--padded">
				<h2 className="subheading">{this.state.name}</h2>
				<Link to="/" className="btn btn--link">Go back home?</Link>
				{ this.state.hasError
					? <p className="copy">Sorry, the collection you're looking for does not exist.</p>
					: <DestinationsList destinations={this.state.destinations} />
				}
			</div>
		);
	}
}
