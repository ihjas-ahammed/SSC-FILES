# IIT JAM — Mathematics (MA) question papers

Raw papers behind the Level 4 `PYQ` bank. See `HOOK_agy.md` → "Level 4 — the JAM past
papers".

**Twelve of these twenty papers have been extracted** into `data/pyq.ra1.js` and
`data/pyq.ra2.js` — 226 questions. The table below marks which. The remaining eight are
AGY's to do, and `HOOK_agy.md` says what is involved in each.

Downloaded 2026-09-19; extracted 2026-09-19. Filenames are `jam-<year>-ma.pdf`, and `jam-<year>-ma-key.pdf`
where an answer key was published separately.

## What is here

`extracted` counts the real-analysis questions pulled into `PYQ`; `—` means the paper is
downloaded but nobody has been through it yet.

| year | paper | key | extracted | pages | text layer | source |
| --- | --- | --- | --- | --- | --- | --- |
| 2026 | ✓ | ✓ | **19** | 33 / 2 | yes | jam2026.iitb.ac.in `files/MA_QP.pdf`, `files/MA_AK.pdf` |
| 2025 | ✓ | — | **21** | 45 | yes | jam2026.iitb.ac.in `files/MA2025.pdf` |
| 2024 | ✓ | — | **20** | 43 | yes | jam2026.iitb.ac.in `files/MA2024.pdf` |
| 2023 | ✓ | — | **19** | 24 | yes | jam2026.iitb.ac.in `files/MA2023.pdf` |
| 2022 | ✓ | — | **16** | 42 | yes | jam2026.iitb.ac.in `files/MA2022.pdf` |
| 2021 | ✓ | — | **19** | 18 | yes | jam2026.iitb.ac.in `files/MA2021.pdf` |
| 2020 | ✓ | — | **19** | 17 | yes | jam2026.iitb.ac.in `files/MA2020.pdf` |
| 2019 | ✓ | — | **19** | 13 | yes | jam2026.iitb.ac.in `files/MA2019.pdf` |
| 2018 | ✓ | — | **16** | 15 | yes | jam2026.iitb.ac.in `files/MA2018.pdf` |
| 2017 | ✓ | ✓ | **23** | 12 / 13 | **paper is a scan** | paper: people.iith.ac.in (see below); key: jam2026.iitb.ac.in `files/MA2017.pdf` |
| 2016 | ✓ | **in paper** | **15** | 13 | yes | jam2026.iitb.ac.in `files/MA2016.pdf` |
| 2015 | ✓ | — | **20** | 16 | yes | jam2026.iitb.ac.in `files/MA2015.pdf` |
| 2014 | ✓ | — | — | 34 | **scan** | jam2026.iitb.ac.in `files/MA2014.pdf` |
| 2013 | ✓ | — | — | 35 | **scan** | jam2026.iitb.ac.in `files/MA2013.pdf` |
| 2012 | ✓ | — | — | 40 | yes | jam2026.iitb.ac.in `files/MA2012.pdf` |
| 2011 | ✓ | — | — | 43 | yes | people.iith.ac.in `…/Questions/Jam/Jam-2011.pdf` |
| 2010 | ✓ | — | — | 42 | **scan** | people.iith.ac.in `…/Questions/Jam/Jam-2010.pdf` |
| 2009 | ✓ | — | — | 19 | **scan** | people.iith.ac.in `…/Questions/Jam/Jam-2009.pdf` |
| 2008 | ✓ | — | — | 38 | **scan** | people.iith.ac.in `…/Questions/Jam/Jam-2008.pdf` |
| 2007 | ✓ | — | — | 24 | **scan** | people.iith.ac.in `…/Questions/Jam/Jam-2007.pdf` |
| 2006 | — | — | — | — | — | **NOT FOUND** |
| 2005 | — | — | — | — | — | **NOT FOUND** |

Twenty papers, 2007–2026; **twelve extracted, 226 questions**. **Three official answer
keys**: 2017 and 2026 as separate
files, and 2016 as the last page of its own question paper — a key table appended to the
paper itself, which is easy to miss and is the only reason 2016's answers could be
verified.

## Sources, and how much to trust each

**`jam2026.iitb.ac.in`** — IIT Bombay, the JAM 2026 organising institute, and the current
official archive. `oldQP.html` lists MA 2012–2025; `qpnkey26.html` carries the 2026 paper
and key. These are the official documents.

The same files are mirrored, byte for byte, at `jam.iitm.ac.in/oldqp/MA/MA/MA<year>.pdf`,
`jam.iitr.ac.in/assets/JAMPreviousYearsQuestionPapers/JAM<year>/QPs/MA<year>.pdf` and
`jam2025.iitd.ac.in/jam2025/oldqp/MA<year>.pdf`. All four official archives start at
**2012** — nothing older is published by any organising institute.

**`people.iith.ac.in/rajeshkannan/Questions/Jam/`** — a faculty page at IIT Hyderabad. An
`.ac.in` domain, but a personal collection rather than a JAM organiser, so treat it as an
**unofficial host of genuine documents**: the 2007–2011 files are scans of the real
question-cum-answer booklets (several still carry a candidate's handwriting in the
margins, which is how you can tell they were scanned from used booklets, not reprinted).
The printed questions are intact and legible. Where a 2007–2011 question ends up in
`data/pyq.*.js`, its `provenance` should say the copy came from this mirror.

## Two traps worth knowing before you open anything

1. **`MA2017.pdf` on every official archive is the ANSWER KEY, not the question paper.**
   All four organising-institute archives serve the same mislabelled file. The real 2017
   paper is not published by any of them; the copy here (12 pages, scanned, footer
   `n/13`) came from the IIT Hyderabad page. It is saved as `jam-2017-ma.pdf`, and the
   official file is saved under its true name, `jam-2017-ma-key.pdf`.
2. **2007, 2008, 2009, 2010, 2013, 2014 and 2017 have no text layer.** `pdftotext`
   returns nothing for them — they are images. They have to be read, not parsed. 2007 and
   2008 are also large (19 MB and 11 MB) because they are high-resolution scans.

## Not found

**2005 and 2006 are not online anywhere Claude could verify.** No organising institute
publishes anything before 2012, and the IIT Hyderabad mirror starts at 2007. Coaching
sites advertise "2005–2025" downloads, but the ones checked either re-type the questions
without a source or gate the file behind a sign-up, and a re-typed paper is not a paper —
a transcription error in a past question is worse than a missing one, because it is
invisible. They are recorded here as missing rather than filled with a guess.

If a scan of 2005 or 2006 turns up later, drop it in as `jam-2005-ma.pdf` and add the row
above.

## A note on repository size

These PDFs are 51 MB in total, most of it the 2007 and 2008 scans. They are committed
because the whole point is that AGY does not have to go looking for them, but if the repo
gets heavy, the two big scans are the first things to move out.
