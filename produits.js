/*
  ===========================================================
  LISTE DES PRODUITS
  ===========================================================
  Pour AJOUTER un article : utilise la page ajouter-article.html,
  elle te génère automatiquement le bloc à coller ici, dans le
  tableau PRODUITS (ajoute-le juste après "const PRODUITS = [").

  Pour VENDRE un article : passe "vendu" à true.
  Pour LE REMETTRE EN VENTE plus tard (même article refait) :
  remets "vendu" à false, ou change juste "quantite".

  poids : en grammes, utilisé pour le calcul du nombre d'articles
  dans le panier (pas besoin d'un poids précise, c'est le NOMBRE
  d'articles qui définit le tarif : 4,60€ jusqu'à 5 articles,
  5,50€ au-delà).
  ===========================================================
*/

const PRODUITS = [
  {
    id: "pochette-livres-de-poche-ou-manga-rose-blanc-936",
    nom: "Pochette Livres de Poche ou Manga Rose/Blanc",
    prix: 7,
    description: "Pochette pour ranger vos livres de poche ou vos mangas, avec un petit noeud tout coquette pour le refermer <3",
    categorie: "Pochette",
    vendu: false,
    photos: [
      "images/pochette-livres-rose-blanc.jpg",
      "images/pochette-livres-rose-blanc2.jpg"
    ]
  },
  {
    id: "pochette-livres-de-poche-ou-manga-rose-vert-568",
    nom: "Pochette Livres de Poche ou Manga Rose/Vert",
    prix: 7,
    description: "Pochette pour ranger vos livres de poche ou vos mangas, avec un petit noeud tout coquette pour le refermer <3",
    categorie: "Pochette",
    vendu: false,
    photos: [
      "images/pochette-livres-rose-vert3.jpg",
      "images/pochette-livres-rose-vert2.jpg",
      "images/pochette-livres-rose-vert.jpg"
    ]
  },
  {
    id: "pochette-livres-de-poche-ou-manga-vert-blanc-303",
    nom: "Pochette Livres de Poche ou Manga Vert/Blanc",
    prix: 7,
    description: "Pochette pour ranger vos livres de poche ou vos mangas, avec un petit noeud tout coquette pour le refermer <3",
    categorie: "Pochette",
    vendu: false,
    photos: [
      "images/pochette-livres-vert-blanc.jpg",
      "images/pochette-livres-vert-blanc2.jpg",
      "images/pochette-livres-vert-blanc3.jpg"
    ]
  },
  {
    id: "pochette-livres-de-poche-ou-manga-jaune-marron-259",
    nom: "Pochette Livres de Poche ou Manga Jaune/Marron",
    prix: 7,
    description: "Pochette pour ranger vos livres de poche ou vos mangas, avec un petit noeud tout coquette pour le refermer <3\n\nThème automnale !",
    categorie: "Pochette",
    vendu: false,
    photos: [
      "images/pochette-livres-jaune-marron.jpg",
      "images/pochette-livres-jaune-marron2.jpg"
    ]
  },
    {
    id: "pochette-livres-de-poche-ou-manga-bleu-352",
    nom: "Pochette Livres de Poche ou Manga Bleu",
    prix: 7,
    description: "Petite pochette avec un noeud décoratif <3",
    categorie: "Pochette",
    vendu: false,
    photos: [
      "images/pochette-livres-bleu.jpg",
      "images/pochette-livres-bleu2.jpg",
      "images/pochette-livres-bleu3.jpg"
    ]
  },
    {
    id: "pochette-livres-de-poche-ou-manga-rose-beige-714",
    nom: "Pochette Livres de Poche ou Manga Rose/Beige",
    prix: 7,
    description: "Pochette pour ranger vos livres de poche ou vos mangas, avec un petit noeud tout mignon pour le refermer <3\nThème coquette!",
    categorie: "Pochette",
    vendu: false,
    photos: [
      "images/pochette-livres-rose-beige.jpg",
      "images/pochette-livres-rose-beige2.jpg",
      "images/pochette-livres-rose-beige3.jpg"
    ]
  },
  {
    id: "pochette-livres-de-poche-ou-manga-bordeaux-mauve-964",
    nom: "Pochette Livres de Poche ou Manga Bordeaux/Mauve",
    prix: 7,
    description: "Pochette pour ranger vos livres de poche ou vos mangas, avec un petit noeud tout coquette pour le refermer <3\n\nThème automnale !",
    categorie: "Pochette",
    vendu: false,
    photos: [
      "images/pochette-livres-bordeaux-mauve.jpg",
      "images/pochette-livres-bordeaux-mauve2.jpg",
      "images/pochette-livres-bordeaux-mauve3.jpg"
    ]
  },
  {
    id: "porte-cartes-bleu-150",
    nom: "Porte-Cartes Bleu",
    prix: 4,
    description: "Petit porte-cartes tout mignon qui se referme avec un bouton en forme de pomme <3",
    categorie: "Porte-Cartes",
    vendu: false,
    photos: [
      "images/porte-monnaie-bleu.jpg",
      "images/porte-monnaie-bleu2.jpg"
    ]
  },
  {
    id: "marque-page-etoile-662",
    nom: "Marque-Page Etoile Vert",
    prix: 2,
    description: "Marque-page en forme d'étoile. Adorable format qui rajoute un peu de douceur à vos lectures <3",
    categorie: "Marque-page",
    vendu: false,
    photos: [
      "images/marque-page-etoile-vert.jpg"
    ]
  },
  {
    id: "marque-page-etoile-990",
    nom: "Marque-Page Etoile Jaune",
    prix: 2,
    description: "Marque-page en forme d'étoile. Adorable format qui rajoute un peu de douceur à vos lectures <3",
    categorie: "Marque-page",
    vendu: false,
    photos: [
      "images/marque-page-etoile-jaune.jpg"
    ]
  },
  {
    id: "marque-page-etoile-420",
    nom: "Marque-Page Etoile Blanc",
    prix: 2,
    description: "Marque-page en forme d'étoile. Adorable format qui rajoute un peu de douceur à vos lectures <3",
    categorie: "Marque-page",
    vendu: false,
    photos: [
      "images/marque-page-etoile-blanc.jpg"
    ]
  },
  {
    id: "pochette-liseuse-ou-tablette-bordeaux-182",
    nom: "Pochette Liseuse ou Tablette Bordeaux",
    prix: 14,
    description: "Pochette bordeaux et noire pour liseuse, tablette, ou autre (produits de beauté, d'hygiène, etc.) avec un petit noeud en dentelle ainsi qu'un bouton en forme de coeur. Pièce unique faite à la main avec amour <3\n\nDimensions : environ 15cm (longueur) x 18 cm (largeur)",
    categorie: "Pochette",
    vendu: false,
    photos: [
      "images/pochette-bordeaux-liseuse.jpg"
    ]
  },
  {
    id: "sous-verre-etoile-rose-651",
    nom: "Sous-Verre Etoile Rose",
    prix: 4,
    description: "Petit sous-verre en forme d'étoile tout rose, tout joli !",
    categorie: "Sous-Verre",
    vendu: false,
    photos: [
      "images/sous-verre-etoile-rose.jpg",
      "images/sous-verre-etoile-rose2.jpg"
    ]
  }, 
   {
    id: "pochette-liseuse-ou-tablette-jaune-711",
    nom: "Pochette Liseuse ou Tablette Jaune",
    prix: 14,
    description: "Une pochette pour liseuse ou tablette jaune et turquoise, avec un bouton en forme d'étoile adorable <3",
    categorie: "Pochette",
    vendu: false,
    photos: [
      "images/pochette-liseuse-jaune.jpg",
      "images/pochette-liseuse-jaune2.jpg",
      "images/pochette-liseuse-jaune3.jpg",
      "images/pochette-liseuse-jaune4.jpg"
    ]
  },
    {
    id: "sous-verre-fleur-marine-603",
    nom: "Sous-Verre Fleur Marine",
    prix: 3,
    description: "Petit sous-verre en forme de fleur avec un noeud en déco, de couleur bleu marine ! <3",
    categorie: "Sous-Verre",
    vendu: false,
    photos: [
      "images/sous-verre-fleur-marine.jpg",
      "images/sous-verre-fleur-marine2.jpg",
      "images/sous-verre-fleur-marine3.jpg"
    ]
  },
    {
    id: "sous-verre-fleur-bleu-270",
    nom: "Sous-Verre Fleur Bleu",
    prix: 3,
    description: "Petit sous-verre en forme de fleur avec un noeud en déco ! <3",
    categorie: "Sous-Verre",
    vendu: false,
    photos: [
      "images/sous-verre-fleur-bleu.jpg",
      "images/sous-verre-fleur-bleu2.jpg",
      "images/sous-verre-fleur-bleu3.jpg"
    ]
  },
    {
    id: "sous-verre-coquette-rose-et-vert-666",
    nom: "Sous-Verre Coquette Rose et Vert",
    prix: 2.5,
    description: "Un petit sous-verre adorable avec son petit noeud en déco !",
    categorie: "Sous-Verre",
    vendu: false,
    photos: [
      "images/sous-verre-noeud-vert.jpg",
      "images/sous-verre-noeud-vert2.jpg"
    ]
  },
  {
    id: "pochette-liseuse-ou-tablette-turquoise-342",
    nom: "Pochette Liseuse ou Tablette Turquoise",
    prix: 14,
    description: "Petite pochette pour votre liseuse ou tablette de couleur turquoise et rose, ainsi qu'un petit noeud très coquette !",
    categorie: "Pochette",
    vendu: false,
    photos: [
      "images/pochette-liseuse-turquoise.jpg",
      "images/pochette-liseuse-turquoise2.jpg",
      "images/pochette-liseuse-turquoise3.jpg",
      "images/pochette-liseuse-turquoise4.jpg"
    ]
  },
  {
    id: "sous-verre-etoile-brun-et-vert-311",
    nom: "Sous-Verre Etoile Brun et Vert",
    prix: 4,
    description: "Petit sous-verre en forme d'étoile marron avec du vert autour.",
    categorie: "Sous-Verre",
    vendu: false,
    photos: [
      "images/sous-verre-etoile.jpg",
      "images/sous-verre-etoile2.jpg"
    ]
  }
];
