import { Section } from '../types';
import { UNIT_4_2_1 } from './unit_4_2_1_limit_theorems';
import { UNIT_4_2_2 } from './unit_4_2_2_theorems_exercises';
import { UNIT_4_3_1 } from './unit_4_3_1_extensions_theory';
import { UNIT_4_3_2 } from './unit_4_3_2_infinity_theory';
import { UNIT_4_3_3 } from './unit_4_3_3_extension_exercises';

export const SECTION_4_2_THEOREMS_EXTENSIONS: Section = {
  id: "section-4-2",
  title: "Section 4.2/4.3: Theorems and Extensions",
  description: "Limit theorems, algebraic properties, and the Squeeze Theorem.",
  color: "duo-red",
  units: [
    UNIT_4_2_1,
    UNIT_4_2_2,
    UNIT_4_3_1,
    UNIT_4_3_2,
    UNIT_4_3_3
  ]
};