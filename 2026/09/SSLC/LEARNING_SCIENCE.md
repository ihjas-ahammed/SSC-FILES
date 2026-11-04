# LEARNING_SCIENCE — what the app does, and where each rule comes from

This document is the research trail behind the SSLC study app. Every feature
that shapes how a learner spends time is listed with the finding it rests on,
the source, and the exact place in the code where it is applied. When a
feature is changed, this file is the thing to argue with first.

The books and papers below are the ones the field keeps citing. Where a book
popularises a paper, both are given: the book is what a teacher will have
read, the paper is what the claim actually stands on.

---

## 1. The seven principles the app is built on

| # | Principle | Finding | Primary sources | Where it lives |
|---|---|---|---|---|
| 1 | **Retrieval practice** | Recalling beats re-reading. One week later, students who tested themselves retained roughly 50% more than students who re-read, while feeling *less* confident. | Roediger & Karpicke 2006 (*Psychological Science*); Karpicke & Blunt 2011 (*Science*); Brown, Roediger & McDaniel, *Make It Stick* (2014); Dunlosky et al. 2013, "practice testing" rated high utility | The Recall reel (`view.recall.js`), self-check under every note (`comp.note.js`), the attempt-before-reveal rule everywhere |
| 2 | **Spacing** | Reviews spread over time beat the same time in one sitting in almost every one of 254 studies reviewed. | Ebbinghaus 1885; Cepeda, Pashler, Vul, Wixted & Rohrer 2006 (*Psychological Bulletin*); Leitner 1972; Dunlosky et al. 2013, "distributed practice" rated high utility | Leitner boxes and the due queue (`core.progress.js` `INTERVAL`, `reel()`); `Study.due()`; Today's plan opens with what is due |
| 3 | **Interleaving** | Mixing problem types in practice doubled later test scores against blocked practice, because the learner has to *choose* the method. | Rohrer & Taylor 2007 (*Instructional Science*); Rohrer, Dedrick & Stershic 2015 (*J. Educational Psychology*); Bjork & Bjork 2011, "desirable difficulties" | Due cards are shuffled across chapters (`Progress.reel`); the timed drill draws round-robin by chapter (`view.drill.js` `draw()`); "One chapter" mode is offered but marked as the exception |
| 4 | **Elaboration and self-explanation** | Learners who explain each step to themselves learn more than learners who read twice; the Feynman test ("explain it simply") is the same idea as a habit. | Chi, de Leeuw, Chiu & LaVancher 1994 (*Cognitive Science*); Dunlosky et al. 2013, "self-explanation", "elaborative interrogation" | "Teach it back" box under every note (`comp.note.js` `teachBack`); "What it really says" callout; the plan's last step |
| 5 | **Calibration (metacognition)** | Fluency is mistaken for knowledge. Predicting before checking makes learners better judges of what they know, so they study the right things. | Koriat & Bjork 2005 (*J. Exp. Psych: LMC*); Dunlosky & Rawson 2012; Bjork, Dunlosky & Kornell 2013 (*Annual Review of Psychology*) | Confidence gate before every reveal (`UI.confidenceGate`, `view.recall.js`); `Store.recordConfidence`; `Study.calibration()`; the calibration card on Today |
| 6 | **Deliberate practice and error analysis** | Improvement comes from time aimed at the specific weakness with feedback, not from time alone; an error is learned from once its cause is known. | Ericsson, Krampe & Tesch-Römer 1993 (*Psychological Review*); Ericsson & Pool, *Peak* (2016); Metcalfe 2017, "Learning from errors" (*Annual Review of Psychology*); the teacher's "mistake notebook" | `Study.weakSpots()`; the weak-spot reel mode and drill scope; the mistake log (`Store.tagError`, `UI.whyRow`) with one fix line per reason |
| 7 | **Habits, small goals, focused blocks** | Habits survive on size, not motivation; attention is restored by short breaks; a stuck problem often resolves in the "diffuse" mode away from the desk. | Clear, *Atomic Habits* (2018); Fogg, *Tiny Habits* (2019); Cirillo, *The Pomodoro Technique*; Oakley, *A Mind for Numbers* (2014); Newport, *Deep Work* (2016) | Daily goal in three sizes (`Study.GOALS`); streak that forgives one missed day (`Study.streak`); focus timer (`Study.Focus`); the day log in `Store` |

Two more findings shape the structure rather than a single feature:

