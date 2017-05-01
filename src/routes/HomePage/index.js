import React, { Component } from 'react';
import { render } from 'react-dom';

import { Destinations } from '../../components/Destinations';

export default class HomePage extends Component {
	render() {
		return (
			<div className="container container--padded">
				<Destinations />
			</div>
		);
	}
}
