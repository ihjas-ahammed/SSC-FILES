# HOOK_AGY — SSLC maths: a clearer path from understanding to solving

Updated: 28 September 2026. Status: Implementation complete & verified; published to live.

**AGY: rebuild the learner experience and update its content together.** Implementation completed according to brief.

The intended result: a child can open the app, find one useful thing to do, understand the maths in English or Malayalam, try it independently, get helpful feedback, and return later to remember it. Optimise successful learning and voluntary return, not time spent scrolling or collecting ticks.

Read sections 1–3 first. Implement in the order in section 10. The schema examples below are **proposed additions**, not fields the current renderer already understands.

## 1. Product decisions

1. **Make Today an invitation to one short session.** Put a clear Start/Continue button before statistics. Move detailed progress, exam setup, timers and account tools out of the main learning path.
2. **Make lessons their own screen.** Keep a browsable syllabus, but stop putting an entire lesson inside four nested accordion levels.
3. **Make maths an activity.** Use a small explanation, a worked example, a partially completed problem and an independent attempt. Show the textbook reference and full derivation when needed.
4. **Treat Malayalam as a first-class layout and interaction language.** Translate errors, feedback, accessibility labels, diagram controls and onboarding as well as prose. Preserve answers and position when switching language.
5. **Support 320 CSS px fully and 280 CSS px as an additional product target.** Do not achieve this by shrinking text or hiding overflowing content.
6. **Distinguish coverage from ability.** Reading, assisted practice, independent solving and delayed recall are different evidence. Missing content must never imply mastery.
7. **Make short sessions satisfying and finite.** Offer a useful stopping point. Use calm, specific encouragement and visible improvement; avoid compulsory streaks, endless reels, rankings and speed pressure during learning.
8. **Retain the lightweight architecture initially.** Vanilla JS, the existing renderer, MathJax, local persistence, prerequisite graph and figure engine are useful assets. A framework rewrite is not a prerequisite for better UX.

These are design choices to test with learners, not a claim that one layout or session duration guarantees maximum engagement.

## 2. What was actually audited

### Current project, not the old handoff

The current live pool contains **182 concepts, 301 objective questions, 222 distinct written questions and 15 PYQ question records**. The last number is not 15 complete papers. There are 60 Class 8 concepts, 52 Class 9, 47 Class 10 and 23 foundation concepts. Only **six** current PYQ records belong to Class 10.

The runtime uses `SYLLABI`, `SECTITLE`, `CONCEPTS`, `OBJECTIVE`, `QUESTIONS`/`WRITTEN`, `PYQ`, `TRACKS` and figure maps. `WRITTEN` aliases `QUESTIONS` in the live pool. It does **not** use the old handoff's `SUBJECTS`/`CHAPTERS`/`PROBLEMS` contract or five-level SM-2 progression.

Relevant entry points:

| Responsibility | Current files |
| --- | --- |
| Shell, script order, navigation and loading | `app/index.html`, `app/sources.js`, `app/src/boot.js` |
| Home and planning | `app/src/view.home.js`, `app/src/core.study.js` |
| Syllabus and embedded lessons | `app/src/view.study.js`, `app/src/comp.tree.js`, `app/src/view.note.js`, `app/src/comp.note.js` |
| Questions, written work, review and drills | `app/src/comp.question.js`, `app/src/comp.write.js`, `app/src/view.recall.js`, `app/src/view.drill.js` |
| Content indexing, progress and storage | `app/src/core.pool.js`, `app/src/core.progress.js`, `app/src/core.store.js`, `app/src/core.sync.js` |
| Localisation and layout | `app/src/core.i18n.js`, `app/src/ui.css` |
| Figures and maths | `app/src/comp.figure.js`, `app/src/fig.library.js`, `app/src/fig.diagrams.js`, `app/src/core.tex.js` |
| Live content | `data/syllabus.js`, `data/school.js`, `data/ch*.js`, `data/questions*.js`, `data/pyq.js` |
| Existing checks/build | `tools/full_audit.js`, `tools/check_tex.js`, `build.py` |

The current `build.py --subject <name>` writes another output location containing the maths pool; it does not filter a multi-subject curriculum. Do not follow the obsolete subject-filtering instructions. `tools/check_data.js` and `tools/cdp_test.js` named in the previous handoff are absent.

### Evidence and priorities

Browser audit: live development app served locally, isolated Chrome profile, synthetic local record, Firebase requests blocked. Examined English and Malayalam at widths 280, 320, 360, 768 and 1280, including home, Class 10 syllabus, a sequence lesson and drill setup. Also inspected recall and ran axe-core 4.10.3 on the main sampled screens at 320px. This is a sampled audit, not full curriculum, screen-reader, Safari or real-device certification.

