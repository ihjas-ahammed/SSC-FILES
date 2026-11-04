# Exam paper → Exam page + Match Mode

Copy everything below the line into a new chat and attach your paper.
It works with an HTML self-evaluator, a PDF question paper (with or without an answer key), slides, scanned pages or plain text.
Fill in the blanks in **Inputs** first.

---

## Inputs

- **Material:** the attached file(s) are the exam paper I want to sit. They can be HTML, PDF, images of the paper or text, and may include a marking scheme or model answers.
- **Subject / level:** `[e.g. Optics, BSc Physics semester 5]`
- **Paper rules:** `[e.g. 70 marks, 2 hours. Section A: 10 questions × 3, answer any 8. Section B: 8 × 6, answer any 6. Section C: 2 × 10, answer any 1]`

## What to build

One self-contained HTML file I can open on my phone or desktop, where I **write the answers on paper** and use the page as the paper, the clock and the examiner.
Keep every question, valuation-scheme checkpoint, solution, key term and diagram from my material **word for word**. If the material is a plain PDF, turn it into this structure first, using **only** what it contains. Don't invent questions, marks, answers or formulas. If there is no marking scheme, build the checkpoints only from the model answers I attached, and say what is missing.

### 1. The paper

- A **paper overview** card: title, total marks, suggested time, my marks so far, and one row per section showing its rules ("answer any 8 of 10"), a progress bar and the suggested minutes (about 1.2 minutes per mark).
- One section per part of the paper, with a card per question: number, the full question text, marks, and a status. Statuses are *not started*, *written, to mark*, and *marked* (coloured green ≥75%, amber 40–74%, red <40%).
- **Rules enforced for me:** only my best N marked answers count in a section ("answer any N"). Extra answers show "Extra, not counted". When a section allows one answer, the other question locks once I start one, with a "Clear Qx and attempt Qy" button.
- A **Result** section: score ring, a bar per section, "written, waiting to be marked", and "where marks slipped" (lowest-scoring answers, tap to reopen).

### 2. One question at a time

1. **Write on paper first.** Show the question, the suggested minutes, and two buttons: *Written, mark it later* and *Written, check it now*. Pressing either records the **time I finished writing**; Match Mode counts that moment, not the marking.
2. **Mark myself** against the valuation scheme: one card per checkpoint with the original diagram, a prompt and 2–3 options (full / partial / none, each showing its marks). The options keep their original order. Once every checkpoint is answered, compute the score (capped at the question's marks).
3. **Show the full solution** and the **key terms**, with Re-mark and Back to paper buttons. Previous/next question arrows stay in the bar.

Marking can be done after the exam, so the page must not push me to mark during exam time.


### 2b. Everyday pictures and understanding checks (added)

For **every key term** of every question (3 per question):
- an **everyday example** in one or two plain sentences, and a **drawn diagram of that example** (one SVG per question, built from theme colour tokens so it works in light and pitch-black dark; Unicode text only, no TeX in SVG). Numbered badges 1-3 on the drawing match numbered, colour-coded cards below it, and each card has an "Everyday" line and an "In the picture" line saying which part of the drawing is the concept.
- one **tricky understanding check** that tests a common misconception and cannot be passed by guessing. Mix formats: multiple choice with 4 plausible options (shuffled, same order after reload), **fill in the blank**, **one word**, and **number** answers. Typed answers are judged fairly: normalise case, spaces, unicode minus, subscripts, θ and ∞; numbers accept a tolerance; list every accepted spelling.
- one judged attempt per check, then show the right answer and a short "why". An "I don't know" button counts as wrong.
- the checks open once the answer is marked **Written**. Save the results with the question.

### 5e. Slips and section credit (added to Match Mode, timer goals unchanged)

- A **slip** is a wrong understanding check, an "I don't know", or a scheme checkpoint marked "none" (each checkpoint counts once per answer). A right answer resets the streak. **Three slips in a row give Time FC a goal**, scored by the Time FC player whose skills match those questions. Slips count only while the match is on. Show the streak as three dots in the question view and the Match tab, and list slip goals under the fixtures.
- **Focus FC block goals no longer pick a scorer automatically.** When the last block of a section (A, B, C) is settled, a sheet lists the skills that section needs (only skills Focus FC players own, most used in the answers first). I tick one or more skills that helped most. The player who owns the **most ticked skills** takes that section's goals. If players are level, choose **randomly** between them; this draw is the only random step, and it never affects checks. "Skip, pick for me" falls back to the old automatic choice. The sheet survives a reload, waits for a break to end, and the full-time sheet comes after it. Do not show goal toasts that would cover the sheet.

### 3. Design

- **Reading first:** Atkinson Hyperlegible Next (Google Fonts), about 16.5px on mobile and 17.5px on desktop, line height around 1.65.
- **Two themes:** a clean light theme and a **pitch-black** dark theme (#000). Toggle in the top bar, follow the device on first visit, remember my choice, apply it before first paint. Define colours once as CSS variables. Hex colours inside the SVG diagrams must be remapped to theme variables so labels never vanish in dark mode.
- **Responsive:** on desktop (≥1080px) a sticky left rail lists the sections with progress rings, and the content column is about 900px wide. On mobile the section list opens from a button as a bottom sheet. No horizontal page scroll at 390px.
- **Thin scrollbars.** Wide maths scrolls inside its own block.
- **Focus mode:** one section at a time with Prev / Next and that section's progress in a bottom bar.
- **Maths:** MathJax 3 (SVG output) for every formula. Never put `$…$` or `\(…\)` inside SVG `<text>` or inside text that JavaScript writes with `textContent`. Use Unicode there (θ, λ, x₁, 10⁻¹⁰). Typeset after inserting any HTML that contains maths.

### 4. Memory and reset

- Save **everything** in `localStorage` under one key: written time and marking answers per question, the open question, reading position, theme, focus mode and all Match Mode state.
- Reloading must bring me back exactly where I was, including the question I had open.
- A **Reset** button in the top bar opens a confirm dialog, then clears everything except the theme.

### 5. Match Mode (experimental, hidden by default)

Switch it on by **double-tapping an empty part of the top bar**; double-tap again to hide it with state kept. A scoreboard strip appears under the progress bar; tapping it opens a full-screen **Match Centre** with the tabs *Skill check* and *Match*. Never use my name anywhere: my team is **Focus FC**, the other is **Time FC**.

**a) Skills the paper tests (about 30).** Group them into:
- *Maths tools* (differentiation, identities, approximations, algebra moves, units)
- *Core ideas* (the laws, formulas and definitions the questions use)
- *Exam craft* (neat labelled diagrams, stating a formula with every term, writing derivations step by step, keeping short answers short)

Map every skill to the question numbers that need it.

**b) Skill check instead of rating by hand.**
- Ask **10 OMR questions**. Each covers 2–4 skills, and you must be certain the right answer is right. Shuffle the options, render maths with MathJax in questions, options and explanations.
- Always show an **"I don't know"** button under the options. It counts as wrong and reveals the answer with its explanation.
- Auto-rate each skill **High** (every question on it right), **Low** (every one wrong or "I don't know"), **Medium** (mixed). Untested skills start at Medium, marked "Not tested, set it yourself". Then show the split grouped High / Medium / Low with L/M/H toggles, a *Confirm & pick squads* button and a Retake option.

