import React from 'react';
import DestinationsItem from './DestinationsItem';

const DestinationsList = (props) => {

	const destinationItems = props.destinations.map((destination) => {
		return <DestinationsItem key={destination.id} destination={destination} />
	});

	return (
		<div className="destinations">
			{destinationItems}
		</div>
	);
}

export default DestinationsList;
