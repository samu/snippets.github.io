// Paths are relative to media/screenshots; adding a PNG needs no registry edit.
const screenshots = import.meta.glob("/media/screenshots/**/*.png", {
  import: "default",
});

export function hasScreenshot(src) {
  return Object.hasOwn(screenshots, `/media/screenshots/${src}`);
}

export async function getScreenshot(src) {
  const load = screenshots[`/media/screenshots/${src}`];
  if (!load) {
    throw new Error(`Screenshot not found: media/screenshots/${src}`);
  }
  return load();
}
