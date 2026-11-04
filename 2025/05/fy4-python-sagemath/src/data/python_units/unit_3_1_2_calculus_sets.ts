import { Unit } from '../../types';

export const UNIT_3_1_2_CALCULUS_SETS: Unit = {
  id: 'unit-3-1-2-calculus-sets',
  title: '312: Calculus & Sets',
  description: 'Differentiation, Integration, and Set Operations.',
  color: 'duo-red',
  lessons:[
    {
      id: 'l312-6-theory',
      title: 'L6: Calculus Overview',
      description: 'SymPy calculus capabilities.',
      icon: 'Activity',
      slides:[
        {
          id: 'l312-6-s1',
          type: 'quiz',
          title: 'Priming: Exact Calculus',
          content: 'When you take a derivative numerically, you use tiny steps ($\\Delta x$). How does SymPy do it?',
          options:[
            { id: 'a', text: 'It uses extremely small floats for dx.', isCorrect: false, explanation: 'That is numerical differentiation.' },
            { id: 'b', text: 'It applies the exact algebraic rules of calculus (like the chain rule and product rule).', isCorrect: true, explanation: 'SymPy acts like a human mathematician, applying exact algorithmic rules.' }
          ]
        },
        {
          id: 'l312-6-s2',
          type: 'theory',
          title: 'Calculus in SymPy',
          content: 'SymPy is fully capable of performing operations like derivatives, integrals, limits, and series expansions analytically.\n\nIt handles expressions involving trigonometric functions, exponentials, and polynomials precisely without rounding errors.'
        }
      ]
    },
    {
      id: 'l312-7-definition',
      title: 'L7: Differentiation',
      description: 'sp.diff()',
      icon: 'TrendingUp',
      slides:[
        {
          id: 'l312-7-s1',
          type: 'theory',
          title: 'sp.diff(expr, var)',
          content: 'To differentiate an expression, use `sp.diff()`.\n\n```python\nexpr = sp.sin(x)\nsp.diff(expr, x)\n```\nTo take higher-order derivatives, pass the variable multiple times, or pass an integer:\n`sp.diff(expr, x, x)` or `sp.diff(expr, x, 2)` for the 2nd derivative.'
        },
        {
          id: 'l312-7-s2',
          type: 'theory',
          title: 'Unevaluated Derivatives',
          content: 'To create an unevaluated derivative (just setting up the math without solving it immediately), use the `sp.Derivative(expr, var)` object. \n\nYou can evaluate it later using the `.doit()` method.'
        },
        {
          id: 'l312-7-s3',
          type: 'python_example',
          title: 'Interactive Sandbox',
          content: 'Calculate the 3rd derivative of $x^4$.',
          code: "import sympy as sp\nx = sp.symbols('x')\n\nexpr = x**4\nres = sp.diff(expr, x, 3)\nprint('3rd Derivative:', res)"
        }
      ]
    },
    {
      id: 'l312-8-definition',
      title: 'L8: Integration',
      description: 'sp.integrate()',
      icon: 'Sigma',
      slides:[
        {
          id: 'l312-8-s1',
          type: 'theory',
          title: 'Indefinite and Definite Integrals',
          content: 'Use `sp.integrate()` for integration.\n\n**Indefinite Integral:**\n`sp.integrate(sp.exp(x), x)`\n\n**Definite Integral:**\nPass a tuple `(variable, lower_limit, upper_limit)`.\n`sp.integrate(sp.exp(-x), (x, 0, sp.oo))`\n\nNote: Infinity in SymPy is represented by two lowercase o\'s: `sp.oo`.'
        },
        {
          id: 'l312-8-s2',
          type: 'quiz',
          title: 'Concept Check: Integration Constant',
          content: 'Does SymPy automatically include the constant of integration $+ C$ for indefinite integrals?',
          options:[
            { id: 'a', text: 'Yes, it always appends + C.', isCorrect: false, explanation: 'SymPy returns the antiderivative without the constant of integration.' },
            { id: 'b', text: 'No, it does not include the constant.', isCorrect: true, explanation: 'SymPy mathematically returns just the primitive function; you must add the constant yourself if required.' }
          ]
        },
        {
          id: 'l312-8-s3',
          type: 'python_example',
          title: 'Interactive Sandbox',
          content: 'Calculate the definite integral of $x^2$ from 0 to 3.',
          code: "import sympy as sp\nx = sp.symbols('x')\n\nans = sp.integrate(x**2, (x, 0, 3))\nprint('Definite Integral:', ans)"
        }
      ]
    },
    {
      id: 'l312-9-theory',
      title: 'L9: Numeric Evaluation',
      description: '.evalf()',
      icon: 'Hash',
      slides:[
        {
          id: 'l312-9-s1',
          type: 'theory',
          title: 'Numeric Evaluation (.evalf)',
          content: 'When SymPy outputs an exact symbolic answer (like $\\pi/4$ or $\\sqrt{2}$), you may need a numerical floating-point value.\n\nUse the `.evalf(n)` method on the expression to evaluate it to `n` decimal places of precision.\n\nExample: `sp.pi.evalf(50)` gives 50 digits of Pi.'
        },
        {
          id: 'l312-9-s2',
          type: 'python_example',
          title: 'Interactive Sandbox',
          content: 'Evaluate the square root of 2 to 20 decimal places.',
          code: "import sympy as sp\n\nexpr = sp.sqrt(2)\nprint('Exact:', expr)\nprint('Numeric:', expr.evalf(20))"
        }
      ]
    },
    {
      id: 'l312-10-theory',
      title: 'L10: Set Operations',
      description: 'FiniteSets and operations.',
      icon: 'PieChart',
      slides:[
        {
          id: 'l312-10-s1',
          type: 'theory',
          title: 'Sets in SymPy',
          content: 'SymPy can perform set operations algebraically.\n\nYou create a set using `sp.FiniteSet()`.\nMethods available include `.intersect()`, `.union()`, and `.complement()`.'
        },
        {
          id: 'l312-10-s2',
          type: 'python_example',
          title: 'Interactive Sandbox',
          content: 'Find the intersection of two finite sets.',
          code: "import sympy as sp\n\nA = sp.FiniteSet(1, 2, 3)\nB = sp.FiniteSet(2, 3, 4)\n\nprint('Union:', A.union(B))\nprint('Intersection:', A.intersect(B))"
        }
      ]
    }
  ]
};