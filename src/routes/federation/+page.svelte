<script>
	import bgAccueil from '$lib/assets/bg_accueil.png';
	let sectionShowed = $state('a-propos');

	const menu = [
		{ id: 'a-propos', label: 'À propos', num: '01' },
		{ id: 'notre-objectif', label: 'Notre objectif', num: '02' },
		{ id: 'la-charte', label: 'La charte', num: '03' }
	];
</script>

<div class="page-wrapper">
	<img src={bgAccueil} alt="" class="bg-accueil" aria-hidden="true" />
<div class="pt-24">
	<section class="px-16 py-24">
		<h2 class="uppercase text-[150px] leading-[80%] text-theme-blue text-center">La fédé</h2>
		<div class="pt-32 flex gap-22">
			<div class="flex-3 text-white flex flex-col gap-10">
				{#if sectionShowed === 'a-propos'}
					<h2 class="text-7xl leading-none">À propos</h2>
					<p class="leading-[150%]">
						Fondée fin 2022 la Fédération des Musiques Métalliques nait vraiment en février 2023
						après sa première conférence de presse… La FMM a été créée car il y avait une absence de
						structure unique pour représenter et défendre les intérêts du metal en France.
						<br /><br />
						La Fédération des Musiques Métalliques est donc le premier interlocuteur pour tous les acteurs
						de la filière, les professionnels du secteur et les instances de la musique. D’envergure nationale,
						elle déploie des actions sur toute la France et s’appuie sur les acteurs des musiques actuelles
						en région. Grâce à l’expérience de nos membres, nous souhaitons développer des outils collaboratifs
						pour développer les bonnes pratiques en terme d’accompagnement et de professionnalisation.
						Plus largement, la Fédération a vocation à représenter l’ensemble des structures qui portent
						une activité (artistique ou commerciale) en lien avec l’esthétique Metal (artistes, acteurs
						du digital, producteurs, éditeurs, créateurs, etc).
					</p>
					<h3 class="text-7xl leading-none">Qu’est-ce que la FMM ?</h3>
					<div class="grid grid-cols-3 gap-6">
						<div
							class="flex flex-col items-center justify-center gap-6 border border-theme-lightGrey rounded-xl px-4 py-6"
						>
							<h4 class="text-3xl leading-none">Fédérer</h4>
							<p>Fédérer l’ensemble des acteurs et actrices de la filière Métal en France</p>
						</div>
						<div
							class="flex flex-col items-center justify-center gap-6 border border-theme-lightGrey rounded-xl px-4 py-6"
						>
							<h4 class="text-3xl leading-none">Promouvoir</h4>
							<p>Promouvoir les activités des acteurs de la filière auprès des institutionnels</p>
						</div>
						<div
							class="flex flex-col items-center justify-center gap-6 border border-theme-lightGrey rounded-xl px-4 py-6"
						>
							<h4 class="text-3xl leading-none">Accompagner</h4>
							<p>Mettre en place l’accompagnement des artistes, des structures...</p>
						</div>
						<div
							class="flex flex-col items-center justify-center gap-6 border border-theme-lightGrey rounded-xl px-4 py-6"
						>
							<h4 class="text-3xl leading-none">Favoriser</h4>
							<p>Favoriser les échanges et servir de passerelle pour des actions communes</p>
						</div>
						<div
							class="flex flex-col items-center justify-center gap-6 border border-theme-lightGrey rounded-xl px-4 py-6"
						>
							<h4 class="text-3xl leading-none">Recenser</h4>
							<p>Produire des statistiques et des enquêtes de terrain pour promouvoir la filière</p>
						</div>
						<div
							class="flex flex-col items-center justify-center gap-6 border border-theme-lightGrey rounded-xl px-4 py-6"
						>
							<h4 class="text-3xl leading-none">Représenter</h4>
							<p>Fédérer l’ensemble des acteurs et actrices de la filière Métal en France</p>
						</div>
					</div>
				{:else if sectionShowed === 'notre-objectif'}
					<h2 class="text-7xl leading-none">Notre objectif</h2>
					<p class="leading-[150%]">
						La Fédération des Musiques Métalliques est une association dédiée à la promotion, au
						développement et à la reconnaissance du metal et de ses acteurs. Créée pour soutenir une
						scène musicale riche et diversifiée, la FMM rassemble des passionnés, des musiciens, des
						professionnels de l’industrie. Son objectif est de fédérer les acteurs de la communauté
						métallique autour d’initiatives culturelles, pédagogiques et événementielles.
						<br /><br />
						À travers des festivals, des conférences, des ateliers de formation et des rencontres, la
						FMM œuvre pour la diffusion et l’accessibilité du metal sous toutes ses formes.
						<br />
						Elle encourage également l’échange entre les artistes et les professionnels de l’industrie,
						favorisant ainsi la créativité, la collaboration et la structuration de la filière.
						<br /><br />
						Soucieuse de défendre une culture souvent méconnue voire rejetée, la FMM agit également pour
						sensibiliser le grand public et les institutions sur la richesse artistique et l’impact social
						de ces musiques.
						<br />
						Inclusive et ouverte, la Fédération se veut le porte-parole d’une scène vivante, innovante
						et en constante évolution.
						<br /><br />
						En intégrant la Fédération des Musiques Métalliques, chaque membre contribue à faire rayonner
						cette culture unique et à soutenir les acteurs et artistes de Metal en France. En savoir plus
					</p>
				{:else if sectionShowed === 'la-charte'}
					<h2 class="text-7xl leading-none">La charte</h2>
					<div class="flex flex-col gap-10">
						<h3 class="text-4.5xl leading-none">Parité et égalité</h3>
						<p class="leading-[150%]">
							La fédération s’engage :
							<br /><br />
							– à agir pour l’égalité réelle entre les femmes et les hommes dans la filière en participant
							à l’augmentation de la représentativité de femmes sur scène et dans le monde professionnel
							de la musique, et en ne tolérant aucune forme de sexisme, de discrimination ou de violence
							à caractère sexiste ou sexuelle. La Fédération respecte en interne strictement l’égalité
							des salaires entre hommes et femmes.
							<br /><br />
							– à agir dans le respect des principes de tolérance et respect des différences contre le
							racisme, l’antisémitisme et la xénophobie et toute forme de discrimination.
						</p>
						<h3 class="text-4.5xl leading-none">Ecoresponsabilité</h3>
						<p class="leading-[150%]">
							La fédération s’engage à agir dans un cadre écologique et respectueux de
							l’environnement en favorisant notamment une réduction de l’impact environnemental des
							acteurs de la filière et en encourageant la prise de conscience de leurs adhérents et
							usagers autour de ces problématiques. Ces actions prendront corps durant des
							formations ou des conférences de sensibilisation aux enjeux environnementaux avec des
							partenaires experts sur ces sujets.
						</p>
					</div>
				{/if}
			</div>
			<div class="flex-1 sticky top-24 self-start">
				{#each menu as item, i (i)}
					<button
						onclick={() => (sectionShowed = item.id)}
						class="w-full flex justify-between p-4 cursor-pointer
                        {sectionShowed === item.id
							? 'bg-theme-blue text-theme-black'
							: 'text-theme-white'}"
					>
						<span class="flex gap-4 items-center">
							<span
								class="w-1 {sectionShowed === item.id
									? 'bg-theme-black h-5'
									: ' bg-theme-white h-3.5'}"
							></span>
							{item.label}
						</span>
						<span class="font-fledora leading-none text-2.5xl">{item.num}</span>
					</button>
				{/each}
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
