import { Unit } from '../../types';

export const UNIT_1_2_1_NUMPY_ARRAYS: Unit = {
  id: 'unit-1-2-1-numpy-arrays',
  title: '121: NumPy Arrays',
  description: 'Mathematical arrays, reshaping, and matrix operations.',
  color: 'duo-blue',
  lessons:[
    // Lesson 1 (Theory): 3.1 NumPy Arrays
    {
      id: 'l121-1-theory',
      title: 'L1: Introduction to NumPy',
      description: 'Arrays of homogeneous data.',
      icon: 'Grid',
      slides:[
        {
          id: 'l121-1-s1',
          type: 'quiz',
          title: 'Priming: Why NumPy?',
          content: 'We already learned about Python Lists `[1, 2, 3]`. Why do you think scientific computing relies on NumPy Arrays instead of Python Lists?',
          options:[
            { id: 'a', text: 'Lists cannot hold decimal numbers.', isCorrect: false, explanation: 'Lists can hold floats, strings, and even other lists.' },
            { id: 'b', text: 'NumPy Arrays enforce homogeneous data types, allowing for highly optimized, C-level computational speeds.', isCorrect: true, explanation: 'Correct. Because every element in a NumPy array is the same data type, the computer does not have to check types during math operations, making it extremely fast.' }
          ]
        },
        {
          id: 'l121-1-s2',
          type: 'theory',
          title: 'NumPy Arrays',
          content: 'NumPy is a Python extension module that provides efficient operation on arrays of **homogeneous** data.\n\nFirst, you must import the library: `import numpy as np`.\n\nArrays are created by passing a Python list to the `np.array()` function:\n`x = np.array([1., 2., 3.], dtype=float)`\n\nIf you do not specify `dtype`, NumPy deduces it from the input data.'
        },
        {
          id: 'l121-1-s3',
          type: 'quiz',
          title: 'Concept Check: Homogeneity',
          content: 'If you create a NumPy array using `np.array([1, 2.5, 3])`, what happens to the integer `1`?',
          options:[
            { id: 'a', text: 'It remains an integer; the array mixes types.', isCorrect: false, explanation: 'NumPy arrays strictly enforce a single data type for the whole array.' },
            { id: 'b', text: 'It is "upcast" to a float (1.0) so the entire array shares the float data type.', isCorrect: true, explanation: 'NumPy automatically upcasts data to the most precise type required (float overrides int).' }
          ]
        },
        {
          id: 'l121-1-s4',
          type: 'python_example',
          title: 'Interactive Sandbox',
          content: 'Create your first NumPy array and verify its type.',
          code: "import numpy as np\n\nx = np.array([1., 2., 3.])\nprint(x)\nprint(type(x))"
        },
        {
          id: 'l121-1-s5',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'To use NumPy using its standard abbreviation, you write: `___ numpy as np`',
          blankAnswer: 'import'
        }
      ]
    },
    // Lesson 2 (Example): 1Darray.py and numpy2.py
    {
      id: 'l121-2-example',
      title: 'L2: Creating N-Dimensional Arrays',
      description: 'Building 1D and 2D arrays from lists.',
      icon: 'Layers',
      slides:[
        {
          id: 'l121-2-s1',
          type: 'example_q',
          title: 'Problem: Array Creation',
          content: 'Write a script that creates a 2D NumPy array from a Python list of lists: `[[1, 2, 3],[4, 5, 6]]`.'
        },
        {
          id: 'l121-2-s2',
          type: 'solution',
          title: 'Interactive Solution',
          content: 'Let us build a 2D array step-by-step.',
          interactiveSteps:[
            {
              prompt: 'First, how do you define the 2D Python list?',
              options:[
                { id: 'a', text: 'a = [[1, 2, 3], [4, 5, 6]]', isCorrect: true, explanation: 'A list containing two inner lists creates the structure.' },
                { id: 'b', text: 'a = [1, 2, 3; 4, 5, 6]', isCorrect: false, explanation: 'This is MATLAB syntax, not Python.' }
              ]
            },
            {
              prompt: 'How do you convert the list `a` into a NumPy array `x`?',
              options:[
                { id: 'a', text: 'x = np.array(a)', isCorrect: true, explanation: 'Correct. Pass the list structure directly to np.array().' }
              ]
            }
          ]
        },
        {
          id: 'l121-2-s3',
          type: 'python_example',
          title: 'Execution Test',
          content: 'Run the code to see the 2D matrix structure print out.',
          code: "import numpy as np\n\na = [[1, 2, 3], [4, 5, 6]]\nx = np.array(a)\nprint(x)"
        }
      ]
    },
    // Lesson 3 (Definition): 3.1.1 arange
    {
      id: 'l121-3-theory',
      title: 'L3: np.arange()',
      description: 'Creating evenly spaced arrays via step size.',
      icon: 'ListOrdered',
      slides:[
        {
          id: 'l121-3-s1',
          type: 'theory',
          title: 'arange(start, stop, step)',
          content: '`np.arange()` creates an evenly spaced one-dimensional array. \n\nParameters: `start`, `stop`, `step-size`, and `dtype`. \n\n**Crucial Rule:** The values generated include the `start` value but **exclude** the `stop` value. \n\nExample: `np.arange(2.0, 3.0, 0.1)` generates `[2.0, 2.1, 2.2 ... 2.9]`.'
        },
        {
          id: 'l121-3-s2',
          type: 'quiz',
          title: 'Concept Check: Stop Exclusion',
          content: 'What will `np.arange(0, 5, 1)` output?',
          options:[
            { id: 'a', text: '[0, 1, 2, 3, 4]', isCorrect: true, explanation: 'It stops BEFORE 5.' },
            { id: 'b', text: '[0, 1, 2, 3, 4, 5]', isCorrect: false, explanation: 'The stop value is mathematically excluded in Python ranges.' }
          ]
        },
        {
          id: 'l121-3-s3',
          type: 'python_example',
          title: 'Interactive Sandbox',
          content: 'Generate an array of even numbers up to 10.',
          code: "import numpy as np\n\n# Try to get [2, 4, 6, 8, 10]\nevens = np.arange(2, 12, 2)\nprint(evens)"
        }
      ]
    },
    // Lesson 4 (Definition): 3.1.2 linspace
    {
      id: 'l121-4-theory',
      title: 'L4: np.linspace()',
      description: 'Creating evenly spaced arrays via total count.',
      icon: 'Divide',
      slides:[
        {
          id: 'l121-4-s1',
          type: 'theory',
          title: 'linspace(start, stop, number_of_elements)',
          content: 'Similar to `arange()`, but instead of defining the *step size*, you define the *total number of samples* you want.\n\n**Crucial Difference:** `np.linspace()` **INCLUDES** the stop value by default.\n\nExample: `np.linspace(1, 2, 11)` generates 11 points exactly spread out from 1.0 to 2.0 (inclusive).'
        },
        {
          id: 'l121-4-s2',
          type: 'quiz',
          title: 'Concept Check: Linspace vs Arange',
          content: 'If you want exactly 100 data points between 0 and 10 to plot a smooth curve, which function should you use?',
          options:[
            { id: 'a', text: 'np.linspace(0, 10, 100)', isCorrect: true, explanation: 'linspace guarantees exactly 100 points, doing the step-size math for you.' },
            { id: 'b', text: 'np.arange(0, 10, 0.1)', isCorrect: false, explanation: 'arange relies on step size and excludes the stop value, which can lead to floating point rounding errors missing the final point.' }
          ]
        },
        {
          id: 'l121-4-s3',
          type: 'python_example',
          title: 'Interactive Sandbox',
          content: 'See linspace in action.',
          code: "import numpy as np\n\npoints = np.linspace(1, 2, 5)\nprint(points)"
        }
      ]
    },
    // Lesson 5 (Theory): 3.1.3 zeros and 3.1.4 ones
    {
      id: 'l121-5-theory',
      title: 'L5: Initialization (zeros & ones)',
      description: 'Pre-allocating arrays.',
      icon: 'Circle',
      slides:[
        {
          id: 'l121-5-s1',
          type: 'theory',
          title: 'zeros(shape) and ones(shape)',
          content: 'When generating mathematical models, you often need to pre-allocate an array with placeholder values before filling it in a loop.\n\n`np.zeros((rows, columns))` returns an array filled with 0s.\n`np.ones((rows, columns))` returns an array filled with 1s.\n\nNote that the `shape` parameter is usually passed as a **Tuple** `(rows, columns)` inside the function.'
        },
        {
          id: 'l121-5-s2',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'To create a 2x3 matrix of zeros, type: `np.zeros((___, 3))`',
          blankAnswer: '2'
        },
        {
          id: 'l121-5-s3',
          type: 'python_example',
          title: 'Interactive Sandbox',
          content: 'Generate initialization matrices.',
          code: "import numpy as np\n\nz = np.zeros((2, 3))\nprint('Zeros:')\nprint(z)\n\no = np.ones((3, 2))\nprint('\\nOnes:')\nprint(o)"
        }
      ]
    },
    // Lesson 6 (Theory): 3.1.6 reshape
    {
      id: 'l121-6-theory',
      title: 'L6: Reshaping Arrays',
      description: 'Changing array dimensions without changing data.',
      icon: 'BoxSelect',
      slides:[
        {
          id: 'l121-6-s1',
          type: 'theory',
          title: 'reshape(array, newshape)',
          content: 'We can make multi-dimensional arrays by reshaping a one-dimensional array. \n\n`np.reshape()` changes the dimensions. The total number of elements must be preserved. \n\nBecause of Object-Oriented programming in Python, `reshape()` is available as a method directly on the array object: `a.reshape((4, 5))`.'
        },
        {
          id: 'l121-6-s2',
          type: 'quiz',
          title: 'Concept Check: Conservation of Elements',
          content: 'If `x = np.arange(12)` (which has 12 elements), which of the following reshapes is valid?',
          options:[
            { id: 'a', text: 'x.reshape((3, 4))', isCorrect: true, explanation: '3 * 4 = 12 elements. The shape fits perfectly.' },
            { id: 'b', text: 'x.reshape((5, 2))', isCorrect: false, explanation: '5 * 2 = 10. You cannot discard elements during a reshape; it will throw a ValueError.' }
          ]
        },
        {
          id: 'l121-6-s3',
          type: 'python_example',
          title: 'Interactive Sandbox',
          content: 'Transform a 1D sequence into a 2D matrix.',
          code: "import numpy as np\n\na = np.arange(20)\nprint('Original 1D:')\nprint(a)\n\nb = a.reshape((4, 5))\nprint('\\nReshaped 4x5:')\nprint(b)"
        }
      ]
    },
    // Lesson 7 (Example): Pauli spin matrices
    {
      id: 'l121-7-example',
      title: 'L7: Pauli Spin Matrices',
      description: 'Complex arrays and matrix multiplication.',
      icon: 'Atom',
      slides:[
        {
          id: 'l121-7-s1',
          type: 'example_q',
          title: 'Problem: Pauli Matrices',
          content: 'We use the Pauli spin matrices in quantum mechanics:\n\n$\\sigma_x = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$, $\\sigma_y = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}$\n\nVerify the commutation relation $[\\sigma_x, \\sigma_y] = \\sigma_x \\sigma_y - \\sigma_y \\sigma_x = 2i\\sigma_z$.'
        },
        {
          id: 'l121-7-s2',
          type: 'solution',
          title: 'Interactive Solution',
          content: 'How do we handle complex numbers and matrix multiplication in NumPy?',
          interactiveSteps:[
            {
              prompt: 'In Python, the imaginary unit $i$ is represented by `j`. How do we write $\\sigma_y$?',
              options:[
                { id: 'a', text: 'sy = np.array([[0, -1j], [1j, 0]])', isCorrect: true, explanation: 'Correct. Complex literals use the j suffix.' }
              ]
            },
            {
              prompt: 'Standard multiplication `*` in NumPy performs *element-wise* multiplication. What method should we use for true *matrix* multiplication?',
              options:[
                { id: 'a', text: 'sx.dot(sy) or sx @ sy', isCorrect: true, explanation: 'The .dot() method or the @ operator performs algebraic matrix multiplication.' },
                { id: 'b', text: 'sx * sy', isCorrect: false, explanation: 'This just multiplies the matrices element-by-element, which is wrong for linear algebra.' }
              ]
            }
          ]
        },
        {
          id: 'l121-7-s3',
          type: 'python_example',
          title: 'Execution Test',
          content: 'Compute the commutator $[\\sigma_x, \\sigma_y]$.',
          code: "import numpy as np\n\nsx = np.array([[0, 1],[1, 0]])\nsy = np.array([[0, -1j], [1j, 0]])\n\n# Matrix multiplication\ncommutator = sx.dot(sy) - sy.dot(sx)\n\nprint('Commutator [sx, sy]:')\nprint(commutator)"
        }
      ]
    }
  ]
};