import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedItem = ({destination}) => {

	return (

		<Link
			className="recommended-item"
			to={{
				pathname: `/destinations/${destination.id}/${destination.title}`
			}}
			style={{backgroundImage: 'url(' + destination.cover_photo.urls.regular + ')'}}>

			<h2 className="recommended-item__title">
				{destination.title}
			</h2>
			<p className="recommended-item__cta">
				See photos
			</p>
		</Link>
	);
};

export default RecommendedItem;
