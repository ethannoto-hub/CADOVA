const PRODUCTS = [
  {
    id: "card-minimal",
    name: "Coffret de chocolats celebrations 186g",
    description: "Parce que Celebrations, c'est du plaisir instantane : des chocolats que tout le monde connait, chacun trouve son prefere, zero risque, sourire garanti des l'ouverture.",
    category: "maison",
    price: 5,
    link: "https://www.amazon.fr/dp/B07377Z4Q7?tag=zzounko-21&linkCode=osi&th=1",
    image: "coffret%20choco%20186g.jpg"
  },
  {
    id: "keychain-metal",
    name: "Porte-cles metal",
    description: "Petit cadeau utile au quotidien.",
    category: "mode",
    price: 5,
    link: "#"
  },
  {
    id: "mini-candle",
    name: "Bougie mini",
    description: "Ambiance douce en un instant.",
    category: "bien-etre",
    price: 5,
    link: "#"
  },
  {
    id: "mini-notebook",
    name: "Mini carnet",
    description: "Note rapide, idee claire.",
    category: "loisirs",
    price: 5,
    link: "#"
  },
  {
    id: "travel-mug",
    name: "Mug isotherme",
    description: "Pratique pour tous les jours.",
    category: "maison",
    price: 22,
    link: "#"
  },
  {
    id: "tea-kit",
    name: "Coffret the",
    description: "Detente immediate.",
    category: "bien-etre",
    price: 18,
    link: "#"
  },
  {
    id: "philips-tah3209bk",
    name: "Philips TAH3209BK",
    description: "Le Philips TAH3209BK, c'est le meilleur casque Bluetooth a ce prix : 25 h d'autonomie, son clair et equilibre, multipoint, USB-C et confort leger, le tout pour moins de 25 EUR.",
    category: "tech",
    price: 25,
    link: "https://www.amazon.fr/Philips-TAH3209BK-Supra-aural-dautonomie-dynamiques/dp/B0D31V9V3X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.zwgTYogb0dwjIkQM3UXLitFNDjQBtVTHv356JkmF7QLhFA2d4cEpos-iqmc2D8RSzYBmiwcaeL5klo0wNyD5r8NGpFbRRcf0LSDVK9R0QOT_jjiK911WWVuGW4Y-CEfmw-Y4WVL5vLS8RXaIJamgAudtdYpGivi4JD1beePU0ouhLR8IFGjf6GZXZflvqVOYFIO9hPkFVUMundSUufNf-Gc_VANCYhvlExGv9W1nossFfJgMAe1NDNtkbvCgMPQ9zhU6e_0brY79SvwkQNHQeCxNbHM42yATg3ruexk_vkM.N6Q1MxDJruC_r7H4sUm3640h0gMw76Lm1v1jIlGF04o&dib_tag=se&keywords=Philips+TAH3209BK&qid=1766438531&sr=8-1",
    image: "casque%20-25%E2%82%AC.jpg"
  },
  {
    id: "easy-plant",
    name: "Plante facile",
    description: "Verte et simple a garder.",
    category: "maison",
    price: 24,
    link: "#"
  },
  {
    id: "desk-lamp",
    name: "Lampe de bureau",
    description: "Lumiere douce pour le soir.",
    category: "maison",
    price: 45,
    link: "#"
  },
  {
    id: "wired-headset",
    name: "Casque filaire",
    description: "Audio clair, sans recharge.",
    category: "tech",
    price: 49,
    link: "#"
  },
  {
    id: "board-game",
    name: "Jeu de societe",
    description: "Une soiree simple et fun.",
    category: "loisirs",
    price: 35,
    link: "#"
  },
  {
    id: "echo-spot",
    name: "Amazon Echo Spot",
    description: "Vous ouvrez les yeux, l'heure et la meteo sont deja affichees, votre musique demarre a la voix, vos rappels vous accompagnent toute la journee, et Alexa s'occupe du reste. Compact, elegant, avec un son de vraie qualite, il trouve naturellement sa place sur une table de nuit ou un bureau et devient utile des la premiere minute, sans reglages compliques. Un cadeau moderne, intelligent, qui impressionne sans jamais faire gadget.",
    category: "tech",
    price: 50,
    link: "https://www.amazon.fr/dp/B0C2RSJHS6?ref_=MARS_NAVSTRIPE_desktop_echo_echo_spot&th=1",
    image: "echo%20alexa.jpg"
  },
  {
    id: "wireless-headset",
    name: "Meta Quest 3S 128 Go",
    description: "Le Meta Quest 3S, c'est le futur entre vos mains : aussi impressionnant pour jouer que puissant pour travailler, regarder des films ou creer un espace de travail virtuel autour de vous. Sans cable, sans PC, il transforme n'importe quelle piece en nouvel environnement immersif, ou le divertissement et la productivite ne font plus qu'un.",
    category: "tech",
    price: 199,
    link: "https://www.amazon.fr/Meta-Quest-128-Reconditionn%C3%A9-Tout-en/dp/B09MP71S29/ref=sr_1_4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=GIEQOUR1RSB4&dib=eyJ2IjoiMSJ9.jMNnmmuTx8zQKlhu5tY2bRHqE7cVy6qCUMfQMGYSBmzmg2lfCWwNBRg42S4t6cLms8-qbPdd1lq3z_eI8jy1eBBelt10Zr-BvnT-3u8wt8SR574hPRzyjhoaVpa0A37niDwpW4tz_bFFzzTni7UNLxc5CR5xV9agQwv96ngLvS_rwBmgolQ-jBbdONnB36FT_2ZnjJ3KSvpuCX892gOozCiQT-2CNeVaFObC2lNfQ5DeO4Vl5V-ovW2mcZZPVQITpsJskC--s9f7n5ZdNPA9MiC3VhHJ2gC7LxZYcFC7jac.Z9G5X6V54ApxUxCwdPDNQANZTnN5MDTgIo5tq8yhesY&dib_tag=se&keywords=metal+quest+2s&qid=1766443990&sprefix=metat+quest+2%2Caps%2C317&sr=8-4",
    image: "meta%20quest.jpg"
  },
  {
    id: "smartwatch",
    name: "Montre connectee",
    description: "Utile et elegante.",
    category: "tech",
    price: 149,
    link: "#"
  },
  {
    id: "retro-console",
    name: "Console retro",
    description: "Gaming rapide, zero prise de tete.",
    category: "gaming",
    price: 119,
    link: "#"
  },
  {
    id: "spa-box",
    name: "Coffret spa premium",
    description: "Moment de calme garanti.",
    category: "bien-etre",
    price: 120,
    link: "#"
  }
];

