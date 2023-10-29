<script lang="ts">
	import ViewLayout from '../ViewLayout.svelte'
	import IconTextButton from '$lib/components/IconTextButton.svelte'
	import Plus from '$lib/svg/Plus.svelte'
	import ArchiveBox from '$lib/svg/ArchiveBox.svelte'
	import { packs } from '$lib/stores/stores'
	import Pack from './Pack.svelte'

	let showHistory = false


</script>

<ViewLayout>
	{#each $packs.filter((p) => p.isArchived === showHistory) as pack}
		<Pack {pack} />
	{:else}
		No packs defined
	{/each}

	<svelte:fragment slot="toolbar">
		<IconTextButton label="Add pack" onClick={() => packs.addPack()}>
			<Plus />
		</IconTextButton>
		{#if showHistory }
			<IconTextButton label="Active Packs" onClick={() => showHistory = !showHistory}>
				<ArchiveBox	/>
			</IconTextButton>
		{:else}
			<IconTextButton label="History" onClick={() => showHistory = !showHistory}>
				<ArchiveBox	/>
			</IconTextButton>
		{/if}
	</svelte:fragment>
</ViewLayout>
