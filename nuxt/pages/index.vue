<script setup>
useMeta({
	title: 'Nuxt'
});
</script>
<template>
	<main>
		<h1>AS GUIs Nuxt</h1>

		<p>
			This is a live version of an implementation of
			<a href="https://eugenkiss.github.io/7guis/">7GUIs</a> (+ extra) in
			<a href="https://nuxtjs.org/">Nuxt</a> (<a href="https://vuejs.org/">Vue</a>).
		</p>
		<ul>
			<li>
				<a href="https://github.com/SarcevicAntonio/as-guis/">🐙 Visit project repo</a>
			</li>
			<li>
				<a href="https://github.com/SarcevicAntonio/as-guis/tree/main/nuxt/components">
					📝 Browse component source code.
				</a>
			</li>
		</ul>

		<div class="articles">
			<article>
				<div class="title">
					<h2>Hello World</h2>
					<a
						href="https://github.com/SarcevicAntonio/as-guis/blob/main/nuxt/components/HelloWorld.vue"
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
						href="https://github.com/SarcevicAntonio/as-guis/blob/main/nuxt/components/Counter.vue"
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
						href="https://github.com/SarcevicAntonio/as-guis/blob/main/nuxt/components/TemperatureConverter.vue"
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
						href="https://github.com/SarcevicAntonio/as-guis/blob/main/nuxt/components/FlightBooker.vue"
					>
						📝
					</a>
				</div>
				<div class="content">
					<FlightBooker />
				</div>
			</article>
		</div>
	</main>
</template>
3
