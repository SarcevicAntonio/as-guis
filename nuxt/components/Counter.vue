<script setup lang="ts">
	import { ref } from 'vue';
	const count = ref<number>(0);
	function increment() {
		count.value += 1;
	}
</script>
<template>
	<button @click="increment()">Clicks: {{ count }}</button>
</template>
