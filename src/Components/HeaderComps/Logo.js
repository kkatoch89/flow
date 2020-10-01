import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const Logo = (props) => {
	return (
		<>
			<div className={props.styling}>
				<FontAwesomeIcon icon={faCheckDouble} />
				<div>
					<h2>Flow</h2>
					<p>Get shit done</p>
				</div>
			</div>
		</>
	);
};

export default Logo;
