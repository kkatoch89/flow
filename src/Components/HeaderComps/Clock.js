import React from 'react';
import LiveClock from 'react-live-clock';

// Clock functional component using react-live-clock library
// Display live time based on timezone prop passed by Header class component
function Clock(props) {
	return (
		<time className="clock">
			<LiveClock format="hh:mm:ss" ticking="true" timezone={props.tz} />
		</time>
	);
}

export default Clock;
