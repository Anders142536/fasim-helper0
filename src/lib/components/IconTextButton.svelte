<script lang="ts">
	export let label: string | null = null
	export let onClick: () => void
	export let visible = true
	export let style: string | null = null

	let cssButton = ''

	$: {
		cssButton = label === null ? 'btn-icon btn-icon-sm' : 'btn'

		if (!visible)
			cssButton += ' invisible'

		if (style)
			cssButton += ` ${style}`
	}
</script>


<button 
	on:click={onClick}
	class={cssButton}>
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

