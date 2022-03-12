import { useState } from 'react';
export default function Counter() {
	const [count, setCount] = useState<number>(0);
	function increment() {
		setCount(count + 1);
	}
	return <button onClick={increment}>Clicks: {count}</button>;
}
