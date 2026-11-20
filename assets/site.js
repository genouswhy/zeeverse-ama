const themeButton = document.querySelector(".theme");
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const label = theme === "dark" ? themeButton.dataset.light : themeButton.dataset.dark;
  themeButton.setAttribute("aria-label", label);
  themeButton.title = label;
}
if (themeButton) {
  let theme = "light";
  try {
    if (localStorage.getItem("zeeverse-theme") === "dark") theme = "dark";
  } catch {
    // The archive also works when the browser blocks storage in frames.
  }
  applyTheme(theme);
  themeButton.hidden = false;
  themeButton.addEventListener("click", () => {
    theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try {
      localStorage.setItem("zeeverse-theme", theme);
    } catch {
      // Keep the selected theme for the current page.
    }
  });
}

const query = document.getElementById("query");
if (query) {
  const status = document.getElementById("result");
  const months = Array.from(document.querySelectorAll(".month"), (section) => ({
    section,
    count: section.querySelector(".month-count"),
    rows: Array.from(section.querySelectorAll(".entries li")),
  }));
  function filterReports() {
    const terms = query.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let count = 0;
    for (const month of months) {
      let hits = 0;
      for (const row of month.rows) {
        const visible = terms.every((term) => row.dataset.search.includes(term));
        row.hidden = !visible;
        if (visible) hits += 1;
      }
      month.section.hidden = hits === 0;
      month.count.textContent = hits;
      count += hits;
    }
    if (!terms.length) {
      status.textContent = status.dataset.count.replace("{count}", count);
    } else if (count === 0) {
      status.textContent = status.dataset.empty;
    } else {
      status.textContent = count === 1 ? status.dataset.one : status.dataset.found.replace("{count}", count);
    }
  }
  document.getElementById("filter").hidden = false;
  query.addEventListener("input", filterReports);
  window.addEventListener("pageshow", filterReports);
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !event.altKey && !event.ctrlKey && !event.metaKey
        && !event.target.closest("input, textarea, [contenteditable]")) {
      event.preventDefault();
      query.focus();
    }
  });
  filterReports();
}

const toc = document.querySelector(".toc");
if (toc) {
  toc.addEventListener("click", (event) => {
    if (event.target.closest("a")) toc.open = false;
  });
}

const progress = document.querySelector(".reading-progress");
if (progress) {
  const links = Array.from(document.querySelectorAll(".toc-rail a"));
  const headings = links.map((link) => document.getElementById(link.hash.slice(1)));
  let active = null;
  let frame = 0;
  function updateReadingPosition() {
    frame = 0;
    const maximum = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = "scaleX(" + (maximum > 0 ? Math.min(1, window.scrollY / maximum) : 0) + ")";
    let position = 0;
    for (let index = 0; index < headings.length; index += 1) {
      if (headings[index].getBoundingClientRect().top > 96) break;
      position = index;
    }
    const next = links[position];
    if (next && next !== active) {
      if (active) active.removeAttribute("aria-current");
      next.setAttribute("aria-current", "location");
      active = next;
    }
  }
  function scheduleReadingUpdate() {
    if (!frame) frame = window.requestAnimationFrame(updateReadingPosition);
  }
  window.addEventListener("scroll", scheduleReadingUpdate, {passive: true});
  window.addEventListener("resize", scheduleReadingUpdate);
  window.addEventListener("pageshow", scheduleReadingUpdate);
  window.addEventListener("hashchange", scheduleReadingUpdate);
  updateReadingPosition();
}
