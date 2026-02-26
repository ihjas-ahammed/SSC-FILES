import { Section } from '../types';
import { UNIT_3_5_1 } from './unit_3_5_1_cauchy_theory';
import { UNIT_3_5_2 } from './unit_3_5_2_cauchy_exercises';
import { UNIT_3_5_3 } from './unit_3_5_3_contractive_exercises';
import { UNIT_3_5_4 } from './unit_3_5_4_section_summary';

export const SECTION_3_5_CAUCHY_CRITERION: Section = {
  id: "section-3-5",
  title: "Section 3.5: Cauchy Criterion",
  description: "Cauchy sequences and completeness.",
  color: "duo-blue",
  units: [
    UNIT_3_5_1,
    UNIT_3_5_2,
    UNIT_3_5_3,
    UNIT_3_5_4
  ]
};