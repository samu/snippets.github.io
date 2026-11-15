import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { randomUUID } from "node:crypto";
import { analyticsConfig as config } from "../src/lib/analytics-config.js";

const script = fs.readFileSync(
  new URL("../src/scripts/analytics.js", import.meta.url),
  "utf8",
);
const key = "snippets.analytics.visit.v2";
const flush = () => new Promise((resolve) => setImmediate(resolve));

function browser({
  overrides = {},
  host = "snippets.ch",
  pathname = "/pricing/",
  storage = new Map(),
  now = 1_800_000_000_000,
  hidden = false,
  status = 200,
  networkFailure = false,
  blocked = false,
} = {}) {
  const listeners = {};
  const timers = new Map();
  const requests = [];
  let timerId = 0;
  let observer;
  const heading = {
    dataset: { analyticsSection: "encryption" },
    opacity: "1",
    querySelector: () => null,
  };
  const on = (name, fn) => (listeners[name] ??= []).push(fn);
  const document = {
    currentScript: {
      dataset: { config: JSON.stringify({ ...config, ...overrides }) },
    },
    visibilityState: hidden ? "hidden" : "visible",
    referrer: "https://example.org/private/path?email=someone@example.org",
    addEventListener: on,
    querySelectorAll: () => [heading],
  };
  vm.runInNewContext(script, {
    document,
    window: { addEventListener: on },
    location: {
      hostname: host,
      pathname,
      search:
        "?utm_source=newsletter&utm_campaign=launch&utm_medium=email@example.org&secret=private",
    },
    sessionStorage: {
      getItem(name) {
        if (blocked) throw new Error();
        return storage.get(name) ?? null;
      },
      setItem(name, value) {
        if (blocked) throw new Error();
        storage.set(name, value);
      },
      removeItem(name) {
        storage.delete(name);
      },
    },
    crypto: { randomUUID },
    URL,
    URLSearchParams,
    AbortSignal,
    Date: class extends Date {
      static now() {
        return now;
      }
    },
    setTimeout(fn, delay) {
      const id = ++timerId;
      timers.set(id, { fn, at: now + delay });
      return id;
    },
    clearTimeout(id) {
      timers.delete(id);
    },
    getComputedStyle: (node) => ({
      opacity: node.opacity,
      visibility: "visible",
    }),
    IntersectionObserver: class {
      constructor(callback) {
        observer = callback;
      }
      observe() {}
      unobserve() {}
    },
    fetch: async (url, options) => {
      requests.push({ url, ...options, event: JSON.parse(options.body) });
      if (networkFailure) throw new TypeError("Network unavailable");
      return { status };
    },
  });
  return {
    requests,
    storage,
    document,
    heading,
    emit(name, event = {}) {
      for (const fn of listeners[name] ?? []) fn(event);
    },
    intersect(inView) {
      observer([
        {
          target: heading,
          isIntersecting: inView,
          intersectionRatio: inView ? 1 : 0,
        },
      ]);
    },
    advance(ms) {
      const end = now + ms;
      while (true) {
        const next = [...timers]
          .filter(([, timer]) => timer.at <= end)
          .sort((a, b) => a[1].at - b[1].at)[0];
        if (!next) break;
        now = next[1].at;
        timers.delete(next[0]);
        next[1].fn();
      }
      now = end;
    },
    click(data) {
      this.emit("click", { target: { closest: () => ({ dataset: data }) } });
    },
    events(type) {
      return requests
        .map((r) => r.event)
        .filter((e) => !type || e.type === type);
    },
  };
}

test("production allowlist and collection switch prevent all local traffic", () => {
  for (const host of [
    "localhost",
    "127.0.0.1",
    "192.168.1.20",
    "preview.snippets.ch",
    "snippets.ch.evil.test",
  ]) {
    assert.equal(browser({ host }).requests.length, 0);
  }
  assert.equal(browser({ overrides: { enabled: false } }).requests.length, 0);
});

test("page views omit URL secrets and keep only approved campaign slugs", () => {
  const b = browser();
  assert.deepEqual(b.events()[0].metadata, {
    referrer_domain: "example.org",
    utm_source: "newsletter",
    utm_campaign: "launch",
  });
  assert.equal(b.events()[0].source, "website:/pricing/");
  assert.deepEqual(Object.keys(b.events()[0]).sort(), [
    "metadata",
    "source",
    "type",
    "visit_id",
  ]);
  assert.equal(b.requests[0].keepalive, true);
  assert.equal(b.requests[0].credentials, "omit");
  assert.equal(b.requests[0].referrerPolicy, "no-referrer");
});

test("visit ID survives navigation between sources and rotates after 30 idle minutes", () => {
  const a = browser();
  const b = browser({
    storage: a.storage,
    pathname: "/",
    now: 1_800_000_000_000 + 60_000,
  });
  assert.equal(a.events()[0].visit_id, b.events()[0].visit_id);
  assert.equal(b.events()[0].source, "website:/");
  b.advance(30 * 60_000);
  b.click({
    analyticsEvent: "cta_click",
    analyticsAction: "show_downloads",
    analyticsPlacement: "header",
  });
  assert.notEqual(b.events()[0].visit_id, b.events()[1].visit_id);
});

