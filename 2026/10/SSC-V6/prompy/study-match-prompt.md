# Study Session → Study Page + Match Mode

Copy everything below the line into a new chat and attach your study material.
It works with an HTML study page, a PDF, slides, scanned notes, a textbook chapter or plain text.
Fill in the three blanks in **Inputs** first.

---

## Inputs

- **Material:** the attached file(s) are my study content for today. They can be HTML, PDF, slides, images of notes or text.
- **Subject / level:** `[e.g. Optics, BSc Physics semester 3, first time learning this]`
- **Session length:** `[e.g. 3 hours, two 90-minute matches]`

## What to build

One self-contained HTML file I can open on my phone or desktop. If my material is already an HTML study page, keep **all** of its content (text, questions, diagrams, derivations, simulators) word for word and only rebuild the presentation and code around it. If it is a PDF or notes, turn it into this kind of page first, using **only** what the material contains. Don't add facts, formulas or numbers that aren't in my material.

### 1. The study page

- Split the content into clear **sections** in study order. Each section gets a title, a one-line subtitle and its content in cards.
- After each section, add an **OMR check**: multiple-choice questions with 4 options, tap a bubble to answer, instant feedback with the reason. Shuffle option order every time. Questions should test understanding, not recall of wording.
- Turn every derivation into a **guided derivation**. Show one step at a time with a hint. I predict the next step from 4 shuffled options, and a correct answer unlocks the step and moves on. When all steps are done, show a summary sheet.
- Add small **interactive simulators** (sliders + live SVG) wherever a relationship can be explored, e.g. how a formula's output changes when an input changes.
- Finish with a **one-page formula sheet**.
- Every OMR question and every derivation step counts as one **task**. Show tasks done / total and a progress bar in a sticky top bar.

### 2. Design

- **Reading first:** use the Atkinson Hyperlegible Next font (Google Fonts) at about 16.5px on mobile and 17.5px on desktop, with line height around 1.65.
- **Two themes:** a clean light theme and a **pitch-black** dark theme (#000 background). Add a toggle in the top bar, follow the device setting on first visit, and remember my choice. Define every colour once as a CSS variable. Hex colours inside SVG diagrams must also switch with the theme.
- **Responsive:** on desktop (≥1080px), show a sticky left rail listing every section with a progress ring and use a wide content column (about 900px). On mobile, put the section list in a bottom sheet. There must be no horizontal page scroll on a 390px phone.
- **Thin scrollbars** everywhere. Wide maths scrolls inside its own block, not the page.
- **Focus mode** (top-bar button): show only one section at a time, with Prev / Next and that section's progress in a bottom bar.
- **Maths:** use MathJax 3 for all formulas. Never put `$…$` inside SVG `<text>` or inside text that JavaScript writes at runtime (MathJax can't render those). Use Unicode there instead (δ, λ, π, a₁, 10⁻¹⁰). After inserting any new HTML that contains maths, typeset it.

### 3. Memory and reset

- Save **everything** in `localStorage` under one key: answered questions, unlocked derivation steps, slider positions, mode buttons, focus mode and current section, reading position, theme, and all Match Mode state.
- Reloading the page must bring me back exactly where I was.
- Add a **Reset** button in the top bar. It opens a confirm dialog and then clears everything except the theme.

### 4. Match Mode (experimental, hidden by default)

Only switch it on when I **double-tap an empty part of the top bar**. Double-tap again to hide it, with state kept. When it's on, a scoreboard strip appears under the progress bar. Tapping the strip opens a full-screen **Match Centre** with two tabs, *Skill check* and *Match*. Never use my name anywhere: my team is **Focus FC** and the other team is **Time FC**.

**a) Prerequisite skills.** List the **prerequisites I need in order to learn this topic for the first time**, not the topic's own concepts. Group them into:
- *Maths tools* (identities, algebra moves, approximations, units, arithmetic)
- *Background knowledge* (school-level ideas the topic builds on)
- *Study skills* (diagram drawing, graph sketching, following derivations, unit checking)

Aim for about 30–40 skills. Map each skill to the sections that rely on it.

**b) Skill check instead of rating everything by hand.**
- Ask **10 OMR questions that test the prerequisites**, not the new topic.
- Each question covers 2–4 skills. Shuffle the options, and render maths with MathJax in questions, options and explanations.
- Always show an **"I don't know"** button under the options. It counts as wrong and reveals the answer with its explanation.
- Auto-rate each skill:
  - **High** if every question testing it was right
  - **Low** if every one was wrong or "I don't know"
  - **Medium** if the results were mixed