const BUDGETS = {
  "5": { label: "5 EUR", min: 0, max: 5 },
  "25": { label: "25 EUR", min: 6, max: 25 },
  "50": { label: "50 EUR", min: 26, max: 50 },
  "100": { label: "+100 EUR", min: 100, max: Number.POSITIVE_INFINITY }
};

const FAVORITES_KEY = "cadova_favorites_v2";

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return new Set(parsed);
  } catch {
    return new Set();
  }
}

function saveFavorites(set) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(set)));
  } catch {
    // Storage can be blocked.
  }
}

const favorites = loadFavorites();
let renderFavoritesPage = null;

function filterByBudget(product, budgetKey) {
  if (budgetKey === "all") return true;
  const range = BUDGETS[budgetKey];
  if (!range) return true;
  return product.price >= range.min && product.price <= range.max;
}

function filterByType(product, typeKey) {
  if (typeKey === "all") return true;
  return product.category === typeKey;
}

function matchesQuery(product, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    product.name.toLowerCase().includes(q) ||
    product.description.toLowerCase().includes(q) ||
    product.category.toLowerCase().includes(q)
  );
}

function createCard(product, options = {}) {
  const card = document.createElement("article");
  card.className = "gift-card";
  card.dataset.id = product.id;

  if (options.badge) {
    const badge = document.createElement("span");
    badge.className = "card-badge";
    badge.textContent = options.badge;
    card.appendChild(badge);
  }

  const media = document.createElement("div");
  media.className = "card-media";
  if (product.image) {
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.loading = "lazy";
    media.appendChild(img);
  }

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h4");
  title.className = "card-title";
  title.textContent = product.name;

  const desc = document.createElement("p");
  desc.className = "card-desc";
  desc.textContent = product.description;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const cta = document.createElement("a");
  cta.className = "btn btn-primary";
  cta.textContent = "Voir le cadeau";
  cta.href = product.link || "#";
  cta.target = "_blank";
  cta.rel = "nofollow";

  const fav = document.createElement("button");
  fav.className = "fav";
  fav.type = "button";
  fav.innerHTML = "&#9829;";
  fav.dataset.id = product.id;
  fav.setAttribute("aria-label", "Ajouter aux favoris");
  fav.addEventListener("click", () => toggleFavorite(product.id, fav));

  actions.append(cta, fav);
  body.append(title, desc, actions);
  card.append(media, body);

  return card;
}

