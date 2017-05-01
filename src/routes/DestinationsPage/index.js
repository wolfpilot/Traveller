import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import { Destinations } from '../../components/Destinations';
import { Footer } from '../../components/Layout';

export default class DestinationsPage extends Component {
	render() {
		return (
			<div className="container container--padded">
				<h2 className="subheading">Random ideas</h2>
				<Link to="/" className="btn btn--link">Go back home?</Link>
				<Destinations />
			</div>
		);
	}
}
