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
  /*{
    id: "pochette-livres-de-poche-ou-manga-rose-blanc-936",
    nom: "Pochette Livres de Poche ou Manga Rose/Blanc",
    prix: 7,
    description: "Pochette pour ranger vos livres de poche ou vos mangas, avec un petit noeud tout coquette pour le refermer <3",
    categorie: "Pochette Livre",
    vendu: true,
    photos: [
      "images/pochette-livres-rose-blanc.jpg",
      "images/pochette-livres-rose-blanc2.jpg"
    ]
  },*/
  {
    id: "pochette-liseuse-ou-tablette-rose-889",
    nom: "Pochette Liseuse ou Tablette Rose",
    prix: 10.5,
    description: "Petite pochette pour votre liseuse (Kindle, Kobo) ou votre tablette. Elle peut également servir pour totalement autre chose si l'envie vous prend ! <3",
    categorie: "Pochette Liseuse",
    vendu: true,
    photos: [
      "images/pochette-liseuse-rose1.jpg",
      "images/pochette-liseuse-rose2.jpg",
      "images/pochette-liseuse-rose3.jpg",
      "images/pochette-liseuse-rose4.jpg"
    ]
  },
   {
    id: "pochette-liseuse-ou-tablette-brune-272",
    nom: "Pochette Liseuse ou Tablette Brune",
    prix: 10.5,
    description: "Une pochette pour votre liseuse préférée, couleur brune peluche <3",
    categorie: "Pochette Liseuse",
    vendu: false,
    photos: [
      "images/pochette-brune-liseuse1.jpg",
      "images/pochette-brune-liseuse2.jpg",
      "images/pochette-brune-liseuse3.jpg",
      "images/pochette-brune-liseuse4.jpg"
    ]
  },
  {
    id: "pochette-liseuse-ou-tablette-marron-540",
    nom: "Pochette Liseuse ou Tablette Marron",
    prix: 10.5,
    description: "Une adorable pochette marron et rose pour votre liseuse ou votre tablette.",
    categorie: "Pochette Liseuse",
    vendu: false,
    photos: [
      "images/pochette-liseuse-marron1.jpg",
      "images/pochette-liseuse-marron2.jpg",
      "images/pochette-liseuse-marron3.jpg",
      "images/pochette-liseuse-marron4.jpg"
    ]
  },
   {
    id: "pochette-liseuse-ou-tablette-brune-335",
    nom: "Pochette Liseuse ou Tablette Brune",
    prix: 10.5,
    description: "Une petite pochette marron avec des noeuds roses pâles adorables <3",
    categorie: "Pochette Liseuse",
    vendu: false,
    photos: [
      "images/pochette-liseuse-brun1.jpg",
      "images/pochette-liseuse-brun2.jpg",
      "images/pochette-liseuse-brun3.jpg",
      "images/pochette-liseuse-brun4.jpg"
    ]
  },
  {
    id: "pochette-liseuse-ou-tablette-carreaux-754",
    nom: "Pochette Liseuse ou Tablette Carreaux",
    prix: 10.5,
    description: "Pochette pour votre liseuse (Kobo, Kindle) avec un petit bouton à carreaux en forme de pomme !",
    categorie: "Pochette Liseuse",
    vendu: false,
    photos: [
      "images/pochette-liseuse-carreaux1.jpg",
      "images/pochette-liseuse-carreaux2.jpg",
      "images/pochette-liseuse-carreaux3.jpg",
      "images/pochette-liseuse-carreaux4.jpg"
    ]
  },
  /*{
    id: "pochette-livres-de-poche-ou-manga-rose-vert-568",
    nom: "Pochette Livres de Poche ou Manga Rose/Vert",
    prix: 7,
    description: "Pochette pour ranger vos livres de poche ou vos mangas, avec un petit noeud tout coquette pour le refermer <3",
    categorie: "Pochette Livre",
    vendu: true,
    photos: [
      "images/pochette-livres-rose-vert3.jpg",
      "images/pochette-livres-rose-vert2.jpg",
      "images/pochette-livres-rose-vert.jpg"
    ]
  },*/
  /*{
    id: "pochette-livres-de-poche-ou-manga-vert-blanc-303",
    nom: "Pochette Livres de Poche ou Manga Vert/Blanc",
    prix: 7,
    description: "Pochette pour ranger vos livres de poche ou vos mangas, avec un petit noeud tout coquette pour le refermer <3",
    categorie: "Pochette Livre",
    vendu: false,
    photos: [
      "images/pochette-livres-vert-blanc.jpg",
      "images/pochette-livres-vert-blanc2.jpg",
      "images/pochette-livres-vert-blanc3.jpg"
    ]
  },*/
  {
    id: "pochette-livres-de-poche-ou-manga-jaune-marron-259",
    nom: "Pochette Livres de Poche ou Manga Jaune/Marron",
    prix: 4.5,
    description: "Pochette pour ranger vos livres de poche ou vos mangas, avec un petit noeud tout coquette pour le refermer <3\n\nThème automnale !",
    categorie: "Pochette Livre",
    vendu: false,
    photos: [
      "images/pochette-livres-jaune-marron.jpg",
      "images/pochette-livres-jaune-marron2.jpg"
    ]
  },
    {
    id: "pochette-livres-de-poche-ou-manga-bleu-352",
    nom: "Pochette Livres de Poche ou Manga Bleu",
    prix: 4.5,
    description: "Petite pochette avec un noeud décoratif <3",
    categorie: "Pochette Livre",
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
    prix: 7.5,
    description: "Pochette pour ranger vos livres de poche ou vos mangas, avec un petit noeud tout mignon pour le refermer <3\nThème coquette!",
    categorie: "Pochette Livre",
    vendu: true,
    photos: [
      "images/pochette-livres-rose-beige.jpg",
      "images/pochette-livres-rose-beige2.jpg",
      "images/pochette-livres-rose-beige3.jpg"
    ]
  },
  {
    id: "pochette-livres-de-poche-ou-manga-bordeaux-mauve-964",
    nom: "Pochette Livres de Poche ou Manga Bordeaux/Mauve",
    prix: 7.5,
    description: "Pochette pour ranger vos livres de poche ou vos mangas, avec un petit noeud tout coquette pour le refermer <3\n\nThème automnale !",
    categorie: "Pochette Livre",
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
    prix: 4.5,
    description: "Petit porte-cartes tout mignon qui se referme avec un bouton en forme de pomme <3",
    categorie: "Porte-Cartes",
    vendu: true,
    photos: [
      "images/porte-monnaie-bleu.jpg",
      "images/porte-monnaie-bleu2.jpg"
    ]
  },
  /*{
    id: "marque-page-etoile-662",
    nom: "Marque-Page Etoile Vert",
    prix: 2,
    description: "Marque-page en forme d'étoile. Adorable format qui rajoute un peu de douceur à vos lectures <3",
    categorie: "Marque-page",
    vendu: true,
    photos: [
      "images/marque-page-etoile-vert.jpg"
    ]
  },*/
  {
    id: "marque-page-etoile-990",
    nom: "Marque-Page Etoile Jaune",
    prix: 2,
    description: "Marque-page en forme d'étoile. Adorable format qui rajoute un peu de douceur à vos lectures <3",
    categorie: "Marque-page",
    vendu: true,
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
    prix: 10.5,
    description: "Pochette bordeaux et noire pour liseuse, tablette, ou autre (produits de beauté, d'hygiène, etc.) avec un petit noeud en dentelle ainsi qu'un bouton en forme de coeur. Pièce unique faite à la main avec amour <3\n\nDimensions : environ 15cm (longueur) x 18 cm (largeur)",
    categorie: "Pochette Liseuse",
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
    prix: 10.5,
    description: "Une pochette pour liseuse ou tablette jaune et turquoise, avec un bouton en forme d'étoile adorable <3",
    categorie: "Pochette Liseuse",
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
      "images/sous-verre-fleur-bleu2.jpg"
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
    prix: 10.5,
    description: "Petite pochette pour votre liseuse ou tablette de couleur turquoise et rose, ainsi qu'un petit noeud très coquette !",
    categorie: "Pochette Liseuse",
    vendu: false,
    photos: [
      "images/pochette-liseuse-turquoise.jpg",
      "images/pochette-liseuse-turquoise2.jpg",
      "images/pochette-liseuse-turquoise3.jpg",
      "images/pochette-liseuse-turquoise4.jpg"
    ]
  },
    {
    id: "pochette-livre-rose-pastel-537",
    nom: "Pochette Livre Rose Pastel",
    prix: 7.5,
    description: "Une petite pochette pour livres de poche, peut en accueillir jusque 2.",
    categorie: "Pochette Livre",
    vendu: true,
    photos: [
      "images/pochette-livres-rose-pastel1.jpeg",
      "images/pochette-livres-rose-pastel2.jpeg"
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
  },
    {
    id: "trousse-a-maquillage-rose-rouge-631",
    nom: "Trousse à Maquillage Rose/Rouge",
    prix: 5.5,
    description: "Petite trousse à maquillage aux couleurs de la Saint-Valentin! <3",
    categorie: "Trousse à Maquillage",
    vendu: false,
    photos: [
      "images/trousse-maquillage-rose-rouge1.jpeg",
      "images/trousse-maquillage-rose-rouge2.jpeg",
      "images/trousse-maquillage-rose-rouge3.jpeg",
      "images/trousse-maquillage-rose-rouge4.jpeg"
    ]
  },
    {
    id: "trousse-a-maquillage-rose-117",
    nom: "Trousse à Maquillage Rose",
    prix: 5.5,
    description: "Petite trousse à maquillage super mignonne !",
    categorie: "Trousse à Maquillage",
    vendu: false,
    photos: [
      "images/trousse-maquillage-rose1.jpeg",
      "images/trousse-maquillage-rose2.jpeg",
      "images/trousse-maquillage-rose3.jpeg"
    ]
  },
    {
    id: "trousse-a-maquillage-rose-a-bouton-brun-656",
    nom: "Trousse à Maquillage Rose à Bouton Brun",
    prix: 5.5,
    description: "Petite trousse à maquillage super mignonne !",
    categorie: "Trousse à Maquillage",
    vendu: false,
    photos: [
      "images/trousse-maquillage-rose-bouton1.jpeg",
      "images/trousse-maquillage-rose-bouton2.jpeg",
      "images/trousse-maquillage-rose-bouton3.jpeg"
    ]
  },
    {
    id: "pochette-liseuse-ou-maquillage-fluttershy-269",
    nom: "Pochette Liseuse ou Maquillage Fluttershy",
    prix: 10.5,
    description: "Pochette pour maquillage, liseuse ou tablette.",
    categorie: "Pochette Liseuse",
    vendu: false,
    photos: [
      "images/pochette-liseuse-pastel-jaune1.jpeg",
      "images/pochette-liseuse-pastel-jaune2.jpeg",
      "images/pochette-liseuse-pastel-jaune3.jpeg",
      "images/pochette-liseuse-pastel-jaune4.jpeg"
    ]
  },
    {
    id: "pochette-liseuse-ou-tablette-bleu-electrique-412",
    nom: "Pochette Liseuse ou Tablette Bleu Electrique",
    prix: 10.5,
    description: "Petite pochette bleue électrique pour liseuse, maquillage, ou tablette.",
    categorie: "Pochette Liseuse",
    vendu: false,
    photos: [
      "images/pochette-liseuse-bleu-electrique1.jpeg",
      "images/pochette-liseuse-bleu-electrique2.jpeg",
      "images/pochette-liseuse-bleu-electrique3.jpeg",
      "images/pochette-liseuse-bleu-electrique4.jpeg"
    ]
  },
    {
    id: "lot-de-3-marque-pages-roses-834",
    nom: "Lot de 3 marque-pages roses",
    prix: 5.5,
    description: "Un petit lot de 3 marque-pages en forme d'étoile <3",
    categorie: "Marque-page",
    vendu: false,
    photos: [
      "images/lot-marque-page-rose1.jpeg",
      "images/lot-marque-page-rose2.jpeg"
    ]
  },
    {
    id: "lot-de-3-marque-pages-bleus-977",
    nom: "Lot de 3 marque-pages bleus",
    prix: 5.5,
    description: "Un petit lot de 3 marque-pages bleus.",
    categorie: "Marque-page",
    vendu: false,
    photos: [
      "images/lot-marque-page-bleu.jpeg"
    ]
  },
    {
    id: "lot-de-3-marque-pages-de-noel-290",
    nom: "Lot de 3 marque-pages de Noel",
    prix: 5.5,
    description: "Un lot de 3 marque-pages aux couleurs de Noel!",
    categorie: "Marque-page",
    vendu: false,
    photos: [
      "images/lot-marque-page-noel1.jpeg",
      "images/lot-marque-page-noel2.jpeg"
    ]
  },
    {
    id: "lot-de-3-marque-pages-pastel-154",
    nom: "Lot de 3 marque-pages Pastel",
    prix: 5.5,
    description: "Lot de 3 marque-pages en forme d'étoile.",
    categorie: "Marque-page",
    vendu: false,
    photos: [
      "images/lot-marque-page-pastel.jpeg"
    ]
  },
    {
    id: "lot-de-3-marque-pages-etoiles-544",
    nom: "Lot de 3 marque-pages Etoiles",
    prix: 5.5,
    description: "Lot de 3 marque-pages super mignons!",
    categorie: "Marque-page",
    vendu: false,
    photos: [
      "images/lot-marque-page-pastel1.jpeg",
      "images/lot-marque-page-pastel2.jpeg",
      "images/lot-marque-page-pastel3.jpeg",
      "images/lot-marque-page-pastel4.jpeg"
    ]
  },
    {
    id: "pochette-pastel-et-marron-livres-de-poche-971",
    nom: "Pochette Pastel et Marron Livres de Poche",
    prix: 4.5,
    description: "Pochette pour ranger jusqu'à deux livres de poche.",
    categorie: "Pochette Livre",
    vendu: false,
    photos: [
      "images/pochette-livres-pastel-marron1.jpeg",
      "images/pochette-livres-pastel-marron2.jpeg",
      "images/pochette-livres-pastel-marron3.jpeg"
    ]
  },
    {
    id: "trousse-a-maquillage-marron-357",
    nom: "Trousse à Maquillage marron",
    prix: 3.5,
    description: "Petite trousse à maquillage marron",
    categorie: "Trousse à Maquillage",
    vendu: false,
    photos: [
      "images/trousse-maquillage-marron.jpeg"
    ]
  },
    {
    id: "porte-cartes-noir-et-rouge-604",
    nom: "Porte-Cartes Noir et Rouge",
    prix: 4.5,
    description: "Petit porte-monnaie pour cartes rouge et noir.",
    categorie: "Porte-Cartes",
    vendu: false,
    photos: [
      "images/porte-cartes-noir-rouge1.jpeg",
      "images/porte-cartes-noir-rouge2.jpeg",
      "images/porte-cartes-noir-rouge3.jpeg",
      "images/porte-cartes-noir-rouge4.jpeg"
    ]
  },
    {
    id: "pochette-livres-de-poche-ou-manga-violet-666",
    nom: "Pochette Livres de Poche ou Manga Violet",
    prix: 4.5,
    description: "Pochette pour livres de poche violette.",
    categorie: "Pochette Livre",
    vendu: false,
    photos: [
      "images/pochette-livres-violet1.jpeg",
      "images/pochette-livres-violet2.jpeg",
      "images/pochette-livres-violet3.jpeg"
    ]
  },
    {
    id: "porte-cartes-bleu-clair-325",
    nom: "Porte-Cartes Bleu Clair",
    prix: 4.5,
    description: "Porte-monnaie pour cartes bleu clair.",
    categorie: "Porte-Cartes",
    vendu: false,
    photos: [
      "images/porte-carte-bleu-clair1.jpeg",
      "images/porte-carte-bleu-clair2.jpeg",
      "images/porte-carte-bleu-clair3.jpeg"
    ]
  },
    {
    id: "porte-cartes-rose-213",
    nom: "Porte-Cartes Rose",
    prix: 4.5,
    description: "Porte-monnaie pour cartes rose.",
    categorie: "Porte-Cartes",
    vendu: false,
    photos: [
      "images/porte-carte-rose1.jpeg",
      "images/porte-carte-rose2.jpeg",
      "images/porte-carte-rose3.jpeg"
    ]
  },
];