**c) Squads.**
- Medium + High skills form Focus FC, Low + Medium form Time FC.
- Group each side into **11 players**, each named after its main skill, lined up **4-3-3** on a pitch. The strongest go up front, so Time FC's forwards are my weakest skills.
- Tapping a player shows their skills and goals.

**d) One match = the whole exam.**
- The match length is the exam time (e.g. 90 minutes). Split the paper into about five **blocks** with a finish-by minute each, such as "Section A: first four answers by 15'", "all eight by 30'", "Section B: three by 52'", "six by 75'", "Section C by 88'". Targets are running totals per section, so I can pick any questions.
- A block is *done* when enough answers in that section have a **written time after kick-off**. Answers written before kick-off never count.
- Play / Pause. The clock runs from timestamps so it survives sleep, closed tabs and reloads.
- Two short **hydration breaks** (for example 3 minutes at 30' and 60') stop the clock automatically with a countdown and resume by themselves; I can skip them. Put the breaks in one editable constant, and an empty list means strict exam conditions.
- **Goals are automatic, I never add them.**
  - Block done in time → **Focus FC scores**. The scorer is my player whose skills the answers I just wrote use most.
  - Minute passes first → **Time FC scores**, through the Low/Medium skills of the answers I did not reach. The next block becomes live.
- Toast per goal with a "Go" button to the next section, whistle at kick-off and breaks, a cheer for my goals, a low tone for conceded ones, with vibration on phones.
- Fixtures list: each block with its minute, result, scorer and skills. At full time show the score, my marks so far, and a "See my result" button.

### 6. Code quality

- One HTML file with clean, commented code. CSS order: tokens → base → layout → components → exam screens → Match Mode → utilities. JS in named modules: Helpers, Store, Theme, Paper data, Exam, Sections/Focus, Sheet/Toolbar, Boot, Match Mode.
- No inline styles in the content (use classes) and no inline `onclick` (use `data-ui` / `data-mm-act` attributes with one delegated handler).
- Question data, skills, quiz and block deadlines are plain arrays at the top of their module, so I can edit them.
- External scripts only from cdnjs / jsdelivr with pinned versions (e.g. `mathjax@3.2.2`).

### 7. Before you hand it over

Open the page in a headless browser at 390px and 1366px, in both themes, and check:
- no MathJax errors, and no raw `\(`, `$` or `\command` visible
- no SVG label overflowing or overlapping another label (measure the text boxes against each viewBox)
- no horizontal scroll
- write → mark → reload → still there; best-N counting; the section-C lock and its switch button; reset keeps the theme
- Match Mode: skill check, squads, kick-off, a goal from "Written", a conceded goal at a deadline, a break stopping and restarting the clock, full time

Then send me the HTML file with a short list of what's inside, and tell me anything in my material you had to assume (for example the time allowed).
