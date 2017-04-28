import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import SearchBar from '../../components/SearchBar';
import { Destinations } from '../../components/Destinations';
import { Footer } from '../../components/Layout';

export default class HomePage extends Component {
	render() {
		return (
			<div className="container container--padded">
				<h1 className="heading">Choose a destination</h1>
				<SearchBar />
				<Destinations />
				<Footer />
			</div>
		);
	}
}