function renderCards(container, items, emptyMessage) {
  container.innerHTML = "";
  if (!items.length) {
    if (emptyMessage) {
      const msg = document.createElement("p");
      msg.className = "muted empty-state";
      msg.textContent = emptyMessage;
      container.appendChild(msg);
    }
    return;
  }
  items.forEach(item => container.appendChild(createCard(item)));
  updateFavoriteButtons();
}

function updateFavoriteButtons() {
  document.querySelectorAll(".fav").forEach(btn => {
    const id = btn.dataset.id;
    if (!id) return;
    btn.classList.toggle("active", favorites.has(id));
  });
}

function toggleFavorite(id, button) {
  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }
  saveFavorites(favorites);
  updateFavoriteButtons();

  if (button) {
    button.classList.remove("pop");
    void button.offsetWidth;
    button.classList.add("pop");
  }

  if (renderFavoritesPage) {
    renderFavoritesPage(true);
  }
}

function setupHome() {
  const topPicks = document.getElementById("topPicks");
  const buttons = document.querySelectorAll(".budget-card");
  const section = document.getElementById("budgetResults");
  const list = document.getElementById("budgetList");
  const title = document.getElementById("budgetTitle");
  const subtitle = document.getElementById("budgetSubtitle");
  const allList = document.getElementById("allGiftsList");
  const allSection = document.getElementById("allGifts");
  const allMore = document.getElementById("allGiftsMore");
  const searchForm = document.getElementById("homeSearchForm");
  const searchInput = document.getElementById("homeSearch");

  if (topPicks) {
    topPicks.innerHTML = "";
    Object.keys(BUDGETS).forEach(key => {
      const range = BUDGETS[key];
      const pick = PRODUCTS.filter(item => filterByBudget(item, key)).sort((a, b) => b.price - a.price)[0];
      if (pick) {
        topPicks.appendChild(createCard(pick, { badge: range.label }));
      }
    });
    updateFavoriteButtons();
  }

  if (!buttons.length || !section || !list) return;

  function renderBudget(budgetKey) {
    const range = BUDGETS[budgetKey];
    const filtered = PRODUCTS.filter(item => filterByBudget(item, budgetKey));
    const slice = filtered.slice(0, 4);

    title.textContent = range ? `Idees pour ${range.label}` : "Idees pour ce budget";
    subtitle.textContent = slice.length ? "4 cadeaux maximum." : "Aucun cadeau pour ce budget pour le moment.";

    renderCards(list, slice, "");
    section.classList.add("is-visible");
  }

  buttons.forEach(btn => {
    btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      buttons.forEach(b => b.setAttribute("aria-pressed", "false"));
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      renderBudget(btn.dataset.budget);
    });
  });

  if (allList && allSection && allMore) {
    let pageIndex = 0;
    let currentQuery = "";

    function getSorted() {
      return PRODUCTS.filter(item => matchesQuery(item, currentQuery)).sort((a, b) => b.price - a.price);
    }

    function renderPage(index) {
      const filtered = getSorted();
      const start = index * 4;
      const slice = filtered.slice(start, start + 4);

      if (!slice.length) {
        allList.innerHTML = "";
        const msg = document.createElement("p");
        msg.className = "muted empty-state";
        msg.textContent = "Aucun cadeau pour cette recherche.";
        allList.appendChild(msg);
        allMore.hidden = true;
        allSection.classList.add("is-visible");
        allMore.setAttribute("aria-expanded", "true");
        allMore.textContent = "Voir plus";
        return;
      }

      allList.innerHTML = "";
      slice.forEach(item => allList.appendChild(createCard(item)));
      updateFavoriteButtons();
      allSection.classList.add("is-visible");
      pageIndex = index;
      allMore.hidden = start + 4 >= filtered.length;
      allMore.setAttribute("aria-expanded", "true");
      allMore.textContent = allMore.hidden ? "Voir plus" : "Voir encore";
    }

    allMore.addEventListener("click", () => {
      if (!allSection.classList.contains("is-visible")) {
        renderPage(0);
        return;
      }
      renderPage(pageIndex + 1);
    });

    if (searchForm && searchInput) {
      searchForm.addEventListener("submit", event => {
        event.preventDefault();
        currentQuery = searchInput.value.trim();
        renderPage(0);
      });

      searchInput.addEventListener("input", () => {
        currentQuery = searchInput.value.trim();
        if (!currentQuery && !allSection.classList.contains("is-visible")) {
          return;
        }
        renderPage(0);
      });
    }
  }
}

