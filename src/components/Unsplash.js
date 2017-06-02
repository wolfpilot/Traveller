import React from 'react';
import Unsplash, { toJson } from 'unsplash-js';

const APP_ID = '1499262a1a16bb45132151cd99ecbee4ad2c0134d60f50b1776abcf217f6cbc0';
const APP_SECRET = 'cadc04275a45125f6f1ceb2da3eb9d2801186155e80da0347dc86122cda505ac';
const CALLBACK_URL = 'urn:ietf:wg:oauth:2.0:oob';
const AUTH_CODE = '19018d434013aeb16de02b79fced708961cfeabadf8f20311186e2811ec71c74';
const ACCESS_TOKEN = '5425c4042a7be85a783ace4c083ea0d2d689aec87b8a01a5a13c1db4e25ee1b1';
const REFRESH_TOKEN = '4cd1bf6f95098e92dea678991162fb0cc4e77042406a1f2dbc4d3062607064ba';

const unsplash = new Unsplash({
	applicationId: APP_ID,
	secret: APP_SECRET,
	callbackUrl: CALLBACK_URL,
	bearerToken: ACCESS_TOKEN
});

/*
 * Exporting these functions looks redundant,
 * however it's done this way so that
 * we only initialise Unsplash once.
 */

export function getCollection(id) {
	return unsplash.collections.getCollection(id)
		.then(toJson)
		.then(json => {
			return json;
		});
}

export function getCollectionPhotos(id) {
	return unsplash.collections.getCollectionPhotos(id)
		.then(toJson)
		.then(json => {
			return json;
		});
}

export function searchPhotos(term, page) {
	return unsplash.search.photos(term, page)
		.then(toJson)
		.then(json => {
			return json;
		});
}

export function likePhoto(id) {
	return unsplash.photos.likePhoto(id)
		.then(toJson)
		.then(json => {
			return json;
		});
}

export function unlikePhoto(id) {
	return unsplash.photos.unlikePhoto(id)
		.then(toJson)
		.then(json => {
			return json;
		});
}
