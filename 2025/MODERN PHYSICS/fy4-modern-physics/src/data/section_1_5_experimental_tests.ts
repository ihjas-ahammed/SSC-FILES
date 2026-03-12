import { Section } from '../types';
import { UNIT_1_5_1_EXPERIMENTAL_TESTS } from './modern_units/unit_1_5_1_experimental_tests';
import { UNIT_1_5_SUMMARY } from './modern_units/unit_1_5_summary';

export const SECTION_1_5_EXPERIMENTAL_TESTS: Section = {
  id: "section-1-5-experimental-tests",
  title: "Section 1.5: Experimental Tests",
  description: "How we know Special Relativity is true",
  color: "duo-green",
  units: [
    UNIT_1_5_1_EXPERIMENTAL_TESTS,
    UNIT_1_5_SUMMARY
  ]
};