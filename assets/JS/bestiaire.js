/* ============================================================
   Données du bestiaire Daggerheart.
   Un objet par adversaire, champs alignés sur les colonnes de
   l'Excel : Palier / Type / Catégorie / Nom / Description /
   Motivation & Tactique / Difficulté / Seuils mineur & majeur /
   Blessure / Stress / modificateur attaque / attaque standard /
   Expérience / Aptitude1..7 (nom + tag + texte).
   Régénéré automatiquement depuis COMPENDIUM.ods.
   ============================================================ */
const BESTIAIRE_DATA = {
  adversaires: [
  {
    "source": "Livre de règle (2026)",
    "id": "amas-de-squelette",
    "palier": 1,
    "type": "Sbire",
    "categorie": "Mort-vivant",
    "nom": "Amas de squelette",
    "description": "Un tas d'os cliquetants",
    "motivation": "Faire le mort, submerger, tomber en morceaux, voler la peau",
    "difficulte": 8,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": -1,
    "attaqueStandard": "Griffes : mêlée, 1 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (4)",
        "tag": "passive",
        "texte": "La créature est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 4 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 1 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "ancien-du-village",
    "palier": 1,
    "type": "Social",
    "categorie": "Royaume",
    "nom": "Ancien du village",
    "description": "L'ancien du village forestier, capable de subvenur aux bessoin des siens grâce à la magie de la nature.",
    "motivation": "juger, parler doucement, soutenir les traditions, s'occuper de sa communauté.",
    "difficulte": 14,
    "seuilMineur": 6,
    "seuilMajeur": null,
    "blessure": 2,
    "stress": 4,
    "modAttaque": -2,
    "attaqueStandard": "Dagues : mêlée; 1d4+2 phy",
    "experience": "Histoire +2, ami de la nature +3, pillier de la communauté +3",
    "aptitudes": [
      {
        "nom": "L'âge me la appris",
        "tag": "passive",
        "texte": "tous les jets d'actions visant a duper l'ancien subissent un déavantage."
      },
      {
        "nom": "Pas d'hospitalité",
        "tag": "action",
        "texte": "cocher un stress pour interdire aux alliés de l'ancien de vendre quelque chose ou d'apporter du confort à une cible ou ses alliés pendantles 2d6 prochains jours."
      },
      {
        "nom": "La paix regnera",
        "tag": "réaction",
        "texte": "Quand une créature attauqe un village sous les yeux de l'ancien, vous pouvez dépenser deux peurs. Cette créature perd tout ses espoirs, et doit cocher 2d4 de stress et réusir un jet réaction de Présence (15) sinon les tombe inconsciente pendant 1d4 heures. tant qu'elle est inconsiente, elle ne peut pas faire de jet d'action, ni parler et rate automatique ses jet de réaction. une fois que l'ancien a utilisé cette réaction, il ne peut plus jamis le faire."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "archer-squelette",
    "palier": 1,
    "type": "Distant",
    "categorie": "Mort-vivant",
    "nom": "Archer squelette",
    "description": "Un squelette fragile armé d'un arc court et de flèches.",
    "motivation": "Faire le mort, perforer les cible distraites, voler la peau",
    "difficulte": 9,
    "seuilMineur": 4,
    "seuilMajeur": 7,
    "blessure": 3,
    "stress": 2,
    "modAttaque": 2,
    "attaqueStandard": "Arc court : longue, 1d8+1 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Opportuniste",
        "tag": "passive",
        "texte": "Quand deux adversaires ou plus sont à très courte portée d'une creature, tous les degats que l'Archer inflige a cette creature sont doubles."
      },
      {
        "nom": "Tir mortel",
        "tag": "action",
        "texte": "Faites une attaque contre une cible Vulnerable à longue portée. En cas de succes, marquez un Stress pour infliger 3d4+8 degats physiques."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "bandit-du-couteau-sinueux",
    "palier": 1,
    "type": "Standard",
    "categorie": "Couteau sinueux",
    "nom": "Bandit du couteau sinueux",
    "description": "Un criminel rusé vêtu d'une cape brandissant l'un des couteau emblématique de son gang.",
    "motivation": "Dérober, lancer de la fumée, s'enfuir, tirer profit.",
    "difficulte": 12,
    "seuilMineur": 8,
    "seuilMajeur": 14,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Dagues : mêlée; 1d8+1 phy",
    "experience": "Voleur +2",
    "aptitudes": [
      {
        "nom": "Grimpeur",
        "tag": "passive",
        "texte": "Le bandit grimpe aussi facilement qu'il court."
      },
      {
        "nom": "D'en haut",
        "tag": "passive",
        "texte": "Quand le bandit réussit une attaque standard alors qu'il est hauteur par rapport à sa cible, il infige 1d10+1 dégâts physique au lieu de ses dégâts standars."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "brisegenoux-du-couteau-sinueux",
    "palier": 1,
    "type": "Cogneur",
    "categorie": "Couteau sinueux",
    "nom": "Brisegenoux du couteau sinueux",
    "description": "un bagarreur qui en impose, armé d'un gros gourdin.",
    "motivation": "Agripper, dérober, intimider, tirer profit",
    "difficulte": 12,
    "seuilMineur": 7,
    "seuilMajeur": 14,
    "blessure": 7,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Gourdin : mêlée, 1d4+6 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Je les tiens",
        "tag": "passive",
        "texte": "Les creatures Entravees par le Briseur subissent le double de degats des attaques d'autres adversaires."
      },
      {
        "nom": "Maintien au sol",
        "tag": "action",
        "texte": "Faites une attaque contre une cible au Corps a corps. En cas de succes, la cible ne subit pas de degats mais est Entravee et Vulnerable. La cible peut se liberer, annulant les deux conditions, avec un Jet de Force reussi, ou est liberee automatiquement si le Briseur subit des degats Majeurs ou superieurs."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "capaine-pirate",
    "palier": 1,
    "type": "Meneur",
    "categorie": "Pirate",
    "nom": "Capaine Pirate",
    "description": "Un Loup de mer charismatique coiffé d'un imposant tricorne, toujours enthousiaste à l'idée de sdonner au pillage.",
    "motivation": "Commander, faire subir le supplice de la planche, mener des raids, piller",
    "difficulte": 14,
    "seuilMineur": 7,
    "seuilMajeur": 14,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 4,
    "attaqueStandard": "Coutelas : mêlée 1d12+2 phy",
    "experience": "Commandant +2, marin +3",
    "aptitudes": [
      {
        "nom": "Boucanier",
        "tag": "passive",
        "texte": "Quand le Capitaine marque 2 PB ou moins suite a une attaque au Corps a corps, l'attaquant doit marquer un Stress."
      },
      {
        "nom": "Renforts",
        "tag": "action",
        "texte": "Une fois par Scene, marquez un Stress pour invoquer une Horde de Pillards Pirates, qui apparait à longue portée."
      },
      {
        "nom": "Pas de quartier",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible ayant trois Pirates ou plus au Corps a corps. Le Capitaine mene les Pirates dans une vague de menaces et de promesses d'une tombe aquatique. La cible doit faire un Jet de reaction de Presence. En cas d'echec, la cible marque 1d4+1 Stress. En cas de succes, elle doit marquer un Stress."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "chef-de-la-garde",
    "palier": 1,
    "type": "Meneur",
    "categorie": "Millitaire",
    "nom": "Chef de la garde",
    "description": "Un garde chevroné avec une masse, siffet et une voix puissante.",
    "motivation": "arrêter, chercher la gloire, clouer au sol, fermer les portes.",
    "difficulte": 15,
    "seuilMineur": 7,
    "seuilMajeur": 13,
    "blessure": 7,
    "stress": 3,
    "modAttaque": 4,
    "attaqueStandard": "Masse : mêlée, 1d10+4",
    "experience": "Commandement +2, connaissance local +2",
    "aptitudes": [
      {
        "nom": "Rallier les gardes",
        "tag": "action",
        "texte": "dépenser deux peur pour mettre en avant le Chef de la garde et jusqu'à 2d4 allié à longue portée."
      },
      {
        "nom": "A mon signale",
        "tag": "réaction",
        "texte": "Compte à rebours (5).Activez ce compte a rebours quand le chef de la garde est mis en avant pour la premier fois. il avance quand un PJ effectuer une jet attaque. Quand il arriveà terme, tous les gardes archer à longue portée font une attaque standard avec avantage contre les cible la plus proche d'eux située a leur portée. Si la plussieur attaque touchent une même cible, leurs dégâts s'additionnent."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand le chef de la garde réussit une attaque contre un PJ, vous gagner une peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "chevalier-squelette",
    "palier": 1,
    "type": "Cogneur",
    "categorie": "Mort-vivant",
    "nom": "Chevalier squelette",
    "description": "Un grand squelette en armure brandissant une énorme épée.",
    "motivation": "Semer le chaos, tuer des vivant, voler la peau",
    "difficulte": 13,
    "seuilMineur": 7,
    "seuilMajeur": 13,
    "blessure": 5,
    "stress": 2,
    "modAttaque": 2,
    "attaqueStandard": "Grande épée rouilée : mêlée, 1d10+2 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Terrifiant",
        "tag": "passive",
        "texte": "Quand le Chevalier reussit une attaque, tous les PJ à porter très courte perdent un Espoir et vous gagnez une Peur."
      },
      {
        "nom": "Entaillé jusqu'à l'os",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre toutes les cibles à trés courte portée. Les cibles touchees subissent 1d8+2 degats physiques et doivent marquer un Stress."
      },
      {
        "nom": "Creuser deux tombe",
        "tag": "réaction",
        "texte": "Quand le Chevalier est vaincu, il fait une attaque contre une cible à très courte portée (en priorite la creature qui l'a tue). En cas de succes, la cible subit 1d4+8 degats physiques et perd 1d4 Espoir."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "courtisan",
    "palier": 1,
    "type": "Social",
    "categorie": "Royaume",
    "nom": "Courtisan",
    "description": "Un mondain ambitieux au habits très ostentatoires.",
    "motivation": "Comploter, Discréditer, manoeuvrer, obtenir des faveurs",
    "difficulte": 12,
    "seuilMineur": 4,
    "seuilMajeur": 8,
    "blessure": 3,
    "stress": 4,
    "modAttaque": -4,
    "attaqueStandard": "Dagues : mêlée, 1d4+2 phy",
    "experience": "Mondain +3",
    "aptitudes": [
      {
        "nom": "Moquerie",
        "tag": "action",
        "texte": "Marquez un Stress pour dire quelque chose de moqueur et forcer une cible a portee Pres a faire un Jet de reaction de Presence (14) pour voir si elle peut sauver la face. En cas d'echec, la cible doit marquer 2 Stress et est Vulnerable jusqu'a la fin de la Scene."
      },
      {
        "nom": "Bouc emissaire",
        "tag": "action",
        "texte": "Depensez une Peur et ciblez un PJ. Le Courtisan convainc une foule ou un individu important que la cible est la cause de leur conflit ou de leur malheur actuel."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "creature-artificielle",
    "palier": 1,
    "type": "Solo",
    "categorie": "Artificielle",
    "nom": "Créature artificielle",
    "description": "un être de pierre et d'acier à la silhouette, assemblé et animé par magie.",
    "motivation": "Détruire l'environnement, piètiner les groupes, pulvériser sa cible, servir sont créateur",
    "difficulte": 13,
    "seuilMineur": 7,
    "seuilMajeur": 15,
    "blessure": 9,
    "stress": 4,
    "modAttaque": 4,
    "attaqueStandard": "Coup de poing : mêlée, 1d20 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "La créature peut être mis en avant jusqu'à 2 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Structure faible",
        "tag": "passive",
        "texte": "Lorsque la créature artificielle coche des PB suite a des dégâts physique, elle doit cocher un de plus"
      },
      {
        "nom": "piétiner",
        "tag": "action",
        "texte": "Cocher un stress pour faire une attaque contre toutes les cibles présente sur sont chemin de la créature lorqu'elle se déplace. celles contre lesquelles elle reussit subissent 1d8 dégâts physique."
      },
      {
        "nom": "Surcharge",
        "tag": "réaction",
        "texte": "Vous pouvez cocher un stress avant de faire le jet de dégât suivant l'attaque de la créature artificielle pour y ajouter de +10. la créature peut alors être de nouveau mise en avant."
      },
      {
        "nom": "Explosion mortelle",
        "tag": "réaction",
        "texte": "Lorsque que la créature coche sont dernier PB, la magie qui l'animait se brise dans une explosionde force. Effectuer une attaque contre toutes les cibles à trés courte portée celle quelle touche subissent 1d12+2 dégâts magique."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "defenseur-en-racine",
    "palier": 1,
    "type": "Cogneur",
    "categorie": "Plante",
    "nom": "Défenseur en raciné",
    "description": "Une personne végétale de forte carrure qui tente de vous agripper avec ses lianes.",
    "motivation": "Agrupper, marteler, prendre en embuscade, protéger",
    "difficulte": 10,
    "seuilMineur": 8,
    "seuilMajeur": 14,
    "blessure": 7,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Lianes : courte 1d8+3 phy",
    "experience": "Gigantesque +3",
    "aptitudes": [
      {
        "nom": "Onde de choc",
        "tag": "action",
        "texte": "Frappez le sol, repoussant toutes les cibles à courte portée Tres Pres jusqu'a portee Loin. Chaque cible repoussee de cette facon doit marquer un Stress."
      },
      {
        "nom": "Agripper et traîner",
        "tag": "action",
        "texte": "Faites une attaque contre une cible à courte portée . En cas de succes, depensez une Peur pour l'attirer au Corps a corps, infliger 1d6+2 degats physiques et l'Entraver jusqu'a ce que le Defenseur subisse des degats Severes."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "demon-mineur",
    "palier": 1,
    "type": "Solo",
    "categorie": "Déchu",
    "nom": "Démon mineur",
    "description": "Une créature à la peau écarlate issu du cercles inférieurs et dévorée par sa rage envers tous les mortels.",
    "motivation": "Agi erratiquement, rassembler ses cibles, se délecter de la douleur, tourmenter",
    "difficulte": 14,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 8,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Griffe : mêlée,1d8+6 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 2 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Tout doit périr",
        "tag": "passive",
        "texte": "Quand un PJ obtient un echec avec Peur alors qu'il est à coute portée du Demon, il perd un Espoir."
      },
      {
        "nom": "Feu de l'enfer",
        "tag": "action",
        "texte": "Depensez une Peur pour faire pleuvoir du feu infernal à longue portée. Toutes les cibles dans la zone doivent faire un Jet de reaction d'Agilite. Les cibles qui echouent subissent 1d20+3 degats magiques. Les cibles qui reussissent subissent la moitie des degats."
      },
      {
        "nom": "Faucheur",
        "tag": "réaction",
        "texte": "Avant de lancer les degats de l'attaque du Demon, vous pouvez marquer un Stress pour gagner un bonus au jet de degats egal au nombre actuel de PV marques du Demon."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "druide-forestier",
    "palier": 1,
    "type": "Soutien",
    "categorie": "Guerrier",
    "nom": "Druide forestier",
    "description": "Un vagabond solitaire qui comprend les annimaux et les plantes.",
    "motivation": "Faire appel à la nature, nepas laisser de traces, protéger les bois à tout prix.",
    "difficulte": 11,
    "seuilMineur": 6,
    "seuilMajeur": 10,
    "blessure": 4,
    "stress": 5,
    "modAttaque": 0,
    "attaqueStandard": "Bâton en chêne : mêlée, 1d4+2 phys",
    "experience": "Connaissance des animaux +2, Configuration du terrain +3",
    "aptitudes": [
      {
        "nom": "Calme du val",
        "tag": "action",
        "texte": "pour mettre un terme à effet d'u sort ou éliminer un état effectant le druide ou un allié situé dans son champ de vision à très courte portée"
      },
      {
        "nom": "Murmure assourdissant",
        "tag": "action",
        "texte": "Cochez un stress pour appeler le vent dans les branches. une cible à courte portée doit réussir un jet de réaction d'instinct, sinon le bruit du vent emplit ses oreilles. Elle n'entend plsu rien d'autre que lui, doit cocher un stress et se trouve vulnérable tant qu'elle n'a pas effacé un stress."
      },
      {
        "nom": "végétation suradondante",
        "tag": "action",
        "texte": "dépenser une Peur et choisissez un point à longue portée. Des Ronces et des épineux surgissent du sol emplissent toute la zone à courte portée de ce point. Une créature qui pénétre dans la zone ou s'y déplace subit 2d6+3 dégâts physique et doit réussir un jet de réaction d'agilité, sinon elle est bloquée jusqy'à ce qu'elle réussisse un jet de finnesse ou que le druide subisse des dégâts graves."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "elementaire-de-chaos-mineur",
    "palier": 1,
    "type": "Solo",
    "categorie": "Elémentaire",
    "nom": "Elémentaire de Chaos mineur",
    "description": "Une masse scintillante de magie incontrôlable.",
    "motivation": "Déconcerter, déstabiliser, se métamorphoser",
    "difficulte": 14,
    "seuilMineur": 7,
    "seuilMajeur": 14,
    "blessure": 7,
    "stress": 3,
    "modAttaque": 3,
    "attaqueStandard": "Déflgration élémentaire : courte, 12+4 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Forme de magie",
        "tag": "passive",
        "texte": "L'Elementaire est resistant aux degats magiques."
      },
      {
        "nom": "Flux nauséeux",
        "tag": "action",
        "texte": "Marquez un PB pour forcer toutes les cibles a courte portée s a marquer un Stress et a devenir Vulnerables jusqu'a leur prochain repos ou jusqu'a ce qu'elles effacent un PB."
      },
      {
        "nom": "refonte de réalité",
        "tag": "action",
        "texte": "Depensez une Peur pour transformer la zone a courte portée en un biome different. Toutes les cibles dans cette zone subissent 2d6+3 degats magiques directs."
      },
      {
        "nom": "Renvoi magique",
        "tag": "réaction",
        "texte": "Quand l'Elementaire subit des degats d'une attaque à courte portée, infligez a l'attaquant des degats egaux a la moitie des degats infliges."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "elementaire-de-feu-mineur",
    "palier": 1,
    "type": "Solo",
    "categorie": "Elémentaire",
    "nom": "Elémentaire de feu mineur",
    "description": "Une flame vivante de la taille d'un feu de joie.",
    "motivation": "Démarrer des incendie, encercler ses ennemis, grandir, intimider",
    "difficulte": 13,
    "seuilMineur": 7,
    "seuilMajeur": 15,
    "blessure": 9,
    "stress": 3,
    "modAttaque": 3,
    "attaqueStandard": "Déflgration élémentaire : longue, 10+4 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 2 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Terre brûlée",
        "tag": "action",
        "texte": "Marquez un Stress pour choisir un point à longue portée. Le sol a portee courte portée de ce point s'enflamme immediatement. Toutes les creatures dans cette zone doivent faire un Jet de reaction d'Agilite. Les cibles qui echouent subissent 2d8 degats magiques. Les cibles qui reussissent subissent la moitie des degats."
      },
      {
        "nom": "Explosion",
        "tag": "action",
        "texte": "Depensez une Peur pour eructer une explosion ardente. Faites une attaque contre toutes les ciblesà coute portée. Les cibles touchees subissent 1d8 degats magiques et sont repoussees à longue portée."
      },
      {
        "nom": "Consumer le petit bois",
        "tag": "réaction",
        "texte": "Trois fois par Scène, quand l'Elementaire se deplace sur des objets hautement inflammables, il les consume pour effacer un PB ou un Stress."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "garde-archer",
    "palier": 1,
    "type": "Distant",
    "categorie": "Millitaire",
    "nom": "Garde archer",
    "description": "Une garde de haute taille portant un arc long et un carquois d'ou dépassent des flèches au couleur de la ville.",
    "motivation": "arrêter, clouer au sol, fermerles portes, finir la journée.",
    "difficulte": 10,
    "seuilMineur": 4,
    "seuilMajeur": 8,
    "blessure": 3,
    "stress": 2,
    "modAttaque": 1,
    "attaqueStandard": "Arc long :  longue, 1d8+3 phy",
    "experience": "connaissance locales +3",
    "aptitudes": [
      {
        "nom": "Tir handicapant",
        "tag": "action",
        "texte": "Faites une attaque contre une cible à longue portée. En cas de succes, marquez un Stress pour infliger 1d12+3 degats physiques. Si la cible marque des PB suite a cette attaque, elle a un Desavantage aux Jets d'Agilite jusqu'a ce qu'elle efface au moins 1 PB."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "garde-epeiste",
    "palier": 1,
    "type": "Standard",
    "categorie": "Millitaire",
    "nom": "Garde épéiste",
    "description": "Un garde en armure portant une épée et un bouclier aux couleur de la ville.",
    "motivation": "arrêter, clouer au sol, fermerles portes, finir la journée.",
    "difficulte": 12,
    "seuilMineur": 5,
    "seuilMajeur": 9,
    "blessure": 5,
    "stress": 2,
    "modAttaque": 1,
    "attaqueStandard": "épée longue : mêlée, 1d6+1phy",
    "experience": "connaissance locales +3",
    "aptitudes": [
      {
        "nom": "Mur de boucliers",
        "tag": "passive",
        "texte": "Une creature qui tente de se deplacer a portee Tres Pres du Garde doit reussir un Jet d'Agilite. Si d'autres Gardes Armes se tiennent en ligne a cote du premier, et que chacun est au Corps a corps d'un autre garde de la ligne, la Difficulte augmente du nombre total de gardes dans cette ligne."
      },
      {
        "nom": "Retenir",
        "tag": "action",
        "texte": "Faites une attaque contre une cible a portee Très court. En cas de succes, marquez un Stress pour Entraver la cible jusqu'a ce qu'elle se libere avec une attaque reussie, un Jet de Finesse ou un Jet de Force."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "guerrier-squelette",
    "palier": 1,
    "type": "Standard",
    "categorie": "Mort-vivant",
    "nom": "Guerrier squelette",
    "description": "Un squelette couvert de pousière armé d'une épée rouillée",
    "motivation": "Feindre la mort, se liguer, voler la peau",
    "difficulte": 10,
    "seuilMineur": 4,
    "seuilMajeur": 8,
    "blessure": 3,
    "stress": 2,
    "modAttaque": 0,
    "attaqueStandard": "épée : mêlée, 1d6+2 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Rien que des os",
        "tag": "passive",
        "texte": "Le Guerrier est resistant aux degats physiques."
      },
      {
        "nom": "Ne reste pas mort",
        "tag": "réaction",
        "texte": "Quand le Guerrier est vaincu, vous pouvez le mettre en avant et lancer un d6. Sur un resultat de 6, s'il y a d'autres adversaires sur le champ de bataille, le Guerrier se reforme sans PB marques."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "jeune-dryade",
    "palier": 1,
    "type": "Meneur",
    "categorie": "Plante",
    "nom": "Jeune Dryade",
    "description": "Une femme de la forêt impérieuse qui dirige les défense de ses bois.",
    "motivation": "Commander, éliminer les indésirable, faire pousser",
    "difficulte": 11,
    "seuilMineur": 6,
    "seuilMajeur": 11,
    "blessure": 6,
    "stress": 2,
    "modAttaque": 0,
    "attaqueStandard": "Faux : mêlée, 1d8+5 phy",
    "experience": "Meneuse +3",
    "aptitudes": [
      {
        "nom": "Voix de la forêt",
        "tag": "action",
        "texte": "Marquez un Stress pour donner le Projecteur a 1d4 allies a portee d'une cible qu'ils peuvent attaquer sans se deplacer. En cas de succes, leurs attaques infligent la moitie des degats."
      },
      {
        "nom": "Cage épineuse",
        "tag": "action",
        "texte": "Depensez une Peur pour former une cage autour d'une cible à courte portée et l'Entraver jusqu'a ce qu'elle soit liberee avec un Jet de Force reussi. Quand une creature fait un Jet d'action contre la cage, elle doit marquer un Stress."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "lame-sort",
    "palier": 1,
    "type": "Meneur",
    "categorie": "Guerrier",
    "nom": "Lame sort",
    "description": "Un mercenaire allaint dangereusement escrime et magie.",
    "motivation": "Commander, faire exploser, supporter",
    "difficulte": 14,
    "seuilMineur": 8,
    "seuilMajeur": 14,
    "blessure": 6,
    "stress": 3,
    "modAttaque": 3,
    "attaqueStandard": "Epée longue renforcée : mêlée, 1d8+4 phy ou mag",
    "experience": "Connaissances magique +2",
    "aptitudes": [
      {
        "nom": "Acier magique",
        "tag": "passive",
        "texte": "Les degats infliges par l'attaque standard du Mage-Lame sont consideres comme physiques et magiques a la fois."
      },
      {
        "nom": "Explosion suppressive",
        "tag": "action",
        "texte": "Marquez un Stress et ciblez un groupe à longue portée. Toutes les cibles doivent reussir un Jet de reaction d'Agilite ou subir 1d8+2 degats magiques. Vous gagnez une Peur pour chaque cible ayant marque des PB suite a cette attaque."
      },
      {
        "nom": "se déplacer à l'unisson",
        "tag": "action",
        "texte": "Depensez 2 Peurs pour donner le Projecteur a jusqu'a cinq allies a portee Loin."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "laquais-du-couteau-sinueux",
    "palier": 1,
    "type": "Sbire",
    "categorie": "Couteau sinueux",
    "nom": "Laquais du couteau sinueux",
    "description": "Un voleur vêtu simplement, armé de courtes dagueset impatientde prouver sa valeur.",
    "motivation": "lancer de la fumée, s'enfuir, tirer profit",
    "difficulte": 9,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": -2,
    "attaqueStandard": "Dagues : mêlée, 2 phy",
    "experience": "Voleur +2",
    "aptitudes": [
      {
        "nom": "Sbire (3)",
        "tag": "passive",
        "texte": "Le Larbin est vaincu quand il subit le moindre degat. Pour chaque 3 degats qu'un PJ inflige au Larbin, vainquez un Sbire supplementaire a portee que l'attaque toucherait."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 2 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "lieutenant-du-couteau-sinueux",
    "palier": 1,
    "type": "Meneur",
    "categorie": "Couteau sinueux",
    "nom": "Lieutenant du couteau sinueux",
    "description": "Un bandit chevronné vêtu du cuir de qualité, doté d'une voix puissante et d'yeux rusés.",
    "motivation": "Commander, renforcer, tirer profit, tyranniser",
    "difficulte": 13,
    "seuilMineur": 7,
    "seuilMajeur": 14,
    "blessure": 6,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "javelot : courte, 1d8+3 phy",
    "experience": "connaissance locales +2",
    "aptitudes": [
      {
        "nom": "Tacticien",
        "tag": "action",
        "texte": "Quand vous donnez le Projecteur au Lieutenant, marquez un Stress pour donner aussi le Projecteur a deux allies a portee Pres."
      },
      {
        "nom": "Encore plus en réserve",
        "tag": "action",
        "texte": "Invoquez trois Larbins du Couteau Dentele, qui apparaissent a portee Loin."
      },
      {
        "nom": "Coup de grâce",
        "tag": "action",
        "texte": "Depensez une Peur pour faire une attaque contre une cible Vulnerable a portee Pres. En cas de succes, infligez 2d6+12 degats physiques et la cible doit marquer un Stress."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand le Lieutenant reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "loup-sinistre",
    "palier": 1,
    "type": "Traqueur",
    "categorie": "Bête",
    "nom": "Loup sinistre",
    "description": "Un loup de grande taille aux crocs menaçants, que vous croiserez rarement seul.",
    "motivation": "Défendre le territoire, encercler, persécuter, protéger la meute, suivre",
    "difficulte": 12,
    "seuilMineur": 5,
    "seuilMajeur": 9,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Griffe : mêlée,1d6+2 phy",
    "experience": "sens affûtés +3",
    "aptitudes": [
      {
        "nom": "Tactiques de meute",
        "tag": "passive",
        "texte": "Si le Loup reussit une attaque standard et qu'un autre Loup Sinistre est au Corps a corps de la cible, infligez 1d6+5 degats physiques au lieu des degats standard et vous gagnez une Peur"
      },
      {
        "nom": "Frappe Handicapante",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre une cible au Corps a corps. En cas de succes, infligez 3d4+10 degats physiques directs et rendez la cible Vulnerable jusqu'a ce qu'elle efface au moins 1 PB."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "maitre-d-armes",
    "palier": 1,
    "type": "Cogneur",
    "categorie": "Millitaire",
    "nom": "Maître d'armes",
    "description": "Un maître d'armes qui mani un épée deux fois plus grande que lui",
    "motivation": "Agir en premier, attaqueles plus faible, intimider",
    "difficulte": 14,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 6,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Claymore : trés courte, 1d12+2 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Frappe provocante",
        "tag": "action",
        "texte": "Faites une attaque standard contre une cible. En cas de succes, marquez un Stress pour Provoquer la cible jusqu'a sa prochaine attaque reussie. La prochaine fois que la cible Provoquee attaque, elle a un Desavantage contre les cibles autres que le Maitre d'Armes."
      },
      {
        "nom": "Montée d'adrénaline",
        "tag": "action",
        "texte": "Une fois par Scene, depensez une Peur pour effacer 2 PB et 2 Stress."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "marchand",
    "palier": 1,
    "type": "Social",
    "categorie": "Royaume",
    "nom": "Marchand",
    "description": "Un marchand finement habillé avec un œil aiguisé pour le gain financier.",
    "motivation": "Achetez bas et vendez haut, créez de la demande, gonflez les prix, recherchez le profit",
    "difficulte": 12,
    "seuilMineur": 4,
    "seuilMajeur": 8,
    "blessure": 3,
    "stress": 3,
    "modAttaque": -4,
    "attaqueStandard": "Gourdin : mêlée, 1d4+1 phy",
    "experience": "Habile négociateur +3",
    "aptitudes": [
      {
        "nom": "Traitement préférentiel",
        "tag": "passive",
        "texte": "Un PJ qui réussit un jet de Présence contre le Marchand obtient une remise sur les achats. Un PJ qui échoue sur un jet de Présence contre le marchand doit payer plus et est désavantagé sur les futurs jets de présence contre le marchand."
      },
      {
        "nom": "L'affolement",
        "tag": "passive",
        "texte": "Lorsqu'un PJ lance un 14 ou moins sur un jet de Présence effectué contre le marchand, il doit marquer un stress."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "maudisseur-du-couteau-sinueux",
    "palier": 1,
    "type": "Soutien",
    "categorie": "Couteau sinueux",
    "nom": "Maudisseur du couteau sinueux",
    "description": "Un bandit vêtu d'une cape ornée de babioles magique qui utilise des malédictions pour gêner ses ennemis.",
    "motivation": "Commander, maudire, tirer profit",
    "difficulte": 13,
    "seuilMineur": 5,
    "seuilMajeur": 9,
    "blessure": 4,
    "stress": 4,
    "modAttaque": 2,
    "attaqueStandard": "Bâton : longue, 1d6+2 mag",
    "experience": "Connaissances magique +2",
    "aptitudes": [
      {
        "nom": "Malédiction",
        "tag": "action",
        "texte": "Choisissez une cible à longue portée et  maudissez-la temporairement. tant qu'elle est maudite, vous pouvez cocher un stress quand elle fait un jet espoir pour le remplacer par un jet de peur."
      },
      {
        "nom": "Flux chaotique",
        "tag": "action",
        "texte": "Effectuer une attaque contre un maximum de trois cibles à très courte portée. cochez un stress pour infliger 2d6+3 dégâts magique à celles touchées."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "mercenaire",
    "palier": 1,
    "type": "Sbire",
    "categorie": "Guerrier",
    "nom": "Mercenaire",
    "description": "Un mercenaire bien décidé à tenter sa chance.",
    "motivation": "Charger, lacérer, submerger, tirer profit.",
    "difficulte": 10,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 3,
    "attaqueStandard": "épée longue : mêlée, 3 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (4)",
        "tag": "passive",
        "texte": "La créature est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 4 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 3 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "meute-e-zombie-2-pb",
    "palier": 1,
    "type": "Horde",
    "categorie": "Mort-vivant",
    "nom": "Meute e zombie (2/Pb)",
    "description": "Un groupe de cadavres en ruine se déplaçant instinctivement ensemble.",
    "motivation": "manger de la chair, être affamé, marteler",
    "difficulte": 8,
    "seuilMineur": 6,
    "seuilMajeur": 12,
    "blessure": 6,
    "stress": 3,
    "modAttaque": -1,
    "attaqueStandard": "Morsure : mêlée, 1d10+2 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Horde (1d4+2)",
        "tag": "passive",
        "texte": "Lorsque les zombies ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige à la place 1d4+2 dégâts physiques."
      },
      {
        "nom": "Submerger",
        "tag": "réaction",
        "texte": "Lorsque les zombies marquent HP à partir d'une attaque à portée de mêlée, vous pouvez marquer un stress pour lancer une attaque standard contre l'attaquant."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "moustique-geant-5-pb",
    "palier": 1,
    "type": "Horde",
    "categorie": "Inscete",
    "nom": "Moustique géant (5/PB)",
    "description": "Des dizaine de moustique de la taille d'un poing qui volent en groupe pour se protéger.",
    "motivation": "Persécuter, voler loin, voler du sang",
    "difficulte": 10,
    "seuilMineur": 5,
    "seuilMajeur": 9,
    "blessure": 6,
    "stress": 3,
    "modAttaque": -2,
    "attaqueStandard": "Proboscis : mêlée, 1d8+3 phy",
    "experience": "Camouflage +2",
    "aptitudes": [
      {
        "nom": "Horde (1d4+2)",
        "tag": "passive",
        "texte": "Lorsque les Moustique ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige à la place 1d4+2 dégâts physiques."
      },
      {
        "nom": "Volant",
        "tag": "passive",
        "texte": "Tant qu'ils volent, les Moustiques ont un bonus de +2 a leur Difficulte."
      },
      {
        "nom": "Suceur de sang",
        "tag": "réaction",
        "texte": "Quand l'attaque des Moustiques force une cible a marquer des PB, vous pouvez marquer un Stress pour forcer la cible a marquer un PB supplementaire."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "noble-mesquin",
    "palier": 1,
    "type": "Social",
    "categorie": "Royaume",
    "nom": "Noble mesquin",
    "description": "Un aristocrate débordnat d'arrogance, richement vêtu et paré de beaux bijoux.",
    "motivation": "Abuser de son pouvoir, mobiliser des sbire, rassembler des ressources",
    "difficulte": 14,
    "seuilMineur": 6,
    "seuilMajeur": 10,
    "blessure": 3,
    "stress": 5,
    "modAttaque": -3,
    "attaqueStandard": "Rapière : mêlée, 1d6+1 phy",
    "experience": "Aristocrate +3",
    "aptitudes": [
      {
        "nom": "Mes terres, mes règles",
        "tag": "passive",
        "texte": "Toutes les action sociales menées à l'encontre du noble sur son domaine subissent un désavantage."
      },
      {
        "nom": "Garde, emparez-vous d'eux !",
        "tag": "action",
        "texte": "Une fois par scène, cocher un stress pour invoquer 1d4 garde épéistes, qui entrent en jeu à longue portée pour obéir à la volonté du noble."
      },
      {
        "nom": "Exil",
        "tag": "action",
        "texte": "Dépenser une peur et prendre un PJ pour cible. le noble procame que la cible et ses alliés sont exilés de sont tessitoire. Une cible exilée et ses alliés subissent un déavantage lors des interaction sociale menées sur le domaine du noble."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "nuee-de-rats-10-pb",
    "palier": 1,
    "type": "Horde",
    "categorie": "Bête",
    "nom": "Nuée de rats (10/PB)",
    "description": "Une massse grouillante de rongeurs ordinaire qui se déplace comme une marée affamé.",
    "motivation": "Dévorer, grouiller, masquer",
    "difficulte": 10,
    "seuilMineur": 6,
    "seuilMajeur": 10,
    "blessure": 6,
    "stress": 2,
    "modAttaque": -3,
    "attaqueStandard": "Griffe : mêlée,1d8+2 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Horde (1d4+2)",
        "tag": "passive",
        "texte": "Lorsque les Rats ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige à la place 1d4+2 dégâts physiques."
      },
      {
        "nom": "Dans les dents",
        "tag": "passive",
        "texte": "Toutes les cibles au Corps a corps ont un Desavantage sur les attaques contre des cibles autres que la Nuee."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "nuee-de-ronces-enchevetrees-3-pb",
    "palier": 1,
    "type": "Horde",
    "categorie": "Plante",
    "nom": "Nuée de ronces enchevêtrées (3/PB)",
    "description": "Un groupe de vivevoltants animés buveur de sang, aussi gros que des calebasses.",
    "motivation": "Digérer enchevêtrer immobiliser",
    "difficulte": 12,
    "seuilMineur": 6,
    "seuilMajeur": 11,
    "blessure": 6,
    "stress": 3,
    "modAttaque": 0,
    "attaqueStandard": "Epine : mêlée, 1d6+3 phy",
    "experience": "Camouflage +2",
    "aptitudes": [
      {
        "nom": "Horde (1d4+2)",
        "tag": "passive",
        "texte": "Lorsque les ronces ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige à la place 1d4+2 dégâts physiques."
      },
      {
        "nom": "Broyer",
        "tag": "action",
        "texte": "Marquez un Stress pour infliger 2d6+8 degats physiques directs a une cible ayant 3 jetons de ronce ou plus."
      },
      {
        "nom": "Encombrer",
        "tag": "réaction",
        "texte": "Quand la Nuee reussit une attaque, donnez un jeton de ronce a la cible. Si une cible a des jetons de ronce, elle est Entravee. Si une cible a 3 jetons de ronce ou plus, elle est aussi Vulnerable. Tous les jetons de ronce peuvent etre retires en reussissant un Jet de Finesse (12 + le nombre de jetons de ronce) ou en infligeant des degats Majeurs ou superieurs a la Nuee. Si les jetons sont retires via un Jet de Finesse, un nombre de Sbires Ronces egal au nombre de jetons retires apparait au Corps a corps."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "ogre-des-cavernes",
    "palier": 1,
    "type": "Solo",
    "categorie": "Ogroïde",
    "nom": "Ogre des cavernes",
    "description": "Un énorme Humanoïde qui considère tout forne de vie intelligente comme de la nourriture.",
    "motivation": "Arracher des menbres, arracher des tête, écraser, festoyer, lancer des ennemis",
    "difficulte": 13,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 8,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Gourdin : mêlée, 1d6+2 phy",
    "experience": "Lancer +2",
    "aptitudes": [
      {
        "nom": "Montée en puissance",
        "tag": "passive",
        "texte": "vous devez dépenser une Peur pour mettre en lumière l'ogre. Lorsqu'ils sont sous les projecteurs, ils peuvent lancer leur attaque standard contre toutes les cibles à portée"
      },
      {
        "nom": "Briseur d'os",
        "tag": "passive",
        "texte": "Les attaques de l'Ogre infligent des degats directs."
      },
      {
        "nom": "Plui de rochers",
        "tag": "action",
        "texte": "Marquez un Stress pour ramasser des objets lourds et les lancer sur toutes les cibles devant l'Ogre à longue portée. Faites une attaque contre ces cibles. Les cibles touchees subissent 1d10+2 degats physiques. Si l'Ogre touche plus d'une cible, vous gagnez une Peur."
      },
      {
        "nom": "Saccage furibond",
        "tag": "réaction",
        "texte": "Quand l'Ogre marque 2 PB ou plus, il peut se dechainer. Deplacez l'Ogre vers un point à courte portée et infligez 2d6+3 degats physiques directs a toutes les cibles sur son chemin."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "ombre-du-couteau-sinueux",
    "palier": 1,
    "type": "Traqueur",
    "categorie": "couteau sinueux",
    "nom": "Ombre du couteau sinueux",
    "description": "Un voyou armé d'un couteau inquiétant qui utilise la magie des ombres pour isoler ses cibles.",
    "motivation": "Dissimuler, prendre en embuscade, tirer profit.",
    "difficulte": 12,
    "seuilMineur": 4,
    "seuilMajeur": 8,
    "blessure": 3,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "dagues : mêlée 1d4+4 phy",
    "experience": "intrusion +3",
    "aptitudes": [
      {
        "nom": "Coup dans le dos",
        "tag": "passive",
        "texte": "Quand l'Ombre reussit une attaque standard qui a l'Avantage, elle inflige 1d6+6 degats physiques au lieu de ses degats standard."
      },
      {
        "nom": "Dissimulation",
        "tag": "action",
        "texte": "Devenez Cache jusqu'apres la prochaine attaque de l'Ombre. Les attaques effectuees depuis l'etat Cache grace a cette capacite ont l'Avantage."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "ours",
    "palier": 1,
    "type": "Cogneur",
    "categorie": "Bête",
    "nom": "Ours",
    "description": "Un ours impsant, avec une épaisse fourrure et de puisante griffes.",
    "motivation": "Défendre le térritoire, grimper, marteler, pister",
    "difficulte": 14,
    "seuilMineur": 9,
    "seuilMajeur": 17,
    "blessure": 7,
    "stress": 2,
    "modAttaque": 1,
    "attaqueStandard": "Griffe : mêlée,1d8+3 phy",
    "experience": "Embuscade +3, sens affûtes +2",
    "aptitudes": [
      {
        "nom": "Force écrasante",
        "tag": "passive",
        "texte": "Les cibles qui marquent des PB suite a l'attaque standard de l'Ours sont repoussees à très courte portée."
      },
      {
        "nom": "Mosure",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre une cible au Corps a corps. En cas de succes, infligez 3d4+10 degats physiques et la cible est Entravee jusqu'a ce qu'elle se libere avec un Jet de Force reussi."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "persecuteur",
    "palier": 1,
    "type": "Standard",
    "categorie": "Guerrier",
    "nom": "Persécuteur",
    "description": "Un combattant agile armée de javelots",
    "motivation": "Attirer, persécuter, prendre en tenaille, tirer profit",
    "difficulte": 12,
    "seuilMineur": 5,
    "seuilMajeur": 9,
    "blessure": 3,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "javelot : courte, 1d6+2 phy",
    "experience": "Camouflage +2",
    "aptitudes": [
      {
        "nom": "Garder la distance",
        "tag": "passive",
        "texte": "Une fois que le Persécuteur a effectué une attaque standard, il peut se déplacer n'importe ou à longue portée."
      },
      {
        "nom": "Se replier",
        "tag": "réaction",
        "texte": "Quand une créature se déplace en mêlée pour faire un attaque, vous pouvez cocher un stress avant le jet attaque pour vous déplacer n'importe ou à courte portée et faire une attaque contre la créature.sur un succès, vous infligez 1d10+2 dégâts physique."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "pirate-dur-a-cuire",
    "palier": 1,
    "type": "Cogneur",
    "categorie": "Pirate",
    "nom": "Pirate dur à cuire",
    "description": "Un pirate tatoué aux muscle épais et aux poings aussi gros que des melons.",
    "motivation": "Fracasser, mener des raids, piller, terroriser",
    "difficulte": 13,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Poings massif: mêlée 2d6 phy",
    "experience": "Marin +2",
    "aptitudes": [
      {
        "nom": "Fier-à-bras",
        "tag": "passive",
        "texte": "Quand il marque 2 PB ou moins suite a une attaque au Corps a corps, l'attaquant doit marquer un Stress."
      },
      {
        "nom": "Nettoyer le pont",
        "tag": "action",
        "texte": "Faites une attaque contre une cible à très courte portée. En cas de succes, marquez un Stress pour vous deplacer au Corps a corps de la cible, infligeant 3d4 degats physiques et repoussant la cible a portee Pres."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "pirate-pillards-3-pb",
    "palier": 1,
    "type": "Horde",
    "categorie": "Pirate",
    "nom": "Pirate pillards (3/PB)",
    "description": "Des crapules des mer qui se déplacent comme une meute destructrice.",
    "motivation": "Mener des raids, piller, se liguer",
    "difficulte": 12,
    "seuilMineur": 5,
    "seuilMajeur": 11,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Coutelas : mêlée 1d8+2 phy",
    "experience": "Marin +3",
    "aptitudes": [
      {
        "nom": "Horde (1d4+2)",
        "tag": "passive",
        "texte": "Lorsque les ronces ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige à la place 1d4+2 dégâts physiques."
      },
      {
        "nom": "Fier-à-bras",
        "tag": "passive",
        "texte": "Quand il marque 2 PB ou moins suite a une attaque au Corps a corps, l'attaquant doit marquer un Stress."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "rat-geant",
    "palier": 1,
    "type": "Sbire",
    "categorie": "Bête",
    "nom": "Rat géant",
    "description": "Un rongeur de la taille d'un chat, doué pour la récupération et la survie.",
    "motivation": "creusser, épuiser, être affamer, fouiller",
    "difficulte": 10,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": -4,
    "attaqueStandard": "Griffes : mêlée, 1 phy",
    "experience": "sens affûtés +3",
    "aptitudes": [
      {
        "nom": "Sbire (3)",
        "tag": "passive",
        "texte": "Le Rat est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 3 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une peur pour choisir une cible et mettre en avant tout les rats géants à proximité d'eux. Ces sbire se déplacent à portée de mêlée de la cible et effectuent un jet d'attaque commun . En cas de succès, ils infligent chacun 1 dégât physique. Combinez ces dégâts."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "roncefouet",
    "palier": 1,
    "type": "Meneur",
    "categorie": "Guerrier",
    "nom": "Roncefouet",
    "description": "Un rôdeur rusé et capable, qui accepte les missions les plus périlleuse.",
    "motivation": "Dérober, explorer, planifier, protéger",
    "difficulte": 14,
    "seuilMineur": 9,
    "seuilMajeur": 14,
    "blessure": 6,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Roncefouet empoisonné :  courte, 1d10+2 phy",
    "experience": "se cacher +2, intimidation+2, pister +3",
    "aptitudes": [
      {
        "nom": "Défence féroce",
        "tag": "passive",
        "texte": "Quand le Roncefouet lance une attaque qui oblige une cible a cohcer un PB, il gagne un bonus de +1 a sa difficulté jusqu'à ce qu'il coche 1PB ou plus."
      },
      {
        "nom": "Dans le roncier",
        "tag": "action",
        "texte": "Dépenser une peur pour mettre en avant 1d4 alliés a longue portée. ils se mettent a couvert a courte portée et sont caché jusqu'à après leur prochaine attaque ou jusqu'à ce qu'un pj réussisse u  jet de d'instinct pour les repérer."
      },
      {
        "nom": "Encaisser",
        "tag": "réaction",
        "texte": "Lorsqu'un Roncefouet coche 1 PB ou plus, vous pouvez cochez un stress pour lui faire cocher un PB de moins."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "ronces-enchevetrees",
    "palier": 1,
    "type": "Sbire",
    "categorie": "Plante",
    "nom": "Ronces enchevêtrées",
    "description": "Un vivevoltants animés buveur de sang",
    "motivation": "Drainern enchevêtre, se combiner",
    "difficulte": 11,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": -1,
    "attaqueStandard": "Epine : mêlée, 2 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (4)",
        "tag": "passive",
        "texte": "La créature est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 4 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 2 degats physiques chacun. Combinez ces degats."
      },
      {
        "nom": "Drainer et se multiplier",
        "tag": "réaction",
        "texte": "Quand l'attaque d'une ronce oblige une cible a cocher des PB et qu'elle a trois sbire ou plus à courte portée, vous pouvez combiner ces sbire pour former une horde de nuée Ronces enchevêtrées. les PB de la horde sont égaux au nombre de sbire combiné."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "scorpion-geant",
    "palier": 1,
    "type": "Cogneur",
    "categorie": "Inscete",
    "nom": "Scorpion géant",
    "description": "Un arachnide de taille Humaine avec des griffes tailladant la chair et une queue hérissée d'un drad.",
    "motivation": "Agripper, empoisonner, prendre en embuscade, se nourrir",
    "difficulte": 13,
    "seuilMineur": 7,
    "seuilMajeur": 13,
    "blessure": 6,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Pinces : mêlée, 1d12+2 phy",
    "experience": "Camouflage +2",
    "aptitudes": [
      {
        "nom": "Double frappe",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque standard contre deux cibles au Corps a corps."
      },
      {
        "nom": "Dard Venimeux",
        "tag": "action",
        "texte": "Faites une attaque contre une cible à très courte portée. En cas de succes, depensez une Peur pour infliger 1d4+4 degats physiques et l'Empoisonner jusqu'a son prochain repos ou un Jet de Connaissance reussi (16). Tant que la cible est Empoisonnee, elle doit lancer un d6 avant chaque Jet d'action. Sur un resultat de 4 ou moins, elle doit marquer un Stress."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "serpent-de-verre",
    "palier": 1,
    "type": "Standard",
    "categorie": "Bête",
    "nom": "Serpent de verre",
    "description": "Un serpent translucide avec une énorme tête qui laisse derrière lui une traînée d'éclats de verre.",
    "motivation": "effrayer, escalader, se nourir, se tenir à distance",
    "difficulte": 14,
    "seuilMineur": 6,
    "seuilMajeur": 10,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Crochet de verre : très courte portée, 1d8+2 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Eclats déchiqueteurs d'armure",
        "tag": "passive",
        "texte": "Apres une attaque reussie contre le Serpent au Corps a corps, l'attaquant doit cocher un emplacement d'Armure. S'il ne peut pas marquer de Slot d'Armure, il doit marquer un PB."
      },
      {
        "nom": "Serpent tourbillonnant",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre toutes les cibles à très courte portée. Les cibles touchees subissent 1d6+1 degats physiques."
      },
      {
        "nom": "Cracher",
        "tag": "action",
        "texte": "Depensez une Peur pour introduire un d6 de crachat. Quand le Serpent est mis en avant, lancez ce de. Sur un resultat de 5 ou plus, toutes les cibles devant le Serpent à longue portée doivent reussir un Jet de reaction d'Agilite ou subir 1d4 degats physiques. Le Serpent peut etre ms en avant une seconde fois ce tour de MJ."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "soldat-sylvestre",
    "palier": 1,
    "type": "Standard",
    "categorie": "Millitaire",
    "nom": "Soldat sylvestre",
    "description": "Un guerrier féerique vêtu d'une armure de feuilles et d'écorce.",
    "motivation": "Prendre en embuscade, protéger, se cacher, submerger, suivre",
    "difficulte": 11,
    "seuilMineur": 6,
    "seuilMajeur": 11,
    "blessure": 4,
    "stress": 2,
    "modAttaque": 0,
    "attaqueStandard": "Faux : mêlée, 1d8+1 phy",
    "experience": "Pisteur +2",
    "aptitudes": [
      {
        "nom": "Tactiques de meute",
        "tag": "passive",
        "texte": "Si la créature reussit une attaque standard et qu'un autre Loup Sinistre est au Corps a corps de la cible, infligez 1d6+5 degats physiques au lieu des degats standard et vous gagnez une Peur"
      },
      {
        "nom": "Contrôle de la forêt",
        "tag": "action",
        "texte": "Depensez une Peur pour abattre un arbre à très courte portée. Une creature touchee par l'arbre doit reussir un Jet de reaction d'Agilite (15) ou subir 1d10 degats physiques."
      },
      {
        "nom": "Se fondre dans le décor",
        "tag": "réaction",
        "texte": "Quand le Soldat reussit une attaque, vous pouvez marquer un Stress pour devenir Cache jusqu'a la prochaine attaque du Soldat ou jusqu'a ce qu'un PJ reussisse un Jet d'Instinct (14) pour le reperer."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "tireur-du-couteau-sinueux",
    "palier": 1,
    "type": "Distant",
    "categorie": "Couteau sinueux",
    "nom": "Tireur du couteau sinueux",
    "description": "Un bandit dégingnadé qui reste à couvert pour frapper avec un arc court.",
    "motivation": "Prendre en embuscade, se cacher, se repositionner, tirer profit",
    "difficulte": 13,
    "seuilMineur": 4,
    "seuilMajeur": 7,
    "blessure": 3,
    "stress": 2,
    "modAttaque": -1,
    "attaqueStandard": "Arc court : longue, 1d10+2 phy",
    "experience": "Discrétion +2",
    "aptitudes": [
      {
        "nom": "Frapper san être vu",
        "tag": "passive",
        "texte": "Si le Tireur est Cache quand il reussit une attaque standard contre une cible, il inflige 1d10+4 degats physiques au lieu de ses degats standard."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "treant-mineur",
    "palier": 1,
    "type": "Sbire",
    "categorie": "Plante",
    "nom": "Tréant mineur",
    "description": "Un arbuste mobile qui défend sa forêt.",
    "motivation": "Ecraser, protéger, submerger",
    "difficulte": 10,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": -2,
    "attaqueStandard": "Branche griffue : mêlée, 4 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (5)",
        "tag": "passive",
        "texte": "La créature est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 5 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 4 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "tunnelier-acide",
    "palier": 1,
    "type": "Solo",
    "categorie": "Inscete",
    "nom": "Tunnelier acide",
    "description": "Un insecte de la taille d'un cheval avec des griffes pour creusser et un sang acide.",
    "motivation": "Creusser, emporter, se nourrir, se repositionner",
    "difficulte": 14,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 8,
    "stress": 3,
    "modAttaque": 3,
    "attaqueStandard": "Griffe : mêlée,1d12+2 phy",
    "experience": "perception des vibrations +2",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "La créature peut être mis en avant jusqu'à 3 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Eruption de terre",
        "tag": "action",
        "texte": "Marquez un Stress pour faire jaillir le Fouisseur du sol. Toutes les creatures à très courte portée doivent reussir un Jet de reaction d'Agilite ou etre renversees, les rendant Vulnerables jusqu'a ce qu'elles agissent."
      },
      {
        "nom": "Crachat acide",
        "tag": "action",
        "texte": "Faites une attaque contre toutes les cibles devant le Fouisseur à très courte portée. Les cibles touchees subissent 2d6 degats physiques et doivent marquer un emplacement d'Armure sans en recevoir les benefices (elles peuvent toujours utiliser l'armure pour reduire les degats). Si elles ne peuvent pas marquer de emplacement d'Armure, elles doivent marquer un PB supplementaire et vous gagnez une Peur."
      },
      {
        "nom": "Bain d'acide",
        "tag": "réaction",
        "texte": "Quand le Fouisseur subit des degats Severes, toutes les creatures à très courte portée sont aspergees de son sang acide, subissant 1d10 degats physiques. L'eclaboussure couvre le sol à trsè courte portée de sang, et toutes les creatures autres que le Fouisseur qui le traversent subissent 1d6 degats physiques."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "viscosite-rouge",
    "palier": 1,
    "type": "Traqueur",
    "categorie": "Vase",
    "nom": "Viscosité rouge",
    "description": "Un gros tas mobile d'une substance gluante d'un flamboyant rouge translucide.",
    "motivation": "Démarrer des incendie, dévorer et se démultiplier, enflamer, se camoufler",
    "difficulte": 10,
    "seuilMineur": 6,
    "seuilMajeur": 11,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Appendice visquex : mêlée, 1d8+3 mag",
    "experience": "Camouflage +3",
    "aptitudes": [
      {
        "nom": "Feux rampant",
        "tag": "passive",
        "texte": "La Gelée ne peut se deplacer qu'à très courte portée comme mouvement normal. Elle enflamme tout objet inflammable qu'elle touche."
      },
      {
        "nom": "Enflammer",
        "tag": "action",
        "texte": "Faites une attaque contre une cible à très courte portée. En cas de succes, la cible subit 1d8 degats magiques et est Embrasee jusqu'a ce qu'elle soit eteinte avec un Jet de Finesse reussi (14). Tant qu'elle est Embrasee, la cible subit 1d4 degats magiques quand elle fait un Jet d'action."
      },
      {
        "nom": "Scission",
        "tag": "réaction",
        "texte": "Quand la Gelée a 3 PB marques ou plus, vous pouvez depenser une Peur pour la diviser en deux Petites Gelées Rouges (sans PV ni Stress marques).Mettez  immédiatement mes deux en avant."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "viscosite-rouge-petite",
    "palier": 1,
    "type": "Traqueur",
    "categorie": "Vase",
    "nom": "Viscosité rouge (petite)",
    "description": "Une petite masse mouvante d'une substance rouge flamboyante et translucide.",
    "motivation": "Brûler, se camoufler",
    "difficulte": 11,
    "seuilMineur": 5,
    "seuilMajeur": null,
    "blessure": 2,
    "stress": 1,
    "modAttaque": -1,
    "attaqueStandard": "Appendice visquex : mêlée, 1d4+2 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Conbustion",
        "tag": "réaction",
        "texte": "Quand une creature au Corps a corps inflige des degats a la Gelée, elle subit 1d6 degats magiques directs."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "viscosite-verte",
    "palier": 1,
    "type": "Traqueur",
    "categorie": "Vase",
    "nom": "Viscosité verte",
    "description": "Une mase mouvante d'une substance verte translucide.",
    "motivation": "Décvorer et se multiplier, envelpper, ramper, se camoufler",
    "difficulte": 8,
    "seuilMineur": 5,
    "seuilMajeur": 10,
    "blessure": 5,
    "stress": 2,
    "modAttaque": 1,
    "attaqueStandard": "Appendice visquex : mêlée, 1d6+1 mag",
    "experience": "Camouflage +3",
    "aptitudes": [
      {
        "nom": "Lent",
        "tag": "passive",
        "texte": "Quand vous mettez la Gelée en avant et qu'elle n'a pas de jeton sur son bloc de stats, elle ne peut pas encore agir. Placez un jeton sur son bloc de stats et decrivez ce qu'elle prepare. Quand vous mettez en avant et qu'elle a un jeton, retirez le jeton et elle peut agir."
      },
      {
        "nom": "Forme acide",
        "tag": "passive",
        "texte": "Quand la Gelée reussit une attaque, la cible doit marquer un emplacement d'Armure sans en recevoir les benefices (elle peut toujours utiliser l'armure pour reduire les degats). Si elle ne peut pas marquer de emplacement d'Armure, elle doit marquer un PV supplementaire."
      },
      {
        "nom": "Envelopper",
        "tag": "action",
        "texte": "Faites une attaque standard contre une cible au Corps a corps. En cas de succes, la Gelée l'enveloppe et la cible doit marquer 2 Stress. La cible doit marquer un Stress supplementaire quand elle fait un Jet d'action. Si la Gelée subit des degats Grâves, la cible est liberee."
      },
      {
        "nom": "Scission",
        "tag": "réaction",
        "texte": "Quand la Gelée a 3 PB marques ou plus, vous pouvez depenser une Peur pour la diviser en deux Petites Gelées Rouges (sans PV ni Stress marques).Mettez  immédiatement mes deux en avant."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "viscosite-verte-petite",
    "palier": 1,
    "type": "Traqueur",
    "categorie": "Vase",
    "nom": "Viscosité verte (petite)",
    "description": "Une petite masse mouvante d'une substance verte translucide.",
    "motivation": "Ramper, se camoufler",
    "difficulte": 14,
    "seuilMineur": 4,
    "seuilMajeur": null,
    "blessure": 2,
    "stress": 1,
    "modAttaque": -1,
    "attaqueStandard": "Appendice visquex : mêlée, 1d4+1 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Forme acide",
        "tag": "passive",
        "texte": "Quand la Gelée reussit une attaque, la cible doit marquer un emplacement d'Armure sans en recevoir les benefices (elle peut toujours utiliser l'armure pour reduire les degats). Si elle ne peut pas marquer de emplacement d'Armure, elle doit marquer un PV supplementaire."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "zombie-costaud",
    "palier": 1,
    "type": "Cogneur",
    "categorie": "Mort-vivant",
    "nom": "Zombie Costaud",
    "description": "Un cadavre musculeux, en colère, gonflé par la décomposition.",
    "motivation": "Cogner, détruire, écrasser, lancer des débris",
    "difficulte": 10,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 7,
    "stress": 4,
    "modAttaque": 4,
    "attaqueStandard": "Coup : courte portée, 1d12+3 phy",
    "experience": "Dégâts colatéraux +2, lancer +4",
    "aptitudes": [
      {
        "nom": "Lent",
        "tag": "passive",
        "texte": "Quand vous mettez le zombie en avant et qu'elle n'a pas de jeton sur son bloc de stats, elle ne peut pas encore agir. Placez un jeton sur son bloc de stats et decrivez ce qu'elle prepare. Quand vous mettez en avant et qu'elle a un jeton, retirez le jeton et elle peut agir."
      },
      {
        "nom": "Arracher",
        "tag": "action",
        "texte": "Faites une attaque standard avec Avantage contre une cible que le Zombie a Bloquée. En cas de succes, l'attaque inflige des degats directs."
      },
      {
        "nom": "Déchirer",
        "tag": "réaction",
        "texte": "Quand le Zombie reussit une attaque standard, vous pouvez marquer un Stress pour temporairement Bloqué la cible et la forcer a marquer 2 Stress."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "zombie-mastodonte-rapiece",
    "palier": 1,
    "type": "Solo",
    "categorie": "Mort-vivant",
    "nom": "Zombie mastodonte rapiécé",
    "description": "Un immense agglomérat de cadavre qui se déplace a l'unisson avec des brais aussi gros qu'un torse humain et des poings aussi large qu'un halfelin adulte.",
    "motivation": "absorber des cadavre, être affamé, flageller, terrifier",
    "difficulte": 13,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 10,
    "stress": 3,
    "modAttaque": 4,
    "attaqueStandard": "Trops de bras : très courte, 1d20 phy",
    "experience": "intimidation +2, déchirer +2",
    "aptitudes": [
      {
        "nom": "Destruccible",
        "tag": "passive",
        "texte": "Quand le Zombie subit des degats Majeurs ou superieurs, il marque un PB supplementaire."
      },
      {
        "nom": "Agiter des bras",
        "tag": "passive",
        "texte": "Quand le Zombie fait une attaque standard, il peut attaquer toutes les cibles à très courte portée."
      },
      {
        "nom": "Un autre dans le tas",
        "tag": "action",
        "texte": "Quand le Zombie est à très court portée d'un cadavre, il peut l'incorporer a lui-meme, effacant un PB et un Stress."
      },
      {
        "nom": "Hurlement tourmentés",
        "tag": "action",
        "texte": "Marquez un Stress pour forcer tous les PJ à longue portée a faire un Jet de reaction de Presence (13). Les cibles qui echouent perdent un Espoir et vous gagnez une Peur pour chacune. Les cibles qui reussissent doivent marquer un Stress."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "zombie-pourrissant",
    "palier": 1,
    "type": "Sbire",
    "categorie": "Mort-vivant",
    "nom": "Zombie pourrissant",
    "description": "Un corps en décomposiito qui s'approche de sa proie en titubnat.",
    "motivation": "Encercler, être affamé, manger de la chair, mutiler",
    "difficulte": 8,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": -3,
    "attaqueStandard": "Morsure : mêlée, 2 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (3)",
        "tag": "passive",
        "texte": "Le Zombie est vaincu quand il subit le moindre degat. Pour chaque 3 degats qu'un PJ inflige au Zombie, vainquez un Sbire supplementaire a portee que l'attaque toucherait."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 2 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "zombie-trainant",
    "palier": 1,
    "type": "Standard",
    "categorie": "Mort-vivant",
    "nom": "Zombie traînant",
    "description": "Un cadavre animé qui se déplace en titubant, poussé pas sa seule faim.",
    "motivation": "Dévorer, être affamé, lacérer la chair submerger l'ennemi",
    "difficulte": 10,
    "seuilMineur": 4,
    "seuilMajeur": 6,
    "blessure": 4,
    "stress": 1,
    "modAttaque": 0,
    "attaqueStandard": "Morsure : mêlée, 1d6+1 phy phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Trop à gérer",
        "tag": "passive",
        "texte": "Quand le Zombie est au Corps a corps d'une creature et qu'au moins un autre Zombie est courte portée, toutes les attaques contre cette creature ont l'Avantage."
      },
      {
        "nom": "Horrifiant",
        "tag": "passive",
        "texte": "Les cibles qui marquent des PB suite aux attaques du Zombie doivent aussi marquer un Stress."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "adepte-du-culte",
    "palier": 2,
    "type": "Soutien",
    "categorie": "Culte",
    "nom": "Adepte du culte",
    "description": "Un mage expérimenté brandissant ombre et peur.",
    "motivation": "Découvrir des connaissance, entraver ses ennemis, s'attire les donnes grâce.",
    "difficulte": 14,
    "seuilMineur": 9,
    "seuilMajeur": 18,
    "blessure": 4,
    "stress": 6,
    "modAttaque": 2,
    "attaqueStandard": "Bâton couvert de runes : Longue, 2d4+3 mag",
    "experience": "Savoir déchu +2, Rituels +2",
    "aptitudes": [
      {
        "nom": "Explosion affaiblissante",
        "tag": "action",
        "texte": "Dépensez une peur pour lancer une attaque standard contre une cible à portée. En cas de succès, la cible doit marquer un stress."
      },
      {
        "nom": "Linceul des déchus",
        "tag": "action",
        "texte": "Marquez une stress pour envelopper un allié à courte portée dans un linceul de protection jusqu'à ce que l'Adepte marque son dernier PB. Lorsqu'elle est protégée, la cible est résitante à tous les dégâts."
      },
      {
        "nom": "feres ténébreux",
        "tag": "action",
        "texte": "Dépensez une peur et choisissez un point à Longue portée. Toutes les cibles situées à proximité de ce point sont Bloquée dans des chaînes de fumerolles jusqu'à ce qu'elles se libèrent avec un jet de force ou un d'Instinct réussi. Une cible bloquée ainsi doit dépenser un espoir pour faire un jet d'action."
      },
      {
        "nom": "La peur comme carburant",
        "tag": "réaction",
        "texte": "Deux fois par scéne, lorsque'un PJ obtient un échec avec peur, efface un Stresss."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "aigle-geant",
    "palier": 2,
    "type": "Traqueur",
    "categorie": "Bête",
    "nom": "Aigle géant",
    "description": "Un oiseau de proie géant aux serres tachées de sang.",
    "motivation": "Chasser des proies, frapper avec précision, rester mobile",
    "difficulte": 14,
    "seuilMineur": 8,
    "seuilMajeur": 19,
    "blessure": 4,
    "stress": 4,
    "modAttaque": 1,
    "attaqueStandard": "Serre et bac: très courte portée, 2d6+3 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Volant",
        "tag": "passive",
        "texte": "Tant qu'ils volent, la créature ont un bonus de +3 a leur Difficulte."
      },
      {
        "nom": "Piqué mortel",
        "tag": "action",
        "texte": "Marquez un Stress pour attaquer une cible a portee Loin. Sur un succes, infligez 2d10+2 degats physiques et renversez la cible, la rendant Vulnerable jusqu'a sa prochaine action."
      },
      {
        "nom": "Décollage",
        "tag": "action",
        "texte": "Effectuez une attaque contre une cible à très courte portée. Sur un succes, infligez 2d4+3 degats physiques et la cible doit reussir un Jet de reaction d'Agilite ou devenir temporairement Entravee dans les serres massives de l'Aigle. Si la cible est Entravee, l'Aigle s'envole immediatement a portee Tres Loin au-dessus du champ de bataille en la tenant."
      },
      {
        "nom": "Chute mortelle",
        "tag": "action",
        "texte": null
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "anguilles-electrique-2-pb",
    "palier": 2,
    "type": "Horde",
    "categorie": "Bête",
    "nom": "Anguilles électrique (2/PB)",
    "description": "Une nuée d'anguilles qui encercleny et électrocutent",
    "motivation": "Déchirer, électrocuters ses proie, éviter les grand prédateur",
    "difficulte": 14,
    "seuilMineur": 10,
    "seuilMajeur": 20,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 0,
    "attaqueStandard": "Morsure électrique : mêlée, 2d6+4 phy",
    "experience": null,
    "aptitudes": []
  },
  {
    "source": "Livre de règle (2026)",
    "id": "apprenti-assasin",
    "palier": 2,
    "type": "Sbire",
    "categorie": "Assassin",
    "nom": "Apprenti assasin",
    "description": "Un jeune apprenti qui a hâte de faire ses preuves.",
    "motivation": "Agi dangereusement, faire ses preuves, frimer, reste mobile",
    "difficulte": 13,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": -1,
    "attaqueStandard": "Dague de lancer : très court, 4 phy",
    "experience": "intrusion +2",
    "aptitudes": [
      {
        "nom": "Sbire (6)",
        "tag": "passive",
        "texte": "La créature est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 6 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 4 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "archer-fantome",
    "palier": 2,
    "type": "Distant",
    "categorie": "Mort-vivant",
    "nom": "Archer fantôme",
    "description": "Un combattant fantomatique armé d'un arc éthéré , incapable de trouver la paix tant que ce qu'il protège est vulnérable.",
    "motivation": "Rester loin de la mêlée, revivre desvielles batailles, traverser les objet solides",
    "difficulte": 13,
    "seuilMineur": 6,
    "seuilMajeur": 14,
    "blessure": 3,
    "stress": 3,
    "modAttaque": 3,
    "attaqueStandard": "Arc long :  longue, 2d10+2 phy",
    "experience": "Connaissance antique +2",
    "aptitudes": [
      {
        "nom": "Fantôme",
        "tag": "passive",
        "texte": "les fantôme a une résistance aux dommages physiques. Marquez un stress pour vous déplacer jusqu'à une portée proche à travers des objets solides."
      },
      {
        "nom": "Choisis ta cible",
        "tag": "action",
        "texte": "Dépensez une Peur pour lancer une attaque contre une cible à très longue portée contre un PJ qui se trouve a très courte portée d'au moins deux autres PJ. En cas de succès, la cible subit 2d8+12 dégâts physiques."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "assassin-empoisonneur",
    "palier": 2,
    "type": "Traqueur",
    "categorie": "Assassin",
    "nom": "Assassin empoisonneur",
    "description": "Une crapule rusée aussi douée pour les embuscade que pour les poisons.",
    "motivation": "Anticiper, se faire payer, souiller l'eau et la nouriture, tuer",
    "difficulte": 14,
    "seuilMineur": 8,
    "seuilMajeur": 16,
    "blessure": 4,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Dague de jet empoisonnée : courte, 2d8+1phy",
    "experience": "intrusion +2",
    "aptitudes": [
      {
        "nom": "Venin de grincedent",
        "tag": "passive",
        "texte": "Les cibles qui Marquent des PB suite aux attaques de l'Assassin sont Vulnerables jusqu'a ce qu'elles Effacent un PB."
      },
      {
        "nom": "Sorti de nulle part",
        "tag": "passive",
        "texte": "L'Assassin a l'Avantage sur ses attaques s'il est Cache."
      },
      {
        "nom": "Fumigation",
        "tag": "action",
        "texte": "Lache une bombe fumigene qui remplit l'air à courte portée s de fumee, désoriente  toutes les cibles dans cette zone. Les cibles désoriente ont le Desavantage sur leur prochain Jet d'action, puis l'etat est Efface."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "baron-marchand",
    "palier": 2,
    "type": "Social",
    "categorie": "Royaume",
    "nom": "Baron marchand",
    "description": "Un marchand accompli à la tête de grandes opérations.",
    "motivation": "Abuser de son pouvoir, mobiliser des serviteurs, rassembler des ressources",
    "difficulte": 15,
    "seuilMineur": 9,
    "seuilMajeur": 19,
    "blessure": 5,
    "stress": 3,
    "modAttaque": -2,
    "attaqueStandard": "Rapière : mêlée, 1d6+2 phy",
    "experience": "Noblesse +2, commerce +2",
    "aptitudes": [
      {
        "nom": "Tout le monde a un pris",
        "tag": "action",
        "texte": "Depensez une Peur pour proposer a une cible un marche dangereux en echange de quelque chose qu'elle veut ou dont elle a besoin. Si utilisee sur un PJ, il doit effectuer un Jet de reaction de Presence (17). Sur un echec, il doit Marquer 2 Stress ou accepter le marche."
      },
      {
        "nom": "Le meilleur tas de muscle sur le marché",
        "tag": "action",
        "texte": "Une fois par Scene, Marquez un Stress pour invoquer 1d4+1 adversaires de Palier 1, qui apparaissent à longue portée, pour faire appliquer la volonte du Baron."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "boite-de-combat",
    "palier": 2,
    "type": "Solo",
    "categorie": "Artificielle",
    "nom": "Boîte de combat",
    "description": "Une créature artificielle cubique, avec une rune diférente sur chacune de ses face.",
    "motivation": "Attendre déguisé, changer de tactique piètiner ses adversaires.",
    "difficulte": 15,
    "seuilMineur": 10,
    "seuilMajeur": 20,
    "blessure": 8,
    "stress": 6,
    "modAttaque": 2,
    "attaqueStandard": "Coup : mêlée 2d6+3 phy",
    "experience": "Camouflage +2",
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 2 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Tactique aléatoire",
        "tag": "action",
        "texte": "Marquez un Stress et lancez un d6. La Boite utilise le mouvement correspondant : 1. Rayon de Mana : la Boite tire un rayon brulant. Effectuez une attaque contre une cible à longue portée. Sur un succes, infligez 2d10+2 degats magiques. 2. Jets de Flammes : la Boite s'envole en tournoyant et libere des jets de flammes. Effectuez une attaque contre toutes les cibles à portée courte. Les cibles contre lesquelles la Boite reussit subissent 2d8 degats physiques. 3. Pietinement : la Boite fonce dans tous les sens. Effectuez une attaque contre tous les PJ a courte portée. Les cibles contre lesquelles la Boite reussit subissent 1d6+5 degats physiques et sont Vulnerables jusqu'a leur prochain jet avec Espoir. 4. Gaz Electrisant : la Boite projette un gaz argente crepitant d'eclairs. Toutes les ciblesà courte portée doivent reussir un Jet de reaction de Finesse ou Marquer 3 Stress. 5. Claque Etourdissante : la Boite bondit et ses faces claquent, creant une petite onde de choc. Toutes les ciblesà courte portée doivent reussir un Jet de reaction de Force ou devenir Vulnerables jusqu'a la defaite du cube. 6. Gemissement Psionique : la Boite libere une nuee d'abeilles mecaniques dont le bourdonnement agresse les esprits. Toutes les cibles à courte portée doivent reussir un Jet de reaction de Presence ou subir 2d4"
      },
      {
        "nom": "Surcharge",
        "tag": "réaction",
        "texte": "Avant de lancer les degats pour l'attaque de la Boite, vous pouvez Marquer un Stress pour ajouter un d6 au jet de degats. De plus, vous gagnez une Peur."
      },
      {
        "nom": "Tremblement mortel",
        "tag": "réaction",
        "texte": "Lorsque la Boite Marque son dernier PB, la magie qui l'anime se rompt en une explosion de force. Toutes les cibles a courte portée doivent reussir un Jet de reaction d'Instinct ou subir 2d8+1 degats magiques."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "capitaine-fantome",
    "palier": 2,
    "type": "Meneur",
    "categorie": "Mort-vivant",
    "nom": "Capitaine fantôme",
    "description": "Un commandant fantomatique qui mène ses troupes par-délà ,la mort.",
    "motivation": "Rallier ses troupes, revivre des vieilles batailles, traverser les objets solides",
    "difficulte": 16,
    "seuilMineur": 13,
    "seuilMajeur": 26,
    "blessure": 6,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Arc long :  longue, 2d10+3 phy",
    "experience": "Connaissance antique +3",
    "aptitudes": [
      {
        "nom": "Fantôme",
        "tag": "passive",
        "texte": "les fantôme a une résistance aux dommages physiques. Marquez un stress pour vous déplacer jusqu'à une portée proche à travers des objets solides."
      },
      {
        "nom": "Bataille sans fin",
        "tag": "action",
        "texte": "Dépensez 2 Peur pour revenir jusqu'à 1d4+1 alliés Spectraux vaincus à la bataille aux points où ils sont apparus pour la première fois (sans PB ni Stress marqués)."
      },
      {
        "nom": "Tenir bon",
        "tag": "réaction",
        "texte": "Lorsque les alliés spectraux du capitaine sont obligés de faire un jet de réaction, vous pouvez marquer un stress pour donner à ces alliés un bonus de +2 au jet."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "chasseur-des-glaces",
    "palier": 2,
    "type": "Distant",
    "categorie": "Guerrier",
    "nom": "Chasseur des glaces",
    "description": "Un survivaliste qui parcourt les étendues gelées en quête d'un dangereux gibier.",
    "motivation": "Chasser, presévérer, pister, sauver",
    "difficulte": 13,
    "seuilMineur": 7,
    "seuilMajeur": 14,
    "blessure": 5,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Arc long :  longue, 2d12+6 phy",
    "experience": "Se repérer +2, survivaliste+3",
    "aptitudes": [
      {
        "nom": "Vise stable",
        "tag": "passive",
        "texte": "Cochez un stress pour donner un chasseur un avantage au prochaine attaque."
      },
      {
        "nom": "Piège de cécité des neiges",
        "tag": "action",
        "texte": "Dépenser une peur pour viser un groupe à courte portée. toutes les cible doivent réussir un jet de réaction agilité ou être prise au piège, ce qui les rend vulnérable jusqu'à ce libérent en réussisant un jet de force ou de finesse (14). vous gagner une peur lorsqu'une cible prise au piège fait un jet action."
      },
      {
        "nom": "A couvert",
        "tag": "réaction",
        "texte": "Cochez un stress pour imposer un déavantagee à  une attaque effectuée contre le chasseur. si elle est tout de même couronnée de succés, réduisez la gravité des dégâts d'un seuil."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "chasseur-redoutable",
    "palier": 2,
    "type": "Meneur",
    "categorie": "Mort-vivant",
    "nom": "Chasseur redoutable",
    "description": "Un mort-vivant vêtu d'un manteau épais, avec des yeux aux aguets et un comportement aussi décontracté que cruel.",
    "motivation": "Chasser, dévorer, pister",
    "difficulte": 16,
    "seuilMineur": 15,
    "seuilMajeur": 27,
    "blessure": 6,
    "stress": 4,
    "modAttaque": 5,
    "attaqueStandard": "Déchirer la chair : trés courte; 2d12+1 phy",
    "experience": "limier +3",
    "aptitudes": [
      {
        "nom": "Terrifiant",
        "tag": "passive",
        "texte": "Quand la créature reussit une attaque, tous les PJ à porter très courte perdent un Espoir et vous gagnez une Peur."
      },
      {
        "nom": "Etreinte mortelle",
        "tag": "action",
        "texte": "Depensez une Peur pour maudire une cible a très courte portée d'une étreinte Mortelle necrotique jusqu'a la fin de la Scene. Les attaques du Chasseur contre une cible sous étreinte Mortelle infligent des degats directs. Le Chasseur ne peut maintenir qu'une seule étreinte Mortelle a la fois."
      },
      {
        "nom": "Mort inéluctable",
        "tag": "action",
        "texte": "Marquez un Stress pour mettre en avant 1d4 allies. Les attaques qu'ils effectuent pendant cette mise en avant infligent des degats reduits de moitie."
      },
      {
        "nom": "Saccager",
        "tag": "réaction",
        "texte": "Compte a rebours (Boucle 1d6). \nLorsque le Chasseur est mis en avant pour la premiere fois, activez le Compte a rebours. Lorsqu'il se declenche, deplacez le Chasseur en ligne droite vers un point à longue portée et effectuez une attaque contre toutes les cibles sur son chemin. Les cibles contre lesquelles le Chasseur reussit subissent 2d8+2 degats physiques."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "chevalier-du-royaume",
    "palier": 2,
    "type": "Meneur",
    "categorie": "Millitaire",
    "nom": "Chevalier du royaume",
    "description": "Un soldat décoré revêtu d'une armure lourde et monté sur un puissant destrier.",
    "motivation": "Chercher la gloire, montrer sa dominaiton, renverser",
    "difficulte": 15,
    "seuilMineur": 13,
    "seuilMajeur": 26,
    "blessure": 6,
    "stress": 4,
    "modAttaque": 4,
    "attaqueStandard": "épée longue : mêlée, 2d10+4 phy",
    "experience": "Connaissance antiques +3, haute société +2, tactique +2",
    "aptitudes": [
      {
        "nom": "Chevalier",
        "tag": "passive",
        "texte": "Tant que le Chevalier est sur une monture, il gagne un bonus de +2 a sa Difficulte. Lorsqu'il subit des degats grave, il est desarconne et perd ce bonus jusqu'a sa prochaine mis en avant."
      },
      {
        "nom": "Armure lourde",
        "tag": "passive",
        "texte": "Lorsque le Chevalier subit des degats physiques, reduisez-les de 3."
      },
      {
        "nom": "Charge de cavalerie",
        "tag": "action",
        "texte": "Si le Chevalier est monte, deplacez-le jusqu'à longue portée et effectuez une attaque standard contre une cible. Sur un succes, infligez 2d8+4 degats physiques et la cible doit Marquer un Stress."
      },
      {
        "nom": "Pour le roaume !",
        "tag": "action",
        "texte": "Marquez un Stress pour mettre en avant 1d4+1 allies. Les attaques qu'ils effectuent pendant cette mis en avant infligent des degats reduits de moitie."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "conscrit",
    "palier": 2,
    "type": "Sbire",
    "categorie": "Millitaire",
    "nom": "Conscrit",
    "description": "Un civil mal formé, entraîne dans la guerre",
    "motivation": "Se liguer, suivre des ordres, survivre",
    "difficulte": 12,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 0,
    "attaqueStandard": "Lance : très courte, 6 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (6)",
        "tag": "passive",
        "texte": "La créature est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 6 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 6 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "conseiler-royale",
    "palier": 2,
    "type": "Social",
    "categorie": "Royaume",
    "nom": "Conseiler royale",
    "description": "Un courtisan de haut rang, avec l'oreille de la noblesse locale.",
    "motivation": "Comploter, fabriquer des preuves, s'attirer de bonne grâces",
    "difficulte": 14,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 3,
    "stress": 3,
    "modAttaque": -3,
    "attaqueStandard": "Baguette : longue, 1d4+3 phy",
    "experience": "Administration +3, courtisant +3",
    "aptitudes": [
      {
        "nom": "Réplique dévastatrice",
        "tag": "passive",
        "texte": "Un PJ qui obtient moins de 17 sur un Jet d'action ciblant le Conseiller doit Marquer un Stress."
      },
      {
        "nom": "Prêter l'oreille",
        "tag": "action",
        "texte": "Marquez un Stress pour influencer un PNJ au Corps a corps avec des mots murmures. L'opinion de la cible sur un sujet se rapproche de la preference du Conseiller, sauf si cela s'oppose directement aux motivations de la cible."
      },
      {
        "nom": "Bouc émissaire",
        "tag": "action",
        "texte": "Depensez une Peur pour convaincre une foule ou un individu notable qu'une personne ou un groupe est responsable d'un probleme les affectant. La cible devient hostile envers le bouc emissaire jusqu'a ce qu'elle soit convaincue de son innocence par un Jet de Presence reussi (17)."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "courtisane",
    "palier": 2,
    "type": "Social",
    "categorie": "Royaume",
    "nom": "Courtisane",
    "description": "Une manipulatrice accomplie, maîtresse des art sociaux.",
    "motivation": "manoeuvre, obtenir des protecteurs, séduire",
    "difficulte": 13,
    "seuilMineur": 7,
    "seuilMajeur": 13,
    "blessure": 3,
    "stress": 4,
    "modAttaque": -3,
    "attaqueStandard": "Dague : mêlée, 1d4+3 phy",
    "experience": "manipulation +3, mondaine +3",
    "aptitudes": [
      {
        "nom": "Regard foudroyant",
        "tag": "réaction",
        "texte": "Lorsqu'un PJ à courte portée effectue un Jet de Presence, vous pouvez Marquer un Stress pour lancer un regard vers la cible. Sur un echec de la cible, elle doit Marquer 2 Stress et est Vulnerable jusqu'a la fin de la Scene ou jusqu'a ce qu'elle reussisse une action sociale contre la Courtisane. Sur un succes de la cible, elle doit Marquer un Stress."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "crane-du-chaos",
    "palier": 2,
    "type": "Distant",
    "categorie": "Mort-vivant",
    "nom": "Crâne du chaos",
    "description": "Un crâne flottant animé par une magie scintillante",
    "motivation": "dévorer la magie, ricaner, servir sont créateur",
    "difficulte": 15,
    "seuilMineur": 8,
    "seuilMajeur": 16,
    "blessure": 5,
    "stress": 4,
    "modAttaque": 2,
    "attaqueStandard": "Explosion d'énergie : courte, 2d8+3 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "lévitation",
        "tag": "passive",
        "texte": "Le Crane levite a plusieurs dizaines de centimetres du sol et ne peut pas etre Bloqué."
      },
      {
        "nom": "Sigil de protection",
        "tag": "passive",
        "texte": "Le Crane est resistant aux degats magiques."
      },
      {
        "nom": "Explosion magique",
        "tag": "action",
        "texte": "Marquez un Stress pour effectuer une attaque contre toutes les cibles à courte porté. Les cibles contre lesquelles le Crane reussit subissent 2d6+4 degats magiques."
      },
      {
        "nom": "Siphon magique",
        "tag": "action",
        "texte": "Depensez une Peur pour effectuer une attaque contre un PJ possedant un trait de Lancer de Sorts à très courte portée. Sur un succes, la cible Marque 1d4 Stress et le Crane Efface autant de Stress. De plus, sur un succes, le Crane peut immediatement etre remis en en avant."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "croc-du-culte",
    "palier": 2,
    "type": "Traqueur",
    "categorie": "Culte",
    "nom": "Croc du culte",
    "description": "Un tueur professionnel devenu fanatique.",
    "motivation": "Capturer des sacrifices, isoler sa proe, monter dans la hiérarchie",
    "difficulte": 15,
    "seuilMineur": 9,
    "seuilMajeur": 17,
    "blessure": 4,
    "stress": 4,
    "modAttaque": 2,
    "attaqueStandard": "Long couteau : mêlée, 2d8+4 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Etreinte de l'ombre",
        "tag": "passive",
        "texte": "Le Croc peut escalader et marcher sur des surfaces verticales. Marquez un Stress pour se deplacer d'une ombre a une autre à long portée."
      },
      {
        "nom": "Emporter le  retardataire",
        "tag": "action",
        "texte": "Marquez un Stress pour forcer une cible au Corps a corps a effectuer un Jet de reaction d'Instinct. Sur un echec, la cible doit Marquer 2 Stress et est teleportee avec le Croc vers une ombre à longue portée, la rendant temporairement Vulnerable. Sur un succes, la cible doit Marquer un Stress."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "escadron-d-archers-2-pb",
    "palier": 2,
    "type": "Horde",
    "categorie": "Millitaire",
    "nom": "Escadron d'archers (2/PB)",
    "description": "un groupe d'archers professionnels, armés de trés grands arcs.",
    "motivation": "Se serrer les coudes, survivre, tirer par salve",
    "difficulte": 13,
    "seuilMineur": 8,
    "seuilMajeur": 16,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 0,
    "attaqueStandard": "Arc long :  longue, 2d6+3 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Horde (1d6+3)",
        "tag": "passive",
        "texte": "Lorsque les ronces ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige à la place 1d6+3 dégâts physiques."
      },
      {
        "nom": "Volée concentrée",
        "tag": "action",
        "texte": "Dépensez une peur pour cibler un point à longue portée. Effectuez une attaque avec avantage contre toutes les cibles situées à proximité de ce point. Cibles que l'escadron réussit contre la prise de dégâts physiques 1d10+4."
      },
      {
        "nom": "Tir d'interdiction",
        "tag": "action",
        "texte": "Marquez un stress pour cibler un point à longue portée. Jusqu'au prochain jet avec la peur, une créature qui se déplace à courte portée de ce point doit effectuer un jets en réaction d'agilité. En cas de échec, ils subissent 2d6+3 dégâts physiques. En cas de succès, ils subissent la moitié des dégâts."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "espion",
    "palier": 2,
    "type": "Social",
    "categorie": "Royaume",
    "nom": "Espion",
    "description": "Un agent d'espionnage talenteux, particulièrement dou pour se trouver au bout endroit pour entendre des secret.",
    "motivation": "Déguiser les apparances, laisser traîner ses oreilles, trancher et courir",
    "difficulte": 15,
    "seuilMineur": 8,
    "seuilMajeur": 17,
    "blessure": 4,
    "stress": 3,
    "modAttaque": -2,
    "attaqueStandard": "Dague : mêlée, 2d6+3 phy",
    "experience": "espionnage +3",
    "aptitudes": [
      {
        "nom": "Rassembler des secret",
        "tag": "action",
        "texte": "dépenser une peur pour décrire comment l'espion connaît un secret sur un PJ dans la scène."
      },
      {
        "nom": "Petit souris",
        "tag": "réaction",
        "texte": "Lorsqu'un PJ ou un groupe discute de quelque chose de sensible, vous pouvez marquer un stress pour révéler que l'espion est présent dans la scène et l'observer. Si l'Espion s'échappe des lieux pour rapporter ses découvertes, vous gagnez 1d4 Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "experience-ratee",
    "palier": 2,
    "type": "Standard",
    "categorie": "Mort-vivant",
    "nom": "Expérience ratée",
    "description": "Une espérience nécromantique ratée à présent déformer et disgracieuse",
    "motivation": "Chasser, dévorer, pister",
    "difficulte": 13,
    "seuilMineur": 12,
    "seuilMajeur": 23,
    "blessure": 3,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Morsure et griffes : mêlée, 2d6+5 phy",
    "experience": "Copieur +3",
    "aptitudes": [
      {
        "nom": "Vigeur difforme",
        "tag": "passive",
        "texte": "L'Experience est resistante aux degats physiques."
      },
      {
        "nom": "Submerger",
        "tag": "passive",
        "texte": "Quand la créature attaque une cible à très courte portée d'autre adversaire, l'Experience inflige des degats doubles."
      },
      {
        "nom": "Se jeter maladroitement en avant",
        "tag": "action",
        "texte": "Marquez un Stress pour mettre l'Experience en avant au lieu de depenser une Peur lors d'un acte de Mj suplémentaire."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "gardien-des-secrets",
    "palier": 2,
    "type": "Meneur",
    "categorie": "Culte",
    "nom": "Gardien des secrets",
    "description": "Un chef clandestin avec un liens direct avec les dieux déchus.",
    "motivation": "Accumuler un grand pouvoir, prendre le contrôle, tisser des intrigues",
    "difficulte": 16,
    "seuilMineur": 13,
    "seuilMajeur": 26,
    "blessure": 7,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Bâton gravé de symbole : longue, 2d12 mag",
    "experience": "Coercition +2, connaissances des déchus +2",
    "aptitudes": [
      {
        "nom": "Saisir l'occasion",
        "tag": "action",
        "texte": "Depensez 2 Peur pour mettre en avant 1d4 allies. Les attaques qu'ils effectuent pendant cette mise en avant infligent des degats reduits de moitie."
      },
      {
        "nom": "La volonté du maître",
        "tag": "réaction",
        "texte": "Lorsque vous mettez en avant un allie a portee Loin, Marquez un Stress pour gagner une Peur."
      },
      {
        "nom": "Rituel d'invocation",
        "tag": "réaction",
        "texte": "Compte a rebours (6). Lorsque le Gardien du Secret est mis en avant pour la premiere fois, activez le Compte a rebours. Lorsqu'il Marque des PB, reduisez ce Compte a rebours du nombre de PB Marques. Lorsqu'il se déclenche, invoquez un Demon Mineur qui apparait à courte portée."
      },
      {
        "nom": "Molosses déchus",
        "tag": "réaction",
        "texte": "Une fois par Scene, lorsque le Gardien du Secret Marque 2 PB ou plus, vous pouvez Marquer un Stress pour invoquer une Meute de Molosses Demoniaques, qui apparait à courte portée et est immediatement mise en avant."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "gardien-fantome",
    "palier": 2,
    "type": "Standard",
    "categorie": "Mort-vivant",
    "nom": "Gardien fantôme",
    "description": "Un combatant fantomatique qui se bat à la lance et l'épée, prisonnier de son devoir.",
    "motivation": "protèger le trésor, revivre de vieilles batailles, traver les objets solides",
    "difficulte": 15,
    "seuilMineur": 7,
    "seuilMajeur": 15,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Lance : très courte, 2d8+1 phy",
    "experience": "Connaissance antique +2",
    "aptitudes": [
      {
        "nom": "Fantôme",
        "tag": "passive",
        "texte": "les fantôme a une résistance aux dommages physiques. Marquez un stress pour vous déplacer jusqu'à une portée proche à travers des objets solides."
      },
      {
        "nom": "Lame funébre",
        "tag": "action",
        "texte": "Dépensez une peur pour attaquer une cible à très courte portée. En cas de succès, infligez 2d10+6 dégâts physiques et la cible doit marquer un Stress."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "geant-bagarreur",
    "palier": 2,
    "type": "Cogneur",
    "categorie": "Géant",
    "nom": "Géant bagarreur",
    "description": "Un géant particulièrement musclé qui manie un marteau plus grand qu'un humain.",
    "motivation": "Cogner, gagner sa vie, renverser, submerger",
    "difficulte": 12,
    "seuilMineur": 14,
    "seuilMajeur": 18,
    "blessure": 7,
    "stress": 4,
    "modAttaque": 2,
    "attaqueStandard": "Marteau de guerre : trés courte, 2d12+3 phy",
    "experience": "Intrusion +2",
    "aptitudes": [
      {
        "nom": "Coup de bélier",
        "tag": "action",
        "texte": "Marquez un Stress pour faire charger le Bagarreur contre un objet inanime à courte portée qu'il pourrait raisonnablement fracasser (comme un mur, une charrette ou un etal de marche) et le detruire. Toutes les cibles à très courte porée de l'objet doivent reussir un Jet de reaction d'Agilite ou subir 2d4+3 degats physiques des éclats."
      },
      {
        "nom": "Sanglante représailles",
        "tag": "réaction",
        "texte": "Lorsque le Bagarreur Marque 2 PB ou plus suite a une attaque à très courte portée, vous pouvez effectuer une attaque standard contre l'attaquant. Sur un succes, le Bagarreur inflige 2d6+15 degats physiques au lieu de ses degats standard."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "geant-contrefait",
    "palier": 2,
    "type": "Solo",
    "categorie": "Géant",
    "nom": "Géant contrefait",
    "description": "Un Humanoïde géant fait de métal tordu et de char fondue fussionnés en une masse impie.",
    "motivation": "Collectionner des secret, déchire la réalité, defaire le destin",
    "difficulte": 15,
    "seuilMineur": 16,
    "seuilMajeur": 26,
    "blessure": 10,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Menbre agité : courte, 2d12+4 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Contemplez la fin",
        "tag": "passive",
        "texte": "Un pj désireux de faire un jet d'action affectant le géant doit auparavant faire un jet de réaction de Savoir. Sur un échec, il perd un Espoir. Sur un succès, il est définitivement immunisé contre cette aptitude."
      },
      {
        "nom": "Hurler dans le vide",
        "tag": "action",
        "texte": "dépenser une peur pour pousser un hurlement psychique. Toutes les cibles à courte portée doivent  réussir u jet de réaction  de Présence ou subir 3d10 dégâts magique directs et cocher un stress."
      },
      {
        "nom": "Brisesprit",
        "tag": "action",
        "texte": "Effectuez uen attaque standard. Sur unsuccès cocher un stress pour ajouter un D8 au jet de dégâts. Si la cible coche des PB suite a cette attaque, elle subit un déavantage sur sont prochain jet d'action."
      },
      {
        "nom": "Frappe de la terreur",
        "tag": "réaction",
        "texte": "Compte a rebours (boucle de 1d4).\nActivet le compte a rebours lorsque le géant voit une cible hostile pour la première fois. il avance chaque fois qu'un PJ fait un jet avec peur. lorsqu'il arrive à terme, le géant effectue une attaque standard contre un maximun de trois cible à courte portée. cellees qu'il touche perdent un espoir.a"
      },
      {
        "nom": "Rejet de la réalité",
        "tag": "réaction",
        "texte": "Quand une créature à longue portée du géant remporte un succès critique sur un jet d'action, le géant efface tous ses stress."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "geant-maitre-des-betes",
    "palier": 2,
    "type": "Meneur",
    "categorie": "Géant",
    "nom": "Géant maître des bêtes",
    "description": "Un guerrier vêtu de cuir et armé d'un fouet et d'un énorme arc.",
    "motivation": "Clouer au sol, commande, gagner sa vie, manoeuvrer, protéger ses conpagnons animaux",
    "difficulte": 16,
    "seuilMineur": 12,
    "seuilMajeur": 24,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "Arc long :  longue, 2d8+4 phy",
    "experience": "Education des animaux +3",
    "aptitudes": [
      {
        "nom": "Deux pour un",
        "tag": "passive",
        "texte": "Lorsque le Maitre des Betes est mis en avant, vous pouvez aussi mettre en avant un adversaire animal de palier 1 actuellement sous son contrôle."
      },
      {
        "nom": "Frappe épingle",
        "tag": "action",
        "texte": "Effectuez une attaque standard contre une cible. Sur un succes, vous pouvez Marquer un Stress pour la clouer a une surface proche. La cible clouee est bloqué jusqu'a ce qu'elle se libere avec un Jet de Finesse ou de Force reussi."
      },
      {
        "nom": "Compagnon redoutable",
        "tag": "action",
        "texte": "Deux fois par Scene, invoquez un Ours, un Loup Sinitre ou un adversaire animal de palier 1 similaire sous le controle du Maitre des Bêtes. L'adversaire apparait à courte portée et est immediatement mis en avant."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "geant-recrue",
    "palier": 2,
    "type": "Sbire",
    "categorie": "Géant",
    "nom": "Géant recrue",
    "description": "Un combatant géant portant l'armure de quelqu'un d'autre.",
    "motivation": "Battre, gagner sa vie, submerger, terrifier",
    "difficulte": 13,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 2,
    "modAttaque": 1,
    "attaqueStandard": "Marteau de guerre : trés courte, 5 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (7)",
        "tag": "passive",
        "texte": "La créature est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 7 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 5 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "gorgone",
    "palier": 2,
    "type": "Solo",
    "categorie": "Créature",
    "nom": "Gorgone",
    "description": "Une humanoïde écailleuse à tête de serpent armée d'un arc doré, enragée que l'on ait osé perturber sont quotidien paissible.",
    "motivation": "Acculer, frapper et battre en retraite, pétrifier, se venger",
    "difficulte": 15,
    "seuilMineur": 13,
    "seuilMajeur": 25,
    "blessure": 9,
    "stress": 3,
    "modAttaque": 4,
    "attaqueStandard": "Arc court brûlesoleil : longue 2d20+3 mag",
    "experience": "Discrétion +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 2 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Flèches brûlesoleil",
        "tag": "passive",
        "texte": "Lorsque la Gorgone reussit une attaque standard, la cible Brille jusqu'a la fin de la Scene et ne peut pas se cacher. Les jets d'attaque contre une cible Brillante ont l'Avantage."
      },
      {
        "nom": "Couronne de serpent",
        "tag": "action",
        "texte": "Effectuez un jet d'attaque contre une cible au Corps a corps en utilisant les serpents qui protége la Gorgone. Sur un succes, Marquez un Stress po,tress."
      },
      {
        "nom": "Regard pétrifiant",
        "tag": "réaction",
        "texte": "Lorsque la Gorgone subit des degats d'une attaque à courte portée, vous pouvez depenser une Peur pour forcer l'attaquant a effectuer un Jet de reaction d'Instinct. Sur un echec, il commence a se changer en pierre, Marquant un PB et declenchant un Compte a rebours de Petrification (4). Ce Compte a rebours avance chaque fois que la Gorgone subit une attaque. Lorsqu'il se declenche, la cible doit effectuer un acte de mort. Si la Gorgone est vaincue, tous les Comptes a rebours de petrification prennent fin."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "initie-du-culte",
    "palier": 2,
    "type": "Sbire",
    "categorie": "Culte",
    "nom": "Initié du culte",
    "description": "Un fanatique au bas de l'échelle, vêtu de robe simple et avide de pouvoir.",
    "motivation": "Cherche des connaissance interdites, gagner du pouvoir, suivre des ordres",
    "difficulte": 13,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 0,
    "attaqueStandard": "Dague rituels : mêlée, 5 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (6)",
        "tag": "passive",
        "texte": "La créature est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 6 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 5 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "magicien-de-guerre",
    "palier": 2,
    "type": "Distant",
    "categorie": "Millitaire",
    "nom": "Magicien de guerre",
    "description": "Un mage endurci par les combats et formé à une magie destructrice.",
    "motivation": "Briser les formations, développer de nouveau sort, gagner du pouvoir",
    "difficulte": 16,
    "seuilMineur": 11,
    "seuilMajeur": 23,
    "blessure": 5,
    "stress": 6,
    "modAttaque": 4,
    "attaqueStandard": "Bâton : 2d10+4 mag",
    "experience": "Connaissance magique +2, stratégie+2",
    "aptitudes": [
      {
        "nom": "Téléportation de combat",
        "tag": "passive",
        "texte": "Avant ou après avoir effectué une attaque standard, vous pouvez marquer un stress pour vous téléporter vers un emplacement à distance."
      },
      {
        "nom": "réinitialiser la sphére de protection",
        "tag": "action",
        "texte": "Marquez un stress pour rafraîchir la réaction du sorcier “sphère de garde”."
      },
      {
        "nom": "Eruption",
        "tag": "action",
        "texte": "Dépensez une peur et choisissez un point à portée lointaine. Une zone très proche autour de ce point entre en éruption sur un terrain infranchissable. Toutes les cibles situées dans cette zone doivent effectuer un rouleau de réaction d'agilité (14). Les cibles qui échouent subissent des dégâts physiques 2d10 et sont expulsées de la zone. Les cibles qui réussissent subissent la moitié des dégâts et ne sont pas déplacées."
      },
      {
        "nom": "Artillerie arcanique",
        "tag": "action",
        "texte": "Dépensez une peur pour déclencher une pluie précise d’explosions magiques. Toutes les cibles de la scène doivent effectuer un jet de réaction d'agilité. Les cibles qui échouent subissent des dégâts magiques 2d12. Les cibles qui réussissent subissent la moitié des dégâts."
      },
      {
        "nom": "Sphére de protection",
        "tag": "réaction",
        "texte": "Lorsque l'Assistant subit des dégâts suite à une attaque à courte portée, infligez des dégâts magiques 2d6 à l'attaquant. Cette réaction ne peut pas être utilisée à nouveau tant que l'assistant ne l'a pas actualisée avec son action “Actualiser la sphère de garde”."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "maitre-assassin",
    "palier": 2,
    "type": "Meneur",
    "categorie": "Assassin",
    "nom": "Maître assassin",
    "description": "Un tueur chevronné à la voix menaçante et à la lame acérée.",
    "motivation": "Prendre en embuscade, se préparer pour tout les scénarios, s'en sortir vivant, tuer",
    "difficulte": 15,
    "seuilMineur": 12,
    "seuilMajeur": 25,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 5,
    "attaqueStandard": "Dague dentelée : courte, 2d10+2 phy",
    "experience": "Commandant +3, Introsion +3",
    "aptitudes": [
      {
        "nom": "Se qu'on ne voit pas venir",
        "tag": "passive",
        "texte": "L'Assassin inflige des degats directs tant qu'il est Cache."
      },
      {
        "nom": "Frapper a l'unisson",
        "tag": "action",
        "texte": "Marquez un Stress pour mettre en avant un nombre d'autres Assassins egal au Stress non Marque de l'Assassin."
      },
      {
        "nom": "Lame subtile",
        "tag": "réaction",
        "texte": "Lorsque l'Assassin reussit une attaque standard contre une cible Vulnerable, vous pouvez depenser une Peur pour infliger des degats grave au lieu des degats standard."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "meute-de-molosses-demoniaques-1-pb",
    "palier": 2,
    "type": "Horde",
    "categorie": "Déchu",
    "nom": "Meute de molosses démoniaques (1/PB)",
    "description": "Des molosses contre nature dont les entrailles brillent d'un feu infernal.",
    "motivation": "Dévorer de la chair, plaire à ses maîtres, provoquer la peur",
    "difficulte": 15,
    "seuilMineur": 11,
    "seuilMajeur": 23,
    "blessure": 6,
    "stress": 3,
    "modAttaque": 0,
    "attaqueStandard": "Griffes et crocs : mêlée 2d8+2 phy",
    "experience": "pistage olfactif +3",
    "aptitudes": [
      {
        "nom": "Horde (2d4+1)",
        "tag": "passive",
        "texte": "Lorsque les ronces ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige à la place 2d4+1 dégâts physiques."
      },
      {
        "nom": "Hurlement de l'effroi",
        "tag": "action",
        "texte": "Marquez un Stress pour faire perdre un Espoir a toutes les cibles à très corute portée. Si une cible ne peut pas perdre d'Espoir, elle doit Marquer 2 Stress a la place."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "minotaure-demoliseur",
    "palier": 2,
    "type": "Cogneur",
    "categorie": "Guerrier",
    "nom": "Minotaure démoliseur",
    "description": "Un hybride massif à tête de taureau avec un tempérament colérique.",
    "motivation": "dévorer, encorner, poursuive, se repére, limites",
    "difficulte": 16,
    "seuilMineur": 14,
    "seuilMajeur": 27,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "Hache d'arme : très court, 2d8+5 phy",
    "experience": "Sens de orientation +2",
    "aptitudes": [
      {
        "nom": "Montée en puissance",
        "tag": "passive",
        "texte": "vous devez dépenser une Peur pour mettre en lumière le Minotaure. Lorsqu'ils sont sous les projecteurs, ils peuvent lancer leur attaque standard contre toutes les cibles à portée"
      },
      {
        "nom": "Charge de taureau",
        "tag": "action",
        "texte": "Marquez un stress pour charger à travers un groupe à courte portée et lancer une attaque contre toutes les cibles sur le chemin du Minotaure. Les cibles contre lesquelles le Minotaure réussit subissent 2d6+8 dégâts physiques et sont repoussées à très loin. Si une cible est projetée contre un objet solide ou une autre créature, elle subit 1d6 dégâts supplémentaires (combinez leurs dégâts)."
      },
      {
        "nom": "Encorner",
        "tag": "action",
        "texte": "Lancez une attaque contre une cible à très courte portée, en déplaçant le Minotaure à portée de mêlée. En cas de succès, infligez 2d8 dégâts physiques directs."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "requin",
    "palier": 2,
    "type": "Cogneur",
    "categorie": "Bête",
    "nom": "Requin",
    "description": "Un grand prédateur marin, toujours en mouvement.",
    "motivation": "Attaquer les plus faibles, isoler sa proie, trouver le sang",
    "difficulte": 14,
    "seuilMineur": 14,
    "seuilMajeur": 28,
    "blessure": 7,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Mâchoires pleines de crocs : très courte, 2d12+1 phy",
    "experience": "odorat +3",
    "aptitudes": [
      {
        "nom": "Terrifiant",
        "tag": "passive",
        "texte": "Quand la créature reussit une attaque, tous les PJ à porter très courte perdent un Espoir et vous gagnez une Peur."
      },
      {
        "nom": "Morsure déchiqueteuse",
        "tag": "passive",
        "texte": "Quand le Requin reussit une attaque, la cible doit Marquer un emplacement d'Armure sans en recevoir les benefices (elle peut toujours utiliser l'armure pour reduire les degats). Si elle ne peut pas Marquer d'emplacement d'Armure, elle doit Marquer un PB supplementaire."
      },
      {
        "nom": "Du sang dans l'eau",
        "tag": "réaction",
        "texte": "Quand une creature à courte portée du Requin Marque des PB suite a l'attaque d'une autre creature, vous pouvez Marquer un Stress pour mettre en avant le Requin, le deplacant au Corps a corps de la cible et effectuant une attaque standard."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "scintillewyrn",
    "palier": 2,
    "type": "Traqueur",
    "categorie": "draconien",
    "nom": "Scintillewyrn",
    "description": "Une vouivre aux écailles de glace semblables à des miroirs.",
    "motivation": "Frapper et battre en retraire, hiberner, prendre en embuscade, se nourrir",
    "difficulte": 14,
    "seuilMineur": 9,
    "seuilMajeur": 18,
    "blessure": 5,
    "stress": 4,
    "modAttaque": 2,
    "attaqueStandard": "Morsure : mêlée, 2d8+3 phy",
    "experience": "Prédateur aérien +2, oeil acére +3",
    "aptitudes": [
      {
        "nom": "Vol artique",
        "tag": "passive",
        "texte": "En vol, le Scintillewyrn peut se déplacer jusqu'à longue portée."
      },
      {
        "nom": "Ecailles réfléchissantes",
        "tag": "passive",
        "texte": "Une créature qui n'est oas à très courte du Scintillewyrn a un déavantage sur ses jets d'attaque contre lui."
      },
      {
        "nom": "Griffe rapides",
        "tag": "action",
        "texte": "Cochez un stress pour choissir un point à longue portée du Scintillewyrn s'y rend et effectue une attaque contre une cible à très courte portée. Sur un succès, infligez 2d10+5 dégâts physique. la cible doit réussir un jet de réaction de Force ou être repoussée à courte portée."
      },
      {
        "nom": "Piquants de glace",
        "tag": "action",
        "texte": "Dépensez une peur pour faire une attaque contre un groupe à courte portée. Les cibles touchées subissent 2d4 dégâts physique et sont bloquées par les piquants jusqu'à ce quelles se libèrent en réussissant un jet de finesse."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "sirene",
    "palier": 2,
    "type": "Traqueur",
    "categorie": "Créature",
    "nom": "Sirène",
    "description": "Un individu à moitié poisson avec des écailles scintillantes et uen voix envoûtante.",
    "motivation": "Attirer une proie, dévorer, envoûter par le chant",
    "difficulte": 14,
    "seuilMineur": 9,
    "seuilMajeur": 18,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Mosure de la mâchoire distendue : mêlée, 2d6+3 phy",
    "experience": "Répertoire de chants +3",
    "aptitudes": [
      {
        "nom": "Captiver l'audience",
        "tag": "passive",
        "texte": "Si la Sirène effectue une attaque standard contre une cible envoûte par son chant, l'attaque inflige 2d10+1 dégâts au lieu de ses dégâts standard."
      },
      {
        "nom": "Chant envoûtant",
        "tag": "action",
        "texte": "Dépensez une peur pour chanter une chanson qui affecte toutes les cibles à courte portée. Les cibles doivent réussir un jet de réaction instinctif ou devenir envoûtées jusqu'à ce qu'elles marquent 2 points de stress. D'autres sirènes à courte portée de la cible peuvent marquer un stress pour ajouter chacune un bonus de +1 à la difficulté du jet de réaction. Lorsqu'elle est envoutée, une cible ne peut pas agir et est vulnérable."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "soldat-d-elite",
    "palier": 2,
    "type": "Standard",
    "categorie": "Millitaire",
    "nom": "Soldat d'élite",
    "description": "Un écuyer en armure ou un roturier expérimenté chechant à évoluer",
    "motivation": "conclure des alliances, faire régner l'ordre, obtenir de la gloire",
    "difficulte": 15,
    "seuilMineur": 9,
    "seuilMajeur": 18,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Lance : très courte, 2d8+4 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Renforcer",
        "tag": "action",
        "texte": "Marquez un Stress pour vous deplacer au Corps a corps d'un allie et effectuer une attaque standard contre une cible à très courte portée. Sur un succes, infligez 2d10+2 degats physiques et l'allie peut Effacer un Stress."
      },
      {
        "nom": "Loyauté du vassal",
        "tag": "réaction",
        "texte": "Lorsque le Soldat est à très courte portée d'un chevalier ou d'un noble qui devrais subir des degats, vous pouvez Marquer un Stress pour vous deplacer au Corps a corps de celui-ci et subir les degats à sa place."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "spectre-de-pierre",
    "palier": 2,
    "type": "Traqueur",
    "categorie": "Bête",
    "nom": "Spectre de pierre",
    "description": "Un chasseur rôdant, comme un lion des montagnes furtif au corps de pierre grise.",
    "motivation": "Défendre le territoire, isoler sa proie, rôder",
    "difficulte": 13,
    "seuilMineur": 11,
    "seuilMajeur": 12,
    "blessure": 6,
    "stress": 3,
    "modAttaque": 3,
    "attaqueStandard": "Morsure et griffes : mêlée, 2d8+6 phy",
    "experience": "Perception de la pierre +3",
    "aptitudes": [
      {
        "nom": "Marchepierre",
        "tag": "passive",
        "texte": "il peut se déplacer à travers la pierre et la terre aussi facilement que l'air. Lorsqu’ils se trouvent dans la pierre ou la terre, ils sont cachés et immunisés contre tout dommage."
      },
      {
        "nom": "Embuscade pierreuse",
        "tag": "action",
        "texte": "Bien que caché, marquez un stress pour jaillir en mêlée avec une cible à portée très proche. La cible doit réussir sur un jet en réaction d'agilité ou d'instinct (15) ou subir des dommages physiques 2d8 et être temporairement Bloqué."
      },
      {
        "nom": "Rugissement d'avalanche",
        "tag": "action",
        "texte": "Dépenser une peur pour rugir dans une grotte et à déclencher un éboulement. Toutes les cibles à courte portée doivent réussir sur un jet en réaction d'agilité (14) ou subir des dégâts physiques 2d10. Les décombres peuvent être nettoyés avec un compte à rebours de progression (8)."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "volcillant-juvenile",
    "palier": 2,
    "type": "Solo",
    "categorie": "Inscete",
    "nom": "Volcillant Juvénile",
    "description": "Un inscete aux écaille iriesentes et aux ailes cristallines qui se déplace plus vite que l'oeil ne peut le suivre.",
    "motivation": "attaque en piqué, chasser, collectionner des chose qui brillantes.",
    "difficulte": 14,
    "seuilMineur": 13,
    "seuilMajeur": 26,
    "blessure": 10,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Aile tranchante : trés courte, 2d10+4 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "La créature peut être mis en avant jusqu'à 3 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Précision inégalée",
        "tag": "passive",
        "texte": "Lancez un d6 avant de faire une attaque avec le Volcillant. Sur un  4 ou plus, L'esquive de la cible est réduite de moitié contre cette attaque."
      },
      {
        "nom": "Danse spirituelle",
        "tag": "action",
        "texte": "Marquez un stress pour créer un spectacle magiquement éblouissant qui s'attaque à l'esprit des ennemis proches. Toutes les cibles à courte portée doivent effectuer un jet en réaction d'instinct. Pour chaque cible qui a échoué, vous gagnez une Peur et le Volcillant apprend l'une des craintes de la cible."
      },
      {
        "nom": "Soufle hallucinogéne",
        "tag": "réaction",
        "texte": "Compte a rebours (boucle de 1d6).\nActivet le compte a rebours lorsque le Volcillant subit des dégâts pour la première fois. Quand il arrive à son terme, le Volcillant  soufle du gaz hallucinatoire sur toutes les cibles devant lui jusqu'à Longue. Les cibles doivent réussir un jet en réaction d'Instinct ou être tourmentées par des hallucinations effrayantes. Si le Volcillant connaît la craintes d'une cible, cette derniere subit un désavantagées sur le jets. Les cibles qui échouent doivent marquer un stress et perdre un espoir."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "voleur-masque",
    "palier": 2,
    "type": "Traqueur",
    "categorie": "Royaume",
    "nom": "Voleur masqué",
    "description": "Un voleur rusé doué pour les acrobaties et les scène spectaculaires.",
    "motivation": "Chaparder, esquiver, se cacher, tirer profit",
    "difficulte": 14,
    "seuilMineur": 8,
    "seuilMajeur": 17,
    "blessure": 4,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Sabre : mêlée, 2d8+3 phy",
    "experience": "acrobaties +3",
    "aptitudes": [
      {
        "nom": "Main vives",
        "tag": "action",
        "texte": "Effectuez une attaque contre une cible au Corps a corps. Sur un succes, infligez 1d8+2 dégâts physiques et le Voleur dérobe un objet ou un consommable de l'inventaire de la cible."
      },
      {
        "nom": "Plan d'évasion",
        "tag": "action",
        "texte": "Marquez un Stress pour révéler un piège a collet place n'importe ou sur le champ de bataille par le Voleur. Toutes les cibles à très courte portée du piège doivent reussir un Jet en reaction d'Agilite (13) ou etre soulevees et suspendues la tête en bas. La cible est bloquée et Vulnerable jusqu'a ce qu'elle se libere, mettant fin aux deux états, avec un Jet de Finesse ou de Force reussi (13)."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "chauve-souris-sinistre",
    "palier": 3,
    "type": "Traqueur",
    "categorie": "Bête",
    "nom": "Chauve-souris sinistre",
    "description": "Un animale de compagnie aux grandes ailes animé d'une infinie loyauté envers sont maître vampire.",
    "motivation": "Fondre sur sa proie, protéger le meneur, se cacher",
    "difficulte": 14,
    "seuilMineur": 16,
    "seuilMajeur": 30,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Griffes et crocs : mêlée 2d8+7 phy",
    "experience": "Assoifée de sang +3",
    "aptitudes": [
      {
        "nom": "Volant",
        "tag": "passive",
        "texte": "Tant qu'ils volent, la créature ont un bonus de +3 a leur Difficulte."
      },
      {
        "nom": "Cri",
        "tag": "action",
        "texte": "Marquer un Stress pour emettre un cri strident vers toutes les cibles devant la Chauve-souris à longue portée Ces cibles doivent Marquer 1d4 Stress."
      },
      {
        "nom": "Gardien",
        "tag": "réaction",
        "texte": "Quand un Vampire allie Marque des PB, vous pouvez Marquer un Stress pour voler au Corps a corps de l'attaquant et effectuer une attaque avec Avantage. En cas de reussite, infliger 2d6+2 degats physiques."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "chef-vampire",
    "palier": 3,
    "type": "Meneur",
    "categorie": "Mort-vivant",
    "nom": "Chef Vampire",
    "description": "Un mort-vivant fascinant vêtu comme un aristocrate.",
    "motivation": "Charmer, commander, crée des serviteur, intimider, voler",
    "difficulte": 17,
    "seuilMineur": 22,
    "seuilMajeur": 42,
    "blessure": 6,
    "stress": 6,
    "modAttaque": 5,
    "attaqueStandard": "Rapière : mêlée, 2d20+4 phy",
    "experience": "Aristocrate +3",
    "aptitudes": [
      {
        "nom": "Terrifiant",
        "tag": "passive",
        "texte": "Quand la créature reussit une attaque, tous les PJ à porter très courte perdent un Espoir et vous gagnez une Peur."
      },
      {
        "nom": "Regarde moi dans les yeux",
        "tag": "passive",
        "texte": "Une créature qui se déplace dans la portée de mêlée du vampire doit effectuer un jet en réaction instinctif. En cas d'échec, vous gagnez 1d4 Peur."
      },
      {
        "nom": "Se nourrir des serviteurs",
        "tag": "action",
        "texte": "Lorsque le vampire se trouve à portée de mêlée d'un allié, il peut obliger l'allié à marquer un PB. Le vampire élimine alors un PB."
      },
      {
        "nom": "La chasse est ouverte",
        "tag": "action",
        "texte": "Dépensez 2 Peur pour invoquer des vampires 1d4, qui apparaissent à longue portée et sont immédiatement mis en avant."
      },
      {
        "nom": "Aspirer la vie",
        "tag": "réaction",
        "texte": "Lorsque le vampire est mis en avant, lancez un d8. Sur un résultat de 6 ou plus, toutes les cibles à portée très proche doivent marquer un PB."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "chevalier-cerf",
    "palier": 3,
    "type": "Standard",
    "categorie": "Millitaire",
    "nom": "chevalier cerf",
    "description": "Un chevalier avec d'énormes bois majestueux et une armure faite de redoutables épines.",
    "motivation": "Isoler, manoeuvrer, protéger la forêt, se débarrasser des intrus",
    "difficulte": 17,
    "seuilMineur": 19,
    "seuilMajeur": 36,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "épée de ronces : mêlée, 3d8+3 phy",
    "experience": "Connaissance de la forêt +3",
    "aptitudes": [
      {
        "nom": "D'en haut",
        "tag": "passive",
        "texte": "Quand le Chevalier reussit une attaque standard depuis une position sureleve par rapport a la cible, il inflige 3d12+3 degats physiques au lieu de ses degats standard."
      },
      {
        "nom": "lame de la forêt",
        "tag": "action",
        "texte": "Depenser une Peur pour effectuer une attaque contre toutes les cibles à trés court portée. Les cibles touchees subissent des degats physiques egaux a 3d4 + le seuil Majeur de la cible."
      },
      {
        "nom": "Armure épineuse",
        "tag": "réaction",
        "texte": "Quand le Chevalier subit des degats d'une attaque au Corps a corps, vous pouvez Marquer un Stress pour infliger 1d10+5 degats physiques a l'attaquant."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "demon-de-la-fureur",
    "palier": 3,
    "type": "Cogneur",
    "categorie": "Déchu",
    "nom": "Démon de la fureur",
    "description": "Un démon massif aux poings semblables à des rochers, poussé par une rage inextinguible.",
    "motivation": "Alimenter la colère, impréssionner ses rivaux, semer le chaos",
    "difficulte": 17,
    "seuilMineur": 22,
    "seuilMajeur": 40,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Poings : très courte, 3d8+1 mag",
    "experience": "Intimidation +2",
    "aptitudes": [
      {
        "nom": "Colère implacable",
        "tag": "passive",
        "texte": "Les attaques du Demon infligent des degats directs"
      },
      {
        "nom": "Soif de combat",
        "tag": "action",
        "texte": "Depenser une Peur pour glacer le sang de tous les PJ à longue portée. Ils utilisent un d20 comme De de Peur jusqu'a la fin de la Scene."
      },
      {
        "nom": "Représailles",
        "tag": "réaction",
        "texte": "Quand le Demon subit des degats d'une attaque à très courte portée, vous pouvez Marquer un Stress pour effectuer une attaque standard contre l'attaquant."
      },
      {
        "nom": "D'âmes et de sang",
        "tag": "réaction",
        "texte": "Compte a rebours (Boucle 6). \nActiver la premiere fois qu'une attaque est effectuee sous les yeux du démon. Il avance quand un PJ effectue une action violente. Quand il se declenche, invoquer 1d4 Demons Mineurs qui apparaissent à courte portée."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "demon-de-la-jalousie",
    "palier": 3,
    "type": "Distant",
    "categorie": "Déchu",
    "nom": "Démon de la jalousie",
    "description": "Une créature volage aux menbres filiformes, faite de désir insatiable.",
    "motivation": "Gade rancune, prendre ce qui appartient à autui, s'associer aux succès d'autrui",
    "difficulte": 17,
    "seuilMineur": 17,
    "seuilMajeur": 30,
    "blessure": 6,
    "stress": 6,
    "modAttaque": 4,
    "attaqueStandard": "Assaut psychique : longue, 3d8+3",
    "experience": "manipulation +3",
    "aptitudes": [
      {
        "nom": "Esprit sans protection",
        "tag": "passive",
        "texte": "L'attaque standard du Demon inflige des degats directs"
      },
      {
        "nom": "Amon tour",
        "tag": "réaction",
        "texte": "Quand le Demon Marque des PB suite a une attaque, depenser un nombre de Peurs egal aux PB Marques par le Demon pour faire Marquer le meme nombre de PB a l'attaquant."
      },
      {
        "nom": "Rivalité",
        "tag": "réaction",
        "texte": "Quand une creature à courte portée subit des degats d'un autre adversaire, vous pouvez Marquer un Stress pour ajouter un d4 au jet de degats."
      },
      {
        "nom": "Ce qui est à toi est à moi",
        "tag": "réaction",
        "texte": "Quand un PJ subit des degats Grave à très courte portée du Demon, vous pouvez depenser une Peur pour forcer la cible a effectuer un Jet en reaction de Finesse. En cas d'echec, le Demon s'empare d'un objet ou consommable de son choix dans l'inventaire de la cible."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "demon-de-l-avarice",
    "palier": 3,
    "type": "Soutien",
    "categorie": "Déchu",
    "nom": "Démon de l'avarice",
    "description": "Une créature monstrueuse aux airs royaux dont les cornes cylindriques sont parées de bijoux précieux.",
    "motivation": "Alimenter la cupidité, dévorer, semer la discorde",
    "difficulte": 17,
    "seuilMineur": 15,
    "seuilMajeur": 29,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "mâchoires affamées : mêlée, 3d6+5 mag",
    "experience": "manipulation +3",
    "aptitudes": [
      {
        "nom": "Le pouvoir de l'argent",
        "tag": "passive",
        "texte": "Les attaques contre le Démon sont faites avec un Desavantage, sauf si l'attaquant depense une poignee d'or. Ce Demon commence avec un nombre de poignees egal au nombre de PJ. Quand une cible Marque des PB suite a l'attaque standard du Demon, elle peut depenser une poignee d'or au lieu de Marquer des PB (1 poignee par PB). Ajouter une poignee d'or au Demon pour chaque poignee depensee par les PJ sur cette capacite."
      },
      {
        "nom": "La loi du chiffre",
        "tag": "passive",
        "texte": "Ajouter un bonus aux jets d'attaque du Demon egal au nombre de poignees d'or qu'il possede."
      },
      {
        "nom": "L'argent c'est du temps",
        "tag": "action",
        "texte": "Depenser 3 poignees d'or (ou une Peur) pour mettre en avant  a 1d4+1 allies."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "demon-de-l-hubris",
    "palier": 3,
    "type": "Meneur",
    "categorie": "Déchu",
    "nom": "Démon de l'hubris",
    "description": "Un démon à la beauté parfaite et à la cruauté infinie, armé d'une lance luisante et vêtu de robes élégantes.",
    "motivation": "Annoncer prématurément sa victoire, condescendre, prouver sa supériorité",
    "difficulte": 18,
    "seuilMineur": 18,
    "seuilMajeur": 36,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 4,
    "attaqueStandard": "lance parfaite : très courte, 3d10 phy",
    "experience": "manipulation +2",
    "aptitudes": [
      {
        "nom": "Terrifiant",
        "tag": "passive",
        "texte": "Quand la créature reussit une attaque, tous les PJ à porter très courte perdent un Espoir et vous gagnez une Peur."
      },
      {
        "nom": "Quitte ou double",
        "tag": "passive",
        "texte": "Quand un PJ à longue portée rate un jet, il peut choisir de relancer son De de Peur et prendre le nouveau resultat. S'il echoue toujours, il Marque 2 Stress et le Demon Efface un Stress."
      },
      {
        "nom": "Talent sans égale",
        "tag": "action",
        "texte": "Marquer un Stress pour infliger les degats de l'attaque standard du Demon a une cible à courte portée."
      },
      {
        "nom": "La racinedu mal",
        "tag": "action",
        "texte": "Depenser une Peur pour mettre en avant a deux autres démons à long portée."
      },
      {
        "nom": "Vous faites pâle figure en comparaison",
        "tag": "réaction",
        "texte": "Quand un PJ rate un jet à courte portée du Démon, il doit Marquer un Stress."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "demon-du-desespoir",
    "palier": 3,
    "type": "Traqueur",
    "categorie": "Déchu",
    "nom": "Démon du désespoir",
    "description": "Une créature démoniaque dotée e longs menbres enveloppé d'une cape d'ou suintent des ombres.",
    "motivation": "Rendre la peur contagieuse, rester dans les ombre, saper la résolution",
    "difficulte": 17,
    "seuilMineur": 18,
    "seuilMajeur": 35,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Trait miasmatique : longue, 3d6+1 mag",
    "experience": "manipulation +3",
    "aptitudes": [
      {
        "nom": "Profondeur du désespoir",
        "tag": "passive",
        "texte": "Le Demon inflige des degats doubles aux PJ ayant 0 Espoir."
      },
      {
        "nom": "Toute lutte est futile",
        "tag": "action",
        "texte": "Depenser une Peur pour alourdir le moral de tous les PJ à longue portée. Toutes les cibles affectees remplacent leur De d'Espoir par un d8 jusqu'a ce qu'elles obtiennent un succes avec l'Espoir ou jusqu'a leur prochain repos."
      },
      {
        "nom": "Vos amis vous décevront",
        "tag": "réaction",
        "texte": "Quand un PJ echoue avec la Peur, vous pouvez Marquer un Stress pour faire perdre un Espoir a tous les autres PJ à courte portée."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "diablotin-idolatre",
    "palier": 3,
    "type": "Sbire",
    "categorie": "Déchu",
    "nom": "Diablotin idolâtre",
    "description": "Un démon qui s'incline avec déférence devant sont seigneur.",
    "motivation": "défendre, tromper, vénérer",
    "difficulte": 17,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 0,
    "attaqueStandard": "Griffes : mêlée, 7 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (8)",
        "tag": "passive",
        "texte": "Le Diablotin est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 8 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une peur pour choisir une cible et mettre en avant tout les Diablotin à proximité d'eux. Ces sbire se déplacent à portée de mêlée de la cible et effectuent un jet d'attaque commun . En cas de succès, ils infligent chacun 7 dégât physique. Combinez ces dégâts."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "dryade",
    "palier": 3,
    "type": "Meneur",
    "categorie": "Plante",
    "nom": "Dryade",
    "description": "Un esprit de la nature ressemblant à un arbre humanoïde.",
    "motivation": "Commander, cultiver, expluser, préserver la forêt",
    "difficulte": 16,
    "seuilMineur": 24,
    "seuilMajeur": 38,
    "blessure": 8,
    "stress": 5,
    "modAttaque": 4,
    "attaqueStandard": "Arc assomoir : longue, 3d10+1 phy",
    "experience": "connaissance de la forêt +4",
    "aptitudes": [
      {
        "nom": "Buisson de ronces",
        "tag": "action",
        "texte": "Marquez un stress pour cibler un point à distance. Créez une zone d’épines qui couvre une zone située à proximité immédiate de ce point. Toutes les cibles situées dans cette zone subissent 2d6+2 dégâts physiques lorsqu'elles agissent. Une cible doit réussir sur un jet Finesse ou subir plus de 20 dégâts au Dryad avec une attaque pour quitter la zone."
      },
      {
        "nom": "Jeune pousses",
        "tag": "action",
        "texte": "Dépensez une peur pour faire pousser trois Jeune tréant triés sur le volet, qui apparaissent à courte distance et les mettre emmédiatement en avant."
      },
      {
        "nom": "Nous ne faisons qu'un",
        "tag": "réaction",
        "texte": "Lorsqu'un allié meurt à courte portée, vous pouvez dépenser une peur pour éliminer 2 PV et 2 stress lorsque la force vitale de l'allié tombé est renvoyée dans la forêt."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "elementaire-etincelle",
    "palier": 3,
    "type": "Sbire",
    "categorie": "Elémentaire",
    "nom": "Elémentaire étincelle",
    "description": "Une particule de feu élémentaire flamboyante.",
    "motivation": "Dévorer , faire exploser, prendre de la masse",
    "difficulte": 15,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 0,
    "attaqueStandard": "Jet de flammes : courte, 5 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (9)",
        "tag": "passive",
        "texte": "La créature est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 9 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 5 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "elementaire-superieur-de-terre",
    "palier": 3,
    "type": "Cogneur",
    "categorie": "Elémentaire",
    "nom": "Elémentaire supérieur de terre",
    "description": "Un glissement de terrain vivant, fait de rochers et de poussière, aussi grand qu'une maison.",
    "motivation": "Déclencher un avalanche, marteler, renverser",
    "difficulte": 17,
    "seuilMineur": 22,
    "seuilMajeur": 40,
    "blessure": 10,
    "stress": 4,
    "modAttaque": 7,
    "attaqueStandard": "Poing rocheux : très courte, 3d10+1 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Lent",
        "tag": "passive",
        "texte": "Quand vous mettez la créature en avant et qu'elle n'a pas de jeton sur son bloc de stats, elle ne peut pas encore agir. Placez un jeton sur son bloc de stats et decrivez ce qu'elle prepare. Quand vous mettez en avant et qu'elle a un jeton, retirez le jeton et elle peut agir."
      },
      {
        "nom": "Coups écrasants",
        "tag": "passive",
        "texte": "Quand l'Elementaire reussit une attaque, la cible doit Marquer un emplacement d'Armure sans en recevoir les benefices (elle peut toujours utiliser l'armure pour reduire les degats). Si elle ne peut pas Marquer de emplacement d'Armure, elle doit Marquer un PB supplementaire."
      },
      {
        "nom": "Objet fixe",
        "tag": "passive",
        "texte": "Une attaque qui deplacerait l'Elementaire le deplace de deux portees de moins (par exemple, Loin devient Tres courte). Quand l'Elementaire subit des degats physiques, les reduire de 7."
      },
      {
        "nom": "Eboulement",
        "tag": "action",
        "texte": "Marquer un Stress pour creer un éboulement qui ensevelit le terrain devant l'Elementaire à courte portée sous des pierres. Toutes les cibles dans cette zone doivent effectuer un Jet en reaction d'Agilite (19). Les cibles en echec subissent 2d12+5 degats physiques et deviennent Vulnerables jusqu'a leur prochain jet avec l'Espoir. Les cibles en reussite subissent la moitie des degats."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "elementaire-superieur-d-eau",
    "palier": 3,
    "type": "Soutien",
    "categorie": "Elémentaire",
    "nom": "Elémentaire supérieur d'eau",
    "description": "Une énorme vague vivante qui s'abat sur ses ennemis.",
    "motivation": "Dispercer, inonder, noyer",
    "difficulte": 17,
    "seuilMineur": 17,
    "seuilMajeur": 34,
    "blessure": 5,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Vague écrassante : très courte, 3d4+1 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Jet d'eau",
        "tag": "action",
        "texte": "Marquer un Stress pour attaquer une cible à très courte portée. En cas de reussite, infliger 2d4+7 degats physiques et la prochaine action de la cible a un Desavantage. En cas d'echec, la cible doit cocher un Stress."
      },
      {
        "nom": "Etreinte de la noyade",
        "tag": "action",
        "texte": "Depenser une Peur pour effectuer une attaque contre toutes les cibles à très courte portée. Les cibles touchees deviennent Bloqué et Vulnerables car elles commencent a se noyer. Une cible peut se liberer, mettant fin aux deux conditions, avec un jet reussi de Force ou d'Instinct."
      },
      {
        "nom": "Marée haute",
        "tag": "réaction",
        "texte": "Quand l'Elementaire reussit une attaque standard, vous pouvez Marquer un Stress pour repousser la cible à courte portée."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "geolier-garde-caveau",
    "palier": 3,
    "type": "Soutien",
    "categorie": "Artificielle",
    "nom": "Geôlier garde caveau",
    "description": "Une créature artificielle en forme de boîte, couvert de pousière et diotée d'épaisse portes métaliques battant sur sont torse.",
    "motivation": "Emporter au loin, marteler, pièger, protéger",
    "difficulte": 16,
    "seuilMineur": 19,
    "seuilMajeur": 33,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Corp-bélier : très courte, 3d6+2 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Bouclier bloquant",
        "tag": "passive",
        "texte": "Les creatures au Corps a corps du Geolier ont un Desavantage sur leurs jets d'attaque contre lui. Les creatures emprisonnees a l'interieur du Geolier sont immunisees contre cette capacite."
      },
      {
        "nom": "Enfermer",
        "tag": "action",
        "texte": "Marquer un Stress pour effectuer une attaque contre une cible à très courte portée. En cas de reussite, la cible est Entravee a l'interieur du Geolier jusqu'a ce qu'elle soit liberée par un jet reussi de Force (18). Tant qu'elle est Entravee, la cible ne peut attaquer que le Geolier."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "grande-viscosite-verte",
    "palier": 3,
    "type": "Traqueur",
    "categorie": "Vase",
    "nom": "Grande Viscosité verte",
    "description": "Un amas d'acide translucide plus grand que la majorité des humains",
    "motivation": "envelopper, ramper, se multiplier, se camoufler",
    "difficulte": 15,
    "seuilMineur": 15,
    "seuilMajeur": 30,
    "blessure": 7,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Appendice visqueux : mêlée, 3d8+1 mag",
    "experience": "se fondre dans le décor +3",
    "aptitudes": [
      {
        "nom": "Lent",
        "tag": "passive",
        "texte": "Quand vous mettez la créature en avant et qu'elle n'a pas de jeton sur son bloc de stats, elle ne peut pas encore agir. Placez un jeton sur son bloc de stats et decrivez ce qu'elle prepare. Quand vous mettez en avant et qu'elle a un jeton, retirez le jeton et elle peut agir."
      },
      {
        "nom": "Forme acide",
        "tag": "passive",
        "texte": "Lorsque le créature réussit une attaque, la cible doit marquer un emplacement d'armure sans en bénéficier (elle peut toujours utiliser une armure pour réduire les dégâts). S'ils ne peuvent pas marquer un emplacement d'armure, ils doivent marquer un PB supplémentaire."
      },
      {
        "nom": "Envelopper",
        "tag": "action",
        "texte": "Effectuez une attaque contre une cible à portée de mêlée. En cas de succès, la créature les enveloppe et la cible doit marquer 2 Stress. Lorsqu'elle est enveloppée, la cible doit marquer un stress supplémentaire à chaque fois qu'elle effectue un lancer d'action. Lorsque la créature subit de graves dommages, toutes les cibles enveloppées sont libérées et la condition est résolue."
      },
      {
        "nom": "scission",
        "tag": "réaction",
        "texte": "Lorsque la créature a 4 PB ou plus marqués, vous pouvez dépenser une Peur pour les diviser en deux Viscosité verts (sans PB ou Stress marqué). Mettez-les immédiatement en avant tous les deux."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "hydre",
    "palier": 3,
    "type": "Solo",
    "categorie": "draconien",
    "nom": "Hydre",
    "description": "Une créature quadrupède dont les multipkes long cous sont surmontés de têtes aux geules plienes de crocs menaçant.",
    "motivation": "Dévorer, regénérer, térrifier",
    "difficulte": 18,
    "seuilMineur": 19,
    "seuilMajeur": 35,
    "blessure": 10,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Morsure : courte 2d12+2phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Menace multicéphale",
        "tag": "passive",
        "texte": "L'Hydre commence avec trois têtes et peut en avoir jusqu'à cinq. Lorsque l'Hydre subit des dégâts majeurs ou plus importants, elle perd une tête"
      },
      {
        "nom": "Impitoyable (X)",
        "tag": "passive",
        "texte": "L'Hydre peut être mise en avant X fois par tour MJ, où X est le nombre de têtes de l'Hydre. Dépensez la peur comme d’habitude pour les mettre en avant."
      },
      {
        "nom": "Régénération",
        "tag": "action",
        "texte": "Si l'Hydre a un PB marqué, dépensez une Peur pour effacer un PB et faire pousser deux têtes."
      },
      {
        "nom": "Choeur terrifiant",
        "tag": "action",
        "texte": "Tous les PJ à distance perdent 2 espoir."
      },
      {
        "nom": "Vulnérabilité à la magie",
        "tag": "réaction",
        "texte": "Lorsque l'Hydre subit des dégâts magiques, elle devient Sonnée jusqu'au prochain jet avec la peur. Bien qu'ils soient Sonnée, ils ne peuvent pas utiliser leur action de régénération mais sont immunisés contre les dommages magiques."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "jeune-dragon-de-glace",
    "palier": 3,
    "type": "Solo",
    "categorie": "draconien",
    "nom": "Jeune dragon de glace",
    "description": "Un dragon bleu glacier ddoté de quatre menbres et d'ailes d'une teinte de givre.",
    "motivation": "Déclencher un avalanche, défendre se qui lui appartient, défendre sont repaire, geler, mutiler, voler",
    "difficulte": 18,
    "seuilMineur": 21,
    "seuilMajeur": 41,
    "blessure": 10,
    "stress": 6,
    "modAttaque": 7,
    "attaqueStandard": "Morsure et griffes : mêlée, 4d10 phy",
    "experience": "Portéger se qui m'appartient +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 3 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Déchiqueter et broyer",
        "tag": "passive",
        "texte": "Si une cible subit des dégâts par le Dragon ne coche pas d'emplacement d'armure pour réduire les dégâts, elle doit marquer un stress"
      },
      {
        "nom": "sans espoir",
        "tag": "passive",
        "texte": "Lorsqu'un PJ réalise un jet avec Peur alors qu'il se trouve à longue portée du Dragon, il perd un Espoir."
      },
      {
        "nom": "Soufle glaciale",
        "tag": "action",
        "texte": "Dépensez 2 Peur pour libérer un tourbillon glacé dans une zone à courte portée. Toutes les cibles dans cette zone doivent effectuer un jet en réaction d'agilité. Les cibles qui échouent subissent des dégâts magiques de 4d6+5 et sont retenues par la glace jusqu'à ce qu'elles se libèrent avec un jet de force réussi. Les cibles qui réussissent doivent marquer 2 Stress ou subir la moitié des dégâts"
      },
      {
        "nom": "déclencher une avalanche",
        "tag": "action",
        "texte": "Dépenser une peur pour que le dragon déclenche une énorme chute de neige et de glace, couvrant toutes les autres créatures à distance. Toutes les cibles dans cette zone doivent réussir sur un jet en réaction d'Instinct ou être enterrées dans la neige et les rochers, devenant vulnérables jusqu'à ce qu'elles se déterrent des débris. Pour chaque PJ qui échoue au jet en réaction, vous gagnez une Peur."
      },
      {
        "nom": "Ecailles gelées",
        "tag": "réaction",
        "texte": "Lorsqu'une créature réussit une attaque contre le Dragon à très courte distance, elle doit marquer un stress et se frigorifiée jusqu'à son prochain repos, sinon elle élimine un stress. Bien qu'ils soient refroidis, ils présentent un désavantage sur les lancers d'attaque."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "jeune-treant",
    "palier": 3,
    "type": "Sbire",
    "categorie": "Plante",
    "nom": "Jeune tréant",
    "description": "Un arbrisseau intéligent.",
    "motivation": "Encercler, marteler, préserver la forêt, se fondre dans le décor",
    "difficulte": 14,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 0,
    "attaqueStandard": "branche : très courte, 8 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (6)",
        "tag": "passive",
        "texte": "La créature est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 6 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 8 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "mineurs-avide-5-pb",
    "palier": 3,
    "type": "Horde",
    "categorie": "Royaume",
    "nom": "Mineurs Avide (5/Pb)",
    "description": "Un groupe de mineurs fantomatique, prisonniers de leur insatiable cupidité.",
    "motivation": "obtenir des richesse, payer ses dettes;",
    "difficulte": 16,
    "seuilMineur": 15,
    "seuilMajeur": 25,
    "blessure": 6,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "hoyau spirituel : mêlée, 3d12+10 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Horde (3d6+5)",
        "tag": "passive",
        "texte": "Lorsque les mineur ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige à la place 3d6+5 dégâts magique."
      },
      {
        "nom": "Soif d'or",
        "tag": "action",
        "texte": "Cocher un stress pour effectuer une attaque standard avec avantage contre toutes les cibles portant de l'or et situées à trés courte portée."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "monarque",
    "palier": 3,
    "type": "Social",
    "categorie": "Royaume",
    "nom": "Monarque",
    "description": "Le souverain d'une nation, auréolé des privilèges de la tradition et disposant d'une puissance inégalée en son royaume.",
    "motivation": "Contrôler ses vassaux, détruire ses rivaux, forger un héritage",
    "difficulte": 16,
    "seuilMineur": 16,
    "seuilMajeur": 32,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 0,
    "attaqueStandard": "marteau de guerre : mêlée, 3d6+3 phy",
    "experience": "Histoire +3, noblesse +3",
    "aptitudes": [
      {
        "nom": "Exécutez-les !",
        "tag": "action",
        "texte": "Dépensez une peur par PJ dans le parti pour que le groupe soit condamné pour des crimes réels ou imaginaires. Un PJ qui réussit un jet de présence peut exiger un procès par combat ou une autre forme spéciale de procès."
      },
      {
        "nom": "Gardes de la couronne",
        "tag": "action",
        "texte": "Une fois par scène, marquez un stress pour invoquer 3 sbire de palier 3, qui apparaissent à courte portée pour faire respecter la volonté du monarque."
      },
      {
        "nom": "Casus Belli",
        "tag": "réaction",
        "texte": "Dépenser une peur à activer après que le désir de guerre du monarque ait été révélé pour la première fois. Lorsqu’il se déclenche, le monarque a une raison de rallier la nation à la guerre et le soutien nécessaire pour agir pour cette raison. Vous gagnez 1d4 Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "revenant-sinistre",
    "palier": 3,
    "type": "Cogneur",
    "categorie": "Mort-vivant",
    "nom": "Revenant sinistre",
    "description": "Un ogre mort-vivant très attaché à la protection de sont territoire.",
    "motivation": "obéir, protger, terrifier, tuer.",
    "difficulte": 15,
    "seuilMineur": 26,
    "seuilMajeur": 42,
    "blessure": 8,
    "stress": 4,
    "modAttaque": 2,
    "attaqueStandard": "Giffre et crocs : trés courte, 3d12+5 phy",
    "experience": "lancer +3",
    "aptitudes": [
      {
        "nom": "Giffe terrifiante",
        "tag": "action",
        "texte": "Dépenser une de peur pour contrinder toutes les cibles à trés court portée de cocher un stress, puis effectuer une attaque contre elles. les cibles touchées par le revenant subissent 3d10+1 dégâts physique"
      },
      {
        "nom": "Plaie béante",
        "tag": "réaction",
        "texte": "Quand un revenant subit des dégâts majeur vous pouver cocher un de stress pour contraite tout les cibles a très courte portée à faire un jet de réaction de Présence. les cibles qui échouet perdent un espoir et sont repousée à courte portée."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "sentinelle-garde-caveau",
    "palier": 3,
    "type": "Cogneur",
    "categorie": "Artificielle",
    "nom": "Sentinelle garde caveau",
    "description": "Une créature artificielle dorée couverte de poussière aux menbres en forme de boîte avec une énorme masse en guise de main.",
    "motivation": "Détruire à tout prix, expurger, protéger",
    "difficulte": 17,
    "seuilMineur": 21,
    "seuilMajeur": 40,
    "blessure": 6,
    "stress": 3,
    "modAttaque": 3,
    "attaqueStandard": "Masse chargée : très courte, 2d12+1 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Frappe cinétique",
        "tag": "passive",
        "texte": "Les cibles qui subissent les dégâts de l'attaque standard de la Sentinelle sont ramenées à très courte portée."
      },
      {
        "nom": "Coincer",
        "tag": "action",
        "texte": "Marquez un stress pour choisir une cible à très courte portée sur laquelle vous concentrer. Cette cible présente un inconvénient sur les lancers d'attaque lorsqu'elle se trouve à très courte portée de la Sentinelle. La Sentinelle ne peut se concentrer que sur une seule cible à la fois."
      },
      {
        "nom": "Trait de mana",
        "tag": "action",
        "texte": "Dépenser une peurpour envoyer une magie explosive à un point situé à longue portée. Toutes les cibles situées à très courte distance de ce point doivent effectuer un jet en réaction d'agilité. Les cibles qui échouent subissent des dégâts magiques de 8d20 et sont ramenées à courte portée. Les cibles qui réussissent subissent la moitié des dégâts et ne sont pas repoussées."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "tourelle-garde-caveau",
    "palier": 3,
    "type": "Distant",
    "categorie": "Artificielle",
    "nom": "Tourelle garde caveau",
    "description": "Une énorme tourelle vivante avec une armure renforcée et des jambes mécaniques propulsées par douze pistons.",
    "motivation": "Concenter les tirs, confiner, marquer protéger",
    "difficulte": 16,
    "seuilMineur": 20,
    "seuilMajeur": 32,
    "blessure": 5,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Canon migitech : longue, 3d10+3 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Tir lent",
        "tag": "passive",
        "texte": "Lorsque vous mettez en avant la tourelle et qu'elle n'a pas de jeton sur son bloc de statistiques, elle ne peut pas lancer d'attaque standard. Placez un jeton sur leur bloc de statistiques et décrivez ce qu'ils se préparent à faire. Lorsque vous mettez en avant la tourelle et qu'elle a un jeton sur son bloc de statistiques, effacez le jeton et elle peut attaquer."
      },
      {
        "nom": "Marquer la cible",
        "tag": "action",
        "texte": "Dépenser une peur pour marquer une cible à distance jusqu'à ce que la tourelle soit détruite ou que la cible marquée devienne cachée. Pendant que la cible est marquée, leur esquive est réduite de moitié."
      },
      {
        "nom": "Concentrer les tirs",
        "tag": "réaction",
        "texte": "Lorsqu'un autre adversaire inflige des dégâts à une cible située à distance de la tourelle, vous pouvez marquer une stress pour ajouter les dégâts d'attaque standard de la tourelle au jet de dégâts."
      },
      {
        "nom": "Détonation",
        "tag": "réaction",
        "texte": "Lorsque la Tourelle est détruite, elles explosent. Toutes les cibles à courte portée doivent effectuer un jet en réaction d'agilité. Les cibles qui échouent subissent des dégâts physiques 3d20. Les cibles qui réussissent subissent la moitié des dégâts."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "treant-chene",
    "palier": 3,
    "type": "Cogneur",
    "categorie": "Plante",
    "nom": "Tréant (chêne)",
    "description": "Un arbre animé solide comme une vieille souche.",
    "motivation": "balancer ses branche, protéger la forêt, se dissimuler à la vue de tous, s'enraciner",
    "difficulte": 17,
    "seuilMineur": 22,
    "seuilMajeur": 40,
    "blessure": 7,
    "stress": 4,
    "modAttaque": 2,
    "attaqueStandard": "branche : très courte, 3d8+2 phy",
    "experience": "Connaissance de la forêt +3",
    "aptitudes": [
      {
        "nom": "C'est juste un arbre",
        "tag": "passive",
        "texte": "Avant de lancer leur première attaque dans un combat ou une fois cachés, le Tréant est impossible à distinguer des autres arbres jusqu'à ce qu'il agisse ou qu'un PJ réussisse sur un jet d'Instinct pour les identifier."
      },
      {
        "nom": "Volée de glands",
        "tag": "action",
        "texte": "Marquez un stress et lancez une attaque contre jusqu'à trois cibles à courte portée, en les frappant avec des glands géants. Cibles que le Tréant réussit à toucher subises 2d10+5 dégâts physiques."
      },
      {
        "nom": "Enracinement",
        "tag": "action",
        "texte": "Marquez un stress pour enraciner le Tréant. Il est bloqué et peut mettre fin à cet effet a tout moment. Bien qu'enraciné, le Tréant est résistant aux dommages physiques."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "vampire",
    "palier": 3,
    "type": "Standard",
    "categorie": "Mort-vivant",
    "nom": "Vampire",
    "description": "Un mort-vivant intéligent au lèvres tachées de sang et au sourire de prédateur.",
    "motivation": "Charmer, duper, intimider, mordre, se nourrir",
    "difficulte": 16,
    "seuilMineur": 18,
    "seuilMajeur": 35,
    "blessure": 5,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Rapière : mêlée, 3d8 phy",
    "experience": "Chasse nocturne +3",
    "aptitudes": [
      {
        "nom": "Morsure drainante",
        "tag": "action",
        "texte": "Effectuez une attaque contre une cible à portée de mêlée. En cas de succès, infligez des dégâts physiques en 5d4. Une cible qui marque PB à partir de cette attaque perd un espoir et doit marquer un stress. Le vampire élimine alors un PB."
      },
      {
        "nom": "Forme brumeuse",
        "tag": "réaction",
        "texte": "Lorsque le vampire subit des dégâts physiques, vous pouvez dépenser une peur pour subir la moitié des dégâts."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "volcillant-adulte",
    "palier": 3,
    "type": "Solo",
    "categorie": "Inscete",
    "nom": "Volcillant Adulte",
    "description": "Un insecte aussi gros qu'une maison avec des ailes et des écailles iridescentes, qui se déplace trop vite pour que l'oeil arrive à le suivre",
    "motivation": "chasser, collectionner des chose qui brillantes, nidifier, piquer",
    "difficulte": 17,
    "seuilMineur": 20,
    "seuilMajeur": 35,
    "blessure": 12,
    "stress": 6,
    "modAttaque": 3,
    "attaqueStandard": "Aile tranchante : très courte, 3d20 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Impitoyable (4)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 4 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Aucun raté",
        "tag": "passive",
        "texte": "Lorsque la créature effectue une attaque, l'esquive de la cible est réduite de moitié par rapport à l'attaque."
      },
      {
        "nom": "Vol mortel",
        "tag": "passive",
        "texte": "En vol, la créature peut se déplacer jusqu'à une distance éloignée au lieu d'une portée courte avant d'effectuer une action."
      },
      {
        "nom": "Troubillon",
        "tag": "action",
        "texte": null
      },
      {
        "nom": "Danse spirituelle",
        "tag": "action",
        "texte": "Dépenser une peur à tourbillonner, en lançant une attaque contre toutes les cibles à très courte portée. Cible les cibles que la créature touche subissent 3d8 dégâts physiques directs."
      },
      {
        "nom": "Soufle halucinogéne",
        "tag": "réaction",
        "texte": "Compte a rebours (Boucle 1d6). Lorsque la créture subit des dégâts pour la premiere fois, activez le Compte a rebours. Lorsqu'il se declenche, la créature souffle un gaz hallucinogene sur toutes les cibles devant elle jusqu'à longue portée. Les cibles doivent reussir un Jet en réaction d'Instinct ou etre tourmentees par des hallucinations effrayantes. Les cibles dont les peurs sont connues de la créature ont le Desavantage sur ce jet. Les cibles qui echouent subissent 3d8+3 dégâts magique direct."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "abonmination-royaume-exterieurs",
    "palier": 4,
    "type": "Cogneur",
    "categorie": "Royaume extérieurs",
    "nom": "Abonmination, royaume extérieurs",
    "description": "Un e parodie  de vie en perpétuel changement.",
    "motivation": "Démolir, dévorer, saper",
    "difficulte": 19,
    "seuilMineur": 35,
    "seuilMajeur": 71,
    "blessure": 7,
    "stress": 5,
    "modAttaque": null,
    "attaqueStandard": "speudopode massif : très courte, 4d6+13 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Forme chaotique",
        "tag": "passive",
        "texte": "Lorsque l'Abomination attaque, lancez 2d4 et utilisez le résultat comme modificateur d'attaque."
      },
      {
        "nom": "Présence déroutante",
        "tag": "passive",
        "texte": "Lorsqu'une cible subit des dégâts de l'Abomination, elle doit effectuer un jet de réaction d'instinct. En cas d'échec, ils sont désavantagés lors de leur prochain jet d'action et vous gagnez une Peur."
      },
      {
        "nom": "Froisser la réalité",
        "tag": "action",
        "texte": "Dépensez une Peur pour ébranler les limites de la réalité à longue portée. Toutes les cibles dans cette zone doivent réussir un jet en réaction de Savoir ou se désolidarisée de la réalité jusqu'à la fin de la scène. Lorsqu'une cible désolidarisée dépense de l'espoir ou marque des emplacements d'armure, des PB ou du stress, elle doit doubler le montant dépensé ou marqué."
      },
      {
        "nom": "Forme irréelle",
        "tag": "réaction",
        "texte": "Lorsque l'Abomination subit des dégâts, réduisez-les de 1d20. Si l'Abomination marque 1 point de vie ou moins après une attaque réussie contre elle, vous gagnez une Peur."
      },
      {
        "nom": "Réflexes surnaturels",
        "tag": "réaction",
        "texte": "Lorsque la créature subit des dégâts suite à une attaque à courte portée, vous pouvez marquer un stress pour subir la moitié des dégâts."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "archer-saint",
    "palier": 4,
    "type": "Distant",
    "categorie": "Divin",
    "nom": "Archer saint",
    "description": "Soldat spirituel armé d'un arc sanctifié.",
    "motivation": "Focaliser les tirs, obéir, se repositionner, volée de tirs",
    "difficulte": 19,
    "seuilMineur": 25,
    "seuilMajeur": 45,
    "blessure": 3,
    "stress": 2,
    "modAttaque": 4,
    "attaqueStandard": "Arc long sanctifié : longue, 4d8+8 Phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Punir les coupables",
        "tag": "passive",
        "texte": "L'Archer inflige un double dégât aux cibles marquées Coupables par un Haut Séraphin."
      },
      {
        "nom": "Volée divine",
        "tag": "action",
        "texte": "Marquez un stress pour effectuer une attaque standard contre jusqu'à trois cibles."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "archinecromancien",
    "palier": 4,
    "type": "Meneur",
    "categorie": "Mort-vivant",
    "nom": "Archinécromancien",
    "description": "Un mage décrépi vêtu de sombres robes usée.",
    "motivation": "Corrompre, faire pourrir, réssusciter, s'enfuir pour combattreplus tard",
    "difficulte": 21,
    "seuilMineur": 33,
    "seuilMajeur": 66,
    "blessure": 9,
    "stress": 8,
    "modAttaque": 6,
    "attaqueStandard": "Explosion nécrotique : longue, 4d12+8 mag",
    "experience": "Connaissance interdites +3, sagesse sculaire +3",
    "aptitudes": [
      {
        "nom": "Danse de la mort",
        "tag": "action",
        "texte": "Marquez un stress pour mettre en avant les alliés 1d4. Les attaques qu'ils lancent alors qu'ils sont ainsi mis en avant infligent la moitié des dégâts, ou la totalité des dégâts si vous dépensez une peur."
      },
      {
        "nom": "Rayon de décomposition",
        "tag": "action",
        "texte": "Marque 2 Stress pour amener toutes les cibles à distance à effectuer un jet en réaction de force. Les cibles qui échouent subissent des dégâts magiques 2d20+12 et vous gagnez une peur. Les cibles qui réussissent subissent la moitié des dégâts. Une cible qui marque 2 PB ou plus doit également marquer 2 Stress et devient Vulnérable jusqu'à ce qu'elle jet avec espoire."
      },
      {
        "nom": "Ouvrir les portes de la mort",
        "tag": "action",
        "texte": "Dépensez une peur pour invoquer une Légion zombie, qui apparaît à courte portée et prend immédiatement le devant de la scène."
      },
      {
        "nom": "Pas aujourd'hui mes petits",
        "tag": "réaction",
        "texte": "Lorsque le nécromancien a marqué 7 ou plus de ses PB, vous pouvez dépenser une peur pour qu'il se téléporte dans un endroit sûr pour récupérer. Un PJ qui réussit un jet  d'Instinct peut retracer la magie de la téléportation jusqu'à sa destination."
      },
      {
        "nom": "Ta vie m'appartient",
        "tag": "réaction",
        "texte": "Compte à rebours (2d6). \nLorsque le nécromancien a marqué 6 ou plus de ses PB, activez le compte à rebours. Lorsqu'il se déclenche, infligez des dégâts magiques directs 2d10+6 à une cible à courte portée. Le nécromancien élimine ensuite un nombre de stress ou de PB égal au nombre de PB marqué par la cible lors de cette attaque."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "bouffon-danselame",
    "palier": 4,
    "type": "Standard",
    "categorie": "Guerrier",
    "nom": "Bouffon danselame",
    "description": "un artiste de cirque élancé en harmonie avec une danse d'autre royaume.",
    "motivation": "attirer au loin, canaliser la danse, divertir.",
    "difficulte": 19,
    "seuilMineur": 22,
    "seuilMajeur": 50,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 3,
    "attaqueStandard": "chakrams enchaînés :  très courte, 4d8+5 phy",
    "experience": "commédie +2, danse +3",
    "aptitudes": [
      {
        "nom": "Dansez avec moi",
        "tag": "action",
        "texte": "Effectuer une attaque contre une cible à très court portée. sur un succès, lz cible doit réussir un jet de réactiond'agilité, sinon elle est attirée en mêlée avec le bouffon et, la prochai,e fois qu'elle se déplace, vous gagnezune peur."
      },
      {
        "nom": "Staccato silencieux",
        "tag": "réaction",
        "texte": "Quand le bouffon subit des dégâts, vous pouvezcocher un stress pour réduire les dégâts de 3d6. Le bouffon peut alors de déplacer en un point situé à courte portée."
      },
      {
        "nom": "Porteur de mort",
        "tag": "réaction",
        "texte": "Lorsqu'une cible marque PB suite à une attaque du Briseur de royaume, tous les PJ situés à longue porté de la cible doivent perdre un espoir."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "corrupteur-royaume-exterieurs",
    "palier": 4,
    "type": "Soutien",
    "categorie": "Royaume extérieurs",
    "nom": "Corrupteur, royaume extérieurs",
    "description": "Une masse informe de changeante de lumiére chromatique.",
    "motivation": "Distraire, perturber, submerger",
    "difficulte": 19,
    "seuilMineur": 27,
    "seuilMajeur": 47,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 7,
    "attaqueStandard": "speudopode Corrupteur: très courte, 4d8+5 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Contact briseur de volonté",
        "tag": "passive",
        "texte": "Lorsqu'un PJ subit des dégâts du Corrupteur, il perd un Espoir."
      },
      {
        "nom": "Régurgiter des débris de réalité",
        "tag": "action",
        "texte": "Marquez un stress pour cracher des parties partiellement digérées des réalités sur toutes les cibles à courte portée. Les cibles doivent réussir sur un jet en réaction de Savoir ou marquer 2 Stress."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "ensorceleur-dechu",
    "palier": 4,
    "type": "Soutien",
    "categorie": "Déchu",
    "nom": "Ensorceleur déchu",
    "description": "Un puissant mage lié par le marché couclu de sont vivant.",
    "motivation": "Acquérir, décourager, dominer, tourmenter",
    "difficulte": 19,
    "seuilMineur": 26,
    "seuilMajeur": 42,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 4,
    "attaqueStandard": "Bâton corrompu : longue, 4d6+10 mag",
    "experience": "connaissance antique +2",
    "aptitudes": [
      {
        "nom": "Conflagation",
        "tag": "action",
        "texte": "Dépensez une peur pour déclencher une tempête de feu dévorante et lancer une attaque contre toutes les cibles à courte portée. Cibles que le Sorcier réussit subissent 2d10+6 dégâts magiques directs."
      },
      {
        "nom": "Tableau cauchemardesque",
        "tag": "action",
        "texte": "Marquez un stress pour piéger une cible à distance dans une puissante illusion de ses pires peurs. Lorsqu'elle est piégée, la cible est bloqué et vulnérable jusqu'à ce qu'elle se libère, mettant fin aux deux conditions, avec  jet d'Instinct réussi."
      },
      {
        "nom": "Fuyant",
        "tag": "réaction",
        "texte": "Lorsque le Sorcier subit des dégâts suite à une attaque, il peut se téléporter jusqu'à longue portée."
      },
      {
        "nom": "Entrave de la cupabilité",
        "tag": "réaction",
        "texte": "Compte à rebours (Boucle 2d6). \nLorsque le Sorcier est mis en avant pour la première fois, activez le compte à rebours. Lorsque cela se déclenche, toutes les cibles situées à longue portée deviennent vulnérables et doivent marquer un stress lorsqu'elles revivent leurs plus grands regrets. Une cible peut se libérer de ses regrets grâce à un jet de Présence ou de Force réussi. Lorsqu’un PJ ne parvient pas à se libérer, il perd un espoir."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "fleau-en-fusion-dragon-volcanique",
    "palier": 4,
    "type": "Solo",
    "categorie": "draconien",
    "nom": "Fléau en fusion, dragon volcanique",
    "description": "Furieux d'être blessé, le dragon se couvre de lave ne fusion.",
    "motivation": "asperger de lave incinéree, repouser les envahisseurs, se repositionner",
    "difficulte": 20,
    "seuilMineur": 30,
    "seuilMajeur": 58,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 9,
    "attaqueStandard": "Griffes enduite de lave : courte, 4d12+4 phy",
    "experience": "chasseur volant +5",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 3 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Ecaille fissurée",
        "tag": "passive",
        "texte": "Lorsque le Fléau subit des dégâts, lancez un nombre de d6 égal à PB marqué. Pour chaque résultat de 4 ou plus, vous gagnez une Peur."
      },
      {
        "nom": "Force écrassante",
        "tag": "action",
        "texte": "Marquez un stress pour lancer une attaque contre une cible à très courte portée. En cas de succès, la cible subit 4d8+14 dégâts physiques, perd un espoir et est repousée à courte portée. Le Fléau élimine un stress."
      },
      {
        "nom": "Eruption",
        "tag": "action",
        "texte": "dépenser une peur à faire éclater de la lave sous les écailles du Fléau, remplissant ainsi la zone située à très courte distance de lave. Toutes les cibles doivent effectuer un jet en réaction d'Agilité ou subir des dégâts physiques 4d6+6 et être repouser à courte portée. La zone reste de la lave (dommages de 6 PB à l'entrée ou à l'action)."
      },
      {
        "nom": "Soufle volcanique",
        "tag": "réaction",
        "texte": "Lorsque le Fléau subit des dégâts majeurs, roulez d10. Sur 8+, faites éclater de la lave à très courte distance : jet en réaction d'Agilité ou subissez 2d10+4 dégâts physiques, marquez 1d4 Stress et êtes vulnérable jusqu'à éffacer un Stress ; succès = moitié des dégâts + cocher un Stress."
      },
      {
        "nom": "Projection de lave",
        "tag": "réaction",
        "texte": "Lorsque le fléau subit de graves dégâts suite à une attaque à proximité, le sang fondu inflige 2d10+4 dégâts physiques directs à l'attaquant."
      },
      {
        "nom": "Vengeance cendreuse (Chamgement de phase)",
        "tag": "réaction",
        "texte": "Lorsque le Fléau marque le dernier PB, remplacez-le par Tyran cendreux et mettez-le immédiatement en avant."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "grand-seraphin",
    "palier": 4,
    "type": "Meneur",
    "categorie": "Divin",
    "nom": "Grand séraphin",
    "description": "Champion divin à la tête d'une armée de guerriers saints qui fait respecter la volonté de son dieu.",
    "motivation": "Appliquer le dogme, châtier, rendre son jugement, voler",
    "difficulte": 20,
    "seuilMineur": 37,
    "seuilMajeur": 70,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 8,
    "attaqueStandard": "Epée sacrée : très courte,4d10+10 phy",
    "experience": "Connaissance divines +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 3 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Vol divin",
        "tag": "passive",
        "texte": "Pendant que le Séraphin vole, dépensez une Peur pour vous déplacer à Longue portée au lieu de courte portée avant d'entreprendre une action."
      },
      {
        "nom": "Jugement",
        "tag": "action",
        "texte": "Dépensez une Peur pour rendre une cible Coupable aux yeux du dieu du Séraphin jusqu'à ce que le Séraphin soit vaincu. tant que coupable, la cible ne gagne pas d'espoir tant quelle ne réussi pas un jet avec espoir. Lorsque le Séraphin réussit une attaque standard contre une cible coupable, il inflige des dégâts graves au lieu de ses dégâts standard. Le Séraphin ne peut marquer qu'une seule cible à la fois."
      },
      {
        "nom": "Rayon divin",
        "tag": "action",
        "texte": "Marquez un stress pour refléter un éclat de divinité sous la forme d'un faisceau de lumière brûlant qui touche jusqu'à vingt cibles à très grande distance. Les cibles doivent effectuer un jet en réaction de présence, avec désavantage pour la cible coupables. Les cibles qui échouent subissent 4d6+12 dégâts magiques. Les cibles qui réussissent subissent la moitié des dégâts."
      },
      {
        "nom": "Nous ne faisons qu'un",
        "tag": "action",
        "texte": "Une fois par scène, dépenser une peur pour mettre en avant tous les autres adversaires à longue portée. Les attaques mis en avant qui sont lancé infligent la moitié des dégâts."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "kraken",
    "palier": 4,
    "type": "Solo",
    "categorie": "bête",
    "nom": "Kraken",
    "description": "Une créature marine légendaire, plus grande que le plus impssant des galion,  avec des tentacules couverts de ventouses et une gueule térrifiante.",
    "motivation": "Broyer dévorer, empoigner, noyer",
    "difficulte": 20,
    "seuilMineur": 35,
    "seuilMajeur": 70,
    "blessure": 11,
    "stress": 8,
    "modAttaque": 7,
    "attaqueStandard": "Tentacule : courte, 4d12+10 Phy",
    "experience": "Natation +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 3 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "monbreux tentacules",
        "tag": "passive",
        "texte": "Tant que le Kraken ait 7 PB marqués ou moins, il peut effectuer son attaque standard contre deux cibles à portée."
      },
      {
        "nom": "Empoigner et noyer",
        "tag": "action",
        "texte": "Effectuez un jet d'attaque contre une cible à courte portée. En cas de succès, marquez un Stress pour les attraper avec un tentacule et les traîner sous l'eau. La cible est bloqué et vulnérable jusqu'à ce qu'elle se libère avec un jet de force réussi ou que le Kraken subisse des dégâts majeurs ou plus importants. Tant qu'une cible est ainsi bloqué et vulnérable, une cible doit marquer un stress lorsqu'elle effectue un jet d'action."
      },
      {
        "nom": "Crachat bouillant",
        "tag": "action",
        "texte": "Dépensez une Peur pour cracher une ligne d'eau bouillante à longue portée sur des cibles. Toutes les cibles doivent réussir un jet de réaction d'agilité ou subir 4d6+9 dégâts physiques. Si une cible marque un emplacement d'armure pour réduire les dégâts, elle doit également marquer un stress."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      },
      {
        "nom": "Soubresauts apocalyptique",
        "tag": "action",
        "texte": "Compte à rebours (1d12). \nDépensez une Peur pour l'activer. Cela augemente lorsqu'un PJ reussi un jet avec la peur. Lorsqu'il atteint 0, le tyran se débat, provoquant des dommages environnementaux (tels qu'un tremblement de terre, une avalanche ou l'effondrement de murs). Toutes les cibles situées à longue portée doivent effectuer un jet en réaction de force. Les cibles qui échouent subissent des dégâts physiques 2d10+10 et sont bloquée par les décombres jusqu'à ce qu'elles se libèrent avec un jet de Force réussi. Les cibles qui réussissent subissent la moitié des dégâts. Si le tyran est vaincu alors que ce compte à rebours est actif, déclenchez immédiatement le compte à rebours car la destruction causée par leur agonie."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "legion-de-zombie-3-pb",
    "palier": 4,
    "type": "Horde",
    "categorie": "Mort-vivant",
    "nom": "Légion de zombie (3/PB)",
    "description": "Une hordre de morts-vivants, encore puissant malgrés leur chair pourrisante",
    "motivation": "Dévorer le cerveau, encercler, lacérer la chair",
    "difficulte": 17,
    "seuilMineur": 25,
    "seuilMajeur": 45,
    "blessure": 8,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "Mains morts-vivants : courte, 4d6+10 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Horde (2d6+5)",
        "tag": "passive",
        "texte": "Lorsque les ronces ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige à la place 2d6+5 dégâts physiques."
      },
      {
        "nom": "Inébranlable",
        "tag": "passive",
        "texte": "La Légion a une résistance aux dommages physiques."
      },
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 2 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Submerger",
        "tag": "réaction",
        "texte": "Lorsque Legion subit des dégâts mineurs lors d'une attaque au corps à corps, marquez un stress pour effectuer une attaque standard avec avantage contre l'attaquant."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "oracle-funeste",
    "palier": 4,
    "type": "Solo",
    "categorie": "Divin",
    "nom": "Oracle funeste",
    "description": "Un immense immortel incarnant le destin, maudit et condamné à voir seulement un futur malheureux.",
    "motivation": "Condammer, décourager, laisser de côté, modifier l'environnement",
    "difficulte": 20,
    "seuilMineur": 38,
    "seuilMajeur": 68,
    "blessure": 11,
    "stress": 10,
    "modAttaque": 8,
    "attaqueStandard": "Arme psychique : longue, 4d8+9 mag",
    "experience": "Connaisssance illimitée +4",
    "aptitudes": [
      {
        "nom": "Terrifiant",
        "tag": "passive",
        "texte": "Quand la créature reussit une attaque, tous les PJ à porter très courte perdent un Espoir et vous gagnez une Peur."
      },
      {
        "nom": "Pas issue",
        "tag": "passive",
        "texte": "Lorsqu'une créature échoue un jet  d'action alors qu'elle se trouve à très longue portée de l'Oracle, elle doit marquer un stress."
      },
      {
        "nom": "Annoncer le destin",
        "tag": "action",
        "texte": "Dépensez une peur pour présenter à une cible à distance une vision de son cauchemar personnel. La cible doit effectuer un jet de réaction de connaissance. En cas d'échec, ils perdent tout espoir et subissent 2d10+4 dégâts magiques directs. En cas de succès, ils subissent la moitié des dégâts et perdent un espoir."
      },
      {
        "nom": "Invoquer des tortionnaire",
        "tag": "action",
        "texte": "Une fois par jour, dépensez 2 Peur pour invoquer 2d4 sbire de niveau 2 ou inférieur pertinents pour l'un des cauchemars personnels du PJ. Ils apparaissent à courte portée par rapport à ce PJ."
      },
      {
        "nom": "Connaissances inquiétante",
        "tag": "réaction",
        "texte": "Lorsque l'Oracle voit une créature mortelle, ils connaissent instantanément l'un de leurs cauchemars personnels."
      },
      {
        "nom": "Destin vengeur",
        "tag": "réaction",
        "texte": "Lorsque l'Oracle marque PB à suite a une attaque à très courte portée, vous pouvez marquer un stress pour repouser l'attaquant à longue portée et infliger 2d10+4 dégâts physiques."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "predateur-obsidien-dragon-volcanique",
    "palier": 4,
    "type": "Solo",
    "categorie": "draconien",
    "nom": "Prédateur obsidien, dragon volcanique",
    "description": "Une énorme créature ailée avec des écailles d'obsidienne et des griffes incroyablement pointues.",
    "motivation": "Défendre un repaire, attaquer en piqué, voler, chasser, intimider",
    "difficulte": 19,
    "seuilMineur": 33,
    "seuilMajeur": 65,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 8,
    "attaqueStandard": "Griffes d'obsidienne : courte, 4d10+4 phy",
    "experience": "chasseur volant +5",
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 2 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Volant",
        "tag": "passive",
        "texte": "Tant qu'ils volent, la créature ont un bonus de +3 a leur Difficulte."
      },
      {
        "nom": "Ecailles d'obsidienne",
        "tag": "passive",
        "texte": "Résistant aux dommages physiques."
      },
      {
        "nom": "Queue d'obsidienne",
        "tag": "action",
        "texte": "Marquez un stress pour attaquer toutes les cibles à courte portée. Succès : 4d6+4 dégâts physiques, repouser a longue distance et vulnérable jusqu'au prochain jet avec Espoir."
      },
      {
        "nom": "Attaque en piquée",
        "tag": "action",
        "texte": "En cas de vol, marquez un Stress pour choisir un pointà longue portée, déplacez-vous là-bas, attaquez toutes les cibles à très courte portée ; en cas de succès, 2d10+6 physique, marquez un Stress, perdez un Espoir."
      },
      {
        "nom": "Eruption de rage (Changement de phase)",
        "tag": "réaction",
        "texte": "Lorsque marque le dernier PB, remplacez-le par Fléau en fusion et mettez-le immédiatement en avant."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "seigneur-de-la-guerre-briseur-de-royaume",
    "palier": 4,
    "type": "Solo",
    "categorie": "Déchu",
    "nom": "Seigneur de la guerre, briseur de royaume",
    "description": "Un Dieu Déchu empreint de rage et de ressentiment, avec des milliers d'année d'expérience à briser l'esprit de héros.",
    "motivation": "Briser les faibles, corrompre, dominer, punir",
    "difficulte": 20,
    "seuilMineur": 36,
    "seuilMajeur": 66,
    "blessure": 8,
    "stress": 5,
    "modAttaque": 7,
    "attaqueStandard": "Fouet barbelé : courte, 4d8+7 phy",
    "experience": "Conquête +3, Histoire +2, Intimidation +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 2 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Armure de plates de malveillance embrasée",
        "tag": "passive",
        "texte": "Lorsque le briseur de royaume subit des dégâts, réduisez-les de 2d10."
      },
      {
        "nom": "Fouet dévorante",
        "tag": "réaction",
        "texte": "Marquez un stress pour effectuer une attaque standard contre toutes les cibles à très courte portée. Lorsqu'une cible utilise sont armure pour réduire les dégâts causés par cette attaque, elle doit marquer 2 emplacements de blindage."
      },
      {
        "nom": "Rage dévorante",
        "tag": "réaction",
        "texte": "Compte à rebours (décroissant de 8). \nLorsque le brisseur de royaume est mis en avant pour la première fois, activez le compte à rebours. Lorsqu’il se déclenche, créez un torrent de rage incarnée qui déchire la chair des os. Toutes les cibles situées à longue portée doivent effectuer un jet en réaction de Présence. Les cibles qui échouent subissent 2d6+10 dégâts magiques directs. Les cibles qui réussissent subissent la moitié des dégâts. Pour chaque PB marqué à partir de ces dégâts, invoquez une troupe de choc à très courte portée de la cible qui a marqué ce PB. Si jamais le compte à rebours diminue sa valeur maximale à 0, le brisser de royaume marque ses PB restants et toutes les cibles à distance doivent marquer tous les PB restants et effectuer un mouvement de mort"
      },
      {
        "nom": "Porteur de mort",
        "tag": "réaction",
        "texte": "Lorsqu'une cible marque PB suite à une attaque du Briseur de royaume, tous les PJ situés à longue porté de la cible doivent perdre un espoir."
      },
      {
        "nom": "Jamais je n'ai connu la défaite (changement de phase)",
        "tag": "réaction",
        "texte": "Lorsque le briseur de royaume marque son dernier PB, remplacez-le par le Champion Invaincu et mettez-le immédiatement en avant."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "seigneur-de-la-guerre-champion-invaincu",
    "palier": 4,
    "type": "Solo",
    "categorie": "Déchu",
    "nom": "Seigneur de la guerre, champion invaincu",
    "description": "Celui que seul les plus craints ont une chance de craidre.",
    "motivation": "Apporter impitoyablement la mort, punir ceux qui le défient, vaincre à n'importe qu'elle prix",
    "difficulte": 18,
    "seuilMineur": 35,
    "seuilMajeur": 58,
    "blessure": 11,
    "stress": 5,
    "modAttaque": 8,
    "attaqueStandard": "Epée brisecoeur : très courte, 4d12+13 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 3 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Amure affaiblie",
        "tag": "passive",
        "texte": "Lorsque le Champion Invaincu subit des dégâts, réduisez-les de 1d10."
      },
      {
        "nom": "Frappe désespérante",
        "tag": "action",
        "texte": "Marquez un stress pour effectuer une attaque standard contre toutes les cibles à très courte portée. Les PJ contre lesquels le Champion réussit perdent un nombre d'Espoir égal au PB qu'ils ont marqué lors de cette attaque."
      },
      {
        "nom": "Légion infinies",
        "tag": "action",
        "texte": "Dépensez une peur pour invoquer un nombre de Soldat de choc égal à deux fois le nombre de PJ. Les troupes de choc apparaissent à  longue distance."
      },
      {
        "nom": "Cerclede profanation",
        "tag": "réaction",
        "texte": "Compte à rebours (1d8). \nLorsque le Champion Invaincu est mis en avant pour la première fois, activez le compte à rebours. Lorsqu'il se déclenche, activez un cercle magique couvrant une zone située à longue portée du Champion. Une cible dans cette zone est vulnérable jusqu’à ce qu’elle quitte le cercle. Le cercle peut être supprimé en infligeant de graves dégâts au champion invaincu."
      },
      {
        "nom": "Elan",
        "tag": "réaction",
        "texte": "Quand la créature reussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "serviteur-royaume-exterieurs",
    "palier": 4,
    "type": "Sbire",
    "categorie": "Royaume extérieurs",
    "nom": "Serviteur, royaume extérieurs",
    "description": "Une silhouette vaguement humanoïde, privée de mémoire et identité.",
    "motivation": "Dégoûter, désorienter, détruire, intimider",
    "difficulte": 17,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 3,
    "attaqueStandard": "Griffe et crocs : courte, 11 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (13)",
        "tag": "passive",
        "texte": "La créature est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 13 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 11 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "soldat-de-choc",
    "palier": 4,
    "type": "Sbire",
    "categorie": "Déchu",
    "nom": "Soldat de choc",
    "description": "Une âme maudite liée à la volonté des Déchu.",
    "motivation": "Broyer, dominer, obtenir la rédemption, punir",
    "difficulte": 18,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 2,
    "attaqueStandard": "Hache maudite : très courte, 12 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (12)",
        "tag": "passive",
        "texte": "La créature est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 12 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Aura funestre",
        "tag": "passive",
        "texte": "Lorsqu'un PJ marque PB suite à une attaque de la troupe de choc, il perd un espoir."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 12 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "soldat-sain",
    "palier": 4,
    "type": "Sbire",
    "categorie": "Divin",
    "nom": "Soldat sain",
    "description": "Ame de fidèles relevées et équipées d'un arsenal divin.",
    "motivation": "Déjouer les plans, obéir, punir, submerger",
    "difficulte": 18,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 2,
    "modAttaque": 2,
    "attaqueStandard": "Epée et bouclier : mêlée, 10 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (13)",
        "tag": "passive",
        "texte": "La créature est vaincu lorsqu'il subit des dégâts. Pour chaque tranche 13 dégâts, les PJ  élimine un sibre supplémentaire à portée."
      },
      {
        "nom": "Vol divin",
        "tag": "passive",
        "texte": "Pendant que le Soldat vole, dépensez une Peur pour vous déplacer à Longue portée au lieu de courte portée avant d'entreprendre une action."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Depensez une Peur pour choisir une cible et la mettre en avant toute les sbiresà courte portée. Ces Sbires se deplacent au Corps a corps de la cible et font un jet d'attaque partage. En cas de succes, ils infligent 10 degats physiques chacun. Combinez ces degats."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "tyran-cendreux-dragon-volcanique",
    "palier": 4,
    "type": "Solo",
    "categorie": "draconien",
    "nom": "Tyran cendreux, dragon volcanique",
    "description": "Aucun ennemi n'a jamais eu l'insolence de bleser ainsi ce dragon. Alors que la lave refroisit, il se change en cendres, comme ses précédents adversaires.",
    "motivation": "Etouffer, intimider, tuer ou être tué, voler",
    "difficulte": 18,
    "seuilMineur": 29,
    "seuilMajeur": 55,
    "blessure": 8,
    "stress": 5,
    "modAttaque": 10,
    "attaqueStandard": "Griffe et crocs : courte, 4d12+5 phy",
    "experience": "chasseur volant +5",
    "aptitudes": [
      {
        "nom": "Impitoyable (4)",
        "tag": "passive",
        "texte": "La Créature peut être mis en avant jusqu'à 4 fois par tour MJ. Vous devez Dépensez de la peur comme d’habitude pour les mise en avant."
      },
      {
        "nom": "Acculé",
        "tag": "passive",
        "texte": "Marquez un stress au lieu de dépenser une peur pour mettre en avant le tyran."
      },
      {
        "nom": "Ailes blessées",
        "tag": "passive",
        "texte": "Tant qu'ils volent, la créature ont un bonus de + a leur Difficulte."
      },
      {
        "nom": "Tu es poussière",
        "tag": "passive",
        "texte": "Lorsqu'un PJ rate un jet alors qu'il se trouve à courte portée du tyran , il perd un espoir et vous gagnez une peur. Si le PJ ne peut pas perdre un Espoir, il doit marquer un PB"
      },
      {
        "nom": "Assaut désespéré",
        "tag": "action",
        "texte": "Cocher un Stress pour lancer une attaque contre toutes les cibles à courte portée. Cibles que le tyran touche 2d20+2 les dégâts physiques, sont repouser à courte portée et doivent marquer un stress."
      },
      {
        "nom": "Nuage de cendre",
        "tag": "action",
        "texte": "Dépensez une peur pour frapper le sol et soulever un nuage de cendres à longue portée. Lorsqu'elle se trouve dans le nuage de cendres, une cible présente un déavantage sur les jet d'action. Le nuage de cendres se dissipe la prochaine fois qu’un adversaire est mis en avant."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "zombie-perfectionne",
    "palier": 4,
    "type": "Cogneur",
    "categorie": "Mort-vivant",
    "nom": "Zombie perfectionné",
    "description": "Un immense zombie musculeux à la force et aux talenrs renforcés par magie.",
    "motivation": "dévorer, estropier, pourchasser, terrifier",
    "difficulte": 20,
    "seuilMineur": 40,
    "seuilMajeur": 70,
    "blessure": 9,
    "stress": 4,
    "modAttaque": 4,
    "attaqueStandard": "Grand hache : Très courte, 4d12+15 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Terrifiant",
        "tag": "passive",
        "texte": "Quand la créature reussit une attaque, tous les PJ à porter très courte perdent un Espoir et vous gagnez une Peur."
      },
      {
        "nom": "Présence térrifiantte",
        "tag": "passive",
        "texte": "Les PJ ne peuvent pas dépenser espoir pour utiliser des aptitude contre le Zombie."
      },
      {
        "nom": "Frappe parfaite",
        "tag": "action",
        "texte": "Marquez un stress pour attaquer toutes les cibles à très courte portée ; en cas de succès, les cibles sont vulnérables jusqu'au prochain repos."
      },
      {
        "nom": "Opportuniste de talent",
        "tag": "réaction",
        "texte": "Lorsqu'un autre adversaire inflige des dégâts à une cible située à très courte portée du zombie, dépensez une Peur pour ajouter les dégâts d'attaque standard du zombie au jet de dégâts."
      }
    ]
  }
]
};
