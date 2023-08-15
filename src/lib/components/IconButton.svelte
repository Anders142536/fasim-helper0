<script lang="ts">
	export let label: string = ''
	export let onClick: () => void
</script>

<button on:click={onClick} >
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
	>
		<slot />
	</svg>
	<p>{label}</p>
</button>

<style>
	button {
		background: none;
		border: none;
		color: var(--text);
		display: flex;
		gap: 4px;
		align-items: center;
		width: fit-content;
	}

	svg {
		width: 1.5em;
		height: 1.5em;
	}

	p {
		width: max-content;
	}
</style>
