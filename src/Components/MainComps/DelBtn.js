import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// Checkbox rendered with each added task
// Used to delete respective task from list
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
