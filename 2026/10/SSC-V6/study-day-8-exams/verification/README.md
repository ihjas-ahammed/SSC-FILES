# Day 8 physics exam verification

Both strict builds pass with zero errors, warnings and automatic fixes.
Electrodynamics: 20 questions, 216 authored / 237 expanded cards, seven
derivations, eight diagrams and 60 Remember word quizzes.
Optics: 20 questions, 220 authored / 238 expanded cards, six derivations,
14 diagrams and 60 Remember word quizzes. Each has exactly ten flip questions.

content-check.py is a read-only educational-data validator. It checks the source
question sequence, marks, rubric sums, recall scope, unique Remember quizzes,
SVG XML, body lengths, four checkpoints per derivation and JSON mirrors.
It independently verifies numerical AC solutions, Fresnel fringe positions,
single-slit maxima, grating separations, focal distances, finite-loss parallel
resonance and relevant symbolic identities. It requires SymPy.
Results: content-check.json. It never writes educational content.

exam-check.cjs uses the installed Playwright and Chrome environment against a
local server on port 8771. It checks both standalone and hosted papers:

- Twenty questions; exactly ten low-mark flips and zero high-mark flips.
- All authored TeX expressions parse with MathJax.
- Default focused notch and visible /70 marks meter; no page overflow.
- Editable flips before and during a match; seven/eight-word threshold.
- Reference reveal, Retry, confirmation, saved draft and pause/reload.
- Visible dimmed full-size locks and left movement restriction.
- Actual rubric taps update question/paper marks and marked-question count.
- Marks survive reload; full-credit fixtures cap at 24 + 36 + 10 = 70.
- Both Section C answers count only once; partial credit counts immediately.
- Skipping recall does not award exam marks; Practise again enables typing.
- Higher-mark questions keep their ordinary layout.
- Mobile/desktop screenshots and separate hosted apps load without page errors.

Results: exam-check.json and the adjacent screenshots.
The running checks use clean temporary browser contexts, not the user's saved
course progress. Scoring fixtures only manipulate browser test state.

After builds, all eight embedded data payloads (two papers × root standalone,
root hosted, dist standalone and dist hosted) are compared to canonical JSON.
Both skills folders and both JSON mirror files are compared byte for byte.
Original paper PDF/HTML files are copied verbatim from Downloads.

options-android-check.cjs additionally verifies MathJax in the marking options,
with 37 mathematical options in Electrodynamics and 30 in Optics, no parser
errors, and the same focused-notch score/clock/streak controls at widths
320, 360, 390 and 1440. The Optics Q12 regression screenshot shows the formerly
literal single-slit amplitude rendered as a mathematical fraction.
Mathematical comparisons are protected before HTML parsing in reading cards,
references, feedback and derivation decisions.
