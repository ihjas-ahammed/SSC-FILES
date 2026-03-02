import { Section } from '../types';
import { UNIT_1_1_1 } from './elec_units/unit_1_1_1_materials';
import { UNIT_1_1_2 } from './elec_units/unit_1_1_2_bonding';
import { UNIT_1_1_3 } from './elec_units/unit_1_1_3_carriers';
import { UNIT_1_1_4 } from './elec_units/unit_1_1_4_exercises';

export const SECTION_1_1_SEMICONDUCTOR: Section = {
  id: "section-1-1-semi",
  title: "Section 1.1: Semiconductor Physics",
  description: "Materials, Bonding, and Carrier Mechanics",
  color: "duo-blue",
  units: [
    UNIT_1_1_1,
    UNIT_1_1_2,
    UNIT_1_1_3,
    UNIT_1_1_4
  ]
};