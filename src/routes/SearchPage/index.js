import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import { searchPhotos } from '../../components/Unsplash';
import { DestinationsList } from '../../components/Destinations';

export default class SearchPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			destinations: [],
			hasError: false
		}
	}

	componentWillMount() {
		// Compute state from props
		this.setState({ searchTerm: this.props.match.params.term });
		this.getPhotos(this.props.match.params.term);

	}

	componentWillReceiveProps(nextProps) {

		this.setState({ searchTerm: nextProps.match.params.term });
		this.getPhotos(nextProps.match.params.term);

	}

	render() {
		return (
			<div className="container container--padded">
				<h2>{this.state.searchTerm}</h2>
				<Link to="/" className="btn btn--link">Go back home?</Link>
				<DestinationsList destinations={this.state.destinations} />
				{ this.state.hasError
					? <p className="copy">No photos could be found for this search term.</p>
					: null
				}
			</div>
		);
	}

	getPhotos(term) {
		searchPhotos(term)
			.then((json) => {
				try {
					if (json.errors) {
						throw new Error(json.errors);
					}
					this.setState({
						destinations: json.results,
						hasError: false
					});
				}
				catch(e) {
					console.error(e);
					this.setState({ hasError: true });
				}
			});
	}

}
