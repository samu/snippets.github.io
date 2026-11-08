// Build-time only. Light and dark pages share their content, CSS, font, and note atlas.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { output as root, media as sourceMedia } from './paths.mjs';
const media = new Map();
const relativeURL = (from, to) => {
  const result = path.posix.relative(path.posix.dirname(from), to);
  return result || './';
};
const moon = '<path d="M20.5 13.2A8.6 8.6 0 0 1 10.8 3.5a8.6 8.6 0 1 0 9.7 9.7Z"/>';
const sun = '<circle cx="12" cy="12" r="3.5"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';

function pages(directory = root) {
  return fs.readdirSync(directory, {withFileTypes:true}).flatMap(entry => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return ['dark', 'assets', 'styles'].includes(entry.name) ? [] : pages(file);
    return entry.name === 'index.html' ? [path.relative(root, file)] : [];
  });
}

// Read PNG dimensions so each variant reserves the right space before images load.
function imageInfo(file) {
  const bytes = fs.readFileSync(file);
  return {width:bytes.readUInt32BE(16), height:bytes.readUInt32BE(20)};
}

function prepareMedia(sources) {
  for (const source of sources) {
    for (const [, filename] of source.matchAll(/(?:src|href)="(?:\.\.\/)*assets\/([^"?#]+)"/g)) {
      const light = 'assets/' + filename;
      if (media.has(light)) continue;
      let input, output;
      if (filename.startsWith('screenshots/light/') && filename.endsWith('.webp')) {
        const name = path.basename(filename, '.webp');
        input = path.join(sourceMedia, 'screenshots', name, 'dark.png');
        output = 'assets/screenshots/dark/' + name + '.webp';
      } else if (filename.startsWith('docs/') && filename.endsWith('/light.png')) {
        output = 'assets/' + filename.replace(/\/light\.png$/, '/dark.png');
        input = path.join(sourceMedia, output.replace(/^assets\//, ''));
        if (fs.existsSync(input)) {
          fs.mkdirSync(path.dirname(path.join(root, output)), {recursive:true});
          fs.copyFileSync(input, path.join(root, output));
        }
      }
      if (!input || !fs.existsSync(input)) continue;
      if (!fs.existsSync(path.join(root, output))) throw new Error('Missing dark screenshot: ' + output);
      media.set(light, {path:output, ...imageInfo(input)});
    }
  }
}

function decorate(html, file, dark = false) {
  // Idempotent: rebuild from the light page, stripping only our generated additions.
  html = html.replace(/<a\b[^>]*class="theme-switch"[^>]*>[\s\S]*?<\/a>/g, '')
    .replace(/<link\b[^>]*href="[^"]*themes\.css[^"]*"[^>]*>/g, '')
    .replace(/ data-theme="(?:light|dark)"/g, '');
  const output = dark ? 'dark/' + file : file;
  if (dark) {
    html = html.replace(/<img\b[^>]*>/g, tag => {
      const src = tag.match(/src="([^"]+)"/)?.[1];
      if (!src) return tag;
      const asset = new URL(src, 'https://local.test/' + file).pathname.slice(1);
      const replacement = media.get(asset);
      return replacement ? tag.replace(/width="\d+"/, 'width="' + replacement.width + '"')
        .replace(/height="\d+"/, 'height="' + replacement.height + '"') : tag;
    });
    html = html.replace(/\b(href|src|poster)="([^"]+)"/g, (match, attr, value) => {
      if (value.startsWith('#') || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value)) return match;
      const url = new URL(value, 'https://local.test/' + file);
      let target = url.pathname.slice(1);
      const isPage = target === '' || target.endsWith('/') || target.endsWith('/index.html');
      if (isPage) target = 'dark/' + target;
      else target = media.get(target)?.path || target;
      let result = relativeURL(output, target);
      if (isPage && !result.endsWith('/') && !result.endsWith('.html')) result += '/';
      return attr + '="' + result + url.search + url.hash + '"';
    });
  }
  html = html.replace('<html ', '<html data-theme="' + (dark ? 'dark' : 'light') + '" ')
    .replace(/<meta name="color-scheme" content="[^"]+">/, '<meta name="color-scheme" content="' + (dark ? 'dark' : 'light') + '">')
    .replace(/<meta name="theme-color" content="[^"]+">/, '<meta name="theme-color" content="' + (dark ? '#1c1c1f' : '#f7f7f5') + '">')
    .replace('</head>', '<link rel="stylesheet" href="' + relativeURL(output, 'styles/themes.css') + '"></head>');
  let counterpart = relativeURL(output, dark ? file : 'dark/' + file).replace(/index\.html$/, '');
  if (file === 'index.html') counterpart += '#discover';
  const name = dark ? 'Switch to light theme' : 'Switch to dark theme';
  const toggle = '<a class="theme-switch" href="' + counterpart + '" aria-label="' + name + '" title="' + name + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (dark ? sun : moon) + '</svg></a>';
  // Keep existing mobile link selectors stable by appending the switch after the CTA.
  html = html.replace(/(<div class="nav-links">[\s\S]*?)(<\/div>)/, '$1' + toggle + '$2')
    .replace(/(<nav class="header-links"[^>]*>[\s\S]*?)(<\/nav>)/, '$1' + toggle + '$2');
  fs.mkdirSync(path.dirname(path.join(root, output)), {recursive:true});
  fs.writeFileSync(path.join(root, output), html);
}

export function buildThemes() {
  media.clear();
  const files = pages().filter(file => !file.startsWith('showcase/'));
  const sources = files.map(file => fs.readFileSync(path.join(root, file), 'utf8'));
  prepareMedia(sources);
  files.forEach((file, i) => {
    decorate(sources[i], file);
    decorate(sources[i], file, true);
  });
  console.log('Built ' + files.length + ' light/dark page pairs and ' + media.size + ' dark screenshots.');
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) buildThemes();
