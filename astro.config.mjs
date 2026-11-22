import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified, rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeDocs from "./src/lib/rehype-docs.mjs";

export default defineConfig({
  site: "https://snippets.ch",
  output: "static",
  image: {
    service: sharpImageService({ webp: { lossless: true, effort: 6 } }),
  },
  // Preserve whitespace between inline heading phrases and content fragments.
  compressHTML: false,
  // Scope component styles without increasing the specificity of existing selectors.
  scopedStyleStrategy: "where",
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
  markdown: {
    syntaxHighlight: "prism",
    processor: unified({
      smartypants: false,
      rehypePlugins: [rehypeHeadingIds, rehypeDocs],
    }),
  },
  integrations: [
    {
      name: "dev-showcase",
      hooks: {
        "astro:config:setup": ({ command, injectRoute }) => {
          if (command === "dev") {
            injectRoute({
              pattern: "/showcase/",
              entrypoint: "./src/dev/showcase/index.astro",
            });
          }
        },
      },
    },
    mdx({ optimize: false }),
    sitemap(),
  ],
});
