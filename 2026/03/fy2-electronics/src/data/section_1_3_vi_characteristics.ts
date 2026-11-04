import { Section } from '../types';
import { UNIT_1_3_1 } from './elec_units/unit_1_3_1_vi_curve';
import { UNIT_1_3_2 } from './elec_units/unit_1_3_2_knee_voltage';
import { UNIT_1_3_3 } from './elec_units/unit_1_3_3_breakdown';
import { UNIT_1_3_4 } from './elec_units/unit_1_3_4_exercises';

export const SECTION_1_3_VI_CHARACTERISTICS: Section = {
  id: "section-1-3-vi",
  title: "Section 1.3: V-I Characteristics",
  description: "Voltage, Current & Breakdown",
  color: "duo-violet",
  units: [
    UNIT_1_3_1,
    UNIT_1_3_2,
    UNIT_1_3_3,
    UNIT_1_3_4
  ]
};