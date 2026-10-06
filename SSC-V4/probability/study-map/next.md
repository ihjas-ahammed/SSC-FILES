# Probability stellar map · Ross Ch. 1 (Module 1) · plan and status

Goal: a stellar map (star atlas, same engine as the Quantum Atlas) for the hard
Theoretical Exercises of Ross, *A First Course in Probability* 10e, Chapter 1.
Skipped as too simple or obvious: T2, T3, T4, T5, T6, T7, T13, T17.
Kept as exercises: T8, T9, T10, T11, T12, T14, T15, T16, T18, T19, T20, T21, T22, T23.
T1 and the skipped simple ones appear only as supporting concepts.

## Done (shared engine, `flow-library/study-map`)
- [x] Configurable question sections (no more hard-coded A/B/C text)
- [x] Courses without a redistributable PDF (quoted exercise text only)
- [x] Progress state: `retry`, `pretest`, `mastered`, phase `retry`
- [x] Actions: `showTerm`, `moveToTerm`, `recordPretest`, `startRetry`, `masterQuestion`
- [x] `TermAlert` (definition alert with "Move to concept"), `NewTerms` (per-step glossary)
- [x] `FaqList`, `PreExposure`, `ProofBlock`, keyword matching (`lib/keywords.js`)

## Next
1. Rewrite `ConceptNote`: warm-up gate, FAQ, exercise statement, proof, "Try again myself".
2. `Attempt`: FAQ first, math-rendered statement. Unlock/Answer/Hints: links open the alert; NewTerms under each step.
3. `TryMyself` phase: own-words text, LaTeX editor with live preview, keyword box (autocomplete after 3 letters, all unlocked = understood).
4. Experimental "Draw math" canvas: stroke grouping, template recognizer, LaTeX assembly (fractions, powers, subscripts, binomials).
5. CSS for all new parts (dark and light), mount `TermAlert` in `AtlasDialog`.
6. New project `SSC-V4/probability/study-map`: course.js, supporting concepts, 14 exercise concepts with full proofs, FAQs, guided steps, keywords.
7. Verify: numeric check of every identity, structure audit, build, browser test with system Chrome, screenshots.
8. Update this file with results and anything left open.

## Results (browser walkthrough, system Chrome, offline build)
- [x] Items 1-8 done. `npm test`: 2086 checks pass; handwriting and course-seam tests pass.
- [x] Walked: warm-up gate (wrong guess explained), FAQ-first question, 5-step unlock with
  term alerts ("Move to concept"), rendered formal proof, "Try again myself" (keywords appear
  only after 3 letters, wrong word rejected, "show the rest", LaTeX live preview, no KaTeX
  errors), experimental Draw math canvas.
- Fixed: "Try the solution with hints" crashed when a question has no `hints`
  (SolutionHints.jsx now guards it and renders the question text with math).
- Open: Draw math recognises simple strokes only (a plus came out as "+l"); not tested on a phone.
