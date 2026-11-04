import { Section } from '../types';
import { UNIT_2_4_1_DRIVING_FORCES } from './mech_units/unit_2_4_1_driving_forces';
import { UNIT_2_4_2_FORCING_PRACTICE } from './mech_units/unit_2_4_2_forcing_practice';
import { UNIT_2_4_3_FORCED_DAMPED } from './mech_units/unit_2_4_3_forced_damped';

export const SECTION_2_4_FORCED_OSCILLATOR: Section = {
  id: "section-2-4-forced-oscillator",
  title: "Section 2.4: The Forced Oscillator",
  description: "Driving forces and system responses",
  color: "duo-red",
  units: [
    UNIT_2_4_1_DRIVING_FORCES,
    UNIT_2_4_2_FORCING_PRACTICE,
    UNIT_2_4_3_FORCED_DAMPED
  ]
};