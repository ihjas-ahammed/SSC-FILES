import { Section } from '../types';
import { UNIT_1_3_1_LORENTZ_TRANSFORMATION } from './modern_units/unit_1_3_1_lorentz_transformation';
import { UNIT_1_3_2_SIMULTANEITY } from './modern_units/unit_1_3_2_simultaneity';
import { UNIT_1_3_SUMMARY } from './modern_units/unit_1_3_summary';

export const SECTION_1_3_LORENTZ_TRANSFORMATION: Section = {
  id: "section-1-3-lorentz-transformation",
  title: "Section 1.3: Lorentz Transformation & Simultaneity",
  description: "The mathematical core of relativity and its paradoxes",
  color: "duo-blue",
  units: [
    UNIT_1_3_1_LORENTZ_TRANSFORMATION,
    UNIT_1_3_2_SIMULTANEITY,
    UNIT_1_3_SUMMARY
  ]
};