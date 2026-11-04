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
  'c.1.1.1': ['c.1.1.1_optical_path'],
  'c.1.1.2': ['c.1.1.2_reflection_image'],
  'c.1.1.3': ['c.1.1.3_snell_crossing'],
  'c.1.1.4': ['c.1.1.4_parabola_focus'],
  'c.1.2.2': ['c.1.2.2_spherical_refraction'],
  'c.1.2.3': ['c.1.2.3_surface_foci'],
  'c.1.2.4': ['c.1.2.4_spherical_mirror'],
  'c.1.3.1': ['c.1.3.1_thin_lens_surfaces'],
  'c.1.3.3': ['c.1.3.3_two_lenses'],
  'c.1.3.4': ['c.1.3.4_three_rays'],
  'c.1.4.1': ['c.1.4.1_newton_distances'],
  'c.2.1.1': ['c.2.1.1_phasor_addition'],
  'c.2.1.3': ['c.2.1.3_phasor_polygon'],
  'c.2.2.2': ['c.2.2.2_wave_train'],
  'c.2.3.1': ['c.2.3.1_young_geometry'],
  'c.2.3.2': ['c.2.3.2_young_intensity'],
  'c.2.3.3': ['c.2.3.3_hyperbolic_fringes'],
  'c.2.3.4': ['c.2.3.4_plate_shift'],
  'c.2.4.1': ['c.2.4.1_fresnel_mirrors'],
  'c.2.4.2': ['c.2.4.2_biprism'],
  'c.2.5.2': ['c.2.5.2_lloyds_mirror'],
  'c.2.6.1': ['c.2.6.1_thin_film_rays'],
  'c.2.6.2': ['c.2.6.2_ar_coating'],
  'c.2.7.1': ['c.2.7.1_wedge'],
  'c.2.7.3': ['c.2.7.3_newton_rings'],
  'c.2.7.4': ['c.2.7.4_michelson'],
  'c.3.1.2': ['c.3.1.2_single_slit_setup'],
  'c.3.1.3': ['c.3.1.3_single_slit_intensity'],
  'c.3.2.1': ['c.3.2.1_double_slit_envelope'],
  'c.3.3.1': ['c.3.3.1_nslit_patterns'],
  'c.3.3.2': ['c.3.3.2_grating_orders'],
  'c.3.4.1': ['c.3.4.1_half_period_zones'],
  'c.3.4.2': ['c.3.4.2_zone_amplitude_spiral'],
  'c.3.4.3': ['c.3.4.3_zone_plate'],
  'c.3.5.1': ['c.3.5.1_cornu_spiral'],
  'c.3.5.2': ['c.3.5.2_straight_edge_intensity'],
  'c.4.1.1': ['c.4.1.1_polarisation_states'],
  'c.4.1.2': ['c.4.1.2_polarisation_ellipses'],
  'c.4.2.1': ['c.4.2.1_brewster'],
  'c.4.2.3': ['c.4.2.3_nicol_prism'],
  'c.4.3.1': ['c.4.3.1_malus_law', 'c.4.3.1_polariser_analyser'],
  'c.4.4.1': ['c.4.4.1_double_refraction'],
  'c.4.4.2': ['c.4.4.2_huygens_uniaxial'],
  'c.4.5.1': ['c.4.5.1_wave_plate']
};

/* The lecture sheets: whole-topic posters rather than one-result figures.
   They belong to no single concept and are offered as a set. */
const DIAGRAM_SHEETS = [

];
