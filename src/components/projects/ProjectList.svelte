<script>
	export let items
	export let activeTab
</script>

<div class="flex flex-col justify-center flex-1 ">
	{#each items as { name, id } (id)}
		<button
			class="btn btn-outline mb-5"
			class:btn-primary={id === $activeTab}
			on:click={() => activeTab.set(id)}
			>{name}
		</button>
	{/each}
</div>
