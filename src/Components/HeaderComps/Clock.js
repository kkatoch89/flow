import React from 'react';
import LiveClock from 'react-live-clock';

function Clock() {
	return (
		<time className="clock">
			<LiveClock format="hh:mm:ss" ticking="true" timezone="US/Pacific" />
		</time>
	);
}

export default Clock;
