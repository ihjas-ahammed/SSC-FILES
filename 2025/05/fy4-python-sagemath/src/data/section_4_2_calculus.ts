import { Section } from '../types';
import { UNIT_4_2_1_SAGEMATH_GRAPHING } from './python_units/unit_4_2_1_sagemath_graphing';
import { UNIT_4_2_2_SAGEMATH_DERIVATIVES } from './python_units/unit_4_2_2_sagemath_derivatives';
import { UNIT_4_2_3_SAGEMATH_INTEGRALS } from './python_units/unit_4_2_3_sagemath_integrals';
import { UNIT_4_2_4_SECTION_SUMMARY } from './python_units/unit_4_2_4_section_summary';

export const SECTION_4_2_CALCULUS: Section = {
  id: 'section-4-2-calculus',
  title: 'Section 4.2: Calculus with Sagemath',
  description: 'Graphing functions, limits, derivatives, and analytical integration in Sage.',
  color: 'duo-green',
  units:[
    UNIT_4_2_1_SAGEMATH_GRAPHING,
    UNIT_4_2_2_SAGEMATH_DERIVATIVES,
    UNIT_4_2_3_SAGEMATH_INTEGRALS,
    UNIT_4_2_4_SECTION_SUMMARY
  ]
};