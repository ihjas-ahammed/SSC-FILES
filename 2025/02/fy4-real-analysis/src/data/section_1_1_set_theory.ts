import { Section } from '../types';
import { UNIT_1_1_1 } from './unit_1_1_1_set_fundamentals';
import { UNIT_1_1_2 } from './unit_1_1_2_mapping_composition';
import { UNIT_1_1_3 } from './unit_1_1_3_set_exercises';
import { UNIT_1_1_4 } from './unit_1_1_4_index_set_exercises';
import { UNIT_1_1_5 } from './unit_1_1_5_composition_exercises';
import { UNIT_1_1_6 } from './unit_1_1_6_inverse_exercises';
import { UNIT_1_1_7 } from './unit_1_1_7_section_summary';

export const SECTION_1_1_SET_THEORY: Section = {
  id: "section-1-1",
  title: "Section 1.1: Sets and Functions",
  description: "Basic properties of sets, set operations, functions, and composition.",
  color: "duo-blue",
  units: [
    UNIT_1_1_1,
    UNIT_1_1_2,
    UNIT_1_1_3,
    UNIT_1_1_4,
    UNIT_1_1_5,
    UNIT_1_1_6,
    UNIT_1_1_7
  ]
};