<script lang="ts">
	import oeilBlanc from '$lib/assets/oeil-blanc.svg';
	import { page } from '$app/state';

	let scrolled = $state(false);

	const handleScroll = () => {
		scrolled = window.scrollY >= window.innerHeight;
	};

	const isHomePage = $derived(page.url.pathname === '/');
	const showEvalButton = $derived(!isHomePage || scrolled);
</script>

<svelte:window onscroll={handleScroll} />

<header class="fixed w-full z-50 bg-linear-to-b from-theme-black/75 to-theme-black/0">
	<div class=" flex items-center justify-between px-16 py-4 font-fledora uppercase">
		<a href="/" class="flex items-center gap-4">
			<img src={oeilBlanc} alt="Logo" class="inset-0 w-11.5 h-11.5 min-h-0 object-contain" />
			<span class="uppercase text-theme-white text-3.5xl leading-[92%]">Metal <br /> access</span>
		</a>
		<nav
			class="flex gap-6 items-center text-theme-white *:leading-[80%] *:hover:text-theme-blue *:transition-all *:duration-300"
		>
			<a href="/bonnes-pratiques">Bonnes pratiques</a>
			<a href="/handicaps">Les handicaps</a>
			<a href="/signaletique">Signalétique</a>
			<a href="/federation">La fédération</a>
		</nav>
		<div class="flex items-center">
			<a
				href=""
				target="_blank"
				class="bg-[url('/src/lib/assets/button-audit.svg')] w-45 h-12 bg-no-repeat bg-center bg-contain"
			>
				<span class="sr-only">Faire mon audit</span>
			</a>
			<a
				href="/mon-festival"
				class="bg-[url('/src/lib/assets/button-accessibilite-header.svg')] bg-no-repeat bg-center bg-contain transition-all duration-300"
				class:w-0={!showEvalButton}
				class:h-0={!showEvalButton}
				class:px-0={!showEvalButton}
				class:p-4={showEvalButton}
				class:w-53={showEvalButton}
				class:h-13={showEvalButton}
				class:ml-4={showEvalButton}
			>
				<span class="sr-only">Découvrir mon niveau d'accessibilité</span>
			</a>
		</div>
	</div>
</header>
