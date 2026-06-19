<script lang="ts">
	import { handicaps } from '$lib/data/handicaps';

	let activeId = $state(handicaps[0].id);
	let indTop = $state(0);
	let indHeight = $state(0);

	const total = String(handicaps.length).padStart(2, '0');

	// Indicateur glissant : re-mesure l'onglet actif (et au resize).
	$effect(() => {
		activeId; // dépendance
		const measure = () => {
			const el = document.querySelector<HTMLElement>(`[data-nav-id="${activeId}"]`);
			if (el) {
				indTop = el.offsetTop;
				indHeight = el.offsetHeight;
			}
		};
		measure();
		window.addEventListener('resize', measure);
		return () => window.removeEventListener('resize', measure);
	});

	// Scroll-spy : la catégorie active suit le scroll (section dont le haut
	// est passé sous la ligne à 30% du viewport).
	$effect(() => {
		const onScroll = () => {
			const marker = window.innerHeight * 0.3;
			let current = handicaps[0].id;
			for (const h of handicaps) {
				const el = document.getElementById(h.id);
				if (el && el.getBoundingClientRect().top <= marker) current = h.id;
			}
			activeId = current;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function goTo(id: string) {
		activeId = id;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		document
			.getElementById(id)
			?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
	}
</script>

{#snippet check()}
	<svg
		class="mt-[0.3em] h-[1.05em] w-[1.05em] shrink-0 text-theme-blue"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2.5"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
		focusable="false"
	>
		<path d="M20 6 9 17l-5-5" />
	</svg>
{/snippet}

<section class="flex flex-col gap-24 px-16 pb-24">
	<!-- HERO -->
	<header class="relative -mx-16 overflow-hidden px-16 pt-44 pb-12">
		<img
			src="/bg-hero.svg"
			alt=""
			aria-hidden="true"
			class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full w-full object-cover object-top opacity-15 select-none"
		/>
		<div
			class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-theme-black/40 via-theme-black/70 to-theme-black"
			aria-hidden="true"
		></div>

		<div class="flex max-w-[60ch] flex-col gap-6">
			<p
				class="flex items-center gap-3 font-fledora text-base tracking-[0.15em] text-theme-blue uppercase"
			>
				<span aria-hidden="true" class="h-px w-10 bg-theme-blue"></span>
				Comprendre
			</p>
			<h1 class="text-7xl leading-none text-theme-white sm:text-8xl">Les handicaps</h1>
			<p class="max-w-[54ch] text-xl leading-[1.6] text-theme-white/80 [text-wrap:pretty]">
				Les six grandes familles de handicap, leurs besoins concrets et les aménagements qui rendent
				un festival metal réellement accessible à toutes et tous.
			</p>
		</div>
	</header>

	<div class="flex items-start gap-22">
		<!-- Contenu : les familles empilées en scroll -->
		<div class="flex min-w-0 flex-1 flex-col gap-40">
			{#each handicaps as h (h.id)}
				<section id={h.id} class="flex scroll-mt-32 flex-col gap-10" aria-labelledby="title-{h.id}">
					<!-- En-tête éditorial -->
					<div class="flex flex-col gap-5">
						<div class="flex items-center gap-4">
							<span
								class="font-fledora text-base tracking-[0.15em] whitespace-nowrap text-theme-blue uppercase"
							>
								Famille {h.n} <span class="text-theme-white/40">/ {total}</span>
							</span>
							<span aria-hidden="true" class="h-px flex-1 bg-theme-white/15"></span>
						</div>
						<div class="flex items-center gap-5">
							{#if h.picto}
								<span
									class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-theme-blue/40 bg-theme-blue/10"
									aria-hidden="true"
								>
									<img src={h.picto} alt="" width="32" height="32" class="h-8 w-auto" />
								</span>
							{/if}
							<h2 id="title-{h.id}" class="text-7xl leading-none text-theme-white">{h.label}</h2>
						</div>
					</div>

					<img
						src={h.image}
						alt="Festival — handicap {h.label.toLowerCase()}"
						width="918"
						height="368"
						loading="lazy"
						class="aspect-[918/368] w-full rounded-xl object-cover"
					/>

					<!-- Intro (lead) -->
					{#if h.intro}
						<div class="flex max-w-[66ch] flex-col gap-5">
							<p class="text-2xl leading-[1.55] text-theme-white/90 [text-wrap:pretty]">
								{h.intro}
							</p>
							{#if h.introList.length}
								<ul class="flex flex-col gap-2.5 text-lg leading-[1.7] text-theme-white/85">
									{#each h.introList as item}
										<li class="flex items-start gap-3">
											<span class="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-theme-blue"></span>
											<span>{item}</span>
										</li>
									{/each}
								</ul>
							{/if}
						</div>
					{/if}

					<!-- Leurs besoins (2 colonnes en large) -->
					{#if h.besoins.length}
						<div class="flex flex-col gap-5">
							<h3 class="text-3.5xl leading-none text-theme-white">Leurs besoins</h3>
							<ul
								class="grid max-w-[68ch] grid-cols-1 gap-x-12 text-lg leading-[1.6] text-theme-white lg:max-w-[80ch] lg:grid-cols-2"
							>
								{#each h.besoins as item}
									<li
										class="flex items-start gap-3 border-t border-theme-white/10 py-3 transition-colors hover:bg-theme-white/[0.03]"
									>
										{@render check()}
										<span>{item}</span>
									</li>
								{/each}
							</ul>
						</div>
					{/if}

					<!-- Les aménagements (1 colonne, phrases longues) -->
					{#if h.amenagements.length}
						<div class="flex flex-col gap-5">
							<h3 class="text-3.5xl leading-none text-theme-white">Les aménagements</h3>
							<ul class="flex max-w-[68ch] flex-col text-lg leading-[1.6] text-theme-white">
								{#each h.amenagements as item}
									<li
										class="flex items-start gap-3 border-t border-theme-white/10 py-3 transition-colors first:border-t-0 first:pt-0 hover:bg-theme-white/[0.03]"
									>
										{@render check()}
										<span>{item}</span>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
				</section>
			{/each}
		</div>

		<!-- Sommaire : scroll-spy + indicateur glissant -->
		<nav
			aria-label="Les familles de handicap"
			class="sticky top-32 hidden w-[306px] shrink-0 self-start lg:block"
		>
			<div class="relative flex flex-col">
				<div
					class="pointer-events-none absolute inset-x-0 z-0 bg-theme-blue transition-all duration-500 ease-out motion-reduce:transition-none"
					style="top:{indTop}px;height:{indHeight}px"
					aria-hidden="true"
				></div>
				{#each handicaps as h (h.id)}
					{@const active = h.id === activeId}
					<button
						data-nav-id={h.id}
						type="button"
						onclick={() => goTo(h.id)}
						aria-current={active ? 'page' : undefined}
						class="relative z-10 flex w-full cursor-pointer items-center gap-4 px-4 py-4 text-left transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-theme-white focus-visible:outline-none focus-visible:ring-inset {active
							? 'text-theme-black'
							: 'text-theme-white hover:text-theme-blue'}"
					>
						<span class="flex-1 text-lg leading-[1.3]">{h.label}</span>
						<span class="font-fledora text-2.5xl leading-none">{h.n}</span>
					</button>
				{/each}
			</div>
		</nav>
	</div>
</section>
