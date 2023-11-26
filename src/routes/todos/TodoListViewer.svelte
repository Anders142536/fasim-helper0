<script lang="ts">
	import IconTextButton from "$lib/components/IconTextButton.svelte"
	import { todos } from "$lib/stores/stores"
	import Pencil from "$lib/svg/Pencil.svelte"
	import Trash from "$lib/svg/Trash.svelte"
	import type { Todo, TodoList } from "$lib/types"

	export let list: TodoList
	export let editMode: boolean

	const startEditMode = () => {
		editMode = true
	}

	const toggleCheck = (entry : Todo) => {
		entry.done = !entry.done
		todos.save(list)
	}
</script>

<!-- Header -->
<div class='flex items-center justify-between mb-2'>
	<h3 class='h3'>{list.title}</h3>

	<!-- Buttons right -->
	<div class='flex'>
		<IconTextButton onClick={() => startEditMode()}>
			<Pencil />
		</IconTextButton>
		<IconTextButton style='text-error-500'
			onClick={() => todos.deleteList(list.id)} >
			<Trash />
		</IconTextButton>
	</div>
</div>

<!-- List -->
<div class='flex flex-col gap-1'>
	{#each list.todos as entry}
		<label class='flex gap-2' >
			<input class='checkbox !border-surface-400 flex-none mt-[2px]'
				checked={entry.done}
				on:change={() => toggleCheck(entry)}
				type='checkbox' />
			<div class='{entry.done ? 'line-through' : ''}'>{entry.text}</div>
		</label>

	{:else}
		<div class='text-center'>No entries</div>
	{/each}
</div>






