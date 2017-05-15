import React from 'react';
import { Link } from 'react-router-dom';

import Heart from '../../assets/svg/heart.svg';

const DestinationsItem = ({destination}) => {

	return (
		<div className="destinations-item">

			<img className="destinations-item__image" src={destination.urls.small} />

			<div className="destinations-item__overlay">

				<div className="destinations-item__details">

					<Link className="destinations-item__user hyperlink" to={destination.links.html + "?utm_source=traveller&utm_medium=referral&utm_campaign=api-credit"} target="_blank">
						Photo by {destination.user.first_name} {destination.user.last_name}
					</Link>

					<div className="destinations-item__likes">
						<Heart width={15} height={15}/> {destination.likes}
					</div>

				</div>

			</div>

		</div>
	);
}

export default DestinationsItem;
