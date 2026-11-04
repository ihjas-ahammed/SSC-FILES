import { Module } from '../types';
import { SECTION_2_1_ALGEBRAIC_ORDER } from './section_2_1_algebraic_order';
import { SECTION_2_2_ABSOLUTE_VALUE } from './section_2_2_absolute_value';
import { SECTION_2_3_COMPLETENESS } from './section_2_3_completeness';
import { SECTION_2_4_APPLICATIONS_INTERVALS } from './section_2_4_applications_intervals';

export const MODULE_2: Module = {
  id: 'module-2',
  title: 'Module II: The Real Numbers',
  description: 'Algebraic Properties, Order Properties, and the Real Line',
  sections: [
    SECTION_2_1_ALGEBRAIC_ORDER,
    SECTION_2_2_ABSOLUTE_VALUE,
    SECTION_2_3_COMPLETENESS,
    SECTION_2_4_APPLICATIONS_INTERVALS
  ],
  moduleSummary: [
    {
      id: "mod-sum-4",
      type: "theory",
      title: "Section 2.1: The Real Numbers (Algebraic & Order Properties)",
      content: "We introduced the real numbers $\\mathbb{R}$ axiomatically as an ordered field. The Field Axioms govern addition and multiplication. The Order Axioms introduce a set of positive numbers $\\mathbb{P}$, satisfying trichotomy and closure under addition/multiplication, from which all inequality rules are derived."
    },
    {
      id: "mod-sum-5",
      type: "theory",
      title: "Section 2.2: Absolute Value and The Real Line",
      content: "We defined absolute value as a measure of distance from zero and proved the incredibly important Triangle Inequality ($|a+b| \\le |a| + |b|$). We also formalized the geometry of the real line by defining $\\varepsilon$-neighborhoods $V_\\varepsilon(a)$, serving as the foundation for the concept of limits."
    },
    {
      id: "mod-sum-6",
      type: "theory",
      title: "Section 2.3: Completeness Property",
      content: "We completed the foundation of $\\mathbb{R}$ by introducing the Completeness (or Supremum) Property: Every nonempty set of real numbers that has an upper bound has a least upper bound (supremum) in $\\mathbb{R}$. This property fills the 'holes' in the rational number line."
    },
    {
      id: "mod-sum-7",
      type: "theory",
      title: "Section 2.4/2.5: Applications",
      content: "We applied the Completeness Property to prove the Archimedean Property ($\\mathbb{N}$ is unbounded) and the Density of Rationals ($\\mathbb{Q}$ is dense in $\\mathbb{R}$). These properties are crucial for approximation and analysis."
    }
  ]
};