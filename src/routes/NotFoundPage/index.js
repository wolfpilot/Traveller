import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class NotFoundPage extends Component {
	render() {
		return (
			<div className="container">
				<h2>Oops, page not found!</h2>
				<Link to="/" className="btn btn--link">Go back home?</Link>
			</div>
		);
	}
}
