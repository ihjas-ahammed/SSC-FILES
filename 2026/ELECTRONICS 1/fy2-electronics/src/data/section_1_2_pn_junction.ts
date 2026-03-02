import { Section } from '../types';
import { UNIT_1_2_1 } from './elec_units/unit_1_2_1_formation';
import { UNIT_1_2_2 } from './elec_units/unit_1_2_2_depletion';
import { UNIT_1_2_3 } from './elec_units/unit_1_2_3_biasing';
import { UNIT_1_2_4 } from './elec_units/unit_1_2_4_exercises';

export const SECTION_1_2_PN_JUNCTION: Section = {
  id: "section-1-2-pn",
  title: "Section 1.2: The PN Junction",
  description: "Formation, Depletion & Biasing",
  color: "duo-green",
  units: [
    UNIT_1_2_1,
    UNIT_1_2_2,
    UNIT_1_2_3,
    UNIT_1_2_4
  ]
};