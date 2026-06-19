<script lang="ts">
	import { formatDate } from '$lib/index.js';
	import bgAccueil from '$lib/assets/bg_accueil.png';

	let { data } = $props();
	console.log('data', data);

	const pratiquesTags = data.allPages.map((page) => page.properties.Pratiques.multi_select).flat();
	const uniquePratiquesTags = Array.from(new Set(pratiquesTags.map((tag) => tag.name))).map(
		(name) => {
			return pratiquesTags.find((tag) => tag.name === name);
		}
	);
	const handicapsTags = data.allPages.map((page) => page.properties.Handicaps.multi_select).flat();
	const uniqueHandicapsTags = Array.from(new Set(handicapsTags.map((tag) => tag.name))).map(
		(name) => {
			return handicapsTags.find((tag) => tag.name === name);
		}
	);

	let selectedFilters = $state<string[]>([]);
	let searchQuery = $state('');

	let filteredPages = $derived.by(() => {
		let pages = data.allPages;

		if (selectedFilters.length > 0) {
			pages = pages.filter((page) => {
				const pageTags = [
					...page.properties.Pratiques.multi_select,
					...page.properties.Handicaps.multi_select
				];
				return pageTags.some((tag) => selectedFilters.includes(tag.name));
			});
		}

		const query = searchQuery.trim().toLowerCase();
		if (query.length > 0) {
			pages = pages.filter((page) => {
				const title = page.properties.Title.title[0]?.plain_text ?? '';
				return title.toLowerCase().includes(query);
			});
		}

		return pages;
	});
</script>

<div class="page-wrapper">
	<img src={bgAccueil} alt="" class="bg-accueil" aria-hidden="true" />
	<div class="pt-24">
		<section class="px-16 py-24">
			<h2 class="uppercase text-[150px] leading-[80%] text-theme-blue text-center">
				Bonnes pratiques
			</h2>
			<div class="flex flex-col gap-24">
				<div class="flex justify-center">
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Rechercher..."
						bind:value={searchQuery}
						class="text-white/70 px-4.5 bg-theme-black border border-white/60 rounded-4xl py-2 w-full max-w-[500px]"
					/>
				</div>
				<div class="flex gap-10">
					<div class="flex-2 grid grid-cols-2 gap-10">
						{#each filteredPages as page (page.id)}
							<a
								href="/bonnes-pratiques/rendre-son-festival-metal-accessible-a-toutes-et-tous"
								class="border border-theme-lightGrey rounded-xl px-2 pt-2 pb-10 flex flex-col gap-10"
							>
								{#if page.properties.Miniature.files.length > 0}
									<img
										src={page.properties.Miniature.files[0].file.url}
										alt={page.properties.Title.title[0].plain_text}
										class="w-full h-full max-h-57.5 object-cover rounded-lg"
									/>
								{:else}
									<div class="w-full bg-theme-blue min-h-57.5 rounded-lg"></div>
								{/if}
								<div class="flex flex-col gap-10 px-6 h-full">
									<div class="flex gap-2 flex-wrap">
										{#each page.properties.Pratiques.multi_select as tag (tag.id)}
											<span
												class="bg-theme-darkGrey text-theme-white px-4 py-2 rounded-4xl text-sm leading-[150%] w-fit"
												>{tag.name}</span
											>
										{/each}
										{#each page.properties.Handicaps.multi_select as tag (tag.id)}
											<span
												class="bg-theme-darkGrey text-theme-white px-4 py-2 rounded-4xl text-sm leading-[150%] w-fit"
												>{tag.name}</span
											>
										{/each}
									</div>
									<p class="text-white text-2xl leading-[130%] min-h-25 h-full">
										{page.properties.Title.title[0].plain_text}
									</p>
									<span class="leading-[150%] text-theme-lightGrey"
										>{formatDate(page.created_time)}</span
									>
								</div>
							</a>
						{/each}
					</div>
					<div class="flex-1 flex flex-col gap-10 text-theme-white sticky top-24 self-start">
						<div class="flex flex-col gap-6">
							<h3 class="text-4.5xl leading-none">Filtrer</h3>
							<hr />
						</div>
						<div class="flex flex-col gap-10">
							<div class="flex flex-col gap-4">
								<span class="text-lg font-semibold leading-[130%]">Pratiques</span>
								<div class="px-4">
									{#each uniquePratiquesTags as tag, i (i)}
										<div class="flex items-center gap-4 py-2 px-4">
											<input
												type="checkbox"
												id={`pratique-${tag.name}`}
												value={tag.name}
												bind:group={selectedFilters}
												class="accent-theme-blue"
											/>
											<label
												for={`pratique-${tag.name}`}
												class="text-lg leading-[130%] text-theme-white cursor-pointer"
											>
												{tag.name}
											</label>
										</div>
									{/each}
								</div>
							</div>
							<div class="flex flex-col gap-4">
								<span class="text-lg font-semibold leading-[130%]">Handicaps</span>
								<div class="px-4">
									{#each uniqueHandicapsTags as tag, i (i)}
										<div class="flex items-center gap-4 py-2 px-4">
											<input
												type="checkbox"
												id={`handicap-${tag.name}`}
												value={tag.name}
												bind:group={selectedFilters}
												class="accent-theme-blue"
											/>
											<label
												for={`handicap-${tag.name}`}
												class="text-lg leading-[130%] text-theme-white cursor-pointer"
											>
												{tag.name}
											</label>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
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
