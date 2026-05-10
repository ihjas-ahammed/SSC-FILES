export interface ExamQuestion {
  id: number;
  section: 'A' | 'B' | 'C';
  marks: number;
  question: string;
  solution: string;
}

export interface ExamPaper {
  moduleId: string;
  questions: ExamQuestion[];
}

export const MODULE_EXAM_PAPERS: Record<string, ExamPaper> = {
  'module-1-python-sagemath': {
    moduleId: 'module-1-python-sagemath',
    questions:[
      {
        id: 1, section: 'A', marks: 3,
        question: "Write the output of the following python program.\n```python\nx = 10\ny = 20\nz = y / x ** 2 % 2\nprint(z)\n```",
        solution: "In Python, exponentiation `**` has higher precedence than division `/` and modulus `%`.\n\n1. `x ** 2` is evaluated first: $10^2 = 100$.\n2. The expression becomes `y / 100 % 2`.\n3. Division and modulus have the same precedence and are evaluated left-to-right.\n4. `y / 100` $\\rightarrow$ `20 / 100 = 0.2`.\n5. `0.2 % 2` evaluates to `0.2`.\n\n**Output:** `0.2`"
      },
      {
        id: 2, section: 'A', marks: 3,
        question: "Define mutable and immutable objects in Python. Give one example of each.",
        solution: "**Mutable Objects:** Objects whose internal state or value can be changed after they are created. Examples: `list`, `dict`, `set`.\n\n**Immutable Objects:** Objects whose state cannot be modified after they are created. Any operation that appears to modify it will actually create a new object. Examples: `int`, `float`, `string`, `tuple`."
      },
      {
        id: 3, section: 'A', marks: 3,
        question: "Write a python program to create a list of 10 random numbers between 0 and 1.",
        solution: "Using the `numpy` library:\n```python\nimport numpy as np\nrandom_numbers = np.random.rand(10)\nprint(random_numbers)\n```\n\nAlternatively, using the built-in `random` module:\n```python\nimport random\nrandom_numbers = [random.random() for _ in range(10)]\nprint(random_numbers)\n```"
      },
      {
        id: 4, section: 'A', marks: 3,
        question: "What is the difference between the `append()` and `insert()` methods in Python lists?",
        solution: "- `append(value)`: Adds the specified `value` to the very end of the list. It takes only one argument.\n- `insert(index, value)`: Inserts the specified `value` at the given `index` position, shifting existing elements to the right. It takes two arguments."
      },
      {
        id: 5, section: 'A', marks: 3,
        question: "Create a $3 \\times 3$ matrix initialized with zeros using NumPy.",
        solution: "```python\nimport numpy as np\n\n# Create a 3x3 matrix of zeros\nmatrix = np.zeros((3, 3))\nprint(matrix)\n```"
      },
      {
        id: 6, section: 'B', marks: 6,
        question: "Write a python function which is recursive to find the factorial of $n$.",
        solution: "```python\ndef factorial(n):\n    # Base case: factorial of 0 or 1 is 1\n    if n <= 1:\n        return 1\n    # Recursive case: n * factorial(n-1)\n    else:\n        return n * factorial(n - 1)\n\n# Example usage:\nprint(f'Factorial of 5 is {factorial(5)}')\n```"
      },
      {
        id: 7, section: 'B', marks: 6,
        question: "Write a program to print the multiplication table of 4.",
        solution: "```python\n# Multiplication table for 4\nmultiplier = 4\n\nfor i in range(1, 11):\n    result = multiplier * i\n    print(f'{multiplier} x {i} = {result}')\n```"
      },
      {
        id: 8, section: 'B', marks: 6,
        question: "Write a program to print a $25 \\times 4$ matrix with elements from 0 to 99 using Numpy.",
        solution: "```python\nimport numpy as np\n\n# Create an array from 0 to 99, then reshape it to 25 rows and 4 columns\nmatrix = np.arange(100).reshape(25, 4)\n\nprint(matrix)\n```"
      },
      {
        id: 9, section: 'B', marks: 6,
        question: "Write a Python program to find the dot product of two vectors represented as NumPy arrays.",
        solution: "```python\nimport numpy as np\n\n# Define two vectors\nvector_a = np.array([1, 2, 3])\nvector_b = np.array([4, 5, 6])\n\n# Compute dot product\ndot_product = np.dot(vector_a, vector_b)\n# Alternatively: dot_product = vector_a @ vector_b\n\nprint(f'Dot Product: {dot_product}')\n```"
      },
      {
        id: 10, section: 'C', marks: 10,
        question: "Write a program to find the transpose of a given $2 \\times 3$ matrix using pure python (without using numpy).",
        solution: "```python\n# Given 2x3 matrix\nmatrix = [\n[1, 2, 3],\n    [4, 5, 6]\n]\n\n# The transpose will be a 3x2 matrix.\n# Initialize an empty transpose matrix with 3 rows and 2 columns\ntranspose = [[0, 0], \n             [0, 0], \n[0, 0]]\n\n# Iterate through rows\nfor i in range(len(matrix)):\n    # Iterate through columns\n    for j in range(len(matrix[0])):\n        transpose[j][i] = matrix[i][j]\n\n# Print the result\nprint('Original Matrix:')\nfor row in matrix:\n    print(row)\n    \nprint('\\nTransposed Matrix:')\nfor row in transpose:\n    print(row)\n```"
      },
      {
        id: 11, section: 'C', marks: 10,
        question: "Explain dynamic typing in Python with an example. How does the `type()` function help in identifying object types? Illustrate your answer.",
        solution: "**Dynamic Typing:** In Python, you do not need to explicitly declare the data type of a variable when you create one. The Python interpreter automatically infers the data type based on the value assigned to the variable at runtime. Furthermore, a variable can be reassigned to a value of a completely different type later in the program.\n\n**Example of Dynamic Typing:**\n```python\nx = 10        # x is an integer\nprint(x)\n\nx = \"Hello\"   # Now x is a string\nprint(x)\n```\n\n**The `type()` function:** Since variable types can change dynamically, the `type()` function is a built-in utility used to determine the current data type of an object referenced by a variable.\n\n```python\nx = 10\nprint(type(x))  # Output: <class 'int'>\n\nx = 10.5\nprint(type(x))  # Output: <class 'float'>\n\nx = [1, 2, 3]\nprint(type(x))  # Output: <class 'list'>\n```\nThis flexibility allows for rapid prototyping, but it requires the programmer to be mindful of types during operations to avoid `TypeError`s (like trying to add a string and an integer)."
      }
    ]
  },
  'module-2-data-visualization': {
    moduleId: 'module-2-data-visualization',
    questions:[
      {
        id: 1, section: 'A', marks: 3,
        question: "Write the code to plot $y = \\sin(x)$ for $x$ ranging from $0$ to $2\\pi$.",
        solution: "```python\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nx = np.linspace(0, 2*np.pi, 100)\ny = np.sin(x)\n\nplt.plot(x, y)\nplt.show()\n```"
      },
      {
        id: 2, section: 'A', marks: 3,
        question: "How do you add a title and axis labels to a matplotlib plot?",
        solution: "You can use `plt.title()`, `plt.xlabel()`, and `plt.ylabel()` functions.\n```python\nimport matplotlib.pyplot as plt\n\nplt.plot([1, 2, 3],[4, 5, 6])\nplt.title('My Graph Title')\nplt.xlabel('X-axis Label')\nplt.ylabel('Y-axis Label')\nplt.show()\n```"
      },
      {
        id: 3, section: 'A', marks: 3,
        question: "What is the purpose of `plt.subplot(221)`?",
        solution: "The `plt.subplot()` function is used to create multiple plots within a single figure. The argument `221` is shorthand for `(2, 2, 1)`. \nIt specifies that the figure should be divided into a grid with 2 rows and 2 columns (making 4 subplots in total), and the current plot will be placed in the 1st position (top-left)."
      },
      {
        id: 4, section: 'A', marks: 3,
        question: "Write a python snippet to plot a scattered graph with red circles.",
        solution: "You can use `plt.plot()` with a format string or `plt.scatter()`.\n```python\nimport matplotlib.pyplot as plt\n\nx = [1, 2, 3]\ny = [4, 2, 5]\n\n# Using plot with format string 'ro' (red circle)\nplt.plot(x, y, 'ro') \n# Or: plt.scatter(x, y, color='red', marker='o')\n\nplt.show()\n```"
      },
      {
        id: 5, section: 'A', marks: 3,
        question: "Correct the following program:\n```python\nx=[1,2,5]\ny=[4,5,6]\nplt.show()\n```",
        solution: "The program is missing the import statement for `matplotlib.pyplot` and the actual plotting command `plt.plot()`.\n\n**Corrected Program:**\n```python\nimport matplotlib.pyplot as plt\n\nx = [1, 2, 5]\ny = [4, 5, 6]\n\nplt.plot(x, y)\nplt.show()\n```"
      },
      {
        id: 6, section: 'B', marks: 6,
        question: "Write a Python program to plot $y = x^2$ and $y = x^3$ on the same graph with a legend.",
        solution: "```python\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nx = np.linspace(-3, 3, 100)\ny1 = x**2\ny2 = x**3\n\nplt.plot(x, y1, label='y = x^2')\nplt.plot(x, y2, label='y = x^3')\n\nplt.legend()\nplt.title('Quadratic vs Cubic')\nplt.grid(True)\nplt.show()\n```"
      },
      {
        id: 7, section: 'B', marks: 6,
        question: "Write a Python program to plot the astroid curve given by the parametric equations $x = a \\cos^3(t)$ and $y = a \\sin^3(t)$.",
        solution: "```python\nimport numpy as np\nimport matplotlib.pyplot as plt\n\na = 2\nt = np.linspace(0, 2*np.pi, 200)\n\n# Parametric equations for the astroid\nx = a * (np.cos(t) ** 3)\ny = a * (np.sin(t) ** 3)\n\nplt.plot(x, y)\nplt.title('Astroid Curve')\nplt.axis('equal') # Ensure aspect ratio is 1:1\nplt.show()\n```"
      },
      {
        id: 8, section: 'B', marks: 6,
        question: "Write a Python program to plot $f(x) = x^2$ on $[-3, 3]$ using matplotlib.",
        solution: "```python\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nx = np.linspace(-3, 3, 100)\ny = x**2\n\nplt.plot(x, y)\nplt.title('Graph of f(x) = x^2')\nplt.xlabel('x')\nplt.ylabel('f(x)')\nplt.grid(True)\nplt.show()\n```"
      },
      {
        id: 9, section: 'B', marks: 6,
        question: "Write a python program to plot the polar curve $r = 2\\theta$ (Archimedes spiral).",
        solution: "```python\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ntheta = np.linspace(0, 10 * np.pi, 500) # 5 full rotations\nr = 2 * theta\n\n# Create a polar plot\nplt.polar(theta, r, color='purple')\n\nplt.title('Archimedes Spiral')\nplt.show()\n```"
      },
      {
        id: 10, section: 'C', marks: 10,
        question: "Plot an ellipse with $a = 2$ and $b = 3$ using matplotlib with red dotted style.",
        solution: "An ellipse can be plotted using its parametric equations: $x = a \\cos(t)$ and $y = b \\sin(t)$ for $t \\in[0, 2\\pi]$.\n\n```python\nimport numpy as np\nimport matplotlib.pyplot as plt\n\na = 2\nb = 3\nt = np.linspace(0, 2 * np.pi, 200)\n\n# Parametric equations of an ellipse\nx = a * np.cos(t)\ny = b * np.sin(t)\n\n# Plot with red dotted style\nplt.plot(x, y, 'r:', label='Ellipse')\n# 'r:' stands for Red Color, Dotted Line style\n\nplt.title('Ellipse Plot')\nplt.xlabel('x-axis')\nplt.ylabel('y-axis')\nplt.axis('equal') # To maintain true geometric shape\nplt.legend()\nplt.show()\n```"
      },
      {
        id: 11, section: 'C', marks: 10,
        question: "Explain how to plot a 3D surface plot for $z = x^2 + y^2$ using Matplotlib. Write the corresponding Python code.",
        solution: "To plot a 3D surface, you must first create a 2D grid of $(x, y)$ coordinates using `np.meshgrid()`. Then, you calculate the $z$ value for every point on that grid. Finally, you use an `Axes3D` object to plot the surface using `plot_surface()`.\n\n```python\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Set up the figure and 3D axes\nfig = plt.figure()\nax = fig.add_subplot(projection='3d')\n\n# Generate 1D arrays for x and y\nx = np.linspace(-5, 5, 50)\ny = np.linspace(-5, 5, 50)\n\n# Create a 2D coordinate grid\nX, Y = np.meshgrid(x, y)\n\n# Calculate Z for every point on the grid\nZ = X**2 + Y**2\n\n# Plot the surface\nsurface = ax.plot_surface(X, Y, Z, cmap='viridis')\n\n# Add labels and colorbar\nax.set_xlabel('X axis')\nax.set_ylabel('Y axis')\nax.set_zlabel('Z axis')\nax.set_title('3D Paraboloid')\nfig.colorbar(surface, shrink=0.5, aspect=0.5)\n\nplt.show()\n```"
      }
    ]
  },
  'module-3-sympy-pandas': {
    moduleId: 'module-3-sympy-pandas',
    questions:[
      {
        id: 1, section: 'A', marks: 3,
        question: "How do you declare symbolic variables $x$ and $y$ in SymPy?",
        solution: "You use the `symbols` function from the `sympy` library.\n```python\nimport sympy as sp\nx, y = sp.symbols('x y')\n```"
      },
      {
        id: 2, section: 'A', marks: 3,
        question: "Write SymPy code to expand the algebraic expression $(x+y)^3$.",
        solution: "```python\nimport sympy as sp\nx, y = sp.symbols('x y')\nexpression = (x + y)**3\nexpanded_expr = sp.expand(expression)\nprint(expanded_expr)\n```"
      },
      {
        id: 3, section: 'A', marks: 3,
        question: "Write pandas code to create a Series from a list `[10, 20, 30]` with indices `['a', 'b', 'c']`.",
        solution: "```python\nimport pandas as pd\nmy_series = pd.Series([10, 20, 30], index=['a', 'b', 'c'])\nprint(my_series)\n```"
      },
      {
        id: 4, section: 'A', marks: 3,
        question: "How do you find the derivative of $\\sin(x^2)$ with respect to $x$ using SymPy?",
        solution: "```python\nimport sympy as sp\nx = sp.symbols('x')\nderivative = sp.diff(sp.sin(x**2), x)\nprint(derivative)\n```"
      },
      {
        id: 5, section: 'A', marks: 3,
        question: "What does the `evalf()` method do in SymPy?",
        solution: "The `evalf()` method converts an exact symbolic mathematical expression (like $\\pi$, $\\sqrt{2}$, or unresolved fractions) into a floating-point numerical approximation. For example, `sp.pi.evalf(5)` evaluates $\\pi$ to 5 significant digits."
      },
      {
        id: 6, section: 'B', marks: 6,
        question: "Evaluate the definite integral $\\int_0^\\pi \\sin(x) dx$ using SymPy.",
        solution: "```python\nimport sympy as sp\n\nx = sp.symbols('x')\n# Definite integral syntax: integrate(function, (variable, lower_limit, upper_limit))\nresult = sp.integrate(sp.sin(x), (x, 0, sp.pi))\n\nprint(f\"The integral is: {result}\")\n```"
      },
      {
        id: 7, section: 'B', marks: 6,
        question: "Write a Python program using SymPy to find the roots of the equation $x^2 - 5x + 6 = 0$.",
        solution: "```python\nimport sympy as sp\n\nx = sp.symbols('x')\nequation = x**2 - 5*x + 6\n\n# The solve function assumes the expression is equal to 0\nroots = sp.solve(equation, x)\n\nprint(f\"The roots are: {roots}\")\n```"
      },
      {
        id: 8, section: 'B', marks: 6,
        question: "Create a Pandas DataFrame from a dictionary of lists and demonstrate how to select a specific column.",
        solution: "```python\nimport pandas as pd\n\n# Dictionary of lists\ndata = {\n    'Name': ['Alice', 'Bob', 'Charlie'],\n    'Age': [24, 27, 22],\n    'City': ['New York', 'London', 'Paris']\n}\n\n# Create DataFrame\ndf = pd.DataFrame(data)\n\n# Select the 'Age' column\nage_column = df['Age']\n\nprint(\"Full DataFrame:\\n\", df)\nprint(\"\\nAge Column:\\n\", age_column)\n```"
      },
      {
        id: 9, section: 'B', marks: 6,
        question: "Write Pandas code to read a CSV file named 'data.csv' and print its first 5 rows.",
        solution: "```python\nimport pandas as pd\n\n# Read the CSV file into a DataFrame\n# Assuming 'data.csv' is in the current working directory\ndf = pd.read_csv('data.csv')\n\n# Print the first 5 rows using head()\nprint(df.head())\n```"
      },
      {
        id: 10, section: 'C', marks: 10,
        question: "Find the limit of $\\frac{\\sin(x)}{x}$ as $x \\to 0$ and the indefinite integral of $x e^x$ using SymPy. Provide the complete python script.",
        solution: "```python\nimport sympy as sp\n\nx = sp.symbols('x')\n\n# 1. Finding the limit\n# Limit of sin(x)/x as x approaches 0\nlimit_expr = sp.sin(x) / x\nlimit_result = sp.limit(limit_expr, x, 0)\nprint(f\"Limit of sin(x)/x as x -> 0 is: {limit_result}\")\n\n# 2. Finding the indefinite integral\n# Integral of x * e^x\nintegral_expr = x * sp.exp(x)\nintegral_result = sp.integrate(integral_expr, x)\nprint(f\"Indefinite integral of x*e^x is: {integral_result}\")\n```"
      },
      {
        id: 11, section: 'C', marks: 10,
        question: "Explain DataFrame in Pandas. Given a pandas DataFrame `df` with columns 'Name', 'Age', and 'Salary', write code to find the average salary of people older than 30.",
        solution: "**Pandas DataFrame:** A DataFrame is a 2-dimensional labeled data structure with columns of potentially different types. It is similar to a spreadsheet or SQL table. It consists of three principal components: the data, the index (row labels), and the columns (column labels).\n\n**Code to find average salary for Age > 30:**\n```python\nimport pandas as pd\n\n# Sample data generation\ndata = {\n    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eva'],\n    'Age': [25, 35, 45, 29, 32],\n    'Salary':[50000, 70000, 120000, 60000, 80000]\n}\ndf = pd.DataFrame(data)\n\n# 1. Filter the DataFrame for Age > 30\nfiltered_df = df[df['Age'] > 30]\n# Alternatively: filtered_df = df.query(\"Age > 30\")\n\n# 2. Extract the 'Salary' column and calculate the mean\naverage_salary = filtered_df['Salary'].mean()\n\nprint(f\"Average salary of people older than 30: {average_salary}\")\n```"
      }
    ]
  },
  'module-4-sagemath': {
    moduleId: 'module-4-sagemath',
    questions:[
      {
        id: 1, section: 'A', marks: 3,
        question: "How do you evaluate $2^3$ in SageMath syntax?",
        solution: "In SageMath, you can use the caret `^` operator for exponentiation, owing to its pre-parser.\n```python\n# In a Sage environment\nprint(2^3) \n# Output: 8\n```"
      },
      {
        id: 2, section: 'A', marks: 3,
        question: "Write the Sage command to find the numerical approximation of $\\pi$ to 50 digits.",
        solution: "You can use the `n()` or `N()` function with the `digits` parameter.\n```python\nN(pi, digits=50)\n# or numerical_approx(pi, digits=50)\n```"
      },
      {
        id: 3, section: 'A', marks: 3,
        question: "Define a mathematical function $f(x) = x^2 - 1$ natively in Sage.",
        solution: "SageMath allows you to define mathematical functions directly without using Python's `def` block.\n```python\nf(x) = x^2 - 1\n```"
      },
      {
        id: 4, section: 'A', marks: 3,
        question: "Write the Sage command to find the reduced row echelon form (RREF) of a matrix $A$.",
        solution: "Assuming the matrix is already defined as `A`, you call the `.rref()` method on the matrix object.\n```python\nA.rref()\n```"
      },
      {
        id: 5, section: 'A', marks: 3,
        question: "How do you calculate the derivative of $x \\sin(x)$ in SageMath?",
        solution: "You use the `diff()` function.\n```python\ndiff(x * sin(x), x)\n```"
      },
      {
        id: 6, section: 'B', marks: 6,
        question: "Write a SageMath code snippet to solve the system of linear equations: $x+y=5$, $x-y=1$.",
        solution: "You can use the `solve` function passing a list of equations and variables.\n```python\nvar('x y')\neq1 = x + y == 5\neq2 = x - y == 1\n\nsolutions = solve([eq1, eq2], x, y)\nprint(solutions)\n```"
      },
      {
        id: 7, section: 'B', marks: 6,
        question: "Use SageMath to find the partial fraction decomposition of $\\frac{1}{x^2-1}$.",
        solution: "First, define the algebraic expression, then use the `partial_fraction()` method.\n```python\nexpr = 1 / (x^2 - 1)\nresult = expr.partial_fraction(x)\nprint(result)\n```"
      },
      {
        id: 8, section: 'B', marks: 6,
        question: "Write Sage commands to plot the functions $f(x) = \\sin(x)$ and $g(x) = \\cos(x)$ on the same graph from $-2\\pi$ to $2\\pi$.",
        solution: "In SageMath, you can superimpose plots by \"adding\" them together.\n```python\np1 = plot(sin(x), x, -2*pi, 2*pi, color='blue', legend_label='sin(x)')\np2 = plot(cos(x), x, -2*pi, 2*pi, color='red', legend_label='cos(x)')\n\ncombined_plot = p1 + p2\ncombined_plot.show()\n```"
      },
      {
        id: 9, section: 'B', marks: 6,
        question: "Show how to find the local minimum of the function $f(x) = x^2 - 4x + 4$ using calculus in Sage.",
        solution: "To find the minimum, we take the first derivative, set it to zero, and solve for $x$.\n```python\nf(x) = x^2 - 4*x + 4\n\n# Take the derivative\nderiv = diff(f(x), x)\n\n# Solve where derivative is zero to find critical points\ncritical_points = solve(deriv == 0, x)\nprint(\"Critical point(s) at:\", critical_points)\n\n# Evaluate the function at the critical point\nx_val = critical_points[0].rhs() # extract the value\nmin_value = f(x_val)\nprint(\"Minimum value is:\", min_value)\n```"
      },
      {
        id: 10, section: 'C', marks: 10,
        question: "Implement Newton's method in SageMath to find the root of $f(x) = \\ln(6 - x^2) - x$ starting with an initial guess $x_0 = 1.5$. Perform 3 iterations.",
        solution: "The recursive formula for Newton's Method is $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$.\n\n```python\n# Define the function\nf(x) = log(6 - x^2) - x\n\n# Define the Newton iteration step function\nnewtn(x) = x - f(x)/diff(f(x), x)\n\n# Initial guess\nx_n = 1.5\nprint(f\"Initial guess: {x_n}\")\n\n# Perform 3 iterations\nfor i in range(1, 4):\n    # Calculate next value\n    x_n = newtn(x_n)\n    # Force decimal evaluation\n    x_n = N(x_n)\n    print(f\"Iteration {i}: {x_n}\")\n```"
      },
      {
        id: 11, section: 'C', marks: 10,
        question: "Explain how to define a $3 \\times 3$ matrix in Sage, find its determinant, and if the determinant is non-zero, find its inverse. Provide the code.",
        solution: "In SageMath, you define a matrix using the `matrix()` function, specifying rows, columns, and a flat list of elements. \nMethods `.det()` and `.inverse()` are used for determinant and inverse calculations respectively.\n\n```python\n# Define a 3x3 matrix\nA = matrix(3, 3,[1, 2, 3,\n                  0, 1, 4,\n                  5, 6, 0])\n\nprint(\"Matrix A:\")\nprint(A)\n\n# Calculate determinant\ndet_A = A.det()\nprint(f\"\\nDeterminant of A: {det_A}\")\n\n# Check if invertible and calculate inverse\nif det_A != 0:\n    print(\"\\nMatrix is invertible. Inverse of A:\")\n    A_inv = A.inverse()\n    print(A_inv)\nelse:\n    print(\"\\nMatrix is singular (determinant is 0), so it has no inverse.\")\n```"
      }
    ]
  }
};