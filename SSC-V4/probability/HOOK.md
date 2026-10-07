# Probability Study System (`probability`)

Built on the shared engine. **Read [`../flow-library/HOOK.md`](../flow-library/HOOK.md)
first**: it says what belongs here and what belongs in flow-library.

## What is unique to this project (and only here)

- `app/index.html`: page head (title, icon, manifest, fonts) and the script list
- `app/project/project.js`: `PROJECT` (storage `ssc4.prob.v1`, sync `ssc4_prob_v1`)
- `app/project/theme.css`: this app's look
- `app/project/*.js`: any extra behaviour, registered as `PROJECT.hooks`
- `app/sources.js`, `data/`, `diagrams/`: the content

Never copy a flow-library file in here to change it. Add a hook or a theme rule.

## Build, check, publish

    python3 build.py --mock        # build/test/index.html (shared mock pool)
    python3 build.py               # build/index.html (the `live` pool)
    node tools/check_tex.js        # TeX gate, 0 errors before any publish
    python3 tools/gen_diagrams.py  # re-index diagrams/ into app/project/fig.diagrams.js

To publish, add a block to `SSC-V2/SEM5/PHY/apps/tools/deploy.sh` (copy the Quantum
Mechanics one).

## Chapter workflow and authoring

- `python tools/split_book.py /path/to/Ross-10e.pdf` reproduces local chapter PDFs.
- `python tools/refresh.py` integrates chapters with all three tracked data files;
  missing chapters stay visibly pending. No mock lessons enter the live seam.
- `node tools/audit.js` checks ids, references, Recall cards, marking and escaping.
- `node tools/check_tex.js` is the shared TeX gate.
- `python3 authoring/proofs_update2.py` restores the explained proof/derivation
  ladders for all 161 concepts after any generator that rewrites concept files.
  See `sources/PROOFS_UPDATE2_REVIEW.md` for coverage, mathematical corrections,
  prerequisite limits, and validation.
- `python tools/coverage.py` regenerates the public coverage/reading guide.
- `python build.py` builds the current live checkpoint.
- `sources/coverage-chNN.md` distinguishes GATE topic coverage from omitted source
  examples/exercises. Preserve these limits in claims made about the course.
- Commit each reviewed chapter; publish with the repository's full-site deploy script.

The PDF/text splits are local and ignored by git. The manifest and original lessons
are tracked; the public guide uses section/page references for exact reading.
The account's session usage percentage is not exposed, so the requested 90% cutoff
cannot be measured here. Chapter commits plus this workflow are the resume boundary.
