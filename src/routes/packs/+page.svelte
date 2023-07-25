<script lang="ts">
	import ViewLayout from '../ViewLayout.svelte'
	import IconButton from '$lib/components/IconButton.svelte'
	import Plus from '$lib/svg/Plus.svelte'
	import ArchiveBox from '$lib/svg/ArchiveBox.svelte'
</script>

<ViewLayout>
	<h1 slot="content">Packs</h1>

	<svelte:fragment slot="toolbar">
		<IconButton label="Add pack">
			<Plus />
		</IconButton>
		<IconButton label="History">
			<ArchiveBox	/>
		</IconButton>
	</svelte:fragment>
</ViewLayout>
