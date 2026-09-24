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
  'c.11.1.7': ['c.11.1.7_open_vs_closed_sets'],
  'c.11.2.5': ['c.11.2.5_heine_borel_theorem'],
  'c.11.2.6': ['c.11.2.6_topological_bolzano_weierstrass'],
  'c.2.3.6': ['c.2.3.6_completeness_supremum_property'],
  'c.2.4.3': ['c.2.4.3_archimedean_property'],
  'c.2.4.9': ['c.2.4.9_density_rationals_irrationals'],
  'c.2.5.1': ['c.2.5.1_characterization_of_intervals'],
  'c.2.5.2': ['c.2.5.2_nested_intervals_property'],
  'c.2.5.3': ['c.2.5.3_cantor_ternary_set'],
  'c.3.2.7': ['c.3.2.7_squeeze_theorem_sequences'],
  'c.3.3.2': ['c.3.3.2_monotone_convergence_theorem'],
  'c.3.4.8': ['c.3.4.8_bolzano_weierstrass_theorem'],
  'c.3.5.5': ['c.3.5.5_cauchy_convergence_criterion'],
  'c.4.1.4': ['c.4.1.4_epsilon_delta_limit_definition'],
  'c.4.1.8': ['c.4.1.8_sequential_criterion_for_limits'],
  'c.5.1.1': ['c.5.1.1_continuity_at_a_point'],
  'c.5.1.3': ['c.5.1.3_sequential_criterion_for_continuity'],
  'c.5.1.6g': ['c.5.1.6g_dirichlet_function'],
  'c.5.1.6h': ['c.5.1.6h_thomae_popcorn_function'],
  'c.5.1.7': ['c.5.1.7_continuous_extension_removable_discontinuity'],
  'c.5.1.8': ['c.5.1.8_oscillatory_discontinuity_sin_1_over_x', 'c.5.1.8_squeezed_oscillation_x_sin_1_over_x'],
  'c.5.3.10': ['c.5.3.10_connectedness_interval_mapping', 'c.5.3.10_preservation_of_intervals_theorem'],
  'c.5.3.2': ['c.5.3.2_boundedness_theorem', 'c.5.3.2_failure_boundedness_open_interval'],
  'c.5.3.4': ['c.5.3.4_failure_extremum_open_interval', 'c.5.3.4_maximum_minimum_theorem'],
  'c.5.3.5': ['c.5.3.5_location_of_roots_theorem'],
  'c.5.3.6': ['c.5.3.6_bisection_method'],
  'c.5.3.7': ['c.5.3.7_bolzano_intermediate_value_theorem'],
  'c.5.3.9': ['c.5.3.9_continuous_image_of_compact_interval'],
  'c.5.4.10': ['c.5.4.10_step_function_approximation'],
  'c.5.4.13': ['c.5.4.13_piecewise_linear_approximation'],
  'c.5.4.14': ['c.5.4.14_weierstrass_approximation_theorem'],
  'c.5.4.1': ['c.5.4.1_uniform_continuity'],
  'c.5.4.2': ['c.5.4.2_nonuniform_continuity_criterion'],
  'c.5.4.3': ['c.5.4.3_uniform_continuity_theorem_heine_cantor'],
  'c.5.4.5': ['c.5.4.5_lipschitz_condition'],
  'c.5.4.7': ['c.5.4.7_preservation_of_cauchy_sequences'],
  'c.5.4.8': ['c.5.4.8_continuous_extension_theorem'],
  'c.5.5.5': ['c.5.5.5_cousin_lemma_gauge_partition'],
  'c.5.6.3': ['c.5.6.3_monotone_jump_discontinuities'],
  'c.5.6.4': ['c.5.6.4_countability_of_discontinuities'],
  'c.5.6.5': ['c.5.6.5_continuous_inverse_theorem'],
  'c.6.1.1': ['c.6.1.1_derivative_as_tangent_limit'],
  'c.6.1.5': ['c.6.1.5_caratheodory_theorem'],
  'c.6.2.12': ['c.6.2.12_darboux_theorem_derivatives'],
  'c.6.2.1': ['c.6.2.1_interior_extremum_fermat_theorem'],
  'c.6.2.3': ['c.6.2.3_rolle_theorem'],
  'c.6.2.4': ['c.6.2.4_lagrange_mean_value_theorem'],
  'c.6.3.2': ['c.6.3.2_cauchy_mean_value_theorem'],
  'c.6.3.3': ['c.6.3.3_lhopital_rule'],
  'c.6.4.1': ['c.6.4.1_taylor_theorem'],
  'c.7.1.1': ['c.7.1.1_riemann_sum_tagged_partition'],
  'c.7.2.9': ['c.7.2.9_additivity_of_integral'],
  'c.7.3.12': ['c.7.3.12_lebesgue_integrability_criterion'],
  'c.7.3.17': ['c.7.3.17_integration_by_parts'],
  'c.7.3.1': ['c.7.3.1_fundamental_theorem_of_calculus_form_1'],
  'c.7.3.5': ['c.7.3.5_fundamental_theorem_of_calculus_form_2'],
  'c.7.3.8': ['c.7.3.8_integration_by_substitution'],
  'c.7.4.1': ['c.7.4.1_darboux_upper_and_lower_sums'],
  'c.7.4.8': ['c.7.4.8_darboux_integrability_criterion'],
  'c.8.1.1': ['c.8.1.1_pointwise_vs_uniform_convergence'],
  'c.8.1.3': ['c.8.1.3_uniform_convergence_envelope'],
  'c.8.2.2': ['c.8.2.2_uniform_limit_continuity_theorem'],
  'c.8.2.4': ['c.8.2.4_non_interchange_limit_integral'],
  'c.9.1.5': ['c.9.1.5_riemann_rearrangement_theorem'],
  'c.9.2.6': ['c.9.2.6_integral_test_for_series'],
  'c.9.3.2': ['c.9.3.2_alternating_series_test_leibniz'],
  'c.9.4.6': ['c.9.4.6_weierstrass_m_test'],
  'c.9.4.9': ['c.9.4.9_radius_of_convergence_cauchy_hadamard']
};

/* The lecture sheets: whole-topic posters rather than one-result figures.
   They belong to no single concept and are offered as a set. */
const DIAGRAM_SHEETS = [
  'sheet_01_reals_and_sequences',
  'sheet_02_limits_and_continuity_foundations',
  'sheet_03_continuity_on_intervals',
  'sheet_04_uniform_continuity_and_approximations',
  'sheet_05_differentiation_and_mean_value',
  'sheet_06_riemann_and_darboux_integral',
  'sheet_07_sequences_and_series_of_functions',
  'sheet_08_topology_monotone_gauges'
];
