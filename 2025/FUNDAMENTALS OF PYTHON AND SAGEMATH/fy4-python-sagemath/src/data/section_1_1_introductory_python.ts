import { Section } from '../types';
import { UNIT_1_1_1_BASICS } from './python_units/unit_1_1_1_basics';
import { UNIT_1_1_2_DATA_STRUCTURES } from './python_units/unit_1_1_2_data_structures';
import { UNIT_1_1_3_CONTROL_FLOW } from './python_units/unit_1_1_3_control_flow';
import { UNIT_1_1_4_FUNCTIONS_MATRICES } from './python_units/unit_1_1_4_functions_matrices';
import { UNIT_1_1_5_SECTION_SUMMARY } from './python_units/unit_1_1_5_section_summary';

export const SECTION_1_1_INTRODUCTORY_PYTHON: Section = {
  id: 'section-1-1-introductory-python',
  title: 'Section 1.1: Introductory Python',
  description: 'Python fundamentals, data structures, control flow, functions, and pure matrix mathematics.',
  color: 'duo-blue',
  units:[
    UNIT_1_1_1_BASICS,
    UNIT_1_1_2_DATA_STRUCTURES,
    UNIT_1_1_3_CONTROL_FLOW,
    UNIT_1_1_4_FUNCTIONS_MATRICES,
    UNIT_1_1_5_SECTION_SUMMARY
  ],
};