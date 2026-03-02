import { Section } from '../types';
import { UNIT_4_4_1 } from './digital_units/unit_4_4_1_hex_fundamentals';
import { UNIT_4_4_2 } from './digital_units/unit_4_4_2_hex_conversions';
import { UNIT_4_4_3 } from './digital_units/unit_4_4_3_other_systems';
import { UNIT_4_4_4 } from './digital_units/unit_4_4_4_exercises';

export const SECTION_4_4_HEXADECIMAL: Section = {
  id: "section-4-4-hexadecimal",
  title: "Section 4.4: Hexadecimal System",
  description: "Base 16 and Octal",
  color: "duo-indigo",
  units: [
    UNIT_4_4_1,
    UNIT_4_4_2,
    UNIT_4_4_3,
    UNIT_4_4_4
  ]
};