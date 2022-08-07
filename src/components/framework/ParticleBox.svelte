<script>
	import Particles from 'svelte-particles'
	import { loadFull } from 'tsparticles'
	import config from '../../data/particles.json'

	let particlesInit = async engine => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine)
	}
</script>

<Particles id="tsparticles" options={config} {particlesInit} />

<style>
	:global(#tsparticles) {
		height: 100%;
	}
</style>
