// Optional maintenance task; normal builds use the checked-in media assets.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { assets, media } from "./paths.mjs";

const screenshots = path.join(assets, "screenshots");
const screenshotSources = path.join(media, "screenshots");
for (const filename of fs
  .readdirSync(path.join(screenshots, "light"))
  .filter((name) => name.endsWith(".webp"))) {
  // The homepage dashboard now shares its source with the collections guide.
  const sourceDirectory =
    filename === "dashboard.webp"
      ? path.join(screenshotSources, "docs/collections/tasks-dashboard")
      : path.join(screenshotSources, "landing-page", filename.slice(0, -5));
  for (const theme of ["light", "dark"]) {
    const source = path.join(sourceDirectory, theme + ".png");
    execFileSync("cwebp", [
      "-quiet",
      "-lossless",
      "-m",
      "6",
      source,
      "-o",
      path.join(screenshots, theme, filename),
    ]);
  }
}
fs.cpSync(path.join(screenshotSources, "docs"), path.join(assets, "docs"), {
  recursive: true,
});
await import("./build-note.mjs");
console.log(
  "Rebuilt screenshot WebPs, copied docs screenshots, and rebuilt the Porcelain note atlas. Run pnpm build to preview.",
);
