import React from 'react';
import moment from 'moment';

const Date = (props) => {
	return (
		<time className="date">{moment.tz(moment(), props.tz).format('LL')}</time>
	);
};

export default Date;
