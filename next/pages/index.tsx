import Counter from '../lib/Counter';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Next</title>
			</Head>
			<main>
				<h1>Next</h1>
				<h2>Counter</h2>
				<Counter />
			</main>
		</>
	);
}
