import React, { Component } from 'react';
import firebase from '../../firebase';
import Styles from '../../App.css';
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

	componentDidMount() {
		// Open portal to Firebase
		const dbRef = firebase.database().ref();

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
		this.setState({
			usrInput: e.target.value,
		});
	};

	// Take user input and store in Firebase
	// Reset input field
	submitTaskHandler = (e) => {
		e.preventDefault();

		// Open portal to Firebase
		const dbRef = firebase.database().ref();

		// Add new record to Firebase
		dbRef.push(this.state.usrInput);
		this.setState({
			usrInput: '',
		});
	};

	// Get the specific task key to remove
	// Delete that specific task from Firebase
	handleRemove = (taskKey) => {
		// Open up Firebase portal
		const dbRef = firebase.database().ref();

		// Delete the task based on bookKey
		dbRef.child(taskKey).remove();
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
