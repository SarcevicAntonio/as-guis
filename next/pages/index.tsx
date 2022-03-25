import Head from 'next/head';
import Counter from '../lib/Counter';
import FlightBooker from '../lib/FlightBooker';
import HelloWorld from '../lib/HelloWorld';
import TemperatureConverter from '../lib/TemperatureConverter';

export default function Home() {
	return (
		<>
			<Head>
				<title>Next</title>
			</Head>
			<main>
				<h1>AS GUIs Next</h1>

				<p>
					This is a live version of an implementation of{' '}
					<a href="https://eugenkiss.github.io/7guis/">7GUIs</a> (+ extra) in{' '}
					<a href="https://nextjs.org/">Next</a> (<a href="https://reactjs.org/">React</a>).
				</p>
				<ul>
					<li>
						<a href="https://github.com/SarcevicAntonio/as-guis/">🐙 Visit project repo</a>
					</li>
					<li>
						<a href="https://github.com/SarcevicAntonio/as-guis/tree/main/next/lib">
							📝 Browse component source code.
						</a>
					</li>
				</ul>

				<div className="articles">
					<article>
						<div className="title">
							<h2>Hello World</h2>
							<a href="https://github.com/SarcevicAntonio/as-guis/blob/main/next/lib/HelloWorld.tsx">
								📝
							</a>
						</div>
						<div className="content">
							<HelloWorld />
						</div>
					</article>
					<article>
						<div className="title">
							<h2>Counter</h2>
							<a href="https://github.com/SarcevicAntonio/as-guis/blob/main/next/lib/Counter.tsx">
								📝
							</a>
						</div>
						<div className="content">
							<Counter />
						</div>
					</article>
					<article>
						<div className="title">
							<h2>Temperature Converter</h2>
							<a href="https://github.com/SarcevicAntonio/as-guis/blob/main/next/lib/TemperatureConverter.tsx">
								📝
							</a>
						</div>
						<div className="content">
							<TemperatureConverter />
						</div>
					</article>
					<article>
						<div className="title">
							<h2>Flight Booker</h2>
							<a href="https://github.com/SarcevicAntonio/as-guis/blob/main/next/lib/FlightBooker.tsx">
								📝
							</a>
						</div>
						<div className="content">
							<FlightBooker />
						</div>
					</article>
				</div>
			</main>
		</>
	);
}
