import { Section } from '../types';
import { UNIT_1_3_1_NEWTONIAN } from './mech_units/unit_1_3_1_newtonian';
import { UNIT_1_3_2_LAGRANGIAN } from './mech_units/unit_1_3_2_lagrangian';
import { UNIT_1_3_3_MOTION_PRACTICE } from './mech_units/unit_1_3_3_motion_practice';

export const SECTION_1_3_EQUATION_OF_MOTION: Section = {
  id: "section-1-3-equation-of-motion",
  title: "Section 1.3: The Equation of Motion",
  description: "Newtonian & Lagrangian Approaches",
  color: "duo-orange",
  units: [
    UNIT_1_3_1_NEWTONIAN,
    UNIT_1_3_2_LAGRANGIAN,
    UNIT_1_3_3_MOTION_PRACTICE
  ]
};