- **Worked examples fade into practice.** Novices learn most from a fully
  worked example, then a partly worked one, then a problem on their own
  (Sweller 1988; Renkl 2014; Atkinson et al. 2000). The note therefore shows
  the statement and the worked derivation, then exercises with a hint
  behind the Plan step, then the exam questions with no help at all.
- **Dual coding.** A picture and words together are remembered better than
  either alone (Paivio 1971; Mayer, *Multimedia Learning*, 2001). Every
  concept that can be drawn carries a figure (`fig.library.js`), and the
  figure is shown again after a question is answered, when it lands hardest.

## 2. What the app deliberately does not do

Dunlosky, Rawson, Marsh, Nathan and Willingham's 2013 review of ten study
techniques rated **re-reading, highlighting, summarising and keyword
mnemonics** as low utility. So:

- There is no "mark as read" on a chapter that skips the note. Reading is
  level 1 and nothing more; a note has to be recalled to count for anything.
- The proof of a result is optional. It feeds the reel, but it does not gate
  a level, because for an SSLC learner the exercise is the evidence.
- Nothing is revealed before an attempt. "Show answer" is always a recorded
  miss.
- The reel never shows how many cards are left. A counter turns a reel into
  a list; the next card is supposed to arrive, not be counted down to.
- There is no cramming mode. Exam mode raises the daily goal; it does not
  remove the spacing.

## 3. Subject by subject

The app is mathematics-only today. The method page (`view.method.js`) still
covers every SSLC subject, because the same learner sits all of them and the
research on each is settled enough to state.

**Mathematics.** Problems, not reading (Pólya, *How to Solve It*, 1945: the
four steps are the exercise scaffold in the note). Worked example, then
faded practice, then mixed practice (Sweller; Renkl; Rohrer). A mistake log
with the *reason*. Formula recall by writing from memory, because in the
SSLC scheme the formula line carries its own mark. Geometry: draw it every
time. Mistakes as the mechanism of learning, not a verdict on ability
(Boaler, *Mathematical Mindsets*, 2016; Dweck, *Mindset*, 2006).

**Physics.** Concept before formula (Hewitt, *Conceptual Physics*). Draw
before calculating: ray, circuit and force diagrams (dual coding). Units on
every line as a five-second method check. Derive each formula once by hand.
Numericals mixed across chapters.

**Chemistry.** Two layers that need two methods (Johnstone 1991): the
vocabulary layer (symbols, valencies, formulae) on spaced cards; the reasoning
layer (why a reaction goes, what you would observe) as stories with
conditions. Balancing by doing. Periodic trends instead of one element at a
time. Mole numericals as maths problems.

**Biology.** Diagrams drawn and labelled from memory (Paivio; Mayer).
Processes as numbered sequences said aloud. Concept maps drawn by the learner
(Novak & Cañas 2008). Terms on spaced cards with the *function* on the back.
"Why" asked of every fact (elaborative interrogation).

**Social Science.** Timelines with cause and effect as arrows. Outline maps
marked from memory weekly. Answers in points, practised under time. Dates and
definitions on spaced cards; the narrative in the learner's own words, because
memory is built for stories (Willingham, *Why Don't Students Like School?*,
2009).

**Languages (Malayalam, English, Hindi).** Daily reading at a level mostly
understood (Krashen, *The Input Hypothesis*, 1985). Vocabulary in the learner's
own sentences on spaced cards; six spaced encounters (Nation, *Learning
Vocabulary in Another Language*, 2001). Exam formats practised three times
under time and checked. Free recall of a lesson's story aloud. Grammar from
examples first.

## 4. The exam itself

