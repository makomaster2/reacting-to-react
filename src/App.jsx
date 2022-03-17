import React, { useEffect, useState } from 'react';
import Greeter from './components/Greeter';

const App = () => {
	const [username, setUsername] = useState('');
	const [loaded, setLoaded] = useState(false);

	const handleUsernameChange = e => setUsername(e.target.value);

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true);
		}, 3000);
	}, []);

	if (loaded) {
		return (
			<div className='text-center'>
				<h1>Hello there</h1>
				<Greeter name={'Gage'} phrase={'Hi there'} />
				<Greeter name={'Branwin'} phrase={'Wut up'} />
				<Greeter name={'Jessie'} phrase={'How are you'} />
				<input value={username} onChange={handleUsernameChange} />
				<p>You are logging in as: <span style={{color: 'blue'}}>{username}</span></p>
			</div>
		);
	} else {
		return (
			<div className='text-center'>
				<h1>Website Loading...</h1>
				<button onClick={() => setLoaded(true)}>Click Here to Load</button>
			</div>
		);
	}
};

export default App;
