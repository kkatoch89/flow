import React from 'react';
import CheckBox from './CheckBox.js';
import DelBtn from './DelBtn.js';

const Task = (props) => {
	console.log(props);
	let labelStyle = 'label';
	let taskBoxStyle = 'task';
	if (props.status) {
		labelStyle = 'label taskComplete';
		taskBoxStyle = 'task taskCompleteBox';
	}
	return (
		<li className={taskBoxStyle}>
			<CheckBox
				id={props.id}
				statusCheck={props.statusCheck}
				status={props.status}
			/>
			<label className={labelStyle} for={props.id}>
				{props.task}
			</label>
			<DelBtn delClick={props.delClick} />
		</li>
	);
};

export default Task;
