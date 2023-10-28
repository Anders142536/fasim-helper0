<script lang="ts">
	import IconTextButton from "$lib/components/IconTextButton.svelte"
	import { packs } from "$lib/stores/stores"
	import ArchiveBoxX from "$lib/svg/ArchiveBoxX.svelte"
	import ArrowLeft from "$lib/svg/ArrowLeft.svelte"
	import Banknotes from "$lib/svg/Banknotes.svelte"
	import Check from "$lib/svg/Check.svelte"
	import Pencil from "$lib/svg/Pencil.svelte"
	import XMark from "$lib/svg/XMark.svelte"
	import type { Pack } from "$lib/types"
	import PackItemList from "./PackItemList.svelte"

	export let pack: Pack

	let editMode = false

	const totalCost = () : number => {
		return 666
	}
</script>


<div class='card variant-filled-surface p-4 border-neutral-600 border-2 {pack.isArchived ? 'border-dashed' : 'border-solid'}'>
	<div class='flex items-center justify-between'>
		<h3 class='h3'>{pack.title}</h3>
		<div class='flex'>
			<!-- ARCHIVE MODE -->
			{#if pack.isArchived}
				<IconTextButton onClick={() => packs.toggleArchived(pack.id)} >
					<ArrowLeft />
				</IconTextButton>
				<IconTextButton onClick={() => packs.delete(pack.id)} >
					<XMark />
				</IconTextButton>

			<!-- EDIT MODE -->
			{:else if editMode }
				<IconTextButton onClick={() => {
						editMode = false
						packs.save(pack)
					}} >
					<Check />
				</IconTextButton>
				<IconTextButton onClick={() => {
						editMode = false
					// TODO cancel
					}} >
					<XMark />
				</IconTextButton>

			<!-- VIEW MODE -->
			{:else}
				<IconTextButton onClick={() => editMode = true}>
					<Pencil />
				</IconTextButton>
				<IconTextButton onClick={() =>  packs.toggleArchived(pack.id)}>
					<ArchiveBoxX />
				</IconTextButton>
			{/if}
		</div>
	</div>
	<PackItemList header='Buy' {editMode} list={pack.buys} />
	<PackItemList header='Sell' {editMode} list={pack.sells} />
	<div class='flex justify-end'>
		<h4 class='h4'>Pack Cost:</h4> <h4 class='h4 text-right min-w-[100px]'>{`${totalCost()}€`}</h4>
	</div>
</div>

