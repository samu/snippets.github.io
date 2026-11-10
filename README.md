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
pnpm media:build  # regenerate homepage WebPs, docs screenshots and note atlas
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
| `public/assets/`                                | Published fonts, screenshots, videos and note atlas    |
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
- An optional `cover` supplies the featured image: `light`, optional `dark`,
  `alt`, `width`, and `height`. The sample blog post shows the format. Without
  one, the feature uses the entry type’s icon.
- The same `<Figure>` and `<Callout>` components used in the docs are available
  in posts. Put media in `public/assets/` and reference it with `/assets/...`.

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

Normal builds use checked-in assets and need no image tools.

- Documentation PNG masters live in
  `media/screenshots/docs/<guide>/<name>/{light,dark}.png`. `pnpm media:build`
  copies them to `public/assets/docs/`, alongside existing standalone images and
  videos. `Figure.astro` accepts published PNG URLs or folders containing
  `light.png` and an optional `dark.png`.
- Homepage PNG masters live in
  `media/screenshots/landing-page/<name>/{light,dark}.png`. The homepage
  dashboard uses
  `media/screenshots/docs/collections/tasks-dashboard/{light,dark}.png`. After
  editing masters, run `pnpm media:build`; it requires `cwebp` and ImageMagick's
  `magick` and preserves the published `/assets/` URLs. Update component
  dimensions if screenshot sizes change.
- `media/note/porcelain/` contains the source frames and manifest for the note
  atlas. Both themes use this atlas. Carbon frames are retained for future use.
- `media/reference/porcelain-theme.txt` is a design reference; website colors
  live in `src/styles/brand.css` and `src/styles/themes.css`.

Keep original media under `media/` and published derivatives under
`public/assets/`. Avoid committing temporary renders or duplicate exports.

## Publishing

The GitHub workflow installs with the frozen lockfile, checks formatting and
builds the site. Successful runs on `main` publish `dist/` to `gh-pages`; pull
requests and the configured development branches only validate. The domain
`snippets.ch` is configured in Astro and `public/CNAME`.
