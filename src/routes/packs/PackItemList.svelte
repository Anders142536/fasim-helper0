<script lang="ts">
	import IconTextButton from "$lib/components/IconTextButton.svelte"
	import { PackEntryType } from "$lib/enums/PackEntryType"
	import Plus from "$lib/svg/Plus.svelte"
	import XMark from "$lib/svg/XMark.svelte"
	import type { PackEntry } from "$lib/types"

	export let header: string
	export let list: PackEntry[]
	export let editMode: boolean

	const addEntry = () => {
		list.push({
			name: 'New Entry',
			type: PackEntryType.UNKNOWN,
			price: 0
		})
		list = list
	}

	const removeEntry = (e: PackEntry) => {
		list.splice(list.indexOf(e), 1)
		list = list
	}

</script>

<div class='flex mt-2 pr-8 justify-between'>
	<h4 class='h4'>{header}</h4>
	<IconTextButton visible={editMode} onClick={() => addEntry()}>
		<Plus />
	</IconTextButton>
</div>
<div class='w-full pl-4'>
		<div class='grid grid-definition gap-1 items-center justify-between'>
	{#each list as entry}
		{#if editMode}
			<input class='input py-1 px-3 {entry.name ? '' : 'input-error'}' bind:value={entry.name} />
			<select class='select' bind:value={entry.type} >
				{#each Object.values(PackEntryType) as type}
					<option value={type}>{type}</option>
				{/each}
			</select>
			<input class='input py-1 px-3 text-right {entry.price === null ? 'input-error' : ''}' type='number' bind:value={entry.price} />
		{:else}
			<div>{entry.name}</div>
			<div>{entry.type}</div>
			<div class='text-right'>{entry.price?.toLocaleString()}</div>
		{/if}
		<p>€</p>
		<div>
			<IconTextButton visible={editMode} onClick={() => removeEntry(entry)}>
				<XMark />
			</IconTextButton>
		</div>
	{:else}
		No entries
	{/each}
		</div>
</div>


<style>
	.grid-definition {
		grid-template-columns: 50% 1fr 1fr max-content max-content;
	}
</style>
