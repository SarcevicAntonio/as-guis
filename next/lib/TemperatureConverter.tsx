import { ChangeEvent, useState } from 'react';
export default function () {
	const [c, setC] = useState<number | string>('');
	const [f, setF] = useState<number | string>('');
	function handleCelsius(e: ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setC(e.target.value);
		if (isNaN(+value)) return;
		setF(+value * (9 / 5) + 32);
	}
	function handleFahrenheit(e: ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setF(value);
		if (isNaN(+value)) return;
		setC((+value - 32) * (5 / 9));
	}
	return (
		<>
			<label>
				<input value={c} onInput={handleCelsius} />
				Celsius
			</label>
			=
			<label>
				<input value={f} onInput={handleFahrenheit} />
				Fahrenheit
			</label>
		</>
	);
}
