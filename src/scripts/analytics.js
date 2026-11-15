// Kept inline by BaseLayout. No animation or navigation depends on analytics.
(() => {
  const config = JSON.parse(document.currentScript.dataset.config);

  if (!config.enabled || !config.hosts.includes(location.hostname)) {
    return;
  }

  const source = "website:" + location.pathname.slice(0, 256);
  const storageKey = "snippets.analytics.visit.v2";
  const idleMs = config.visitIdleMinutes * 60_000;
  let visit = null;

  trackVisitActivity();
  trackPageViews();
  trackClicks();
  trackSections();

  function sendEvent(type, metadata) {
    if (document.visibilityState !== "visible") {
      return;
    }

    fetch(config.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source, type, visit_id: getVisitId(), metadata }),
      credentials: "omit",
      referrerPolicy: "no-referrer",
      keepalive: true,
      signal: AbortSignal.timeout(8000),
    }).catch(() => {
      // Best-effort delivery: failures never interrupt navigation or retry.
    });
  }

  function getVisitId() {
    if (!config.visitIdEnabled || !crypto.randomUUID) {
      return null;
    }

    // Cached documents must use activity recorded by other pages in this tab.
    try {
      const saved = JSON.parse(sessionStorage.getItem(storageKey));

      if (
        saved &&
        /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(saved.id) &&
        Number.isFinite(saved.lastActivity)
      ) {
        visit = saved;
      }
    } catch {
      // Keep the in-memory visit when storage is blocked.
    }

    const now = Date.now();

    if (
      !visit ||
      now - visit.lastActivity >= idleMs ||
      now < visit.lastActivity
    ) {
      visit = { id: crypto.randomUUID(), lastActivity: now };
    }

    visit.lastActivity = now;

    try {
      sessionStorage.setItem(storageKey, JSON.stringify(visit));
    } catch {
      // Keep the in-memory visit when storage is blocked.
    }

    return visit.id;
  }

  function trackVisitActivity() {
    try {
      if (!config.visitIdEnabled) {
        sessionStorage.removeItem(storageKey);
      }
    } catch {
      // Storage can be unavailable.
    }

    let lastActivityCheck = 0;

    function onActivity(event) {
      if (!event.isTrusted || document.visibilityState !== "visible") {
        return;
      }

      const now = Date.now();

      if (now - lastActivityCheck < 5000) {
        return;
      }

      lastActivityCheck = now;
      getVisitId();
    }

    for (const name of ["pointerdown", "keydown", "scroll"]) {
      window.addEventListener(name, onActivity, { passive: true });
    }
  }

  function trackPageViews() {
    let sent = false;

    function onVisible() {
      if (sent || document.visibilityState !== "visible") {
        return;
      }

      sent = true;
      sendEvent("page_view", pageMetadata());
    }

    onVisible();
    document.addEventListener("visibilitychange", onVisible);
  }

  function pageMetadata() {
    const metadata = { referrer_domain: null };

    try {
      const url = new URL(document.referrer);

      if (
        ["https:", "http:"].includes(url.protocol) &&
        /^[a-z0-9.-]{1,253}$/i.test(url.hostname)
      ) {
        metadata.referrer_domain = url.hostname;
      }
    } catch {
      // Empty or invalid referrers are normal.
    }

    const query = new URLSearchParams(location.search);

    for (const name of ["utm_source", "utm_medium", "utm_campaign"]) {
      const value = query.get(name);

      // Campaign slugs only: no arbitrary query strings, email addresses or URLs.
      if (value && /^[a-z0-9_.~-]{1,80}$/i.test(value)) {
        metadata[name] = value;
      }
    }

    return metadata;
  }

  function trackClicks() {
    function onClick(event) {
      if (
        event.defaultPrevented ||
        (event.type === "auxclick" && event.button !== 1)
      ) {
        return;
      }

      const link = event.target.closest?.("a[data-analytics-event]");

      if (!link || link.dataset.analyticsEvent !== "cta_click") {
        return;
      }

      const data = link.dataset;
      const metadata = {
        action: data.analyticsAction,
        placement: data.analyticsPlacement,
      };

      if (data.analyticsAction === "download") {
        metadata.platform = data.analyticsPlatform;
        metadata.distribution = data.analyticsDistribution;

        if (data.analyticsArchitecture) {
          metadata.architecture = data.analyticsArchitecture;
        }
      }

      sendEvent("cta_click", metadata);
    }

    document.addEventListener("click", onClick);
    document.addEventListener("auxclick", onClick);
  }

  function trackSections() {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const dwellMs = 1000;
    const pollMs = 250;
    const sections = new Map();
    const observer = new IntersectionObserver(onIntersection, {
      threshold: 0.5,
      rootMargin: "-72px 0px -12% 0px",
    });

    // Observe headings; whole sections can be taller than the viewport.
    for (const element of document.querySelectorAll(
      "[data-analytics-section]",
    )) {
      sections.set(element, {
        seen: false,
        inView: false,
        timer: null,
        visibleSince: null,
      });
      observer.observe(element);
    }

    document.addEventListener("visibilitychange", () => {
      for (const [element, state] of sections) {
        resetDwell(state);
        checkExposure(element, state);
      }
    });

    function onIntersection(entries) {
      for (const entry of entries) {
        const state = sections.get(entry.target);
        state.inView = entry.isIntersecting && entry.intersectionRatio >= 0.5;

        if (state.inView) {
          checkExposure(entry.target, state);
        } else {
          resetDwell(state);
        }
      }
    }

    function resetDwell(state) {
      clearTimeout(state.timer);
      state.timer = null;
      state.visibleSince = null;
    }

    function checkExposure(element, state) {
      if (
        state.seen ||
        !state.inView ||
        state.timer ||
        document.visibilityState !== "visible"
      ) {
        return;
      }

      const now = Date.now();

      if (!visiblyRevealed(element)) {
        state.visibleSince = null;
      } else if (state.visibleSince === null) {
        state.visibleSince = now;
      }

      if (state.visibleSince !== null && now - state.visibleSince >= dwellMs) {
        state.seen = true;
        sendEvent("section_view", {
          section: element.dataset.analyticsSection,
        });
        observer.unobserve(element);
        return;
      }

      state.timer = setTimeout(() => {
        state.timer = null;
        checkExposure(element, state);
      }, pollMs);
    }
  }

  function visiblyRevealed(element) {
    for (let node = element; node; node = node.parentElement) {
      const style = getComputedStyle(node);

      if (Number(style.opacity) < 0.5 || style.visibility === "hidden") {
        return false;
      }
    }

    const phrase = element.querySelector(".heading-phrase");
    return !phrase || Number(getComputedStyle(phrase).opacity) >= 0.5;
  }
})();
