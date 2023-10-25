<script lang="ts">
	import "../app.postcss";
	import { AppShell, TabAnchor, TabGroup } from '@skeletonlabs/skeleton'
	import NavTab from "./NavTab.svelte"
</script>

<AppShell>
	<slot />
	<svelte:fragment slot="footer">
		<TabGroup
			active='variant-filled-primary'
			justify='justify-center'
			hover='hover:variant-soft-primary'
			rounded=''
			border=''
			flex='flex-1 lg:flex-none'
			class='w-full'
		>
			<NavTab route='/calendar' label='Calendar' img='nav-cal' />
			<NavTab route='/todos' label='Todos' img='nav-todo' />
			<NavTab route='/packs' label='Packs' img='nav-packs' />
			<NavTab route='/settings' label='Settings' img='nav-set' />
		</TabGroup>
	</svelte:fragment>
</AppShell>
