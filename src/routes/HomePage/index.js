import React, { Component } from 'react';
import { render } from 'react-dom';

import { getCollection } from '../../components/Unsplash';
import { Recommended } from '../../components/Recommended';

// Unsplash collections
const DESTINATIONS =	[
	{
		id: 617608,
		name: "Peru"
	},
	{
		id: 827138,
		name: "Thailand"
	},
	{
		id: 625298,
		name: "Greece"
	},
	{
		id: 617675,
		name: "Australia"
	}
];

export default class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			destinations: []
		}
	}

	componentWillMount() {

		var destinations = [];

		DESTINATIONS.map((destination) => {

			getCollection(destination.id).then((json) => {

				if (json.errors) {

					throw new Error(json.errors);

				} else {

					// Add new key/value pair to array
					json.name = destination.name;

					destinations.push(json);

					this.setState({ destinations: destinations });

				}

			}).catch((err) => {
				console.error(err);
			});

		});

	}

	render() {
		return (
			<div className="container container--padded">
				<Recommended destinations={this.state.destinations} />
			</div>
		);
	}
}
