---
name: github-qa-extractor
description: >
  Extract important questions from GitHub repositories, including issues,
  pull requests, discussions, and code reviews, and generate Markdown
  question cards for deep study.
  Use this skill when the user wants to extract key questions from a repo,
  mine important technical problems from GitHub threads, or build a study set
  of high-value questions from open-source projects.
---

# GitHub Question Extractor

Extract important, high-impact questions from GitHub repositories. The core philosophy is simple: questions are more valuable than answers. A great question reveals the structure of a problem space; answers can always be found later.

## Prerequisites

Confirm `gh` is available and authenticated:

```bash
gh auth status
```

If not authenticated, ask the user to run `gh auth login` first.

## Workflow

### Step 1 — Parse input

The user provides a GitHub repo, for example `https://github.com/owner/repo` or `owner/repo`. Extract `OWNER` and `REPO`. Note any user-specified filters such as labels, date range, source types, topic area, or language.

### Step 2 — Fetch raw data

Use `gh` with `--json` for structured output. Default to about 80 items per source, and adjust based on repo size.

Important: fetch all states, not just resolved items. Unanswered and open questions are often the most important.

#### 2a. Issues

```bash
# Closed issues — include both completed and not_planned, as "not_planned" often means hard design trade-offs
gh issue list --repo OWNER/REPO --state closed --limit 80 \
  --json number,title,body,labels,comments,author,closedAt,url,stateReason,reactionGroups

# Open issues — long-standing open issues are often the hardest, most important questions
gh issue list --repo OWNER/REPO --state open --limit 80 \
  --json number,title,body,labels,comments,author,createdAt,url,reactionGroups
```

Fetch comments for a promising issue:

```bash
gh issue view NUMBER --repo OWNER/REPO --json comments,reactionGroups
```

Tips:
- Scan the repo's labels first with `gh label list --repo OWNER/REPO`.
- Labels like `question`, `help wanted`, `design`, `architecture`, `RFC`, and `discussion` are high-signal.
- `stateReason: "not_planned"` with deep discussion often reveals important design boundaries and trade-offs.

#### 2b. Pull requests

```bash
gh pr list --repo OWNER/REPO --state merged --limit 80 \
  --json number,title,body,labels,comments,reviews,author,mergedAt,url

# Also check closed-unmerged PRs — rejected approaches often surface critical design questions
gh pr list --repo OWNER/REPO --state closed --limit 40 \
  --json number,title,body,labels,comments,reviews,author,closedAt,url
```

Detailed review threads on a specific PR:

```bash
gh api repos/OWNER/REPO/pulls/NUMBER/comments --paginate
```

Closed-unmerged PRs are valuable because rejection reasons often reveal architectural constraints.

#### 2c. Discussions

```bash
gh api graphql -f query='
  query($owner: String!, $repo: String!, $first: Int!) {
    repository(owner: $owner, name: $repo) {
      discussions(first: $first, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          number
          title
          body
          url
          createdAt
          closedAt
          answer { body author { login } createdAt }
          labels(first: 5) { nodes { name } }
          author { login }
          category { name slug }
          upvoteCount
          comments(first: 15) {
            nodes {
              body
              author { login }
              createdAt
              isAnswer
              replies(first: 10) {
                nodes { body author { login } createdAt }
              }
            }
          }
        }
      }
    }
  }
' -f owner=OWNER -f repo=REPO -F first=80
```

To fetch category IDs for filtering:

```bash
gh api graphql -f query='
  query($owner: String!, $repo: String!) {
    repository(owner: $owner, name: $repo) {
      discussionCategories(first: 20) {
        nodes { id name slug }
      }
    }
  }
' -f owner=OWNER -f repo=REPO
```

#### 2d. Code review comments

```bash
gh api repos/OWNER/REPO/pulls/comments \
  --paginate \
  --jq '.[] | {body, user: .user.login, url: .html_url, path, diff_hunk, author_association, in_reply_to_id, created_at}'
```

Group by `in_reply_to_id` to reconstruct threads. Focus on reviewer questions that ask "why", not just "what".

#### 2e. Cross-references

For a candidate issue, check how often it is referenced by other issues or PRs:

