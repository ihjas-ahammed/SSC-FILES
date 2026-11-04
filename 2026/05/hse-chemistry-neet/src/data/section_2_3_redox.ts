import { Section } from '../types';
import { UNIT_2_3_1 } from './chem_units/unit_2_3_1_redox_theory';
import { UNIT_2_3_2 } from './chem_units/unit_2_3_2_oxidation_states';
import { UNIT_2_3_3 } from './chem_units/unit_2_3_3_electrodes';
import { UNIT_2_3_4 } from './chem_units/unit_2_3_4_exe_redox';

export const SECTION_2_3_REDOX: Section = {
  id: "section-2-3-redox",
  title: "Section 2.3: Redox Reactions",
  description: "Oxidation, Reduction & Electrochemistry Basics",
  color: "duo-violet", // Using violet as 'duo-purple' wasn't defined in theme
  units: [
    UNIT_2_3_1,
    UNIT_2_3_2,
    UNIT_2_3_3,
    UNIT_2_3_4
  ]
};