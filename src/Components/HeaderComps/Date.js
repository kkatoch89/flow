import React from 'react';
import moment from 'moment';

// Date functional component using react-moment library
// Display live date
const Date = (props) => {
	return (
		<time className="date">{moment.tz(moment(), props.tz).format('LL')}</time>
	);
};

export default Date;
