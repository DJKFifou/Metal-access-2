import pictoMoteur from '$lib/assets/slider/picto-moteur.svg';
import pictoVisuel from '$lib/assets/slider/picto-visuel.svg';
import pictoAuditif from '$lib/assets/slider/picto-auditif.svg';
import pictoIntellectuelle from '$lib/assets/slider/picto-intellectuelle.svg';
import pictoPsychique from '$lib/assets/slider/picto-psychique.svg';

export type Handicap = {
	id: string;
	label: string;
	n: string;
	picto: string | null;
	image: string;
	intro: string;
	introList: string[];
	besoins: string[];
	amenagements: string[];
};

export const handicaps: Handicap[] = [
	{
		id: 'moteur',
		label: 'Moteur',
		n: '01',
		picto: pictoMoteur,
		image: '/slider/handicap-moteur.png',
		intro: 'Les personnes atteintes de handicap moteur peuvent être regroupées en 3 catégories :',
		introList: [
			'Celles qui se déplacent en fauteuil roulant',
			'Celles qui se déplacent à l’aide d’une canne, de béquilles ou d’un déambulateur',
			'Celles qui se déplacent sans aide à la marche, mais manquent d’endurance ou de force.'
		],
		besoins: [
			'Des déplacements les plus courts possibles',
			'Des surfaces planes et non glissantes',
			'Un bon éclairage',
			'Une signalétique visible, y compris pour les personnes se déplaçant en fauteuil roulant',
			'La possibilité de faire des pauses dans leurs parcours',
			'La possibilité d’être autonomes dans leur expérience du festival',
			'Des places offrant une bonne visibilité aux personnes en fauteuil roulant'
		],
		amenagements: [
			'Une information sur l’accessibilité des transports permettant de se rendre au festival',
			'Un stationnement réservé très près de l’entrée du festival et/ou un système de navette reliant les parcs de stationnement aux accès au festival et/ou aux spectacles',
			'Des cheminements accessibles clairement indiqués, sans marches',
			'Des plaques de roulage permettant d’éviter les terrains glissants, boueux et/ou accidentés',
			'Des plateformes dédiées aux personnes en fauteuil roulant… et à leur accompagnant',
			'Des pans inclinés… à moins de 5% pour les longues pentes (permettant à une personne en fauteuil manuel de ne pas faire trop d’efforts)',
			'Des comptoirs abaissés permettant aux personnes en fauteuil roulant, mais également aux personnes de petite taille et aux enfants, de pouvoir être à l’aise lorsqu’ils commandent à boire ou à manger, par exemple.',
			'Des cabines de toilettes adaptées',
			'Des bornes de recharges et de réparation pour les fauteuils électriques',
			'Des mains courantes',
			'Des points d’étapes pour faire des pauses',
			'Un recensement des hébergements accessibles à proximité'
		]
	},
	{
		id: 'visuel',
		label: 'Visuel',
		n: '02',
		picto: pictoVisuel,
		image: '/slider/handicap-visuel.png',
		intro:
			'Le handicap visuel recouvre des réalités très variées, de la malvoyance à la cécité totale. En festival, ces personnes s’orientent surtout par l’ouïe, le toucher et la mémoire des lieux : un environnement bruyant, sombre et mouvant comme un site metal demande donc des repères clairs et une aide humaine disponible.',
		introList: [
			'Les personnes malvoyantes, qui conservent une vision partielle (acuité faible, champ réduit, sensibilité aux contrastes ou daltonisme)',
			'Les personnes non-voyantes, dont la cécité est totale ou quasi totale',
			'Les personnes accompagnées d’un chien-guide ou se déplaçant à la canne blanche'
		],
		besoins: [
			'Des repères sonores et tactiles pour s’orienter sur le site',
			'Un guidage humain fiable pour les déplacements et les files d’attente',
			'Une information disponible en gros caractères, en braille ou en format audio',
			'Des contrastes forts et un éclairage suffisant sur les cheminements',
			'Des cheminements dégagés, sans obstacle ni dénivelé non signalé',
			'La possibilité de venir accompagné d’un chien-guide',
			'Un accès facilité aux services essentiels (toilettes, point d’eau, secours)'
		],
		amenagements: [
			'Une information accessibilité en ligne compatible avec les lecteurs d’écran avant l’événement',
			'Un point d’accueil identifié proposant un accompagnement humain à l’arrivée',
			'Des bénévoles formés au guidage d’une personne déficiente visuelle',
			'Un plan du site en relief, en gros caractères et en version audio',
			'Une signalétique à fort contraste, en gros caractères et lisible de près',
			'Des bandes de guidage podotactiles sur les cheminements principaux',
			'Des contrastes visuels et un balisage des obstacles, marches et changements de niveau',
			'Un éclairage renforcé des cheminements, accès et zones de service',
			'Un accès prioritaire et une zone réservée à bonne distance de la scène',
			'L’accueil des chiens-guides sur tout le site, avec point d’eau dédié',
			'Une description audio ou une médiation pour les contenus visuels (écrans, programme)',
			'Des annonces sonores doublant les informations affichées (horaires, changements, sécurité)',
			'Un personnel de secours et de sécurité sensibilisé à l’accompagnement de ces publics',
			'Un dispositif de récupération en cas de perte de repères ou de séparation du groupe'
		]
	},
	{
		id: 'auditif',
		label: 'Auditif',
		n: '03',
		picto: pictoAuditif,
		image: '/slider/handicap-auditif.png',
		intro:
			'Les personnes sourdes et malentendantes représentent près de 6 millions de personnes en France, avec des situations très variables d’une personne à l’autre. Selon le profil, la communication passe par la langue des signes française (LSF), la lecture labiale, des appareils auditifs, des implants cochléaires ou une combinaison de ces moyens.',
		introList: [
			'Celles qui sont sourdes profondes ou totales, souvent locutrices de la LSF',
			'Celles qui sont malentendantes et utilisent des appareils auditifs ou des implants',
			'Celles qui s’appuient sur la lecture labiale pour comprendre leur interlocuteur',
			'Celles qui ont une perte légère, gênées surtout dans le bruit et le brouhaha.'
		],
		besoins: [
			'Une information visuelle, écrite ou en LSF, en complément des annonces sonores.',
			'Un contact visuel direct et un visage éclairé pour faciliter la lecture labiale.',
			'Un environnement sans contre-jour ni source de lumière dans le dos de l’interlocuteur.',
			'Des alertes d’urgence perceptibles autrement que par le son.',
			'Une bonne visibilité de la scène, des écrans et de tout support traduit.',
			'Un interlocuteur patient, prêt à reformuler, écrire ou articuler sans exagérer.',
			'La possibilité de percevoir la musique aussi par les vibrations.',
			'Un espace plus calme pour échanger et soulager la fatigue auditive.'
		],
		amenagements: [
			'Une signalétique claire et des informations affichées par écrit en doublon des annonces vocales.',
			'Des écrans diffusant le programme, les horaires et les messages importants en temps réel.',
			'Une boucle magnétique signalée par le pictogramme dédié aux points d’accueil et billetterie.',
			'Du personnel d’accueil sensibilisé à la communication avec les personnes sourdes et malentendantes.',
			'La présence d’interprètes LSF pour les concerts, conférences et temps forts annoncés.',
			'Du chansigne (interprétation artistique en LSF) sur les sets phares quand c’est possible.',
			'Une plateforme ou un plancher vibrant permettant de ressentir la musique par le corps.',
			'Des gilets ou sacs à dos vibrants prêtés pour vivre le rythme en vibrations.',
			'Un système d’alerte d’urgence visuel, par flashs lumineux et messages sur écrans.',
			'Une application ou un site avec toutes les infos pratiques accessibles par écrit.',
			'Des bornes ou comptoirs équipés d’un bloc-notes ou d’une tablette pour échanger à l’écrit.',
			'Un éclairage soigné des zones d’accueil pour favoriser la lecture labiale et la LSF.',
			'Un point d’information identifié où poser ses questions au calme.',
			'La possibilité de réserver une prestation d’interprétation ou de transcription en amont.'
		]
	},
	{
		id: 'intellectuelle',
		label: 'Déficience intellectuelle',
		n: '04',
		picto: pictoIntellectuelle,
		image: '/slider/deficience-intellectuelle.png',
		intro:
			'La déficience intellectuelle concerne environ 700 000 personnes en France. Dans un festival, ces personnes peuvent rencontrer des difficultés d’attention, de compréhension de l’information, de raisonnement et de repérage dans un lieu inconnu et très stimulant.',
		introList: [],
		besoins: [
			'Une information simple, courte et concrète, sans termes abstraits.',
			'Un repérage clair pour s’orienter sur le site.',
			'Du temps pour comprendre et pour agir, sans pression.',
			'Un interlocuteur disponible et patient en cas de doute.',
			'Des repères stables qui ne changent pas d’un jour à l’autre.',
			'Des espaces calmes pour faire des pauses loin du bruit et de la foule.',
			'Une aide pour les démarches qui demandent du calcul ou de la lecture (paiement, billetterie, horaires).'
		],
		amenagements: [
			'Une signalétique avec des pictogrammes simples et des couleurs en plus du texte.',
			'Un plan du site illustré, facile à lire, avec les points clés repérés.',
			'Une information en « Facile à lire et à comprendre » (FALC) sur le site et en ligne.',
			'Un accueil dédié où poser ses questions et se faire orienter.',
			'Du personnel et des bénévoles formés à un accueil patient et bienveillant.',
			'Des panneaux d’horaires des concerts clairs, avec des repères visuels.',
			'Un système de paiement simple sur place, avec aide possible pour le calcul.',
			'Un bracelet d’identification avec un numéro à appeler en cas de perte de repère.',
			'Un point de rendez-vous unique et bien identifié en cas de séparation du groupe.',
			'Un espace calme et abrité pour se reposer en cas de fatigue ou de surstimulation.',
			'Des consignes de sécurité expliquées simplement, avec des images.',
			'Un accompagnement possible jusqu’aux zones principales (scènes, toilettes, sorties).'
		]
	},
	{
		id: 'psychique',
		label: 'Les troubles psychiques',
		n: '05',
		picto: pictoPsychique,
		image: '/slider/troubles-psychiques.png',
		intro:
			'Les troubles psychiques (anxiété, dépression, troubles bipolaires, schizophrénie, TOC, addictions, troubles du comportement alimentaire…) concernent 20 à 25 % de la population au cours de la vie : ils sont donc présents dans le public de chaque festival, même s’ils restent le plus souvent invisibles. Ces troubles n’affectent ni l’intelligence ni les capacités de la personne, mais peuvent rendre la foule, le bruit et l’imprévu plus difficiles à gérer, avec une fatigabilité et un besoin de calme et d’écoute accrus.',
		introList: [],
		besoins: [
			'Un espace calme pour s’isoler quand la foule ou le bruit deviennent trop intenses.',
			'Une mise en retrait possible à tout moment, sans avoir à se justifier.',
			'Des repères clairs et une information prévisible pour limiter l’anxiété face à l’imprévu.',
			'Un interlocuteur disponible, à l’écoute, formé à ne pas juger ni dramatiser.',
			'Des temps de pause et de récupération pour faire face à la fatigabilité.',
			'Un accès facile à l’eau, à l’ombre et à un endroit pour s’asseoir.',
			'Une discrétion et une confidentialité respectées lors des demandes d’aide.'
		],
		amenagements: [
			'Un espace de répit calme, à l’écart de la scène et du bruit, signalé et accessible sans demande compliquée.',
			'Une équipe d’accueil et de bénévoles sensibilisés aux troubles psychiques, capables d’écouter sans juger.',
			'Un point d’information unique et clairement identifié pour poser toute question ou demander de l’aide.',
			'Une signalétique simple, cohérente et lisible sur tout le site pour faciliter le repérage.',
			'Un plan du site avec les zones calmes, les sorties, les toilettes et les points d’eau clairement indiqués.',
			'Une information en amont sur le déroulé : horaires, accès, niveau sonore, affluence attendue.',
			'Des sorties et des chemins d’évacuation visibles depuis les zones de foule pour pouvoir partir facilement.',
			'Un accès prioritaire ou un cheminement contournant les files d’attente en cas de besoin.',
			'Une présence médicale et de secouristes identifiable, avec une procédure claire en cas de crise.',
			'Les coordonnées des dispositifs d’écoute et d’urgence (SAMU 15, 112, 3114 prévention du suicide) affichées et communiquées.',
			'Une réduction des stimulations là où c’est possible : éclairages stroboscopiques signalés à l’avance, zones moins bruyantes.',
			'Des protections auditives (bouchons d’oreille) mises à disposition à l’entrée et aux points d’accueil.',
			'Une politique claire de réduction des risques liés à l’alcool et aux substances, avec stand d’information et eau gratuite.',
			'Un accueil bienveillant des chiens d’assistance et des accompagnants, sans frais supplémentaire.'
		]
	},
	{
		id: 'autistique',
		label: 'Les troubles du spectre autistique',
		n: '06',
		picto: null,
		image: '/slider/troubles-autistiques.png',
		intro:
			'L’autisme est un trouble du neurodéveloppement qui modifie la façon de percevoir le monde, de communiquer et d’interagir. Dans un festival, l’environnement saturé de sons, de lumières et de foule peut vite devenir épuisant, voire douloureux, pour une personne autiste.',
		introList: [
			'Des personnes qui s’expriment et se déplacent de façon autonome, mais saturent face aux stimulations',
			'Des personnes qui communiquent peu ou pas verbalement et utilisent d’autres outils (pictogrammes, écriture)',
			'Des personnes qui ont besoin d’un accompagnement rapproché tout au long de l’événement'
		],
		besoins: [
			'De la prévisibilité : savoir à l’avance comment se déroule l’événement',
			'Un environnement sonore et lumineux maîtrisé, sans surprise',
			'Des espaces calmes pour se mettre à l’écart et récupérer',
			'Des consignes claires, explicites et concrètes, sans sous-entendus',
			'Un accompagnant qui peut rester à ses côtés',
			'De la souplesse pour éviter les files d’attente et la foule dense',
			'Du temps et de la patience dans les échanges avec le personnel'
		],
		amenagements: [
			'Une description sensorielle détaillée du festival publiée en amont (niveaux sonores, lumières, affluence par horaire)',
			'Un plan du site clair avec repères visuels et pictogrammes',
			'Une zone de répit sensorielle « low-stim » : calme, lumière douce, à l’écart de la scène',
			'Des casques anti-bruit ou bouchons d’oreille mis à disposition ou en prêt',
			'Un accès prioritaire évitant les files d’attente et la foule compacte',
			'Un tarif accompagnateur pour la personne qui aide',
			'Une signalétique simple, doublée de pictogrammes et rédigée en FALC (facile à lire et à comprendre)',
			'Un personnel d’accueil sensibilisé à l’autisme et formé à une communication claire',
			'Des horaires d’affluence et un programme précis communiqués à l’avance',
			'Des points de repère et un référent accessibilité identifiables sur site',
			'Des zones d’ombre ou abritées pour s’isoler des projecteurs et des stroboscopes',
			'La possibilité de visiter le site ou de consulter des photos avant l’événement',
			'Un point de contact dédié en amont pour préparer la venue et poser ses questions',
			'Une information claire sur les effets pyrotechniques, stroboscopes et pics sonores prévus'
		]
	}
];
