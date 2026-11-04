import { Section } from '../types';
import { UNIT_3_1_1 } from './elec_units/unit_3_1_1_bjt_structure';
import { UNIT_3_1_2 } from './elec_units/unit_3_1_2_terminals';
import { UNIT_3_1_3 } from './elec_units/unit_3_1_3_biasing_logic';
import { UNIT_3_1_4 } from './elec_units/unit_3_1_4_exercises';

export const SECTION_3_1_TRANSISTOR: Section = {
  id: "section-3-1-transistor",
  title: "Section 3.1: The Transistor",
  description: "Structure, Terminals & Biasing",
  color: "duo-blue",
  units: [
    UNIT_3_1_1,
    UNIT_3_1_2,
    UNIT_3_1_3,
    UNIT_3_1_4
  ]
};