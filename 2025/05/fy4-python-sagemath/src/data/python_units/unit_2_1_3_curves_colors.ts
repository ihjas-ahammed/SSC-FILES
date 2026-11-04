import { Unit } from '../../types';

export const UNIT_2_1_3_CURVES_COLORS: Unit = {
  id: 'unit-2-1-3-curves-colors',
  title: '213: Famous Curves & Colormaps',
  description: 'Parametric equations, Polar plots, and 2D arrays via imshow.',
  color: 'duo-green',
  lessons:[
    // Lesson 11 & 12 (Theory/Example): Astroid
    {
      id: 'l213-1-theory',
      title: 'L11: Parametric Curves (Astroid)',
      description: 'Plotting functions mapped to a parameter t.',
      icon: 'Star',
      slides:[
        {
          id: 'l213-1-s1',
          type: 'theory',
          title: 'Parametric Equations',
          content: 'Some curves cannot be expressed as simple $y = f(x)$ functions because a single $x$ value maps to multiple $y$ values. \n\nInstead, both $x$ and $y$ are functions of a third parameter, $t$.\n\nThe **Astroid** (a tetracuspid curve) is given by:\n$x = a\\cos^3(t)$\n$y = a\\sin^3(t)$'
        },
        {
          id: 'l213-1-s2',
          type: 'python_example',
          title: 'Interactive Sandbox: astro.py',
          content: 'Notice how we generate `t` first, then calculate `x` and `y`.',
          code: "import numpy as np\nimport matplotlib.pyplot as plt\n\na = 2\nt = np.linspace(0, 2*np.pi, 200)\n\n# Parametric equations\nx = a * np.cos(t)**3\ny = a * np.sin(t)**3\n\nplt.plot(x, y, 'b-')\nplt.axis('equal') # Forces aspect ratio 1:1 so it looks correct\nprint('Rendering Astroid...')"
        }
      ]
    },
    // Lesson 13 (Example): Ellipse and Lissajous
    {
      id: 'l213-2-example',
      title: 'L13: Lissajous Figures',
      description: 'Complex parametric oscillations.',
      icon: 'Activity',
      slides:[
        {
          id: 'l213-2-s1',
          type: 'example_q',
          title: 'Lissajous Curves',
          content: 'A Lissajous figure is generated when $x$ and $y$ oscillate at different frequencies.\n\n$x = a\\cos(n t)$\n$y = b\\sin(m t)$'
        },
        {
          id: 'l213-2-s2',
          type: 'python_example',
          title: 'Interactive Sandbox: lissa.py',
          content: 'Change the multipliers inside the `sin` and `cos` functions to see different Lissajous knots.',
          code: "import numpy as np\nimport matplotlib.pyplot as plt\n\na = 2\nt = np.linspace(-2*np.pi, 2*np.pi, 400)\n\n# Frequency ratio 3:2\nx = a * np.cos(3*t)\ny = a * np.sin(2*t)\n\nplt.plot(x, y, 'g-')\nplt.title('Lissajous Figure (3:2)')\nprint('Plotting...')"
        }
      ]
    },
    // Lesson 14: Polar Plots
    {
      id: 'l213-3-theory',
      title: 'L14: Polar Plots & Spirals',
      description: 'Switching the coordinate system to r and theta.',
      icon: 'Compass',
      slides:[
        {
          id: 'l213-3-s1',
          type: 'theory',
          title: 'Polar Coordinates',
          content: 'Instead of Cartesian $(x, y)$, polar coordinates locate points using an angle $\\theta$ and a radius $r$.\n\nMatplotlib supports this via the `plt.polar(theta, r)` function. \n\n**Archimedes Spiral:** $r = a\\theta$'
        },
        {
          id: 'l213-3-s2',
          type: 'python_example',
          title: 'Interactive Sandbox: archi.py',
          content: 'Watch the radius grow linearly with the angle.',
          code: "import numpy as np\nimport matplotlib.pyplot as plt\n\na = 2\nth = np.linspace(0, 10 * np.pi, 500) # 5 full rotations\nr = a * th\n\nplt.polar(th, r, color='purple')\nprint('Rendering Archimedes Spiral...')"
        }
      ]
    },
    // Lesson 15 & 16: Colormaps and Fractals
    {
      id: 'l213-4-theory',
      title: 'L15: 2D Plots using Colors (imshow)',
      description: 'Mapping 2D matrix values to colors.',
      icon: 'Image',
      slides:[
        {
          id: 'l213-4-s1',
          type: 'theory',
          title: 'plt.imshow()',
          content: 'A two-dimensional matrix can be represented graphically by assigning a color to each point proportional to the value of that element.\n\n`plt.imshow(matrix)` visualizes the 2D array, treating it like a heat map or image.'
        },
        {
          id: 'l213-4-s2',
          type: 'solution',
          title: 'The Julia Set Algorithm',
          content: 'Fractals are created by iteratively applying an equation $f(z) \\rightarrow z^2 + c$ to complex numbers in a 2D plane.',
          interactiveSteps:[
            {
              prompt: 'To compute a 2D image of a fractal, what matrix structure do we need?',
              options:[
                { id: 'a', text: 'A 2D NumPy array initialized to store iteration counts.', isCorrect: true, explanation: 'We create a 2D array, map each (row, col) to a complex coordinate, run the iteration, and store the escape step count in the array.' },
                { id: 'b', text: 'A 1D array of imaginary numbers.', isCorrect: false, explanation: 'A 1D array only creates a line, not a 2D image.' }
              ]
            }
          ]
        },
        {
          id: 'l213-4-s3',
          type: 'python_example',
          title: 'Interactive Sandbox: julia.py',
          content: 'Calculate and visualize a Julia set. (Grid restricted to 100x100 for browser speed).',
          code: "import numpy as np\nimport matplotlib.pyplot as plt\n\nsize = 100\nmax_iter = 50\nc = -0.4 + 0.6j # The complex constant\n\n# Pre-allocate 2D array\nm = np.zeros((size, size))\n\nfor x in range(size):\n    for y in range(size):\n        # Map pixel (x,y) to complex plane (-1.5 to 1.5)\n        re = 1.5 * (x - size/2) / (size/2)\n        im = 1.5 * (y - size/2) / (size/2)\n        z = complex(re, im)\n        \n        # Iterate\n        for k in range(max_iter):\n            if abs(z) > 2.0:\n                break\n            z = z**2 + c\n        m[y, x] = k\n\nplt.imshow(m, cmap='jet')\nprint('Fractal generation complete.')"
        }
      ]
    }
  ]
};