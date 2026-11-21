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
  const filter = document.getElementById("filter");
  const status = document.getElementById("result");
  const index = document.getElementById("report-search-index");
  const reports = index ? JSON.parse(index.textContent) : {};
  const normalize = (text) => text.normalize("NFKC").replace(/[‘’]/g, "'").replace(/[–—]/g, "-").replace(/\s+/g, " ");
  const months = Array.from(document.querySelectorAll(".month"), (section) => ({
    section,
    count: section.querySelector(".month-count"),
    rows: Array.from(section.querySelectorAll(".entries li"), (row) => {
      const day = row.querySelector("time").dateTime;
      const body = normalize(reports[day] || "");
      const transcriptLink = row.querySelector(".transcript-hit");
      return {
        day, row, body,
        title: normalize(row.dataset.search).toLowerCase(),
        bodySearch: body.toLowerCase(),
        excerpt: row.querySelector(".entry-excerpt"),
        transcriptLink,
        transcriptHref: transcriptLink?.getAttribute("href"),
        transcriptTime: transcriptLink?.querySelector(".transcript-hit-time"),
        transcriptExcerpt: transcriptLink?.querySelector(".transcript-hit-excerpt"),
      };
    }),
  }));
  const transcripts = new Map();
  let transcriptState = "idle";
  function loadTranscripts() {
    if (transcriptState !== "idle" || !filter.dataset.transcriptIndex) return;
    transcriptState = "loading";
    const script = document.createElement("script");
    script.src = filter.dataset.transcriptIndex;
    script.addEventListener("load", () => {
      for (const [day, records] of Object.entries(globalThis.zeeverseTranscriptData || {})) {
        let offset = 0;
        let textOffset = 0;
        const normalized = [];
        const text = [];
        const passages = records.map(([anchor, seconds, source]) => {
          const part = normalize(source).toLowerCase();
          const passage = {anchor, seconds, offset, textOffset, length: source.length};
          normalized.push(part);
          text.push(source);
          offset += part.length + 1;
          textOffset += source.length + 1;
          return passage;
        });
        transcripts.set(day, {passages, search: normalized.join(" "), text: text.join(" ")});
      }
      delete globalThis.zeeverseTranscriptData;
      transcriptState = "ready";
      script.remove();
      if (query.value.trim()) filterReports();
    }, {once: true});
    script.addEventListener("error", () => {
      transcriptState = "failed";
      script.remove();
      if (query.value.trim()) filterReports();
    }, {once: true});
    document.head.append(script);
  }

  function snippet(text, hit, length) {
    const start = Math.max(0, hit - 35);
    const end = Math.min(text.length, hit + length + 100);
    return (start > 0 ? "…" : "") + text.slice(start, end).trim()
      + (end < text.length ? "…" : "");
  }

  function showExcerpt(item, term) {
    if (!item.excerpt) return;
    item.excerpt.hidden = !term;
    if (!term) return;
    const hit = item.bodySearch.indexOf(term);
    item.excerpt.textContent = snippet(item.body, hit, term.length);
  }

  function transcriptMatch(item, terms, missing) {
    const transcript = transcripts.get(item.day);
    if (!transcript || !terms.length) return null;
    const topicalTerms = terms.filter((term) => !item.title.includes(term));
    const required = missing.length ? missing : (topicalTerms.length ? topicalTerms : terms);
    if (!required.every((term) => transcript.search.includes(term))) return null;

    // Prefer the complete phrase, then locate the most specific term in the transcript.
    let needle = topicalTerms.length ? topicalTerms.join(" ") : terms.join(" ");
    let hit = transcript.search.indexOf(needle);
    if (hit < 0) {
      needle = required.reduce((longest, term) => term.length > longest.length ? term : longest);
      hit = transcript.search.indexOf(needle);
    }
    const passage = transcript.passages.findLast((part) => part.offset <= hit);
    const textHit = passage.textOffset + Math.min(hit - passage.offset, passage.length - 1);
    return {passage, excerpt: snippet(transcript.text, textHit, needle.length)};
  }

  function showTranscript(item, hit, highlight) {
    if (!item.transcriptLink) return;
    item.transcriptLink.hidden = !hit;
    if (!hit) return;
    const {anchor, seconds} = hit.passage;
    item.transcriptLink.setAttribute("href", item.transcriptHref + "#" + anchor);
    if (seconds === null) {
      item.transcriptTime.textContent = "";
    } else {
      const minute = Math.floor(seconds / 60);
      const clock = [minute % 60, seconds % 60].map((unit) => String(unit).padStart(2, "0")).join(":");
      item.transcriptTime.textContent = " · " + (minute >= 60 ? Math.floor(minute / 60) + ":" : "") + clock;
    }

    const fragment = document.createDocumentFragment();
    let position = 0;
    for (const match of hit.excerpt.matchAll(highlight)) {
      fragment.append(hit.excerpt.slice(position, match.index));
      const mark = document.createElement("mark");
      mark.textContent = match[0];
      fragment.append(mark);
      position = match.index + match[0].length;
    }
    fragment.append(hit.excerpt.slice(position));
    item.transcriptExcerpt.replaceChildren(fragment);
  }

  function filterReports() {
    const terms = normalize(query.value).toLowerCase().trim().split(" ").filter(Boolean);
    if (terms.length) loadTranscripts();
    const highlight = new RegExp(terms.map((term) => term.replace(/[.*+?^{}$()|[\]\\]/g, "\\$&")).join("|"), "giu");
    let count = 0;
    for (const month of months) {
      let hits = 0;
      for (const item of month.rows) {
        const missing = terms.filter((term) => !item.title.includes(term) && !item.bodySearch.includes(term));
        const original = transcriptMatch(item, terms, missing);
        const visible = !missing.length || original !== null;
        item.row.hidden = !visible;
        showExcerpt(item, visible && terms.find((term) => !item.title.includes(term) && item.bodySearch.includes(term)));
        showTranscript(item, original, highlight);
        if (visible) hits += 1;
      }
      month.section.hidden = hits === 0;
      month.count.textContent = hits;
      count += hits;
    }
    if (!terms.length) {
      status.textContent = status.dataset.count.replace("{count}", count);
    } else {
      const result = count === 0 ? status.dataset.empty
        : count === 1 ? status.dataset.one : status.dataset.found.replace("{count}", count);
      const pending = transcriptState === "loading" ? status.dataset.loading
        : transcriptState === "failed" ? status.dataset.unavailable : "";
      status.textContent = pending ? (count ? result + " · " + pending : pending) : result;
    }
  }
  filter.hidden = false;
  query.addEventListener("focus", loadTranscripts, {once: true});
  query.addEventListener("input", filterReports);
  window.addEventListener("pageshow", filterReports);
  window.addEventListener("load", () => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadTranscripts, {timeout: 1000});
    } else {
      window.setTimeout(loadTranscripts, 0);
    }
  }, {once: true});
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

