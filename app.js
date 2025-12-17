// Base produits (peut Ãªtre Ã©tendue Ã  ~40+ par catÃ©gorie)
const produits = [
  {
    id: "sony-wh1000xm5",
    nom: "Casque sans fil Sony WH-1000XM5",
    description: "RÃ©duction de bruit trÃ¨s efficace, idÃ©al bureau et voyage.",
    categorie: "High-tech",
    occasion: "Anniversaire",
    motscles: ["casque", "sans fil", "musique", "voyage"],
    prix: 349,
    image: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=sony+wh1000xm5&tag=cadova-21",
    note: 4.7,
    avis: 12543,
    recommande: true,
    theme: "hightech",
    polyvalent: true
  },
  {
    id: "bose-qc-ultra",
    nom: "Bose QuietComfort Ultra",
    description: "Son Ã©quilibrÃ©, rÃ©duit le bruit en avion et en open space.",
    categorie: "High-tech",
    occasion: "Anniversaire",
    motscles: ["casque", "travel", "bureau"],
    prix: 349,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=bose+quietcomfort+ultra&tag=cadova-21",
    note: 4.6,
    avis: 8421,
    recommande: false,
    theme: "hightech",
    polyvalent: true
  },
  {
    id: "kindle-paperwhite",
    nom: "Kindle Paperwhite 16 Go",
    description: "Liseuse Ã©tanche longue autonomie, cadeau sÃ»r pour lecteurs.",
    categorie: "Culture",
    occasion: "Noel",
    motscles: ["lecture", "voyage", "livres"],
    prix: 169,
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=kindle+paperwhite+16+go&tag=cadova-21",
    note: 4.8,
    avis: 50510,
    recommande: true,
    theme: "culture",
    polyvalent: true
  },
  {
    id: "apple-watch-se",
    nom: "Apple Watch SE (GPS)",
    description: "Notifications, santÃ©, sport simple Ã  lire, bon cadeau gÃ©nÃ©raliste.",
    categorie: "High-tech",
    occasion: "Anniversaire",
    motscles: ["montre", "sport", "apple"],
    prix: 279,
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=apple+watch+se+gps&tag=cadova-21",
    note: 4.7,
    avis: 22310,
    recommande: false,
    theme: "hightech",
    polyvalent: true
  },
  {
    id: "rituals-sakura",
    nom: "Coffret Rituals Sakura",
    description: "Routine bien-Ãªtre parfum doux, packaging premium.",
    categorie: "Bien-Ãªtre",
    occasion: "Saint-Valentin",
    motscles: ["spa", "soin", "relax"],
    prix: 45,
    image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=rituals+sakura+coffret&tag=cadova-21",
    note: 4.7,
    avis: 18400,
    recommande: true,
    theme: "cosy",
    polyvalent: true
  },
  {
    id: "lego-bouquet",
    nom: "Lego Bouquet de Fleurs",
    description: "Alternative dÃ©co durable, activitÃ© zen Ã  monter.",
    categorie: "DÃ©co",
    occasion: "Fete des meres",
    motscles: ["lego", "fleurs", "deco"],
    prix: 49,
    image: "https://images.unsplash.com/photo-1523419400524-2230bcb391a2?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=lego+bouquet+fleurs&tag=cadova-21",
    note: 4.9,
    avis: 35600,
    recommande: true,
    theme: "deco",
    polyvalent: true
  },
  {
    id: "instax-mini-12",
    nom: "Appareil photo Instax Mini 12",
    description: "Photos instantanÃ©es fun, facile pour tous les Ã¢ges.",
    categorie: "Loisirs",
    occasion: "Anniversaire",
    motscles: ["photo", "instant", "souvenir"],
    prix: 79,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=instax+mini+12&tag=cadova-21",
    note: 4.7,
    avis: 11200,
    recommande: false,
    theme: "fun",
    polyvalent: true
  },
  {
    id: "jbl-go-4",
    nom: "Enceinte Bluetooth JBL Go 4",
    description: "Mini format, gros son pour maison et dÃ©placements.",
    categorie: "High-tech",
    occasion: "Noel",
    motscles: ["enceinte", "musique", "portable"],
    prix: 49,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=jbl+go+4&tag=cadova-21",
    note: 4.6,
    avis: 18700,
    recommande: false,
    theme: "hightech",
    polyvalent: true
  },
  {
    id: "switch-oled",
    nom: "Nintendo Switch OLED",
    description: "Console hybride famille/solo, valeur sÃ»re gaming.",
    categorie: "Gaming",
    occasion: "Noel",
    motscles: ["console", "gaming", "famille"],
    prix: 319,
    image: "https://m.media-amazon.com/images/I/61LDCjdx9XL._AC_SL1500_.jpg",
    lien_affilie: "https://www.amazon.fr/Nintendo-Console-dAccueil-Manettes-Blanches/dp/B098RJXBTY?ref_=dp_pba_bcd_vb",
    note: 4.9,
    avis: 64000,
    recommande: true,
    theme: "gamer",
    polyvalent: true
  },
  {
    id: "mx-master-3s",
    nom: "Souris Logitech MX Master 3S",
    description: "ProductivitÃ© silencieuse, multi-appareils, ergonomique.",
    categorie: "High-tech",
    occasion: "Anniversaire",
    motscles: ["bureau", "souris", "productivite"],
    prix: 119,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=logitech+mx+master+3s&tag=cadova-21",
    note: 4.8,
    avis: 22100,
    recommande: false,
    theme: "hightech",
    polyvalent: true
  },
  {
    id: "jeu-codenames",
    nom: "Jeu de sociÃ©tÃ© Codenames",
    description: "Parties rapides 4+, simple Ã  expliquer, rejouable.",
    categorie: "Famille",
    occasion: "Famille",
    motscles: ["jeu", "famille", "amis"],
    prix: 19,
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=jeu+codenames&tag=cadova-21",
    note: 4.8,
    avis: 29000,
    recommande: true,
    theme: "fun",
    polyvalent: true
  },
  {
    id: "plaid-doux",
    nom: "Plaid en fausse fourrure",
    description: "Texture cocooning, couleur neutre, format gÃ©nÃ©reux.",
    categorie: "DÃ©co",
    occasion: "Noel",
    motscles: ["plaid", "cosy", "maison"],
    prix: 39,
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=plaid+fausse+fourrure&tag=cadova-21",
    note: 4.6,
    avis: 5100,
    recommande: false,
    theme: "cosy",
    polyvalent: true
  },
  {
    id: "gourde-inox",
    nom: "Gourde isotherme inox 500 ml",
    description: "Garde chaud/froid, design simple, zÃ©ro fuite.",
    categorie: "Sport",
    occasion: "Sport",
    motscles: ["gourde", "quotidien", "sport"],
    prix: 24,
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=gourde+isotherme+inox&tag=cadova-21",
    note: 4.7,
    avis: 8300,
    recommande: false,
    theme: "sport",
    polyvalent: true
  },
  {
    id: "cocotte-staub",
    nom: "Cocotte en fonte Staub 24 cm",
    description: "Pour plats familiaux, durable et indÃ©modable.",
    categorie: "Cuisine",
    occasion: "Parents",
    motscles: ["cuisine", "famille", "repas"],
    prix: 199,
    image: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=cocotte+staub+24+cm&tag=cadova-21",
    note: 4.8,
    avis: 7200,
    recommande: false,
    theme: "cuisine",
    polyvalent: true
  },
  {
    id: "kit-sushi",
    nom: "Kit sushi complet",
    description: "Tapis, moules, recettes: prÃªt Ã  offrir pour cuisiner ensemble.",
    categorie: "Cuisine",
    occasion: "Anniversaire",
    motscles: ["sushi", "cuisine", "diy"],
    prix: 35,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=kit+sushi&tag=cadova-21",
    note: 4.4,
    avis: 1700,
    recommande: false,
    theme: "cuisine",
    polyvalent: false
  },
  {
    id: "oreiller-memoire",
    nom: "Oreiller mÃ©moire de forme",
    description: "Soutien cervical, housse lavable, sommeil amÃ©liorÃ©.",
    categorie: "Bien-Ãªtre",
    occasion: "Anniversaire",
    motscles: ["sommeil", "confort", "oreiller"],
    prix: 59,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=oreiller+memoire+de+forme&tag=cadova-21",
    note: 4.5,
    avis: 6400,
    recommande: false,
    theme: "cosy",
    polyvalent: true
  },
  {
    id: "parfum-frais",
    nom: "Parfum frais mixte 50 ml",
    description: "Accord lÃ©ger passe-partout, cadeau sÃ»r.",
    categorie: "BeautÃ©",
    occasion: "Saint-Valentin",
    motscles: ["parfum", "mixte", "quotidien"],
    prix: 25,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=parfum+mixte+frais&tag=cadova-21",
    note: 4.4,
    avis: 1300,
    recommande: false,
    theme: "beaute",
    polyvalent: true
  },
  {
    id: "dyson-supersonic",
    nom: "SÃ¨che-cheveux Dyson Supersonic",
    description: "SÃ©chage rapide premium, protÃ¨ge les cheveux.",
    categorie: "BeautÃ©",
    occasion: "Parents",
    motscles: ["cheveux", "premium", "beaute"],
    prix: 399,
    image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=dyson+supersonic&tag=cadova-21",
    note: 4.7,
    avis: 16000,
    recommande: false,
    theme: "beaute",
    polyvalent: false
  },
  {
    id: "lampe-sel",
    nom: "Lampe en sel d'Himalaya",
    description: "LumiÃ¨re chaude et relaxante, touche dÃ©co nature.",
    categorie: "DÃ©co",
    occasion: "Noel",
    motscles: ["lampe", "zen", "deco"],
    prix: 29,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    lien_affilie: "https://www.amazon.fr/s?k=lampe+sel+himalaya&tag=cadova-21",
    note: 4.5,
    avis: 5500,
    recommande: false,
    theme: "deco",
    polyvalent: true
  }
];

