import { Section } from '../types';
import { UNIT_2_3_1 } from './elec_units/unit_2_3_1_filter_theory';
import { UNIT_2_3_2 } from './elec_units/unit_2_3_2_cap_filter';
import { UNIT_2_3_3 } from './elec_units/unit_2_3_3_filter_analysis';
import { UNIT_2_3_4 } from './elec_units/unit_2_3_4_exercises';

export const SECTION_2_3_FILTERS: Section = {
  id: "section-2-3-filters",
  title: "Section 2.3: Filter Circuits",
  description: "Smoothing Pulsating DC",
  color: "duo-blue",
  units: [
    UNIT_2_3_1,
    UNIT_2_3_2,
    UNIT_2_3_3,
    UNIT_2_3_4
  ]
};