<script>
	import Hero from '$lib/components/Homepage/Hero.svelte';
	import ChiffresCles from '$lib/components/Homepage/ChiffresCles.svelte';
	import BonnesPratiques from '$lib/components/Homepage/BonnesPratiques.svelte';
	import Signaletiques from '$lib/components/Homepage/Signaletiques.svelte';
	import SliderHandicap from '$lib/components/Homepage/SliderHandicap.svelte';
	// import Loader from '$lib/components/Loader.svelte';
	import Deploiement from '$lib/components/Homepage/Deploiement.svelte';
	import bgAccueil from '$lib/assets/bg_accueil.png';
</script>

<!-- <Loader /> -->

<div class="page-wrapper">
	<img src={bgAccueil} alt="" class="bg-accueil" aria-hidden="true" />
	<Hero />
	<ChiffresCles />
	<BonnesPratiques />
	<Signaletiques />
	<SliderHandicap />
	<Deploiement />
</div>

<style>
	.page-wrapper {
		position: relative;
	}

	.bg-accueil {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		mix-blend-mode: screen;
		pointer-events: none;
		z-index: 0;
	}
</style>
