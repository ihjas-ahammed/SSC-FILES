# START HERE — Day 9 Maths authoring prompt

Write every educational explanation, worked example, derivation step, diagram,
quiz and glossary entry directly in the course JSON yourself. Do not use a script,
generator, loop, template expansion or transformation to write or populate study
data. Read the sources and preserve the full requested detail. Scripts may extract
source text, verify mathematics, validate and build; completed JSON mirrors may
be copied verbatim.

## Course and sources

This is the independent Day 9 Maths course for 24 October 2026: Complex Analysis I
and Convex Optimization, 174 minutes each. Follow source/prompt.md for all 14
timetable topics and source/SOURCES.md for the assigned book sections.
The 199-card deck has 4 sections, 14 topics, 16 intuition cards, 122 glossary terms,
6 guided derivations with 24 checkpoints, and 42 application quizzes.
Preserve it during feature updates. Do not mix in the archived physics content.

Use Zill–Shanahan §§3.1–3.2 and §3.3 only through Theorem 3.3.2; Binmore
§§19.27–19.46; Boyd–Vandenberghe §§2.1–2.4. Do not add harmonic functions,
later complex-function chapters, supporting/separating hyperplanes, dual cones,
convex functions, optimization duality or Lagrange multiplier methods.

## Explain before using

Answer “What is it?” directly: give a category and plain meaning, then a picture,
example and formal statement. Properties alone do not define an object.
Use small coordinate vectors and explicit matrices to make Hessians, eigenvalues
and quadratic forms concrete. State hypotheses and domains beside theorems.
Preserve distinctions: pointwise differentiability versus neighbourhood
analyticity; necessary versus sufficient; semidefinite versus definite;
minimum versus minimal; affine versus convex versus conic combinations.

Write prerequisite terms into the glossary. Use click/tap/keyboard activation
only; never open a definition merely on hover or focus. A card's defined terms
and aliases remain unlinked. Use defines metadata for its glossary IDs.
See 07-plain-words-and-glossary.md and 01-schema.md.

## Flip cards and visible locks

Read both doc/TDA-briefing-2026-10-23.md and doc/tda.html. The HTML supplies the
existing interaction design; the briefing supplies the trusted eight-word check.
Follow 08-definition-recall.md. Keep concepts on the front and editable recall
on the back. Tap to flip; inputs, links and buttons do not accidentally flip.
Locked cards stay visible and dimmed. Only matches lock progression, independently
within each sheet. Stop at the first locked card and block moving left from the
centred unfinished definition until unlock. Outside matches, typing works freely.
Preserve old progress without making blank answers read-only.

Check reveals the same card's correct statement after at least eight words.
I’m correct confirms, Retry clears draft and reference, I know this skips writing,
and Practise again retains an earlier unlock. Use no keyword grading or online
synonym lookup. Neither skips nor confirmations are automatically correct quizzes.
Maths and figure cards keep their normal presentation.

## Data and verification

Set meta.inlineChecks false, meta.autoRevealQuestions true and
meta.definitionChecks true. Give this maths course its own title and sheet IDs
so physics and older maths progress remain separate. Keep stable IDs thereafter.
For new cards follow 01-schema.md, 02-derivations.md, 03-svg-art.md and
04-questions.md. Each derivation has four authored decision checkpoints.
Use three application quizzes per topic rather than duplicating definition recall.
No model-paper rubrics or Remember-card additions belong to this syllabus deck.

Retain the default focused notch, Pause/Resume, independent hydration/half-time
settings, hydration at displayed 25/70 for halves of at least 45 real minutes,
and Skip break. Read 06-match-and-tools.md.

Run 05-checklist.md. Keep canonical study-match/data/data.json identical to
source/math-data-fixed.json, both skills folders synchronized, and all four
standalone/hosted build outputs current. If asked only for JSON, output only JSON;
when working in the workspace, finish the builds and relevant verification too.
