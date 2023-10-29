<script lang="ts">
	import Card from "$lib/components/Card.svelte"
	import type { TodoList } from "$lib/types"

	export let list: TodoList

	let editMode = false
	let edits = structuredClone(list)

</script>


<Card >
	<div class='flex items-center justify-between'>
		{#if editMode}
			<input class='input px-4 py-2 h3' bind:value={list.title} />
		{:else}
			<h3 class='h3'>{list.title}</h3>
		{/if}

		<!-- Buttons right -->
		<div class='flex'>

		</div>
	</div>

</Card>



