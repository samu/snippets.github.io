# Snippets website

The redesigned Snippets homepage, documentation, pricing and legal pages. The
published site is HTML, CSS and local media only, with no browser JavaScript.
Node/React/MDX are used **only at build time** to render the documentation.

## Develop

Requires Node.js 22+, pnpm 10.26.2, and Python 3 for the local server.

```sh
pnpm install --frozen-lockfile
pnpm dev --port 64530
```

Open the printed localhost address. Omitting `--port` chooses an available port.
The development command rebuilds when source files change; refresh the browser
to see the result. Responses use `Cache-Control: no-store`. A failed build keeps
the last successful preview available.

```sh
pnpm build                 # clean build plus route/asset checks
pnpm check                 # validate the current dist/ again
pnpm preview --port 64530  # serve an existing build, without watching
```

## Organization

| Location | Purpose |
| --- | --- |
| `site/index.html` | Authored homepage, including the scroll choreography markup |
| `site/styles/` | Homepage, shared brand, themes, docs, pricing and legal CSS |
| `site/assets/` | Served fonts, note atlas, optimized homepage screenshots |
| `content/docs/` | The 17 documentation articles (MDX); custom components are provided by the builder |
| `content/legal/` | Privacy policy and terms, with metadata; preserve approved wording |
| `content/pricing.json` | Free/Pro prices and features |
| `content/release.json` | App version used in homepage download links |
| `media/` | Original screenshots, docs media and note animation frames; never published |
| `public/` | Files copied unchanged to the site root, including CNAME and .nojekyll |
| `scripts/` | Build, media maintenance, validation and local preview tools |
| `dist/` | Generated, ignored output; the only directory to publish |

Edit the sources above, never generated files in `dist/`. The build creates a
staging directory, renders docs/pricing/legal pages, generates dark counterparts,
adds canonical links and a sitemap, validates all local links/assets/anchors,
then replaces `dist/`. CSS URLs use content hashes to invalidate stale styles.

The light site lives at `/`; dark counterparts live at `/dark/`. Theme switches
keep the current page, and dark navigation stays in the dark site. Both themes
share content and assets; original dark screenshots are used where available.

Existing `/docs/<slug>/`, `/pricing/`, `/privacy/` and `/terms/` routes are retained.
The retired `/showcase/` route redirects to the homepage features. A static
`404.html` provides recovery links. Four unfinished source guides still show
“Guide in progress”; the migration does not invent missing documentation.

## Media and motion

Runtime media is checked in, so normal builds need no native image tools.
Screenshot masters live in `media/screenshots/`. Docs PNGs and videos live in `media/docs/`; the build copies only referenced
files and their dark variants to `dist/assets/docs/`. Inter's license is next
to its local font in `site/assets/fonts/`.

To regenerate homepage WebPs and the note atlas after replacing source media,
install ImageMagick (`magick`) and WebP (`cwebp`), then run:

```sh
pnpm media:build
pnpm build
```

The Porcelain sequence has 90 frames, played in reverse source order: flat first,
open last. Its CSS atlas is 10 × 9 cells at 480px per cell; the header icon is
160px. Preserve the frame count and geometry unless updating the CSS mapping.
The unused Carbon PNG sequence is retained as a design source, not published.

Scroll effects are CSS-only, with reduced-motion and unsupported-browser
fallbacks. `site/styles/main.css` owns note opening/docking and reveal timing;
`site/styles/encryption.css` owns the E2EE diagrams. Reorganization does not
change their timing, typography or colors.

## Publishing

GitHub Actions installs from the lockfile and builds/checks the site on pull
requests and pushes to `main` or `codex/homepage-v2`. Only `main` may publish.
The workflow publishes **only `dist/`** to the existing `gh-pages` branch, keeping
`snippets.ch`, `.nojekyll`, and the existing `GIT_PASS` deployment secret plus
`GIT_USER_NAME` / `GIT_USER_EMAIL` repository variables. GitHub Pages should
continue to serve the root of `gh-pages`; no hosting setting change is required.

The former Docusaurus app and the interim `v2/` output are retired. Their previous
versions remain in Git history. No deployment is needed to run this project locally.
