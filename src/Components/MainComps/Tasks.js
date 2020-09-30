import React from 'react';
import Task from './Task.js';
import './Main.css';

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
