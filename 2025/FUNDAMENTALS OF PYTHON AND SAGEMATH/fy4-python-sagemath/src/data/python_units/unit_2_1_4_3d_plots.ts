import { Unit } from '../../types';

export const UNIT_2_1_4_3D_PLOTS: Unit = {
  id: 'unit-2-1-4-3d-plots',
  title: '214: 3D Plots & Surfaces',
  description: 'Expanding into the Z-axis with meshgrids and Axes3D.',
  color: 'duo-violet',
  lessons:[
    // Lesson 17 & 18: 3D Line plots
    {
      id: 'l214-1-theory',
      title: 'L17: 3D Projections',
      description: 'Enabling 3D axes in Matplotlib.',
      icon: 'Box',
      slides:[
        {
          id: 'l214-1-s1',
          type: 'quiz',
          title: 'Priming: 3D Math',
          content: 'If `plt.plot(x, y)` draws a 2D line, what additional dimension data is fundamentally required for 3D?',
          options:[
            { id: 'a', text: 'A Z-axis array of equal size.', isCorrect: true, explanation: 'Every point in 3D space requires (X, Y, Z) coordinates.' },
            { id: 'b', text: 'A color map array.', isCorrect: false, explanation: 'Color is a 4th dimension visualizer, not the spatial Z-axis.' }
          ]
        },
        {
          id: 'l214-1-s2',
          type: 'theory',
          title: 'Setting up 3D',
          content: 'To unlock 3D plotting, you must use the explicit Object-Oriented interface.\n\n```python\nfrom mpl_toolkits.mplot3d import Axes3D\nfig = plt.figure()\nax = fig.add_subplot(projection="3d")\n```\n\nOnce configured, you can call `ax.plot3D(x, y, z)` or `ax.scatter3D(x, y, z)`.'
        },
        {
          id: 'l214-1-s3',
          type: 'python_example',
          title: 'Interactive Sandbox: line3d.py',
          content: 'Plotting a 3D helix.',
          code: "import numpy as np\nimport matplotlib.pyplot as plt\n\nfig = plt.figure()\nax = fig.add_subplot(projection='3d')\n\nz = np.linspace(0, 15, 200)\nx = np.sin(z)\ny = np.cos(z)\n\nax.plot3D(x, y, z, 'red')\nprint('Plotting 3D Helix...')"
        }
      ]
    },
    // Lesson 19 & 20: Meshgrids and Surfaces
    {
      id: 'l214-2-theory',
      title: 'L19: Meshgrids & Surfaces',
      description: 'Creating 2D coordinate networks for 3D surfaces.',
      icon: 'Grid',
      slides:[
        {
          id: 'l214-2-s1',
          type: 'theory',
          title: 'np.meshgrid()',
          content: 'To plot a 3D **surface** (like a blanket), you cannot just use two 1D arrays for X and Y. You must create a complete grid covering the X-Y plane.\n\n`X, Y = np.meshgrid(x_array, y_array)`\n\nThis takes an $N$ element array and an $M$ element array, and creates two massive $M \\times N$ 2D matrices representing every possible coordinate pair on the floor plane.'
        },
        {
          id: 'l214-2-s2',
          type: 'solution',
          title: 'Building the Surface',
          content: 'How do we calculate the Z heights?',
          interactiveSteps:[
            {
              prompt: 'Once you have the 2D matrices `X` and `Y` from meshgrid, how do you find Z?',
              options:[
                { id: 'a', text: 'Z = np.sin(X) + np.cos(Y)', isCorrect: true, explanation: 'Because X and Y are now 2D matrices, vectorized NumPy math will automatically output a 2D matrix Z representing the height at every single grid point!' },
                { id: 'b', text: 'Use a nested for loop to calculate z at each point.', isCorrect: false, explanation: 'That defeats the entire purpose of NumPy vectorization.' }
              ]
            }
          ]
        },
        {
          id: 'l214-2-s3',
          type: 'python_example',
          title: 'Interactive Sandbox: surface3d.py',
          content: 'Generating a gravity-well surface.',
          code: "import numpy as np\nimport matplotlib.pyplot as plt\n\nfig = plt.figure()\nax = fig.add_subplot(projection='3d')\n\n# 1D axes\nx = np.linspace(-5, 5, 50)\ny = np.linspace(-5, 5, 50)\n\n# 2D Grid\nX, Y = np.meshgrid(x, y)\n\n# Vectorized Z calculation over the 2D grid\nZ = X**2 + Y**2\n\nax.plot_surface(X, Y, Z, cmap='viridis')\nprint('Rendering Surface...')"
        }
      ]
    },
    // Lesson 21: Spherical Harmonics
    {
      id: 'l214-3-example',
      title: 'L21: Spherical Harmonics',
      description: 'Advanced 3D surface mapping.',
      icon: 'Globe',
      slides:[
        {
          id: 'l214-3-s1',
          type: 'example_q',
          title: 'Problem: ylm.py',
          content: 'Plotting complex mathematical objects like Spherical Harmonics $Y_{l}^{m}$ requires mapping spherical coordinates $(\\phi, \\theta)$ to Cartesian $(x, y, z)$.'
        },
        {
          id: 'l214-3-s2',
          type: 'theory',
          title: 'Coordinate Transformation',
          content: 'To plot a spherical object in Matplotlib:\n1. Create a `meshgrid` of angles $\\theta$ and $\\phi$.\n2. Calculate the radius $r$ at every point based on the spherical harmonic equation.\n3. Convert to Cartesian:\n   $X = r \\cdot \\sin(\\phi) \\cdot \\cos(\\theta)$\n   $Y = r \\cdot \\sin(\\phi) \\cdot \\sin(\\theta)$\n   $Z = r \\cdot \\cos(\\phi)$'
        }
      ]
    }
  ]
};