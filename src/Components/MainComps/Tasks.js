import React from 'react';
import Task from './Task.js';
import './Main.css';

// Array of task objects from status passed here
// Array is mapped and props are passed down to Task functional component-
// containing each unique task's props
// Also passing handler methods from class component as props for each task
const Tasks = (props) => {
	const tasksArray = props.tasksArr;
	return (
		<ul className="tasks">
			{tasksArray.map((task) => {
				return (
					<Task
						id={task.key}
						task={task.eachTask}
						status={task.complete}
						statusCheck={(e) => {
							props.status(task.key, task.complete);
						}}
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
