# Redesign announcement assets

These are original exports, without retouching or compositing. The copies freeze
the comparison at the announcement date instead of changing when homepage
screenshots are replaced.

## Before

Restored with `git show` from commit
`60e4ac7049c17bacaec4e462892320795baa887f` (the `main` branch when retrieved).

| Article asset | Original Git path |
| --- | --- |
| `media/news/redesign/logo-before.png` | `static/media/logo.png` |
| `media/screenshots/news/redesign/editor-before/{light,dark}.png` | `static/media/landing-page/friday/{light,dark}.png` |
| `media/screenshots/news/redesign/tasks-before/{light,dark}.png` | `static/media/landing-page/tasks/{light,dark}.png` |

## After

Copied from the current design at commit
`96ad79ec6abf44d904225e8b51916ee317f6f35f`.

| Article asset | Original source |
| --- | --- |
| `media/news/redesign/logo-after.png` | `media/note/porcelain/png/frame-0000.png` |
| `media/screenshots/news/redesign/editor-after/{light,dark}.png` | `media/screenshots/landing-page/friday/{light,dark}.png` |
| `media/screenshots/news/redesign/tasks-after/{light,dark}.png` | `media/screenshots/landing-page/tasks/{light,dark}.png` |

Astro generates WebP files at build time. The new logo uses the full-resolution
source frame of the existing header icon. The screenshots retain their original
dimensions and aspect ratios; they are not cropped to force pixel alignment.
