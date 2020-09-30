import React from 'react';
import CheckBox from './CheckBox.js';
import DelBtn from './DelBtn.js';

const Task = (props) => {
	return (
		<li className="task">
			<CheckBox id={props.id} />
			<label className="label" for={props.id}>
				{props.task}
			</label>
			<DelBtn delClick={props.delClick} />
		</li>
	);
};

export default Task;
