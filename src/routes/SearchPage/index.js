import React, { Component } from 'react';
import { render } from 'react-dom';

export default class SearchPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: ''
		}
	}

	componentDidMount() {
		// Compute state from props
		this.setState({ searchTerm: this.props.match.params.term })

	}

	componentWillReceiveProps(nextProps) {

		this.setState({ searchTerm: nextProps.match.params.term })

	}

	render() {
		return (
			<div className="container container--padded">
				<h2>{this.state.searchTerm}</h2>
			</div>
		);
	}

}
