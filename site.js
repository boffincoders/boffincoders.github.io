// Small progressive enhancements. The page works without this script.
(() => {
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
  };

  // Theme: follows the system until the visitor picks one.
  const saved = store.get("bc-theme");
  if (saved) document.documentElement.dataset.theme = saved;
  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme
      ? document.documentElement.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    store.set("bc-theme", next);
  });

  // Star counts are written into the page when it is published; refresh them
  // from the GitHub API when it answers (it allows 60 requests an hour per visitor).
  const counts = document.querySelectorAll("[data-stars]");
  if (!counts.length || !window.fetch) return;
  fetch("https://api.github.com/users/boffincoders/repos?per_page=100")
    .then((r) => (r.ok ? r.json() : []))
    .then((repos) => {
      const stars = new Map(repos.map((r) => [r.name, r.stargazers_count]));
      counts.forEach((el) => {
        const n = stars.get(el.dataset.stars);
        if (typeof n === "number") el.textContent = n.toLocaleString("en");
      });
    })
    .catch(() => { /* keep the published counts */ });
})();
