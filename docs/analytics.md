# Website analytics

The site sends a small set of events to our own
`https://api.snippets.ch/functions/v1/analytics` endpoint. There is no analytics
SDK. CSS still handles all animation, layout, themes and navigation.

`src/scripts/analytics.js` starts four independent trackers: visit activity,
page views, clicks, and section exposure. Each setup function owns its listeners
and tracking state. Event delivery and visit-ID access are shared helpers. The
section tracker keeps its observation state and dwell timers together, with one
reset function for leaving the viewport or hiding the tab. It remains one inline
script, without an analytics SDK or a separate bundling step.

## Configuration

Edit the defaults in `src/lib/analytics-config.js`, then rebuild and publish:

| Setting            | Default                          | Effect                                                                                                                     |
| ------------------ | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `enabled`          | `true`                           | Turn all website analytics on or off.                                                                                      |
| `visitIdEnabled`   | `true`                           | Enable the optional short-lived visit ID. When off, remove the stored ID and send `visit_id: null`. Event counts continue. |
| `visitIdleMinutes` | `30`                             | Rotate the ID after this much inactivity.                                                                                  |
| `hosts`            | `snippets.ch`, `www.snippets.ch` | Exact hostnames allowed to send in production builds. Local build previews and LAN hosts send nothing.                     |
| `endpoint`         | Snippets API                     | Collector URL; never put secrets here.                                                                                     |

Astro loads `.env.development` during `pnpm dev` (or `pnpm start`):

```dotenv
PUBLIC_ANALYTICS_ENDPOINT=http://127.0.0.1:54321/functions/v1/analytics
PUBLIC_ANALYTICS_HOSTS=127.0.0.1,localhost
```

`src/lib/analytics-config.js` combines these environment values with the
defaults above. The layout only imports and passes the resulting configuration
to the browser script. The collection and visit-ID switches still apply.
Production builds do not load `.env.development` and use the defaults;
`pnpm preview` serves that built configuration.

The development file is committed because it contains public local defaults. Put
machine-specific changes in the ignored `.env.development.local` file.

The local backend must allow the dev server's origin. In
`snippets-supabase/supabase/functions/.env`, set:

```dotenv
ANALYTICS_ALLOWED_ORIGINS=http://127.0.0.1:64530,http://localhost:64530
```

To load this environment file explicitly, run
`supabase functions serve --env-file supabase/functions/.env` from
`snippets-supabase`. Keep this setting local; production retains its own allowed
origins.

The backend has an independent `ANALYTICS_VISIT_IDS_ENABLED=false` switch. It
discards incoming visit IDs before insertion, including IDs from apps. It does
**not** turn off browser storage: disable `visitIdEnabled` here too to stop the
browser creating IDs. Neither flag rewrites historical events.

## What the events mean

| Event          | When                                                                                       | Metadata                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `page_view`    | Once per document, when the tab becomes visible                                            | Referrer hostname and optional `utm_source`, `utm_medium`, `utm_campaign`                     |
| `section_view` | A revealed homepage heading stays at least half inside the observation area for one second | Named section, such as `features`, `encryption`, `download`                                   |
| `cta_click`    | A marked navigation or action link is clicked                                              | Action and placement; downloads also include platform, distribution and optional architecture |

Sections count once per document, even when scrolling back up. Hidden tabs and
quick scrolling do not count as section exposure. The observer excludes the
fixed header and the bottom edge. It observes headings rather than whole
sections whose height can exceed the viewport. Exposure is evidence of
visibility, not proof that someone read a section.

The one-second dwell begins after the heading becomes visible. Visibility is
checked every 250 ms while in view; hiding the heading or tab, or leaving the
observation area, resets the dwell.

All marked links emit `cta_click`. **Get Snippets** buttons that open the
download section use `metadata.action: "show_downloads"`. Installer, APK and App
Store links in the download section, mobile section and iPhone announcement use
`metadata.action: "download"`, with `platform`, `distribution`, and optional
`architecture`. Other actions contain just `action` and `placement`. An App
Store click is not an installation or purchase.

