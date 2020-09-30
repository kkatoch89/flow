import React from 'react';

const InputComp = (props) => {
	return (
		<form action="" className="form">
			<input
				className={props.validation}
				type="text"
				id="newTask"
				value={props.value}
				onChange={props.change}
				placeholder="Add a task here"
			></input>
			<button type="submit" onClick={props.click} Val>
				Add Task
			</button>
		</form>
	);
};

export default InputComp;
