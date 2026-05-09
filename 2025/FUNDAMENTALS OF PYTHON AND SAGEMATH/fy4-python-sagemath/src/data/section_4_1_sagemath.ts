import { Section } from '../types';
import { UNIT_4_1_1_SAGEMATH_CALCULATOR } from './python_units/unit_4_1_1_sagemath_calculator';
import { UNIT_4_1_2_SAGEMATH_MATRICES } from './python_units/unit_4_1_2_sagemath_matrices';
import { UNIT_4_1_3_SAGEMATH_POLYNOMIALS } from './python_units/unit_4_1_3_sagemath_polynomials';
import { UNIT_4_1_4_SECTION_SUMMARY } from './python_units/unit_4_1_4_section_summary';

export const SECTION_4_1_SAGEMATH: Section = {
  id: 'section-4-1-sagemath',
  title: 'Section 4.1: Sagemath Basics',
  description: 'Mathematical syntax, matrices, exact solvers, and symbolic functions.',
  color: 'duo-blue',
  units:[
    UNIT_4_1_1_SAGEMATH_CALCULATOR,
    UNIT_4_1_2_SAGEMATH_MATRICES,
    UNIT_4_1_3_SAGEMATH_POLYNOMIALS,
    UNIT_4_1_4_SECTION_SUMMARY
  ]
};