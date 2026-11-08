// Build-time conversion only. The generated documentation ships no JavaScript.
import fs from 'node:fs';
import path from 'node:path';
import { output as root, content, media } from './paths.mjs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as runtime from 'react/jsx-runtime';

import { evaluate } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import Slugger from 'github-slugger';
import { Highlight, themes } from 'prism-react-renderer';
const h = React.createElement;
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const text = children => React.Children.toArray(children).map(child => typeof child === 'object' ? text(child.props?.children) : String(child)).join('');

const groups = [
  ['Get started', ['introduction', 'organizing-your-notes']],
  ['Writing & organizing', ['rich-text-editor', 'collections', 'attributes', 'task-management', 'visualizations', 'flashcards', 'quick-add', 'templates', 'cmd-k']],
  ['Sync & settings', ['sync', 'syncing-with-github', 'mobile-app', 'app-settings']],
  ['Compare', ['compared-to-obsidian', 'compared-to-notion']],
];
const definitions = {
  'introduction': ['Introduction', 'A thoughtful place for your notes, and room for everything they can become.'],
  'organizing-your-notes': ['Organizing your notes', 'Find a structure that feels natural, from a few folders to a connected workspace.'],
  'rich-text-editor': ['Rich-text editor', 'A closer look at the details that make writing feel effortless.'],
  'collections': ['Collections', 'Bring related snippets together. Choose what to include and how to see it.'],
  'attributes': ['Attributes', 'Add meaning and structure to your notes with one flexible system.'],
  'task-management': ['Task management', 'Turn your notes into a task system that works the way you do.'],
  'visualizations': ['Visualizations', 'See your habits, routines, and progress over time.'],
  'flashcards': ['Flashcards', 'Build a deck, practice a little, and make what you learn last.'],
  'quick-add': ['Quick Add', 'Capture a thought without losing your flow.'],
  'templates': ['Templates', 'Guidance for reusable starting points.'],
  'cmd-k': ['Command menu', 'Keep useful commands alongside your notes and find them with a shortcut.'],
  'sync': ['Sync', 'Keep your notes with you, with control over where your data lives.'],
  'syncing-with-github': ['Syncing with GitHub', 'Connect a private repository and keep your notes in sync across devices.'],
  'mobile-app': ['Mobile app', 'Your notes, wherever the day takes you.'],
  'app-settings': ['App settings', 'Make Snippets feel at home in your workflow.'],
  'compared-to-obsidian': ['Snippets vs. Obsidian', 'Two different approaches to personal notes and knowledge.'],
  'compared-to-notion': ['Snippets vs. Notion', 'Understand the differences in structure, writing, and everyday use.'],
};
const pages = groups.flatMap(([group, slugs]) => slugs.map(slug => ({slug, group, title:definitions[slug][0], description:definitions[slug][1]})));
const known = new Set(pages.map(p => p.slug));
const actual = fs.readdirSync(path.join(content, 'docs')).filter(f => f.endsWith('.mdx')).map(f => f.slice(0, -4));
if (actual.some(slug => !known.has(slug)) || pages.some(p => !actual.includes(p.slug))) throw new Error('Update the docs navigation to include every source page.');

