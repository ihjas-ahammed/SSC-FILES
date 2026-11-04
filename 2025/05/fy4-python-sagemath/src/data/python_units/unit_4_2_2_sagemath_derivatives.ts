import { Unit } from '../../types';

export const UNIT_4_2_2_SAGEMATH_DERIVATIVES: Unit = {
  id: 'unit-4-2-2-sagemath-derivatives',
  title: '422: Derivatives',
  description: 'First derivatives, higher-order derivatives, and tangent lines.',
  color: 'duo-red',
  lessons:[
    // L4: The Derivative
    {
      id: 'l422-4-theory',
      title: 'L4: The diff() Command',
      description: 'Taking exact analytical derivatives.',
      icon: 'TrendingUp',
      slides:[
        {
          id: 'l422-4-s1',
          type: 'quiz',
          title: 'Priming: Calculating Derivatives',
          content: 'In Sage, how do we analytically find the derivative of a function like $f(x) = \\cos(x^2)$?',
          options:[
            { id: 'a', text: 'Using the diff() or .derivative() command.', isCorrect: true, explanation: 'Sage uses `diff(f(x), x)` to analytically derive the function.' },
            { id: 'b', text: 'Using the limit() command exclusively.', isCorrect: false, explanation: 'While limits are the definition of a derivative, `diff()` is the direct built-in command.' }
          ]
        },
        {
          id: 'l422-4-s2',
          type: 'theory',
          title: 'Syntax of diff()',
          content: 'To differentiate $f(x, y)$ with respect to $x$:\n`diff(f(x,y), x)`\n\nAlternatively, if $f$ is defined as a Sage function `f(x) = x^3`, you can use the object method:\n`f.derivative(x)` or `f(x).derivative(x)`'
        }
      ]
    },
    // L5: Slope of Tangent
    {
      id: 'l422-5-lemma',
      title: 'L5: Slope of the Tangent Line',
      description: 'Using derivatives to find tangent equations.',
      icon: 'ArrowUpRight',
      slides:[
        {
          id: 'l422-5-s1',
          type: 'example_q',
          title: 'Problem: Tangent Line',
          content: 'Find the equation of the tangent line to the graph of $f(x) = x^2 + 1$ at the point where $x = 2$.'
        },
        {
          id: 'l422-5-s2',
          type: 'solution',
          title: 'Interactive Solution',
          content: 'Build the tangent line equation using Sage.',
          interactiveSteps:[
            {
              prompt: 'First, we need the slope of the tangent line at $x=2$. How do we evaluate $f\'(2)$ in Sage?',
              options:[
                { id: 'a', text: 'diff(f(x)).substitute(x=2)', isCorrect: true, explanation: 'Take the derivative, then substitute $x=2$.' },
                { id: 'b', text: 'diff(f(2))', isCorrect: false, explanation: 'This takes the derivative of a constant, which evaluates to 0!' }
              ]
            },
            {
              prompt: 'The point-slope form of a line is $L(x) = m(x-a) + f(a)$. If `m = diff(f(x)).substitute(x=2)`, what is the full tangent line formula $L(x)$?',
              options:[
                { id: 'a', text: 'L(x) = m * (x - 2) + f(2)', isCorrect: true, explanation: 'Correct. This yields the exact equation of the tangent line.' }
              ]
            }
          ]
        }
      ]
    },
    // L6: Higher-Order Derivatives
    {
      id: 'l422-6-theory',
      title: 'L6: Higher-Order Derivatives',
      description: 'Taking the nth derivative.',
      icon: 'Layers',
      slides:[
        {
          id: 'l422-6-s1',
          type: 'theory',
          title: 'diff(f(x), x, n)',
          content: 'To compute the $n^{th}$ derivative with respect to $x$, simply pass $n$ as the third argument to the `diff()` function.\n\nExample: To find the 255th derivative of $\\cos(x)$:\n`diff(cos(x), x, 255)`\n\nSage returns `sin(x)` instantly, recognizing the modulo-4 cyclic nature of trigonometric derivatives.'
        },
        {
          id: 'l422-6-s2',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'To find the 3rd derivative of $x^4$ with respect to $x$, you type: `diff(x^4, x, ___)`',
          blankAnswer: '3'
        }
      ]
    },
    // L7: Chain Rule and Implicit Differentiation
    {
      id: 'l422-7-theory',
      title: 'L7: Implicit Differentiation',
      description: 'Differentiating equations directly.',
      icon: 'Link',
      slides:[
        {
          id: 'l422-7-s1',
          type: 'theory',
          title: 'Chain Rule and Implicit',
          content: 'Sage handles the Chain Rule automatically for composite functions (e.g., `diff(cos(x^2), x)` yields `-2*x*sin(x^2)`).\n\nFor **Implicit Differentiation** (e.g., finding $dy/dx$ for $x^2 + y^2 = 25$), you must explicitly tell Sage that $y$ is a function of $x$:\n\n```python\ny = function("y")(x)\neq = x^2 + y^2 == 25\ndiff(eq, x)\n```\nSage will return `2*x + 2*y(x)*D[0](y)(x) == 0`. Here, `D[0](y)(x)` represents $dy/dx$.'
        },
        {
          id: 'l422-7-s2',
          type: 'quiz',
          title: 'Concept Check: Dependent Variables',
          content: 'Why must we declare `y = function("y")(x)` before implicitly differentiating?',
          options:[
            { id: 'a', text: 'To explicitly inform Sage that y depends on x, so the Chain Rule applies to y terms.', isCorrect: true, explanation: 'If you just use a standard variable `y`, Sage assumes it is a constant independent of `x`, and its derivative with respect to `x` would be 0.' },
            { id: 'b', text: 'To convert y into a matrix.', isCorrect: false, explanation: 'This is strictly for tracking calculus dependencies.' }
          ]
        }
      ]
    }
  ]
};