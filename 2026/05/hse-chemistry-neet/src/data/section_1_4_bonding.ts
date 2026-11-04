import { Section } from '../types';
import { UNIT_1_4_1 } from './chem_units/unit_1_4_1_basics';
import { UNIT_1_4_2 } from './chem_units/unit_1_4_2_geometry';
import { UNIT_1_4_3 } from './chem_units/unit_1_4_3_valence';
import { UNIT_1_4_4 } from './chem_units/unit_1_4_4_mot';
import { UNIT_1_4_5 } from './chem_units/unit_1_4_5_hbond';
import { UNIT_1_4_6 } from './chem_units/unit_1_4_6_exe_geometry';
import { UNIT_1_4_7 } from './chem_units/unit_1_4_7_exe_advanced';
import { UNIT_1_4_8 } from './chem_units/unit_1_4_8_summary';

export const SECTION_1_4_BONDING: Section = {
  id: "section-1-4-bonding",
  title: "Section 1.4: Chemical Bonding",
  description: "Structures, Shapes, and Theories",
  color: "duo-orange",
  units: [
    UNIT_1_4_1,
    UNIT_1_4_2,
    UNIT_1_4_3,
    UNIT_1_4_4,
    UNIT_1_4_5,
    UNIT_1_4_6,
    UNIT_1_4_7,
    UNIT_1_4_8
  ]
};