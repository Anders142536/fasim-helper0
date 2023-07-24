<script lang="ts">
	import ViewLayout from '../ViewLayout.svelte'
	import IconButton from '$lib/components/IconButton.svelte'
	import ArchiveBoxX from '$lib/svg/ArchiveBoxX.svelte'
</script>

<ViewLayout>
	<h1 slot="content">Packs</h1>

	<svelte:fragment slot="toolbar">
		<IconButton label="Add pack">
			<ArchiveBoxX />
		</IconButton>
		<IconButton label="History">
			<ArchiveBoxX />
		</IconButton>
	</svelte:fragment>
</ViewLayout>
