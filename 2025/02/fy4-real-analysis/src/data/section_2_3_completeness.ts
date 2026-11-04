import { Section } from '../types';
import { UNIT_2_3_1 } from './unit_2_3_1_suprema_infima';
import { UNIT_2_3_2 } from './unit_2_3_2_completeness_axiom';
import { UNIT_2_3_3 } from './unit_2_3_3_bounds_exercises';
import { UNIT_2_3_4 } from './unit_2_3_4_set_property_exercises';
import { UNIT_2_3_5 } from './unit_2_3_5_section_summary';

export const SECTION_2_3_COMPLETENESS: Section = {
  id: "section-2-3",
  title: "Section 2.3: Completeness Property",
  description: "Suprema, Infima, and the Completeness Axiom of R.",
  color: "duo-orange",
  units: [
    UNIT_2_3_1,
    UNIT_2_3_2,
    UNIT_2_3_3,
    UNIT_2_3_4,
    UNIT_2_3_5
  ]
};