const STORAGE_KEY = "cadova_favoris_v1";

function loadFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveFavorites(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(ids)));
}

const favoris = new Set(loadFavorites());

function formatPrice(price) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price);
}

function ratingLabel(note, avis) {
  if (!note) return "Note disponible";
  const rounded = note.toFixed(1);
  const avisLabel = avis ? `${avis.toLocaleString("fr-FR")} avis` : "peu d'avis";
  return `${rounded} * | ${avisLabel}`;
}

function normalize(text) {
  return (text || "").toString().toLowerCase();
}

function matchTokens(product, tokens) {
  if (!tokens.length) return true;
  const haystack = [
    product.nom,
    product.description,
    product.categorie,
    product.occasion,
    product.theme,
    ...(product.motscles || [])
  ]
    .map(normalize)
    .join(" ");
  return tokens.every(t => haystack.includes(t));
}

function scoreProduct(product, tokens) {
  const base = (product.note || 0) + Math.log((product.avis || 1) + 1) * 0.35;
  const recommendationBoost = product.recommande ? 2.5 : 0;
  const polyvalentBoost = tokens.length <= 1 && product.polyvalent ? 0.6 : 0;
  const keywordBoost = tokens.reduce((sum, token) => {
    const matches =
      product.nom.toLowerCase().includes(token) ||
      product.description.toLowerCase().includes(token) ||
      (product.motscles || []).some(k => k.toLowerCase().includes(token));
    return sum + (matches ? 0.5 : 0);
  }, 0);
  return base + recommendationBoost + polyvalentBoost + keywordBoost;
}

