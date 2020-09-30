import React from 'react';
import Task from './Task.js';

const Tasks = (props) => {
	const tasksArray = props.tasksArr;
	return (
		<ul className="tasks">
			{tasksArray.map((task, index) => {
				return (
					<Task
						id={task.key}
						task={task.eachTask}
						key={task.key}
						delClick={(e) => {
							props.delClick(task.key);
						}}
					/>
				);
			})}
		</ul>
	);
};

export default Tasks;
