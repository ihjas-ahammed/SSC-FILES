"""
Module II: The Programming Language : Python (Units 3–6)
ASD-STE100 Compliant Technical Text strictly adhering to Dr. B P Ajithkumar Chapters 2, 3, 4
and Kinder & Nelson Chapters 1, 2, 3, 5
"""

def get_mod2_stations():
    return [
        {
            "id": "u3",
            "title": "Unit 3 · Python Environment, Variables, Data Types & String Operations",
            "short": "Python Basics & Data Types",
            "est": "~30 min",
            "body": r"""
gist("Python is a high-level interpreted programming language. It combines clear syntax with powerful scientific computing libraries.")

tp("Python Execution Modes and Environment")
<p>Python provides two primary execution modes (Dr. B P Ajithkumar, Chapter 2):</p>
<ul>
  <li><b>Interactive Mode:</b> Statements execute immediately line-by-line upon pressing Enter in the Python REPL (terminal prompt <code>>>></code>). This mode is ideal for quick testing, inspecting variable values, and interactive mathematical exploration.</li>
  <li><b>Script Mode:</b> Code is authored in a text editor, saved with a <code>.py</code> extension, and passed to the Python interpreter (e.g., <code>python3 program.py</code>). This mode is essential for reproducible physical simulations and multi-step scientific workflows.</li>
</ul>

tp("The print() Function: Formatting and Parameters")
<p>The built-in <code>print()</code> function outputs text representations of objects to standard output. It accepts two critical keyword arguments:</p>
<ul>
  <li><code>sep</code>: Specifies the string inserted between multiple values (defaults to a single space <code>' '</code>).</li>
  <li><code>end</code>: Specifies the string appended after the last value (defaults to a newline <code>'\n'</code>).</li>
</ul>

ex(r'''# Standard print demonstration
print("Planck constant:", 6.626e-34, "J*s", sep=" -> ")
print("Measuring voltage", end=" ... ")
print("Value = 5.0 V")
''', {title: "Print Parameters sep and end"})

tp("Variables, Dynamic Typing & Object References")
<p>In Python, variables are not typed memory slots. Variables are symbolic <b>labels (references)</b> bound to objects located in memory. The built-in <code>id()</code> function reveals an object's unique memory address.</p>

ex(r'''# Numeric types and type introspection
n_particles = 1000          # int: arbitrary precision integer
temperature = 298.15        # float: IEEE 754 64-bit double precision
impedance = 4.0 + 3.0j      # complex: native complex type with j suffix

print("Type of n_particles:", type(n_particles))
print("Type of temperature:", type(temperature))
print("Type of impedance:  ", type(impedance))
print(f"Complex parts: Real = {impedance.real}, Imag = {impedance.imag}, Modulus = {abs(impedance)}")
''', {title: "Python Numeric Data Types"})

must("Textbook Rule: Python natively supports complex numbers using the j suffix for the imaginary component. The real and imaginary parts are accessed via .real and .imag, and the modulus is computed using abs(z).")

tp("Keyboard Input, Type Casting & eval()")
<p>The <code>input(prompt)</code> function reads a line from the user and always returns a <code>str</code> object. To use the input in mathematical formulas, you must cast it explicitly:</p>
<ul>
  <li><code>float(s)</code>: Explicitly parses and converts numeric string literals into 64-bit floating point numbers.</li>
  <li><code>int(s)</code>: Explicitly parses integer string literals.</li>
  <li><code>eval(s)</code>: Evaluates any valid Python expression string, executing arithmetic, mathematical functions, or variable lookups.</li>
</ul>

ex(r'''# Type casting and evaluation
s_int = "128"
s_float = "3.14159"
s_expr = "2.5 * 4.0 + 10.0"

val_int = int(s_int)
val_float = float(s_float)
val_eval = eval(s_expr)

print(f"Casted int: {val_int} (Type: {type(val_int).__name__})")
print(f"Casted float: {val_float:.4f} (Type: {type(val_float).__name__})")
print(f"Evaluated expr '{s_expr}' = {val_eval}")
''', {title: "Type Casting and eval()"})

tp("String Operations, Indexing, Slicing & Formatted Printing")
<p>Strings are immutable sequences of Unicode characters. Slicing extracts substrings using the syntax <code>string[start:stop:step]</code>:</p>

ex(r'''# String slicing and modern f-strings
text = "ComputationalPhysics"
print("Length:", len(text))
print("First character [0]:", text[0])
print("Last character [-1]:", text[-1])
print("Slice [0:13]:", text[0:13])
print("Step slice [::2]:", text[::2])

# Formatted string literals (f-strings)
pi = 3.141592653589793
c = 299792458
print(f"Pi (3 decimals): {pi:.3f}")
print(f"Speed of light:  {c:12d} m/s")
print(f"Scientific:      {c:.4e} m/s")
''', {title: "String Slicing and f-string Formatting"})
"""
        },
        {
            "id": "u4",
            "title": "Unit 4 · Operators, Precedence, Expressions & Flow of Control",
            "short": "Operators & Flow of Control",
            "est": "~35 min",
            "body": r"""
gist("Control flow statements determine the order in which individual commands execute: sequentially, selectively through conditionals, or repetitively via loops.")

tp("Operators and Precedence Hierarchy")
<p>When multiple operators appear in a single expression, Python evaluates them according to strict precedence rules (highest to lowest):</p>

std_table([
  "Precedence", "Operator Class", "Operators", "Associativity"
], [
  ["1 (Highest)", "Parentheses", "()", "Left to right"],
  ["2", "Exponentiation", "**", "Right to left"],
  ["3", "Unary signs", "+x, -x, ~x", "Right to left"],
  ["4", "Multiplication, Division", "*, /, //, %", "Left to right"],
  ["5", "Addition, Subtraction", "+, -", "Left to right"],
  ["6", "Bitwise Shifts", "<<, >>", "Left to right"],
  ["7", "Relational Comparisons", "<, <=, >, >=, ==, !=", "Left to right"],
  ["8", "Identity & Membership", "is, is not, in, not in", "Left to right"],
  ["9", "Logical NOT", "not", "Right to left"],
  ["10", "Logical AND", "and", "Left to right"],
  ["11 (Lowest)", "Logical OR", "or", "Left to right"]
])

must("Textbook Rule (Ajithkumar, Ch. 2): In Python 3, 7 / 2 returns 3.5 (float division), while 7 // 2 returns 3 (floor division). For negative numbers, -7 // 2 yields -4 because it rounds down towards negative infinity.")

tp("Selective Control Flow: if, if-else, and if-elif-else Ladder")
<p>Conditionals execute specific code blocks only when a Boolean condition evaluates to <code>True</code>.</p>

ex(r'''# Quantum energy level classification
def classify_state(n):
    if n < 1:
        return "Invalid quantum state: principal quantum number n >= 1"
    elif n == 1:
        return "Ground state (n = 1)"
    elif n == 2:
        return "First excited state (n = 2)"
    else:
        return f"Higher excited state (n = {n})"

for n in [0, 1, 2, 4]:
    print(f"n = {n}: {classify_state(n)}")
''', {title: "Selective Flow · Quantum Energy Levels"})

tp("Iterative Control Flow: while and for Loops with break and continue")
<p>Loops repeat code blocks. <code>break</code> terminates the loop immediately. <code>continue</code> skips the remainder of the current iteration.</p>
<p>A loop's optional <code>else</code> block executes only when the loop terminates normally (without encountering a <code>break</code> statement).</p>

ex(r'''# Find the smallest integer n such that sum(1..n) exceeds a threshold
threshold = 100
total = 0
n = 0

while True:
    n += 1
    total += n
    if total > threshold:
        break

print(f"Threshold = {threshold}: Smallest n = {n}, Sum = {total}")

# Print all even numbers under 15 using continue
print("Even numbers under 15:", end=" ")
for i in range(1, 15):
    if i % 2 != 0:
        continue # Skip odd numbers
    print(i, end=" ")
print()
''', {title: "Iterative Flow · break and continue"})
"""
        },
        {
            "id": "u5",
            "title": "Unit 5 · Data Structures, Functions, File I/O & Pickling",
            "short": "Data Structures & Functions",
            "est": "~35 min",
            "body": r"""
gist("Python collection structures store groups of items. Functions modularize code into reusable computational units.")

tp("Python Collection Data Structures")
<p>Four primary built-in collection structures provide different performance and mutability characteristics (Ajithkumar, Chapter 2):</p>
<ul>
  <li><b>List (<code>[ ]</code>):</b> Ordered, mutable sequence. Elements can be added, modified, sorted, or removed in-place.</li>
  <li><b>Tuple (<code>( )</code>):</b> Ordered, immutable sequence. Contents cannot be modified after instantiation; provides data protection and can serve as dictionary keys.</li>
  <li><b>Set (<code>{ }</code>):</b> Unordered collection of unique items. Supports fast membership tests and set operations (union <code>|</code>, intersection <code>&</code>, difference <code>-</code>).</li>
  <li><b>Dictionary (<code>{k: v}</code>):</b> Key-value hash mapping. Keys must be unique and immutable.</li>
</ul>

ex(r'''# Collection data structures in physical modelling
# List: Particle positions along x-axis
positions = [0.0, 1.2, 2.5, 3.8]
positions.append(5.1)
print("Updated positions list:", positions)

# Tuple: Fixed coordinates of an origin
origin = (0.0, 0.0, 0.0)
print("Origin tuple:", origin)

# Set: Unique quantum spin projections observed
spins = {-0.5, 0.5, 0.5, -0.5}
print("Unique observed spins set:", spins)

# Dictionary: Physical constants lookup
constants = {
    "c": 299792458,       # Speed of light in vacuum (m/s)
    "h": 6.62607015e-34,  # Planck constant (J*s)
    "k_B": 1.380649e-23   # Boltzmann constant (J/K)
}
print(f"Boltzmann constant k_B = {constants['k_B']} J/K")
''', {title: "Python Collections in Physics"})

tp("User-Defined Functions, Parameters & Variable Scope")
<p>Functions encapsulate code using the <code>def</code> keyword. They accept positional, default, and keyword arguments, and can return multiple values as a tuple.</p>
<p>Variables declared inside a function have local scope. To modify a global variable from inside a function, the <code>global</code> keyword is required.</p>

ex(r'''# Kinetic energy and momentum calculation
def kinetic_energy(mass, velocity):
    # Computes non-relativistic kinetic energy: E = 0.5 * m * v^2
    if mass < 0:
        raise ValueError("Mass cannot be negative.")
    ke = 0.5 * mass * velocity**2
    momentum = mass * velocity
    return ke, momentum

m_electron = 9.109e-31 # kg
v_electron = 2.0e6     # m/s

energy, p = kinetic_energy(m_electron, v_electron)
print(f"Kinetic energy = {energy:.4e} J")
print(f"Momentum       = {p:.4e} kg*m/s")
''', {title: "Function Definition and Multiple Returns"})

tp("File Input/Output & Object Serialization with Pickling")
<p>Use the <code>with open(...) as f:</code> context manager to guarantee proper file closure even if an exception occurs during reading or writing.</p>
<p>The <code>pickle</code> module serializes arbitrary Python object hierarchies (lists, dictionaries, custom objects) into binary byte streams (<code>pickle.dump()</code>) and reconstructs them (<code>pickle.load()</code>).</p>

ex(r'''# File writing and reading simulation
import pickle

data = {"experiment": "Photoelectric Effect", "work_function_eV": 2.14, "frequencies": [5e14, 6e14, 7e14]}

# Serialize to binary format
serialized_bytes = pickle.dumps(data)
print("Serialized byte length:", len(serialized_bytes))

# Deserialize back to object
restored_data = pickle.loads(serialized_bytes)
print("Restored dictionary:", restored_data)
print("Work function =", restored_data["work_function_eV"], "eV")
''', {title: "Pickling and Object Serialization"})
"""
        },
        {
            "id": "u6",
            "title": "Unit 6 · Scientific Computing with NumPy & Visualization with Matplotlib",
            "short": "NumPy & Matplotlib",
            "est": "~40 min",
            "body": r"""
gist("NumPy provides high-performance multidimensional arrays and vectorised mathematical operations. Matplotlib generates publication-quality scientific plots.")

tp("NumPy Arrays: Creation, Indexing & Linear Algebra")
<p>Standard Python lists store pointers to objects, causing overhead. NumPy <code>ndarray</code> objects store contiguous blocks of memory with uniform data types, executing compiled C-speed calculations (Ajithkumar, Chapter 3).</p>
<p>The <code>numpy.linalg</code> module provides high-level linear algebra routines: matrix multiplication (<code>@</code> or <code>np.dot</code>), determinant (<code>np.linalg.det</code>), transpose (<code>.T</code>), matrix inverse (<code>np.linalg.inv</code>), and eigenvalue decomposition (<code>np.linalg.eig</code>).</p>

ex(r'''# NumPy array operations and linear algebra
import numpy as np

# Create a 3x3 Hermitian Hamiltonian matrix
H = np.array([
    [2.0, 1.0, 0.0],
    [1.0, 3.0, 1.0],
    [0.0, 1.0, 2.0]
])

print("Matrix H:\n", H)
print("Determinant det(H):", np.linalg.det(H))
print("Inverse H^-1:\n", np.linalg.inv(H))

# Eigenvalue decomposition
eigenvalues, eigenvectors = np.linalg.eig(H)
print("Eigenvalues (Energy levels):", eigenvalues)
print("Eigenvector matrix:\n", eigenvectors)

# Verification: H @ v = lambda * v for the first eigenvector
v0 = eigenvectors[:, 0]
lambda0 = eigenvalues[0]
lhs = H @ v0
rhs = lambda0 * v0
print("Verification (H @ v - lambda * v) norm:", np.linalg.norm(lhs - rhs))
''', {title: "NumPy Matrix Algebra & Eigenvalue Solvers"})

tp("Matplotlib: 2D Plots, Subplots & 3D Visualization")
<p>Matplotlib enables visualization of physical trajectories, wavefunctions, and phase spaces (Ajithkumar, Chapter 4):</p>
<ul>
  <li>2D Line Plots: <code>plt.plot(x, y)</code> with customizable styles, labels, grid, and legends.</li>
  <li>Subplots: <code>plt.subplot(nrows, ncols, index)</code> for multi-panel comparative layouts.</li>
  <li>Polar Plots: <code>plt.subplot(projection='polar')</code> for angular distributions and orbital trajectories.</li>
  <li>Statistical Plots: <code>plt.hist()</code> for distributions and <code>plt.pie()</code> for fractions.</li>
  <li>3D Graphics: <code>mpl_toolkits.mplot3d</code> and <code>plot_surface()</code> with <code>np.meshgrid()</code> for potential energy surfaces.</li>
</ul>

ex(r'''# Scientific plotting with Matplotlib
import numpy as np
import matplotlib.pyplot as plt

# Generate simulated wave data
t = np.linspace(0, 2.0, 100)
freq = 2.0 # Hz
wave1 = np.sin(2 * np.pi * freq * t)
wave2 = np.cos(2 * np.pi * freq * t)

print("Time points count:", len(t))
print("Max amplitude wave1:", np.max(wave1))
print("Max amplitude wave2:", np.max(wave2))
print("Plot configuration verified: 2D line plot ready.")
''', {title: "Matplotlib Signal Simulation"})
"""
        }
    ]
