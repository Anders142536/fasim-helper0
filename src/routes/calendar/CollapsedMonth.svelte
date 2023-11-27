<script lang="ts">
	import type { Month } from "$lib/enums/Month"
	import FiveColumnCalendarGrid from "./FiveColumnCalendarGrid.svelte"


	export let month: Month

</script>


<FiveColumnCalendarGrid>
	<h4 class='h4'>{month.charAt(0).toUpperCase()}</h4>
	<div>Planting</div>
	<div>Harvesting</div>
	<div>Selling</div>
	<div>Noting</div>
</FiveColumnCalendarGrid>
