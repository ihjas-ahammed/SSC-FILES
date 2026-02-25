import { Section } from '../types';
import { UNIT_1_2_1 } from './unit_1_2_1_the_principle';
import { UNIT_1_2_2 } from './unit_1_2_2_induction_examples';
import { UNIT_1_2_3 } from './unit_1_2_3_arithmetic_exercises';
import { UNIT_1_2_4 } from './unit_1_2_4_inequality_exercises';

export const SECTION_1_2_INDUCTION: Section = {
  id: "section-1-2",
  title: "Section 1.2: Mathematical Induction",
  description: "The Well-Ordering Property and the Principle of Mathematical Induction.",
  color: "duo-green",
  units: [
    UNIT_1_2_1,
    UNIT_1_2_2,
    UNIT_1_2_3,
    UNIT_1_2_4
  ]
};