```bash
gh api graphql -f query='
  query($owner: String!, $repo: String!, $number: Int!) {
    repository(owner: $owner, name: $repo) {
      issue(number: $number) {
        timelineItems(first: 50, itemTypes: [CROSS_REFERENCED_EVENT]) {
          totalCount
          nodes {
            ... on CrossReferencedEvent {
              source {
                ... on Issue { number title url }
                ... on PullRequest { number title url }
              }
            }
          }
        }
      }
    }
  }
' -f owner=OWNER -f repo=REPO -F number=NUMBER
```

A high cross-reference count is a strong signal that this question is a central node in the project's problem space.

### Step 3 — Evaluate question importance

Read through the fetched data. The goal is to find questions that matter, regardless of whether they have answers.

#### Importance signals

Tier 1 — Structural importance
- Drives code changes
- High cross-reference count
- Maintainer-initiated

Tier 2 — Community resonance
- High reaction count
- High participant count
- Duplicate or repeat pattern
- High discussion upvotes

Tier 3 — Depth indicators
- "Why" over "how"
- Design trade-off
- Long-lived open issue
- Closed as `not_planned` with substantive discussion
- Rejected PRs with meaningful review discussion

#### What to skip

- Pure operational or support questions with trivial answers
- Bug reports that are only crash logs with no conceptual question underneath
- `+1` or "me too" threads with no analytical content
- Questions entirely about transient state
- Exact duplicates of already-selected questions

#### How to extract the question

The raw issue title is often vague or context-dependent. Rewrite each question so that it is:
- self-contained
- precise
- framed at the right level of abstraction

Example:

`"Why does my config fail?"` -> `"How does the config resolution order work, and what happens when multiple sources conflict?"`

### Step 4 — Categorize

Group questions into 3 to 8 categories. Infer from:
- issue and PR labels
- discussion category
- content themes such as config, migration, concurrency, or performance
- question depth

Suggested cross-repo categories:
- Architecture & Design
- Behavior & Semantics
- Performance
- Integration & Ecosystem
- Migration & Evolution

### Step 5 — Generate Markdown

Save a Markdown file like this:

```markdown
# 关键问题 —— {repo_name}

> 提取自 GitHub issues、PRs、discussions 和 code reviews。
> {total_count} 个问题 · {category_count} 个分类
>
> **如何使用：** 这些问题塑造了这个项目。学习这些问题，不只是理解项目“做了什么”，更要理解它“为什么会这样设计”。在展开上下文前，先尝试自己回答每个问题。

---

## {分类名称}

### Q{n}. {简短问题标题}

> **来源：** [{source_type} #{number}]({url})
> **重要性：** {Critical/High/Medium} · **深度：** {Surface/Conceptual/Architectural}
> **状态：** {Answered/Open/Debated}

**问题：**

{用更清晰、自包含的方式重写后的问题。}

**为什么重要：**

{1-2 句话说明为什么这个问题重要。}

<details>
<summary>上下文与讨论</summary>

{总结线程中的关键讨论点。若已回答，包含答案；若存在争议，概括主要立场；若仍未解决，说明难点所在。}

**关键声音：** {谁提出了什么观点，尤其是维护者}

**结果：** [PR #{pr_number}]({pr_url}) —— {一句话说明做了什么改动}

</details>

---
```

The final output must be written in Simplified Chinese. Keep GitHub usernames, technical terms, code identifiers, and URLs in their original form.

Use these levels:
- Importance: `Critical`, `High`, `Medium`
- Depth: `Surface`, `Conceptual`, `Architectural`
- Status: `Answered`, `Open`, `Debated`

Quality rules:
- Questions must be self-contained.
- Every card links back to the original GitHub thread.
- "Why This Matters" must explain practical impact.
- Code fences in context sections must include language tags.
- Open and debated questions are first-class.

### Step 6 — Save output

Save as `key_questions_{repo_name}.md` in the working directory.

If the total question count exceeds 30, offer to split the output into separate files by category.

## Edge cases

- If `gh` is not authenticated, tell the user to run `gh auth login`.
- If Discussions are disabled, skip that step.
- If few important questions are found, report that honestly.
- For very large repos, start with smaller limits.
- Private repos work as long as `gh` is authenticated with access.

