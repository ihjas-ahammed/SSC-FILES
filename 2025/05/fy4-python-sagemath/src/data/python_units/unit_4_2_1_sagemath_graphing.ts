import { Unit } from '../../types';

export const UNIT_4_2_1_SAGEMATH_GRAPHING: Unit = {
  id: 'unit-4-2-1-sagemath-graphing',
  title: '421: Graphing in Sage',
  description: 'Plotting functions, setting bounds, and customizing visual options.',
  color: 'duo-blue',
  lessons:[
    // L1: Plotting Graphs
    {
      id: 'l421-1-theory',
      title: 'L1: Plotting Graphs',
      description: 'The mathematical plotting paradigm.',
      icon: 'LineChart',
      slides:[
        {
          id: 'l421-1-s1',
          type: 'quiz',
          title: 'Priming: Sage vs Matplotlib',
          content: 'You learned to plot using Matplotlib with `np.linspace()` to generate arrays of points. How do you think SageMath approaches plotting?',
          options:[
            { id: 'a', text: 'It requires you to generate arrays using standard Python loops.', isCorrect: false, explanation: 'This would be a step backward in efficiency.' },
            { id: 'b', text: 'You simply pass the mathematical function and the domain bounds. Sage automatically generates the arrays and handles the backend rendering.', isCorrect: true, explanation: 'SageMath wraps Matplotlib, allowing you to plot continuous mathematical functions using simple one-liners.' }
          ]
        },
        {
          id: 'l421-1-s2',
          type: 'theory',
          title: 'Plotting in Sage',
          content: 'In SageMath, if you have defined a function `f(x) = x^2 - 4*x + 2`, you do not need to create NumPy arrays to visualize it.\n\nYou simply use the `plot()` command, which mathematically analyzes the function to ensure smooth curves.'
        }
      ]
    },
    // L2: Basics Plot
    {
      id: 'l421-2-definition',
      title: 'L2: Basic Plot Syntax',
      description: 'plot(f, x, a, b)',
      icon: 'Maximize',
      slides:[
        {
          id: 'l421-2-s1',
          type: 'theory',
          title: 'plot(f, x, a, b)',
          content: 'The basic syntax for plotting the graph of a function $y = f(x)$ with $x$ ranging in value from $a$ to $b$ is:\n\n`plot(f, x, a, b)`\nor\n`plot(f(x), x, a, b)`\n\nExample:\n`plot(2*x^2 - 4*x + 2, x, -3, 5)` plots the quadratic curve from $x = -3$ to $x = 5$.'
        },
        {
          id: 'l421-2-s2',
          type: 'quiz',
          title: 'Concept Check: Multiple Plots',
          content: 'If you want to plot two functions on the SAME set of axes to show their points of intersection, how is this achieved in Sage?',
          options:[
            { id: 'a', text: 'Pass them as a tuple/list: plot((f(x), g(x)), x, -3, 5)', isCorrect: true, explanation: 'By grouping the functions in a tuple `(f(x), g(x))`, Sage plots them both on the same canvas.' },
            { id: 'b', text: 'You cannot plot two functions at once in Sage.', isCorrect: false, explanation: 'Sage fully supports superimposing graphics.' }
          ]
        },
        {
          id: 'l421-2-s3',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'To plot the function `sin(2*x)` from `x = -3` to `x = 3`, you type: `plot(sin(2*x), ___, -3, 3)`',
          blankAnswer: 'x'
        }
      ]
    },
    // L3: Plot Options
    {
      id: 'l421-3-theory',
      title: 'L3: Plot Options',
      description: 'Colors, thickness, and view windows.',
      icon: 'Palette',
      slides:[
        {
          id: 'l421-3-s1',
          type: 'theory',
          title: 'Customizing Plots',
          content: 'You can pass optional arguments to `plot()` to customize the graphic:\n\n*   `ymin` and `ymax`: Restrict the vertical viewing window (crucial for functions with asymptotes like $1/x$).\n*   `color`: Set the line color (`color="red"`).\n*   `linestyle`: Change the line pattern (`linestyle="--"`).\n*   `thickness`: Make the line bolder (`thickness=2`).\n*   `legend_label`: Add a label to the legend.\n*   `figsize`: Control the output image size.'
        },
        {
          id: 'l421-3-s2',
          type: 'solution',
          title: 'Algorithmic Tracing',
          content: 'Construct a customized plot command.',
          interactiveSteps:[
            {
              prompt: 'We want to plot $1/x$ from -5 to 5. What must we add to prevent the Y-axis from stretching to infinity at the vertical asymptote ($x=0$)?',
              options:[
                { id: 'a', text: "ymin=-10, ymax=10", isCorrect: true, explanation: 'Restricting the y-bounds prevents the plot from zooming out infinitely.' },
                { id: 'b', text: "detect_poles='show'", isCorrect: false, explanation: 'While this helps disjoint the line, ymin/ymax actually restricts the viewing window height.' }
              ]
            },
            {
              prompt: 'If we want the line to be dashed and green, what parameters are passed?',
              options:[
                { id: 'a', text: "color='green', linestyle='--'", isCorrect: true, explanation: 'Correct.' }
              ]
            }
          ]
        },
        {
          id: 'l421-3-s3',
          type: 'fill_in_blank',
          title: 'Syntax Drill',
          content: 'To add a title to your plot, use the parameter: `___="My Graph"` inside the plot command.',
          blankAnswer: 'title'
        }
      ]
    }
  ]
};