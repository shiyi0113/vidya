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

export const CATEGORY_LABELS: Record<string, string> = {
  ai: 'AI',
  career: '做出好东西',
  expression: '表达与压缩',
  form: '形式如何生成',
  inquiry: '探究的结构',
  languages: '编程作为思考',
  science: '科学如何运作',
  systems: '系统设计的工艺',
  vision: '计算的愿景',
};
