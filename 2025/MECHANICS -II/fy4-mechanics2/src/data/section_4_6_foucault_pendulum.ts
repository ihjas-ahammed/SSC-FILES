import { Section } from '../types';
import { UNIT_4_6_1_PENDULUM_DYNAMICS } from './mech_units/unit_4_6_1_pendulum_dynamics';
import { UNIT_4_6_2_THE_SOLUTION } from './mech_units/unit_4_6_2_the_solution';
import { UNIT_4_6_3_FINAL_PRACTICE } from './mech_units/unit_4_6_3_final_practice';
import { UNIT_4_6_4_SECTION_SUMMARY } from './mech_units/unit_4_6_4_section_summary';

export const SECTION_4_6_FOUCAULT_PENDULUM: Section = {
  id: "section-4-6-foucault-pendulum",
  title: "Section 4.6: The Foucault Pendulum",
  description: "Analyzing the famous Earth rotation proof",
  color: "duo-violet",
  units:[
    UNIT_4_6_1_PENDULUM_DYNAMICS,
    UNIT_4_6_2_THE_SOLUTION,
    UNIT_4_6_3_FINAL_PRACTICE,
    UNIT_4_6_4_SECTION_SUMMARY
  ]
};