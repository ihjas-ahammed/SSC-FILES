# GPT master brief — Quantum Mechanics learning system

This is the top-level editorial and integration brief for `quantum-mechanics/`.
Read [`HOOK.md`](HOOK.md) for the project map, [`HOOK_agy.md`](HOOK_agy.md) for
source and data standards, and [`HOOK_claude.md`](HOOK_claude.md) for product and
interface conventions. Where instructions overlap, this file sets the learning
standard; the other hooks retain their named areas of responsibility.

## Learning standard

- Teach a new idea from its familiar starting point. Assume high-school physics
  and algebra unless a lesson explicitly builds the missing skill first.
- For each new formal object, say what problem it solves, define its symbols,
  connect it to a familiar model, show one small worked example, then give a
  short retrieval question with feedback. Never introduce a wall of notation
  before its meaning.
- Separate physical interpretation from mathematical statements. Explain what
  a formula predicts, its units and assumptions, and one common misuse.
- Build prerequisite links in `needs` in the order a learner should follow.
  Keep bridge lessons visible as the first sections of their modules; do not
  bury prerequisites in a footnote or mark them as prior university knowledge.
- Use diagrams to explain relationships, not to decorate. Label axes and units,
  keep equations readable at phone width, and generate both light and dark PNGs.
- Preserve syllabus scope and source attribution. Any derivation or claim about
  the prescribed texts or examination syllabus must be checked against those
  sources; introductory explanations may use original analogies and examples.
- Keep practice questions answerable from the lesson itself. Prefer one-step
  numerical examples first, then conceptual transfer. State enough assumptions
  to make each question unambiguous.

## Current Module III/IV entry bridges

- Module III section `3.0` starts from complex numbers, vectors and coordinates,
  matrices as transformations, slope/integral/probability, and statistical
  averages/spread. It leads into Hilbert space, operators, commutators,
  uncertainty, representations, and wave/matrix mechanics.
- Module IV section `4.0` starts from energy landscapes and turning points,
  local Taylor expansion, classical simple harmonic motion, units and scales,
  and independent coordinates/degeneracy. It leads into the quantum oscillator
  and separable three-dimensional systems.
- Pair each bridge concept with its `c.*` figure in both theme directories.
  Regenerate the diagram index after producing figures; do not hand-edit the
  generated index.

## Ownership and integration

AGY owns factual provenance, syllabus mapping, and source-derived question
accuracy. Claude owns UI and shared-engine changes. GPT owns the learning
progression, editorial consistency across the three hooks, integration of
approved project changes, and the final coherence pass. Keep all three hooks
consistent when the workflow changes; this master file resolves overlaps.

## Validation

Before delivery, check that every referenced concept and image exists, module
sections are ordered correctly, mathematical notation is valid, and the app
build resolves both light and dark diagrams. Do not publish/deploy unless the
user explicitly asks for publication.

## Review follow-up — 2026-09-28

- Clarified discrete probabilities versus continuous probability densities in 3.0.1.
- Restricted the harmonic approximation in 4.0.2 to positive-curvature minima;
  stable flat minima may have a higher-order leading term.
- Repaired the missing scattering prerequisite in 8.4.3 and the escaped units in 8.1.1.
- Added compact desktop diagrams and a keyboard-accessible zoom viewer in the QM project layer.
