# Snippets · Porcelain light and dark

A self-contained, buildless landing page. HTML, CSS, and local assets only:
no JavaScript, framework, remote font requests, analytics, or runtime dependency.

## Preview

From the repository root:

```sh
python3 v2/serve.py
```

The default port `0` asks the operating system to pick an available port. Open the address
printed by the server. The current preview was started at
<http://127.0.0.1:64530/>.

Use `--port 64530` to keep that address. The development server sends
`Cache-Control: no-store` for all files and ignores conditional cache validators,
so each reload reads the current files. This Python helper only runs locally;
the webpage itself remains HTML and CSS only.

## Themes

The light preview is at <http://127.0.0.1:64530/> and the dark preview is at
<http://127.0.0.1:64530/dark/>. The moon/sun link in every header switches to
the same page in the other theme. Dark navigation stays under `/dark/`,
including docs and pricing, without JavaScript, cookies, or local storage.
Switching the homepage lands at its main slogan rather than replaying the intro.

`themes.css` supplies neutral charcoal surfaces, soft-white typography, neutral actions,
and dark red/green encryption diagrams. Existing dark product screenshots
replace their light counterparts where supplied; other media keep their original
appearance. Screenshot dimensions are taken from the actual source images.
The transparent Porcelain note and all scroll choreography are shared.

After editing the homepage, regenerate both variants with:

```sh
node v2/build-themes.mjs
```

The docs and pricing generators run this step automatically. Dark HTML is
generated from the light source; edit shared source and CSS, not `v2/dark/`.
Product WebPs are lossless conversions of the repository's dark PNGs. Documentation
uses its original dark PNGs where available. Shared assets are not duplicated.

## Documentation

Open <http://127.0.0.1:64530/docs/> for the documentation overview. All 17
existing `docs/*.mdx` pages have local HTML counterparts at
`v2/docs/<slug>/index.html`; homepage documentation links now lead to them.
The original article text, 35 light screenshots, seven video demonstrations,
code examples, and callouts are preserved. The four source pages containing
only `tbd.` have an explicit “Guide in progress” presentation with related links.

The docs use the homepage's local Inter font and shared neutral palette, with a
grouped sidebar, article outlines, heading links, previous/next navigation,
native video controls, image links to full-size originals, and a print layout.
On smaller screens, navigation and article outlines use native `details`
disclosures. Documentation content has no animation dependency.

To regenerate after editing the original MDX, with the repository's existing
Node dependencies installed:

```sh
node v2/build-docs.mjs
```

The generator uses the existing MDX/React packages only at build time; there
are no scripts, hydration, or additional dependencies in the generated pages.
`docs.css` is independent of the homepage's animation styles. Only referenced
documentation media are copied into `v2/assets/docs/`.

## Pricing

The pricing page is at <http://127.0.0.1:64530/pricing/>. It retains the
Free-forever and $29 one-time Pro plans from `static/pricing.json`, with plan
cards, an accessible feature comparison, and native HTML FAQ disclosures.
The homepage and documentation pricing links point to this local page.
Regenerate it with `node v2/build-pricing.mjs` after changing the pricing data.
The Free/download buttons lead to the existing homepage downloads; the Pro
feature button leads to the comparison. The original page has no checkout URL.
The pricing page uses `docs.css` for the shared typography and header, plus
`pricing.css` for its own layout. It ships no JavaScript.

## Design and content

- A shared `brand.css` takes typography and color cues from Capacities: firm Inter
  headings, white and lightly warm grey surfaces, and neutral primary buttons.
  Blue is reserved for links and small navigation cues. Dark pages use neutral
  charcoal with soft-white headings and buttons. Snippets keeps its own layout,
  content, imagery, and scroll choreography.
- Sage emphasizes complete benefits in major headings; lavender is reserved
  for learning, and blue identifies sync and navigation. Secondary headings,
  labels, and card titles stay neutral. Dark pages use lighter versions of the
  same hues. The hero uses a plain background with a subtly tinted screenshot surround.
- Pricing has a centered headline and two simple cards. The previous paper
  illustration, folded card corners, and layered screenshot decorations are
  removed. The original product imagery and all scroll animations are preserved.
- Preserves the existing section order: introduction and downloads, overview
  with rich text/collections/dashboards and pricing, tasks and Quick-Add, sync,
  encryption, journaling and habits, all three flashcard features, and mobile.
- All 11 distinct original light screenshots are included, converted losslessly
  from the repository's PNGs to WebP at their original dimensions.
- Screenshots sit on a slightly deeper neutral-grey surround.
  Fine edges and soft shadows separate the white app UI
  from the page. Homepage frames have generous padding; documentation uses a
  tighter frame to preserve reading space, with reduced padding on mobile.
  Captions remain outside the wide screenshot frames.
