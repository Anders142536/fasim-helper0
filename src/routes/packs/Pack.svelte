<script lang="ts">
	import Card from "$lib/components/Card.svelte"
	import IconTextButton from "$lib/components/IconTextButton.svelte"
	import { packs } from "$lib/stores/stores"
	import ArchiveBoxX from "$lib/svg/ArchiveBoxX.svelte"
	import Check from "$lib/svg/Check.svelte"
	import Pencil from "$lib/svg/Pencil.svelte"
	import Trash from "$lib/svg/Trash.svelte"
	import Undo from "$lib/svg/Undo.svelte"
	import XMark from "$lib/svg/XMark.svelte"
	import type { Pack } from "$lib/types"
	import PackItemList from "./PackItemList.svelte"

	export let pack: Pack

	let editMode = false
	let edits = structuredClone(pack)
	let current: Pack

	$: {
		console.log(`changing with editMode ${editMode}`)
		current = editMode ? edits : pack
	}

	let price = 0

	$: {
		let priceBuys = current.buys.reduce((acc, curr) => acc + curr.price, 0)
		let priceSells = current.sells.reduce((acc, curr) => acc + curr.price, 0) 
		price = priceBuys - priceSells
	}

	const startEditMode = () => {
		editMode = true
		edits = structuredClone(pack)
	}

	const cancelEditMode = () => {
		editMode = false
	}

	const confirmEdits = () => {
		packs.save(edits)
		edits = structuredClone(pack)
		editMode = false
	}
</script>

<Card history={pack.isArchived}>
	<div class='flex items-center justify-between'>
		{#if editMode}
			<input class='input px-4 py-2 h3' bind:value={edits.title} />
		{:else}
			<h3 class='h3'>{pack.title}</h3>
		{/if}

		<!-- Buttons right -->
		<div class='flex'>
			<!-- ARCHIVE MODE -->
			{#if pack.isArchived}
				<IconTextButton onClick={() => packs.toggleArchived(pack.id)} >
					<Undo />
				</IconTextButton>
				<IconTextButton onClick={() => packs.delete(pack.id)} >
					<Trash />
				</IconTextButton>

			<!-- EDIT MODE -->
			{:else if editMode }
				<IconTextButton onClick={() => confirmEdits()} >
					<Check />
				</IconTextButton>
				<IconTextButton onClick={() => cancelEditMode()} >
					<XMark />
				</IconTextButton>

			<!-- VIEW MODE -->
			{:else}
				<IconTextButton onClick={() => startEditMode()}>
					<Pencil />
				</IconTextButton>
				<IconTextButton onClick={() =>  packs.toggleArchived(pack.id)}>
					<ArchiveBoxX />
				</IconTextButton>
			{/if}
		</div>
	</div>
	<PackItemList header='Buy' {editMode} bind:list={current.buys} />
	<PackItemList header='Sell' {editMode} bind:list={current.sells} />
	<div class='flex px-8 gap-2 justify-end'>
		<h4 class='h4'>Pack Cost:</h4> <h4 class='h4 text-right min-w-[120px]'>{`${price.toLocaleString()} €`}</h4>
	</div>
</Card>
