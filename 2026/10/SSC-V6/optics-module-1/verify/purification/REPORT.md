# Optics data purification: modules 1–4

Reviewed the syllabus and all 22 unit topics in order, using the supplied unit
PDFs and the complete on-disk Ajoy Ghatak, *Optics*, sixth edition. The syllabus
was checked on its detailed-content pages, including the prescribed sections.
The main syllabus deck now has 243 cards, including 32 derivation cards.
136 cards were revised or added; 107 were retained after review. One new card
introduces elliptical polarisation before the later wave-plate topics use it.

The active data is `study-match/data/data.json`; the rebuilt app is
`study-match/dist/study-match.html`, with its module selector at
`study-match/dist/index.html`. Earlier root-level JSONs, module import fragments
and verification ZIPs are historical inputs, not the build's active data.

## Review record

`card-audit.csv` records every syllabus card in module/unit/card order, its
review outcome, changed fields and source. `topic-audit.json` records counts
per topic. `data.before.json` is the exact snapshot from before this review.

## Changes that affect learning

- Explained unfamiliar ideas and symbols before relying on them: optical path,
  stationary variations, signs, focal distances, phase, phasors, wave normals,
  electric displacement, and polarisation shapes.
- Added complete playable derivations for reflection from Fermat's principle,
  unequal surrounding-media focal lengths, and Michelson mirror travel and
  close-wavelength measurements. Expanded skipped algebra in magnification,
  wave superposition, hyperbolic fringes, intensity averaging and straight-edge
  diffraction. Extended the wave-plate derivation through the half-wave case.
- Distinguished exact relations from small-angle, thin-film and zone-sum
  approximations. Stated equal-amplitude, coherent, normal-incidence and
  wavelength conditions where the results require them.
- Corrected the visible-light wavelength conversion, subtraction signs rendered
  as “~”, mica thickness arithmetic, the biprism fringe width, single-slit side
  peak heights, the two-slit example's factor-of-ten fringe-width error, the
  exact coating reflectivity, and the ideal grating line-count threshold.
- Replaced misleading drawings with labelled scientific constructions or plots
  sampled from their formulas. Corrections include the Michelson compensator
  arm, the ordinary ray at normal incidence, normal versus energy-ray direction,
  both sides of a grating spectrum, nodal curves, Fresnel integrals, and signed
  magnification geometry.
- Added `verifiedDiagram` to keep reviewed artwork in the built deck, rather
  than replacing it with an older generated illustration. `showAllLabels`
  preserves the labels of reviewed constructions when the prose uses equivalent
  mathematical notation. The validator now accepts declarative figures on
  intuition cards, which the renderer already supports, and recognises
  approximation/inequality/limit signs in derivation lines.

Representative numerical corrections:

| Calculation | Corrected value |
|---|---:|
| Typical visible wavelength, 500 nm | 0.00005 cm |
| Mica thickness, 0.1 × 0.2 / (50 × 0.58) cm | 6.90 μm |
| Biprism width, λ = 6×10⁻⁵ cm, D = 50 cm, d = 0.0116 cm | 0.259 cm |
| Single-slit first and second side peaks | 4.719% and 1.648% of the central intensity |
| Double-slit width at D = 15 ft | 0.413 cm |
| Exact MgF₂ quarter-wave reflectivity, n_f = 1.38 and n_g = 1.5 | 1.411% |
| Minimum ideal first-order grating lines for 589 nm / 0.6 nm | 982 |

## Verification

- `python3 study-match/build.py --check --strict`: zero errors, zero warnings,
  zero automatic content repairs.
- `python3 study-match/build.py --strict`: rebuilt both current HTML files.
- `python3 verify/purification/check.py`: independently recalculated all 26
  numerical syllabus quiz answers and the corrected numerical examples;
  checked every original progress ID, the unchanged 177 exam-practice sheets,
  and exact preservation of all 53 derivations in the packaged full course.
- `node --check study-match/src/components/02-diagram.js`: passed.
- Rendered 47 unique reviewed scientific figures in light and dark versions;
  inspected the construction galleries and corrected clipping, label collisions,
  geometry and plot normalisation. `rendered/index.json` maps each figure back
  to its card. These are direct geometry renders, not browser screenshots.

The 1,714 original progress IDs remain unchanged and in the same relative order.
The new ellipse card has its own explicit ID. The exam-practice bank was retained
as it was; this review covers the four syllabus modules.

## Source and validation limitations

The syllabus prescribes Subrahmanyam, Lal and Avadhanulu (Book 2) for module 4.
That book is not available on disk. Module 4 was checked against the supplied
Ghatak chapter-22 unit PDFs and the full Ghatak text, with the substitution
explicitly recorded in the source fields. No verification against the missing
Book 2 is claimed.

The full book supplied several pages omitted from the original cuts: §4.1,
the start of coherence, introductory diffraction material, and the continuation
of the oblique Huygens construction. Those source supplements are identified
in the topic source fields.

Interactive browser QA could not run: the sandbox blocked launching Chrome,
and the connected browser could not load its request-header policy. Static
figure rendering, numerical checks, data validation and build checks passed;
interactive playback and final phone layout were not browser-verified.

The authoring scripts in this directory record the applied editing stages.
They are not a repeatable migration pipeline. The safe verification entrypoints
are `check.py` and `render_figures.py`.
