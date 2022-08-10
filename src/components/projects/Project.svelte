<script>
	import { activeProjectInfo } from '../../store'
</script>

{#key $activeProjectInfo}
	<div class="h-full flex flex-col  text-center p-8 ">
		<h2 class="text-3xl">
			{$activeProjectInfo.name}
		</h2>
		<p class="mt-8">{$activeProjectInfo.desc}</p>
		<div class="mt-4 text-left w-full">
			<h3 class="text-2xl self-start">
				Tech: {$activeProjectInfo.tech.join(', ')}
			</h3>
		</div>
	</div>
{/key}
