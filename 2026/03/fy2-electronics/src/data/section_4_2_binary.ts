import { Section } from '../types';
import { UNIT_4_2_1 } from './digital_units/unit_4_2_1_system_defs';
import { UNIT_4_2_2 } from './digital_units/unit_4_2_2_positional';
import { UNIT_4_2_3 } from './digital_units/unit_4_2_3_structure';
import { UNIT_4_2_4 } from './digital_units/unit_4_2_4_exercises';

export const SECTION_4_2_BINARY: Section = {
  id: "section-4-2-binary",
  title: "Section 4.2: Binary Number System",
  description: "The language of computers",
  color: "duo-indigo",
  units: [
    UNIT_4_2_1,
    UNIT_4_2_2,
    UNIT_4_2_3,
    UNIT_4_2_4
  ]
};