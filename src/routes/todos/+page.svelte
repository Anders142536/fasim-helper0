<script lang="ts">
	import IconTextButton from "$lib/components/IconTextButton.svelte"
	import { todos } from "$lib/stores/stores"
	import Plus from "$lib/svg/Plus.svelte"
	import ViewLayout from "../ViewLayout.svelte"
	import TodoList from "./TodoList.svelte"


</script>

<ViewLayout>
	{#each $todos as list}
		<TodoList {list} />
	{:else}
		No Todos defined
	{/each}

	<svelte:fragment slot="toolbar">
		<IconTextButton label="Add pack" onClick={() => todos.addList()}>
			<Plus />
		</IconTextButton>
	</svelte:fragment>

</ViewLayout>

