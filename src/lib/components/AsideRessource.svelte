<script>
	const { selectedRessource, closeAside } = $props();
</script>

<div class="fixed top-0 right-0 bg-theme-darkGrey h-full w-1/3 z-60">
	<div class="p-8 flex justify-end border-b border-theme-lightGrey">
		<button onclick={closeAside} class="text-theme-white text-3xl font-bold cursor-pointer">
			&times;
		</button>
	</div>
	<div class="p-8 flex flex-col gap-16 pb-32 overflow-y-auto h-full">
		<div class="flex flex-col gap-4">
			<img
				src={selectedRessource.computedSvgUrl ?? selectedRessource.image.url}
				alt={selectedRessource.image.alt}
				class="h-37.5 object-contain rounded-lg w-fit"
			/>
			<div class="flex flex-col gap-3">
				<h3 class="text-theme-white text-4.5xl leading-none">{selectedRessource.title}</h3>
				<span class="uppercase text-theme-blue tracking-[0.8px] text-2xl">
					{selectedRessource.tag}
				</span>
				<p class="text-xl leading-[130%] text-theme-white">
					{selectedRessource.properties.description}
				</p>
			</div>
		</div>
		<div class="flex flex-col gap-6">
			<div class="border border-theme-lightGrey rounded-xl p-6 flex flex-col gap-4">
				<h4 class="text-theme-blue text-2.5xl leading-none">Exemples d'utilisation</h4>
				<div class="flex flex-col gap-6">
					<div class="flex gap-6 overflow-auto">
						{#each selectedRessource.properties.utilisation as item, i (i)}
							<div class="flex flex-col gap-4 py-6 px-8 rounded-xl border border-theme-darkBlue">
								<span class="text-theme-white text-xl">{item.name}</span>
								<img src={item.image.url} alt={item.image.alt} class="w-full object-contain" />
							</div>
						{/each}
					</div>
					<div></div>
				</div>
			</div>
			{#each selectedRessource.properties.informations as info, i (i)}
				<div class="p-6 flex flex-col gap-4 rounded-1.5xl border border-theme-lightGrey bg-black/3">
					<h4 class="text-theme-blue text-2.5xl leading-none">{info.title}</h4>
					<p class="text-theme-white/75 leading-[150%]">{info.description}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
