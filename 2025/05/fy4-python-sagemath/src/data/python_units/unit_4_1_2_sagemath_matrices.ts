import { Unit } from '../../types';

export const UNIT_4_1_2_SAGEMATH_MATRICES: Unit = {
  id: 'unit-4-1-2-sagemath-matrices',
  title: '412: Matrices in Sage',
  description: 'Defining matrices and solving linear systems via RREF.',
  color: 'duo-green',
  lessons:[
    // L5: Matrices and Sage, Part One
    {
      id: 'l412-5-theory',
      title: 'L5: Matrix Syntax',
      description: 'Building matrices efficiently.',
      icon: 'Grid',
      slides:[
        {
          id: 'l412-5-s1',
          type: 'quiz',
          title: 'Priming: System Solving',
          content: 'Why do mathematicians convert linear systems of equations into matrices?',
          options:[
            { id: 'a', text: 'To reduce the equations into a dense numerical format, allowing algorithmic solving like Gaussian Elimination.', isCorrect: true, explanation: 'Matrices separate the coefficients from the variables, allowing computers to solve massive systems instantly.' },
            { id: 'b', text: 'To draw 3D plots.', isCorrect: false, explanation: 'While matrices can represent 3D transformations, their primary algebraic use is solving linear systems.' }
          ]
        },
        {
          id: 'l412-5-s2',
          type: 'theory',
          title: 'The matrix() Command',
          content: 'In SageMath, you define a matrix by specifying the number of rows, the number of columns, and a single flat list of entries (read left-to-right, top-to-bottom).\n\n```python\nA = matrix(3, 4,[3, -4, 5, 14,\n                  1,  1,-8, -5,\n                  2,  1, 1,  7])\n```\nLike Python, Sage matrices use **0-based indexing**. The top-left element is `A[0][0]`.'
        }
      ]
    },
    // L6: First Taste of Matrices
    {
      id: 'l412-6-example',
      title: 'L6: System to Matrix',
      description: 'Converting equations into an augmented matrix.',
      icon: 'ArrowRightCircle',
      slides:[
        {
          id: 'l412-6-s1',
          type: 'example_q',
          title: 'Problem: Linear Systems',
          content: 'You are given the following system of equations:\n\n$3x - 4y + 5z = 14$\n$x + y - 8z = -5$\n$2x + y + z = 7$\n\nHow do we map this into SageMath?'
        },
        {
          id: 'l412-6-s2',
          type: 'solution',
          title: 'Algorithmic Tracing',
          content: 'Construct the augmented matrix.',
          interactiveSteps:[
            {
              prompt: 'How many rows and columns will the augmented matrix have?',
              options:[
                { id: 'a', text: '3 rows, 4 columns', isCorrect: true, explanation: '3 equations = 3 rows. 3 variables + 1 constant vector = 4 columns.' }
              ]
            },
            {
              prompt: 'Which code perfectly maps this system into Sage?',
              options:[
                { id: 'a', text: 'A = matrix(3, 4,[3, -4, 5, 14, 1, 1, -8, -5, 2, 1, 1, 7])', isCorrect: true, explanation: 'The coefficients and constants are passed in a single flat list, mapping row by row.' },
                { id: 'b', text: 'A = matrix(4, 3,[3, 1, 2, -4, 1, 1, 5, -8, 1, 14, -5, 7])', isCorrect: false, explanation: 'This defines 4 rows and 3 columns, passing the data column-by-column.' }
              ]
            }
          ]
        }
      ]
    },
    // L7: RREF in Sage
    {
      id: 'l412-7-example',
      title: 'L7: Solving via RREF',
      description: 'Reduced Row Echelon Form.',
      icon: 'CheckSquare',
      slides:[
        {
          id: 'l412-7-s1',
          type: 'theory',
          title: 'Computing RREF',
          content: 'Once the matrix $A$ is defined, you can solve the entire system instantly by converting it to **Reduced Row Echelon Form (RREF)**.\n\n```python\nprint(A.rref())\n```\nThe output will be an identity matrix on the left, and the solutions for $x$, $y$, and $z$ in the right-most column.'
        },
        {
          id: 'l412-7-s2',
          type: 'quiz',
          title: 'Interpreting RREF',
          content: 'You run `A.rref()` and the last row of the output is `[0, 0, 0, 1]`. What does this mathematically mean?',
          options:[
            { id: 'a', text: 'The system has no solutions.', isCorrect: true, explanation: 'The row translates to 0x + 0y + 0z = 1 (or 0 = 1). This is a mathematical contradiction, meaning the system is inconsistent.' },
            { id: 'b', text: 'z = 1', isCorrect: false, explanation: 'If z = 1, the row would be [0, 0, 1, 1].' }
          ]
        },
        {
          id: 'l412-7-s3',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'To compute the Reduced Row Echelon Form of matrix `B`, you call the method `B.___()`',
          blankAnswer: 'rref'
        }
      ]
    }
  ]
};