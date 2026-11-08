import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { output } from './paths.mjs';

const domain = 'https://' + fs.readFileSync(path.join(output, 'CNAME'), 'utf8').trim();
function pages(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? pages(file) : entry.name === 'index.html' ? [file] : [];
  });
}
const routes = [];
for (const file of pages(output)) {
  const route = path.relative(output, file).split(path.sep).join('/').replace(/index\.html$/, '');
  const canonical = domain + '/' + route;
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace('</head>', `<link rel="canonical" href="${canonical}"></head>`);
  html = html.replace(/href="([^"?]+\.css)(?:\?[^"\s]*)?"/g, (_, href) => {
    const css = path.resolve(path.dirname(file), href);
    const hash = createHash('sha256').update(fs.readFileSync(css)).digest('hex').slice(0, 10);
    return `href="${href}?v=${hash}"`;
  });
  fs.writeFileSync(file, html);
  routes.push(route);
}
// Old theme URLs remain tiny redirects, never duplicate content pages.
function redirect(route, target) {
  const directory = path.join(output, route);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Snippets · Page moved</title><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${target}"><link rel="canonical" href="${domain}${target}"></head><body><p><a href="${target}">Continue to Snippets</a></p></body></html>`);
}
for (const route of routes) redirect('dark/' + route, '/' + route);
redirect('showcase/', '/#features');
redirect('dark/showcase/', '/#features');
fs.writeFileSync(path.join(output, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + routes.map(route => `  <url><loc>${domain}/${route}</loc></url>`).join('\n') + '\n</urlset>\n');
fs.writeFileSync(path.join(output, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${domain}/sitemap.xml\n`);
