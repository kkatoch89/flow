import React from 'react';

const InputComp = (props) => {
	return (
		<form action="">
			<input
				type="text"
				id="newTask"
				value={props.value}
				onChange={props.change}
			></input>
			<button type="submit" onClick={props.click}>
				Add Task
			</button>
		</form>
	);
};

export default InputComp;
