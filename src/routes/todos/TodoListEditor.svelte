<script lang="ts">
	import IconTextButton from "$lib/components/IconTextButton.svelte"
	import { todos } from "$lib/stores/stores"
	import Check from "$lib/svg/Check.svelte"
	import Plus from "$lib/svg/Plus.svelte"
	import Trash from "$lib/svg/Trash.svelte"
	import XMark from "$lib/svg/XMark.svelte"
	import type { Todo, TodoList } from "$lib/types"


	export let list: TodoList
	export let editMode: boolean

	// everytime the editmode changes to true the component is first rendered
	// which is why this is sufficient and it is not necessary to listen to it
	// being 'true'
	let edits = structuredClone(list)

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


<!-- Header -->
<div class='flex items-center justify-between mb-2'>
	<input class='input px-4 py-2 h3' bind:value={edits.title} />

	<!-- Buttons right -->
	<div class='flex'>
		<IconTextButton onClick={() => confirmEdits()} >
			<Check />
		</IconTextButton>
		<IconTextButton onClick={() => addEntry()} >
			<Plus />
		</IconTextButton>
		<IconTextButton onClick={() => cancelEditMode()} >
			<XMark />
		</IconTextButton>
	</div>
</div>


<!-- List -->
<div class='flex flex-col gap-1'>
	{#each edits.todos as entry}
		<div class='flex items-start'>
			<textarea class='textarea py-1 px-3 {entry.text ? '' : 'input-error'}'
				rows='1' bind:value={entry.text} />
			<IconTextButton visible={editMode} onClick={() => removeTodo(entry)}>
				<Trash />
			</IconTextButton>
		</div>
	{:else}
		<div class='text-center' >No entries</div>
	{/each}
</div>

