import { Unit } from '../../types';

export const UNIT_2_1_1_MATPLOTLIB_BASICS: Unit = {
  id: 'unit-2-1-1-matplotlib-basics',
  title: '211: Matplotlib Basics',
  description: 'Figures, Axes, and plotting 1D arrays.',
  color: 'duo-blue',
  lessons:[
    // Lesson 1 (Theory): 4.1 The Matplotlib Module
    {
      id: 'l211-1-theory',
      title: 'L1: Introduction to Matplotlib',
      description: 'The implicit vs explicit plotting interfaces.',
      icon: 'Image',
      slides:[
        {
          id: 'l211-1-s1',
          type: 'quiz',
          title: 'Priming: Data Visualization',
          content: 'Why is visual representation critical when dealing with NumPy arrays?',
          options:[
            { id: 'a', text: 'It reduces the memory footprint of the array.', isCorrect: false, explanation: 'Visualization does not alter memory size.' },
            { id: 'b', text: 'It converts vast numerical arrays into identifiable patterns, aiding human pattern recognition.', isCorrect: true, explanation: 'Humans process visual patterns instantly, whereas reading a 10,000-element raw text array is impossible.' }
          ]
        },
        {
          id: 'l211-1-s2',
          type: 'theory',
          title: 'The Matplotlib Module',
          content: 'Matplotlib is a Python package that produces publication-quality figures. \n\n**Two Interfaces:**\n1. **Explicit ("Axes") Interface:** You create a `Figure` object (the entire window) and one or more `Axes` objects (the actual plotting areas). e.g., `fig = plt.figure()`, `ax = fig.add_subplot()`.\n2. **Implicit ("pyplot") Interface:** You just call `plt.plot()` and Matplotlib automatically manages the current Figure and Axes in the background.'
        },
        {
          id: 'l211-1-s3',
          type: 'quiz',
          title: 'Concept Check: Interface Choice',
          content: 'Which interface is generally better for simple, quick, single-graph plots?',
          options:[
            { id: 'a', text: 'The Explicit "Axes" Interface', isCorrect: false, explanation: 'While powerful, it requires more boilerplate code.' },
            { id: 'b', text: 'The Implicit "pyplot" Interface', isCorrect: true, explanation: 'For simple 2D plots, `plt.plot()` directly is faster and easier.' }
          ]
        }
      ]
    },
    // Lesson 2 (Example): plot1.py and plot2.py
    {
      id: 'l211-2-example',
      title: 'L2: Your First Plots',
      description: 'Plotting lists and formatting strings.',
      icon: 'LineChart',
      slides:[
        {
          id: 'l211-2-s1',
          type: 'example_q',
          title: 'Problem: plot1.py',
          content: 'Write a program using the implicit `pyplot` interface to plot a simple list `[1, 2, 5]`.'
        },
        {
          id: 'l211-2-s2',
          type: 'solution',
          title: 'Interactive Solution',
          content: 'Constructing the plot step-by-step.',
          interactiveSteps:[
            {
              prompt: 'First, how do you import the pyplot submodule?',
              options:[
                { id: 'a', text: 'import matplotlib.pyplot as plt', isCorrect: true, explanation: 'This is the standard abbreviation.' },
                { id: 'b', text: 'import matplotlib as plt', isCorrect: false, explanation: 'You specifically need the `pyplot` submodule.' }
              ]
            },
            {
              prompt: 'If you pass a single list `plt.plot([1, 2, 5])`, what does Matplotlib assume about the X-axis?',
              options:[
                { id: 'a', text: 'It assumes the X-axis is the indices: [0, 1, 2]', isCorrect: true, explanation: 'If only one array is provided, it is treated as the Y-values, and the X-values default to 0, 1, 2...' },
                { id: 'b', text: 'It throws an error requiring an X array.', isCorrect: false, explanation: 'Matplotlib is smart enough to auto-generate the X indices.' }
              ]
            }
          ]
        },
        {
          id: 'l211-2-s3',
          type: 'python_example',
          title: 'Interactive Sandbox: plot2.py',
          content: 'Now, provide BOTH x and y lists to plot them against each other.',
          code: "import matplotlib.pyplot as plt\n\nx = [1, 2, 5]\ny =[4, 5, 6]\n\nplt.plot(x, y)\nprint('Plotting...')\n# The figure will automatically render below."
        }
      ]
    },
    // Lesson 3 (Theory): 4.1.1 2D plots
    {
      id: 'l211-3-theory',
      title: 'L3: Plot Formatting & Markers',
      description: 'Customizing lines, colors, and markers.',
      icon: 'Palette',
      slides:[
        {
          id: 'l211-3-s1',
          type: 'theory',
          title: 'Format Strings',
          content: 'By default, plots use a continuous blue line. \n\nYou can add an optional format string argument: `plt.plot(x, y, "ro")`.\n\nThe format string consists of:\n*   **Color:** `b` (blue), `r` (red), `g` (green), `k` (black)\n*   **Marker:** `o` (circle), `^` (triangle), `*` (star)\n*   **Line style:** `-` (solid), `--` (dashed)'
        },
        {
          id: 'l211-3-s2',
          type: 'quiz',
          title: 'Format String Interpretation',
          content: 'What does the format string `"g--"` represent?',
          options:[
            { id: 'a', text: 'Green continuous line', isCorrect: false, explanation: 'Continuous is a single dash `-`.' },
            { id: 'b', text: 'Green dashed line', isCorrect: true, explanation: 'Correct. `g` = green, `--` = dashed.' }
          ]
        },
        {
          id: 'l211-3-s3',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'To plot red circles without connecting lines, use the format string "___".',
          blankAnswer: 'ro'
        }
      ]
    },
    // Lesson 4 (Example): plot3.py and plot4.py
    {
      id: 'l211-4-example',
      title: 'L4: Labels, Legends, & Axes',
      description: 'Making plots publication-ready.',
      icon: 'Tag',
      slides:[
        {
          id: 'l211-4-s1',
          type: 'theory',
          title: 'Annotating the Plot',
          content: 'A plot without labels is just a drawing. \n\n*   `plt.xlabel("text")` / `plt.ylabel("text")` adds axis labels.\n*   `plt.axis([xmin, xmax, ymin, ymax])` manually sets the viewing window.\n*   `plt.legend()` displays the legend based on the `label` parameters passed to `plot()`.'
        },
        {
          id: 'l211-4-s2',
          type: 'python_example',
          title: 'Interactive Sandbox: plot4.py',
          content: 'Combining NumPy arrays with Matplotlib legends and LaTeX formatting.',
          code: "import numpy as np\nimport matplotlib.pyplot as plt\n\nt = np.arange(0.0, 5.0, 0.2)\n\n# Plot three different functions using format strings\nplt.plot(t, t**2, 'x', label='t^2')\nplt.plot(t, t**3, 'ro', label='t^3')\n\n# Add legend with some transparency\nplt.legend(framealpha=0.5)\nprint('Rendering polynomial comparisons...')"
        }
      ]
    }
  ]
};