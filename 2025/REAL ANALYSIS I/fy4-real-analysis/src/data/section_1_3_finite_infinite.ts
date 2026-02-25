import { Section } from '../types';
import { UNIT_1_3_1 } from './unit_1_3_1_cardinality_theory';
import { UNIT_1_3_2 } from './unit_1_3_2_countability_theory';
import { UNIT_1_3_3 } from './unit_1_3_3_mapping_exercises';
import { UNIT_1_3_4 } from './unit_1_3_4_countability_exercises';

export const SECTION_1_3_FINITE_INFINITE: Section = {
  id: "section-1-3",
  title: "Section 1.3: Finite and Infinite Sets",
  description: "Understanding Cardinality, Countability, and Cantor's Diagonalization.",
  color: "duo-violet",
  units: [
    UNIT_1_3_1,
    UNIT_1_3_2,
    UNIT_1_3_3,
    UNIT_1_3_4
  ]
};