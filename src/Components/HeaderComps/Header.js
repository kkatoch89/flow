import React, { Component } from 'react';
import Styles from './Header.css';
import axios from 'axios';
import UserName from './UserName.js';
import Logo from './Logo.js';
import Clock from './Clock.js';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bkground: {
				usrChoice: '',
				url: '',
				headerImg: '',
			},
			usr: {
				name: 'John Smith',
			},
			clock: {
				timeZone: 'US/Pacific',
			},
		};
	}

	componentDidMount() {
		console.log('o');
		const apiKey = 'II3ASpAqNfI4gpWE2HdYIORRcGNtpm5N6UBeF2cBQQc';
		axios({
			method: 'GET',
			url: 'https://api.unsplash.com/photos',
			dataResponse: 'json',
			// Stuff that goes after the question mark, query parameters
			params: {
				client_id: apiKey,
				format: 'json',
			},
		}).then((res) => {
			console.log(res);
			const randIndx = Math.floor(Math.random() * res.data.length);
			const randImg = res.data[randIndx].urls.full;
			this.setState(
				(prevState) => {
					let bkground = Object.assign({}, prevState.bkground);
					bkground.url = randImg;
					bkground.headerImg = `linear-gradient(0deg, rgba(0,0,0,.6), rgba(0,0,0,.6)), url(
						${randImg}
						)`;
					return { bkground };
				},
				() => {
					console.log('SetState: ', this.state.bkground.headerImg);
				}
			);
			console.log('ComponentDidMount: ', this.state.bkground.headerImg);
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
				<div className="wrapper">
					<div className="logoClockBox">
						<Logo /> <Clock />
					</div>
					<UserName usrName={name} />
				</div>
			</header>
		);
	}
}

export default Header;
