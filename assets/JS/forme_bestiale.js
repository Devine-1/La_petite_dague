// Données des Formes Bestiales du Druide (Daggerheart v1.5 Open Beta)
// À placer dans assets/JS/forme_bestiale.js, au même endroit que les
// autres fichiers de données (arme_principale.js, armure.js, etc.)
//
// Format de chaque forme :
//   palier      : 1 à 4 (Palier 1/2/3/4 du tableau des formes bestiales)
//   niveau      : niveau de personnage requis pour débloquer l'étape (1, 2, 5, 8)
//   nom         : nom de la forme
//   exemple     : exemples d'animaux correspondant à cette forme
//   stat        : ligne de statistiques (trait augmenté | attaque/portée/trait/dé de dégâts | esquive)
//   avantage    : liste des actions bénéficiant d'un avantage sous cette forme
//   aptitudes   : tableau des aptitudes de la forme, chacune avec { nom, description }

const FORME_BESTIALE_DATA = {

  formes_bestiales: [

    // --- Palier 1 (niveau 1) ---
    {
      source: "Livre de règle (2026)",
      palier: 1, niveau: 1,
      nom: "Éclaireur Agile",
      exemple: "Renard, Souris, Belette, etc.",
      stat: "+1 Agilité | Attaque Mêlée/Agilité/d4 (phy) | Esquive +2",
      avantage: "Tromper, Localiser, Se faufiler",
      aptitudes: [
        { nom: "Agile", description: "Vos mouvements sont silencieux et vous pouvez dépenser de l'Espoir pour vous rendre n'importe où à portée Lointaine sans avoir besoin de faire un jet." },
        { nom: "Fragile", description: "Lorsque vous subissez des dégâts Majeurs ou plus, vous quittez la Forme Bestiale." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 1, niveau: 1,
      nom: "Ami Domestique",
      exemple: "Chien, Chat, Lapin, etc.",
      stat: "+1 Instinct | Attaque Mêlée/Instinct/d6 (phy) | Esquive +2",
      avantage: "Grimper, Localiser, Protéger",
      aptitudes: [
        { nom: "Compagnon", description: "Lorsque vous assistez un autre PJ, le dé d'avantage que vous lancez est un d8." },
        { nom: "Fragile", description: "Lorsque vous subissez des dégâts Majeurs ou plus, vous quittez la Forme Bestiale." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 1, niveau: 1,
      nom: "Herbivore Rapide",
      exemple: "Cerf, Chèvre, Gazelle, etc.",
      stat: "+1 Agilité | Attaque Mêlée/Agilité/d6 (phy) | Esquive +3",
      avantage: "Saut, Furtivité, Sprint",
      aptitudes: [
        { nom: "Proie Évasive", description: "Lorsque vous êtes sur le point d'être touché par une attaque, vous pouvez marquer un Stress et lancer 1d4. Ajoutez le résultat à votre Esquive pour cette attaque." },
        { nom: "Fragile", description: "Lorsque vous subissez des Dégâts Majeurs ou plus, vous perdez votre Forme Bestiale." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 1, niveau: 1,
      nom: "Prédateur de Meute",
      exemple: "Loup, Coyote, Hyène, etc.",
      stat: "+2 Force | Attaque Mêlée/Force/d8+2 (phy) | Esquive +1",
      avantage: "Attaquer, Sprinter, Traquer",
      aptitudes: [
        { nom: "Chasse en Meute", description: "Lorsque vous faites un jet d'attaque sur la même cible qu'un allié juste avant vous, ajoutez un d8 supplémentaire à vos dés de dégâts." },
        { nom: "Frappe Handicapante", description: "Lorsque vous réussissez une attaque au corps à corps, vous pouvez marquer un Stress pour rendre la cible temporairement Vulnérable." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 1, niveau: 1,
      nom: "Éclaireur Aquatique",
      exemple: "Poisson, Anguille, Pieuvre",
      stat: "+1 Agilité | Attaque Mêlée/Agilité/d4 (phy) | Esquive +2",
      avantage: "Naviguer, Se faufiler, Nager",
      aptitudes: [
        { nom: "Aquatique", description: "Vous pouvez respirer et vous déplacer naturellement sous l'eau." },
        { nom: "Fragile", description: "Lorsque vous subissez des dégâts Majeurs ou plus, vous quittez la Forme Bestiale." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 1, niveau: 1,
      nom: "Arachnide Traqueur",
      exemple: "Tarantule, Araignée-loup, etc.",
      stat: "+1 Finesse | Attaque Mêlée/Finesse/d6+1 (phy) | Esquive +2",
      avantage: "Attaquer, Grimper, Se faufiler",
      aptitudes: [
        { nom: "Lanceur de Toile", description: "Vous avez la capacité de créer du matériau en toile solide, utile tant pour l'aventure que pour le combat. Il est assez résistant pour supporter une seule créature. Vous pouvez rendre une cible à portée Proche Entravée en réussissant un jet de Finesse contre elle." },
        { nom: "Morsure Venimeuse", description: "Lorsque vous réussissez une attaque au corps à corps, la cible devient temporairement Empoisonnée. Une créature Empoisonnée subit 1d10 dégâts directs physiques chaque fois qu'elle agit. Cette condition ne peut pas s'accumuler." }
      ]
    },

    // --- Palier 2 (niveau 2) ---
    {
      source: "Livre de règle (2026)",
      palier: 2, niveau: 2,
      nom: "Sentinelle Blindée",
      exemple: "Tatou, Pangolin, Tortue, etc.",
      stat: "+1 Force | Attaque Mêlée/Force/d8+2 (phy) | Esquive +1",
      avantage: "Creuser, Protéger, Localiser",
      aptitudes: [
        { nom: "Carapace Blindée", description: "Vous avez une Résistance aux dégâts physiques. Vous pouvez également marquer une case d'armure pour vous replier dans votre carapace. Si vous le faites, les dégâts physiques sont également réduits de moitié (après avoir été réduits de moitié), mais vous ne pouvez effectuer aucune autre action à l'exception de vous déplacer sans quitter cette forme." },
        { nom: "Boulet de Canon", description: "Vous pouvez marquer du Stress pour être lancé ou propulsé sur un adversaire. Un allié effectue un jet d'attaque avec Agilité ou Force contre une cible à portée Près. En cas de succès, infligez d12+2 dégâts en utilisant la Maîtrise de l'attaquant. S'il y a un autre ennemi Très Proche de la cible, en cas de succès, vous pouvez également dépenser de l'Espoir pour ricocher sur le premier ennemi et frapper le second pour la moitié des dégâts." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 2, niveau: 2,
      nom: "Bête Brutale",
      exemple: "Ours, Taureau, Élan, etc.",
      stat: "+1 Force | Attaque Mêlée/Force/d10+4 (phy) | Esquive +3",
      avantage: "Naviguer, Effrayer, Protéger",
      aptitudes: [
        { nom: "Carnage", description: "Lorsque vous lancez des dés pour infliger des dégâts d'une attaque, pour chaque 1 que vous obtenez, vous pouvez lancer un autre d10 et l'ajouter à votre jet de dégâts. Avant de faire un jet d'attaque, vous pouvez marquer du Stress pour gagner +1 en Maîtrise pour l'attaque." },
        { nom: "Peau Épaisse", description: "Vous augmentez vos Seuils de Dégâts de +2 dans cette forme." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 2, niveau: 2,
      nom: "Grand Coureur",
      exemple: "Chameau, Cheval, Zèbre, etc.",
      stat: "+1 Agilité | Attaque Mêlée/Agilité/d8+1 (phy) | Esquive +2",
      avantage: "Sauter, Orienter, Sprinter",
      aptitudes: [
        { nom: "Porteur", description: "Vous pouvez transporter jusqu'à 2 alliés volontaires avec vous lorsque vous vous déplacez." },
        { nom: "Piétinement", description: "Vous pouvez marquer du Stress pour vous déplacer jusqu'à portée Proche en ligne droite et effectuer une attaque au corps à corps contre chaque cible que vous croisez pendant ce mouvement. Chaque cible touchée subit d8+1 dégâts (phy) en utilisant votre compétence et est renversée, devenant temporairement Vulnérable." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 2, niveau: 2,
      nom: "Serpent Agressif",
      exemple: "Vipère, Cobra, Serpent à sonnettes, etc.",
      stat: "+1 Finesse | Attaque Très Près/Finesse/d8+4 (phy) | Esquive +2",
      avantage: "Attaquer, Grimper, Tromper",
      aptitudes: [
        { nom: "Coup Venimeux", description: "Attaquez toutes les cibles à portée Très Près. Toute cible touchée devient temporairement Empoisonnée. Une créature Empoisonnée subit 1d10 dégâts physiques directs chaque fois qu'elle agit. Cette condition ne peut pas s'accumuler." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 2, niveau: 2,
      nom: "Prédateur Bondissant",
      exemple: "Guépard, Lion, Panthère, etc.",
      stat: "+1 Instinct | Attaque Mêlée/Instinct/d8+6 (phy) | Esquive +3",
      avantage: "Attaquer, Grimper, Se faufiler",
      aptitudes: [
        { nom: "Rapide", description: "Vous pouvez dépenser de l'Espoir pour vous déplacer n'importe où à portée Loin sans avoir besoin de faire un jet." },
        { nom: "Bondir", description: "Marquez un Stress pour vous déplacer en mêlée avec une cible et effectuer une attaque de base contre elle. En cas de succès, ajoutez +2 à la Maîtrise pour les dégâts et faites marquer du Stress à la cible." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 2, niveau: 2,
      nom: "Bête Ailée",
      exemple: "Corbeau, Faucon, Hibou, etc.",
      stat: "+1 Finesse | Attaque Mêlée/Finesse/d4+2 (phy) | Esquive +3",
      avantage: "Tromper, Localiser, Effrayer",
      aptitudes: [
        { nom: "Vue d'Oiseau", description: "Vous pouvez voler à volonté dans cette forme. Lorsque vous volez et regardez le paysage en dessous pour mieux comprendre une situation, faites un jet d'action. En cas de succès, vous obtenez de nouvelles informations utiles. Prenez avantage lorsque vous ou un allié faites un jet pour agir en fonction de ces informations." },
        { nom: "Os Creux", description: "Vous réduisez vos Seuils de Dégâts de -2 dans cette forme." }
      ]
    },

    // --- Palier 3 (niveau 5) ---
    {
      source: "Livre de règle (2026)",
      palier: 3, niveau: 5,
      nom: "Grand Prédateur",
      exemple: "Loup Glacial, Tigre à Dent de Sabre, Rapace, etc.",
      stat: "+2 Force | Attaque Mêlée/Force/d12+8 (phy) | Esquive +2",
      avantage: "Attaque, Furtivité, Sprint",
      aptitudes: [
        { nom: "Mutilation Vicieuse", description: "Lorsque vous attaquez avec succès une créature, vous pouvez dépenser un Espoir pour ajouter +1 à votre Maîtrise pour l'attaque et rendre temporairement la cible Vulnérable." },
        { nom: "Transporteur", description: "Vous pouvez porter jusqu'à 2 alliés consentants avec vous lorsque vous vous déplacez." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 3, niveau: 5,
      nom: "Lézard Puissant",
      exemple: "Alligator, Crocodile, Monstre Gila, etc.",
      stat: "+2 Instinct | Attaque Mêlée/Instinct/d10+7 (phy) | Esquive +1",
      avantage: "Attaque, Pister, Furtivité",
      aptitudes: [
        { nom: "Grande Gueule", description: "Lorsque vous touchez un adversaire avec une attaque en mêlée, vous pouvez dépenser un Espoir pour le maintenir en place avec vos mâchoires, le rendant Restreint et Vulnérable." },
        { nom: "Défense Physique", description: "Augmentez vos Seuils de Dégâts de +3." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 3, niveau: 5,
      nom: "Grande Bête Ailée",
      exemple: "Aigle Géant, Faucheau, etc.",
      stat: "+2 Finesse | Attaque Mêlée/Finesse/d8+6 (phy) | Esquive +3",
      avantage: "Localiser, Tromper, Détourner",
      aptitudes: [
        { nom: "Vue d'Oiseau", description: "Vous pouvez voler à volonté sous cette forme. Lorsque vous volez et que vous regardez le paysage en bas pour mieux comprendre une situation, effectuez un jet d'action. En cas de succès, vous obtenez de nouvelles informations utiles. Avantage lorsque vous ou un allié effectuez un jet pour agir sur ces informations." },
        { nom: "Transporteur", description: "Vous pouvez porter jusqu'à 2 alliés consentants avec vous lorsque vous vous déplacez." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 3, niveau: 5,
      nom: "Prédateur Aquatique",
      exemple: "Dauphin, Requin, Orque, etc.",
      stat: "+2 Agilité | Attaque Mêlée/Agilité/d10+6 (phy) | Esquive +4",
      avantage: "Pister, Attaquer, Nager",
      aptitudes: [
        { nom: "Aquatique", description: "Vous pouvez respirer et vous déplacer naturellement sous l'eau." },
        { nom: "Mutilation Sournoise", description: "Lorsque vous attaquez avec succès une créature, vous pouvez dépenser un Espoir pour la rendre temporairement Vulnérable." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 3, niveau: 5,
      nom: "Hybride Légendaire",
      exemple: "Griffon, Sphinx, etc.",
      stat: "+2 Force | Attaque Mêlée/Force/d10+8 (phy) | Esquive +3",
      avantage: "",
      aptitudes: [
        { nom: "Caractéristiques Hybrides", description: "Choisissez deux options de forme bestiale des Niveaux 1-3. Prenez leurs capacités et avantages." }
      ]
    },

    // --- Palier 4 (niveau 8) ---
    {
      source: "Livre de règle (2026)",
      palier: 4, niveau: 8,
      nom: "Béhémoth Massif",
      exemple: "Éléphant, Mammouth, Rhinocéros, etc.",
      stat: "+3 Force | Attaque Mêlée/Force/d12+12 (phy) | Esquive +1",
      avantage: "Localiser, Protéger, Faire peur, Sprint",
      aptitudes: [
        { nom: "Piétinement", description: "Vous pouvez dépenser un Espoir pour vous déplacer jusqu'à une distance Lointaine en ligne droite et faire un jet d'attaque en mêlée contre toutes les créatures avec lesquelles vous entrerez en collision. Celles que vous frappez subissent d8+10 (phy) dégâts en utilisant votre Maîtrise." },
        { nom: "Indomptable", description: "Augmentez tous vos seuils de dégâts de +2." },
        { nom: "Transporteur Puissant", description: "Vous pouvez porter jusqu'à 4 alliés consentants avec vous lorsque vous vous déplacez." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 4, niveau: 8,
      nom: "Lézard Terrifiant",
      exemple: "Tyrannosaure, Brontosaure, etc.",
      stat: "+3 Force | Attaque Mêlée/Force/d12+10 (phy) | Esquive +2",
      avantage: "Attaque, Tromper, Faire peur, Pister",
      aptitudes: [
        { nom: "Coups Dévastateurs", description: "Lorsque vous infligez des dégâts Sévères à une cible avec une attaque en mêlée, marquez un Stress pour lui faire perdre 1 HP de plus." },
        { nom: "Pas Massif", description: "Vous pouvez vous déplacer jusqu'à une distance Lointaine sans lancer de dé et ignorer la plupart des terrains difficiles en raison de votre taille." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 4, niveau: 8,
      nom: "Chasseur Aérien Mythique",
      exemple: "Dragon, Ptérodactyle, Roc, Wyvern, etc.",
      stat: "+3 Finesse | Attaque Mêlée/Finesse/d10+11 (phy) | Esquive +4",
      avantage: "Attaque, Tromper, Naviguer, Localiser",
      aptitudes: [
        { nom: "Rapace Mortel", description: "Vous pouvez voler à volonté sous cette forme et vous déplacer jusqu'à une distance Lointaine lors d'une action. Lorsque vous vous déplacez d'au moins une distance Proche avant de faire une attaque et que vous réussissez, vous pouvez relancer tous les dés de dégâts qui tombent en dessous de votre Maîtrise, en prenant le nouveau résultat." },
        { nom: "Transporteur", description: "Vous pouvez porter jusqu'à 3 alliés consentants avec vous lorsque vous vous déplacez." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 4, niveau: 8,
      nom: "Bête Aquatique Épique",
      exemple: "Baleine, Calmar Géant, etc.",
      stat: "+3 Agilité | Attaque Mêlée/Agilité/d10+10 (phy) | Esquive +3",
      avantage: "Localiser, Protéger, Faire peur, Pister",
      aptitudes: [
        { nom: "Maître des Océans", description: "Vous pouvez respirer et vous déplacer naturellement sous l'eau. Lorsque vous réussissez une attaque en mêlée, vous pouvez agripper la cible et la rendre temporairement Restreinte." },
        { nom: "Inébranlable", description: "Lorsque vous devez marquer des cases d'armure, lancez 1d6 par case marquée. Pour chaque 5 ou plus, ne la marquez pas." }
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 4, niveau: 8,
      nom: "Hybride Mythique",
      exemple: "Chimère, Manticore, Cockatrice, etc.",
      stat: "+3 Force | Attaque Mêlée/Force/d12 (phy) | Esquive +2",
      avantage: "",
      aptitudes: [
        { nom: "Caractéristiques Hybrides", description: "Choisissez trois options de forme animale. Prenez leurs capacités et avantages." }
      ]
    }

  ],

  // Options d'évolution : bonus appliqués à une forme de niveau inférieur déjà
  // choisie, plutôt que des formes indépendantes.
  options_evoluees: [
    {
      source: "Livre de règle (2026)",
      palier: 3, niveau: 5,
      nom: "Bête Légendaire",
      description: "Choisissez une option de forme animale de Niveau 1 et devenez une version plus grande et plus puissante de cette créature. Conservez tous les traits et caractéristiques, sauf pour les bonus suivants :",
      bonus: [
        "Ajoutez +6 à vos jets de dégâts sous cette forme.",
        "Ajoutez +1 au trait augmenté par cette forme.",
        "Augmentez le bonus d'Esquive de +2."
      ]
    },
    {
      source: "Livre de règle (2026)",
      palier: 4, niveau: 8,
      nom: "Bête Mythique",
      description: "Choisissez une option de forme animale de Niveau 1 ou 2 et devenez une version plus grande et plus puissante de cette créature. Conservez tous les traits et caractéristiques, sauf pour les bonus suivants :",
      bonus: [
        "Augmentez votre dé de dégâts d'une taille (d6 devient d8, d8 devient d10, etc.)",
        "Ajoutez +9 à vos jets de dégâts sous cette forme.",
        "Ajoutez +2 au trait augmenté par cette forme.",
        "Augmentez le bonus d'Esquive de +3."
      ]
    }
  ]

};
