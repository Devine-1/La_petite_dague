// Données CONSOMMABLE : générées depuis CONSOMMABLE.ods (121 entrées : 60 du Livre de règle (2026) + 60 de Espoir et Peur (2027), jets 1 à 60 pour chaque source, + 1 objet de campagne sans jet)
const CONSOMMABLE_DATA = {
  "consommables": [
    {
      "source": "Livre de règle (2026)",
      "jet": 1,
      "rarete": "Ordinaire",
      "nom": "Potion de grande foulée",
      "description": "Vous gagnez un bonus de +1 à votre prochain jet d'Agilité."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 2,
      "rarete": "Ordinaire",
      "nom": "Potion de renforcement",
      "description": "Vous gagnez un bonus de +1 à votre prochain jet de Force"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 3,
      "rarete": "Ordinaire",
      "nom": "Potion de contrôle",
      "description": "Vous gagnez un bonus de +1 à votre prochain jet de Finesse"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 4,
      "rarete": "Ordinaire",
      "nom": "Potion d'harmonie",
      "description": "Vous gagnez un bonus de +1 à votre prochain jet d'Instinct"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 5,
      "rarete": "Ordinaire",
      "nom": "Potion de charme",
      "description": "Vous gagnez un bonus de +1 à votre prochain jet de Présence."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 6,
      "rarete": "Ordinaire",
      "nom": "Potion d'illumination",
      "description": "Vous gagnez un bonus de +1 à votre prochain jet de Savoir"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 7,
      "rarete": "Ordinaire",
      "nom": "potion de santé mineure",
      "description": "Effacer 1d4 point de Blessure"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 8,
      "rarete": "Ordinaire",
      "nom": "potion de résilience mineure",
      "description": "Effacez 1d4 Stress."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 9,
      "rarete": "Ordinaire",
      "nom": "Venin de grincedent",
      "description": "Vous pouvez appliquer ce venin sur une arme qui inflige des dégâts physiques pour ajouter un d6 à votre prochain jet de dégâts avec elle"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 10,
      "rarete": "Ordinaire",
      "nom": "Feuilles de Varik",
      "description": "Vous pouvez manger une paire de ces feu lles pour gagner immédiatement 2 Espoirs."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 11,
      "rarete": "Ordinaire",
      "nom": "Fiole de goutte de lune",
      "description": "Lorsque vous buvez le contenu de cette fiole, vous voyez dans le noir complet jusqu'à votre prechain repos."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 12,
      "rarete": "Ordinaire",
      "nom": "Eclat arcanique instable",
      "description": "Vous pouvez faire un jet de Finesse pour lancer cet éclat sur un groupe d'adversaires à Longue portée. Les cibles touchées subissent 1d20 dégâts magiques"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 13,
      "rarete": "Ordinaire",
      "nom": "Potion de stabilité",
      "description": "Vous pouvez boire cette potion pour choisir un acte de pause supplémentaire."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 14,
      "rarete": "Ordinaire",
      "nom": "Venin de grincedent amélioré",
      "description": "Vous pouvez appliquer ce venin sur une arme qui inflige des dégâts physiques pour ajouter un d8 à votre prochain jet de dégâts avec elle"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 15,
      "rarete": "Ordinaire",
      "nom": "Argile de remodelage",
      "description": "Vous pouvez déperiser un Espoir pour utiliser cette argile afin de modifier votre visage au point qu'il soit impossible de vous reconnaitre jusqu'à votre prochain repos"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 16,
      "rarete": "Ordinaire",
      "nom": "Fiole de sombrefumée",
      "description": "Lorsqu'un adversaire vous attaque, utilisez cette fiale pour lancer un nombre de deal à votre Agilité. Ajoutez le meilleur résultat à votre Esquive contre cette attaque."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 17,
      "rarete": "Ordinaire",
      "nom": "Racine bondissante",
      "description": "Mangez cette racine pour sauter au maximum à Longue portée sans faire de jet"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 18,
      "rarete": "Ordinaire",
      "nom": "Poudre d'anxiété",
      "description": "Cochez un Stress et effacez un point de Blessure."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 19,
      "rarete": "Ordinaire",
      "nom": "Potion de santé",
      "description": "Effacez 1d4+1 point de Blessure."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 20,
      "rarete": "Ordinaire",
      "nom": "Potion de résilience",
      "description": "Effacez 1d4+1 Stress"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 21,
      "rarete": "Ordinaire",
      "nom": "Réparateur d'armure",
      "description": "Vous pouvez utiliser ce kit de réparation pour dépenser autant d'Espoirs que vous le souhaitez et effacer un nombre égal d'Emplacements d'armure."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 22,
      "rarete": "Ordinaire",
      "nom": "Baume de branchies",
      "description": "Vous pouvez appliquer ce baume sur votre cou pour respirer sous l'eau pendant un nombre de minutes égal à votre niveau"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 23,
      "rarete": "Ordinaire",
      "nom": "Parchemin de duplication",
      "description": "Vous pouvez mettre ce parchemin en contact avec un autre pour recopier le contenu du second. Une fois utilisé, le Parchemin de duplication devient un papier ordinaire."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 24,
      "rarete": "Ordinaire",
      "nom": "Éclat arcanique amélioré",
      "description": "Vous pouvez faire un jet de Finesse pour lancer cet éclat sur un groupe d'adversaires à Longue portée. Les cibles touchées subissent 2d20 dégâts magiques"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 25,
      "rarete": "Inhabituel",
      "nom": "Potion de grande foulée majeure",
      "description": "Vous gagnez un bonus de +1 à l'Agilité jusqu'à votre prochain repos"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 26,
      "rarete": "Inhabituel",
      "nom": "Potion de renforcement majeure",
      "description": "Vous gagnez un bonus de +1 à la Force jusqu'à votre prochain repos."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 27,
      "rarete": "Inhabituel",
      "nom": "Potion de contrôle majeure",
      "description": "Vous gagnez un bonus de +1 à la Finesse jusqu'à votre prochain repos."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 28,
      "rarete": "Inhabituel",
      "nom": "Potion d'harmonie majeure",
      "description": "Vous gagnez un bonus de +1 à l'instinct jusqu'à votre prochain repos."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 29,
      "rarete": "Inhabituel",
      "nom": "Potion de Potion charme majeure",
      "description": "Vous gagnez un bonus de +1 à la Présence jusqu'à votre prochain repos."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 30,
      "rarete": "Inhabituel",
      "nom": "Potion d'illumination majeure",
      "description": "Vous gagnez un bonus de +1 au Savoir jusqu'à votre prochain repos."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 31,
      "rarete": "Inhabituel",
      "nom": "Sang du yorgi",
      "description": "Vous pouvez boire ce sang pour disparaître de l'endroit où vous vous trouvez et réapparaître à un autre endroit situé dans votre champ de vision et à Très longue portée"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 32,
      "rarete": "Inhabituel",
      "nom": "Potion secrète d'Homet",
      "description": "Une fois que vous avez bu cette potion, votre prochain jet d'attaque réussi devient un succès critique"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 33,
      "rarete": "Inhabituel",
      "nom": "Salive de rougépine",
      "description": "Vous pouvez appliquer cette salive sur une arme qui inflige des dégâts physiques pour ajouter un d12 à votre prochain jet de dégâts avec elle."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 34,
      "rarete": "Inhabituel",
      "nom": "Pierre de canalisation",
      "description": "Vous pouvez utiliser cette pierre pour prendre un sort ou un grimoire dans votre caveau, l'utiliser une fois et le remettre dedans."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 35,
      "rarete": "Inhabituel",
      "nom": "Poussière mythique",
      "description": "Vous pouvez appliquer cette poussière sur une arme qui inflige des dégâts magiques pour ajouter un d12 à votre prochain jet de dégâts avec elle."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 36,
      "rarete": "Inhabituel",
      "nom": "Pâte acide",
      "description": "Cette pâte ronge les murs et autres surfaces solides dans un éclair soudain"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 37,
      "rarete": "Rare",
      "nom": "Flamboiement d'espérance",
      "description": "Lorsque vous sutilisez cette torche, les a liés à Courte portée lancert un cifi quand ils dépensent un Espoir Sur un 6, ils bénéficient de l'effet de cet Espc'r mais nele dépensent pas. La torche brille jusqu'à la fin de la scène"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 38,
      "rarete": "Rare",
      "nom": "Éclat arcanique majeur",
      "description": "Vous pouvez faire un jet de Firesse pour lancer cet éclat sur un groupe o adversaires à Longue portée. Les cibles touchées subissent 4d20 dégâts magiques"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 39,
      "rarete": "Rare",
      "nom": "Os aérifère",
      "description": "Vous pouvez utiliser cet os pour contrôler votre vitesse de chute pendant un nombre. de minutes égal à votre niveau."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 40,
      "rarete": "Rare",
      "nom": "Cercle de vide",
      "description": "Cochez un Stress pour créer une zone de vide s'étendart jusqu'à Longue portée I est impossible de lancer ces sorts au sein de cette zone et les créatures qui s'y trouvent sont immunisées contre les dégâts magiques."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 41,
      "rarete": "Rare",
      "nom": "Sève d'arbre solaire",
      "description": "Consommez cette sève pour lancer un d6. Sur un résultat de 5 a 6, effacez 2 point de Blessure, Sur un résultat de 2 à 4 effacer 3 Stress. Sur un 1. vous apercevez ce qui se trouve derrière le voile de la mort et cette vision vous change à jamais, vous infligeant une cicatrice."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 42,
      "rarete": "Rare",
      "nom": "Poison de croc dégoulinant",
      "description": "Une créature qui consomme ce poison subit 8d10 dégâts magiques directs"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 43,
      "rarete": "Rare",
      "nom": "Potion de santé majeure",
      "description": "Effacez 1d4+2 point de Blessure."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 44,
      "rarete": "Rare",
      "nom": "Potion de résilience majeure",
      "description": "Effacez 1d4+2 Stress"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 45,
      "rarete": "Rare",
      "nom": "Musc d'ogre",
      "description": "Vous pouvez util ser ce must pour empêcher quiconque de suivre votre piste par des moyens magiques ou ordinaires jusqu'à votre prochain repos."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 46,
      "rarete": "Rare",
      "nom": "Poussailes",
      "description": "Vous obtenez des alles magiques qui vous permettent de voler pendant un nombre de minutes égal à votre niveau,"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 47,
      "rarete": "Rare",
      "nom": "Jarre des voix perdues",
      "description": "Vous pouvez ouvrir cette jarre pour déchaîner une clameur assourdissante qui persiste un nombre de minutes égal à votre Instinct. Les créatures à Longue portée qui ne sont pas préparées à entendre ce vacarme subissent 6d8 dégâts magiques."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 48,
      "rarete": "Rare",
      "nom": "The de fleur de dragon",
      "description": "Vous pouvez boire ce the pour cracher un souffle enflammé. Effectuez un jet d'instinct contre tous les adversaires situés devant vous à Courte portée. Les cib es que vous touchez subissent d20 dégâts physiques, basés sur votre Compétence"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 49,
      "rarete": "Légendaire",
      "nom": "Graine de pont",
      "description": "D'épaisses lianes poussent depuis votre er placement jusqu'à un endroit de votre choix situé à Longue portée. Vous pouvez grimper le long ou vous déplacer dessus Elles se dissipent lors de votre prochain court repos"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 50,
      "rarete": "Légendaire",
      "nom": "Sève somnifère",
      "description": "Vous pouvez boire cette potion pour vous endormir toute une nuit. À votre réveil, vous effacez tous vos Stress."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 51,
      "rarete": "Légendaire",
      "nom": "Festin de Xurie",
      "description": "Vous pouvez manger ce repas pour effacer tous vos point de Blessure et tous vos Stress et gagner 1d4 Espoir"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 52,
      "rarete": "Légendaire",
      "nom": "Miel adhésif",
      "description": "Ce miel permet de caller définitivement deux objets ensemble."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 53,
      "rarete": "Légendaire",
      "nom": "Potion de rétrécissement",
      "description": "Vous pouvez boire cette potion pour réduire votre tailie de moit é jusqu'à ce que vous décidiez d'er annuler les effets ou jusqu'à votre prochain repos. Une fois rétréci, vous avez un bonus de +2 à l'Aglité et un malus de -1 à la Compétence"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 54,
      "rarete": "Légendaire",
      "nom": "Potion de croissance",
      "description": "Vous pouvez boire cette potion pour doubler votre taille jusqu'à ce que vous décidiez d'en annuler les effets ou jusqu'à votre prochain pos. Une fois agrandi, vous gagnez un bonus de +2 à votre force et un bonus de +1 à à votre Compétence."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 55,
      "rarete": "Légendaire",
      "nom": "Pierre de la connaissance",
      "description": "Si vous mourez en possession de cette pierre, un allié peut prendre une carte de Votre caveau et la mettre dans le sien ou dans sa main. La pierre tombe en poussière ne fois qu'il bette connaissance"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 56,
      "rarete": "Légendaire",
      "nom": "Mousse sucrée",
      "description": "Vous pouvez consommer cette mousse lors d'un repos pour effacer 1d10 point de Blessure ou 1d10 Stress"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 57,
      "rarete": "Légendaire",
      "nom": "Orbe aveuglant",
      "description": "Vous pouvez activer cet orbe pour émettre un éclair de lumière aveuglant Toutes les cibles à Courte portée deviennent Vulnérables jusqu'à ce qu'elles cochent un point de Blessure"
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 58,
      "rarete": "Légendaire",
      "nom": "Thé mortel",
      "description": "Après avoir bu ce the, vous tuez instantanément votre cible lorsque vous obtenez un succès critique sur une attaque. Si vous n'obtenez pas de succès critique sur une attaque avant votre prochain long repos, vous mourez."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 59,
      "rarete": "Légendaire",
      "nom": "Miroir de la renoncule",
      "description": "Lorsque vous subisser des dégâts, vous pouvez dépenser uri Espoir pour les annuler. Le miroir se brise alors."
    },
    {
      "source": "Livre de règle (2026)",
      "jet": 60,
      "rarete": "Légendaire",
      "nom": "Goutte d'étoile",
      "description": "Vous pouvez utiliser cette goutte d'étoile pour invoquer une grêle de comètes qui infligent 8d20 dégâts physiques à toutes es cibles à Très longue portée"
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 1,
      "rarete": "Ordinaire",
      "nom": "Bougie de protection",
      "description": "Vous pouvez allumer cette bougie pour remplir une zone à portée Proche d'un halo de lumière. Une créature extérieure au halo ne peut pas y entrer si elle a de mauvaises intentions envers une créature qui s'y trouve. La bougie brûle pendant une heure."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 2,
      "rarete": "Ordinaire",
      "nom": "Poussière iridescente",
      "description": "Cette poudre multicolore adhère à tout et empêche les créatures qui en sont couvertes de devenir Cachées."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 3,
      "rarete": "Ordinaire",
      "nom": "Graine verglacienne",
      "description": "Vous pouvez utiliser cet éclat de glace pour geler instantanément une étendue d'eau jusqu'à portée Proche."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 4,
      "rarete": "Ordinaire",
      "nom": "Bézoard de l'échanson",
      "description": "Vous pouvez avaler ce bézoard pour devenir immunisé contre les poisons jusqu'à votre prochain repos long."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 5,
      "rarete": "Ordinaire",
      "nom": "Potion de manteau de mousse",
      "description": "Vous pouvez boire ce thé pour vous fondre parfaitement dans les environnements naturels jusqu'à votre prochain repos."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 6,
      "rarete": "Ordinaire",
      "nom": "Pastille de l'oiseau-lyre",
      "description": "Vous pouvez dissoudre cette pastille dans votre bouche pour imiter parfaitement n'importe quelle voix que vous avez entendue jusqu'à la fin de la scène."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 7,
      "rarete": "Ordinaire",
      "nom": "Fiole de chute de plume",
      "description": "Vous pouvez boire cette potion pour ignorer les dégâts de chute pendant les 10 minutes suivantes."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 8,
      "rarete": "Ordinaire",
      "nom": "Salive chimérique",
      "description": "Vous pouvez appliquer cette salive sur une arme qui inflige des dégâts physiques pour changer son type de dégâts en magique jusqu'à votre prochain repos."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 9,
      "rarete": "Ordinaire",
      "nom": "Sachet de poussière spatiale",
      "description": "Cette poussière rend tout ce qu'elle recouvre plus léger que l'air. Un sachet contient assez de poussière pour recouvrir le contenu d'un panier de pique-nique, et les effets durent une heure."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 10,
      "rarete": "Ordinaire",
      "nom": "Herbe à pipe",
      "description": "Quand vous choisissez l'acte Effacer le Stress pendant un repos court, vous pouvez fumer cette feuille non enivrante pour effacer un Stress supplémentaire. Tout autre PJ ayant choisi l'acte Effacer le Stress bénéficie aussi de cet avantage."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 11,
      "rarete": "Ordinaire",
      "nom": "Poudre du voyant de la mort",
      "description": "Vous pouvez saupoudrer cette poudre sur un cadavre récent pour faire apparaître une reprise spectrale de la dernière minute de sa vie."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 12,
      "rarete": "Ordinaire",
      "nom": "Sel du pourfendeur",
      "description": "Vous pouvez répandre ce sel en ligne le long des rebords de fenêtre ou des seuils pour créer une barrière magique que les créatures mortes-vivantes ne peuvent pas franchir tant que la ligne n'est pas rompue."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 13,
      "rarete": "Ordinaire",
      "nom": "Lait de yakamel",
      "description": "Après avoir bu ce lait, la prochaine fois que vous effacez 1 point de blessure ou plus, vous effacez un point de blessure supplémentaire."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 14,
      "rarete": "Ordinaire",
      "nom": "Champignon de mousse lumineuse",
      "description": "Vous pouvez briser ce champignon en morceaux, ce qui le fait briller d'un bleu vif jusqu'à votre prochain repos long."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 15,
      "rarete": "Ordinaire",
      "nom": "Huile de vase rouge",
      "description": "Vous pouvez enduire votre arme de cette huile. La prochaine attaque réussie que vous faites avec cette arme inflige 1d8 dégâts magiques supplémentaires et Enflamme temporairement la cible. Tant qu'elle est Enflammée, la cible subit 1d4 dégâts magiques quand elle est mise en avant."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 16,
      "rarete": "Ordinaire",
      "nom": "Camp instantané",
      "description": "Vous pouvez déplier cette petite boîte mécanique en une tente de camping assez grande pour abriter six personnes en toute sécurité. La tente s'effondre à la fin de votre prochain repos long."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 17,
      "rarete": "Ordinaire",
      "nom": "Fagot de pattes d'araignée",
      "description": "Vous pouvez manger ces pattes d'araignée pour marcher sur les murs jusqu'à votre prochain repos."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 18,
      "rarete": "Ordinaire",
      "nom": "Bouteille de brume de Ciscane",
      "description": "Vous pouvez briser ce bocal pour remplir la zone à portée Proche d'une brume magique. Une créature qui entre dans la brume efface un Stress et devient Cachée."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 19,
      "rarete": "Ordinaire",
      "nom": "Graine d'épine-claquante",
      "description": "Vous pouvez lancer cette graine vers un point que vous voyez. Elle explose en un enchevêtrement de lianes qui Bloque temporairement toutes les créatures à portée Proche de ce point."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 20,
      "rarete": "Ordinaire",
      "nom": "Bouteille de lutin",
      "description": "Quand vous cochez votre dernier point de blessure, cette bouteille se brise pour libérer le Lutin qu'elle contient. Le Lutin efface tous vos points de blessure avant de s'effacer du Royaume mortel."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 21,
      "rarete": "Ordinaire",
      "nom": "Bombe gravitationnelle",
      "description": "Vous pouvez lancer cet orbe mécanique de la taille d'une pêche vers un point à portée Éloignée. Il implose et attire toutes les créatures et tous les objets à portée Proche de ce point jusqu'à portée de Mêlée de lui."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 22,
      "rarete": "Ordinaire",
      "nom": "Fleur commère",
      "description": "Vous pouvez planter cette graine dans la terre. Elle pousse instantanément en une petite fleur qui enregistre tout ce qu'elle entend pendant une semaine maximum. Quand on la cueille, la fleur récite ce qu'elle a enregistré en temps réel, puis se fane."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 23,
      "rarete": "Ordinaire",
      "nom": "Jeton de déplacement",
      "description": "Vous pouvez avaler ce jeton pour conjurer deux illusions de vous-même que vous pouvez contrôler. Chaque illusion dure jusqu'à ce qu'elle subisse des dégâts ou jusqu'à votre prochain repos."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 24,
      "rarete": "Ordinaire",
      "nom": "Poussière de la guenaude nocturne",
      "description": "Vous pouvez souffler cette poussière au visage d'un adversaire pour l'empêcher d'effacer du Stress jusqu'à votre prochain repos long."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 25,
      "rarete": "Inhabituel",
      "nom": "Fil auto-cousant",
      "description": "Vous pouvez utiliser ce fil pour effacer soit un point de blessure, soit 2 emplacements d'armure."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 26,
      "rarete": "Inhabituel",
      "nom": "Fortune du tailleur de pierre",
      "description": "Quand vous jetez cette brique grise au sol, elle devient immédiatement un mur de pierre solide de 2m de haut, 3m de large et 50cm d'épaisseur."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 27,
      "rarete": "Inhabituel",
      "nom": "Potion mnémonique",
      "description": "Vous pouvez boire cette potion pour Utiliser une Expérience sans dépenser d'Espoir."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 28,
      "rarete": "Inhabituel",
      "nom": "Onguent de salamandre",
      "description": "Vous pouvez appliquer cet onguent sur votre peau pour vous rendre immunisé à la chaleur jusqu'à votre prochain repos."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 29,
      "rarete": "Inhabituel",
      "nom": "Huile de vase verte",
      "description": "Vous pouvez enduire votre arme de cette huile. La prochaine attaque réussie que vous faites avec cette arme inflige 1d8 dégâts magiques supplémentaires et Corrode temporairement la cible. Tant qu'elle est Corrodée, la cible subit un malus de −2 à ses seuils de dégâts."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 30,
      "rarete": "Inhabituel",
      "nom": "Orbe de lumière solaire",
      "description": "Vous pouvez briser cet orbe pour que la zone à portée Très éloignée paraisse en plein jour ensoleillé pendant les 24 heures suivantes."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 31,
      "rarete": "Inhabituel",
      "nom": "Orbe de lumière lunaire",
      "description": "Vous pouvez briser cet orbe pour que la zone à portée Très éloignée paraisse en pleine nuit éclairée par la lune pendant les 24 heures suivantes."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 32,
      "rarete": "Inhabituel",
      "nom": "Flasque de Midas",
      "description": "Vous pouvez verser cette petite flasque de liquide alchimique sur un objet ordinaire pour le transmuter instantanément en une poignée d'or."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 33,
      "rarete": "Inhabituel",
      "nom": "Bâton d'inversion",
      "description": "Vous pouvez briser ce bâton contre le sol pour inverser une transformation ou un effet magique à portée Éloignée."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 34,
      "rarete": "Inhabituel",
      "nom": "Breuvage du berserker",
      "description": "Quand vous buvez cette gorgée de liquide, vous obtenez un bonus à votre Force et un malus à votre Finesse et à votre Savoir égaux à votre Instinct (minimum 1). Cet effet dure jusqu'à ce que vous effectuiez un mouvement de mort ou jusqu'à votre prochain repos."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 35,
      "rarete": "Inhabituel",
      "nom": "Éclat d'Embérite",
      "description": "Choisissez un point à portée Éloignée. Toutes les cibles à portée Proche de ce point doivent réussir un jet de réaction (16) ou subir 3d6 dégâts magiques et devenir temporairement En flammes. Tant qu'elle est En flammes, une créature doit lancer un d4 chaque fois qu'elle effectue un jet d'action. Sur un résultat de 1, elle coche un point de blessure. Sur un résultat de 4, elle efface la condition En flammes."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 36,
      "rarete": "Inhabituel",
      "nom": "Éclat d'Arcticite",
      "description": "Choisissez un point à portée Éloignée. Toutes les cibles à portée Proche de ce point doivent réussir un jet de réaction (16) ou subir 3d6 dégâts magiques et devenir temporairement Bloquées par la glace."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 37,
      "rarete": "Rare",
      "nom": "Éclat de Fulgurite",
      "description": "Choisissez un point à portée Éloignée. Toutes les cibles à portée Proche de ce point doivent réussir un jet de réaction (16) ou subir 3d6 dégâts magiques et cocher 1d4 Stress tandis que la foudre crépite dans la zone."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 38,
      "rarete": "Rare",
      "nom": "Philtre du démiurge",
      "description": "Vous pouvez boire ce philtre pour obtenir un bonus de +1 à votre Compétence pour votre prochain jet d'attaque réussi."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 39,
      "rarete": "Rare",
      "nom": "Thé de griffe de coquelet",
      "description": "Vous pouvez boire ce thé pour régénérer vos aptitudes comme si vous aviez pris un repos long."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 40,
      "rarete": "Rare",
      "nom": "Potion de vigilance",
      "description": "Vous pouvez boire cette potion pour obtenir un bonus de +1 à votre Esquive jusqu'à ce que vous cochiez un point de blessure."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 41,
      "rarete": "Rare",
      "nom": "Mixture cacophonique",
      "description": "Quand vous buvez cette potion, tout ce que vous dites ou faites durant l'heure suivante devient impossible à relater pour un témoin. Toute tentative de sa part de communiquer ce qu'il a vu, entendu ou perçu d'une autre façon sort confuse ou dénuée de sens."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 42,
      "rarete": "Rare",
      "nom": "Hydromel cauchemardesque",
      "description": "Vous pouvez boire cette potion pour découvrir la plus profonde peur de la prochaine personne dont vous croisez le regard. Quand vous le faites, le MJ gagne une Peur."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 43,
      "rarete": "Rare",
      "nom": "Pieu d'abjuration",
      "description": "Vous pouvez planter ce pieu dans le sol et faire une proclamation. Jusqu'à votre prochain repos, une créature à portée Éloignée du pieu qui transgresse cette proclamation doit cocher un Stress. Le pieu dure jusqu'à votre prochain repos, puis se brise."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 44,
      "rarete": "Rare",
      "nom": "Linceul du psychopompe",
      "description": "Vous pouvez poser ce linceul sur le cadavre d'une créature récemment décédée. L'esprit de la créature entre dans le linceul et devient votre assistant spectral jusqu'au prochain lever du soleil, moment où il franchit le voile de la mort et emporte le linceul avec lui."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 45,
      "rarete": "Rare",
      "nom": "Fiole d'encre profonde",
      "description": "Vous pouvez boire cette bouteille d'encre pour vous transformer en un céphalopode à peu près de votre taille pendant l'heure suivante. Vous obtenez une peau caoutchouteuse, des os souples, la capacité de respirer sous l'eau et de nouveaux membres jusqu'à en avoir huit au total."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 46,
      "rarete": "Rare",
      "nom": "Tonique de Mesmer",
      "description": "Quand vous buvez ce tonique, la seule chose que vous pouvez entendre jusqu'à votre prochain repos, ce sont les pensées de surface des créatures à portée Très proche."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 47,
      "rarete": "Rare",
      "nom": "Potion d'invisibilité",
      "description": "Vous êtes Caché jusqu'à ce que vous infligiez des dégâts à une autre créature ou jusqu'à votre prochain repos."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 48,
      "rarete": "Rare",
      "nom": "Sérum formoïde",
      "description": "Vous pouvez boire cette potion pour devenir un essaim de 16 millions de fourmis jusqu'à la fin de la scène. Vous conservez et avez accès à tout votre équipement, votre butin et vos aptitudes."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 49,
      "rarete": "Légendaire",
      "nom": "Onguent de peau d'acier",
      "description": "Vous pouvez appliquer cet onguent sur votre peau pour obtenir un bonus à vos seuils de dégâts égal à votre palier jusqu'à la fin de la scène."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 50,
      "rarete": "Légendaire",
      "nom": "Pomélo du demi-dieu",
      "description": "Vous pouvez manger cet agrume pour effacer tous vos points de blessure et votre Stress."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 51,
      "rarete": "Légendaire",
      "nom": "Esprit de peau de serpent",
      "description": "Vous pouvez boire cette potion pour muer de votre couche de peau extérieure et guérir une cicatrice."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 52,
      "rarete": "Légendaire",
      "nom": "Malédiction du magicien",
      "description": "Quand vous libérez l'âme piégée de ce lanceur de sorts, vous pouvez lancer un sort d'une carte de votre réserve comme si elle était dans votre sélection. Cela ne fonctionne pas pour les cartes placées définitivement en réserve."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 53,
      "rarete": "Légendaire",
      "nom": "La rupture par excellence",
      "description": "Vous pouvez utiliser cette lame magique pour trancher un lien magique ou métaphysique, comme un enchantement, un contrat, un lien magique ou un serment divin. Quand vous le faites, la lame se brise."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 54,
      "rarete": "Légendaire",
      "nom": "Masque du soi d'écho",
      "description": "Vous pouvez porter ce masque lors de votre prochain passage de niveau pour échanger les valeurs de n'importe lesquels de vos traits. Quand vous le faites, le masque devient votre visage permanent."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 55,
      "rarete": "Légendaire",
      "nom": "Cloche du nécro-cavalier",
      "description": "Vous pouvez briser cette cloche rouillée et sans battant contre le sol pour invoquer un destrier squelettique qui sort de terre et vous sert jusqu'au prochain lever du soleil."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 56,
      "rarete": "Légendaire",
      "nom": "Manteau de drake",
      "description": "Vous pouvez utiliser cette antique peau de dragon enchantée pour acquérir des caractéristiques draconiques jusqu'à la fin de la scène, moment où la peau tombe en lambeaux. D'ici là, vous pouvez voler et obtenez un bonus de +5 à vos seuils de dégâts et un bonus de +1 à votre Compétence."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 57,
      "rarete": "Légendaire",
      "nom": "Sophisme du joueur",
      "description": "Vous pouvez dépenser autant de poignées d'or que vous voulez en les plaçant dans ce pot en céramique à fente, en forme de cochon. Quand vous lancez le pot vers un point à portée Éloignée, il explose et inflige 1d20 dégâts magiques par poignée d'or dépensée à toutes les créatures à portée Proche de ce point. Tout l'or contenu dans le pot est détruit."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 58,
      "rarete": "Légendaire",
      "nom": "Tonique cœur-de-lion",
      "description": "Vous pouvez boire ce tonique pour obtenir un bonus de +1 à votre Compétence jusqu'à ce que vous fassiez un jet avec Peur."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 59,
      "rarete": "Légendaire",
      "nom": "Larmes du héros immortel",
      "description": "Quand vous buvez cette potion, la mort ne peut pas vous toucher jusqu'à votre prochain repos long. Quand vous devriez cocher votre dernier point de blessure, au lieu d'effectuer un mouvement de mort, vous faites un dernier jet d'action avant de sombrer dans un sommeil sans rêve jusqu'à ce qu'un allié choisisse le mouvement de temps mort Soigner les blessures pour effacer vos points de blessure."
    },
    {
      "source": "Espoir et Peur (2027)",
      "jet": 60,
      "rarete": "Légendaire",
      "nom": "Potion de pas de plume",
      "description": "Vous pouvez boire cette potion pour faire pousser de petites ailes à vos chevilles qui vous donnent un bonus à votre Esquive égal à votre palier jusqu'à votre prochain repos."
    },
    {
      "source": "Livre de règle (2026, Les colosses des Terrarides)",
      "jet": null,
      "rarete": "Les colosses des Terrarides",
      "nom": "Dynamite",
      "description": "Vous pouvez allumer ce bâton de dynamite et le lancer à courte portée.\nToutes les créatures à très courte portée de son point de chute doivent réussir un jet en réaction (14).\nCelles qui échouent subissent 1d20+2 dégâts physiques. Les cibles qui réussissent doivent cocher un stress. La dynamite inflige des dégâts doublés aux objets et structures inanimés."
    }
  ]
};