function filteredProducts({ query = "", intent = {}, sort = "auto" }) {
  const tokens = normalize(query)
    .split(/\s+/)
    .filter(Boolean);

  const list = produits.filter(product => {
    if (!matchTokens(product, tokens)) return false;
    if (intent.budget) {
      if (intent.budget === "small" && product.prix > 25) return false;
      if (intent.budget === "medium" && (product.prix < 25 || product.prix > 75)) return false;
      if (intent.budget === "large" && (product.prix < 75 || product.prix > 200)) return false;
      if (intent.budget === "wow" && product.prix < 200) return false;
    }
    if (intent.occasion) {
      const occ = normalize(product.occasion || product.categorie);
      if (occ !== normalize(intent.occasion)) return false;
    }
    if (intent.theme && normalize(product.theme) !== normalize(intent.theme)) return false;
    return true;
  });

  const scored = list.map(p => ({ ...p, _score: scoreProduct(p, tokens) }));

  if (sort === "prix-asc") return scored.sort((a, b) => a.prix - b.prix);
  if (sort === "prix-desc") return scored.sort((a, b) => b.prix - a.prix);
  if (sort === "note") return scored.sort((a, b) => (b.note || 0) - (a.note || 0));

  return scored.sort((a, b) => {
    if (a.recommande && !b.recommande) return -1;
    if (!a.recommande && b.recommande) return 1;
    return b._score - a._score;
  });
}

