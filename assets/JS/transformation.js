// Transformations : forme particulière qu'un personnage peut adopter ou subir.
// Chargé par index.html via <script src="assets/JS/transformation.js"></script>
const TRANSFORMATIONS_DATA = {
  transformations: [
    {
      id: "demi-dieux",
      nom: "Demi-dieux",
      description:
        "Les demi-dieux sont des créatures mortelles dont les veines coulent avec le sang des dieux.",
      aptitudes: [
        {
          nom: "Doué",
          description:
            "Vous gagnez un bonus de +1 à action, réaction, et jet de dégâts.",
        },
        {
          nom: "Poids de la divinité",
          description:
            "Lorsque vous échouez à un lancer, vous devez marquer un stress ou le MJ gagne un Peur.",
        },
      ],
      source: "Espoir et Peur (2027)",
    },
    {
      id: "fantome",
      nom: "Fantôme",
      description:
        "Les fantômes sont les esprits des personnes autrefois vivantes qui sont liées au royaume mortel.",
      aptitudes: [
        {
          nom: "Affaires inachevées",
          description:
            "Travaillez avec votre MJ pour décider quel but ou quel désir vous maintient lié au Royaume Mortel. Lorsque vous remplissez cette condition, vous traversez le voile de la mort.",
        },
        {
          nom: "Éphémère",
          description:
            "Votre corps oscille entre l’être corporel et l’être non corporel. vous êtes résistant à dommages physiques, cependant vous le double dégâts magiques, et vous pouvez dépenser 2 Stress pour traverser momentanément un objet solide.",
        },
      ],
      source: "Espoir et Peur (2027)",
    },
    {
      id: "reanime",
      nom: "Réanimé",
      description: "Les réanimés sont des créatures qui ont été ramenées à la vie par la magie ou la science.",
      aptitudes: [
        {
          nom: "Cadavre",
          description:
            "Pendant un repos, vous pouvez dégager Points de blessure seulement si vous avez accès aux restes d'une créature récemment décédée. Décrivez comment vous utilisez ces matériaux pour entretenir votre cadavre.",
        },
        {
          nom: "Ne restera pas mort",
          description:
            "Quand vous choisissez acte de mort «tout risquer» et échouez, vous pouvez effacer définitivement un PB pour réussir à la place. Lorsque c’est le cas, vous continuez d’utiliser la valeur du Dé d’Espoir pour retirer des PB et du Stress. Lorsque vous marquez définitivement votre dernier PB, vous traversez le voile de la mort.",
        },
      ],
      source: "Espoir et Peur (2027)",
    },
    {
      id: "metamorphes",
      nom: "Métamorphes",
      description:
        "Les métamorphes sont des créatures qui peuvent changer leur forme physique",
      aptitudes: [
        {
          nom: "Changer de forme",
          description:
            "Pendant un repos, vous pouvez échanger votre ascendance actuelle avec une autre ascendance. Lorsque vous le faites, décrivez comment votre apparence change pour refléter cette nouvelle ascendance.",
        },
        {
          nom: "Superficielle",
          description:
            "Vous ne bénéficiez que d’une seule des caractéristiques de l’ascendance choisie, et vous sélectionnez laquelle au moment de choisir l’ascendance. Vous pouvez utiliser un repos pour choisir une autre caractéristique de cette même ascendance.",
        },
      ],
      source: "Espoir et Peur (2027)",
    },
    {
      id: "vampire",
      nom: "Vampire",
      description:
        "Les vampires sont des créatures mort-vivant aux crocs acérés qui se nourrissent du sang des vivants.",
      aptitudes: [
        {
          nom: "Crocs",
          description:
            "Lance une attaque en utilisant la caractéristique de ton choix pour mordre une cible à portée Corps-à-Corps. En cas de réussite, infligez d6 dégâts physiques en utilisant votre Compétence.",
        },
        {
          nom: "Alimentation",
          description:
            "Lors d’une attaque «Crocs» réussie contre une créature qui peut saigner, vous pouvez marquer un Stress pour vous alimenter. Placez un nombre de jetons sur cette carte égal au nombre de PB que la cible marque. Vous pouvez en stocker jusqu’à 6 à la fois. Avant de faire un jet d’action, vous pouvez dépenser un jeton pour changer votre Dé de Peur à d20. Lorsque vous prenez un repos long, retirez un jeton. Tant qu’il n’y a pas de jeton sur cette carte, vous effectuez les jets d’action et de réaction avec un désavantage.",
        },
      ],
      source: "Espoir et Peur (2027)",
    },
    {
      id: "loup-garou",
      nom: "Loup-garou",
      description:
        "Les loups-garous sont des créatures qui se transforment en grands loups surnaturels.",
      aptitudes: [
        {
          nom: "Forme de Loup",
          description:
            "Lorsque vous marquez 1 PB ou plus, vous pouvez marquer un Stress pour entrer en Forme de Loup. Tant que vous êtes dans cette forme, vous gagnez un bonus de 1d10 aux jets d’attaque et de dégâts. Lorsque vous lancez un jet avec Espoir alors que vous êtes en Forme de Loup, vous devez marquer un Stress. Votre Forme de Loup dure tant que vous ne passez pas dans votre « Carnage hurlant » ou tant que vous ne vous reposez pas.",
        },
        {
          nom: "Carnage hurlant",
          description:
            "Lorsque vous marquez votre dernier Stress en Forme de Loup, vous entrez dans une folie meurtrière. Lancez un nombre de D20 égal à votre palier et infligez autant de dégâts physiques à toutes les créatures dans une portée Très Proche, puis sortez de la Forme de Loup.",
        },
      ],
      source: "Espoir et Peur (2027)",
    },
  ],
};
