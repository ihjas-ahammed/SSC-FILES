import { Section } from '../types';
import { UNIT_3_4_1 } from './chem_units/unit_3_4_1_basics';
import { UNIT_3_4_2 } from './chem_units/unit_3_4_2_bonding';
import { UNIT_3_4_3 } from './chem_units/unit_3_4_3_practice';
import { UNIT_3_4_4 } from './chem_units/unit_3_4_4_summary';

export const SECTION_3_4_COORDINATION: Section = {
  id: "section-3-4-coordination",
  title: "Section 3.4: Coordination Compounds",
  description: "Complexes, Bonding, and Isomerism",
  color: "duo-violet",
  units: [
    UNIT_3_4_1,
    UNIT_3_4_2,
    UNIT_3_4_3,
    UNIT_3_4_4
  ]
};