// Report the active archive page to its Surf wrapper.
(() => {
  if (window.parent === window) return;

  const parentOrigin = document.currentScript.dataset.parentOrigin;
  function sharePage() {
    window.parent.postMessage({
      type: "zeeverse-ama:navigate",
      url: location.href,
      title: document.title,
    }, parentOrigin);
  }

  for (const link of document.querySelectorAll('a[href]')) {
    if (link.origin !== location.origin && /^https?:$/.test(link.protocol)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  }

  window.addEventListener("pageshow", sharePage);
  window.addEventListener("hashchange", sharePage);
  sharePage();
})();
