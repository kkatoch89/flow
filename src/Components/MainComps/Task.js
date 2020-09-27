import React from 'react';
import CheckBox from './CheckBox.js';
import DelBtn from './DelBtn.js';

const Task = (props) => {
	return (
		<li>
			<CheckBox />
			{props.task}
			<DelBtn delClick={props.delClick} />
		</li>
	);
};

export default Task;
