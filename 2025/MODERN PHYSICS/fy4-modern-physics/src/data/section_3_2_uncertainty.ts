import { Section } from '../types';
import { UNIT_3_2_1_CLASSICAL_UNCERTAINTY } from './modern_units/unit_3_2_1_classical_uncertainty';
import { UNIT_3_2_2_HEISENBERG_UNCERTAINTY } from './modern_units/unit_3_2_2_heisenberg_uncertainty';
import { UNIT_3_2_SUMMARY } from './modern_units/unit_3_2_summary';

export const SECTION_3_2_UNCERTAINTY: Section = {
  id: "section-3-2-uncertainty",
  title: "Section 3.2: Uncertainty Relationships",
  description: "The mathematical and physical limits of knowing position, momentum, energy, and time",
  color: "duo-blue",
  units: [
    UNIT_3_2_1_CLASSICAL_UNCERTAINTY,
    UNIT_3_2_2_HEISENBERG_UNCERTAINTY,
    UNIT_3_2_SUMMARY
  ]
};