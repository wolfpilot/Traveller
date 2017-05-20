import React from 'react';

import { RecommendedItem } from './';

const RecommendedList = ({collections}) => {

	const listItems = collections.map((collection) => {

		return <RecommendedItem
			key={collection.id}
			collection={collection} />
	});

	return (
		<div className="recommended-list">
			{listItems}
		</div>
	);

};

export default RecommendedList;
