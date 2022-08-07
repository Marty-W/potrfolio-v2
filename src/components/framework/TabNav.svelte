<script>
	import { activeTab } from '../../tabStore'
	import { jobs, projects } from '../../data/conts'
</script>

<div class="h-full tabs tabs-boxed flex-col items-center justify-center">
	<h3>Job experience</h3>
	{#each jobs as { name, id }}
		<button
			class="tab tab-lg"
			class:tab-active={$activeTab === id}
			on:click={() => activeTab.set(id)}
		>
			{name}
		</button>
	{/each}
	<h3>Side projects</h3>
	{#each projects as { name, id }}
		<button
			class="tab tab-lg"
			class:tab-active={$activeTab === id}
			on:click={() => activeTab.set(id)}
		>
			{name}
		</button>
	{/each}
</div>
