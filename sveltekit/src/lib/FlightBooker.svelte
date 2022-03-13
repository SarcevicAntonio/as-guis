<script lang="ts">
	let type: string;
	let today = new Date().toISOString().split('T')[0];
	let startDate = today;
	$: startInvalid = isNaN(new Date(startDate).valueOf());
	let returnDate = today;
	$: returnInvalid = isNaN(new Date(returnDate).valueOf());
	function handleClick() {
		if (type === 'one-way') {
			alert(`You have booked a one-way flight for ${startDate}`);
		} else {
			alert(`You have booked a return flight from ${startDate} to ${returnDate}`);
		}
	}
</script>

<select bind:value={type}>
	<option value="one-way">one-way flight</option>
	<option value="return">return flight</option>
</select>
<br />
<input bind:value={startDate} class:error={startInvalid} />
<br />
<input bind:value={returnDate} class:error={returnInvalid} disabled={type !== 'return'} />
<br />
<button
	disabled={startInvalid ||
		returnInvalid ||
		(type === 'return' && new Date(startDate) >= new Date(returnDate))}
	on:click={handleClick}
>
	book
</button>

<style>
	.error {
		background-color: red;
	}
</style>
