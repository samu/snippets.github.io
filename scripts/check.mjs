import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { parse } from "parse5";
import { output, content, repo } from "./paths.mjs";

function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? files(file) : [file];
  });
}
function* elements(node) {
  if (node.tagName) yield node;
  for (const child of node.childNodes || []) yield* elements(child);
}
const built = files(output);
const documents = new Map(
  built
    .filter((f) => f.endsWith(".html"))
    .map((file) => {
      const html = fs.readFileSync(file, "utf8");
      assert(
        !html.includes("{{release.version}}"),
        "Unresolved release placeholder: " + file,
      );
      const nodes = [...elements(parse(html))];
      return [
        file,
        {
          nodes,
          ids: new Set(
            nodes.flatMap((n) =>
              n.attrs.filter((a) => a.name === "id").map((a) => a.value),
            ),
          ),
        },
      ];
    }),
);
const failures = [];
let links = 0;
function visibleText(node) {
  if (node.nodeName === "#text") return node.value;
  if (node.tagName === "br") return " ";
  return (node.childNodes || []).map(visibleText).join("");
}
function checkURL(value, file) {
  if (!value || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value)) return;
  const base = new URL(
    path.relative(output, file).split(path.sep).join("/"),
    "https://preview.local/",
  );
  const url = new URL(value, base);
  let target = path.join(output, decodeURIComponent(url.pathname));
  if (fs.existsSync(target) && fs.statSync(target).isDirectory())
    target = path.join(target, "index.html");
  if (!fs.existsSync(target))
    failures.push(`${path.relative(output, file)} → missing ${value}`);
  else if (
    url.hash &&
    documents.has(target) &&
    !documents.get(target).ids.has(decodeURIComponent(url.hash.slice(1)))
  )
    failures.push(`${path.relative(output, file)} → missing anchor ${value}`);
  links++;
}
for (const [file, { nodes }] of documents) {
  for (const node of nodes) {
    if (node.tagName === "script")
      failures.push("Browser JavaScript in " + file);
    const classes =
      node.attrs.find((a) => a.name === "class")?.value.split(/\s+/) || [];
    const label = node.attrs.find((a) => a.name === "aria-label")?.value;
    if (
      classes.includes("phrase-reveal") &&
      label &&
      visibleText(node).replace(/\s+/g, " ").trim() !== label
    ) {
      failures.push(
        "Heading phrase spacing differs from its accessible label in " + file,
      );
    }
    for (const { name, value } of node.attrs) {
      if (name.startsWith("on") || /^javascript:/i.test(value))
        failures.push("Inline JavaScript in " + file);
      if (["href", "src", "poster"].includes(name)) checkURL(value, file);
    }
  }
}
for (const file of built.filter((f) => f.endsWith(".css"))) {
  const css = fs.readFileSync(file, "utf8");
  // A CSS minifier previously folded these into an unsupported shorthand,
  // leaving the intro over the whole page and freezing the note on frame one.
  if (/^main\..*\.css$/.test(path.basename(file))) {
    assert(
      /\.note-sprite\s*\{[^}]*animation-timeline:\s*scroll\(/.test(css),
      "The note must retain its scroll-timeline longhand",
    );
    assert(
      /\.intro-copy\s*\{[^}]*animation-timeline:\s*scroll\(/.test(css),
      "The intro must retain its scroll-timeline longhand",
    );
  }
  for (const [, url] of css.matchAll(/url\(["']?([^"')]+)["']?\)/g))
    checkURL(url, file);
}
const slugs = fs
  .readdirSync(path.join(content, "docs"))
  .filter((f) => f.endsWith(".mdx"))
  .map((f) => f.slice(0, -4));
const newsSlugs = fs
  .readdirSync(path.join(content, "news"))
  .filter((f) => f.endsWith(".mdx"))
  .map((f) => f.slice(0, -4));
const attr = (node, name) => node.attrs.find((a) => a.name === name)?.value;
const legacyRoutes = [
  "",
  "docs/",
  "pricing/",
  "privacy/",
  "terms/",
  ...slugs.map((slug) => `docs/${slug}/`),
];
for (const route of [
  ...legacyRoutes,
  "news/",
  ...newsSlugs.map((slug) => `news/${slug}/`),
]) {
  const file = path.join(output, route, "index.html");
  assert(documents.has(file), "Missing page: " + file);
  const { nodes } = documents.get(file);
  const toggles = nodes.filter((node) => attr(node, "id") === "theme-toggle");
  assert.equal(
    toggles.length,
    1,
    "Missing or repeated theme checkbox: " + file,
  );
  assert(
    toggles[0].tagName === "input" &&
      attr(toggles[0], "type") === "checkbox" &&
      attr(toggles[0], "aria-label"),
    "Theme toggle must be an accessible native checkbox: " + file,
  );
  const stylesheets = nodes.filter(
    (node) => node.tagName === "link" && attr(node, "rel") === "stylesheet",
  );
  assert(
    stylesheets.some((node) => {
      const url = new URL(attr(node, "href"), "https://preview.local/" + route);
      return fs
        .readFileSync(path.join(output, url.pathname), "utf8")
        .includes("#theme-toggle:checked");
    }),
    "Missing shared theme CSS: " + file,
  );
  assert(
    nodes.some(
      (node) => node.tagName === "a" && attr(node, "href") === "/news/",
    ),
    "Missing News navigation: " + file,
  );
  if (!legacyRoutes.includes(route)) continue;
  const legacy = documents.get(path.join(output, "dark", route, "index.html"));
  assert(
    legacy?.nodes.some((node) => {
      if (node.tagName !== "meta" || attr(node, "http-equiv") !== "refresh")
        return false;
      const target = attr(node, "content")?.match(
        /url\s*=\s*['"]?([^'"]+)/i,
      )?.[1];
      return (
        target &&
        new URL(target, "https://preview.local/").pathname === "/" + route
      );
    }),
    "Missing legacy theme redirect: " + route,
  );
  assert(
    !legacy.nodes.some((node) => node.tagName === "main"),
    "Duplicate dark content: " + route,
  );
}
for (const name of [
  "CNAME",
  ".nojekyll",
  "404.html",
  "robots.txt",
  "sitemap-index.xml",
  "sitemap-0.xml",
  "pricing.json",
])
  assert(fs.existsSync(path.join(output, name)), "Missing " + name);
assert.deepEqual(
  fs.readFileSync(path.join(output, "pricing.json")),
  fs.readFileSync(path.join(repo, "public/pricing.json")),
  "The public /pricing.json must be copied unchanged",
);
assert(
  !built.some((f) => /\.(?:m?js|tsx?|mdx|py)$/.test(f)),
  "Build tools or source code leaked into dist",
);
assert.equal(failures.length, 0, failures.join("\n"));
console.log(
  `Checked ${documents.size} HTML pages and ${links} local references; all routes/assets/anchors resolve, no browser JavaScript.`,
);
