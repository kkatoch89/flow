import React from 'react';
import LiveClock from 'react-live-clock';

function Clock() {
	return (
		<div className="clock">
			<LiveClock format="hh:mm:ss" ticking="true" timezone="US/Pacific" />
		</div>
	);
}

export default Clock;
