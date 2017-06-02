import React from 'react';
import { Link } from 'react-router-dom';

import { likePhoto } from '../Unsplash';
import Heart from '../../assets/svg/heart.svg';

const DestinationsItem = (props) => {
	return (
		<div className="destinations-item">

			<img className="destinations-item__image" src={props.destination.urls.small} />

			<div className="destinations-item__overlay">

				<div className="destinations-item__details">

					<Link className="destinations-item__user hyperlink" to={props.destination.links.html + "?utm_source=traveller&utm_medium=referral&utm_campaign=api-credit"} target="_blank">
						Photo by {props.destination.user.first_name} {props.destination.user.last_name}
					</Link>

					<button
						className={'destinations-item__likes' + (props.destination.liked_by_user ? ' is-liked' : '')}
						onClick={() => props.onLike(props.destination)}>
						<Heart width={15} height={15}/> {props.destination.likes}
					</button>

				</div>

			</div>

		</div>
	);
}

export default DestinationsItem;
