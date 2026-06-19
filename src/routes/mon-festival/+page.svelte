<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import RiveScene from '$lib/components/RiveScene.svelte';
	import bgTexture from '$lib/assets/bg_texture.png';

	let loading = $state(true);

	onMount(() => {
		const timer = setTimeout(() => {
			loading = false;
		}, 4500);
		return () => clearTimeout(timer);
	});

	type Answer = 'oui' | 'non' | 'jspp';

	let step = $state<'intro' | 'quiz' | 'transitioning' | 'result'>('intro');
	let transitionTimer: ReturnType<typeof setTimeout> | null = null;
	let currentQuestion = $state(0);
	let answers = $state<(Answer | null)[]>([null, null, null, null]);
	let direction = $state(1);

	const questions = [
		{
			text: "L'entrée de votre festival est-elle franchissable par tous, de plain-pied et sans marche ?",
			description:
				'De plain-pied, sans marche : une entrée franchissable en fauteuil, avec une poussette ou pour qui se déplace difficilement.'
		},
		{
			text: "La signalétique de votre festival est-elle claire et contrastée pour s'orienter facilement partout ?",
			description:
				'Avez vous mise en place des pictogrammes simples, des caractères agrandis, des couleurs contrastées et des repères au sol.'
		},
		{
			text: "Votre festival propose-t-il un point d'accueil dédié à l'accessibilité, pour informer, aider et prêter du matériel ?",
			description: null
		},
		{
			text: "Votre festival propose-t-il des <span class='text-theme-blue'>espaces adaptés</span> pour bien voir la scène et se reposer au calme ?",
			description:
				"Y a t'il des plateformes pour bien voir la scène, des places réservées et des coins calmes pour souffler."
		}
	];

	const scoreMap: Record<Answer, number> = { oui: 2, jspp: 1, non: 0 };

	const score = $derived(answers.reduce((sum, a) => sum + (a ? scoreMap[a] : 0), 0));
	const resultLevel = $derived(score <= 2 ? 0 : score <= 5 ? 1 : 2);

	const results = [
		{
			titleLine1: 'Votre festival pose ses',
			titleLine2: 'premières bases !',
			subtitle:
				"Ce test situe la maturité de votre festival, ce n'est pas un audit, mais un point de départ pour avancer.",
			recs: [
				{
					title: "Rendre l'entrée franchissable",
					desc: 'Supprimer la marche ou poser une rampe douce.'
				},
				{
					title: 'Dégager les cheminements principaux',
					desc: 'Largeur suffisante, ni obstacle ni câble au sol.'
				},
				{
					title: 'Poser une signalétique lisible',
					desc: "Pictogrammes + texte, gros caractères contrastés, sur l'essentiel (accueil, toilettes, sortie)."
				},
				{
					title: 'Sensibiliser les équipes',
					desc: 'A recevoir, écouter et orienter avec bienveillance gratuit, et déterminant pour les handicaps psychiques et invisibles.'
				},
				{
					title: "Communiquer largement l'offre",
					desc: 'Page accessibilité dédiée, contacts référents, pictogrammes harmonisés sur tous les supports.'
				}
			]
		},
		{
			titleLine1: 'Votre festival est',
			titleLine2: 'en bon chemin !',
			subtitle:
				"L'essentiel est en place. Visez l'expérience complète, pérennisez-la et faites-la savoir.",
			recs: [
				{
					title: "Rendre l'entrée franchissable",
					desc: "Réserver du stationnement près de l'entrée et informer sur les transports accessibles"
				},
				{ title: 'Adapter les toilettes et abaisser comptoirs et bars.', desc: '' },
				{
					title: 'Renforcer le cheminement',
					desc: "Lignes de guidage, bandes d'éveil, mains courantes ; plaques de roulage sur sol meuble en extérieur."
				},
				{
					title: 'Une zone pour profiter',
					desc: "Aménager une zone à bonne visibilité sur la scène et un espace de repos au calme, à l'écart du bruit."
				},
				{
					title: 'Déployer les premiers dispositifs sensoriels',
					desc: 'Prêt de gilets vibrants, informations en version visuelle.'
				},
				{
					title: "Communiquer largement l'offre",
					desc: 'Page accessibilité dédiée, contacts référents, pictogrammes harmonisés sur tous les supports.'
				}
			]
		},
		{
			titleLine1: 'Votre festival est',
			titleLine2: 'bien engagé !',
			subtitle: "Reste à viser l'expérience complète, la pérenniser et la faire savoir.",
			recs: [
				{
					title: 'Rendre les spectacles accessibles',
					desc: 'Interprète LSF / chansigne, surtitrage, boucle magnétique, audiodescription.'
				},
				{
					title: 'Former les équipes en profondeur',
					desc: 'Langue des signes, accueil des différents handicaps.'
				},
				{
					title: 'Enrichir la signalétique',
					desc: 'Repères sonores, plans en relief ou en gros caractères, documentation en Facile à Lire et à Comprendre (FALC)'
				},
				{
					title: 'Compléter les équipements',
					desc: 'Bornes de recharge pour fauteuils électriques, mains courantes en braille.'
				},
				{
					title: "Communiquer largement l'offre",
					desc: 'Page accessibilité dédiée, contacts référents, pictogrammes harmonisés sur tous les supports.'
				},
				{
					title: "S'inscrire dans la durée",
					desc: "S'inspirer des festivals exemplaires et viser l'amélioration continue."
				}
			]
		}
	];

	function startQuiz() {
		direction = 1;
		step = 'quiz';
		currentQuestion = 0;
	}

	function selectAnswer(answer: Answer) {
		answers[currentQuestion] = answer;
	}

	function next() {
		if (!answers[currentQuestion]) return;
		direction = 1;
		if (currentQuestion < questions.length - 1) {
			currentQuestion++;
		} else {
			step = 'transitioning';
			transitionTimer = setTimeout(() => {
				step = 'result';
			}, 1800);
		}
	}

	function back() {
		direction = -1;
		if (currentQuestion > 0) {
			currentQuestion--;
		} else {
			step = 'intro';
		}
	}

	function restart() {
		if (transitionTimer) clearTimeout(transitionTimer);
		answers = [null, null, null, null];
		currentQuestion = 0;
		step = 'intro';
	}

	const answerOptions: { value: Answer; label: string }[] = [
		{ value: 'oui', label: 'OUI' },
		{ value: 'non', label: 'NON' },
		{ value: 'jspp', label: 'JE NE SAIS PAS' }
	];
