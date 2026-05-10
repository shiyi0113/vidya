---
name: socratic-paper-reading
description: Co-read research papers with the user using a Socratic, multi-pass methodology. The agent handles all mechanical work — extracting structure, looking up terms, tracing references, generating probing questions, maintaining layered notes — while the user retains all interpretive and critical work (understanding, judgment, "if I were writing this..."). Trigger this skill whenever the user shares a research paper (PDF, arXiv link/ID, or paper title) and signals they want to engage with it deeply — phrases like "help me read this paper", "let's go through this paper", "walk me through [paper]", "I want to understand [paper]", or simply uploads a paper without specifying what they want. Especially well-suited to AI infrastructure, reinforcement learning, and embodied intelligence papers, but the methodology generalizes. Do NOT trigger when the user clearly only wants a one-shot summary or has a single specific factual question about a paper — this skill is for sustained co-reading sessions, not quick lookups.
---

# Socratic Paper Reading

A co-reading methodology built on one principle: **automate what doesn't grow the user; preserve what does**.

The mechanical work of reading a paper — extracting structure, identifying paper type, looking up citations, finding figures, tracking what's been said, generating probing questions — does not improve the user's research taste. The interpretive work — judging whether claims are valid, deciding what's actually novel, imagining alternative framings — does. This skill loads the first onto the agent and protects the second for the user.

The methodology is adapted from Keshav's three-pass method, Andrew Ng's CS230 reading advice, and Shen Xiangyang & Hua Gang's "three layers, four stages, ten questions" framework.

## When to use this skill

**Trigger when:**
- User shares a paper and signals sustained engagement ("read with me", "go through this with me", "help me understand X")
- User uploads a PDF that is clearly a research paper without other instructions
- User explicitly invokes this skill

**Do not trigger when:**
- User wants only a one-shot summary or TL;DR
- User has a single specific factual question about a paper they've already read
- User is asking the agent to write a related-work section or literature review (different task)

If unclear, ask once: "Do you want a quick summary, or shall we do a proper read-through together?"

## At session start

Before entering the phased flow, briefly establish two things:

1. **Reading purpose.** Why is the user reading this paper? Three common modes shape the rest of the session:
   - *Survey mode*: building breadth in a new area → favor Phases 0-1, lighter on 3
   - *Deep mode*: this paper matters for the user's current work → full pipeline
   - *Critique mode*: user is reviewing or rebutting → emphasize Phase 3
2. **Background calibration.** Has the user read related work in this area? This affects whether to explain prerequisites or assume them.

Two sentences from the user is enough. Don't make this a long interview.

## The phased flow

Default sequence is Phase 0 → 1 → 2 → 3 → (optional) 4. At each phase boundary, briefly check whether to proceed, skip, or revisit. Real reading is non-linear; treat phases as states the user moves between, not a forced march.

### Phase 0 — Agent's "zeroth pass" (autonomous)

Without asking the user anything, do a Keshav-style first-pass yourself:

- **Identify the paper type.** For this user's domains, common types include:
  - *RL algorithm*: new method, evaluated on RL benchmarks
  - *Training infra*: distributed training, parallelism, scheduling, memory
  - *Inference infra*: serving, KV cache, quantization, batching, speculative decoding
  - *Embodied policy*: VLA, robot learning, sim-to-real, manipulation
  - *Benchmark / dataset*: new evaluation suite
  - *Position / survey*: argument or overview piece
  - *System measurement*: empirical study of an existing system
  
  Different types have different attack surfaces. State the type up front — it matters for Phase 3.

- **Extract**: title, venue/year, abstract, all figure captions, full section headings, conclusion. Read figure 1 closely — in ML papers it often encodes the entire contribution.

