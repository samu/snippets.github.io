# Original media

These are editable inputs, not files to serve or deploy.

- `screenshots/<name>/{light,dark}.png`: original product screenshots. Keep these
  lossless masters, including additional captures for future use.
- `docs/`: original documentation screenshots and videos. The build copies
  referenced files and their dark counterparts, retaining unused originals here.
- `note/porcelain/png/` and `png-manifest.json`: the approved 90-frame sequence
  used by `pnpm media:build`. The manifest includes the original render settings.
- `note/carbon/png/` and `png-manifest.json`: matching dark sequence supplied for
  future use. The current site intentionally retains its approved Porcelain note.
- `reference/porcelain-theme.txt`: original supplied app theme, retained as a
  design reference. Website colors are implemented in `site/styles/brand.css`.

Do not add derived ZIPs, preview GIFs, duplicate WebP frame sequences or alternate
icon experiments here. Runtime derivatives live in `site/assets/`.
