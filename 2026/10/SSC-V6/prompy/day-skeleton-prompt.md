# Study skeleton → filled Study page + Match Mode

Copy everything below the line into a new chat. Attach **day2-skeleton.html** and my study material (HTML, PDF, slides, notes, images or text).
Fill in **Inputs** first.

---

## Inputs

- **Subject / topic:** `[e.g. Optics, Unit 5 to Unit 8]`
- **Material:** the attached files.
- **Session:** the skeleton has two matches of 90 minutes, so keep that unless I say otherwise.

## What to do

Take **day2-skeleton.html** and fill its slots. Every slot is either a `[bracketed placeholder]` or a block marked `[FILL]`. Do not change any other code: no renamed ids, classes, storage keys or engine logic. The engine is finished and tested, so your job is content only.

Keep all of my material **word for word**: text, questions, diagrams, derivations. If the material is a PDF or notes, turn it into this structure using **only** what it contains. Do not add facts, formulas or numbers that aren't in it.

Keep the skeleton's ten sections, ids **m1s1 … m1s5** (Match 1) and **m2s1 … m2s5** (Match 2). Each id is used by the code, so don't rename or add sections. If the material doesn't split into ten, merge or split content inside the sections, not the ids.

### Slots to fill

1. **Overview** (`[FILL] overview`): the session in two sentences, and the course coverage numbers in `COURSE` (units already done, units this session adds, total units).
2. **Sections m1s1 … m2s5** (`[FILL] section N`): for each section, its title, a one-line subtitle, and its study content in a `card`. Formulas in `$…$`, diagrams as inline SVG.
3. **OMR checks**: three per section, with ids `{section}-omr-1`, `-2`, `-3` (for example `m1s2-omr-1`). Each has four options, one correct (`data-correct="true"`), a `data-fb-correct` reason and a `data-fb-wrong` hint. The option order is shuffled by the code.
4. **Derivations (optional):** the skeleton has none. Only add one if the material has a derivation. Use the existing derivation card format and the `derivationsData` format from the Derivations module, and add its step ids (`{card id}-{n}`) to that section's tasks in MATCHES.
5. **MATCHES** (`[FILL] MATCHES`): the names, the short labels and the finish-by minutes of the ten sections. Each section's `tasks` must list the ids of its OMR checks (and any derivation steps). Keep the minutes in ascending order within each match.
6. **D2CONCEPTS** (`[FILL] D2CONCEPTS`): one object per section id, with `title`, `caption`, one SVG `scene` for an everyday example, and three items:
   - `sk`: the prerequisite skills the check uses (ids from SKILLS).
   - `eg`: the everyday example, one or two plain sentences.
   - `map`: which badge 1–3 is the concept, and why.
   - `c`: the check. Use `mcq` (4 options, right one first), `num` (`a`, `tol`, `u`), or `fill` / `word` (`a` is a list of accepted spellings; `show` is how the answer reads). Mix the types across each section.
   - Checks must test a misconception and not be guessable. Each has a short `why`.
7. **GROUPS and SKILLS** (`[FILL] GROUPS and SKILLS`): the prerequisites I need before this topic (about 30–40), in three groups. Each has a readable name, a player label, its group and the sections that rely on it. Every section should rely on at least one skill.
8. **QUIZ** (`[FILL] QUIZ`): 10 prerequisite questions (not new-topic questions). `o[0]` is the right answer. `skills` lists skill ids.
9. **Labels**: the subject name and session title wherever a `[bracket]` label appears.

### What the code already does (do not reimplement)

- **Study page:** section navigation, focus mode, tasks done / total in the top bar, one-step derivations, OMR feedback, saved state and reset.
- **Understanding checks:** each check gets one judged attempt, then the right answer and why. Typed answers are judged leniently (case, spaces, unicode minus, subscripts, θ). "I don't know" counts as wrong. Checks don't gate the section's tasks.
- **Match Mode** (double-tap the top bar):
  - The skill check rates the prerequisites High / Medium / Low, then squads are picked 4-3-3.
  - Three understanding slips in a row give Time FC a goal, scored by the Time FC player whose skills those checks needed.
  - A section's goal is credited to Focus FC when its tasks are done in time, or to Time FC when the minute passes first.
  - At the end of each section a credit sheet lists the skills that helped. The owner of the most ticked skills takes the goal. A tie is a random draw, and that is the only random step.
  - Hydration breaks and half-time stop the clock. Full time waits for any open credit.

### Rules for the content

- **Everyday pictures:** each drawing should show the real idea, not decoration. Badges 1–3 match the three cards below it.
- **Maths:** `$…$` in HTML and text, never inside SVG `<text>` or text written with `textContent`. Use Unicode there (δ, λ, π, a₁, 10⁻¹⁰).
- **Study wording:** keep my material's wording. Don't turn it into generic summaries.

## Before you hand it over

Open the filled page in a headless browser at 390px and 1366px, in light and dark:
- no MathJax errors, and no raw `$` or `\command` visible
- no SVG label overflowing or overlapping another label
- no horizontal scroll
- answering, reloading and resetting all work
- Match Mode: skill check, squads, kick-off, a slip goal, a section credit, a break stopping and restarting the clock, full time

Then send me the HTML file, a short list of what's inside, and anything you had to assume.
