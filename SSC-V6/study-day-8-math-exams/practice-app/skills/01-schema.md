# Maths exam schema

Use valid JSON and double all TeX backslashes. Inline formulas use \\( ... \\);
display tex fields contain bare TeX. Every math-bearing option must use the
same inline delimiters as prose; raw A_s-style strings are not formatted formulas.
The option renderer supports MathJax, with internal overflow scrolling.
The runtime protects TeX comparisons before HTML parsing, including dynamic
references and derivation feedback. Keep mathematical comparisons as TeX and
do not pre-encode them into double-escaped HTML entities.

meta: title, subject, home/opponent, version, inlineChecks false,
autoRevealQuestions true, definitionChecks true, recallScope "low-mark",
exam {maximum:70,minutes:120,paper:5 or 4}. The paper number must match the source.
match: periodEnds [25,45,70,90], breaks [5,10,5].

Sections: short, title, markCap, sheets. A/B/C caps are 24/36/10; C has bestOf 1.
Retain 10/8/2 question sheets. A sheet has id, title, icon, marks, source, cards.
source gives the primary textbook section, shown on the question card.

- question: title, q, marks, label; optional hint. Only 3-mark originals have a
  directly authored recallAnswer. Preserve the entire original question.
- eval: q, options [{t,m}], why. Include zero and meaningful partial credit.
  Maxima across a question's rubric sum to 3/6/10. Use explicit TeX in t too.
- score: title. The runtime computes it from saved eval states.
- info: title, body <=220 characters, optional label/defines/art. One proof idea.
- math: title, tex, body. Cases, aligned equations and tables are permitted
  here, unlike the one-equation limit of animated steps.
- derivation: title, legend, phases, steps. Equality calculations only; four
  meaningful ask checkpoints, each with four choices and a zero-based answer.
- key: title and nonempty points. Preserve key hypotheses and common mistakes.
- glossary: top-level array of id, term, definition, optional aliases/example.

Use stable, paper-specific IDs. Do not add a front textAnswer box on a flip
question. Do not force inequality arguments into false equalities just to
animate them: use full info/math proof steps instead.
The maths papers do not require the physics-only Remember-word OMR quota.
