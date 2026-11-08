import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const repo = fileURLToPath(new URL('../', import.meta.url));
export const site = path.join(repo, 'site');
export const content = path.join(repo, 'content');
export const media = path.join(repo, 'media');
export const output = process.env.SNIPPETS_BUILD_DIR || path.join(repo, 'dist');
