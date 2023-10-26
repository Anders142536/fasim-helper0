<script lang="ts">
	import ViewLayout from '../ViewLayout.svelte'
	import IconButton from '$lib/components/IconButton.svelte'
	import Plus from '$lib/svg/Plus.svelte'
	import ArchiveBox from '$lib/svg/ArchiveBox.svelte'
	import { packs } from '$lib/stores/stores'


	function onHistory() {
		console.log('toggling to history view')

	}

</script>

<ViewLayout>
	{#each $packs as pack}
		<div class='card p-4'>
			{`Pack: ${pack.title}`}
		</div>
	{:else}
		No packs defined
	{/each}

	<svelte:fragment slot="toolbar">
		<IconButton label="Add pack" onClick={() => packs.addPack()}>
			<Plus />
		</IconButton>
		<IconButton label="History" onClick={onHistory}>
			<ArchiveBox	/>
		</IconButton>
	</svelte:fragment>
</ViewLayout>
