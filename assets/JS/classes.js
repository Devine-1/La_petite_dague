// Données CLASSES_DATA — modifiez ce fichier librement, la structure reste au format JSON.
const CLASSES_DATA = {
  "classes": [
    {
      "source": "Livre de règle (2026)",
      "nom": "Barde",
      "description": "Les bardes sont les personnes les plus charismatiques de tous les royaumes. Les membres de cette classe sont des maîtres de la captivation et se spécialisent dans une variété de types de performances, notamment chanter, jouer d'instruments de musique, tisser des contes ou raconter des blagues. Qu'ils se produisent devant un public ou qu'ils parlent à un individu, les bardes s'épanouissent dans des situations sociales. Les membres de cette profession créent des liens et se forment dans des écoles ou des guildes, mais un courant d'égoïsme traverse ceux de la persuasion bardique. Même s’ils constituent peut-être la classe la plus susceptible de rassembler les gens, un barde de mauvaise humeur peut tout aussi bien déchirer un parti.",
      "domaines": [
        "Grâce",
        "Arcane"
      ],
      "aptitude_espoir": {
        "nom": "Faire une scène",
        "description": "Dépensez 3 Espoir pour distraire temporairement une cible à courte portée, ce qui impose un malus de -2 à leur difficulté."
      },
      "aptitudes_classe": [
        {
          "nom": "Ralliement",
          "description": "Une fois par session, décrivez comment vous ralliez votre groupe et offrez à vos alliés et vous-même un dés de Ralliement. Au niveau 1, votre dés de Ralliement est un d6. Un PJ peut dépenser son dé de Ralliement pour le lancer et ajouter le résultat à son d'action,  de réactio ou de dégâts ou pour effacer un nombre de stress égal au résultat. À la fin de chaque session, les dés de ralliementnon non dépensés sont perdu. Au niveau 5, votre dés de raliement devient un D8."
        }
      ],
      "equipement_depart": {
        "esquive": 10,
        "points_blessure": 5,
        "objets_classe": [
          "Un roman d'amour",
          "Une lettre jamais ouverte."
        ],
        "attributs": {
          "agilite": 0,
          "force": -1,
          "finesse": "+1",
          "instinct": 0,
          "presence": "+2",
          "savoir": "+1"
        },
        "arme_primaire": "Rapière",
        "arme_secondaire": "Petite dague",
        "armure": "Gambison"
      },
      "sous_classes": [
        {
          "nom": "Troubadour",
          "description": "Jouez au Troubadour si vous voulez jouer de la musique pour renforcer vos alliés.",
          "trait_incantation": "Présence",
          "paliers": {
            "base": [
              {
                "nom": "Artiste talentueux",
                "description": "Décrivez comment vous donnez une représentation pour les autres. Vous pouvez jouer chaque représentation pour les autres. Vous pouvez jouer chaque chanson une fois par repos long :<br>- Chant relaxant. Vous et tous vos alliés à court portée récupérez un point de bléssure.<br>- Chant épique. Vous rendez une cible à courte portée temporairement vulnérable.<br>- Chant émouvant. Vous et tous vos alliés à courte portée gagnez en espoir."
              }
            ],
            "specialisation": [
              {
                "nom": "Maestro",
                "description": "Vos chant de ralliement décuplent le courage de ceux qui les écoutent. lorsque cous accordez un dé de ralliementà un allié, il peut gagner un espoir ou effacer un stress."
              }
            ],
            "maitrise": [
              {
                "nom": "Virtuose",
                "description": "Vous faites partie des plus grands artiste et votre talent est sans limites. vous pouvez interpréter chaque chant de l'ap^titude \"Artiste talentueux\" deux fois par long repos au lieu d'une seule."
              }
            ]
          }
        },
        {
          "nom": "Génie des mots",
          "description": "Optez pour un Génie des mots si vous souhaitez utiliser des jeux de mots intelligents et captiver les foules.",
          "trait_incantation": "Présence",
          "paliers": {
            "base": [
              {
                "nom": "Discour passioné",
                "description": "Une fois par long repos, vous pouvez prononcer un discour sincère et inspirant. Tous les allirés à longue portée effacent 2 stress."
              },
              {
                "nom": "Coeur de poète",
                "description": "Une fois que vous avez fait un jet d'action pour impressionner quelqu'un, le persuader ou l'offenser vous pouvez dépenser un espoir pour ajouter un D4 au jet."
              }
            ],
            "specialisation": [
              {
                "nom": "Eloquent",
                "description": "Vos paroles émouvantes remontent le moral une fois par session, lorsque vous encouragez un allié, vous pouvez accomplir l'une des chose suivantes :<br>- Permettre à allié de trouver un objet ou un outil ordinaire dont il a bessoin<br>- Aider un allié sans dépenser d'espoir<br>- Donner à l'allié un acte de pause suplémentaire lors de son prochain repos."
              }
            ],
            "maitrise": [
              {
                "nom": "Poésie épique",
                "description": "Votre dé de ralliement devient un D10. De plus lorsque Vous Aider un allié, Vous pouvez raconter ce moment comme si vous écriviez l'histoire de son héroïsme dans un mémoire. Lancez alors un D10 comme dé d'avantage."
              }
            ]
          }
        }
      ]
    },
    {
      "source": "Livre de règle (2026)",
      "nom": "Druide",
      "description": "Devenir druide est plus qu’une occupation ; c’est un appel pour ceux qui souhaitent apprendre de la magie de la nature sauvage et la protéger. Même si l’on peut sous-estimer un druide doux qui pratique le travail souvent silencieux de culture de la flore, les druides qui canalisent les forces indomptées de la nature sont terrifiants à voir. Les druides cultivent leurs capacités en petits groupes, souvent liés par une éthique ou un lieu spécifique, mais certains choisissent de travailler seuls. Grâce à des années d’études et de dévouement, les druides peuvent apprendre à se transformer en bêtes et à façonner la nature elle-même.",
      "domaines": [
        "Sagesse",
        "Arcane"
      ],
      "aptitude_espoir": {
        "nom": "Evolution",
        "description": "Dépensez 3 Espoirs pour passer sous Forme bestiale sans cocherde Stress. Lorsque vous le faites, augementez un trait de votre choix de +1 jusqu'à ce que vous abandonniez cette forme de bestiale."
      },
      "aptitudes_classe": [
        {
          "nom": "Forme Bestiale",
          "description": "Cochez un stress pour le transformer par magie en une créature de votre palier ou d'un palier inférieur issue de la liste des forme bestiale. Vous pouvez abandonner cette forme à tout instant. Tant que vous êtes transformé, vous ne pouvez pas utiliser d'armes ni lancer de sorts venant d'une cartes de domaine, mais vous pouvez tout de mêm les autre capaciter et aptitude auxquelles vous avez accès. Les sorts que vous avez lancés avant votre transformation restent actifs pendant la durée et vous pouvez encore parler et communiquer normalement. De plus, vous gagner les aptitude de la forme bestiale, Vous ajoutez sont  Esquive à la vôtre et utilisez le trait  indiqués dans leurs statistiques leur de vos attaque.  Lorsque vous êtes sous forme bestiale, votre armure se fond dans votre corps et vous cocher les emplacements d'armure comme à l'accoutumée. lorsque vous quittez une forme bestiale, ces emplacements d'armure restent coché. Si vous cochez votre dernier point de Blessure, vous quittez automatiquement la forme bestiale."
        },
        {
          "nom": "Touche naturel",
          "description": "Vous pouvez produire à volonté des effets inoffensifs impliquant la nature comme faire  éclore rapidement une fleur, faire souffle une légère brise ou allumer un feu de camp..."
        }
      ],
      "equipement_depart": {
        "esquive": 10,
        "points_blessure": 6,
        "objets_classe": [
          "petit sac de cailloux et d'ossement",
          "Un étrange pendentif trouvé par terre."
        ],
        "attributs": {
          "agilite": "+1",
          "force": 0,
          "finesse": "+1",
          "instinct": "+2",
          "presence": "-1",
          "savoir": 0
        },
        "arme_primaire": "Bâton court",
        "arme_secondaire": "Bouclier rond",
        "armure": "Armure de cuir"
      },
      "sous_classes": [
        {
          "nom": "Protecteur des éléments",
          "description": "Optez pour le protecteur des éléments si vous souhaitez incarner les éléments naturels du monde sauvage.",
          "trait_incantation": "Instinct",
          "paliers": {
            "base": [
              {
                "nom": "Incarnation élémentaire",
                "description": "Cocher un stress pour à Canaliser l’un des éléments suivants jusqu’à ce que vous subissiez des dégâts graves ou jusqu’à votre prochain repos.<br><br>- Feu. Lorsqu'un adversaire en mêlée vous inflige des dégâts, il prend 1d10 dégâts magiques.<br>- Terre. Ajouter un bonus égale à votre compétence à vos seuil de dégâts.<br>- Eau. Lorsque vous infligez des dégâts à un adversaire en mêlée, tous les autres adversaires à très courte portée doivent cocher un stress.<br>- Air. Vous pouvez planer, gagnant ainsi l'avantage sur jet d'agilité."
              }
            ],
            "specialisation": [
              {
                "nom": "Aura élémentaire",
                "description": "Une fois par repos lorsque vous canalisez, vous pouvez émettre une aura accordée à votre élément. Elle affecte les cibles à courte portée jusqu'à la fin de votre Canalisation.<br><br>- Feu. Lorsqu'un adversaire coche 1 ou plusieurs points Blessure, il doit aussi cocher un stress.<br>- Terre. Vos alliés gagnent un bonus de +1 à la force.<br>- Eau. Lorsqu'un adversaire vous inflige des dégâts, vous pouvez cocher un stress pour le déplacer n'importe où à très courte de là où il se trouve.<br>- Air. Lorsque vous ou un allié subissez des dégâts issue d'une attaque d'une portée supérieur à mêlée, réduisez ces dégâts en 1D8."
              }
            ],
            "maitrise": [
              {
                "nom": "Territoire élémentaire",
                "description": "Vous incarnez encore plus intensément votre élément. Tant que vous Canalisez, vous bénéficiez de l'avantage suivant :<br><br>- Feu. Vous gagnez un bonus de +1 à votre compétence pour les attaques et les sorts qui infligent des dégâts.<br>- Terre. Lorsque vous cocher des points de Blessure, lancez un d6 par point de vie Cocher. Pour chaque  6, réduisez le nombre de points de Blessure que vous cocher de 1.<br>- Eau. Lorsqu'une attaque contre vous réussit, vous pouvez cocher un stress pour que votre asaillant soit temporairement Vulnérable.<br>- Air. Vous gagnez un bonus +1 pour votre Esquive et pouvez voler."
              }
            ]
          }
        },
        {
          "nom": "Protecteur du renouveau",
          "description": "Incarnez un protecteur du Renouveau si vous souhaitez utiliser une magie puissante pour guérir votre groupe.",
          "trait_incantation": "Instinct",
          "paliers": {
            "base": [
              {
                "nom": "Clarté de la nature",
                "description": "Une fois par long repos, vous pouvez créer un espace de sérénité naturelle à courte portée. Après quelques minutes à vous reposer, effacer un nombre de stress égal à votre instinct, sachant que vous pouvez répartir ces stress entre vos akkiés et vous."
              },
              {
                "nom": "Régération",
                "description": "Touchez une créature et dépenser 3 Espoir. elle s'efface 1d4 Points de Blessure."
              }
            ],
            "specialisation": [
              {
                "nom": "Allonge de régénération",
                "description": "Vous utiliser « Régénération » sur des créature à trés courte portée."
              },
              {
                "nom": "Soutien du protecteur",
                "description": "Une fois par long repos, Vous pouvez dépenser 2 Espoir pour effacer 2 points de Blessure sur 1d4 alliés à courte portée."
              }
            ],
            "maitrise": [
              {
                "nom": "Défenseur",
                "description": "Votre transformation animale vous change en esprit gardien guérisseur. Lorsque vous êtes sous cette forme et qu'un allié à courte portée Coche 2 points de Blessure ou plus, vous pouvez cocher un stress pour réduire de 1 le nombre de points de blessure qu'ils coche."
              }
            ]
          }
        }
      ]
    },
    {
      "source": "Livre de règle (2026)",
      "nom": "Gardien",
      "description": "Le titre de gardien représente un éventail de professions martiales, parlant davantage de leur boussole morale et de leur courage inébranlable que des moyens par lesquels ils se battent. Bien que de nombreux gardiens rejoignent des groupes de militants pour un pays ou une cause, ils sont plus susceptibles de suivre les quelques personnes qui leur sont vraiment chères, au diable la majorité. Les gardiens sont connus pour se battre avec une férocité remarquable, même contre toute attente, défendant leur cohorte avant tout. Malheur à ceux qui nuisent à l’allié d’un tuteur, car le tuteur répondra de la même manière à cette blessure.",
      "domaines": [
        "Vaillance",
        "Lame"
      ],
      "aptitude_espoir": {
        "nom": "En première ligne",
        "description": "Dépensez 3 Espoire pour effacer 2 emplacements d'armure."
      },
      "aptitudes_classe": [
        {
          "nom": "Inarrêtable",
          "description": "Une fois par long repos, vous pouvez devenir Inarrêtable. Vous gagnez alors un dé de inarrêtable. Au  niveau, il s'agit d'un D4. Placez-lesur votre feuille de personnage dans l'espace prévu à cet effet, en mettant le 1 sur le dessus. Une fois que vous avez effectué un jet de dégâts qui inflige 1 point de Blessure ou plus à un cible, augementerla valeur du dé inarrêtable de 1. Lorsque la valeur de ce dé devrait dépasser sa valeur maximale ou a la fin de la scène retirez le dé ce qui met fin à  inarrêtable. Au niveau 5, votre dé inarrêtabledevient un D6.<br>Tant que vous êtes inarrêtable vous bénificier des avantage suivant :<br>- Vous réduisez la gravité des dégât physique d'un seuil (de Grave à Majeur, de Majeur à Mineurs, de Mineur à aucun)<br>- Vous ajoutez la valeur actuelle de dé inarrêtable a votre jet de dégâts.<br>- Vous ne pouvez pas être Bloqué ni Vulnérable."
        }
      ],
      "equipement_depart": {
        "esquive": 9,
        "points_blessure": 7,
        "objets_classe": [
          "Un totem reçu de votre mentor.",
          "Une clé secret."
        ],
        "attributs": {
          "agilite": "+1",
          "force": "+2",
          "finesse": "-1",
          "instinct": 0,
          "presence": "+1",
          "savoir": 0
        },
        "arme_primaire": "Marteau de guerre",
        "arme_secondaire": null,
        "armure": "Cotte de mailles"
      },
      "sous_classes": [
        {
          "nom": "Robuste",
          "description": "Optez pour le Robuste si vous voulez prendre de lourds coups et continuer à vous battre.",
          "trait_incantation": null,
          "paliers": {
            "base": [
              {
                "nom": "Inébranlable",
                "description": "Gagnez un bonus permanent de +1 sur vos seuils de dégâts."
              },
              {
                "nom": "Volonté de fer",
                "description": "Lorsque vous subissez des Dégâts physiques, vous pouvez cocher un emplacement d'armure supplémentaire pour réduire la gravité."
              }
            ],
            "specialisation": [
              {
                "nom": "Implacable",
                "description": "Gagnez un bonus permanent de +2 sur vos seuils de dégâts."
              },
              {
                "nom": "Frères d'armes",
                "description": "Lorsqu'un allié situé à très courte portée subit des dégâts, vous pouvez cocher un emplacement d'armure pour réduire la sévérité d’un seuil."
              }
            ],
            "maitrise": [
              {
                "nom": "Téméraire",
                "description": "Gagnez un bonus permanent de +3 sur vos seuils de dégâts."
              },
              {
                "nom": "Loyal protecteur",
                "description": "Lorsqu'un allié à courte portée a 2 points de Blessure ou moins et devrait recevoir des dégâts, vous pouvez cocher un stress pour vous précipiter à ses côtés et de subir les dégâts à sa place."
              }
            ]
          }
        },
        {
          "nom": "Vengeur",
          "description": "incarnez le vengeur si vous souhaitez abattre des ennemis qui vous font du mal ou font du mal à vos alliés.",
          "trait_incantation": null,
          "paliers": {
            "base": [
              {
                "nom": "Détendu",
                "description": "Vous gagner un emplacement de stress supplémentaire."
              },
              {
                "nom": "Revanche",
                "description": "Lorsqu'un adversaire en mêlée réussit une attaque contre vous, vous pouvez cocher 2 Stress pour obliger à cocher un point de blessure."
              }
            ],
            "specialisation": [
              {
                "nom": "En représailles",
                "description": "Lorsqu'un adversaire blesse un allié en mêlée, vous gagnez un bonus de +1 à votre compétence pour la prochaine attaque rcontrevous lancez contre cet adversaire."
              }
            ],
            "maitrise": [
              {
                "nom": "Némésis",
                "description": "Dépensez 2 espoirs à Prioriser un adversaire jusqu'à votre prochain repos. Lorsque vous lancez une attaque contre votre Priorisé, vous pouvez échanger les résultats de vos dés d'espoir et de peur. Tu ne peux que Prioriser un adversaire à la fois."
              }
            ]
          }
        }
      ]
    },
    {
      "source": "Livre de règle (2026)",
      "nom": "Rôdeur",
      "description": "Les Rôdeur sont des chasseurs hautement qualifiés qui, malgré leurs capacités martiales, prêtent rarement leurs compétences à une armée. Grâce à la maîtrise du corps et à une compréhension profonde de la nature sauvage, les rôdeurs deviennent des tacticiens rusés, poursuivant leur proie avec ruse et patience. De nombreux rangers traquent et combattent aux côtés d'un compagnon animal avec lequel ils ont forgé un puissant lien spirituel. En perfectionnant leurs compétences dans la nature, les rangers deviennent des traqueurs experts, aussi susceptibles de piéger leurs ennemis dans un piège que de les attaquer de front.",
      "domaines": [
        "Os",
        "Sagesse"
      ],
      "aptitude_espoir": {
        "nom": "N'avance pas",
        "description": "Dépensez 3 Espoir lorsque vous réussissez une attaque a l'aide d'une arme pour appliquer le même jet contre deux adversaires supplémentaires à portée de l'attaque."
      },
      "aptitudes_classe": [
        {
          "nom": "Proie du rôdeur",
          "description": "Dépensez un Espoir et effectuez une attaque contre une cible. Sur un succès, vous infligez les dégâts normaux de l'attaque et faites temporairement de votre cible votre Proie. Jusqu'à ce que cette aptitude se termine ou que vous preniez une autre créature pour Proie, vous bénéficiez des avantages suivants contre elle.<br>- Vous savez précisément dans quelle direction elle se trouve.<br>- Lorsque vous lui infligez des dégâts, elle doit cocher un Stress.<br>- Lorsque vous ratez une attaque contre elle, vous pouvez mettre fin à l'aptitude Proie du rôdeur pour relancer vos dés de Dualité."
        }
      ],
      "equipement_depart": {
        "esquive": 12,
        "points_blessure": 6,
        "objets_classe": [
          "Un trophée de votre première proie abattue.",
          "Une boussole en apparance cassée."
        ],
        "attributs": {
          "agilite": "+2",
          "force": 0,
          "finesse": "+1",
          "instinct": "+1",
          "presence": "-1",
          "savoir": 0
        },
        "arme_primaire": "Arc court",
        "arme_secondaire": null,
        "armure": "Armure de cuir"
      },
      "sous_classes": [
        {
          "nom": "Compagnon des bêtes",
          "description": "Incarnez le compagnon des bêtes si vous souhaitez nouer un lien profond avec un animal.",
          "trait_incantation": "Agilité",
          "paliers": {
            "base": [
              {
                "nom": "Compagnon",
                "description": "Vous avez un compagnon animal de votre choix (à l'approbation du MJ). Ils restent à vos côtés sauf si vous leur dites le contraire. <br>Prenez la feuille de Compagnon du rôdeur. Lorsque votre votre personnage un niveau, choisissez  aussi une option de montée de niveau pour votre compagnon dans cette feuille."
              }
            ],
            "specialisation": [
              {
                "nom": "Entraînement Poussé",
                "description": "Choisissez une option de montée de niveau supplémentaire pour votre compagnon."
              },
              {
                "nom": "Liés dans la bataille",
                "description": "Lorsqu'un adversaire vous attaque alors qu'il se trouve en mêlée par rapport a votre compagnon, vous gagnez un bonus de +2 à votre esquive contre l'attaque."
              }
            ],
            "maitrise": [
              {
                "nom": "Entraînement Optimal",
                "description": "Choisissez Deux option de montée de niveau supplémentaire pour votre compagnon."
              },
              {
                "nom": "Ami Fidéle",
                "description": "Une fois par long repos, lorsque qu'une attaque devrait obliger votre compagnon à cocher sont dernier point de bléssure e que vous vous trouvez à courte portée l'un de l'autre, vous pouvez tous deux vous précipiter aux côtés de l'autre et subir ces dégâts à sa place."
              }
            ]
          }
        },
        {
          "nom": "Explorateur",
          "description": "Optez pour l'Eplorateur si vous voulez chasser votre proie et frapper avec une force mortelle.",
          "trait_incantation": "Agilité",
          "paliers": {
            "base": [
              {
                "nom": "Prédateur impitoyable",
                "description": "Lorsque vous effectuer un jet de dégâts, vous pouvez cocher un stress pour obtenir un bonus de +1 à votre Compétence. De plus, lorsque vous infligez des dégâts graves à un adversaire, celui-ci doit cocher un stress."
              },
              {
                "nom": "Itinéraire direct",
                "description": "Vous identifiez le chemin le plus direct vers votre destination tant qu'il s'agit d'un endroit que vous avez déjà visité ou que vous avez sur vous un objet provenant de cet endroit."
              }
            ],
            "specialisation": [
              {
                "nom": "Prédateur Insaisissable",
                "description": "Quand votre Proie lance une attaque contre vous, vous gagnez un bonus de +2 à votre l'Esquive contre cette l'attaque."
              }
            ],
            "maitrise": [
              {
                "nom": "Superprédateur",
                "description": "Vous pouvez dépenser un espoir avant de faire un jet d'attaque contre votre Proie. Si elle est réussie, vous retirez une peur dela réserve de votre MJ."
              }
            ]
          }
        }
      ]
    },
    {
      "source": "Livre de règle (2026)",
      "nom": "Roublard",
      "description": "Les Roublard sont des scélérats, souvent à la fois dans leur attitude et dans leur pratique. Largement connus sous le nom de menteurs et de voleurs, les meilleurs de cette classe se déplacent à travers le monde de manière anonyme. Utilisant leur esprit vif et leurs lames, les voyous trompent leurs ennemis par la manipulation sociale aussi facilement que briser des serrures, grimper à travers les fenêtres ou porter des coups sournois. Ces maîtres de l’artisanat magique manipulent l’ombre et le mouvement, ajoutant une gamme d’outils utiles et mortels à leur répertoire. Les voleurs créent fréquemment des guildes pour rencontrer de futurs complices, embaucher des emplois et perfectionner leurs compétences secrètes, prouvant qu'il y a de l'honneur parmi les voleurs pour ceux qui savent où chercher.",
      "domaines": [
        "Minuit",
        "Grâce"
      ],
      "aptitude_espoir": {
        "nom": "Esquive du roublard",
        "description": "Dépensez 3 Espoir pour Obtenir un bonus +2 à votre Esquive jusqu'à ce qu'une attaque vous touche. Sinon, ce bonus persiste jusqu'à votre prochain repos."
      },
      "aptitudes_classe": [
        {
          "nom": "Camouflé",
          "description": "Chaque fois que vous devriez être Caché, vous êtes à la place Camouflé. En plus des avantages de l'état Caché, tant que vous êtes Camouflé et que vous restez immobile, vous êtes invisible aux yeux des adversaires qui se déplacent à un endroit où ils devraient normalement vous voir. Vous n'êtes plus Camouflé si vous entrez dans le champ de vision d'un adversaire, que vous vous y déplacez, ou si vous attaquez."
        },
        {
          "nom": "Attaque sournoise",
          "description": "Lorsque vous réussissez une attaque alors que vous êtes Camouflé ou alors qu'un allié se trouve à portée de Mêlée de votre cible, ajoutez à votre jet de dégâts un nombre de d6 égal à votre palier.<br>Niveau 1 → Palier 1<br>Niveau 2 à 4 → Palier 2<br>Niveau 5 à 7 → Palier 3<br>Niveau 8 à 10 → Palier 4"
        }
      ],
      "equipement_depart": {
        "esquive": 12,
        "points_blessure": 6,
        "objets_classe": [
          "Des outils de faussaire.",
          "Un grappin."
        ],
        "attributs": {
          "agilite": "+1",
          "force": "-1",
          "finesse": "+2",
          "instinct": "0",
          "presence": "+1",
          "savoir": 0
        },
        "arme_primaire": "Dague",
        "arme_secondaire": "Petite dague",
        "armure": "Gambison"
      },
      "sous_classes": [
        {
          "nom": "Marchenuit",
          "description": "Optez pour le Marchenuit si vous souhaitez manipuler les ombres pour manœuvrer dans l'environnement.",
          "trait_incantation": "Finesse",
          "paliers": {
            "base": [
              {
                "nom": "Pas des ombres",
                "description": "Vous pouvez vous déplacer d'ombre en ombre. Lorsque vous vous déplacez dans une zone d'obscurité ou une ombre projetée par une autre créature ou un objet, vous pouvez cocher un stress disparaître de l'endroit ou vous vous trouvez et réapparaître à l'intérieur d'une autre ombre à longue portée. Lorsque vous réapparaissez, Vous êtes Caché."
              }
            ],
            "specialisation": [
              {
                "nom": "Nuage noir",
                "description": "Effectuer un jet d'incantation (15). Sur un succès, Vous créez un nuage noir temporaire qui couvre la surface de votre choix sans dépasser une courte portée. Toute personne présente dans le nuage ne voit pas ce qu'il y a au-delà et inversement. Vous êtes considéré Camouflé vis-à-vis de tout les adversaire au champs de vission bloqué par le nuage."
              },
              {
                "nom": "Adrénaline",
                "description": "lorsque vous êtes Vulnérable, ajoutez votre niveau à vos jets de dégâts."
              }
            ],
            "maitrise": [
              {
                "nom": "Ombre fugace",
                "description": "Vous gagnez un bonus permanent +1 pour votre Esquive. Vous pouvez utiliser l'aptitude « pas des ombres » pour vous déplacer à très longue portée."
              },
              {
                "nom": "Disparition totale",
                "description": "A tout moment, vous pouvez cocher un stress devenir Camouflé. Lorsque vous êtes camouflé grâce a l'aptitude, vous vous débarrassez automatiquement de l'état Bloqué si vous en souffriez. Vous restez Camouflé jusqu'à ce que vous fassiez un jet avec Peur ou jusqu'à votre prochain repos."
              }
            ]
          }
        },
        {
          "nom": "Syndicat",
          "description": "Incarnez le syndicat si vous souhaitez avoir un réseau de contacts partout où vous allez.",
          "trait_incantation": "Finesse",
          "paliers": {
            "base": [
              {
                "nom": "Réseau de relations",
                "description": "Lorsque vous arrivez dans une ville de taille respectable, vous connaissez quelqu’un qui y réside. Donnez-lui un nom, indiquez comment vous pensez qu'il pourra vous être utile et choisissez un élément de la liste suivante :<br>- Ils me doivent une faveur, mais ils seront difficiles à trouver.<br>- Ils vas me demander quelque chose en échange.<br>- Ils a toujours une montagne de problèmes.<br>- Nous étions ensemble autrefois. C'est une longue histoire<br>- Nous ne nous sommes quittés en mauvais termes."
              }
            ],
            "specialisation": [
              {
                "nom": "Contats multiples",
                "description": "Une fois par session, vous pouvez faire brièvement appel à un contact douteux. Choisissez l’un des avantages suivants et expliquez ce qui l'a poussé à vous aider à ce moment.<br>- Il vous fournit une poignée d’or, un outil unique ou un objet ordinaire indispensable dans votre situation.<br>- Lors de votre prochaine jet d'action, son aide vous donne un bonus de +3 au résultat de votre dé d'espoir ou peur.<br>- La prochaine fois que vous infligez des dégâts, il tire depuis les ombres, ajoutant 2d8 à votre jets de dégâts."
              }
            ],
            "maitrise": [
              {
                "nom": "Renforts fiables",
                "description": "Vous pouvez utiliser aptitude « Contacts multiple » trois fois par session. Voici les nouvelle options à ajoutées à ajoutet à votre liste des choix pour Contacts multiple:<br>- Lorsque vous cocher 1 ou plusieurs points de blessure ou plus, le contact se précipiter pour vous protéger et vous réduisez le nombre de point de coché de 1.<br>- Il vous  apporte son soutien lors d'une conversation nécessitant un jet de présence. vous pouvez lancer un D20 comme dés d'espoir."
              }
            ]
          }
        }
      ]
    },
    {
      "source": "Livre de règle (2026)",
      "nom": "Séraphin",
      "description": "Les séraphins sont des combattants divins et des guérisseurs imprégnés d’un but sacré. Un large éventail de divinités existent dans les royaumes et de nombreux types de séraphins sont donc nommés par ces dieux. Leur éthique s’aligne traditionnellement sur le domaine ou les objectifs de leur dieu, comme défendre les faibles, exiger la vengeance, protéger une terre ou un artefact ou défendre une foi particulière. Certains séraphins s'allient à une armée ou à un lieu, à la grande satisfaction de leurs dirigeants, mais d'autres croisés combattent en opposition aux folies du Royaume Mortel. Il vaut mieux être l'allié d'un séraphin que son ennemi, car ils sont des ennemis terrifiants pour ceux qui défient leur dessein.",
      "domaines": [
        "Splendeur",
        "Vaillance"
      ],
      "aptitude_espoir": {
        "nom": "Soutien Vital",
        "description": "Dépensez 3 Espoirs pour effacer un point de Blessure sur un allié à Courte portée."
      },
      "aptitudes_classe": [
        {
          "nom": "Dés de Prière",
          "description": "Au début de chaque session, lancez un nombre de d4 égal à votre Trait d'incantation de sous-classe et posez-les sur votre feuille de personnage dans l'espace prévu. Ce sont vos dés de Prière. Vous pouvez en dépenser autant que vous voulez pour aider un allié situé au maximum à Longue portée ou pour vous aider vous-même. Vous pouvez utiliser la valeur d'un dé dépensé pour réduire les dégâts sur le point d'être infligés, l'ajouter au résultat d'un jet une fois ce jet effectué ou pour gagner un montant d'Espoir égal au résultat. À la fin de chaque session, les dés de Prière non dépensés sont perdus."
        }
      ],
      "equipement_depart": {
        "esquive": 9,
        "points_blessure": 7,
        "objets_classe": [
          "Un paquet d'offrandes.",
          "Un sceau de votre dieu."
        ],
        "attributs": {
          "agilite": 0,
          "force": "+2",
          "finesse": 0,
          "instinct": "+1",
          "presence": "+1",
          "savoir": "-1"
        },
        "arme_primaire": "Hache sacrée",
        "arme_secondaire": "Bouclier rond",
        "armure": "Cotte de mailles"
      },
      "sous_classes": [
        {
          "nom": "Arme divine",
          "description": "Optez pour une arme divine si vous souhaitez dominer le champ de bataille avec une arme légendaire.",
          "trait_incantation": "Force",
          "paliers": {
            "base": [
              {
                "nom": "Arme spirituelle",
                "description": "Lorsque vous avez une arme équipée avec une portée de mêlée ou très courte, elle peut quiter votre main et s'envoler attaquer un adversaire à Courte portée, puis revenir vers vous. Vous pouvez cocher un stress pour cibler un adversaire de plus à portée avec le même lancer d'attaque."
              },
              {
                "nom": "Contact salvateur",
                "description": "Une fois par repos long, touchez une créature et éliminez-en 2 points de blessure ou 2 stress"
              }
            ],
            "specialisation": [
              {
                "nom": "Dévot",
                "description": "Lorsque vous lancez vos dés de Prières, vous pouvez lancer un dé de lus et éliminer celui qui a donnéle résultat le plus bas. de plus vous pouvez utiliser \"Contact salvateur\" deux fois par Long repos au lieu d'une seule."
              }
            ],
            "maitrise": [
              {
                "nom": "Résonance sacrée",
                "description": "Lorsque que vous lancez les dégâts pour l'aptitude \"Arme spirituelle\", si vous obtenez deux dés égaux, vous doublez la valeur de chacun. par exemple, si vous obtenez deux 5, ils comptent comme deux 10."
              }
            ]
          }
        },
        {
          "nom": "Sentinelle ailée",
          "description": "Incarnez une Sentinelle Ailée si vous voulez prendre votre envol et frapper des coups écrasants depuis le ciel.",
          "trait_incantation": "Force",
          "paliers": {
            "base": [
              {
                "nom": "Ailes de lumière",
                "description": "Vous pouvez voler. Tant que vous volez, vous pouvez effectuer les action suivante :<br>- Cocher un stress pour attraper et emporter une créature consentante approximativement de votre taille ou moins.<br>- Dépenser un espoir pour infliger 1D8 dégâts de plus sur une attaque réussie."
              }
            ],
            "specialisation": [
              {
                "nom": "Visage éthéré",
                "description": "Votre visage surnaturel sucite émerveillement et terreur. Lorsque vous volez, vous avez un avantage lors de vos jets de présence avec espoir, vous pourvez retire une peur de la réserve du MJ au lieu de gagner un espoir."
              }
            ],
            "maitrise": [
              {
                "nom": "Ascendant",
                "description": "Vous gagner un bonus permanent de +4 à votre seuil de dégât Grave."
              },
              {
                "nom": "Puissance des Dieux",
                "description": "Lorsque vous volez, vous infligez 1D12 dégâts supplémentaires au lieu de 1d8 avec aptitude \"Ailes de lumière\"."
              }
            ]
          }
        }
      ]
    },
    {
      "source": "Livre de règle (2026)",
      "nom": "Ensorceleur",
      "description": "Tous les utilisateurs de magie innée ne choisissent pas de perfectionner leur art, mais ceux qui le font peuvent devenir de puissants ensorceleur. Les dons de ces porteurs sont transmis par les familles, même si celles-ci ne les connaissent pas ou hésitent à les pratiquer. Les capacités d'un ensorceleur peuvent aller de l'élémentaire à l'illusoire et au-delà, et de nombreux pratiquants se regroupent en collectifs en fonction de leurs talents. L’acte de devenir un ensorceleur redoutable n’est pas la pratique d’acquérir du pouvoir, mais d’apprendre à cultiver et à contrôler le pouvoir que l’on possède déjà. La magie d’un sorcier égaré ou indiscipliné est en effet une force dangereuse.",
      "domaines": [
        "Arcane",
        "Minuit"
      ],
      "aptitude_espoir": {
        "nom": "Magie volatile",
        "description": "Dépensez 3 Espoir pour relancer n'importe quel nombre de vos dés de dégâts sur une attaque qui inflige des dégâts magiques."
      },
      "aptitudes_classe": [
        {
          "nom": "Sens arcanique",
          "description": "Vous pouvez sentir la présence de personnes et d'objets magiques à Courte portée."
        },
        {
          "nom": "Illusion mineur",
          "description": "Effectuez un jet d'Incantation (10). Sur un succès, vous créez une illusion visuelle mineure pas plus grande que vous à Courte portée. Cette illusion est convaincante pour quiconque se trouve à Courte portée ou plus loin."
        },
        {
          "nom": "Canaliser la puissance brute",
          "description": "Une fois par long repos, vous pouvez placer une carte de domaine de votre main dans votre caveau et choisir entre :<br>- Gagner un montant d'Espoir égal au niveau de la carte.<br>- Améliorer un sort qui inflige des dégâts: il gagne un bonus au jet de dégâts égal à deux fois le niveau de la carte."
        }
      ],
      "equipement_depart": {
        "esquive": 10,
        "points_blessure": 6,
        "objets_classe": [
          "Une orbe murmurant.",
          "Un objet de famille."
        ],
        "attributs": {
          "agilite": 0,
          "force": "-1",
          "finesse": "+1",
          "instinct": "+2",
          "presence": "+1",
          "savoir": 0
        },
        "arme_primaire": "Bâton double",
        "arme_secondaire": null,
        "armure": "Gambison"
      },
      "sous_classes": [
        {
          "nom": "Origine élémentaire",
          "description": "Optez pour l'Origine Élémentaire si vous souhaitez canaliser la magie brute pour prendre la forme d'un élément particulier.",
          "trait_incantation": "Instinct",
          "paliers": {
            "base": [
              {
                "nom": "Elementaliste",
                "description": "Choisissez l’un des éléments suivants lors de la création du personnage :<br>Air ∙ Terre ∙ Electricité ∙ Feu ∙ Eau<br>Vous pouvez façonner cet élément pour crée des effets inoffensifs. Vous pouvez aussi dépenser un espoir et décrivez comment votre contrôle sur cet élément aide sur un jet d'action que vous vous apprêtez à faire, ce qui vous donne soit un bonus de +2 au jet, soit un bonus de +3 aux dégâts qui en découlent."
              }
            ],
            "specialisation": [
              {
                "nom": "Esquive naturelle",
                "description": "Vous pouvez invoquer votre élément pour vous protéger. Lorsque quelqu'un réussit un jet d'attaque contre vous, vous pouvez cocher un stress et décrire comment vous utilisez votre élément pour vous défendre. lancez ensuite un d6 et ajoutez son résultat à votre esquive contre l'attaque."
              }
            ],
            "maitrise": [
              {
                "nom": "Transcendance",
                "description": "Une fois par long repos, vous pouvez vous transformer en une manifestation physique de votre élément. Décrivez alors votre transformation et choisissez deux des avantages suivants à obtenir jusqu’à votre prochain repos :<br>- Bonus de +4 à votre seuil dégât Grave.<br>- Bonus de +1 à un trait de personnage de votre choix<br>- Bonus de +1 à votre compétence<br>- Bonus de +2 à votre Esquive"
              }
            ]
          }
        },
        {
          "nom": "Origine primordiale",
          "description": "Optez pour l'origine primordialesi vous souhaitez étendre la polyvalence de vos sorts de manière puissante.",
          "trait_incantation": "Instinct",
          "paliers": {
            "base": [
              {
                "nom": "Manipulez la magie",
                "description": "Votre origine primitive vous permet de modifier l’essence de la magie elle-même. Après avoir lancé un sort ou lancé une attaque à l'aide d'une arme qui inflige des dégâts magiques, vous pouvez cocher un stress pour effectuer l’une des actions suivantes :<br>- Augmenterla portée du sort ou de l'attaque d'un cran.<br>- Ajouter un bonus de +2 au résultat du jet d'action<br>- Doublez un dé de dégâts de votre choix<br>- Toucher une cible supplémentaire à portée"
              }
            ],
            "specialisation": [
              {
                "nom": "Aide enchantée",
                "description": "Vous pouvez utiliser votre propre essence pour améliorer la magie des autres. Lorsque vous Aidez un allié sur un jet incantation, vous pouvez lancer un D8 comme dé d'avantage. Une fois par long repos, une fois qu'un allié fait un jet d'incantation avec votre aide, vous pouvez échanger le résultat de ses dés de Dualité."
              }
            ],
            "maitrise": [
              {
                "nom": "Charge arcanique",
                "description": "Vous pouvez rassembler de l’énergie magique pour améliorer vos capacités. Lorsque vous subissez des dégâts magiques, vous devenez Chargé. Sinon, vous pouvez dépenser 2 Espoir devenir Chargé. Lorsque vous êtes Chargé et que vous réussissez une attaque qui inflige des dégâts magiques, vous pouvez effacer votre Charge pour gagner soit un bonus de +10 au jet de dégâts, soit un bonus de +3 à la difficulté d'un lancer de réaction suscité par le sort. Vous n'êtes plus Chargé dès votre prochain long repos."
              }
            ]
          }
        }
      ]
    },
    {
      "source": "Livre de règle (2026)",
      "nom": "Guerrier",
      "description": "Devenir guerrier nécessite des années, souvent toute une vie, de formation et de dévouement à la maîtrise des armes et de la violence. Alors que beaucoup de ceux qui cherchent à se battre ne font qu'affiner leur force, les guerriers comprennent l'importance d'un corps et d'un esprit agiles, ce qui en fait certains des combattants les plus recherchés à travers les royaumes. Souvent, les guerriers trouvent un emploi au sein d’une armée, d’une bande de mercenaires ou même d’une garde royale, mais leur potentiel est gaspillé dans n’importe quelle position où ils ne peuvent pas continuer à améliorer et à développer leurs compétences. Les guerriers sont connus pour avoir une arme privilégiée ; s’interposer entre eux et leur lame serait une grave erreur.",
      "domaines": [
        "Lame",
        "Os"
      ],
      "aptitude_espoir": {
        "nom": "Pas de pité",
        "description": "Dépensez 3 Espoir pour gagner un bonus de +1 à vos jets d'attaque jusqu'à votre prochain repos."
      },
      "aptitudes_classe": [
        {
          "nom": "Attaque d'opportunité",
          "description": "Si un adversaire en Mêlée tente de passer au-delà de cette portée, effectuez un jet de réaction basé sur le trait de votre choix contre sa Difficulté. Choisissez l'un des effets suivants sur un succès ou deux d'entre eux sur un succès critique.<br>- L'adversaire ne peut pas quitter sa position.<br>- Vous lui infligez des dégâts égaux à ceux de votre arme principale.<br>- Vous vous déplacez avec lui."
        },
        {
          "nom": "Entraînement au combat",
          "description": "Vous ignorez l'encombrement lorsque vous équipez des armes. Lorsque vous infligez des dégâts physiques, vous gagnez un bonus à votre jet de dégâts égal à votre niveau."
        }
      ],
      "equipement_depart": {
        "esquive": 11,
        "points_blessure": 6,
        "objets_classe": [
          "Le portrait de l'être aimé.",
          "Une pierre a aiguiser."
        ],
        "attributs": {
          "agilite": "+2",
          "force": "+1",
          "finesse": 0,
          "instinct": "+1",
          "presence": "-1",
          "savoir": 0
        },
        "arme_primaire": "Epée Longue",
        "arme_secondaire": null,
        "armure": "Cotte de mailles"
      },
      "sous_classes": [
        {
          "nom": "Appel du brave",
          "description": "Opter pour l'Appel des Braves si vous souhaitez utiliser la puissance de vos ennemis pour alimenter votre propre pouvoir.",
          "trait_incantation": null,
          "paliers": {
            "base": [
              {
                "nom": "Courage",
                "description": "Lorsque vous râtez un jet avec peur, vous gagnez un espoir."
              },
              {
                "nom": "Rituel de combat",
                "description": "Une fois par long repos, avant de tenter quelque chose d'incroyablement dangereux ou d'affronter un ennemi qui vous surpasse clairement, décrivez le rituel que vous effectuez ou les préparatifs vous faites. Cela vous permet d'effacer, 2 stress et gagnez 2 d'espoir."
              }
            ],
            "specialisation": [
              {
                "nom": "Relevez le défi",
                "description": "Vous êtes vigilant face à un danger imminent. Tant qu'il vous este seulement 2 points de Blessure ou moins non cocher, vous pouvez lancer un d20 alors que ton espoir meurt."
              }
            ],
            "maitrise": [
              {
                "nom": "Camaraderie",
                "description": "Votre bravoure inébranlable rallie vos alliés. Vous pouvez déclancher un jet d'équipe une fois supplémentaire par session. De plus, lorsqu'un allié ne doit dépenser que  2 Espoir pour déclencher un jet d'équipe avec vous."
              }
            ]
          }
        },
        {
          "nom": "Appel du tueur",
          "description": "Optez pour l'Appel du Tueur si vous voulez abattre des adversaires avec une force immense.",
          "trait_incantation": null,
          "paliers": {
            "base": [
              {
                "nom": "Tueur",
                "description": "Vous gagnez une réserve de dés appelés désTueurs. Quand vous effectuerun jet avec espoir, vous pouvez placer un D6 sur cette carte et ajouter à votre réserve au lieu de gagner de l'Espoir. Vous pouvez stocker un nombre de dés Tueur égal à votre compétence. Lorsque vous effectuez un jet d'attaque ou un jet de dégâts, vous pouvez dépenser autant de dés que vousle souhaitez pour les lancer aussi et ajouter leur résultat au jet.<br>À la fin de chaque session, vous retirez tout les dés Tueur de cette carte et vous gagnez un espoir pour chacun."
              }
            ],
            "specialisation": [
              {
                "nom": "Spécialiste des armes",
                "description": "Vous pouvez manier plusieurs armes avec une aissance redoutable. Lorsque vous réussissez une attaque, vous pouvez dépenser un espoir pour ajouter l'un des dés de dégâts de votre arme secondaire au jet de dégâts.<br>De plus, une fois par repos long lorsque vous lancez vos dés tueur, relancez tous les 1."
              }
            ],
            "maitrise": [
              {
                "nom": "Préparation Martiale",
                "description": "Vous êtes un guerrier inspirant pour vos compagons de voyage. Votre groupe a accède l'acte de pause Préparation martiale. Pour utiliser lors d'un repos, décrivez comment vous entraînez votre groupe et lui enseignez quelques astuce. Vous et chaque allié qui opte pour cet acte de pause gagnez un D6 comme dé Tueur meurt. Un PJ disposant d'un dé Tueur peut le dépenser pour lancer le dé et ajouter le résultat à un jet d'attaque ou de dégâts de son choix."
              }
            ]
          }
        }
      ]
    },
    {
      "source": "Livre de règle (2026)",
      "nom": "Magicien",
      "description": "Que ce soit par le biais d'une institution ou d'études individuelles, ceux connus sous le nom de Magicien acquièrent et perfectionnent un immense pouvoir magique au fil des années d'apprentissage en utilisant une variété d'outils, notamment des livres, des pierres, des potions et des herbes. Certains Magicien consacrent leur vie à maîtriser une école de magie particulière, tandis que d’autres apprennent dans une grande variété de disciplines. De nombreux sorciers deviennent des figures sages et puissantes dans leurs communautés, conseillant les dirigeants, fournissant des médicaments et des soins, et même dirigeant des conseils de guerre. Bien que ces mages travaillent tous vers l’objectif commun de collecter des connaissances magiques, les sorciers sont souvent ceux qui ont le plus de conflits au sein de leurs propres rangs, car l’acquisition, la conservation et le partage de secrets puissants sont un sujet de débat intense qui a entraîné d’innombrables morts.",
      "domaines": [
        "Codex",
        "Splendeur"
      ],
      "aptitude_espoir": {
        "nom": "Pas cette fois",
        "description": "Dépensez 3 Espoirs pour obliger un adversaire à Longue portée à relancer un jet de dégâts ou d'attaque."
      },
      "aptitudes_classe": [
        {
          "nom": "Prestigitation",
          "description": "Vous pouvez produire des effets magiques discrets et inoffensifs à volonté. Par exemple, vous pouvez modifier la couleur d'un objet, générer une odeur, allumer une bougie, faire flotter un objet minuscule, éclairer une pièce ou réparer un petit objet."
        },
        {
          "nom": "Etranges schémas",
          "description": "Choisissez un nombre entre 1 et 12. Lorsque vous obtenez ce nombre sur un dé de Dualité, gagnez un Espoir ou effacez un Stress.<br>Vous pouvez modifier ce nombre lorsque vous prenez un long repos."
        }
      ],
      "equipement_depart": {
        "esquive": 11,
        "points_blessure": 5,
        "objets_classe": [
          "Un livre que vous essayer de traduire.",
          "Un petit animal de compagnie élémentaire inoffensif."
        ],
        "attributs": {
          "agilite": "-1",
          "force": 0,
          "finesse": 0,
          "instinct": "+1",
          "presence": "+1",
          "savoir": "+2"
        },
        "arme_primaire": "Grand bâton",
        "arme_secondaire": null,
        "armure": "Armure de cuir"
      },
      "sous_classes": [
        {
          "nom": "Ecole du savoir",
          "description": "Optez pour l’École de la connaissance si vous souhaitez une compréhension approfondie du monde qui vous entoure.",
          "trait_incantation": "Savoir",
          "paliers": {
            "base": [
              {
                "nom": "Préparé",
                "description": "Prenez une carte de domaine supplémentaire d'un niveau égale ou inférieur au vôtre dans un domaine auquel vous avez accès."
              },
              {
                "nom": "Adepte",
                "description": "Lorsque vous utilisez une expérience, vous pouvez cocher un stress au lieu de dépenser un Espoir. Dans se cas, doublez votre modificateur d’expérience pour ce jet."
              }
            ],
            "specialisation": [
              {
                "nom": "Accompli",
                "description": "Prenez une carte de domaine supplémentaire d'un niveau égale ou inférieur au vôtre dans un domaine auquel vous avez accès."
              },
              {
                "nom": "Rappel Parfait",
                "description": "Une fois par repos, quand vous récupérez une carte de domaine dans votre caveau, vous pouvez réduire son prix de rappel de 1."
              }
            ],
            "maitrise": [
              {
                "nom": "Brillant",
                "description": "Prenez une carte de domaine supplémentaire d'un niveau égale ou inférieur au vôtre dans un domaine auquel vous avez accès."
              },
              {
                "nom": "Expertise optimale",
                "description": "Lorsque vous utilisez une expérience, lancez un d6. Sur un 5 ou plus, vous pouvez l'utiliser sans dépenser d'Espoir."
              }
            ]
          }
        },
        {
          "nom": "Ecole de la guerre",
          "description": "Optez pour l'École de guerre si vous souhaitez utiliser la magie entraînée pour la violence.",
          "trait_incantation": "Savoir",
          "paliers": {
            "base": [
              {
                "nom": "Mage de bataille",
                "description": "Vous avez axé vos études sur le domination du champ de bataille. Vous gagnez un emplacement de point de blessure supplémentaire."
              },
              {
                "nom": "Affronter ses peur",
                "description": "Lorsque vous réussissez un jet d'attaque avec peur, vous infligez 1D10 dégâts magique de plus."
              }
            ],
            "specialisation": [
              {
                "nom": "Invocation de bouclier",
                "description": "Vous maintenez une barrière protectrice magique. Tant que vous avez au moins 2 Espoirs, vous ajoutez votre Compétence à votre Esquive."
              },
              {
                "nom": "Attisé par la peur",
                "description": "Les dégâts magiques supplémentaires de l'aptitude « Affronter ses peur » augmentent à 2d10."
              }
            ],
            "maitrise": [
              {
                "nom": "S'épanouir dans le chaos",
                "description": "Lorsque vous réussissez une attaque, vous pouvez cocher un stress une fois que avez lancé les dés de dégâts pour obliger la cible à cocher un point de blessure de plus."
              },
              {
                "nom": "Sans peur",
                "description": "Les dégâts magiques supplémentaires de l'aptitude « Affronter ses peur » augmentent à 3d10."
              }
            ]
          }
        }
      ]
    },
    {
      "source": "Espoir et Peur (2027)",
      "nom": "Assasins",
      "description": "Les assassins sont des maîtres de la furtivité et de la précision, capables d'éliminer leurs cibles avec une efficacité redoutable. Formés dans l'art de l'espionnage, du sabotage et du meurtre, ils opèrent souvent dans l'ombre, utilisant leur intelligence et leur agilité pour atteindre leurs objectifs. Les assassins peuvent travailler pour des organisations secrètes, des guildes ou en tant qu'indépendants, mais tous partagent un engagement envers la discrétion et la maîtrise de leur art.",
      "domaines": [
        "Lame",
        "Minuit"
      ],
      "aptitude_espoir": {
        "nom": "Détermination mortelle",
        "description": "Dépensez 3 Espoir pour éliminer 2 stress."
      },
      "aptitudes_classe": [
        {
          "nom": "Marqué pour la mort",
          "description": "Lorsqu’une attaque d’arme réussit, vous pouvez dépenser 1 Stress pour marquer la cible comme « Marquée pour la Mort ». Lorsque vous infligez des dégâts à une cible que vous avez marquée pour la Mort, ajoutez un nombre de d4 égal à votre palier au jet de dégâts.\nVous ne pouvez avoir qu’un seul adversaire marqué pour la Mort à la fois. Cette condition dure jusqu’à votre repos, jusqu’à ce que l’adversaire marqué pour la Mort soit vaincu, ou jusqu’à ce que le Maître du Jeu dépense un nombre de Peur égal à votre niveau pour la dissiper."
        },
        {
          "nom": "Entrée et Sortie Discrètes",
          "description": "Dépensez 1 Espoir pour demander au Maître du Jeu un moyen rapide ou discret d’entrer dans ou de sortir d’un endroit que vous pouvez voir. Le prochain jet que vous effectuez qui agit sur cette information bénéficie d’un avantage."
        }
      ],
      "equipement_depart": {
        "esquive": 12,
        "points_blessure": 5,
        "objets_classe": [
          "Une liste de noms avec plusieurs marqués",
          "Une lame rouillée inscrite avec un insigne"
        ],
        "attributs": {
          "agilite": null,
          "force": null,
          "finesse": null,
          "instinct": null,
          "presence": null,
          "savoir": null
        },
        "arme_primaire": null,
        "arme_secondaire": null,
        "armure": "Armure de cuir"
      },
      "sous_classes": [
        {
          "nom": "Guilde des empoisonneurs",
          "description": "Jouez un agent de la Guilde des Empoisonneurs si vous souhaitez affaiblir vos cibles avec des afflictions punitives.",
          "trait_incantation": "Savoir",
          "paliers": {
            "base": [
              {
                "nom": "Concoctions Toxiques",
                "description": "Marquez 1 Stress pour placer 1d4+1 jetons sur cette carte. Lorsque vous portez une attaque d’arme réussie, vous pouvez dépenser un jeton pour infliger au cible un poison. Vous connaissez ces poisons:\nPétale du fantôme: la cible devient temporairement Vulnérable.\nSpore toxique: la cible doit aussi marquer 1 Stress.\nSangsue: vous infligez 1d6 dégâts supplémentaires sur cette attaque.\nLors d’un repos long, retirez tous les jetons non dépensés."
              }
            ],
            "specialisation": [
              {
                "nom": "Compendium des Poisons",
                "description": "vous connaissez aussi ces poisons:\nVigne nocturne: la cible a désavantage sur les jets d’attaque tant qu’elle ne marque pas 1 Stress pour dissiper cet effet.\nRacine de gorgone: la cible devient temporairement Bloqué.\n\nCroc jumeau: quand vous affligez une cible Marquée pour la Mort par un poison que vous connaissez, vous pouvez dépenser un jeton supplémentaire pour infliger aussi l’effet d’un deuxième poison que vous connaissez."
              }
            ],
            "maitrise": [
              {
                "nom": "Vénomancien",
                "description": "vous connaissez aussi ces poisons:\nGraine de mildiou: la cible reçoit un malus −3 à ses seuils de dégâts jusqu’à la fin de la scène. Cet effet ne peut pas s’empiler.\nFeuille de peur: vous infligez des dégâts supplémentaires équivalant au résultat de votre Dé Peur sur cette attaque.\nEpine de cadavre: la cible subit un désavantage sur les jets de réaction jusqu’à la fin de la scène.\n\nBénédiction vipère: vous êtes immunisé contre les poisons et autres toxines."
              }
            ]
          }
        },
        {
          "nom": "Guilde des éxécuteurs",
          "description": "Jouez un agent de la Guilde des Exécuteurs si vous voulez abattre vos cibles avec une précision mortelle.",
          "trait_incantation": "Agilité",
          "paliers": {
            "base": [
              {
                "nom": "Premier Coup",
                "description": "La première fois d’une scène où vous portez une attaque avec succès, vous infligez le double de dégâts."
              },
              {
                "nom": "Embuscade",
                "description": "Votre capacité « Marqué pour la Mort » utilise des d6 au lieu de d4."
              }
            ],
            "specialisation": [
              {
                "nom": "Frappe Mortelle",
                "description": "Lorsque vous infligez des dégâts Grave à une créature, vous pouvez dépenser 1 Stress pour forcer cette créature à marquer un point de blessure supplémentaire."
              },
              {
                "nom": "Posture du Scorpion",
                "description": "Vous gagnez un bonus +2 à votre esquive contre les attaques d’une créature que vous avez Marquée pour la Mort."
              }
            ],
            "maitrise": [
              {
                "nom": "frappe véritable",
                "description": "Une fois par repos long, lorsque vous ratez une attaque, vous pouvez dépenser 1 Espoir pour la faire réussir."
              },
              {
                "nom": "Coup de poignard dans le dos",
                "description": "Votre capacité « Marqué pour la Mort » utilise des d8 au lieu de d6."
              }
            ]
          }
        }
      ]
    },
    {
      "source": "Espoir et Peur (2027)",
      "nom": "Pugiliste",
      "description": "Les pugilistes sont des combattants qui se spécialisent dans le combat à mains nues, utilisant leur force, leur agilité et leur technique pour vaincre leurs adversaires. Ils sont souvent entraînés dans des arts martiaux ou des styles de combat spécifiques, et peuvent être trouvés dans des arènes de combat, des clubs de boxe ou même en tant que mercenaires. Les pugilistes sont connus pour leur endurance et leur capacité à encaisser les coups tout en infligeant des dégâts significatifs avec leurs poings.",
      "domaines": [
        "Vaillance",
        "Os"
      ],
      "aptitude_espoir": {
        "nom": "Confrontation",
        "description": "Dépensez 3 Espoir pour intimider une cible dans la Portée Proche, la rendant temporairement Vulnérable"
      },
      "aptitudes_classe": [
        {
          "nom": "Je suis une l'arme",
          "description": "Vos coups à mains nues sont aussi efficaces qu’une lame. Vous disposez d’une arme principale appelée Coup du Combattant qui est équipée tant que vous n’avez pas d’autre Arme Active. Elle utilise un trait de votre choix, a une portée Mêlée et inflige des dégâts physiques de d8+d6 dégâts physique, selon votre Compétence. Tant que cette arme est active, vous gagnez un bonus de +1 à votre Évasion."
        },
        {
          "nom": "Enchaînement",
          "description": "Après avoir infligé des dégâts lors d’une attaque avec une arme de mêlée, vous pouvez dépenser 1 Espoir pour lancer un combo. Lancez votre Dé Combo et notez le résultat, puis continuez à lancer votre Dé Combo tant que le résultat du dernier lancer est supérieur ou égal au précédent, vous vous arrêtez lorsque le dernier lancer est inférieur au précédent. Vous infligez des dégâts supplémentaires égaux à la somme de tous les résultats du Dé Combo sur cette attaque. Les résultats ne peuvent pas être modifiés.\n\nVotre Dé Combo démarre à d4. Une fois par palier, vous pouvez augmenter votre Dé Combo d’un cran en tant qu’option d’avancement de niveau."
        }
      ],
      "equipement_depart": {
        "esquive": 10,
        "points_blessure": 6,
        "objets_classe": [
          "Des bandages pour les mains de votre mentor",
          "livre sur votre passe-temps secret"
        ],
        "attributs": {
          "agilite": null,
          "force": null,
          "finesse": null,
          "instinct": null,
          "presence": null,
          "savoir": null
        },
        "arme_primaire": null,
        "arme_secondaire": null,
        "armure": "Armure de cuir"
      },
      "sous_classes": [
        {
          "nom": "Mastodonte",
          "description": "Jouez un mastodonte si vous voulez pulvériser vos adversaires avec des coups écrasants.",
          "trait_incantation": null,
          "paliers": {
            "base": [
              {
                "nom": "Robuste",
                "description": "Gagnez un bonus permanent de +3 à votre seuil de dommage Grave."
              },
              {
                "nom": "Submerger ",
                "description": "Lorsque vous réussissez une attaque contre une cible, vous pouvez dépenser 1 Espoir pour la projeter dans la Portée Proche ou pour la forcer à marquer un Stress."
              }
            ],
            "specialisation": [
              {
                "nom": "Cerné ",
                "description": "Lors d’une attaque avec une arme de mêlée, vous pouvez dépenser n’importe quel nombre d’Espoir pour viser le même nombre de créatures supplémentaires dans la portée de mêlée."
              },
              {
                "nom": "oeil pour oeil",
                "description": "Une fois par repos lorsque qu’un adversaire en mêlée vous fait marquer un nombre quelconque de Points de blessure, vous pouvez marquer 1 Stress pour l’obliger à marquer le même nombre de blessure."
              }
            ],
            "maitrise": [
              {
                "nom": "Une joie percutante",
                "description": "Lorsqu’une attaque d’arme de mêlée réussit avec critique, vous gagnez 1 Espoir supplémentaire, retirez 1 Stress supplémentaire et augmentez votre Compétence d’un +1 pour cette attaque."
              },
              {
                "nom": "pas encore fini",
                "description": "Lorsque vous subissez des dégâts sévères, vous pouvez gagner 1 Espoir ou retirer 1 Stress."
              }
            ]
          }
        },
        {
          "nom": "Artiste Martial",
          "trait_incantation": null,
          "paliers": {
            "base": [
              {
                "nom": "posture de combat",
                "description": "Vous pouvez canaliser votre détermination pour passer en postures martiales offrant des avantages en combat.\n\nNote: Prenez la fiche des Postures Martiales et choisissez deux postures du palier 1. À chaque montée de niveau, choisissez une posture supplémentaire du même tier ou d’un tier inférieur."
              }
            ],
            "specialisation": [
              {
                "nom": "Défenses acharnées",
                "description": "Lorsque vous êtes visé par une attaque, vous pouvez dépenser un Focus pour gagner un bonus d'esquive égal à votre palier contre l’attaque."
              },
              {
                "nom": "Tir focalisée",
                "description": "Dépensez un Focus pour effectuer un Jet d’Instinct contre un adversaire à Portée Lointaine. En cas de réussite, infligez d20+3 dégâts magiques en utilisant votre Compétence."
              }
            ],
            "maitrise": [
              {
                "nom": "Dépasser vos limite",
                "description": "Une fois par repos, vous pouvez réaliser un exploit athlétique incroyable (par ex. courir sur l’eau, sauter entre toits, etc.). Lorsque vous le faites, gagnez 1 Espoir et retirez 1 Stress."
              },
              {
                "nom": "Maîtrise du flux",
                "description": "Vous pouvez marquer un Stress au lieu de dépenser un Focus pour changer de posture. De plus, vous pouvez dépenser un Focus au lieu de marquer un Stress pour lancer un Enchaînement."
              }
            ]
          }
        }
      ]
    },
		{
      "source": "Espoir et Peur (2027)",
      "nom": "Démoniste",
      "description": "Les démonistes sont des individus qui explorent les mystères cachés de l'univers, souvent en étudiant des arts ésotériques, des rituels anciens et des connaissances interdites. Ils cherchent à comprendre et à manipuler les forces invisibles qui régissent le monde, allant de la magie noire aux secrets de l'alchimie. Les démonistes peuvent être des chercheurs solitaires, des membres de sociétés secrètes ou des conseillers pour ceux qui cherchent à exploiter le pouvoir occulte. Leur quête de savoir peut les amener à franchir des limites morales et éthiques, mais leur expertise dans les arts occultes en fait des alliés précieux et redoutables.",
      "domaines": [
        "Peur",
        "Grâce"
      ],
      "aptitude_espoir": {
        "nom": "Faveur du patron",
        "description": "Lorsque vous échouez à un lancer, vous pouvez dépenser 3 Espoir relancer avec avantage."
      },
      "aptitudes_classe": [
        {
          "nom": "Pacte du Mécène",
          "description": "Vous vous êtes engagé envers une entité surnaturelle, telle qu’un dieu, une fée ou un démon, en échange de pouvoir.\nNotez son nom sur votre feuille de personnage, puis travaillez avec le MJ pour déterminer son domaine d’influence (par ex. Nature, Chaos, Sagesse, Farce, Amour, Guerre, Justice, ou Mort). Avant d’effectuer un jet d’action lié au domaine d’influence de votre mécène, vous pouvez dépenser une faveur pour invoquer son aide, en lançant votre Dé du Mécène et en ajoutant son résultat au total. Votre Dé du Mécène commence à d6 et augmente à d8 au niveau 5."
        },
        {
          "nom": "Faveur",
          "description": "Vous commencez avec 3 Faveur. Vous pouvez utiliser une action de repos pour témoigner votre hommage à votre Patron. Décrivez comment et gagnez des faveur équivalents à votre trait d'incantation. De plus, lorsque vous réussissez un jet d’action avec l’Espoir, vous pouvez choisir de gagner une faveur au lieu d’un Espoir."
        }
      ],
      "equipement_depart": {
        "esquive": 11,
        "points_blessure": 5,
        "objets_classe": [
          "Une sculpture qui symbolise votre patron",
          "Une bague que vous ne pouvez pas retirer"
        ],
        "attributs": {
          "agilite": null,
          "force": null,
          "finesse": null,
          "instinct": null,
          "presence": null,
          "savoir": null
        },
        "arme_primaire": null,
        "arme_secondaire": null,
        "armure": "Armure de cuir"
      },
      "sous_classes": [
        {
          "nom": "Pacte Éternel",
          "description": "Dévouer sa vie au Pacte des Éternels si vous voulez tenir bon face aux ennemis et éviter la mort.",
		  "trait_incantation": "Présence",
          "paliers": {
            "base": [
              {
                "nom": "Vêtir des atouts de votre patron",
                "description": "Dépensez une Faveur pour vous envelopper d’un aspect terrifiant de votre Patron, qui dure jusqu’à ce que vous subissiez des dégâts Grave ou jusqu’à la fin de la scène. Tant que cet effet est actif, vous gagnez un bonus à vos Seuils de dégâts égal à votre Palier et vous avez l’avantage sur les jets d’action pour intimider une cible"
              },
              {
                "nom": "Étreinte immortelle",
                "description": " Une fois par repos, dépensez n'importe quel nombre de faveurs lancer un nombre égal de dés. Pour chaque résultat de 4 ou plus, effacez a Point de blessure."
              }
            ],
            "specialisation": [
              {
                "nom": "Invocation Abominable",
                "description": "Lorsqu’un adversaire vous vise, vous ou un allié dans la portée Très Proche avec une attaque, vous pouvez dépenser une Faveur pour infliger un désavantage au jet. Si l’adversaire échoue, il doit aussi marquer 1 Stress."
              },
              {
                "nom": "Absortion des dégâts",
                "description": "Une fois par repos, vous pouvez dépenser une Faveur pour réduire de moitié les dégâts reçu."
              }
            ],
            "maitrise": [
              {
                "nom": "Égide obscure",
                "description": "Une fois par repos long, lorsque vous allez subir des dégâts, vous pouvez dépenser une Faveur à la place de marquer des PB."
              },
              {
                "nom": "Malédiction drainante",
                "description": "Quand un adversaire vous vise, vous ou un allié dans la portée Très Proche, vous pouvez dépenser une Faveur pour le Drainer. Lors de cela, il doit marquer 1 Stress et vous pouvez effacer 1 Stress. Tant que Drainé, la cible utilise un D12 au lieu d’un D20 pour ses jets d’attaque (avantage ou désavantage inclus) jusqu’à ce qu’un échec se produise."
              }
            ]
          }
        },
        {
          "nom": "Pacte de la colére",
          "description": "Signé de votre sang le Pacte de la colére si vous voulez détruire ceux qui agissent contre vous.",
		  "trait_incantation": "Présence",
          "paliers": {
            "base": [
              {
                "nom": "La fureur du patron",
                "description": "Dépensez une Faveur pour imprégner vos attaques de la puissance de votre Patron jusqu’à ce que vous infligiez des dégâts Grave ou que la scène se termine. Lorsque vous infligez des dégâts tant que cet effet est actif, vous lancez aussi un nombre égal de Dés égale à votre Palier et ajoutez leur total aux dégâts infligés."
              },
              {
                "nom": "Vengeance Mortelle",
                "description": "Lorsque vous marquez un nombre quelconque de PB suite à une attaque, vous pouvez dépenser une Faveur pour lancer un nombre égal de Dés Faveur. Pour chaque résultat de 4 ou plus, l’attaquant marque un PB."
              }
            ],
            "specialisation": [
              {
                "nom": "Jamais très loin",
                "description": "Dépensez une Faveur pour augmenter la portée de votre arme principale d’un cran (par ex. de Corps-à-corps à Très Proche, ou Très Proche à Proche) jusqu’à une portée Très Lointaine maximale. Cet effet prend fin après une attaque réussie avec cette arme."
              },
              {
                "nom": "Malédiction du faible",
                "description": "Lorsque vous réussissez un jet avec Espoir contre une cible, vous pouvez dépenser n’importe quel nombre de Faveur pour forcer la cible à marquer un nombre égal de Stress."
              }
            ],
            "maitrise": [
              {
                "nom": "Attaque Redoutable",
                "description": " Dépensez une Faveur pour relancer n’importe quel nombre de vos dés de dégâts. Vous pouvez continuer à dépenser des Faveur pour utiliser cette caractéristique sur le même jet de dégâts."
              },
              {
                "nom": "Colère surnaturel",
                "description": "Une fois par repos lorsque vous subissez des dégâts, vous pouvez dépensez n'importe quel nombre de faveurs lancer autant de dés de patron et cibler un nombre de créatures à courte portée égal au résultat le plus élevé. Chaque cible doit marquer un point de Blessure."
              }
            ]
          }
        }
      ]
    },
		{
      "source": "Espoir et Peur (2027)",
      "nom": "Sorcière",
      "description": "à faire",
      "domaines": [
        "Sagesse",
        "Peur"
      ],
      "trait_incantation": null,
      "aptitude_espoir": {
        "nom": "Charme de sorcière",
        "description": "Lorsque vous ou un allié situé à Portée Très Lointaine échouez à un jet d’action, vous pouvez dépenser 3 Espoir pour en faire une réussite avec Peur à la place."
      },
      "aptitudes_classe": [
        {
          "nom": "Malédiction",
          "description": "Marquez 1 Stress pour maudire temporairement une cible située à Portée Très Lointaine. Tant que la cible est maudite, elle subit une pénalité à ses jets de dégâts et à sa Difficulté égale à votre Palier. Le nombre maximal de créatures que vous pouvez maudire en même temps est égal à votre trait d'incantation."
        },
        {
          "nom": "Connexion avec l’Au-Delà",
          "description": "Une fois par repos long, lors d’un moment de calme, vous pouvez communiquer avec un ancêtre, une divinité, un esprit ou une entité d’outre-monde. Posez-leur une question, puis lancez un nombre de Dés égal à votre trait d'incantation. Choisissez l’un des résultats et référez-vous au tableau ci‑dessous pour l’effet.\n\n1-3: Vous goûtez une saveur, sentez une odeur ou ressentez une sensation liée à la réponse.\n4-5: Vous entendez des sons ou voyez une vision liée à la réponse.\n6: Vous vivez psychiquement une scène liée à la réponse comme si vous y étiez."
        }
      ],
      "equipement_depart": {
        "esquive": 10,
        "points_blessure": 6,
        "objets_classe": [
          "Un petit animal de compagnie inoffensif",
          "une pierre de voyance"
        ],
        "attributs": {
          "agilite": null,
          "force": null,
          "finesse": null,
          "instinct": null,
          "presence": null,
          "savoir": null
        },
        "arme_primaire": null,
        "arme_secondaire": null,
        "armure": "Armure de cuir"
      },
      "sous_classes": [
        {
          "nom": "Haine",
          "description": "Jouez la haine si vous voulez utiliser votre art pour vous donner du pouvoir ainsi qu’à votre groupe.",
		  "trait_incantation": "Savoir",
          "paliers": {
            "base": [
              {
                "nom": "Remèdes à base de plantes",
                "description": "Lorsque vous ou un allié dans la scène effacez 1 ou plusieurs Points de blessure ou Stress suite à l'utilisation d'un consommable, augmentez le nombre effacé de 1."
              },
              {
                "nom": "Talisman enchanté",
                "description": "Une fois par repos, vous pouvez imprégner un petit objet de votre essence protectrice. Dépensez un nombre quelconque d’Espoir pour placer un nombre égal de jetons sur cette carte. Lorsque la personne qui porte le talisman prend des dégâts, dépensez un jeton pour réduire le nombre de PB qu’elle marque d’un point. Retirez tous les jetons de cette carte lorsque vous prenez un repos."
              }
            ],
            "specialisation": [
              {
                "nom": "Marcher entre les mondes",
                "description": "Lors d’un moment de calme, faites un jet d'incantation (13). Une fois par repos, en cas de réussite, vous pouvez marquer 1 Stress pour franchir le voile de la mort et converser avec des esprits proches. Placez un nombre de jetons égal à votre trait d'incantation sur cette carte et retirez-en un à chaque fois qu’un esprit répond à une question. Lorsque le dernier jeton est retiré ou à la fin de la scène, revenez au Monde des Mortels au même endroit où vous l’avez quitté."
              },
              {
                "nom": "Malédiction insupportable",
                "description": "Vous avez l’avantage sur les attaques contre les créatures victime de votre malédiction."
              }
            ],
            "maitrise": [
              {
                "nom": "Cercle de pouvoir",
                "description": "Une fois par repos, tracez un cercle au sol délimitant une zone Très Proche autour de vous, et placez un nombre de jetons égal à votre trait d'incantation sur cette carte. Tant que vous et vos alliés êtes dans ce cercle, vous bénéficiez d’un bonus +2 aux seuils de dégâts, jets d’attaque et esquive. Retirez un jeton à chaque fois que vous ou un allié dans le cercle effectuez un jet d’action ou esquive une attaque. Cet effet dure jusqu’au retrait du dernier jeton ou à la sortie du cercle."
              },
            ]
          }
        },
        {
          "nom": "Lune",
          "description": "Incarner la puissnce lunaire pour amplifier votre magie.",
		  "trait_incantation": "Instinct",
          "paliers": {
            "base": [
              {
                "nom": "Charme nocturne",
                "description": "Lancez un jet d'incantation (13) pour vous revêtir d'une une apparence ensorcelante. Tant que vous êtes sous cette apparence, vous avez l’avantage sur les jets qui exploitent votre apparence surnaturel. De plus, les adversaires dans la Portée Proche doivent marquer 1 Stress pour vous attaquer.\nSauf si vous maintenez cette apparence en dépenser un Stress, il tombe lorsque vous marquez un PB ou infligez des dégâts."
              },
            ],
            "specialisation": [
              {
                "nom": "Rayon lunaire",
                "description": "Une fois par session, vous pouvez invoquer une colonne de clair de lune qui éclaire la zone dans Portée Proche jusqu’à la fin de la scène. Dans ce clair de lune, vous et vos alliés gagnez +1 à vos Lancers de sort et pouvez voir à travers les illusions."
              },
              {
                "nom": "Courroux de l'astre lunaire",
                "description": "Lorsqu’une créature sous effet de votre malédiction à distance Très Lointain rate une attaque, elle doit marquer un Stress."
              }
            ],
            "maitrise": [
              {
                "nom": "Phases lunaires",
                "description": "Phases lunaires: Au début de chaque session, lancez un d6 et placez-le sur cette carte. Vous obtenez l’effet correspondant jusqu’à la fin de la session.\n\n1: Nouvelle phase - Dépensez un Espoir pour annuler des dégâts mineur.\n2–3: Lune croissante - +2 aux jets de dégâts.\n4: Pleine lune - +3 aux seuils de dégâts.\n5–6: Diminution - +1 à l'Esquive.\n\nUne fois par repos, vous pouvez Dépenser un espoir pour augmenter la valeur de ce dé d'un. Si vous augmentez la valeur d'un 6, cela devient un 1."
              },
            ]
          }
        }
      ]
    }
  ]
};
