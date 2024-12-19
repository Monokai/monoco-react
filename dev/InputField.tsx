import { useState } from 'react'
import { Monoco } from '../src'
import React from 'react'

export default props => {
	const [isFocused, setIsFocused] = useState(false)
	const [hasError, setError] = useState(false)

	return (
		<Monoco
			as="input"
			type="text"
			className="input-field"
			defaultValue="hoi"
			size={8}
			borderRadius={24}
			background="#eee"
			onChange={e => setError(e.target.value.length < 3)}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
			border={[
				[1, '#888'],
				[isFocused ? 2 : 0, '#24f'],
				[hasError ? 2 : 0, '#f24']
			]}
		/>
	)
}