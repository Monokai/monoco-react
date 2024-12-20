import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { CornerOptions } from '@monokai/monoco';
import { Monoco } from '../src';
import InputField from './InputField';
import { Menu } from '@ark-ui/react/menu'

const rootElement = document.getElementById('app');

const App = () => {
	const [isActive, setActive] = useState(false);
	const [hasClass, setClass] = useState(false);
	const [options, setOptions] = useState({
		borderRadius: 32,
		// background: '#f00',
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

	function onToggleClass() {
		setClass(!hasClass)

		console.log(hasClass)
	}

	const ref = useRef(null)
	const ref2 = useRef(null)

	const children = [1, 2, 3]

	const bgColor = isActive ? 'rgb(255 0 0)' : undefined;

	return (
		<div>
			<h1>Monoco Test</h1>
			<div>
				<InputField />
			</div>
			<button onClick={onClick}>increase</button>
			<button onClick={onToggle}>toggle</button>
			<button onClick={() => setClass(!hasClass)}>toggle class</button>
			<Monoco ref={ref} background={bgColor} precision={4} className="block" {...options as CornerOptions}>
				<div>monoco</div>
			</Monoco>
			<nav className="menu">
				{children.map((child, i) => (
					<Menu.Root key={i} positioning={{gutter: 10}}>
						<Menu.Trigger>
							Open menu <Menu.Indicator>➡️</Menu.Indicator>
						</Menu.Trigger>
						<Menu.Positioner>
							<Monoco
								as={Menu.Content}
								className={['block2', ...[hasClass ? ['active'] : undefined]].join(' ')}
								background={'#f00'}
								borderRadius={16}
								smoothing={1}
								onResize={() => console.log('resize')}
							>
							{/*<Menu.Content className="block2">*/}
								<Menu.Item key="1"><div>hoi</div></Menu.Item>
								<Menu.Item key="2"><div>hai</div></Menu.Item>
								<Menu.Item key="3"><div>hallo</div></Menu.Item>
							</Monoco>
							{/*</Menu.Content>*/}
						</Menu.Positioner>
					</Menu.Root>
				))}
			</nav>
		</div>
	)
};

if (rootElement) {
	createRoot(rootElement).render(<App />);
}