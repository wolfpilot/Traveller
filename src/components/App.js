import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
