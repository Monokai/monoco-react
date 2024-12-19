import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { CornerOptions } from '@monokai/monoco';
import { Monoco } from '../src';
import InputField from './InputField';

const rootElement = document.getElementById('app');

const App = () => {
	const [isActive, setActive] = useState(true);
	const [options, setOptions] = useState({
		borderRadius: 32,
		background: '#f00',
		border: [2, '#000']
		// clip: true
	})

	function onClick() {
		setOptions({
			...options,
			borderRadius: options.borderRadius + 4
		});

		console.log('click', options.borderRadius)
	}

	function onToggle() {
		setActive(!isActive)

		console.log(isActive)
	}

	const ref = useRef(null)

	return (
		<div>
			<h1>Monoco Test</h1>
			<div>
				<InputField />
			</div>
			<button onClick={onClick}>increase</button>
			<button onClick={onToggle}>toggle</button>
			{isActive && (
				<Monoco ref={ref} precision={4} className="block" {...options as CornerOptions} onClick={() => {}}>
					monoco
				</Monoco>
			)}
		</div>
	)
};

if (rootElement) {
	createRoot(rootElement).render(<App />);
}