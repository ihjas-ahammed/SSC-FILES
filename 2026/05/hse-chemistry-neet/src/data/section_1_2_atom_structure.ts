import { Section } from '../types';
import { UNIT_1_2_1 } from './chem_units/unit_1_2_1_subatomic';
import { UNIT_1_2_2 } from './chem_units/unit_1_2_2_bohr';
import { UNIT_1_2_3 } from './chem_units/unit_1_2_3_quantum_foundations';
import { UNIT_1_2_4 } from './chem_units/unit_1_2_4_quantum_mechanics';
import { UNIT_1_2_5 } from './chem_units/unit_1_2_5_exercises_electronic';
import { UNIT_1_2_6 } from './chem_units/unit_1_2_6_exercises_quantum';

export const SECTION_1_2_ATOM_STRUCTURE: Section = {
  id: "section-1-2-atom",
  title: "Section 1.2: Structure of Atom",
  description: "Subatomic particles, Models, and Quantum Mechanics",
  color: "duo-green",
  units: [
    UNIT_1_2_1,
    UNIT_1_2_2,
    UNIT_1_2_3,
    UNIT_1_2_4,
    UNIT_1_2_5,
    UNIT_1_2_6
  ]
};