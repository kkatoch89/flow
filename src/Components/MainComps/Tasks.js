import React from 'react';
import Task from './Task.js';

const Tasks = (props) => {
	const tasksArray = props.tasksArr;
	return (
		<ul>
			{tasksArray.map((task) => {
				return <Task task={task} />;
			})}
		</ul>
	);
};

export default Tasks;