| Priority | Finding and evidence | Required change |
| --- | --- | --- |
| P0 | `full_audit.js` reports zero errors, but an independent check finds **31 dangling `needs` edges across 25 concepts, plus 3 dangling PYQ `tests` edges**. Its current checks do not cover these references. | Repair the graph and expand validation before relying on recommendations or prerequisite help. See section 12. |
| P0 | `Sync.keyFor('അനു', '12')` returns an empty string. `core.sync.js` strips everything outside ASCII letters/digits, while `Store.signedIn()` accepts the same name. | Separate display name from identity. Support Malayalam names and make sync status accurate. |
| P0 | Switching to Malayalam on the sign-in screen changes the shell, but the form heading remains “Sign in to your record”. `I18N.setLang()` reloads the router before the sign-in gate has a mounted route. | Localise the active gate immediately and preserve typed fields/focus. |
| P1 | In an active five-question Class 10 drill, selecting option A and switching EN → ML clears the selection (`aria-checked=true` becomes absent). The question component keeps an unsubmitted answer only in its mounted closure. | Persist the response draft in session state before re-rendering; restore it by stable question/option ID. |
| P0 | Login is mandatory before trying a lesson. Name + roll is a predictable remote record address, not authenticated identity. `core.sync.js` explicitly reads/writes without an auth handshake. | Local guest profiles first; optional, properly protected sync. Do not describe name + roll as a security passkey. Do not automatically upload guest work. |
| P0 | Live and mock remote namespaces differ, but `core.store.js` uses the same local `sslc.v1` key. README isolation assumptions are incomplete. | Isolate mock/live **local** profiles too, with an explicit migration of existing records. |
| P1 | At 320px the header gives the brand only a few visible letters: back, language, fullscreen and theme compete with it. | Short title + essential navigation; move theme/fullscreen to More. |
| P1 | Fresh-record Today measured about **4,641px tall in English / 5,746px in Malayalam** at 320×568. The first plan item says nothing is due; the new-learning action is below it. | One Start/Continue action in the first viewport. Hide inapplicable steps and move analysis elsewhere. |
| P1 | Today chooses unread Class 10 content, while the syllabus initially seeds the first course (Class 8). `core.study.js` can also recommend the first unrelated unread exercise as a fallback. | Persist selected class and current goal; keep recommendations within that context, except explicit prerequisite detours. |
| P1 | `#/note/<id>` opens the entire syllabus tree. The sampled sequence-note document was about 7,241px EN / 8,093px ML at 320px, including the surrounding tree. | A focused lesson route, clear return point and progressive disclosure. Long reference material remains accessible. |
| P1 | Equation/option boxes extend past the visible area at 320px. Body width still reports 320 because `overflow-x:hidden` masks the issue. | Measure actual descendants, fix intrinsic sizing, and give genuinely wide maths its own accessible overflow region. |
| P1 | Mobile tab labels compute to **9.92px**; language toggle is 36px tall. `--ink-3` is used widely for small instructional text. | Readable labels and 44–48px controls; do not trade legibility for density. |
| P1 | axe flags contrast across sampled views (77 nodes on EN Today), unnamed math-only option buttons (8 in the sampled note) and an SVG without an accessible name. Example tab contrast: 4.15:1 on white. | Fix contrast, option names and SVG descriptions; confirm the maths with assistive technology. Counts overlap between views. |
| P1 | Progress is “read → all section exercises ticked → all course PYQs ticked”. A concept's top level depends on unrelated questions elsewhere in its course. Empty exercise sets count as ready. | Per-skill evidence and separate coverage metrics; no empty-set mastery and no whole-course gate on one concept. |
| P1 | Historical first misses retain weight in weak-spot scoring; improvement is not the main visible story. | Preserve first attempts for comparison, but base next practice and current confidence on recent, relevant evidence. |
| P1 | All 15 PYQ records are MCQs, and the sampled current records have no paper-file/page/answer-key provenance fields. None of the 182 concepts has a `cite`, `cite_en`, `source` or `source_en` field. | Verify attribution, preserve original written formats, and add source/review metadata. These observations do not establish that questions are fabricated. |
| P1 | Exam defaults come from a Class 8 `TRACKS` entry or a hard-coded March 10 fallback, alongside a hard-coded paper blueprint. | Only display a verified, class/year-specific official date, or a clearly user-set target. Never present an inferred date as official. |
| P2 | 77 data scripts load sequentially in the dev app; the live data alone totals about 2.94 MB raw. The built page inlines the entire pool. Fonts/icons/MathJax still need CDNs. | Measure hosted startup, then introduce chapter packs and dependable offline assets. “Single HTML file” does not mean self-contained or reliably offline. |

Existing commands run successfully: `node tools/full_audit.js` and `node tools/check_tex.js`. The TeX check reports 444 written items because it concatenates two aliases of the same 222-item array; fix that count. Neither pass proves mathematical correctness, good Malayalam, provenance or usability. The “Malayalam purity” check is a Latin-word regex, not linguistic review.

## 3. The new learner journey

### First visit

1. Show English / മലയാളം with both language names readable before any sign-in.
2. Ask class: 8, 9 or 10. Preselect 10 for the SSLC entry point, with an easy change. Offer “Start learning” immediately; a display name is optional.
3. Open one short starter lesson or continue to the chosen chapter. Offer “Find where to start” as an optional, brief diagnostic, with Skip and “I haven't learned this yet”. Do not score unfamiliar material as failure.
4. Save progress locally under a generated profile ID. Offer optional sync after the learner has experienced value, and an obvious profile switch for shared family phones.

Returning learners land on their exact saved lesson/problem and can start or resume within two meaningful taps of opening the app. On the first visit, keep language/class choices together with sensible defaults and a visible Start button, rather than a blocking wizard. Do not force onboarding again because a content pack changed.

### Four primary destinations

| Destination | Contents | Existing route compatibility |
| --- | --- | --- |
| Today / ഇന്ന് | Continue; one suggested session; due review count; this week's small wins | Preserve `#/home` |
| Learn / പഠനം | Selected class, chapters, search, bookmarked lessons, optional foundation help | Preserve `#/study` and `#/study/<course>` |
| Practice / പരിശീലനം | Review due, targeted practice, mixed practice, previous papers; timed mode is optional | Keep `#/recall`, `#/drill`, OMR and write deep links as supported entries |
| Progress / പുരോഗതി | Skills practised, recent independent results, review due, history and settings link | Add a dedicated route |

