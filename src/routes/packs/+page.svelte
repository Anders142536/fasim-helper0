<script lang="ts">
	import ViewLayout from '../ViewLayout.svelte'
	import IconButton from '../IconButton.svelte'
</script>

<ViewLayout>
	<h1 slot="content">Packs</h1>

	<svelte:fragment slot="toolbar">
		<IconButton icon="plus" label="Add pack" />
		<IconButton icon="trash" label="History" />
	</svelte:fragment>
</ViewLayout>
