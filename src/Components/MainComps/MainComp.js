import React, { Component } from 'react';
import firebase from '../../firebase';
import Styles from './Main.css';
import InputComp from './InputComp.js';
import Tasks from './Tasks.js';

class MainComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			completedTasks: [],
			usrInput: '',
		};
	}

	componentDidMount() {
		// Open portal to Firebase
		const dbRef = firebase.database().ref('tasks');

		// Listen to value change
		dbRef.on('value', (response) => {
			// Clean up data from Firebase and store in state
			const newState = [];
			const data = response.val();

			for (const key in data) {
				// Push task inside of temporary array
				newState.push({
					key: key,
					eachTask: data[key],
				});
			}

			// Update our React state for tasks
			this.setState({
				tasks: newState,
			});
		});
	}

	addTaskHandler = (e) => {
		let usrInput =
			e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);

		this.setState({
			usrInput,
		});
	};

	// Take user input and store in Firebase
	// Reset input field
	submitTaskHandler = (e) => {
		e.preventDefault();

		// Open portal to Firebase
		const dbRef = firebase.database().ref('tasks');

		if (!this.state.usrInput.length) {
			this.setState({ validationAlert: true });
		} else {
			// Add new record to Firebase
			dbRef.push(this.state.usrInput);
			this.setState({
				usrInput: '',
			});
		}
	};

	// Get the specific task key to remove
	// Delete that specific task from Firebase
	handleRemove = (taskKey) => {
		// Open up Firebase portal
		const dbRef = firebase.database().ref('tasks');

		// Delete the task based on bookKey
		dbRef.child(taskKey).remove();
	};

	handleComplete = (taskKey) => {
		console.log();
	};

	render() {
		const { tasks, usrInput } = this.state;
		return (
			<main>
				<div className="wrapper">
					<section>
						<InputComp
							value={usrInput}
							change={this.addTaskHandler}
							click={this.submitTaskHandler}
						/>
						<Tasks tasksArr={tasks} delClick={this.handleRemove} />
					</section>
				</div>
			</main>
		);
	}
}

export default MainComp;
