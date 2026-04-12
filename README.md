# vidya

Reusable, portable agent skills.

## Structure

```text
vidya/
├── skills/
│   └── <skill-name>/
│       ├── SKILL.md
│       ├── references/
│       ├── scripts/
│       └── assets/
└── templates/
    └── skill/
```

## Rules

- Keep each skill in its own directory
- Use `SKILL.md` as the source of truth
- Keep platform-specific metadata out of the core repo

