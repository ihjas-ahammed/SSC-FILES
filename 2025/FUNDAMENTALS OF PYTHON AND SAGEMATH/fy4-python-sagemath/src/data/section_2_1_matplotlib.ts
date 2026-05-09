import { Section } from '../types';
import { UNIT_2_1_1_MATPLOTLIB_BASICS } from './python_units/unit_2_1_1_matplotlib_basics';
import { UNIT_2_1_2_MATH_ERROR_ANIM } from './python_units/unit_2_1_2_math_error_anim';
import { UNIT_2_1_3_CURVES_COLORS } from './python_units/unit_2_1_3_curves_colors';
import { UNIT_2_1_4_3D_PLOTS } from './python_units/unit_2_1_4_3d_plots';
import { UNIT_2_1_5_SECTION_SUMMARY } from './python_units/unit_2_1_5_section_summary';

export const SECTION_2_1_MATPLOTLIB: Section = {
  id: 'section-2-1-matplotlib',
  title: 'Section 2.1: The Matplotlib Module',
  description: 'Data visualization from 2D plots and error bars to fractals and 3D surface mapping.',
  color: 'duo-blue',
  units:[
    UNIT_2_1_1_MATPLOTLIB_BASICS,
    UNIT_2_1_2_MATH_ERROR_ANIM,
    UNIT_2_1_3_CURVES_COLORS,
    UNIT_2_1_4_3D_PLOTS,
    UNIT_2_1_5_SECTION_SUMMARY
  ]
};