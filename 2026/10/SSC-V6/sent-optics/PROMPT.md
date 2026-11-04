# Task: Optics PYQ cards

Make ONE JSON file, `optics-pyq.json`. It holds every question in originals/ with its
unit, its marking scheme (the eval cards), a worked solution, and derivations where a
question asks for one.

Use only the files in this folder. Do not use other books, notes or websites.
Write all content yourself. Do not use scripts to write questions, marking or solutions.

## 1. Sources

- originals/*.pdf: the papers. Each question is used once. Each paper's year and
  month come from the table in section 2a. Put them in the output. If a question appears in two
  papers, keep the earliest paper and note the other in `source`.
- textbook/*.pdf: use these to check the method and the notation of the answer.
- syllabus/syllabus.pdf: check the scope only.
- reference/units-optics.json: assign each question a unit (1–22) from the unit text.
  If a question covers two units, put both in `units`.


## 2a. Year and month of each paper (required in the output)

Every section and every sheet must carry `year` (number) and `month` (text, e.g. "Nov").
Use this table. Each file is one paper:

| File in originals/ | year | month |
|---|---|---|
| 2018_11_physical-optics-and-modern-optics.pdf | 2018 | Nov |
| 2021_11_optics-2019-admission.pdf | 2021 | Nov |
| 2021_11_physical-optics-and-modern-optics.pdf | 2021 | Nov |
| 2022_11_optics-2019-admission.pdf | 2022 | Nov |
| 2022_11_physical-optics-and-modern-optics-2017-2018-admission.pdf | 2022 | Nov |
| 2023_11_optics-2019-admission.pdf | 2023 | Nov |
| PHY5B08_PHYSICAL_OPTICS_AND_MODERN_OPTICS_NOV_2019.pdf | 2019 | Nov |
| PHY5B08_PHYSICAL_OPTICS_AND_MODERN_OPTICS_NOV_2020.pdf | 2020 | Nov |
| PHY5B08_PHYSICAL_OPTICS_AND_MODERN_OPTICS_NOV_2022.pdf | 2022 | Nov |

If two files have the same year and month (for example the two 2021 Nov files), they are
two different admission versions of the paper. Keep both sections and give each one a
`paper` field with the file name.

## 2. Output

Top level:

    {
      "meta": {"title": "Optics · PYQ", "subject": "OPT", "inlineChecks": false,
               "autoRevealQuestions": true, "definitionChecks": false},
      "match": {"periodEnds": [25, 45, 70, 90], "breaks": [5, 10, 5]},
      "sections": [ ...one section per paper, newest first... ]
    }

Section: {"short": "N23", "title": "Nov 2023 · Optics", "year": 2023, "month": "Nov", "paper": "2023_11_optics-2019-admission.pdf", "sheets": [...]}
`short` is 2–12 characters. `year`, `month` and `paper` come from the table in section 2a.

Sheet (one per question):

    {"id": "opt-pyq-n23-q1", "title": "Q1 · Optical path (2 marks)", "icon": "wave",
     "year": 2023, "month": "Nov", "unit": 1, "units": [1], "marks": 2, "source": "PYQ Nov 2023 Q1",
     "cards": [ ... ]}

`id`: lowercase, hyphens, unique in the whole file. `marks`: the paper's marks.
`source`: paper and question number, plus any ambiguity.

Cards, in this order:

1. question: {"type": "question", "label": "PYQ · 2 marks", "title": "Question 1", "marks": 2, "q": "<exact paper wording>"}

2. eval (one per marking part): 2 to 5 options, including a zero option.
   The eval maxima of one sheet add up to `marks`. Half marks are allowed.
   {"type": "eval", "q": "<what is checked>", "options": [{"t": "<full credit>", "m": 2}, {"t": "<partial>", "m": 1}, {"t": "Missing or wrong", "m": 0}], "why": "<one short sentence>"}

3. score: {"type": "score", "title": "Q1 · Your marks"}

4. info (the answer, in the style of a model answer):
   {"type": "info", "label": "Answer", "title": "<answer in a few words>", "body": "Know first: <topic names from the unit text>. <answer in 2–3 short sentences, formulas in \\( … \\)>", "tex": "<final result, bare TeX, optional>"}

5. math (the working, step by step):
   {"type": "math", "label": "Solution", "title": "<what is worked out>", "tex": "<bare TeX of the working, lines joined with \\\\>", "body": "<one or two plain sentences: what the steps do, and the mark split, e.g. figure 1 · steps 2 · result 1>"}
   For numerical questions, use the numbers in the paper, with units.

6. derivation: only when the question asks to derive, prove or obtain a result.
   {"type": "derivation", "label": "Derivation", "title": "...", "legend": "<what the picture shows>", "setup": "<SVG, viewBox 0 0 260 180, labelled>", "phases": ["...", "...", "..."], "steps": [ ... 3 to 6 steps ... ], "ask": [ ...4 checkpoints, each asks only about the next step... ]}
   Use the paper's own symbols. Each `note` is one short sentence.

7. mcq: exactly THREE per sheet, after the other cards.
   {"type": "mcq", "q": "<one line with exactly one ____>", "options": ["a", "b", "c", "d"], "answer": 0, "time": 45, "practice": "remember-word", "why": "<one short sentence>"}
   Options are words only, about 6 words at most. The three blanks are different.

## 3. Marking

- The eval maxima of each sheet add up to the paper's marks.
- Full credit is the full-mark option; partial credit is included.
- The marking is an authored practice guide, not an official scheme. Do not call it official.

## 4. JSON and TeX rules (must follow)

- Valid JSON: double quotes, no trailing commas, no comments.
- Every TeX backslash is doubled inside JSON strings (`\\frac`, `\\( x \\)`).
- Inline maths: `\\( … \\)`. Display maths: `\\[ … \\]`. Never `$…$`.
- `tex` fields are bare TeX, with no delimiters.
- Plain English, short sentences.

## 5. Length

The file may be long. Return ONE complete file. If it cannot fit in one reply, return one
file per paper, named `optics-pyq-<short>.json`. Each must be complete and valid by itself.

## 6. Check before you return

- Every question in every paper in originals/ is present once, with the paper's marks.
- Every section and every sheet has `year` and `month` from the table in section 2a.
- Each sheet has `unit`, the question card, eval cards that add to `marks`, score, info, math, and three mcq cards.
- Every derivation card has an SVG setup, 3–6 phases, and four ask checkpoints.
- The file parses as JSON.
