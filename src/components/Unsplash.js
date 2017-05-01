import React from 'react';
import Unsplash, { toJson } from 'unsplash-js';

const APP_ID = '1499262a1a16bb45132151cd99ecbee4ad2c0134d60f50b1776abcf217f6cbc0';
const APP_SECRET = 'cadc04275a45125f6f1ceb2da3eb9d2801186155e80da0347dc86122cda505ac';
const CALLBACK_URL = 'urn:ietf:wg:oauth:2.0:oob';
const AUTH_CODE = 'b1a47ac4d38c1235e888d7b00792fb7679e491a30e79ea7fd9b561b4bdefe90e';

const unsplash = new Unsplash({
	applicationId: APP_ID,
	secret: APP_SECRET,
	callbackUrl: CALLBACK_URL
});

export function getCollectionPhotos(id) {
	return unsplash.collections.getCollectionPhotos(id)
		.then(toJson)
		.then(json => {
			return json;
		});
}

export function searchPhotos(term) {
	unsplash.search.photos(term, 10)
		.then(toJson)
		.then(json => {
			return json;
		});
}
