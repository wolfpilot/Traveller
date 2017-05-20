import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedItem = ({destination}) => {

	return (

		<Link
			className="recommended-item"
			to={{
				pathname: `/destinations/${destination.id}/${destination.name}`,
				state: { name: destination.name }
			}}
			style={{backgroundImage: 'url(' + destination.cover_photo.urls.regular + ')'}}>

			<h2 className="recommended-item__title">
				{destination.name}
			</h2>
			<p className="recommended-item__cta">
				See photos
			</p>
		</Link>
	);
};

export default RecommendedItem;
