<script lang="ts">
	import { fly } from 'svelte/transition';
	import oeilBlanc from '$lib/assets/oeil-blanc.svg';

	let showEvalButton = $state(false);

	const handleScroll = () => {
		showEvalButton = window.scrollY >= window.innerHeight;
	};
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
		<div class="flex items-center gap-4">
			<button
				type="button"
				class="flex h-12 cursor-pointer items-center gap-3 border border-theme-white px-5 text-base leading-none text-theme-white transition-colors duration-300 hover:bg-theme-white hover:text-theme-black"
			>
				<span>Faire mon audit</span>
				<svg
					class="size-4 shrink-0"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M7 17 17 7" />
					<path d="M7 7h10v10" />
				</svg>
			</button>
			{#if showEvalButton}
				<a
					href="/mon-festival"
					transition:fly={{ x: 16, duration: 300 }}
					class="flex h-12 items-center gap-3 border border-theme-blue bg-theme-blue px-5 text-base leading-none whitespace-nowrap text-theme-black transition-colors duration-300 hover:bg-theme-black hover:text-theme-blue"
				>
					<span>Évaluer mon festival</span>
					<svg
						class="size-4 shrink-0"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M7 17 17 7" />
						<path d="M7 7h10v10" />
					</svg>
				</a>
			{/if}
		</div>
	</div>
</header>
