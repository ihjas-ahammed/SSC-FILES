import { Section } from '../types';
import { UNIT_6_1_1 } from './chem_units/unit_6_1_1_haloalkanes_prep';
import { UNIT_6_1_2 } from './chem_units/unit_6_1_2_haloalkanes_mech';
import { UNIT_6_1_3 } from './chem_units/unit_6_1_3_haloalkanes_practice';

export const SECTION_6_1_HALOALKANES: Section = {
  id: "section-6-1-haloalkanes",
  title: "Section 6.1: Haloalkanes & Haloarenes",
  description: "Structure, Reactions & Mechanisms",
  color: "duo-indigo",
  units: [
    UNIT_6_1_1,
    UNIT_6_1_2,
    UNIT_6_1_3
  ]
};