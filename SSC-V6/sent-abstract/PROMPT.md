# Task: Abstract Algebra I PYQ cards (MAT5CJ302)

Make ONE JSON file, `abstract-pyq.json`. It holds every question in originals/ (algebra questions only), with its unit, its marking scheme (eval cards), a worked solution, three practice MCQs, and a derivation wherever the question asks for one. The output is read by a study app, so the JSON must be exact.

Use only the files in this folder. Do not use other books, notes or websites. Write all content yourself. Do not use scripts to write questions, marking or solutions.

## 1. Sources

- originals/*.html: the Abstract Algebra papers (MathJax, `\( … \)`). The question text is in the HTML body. Ignore headers, footers, programme codes and the instructions block, except the marks.
- textbook/*.html: Fraleigh, 8th ed., excerpts (printed pages). Use them to check the method and the notation of each answer. The syllabus names the 7th ed., so match the content, not the section number.
- syllabus/syllabus.pdf: check scope only.
- reference/units-abstract.json: the 22 units (u = 1–22, module I–IV) and unit 0 for Module V. Assign each question a unit from its text.

Each question is used once. If a question appears in two papers, keep the earliest and note the other in `source`.

Theory of equations papers: the files with `theory-of-equations-and-abstract-algebra` in the name carry algebra questions and theory-of-equations questions. Keep ONLY the algebra questions. Skip the rest and list each skipped question in `meta.skipped` (an array of strings such as "2022-NOV-theory…: Q3 (theory of equations)").

Module V (generating sets, factor groups, field of quotients) questions: keep them, with `unit` 0 and `units` [0].

## 2a. Year and month of each paper (required)

Every section and every sheet must carry `year` (number) and `month` (text, "Nov"). Use this table:

| File in originals/ | year | month | section short |
|---|---|---|---|
| 2018-NOV.html | 2018 | Nov | N18 |
| 2020-NOV-MCQ.html | 2020 | Nov | N20-M |
| 2021-NOV.html | 2021 | Nov | N21 |
| 2021-NOV-MCQ.html | 2021 | Nov | N21-M |
| 2021-NOV-theory-of-equations-and-abstract-algebra.html | 2021 | Nov | N21-T |
| 2021-NOV-MCQ-theory-of-equations-and-abstract-algebra.html | 2021 | Nov | N21-TM |
| 2022-NOV.html | 2022 | Nov | N22 |
| 2022-NOV-theory-of-equations-and-abstract-algebra.html | 2022 | Nov | N22-T |
| 2023-NOV.html | 2023 | Nov | N23 |
| 2023-NOV-theory-of-equations-and-abstract-algebra.html | 2023 | Nov | N23-T |
| 2024-NOV.html | 2024 | Nov | N24 |
| 2025-NOV.html | 2025 | Nov | N25 |

Each file is one section. `paper` is the file name. `short` is 2–12 characters.

## 2. Output shape

    {
      "meta": {"title": "Abstract Algebra I · PYQ", "subject": "MAT", "inlineChecks": false,
               "autoRevealQuestions": true, "definitionChecks": false,
               "skipped": ["…"]},
      "match": {"periodEnds": [25, 45, 70, 90], "breaks": [5, 10, 5]},
      "sections": [ …one section per paper, newest first… ]
    }

Section: {"short": "N22", "title": "Nov 2022 · Abstract Algebra", "year": 2022, "month": "Nov", "paper": "2022-NOV.html", "sheets": [ … ]}

Sheet (one per question):

    {"id": "abs-pyq-n22-q1", "title": "Q1 · Inverse of a product (5 marks)", "icon": "atom",
     "year": 2022, "month": "Nov", "unit": 6, "units": [6], "marks": 5, "source": "PYQ Nov 2022 Q1",
     "cards": [ … ]}

`id`: lowercase, hyphens, unique in the whole file (use the section's short name in lowercase). `icon`: one of atom, curve, motion, graph, wave, lens, flask, cell, sigma, book, bolt (use `sigma` for algebra). `marks`: the paper's marks. For MCQ papers each question is 1 mark. `source`: paper and question number, plus any ambiguity.

Cards, in this order:

1. question: {"type": "question", "label": "PYQ · 5 marks", "title": "Question 1", "marks": 5, "q": "<exact paper wording>"}
   For MCQ questions, put the options in the text: "<question> (a) … (b) … (c) … (d) …".

2. eval (one per marking part): 2 to 5 options, including a zero option.
   The eval maxima of one sheet add up to `marks`. Half marks are allowed.
   {"type": "eval", "q": "<what is checked>", "options": [{"t": "<full credit>", "m": 3}, {"t": "<partial>", "m": 1}, {"t": "Missing or wrong", "m": 0}], "why": "<one short sentence>"}
   For a 1-mark MCQ: two options, {"t": "Correct option named", "m": 1}, {"t": "Wrong or missing", "m": 0}.

3. score: {"type": "score", "title": "Q1 · Your marks"}

4. info (the answer, in the style of a model answer):
   {"type": "info", "label": "Answer", "title": "<answer in a few words>", "body": "Know first: <topic names from the unit text>. <answer in 2–3 short sentences, maths in \\( … \\)>", "tex": "<final result, bare TeX, optional>"}

5. math (the working, one line per step, joined with \\\\):
   {"type": "math", "label": "Solution", "title": "<what is worked out>", "tex": "<bare TeX of the working>", "body": "<one or two plain sentences: what the steps do, and the mark split, e.g. proof 3 · example 2>"}

6. derivation: ONLY when the question asks to derive, obtain or show a formula or identity by a chain of equal expressions (for example: the inverse of a product, the order of a permutation from its cycles, the index formula from Lagrange's theorem). A proof question is not a derivation unless it asks for the chain. For a proof, use the info and math cards instead. Full format below (section 5).

7. mcq: exactly THREE per sheet, after the other cards. These are practice questions on the sheet's topic, not copies of the paper.
   {"type": "mcq", "q": "<one line with exactly one ____>", "options": ["a", "b", "c", "d"], "answer": 0, "time": 45, "practice": "remember-word", "why": "<one short sentence>"}
   Options are words or short maths only, about 6 words at most. The answer index is 0-based. The three blanks are different.

## 3. Marking

- The eval maxima of each sheet add up to the paper's marks.
- Full credit is the full-mark option; partial credit is included.
- The marking is an authored practice guide, not an official scheme. Do not call it official.

## 4. JSON and TeX rules (must follow)

- Valid JSON: double quotes, no trailing commas, no comments.
- Every TeX backslash is doubled inside JSON strings (`\\frac`, `\\( x \\)`).
- Inline maths in text: `\\( … \\)`. Display maths: `\\[ … \\]`. Never `$…$`.
- Every maths expression in a text field is wrapped in `\\( … \\)`, including single symbols such as `\\lambda`, `G`, `H`, `a^{-1}`, `S_n`, `\\mathbb{Z}_n`. Never leave a bare TeX command or a bare Greek name in running text. Write "a binary operation", not "a * b" without delimiters.
- `tex` fields are bare TeX, with no delimiters.
- Use standard algebra notation: \\( G \\) for a group, \\( e \\) for the identity, \\( a^{-1} \\) for inverses, \\( \\langle a \\rangle \\) for cyclic subgroups, \\( \\mathbb{Z}_n \\), \\( S_n \\), \\( A_n \\), \\( \\circ \\) for composition.
- Plain English, short sentences.

## 5. Derivation card (full format)

A derivation is a chain of one-line equations. Each step is one algebraic move, and the app animates the chain. Use this shape:

    {"type": "derivation", "label": "Derivation", "title": "<short title>", "legend": "<one sentence: what the letters stand for>",
     "phases": [{"name": "<phase>", "why": "<one short line>"}, … 3 to 6 phases …],
     "steps": [
       {"phase": "<phase name>", "tex": "<first line, no move>", "note": "<why, one short sentence>"},
       {"move": {"type": "<move>", …}, "tex": "<the result of the move>", "note": "…",
        "phase": "<phase name, only on the step where the phase starts>",
        "ask": {"q": "<one short question about the next step>", "options": ["…", "…", "…", "…"], "answer": 0, "why": "…"}},
       …]}

Rules, all checked by the builder:

- `tex` is ONE line with exactly one top-level `=`. No `\\begin{…}`, no `&`, no `\\\\`, no `\\( \\)`, no `$`.
- The first step has no `move`. Every later step has one.
- One move per step. Write the result of the move in `tex`, already simplified. Do not write the intermediate "both sides" line; the app draws it.
- Keep the same symbols from line to line. Do not rename variables mid-way.
- 4 to 12 steps (at least 2, and at most 16). Every step has a `note` (≤ 120 characters) that says why the move is allowed.
- Moves (exact names): add, subtract, multiply, divide, power, root, reciprocal, negate, differentiate, integrate, ln, exp, apply, substitute, expand, factor, simplify, cancel, combine, rearrange, swap, evaluate, define, identity.
  - `add`, `subtract`, `multiply`, `divide`, `power` need `"by"`: for example {"type": "multiply", "by": "a^{-1}"}.
  - The both-sides moves (add, subtract, multiply, divide, power, root, reciprocal, negate, differentiate, integrate, ln, exp, apply) need the previous line to have exactly one `=`.
  - Rewrite moves (substitute, expand, factor, simplify, cancel, combine, rearrange, swap, evaluate, define, identity) do not need `by`, except `substitute`, `define`, `identity`, `evaluate`, which take `"by"` as the text of what is substituted or named.
  - `differentiate` and `integrate` need `"wrt"`.
- Phases: 3 to 6. Each phase name is written as `"phase"` on the step where it starts, and every phase name must be used at least once.
- Asks: exactly FOUR per derivation, on four different steps, never on the first step. Each ask is about the next step (what the move is, or why it is allowed). The question is one short line (≤ 15 words). Each option is at most 6 words. `answer` is the 0-based index of the right option.
- Do NOT add `setup`, `art` or `focus`. Algebra derivations have no figure.

Worked example (copy the shape; it passes the builder with 0 errors and 0 warnings):

    {"type": "derivation", "label": "Derivation", "title": "Inverse of a product, step by step",
     "legend": "a, b are elements of a group G with identity e; x is the inverse of ab.",
     "phases": [
       {"name": "Setup", "why": "name the inverse"},
       {"name": "Cancel a", "why": "multiply by a inverse on the left"},
       {"name": "Cancel b", "why": "multiply by b inverse on the left"},
       {"name": "Conclude", "why": "identity element"}],
     "steps": [
       {"phase": "Setup", "tex": "(ab)x = e", "note": "Let \\( x \\) be the inverse of \\( ab \\)."},
       {"phase": "Cancel a", "move": {"type": "multiply", "by": "a^{-1}"}, "tex": "a^{-1}(ab)x = a^{-1}", "note": "Multiply on the left by \\( a^{-1} \\).",
        "ask": {"q": "Which element should multiply the equation on the left first?", "options": ["\\( a^{-1} \\)", "\\( b \\)", "\\( x \\)", "\\( e \\) only"], "answer": 0, "why": "It removes the \\( a \\) in front of \\( b \\)."}},
       {"move": {"type": "simplify"}, "tex": "bx = a^{-1}", "note": "\\( a^{-1}(ab) = b \\) by associativity and the inverse axiom.",
        "ask": {"q": "What does \\( a^{-1}(ab) \\) simplify to?", "options": ["\\( b \\)", "\\( a \\)", "\\( e \\)", "\\( ab \\)"], "answer": 0, "why": "Associativity gives \\( (a^{-1}a)b = eb = b \\)."}},
       {"phase": "Cancel b", "move": {"type": "multiply", "by": "b^{-1}"}, "tex": "b^{-1}bx = b^{-1}a^{-1}", "note": "Multiply on the left by \\( b^{-1} \\).",
        "ask": {"q": "Why multiply by \\( b^{-1} \\) now?", "options": ["To cancel \\( b \\) in front of \\( x \\)", "To cancel \\( a \\)", "To make \\( x = e \\)", "No reason"], "answer": 0, "why": "\\( b^{-1}b = e \\) removes the \\( b \\) in front of \\( x \\)."}},
       {"phase": "Conclude", "move": {"type": "simplify"}, "tex": "x = b^{-1}a^{-1}", "note": "\\( b^{-1}b = e \\) and \\( ex = x \\).",
        "ask": {"q": "What is \\( ex \\) equal to?", "options": ["\\( x \\)", "\\( e \\)", "\\( a \\)", "\\( 0 \\)"], "answer": 0, "why": "The identity element leaves every element unchanged."}}
     ]}

## 6. Length

The file may be long. Return ONE complete file. If it cannot fit in one reply, return one file per paper, named `abstract-pyq-<short>.json` (for example `abstract-pyq-n22.json`), each complete and valid by itself, with the same `meta`.

## 7. Check before you return

- Every algebra question in every paper in originals/ is present once, with the paper's marks. Non-algebra questions are in `meta.skipped`.
- Every section and every sheet has `year` and `month` from the table in section 2a.
- Every sheet has `unit` and `units` from reference/units-abstract.json, the question card, eval cards that add to `marks`, score, info, math, and exactly three mcq cards.
- Every derivation card follows section 5: first step has no move; every later step has one; 3–6 phases each used; exactly four asks on four steps other than the first; no `setup`.
- Every maths expression in text is wrapped in `\\( … \\)`.
- The file parses as JSON, and each id is unique.