function setupExplore() {
  const list = document.getElementById("exploreList");
  const empty = document.getElementById("exploreEmpty");
  const more = document.getElementById("loadMore");
  const budgetSelect = document.getElementById("filterBudget");
  const typeSelect = document.getElementById("filterType");

  if (!list || !budgetSelect || !typeSelect || !more) return;

  let pageIndex = 0;
  const pageSize = 4;

  function getFiltered() {
    return PRODUCTS.filter(product =>
      filterByBudget(product, budgetSelect.value) && filterByType(product, typeSelect.value)
    );
  }

  function renderPage(reset) {
    if (reset) pageIndex = 0;
    const filtered = getFiltered();
    const start = pageIndex * pageSize;
    const slice = filtered.slice(start, start + pageSize);

    renderCards(list, slice, "");
    if (empty) empty.hidden = filtered.length > 0;
    more.hidden = start + pageSize >= filtered.length;
  }

  budgetSelect.addEventListener("change", () => renderPage(true));
  typeSelect.addEventListener("change", () => renderPage(true));
  more.addEventListener("click", () => {
    pageIndex += 1;
    renderPage(false);
  });

  renderPage(true);
}

function setupFavorites() {
  const list = document.getElementById("favoritesList");
  const empty = document.getElementById("favoritesEmpty");
  const more = document.getElementById("favoritesMore");
  const count = document.getElementById("favoritesCount");

  if (!list || !empty || !more || !count) return;

  let pageIndex = 0;
  const pageSize = 4;

  function renderPage(reset) {
    if (reset) pageIndex = 0;
    const favItems = PRODUCTS.filter(item => favorites.has(item.id));
    const start = pageIndex * pageSize;
    const slice = favItems.slice(start, start + pageSize);

    renderCards(list, slice, "");
    empty.hidden = favItems.length > 0;
    more.hidden = start + pageSize >= favItems.length;
    count.textContent = favItems.length.toString();
  }

  more.addEventListener("click", () => {
    pageIndex += 1;
    renderPage(false);
  });

  renderFavoritesPage = renderPage;
  renderPage(true);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("page-home")) {
    setupHome();
  }

  if (document.body.classList.contains("page-explore")) {
    setupExplore();
  }

  if (document.body.classList.contains("page-favorites")) {
    setupFavorites();
  }

  updateFavoriteButtons();
});
