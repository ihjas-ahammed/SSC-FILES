import { Section } from '../types';
import { UNIT_2_3_1 } from './elec_units/unit_2_3_1_zener_funds';
import { UNIT_2_3_2 } from './elec_units/unit_2_3_2_regulator';
import { UNIT_2_3_3 } from './elec_units/unit_2_3_3_analysis';
import { UNIT_2_3_4 } from './elec_units/unit_2_3_4_exercises';

export const SECTION_2_3_ZENER: Section = {
  id: "section-2-3-zener",
  title: "Section 2.3: Zener Voltage Stabiliser",
  description: "Regulation & Breakdown Physics",
  color: "duo-violet",
  units: [
    UNIT_2_3_1,
    UNIT_2_3_2,
    UNIT_2_3_3,
    UNIT_2_3_4
  ]
};