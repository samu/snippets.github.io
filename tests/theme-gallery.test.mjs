import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const script = fs.readFileSync(
  new URL("../src/scripts/theme-gallery.js", import.meta.url),
  "utf8",
);

function gallery() {
  function target(values = {}) {
    const listeners = new Map();
    return Object.assign(values, {
      addEventListener(name, fn) {
        const callbacks = listeners.get(name) || [];
        callbacks.push(fn);
        listeners.set(name, callbacks);
      },
      emit(name, event = {}) {
        for (const fn of listeners.get(name) || []) fn(event);
      },
    });
  }
  const properties = new Map();
  const frames = new Map();
  let nextFrame = 0;
  let now = 0;
  let width = 8000;
  let onView;
  let onResize;
  const viewport = target({
    keyboardFocus: false,
    matches() {
      return this.keyboardFocus;
    },
    getBoundingClientRect: () => ({ left: 0, width: 1000 }),
  });
  const reduced = target({ matches: false });
  const track = {
    dataset: {},
    style: {
      setProperty: (name, value) => properties.set(name, value),
      removeProperty: (name) => properties.delete(name),
    },
  };
  const group = { getBoundingClientRect: () => ({ width }) };
  const elements = {
    ".themes-window": viewport,
    ".themes-track": track,
    ".themes-group": group,
  };
  const document = target({
    visibilityState: "visible",
    querySelector: () => ({ querySelector: (selector) => elements[selector] }),
  });
  vm.runInNewContext(script, {
    document,
    matchMedia: () => reduced,
    requestAnimationFrame(fn) {
      frames.set(++nextFrame, fn);
      return nextFrame;
    },
    cancelAnimationFrame: (id) => frames.delete(id),
    IntersectionObserver: class {
      constructor(fn) {
        onView = fn;
      }
      observe() {}
    },
    ResizeObserver: class {
      constructor(fn) {
        onResize = fn;
      }
      observe() {}
    },
  });
  const offset = () => -parseFloat(properties.get("--themes-offset") || "0");
  function advance(milliseconds = 1000) {
    for (let elapsed = 0; elapsed < milliseconds; elapsed += 10) {
      now += 10;
      const pending = [...frames.values()];
      frames.clear();
      for (const fn of pending) fn(now);
    }
  }
  return {
    viewport,
    reduced,
    track,
    document,
    offset,
    advance,
    frames: () => frames.size,
    visible(value = true) {
      onView([{ isIntersecting: value }]);
    },
    resize(value) {
      width = value;
      onResize();
    },
    move(clientX, pointerType = "mouse") {
      viewport.emit("pointermove", { clientX, pointerType });
    },
    travel() {
      const start = offset();
      advance();
      return ((offset() - start + width * 1.5) % width) - width / 2;
    },
  };
}

test("only the rightmost third accelerates, with a capped exponential ramp", () => {
  const g = gallery();
  g.visible();
  g.advance();
  const drift = g.travel();
  assert(drift > 27 && drift < 29);

  const speeds = [2000 / 3, 750, 2500 / 3, 2750 / 3, 1000].map((position) => {
    g.move(position);
    g.advance(2000);
    return g.travel();
  });
  assert(Math.abs(speeds[0] - drift) < 0.01);
  assert(speeds[4] > 899 && speeds[4] <= 900.01);
  const gains = speeds.slice(1).map((speed, index) => speed - speeds[index]);
  assert(
    gains.every(
      (gain, index) => gain > 0 && (!index || gain > gains[index - 1]),
    ),
  );

  for (const position of [0, 125, 250, 500, 625, 666, 2000 / 3]) {
    g.move(position);
    g.advance(2000);
    assert(Math.abs(g.travel() - drift) < 0.01);
  }
  g.move(1000);
  g.advance(2000);
  g.viewport.emit("pointerleave");
  g.advance(2000);
  assert(Math.abs(g.travel() - drift) < 0.1);
});

test("the centre and keyboard focus do not halt automatic motion", () => {
  const g = gallery();
  g.visible();
  g.viewport.keyboardFocus = true;
  g.viewport.emit("focusin");
  assert.equal(g.frames(), 1);
  for (const position of [499, 500, 501]) {
    g.move(position);
    g.advance(2000);
    const speed = g.travel();
    assert(Math.abs(speed) > 27 && Math.abs(speed) < 29);
    assert(speed > 0);
  }
});

test("moving between the edges and centre never reverses or stops the row", () => {
  const g = gallery();
  g.visible();
  g.advance();
  for (const position of [0, 1000, 500, 250, 750, 0]) {
    g.move(position);
    for (let frame = 0; frame < 40; frame++) {
      const before = g.offset();
      g.advance(10);
      assert(g.offset() > before);
    }
  }
});

test("offscreen, hidden and reduced-motion rows do not animate", () => {
  const g = gallery();
  assert.equal(g.frames(), 0);
  g.visible();
  assert.equal(g.frames(), 1);
  g.document.visibilityState = "hidden";
  g.document.emit("visibilitychange");
  assert.equal(g.frames(), 0);
  g.document.visibilityState = "visible";
  g.document.emit("visibilitychange");
  assert.equal(g.frames(), 1);
  g.reduced.matches = true;
  g.reduced.emit("change");
  assert.equal(g.frames(), 0);
  assert.equal(g.track.dataset.motion, undefined);
  g.reduced.matches = false;
  g.reduced.emit("change");
  assert.equal(g.frames(), 1);
  g.visible(false);
  assert.equal(g.frames(), 0);
});

test("scrolling wraps continuously and resizing preserves position in the sequence", () => {
  const g = gallery();
  g.resize(100);
  g.visible();
  g.move(0);
  for (let index = 0; index < 100; index++) {
    g.advance(100);
    assert(g.offset() >= 0 && g.offset() < 100);
  }
  const position = g.offset();
  g.resize(200);
  assert(Math.abs(g.offset() - position * 2) < 0.001);
  g.move(1000);
  g.advance(3000);
  assert(g.offset() >= 0 && g.offset() < 200);
});

test("touch movement leaves the gentle automatic drift unchanged", () => {
  const g = gallery();
  g.visible();
  g.move(1000, "touch");
  g.advance();
  assert(Math.abs(g.travel() - 28) < 0.01);
});
