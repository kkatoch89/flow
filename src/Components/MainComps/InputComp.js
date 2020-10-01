import React from 'react';

// Create form element for user to type in tasks and submit via button
const InputComp = (props) => {
	return (
		<form action="" className="form">
			<input
				className={props.validation}
				type="text"
				id="newTask"
				value={props.value}
				onChange={props.change}
				placeholder="Enter task here"
			></input>
			<button type="submit" onClick={props.click} Val>
				Add Task
			</button>
		</form>
	);
};

export default InputComp;
