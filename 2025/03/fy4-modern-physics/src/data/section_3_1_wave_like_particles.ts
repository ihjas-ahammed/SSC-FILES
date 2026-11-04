import { Section } from '../types';
import { UNIT_3_1_1_DE_BROGLIE } from './modern_units/unit_3_1_1_de_broglie';
import { UNIT_3_1_2_EXPERIMENTAL_EVIDENCE } from './modern_units/unit_3_1_2_experimental_evidence';
import { UNIT_3_1_SUMMARY } from './modern_units/unit_3_1_summary';

export const SECTION_3_1_WAVE_LIKE_PARTICLES: Section = {
  id: "section-3-1-wave-like-particles",
  title: "Section 3.1: de Broglie's Hypothesis & Evidence",
  description: "Matter waves and the experiments that proved their existence",
  color: "duo-pink",
  units: [
    UNIT_3_1_1_DE_BROGLIE,
    UNIT_3_1_2_EXPERIMENTAL_EVIDENCE,
    UNIT_3_1_SUMMARY
  ]
};