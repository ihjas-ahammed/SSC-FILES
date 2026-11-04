import { Section } from '../types';
import { UNIT_5_3_1 } from './chem_units/unit_5_3_1_rate_laws';
import { UNIT_5_3_2 } from './chem_units/unit_5_3_2_temp_collisions';
import { UNIT_5_3_3 } from './chem_units/unit_5_3_3_practice';

export const SECTION_5_3_KINETICS: Section = {
  id: "section-5-3-kinetics",
  title: "Section 5.3: Chemical Kinetics",
  description: "Rate Laws, Mechanisms & Collision Theory",
  color: "duo-red",
  units: [
    UNIT_5_3_1,
    UNIT_5_3_2,
    UNIT_5_3_3
  ]
};