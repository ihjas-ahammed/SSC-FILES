import { Section } from '../types';
import { UNIT_2_1_1 } from './unit_2_1_1_field_axioms';
import { UNIT_2_1_2 } from './unit_2_1_2_order_inequalities';
import { UNIT_2_1_3 } from './unit_2_1_3_algebraic_exercises';
import { UNIT_2_1_4 } from './unit_2_1_4_order_exercises';
import { UNIT_2_1_5 } from './unit_2_1_5_section_summary';

export const SECTION_2_1_ALGEBRAIC_ORDER: Section = {
  id: "section-2-1",
  title: "Section 2.1: Algebraic and Order Properties",
  description: "The Field Axioms, Positivity, and rules of Inequalities in R.",
  color: "duo-blue",
  units: [
    UNIT_2_1_1,
    UNIT_2_1_2,
    UNIT_2_1_3,
    UNIT_2_1_4,
    UNIT_2_1_5
  ]
};