<script lang="ts">
	import oeilBlanc from '$lib/assets/oeil-blanc.svg';
	import plus from '$lib/assets/plus.svg';
	// import arrowTopRight from '$lib/assets/arrow-top-right.svg';
</script>

<header class="fixed w-full">
	<div class=" flex items-center justify-between px-16 py-6 font-fledora uppercase">
		<div class="flex items-center gap-4 p-2 bg-theme-orange">
			<img src={oeilBlanc} alt="Logo" class="inset-0 w-11.5 h-11.5 min-h-0 object-contain" />
			<span class="uppercase text-theme-white bg-theme-orange text-3xl leading-[80%] pt-1"
				>Metal <br /> access</span
			>
		</div>
		<nav class="flex gap-6 items-center text-theme-white">
			<div>
				<span class="flex items-center gap-2 leading-[80%]"
					>Bonnes pratiques
					<img src={plus} alt="plus" class="w-5 h-full object-contain" />
				</span>
				<div></div>
			</div>
			<div>
				<span class="flex items-center gap-2 leading-[80%]"
					>La fédération
					<img src={plus} alt="plus" class="w-5 h-full object-contain" />
				</span>
				<div></div>
			</div>
			<a href="/handicaps" class="leading-[80%]">Les handicaps</a>
			<a href="/ressources" class="leading-[80%]">Ressources</a>
		</nav>
		<div class="flex gap-4 items-center">
			<a
				href=""
				target="_blank"
				class="flex gap-2 p-4 border border-theme-white text-theme-white items-center uppercase leading-[80%]"
			>
				Faire mon audit
				<!-- <img src={arrowTopRight} alt="arrow top right" class="w-3.75 h-full object-contain" /> -->
			</a>
			<a href="/mon-festival" class="bg-theme-orange text-theme-black leading-[80%] p-4"
				>Évaluer mon festival</a
			>
		</div>
	</div>
</header>
