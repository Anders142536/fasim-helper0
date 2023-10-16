<script lang="ts">
	export let label: string = ''
	export let onClick: () => void
</script>

<button 
	on:click={onClick}
	class='btn'>
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
	<p class='w-max'>{label}</p>
</button>

