/* ===========================================================
   Logique du panier — stocké dans le navigateur (localStorage)
   =========================================================== */

const CLE_PANIER = "crochet_panier_v1";

function lirePanier() {
  try {
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

function majPastilleHeader() {
  const pastille = document.querySelector("[data-cart-count]");
  if (pastille) {
    const n = lirePanier().length;
    pastille.textContent = n;
    pastille.style.display = n > 0 ? "inline-flex" : "none";
  }
}

document.addEventListener("DOMContentLoaded", majPastilleHeader);
