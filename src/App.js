import React, { Component } from 'react';
import Header from './Components/HeaderComps/Header.js';
import MainComp from './Components/MainComps/MainComp.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* Header component */}
				<Header />
				{/* Main component */}
				<MainComp />
			</div>
		);
	}
}

export default App;
