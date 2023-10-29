<script lang="ts">
	export let history = false


</script>

<div class='card variant-filled-surface p-4 border-neutral-600 border-2 {history ? 'border-dashed' : ''}'>
	<slot />
</div>
