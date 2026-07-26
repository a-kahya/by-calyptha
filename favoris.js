/* ===========================================================
   Système de favoris — stocké dans le navigateur (localStorage)
   + comptage global du nombre de likes via GoatCounter
   =========================================================== */

const CLE_FAVORIS = "crochet_favoris_v1";
const CLE_FAVORIS_COMPTES = "crochet_favoris_comptes_v1"; // évite de recompter 2x la même personne

function lireFavoris() {
  try {
    return JSON.parse(localStorage.getItem(CLE_FAVORIS)) || [];
  } catch (e) {
    return [];
  }
}

function estFavori(id) {
  return lireFavoris().includes(id);
}

function toggleFavori(id) {
  let favoris = lireFavoris();
  const dejaLike = favoris.includes(id);

  if (dejaLike) {
    favoris = favoris.filter(fid => fid !== id);
  } else {
    favoris.push(id);
    signalerNouveauLike(id);
  }

  localStorage.setItem(CLE_FAVORIS, JSON.stringify(favoris));
  return !dejaLike;
}

function signalerNouveauLike(id) {
  let comptes = [];
  try {
    comptes = JSON.parse(localStorage.getItem(CLE_FAVORIS_COMPTES)) || [];
  } catch (e) {}

  if (comptes.includes(id)) return;

  comptes.push(id);
  localStorage.setItem(CLE_FAVORIS_COMPTES, JSON.stringify(comptes));

  if (window.goatcounter && window.goatcounter.count) {
    window.goatcounter.count({
      path: "like/" + id,
      title: "Favori ajouté",
      event: true
    });
  }
}

function afficherCompteursFavoris() {
  document.querySelectorAll("[data-like-count]").forEach(el => {
    const id = el.getAttribute("data-like-count");
    fetch(`https://by-calyptha.goatcounter.com/counter/like/${encodeURIComponent(id)}.json`)
      .then(r => r.json())
      .then(data => { el.textContent = data.count; })
      .catch(() => { el.textContent = "0"; });
  });
}