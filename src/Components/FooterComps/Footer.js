import React from 'react';
import Styles from './Footer.css';

// Footer functional component for 'Created at Juno' message
const Footer = () => {
	return (
		<footer>
			<div class="footer-bottom">
				<a href="https://junocollege.com/" class="copyright">
					CREATED AT JUNO COLLEGE
				</a>
				<p className="footerBottom">Copyright &copy; 2020 Juno College</p>
			</div>
		</footer>
	);
};

export default Footer;