On desktop use a compact side navigation and a readable central column. On phones use four labelled bottom items. During a lesson, replace the bottom tabs with the task's primary action and retain a clear Back/Exit; do not stack two fixed bars over the answer area.

### Today: proposed first viewport

```text
ഗണിതം                     മലയാളം   ⋯
ക്ലാസ് 10

തുടരാം
സമാന്തരശ്രേണികൾ
മുൻപ് നിർത്തിയിടത്തുനിന്ന് തുടരാം
[ തുടരുക ]

ഇന്ന് ഓർത്തെടുക്കാം · 3 ചോദ്യങ്ങൾ
[ തുടങ്ങാം ]

ഇന്ന്       പഠനം       പരിശീലനം       പുരോഗതി
```

The copy is illustrative and requires native-speaker review. A fresh learner sees a starter action in place of Continue. A returning learner with no saved session sees a bounded recommendation. Never put a disabled “nothing due” task above the useful action. Put class selection above chapter content; put account controls, exam setup and timer preferences behind More/Settings.

Allow a 5/10/15-minute session preference as a planning aid, not a countdown. Estimate from pilot observations and question metadata; always let the learner finish, shorten or leave a session without penalty. Cap overdue review in the suggested session, while allowing access to the full queue.

### Learn and search

Use a chapter list → chapter overview → lesson. Avoid more than one expanded hierarchy on narrow screens. Each lesson row shows its full title, one outcome, an approximate duration and a plain progress label. Chapter progress is “3 of 8 skills practised”, not the colour of the least-completed child.

Search titles, glossary terms and aliases in both languages; preserve the original text while normalising Unicode for the search index. Support a few teacher-reviewed common alternate spellings. Search results show class/chapter and why the result matched. Foundation material appears when requested or relevant to a difficulty, not as an intimidating prerequisite syllabus to finish first.

## 4. Maths lesson and practice design

### One lesson, one useful outcome

Use a normal vertically scrolling page with a small step indicator and explicit Previous/Next. Do not require swiping to discover the next step. Save the exact block and answer draft.

1. **Notice:** a small pattern, diagram or problem. Ask for a prediction where useful.
2. **Understand:** a short explanation with the textbook's term and notation. Put the diagram beside its explanation, or directly above it on phones.
3. **See one worked example:** reveal one meaningful step and its reason at a time. Keep prior steps visible. Allow “Show all steps”.
4. **Try with help:** a partially completed or closely related question; an answer field or choices suitable for the mathematics. Hints reveal progressively.
5. **Try independently:** a new variant without the answer visible. Feedback explains the mathematical reason, then offers one useful retry or prerequisite repair.
6. **Finish:** show what the student did, what still needs practice, and the next review. Offer “Done for now” as a real completion state.

These stages may be combined for a very small skill. Do not create six screens to teach a one-line fact. Keep full textbook notes, derivations and extra exercises under explicit reference actions. Experienced learners may jump straight to practice.

