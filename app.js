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
    name: "Porte-cles en acier inoxydable grave sur mesure",
    description: "Un porte-cles personnalise qui garde vos plus beaux souvenirs toujours avec vous. Ajoutez une photo qui compte vraiment et un texte au dos pour le rendre unique. Un cadeau discret, elegant et charge d'emotion, parfait pour faire plaisir sans se tromper.",
    category: "mode",
    price: 5,
    link: "https://www.amazon.fr/Porte-cl%C3%A9s-calendrier-personnalis%C3%A9-sp%C3%A9ciale-disponibles/dp/B0B1TFB17K/ref=sr_1_32_sspa?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3DW5VNP7XUETB&dib=eyJ2IjoiMSJ9.E_Nt42LIFj-nikhDBTq382a-WspW5nKTsLK_G1SdzRuETTodgq6-hPziu6Q5UxLGf_I8jwPHSDr_sq8CaRn8BbwGVpu-VSzb6Xo97rJVYee1TfWpptJKK9RMMPBUko-R4rH-zdJWyA8qP16GQVnE_wpwAE1RbdyGEyFDy-HSYSC1W5-XihQhF6bLq1bFe-2-WfzGqrhFsEOQLfj-WS9ia9E5ILMz09qxjns3KVSD8CncIWpMpT_5iaP8PijFreeIstTtfHDzNDcjn8LvhQT1Neu5hnR8pT5vcZoUwXvhrx8.DZcDUEx1MiJuj9SH54BWMCW0UdsTzp-H25PXKkVSwhk&dib_tag=se&keywords=Porte-cles+metal&qid=1766449134&sprefix=porte-cles+metal%2Caps%2C922&sr=8-32-spons&aref=BNlgFX4P1x&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
    image: "porte%20clee.jpg"
  },
  {
    id: "mini-candle",
    name: "Bougie Parfumee Pivoine et Poire Anjou",
    description: "Une bougie parfumee elegante qui cree instantanement une ambiance douce et chaleureuse. L'association de la pivoine florale et de la poire d'Anjou apporte une senteur fraiche, delicate et apaisante. Un cadeau simple et raffine, parfait pour se detendre ou faire plaisir sans se tromper.",
    category: "bien-etre",
    price: 5,
    link: "https://www.amazon.fr/Bougie-d%C3%A9sodorisant-grenade-bergamote-combustion/dp/B08DJ6WJTQ/ref=pd_bxgy_thbs_d_sccl_2/525-1462363-5219435?pd_rd_w=R3AFN&content-id=amzn1.sym.3241dc27-b429-4dd8-b1d4-32e571df604c&pf_rd_p=3241dc27-b429-4dd8-b1d4-32e571df604c&pf_rd_r=HAMWS6H4ZKBK4R65AAG0&pd_rd_wg=amL0D&pd_rd_r=4f275423-6779-42a8-9e45-dce959c0528f&pd_rd_i=B08DJ6WJTQ&th=1",
    image: "bougie.jpg"
  },
  {
    id: "mini-notebook",
    name: "Lot de 3 Carnets Hokusai - Carnet de Notes A6",
    description: "Un lot de carnets elegants inspires des oeuvres emblematiques de Hokusai. Leur format A6 est parfait pour noter des idees, dessiner ou ecrire au quotidien. Un cadeau artistique et pratique, ideal pour les amateurs d'art et de papeterie raffinee.",
    category: "loisirs",
    price: 5,
    link: "https://www.amazon.fr/Kokonote-Carnets-Hokusai-Notebook-Recettes/dp/B0BVGBZP7Z/ref=sr_1_13?dib=eyJ2IjoiMSJ9.yFGYQmgguZU3FUjzNOOCFOOf_2e99BpjChXmsCnZoWchAWCeJrKIzXsn50gZkkTlQnmUwopWhFtibO0pVuvm_uaQf5JJPeUOtqZBldnwqWQFO_waOWFwOY9NKiNGDUxmUMeX5JhrsnPdrFUeRUmkl8SRuALxPCTr9HeoXnkn0Oh5KzXBldVvRodSemSvAk2gq9l2-O_flKpYP5PQv900SKtpqn-KoytJ7S9aYRaqzVrNQd5KvF0k3hn60Yf9uK00GOufxBYGs9ZvMOqnwnVppf1hKpyyNPeLY75enWeFu1M.zXYFAqtxGQdCrCHPLKAzvA6yQs6BahMAFKTCaYXT1kM&dib_tag=se&keywords=Mini+carnet&qid=1766452100&sr=8-13",
    image: "carnet.jpg"
  },
  {
    id: "travel-mug",
    name: "UZSPACE Mug Isotherme",
    description: "Un mug isotherme elegant qui garde vos boissons chaudes ou froides pendant des heures. Sa poignee confortable, sa paille integree et son design artistique en font un compagnon parfait au quotidien. Un cadeau pratique et style, ideal pour le cafe, le the ou les boissons fraiches, a la maison comme en deplacement.",
    category: "maison",
    price: 22,
    link: "https://www.amazon.fr/UZSPACE-Mug-Isotherme-avec-Poign%C3%A9e/dp/B0FY2LKQS2/ref=sxin_24_sbv_search_btf?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.e465c033-1722-4c7f-83fa-b78395dac004%3Aamzn1.sym.e465c033-1722-4c7f-83fa-b78395dac004&crid=5GRA54DWKD8R&cv_ct_cx=Mug%2Bisotherme&keywords=Mug%2Bisotherme&pd_rd_i=B0FY2KYH8C&pd_rd_r=503665b2-a363-4326-bc17-c38455f5453b&pd_rd_w=zP7m0&pd_rd_wg=mR43P&pf_rd_p=e465c033-1722-4c7f-83fa-b78395dac004&pf_rd_r=7RRBYC8QFRPQG4Q9BE71&qid=1766452570&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mug%2Bisotherme%2Caps%2C470&sr=1-1-07652b71-81e3-41f8-9097-e46726928fb7&th=1",
    image: "mug%20isotherme.jpg"
  },
  {
    id: "tea-kit",
    name: "Les 2 Marmottes - Grand Coffret",
    description: "Un grand coffret d'infusions et de thes pour savourer des moments de calme et de bien-etre. Une selection variee de recettes naturelles, sans aromes ajoutes, fabriquees en France avec soin. Un cadeau chaleureux et raffine, parfait pour se detendre et faire plaisir a coup sur.",
    category: "bien-etre",
    price: 18,
    link: "https://www.amazon.fr/Marmottes-R%C3%A9coltes-Infusions-Bien-%C3%8Atre-Relaxation/dp/B0CTCZ9ZLC/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.a75e204b-30fd-45f8-a56f-102ffd5951f5%3Aamzn1.sym.a75e204b-30fd-45f8-a56f-102ffd5951f5&cv_ct_cx=Coffret%2Bthe&keywords=Coffret%2Bthe&pd_rd_i=B0CTCZ9ZLC&pd_rd_r=e5926224-4b26-4f77-ae49-18142a08a465&pd_rd_w=ceJmQ&pd_rd_wg=2vvsn&pf_rd_p=a75e204b-30fd-45f8-a56f-102ffd5951f5&pf_rd_r=RPP51CMQP0XRAKYDWX49&qid=1766452879&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-3-1c0bc4f8-9a4b-47e4-b117-3d30b74c13f1-spons&aref=7FnANHgXAh&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1",
    image: "boite%20de%20the.jpg",
    imageFit: "cover"
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
    name: "Plante d'interieur - Yucca elephantipes",
    description: "Une plante d'interieur elegante et facile a vivre qui apporte instantanement une touche de verdure a votre interieur. Le yucca elephantipes est apprecie pour son allure moderne et sa grande resistance. Un cadeau naturel et decoratif, parfait pour illuminer un espace sans contrainte d'entretien.",
    category: "maison",
    price: 24,
    link: "https://www.amazon.fr/dp/B0G2CSMWTL/ref=sspa_dk_detail_3?pf_rd_p=48016705-69f5-4af0-98de-e97187b24a0b&pf_rd_r=NBM4R288G9GB6JYYK0TQ&pd_rd_wg=t2c9F&pd_rd_w=6V47p&content-id=amzn1.sym.48016705-69f5-4af0-98de-e97187b24a0b&pd_rd_r=39eee778-0bed-4377-821a-bf0b1e989b39&aref=l3Hv2V11Yu&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy&th=1",
    image: "plante.jpg",
    imageFit: "cover"
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
  if (product.imageFit === "cover") {
    media.classList.add("card-media-cover");
  }
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

  if (navigator.vibrate) {
    navigator.vibrate(20);
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
    let currentQuery = "";
    let showAll = false;

    function getSorted() {
      return PRODUCTS.filter(item => matchesQuery(item, currentQuery)).sort((a, b) => b.price - a.price);
    }

    function setToggleLabel() {
      allMore.textContent = showAll ? "Voir moins" : "Voir plus";
      allMore.setAttribute("aria-expanded", showAll ? "true" : "false");
    }

    function renderAll() {
      const filtered = getSorted();

      if (!filtered.length) {
        allList.innerHTML = "";
        const msg = document.createElement("p");
        msg.className = "muted empty-state";
        msg.textContent = "Aucun cadeau pour cette recherche.";
        allList.appendChild(msg);
        allMore.hidden = true;
        allSection.classList.add("is-visible");
        showAll = true;
        setToggleLabel();
        return;
      }

      allList.innerHTML = "";
      filtered.forEach(item => allList.appendChild(createCard(item)));
      updateFavoriteButtons();
      allSection.classList.add("is-visible");
      allMore.hidden = false;
      showAll = true;
      setToggleLabel();
    }

    function collapseAll() {
      showAll = false;
      allSection.classList.remove("is-visible");
      allList.innerHTML = "";
      allMore.hidden = false;
      setToggleLabel();
    }

    allMore.addEventListener("click", () => {
      if (showAll) {
        collapseAll();
        return;
      }
      renderAll();
    });

    if (searchForm && searchInput) {
      searchForm.addEventListener("submit", event => {
        event.preventDefault();
        currentQuery = searchInput.value.trim();
        renderAll();
      });

      searchInput.addEventListener("input", () => {
        currentQuery = searchInput.value.trim();
        if (!currentQuery && !allSection.classList.contains("is-visible")) {
          return;
        }
        renderAll();
      });
    }

    setToggleLabel();
  }
}

