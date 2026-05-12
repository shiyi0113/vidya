import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..', '..');
const canonDir = resolve(repoRoot, 'canon');

// Essays under canon/. Excludes the canon README (used as the index page).
const canon = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '!README.md'],
    base: canonDir,
  }),
  schema: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    year: z.union([z.string(), z.number()]).optional(),
  }),
});

// Top-level prose pages: project README + canon README (rendered as index pages).
const pages = defineCollection({
  loader: glob({
    pattern: ['*.md', 'canon/*.md'],
    base: repoRoot,
  }),
});

export const collections = { canon, pages };
