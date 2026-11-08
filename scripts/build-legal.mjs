import fs from 'node:fs';
import path from 'node:path';
import { content, output } from './paths.mjs';

const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
for (const slug of ['privacy', 'terms']) {
  const { title, description } = JSON.parse(fs.readFileSync(path.join(content, 'legal', slug + '.json'), 'utf8'));
  const body = fs.readFileSync(path.join(content, 'legal', slug + '.html'), 'utf8');
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light">
<title>${escape(title)} · Snippets</title><meta name="description" content="${escape(description)}">
<link rel="icon" href="../assets/note/note-open.webp" type="image/webp"><link rel="preload" href="../assets/fonts/inter-variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="../styles/docs.css"><link rel="stylesheet" href="../styles/brand.css"><link rel="stylesheet" href="../styles/legal.css"></head>
<body id="top"><a class="skip-link" href="#main">Skip to content</a>
<header class="docs-header"><div class="header-inner"><a class="wordmark" href="../" aria-label="Snippets home"><img src="../assets/note/note-open.webp" width="48" height="48" alt=""><span>Snippets</span></a><nav class="header-links" aria-label="Main navigation"><a class="website-link" href="../#features">Features</a><a class="website-link" href="../pricing/">Pricing</a><a class="website-link" href="../docs/">Docs</a><a class="get-app" href="../#download">Get Snippets</a></nav></div></header>
${body}
<footer class="legal-footer"><span>© 2026 Snippets</span><nav aria-label="Footer navigation"><a href="../privacy/"${slug === 'privacy' ? ' aria-current="page"' : ''}>Privacy</a><a href="../terms/"${slug === 'terms' ? ' aria-current="page"' : ''}>Terms</a><a href="mailto:support@snippets.ch">Contact</a></nav></footer>
</body></html>`;
  fs.mkdirSync(path.join(output, slug), { recursive: true });
  fs.writeFileSync(path.join(output, slug, 'index.html'), html);
}
console.log('Built privacy policy and terms from preserved legal content.');
