<script>
	import arrowRightBlue from '$lib/assets/arrow-right-blue.svg';
	import elementDecoSecLast from '$lib/assets/element_deco_sec_last.svg';
</script>

<section class="relative px-16 py-24 flex flex-col gap-16">
	<img src={elementDecoSecLast} alt="" aria-hidden="true" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
	<div class="relative z-[1] flex flex-col gap-16 max-w-1/2">
		<h2 class="text-7xl text-theme-white leading-none">
			<span class="text-theme-blue">Tout ce qu'il vous faut</span>, <br /> prêt à déployer
		</h2>
		<div class="flex flex-col gap-8">
			<p class="text-lg leading-[130%] text-theme-white">
				Signalétique accessible à télécharger, guide d'accompagnement à la mise en accessibilité des
				événements culturels en extérieur… Les ressources Metal AXS sont pensées pour le terrain,
				pas pour un tiroir.
			</p>
			<a
				href="/bonnes-pratiques"
				class="bg-[url('/src/lib/assets/button-pratiques.svg')] w-80 h-15 bg-no-repeat bg-center bg-contain z-1"
			>
				<span class="sr-only">Voir toutes les bonnes pratiques</span>
			</a>
		</div>
	</div>
	<div class="relative z-[1] flex gap-16 text-theme-white">
		<a
			href="/signaletique"
			class="px-8 py-16 flex flex-col gap-16 border border-theme-lightGrey group transition-all duration-300 hover:border-theme-blue hover:bg-theme-blue/20 cursor-pointer"
		>
			<div class="flex justify-between items-center">
				<h4 class="leading-none text-2.5xl">Signalétique</h4>
				<img
					src={arrowRightBlue}
					alt=""
					class="overflow-hidden w-0 h-13 object-contain group-hover:w-13"
				/>
			</div>
			<p class="leading-[150%]">
				Le champ du handicap visuel est extrêmement large. Seulement 2 à 3% de non-voyants. Les
				autres comptent sur la vision réduite qui leur reste et sur des indices environnementaux :
				textures, couleurs contrastantes, odeurs et sons.
			</p>
		</a>
		<a
			href="/bonnes-pratiques"
			class="px-8 py-16 flex flex-col gap-16 border border-theme-lightGrey group transition-all duration-300 hover:border-theme-blue hover:bg-theme-blue/20 cursor-pointer"
		>
			<div class="flex justify-between items-center">
				<h4 class="leading-none text-2.5xl">Guide des bonnes pratiques</h4>
				<img
					src={arrowRightBlue}
					alt=""
					class="overflow-hidden w-0 h-13 object-contain group-hover:w-13"
				/>
			</div>
			<p class="leading-[150%]">
				Le champ du handicap visuel est extrêmement large. Seulement 2 à 3% de non-voyants. Les
				autres comptent sur la vision réduite qui leur reste et sur des indices environnementaux :
				textures, couleurs contrastantes, odeurs et sons.
			</p>
		</a>
	</div>
</section>
