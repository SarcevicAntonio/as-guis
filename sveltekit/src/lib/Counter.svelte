<script lang="ts">
	let count: number = 0;
	function increment() {
		count += 1;
	}
</script>

<span>
	{count}
</span>
<button on:click={increment}> Count </button>
