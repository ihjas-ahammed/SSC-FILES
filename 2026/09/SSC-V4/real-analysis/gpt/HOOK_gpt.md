# GPT Level 2 implementation handoff

This is an isolated implementation brief for GPT. Do not modify files outside the
`gpt/` folder unless the user explicitly asks for integration. The existing project
instructions remain authoritative for the main build.

## Goal

Extend the reviewed Level 1 study slice with the smallest useful Level 2 layer:

- theorem-statement flashcards;
- OMR-style question → user choice → full worked answer;
- MathJax theorem-writing input;
- contextual LaTeX command palette with click-to-insert commands;
- basic note completion and first-attempt tracking;
- mobile-first, accessible layout.

Level 2 adds:

- delayed theorem reattempts;
- a simple visible spacing interval;
- proof-plan generation before revealing a model proof;
- a separate proof result and review state.

Use a small representative content set. Do not build the full graph scheduler, advanced
mastery levels, exam-track weighting, question generators, Firebase sync, or the complete
entrance course yet.

## Theorem-writing workspace

Provide a focused input area where the user types only a LaTeX math fragment. Render the
MathJax output immediately below it. Add an information button that opens a compact list
of useful LaTeX commands; clicking a command inserts it at the cursor. Handle malformed
LaTeX safely and clearly.

This verifies rendering only. The user decides whether the theorem is mathematically
correct.

## Question flow

Show the objective question first. The user selects an answer before seeing the solution.
Then show:

1. correct/incorrect result;
2. the complete worked answer;
3. the relevant theorem, definition, or trap;
4. a changed-version follow-up when useful.

Keep theorem flashcards focused on statement recall. Do not treat opening a note or
flipping a card as proof of mastery.

## Review gate

Stop after the Level 2 slice works. Do not continue into later levels automatically.
The user must review the experience and report issues involving delayed recall, proof
generation, scheduling clarity, mobile layout, and usefulness. Only then should later
features be planned.

```text
Level 1 → user review → fixes → Level 2 → user review → fixes → next level
```

## Engineering constraints

- Keep the implementation small and readable.
- Do not add plugins, AGY routing, external agents, or hidden dependencies.
- Do not download books or external resources.
- Keep all GPT work inside `gpt/` until integration is explicitly approved.
- Do not claim mathematical verification from MathJax rendering.
