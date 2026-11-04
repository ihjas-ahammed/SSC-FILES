import { Section } from '../types';
import { UNIT_3_1_1 } from './unit_3_1_1_definitions';
import { UNIT_3_1_2 } from './unit_3_1_2_convergence_examples';
import { UNIT_3_1_3 } from './unit_3_1_3_limit_exercises';
import { UNIT_3_1_4 } from './unit_3_1_4_proof_exercises';

export const SECTION_3_1_SEQUENCES_LIMITS: Section = {
  id: "section-3-1",
  title: "Section 3.1: Sequences and Their Limits",
  description: "Introduction to sequences, limits, and convergence criteria.",
  color: "duo-blue",
  units: [
    UNIT_3_1_1,
    UNIT_3_1_2,
    UNIT_3_1_3,
    UNIT_3_1_4
  ]
};