const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const icons = {
  book: '<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14"/>',
  pen: '<path d="m15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-5-5L4 14v6Z"/>',
  layers: '<path d="m12 3 10 6-10 6L2 9l10-6ZM2 14l10 6 10-6"/>',
  sync: '<path d="M20 10a8 8 0 0 0-14-5L3 8m0-5v5h5M4 14a8 8 0 0 0 14 5l3-3m0 5v-5h-5"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

function nav(current, base, overview = false) {
  return `<a class="nav-overview ${overview ? 'is-active' : ''}" href="${base}" ${overview ? 'aria-current="page"' : ''}>${icon('book')}Documentation</a>` + groups.map(([label, slugs]) => `<div class="nav-group"><p>${escape(label)}</p><ul>${slugs.map(slug => `<li><a href="${base}${slug}/" ${slug === current ? 'aria-current="page"' : ''}>${escape(definitions[slug][0])}</a></li>`).join('')}</ul></div>`).join('');
}

function shell({page, body, toc = [], minutes, overview = false}) {
  const home = overview ? '../' : '../../';
  const base = overview ? './' : '../';
  const title = overview ? 'Documentation' : page.title;
  const description = overview ? 'Learn your way around Snippets. Guides to writing, organizing, and keeping your notes in sync.' : page.description;
  const tocLinks = toc.map(item => `<li><a href="#${escape(item.id)}">${escape(item.title)}</a></li>`).join('');
  const pageIndex = pages.findIndex(p => p.slug === page?.slug);
  const adjacent = (p, direction) => p ? `<a class="page-turn ${direction}" href="../${p.slug}/"><span>${direction === 'previous' ? 'Previous' : 'Next'}</span><strong>${escape(p.title)} ${arrow}</strong></a>` : '<span></span>';
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light"><meta name="description" content="${escape(description)}"><title>${escape(title)} · Snippets Docs</title><link rel="icon" href="${home}assets/note/note-open.webp" type="image/webp"><link rel="preload" href="${home}assets/fonts/inter-variable.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="${home}styles/docs.css"><link rel="stylesheet" href="${home}styles/brand.css"></head>
<body id="top" class="docs-page"><a class="skip-link" href="#main">Skip to content</a>
<header class="docs-header"><div class="header-inner"><div class="brand-group"><a class="wordmark" href="${home}" aria-label="Snippets home"><img src="${home}assets/note/note-open.webp" width="48" height="48" alt=""><span>Snippets</span></a><span class="brand-divider"></span><a class="docs-label" href="${base}">Docs</a></div><nav class="header-links" aria-label="Main navigation"><a class="website-link" href="${home}#features">Features</a><a class="website-link" href="${home}pricing/">Pricing</a><a class="get-app" href="${home}#download">Get Snippets ${arrow}</a></nav></div></header>
<details class="mobile-navigation"><summary>Browse documentation<span aria-hidden="true">＋</span></summary><nav aria-label="Documentation">${nav(page?.slug, base, overview)}</nav></details>
<div class="docs-layout ${overview ? 'overview-layout' : ''}"><aside class="sidebar"><nav aria-label="Documentation">${nav(page?.slug, base, overview)}</nav><a class="sidebar-help" href="mailto:support@snippets.ch">A question? Get in touch ${arrow}</a></aside>
<main id="main" tabindex="-1" class="${overview ? 'overview' : 'article-main'}">
${overview ? body : `<div class="breadcrumb"><a href="../">Documentation</a><span aria-hidden="true">/</span><span>${escape(page.group)}</span></div><header class="article-header"><div class="article-meta"><span>Snippets guide</span><span>${page.draft ? 'Guide in progress' : `${minutes} min read`}</span></div><h1>${escape(page.title)}</h1><p>${escape(page.description)}</p></header>${toc.length ? `<details class="inline-toc"><summary>On this page</summary><ul>${tocLinks}</ul></details>` : ''}<article class="prose">${body}</article><nav class="page-navigation" aria-label="Adjacent articles">${adjacent(pages[pageIndex - 1], 'previous')}${adjacent(pages[pageIndex + 1], 'next')}</nav>`}
<footer class="docs-footer"><span>© 2026 Snippets</span><a href="#top">Back to top ↑</a></footer></main>
${!overview ? `<aside class="page-outline" aria-label="On this page">${toc.length ? `<p>On this page</p><nav><ul>${tocLinks}</ul></nav>` : ''}<div class="outline-help"><p>Need a hand?</p><a href="mailto:support@snippets.ch">We’re here to help ${arrow}</a></div></aside>` : ''}</div></body></html>`;
}

const copied = new Set();
function asset(src) {
  const source = path.join(media, 'docs', src.replace(/^\/assets\/docs\//, ''));
  if (!fs.existsSync(source)) throw new Error(`Missing media: ${src}`);
  const relative = src.replace(/^\/assets\/docs\//, '');
  const output = path.join(root, 'assets', 'docs', relative);
  fs.mkdirSync(path.dirname(output), {recursive:true});
  if (!copied.has(src)) {fs.copyFileSync(source, output); copied.add(src);}
  return `../../assets/docs/${relative}`;
}
function Figure({src, caption, alt, children, maxWidth}) {
  if (!src) return h('figure', {className:'doc-figure'}, children, caption && h('figcaption', null, caption));
  const resolved = path.extname(src) ? src : `${src}/light.png`;
  const url = asset(resolved);
  const buffer = fs.readFileSync(path.join(media, 'docs', resolved.replace(/^\/assets\/docs\//, '')));
  const width = buffer.readUInt32BE(16), height = buffer.readUInt32BE(20);
  const label = alt || (caption && text(caption)) || path.basename(src, path.extname(src)).replace(/[-_]/g, ' ');
  return h('figure', {className:'doc-figure', style:maxWidth ? {maxWidth} : undefined}, h('a', {className:'image-link', href:url, target:'_blank', rel:'noopener', 'aria-label':`Open image: ${label}`}, h('img', {src:url, alt:label, width, height, loading:'lazy', decoding:'async'})), caption && h('figcaption', null, caption));
}
function DocVideo({src}) {
  const url = asset(src);
  const label = path.basename(src, '.webm').replace(/-/g, ' ');
  return h('video', {className:'doc-video', controls:true, playsInline:true, preload:'metadata', muted:true, loop:true, 'aria-label':label}, h('source', {src:url, type:'video/webm'}), h('a', {href:url}, 'Download the demonstration'));
}
function Code({children, className, ...rest}) {
  if (!className?.startsWith('language-')) return h('code', rest, children);
  const language = className.slice(9);
  return h(Highlight, {theme:themes.github, code:text(children).trimEnd(), language}, ({tokens, getLineProps, getTokenProps}) => h('code', {className}, tokens.map((line, i) => h('span', {...getLineProps({line}), key:i}, ...line.map((token, key) => h('span', {...getTokenProps({token}), key})), '\n'))));
}
function internalHref(href) {
  if (!href) return href;
  const match = href.match(/^(?:https:\/\/snippets\.ch\/docs\/|\/docs\/|\.\/)?([a-z0-9-]+)(?:\.mdx)?\/?(#[^\s]*)?$/);
  return match && known.has(match[1]) ? `../${match[1]}/${match[2] || ''}` : href;
}

for (const page of pages) {
  const original = fs.readFileSync(path.join(content, 'docs', `${page.slug}.mdx`), 'utf8');
  let source = original.replace(/^import .+;\s*$/gm, '').replace(/\{\/\*[\s\S]*?\*\/\}/g, '').replace(/class=/g, 'className=');
  source = source.replace(/^:::tip[^\n]*\n([\s\S]*?)^:::\s*$/gm, '<Callout>\n\n$1\n\n</Callout>');
  page.draft = /^tbd\.$/m.test(source);
  const headings = [], slugger = new Slugger();
  const components = {
    Figure, DocVideo, Row:({children}) => h('div', {className:'doc-row'}, children),
    Callout:({children}) => h('aside', {className:'callout'}, h('p', {className:'callout-label'}, 'Good to know'), children),
    h1:() => null,
    ...Object.fromEntries([2,3,4].map(level => [`h${level}`, ({children}) => {
      const title = text(children), id = slugger.slug(title);
      headings.push({title, id, level});
      return h(`h${level}`, {id}, h('a', {className:'heading-link', href:`#${id}`}, children));
    }])),
    a:({href, ...props}) => h('a', {...props, href:internalHref(href)}),
    code:Code,
    pre:({children}) => h('div', {className:'code-panel'}, h('div', {className:'code-label'}, children?.props?.className?.replace('language-', '').toUpperCase() || 'Code'), h('pre', {tabIndex:0}, children)),
    table:({children}) => h('div', {className:'table-scroll', tabIndex:0}, h('table', null, children)),
  };
  const {default:Content} = await evaluate(source, {...runtime, remarkPlugins:[remarkGfm]});
  let body = renderToStaticMarkup(h(Content, {components}));
  if (page.draft) body = `<div class="guide-draft">${icon('book')}<h2>This guide is on its way.</h2><p>We’re still writing this part of the documentation. In the meantime, explore the guides below or <a href="mailto:support@snippets.ch">get in touch</a> if you need a hand.</p><div class="related-links"><a href="../introduction/">Get to know Snippets ${arrow}</a><a href="../organizing-your-notes/">Organize your notes ${arrow}</a>${page.slug === 'mobile-app' ? '<a href="../../#download">Get the mobile app →</a>' : ''}</div></div>`;
  const toc = headings.some(item => item.level === 2) ? headings.filter(item => item.level === 2) : headings.filter(item => item.level === 3);
  const minutes = Math.max(1, Math.ceil(body.replace(/<[^>]+>/g, ' ').split(/\s+/).length / 220));
  const directory = path.join(root, 'docs', page.slug);
  fs.mkdirSync(directory, {recursive:true});
  fs.writeFileSync(path.join(directory, 'index.html'), shell({page, body, toc, minutes}));
}

