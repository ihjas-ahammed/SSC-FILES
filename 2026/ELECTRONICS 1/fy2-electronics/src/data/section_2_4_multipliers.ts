import { Section } from '../types';
import { UNIT_2_4_1 } from './elec_units/unit_2_4_1_multiplier_concepts';
import { UNIT_2_4_2 } from './elec_units/unit_2_4_2_hw_doubler';
import { UNIT_2_4_3 } from './elec_units/unit_2_4_3_applications';
import { UNIT_2_4_4 } from './elec_units/unit_2_4_4_exercises';

export const SECTION_2_4_MULTIPLIERS: Section = {
  id: "section-2-4-multipliers",
  title: "Section 2.4: Voltage Multipliers",
  description: "Stepping up DC Voltage",
  color: "duo-orange",
  units: [
    UNIT_2_4_1,
    UNIT_2_4_2,
    UNIT_2_4_3,
    UNIT_2_4_4
  ]
};