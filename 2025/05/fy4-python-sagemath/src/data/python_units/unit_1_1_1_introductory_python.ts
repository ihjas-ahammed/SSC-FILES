import { Unit } from '../../types';

export const UNIT_1_1_1_INTRODUCTORY_PYTHON: Unit = {
  id: 'unit-1-1-1-introductory-python',
  title: 'Unit 1.1.1: Introductory Python',
  description: 'A placeholder unit for the first lessons in Python and SageMath.',
  color: 'duo-blue',
  lessons: [
    {
      id: 'lesson-1-python-basics',
      title: 'Lesson 1: Python Basics',
      description: 'Introductory Python concepts, interpreter setup, and first program examples.',
      icon: 'BookOpen',
      slides: [
        {
          id: 'slide-1-python-basics',
          type: 'theory',
          title: 'Getting Started with Python',
          content: 'Lesson content will be populated later. This lesson will cover Python setup, writing your first program, and using the interpreter.',
        },
      ],
    },
    {
      id: 'lesson-2-variables-types',
      title: 'Lesson 2: Variables and Data Types',
      description: 'Placeholder for variables, strings, numbers, and Python data types.',
      icon: 'Type',
      slides: [
        {
          id: 'slide-2-variables-types',
          type: 'theory',
          title: 'Variables, Types, and Expressions',
          content: 'Lesson content will be populated later. This lesson introduces variables, basic data types, and simple expressions in Python.',
        },
      ],
    },
    {
      id: 'lesson-3-control-flow',
      title: 'Lesson 3: Control Flow',
      description: 'Placeholder for conditionals, loops, and branching in Python.',
      icon: 'Activity',
      slides: [
        {
          id: 'slide-3-control-flow',
          type: 'theory',
          title: 'Conditionals and Loops',
          content: 'Lesson content will be populated later. This lesson will cover if statements, loops, and basic control structures.',
        },
      ],
    },
    {
      id: 'lesson-4-arrays-intro',
      title: 'Lesson 4: Arrays and NumPy',
      description: 'Interactive Python runner for NumPy and plotting examples.',
      icon: 'Layers',
      slides: [
        {
          id: 'slide-4-arrays-intro',
          type: 'python_example',
          title: 'Hands-on NumPy Plot',
          content: 'Run this example code in the browser. You can edit it and plot using numpy and matplotlib. If the code saves a figure to /tmp/plot.png, the image will appear below.',
          code: "import numpy as np\nimport matplotlib.pyplot as plt\n\n# Create sample data\nx = np.linspace(0, 2 * np.pi, 120)\ny = np.sin(x) * np.cos(x / 2)\n\nplt.figure(figsize=(7, 4))\nplt.plot(x, y, label='sin(x)cos(x/2)', color='#38bdf8', linewidth=2)\nplt.title('Interactive NumPy Plot')\nplt.xlabel('x')\nplt.ylabel('y')\nplt.grid(True, alpha=0.4)\nplt.legend()\nplt.tight_layout()\nplt.savefig('/tmp/plot.png')\nprint('Plot saved to /tmp/plot.png.')\n",
        },
      ],
    },
  ],
};
