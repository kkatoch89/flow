import React, { Component } from 'react';
// import axios from 'axios';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	/*
	componentDidMount() {
		const apiKey = 'II3ASpAqNfI4gpWE2HdYIORRcGNtpm5N6UBeF2cBQQc';
		axios({
			method: 'GET',
			url: 'https://api.unsplash.com/',
			dataResponse: 'json',
			// Stuff that goes after the question mark, query parameters
			params: {
				key: apiKey,
				format: 'json',
			},
		}).then((res) => {
			// Code to run after data comes back from API
		});
	}
	*/

	render() {
		return <header></header>;
	}
}

export default Header;
