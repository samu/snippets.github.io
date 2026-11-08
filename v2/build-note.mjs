// Build-time only: the website plays this atlas using CSS, without JavaScript.
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdtempSync, readFileSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const site = fileURLToPath(new URL('.', import.meta.url));
const source = join(site, '../static/media/porcelain-light-icon-opening-55-90');
const manifest = JSON.parse(readFileSync(join(source, 'png-manifest.json'), 'utf8'));
if (manifest.frame_count !== 90 || manifest.start_index !== 0 || manifest.end_index !== 89) {
  throw new Error('The CSS atlas expects frames 0000–0089. Update the CSS mapping before changing the frame count.');
}

// Preserve the approved direction: flat first, blue corner peeled open last.
const frames = Array.from({ length: 90 }, (_, i) =>
  join(source, 'png', `frame-${String(89 - i).padStart(4, '0')}.png`));
frames.forEach(frame => statSync(frame));
const work = mkdtempSync(join(tmpdir(), 'snippets-note-'));
const encode = (input, output) => execFileSync('cwebp', [
  '-quiet', '-q', '90', '-alpha_q', '100', '-m', '6', input, '-o', output,
]);

try {
  const atlas = join(work, 'atlas.png');
  const icon = join(work, 'icon.png');
  const rows = Array.from({ length: 9 }, (_, row) => [
    '(', ...frames.slice(row * 10, row * 10 + 10), '-resize', '480x480', '+append', ')',
  ]).flat();
  execFileSync('magick', ['-background', 'none', '-filter', 'Lanczos', ...rows, '-append', atlas]);
  execFileSync('magick', [frames.at(-1), '-filter', 'Lanczos', '-resize', '160x160', icon]);
  encode(atlas, join(work, 'note-opening-90.webp'));
  encode(icon, join(work, 'note-open.webp'));
  for (const name of ['note-opening-90.webp', 'note-open.webp']) {
    copyFileSync(join(work, name), join(site, 'assets', name));
    console.log(`${name}: ${statSync(join(site, 'assets', name)).size.toLocaleString()} bytes`);
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
