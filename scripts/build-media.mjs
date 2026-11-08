// Optional maintenance task; normal builds use the checked-in WebPs.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { site, media } from './paths.mjs';

const screenshots = path.join(site, 'assets/screenshots');
for (const filename of fs.readdirSync(path.join(screenshots, 'light')).filter(name => name.endsWith('.webp'))) {
  for (const theme of ['light', 'dark']) {
    const source = path.join(media, 'screenshots', filename.slice(0, -5), theme + '.png');
    execFileSync('cwebp', ['-quiet', '-lossless', '-m', '6', source, '-o', path.join(screenshots, theme, filename)]);
  }
}
await import('./build-note.mjs');
console.log('Rebuilt screenshot WebPs and the Porcelain note atlas. Run pnpm build to preview.');
