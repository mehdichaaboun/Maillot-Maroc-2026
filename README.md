# Maillot Maroc 2026

Site statique en français pour GitHub Pages avec formulaire de commande vers Google Sheets et notification Gmail.

## Mettre en ligne sur GitHub Pages

1. Créez un dépôt GitHub.
2. Ajoutez tous les fichiers du dossier `maillot-maroc-2026` dans le dépôt.
3. Dans GitHub, ouvrez `Settings > Pages`.
4. Choisissez la branche `main` et le dossier `/root`, puis enregistrez.

## Connecter Google Sheets et Gmail

1. Créez une feuille Google Sheets.
2. Ouvrez `Extensions > Apps Script`.
3. Collez le contenu de `google-apps-script.js`.
4. Vérifiez que cette ligne contient votre Gmail:

```js
const NOTIFICATION_EMAIL = "onlinefootballmatch@gmail.com";
```

5. Cliquez sur `Deploy > New deployment`.
6. Sélectionnez `Web app`.
7. Dans `Execute as`, choisissez `Me`.
8. Dans `Who has access`, choisissez `Anyone`.
9. Autorisez le script quand Google le demande. C'est nécessaire pour écrire dans Sheets et envoyer l'email.
10. Copiez l'URL du Web App.
11. Dans `script.js`, remplacez:

```js
const GOOGLE_SCRIPT_URL = "";
```

par:

```js
const GOOGLE_SCRIPT_URL = "VOTRE_URL_GOOGLE_APPS_SCRIPT";
```

Chaque commande ajoute une ligne dans l'onglet `Commandes` avec la date, le nom, l'adresse, le téléphone, la couleur, la taille, le prix et la page. Le même détail est aussi envoyé à `onlinefootballmatch@gmail.com`.
