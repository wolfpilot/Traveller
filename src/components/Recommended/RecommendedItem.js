import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedItem = ({collection}) => {

	return (

		<Link
			className="recommended-item"
			to={{
				pathname: `/collections/${collection.id}/${collection.destination}`,
				state: { name: collection.destination }
			}}
			style={{backgroundImage: 'url(' + collection.cover_photo.urls.regular + ')'}}>

			<h2 className="recommended-item__title">
				{collection.destination}
			</h2>
			<p className="recommended-item__cta">
				See photos
			</p>
		</Link>
	);
};

export default RecommendedItem;
