import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const DelBtn = (props) => {
	return (
		<button className="delButton">
			<FontAwesomeIcon
				icon={faTrashAlt}
				onClick={props.delClick}
				className="trashIcon"
				alt
			/>
			<span class="nonVisual">Delete</span>
		</button>
	);
};

export default DelBtn;
