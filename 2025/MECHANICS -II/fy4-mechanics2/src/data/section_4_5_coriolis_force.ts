import { Section } from '../types';
import { UNIT_4_5_1_TERRESTRIAL_EFFECTS } from './mech_units/unit_4_5_1_terrestrial_effects';
import { UNIT_4_5_2_FALLING_BODY } from './mech_units/unit_4_5_2_falling_body';
import { UNIT_4_5_3_PROJECTILE_MOTION } from './mech_units/unit_4_5_3_projectile_motion';
import { UNIT_4_5_4_SECTION_SUMMARY } from './mech_units/unit_4_5_4_section_summary';

export const SECTION_4_5_CORIOLIS_FORCE: Section = {
  id: "section-4-5-coriolis-force",
  title: "Section 4.5: The Coriolis Force",
  description: "Terrestrial effects, falling bodies, and projectiles",
  color: "duo-orange",
  units:[
    UNIT_4_5_1_TERRESTRIAL_EFFECTS,
    UNIT_4_5_2_FALLING_BODY,
    UNIT_4_5_3_PROJECTILE_MOTION,
    UNIT_4_5_4_SECTION_SUMMARY
  ]
};