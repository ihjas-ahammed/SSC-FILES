import { Unit } from '../../types';

export const UNIT_3_1_1_SYMPY_FOUNDATIONS: Unit = {
  id: 'unit-3-1-1-sympy-foundations',
  title: '311: SymPy Foundations',
  description: 'Symbols, Expressions, and Algebraic Manipulation.',
  color: 'duo-blue',
  lessons:[
    // L1: SymPy, Symbolic Computation
    {
      id: 'l311-1-theory',
      title: 'L1: Symbolic Computation',
      description: 'Exact math vs Floating Point approximations.',
      icon: 'Brain',
      slides:[
        {
          id: 'l311-1-s1',
          type: 'quiz',
          title: 'Priming: Precision',
          content: 'If you calculate `math.sqrt(3)` in standard Python, you get `1.7320508...` What if you want to perform algebra while keeping the square root exactly as $\\sqrt{3}$?',
          options:[
            { id: 'a', text: 'You use a Computer Algebra System (CAS) like SymPy.', isCorrect: true, explanation: 'A CAS treats numbers and variables as mathematical symbols, performing exact algebra without float approximation.' },
            { id: 'b', text: 'You increase the float precision.', isCorrect: false, explanation: 'Float precision still loses exactness. Symbolic computation avoids floats entirely.' }
          ]
        },
        {
          id: 'l311-1-s2',
          type: 'theory',
          title: 'SymPy',
          content: 'SymPy is a fully featured Computer Algebra System (CAS) written in Python. \n\nInstead of calculating numerical answers, it restates algebraic formulas and methods in an exact mathematical form (e.g., maintaining fractions like $1/3$ instead of `0.3333`).'
        }
      ]
    },
    // L2: Symbols
    {
      id: 'l311-2-definition',
      title: 'L2: Defining Symbols',
      description: 'sp.symbols()',
      icon: 'WholeWord',
      slides:[
        {
          id: 'l311-2-s1',
          type: 'theory',
          title: 'sp.symbols',
          content: 'In SymPy, variables are not defined automatically. They must be declared as **Symbols** before use.\n\n```python\nimport sympy as sp\nx, y = sp.symbols(\'x y\')\nexpr = x * x\n```\nThis binds the mathematical symbol `x` to the Python variable `x`.'
        },
        {
          id: 'l311-2-s2',
          type: 'quiz',
          title: 'Concept Check: Symbols vs Variables',
          content: 'What happens if you type `expr = z + 1` without defining `z` as a symbol first?',
          options:[
            { id: 'a', text: "NameError: name 'z' is not defined", isCorrect: true, explanation: 'Python does not automatically know that `z` is a math symbol. It thinks you are referencing an undeclared Python variable.' },
            { id: 'b', text: 'SymPy auto-creates the symbol z.', isCorrect: false, explanation: 'SymPy requires explicit declaration.' }
          ]
        },
        {
          id: 'l311-2-s3',
          type: 'python_example',
          title: 'Interactive Sandbox',
          content: 'Declare symbols and create an expression.',
          code: "import sympy as sp\n\nx, y = sp.symbols('x y')\nexpr = x**2 + 2*y\nprint(expr)"
        }
      ]
    },
    // L3: Formatting Output
    {
      id: 'l311-3-theory',
      title: 'L3: Formatting the Output',
      description: 'init_printing() and pprint.',
      icon: 'Monitor',
      slides:[
        {
          id: 'l311-3-s1',
          type: 'theory',
          title: 'Output Formatting',
          content: 'Plain text output for complex equations is hard to read. \n\nSymPy provides `sp.init_printing()` which automatically enables the best available printer for your environment (like LaTeX in Jupyter Notebooks or Unicode in terminals).\n\nYou can also explicitly use `sp.pprint(expr)` for "pretty printing".'
        },
        {
          id: 'l311-3-s2',
          type: 'python_example',
          title: 'Execution Test',
          content: 'See how pprint formats an integral visually in text.',
          code: "import sympy as sp\n\nx = sp.symbols('x')\nexpr = sp.Integral(sp.sin(x)**2, x)\n\nprint('Standard Print:')\nprint(expr)\n\nprint('\\nPretty Print:')\nsp.pprint(expr)"
        }
      ]
    },
    // L4: Simplification
    {
      id: 'l311-4-theory',
      title: 'L4: Simplification',
      description: 'sp.simplify()',
      icon: 'Minimize2',
      slides:[
        {
          id: 'l311-4-s1',
          type: 'theory',
          title: 'Simplification',
          content: 'SymPy can mathematically simplify algebraic expressions using `sp.simplify()`.\n\nIt attempts to choose the best mathematical identity to reduce the expression to its simplest form. For example, it can simplify $\\sin^2(x) + \\cos^2(x)$ down to $1$.'
        },
        {
          id: 'l311-4-s2',
          type: 'python_example',
          title: 'Execution Test',
          content: 'Test the simplification engine.',
          code: "import sympy as sp\nx = sp.symbols('x')\n\nexpr = sp.sin(x)**2 + sp.cos(x)**2\nprint('Original:', expr)\nprint('Simplified:', sp.simplify(expr))"
        }
      ]
    },
    // L5: Expand, Factor, Collect
    {
      id: 'l311-5-example',
      title: 'L5: Expand, Factor, Collect',
      description: 'Algebraic manipulation methods.',
      icon: 'Scissors',
      slides:[
        {
          id: 'l311-5-s1',
          type: 'example_q',
          title: 'Problem: Algebraic Manipulation',
          content: 'Given the expression $\\text{expr} = (x+y)^2$, how do you expand it? If you have $x^2 - y^2$, how do you factor it? If you have $xy + x - 3 + 2x^2y$, how do you collect terms of $x$?'
        },
        {
          id: 'l311-5-s2',
          type: 'solution',
          title: 'Algorithmic Tracing',
          content: 'Match the algebraic requirement to the SymPy method.',
          interactiveSteps:[
            {
              prompt: 'To expand $(x+y)^2$ into $x^2 + 2xy + y^2$, use:',
              options:[
                { id: 'a', text: 'sp.expand((x+y)**2)', isCorrect: true, explanation: 'Expand multiplies out polynomials.' },
                { id: 'b', text: 'sp.factor((x+y)**2)', isCorrect: false, explanation: 'Factor does the reverse.' }
              ]
            },
            {
              prompt: 'To factor $x^2 - y^2$ into $(x-y)(x+y)$, use:',
              options:[
                { id: 'a', text: 'sp.factor(x**2 - y**2)', isCorrect: true, explanation: 'Factor reduces a polynomial into irreducible factors.' }
              ]
            },
            {
              prompt: 'To group common powers of a specific variable (e.g., $x$), use:',
              options:[
                { id: 'a', text: 'sp.collect(expr, x)', isCorrect: true, explanation: 'Collect groups terms that have the same power of x.' }
              ]
            }
          ]
        },
        {
          id: 'l311-5-s3',
          type: 'python_example',
          title: 'Interactive Sandbox',
          content: 'Test the algebraic manipulations.',
          code: "import sympy as sp\nx, y = sp.symbols('x y')\n\ne1 = (x+y)**2\nprint('Expanded:', sp.expand(e1))\n\ne2 = x**2 - y**2\nprint('Factored:', sp.factor(e2))\n\ne3 = x*y + x - 3 + 2*x**2*y\nprint('Collected for x:', sp.collect(e3, x))"
        }
      ]
    }
  ]
};