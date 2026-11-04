# Day 9 — Saturday 24 October 2026

Build the existing Study Match app for the timetable in topics-image.png.
The folder is called Day 9; the timetable labels this date as study day 2 of 10.

Write every educational item directly in the JSON yourself. Do not use scripts,
generators, loops, template expansion or transformations to author, populate or
rewrite content. Read the sources and preserve all requested topics and their
important details. Scripts may extract source text, validate, verify mathematics
and build the app, but must not write educational data. Copying the finished,
manually authored JSON verbatim to its mirror is permitted.

## Quantum Mechanics I — 144 minutes (2.4 hours)

Use Calicut University's FYUGP BSc Physics Honours 2024, Semester V syllabus,
Module III, Units 12–17. Primary text: Zettili, Quantum Mechanics: Concepts and
Applications, 2nd edition, §§2.2, 2.3, 2.4.1–2.4.2 and 2.4.4–2.4.6.

1. Hilbert space, dimension, basis and square-integrable wave functions — 30 min.
2. Dirac notation: kets, bras, bra-kets and their properties — 20 min.
3. Operators, Hermitian adjoint and Hermitian operators — 25 min.
4. Commutator algebra — 24 min.
5. General uncertainty relation and Heisenberg position–momentum cases — 25 min.
6. Functions of operators — 20 min.

Do not extend into eigenvalue theorems, basis changes or the harmonic oscillator.
An operator power-series example is not a separate eigenvalue lesson.

## Properties of Solids — 168 minutes (2.8 hours)

Use the FYUGP Semester V syllabus, Module II, Units 6–11 and Module III, Unit 12.
Primary text: Puri & Babbar, Solid State Physics and Electronics, 3rd edition,
§§5.1–5.3, 6.1–6.5, and 7.1–7.3 only.

1. Drude–Lorentz classical theory — 16 min.
2. Sommerfeld quantum theory: free electron gas in 1D — 20 min.
3. Fermi energy, total energy, DOS and filling — 24 min.
4. Applications of the free electron gas — 16 min.
5. Band theory and Bloch's theorem — 18 min.
6. Kronig–Penney model — 24 min.
7. Velocity and effective mass — 18 min.
8. Distinction between metals, insulators and semiconductors — 14 min.
9. Intrinsic and extrinsic semiconductors — 18 min.

The timetable's combined band-theory bullet becomes three focused sheets.
Keep 1D and 3D state counting distinct, include both spins exactly once, and state
when continuum or large-N approximations are used. Explain Bloch phases and
periodic amplitudes, finite barriers and their narrow-barrier limit, positive and
negative curvature mass, and donor versus acceptor levels.

Do not extend the semiconductor portion into later units on drift mobility,
carrier-concentration derivations, Fermi-level calculations or pn junctions.

## App and outputs

- This is a syllabus deck, not a model paper. Do not add exam marking rubrics or
  the three Remember word-check cards used for model-paper practice.
- Keep auto-reveal quizzes, real-second question timers, animated derivations,
  calculator, custom halves, breaks and local progress. Start in the focused
  notch layout before kick-off. Provide Pause/Resume in the notch and Match centre.
- Pause freezes the match clock, quiz timers and derivation playback; a reload
  keeps the match paused. Existing card IDs must retain their saved progress.
- Real halves of at least 45 minutes include Hydration breaks at displayed match
  minutes 25 and 70. Shorter halves omit them. Hydration duration is separately
  adjustable from 1–30 real minutes, independent of the half-time break.
- Every hydration and half-time break must offer Skip break, which immediately
  resumes the next stretch without waiting for the countdown.
- Introduce each new concept with a direct “What is it?” explanation. Add the
  requested In plain words cards before technical introductions: meaning,
  mental picture, example and a bridge to the precise definition.
- Define unfamiliar prerequisite terms in the manually authored glossary.
  Definitions open on click/tap or keyboard activation only. Hover or focus alone
  must not open them. A card's own defined terms, including aliases, stay unlinked;
  use defines metadata for multiple defined terms. Prerequisites can still link.
- Give state a simple definition: the preparation description used to predict
  probabilities of outcomes. Explain this before defining a ket in terms of a state.
- Explain the quantum mathematical tools with small columns and 2×2 matrices,
  reusing ψ = (1, i)/√2, A = diag(1, −1), and B that swaps coordinates. Connect
  these concrete examples to the abstract notation and wave functions. Keep the
  general uncertainty example distinct from canonical position–momentum operators.
- The deck has 195 cards, including 19 intuition cards and 8 matrix worked
  examples, and 123 glossary terms. Extra examples have stable uid fields.
- Set inlineChecks false and autoRevealQuestions true.
- Read doc/tda.html as the flip-card and visible-lock interaction reference,
  alongside doc/TDA-briefing-2026-10-23.md and skills/08-definition-recall.md. Use
  meta.definitionChecks true. On definition info cards, write at least eight
  words, then Check to reveal that same card's body as “Correct statement”.
  Show “I’m correct” and Retry only afterward; confirmation unlocks, while Retry
  clears both draft and reference. “I know this” skips writing. Place it beside
  Check, and keep .must-include hidden in the markup. No keyword grading,
  synonym lookup or network service. Keep maths and graphics unchanged.
- Keep the concept and explanation on the front. Tap the card or Recall to flip
  to an editable definition back; Read flips back. Typing, links and buttons do
  not flip the card. Flipping and typing also work outside matches. Off-centre
  cards automatically return to the front. Keep inactive faces inert.
- Locked cards stay full-size, visible and dimmed with a lock label. Do not hide
  them or shrink the row. Swipes, native scroll, wheel and keys may reach the first
  lock but cannot pass it. Block moving left from an unfinished definition until
  it is unlocked; flipping back to reread remains available.
- Only matches lock progression. Each sheet starts with its first card available
  and unlocks independently in sequence. Outside a match, browsing is unrestricted.
  Pause and breaks disable recall actions. Save drafts, reveal and completion
  across reloads; preserve old progress. Track skips separately from confirmed
  reviews without adding quiz shots/goals. Retain all existing questions; use
  definition recall to avoid duplicate definition questions in future content.
  Old reading progress must not disable an empty answer box. Completed answers
  offer Practise again without losing their earlier unlock.
- Give this course its own title and sheet IDs so Day 8 progress stays separate.
- The 312-minute learning plan is separate from the configurable match clock.
  Card labels give real study allocations; do not rescale quiz timers.
- Planned cumulative course coverage (68% QM, 55% Solids) belongs to the supplied
  timetable; the app starts at 0% and measures actual progress in today's deck.
- Canonical content: study-match/data/data.json.
- Exact mirror: source/physics-data-fixed.json.
- Build study-physics-day-9.html, root app/, and both study-match/dist/ outputs.
  Keep both skills directories identical.
- day-8-baseline/ preserves the copied previous sources; they are not sources
  for today's educational cards.
