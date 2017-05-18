import React, { Component } from 'react';
import { render } from 'react-dom';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<form className="search-bar" onSubmit={this.handleSubmit}>
				<input
					className="input"
					type="text"
					value={this.props.term}
					placeholder={this.props.placeholder}
					onChange={e => this.props.onSearchTermChange(e.target.value)} />
			</form>
		);
	}

}
