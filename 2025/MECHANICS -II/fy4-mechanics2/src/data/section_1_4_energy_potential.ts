import { Section } from '../types';
import { UNIT_1_4_1_ENERGY_EQUATION } from './mech_units/unit_1_4_1_energy_equation';
import { UNIT_1_4_2_ENERGY_DIAGRAMS } from './mech_units/unit_1_4_2_energy_diagrams';
import { UNIT_1_4_3_ENERGY_PRACTICE } from './mech_units/unit_1_4_3_energy_practice';

export const SECTION_1_4_ENERGY_POTENTIAL: Section = {
  id: "section-1-4-energy-potential",
  title: "Section 1.4: Energy & Effective Potential",
  description: "Analyzing orbits using energy",
  color: "duo-blue",
  units: [
    UNIT_1_4_1_ENERGY_EQUATION,
    UNIT_1_4_2_ENERGY_DIAGRAMS,
    UNIT_1_4_3_ENERGY_PRACTICE
  ]
};