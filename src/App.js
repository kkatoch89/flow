import React, { Component } from 'react';
import OnLoad from './Components/OnLoadComps/OnLoad.js';
import Header from './Components/HeaderComps/Header.js';
import MainComp from './Components/MainComps/MainComp.js';
import Footer from './Components/FooterComps/Footer.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* Header component */}
				<Header />
				{/* Main component */}
				<MainComp />
				{/* Footer component */}
				<Footer />
			</div>
		);
	}
}

export default App;
