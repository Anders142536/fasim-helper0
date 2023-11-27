<script lang="ts">
	import Card from "$lib/components/Card.svelte"
	import IconTextButton from "$lib/components/IconTextButton.svelte"
	import { Month } from "$lib/enums/Month"
	import Eye from "$lib/svg/Eye.svelte"
	import EyeSlash from "$lib/svg/EyeSlash.svelte"
	import ViewLayout from "../ViewLayout.svelte"
	import CollapsedMonth from "./CollapsedMonth.svelte"
	import ExpandedMonth from "./ExpandedMonth.svelte"
	import FiveColumnCalendarGrid from "./FiveColumnCalendarGrid.svelte"

	let showEmptyMonths = true
	let selected: Month | null = null

	const toggleShowEmptyMonths = () => { showEmptyMonths = !showEmptyMonths}

</script>

<ViewLayout>
	<FiveColumnCalendarGrid additionalClass='px-4 justify-items-center'>
		<div />
		<h4 class='h4'>Plant</h4>
		<h4 class='h4'>Harvest</h4>
		<h4 class='h4'>Sell</h4>
		<h4 class='h4'>Notes</h4>
	</FiveColumnCalendarGrid>
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