const featureCards = [
  ['rich-text-editor', 'pen', '01', 'Make room for your thoughts', 'Formatting, shortcuts, and the small details that make writing feel natural.'],
  ['organizing-your-notes', 'layers', '02', 'Find your own kind of order', 'Explore folders, dashboards, and connections. Start simple and build from there.'],
  ['sync', 'sync', '03', 'Keep your notes close', 'Understand workspaces, sync targets, and how to keep your data in your hands.'],
];
const overview = `<div class="overview-eyebrow">THE SNIPPETS GUIDE</div><header class="overview-header"><h1>A little guidance.<br><span>A world of possibilities.</span></h1><p>Make yourself at home. Learn the essentials, find your flow,<br class="wide-break"> and discover what your notes can do.</p></header>
<a class="start-guide" href="introduction/"><div><span class="small-label">NEW TO SNIPPETS?</span><h2>Start with the essentials.</h2><p>Meet the ideas behind a note-taking app that grows with you.</p><span class="start-link">An introduction to Snippets ${arrow}</span></div><div class="guide-art" aria-hidden="true"><img src="../assets/note/note-open.webp" width="160" height="160" alt=""></div></a>
<section class="guide-paths" aria-labelledby="find-flow"><div class="section-title"><h2 id="find-flow">Find your flow</h2><span>A few good places to begin</span></div><div class="path-grid">${featureCards.map(([slug, symbol, number, title, description]) => `<a class="path-card" href="${slug}/"><div class="path-top">${icon(symbol)}<span>${number}</span></div><h3>${title}</h3><p>${description}</p><span class="card-arrow">Read the guide ${arrow}</span></a>`).join('')}</div></section>
<section class="all-guides" aria-labelledby="all-guides"><div class="section-title"><h2 id="all-guides">Explore the documentation</h2><span>At your own pace</span></div><div class="topic-grid">${groups.map(([label, slugs]) => `<div class="topic-group"><h3>${escape(label)}</h3><ul>${slugs.map(slug => `<li><a href="${slug}/"><span>${escape(definitions[slug][0])}</span>${pages.find(p=>p.slug===slug).draft ? '<small>In progress</small>' : arrow}</a></li>`).join('')}</ul></div>`).join('')}</div></section>
<div class="help-banner"><div><h2>A question along the way?</h2><p>We’re happy to help you find your feet.</p></div><a href="mailto:support@snippets.ch">Get in touch ${arrow}</a></div>`;
fs.writeFileSync(path.join(root, 'docs', 'index.html'), shell({body:overview, overview:true}));

console.log(`Built ${pages.length} articles and the docs overview.`);
