import React from 'react';
import CheckBox from './CheckBox.js';
import DelBtn from './DelBtn.js';

// Each task list item
// Contains submitted task from form, checkbox and delete button
const Task = (props) => {
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
