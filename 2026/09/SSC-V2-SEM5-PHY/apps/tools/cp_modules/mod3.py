"""
Module III: Computational Techniques for Experimental Physics (Units 7, 8, 9, 10)
ASD-STE100 Compliant Technical Text
Strictly adhering to S.S. Sastry Chapters 2, 3, 4, 6 and Stickler & Schachinger Chapter 1
Includes all Sastry Textbook Examples & Full Derivations
"""

def get_mod3_stations():
    return [
        {
            "id": "u7",
            "title": "Unit 7 · Numerical Interpolation (Newton's Forward Difference & Lagrange)",
            "short": "Numerical Interpolation",
            "est": "~45 min",
            "body": r"""
gist("Interpolation is the mathematical technique of finding intermediate values of a physical function from a discrete table of measured experimental points.")

tp("Importance of Numerical Methods in Experimental Physics")
<p>In laboratory experiments, sensors record physical quantities at discrete intervals (e.g. temperature every minute, voltage at discrete times). Continuous physical laws connect these discrete points. Numerical analysis provides accurate, systematic mathematical techniques to (Stickler & Schachinger, Chapter 1):</p>
<ul>
  <li>Estimate unmeasured values between sample points (<b>Interpolation</b>).</li>
  <li>Extract empirical parameters and physical constants (<b>Curve Fitting</b>).</li>
  <li>Calculate instantaneous rates of change such as velocity $v = dx/dt$ and acceleration $a = d^2x/dt^2$ (<b>Numerical Differentiation</b>).</li>
  <li>Compute total physical quantities like work done $W = \int F\,dx$ and electric charge $Q = \int I\,dt$ (<b>Numerical Integration</b>).</li>
</ul>

tp("Finite Difference Operators")
<p>Let an experiment measure discrete pairs $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$ where the abscissae are equally spaced with step size $h = x_{i+1} - x_i$.</p>
<p>We define three fundamental difference operators (S.S. Sastry, Chapter 3):</p>
<ul>
  <li><b>Forward Difference Operator ($\Delta$):</b> $\Delta y_i = y_{i+1} - y_i$. Higher orders: $\Delta^2 y_i = \Delta(\Delta y_i) = y_{i+2} - 2y_{i+1} + y_i$.</li>
  <li><b>Backward Difference Operator ($\nabla$):</b> $\nabla y_i = y_i - y_{i-1}$.</li>
  <li><b>Shift Operator ($E$):</b> $E y_i = y_{i+1}$.</li>
</ul>
<p>The operators obey the algebraic relationships: $E = 1 + \Delta$, $\nabla = 1 - E^{-1}$, and $E = e^{h D}$ where $D = d/dx$ is the differential operator.</p>

tp("Newton's Forward Difference Interpolation Formula (Derivation)")
<p>The derivation of Newton's forward difference formula uses the shift operator identity $E = 1 + \Delta$. For any intermediate point $x = x_0 + ph$ (where $p = \frac{x - x_0}{h}$ is a dimensionless real number):</p>

der("newton_fwd")

<p>The standard formula is expressed as:</p>
<p>$$y(x) = y_0 + p\Delta y_0 + \frac{p(p-1)}{2!} \Delta^2 y_0 + \frac{p(p-1)(p-2)}{3!} \Delta^3 y_0 + \dots + \frac{p(p-1)\dots(p-n+1)}{n!} \Delta^n y_0$$</p>

tp("Sastry Textbook Examples: Complete Step-by-Step Solutions")

<p><b>Example 3.4 (Sastry, Page 85):</b></p>
<p><i>Find the cubic polynomial which takes the values: $y(1) = 24, y(3) = 120, y(5) = 336$, and $y(7) = 720$. Hence obtain the value of $y(8)$.</i></p>
<p><b>Analytical Solution:</b> Step size $h = 2, x_0 = 1, y_0 = 24$. We construct the forward difference table:</p>
<ul>
  <li>$x=1, y=24 \implies \Delta y_0 = 120 - 24 = 96$</li>
  <li>$x=3, y=120 \implies \Delta y_1 = 336 - 120 = 216 \implies \Delta^2 y_0 = 216 - 96 = 120$</li>
  <li>$x=5, y=336 \implies \Delta y_2 = 720 - 336 = 384 \implies \Delta^2 y_1 = 384 - 216 = 168 \implies \Delta^3 y_0 = 168 - 120 = 48$</li>
  <li>$x=7, y=720$</li>
</ul>
<p>Parameter $p = \frac{x - 1}{2}$. Applying Newton's formula:<br>
$y(x) = 24 + \left(\frac{x-1}{2}\right)(96) + \frac{\frac{x-1}{2}(\frac{x-1}{2}-1)}{2}(120) + \frac{\frac{x-1}{2}(\frac{x-1}{2}-1)(\frac{x-1}{2}-2)}{6}(48) = x^3 + 6x^2 + 11x + 6$.<br>
For $x = 8$: $y(8) = 8^3 + 6(8^2) + 11(8) + 6 = 512 + 384 + 88 + 6 = \mathbf{990}$.</p>

ex(r'''# Sastry Example 3.4 & General Newton Forward Interpolation
import numpy as np

def newton_forward_interp(x_nodes, y_nodes, x_eval):
    n = len(x_nodes)
    h = x_nodes[1] - x_nodes[0]
    
    # Construct Forward Difference Table
    diff_table = np.zeros((n, n))
    diff_table[:, 0] = y_nodes
    for col in range(1, n):
        for row in range(n - col):
            diff_table[row, col] = diff_table[row + 1, col - 1] - diff_table[row, col - 1]
            
    # Compute polynomial at x_eval
    p = (x_eval - x_nodes[0]) / h
    y_result = diff_table[0, 0]
    p_term = 1.0
    fact = 1.0
    
    for i in range(1, n):
        p_term *= (p - (i - 1))
        fact *= i
        y_result += (p_term / fact) * diff_table[0, i]
        
    return y_result, diff_table

# Data from Example 3.4
x_data = np.array([1.0, 3.0, 5.0, 7.0])
y_data = np.array([24.0, 120.0, 336.0, 720.0])

val_at_8, table = newton_forward_interp(x_data, y_data, 8.0)
print(f"Example 3.4: y(8) = {val_at_8:.1f} (Exact = 990.0)")
print("Difference table (first row deltas):", table[0, :])
''', {title: "Sastry Example 3.4 · Python Implementation"})

<p><b>Example 3.6 (Sastry, Page 87):</b></p>
<p><i>Values of $x$ (in degrees) and $\sin x$ are given: $\sin 15^\circ = 0.2588190, \sin 20^\circ = 0.3420201, \sin 25^\circ = 0.4226183, \sin 30^\circ = 0.5000000, \sin 35^\circ = 0.5735764, \sin 40^\circ = 0.6427876$. Determine $\sin 38^\circ$.</i></p>

ex(r'''# Sastry Example 3.6: Calculate sin(38 degrees)
import numpy as np

# Select nodes near 38 degrees
deg = np.array([25.0, 30.0, 35.0, 40.0])
sin_vals = np.array([0.4226183, 0.5000000, 0.5735764, 0.6427876])

h = 5.0
p = (38.0 - 25.0) / h  # p = 13/5 = 2.6

# Build difference table
n = len(deg)
T = np.zeros((n, n))
T[:, 0] = sin_vals
for j in range(1, n):
    for i in range(n - j):
        T[i, j] = T[i + 1, j - 1] - T[i, j - 1]

# Newton forward calculation
sin_38 = T[0, 0] + p * T[0, 1] + (p * (p - 1) / 2) * T[0, 2] + (p * (p - 1) * (p - 2) / 6) * T[0, 3]
exact_sin_38 = np.sin(np.radians(38.0))

print(f"Calculated sin(38 deg): {sin_38:.7f}")
print(f"Exact math sin(38 deg): {exact_sin_38:.7f}")
print(f"Absolute error:         {abs(sin_38 - exact_sin_38):.2e}")
''', {title: "Sastry Example 3.6 · sin(38°) Interpolation"})

tp("Lagrange's Interpolation Formula for Unequally Spaced Data")
<p>When the data abscissae $x_i$ are arbitrary and unequally spaced ($x_{i+1} - x_i \neq \text{const}$), Newton's forward difference formula cannot be applied. Sastry (Section 3.9) gives Lagrange's formula:</p>
<p>$$L(x) = \sum_{i=0}^n y_i \ell_i(x), \quad \text{where } \ell_i(x) = \prod_{j=0, j \neq i}^n \frac{x - x_j}{x_i - x_j}$$</p>

ex(r'''# Lagrange Interpolation for Arbitrary Spacing
import numpy as np

def lagrange_interp(x_nodes, y_nodes, x):
    total = 0.0
    n = len(x_nodes)
    for i in range(n):
        term = y_nodes[i]
        for j in range(n):
            if i != j:
                term *= (x - x_nodes[j]) / (x_nodes[i] - x_nodes[j])
        total += term
    return total

# Unequally spaced physical calibration data: Voltage vs Temperature (K)
T_meas = np.array([273.15, 290.0, 315.4, 350.2])
V_meas = np.array([0.00, 1.25, 3.10, 5.80])

T_test = 300.0
V_interp = lagrange_interp(T_meas, V_meas, T_test)
print(f"Interpolated voltage at T = {T_test} K: {V_interp:.4f} V")
''', {title: "Lagrange Interpolation for Arbitrary Spacing"})

must("Textbook Selection Rule: Use Newton's forward difference formula when data points are equally spaced ($h = \\text{const}$) and the point to evaluate lies near the beginning of the table. Use Lagrange's formula whenever the data intervals are unequal.")
"""
        },
        {
            "id": "u8",
            "title": "Unit 8 · Method of Least Squares & Curve Fitting of Physical Laws",
            "short": "Curve Fitting & Least Squares",
            "est": "~40 min",
            "body": r"""
gist("Curve fitting determines the optimal mathematical function that best matches experimental observations by minimizing the sum of squared residual errors.")

tp("The Principle of Least Squares")
<p>Let an experiment yield $n$ data points $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$. If we fit a straight line $y = ax + b$, the residual error at each point is $e_i = y_i - (ax_i + b)$.</p>
<p>The principle of least squares (Sastry, Section 4.2) states that the best values of $a$ and $b$ minimize the sum of squared errors:</p>
<p>$$S(a, b) = \sum_{i=1}^n e_i^2 = \sum_{i=1}^n [y_i - (ax_i + b)]^2$$</p>

tp("Derivation of the Normal Equations")
<p>We minimize $S(a, b)$ by setting the first partial derivatives with respect to $a$ and $b$ to zero:</p>

der("least_sq")

<p>The two normal equations are:</p>
<p>$$\begin{aligned} a \sum_{i=1}^n x_i^2 + b \sum_{i=1}^n x_i &= \sum_{i=1}^n x_i y_i \\ a \sum_{i=1}^n x_i + n b &= \sum_{i=1}^n y_i \end{aligned}$$</p>
<p>Solving this $2 \times 2$ system yields the optimal parameters:</p>
<p>$$a = \frac{n \sum x_i y_i - \sum x_i \sum y_i}{n \sum x_i^2 - (\sum x_i)^2}, \quad b = \frac{\sum y_i - a \sum x_i}{n}$$</p>

tp("Sastry Textbook Examples: Linear Curve Fitting")

<p><b>Example 4.1 (Sastry, Page 127):</b></p>
<p><i>Find the straight line fitting the data: $(0, 1), (1, 1.8), (2, 3.3), (3, 4.5), (4, 6.3)$. Also compute the correlation coefficient.</i></p>

ex(r'''# Sastry Example 4.1: Linear least-squares fit
import numpy as np

x = np.array([0.0, 1.0, 2.0, 3.0, 4.0])
y = np.array([1.0, 1.8, 3.3, 4.5, 6.3])
n = len(x)

sum_x = np.sum(x)
sum_y = np.sum(y)
sum_x2 = np.sum(x**2)
sum_xy = np.sum(x * y)

# Normal equations matrix solution
a = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x**2)
b = (sum_y - a * sum_x) / n

# Pearson correlation coefficient r
r = (n * sum_xy - sum_x * sum_y) / (np.sqrt(n * sum_x2 - sum_x**2) * np.sqrt(n * np.sum(y**2) - sum_y**2))

print(f"Sastry Example 4.1 Solution:")
print(f"Fitted slope a       = {a:.3f} (Sastry exact: 1.33)")
print(f"Fitted intercept b   = {b:.3f} (Sastry exact: 0.72)")
print(f"Fitted Line: y = {a:.3f}x + {b:.3f}")
print(f"Correlation coeff r  = {r:.4f}")
''', {title: "Sastry Example 4.1 · Linear Fit & Correlation"})

<p><b>Example 4.2 (Sastry, Page 129):</b></p>
<p><i>Fit a straight line to the data: $(1, 0.5), (2, 2.5), (3, 2.0), (4, 4.0), (5, 3.5), (6, 6.0), (7, 5.5)$.</i></p>

ex(r'''# Sastry Example 4.2: Straight line fit
import numpy as np

x = np.array([1, 2, 3, 4, 5, 6, 7], dtype=float)
y = np.array([0.5, 2.5, 2.0, 4.0, 3.5, 6.0, 5.5], dtype=float)

# Fit line with polyfit
slope, intercept = np.polyfit(x, y, 1)
print(f"Example 4.2: y = {slope:.3f}x + {intercept:.3f}")
''', {title: "Sastry Example 4.2 · Polyfit Linear"})

tp("Linearization of Nonlinear Physical Laws")
<p>Many physical processes follow nonlinear relationships. By applying mathematical transformations (taking logarithms, reciprocals, or power transformations), we reduce the nonlinear equation to the standard straight line form $Y = A X + B$ (Sastry, Section 4.2.3):</p>

std_table([
  "Physical Law", "Mathematical Form", "Transformation", "Linear Form $Y = A X + B$"
], [
  ["Exponential Decay / Growth", "$y = a e^{bx}$", "$Y = \\ln y, \\quad X = x$", "$Y = b X + \\ln a$"],
  ["Power Law", "$y = a x^b$", "$Y = \\ln y, \\quad X = \\ln x$", "$Y = b X + \\ln a$"],
  ["Reciprocal / Rational Law", "$y = \\frac{x}{a + bx}$", "$Y = 1/y, \\quad X = 1/x$", "$Y = a X + b$"],
  ["Hyperbolic Law", "$y = a + \\frac{b}{x}$", "$Y = y, \\quad X = 1/x$", "$Y = b X + a$"]
])

<p><b>Example 4.4 (Sastry, Page 133):</b></p>
<p><i>Using the method of least squares, find constants $a$ and $b$ such that $y = a e^{bx}$ fits the data: $(1.0, 2.473), (3.0, 6.722), (5.0, 18.274), (7.0, 49.673), (9.0, 135.026)$.</i></p>

ex(r'''# Sastry Example 4.4: Fit y = a * exp(b * x)
import numpy as np

x = np.array([1.0, 3.0, 5.0, 7.0, 9.0])
y = np.array([2.473, 6.722, 18.274, 49.673, 135.026])

# Transformation: Y = ln(y), X = x
Y = np.log(y)
b, ln_a = np.polyfit(x, Y, 1)
a = np.exp(ln_a)

print(f"Sastry Example 4.4 Exponential Fit:")
print(f"Parameter a = {a:.4f} (Exact: 1.500)")
print(f"Parameter b = {b:.4f} (Exact: 0.500)")
print(f"Fitted Equation: y = {a:.4f} * e^({b:.4f}x)")
''', {title: "Sastry Example 4.4 · Exponential Curve Fit"})

tp("Physics Practical: RC Circuit Transient Least-Squares Fitting")
<p>In an RC circuit, the capacitor discharges according to $V(t) = V_0 e^{-t/\tau}$ where $\tau = RC$ is the circuit time constant. Linearizing by taking the natural logarithm:</p>
<p>$$\ln V = \ln V_0 - \frac{1}{\tau} t \implies Y = A + B t, \quad \text{where } B = -\frac{1}{\tau}$$</p>

ex(r'''# Physics Lab: Fit RC transient decay and calculate time constant tau
import numpy as np
import pandas as pd

# Load virtual experimental lab data
df = pd.read_csv("rc_decay.csv")
t = df["time"].values
V = df["voltage"].values

# Transform: Y = ln(V)
Y = np.log(V)
B, A = np.polyfit(t, Y, 1)

V0_fit = np.exp(A)
tau_fit = -1.0 / B

print("=== Physics Lab Experiment: RC Transient Decay ===")
print(f"Initial Voltage V_0 = {V0_fit:.3f} V")
print(f"Decay slope B       = {B:.4f} s^-1")
print(f"Time constant tau   = {tau_fit:.3f} s (R * C)")
''', {title: "Physics Lab Experiment · RC Circuit Transient Analysis"})
"""
        },
        {
            "id": "u9",
            "title": "Unit 9 · Numerical Differentiation & Integration (Trapezoidal & Simpson's 1/3)",
            "short": "Differentiation & Integration",
            "est": "~45 min",
            "body": r"""
gist("Numerical differentiation evaluates instantaneous rates of change using finite difference quotients. Numerical integration calculates definite integrals via polynomial quadrature.")

tp("Numerical Differentiation: Taylor Series Approximations")
<p>Numerical differentiation formulas are derived by expanding $f(x)$ in Taylor series (Sastry, Section 6.2):</p>
<ul>
  <li><b>Forward Difference (1st order):</b> $f'(x_0) \approx \frac{f(x_0+h) - f(x_0)}{h} + \mathcal{O}(h)$</li>
  <li><b>Backward Difference (1st order):</b> $f'(x_0) \approx \frac{f(x_0) - f(x_0-h)}{h} + \mathcal{O}(h)$</li>
  <li><b>Central Difference (2nd order):</b> $f'(x_0) \approx \frac{f(x_0+h) - f(x_0-h)}{2h} + \mathcal{O}(h^2)$</li>
  <li><b>Second Derivative (2nd order):</b> $f''(x_0) \approx \frac{f(x_0+h) - 2f(x_0) + f(x_0-h)}{h^2} + \mathcal{O}(h^2)$</li>
</ul>

must("Textbook Principle: The central difference formula is preferred because the leading odd Taylor expansion terms cancel out, giving second-order truncation error O(h^2) instead of first-order O(h).")

tp("Sastry Examples 6.1 & 6.3: Differentiation from Tabular Data")
<p><b>Example 6.1 (Sastry, Page 193):</b></p>
<p><i>Given $y = f(x)$: $(1.0, 2.7183), (1.2, 3.3201), (1.4, 4.0552), (1.6, 4.9530), (1.8, 6.0496), (2.0, 7.3891), (2.2, 9.0250)$. Compute $f'(1.2)$ and $f''(1.2)$ using central differences ($h = 0.2$).</i></p>

ex(r'''# Sastry Example 6.1: First and second derivatives
import numpy as np

x = np.array([1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2])
y = np.array([2.7183, 3.3201, 4.0552, 4.9530, 6.0496, 7.3891, 9.0250])
h = 0.2

# Derivatives at index 1 (x = 1.2)
# Central difference for f'(x_1)
df1 = (y[2] - y[0]) / (2 * h)

# Central difference for f''(x_1)
d2f1 = (y[2] - 2 * y[1] + y[0]) / (h**2)

print(f"Central difference f'(1.2)  = {df1:.4f} (Exact exp(1.2): {np.exp(1.2):.4f})")
print(f"Central difference f''(1.2) = {d2f1:.4f} (Exact exp(1.2): {np.exp(1.2):.4f})")
''', {title: "Sastry Examples 6.1 & 6.3 · Derivative Formulas"})

tp("Physical Kinematics Application: Velocity and Acceleration")
<p>Given discrete experimental trajectory data $x(t)$, we apply finite differences to obtain velocity $v(t) = \frac{dx}{dt}$ and acceleration $a(t) = \frac{d^2x}{dt^2}$:</p>

ex(r'''# Physical Kinematics: Position -> Velocity -> Acceleration
import numpy as np

# Discrete trajectory of an accelerating particle under drag
time = np.linspace(0, 5.0, 11) # h = 0.5 s
# x(t) = 5 * (t + exp(-t) - 1)
pos = 5.0 * (time + np.exp(-time) - 1.0)
h = time[1] - time[0]

vel = np.zeros_like(pos)
acc = np.zeros_like(pos)

# Internal points using central differences
for i in range(1, len(time) - 1):
    vel[i] = (pos[i + 1] - pos[i - 1]) / (2 * h)
    acc[i] = (pos[i + 1] - 2 * pos[i] + pos[i - 1]) / (h**2)

# Endpoints using forward/backward differences
vel[0] = (pos[1] - pos[0]) / h
vel[-1] = (pos[-1] - pos[-2]) / h
acc[0] = (pos[2] - 2*pos[1] + pos[0]) / (h**2)
acc[-1] = (pos[-1] - 2*pos[-2] + pos[-3]) / (h**2)

print(f"{'Time (s)':<10}{'Position (m)':<15}{'Velocity (m/s)':<16}{'Accel (m/s^2)':<15}")
for t_val, x_val, v_val, a_val in zip(time, pos, vel, acc):
    print(f"{t_val:<10.1f}{x_val:<15.4f}{v_val:<16.4f}{a_val:<15.4f}")
''', {title: "Physics Kinematics · Velocity & Acceleration"})

tp("Numerical Quadrature: Trapezoidal Rule")
<p>The definite integral $I = \int_a^b f(x)\,dx$ represents the area under the curve. The trapezoidal rule approximates each panel $[x_i, x_{i+1}]$ as a trapezoid (Sastry, Section 6.4.1):</p>

der("trapezoidal")

<p>The composite trapezoidal rule for $n$ equal subintervals of width $h = \frac{b-a}{n}$ is:</p>
<p>$$I = \frac{h}{2} \left[ y_0 + 2(y_1 + y_2 + \dots + y_{n-1}) + y_n \right]$$</p>
<p>The global truncation error is: $E_T = -\frac{(b-a)}{12} h^2 f''(\xi) = \mathcal{O}(h^2)$.</p>

tp("Simpson's 1/3 Rule")
<p>Simpson's 1/3 rule fits a parabolic arc through triplets of consecutive points (Sastry, Section 6.4.2). The number of intervals $n$ must be an <b>even integer</b>:</p>
<p>$$I = \frac{h}{3} \left[ y_0 + 4(y_1 + y_3 + \dots + y_{n-1}) + 2(y_2 + y_4 + \dots + y_{n-2}) + y_n \right]$$</p>
<p>The global truncation error is: $E_S = -\frac{(b-a)}{180} h^4 f^{(4)}(\xi) = \mathcal{O}(h^4)$, delivering fourth-order precision.</p>

ex(r'''# Textbook Integration Comparison: Evaluate Integral of 1 / (1 + x^2) from 0 to 1
# Analytical result: arctan(1) - arctan(0) = pi / 4
import numpy as np

def f(x):
    return 1.0 / (1.0 + x**2)

a, b = 0.0, 1.0
n = 6 # Must be even for Simpson's rule
h = (b - a) / n
x = np.linspace(a, b, n + 1)
y = f(x)

# 1. Trapezoidal Rule
trap_val = (h / 2.0) * (y[0] + 2.0 * np.sum(y[1:-1]) + y[-1])

# 2. Simpson's 1/3 Rule
odds = np.sum(y[1:-1:2])
evens = np.sum(y[2:-1:2])
simp_val = (h / 3.0) * (y[0] + 4.0 * odds + 2.0 * evens + y[-1])

exact = np.pi / 4.0
print(f"Exact pi/4       = {exact:.8f}")
print(f"Trapezoidal (n=6) = {trap_val:.8f} (Error: {abs(trap_val - exact):.2e})")
print(f"Simpson 1/3 (n=6) = {simp_val:.8f} (Error: {abs(simp_val - exact):.2e})")
''', {title: "Numerical Integration · Trapezoidal vs Simpson 1/3"})
"""
        },
        {
            "id": "u10",
            "title": "Unit 10 · Root Finding Methods (Bisection & Newton-Raphson)",
            "short": "Root Finding Methods",
            "est": "~40 min",
            "body": r"""
gist("Root-finding algorithms locate the values of x for which an algebraic or transcendental physical equation satisfies f(x) = 0.")

tp("The Intermediate Value Theorem and Bracketing")
<p>If $f(x)$ is continuous on an interval $[a, b]$ and $f(a) \cdot f(b) < 0$, then there exists at least one real root $\alpha \in (a, b)$ such that $f(\alpha) = 0$ (Sastry, Section 2.1).</p>

tp("The Bisection Method")
<p>The bisection method systematically halves the search interval (Sastry, Section 2.2):</p>
<ol>
  <li>Compute midpoint $c = \frac{a+b}{2}$.</li>
  <li>If $f(c) == 0$, $c$ is the exact root.</li>
  <li>If $f(a) \cdot f(c) < 0$, the root lies in $[a, c]$; set $b = c$.</li>
  <li>Otherwise, set $a = c$. Repeat until $|b - a| < \epsilon$.</li>
</ol>
<p>The error after $n$ iterations is bounded by: $|x_n - \alpha| \le \frac{b - a}{2^n}$.</p>

<p><b>Example 2.2 (Sastry, Page 24):</b></p>
<p><i>Find a root of $f(x) = x^3 - x - 1 = 0$ lying in $[1, 2]$ using the bisection method.</i></p>

ex(r'''# Sastry Example 2.2: Bisection method on x^3 - x - 1 = 0
def bisection(f, a, b, tol=1e-5, max_iter=50):
    if f(a) * f(b) >= 0:
        raise ValueError("f(a) and f(b) must have opposite signs.")
        
    for i in range(1, max_iter + 1):
        c = (a + b) / 2.0
        fc = f(c)
        if abs(fc) < tol or (b - a) / 2.0 < tol:
            return c, i
        if f(a) * fc < 0:
            b = c
        else:
            a = c
    return c, max_iter

def f_example(x):
    return x**3 - x - 1.0

root, iters = bisection(f_example, 1.0, 2.0)
print(f"Sastry Example 2.2: Root = {root:.5f} found in {iters} iterations")
print(f"Verification: f({root:.5f}) = {f_example(root):.2e}")
''', {title: "Sastry Example 2.2 · Bisection Method"})

<p><b>Example 2.4 (Sastry, Page 26):</b></p>
<p><i>Find a positive root of $x e^x = 1$ in $[0, 1]$ using the bisection method.</i></p>

ex(r'''# Sastry Example 2.4: Root of x * exp(x) - 1 = 0
import numpy as np

def f_transcendental(x):
    return x * np.exp(x) - 1.0

# Bisection search between 0 and 1
root, iters = bisection(f_transcendental, 0.0, 1.0, tol=1e-6)
print(f"Sastry Example 2.4: Root = {root:.6f} in {iters} iterations")
print(f"Verification x*exp(x) = {root * np.exp(root):.6f} (Exact = 1.0)")
''', {title: "Sastry Example 2.4 · Transcendental Root"})

tp("The Newton–Raphson Method and Quadratic Convergence")
<p>The Newton–Raphson method approximates $f(x)$ by the tangent line at $(x_n, f(x_n))$ (Sastry, Section 2.5):</p>

der("newton_raphson")

<p>The iteration formula is:</p>
<p>$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$</p>
<p>The error satisfies the quadratic recurrence $\epsilon_{n+1} \approx \frac{f''(\alpha)}{2 f'(\alpha)} \epsilon_n^2$. The number of correct decimal places doubles with each iteration ($p = 2$).</p>

<p><b>Example 2.15 (Sastry, Page 37):</b></p>
<p><i>Find a real root of $f(x) = x^3 - 2x - 5 = 0$ using the Newton-Raphson method.</i></p>

ex(r'''# Sastry Example 2.15: Newton-Raphson Method
def newton_raphson(f, df, x0, tol=1e-8, max_iter=20):
    x = x0
    for i in range(1, max_iter + 1):
        fx = f(x)
        dfx = df(x)
        if abs(dfx) < 1e-12:
            raise ZeroDivisionError("Derivative too close to zero.")
        x_next = x - fx / dfx
        print(f"Iteration {i}: x = {x_next:.8f}, f(x) = {fx:.2e}")
        if abs(x_next - x) < tol:
            return x_next, i
        x = x_next
    return x, max_iter

# f(x) = x^3 - 2x - 5, f'(x) = 3x^2 - 2
f = lambda x: x**3 - 2.0*x - 5.0
df = lambda x: 3.0*x**2 - 2.0

root, iters = newton_raphson(f, df, 2.0)
print(f"Sastry Example 2.15 Root = {root:.8f} (Converged in {iters} iterations)")
''', {title: "Sastry Example 2.15 · Newton-Raphson Method"})

must("Textbook Failure Modes: The Newton-Raphson method diverges or fails if: 1. f'(x_n) ≈ 0 (horizontal tangent, division by zero); 2. The initial guess x_0 is too far from root α; 3. The iteration enters a periodic cycle (oscillation) between points.")
"""
        }
    ]
