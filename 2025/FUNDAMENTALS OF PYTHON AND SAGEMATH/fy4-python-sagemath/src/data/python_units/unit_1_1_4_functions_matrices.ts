import { Unit } from '../../types';

export const UNIT_1_1_4_FUNCTIONS_MATRICES: Unit = {
  id: 'unit-1-1-4-functions-matrices',
  title: '114: Functions & Matrices',
  description: 'Abstraction, Libraries, File I/O, and Pure Matrix Math.',
  color: 'duo-violet',
  lessons:[
    {
      id: 'lesson-24-functions',
      title: 'L24: Functions',
      description: 'Defining reusable blocks of code.',
      icon: 'Box',
      slides:[
        {
          id: 'l24-s1',
          type: 'theory',
          title: 'Creating Functions',
          content: 'Large programs need to be divided into small logical units. Python allows you to define functions using the `def` keyword. \n\nA function may have one or more variables as parameters, and returns values using the `return` statement. If there is no return statement, `None` is returned to the caller.'
        },
        {
          id: 'l24-s2',
          type: 'python_example',
          title: 'Function Definition',
          content: 'Notice the colon `:` and indentation required for the function block.',
          code: "def sum(a, b):\n    return a + b\n\nprint(sum(3, 4))"
        },
        {
          id: 'l24-s3',
          type: 'quiz',
          title: 'Scope of Variables',
          content: 'Are variables defined inside a function known outside the function?',
          options:[
            { id: 'a', text: 'No, they have local scope.', isCorrect: true, explanation: 'Variables defined inside a function only exist within that function unless declared `global`.' },
            { id: 'b', text: 'Yes, they exist globally.', isCorrect: false, explanation: 'This would cause memory and naming conflicts.' }
          ]
        }
      ]
    },
    {
      id: 'lesson-26-modules',
      title: 'L26: Modules and Packages',
      description: 'Importing external libraries.',
      icon: 'Package',
      slides:[
        {
          id: 'l26-s1',
          type: 'theory',
          title: 'Importing Modules',
          content: 'Modules are loaded using the `import` keyword. \n\n1. `import math` (invoked via `math.sin()`)\n2. `import math as m` (alias, invoked via `m.sin()`)\n3. `from math import sin` (invoked directly as `sin()`)\n4. `from math import *` (wildcard, imports all functions directly).'
        }
      ]
    },
    {
      id: 'lesson-27-fileio',
      title: 'L27: File Input/Output',
      description: 'Reading and writing to disk.',
      icon: 'FileText',
      slides:[
        {
          id: 'l27-s1',
          type: 'theory',
          title: 'open() function',
          content: 'Disk files can be opened using the function named `open()` that returns a File object. \n\n`f = open("test.dat", "w")` opens the file for writing. \n`f.write("Data")` writes to it. \n`f.close()` must be called to save changes and free memory.'
        }
      ]
    },
    {
      id: 'lesson-30-matrices',
      title: 'L30: Matrices in pure Python',
      description: 'Nested lists simulating matrix algebra.',
      icon: 'Grid',
      slides:[
        {
          id: 'l30-s1',
          type: 'theory',
          title: '2D Matrices via Lists',
          content: 'Lists inside a list will be used to represent 2D matrices. This prepares us for NumPy later.\n\n`a =[ [1,2], [3,4] ]` is a 2x2 matrix. \n\n`a[1][0]` accesses the element at the second row, first column (which is `3`).'
        },
        {
          id: 'l30-s2',
          type: 'solution',
          title: 'Matrix Multiplication Algorithm',
          content: 'According to matrix algebra $cA = c\\sum A_{ij}$. How is this mapped to python?',
          interactiveSteps:[
            {
              prompt: "To traverse rows and columns, what programmatic structure is required?",
              options:[
                { id: 'a', text: 'Nested for loops', isCorrect: true, explanation: 'One loop iterates through rows, an inner loop iterates through columns.' },
                { id: 'b', text: 'A single while loop', isCorrect: false, explanation: 'You need two dimensions of traversal.' }
              ]
            }
          ]
        }
      ]
    }
  ]
};