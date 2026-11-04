import { Section } from '../types';
import { UNIT_3_5_1_WAVE_SUPERPOSITION } from './wave_units/unit_3_5_1_wave_superposition';
import { UNIT_3_5_2_SECTION_SUMMARY } from './wave_units/unit_3_5_2_section_summary';

export const SECTION_3_5_SPECIAL_CASE: Section = {
  id: "section-3-5-special-case",
  title: "Section 3.5: Special Case of Traveling Waves",
  description: "Wave Superposition and Boundaries",
  color: "duo-orange",
  units:[
    UNIT_3_5_1_WAVE_SUPERPOSITION,
    UNIT_3_5_2_SECTION_SUMMARY
  ]
};