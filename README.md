# Snippets website

Static Astro site for [snippets.ch](https://snippets.ch): homepage,
documentation, news, pricing and legal pages. The published build contains HTML,
CSS, fonts and media, with no browser JavaScript.

## Development

Requires Node.js **22.23.4 or newer** and **pnpm 10.26.2**.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://127.0.0.1:64530/. The port is fixed; use `pnpm dev --port 64531` if
it is occupied. Dev responses disable caching.

```sh
pnpm build        # build dist/ and validate the output
pnpm check        # validate an existing dist/ without rebuilding
pnpm preview      # serve dist/ on port 64530
pnpm format       # format source, configuration and documentation
pnpm format:check # check formatting without writing
pnpm note:build   # regenerate the note animation atlas after editing its frames
```

Prettier uses the Astro plugin and formats MDX, CSS, JavaScript, JSON, YAML and
Markdown. Generated files and original media are excluded in `.prettierignore`.
The Astro formatter's whitespace mode matches `compressHTML: false` in
`astro.config.mjs`; keep those settings aligned.

When Astro runs in the background during agent sessions, use `--ignore-lock` to
keep dev/preview in the foreground. Stop background servers with
`pnpm exec astro dev stop` or `pnpm exec astro preview stop`.

## Where to edit

| Location                                        | Purpose                                                |
| ----------------------------------------------- | ------------------------------------------------------ |
| `src/pages/`, `src/layouts/`, `src/components/` | Routes, shared layouts and page sections               |
| `src/content/docs/`                             | MDX guides with title, description and draft metadata  |
| `src/content/news/`                             | Blog posts, announcements and release notes in MDX     |
| `src/data/doc-navigation.json`                  | Guide grouping and order; include every MDX guide      |
| `src/data/release.json`                         | App version used in download links                     |
| `src/styles/`                                   | Global styles, themes and scroll effects               |
| `src/lib/styles.js`                             | Stylesheet order for each layout                       |
| `media/screenshots/`                            | PNG screenshot sources, discovered automatically       |
| `public/assets/`                                | Published fonts, videos and note atlas                 |
| `public/pricing.json`                           | Pricing data shared by the page and external consumers |
| `public/news.json`                              | Public news feed with titles, summaries and timestamps |
| `astro.config.mjs`                              | Domain, port, Markdown, redirects and sitemap          |
| `scripts/`                                      | Output checks and optional media generation            |

## Writing news

Add an MDX file to `src/content/news/`. Its filename becomes the URL:
`a-new-idea.mdx` is published at `/news/a-new-idea/`. The News page lists
entries newest first and gives the latest one the featured position.

```mdx
---
title: "A new idea."
description: "A short introduction shown in the listing and above the article."
date: "2026-11-09"
kind: blog
---

Start writing here.

## A little more detail

Markdown headings, lists, links and images work as usual.
```

- `kind` is `blog`, `announcement`, or `release`; each gets its own label and
  accent color.
- Quote the date and use `YYYY-MM-DD`. Entries are published when the site is
  built; dates control ordering, not scheduled publication.
- `version` is optional for release notes. Quote it, for example `"0.22.0"`.
- `sample: true` adds a visible sample label and a noindex tag. Remove it when
  replacing the examples with real content.
- An optional `cover` supplies the featured image: `light`, optional `dark`, and
  `alt`. Image paths are relative to `media/screenshots/`, for example
  `landing-page/friday/light.png`. Dimensions come from the PNGs. The sample
  blog post shows the format. Without a cover, the feature uses the entry type’s
  icon.
- The same `<Figure>` and `<Callout>` components used in the docs are available
  in posts. Put screenshots in `media/screenshots/` and reference them as
  described below. Videos and other files served unchanged belong in
  `public/assets/`.

`src/data/news.js` reads and validates the metadata during the build. The
listing and individual pages are ordinary static HTML; adding a post requires no
new route, build script, or browser JavaScript. The top navigation includes News
throughout the site, including a native disclosure menu on mobile.

`public/news.json` is served unchanged at `/news.json`. Keep it aligned with the
News entries, newest first. Each item has `id` (the post’s filename slug,
without `.mdx`), `title`, `summary` (the post’s description), and `date` (UTC
Unix timestamp in milliseconds). Its article is available at `/news/{id}/`.

## Build constraints

- `pnpm build` checks routes, local links/assets/anchors, heading spacing, theme
  controls, redirects and the absence of browser JavaScript. `pnpm check` runs
  this output validator; it is not a TypeScript check or an external link
  checker.
- Keep `/pricing.json` and its existing fields available to external consumers.
  It is copied unchanged from `public/`.
- Preserve the stylesheet order in `src/lib/styles.js`. HTML compression and CSS
  minification are disabled to retain inline spacing and animation timeline
  longhands.
- Themes follow the system preference. The native checkbox reverses it for the
  current page; manual choices do not persist across navigation.
- Motion is a CSS enhancement with static and reduced-motion fallbacks. The note
  atlas has 90 frames in a 10 × 9 grid. Changes to its frame count or layout
  must also update the keyframes and background sizing in `src/styles/main.css`.

## Media

Keep screenshot PNGs in `media/screenshots/`, using the existing `landing-page/`
and `docs/<guide>/` subfolders. This source directory is intentionally outside
`public/`: Astro copies public files unchanged, while imported PNGs can be
converted during the build. No `static/` folder is needed.

`src/lib/screenshots.js` discovers PNGs recursively with `import.meta.glob`. Add
or replace a PNG, then use `pnpm dev` or `pnpm build`; Astro generates lossless
WebPs and reads their dimensions automatically. There is no separate screenshot
conversion command, import list, or generated image to commit. Only referenced
screenshots are processed, and missing paths fail with a clear error. Generated
image URLs are managed by Astro; reference source names in code.

- Homepage PNGs live in
  `media/screenshots/landing-page/<name>/{light,dark}.png`. The homepage
  dashboard uses
  `media/screenshots/docs/collections/tasks-dashboard/{light,dark}.png`. Use the
  shared `Screenshot` component with a path relative to `media/screenshots/`:

  ```astro
  <Screenshot
    src="landing-page/friday/light.png"
    alt="A Friday journal entry"
  />
  ```

- Documentation PNGs live in `media/screenshots/docs/<guide>/`. `Figure` accepts
  a standalone PNG or a folder containing `light.png` and an optional
  `dark.png`. A folder automatically displays the image for the current theme;
  with only `light.png`, that image appears in both themes:

  ```mdx
  <Figure src="docs/collections/notes-folder" caption="A folder of notes" />
  <Figure
    src="docs/visualizations/interval.png"
    alt="An interval visualization"
  />
  ```

- Videos remain in `public/assets/docs/` and use `/assets/docs/...` URLs.
- `media/note/porcelain/` contains the source frames and manifest for the note
  atlas. Both themes use this atlas. Run `pnpm note:build` only after editing
  these frames; this separate sprite-sheet task requires `cwebp` and
  ImageMagick's `magick`. Carbon frames are retained for future use.
- `media/reference/porcelain-theme.txt` is a design reference; website colors
  live in `src/styles/brand.css` and `src/styles/themes.css`.

Normal site builds need no external image commands. Keep screenshot originals
under `media/` and let Astro generate their published derivatives in `dist/`.
Avoid committing temporary renders or duplicate exports.

## Publishing

The GitHub workflow installs with the frozen lockfile, checks formatting and
builds the site. Successful runs on `main` publish `dist/` to `gh-pages`; pull
requests and the configured development branches only validate. The domain
`snippets.ch` is configured in Astro and `public/CNAME`.
