<script lang="ts">
	export let route: string
	export let img: string
	export let alt: string
</script>

<div>
	<a href={route}>
		<img src="/icons/{img}.png" {alt} />
	</a>
</div>
