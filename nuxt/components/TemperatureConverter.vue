<script setup lang="ts">
const c = ref<number>(undefined);
const f = ref<number>(undefined);
function handleCelsius() {
	if (isNaN(c.value)) return;
	f.value = c.value * (9 / 5) + 32;
}
function handleFahrenheit() {
	if (isNaN(f.value)) return;
	c.value = (f.value - 32) * (5 / 9);
}
</script>
<template>
	<label>
		<input v-model="c" @input="handleCelsius" />
		Celsius
	</label>
	=
	<label>
		<input v-model="f" @input="handleFahrenheit" />
		Fahrenheit
	</label>
</template>
