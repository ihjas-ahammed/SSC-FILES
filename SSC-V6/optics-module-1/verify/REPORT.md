# Optics verification report — run 2026-10-25

Received from Opus in chat (label as given: Gemini 3.1 Pro). Saved by /use-opus, phase 2.
This file is a condensed record. The machine-readable list is in changes.json.

## 0. Summary
- Changes proposed: 45 total · 42 fixes · 0 additions · 3 flags (needs_user) · 0 unverified
- Build check by Opus: not run (no shell). Build check after apply: see section 8.

## 1. Build check (Opus, by reading)
JSON well-formed: yes. Duplicate IDs: none. LaTeX problems found in PYQ cards (misplaced `\)`, `\cdot` glued to letters, a missing backslash in `\sqrt`, and a literal newline inside `\frac{4\pi}{\lambda_0}`).

## 2. Syllabus coverage (items 1–22)
Items 1–22 are covered by the theory sheets. Items 5–16 are marked unverified (no unit PDF in the package). Items 17–22 use Ghatak ch. 22; the Book 2 conflict is flagged (V-043).

## 3. Proposed changes
- V-001 meta title; V-002 to V-013 source fields for items 5–16 marked unverified.
- V-014 to V-019 derivation step fixes (sign and convention errors in mirror, lens, refraction, optical rotation derivations).
- V-020 to V-041 sentence splits and wording for ESL readability.
- V-042 shorten one OMR question.

## 4. Flagged for the owner
- V-043 Book 2 vs Ghatak ch. 22 for items 17–22.
- V-044 PYQ sheets covering topics outside the 22-item syllabus (holography, fibres, matrix optics, Airy/resolving power).
- V-045 PYQ LaTeX artefacts (`\cdotA0`, `\cdott`, `\cdoty1`, `\sqrt{Delta}`, etc.) need a batch cleanup decision.

## 5. Unverified claims
Items 5–16 and 17–22 claims, and all PYQ wordings (no past papers in the package).

## 6. Understanding check
Hard words missing from glossary (wavefront, secondary wavelets, phasor, monochromatic, collimator, dielectric, obliquity, locus, conjugate, fringes of equal inclination, specific rotation, numerical aperture, acceptance angle, critical angle, holography). Two cards lack an intuition card before the info card.

## 7. Not done (by Opus)
Build run; items 5–16 and 17–22 source checks; PYQ wording checks.

## 8. Apply log (/use-opus phase 2)
- Backup: study-match/data/data.before-verify.json
- Applied: 37 fixes (V-001 to V-013, V-015, V-020 to V-042). Each `before` matched exactly once in its sheet.
- Deferred, not applied: V-014, V-016, V-017, V-018, V-019. These change structured derivation `steps` arrays, so they need a hand edit. The sign errors they describe are real.
- Flags not applied (need owner): V-043, V-044, V-045.
- Build after: `python3 build.py --check --strict` → 0 errors. One warning remains on sections[4].sheets[2].cards[8].steps[7] (a multi-"=" line). It was already in the data before this run. `--strict` fails on warnings, so the strict run stops.
- Not deployed.
