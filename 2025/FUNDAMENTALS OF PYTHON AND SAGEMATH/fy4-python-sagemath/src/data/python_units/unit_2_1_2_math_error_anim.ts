import { Unit } from '../../types';

export const UNIT_2_1_2_MATH_ERROR_ANIM: Unit = {
  id: 'unit-2-1-2-math-error-anim',
  title: '212: Math Functions & Errors',
  description: 'Visualizing equations, parity, error bars, and animation concepts.',
  color: 'duo-red',
  lessons:[
    // Lesson 5 (Theory): 4.2 Plotting mathematical functions
    {
      id: 'l212-1-theory',
      title: 'L5: Plotting Mathematical Functions',
      description: 'Generating continuous curve datasets.',
      icon: 'Activity',
      slides:[
        {
          id: 'l212-1-s1',
          type: 'quiz',
          title: 'Priming: Continuous Curves',
          content: 'Computers cannot plot true continuous math functions; they plot discrete points. Which NumPy function is best for generating smooth data for plotting?',
          options:[
            { id: 'a', text: 'np.arange()', isCorrect: false, explanation: 'arange uses a step size, making it harder to specify exactly how many points you want for a perfectly smooth curve.' },
            { id: 'b', text: 'np.linspace()', isCorrect: true, explanation: 'linspace lets you request exactly e.g., 200 points between two bounds, ensuring high-resolution smoothness.' }
          ]
        },
        {
          id: 'l212-1-s2',
          type: 'theory',
          title: 'Bridging NumPy and Matplotlib',
          content: 'To plot a function $y = f(x)$:\n1. Generate the independent variable `x` using `np.linspace(start, stop, num_points)`.\n2. Vectorize the math using NumPy: `y = np.sin(x)`.\n3. Plot it: `plt.plot(x, y)`.'
        }
      ]
    },
    // Lesson 6 (Example): npsin.py
    {
      id: 'l212-2-example',
      title: 'L6: Sine and Friends',
      description: 'Plotting trigonometric symmetries.',
      icon: 'Waves',
      slides:[
        {
          id: 'l212-2-s1',
          type: 'example_q',
          title: 'Problem: npsin.py',
          content: 'Plot $\\sin(x)$ and $\\sin(x^2)$ from $-\\pi$ to $+\\pi$. Observe the odd and even symmetries.'
        },
        {
          id: 'l212-2-s2',
          type: 'solution',
          title: 'Tracing the Trigonometry',
          content: 'Setting up the space.',
          interactiveSteps:[
            {
              prompt: 'How do you create an array of 200 points exactly from $-\\pi$ to $\\pi$?',
              options:[
                { id: 'a', text: 'x = np.linspace(-np.pi, np.pi, 200)', isCorrect: true, explanation: 'Correct. NumPy provides `np.pi` as a constant.' },
                { id: 'b', text: 'x = np.arange(-3.14, 3.14, 200)', isCorrect: false, explanation: 'arange\'s third argument is step size, not number of elements.' }
              ]
            }
          ]
        },
        {
          id: 'l212-2-s3',
          type: 'python_example',
          title: 'Interactive Sandbox: Sine waves',
          content: 'Notice how $\\sin(x^2)$ is an EVEN function (symmetric across the Y-axis).',
          code: "import numpy as np\nimport matplotlib.pyplot as plt\n\nx = np.linspace(-np.pi, np.pi, 200)\ny1 = np.sin(x)\ny2 = np.sin(x*x)\n\nplt.plot(x, y1, 'b-', label='sin(x)')\nplt.plot(x, y2, 'r-', label='sin(x^2)')\n\n# Adding grid and origin lines for clarity\nplt.axhline(0, color='black', lw=0.5)\nplt.axvline(0, color='black', lw=0.5)\nplt.legend()\nprint('Plotting symmetric functions...')"
        }
      ]
    },
    // Lesson 7 & 8 (Theory/Example): 4.3 Error Bars
    {
      id: 'l212-3-theory',
      title: 'L7: Error Bars',
      description: 'Representing uncertainty visually.',
      icon: 'BarChart2',
      slides:[
        {
          id: 'l212-3-s1',
          type: 'theory',
          title: 'plt.errorbar()',
          content: 'In experimental physics and statistics, data points have uncertainty. \n\nInstead of `plt.plot()`, you use `plt.errorbar(x, y, yerr=dy)` where `dy` is an array of uncertainty bounds for the Y-axis.'
        },
        {
          id: 'l212-3-s2',
          type: 'python_example',
          title: 'Interactive Sandbox: errbar.py',
          content: 'See how error bars attach to individual data points.',
          code: "import numpy as np\nimport matplotlib.pyplot as plt\n\nx = np.arange(10)\ny = 5 * np.sin(x / 5)\n# Constant error of 0.3 for all points\ndy = np.linspace(0.1, 0.3, 10)\n\nplt.plot(x, y, 'b--') # Plot the underlying trend line\nplt.errorbar(x, y, yerr=dy, fmt='ro', capsize=4)\nprint('Plotting data with uncertainty...')"
        }
      ]
    },
    // Lesson 9 & 10 (Theory/Example): 4.4 Animations
    {
      id: 'l212-4-theory',
      title: 'L9: Simple 2D Animation',
      description: 'Event-driven plotting over time.',
      icon: 'PlayCircle',
      slides:[
        {
          id: 'l212-4-s1',
          type: 'theory',
          title: 'FuncAnimation',
          content: 'Matplotlib supports animation via `matplotlib.animation.FuncAnimation`.\n\nIt works by:\n1. Creating a base plot (`fig, ax = plt.subplots()`).\n2. Creating an `update(frame_number)` function that changes the data of the plot.\n3. Calling `FuncAnimation` which loops `update` rapidly.'
        },
        {
          id: 'l212-4-s2',
          type: 'quiz',
          title: 'Animation in Web Environments',
          content: 'Why might `FuncAnimation` fail to display in a static web environment or exported PDF?',
          options:[
            { id: 'a', text: 'Because animations require a live interactive GUI backend, not static image generation.', isCorrect: true, explanation: 'Web shells often render Matplotlib via the `Agg` backend, which spits out static PNGs. True animation requires interactive backends.' },
            { id: 'b', text: 'Because NumPy cannot update arrays fast enough.', isCorrect: false, explanation: 'NumPy is extremely fast; the limitation is the rendering backend.' }
          ]
        }
      ]
    }
  ]
};