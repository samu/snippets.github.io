// Local preview only. Production hosting serves the generated files directly.
import { createServer } from 'node:http';
import { access, open, readFile, realpath, stat } from 'node:fs/promises';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { repo } from './paths.mjs';

const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.json': 'application/json',
  '.xml': 'application/xml', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.gif': 'image/gif', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
  '.webm': 'video/webm', '.mp4': 'video/mp4', '.pdf': 'application/pdf',
};
const inside = (root, file) => file === root || file.startsWith(root + path.sep);

export async function createPreviewServer(directory = path.join(repo, 'dist')) {
  const root = await realpath(directory);
  return createServer((request, response) => {
    // Never return 304: reloading must read the latest build, even within a second.
    response.setHeader('Cache-Control', 'no-store');
    const send = (status, body, headers = {}) => {
      response.writeHead(status, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Length': Buffer.byteLength(body), ...headers,
      });
      response.end(request.method === 'HEAD' ? undefined : body);
    };
    async function handle() {
      if (!['GET', 'HEAD'].includes(request.method)) return send(405, 'Method not allowed', { Allow: 'GET, HEAD' });
      let url, pathname;
      try {
        url = new URL(request.url, 'http://localhost');
        pathname = decodeURIComponent(url.pathname);
        if (/[\0\\]/.test(pathname)) throw new Error('Invalid path');
      } catch { return send(400, 'Invalid URL'); }
      let file = path.resolve(root, '.' + pathname);
      if (!inside(root, file)) return send(403, 'Forbidden');
      file = await realpath(file);
      if (!inside(root, file)) return send(403, 'Forbidden');
      if ((await stat(file)).isDirectory()) {
        if (!url.pathname.endsWith('/')) {
          return send(301, 'Moved permanently', { Location: '/' + url.pathname.replace(/^\/+/, '') + '/' + url.search });
        }
        file = await realpath(path.join(file, 'index.html'));
        if (!inside(root, file)) return send(403, 'Forbidden');
      }
      const handle = await open(file, 'r');
      try {
        const info = await handle.stat();
        if (!info.isFile()) return send(404, 'Not found');
        response.writeHead(200, {
          'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream',
          'Content-Length': info.size,
        });
        if (request.method === 'HEAD') response.end();
        else await pipeline(handle.createReadStream({ autoClose: false }), response);
      } finally { await handle.close(); }
    }
    handle().catch(async error => {
      if (response.destroyed) return;
      if (response.headersSent) return response.destroy();
      if (['ENOENT', 'ENOTDIR'].includes(error.code)) {
        const page = await readFile(path.join(root, '404.html')).catch(() => 'Not found');
        return send(404, page, { 'Content-Type': 'text/html; charset=utf-8' });
      }
      console.error('Preview request failed:', error.message);
      send(500, 'Unable to serve this file');
    });
  });
}

async function main() {
  const { values } = parseArgs({ options: { port: { type: 'string', default: '64530' }, help: { type: 'boolean', short: 'h' } } });
  if (values.help) return console.log('Usage: pnpm preview [--port <number>]\nDefault port: 64530. Use --port 0 to choose an available port.');
  const port = Number(values.port);
  if (!/^\d+$/.test(values.port) || !Number.isInteger(port) || port > 65535) throw new Error('Port must be an integer from 0 to 65535.');
  await access(path.join(repo, 'dist/index.html')).catch(() => { throw new Error('Build the site first with pnpm build (or use pnpm dev).'); });
  const server = await createPreviewServer();
  server.on('error', error => { console.error('Preview:', error.message); process.exitCode = 1; });
  server.listen(port, '127.0.0.1', () => console.log(`Preview (caching disabled): http://127.0.0.1:${server.address().port}/`));
  for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => {
    server.close();
    server.closeAllConnections();
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(error => { console.error('Preview:', error.message); process.exitCode = 1; });
}
