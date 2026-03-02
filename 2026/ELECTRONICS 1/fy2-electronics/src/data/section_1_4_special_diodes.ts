import { Section } from '../types';
import { UNIT_1_4_1 } from './elec_units/unit_1_4_1_led_physics';
import { UNIT_1_4_2 } from './elec_units/unit_1_4_2_led_drivers';
import { UNIT_1_4_3 } from './elec_units/unit_1_4_3_photodiode';
import { UNIT_1_4_4 } from './elec_units/unit_1_4_4_exercises';

export const SECTION_1_4_SPECIAL_DIODES: Section = {
  id: "section-1-4-special",
  title: "Section 1.4: Special Purpose Diodes",
  description: "LEDs & Photodiodes",
  color: "duo-orange",
  units: [
    UNIT_1_4_1,
    UNIT_1_4_2,
    UNIT_1_4_3,
    UNIT_1_4_4
  ]
};