import { Section } from '../types';
import { UNIT_1_3_1 } from './chem_units/unit_1_3_1_history';
import { UNIT_1_3_2 } from './chem_units/unit_1_3_2_modern';
import { UNIT_1_3_3 } from './chem_units/unit_1_3_3_blocks';
import { UNIT_1_3_4 } from './chem_units/unit_1_3_4_trends';
import { UNIT_1_3_5 } from './chem_units/unit_1_3_5_exercises_trends';
import { UNIT_1_3_6 } from './chem_units/unit_1_3_6_exercises_properties';

export const SECTION_1_3_PERIODICITY: Section = {
  id: "section-1-3-periodicity",
  title: "Section 1.3: Classification & Periodicity",
  description: "Periodic Table, Trends, and Properties",
  color: "duo-violet",
  units: [
    UNIT_1_3_1,
    UNIT_1_3_2,
    UNIT_1_3_3,
    UNIT_1_3_4,
    UNIT_1_3_5,
    UNIT_1_3_6
  ]
};