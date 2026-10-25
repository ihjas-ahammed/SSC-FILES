# Verification

- Strict builder: 5 sections, 15 topics, 195 authored cards and 12 derivations;
  zero errors, warnings or automatic fixes.
- All 13 timetable items mapped to their sources in source/SOURCES.md.
- Quantum topic times: 144 minutes; solids topic times: 168 minutes.
- Canonical JSON and its source mirror are byte-identical. Embedded content in
  all four standalone/hosted build outputs matches the canonical JSON.
- Both skills directories match and include the direct-authorship rule.
- Each derivation has exactly four decision checkpoints (48 total).
- All 431 checked TeX expressions parse with MathJax without errors.
- All authored SVG diagrams parse as XML; concept bodies fit the length limit.
- Browser checks: 231 expanded cards and 12 derivation players; automatic quiz
  reveal, correct-answer feedback, saved-answer restoration, disabled completed
  answers, timer pause in Match centre, calculator and derivation checkpoint pass.
- Hosted app loads the correct 15 topics. No browser JavaScript errors recorded.
- Desktop and mobile screenshots inspected. At 390px, the document has no
  horizontal overflow; the card shelf scrolls within its own container.

## Requested learning and match updates

- 19 plain-language cards introduce the meaning, picture and example before
  the formal explanation; 123 authored glossary entries define prerequisite terms.
- Click, nested definitions, keyboard activation and mobile tap verified. Hover
  and focus alone never open a popup. A card's defined terms stay unlinked.
- State has a simple introduction and linked definition. Eight worked matrix
  examples connect columns and rows to bras, kets, outer products, operators,
  adjoints, commutators, uncertainty and operator functions. Their arithmetic and
  rendered equations were checked; desktop and mobile screenshots inspected.
- Default notch layout verified before kick-off.
- Pause freezes the match and current quiz countdown, blocks answers and survives
  reload; resume excludes paused time from the match clock.
- Custom halves at 20, 40, 45, 60 and 90 real minutes checked. Only halves of at
  least 45 minutes get hydration breaks, at displayed 25 and 70. Hydration and
  half-time durations remain independent real-minute settings.
- First hydration, half-time, second hydration and explicit resume checked.
- Skip break resumes immediately during hydration and half-time, closes the alert,
  records the skipped break once and persists the resumed stretch across reload.
- Existing numeric card IDs remain intact; new introductions use separate IDs
  and matrix examples use stable uid fields.
- The briefing in doc/ is implemented on 22 definition info cards. Seven words
  are rejected; eight words reveal the same card's correct statement. Confirmation
  unlocks, Retry clears the draft/reference, and “I know this” skips writing.
- The source design in doc/tda.html is also implemented: the concept stays on
  the front, tapping flips to an editable back, and off-centre cards flip front.
  Touch typing before and during a match, input focus and inactive-face inert
  states were verified. Migrated reading progress permits typing; Practise again
  enables another attempt without removing an earlier unlock.
- Locked cards remain visible, dimmed and full-size. Keyboard and native scroll
  stop at the first locked card. Moving left from an unfinished definition is
  blocked until confirmation or skip, then works again.
- Progression is independent per sheet and locked only during matches. Drafts,
  references, skips and confirmations survive reload; prior progress migrates.
  Self-assessment does not score quiz shots. Other courses require explicit opt-in.
- All educational cards and glossary entries were compared with the previous
  build and remain unchanged. Definition recall reuses their authored explanations.

See features-check.json for current results and features-check.cjs for the
repeatable browser checks. matrix-check.json records current equation and layout
checks. browser-check.json records the initial deck checks.
definition-check.cjs and definition-check.json cover the briefing's recall flow,
per-sheet unlocking, match-only locks, persistence and mobile layout.
desktop-navigation-check.cjs verifies the animated desktop flip, editing with
cursor arrows, and wheel boundaries before/after unlocking and after idle.
The calculator is bundled;
the inherited MathJax and fonts use external URLs on first load.