- End-to-end encryption has a dedicated feature panel at `#encryption`, with
  a prominent “End-to-end encryption” headline and a compact HTML/CSS comparison:
  “Most apps” with provider-managed keys versus “Snippets” with E2EE enabled.
  Both rows label the device and server, but only the Snippets server shows
  unreadable data. Both dotted sync connections show the same lock and explicit
  “Encryption in transit” label. Neutral panels keep the red warning and green
  protection focused on the provider’s copy: a readable note with an eye marker,
  or encrypted data with a shield marker. Fine outlines and matching condition
  labels distinguish the two cases. Both outcome lines are larger, regular weight,
  and icon-free.
  One short paragraph focuses on whether the provider can read the notes,
  without discussing keys or encryption at rest. It does not claim other apps
  store plaintext or that every competing app lacks E2EE. Copy
  follows `docs/sync.mdx` and `static/pricing.json`, with a Pro badge and links to
  pricing and encryption details. The existing fly-in handles the panel;
  the illustration uses the CSS-only sequence described below.
  The distinction was checked against [Evernote’s security overview](https://evernote.com/en-us/security)
  (provider-managed encryption at rest) and [Notion’s security practices](https://www.notion.com/help/security-and-privacy)
  on 2026-11-02. These are examples of the model, not a market-share measurement;
  “Most” is the user’s requested marketing wording.
  Evernote also offers separate passphrase encryption for selected text.
- Download versions, beta labels, upcoming platforms, documentation, social,
  comparison, and legal destinations follow the current repository content.
- Locally bundled [Inter](https://rsms.me/inter/) uses 700-weight major headings,
  650-weight feature headings, regular body text, and automatic optical sizing.
  One preloaded variable WOFF2 file covers all weights (352,240 bytes), with no
  external font requests. Its SIL Open Font License is in `assets/Inter-OFL.txt`.
- Lazy-loaded screenshots, intrinsic image dimensions, visible focus indicators,
  and a skip-intro link keep the page light and usable.

## Scroll introduction

The introduction uses all 90 distinct poses from the revision 2 PNG masters in
`static/media/porcelain-light-icon-opening-55-90/png/`. It does not extract
frames from the old 31-pose loop. To preserve the corrected scroll direction,
playback runs from source frame 0089 (flat) to frame 0000 (blue corner peeled
open). The header and static wordmark use that same final frame.

`assets/note-opening-90.webp` is a static 10-column × 9-row atlas of 480 × 480
frames, measuring 4,800 × 4,320 overall (approximately 1 MB). It is packed in
playback order, left to right, then top to bottom. This grid keeps the atlas
within WebP image-dimension limits without sacrificing frames.

After replacing the source PNGs, regenerate the atlas and matching header icon:

```sh
node v2/build-note.mjs
```

This build helper requires ImageMagick (`magick`) and `cwebp`. It retains all 90
frames, the approved reverse playback order, and transparency. The source PNGs
are not read by the page directly; copying new frames alone does not update the
preview. Reload after rebuilding; the local preview server disables caching.

CSS declares 90 explicit background-position keyframes with `steps(1, end)`
between them. This selects each exact pose and prevents the browser from
panning between atlas cells, including at row boundaries. There is no
JavaScript, autoplay, or frame duplication.

The root scroll position controls the sequence:

1. 0–85svh of scroll: unfold the note.
2. At 85svh, immediately move and shrink the open note into the header by
   145svh. A gentler easing curve spreads the movement across 60svh, with a
   gradual departure and a soft landing instead of a fast initial leap.
3. At the same 85svh start point, begin scrolling the page into view and
   gradually fade it from transparent to opaque by 145svh. The hero adds a 64px
   upward entrance over this range. Navigation appears from 135–145svh,
   once the shrinking note has cleared the wordmark.
4. Hold the open note in the header. Scrolling back reverses the sequence.

The intro text stays fully visible until 62svh, then fades and rises until
85svh, clearing before the homepage fades in so the two headlines never overlap.
The scroll cue remains visible through
the first 50svh and fades out as docking starts. There is no stationary hold
between the final opening frame and the move into the header.

The introduction occupies 145svh. Absolute timeline ranges prevent the length
of the content below from changing the animation. The `Scroll to unfold` and
keyboard skip links land on the fully revealed content.
The shared `--unfold-end` and `--dock-start` tokens keep opening, docking, and
the page entrance connected. All 90 opening frames retain their original timing.
The main anchor stays untransformed so skipping the introduction still lands
at the hero's intended position below the navigation.

Browsers supporting CSS scroll-driven animations get the introduction. Others,
and visitors requesting reduced motion, get the complete static page with its
open-note wordmark immediately. No polyfill is needed.

References: [CSS scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
and [WebKit's CSS-only guide](https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/).

## Content reveals

Feature copy, screenshots, and other content groups start fading and rising
when their top edge is 16% of the viewport height above the bottom. They are
fully opaque and in place by 33%. Where native CSS timeline triggers are
available, the entrance also runs on a timer so it can finish on pause.
Text can rise 64px over 1100ms, and screenshots 84px over 1250ms. Feature
screenshots have a 110ms delay. On mobile,
distances shrink to 32px and 48px, and stacked screenshots have no delay.
Each native trigger is scoped to its own element and uses `replay reset`. Content
stays visible until it leaves the viewport completely, then resets and plays
again when it returns. This works while scrolling either down or back up.
The main slogan starts its timed phrase reveal once the note begins docking and
the slogan is in view. The supporting hero content fades with the docking note.

Sync cards have a timed left-to-right cascade: 760ms entrances spaced 120ms
apart, starting at 18svh of entry. A view timeline changes a style-query state
on each card's wrapper; the child transitions finish even when scrolling stops.
This does not depend on native animation triggers. The mobile two-column layout
restarts the stagger for each row. Upward scrolling resets the cards in 240ms.

Each encryption diagram starts independently at 18svh of entry and builds over
about 2.5 seconds: card surface, title and badge, device icon and label, note,
written lines, connection, transit lock and label, server icon and label,
received content, divider, privacy outcome, and access indicator. The privacy
statements begin at 1380ms, alongside the received note contents. One small
packet traverses the connection; binary groups reveal character by character.
The final caption follows the lower diagram. Supporting copy and links follow
the existing heading trigger. Upward scrolling resets the pieces together in
240ms. View timelines and style queries keep this CSS-only, with the full static
content for reduced motion or unsupported browsers.

Section titles and feature headlines share an entry trigger with their small
labels. Whole phrases rise 12px (10px for feature headlines) and resolve from
7px of blur (4px on mobile and feature headlines). Opacity settles in 280ms;
movement settles in 620ms and focus resolves over 1000ms, with 300ms between phrases (220ms
for feature headlines). The result is fully sharp, with `filter: none` and
`transform: none`, after the reveal. Text remains normal strings with Inter's
kerning and natural mobile wrapping.

One view-position threshold, 22% into the viewport from the bottom, controls
entry and exit. A 200ms lead-in lets the eye find the heading before its first
phrase begins; subsequent phrases retain their stagger. Changing scroll direction
alone never restarts a heading.
On upward scrolling past that threshold, an 80ms settling delay absorbs brief
jitter, then all phrases and their label leave together over 240ms. The intro
still gates its slogan until the note starts docking. Each heading retains
one accessible name, without clipping or character transforms.

Browsers without view timelines, reduced-motion users, and keyboard-focused
groups get visible, static content. The note-opening sequence uses its own root
scroll timeline. Both reveal modes use CSS only.

Implementation reference: [Native CSS scroll-triggered animations](https://developer.chrome.com/blog/scroll-triggered-animations).

## Files

- `index.html`: semantic content, native anchor navigation, inline SVG icons.
- `styles.css`: theme tokens, layouts, responsive rules, and scroll timelines.
- `brand.css`: shared typography, neutral palette, and screenshot framing.
- `themes.css`: dark palette, component refinements, and accessible theme links.
- `build-themes.mjs`: generates matching static light/dark routes and prepares dark images.
- `dark/`: generated dark homepage, documentation, and pricing.
- `encryption.css`: the homepage privacy feature and responsive illustration.
- `build-note.mjs`: regenerates the scroll atlas and header icon from the PNG frames.
- `assets/`: original screenshots in lossless WebP, note sprite, open icon,
  and the Inter font with its license.

## Validation

Focus reveal: reproduced the previous direction-sensitive reset around 69% of
the viewport, then verified the same small up/down movement leaves the heading
fully visible after the change. Observed the live blur, opacity, and rise during
entry and full sharpness at the same stationary scroll position afterward.
Checked CSS parsing, reduced-motion guards, and unchanged unrelated keyframes.


Phrase reveal: all 17 accessible heading names and visible strings match the
previous page; screenshots and the note/sync/content keyframes are unchanged.
Browser checks confirmed staggered entry at a stationary scroll position, then
full opacity; upward scrolling moves and fades both phrases and their label
together with no delay. Checked the mobile layout at 390px with no overflowing
headings. Motion rules remain inside the reduced-motion guard. All 40 generated
pages resolve their local assets and links without browser scripts.

Color accents: verified unchanged homepage text, screenshot markup, character
spans, and animation declarations. All edited stylesheets parse. Accent text
has at least 4.78:1 contrast on the checked light surfaces and 7.23:1 on dark.

Inter and neutral palette: checked light/dark homepage, pricing, and docs on
desktop, plus homepage wrapping at 390px. No overflowing headings or horizontal
page overflow in the mobile check. All 40 generated pages resolve their local
assets and links, preload Inter, contain one theme switch, and contain no scripts.
All six stylesheets parse; scroll-animation declarations are unchanged.
Checked body, muted text, links, and primary buttons against their surfaces
with contrast ratios of at least 4.5:1.

Revision 2 note frames: rebuilt the 4,800 × 4,320 atlas and 160px header icon.
Verified 90 distinct decoded cells, retained transparency, and visually checked
the flat, intermediate, curled, and docked poses. Scroll timing and CSS are unchanged.

Encryption feature: checked the expanded panel at desktop and 320px widths,
including its headline, illustration, and page bounds. Both new actions lead
to their intended destinations (pricing and the exact encryption docs heading).
No browser warnings or errors were reported. All 1,325 local links/assets/anchors
resolve, all homepage screenshots are preserved, and the original scroll
animation stylesheet is unchanged.

Screenshot framing: visually checked a homepage feature, the hero composition,
a wide task screenshot at 320px, and a documentation image. No horizontal
overflow was observed in the checked layouts. All homepage image attributes
and text match the preceding version; all 1,318 local links/assets/anchors
still resolve. Frames use existing HTML elements, with two additional wrappers
around wide screenshots; the original animation stylesheet remains unchanged.

The Porcelain refinement restores the original theme's surface, text, and
accent values from the supplied theme file. All 20 pages load the shared
visual layer with its updated stylesheet URL. The original `styles.css`,
including all opening frames and scroll animation rules, is unchanged.
No browser JavaScript was added.

The preceding layout checks covered pricing, docs, and the homepage at desktop
and 320px widths without horizontal overflow, plus 1,318 local links, assets,
and anchors and pricing text against the original data. Verified the initial
note, fully docked header, and a fly-in completing after scrolling stopped.

Pricing: verified the Free/Pro names, prices, billing notes, and all feature
text against `static/pricing.json`. Checked local links and anchors across all
20 HTML pages, including homepage/docs pricing links. Browser checks covered
the desktop cards, FAQ disclosure, and the mobile comparison table. No
horizontal overflow was observed at 390px or 320px.

Documentation: checked all 18 generated pages (overview plus 17 articles),
1,258 local links/assets/anchors across the docs and homepage, unique IDs, one
H1 per page, and the absence of browser scripts or unrendered MDX. All 42 copied
media files match their originals. A repeat build produced identical HTML.
Browser checks covered the desktop overview and articles, mobile menu and
article outline at 390px, and article layout and heading navigation at 320px.
No horizontal overflow was observed. Native video playback was verified.

Visually checked the stationary first frame, a partial opening, fully open note,
docked header, hero, and rich-text section. Checked mobile at 390 × 844 and
layout bounds at 320 × 568. Verified original screenshot coverage, valid local
assets, unique IDs, anchor destinations, image dimensions/alt text, and absence
of scripts. All images loaded successfully in the browser, with no console
warnings or errors. External download destinations retain the repository's
v0.22.0 URLs.

For the fly-in update, verified native trigger support in the preview browser.
At the same stationary scroll position, a screenshot progressed from partial
opacity and translation to fully visible and settled, on desktop and mobile.
Checked the 110ms desktop screenshot delay and that revealed sections stay
visible after scrolling back. Verified mobile's 32px/48px motion distances,
zero screenshot delay, and no horizontal overflow at 390 × 844. No browser
warnings or errors were reported. The introduction, all 90 opening poses, and
the existing responsive layout are unchanged. Reduced-motion and unsupported
browser fallbacks remain visible by default.

For repeatable reveals, checked the same feature twice without reloading:
both copy and screenshot animated to full opacity at a stationary scroll
position, reset after leaving the viewport, and animated again on return.
The existing note-opening sequence and page entrance remain unchanged.

The Manrope update was checked in the browser with the bundled face loaded at
weight 550. Verified the two-line hero at 320px and no horizontal overflow at
320px or 390px. The font file is 24,532 bytes, served locally with its license.

Checked the overlapping entrance before movement (page opacity 0), just after
movement begins (about 9%), during docking (about 43%), and after completion
(100%). Verified reverse scrolling resets the intro and the skip link lands
with the hero 115px below the top on mobile, without horizontal overflow.
