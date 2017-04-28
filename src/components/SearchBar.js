import React, { Component } from 'react';
import { render } from 'react-dom';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form className="search-bar">
				<input
					type="text"
					value={this.props.term}
					onChange={this.props.onInputChange} />
			</form>
		);
	}
}
