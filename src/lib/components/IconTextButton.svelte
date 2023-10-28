<script lang="ts">
	export let label: string | null = null
	export let onClick: () => void
	export let visible = true
</script>

<button 
	on:click={onClick}
	class={label === null ? 'btn-icon btn-icon-sm' : 'btn'}{visible ? '' : ' invisible'}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class='w-6 h-6'
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
	>
		<slot />
	</svg>
	{#if label !== null }	
		<p class='w-max'>{label}</p>
	{/if}
</button>