const recording = document.getElementById("original-audio");
if (recording) {
  const errorMessage = document.getElementById("audio-error");
  function seekToTranscriptPassage() {
    const passage = document.getElementById(location.hash.slice(1));
    const cue = passage?.matches(".transcript-passage") && passage.querySelector("[data-audio-time]");
    if (!cue) return;
    recording.preload = "metadata";
    recording.currentTime = Number(cue.dataset.audioTime);
  }
  recording.addEventListener("error", () => { errorMessage.hidden = false; });
  recording.addEventListener("playing", () => { errorMessage.hidden = true; });
  window.addEventListener("hashchange", seekToTranscriptPassage);
  seekToTranscriptPassage();
  document.addEventListener("click", (event) => {
    const cue = event.target.closest("a[data-audio-time]");
    if (!cue || event.defaultPrevented || event.button !== 0 || event.ctrlKey
        || event.metaKey || event.altKey || event.shiftKey) return;
    event.preventDefault();
    recording.currentTime = Number(cue.dataset.audioTime);
    recording.play().catch((error) => {
      if (error.name !== "AbortError") errorMessage.hidden = false;
    });
  });
}

const progress = document.querySelector(".reading-progress");
if (progress) {
  const links = Array.from(document.querySelectorAll(".toc-rail a"));
  const headings = links.map((link) => document.getElementById(link.hash.slice(1)));
  const audioPlayer = document.querySelector(".audio-player");
  let active = null;
  let frame = 0;
  function updateReadingPosition() {
    frame = 0;
    const maximum = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = "scaleX(" + (maximum > 0 ? Math.min(1, window.scrollY / maximum) : 0) + ")";
    let position = 0;
    const readingEdge = 96 + (audioPlayer?.offsetHeight ?? 0);
    for (let index = 0; index < headings.length; index += 1) {
      if (headings[index].getBoundingClientRect().top > readingEdge) break;
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
