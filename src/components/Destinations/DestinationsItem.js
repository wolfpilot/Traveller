import React from 'react';
import { Link } from 'react-router-dom';

const DestinationsItem = ({destination}) => {

	return (
		<div className="destination">

			<img className="destination__image" src={destination.urls.small} />

			<div className="destination__overlay">

				<div className="destination__details">

					<h2 className="destination__location heading">
						{ destination.user.location
							? destination.user.location
							: 'Unknown'
						}
					</h2>

					<Link className="destination__user hyperlink" to={destination.links.html + "?utm_source=traveller&utm_medium=referral&utm_campaign=api-credit"} target="_blank">
						Photo by {destination.user.first_name} {destination.user.last_name}
					</Link>

				</div>

			</div>

		</div>
	);
}

export default DestinationsItem;
