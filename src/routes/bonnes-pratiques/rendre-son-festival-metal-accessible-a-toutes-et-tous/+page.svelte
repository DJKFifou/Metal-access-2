<script>
	let sectionShowed = $state('festival-accessible');

	const menu = [
		{ id: 'festival-accessible', label: 'Pourquoi rendre son festival accessible ?', num: '01' },
		{ id: 'cadre-legal', label: 'Le cadre légal', num: '02' },
		{ id: 'familles-handicap', label: 'Les 6 familles de handicap', num: '03' },
		{ id: 'amenager-site', label: 'Aménager son site', num: '04' },
		{ id: 'signaletique', label: 'Signalétique', num: '05' },
		{ id: 'Accueillir', label: 'Accueillir', num: '06' }
	];
</script>

<section class="px-24 pt-45">
	<div class="flex flex-col gap-6">
		<div class="flex gap-1 *:leading-[130%] text-sm">
			<a href="/bonnes-pratiques" class="text-theme-blue">Bonnes pratiques</a>
			<span class="text-theme-blue">-</span>
			<p class="text-theme-white">Rendre son festival metal accessible à toutes et tous</p>
		</div>
		<h2 class="leading-none text-7xl text-theme-white">
			Rendre son festival metal <span class="text-theme-blue">accessible à toutes et tous</span>
		</h2>
		<p class="leading-[150%] text-theme-white">
			Comprendre les handicaps, équiper son événement et accueillir chaque festivalier dans le pit -
			sans exception. Le guide pas-à-pas de la Fédération des Musiques Métalliques.
		</p>
		<p class="text-theme-blue text-sm leading-[130%]">
			JUIN 2026 · 12 MIN DE LECTURE · PAR LA F.M.M.
		</p>
	</div>
	<div class="pt-32 flex gap-22">
		<div class="flex-3 text-white flex flex-col gap-10">
			<img
				src="/slider/handicap-moteur.png"
				alt="Visuel handicap de l'article"
				class="w-full h-92 object-cover rounded-xl"
			/>
			<p class="text-theme-white leading-[150%]">
				Un festival accessible, ce n'est pas une rampe posée à la dernière minute : c'est une chaîne
				de détails pensée en amont. Comprendre les six familles de handicap, aménager les bons
				espaces et former ses équipes voici comment ouvrir le pit à toutes et tous, et le prouver.
			</p>
			<h3 id="festival-accessible" class="leading-none text-4.5xl">
				Pourquoi rendre son festival accessible ?
			</h3>
			<p class="text-theme-white leading-[150%]">
				12 millions de personnes vivent avec un handicap en France, et 80 % de ces handicaps sont
				invisibles. Rendre son événement accessible, ce n'est pas une faveur : c'est accueillir un
				public qui existe déjà et qui veut vivre le metal comme les autres.
				<br /><br />
				C'est aussi un cadre. La loi de 2005 et le référentiel RGAA 4.1 (WCAG 2.2 AA) encadrent l'accueil
				du public et un festival accessible, c'est en moyenne +21 % de billets vendus.
			</p>
			<div class="px-10 py-8 flex flex-col gap-6 border border-theme-blue bg-theme-blue/20">
				<h4 class="text-theme-blue text-2.5xl leading-none">À retenir</h4>
				<p class="text-theme-white leading-[150%]">
					L'accessibilité ne se résume pas au fauteuil. 80 % des handicaps sont invisibles : pensez
					aussi au sensoriel, au cognitif et au répit. Le metal est pour tout le monde.
				</p>
			</div>
			<h3 id="familles-handicap" class="leading-none text-4.5xl">Les 6 familles de handicap</h3>
			<div class="flex flex-col gap-4">
				<p class="text-theme-white leading-[150%]">
					Chaque famille a ses besoins concrets. On ne traite pas le moteur comme l'auditif : à
					chacune ses aménagements, sa signalétique et son accueil dédié.
				</p>
				<div>
					<div class="flex gap-4 items-center">
						<span class="w-5 h-5 rounded bg-theme-blue"></span>
						<p class="text-theme-blue leading-[150%]">
							Moteur - cheminements, plateformes PMR, sanitaires adaptés
						</p>
					</div>
					<div class="flex gap-4 items-center">
						<span class="w-5 h-5 rounded bg-theme-blue"></span>
						<p class="text-theme-blue leading-[150%]">
							Auditif - boucles magnétiques, LSF, gilets vibrants
						</p>
					</div>
					<div class="flex gap-4 items-center">
						<span class="w-5 h-5 rounded bg-theme-blue"></span>
						<p class="text-theme-blue leading-[150%]">
							Visuel - contraste, audio-description, chiens guides admis
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="flex-1 sticky top-24 self-start">
			{#each menu as item, i (i)}
				<a
					href={'#' + item.id}
					onclick={() => (sectionShowed = item.id)}
					class="w-full flex justify-between p-4 cursor-pointer
                        {sectionShowed === item.id
						? 'bg-theme-blue text-theme-black'
						: 'text-theme-white'}"
				>
					<span class="flex gap-4 items-center text-start">
						<span
							class="w-1 {sectionShowed === item.id
								? 'bg-theme-black h-5'
								: ' bg-theme-white h-3.5'}"
						></span>
						{item.label}
					</span>
					<span class="font-fledora leading-none text-2.5xl">{item.num}</span>
				</a>
			{/each}
		</div>
	</div>
</section>
