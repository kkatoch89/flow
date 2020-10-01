import React, { Component } from 'react';
import firebase from '../../firebase';
import InputComp from './InputComp.js';
import Tasks from './Tasks.js';

class MainComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			usrInput: '',
		};
	}

	// Link with Firebase to store and manage tasks
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
					eachTask: data[key].task,
					complete: data[key].complete,
				});
			}

			// Update our React state for tasks
			this.setState({
				tasks: newState,
			});
		});
	}

	// Method for onChange listener on input element
	addTaskHandler = (e) => {
		// Capitalize first letter of all strings typed
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

		// Creating task obj
		const newTask = {
			task: this.state.usrInput,
			complete: false,
		};

		if (!this.state.usrInput.length) {
			this.setState({ validationAlert: true });
		} else {
			// Add new record to Firebase
			dbRef.push(newTask);
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

	handleComplete = (taskKey, status) => {
		// Open up Firebase portal
		const dbRef = firebase.database().ref('tasks');

		// Update status of complete to !complete
		const statusUpdate = {
			complete: !status,
		};

		// Update status (!complete) in Firebase
		dbRef.child(taskKey).update(statusUpdate);
	};

	render() {
		const { tasks, usrInput } = this.state;
		return (
			<main>
				<div className="wrapper">
					<section>
						{/* Form with input and button */}
						<InputComp
							value={usrInput}
							change={this.addTaskHandler}
							click={this.submitTaskHandler}
						/>
						{/* Task list */}
						<Tasks
							tasksArr={tasks}
							delClick={this.handleRemove}
							status={this.handleComplete}
						/>
					</section>
				</div>
			</main>
		);
	}
}

export default MainComp;
