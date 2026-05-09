import { Module } from '../types';
import { SECTION_4_1_SAGEMATH } from './section_4_1_sagemath';
import { SECTION_4_2_CALCULUS } from './section_4_2_calculus';

export const MODULE_4_SAGEMATH: Module = {
  id: 'module-4-sagemath',
  title: 'Module IV: Sagemath – An Introduction',
  description: 'Unifying python and mathematics using the SageMath Computer Algebra System.',
  sections:[
    SECTION_4_1_SAGEMATH,
    SECTION_4_2_CALCULUS
  ],
  moduleSummary:[
    {
      id: 'mod-sum-sage-1',
      type: 'theory',
      title: 'Mental Model: The Ultimate CAS',
      content: 'SageMath acts as a massive umbrella, unifying dozens of disparate mathematical software packages under a single, highly readable Python interface. It completely bridges the gap between programming and natural mathematics.'
    },
    {
      id: 'mod-sum-sage-2',
      type: 'theory',
      title: 'Mental Model: The Pre-Parser',
      content: 'To achieve natural mathematical syntax, SageMath intercepts your code before Python executes it. This "pre-parser" enables features that standard Python forbids, such as defining mathematical functions directly (`f(x) = x^3 - x`), utilizing the caret `^` for exponents instead of `**`, and preserving absolute exactness with fractions and roots instead of collapsing them into floats.'
    },
    {
      id: 'mod-sum-sage-3',
      type: 'theory',
      title: 'Mental Model: Solving Paradigms',
      content: 'In Sage, you command different solving engines based on the mathematical reality of the problem. You reduce linear systems to matrices and apply `.rref()`. You solve algebraic equations exactly using `solve()`. And when analytical boundaries are hit (like transcendental intersections), you deploy bounded numerical approximations using `find_root()`.'
    },
    {
      id: 'mod-sum-sage-4',
      type: 'theory',
      title: 'Mental Model: Calculus & Geometry',
      content: 'Rather than generating discrete NumPy grids to plot curves, Sage analyzes continuous functions via `plot(f, x, a, b)` to guarantee smooth geometries. You learned to execute the fundamental theorems of calculus analytically using `diff()` and `integral()`, translating paper-and-pencil exactness directly into computational logic.'
    }
  ]
};