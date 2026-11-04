import { Section } from '../types';
import { UNIT_2_4_1 } from './unit_2_4_1_archimedean_density';
import { UNIT_2_4_2 } from './unit_2_4_2_density_exercises';
import { UNIT_2_5_1 } from './unit_2_5_1_interval_theory';
import { UNIT_2_5_2 } from './unit_2_5_2_interval_exercises';

export const SECTION_2_4_APPLICATIONS_INTERVALS: Section = {
  id: "section-2-4",
  title: "Section 2.4/2.5: Applications and Intervals",
  description: "Archimedean Property, Density of Rationals, and Intervals",
  color: "duo-gray",
  units: [
    UNIT_2_4_1,
    UNIT_2_4_2,
    UNIT_2_5_1,
    UNIT_2_5_2
  ]
};