# Exam data schema

Use valid JSON. Double every TeX backslash in strings. Inline mathematics uses
\\( ... \\); display tex fields use bare TeX. No dollar delimiters.

meta: title, subject, home, opponent, version; inlineChecks false,
autoRevealQuestions true, definitionChecks true, recallScope "low-mark",
exam {"maximum":70,"minutes":120}.
match: periodEnds [25,45,70,90], breaks [5,10,5]. Optional timing:
{"mode":"custom","halfMinutes":60,"halfTimeMinutes":10,"hydrationMinutes":5}.
The runtime scales the match clock; never scale real-second quiz timers in data.

Each section has short, title, markCap, sheets. A/B/C caps are 24/36/10.
C additionally has bestOf 1. Keep 10/8/2 questions and stable paper-specific IDs.
Each sheet has id, title, icon, marks and cards; marks is 3, 6 or 10.

- question: title, label, q, marks; optional hint. Only 3-mark questions have a
  directly authored recallAnswer. Eligibility uses explicit scope/marks, not titles.
  Do not combine recallAnswer with textAnswer. Long answers remain paper tasks.
- eval: q, options [{t,m}, ...], why; 2–5 options, including zero. Maxima across
  the sheet sum to its question marks. Half marks are permitted.
  Put formulas in explicit inline TeX delimiters inside option text too. The
  renderer runs option text through the same MathJax label support as labels.
  Fractions, powers and subscripts must not be left as literal A_s-style prose.
  Long option equations scroll within the option; marks remain visible.
  The runtime protects TeX comparisons before HTML parsing, including dynamic
  reference answers and derivation feedback. Do not replace mathematical less-than
  signs with HTML tags or double-encoded entities.
- score: title; the app computes its marks from eval states.
- info: title, body <=220 characters, optional art or tex. These answers do not flip.
- math: title, tex, body; solve the actual supplied numerical data with units.
- derivation: title, legend, phases, steps. See 02-derivations.md. Four checkpoints.
- key: title, points array. Summarizes the model answer.
- mcq: q with exactly one ____, four word-only options, zero-based answer, why,
  time 45, practice "remember-word". Exactly three after every key.

Glossary entries have id, term, definition and optional aliases/example.
Define directly; open only on click/tap or keyboard activation, never hover.
Do not link inside TeX, diagrams, answer buttons or inputs.
The builder validates ceilings, C selection, rubric sums and low-mark eligibility.
