<script setup lang="ts">
const type = ref('one-way');
const today = new Date().toISOString().split('T')[0];
const startDate = ref(today);
const startInvalid = computed(() => isNaN(new Date(startDate.value).valueOf()));
const returnDate = ref(today);
const returnInvalid = computed(() => isNaN(new Date(returnDate.value).valueOf()));
function handleClick() {
	if (type.value === 'one-way') {
		alert(`You have booked a one-way flight for ${startDate.value}`);
	} else {
		alert(`You have booked a return flight from ${startDate.value} to ${returnDate.value}`);
	}
}
</script>
<template>
	<select v-model="type">
		<option value="one-way">one-way flight</option>
		<option value="return">return flight</option>
	</select>
	<br />
	<input v-model="startDate" :class="{ error: startInvalid }" />
	<br />
	<input v-model="returnDate" :class="{ error: returnInvalid }" :disabled="type !== 'return'" />
	<br />
	<button
		:disabled="
			startInvalid ||
			returnInvalid ||
			(type === 'return' && new Date(startDate) >= new Date(returnDate))
		"
		@click="handleClick"
	>
		book
	</button>
</template>

<style>
.error {
	background-color: red;
}
</style>
