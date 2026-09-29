/* Logique du panier : stocké dans le navigateur (localStorage) */

const CLE_PANIER = "crochet_panier_v1";

function lirePanier() {
  try {
    //getItem renvoie est une chaîne de caractères car localStorage ne stocke que du texte, jamais un vrai tableau ou objet JS
    //d'où le JSON.parse
    //JSON.parse fait l'opération inverse de r.json() pour le fetch, donc convertit du texte au format JSON en un vrai objet ou tableau JS utilisable
    //Si localStorage.getItem() ne trouve rien (par exemple, le panier n'a jamais été rempli, ou vient d'être vidé par removeItem), il renvoie null
    return JSON.parse(localStorage.getItem(CLE_PANIER)) || [];
  } catch (e) {
    return [];
  }
}

function ecrirePanier(panier) {
  localStorage.setItem(CLE_PANIER, JSON.stringify(panier));
  majPastilleHeader();
}

function ajouterAuPanier(id) {
  const panier = lirePanier();
  if (!panier.includes(id)) {
    panier.push(id);
    ecrirePanier(panier);
  }
  return panier;
}

//.filter(pid => pid !== id) : garde tous les identifiants sauf celui qu'on veut retirer
function retirerDuPanier(id) {
  const panier = lirePanier().filter(pid => pid !== id);
  ecrirePanier(panier);
  return panier;
}

/* Frais de port : 4,60€ jusqu'à 5 articles inclus, 5,50€ au-delà */
function calculerFraisPort(nbArticles) {
  if (nbArticles === 0) return 0;
  return nbArticles <= 5 ? 4.60 : 5.50;
}

function formaterPrix(montant) {
  return montant.toFixed(2).replace(".", ",") + " €";
}

//[data-cart-count] cible tout élément possédant cet attribut, peu importe sa valeur, donc , sans avoir besoin d'un id ou d'une class dessus
function majPastilleHeader() {
  const pastille = document.querySelector("[data-cart-count]");
  if (pastille) {
    const n = lirePanier().length;
    pastille.textContent = n;
    //si le panier contient au moins un article, on affiche le badge 
    //inline-flex = une valeur d'affichage qui aligne le contenu horizontalement, 
    //c'est ok car dans CSS .cart-pill{ display:flex; ... } du bouton panier
    //sinon, on le cache complètement "none" plutôt que d'afficher un badge "0" inutile en permanence
    pastille.style.display = n > 0 ? "inline-flex" : "none";
  }
}

//DOMContentLoaded = déclenché automatiquement par le navigateur dès que toute la structure HTML de la page a fini d'être chargée 
//avant même que les images ou d'autres ressources externes (comme les polices ou le CSS) soient forcément toutes chargées, mais après que tous les éléments HTML existent et sont accessibles en JS.
document.addEventListener("DOMContentLoaded", majPastilleHeader);
