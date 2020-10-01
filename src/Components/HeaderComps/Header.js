import React, { Component } from 'react';
import Styles from './Header.css';
import axios from 'axios';
import UserName from './UserName.js';
import Logo from './Logo.js';
import Clock from './Clock.js';
import Date from './Date.js';
import OnLoad from '../OnLoadComps/OnLoad.js';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			bkground: {
				usrChoice: '',
				url: '',
				headerImg: '',
			},
			usr: {
				name: '',
			},
			dateTime: {
				timeZone: 'America/New_York',
			},
			loaded: false,
		};
	}

	// Unsplash Api call for random images for header background
	componentDidMount() {
		const apiKey = 'II3ASpAqNfI4gpWE2HdYIORRcGNtpm5N6UBeF2cBQQc';
		axios({
			method: 'GET',
			url: 'https://api.unsplash.com/photos',
			dataResponse: 'json',
			params: {
				client_id: apiKey,
				format: 'json',
			},
		}).then((res) => {
			const randIndx = Math.floor(Math.random() * res.data.length);
			const randImg = res.data[randIndx].urls.full;
			this.setState((prevState) => {
				let bkground = Object.assign({}, prevState.bkground);
				bkground.url = randImg;
				bkground.headerImg = `linear-gradient(0deg, rgba(51,51, 51,.5), rgba(64, 115, 158,.5)), url(
						${randImg}
						)`;
				// Return header image url, styling string and loaded state which is trigger-
				// for onload component animation to fire
				return { bkground, loaded: true };
			});
		});
	}

	render() {
		const {
			bkground: { usrChoice, url, headerImg },
			usr: { name },
		} = this.state;

		const heroImg = {
			backgroundImage: headerImg,
		};

		return (
			<header style={heroImg}>
				{/* OnLoad effect/animation */}
				<OnLoad loaded={this.state.loaded} />
				<div className="wrapper">
					<div className="logoClockBox">
						{/* Logo */}
						<Logo styling="headerLogoBox" />{' '}
						<div className="dateTimeBox">
							{/* Live clock */}
							<Clock tz={this.state.dateTime.timeZone} />
							{/* Live date */}
							<Date tz={this.state.dateTime.timeZone} />
						</div>
					</div>
					{/* User name/h1 element */}
					<UserName usrName={name} />
				</div>
			</header>
		);
	}
}

export default Header;
