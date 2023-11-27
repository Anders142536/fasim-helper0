<script lang="ts">
	import Card from "$lib/components/Card.svelte"
	import IconTextButton from "$lib/components/IconTextButton.svelte"
	import { Month } from "$lib/enums/Month"
	import Eye from "$lib/svg/Eye.svelte"
	import EyeSlash from "$lib/svg/EyeSlash.svelte"
	import ViewLayout from "../ViewLayout.svelte"
	import CollapsedMonth from "./CollapsedMonth.svelte"
	import ExpandedMonth from "./ExpandedMonth.svelte"

	let showEmptyMonths = true
	let selected: Month | null = null

	const toggleShowEmptyMonths = () => { showEmptyMonths = !showEmptyMonths}

</script>

<ViewLayout>
	{#each Object.values(Month) as month}
		<Card>
			{#if selected === month}
				<ExpandedMonth />
			{:else}
				<CollapsedMonth {month}/>
			{/if}
		</Card>
	{/each}

	<svelte:fragment slot='toolbar'>
		{#if showEmptyMonths}
			<IconTextButton label='Hide empty months'
				onClick={() => toggleShowEmptyMonths()} >
				<EyeSlash />
			</IconTextButton >
		{:else}
			<IconTextButton label='Show empty months'
				onClick={() => toggleShowEmptyMonths()} >
				<Eye />
			</IconTextButton >
		{/if}
			
	</svelte:fragment>
</ViewLayout>
