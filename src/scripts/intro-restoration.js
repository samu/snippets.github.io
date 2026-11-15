// Inlined before styles on the homepage. CSS still owns positions and motion.
(() => {
  const root = document.documentElement;
  let frame = 0;

  function holdTransitions() {
    cancelAnimationFrame(frame);
    root.setAttribute("data-intro-restoring", "");
  }

  function restoreTransitions() {
    holdTransitions();
    // Let native scroll restoration and CSS timeline sampling settle first.
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        root.removeAttribute("data-intro-restoring");
      });
    });
  }

  holdTransitions();
  window.addEventListener("pageshow", restoreTransitions);
  window.addEventListener("pagehide", holdTransitions);
})();