- **List the claims** (at most 3, in plain language, *not* the paper's marketing phrasing).

- **List the setup**: env / dataset / hardware / model size / number of seeds / open source? / what was held fixed vs. varied?

- **Note what stood out**: a striking number, a non-obvious design choice, an unusual framing, an oddly specific limitation.

**Do not produce a "summary" or judgment.** This phase is information extraction only. Summarizing is the user's job in Phase 1. The output is a structured note dropped into the notes file (see "Notes file" below).

### Phase 1 — User's first pass (Socratic)

Hand control back. The user reads abstract + intro + key figures themselves, using the Phase 0 extract as scaffolding (not a substitute).

When they're ready, probe with these questions, in this order:

1. What did the authors try to accomplish? *(Ng)*
2. What were the key elements of the approach? *(Ng)*
3. Why does this matter in the field? *(Shen — significance)*
4. What can you use yourself? *(Ng — operational extraction)*

**Do not accept vague answers.** The agent's value in this phase is refusing abstraction. If the user says "they improve sample efficiency in RL", probe: "Sample efficiency measured how — env steps, wall-clock, or interactions? Relative to which baseline? On which benchmark?" This pressure is the entire point.

Specific probes refer to specific claims, numbers, or design choices the user just stated. Generic probes ("can you say more?") are not Socratic — they're filler.

If the user can't answer a probe, don't push to a "right answer" — log it under "open questions" in the notes file and let them know it'll come up in Phase 2.

### Phase 2 — User's second pass (agent as on-call lookup)

The user reads the body in detail. The agent's role flips: stop driving, become a query handler.

When the user asks about a term, method, citation, or notation:
- Give the definition AND the context: "this is the standard X technique, but their version is non-standard — see §3.2 where they modify Y"
- For citations, briefly summarize what the cited work actually did — don't just give the title
- Flag when something the paper presents as standard is actually contested in the literature

**Do not interrupt with proactive questions in this phase.** Reading flow matters. Probing happens at phase boundaries, not mid-pass.

When the user signals end of Phase 2 (or after a natural pause), ask the heavier comprehension questions:
- What's the actual delta from prior work? (Be concrete — what did the previous SOTA look like, exactly?)
- What's the load-bearing claim? If one number/result were wrong, would the paper collapse, or just lose a section?
- Did anything from Phase 1's "open questions" get resolved? What's still open?

### Phase 3 — Critical reading (agent as reviewer coach)

This phase generates a **paper-specific** critique, not a canned domain checklist. The agent should:

1. **Identify the type of evidence** the paper relies on:
   - empirical benchmarks (most ML/RL)
   - system measurements (most infra)
   - real-world deployment trials (some embodied)
   - theoretical analysis
   - human evaluation
   - case studies / qualitative

2. **Generate paper-specific attack vectors.** Read `references/attack-surface-seeds.md` to prime your thinking with seed examples in the user's domains. Use the seeds as inspiration, not as a fixed checklist — the goal is to find this paper's specific weaknesses, not run a generic audit.

3. **Present 5-8 attack vectors, ranked by severity.** For each:
   - State the attack in one sentence
   - Indicate whether the paper addresses it (and where, if so)
   - Estimate severity: would this just weaken the claim, or kill it?

4. **Let the user pick which to investigate.** For chosen ones, the agent helps with:
   - Back-of-envelope sanity checks (throughput math, FLOPs, memory)
   - Searching for missing details in appendices and supplementary
   - Comparing with same-period work that ran the same benchmarks
   - Searching for follow-up work that confirms or contradicts

The user's judgment is the output. The agent supplies ammunition.

### Phase 4 — Creative reading (gated, optional)

**Default: skip.** Only enter Phase 4 if at least one is true:
- The paper is in the user's active research area
- Phase 3 surfaced an attack that points at a real research gap
- The user explicitly asks ("let's do creative reading on this one")

If entered:
1. Ask the user: "If you were writing this paper, what would you do differently?" Wait for their answer first — do not propose alternatives before they've spoken.
2. Then propose 2-3 alternative framings the user did NOT mention. Useful moves:
   - Different problem decomposition
   - Different evaluation regime
   - Same method, different application domain
   - Same problem, different prior assumption
3. Ask the user to critique your alternatives. The goal is to surface their research taste through their critique, not to produce "the right answer".

Phase 4 is training, not output. The conversation matters more than any artifact written down.

## Notes file (layered)

Maintain a single layered markdown file at `paper-notes-<short-title>.md` in the working directory. Three layers, in one file, written progressively as the session unfolds.

```markdown
# <Paper Title>

> arXiv: <id> | venue/year | type: <RL algo / training infra / ...>
> Session date: <YYYY-MM-DD>

## Capsule
[3-5 sentences. Filled in at end of Phase 2. The user's own one-paragraph summary, in their own words — not the agent's.]

## Refined notes
### What it claims
- [bullet list, claims as the user articulated them, not as the paper marketed them]

### What it actually shows
- [load-bearing evidence, with caveats]

### Attack surface
- [from Phase 3, with severity tags: kills / weakens / nitpick]

### Open questions
- [unresolved after Phase 2 / Phase 3]

### What I might use
- [operational — methods to try, framings worth borrowing, citations to follow up]

## Raw log
### Phase 0 extract
[agent's autonomous extraction, dumped here]

### Phase 1 Q&A
[probes asked and answers given]

### Phase 2 lookups
[term definitions and citation summaries as they came up]

### Phase 3 attack analysis
[full attack tree before user's selection]

### Phase 4 (if applicable)
[user's alternative framings, agent's alternatives, user's critiques]
```

The capsule and refined notes are what the user will reread later (or feed into a later related-work draft). The raw log is for traceability and for resuming a session that gets interrupted. Update the file at every phase transition, not at the end.

## Failure modes to watch for

- **Substituting summary for understanding.** If the agent ever finds itself writing "here's what this paper says" during Phases 1-4, stop. That work belongs to the user.
- **Generic probes.** "Can you say more?" is not Socratic. Specific probes refer to specific claims, numbers, or design choices the user just made.
- **Tolerating vagueness.** If the user gives a fuzzy answer and the agent moves on, the skill has failed at its core function. Push back, gently but consistently.
- **Skipping Phase 0.** Tempting to leap into discussion. Don't — the structured extraction is what makes Phase 1 productive.
- **Forced Phase 4.** Not every paper deserves creative reading. Defaulting to it dilutes its value.
- **Over-explaining the methodology.** The user knows why we do this. Just do it.
- **Treating phases as a forced march.** If the user wants to jump from Phase 0 directly to Phase 3, that's fine. The phases are a default, not a contract.

## Reference files

- `references/attack-surface-seeds.md` — seed examples for Phase 3 critique generation, organized by paper type (RL algorithm, training infra, inference infra, embodied, benchmarks). Seeds are inspiration, not a checklist. Read this when entering Phase 3.
