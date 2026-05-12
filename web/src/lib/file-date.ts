// Resolve "when was this essay added to canon?" for RSS pubDates.
// Strategy:
//   1. Most recent git commit touching the file (so updates also bump recency).
//   2. Year parsed from the byline.
//   3. Now.
import { execSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..', '..', '..');

export function fileDate(
  relativePathFromRepo: string,
  fallbackByline: string | null,
): Date {
  const abs = resolve(repoRoot, relativePathFromRepo);

  // 1. git log
  if (existsSync(resolve(repoRoot, '.git'))) {
    try {
      const out = execSync(
        `git log -1 --format=%aI -- "${relativePathFromRepo}"`,
        { cwd: repoRoot, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
      ).trim();
      if (out) return new Date(out);
    } catch {
      /* fall through */
    }
  }

  // 2. file mtime — useful in dev when files are touched locally
  try {
    if (existsSync(abs)) {
      const mtime = statSync(abs).mtime;
      if (mtime.getFullYear() > 2000) return mtime;
    }
  } catch {
    /* fall through */
  }

  // 3. year from byline
  if (fallbackByline) {
    const match = fallbackByline.match(/(\d{4})/);
    if (match) return new Date(Number(match[1]), 0, 1);
  }

  return new Date();
}
