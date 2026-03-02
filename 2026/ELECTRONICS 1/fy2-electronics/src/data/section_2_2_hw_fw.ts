import { Section } from '../types';
import { UNIT_2_2_1 } from './elec_units/unit_2_2_1_hw';
import { UNIT_2_2_2 } from './elec_units/unit_2_2_2_ct';
import { UNIT_2_2_3 } from './elec_units/unit_2_2_3_bridge';
import { UNIT_2_2_4 } from './elec_units/unit_2_2_4_exercises';

export const SECTION_2_2_HW_FW: Section = {
  id: "section-2-2-hw-fw",
  title: "Section 2.2: Rectifier Types",
  description: "Half-Wave & Full-Wave Architectures",
  color: "duo-orange",
  units: [
    UNIT_2_2_1,
    UNIT_2_2_2,
    UNIT_2_2_3,
    UNIT_2_2_4
  ]
};