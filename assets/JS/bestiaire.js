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
        "texte": "Lorsque les zombies marquent PB à partir d'une attaque à portée de mêlée, vous pouvez marquer un stress pour lancer une attaque standard contre l'attaquant."
      }
    ]
  },
  {
    "source": "Livre de règle (2026)",
    "id": "moustique-geant-5-pb",
    "palier": 1,
    "type": "Horde",
    "categorie": "Insecte",
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
    "categorie": "Insecte",
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
        "texte": "Apres une attaque reussie contre le Serpent au Corps a corps, l'attaquant doit cocher un emplacement d'Armure. S'il ne peut pas marquer d'emplacement d'Armure, il doit marquer un PB."
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
    "categorie": "Insecte",
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
    "categorie": "Draconien",
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
    "categorie": "Insecte",
    "nom": "Volcillant Juvénile",
    "description": "Un Insecte aux écaille iriesentes et aux ailes cristallines qui se déplace plus vite que l'oeil ne peut le suivre.",
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
    "categorie": "Draconien",
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
    "categorie": "Draconien",
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
    "categorie": "Insecte",
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
        "tag": "action",
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
    "categorie": "Draconien",
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
    "categorie": "Draconien",
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
    "categorie": "Draconien",
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
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "ikeri-les-blessures-indicibles",
    "palier": 1,
    "type": "Colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Ikéri, les blessures indicibles",
    "description": "Cette créature simiensque a une tête d'oisseau. Elle est faite de pierre el porte une gigantesque mesa sur son dos.",
    "motivation": "écraser, enchevétrer intimider, picorer\ntaille 30m de haut, 18m de large",
    "difficulte": null,
    "seuilMineur": 11,
    "seuilMajeur": 22,
    "blessure": null,
    "stress": 6,
    "modAttaque": null,
    "attaqueStandard": null,
    "experience": "Oeil de lynx +3, gigantesque +2",
    "aptitudes": [
      {
        "nom": "Puissance colossale",
        "tag": "réaction",
        "texte": "Lorsqu' kéri rate une attaque, vous gagnez une Peur"
      },
      {
        "nom": "Eliminer les insecte",
        "tag": "réaction",
        "texte": "Lorsqu'une cible volante attaque Ikéri à Longue portée, vous pouvez faire une attaque standard Picorer (Tête) ou Coup de poing (Bras) contre elle. Sur un succès, ajouter un 1d20 au jet de dégâts. De plus, la cible est jetée à terre aux pieds du colosse."
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "bars-d-ikeri-2",
    "palier": 1,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Bars d'Ikéri (2)",
    "description": "Voir page 319",
    "motivation": null,
    "difficulte": 13,
    "seuilMineur": 11,
    "seuilMajeur": 22,
    "blessure": 3,
    "stress": null,
    "modAttaque": 2,
    "attaqueStandard": "Coup de poing : très courte, 1d8+6 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Chaîne (A)",
        "tag": "passive",
        "texte": "Le colosse est vaincu lorsque tous les segment de la Chaîne A sont Détruits."
      },
      {
        "nom": "Boyer",
        "tag": "action",
        "texte": "Dépensez une Peur pour faire une attaque sur un autre segment d'ikéri. Sur un succès le colosse attrape sa cible et la broie, lui infligeant 1d20+4 dégâts physiques. Elle est Bloquée jusqu'à ce que le Bras subisse des dégâts Majeurs ou pire. Quand ce Bras est mis en avant alors qu'ikéri a toujours une cicle dans sa main, le malheureuse subit 1d20 dégâts physiques."
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "tete-d-ikeri",
    "palier": 1,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Tête d'Ikéri",
    "description": "Voir page 319",
    "motivation": null,
    "difficulte": 16,
    "seuilMineur": 11,
    "seuilMajeur": 22,
    "blessure": 5,
    "stress": null,
    "modAttaque": 2,
    "attaqueStandard": "Picorer : très courte, 1d10+1 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Fatal",
        "tag": "passive",
        "texte": "Le colosse est vaincu quand cette partie est Détruit"
      },
      {
        "nom": "Frappe (mêlée)",
        "tag": "passive",
        "texte": "La Tête est immunisée contre tous les dégâts issus d'attaques effectuées autrement qu'en Mêlée."
      },
      {
        "nom": "Enchaîner",
        "tag": "réaction",
        "texte": "Quand la Tête réussit une attaque contre une cible, elle peut immédiatement faire une attaque contre une autre cible qu'elle n'a pas encore attaquée pendant ce tour de MJ."
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "torse-d-ikeri",
    "palier": 1,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Torse d'Ikéri",
    "description": "Voir page 319",
    "motivation": null,
    "difficulte": 14,
    "seuilMineur": 11,
    "seuilMajeur": 22,
    "blessure": 8,
    "stress": null,
    "modAttaque": null,
    "attaqueStandard": null,
    "experience": null,
    "aptitudes": [
      {
        "nom": "Fatal",
        "tag": "passive",
        "texte": "Le colosse est vaincu quand cette partie est Détruit"
      },
      {
        "nom": "S'en débarraser",
        "tag": "action",
        "texte": "Dépensez une Peur pour faire tomber les adversaires présents sur ikeri. Toutes les créatures présentes sur lu doivent faire un jet de réaction de Force. Celles qui échouent tombent à terre et doivent cocher un PB. Les cibles qui réussissent doivent cocher un Stress."
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "jambe-d-ikeri-2",
    "palier": 1,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Jambe d'Ikéri (2)",
    "description": "Voir page 319",
    "motivation": null,
    "difficulte": 13,
    "seuilMineur": 11,
    "seuilMajeur": 22,
    "blessure": 3,
    "stress": null,
    "modAttaque": 2,
    "attaqueStandard": "Piétinement : très courte, 1d6+3 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Chaîne (A)",
        "tag": "passive",
        "texte": "Le colosse est vaincu lorsque tous les segment de la Chaîne A sont Détruits."
      },
      {
        "nom": "Piétinement massif",
        "tag": "action",
        "texte": "Dépensez une Peur pour faire une attaque standard avec un avantage contre un groupe"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "daktadae-le-tranchoir",
    "palier": 2,
    "type": "Colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Daktadae, le tranchor",
    "description": "Cet énorme rhinocéros d'acier est fait à partir d'un croir o vapeur et possède un gigantesque tronchoir sur la tête en guise de corne",
    "motivation": "couper, déforester, ecraser, trancher\n40m de haut, 70m de long",
    "difficulte": null,
    "seuilMineur": 16,
    "seuilMajeur": 25,
    "blessure": null,
    "stress": 6,
    "modAttaque": null,
    "attaqueStandard": null,
    "experience": "piétiner +2, gigantesque +2",
    "aptitudes": [
      {
        "nom": "A vapeur",
        "tag": "action",
        "texte": "Des jets de vapeur brûlante fusent du corps de Daktadae. Mettez un segment en avant pour effectuer une attaque avec un modificateur d'attaque de 1 contre une cible présente dessus. Sur un succès, vous infligez 206+3 dégâts physiques"
      },
      {
        "nom": "Roulade",
        "tag": "action",
        "texte": "Dépensez une Peur pour que Daktadae se laisse tomber au sol et se roule. Tous les Pj qui se trouvent sur lui ou à Courte portée doivent réussir un jet de réaction d'instinct (14) ou subir 2d20+5 dégâts physques. Qu'un Pj échoue ou réussisse, est éjecté de Daktadae et tombe à terre en Mélée avec le colosse."
      },
      {
        "nom": "Récupération lente",
        "tag": "action",
        "texte": "Retirez un jeton d'un segment Cassé ou Effondre"
      },
      {
        "nom": "Puissance colossale",
        "tag": "réaction",
        "texte": "Lorsque le colosse rate une attaque vous gagnez une Peur"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "tete-de-daktadae",
    "palier": 2,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Tête de Daktadae",
    "description": "Voir pages 322",
    "motivation": null,
    "difficulte": 15,
    "seuilMineur": 16,
    "seuilMajeur": 25,
    "blessure": 5,
    "stress": null,
    "modAttaque": 2,
    "attaqueStandard": "Tranchoir :  mêlée, 2d20+8 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Invulnérable",
        "tag": "passive",
        "texte": "La Tête subit des dégâts seulement quand elle est Cassée"
      },
      {
        "nom": "Tranchoir divin",
        "tag": "action",
        "texte": "Effectuez une attaque standard contre une cible. Sur un succès, cochez un Stress pour infliger 3d20+12 dégâts physiques à la place des dégâts standards"
      },
      {
        "nom": "Coup tête",
        "tag": "action",
        "texte": "Cochez un Stress et effectuez une attaque standard contre toutes les cibles à portée qui ne se trouvent ni sur ce segment ni sur le Torse. Sur un succes, posez deux jetons sur ce segment. Il est Cassé jusqu'à ce qu'il soit débarrassé de tous ses jetont"
      },
      {
        "nom": "Réparation du tranchoir",
        "tag": "réaction",
        "texte": "Après avoir fait une attaque stan card, posez un jeton sur ce segmentest Cassé jusqu'à ce qu'il soit débarraste de tous ses jetons"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "torse-de-daktadae",
    "palier": 2,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Torse de Daktadae",
    "description": "Voir pages 322",
    "motivation": null,
    "difficulte": 14,
    "seuilMineur": 16,
    "seuilMajeur": 25,
    "blessure": 6,
    "stress": null,
    "modAttaque": null,
    "attaqueStandard": null,
    "experience": null,
    "aptitudes": [
      {
        "nom": "Fatal",
        "tag": "passive",
        "texte": "Le colosse est vaincu quand cette partie est Détruit"
      },
      {
        "nom": "Escalade (+3)",
        "tag": "passive",
        "texte": "La Difficulté du Torse bénéficie d'un bonus de +3 contre les jets d'action visant à l'Escalader, à moins que la Tête ne soit Cassée"
      },
      {
        "nom": "Protégé",
        "tag": "passive",
        "texte": "Le Torse est couvert de côtes externes en minérau incassables. Il est impossible de faire des dégâts sur ce segment à moins que la Tête ne soit Cassée ou Détruite,"
      },
      {
        "nom": "Point faible",
        "tag": "passive",
        "texte": "La partie ventrale basse du Torse a un point faible. Quand ce segment coche un PB suite à une attaque en Mêlee alors que la tête est Cassée ou Détruite, il doit cocher un PB de plus"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "anterieur-de-daktadae-2",
    "palier": 2,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Antérieur de Daktadae (2)",
    "description": "Voir pages 323",
    "motivation": null,
    "difficulte": 14,
    "seuilMineur": 16,
    "seuilMajeur": 25,
    "blessure": 3,
    "stress": null,
    "modAttaque": 1,
    "attaqueStandard": "Piétinement : très courte, 2d20+8 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sabot massif",
        "tag": "passive",
        "texte": "L'attaque standard de ce segment se fait avec un avantage et peut cibler un groupe"
      },
      {
        "nom": "Faire trenbler la terre",
        "tag": "action",
        "texte": "Daktadae se cabre avant de retomber lourdement, créant une onde de choc qui projette à Courte portée tous les Pj qui ne sont pas sur son dos mais se trouvent à Très courte portée. Ils sont Secoués jusqu'à ce qu'ils réussissent un jet avec Espoir. Tant qu ils sont Secoués, ils ont un désavantage sur leurs jets de réaction."
      },
      {
        "nom": "Effrondrement",
        "tag": "réaction",
        "texte": "Si l'un des Antérieurs est Détruit, posez un jeton sur ce segment. Tant qu'il est là, Daktadae est Effondré, ce qui permet aux PJ de grimper directement sur son Torse et sa ête. Si les deux Antérieurs sont Détruits, Daktadae reste definitive-ment Effondré"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "posterieurs-de-daktadae",
    "palier": 2,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Postérieurs de Daktadae",
    "description": "Voir pages 323",
    "motivation": null,
    "difficulte": 14,
    "seuilMineur": 16,
    "seuilMajeur": 25,
    "blessure": 3,
    "stress": null,
    "modAttaque": 1,
    "attaqueStandard": "Piétinement : très courte, 2d20+8 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sabot massif",
        "tag": "passive",
        "texte": "L'attaque standard de ce segment se fait avec un avantage et peut cibler un groupe"
      },
      {
        "nom": "Ruade",
        "tag": "action",
        "texte": "Toutes les cibles à Très courte portée der rière Daktadae doivent réussir un jet de réaction d'Agilité ou subir 2d8+10 dégâts physiques."
      },
      {
        "nom": "Effondrement",
        "tag": "réaction",
        "texte": "Si l'un des Postérieurs est Détruit, posez un jeton sur ce segment. Tant qu'est là, Daktadae est Effondré, ce qui permet aux Pj de grimper directement sur son Torse et sa Tête Si les deux Postérieurs sont détruits, Daktadae reste définitivement Effondre"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "poy-lecumeur-celeste-de-la-mer-de-poussiere",
    "palier": 3,
    "type": "Colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Poy, lécumeur céleste de la mer de poussière",
    "description": "Ce gigantesque bec-en-sobat est fait de la poussière des Terrarides et piège ses ennemis dans son bec caverneux.",
    "motivation": "intimider, rassembler, tenir à distance70m de long, 50m d'envergure",
    "difficulte": null,
    "seuilMineur": 25,
    "seuilMajeur": 48,
    "blessure": null,
    "stress": 6,
    "modAttaque": null,
    "attaqueStandard": null,
    "experience": "Attaque d'en haut +3, Gigantesque +3, manoeuvre+3",
    "aptitudes": [
      {
        "nom": "Volant",
        "tag": "passive",
        "texte": "Poy peut voler tant que ses Ailes ne sont pas Détruites. Tant qu'il vole, la Difficulté de chacun de ses segments bénéficie d'un bonus de +2 contre les jets d'action des PJ qui ne se trouverent pas sur lui."
      },
      {
        "nom": "Vent violent",
        "tag": "passive",
        "texte": "Lorsque Poy vole, aucune créature volante ne peut approcher à Courte portée sans se faire repousser par ses puissantes ailes."
      },
      {
        "nom": "chute",
        "tag": "réaction",
        "texte": "Quand un Pj tombe de Poy alors que le colosse est en vol, il subit 3d20-6 dégâts physiques s'il heurte le sol."
      },
      {
        "nom": "Puissance colossale",
        "tag": "réaction",
        "texte": "Lorsque le colosse rate une attaque vous gagnez une Peur"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "tete-de-poy",
    "palier": 3,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Tête de Poy",
    "description": "Voir pages 324",
    "motivation": null,
    "difficulte": 16,
    "seuilMineur": 25,
    "seuilMajeur": 48,
    "blessure": 5,
    "stress": null,
    "modAttaque": 3,
    "attaqueStandard": "Hurlement :  très longue, 3d8+2 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "bec-piège",
        "tag": "action",
        "texte": "Dépensez une Peur pour faire une attaque contre une cible de Poy. Sur un succès, elle subit 3d6+6 dégâts physiques et elle se retrouve Piégée dans le bec de Poy jusqu'à ce que sa Tête subisse des dégâts Majeurs ou pire. Les seuils du dégâts de Poy sont doublés contre les dégâts venant de cibles Piégées."
      },
      {
        "nom": "Cascade",
        "tag": "réaction",
        "texte": "Lorsque ce segment est Détruit, le Cou doit cocher 3 PB"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "cou-de-poy",
    "palier": 3,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Cou de Poy",
    "description": "Voir pages 324",
    "motivation": null,
    "difficulte": 13,
    "seuilMineur": 25,
    "seuilMajeur": 48,
    "blessure": 6,
    "stress": null,
    "modAttaque": null,
    "attaqueStandard": null,
    "experience": null,
    "aptitudes": [
      {
        "nom": "Fatal",
        "tag": "passive",
        "texte": "Le colosse est vaincu quand cette partie est Détruit"
      },
      {
        "nom": "Protégé",
        "tag": "passive",
        "texte": "Le Cou de Poy est protégé par une magie ondoyante. Le Cou ne coche que les PB découlant de l'Aptitude \"Cascade\""
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "ailes-de-de-poy-2",
    "palier": 3,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Ailes de  de Poy (2)",
    "description": "Voir pages 325",
    "motivation": null,
    "difficulte": 16,
    "seuilMineur": 25,
    "seuilMajeur": 48,
    "blessure": 5,
    "stress": null,
    "modAttaque": 2,
    "attaqueStandard": "Battement : Mêlée,3d12+9 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Tempête de poussière",
        "tag": "passive",
        "texte": "Poy bat des ailes pour remplir l'air de poussière et réduire la visibilité. Les attaques des Pj à une portée supérieure à Mélée subissent un désavantage jusqu'su prochain tour du MJ."
      },
      {
        "nom": "Battement d'ailes",
        "tag": "action",
        "texte": "Poy donne un violent coup avec ses Aile. Cochez un Stress pour faire une attaque contre toutes les cibles présentes sur l'Aile. Celles qu'il touche subissent 3d8+4 cégâts physiques et sont repoussées sur la Queue. Si la Queue est Détruite, elles tombent de Poy"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "corps-de-poy",
    "palier": 3,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Corps de Poy",
    "description": "Voir pages 325",
    "motivation": null,
    "difficulte": 15,
    "seuilMineur": 25,
    "seuilMajeur": 48,
    "blessure": null,
    "stress": null,
    "modAttaque": null,
    "attaqueStandard": null,
    "experience": null,
    "aptitudes": [
      {
        "nom": "Invulnérable",
        "tag": "passive",
        "texte": "Le segment est immunisé contre les dégâts."
      },
      {
        "nom": "Bonbardement en piqué",
        "tag": "réaction",
        "texte": "Quand une créature réussit une attaque contre ce segment, Poys attaque en piqué, ainsi que toutes les cibles à Très courte portée par rapport à elle. Les cibles doivent faire un jet de réaction d'Instinct. Celles qui échouent subissent 2d6+9 dégâts physiques. Celles qui réussissent peuvent coche un Stress pour grimper sur l'une des serres de Poy"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "queue-de-poy",
    "palier": 3,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Queue de Poy",
    "description": "Voir pages 325",
    "motivation": null,
    "difficulte": 15,
    "seuilMineur": 25,
    "seuilMajeur": 48,
    "blessure": 3,
    "stress": null,
    "modAttaque": 1,
    "attaqueStandard": "Fouet : très courte, 3d12+12 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Balayage",
        "tag": "action",
        "texte": "Poy recourbe sa queue et s'en sert pour balayer un autre segment. Dépensez une Peur pour choisir un autre segment et faire ure attaque contre toutes les cibles présentes dessus. Celles que Poy touche subissent 3d8+5 dégâts physiques et sont repoussées sur un segment adjacent de votre choix."
      },
      {
        "nom": "Cascade",
        "tag": "réaction",
        "texte": "Lorsque ce segment est Détruit, le Cou doit cocher 2 PB"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "serres-de-poy-2",
    "palier": 3,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Serres de Poy (2",
    "description": "Voir pages 325",
    "motivation": null,
    "difficulte": 14,
    "seuilMineur": 25,
    "seuilMajeur": 48,
    "blessure": 5,
    "stress": null,
    "modAttaque": 2,
    "attaqueStandard": "coup de serres : mêlée, 3d10+5 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Emporter",
        "tag": "action",
        "texte": "Dépensez une Peur pour faire une attaque contre une cible en Mélée. S'il y a une autre cible à Très courte portée de la première, vous pouvez mettre les deux Serres en avant en même temps et faire une attaque contre les ceux cibles à la place. Sur un succes, Poy attrape ses cibles, s'envole avec et les lâche. Une cible qui heurte le sol subit 5d20+4 dégâts physiques."
      },
      {
        "nom": "Cascade",
        "tag": "réaction",
        "texte": "Lorsque ce segment est Détruit, le Cou doit cocher 1 PB"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "kelir-la-haine-virulente-et-ses-centaines-d-enfant",
    "palier": 4,
    "type": "Colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Kélir, la haine virulente et ses centaines d'enfant",
    "description": "Une bête aur allures de crabe aussi grande qu'une montagne, dont les enfants courent en tous sens et lui apportent de la nourriture en guise de tribut",
    "motivation": "Dévorer, grouillet, ravager\n85m de haut, 45m de large",
    "difficulte": null,
    "seuilMineur": 30,
    "seuilMajeur": 65,
    "blessure": 6,
    "stress": null,
    "modAttaque": null,
    "attaqueStandard": null,
    "experience": "Mépris +2, giganstesque +4, perception du mouvement +4",
    "aptitudes": [
      {
        "nom": "Attaque de couvée",
        "tag": "action",
        "texte": "Mettez en avant n'importe quel segment pour faire une attaque avec un modificateur d'attaque de +6 contre un Pj présent sur ce segment alors que les centaines de centaines d'enfants de Kélir le submergent sous leurs pinces Sur un succès, vous infligez 4d8 dégâts physiques"
      },
      {
        "nom": "Eliminer les insecte",
        "tag": "réaction",
        "texte": "Lorsqu'une cible volante attaque Kélir à Longue portée, vous pouvez faire une attaque standard pince (griffe) ou Coup de poing (Bras) contre elle. Sur un succès, ajouter un d20 au jet de dégâts. De plus, la cible est jetée à terre aux pieds du colosse."
      },
      {
        "nom": "Puissance colossale",
        "tag": "réaction",
        "texte": "Lorsque le colosse rate une attaque vous gagnez une Peur"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "cavite-corporelle-de-kelir",
    "palier": 4,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Cavité corporelle de Kélir",
    "description": "Voir pages 326",
    "motivation": null,
    "difficulte": 17,
    "seuilMineur": 30,
    "seuilMajeur": 65,
    "blessure": 6,
    "stress": null,
    "modAttaque": null,
    "attaqueStandard": null,
    "experience": null,
    "aptitudes": [
      {
        "nom": "Fatal",
        "tag": "passive",
        "texte": "Le colosse est vaincu quand cette partie est Détruit"
      },
      {
        "nom": "coeur haineux",
        "tag": "passive",
        "texte": "Le cœur de Kélir est suspendu dans sa Cavite corporelle, où il est relié à des artères et des veines épaisses. La Cavité corporelle est immunisée contre les dégâts, à moins que cœur ne soit la cible d'une attaque réussie. Pour attaquer le cœur, faut impérativement se trouver à Longue portée ou plus, mais un PJ situé à l'intérieur de la Cavité corporelle peut l'attaquer en Mélée si il réussit un jet d'Agilite."
      },
      {
        "nom": "Attraper et déchiqueter",
        "tag": "action",
        "texte": "Effectuez une attaque avec l'action Attaque de couvée de Kelir contre une cible présente dans la Cavité corporelle, Sur un succès, dépensez une Peur pour doubler les dégâts infigés et Bloquer la cible jusqu'à ce qu'elle se libère ave un jet de Force."
      },
      {
        "nom": "Nuée protectrice",
        "tag": "réaction",
        "texte": "Les rejetons de Kélir grouillent dans sa Cavite corporelle et protègent son coeur. Un Pj qui effectue un jet d'action dans la Cavité corporelle doit cocher un Stress tandis qu'il repcusse les petits du colosse et leurs pinces acérées"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "carapace-corporelle-de-kelir",
    "palier": 4,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Carapace corporelle de Kélir",
    "description": "Voir pages 327",
    "motivation": null,
    "difficulte": 16,
    "seuilMineur": 30,
    "seuilMajeur": 65,
    "blessure": 6,
    "stress": null,
    "modAttaque": null,
    "attaqueStandard": null,
    "experience": null,
    "aptitudes": [
      {
        "nom": "Caparaçonné",
        "tag": "passive",
        "texte": "Lorsque la Carapace coche des PB suite à une attaque, elle en coche un de mains."
      },
      {
        "nom": "Furie contagieuse",
        "tag": "action",
        "texte": "Tous les Pj situés devant la Tête et à Longue portée remplacent leur dé d'Espoir par un de lors de leur prochain jet d'action tandis qu'ils s'efforcent de résister à la haine de Kelir qui tente de les consumer."
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "pattes-de-kelir-4",
    "palier": 4,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Pattes de Kélir (4)",
    "description": "Voir pages 327",
    "motivation": null,
    "difficulte": 15,
    "seuilMineur": 30,
    "seuilMajeur": 65,
    "blessure": 3,
    "stress": null,
    "modAttaque": 4,
    "attaqueStandard": "piétiner : très courte, 4d10+6 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Escalade (-2)",
        "tag": "passive",
        "texte": "Tout jet d'action visant à grimper sur une patte subit un malus de -2 à la Difficulté"
      },
      {
        "nom": "Cavalcade destructrice",
        "tag": "action",
        "texte": "Cocher un Stress pour avancer cans n'importe quelle direction jusqu'à Longue portée. Toutes les créatures sur le chemin doivent faire un jet de réaction d'Aglité. Celles qui échouent subissent 4d10+6 deglits physiques et doivent cacher un Stress. Celles qui réussissent doivent seulement cacher un Stress. Kellir ne peut pas utiliser cette action si elle est Effondrée"
      },
      {
        "nom": "effrondrement complet",
        "tag": "réaction",
        "texte": "Une fois que Kélir a trois Pattes de Détruites, elle S'effondre et les P) peuvent grimper sur la Carapace et la Tête depuis le sol."
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "pince-de-kelir-2",
    "palier": 4,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "pince de Kélir (2)",
    "description": "Voir pages 327",
    "motivation": null,
    "difficulte": 15,
    "seuilMineur": 30,
    "seuilMajeur": 65,
    "blessure": 5,
    "stress": null,
    "modAttaque": 5,
    "attaqueStandard": "Pinces : très courte, 3d20+8 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Frappe (très courte)",
        "tag": "passive",
        "texte": "Les Pinces sont immunisées contre les attaques effectuées autrement qu'à Très courte portée"
      },
      {
        "nom": "Briser l'espoir",
        "tag": "action",
        "texte": "Effectuez une attaque standard contre un Pj Sur un succès, cochez un Stress pour lui faire perdre 1d4 Espoirs Gagnez autant de Peurs que d'Espoirs perdus"
      },
      {
        "nom": "Attraper et lancer",
        "tag": "action",
        "texte": "Effectuez une attaque standard contre une cible Sur un succes, lancer-la à Longue portée dans n'importa quelle direction au lieu de lui infiger des dégâts. Elle doit réussir un jet de réaction d'Agilité, sinon elle subit 3d20 dégâts physiques à cause de la chute"
      }
    ]
  },
  {
    "source": "Livre de règle (2026, Les colosses des Terrarides)",
    "id": "tete-de-kelir",
    "palier": 4,
    "type": "Segment de colosse",
    "categorie": "Les colosses des terrarides",
    "nom": "Tête de Kélir",
    "description": "Voir pages 327",
    "motivation": null,
    "difficulte": 18,
    "seuilMineur": 30,
    "seuilMajeur": 65,
    "blessure": 4,
    "stress": null,
    "modAttaque": 4,
    "attaqueStandard": "Rayon oculaire : courte, 4d6+6 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Frappe (très courte)",
        "tag": "passive",
        "texte": "La Tête est immunisée contre les attaques effectuées autrement qu'à Très courte portée"
      },
      {
        "nom": "Regard haineaux",
        "tag": "action",
        "texte": "Toutes les cibles que Kelir voit et qui se trouvent à Longue portée doivent réussir un jet de réaction de Présence ou cocher 1d6 Stress tandis que la haine de Kélir tente de dévorer leur espit"
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "ahuizotl",
    "palier": 1,
    "type": "Traqueur",
    "categorie": "Bête",
    "nom": "Ahuizotl",
    "description": "Un prédateur d'embuscade canin, doté d'une main griffue au bout d'une longue queue préhensile, qui traîne ses victimes dans les rivières pour les noyer.",
    "motivation": "Tendre une embuscade, noyer, entraver",
    "difficulte": 12,
    "seuilMineur": 5,
    "seuilMajeur": 9,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Morsure : mêlée, 1d6+2 phy",
    "experience": "Discrétion +2, Natation +2",
    "aptitudes": [
      {
        "nom": "Attaquant aquatique",
        "tag": "passive",
        "texte": "Quand l'Ahuizotl attaque depuis l'eau, il a l'avantage sur l'attaque et inflige 1d6 dégâts supplémentaires."
      },
      {
        "nom": "Coup de queue",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre une cible à très courte portée. En cas de succès, infligez 1d8+2 dégâts physiques."
      },
      {
        "nom": "Attraper et traîner",
        "tag": "action",
        "texte": "Dépensez une Peur pour que l'Ahuizotl saisisse avec sa queue une cible à courte portée, la tire au Corps à corps et l'Entrave temporairement. L'Ahuizotl a l'avantage sur les attaques contre les cibles ainsi Bloquées."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "armure-ensorcelee",
    "palier": 1,
    "type": "Cogneur",
    "categorie": "Artificielle",
    "nom": "Armure ensorcelée",
    "description": "Une armure complète de plates, vide, qui brille d'une faible corona de lumière fantomatique.",
    "motivation": "Cliquetie bruyamment, se mouvoir comme un mécanisme, observer en silence",
    "difficulte": 10,
    "seuilMineur": 9,
    "seuilMajeur": 17,
    "blessure": 6,
    "stress": 0,
    "modAttaque": 0,
    "attaqueStandard": "Zweihänder : très courte, 1d10+1 phy",
    "experience": "Gardien +2",
    "aptitudes": [
      {
        "nom": "Infatigable",
        "tag": "passive",
        "texte": "L'Armure ne peut pas être forcée à marquer du Stress. Quand un effet la ferait marquer du Stress, l'Armure ignore cette partie de l'effet."
      },
      {
        "nom": "Cliquetis et réassemblage",
        "tag": "réaction",
        "texte": "Une fois par scène, quand l'Armure est vaincue, vous pouvez dépenser une Peur pour la réactiver. Effacez 2 PB et mettez-la immédiatement en avant."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "atototl",
    "palier": 1,
    "type": "Standard",
    "categorie": "Bête",
    "nom": "Atototl",
    "description": "Un majestueux oiseau vert d’eau, d'une envergure de trois mètres, chassé pour la pierre divinatoire qu'il porte dans l'estomac.",
    "motivation": "Éviter, fuir, détourner l'attention",
    "difficulte": 12,
    "seuilMineur": 8,
    "seuilMajeur": 12,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Serres : mêlée, 1d8+1 phy",
    "experience": "Vol +3, Jungles +3",
    "aptitudes": [
      {
        "nom": "Seigneur du vent",
        "tag": "passive",
        "texte": "Tant que l'Atototl vole, les attaques contre lui sont faites avec désavantage."
      },
      {
        "nom": "Pierre des présages",
        "tag": "passive",
        "texte": "L'Atototl porte une pierre qui présage la bonne ou la mauvaise fortune selon sa couleur. Un PJ qui fouille la dépouille de l'Atototl trouve la pierre et fait un jet de destin. Sur un résultat pair, le PJ gagne de l'Espoir égal à la moitié du résultat, qu'il peut répartir entre les PJ comme il le souhaite. Sur un résultat impair, vous gagnez de la Peur égale à la moitié du résultat."
      },
      {
        "nom": "Fléau des archers",
        "tag": "réaction",
        "texte": "Quand une créature au-delà de très courte portée s'apprête à infliger des dégâts à l'Atototl avec une attaque d'arme, vous pouvez dépenser une Peur pour faire un jet d'attaque contre elle. En cas de succès, des vents tourbillonnants réfléchissent l'attaque et renvoient à l'attaquant les dégâts qu'il a infligés."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "bande-de-gremlins-4-pb",
    "palier": 1,
    "type": "Horde",
    "categorie": "Fée",
    "nom": "Bande de Gremlins (4/PB)",
    "description": "Un groupe de petites créatures étranges vêtues d'armures fabriquées avec des déchets et des ustensiles ménagers volés.",
    "motivation": "Tendre une embuscade, célébrer un peu trop tôt, frapper et fuir, se battre entre eux, saboter, semer le chaos",
    "difficulte": 12,
    "seuilMineur": 5,
    "seuilMajeur": 11,
    "blessure": 3,
    "stress": 2,
    "modAttaque": 1,
    "attaqueStandard": "Ciseaux de tailleur : mêlée, 1d8+2 phy",
    "experience": "Pièges +3",
    "aptitudes": [
      {
        "nom": "Horde (1d4+1)",
        "tag": "passive",
        "texte": "Quand la Bande a marqué la moitié ou plus de ses PB, son attaque standard inflige 1d4+1 dégâts physiques à la place."
      },
      {
        "nom": "Lâche",
        "tag": "réaction",
        "texte": "Quand la Bande marque son dernier Stress ou qu'un Meneur allié est vaincu, lancez un d6. Sur un résultat de 2 ou moins, la Bande fuit la scène."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "mordeur-des-profondeurs",
    "palier": 1,
    "type": "Standard",
    "categorie": "Aquatique",
    "nom": "Mordeur des profondeurs",
    "description": "Une créature-poisson trapue aux rangées de dents tranchantes comme des rasoirs.",
    "motivation": "Grimper sur la berge, frapper et fuir, guetter au-dessus de la ligne d'eau",
    "difficulte": 12,
    "seuilMineur": 5,
    "seuilMajeur": 10,
    "blessure": 4,
    "stress": 2,
    "modAttaque": 1,
    "attaqueStandard": "Armement détrempé : courte, 1d8+1 phy",
    "experience": "Aquatique +2",
    "aptitudes": [
      {
        "nom": "Ka-Croc",
        "tag": "action",
        "texte": "Marquez un Stress pour attaquer une cible au Corps à corps. En cas de succès, la cible subit 1d12 dégâts physiques et doit marquer un emplacement d'Armure sans en recevoir le bénéfice (elle peut tout de même utiliser son armure pour réduire les dégâts)."
      },
      {
        "nom": "Frénésie alimentaire",
        "tag": "réaction",
        "texte": "Quand une créature marque des PB, vous pouvez dépenser une Peur pour mettre en avant toutes les Bêtes-branchies dentées à très courte portée de celle-ci. Ces Bêtes-branchies se déplacent au Corps à corps de la créature et font chacune une attaque standard contre elle. Si des attaques réussissent, additionnez leurs dégâts."
      },
      {
        "nom": "Écailleux",
        "tag": "réaction",
        "texte": "Quand la Bête-branchie devrait marquer un nombre quelconque de PB, lancez un d6. Sur un résultat de 6, vous pouvez marquer un Stress à la place."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "boucher-bonnet-rouge",
    "palier": 1,
    "type": "Standard",
    "categorie": "Bonnet-rouge",
    "nom": "Boucher bonnet-rouge",
    "description": "Une créature féerique de la taille d'un halfelin qui dépèce ses victimes avec divers instruments tranchants. Elle porte un bonnet rouge conique scellé sur la tête avec de la cire de bougie.",
    "motivation": "Sourire de façon dérangeante, taillader, se précipiter",
    "difficulte": 12,
    "seuilMineur": 5,
    "seuilMajeur": 10,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Couperet : mêlée, 1d8+1 phy",
    "experience": "Détaler +2",
    "aptitudes": [
      {
        "nom": "Frénésie de hachage",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque standard contre jusqu'à trois cibles. Pour chaque cible qui marque des PB, vous gagnez une Peur."
      },
      {
        "nom": "Lanceur de couteaux",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque standard contre une cible à longue portée. Si le Boucher est Caché, il fait l'attaque avec avantage."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "briseur-bonnet-rouge",
    "palier": 1,
    "type": "Cogneur",
    "categorie": "Bonnet-rouge",
    "nom": "Briseur bonnet-rouge",
    "description": "Une grande créature féerique brutale, coiffée d'un bonnet rouge conique scellé sur la tête avec de la cire de bougie.",
    "motivation": "Se frapper la poitrine et beugler, malmener les faibles ennemis, charger avec témérité",
    "difficulte": 13,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 6,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Maillet en bois : mêlée, 1d12+2 phy",
    "experience": "Os +2",
    "aptitudes": [
      {
        "nom": "Brise-échine",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre une cible au Corps à corps. En cas de succès, infligez 3d4+10 dégâts physiques. Une cible qui marque des PB à cause de cette attaque est Bloquée jusqu'à ce qu'elle efface un PB."
      },
      {
        "nom": "Casse-genoux",
        "tag": "réaction",
        "texte": "Quand le Briseur réussit une attaque standard, vous pouvez dépenser une Peur pour rendre la cible temporairement Vulnérable."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "gobelour",
    "palier": 1,
    "type": "Cogneur",
    "categorie": "Guerrier",
    "nom": "Gobelour",
    "description": "Une grande créature bipède au museau garni de défenses et au pelage rêche.",
    "motivation": "Tendre une embuscade, brutaliser, rechercher le carnage et les objets brillants",
    "difficulte": 13,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Masse hérissée : très courte, 1d8+6 phy",
    "experience": "Pièges +3",
    "aptitudes": [
      {
        "nom": "Surprise !",
        "tag": "passive",
        "texte": "Si le Bugboar fait sa première attaque d'une scène avant d'avoir marqué des PB ou du Stress, il a l'avantage sur l'attaque et inflige 1d8 dégâts supplémentaires."
      },
      {
        "nom": "Brutal",
        "tag": "réaction",
        "texte": "Quand le Bugboar réussit une attaque standard, vous pouvez marquer un Stress pour infliger 1d6 dégâts supplémentaires."
      },
      {
        "nom": "Cœur de guerrier",
        "tag": "réaction",
        "texte": "Quand une condition serait imposée au Bugboar, vous pouvez dépenser une Peur pour l'annuler."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "chandelier-bonnet-rouge",
    "palier": 1,
    "type": "Meneur",
    "categorie": "Bonnet-rouge",
    "nom": "Chandelier bonnet-rouge",
    "description": "Un chef de secte pâle et décharné coiffé d'un bonnet rouge conique scellé sur la tête avec de la cire de bougie. Il brandit une longue perche surmontée d'une chandelle faite de la main d'un criminel pendu.",
    "motivation": "Projeter de longues ombres, rester hors de la mêlée, leur montrer la lumière",
    "difficulte": 13,
    "seuilMineur": 7,
    "seuilMajeur": 13,
    "blessure": 6,
    "stress": 3,
    "modAttaque": 3,
    "attaqueStandard": "Chandelier ardent : très courte, 1d10+2 mag",
    "experience": "Vigilance +3",
    "aptitudes": [
      {
        "nom": "Main de gloire",
        "tag": "passive",
        "texte": "Quand le Chandelier apparaît, placez 5 jetons sur ce bloc de stats. Retirez un jeton chaque fois que le Chandelier marque un PB. Tant que ce bloc de stats a 1 jeton ou plus, le Chandelier est Caché."
      },
      {
        "nom": "Porteur de flambeau",
        "tag": "passive",
        "texte": "La lumière de la Main de gloire du Chandelier inspire la soif de sang chez ses alliés. Tant que ce bloc de stats a 1 jeton ou plus, chaque adversaire bonnet-rouge à courte portée gagne un bonus de +1 à ses jets de dégâts."
      },
      {
        "nom": "Danse dans les flammes",
        "tag": "action",
        "texte": "Dépensez un jeton de ce bloc de stats. Le Chandelier fait surgir une boule de feu sur un groupe de PJ à longue portée. Chaque cible doit faire un jet de réaction d'Agilité. Celles qui échouent subissent 2d10 dégâts magiques. Celles qui réussissent subissent la moitié des dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "creation-de-cire",
    "palier": 1,
    "type": "Solo",
    "categorie": "Bonnet-rouge",
    "nom": "Création de cire",
    "description": "Un construct de cire de bougie semi-solide (et semi-conscient) haut de trois mètres.",
    "motivation": "Avancer d'un pas lourd et menaçant, gémir de la douleur d'une non-vie, étouffer",
    "difficulte": 13,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 10,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Poings : très courte, 1d20 phy",
    "experience": "Gigantesque +2",
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "La Création peut être mise en avant jusqu'à deux fois par tour du MJ. Dépensez de la Peur comme d'habitude pour la mettre en avant."
      },
      {
        "nom": "Sans organes vitaux",
        "tag": "passive",
        "texte": "La Création ne subit pas de dégâts supplémentaires des attaques qui réussissent de manière critique contre elle."
      },
      {
        "nom": "Boule de cire",
        "tag": "action",
        "texte": "Marquez un Stress pour que la Création lance une boule de cire sur une cible à longue portée. Faites une attaque contre la cible. En cas de succès, la cible subit 1d12+2 dégâts physiques et devient Bloquée jusqu'à ce qu'elle réussisse un jet de Force (15)."
      },
      {
        "nom": "Splotch !",
        "tag": "réaction",
        "texte": "Quand un PJ au Corps à corps de la Création fait une attaque d'arme contre elle, lancez un d6. Sur un 5 ou plus, l'arme de l'attaquant reste coincée dans la Création et ne peut être retirée qu'avec un jet de Force (15) réussi."
      },
      {
        "nom": "Étreinte étouffante",
        "tag": "réaction",
        "texte": "Quand la Création réussit une attaque standard contre une cible au Corps à corps, vous pouvez dépenser une Peur pour Piéger la cible à l'intérieur de son corps de cire. Tant qu'elle est Piégée, la cible est Bloquée, doit marquer un Stress et se déplacer avec la Création chaque fois que celle-ci est mise en avant. Une créature Piégée est libérée quand la Création subit des dégâts Majeurs ou supérieurs."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "ecorcheur-bonnet-rouge",
    "palier": 1,
    "type": "Sbire",
    "categorie": "Bonnet-rouge",
    "nom": "Écorcheur bonnet-rouge",
    "description": "Une créature féerique de la taille d'un chat, armée d'un rasoir droit et coiffée d'un bonnet rouge conique scellé sur la tête avec de la cire de bougie.",
    "motivation": "Dépecer, ricaner, racler, trancher",
    "difficulte": 9,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": -1,
    "attaqueStandard": "Rasoir : mêlée, 2 phy",
    "experience": "Travail du cuir +3",
    "aptitudes": [
      {
        "nom": "Sbire (4)",
        "tag": "passive",
        "texte": "L'Écorcheur est vaincu dès qu'il subit des dégâts. Pour chaque tranche de 4 dégâts qu'un PJ inflige à l'Écorcheur, il vainc un Sbire supplémentaire à portée contre lequel l'attaque aurait réussi."
      },
      {
        "nom": "Entailles superficielles",
        "tag": "passive",
        "texte": "Quand un PJ échoue à un jet, il subit 1 dégât physique pour chaque Écorcheur à son Corps à corps. Additionnez ces dégâts."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir une cible et mettre en avant tous les Écorcheurs bonnets-rouges à courte portée de celle-ci. Ces Sbires se déplacent au Corps à corps de la cible et font un seul jet d'attaque partagé. En cas de succès, ils infligent chacun 2 dégâts physiques. Additionnez ces dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "fantome",
    "palier": 1,
    "type": "Standard",
    "categorie": "Esprit",
    "nom": "Fantôme",
    "description": "L'écho d'une âme perdue sous la forme d'une ombre ectoplasmique.",
    "motivation": "Créer des zones froides, planer dans les airs, chuchoter de sombres présages",
    "difficulte": 11,
    "seuilMineur": 5,
    "seuilMajeur": null,
    "blessure": 2,
    "stress": 1,
    "modAttaque": -1,
    "attaqueStandard": "Toucher glacial : mêlée, 1d6+2 mag",
    "experience": "Effrayant +3",
    "aptitudes": [
      {
        "nom": "Immatériel",
        "tag": "passive",
        "texte": "Le Fantôme a une résistance aux dégâts physiques et peut traverser les objets solides."
      },
      {
        "nom": "Aura de peur",
        "tag": "passive",
        "texte": "Un PJ qui prend la mise en avant à très courte portée du Fantôme doit réussir un jet de réaction de Présence (10) ou marquer un Stress."
      },
      {
        "nom": "Hantise persistante",
        "tag": "réaction",
        "texte": "Compte à rebours (1d6). Quand le Fantôme est vaincu, vous pouvez dépenser une Peur pour activer le compte à rebours. Il avance quand un PJ fait un jet avec Peur. Quand il arrive à terme, effacez les PB du Fantôme et mettez-le immédiatement en avant."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "faucon",
    "palier": 1,
    "type": "Traqueur",
    "categorie": "Bête",
    "nom": "Faucon",
    "description": "Un oiseau de proie aux longues ailes pointues et au bec crochu.",
    "motivation": "Tournoyer, saisir, plonger, épier",
    "difficulte": 12,
    "seuilMineur": 5,
    "seuilMajeur": 8,
    "blessure": 3,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Serres : mêlée, 1d6+1 phy",
    "experience": "Sens aiguisés +4, Vol +3",
    "aptitudes": [
      {
        "nom": "Voltigeur agile",
        "tag": "passive",
        "texte": "En vol, le Faucon gagne un bonus de +3 à sa Difficulté."
      },
      {
        "nom": "Piqué",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque standard contre une cible depuis les airs. Le Faucon gagne un bonus de +2 aux jets d'attaque et de dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "feux-follets-8-pb",
    "palier": 1,
    "type": "Horde",
    "categorie": "Esprit",
    "nom": "Feux follets (8/PB)",
    "description": "Des orbes de lumière changeante flottant paresseusement.",
    "motivation": "Éblouir et distraire, désorienter, égarer",
    "difficulte": 9,
    "seuilMineur": 5,
    "seuilMajeur": 9,
    "blessure": 4,
    "stress": 2,
    "modAttaque": -3,
    "attaqueStandard": "Éclair : courte, 1d4+2 mag",
    "experience": "Obscurité +3",
    "aptitudes": [
      {
        "nom": "Horde (1d4-1)",
        "tag": "passive",
        "texte": "Quand les Feux follets ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige 1d4-1 dégâts magiques à la place."
      },
      {
        "nom": "Kaléidoscopiques",
        "tag": "passive",
        "texte": "Les Feux follets pulsent et dansent en motifs hypnotiques aux couleurs changeantes qui fascinent toute créature qui les regarde. Toutes les cibles à très courte portée des Feux follets sont Vulnérables."
      },
      {
        "nom": "Fascinants",
        "tag": "action",
        "texte": "Dépensez une Peur pour que les Feux follets tracent des traînées lumineuses sinueuses dans l'air, laissant des images rémanentes qui supplient d'être déchiffrées. Chaque PJ à longue portée doit réussir un jet de réaction d'Instinct (13) ou marquer un Stress et se déplacer jusqu'à courte portée vers les Feux follets."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "tisseuse-de-sombretoile",
    "palier": 1,
    "type": "Standard",
    "categorie": "Sombretoile",
    "nom": "Tisseuse de Sombretoile",
    "description": "Un arachnide de la taille d'un sanglier, tissé de soie d'ombre primordiale.",
    "motivation": "Mordre, rester dans l'obscurité",
    "difficulte": 12,
    "seuilMineur": 6,
    "seuilMajeur": 9,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Crocs : mêlée, 1d8+1 phy",
    "experience": "Trous +2, Toiles +2",
    "aptitudes": [
      {
        "nom": "Emmailloter de soie d'ombre",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre une cible au Corps à corps. En cas de succès, la cible est Vulnérable et Bloquée jusqu'à ce qu'elle réussisse un jet de Force (10)."
      },
      {
        "nom": "Croc d'ombre",
        "tag": "réaction",
        "texte": "Quand la Fileuse réussit une attaque contre une cible au Corps à corps, vous pouvez dépenser une Peur pour rendre la cible Tremblante jusqu'à ce qu'elle réussisse un jet d'Instinct (10). Tant qu'elle est Tremblante, la cible a le désavantage sur ses jets d'attaque."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "harpie",
    "palier": 1,
    "type": "Traqueur",
    "categorie": "Monstre",
    "nom": "Harpie",
    "description": "Un oiseau féroce et nauséabond, d'une envergure de deux mètres quarante, au buste et au visage humains.",
    "motivation": "Défendre le nid, larguer les ennemis de très haut, ravager depuis les airs, hurler sans cesse",
    "difficulte": 12,
    "seuilMineur": 3,
    "seuilMajeur": 7,
    "blessure": 3,
    "stress": 3,
    "modAttaque": 0,
    "attaqueStandard": "Serres : mêlée, 1d8+1 phy",
    "experience": "Îles +3",
    "aptitudes": [
      {
        "nom": "Aura toxique",
        "tag": "passive",
        "texte": "La Harpie dégage une puanteur qui rend Vulnérables toutes les créatures autres que des Harpies à très courte portée."
      },
      {
        "nom": "Attaque en piqué",
        "tag": "action",
        "texte": "Marquez un Stress pour que la Harpie se déplace en ligne droite jusqu'à un point à longue portée et fasse une attaque contre une cible sur son trajet. En cas de succès, la Harpie inflige 3d6 dégâts physiques."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "kelpie",
    "palier": 1,
    "type": "Traqueur",
    "categorie": "Fée",
    "nom": "Kelpie",
    "description": "Un métamorphe des rivières qui préfère prendre une séduisante forme équine, dans l'eau comme hors de l'eau.",
    "motivation": "Adopter une forme attirante ou utile, noyer et dévorer, attirer les voyageurs imprudents",
    "difficulte": 12,
    "seuilMineur": 4,
    "seuilMajeur": 8,
    "blessure": 3,
    "stress": 5,
    "modAttaque": -2,
    "attaqueStandard": "Sabots : très courte, 1d8+2 phy",
    "experience": "Entrave +3, Lecteur d'esprit +3",
    "aptitudes": [
      {
        "nom": "Captivante",
        "tag": "passive",
        "texte": "Un PJ doit marquer un Stress pour quitter le Corps à corps de la Kelpie."
      },
      {
        "nom": "Désir du cœur",
        "tag": "passive",
        "texte": "Après avoir interagi avec une créature ou l'avoir observée pendant au moins cent battements de cœur, la Kelpie connaît la forme physique que cette créature trouverait la plus plaisante ou séduisante."
      },
      {
        "nom": "Métamorphe",
        "tag": "action",
        "texte": "Marquez un Stress pour changer la forme physique de la Kelpie en n'importe quelle créature ou objet plus petit qu'un chariot. Une créature a le désavantage sur ses jets contre la Kelpie tant que celle-ci est sous une forme que la créature trouve plaisante ou séduisante."
      },
      {
        "nom": "Envoûter",
        "tag": "action",
        "texte": "Dépensez une Peur pour que la Kelpie berne un PJ à courte portée. Le PJ doit réussir un jet de réaction d'Instinct ou être Envoûté jusqu'à ce qu'il subisse des dégâts. Tant qu'il est Envoûté, le PJ perçoit la Kelpie comme un ami ou un allié de confiance et fait ce que la Kelpie dit, à moins que cela ne contredise ses convictions morales les plus profondes."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "mage-a-l-ame-brisee",
    "palier": 1,
    "type": "Solo",
    "categorie": "Mort-vivant",
    "nom": "Mage à l'âme brisée",
    "description": "Un lanceur de sorts dont la psyché a été brisée par un savoir qu'il aurait mieux valu laisser caché.",
    "motivation": "Babiller dans une langue inconnue, rire de façon troublante, manier un pouvoir hors de contrôle",
    "difficulte": 12,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "Bâton d'armoise : longue, 1d12 mag",
    "experience": "Savoir interdit +2",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Mage peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Magie brisée",
        "tag": "action",
        "texte": "Marquez un Stress pour lancer un d6. Le Mage utilise l'action correspondante. 1-2 : Faille dimensionnelle. Choisissez une cible à longue portée. La cible se téléporte à un point que vous choisissez à courte portée de sa position d'origine et subit 2d6 dégâts magiques directs pendant que son corps et son esprit se reconstituent. 3-4 : Dilatation du temps. Choisissez un groupe de PJ à longue portée. Chaque cible est Ralentie jusqu'à ce qu'elle fasse un jet avec Espoir. Tant qu'elle est Ralentie, la cible est Vulnérable et doit marquer un Stress quand elle se déplace. 5-6 : Visions discordantes. Faites une attaque contre jusqu'à trois cibles à courte portée. Les cibles contre lesquelles le Mage réussit subissent 2d8 dégâts magiques directs."
      },
      {
        "nom": "Ressentez ma douleur",
        "tag": "réaction",
        "texte": "Quand le Mage marque des PB, lancez un nombre de d6 égal au nombre de Stress que le Mage a marqués. Le Mage inflige des dégâts magiques directs égaux au résultat total à tous les PJ à très courte portée."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "mascara-de-la-muerte",
    "palier": 1,
    "type": "Solo",
    "categorie": "Esprit",
    "nom": "Máscara de la Muerte",
    "description": "L'âme furieuse d'un catcheur masqué et malfaisant.",
    "motivation": "Haranguer, humilier, galvaniser le public, clouer ses adversaires au sol",
    "difficulte": 13,
    "seuilMineur": 7,
    "seuilMajeur": 14,
    "blessure": 8,
    "stress": 4,
    "modAttaque": 4,
    "attaqueStandard": "Coups : mêlée, 1d12+2 mag",
    "experience": "Lutteur +3, M'as-tu-vu +3",
    "aptitudes": [
      {
        "nom": "Libre",
        "tag": "passive",
        "texte": "Le Masque Muerte ne peut pas être Bloqué."
      },
      {
        "nom": "Tour de traître",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre un PJ à courte portée. En cas de succès, la cible doit marquer un Stress et est temporairement Vulnérable tandis que le Masque Muerte l'accable d'un flot d'insultes."
      },
      {
        "nom": "Suplex spectral",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Masque Muerte exécute un suplex sur un PJ Bloqué, lui infligeant 1d10+6 dégâts magiques."
      },
      {
        "nom": "Démasquage mortel",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Masque Muerte retire un instant son masque, révélant l'horrible visage en dessous. Chaque PJ à courte portée doit réussir un jet de réaction de Présence ou marquer un Stress."
      },
      {
        "nom": "Relais d'équipe",
        "tag": "réaction",
        "texte": "Quand le Masque Muerte inflige des dégâts à un PJ, vous pouvez dépenser une Peur pour qu'un catcheur spectral apparaisse et Cloue la cible jusqu'à ce qu'elle s'échappe avec un jet de Force réussi. Tant qu'elle est Clouée, la cible est Bloquée et subit 1d12 dégâts magiques supplémentaires des attaques du Masque Muerte."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "des-gueules-sur-pied-3-pb",
    "palier": 1,
    "type": "Horde",
    "categorie": "Monstre",
    "nom": "Des Gueules sur pied(3/PB)",
    "description": "Ces boules de poils, de membres et de dents, grosses comme des chats, voyagent en « mawb » d'une douzaine.",
    "motivation": "Chuchoter et mâchonner, se serrer les uns contre les autres, rouler",
    "difficulte": 8,
    "seuilMineur": 4,
    "seuilMajeur": 8,
    "blessure": 4,
    "stress": 2,
    "modAttaque": -2,
    "attaqueStandard": "Morsure : mêlée, 1d6+3 phy",
    "experience": "Souterrain +2",
    "aptitudes": [
      {
        "nom": "Horde (1d4+1)",
        "tag": "passive",
        "texte": "Quand le Mawb a marqué la moitié ou plus de ses PB, son attaque standard inflige 1d4+1 dégâts physiques à la place."
      },
      {
        "nom": "Revenir pire",
        "tag": "réaction",
        "texte": "Quand le Mawb est vaincu, vous pouvez dépenser une Peur pour le ramener à la vie, effaçant tous ses PB et son Stress. Le Mawb gagne un bonus à tous ses jets égal au nombre de fois que cette aptitude a été utilisée par ce Mawb."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "orbe-mecanique",
    "palier": 1,
    "type": "Standard",
    "categorie": "Artificielle",
    "nom": "Orbe mécanique",
    "description": "Une sphère d'horlogerie flottante aux membres télescopiques, venue d'un royaume de machines et de métal.",
    "motivation": "Coordonner, (dés)assembler, se déplacer orthogonalement, parler en binaire",
    "difficulte": 12,
    "seuilMineur": 5,
    "seuilMajeur": 10,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Aiguille : mêlée, 1d10+1 phy",
    "experience": "Machines +2",
    "aptitudes": [
      {
        "nom": "Esprit de ruche",
        "tag": "passive",
        "texte": "Le Mécanorbe gagne un bonus de +1 à sa Difficulté pour chaque autre Mécanorbe à courte portée."
      },
      {
        "nom": "Tactique adaptative",
        "tag": "passive",
        "texte": "Réserve. Quand un Mécanorbe échoue à un jet d'attaque, ajoutez un jeton à la Réserve des Mécanorbes. Tous les Mécanorbes de la scène gagnent un bonus aux jets d'attaque égal au nombre de jetons dans la Réserve. Retirez tous les jetons quand un Mécanorbe subit des dégâts Grave ou est vaincu."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "mordeurs-bonnets-rouges-3-pb",
    "palier": 1,
    "type": "Horde",
    "categorie": "Bonnet-rouge",
    "nom": "Mordeurs bonnets-rouges (3/PB)",
    "description": "Une troupe de créatures féeriques grosses comme des poings, aux dents acérées comme des aiguilles et coiffées de bonnets rouges coniques scellés sur leur tête avec de la cire de bougie.",
    "motivation": "Les mettre à terre, célébrer de petites victoires, ricaner et gazouiller, filer entre les murs",
    "difficulte": 10,
    "seuilMineur": 6,
    "seuilMajeur": 11,
    "blessure": 5,
    "stress": 3,
    "modAttaque": -1,
    "attaqueStandard": "Morsure : mêlée, 1d8+4 phy",
    "experience": "Recoins +3",
    "aptitudes": [
      {
        "nom": "Horde (1d4+2)",
        "tag": "passive",
        "texte": "Quand les Mordeurs ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige 1d4+2 dégâts physiques à la place."
      },
      {
        "nom": "Poids aux chevilles",
        "tag": "passive",
        "texte": "Un PJ doit marquer un Stress pour quitter le Corps à corps des Mordeurs."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "nuee-de-sombretoile-8-pb",
    "palier": 1,
    "type": "Horde",
    "categorie": "Sombretoile",
    "nom": "Nuée de Sombretoile (8/PB)",
    "description": "Une nuée grouillante de minuscules araignées tissées de soie d'ombre.",
    "motivation": "Jaillir des trous, grimper le long des jambes, ramper dans les oreilles, se faufiler sous les vêtements",
    "difficulte": 9,
    "seuilMineur": 4,
    "seuilMajeur": 8,
    "blessure": 8,
    "stress": 4,
    "modAttaque": 0,
    "attaqueStandard": "Morsure : mêlée, 1d8 phy",
    "experience": "Escalade +2",
    "aptitudes": [
      {
        "nom": "Horde (1d4)",
        "tag": "passive",
        "texte": "Quand la Nuée a marqué la moitié ou plus de ses PB, son attaque standard inflige 1d4 dégâts physiques à la place."
      },
      {
        "nom": "« Enlevez-les, enlevez-les ! »",
        "tag": "réaction",
        "texte": "Quand une attaque de la Nuée fait marquer des PB à une cible, vous pouvez marquer un Stress pour que la cible soit temporairement Couverte d'araignées. Tant qu'elle est Couverte d'araignées, la cible doit lancer un d6 quand elle fait un jet d'action. Sur un résultat de 4 ou plus, elle doit marquer un Stress ou vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "panthere",
    "palier": 1,
    "type": "Traqueur",
    "categorie": "Bête",
    "nom": "Panthère",
    "description": "Un grand félin prédateur qui traque ses proies depuis l'ombre.",
    "motivation": "Grimper aux arbres, bondir, traquer",
    "difficulte": 14,
    "seuilMineur": 5,
    "seuilMajeur": 10,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Crocs et griffes : mêlée, 1d8+1 phy",
    "experience": "Sens aiguisés +3, Se faufiler +3",
    "aptitudes": [
      {
        "nom": "Traqueuse de l'ombre",
        "tag": "passive",
        "texte": "Tant qu'elle est Cachée, la Panthère gagne un bonus de +2 à ses jets d'attaque."
      },
      {
        "nom": "Attaque bondissante",
        "tag": "action",
        "texte": "Marquez un Stress pour que la Panthère bondisse au Corps à corps d'une cible à longue portée et fasse une attaque contre elle. En cas de succès, infligez 1d12+2 dégâts physiques."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "pieuvre",
    "palier": 1,
    "type": "Traqueur",
    "categorie": "Aquatique",
    "nom": "Pieuvre",
    "description": "Un invertébré aquatique au corps mou, aux huit bras garnis de ventouses et à la mâchoire dure en forme de bec.",
    "motivation": "Ramper sur le fond marin, manger du poisson, projeter de l'encre pour s'échapper",
    "difficulte": 12,
    "seuilMineur": 3,
    "seuilMajeur": 7,
    "blessure": 2,
    "stress": 3,
    "modAttaque": -1,
    "attaqueStandard": "Bec : mêlée, 1d6 phy",
    "experience": "Dextérité +3, Eau +3",
    "aptitudes": [
      {
        "nom": "Agripper",
        "tag": "action",
        "texte": "Faites un jet d'attaque contre une cible à courte portée. En cas de succès, la cible devient Bloquée et Vulnérable jusqu'à ce qu'elle s'échappe avec un jet de Force réussi."
      },
      {
        "nom": "Jet d'encre",
        "tag": "action",
        "texte": "Marquez un Stress pour que la Pieuvre projette de l'encre. Sur terre, l'encre recouvre le sol à très courte portée. Chaque créature qui traverse cette zone doit réussir un jet de réaction d'Agilité ou glisser et tomber, devenant Vulnérable jusqu'à ce qu'elle quitte la zone. Si cette aptitude est utilisée alors que la Pieuvre est sous l'eau, elle crée à la place un nuage d'obscurité qui remplit une zone à très courte portée et bloque la ligne de vue."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "poltergeist",
    "palier": 1,
    "type": "Distant",
    "categorie": "Esprit",
    "nom": "Poltergeist",
    "description": "Un esprit funeste et translucide qui possède des objets inanimés.",
    "motivation": "Faire vaciller les bougies, secouer les chaînes, faire trembler les fenêtres, projeter les gens à travers la pièce",
    "difficulte": 9,
    "seuilMineur": 4,
    "seuilMajeur": 7,
    "blessure": 2,
    "stress": 2,
    "modAttaque": -1,
    "attaqueStandard": "Objet projeté : longue, 1d6+3 phy",
    "experience": "Effrayant +3",
    "aptitudes": [
      {
        "nom": "Spectre",
        "tag": "passive",
        "texte": "Le Poltergeist a une résistance aux dégâts physiques. Marquez un Stress pour vous déplacer jusqu'à courte portée à travers des objets solides."
      },
      {
        "nom": "Possesseur",
        "tag": "action",
        "texte": "Marquez un Stress pour que le Poltergeist s'insinue dans un objet non magique entièrement à courte portée, l'imprégnant d'une lueur fantomatique. La prochaine fois que le Poltergeist devrait subir des dégâts, l'objet est détruit à la place et le Poltergeist en est expulsé."
      },
      {
        "nom": "Tempête fantôme",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Poltergeist aspire dans un tourbillon violent tous les objets non magiques non équipés à très courte portée. Chaque cible dans cette zone doit faire un jet de réaction d'Agilité. Celles qui échouent subissent 1d12+2 dégâts physiques. Celles qui réussissent subissent la moitié des dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "chasseuse-sombretoile",
    "palier": 1,
    "type": "Sbire",
    "categorie": "Sombretoile",
    "nom": "Chasseuse Sombretoile",
    "description": "Une araignée de la taille d'une tête humaine, tissée de soie d'ombre.",
    "motivation": "Se cacher dans l'ombre, frapper les imprudents, attendre une ouverture",
    "difficulte": 10,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": -2,
    "attaqueStandard": "Morsure : mêlée, 2 phy",
    "experience": "Obscurité +3",
    "aptitudes": [
      {
        "nom": "Sbire (3)",
        "tag": "passive",
        "texte": "Le Rampant est vaincu dès qu'il subit des dégâts. Pour chaque tranche de 3 dégâts qu'un PJ inflige au Rampant, il vainc un Sbire supplémentaire à portée contre lequel l'attaque aurait réussi."
      },
      {
        "nom": "Chair de poule",
        "tag": "action",
        "texte": "Dépensez une Peur pour forcer tous les PJ au Corps à corps du Rampant à marquer un Stress."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir une cible et mettre en avant tous les Rampants tisse-ombre à courte portée de celle-ci. Ces Sbires se déplacent au Corps à corps de la cible et font un seul jet d'attaque partagé. En cas de succès, ils infligent chacun 2 dégâts physiques. Additionnez ces dégâts."
      },
      {
        "nom": "Venin tisse-ombre",
        "tag": "réaction",
        "texte": "Quand le Rampant réussit une attaque, vous pouvez marquer un Stress pour Épuiser la cible jusqu'à ce qu'elle réussisse un jet de Force (9). Tant qu'elle est Épuisée, la cible doit marquer un Stress chaque fois qu'elle fait un jet d'action."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "reine-sombretoile",
    "palier": 1,
    "type": "Solo",
    "categorie": "Sombretoile",
    "nom": "Reine Sombretoile",
    "description": "Une araignée grande comme un chariot, tissée de soie d'ombre par un dieu oublié depuis longtemps. Chacun de ses nombreux yeux porte le visage d'une victime différente.",
    "motivation": "Tendre une embuscade, escalader murs et plafonds, détourner l'attention, paralyser, mettre les corps de côté pour plus tard, voler des visages",
    "difficulte": 14,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 9,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Morsure d'araignée : très courte, 1d12+4 phy",
    "experience": "Gigantesque +3, Chasseuse +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "La Reine peut être mise en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour la mettre en avant."
      },
      {
        "nom": "Mère nourricière",
        "tag": "action",
        "texte": "Une fois par scène, dépensez 2 Peur pour invoquer jusqu'à deux adversaires tisse-ombre (autres que des Reines tisse-ombre), qui apparaissent à courte portée et prennent immédiatement la mise en avant."
      },
      {
        "nom": "Plus rapide qu'elle n'en a l'air",
        "tag": "action",
        "texte": "Dépensez une Peur pour vous déplacer jusqu'à longue portée et faire une attaque standard avec avantage."
      },
      {
        "nom": "Envenimation des crocs sombres",
        "tag": "réaction",
        "texte": "Quand la Reine réussit une attaque standard, vous pouvez dépenser une Peur pour rendre la cible Vulnérable et Bloquée jusqu'à ce qu'elle réussisse un jet de Force (12) ou prenne un repos."
      },
      {
        "nom": "Terrifiante",
        "tag": "réaction",
        "texte": "Quand un PJ échoue à un jet d'attaque contre la Reine, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "rugaru",
    "palier": 1,
    "type": "Solo",
    "categorie": "Monstre",
    "nom": "Rugaru",
    "description": "Un humanoïde à tête de loup, maudit par les dieux à hanter les marais en quête de sang.",
    "motivation": "Blasphémer, viser la gorge, traquer, terroriser",
    "difficulte": 14,
    "seuilMineur": 7,
    "seuilMajeur": 14,
    "blessure": 8,
    "stress": 4,
    "modAttaque": 4,
    "attaqueStandard": "Morsure : mêlée, 2d8+4 phy",
    "experience": "Marais +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Rugaru peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Enfant de la nuit",
        "tag": "passive",
        "texte": "Au clair de lune, le Rugaru gagne un bonus de +2 à sa Difficulté."
      },
      {
        "nom": "Soif de sang",
        "tag": "passive",
        "texte": "Quand un PJ marque des PB à cause de l'attaque standard du Rugaru, ajoutez un jeton à ce bloc de stats. Le Rugaru gagne un bonus aux jets d'attaque égal au nombre de jetons sur ce bloc de stats. Retirez tous les jetons quand le Rugaru subit des dégâts Grave."
      },
      {
        "nom": "Hurlement à la lune",
        "tag": "action",
        "texte": "Marquez un Stress pour forcer chaque PJ à longue portée à faire un jet de réaction de Présence (15). Les cibles qui échouent perdent un Espoir. Gagnez une Peur pour chaque Espoir perdu. Si un PJ n'a plus d'Espoir, il doit marquer un Stress et devenir Vulnérable jusqu'à ce qu'il fasse un jet avec Espoir."
      },
      {
        "nom": "Déchireur de chair",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre une cible au Corps à corps. En cas de succès, infligez 1d12+2 dégâts physiques directs."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "troll-des-montagnes",
    "palier": 1,
    "type": "Solo",
    "categorie": "Géant",
    "nom": "Troll des montagnes",
    "description": "Un géant hideux né d'un énorme rocher. Il porte une armure volée et une ceinture de têtes ou de crânes tranchés.",
    "motivation": "Tendre une embuscade, beugler, lancer d'énormes rochers, fracasser, piétiner",
    "difficulte": 14,
    "seuilMineur": 8,
    "seuilMajeur": 15,
    "blessure": 8,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Fléau à crâne : très courte, 1d8+1 phy",
    "experience": "Montagnes +4",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Troll peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Armure volée",
        "tag": "passive",
        "texte": "Compte à rebours. Quand le combat commence, activez un compte à rebours dont la valeur est égale au nombre de PJ. Quand le Troll subit des dégâts, réduisez la gravité d'un seuil, puis faites avancer le compte à rebours. Quand il arrive à terme, le Troll évolue (voir « Troll des montagnes enragé »)."
      },
      {
        "nom": "Balayage de fléau",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre toutes les cibles devant le Troll à très courte portée. Les cibles contre lesquelles le Troll réussit subissent 2d8+2 dégâts physiques."
      },
      {
        "nom": "Troll des montagnes enragé",
        "tag": "évolution",
        "texte": "Le Troll perd ses aptitudes « Armure volée » et « Balayage de fléau », puis gagne un bonus de +1 à sa Difficulté. De plus, il gagne l'aptitude « Double balayage » et remplace « Fléau à crâne » par l'attaque standard suivante : Coup de griffes : très courte, 1d10+3 phy"
      },
      {
        "nom": "Double balayage",
        "tag": "action",
        "texte": "Dépensez une Peur pour vous déplacer jusqu'à courte portée et faire deux attaques standard contre une cible au Corps à corps. Si les deux attaques réussissent, additionnez les dégâts et la cible perd un Espoir."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "vipere",
    "palier": 1,
    "type": "Sbire",
    "categorie": "Bête",
    "nom": "Vipère",
    "description": "Un petit serpent qui envenime ses proies avec ses crocs articulés.",
    "motivation": "Attendre à l'affût, glisser, frapper",
    "difficulte": 11,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 3,
    "attaqueStandard": "Morsure : mêlée, 1 phy",
    "experience": "Au ras du sol +4",
    "aptitudes": [
      {
        "nom": "Sbire (4)",
        "tag": "passive",
        "texte": "La Vipère est vaincue dès qu'elle subit des dégâts. Pour chaque tranche de 4 dégâts qu'un PJ inflige à la Vipère, il vainc un Sbire supplémentaire à portée contre lequel l'attaque aurait réussi."
      },
      {
        "nom": "Venimeuse",
        "tag": "passive",
        "texte": "Quand la Vipère réussit une attaque standard, la cible devient temporairement Envenimée. Tant qu'elle est Envenimée, la cible doit marquer un Stress chaque fois qu'elle fait un jet d'action."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir une cible et mettre en avant toutes les Vipères à courte portée de celle-ci. Ces Sbires se déplacent au Corps à corps de la cible et font un seul jet d'attaque partagé. En cas de succès, ils infligent chacun 1 dégât physique. Additionnez ces dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "voyou-ordinaire",
    "palier": 1,
    "type": "Standard",
    "categorie": "Royaume",
    "nom": "Voyou ordinaire",
    "description": "Un ouvrier ou un artisan du coin que les circonstances ont poussé à s'en prendre aux autres.",
    "motivation": "Faire usage de violence, chercher sécurité et survie",
    "difficulte": 12,
    "seuilMineur": 6,
    "seuilMajeur": 10,
    "blessure": 4,
    "stress": 4,
    "modAttaque": 0,
    "attaqueStandard": "Arme improvisée : mêlée, 1d8 phy",
    "experience": "Désespéré +3",
    "aptitudes": [
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir une cible et mettre en avant tous les Voyous à courte portée de celle-ci. Les Voyous se déplacent au Corps à corps de la cible et font un seul jet d'attaque partagé. En cas de succès, ils infligent chacun 1d8 dégâts physiques. Additionnez ces dégâts."
      },
      {
        "nom": "Instinct de survie",
        "tag": "réaction",
        "texte": "Quand le Voyou marque la moitié de ses PB, lancez un d6. Sur un résultat de 4 ou plus, le Voyou fuit la scène. Sinon, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "wapiti",
    "palier": 1,
    "type": "Traqueur",
    "categorie": "Bête",
    "nom": "Wapiti",
    "description": "Un grand cervidé.",
    "motivation": "Bondir au loin, brouter, être en rut, sentir le danger",
    "difficulte": 13,
    "seuilMineur": 4,
    "seuilMajeur": 8,
    "blessure": 3,
    "stress": 2,
    "modAttaque": 0,
    "attaqueStandard": "Bois : mêlée, 1d8+1 phy",
    "experience": "Sens aiguisés +3, Course +3",
    "aptitudes": [
      {
        "nom": "Coup de tête",
        "tag": "passive",
        "texte": "Quand le Wapiti se déplace depuis courte portée ou plus loin avant de faire une attaque standard, il inflige 1d12+2 dégâts physiques au lieu de ses dégâts standard."
      },
      {
        "nom": "Détaler",
        "tag": "réaction",
        "texte": "Quand le Wapiti marque un PB ou du Stress, il doit réussir un jet de réaction (10) ou fuir la scène."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "yufo",
    "palier": 1,
    "type": "Social",
    "categorie": "Royaume extérieurs",
    "nom": "Yufo",
    "description": "Une grande créature interdimensionnelle semblable à une méduse, qui flotte dans le flux du temps et en sort.",
    "motivation": "Échanger des informations sur de possibles lignes temporelles, se nourrir d'émotions exacerbées, observer depuis l'ombre",
    "difficulte": 14,
    "seuilMineur": 6,
    "seuilMajeur": 10,
    "blessure": 3,
    "stress": 5,
    "modAttaque": -3,
    "attaqueStandard": "Fouet de tentacule : très courte, 1d6+3 phy",
    "experience": "Secrets +3, Bizarrerie flottante +3",
    "aptitudes": [
      {
        "nom": "Télépathe",
        "tag": "passive",
        "texte": "Le Yufo peut communiquer mentalement avec les créatures à très longue portée."
      },
      {
        "nom": "Coffre-fort psychique",
        "tag": "passive",
        "texte": "Le Yufo est immunisé contre les capacités et aptitudes qui affecteraient ou altéreraient ses pensées ou émotions."
      },
      {
        "nom": "Onde de dysfonctionnement",
        "tag": "action",
        "texte": "Dépensez une Peur et choisissez jusqu'à trois cibles à courte portée. Chaque cible doit réussir un jet de réaction d'Instinct ou être désynchronisée de la réalité et avoir le désavantage aux jets d'Instinct jusqu'à ce qu'elle utilise une action de temps mort pour ancrer sa psyché dans le présent."
      },
      {
        "nom": "Corrosion temporelle",
        "tag": "réaction",
        "texte": "Quand le Yufo réussit une attaque standard, vous pouvez marquer un Stress pour que le Yufo excrète un acide entropique par sa peau, donnant à la cible une pénalité de -2 à ses seuils de dégâts jusqu'à ce qu'elle utilise une action de temps mort pour réparer son armure."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "alebrujo-guahalan",
    "palier": 2,
    "type": "Solo",
    "categorie": "Guahalan",
    "nom": "Alebrujo guahalan",
    "description": "Une énorme bête chimérique et colorée, formée de nombreux animaux.",
    "motivation": "Détruire, ne faire aucun quartier, ravager",
    "difficulte": 14,
    "seuilMineur": 13,
    "seuilMajeur": 26,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Crocs et griffes : très courte, 2d10+4 mag",
    "experience": "Brutal +2, Rapide +2",
    "aptitudes": [
      {
        "nom": "La bête déchaînée",
        "tag": "passive",
        "texte": "L'Alebrujo gagne un bonus aux jets de dégâts égal au nombre de Peur que vous avez."
      },
      {
        "nom": "Sacrifice guahalan",
        "tag": "action",
        "texte": "Dépensez une Peur pour que l'Alebrujo dévore un Sbire à très courte portée, puis efface un PB ou un Stress."
      },
      {
        "nom": "Hurlement des Guahala",
        "tag": "action",
        "texte": "Marquez un Stress pour que l'Alebrujo pousse un hurlement. Chaque PJ à longue portée doit réussir un jet de réaction de Présence ou devenir temporairement Paniqué. Tant qu'il est Paniqué, un PJ doit marquer un Stress quand il prend la mise en avant."
      },
      {
        "nom": "Déchirer et lacérer",
        "tag": "action",
        "texte": "Dépensez une Peur pour faire une attaque standard avec avantage. En cas de succès, vous pouvez marquer un Stress pour faire une autre attaque standard contre une cible supplémentaire à portée. Vous pouvez continuer à marquer du Stress pour faire des attaques supplémentaires jusqu'à ce que l'Alebrujo rate un jet d'attaque."
      },
      {
        "nom": "Spectacle brutal",
        "tag": "réaction",
        "texte": "Quand l'Alebrujo inflige des dégâts Grave, vous pouvez dépenser une Peur pour forcer toutes les cibles à courte portée à marquer un Stress."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "chef-berserker",
    "palier": 2,
    "type": "Meneur",
    "categorie": "Guerrier",
    "nom": "Chef berserker",
    "description": "Un chef de guerre vétéran qui boit des élixirs magiques pour se transformer en bête et mener sa meute à la chasse.",
    "motivation": "Embrasser le changement, hurler à la lune, mener la meute, traquer les ennemis",
    "difficulte": 14,
    "seuilMineur": 13,
    "seuilMajeur": 26,
    "blessure": 6,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Crocs et griffes : mêlée, 2d10+2 phy",
    "experience": "Chasse +3, Sens aiguisés +2",
    "aptitudes": [
      {
        "nom": "Furie de la meute",
        "tag": "passive",
        "texte": "L'Alpha gagne un bonus de +1 à ses jets d'attaque pour chaque allié à très courte portée de la cible de son attaque."
      },
      {
        "nom": "Aboiement à la lune",
        "tag": "action",
        "texte": "Une fois par scène, dépensez une Peur pour que chaque allié à courte portée de l'Alpha efface un PB et un Stress."
      },
      {
        "nom": "Rage berserker",
        "tag": "réaction",
        "texte": "La première fois dans une scène que l'Alpha marque son dernier Stress, il gagne un bonus de +6 à ses jets de dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "banshee",
    "palier": 2,
    "type": "Traqueur",
    "categorie": "Esprit",
    "nom": "Banshee",
    "description": "Un esprit féerique corrompu qui hante la nuit sous la forme d'un spectre longiligne vêtu d'une robe de gaze lumineuse.",
    "motivation": "Surgir d'objets solides, effrayer à mort, pleurer la vie et la beauté perdues, hurler lugubrement",
    "difficulte": 14,
    "seuilMineur": 9,
    "seuilMajeur": 18,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Ongles : mêlée, 2d6+1 mag",
    "experience": "Vaniteuse +3, Courroucée +3",
    "aptitudes": [
      {
        "nom": "Spectre",
        "tag": "passive",
        "texte": "La Banshee a une résistance aux dégâts physiques. Marquez un Stress pour vous déplacer jusqu'à courte portée à travers des objets solides."
      },
      {
        "nom": "Terrifiante",
        "tag": "passive",
        "texte": "Quand la Banshee réussit une attaque, tous les PJ à courte portée perdent un Espoir et vous gagnez une Peur."
      },
      {
        "nom": "Coup de frayeur",
        "tag": "action",
        "texte": "Jusqu'à trois fois par scène, dépensez une Peur pour que la Banshee se téléporte jusqu'à très longue portée et effraie un PJ au Corps à corps. Le PJ marque 1d4 Stress. Si cela lui fait marquer des PB, il perd aussi un Espoir."
      },
      {
        "nom": "Lamentation du désespoir",
        "tag": "action",
        "texte": "Marquez un Stress pour que la Banshee pousse un cri funèbre de douleur et d'angoisse. Chaque PJ à courte portée doit faire un jet de réaction de Présence. Les cibles qui réussissent subissent 1d12+1 dégâts magiques. Celles qui échouent subissent le double des dégâts et sont repoussées à courte portée."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "basilic",
    "palier": 2,
    "type": "Standard",
    "categorie": "Monstre",
    "nom": "Basilic",
    "description": "Un lézard monstrueux à six pattes, à la tête de vautour, à l'échine hérissée de pointes et au regard pétrifiant.",
    "motivation": "Se mouvoir lentement et sûrement, savourer les proies pétrifiées, changer tout le monde en pierre, observer et attendre",
    "difficulte": 14,
    "seuilMineur": 8,
    "seuilMajeur": 19,
    "blessure": 4,
    "stress": 4,
    "modAttaque": 1,
    "attaqueStandard": "Mâchoires et griffes : mêlée, 2d6+4 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Pétrifier",
        "tag": "action",
        "texte": "Dépensez une Peur pour forcer un PJ à longue portée à faire un jet de réaction d'Instinct. En cas de succès, la cible marque un Stress. En cas d'échec, la cible devient Raide. Si la cible est déjà Raide, elle devient Pétrifiée. Tant qu'il est Raide, le PJ doit marquer un Stress chaque fois qu'il agit, jusqu'à ce qu'il prenne un repos ou que le Basilic soit vaincu. Tant qu'il est Pétrifié, le PJ ne peut pas agir. L'état Pétrifié ne peut être levé qu'en appliquant de la salive de Basilic sur la cible."
      },
      {
        "nom": "CROUNCH !",
        "tag": "action",
        "texte": "Marquez un Stress pour que le Basilic broie un PJ Pétrifié au Corps à corps. La cible doit faire une action de mort."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "behemoth-requin-terrestre",
    "palier": 2,
    "type": "Solo",
    "categorie": "Monstre",
    "nom": "Béhémoth requin terrestre",
    "description": "Un requin terrestre qui a vécu assez longtemps pour devenir une monstruosité fouisseuse à la peau d'acier et aux dents tranchantes comme des rasoirs.",
    "motivation": "Mordre, creuser, jaillir du sol",
    "difficulte": 15,
    "seuilMineur": 15,
    "seuilMajeur": 28,
    "blessure": 10,
    "stress": 4,
    "modAttaque": 2,
    "attaqueStandard": "Morsure : très courte, 2d12+6 phy",
    "experience": "Souterrain +4, Assoiffé de sang +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Béhémoth peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Plongeur des profondeurs",
        "tag": "passive",
        "texte": "Le Béhémoth peut se déplacer dans le sol aussi facilement qu'à la surface. Quand il se déplace, il peut choisir de s'enfouir ou de remonter à la surface. Tant qu'il est sous terre, le Béhémoth est immunisé contre les dégâts mais ne peut pas attaquer."
      },
      {
        "nom": "Peau d'acier",
        "tag": "passive",
        "texte": "Tous les dégâts infligés au Béhémoth sont réduits d'un seuil."
      },
      {
        "nom": "Éruption puissante",
        "tag": "action",
        "texte": "Le Béhémoth jaillit du sol, forçant chaque PJ à très courte portée à réussir un jet de réaction d'Agilité ou être renversé, devenant Vulnérable jusqu'à ce qu'il fasse un jet d'action. Pour chaque PJ rendu Vulnérable ainsi, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "bete-spirituelle-guahalan",
    "palier": 2,
    "type": "Sbire",
    "categorie": "Guahalan",
    "nom": "Bête spirituelle guahalan",
    "description": "Un esprit aux couleurs vives, sous la forme d'un animal.",
    "motivation": "Protéger, se sacrifier, encercler",
    "difficulte": 13,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 2,
    "modAttaque": 1,
    "attaqueStandard": "Morsure et griffes : mêlée, 5 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (5)",
        "tag": "passive",
        "texte": "La Bête spirituelle est vaincue dès que elle subit des dégâts. Pour chaque tranche de 5 dégâts qu'un PJ inflige à la Bête spirituelle, il vainc un Sbire supplémentaire à portée contre lequel l'attaque aurait réussi."
      },
      {
        "nom": "Forme éthérée",
        "tag": "passive",
        "texte": "La Bête spirituelle a une résistance aux dégâts physiques."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir une cible et mettre en avant tous les Bêtes spirituelles guahalan à courte portée de celle-ci. Ces Sbires se déplacent au Corps à corps de la cible et font un seul jet d'attaque partagé. En cas de succès, ils infligent chacun 5 dégâts magiques. Additionnez ces dégâts."
      },
      {
        "nom": "Bombe bestiale",
        "tag": "réaction",
        "texte": "Quand la Bête spirituelle est vaincue, elle explose en une flamme blanche et inflige 5 dégâts magiques aux créatures au Corps à corps."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "momie-panthere",
    "palier": 2,
    "type": "Solo",
    "categorie": "Momie",
    "nom": "Momie panthère",
    "description": "Un grand squelette humanoïde mort-vivant à tête de crâne de panthère.",
    "motivation": "Charger, déchiqueter, terrifier",
    "difficulte": 15,
    "seuilMineur": 12,
    "seuilMajeur": 23,
    "blessure": 7,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Griffes-rasoirs : très courte, 2d12+2 phy",
    "experience": "Sauvage +2",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "La Bête-chat peut être mise en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour la mettre en avant."
      },
      {
        "nom": "Frappe sanglante",
        "tag": "passive",
        "texte": "Un PJ qui marque 3 PB ou plus à cause d'une attaque de la Bête-chat doit marquer 1 PB supplémentaire."
      },
      {
        "nom": "Miaulement strident",
        "tag": "action",
        "texte": "Marquez un Stress pour forcer chaque PJ à longue portée de la Bête-chat à faire un jet de réaction de Présence. Les cibles qui échouent deviennent Ébranlées jusqu'à ce qu'elles fassent un jet avec Espoir. Quand la Bête-chat réussit une attaque contre un PJ Ébranlé, lancez les dégâts deux fois et gardez le meilleur résultat, puis retirez l'état Ébranlé de la cible."
      },
      {
        "nom": "Moi seul",
        "tag": "réaction",
        "texte": "Quand la Bête-chat apparaît pour la première fois, vous pouvez choisir de lui faire absorber l'essence de ses alliés. Vainquez immédiatement n'importe quel nombre d'alliés sur le champ de bataille et gagnez une Peur pour chaque allié ainsi vaincu."
      },
      {
        "nom": "Représailles vicieuses",
        "tag": "réaction",
        "texte": "Quand la Bête-chat subit des dégâts d'une attaque faite par un PJ à très courte portée, vous pouvez marquer un Stress pour faire une attaque standard contre ce PJ."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "cabane-a-pattes-de-poulet",
    "palier": 2,
    "type": "Cogneur",
    "categorie": "Artificielle",
    "nom": "Cabane à pattes de poulet",
    "description": "Une haute cabane en bois qui se déplace sur d'immenses pattes de poulet.",
    "motivation": "Griffer, protéger son maître, courir et sauter, piétiner",
    "difficulte": 16,
    "seuilMineur": 14,
    "seuilMajeur": 27,
    "blessure": 8,
    "stress": 2,
    "modAttaque": 2,
    "attaqueStandard": "Pieds griffus : très courte, 2d10+3 phy",
    "experience": "Forêts +2",
    "aptitudes": [
      {
        "nom": "Rapide",
        "tag": "passive",
        "texte": "La Cabane peut se déplacer jusqu'à longue portée quand elle est mise en avant."
      },
      {
        "nom": "Double frappe",
        "tag": "action",
        "texte": "Marquez un Stress pour faire deux attaques standard. Si les deux attaques réussissent contre la même cible, additionnez les dégâts."
      },
      {
        "nom": "Clouer",
        "tag": "réaction",
        "texte": "Quand la Cabane réussit une attaque standard, vous pouvez marquer un Stress pour Entraver temporairement la cible. La Cabane traîne la cible Bloquée quand elle se déplace."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "chantre-d-esprits-guahalan",
    "palier": 2,
    "type": "Soutien",
    "categorie": "Guahalan",
    "nom": "Chantre d'esprits guahalan",
    "description": "Un invocateur métamorphe aux traits animaux.",
    "motivation": "Conjurer, renforcer, invoquer",
    "difficulte": 14,
    "seuilMineur": 9,
    "seuilMajeur": 18,
    "blessure": 4,
    "stress": 6,
    "modAttaque": 2,
    "attaqueStandard": "Flamme spirituelle : courte, 2d6+4 mag",
    "experience": "Rituel +3, Histoire ancienne +2",
    "aptitudes": [
      {
        "nom": "Libérer la bête",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Chantre adopte une forme plus bestiale. Sous cette forme, il gagne un bonus aux jets d'attaque et de dégâts égal au nombre de Stress il a marqués. De plus, il peut se déplacer jusqu'à longue portée au lieu de courte portée avant d'agir."
      },
      {
        "nom": "Appel des bêtes",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Chantre invoque 2d4 Bêtes spirituelles guahalan à très courte portée et en mette une immédiatement en avant."
      },
      {
        "nom": "Rage des esprits",
        "tag": "action",
        "texte": "Marquez un Stress pour mettre en avant n'importe quel nombre de Bêtes spirituelles guahalan à très courte portée. Chacune se déplace au Corps à corps du PJ le plus proche et fait une attaque standard. Si des attaques réussissent contre la même cible, additionnez leurs dégâts."
      },
      {
        "nom": "Sacrifice spirituel",
        "tag": "réaction",
        "texte": "Quand le Chantre devrait subir des dégâts alors qu'il est à très courte portée d'une Bête spirituelle guahalan, vous pouvez dépenser une Peur pour sacrifier la Bête spirituelle et annuler les dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "chevalier-dragon",
    "palier": 2,
    "type": "Cogneur",
    "categorie": "Millitaire",
    "nom": "Chevalier-dragon",
    "description": "Un chevalier vêtu d'une armure en écailles de dragon et coiffé d'un heaume en forme de tête de dragon.",
    "motivation": "Exploiter une ouverture, prendre de la distance, déséquilibrer les ennemis, frapper d'en haut",
    "difficulte": 15,
    "seuilMineur": 15,
    "seuilMajeur": 30,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Lance : très courte, 2d12+3 phy",
    "experience": "Joutes +2",
    "aptitudes": [
      {
        "nom": "Position dominante",
        "tag": "passive",
        "texte": "Le Chevalier a l'avantage sur les attaques faites contre des cibles en contrebas."
      },
      {
        "nom": "Frappe bondissante",
        "tag": "action",
        "texte": "Marquez un Stress pour que le Chevalier bondisse au Corps à corps d'une cible à longue portée et fasse une attaque standard contre elle. En cas de succès, l'attaque inflige 1d12 dégâts supplémentaires et la cible doit marquer un emplacement d'Armure sans en recevoir les bénéfices (elle peut tout de même utiliser son armure pour réduire les dégâts)."
      },
      {
        "nom": "Retour en force",
        "tag": "réaction",
        "texte": "Quand le Chevalier échoue à une attaque standard, vous pouvez dépenser une Peur pour relancer l'attaque avec avantage."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "chien-illusoire",
    "palier": 2,
    "type": "Traqueur",
    "categorie": "Bête",
    "nom": "Chien illusoire",
    "description": "Un vicieux canidé magique aux yeux brillants et à deux queues barbelées en forme de fouet. Il déconcerte ses ennemis en conjurant un double illusoire de lui-même.",
    "motivation": "Tendre une embuscade à sa proie, tuer pour le plaisir, jouer avec sa nourriture, tromper et duper",
    "difficulte": 14,
    "seuilMineur": 9,
    "seuilMajeur": 17,
    "blessure": 4,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Fouet barbelé : très courte, 2d8+2 phy",
    "experience": "Ombres +3",
    "aptitudes": [
      {
        "nom": "Bête clignotante",
        "tag": "passive",
        "texte": "Quand le combat commence, placez un double à courte portée du Chien-sosie. Le Chien-sosie occupe à la fois sa place et celle de son double. Le double peut se déplacer quand le Chien-sosie est mis en avant, et le Chien-sosie peut cibler des ennemis avec ses attaques comme s'il se trouvait à la place de son double. Quand le Chien-sosie ou son double est attaqué, l'attaquant lance un d6. Sur un résultat pair, il cible le Chien-sosie. Sur un résultat impair, il cible le double et l'attaque échoue. Si une attaque réussit contre le Chien-sosie, le double est dissipé jusqu'à ce que vous dépensiez une Peur pour le conjurer de nouveau."
      },
      {
        "nom": "Double frappe",
        "tag": "action",
        "texte": "Marquez un Stress pour faire deux attaques standard. Si les deux attaques réussissent contre la même cible, additionnez les dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "elephant",
    "palier": 2,
    "type": "Cogneur",
    "categorie": "Bête",
    "nom": "Éléphant",
    "description": "Un énorme pachyderme aux grandes oreilles et à la trompe préhensile.",
    "motivation": "Manger de la végétation, protéger le troupeau, socialiser",
    "difficulte": 15,
    "seuilMineur": 14,
    "seuilMajeur": 28,
    "blessure": 6,
    "stress": 3,
    "modAttaque": 3,
    "attaqueStandard": "Pieds et défenses : très courte, 2d12 phy",
    "experience": "Énorme +2, N'oublie jamais +2",
    "aptitudes": [
      {
        "nom": "Piétinement",
        "tag": "action",
        "texte": "Marquez un Stress pour que l'Éléphant charge en ligne droite jusqu'à longue portée. Chaque cible sur son chemin doit réussir un jet de réaction d'Agilité ou subir 2d10+3 dégâts physiques."
      },
      {
        "nom": "Projection",
        "tag": "réaction",
        "texte": "Quand l'Éléphant réussit une attaque standard, vous pouvez dépenser une Peur pour qu'il projette la cible à un autre endroit à courte portée et lui inflige 1d12 dégâts supplémentaires."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "epouvantail",
    "palier": 2,
    "type": "Standard",
    "categorie": "Artificielle",
    "nom": "Épouvantail",
    "description": "Un fagot de paille ligoté en forme humanoïde, vêtu de haillons et animé par une âme prisonnière.",
    "motivation": "Se reconstituer, griffer et lacérer",
    "difficulte": 15,
    "seuilMineur": 7,
    "seuilMajeur": 15,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Faucille : mêlée, 2d6+1 phy",
    "experience": "Oiseaux +2, Champs +2",
    "aptitudes": [
      {
        "nom": "Fait de paille",
        "tag": "passive",
        "texte": "L'Épouvantail a une résistance aux dégâts physiques mais subit le double des dégâts du feu."
      },
      {
        "nom": "Vision de terreur",
        "tag": "action",
        "texte": "Dépensez une Peur pour que l'Épouvantail plonge son regard dans celui d'un PJ à très courte portée, lui infligeant 2d8 dégâts magiques et le rendant Vulnérable jusqu'à ce qu'il fasse un jet avec Espoir."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "garde-d-elite-momie",
    "palier": 2,
    "type": "Standard",
    "categorie": "Momie",
    "nom": "Garde d'élite Momie",
    "description": "Un soldat d'élite mort-vivant enterré avec son impératrice pour défendre la tombe contre le vol et la profanation.",
    "motivation": "Se mettre en formation, protéger l'impératrice, frapper à l'unisson",
    "difficulte": 15,
    "seuilMineur": 9,
    "seuilMajeur": 18,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Lame courbe : mêlée, 2d10+2 phy",
    "experience": "Soldat +3",
    "aptitudes": [
      {
        "nom": "Formation de combat",
        "tag": "passive",
        "texte": "Le Garde gagne un bonus de +1 à sa Difficulté pour chaque allié à très courte portée."
      },
      {
        "nom": "Javelot",
        "tag": "action",
        "texte": "Faites une attaque contre une cible à très longue portée. En cas de succès, infligez 2d6+2 dégâts physiques."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "garde-centaure",
    "palier": 2,
    "type": "Distant",
    "categorie": "Millitaire",
    "nom": "Garde centaure",
    "description": "Un gardien mi-humain, mi-cheval qui patrouille aux frontières de terres idylliques épargnées par la civilisation.",
    "motivation": "Vivre en harmonie avec la nature, protéger la nature sauvage, user de mobilité et de distance pour chasser les intrus",
    "difficulte": 14,
    "seuilMineur": 10,
    "seuilMajeur": 19,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Arc recourbé : longue, 2d8+4 phy",
    "experience": "Nature +2, Philosophie +2",
    "aptitudes": [
      {
        "nom": "Manœuvre de flanc",
        "tag": "passive",
        "texte": "Quand le Gardien fait une attaque standard contre une cible au Corps à corps d'un ou plusieurs alliés du Gardien, il gagne un bonus de +2 au jet d'attaque."
      },
      {
        "nom": "Œil du sage",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque standard. Le Gardien a l'avantage au jet d'attaque et réussit de manière critique sur un résultat de 19-20."
      },
      {
        "nom": "Piétinement",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Gardien galope en ligne droite jusqu'à longue portée. Chaque cible sur son chemin doit faire un jet de réaction d'Agilité. Celles qui réussissent subissent 1d6+2 dégâts physiques. Celles qui échouent subissent le double des dégâts et doivent marquer un Stress."
      },
      {
        "nom": "Volée rapide",
        "tag": "réaction",
        "texte": "Quand le Gardien fait une attaque standard, vous pouvez marquer n'importe quel nombre de Stress pour cibler un nombre égal de créatures supplémentaires à portée."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "gargouille",
    "palier": 2,
    "type": "Cogneur",
    "categorie": "Artificielle",
    "nom": "Gargouille",
    "description": "Une statue animée par magie qui ressemble à une bête ou à un démon terrifiant.",
    "motivation": "Se cacher à la vue de tous, faire le guet, fondre en piqué",
    "difficulte": 13,
    "seuilMineur": 14,
    "seuilMajeur": 28,
    "blessure": 8,
    "stress": 2,
    "modAttaque": 2,
    "attaqueStandard": "Griffes de pierre : mêlée, 2d10+3 phy",
    "experience": "Camouflage +4, Ruines +3",
    "aptitudes": [
      {
        "nom": "Inanimée",
        "tag": "passive",
        "texte": "La Gargouille a une résistance aux dégâts magiques."
      },
      {
        "nom": "Piqué en vol",
        "tag": "action",
        "texte": "Choisissez un point à longue portée. La Gargouille se déplace jusqu'à ce point et fait une attaque standard contre une cible sur son trajet."
      },
      {
        "nom": "Entaille pétrifiante",
        "tag": "réaction",
        "texte": "Quand la Gargouille inflige des dégâts, la cible doit réussir un jet de réaction de Force ou devenir Vulnérable. Si la cible est déjà Vulnérable, elle devient Bloquée. Si la cible est déjà Vulnérable et Bloquée, elle doit faire une action de mort. Le PJ peut dépenser un Espoir par condition pour la lever."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "traqueur",
    "palier": 2,
    "type": "Solo",
    "categorie": "Monstre",
    "nom": "Traqueur",
    "description": "Une boule de chair flottante, hérissée de dents, dotée de nombreux yeux et d'un faisceau de tentacules en quête de proie qui tirent des rayons magiques.",
    "motivation": "Tendre une embuscade à ses rivaux, chercher des richesses, tirer des rayons",
    "difficulte": 15,
    "seuilMineur": 10,
    "seuilMajeur": 20,
    "blessure": 8,
    "stress": 6,
    "modAttaque": 2,
    "attaqueStandard": "Tentacules : très courte, 2d6+3 phy",
    "experience": "Magie +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Traqueur peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Anti-Mystica-Halitose",
        "tag": "passive",
        "texte": "L'haleine rance du Traqueur crée un miasme invisible qui annule la magie. Une attaque, une capacité ou un sort qui inflige des dégâts magiques ou crée un effet magique échoue automatiquement s'il est utilisé à courte portée du Gobstalker."
      },
      {
        "nom": "Rayons de tentacule",
        "tag": "action",
        "texte": "Marquez un Stress pour attaquer une cible à longue portée. En cas de succès, lancez un d8 pour un rayon aléatoire ou dépensez une Peur pour choisir à la place : \\n1. Berner. Le Traqueur Berne la cible. Tant qu'elle est Bernée, la cible voit le Traqueur comme un ami et ne peut pas l'attaquer. De plus, quand un PJ fait un jet avec Peur, un PJ Berné doit marquer un Stress ou attaquer une cible choisie par le Gobstalker. Un PJ Berné doit réussir un jet d'Instinct (16) pour lever l'état.\\n 2. Corroder. La cible subit 2d8 dégâts magiques et doit marquer un emplacement d'Armure sans en recevoir les bénéfices (elle peut tout de même utiliser son armure pour réduire les dégâts). Si elle ne le peut pas, doublez les dégâts.\\n 3. Funeste. La cible doit marquer tous ses PB, mais elle peut dépenser n'importe quel nombre d'Espoir pour réduire d'autant le nombre de PB ainsi marqués.\\n 4. Hypnose. La cible tombe dans une Transe profonde et ne peut rien faire d'autre que tenter de se réveiller. Cet état dure jusqu'à ce que la cible subisse des dégâts ou se réveille avec un jet de Présence (16) réussi.\\n 5. Paralyser. La cible se fige sur place, devenant Vulnérable et Bloquée jusqu'à ce qu'elle marque 2 Stress.\\n 6. Brûlure. La cible subit 2d8 dégâts magiques directs.\\n 7. Effrayer. La cible est Effrayée. Tant qu'elle est Effrayée, la cible ne peut rien faire d'autre que fuir le combat ou tenter de dissiper sa terreur. De plus, la cible doit marquer un Stress chaque fois que vous dépensez une Peur. La cible peut lever l'état avec un jet de Présence (16) réussi.\\n 8. Ralentir. La cible devient Vulnérable et doit marquer un Stress pour se déplacer jusqu'à ce qu'elle dépense 2 Espoir."
      },
      {
        "nom": "Léchage vampirique",
        "tag": "réaction",
        "texte": "Quand le Gobstalker réussit une attaque standard, vous pouvez dépenser une Peur pour effacer un nombre de Stress égal au nombre de PB que la cible a marqués."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "mimique",
    "palier": 2,
    "type": "Standard",
    "categorie": "Monstre",
    "nom": "Mimique",
    "description": "Un prédateur métamorphe qui prend l'apparence d'objets inanimés pour attirer les proies imprudentes à portée de ses attaques.",
    "motivation": "Tendre une embuscade, rester à l'affût, avaler sans mâcher, prendre une forme anodine",
    "difficulte": 14,
    "seuilMineur": 8,
    "seuilMajeur": 19,
    "blessure": 4,
    "stress": 4,
    "modAttaque": 1,
    "attaqueStandard": "Morsure : mêlée, 2d6+4 phy",
    "experience": "Mimétisme +5, Affamé +3",
    "aptitudes": [
      {
        "nom": "Attaque de langue",
        "tag": "action",
        "texte": "Marquez un Stress pour attaquer une créature à courte portée. En cas de succès, la cible est attirée au Corps à corps de l'Imitation et Bloquée jusqu'à ce qu'elle s'échappe avec un jet de Force réussi, et vous pouvez dépenser une Peur pour activer l'aptitude Dévorer de l'Imitation contre la cible."
      },
      {
        "nom": "Dévorer",
        "tag": "action",
        "texte": "Faites une attaque contre une cible au Corps à corps. En cas de succès, l'Imitation Avale la cible. Tant qu'elle est Avalée, la cible est Bloquée et marque un PB quand l'Imitation est mise en avant. L'Imitation recrache toutes les créatures Avalées quand elle subit des dégâts Majeurs ou Grave."
      },
      {
        "nom": "Jamais un seul",
        "tag": "action",
        "texte": "Dépensez une Peur pour révéler qu'un autre objet du champ de bataille était en fait une Imitation vorace depuis le début, puis mettez-la immédiatement en avant."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "imperatrice-momie",
    "palier": 2,
    "type": "Meneur",
    "categorie": "Momie",
    "nom": "Impératrice Momie",
    "description": "La souveraine morte-vivante d'un royaume oublié. On lui a infligé des rites funéraires blasphématoires pour empêcher son âme de poursuivre son chemin.",
    "motivation": "Commander ses inférieurs, maudire les envahisseurs",
    "difficulte": 16,
    "seuilMineur": 12,
    "seuilMajeur": 24,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "Balayage : mêlée, 2d8+2 phy",
    "experience": "Souveraine +4, Mort-vivante +2",
    "aptitudes": [
      {
        "nom": "Coquille vide",
        "tag": "passive",
        "texte": "L'Impératrice a une résistance aux dégâts physiques."
      },
      {
        "nom": "Organes manquants",
        "tag": "passive",
        "texte": "Les organes internes de l'Impératrice ont été retirés et placés dans six récipients de cristal cachés dans sa tombe. Chaque fois que les PJ trouvent et détruisent l'un d'eux, l'Impératrice marque un PB."
      },
      {
        "nom": "Chaînes agrippantes",
        "tag": "action",
        "texte": "Marquez un Stress pour que l'Impératrice cible une créature à courte portée et tente de la lier par télékinésie avec ses chaînes funéraires. Faites une attaque contre une cible à courte portée. En cas de succès, l'Impératrice attire la cible au Corps à corps, lui inflige 2d8 dégâts physiques et l'Entrave temporairement."
      },
      {
        "nom": "Obéissance éternelle",
        "tag": "action",
        "texte": "Jusqu'à trois fois par scène, vous pouvez dépenser une Peur pour mettre en avant n'importe quel nombre d'alliés à courte portée. Si des attaques réussissent contre la même cible, additionnez les dégâts."
      },
      {
        "nom": "Caresse maudite",
        "tag": "réaction",
        "texte": "Quand l'Impératrice réussit une attaque standard contre un PJ, vous pouvez dépenser une Peur pour activer un compte à rebours de Destin funeste (1d6+1) pour ce PJ. Il avance quand un PJ fait un jet avec Peur. Quand il arrive à terme, le PJ marque tous ses PB et fait une action de mort. Si l'Impératrice est vaincue ou que les PJ prennent un repos, tous les comptes à rebours de Destin funeste prennent fin."
      },
      {
        "nom": "Transformation finale (Changement de phase)",
        "tag": "réaction",
        "texte": "Quand l'Impératrice marque son dernier PB, remplacez-la par la Bête-chat ensevelie et mettez-la immédiatement en avant."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "initie-berserker",
    "palier": 2,
    "type": "Standard",
    "categorie": "Guerrier",
    "nom": "Initié berserker",
    "description": "Un guerrier enragé qui absorbe des concoctions rituelles pour doter son corps d'aspects d'une bête prédatrice.",
    "motivation": "Se coordonner avec les compagnons de meute, danser autour du feu, hurler à la lune",
    "difficulte": 13,
    "seuilMineur": 9,
    "seuilMajeur": 18,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Crocs et griffes : mêlée, 2d10 phy",
    "experience": "Chasse +3",
    "aptitudes": [
      {
        "nom": "Furie de la meute",
        "tag": "passive",
        "texte": "L'Initié gagne un bonus de +1 à ses jets d'attaque pour chaque allié à très courte portée de la cible de son attaque."
      },
      {
        "nom": "Rage berserker",
        "tag": "réaction",
        "texte": "La première fois dans une scène que l'Initié marque son dernier Stress, il gagne un bonus de +4 à ses jets de dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "jack-o-lantern",
    "palier": 2,
    "type": "Sbire",
    "categorie": "Royaume",
    "nom": "Jack-o'-lantern",
    "description": "Une citrouille ou autre cucurbitacée flottante dans laquelle un visage a été sculpté. L'âme qui y est piégée émet une lueur étrange.",
    "motivation": "Mordre, flotter, rire, raconter des histoires effrayantes",
    "difficulte": 14,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 2,
    "attaqueStandard": "Croc : mêlée, 6 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (4)",
        "tag": "passive",
        "texte": "Le Jack-o'-lantern est vaincu dès que il subit des dégâts. Pour chaque tranche de 4 dégâts qu'un PJ inflige au Jack-o'-lantern, il vainc un Sbire supplémentaire à portée contre lequel l'attaque aurait réussi."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir une cible et mettre en avant tous les Jack-o'-lanterns à courte portée de celle-ci. Ces Sbires se déplacent au Corps à corps de la cible et font un seul jet d'attaque partagé. En cas de succès, ils infligent chacun 6 dégâts physiques. Additionnez ces dégâts."
      },
      {
        "nom": "Ricanement glaçant",
        "tag": "réaction",
        "texte": "Quand un PJ à très courte portée fait un jet avec Peur, vous pouvez marquer un Stress pour gagner une Peur supplémentaire."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "lutin",
    "palier": 2,
    "type": "Sbire",
    "categorie": "Fée",
    "nom": "Lutin",
    "description": "Un minuscule guerrier ailé qui attaque les intrus avec des flèches empoisonnées.",
    "motivation": "Éviter la détection, laisser le poison faire son œuvre, protéger la nature sauvage",
    "difficulte": 13,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 0,
    "attaqueStandard": "Flèches acérées : courte, 5 phy",
    "experience": "Discrétion +2, Vengeance +2",
    "aptitudes": [
      {
        "nom": "Sbire (5)",
        "tag": "passive",
        "texte": "Le Lutin est vaincu dès que il subit des dégâts. Pour chaque tranche de 5 dégâts qu'un PJ inflige au Lutin, il vainc un Sbire supplémentaire à portée contre lequel l'attaque aurait réussi."
      },
      {
        "nom": "Art de l'invisibilité",
        "tag": "action",
        "texte": "Dépensez une Peur pour rendre le Lutin Caché jusqu'à ce qu'il attaque."
      },
      {
        "nom": "Poison de pétale de rêve",
        "tag": "action",
        "texte": "Quand le Lutin réussit une attaque standard, vous pouvez dépenser une Peur pour rendre la cible Somnolente jusqu'à ce qu'elle subisse des dégâts. Tant qu'elle est Somnolente, la cible doit faire un jet de réaction de Présence avant de faire un jet d'action. En cas d'échec, elle doit marquer 2 Stress ou s'endormir jusqu'à ce qu'elle subisse des dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "macon-momie",
    "palier": 2,
    "type": "Sbire",
    "categorie": "Momie",
    "nom": "Maçon Momie",
    "description": "Un malheureux ouvrier mort-vivant, désigné par tirage au sort pour murer de l'intérieur la tombe de son impératrice.",
    "motivation": "Ne jamais cesser de travailler, se sacrifier pour l'impératrice",
    "difficulte": 12,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": -1,
    "attaqueStandard": "Marteau et ciseau : mêlée, 5 phy",
    "experience": "Bâtisseur +2",
    "aptitudes": [
      {
        "nom": "Sbire (5)",
        "tag": "passive",
        "texte": "Le Maçon est vaincu dès que il subit des dégâts. Pour chaque tranche de 5 dégâts qu'un PJ inflige au Maçon, il vainc un Sbire supplémentaire à portée contre lequel l'attaque aurait réussi."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir une cible et mettre en avant tous les Maçons ensevelis à courte portée de celle-ci. Ces Sbires se déplacent au Corps à corps de la cible et font un seul jet d'attaque partagé. En cas de succès, ils infligent chacun 5 dégâts physiques. Additionnez ces dégâts."
      },
      {
        "nom": "Le travail ne s'arrête jamais",
        "tag": "réaction",
        "texte": "Quand le Maçon est vaincu par une attaque qui inflige des dégâts physiques, vous pouvez dépenser une Peur pour effacer les PB et le Stress du Maçon."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "mange-rouille",
    "palier": 2,
    "type": "Standard",
    "categorie": "Insecte",
    "nom": "Mange-rouille",
    "description": "Un cafard de la taille d'un poney, couvert d'une chitine corrosive qui transforme le métal en rouille.",
    "motivation": "Éviter la détection, manger de la rouille, flairer le métal",
    "difficulte": 12,
    "seuilMineur": 10,
    "seuilMajeur": 18,
    "blessure": 5,
    "stress": 2,
    "modAttaque": 1,
    "attaqueStandard": "Morsure : mêlée, 2d6+4 phy",
    "experience": "Reniflement +3",
    "aptitudes": [
      {
        "nom": "Phéromones suffocantes",
        "tag": "passive",
        "texte": "Un PJ qui fait un jet d'action à très courte portée du Mange-rouille doit réussir un jet de réaction d'Instinct ou marquer un Stress."
      },
      {
        "nom": "Toucher de rouille",
        "tag": "passive",
        "texte": "La carapace du Mange-rouille est couverte d'un acide corrosif qui ronge et rouille le métal. Quand un PJ au Corps à corps du Mange-rouille réussit une attaque contre lui avec une arme en métal, réduisez le dé de dégâts de l'arme d'un cran (par exemple d8 en d6 ou d6 en d4). Si le dé de dégâts d'une arme est réduit en dessous d'un d4, l'arme tombe en rouille. Le Mange-rouille dévore alors le tas de rouille et efface un PB."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "marcheur-de-la-ruche",
    "palier": 2,
    "type": "Standard",
    "categorie": "Insecte",
    "nom": "Marcheur de la ruche",
    "description": "Un cadavre rempli et animé par une colonie d'abeilles charognardes.",
    "motivation": "Enrober ses proies de miel, protéger la ruche",
    "difficulte": 12,
    "seuilMineur": 11,
    "seuilMajeur": 24,
    "blessure": 3,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Poing putride : mêlée, 2d6+3 phy",
    "experience": "Mangeur de viande +2",
    "aptitudes": [
      {
        "nom": "Miel de sang",
        "tag": "action",
        "texte": "Le Marcheur régurgite un miel cramoisi épais sur toutes les cibles entre lui et un point à courte portée. Chaque cible sur cette ligne doit réussir un jet de réaction d'Agilité ou subir 2d8 dégâts magiques et devenir temporairement Bloquée tandis que le miel durcit sur elle."
      },
      {
        "nom": "Éruption d'abeilles",
        "tag": "réaction",
        "texte": "Quand le Marcheur marque des PB, des abeilles vengeresses jaillissent de son corps pour le protéger. Chaque cible à très courte portée doit réussir un jet de réaction d'Instinct ou subir 1d8 dégâts physiques directs pour chaque PB que le Marcheur a marqué. Les cibles Bloquées échouent automatiquement au jet de réaction."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "metamorphe-guahalan",
    "palier": 2,
    "type": "Standard",
    "categorie": "Guahalan",
    "nom": "Métamorphe guahalan",
    "description": "Un guerrier masqué métamorphe aux traits animaux.",
    "motivation": "Fuir, tirer profit, jeter de la poudre aux yeux",
    "difficulte": 15,
    "seuilMineur": 9,
    "seuilMajeur": 18,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Massue de guerre : mêlée, 2d8+4 phy",
    "experience": "Chasseur +2, Trappeur +2",
    "aptitudes": [
      {
        "nom": "Libérer la bête",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Métamorphe adopte une forme plus bestiale. Sous cette forme, il gagne un bonus aux jets d'attaque et de dégâts égal au nombre de Stress il a marqués. De plus, il peut se déplacer jusqu'à longue portée au lieu de courte portée avant d'agir."
      },
      {
        "nom": "Attaque de meute",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque standard. En cas de succès, l'attaque gagne un bonus aux dégâts égal au nombre d'autres Métamorphes à très courte portée de la cible."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "necropretre-momie",
    "palier": 2,
    "type": "Soutien",
    "categorie": "Momie",
    "nom": "Nécroprêtre Momie",
    "description": "Un nécromancien chargé de préserver la vie de l'impératrice au-delà de la mort.",
    "motivation": "Renforcer ses alliés, conquérir le temps, immobiliser les ennemis, servir l'impératrice, manier la mort comme une arme",
    "difficulte": 13,
    "seuilMineur": 8,
    "seuilMajeur": 16,
    "blessure": 3,
    "stress": 7,
    "modAttaque": 2,
    "attaqueStandard": "Trait de mort : longue, 2d6+2 mag",
    "experience": "Magie noire +4, Protéger +2",
    "aptitudes": [
      {
        "nom": "Revigorer",
        "tag": "action",
        "texte": "Marquez un Stress pour choisir jusqu'à trois alliés à longue portée. Chacun gagne l'avantage à son prochain jet d'attaque."
      },
      {
        "nom": "Dernière étreinte",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir un PJ à longue portée. Des mains squelettiques jaillissent du sol aux pieds du PJ et l'Entravent jusqu'à ce qu'il se libère avec un jet de Force réussi. Quand une cible Bloquée de cette façon dépense de l'Espoir, vous gagnez une Peur."
      },
      {
        "nom": "Toucher glacial",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque standard contre une cible au Corps à corps. En cas de succès, la cible subit les dégâts standard et doit marquer 1d4 Stress. Si la cible marque son dernier Stress à cause de cette attaque, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "nuee-de-corbeaux-decharne-3-pb",
    "palier": 2,
    "type": "Horde",
    "categorie": "Mort-vivant",
    "nom": "Nuée de corbeaux décharné (3/PB)",
    "description": "Une nuée de cadavres de corbeaux morts-vivants, les yeux brillants d'une lueur nécroplasmique.",
    "motivation": "Croasser sans cesse, griffer les visages, voleter dans les airs, picorer les yeux",
    "difficulte": 14,
    "seuilMineur": 10,
    "seuilMajeur": 20,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 0,
    "attaqueStandard": "Becs et griffes : mêlée, 2d6+2 mag",
    "experience": "Voler +2, Essaim +2",
    "aptitudes": [
      {
        "nom": "Horde (1d6+1)",
        "tag": "passive",
        "texte": "Quand la Nuée a marqué la moitié ou plus de ses PB, son attaque standard inflige 1d6+1 dégâts magiques à la place."
      },
      {
        "nom": "Cacophonie démente",
        "tag": "action",
        "texte": "Marquez un Stress pour forcer chaque PJ à très courte portée à faire un jet de réaction d'Instinct. Les cibles qui échouent doivent dépenser un Espoir ou devenir Vulnérables jusqu'à ce qu'elles infligent des dégâts à la Nuée ou que la Nuée soit vaincue."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "ours-oie",
    "palier": 2,
    "type": "Cogneur",
    "categorie": "Bête",
    "nom": "Ours-oie",
    "description": "Un grizzly au pelage de plumes et à la tête d'oie géante.",
    "motivation": "Pousser les proies dans une embuscade, se battre jusqu'à la mort, chasser en couple",
    "difficulte": 15,
    "seuilMineur": 14,
    "seuilMajeur": 28,
    "blessure": 7,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Dents d'oie et griffes d'ours : très courte, 2d12+2 phy",
    "experience": "Sens aiguisés +3, Étangs +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "L'Ours-oie peut être mis en avant jusqu'à deux fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Double frappe",
        "tag": "action",
        "texte": "Marquez un Stress pour faire deux attaques standard. Si les deux attaques réussissent contre la même cible, additionnez les dégâts."
      },
      {
        "nom": "Cri terrifiant",
        "tag": "action",
        "texte": "Dépensez une Peur pour que l'Ours-oie lance un terrifiant cri d'oie à vous percer les tympans. Chaque PJ à courte portée doit faire un jet de réaction de Présence. Les cibles qui échouent doivent marquer un Stress, s'éloigner de l'Ours-oie jusqu'à longue portée et devenir Vulnérables jusqu'à ce que l'Ours-oie leur inflige des dégâts. Les cibles qui réussissent doivent marquer un Stress ou s'éloigner de l'Ours-oie jusqu'à longue portée."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "pangolin-sinistre",
    "palier": 2,
    "type": "Cogneur",
    "categorie": "Bête",
    "nom": "Pangolin sinistre",
    "description": "Un hybride pangolin-coati de la taille d'un carrosse, couvert de plaques d'armure. Il se sert de sa queue en lame pour projeter des écailles tranchantes comme des rasoirs.",
    "motivation": "S'enfuir avec un repas, trancher et hacher, foncer dans le danger",
    "difficulte": 14,
    "seuilMineur": 14,
    "seuilMajeur": 28,
    "blessure": 7,
    "stress": 4,
    "modAttaque": 2,
    "attaqueStandard": "Coup de queue : très courte, 2d12+3 phy",
    "experience": "Escalade +3, Pistage olfactif +3",
    "aptitudes": [
      {
        "nom": "Mangeur d'armure",
        "tag": "passive",
        "texte": "Quand le Pangolin sinistre réussit une attaque contre un PJ, ce PJ doit marquer un emplacement d'Armure supplémentaire pour réduire la gravité des dégâts."
      },
      {
        "nom": "Toupie tranchante",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Pangolin sinistre tournoie rapidement sur lui-même. Chaque cible à très courte portée doit réussir un jet de réaction d'Agilité ou subir 2d8 dégâts physiques."
      },
      {
        "nom": "Jet de lame",
        "tag": "action",
        "texte": "Marquez un Stress pour que le Pangolin sinistre fasse claquer sa queue et projette une plaque d'armure tranchante comme un rasoir. Faites une attaque contre une cible à longue portée. En cas de succès, l'attaque inflige 2d6+10 dégâts physiques."
      },
      {
        "nom": "Écailles de kératine",
        "tag": "réaction",
        "texte": "Quand le Pangolin sinistre devrait marquer des PB à cause d'une attaque, vous pouvez marquer un Stress pour réduire de 1 le nombre de PB qu'il marque."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "pieuvre-geante",
    "palier": 2,
    "type": "Solo",
    "categorie": "Aquatique",
    "nom": "Pieuvre géante",
    "description": "Un invertébré aquatique monstrueux aux huit bras garnis de ventouses et à la mâchoire dure en forme de bec.",
    "motivation": "Écraser et mordre, agripper, harceler les navires, chasser des proies",
    "difficulte": 14,
    "seuilMineur": 13,
    "seuilMajeur": 26,
    "blessure": 10,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Fouet : courte, 2d10 phy",
    "experience": "Intelligente +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "La Pieuvre peut être mise en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour la mettre en avant."
      },
      {
        "nom": "Armée et dangereuse",
        "tag": "passive",
        "texte": "Quand la Pieuvre apparaît pour la première fois, placez un d8 sur ce bloc de stats avec la valeur 8 vers le haut. Quand la Pieuvre réussit une attaque standard contre un PJ, vous pouvez ajouter la valeur du dé aux dégâts infligés. Après avoir ajouté sa valeur à un jet, diminuez la valeur du dé de 1."
      },
      {
        "nom": "Agripper",
        "tag": "action",
        "texte": "Quand la Pieuvre réussit une attaque standard, vous pouvez dépenser une Peur pour qu'elle Agrippe la cible. Tant qu'elle est Agrippée, la cible est Bloquée et Vulnérable jusqu'à ce qu'elle se libère avec un jet de Force ou de Finesse réussi."
      },
      {
        "nom": "Écraser",
        "tag": "action",
        "texte": "Marquez un Stress pour infliger 3d8 dégâts physiques directs à une cible Agrippée par la Pieuvre."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "requin-terrestre",
    "palier": 2,
    "type": "Cogneur",
    "categorie": "Monstre",
    "nom": "Requin terrestre",
    "description": "Un requin quadrupède qui nage à travers le sol.",
    "motivation": "Creuser, jaillir du sol, tourner autour de ses proies",
    "difficulte": 14,
    "seuilMineur": 14,
    "seuilMajeur": 25,
    "blessure": 7,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Morsure : très courte, 2d10+2 phy",
    "experience": "Souterrain +3, Assoiffé de sang +2",
    "aptitudes": [
      {
        "nom": "Fouisseur",
        "tag": "passive",
        "texte": "Le Requin terrestre peut se déplacer dans le sol aussi facilement qu'à la surface. Quand il se déplace, il peut choisir de s'enfouir ou de remonter à la surface. Tant qu'il est sous terre, le Requin terrestre a une résistance à tous les dégâts mais ne peut pas attaquer."
      },
      {
        "nom": "Peau épaisse",
        "tag": "passive",
        "texte": "Quand le Requin terrestre serait forcé de marquer un nombre quelconque de PB, vous pouvez marquer un nombre égal de Stress à la place."
      },
      {
        "nom": "Morsure déchirante",
        "tag": "réaction",
        "texte": "Quand le Requin terrestre réussit une attaque contre un PJ au Corps à corps, vous pouvez dépenser une Peur pour forcer la cible à marquer un emplacement d'Armure sans en recevoir les bénéfices (elle peut tout de même utiliser son armure pour réduire les dégâts)."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "scarabees-sous-cutanes-momie-5-pb",
    "palier": 2,
    "type": "Horde",
    "categorie": "Momie",
    "nom": "Scarabées sous-cutanés Momie (5/PB)",
    "description": "Des scarabées mangeurs de chair qui s'enfouissent sous la peau.",
    "motivation": "Recouvrir le sol, consommer les vivants, ramper sous les vêtements",
    "difficulte": 14,
    "seuilMineur": 10,
    "seuilMajeur": 20,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 0,
    "attaqueStandard": "Pinces : mêlée, 2d8+2 phy",
    "experience": "Tombes +3",
    "aptitudes": [
      {
        "nom": "Horde (2d4+1)",
        "tag": "passive",
        "texte": "Quand les Scarabées ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige 2d4+1 dégâts physiques à la place."
      },
      {
        "nom": "Omophage",
        "tag": "action",
        "texte": "Marquez un PB pour que 5 Scarabées s'enfouissent sous la peau d'un PJ au Corps à corps, le forçant à marquer un Stress et l'Infectant. Tant qu'elle est Infectée, la cible subit 6 dégâts physiques directs chaque fois qu'elle fait un jet avec Peur. Cet état est levé quand le PJ efface un PB ou un Stress."
      },
      {
        "nom": "Élan",
        "tag": "réaction",
        "texte": "Quand les Scarabées réussissent une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "seigneur-croc-guahalan",
    "palier": 2,
    "type": "Meneur",
    "categorie": "Guahalan",
    "nom": "Seigneur croc guahalan",
    "description": "Un seigneur de guerre métamorphe qui mène un groupe de guerriers au combat.",
    "motivation": "Galvaniser ses alliés, mener la meute, rallier les troupes",
    "difficulte": 16,
    "seuilMineur": 12,
    "seuilMajeur": 24,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "Lance : très courte, 2d8+4 phy",
    "experience": "Savoir ancien +2, Chasseur +2",
    "aptitudes": [
      {
        "nom": "Alpha de la meute",
        "tag": "passive",
        "texte": "Réserve. Quand le Seigneur croc réussit une attaque, ajoutez un jeton à la Réserve guahalan. Quand un allié guahalan à courte portée fait une attaque, vous pouvez dépenser un jeton de la Réserve guahalan pour lui donner l'avantage au jet."
      },
      {
        "nom": "Libérer la bête",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Seigneur croc adopte une forme plus bestiale. Sous cette forme, il gagne un bonus aux jets d'attaque et de dégâts égal au nombre de Stress il a marqués. De plus, il peut se déplacer jusqu'à longue portée au lieu de courte portée avant d'agir."
      },
      {
        "nom": "Appel des Guahala",
        "tag": "action",
        "texte": "Dépensez 2 Peur pour mettre en avant tous les Métamorphes guahalan à courte portée. Chacun fait une attaque standard contre une cible à portée. Si des attaques réussissent contre la même cible, additionnez leurs dégâts."
      },
      {
        "nom": "Forme sauvage (Changement de phase)",
        "tag": "réaction",
        "texte": "Quand le Seigneur croc marque son dernier PB, remplacez-le par l'Alebrujo guahalan et mettez-le immédiatement en avant."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "sporelet-spongieux",
    "palier": 2,
    "type": "Sbire",
    "categorie": "Plante",
    "nom": "Sporelet Spongieux",
    "description": "Une créature champignon de la taille d'un halfelin qui se défend contre ses assaillants avec de minuscules bouffées de spores neurotoxiques.",
    "motivation": "Éviter la violence, asperger ses assaillants",
    "difficulte": 13,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": -1,
    "attaqueStandard": "Neurospore : très courte, 4 mag",
    "experience": "Obscurité +3",
    "aptitudes": [
      {
        "nom": "Sbire (6)",
        "tag": "passive",
        "texte": "Le Sporelet est vaincu dès que il subit des dégâts. Pour chaque tranche de 6 dégâts qu'un PJ inflige au Sporelet, il vainc un Sbire supplémentaire à portée contre lequel l'attaque aurait réussi."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir une cible et mettre en avant tous les Sporelets fungispunj à courte portée de celle-ci. Ces Sbires se déplacent au Corps à corps de la cible et font un seul jet d'attaque partagé. En cas de succès, ils infligent chacun 4 dégâts magiques. Additionnez ces dégâts."
      },
      {
        "nom": "Se rassembler",
        "tag": "action",
        "texte": "Dépensez une Peur pour combiner trois Sporelets dans une zone à courte portée et les remplacer par un Sporophore fungispunj."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "sporophore-spongieux",
    "palier": 2,
    "type": "Meneur",
    "categorie": "Plante",
    "nom": "Sporophore Spongieux",
    "description": "Une créature champignon géante capable de commander les morts.",
    "motivation": "Éveiller les défunts, défendre la colonie, répandre les spores",
    "difficulte": 16,
    "seuilMineur": 12,
    "seuilMajeur": 24,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "Poing spongieux : très courte, 2d8+4 phy",
    "experience": "Commandant +5, Gardien +4",
    "aptitudes": [
      {
        "nom": "Nuage de spores neurotoxiques",
        "tag": "action",
        "texte": "Marquez un Stress pour que le Sporophore asperge d'un nuage de spores toutes les cibles à courte portée. Chaque PJ doit réussir un jet de réaction d'Agilité ou devenir Empoisonné jusqu'à ce qu'il dépense un Espoir pour lever l'état. Tant qu'elle est Empoisonnée, la cible doit lancer un d6 avant de faire un jet d'action. Sur un résultat de 4 ou moins, elle doit marquer un Stress."
      },
      {
        "nom": "Réanimateur",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Sporophore asperge un cadavre à très courte portée d'un nuage de spores psychiques. Le cadavre efface tous ses PB et son Stress, puis se réanime sous le contrôle psychique du Sporophore. Quand le Sporophore est mis en avant, vous pouvez aussi mettre en avant tous les cadavres qu'il contrôle."
      },
      {
        "nom": "Colonie",
        "tag": "action",
        "texte": "Marquez n'importe quel nombre de Stress pour que le Sporophore invoque un nombre égal de Sporelets fungispunj à courte portée."
      },
      {
        "nom": "Fusion des esprits",
        "tag": "réaction",
        "texte": "Tous les Fungispunj peuvent communiquer par télépathie. Quand le Sporophore serait forcé de marquer du Stress à cause d'une attaque, il peut faire marquer ce Stress à la place à des alliés Fungispunj de la scène, réparti entre eux comme il le souhaite."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "titan-de-pierre",
    "palier": 2,
    "type": "Solo",
    "categorie": "Géant",
    "nom": "Titan de pierre",
    "description": "Un colosse à la peau grise qui vit sous terre et se spécialise dans la fabrication d'objets puissants incrustés de runes magiques.",
    "motivation": "Se fondre dans les rochers, fabriquer et contempler, poursuivre prophétie et solitude",
    "difficulte": 17,
    "seuilMineur": 17,
    "seuilMajeur": 32,
    "blessure": 5,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Marteau de pierre : très courte, 3d6+8 phy",
    "experience": "Artisanat +3, Runes +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Titan peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Frappe habile",
        "tag": "passive",
        "texte": "Avant que le Titan ne fasse une attaque, vous pouvez marquer un Stress et lancer un d6. Sur un résultat de 3 ou plus, l'Esquive de la cible est réduite de moitié contre cette attaque."
      },
      {
        "nom": "Mal du soleil",
        "tag": "passive",
        "texte": "Quand le Titan apparaît pour la première fois à la surface, lancez un d4. Marquez un nombre de Stress égal au résultat. Le Titan gagne un bonus à ses jets d'attaque et de dégâts égal au nombre de Stress marqués."
      },
      {
        "nom": "Fracas de marteau",
        "tag": "action",
        "texte": "Quand un PJ marque des PB à cause de l'attaque standard du Titan, vous pouvez dépenser une Peur pour forcer la cible à marquer un emplacement d'Armure sans en recevoir les bénéfices (elle peut tout de même utiliser son armure pour réduire les dégâts)."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "titan-des-collines",
    "palier": 2,
    "type": "Solo",
    "categorie": "Géant",
    "nom": "Titan des collines",
    "description": "Un colosse vêtu de peaux d'animaux et entouré d'un essaim d'insectes.",
    "motivation": "Manger, faire du désordre, patrouiller sur son territoire",
    "difficulte": 14,
    "seuilMineur": 13,
    "seuilMajeur": 26,
    "blessure": 10,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Souche d'arbre : très courte, 2d10+4 phy",
    "experience": "Survie +3, Rancunier +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Titan peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Crédule",
        "tag": "passive",
        "texte": "Les PJ ont l'avantage aux jets d'action pour duper le Titan ou le manipuler émotionnellement."
      },
      {
        "nom": "Essaim d'insectes",
        "tag": "passive",
        "texte": "Les PJ sont Vulnérables à très courte portée."
      },
      {
        "nom": "Balayage puissant",
        "tag": "action",
        "texte": "Dépensez une Peur pour faire une attaque standard contre toutes les cibles à très courte portée."
      },
      {
        "nom": "Élan",
        "tag": "réaction",
        "texte": "Quand le Titan réussit une attaque contre un PJ, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "triceratops",
    "palier": 2,
    "type": "Cogneur",
    "categorie": "Bête",
    "nom": "Tricératops",
    "description": "Un grand dinosaure à la collerette cuirassée et aux trois cornes.",
    "motivation": "Manger des fougères, se déplacer en troupeau pour se protéger, patrouiller au point d'eau",
    "difficulte": 15,
    "seuilMineur": 14,
    "seuilMajeur": 28,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "Cornes : très courte, 2d10+4 phy",
    "experience": "Défenseur +3",
    "aptitudes": [
      {
        "nom": "Cuir épais",
        "tag": "passive",
        "texte": "Quand le Tricératops serait forcé de marquer des PB, vous pouvez marquer n'importe quel nombre de Stress au lieu d'un nombre égal de PB."
      },
      {
        "nom": "Coup de queue",
        "tag": "action",
        "texte": "Marquez un Stress pour choisir jusqu'à trois cibles à très courte portée. Chaque cible doit faire un jet de réaction d'Agilité. Celles qui échouent subissent 5d6 dégâts physiques. Celles qui réussissent subissent la moitié des dégâts."
      },
      {
        "nom": "Charge",
        "tag": "action",
        "texte": "Marquez un Stress pour choisir une cible à courte portée. Le Tricératops se déplace au Corps à corps de la cible et fait une attaque. En cas de succès, infligez 3d10 dégâts physiques directs."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "tyrannosaure",
    "palier": 2,
    "type": "Cogneur",
    "categorie": "Bête",
    "nom": "Tyrannosaure",
    "description": "Un immense dinosaure carnivore qui marche sur deux pattes.",
    "motivation": "Traverser la lisière de la forêt, manger, piétiner les environs",
    "difficulte": 15,
    "seuilMineur": 14,
    "seuilMajeur": 28,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "Puissantes Morsure : très courte, 2d10+4 phy",
    "experience": "Prédateur +3",
    "aptitudes": [
      {
        "nom": "Rugissement qui fait trembler la terre",
        "tag": "action",
        "texte": "Dépensez une Peur pour forcer chaque PJ à courte portée à faire un jet de réaction de Présence. En cas d'échec, il doit choisir de perdre un Espoir ou de marquer 1d4 Stress."
      },
      {
        "nom": "Piétinement",
        "tag": "action",
        "texte": "Marquez un Stress pour attaquer une cible au Corps à corps. En cas de succès, la cible subit 3d12 dégâts physiques directs."
      },
      {
        "nom": "Morsure écrasante",
        "tag": "réaction",
        "texte": "Quand le Tyrannosaure réussit une attaque standard, vous pouvez dépenser une Peur pour forcer la cible à marquer 1 PB supplémentaire."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "urco",
    "palier": 2,
    "type": "Standard",
    "categorie": "Esprit",
    "nom": "Urco",
    "description": "Un chien au pelage noir venu d'au-delà du voile de la mort, qui présage la mort et se nourrit de peur.",
    "motivation": "Se nourrir, effrayer, chasser",
    "difficulte": 15,
    "seuilMineur": 9,
    "seuilMajeur": 18,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Croc noir : mêlée, 2d8+4 mag",
    "experience": "Présages +3, Discrétion +3",
    "aptitudes": [
      {
        "nom": "Semeur de peur",
        "tag": "passive",
        "texte": "Quand un PJ à très courte portée échoue avec Espoir, vous gagnez une Peur."
      },
      {
        "nom": "Alimenté par la terreur",
        "tag": "passive",
        "texte": "L'Urco gagne un bonus aux jets d'attaque et de dégâts égal au nombre de Peur que vous avez."
      },
      {
        "nom": "Mangeur de peur",
        "tag": "action",
        "texte": "Dépensez n'importe quel nombre de Peur pour effacer le même nombre de Stress. Si l'Urco n'a aucun Stress marqué, vous pouvez dépenser n'importe quel nombre de Peur pour effacer le même nombre de PB."
      },
      {
        "nom": "Regard funeste",
        "tag": "réaction",
        "texte": "Quand l'Urco subit des dégâts d'une attaque, vous pouvez dépenser une Peur pour infliger aux seuils de dégâts de l'attaquant une pénalité de -1 jusqu'à la fin de la scène. Cet effet se cumule."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "valdenhax",
    "palier": 2,
    "type": "Meneur",
    "categorie": "Fée",
    "nom": "Valdenhax",
    "description": "Une sorcière malveillante des forêts, aux longs cheveux moussus, qui vole dans les airs sur un mortier et un pilon surdimensionnés.",
    "motivation": "Collecter des âmes, voler, tourmenter les intrus",
    "difficulte": 16,
    "seuilMineur": 12,
    "seuilMajeur": 24,
    "blessure": 6,
    "stress": 4,
    "modAttaque": 2,
    "attaqueStandard": "Pilon de pierre géant : mêlée, 2d8+2 phy",
    "experience": "Sorcellerie +3",
    "aptitudes": [
      {
        "nom": "À moi, mes jolis",
        "tag": "action",
        "texte": "Une fois par scène, invoquez 2d4 Hordes de palier 2, qui apparaissent à longue portée. Vous gagnez une Peur pour chaque Horde ainsi invoquée."
      },
      {
        "nom": "Étrangleuse d'ombre",
        "tag": "action",
        "texte": "Marquez un Stress pour attaquer une cible à longue portée. En cas de succès, l'ombre de la main de la Valdenhax s'étire sur le sol jusqu'à saisir l'ombre de la cible et en drainer l'essence. La cible marque 1d4 Stress et vous gagnez autant de Peur."
      },
      {
        "nom": "Chuchoteuse de cadavres",
        "tag": "action",
        "texte": "Dépensez une Peur pour que la Valdenhax appelle l'esprit persistant d'un allié tombé à courte portée. Lancez un d6. Sur un résultat pair, la Valdenhax ressuscite l'allié avec la moitié de ses PB effacés. Sur un résultat impair, la Valdenhax absorbe les restes de sa force vitale et efface un Stress."
      },
      {
        "nom": "Mot irritant",
        "tag": "réaction",
        "texte": "Après qu'un PJ a fait un jet, vous pouvez marquer un Stress pour le forcer à le relancer. Cette aptitude ne peut pas être utilisée si le PJ réussit de manière critique."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "archimage",
    "palier": 3,
    "type": "Solo",
    "categorie": "Royaume",
    "nom": "Archimage",
    "description": "Un chercheur de savoirs secrets, caché dans une tour remplie de tomes.",
    "motivation": "Corrompre, détruire, écraser par un pouvoir maléfique",
    "difficulte": 18,
    "seuilMineur": 24,
    "seuilMajeur": 45,
    "blessure": 5,
    "stress": 8,
    "modAttaque": 5,
    "attaqueStandard": "Grand bâton de l'Archimage : longue, 3d10 mag",
    "experience": "Ésotérisme +4",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "L'Archimage peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Égide orbitale",
        "tag": "passive",
        "texte": "Quand l'Archimage apparaît, il conjure six disques d'énergie magique qui orbitent autour de lui. Placez un dé d6 d'Égide sur ce bloc de stats avec la valeur 6 vers le haut. Quand un PJ réussit une attaque contre l'Archimage, lancez un d6. Si le résultat est inférieur ou égal à la valeur du dé d'Égide, faites baisser le dé d'Égide d'un cran et ignorez les dégâts. Un PJ peut faire un jet de Connaissance pour faire baisser le dé d'Égide de 1 en cas de succès ou de 2 en cas de succès avec Espoir."
      },
      {
        "nom": "Salve de force",
        "tag": "action",
        "texte": "Dépensez n'importe quel nombre de Peur et lancez autant de d4. L'Archimage déchaîne un nombre de projectiles de force magiques à tête chercheuse égal au résultat total. Pour chaque projectile, une créature à longue portée marque un PB. La même créature peut être ciblée par jusqu'à trois projectiles de force."
      },
      {
        "nom": "Boule de feu",
        "tag": "action",
        "texte": "Marquez n'importe quel nombre de Stress pour cibler le même nombre de PJ à longue portée. Chaque cible doit réussir un jet de réaction d'Agilité ou subir 4d10 dégâts magiques."
      },
      {
        "nom": "Contresort",
        "tag": "réaction",
        "texte": "Quand un PJ réussit un jet d'incantation, vous pouvez dépenser une Peur pour que l'Archimage fasse un jet de réaction avec une Difficulté égale au résultat du jet d'incantation. En cas de succès, le jet d'incantation du PJ échoue à la place, et vous placez un jeton sur ce bloc de stats. Réutiliser cette aptitude coûte un nombre de Peur supplémentaire égal au nombre de jetons sur ce bloc de stats. Vous ne pouvez pas contrer un succès critique."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "baudroie-geante",
    "palier": 3,
    "type": "Traqueur",
    "categorie": "Aquatique",
    "nom": "Baudroie géante",
    "description": "Une immense créature aquatique qui attire les proies imprudentes à portée de ses mâchoires avec sa tige frontale pendante et métamorphe.",
    "motivation": "Appâter avec des savoirs secrets, refermer le piège, parler par une tige frontale transformée",
    "difficulte": 16,
    "seuilMineur": 16,
    "seuilMajeur": 32,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Morsure : mêlée, 3d8+2 phy",
    "experience": "Charme +3, Secrets +3",
    "aptitudes": [
      {
        "nom": "Appât-sosie",
        "tag": "action",
        "texte": "La grappe membraneuse au bout de la tige frontale du Berneur peut prendre n'importe quelle forme humanoïde. Marquez un Stress pour choisir un PJ à courte portée. Son joueur doit vous dire qui son PJ trouverait le plus digne de confiance. La tige frontale du Berneur se transforme en cette personne et acquiert la capacité de parler avec sa voix."
      },
      {
        "nom": "Appâter",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Berneur fasse une proposition séduisante à un PJ à courte portée. Le PJ doit réussir un jet de réaction de Présence (18) ou se déplacer au Corps à corps du Berneur. Si la tige frontale du Berneur est transformée en une personne que le PJ trouverait digne de confiance, il a le désavantage au jet de réaction."
      },
      {
        "nom": "Engloutir",
        "tag": "réaction",
        "texte": "Quand un PJ se déplace au Corps à corps, vous pouvez dépenser une Peur pour faire un jet d'attaque contre lui. En cas de succès, la cible subit 3d6 dégâts physiques et est Avalée. Tant qu'elle est Avalée, la cible est Bloquée et subit 3d6 dégâts physiques quand le Berneur prend la mise en avant. Le Berneur recrache toutes les créatures Avalées quand il subit des dégâts Majeurs ou Grave."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "dandy",
    "palier": 3,
    "type": "Social",
    "categorie": "Mort-vivant",
    "nom": "Dandy",
    "description": "Un squelette somptueusement paré, doté d'un appétit sans fin pour l'or.",
    "motivation": "Dominer la conversation, chercher l'attention, tout voler",
    "difficulte": 17,
    "seuilMineur": 20,
    "seuilMajeur": 32,
    "blessure": 5,
    "stress": 6,
    "modAttaque": 3,
    "attaqueStandard": "Flamme spirituelle : longue, 3d8+5 mag",
    "experience": "Opulence +2, Conteur +2",
    "aptitudes": [
      {
        "nom": "Attirée par la richesse",
        "tag": "passive",
        "texte": "Les PJ qui transportent au moins un sac d'or ont l'avantage aux jets de Présence faits pour influencer la Catrin."
      },
      {
        "nom": "Le poids de l'opulence",
        "tag": "action",
        "texte": "Dépensez une Peur pour tourner le regard de la Catrin vers le PJ qui porte le plus d'or. La cible doit réussir un jet de réaction d'Instinct ou perdre un Espoir pour chaque sac d'or qu'elle porte. Si le PJ perd son dernier Espoir ou n'a pas d'Espoir à perdre, il marque du Stress à la place."
      },
      {
        "nom": "Échec coûteux",
        "tag": "réaction",
        "texte": "Quand un PJ au Corps à corps échoue à un jet d'action, vous pouvez marquer un Stress pour que la Catrin lui dérobe sans vergogne une poignée d'or."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "chimere",
    "palier": 3,
    "type": "Cogneur",
    "categorie": "Monstre",
    "nom": "Chimère",
    "description": "Un monstre gigantesque cracheur de feu, à la tête de lion, au corps de chèvre et à la queue de serpent.",
    "motivation": "Jouer avec sa nourriture, patrouiller son territoire, massacrer le bétail",
    "difficulte": 17,
    "seuilMineur": 22,
    "seuilMajeur": 40,
    "blessure": 9,
    "stress": 5,
    "modAttaque": 5,
    "attaqueStandard": "Griffes : mêlée, 3d12 phy",
    "experience": "Prédateur +3",
    "aptitudes": [
      {
        "nom": "Mâchoires déchirantes",
        "tag": "passive",
        "texte": "Quand la Chimère réussit une attaque contre un PJ, la cible doit marquer 2 emplacements d'Armure pour réduire la gravité d'un seuil."
      },
      {
        "nom": "Double griffe",
        "tag": "action",
        "texte": "Marquez un Stress pour faire deux attaques standard. Si les deux attaques réussissent contre la même cible, additionnez les dégâts."
      },
      {
        "nom": "Souffle de feu",
        "tag": "action",
        "texte": "Dépensez une Peur pour cibler jusqu'à trois PJ devant la Chimère à courte portée. Chaque cible doit faire un jet de réaction d'Agilité (20). Les cibles qui échouent subissent 3d12 dégâts magiques. Celles qui réussissent doivent choisir de marquer soit un emplacement d'Armure, soit un Stress."
      },
      {
        "nom": "Coup de serpent",
        "tag": "réaction",
        "texte": "Quand un PJ à courte portée cible la Chimère avec une attaque, vous pouvez marquer un Stress pour attaquer le PJ en premier. En cas de succès, infligez 4d4+10 dégâts physiques et Empoisonnez-le jusqu'à son prochain repos ou jusqu'à ce qu'il réussisse un jet de Connaissance (20). Tant qu'il est Empoisonné, la cible doit lancer un d6 avant de faire un jet d'action. Sur un résultat de 3 ou moins, elle doit marquer un Stress."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "cryptimoth",
    "palier": 3,
    "type": "Traqueur",
    "categorie": "Monstre",
    "nom": "Cryptimoth",
    "description": "Une grande créature phalène aux yeux rouges qui marche debout et présage des événements mystérieux ou maléfiques.",
    "motivation": "Faire de l'écholocalisation, voler silencieusement, se fondre dans l'ombre",
    "difficulte": 14,
    "seuilMineur": 16,
    "seuilMajeur": 30,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Griffes : mêlée, 3d8+5 phy",
    "experience": "Sombres présages +3",
    "aptitudes": [
      {
        "nom": "Terrifiant",
        "tag": "passive",
        "texte": "Quand le Cryptimoth réussit une attaque, tous les PJ à courte portée perdent un Espoir et vous gagnez une Peur."
      },
      {
        "nom": "Cri psychique",
        "tag": "action",
        "texte": "Dépensez 2 Peur pour que le Cryptimoth libère une explosion d'énergie psychique qui fait subir à chaque PJ à longue portée des visions de son effroyable destin. Chaque cible doit faire un jet de réaction de Perspicacité (16). Les cibles qui échouent subissent 3d8 dégâts magiques directs et deviennent Vulnérables jusqu'à leur prochain repos. Les cibles qui réussissent doivent marquer un Stress ou subir la moitié des dégâts."
      },
      {
        "nom": "Essaim d'ombres",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Cryptimoth conjure un essaim de créatures d'ombre semblables à des phalènes à longue portée. L'essaim remplit une zone à courte portée et bloque la ligne de vue. Les créatures qui ne sont pas des Cryptimoths sont Vulnérables à l'intérieur de cette zone et doivent marquer un Stress pour la traverser. Un PJ peut dissiper l'essaim avec un jet d'incantation (12) réussi."
      },
      {
        "nom": "Regard paranoïaque",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Cryptimoth plonge son regard dans les yeux d'un PJ à courte portée et le rende Paranoïaque. Tant qu'il est Paranoïaque, le PJ se méfie des autres PJ et ne peut pas Aider un allié ni participer aux jets d'équipe. Pour lever cet état, le PJ doit réussir un jet de Perspicacité (16) ou participer à l'action de temps mort Préparer avec un ou plusieurs membres de son groupe pendant un repos."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "demon-metamorphe",
    "palier": 3,
    "type": "Social",
    "categorie": "Déchu",
    "nom": "Démon métamorphe",
    "description": "Une entité maléfique qui usurpe l'identité d'une personne de confiance.",
    "motivation": "Usurper l'identité, semer la discorde, pousser à la trahison",
    "difficulte": 17,
    "seuilMineur": 20,
    "seuilMajeur": 32,
    "blessure": 4,
    "stress": 8,
    "modAttaque": 3,
    "attaqueStandard": "Lame cachée : mêlée, 3d8+3 phy",
    "experience": "Manipuler +3, Imiter +2",
    "aptitudes": [
      {
        "nom": "Nature démoniaque",
        "tag": "passive",
        "texte": "Le Démon a une résistance aux dégâts magiques et ne peut pas être dupé par des illusions magiques."
      },
      {
        "nom": "Usurper",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Démon se transforme magiquement en un humanoïde avec lequel il a déjà interagi. Un PJ qui cible le Démon alors qu'il a l'apparence d'une personne que le PJ aime doit réussir un jet de réaction d'Instinct, sinon l'attaque échoue et le PJ doit marquer un Stress."
      },
      {
        "nom": "Devenir invisible",
        "tag": "action",
        "texte": "Marquez un Stress pour rendre le Démon Caché jusqu'à ce qu'il fasse un jet d'action ou subisse des dégâts."
      },
      {
        "nom": "Conseil perfide",
        "tag": "réaction",
        "texte": "Quand un PJ fait un jet d'action alors que le Démon est dans la scène, vous pouvez marquer un Stress pour ajouter 1d6 au résultat de son dé de Peur."
      },
      {
        "nom": "Démasqué ! (Changement de phase)",
        "tag": "réaction",
        "texte": "Quand le Démon est vaincu ou que les PJ découvrent sa véritable identité, remplacez le Démon par le Démon métamorphe dévoilé et mettez-le immédiatement en avant."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "demon-metamorphe-demasque",
    "palier": 3,
    "type": "Solo",
    "categorie": "Déchu",
    "nom": "Démon métamorphe Démasqué",
    "description": "Un humanoïde gigantesque à la tête d'insecte et à plusieurs paires d'yeux rouges lumineux.",
    "motivation": "Réclamer des âmes, semer la confusion et la tromperie, s'échapper vers les Cercles inférieurs, se téléporter",
    "difficulte": 17,
    "seuilMineur": 20,
    "seuilMajeur": 32,
    "blessure": 10,
    "stress": 8,
    "modAttaque": 3,
    "attaqueStandard": "Griffes de mante : très courte, 3d12+5 phy",
    "experience": "Lié à l'Enfer +3, Immortel +2",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Démon peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Résistance démoniaque",
        "tag": "passive",
        "texte": "Le Démon a une résistance aux dégâts magiques et ne peut pas être dupé par des illusions magiques."
      },
      {
        "nom": "Rage démoniaque",
        "tag": "action",
        "texte": "Dépensez une Peur pour faire une attaque standard avec un bonus au jet d'attaque égal au Stress que le Démon a marqué. En cas de succès, l'attaque inflige des dégâts directs."
      },
      {
        "nom": "Salle des miroirs",
        "tag": "action",
        "texte": "Marquez 2 Stress pour que le Démon invoque quatre doubles illusoires et active un compte à rebours de Duplicata (4). Quand le Démon est ciblé par une attaque, il gagne un bonus à sa Difficulté égal à la valeur actuelle du dé du compte à rebours. Le compte à rebours avance quand un PJ échoue à une attaque contre le Démon. Quand il arrive à terme, les doubles disparaissent."
      },
      {
        "nom": "Griffe éclair",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Démon libère un arc d'énergie magique. Faites un jet d'attaque contre toutes les cibles à courte portée. Les cibles contre lesquelles l'attaque réussit subissent 3d20 dégâts magiques."
      },
      {
        "nom": "Jeux de l'esprit",
        "tag": "réaction",
        "texte": "Quand une attaque ciblant le Démon depuis une distance supérieure à très courte portée réussit avec Peur, vous pouvez marquer un Stress pour que le Démon échange instantanément sa place avec un PJ à très courte portée. Le PJ subit les dégâts à la place."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "drake",
    "palier": 3,
    "type": "Traqueur",
    "categorie": "Draconien",
    "nom": "Drake",
    "description": "Un quadrupède griffu au corps serpentin recouvert d'écailles, qui se met volontiers au service de ses cousins, les dragons.",
    "motivation": "Enrouler et écraser, protéger son maître, se faufiler dans les antres et les ruines, frapper en premier",
    "difficulte": 14,
    "seuilMineur": 16,
    "seuilMajeur": 30,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 4,
    "attaqueStandard": "Griffes et dents : mêlée, 3d8+5 phy",
    "experience": "Vicieux +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "Le Drake peut être mis en avant jusqu'à deux fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Chien de garde",
        "tag": "réaction",
        "texte": "Quand un PJ s'apprête à infliger des dégâts à une créature à courte portée, vous pouvez marquer un Stress pour que le Drake se déplace afin d'intercepter l'attaque et subisse les dégâts à la place. Si l'attaquant est au Corps à corps de la nouvelle position du Drake, vous pouvez mettre immédiatement le Drake en avant sans dépenser de Peur."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "dullahan",
    "palier": 3,
    "type": "Cogneur",
    "categorie": "Mort-vivant",
    "nom": "Dullahan",
    "description": "Un spectre à cheval tenant sa propre tête tranchée dans une main et brandissant dans l'autre un fouet fait d'une colonne vertébrale humaine.",
    "motivation": "Condamner d'un regard, galoper sur l'eau, donner de lourds coups de sabots",
    "difficulte": 17,
    "seuilMineur": 22,
    "seuilMajeur": 40,
    "blessure": 7,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Fouet d'épine dorsale : très courte, 3d10+1 mag",
    "experience": "Nocturne +3",
    "aptitudes": [
      {
        "nom": "Spectre",
        "tag": "passive",
        "texte": "Le Dullahan a une résistance aux dégâts physiques. Marquez un Stress pour vous déplacer jusqu'à courte portée à travers des objets solides."
      },
      {
        "nom": "Monture spectrale",
        "tag": "passive",
        "texte": "Tant qu'il est en selle, le Dullahan peut se déplacer jusqu'à longue portée au lieu de courte portée avant d'agir. Si le Dullahan est désarçonné, sa monture disparaît jusqu'à ce que vous marquiez un Stress pour la convoquer de nouveau. Le Dullahan est Vulnérable tant qu'il n'est pas sur son cheval."
      },
      {
        "nom": "Frappe du fouet d'os",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre une cible au Corps à corps. En cas de succès, la cible subit 4d4+10 dégâts physiques directs et est Vulnérable jusqu'à ce qu'elle efface un PB."
      },
      {
        "nom": "Regard de la mort",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir un PJ à longue portée. La cible doit faire un jet de réaction de Présence (19). En cas de succès, elle marque un Stress. En cas d'échec, elle marque un PB et active un compte à rebours de Destin funeste (4). Il avance quand le Dullahan est mis en avant. Quand il arrive à terme, la cible fait une action de mort. Si le Dullahan est vaincu ou que les PJ prennent un repos, tous les comptes à rebours de Destin funeste prennent fin."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "enfants-de-la-nuit-2-pb",
    "palier": 3,
    "type": "Horde",
    "categorie": "Monstre",
    "nom": "Enfants de la nuit (2/PB)",
    "description": "Un assortiment grouillant de démons nocturnes sous l'emprise d'un mal ancien.",
    "motivation": "Ramener les victimes au maître, envahir les colonies, ramper dans l'ombre",
    "difficulte": 16,
    "seuilMineur": 17,
    "seuilMajeur": 32,
    "blessure": 7,
    "stress": 4,
    "modAttaque": 1,
    "attaqueStandard": "Crocs et griffes : mêlée, 3d6+8 phy",
    "experience": "Terroriser +3",
    "aptitudes": [
      {
        "nom": "Horde (2d6+2)",
        "tag": "passive",
        "texte": "Quand les Enfants de la nuit ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige 2d6+2 dégâts physiques à la place."
      },
      {
        "nom": "Gonfler les rangs",
        "tag": "action",
        "texte": "Une fois par scène, marquez n'importe quel nombre de Stress pour que les Enfants de la nuit ouvrent un portail qui déverse des renforts et regarnit les rangs de la Horde. Effacez un nombre de PB égal au nombre de Stress marqués."
      },
      {
        "nom": "Submerger",
        "tag": "réaction",
        "texte": "Quand les Enfants de la nuit marquent des PB à cause d'une attaque au Corps à corps, vous pouvez marquer un Stress pour faire une attaque standard contre l'attaquant."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "habitant-des-profondeurs",
    "palier": 3,
    "type": "Meneur",
    "categorie": "Aquatique",
    "nom": "Habitant des profondeurs",
    "description": "Une immense lamproie psychique aux yeux noir de jais et aux tentacules toxiques.",
    "motivation": "Abuser de son pouvoir, chercher l'adoration, traquer les ruines englouties",
    "difficulte": 17,
    "seuilMineur": 22,
    "seuilMajeur": 42,
    "blessure": 6,
    "stress": 6,
    "modAttaque": 5,
    "attaqueStandard": "Dents et tentacules : courte, 3d10+4 phy",
    "experience": "Mystères anciens +2, Eaux sombres +2",
    "aptitudes": [
      {
        "nom": "Explosion psychique",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir jusqu'à trois cibles à courte portée et les forcer à faire un jet de réaction d'Instinct ou de Connaissance. Les cibles qui réussissent marquent un Stress. Les cibles qui échouent subissent 3d10+4 dégâts magiques directs et sont Vulnérables jusqu'à ce qu'elles prennent la mise en avant."
      },
      {
        "nom": "Drain cérébral",
        "tag": "action",
        "texte": "Marquez un Stress pour choisir un PJ Vulnérable à très courte portée. La cible marque 1d4 Stress et l'Habitant des profondeurs efface un nombre égal de PB."
      },
      {
        "nom": "Appel des profondeurs",
        "tag": "action",
        "texte": "Dépensez 2 Peur pour invoquer 1d4 Ondins maudits, qui apparaissent à longue portée et prennent immédiatement la mise en avant."
      },
      {
        "nom": "Contamination muqueuse",
        "tag": "action",
        "texte": "Faites un jet d'attaque contre un PJ à très courte portée. En cas de succès, l'Habitant des profondeurs immobilise la cible avec ses tentacules et la recouvre d'une vase toxique. La cible est Bloquée jusqu'à ce qu'elle se libère ou se dégage avec un jet de Force ou de Finesse réussi. Chaque fois que l'Habitant des profondeurs est mis en avant, tous les PJ ainsi Bloqués subissent 3d8 dégâts physiques directs. L'Habitant des profondeurs libère toutes les créatures qu'il a Bloquées quand il est vaincu ou subit des dégâts Grave."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "jeune-dragon-de-feu",
    "palier": 3,
    "type": "Solo",
    "categorie": "Draconien",
    "nom": "Jeune dragon de feu",
    "description": "Un dragon cramoisi aux quatre membres puissants et aux ailes fumantes.",
    "motivation": "Brûler, défendre son antre, entrer en éruption, voler, déchiqueter, prendre",
    "difficulte": 18,
    "seuilMineur": 21,
    "seuilMajeur": 34,
    "blessure": 10,
    "stress": 6,
    "modAttaque": 7,
    "attaqueStandard": "Morsure et griffes : courte, 4d10 phy",
    "experience": "Rage ardente +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Dragon peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Intimidant",
        "tag": "passive",
        "texte": "Quand vous dépensez une Peur pour mettre le Dragon en avant, tous les PJ à courte portée doivent marquer un Stress ou perdre un Espoir."
      },
      {
        "nom": "Souffle de flammes",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Dragon déchaîne un souffle de flammes sur toutes les cibles devant lui à courte portée. Chaque cible doit faire un jet de réaction d'Agilité. Les cibles qui échouent subissent 4d8+3 dégâts magiques. Les cibles qui réussissent doivent marquer un Stress ou subir la moitié des dégâts. Une cible qui marque des PB à cause de cette attaque devient aussi Vulnérable jusqu'à ce qu'elle efface un PB."
      },
      {
        "nom": "Éruption",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Dragon fende la terre d'un coup de queue, déclenchant une explosion de lave. Choisissez un point à longue portée. Chaque PJ sur la ligne entre le Dragon et le point choisi doit réussir un jet de réaction d'Agilité ou être brûlé et devenir Vulnérable jusqu'à son prochain repos. Vous gagnez une Peur pour chaque PJ qui échoue."
      },
      {
        "nom": "Écailles ardentes",
        "tag": "réaction",
        "texte": "Quand une créature à très courte portée attaque le Dragon, l'attaquant doit marquer un Stress."
      },
      {
        "nom": "Taillade et brûlure",
        "tag": "réaction",
        "texte": "Quand le Dragon réussit une attaque standard, vous gagnez une Peur et pouvez marquer un Stress pour que l'attaque inflige 10 dégâts magiques supplémentaires."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "lamie",
    "palier": 3,
    "type": "Traqueur",
    "categorie": "Monstre",
    "nom": "Lamie",
    "description": "Un monstre humanoïde à queue de serpent qui rôde la nuit pour absorber l'énergie vitale des dormeurs.",
    "motivation": "Attaquer les imprudents, éviter la lumière du soleil, drainer la force vitale, endormir, se faufiler dans les hautes herbes",
    "difficulte": 17,
    "seuilMineur": 18,
    "seuilMajeur": 35,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Dague courbe : mêlée, 3d8+4 phy",
    "experience": "Serpentine +3",
    "aptitudes": [
      {
        "nom": "Constriction",
        "tag": "action",
        "texte": "Marquez un Stress pour que la Lamie enroule sa queue autour d'un PJ au Corps à corps et serre. La cible doit réussir un jet de réaction de Finesse ou devenir Étreinte jusqu'à ce que la Lamie se déplace ou subisse des dégâts Majeurs ou supérieurs. Tant qu'elle est Étreinte, la cible est Bloquée et doit marquer un Stress quand la Lamie prend la mise en avant."
      },
      {
        "nom": "Drain de vie",
        "tag": "action",
        "texte": "Marquez un Stress pour forcer une cible Vulnérable ou Bloquée au Corps à corps à marquer 1d4-1 PB. La Lamie efface alors un nombre égal de PB."
      },
      {
        "nom": "Toxine soporifique",
        "tag": "réaction",
        "texte": "Quand la Lamie réussit une attaque standard contre un PJ, vous pouvez dépenser une Peur pour le rendre Vulnérable jusqu'à ce qu'il réussisse un jet d'Instinct (19)."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "lapin-cramoisi",
    "palier": 3,
    "type": "Solo",
    "categorie": "Bête",
    "nom": "Lapin cramoisi",
    "description": "Un lapin aux yeux rouges qui ne pense qu'au meurtre.",
    "motivation": "Être mignon, viser la gorge, sautiller",
    "difficulte": 18,
    "seuilMineur": 20,
    "seuilMajeur": 35,
    "blessure": 10,
    "stress": 6,
    "modAttaque": 3,
    "attaqueStandard": "Morsure bondissante : très courte, 3d20 phy",
    "experience": "Vicieux +4",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Lapin peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "« Aww... »",
        "tag": "passive",
        "texte": "Quand le Lapin apparaît pour la première fois, il est Trop mignon. Pour attaquer une créature Trop mignonne, un PJ doit réussir un jet de réaction d'Instinct (20). Levez l'état Trop mignon si un PJ inflige des dégâts au Lapin ou si le Lapin attaque un PJ."
      },
      {
        "nom": "Terrifiant",
        "tag": "passive",
        "texte": "Quand le Lapin réussit une attaque, tous les PJ à courte portée perdent un Espoir et vous gagnez une Peur."
      },
      {
        "nom": "Frappe jugulaire bondissante",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Lapin bondisse au Corps à corps d'une cible à longue portée et fasse une attaque contre elle. En cas de succès, infligez 3d20 dégâts physiques directs. Si la cible marque des PB à cause de cette attaque, elle devient Vulnérable jusqu'à ce qu'elle efface un PB."
      },
      {
        "nom": "Esquive",
        "tag": "réaction",
        "texte": "Quand le Lapin devrait subir des dégâts, lancez un d6. Sur un 4 ou plus, divisez les dégâts par deux. Si les dégâts avaient déjà été divisés par deux, le Lapin ne subit aucun dégât."
      },
      {
        "nom": "« Fuyez ! »",
        "tag": "réaction",
        "texte": "Quand un PJ sans Espoir prend la mise en avant à très longue portée du Lapin, il doit réussir un jet de réaction de Présence ou utiliser son action pour fuir le champ de bataille jusqu'à ce qu'il dépense un Espoir pour revenir."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "licorne",
    "palier": 3,
    "type": "Standard",
    "categorie": "Divin",
    "nom": "Licorne",
    "description": "Un avatar céleste de la bonté sous la forme d'un cheval d'une beauté surnaturelle, au front orné d'une longue corne spiralée.",
    "motivation": "Tenir le mal à distance, protéger le sacré, percevoir les émotions et les intentions",
    "difficulte": 17,
    "seuilMineur": 19,
    "seuilMajeur": 36,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Sabot et corne : mêlée, 3d10+3 mag",
    "experience": "Magie +3, Nature +3",
    "aptitudes": [
      {
        "nom": "Lance céleste",
        "tag": "passive",
        "texte": "L'attaque standard de la Licorne inflige le double des dégâts à une créature qui lui a infligé des dégâts."
      },
      {
        "nom": "Toucher guérisseur",
        "tag": "action",
        "texte": "La Licorne touche un allié au Corps à corps de sa corne et lui transmet une énergie guérisseuse. Marquez n'importe quel nombre de Stress pour effacer un nombre égal de PB de l'allié."
      },
      {
        "nom": "Aura protectrice",
        "tag": "action",
        "texte": "Marquez un Stress pour que la Licorne conjure une aura magique étincelante. Tant que l'aura est active, les jets d'attaque faits contre la Licorne ou un allié à très courte portée sont faits avec désavantage. Cet effet dure jusqu'à ce que la Licorne subisse des dégâts."
      },
      {
        "nom": "Téléportation",
        "tag": "action",
        "texte": "Marquez un Stress pour que la Licorne se téléporte jusqu'à très longue portée. La Licorne peut emmener avec elle jusqu'à trois alliés à très courte portée."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "manticore",
    "palier": 3,
    "type": "Solo",
    "categorie": "Monstre",
    "nom": "Manticore",
    "description": "Une bête légendaire au visage humain, au corps de lion, à la queue de scorpion et aux ailes de dragon.",
    "motivation": "Mordre, griffer, bondir, poser des énigmes, lacérer, fondre en piqué, tromper",
    "difficulte": 17,
    "seuilMineur": 20,
    "seuilMajeur": 35,
    "blessure": 12,
    "stress": 6,
    "modAttaque": 6,
    "attaqueStandard": "Crocs et griffes : très courte, 3d12+6 phy",
    "experience": "Végétation luxuriante +3, Énigmes +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "La Manticore peut être mise en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour la mettre en avant."
      },
      {
        "nom": "Dis-moi une devinette",
        "tag": "passive",
        "texte": "La Manticore est obsédée par les énigmes et peut être distraite par des casse-tête, des jeux de mots ou d'autres divertissements semi-intellectuels."
      },
      {
        "nom": "Ailée",
        "tag": "passive",
        "texte": "En vol, la Manticore gagne un bonus de +2 à sa Difficulté et à ses jets d'attaque."
      },
      {
        "nom": "Attaque bondissante",
        "tag": "action",
        "texte": "Dépensez une Peur pour que la Manticore bondisse au Corps à corps d'une cible à longue portée et fasse une attaque contre elle. En cas de succès, infligez 3d20+6 dégâts physiques, et la cible devient Tremblante jusqu'à ce qu'elle dépense un Espoir. Tant qu'elle est Tremblante, la cible fait ses jets d'attaque avec désavantage."
      },
      {
        "nom": "Pointe de queue paralysante",
        "tag": "action",
        "texte": "Marquez un Stress pour faire un jet d'attaque contre une cible à courte portée. En cas de succès, la cible subit 3d8 dégâts physiques et devient Bloquée jusqu'à ce qu'elle vainque la toxine avec un jet de Force réussi."
      },
      {
        "nom": "Mâchoires verrouillées",
        "tag": "réaction",
        "texte": "Quand la Manticore réussit une attaque standard contre une cible au Corps à corps, vous pouvez marquer un Stress pour verrouiller ses mâchoires sur la cible, la rendant Bloquée et Vulnérable jusqu'à ce qu'elle s'échappe avec un jet de Force (19) réussi."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "nuee-de-chauves-souris-vampires-5-pb",
    "palier": 3,
    "type": "Horde",
    "categorie": "Bête",
    "nom": "Nuée de chauves-souris vampires (5/PB)",
    "description": "Un nuage de chauves-souris suceuses de sang.",
    "motivation": "Obscurcir la lune, murmurer, propager la maladie",
    "difficulte": 15,
    "seuilMineur": 16,
    "seuilMajeur": 30,
    "blessure": 8,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Crocs : mêlée, 3d6+6 phy",
    "experience": "Sang +3",
    "aptitudes": [
      {
        "nom": "Horde (2d6)",
        "tag": "passive",
        "texte": "Quand la Nuée a marqué la moitié ou plus de ses PB, son attaque standard inflige 2d6 dégâts physiques à la place."
      },
      {
        "nom": "Multitude aveuglante",
        "tag": "passive",
        "texte": "La Nuée est si dense qu'elle bloque la vue de tous ceux avec qui elle interagit. Les créatures au Corps à corps ont le désavantage aux attaques faites contre des adversaires autres que la Nuée."
      },
      {
        "nom": "Suceuses de sang",
        "tag": "réaction",
        "texte": "Quand la Nuée inflige des dégâts à une cible, vous pouvez marquer un Stress pour que la Nuée se nourrisse. La cible marque 1 PB supplémentaire et la Nuée efface un PB."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "ondine-maudite",
    "palier": 3,
    "type": "Standard",
    "categorie": "Aquatique",
    "nom": "Ondine maudite",
    "description": "Une créature mi-poisson, mi-humaine, psychiquement liée au service des Habitants des profondeurs.",
    "motivation": "Séparer les ennemis, frapper depuis l'ombre, tirer parti du milieu aquatique",
    "difficulte": 16,
    "seuilMineur": 18,
    "seuilMajeur": 35,
    "blessure": 5,
    "stress": 4,
    "modAttaque": 3,
    "attaqueStandard": "Trident enchaîné : longue, 3d6 phy",
    "experience": "Aquatique +3",
    "aptitudes": [
      {
        "nom": "Queue de poisson",
        "tag": "passive",
        "texte": "L'Ondin est Vulnérable hors de l'eau."
      },
      {
        "nom": "Se liguer",
        "tag": "passive",
        "texte": "L'Ondin gagne un bonus de +2 aux jets d'attaque contre les cibles au Corps à corps d'un ou plusieurs alliés."
      },
      {
        "nom": "« Viens ici ! »",
        "tag": "réaction",
        "texte": "Quand l'Ondin réussit une attaque standard contre une cible au-delà du Corps à corps, vous pouvez marquer un Stress pour l'attirer au Corps à corps. Si vous le faites, vous pouvez dépenser une Peur pour faire une attaque standard avec avantage contre la cible."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "phenix",
    "palier": 3,
    "type": "Distant",
    "categorie": "Bête",
    "nom": "Phénix",
    "description": "Un immense aigle fait de flammes magiques, impossible à tuer, chassé pour son plumage guérisseur.",
    "motivation": "Fuir ses poursuivants, vivre avec éclat, s'élever dans les cieux, manier la lumière et la flamme",
    "difficulte": 18,
    "seuilMineur": 19,
    "seuilMajeur": 30,
    "blessure": 6,
    "stress": 6,
    "modAttaque": 4,
    "attaqueStandard": "Trait de feu : très longue, 3d10+3 mag",
    "experience": "Éclatant +4, Légendaire +3",
    "aptitudes": [
      {
        "nom": "Aura purificatrice",
        "tag": "passive",
        "texte": "Tout PJ qui agit au Corps à corps du Phénix peut dépenser un Espoir pour se purifier dans sa chaleur guérisseuse, effaçant un PB ou un Stress ainsi que toutes les conditions."
      },
      {
        "nom": "Graine de feu",
        "tag": "réaction",
        "texte": "Le Phénix saigne du feu magique. Quand le Phénix marque un PB, invoquez un Élémentaire de feu mineur à très courte portée."
      },
      {
        "nom": "Résurrection",
        "tag": "évolution",
        "texte": "Quand le Phénix est vaincu, il devient un nuage de cendres qui s'envole pour révéler un Œuf fumant. L'Œuf est immunisé contre tous les dégâts et possède une aura de chaleur qui inflige 3d4 dégâts magiques directs à quiconque le touche. L'Œuf éclot en un nouveau Phénix, avec tous ses PB et son Stress effacés, au bout de 7 jours."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "plesiosaure",
    "palier": 3,
    "type": "Standard",
    "categorie": "Aquatique",
    "nom": "Plésiosaure",
    "description": "Un lézard marin long comme un canoë, au long cou et aux quatre nageoires.",
    "motivation": "Plonger plus profond, manger du poisson, nager paisiblement",
    "difficulte": 16,
    "seuilMineur": 18,
    "seuilMajeur": 35,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "Morsure : très courte, 3d8+5 phy",
    "experience": "Lochs +3",
    "aptitudes": [
      {
        "nom": "Simple rumeur",
        "tag": "passive",
        "texte": "Quand il est en eau profonde, le Plésiosaure ne peut être ni localisé ni ciblé."
      },
      {
        "nom": "Mur d'eau",
        "tag": "action",
        "texte": "Marquez un Stress pour que le Plésiosaure émerge et retombe, envoyant un mur d'eau depuis un côté de son corps. Chaque PJ à longue portée de ce côté du Plésiosaure doit réussir un jet de réaction d'Agilité (18) ou subir 3d10 dégâts physiques et être repoussé à longue portée."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "pretre-de-la-douleur",
    "palier": 3,
    "type": "Social",
    "categorie": "Royaume extérieurs",
    "nom": "Prêtre de la douleur",
    "description": "Un membre d'un ordre religieux d'une autre dimension, consacré à l'exploration des limites de la souffrance et de l'extase mortelles.",
    "motivation": "Se nourrir d'émotions, repérer les innocents ou les curieux, les tenter avec leurs désirs les plus profonds",
    "difficulte": 16,
    "seuilMineur": 16,
    "seuilMajeur": 32,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 0,
    "attaqueStandard": "Instruments de torture : mêlée, 3d6+4 phy",
    "experience": "Expérimentation +4",
    "aptitudes": [
      {
        "nom": "Marcher entre les mondes",
        "tag": "action",
        "texte": "Marquez un Stress pour placer le Prêtre n'importe où à très longue portée et le mettre immédiatement en avant de nouveau."
      },
      {
        "nom": "Plaisir et douleur",
        "tag": "réaction",
        "texte": "Quand un PJ à courte portée du Prêtre gagne un Espoir ou marque des PB, lancez un d8. Sur un résultat de 8, le Prêtre ouvre un portail vers sa dimension d'origine et s'y enfuit avec le membre du groupe le plus proche. Vous gagnez 1d6 Peur. Le portail reste ouvert jusqu'à ce que le Prêtre soit vaincu ou de nouveau mis en avant."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "roc",
    "palier": 3,
    "type": "Solo",
    "categorie": "Bête",
    "nom": "Roc",
    "description": "Un faucon géant qui niche dans les montagnes et déchaîne les tempêtes.",
    "motivation": "Souffler la foudre et parler en tonnerre, protéger ses œufs, lacérer de ses serres, épier de loin",
    "difficulte": 18,
    "seuilMineur": 20,
    "seuilMajeur": 35,
    "blessure": 12,
    "stress": 6,
    "modAttaque": 3,
    "attaqueStandard": "Bec et serres : très courte, 3d12+8 phy",
    "experience": "Pics escarpés +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Roc peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Oiseau de proie",
        "tag": "passive",
        "texte": "Une fois par tour du MJ, le Roc peut se déplacer jusqu'à très longue portée avant ou après avoir agi."
      },
      {
        "nom": "Voici le grondement",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Roc déchaîne une tempête d'éclairs et de tonnerre. Faites un jet d'attaque contre 1d4+1 cibles à longue portée. Les cibles contre lesquelles le Roc réussit subissent 3d12 dégâts magiques. Ensuite, chaque cible à longue portée du Roc doit faire un jet de réaction d'Agilité (20). Les cibles qui échouent subissent 3d8 dégâts physiques et sont repoussées à courte portée. Les cibles qui réussissent doivent marquer un Stress."
      },
      {
        "nom": "Étreinte écrasante",
        "tag": "réaction",
        "texte": "Quand le Roc réussit une attaque standard, vous pouvez marquer un Stress pour que le Roc écrase la cible dans ses serres, la forçant à marquer 1d4 Stress et l'Entravant jusqu'à ce qu'elle réussisse un jet de Force (20)."
      },
      {
        "nom": "Gardien du nid",
        "tag": "évolution",
        "texte": "Quand les œufs du Roc sont menacés, il gagne les aptitudes suivantes :"
      },
      {
        "nom": "Furieux",
        "tag": "passive",
        "texte": "Le Roc gagne un bonus de +2 à sa Difficulté et un bonus aux jets de dégâts égal au nombre de Stress qu'il a marqués."
      },
      {
        "nom": "Aura électrisante",
        "tag": "passive",
        "texte": "Le Roc a une résistance aux dégâts magiques. Les PJ qui échouent à un jet à très courte portée doivent dépenser un Espoir ou marquer 1d4 Stress."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "roi-des-ombres-chevauchant",
    "palier": 3,
    "type": "Soutien",
    "categorie": "Esprit",
    "nom": "Roi des Ombres Chevauchant",
    "description": "L'ombre d'un souverain oublié, condamné à patrouiller dans les cieux sur une anguille ailée, au service d'un mal plus grand encore.",
    "motivation": "Trouver des objets magiques, inspirer la peur, patrouiller dans les cieux",
    "difficulte": 15,
    "seuilMineur": 24,
    "seuilMajeur": 38,
    "blessure": 8,
    "stress": 5,
    "modAttaque": 4,
    "attaqueStandard": "Lance maudite : courte, 3d10+6 mag",
    "experience": "Chercheur +3",
    "aptitudes": [
      {
        "nom": "Monture funeste",
        "tag": "passive",
        "texte": "Tant que le Roi des ombres est sur sa monture, il gagne un bonus de +2 à sa Difficulté. Quand le Roi des ombres subit des dégâts Grave, il est désarçonné. Si le Roi des ombres est à pied, sa monture disparaît jusqu'à ce que vous marquiez un Stress pour la convoquer de nouveau."
      },
      {
        "nom": "Lumière et ombre",
        "tag": "passive",
        "texte": "Le Roi des ombres a l'avantage aux jets d'attaque dans l'ombre ou l'obscurité et le désavantage aux jets d'attaque en pleine lumière."
      },
      {
        "nom": "Chasseur de reliques",
        "tag": "passive",
        "texte": "Le Roi des ombres a l'avantage aux jets d'attaque contre les PJ qui ont des armes ou armures magiques équipées."
      },
      {
        "nom": "Chant infernal",
        "tag": "action",
        "texte": "Dépensez 2 Peur pour que la monture du Roi des ombres pousse un cri glaçant qui résonne sur le champ de bataille. Chaque PJ à longue portée doit faire un jet de réaction de Présence (18). Les cibles qui réussissent doivent marquer un Stress. Celles qui échouent doivent marquer un Stress et perdre un Espoir. Si un PJ ne peut pas perdre d'Espoir, vous gagnez 2 Peur."
      },
      {
        "nom": "Appui aérien",
        "tag": "réaction",
        "texte": "Trois fois par scène, vous pouvez dépenser une Peur pour qu'un allié à longue portée relance une attaque ratée avec avantage."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "seigneur-vampire",
    "palier": 3,
    "type": "Solo",
    "categorie": "Mort-vivant",
    "nom": "Seigneur vampire",
    "description": "Un cruel seigneur vampire d'un âge révolu, maudit par l'immortalité.",
    "motivation": "Corrompre, détruire, écraser par un pouvoir maléfique",
    "difficulte": 18,
    "seuilMineur": 24,
    "seuilMajeur": 45,
    "blessure": 7,
    "stress": 7,
    "modAttaque": 5,
    "attaqueStandard": "Griffes : mêlée, 3d10+2 phy",
    "experience": "Mal +3, Noble +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Seigneur vampire peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Cœur de minuit",
        "tag": "passive",
        "texte": "Compte à rebours à long terme (6). Le Seigneur vampire garde son cœur caché en lieu sûr. S'il est détruit, le Seigneur vampire meurt. Sinon, quand le Seigneur vampire est vaincu, activez le compte à rebours. Il avance chaque fois que les PJ terminent un repos long. Quand il arrive à terme, le Seigneur vampire revient à la vie à courte portée du cœur, avec tous ses PB et son Stress effacés."
      },
      {
        "nom": "Terrifiant",
        "tag": "passive",
        "texte": "Quand le Seigneur vampire réussit un jet d'attaque, tous les PJ à courte portée perdent un Espoir et vous gagnez une Peur."
      },
      {
        "nom": "Libérer le feu infernal",
        "tag": "action",
        "texte": "Marquez un Stress pour que le Seigneur vampire conjure un instant 1d4 explosions de feu infernal à longue portée. Chaque explosion inflige 3d6 dégâts magiques à chaque cible à très courte portée. Si une cible subit des dégâts de plusieurs explosions, additionnez les dégâts."
      },
      {
        "nom": "Regain",
        "tag": "réaction",
        "texte": "Quand un PJ à très courte portée fait un jet avec Espoir, vous pouvez dépenser une Peur pour effacer un PB ou un Stress."
      },
      {
        "nom": "Se fondre dans l'ombre",
        "tag": "réaction",
        "texte": "Quand un PJ s'apprête à infliger des dégâts au Seigneur vampire, vous pouvez dépenser une Peur pour lancer un d6. Sur un résultat de 5 ou plus, annulez les dégâts, puis téléportez le Seigneur vampire à un point à longue portée."
      },
      {
        "nom": "Aile d'enfer",
        "tag": "évolution",
        "texte": "Quand le Seigneur vampire marque la moitié de ses PB, il se transforme en Aile d'enfer : une chauve-souris démoniaque colossale. Il gagne les aptitudes « Sur des ailes cramoisies » et « Bain de sang » et remplace son attaque standard par l'attaque standard suivante : Griffes : courte, 3d12+6 phy. Sur des ailes cramoisies (passive) : En vol, l'Aile d'enfer gagne un bonus de +1 à sa Difficulté. Bain de sang (réaction) : Quand l'Aile d'enfer subit des dégâts Majeurs ou supérieurs, le sol à très courte portée est couvert de sang, infligeant 3d10 dégâts magiques à toutes les autres créatures de la zone. Quand l'Aile d'enfer prend la mise en avant lors des tours du MJ suivants, toutes les autres créatures de cette zone subissent 3d6 dégâts magiques."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "spectre-chuchotant",
    "palier": 3,
    "type": "Traqueur",
    "categorie": "Esprit",
    "nom": "Spectre chuchotant",
    "description": "Les échos de promesses brisées et de rêves inaccomplis, qui se manifestent sous la forme d'un linceul flottant et translucide de velours noir en lambeaux, vaguement humanoïde.",
    "motivation": "Lier les membres, se laisser tomber de très haut, soulever du sol, tournoyer dans les airs, s'enrouler autour des têtes",
    "difficulte": 16,
    "seuilMineur": 20,
    "seuilMajeur": 32,
    "blessure": 6,
    "stress": 6,
    "modAttaque": 4,
    "attaqueStandard": "Toucher d'ombre : mêlée, 3d8+4 mag",
    "experience": "Rêves +4",
    "aptitudes": [
      {
        "nom": "Spectre supérieur",
        "tag": "passive",
        "texte": "Le Spectre a une résistance aux dégâts physiques et peut traverser les objets solides."
      },
      {
        "nom": "Sinistre",
        "tag": "passive",
        "texte": "Quand le Spectre réussit une attaque, tous les PJ à courte portée doivent marquer un Stress et vous gagnez une Peur."
      },
      {
        "nom": "Linceul de cauchemar",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Spectre s'enroule autour d'un PJ au Corps à corps, l'Enveloppant jusqu'à ce qu'il réussisse un jet de Force pour déloger le Spectre ou que le Spectre subisse des dégâts Majeurs ou supérieurs. Tant qu'elle est Enveloppée, la cible a le désavantage aux jets d'attaque et marque un Stress quand elle fait un jet avec Peur. De plus, les dégâts que le Spectre devrait subir sont répartis à parts égales entre le Spectre et la cible Enveloppée."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "suceur-d-entrailles",
    "palier": 3,
    "type": "Traqueur",
    "categorie": "Déchu",
    "nom": "Suceur d'entrailles",
    "description": "Un démon vampirique dont le haut du corps se détache au crépuscule pour voler à travers les villages voisins en quête de victimes. Il a un buste ailé aux entrailles pendantes.",
    "motivation": "S'agripper à sa proie, sucer le sang, déchirer en deux",
    "difficulte": 14,
    "seuilMineur": 16,
    "seuilMajeur": 30,
    "blessure": 5,
    "stress": 3,
    "modAttaque": 2,
    "attaqueStandard": "Longs ongles : mêlée, 2d6+7 phy",
    "experience": "Vol +3",
    "aptitudes": [
      {
        "nom": "S'unir ou mourir",
        "tag": "passive",
        "texte": "Le Suceur d'entrailles meurt s'il n'a pas rattaché ses moitiés supérieure et inférieure avant l'aube."
      },
      {
        "nom": "Entrailles enchevêtrantes",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Suceur d'entrailles s'accroche à une cible à très courte portée, l'Entravant jusqu'à ce qu'elle s'échappe avec un jet de Force (16) réussi."
      },
      {
        "nom": "Succion de vie",
        "tag": "action",
        "texte": "Marquez un Stress pour que le Suceur d'entrailles boive le sang d'une cible Bloquée au Corps à corps. La cible marque un PB et le Suceur d'entrailles efface un PB."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "titan-de-feu",
    "palier": 3,
    "type": "Solo",
    "categorie": "Géant",
    "nom": "Titan de feu",
    "description": "Un colosse en armure à la peau gris cendre et à la chevelure de feu, qui brandit une épée à deux mains de maître forgée dans sa propre forge.",
    "motivation": "Agir avec vaillance, faire la guerre, penser tactiquement",
    "difficulte": 18,
    "seuilMineur": 19,
    "seuilMajeur": 35,
    "blessure": 10,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Épée à deux mains : courte, 3d12+4 phy",
    "experience": "Forge +5, Tactique +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Titan peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Armure de maître",
        "tag": "passive",
        "texte": "Compte à rebours (3). Quand le Titan apparaît pour la première fois, activez le compte à rebours. Il avance quand le Titan subit des dégâts Majeurs ou Grave. Tant que le compte à rebours n'est pas arrivé à terme, réduisez les dégâts reçus de 1d12. Quand il arrive à terme, le Titan gagne un bonus de +1 à sa Difficulté et à ses jets d'attaque."
      },
      {
        "nom": "Élan",
        "tag": "passive",
        "texte": "Quand le Titan réussit une attaque contre un PJ, vous gagnez une Peur."
      },
      {
        "nom": "Jet de rocher",
        "tag": "action",
        "texte": "Marquez un Stress pour choisir un point à longue portée, puis faites une attaque contre toutes les cibles entre le Titan et ce point. Les cibles contre lesquelles le Titan réussit subissent 3d12 dégâts physiques."
      },
      {
        "nom": "Fendeur de crânes",
        "tag": "action",
        "texte": "Marquez un Stress pour placer un jeton sur ce bloc de stats. La prochaine fois que le Titan est mis en avant, vous devez dépenser le jeton de ce bloc de stats et faire une attaque contre un PJ à courte portée. En cas de succès, infligez 3d20+5 dégâts physiques directs. En cas d'échec, la cible marque un Stress."
      },
      {
        "nom": "Cœur flamboyant",
        "tag": "réaction",
        "texte": "Quand le Titan marque la moitié ou plus de ses PB, vous pouvez dépenser une Peur et marquer n'importe quel nombre de Stress pour effacer un nombre de PB égal au nombre de Stress marqués."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "titan-de-givre",
    "palier": 3,
    "type": "Cogneur",
    "categorie": "Géant",
    "nom": "Titan de givre",
    "description": "Un colosse à la peau bleue et aux cheveux givrés, qui porte des trophées de batailles passées.",
    "motivation": "Réclamer des trophées, piller et ravager, éprouver la valeur de ses adversaires",
    "difficulte": 17,
    "seuilMineur": 22,
    "seuilMajeur": 40,
    "blessure": 10,
    "stress": 4,
    "modAttaque": 7,
    "attaqueStandard": "Haches jumelles : très courte, 3d10+2 phy",
    "experience": "Froid +3, Guerre +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "Le Titan peut être mis en avant jusqu'à deux fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Cor de guerre",
        "tag": "action",
        "texte": "Marquez un Stress pour forcer chaque PJ à longue portée à réussir un jet de réaction de Présence ou à marquer un Stress et devenir Vulnérable jusqu'après la prochaine attaque contre lui."
      },
      {
        "nom": "Charge de taureau",
        "tag": "action",
        "texte": "Marquez un Stress pour vous déplacer jusqu'à courte portée et faire un jet d'attaque contre une cible au Corps à corps. En cas de succès, infligez 4d10+2 dégâts physiques et repoussez la cible à courte portée."
      },
      {
        "nom": "Frappe fendante",
        "tag": "réaction",
        "texte": "Quand un PJ marque des PB à cause de l'attaque standard du Titan, vous pouvez marquer un Stress pour forcer un autre PJ à très courte portée contre lequel l'attaque aurait réussi à marquer le même nombre de PB."
      },
      {
        "nom": "Chasseur de trophées",
        "tag": "réaction",
        "texte": "Quand le Titan vainc un PJ, il prend la possession la plus précieuse du PJ en guise de trophée."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "titan-de-la-tempete",
    "palier": 3,
    "type": "Solo",
    "categorie": "Géant",
    "nom": "Titan de la tempête",
    "description": "Un colosse ancien, sage et colérique, dont les cheveux sont faits de brume et dont la peau crépite d'électricité.",
    "motivation": "Entrer en éruption violente, attendre, observer",
    "difficulte": 20,
    "seuilMineur": 35,
    "seuilMajeur": 70,
    "blessure": 11,
    "stress": 8,
    "modAttaque": 7,
    "attaqueStandard": "Éclair : longue, 3d20+10 mag",
    "experience": "Puissance de la tempête +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Titan peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Élan",
        "tag": "passive",
        "texte": "Quand le Titan réussit une attaque contre un PJ, vous gagnez une Peur."
      },
      {
        "nom": "Foudre globulaire",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Titan conjure 1d4 sphères d'énergie électrique à courte portée. Quand le Titan est mis en avant, il peut déplacer chaque sphère jusqu'à courte portée. Quand une sphère se déplace à très courte portée d'un PJ, le PJ subit 4d6 dégâts magiques et la sphère disparaît. Chaque sphère a la même Difficulté que le Titan et disparaît si une créature lui inflige des dégâts magiques."
      },
      {
        "nom": "Porteur de tempête",
        "tag": "action",
        "texte": "Marquez un Stress pour que le Titan conjure une tempête déchaînée. Chaque PJ à courte portée du Titan doit faire un jet de réaction de Force. Les cibles qui échouent subissent 3d12 dégâts magiques et sont Vulnérables jusqu'à ce qu'elles prennent la mise en avant. Les cibles qui réussissent subissent la moitié des dégâts."
      },
      {
        "nom": "Coup de tonnerre",
        "tag": "action",
        "texte": "Dépensez une Peur pour cibler jusqu'à trois PJ devant le Titan à courte portée. Chaque cible marque un Stress et devient Vulnérable jusqu'à ce qu'elle fasse un jet avec Espoir."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "tortue-de-mer-titanesse",
    "palier": 3,
    "type": "Solo",
    "categorie": "Aquatique",
    "nom": "Tortue de mer titanesse",
    "description": "Une tortue de mer monstrueuse à la carapace et au bec d'adamantium.",
    "motivation": "Acquérir des richesses, faire chavirer les navires marchands, attendre à l'affût, utiliser les vagues comme couvert",
    "difficulte": 18,
    "seuilMineur": 21,
    "seuilMajeur": 41,
    "blessure": 10,
    "stress": 6,
    "modAttaque": 7,
    "attaqueStandard": "Morsure écrasantes : très courte, 3d12+7 phy",
    "experience": "Haute mer +5",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "La Tortue peut être mise en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour la mettre en avant."
      },
      {
        "nom": "Morsure perforante",
        "tag": "passive",
        "texte": "Quand la Tortue réussit une attaque standard contre un PJ, le PJ doit soit marquer un emplacement d'Armure sans en recevoir le bénéfice, soit subir le double des dégâts."
      },
      {
        "nom": "Coup de queue",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque standard contre tous les PJ derrière la Tortue à très courte portée. En cas de succès, une cible subit 1d12 dégâts physiques supplémentaires et est repoussée jusqu'à courte portée de la Tortue."
      },
      {
        "nom": "Éclaboussure gigatonne",
        "tag": "action",
        "texte": "Dépensez une Peur pour que la Tortue utilise son poids pour déchaîner un mur d'eau irrésistible qui cible toutes les créatures à longue portée. Chaque PJ doit faire un jet de réaction de Force pour résister à la marée. Les cibles qui échouent sont repoussées jusqu'à courte portée de la Tortue, subissent 4d8 dégâts physiques et deviennent temporairement Vulnérables. Les cibles qui réussissent doivent marquer un Stress. Pour chaque cible qui a échoué, vous gagnez une Peur."
      },
      {
        "nom": "Souffle de vapeur",
        "tag": "action",
        "texte": "Dépensez 2 Peur pour que la Tortue libère un jet de vapeur surchauffée ciblant tous les PJ devant elle à courte portée. Chaque cible doit faire un jet de réaction d'Agilité. Les cibles qui échouent subissent 4d8 dégâts magiques et deviennent temporairement Vulnérables. Les cibles qui réussissent doivent choisir de marquer un Stress ou de subir la moitié des dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "ver-des-sables",
    "palier": 3,
    "type": "Cogneur",
    "categorie": "Monstre",
    "nom": "Ver des sables",
    "description": "Un ver fouisseur gigantesque à la carapace de plaques et aux mâchoires grinçantes. Ce chasseur intelligent et opportuniste nage dans le sable aussi vite qu'un guépard court sur terre.",
    "motivation": "Tendre une embuscade par en dessous, manger et partir, creuser et jaillir, utiliser les deux extrémités",
    "difficulte": 17,
    "seuilMineur": 21,
    "seuilMajeur": 40,
    "blessure": 6,
    "stress": 3,
    "modAttaque": 1,
    "attaqueStandard": "Morsure : très courte, 3d8+4 phy",
    "experience": "Sens des vibrations +4",
    "aptitudes": [
      {
        "nom": "Dard venimeux",
        "tag": "action",
        "texte": "Marquez un Stress pour attaquer une cible à courte portée. En cas de succès, la cible subit 3d10+2 dégâts physiques et doit réussir un jet de réaction de Force ou devenir Bloquée et Vulnérable jusqu'à ce qu'elle fasse un jet avec Espoir."
      },
      {
        "nom": "Dévorer",
        "tag": "action",
        "texte": "Faites une attaque contre une cible au Corps à corps. En cas de succès, le Ver des sables Avale la cible. Tant qu'elle est Avalée, la cible est Bloquée et marque un PB quand le Ver des sables est mis en avant. Le Ver des sables recrache toutes les créatures Avalées quand il subit des dégâts Majeurs ou supérieurs."
      },
      {
        "nom": "Affamé, pas stupide",
        "tag": "réaction",
        "texte": "Quand le Ver des sables marque la moitié de ses PB ou Avale une créature, lancez un d6. Sur un résultat de 3 ou moins, le Ver des sables se retire en lieu sûr."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "vouivre",
    "palier": 3,
    "type": "Standard",
    "categorie": "Draconien",
    "nom": "Vouivre",
    "description": "Un dragon bipède qui s'envole de son aire de montagne pour dévorer le bétail.",
    "motivation": "Projeter une longue ombre, saisir et emporter, tournoyer dans les airs",
    "difficulte": 16,
    "seuilMineur": 18,
    "seuilMajeur": 35,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "Dents et griffes : très courte, 3d8+5 phy",
    "experience": "Mort venue du ciel +4",
    "aptitudes": [
      {
        "nom": "Double frappe",
        "tag": "action",
        "texte": "Marquez un Stress pour que la Vouivre fasse deux attaques standard. Si les deux attaques réussissent contre la même cible, additionnez les dégâts."
      },
      {
        "nom": "Cri terrifiant",
        "tag": "action",
        "texte": "Dépensez une Peur pour que la Vouivre pousse un cri glaçant. Toutes les créatures à longue portée sont Terrifiées jusqu'à ce qu'elles réussissent un jet de Présence (18) pour lever l'état ou que la Vouivre soit vaincue. Tant qu'il est Terrifié, un PJ ne gagne pas d'Espoir quand il fait un jet avec Espoir."
      },
      {
        "nom": "Saisie",
        "tag": "réaction",
        "texte": "Quand la Vouivre réussit une attaque contre un PJ, vous pouvez dépenser une Peur pour que la Vouivre Entrave la cible dans ses serres jusqu'à ce que le PJ réussisse un jet de Force (18) ou que la Vouivre subisse des dégâts Majeurs ou supérieurs. Tant qu'il est Bloqué ainsi, le PJ a le désavantage aux jets d'attaque."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "abomination-cephilith",
    "palier": 4,
    "type": "Cogneur",
    "categorie": "céphilith",
    "nom": "Abomination céphilith",
    "description": "Une bête-grenouille balourde née dans les marais, dont la peau translucide laisse voir des sangsues semblables à des têtards qui s'y tortillent.",
    "motivation": "Faire le gros du travail, bondir de façon menaçante, se déplacer étonnamment vite, saisir et frapper",
    "difficulte": 19,
    "seuilMineur": 35,
    "seuilMajeur": 70,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 4,
    "attaqueStandard": "Poings charnus : mêlée, 4d10+10 phy",
    "experience": "Brute +3",
    "aptitudes": [
      {
        "nom": "Peau toxique",
        "tag": "passive",
        "texte": "Un PJ qui entre en contact physique avec l'Abomination doit lancer un d6. Sur un résultat de 3 ou moins, le PJ doit marquer un emplacement d'Armure ou 2 PB."
      },
      {
        "nom": "Étreinte d'ours",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque standard contre une cible au Corps à corps. En cas de succès, la cible subit les dégâts standard et est Agrippée jusqu'à ce qu'elle s'échappe avec un jet de Force réussi. Tant qu'elle est Agrippée, la cible est Vulnérable et Bloquée."
      },
      {
        "nom": "Écrasement !",
        "tag": "action",
        "texte": "Dépensez une Peur pour infliger 4d12 dégâts physiques directs à une créature Agrippée par l'Abomination."
      },
      {
        "nom": "Attaque de langue",
        "tag": "action",
        "texte": "Dépensez une Peur pour que l'Abomination attire une cible à longue portée au Corps à corps, puis mettez immédiatement l'Abomination en avant de nouveau."
      },
      {
        "nom": "Sangsues fouisseuses",
        "tag": "réaction",
        "texte": "Quand l'Abomination subit des dégâts Majeurs ou supérieurs, sa peau explose en une gerbe de vers sous-cutanés. Chaque PJ à courte portée doit faire un jet de réaction d'Agilité. Les cibles qui échouent sont couvertes de 2d4 sangsues, qui s'enfouissent sous leur peau. Tant que les sangsues n'ont pas été extraites avec un jet de Finesse (21) réussi, les dégâts subis par la cible reçoivent un bonus de +1 par sangsue sous sa peau."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "ch-ur-sacre-6-pb",
    "palier": 4,
    "type": "Horde",
    "categorie": "Divin",
    "nom": "Chœur sacré (6/PB)",
    "description": "Une armée céleste d'humanoïdes ailés dont le chant fait jaillir des larmes d'effroi religieux.",
    "motivation": "Étouffer l'incrédulité, élever les voix",
    "difficulte": 17,
    "seuilMineur": 24,
    "seuilMajeur": 48,
    "blessure": 7,
    "stress": 6,
    "modAttaque": 2,
    "attaqueStandard": "Explosion chorale : longue, 4d10 mag",
    "experience": "Musique +2",
    "aptitudes": [
      {
        "nom": "Horde (2d10)",
        "tag": "passive",
        "texte": "Quand le Chœur a marqué la moitié ou plus de ses PB, son attaque standard inflige 2d10 dégâts magiques à la place."
      },
      {
        "nom": "Coda céleste",
        "tag": "passive",
        "texte": "Compte à rebours (Boucle 3). Le chant divin du Chœur s'amplifie à chaque refrain. Quand le Chœur apparaît pour la première fois, activez le compte à rebours. Il avance quand un PJ gagne un Espoir. Quand il arrive à terme, placez un jeton sur ce bloc de stats. Le Chœur gagne un bonus à ses jets de dégâts égal au nombre de jetons sur ce bloc de stats."
      },
      {
        "nom": "Assaut vocal",
        "tag": "action",
        "texte": "Le Chœur libère son énergie divine accumulée en une seule explosion, retirant tous les jetons de ce bloc de stats. Infligez 1d12 dégâts magiques directs à chaque ennemi à courte portée pour chaque jeton retiré."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "cipactli",
    "palier": 4,
    "type": "Solo",
    "categorie": "Monstre",
    "nom": "Cipactli",
    "description": "Un crocodile gigantesque au corps recouvert d'un patchwork d'écailles de poisson, de peau de crapaud et de dizaines de bouches affamées.",
    "motivation": "Consumer, remodeler la terre, piétiner",
    "difficulte": 20,
    "seuilMineur": 35,
    "seuilMajeur": 60,
    "blessure": 8,
    "stress": 5,
    "modAttaque": 8,
    "attaqueStandard": "Morsure : courte, 4d8+12 phy",
    "experience": "Affamé +3, Primordial +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Cipactli peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Nombreuses bouches",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque standard contre toutes les cibles à très courte portée. Les cibles contre lesquelles le Cipactli réussit doivent aussi marquer un Stress."
      },
      {
        "nom": "Festin frénétique",
        "tag": "action",
        "texte": "Dépensez une Peur pour forcer tous les PJ à courte portée à réussir un jet de réaction d'Instinct ou à subir 4d6 dégâts physiques directs. Le Cipactli efface un PB pour chaque créature qui a subi des dégâts Grave de cette attaque."
      },
      {
        "nom": "Pas qui font trembler la terre",
        "tag": "action",
        "texte": "Marquez un Stress pour forcer chaque PJ à longue portée à faire un jet de réaction d'Agilité. Les cibles qui échouent doivent marquer 2 Stress et sont Vulnérables jusqu'à ce qu'elles subissent des dégâts. Les cibles qui réussissent doivent marquer un Stress."
      },
      {
        "nom": "Sang vivifiant",
        "tag": "réaction",
        "texte": "Quand le Cipactli subit des dégâts Grave, son sang éclabousse le sol et y fait instantanément jaillir une jungle. Toutes les créatures à courte portée sont temporairement Bloquées."
      },
      {
        "nom": "Explosion de verdure",
        "tag": "réaction",
        "texte": "Quand le Cipactli marque son dernier PB, son corps explose en une végétation dense qui envahit le paysage."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "supreme-demiurge-adonix",
    "palier": 4,
    "type": "Solo",
    "categorie": "Divin",
    "nom": "Suprême Démiurge Adonix",
    "description": "L'ange à quatre visages des Hauts-Lieux qui se manifeste dans le Royaume mortel sous la forme d'un tétraèdre flottant aux innombrables yeux et à plusieurs paires d'ailes de plumes métalliques.",
    "motivation": "Établir sa domination, exiler de la réalité, flotter au-dessus de tout, parler pour faire exister",
    "difficulte": 20,
    "seuilMineur": 35,
    "seuilMajeur": 70,
    "blessure": 12,
    "stress": 10,
    "modAttaque": 8,
    "attaqueStandard": "Coup d'aile : courte, 4d12+10 phy",
    "experience": "Omnipotence +10, N'ayez pas peur +5",
    "aptitudes": [
      {
        "nom": "Impitoyable (4)",
        "tag": "passive",
        "texte": "Adonix peut être mis en avant jusqu'à quatre fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Archonte élémentaire",
        "tag": "action",
        "texte": "Marquez un Stress pour lancer un d4. Adonix active l'effet correspondant : 1. Rayon de feu. Adonix manifeste un rayon de feu élémentaire de la largeur de très courte portée, de lui-même jusqu'au bord du champ de bataille. Chaque cible sur le trajet du rayon doit faire un jet de réaction d'Agilité. Les cibles qui échouent subissent des dégâts Grave. Les cibles qui réussissent subissent des dégâts Mineurs. 2. Coup de tonnerre. Toutes les créatures à longue portée doivent marquer un Stress et deviennent Vulnérables jusqu'à ce qu'elles réussissent un jet d'attaque ou que le Démiurge soit vaincu. 3. Éclair. Faites une attaque contre une cible à très longue portée, infligeant 4d8 dégâts magiques en cas de succès. Si tous les résultats sont pairs, faites la même attaque contre une cible différente, en répétant le cycle jusqu'à obtenir un résultat impair ou manquer de cibles. 4. Tempête de glace. Chaque PJ à courte portée doit réussir un jet de réaction de Force ou marquer 1d4 Stress et devenir Bloqué jusqu'à ce qu'il dépense un Espoir pour s'échapper."
      },
      {
        "nom": "De l'alpha à l'oméga",
        "tag": "évolution",
        "texte": "Quand Adonix est vaincu, il ressuscite sous sa forme Oméga avec tous ses PB et son Stress effacés. Chaque PJ à très longue portée doit réussir un jet de réaction de Présence ou perdre un Espoir. Vous gagnez une Peur pour chaque Espoir ainsi perdu. Sous cette forme, Adonix gagne les aptitudes suivantes :"
      },
      {
        "nom": "Délaissé",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir un PJ et activer un compte à rebours de Délaissement (1d8) pour lui. Il avance quand Adonix est mis en avant. Quand il arrive à terme, le PJ doit marquer tous ses PB. Le compte à rebours prend fin si Adonix subit des dégâts Grave. Vous ne pouvez avoir qu'un seul compte à rebours de Délaissement actif à la fois."
      },
      {
        "nom": "Armageddon",
        "tag": "réaction",
        "texte": "Quand Adonix est de nouveau vaincu, il déchaîne une tempête de réalité qui secoue les royaumes jusqu'à leurs fondations. Lancez un d6. Sur un résultat de 5-6, chaque PJ doit faire une action de mort."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "vouivre-demoniaque",
    "palier": 4,
    "type": "Sbire",
    "categorie": "Draconien",
    "nom": "Vouivre démoniaque",
    "description": "Un bipède reptilien créé par une ancienne et mystérieuse magie draconique. Les Vouivre démoniaque existent davantage comme des extensions de la volonté de leur maître draconique que comme des êtres individuels.",
    "motivation": "Tenir la ligne, se sacrifier, servir, pulluler",
    "difficulte": 17,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 3,
    "attaqueStandard": "Armes du trésor : mêlée, 11 phy",
    "experience": "Lien draconique +2",
    "aptitudes": [
      {
        "nom": "Sbire (13)",
        "tag": "passive",
        "texte": "Le Vouivre démoniaque est vaincu dès que il subit des dégâts. Pour chaque tranche de 13 dégâts qu'un PJ inflige au Vouivre démoniaque, il vainc un Sbire supplémentaire à portée contre lequel l'attaque aurait réussi."
      },
      {
        "nom": "Morsure venimeuse",
        "tag": "action",
        "texte": "Dépensez une Peur pour faire une attaque contre un PJ au Corps à corps. En cas de succès, infligez 4d4+4 dégâts physiques et Empoisonnez la cible jusqu'à ce qu'elle réussisse un jet de Force (20). Tant qu'elle est Empoisonnée, la cible doit lancer un d6 avant de faire un jet d'action. Sur un résultat de 4 ou moins, la cible doit marquer un Stress."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir une cible et mettre en avant tous les Vouivre démoniaque à courte portée de celle-ci. Ces Sbires se déplacent au Corps à corps de la cible et font un seul jet d'attaque partagé. En cas de succès, ils infligent chacun 11 dégâts physiques. Additionnez ces dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "dragon-de-rubis",
    "palier": 4,
    "type": "Standard",
    "categorie": "Draconien",
    "nom": "Dragon de rubis",
    "description": "Un énorme dragon ailé dont des flammes visibles brillent sous les écailles incrustées de gemmes étincelantes. La chaleur de son corps fait fondre la pierre.",
    "motivation": "Fendre la terre, faire fondre, protéger son trésor",
    "difficulte": 19,
    "seuilMineur": 30,
    "seuilMajeur": 50,
    "blessure": 6,
    "stress": 4,
    "modAttaque": 6,
    "attaqueStandard": "Dent et griffe : courte, 4d10+8 phy",
    "experience": "Montagnes +4",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Dragon peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Redoutable",
        "tag": "passive",
        "texte": "Quand le Dragon réussit une attaque contre un PJ ou qu'un PJ à longue portée échoue à un jet d'action, vous gagnez une Peur."
      },
      {
        "nom": "Souffle de fusion",
        "tag": "action",
        "texte": "Marquez un Stress pour que le Dragon déchaîne un jet de feu sur tous les PJ devant lui à courte portée. Chaque cible doit réussir un jet de réaction d'Agilité ou subir 4d12+10 dégâts magiques et marquer un emplacement d'Armure sans en recevoir les bénéfices (elle peut tout de même utiliser son armure pour réduire les dégâts)."
      },
      {
        "nom": "Fissure volcanique",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Dragon fouette le sol de sa queue et ouvre une faille de lave qui se déverse sur la zone à courte portée. Chaque PJ dans cette zone doit faire un jet de réaction d'Agilité. Les cibles qui réussissent sortent immédiatement de la zone. Les cibles qui échouent subissent 4d8+5 dégâts magiques. Jusqu'à ce que le Dragon soit vaincu, une créature qui entre dans la zone subit 4d8+5 dégâts magiques."
      },
      {
        "nom": "Sang chaud",
        "tag": "réaction",
        "texte": "Quand une créature réussit une attaque contre le Dragon à très courte portée, le sang du Dragon jaillit de la blessure et brûle l'attaquant, le forçant à marquer un emplacement d'Armure. S'il ne peut pas marquer d'emplacement d'Armure, il marque 1d4 PB."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "gardien-du-continuum",
    "palier": 4,
    "type": "Cogneur",
    "categorie": "Artificielle",
    "nom": "Gardien du continuum",
    "description": "Un être mécanique gigantesque venu d'une dimension hors du temps, construit par les Gardiens du Temps pour préserver le Continuum sacré.",
    "motivation": "Réparer la chronologie, traquer les hérétiques temporels, servir les Seigneurs de la Continuité",
    "difficulte": 20,
    "seuilMineur": 42,
    "seuilMajeur": 68,
    "blessure": 8,
    "stress": 5,
    "modAttaque": 4,
    "attaqueStandard": "Marteau d'adamantium : très courte, 40 phy direct",
    "experience": "Anomalies temporelles +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "Le gardien peut être mis en avant jusqu'à deux fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Boucleur de temps",
        "tag": "passive",
        "texte": "Compte à rebours (Boucle 2d6). Quand le gardien apparaît pour la première fois, activez le compte à rebours. Il avance quand l'Exécuteur est mis en avant. Quand il arrive à terme, le gardien efface tous ses PB, son Stress et ses conditions. Relancez le compte à rebours quand le gardien subit des dégâts Grave."
      },
      {
        "nom": "Passer d'un instant à l'autre",
        "tag": "action",
        "texte": "Marquez un Stress pour que le gardien se téléporte à un point à très longue portée, puis mettez-le de nouveau en avant."
      },
      {
        "nom": "Retour en arrière instantané",
        "tag": "réaction",
        "texte": "Quand le gardien échoue à une attaque, vous pouvez dépenser une Peur pour relancer le dé."
      },
      {
        "nom": "Inversion de polarité",
        "tag": "réaction",
        "texte": "Jusqu'à trois fois par scène, vous pouvez dépenser une Peur pour retourner un dé lancé sur sa face opposée. Cet effet ne peut pas être utilisé pour modifier un succès critique."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "griffon",
    "palier": 4,
    "type": "Standard",
    "categorie": "Monstre",
    "nom": "Griffon",
    "description": "Une grande créature léonine à la tête, aux serres et aux ailes d'aigle.",
    "motivation": "Chasser, chercher une ouverture, fondre en piqué",
    "difficulte": 18,
    "seuilMineur": 30,
    "seuilMajeur": 45,
    "blessure": 6,
    "stress": 4,
    "modAttaque": 4,
    "attaqueStandard": "Bec et serres : très courte, 4d8+4 phy",
    "experience": "Richesses +5, Sens aiguisés +3",
    "aptitudes": [
      {
        "nom": "Accapareur de trésors",
        "tag": "passive",
        "texte": "Quand un PJ devrait marquer un nombre quelconque de PB à cause de l'attaque du Griffon, le PJ peut choisir de donner au Griffon un nombre égal de sacs d'or à la place."
      },
      {
        "nom": "Entaille en piqué",
        "tag": "action",
        "texte": "Déplacez-vous jusqu'à longue portée et faites une attaque standard contre une cible en chemin."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "legion-spectrale-10-pb",
    "palier": 4,
    "type": "Horde",
    "categorie": "Mort-vivant",
    "nom": "Légion spectrale (10/PB)",
    "description": "Une armée grouillante de fantômes tirés d'un sommeil sans rêves pour accomplir leur serment ancien.",
    "motivation": "Submerger, servir, pulluler",
    "difficulte": 17,
    "seuilMineur": 25,
    "seuilMajeur": 45,
    "blessure": 8,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "Armes spectrales : courte, 4d6+10 mag",
    "experience": "Tactique +2",
    "aptitudes": [
      {
        "nom": "Horde (2d6+5)",
        "tag": "passive",
        "texte": "Quand la Légion a marqué la moitié ou plus de ses PB, son attaque standard inflige 2d6+5 dégâts magiques à la place."
      },
      {
        "nom": "Nécroplasmique",
        "tag": "passive",
        "texte": "La Légion est immunisée contre les dégâts physiques et subit le double des dégâts magiques."
      },
      {
        "nom": "Dernier acte",
        "tag": "réaction",
        "texte": "Quand la Légion est vaincue, elle fait une attaque standard contre toutes les cibles à courte portée avant d'être dissipée."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "machine-de-guerre-gigantesque",
    "palier": 4,
    "type": "Solo",
    "categorie": "Artificielle",
    "nom": "Machine de guerre gigantesque",
    "description": "Un construct d'adamantium de trente mètres de haut aux yeux de pierres précieuses, alimenté par un creuset de flammes élémentaires dans sa poitrine.",
    "motivation": "Écraser, détruire",
    "difficulte": 20,
    "seuilMineur": 48,
    "seuilMajeur": 88,
    "blessure": 10,
    "stress": 6,
    "modAttaque": 7,
    "attaqueStandard": "Poings de fer : courte, 4d12+10 phy",
    "experience": "Incassable +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "La Machine peut être mise en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour la mettre en avant."
      },
      {
        "nom": "Taille impressionnante",
        "tag": "passive",
        "texte": "Quand la Machine entre sur le champ de bataille, chaque PJ doit soit perdre un Espoir, soit marquer 1d4 Stress."
      },
      {
        "nom": "Poing-fusée",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre un PJ à courte portée. En cas de succès, la cible subit 4d12+10 dégâts physiques directs et marque 2 emplacements d'Armure sans en recevoir les bénéfices."
      },
      {
        "nom": "Piétinement fracassant",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir un point à courte portée et faire un jet d'attaque contre tous les ennemis à courte portée de ce point. Les cibles contre lesquelles l'attaque réussit subissent 4d12 dégâts physiques directs et sont Vulnérables jusqu'à ce qu'elles prennent la mise en avant. De plus, toute la zone devient un amas de gravats, et un PJ doit réussir un jet de réaction d'Agilité (16) pour la traverser."
      },
      {
        "nom": "Surchargée",
        "tag": "réaction",
        "texte": "Compte à rebours (Boucle 2d6). Quand la Machine est mise en avant pour la première fois, activez le compte à rebours. Il avance chaque fois que la Machine est mise en avant. Quand il arrive à terme, placez un jeton sur ce bloc de stats tandis que le creuset de la poitrine de la Machine s'embrase d'une flamme magique. Pour chaque jeton sur ce bloc de stats, la Machine gagne un bonus de +1 à sa Difficulté et à ses jets d'attaque, et son attaque standard inflige 1d12 dégâts supplémentaires. Retirez un jeton quand la Machine subit des dégâts Grave."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "mere-des-eaux",
    "palier": 4,
    "type": "Solo",
    "categorie": "Monstre",
    "nom": "Mère des eaux",
    "description": "Un serpent colossal couvert de fourrure qui chasse dans les grandes étendues d'eau.",
    "motivation": "Étreindre le monde, contrôler le champ de bataille, attirer ses ennemis dans l'eau",
    "difficulte": 20,
    "seuilMineur": 40,
    "seuilMajeur": 70,
    "blessure": 12,
    "stress": 8,
    "modAttaque": 8,
    "attaqueStandard": "Morsure : très courte, 4d10+5 phy",
    "experience": "Rivières +4",
    "aptitudes": [
      {
        "nom": "Segmentée",
        "tag": "passive",
        "texte": "Le corps de la Mère des eaux est divisé en trois segments : Tête, Centre et Queue. La Mère des eaux se déplace toujours en commençant par la Tête, tirant le Centre puis la Queue derrière elle. Une créature peut cibler la Mère des eaux avec une attaque tant qu'au moins un de ses segments est à portée, mais la Mère des eaux ne peut faire une attaque standard que contre une cible à portée de sa Tête. Si une attaque inflige des dégâts à la Mère des eaux et que sa Tête est à portée, l'attaque inflige 1d10 dégâts supplémentaires."
      },
      {
        "nom": "Manger le monde",
        "tag": "action",
        "texte": "Dépensez une Peur pour que la Mère des eaux inspire brusquement. Chaque PJ à courte portée de sa Tête doit réussir un jet de réaction de Force ou marquer un Stress et être attiré au Corps à corps de la Tête. La Mère des eaux fait alors une attaque standard contre toutes les cibles au Corps à corps de sa Tête."
      },
      {
        "nom": "Constriction",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre toutes les cibles au Corps à corps du segment Centre. Les cibles contre lesquelles l'attaque réussit subissent 4d8+8 dégâts physiques et sont temporairement Bloquées. Au début de chaque tour du MJ, vous pouvez marquer un Stress pour forcer toutes les cibles Bloquées par la Mère des eaux à marquer un PB."
      },
      {
        "nom": "Poussée de venin",
        "tag": "réaction",
        "texte": "Quand la Mère des eaux réussit une attaque standard, vous pouvez dépenser une Peur pour rendre la cible Vulnérable jusqu'à la fin de la scène."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "mere-dragon-mitera",
    "palier": 4,
    "type": "Solo",
    "categorie": "Draconien",
    "nom": "Mère-dragon Mitera",
    "description": "Une dragone gigantesque à sept têtes, aux écailles de diamant éblouissantes qui brillent de toutes les couleurs de l'arc-en-ciel.",
    "motivation": "Enfanter la destruction, contrôler le champ de bataille, voler, repousser les envahisseurs, utiliser toutes les options disponibles",
    "difficulte": 16,
    "seuilMineur": 35,
    "seuilMajeur": 65,
    "blessure": 12,
    "stress": 10,
    "modAttaque": 8,
    "attaqueStandard": "Morsure et entaille : courte, 4d10+10 phy",
    "experience": "Ancienne +5",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Mitera peut être mise en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour la mettre en avant."
      },
      {
        "nom": "Peau de diamant",
        "tag": "passive",
        "texte": "Compte à rebours (7). Quand Mitera apparaît pour la première fois, activez le compte à rebours. Mitera gagne un bonus à sa Difficulté égal à la valeur actuelle du dé du compte à rebours. Il avance grâce à l'aptitude « Sept têtes » de Mitera. Quand le compte à rebours arrive à terme, Mitera devient Vulnérable et gagne un bonus de +2 aux jets d'attaque."
      },
      {
        "nom": "Souffle élémentaire",
        "tag": "action",
        "texte": "Marquez un Stress pour que Mitera libère de l'énergie élémentaire depuis une tête de votre choix : 1. Feu. Infligez 4d12 dégâts magiques à 1d4+1 cibles à courte portée. Les cibles qui subissent des dégâts doivent marquer un emplacement d'Armure ou 2 PB supplémentaires. 2. Foudre. Infligez 4d12 dégâts magiques à 1d6 cibles à longue portée, tant que chaque cible après la première est à courte portée de la précédente. 3. Acide. Chaque PJ devant Mitera à courte portée doit faire un jet de réaction d'Agilité. Les cibles qui échouent doivent marquer 2 emplacements d'Armure et 2 PB. Les cibles qui réussissent doivent marquer un emplacement d'Armure et un PB. 4. Poison. Un miasme de gaz de marais toxique Rend Nauséeuses toutes les cibles à courte portée de Mitera. Tant qu'elle est Nauséeuse, une cible a le désavantage aux jets d'action jusqu'à ce qu'elle marque 1d4 Stress pour lever la condition. 5. Glace. Chaque cible devant Mitera à courte portée subit 4d8+8 dégâts magiques et est Bloquée par la glace jusqu'à ce qu'elle se libère avec un jet de Force réussi. De plus, cette zone gèle et un PJ doit réussir un jet de réaction d'Agilité pour la traverser. 6. Ténèbres. Un nuage d'ombre magique remplit une zone à courte portée. Les créatures à l'intérieur du nuage, sauf Mitera, sont Vulnérables et ont le désavantage aux jets d'action qui reposent sur la vue. Le nuage se dissipe quand cette option de Souffle élémentaire est retirée par l'aptitude « Sept têtes » de Mitera. 7. Lumière. Un rayon d'énergie lumineuse pure inflige 28 dégâts magiques directs à chaque créature sur une ligne à très longue portée."
      },
      {
        "nom": "Coup de queue",
        "tag": "action",
        "texte": "Dépensez une Peur pour attaquer toutes les cibles à courte portée. Les cibles contre lesquelles cette attaque réussit subissent 2d20+10 dégâts physiques et sont repoussées à longue portée. Les cibles qui marquent des PB à cause de cette attaque deviennent Vulnérables jusqu'à ce qu'elles effacent un PB. Les cibles contre lesquelles cette attaque a échoué doivent marquer un Stress."
      },
      {
        "nom": "Redoutable",
        "tag": "réaction",
        "texte": "Quand Mitera réussit un jet d'attaque contre un PJ ou qu'un PJ échoue à un jet à longue portée, vous gagnez une Peur."
      },
      {
        "nom": "Sept têtes",
        "tag": "réaction",
        "texte": "Quand Mitera subit des dégâts, lancez un d8. Retirez définitivement l'option de « Souffle élémentaire » correspondant au résultat. Sur un résultat de 8, ou si l'option correspondante a déjà été retirée, faites avancer le compte à rebours de Peau de diamant (voir « Peau de diamant »)."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "messager-de-la-famine",
    "palier": 4,
    "type": "Soutien",
    "categorie": "Cavaliers de l'Apocalypse",
    "nom": "Messager de la Famine",
    "description": "Une carcasse desséchée chevauchant un cheval blanc étique. Elle est couverte de bouches et entourée d'un essaim de mouches.",
    "motivation": "Drainer, appauvrir, affaiblir, flétrir",
    "difficulte": 18,
    "seuilMineur": 26,
    "seuilMajeur": 42,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 4,
    "attaqueStandard": "Fouet barbelé : courte, 4d8+10 phy",
    "experience": "Faim +2, Soif +2",
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "Le Messager peut être mis en avant jusqu'à deux fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Monture",
        "tag": "passive",
        "texte": "Tant que le Messager est sur sa monture, il gagne un bonus de +2 à sa Difficulté. Quand le Messager subit des dégâts Grave, il est désarçonné. Si le Messager est à pied, sa monture disparaît jusqu'à ce que vous marquiez un Stress pour la convoquer de nouveau."
      },
      {
        "nom": "Fringales",
        "tag": "passive",
        "texte": "Compte à rebours (décroissant 6). Quand le Messager apparaît, activez le compte à rebours. Il avance quand le Messager est mis en avant. Quand il arrive à terme, tous les PJ à longue portée marquent un Stress et deviennent Affamés. Tant qu'il est Affamé, un PJ ne peut pas dépenser d'Espoir jusqu'à ce qu'il lève la condition avec un jet d'Instinct réussi."
      },
      {
        "nom": "Drainer l'essence",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir jusqu'à trois PJ. Chaque cible subit 4d6 dégâts magiques."
      },
      {
        "nom": "Trop de bouches",
        "tag": "action",
        "texte": "Marquez un Stress pour attaquer un PJ au Corps à corps. En cas de succès, le Messager saisit la cible et la mord, lui infligeant 4d6 dégâts physiques et l'Entravant jusqu'à ce qu'elle se libère avec un jet de Force réussi."
      },
      {
        "nom": "Toucher flétrissant",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Messager caresse le visage d'un PJ Bloqué au Corps à corps. La cible marque 2 Stress et perd un Espoir ou marque 1d4 PB."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "messager-de-la-guerre",
    "palier": 4,
    "type": "Cogneur",
    "categorie": "Cavaliers de l'Apocalypse",
    "nom": "Messager de la Guerre",
    "description": "Un guerrier vêtu d'une armure noire et d'un casque à cornes, portant une bannière ensanglantée.",
    "motivation": "Détruire totalement, combattre avec honneur, savourer le combat, frapper du bouclier, frapper avec puissance",
    "difficulte": 21,
    "seuilMineur": 40,
    "seuilMajeur": 70,
    "blessure": 9,
    "stress": 4,
    "modAttaque": 5,
    "attaqueStandard": "Hache de bataille : très courte, 4d20 phy",
    "experience": "Armure lourde +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "Le Messager peut être mis en avant jusqu'à deux fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Monture",
        "tag": "passive",
        "texte": "Tant que le Messager est sur sa monture, il gagne un bonus de +2 à sa Difficulté. Quand le Messager subit des dégâts Grave, il est désarçonné. Si le Messager est à pied, sa monture disparaît jusqu'à ce que vous marquiez un Stress pour la convoquer de nouveau."
      },
      {
        "nom": "Dés de fer",
        "tag": "action",
        "texte": "Marquez un Stress pour que le Messager tente une attaque tout-en-un risquée. Faites une attaque standard avec avantage. En cas de succès, la cible marque 1 PB supplémentaire. En cas d'échec, le Messager devient Vulnérable jusqu'à ce qu'il subisse ou inflige des dégâts."
      },
      {
        "nom": "Commandant suprême",
        "tag": "action",
        "texte": "Une fois par scène, dépensez une Peur pour invoquer 1d6 Soldats sanctifiés à courte portée et en mettre un immédiatement en avant."
      },
      {
        "nom": "Bélier",
        "tag": "réaction",
        "texte": "Quand un PJ échoue à un jet d'action à courte portée, vous pouvez dépenser une Peur pour vous déplacer au Corps à corps du PJ et faire une attaque standard avec avantage contre lui. En cas de succès, le PJ subit les dégâts standard et est Vulnérable jusqu'à ce qu'il prenne la mise en avant."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "messager-de-la-mort",
    "palier": 4,
    "type": "Traqueur",
    "categorie": "Cavaliers de l'Apocalypse",
    "nom": "Messager de la Mort",
    "description": "Un cadavre desséché chevauchant un cheval squelettique. Ses yeux sont cousus et son corps est enveloppé d'un linceul de poussière et de cendres.",
    "motivation": "Rendre le jugement, faucher, se déplacer vite, chercher sans relâche, prendre les âmes",
    "difficulte": 18,
    "seuilMineur": 28,
    "seuilMajeur": 52,
    "blessure": 6,
    "stress": 6,
    "modAttaque": 8,
    "attaqueStandard": "Grande faux : courte, 4d10+10 phy",
    "experience": "Jugement +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Le Messager peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Monture",
        "tag": "passive",
        "texte": "Tant que le Messager est sur sa monture, il gagne un bonus de +2 à sa Difficulté. Quand le Messager subit des dégâts Grave, il est désarçonné. Si le Messager est à pied, sa monture disparaît jusqu'à ce que vous marquiez un Stress pour la convoquer de nouveau."
      },
      {
        "nom": "Craignez la Faucheuse",
        "tag": "passive",
        "texte": "Quand une créature est vaincue à longue portée du Messager, vous gagnez une Peur."
      },
      {
        "nom": "Décapiter",
        "tag": "action",
        "texte": "Dépensez 2 Peur pour que le Messager fasse un jet d'attaque contre un PJ au Corps à corps. En cas de succès, lancez un d6. Sur un résultat de 6, la cible marque tous ses PB et doit faire une action de mort."
      },
      {
        "nom": "Réveiller les déchus",
        "tag": "action",
        "texte": "Dépensez une Peur et marquez n'importe quel nombre de Stress pour que le Messager ressuscite un allié vaincu à longue portée. L'allié ressuscité efface un nombre de PB égal au nombre de Stress marqués. Mettez immédiatement l'allié en avant."
      },
      {
        "nom": "Cendres aux cendres, poussière à la poussière",
        "tag": "réaction",
        "texte": "Quand le Messager devrait marquer des PB, vous pouvez marquer un Stress pour qu'un allié à longue portée marque les PB à la place."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "messager-de-la-peste",
    "palier": 4,
    "type": "Meneur",
    "categorie": "Cavaliers de l'Apocalypse",
    "nom": "Messager de la Peste",
    "description": "Un amas boursouflé et pourrissant d'insectes grouillants et de limaces formant une seule masse humanoïde, chevauchant un cheval rongé par les vers.",
    "motivation": "Corrompre les purs, infecter les faibles, invoquer fléaux et maladies",
    "difficulte": 18,
    "seuilMineur": 37,
    "seuilMajeur": 70,
    "blessure": 7,
    "stress": 8,
    "modAttaque": 8,
    "attaqueStandard": "Toucher de corruption : mêlée, 4d10+10 mag",
    "experience": "Pourriture +3",
    "aptitudes": [
      {
        "nom": "Halo de contagion",
        "tag": "passive",
        "texte": "Le Messager est Contagieux. Quand un PJ à très courte portée d'une créature Contagieuse agit, il lance un d6. Sur un résultat de 1, le PJ devient Contagieux. Tant qu'il est Contagieux, un PJ a le désavantage aux jets d'action jusqu'à ce qu'il dépense 3 Espoir pour lever la condition. Les adversaires Contagieux ne sont pas affectés par la condition."
      },
      {
        "nom": "Monture",
        "tag": "passive",
        "texte": "Tant que le Messager est sur sa monture, il gagne un bonus de +2 à sa Difficulté. Quand le Messager subit des dégâts Grave, il est désarçonné. Si le Messager est à pied, sa monture disparaît jusqu'à ce que vous marquiez un Stress pour la convoquer de nouveau."
      },
      {
        "nom": "Nuée de sauterelles",
        "tag": "action",
        "texte": "Dépensez 2 Peur pour que le Messager conjure une nuée de sauterelles en un point à très longue portée. Chaque PJ à courte portée de ce point doit soit marquer un emplacement d'Armure, soit subir 4d10 dégâts physiques directs et lancer un d6. Sur un résultat de 1-2, le PJ devient Contagieux."
      },
      {
        "nom": "Engeance de grenouilles",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Messager conjure une couvée de grenouilles malades dans la bouche d'un maximum de trois PJ à courte portée. Chaque PJ doit réussir un jet de réaction de Présence ou subir 4d12 dégâts magiques et lancer un d6. Sur un résultat de 1-3, le PJ devient Contagieux."
      },
      {
        "nom": "Semeur de peste",
        "tag": "action",
        "texte": "Marquez n'importe quel nombre de Stress jusqu'au nombre de PJ dans la scène. Pour chaque Stress marqué, le Messager invoque 1d4 Légions de zombies Contagieux à longue portée et met immédiatement l'une d'elles en avant."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "larve-cephilith",
    "palier": 4,
    "type": "Sbire",
    "categorie": "céphilith",
    "nom": "Larve céphilith",
    "description": "Un parasite semblable à un calmar qui s'accroche au crâne de sa proie et baigne le cerveau de la victime de neurotoxines extradimensionnelles.",
    "motivation": "Grimper, se nourrir, éclore, engourdir, trottiner",
    "difficulte": 18,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 3,
    "attaqueStandard": "Ventouses barbelées : mêlée, 9 phy",
    "experience": "Psychique +2",
    "aptitudes": [
      {
        "nom": "Sbire (12)",
        "tag": "passive",
        "texte": "Le Nouveau-né est vaincu dès que il subit des dégâts. Pour chaque tranche de 12 dégâts qu'un PJ inflige au Nouveau-né, il vainc un Sbire supplémentaire à portée contre lequel l'attaque aurait réussi."
      },
      {
        "nom": "Plonger dans le coma",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Nouveau-né s'accroche à la tête d'un PJ au Corps à corps. Le PJ doit marquer un Stress tandis que le Nouveau-né injecte des produits psycho-chimiques dans son cerveau, et il doit marquer un Stress supplémentaire chaque fois qu'un PJ échoue à un jet avec Peur. Le PJ peut retirer le Nouveau-né en dépensant un nombre d'Espoir égal au nombre de Stress qu'il a marqués. Si un PJ marque son dernier Stress alors que le Nouveau-né est accroché, il doit faire une action de mort. Si le PJ meurt, vous pouvez dépenser une Peur pour le ressusciter en Novice céphilith."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir une cible et mettre en avant tous les Nouveau-nés céphiliths à courte portée de celle-ci. Ces Sbires se déplacent au Corps à corps de la cible et font un seul jet d'attaque partagé. En cas de succès, ils infligent chacun 9 dégâts physiques. Additionnez ces dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "novice-cephilith",
    "palier": 4,
    "type": "Sbire",
    "categorie": "céphilith",
    "nom": "Novice céphilith",
    "description": "Une lumière du Royaume mortel qui a donné son esprit à des entités extradimensionnelles en échange de capacités occultes.",
    "motivation": "Aider les autres à voir la Vérité, ouvrir la voie à Elle, chercher le savoir interdit",
    "difficulte": 16,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 1,
    "modAttaque": 2,
    "attaqueStandard": "Puissance occulte : mêlée, 12 phy",
    "experience": "Visions +2",
    "aptitudes": [
      {
        "nom": "Sbire (12)",
        "tag": "passive",
        "texte": "Le Novice est vaincu dès que il subit des dégâts. Pour chaque tranche de 12 dégâts qu'un PJ inflige au Novice, il vainc un Sbire supplémentaire à portée contre lequel l'attaque aurait réussi."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir une cible et mettre en avant tous les Novices céphiliths à courte portée de celle-ci. Ces Sbires se déplacent au Corps à corps de la cible et font un seul jet d'attaque partagé. En cas de succès, ils infligent chacun 12 dégâts physiques. Additionnez ces dégâts."
      },
      {
        "nom": "Se sacrifier",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Novice se jette sur une cible à longue portée et se fonde en elle. Infligez 12 dégâts magiques directs à la cible et vainquez le Novice."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "ombre-separee",
    "palier": 4,
    "type": "Sbire",
    "categorie": "Esprit",
    "nom": "Ombre séparée",
    "description": "Une ombre vivante à deux dimensions, liée aux surfaces et aux plans plats.",
    "motivation": "Maudire la lumière, se glisser dans les interstices, se diviser et se reformer",
    "difficulte": 19,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 1,
    "stress": 2,
    "modAttaque": 3,
    "attaqueStandard": "Strangulation : courte, 10 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Sbire (12)",
        "tag": "passive",
        "texte": "L'Ombre est vaincue dès que elle subit des dégâts. Pour chaque tranche de 12 dégâts qu'un PJ inflige à l'Ombre, il vainc un Sbire supplémentaire à portée contre lequel l'attaque aurait réussi."
      },
      {
        "nom": "Étreinte d'ombre",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre une cible à courte portée. En cas de succès, la cible devient Vulnérable et doit marquer un Stress quand elle agit jusqu'à ce que l'Ombre soit vaincue."
      },
      {
        "nom": "Attaque de groupe",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir une cible et mettre en avant tous les Ombres séparées à courte portée de celle-ci. Ces Sbires se déplacent au Corps à corps de la cible et font un seul jet d'attaque partagé. En cas de succès, ils infligent chacun 10 dégâts magiques. Additionnez ces dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "pretre-cephilith",
    "palier": 4,
    "type": "Meneur",
    "categorie": "Royaume extérieurs",
    "nom": "Prêtre céphilith",
    "description": "Un humanoïde sans visage, perpétuellement humide, venu des Royaumes extérieurs, aux doigts allongés et à la peau translucide sous laquelle on voit grouiller des vers.",
    "motivation": "Briser l'esprit des mécréants, préparer ce monde à l'arrivée du Titan céphilith, chanter ses louanges",
    "difficulte": 20,
    "seuilMineur": 37,
    "seuilMajeur": 70,
    "blessure": 7,
    "stress": 5,
    "modAttaque": 8,
    "attaqueStandard": "Frappe psychique : longue, 4d10+10 mag",
    "experience": "Royaumes extérieurs +4",
    "aptitudes": [
      {
        "nom": "Explosion psychique",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir jusqu'à trois PJ à courte portée et les forcer à faire un jet de réaction de Connaissance. Les cibles qui réussissent subissent 2d10+5 dégâts magiques directs. Les cibles qui échouent subissent 4d10+10 dégâts magiques directs et sont Vulnérables jusqu'à ce qu'elles prennent la mise en avant."
      },
      {
        "nom": "Incursion cérébrale",
        "tag": "action",
        "texte": "Dépensez une Peur pour choisir une cible Vulnérable au Corps à corps. Le Prêtre l'attrape et lui insère ses doigts allongés dans les oreilles, le nez et la bouche. La cible doit réussir un jet de réaction de Force ou marquer 1d6 Stress, et le Prêtre efface un nombre égal de Stress."
      },
      {
        "nom": "Emprise télékinétique",
        "tag": "réaction",
        "texte": "Quand le Prêtre réussit une attaque standard contre un PJ, vous pouvez marquer un Stress pour Entraver la cible jusqu'à ce qu'elle dépense un Espoir."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "seigneur-de-guerre-titan-de-feu",
    "palier": 4,
    "type": "Meneur",
    "categorie": "Géant",
    "nom": "Seigneur de guerre titan de feu",
    "description": "Un colosse fumant obsédé par la bataille, vêtu d'une armure sur mesure et brandissant un énorme maillet.",
    "motivation": "Rivaliser avec ses rivaux, conquérir les faibles, fabriquer de colossales machines de guerre",
    "difficulte": 21,
    "seuilMineur": 33,
    "seuilMajeur": 66,
    "blessure": 9,
    "stress": 8,
    "modAttaque": 6,
    "attaqueStandard": "Maillet : très courte, 4d10+10 phy",
    "experience": "Tactique +4",
    "aptitudes": [
      {
        "nom": "Impitoyable (2)",
        "tag": "passive",
        "texte": "Le Seigneur de guerre peut être mis en avant jusqu'à deux fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Créateur de colosse",
        "tag": "passive",
        "texte": "Compte à rebours (6). Quand le Seigneur de guerre entre dans la scène, activez le compte à rebours. Il avance quand le Seigneur de guerre est mis en avant. Quand il arrive à terme, invoquez la Machine de guerre gigantesque, qui apparaît au bord du champ de bataille et prend immédiatement la mise en avant."
      },
      {
        "nom": "Lâchez les chiens",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Seigneur de guerre invoque deux Meutes de chiens démoniaques, qui apparaissent à courte portée et prennent immédiatement la mise en avant."
      },
      {
        "nom": "Frappe tournoyante",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque standard contre toutes les cibles à très courte portée et gagnez une Peur."
      },
      {
        "nom": "Brise-sol",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Seigneur de guerre fracasse la terre d'un coup de maillet vers le bas et fasse une attaque contre un groupe à courte portée. Les cibles contre lesquelles l'attaque réussit subissent 4d10+10 dégâts directs. La zone devient un terrain difficile, et un PJ doit réussir un jet de réaction d'Agilité (16) pour la traverser."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "seigneur-demon-berzug",
    "palier": 4,
    "type": "Solo",
    "categorie": "Déchu",
    "nom": "Seigneur-démon Berzug",
    "description": "Le souverain d'un cercle profond des Cercles inférieurs, une énorme bête hybride à la queue de serpent, aux pattes arrière de lézard, aux bras en pinces de crabe et à la tête de loup à deux visages.",
    "motivation": "Détruire la bonté, semer le chaos, évincer ses rivaux",
    "difficulte": 20,
    "seuilMineur": 35,
    "seuilMajeur": 70,
    "blessure": 12,
    "stress": 8,
    "modAttaque": 8,
    "attaqueStandard": "Griffes abyssales : courte, 4d12+10 phy",
    "experience": "Savoir infernal +3",
    "aptitudes": [
      {
        "nom": "Impitoyable (3)",
        "tag": "passive",
        "texte": "Berzug peut être mis en avant jusqu'à trois fois par tour du MJ. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Fouet du chaos",
        "tag": "action",
        "texte": "Marquez un Stress pour que Berzug fouette jusqu'à trois PJ à courte portée et force chaque cible à faire un jet de réaction d'Agilité. Les cibles qui échouent subissent 4d20 dégâts physiques. Les cibles qui réussissent subissent la moitié des dégâts."
      },
      {
        "nom": "Regard dans l'abîme",
        "tag": "action",
        "texte": "Dépensez une Peur pour que Berzug plonge son regard dans celui d'un PJ à longue portée. La cible doit réussir un jet de réaction de Présence ou subir l'une des conditions suivantes (lancez un d6 et utilisez le résultat correspondant) : 1-2 : Hypnotisé. La cible se déplace immédiatement au Corps à corps de Berzug et est Vulnérable et Bloquée jusqu'à ce qu'elle lève la condition avec un jet d'Instinct réussi. 3-4 : Confus. La cible doit marquer un Stress chaque fois qu'elle fait un jet d'action jusqu'à ce qu'elle lève la condition avec un jet de Connaissance réussi. 5-6 : Asservi. Jusqu'à ce que le PJ réussisse un jet de Présence pour lever la condition, vous pouvez le mettre en avant pendant un tour du MJ comme s'il était un adversaire. Quand vous le faites, choisissez une cible à courte portée du PJ Asservi. Le PJ Asservi se déplace au Corps à corps de la cible et fait une attaque d'arme contre elle en utilisant un d20 au lieu des dés de Dualité."
      },
      {
        "nom": "Frappe écrasante",
        "tag": "réaction",
        "texte": "Quand un PJ marque des PB à cause de l'attaque standard de Berzug, vous pouvez marquer un Stress pour le forcer à marquer un nombre de Stress égal au nombre de PB qu'il a marqués. Vous gagnez une Peur."
      },
      {
        "nom": "Horrifiant",
        "tag": "réaction",
        "texte": "Quand un PJ échoue à une attaque contre Berzug, vous gagnez une Peur."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "chouette-maudite",
    "palier": 4,
    "type": "Soutien",
    "categorie": "Monstre",
    "nom": "Chouette maudite",
    "description": "Une chouette effraie géante et vengeresse, d'une envergure de quatre mètres cinquante et au visage humain.",
    "motivation": "Consumer l'essence, maudire, prédire la mort",
    "difficulte": 19,
    "seuilMineur": 27,
    "seuilMajeur": 47,
    "blessure": 4,
    "stress": 3,
    "modAttaque": 7,
    "attaqueStandard": "Serres rasoirs : très courte, 4d8+5 phy",
    "experience": "Magie +2, Rôdeuse nocturne +2",
    "aptitudes": [
      {
        "nom": "Mauvais présage",
        "tag": "passive",
        "texte": "Quand un PJ à courte portée fait un jet d'action, son dé de Peur gagne un bonus égal à la quantité de Peur que vous avez."
      },
      {
        "nom": "Barrière de sorcière",
        "tag": "passive",
        "texte": "La Chouette maudite a une résistance aux dégâts magiques."
      },
      {
        "nom": "Imitation de voix",
        "tag": "action",
        "texte": "Dépensez une Peur pour que la Chouette maudite appelle, avec la voix d'une personne chère, une créature à portée de voix. La cible doit réussir un jet de réaction d'Instinct ou se déplacer jusqu'à longue portée vers la Chouette maudite."
      },
      {
        "nom": "Regard cauchemardesque",
        "tag": "action",
        "texte": "Dépensez une Peur pour que la Chouette maudite Afflige un PJ à longue portée de cauchemars éveillés, à moins que la cible ne réussisse un jet de réaction de Connaissance. Tant qu'elle est Affligée, la cible ne peut pas effacer de PB ni de Stress. La condition est levée quand un autre PJ utilise une action de temps mort pour réconforter la créature Affligée."
      },
      {
        "nom": "Visions d'une fin violente",
        "tag": "réaction",
        "texte": "Quand la Chouette maudite est ciblée par une attaque, vous pouvez dépenser une Peur pour forcer l'attaquant à faire un jet de réaction de Présence. En cas d'échec, il doit marquer 1d4 Stress tandis que son esprit est inondé d'images déchirantes."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "titan-cephilith",
    "palier": 4,
    "type": "Solo",
    "categorie": "céphilith",
    "nom": "Titan céphilith",
    "description": "Une entité transdimensionnelle sous la forme d'un humanoïde ailé d'une taille improbable, à la tête de pieuvre et aux rangées d'yeux luisants.",
    "motivation": "Appeler et consumer ses fidèles, corrompre la réalité, envahir le Royaume mortel, déverser le chaos",
    "difficulte": 20,
    "seuilMineur": 38,
    "seuilMajeur": 68,
    "blessure": 10,
    "stress": 10,
    "modAttaque": 8,
    "attaqueStandard": "Pseudo-griffe : courte, 4d8+10 mag",
    "experience": "Chaos +5, Psychique +5",
    "aptitudes": [
      {
        "nom": "Impitoyable (X)",
        "tag": "passive",
        "texte": "Le Titan peut être mis en avant jusqu'à X fois par tour du MJ, où X est égal au nombre de PJ dans la scène. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Terrifiant",
        "tag": "passive",
        "texte": "Quand le Titan réussit une attaque, tous les PJ à courte portée perdent un Espoir et vous gagnez une Peur."
      },
      {
        "nom": "Simple projection",
        "tag": "passive",
        "texte": "Le Titan apparaît dans le Royaume mortel sous la forme d'une projection psychique approchant sa véritable forme. Il est immunisé contre les dégâts physiques et a une résistance aux dégâts magiques."
      },
      {
        "nom": "Hurlement psychique",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Titan déchaîne un flot de visions cauchemardesques des Royaumes extérieurs qui fracasse l'esprit. Chaque PJ à longue portée doit faire un jet de réaction d'Instinct (22). Les cibles qui échouent subissent 4d12 dégâts magiques directs. Les cibles qui réussissent doivent marquer un Stress."
      },
      {
        "nom": "Invoquer les fidèles",
        "tag": "action",
        "texte": "Dépensez une Peur pour invoquer 1d4 Abominations des Royaumes extérieurs, qui apparaissent à longue portée, puis choisissez-en une pour la mettre immédiatement en avant."
      },
      {
        "nom": "« Il est là… »",
        "tag": "évolution",
        "texte": "Quand le Titan a marqué la moitié de ses PB, il se manifeste sous sa forme complète, efface tous ses PB et perd l'aptitude « Simple projection ». Tant que le Titan est sous cette forme, une créature qui marque des PB à cause de l'attaque standard du Titan doit marquer 1 PB supplémentaire."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "titan-des-nuages",
    "palier": 4,
    "type": "Social",
    "categorie": "Géant",
    "nom": "Titan des nuages",
    "description": "Un colosse à la peau bleue d'une beauté extraordinaire, vêtu des plus fines soieries et ruisselant de bijoux. Il savoure les belles choses et vit dans un palais céleste rempli de trésors.",
    "motivation": "Acquérir des objets rares et précieux, célébrer la beauté, ne jamais refuser un pari intéressant",
    "difficulte": 18,
    "seuilMineur": 26,
    "seuilMajeur": 42,
    "blessure": 6,
    "stress": 5,
    "modAttaque": 3,
    "attaqueStandard": "Lame sertie de joyaux : très courte, 4d6+8 phy",
    "experience": "Luxe +3, Noblesse +3",
    "aptitudes": [
      {
        "nom": "Éclair foudroyant",
        "tag": "action",
        "texte": "Marquez un Stress pour faire une attaque contre une cible à longue portée. En cas de succès, infligez 4d10+14 dégâts magiques et lancez un d6. Sur un résultat de 4 ou plus, la foudre rebondit et le Titan fait cette attaque contre une cible différente à très courte portée de la précédente. Chaque fois que la foudre rebondit, diminuez ses dégâts de 1d10."
      },
      {
        "nom": "Tisseur de brume",
        "tag": "action",
        "texte": "Dépensez une Peur et choisissez un point à longue portée. Le Titan conjure un épais brouillard sur la zone à courte portée de ce point. Le Titan est Caché aux ennemis dans le brouillard et de l'autre côté, et a l'avantage aux attaques contre les créatures à l'intérieur. Le brouillard dure jusqu'à ce que le Titan marque des PB."
      },
      {
        "nom": "Transformation nébuleuse",
        "tag": "action",
        "texte": "Marquez un Stress pour que le Titan se transforme en un nuage de brume qui remplit une zone à très courte portée. Sous cette forme, le Titan subit le double des dégâts magiques et est immunisé contre les dégâts physiques. Cette forme dure jusqu'à ce que le Titan décide d'en sortir ou subisse des dégâts Grave."
      },
      {
        "nom": "Libérer la ménagerie",
        "tag": "action",
        "texte": "Une fois par scène, marquez n'importe quel nombre de Stress pour invoquer un nombre égal de Griffons, qui apparaissent à courte portée."
      },
      {
        "nom": "Ouvrier du vent",
        "tag": "action",
        "texte": "Dépensez une Peur pour que le Titan souffle un vent violent sur une cible à courte portée. La cible subit 4d6+8 dégâts physiques et est repoussée à longue portée de sa position actuelle."
      },
      {
        "nom": "Quitte ou double",
        "tag": "réaction",
        "texte": "Quand vous gagneriez une Peur à cause d'une attaque contre le Titan, vous pouvez lancer un d6. Sur un résultat impair, vous ne gagnez pas la Peur. Sur un résultat pair, vous gagnez 2 Peur au lieu de 1."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "dragonnet-3-pb",
    "palier": 4,
    "type": "Horde",
    "categorie": "Draconien",
    "nom": "Dragonnet (3/PB)",
    "description": "Une couvée de dragons nouvellement éclos. Nouveau-nés, ils sont furieux, affamés et stupides.",
    "motivation": "Consumer, déchiqueter, pulluler",
    "difficulte": 17,
    "seuilMineur": 25,
    "seuilMajeur": 45,
    "blessure": 8,
    "stress": 5,
    "modAttaque": 2,
    "attaqueStandard": "Minuscules mâchoires et griffes : mêlée, 4d6+10 phy",
    "experience": "Lien draconique +2",
    "aptitudes": [
      {
        "nom": "Horde (2d6+5)",
        "tag": "passive",
        "texte": "Quand les Dragonnet ont marqué la moitié ou plus de leurs PB, leur attaque standard inflige 2d6+5 dégâts physiques à la place."
      },
      {
        "nom": "Vorace",
        "tag": "réaction",
        "texte": "Une fois par tour du MJ, quand un PJ marque un PB à cause d'une attaque des Dragonnet , vous pouvez dépenser une Peur pour mettre de nouveau les Dragonnet en avant."
      },
      {
        "nom": "Submerger",
        "tag": "réaction",
        "texte": "Quand les Dragonnet subissent des dégâts Mineurs d'une attaque au Corps à corps, vous pouvez marquer un Stress pour faire une attaque standard avec avantage contre l'attaquant."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027)",
    "id": "xero-le-destructeur-de-chateaux",
    "palier": 4,
    "type": "Solo",
    "categorie": "Déchu",
    "nom": "Xero le destructeur de châteaux",
    "description": "Un reptile bipède de la taille d'un château.",
    "motivation": "Laisser un sillage de destruction, raser les bâtiments, piétiner les colonies",
    "difficulte": 20,
    "seuilMineur": 35,
    "seuilMajeur": 70,
    "blessure": 12,
    "stress": 10,
    "modAttaque": 8,
    "attaqueStandard": "Coup de queue : courte, 4d12+6 phy",
    "experience": "Destruction +5",
    "aptitudes": [
      {
        "nom": "Impitoyable (X)",
        "tag": "passive",
        "texte": "Xero peut être mis en avant jusqu'à X fois par tour du MJ, où X est le nombre de PJ dans la scène. Dépensez de la Peur comme d'habitude pour le mettre en avant."
      },
      {
        "nom": "Dégâts collatéraux",
        "tag": "passive",
        "texte": "Le déplacement de Xero ne peut être ni gêné, ni Bloqué, ni affecté par autre chose que le terrain naturel. Tous les obstacles et éléments de terrain destructibles sur le chemin de Xero sont détruits quand il les traverse."
      },
      {
        "nom": "Piétinement gigatonne",
        "tag": "action",
        "texte": "Dépensez une Peur pour que Xero abatte son pied avec force, créant un tremblement de terre localisé. Chaque PJ au Corps à corps subit 4d12 dégâts physiques et est Bloqué jusqu'à ce qu'il se dégage avec un jet de Finesse réussi. Chaque créature au-delà du Corps à corps mais à courte portée doit réussir un jet de réaction d'Instinct ou être projetée à longue portée. Si une cible est projetée, elle doit soit marquer un emplacement d'Armure, soit subir 4d12 dégâts physiques à l'atterrissage."
      },
      {
        "nom": "Dérapage",
        "tag": "action",
        "texte": "Marquez un Stress pour vous déplacer jusqu'à courte portée. Chaque PJ que Xero traverse doit réussir un jet de réaction de Force ou choisir entre marquer 2 emplacements d'Armure ou subir des dégâts Grave."
      },
      {
        "nom": "Souffle radioactif",
        "tag": "action",
        "texte": "Dépensez une Peur pour que Xero charge un rayon nucléaire. Placez un jeton sur ce bloc de stats. La prochaine fois que Xero est mis en avant, vous pouvez dépenser ce jeton et déchaîner un rayon jusqu'à très longue portée. Le rayon a une largeur de courte portée. Chaque PJ dans cette zone doit faire un jet de réaction d'Agilité. Les cibles qui échouent subissent 4d12+12 dégâts magiques directs. Les cibles qui réussissent subissent la moitié des dégâts. Xero ne peut pas réutiliser cette aptitude avant d'avoir subi des dégâts Grave."
      },
      {
        "nom": "Régénération",
        "tag": "action",
        "texte": "Jusqu'à trois fois par scène, dépensez n'importe quel nombre de Peur pour effacer un nombre égal de PB."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027, règne de la drakanthrope)",
    "id": "forlorne-lykona",
    "palier": 4,
    "type": "Solo",
    "categorie": "Draconien",
    "nom": "Forlorne Lykona",
    "description": "Majestueuse sous sa forme de faune, d'une beauté grotesque sous sa forme de dragon aux écailles violettes, la reine drakanthrope use de magie pour vaincre tous ceux qui menacent son règne.",
    "motivation": "S'élever jusqu'aux étoiles, apprendre de nouvelles magies, régner par la terreur, se transformer",
    "difficulte": null,
    "seuilMineur": null,
    "seuilMajeur": null,
    "blessure": 11,
    "stress": 8,
    "modAttaque": null,
    "attaqueStandard": null,
    "experience": "Savoir arcanique +5, Mort venue du ciel +5",
    "aptitudes": [
      {
        "nom": "Impitoyable (4)",
        "tag": "passive",
        "texte": "Forlorne peut être mise en avant jusqu'à quatre fois par tour du MJ. Dépensez de la Peur comme d'habitude pour la mettre en avant."
      },
      {
        "nom": "Transformation",
        "tag": "action",
        "texte": "Marquez un Stress pour que Forlorne passe de sa Forme de dragon à sa Forme de faune, ou inversement. Tant qu'elle incarne une forme, elle utilise ses statistiques et ses aptitudes."
      },
      {
        "nom": "Se nourrir de la Peur",
        "tag": "réaction",
        "texte": "Quand un PJ à courte portée échoue avec Peur, Forlorne peut effacer un PB ou un Stress."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027, règne de la drakanthrope)",
    "id": "forme-de-faune-de-forlorne",
    "palier": 4,
    "type": "Solo",
    "categorie": "Draconien",
    "nom": "Forme de faune de Forlorne",
    "description": "Cette forme reflète le charme diabolique, la civilité et la ruse de Forlorne. C'est son corps d'origine et la forme qui lui est la plus familière. Elle l'adopte lorsqu'elle supervise les affaires de son royaume, et c'est la forme sous laquelle les PJ ont le plus de chances de l'affronter en dehors des combats.",
    "motivation": null,
    "difficulte": 18,
    "seuilMineur": 35,
    "seuilMajeur": 70,
    "blessure": null,
    "stress": null,
    "modAttaque": 6,
    "attaqueStandard": "Incantation occulte : longue, 4d8+14 mag",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Téléportation de combat",
        "tag": "passive",
        "texte": "Avant ou après une attaque standard, vous pouvez marquer un Stress pour que Forlorne se téléporte à un endroit situé à longue portée."
      },
      {
        "nom": "Lianes agrippantes",
        "tag": "action",
        "texte": "Dépensez une Peur pour cibler un groupe à longue portée. Chaque cible doit réussir un jet de réaction d'Agilité ou subir 2d8+7 dégâts magiques et devenir Bloquée jusqu'à ce qu'elle se libère avec un jet de Force réussi. Les lianes persistent jusqu'à ce que Forlorne subisse des dégâts graves, utilise de nouveau cette aptitude ou y mette fin."
      },
      {
        "nom": "Regard de pierre",
        "tag": "réaction",
        "texte": "Quand Forlorne subit des dégâts d'une attaque à courte portée, vous pouvez dépenser 2 Peur pour forcer l'attaquant à faire un jet de réaction d'Instinct. En cas d'échec, la cible doit dépenser 3 Espoir ou gagner la malédiction de pétrification. Tant que cet état n'est pas effacé, la cible et l'équipement qu'elle porte ou transporte se changent en pierre. Sous l'effet de la malédiction de pétrification, la cible est Bloquée et Vulnérable, ne peut pas agir et gagne un bonus de +10 à ses seuils de dégâts."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027, règne de la drakanthrope)",
    "id": "forme-de-dragon-de-forlorne",
    "palier": 4,
    "type": "Solo",
    "categorie": "Draconien",
    "nom": "Forme de dragon de Forlorne",
    "description": "Cette forme reflète l'impitoyable intolérance de Forlorne, qui emprunte la forme de Sazanthe, dragon autrefois pacifique, pour semer la peur parmi son peuple. Sous sa forme de dragon, Forlorne est rapace et terrifiante, ayant abandonné les artifices de la civilité et de la royauté pour assouvir ses envies primitives.",
    "motivation": null,
    "difficulte": 20,
    "seuilMineur": 40,
    "seuilMajeur": 80,
    "blessure": null,
    "stress": null,
    "modAttaque": 8,
    "attaqueStandard": "Griffes et crocs : courte, 4d10+10 phy",
    "experience": null,
    "aptitudes": [
      {
        "nom": "Vol",
        "tag": "passive",
        "texte": "En vol, Forlorne gagne un bonus de +3 à sa Difficulté."
      },
      {
        "nom": "Terrifiante",
        "tag": "passive",
        "texte": "Quand Forlorne réussit une attaque, tous les PJ à longue portée perdent un Espoir et vous gagnez une Peur."
      },
      {
        "nom": "Souffle dévastateur",
        "tag": "action",
        "texte": "Dépensez 2 Peur pour que Forlorne expire un nuage d'énergie magique qui remplit une zone à courte portée. Chaque cible dans cette zone doit faire un jet de réaction de Présence. En cas d'échec, elle doit marquer 3 Stress ou gagner la malédiction du drake-garou. Sous l'effet de cette malédiction, la cible lâche son équipement et son butin et se transforme en adversaire drake-garou sous le contrôle du MJ. Une fois cet état effacé, la cible ne garde aucun souvenir du temps passé sous forme de drake-garou."
      },
      {
        "nom": "Coup de queue",
        "tag": "réaction",
        "texte": "Quand Forlorne marque 1 PB ou plus à cause d'une attaque à très courte portée, vous pouvez marquer un Stress pour infliger 2d10+10 dégâts physiques à toutes les créatures à cette portée."
      }
    ]
  },
  {
    "source": "Espoir et Peur (2027, règne de la drakanthrope)",
    "id": "drake-garou",
    "palier": 1,
    "type": "Standard",
    "categorie": "Draconien",
    "nom": "Drake-garou",
    "description": "Une personne transformée en prédateur draconique sans ailes par le souffle d'un drakanthrope.",
    "motivation": "Faim de chair, chasser en petites meutes",
    "difficulte": 12,
    "seuilMineur": 8,
    "seuilMajeur": 14,
    "blessure": 5,
    "stress": 2,
    "modAttaque": 2,
    "attaqueStandard": "Griffes et crocs : mêlée, 1d8+3 phy",
    "experience": "Chasseur de meute +3",
    "aptitudes": [
      {
        "nom": "Grimpeur",
        "tag": "passive",
        "texte": "Le Drake-garou grimpe aussi aisément qu'il court."
      },
      {
        "nom": "Tactique de meute",
        "tag": "passive",
        "texte": "Quand le Drake-garou réussit une attaque standard et qu'un autre Drake-garou se trouve au Corps à corps de la cible, infligez 1d8+6 dégâts physiques au lieu des dégâts standard et gagnez une Peur."
      },
      {
        "nom": "Apparence innocente",
        "tag": "action",
        "texte": "Le Drake-garou prend magiquement la forme qu'avait la personne avant sa transformation, mais conserve ses griffes et ses crocs. Cette forme dure jusqu'à sa mort ou jusqu'à ce qu'il utilise de nouveau cette aptitude pour reprendre sa forme draconique."
      }
    ]
  }
]
};
