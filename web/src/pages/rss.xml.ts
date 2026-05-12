import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { extractMeta, CATEGORY_LABELS } from '../lib/extract-meta';
import { fileDate } from '../lib/file-date';

export async function GET(context: APIContext) {
  const entries = await getCollection('canon');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  const items = entries
    .map((entry) => {
      const meta = extractMeta(entry.body ?? '', entry.id);
      const parts = entry.id.split('/');
      const category = parts[0];
      const slug = parts.slice(1).join('/');
      const date = fileDate(`canon/${entry.id}.md`, meta.byline);
      const categoryLabel = CATEGORY_LABELS[category] ?? category;
      const description = meta.byline
        ? `${meta.byline} · ${categoryLabel}`
        : categoryLabel;
      return {
        title: meta.title,
        description,
        pubDate: date,
        link: `${base}/canon/${category}/${slug}/`,
      };
    })
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'vidyā · canon',
    description: '一个以人为先、AI 辅助的个人认知项目。canon 是工作记录。',
    site: new URL(import.meta.env.BASE_URL, context.site!).toString(),
    items,
    customData: `<language>zh-CN</language>`,
  });
}