The Kerala SSLC mathematics paper is 80 marks written plus 20 internal, with
2 hours 30 minutes of writing after a 15-minute cool-off reading period. The
2026 paper had 29 questions in four bands (2, 3, 4 and 5 marks) with internal
choice. Marks are awarded per step. There is no negative marking.
(Sources: Kerala Pareeksha Bhavan pattern as reported by
[CollegeDekho](https://www.collegedekho.com/kerala-sslc-exam-exam-pattern-brd),
[Shiksha](https://www.shiksha.com/boards/kerala-sslc-board-pattern) and the
[Careers360 2026 maths paper analysis](https://school.careers360.com/boards/kerala-pareeksha-bhavan/kerala-sslc-maths-question-paper-2026).)

What follows from that, and is written into the app:

- Pace under two minutes per mark, leaving ten minutes to check
  (`Study.blueprint()`, the exam card on Today).
- Use the cool-off to read every question and plan the order.
- Attempt everything; a formula and a first line earn part marks.
- The last week is past papers under the clock; the last night is sleep
  (Walker, *Why We Sleep*, 2017, on consolidation during sleep).

## 5. Bibliography

- Atkinson, R. K., Derry, S. J., Renkl, A. & Wortham, D. (2000). Learning from examples. *Review of Educational Research*, 70(2).
- Bjork, E. L. & Bjork, R. A. (2011). Making things hard on yourself, but in a good way. In *Psychology and the Real World*.
- Bjork, R. A., Dunlosky, J. & Kornell, N. (2013). Self-regulated learning: beliefs, techniques, and illusions. *Annual Review of Psychology*, 64.
- Boaler, J. (2016). *Mathematical Mindsets*. Jossey-Bass.
- Brown, P. C., Roediger, H. L. & McDaniel, M. A. (2014). *Make It Stick*. Harvard University Press.
- Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T. & Rohrer, D. (2006). Distributed practice in verbal recall tasks. *Psychological Bulletin*, 132(3).
- Chi, M. T. H., de Leeuw, N., Chiu, M.-H. & LaVancher, C. (1994). Eliciting self-explanations improves understanding. *Cognitive Science*, 18(3).
- Cirillo, F. (2006). *The Pomodoro Technique*.
- Clear, J. (2018). *Atomic Habits*. Avery.
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J. & Willingham, D. T. (2013). Improving students' learning with effective learning techniques. *Psychological Science in the Public Interest*, 14(1).
- Dunlosky, J. & Rawson, K. A. (2012). Overconfidence produces underachievement. *Learning and Instruction*, 22(4).
- Dweck, C. S. (2006). *Mindset*. Random House.
- Ebbinghaus, H. (1885). *Über das Gedächtnis*.
- Ericsson, K. A., Krampe, R. T. & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. *Psychological Review*, 100(3).
- Ericsson, K. A. & Pool, R. (2016). *Peak*. Houghton Mifflin Harcourt.
- Fogg, B. J. (2019). *Tiny Habits*. Houghton Mifflin Harcourt.
- Hewitt, P. G. *Conceptual Physics*. Pearson.
- Johnstone, A. H. (1991). Why is science difficult to learn? *Journal of Computer Assisted Learning*, 7(2).
- Karpicke, J. D. & Blunt, J. R. (2011). Retrieval practice produces more learning than elaborative studying with concept mapping. *Science*, 331.
- Koriat, A. & Bjork, R. A. (2005). Illusions of competence in monitoring one's knowledge during study. *JEP: Learning, Memory, and Cognition*, 31(2).
- Krashen, S. (1985). *The Input Hypothesis*. Longman.
- Leitner, S. (1972). *So lernt man lernen*.
- Mayer, R. E. (2001). *Multimedia Learning*. Cambridge University Press.
- Metcalfe, J. (2017). Learning from errors. *Annual Review of Psychology*, 68.
- Nation, I. S. P. (2001). *Learning Vocabulary in Another Language*. Cambridge University Press.
- Newport, C. (2016). *Deep Work*. Grand Central.
- Novak, J. D. & Cañas, A. J. (2008). *The Theory Underlying Concept Maps*. IHMC.
- Oakley, B. (2014). *A Mind for Numbers*. Tarcher.
- Paivio, A. (1971). *Imagery and Verbal Processes*. Holt, Rinehart & Winston.
- Pólya, G. (1945). *How to Solve It*. Princeton University Press.
- Renkl, A. (2014). Toward an instructionally oriented theory of example-based learning. *Cognitive Science*, 38(1).
- Roediger, H. L. & Karpicke, J. D. (2006). Test-enhanced learning. *Psychological Science*, 17(3).
- Rohrer, D. & Taylor, K. (2007). The shuffling of mathematics problems improves learning. *Instructional Science*, 35.
- Rohrer, D., Dedrick, R. F. & Stershic, S. (2015). Interleaved practice improves mathematics learning. *Journal of Educational Psychology*, 107(3).
- Sweller, J. (1988). Cognitive load during problem solving. *Cognitive Science*, 12(2).
- Walker, M. (2017). *Why We Sleep*. Scribner.
- Willingham, D. T. (2009). *Why Don't Students Like School?* Jossey-Bass.
- Willingham, D. T. (2023). *Outsmart Your Brain*. Gallery Books.