- Untested skills start at Medium and are marked "Not tested, set it yourself".
- Then show the split grouped as High / Medium / Low, with L/M/H toggles so I can adjust it, a **Confirm & pick squads** button, and a Retake option.

**c) Squads.**
- Medium + High skills form Focus FC. Low + Medium skills form Time FC.
- Group each side into **11 players**. Each player is named after its main skill.
- Line both teams up **4-3-3** on a football pitch. The strongest players go up front, so Time FC's forwards are my weakest prerequisites.
- Tap a player to see their skills and the goals they've scored.

**d) Matches.**
- Split the session into **matches of 90 minutes**. For a 3-hour session that is 2 matches. Each match covers about 5 sections, and each section has a **finish-by minute** spread sensibly across the 90.
- Have a Play / Pause button. Run the clock from timestamps so it survives sleep, closed tabs and reloads.
- **FIFA breaks:** a hydration break at 25' and 70' (5 minutes each) and half-time at 45' (30 minutes). The match clock stops automatically, a break countdown shows, and play resumes by itself when the countdown ends. I can skip a break.
- **Goals are automatic, I never add them:**
  - If every task in the current section is done before its minute, **Focus FC scores**. The scorer is my player with the most skills that section needs.
  - If the minute passes first, **Time FC scores** through my Low/Medium skills that the section needs. The next section then becomes live.
- Show a toast with a "Go" button that jumps to the next section. Play a whistle at kick-off and at breaks, a cheer for my goals and a low tone for conceded goals, with vibration on phones.
- Show fixtures as a list: each section with its minute and result (goal / conceded, scorer, skills used). At full time, show the score and a "Set up Match 2" button.
- Only one match can run at a time.

### 5. Code quality

- Write one HTML file with clean, commented code. Order the CSS as: tokens → base → layout → components → modes → utilities. Group the JS into named modules (Store, Theme, Progress, Questions, Derivations, Simulators, Sections/Focus, Toolbar, Match Mode, Boot).
- Use no inline styles in the content; use named classes instead. Use no inline `onclick`; use `data-action` attributes with one delegated handler.
- Keep question, derivation, skill and quiz data as plain arrays and objects at the top of their module, so I can edit them.
- Load external scripts only from cdnjs / jsdelivr with pinned versions (e.g. `mathjax@3.2.2`).

### 6. Before you hand it over

Open the page in a headless browser at 390px and 1366px, in both themes, and check:
- no MathJax errors, and no raw `$` or `\command` visible on the page
- no SVG label overflows its diagram
- no horizontal scroll
- answering, reloading and resetting all work
- Match Mode: the skill check, squad picking, kick-off, an automatic goal and an automatic break all work

Then send me the HTML file and a short list of what's inside.

### Understanding checks and section credit (added)

For **every section** of the study page (each Match Mode section):
- one **everyday picture** of the idea, drawn as an SVG (theme colour tokens so it works in pitch-black dark; Unicode text only, no TeX in SVG). Numbered badges 1-3 on the drawing match numbered, colour-coded cards below it. Each card says "Everyday" (the example) and "In the picture" (which part of the drawing is the concept).
- three **tricky understanding checks** that test a common misconception and cannot be passed by guessing: multiple choice (shuffled, same order after reload), fill in the blank, one word, and number. Typed answers are judged leniently (case, spaces, unicode minus, subscripts, θ). "I don't know" counts as wrong. Each check has one judged attempt, then shows the right answer and why. Each check lists the prerequisite skills it tests.
- The checks sit in a panel just above their section. They do not gate the section's tasks.

Match Mode changes (the clock and timer goals are unchanged):
- **Three understanding slips in a row give Time FC a goal**, scored by the Time FC player whose skills those three checks needed. A right answer resets the count. Slips count only while the match is running.
- **Focus FC's goal for a section is credited at the end of that section.** A sheet lists the prerequisite skills the section needs that Focus FC owns. I tick the ones that helped most, and the player who owns the most ticked skills takes the goal. If players are level, choose randomly between them. This draw is the only random step and never affects the checks. "Skip, pick for me" falls back to the automatic scorer. The sheet survives a reload, waits for a break to end, and the full-time sheet waits until every credit is settled.
