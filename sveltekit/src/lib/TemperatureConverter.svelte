<script lang="ts">
	let c: number;
	let f: number;
	function handleCelsius() {
		if (isNaN(c)) return;
		f = c * (9 / 5) + 32;
	}
	function handleFahrenheit() {
		if (isNaN(f)) return;
		c = (f - 32) * (5 / 9);
	}
</script>

<label>
	<input bind:value={c} on:input={handleCelsius} />
	Celsius
</label>
=
<label>
	<input bind:value={f} on:input={handleFahrenheit} />
	Fahrenheit
</label>
