import React, { Component } from 'react';
import { render } from 'react-dom';

import { RecommendedList } from './';

const Recommended = ({destinations}) => {

	return (
		<div className="recommended-list">
			<h2 className="subheading">
				Recommended
			</h2>
			<RecommendedList destinations={destinations} />
		</div>
	);
};

export default Recommended;
