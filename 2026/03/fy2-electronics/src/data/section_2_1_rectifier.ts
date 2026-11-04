import { Section } from '../types';
import { UNIT_2_1_1 } from './elec_units/unit_2_1_1_rect_concepts';
import { UNIT_2_1_2 } from './elec_units/unit_2_1_2_parameters';
import { UNIT_2_1_3 } from './elec_units/unit_2_1_3_efficiency';
import { UNIT_2_1_4 } from './elec_units/unit_2_1_4_exercises';

export const SECTION_2_1_RECTIFIER: Section = {
  id: "section-2-1-rect",
  title: "Section 2.1: Rectifiers",
  description: "AC to DC Conversion Basics",
  color: "duo-blue",
  units: [
    UNIT_2_1_1,
    UNIT_2_1_2,
    UNIT_2_1_3,
    UNIT_2_1_4
  ]
};