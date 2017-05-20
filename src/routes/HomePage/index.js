import React, { Component } from 'react';
import { render } from 'react-dom';

import { getCollection } from '../../components/Unsplash';
import { Recommended } from '../../components/Recommended';

const COLLECTIONS =	[
	{
		id: 617608,
		destination: "Peru"
	},
	{
		id: 827138,
		destination: "Thailand"
	},
	{
		id: 625298,
		destination: "Greece"
	},
	{
		id: 617675,
		destination: "Australia"
	}
];

export default class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: []
		}
	}

	componentWillMount() {

		var collections = [];

		COLLECTIONS.map((collection) => {

			getCollection(collection.id).then((json) => {

				if (json.errors) {

					throw new Error(json.errors);

				} else {

					// Add new key/value pair to array
					json.destination = collection.destination;

					collections.push(json);

					this.setState({ collections: collections });

				}

			}).catch((err) => {
				console.error(err);
			});

		});

	}

	render() {
		return (
			<div className="container container--padded">
				<Recommended collections={this.state.collections} />
			</div>
		);
	}
}
