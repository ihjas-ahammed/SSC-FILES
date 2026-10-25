study-day-6-exams
=================
papers/        the four model papers made on 22 Oct (PDF + the HTML they were printed from)
                 ELECTRODYNAMICS-II-MODEL-PAPER-3, MATERIALS-SCIENCE-MODEL-PAPER-1,
                 COMPLEX-ANALYSIS-I-MODEL-PAPER-2, REAL-ANALYSIS-II-MODEL-PAPER-4
*-practice.html  one practice app per paper (open in Chrome, works on phone and desktop)
data/          the data.json behind each practice app
practice-app/  the Study Match app with three new card types (question, eval, score, key)
               rebuild:  cd practice-app && python3 build.py --data ../data/<file>.json --out ../<name>.html

How a practice app is laid out
  Section A / B / C of the paper = a section.  Each question = one topic pile (card sheet):
  1 question card (write the answer on paper first)
  2 mark-yourself cards (options carry marks; the marks of each question add up to its marks)
  3 score card (green 70%+, yellow 40-69%, red below 40%)
  4 model answer cards, with the circuit / ray / graph / mapping figure and step-by-step derivation cards
  5 key points

Study tools
  Physics papers (Materials Science and Electrodynamics): each Remember card
  is followed by three unique OMR cards with a missing word and four word
  choices. They use the quiz timer, count toward coverage and match streaks,
  and can score or concede match goals. No inline understanding panels appear.
  OMR questions reveal automatically when centred as you scroll. Their timers
  start on arrival and pause when you move away; there is no reveal button.
  Word-answer question cards have a multiline answer box that saves on this
  device as you type. Swipe to the marking cards to assess your answer.
  Questions requiring equations, calculations or diagrams remain paper answers.
  The maths papers keep their existing expandable understanding checks. Reveal the
  reference answer after trying, then tick "I can explain this"; ticks are saved
  separately from exam marks. Questions use the card and its topic's content.
  Authors can override them with checks: [{"q": "...", "a": "..."}, ...] (exactly 3).
  Set meta.inlineChecks to false to omit inline understanding panels.
  Tags support inline MathJax, including common bare tokens such as E_0 and z^2.
  Press = on a card, or use the = toolbar button, to open the calculator.
  In numerical answer boxes, = opens it with the current value; Use answer
  copies a real result back. Enter calculates. ? opens examples and help.
  RAD/DEG controls trig angles; explicit units such as sin(30 deg) also work.
  math.js 15.1.0 is bundled, including its licenses, for offline calculations.
  Breaks show a modal countdown, pause question timers and derivations, and
  stay visible until the break ends. Resume study explicitly when refreshed.
  Before kick-off, open Match centre and enable Custom halves. The sliders
  choose real minutes per half (20–90, snapping by 5) and the half-time break
  separately (1–30 minutes). Custom mode has two halves and no drinks breaks.
  Each half displays 45 match minutes: 20 real minutes per half means a 2.25x
  match clock. Topic deadlines and stoppage time use match minutes; break
  countdowns and OMR answer timers use real time. Settings persist and lock
  during a match. Reset match changes timing without deleting study progress.
  Hosted builds for each subject are in practice-app/dist/<subject>-practice/.
