import { Section } from '../types';
import { UNIT_4_1_1_BASIC_PROPERTIES_THOMSON } from './modern_units/unit_4_1_1_basic_properties_thomson';
import { UNIT_4_1_2_RUTHERFORD_CLOSEST_APPROACH } from './modern_units/unit_4_1_2_rutherford_closest_approach';
import { UNIT_4_1_SUMMARY } from './modern_units/unit_4_1_summary';

export const SECTION_4_1_ATOMIC_STRUCTURE: Section = {
  id: "section-4-1-atomic-structure",
  title: "Section 4.1: Early Atomic Models & Scattering",
  description: "From Plum Pudding to the Nuclear Atom",
  color: "duo-red",
  units: [
    UNIT_4_1_1_BASIC_PROPERTIES_THOMSON,
    UNIT_4_1_2_RUTHERFORD_CLOSEST_APPROACH,
    UNIT_4_1_SUMMARY
  ]
};