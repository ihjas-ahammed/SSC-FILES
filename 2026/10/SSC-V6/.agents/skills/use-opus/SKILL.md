---
name: use-opus
description: Package a study deck (optics-module-1 or abstract-module-1) as a zip with a verification prompt for Opus, which runs on the claude.ai website with no file access. Then take the two blocks Opus replies with in chat, save them, and apply the proposed changes to the data. Use when the user types /use-opus or asks for an Opus verification run on a deck.
---

# /use-opus

Opus runs on the website. It has **no file system and no shell**. It reads the zip the user uploads and replies in chat with two fenced blocks: the report (markdown) and the changes (json). You are the only one who writes files.

## Argument

`/use-opus optics` or `/use-opus abstract`:
- `optics` → `SSC-V6/optics-module-1`
- `abstract` → `SSC-V6/abstract-module-1`

## Phase 1: package (for the user to upload)

1. Make sure `<module>/verify/PROMPT.md` and `<module>/verify/OUTPUT-FORMAT.md` exist and say the run is chat-only (no file writes, no build, no shell). Update them if not.
2. Build `<module>/<name>.zip` from a clean staging folder in the session scratchpad. Include only:
   - `verify/PROMPT.md`, `verify/OUTPUT-FORMAT.md`
   - `study-match/data/data.json` (the original)
   - the unit PDFs under `source/` (optics: `source/units/*.pdf`; abstract: `source/module-*/*.pdf`)
   Exclude everything else: PYQ drafts, build code, src, skills, dist, send, backups, PNGs, zips and `.apply/`. Do not compress the PDFs. Ghostscript changes their extracted text, so the originals must stay.
3. Tell the user the zip path and to upload it to Opus on the website with the prompt. Ask them to paste back Opus's whole reply.

## Phase 2: take what Opus replied

When the user pastes Opus's reply:
1. Split it into the two blocks. The first is the report, the second is the JSON changes. If the reply is not exactly two fenced blocks, say so and ask for a re-send. Do not guess.
2. Save them as `<module>/verify/REPORT.md` and `<module>/verify/changes.json`. Check that `changes.json` parses as JSON.
3. Check each change against the real data before applying it. Search for the `card_id` and confirm the `before` text occurs in that card's field. If the `card_id` is missing or the `before` text is not found, skip that change and list it as unapplied. Do not trust array indexes.
4. Apply the verified `fix` and `add` changes to `study-match/data/data.json`. Back up the original first to `study-match/data/data.before-verify.json` if it does not exist yet. Skip `flag` and `unverified` entries, and any with `needs_user: true`.
5. Run `python3 build.py --check --strict` from `study-match/`, and report the result.
6. Report: what was applied, what was skipped and why (with IDs), the build result, and the flags for the owner.
7. Do not deploy, commit or push. Wait for the owner to say so.

## Rules

- Never run the Opus verification yourself.
- Never deploy unless the owner says so.
- Keep the change IDs from Opus; do not renumber them.
- Do not apply a change you cannot find in the data.
