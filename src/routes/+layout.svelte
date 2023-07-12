<script lang="ts">
	import NavButton from "./NavButton.svelte";
</script>

<div class='main-wrap'>
<div class="main">
	<div class='content'>
	<slot />
</div>
	<nav>
		<NavButton img='nav-cal' alt='calendar' route='/calendar' />
		<a href="/todo">Todo</a>
		<a href="/packs">Packs</a>
		<a href="/settings">Settings</a>
	</nav>
</div>
	</div>


<style>
	.main-wrap {
		display: flex;
		width: 100vw;
		justify-content: center;
	}

	.main {
		display: flex;
		flex-direction: column;
		height: max(600px, fit-content);
		min-height: 300px;
		max-height: 100vh;
		min-width: 400px;
		max-width: max(800px, 100vw);

	}

	.content {
		flex: 1;
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		gap: 10px;
		height: 64px;
	}

</style>
