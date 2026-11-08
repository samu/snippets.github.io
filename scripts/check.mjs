import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { parse } from 'parse5';
import { output, content } from './paths.mjs';

function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? files(file) : [file];
  });
}
function* elements(node) {
  if (node.tagName) yield node;
  for (const child of node.childNodes || []) yield* elements(child);
}
const built = files(output);
const documents = new Map(built.filter(f => f.endsWith('.html')).map(file => {
  const html = fs.readFileSync(file, 'utf8');
  assert(!html.includes('{{release.version}}'), 'Unresolved release placeholder: ' + file);
  const nodes = [...elements(parse(html))];
  return [file, { nodes, ids: new Set(nodes.flatMap(n => n.attrs.filter(a => a.name === 'id').map(a => a.value))) }];
}));
const failures = [];
let links = 0;
function checkURL(value, file) {
  if (!value || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value)) return;
  const base = new URL(path.relative(output, file).split(path.sep).join('/'), 'https://preview.local/');
  const url = new URL(value, base);
  let target = path.join(output, decodeURIComponent(url.pathname));
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
  if (!fs.existsSync(target)) failures.push(`${path.relative(output, file)} → missing ${value}`);
  else if (url.hash && documents.has(target) && !documents.get(target).ids.has(decodeURIComponent(url.hash.slice(1)))) failures.push(`${path.relative(output, file)} → missing anchor ${value}`);
  links++;
}
for (const [file, { nodes }] of documents) {
  for (const node of nodes) {
    if (node.tagName === 'script') failures.push('Browser JavaScript in ' + file);
    for (const { name, value } of node.attrs) {
      if (name.startsWith('on') || /^javascript:/i.test(value)) failures.push('Inline JavaScript in ' + file);
      if (['href', 'src', 'poster'].includes(name)) checkURL(value, file);
    }
  }
}
for (const file of built.filter(f => f.endsWith('.css'))) {
  const css = fs.readFileSync(file, 'utf8');
  for (const [, url] of css.matchAll(/url\(["']?([^"')]+)["']?\)/g)) checkURL(url, file);
}
const slugs = fs.readdirSync(path.join(content, 'docs')).filter(f => f.endsWith('.mdx')).map(f => f.slice(0, -4));
for (const theme of ['', 'dark/']) {
  for (const route of ['', 'docs/', 'pricing/', 'privacy/', 'terms/', ...slugs.map(slug => `docs/${slug}/`)]) {
    const file = path.join(output, theme, route, 'index.html');
    assert(documents.has(file), 'Missing page: ' + file);
    assert.equal(documents.get(file).nodes.filter(node => node.attrs.some(a => a.name === 'class' && a.value === 'theme-switch')).length, 1, 'Missing or repeated theme switch: ' + file);
  }
}
for (const name of ['CNAME', '.nojekyll', '404.html', 'robots.txt', 'sitemap.xml']) assert(fs.existsSync(path.join(output, name)), 'Missing ' + name);
assert(!built.some(f => /\.(?:m?js|tsx?|mdx|py)$/.test(f)), 'Build tools or source code leaked into dist');
assert.equal(failures.length, 0, failures.join('\n'));
console.log(`Checked ${documents.size} HTML pages and ${links} local references; all routes/assets/anchors resolve, no browser JavaScript.`);
