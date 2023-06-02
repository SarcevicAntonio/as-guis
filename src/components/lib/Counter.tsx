import { useState } from 'react';
export default function () {
	const [count, setCount] = useState<number>(0);
	function increment() {
		setCount(count + 1);
	}
	return (
		<>
			<span>{count}</span>
			<button onClick={increment}>Count</button>
		</>
	);
}
