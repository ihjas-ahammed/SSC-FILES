import { Module } from '../types';
import { SECTION_2_1_ALGEBRAIC_ORDER } from './section_2_1_algebraic_order';
import { SECTION_2_2_ABSOLUTE_VALUE } from './section_2_2_absolute_value';

export const MODULE_2: Module = {
  id: 'module-2',
  title: 'Module II: The Real Numbers',
  description: 'Algebraic Properties, Order Properties, and the Real Line',
  sections: [
    SECTION_2_1_ALGEBRAIC_ORDER,
    SECTION_2_2_ABSOLUTE_VALUE
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
    }
  ]
};