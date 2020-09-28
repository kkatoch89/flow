import React from 'react';
import Styles from '../../App.css';
import CheckBox from './CheckBox.js';
import DelBtn from './DelBtn.js';

const Task = (props) => {
	return (
		<li>
			<p>
				<CheckBox />
				{props.task}
				<DelBtn delClick={props.delClick} />
			</p>
		</li>
	);
};

export default Task;
