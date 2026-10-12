// Pugiliste - sous-classe Artiste martial : postures de combat et compteur Focus.
// Chargé par index.html via <script src="assets/JS/artiste_martiale.js"></script>
const ARTISTE_MARTIALE_DATA = {
  sous_classe: "Artiste martial",
  classe: "Pugiliste",

  // Compteur "Focus" : limité de 0 à 6
  focus: { min: 0, max: 6 },

  regles: {
    posture: {
      titre: "Posture",
      texte:
        "Les positions sont des positionnements corporels spéciaux qui permettent aux artistes martiaux d'attaquer, de réagir ou de se défendre au combat. Chaque position confère à votre personnage une capacité, un bonus ou une fonctionnalité différente lorsqu'il est actif.",
      note: "Prenez la fiche des Postures Martiales et choisissez deux postures du palier 1. À chaque montée de niveau, choisissez une posture supplémentaire du même tier ou d'un tier inférieur.",
    },
    focus: {
      titre: "Focus",
      texte:
        "Le Focus représente l'équilibre, la clarté et le contrôle de votre personnage. Une fois par repos pendant un moment de calme, vous pouvez vider votre esprit et recentrer vos instincts martiaux. Effacez votre compteur Focus, puis lancez un certain nombre de d6 égal à votre Instinct et gagnez Focus égal au résultat le plus élevé obtenu. Vous pouvez détenir un maximum de 6 Focus.",
    },
    changement: {
      titre: "Changer de posture",
      texte:
        "Vous pouvez dépenser un Focus pour passer à une Posture de combat et obtenir ses effets. Vous ne pouvez passer qu'aux postures que vous avez marquées comme connues. Lorsque vous adoptez une posture, elle est considérée comme votre position active jusqu'à ce que vous en abandonniez.\n\nVous ne pouvez pas passer à plus d'une position active à la fois. Tant que vous n'adoptez pas une posture, vous n'êtes pas considéré comme étant dans une posture ou comme ayant une posture active.",
    },
    sortie: {
      titre: "Sortie d'une posture",
      texte:
        "Si vous êtes déjà en posture et passez à une autre, vous sortez automatiquement de l'ancienne. Vous sortez aussi de votre posture active si vous subissez des dégâts Grave ou si vous marquez votre dernier PB. Sinon, vous sortez à la fin de la scène et vous perdez les bénéfices en cours.",
    },
  },

  paliers: [
    {
      palier: 1,
      postures: [
        {
          id: "favori",
          nom: "Favori",
          description: "Donne un bonus de dégâts égal à un trait de votre choix.",
        },
        {
          id: "revigorant",
          nom: "Revigorant",
          description:
            "À chaque attaque réussie, lancez un d4. Résultat 4 = gagnez un Focus.",
        },
        {
          id: "rapide",
          nom: "Rapide",
          description:
            "Lors de votre attaque, vous pouvez dépenser un Focus ou marquer un Stress pour viser une autre créature dans la portée avec cette attaque.",
        },
        {
          id: "fiable",
          nom: "Fiable",
          description: "+1 à vos jets d'attaque.",
        },
      ],
    },
    {
      palier: 2,
      postures: [
        {
          id: "agressif",
          nom: "Agressif",
          description:
            "-1 à votre Esquive. Lors d'une attaque réussie, lancez un dé de dégâts supplémentaire et retirez le plus bas résultat.",
        },
        {
          id: "ancre",
          nom: "Ancré",
          description:
            "+2 à vos seuils de dégâts. Tant que vous êtes en Ancré, vous ne pouvez pas être déplacé contre votre volonté.",
        },
        {
          id: "defensive",
          nom: "Défensive",
          description:
            "Les jets d'attaque vous visant en mêlée ont Désavantage à moins que l'attaquant dépense un Stress pour annuler ce Désavantage.",
        },
        {
          id: "dun-autre-monde",
          nom: "D'un autre monde",
          description:
            "À une attaque réussie, vous pouvez infliger des dégâts physiques ou magiques.",
        },
      ],
    },
    {
      palier: 3,
      postures: [
        {
          id: "agripper",
          nom: "Agripper",
          description:
            "À une attaque réussie en mêlée, dépensez un Focus ou marquez un Stress pour retenir temporairement la cible ou la projeter jusqu'à Portée Proche.",
        },
        {
          id: "effrayant",
          nom: "Effrayant",
          description: "À une attaque réussie, la cible doit marquer un Stress.",
        },
        {
          id: "stable",
          nom: "Stable",
          description:
            "Vous pouvez dépenser un Focus au lieu d'un Emplacement d'Armure pour réduire les dégâts.",
        },
        {
          id: "vigilant",
          nom: "Vigilant",
          description:
            "Quand vous êtes ciblé par une attaque, vous pouvez marquer un Stress pour gagner un bonus de d6 à votre Esquive contre l'attaque.",
        },
      ],
    },
    {
      palier: 4,
      postures: [
        {
          id: "ecrasement",
          nom: "Écrasement",
          description:
            "Quand vous infligez des dégâts Grave, vous pouvez dépenser un Espoir pour forcer la cible à marquer un PB supplémentaire.",
        },
        {
          id: "exigeant",
          nom: "Exigeant",
          description:
            "Quand vous faites un 1 sur un dé de dégâts, vous pouvez le traiter comme la valeur maximale du dé.",
        },
        {
          id: "aiguise",
          nom: "Aiguisé",
          description:
            "Dépensez un Focus avant votre jet d'attaque pour gagner +1 à votre Compétence pour ce jet.",
        },
        {
          id: "isoler",
          nom: "Isoler",
          description:
            "Vous avez un Avantage sur les jets d'attaque lorsqu'il n'y a pas d'autres créatures à Très Proche portée de vous ou de votre cible.",
        },
      ],
    },
  ],
};
