<script lang="ts">
	import IconButton from "$lib/components/IconButton.svelte"
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


<div class='card p-4'>
	<div class='flex justify-between'>
		<h3>{pack.title}</h3>
		<div class='flex gap-1'>
			<IconButton onClick={() => {}}>
				<Check />
			</IconButton>
			<IconButton onClick={() => {}}>
				<Pencil />
			</IconButton>
			<IconButton onClick={() => {}}>
				<ArchiveBoxX />
			</IconButton>
		</div>
	</div>
	<PackItemList header='Buy' {editMode} list={pack.buys} />
	<PackItemList header='Sell' {editMode} list={pack.sells} />
	<div class='flex justify-end'>
		<h4>{`Pack Cost: ${totalCost()}€`}</h4>
	</div>
</div>

