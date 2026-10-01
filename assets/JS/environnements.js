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
    }
  ]
};
