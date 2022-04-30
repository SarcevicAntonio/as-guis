<script>
	import Addition from '$lib/Addition.svelte';
	import Counter from '$lib/Counter.svelte';
	import FlightBooker from '$lib/FlightBooker.svelte';
	import HelloWorld from '$lib/HelloWorld.svelte';
	import TemperatureConverter from '$lib/TemperatureConverter.svelte';
	import '../styles.css';
</script>

<main>
	<h1>AS GUIs SvelteKit</h1>
	<p>
		This is a live version of an implementation of
		<a href="https://eugenkiss.github.io/7guis/">7GUIs</a> (+ extra) in
		<a href="https://kit.svelte.dev/">SvelteKit</a> (<a href="https://svelte.dev/">Svelte</a>).
	</p>
	<ul>
		<li>
			<a href="https://github.com/SarcevicAntonio/as-guis/">🐙 Visit project repo</a>
		</li>
		<li>
			<a href="https://github.com/SarcevicAntonio/as-guis/tree/main/sveltekit/src/lib">
				📝 Browse component source code.
			</a>
		</li>
	</ul>

	<div class="articles">
		<article>
			<div class="title">
				<h2>Hello World</h2>
				<a
					href="https://github.com/SarcevicAntonio/as-guis/blob/main/sveltekit/src/lib/HelloWorld.svelte"
				>
					📝
				</a>
			</div>
			<div class="content">
				<HelloWorld />
			</div>
		</article>
		<article>
			<div class="title">
				<h2>Counter</h2>
				<a
					href="https://github.com/SarcevicAntonio/as-guis/blob/main/sveltekit/src/lib/Counter.svelte"
				>
					📝
				</a>
			</div>
			<div class="content">
				<Counter />
			</div>
		</article>
		<article>
			<div class="title">
				<h2>Temperature Converter</h2>
				<a
					href="https://github.com/SarcevicAntonio/as-guis/blob/main/sveltekit/src/lib/TemperatureConverter.svelte"
				>
					📝
				</a>
			</div>
			<div class="content">
				<TemperatureConverter />
			</div>
		</article>
		<article>
			<div class="title">
				<h2>Flight Booker</h2>
				<a
					href="https://github.com/SarcevicAntonio/as-guis/blob/main/sveltekit/src/lib/FlightBooker.svelte"
				>
					📝
				</a>
			</div>
			<div class="content">
				<FlightBooker />
			</div>
		</article>
		<article>
			<div class="title">
				<h2>Addition</h2>
				<a
					href="https://github.com/SarcevicAntonio/as-guis/blob/main/sveltekit/src/lib/Addition.svelte"
				>
					📝
				</a>
			</div>
			<div class="content">
				<Addition />
			</div>
		</article>
	</div>
</main>
