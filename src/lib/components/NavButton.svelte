<script lang="ts">
	export let route: string
	export let img: string
	export let alt: string
</script>

<div class="navbutton">
	<a href={route}>
		<img src="/icons/{img}.png" {alt} />
	</a>
</div>

<style>
	.navbutton {
		display: flex;
		justify-content: center;
		align-content: center;
		width: 64px;
		height: 64px;
		overflow: hidden;
	}
</style>
