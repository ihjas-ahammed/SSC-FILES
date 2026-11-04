import { Section } from '../types';
import { UNIT_3_1_1_SYMPY_FOUNDATIONS } from './python_units/unit_3_1_1_sympy_foundations';
import { UNIT_3_1_2_CALCULUS_SETS } from './python_units/unit_3_1_2_calculus_sets';
import { UNIT_3_1_3_SECTION_SUMMARY } from './python_units/unit_3_1_3_section_summary';

export const SECTION_3_1_SYMPY: Section = {
  id: 'section-3-1-sympy',
  title: 'Section 3.1: Symbolic Computation, SymPy',
  description: 'Exact algebraic manipulation, calculus, and analytical math with SymPy.',
  color: 'duo-blue',
  units:[
    UNIT_3_1_1_SYMPY_FOUNDATIONS,
    UNIT_3_1_2_CALCULUS_SETS,
    UNIT_3_1_3_SECTION_SUMMARY
  ]
};