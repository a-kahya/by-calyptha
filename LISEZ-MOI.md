# By Calyptha — ton site 🧶

## 1. Mettre tes vraies photos
Remplace les fichiers dans le dossier `images/` par tes propres photos
(garde des noms simples, sans espaces ni accents : `doudou-lapin-1.jpg`).

## 2. Modifier / ajouter tes articles
- Ouvre `ajouter-article.html` dans ton navigateur (double-clic dessus).
- Remplis le formulaire, clique sur "Générer le code", copie le résultat.
- Ouvre `produits.js` avec le Bloc-notes (ou tout éditeur de texte) et colle
  le bloc juste après la ligne `const PRODUITS = [`.
- Pour marquer un article comme vendu : passe `vendu: false` à `vendu: true`.
- Pour le remettre en vente plus tard (même modèle refait) : repasse-le à `false`.

## 3. Activer l'envoi automatique des emails (gratuit)
Quand l'acheteur clique "Valider et payer", **2 emails partent automatiquement** :
- **à toi** : le récap de la commande (articles, frais de port, total, email de l'acheteur)
- **à l'acheteur** : une confirmation lui rappelant qu'il va recevoir un email
  de Mondial Relay pour choisir son point relais, et qu'il doit y répondre
  rapidement pour qu'on puisse expédier sa commande.

Il est ensuite redirigé vers PayPal.me avec le montant exact déjà rempli.

Pour activer ça (gratuit, jusqu'à 200 emails/mois au total) :
1. Crée un compte sur https://www.emailjs.com
2. "Email Services" → connecte ta boîte mail (ex: Outlook/Live)
3. Crée **deux templates** dans "Email Templates" :
   - **Template A (pour toi)** : "To Email" = ton adresse en dur
     (`ayse.kahya@live.fr`). Variables à utiliser dans le corps :
     `{{email_client}}`, `{{articles}}`, `{{frais_port}}`, `{{total}}`
   - **Template B (pour l'acheteur)** : "To Email" = `{{email_client}}`
     (⚠️ mets bien la variable, pas une adresse fixe, sinon ça n'ira
     pas au bon acheteur). Variables : `{{articles}}`, `{{frais_port}}`,
     `{{total}}`. Pense à mentionner dans le texte qu'il recevra un
     email de Mondial Relay où il devra indiquer ses infos de livraison.
4. Ouvre `panier.html`, en haut du script, remplace :
   ```
   const EMAILJS_PUBLIC_KEY = "TA_PUBLIC_KEY";
   const EMAILJS_SERVICE_ID = "TON_SERVICE_ID";
   const EMAILJS_TEMPLATE_ID_VENDEUSE = "TON_TEMPLATE_ID_VENDEUSE";
   const EMAILJS_TEMPLATE_ID_ACHETEUR = "TON_TEMPLATE_ID_ACHETEUR";
   ```
   par tes propres identifiants (visibles dans ton compte EmailJS,
   sous Account > General pour la Public Key).

Tant que ce n'est pas configuré, le bouton "Valider et payer" redirige
quand même vers PayPal, mais aucun email n'est envoyé automatiquement.

Le lien PayPal.me utilisé est configurable juste au-dessus :
```
const PAYPAL_ME_ID = "ayse.kahya@live.fr";
```

## 4. Mettre le site en ligne gratuitement (GitHub Pages)
1. Crée un compte gratuit sur https://github.com
2. Crée un nouveau "repository" (dépôt), par exemple `maille-et-calins`
3. Mets-y tous les fichiers de ce dossier (glisser-déposer sur la page GitHub,
   ou via "Add file" → "Upload files")
4. Dans le dépôt : Settings → Pages → Source → choisis la branche `main` → Save
5. Après 1-2 minutes, ton site est en ligne à une adresse du type :
   `https://tonpseudo.github.io/maille-et-calins/`

## 5. À propos du paiement
Le site calcule automatiquement le total (articles + frais de port).
Comme tu gères Mondial Relay toi-même, l'email de commande te donne tout
ce qu'il te faut pour envoyer ensuite à l'acheteur ton lien de paiement
Stripe ou PayPal avec le bon montant.

## Rappel des frais de port
- 1 à 5 articles : 4,60 €
- 6 articles et plus : 5,50 €

(modifiable dans `panier.js`, fonction `calculerFraisPort`)
