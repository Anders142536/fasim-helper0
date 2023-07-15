<script lang="ts">
	export let label: string = ''
	export let icon: string
	export let extension: string = 'svg'
</script>

<button class="button">
	<img src="/icons/{icon}.{extension}" alt={icon} />
	{label}
</button>

<style>
</style>
