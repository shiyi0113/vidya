import { defineConfig } from 'astro/config';
import { rewriteCanonLinks } from './src/lib/remark-rewrite-canon-links.mjs';

const SITE = 'https://zoheth.github.io';
const BASE = '/vidya';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  markdown: {
    remarkPlugins: [[rewriteCanonLinks, { base: BASE }]],
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
