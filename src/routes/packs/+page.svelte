<script lang="ts">
	import ViewLayout from '../ViewLayout.svelte'
	import IconButton from '$lib/components/IconButton.svelte'
	import Plus from '$lib/svg/Plus.svelte'
	import ArchiveBox from '$lib/svg/ArchiveBox.svelte'
	import { packs } from '$lib/stores/stores'
	import type { Pack } from '$lib/types'
	import { onMount } from 'svelte'

	let packList: Pack[] = []
	
	/*
	This still crashes due to one very specific issue. Sveltekit will try to SSR
	this components and apparently everything that is imported by it. This crashes,
	as node has no idea what localStorage is. This would be recalculated client
	side, and that would replace the result from the SSR.

	According to the docs (https://svelte.dev/docs/svelte#onmount) the content
	of `onMount` is not rendered in SSR, but the content of stores.ts still is,
	even when not imported

	There are ways to "fix" this by making the triggered code safe for Node:
	https://stackoverflow.com/questions/65592525/how-can-i-fix-localstorage-error-in-sapper-svelte

	As this application should be with a backend anyways this should not be an
	issue once there is actual backend, as then local storage will no longer be
	needed.
	 */
	onMount(() => {
		packs.subscribe((packs) => {
				packList = packs
		})
	})

</script>

<ViewLayout>
	{#each packList as pack}
		pack.name
	{:else}
		No packs defined
	{/each}

	<svelte:fragment slot="toolbar">
		<IconButton label="Add pack">
			<Plus />
		</IconButton>
		<IconButton label="History">
			<ArchiveBox	/>
		</IconButton>
	</svelte:fragment>
</ViewLayout>