function pickRecommended(query = "", intent = {}) {
  const list = filteredProducts({ query, intent, sort: "auto" });
  return list[0] || produits[0];
}

function createCard(product) {
  const article = document.createElement("article");
  article.className = "card";
  article.dataset.id = product.id;

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.nom;

  const content = document.createElement("div");
  content.className = "card-content";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = product.nom;

  const desc = document.createElement("p");
  desc.className = "muted";
  desc.textContent = product.description;

  const rating = document.createElement("p");
  rating.className = "secondary";
  rating.textContent = ratingLabel(product.note, product.avis);

  const tags = document.createElement("div");
  tags.className = "tags";
  (product.motscles || []).slice(0, 3).forEach(tag => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    tags.appendChild(span);
  });

  const footer = document.createElement("div");
  footer.className = "card-footer";

  const price = document.createElement("span");
  price.className = "price";
  price.textContent = formatPrice(product.prix);

  const actions = document.createElement("div");
  actions.className = "cta-row";

  const cta = document.createElement("a");
  cta.className = "btn btn-primary";
  cta.textContent = "Voir le cadeau";
  cta.href = product.lien_affilie;
  cta.target = "_blank";
  cta.rel = "nofollow sponsored";

  const fav = document.createElement("button");
  fav.className = "fav";
  fav.type = "button";
  fav.textContent = "â™¡";
  if (favoris.has(product.id)) fav.classList.add("active");
  fav.addEventListener("click", () => toggleFavorite(product.id));

  actions.append(cta, fav);
  footer.append(price, actions);
  content.append(title, desc, rating, tags, footer);
  article.append(img, content);
  return article;
}

function renderHome() {
  const best = pickRecommended();
  const name = document.getElementById("bestName");
  if (!name) return;
  const desc = document.getElementById("bestDesc");
  const price = document.getElementById("bestPrice");
  const note = document.getElementById("bestNote");
  const img = document.getElementById("bestImage");
  const cta = document.getElementById("bestCta");
  const fav = document.getElementById("bestFav");

  name.textContent = best.nom;
  desc.textContent = best.description;
  price.textContent = formatPrice(best.prix);
  note.textContent = ratingLabel(best.note, best.avis);
  img.src = best.image;
  img.alt = best.nom;
  cta.href = best.lien_affilie;
  fav.dataset.id = best.id;
  fav.classList.toggle("active", favoris.has(best.id));
  fav.onclick = () => toggleFavorite(best.id);

  // Quick picks (top 3 recommandations)
  const quickList = document.getElementById("quickList");
  if (quickList) {
    quickList.innerHTML = "";
    const picks = filteredProducts({ query: "", intent: {}, sort: "auto" }).slice(0, 3);
    picks.forEach(p => quickList.appendChild(createCard(p)));
  }
}

function renderExplore() {
  const searchInput = document.getElementById("exploreSearch");
  const sortSelect = document.getElementById("triSelect");
  const query = searchInput ? searchInput.value : "";
  const sort = sortSelect ? sortSelect.value : "auto";
  const intent = currentIntent;

  const recommended = pickRecommended(query, intent);
  fillRecommended(recommended);

  const resultsContainer = document.getElementById("resultsList");
  if (!resultsContainer) return;
  resultsContainer.innerHTML = "";

  const list = filteredProducts({ query, intent, sort }).filter(p => p.id !== recommended.id);
  if (!list.length) {
    const empty = document.createElement("p");
    empty.textContent = "Nous n'avons pas encore ce produit.";
    empty.className = "muted";
    resultsContainer.appendChild(empty);
  } else {
    list.forEach(product => resultsContainer.appendChild(createCard(product)));
  }

  renderFavoritesSection();
}