function setupExplore() {
  const list = document.getElementById("exploreList");
  const empty = document.getElementById("exploreEmpty");
  const more = document.getElementById("loadMore");
  const budgetSelect = document.getElementById("filterBudget");
  const typeSelect = document.getElementById("filterType");

  if (!list || !budgetSelect || !typeSelect || !more) return;

  const pageSize = 4;
  let showAll = false;

  function getFiltered() {
    return PRODUCTS.filter(product =>
      filterByBudget(product, budgetSelect.value) && filterByType(product, typeSelect.value)
    );
  }

  function renderList(reset) {
    if (reset) showAll = false;
    const filtered = getFiltered();
    const slice = showAll ? filtered : filtered.slice(0, pageSize);

    renderCards(list, slice, "");
    if (empty) empty.hidden = filtered.length > 0;
    more.hidden = filtered.length <= pageSize;
    more.textContent = showAll ? "Voir moins" : "Voir plus";
  }

  budgetSelect.addEventListener("change", () => renderList(true));
  typeSelect.addEventListener("change", () => renderList(true));
  more.addEventListener("click", () => {
    showAll = !showAll;
    renderList(false);
  });

  renderList(true);
}

function setupFavorites() {
  const list = document.getElementById("favoritesList");
  const empty = document.getElementById("favoritesEmpty");
  const more = document.getElementById("favoritesMore");
  const count = document.getElementById("favoritesCount");

  if (!list || !empty || !more || !count) return;

  const pageSize = 4;
  let showAll = false;

  function renderList(reset) {
    if (reset) showAll = false;
    const favItems = PRODUCTS.filter(item => favorites.has(item.id));
    const slice = showAll ? favItems : favItems.slice(0, pageSize);

    renderCards(list, slice, "");
    empty.hidden = favItems.length > 0;
    more.hidden = favItems.length <= pageSize;
    more.textContent = showAll ? "Voir moins" : "Voir plus";
    count.textContent = favItems.length.toString();
  }

  more.addEventListener("click", () => {
    showAll = !showAll;
    renderList(false);
  });

  renderFavoritesPage = renderList;
  renderList(true);
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
