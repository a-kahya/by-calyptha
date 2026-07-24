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
    prix: 8,
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
    prix: 8,
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
    id: "pochette-livres-de-poche-ou-manga-jaune-marron-259",
    nom: "Pochette Livres de Poche ou Manga Jaune/Marron",
    prix: 8,
    description: "Pochette pour ranger vos livres de poche ou vos mangas, avec un petit noeud tout coquette pour le refermer <3\n\nThème automnale !",
    categorie: "Pochette",
    vendu: false,
    photos: [
      "images/pochette-livres-jaune-marron.jpg",
      "images/pochette-livres-jaune-marron2.jpg"
    ]
    },
    {
    id: "porte-cartes-bleu-150",
    nom: "Porte-Cartes Bleu",
    prix: 5,
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
    prix: 3,
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
    prix: 3,
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
    prix: 3,
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
    prix: 17,
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
