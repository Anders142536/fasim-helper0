<script lang="ts">
	import NavButton from './NavButton.svelte'
</script>

<div class="main-wrap">
	<div class="main">
		<div class="content">
			<slot />
		</div>
		<nav>
			<NavButton img="nav-cal" alt="calendar" route="/calendar" />
			<NavButton img="nav-todo" alt="todo" route="/todo" />
			<NavButton img="nav-packs" alt="packs" route="/packs" />
			<NavButton img="nav-set" alt="settings" route="/settings" />
		</nav>
	</div>
</div>

<style>
	.main-wrap {
		display: flex;
		width: 100vw;
		justify-content: center;
		height: 100%;
	}

	.main {
		display: flex;
		flex-direction: column;
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
		justify-content: space-evenly;
		gap: 10px;
		height: 64px;
	}
</style>