</script>

<div class="relative min-h-screen bg-theme-black overflow-hidden">
	<img
		src="/bg-hero.svg"
		alt=""
		aria-hidden="true"
		class="absolute inset-0 w-full h-full object-cover object-center opacity-50 pointer-events-none"
	/>
	<img
		src={bgTexture}
		alt=""
		aria-hidden="true"
		class="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-50 mix-blend-screen"
	/>

	<!-- INTRO + QUIZ : layout 2 colonnes partagé, Rive ne recharge jamais -->
	{#if step !== 'result'}
		<div class="relative min-h-screen">
			<!-- Canvas : absolute, droite, pleine hauteur, très grand -->
			<div class="absolute right-0 inset-y-0 w-[60%]">
				<!-- Rive : invisible pendant le chargement, fade in après -->
				<div
					class="w-full h-full transition-opacity duration-500 {loading || step === 'transitioning'
						? 'opacity-0'
						: 'opacity-100'}"
				>
					<RiveScene {answers} />
				</div>

				<!-- Overlay de chargement -->
				{#if loading}
					<div class="absolute inset-0 flex items-center justify-center">
						<div class="flex flex-col gap-3 w-2/3">
							<span class="text-white/40 text-xs uppercase tracking-widest text-center font-bold"
								>Chargement</span
							>
							<div class="w-full h-px bg-white/20 overflow-hidden">
								<div class="loading-bar h-full bg-theme-blue"></div>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<!-- Contenu texte : relatif z-10, gauche -->
			<div class="relative z-10 flex flex-col justify-center min-h-screen pl-18 pr-8 w-[42%]">
				<div class="grid">
					{#if step === 'intro'}
						<div
							transition:fade={{ duration: 300 }}
							style="grid-area: 1 / 1"
							class="flex flex-col gap-8"
						>
							<h1 class="font-fledora text-theme-white text-6xl leading-tight uppercase">
								Votre niveau<br />d'accessibilité
							</h1>
							<div class="flex flex-col gap-4 text-theme-white/80 text-base leading-relaxed">
								<p>
									Quatre questions pour connaître la maturité d'accessibilité de votre festival :
									entrer, s'orienter, être accueilli, profiter.
								</p>
								<p>Pas de jugement, juste un point de départ — et vos priorités à la sortie.</p>
							</div>
							<button
								onclick={startQuiz}
								class="bg-[url('/src/lib/assets/button-accessibilite.svg')] w-90 h-15 bg-no-repeat bg-center bg-contain z-1 cursor-pointer mx-auto"
							>
								<span class="sr-only">Tester mon niveau d'accessibilité</span>
							</button>
						</div>
					{:else if step === 'quiz'}
						<div out:fade={{ duration: 300 }} style="grid-area: 1 / 1" class="flex flex-col gap-8">
							<div class="grid">
								{#key currentQuestion}
									<div
										in:fly={{ x: direction * 40, duration: 280, opacity: 0 }}
										out:fly={{ x: -direction * 40, duration: 280, opacity: 0 }}
										style="grid-area: 1 / 1"
										class="flex flex-col gap-3"
									>
										<h2 class="font-fledora text-theme-white text-4xl leading-tight uppercase">
											{@html questions[currentQuestion].text}
										</h2>

										{#if questions[currentQuestion].description}
											<p class="text-theme-white/70 text-sm leading-relaxed">
												{questions[currentQuestion].description}
											</p>
										{/if}
									</div>
								{/key}
							</div>

							<div class="flex gap-4">
								{#each answerOptions as option}
									<button
										onclick={() => selectAnswer(option.value)}
										class="answer-btn flex-1 text-center cursor-pointer {answers[
											currentQuestion
										] === option.value
											? 'answer-btn--selected'
											: ''}"
									>
										{option.label}
									</button>
								{/each}
							</div>

							<div class="flex items-center justify-between">
								<button
									onclick={back}
									class="text-white/60 text-xs uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
								>
									Retour
								</button>
								<button
									onclick={next}
									disabled={!answers[currentQuestion]}
									class="btn-primary disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
								>
									{currentQuestion < questions.length - 1 ? 'SUIVANT ↗' : 'VOIR MES RÉSULTATS ↗'}
								</button>
							</div>

							<div class="flex gap-2">
								{#each questions as _, i}
									<span
										class="h-1.5 rounded-full transition-all duration-300 {i === currentQuestion
											? 'w-8 bg-theme-blue'
											: 'w-4 bg-white/30'}"
									></span>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}

	<!-- TRANSITIONING -->
	{#if step === 'transitioning'}
		<div class="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
			<span class="vos-resultats-reveal font-fledora text-theme-white uppercase">
				Vos résultats
			</span>
		</div>
	{/if}

	<!-- RESULT -->
	{#if step === 'result'}
		{@const result = results[resultLevel]}
		<div class="relative z-10 flex flex-col items-center px-18 py-20 gap-10">
			<div class="flex flex-col items-center text-center gap-4">
				<span
					class="cascade-in text-theme-white/60 text-sm uppercase tracking-widest font-bold"
					style="animation-delay: 0ms">Vos résultats</span
				>
				<h2
					class="cascade-in font-fledora text-theme-white text-6xl leading-tight uppercase"
					style="animation-delay: 200ms"
				>
					{result.titleLine1}<br />
					<span class="text-theme-blue">{result.titleLine2}</span>
				</h2>
				<p
					class="cascade-in text-theme-white/70 italic text-base max-w-xl"
					style="animation-delay: 400ms"
				>
					{result.subtitle}
				</p>
			</div>

			<div class="w-full max-w-5xl flex flex-col gap-6">
				<h3
					class="cascade-in font-bold text-theme-white text-base uppercase"
					style="animation-delay: 550ms"
				>
					Recommandations
				</h3>
				<div class="grid grid-cols-2 gap-4">
					{#each result.recs as rec, i}
						<div
							class="cascade-in rec-card group border border-white/[0.08] bg-theme-darkGrey transition-all duration-300 hover:border-theme-blue hover:bg-theme-blue/20 {i === result.recs.length - 1 &&
							result.recs.length % 2 !== 0
								? 'col-span-2'
								: ''}"
							style="animation-delay: {700 + i * 150}ms"
						>
							<div class="flex flex-col gap-2 flex-1">
								<h4 class="font-fledora text-theme-blue text-xl uppercase leading-tight">
									{rec.title}
								</h4>
								{#if rec.desc}
									<p class="text-theme-white/70 text-sm leading-relaxed">{rec.desc}</p>
								{/if}
							</div>
							<div
								class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-theme-blue w-8 h-8 flex items-center justify-center text-theme-blue shrink-0 self-start"
							>
								<span aria-hidden="true">↗</span>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<button
				class="cascade-in btn-primary uppercase cursor-pointer"
				style="animation-delay: {700 + results[resultLevel].recs.length * 150}ms"
				onclick={restart}>Auditer mon festival</button
			>

			<p class="text-theme-white/40 text-xs italic">
				Ce test situe la maturité de votre festival, ce n'est pas un audit, mais un point de départ
				pour avancer.
			</p>
		</div>
	{/if}
</div>

<style>
	.btn-primary {
		background-color: var(--color-theme-blue);
		color: var(--color-theme-black);
		font-family: var(--font-fledora);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 0.75rem 1.5rem;
		transition: opacity 0.2s;
	}

	.btn-primary:hover:not(:disabled) {
		opacity: 0.85;
	}

	/* Texte "Vos résultats" centré qui glisse vers le haut en réduisant */
	.vos-resultats-reveal {
		position: fixed;
		top: 50%;
		left: 50%;
		font-size: 5rem;
		line-height: 1;
		transform: translate(-50%, -50%);
		animation: vos-resultats 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	@keyframes vos-resultats {
		0% {
			opacity: 0;
			transform: translate(-50%, -50%) scale(1);
		}
		20% {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
		}
		75% {
			opacity: 1;
			transform: translate(-50%, calc(-50vh + 130px)) scale(0.18);
		}
		90% {
			opacity: 0;
			transform: translate(-50%, calc(-50vh + 130px)) scale(0.18);
		}
		100% {
			opacity: 0;
			transform: translate(-50%, calc(-50vh + 130px)) scale(0.18);
		}
	}

	/* Cascade des éléments résultats */
	.cascade-in {
		opacity: 0;
		animation: cascade-fade-down 400ms ease forwards;
	}

	@keyframes cascade-fade-down {
		from {
			opacity: 0;
			transform: translateY(-14px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.loading-bar {
		width: 0%;
		animation: load-progress 3s linear forwards;
	}

	@keyframes load-progress {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}

	.answer-btn {
		border: 1px solid rgba(255, 255, 255, 0.6);
		color: white;
		font-family: var(--font-fledora);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 0.625rem 1.25rem;
		transition:
			background-color 0.15s,
			border-color 0.15s,
			color 0.15s;
	}

	.answer-btn:hover:not(.answer-btn--selected) {
		border-color: white;
		background-color: rgba(255, 255, 255, 0.08);
	}

	.answer-btn--selected {
		background-color: var(--color-theme-blue);
		border-color: var(--color-theme-blue);
		color: var(--color-theme-black);
	}

	.answer-btn--selected:hover {
		background-color: color-mix(in srgb, var(--color-theme-blue) 85%, white);
		border-color: color-mix(in srgb, var(--color-theme-blue) 85%, white);
	}

	.rec-card {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 1.25rem;
		cursor: pointer;
	}
</style>
