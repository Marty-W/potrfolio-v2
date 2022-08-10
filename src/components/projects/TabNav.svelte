<script>
	import { jobs, projects } from '../../data/const'
	import { activeCategory, activeTab } from '../../store'
	import ProjectList from './ProjectList.svelte'

	$: if ($activeCategory === 'projects') activeTab.set('projects_1')
	$: if ($activeCategory === 'jobs') activeTab.set('jobs_1')
</script>

<div class="h-full relative flex flex-col">
	<div class="tabs tabs-boxed items-start">
		<button
			id="tab"
			class="tab flex-1 tab-lg w-3"
			class:tab-active={$activeCategory === 'jobs'}
			on:click={activeCategory.toggle}
			><span id="tab">Work experience</span></button
		>
		<button
			id="tab"
			class="tab flex-1 tab-lg w-3"
			class:tab-active={$activeCategory === 'projects'}
			on:click={activeCategory.toggle}
			><span id="tab">Side projects</span></button
		>
	</div>

	{#if $activeCategory === 'jobs'}
		<ProjectList items={jobs} {activeTab} />
	{:else}
		<ProjectList items={projects} {activeTab} />
	{/if}
</div>
