import { Section } from '../types';
import { UNIT_3_3_1 } from './unit_3_3_1_mct_theory';
import { UNIT_3_3_2 } from './unit_3_3_2_monotone_exercises';
import { UNIT_3_3_3 } from './unit_3_3_3_recursive_exercises';

export const SECTION_3_3_MONOTONE_SEQUENCES: Section = {
  id: "section-3-3",
  title: "Section 3.3: Monotone Sequences",
  description: "Convergence of monotone sequences.",
  color: "duo-green",
  units: [
    UNIT_3_3_1,
    UNIT_3_3_2,
    UNIT_3_3_3
  ]
};