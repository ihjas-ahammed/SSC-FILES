# Output format — Optics verification run

You have **no file system and no shell**. You cannot write files, run the build,
or touch git. Your whole output is your reply in chat.

Reply with **exactly two fenced code blocks**, in this order, and no other text:

1. A block labelled `markdown` containing the REPORT (section 1 below).
2. A block labelled `json` containing the CHANGES array (section 2 below).

Nothing before, between or after the two blocks. Then stop.

## 1. REPORT (the markdown block)

Use these headings, in this order. Keep each section short.

```
# Optics verification report — run <YYYY-MM-DD>

## 0. Summary
- Model: <your model name>
- Data reviewed: study-match/data/data.json (as supplied in the zip)
- Changes proposed: <n> total · <n> fixes · <n> additions · <n> flags (needs_user) · <n> unverified
- Build check: not run (no shell access). Checks done by reading are listed in section 7.

## 1. Build check
Not run. Say what you checked by reading: JSON well-formed (yes/no), duplicate IDs (yes/no), LaTeX delimiters (yes/no).

## 2. Syllabus coverage (items 1–22)
| Item | Topic | Sheet IDs that cover it | Status | Action |
|---|---|---|---|---|
| 1 | Laws of reflection and refraction | <ids> | covered / partial / missing | <none / proposed <change ids> / flagged> |
| … | … | … | … | … |

Note any practical (Module V) content found in the data.

## 3. Proposed changes (fixes and additions)
One line per change, using the IDs from the JSON block.
- V-001 [accuracy · error] <one line> — card <card_id>, field <field> — source: <file p.n>

## 4. Flagged for the owner (needs_user)
- V-0xx [source-conflict] <what the data says> vs <what the source says>. Decision needed: <question>.

## 5. Unverified claims
- <card_id> — <claim> — reason unverified.

## 6. Understanding check (student test)
- Sentences over 20 words proposed for splitting: <n>
- Hard words missing from the glossary: <list>
- Cards that do not follow "what it is → picture → example → definition": <list>

## 7. Checks done by reading, and not done
Done: <list>. Not done: <list, with reason>. Empty "not done" list means nothing is left.
```

Severity words (use exactly these): `blocker`, `error`, `warning`, `suggestion`.
Category words (use exactly these): `accuracy`, `maths`, `syllabus-gap`, `clarity`,
`quiz`, `derivation`, `pyq`, `structure`, `source-conflict`.

## 2. CHANGES (the json block)

A JSON array. Valid JSON, no comments. One object per proposed edit or flag.

```json
[
  {
    "id": "V-001",
    "severity": "error",
    "category": "maths",
    "action": "fix",
    "needs_user": false,
    "item": 3,
    "card_id": "thin-lens-foci-focal-length-c4",
    "field": "tex",
    "before": "f = R / (n - 1)",
    "after": "f = R / (2(n - 1))",
    "reason": "Biconvex lens with equal radii: the factor 2 is needed.",
    "source": "unit-3-thin-lens-principal-foci-focal-length.pdf p.84",
    "verified": true
  }
]
```

Field rules:
- `id`: `V-001`, `V-002`, … in the order you found them. Never reuse an ID.
- `action`: `fix` (replace a field), `add` (new card, sheet or section), `flag`
  (no edit; `needs_user` true), `unverified` (no edit; claim noted in section 5).
- `card_id`: the ID of the card or sheet, exactly as it appears in the data.
  Required. Do not rely on array indexes alone; they may be wrong.
- `field`: the key name in that card or sheet (for example `tex`, `q`, `options`,
  `body`, `note`, `source`), or `null` when `action` is `add`.
- `before`: the **exact text** of the field as it appears in the data file, copied
  character for character (keep the backslashes, spaces and brackets). Short
  substring is fine if it is unique in that card. For `add`, use `null`.
  If you cannot copy it exactly, set `verified` to `false` and `needs_user` to `true`.
- `after`: the full replacement text for the same field. For `add`, the full new
  JSON object as a string.
- `verified`: `true` only if the source PDF in the zip shows it. Otherwise `false`.
- `source`: file name and printed page. `"none"` only with `flag` or `unverified`.

## 3. Ground rules

- Every change in the JSON block appears in REPORT section 3 (fixes and additions)
  or section 4 (flags). Counts in section 0 must match the JSON block.
- Do not propose a change to a card you have not read in the data.
- Keep the report plain text. No emoji. Do not paste the whole data file.