function fillRecommended(product) {
  const name = document.getElementById("recName");
  if (!name) return;
  const desc = document.getElementById("recDesc");
  const price = document.getElementById("recPrice");
  const note = document.getElementById("recNote");
  const img = document.getElementById("recImage");
  const cta = document.getElementById("recCta");
  const fav = document.getElementById("recFav");

  name.textContent = product.nom;
  desc.textContent = product.description;
  price.textContent = formatPrice(product.prix);
  note.textContent = ratingLabel(product.note, product.avis);
  img.src = product.image;
  img.alt = product.nom;
  cta.href = product.lien_affilie;
  fav.dataset.id = product.id;
  fav.classList.toggle("active", favoris.has(product.id));
  fav.onclick = () => toggleFavorite(product.id);
}

function toggleFavorite(id) {
  if (favoris.has(id)) {
    favoris.delete(id);
  } else {
    favoris.add(id);
  }
  saveFavorites(favoris);
  syncFavoriteStates();
}

function syncFavoriteStates() {
  document.querySelectorAll(".fav").forEach(btn => {
    const card = btn.closest("[data-id]");
    const productId = card?.getAttribute("data-id") || btn.dataset.id;
    if (!productId) return;
    btn.classList.toggle("active", favoris.has(productId));
  });
  renderFavoritesSection();
  renderHome();
}

function renderFavoritesSection() {
  const container = document.getElementById("favoritesList");
  const counter = document.getElementById("favCounter");
  if (!container) return;

  container.innerHTML = "";
  const favProducts = produits.filter(p => favoris.has(p.id));
  if (counter) counter.textContent = favProducts.length.toString();

  if (!favProducts.length) {
    const p = document.createElement("p");
    p.className = "muted";
    p.textContent = "Aucun favori pour l'instant.";
    container.appendChild(p);
    return;
  }

  favProducts.forEach(product => container.appendChild(createCard(product)));
}

function handlePills() {
  document.querySelectorAll(".pill, .price-card").forEach(btn => {
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-intent");
      if (!value) return;
      applyIntent(value);
    });
  });
}

const currentIntent = {};

function applyIntent(value) {
  const [type, val] = value.split(":");
  if (type === "budget") currentIntent.budget = val;
  if (type === "occasion") currentIntent.occasion = val;
  if (type === "theme") currentIntent.theme = val;

  if (document.body.classList.contains("page-home")) {
    redirectToExplore(currentIntent);
  } else {
    renderExplore();
  }
}

function redirectToExplore(intent) {
  const url = new URL("explore.html", window.location.href);
  Object.entries(intent).forEach(([key, val]) => url.searchParams.set(key, val));
  const searchInput = document.getElementById("homeSearch");
  if (searchInput && searchInput.value) url.searchParams.set("q", searchInput.value);
  window.location.href = url.toString();
}

function setupHome() {
  const form = document.getElementById("homeSearchForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      redirectToExplore(currentIntent);
    });
  }
}

function setupExplore() {
  const params = new URLSearchParams(window.location.search);
  const searchInput = document.getElementById("exploreSearch");
  if (searchInput && params.get("q")) searchInput.value = params.get("q");
  if (params.get("budget")) currentIntent.budget = params.get("budget");
  if (params.get("occasion")) currentIntent.occasion = params.get("occasion");
  if (params.get("theme")) currentIntent.theme = params.get("theme");

  const form = document.getElementById("exploreSearchForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      renderExplore();
    });
  }

  const sort = document.getElementById("triSelect");
  if (sort) sort.addEventListener("change", renderExplore);

  renderExplore();
}

document.addEventListener("DOMContentLoaded", () => {
  handlePills();

  if (document.body.classList.contains("page-home")) {
    setupHome();
    renderHome();
  }

  if (document.body.classList.contains("page-explore")) {
    setupExplore();
  }
});
