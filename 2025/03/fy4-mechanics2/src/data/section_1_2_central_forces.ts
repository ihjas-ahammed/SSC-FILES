import { Section } from '../types';
import { UNIT_1_2_1_FORCE_DEFINITIONS } from './mech_units/unit_1_2_1_force_definitions';
import { UNIT_1_2_2_ANGULAR_MOMENTUM } from './mech_units/unit_1_2_2_angular_momentum';
import { UNIT_1_2_3_PRACTICE } from './mech_units/unit_1_2_3_practice';

export const SECTION_1_2_CENTRAL_FORCES: Section = {
  id: "section-1-2-central-forces",
  title: "Section 1.2: Central Forces",
  description: "Definitions, Properties & Conservation Laws",
  color: "duo-violet",
  units: [
    UNIT_1_2_1_FORCE_DEFINITIONS,
    UNIT_1_2_2_ANGULAR_MOMENTUM,
    UNIT_1_2_3_PRACTICE
  ]
};