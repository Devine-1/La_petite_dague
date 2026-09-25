const ARMURE_DATA = {
  "armures": [
    {
      "source": "Livre de règle (2026)",
      "palier": 1,
      "nom": "Gambison",
      "seuil_dommages_mineurs": 5,
      "seuil_dommages_majeurs": 11,
      "valeur_base": 3,
      "aptitude": {
        "nom": "Flexible",
        "description": "+1 à l'Esquive"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 1,
      "nom": "Armure de cuir",
      "seuil_dommages_mineurs": 6,
      "seuil_dommages_majeurs": 13,
      "valeur_base": 3,
      "aptitude": null
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 1,
      "nom": "Cotte de mailles",
      "seuil_dommages_mineurs": 7,
      "seuil_dommages_majeurs": 15,
      "valeur_base": 4,
      "aptitude": {
        "nom": "Lourd",
        "description": "-1 à Esquive"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 1,
      "nom": "Armure de plates",
      "seuil_dommages_mineurs": 8,
      "seuil_dommages_majeurs": 17,
      "valeur_base": 4,
      "aptitude": {
        "nom": "Très lourd",
        "description": "-2 à l'Esquive; -1 à l'Agilité"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 2,
      "nom": "Gambison amélioré",
      "seuil_dommages_mineurs": 7,
      "seuil_dommages_majeurs": 16,
      "valeur_base": 4,
      "aptitude": {
        "nom": "Flexible",
        "description": "+1 à l'Esquive"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 2,
      "nom": "Armure de cuir amélioré",
      "seuil_dommages_mineurs": 9,
      "seuil_dommages_majeurs": 20,
      "valeur_base": 4,
      "aptitude": null
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 2,
      "nom": "Cotte de mailles amélioré",
      "seuil_dommages_mineurs": 11,
      "seuil_dommages_majeurs": 24,
      "valeur_base": 5,
      "aptitude": {
        "nom": "Lourd",
        "description": "-1 à Esquive"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 2,
      "nom": "Armure de plates amélioré",
      "seuil_dommages_mineurs": 13,
      "seuil_dommages_majeurs": 28,
      "valeur_base": 5,
      "aptitude": {
        "nom": "Très lourd",
        "description": "-2 à l'Esquive; -1 à l'Agilité"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 2,
      "nom": "Cotte de mailles d'Elundrian",
      "seuil_dommages_mineurs": 9,
      "seuil_dommages_majeurs": 21,
      "valeur_base": 4,
      "aptitude": {
        "nom": "Défenseur",
        "description": "Vous réduisez les dégâts magiques imminents d'un montant égal à votre Valeur d'armure avant de les appliquer à vos seuils de dégâts."
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 2,
      "nom": "Armure d'ostriste",
      "seuil_dommages_mineurs": 9,
      "seuil_dommages_majeurs": 21,
      "valeur_base": 4,
      "aptitude": {
        "nom": "Résilient",
        "description": "Lancez un d6 avant de cocher votre dernier Emplacement d'armure. Sur un 6, vous réduisez la gravité des dégâts d'un seuil sans cocher d'Emplacement."
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 2,
      "nom": "Cuirasse d'arbrefer",
      "seuil_dommages_mineurs": 9,
      "seuil_dommages_majeurs": 20,
      "valeur_base": 4,
      "aptitude": {
        "nom": "Renforcé",
        "description": "Lorsque vous cochez votre dernier Emplacement d'armure, augmentez vos seuils de dégâts de +2 jusqu'à ce que vous effaciez au moins un Emplacement d'armure"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 2,
      "nom": "Armure flottante de Runetan",
      "seuil_dommages_mineurs": 9,
      "seuil_dommages_majeurs": 20,
      "valeur_base": 4,
      "aptitude": {
        "nom": "Mouvant",
        "description": "Lorsque vous êtes la cible d'une attaque, vous pouvez cocher un Emplacement d'armure pour imposer un désavantage au jet d'attaque."
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 2,
      "nom": "Douce armure de Tyris",
      "seuil_dommages_mineurs": 8,
      "seuil_dommages_majeurs": 18,
      "valeur_base": 5,
      "aptitude": {
        "nom": "Silencieux",
        "description": "Vous gagnez un bonus de +2 aux jets pour vous déplacer en silence."
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 2,
      "nom": "Armure de rosesauvage",
      "seuil_dommages_mineurs": 11,
      "seuil_dommages_majeurs": 23,
      "valeur_base": 5,
      "aptitude": {
        "nom": "Optimiste",
        "description": "Lorsque vous devriez dépenser un Espoir, vous pouvez cocher un Emplacement d'armure à la place."
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 3,
      "nom": "Gambison Perfectionné",
      "seuil_dommages_mineurs": 9,
      "seuil_dommages_majeurs": 23,
      "valeur_base": 5,
      "aptitude": {
        "nom": "Flexible",
        "description": "+1 à l'Esquive"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 3,
      "nom": "Armure de cuir Perfectionné",
      "seuil_dommages_mineurs": 11,
      "seuil_dommages_majeurs": 27,
      "valeur_base": 5,
      "aptitude": null
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 3,
      "nom": "Cotte de mailles Perfectionné",
      "seuil_dommages_mineurs": 13,
      "seuil_dommages_majeurs": 31,
      "valeur_base": 6,
      "aptitude": {
        "nom": "Lourd",
        "description": "-1 à Esquive"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 3,
      "nom": "Armure de plates Perfectionné",
      "seuil_dommages_mineurs": 15,
      "seuil_dommages_majeurs": 35,
      "valeur_base": 6,
      "aptitude": {
        "nom": "Très lourd",
        "description": "-2 à l'Esquive; -1 à l'Agilité"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 3,
      "nom": "Élégante armure de Bellamoi",
      "seuil_dommages_mineurs": 11,
      "seuil_dommages_majeurs": 27,
      "valeur_base": 5,
      "aptitude": {
        "nom": "Doré",
        "description": "+1 à la Présence"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 3,
      "nom": "Armure en écailles de dragon",
      "seuil_dommages_mineurs": 11,
      "seuil_dommages_majeurs": 27,
      "valeur_base": 5,
      "aptitude": {
        "nom": "Impénétrable",
        "description": "Une fois par court repes, vous pouvez cocher un Stress aulicu de votre dernie point de Blessure."
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 3,
      "nom": "Armure de plates hérissée.",
      "seuil_dommages_mineurs": 10,
      "seuil_dommages_majeurs": 25,
      "valeur_base": 5,
      "aptitude": {
        "nom": "Acéré",
        "description": "Ajoutez un d4 au jet d'attaque lors d'une attaque réussie contre une cible en Milée."
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 3,
      "nom": "Armure des lames",
      "seuil_dommages_mineurs": 16,
      "seuil_dommages_majeurs": 39,
      "valeur_base": 6,
      "aptitude": {
        "nom": "Physique",
        "description": "Vous ne pouvez pas cocher d'Emplacement d'armure pour réduire les dégâts magiques"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 3,
      "nom": "Cape de Monett",
      "seuil_dommages_mineurs": 16,
      "seuil_dommages_majeurs": 39,
      "valeur_base": 6,
      "aptitude": {
        "nom": "Magique",
        "description": "Vous ne pouvez pas cocher d'Emplacement d' armure pour réduire les dégâts physiques."
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 3,
      "nom": "Runes de fortification",
      "seuil_dommages_mineurs": 17,
      "seuil_dommages_majeurs": 43,
      "valeur_base": 6,
      "aptitude": {
        "nom": "Douloureux",
        "description": "Vous devez cocher un Stress chaque fois que vous cochez un Emplacement d'armure."
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 4,
      "nom": "Gambison légendaire",
      "seuil_dommages_mineurs": 11,
      "seuil_dommages_majeurs": 32,
      "valeur_base": 6,
      "aptitude": {
        "nom": "Flexible",
        "description": "+1 à l'Esquive"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 4,
      "nom": "Armure de cuir légendaire",
      "seuil_dommages_mineurs": 13,
      "seuil_dommages_majeurs": 36,
      "valeur_base": 6,
      "aptitude": null
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 4,
      "nom": "Cotte de mailles légendaire",
      "seuil_dommages_mineurs": 15,
      "seuil_dommages_majeurs": 40,
      "valeur_base": 7,
      "aptitude": {
        "nom": "Lourd",
        "description": "-1 à Esquive"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 4,
      "nom": "Armure de plates légendaire",
      "seuil_dommages_mineurs": 17,
      "seuil_dommages_majeurs": 44,
      "valeur_base": 7,
      "aptitude": {
        "nom": "Très lourd",
        "description": "-2 à l'Esquive; -1 à l'Agilité"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 4,
      "nom": "Cotte de soie de Dunamis",
      "seuil_dommages_mineurs": 13,
      "seuil_dommages_majeurs": 36,
      "valeur_base": 7,
      "aptitude": {
        "nom": "Temps ralenti",
        "description": "Cochez un Emplacement d'armure pour lancer un d4 et ajouter son résultat comme bonus à votre Esquive contre une attaque imminente."
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 4,
      "nom": "Armure canalisatrice",
      "seuil_dommages_mineurs": 13,
      "seuil_dommages_majeurs": 36,
      "valeur_base": 5,
      "aptitude": {
        "nom": "Canalisation",
        "description": "+1 aux jets d'Incantation"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 4,
      "nom": "Armure braisetissée.",
      "seuil_dommages_mineurs": 13,
      "seuil_dommages_majeurs": 36,
      "valeur_base": 6,
      "aptitude": {
        "nom": "Combustion",
        "description": "Quand un adversaire vous attaque en Mêlée, il doit cocher un Stress."
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 4,
      "nom": "Plate fortifiée",
      "seuil_dommages_mineurs": 15,
      "seuil_dommages_majeurs": 40,
      "valeur_base": 4,
      "aptitude": {
        "nom": "Fortifié",
        "description": "Lorsque vous cochez un Emplacement d'armure, vous réduisez la gravité de l'attaque de deux seuls au lieu d'un seul."
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 4,
      "nom": "Armure d'opale de Veritas",
      "seuil_dommages_mineurs": 13,
      "seuil_dommages_majeurs": 36,
      "valeur_base": 6,
      "aptitude": {
        "nom": "Cherchevérité",
        "description": "L'armure luit quand une créature autre que vous située à Courte portée ment"
      }
    },
    {
      "source": "Livre de règle (2026)",
      "palier": 4,
      "nom": "Cotte de mailles du sauveur",
      "seuil_dommages_mineurs": 18,
      "seuil_dommages_majeurs": 48,
      "valeur_base": 8,
      "aptitude": {
        "nom": "Difficile",
        "description": "-1 à tous les traits de personnage et à l'Esquive."
      }
    }
  ]
};