`data-analytics-section` on a heading names a section. Explicit
`data-analytics-event`, `data-analytics-action`, `data-analytics-placement`,
`data-analytics-platform`, `data-analytics-distribution`, and optional
`data-analytics-architecture` attributes describe links. The script never reads
link text or sends destination URLs. Add new enum values to the backend schema
before using them here.

## Visit IDs

- **`visit_id`**: an optional random UUID in `sessionStorage` under
  `snippets.analytics.visit.v2`. Same-tab navigation shares it. After 30 idle
  minutes, the next visible event or real interaction creates a new ID. Trusted
  scrolling, pointer and keyboard activity refreshes the idle time, throttled to
  once every five seconds, without sending heartbeat requests or input contents.

Before using an ID, the collector reads the latest stored visit. Returning to a
cached page therefore keeps activity and ID changes from other pages in the tab.

The visit ID is not an account, installation or person identifier. Active visits
can last longer than 30 minutes. Closing a tab normally clears session storage;
browser session restoration can preserve it, but the idle expiry still applies.
Some browsers copy session storage when duplicating/opening tabs, so visits are
not an exact tab count either. If storage is blocked, the ID works in memory
only and navigation loses continuity. Disabling and re-enabling the feature
creates a fresh ID after a page has loaded with it off.

There are no cookies, persistent device IDs or cross-device identity handoffs.
Expiring a visit ID stops reuse; it does not delete already collected events.
The backend also retains the request IP address and cached IPinfo geolocation.
IP-based records are separate from visit IDs and remain when the visit-ID
feature is off. Shared networks and changing addresses mean IPs are not reliable
person or visit identifiers. Infrastructure may also process or log request
metadata.

IP addresses come from the backend's trusted proxy headers, not a field supplied
by the website or app. Missing or malformed addresses do not discard an event.
With `IPINFO_TOKEN` configured, the backend sends uncached addresses to IPinfo
and stores its response in `analytics.visitors.ipinfo`. Events are saved before
lookup; provider failures do not turn a successful event into an error.

## Payload and delivery

All website events share this envelope:

```json
{
  "source": "website:/",
  "type": "cta_click",
  "visit_id": "799b19dc-11ad-46c0-b242-f08c488b9577",
  "metadata": {
    "action": "download",
    "platform": "ios",
    "distribution": "app_store",
    "placement": "mobile"
  }
}
```

`source` combines origin and page: `website:/`, `website:/pricing/`, or
`website:/docs/sync/`. The path portion is at most 256 characters and omits
query strings and hashes. App events use `app`. There is no separate page-load
identifier; reloading sends another `page_view`, while restoring the same
document from the back/forward cache does not. With visit IDs off, counts remain
available by source, but events are not grouped by individual visit or page
load.

Referrers contain only hostnames. Campaign values must be slugs of 1–80 letters,
digits, dots, underscores, tildes or hyphens; other query parameters and invalid
campaign values are discarded. Do not put personal information in campaign
names.

Requests use `fetch`, `keepalive: true`, JSON, omitted credentials and
`referrerPolicy: "no-referrer"`. Each event gets one send attempt with an
eight-second timeout. There are no automatic retries, client event IDs or
persistent queues. The database generates the row ID on insertion. Navigation
never waits for analytics; failed sends are ignored. Offline use, blockers and
browser shutdown can lose events. These are approximate usage counts.

## Backend rollout and app changes

In `snippets-supabase`, see `docs/analytics.md` for the complete API, migration,
backend flags, app integration, and SQL examples. Apply migration
`20261115090000_analytics_v2.sql` before deploying the `analytics` and
`communications` functions, then publish this website and update the app. Old
payloads are intentionally rejected with HTTP 400. `/communications` keeps
returning its empty feed, but no longer implicitly records an app visit.

## Checks

- `pnpm test` exercises expiry, navigation, feature switches, blocked storage,
  foreground/dwell detection, sanitization, download metadata and failure
  handling.
- `pnpm build` checks the rendered pages, including the exact inline script and
  config allowlist. Each published page includes analytics once; noindex pages
  and redirects do not.
- Dev on `127.0.0.1` or `localhost` sends to local Supabase for end-to-end
  checks. Local production-build previews send nothing. Do not send fixture
  events to production.
