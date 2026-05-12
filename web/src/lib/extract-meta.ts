// Extract title + meta line from canon markdown bodies that don't use frontmatter.
//
// Expected shape:
//   # 标题
//
//   **作者 · 年份 / 日期**
//
//   > 原文：<url>
//
// Falls back gracefully if any line is missing.

export interface CanonMeta {
  title: string;
  byline: string | null;
  source: string | null;
}

export function extractMeta(body: string, fallbackTitle: string): CanonMeta {
  const lines = body.split('\n');
  let title = fallbackTitle;
  let byline: string | null = null;
  let source: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('# ') && title === fallbackTitle) {
      title = line.replace(/^#\s+/, '').trim();
    } else if (line.startsWith('**') && line.endsWith('**') && !byline) {
      byline = line.replace(/^\*\*|\*\*$/g, '').trim();
    } else if (line.startsWith('> 原文') && !source) {
      const match = line.match(/<(https?:[^>]+)>/);
      if (match) source = match[1];
    }
    if (title !== fallbackTitle && byline && source) break;
  }

  return { title, byline, source };
}

// Directory-based topic labels for the flat browse page (/canon/all).
// These reflect the file layout (by subject) — not the canon/README narrative
// sections (看见/造物/反躬/立命), which group articles by what they do
// to the reader. A single directory often spans multiple narrative sections.
export const CATEGORY_LABELS: Record<string, string> = {
  inquiry: '探究',
  science: '科学',
  form: '形式',
  vision: '愿景',
  systems: '系统',
  languages: '语言',
  ai: 'AI',
  career: '事业',
  expression: '表达',
};
