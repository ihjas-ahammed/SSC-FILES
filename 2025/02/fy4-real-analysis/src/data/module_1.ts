import { Module } from '../types';
import { SECTION_1_1_SET_THEORY } from './section_1_1_set_theory';
import { SECTION_1_2_INDUCTION } from './section_1_2_induction';
import { SECTION_1_3_FINITE_INFINITE } from './section_1_3_finite_infinite';

export const MODULE_1: Module = {
  id: 'module-1',
  title: 'Module I: Introduction to Set Theory',
  description: 'Sets, Functions, Mathematical Induction, and Finite/Infinite Sets',
  sections: [
    SECTION_1_1_SET_THEORY,
    SECTION_1_2_INDUCTION,
    SECTION_1_3_FINITE_INFINITE,
  ],
  moduleSummary: [
    {
      id: "mod-sum-1",
      type: "theory",
      title: "Section 1.1: Set Fundamentals & Mapping",
      content: "This section introduced the foundational concepts of sets, including subsets, equality, operations (union, intersection, complement), and De Morgan's Laws. We also formalized mappings, injective/surjective/bijective functions, composite functions, and inverse functions."
    },
    {
      id: "mod-sum-2",
      type: "theory",
      title: "Section 1.2: Mathematical Induction",
      content: "We explored the Well-Ordering Property of $\\mathbb{N}$, which guarantees a least element in any non-empty subset of natural numbers. Using this, we proved the Principle of Mathematical Induction, a powerful tool for proving statements for all natural numbers by establishing a base case and an inductive bridge."
    },
    {
      id: "mod-sum-3",
      type: "theory",
      title: "Section 1.3: Finite and Infinite Sets",
      content: "We rigorously defined what it means for a set to be finite, infinite, denumerable (countable), and uncountable. We learned that the rationals $\\mathbb{Q}$ are countable using a diagonal mapping, while Cantor's Theorem showed that $\\mathbb{R}$ and power sets strictly exceed the cardinality of their base sets."
    }
  ]
};