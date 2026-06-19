<script>
	import AsideRessource from '$lib/components/AsideRessource.svelte';
	import downloadIcon from '$lib/assets/download.svg';
	import bgAccueil from '$lib/assets/bg_accueil.png';
	import ressources from '$lib/ressources.js';

	const tags = ['Backstage & staff', 'Festivaliers', 'Artistes', 'Bénévoles', 'Production'];

	let selectedRessources = $state([]);
	let selectedFilter = $state('all');
	let selectedColor = $state('#eaf8ff');
	let ressourcesWithSvg = $state([]);
	let searchQuery = $state('');
	let filteredRessources = $derived(
		(ressourcesWithSvg.length ? ressourcesWithSvg : ressources)
			.filter((r) => selectedFilter === 'all' || r.tag === selectedFilter)
			.filter((r) => r.title.toLowerCase().includes(searchQuery.toLowerCase()))
	);

	async function loadSvgWithColor(url, color) {
		const res = await fetch(url);
		let svgText = await res.text();

		svgText = svgText.replace(/(<rect[^>]*?)fill="[^"]*"/, `$1fill="${color}"`);

		return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`;
	}

	async function updateSvgs() {
		ressourcesWithSvg = await Promise.all(
			ressources.map(async (r) => ({
				...r,
				computedSvgUrl: await loadSvgWithColor(r.image.url, selectedColor)
			}))
		);
	}

	$effect(() => {
		updateSvgs();
	});

	let selectedRessource = $state(null);

	function closeAside() {
		selectedRessource = null;
	}

	function isSelected(ressource) {
		return selectedRessources.some((r) => r.id === ressource.id);
	}

	function toggleSelection(ressource) {
		if (isSelected(ressource)) {
			selectedRessources = selectedRessources.filter((r) => r.id !== ressource.id);
		} else {
			selectedRessources = [...selectedRessources, ressource];
		}
	}

	function slugify(text) {
		return text
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '');
	}

	async function downloadSelected() {
		if (selectedRessources.length === 0) return;

		for (const ressource of selectedRessources) {
			const svgUrl = ressource.computedSvgUrl ?? ressource.image.url;
			const link = document.createElement('a');
			link.href = svgUrl;
			link.download = `${slugify(ressource.title)}.svg`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			await new Promise((resolve) => setTimeout(resolve, 150));
		}
	}
</script>

{#snippet Ressource(ressource)}
	<div
		class="group relative border border-theme-lightGrey rounded-xl px-2 pt-2 pb-4 flex flex-col items-center gap-4 shadow-card-ressource h-fit"
	>
		<input
			type="checkbox"
			name="select_ressource"
			id="select_ressource_{ressource.id}"
			checked={isSelected(ressource)}
			onclick={(e) => {
				e.stopPropagation();
				toggleSelection(ressource);
			}}
			class="absolute top-2 right-2 w-5 h-5 accent-theme-blue cursor-pointer z-10 opacity-0 group-hover:opacity-100 {isSelected(
				ressource
			)
				? '!opacity-100'
				: ''}"
		/>
		<button
			onclick={() => (selectedRessource = ressource)}
			class="flex flex-col items-center gap-4 w-full cursor-pointer"
		>
			<img
				src={ressource.computedSvgUrl ?? ressource.image.url}
				alt={ressource.image.alt}
				class="w-full h-37 object-contain rounded-lg"
			/>
			<span class="leading-[130%] text-2xl text-theme-white">
				{ressource.title}
			</span>
		</button>
	</div>
{/snippet}

<div class="page-wrapper">
	<img src={bgAccueil} alt="" class="bg-accueil" aria-hidden="true" />
	<div class="pt-24">
		<section class="flex flex-col gap-16 px-16 py-24">
			<h2 class="uppercase text-[150px] leading-[80%] text-theme-blue text-center">Signalétique</h2>
			<div class="flex flex-col gap-24">
				<div class="flex gap-4 justify-center">
					<div class="flex rounded-5xl border border-white/20 overflow-hidden p-1">
						<div>
							<input
								type="radio"
								name="filter"
								id="filter_all"
								value="all"
								class="peer sr-only"
								bind:group={selectedFilter}
								checked
							/>
							<label
								for="filter_all"
								class="px-4 py-2 bg-theme-black text-theme-white cursor-pointer peer-checked:bg-theme-blue peer-checked:text-theme-black rounded-5xl block"
								>Tous</label
							>
						</div>
						{#each tags as tag, i (i)}
							<div>
								<input
									type="radio"
									name="filter"
									id="filter_{tag}"
									value={tag}
									class="peer sr-only"
									bind:group={selectedFilter}
								/>
								<label
									for="filter_{tag}"
									class="px-4 py-2 bg-theme-black text-theme-white cursor-pointer peer-checked:bg-theme-blue peer-checked:text-theme-black rounded-5xl block"
									>{tag}</label
								>
							</div>
						{/each}
					</div>
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Rechercher..."
						bind:value={searchQuery}
						class="text-white/70 px-4.5 bg-theme-black border border-white/20 rounded-4xl py-2"
					/>
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<h3 class="text-4.5xl leading-none text-theme-white">
					Des signalétiques prêtes à imprimer
				</h3>
				<p class="text-theme-white/80 text-lg leading-[130%]">
					Rendre votre festival accessible passe aussi par une signalétique claire et adaptée.
					Retrouvez ici l'ensemble des panneaux dont vous avez besoin, organisés par zone et par
					type de public. Filtrez, choisissez vos formats et téléchargez ce qui correspond à votre
					événement.
				</p>
			</div>
			<div class="flex gap-22">
				<div class="relative flex-2 grid grid-cols-3 gap-8">
					{#if filteredRessources.length > 0}
						{#each filteredRessources as ressource (ressource.id)}
							{@render Ressource(ressource)}
						{/each}
					{:else}
						<p class="text-theme-white/80">Aucune ressource.</p>
					{/if}
					{#if selectedRessources.length > 0}
						<div
							class="fixed z-10 bottom-4 left-1/2 -translate-x-1/2 px-6 py-4 flex items-center gap-3 rounded-5xl border border-theme-blue/40 bg-theme-black"
						>
							<span
								class="flex items-center justify-center h-8 w-8 rounded-full bg-theme-blue text-theme-black text-lg leading-[130%]"
							>
								{selectedRessources.length}
							</span>
							<span class="text-theme-white/75 leading-[150%] whitespace-nowrap"
								>{selectedRessources.length > 1 ? 'éléments sélectionnés' : 'élément sélectionné'}
							</span>
							<span class="w-px h-10 bg-white/15"></span>
							<button
								onclick={downloadSelected}
								disabled={selectedRessources.length === 0}
								class="flex items-center gap-2 h-10 uppercase px-5 bg-theme-blue text-theme-black rounded-1.5xl cursor-pointer font-fledora leading-[140%] disabled:opacity-40 disabled:cursor-not-allowed"
							>
								<img src={downloadIcon} alt="Télécharger" class="h-3.75 w-3.75 object-contain" />
								Télécharger
							</button>
						</div>
					{/if}
				</div>
				<div class="flex-1 flex flex-col gap-8 text-theme-white">
					<div class="flex flex-col gap-6">
						<h3 class="text-4.5xl leading-none">Personnaliser</h3>
						<hr />
					</div>
					<p class="leading-[150%]">
						Personnalisez les couleurs de votre festival, téléchargez des panneaux qui s'intègrent à
						votre DA.
					</p>
					<div class="bg-theme-white p-4 rounded-lg flex flex-col gap-4">
						<span class="text-theme-black text-2xl font-fledora leading-none"
							>Sélecteur de couleur</span
						>
						<input type="color" bind:value={selectedColor} class="w-full h-25 rounded" />
						<span class="text-theme-black text-lg leading-none">
							Couleur sélectionnée : <span class="uppercase">{selectedColor}</span>
						</span>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>

{#if selectedRessource}
	<AsideRessource {closeAside} {selectedRessource} />
{/if}

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
