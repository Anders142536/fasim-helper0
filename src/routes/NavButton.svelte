<script lang="ts">
	import { onMount } from 'svelte'

	export let route: string
	export let img: string
	export let alt: string

	let imgsrc: string

	onMount(async () => {
		imgsrc = await import('$lib/assets/' + img)
	})
</script>

<div>
	<a href={route}>
		<img src={imgsrc} {alt} />
	</a>
</div>
