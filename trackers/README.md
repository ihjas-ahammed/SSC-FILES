# Progress trackers

Self-contained study trackers — one HTML file per exam, no build step, no server.
Open a file in any browser, or use the hosted copies.

| File | Exam | Topics | Effort points |
|---|---|---|---|
| `progress-ldc.html` | Kerala PSC LDC (Mains) | 225 | 1,151 |
| `progress-jam-ma.html` | IIT JAM — Mathematics | 55 | 457 |
| `progress-jam-phy.html` | IIT JAM — Physics | 117 | 710 |
| `progress-cusat-ma.html` | CUSAT CAT — M.Sc. Mathematics | 85 | 622 |
| `progress-cusat-py.html` | CUSAT CAT — M.Sc. Physics | 116 | 690 |

## How the effort points work

Every topic carries an effort-point (EP) weight. The starting assumption is 1 EP ≈ 1 hour.
When a topic is ticked off *and* the real hours are logged, the tracker recalculates a
personal rate:

    rate = (45 + hours logged) / (45 + EP completed)

The `45` anchors the estimate so one unusual topic can't swing the whole projection; the
rate converges on the true pace as evidence accumulates. Every remaining prediction
rescales from it. Topics marked done without logged hours still count as progress but are
excluded from the calibration.

There is also a daily-pace field: enter an average EP/day and the page projects a finish
date, then reports the pace actually measured over the last four weeks alongside it.

## Sync

Progress is stored per-device and mirrors to a shared key. Set the same sync ID on two
devices and progress follows. Each page uses its own namespace, so trackers never
overwrite one another.

## Syllabus sources

* LDC — weighted by the official mark distribution (GK 50, Current Affairs 20,
  Maths 10, English 10, Malayalam 10).
* JAM MA / PH — the official IIT JAM syllabus.
* CUSAT — CUSAT publishes no detailed syllabus. The 2026 prospectus (included here)
  defines test codes 612 and 613 only as *"Mathematics / Physics at the Graduate level"*,
  150 objective questions. The scope used is therefore standard B.Sc. coverage: the JAM
  syllabus plus the further topics a B.Sc. carries. A well-founded map, not an official one.
