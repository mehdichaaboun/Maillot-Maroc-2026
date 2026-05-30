const SHEET_NAME = "Commandes";
const NOTIFICATION_EMAIL = "onlinefootballmatch@gmail.com";

function doPost(e) {
  const sheet = getOrdersSheet_();
  const params = e.parameter || {};
  const orderDate = new Date();

  sheet.appendRow([
    orderDate,
    params.nom || "",
    params.adresse || "",
    params.telephone || "",
    params.couleur || "",
    params.taille || "",
    params.prix || "",
    params.source || "",
  ]);

  sendOrderEmail_(params, orderDate);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendOrderEmail_(params, orderDate) {
  const subject = "Nouvelle commande - Maillot Maroc 2026";
  const body = [
    "Nouvelle commande reçue depuis le site Maillot Maroc 2026.",
    "",
    "Date: " + orderDate,
    "Nom complet: " + (params.nom || ""),
    "Téléphone: " + (params.telephone || ""),
    "Adresse: " + (params.adresse || ""),
    "Couleur: " + (params.couleur || ""),
    "Taille: " + (params.taille || ""),
    "Prix: " + (params.prix || ""),
    "Page: " + (params.source || ""),
  ].join("\n");

  MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
}

function getOrdersSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Date",
      "Nom complet",
      "Adresse",
      "Téléphone",
      "Couleur",
      "Taille",
      "Prix",
      "Page",
    ]);
  }

  return sheet;
}
