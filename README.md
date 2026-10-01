# La petite dague

Suite d'outils HTML autonomes pour le jeu de rôle Daggerheart. Le site regroupe une fiche de personnage interactive, un catalogue d'équipement et un compendium d'adversaires, utilisables directement dans un navigateur, sans installation ni serveur.

## Contenu du site

### Fiche de personnage (index.html)

Outil de création et de suivi de personnage en plusieurs étapes : classe et sous-classe, ascendance et communauté (y compris ascendance mixte), répartition des attributs, pistes de blessure et de stress, armes et armure, cartes de domaine, expériences et background. Les données du SRD (classes, ascendances, communautés, domaines) sont chargées depuis les fichiers du dossier assets/JS et n'ont pas besoin d'être modifiées pour utiliser l'outil.

Fonctions principales :

- Listes déroulantes avec info-bulles pour l'ascendance, la communauté, la classe et la sous-classe
- Pré-remplissage des caractéristiques liées à la classe choisie (esquive, capacité d'espoir, capacités de classe)
- Piste de blessure calculée automatiquement selon la classe, avec possibilité d'ajuster manuellement les cases en réserve
- Gestion d'une ascendance mixte avec export et import du fichier correspondant pour validation par le maître du jeu
- Sauvegarde et chargement de la fiche au format JSON

### Catalogue d'équipement (catalogue.html)

Liste consultable des armes, armures, objets de butin et consommables du jeu, avec leurs caractéristiques.

### Compendium (Compendium.html)

Bestiaire d'adversaires avec fiches de statistiques incluant les pistes de blessure et de stress à cocher. Permet de dupliquer une fiche pour suivre plusieurs créatures identiques en combat et inclut un éditeur pour créer ou modifier des adversaires personnalisés.

## Utilisation

Le site peut être ouvert directement en local en ouvrant index.html dans un navigateur, ou être hébergé tel quel, par exemple avec GitHub Pages. Aucune étape de compilation n'est nécessaire : il s'agit de fichiers HTML, CSS et JavaScript statiques.

## Structure du dépôt

```
index.html            Fiche de personnage
catalogue.html         Catalogue d'équipement
Compendium.html         Compendium des adversaires
carte_interactive.html  Carte personnalisable multi-univers
assets/JS/             Données du jeu et scripts (classes, ascendances, communautes, domaines, armes, armure, bestiaire, etc.)
assets/Image/           Icônes et illustrations utilisées par les outils
```

## Statut

Projet personnel en développement continu. Les fonctionnalités et la charte graphique évoluent au fil des sessions de jeu.
