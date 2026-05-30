# Maillot Maroc 2026

Site statique en français pour GitHub Pages avec formulaire de commande vers Google Sheets et notification Gmail.

## Google Sheet

La feuille connectée est:

https://docs.google.com/spreadsheets/d/170sd_2ga_TC_EyX6ytkTd1lDajX2aVelU4w2qf-zQHY/edit

Le script ajoute automatiquement les commandes dans l'onglet `Commandes`.

## Prix

- 1 maillot: 110 DH
- 2 maillots: 190 DH
- 3 maillots: 270 DH
- 4 maillots: 350 DH

Quand le client choisit plusieurs maillots, il peut sélectionner une couleur et une taille pour chaque maillot.

## Connecter Google Sheets et Gmail

1. Ouvrez votre Google Sheet.
2. Cliquez sur `Extensions > Apps Script`.
3. Collez le contenu de `google-apps-script.js`.
4. Vérifiez ces deux lignes:

```js
const SPREADSHEET_ID = "170sd_2ga_TC_EyX6ytkTd1lDajX2aVelU4w2qf-zQHY";
const NOTIFICATION_EMAIL = "onlinefootballmatch@gmail.com";
```

5. Cliquez sur `Deploy > New deployment`.
6. Sélectionnez `Web app`.
7. Dans `Execute as`, choisissez `Me`.
8. Dans `Who has access`, choisissez `Anyone`.
9. Autorisez le script quand Google le demande.
10. Copiez l'URL du Web App.
11. Dans `script.js`, remplacez:

```js
const GOOGLE_SCRIPT_URL = "";
```

par:

```js
const GOOGLE_SCRIPT_URL = "VOTRE_URL_GOOGLE_APPS_SCRIPT";
```

Chaque commande ajoute une ligne dans l'onglet `Commandes` avec la date, le nom, l'adresse, le téléphone, les couleurs, la quantité, les tailles, le prix total et la page. Le même détail est aussi envoyé à `onlinefootballmatch@gmail.com`.

## Mettre en ligne sur GitHub Pages

1. Créez un dépôt GitHub.
2. Ajoutez tous les fichiers du dossier `maillot-maroc-2026` dans le dépôt.
3. Dans GitHub, ouvrez `Settings > Pages`.
4. Choisissez la branche `main` et le dossier `/root`, puis enregistrez.
