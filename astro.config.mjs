import fs from "node:fs";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified, rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeDocs from "./src/lib/rehype-docs.mjs";

const slugs = fs
  .readdirSync(new URL("./src/content/docs/", import.meta.url))
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => file.slice(0, -4));
const routes = [
  "",
  "docs/",
  "pricing/",
  "privacy/",
  "terms/",
  ...slugs.map((slug) => `docs/${slug}/`),
];

export default defineConfig({
  site: "https://snippets.ch",
  output: "static",
  // Preserve whitespace between inline heading phrases and content fragments.
  compressHTML: false,
  trailingSlash: "always",
  server: {
    host: "127.0.0.1",
    port: 64530,
    headers: { "Cache-Control": "no-store" },
  },
  vite: {
    server: { strictPort: true },
    // Keep timeline longhands: the minifier folds them into an animation shorthand
    // that current browsers can reject, disabling the CSS-only scroll effects.
    build: { assetsInlineLimit: 0, cssMinify: false },
  },
  devToolbar: { enabled: false },
  build: { inlineStylesheets: "never" },
  redirects: {
    ...Object.fromEntries(
      routes.map((route) => ["/dark/" + route, "/" + route]),
    ),
    "/showcase/": "/#features",
    "/dark/showcase/": "/#features",
  },
  markdown: {
    syntaxHighlight: "prism",
    processor: unified({
      smartypants: false,
      rehypePlugins: [rehypeHeadingIds, rehypeDocs],
    }),
  },
  integrations: [
    mdx({ optimize: false }),
    sitemap({
      filter: (url) =>
        !new URL(url).pathname.startsWith("/dark/") &&
        !url.includes("/showcase/"),
    }),
  ],
});
