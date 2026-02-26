import { Module } from '../types';
import { SECTION_3_1_SEQUENCES_LIMITS } from './section_3_1_sequences_limits';
import { SECTION_3_2_LIMIT_THEOREMS } from './section_3_2_limit_theorems';
import { SECTION_3_3_MONOTONE_SEQUENCES } from './section_3_3_monotone_sequences';

export const MODULE_3: Module = {
  id: 'module-3',
  title: 'Module III: Sequences and Limits',
  description: 'Convergence, Divergence, and Limit Theorems',
  sections: [
    SECTION_3_1_SEQUENCES_LIMITS,
    SECTION_3_2_LIMIT_THEOREMS,
    SECTION_3_3_MONOTONE_SEQUENCES
  ],
  moduleSummary: [
    {
      id: "mod-sum-8",
      type: "theory",
      title: "Section 3.1: Sequences and Limits",
      content: "We defined sequences as functions from $\\mathbb{N}$ to $\\mathbb{R}$. We rigorously defined the limit $x_n \\to x$ using the $\\epsilon-K$ definition: for every $\\epsilon$, there is a tail of the sequence trapped within $\\epsilon$ distance of $x$. We established uniqueness of limits and relationships between tails and the whole sequence."
    },
    {
      id: "mod-sum-9",
      type: "theory",
      title: "Section 3.2: Limit Theorems",
      content: "We expanded our toolkit beyond the definition. Convergent sequences are bounded. Limits respect algebraic operations (sum, product, quotient). We introduced the Squeeze Theorem for bounding difficult limits and the Ratio Test for sequences decaying exponentially."
    },
    {
      id: "mod-sum-10",
      type: "theory",
      title: "Section 3.3: Monotone Sequences",
      content: "We discovered that for monotone sequences (always increasing or decreasing), convergence is equivalent to boundedness. This Monotone Convergence Theorem (MCT) is a powerful tool to prove convergence without knowing the limit beforehand (e.g., for Euler's number $e$ or square roots)."
    }
  ]
};