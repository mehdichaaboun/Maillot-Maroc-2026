const GOOGLE_SCRIPT_URL = "https://docs.google.com/spreadsheets/d/170sd_2ga_TC_EyX6ytkTd1lDajX2aVelU4w2qf-zQHY/edit?gid=0#gid=0";
const JERSEY_PRICE = "120.00 DH";

const productImages = {
  Rouge: {
    image: "assets/maillot-rouge.jpg",
    alt: "Maillot Maroc rouge sélectionné",
    theme: "theme-red",
  },
  Blanc: {
    image: "assets/maillot-blanc.jpg",
    alt: "Maillot Maroc blanc sélectionné",
    theme: "theme-white",
  },
};

const form = document.querySelector("#orderForm");
const jerseyImage = document.querySelector("#jerseyImage");
const selectedColorLabel = document.querySelector("#selectedColorLabel");
const selectedSizeLabel = document.querySelector("#selectedSizeLabel");
const selectedPrice = document.querySelector("#selectedPrice");
const priceInput = form.querySelector('input[name="prix"]');
const formStatus = document.querySelector("#formStatus");
const submitButton = form.querySelector(".submit-button");

function updateActiveChoices(groupName) {
  document.querySelectorAll(`input[name="${groupName}"]`).forEach((input) => {
    input.closest(".choice").classList.toggle("active", input.checked);
  });
}

function updateColor(color) {
  const product = productImages[color];
  if (!product) return;

  document.body.classList.remove("theme-red", "theme-white");
  document.body.classList.add(product.theme);
  jerseyImage.src = product.image;
  jerseyImage.alt = product.alt;
  selectedColorLabel.textContent = `Couleur: ${color}`;
}

function updatePrice() {
  selectedPrice.textContent = JERSEY_PRICE;
  priceInput.value = JERSEY_PRICE;
}

document.querySelectorAll('input[name="couleur"]').forEach((input) => {
  input.addEventListener("change", () => {
    updateActiveChoices("couleur");
    updateColor(input.value);
    updatePrice();
  });
});

document.querySelectorAll('input[name="taille"]').forEach((input) => {
  input.addEventListener("change", () => {
    updateActiveChoices("taille");
    selectedSizeLabel.textContent = `Taille: ${input.value}`;
    updatePrice();
  });
});

function setStatus(message, type = "") {
  formStatus.textContent = message;
  formStatus.className = `form-status ${type}`.trim();
}

function buildOrderPayload() {
  const data = new FormData(form);
  data.append("source", window.location.href);
  data.append("date", new Date().toISOString());
  return new URLSearchParams(data);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!GOOGLE_SCRIPT_URL) {
    setStatus("Ajoutez d'abord l'URL Google Apps Script dans script.js pour recevoir les commandes.", "error");
    return;
  }

  submitButton.disabled = true;
  setStatus("Envoi de la commande...");

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: buildOrderPayload(),
    });

    form.reset();
    document.querySelector('input[name="couleur"][value="Rouge"]').checked = true;
    document.querySelector('input[name="taille"][value="M"]').checked = true;
    updateActiveChoices("couleur");
    updateActiveChoices("taille");
    updateColor("Rouge");
    selectedSizeLabel.textContent = "Taille: M";
    updatePrice();
    setStatus("Commande envoyée. Merci, nous vous contacterons rapidement.", "success");
  } catch (error) {
    setStatus("Impossible d'envoyer la commande. Vérifiez la connexion et l'URL Google Script.", "error");
  } finally {
    submitButton.disabled = false;
  }
});

updatePrice();
