# SSC-V4 handoff map

The project instructions are split by responsibility:

- [`HOOK_claude.md`](HOOK_claude.md) — product design, learning experience, algorithms,
  UI, programs, implementation order, and integration of validated data.
- [`HOOK_agy.md`](HOOK_agy.md) — accurate syllabus/question collection, provenance,
  extraction, repair, validation, and handoff data rules.
- [`data_temp/content-skeleton.json`](data_temp/content-skeleton.json) — draft-only JSON
  contract used by AGY and Claude before content is promoted into `data/` or `pyq/`.

## Shared invariants

- The three displayed courses are Real Analysis I, Real Analysis II, and Real Analysis
  for Entrance, in that order.
- Real Analysis for Entrance contains only genuinely new entrance material. It must not
  duplicate concepts already covered by RA1 or RA2.
- All paths resolve inside `SSC-V4`; the project must not depend on `SSC-V2`,
  `Documents/Banana`, or another checkout.
- Draft data stays in `data_temp/` until it passes the validation rules in
  `HOOK_agy.md`.
- Flashcards are primarily for theorem-statement recall. Objective questions use an
  OMR-first attempt followed by the full worked answer.
- Design quality and fluent modular code take priority over expanding content volume.
- The current target is Level 1 only. Claude must implement it, pause for user review,
  and fix it before beginning later levels.
- Claude owns design and implementation without being routed through an AGY plugin or
  wrapper. Claude may edit `HOOK_agy.md`; AGY must never edit `HOOK_claude.md`.
- Books are not downloaded or copied into this repository; the user obtains them
  independently.

Read the relevant handoff file before making changes. When a task crosses both areas,
AGY validates the data first and Claude integrates it into the product.
