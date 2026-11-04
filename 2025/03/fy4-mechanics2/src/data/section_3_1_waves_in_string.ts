import { Section } from '../types';
import { UNIT_3_1_1_PARAMETERS } from './wave_units/unit_3_1_1_parameters';
import { UNIT_3_1_2_WAVE_EQUATION } from './wave_units/unit_3_1_2_wave_equation';
import { UNIT_3_1_3_SECTION_SUMMARY } from './wave_units/unit_3_1_3_section_summary';

export const SECTION_3_1_WAVES_IN_STRING: Section = {
  id: "section-3-1-waves",
  title: "Section 3.1: A Wave in a Stretched String",
  description: "Wave Parameters and the Wave Equation",
  color: "duo-violet",
  units:[
    UNIT_3_1_1_PARAMETERS,
    UNIT_3_1_2_WAVE_EQUATION,
    UNIT_3_1_3_SECTION_SUMMARY
  ]
};