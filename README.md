# vidya

Agent skills and canonical CS texts.

## Structure

```text
vidya/
├── skills/          # reusable, portable agent skills
│   └── <skill-name>/
│       ├── SKILL.md
│       ├── references/
│       ├── scripts/
│       └── assets/
└── canon/           # foundational CS papers and talks, in Chinese
```

## Rules

- Keep each skill in its own directory
- Use `SKILL.md` as the source of truth
- Keep platform-specific metadata out of the core repo

