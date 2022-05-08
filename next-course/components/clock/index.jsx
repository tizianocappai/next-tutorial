import React, { useState, useEffect } from 'react';

const Clock = () => {
	const [time, setTime] = useState(new Date().toLocaleString());

	const tick = () => {
		setTime(new Date().toLocaleString());
	};

	useEffect(() => {
		setInterval(tick, 1000);
	});

	return <h1 className='clock'>{time}</h1>;
};

export default Clock;
