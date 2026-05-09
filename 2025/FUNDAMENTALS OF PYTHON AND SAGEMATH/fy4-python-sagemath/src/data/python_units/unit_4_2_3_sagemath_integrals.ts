import { Unit } from '../../types';

export const UNIT_4_2_3_SAGEMATH_INTEGRALS: Unit = {
  id: 'unit-4-2-3-sagemath-integrals',
  title: '423: Integrals',
  description: 'Antiderivatives, definite integrals, and Riemann sums.',
  color: 'duo-violet',
  lessons:[
    // L8: Antiderivatives
    {
      id: 'l423-8-theory',
      title: 'L8: Antiderivatives (Indefinite)',
      description: 'Solving the indefinite integral.',
      icon: 'Sigma',
      slides:[
        {
          id: 'l423-8-s1',
          type: 'quiz',
          title: 'Priming: Integration Constants',
          content: 'If you compute an indefinite integral analytically on paper, you must append `+ C`. Does SageMath append `+ C` to its answers?',
          options:[
            { id: 'a', text: 'No, SageMath returns the primitive function without the constant of integration.', isCorrect: true, explanation: 'It returns the raw antiderivative. The mathematician must remember the arbitrary constant applies to families of functions.' },
            { id: 'b', text: 'Yes, it automatically adds + C.', isCorrect: false, explanation: 'Sage does not include + C.' }
          ]
        },
        {
          id: 'l423-8-s2',
          type: 'theory',
          title: 'The integral() Command',
          content: 'To compute the indefinite integral of $f(x)$ with respect to $x$:\n\n`integral(f(x), x)`\n\n*(Note: `integrate()` is a synonym for `integral()`).*'
        }
      ]
    },
    // L9: Definite Integrals
    {
      id: 'l423-9-theory',
      title: 'L9: Definite Integrals',
      description: 'Evaluating over a boundary.',
      icon: 'ListOrdered',
      slides:[
        {
          id: 'l423-9-s1',
          type: 'theory',
          title: 'Definite Bounds',
          content: 'To compute a definite integral (which evaluates to a number or a bounded algebraic expression), add the lower and upper bounds:\n\n`integral(f(x), x, a, b)`\n\nExample:\n`integral(x^2, x, 0, 1)` returns `1/3`.'
        },
        {
          id: 'l423-9-s2',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'To evaluate the definite integral of `sin(x)` from `0` to `pi`, type: `integral(sin(x), x, 0, ___)`',
          blankAnswer: 'pi'
        }
      ]
    },
    // L10: Riemann Sums
    {
      id: 'l423-10-definition',
      title: 'L10: Riemann Sums',
      description: 'Numerical approximation via Left Endpoints.',
      icon: 'BarChart',
      slides:[
        {
          id: 'l423-10-s1',
          type: 'example_q',
          title: 'Problem: Area Approximation',
          content: 'The definite integral is defined as the limit of a Riemann sum. \n\nHow do we approximate the area under $f(x) = x^2$ from $x=0$ to $x=2$ using a Left Endpoint Riemann sum with $n=4$ rectangles?'
        },
        {
          id: 'l423-10-s2',
          type: 'solution',
          title: 'Algorithmic Tracing',
          content: 'Construct the Riemann sum in Sage.',
          interactiveSteps:[
            {
              prompt: 'First, calculate the width of each rectangle, $\\Delta x$. If the interval is $[0, 2]$ and $n=4$, what is $\\Delta x$?',
              options:[
                { id: 'a', text: 'dx = (2 - 0) / 4 = 0.5', isCorrect: true, explanation: 'The width of each subinterval is (b - a) / n.' }
              ]
            },
            {
              prompt: 'For a Left Riemann sum, we evaluate the function at the left edge of each subinterval. What are the 4 evaluation points?',
              options:[
                { id: 'a', text: 'x = 0, 0.5, 1.0, 1.5', isCorrect: true, explanation: 'We start at a=0 and take 4 steps of dx=0.5, stopping before the right edge (2.0).' }
              ]
            },
            {
              prompt: 'To calculate the total area, we sum $f(x_i) \\cdot \\Delta x$. How is this written as a list comprehension in Python/Sage?',
              options:[
                { id: 'a', text: 'sum([f(i) * dx for i in srange(0, 2, dx)])', isCorrect: true, explanation: 'The `srange` function creates the list of evaluation points[0, 0.5, 1.0, 1.5], we evaluate the area of each rectangle, and sum them up.' }
              ]
            }
          ]
        }
      ]
    }
  ]
};