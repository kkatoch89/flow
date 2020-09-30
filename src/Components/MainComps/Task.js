import React from 'react';
import CheckBox from './CheckBox.js';
import DelBtn from './DelBtn.js';

const Task = (props) => {
	console.log(props);
	let labelStyle = 'task';
	if (props.status) {
		labelStyle = 'task strike';
	}
	return (
		<li className="task">
			<CheckBox id={props.id} statusCheck={props.statusCheck} />
			<label className="label" for={props.id}>
				{props.task}
			</label>
			<DelBtn delClick={props.delClick} />
		</li>
	);
};

export default Task;
