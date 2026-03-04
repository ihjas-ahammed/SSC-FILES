import { Section } from '../types';
import { UNIT_2_2_1_MATH_RULES } from './mech_units/unit_2_2_1_math_rules';
import { UNIT_2_2_2_EQUATION_PRACTICE } from './mech_units/unit_2_2_2_equation_practice';

export const SECTION_2_2_SOLVING_ODE: Section = {
  id: "section-2-2-ode",
  title: "Section 2.2: Solving the Differential Equation",
  description: "Linear Homogeneous ODEs",
  color: "duo-orange",
  units: [
    UNIT_2_2_1_MATH_RULES,
    UNIT_2_2_2_EQUATION_PRACTICE
  ]
};