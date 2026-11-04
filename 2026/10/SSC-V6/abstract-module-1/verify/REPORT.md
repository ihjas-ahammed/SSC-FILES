# Abstract Algebra I verification report — run 2026-10-25

Received from Opus in chat (model label as given: Gemini 3.1 Pro). Saved by /use-opus, phase 2.

## 0. Summary
- Model: Gemini 3.1 Pro (label in the reply)
- Data reviewed: study-match/data/data.json (as supplied in the zip)
- Changes proposed: 45 total · 41 fixes · 0 additions · 4 flags (needs_user) · 0 unverified
- Build check: not run by Opus (no shell). Applied by /use-opus phase 2 with build.py afterwards (see apply log).

## 1. Build check
Not run by Opus. Checked by reading: JSON well-formed (yes), duplicate IDs (none), LaTeX delimiters (balanced in Modules I, III and IV units 18–22; raw Unicode or plain ASCII math in Module II cards and sheet abs-m4-group-homomorphisms).

## 2. Syllabus coverage (units 1–22)
Units 1–22 are covered by the sheets listed in changes.json (sheet IDs listed per change). Module V (generating sets, factor groups, field of quotients) is missing (owner decision), flagged V-045. Units 3–4 and 17 have source-conflict flags V-042 and V-043.

## 3. Proposed changes (fixes and additions)
- V-001 [maths · error] Hypothesis in Lemma 16.3 (N normal; L containing N) — abs-m4-isomorphism-theorems — source: module-4/unit-17-18.pdf p.145
- V-002 [accuracy · warning] Lemma 16.4 second statement (HN normal when H normal) — abs-m4-isomorphism-theorems — source: module-4/unit-17-18.pdf p.146
- V-003 [quiz · error] True/False MCQ has 2 options; rule is 3–4 — abs-m2-subgroups-cyclic-subgroups — source: module-2/unit-7-8.pdf p.55
- V-004 [accuracy · warning] "closed under multiplication" generalised to G's operation — abs-m2-subgroups-cyclic-subgroups — source: module-2/unit-7-8.pdf p.55
- V-005 to V-007 [accuracy · warning] Definition 6.8 hypotheses; Division Algorithm statement; Theorem 6.15 second part; LaTeX — abs-m2-cyclic-groups — source: module-2/unit-9-10.pdf
- V-008 to V-012 [structure · warning] LaTeX delimiters and sentence splits — abs-m2-subgroups-cyclic-subgroups — source: module-2/unit-7-8.pdf
- V-013 to V-015 [structure · warning] LaTeX delimiters — abs-m2-cyclic-groups — source: module-2/unit-9-10.pdf
- V-016 to V-021 [structure/accuracy/quiz] LaTeX, transposition formula, quiz wording — abs-m2-groups-of-permutations — source: module-2/unit-11-12.pdf
- V-022 to V-032 [structure/quiz] LaTeX delimiters, sentence splits, quiz wording — abs-m4-group-homomorphisms — source: module-2/unit-11-12.pdf p.77–78
- V-033 [derivation · suggestion] Explicit 2x2 product in Example 23.9 — abs-m4-finite-domains-characteristic — source: module-4/unit-21-22.pdf p.197
- V-034 to V-041 [clarity · suggestion] Sentence splits and a title fix — abs-m1-units-1-2, abs-m1-units-3-4, abs-m1-units-5-6, abs-m4-rings-and-homomorphisms, abs-m4-zero-divisors-integral-domains, abs-m4-finite-domains-characteristic

## 4. Flagged for the owner (needs_user)
- V-042 [source-conflict] Units 3–4: syllabus cites 7th ed. §3; the PDF is 8th ed. §1. Owner decides.
- V-043 [source-conflict] Unit 17: syllabus cites 7th ed. §13; the PDF is 8th ed. §16. Owner decides.
- V-044 [structure] Plus Two text (OPEN items) and named exercises in Module 2. Owner decides.
- V-045 [syllabus-gap] Module V not in data; no PDF cut. Owner decides scope.

## 5. Unverified claims
None reported by Opus.

## 6. Understanding check (student test)
- Sentences over 20 words proposed for splitting: 14
- Hard words missing from the glossary: normal subgroup, factor group
- Cards not following "what it is → picture → example → definition": Module IV sheets have intuition cards before info; some proofs sit inside info cards.

## 7. Checks done by reading, and not done
Done (by Opus, reading): all 10 PDFs read; JSON syntax; meta settings; ID uniqueness; placeholder search; definitions, theorems and quiz answers.
Not done: automated build (no shell).

## 8. Apply log (/use-opus phase 2)
- Backup: study-match/data/data.before-verify.json
- Applied: 37 fixes (V-001, V-002, V-004 to V-027, V-029, V-031, V-032, V-034 to V-041). Each `before` matched exactly once in its sheet.
- Reverted: V-033. Its multi-line matrix `tex` breaks the builder's one-line rule for derivation steps. Original text kept.
- Skipped (not applied): V-003, V-028, V-030. These change option lists, and the quoted text is not in the data in that form. Option edits need an owner decision: V-003 is a real defect (True/False quiz with 2 options).
- Flags not applied (need owner): V-042, V-043, V-044, V-045.
- Build after: `python3 build.py --check --strict` → 0 errors, 0 warnings.
- Not deployed.
