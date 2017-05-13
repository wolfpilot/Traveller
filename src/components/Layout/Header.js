import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import history from '../../routes/history';

import SearchBar from '../SearchBar';

class Header extends Component {
	static contextTypes = {
		router: PropTypes.object,
	};

	constructor(props) {
		super(props);

		this.state = { newTerm: '' };

		this.placeholder = "Search destinations";


	}

	search(term) {
		this.setState({ newTerm: term });
		this.context.router.history.push(term ? `/search/${term}` : '/');
	}

	render() {
		const search = _.debounce((term) => {
			this.search(term)
		}, 250);

		return (
			<header className="header">
				<div className="container container--padded">
					<h1 className="heading">Where would you like to go today?</h1>
					<SearchBar onSearchTermChange={search} placeholder={this.placeholder} />
					<Link to="/destinations" className="hyperlink">No idea, take me somewhere interesting</Link>
				</div>
			</header>
		);
	}
}

export default Header;
