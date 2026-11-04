import { Section } from '../types';
import { UNIT_4_1_1 } from './unit_4_1_1_limit_theory';
import { UNIT_4_1_2 } from './unit_4_1_2_delta_epsilon_exercises';
import { UNIT_4_1_3 } from './unit_4_1_3_divergence_exercises';

export const SECTION_4_1_LIMITS_OF_FUNCTIONS: Section = {
  id: "section-4-1",
  title: "Section 4.1: Limits of Functions",
  description: "Cluster points, the Epsilon-Delta definition, and sequential criteria.",
  color: "duo-green",
  units: [
    UNIT_4_1_1,
    UNIT_4_1_2,
    UNIT_4_1_3
  ]
};