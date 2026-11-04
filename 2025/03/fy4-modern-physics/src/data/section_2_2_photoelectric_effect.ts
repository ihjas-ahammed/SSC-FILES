import { Section } from '../types';
import { UNIT_2_2_1_PHOTOELECTRIC_CLASSICAL } from './modern_units/unit_2_2_1_photoelectric_classical';
import { UNIT_2_2_2_PHOTOELECTRIC_EQUATION } from './modern_units/unit_2_2_2_photoelectric_equation';
import { UNIT_2_2_SUMMARY } from './modern_units/unit_2_2_summary';


export const SECTION_2_2_PHOTOELECTRIC_EFFECT: Section = {
  id: "section-2-2-pe-effect",
  title: "Section 2.2: The Photoelectric Effect",
  description: "Einstein's bold hypothesis resolving experimental failures of wave theory",
  color: "duo-green",
  units: [
    UNIT_2_2_1_PHOTOELECTRIC_CLASSICAL,
    UNIT_2_2_2_PHOTOELECTRIC_EQUATION,
    UNIT_2_2_SUMMARY
  ]
};
