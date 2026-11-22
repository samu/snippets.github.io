(() => {
  const section = document.querySelector("#themes");
  if (!section) return;

  const viewport = section.querySelector(".themes-window");
  const track = section.querySelector(".themes-track");
  const group = section.querySelector(".themes-group");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const driftSpeed = 28;
  const edgeSpeed = 900;
  let width = group.getBoundingClientRect().width;
  let offset = 0;
  let speed = driftSpeed;
  let targetSpeed = driftSpeed;
  let inView = false;
  let frame = 0;
  let previousTime = null;

  function render() {
    track.style.setProperty("--themes-offset", `${-offset}px`);
  }

  function animate(time) {
    const elapsed =
      previousTime === null ? 0 : Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;
    // Ease velocity changes without resetting the row's position.
    speed += (targetSpeed - speed) * (1 - Math.exp(-elapsed * 8));
    offset = (((offset + speed * elapsed) % width) + width) % width;
    render();
    frame = requestAnimationFrame(animate);
  }

  function syncPlayback() {
    if (reducedMotion.matches) {
      delete track.dataset.motion;
      track.style.removeProperty("--themes-offset");
    } else {
      track.dataset.motion = "pointer";
      render();
    }

    const running =
      !reducedMotion.matches &&
      inView &&
      document.visibilityState === "visible" &&
      width > 0;

    if (running && !frame) {
      previousTime = null;
      frame = requestAnimationFrame(animate);
    } else if (!running && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = null;
    }
  }

  viewport.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    const bounds = viewport.getBoundingClientRect();
    if (!bounds.width) return;
    // The first two-thirds keep the slow drift; only the rightmost third accelerates.
    const progress = Math.max(
      0,
      Math.min(1, (3 * (event.clientX - bounds.left)) / bounds.width - 2),
    );
    const strength = Math.expm1(2 * progress) / Math.expm1(2);
    targetSpeed = driftSpeed + (edgeSpeed - driftSpeed) * strength;
  });

  function restoreDrift() {
    targetSpeed = driftSpeed;
  }
  viewport.addEventListener("pointerleave", restoreDrift);
  viewport.addEventListener("pointercancel", restoreDrift);
  document.addEventListener("visibilitychange", syncPlayback);
  reducedMotion.addEventListener("change", syncPlayback);

  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    syncPlayback();
  }).observe(viewport);

  new ResizeObserver(() => {
    const nextWidth = group.getBoundingClientRect().width;
    offset = width > 0 ? (offset * nextWidth) / width : 0;
    width = nextWidth;
    syncPlayback();
  }).observe(group);

  syncPlayback();
})();
