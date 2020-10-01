import React, { Component } from 'react';
import Styles from './Header.css';
import axios from 'axios';
import UserName from './UserName.js';
import Logo from './Logo.js';
import Clock from './Clock.js';
import Date from './Date.js';
import OnLoad from '../OnLoadComps/OnLoad.js';

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
			dateTime: {
				timeZone: 'US/Pacific',
			},
			loaded: false,
		};
	}

	componentDidMount() {
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
			// console.log(res);
			const randIndx = Math.floor(Math.random() * res.data.length);
			const randImg = res.data[randIndx].urls.full;
			this.setState((prevState) => {
				let bkground = Object.assign({}, prevState.bkground);
				bkground.url = randImg;
				bkground.headerImg = `linear-gradient(0deg, rgba(51,51, 51,.5), rgba(64, 115, 158,.5)), url(
						${randImg}
						)`;
				return { bkground, loaded: true };
			});
			// console.log('ComponentDidMount: ', this.state.bkground.headerImg);
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
				<OnLoad loaded={this.state.loaded} />
				<div className="wrapper">
					<div className="logoClockBox">
						<Logo styling="headerLogoBox" />{' '}
						<div className="dateTimeBox">
							<Clock />
							<Date tz={this.state.dateTime.timeZone} />
						</div>
					</div>
					<UserName usrName={name} />
				</div>
			</header>
		);
	}
}

export default Header;
