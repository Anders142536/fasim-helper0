<script lang="ts">
	import Card from "$lib/components/Card.svelte"
	import IconTextButton from "$lib/components/IconTextButton.svelte"
	import { todos } from "$lib/stores/stores"
	import Check from "$lib/svg/Check.svelte"
	import Pencil from "$lib/svg/Pencil.svelte"
	import Plus from "$lib/svg/Plus.svelte"
	import Trash from "$lib/svg/Trash.svelte"
	import XMark from "$lib/svg/XMark.svelte"
	import type { Todo, TodoList } from "$lib/types"

	export let list: TodoList

	let editMode = false
	let edits = structuredClone(list)

	const startEditMode = () => {
		editMode = true
		edits = structuredClone(list)
	}

	const confirmEdits = () => {
		editMode = false
		todos.save(edits)

	}

	const addEntry = () => {
		edits.todos.push({
			done: false,
			text: 'New todo'
		})
		edits = edits
	}

	const removeTodo = (todo: Todo) => {
		edits.todos.splice(edits.todos.indexOf(todo), 1)
		edits = edits
	}

	const cancelEditMode = () => {
		editMode = false
	}
</script>


<Card >
	<!-- Header -->
	<div class='flex items-center justify-between mb-2'>
		{#if editMode}
			<input class='input px-4 py-2 h3' bind:value={edits.title} />
		{:else}
			<h3 class='h3'>{list.title}</h3>
		{/if}

		<!-- Buttons right -->
		<div class='flex'>
			{#if editMode }
				<IconTextButton onClick={() => confirmEdits()} >
					<Check />
				</IconTextButton>
				<IconTextButton onClick={() => addEntry()} >
					<Plus />
				</IconTextButton>
				<IconTextButton onClick={() => cancelEditMode()} >
					<XMark />
				</IconTextButton>

			<!-- VIEW MODE -->
			{:else}
				<IconTextButton onClick={() => startEditMode()}>
					<Pencil />
				</IconTextButton>
				<IconTextButton style='text-error-500' onClick={() => todos.deleteList(list.id)} >
					<Trash />
				</IconTextButton>
			{/if}

		</div>
	</div>

	{#if editMode}
		{#each edits.todos as entry}
			<div class='flex'>
				<input class='input py-1 px-3 {entry.text ? '' : 'input-error'}' bind:value={entry.text} />
				<IconTextButton visible={editMode} onClick={() => removeTodo(entry)}>
					<Trash />
				</IconTextButton>
			</div>
		{:else}
			No entries
		{/each}
	{:else}
		{#each list.todos as entry}
			<div>
				{entry.text}
			</div>

		{:else}
			No entries
		{/each}

	{/if}


</Card>



