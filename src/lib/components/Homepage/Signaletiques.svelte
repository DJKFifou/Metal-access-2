<script>
	import ressources from '$lib/assets/ressources.png';
	import elementDecoSignal from '$lib/assets/element_deco_signal.svg';
</script>

<section class="px-16 py-24">
	<div
		class="relative border border-theme-darkBlue/80 p-16 flex flex-col gap-16 rounded-xl overflow-hidden"
	>
		<img src={elementDecoSignal} alt="" aria-hidden="true" class="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0 opacity-75" />
		<h2 class="relative z-[1] text-7xl leading-none text-theme-white">
			<span class="text-theme-blue">Votre signalétique</span> <br /> à vos couleurs
		</h2>
		<div class="relative z-[1] flex flex-col gap-8">
			<p class="text-theme-white leading-[130%] max-w-108">
				Un festival accessible, c'est pas juste une rampe d'accès et une case cochée. C'est repenser
				chaque moment de l'expérience : l'arrivée sur site, la signalétique, le son, les espaces de
				repos, la billetterie... Pour que tout le monde puisse vivre le show, peu importe son point
				de départ.
			</p>
			<a
				href="/bonnes-pratiques"
				class="bg-[url('/src/lib/assets/button-pratiques.svg')] w-90 h-15 bg-no-repeat bg-center bg-contain z-1"
			>
				<span class="sr-only">Voir les bonnes pratiques</span>
			</a>
			<img
				src={ressources}
				alt="Ressources"
				class="absolute -right-3 -bottom-20 h-105 object-contain"
			/>
		</div>
	</div>
</section>
