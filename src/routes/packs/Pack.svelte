<script lang="ts">
	import IconTextButton from "$lib/components/IconTextButton.svelte"
	import ArchiveBoxX from "$lib/svg/ArchiveBoxX.svelte"
	import Check from "$lib/svg/Check.svelte"
	import Pencil from "$lib/svg/Pencil.svelte"
	import type { Pack } from "$lib/types"
	import PackItemList from "./PackItemList.svelte"

	export let pack: Pack

	let editMode = false

	const totalCost = () : number => {
		return 666
	}
</script>


<div class='card variant-filled-surface p-4'>
	<div class='flex items-center justify-between'>
		<h3 class='h3'>{pack.title}</h3>
		<div class='flex'>
			<IconTextButton onClick={() => {}}>
				<Check />
			</IconTextButton>
			<IconTextButton onClick={() => {}}>
				<Pencil />
			</IconTextButton>
			<IconTextButton onClick={() => {}}>
				<ArchiveBoxX />
			</IconTextButton>
		</div>
	</div>
	<PackItemList header='Buy' {editMode} list={pack.buys} />
	<PackItemList header='Sell' {editMode} list={pack.sells} />
	<div class='flex justify-end'>
		<h4 class='h4'>{`Pack Cost: ${totalCost()}€`}</h4>
	</div>
</div>

