import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import SearchBar from '../../components/SearchBar';

export default class HomePage extends Component {
	render() {
		return (
			<div className="container">
				<h2>Where would you like to go today?</h2>
				<Link to="/places#recommended" className="btn btn--link">No idea, take me somewhere</Link>
				<SearchBar />
			</div>
		);
	}
}
