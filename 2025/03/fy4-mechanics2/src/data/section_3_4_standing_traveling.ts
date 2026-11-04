import { Section } from '../types';
import { UNIT_3_4_1_BOUNDARY_CONDITIONS } from './wave_units/unit_3_4_1_boundary_conditions';
import { UNIT_3_4_2_TRAVELING_WAVES } from './wave_units/unit_3_4_2_traveling_waves';
import { UNIT_3_4_3_SECTION_SUMMARY } from './wave_units/unit_3_4_3_section_summary';

export const SECTION_3_4_STANDING_TRAVELING: Section = {
  id: "section-3-4-standing-traveling",
  title: "Section 3.4: Standing and Traveling Waves",
  description: "Boundary Conditions and Pulse Propagation",
  color: "duo-pink",
  units:[
    UNIT_3_4_1_BOUNDARY_CONDITIONS,
    UNIT_3_4_2_TRAVELING_WAVES,
    UNIT_3_4_3_SECTION_SUMMARY
  ]
};