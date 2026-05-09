import { Section } from '../types';
import { UNIT_1_2_1_NUMPY_ARRAYS } from './python_units/unit_1_2_1_numpy_arrays';
import { UNIT_1_2_2_VECTORIZATION } from './python_units/unit_1_2_2_vectorization';
import { UNIT_1_2_3_SECTION_SUMMARY } from './python_units/unit_1_2_3_section_summary';

export const SECTION_1_2_ARRAYS: Section = {
  id: 'section-1-2-arrays',
  title: 'Section 1.2: Arrays & Vectorization',
  description: 'High-performance computing with NumPy arrays, reshaping, and vectorized mathematics.',
  color: 'duo-blue',
  units:[
    UNIT_1_2_1_NUMPY_ARRAYS,
    UNIT_1_2_2_VECTORIZATION,
    UNIT_1_2_3_SECTION_SUMMARY
  ],
};