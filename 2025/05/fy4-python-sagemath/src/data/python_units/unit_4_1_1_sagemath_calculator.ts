import { Unit } from '../../types';

export const UNIT_4_1_1_SAGEMATH_CALCULATOR: Unit = {
  id: 'unit-4-1-1-sagemath-calculator',
  title: '411: Calculator & Functions',
  description: 'Installation, exact arithmetic, and core mathematical functions in SageMath.',
  color: 'duo-blue',
  lessons:[
    // L1: Getting and installing
    {
      id: 'l411-1-theory',
      title: 'L1: Getting Started with Sage',
      description: 'Understanding the SageMath ecosystem.',
      icon: 'Monitor',
      slides:[
        {
          id: 'l411-1-s1',
          type: 'quiz',
          title: 'Priming: Why SageMath?',
          content: 'You have already used Python with NumPy and SymPy. Why would mathematicians create a massive, unified software system like SageMath?',
          options:[
            { id: 'a', text: 'To replace Python completely with a new language.', isCorrect: false, explanation: 'SageMath is actually built ON TOP of Python.' },
            { id: 'b', text: 'To unify dozens of disparate open-source math packages (like Maxima, GAP, and SymPy) under one common Python-based interface.', isCorrect: true, explanation: 'SageMath acts as a giant umbrella, integrating the best open-source math software into a single, cohesive Python environment.' }
          ]
        },
        {
          id: 'l411-1-s2',
          type: 'theory',
          title: 'Accessing SageMath',
          content: 'SageMath is a powerful Computer Algebra System (CAS). Because it relies on hundreds of complex dependencies, installing it locally on Windows or Ubuntu can be heavy.\n\n**The Modern Solution: CoCalc**\nInstead of local installation, the best way to use Sage is via the Cloud on **CoCalc** (Collaborative Calculation, formerly SageMathCloud). It provides a full Sage Jupyter notebook environment in your browser without any installation.'
        }
      ]
    },
    // L2: Using Sage as a Calculator
    {
      id: 'l411-2-theory',
      title: 'L2: Sage as a Calculator',
      description: 'Exactness and exponentiation syntax.',
      icon: 'Calculator',
      slides:[
        {
          id: 'l411-2-s1',
          type: 'theory',
          title: 'Exact Evaluation',
          content: 'SageMath behaves as an incredibly powerful calculator. \n\nLike standard Python, it supports `+`, `-`, `*`, and `/`.\nHowever, Sage includes a syntax pre-parser that makes math easier:\n1. **Exponents:** You can use the caret `^` for exponents instead of just `**`. (e.g., `2^3` gives `8`).\n2. **Exact Answers:** Sage preserves exact fractions. `sqrt(8)` returns `2*sqrt(2)` instead of a decimal.\n\nTo force a decimal approximation, wrap the expression in `N()` or `n()`. \nExample: `N(sqrt(8))` yields `2.828427...`'
        },
        {
          id: 'l411-2-s2',
          type: 'quiz',
          title: 'Concept Check: The N() Function',
          content: 'What is the purpose of the `N()` function in SageMath?',
          options:[
            { id: 'a', text: 'To convert algebraic expressions into precise floating-point decimals.', isCorrect: true, explanation: 'N() or n() stands for "numerical approximation".' },
            { id: 'b', text: 'To normalize a vector.', isCorrect: false, explanation: 'It is strictly used for decimal approximations.' }
          ]
        },
        {
          id: 'l411-2-s3',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'In standard Python, the caret `^` is a Bitwise XOR operator. In SageMath, because of the pre-parser, typing `5^2` evaluates to ___',
          blankAnswer: '25'
        }
      ]
    },
    // L3: Common Functions
    {
      id: 'l411-3-theory',
      title: 'L3: Common Functions',
      description: 'Square roots, logs, and exponentials.',
      icon: 'FunctionSquare',
      slides:[
        {
          id: 'l411-3-s1',
          type: 'theory',
          title: 'Roots and Logs',
          content: 'Standard mathematical functions are built-in without needing to `import math`.\n\n*   **Higher Order Roots:** Use fractional exponents: `64^(1/6)` returns `2`.\n*   **Constants:** Pi is `pi` and Euler\'s number is `e`.\n*   **Exponentials:** Use `e^3` or `exp(3)`.\n*   **Logarithms:** `log(x)` calculates the natural logarithm (base e). \n    To specify a base, use a second argument: `log(100, 10)` calculates log base 10.'
        },
        {
          id: 'l411-3-s2',
          type: 'quiz',
          title: 'Concept Check: Log Base',
          content: 'How do you calculate the base-2 logarithm of 100 in SageMath?',
          options:[
            { id: 'a', text: 'log(100, 2)', isCorrect: true, explanation: 'The second argument specifies the base.' },
            { id: 'b', text: 'log2(100)', isCorrect: false, explanation: 'While common in some libraries, Sage prefers passing the base as the second argument to `log`.' }
          ]
        }
      ]
    },
    // L4: Trigonometry
    {
      id: 'l411-4-theory',
      title: 'L4: Trigonometry',
      description: 'Radians, standard functions, and inverses.',
      icon: 'TriangleRight',
      slides:[
        {
          id: 'l411-4-s1',
          type: 'theory',
          title: 'Trigonometric Functions',
          content: 'Sage works entirely in **radians**.\n\n*   `sin(pi/3)` evaluates exactly to `1/2*sqrt(3)`.\n*   Inverse functions are written as `arcsin(1/2)`, `arccos(x)`, and `arctan(x)`.\n*   Reciprocal functions like `sec(x)`, `csc(x)`, and `cot(x)` are fully built-in.'
        },
        {
          id: 'l411-4-s2',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'To find the numerical decimal approximation of the cosine of pi over 12, you wrap the expression: `___(cos(pi/12))`',
          blankAnswer: 'N'
        }
      ]
    }
  ]
};