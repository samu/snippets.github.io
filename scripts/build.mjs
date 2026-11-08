import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { repo, site, content } from './paths.mjs';

const staging = path.join(repo, '.site-build');
const destination = path.join(repo, 'dist');
const previous = path.join(repo, '.dist-previous');
const env = { ...process.env, SNIPPETS_BUILD_DIR: staging };
fs.rmSync(staging, { recursive: true, force: true });

try {
  fs.cpSync(site, staging, { recursive: true });
  fs.cpSync(path.join(repo, 'public'), staging, { recursive: true });
  const release = JSON.parse(fs.readFileSync(path.join(content, 'release.json'), 'utf8'));
  if (!/^\d+\.\d+\.\d+(?:-[\w.-]+)?$/.test(release.version)) throw new Error('Invalid release version');
  const homepage = path.join(staging, 'index.html');
  fs.writeFileSync(homepage, fs.readFileSync(homepage, 'utf8').replaceAll('{{release.version}}', release.version));
  for (const script of ['build-docs', 'build-pricing', 'finalize', 'check']) {
    execFileSync(process.execPath, [path.join(repo, 'scripts', script + '.mjs')], { env, stdio: 'inherit' });
  }
  // Keep the last successful preview available while generating and checking.
  fs.rmSync(previous, { recursive: true, force: true });
  if (fs.existsSync(destination)) fs.renameSync(destination, previous);
  try { fs.renameSync(staging, destination); }
  catch (error) {
    if (fs.existsSync(previous)) fs.renameSync(previous, destination);
    throw error;
  }
  fs.rmSync(previous, { recursive: true, force: true });
  console.log('Built dist/ — static HTML, CSS and local media.');
} finally {
  fs.rmSync(staging, { recursive: true, force: true });
}