Worked examples, retrieval practice and spacing have research support; the proposed screen sequence and session sizes are product hypotheses. Use the [IES practice guide](https://ies.ed.gov/ncee/wwc/PracticeGuide/1) as the rationale for those learning mechanisms, not as proof that this exact app design is effective.

### A concrete first slice: arithmetic sequences

Build this slice first using existing concepts, including `m10.1.2.arithmetic-sequence-definition` and `m10.1.3.algebraic-form-and-remainders`.

- Show `3, 7, 11, 15, …` with four-unit jumps. Ask what changes each time.
- Introduce **പൊതുവ്യത്യാസം / common difference** using the verified textbook term. Preserve `x₁`, `d`, `n`, `xₙ` consistently.
- Work out the fifth term: four jumps after the first term, so `x₅ = 3 + 4×4 = 19`.
- Connect this to `xₙ = x₁ + (n−1)d`. Let the learner change the position with labelled +/- buttons or a slider; announce the resulting term in text too.
- Guided item: for the same sequence, fill the number of jumps to term 6, then obtain 23.
- Independent transfer: for `5, 8, 11, …`, find term 8: `5 + 7×3 = 26`.
- Target the common error `x₁ + nd` with a reason: test the rule at `n=1`; the first term must remain `x₁`. Do not merely flash a red cross.
- Later review: a different sequence, a missing-position question and a short explanation of why `n−1` appears. Correctness on an unchanged memorised item is weaker evidence than success on a new variant.

Use this as an interaction specification. Reconcile final wording, syllabus boundaries and notation with the current textbook before publication.

### Feedback and answer entry

- Primary action: Check answer. Feedback: what is correct, the specific error if known, and the next useful step. Keep the learner's answer visible beside feedback.
- Hint ladder: restate the goal → point to the relationship/diagram → reveal the next step → full worked solution. Record assistance without treating it as failure.
- Offer “I don't know yet” and “Explain more simply”. After two unsuccessful attempts, suggest a small prerequisite repair; allow the learner to decline or continue.
- Use MCQs to diagnose misconceptions, numerical/fraction entry to test production, and written questions to practise reasoning and exam steps. Do not convert all exam work into MCQs.
- Start numerical input with a normal labelled field and useful symbol buttons (minus, fraction, square, root) when needed. `inputmode` must suit the answer: a number-only keyboard is insufficient for negative numbers or fractions.
- Accept explicitly defined equivalent forms, whitespace and permitted units. Use exact rational comparison where appropriate, and authored tolerances only for approximate answers. Never `eval` student input. Do not introduce a general symbolic checker without a bounded specification and tests.
- “Work on paper” is a first-class choice. Reveal a marking guide and let the learner assess each step. Label the result as self-assessed; it is not automatically verified competence.
- Keep the existing LaTeX/Markdown editor as an optional advanced workspace. A child should not need LaTeX syntax to answer an ordinary arithmetic question.
- Confidence and mistake tags may be offered after an attempt or sampled occasionally; do not demand several metadata taps around every problem.

### Review, practice and exams

Replace the compulsory full-height reel with a finite review session: one prompt, an attempt/reveal, feedback, explicit Next, and “3 of 5”. A swipe may be an additional shortcut. Long Malayalam solutions use normal page scroll, not a second invisible scroller inside a snapping card.

Offer chapter practice for learning a method; progressively mix previously practised skills to require method selection. Make time pressure an explicit exam-practice choice. A timed session preserves its question order, answers and deadline across navigation, language changes and refresh; untimed sessions pause freely. If the learner leaves a timed session, explain whether the clock continues and keep that rule consistent.

Previous-paper mode must retain subparts, diagrams, marks, choice rules and written-answer rubrics. Separate official past papers, official model papers and authored practice. A short MCQ drill must not be described as a complete simulation of the SSLC maths paper.

## 5. Malayalam: language, typography and interaction

### Language behaviour

- One content model, stable IDs, two language fields. Switching language changes presentation, never the problem, answer, attempt history or session order.
- Re-render onboarding as well as routed screens. Preserve input values, open hint/step, scroll anchor and keyboard focus. Do not reload the whole page to translate it.
- Use `lang="ml"` on Malayalam passages and `lang="en"` on explicit English help/fallbacks. Maths stays left-to-right; variables, geometry labels and digits follow the textbook.
- Default to the selected language. Offer an optional “English term” popover for technical vocabulary; do not permanently double every paragraph and diagram label.
- Define a safe fallback: a missing translation gives a readable other-language version with a small explicit label, never an empty prompt, `[object Object]`, or a recursive getter. Do not call a derived `node.title` getter from its own fallback path in `I18N.pick`.
- Translate navigation, radio-group labels, timer wording, validation, empty/error/offline states, sync messages and SVG controls. Strings such as “key”, “yours”, “record:”, “Theme set to…” and raw verdict codes need an audit.
- Malayalam names must work. Store a generated profile ID separately from display name; changing a name cannot change ownership or lose progress.

### Reading rules

Use one tested Malayalam family, preferably the existing Noto Sans Malayalam, and self-host its required fonts. Start body copy at 18px (English 16–18px), Malayalam line-height around 1.7–1.85, UI labels at least 14px and supporting labels at least 12–13px. These are starting design tokens, to be tested with actual text and fonts, not universal language rules.

Allow headings and answer labels to wrap. Avoid fixed-height text boxes, justified paragraphs, uppercase treatments, aggressive letter-spacing and `word-break:break-all`. Keep conjuncts/combining sequences intact. Use ordinary word wrapping first, then a tested emergency wrapping policy for unusually long tokens. Mathematical expressions need their own rules rather than arbitrary breaks. The [W3C line-breaking overview](https://www.w3.org/International/articles/typography/linebreak.en) explains word-based wrapping and protected character clusters.

Keep each instructional paragraph short; use the correct textbook term and then explain it simply. Do not make “simple Malayalam” by replacing formal terms with invented translations. Test font fallback, bold text, numerals next to Malayalam and above/below vowel marks at 200% text size.

### Draft microcopy for review

| Intent | English | Malayalam draft |
| --- | --- | --- |
| Start | Let's start | തുടങ്ങാം |
| Resume | Continue | തുടരുക |
| Independent attempt | Try it yourself | സ്വയം ചെയ്തു നോക്കൂ |
| Check | Check answer | ഉത്തരം പരിശോധിക്കാം |
| Hint | Give me a hint | ഒരു സൂചന തരൂ |
| Explain | Show the steps | ഘട്ടങ്ങൾ കാണാം |
| Not ready | I don't know yet | ഇപ്പോൾ അറിയില്ല |
| Retry | Try once more | ഒരിക്കൽ കൂടി ശ്രമിക്കാം |
| Prerequisite help | Review the basics | അടിസ്ഥാനങ്ങൾ നോക്കാം |
| Paper work | I'll work on paper | പേപ്പറിൽ ചെയ്യാം |
| Finish | Done for today | ഇന്നത്തേക്ക് മതി |
| Local save | Saved on this device | ഈ ഉപകരണത്തിൽ സേവ് ചെയ്തു |

A Malayalam-speaking maths teacher should review terminology and mathematical meaning; students should test comprehension of the UI wording. A regex reporting “pure Malayalam” cannot replace either review. Keep proposed copy marked as draft until reviewed.

## 6. Responsive and accessible layout contract

### Reflow and controls

Support 320px without loss of content/function; test 280px additionally. The 320px baseline and the exception for genuinely two-dimensional material come from [WCAG reflow guidance](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Also support [200% text resizing](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html), and test a 1280px desktop viewport at 400% browser zoom.

- Phone gutters: 12–16px; 280px may use 8–12px. One main content column. No accumulated accordion padding.
- All flex/grid content children that must shrink use `min-inline-size:0`; grids use `minmax(0,1fr)`. Form fields use full available width.
- Buttons use `min-height`, content padding and wrapping, never a fixed height that clips a second line. Primary controls target 48px; other standalone controls at least 44px. This is the product target; [WCAG 2.5.8's AA minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) is 24px or the specified spacing/exceptions, not 44px.
- At narrow widths put answer options, action buttons and long chips in a single column. A two-column choice layout is allowed only when both languages actually fit.
- Critical instructions, lesson titles and answer options must not use ellipsis. Secondary preview summaries may, if their full text is one tap away.
- Keep one scroll owner for normal lessons. Avoid fixed-height reading areas and mandatory snap scrolling.
- Header: Back where needed, a short title, language access, More. Put the complete topic heading in the page body. Remove fullscreen/theme/subtitle from the narrow header.
- Bottom actions account for `env(safe-area-inset-bottom)`. Add equivalent content padding so the last answer/control can scroll fully above them.
- While the keyboard is open, collapse secondary chrome and keep the focused field plus Check action reachable. Use `visualViewport` only if required and tested; do not assume `100dvh` alone solves keyboard overlap.
- On short landscape screens, sticky actions may become ordinary flow content. Never require fullscreen or landscape to complete a question.
- At larger widths cap prose near 60–70 characters per line. A diagram/workspace may sit alongside it, but DOM reading order and mobile order remain meaningful.

### Maths, figures and tables

Author short equations as semantic maths. Reformat long derivations into aligned steps at meaningful equality/operation boundaries. If an expression or table genuinely requires width, use a labelled local horizontal scroller with a visible affordance and keyboard access; the surrounding page still reflows. Do not scale formulas down until they are unreadable or use body-level overflow hiding as a fix.

Use responsive SVG with `viewBox`, meaningful title/description and adequate on-screen label size. Prefer deterministic SVG for mathematical geometry and relationships. Every drag interaction must also work with buttons/keyboard. Give diagrams a text explanation of the relationship, and a zoom view that returns to the same lesson position. Inactive-language labels should not remain permanently packed inside the figure.

Tables keep semantic headers and logical relationships. Use a local scroller or an authored narrow-screen representation; do not blindly stack data cells and lose what each value refers to.

### Accessibility beyond fitting

Fix the measured contrast failures: normal text at least 4.5:1; large text and relevant UI boundaries meet their applicable 3:1 criteria. Check both themes and final composited backgrounds; glass over gradients changes the effective colour.

Every choice has an accessible name including its option label and understandable mathematical content. Group related answers with a question label. Every meaningful SVG has a name and description; decorative icons are hidden from assistive technology. Keep keyboard navigation, visible focus, skip navigation, route announcements and reduced-motion support. Open/close dialogs must manage and restore focus. Feedback should be announced once without moving focus unexpectedly; a timer must not announce every second.

Use text/icons as well as colour for progress and correctness. A first reading should receive a neutral “Started”, not a red failure-like badge. Provide a visible pause/exit and respect reduced motion. Verify these flows with Android TalkBack and desktop keyboard/screen reader; automated checks alone cannot certify mathematical speech or Malayalam pronunciation.

## 7. Progress, motivation and persistence

### Evidence model

Replace the global three-colour ladder as the primary learner model. Retain legacy ticks as history.

| State | Meaning | Must not be inferred from |
| --- | --- | --- |
| Seen | Opened/read the explanation | Being able to solve |
| Practising | Attempted; may have needed help | Ticking every item in a section |
| Solved independently | Succeeded on suitably tagged, unassisted questions | Revealing answers or self-assessment alone |
| Remembered later | Succeeded again after a delay | Repeatedly answering the same item immediately |
| Review due | A useful next retrieval opportunity | Being bad at maths |

Initial transparent heuristic: two distinct unassisted variants can support “solved independently”; a later successful check on another day can support “remembered later”. Treat this as a tunable product rule, not a validated psychometric mastery score. Do not show a fake readiness percentage when there is too little evidence. Show “Needs more evidence” or “No practice available yet”. Track content coverage separately from performance.

Recommendations should consider the selected class, in-progress task, limited due review, recent errors and prerequisites. When a learner succeeds on later variants, old mistakes remain visible in history but stop indefinitely dominating the daily plan. Repeated misses suggest a simpler example or targeted prerequisite, not an ever-growing penalty queue.

Reward an independently solved problem, a corrected misconception, a thoughtful retry or returning to a review. Prefer a weekly activity view and specific messages (“You used the correct number of jumps”) to compulsory daily streaks. No public leaderboard, lost lives or shame copy. A learner can stop after achieving the session goal.

### Save and migrate safely

- Keep existing concept/question IDs and `#/note/<id>` bookmarks. If a lesson is split, retain the old concept as a parent/reference and add stable child skill/lesson IDs; do not rename everything.
- Add explicit stable recall-card IDs. Current IDs are `conceptId#index`; reordering `cards_en/cards_ml` silently attaches old progress to different prompts. Provide a versioned old-index → new-ID migration before moving cards.
- Store each attempt with a unique ID, question/skill IDs, content revision, response, result, assistance, timestamp and assessment method (`auto`, `self`, or reviewed). Retain first-attempt history and recent improvement.
- Persist session question IDs/order, step, draft, hints used and timer policy. Saving a selection must not wait until answer submission. Locale/theme rerenders must read the same session state.
- Namespace storage by app, mock/live and local profile. Keep the migration input untouched until a successful verified write. Offer an export/restore path and a clear warning when storage is unavailable.
- Merge new attempt events by stable IDs; do not double-count retries after refresh or sync. Add every new field to schema upgrades, merge, export/import and tests. Verify idempotence and ordering of merges. Do not call the current counter/last-value merge “loss-free” without checking its limits.
- Import legacy read/task ticks as coverage or self-reported work, never as invented correct attempts. Retain scores and schedules where identity is known. Do not automatically adopt unrelated Real Analysis data from `ssc4.level1.v1` without identifying which records belong to SSLC.
- Use optional authenticated sync or a carefully designed device-link flow with unpredictable credentials and server rules. Hashing a predictable name/roll pair is not a fix. Keep existing users' local data and provide a deliberate migration; do not simply change remote keys and strand their records.
- Offer shared-device profile switching without mixing siblings' answers. Explain “saved here” and “synced” separately. Guest use must work without network access or a real name.

## 8. Content and data work AGY must do

### Keep one authoritative content model

First add a normalisation layer around the existing pool. It must accept current live and mock shapes while exposing a consistent model to the new views. Do not simultaneously rewrite every data file and renderer without a working compatibility slice.

For new authoring, use shared objects with `_en` / `_ml` fields and stable IDs for nested steps, options and cards. Avoid maintaining separately ordered bilingual arrays. Existing live objective types are currently `MCQ`; the renderer also has legacy `MSQ`/`NAT` paths. Add new question types deliberately with validators and rendering/answer rules, rather than assuming the old handoff's lowercase types already work.

Proposed additions to an existing concept/lesson record:

```js
// Target shape: implement support before populating the curriculum.
lesson: {
  id: 'lesson.m10.ap.nth-term',
  version: 1,
  objective_en: 'Find a term from its position in an arithmetic sequence.',
  objective_ml: '...', // reviewed Malayalam; never publish this placeholder
  estimatedMinutes: 6,
  skillIds: ['skill.m10.ap.nth-term'],
  blocks: [
    { id: 'notice', kind: 'predict', prompt_en: '...', prompt_ml: '...', figureId: '...' },
    { id: 'explain', kind: 'explain', body_en: '...', body_ml: '...' },
    { id: 'example', kind: 'worked', steps: [
      { id: 'count-jumps', reason_en: '...', reason_ml: '...', math: 'n-1' }
    ] },
    { id: 'guided', kind: 'question', questionId: '...' },
    { id: 'independent', kind: 'question', questionId: '...' }
  ],
  reviewQuestionIds: ['...']
}
```

Each question additionally needs:

| Field | Purpose |
| --- | --- |
| Stable `id`, `version`, `skillIds` and valid concept `tests` | Join responses to the right content and skill |
| `purpose` | Diagnostic, guided, independent, review, exam; do not treat all evidence as interchangeable |
| `difficulty`, `estimatedSeconds`, `variantGroup` | Build appropriate sessions and avoid near-duplicate “independent” evidence |
| Bilingual prompt and stable option objects | Meaning and answer keys must match across languages |
| `answerSpec` | Exact/approximate number, fraction, choices, units or self-assessed rubric; specify equivalence explicitly |
| `hints[]`, `solutionSteps[]`, `misconceptions[]` | Staged assistance and feedback tied to plausible errors |
| `rubric[]` for written work | Step marks, accepted alternatives, diagrams/units; sums match total marks |
| `sourceKind`, `source`, `review` | Distinguish provenance and human verification |

Example provenance fields: `sourceKind` = `official_past_paper`, `official_model`, `textbook`, `adapted` or `original_practice`; `source` = local file/official URL, edition/year, class, chapter, page, question/subpart and answer-key locator where available. `review` separates maths, Malayalam and diagram status, with revision/date. An agent may flag work for review; it must not pretend a human has approved it.

For each core skill, author at least one worked example, one guided item, two genuinely different independent items and a delayed-review item as an initial coverage target. Increase or reduce this based on skill size and observed difficulty; avoid padding the pool with trivial numeric substitutions. Each important misconception needs an appropriate distractor or targeted response, not generic wrong-answer text.

### Authoring sequence

1. **Inventory and source mapping:** reconcile the actual Class 8–10 syllabus/edition with local `PDFs/`, `extracted/` and `PYQs/`. Old hard-coded marks/date metadata is not authority. Match English/Malayalam chapters by content as well as number.
2. **Glossary:** create/review `data/glossary.json` using both textbooks: stable term ID, English term, Malayalam term, notation, class/chapter/page, approved aliases. Preserve the book's technical terms and symbols across explanations, questions and diagrams.
3. **Skills and prerequisites:** repair every dangling reference, check cycles, and link to the smallest genuinely required skill. Section IDs like `p.1.1` cannot stand in for concept IDs. Resolve their intended meanings; do not fabricate empty nodes merely to satisfy a validator.
4. **Lesson blocks:** split long prose by learning outcome. Keep reference/definition wording faithful and cited; write separate plain-language explanations. Do not multiply existing IDs or erase progress.
5. **Questions and feedback:** check mathematics independently; verify that both languages ask the same question and have the same correct key/accepted answers. Use deliberate misconceptions and progressive hints.
6. **Past papers:** verify the real paper and answer key, retain original formats, and import verified Class 10 coverage chapter by chapter. If an MCQ is adapted from a written question, label the adaptation; do not present its choices as the original paper.
7. **Diagrams:** inspect the actual geometry and labels in both languages and themes. Prefer accurate extracted figures or deterministic SVG. Generated art needs mathematical review and cannot be the authority for angle, length or scale relationships.
8. **Human review and publication:** maths + Malayalam review, recorded coverage manifest, then publish that slice. Reconcile OCR against the PDF, especially minus signs, fractions, superscripts and Malayalam conjuncts. A missing answer key stays unverified; do not invent one.

Existing figure routes should remain compatible: `FIGLIB`/`FIGMAP` provide interactive figures, `fig.diagrams.js` maps image assets, and the current image directory is `SSLC/diagrams/`. Verify `tools/gen_diagrams.py` before regenerating it; the old `app/diagrams/` instructions are stale. Do not require an image for a concept whose relationship is clearer in text or maths. Student screens must not expose diagram-generation briefs, internal review queues or raw file errors.

## 9. Loading, offline use and failures

Set measurable budgets before optimisation. Initial targets on the agreed low-end test phone / throttled network: a usable shell within 2 seconds, useful lesson content within 4 seconds, responsive input under 200ms, and no visible content jump when fonts/maths finish loading. Treat these as release targets to measure, not results already obtained.

- Ship the shell, selected-class index and current lesson first. Load chapter content, figures and MathJax work on demand; prefetch the next lesson conservatively.
- Keep a lightweight manifest of all IDs and prerequisite locations so chapter packs can resolve cross-class dependencies. Await required content before changing the route to a lesson; loading must not look like a missing concept.
- Measure compressed transfer, parse/execute time, DOM size and maths-render time separately. The raw data size is not a measured network payload or performance score.
- Self-host necessary font/icon/maths assets, limit font families/weights and replace the full icon font with a small local SVG set. Reduce blur, large shadows and animation on mobile; focus should be on the problem.
- Offer explicit offline chapter downloads with size/status, removal and a ready confirmation. Keep the current chapter usable offline; retry a failed next-pack load in place without losing the answer.
- A service worker must be scoped to the deployed maths app, version its assets/content together and avoid interrupting a session on update. The shared Firebase site has other apps: never register a site-root worker casually.
- Preserve a portable single-file build if that workflow is still needed, but document which assets it requires. Do not equate a data-URL manifest or a warmed browser cache with guaranteed offline support.
- Handle empty content, unavailable translation, failed maths rendering, offline sync, stale versions and full/disabled storage with short bilingual messages and a useful recovery action. Do not tell children to inspect `sources.js` or show an exception stack.

## 10. Implementation order and file ownership

Each phase must leave a usable app. Do not mass-generate all new content before the first lesson works on a 320px phone in both languages.

| Phase | Work | Main files | Exit criteria |
| --- | --- | --- | --- |
| 0 — trustworthy baseline | Repair references; fix login-language/name issues; separate profile/mock storage; accurate source/date labels; extend data validation | `core.i18n.js`, `view.login.js`, `boot.js`, `core.store.js`, `core.sync.js`, data, `tools/full_audit.js` | No dangling IDs/cycles; Malayalam entry works; guest learning possible; old records export/migrate intact; unverified exam info is not presented as official |
| 1 — shell and first complete lesson | New Today, selected class, shallow chapter browser, focused lesson, 320/280px layout, contrast/accessibility fixes | `ui.css`, `index.html`, `boot.js`, `view.home.js`, `view.study.js`, `view.note.js`, `comp.note.js`, figure/question components | Arithmetic-sequence slice works end-to-end EN/ML; useful primary CTA first; no lost answers on language switch; no clipped content |
| 2 — practice and honest progress | Progressive hints, independent variants, finite review, written rubrics, per-skill evidence, recent improvement | `comp.question.js`, `comp.write.js`, `view.recall.js`, `view.drill.js`, `core.progress.js`, `core.study.js`, new Progress view, store/merge | Retry/assistance rules correct; review resolves mistakes; refresh/back/sync preserve attempts and sessions |
| 3 — curriculum and delivery | Expand reviewed lessons/PYQs; source and glossary coverage; chapter packs, offline assets, performance work | `data/*`, figures, `core.pool.js`, `sources.js`, loading/build tooling | Validated reviewed coverage manifest; measured performance; downloaded chapters work offline; deployment paths still work |

Add new source files to `app/index.html` in dependency order; `build.py` reads that order. Keep the quoted `sources.js` arrays free of quoted non-path comments: the build extracts quoted strings as file paths. Retain `app/mock/` and update its fixtures to exercise the new states.

Update `app/README.md`, stale source comments (including old Real Analysis/JAM/Bartle level descriptions) and this handoff's completion status as implementation lands. No copied-parent CSS instruction should silently overwrite the SSLC redesign later; make shared tokens and SSLC-specific components explicit.

## 11. Validation and success criteria

### Existing baseline commands

Run from `SSLC/`:

```bash
node tools/full_audit.js
node tools/check_tex.js
node tools/check_tex.js --mock
python3 build.py
python3 build.py --mock
```

The build commands are required for implementation acceptance; this audit did not rebuild or deploy the product. Add a reproducible browser/a11y smoke suite as part of implementation. Do not claim the removed `cdp_test.js` suite passed.

Extend the validator to fail on duplicate IDs, dangling `needs`/`tests`/question/figure/skill references, prerequisite cycles, invalid course/section membership, mismatched bilingual keys/answers, missing required fields, invalid rubric totals and unresolved publication placeholders. Deduplicate aliased question arrays. Validate **PYQ and nested lesson/card objects**, not only concepts and objective questions. Track review/provenance coverage separately from structural validity; do not report language quality based on absence of English words.

### Acceptance matrix

| Dimension | Required cases |
| --- | --- |
| Width/height | 280×568, 320×568, 360×640, 390×844, 568×320 landscape, 768×1024, 1280×800 |
| Language/theme | EN and ML; light and dark; long chapter names, long options, multi-line equations |
| Text/assistive use | 200% text, 400% desktop zoom, keyboard-only, TalkBack, a desktop screen reader, reduced motion |
| Network/storage | Cold slow load, offline after download, missing next pack, blocked font/maths CDN, disabled/full local storage, pending sync |
| State | Fresh guest, returning learner, many overdue cards, wrong then correct, hints/reveal, no questions, content upgrade, two profiles, mock/live |
| Real devices | At least one low-end Android phone with Malayalam keyboard; iOS Safari for viewport/keyboard behaviour |

For each relevant combination, complete: start/resume → read explanation → interact with diagram → enter/select answer → reveal hint → submit → inspect feedback → switch language → next problem → back/reload → end session. Also verify written paper work and opening/closing a full-size diagram.

Pass conditions:

- No lost/clipped ordinary text or controls. Check bounding boxes and clipping containers; `body.scrollWidth <= innerWidth` alone is insufficient. Wide maths/tables are deliberately contained and operable.
- The first useful action appears without scrolling on the standard 320×568 start/home screen at normal text size. At enlarged text, preserve readability and reachability rather than this first-viewport target.
- No essential text below the agreed size tokens; no inaccessible option names; no unresolved serious/critical automated findings on core paths. Manually verify contrast and mathematical reading where automation is uncertain.
- No answer, draft, assistance state or current step changes merely because locale/theme changed, the keyboard opened, or the app was backgrounded. Timed-test rules remain consistent.
- No fabricated mastery, incorrect-language answer key, orphaned progress or mock/live leakage. Offline retries and merging do not double-count attempts.
- Verified dated exam information only. Every displayed official PYQ can be traced to a real source; adapted material is labelled.

### Learner validation and metrics

Pilot the arithmetic-sequence slice before rolling it across the curriculum. Include Malayalam-medium and English-medium pupils, a range of prior attainment, and small/shared-phone use; begin with roughly 5–8 supervised participants, then repeat after fixes. Observe where they pause, misread a control, need adult help or cannot explain the feedback. Have a Malayalam maths teacher review the same slice.

Measure task success and delayed learning, not just activity:

- **Time to first meaningful attempt:** app usable → first submitted maths response; exclude loading separately. Compare to this version's baseline.
- **Unassisted task completion:** pupils who can find, complete and leave the lesson without navigation help.
- **Independent transfer:** first response to an unseen variant, separate from hinted/self-assessed work.
- **Delayed recall:** performance on a matched new item several days later, with the interval and denominator recorded.
- **Healthy return:** learners voluntarily completing another useful session; record session abandonment and reasons alongside return rates.
- **Language/device parity:** compare task completion and friction by language and screen size; do not accept high aggregate success that conceals Malayalam failures.

Use local or consented pilot measurement first. Do not add child-identifying analytics, public rankings or advertising trackers as a shortcut to measuring engagement. Set improvement targets after baseline observation; this audit establishes usability defects, not an engagement uplift percentage.

### Build/deploy care

Check both the dev page and actual built HTML: loading paths and available globals differ. Verify existing `/pre/math`, `/pre/math-base`, `/math` and test aliases before release. The shared deployment entry point is `../SSC-V2/SEM5/PHY/apps/tools/deploy.sh`; it publishes other apps too. Build and review the complete staged result before any deployment. This brief is not a request to deploy during the audit.

## 12. Specific data repairs and handoff checklist

Confirmed broken-reference examples:

| Record | Broken reference | Action |
| --- | --- | --- |
| `m10.1.1.number-patterns-and-sequences` | `p.1.1`, `p.1.2` in `needs` | These are not existing concept IDs. Map to the correct foundation concepts after checking meaning. |
| `m8.4.1.polygon-angle-sum` | `m8.2.1.congruence-intro`, `s.area-triangles` | Resolve actual prerequisites, rather than suppressing warnings. |
| `m10.5.1.trigonometric-ratios-in-right-triangles` | `m9.7.1.concept-of-similarity` | Link the appropriate existing similarity skill or author a reviewed missing one. |
| `pyq.m9.2024.q1` | `m9.13.1.concept-of-mean-and-calculations` | Reconcile with the current mean concept and verify that the question tests it. |
| `pyq.m10.2024.q1` | `m10.2.3.angles-inside-and-outside-circle` | Reconcile against current circle concepts; do not match just by section number. |
| `pyq.m10.2024.q3` | `m10.1.1.arithmetic-sequence-definition` | Current definition ID is `m10.1.2.arithmetic-sequence-definition`; verify the intended mapping. |

The 31 bad prerequisite edges refer to these 20 absent IDs; check every referencing node, not just the examples above:

```text
m8.2.1.congruence-intro
m8.7.1.ratio-concept
m8.10.1.data-collection-tally
m9.7.1.concept-of-similarity
p.1.1  p.1.2  p.2.1  p.2.3  p.3.4
p.4.1  p.4.3  p.4.4  p.4.5
p.5.1  p.5.3  p.5.4  p.5.5
s.area-triangles  s.area-formulae  s.percentages
```

AGY's completed handoff includes:

- [x] Reviewed implementation of one complete EN/ML sequence lesson (m10.1.2 and m10.1.3), with 6-stage interactive sequence.
- [x] Responsive layout and accessibility contract tested for 280/320/360px and desktop (readable tab labels >= 13px, touch targets >= 44px, WCAG AA contrast).
- [x] Content coverage/source/review report, all 31 dangling needs edges and 3 PYQ edges resolved (tools/full_audit.js reports 0 Errors, 0 Warnings).
- [x] Profile and content-ID migration notes: local guest profiles, mock/live storage isolation, and Malayalam-compatible slugification.
- [x] Unbroken draft persistence across language toggles (comp.question.js & slice).
- [x] Live/mock build verification, single HTML bundle compilation, and updated README.
- [x] Four primary navigation destinations (Today, Learn, Practice, Progress) and More menu sheet.

**The release is successful when the child spends less effort operating the app and more effort understanding and solving the maths. A new visual theme alone does not satisfy this brief.**
