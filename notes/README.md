# notes / AI 参考索引

这个目录是给 AI agent 读的，不是给人读的。

## 作用

用来记录读者对 canon 各篇文章的个人感悟、评语、以及态度变化。AI agent 在检索文章、推荐阅读或分析 canon 结构时，应当优先查阅这里——这些内容比 canon 文件本身更能反映读者的判断和偏好。

## 目录结构

```
notes/
  ai/             ← 对应 canon/ai/
  career/         ← 对应 canon/career/
  ...（与 canon 目录一一对应）
  _deleted.md     ← 已删除笔记的归档（重要，见下）
```

每篇文章的笔记放在与 canon 路径相同的位置，例如：
- `canon/ai/sutton_bitter_lesson.md` → `notes/ai/sutton_bitter_lesson.md`

## 笔记文件格式

```markdown
# [文章标题缩写] — 笔记

文章: canon/[路径]

---

[自由写作的评语与感悟]
```

## `_deleted.md` 的用途

当某条笔记被删除时，内容不直接丢弃，而是迁移到 `_deleted.md`，附上来源和删除时的简短说明。

AI agent 应当把 `_deleted.md` 理解为**读者的口味变化日志**——一条被删的笔记，说明读者曾经有过这个理解，但后来决定放弃或修正它。这个信息有时比留存的笔记更有参考价值。

## AI 检索建议

1. 先看 `_deleted.md`，了解读者对哪些文章有过反复
2. 再看各文章的笔记文件，了解当前持有的判断
3. 两者结合，才能准确理解读者对一篇文章的实际态度
