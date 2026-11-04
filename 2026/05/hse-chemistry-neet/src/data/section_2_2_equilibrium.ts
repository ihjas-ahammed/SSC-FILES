import { Section } from '../types';
import { UNIT_2_2_1 } from './chem_units/unit_2_2_1_chemical_eq';
import { UNIT_2_2_2 } from './chem_units/unit_2_2_2_eq_dynamics';
import { UNIT_2_2_3 } from './chem_units/unit_2_2_3_shift_energetics';
import { UNIT_2_2_4 } from './chem_units/unit_2_2_4_ionic_basics';
import { UNIT_2_2_5 } from './chem_units/unit_2_2_5_advanced_ionic';
import { UNIT_2_2_6 } from './chem_units/unit_2_2_6_exe_equilibrium';

export const SECTION_2_2_EQUILIBRIUM: Section = {
  id: "section-2-2-equilibrium",
  title: "Section 2.2: Equilibrium",
  description: "Chemical and Ionic Equilibrium",
  color: "duo-blue",
  units: [
    UNIT_2_2_1,
    UNIT_2_2_2,
    UNIT_2_2_3,
    UNIT_2_2_4,
    UNIT_2_2_5,
    UNIT_2_2_6
  ]
};