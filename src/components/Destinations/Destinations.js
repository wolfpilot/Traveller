import React, { Component } from 'react';
import { render } from 'react-dom';
import Unsplash, { toJson } from 'unsplash-js';

import DestinationsList from './DestinationsList';

// @TODO: Move these into an action
// @TODO: Allow searching for different collections
const APP_ID = '1499262a1a16bb45132151cd99ecbee4ad2c0134d60f50b1776abcf217f6cbc0';
const APP_SECRET = 'cadc04275a45125f6f1ceb2da3eb9d2801186155e80da0347dc86122cda505ac';
const CALLBACK_URL = 'urn:ietf:wg:oauth:2.0:oob';
const AUTH_CODE = 'b1a47ac4d38c1235e888d7b00792fb7679e491a30e79ea7fd9b561b4bdefe90e';
const COLLECTION_ID = '493029';

const unsplash = new Unsplash({
	applicationId: APP_ID,
	secret: APP_SECRET,
	callbackUrl: CALLBACK_URL
});

class Destinations extends Component {
	constructor(props) {
		super(props);

		this.state = {
			destinations: []
		}

		unsplash.collections.getCollectionPhotos(COLLECTION_ID)
		                    .then(toJson)
		                    .then(json => {
			this.setState({ destinations: json });
		});
	}

	render() {
		return (
			<DestinationsList destinations={this.state.destinations} />
		);
	}

}

export default Destinations;
