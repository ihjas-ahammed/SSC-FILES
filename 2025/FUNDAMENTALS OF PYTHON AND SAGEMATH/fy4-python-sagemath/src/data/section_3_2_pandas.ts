import { Section } from '../types';
import { UNIT_3_2_1_PANDAS_STRUCTURES } from './python_units/unit_3_2_1_pandas_structures';
import { UNIT_3_2_2_DATA_ANALYSIS } from './python_units/unit_3_2_2_data_analysis';
import { UNIT_3_2_3_SECTION_SUMMARY } from './python_units/unit_3_2_3_section_summary';

export const SECTION_3_2_PANDAS: Section = {
  id: 'section-3-2-pandas',
  title: 'Section 3.2: Introduction to Pandas',
  description: 'Tabular data structures, alignment, I/O, and exploratory data analysis.',
  color: 'duo-green',
  units:[
    UNIT_3_2_1_PANDAS_STRUCTURES,
    UNIT_3_2_2_DATA_ANALYSIS,
    UNIT_3_2_3_SECTION_SUMMARY
  ]
};