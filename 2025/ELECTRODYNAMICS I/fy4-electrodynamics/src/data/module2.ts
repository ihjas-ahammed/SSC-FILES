import { Section } from '../types';
import { SECTION_2_1 } from './chapter2_1';
import { SECTION_2_2 } from './chapter2_2';
// SECTION_2_3 and SECTION_2_4 are now merged into 2_2 or deprecated based on the prompt's syllabus.
// Keeping 2_5 as it contains problems which might still be relevant or supplementary.
import { SECTION_2_5 } from './chapter2_5';

export const MODULE_2_SECTIONS: Section[] = [
  SECTION_2_1,
  SECTION_2_2,
  SECTION_2_5
];