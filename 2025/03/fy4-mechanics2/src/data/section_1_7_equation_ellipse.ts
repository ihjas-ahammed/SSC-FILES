import { Section } from '../types';
import { UNIT_1_7_1_ELLIPSE_GEOMETRY } from './mech_units/unit_1_7_1_ellipse_geometry';
import { UNIT_1_7_2_ORBIT_PROPERTIES } from './mech_units/unit_1_7_2_orbit_properties';
import { UNIT_1_7_3_GEOMETRY_PRACTICE } from './mech_units/unit_1_7_3_geometry_practice';

export const SECTION_1_7_EQUATION_ELLIPSE: Section = {
  id: "section-1-7-equation-ellipse",
  title: "Section 1.7: Equation of an Ellipse",
  description: "Geometry of Orbits",
  color: "duo-indigo",
  units: [
    UNIT_1_7_1_ELLIPSE_GEOMETRY,
    UNIT_1_7_2_ORBIT_PROPERTIES,
    UNIT_1_7_3_GEOMETRY_PRACTICE
  ]
};