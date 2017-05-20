import React from 'react';

import { RecommendedItem } from './';

const RecommendedList = ({destinations}) => {

	const listItems = destinations.map((destination) => {

		return <RecommendedItem
			key={destination.id}
			destination={destination} />
	});

	return (
		<div className="recommended-list">
			{listItems}
		</div>
	);

};

export default RecommendedList;
