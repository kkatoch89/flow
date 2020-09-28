import React, { Component } from 'react';
import Styles from '../../App.css';
import axios from 'axios';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bkground: {
				usrChoice: '',
				url: '',
			},
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
			// Code to run after data comes back from API
			// Path: res.data[index].urls.full
			// console.log('Pointer', res.data[1].urls.full);
			// const image = res.data[1].urls.full;
			const randIndx = Math.floor(Math.random() * res.data.length);
			console.log(randIndx);
			this.setState((prevState) => {
				let bkground = Object.assign({}, prevState.bkground);
				bkground.url = res.data[randIndx].urls.full;
				return { bkground };
			});
		});
		console.log('Success!', this.state.bkground.url);
	}

	render() {
		const headerImg = {
			backgroundImage:
				'linear-gradient(0deg, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(' +
				this.state.bkground.url +
				')',
		};
		console.log('rendered', this.state.bkground.url);
		return <header style={headerImg}></header>;
	}
}

export default Header;
