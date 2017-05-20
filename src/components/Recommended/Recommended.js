import React, { Component } from 'react';
import { render } from 'react-dom';

import { RecommendedList } from './';

const Recommended = ({collections}) => {

	return (
		<div className="recommended-list">
			<h2 className="subheading">
				Recommended
			</h2>
			<RecommendedList collections={collections} />
		</div>
	);
};

export default Recommended;
