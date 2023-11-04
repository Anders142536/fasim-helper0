<script lang="ts">
	export let label: string | null = null
	export let onClick: () => void
	export let visible = true
	export let style: string | null = null


	const getCssString = () => {
		let css = label === null ? 'btn-icon btn-icon-sm' : 'btn'

		if (!visible)
			css += ' invisible'

		if (style)
			css += ` text-${style}-500`
		return css
	}
</script>


<button 
	on:click={onClick}
	class={getCssString()}>
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

