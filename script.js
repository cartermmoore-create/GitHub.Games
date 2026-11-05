(() => {
  const catalog = Array.isArray(window.GAME_CATALOG) ? window.GAME_CATALOG : [];
  const grid = document.getElementById("games-grid");
  const search = document.getElementById("search");
  const providerFilter = document.getElementById("provider-filter");
  const sort = document.getElementById("sort");
  const emptyState = document.getElementById("empty-state");
  const categoryButtons = [...document.querySelectorAll(".category-chip")];
  const resultCount = document.getElementById("result-count");
  const heroCount = document.getElementById("hero-count");
  const clearButton = document.getElementById("clear-filters");
  let activeCategory = "all";

  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  const providerClass = (name) => ({
    "Poki": "poki",
    "Coolmath Games": "coolmath",
    "CrazyGames": "crazygames"
  })[name] || "";

  function cardMarkup(game) {
    const title = escapeHTML(game.title);
    const provider = escapeHTML(game.provider);
    const description = escapeHTML(game.description);
    const label = escapeHTML(game.label);
    const url = escapeHTML(game.url);
    const art = escapeHTML(game.art);
    const symbol = escapeHTML(game.symbol);
    const featured = game.featured ? '<span class="art-badge">FEATURED PICK</span>' : '<span class="art-badge">BROWSER GAME</span>';

    return `
      <article class="game-card">
        <div class="game-art art-${art}">
          ${featured}
          <span class="art-symbol" aria-hidden="true">${symbol}</span>
          <div class="art-title">${title}<small>PLAY IN YOUR BROWSER</small></div>
        </div>
        <div class="game-info">
          <div class="game-heading">
            <div><h3>${title}</h3><p>${description}</p></div>
            <span class="genre-tag">${label}</span>
          </div>
          <div class="game-bottom">
            <span class="publisher-name"><i class="publisher-dot ${providerClass(game.provider)}"></i>${provider}</span>
            <a class="play-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Play ${title} on ${provider}">Play game <span>↗</span></a>
          </div>
        </div>
      </article>`;
  }

  function render() {
    const query = search.value.trim().toLowerCase();
    let visible = catalog.filter((game) => {
      const matchesCategory = activeCategory === "all" || game.category === activeCategory;
      const matchesProvider = providerFilter.value === "all" || game.provider === providerFilter.value;
      const searchable = `${game.title} ${game.provider} ${game.category} ${game.label} ${game.description}`.toLowerCase();
      return matchesCategory && matchesProvider && (!query || searchable.includes(query));
    });

    if (sort.value === "az") {
      visible.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      visible.sort((a, b) => Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title));
    }

    grid.innerHTML = visible.map(cardMarkup).join("");
    emptyState.hidden = visible.length !== 0;
    resultCount.textContent = visible.length;
    heroCount.textContent = catalog.length;
    categoryButtons.forEach((button) => {
      const active = button.dataset.category === activeCategory;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      render();
    });
  });
  search.addEventListener("input", render);
  providerFilter.addEventListener("change", render);
  sort.addEventListener("change", render);

  clearButton.addEventListener("click", () => {
    search.value = "";
    providerFilter.value = "all";
    sort.value = "featured";
    activeCategory = "all";
    render();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== search) {
      event.preventDefault();
      search.focus();
    }
  });

  render();
})();