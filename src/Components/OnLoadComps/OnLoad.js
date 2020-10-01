import React, { Component } from 'react';
import Logo from '../HeaderComps/Logo.js';
import './OnLoad.css';

class OnLoad extends Component {
	render() {
		return (
			<div className="onLoad">
				<Logo styling="onLoadLogoBox" />
			</div>
		);
	}
}

export default OnLoad;
