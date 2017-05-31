import React from 'react';
import { Link } from 'react-router-dom';

const Pager = (props) => {

	let listItems = [];

	if (props.totalPages > 1) {

		for (let i = 1; i <= props.totalPages; i++) {
			listItems.push(
				<Link
					key={i}
					to={`/search/${props.term}?page=${i}`}
					className={"pager__btn btn " + (i === props.page ? 'is-active' : null) }>
					{i}
				</Link>
			);
		}

	};

	return (
		<div className="pager">
			{listItems}
		</div>
	);
}

export default Pager;
