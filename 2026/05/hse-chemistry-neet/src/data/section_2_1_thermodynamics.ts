import { Section } from '../types';
import { UNIT_2_1_1 } from './chem_units/unit_2_1_1_state_work';
import { UNIT_2_1_2 } from './chem_units/unit_2_1_2_calorimetry';
import { UNIT_2_1_3 } from './chem_units/unit_2_1_3_energetics';
import { UNIT_2_1_4 } from './chem_units/unit_2_1_4_entropy_gibbs';
import { UNIT_2_1_5 } from './chem_units/unit_2_1_5_exe_first_law';
import { UNIT_2_1_6 } from './chem_units/unit_2_1_6_exe_second_law';

export const SECTION_2_1_THERMODYNAMICS: Section = {
  id: "section-2-1-thermo",
  title: "Section 2.1: Chemical Thermodynamics",
  description: "Energy, Entropy, and Spontaneity",
  color: "duo-red",
  units: [
    UNIT_2_1_1,
    UNIT_2_1_2,
    UNIT_2_1_3,
    UNIT_2_1_4,
    UNIT_2_1_5,
    UNIT_2_1_6
  ]
};