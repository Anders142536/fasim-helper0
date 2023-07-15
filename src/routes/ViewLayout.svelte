<div class="viewlayout-flex">
	<div class="content">
		<slot name="content" />
	</div>
	<div class="toolbar">
		<slot name="toolbar" />
	</div>
</div>

<style>
	.viewlayout-flex {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.content {
		flex: 1;
	}

	.toolbar {
		height: fit-content;
		display: flex;
		justify-content: space-around;
	}
</style>
