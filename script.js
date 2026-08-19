document.documentElement.classList.add("js");

/* Vocabulary explorer: filter by level, filter by theme, and search. */
const vocabRows = [...document.querySelectorAll("#vocab-body tr[data-level]")];
const vocabStatus = document.querySelector("#vocab-status");
const vocabSearch = document.querySelector("#vocab-search");
const emptyRow = document.querySelector("#vocab-empty");
const levelButtons = [...document.querySelectorAll("[data-level-filter]")];
const themeButtons = [...document.querySelectorAll("[data-theme-filter]")];

let activeLevel = "all";
let activeTheme = "all";

function normalise(value) {
  return value.toLocaleLowerCase().replace(/[\u0300-\u036f]/g, "");
}

function applyVocabFilters() {
  const query = normalise((vocabSearch?.value || "").trim());
  let shown = 0;

  vocabRows.forEach((row) => {
    const matchesLevel = activeLevel === "all" || row.dataset.level === activeLevel;
    const matchesTheme = activeTheme === "all" || row.dataset.theme.split(" ").includes(activeTheme);
    const matchesQuery = query === "" || normalise(row.dataset.search).includes(query);
    const visible = matchesLevel && matchesTheme && matchesQuery;
    row.hidden = !visible;
    if (visible) shown += 1;
  });

  if (emptyRow) emptyRow.hidden = shown !== 0;
  if (vocabStatus) {
    vocabStatus.textContent = shown === 0
      ? "No entries match. Clear the search box or choose “All levels”."
      : `${shown} entr${shown === 1 ? "y" : "ies"} shown.`;
  }
}

levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeLevel = button.dataset.levelFilter;
    levelButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    applyVocabFilters();
  });
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTheme = button.dataset.themeFilter;
    themeButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    applyVocabFilters();
  });
});

if (vocabSearch) {
  vocabSearch.addEventListener("input", applyVocabFilters);
}

if (vocabRows.length) applyVocabFilters();

/* Grammar patterns: filter by conversational job. */
const patternCards = [...document.querySelectorAll(".pattern[data-use]")];
const patternStatus = document.querySelector("#pattern-status");
const patternButtons = [...document.querySelectorAll("[data-use-filter]")];

function applyPatternFilter(filter) {
  let shown = 0;
  patternCards.forEach((card) => {
    const visible = filter === "all" || card.dataset.use.split(" ").includes(filter);
    card.hidden = !visible;
    if (visible) shown += 1;
  });
  if (patternStatus) {
    patternStatus.textContent = `${shown} pattern${shown === 1 ? "" : "s"} shown.`;
  }
}

patternButtons.forEach((button) => {
  button.addEventListener("click", () => {
    patternButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    applyPatternFilter(button.dataset.useFilter);
  });
});

if (patternCards.length) applyPatternFilter("all");

/* Close the compact jump menu after a choice. */
document.querySelectorAll(".jump-menu a").forEach((link) => {
  link.addEventListener("click", () => link.closest("details")?.removeAttribute("open"));
});

/* Highlight the section currently in view. */
const navLinks = [...document.querySelectorAll(".wide-nav a[href^='#']")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${visible.target.id}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }, { rootMargin: "-20% 0px -65%", threshold: [0, 0.25, 0.75] });
  sections.forEach((section) => observer.observe(section));
}
