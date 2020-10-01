import React from 'react';

// Checkbox rendered with each added task
// Used to mark a task as complete
const CheckBox = (props) => {
	return (
		<input
			type="checkbox"
			className="checkbox"
			id={props.id}
			onClick={props.statusCheck}
			defaultChecked={props.status}
		/>
	);
};

export default CheckBox;
