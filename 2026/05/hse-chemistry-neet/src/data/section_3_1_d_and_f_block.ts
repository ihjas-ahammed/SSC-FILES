import { Section } from '../types';
import { UNIT_3_1_1 } from './chem_units/unit_3_1_1_d_block';
import { UNIT_3_1_2 } from './chem_units/unit_3_1_2_transition_compounds';
import { UNIT_3_1_3 } from './chem_units/unit_3_1_3_inner_transition';
import { UNIT_3_1_4 } from './chem_units/unit_3_1_4_practice';
import { UNIT_3_1_5 } from './chem_units/unit_3_1_5_summary';

export const SECTION_3_1_D_AND_F_BLOCK: Section = {
  id: "section-3-1-d-f-block",
  title: "Section 3.1: d- and f-Block Elements",
  description: "Transition & Inner Transition Elements",
  color: "duo-gray", // Using 'duo-gray' as requested (mapped to duo-gray in theme?) or fallback
  units: [
    UNIT_3_1_1,
    UNIT_3_1_2,
    UNIT_3_1_3,
    UNIT_3_1_4,
    UNIT_3_1_5
  ]
};