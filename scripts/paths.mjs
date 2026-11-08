import path from "node:path";
import { fileURLToPath } from "node:url";

export const repo = fileURLToPath(new URL("../", import.meta.url));
export const assets = path.join(repo, "public/assets");
export const content = path.join(repo, "src/content");
export const media = path.join(repo, "media");
export const output = path.join(repo, "dist");
