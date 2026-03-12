import { Section } from '../types';
import { UNIT_1_1_1_CLASSICAL_RELATIVITY } from './modern_units/unit_1_1_1_classical_relativity';
import { UNIT_1_1_2_MICHELSON_MORLEY } from './modern_units/unit_1_1_2_michelson_morley';
import { UNIT_1_1_SUMMARY } from './modern_units/unit_1_1_summary';

export const SECTION_1_1_CLASSICAL_FOUNDATIONS: Section = {
  id: "section-1-1-classical-foundations",
  title: "Section 1.1: Classical Foundations & The Ether Problem",
  description: "Galilean relativity, velocity addition, and the experiment that changed physics",
  color: "duo-blue",
  units: [
    UNIT_1_1_1_CLASSICAL_RELATIVITY,
    UNIT_1_1_2_MICHELSON_MORLEY,
    UNIT_1_1_SUMMARY
  ]
};
