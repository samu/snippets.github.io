// Inlined in the head so the saved theme is applied before the first paint.
(() => {
  const storageKey = "snippets-theme";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  function readPreference(fallback = null) {
    try {
      const value = localStorage.getItem(storageKey);
      return value === "light" || value === "dark" ? value : null;
    } catch {
      return fallback;
    }
  }

  let preference = readPreference();

  function applyTheme() {
    const theme = preference ?? (systemTheme.matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    const toggle = document.getElementById("theme-toggle");
    if (toggle) toggle.checked = theme === "dark";
  }

  applyTheme();
  document.addEventListener("DOMContentLoaded", applyTheme, { once: true });
  document.addEventListener("change", (event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    if (event.target.id !== "theme-toggle") return;
    preference = event.target.checked ? "dark" : "light";
    applyTheme();
    try {
      localStorage.setItem(storageKey, preference);
    } catch {
      // Keep the toggle usable when browser storage is unavailable.
    }
  });

  systemTheme.addEventListener("change", () => {
    if (!preference) applyTheme();
  });

  function restorePreference() {
    preference = readPreference(preference);
    applyTheme();
  }
  // Back/forward may restore an older document and checkbox from the page cache.
  window.addEventListener("pageshow", restorePreference);
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey || event.key === null) restorePreference();
  });
})();
