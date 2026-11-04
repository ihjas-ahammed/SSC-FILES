import { Unit } from '../../types';

export const UNIT_4_1_4_SECTION_SUMMARY: Unit = {
  id: 'unit-4-1-4-section-summary',
  title: 'Section Summary',
  description: 'Consolidation of SageMath fundamentals.',
  color: 'duo-blue',
  lessons:[
    {
      id: 'l414-1-summary',
      title: 'Review: Mathematical Syntax',
      description: 'A look back at Units 17, 18 & 19.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'l414-1-s1',
          type: 'theory',
          title: 'The Sage Paradigm',
          content: 'While NumPy and Pandas force you to think like a computer scientist (managing data types, arrays, and memory), **SageMath** allows you to think like a Mathematician.\n\nThanks to its pre-parser, you bypass strict Python syntax to define functions naturally (`f(x) = x^2`), utilize the mathematical caret `^` for exponents, and maintain absolute exactness (like `sqrt(8)`) rather than defaulting to floating-point approximations.'
        }
      ]
    },
    {
      id: 'l414-2-summary',
      title: 'Review: Solvers & Matrices',
      description: 'A look back at the core toolsets.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'l414-2-s1',
          type: 'theory',
          title: 'Analytical vs Numerical',
          content: 'You learned to model systems of equations using the `matrix()` function and solve them instantly via `.rref()`.\n\nFor non-linear polynomials, you utilized `solve(eq, x)` for exact symbolic outputs (often yielding radicals or complex roots). When exact mathematics fail (e.g., $e^x = 1/x$), you mapped a domain constraint and utilized `find_root(eq, lower, upper)` to deploy numerical algorithms for a highly accurate decimal approximation.'
        }
      ]
    }
  ]
};