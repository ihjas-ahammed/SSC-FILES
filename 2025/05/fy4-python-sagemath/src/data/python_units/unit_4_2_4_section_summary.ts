import { Unit } from '../../types';

export const UNIT_4_2_4_SECTION_SUMMARY: Unit = {
  id: 'unit-4-2-4-section-summary',
  title: 'Section Summary',
  description: 'Consolidation of SageMath Calculus operations.',
  color: 'duo-blue',
  lessons:[
    {
      id: 'l424-1-summary',
      title: 'Review: Plotting & Bounds',
      description: 'A look back at Unit 20.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'l424-1-s1',
          type: 'theory',
          title: 'The Continuous Plot',
          content: 'Sage wraps Matplotlib to allow direct plotting of mathematical equations without manual array generation. \n\nBy typing `plot(f(x), x, a, b)`, Sage maps the function smoothly. You learned to constrain infinite bounds using `ymin` and `ymax`, and to superimpose multiple functions by passing them as a tuple or adding their plots together (`plot(f) + plot(g)`).'
        }
      ]
    },
    {
      id: 'l424-2-summary',
      title: 'Review: Exact Calculus',
      description: 'A look back at Units 21 & 22.',
      icon: 'BookOpen',
      slides:[
        {
          id: 'l424-2-s1',
          type: 'theory',
          title: 'Analytical Engines',
          content: 'Sage executes precise analytical calculus through its unified interface. \n\n*   **Differentiation:** `diff(f(x), x, n)` calculates the $n^{th}$ derivative. To manage implicit differentiation, you must strictly bind variables to dependencies: `y = function("y")(x)`.\n*   **Integration:** `integral(f(x), x, a, b)` manages both indefinite and definite integrals analytically. When you need approximations, you revert to classical algorithms like building Riemann Sums using `sum()` and `srange()`.'
        }
      ]
    }
  ]
};