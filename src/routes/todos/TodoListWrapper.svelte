<script lang="ts">
	import Card from "$lib/components/Card.svelte"
	import type { TodoList } from "$lib/types"
	import TodoListViewer from "./TodoListViewer.svelte"
	import TodoListEditor from "./TodoListEditor.svelte"



	export let list: TodoList

	let editMode = false
</script>


<Card >
	
	{#if editMode}
		<TodoListEditor {list} bind:editMode={editMode} />
	{:else}
		<TodoListViewer {list} bind:editMode={editMode} />
	{/if}

</Card>
