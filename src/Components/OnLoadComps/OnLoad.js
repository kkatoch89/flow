import React, { Component } from 'react';
import Logo from '../HeaderComps/Logo.js';
import './OnLoad.css';

// Creating effect on page load
// Connected to Header component (props from Header comp)
// Once Header component successfully completes API call and setState-
// 2nd param of setState is function that initiates fade-away animation
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