test("cached pages reuse the latest stored visit, including a rotated ID", () => {
  for (const minutesAway of [20, 31]) {
    const a = browser();
    a.document.visibilityState = "hidden";
    a.emit("visibilitychange");
    const b = browser({
      storage: a.storage,
      pathname: "/",
      now: 1_800_000_000_000 + minutesAway * 60_000,
    });

    // Restore the original document, keeping its JavaScript state alive.
    a.advance(35 * 60_000);
    a.document.visibilityState = "visible";
    a.emit("pageshow", { persisted: true });
    a.emit("visibilitychange");
    a.click({
      analyticsEvent: "cta_click",
      analyticsAction: "show_downloads",
      analyticsPlacement: "header",
    });
    assert.equal(a.events("cta_click")[0].visit_id, b.events()[0].visit_id);
    assert.equal(a.events("page_view").length, 1);
  }
});

test("real activity extends the idle timeout without sending heartbeat events", () => {
  const b = browser();
  const id = b.events()[0].visit_id;
  b.advance(20 * 60_000);
  b.emit("scroll", { isTrusted: true });
  b.advance(20 * 60_000);
  b.click({
    analyticsEvent: "cta_click",
    analyticsAction: "show_downloads",
    analyticsPlacement: "hero",
  });
  assert.equal(b.events().length, 2);
  assert.equal(b.events()[1].visit_id, id);
});

test("visit feature off removes the stored token but retains aggregate event counts", () => {
  const a = browser();
  const b = browser({
    storage: a.storage,
    overrides: { visitIdEnabled: false },
  });
  assert.equal(b.events()[0].visit_id, null);
  assert.equal(b.storage.has(key), false);
  assert.equal(b.events()[0].source, "website:/pricing/");
  const c = browser({ storage: b.storage });
  assert.notEqual(a.events()[0].visit_id, c.events()[0].visit_id);
});

test("blocked or corrupt storage does not break collection", () => {
  assert.ok(browser({ blocked: true }).events()[0].visit_id);
  assert.ok(
    browser({ storage: new Map([[key, "invalid json"]]) }).events()[0].visit_id,
  );
});

test("section views require dwell, visible content and a foreground tab; emit once", () => {
  const b = browser();
  b.intersect(true);
  b.advance(700);
  b.intersect(false);
  b.advance(1000);
  assert.equal(b.events("section_view").length, 0);
  b.intersect(true);
  b.document.visibilityState = "hidden";
  b.emit("visibilitychange");
  b.advance(2000);
  b.document.visibilityState = "visible";
  b.heading.opacity = "0";
  b.emit("visibilitychange");
  b.advance(1000);
  assert.equal(b.events("section_view").length, 0);
  b.heading.opacity = "1";
  b.advance(250);
  assert.equal(b.events("section_view").length, 0);
  b.advance(999);
  assert.equal(b.events("section_view").length, 0);
  b.advance(1);
  assert.equal(b.events("section_view").length, 1);
  b.intersect(false);
  b.intersect(true);
  b.advance(3000);
  assert.equal(b.events("section_view").length, 1);
});

test("a heading fading out restarts the one-second visible dwell", () => {
  const b = browser();
  b.intersect(true);
  b.advance(750);
  b.heading.opacity = "0";
  b.advance(250);
  b.heading.opacity = "1";
  b.advance(250);
  assert.equal(b.events("section_view").length, 0);
  b.advance(999);
  assert.equal(b.events("section_view").length, 0);
  b.advance(1);
  assert.equal(b.events("section_view").length, 1);
});

test("background-loaded pages defer the page view until visible", () => {
  const b = browser({ hidden: true });
  assert.equal(b.events().length, 0);
  b.document.visibilityState = "visible";
  b.emit("visibilitychange");
  b.emit("visibilitychange");
  assert.equal(b.events("page_view").length, 1);
});

test("show_downloads is a CTA without download details", () => {
  const b = browser();
  b.click({
    analyticsEvent: "cta_click",
    analyticsAction: "show_downloads",
    analyticsPlacement: "hero",
  });
  assert.deepEqual(
    b.events("cta_click").map((event) => event.metadata),
    [{ action: "show_downloads", placement: "hero" }],
  );
});

test("download CTAs preserve platform, distribution, placement and optional architecture", () => {
  for (const download of [
    { platform: "android", distribution: "apk", placement: "mobile" },
    { platform: "ios", distribution: "app_store", placement: "announcement" },
    {
      platform: "macos",
      distribution: "installer",
      placement: "download",
      architecture: "arm64",
    },
  ]) {
    const b = browser();
    b.click({
      analyticsEvent: "cta_click",
      analyticsAction: "download",
      analyticsPlatform: download.platform,
      analyticsDistribution: download.distribution,
      analyticsPlacement: download.placement,
      analyticsArchitecture: download.architecture,
    });
    assert.deepEqual(
      b.events("cta_click").map((event) => event.metadata),
      [{ action: "download", ...download }],
    );
    assert.deepEqual(
      b.events().map((event) => event.type),
      ["page_view", "cta_click"],
    );
  }
});

test("analytics failures are ignored without retrying or preventing later events", async () => {
  for (const options of [
    { status: 503 },
    { status: 429 },
    { status: 400 },
    { networkFailure: true },
  ]) {
    const b = browser(options);
    await flush();
    b.advance(10_000);
    await flush();
    assert.equal(b.events().length, 1);
    b.click({
      analyticsEvent: "cta_click",
      analyticsAction: "show_downloads",
      analyticsPlacement: "hero",
    });
    await flush();
    assert.equal(b.events().length, 2);
  }
});
