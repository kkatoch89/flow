import React, { Component } from 'react';
import Logo from '../HeaderComps/Logo.js';
import './OnLoad.css';

const OnLoad = (props) => {
	let loadAnimation = 'onLoad';
	if (props.loaded) {
		loadAnimation = 'onLoad fadeOut';
	}

	return (
		<div className={loadAnimation}>
			<Logo styling="onLoadLogoBox" />
		</div>
	);
};

export default OnLoad;

// class OnLoad extends Component {
// 	render() {
// 		return (
// 			<div className="onLoad">
// 				<Logo styling="onLoadLogoBox" />
// 			</div>
// 		);
// 	}
// }

// export default OnLoad;
