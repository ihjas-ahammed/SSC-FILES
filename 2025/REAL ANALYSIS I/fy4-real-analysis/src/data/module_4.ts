import { Module } from '../types';
import { SECTION_3_4_SUBSEQUENCES } from './section_3_4_subsequences';
import { SECTION_3_5_CAUCHY_CRITERION } from './section_3_5_cauchy_criterion';
import { SECTION_4_1_LIMITS_OF_FUNCTIONS } from './section_4_1_limits_of_functions';
import { SECTION_4_2_THEOREMS_EXTENSIONS } from './section_4_2_theorems_extensions';

export const MODULE_4: Module = {
  id: 'module-4',
  title: 'Module IV: Sequences (Cont.) and Function Limits',
  description: 'Subsequences, Cauchy Sequences, and Limits of Functions',
  sections: [
    SECTION_3_4_SUBSEQUENCES,
    SECTION_3_5_CAUCHY_CRITERION,
    SECTION_4_1_LIMITS_OF_FUNCTIONS,
    SECTION_4_2_THEOREMS_EXTENSIONS
  ],
  moduleSummary: [
    {
      id: "mod-sum-11",
      type: "theory",
      title: "Section 3.4: Subsequences",
      content: "We introduced subsequences and proved the Bolzano-Weierstrass Theorem: Every bounded sequence has a convergent subsequence. This is a crucial compactness result."
    },
    {
      id: "mod-sum-12",
      type: "theory",
      title: "Section 3.5: Cauchy Criterion",
      content: "We defined Cauchy sequences (terms getting closer to each other) and proved they are equivalent to convergent sequences in $\\mathbb{R}$. This provides a convergence test that doesn't require knowing the limit."
    },
    {
      id: "mod-sum-13",
      type: "theory",
      title: "Section 4.1: Limits of Functions",
      content: "We transitioned from sequences to functions using the $\\epsilon-\\delta$ definition of a limit at a cluster point. The Sequential Criterion bridged the gap, allowing us to prove that a function limit exists if and only if every sequence converging to the cluster point maps to a sequence converging to the same limit."
    },
    {
      id: "mod-sum-14",
      type: "theory",
      title: "Section 4.2/4.3: Limit Theorems and Extensions",
      content: "We proved that functions with limits are locally bounded. We extended algebraic limit theorems (sums, products, quotients) from sequences to functions. We also introduced the Squeeze Theorem for functions. Finally, we explored extensions of the limit concept: one-sided limits ($x \to c^+$), infinite limits ($f(x) \to \infty$), and limits at infinity ($x \to \infty$)."
    }
  ]
};