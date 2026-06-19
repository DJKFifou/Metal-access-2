<script>
	import pictoMoteur from '$lib/assets/handicaps/picto-moteur.svg';
	import pictoVisuel from '$lib/assets/handicaps/picto-visuel.svg';
	import pictoAuditif from '$lib/assets/handicaps/picto-auditif.svg';
	import pictoDeficience from '$lib/assets/handicaps/picto-deficience.svg';
	import pictoTroublesPsychiques from '$lib/assets/handicaps/picto-troubles-psychiques.svg';

	let sectionShowed = $state('moteur');

	const menu = [
		{ id: 'moteur', label: 'Moteur', num: '01' },
		{ id: 'visuel', label: 'Visuel', num: '02' },
		{ id: 'auditif', label: 'Auditif', num: '03' },
		{ id: 'deficience', label: 'Déficience intellectuelle', num: '04' },
		{ id: 'troubles-psychiques', label: 'Les troubles psychiques', num: '05' },
		{
			id: 'troubles-spectre-autistique',
			label: 'Les troubles du spectre autistique',
			num: '06'
		}
	];
</script>

<div class="pt-24">
	<section class="px-16 py-24">
		<h2 class="uppercase text-[150px] leading-[80%] text-theme-blue text-center">Les handicaps</h2>
		<div class="pt-32 flex gap-22">
			<div class="flex-3 text-white flex flex-col gap-10">
				{#if sectionShowed === 'moteur'}
					<div class="flex gap-6 items-center">
						<span class="flex items-center justify-center bg-theme-blue rounded-full w-14 h-11">
							<img src={pictoMoteur} alt="picto moteur" />
						</span>
						<h2 class="text-7xl leading-none">Moteur</h2>
					</div>
					<img
						src="/slider/handicap-moteur.png"
						alt="Visuel handicap de l'article"
						class="w-full h-92 object-cover rounded-xl"
					/>
					<div class="flex flex-col gap-4">
						<p class="leading-[150%]">
							Les personnes atteintes de handicap moteur peuvent être regroupées en 3 catégories :
						</p>
						<ul class="*:leading-[150%] list-disc list-inside">
							<li>Celles qui se déplacent en fauteuil roulant</li>
							<li>
								Celles qui se déplacent à l’aide d’une canne, de béquilles ou d’un déambulateur
							</li>
							<li>
								Celles qui se déplacent sans aide à la marche, mais manquent d’endurance ou de
								force.
							</li>
						</ul>
					</div>
					<h3 class="text-7xl leading-none">Leurs besoins</h3>
					<ul class="*:leading-[150%] list-disc list-inside">
						<li>Celles qui se déplacent en fauteuil roulant</li>
						<li>Celles qui se déplacent à l’aide d’une canne, de béquilles ou d’un déambulateur</li>
						<li>
							Celles qui se déplacent sans aide à la marche, mais manquent d’endurance ou de force.
						</li>
					</ul>
					<h3 class="text-7xl leading-none">Les aménagements</h3>
					<ul class="*:leading-[150%] list-disc list-inside">
						<li>
							Une information sur l’accessibilité des transports permettant de se rendre au festival
						</li>
						<li>
							Un stationnement réservé très près de l’entrée du festival et/ou un système de navette
							reliant les parcs de stationnement aux accès au festival et/ou aux spectacles
						</li>
						<li>Des cheminements accessibles clairement indiqués, sans marches</li>
						<li>
							Des plaques de roulage permettant d’éviter les terrains glissants, boueux et/ou
							accidentés
						</li>
						<li>
							Des plateformes dédiées aux personnes en fauteuil roulant… et à leur accompagnant
						</li>
						<li>
							Des pans inclinés… à moins de 5% pour les longues pentes (permettant à une personne en
							fauteuil manuel de ne pas faire trop d’efforts)
						</li>
						<li>
							Des comptoirs abaissés permettant aux personnes en fauteuil roulant, mais également
							aux personnes de petite taille et aux enfants, de pouvoir être à l’aise lorsqu’ils
							commandent à boire ou à manger, par exemple.
						</li>
						<li>Des cabines de toilettes adaptées</li>
						<li>Des bornes de recharges et de réparation pour les fauteuils électriques</li>
						<li>Des mains courantes</li>
						<li>Des points d’étapes pour faire des pauses</li>
						<li>Un recensement des hébergements accessibles à proximité</li>
					</ul>
				{:else if sectionShowed === 'visuel'}
					<div class="flex gap-6 items-center">
						<span class="flex items-center justify-center bg-theme-blue rounded-full w-14 h-11">
							<img src={pictoVisuel} alt="picto visuel" />
						</span>
						<h2 class="text-7xl leading-none">Visuel</h2>
					</div>
					<img
						src="/slider/handicap-visuel.png"
						alt="Visuel handicap de l'article"
						class="w-full h-92 object-cover rounded-xl"
					/>
					<p class="leading-[150%]">
						Le champ du handicap visuel est extrêmement large. Il touche officiellement 1,3 million
						de personnes, dont 2 à 3% seulement de personnes non-voyantes. Certaines personnes ont
						une acuité visuelle extrêmement faible, ne distinguent pas les couleurs, ne voient pas
						sur les côtés ou devant elles, ne distinguent que les contrastes lumineux… Parmi elles,
						7 à 8 000 personnes utilisent le Braille.
						<br /><br />
						Pour s’orienter, les personnes ayant un handicap visuel comptent sur la vision réduite qui
						leur reste et sur des indices environnementaux tels que les textures, les couleurs contrastantes,
						les odeurs et les sons.
					</p>
					<h3 class="text-7xl leading-none">Leurs besoins</h3>
					<ul class="*:leading-[150%] list-disc list-inside">
						<li>Une absence d’obstacle sur leur chemin</li>
						<li>Un accès simple à l’information</li>
						<li>La possibilité de se repérer dans l’espace</li>
					</ul>
					<h3 class="text-7xl leading-none">Les aménagements</h3>
					<ul class="*:leading-[150%] list-disc list-inside">
						<li>
							Un site web et des informations digitales développées dans le respect des normes
							d’accessibilité (afin d’être lues sans encombre par des logiciels de synthèse vocale)
						</li>
						<li>Des informations orales</li>
						<li>Un cheminement dégagé de tout obstacle</li>
						<li>Des mains courantes (barres latérales avec indications en brailles)</li>
						<li>
							Un guidage au sol et des bandes de vigilance afin de prévenir les ruptures de
							cheminement
						</li>
						<li>
							Une signalétique bien visible, en gros caractères et utilisant des couleurs
							contrastées
						</li>
						<li>Une audiodescription des spectacles</li>
					</ul>
				{:else if sectionShowed === 'auditif'}
					<div class="flex gap-6 items-center">
						<span class="flex items-center justify-center bg-theme-blue rounded-full w-14 h-11">
							<img src={pictoAuditif} alt="picto auditif" />
						</span>
						<h2 class="text-7xl leading-none">Auditif</h2>
					</div>
					<img
						src="/slider/handicap-auditif.png"
						alt="Auditif handicap de l'article"
						class="w-full h-92 object-cover rounded-xl"
					/>
					<p class="leading-[150%]">
						Comme pour la déficience visuelle, le champ du handicap auditif est très large. Il
						concerne officiellement 4 millions de personnes en France et se manifeste sous forme de
						faible acuité auditive, d’acouphènes ou plus rarement de surdité complète. Certaines
						personnes malentendantes sont appareillées, d’autres non. Certaines pratiquent la Langue
						des Signes Française, le Langage Parlé Complété et/ou la lecture labiale ; d’autres non.
						<br /><br />
						Il est important de comprendre que le vocabulaire et la syntaxe de la Langue des Signes Française
						(LSF) diffèrent totalement de celles du français courant. Pour une personne sourde de naissance
						et élevée en LSF, le français courant sera une langue étrangère, dont la maîtrise variera
						considérablement d’une personne à l’autre.
						<br /><br />
						Les personnes sourdes ou malentendantes ont besoin d’indices visuels pour s’orienter, tels
						les pictogrammes universels, ainsi que des renseignements écrits. Le langage gestuel et les
						dispositifs d’amplification sonore pour les personnes malentendantes devront accompagner l’information
						donnée oralement. Un éclairage adéquat sera nécessaire
					</p>
					<h3 class="text-7xl leading-none">Leurs besoins</h3>
					<ul class="*:leading-[150%] list-disc list-inside">
						<li>
							Un bon éclairage pour voir les informations écrites et les visages de leurs
							interlocuteurs
						</li>
						<li>Des espaces de repos, à l’écart du bruit et du brouhaha</li>
						<li>Une information visuelle, plutôt qu’orale.</li>
					</ul>
					<h3 class="text-7xl leading-none">Les aménagements</h3>
					<ul class="*:leading-[150%] list-disc list-inside">
						<li>Un papier et un crayon afin d’écrire ou de dessiner en cas d’incompréhension</li>
						<li>
							Des boucles magnétiques qui, connectées aux prothèses auditives, permettent
							d’amplifier le son et de le « nettoyer » des bruits environnants
						</li>
						<li>
							Des informations visuelles, du sous-titrage (vélotypie…) ou du sur titrage des
							spectacles et des vidéos
						</li>
						<li>
							Une appli permettant de retranscrire les discussions, par exemple avec le personnel
							d’accueil
						</li>
						<li>Un bon éclairage, par exemple des points d’information</li>
						<li>Des alertes de sécurité lumineuses (gyrophares…)</li>
						<li>La formation des équipes d’accueil à la Langue des Signes Française</li>
						<li>
							Des interprètes en Langue des Signes Française des spectacles, conférences, ateliers…
						</li>
						<li>
							Des gilets vibrants permettant aux festivaliers sourds ou malentendants de « ressentir
							» la musique via un jeu de vibrations
						</li>
						<li>Des spectacles « Chansignés »</li>
					</ul>
				{:else if sectionShowed === 'deficience'}
					<div class="flex gap-6 items-center">
						<span class="flex items-center justify-center bg-theme-blue rounded-full w-14 h-11">
							<img src={pictoDeficience} alt="picto déficience" />
						</span>
						<h2 class="text-7xl leading-none">Déficience</h2>
					</div>
					<img
						src="/slider/deficience-intellectuelle.png"
						alt="Déficience handicap de l'article"
						class="w-full h-92 object-cover rounded-xl"
					/>
					<p class="leading-[150%]">
						Les personnes atteintes de déficience intellectuelle ont un QI très inférieur à la
						moyenne. Elles sont officiellement 700 000 en France. Elles éprouvent des difficultés à
						mobiliser leur attention, maîtriser le calcul et le raisonnement, comprendre les
						informations et, par conséquent, à s’adapter ou se repérer dans un environnement
						inconnu. Les personnes atteintes de déficience intellectuelle ont besoin d’indices
						simples, tels que des symboles graphiques et des couleurs simples accompagnés de
						panneaux répétitifs et des éléments pour se retrouver.
					</p>
					<h3 class="text-7xl leading-none">Leurs besoins</h3>
					<ul class="*:leading-[150%] list-disc list-inside">
						<li>D’avoir accès à des informations simples</li>
						<li>Des contacts calmes et bienveillants</li>
					</ul>
					<h3 class="text-7xl leading-none">Les aménagements</h3>
					<ul class="*:leading-[150%] list-disc list-inside">
						<li>Des programmes en français « Facile à Lire et à Comprendre » (FALC)</li>
						<li>
							Des informations sous forme de pictogrammes (bar, restaurant, toilettes, salles de
							spectacles, infirmerie, sortie, parking…)
						</li>
						<li>Du personnel d’accueil formé</li>
					</ul>
				{:else if sectionShowed === 'troubles-psychiques'}
					<div class="flex gap-6 items-center">
						<span class="flex items-center justify-center bg-theme-blue rounded-full w-14 h-11">
							<img src={pictoTroublesPsychiques} alt="picto troubles psychiques" />
						</span>
						<h2 class="text-7xl leading-none">Les troubles psychiques</h2>
					</div>
					<img
						src="/slider/troubles-psychiques.png"
						alt="Troubles psychiques handicap de l'article"
						class="w-full h-92 object-cover rounded-xl"
					/>
					<p class="leading-[150%]">
						L’Organisation Mondiale de la Santé estime que 20 à 25 % de la population sera touchée
						par un trouble psychique au cours de sa vie. Les troubles psychiques (addictions,
						Troubles Obsessionnels Compulsifs, bipolarité, schizophrénie, troubles du comportement
						alimentaire, anxiété, dépression…) se traduisent par des difficultés de relation à
						l’autre et font souvent l’objet d’un déni. L’écoute et l’accueil sont essentiels. Toutes
						situations de stress, d’attente, de proximité avec la foule seront à réduire au maximum,
						car susceptibles d’être anxiogènes.
						<br /><br />
						Les personnels d’accueil devront faire la différence entre l’incivilité, qui est un acte volontaire
						et conscient, et la « bizarrerie », qui peut être caractéristique du handicap psychique.
					</p>
					<h3 class="text-7xl leading-none">Les aménagements</h3>
					<ul class="*:leading-[150%] list-disc list-inside">
						<li>Un accueil bienveillant et des bénévoles à l’écoute</li>
						<li>Des espaces de repos</li>
					</ul>
				{:else if sectionShowed === 'troubles-spectre-autistique'}
					<h2 class="text-7xl leading-none">Les troubles du spectre autistique</h2>
					<img
						src="/slider/troubles-autistiques.png"
						alt="Troubles du spectre autistique handicap de l'article"
						class="w-full h-92 object-cover rounded-xl"
					/>
					<p class="leading-[150%]">
						Les personnes atteintes de troubles du spectre autistique peuvent également avoir des
						comportements inhabituels et d’énormes difficultés à établir des relations sociales
						considérées comme élémentaires ou comprendre ce qui n’est pas parfaitement explicite
						(sous-entendus, plaisanteries…). Selon la Haute Autorité de Santé, elles sont plus de
						100 000 jeunes de moins de 20 ans et 600 000 adultes en France. 
					</p>
					<h3 class="text-7xl leading-none">Les aménagements</h3>
					<ul class="*:leading-[150%] list-disc list-inside">
						<li>Des espaces de repos</li>
						<li>Des lumières et bruits peu agressifs</li>
					</ul>
				{/if}
			</div>
			<div class="flex-1">
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
