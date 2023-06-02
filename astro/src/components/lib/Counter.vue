<script setup lang="ts">
const count = ref<number>(0);
function increment() {
	count.value += 1;
}
</script>
<template>
	<span>{{ count }}</span>
	<button @click="increment">Count</button>
</template>
