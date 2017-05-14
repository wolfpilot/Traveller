import React, { Component } from 'react';
import { render } from 'react-dom';
import { getCollectionPhotos } from '../Unsplash';

import { DestinationsList } from './';

const COLLECTION_ID = '493029'; // Initial collection ID

class Destinations extends Component {
	constructor(props) {
		super(props);

		this.state = {
			destinations: [],
			hasError: false
		}
	}

	render() {
		return (
			<div className="destinations">
				<DestinationsList destinations={this.state.destinations} />
				{ this.state.hasError
					? <p className="copy">Sorry, the collection you're looking for does not exist.</p>
					: null
				}
			</div>
		);
	}

	componentWillMount() {
		this.collectionSearch(COLLECTION_ID);
	}

	collectionSearch(id) {
		getCollectionPhotos(id)
			.then((json) => {
				try {
					if (json.errors) {
						throw new Error(json.errors);
					}
					this.setState({
						destinations: json,
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

export default Destinations;
