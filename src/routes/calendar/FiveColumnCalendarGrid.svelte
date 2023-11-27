<script lang="ts">
	export let additionalClass = "";

</script>

<div class='grid grid-definition gap-2 w-full items-center {additionalClass}' >
	<slot />
</div>



<style>
	.grid-definition {
		grid-template-columns: 2rem repeat(4, 1fr);
	}
</style>
