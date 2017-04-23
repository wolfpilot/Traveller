import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import SearchBar from '../../components/SearchBar';

export default class PlacesPage extends Component {
	render() {
		return (
			<div className="container">
				<h2>Places</h2>
				<Link to="/" className="btn btn--link">Go back home</Link>
				<SearchBar />
			</div>
		);
	}
}
