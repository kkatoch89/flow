import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Task = (props) => {
	return (
		<li>
			{props.task}
			<FontAwesomeIcon icon={faTrashAlt} />
		</li>
	);
};

export default Task;
