import fs from 'node:fs';
import path from 'node:path';
import { spawn, execFileSync } from 'node:child_process';
import { repo } from './paths.mjs';

const build = path.join(repo, 'scripts/build.mjs');
execFileSync(process.execPath, [build], { stdio: 'inherit' });
const server = spawn(process.execPath, [path.join(repo, 'scripts/serve.mjs'), ...process.argv.slice(2)], { stdio: 'inherit' });
let timer, running = false, pending = false;
function rebuild() {
  if (running) { pending = true; return; }
  running = true;
  const child = spawn(process.execPath, [build], { stdio: 'inherit' });
  child.on('exit', code => {
    running = false;
    console.log(code === 0 ? 'Updated. Refresh your browser to see the changes.' : 'Build failed; keeping the previous preview.');
    if (pending) { pending = false; rebuild(); }
  });
}
const watchers = ['site', 'content', 'scripts', 'public'].map(directory => fs.watch(path.join(repo, directory), { recursive: true }, () => {
  clearTimeout(timer);
  timer = setTimeout(rebuild, 180);
}));
const close = () => { clearTimeout(timer); watchers.forEach(w => w.close()); server.kill(); };
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => { close(); process.exit(); });
server.on('exit', code => { close(); process.exit(code || 0); });
server.on('error', error => { console.error(error.message); close(); process.exit(1); });
