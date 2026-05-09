import { Unit } from '../../types';

export const UNIT_1_2_2_VECTORIZATION: Unit = {
  id: 'unit-1-2-2-vectorization',
  title: '122: Vectorization',
  description: 'Applying functions to entire arrays without loops.',
  color: 'duo-violet',
  lessons:[
    // Lesson 8: Vectorizing Functions (Theory)
    {
      id: 'l122-1-theory',
      title: 'L8: Vectorizing Functions',
      description: 'Bypassing slow Python loops.',
      icon: 'Zap',
      slides:[
        {
          id: 'l122-1-s1',
          type: 'quiz',
          title: 'Priming: Performance',
          content: 'If you have an array of 1,000,000 numbers and you want to calculate the `sine` of each, what is the most efficient way?',
          options:[
            { id: 'a', text: 'Use a Python for-loop to iterate through each element.', isCorrect: false, explanation: 'Python for-loops are interpreted and very slow for mathematical operations on large datasets.' },
            { id: 'b', text: 'Pass the entire array directly into np.sin()', isCorrect: true, explanation: 'This is Vectorization. NumPy pushes the loop down into the C layer, executing vastly faster than a Python loop.' }
          ]
        },
        {
          id: 'l122-1-s2',
          type: 'theory',
          title: 'Vectorization',
          content: 'Functions like `sine`, `log`, etc. from NumPy are capable of accepting entire arrays as arguments. \n\nThis eliminates the need for writing loops in Python code.\n\n`a = np.array([1, 10, 100])`\n`print(np.log10(a))` -> Prints `[0. 1. 2.]`'
        },
        {
          id: 'l122-1-s3',
          type: 'quiz',
          title: 'Concept Check: Standard Math vs NumPy Math',
          content: 'What happens if you pass a NumPy array to the standard Python `math.sin()` function?',
          options:[
            { id: 'a', text: 'It works exactly like np.sin()', isCorrect: false, explanation: 'The standard math module is not built to handle NumPy array objects.' },
            { id: 'b', text: 'It throws a TypeError.', isCorrect: true, explanation: 'Standard math functions expect single scalar values. You MUST use NumPy functions (like np.sin) to vectorize across an array.' }
          ]
        },
        {
          id: 'l122-1-s4',
          type: 'python_example',
          title: 'Interactive Sandbox',
          content: 'See vectorization in action.',
          code: "import numpy as np\n\na = np.array([1, 10, 100, 1000])\nresult = np.log10(a)\nprint(result)"
        }
      ]
    },
    // Lesson 9: vectorize.py (Example)
    {
      id: 'l122-2-example',
      title: 'L9: Custom Vectorized Functions',
      description: 'Using np.vectorize() on your own functions.',
      icon: 'Code',
      slides:[
        {
          id: 'l122-2-s1',
          type: 'example_q',
          title: 'Problem: Custom Functions',
          content: 'What if you write a custom Python function using complex `if/else` logic that wasn\'t built into NumPy? How do you apply it to an entire array without writing a loop yourself?'
        },
        {
          id: 'l122-2-s2',
          type: 'theory',
          title: 'np.vectorize()',
          content: 'NumPy provides a function `np.vectorize()` to convert your custom Python function into a vectorized function that accepts arrays.\n\n```python\ndef spf(x):\n    return 3 * x\n\nvspf = np.vectorize(spf)\n```\nNow `vspf` can take a whole array as input!'
        },
        {
          id: 'l122-2-s3',
          type: 'python_example',
          title: 'Execution Test',
          content: 'Vectorize a custom function and test it.',
          code: "import numpy as np\n\n# Custom scalar function\ndef spf(x):\n    if x < 3:\n        return x * 10\n    else:\n        return x * 3\n\n# Vectorize it!\nvspf = np.vectorize(spf)\n\na = np.array([1, 2, 3, 4])\nprint(vspf(a))"
        }
      ]
    }
  ]
};