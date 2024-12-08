import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import { Monoco } from '../src';

const rootElement = document.getElementById('app');

const App = () => {
	const [isActive, setActive] = useState(true);
	const [options, setOptions] = useState({
		radius: 32,
		background: '#f00',
		border: [2, '#000']
		// clip: true
	})

	function onClick() {
		setOptions({
			...options,
			radius: options.radius + 4
		});

		console.log('click', options.radius)
	}

	function onToggle() {
		setActive(!isActive)

		console.log(isActive)
	}


	return (
		<div>
			<h1>Monoco Test</h1>
			<button onClick={onClick}>increase</button>
			<button onClick={onToggle}>toggle</button>
			{isActive && (
				<Monoco className="block" {...options} onClick={() => {}}>monoco</Monoco>
			)}
		</div>
	)
};

if (rootElement) {
	createRoot(rootElement).render(<App />);
}