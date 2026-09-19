/* ══════════════════════════════════════════════════════════════════════════
   The rendered diagram library.  GENERATED — do not hand-edit.

   `diagrams/` holds a light and a dark PNG for dozens of results, drawn offline
   and named after the concept they belong to. The app used to draw eleven
   figures of its own and ignore all of them, so a learner opening Heine–Borel
   got no picture even though one was sitting in the repository.

   This file is the index: concept id -> the diagram basenames filed under it.
   The way to add a picture is to drop the light/dark pair into `diagrams/` and
   run `python3 tools/gen_diagrams.py` — never to hand-edit a path into a
   concept.

   A concept may still override the index with `img: ['<basename>', …]`, which
   is how a node points at a diagram filed under a different id — the mock pool
   does exactly that, because its ids are `m.*` and the pictures are `c.*`.

   comp.figure.js swaps between the pair on `data-theme`, so changing the theme
   changes the diagram with no reload.
   ══════════════════════════════════════════════════════════════════════════ */

const DIAGRAM_MAP = {
  'c.1.2.1': ['c.1.2.1_born_probability_density'],
  'c.1.2.3': ['c.1.2.3_wave_function_collapse'],
  'c.1.3.3': ['c.1.3.3_variance_standard_deviation'],
  'c.1.4.1': ['c.1.4.1_triangular_wave_packet'],
  'c.1.4.2': ['c.1.4.2_preservation_of_normalization'],
  'c.1.5.1': ['c.1.5.1_exponential_wave_function'],
  'c.1.5.4': ['c.1.5.4_probability_current_continuity'],
  'c.1.6.1': ['c.1.6.1_heisenberg_uncertainty_principle']
};

/* The lecture sheets: whole-topic posters rather than one-result figures.
   They belong to no single concept and are offered as a set. */
const DIAGRAM_SHEETS = [

];
