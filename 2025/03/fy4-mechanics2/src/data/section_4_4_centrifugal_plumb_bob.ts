import { Section } from '../types';
import { UNIT_4_4_1_GRAVITATIONAL_EFFECTS } from './mech_units/unit_4_4_1_gravitational_effects';
import { UNIT_4_4_2_SECTION_SUMMARY } from './mech_units/unit_4_4_2_section_summary';

export const SECTION_4_4_CENTRIFUGAL_PLUMB_BOB: Section = {
  id: "section-4-4-centrifugal-plumb-bob",
  title: "Section 4.4: Centrifugal Force and the Plumb Bob",
  description: "Effective gravity and the Earth's shape",
  color: "duo-indigo",
  units:[
    UNIT_4_4_1_GRAVITATIONAL_EFFECTS,
    UNIT_4_4_2_SECTION_SUMMARY
  ]
};