import { Unit } from '../../types';

export const UNIT_4_1_3_SAGEMATH_POLYNOMIALS: Unit = {
  id: 'unit-4-1-3-sagemath-polynomials',
  title: '413: Polynomials & Solvers',
  description: 'Mathematical functions, factoring, and equation solvers.',
  color: 'duo-violet',
  lessons:[
    // L8: Making your Own Functions
    {
      id: 'l413-8-theory',
      title: 'L8: Mathematical Functions',
      description: 'Defining f(x) directly.',
      icon: 'Activity',
      slides:[
        {
          id: 'l413-8-s1',
          type: 'quiz',
          title: 'Priming: Python vs Sage',
          content: 'In standard Python, how do you define a function $f(x) = x^3 - x$?',
          options:[
            { id: 'a', text: 'def f(x): return x**3 - x', isCorrect: true, explanation: 'Standard Python requires the `def` block.' },
            { id: 'b', text: 'f(x) = x^3 - x', isCorrect: false, explanation: 'This will cause a SyntaxError in standard Python.' }
          ]
        },
        {
          id: 'l413-8-s2',
          type: 'theory',
          title: 'Sage Math Functions',
          content: 'In **SageMath**, the creators brilliantly designed it so you can define mathematical functions exactly as you write them on paper.\n\nInstead of a `def` block, you just type:\n`f(x) = x^3 - x`\n\nYou can then instantly evaluate it by calling `f(2)`, which returns `6`.'
        }
      ]
    },
    // L9: Manipulating Polynomials
    {
      id: 'l413-9-theory',
      title: 'L9: Polynomial Manipulation',
      description: 'Expand, factor, and GCD.',
      icon: 'Scissors',
      slides:[
        {
          id: 'l413-9-s1',
          type: 'theory',
          title: 'Algebraic Methods',
          content: 'Because Sage treats $x$ as an unknown symbol by default, you can manipulate polynomials elegantly using object methods.\n\nIf `g(x) = (x-2)*(x-3)^2`:\n*   `g.expand()` multiplies it out into standard polynomial form.\n*   `g.factor()` reduces an expanded polynomial back into roots.\n\nYou can also find the Greatest Common Divisor between two polynomials using `gcd(a(x), b(x))`.'
        },
        {
          id: 'l413-9-s2',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'To multiply out the terms of a polynomial `P`, use the method `P.___()`',
          blankAnswer: 'expand'
        }
      ]
    },
    // L10: Solving Symbolically
    {
      id: 'l413-10-theory',
      title: 'L10: Solving Symbolically',
      description: 'Exact solutions using solve().',
      icon: 'Key',
      slides:[
        {
          id: 'l413-10-s1',
          type: 'theory',
          title: 'The solve() Command',
          content: 'To solve an equation symbolically (getting an exact algebraic answer like $1 - \\sqrt{5}$), use the `solve()` command.\n\nFirst, declare any unknown variables using `var()`. (Note: $x$ is pre-declared in Sage).\n`var("p q y")`\n\nThen, use a double equals sign `==` to represent the equality:\n`solve(a*x^2 + b*x + c == 0, x)`\n\nIt returns a list of exact solutions.'
        },
        {
          id: 'l413-10-s2',
          type: 'quiz',
          title: 'Concept Check: Equality',
          content: 'Why must we use `==` instead of `=` inside the `solve()` function?',
          options:[
            { id: 'a', text: 'Because `=` is the assignment operator (assigning a value to memory), while `==` is the mathematical equality operator.', isCorrect: true, explanation: 'You are stating a mathematical equivalence, not assigning a value.' },
            { id: 'b', text: 'Sage requires == to indicate exact precision.', isCorrect: false, explanation: 'It is simply the difference between assignment and comparison/equality.' }
          ]
        },
        {
          id: 'l413-10-s3',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'To declare the variables `a`, `b`, and `c` as unknowns before solving, you type: `___("a b c")`',
          blankAnswer: 'var'
        }
      ]
    },
    // L11: Numerical Solver
    {
      id: 'l413-11-theory',
      title: 'L11: Numerical Solver',
      description: 'Finding approximate roots via find_root().',
      icon: 'Hash',
      slides:[
        {
          id: 'l413-11-s1',
          type: 'theory',
          title: 'find_root()',
          content: 'Some equations, like $x^x = 5$ or $e^x = 1/x$, cannot be solved analytically (exact symbolic formulas do not exist).\n\nFor these, we must use numerical approximations. Sage provides `find_root(equation, lower_bound, upper_bound)`.\n\nExample:\n`find_root(x^x == 5, 1, 10)` searches for the root between $x=1$ and $x=10$, returning a highly precise float like `2.1293...`'
        },
        {
          id: 'l413-11-s2',
          type: 'quiz',
          title: 'Concept Check: Bounds',
          content: 'What happens if you type `find_root(x^5 + x - 1, -1, 0)` but the curve never crosses the X-axis in that interval?',
          options:[
            { id: 'a', text: 'Sage returns a RuntimeError stating it appears to have no zero on the interval.', isCorrect: true, explanation: 'Numerical solvers require a domain where the function crosses zero. If it doesn\'t, it errors out honestly.' },
            { id: 'b', text: 'It returns an imaginary number.', isCorrect: false, explanation: '`find_root` looks for real crossings within the specified bounds.' }
          ]
        }
      ]
    }
  ]
};