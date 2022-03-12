import Head from 'next/head';
import Counter from '../lib/Counter';
import HelloWorld from '../lib/HelloWorld';
import TemperatureConverter from '../lib/TemperatureConverter';

export default function Home() {
	return (
		<>
			<Head>
				<title>Next</title>
			</Head>
			<main>
				<h1>Next</h1>
				<h2>Hello World</h2>
				<HelloWorld />
				<h2>Counter</h2>
				<Counter />
				<h2>Temperature Converter</h2>
				<TemperatureConverter />
			</main>
		</>
	);
}
