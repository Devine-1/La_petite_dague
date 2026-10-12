// Donnees des environnements Daggerheart (genere depuis ENVIRONNEMENTS.ods).
// Champs : id, nom, palier, type, description, impulsions, difficulte, adversaires,
// aptitudes [{nom, tag, texte, questions}], source.
// Dans "texte", chaque ligne est un paragraphe ; une ligne qui commence par "- " est une puce.
var ENVIRONNEMENTS_DATA = {
  "version": 1,
  "source": "ENVIRONNEMENTS.ods",
  "environnements": [
    {
      "id": "ascension-de-falaise",
      "nom": "Ascension de falaise",
      "palier": 1,
      "type": "Traversée",
      "description": "Une falaise abrupte et rocheuse suffisamment haute pour rendre la traversée dangereuse.",
      "impulsions": "Faire chuter les gens mal préparer vers une mort sur les rochers, attirer les gens par la promesse de ce qu'ils trouveront en haut.",
      "difficulte": 12,
      "adversaires": "Créature artificielle, défenseur enraciné, scopion géant, serpent de verre",
      "aptitudes": [
        {
          "nom": "L'ascension",
          "tag": "Passive",
          "texte": "L'ascension de la falaise utilise un compte à rebours de progression (12). Il diminue selon les critères suivants lorsque les PC effectuent un jet d'action pour grimper :\n- Succès critique : Cochez 3\n- Réussir avec espoir : Cochez 2\n- Réussir avec la peur : Cochez 1\n- Échec avec espoir : pas d'avancement\n- Échec avec peur : Cochez 1\nQuand le compte à rebours se déclenche, le groupe atteint le sommet de la falaise.",
          "questions": "Dans quelles formations étranges sont disposées les pierres ? Quels avertissements inquiétants les aventuriers précédents ont-ils laissés ?"
        },
        {
          "nom": "Pitons restant",
          "tag": "Passive",
          "texte": "Les grimpeurs précédents ont laissé derrière eux de grandes tiges métalliques que les grimpeurs peuvent utiliser pour faciliter leur ascension. Si un PJutilisant les pitons échoue à un jet d'action pour grimper, il peut marquer un stress au lieu de cocher le compte à rebours vers le haut.",
          "questions": "Que vous disent la forme et le matériau de ces pitons sur les grimpeurs précédents ? À quelle distance sont-ils les uns des autres ?"
        },
        {
          "nom": "Chute",
          "tag": "Action",
          "texte": "Dépensez une peur de voir la poignée d'un PC tomber en panne, le faisant tomber vers le sol. S'ils ne sont pas sauvés lors de l'action suivante, ils doivent faire un jet ; augmentez le compte à rebours de 1 et ils subissent 1d12 dégâts physiques si le compte à rebours est compris entre 8 et 12, 2d12 entre 4 et 7 et 3d12 à 3 ou moins.",
          "questions": "Comment pouvez-vous dire combien d’autres sont déjà tombés ici ? Qu'est-ce qui vit dans ces murs et qui pourrait tenter d'effrayer les aventuriers et de les pousser à tomber dans un repas facile ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "bosquet-abandonnee",
      "nom": "Bosquet abandonnée",
      "palier": 1,
      "type": "Exploration",
      "description": "Un ancien bosquet druidique en jachère et entièrement récupéré par la nature.",
      "impulsions": "Attirez les curieux, faites écho au passé",
      "difficulte": 11,
      "adversaires": "Bêtes (ours, loup sinistre, serpent de verre), gardiens du bosquet (Tréant mineur, soldat sylvestre, jeune dryade)",
      "aptitudes": [
        {
          "nom": "Champ de bataille envahi par la végétation",
          "tag": "Passive",
          "texte": "Il y a eu une bataille c'est dérouler ici. Un PJ peut faire un jet d'Instinct pour identifier les preuves de ce combat. En cas de succès avec espoir, apprenez les trois informations ci-dessous. En cas de succès avec peur, apprenez deux inforamation. En cas d'échec, un PJ peut marquer un Stress pour en apprendre une infmormation et obtenir un avantage sur le prochain jet d'action pour étudier cet environnement. Un PJ doté d'une formation ou d'une expérience appropriée peut apprendre un détail supplémentaire et poser une question complémentaire sur la scène et obtenir une réponse véridique (mais pas toujours complète).\n- Des traces d'une bataille (armes et branches cassées, gouges dans le sol) jonchent le sol.\n- Un tronc d'arbre recouvert de mousse est en fait le cadavre d'un Tréant.\n- Les arbres encore debout sont tordus de manière étrange, comme par une magie puissante.",
          "questions": "Pourquoi ces deux groupe se sont-ils affrontés? Pourquoi le bosquet n'est-il plus utilisé?"
        },
        {
          "nom": "Liane épineuse",
          "tag": "Action",
          "texte": "Choisissez un point dans le bosquet. Toutes les cibles situées à très courte distance de ce point doivent réussir sur un jet de réaction d'agilité ou subir des dégâts physiques de 1d8+3 et être bloqué par des Liane épineuse. La bloquage dure jusqu'à ce qu'ils soient libérés avec un jet de finesse ou de force réussi ou en infligeant au moins 6 dégâts aux vignes."
        },
        {
          "nom": "Vous êtes pas les bienvenue",
          "tag": "Action",
          "texte": "Un jeune Dryade, deux soldats sylvestres et un nombre de traîtres mineurs égal au nombre de PJ semblent affronter le groupe pour leur intrusion."
        },
        {
          "nom": "Profanateur",
          "tag": "Action",
          "texte": "Dépensez une peur pour invoquer un adversaire du chaos mineur attiré par les échos de la violence et de la discorde. Ils apparaissent à distance d'un PJ choisi et prennent immédiatement le devant de la scène."
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "place-du-marche-anime",
      "nom": "Place du Marché animé",
      "palier": 1,
      "type": "Social",
      "description": "Le cœur économique de la ville, avec des artisans locaux, des marchands itinérants et des clients de toutes les classes sociales.",
      "impulsions": "Acheter bas, vendre haut, tenter et séduire avec des marchandises venues de près comme de loin",
      "difficulte": 10,
      "adversaires": "Gardes (Garde à lame, Chef de la garde), Voleur masqué, Marchand",
      "aptitudes": [
        {
          "nom": "Faire pencher la balance",
          "tag": "Passive",
          "texte": "Les PJ peuvent obtenir l'avantage à un jet de Présence en offrant une poignée d'or dans le cadre de l'interaction.",
          "questions": "N'importe quelle pièce sera-t-elle acceptée, ou seulement la monnaie locale ? Avec quelle ostentation les PJ offrent-ils ce pot-de-vin ?"
        },
        {
          "nom": "Trouvaille inattendue",
          "tag": "Action",
          "texte": "Révélez aux PJ que l'un des marchands possède quelque chose qu'ils veulent ou dont ils ont besoin, comme de la nourriture de chez eux, un livre rare, des composants magiques, une carte au trésor douteuse ou une clé magique.",
          "questions": "Quel prix, au-delà de l'or, le marchand exigera-t-il en échange de cette rareté ?"
        },
        {
          "nom": "Doigts Agiles",
          "tag": "Action",
          "texte": "Un voleur tente de dérober quelque chose à un PJ. Le PJ doit réussir un jet d'Instinct pour remarquer le voleur, sinon il perd un objet au choix du MJ tandis que le voleur s'enfuit à distance Proche. Pour récupérer l'objet volé, les PJ doivent accomplir un compte à rebours de progression (6) pour rattraper le voleur avant que celui-ci n'accomplisse un compte à rebours de conséquence (4) et ne s'échappe vers sa cachette.",
          "questions": "Qu'est-ce qui a poussé cette personne à voler à la tire ? Où se trouve la cachette du voleur, et comment est-elle restée inaperçue ?"
        },
        {
          "nom": "Noyè dans la foule",
          "tag": "Réaction",
          "texte": "Lorsque l'un des PJ se sépare du groupe, la foule se déplace et le coupe du reste de l'équipe.",
          "questions": "Où le mouvement de la foule l'emporte-t-il ? Que ressent-il à se retrouver seul, mais entouré de monde ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "prendre-en-embuscade",
      "nom": "Prendre en Embuscade",
      "palier": 1,
      "type": "Événement",
      "description": "Une embuscade est tendue par les PJ pour prendre des adversaires au dépourvu.",
      "impulsions": "S'échapper, se regrouper, protéger les plus vulnérables",
      "difficulte": "Spéciale (voir « Force relative »)",
      "adversaires": "Tous",
      "aptitudes": [
        {
          "nom": "Force relative",
          "tag": "Passive",
          "texte": "La Difficulté de cet environnement est égale à celle de l'adversaire ayant la Difficulté la plus élevée."
        },
        {
          "nom": "Ça viensd’ou ? ?",
          "tag": "Réaction",
          "texte": "Lorsqu'un PJ déclenche l'embuscade contre des adversaires qui ne se doutent de rien, vous perdez 2 Peur et le premier jet d'attaque d'un PJ a l'avantage."
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "pris-en-embuscade",
      "nom": "Pris en Embuscade",
      "palier": 1,
      "type": "Événement",
      "description": "Une embuscade est tendue pour prendre le groupe au dépourvu.",
      "impulsions": "Submerger, disperser, encercler",
      "difficulte": "Spéciale (voir « Force relative »)",
      "adversaires": "Tous",
      "aptitudes": [
        {
          "nom": "Force relative",
          "tag": "Passive",
          "texte": "La Difficulté de cet environnement est égale à celle de l'adversaire ayant la Difficulté la plus élevée."
        },
        {
          "nom": "Surprise !",
          "tag": "Action",
          "texte": "Les assaillants se révèlent au groupe, vous gagnez 2 Peur et le devant de la scène passe immédiatement à l'un des adversaires embusqués."
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "riviere-tumultueuse",
      "nom": "Rivière tumultueuse",
      "palier": 1,
      "type": "Traversée",
      "description": "Une rivière au courant rapide, sans pont, assez profonde pour emporter la plupart des gens.",
      "impulsions": "Barrer le passage, emporter les imprudents, diviser la terre",
      "difficulte": 10,
      "adversaires": "Bêtes (Ours, Serpent de verre), Bandits du couteau sinueux (Maudisseur, Brisegenoux, Laquais, Lieutenant, Ombre, Tireur)",
      "aptitudes": [
        {
          "nom": "Traversée dangereuse",
          "tag": "Passive",
          "texte": "Traverser la rivière demande au groupe d'accomplir un compte à rebours de progression (4). Un PJ qui obtient un échec avec Peur est immédiatement visé par l'action « Courant de fond », sans qu'il faille dépenser de Peur pour cette aptitude.",
          "questions": "Certains PJ ont-ils déjà franchi des rivières comme celle-ci à gué ? L'un d'eux a-t-il peur de la noyade ?"
        },
        {
          "nom": "Courant de fond",
          "tag": "Action",
          "texte": "Dépensez 1 Peur pour entraîner un PJ dans le courant de fond. Il doit faire un jet de réaction d'Agilité. Sur un échec, il subit 1d6+1 dégâts physiques et est emporté en aval d'une distance Proche, devenant Vulnérable jusqu'à ce qu'il sorte de la rivière. Sur un succès, il doit marquer un Stress.",
          "questions": "Quelles breloques et babioles gisent au fond du lit de la rivière ? Des prédateurs nagent-ils dans ces eaux ?"
        },
        {
          "nom": "Chasseur patient",
          "tag": "Action",
          "texte": "Dépensez 1 Peur pour invoquer un Serpent de verre à portée Proche d'un PJ choisi. Le serpent apparaît dans la rivière ou près d'elle et prend immédiatement le devant de la scène pour utiliser son action « Serpent tourbillonnant ».",
          "questions": "Quels trésors la bête garde-t-elle dans son terrier ? Quels voyageurs sont déjà tombés victimes de ce prédateur ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "taverne-locale",
      "nom": "Taverne locale",
      "palier": 1,
      "type": "Social",
      "description": "Une taverne animée qui sert de centre social à sa ville.",
      "impulsions": "Offrir des opportunités aux aventuriers, nourrir la communauté",
      "difficulte": 10,
      "adversaires": "Gardes (Garde à épéiste, Chef de la garde), Mercenaires (Persécuteur, Lamesort, Lame-mage, Maître d'armes), Marchand",
      "aptitudes": [
        {
          "nom": "Tout le monde en parle",
          "tag": "Passive",
          "texte": "Un PJ peut interroger le barman, le personnel ou les clients sur les événements locaux, les rumeurs et le travail disponible avec un jet de Présence. Sur un succès, il choisit deux des détails ci-dessous à apprendre, ou trois sur un succès critique. Sur un échec, il en choisit un et marque un Stress, car le local se lance dans un bavardage sans intérêt.\n- Une rumeur fascinante liée au passé d'un PJ\n- Un travail prometteur pour le groupe, lié à une menace ou à une situation proche\n- Un folklore local qui rejoint quelque chose qu'ils ont vu\n- Des commérages de la ville qui laissent entrevoir un problème de la communauté",
          "questions": "Qui détient quelles informations ? Quels commérages les habitants se mettent-ils à répandre sur les PJ ?"
        },
        {
          "nom": "Chantez pour votre souper",
          "tag": "Passive",
          "texte": "Un PJ peut se produire une fois devant les clients en faisant un jet de Présence. Sur un succès, il gagne 1d4 poignées d'or (2d4 sur un succès critique). Sur un échec, il marque un Stress.",
          "questions": "Quel morceau interprétez-vous ? Que signifie-t-il pour vous ? Quand l'avez-vous joué pour la dernière fois devant un public ?"
        },
        {
          "nom": "Étranger mystérieux",
          "tag": "Action",
          "texte": "Révélez un étranger qui cache son identité, tapi dans un box sombre.",
          "questions": "Que veut-il ? Quelle impression a-t-il des PJ ? Quelles manières ou quels accessoires le caractérisent ?"
        },
        {
          "nom": "Quelqu'un arrive en ville",
          "tag": "Action",
          "texte": "Introduisez un PNJ important qui veut engager le groupe pour une mission ou qui est lié au passé d'un PJ.",
          "questions": "Savait-il que les PJ étaient là ? Que veut-il dans cette ville ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "villle-frontaliere",
      "nom": "Villle Frontalière",
      "palier": 1,
      "type": "Social",
      "description": "Une petite ville en bordure d'une nation ou d'une région, proche d'un donjon, de tombes ou d'autres destinations d'aventure.",
      "impulsions": "Conduire les désespérés à une mort certaine, tirer profit d'un espoir en lambeaux",
      "difficulte": 12,
      "adversaires": "Bandits du couteau sinueux (Maudisseur, Casseur de genoux, Laquais, Lieutenant, Ombre, Tireur), Voleur masqué, Marchand",
      "aptitudes": [
        {
          "nom": "Les rumeurs courent",
          "tag": "Passive",
          "texte": "Les commérages sont la monnaie qui circule le plus vite dans le royaume. Un PJ peut se renseigner sur les événements majeurs avec un jet de Présence. Ce qu'il apprend dépend du résultat de son jet, selon les critères suivants :\n- Succès critique : il apprend deux événements majeurs. Le PJ peut poser une question de suivi sur l'une des rumeurs et obtenir une réponse sincère (mais pas toujours complète).\n- Succès avec Espoir : il apprend deux événements, dont au moins un est lié au passé du personnage.\n- Succès avec Peur : il apprend une rumeur alarmante liée au passé du personnage.\n- Tout échec : les habitants réagissent mal à ses questions. Le PJ doit marquer un Stress pour apprendre une rumeur pertinente.",
          "questions": "Quelles nouvelles les PJ entendent-ils, qu'ils pourraient transmettre à des voyageurs curieux ? Que pensent les habitants de ces événements ?"
        },
        {
          "nom": "Société de la Boussole brisée",
          "tag": "Passive",
          "texte": "Une société d'aventuriers tient ici un quartier général, où les héros échangent des nouvelles et des rumeurs, trinquent à leurs succès imaginaires et complotent pour nuire à leurs rivaux.",
          "questions": "Quelles vantardises les aventuriers d'ici lancent-ils, et lesquelles vous semblent vraies ?"
        },
        {
          "nom": "Groupe rival",
          "tag": "Passive",
          "texte": "Un autre groupe d'aventuriers est ici, à la recherche du même trésor ou des mêmes pistes que les PJ.",
          "questions": "Quel PJ a un lien avec l'un des membres du groupe rival ? Viennent-ils d'abord vers ce PJ, ou attendent-ils qu'il fasse le premier pas ?"
        },
        {
          "nom": "Ce serait dommage qu'il arrive quelque chose à votre boutique",
          "tag": "Action",
          "texte": "Les PJ voient des hommes de main d'un chef du crime local racketter une boutique d'articles divers.",
          "questions": "Quels ennuis cela cause-t-il si les PJ interviennent ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "cite-hantee",
      "nom": "Cité hantée",
      "palier": 2,
      "type": "Exploration",
      "description": "Une cité abandonnée, peuplée des esprits agités d'époques révolues.",
      "impulsions": "Égarer et désorienter, rejouer des apocalypses publiques comme intimes",
      "difficulte": 14,
      "adversaires": "Fantômes (Archer spectral, Capitaine spectral, Gardien spectral), versions fantomatiques d'autres adversaires (voir « Forme fantomatique »)",
      "aptitudes": [
        {
          "nom": "Savoir enfoui",
          "tag": "Passive",
          "texte": "La cité a d'innombrables mystères à dévoiler. Un PJ qui cherche à en savoir plus sur la cité déchue peut faire un jet d'Instinct ou de Savoir pour apprendre des choses sur ce lieu et découvrir du butin (potentiellement hanté).\n- Succès critique : il obtient des informations précieuses et un objet utile qui s'y rapporte.\n- Succès avec Espoir : il obtient des informations précieuses.\n- Succès avec Peur : il découvre des informations vagues ou incomplètes.\n- Tout échec : il marque un Stress pour trouver une piste après une fouille exhaustive.",
          "questions": "Quels secrets la cité renferme-t-elle ? Pourquoi tant de fantômes s'attardent-ils ici ? Quels aventuriers condamnés y ont déjà connu un sombre sort ?"
        },
        {
          "nom": "Forme fantomatique",
          "tag": "Passive",
          "texte": "Les adversaires qui apparaissent ici ont une forme fantomatique. Ils ont une résistance aux dégâts physiques et peuvent marquer un Stress pour traverser des objets solides jusqu'à portée Proche.",
          "questions": "Quelles blessures de leur forme physique révèlent la cause de leur mort ? Quel but inassouvi les retient dans le Plan mortel ?"
        },
        {
          "nom": "Cul-de-sac",
          "tag": "Action",
          "texte": "Les fantômes d'une époque révolue font apparaître des scènes du passé, comme une fête de rue, un conseil municipal ou un cambriolage. Ces hantises modifient la disposition de la cité autour des PJ : elles leur bloquent le chemin derrière eux, les forcent à faire un détour ou leur présentent un défi, par exemple en les prenant pour des voleurs rivaux lors du cambriolage.",
          "questions": "Que veulent de vous les fantômes ? De quoi avez-vous besoin d'eux ?"
        },
        {
          "nom": "Et vint L'Apocalypse",
          "tag": "Action",
          "texte": "Dépensez 1 Peur pour faire surgir l'écho d'un désastre passé qui a ravagé la cité. Activez un compte à rebours de progression (5) tandis que la catastrophe se rejoue autour des PJ. Pour terminer le compte à rebours et échapper au cataclysme, les PJ doivent surmonter des menaces comme des incendies déchaînés, des civils en panique, des bâtiments qui s'effondrent ou des rues qui s'écroulent, tout en se remémorant l'histoire et en cherchant des indices pour fuir l'inévitable.",
          "questions": "S'agit-il du désastre qui a conduit à l'abandon de la cité ? Que sait-on de ce désastre, et comment cela pourrait-il aider les PJ à s'échapper ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "col-de-montagne",
      "nom": "Col de montagne",
      "palier": 2,
      "type": "Traversée",
      "description": "Des pics rocheux qui percent les nuages, avec un sentier sinueux qui monte et redescend en de nombreux lacets.",
      "impulsions": "Exiger un tribut glacial en vivres et en endurance, révéler un sommeil magique, ralentir le voyage",
      "difficulte": 15,
      "adversaires": "Bêtes (Ours, Aigle géant, Serpent de verre), Crâne du chaos, Minotaure Démolisseur, Chasseur redoutable",
      "aptitudes": [
        {
          "nom": "Symbole gravés",
          "tag": "Passive",
          "texte": "De grands signes et gravures ont été faits dans la montagne. Un PJ ayant un passé ou une Expérience pertinents y reconnaît une magie météorologique qui renforce la puissance des vents glacials. Un PJ qui réussit un jet de Savoir peut se rappeler des informations sur les sceaux, d'éventuels renseignements sur leurs créateurs et la façon de les dissiper. Si un PJ obtient un succès critique, il reconnaît que les sceaux sont d'un style créé par des enchanteurs de haute naissance et il a l'avantage à un jet pour les dissiper.",
          "questions": "Qui a jeté cet enchantement ? Est-il à proximité ? Pourquoi voulait-il rendre le temps plus redoutable ?"
        },
        {
          "nom": "Avalanche",
          "tag": "Action",
          "texte": "Dépensez 1 Peur pour sculpter la montagne d'un torrent glacé et provoquer une avalanche. Tous les PJ sur sa trajectoire doivent réussir un jet de réaction d'Agilité ou de Force, sinon ils sont renversés et emportés le long de la montagne. Un PJ qui utilise une corde, des pitons ou un autre équipement d'escalade a l'avantage à ce jet. Les cibles qui échouent sont projetées en bas de la montagne à portée Loin, subissent 2d20 dégâts physiques et doivent marquer un Stress. Les cibles qui réussissent doivent marquer un Stress.",
          "questions": "Comment les PJ tentent-ils de résister à l'avalanche ? Quelle approche adoptent-ils pour éviter d'être ensevelis ou de dévaler la montagne ?"
        },
        {
          "nom": "Nid de rapaces",
          "tag": "Réaction",
          "texte": "Lorsque les PJ pénètrent sur le territoire de chasse des rapaces, deux Aigles géants apparaissent à portée Très loin d'un PJ choisi, voyant dans les PJ des proies probables.",
          "questions": "Depuis combien de temps les aigles n'ont-ils pas trouvé de proie ? Ont-ils des œufs dans leur nid, ou des petits sans plumes ?"
        },
        {
          "nom": "Vents glacials",
          "tag": "Réaction",
          "texte": "Compte à rebours (Boucle 4). Lorsque les PJ entrent dans le col, activez le compte à rebours. Lorsqu'il se déclenche, tous les personnages qui traversent le col doivent réussir un jet de réaction de Force, sinon ils marquent un Stress. Un PJ portant des vêtements adaptés au froid extrême a l'avantage à ces jets.",
          "questions": "Quelles parties du corps des PJ s'engourdissent en premier ? Comment essaient-ils de se réchauffer tout en continuant d'avancer ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "rituel-du-culte",
      "nom": "Rituel du culte",
      "palier": 2,
      "type": "Événement",
      "description": "Un culte déchu se rassemble autour d'un sceau des dieux vaincus et d'un bûcher qui brûle d'une lueur verdâtre et maladive.",
      "impulsions": "Profaner la terre, unir le Royaume Mortel aux Cercles d'en inférieur",
      "difficulte": 14,
      "adversaires": "Culte des Déchus (Adepte du culte, Initié du culte, Gardien des secrets)",
      "aptitudes": [
        {
          "nom": "Terre profanée",
          "tag": "Passive",
          "texte": "Les cultistes ont consacré ce lieu aux dieux Déchus, et leur influence impie s'y infiltre. Réduisez le dé d'Espoir des PJ à un d10 tant qu'ils se trouvent dans cet environnement. La profanation peut être levée par un compte à rebours de progression (6).",
          "questions": "Comment les PJ remarquent-ils d'abord que quelque chose cloche ici ? Quelles peurs refont surface tandis que l'espoir est tenu à distance ?"
        },
        {
          "nom": "Puissance blasphématoire",
          "tag": "Action",
          "texte": "Une partie de la puissance du rituel est détournée vers un membre du culte pour repousser les intrus. Choisissez un adversaire pour qu'il soit Imprégné d'une terrible magie jusqu'à la fin de la scène ou jusqu'à sa défaite. Un adversaire Imprégné prend immédiatement le devant de la scène et obtient l'un des avantages suivants, ou les trois si vous dépensez 1 Peur :\n- Il a l'avantage à toutes ses attaques.\n- Il inflige 1d10 dégâts supplémentaires sur une attaque réussie.\n- Il obtient l'aptitude suivante : Implacable (2) - Passive : cet adversaire peut passer sous les projecteurs plusieurs fois par tour du MJ. Dépensez de la Peur comme d'habitude pour lui donner le devant de la scène.",
          "questions": "Comment l'ennemi change-t-il d'apparence ? Quelles peurs ses coups font-ils remonter à la surface ?"
        },
        {
          "nom": "L'invocation",
          "tag": "Réaction",
          "texte": "Compte à rebours (6). Lorsque les PJ entrent dans la scène ou que le culte commence le rituel pour invoquer un démon, activez le compte à rebours. Désignez un adversaire pour mener le rituel. Le compte à rebours diminue chaque fois qu'un PJ obtient un résultat avec Peur. Lorsqu'il se déclenche, invoquez un Démon mineur à portée Très proche du meneur du rituel. Si le meneur est vaincu, le compte à rebours prend fin sans effet, car le rituel échoue.",
          "questions": "Que fera le culte de ce démon tenu en laisse s'il réussit ? Que tentera-t-il d'invoquer ensuite ?"
        },
        {
          "nom": "Achever le rituel",
          "tag": "Réaction",
          "texte": "Si le meneur du rituel est visé par une attaque ou un sort, un allié à portée Très proche de lui peut marquer un Stress pour être visé à sa place par cette attaque ou ce sort.",
          "questions": "Que ressent-on en voyant une telle dévotion tournée vers la quête de la peur et de la domination ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "temple-sacre",
      "nom": "Temple sacré",
      "palier": 2,
      "type": "Social",
      "description": "Un temple animé mais bien entretenu, qui dispense des soins et accueille des offices réguliers, sous la direction d'un prêtre ou d'un séraphin.",
      "impulsions": "Relier le Royaume Mortel aux Sanctuaires d'en Haut, manifester la puissance du divin, apporter aide et réconfort aux fidèles",
      "difficulte": 13,
      "adversaires": "Gardes (Garde archer, Garde à épéiste, Chef de la garde)",
      "aptitudes": [
        {
          "nom": "Un lieu de guérison",
          "tag": "Passive",
          "texte": "Un PJ qui se repose dans le Temple sacré efface automatiquement toutes ses Blessures.",
          "questions": "Quelle odeur a l'encens ? Quels chants les acolytes entonnent-ils ?"
        },
        {
          "nom": "Conseil divin",
          "tag": "Passive",
          "texte": "Un PJ qui prie une divinité dans le Temple sacré peut faire un jet d'Instinct pour recevoir des réponses. Si le dieu qu'il implore n'est pas le bienvenu dans ce temple, ce jet est fait avec désavantage.\n- Succès critique : le PJ obtient une information claire. De plus, il gagne 1d4 Espoir, qui peut être réparti entre les membres du groupe s'ils partagent la vision et les conseils reçus.\n- Succès avec Espoir : le PJ reçoit une information claire.\n- Succès avec Peur : le PJ reçoit de brefs éclairs de perspicacité et une impression émotionnelle qui lui transmet une réponse.\n- Tout échec : le PJ ne reçoit que des éclairs vagues. Il peut marquer un Stress pour recevoir une image claire, sans contexte.",
          "questions": "Que ressentez-vous lorsque cette vision vous touche ? Quel sentiment persiste après que les images se sont dissipées ?"
        },
        {
          "nom": "Espoir Continu",
          "tag": "Réaction",
          "texte": "Une fois par scène, chaque PJ peut marquer un Stress pour transformer un résultat avec Peur en résultat avec Espoir.",
          "questions": "Quelles émotions ou quels souvenirs associez-vous à ces moments où la peur vous étreint ?"
        },
        {
          "nom": "Censure divine",
          "tag": "Réaction",
          "texte": "Lorsque les PJ ont commis une intrusion, un blasphème ou une offense envers le clergé, vous pouvez dépenser 1 Peur pour invoquer un Haut Séraphin et 1d4 Gardes à lame à portée Proche du prêtre principal afin de faire respecter sa volonté.",
          "questions": "Quels symboles ou icônes portent-ils, signalant qu'ils sont les agents consacrés de la divinité ? Qui dirige le groupe, et qu'est-ce qui l'a mené à cette vocation ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "bataille-rangee",
      "nom": "Bataille rangée",
      "palier": 3,
      "type": "Événement",
      "description": "Un combat massif entre deux grands groupes de combattants armés.",
      "impulsions": "S'emparer de gens, de terres et de richesses, verser le sang par cupidité et pour la gloire",
      "difficulte": 17,
      "adversaires": "Mercenaires (Mercenaire, Persécuteur, Lamesort, Maître d'armes), Forces nobles (Escadron d'archers, Conscrit, Soldat d'élite, Chevalier du royaume)",
      "aptitudes": [
        {
          "nom": "Perdu dans une mer d’acier",
          "tag": "Passive",
          "texte": "Traverser un champ de bataille en plein combat est extrêmement dangereux. Un PJ doit réussir un jet d'Agilité pour se déplacer, et ne peut aller que jusqu'à portée Proche en cas de succès. Si un adversaire est à portée de Mêlée, il doit marquer un Stress pour faire un jet d'Agilité afin de se déplacer.",
          "questions": "Les combattants vous prennent-ils pour l'ennemi ou pour des intrus ? Pouvez-vous distinguer l'ami de l'ennemi dans la mêlée ?"
        },
        {
          "nom": "Raser et piller",
          "tag": "Action",
          "texte": "La force assaillante fait monter les enchères en allumant un incendie, en volant un bien précieux, en enlevant une personne importante ou en massacrant la population.",
          "questions": "Qu'y a-t-il de précieux ici ? Qui est le plus vulnérable ?"
        },
        {
          "nom": "Magie de guerre",
          "tag": "Action",
          "texte": "Dépensez 1 Peur : un mage de l'un des camps lance une magie destructrice à grande échelle. Choisissez un point du champ de bataille à portée Très loin du mage. Toutes les cibles à portée Proche de ce point doivent faire un jet de réaction d'Agilité. Celles qui échouent subissent 3d12+8 dégâts magiques et doivent marquer un Stress.",
          "questions": "Quelle forme prend l'attaque : boule de feu, pluie d'acide, tempête de lames ? Quel objectif tactique cette attaque vise-t-elle, et que se passe-t-il ensuite ?"
        },
        {
          "nom": "Des Renforts !",
          "tag": "Action",
          "texte": "Invoquez un Chevalier du royaume, un nombre de Sbires de palier 3 égal au nombre de PJ et deux adversaires de votre choix, à portée Loin d'un PJ choisi, en guise de renforts. Le Chevalier du royaume prend immédiatement le devant de la scène.",
          "questions": "Qui visent-ils en premier ? Quelle formation adoptent-ils ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "coeur-brulant-de-la-foret",
      "nom": "Cœur brûlant de la forêt",
      "palier": 3,
      "type": "Exploration",
      "description": "Une épaisse cendre indigo emplit l'air autour d'un arbre gigantesque couvert de mousse, qui brûle éternellement de flammes d'un bleu maladif.",
      "impulsions": "Battre un rythme étrange que tous suivent, corrompre les bois",
      "difficulte": 16,
      "adversaires": "Bêtes (Ours, Serpent de verre), Élémentaires (Étincelle élémentaire), Défenseurs de la nature (Dryade, Tréant chêne, Chevalier cerf)",
      "aptitudes": [
        {
          "nom": "Foyer de magie du Chaos",
          "tag": "Passive",
          "texte": "Lorsqu'un PJ fait un jet d'incantation, il doit lancer deux dés de Peur et garder le résultat le plus élevé.",
          "questions": "Que ressent-on à pratiquer la magie dans ce lieu touché par le chaos ? Que craignez-vous qu'il arrive si vous perdez le contrôle du sort ?"
        },
        {
          "nom": "La flamme indigo",
          "tag": "Passive",
          "texte": "Les PJ qui s'approchent de l'arbre central peuvent faire un jet de Savoir pour tenter d'identifier la magie qui a consumé cet environnement.\n- Sur un succès : ils apprennent trois des détails ci-dessous. Sur un succès avec Peur, ils en apprennent deux.\n- Sur un échec : ils peuvent marquer un Stress pour en apprendre un et obtenir l'avantage au prochain jet d'action pour enquêter sur cet environnement.\n- Détails : il s'agit du résultat d'une magie Déchue. La corruption se propage par la mousse cendreuse. Elle ne peut être purifiée que par un rituel de magie de la nature accompagné d'un compte à rebours de progression (8).",
          "questions": "Quel culte déchu a corrompu ces bois ? Qu'a-t-il déjà fait du bois et de la sève maudits de cet arbre ?"
        },
        {
          "nom": "Ronces",
          "tag": "Action",
          "texte": "Des lianes vivantes, hérissées d'épines, jaillissent des sous-bois pour piéger les PJ. Une cible doit réussir un jet de réaction d'Agilité, sinon elle devient Entravée et Vulnérable jusqu'à ce qu'elle se libère, ce qui efface les deux états, grâce à un jet de Finesse ou de Force réussi ou en infligeant 10 dégâts aux lianes. Lorsque la cible fait un jet pour s'échapper, elle subit 1d8+4 dégâts physiques et perd 1 Espoir.",
          "questions": "Quels souvenirs douloureux les lianes font-elles remonter en perçant la chair ?"
        },
        {
          "nom": "Manifestations de charbon",
          "tag": "Action",
          "texte": "Des animaux déformés, enveloppés de flammes indigo, déferlent sur un point de votre choix. Toutes les cibles à portée Proche de ce point doivent faire un jet de réaction d'Agilité. Celles qui échouent subissent 3d12+3 dégâts physiques. Celles qui réussissent subissent la moitié des dégâts.",
          "questions": "S'agit-il de vrais animaux consumés par la flamme, ou de simples constructions de la magie corruptrice ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "siege-du-chateau",
      "nom": "Siège du château",
      "palier": 3,
      "type": "Événement",
      "description": "Un siège en cours, où une force assaillante se bat pour pénétrer dans un château fortifié.",
      "impulsions": "Saigner la volonté de se battre, percer les murs, faire monter la tension",
      "difficulte": 17,
      "adversaires": "Mercenaires (Persécuteur, Lamesort, Lamesort, Maître d'armes), Forces nobles (Escadron d'archers, Conscrit, Soldat d'élite, Chevalier du royaume)",
      "aptitudes": [
        {
          "nom": "Entrée secrète",
          "tag": "Passive",
          "texte": "Un PJ peut trouver ou se rappeler un passage secret menant au château en réussissant un jet d'Instinct ou de Savoir.",
          "questions": "Comment entrent-ils sans révéler le passage aux assaillants ? Des défenseurs surveillent-ils ce passage ?"
        },
        {
          "nom": "Machines de siège (changement d'environnement)",
          "tag": "Action",
          "texte": "Compte à rebours de conséquence (5). La force assaillante déploie des machines de siège pour tenter de raser les fortifications des défenseurs. Activez le compte à rebours au début du siège (pour un siège prolongé, faites-en plutôt un compte à rebours à long terme). Lorsqu'il se déclenche, les fortifications des défenseurs sont percées et les assaillants s'engouffrent. Vous gagnez 2 Peur, puis passez à l'environnement Bataille rangée et lui donnez le devant de la scène.",
          "questions": "Quelles machines de siège sont déployées ? Sont-elles magiques, ordinaires ou un mélange des deux ? Quelles défenses les personnages doivent-ils surmonter pour prendre le château d'assaut ?"
        },
        {
          "nom": "Des Renforts !",
          "tag": "Action",
          "texte": "Invoquez un Chevalier du royaume, un nombre de Sbires de palier 3 égal au nombre de PJ et deux adversaires de votre choix, à portée Loin d'un PJ choisi, en guise de renforts. Le Chevalier du royaume prend immédiatement le devant de la scène.",
          "questions": "Qui visent-ils en premier ? Quelle formation adoptent-ils ?"
        },
        {
          "nom": "Dégâts collatéraux",
          "tag": "Réaction",
          "texte": "Lorsqu'un adversaire est vaincu, vous pouvez dépenser 1 Peur pour qu'un tir perdu d'une machine de siège frappe un point du champ de bataille. Toutes les cibles à portée Très proche de ce point doivent faire un jet de réaction d'Agilité.\n- Les cibles qui échouent subissent 3d8+3 dégâts physiques ou magiques et doivent marquer un Stress.\n- Les cibles qui réussissent doivent marquer un Stress.",
          "questions": "Quels débris l'attaque disperse-t-elle ? Qu'est-ce que le coup a brisé qui ne pourra pas être facilement réparé ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "cour-imperiale",
      "nom": "Cour impériale",
      "palier": 4,
      "type": "Social",
      "description": "Le somptueux manoir d'un puissant empire, luxueusement décoré de trésors volés.",
      "impulsions": "Justifier et perpétuer la domination impériale, séduire les rivaux par des promesses de pouvoir et de confort",
      "difficulte": 20,
      "adversaires": "Garde à épéiste, Courtisane, Chevalier du royaume, Monarque, Espion",
      "aptitudes": [
        {
          "nom": "Tous les chemins mènent ici",
          "tag": "Passive",
          "texte": "Dans la Cour impériale, un PJ a le désavantage aux jets de Présence faits pour accomplir des actions qui ne cadrent pas avec le mode de vie impérial ou qui ne soutiennent pas la domination de l'empire.",
          "questions": "Comment l'usage de la langue rend-il difficile ne serait-ce que d'évoquer d'autres façons de vivre ? Quels avantages évidents liés à la loyauté créent une friction quand vous tentez de parler d'alternatives ?"
        },
        {
          "nom": "Vassaux rivaux",
          "tag": "Passive",
          "texte": "Les PJ peuvent trouver à la cour des sujets, des vassaux et des solliciteurs de l'empire, chacun rivalisant pour obtenir des faveurs, cherchant à se rapprocher du pouvoir, échangeant des services contre de la loyauté et s'élevant au-dessus des autres. Certains peuvent être désespérés de saper leurs rivaux, tandis que d'autres peuvent même être ouverts à des discussions frôlant la sédition.",
          "questions": "Que leur rapporte la vassalité, et que leur a-t-elle coûté ? Quelle exploitation les pousse à envisager de s'opposer à l'imparable ?"
        },
        {
          "nom": "La gravité de l'empire",
          "tag": "Action",
          "texte": "Dépensez 1 Peur pour offrir à un PJ une occasion en or ou une proposition qui satisferait un objectif majeur, en échange de son obéissance ou de son soutien à l'empire. La cible doit faire un jet de réaction de Présence. Sur un échec, elle doit marquer tout son Stress ou accepter l'offre. Si elle a déjà marqué tout son Stress, elle doit réduire sa jauge de Stress de 1d4. Sur un succès, elle doit marquer 1d4 Stress, éprouvée par la tentation.",
          "questions": "Que veulent si désespérément les PJ qu'ils pourraient envisager de se rallier à ce pouvoir impitoyable ? Comment les agents impériaux ont-ils appris les plus grands désirs du PJ ?"
        },
        {
          "nom": "Décret impérial",
          "tag": "Action",
          "texte": "Dépensez 1 Peur pour faire diminuer de 1d4 un compte à rebours à long terme lié au programme de l'empire. Si cela le déclenche, une proclamation liée à ce programme est annoncée à la cour tandis que le plan est exécuté.",
          "questions": "Quelle démonstration de puissance ou quel transfert de richesses a été nécessaire pour accélérer ce plan ? Quelles vies ont été bouleversées pour que cela se produise ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "ossuaire-du-necromancien",
      "nom": "Ossuaire du nécromancien",
      "palier": 4,
      "type": "Exploration",
      "description": "Une crypte poussiéreuse avec une bibliothèque, des couloirs tortueux et d'abondants sarcophages, éclaboussée du sang d'envahisseurs malchanceux.",
      "impulsions": "Déconcerter les intrus, s'enfoncer dans des secrets qu'il vaudrait mieux laisser enfouis, manifester la non-vie, déchaîner un raz-de-marée de morts-vivants",
      "difficulte": 19,
      "adversaires": "Cortège de l'archinécromancien (Zombie perfectionné, Légion de zombies)",
      "aptitudes": [
        {
          "nom": "Pas de place pour les vivants",
          "tag": "Passive",
          "texte": "Une aptitude ou une action qui efface des Blessures exige de dépenser 1 Espoir. Si elle coûte déjà de l'Espoir, un PJ doit dépenser 1 Espoir supplémentaire.",
          "questions": "Que ressent-on à essayer de guérir dans un lieu aussi opposé à la vie ?"
        },
        {
          "nom": "Des siècles de connaissance",
          "tag": "Passive",
          "texte": "Un PJ peut fouiller la bibliothèque et le laboratoire et faire un jet de Savoir pour apprendre des informations sur les arcanes, l'histoire locale et les plans du Nécromancien.",
          "questions": "Quels sont les titres des tomes ? Sur quel projet le nécromancien travaille-t-il, et que révèle-t-il de ses plans ?"
        },
        {
          "nom": "Explosion squelettique",
          "tag": "Action",
          "texte": "Toutes les cibles à portée Proche d'un point de votre choix dans cet environnement doivent réussir un jet de réaction d'Agilité, sinon elles subissent 4d8+8 dégâts physiques causés par des éclats d'os, tandis qu'une partie de l'ossuaire explose autour d'elles.",
          "questions": "Quelle ancienne architecture squelettique est détruite ? Quels os se logent dans votre armure ?"
        },
        {
          "nom": "Aura de mort",
          "tag": "Action",
          "texte": "Une fois par scène, lancez un d4. Chaque mort-vivant à portée Loin du Nécromancien peut effacer un nombre de Blessures et de Stress égal au résultat. Le mort-vivant choisit comment répartir ce total entre Blessures et Stress.",
          "questions": "Comment ce pouvoir se manifeste-t-il ? Les morts-vivants paraissent-ils plus vivants ou, paradoxalement, plus décomposés mais plus vigoureux ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "royaume-du-chaotique",
      "nom": "Royaume du Chaotique",
      "palier": 4,
      "type": "Traversée",
      "description": "Un espace d'un autre monde où les lois de la réalité sont instables et dangereuses.",
      "impulsions": "Anéantir la certitude, consumer la puissance, défier la logique",
      "difficulte": 20,
      "adversaires": "Monstruosités des Royaumes extérieurs (Abomination, Corrupteur, Serviteur)",
      "aptitudes": [
        {
          "nom": "Architecture impossible",
          "tag": "Passive",
          "texte": "Le haut est le bas, le bas est la droite, la droite est un escalier. La gravité et l'orientation elles-mêmes sont en flux, et toute tentative de se déplacer dans ce royaume est une odyssée en soi, qui exige un compte à rebours de progression (8). Sur un échec, un PJ doit marquer un Stress en plus des autres conséquences du jet.",
          "questions": "Que ressent-on à se déplacer dans un espace aussi étranger au Royaume Mortel ? Sur quel repère ou quel point vous fixez-vous pour garder l'équilibre ? Quels étranges repères traversez-vous au fil de votre voyage ?"
        },
        {
          "nom": "Cet endroit vous privera de tout ce que vous êtes",
          "tag": "Action",
          "texte": "Compte à rebours (Boucle 14). Activez le compte à rebours. Lorsqu'il se déclenche, tous les PJ doivent réussir un jet de réaction de Présence, sinon leur trait le plus élevé est temporairement réduit de 1d4, à moins qu'ils ne marquent un nombre de Stress égal à sa valeur. Les points de trait perdus sont regagnés si le PJ obtient un succès critique ou s'échappe du Royaume du Chaos.",
          "questions": "Comment cet endroit tente-t-il de vous voler ce qui fait de vous une légende ? Que ressent-on lorsque ce pouvoir vous est arraché ?"
        },
        {
          "nom": "Défaire",
          "tag": "Action",
          "texte": "Sur un échec, ils subissent 4d10 dégâts magiques directs. Sur un succès, ils doivent marquer un Stress.",
          "questions": "Quel aperçu d'autres mondes entrevoyez-vous pendant que cet endroit tente de vous défaire ? Quelle facette essentielle de votre personnalité cet anéantissement tente-t-il d'effacer ?"
        },
        {
          "nom": "Prédateurs des Royaumes extérieurs",
          "tag": "Action",
          "texte": "Dépensez 1 Peur pour invoquer une Abomination des Royaumes extérieurs, un Corrupteur des Royaumes extérieurs et 2d6 Asservis des Royaumes extérieurs, qui apparaissent à portée Proche d'un PJ choisi, défiant la logique et la causalité. Donnez immédiatement le devant de la scène à l'un de ces adversaires ; vous pouvez dépenser 1 Peur supplémentaire pour réussir automatiquement l'attaque standard de cet adversaire.",
          "questions": "Quels vestiges à demi dévorés de l'âme brisée ces monstruosités rejettent-elles en poursuivant la chair vivante ? Quels reflets déchiquetés de leur ancienne humanité entrevoyez-vous entre deux instants d'une malveillance inextinguible ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "usurpation-divine",
      "nom": "Usurpation divine",
      "palier": 4,
      "type": "Événement",
      "description": "Un rituel colossal conçu pour forcer les portes des Sanctuaires d'en Haut et détrôner les Nouveaux Dieux eux-mêmes.",
      "impulsions": "Accumuler la puissance, inspirer une crainte écrasante, faire taire toute contestation",
      "difficulte": 20,
      "adversaires": "Archinécromancien, Soldat choc déchues, Chasseur redoutable, Oracle funeste, Zombie perfectionné",
      "aptitudes": [
        {
          "nom": "Derniers préparatifs",
          "tag": "Passive",
          "texte": "Lorsque l'environnement prend le devant de la scène pour la première fois, désignez un adversaire comme l'Usurpateur cherchant à renverser les dieux. Activez un compte à rebours à long terme (8) tandis que l'Usurpateur rassemble ce dont il a besoin pour mener le rituel. Lorsqu'il se déclenche, donnez le devant de la scène à cet environnement pour utiliser l'aptitude « Début de la fin ». Tant que cet environnement reste en jeu, vous pouvez détenir jusqu'à 15 Peur.",
          "questions": "Que manque-t-il encore à l'Usurpateur : le cœur d'un Haut Séraphin ? Les dernières notes d'une ancienne vignette ? La loyauté de deux ennemis jurés ? Les larmes de chagrin d'une âme pure ?"
        },
        {
          "nom": "Bénédiction divine",
          "tag": "Passive",
          "texte": "Lorsqu'un PJ obtient un succès critique, il peut dépenser 2 Espoir pour recharger une capacité normalement limitée en utilisations (comme une fois par repos ou une fois par session).",
          "questions": "Quel dieu vous favorise alors que vous luttez contre cette usurpation ? Comment votre puissance renouvelée reflète-t-elle son influence ?"
        },
        {
          "nom": "Abondance de profanaeurs",
          "tag": "Action",
          "texte": "Dépensez 2 Peur pour invoquer 1d4+2 Troupes de choc déchues, qui apparaissent à portée Proche de l'Usurpateur pour l'assister dans son siège divin. Donnez immédiatement le devant de la scène aux Troupes de choc pour utiliser une action « Attaque de groupe ».",
          "questions": "Quel Haut Déchu ces troupes servent-elles ? De la chair de quel dieu veulent-elles se repaître ?"
        },
        {
          "nom": "Tueur de dieux",
          "tag": "Action",
          "texte": "Si le compte à rebours du Siège divin (voir « Début de la fin ») s'est déclenché, vous pouvez dépenser 3 Peur pour décrire l'Usurpateur tuant l'un des dieux des Sanctuaires d'en Haut, se repaissant de sa puissance et gagnant en force. L'Usurpateur efface 2 Blessures. Augmentez sa Difficulté, ses dégâts ou son modificateur d'attaque, ou donnez-lui une nouvelle aptitude issue du dieu abattu.",
          "questions": "Quel dieu trouve sa fin ? Quelles sont ses dernières paroles ? Comment le nouveau pouvoir volé de l'Usurpateur se manifeste-t-il ?"
        }
      ],
      "source": "Livre de règle (2026)"
    },
    {
      "id": "atelier-abandonne-de-l-alchimiste",
      "nom": "Atelier abandonné de l'alchimiste",
      "palier": 1,
      "type": "Exploration",
      "description": "Un laboratoire alimenté par la foudre, construit par un scientifique en quête du secret de l'immortalité.",
      "impulsions": "Abattre la barrière entre la vie et la mort, attirer la foudre du ciel, pousser les machines au-delà de leurs limites",
      "difficulte": 11,
      "adversaires": "Restes de laboratoire (Créature artificielle, Élémentaire de feu mineur, Colosse zombie rapiécé, Nuée de rats)",
      "aptitudes": [
        {
          "nom": "Cabinet de curiosités",
          "tag": "Passive",
          "texte": "Les étagères, placards et tables de l'atelier sont encombrés de bibelots macabres, dont des parties de corps dans des bocaux de formol et des instruments chirurgicaux ensanglantés. Une fois par scène, un PJ peut faire un jet d'Instinct pour chercher quelque chose d'utile dans le chaos.",
          "questions": "Qu'étudiait l'alchimiste ? Quelle odeur vous submerge tandis que vous fouillez dans ses affaires ?"
        },
        {
          "nom": "Machinerie étrange",
          "tag": "Passive",
          "texte": "L'atelier renferme de nombreux appareils technologiques bizarres et instruments scientifiques. Un PJ peut faire un jet de Savoir pour tenter de comprendre leur fonctionnement. En cas de succès, il peut le faire marcher. En cas d'échec, il casse quelque chose et subit 1d8+4 dégâts magiques directs, électrocuté et aspergé de produits chimiques corrosifs.",
          "questions": "À quoi servent ces machines ? Que mesurent ces instruments ?"
        },
        {
          "nom": "Il est vivant !",
          "tag": "Action",
          "texte": "Compte à rebours de conséquence (6).\nUn orage s'amasse au-dessus, menaçant de frapper l'assemblage de paratonnerres installé au sommet de l'atelier. Activez le compte à rebours et décrivez comment la puissance de l'orage augmente chaque fois qu'il diminue quand un PJ fait un jet d'action. Quand il se déclenche, la foudre frappe l'assemblage et surcharge les machines de l'atelier, qui explosent après avoir ressuscité l'un des projets abandonnés de l'alchimiste. Chaque cible à portée Proche de la machinerie doit réussir un jet de réaction d'Agilité ou subir 1d10 dégâts magiques. Invoquez une Expérience ratée à un endroit de l'atelier et gagnez une Peur pour chaque PJ à portée Très proche d'elle.",
          "questions": "Qu'est-ce que l'alchimiste cherchait à accomplir avec cette expérience ? Où s'est-il procuré les matériaux ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "cimetiere-maudit",
      "nom": "Cimetière maudit",
      "palier": 1,
      "type": "Exploration",
      "description": "Un vaste cimetière rempli de pierres tombales en ruine, d'arbres tordus possédés par les morts et de cryptes envahies de mousse et de lierre.",
      "impulsions": "L'enterrer six pieds sous terre, l'étouffer de brouillard, l'attirer avec des promesses de trésors ensevelis, déchaîner les morts agités",
      "difficulte": 11,
      "adversaires": "Esprits corrompus (Défenseur racine-profonde, Fantôme), Morts-vivants (Guerrier squelette, Meute de zombies, Colosse zombie rapiécé)",
      "aptitudes": [
        {
          "nom": "Une place de plus",
          "tag": "Passive",
          "texte": "Si un PJ marque son dernier PB dans le cimetière, il devient un Spectre au lieu d'effectuer un mouvement de mort. Tant qu'il est un Spectre, un PJ peut communiquer avec les vivants mais ne peut pas interagir avec le monde physique, et il doit rester à portée Proche de son cadavre ou traverser le voile de la mort. Cette condition est effacée quand le PJ efface un PB.",
          "questions": "Quelles nouvelles informations ou expériences un PJ gagne-t-il en devenant un spectre ? Comment le groupe peut-il réunir l'esprit du PJ avec sa chair ? Que se passe-t-il si leur rituel tourne mal ?"
        },
        {
          "nom": "Terre consacrée",
          "tag": "Passive",
          "texte": "Au centre du cimetière se trouve une chapelle apparemment intacte. Sur un jet d'Instinct réussi, un PJ peut découvrir que ce bâtiment est sanctifié contre les habitants du cimetière. À l'intérieur de la chapelle, les PJ ont l'avantage aux jets d'action pour combattre ou chasser les esprits et les morts-vivants.",
          "questions": "Qui a sanctifié ce lieu, et que lui est-il arrivé ? Quelles reliques saintes peut-on trouver ici ?"
        },
        {
          "nom": "Miasme brumeux",
          "tag": "Action",
          "texte": "Dépensez une Peur pour remplir une zone à portée Loin d'un brouillard ectoplasmique rampant qui suinte à travers la terre détrempée. Quand un PJ fait un jet avec Peur dans le miasme, il doit marquer un Stress.",
          "questions": "Quelles horreurs les PJ voient-ils dans le brouillard ? Quelle odeur désorientante le miasme dégage-t-il ?"
        },
        {
          "nom": "Les morts se lèvent",
          "tag": "Action",
          "texte": "Dépensez une Peur pour faire jaillir des mains de morts-vivants du sol sous un PJ. La cible doit réussir un jet de réaction d'Agilité ou de Présence ou marquer un Stress et devenir temporairement Entravée, les mains l'agrippant.",
          "questions": "Qui étaient ces gens de leur vivant ? Pourquoi ont-ils été enterrés ici ? Pourquoi ne restent-ils pas morts ?"
        },
        {
          "nom": "Les morts ne meurent pas facilement",
          "tag": "Réaction",
          "texte": "Quand un adversaire devrait marquer son dernier PB, lancez un d6. Sur un résultat de 5 ou 6, l'adversaire ne le marque pas.",
          "questions": "Qui a ordonné à cette terre de rejeter la mort ? En quoi les morts reviennent-ils différents ici ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "fete-locale",
      "nom": "Fête locale",
      "palier": 1,
      "type": "Social",
      "description": "Roturiers et nobles se rassemblent des environs pour une célébration d'une semaine.",
      "impulsions": "Exprimer la culture et l'histoire locales, nouer de nouvelles relations, renforcer la communauté",
      "difficulte": 11,
      "adversaires": "Sécurité du festival (Garde à lame, Chef de la garde), Notables locaux (Roturier, Marchand, Petit noble), Vauriens divers (Bandit Couteau dentelé, Laquais)",
      "aptitudes": [
        {
          "nom": "Souvenez-vous, souvenez-vous",
          "tag": "Passive",
          "texte": "Cette période de l'année marque un anniversaire important ou un événement astronomique, comme la fondation de la ville ou le solstice d'été. Sur un jet de Savoir réussi, un PJ peut répondre à l'une des questions ci-dessous (ou à deux, s'il réussit de façon critique). En cas d'échec, il répond à une question, mais vous décidez quelle partie de sa réponse est inexacte et vous gagnez une Peur.- Le festival célèbre une culture ou une exportation essentielle à l'économie d'ici. De quoi s'agit-il ?- Pourquoi le festival n'a-t-il pas eu lieu l'an dernier ?- Ce festival ressemble à un autre organisé dans une région voisine.",
          "questions": "Qu'est-ce qui les rend différents ?Que célèbrent les habitants ? Pour quoi le festival est-il réputé ? Comment les PJ en ont-ils entendu parler pour la première fois ?"
        },
        {
          "nom": "Machinations politiques",
          "tag": "Passive",
          "texte": "Tant que tout le monde est rassemblé au même endroit, les habitants en profitent pour étouffer des querelles, attirer de nouvelles affaires et naviguer dans la politique locale. Un PJ peut fourrer son nez dans ces tractations en faisant un jet de Présence. En cas de succès, il établit un contact avec une personnalité locale qui peut lui donner un travail, partager des informations importantes ou faire des présentations utiles. En cas d'échec, il doit marquer un Stress.",
          "questions": "Quelle nouvelle crise est sur toutes les lèvres ? Pourquoi cette communauté ne peut-elle pas résoudre le problème seule ? Quelle récompense peut-elle offrir aux PJ en échange de leur aide ?"
        },
        {
          "nom": "Que les jeux commencent !",
          "tag": "Action",
          "texte": "L'un des événements phares du festival est une compétition sportive ou une série de jeux. Si un ou plusieurs PJ se lancent dans la compétition, présentez des rivaux à affronter. Pour l'emporter, les PJ doivent accomplir un compte à rebours de progression (5) pour gagner des épreuves ou marquer des points avant que leurs rivaux n'accomplissent un compte à rebours de conséquence (5).",
          "questions": "Quelles compétences ou capacités cette compétition met-elle à l'épreuve ? Que gagne le vainqueur ? Pourquoi l'échec n'est-il pas envisageable pour les PJ ou leurs rivaux ?"
        },
        {
          "nom": "Figure locale légendaire",
          "tag": "Action",
          "texte": "Le festival culmine avec l'arrivée d'une figure du folklore local qui remplit des fonctions particulières pour la communauté, comme distribuer des friandises aux enfants, chahuter la noblesse ou bénir les récoltes de l'année suivante. Si les PJ témoignent à cette figure la déférence et le respect appropriés, ils obtiennent une bénédiction adaptée, comme une prophétie énigmatique ou une babiole magique, et gagnent 1d4 Espoir à répartir entre les membres du groupe. S'ils insultent la figure, ils subissent 1d6+2 dégâts magiques sous sa malédiction, et vous gagnez une Peur.",
          "questions": "S'agit-il d'une entité unique ou d'un rôle transmis de personne en personne ? Quelle forme distinctive possède-t-elle ? Quelle est la source de son pouvoir d'accorder bienfaits et fléaux ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "grand-festin",
      "nom": "Grand festin",
      "palier": 1,
      "type": "Social",
      "description": "Une célébration à l'échelle de toute la communauté, avec beaucoup trop de boisson, de nourriture et de plaisir.",
      "impulsions": "Rassembler tout le monde, célébrer une occasion mémorable, encourager l'abandon festif",
      "difficulte": 11,
      "adversaires": "Apprenti assassin, Garde, Marchand, Petit noble, Mercenaire, Espion",
      "aptitudes": [
        {
          "nom": "Langues déliées et amitiés rapides",
          "tag": "Passive",
          "texte": "Tout le monde est ici pour passer un bon moment. Les PJ ont l'avantage aux jets de Présence pour socialiser avec les autres fêtards.",
          "questions": "Que célèbre-t-on ? Où est la fête ? Qui paie la note ?"
        },
        {
          "nom": "Le divertissement de la soirée",
          "tag": "Action",
          "texte": "L'hôte du festin lance la partie divertissement de la soirée. Chaque PJ peut faire un jet d'action pour initier une prestation, une compétition ou un autre divertissement léger. Un PJ qui réussit devient un Invité d'honneur. Jusqu'à la fin du festin, un Invité d'honneur peut réclamer un cadeau à l'hôte, puis effacer la condition.",
          "questions": "Que veut voir ou entendre l'hôte plus que tout ? Que peut-il offrir aux PJ en retour ?"
        },
        {
          "nom": "Il y en a toujours un...",
          "tag": "Action",
          "texte": "Dépensez une Peur pour Piéger un PJ dans une conversation avec la personne la plus désagréable de la fête jusqu'à ce que le PJ réussisse un jet d'action pour s'extirper de ce trou noir social. Tant qu'il est Piégé, un PJ ne peut pas faire de jets d'action sauf pour tenter d'effacer cette condition. Quand un PJ Piégé rate un jet d'action, il doit marquer un Stress.",
          "questions": "Qu'est-ce qui rend ce raseur si désagréable ? Qu'est-ce qui tient à coeur au PJ et que le raseur rabaisse ou méprise sans cesse ? De quoi ennuyeux ou affreux le raseur ne peut-il s'empêcher de parler ?"
        },
        {
          "nom": "Dernier verre",
          "tag": "Réaction",
          "texte": "Après une longue nuit, les fêtards commencent à partir. Quand le festin se termine, tous les PJ ayant participé aux festivités effacent tout leur Stress et gagnent un Espoir. De plus, chaque Invité d'honneur efface tous ses PB et gagne un Espoir supplémentaire, puis efface la condition. Chaque PJ qui a abusé doit réussir un jet de réaction de Force ou avoir la Gueule de bois jusqu'à son prochain repos. Tant qu'il a la Gueule de bois, un PJ subit un malus de -1 aux jets d'action.",
          "questions": "Quelles histoires folles les PJ se racontent-ils en quittant la fête ? Qui les PJ voient-ils s'enlacer de façon inattendue ensuite ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "marais-corrompu",
      "nom": "Marais corrompu",
      "palier": 1,
      "type": "Traversée",
      "description": "Une étendue misérable d'eau visqueuse, de créatures toxiques et de pourriture.",
      "impulsions": "Corrompre, mettre l'accent sur la putréfaction, révéler le tordu et l'anormal, rendre malade",
      "difficulte": 11,
      "adversaires": "N'importe quel mort-vivant (Squelette, Zombie, Gardien spectral), Rat géant, Vase verte, Ronce enchevêtrée",
      "aptitudes": [
        {
          "nom": "Maladie du marais",
          "tag": "Passive",
          "texte": "À la fin d'un repos long, chaque PJ doit réussir un jet de réaction de Force ou gagner un dé de Maladie d4, en commençant avec la valeur 1 face visible. Si un PJ rate ce jet et a déjà un dé de Maladie, il augmente la valeur de 1, jusqu'à un maximum de 4. Un PJ ayant un dé de Maladie subit un malus à ses jets d'action égal à sa valeur. Quand un PJ ayant un dé de Maladie devrait effacer un PB, il peut à la place diminuer la valeur de son dé de Maladie de 1. Quand la valeur du dé tomberait à 0, retirez-le.",
          "questions": "Le marais grouille-t-il de vie, est-il rempli de décomposition, ou les deux ? Quelle force a flétri ce marais, et quels signes de ses origines subsistent ?"
        },
        {
          "nom": "Pataugeant dans la boue",
          "tag": "Passive",
          "texte": "Quand un PJ se déplace dans le cadre d'une action, il ne peut se déplacer que jusqu'à portée Très proche. Les jets d'action pour se déplacer plus loin que la portée Très proche ont le désavantage. Avant de lancer, un PJ peut marquer un Stress pour supprimer ce désavantage.",
          "questions": "Quelles créatures, vivantes ou non, rôdent sous la surface trouble de l'eau ? Où ou comment les PJ trouvent-ils un répit loin de l'eau nauséabonde ?"
        },
        {
          "nom": "Fleur-pourriture",
          "tag": "Action",
          "texte": "Dépensez une Peur pour saupoudrer de pollen nocif une zone à portée Loin. Chaque cible dans cette zone doit réussir un jet de réaction de Force ou d'Instinct ou subir 1d6+3 dégâts magiques et devenir Vulnérable jusqu'à la fin de la scène.",
          "questions": "Comment pouvez-vous deviner que les plantes qui émettent ce pollen sont carnivores ? Quels cauchemars ou paysages oniriques l'odeur du pollen évoque-t-elle ?"
        },
        {
          "nom": "Lumières dansantes",
          "tag": "Action",
          "texte": "Au début d'un repos, vous pouvez dépenser une Peur pour que des orbes flottants fascinent les personnes épuisées et attirent un PJ plus profondément dans le marais. Un autre PJ peut utiliser un mouvement de temps mort pour faire un jet d'action afin de partir à sa recherche. En cas de succès, les deux PJ retournent au camp et peuvent choisir leurs mouvements de temps mort normalement. En cas d'échec, ou si personne ne part à sa recherche, le PJ perdu revient des heures plus tard, couvert de boue et pire, et ne peut pas choisir de mouvements de temps mort avant son prochain repos.",
          "questions": "Que voit le PJ perdu dans les lumières qui l'attire dans les ténèbres ? Quels autres aperçus de beauté surprenante les PJ rencontrent-ils ici ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "mine-abandonnee",
      "nom": "Mine abandonnée",
      "palier": 1,
      "type": "Traversée",
      "description": "Un dédale tortueux de tunnels désaffectés creusés dans la roche par une exploitation minière vouée à l'échec.",
      "impulsions": "Empoisonner le groupe avec des gaz mortels, gronder et s'effondrer, séparer le groupe, le faire rebrousser chemin",
      "difficulte": 11,
      "adversaires": "Araignées Sombretoile (Tisseuse de Sombretoile, Nuée de Sombretoile (8/PB), Chasseuse Sombretoile, Reine Sombretoile), Fantômes de mineurs (Poltergeist, Feux follets)",
      "aptitudes": [
        {
          "nom": "Noir complet",
          "tag": "Passive",
          "texte": "Il n'y a aucune lumière, naturelle ou autre, dans ces tunnels miniers souterrains. Demandez aux PJ ce qu'ils utilisent pour s'éclairer ou comment ils trouvent autrement leur chemin dans le noir. Les PJ sans source de lumière fiable font leurs jets d'action et de réaction avec désavantage.",
          "questions": "Quel combustible alimente la source de lumière du groupe, et combien de temps tiendra-t-elle ? Quelle attention indésirable la lumière attire-t-elle ?"
        },
        {
          "nom": "Labyrinthe",
          "tag": "Passive",
          "texte": "Le groupe doit accomplir un compte à rebours de progression (4) pour trouver son chemin à travers les mines. Chaque fois qu'un PJ fait un jet avec Espoir en cherchant son chemin, il découvre l'une des curiosités ci-dessous.\n- Une veine inexploitée de métaux précieux ou de pierres précieuses\n- Divers outils de mineur, dont un wagonnet de mine cassé (mais réparable) en adamantine\n- Des échos psychiques de la fin tragique des mineurs\n- Les cadavres desséchés de mineurs qui se sont perdus dans les tunnels\n- Des lambeaux de soie d'araignée tisse-ténèbres",
          "questions": "Qu'extrayaient autrefois les mineurs ici ? Qui, dans le groupe, sait s'orienter sous terre ? Qu'est-ce que les PJ craignent le plus qu'il leur arrive ici ?"
        },
        {
          "nom": "Dans la toile de l'araignée",
          "tag": "Action",
          "texte": "Dépensez une Peur pour invoquer une Reine tisse-ténèbres dans son antre tapissé de fils de soie. Elle tombe du plafond à portée Proche d'un PJ et prend immédiatement le devant de la scène.",
          "questions": "Comment la Reine tisse-ténèbres utilise-t-elle son antre à son avantage ? Quels restes de ses repas passés le groupe peut-il trouver ici ?"
        },
        {
          "nom": "Effondrement imminent",
          "tag": "Réaction",
          "texte": "Compte à rebours (2).\nLa première fois que les PJ font un jet avec Peur, décrivez comment le sol vibre subtilement tandis que des rochers bougent au-dessus d'eux, et activez le compte à rebours. Il diminue quand un PJ fait un jet avec Peur. Quand il se déclenche, chaque PJ doit réussir un jet de réaction d'Agilité ou subir 1d8+3 dégâts physiques et être temporairement Entravé par les gravats.",
          "questions": "Quels autres signes d'instabilité la mine offre-t-elle au groupe ? À quels nouveaux dangers la nouvelle configuration du réseau de tunnels expose-t-elle le groupe ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "raid-pirate",
      "nom": "Raid pirate",
      "palier": 1,
      "type": "Événement",
      "description": "Un navire pirate déverse son équipage dans une ville portuaire ou un village côtier pour piller et saccager.",
      "impulsions": "Y mettre le feu, submerger par la vitesse et le nombre, prendre tout ce qui n'est pas cloué",
      "difficulte": 11,
      "adversaires": "Équipage du navire (Capitaine pirate, Pillards pirates, Brute pirate)",
      "aptitudes": [
        {
          "nom": "Rallier les habitants",
          "tag": "Passive",
          "texte": "Compte à rebours de progression (5).\nQuand les pirates apparaissent pour la première fois, activez le compte à rebours. Il diminue quand un PJ réussit un jet d'action pour endiguer le chaos et la destruction du raid pirate. Quand il se déclenche, les habitants, inspirés par les actions du groupe, se joignent au combat contre les pirates. Chaque PJ gagne un dé de Moral d6, qu'il peut dépenser pour l'ajouter à un jet d'action, de réaction ou de dégâts.",
          "questions": "Comment les pirates menacent-ils ou mettent-ils en danger la ville, au-delà d'attaquer ses habitants ? De quelles défenses les PJ peuvent-ils tirer parti ?"
        },
        {
          "nom": "Pourparlers",
          "tag": "Passive",
          "texte": "Sur un jet de Savoir réussi, un PJ connaît assez bien la loi des pirates pour exiger un pourparler avec le Capitaine pirate. Une fois le pourparler exigé, le capitaine suspend le combat pour permettre à un PJ de demander la paix ou de négocier les conditions de reddition avec un jet de Présence.",
          "questions": "Pourquoi ces pirates respectent-ils assez ce capitaine pour le suivre ? Qu'est-ce qui leur importe plus que le butin mal acquis ?"
        },
        {
          "nom": "Feu les canons !",
          "tag": "Action",
          "texte": "Dépensez jusqu'à 3 Peur pour que le navire pirate tire ses canons sur le combat. Pour chaque Peur dépensée, choisissez un point n'importe où sur le champ de bataille. Chaque PJ à portée Proche d'un ou plusieurs de ces points doit faire un jet de réaction d'Agilité. Les cibles qui échouent subissent 1d8+3 dégâts physiques. Les cibles qui réussissent doivent marquer un Stress ou subir la moitié des dégâts.",
          "questions": "Quels dégâts collatéraux ces boulets de canon causent-ils ? Quelles vies mettent-ils en danger sans scrupule ?"
        },
        {
          "nom": "Prendre des otages",
          "tag": "Réaction",
          "texte": "Quand un nombre de pirates égal au nombre de PJ dans la scène sont vaincus, lancez un d6. Sur un résultat de 5 ou 6, les pirates changent de tactique, capturant des habitants et se repliant vers le navire pour les rançonner plus tard. Activez un compte à rebours de conséquence (4). Il diminue quand un PJ fait un jet d'action. Quand il se déclenche, les pirates prennent la mer avec leurs victimes.",
          "questions": "Qui les pirates jugent-ils être les meilleurs otages, et pourquoi ? Que veulent-ils en échange du retour des otages ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "tenir-le-front",
      "nom": "Tenir le front",
      "palier": 1,
      "type": "Événement",
      "description": "Le groupe doit repousser plusieurs vagues d'ennemis assez longtemps pour qu'un allié accomplisse un objectif important.",
      "impulsions": "Faire déferler des vagues d'ennemis sur les rivages du groupe, ne jamais les laisser respirer, viser leur protégé",
      "difficulte": 11,
      "adversaires": "Gardes, Couteaux dentelés, Pirates, Squelettes, Zombies",
      "aptitudes": [
        {
          "nom": "Gardes du corps",
          "tag": "Passive",
          "texte": "Les PJ doivent protéger un PNJ (leur « Protégé ») assez longtemps pour que le Protégé accomplisse une tâche, comme terminer un rituel magique ou réparer un dispositif mécanique. Au début de la scène, activez un compte à rebours de tâche d'une valeur égale au nombre de PJ dans la scène. Il diminue quand les PJ vainquent une vague d'adversaires. Quand il se déclenche, le Protégé accomplit sa tâche.",
          "questions": "Qui les PJ protègent-ils, et que cherche à faire le Protégé ? Qui veut les arrêter ? Que se passera-t-il si le Protégé ne parvient pas à accomplir sa tâche ?"
        },
        {
          "nom": "« Je ne dois pas échouer ! »",
          "tag": "Passive",
          "texte": "Quand la première vague d'adversaires apparaît, placez un compte à rebours de détermination à côté du Protégé, d'une valeur égale au nombre de PJ dans la scène. Quand un adversaire fait une attaque contre le Protégé, l'attaque réussit automatiquement et fait diminuer le compte à rebours de détermination. Quand il se déclenche, le Protégé s'enfuit, meurt ou est mis hors d'état de nuire.",
          "questions": "Pourquoi cette tâche est-elle si importante pour le Protégé ? Qu'est-ce qui a le pouvoir de briser sa détermination ?"
        },
        {
          "nom": "Multitudes grouillantes",
          "tag": "Passive",
          "texte": "Tous les adversaires gagnent l'aptitude « Implacable (2) » : ils peuvent passer sous les projecteurs jusqu'à deux fois par tour du MJ. Dépensez de la Peur comme d'habitude pour les mettre sous les projecteurs.",
          "questions": "D'où vient la nouvelle puissance de ces ennemis ? Existe-t-il un moyen de les en couper ?"
        },
        {
          "nom": "Vagues sur vagues",
          "tag": "Réaction",
          "texte": "Quand il n'y a plus d'adversaires dans la scène, invoquez une vague d'adversaires à portée Loin du Protégé. Chaque vague se compose de deux Sbires de palier 1 par PJ dans la scène.",
          "questions": "D'où viennent ces adversaires ? Qui les dirige depuis l'ombre ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "bal-masque",
      "nom": "Bal masqué",
      "palier": 2,
      "type": "Social",
      "description": "Un gala de la haute société où des fêtards masqués échangent secrets et faveurs.",
      "impulsions": "Danser toute la nuit, manger et se réjouir, conclure des accords secrets, échanger des informations précieuses",
      "difficulte": 14,
      "adversaires": "Agents (Voleur masqué, Maître assassin, Espion), Fêtards (Courtisane, Baron marchand, Conseiller royal)",
      "aptitudes": [
        {
          "nom": "Costumes obligatoires",
          "tag": "Passive",
          "texte": "Tout le monde au bal est censé arriver déguisé. Les PJ ont l'avantage aux jets de Présence pour convaincre les autres qu'ils sont quelqu'un, ou quelque chose, qu'ils ne sont pas.",
          "questions": "Comment les PJ sont-ils déguisés ? Que révèlent leurs costumes de leur véritable nature ?"
        },
        {
          "nom": "« Une danse ? »",
          "tag": "Passive",
          "texte": "En dansant, un PJ peut faire un jet d'Agilité au lieu d'un jet de Présence pour influencer les autres.",
          "questions": "Qu'ont de remarquable ou d'unique les danses à la mode ici ? Où les PJ ont-ils appris à les exécuter ?"
        },
        {
          "nom": "Erreur sur la personne",
          "tag": "Action",
          "texte": "Une personne très importante confond un PJ avec une personne encore plus importante. La cible peut jouer le jeu du malentendu avec un jet de réaction de Présence. En cas de succès, le PJ peut demander au VIP de rendre un service, de transmettre une information clé ou de faire une présentation. En cas d'échec, le PJ marque un Stress car sa véritable identité est découverte, et il est menacé d'être expulsé de la fête.",
          "questions": "Pour qui le VIP les prend-il ? Quelles portes cette erreur ouvre-t-elle ? Quels dangers apporte-t-elle ?"
        },
        {
          "nom": "Cape et poignard",
          "tag": "Action",
          "texte": "Dépensez une Peur pour qu'un agent tente de voler quelque chose de précieux ou d'assassiner une personne importante. Un PJ peut faire un jet d'Instinct pour tenter de le remarquer avant qu'il n'atteigne son objectif. En cas de succès, le PJ a l'occasion d'intervenir. En cas d'échec avec Peur, le PJ est à tort impliqué dans le crime.",
          "questions": "Pour qui travaille l'agent ? Pourquoi l'a-t-on envoyé à ce bal masqué ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "cabane-de-la-sorciere",
      "nom": "Cabane de la sorcière",
      "palier": 2,
      "type": "Exploration",
      "description": "Une cabane rustique sans fenêtre perchée sur deux énormes pattes de poulet.",
      "impulsions": "Les effrayer, les retarder jusqu'au retour de la sorcière, les enfermer à l'intérieur, se déplacer ailleurs, les tenter avec des curiosités magiques",
      "difficulte": 14,
      "adversaires": "Cabane sur pattes de poulet, Défenses enchantées (Grotesque, Moquerie vorace, Épouvantail), Valdenhax, Victimes de la sorcière (Citrouilles-lanternes, Mordeurs bonnet-rouge)",
      "aptitudes": [
        {
          "nom": "Plus grande à l'intérieur",
          "tag": "Passive",
          "texte": "Bien que l'extérieur de la cabane soit un cottage rustique d'une seule pièce, l'intérieur est un domaine en perpétuel remaniement d'une splendeur hantée, regorgeant de nombreuses chambres, bibliothèques et jardins d'intérieur, entre autres installations mystérieuses.",
          "questions": "Y a-t-il une logique dans la manière dont la cabane se réarrange ? Quel est le lieu le plus surprenant que les PJ pourraient y trouver ?"
        },
        {
          "nom": "Collection de poupées effrayantes",
          "tag": "Passive",
          "texte": "Compte à rebours (5).\nDans toute la cabane, les PJ peuvent voir de très nombreuses poupées de porcelaine ou de bois aux yeux étrangement vivants. Quand le groupe entre pour la première fois dans le champ de vision d'une poupée, activez le compte à rebours. Il diminue quand un PJ rate un jet ou fait un jet avec Peur. Quand il se déclenche, les poupées prennent vie et attaquent. Invoquez un nombre de poupées vivantes (Mordeurs bonnet-rouge) égal à deux fois le nombre de PJ.",
          "questions": "Qui étaient ces poupées avant ? Existe-t-il un moyen de les libérer de leur emprisonnement ?"
        },
        {
          "nom": "Chaudron de sorcière",
          "tag": "Passive",
          "texte": "La cabane contient un atelier avec tous les outils ou composants dont une sorcière pourrait avoir besoin, dont un grand chaudron de fer posé sur un feu qui couve. Un PJ qui veut utiliser l'atelier peut faire un jet d'incantation pour fabriquer une potion magique ou un poison de la table des Consommables.\n- Tout échec : l'expérience lui explose à la figure, littéralement. Le PJ subit 2d10+2 dégâts magiques.\n- Tout succès : le PJ lance un nombre de d12 égal à 1 + son palier, additionne les résultats et obtient le consommable correspondant à cette valeur dans la table des Consommables. S'il a réussi de façon critique, il peut relancer tous les d12 affichant un 1.",
          "questions": "Dans quelles sortes de concoctions la sorcière propriétaire de la cabane se spécialise-t-elle ? Que ferait-elle si elle trouvait les PJ en train d'utiliser ses affaires ?"
        },
        {
          "nom": "Déplacée",
          "tag": "Réaction",
          "texte": "Le temps s'écoule différemment à l'intérieur de la Cabane de la sorcière. Quand la porte de la cabane est fermée, lancez un d6. Sur un résultat de 4 ou plus, la cabane se déplace vers un lieu différent, souvent d'une distance impossible, qui n'est révélé aux PJ que lorsqu'ils rouvrent la porte de la cabane.",
          "questions": "Pourquoi la cabane se déplace-t-elle si souvent ? Où veut-elle emmener les PJ ? Existe-t-il un moyen de la diriger vers un lieu précis ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "cambriolage",
      "nom": "Cambriolage",
      "palier": 2,
      "type": "Événement",
      "description": "Le groupe doit accéder à un lieu caché ou bien protégé pour obtenir les informations ou objets qui y sont gardés.",
      "impulsions": "Faire préparer le groupe, le diviser, dresser des obstacles, l'enfermer, épuiser ses ressources",
      "difficulte": 14,
      "adversaires": "Chef de la garde, Briseur minotaure, Gardien du secret, Gardien spectral",
      "aptitudes": [
        {
          "nom": "Préparatifs",
          "tag": "Passive",
          "texte": "Avant le Casse, chaque PJ a la possibilité de rassembler une information clé, de surveiller les lieux ou d'acquérir un outil ou une ressource utile. Donnez à chaque joueur l'occasion de décrire un obstacle qu'il s'attend à rencontrer et comment il s'est préparé pour le surmonter, puis demandez-lui de faire un jet d'action. En cas de succès, il obtient l'information ou l'atout recherché. En cas de succès avec Peur, c'est moins utile que prévu (par exemple, il découvre l'emplacement d'un point d'accès caché mais apprend que le forcer sera probablement difficile et bruyant).",
          "questions": "Comment le PJ obtient-il cet avantage ? Agit-il seul ou demande-t-il de l'aide ? Quelles complications imprévues surviennent pendant le casse lui-même ?"
        },
        {
          "nom": "Infiltration",
          "tag": "Passive",
          "texte": "Établissez l'objectif du Casse et lancez deux comptes à rebours dynamiques : un compte à rebours de progression (12) pour représenter le travail du groupe vers son objectif et un compte à rebours de conséquence (10) pour représenter le risque croissant d'être découvert et capturé. Faites-les avancer selon le tableau d'avancement des comptes à rebours dynamiques quand les PJ font des jets d'action pour mener le Casse à bien. Si le compte à rebours de progression se déclenche en premier, donnez le devant de la scène à cet environnement pour utiliser l'aptitude « Exfiltration ». Si le compte à rebours de conséquence se déclenche en premier, gagnez 1d4 Peur, donnez le devant de la scène à cet environnement et utilisez l'aptitude « Sonner l'alarme ».",
          "questions": "Que cherche le groupe, et où cela se trouve-t-il ? Quels obstacles inattendus rencontrera-t-il ? Que se passe-t-il si le groupe se fait prendre ?"
        },
        {
          "nom": "Je le sentais venir",
          "tag": "Passive",
          "texte": "Une fois par session, un PJ peut dépenser un Espoir pour expliquer comment il s'est préparé à la situation actuelle et révéler une information clé (comme l'emplacement d'un passage caché ou le mot de passe d'une zone interdite) ou produire un objet utile (comme un uniforme de cultiste laissé sans surveillance ou un consommable courant caché dans sa botte).",
          "questions": "Qu'est-ce que le PJ a préparé à l'avance ? Comment savait-il qu'il en aurait besoin ? Que lui a coûté cette préparation, ou à qui doit-il une faveur ?"
        },
        {
          "nom": "Exfiltration",
          "tag": "Réaction",
          "texte": "Quand le compte à rebours de progression se déclenche, le groupe obtient l'objet du Casse et doit réussir un jet d'action de groupe pour s'échapper sans être capturé. En cas d'échec, chaque PJ subit 2d12 dégâts physiques directs et doit marquer un Stress.",
          "questions": "Qu'est-ce qui rend la sortie encore plus dangereuse que l'entrée ? Quels événements imprévus contrarient le plan d'évasion initial du groupe ?"
        },
        {
          "nom": "Sonner l'alarme",
          "tag": "Réaction",
          "texte": "Quand le compte à rebours de conséquence se déclenche, le groupe est découvert et le lieu passe en Alerte maximale. Invoquez un nombre d'adversaires de palier 2 égal au nombre de PJ dans la scène et donnez immédiatement le devant de la scène à l'un d'eux. Tant que cet environnement est en Alerte maximale, tous les adversaires gagnent un bonus de +1 à leur Difficulté.",
          "questions": "Qu'est-ce qui rend ces adversaires particulièrement aptes à garder ce lieu ? Que savent-ils de cet endroit qui leur donne un avantage ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "donjon-mortel",
      "nom": "Donjon mortel",
      "palier": 2,
      "type": "Exploration",
      "description": "Un réseau souterrain faiblement éclairé de tunnels et de salles rempli de monstres, de pièges et de trésors.",
      "impulsions": "Dévorer les ressources du groupe, déclencher le piège, le tenter avec des trésors, lui jeter des monstres dessus, le faire rebrousser chemin",
      "difficulte": 14,
      "adversaires": "Habitants du donjon (Gobstalker, Vase verte, Moquerie vorace, Mangeur de rouille), Aventuriers rivaux (Brute géante, Voleur masqué, Mage de guerre)",
      "aptitudes": [
        {
          "nom": "Détours et tournants",
          "tag": "Passive",
          "texte": "Compte à rebours (6). Quand le groupe entre dans le donjon, activez le compte à rebours. Il diminue quand un PJ réussit un jet d'action pour naviguer dans les passages. Quand il se déclenche, les PJ atteignent la partie la plus profonde, la plus sombre et la mieux défendue du donjon.",
          "questions": "Quelle récompense se trouve au coeur du dédale ? Qui a construit ce labyrinthe pour la protéger ?"
        },
        {
          "nom": "Poches profondes",
          "tag": "Passive",
          "texte": "Une fois par repos, les PJ peuvent trouver une cache de trésor dans le donjon, sur les cadavres d'anciens explorateurs ou derrière des portes dérobées. Sur un jet réussi pour naviguer dans le donjon, un PJ peut dépenser jusqu'à 5 Espoir pour lancer ce nombre de d6. Chaque résultat obtenu rapporte au groupe le butin ou l'équipement suivant :\n1. Des gemmes, bijoux, babioles ou pièces en vrac équivalant à une poignée d'or\n2. Un objet ou consommable courant\n3. Un objet ou consommable peu courant\n4. Un objet ou consommable rare\n5. Un objet ou consommable légendaire\n6. Une arme ou une armure du palier du groupe",
          "questions": "Comment étaient les anciens propriétaires ? Comment les PJ comptent-ils sortir du donjon leurs objets dérobés ?"
        },
        {
          "nom": "Monstre errant",
          "tag": "Réaction",
          "texte": "Quand le groupe entre dans une nouvelle zone du donjon, vous pouvez dépenser une Peur pour invoquer 1d4 adversaires de palier égal ou inférieur à celui du groupe à portée Loin et lancer un d6. Sur 1 ou 2, les PJ remarquent des signes avant-coureurs et peuvent se préparer à la rencontre ; le premier PJ à faire un jet d'action a l'avantage. Sur 3 ou 4, le combat se déroule comme d'habitude. Sur 5 ou 6, les adversaires surprennent les PJ et prennent immédiatement le devant de la scène, et vous gagnez une Peur.",
          "questions": "Comment ces créatures se sont-elles retrouvées ici ? Que faisaient-elles quand les PJ les ont rencontrées ?"
        },
        {
          "nom": "Pièges",
          "tag": "Réaction",
          "texte": "Quand un PJ rate un jet d'action pour naviguer dans le donjon, activez un piège ou un danger, comme une fosse à pointes, un couloir de lames oscillantes ou une salle verrouillée qui se remplit lentement d'eau. Le groupe doit réussir un jet d'action de groupe pour le désamorcer, le désactiver ou s'en échapper. En cas d'échec, chaque PJ impliqué dans le jet d'action de groupe subit 2d6+3 dégâts physiques ou magiques (au choix du MJ).",
          "questions": "Quels types de pièges et de dangers remplissent ce donjon ? Que révèle leur construction sur celui qui les a conçus ? L'un d'eux a-t-il été déclenché avant l'arrivée du groupe ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "duel",
      "nom": "Duel",
      "palier": 2,
      "type": "Événement",
      "description": "Un adversaire défie l'un des PJ en combat singulier tandis que le reste du groupe l'aide depuis les lignes de côté.",
      "impulsions": "Se concentrer sur un PJ, le pousser à trop s'engager, infliger une défaite humiliante, mettre à l'écart le reste du groupe",
      "difficulte": "Spéciale (voir « Force relative »)",
      "adversaires": "Tous",
      "aptitudes": [
        {
          "nom": "J'exige réparation.",
          "tag": "Passive",
          "texte": "Quand un adversaire défie un PJ en combat singulier, le PJ choisit d'accepter ou non. S'il refuse le défi, il doit marquer un Stress et vous gagnez une Peur. Si un PJ accepte le défi d'un adversaire, activez un compte à rebours de progression (6) et un compte à rebours de conséquence (4). Si le compte à rebours de progression se déclenche en premier, le PJ remporte le Duel et obtient une faveur ou une concession de son adversaire. Si le compte à rebours de conséquence se déclenche en premier, l'adversaire remporte le Duel et réclame une faveur ou une concession au PJ.",
          "questions": "Pourquoi ce PJ a-t-il été choisi ? Que s'attend-il à gagner s'il l'emporte ?"
        },
        {
          "nom": "Force relative",
          "tag": "Passive",
          "texte": "La Difficulté de cet environnement est égale à celle de l'adversaire qui a lancé le défi.",
          "questions": "Qui lance le défi ? Pour quoi se bat-il ?"
        },
        {
          "nom": "Règles d'engagement",
          "tag": "Passive",
          "texte": "Pendant le Duel, le PJ défié est le seul à pouvoir faire des jets d'action. Les autres PJ ne peuvent aider le PJ défié qu'indirectement : ils peuvent Aider un allié, lancer des jets d'action de groupe ou des jets d'équipe, et utiliser toutes leurs aptitudes qui n'affectent pas directement l'adversaire qui défie.",
          "questions": "Où ce conflit a-t-il lieu ? Comment l'environnement offre-t-il au reste du groupe l'occasion d'aider son allié sans interférer ?"
        },
        {
          "nom": "Coups bas",
          "tag": "Action",
          "texte": "Dépensez une Peur pour que l'adversaire qui défie ou l'un de ses alliés triche. Un PJ peut remarquer son action déloyale avec un jet de réaction d'Instinct réussi et riposter de la même façon.",
          "questions": "Qu'est-ce qui est interdit dans ce conflit ? Comment l'allié de l'adversaire contourne-t-il les règles sans les enfreindre, ou les enfreint-il sans se faire prendre ? Comment les PJ peuvent-ils rétablir l'équilibre ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "journee-a-la-plage",
      "nom": "Journée à la plage",
      "palier": 2,
      "type": "Social",
      "description": "Le groupe fait une pause dans son aventure pour se reposer et se détendre dans une localité balnéaire.",
      "impulsions": "Évoquer des images de sable et de vagues, leur laisser souffler, les préparer au conflit à venir",
      "difficulte": 14,
      "adversaires": "Aucun",
      "aptitudes": [
        {
          "nom": "Repos et détente",
          "tag": "Passive",
          "texte": "Le groupe se trouve dans un lieu où les soucis et les conflits du monde extérieur s'évanouissent. Quand les PJ se reposent ici, ils gagnent un mouvement de temps mort supplémentaire, le MJ ne gagne pas de Peur et aucun compte à rebours à long terme n'avance.",
          "questions": "Qu'est-ce qui est si relaxant ici ? Cela vous rappelle-t-il un endroit où vous êtes déjà allé ?"
        },
        {
          "nom": "Notre histoire jusqu'ici...",
          "tag": "Passive",
          "texte": "Une fois par scène, quand un PJ raconte un moment mémorable de la campagne lors d'une conversation avec un autre PJ, ils gagnent tous les deux un Espoir.",
          "questions": "Quels sons, odeurs ou sensations ce souvenir évoque-t-il dans votre esprit ? Comment ce moment vous a-t-il changé de façon permanente, ou a-t-il changé votre opinion sur votre compagnon ?"
        },
        {
          "nom": "Ennuis locaux",
          "tag": "Action",
          "texte": "Dépensez une Peur pour interrompre le répit d'un PJ avec une complication mineure, comme une bande de vauriens grincheux sur la plage, un admirateur trop exubérant ou un très mauvais coup de soleil. Le PJ doit résoudre la situation avec élégance ou marquer un Stress à cause de l'embarras ou de la frustration qui en résulte.",
          "questions": "Pourquoi ce PJ attire-t-il leur attention ? De quoi les habitants se soucient-ils plus que de ces aventuriers fraîchement arrivés ?"
        },
        {
          "nom": "Défilé de mode",
          "tag": "Réaction",
          "texte": "Quand le groupe se prépare pour sa première journée à la plage, demandez à chaque joueur de décrire comment son PJ change de tenue pour mieux s'adapter à l'environnement. Le MJ donne au PJ à l'allure la plus fraîche un dé de Fraîcheur d6 qui peut être dépensé pour l'ajouter à n'importe quel jet d'action ou de réaction.",
          "questions": "Quelle est la mode dans cette région ? Où les PJ se procurent-ils leurs nouveaux articles et accessoires de plage ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "vaste-desert",
      "nom": "Vaste désert",
      "palier": 2,
      "type": "Traversée",
      "description": "Une étendue aride de dunes de sable, de salines désolées et de formations rocheuses balayées par le vent.",
      "impulsions": "Déshydrater, montrer une beauté désolée, menacer d'un danger à l'horizon",
      "difficulte": 14,
      "adversaires": "Fouisseur acide, Pillards du désert (Bandits Couteau dentelé), Requin terrestre, Ver des sables",
      "aptitudes": [
        {
          "nom": "Sables sans fin",
          "tag": "Passive",
          "texte": "Compte à rebours (8).\nPour traverser le désert, le groupe doit accomplir le compte à rebours. Il diminue chaque fois qu'un PJ réussit un jet d'action pour naviguer dans cette étendue apparemment infinie.",
          "questions": "Comment les PJ voyagent-ils dans le désert ? Qu'est-ce qui, au-delà de l'extrême distance et du manque d'eau, rend cette zone difficile à traverser ?"
        },
        {
          "nom": "Réserve d'eau",
          "tag": "Passive",
          "texte": "Quand le groupe commence son voyage, placez sur ce bloc de statistiques un nombre de jetons égal à 1 + le nombre de PJ dans la scène. Retirez un jeton à la fin de chaque repos long ou quand un PJ rate un jet d'action pour naviguer dans le désert. Quand un jeton devrait être retiré mais qu'il n'en reste aucun, chaque PJ doit marquer un PB et un Stress. Un PJ peut ajouter un jeton à ce bloc de statistiques en utilisant un mouvement de temps mort et en réussissant un jet de Savoir pour chercher de l'eau.",
          "questions": "Quelles sortes de flore ou de caractéristiques du terrain qui conservent l'eau les PJ ont-ils entendu dire qu'on pouvait trouver dans ce désert ? Comment les PJ collectent-ils et transportent-ils l'eau qu'ils trouvent ?"
        },
        {
          "nom": "Sables changeants",
          "tag": "Passive",
          "texte": "Les dunes en perpétuel mouvement et le vent cinglant rendent difficile de suivre la piste de créatures dans cet environnement. Les jets d'action pour pister des créatures dans le désert sont faits avec désavantage.",
          "questions": "Comment les dunes et le paysage changent-ils chaque fois que les héros se reposent ? Qu'est-ce que le vent recouvre ou découvre ?"
        },
        {
          "nom": "Orage",
          "tag": "Action",
          "texte": "Dépensez une Peur pour qu'une pluie torrentielle trempe la terre. Chaque PJ doit soit chercher un abri contre l'orage, soit recueillir l'eau de pluie. Chaque PJ qui cherche un abri marque un Stress. Les PJ qui recueillent l'eau de pluie font un jet d'action de groupe.\n- Succès avec Espoir : ajoutez 1d4 jetons à la Réserve d'eau.\n- Succès avec Peur : ajoutez 1 jeton à la Réserve d'eau.\n- Échec avec Espoir : chaque PJ ayant participé au jet d'action de groupe marque un Stress.\n- Échec avec Peur : chaque PJ ayant participé au jet d'action de groupe marque un Stress, et le PJ ayant obtenu le résultat le plus bas subit 2d8+4 dégâts physiques de l'orage.",
          "questions": "À quoi l'orage ressemble-t-il aux yeux des héros quand il approche de très loin ? Est-il naturel ou surnaturel ? Comment le savez-vous ?"
        },
        {
          "nom": "Tempête de sable",
          "tag": "Action",
          "texte": "Dépensez une Peur pour invoquer une tempête de sable qui désoriente et harcèle les voyageurs. Chaque PJ subit 2d6+3 dégâts physiques. Tant que la tempête de sable ne se dissipe pas, un PJ qui fait un jet d'action doit réussir un jet de réaction d'Agilité pour éviter le tourbillon de roches et de débris ou subir 2d6+3 dégâts physiques.",
          "questions": "Que portent les habitants de ce désert pour résister aux tempêtes de sable ? Comment les habitations que le groupe y trouve sont-elles conçues pour résister aux vents ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "voyage-en-mer",
      "nom": "Voyage en mer",
      "palier": 2,
      "type": "Traversée",
      "description": "Les PJ obtiennent un passage vers une destination lointaine en offrant leur travail en échange.",
      "impulsions": "Révéler ce qui rôde sous les vagues, les envoyer dans la mauvaise direction, couler le navire, épuiser leurs ressources",
      "difficulte": 14,
      "adversaires": "Habitants des abysses (Anguilles électriques, Kraken, Requin, Sirène), Pirates (Capitaine pirate, Pillards pirates)",
      "aptitudes": [
        {
          "nom": "Haute mer",
          "tag": "Passive",
          "texte": "Compte à rebours (8).\nAtteindre la destination exige que le groupe accomplisse le compte à rebours de la Haute mer. Il diminue quand un PJ réussit un jet d'action pour aider le voyage du navire.",
          "questions": "Où va le navire ? Quels dangers sur la route l'équipage évoque-t-il à voix basse ?"
        },
        {
          "nom": "Les vivres s'épuisent",
          "tag": "Passive",
          "texte": "La première fois qu'un PJ rate un jet avec Peur pendant ce voyage, l'équipage découvre que la nourriture et l'eau douce de la cale ont été souillées par des parasites et de la moisissure. Jusqu'à ce que le groupe atteigne sa destination, un PJ qui fait un jet d'action pour faire avancer le compte à rebours de la Haute mer doit d'abord réussir un jet de réaction de Force ou marquer un Stress.",
          "questions": "Qu'est-il arrivé aux vivres ? Quelles mesures drastiques l'équipage prend-il pour éviter de mourir de faim et de soif ?"
        },
        {
          "nom": "Pirates !",
          "tag": "Action",
          "texte": "Dépensez une Peur pour qu'un membre d'équipage dans le nid-de-pie repère des voiles noires à l'horizon ! Lancez un compte à rebours de conséquence (4). S'il se déclenche avant que le groupe n'atteigne sa destination, les pirates rattrapent le navire et l'abordent. Gagnez une Peur, puis invoquez un Capitaine pirate et trois Hordes de Pillards pirates à portée Proche du groupe.",
          "questions": "Le capitaine reconnaît-il le navire qui les poursuit ? Quelles pratiques peu courtoises les pirates de cette région sont-ils réputés pratiquer ?"
        },
        {
          "nom": "Mauvais temps",
          "tag": "Réaction",
          "texte": "Quand le compte à rebours de la Haute mer diminue jusqu'à un nombre impair, lancez un d6. Sur un résultat de 4 ou plus, le navire rencontre une zone de mauvais temps, comme un banc de brouillard qui complique la navigation ou un grain qui menace de faire chavirer le navire. Chaque PJ doit réussir un jet de réaction avec un trait pertinent choisi par le MJ ou marquer 1d4 Stress.",
          "questions": "Qu'est-ce qui rend ce temps différent de tout ce que les PJ ont connu ? Comment se coordonnent-ils avec l'équipage pour traverser ce danger ?"
        },
        {
          "nom": "Ici gisent des monstres",
          "tag": "Réaction",
          "texte": "Quand le compte à rebours de la Haute mer diminue jusqu'à un nombre pair, lancez un d6. Sur un résultat de 4 ou plus, invoquez 1d4 Habitants des abysses.",
          "questions": "Qu'est-ce qui attire ces créatures vers le navire ? Existe-t-il un moyen de les chasser sans combat ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "casino-de-luxe",
      "nom": "Casino de luxe",
      "palier": 3,
      "type": "Social",
      "description": "Une salle de jeu étincelante où marchands et nobles bien nantis viennent dilapider leur fortune.",
      "impulsions": "Faire miroiter le jackpot juste hors de portée, les éblouir de spectacle, s'attaquer à leurs vices",
      "difficulte": 16,
      "adversaires": "Sécurité automatisée (Gardiens de caveau), Joueurs (Courtisane, Baron marchand, Petit noble, Espion)",
      "aptitudes": [
        {
          "nom": "Faste et glamour",
          "tag": "Passive",
          "texte": "Le spectacle écrasant de ce lieu peut fasciner même le client le plus blasé. Tant qu'ils sont ici, tous les PJ ont le désavantage aux jets de réaction provoqués par un membre du personnel ou un habitué du casino.",
          "questions": "Qu'y a-t-il de si merveilleux dans les ornements du casino ? Sont-ils vraiment magiques ou simplement des merveilles ordinaires poussées à un extrême impossible ?"
        },
        {
          "nom": "La fortune sourit aux audacieux",
          "tag": "Passive",
          "texte": "Une fois par repos long, un PJ peut miser n'importe quelle quantité d'or en indiquant combien il veut parier et en lançant son dé d'Espoir. Sur un résultat de 7 ou plus, le PJ gagne un montant égal, doublant son argent. Sur un résultat de 6 ou moins, il perd tout.",
          "questions": "À quel jeu le PJ choisit-il de jouer ? Quelles règles maison ce casino applique-t-il ? Les PJ sont-ils prêts à risquer autre chose que de l'or ?"
        },
        {
          "nom": "La maison gagne toujours",
          "tag": "Réaction",
          "texte": "Quand un adversaire rate un jet, vous pouvez dépenser une Peur pour en faire une réussite.",
          "questions": "Ce lieu est-il béni d'une chance impossible, ou quelque chose maudit-il quiconque franchit ses portes ?"
        },
        {
          "nom": "Sécurité automatisée",
          "tag": "Réaction",
          "texte": "Quand un PJ tente de tricher à un jeu du casino et échoue, il doit marquer un Stress en déclenchant le dispositif de sécurité mécanique du casino. Gagnez une Peur et invoquez un Geôlier gardien de caveau et une Tourelle par PJ, plus une Sentinelle gardienne de caveau. Tous les adversaires apparaissent à portée Loin des PJ, et la Sentinelle gardienne de caveau prend immédiatement le devant de la scène.",
          "questions": "Qui a construit ces machines ? Pourquoi sont-elles préférables à des êtres vivants ?"
        },
        {
          "nom": "Le terrain de jeu du diable",
          "tag": "Réaction",
          "texte": "Si les PJ battent la sécurité automatisée du casino ou tentent de partir avec des gains volés, vous pouvez dépenser une quantité de Peur égale au nombre de PJ pour invoquer le véritable propriétaire du casino, un Démon de l'avarice, à portée Proche d'un PJ. Le Démon prend immédiatement le devant de la scène et barre la sortie du groupe à tout prix.",
          "questions": "Comment le démon a-t-il masqué son influence jusqu'ici ? Comment le casino lui-même change-t-il pour révéler sa vraie nature ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "citadelle-engloutie",
      "nom": "Citadelle engloutie",
      "palier": 3,
      "type": "Exploration",
      "description": "Les ruines englouties d'une civilisation disparue depuis longtemps, remplies de technologie ancienne et de magie noire.",
      "impulsions": "Les attirer en profondeur, les noyer, révéler des merveilles antiques",
      "difficulte": 16,
      "adversaires": "Ondine maudite, Habitant des profondeurs, Plésiosaure",
      "aptitudes": [
        {
          "nom": "Environnement sous-marin",
          "tag": "Passive",
          "texte": "Cet environnement est sous l'eau (voir les règles « Se déplacer et combattre sous l'eau » en page 168 du livre de base). En plus de ces règles, une créature qui respire de l'air suit sa réserve avec un compte à rebours de Réserve d'air. Sa valeur de départ est égale à 3 + son palier, et il diminue quand elle effectue une action. Si un PJ rate un jet d'action ou fait un jet avec Peur, vous pouvez utiliser un acte de MJ pour faire diminuer son compte à rebours une fois de plus. Si le jet est un échec avec Peur, vous pouvez le faire diminuer deux fois à la place. Une fois son compte à rebours déclenché, un PJ doit marquer un Stress chaque fois qu'il effectue une action sous l'eau jusqu'à ce qu'il remonte à la surface.",
          "questions": "Avez-vous déjà connu quelqu'un qui s'est noyé ? À quoi pensez-vous pour rester calme et faire durer votre réserve d'air ?"
        },
        {
          "nom": "Poches d'air",
          "tag": "Passive",
          "texte": "Un PJ peut remettre son compte à rebours de Réserve d'air à sa valeur de départ en trouvant une poche d'air avec un jet de Savoir ou d'Instinct réussi.",
          "questions": "Quels signes ou structures cherchez-vous ? Que ressent-on en sachant que ce pourrait être sa dernière bouffée d'air ?"
        },
        {
          "nom": "Technologie perdue",
          "tag": "Passive",
          "texte": "Les ruines sont gravées d'étranges runes magiques et jonchées de technologie perdue. Un PJ peut faire un jet de Savoir pour obtenir des informations utiles sur cette civilisation disparue à partir de runes ou d'appareils qu'il croise.",
          "questions": "Qui habitait autrefois ces lieux ? Comment fonctionnait leur technologie ? Pourquoi ont-ils fini par être détruits et précipités dans les profondeurs ?"
        },
        {
          "nom": "Habitants des eaux profondes",
          "tag": "Action",
          "texte": "Dépensez une Peur pour invoquer jusqu'à deux Habitants des profondeurs et 1d6 Ondins maudits qui tentent d'asservir les PJ à leur volonté. Ces adversaires apparaissent à portée Proche d'un PJ, puis l'un d'eux prend immédiatement le devant de la scène.",
          "questions": "Pourquoi ces créatures restent-elles ici parmi les ruines ? Refusent-elles ou sont-elles incapables de ressusciter cette civilisation jadis prospère ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "eruption-volcanique",
      "nom": "Éruption volcanique",
      "palier": 3,
      "type": "Événement",
      "description": "Une explosion de chaleur et de roche en fusion qui ne laisse derrière elle qu'une désolation calcinée.",
      "impulsions": "Créer la panique tout autour, couper les sorties, isoler, les faire se démener pour se mettre à l'abri, diviser le groupe",
      "difficulte": 16,
      "adversaires": "Étincelle élémentaire, Élémentaire de lave (Élémentaire de terre supérieur), Dragon volcanique",
      "aptitudes": [
        {
          "nom": "Sol instable",
          "tag": "Passive",
          "texte": "Le sol ici est inégal, sujet à l'effondrement et en perpétuel mouvement. Les PJ qui ratent un jet d'Agilité pour se déplacer doivent marquer un PB et sont temporairement Entravés.",
          "questions": "Quelles formes et couleurs étranges les PJ voient-ils dans la lave refroidie ? Comment les habitants des environs gardent-ils pied sur la surface lisse et brillante ?"
        },
        {
          "nom": "Éruption violente",
          "tag": "Action",
          "texte": "Dépensez une Peur pour que le sol entre en éruption en un point de votre choix, projetant de la lave dans les airs et l'étalant sur le sol. Toutes les cibles à portée Très proche de ce point perdent un Espoir et subissent 3d8+3 dégâts physiques. La zone à portée Très proche du point d'éruption devient de la lave jusqu'à la fin de la scène. Une créature qui se déplace dans la lave ou la traverse subit 3d8+3 dégâts physiques. Jusqu'à la fin de la scène, vous pouvez dépenser une Peur pour étendre la zone de lave d'un cran (par exemple de Très proche à Proche ou de Proche à Loin).",
          "questions": "Qu'est-ce qui donne à la lave l'air vivant ? Comment les PJ peuvent-ils prévoir son comportement ?"
        },
        {
          "nom": "Libérer des gaz toxiques",
          "tag": "Action",
          "texte": "Dépensez une Peur pour ouvrir une fissure qui crache des gaz toxiques en un point de votre choix, créant un nuage qui recouvre tout à portée Loin. Dans le nuage, un PJ doit suivre sa réserve d'air avec un compte à rebours de Réserve d'air. Sa valeur de départ est égale à 3 + son palier, et il diminue quand il effectue une action. Si un PJ rate un jet d'action ou fait un jet avec Peur, vous pouvez utiliser un acte de MJ pour faire diminuer son compte à rebours une fois de plus. Si le jet est un échec avec Peur, vous pouvez le faire diminuer deux fois à la place. Une fois le compte à rebours terminé, un PJ doit marquer un Stress chaque fois qu'il effectue une action dans le gaz jusqu'à ce qu'il échappe au nuage.",
          "questions": "Quels signes indiquent la présence de gaz toxiques ? Quel goût persiste dans la bouche des PJ qui inhalent le gaz ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "megatempete",
      "nom": "Mégatempête",
      "palier": 3,
      "type": "Événement",
      "description": "Un événement météorologique extrême se manifeste soudainement, forçant le groupe à équilibrer sa propre survie et la sécurité des autres.",
      "impulsions": "Souffler des vents d'ouragan, étouffer sous des coulées de boue, faire s'effondrer les structures, inonder, projeter des débris, illuminer le ciel",
      "difficulte": 16,
      "adversaires": "Élémentaire d'eau supérieur, Titan de la tempête",
      "aptitudes": [
        {
          "nom": "Front de tempête",
          "tag": "Passive",
          "texte": "Compte à rebours (8). Quand la tempête arrive, activez le compte à rebours. Il diminue quand un PJ fait un jet avec Espoir. Quand il se déclenche, la tempête se disperse ou se déplace vers une autre zone.",
          "questions": "Où est l'endroit le plus sûr pour affronter la tempête ? Pour quoi les habitants sont-ils prêts à risquer leur vie ?"
        },
        {
          "nom": "Conditions dangereuses",
          "tag": "Passive",
          "texte": "Le vent extrême, le brouillard et la couverture nuageuse de la Mégatempête rendent la navigation difficile dans toute la zone. Les PJ ne peuvent pas se déplacer dans le cadre d'un jet d'action sans réussir un jet de réaction d'Agilité.",
          "questions": "Qui d'autre est perdu dans le tourbillon ? Comment pouvez-vous les en sortir ?"
        },
        {
          "nom": "Cyclone-bombe",
          "tag": "Action",
          "texte": "Dépensez une Peur pour invoquer un événement météorologique extrême, comme un orage ou une tornade, en un point de votre choix. Chaque cible à portée Proche de ce point doit réussir un jet de réaction avec un trait que vous choisissez pour éviter d'être criblée de grêle, projetée dans les airs, frappée par la foudre ou victime d'un effet similaire. Les cibles qui échouent subissent 2d10+2 dégâts d'un type de votre choix.",
          "questions": "Est-ce le pire temps que l'un des PJ ait connu ? Que peuvent utiliser les PJ dans les environs immédiats pour se protéger ?"
        },
        {
          "nom": "Coeur de tempête",
          "tag": "Action",
          "texte": "Dépensez une Peur pour révéler la batterie vivante de la Mégatempête. Invoquez un Géant de la tempête ou un Élémentaire d'eau supérieur à portée Loin d'un PJ, puis donnez-lui immédiatement le devant de la scène. Tant que cet adversaire n'est pas vaincu, le compte à rebours « Front de tempête » ne diminue pas. Quand cet adversaire est vaincu, la Mégatempête prend fin.",
          "questions": "Cette créature a-t-elle fait surgir la tempête pour ses propres desseins, ou sert-elle une entité encore plus grande ? Pourquoi a-t-elle désigné ce lieu pour la destruction ?"
        },
        {
          "nom": "Panique dans les rues",
          "tag": "Action",
          "texte": "La Mégatempête sème la peur et le chaos parmi les habitants. Décrivez comment la tempête met un PNJ en danger. Si le PJ qui prend ensuite le devant de la scène n'utilise pas son action pour secourir le PNJ en danger, vous gagnez une Peur.",
          "questions": "Qui profite de la situation ? Qui est censé être responsable ici, et que lui est-il arrivé ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "repaire-du-dragon",
      "nom": "Repaire du dragon",
      "palier": 3,
      "type": "Exploration",
      "description": "Une collection d'or, de joyaux et d'artefacts au coeur d'un volcan actif.",
      "impulsions": "Attirer vers les niveaux inférieurs, rendre toute fuite impossible, tenter avec des trésors, réveiller le dragon",
      "difficulte": 16,
      "adversaires": "Sbires du dragon (Drake, Vouivre), Jeune dragon de feu",
      "aptitudes": [
        {
          "nom": "Le dragon s'éveille",
          "tag": "Passive",
          "texte": "Compte à rebours de conséquence (8).\nLe dragon qui a amassé ce trésor dort quelque part sur, sous ou près du magot. Quand les PJ entrent dans le repaire, activez le compte à rebours. Quand il se déclenche, le dragon s'éveille et chaque PJ doit réussir un jet de réaction de Présence ou marquer un Stress. Vous gagnez une Peur pour chaque Stress marqué de cette façon.",
          "questions": "Où ce dragon sommeille-t-il ? De quoi rêve-t-il ?"
        },
        {
          "nom": "Magot",
          "tag": "Passive",
          "texte": "Au coeur du repaire se trouve une montagne de trésors. Si le groupe souhaite localiser le trésor, il doit accomplir un compte à rebours de progression (12). Quand il se déclenche, le groupe peut faire diminuer le compte à rebours de conséquence pour fouiller le tas de trésors en lançant un nombre de d12 égal à 1 + son palier sur la table des Objets ou des Consommables (au choix).",
          "questions": "Comment le groupe a-t-il appris l'existence de cette collection ? Qu'espère-t-il y trouver ?"
        },
        {
          "nom": "Activité volcanique",
          "tag": "Action",
          "texte": "Dépensez une Peur pour déclencher une éruption volcanique. Chaque personnage doit faire un jet de réaction d'Agilité. Les cibles qui échouent sont brûlées par des gerbes de lave et de flammes tandis que le sol se fend autour d'elles et subissent 3d8+5 dégâts physiques. Les cibles qui réussissent subissent la moitié des dégâts.",
          "questions": "Quelles voies de sortie la configuration changeante du volcan bloque-t-elle ? Comment les PJ se protègent-ils de la chaleur étouffante ?"
        },
        {
          "nom": "Chiens de garde",
          "tag": "Réaction",
          "texte": "Quand un PJ rate un jet pour naviguer dans le repaire, vous pouvez dépenser une Peur pour invoquer 1d6 Drakes et jusqu'à deux Vouivres, qui apparaissent à portée Proche d'un PJ et prennent immédiatement le devant de la scène.",
          "questions": "Pourquoi ces créatures servent-elles le dragon endormi ? Quels signes le groupe trouve-t-il qui annoncent leur présence ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "royaume-astral",
      "nom": "Royaume astral",
      "palier": 3,
      "type": "Traversée",
      "description": "Un royaume psychique d'énergie et d'émotion, où les esprits forts peuvent remodeler les règles de la réalité.",
      "impulsions": "Attaquer leur psyché, invoquer leurs peurs subconscientes, déformer leurs perceptions",
      "difficulte": 16,
      "adversaires": "Démon du désespoir, Étincelle élémentaire, Prêtre de la douleur, Vampires psychiques (Vampire en chef, Enfants de la nuit)",
      "aptitudes": [
        {
          "nom": "Expérience extracorporelle",
          "tag": "Passive",
          "texte": "Comme le groupe n'est pas physiquement dans ce royaume, les jets de Force, d'Agilité et de Finesse échouent automatiquement. De plus, quand un personnage devrait marquer un PB, il doit perdre un Espoir ou marquer un Stress à la place. Si un personnage ne peut pas marquer de Stress, il doit effectuer un mouvement de mort.",
          "questions": "En quoi la projection de votre image mentale diffère-t-elle de votre apparence physique ? Laquelle considérez-vous comme le « vrai » vous ?"
        },
        {
          "nom": "Manifestations mentales",
          "tag": "Passive",
          "texte": "Avec un jet de Savoir réussi, les PJ peuvent modifier l'environnement psychique, par exemple en inversant la gravité ou en faisant apparaître un escalier qui s'assemble rapidement de lui-même. Un PJ peut utiliser une manifestation mentale une fois par scène pour obtenir l'avantage à un jet pour naviguer dans le Royaume astral.",
          "questions": "La construction que vous manifestez est-elle un souvenir de la vie réelle ou le fruit de votre imagination ? Sur quel détail clé vous concentrez-vous pour la rendre plus stable ?"
        },
        {
          "nom": "La matière est illusion",
          "tag": "Passive",
          "texte": "Compte à rebours (10). Le temps et la distance sont relatifs ici, et se déplacer dans l'espace exige un acte de volonté. Pour traverser le Royaume astral, le groupe doit accomplir le compte à rebours en utilisant uniquement des jets de Savoir, d'Instinct ou de Présence. En cas d'échec avec Peur, un PJ subit 3d8 dégâts magiques directs.",
          "questions": "Traversez-vous cet endroit en pensant ou en ressentant ? Quelle différence cela fait-il ici ?"
        },
        {
          "nom": "Adversaires astraux",
          "tag": "Passive",
          "texte": "Les adversaires du Royaume astral sont immunisés contre les dégâts physiques, car ce sont des projections psychiques et non de chair et de sang.",
          "questions": "En quoi la forme astrale d'un adversaire diffère-t-elle de sa forme physique ? Pourquoi ces projections psychiques sont-elles attirées par les PJ ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "terres-de-cristal",
      "nom": "Terres de cristal",
      "palier": 3,
      "type": "Traversée",
      "description": "Un paysage hostile et étranger qui brille de tours de cristal scintillant.",
      "impulsions": "Les entailler jusqu'au coeur, fracturer leur psyché, leur montrer leur véritable reflet",
      "difficulte": 16,
      "adversaires": "Chatoyeur adulte, Créatures artificielles, Étincelle élémentaire, Gardiens de caveau, Spectres chuchotants",
      "aptitudes": [
        {
          "nom": "Résonance harmonique",
          "tag": "Passive",
          "texte": "Les cristaux ici résonnent d'énergie magique. Un PJ peut utiliser un mouvement de temps mort pour tenter de s'Accorder à l'environnement avec un jet d'incantation réussi. Tant qu'il est Accordé, le PJ a l'avantage aux jets d'incantation à l'intérieur des Terres de cristal. La condition est effacée quand le PJ quitte les Terres de cristal.",
          "questions": "Comment l'accord avec ce lieu modifie-t-il votre expérience sensorielle ? Quel son ou chant de votre enfance cet endroit évoque-t-il ?"
        },
        {
          "nom": "Anomalies gravitationnelles",
          "tag": "Action",
          "texte": "Des phénomènes étranges et localisés parsèment le paysage, déformant distance et direction. Dépensez une Peur pour modifier la gravité en un point choisi. Chaque cible à portée Proche de ce point doit faire un jet de réaction de Savoir pour calculer ses nouvelles trajectoires. Les cibles qui échouent subissent 3d8+4 dégâts physiques, projetées en l'air et au loin. Les cibles qui réussissent doivent marquer un Stress ou subir la moitié des dégâts.",
          "questions": "Que ressent-on quand le corps et l'esprit luttent pour rétablir l'équilibre ? Existe-t-il un moyen d'en tirer parti ?"
        },
        {
          "nom": "Reflet arcanique",
          "tag": "Action",
          "texte": "Dépensez une Peur pour que n'importe quel nombre de PJ aperçoivent dans le cristal un reflet de ce qu'ils ont été ou pourraient devenir. Chaque cible doit faire un jet de réaction d'Instinct. Les cibles qui réussissent voient une vision de leur meilleur soi et peuvent remplacer une Expérience. Les cibles qui échouent voient une vision de leur sombre passé, ou d'un avenir plus sombre encore, et doivent marquer un Stress. Vous gagnez une Peur pour chaque cible qui a échoué.",
          "questions": "Qui les PJ voient-ils de l'autre côté du cristal ? Qu'est-ce que cela leur fait ressentir ?"
        },
        {
          "nom": "Terrain tranchant comme un rasoir",
          "tag": "Réaction",
          "texte": "Quand un PJ rate un jet pour naviguer dans les Terres, il doit faire un jet de réaction de Finesse. En cas d'échec, il se coupe sur les arêtes tranchantes du terrain. Des éclats de cristal magique s'incrustent dans sa blessure et grandissent lentement, le Cristallisant. Activez un compte à rebours de Cristal (1) pour ce PJ. Tant qu'il n'a pas retiré la condition avec un jet de Savoir réussi, un PJ Cristallisant fait monter son compte à rebours de Cristal au début de chaque repos et subit un malus à son Évasion égal à sa valeur. Le compte à rebours prend fin quand la condition est effacée.",
          "questions": "À quoi ressemble le cristal en grandissant ? Quelle sensation donne-t-il ?"
        },
        {
          "nom": "Mélange psychique",
          "tag": "Réaction",
          "texte": "Quand les PJ prennent un repos long, vous pouvez dépenser une Peur pour échanger leurs psychés. Rassemblez toutes les feuilles de personnage des joueurs, puis mélangez-les et redistribuez-les au hasard. Chaque feuille de personnage vient avec les cartes de Domaine et les aides de jeu de ce PJ. Un PJ peut retrouver sa psyché avec un jet de Savoir réussi, après quoi il échange sa feuille avec le joueur qui a sa feuille de personnage d'origine.",
          "questions": "Que ressent-on dans la peau de quelqu'un d'autre ? Si vous pouviez choisir de rester comme eux d'une seule manière, laquelle serait-ce ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "tour-de-l-archimage",
      "nom": "Tour de l'archimage",
      "palier": 3,
      "type": "Exploration",
      "description": "Une flèche d'une hauteur impossible qui perce les cieux et résonne d'une puissance immense.",
      "impulsions": "Collecter l'énergie magique, épuiser les intrus, révéler l'inconnu, déchaîner des explosions de puissance magique",
      "difficulte": 16,
      "adversaires": "Créations alchimiques (Chimère, Lamie, Manticore), Archimage",
      "aptitudes": [
        {
          "nom": "Défenses mystiques",
          "tag": "Passive",
          "texte": "Compte à rebours (12). Pour gravir la tour, les PJ doivent accomplir le compte à rebours. En cas d'échec ou de jet avec Peur, ils déclenchent l'un des nombreux pièges et dangers arcaniques de l'archimage et subissent 3d10 dégâts magiques. En cas d'échec avec Peur, les dégâts infligés gagnent un bonus égal au niveau du PJ.",
          "questions": "Que vous disent les défenses de l'archimage sur son domaine d'expertise précis ? Quel style ou fioriture caractéristique tous les pièges et dangers partagent-ils ?"
        },
        {
          "nom": "Aire de l'archimage",
          "tag": "Passive",
          "texte": "L'étage supérieur de la tour est un laboratoire, une bibliothèque et un atelier à multiples salles contenant tout le nécessaire pour étudier la magie sous ses formes les plus élevées. Un PJ ayant un trait d'incantation peut faire un jet de Savoir pour participer aux recherches de l'archimage. En cas de succès, il gagne un bonus de +1 à ses jets d'incantation jusqu'à son prochain repos long. En cas d'échec, son investigation tourne mal et il subit 3d8+4 dégâts magiques.",
          "questions": "Quelle partie de l'aire vous appelle ? Que vous révèlent les notes de l'archimage ?"
        },
        {
          "nom": "Adversaires amalgamés",
          "tag": "Réaction",
          "texte": "Dépensez une Peur pour invoquer deux adversaires à portée Proche d'un PJ. Chaque adversaire peut utiliser les aptitudes de l'autre comme si elles étaient les siennes.",
          "questions": "Quelles créatures l'archimage a-t-il choisi de combiner ? Qu'espère-t-il apprendre ainsi ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "convergence-la-cite-des-portails",
      "nom": "Convergence, la cité des portails",
      "palier": 4,
      "type": "Social",
      "description": "Une métropole tentaculaire au nexus de la création, où se rassemblent des figures influentes de tous les royaumes.",
      "impulsions": "Les confronter à des coutumes étrangères, les éblouir par une variété infinie, les tenter avec l'impossible",
      "difficulte": 20,
      "adversaires": "Figures de pouvoir (Archi-nécromancien, Seigneur démon Berzug, Chef de guerre titan de feu, Haut séraphin, Monarque, Oracle de la Fin, Seigneur vampire), Voyageurs et habitants (Tous)",
      "aptitudes": [
        {
          "nom": "Les impossibilités abondent",
          "tag": "Passive",
          "texte": "Convergence est un nexus de dieux, de monstres, d'extraterrestres et de toutes sortes de voyageurs interdimensionnels. Comme la vie mortelle est généralement indigne de l'intérêt de ces êtres, les PJ ont le désavantage aux jets d'action pour les influencer, sauf s'ils disposent d'un moyen de pression sur eux ou savent ce qui importe au PNJ.",
          "questions": "Quel genre d'être règne actuellement sur la ville ? Quelles étranges coutumes pratique-t-il ? Quel PJ est le plus déconcerté ou offensé par elles, et quel PJ les adopte comme siennes ?"
        },
        {
          "nom": "Dans le multivers",
          "tag": "Passive",
          "texte": "La cité de Convergence possède un portail ou une porte vers chaque royaume de l'existence.",
          "questions": "Où (ou quand) le groupe veut-il aller ? Où se trouve ce portail, et qui contrôle cette zone ?"
        },
        {
          "nom": "Inventaire infini",
          "tag": "Passive",
          "texte": "Cette ville a la solution à tout problème, si vous pouvez la trouver. Un PJ à la recherche d'un objet particulier aux propriétés merveilleuses peut faire un jet d'Instinct ou de Présence pour le trouver dans le marché pandimensionnel de la ville.\n- Succès critique : le PJ trouve l'objet parfait, et le marchand qui le possède ne veut en échange que quelque chose que le PJ juge sans importance.\n- Succès avec Espoir : le PJ trouve l'objet parfait et peut l'échanger contre quelque chose de valeur égale.\n- Succès avec Peur : le PJ trouve l'objet parfait, mais le marchand qui le possède ne l'échangera que contre quelque chose que le groupe ne peut pas lui donner... pour l'instant.\n- Tout échec : le PJ doit marquer un Stress en partant dans une poursuite vaine, et revient les mains vides. Le PJ peut marquer un Stress supplémentaire pour transformer ce résultat en succès avec Peur.",
          "questions": "Qui possède l'objet dont le groupe a besoin ? Que veut-il en retour ?"
        },
        {
          "nom": "Pas de vagues",
          "tag": "Passive",
          "texte": "Compte à rebours (6). Comme tout est possible à Convergence, la ville maintient une bureaucratie labyrinthique qui édicte et fait respecter des ordonnances régissant tous les échanges et interactions entre les royaumes. Quand le groupe arrive à Convergence, activez le compte à rebours. Il diminue quand un PJ fait quelque chose qui perturbe le délicat équilibre politique de la ville. Quand il se déclenche, les PJ deviennent Recherchés jusqu'à ce qu'ils lavent leur nom auprès des autorités. Quand un PJ Recherché fait un jet avec Peur, vous pouvez invoquer 1d4 Exécuteurs temporels qui apparaissent à portée Très proche, prennent immédiatement le devant de la scène et tentent d'appréhender le groupe.",
          "questions": "Qu'a fait le groupe (ou que prévoit-il de faire) qui attire l'attention et le courroux des fonctionnaires de la ville ? Comment peut-il réparer le problème qu'il a causé ?"
        },
        {
          "nom": "Une offre qu'on ne peut refuser",
          "tag": "Action",
          "texte": "Convergence abrite un réseau ténu de factions rivales. Dépensez une Peur pour que l'une d'elles propose au groupe une solution facile à un problème difficile en échange de son allégeance. Si le groupe refuse, chaque PJ doit marquer un Stress et ne pourra plus se tourner vers cette faction pour obtenir de l'aide à l'avenir.",
          "questions": "Quelle faction offre son soutien au groupe ? Contre qui veut-elle que le groupe agisse ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "royaume-de-la-lune",
      "nom": "Royaume de la Lune",
      "palier": 4,
      "type": "Exploration",
      "description": "Les ruines mystérieuses, lumineuses et isolées d'un royaume lunaire disparu depuis longtemps, où résonnent une magie oubliée et une technologie ancienne.",
      "impulsions": "Brouiller la frontière entre rêve et réalité, laisser la conscience monter et descendre comme la marée, murmurer les échos d'une opulence ancienne",
      "difficulte": 20,
      "adversaires": "Faune locale (Cryptimites, Yufos), Esprit de la Reine de la Lune (Archi-nécromancien), Reliques réveillées (Créatures artificielles, Gardiens de caveau)",
      "aptitudes": [
        {
          "nom": "Atmosphère onirique",
          "tag": "Passive",
          "texte": "Tout dans le Royaume de la Lune semble onirique et flottant. Un saut vous emporte loin, et le son est étouffé. L'air est rempli d'une poussière cristalline irisée qui change en réponse aux pensées ou aux émotions et peut enregistrer des souvenirs du passé ou des visions de l'avenir. Une fois par scène, un PJ peut faire un jet d'Instinct pour lire les impressions psychiques laissées par des événements passés.",
          "questions": "Quelles odeurs ou sensations éthérées les PJ ressentent-ils ? Comment l'atmosphère influence-t-elle les interactions entre eux ?"
        },
        {
          "nom": "Ruines silencieuses",
          "tag": "Passive",
          "texte": "L'architecture argentée et bleue de la capitale, qui se dresse haut, est intacte mais envahie de flore bioluminescente qui pulse au rythme des marées lunaires. Un PJ qui réussit un jet de Finesse peut récolter une plante lunaire sans la tuer. Un PJ qui mange une ou plusieurs plantes lunaires vivantes gagne un bonus de +1 aux jets d'incantation jusqu'à son prochain repos long.",
          "questions": "À quelles plantes terrestres ces plantes lunaires ressemblent-elles ? Quel goût ont-elles, et comment affectent-elles physiquement celui qui les mange ?"
        },
        {
          "nom": "Astrologium lunaire",
          "tag": "Passive",
          "texte": "Au sommet de la plus haute tour de la capitale se trouve une machine à rêves en cristal capable de rejouer l'histoire. Un PJ qui réussit un jet de Savoir peut réparer la machine. Une fois la machine réparée, un PJ qui réussit un jet de Présence peut l'utiliser pour apprendre l'histoire de l'essor et de la chute du Royaume de la Lune.\n- Succès critique : le PJ reçoit des informations claires sur les événements et figures clés de l'histoire du Royaume de la Lune et gagne 1d4 Espoir, qu'il peut répartir entre les PJ avec qui il partage ses visions.\n- Succès avec Espoir : le PJ reçoit des informations claires sur les événements et figures clés de l'histoire du Royaume de la Lune.\n- Tout jet avec Peur : le PJ reçoit de brefs éclairs et sensations liés à la fin cataclysmique du royaume. Si le jet était un échec, le PJ subit 4d10+5 dégâts magiques, les visions assaillant sa psyché.",
          "questions": "À quoi ressemble cette machinerie, et comment fonctionne-t-elle ? Qu'apprennent les PJ sur l'histoire du Royaume de la Lune ?"
        },
        {
          "nom": "Le tombeau de la Reine de la Lune",
          "tag": "Réaction",
          "texte": "Le dernier souverain du Royaume de la Lune a été préservé dans un cercueil de sélénite au plus profond de la citadelle. Sur un jet avec Peur pour enquêter dans sa chambre, son ombre funeste s'éveille et attaque le groupe. Invoquez l'Esprit de la Reine de la Lune (Archi-nécromancien) à côté de son cercueil et donnez-lui immédiatement le devant de la scène.",
          "questions": "Qui l'a enterrée ici, et pourquoi ? Peut-elle être ressuscitée, ou la destruction de son esprit est-elle la seule voie ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "royaume-des-morts",
      "nom": "Royaume des morts",
      "palier": 4,
      "type": "Traversée",
      "description": "Une étendue d'eau calme apparemment infinie, sans couleur ni rire.",
      "impulsions": "Noyer dans le désespoir, aspirer la vie, tenter vers un sommeil sans fin",
      "difficulte": 20,
      "adversaires": "Tous (voir « Habitants marqués par la mort »)",
      "aptitudes": [
        {
          "nom": "Mer de tristesse",
          "tag": "Passive",
          "texte": "Ce royaume est un océan argenté sans limites recouvert d'une grisaille sans étoiles ni horizon visibles. Le courant subtil tire inexorablement les jambes des PJ, mais il est trop doux pour troubler la surface plate et miroitante de l'eau. Les jets d'action pour naviguer dans ce royaume ont le désavantage.",
          "questions": "Quels dangers se trouvent sous la surface ? Comment trouver le bord d'un monde sans fin, et que se trouve-t-il au-delà ?"
        },
        {
          "nom": "Le fardeau de l'éveil",
          "tag": "Passive",
          "texte": "Il est impossible de dormir ici. Quand le groupe se repose, chaque PJ ne peut choisir qu'un seul mouvement de temps mort.",
          "questions": "Quelles pensées gardent les PJ éveillés ici ? Comment peuvent-ils se soutenir mutuellement sans sombrer eux-mêmes dans le désespoir ?"
        },
        {
          "nom": "Habitants marqués par la mort",
          "tag": "Passive",
          "texte": "Toutes les créatures mortelles passent un jour par ce lieu lors de leur voyage vers l'autre côté, mais celles qui s'attardent ou errent sont déformées et mutées par la grisaille. Tous les adversaires que le groupe rencontre ici sont Fanés. Décrivez comment leur séjour ici les a déformés en quelque chose de pire que mort. Quand un PJ subit des dégâts d'une attaque d'un adversaire Fané, il doit aussi marquer un Stress. Si un PJ est vaincu ici, il devient un adversaire Fané contrôlé par le MJ au lieu d'effectuer un mouvement de mort.",
          "questions": "Pourquoi ces créatures refusent-elles de passer à autre chose ? Y a-t-il une logique dans les formes dans lesquelles la grisaille les fane ?"
        },
        {
          "nom": "Le froid de la mort",
          "tag": "Action",
          "texte": "Dépensez une Peur pour forcer un PJ à faire un jet de réaction de Présence tandis que la Mer de tristesse aspire la chaleur de son sang et de ses os. En cas d'échec, il subit 4d10 dégâts magiques directs. En cas de succès, il doit marquer un Stress.",
          "questions": "Que ressent-on quand on se voit drainer de force la volonté de vivre ? Comment vous concentrez-vous malgré le désespoir ?"
        },
        {
          "nom": "Abandonnez tout espoir",
          "tag": "Réaction",
          "texte": "Quand un PJ dépense de l'Espoir dans le Royaume des morts, il doit lancer un d6. Sur un résultat impair, il doit dépenser un Espoir supplémentaire ou perdre le bénéfice de l'Espoir déjà dépensé.",
          "questions": "Quels regrets rongent le bord de votre conscience pendant que vous êtes ici ? Quels souvenirs vous rattachent encore au Royaume mortel ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    },
    {
      "id": "tribunal-du-temps",
      "nom": "Tribunal du temps",
      "palier": 4,
      "type": "Événement",
      "description": "Un ou plusieurs PJ sont arrachés de force à la ligne temporelle et jugés pour des crimes contre la continuité.",
      "impulsions": "Trouver la vérité, rendre la justice, annuler leurs pouvoirs",
      "difficulte": 20,
      "adversaires": "Juge (Monarque), Jury (Choeur sacré), Bourreaux (Gardien du continuum)",
      "aptitudes": [
        {
          "nom": "Hors du temps",
          "tag": "Passive",
          "texte": "Le procès se déroule dans une dimension de poche qui existe au-delà de l'influence des autres royaumes. Tant qu'ils sont ici, les PJ ne peuvent pas utiliser leurs aptitudes et capacités. Chaque joueur doit placer ses cartes de Domaine dans sa réserve.",
          "questions": "Qu'y a-t-il d'autre que la salle d'audience dans cette dimension de poche ? Quels pouvoirs maintiennent la barrière universelle qui protège ce lieu ?"
        },
        {
          "nom": "Procès par jury",
          "tag": "Passive",
          "texte": "À la fin des débats, un jury vote pour acquitter ou condamner le groupe. Quand la cour est ouverte, faites présenter à l'accusation son dossier contre les PJ et lancez un compte à rebours (9). Il diminue quand un PJ fait un jet d'action. Quand il se déclenche, les PJ et le MJ lancent leurs dés de Jugement. Si le résultat total du groupe égale ou dépasse celui du MJ, le jury les acquitte.",
          "questions": "Quels PJ sont jugés ? De quoi sont-ils accusés ? Quelles peines potentielles un verdict de culpabilité entraînerait-il ?"
        },
        {
          "nom": "Avocat de la défense",
          "tag": "Passive",
          "texte": "Un PJ peut faire un jet d'action pour plaider son innocence (comme un jet de Savoir pour interpréter la lettre de la loi, un jet de Présence pour jouer sur les émotions du jury, ou un jet d'Instinct pour relever les failles de l'argumentation de l'accusation). En cas de succès, le groupe gagne un dé de Jugement d6. En cas de succès critique, il en gagne deux. En cas d'échec, l'accusation réfute l'argument du PJ, et vous gagnez un dé de Jugement d6.",
          "questions": "Quel est le point le plus faible de l'argumentation de l'accusation ? Quel est le point le plus fort de la défense du groupe ?"
        },
        {
          "nom": "Avocat de l'accusation",
          "tag": "Action",
          "texte": "L'accusation présente un élément accablant (comme un témoignage oculaire, des résultats d'analyses ou une pièce à conviction prélevée sur la scène du crime), et vous gagnez un dé de Jugement d6. Un PJ peut marquer un Stress pour tenter de réfuter la preuve avec un jet de réaction de Savoir, d'Instinct ou de Présence. En cas de succès, le groupe gagne le dé de Jugement à votre place. En cas d'échec, vous gagnez un dé de Jugement d6 supplémentaire.",
          "questions": "Qui dirige l'accusation, et quel est son lien avec le Conseil du temps ? Sur quelle magie ou technologie ce tribunal s'appuie-t-il pour présenter et consigner les preuves ?"
        },
        {
          "nom": "« Silence dans la salle ! »",
          "tag": "Réaction",
          "texte": "Quand les PJ tentent de s'échapper ou de mettre fin au procès par la force, invoquez un nombre d'Exécuteurs temporels égal au nombre de PJ dans la scène à portée Proche et donnez immédiatement le devant de la scène à l'un d'eux.",
          "questions": "L'autorité de ce tribunal mérite-t-elle le respect ? Qu'est-ce qui, au-delà de la puissance du Conseil du temps et de ses exécuteurs, justifie leur contrôle sur la ligne temporelle ?"
        }
      ],
      "source": "Espoir et Peur (2027)"
    }
  ]
};
