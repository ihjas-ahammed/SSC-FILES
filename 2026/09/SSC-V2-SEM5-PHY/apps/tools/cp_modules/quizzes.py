"""
Practice Quizzes (OMR) for Computational Physics Units 1–13
Includes LaTeX formulas and code blocks
"""

def get_quizzes():
    return {
        "u1": [
            {
                "q": "Which of the following is NOT one of the four core pillars of computational thinking?",
                "o": ["Decomposition", "Hardware manufacturing", "Pattern recognition", "Algorithm design"],
                "a": 1,
                "why": "The four pillars are Decomposition, Pattern Recognition, Abstraction, and Algorithm Design. Hardware manufacturing is an electrical engineering activity, not a computational thinking technique."
            },
            {
                "q": "Under what condition is the logical implication $P \\to Q$ False?",
                "o": ["When $P$ is False and $Q$ is True", "When both $P$ and $Q$ are False", "When $P$ is True and $Q$ is False", "When both $P$ and $Q$ are True"],
                "a": 2,
                "why": "By definition, an implication $P \\to Q$ is logically equivalent to $\\neg P \\lor Q$. It evaluates to False only when the premise $P$ is True and the consequence $Q$ is False."
            },
            {
                "q": "According to De Morgan's Law, what is the logical equivalent of $\\neg (P \\lor Q)$?",
                "o": ["$\\neg P \\lor \\neg Q$", "$\\neg P \\land \\neg Q$", "$P \\land Q$", "$\\neg P \\to Q$"],
                "a": 1,
                "why": "De Morgan's second law states that the negation of a disjunction is the conjunction of the individual negations: $\\neg (P \\lor Q) \\equiv \\neg P \\land \\neg Q$."
            }
        ],
        "u2": [
            {
                "q": "In a standard flowchart, which geometric shape represents a conditional decision test?",
                "o": ["Rectangle", "Oval", "Diamond", "Parallelogram"],
                "a": 2,
                "why": "A Diamond symbol represents a decision point where control flow branches based on a Boolean test (Yes/No or True/False). Rectangles represent processes, ovals represent terminals (Start/Stop), and parallelograms represent Input/Output."
            },
            {
                "q": "What is the worst-case number of comparisons in Bubble Sort for an array of size $n$?",
                "o": ["$n$", "$n \\log_2 n$", "$\\frac{n(n-1)}{2}$", "$2^n$"],
                "a": 2,
                "why": "In the worst case (reverse-sorted array), the outer loop executes $n-1$ passes, performing $(n-1) + (n-2) + \\dots + 1 = \\frac{n(n-1)}{2} \\approx O(n^2)$ comparisons."
            },
            {
                "q": "What will this Python algorithm compute?\n```python\na, b = 48, 18\nwhile b != 0:\n    a, b = b, a % b\nprint(a)\n```",
                "o": ["0", "6", "18", "48"],
                "a": 1,
                "why": "This is Euclid's algorithm for Greatest Common Divisor (GCD). Steps: (48, 18) -> (18, 12) -> (12, 6) -> (6, 0). When $b=0$, $a=6$ is returned. $\\gcd(48, 18) = 6$."
            }
        ],
        "u3": [
            {
                "q": "What is the value and type of `z.real` if `z = 3.5 - 2.5j`?",
                "o": ["3.5 (float)", "3 (int)", "-2.5 (float)", "3.5 - 2.5j (complex)"],
                "a": 0,
                "why": "In Python complex numbers, `.real` returns the real component as a 64-bit float (`3.5`). `.imag` returns the imaginary component (`-2.5`)."
            },
            {
                "q": "What does the expression `\"Physics\"[1:5:2]` return?",
                "o": ["\"hsi\"", "\"ys\"", "\"hy\"", "\"hsi\""],
                "a": 1,
                "why": "Slicing `s[start:stop:step]` from index 1 (inclusive) to 5 (exclusive) with step 2 takes indices 1 ('y') and 3 ('s'), yielding 'ys'."
            },
            {
                "q": "What is the output of `print(f\"{299792458:.2e}\")`?",
                "o": ["2.99792458e+08", "3.00e+08", "2.99e+08", "3.0e+08"],
                "a": 1,
                "why": "The `.2e` specifier formats the number in scientific exponential notation with 2 digits after the decimal point: 2.9979 rounds to 3.00e+08."
            }
        ],
        "u4": [
            {
                "q": "What does the floor division expression `7 // 2` evaluate to in Python 3?",
                "o": ["3.5", "3", "4", "3.0"],
                "a": 1,
                "why": "In Python 3, `//` computes integer floor division, rounding down towards negative infinity. 7 // 2 evaluates to the integer 3."
            },
            {
                "q": "What does the following loop print?\n```python\nfor i in range(1, 5):\n    if i == 3:\n        continue\n    print(i, end='')\n```",
                "o": ["12", "124", "1234", "3"],
                "a": 1,
                "why": "When $i=3$, the `continue` statement skips the remainder of the iteration. Hence, 1, 2, and 4 are printed without spaces, producing '124'."
            },
            {
                "q": "When does the `else` block of a Python loop execute?",
                "o": ["On every iteration", "Only if an exception is raised", "When the loop terminates normally without encountering `break`", "Never in valid code"],
                "a": 2,
                "why": "A loop's `else` clause executes when the loop finishes all iterations naturally (or the while condition becomes false). It is skipped if the loop is broken by a `break` statement."
            }
        ],
        "u5": [
            {
                "q": "Which Python collection type is immutable and can serve as a dictionary key?",
                "o": ["list", "tuple", "dict", "set"],
                "a": 1,
                "why": "Tuples are immutable sequences. Because their contents cannot change, they have a fixed hash value and can be safely used as dictionary keys or set elements."
            },
            {
                "q": "What is the result of `{1, 2, 3} & {2, 3, 4}` in Python?",
                "o": ["{1, 4}", "{1, 2, 3, 4}", "{2, 3}", "5"],
                "a": 2,
                "why": "The `&` operator computes set intersection, returning a new set containing only elements present in both operands: {2, 3}."
            },
            {
                "q": "What is the role of `pickle.dump(obj, file)` in Python?",
                "o": ["Converts text to uppercase", "Deletes the object from memory", "Serializes the Python object into a binary stream and writes it to file", "Compiles code to C"],
                "a": 2,
                "why": "Pickle serialization converts Python object hierarchies into byte streams for persistent disk storage or network transfer."
            }
        ],
        "u6": [
            {
                "q": "What will `np.linspace(0, 10, 5)` generate?",
                "o": ["[0, 2, 4, 6, 8]", "[0., 2.5, 5., 7.5, 10.]", "[0, 10, 5]", "[0., 2., 4., 6., 8.]"],
                "a": 1,
                "why": "`np.linspace(start, stop, num)` generates `num` equally spaced points between `start` and `stop` inclusive. Step size is (10 - 0)/(5 - 1) = 2.5."
            },
            {
                "q": "Which NumPy function computes the eigenvalues and eigenvectors of a square matrix A?",
                "o": ["np.linalg.solve(A)", "np.linalg.inv(A)", "np.linalg.eig(A)", "np.linalg.det(A)"],
                "a": 2,
                "why": "`np.linalg.eig(A)` calculates both eigenvalues and eigenvectors, returning a tuple `(evals, evecs)` where column `evecs[:, i]` is the eigenvector for `evals[i]`."
            },
            {
                "q": "Which Matplotlib command plots multiple independent subplots in a 2-row, 1-column layout?",
                "o": ["plt.split(2, 1)", "plt.subplot(2, 1, 1) and plt.subplot(2, 1, 2)", "plt.grid(2, 1)", "plt.twinx()"],
                "a": 1,
                "why": "`plt.subplot(nrows, ncols, index)` divides the figure into a grid. `(2, 1, 1)` activates the top panel, and `(2, 1, 2)` activates the bottom panel."
            }
        ],
        "u7": [
            {
                "q": "In Newton's forward difference formula, how is the dimensionless parameter $p$ defined?",
                "o": ["$p = x - x_0$", "$p = \\frac{x - x_0}{h}$", "$p = \\frac{h}{x - x_0}$", "$p = h(x - x_0)$"],
                "a": 1,
                "why": "The dimensionless step parameter $p$ represents the fractional number of steps from the initial base point $x_0$: $p = (x - x_0)/h$, where $h = x_1 - x_0$."
            },
            {
                "q": "What is the value of the second forward difference $\\Delta^2 y_0$ in terms of function values?",
                "o": ["$y_2 - y_0$", "$y_2 - 2y_1 + y_0$", "$y_1 - 2y_0$", "$y_2 + 2y_1 + y_0$"],
                "a": 1,
                "why": "$\\Delta^2 y_0 = \\Delta(\\Delta y_0) = \\Delta(y_1 - y_0) = (y_2 - y_1) - (y_1 - y_0) = y_2 - 2y_1 + y_0$."
            },
            {
                "q": "In Sastry Example 3.4, for values $(1, 24), (3, 120), (5, 336), (7, 720)$, what is the interpolated value of $y(8)$?",
                "o": ["800.0", "990.0", "1024.0", "720.0"],
                "a": 1,
                "why": "The interpolating cubic polynomial is $y(x) = x^3 + 6x^2 + 11x + 6$. Evaluating at $x=8$: $y(8) = 512 + 384 + 88 + 6 = 990.0$."
            }
        ],
        "u8": [
            {
                "q": "What mathematical criterion does the method of least squares minimize?",
                "o": ["Sum of absolute errors $\\sum |e_i|$", "Sum of squared residuals $S = \\sum e_i^2$", "Maximum deviation $\\max |e_i|$", "Product of errors $\\prod e_i$"],
                "a": 1,
                "why": "The principle of least squares minimizes the sum of squared differences $S = \\sum [y_i - f(x_i)]^2$, which leads to linear normal equations with a unique global minimum."
            },
            {
                "q": "To fit an exponential law $y = a e^{bx}$ by linear least squares, what transformation is used?",
                "o": ["$Y = 1/y, X = x$", "$Y = \\ln y, X = x$", "$Y = y^2, X = x$", "$Y = \\ln y, X = \\ln x$"],
                "a": 1,
                "why": "Taking the natural logarithm yields $\\ln y = \\ln a + bx$. Defining $Y = \\ln y, X = x, A = \\ln a$, the equation becomes linear: $Y = bX + A$."
            },
            {
                "q": "In an RC circuit transient decay experiment $V(t) = V_0 e^{-t/RC}$, what physical quantity does the negative reciprocal of the slope of $\\ln V$ vs $t$ represent?",
                "o": ["Capacitance $C$ only", "Resistance $R$ only", "Time constant $\\tau = RC$", "Electric charge $Q$"],
                "a": 2,
                "why": "$\\ln V = \\ln V_0 - \\frac{1}{RC} t$. The slope $m = -1/RC = -1/\\tau$. Therefore, $\\tau = -1/m$ gives the circuit time constant."
            }
        ],
        "u9": [
            {
                "q": "What is the global truncation error order of the central difference derivative $f'(x) \\approx \\frac{f(x+h) - f(x-h)}{2h}$?",
                "o": ["$O(h)$", "$O(h^2)$", "$O(h^4)$", "$O(1)$"],
                "a": 1,
                "why": "In central differences, odd Taylor terms combine and even $h^2$ terms cancel out, leaving the leading error term as $-\\frac{h^2}{6} f'''(\\xi)$, which is second order $O(h^2)$."
            },
            {
                "q": "What is the global truncation error of Simpson's 1/3 rule for numerical integration?",
                "o": ["$-\\frac{b-a}{12} h^2 f''(\\xi)$", "$-\\frac{b-a}{180} h^4 f^{(4)}(\\xi)$", "$-\\frac{b-a}{2} h f'(\\xi)$", "$O(h^6)$"],
                "a": 1,
                "why": "Simpson's 1/3 rule has a fourth-order error $E_S = -\\frac{b-a}{180} h^4 f^{(4)}(\\xi) = O(h^4)$, meaning it integrates all cubic polynomials with zero truncation error."
            },
            {
                "q": "Why does Simpson's 1/3 rule require an even number of subintervals $n$?",
                "o": ["Because computer processors are binary", "Because it integrates across pairs of adjacent intervals (2 intervals per parabola)", "Because $h$ must be an integer", "To avoid negative square roots"],
                "a": 1,
                "why": "Simpson's 1/3 rule replaces the integrand with parabolic arcs across pairs of panels. Therefore, $n$ must be a multiple of 2 (an even number of intervals)."
            }
        ],
        "u10": [
            {
                "q": "What is the order of convergence $p$ of the Newton–Raphson method for a simple root?",
                "o": ["1 (linear)", "2 (quadratic)", "3 (cubic)", "0.5"],
                "a": 1,
                "why": "For a simple root ($f'(\\alpha) \\neq 0$), the error satisfies $e_{n+1} \\approx \\frac{f''(\\alpha)}{2f'(\\alpha)} e_n^2$. The order of convergence is 2 (quadratic), doubling the correct decimal places each step."
            },
            {
                "q": "Under what condition does the Newton–Raphson formula $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ fail due to division by zero?",
                "o": ["When $f(x_n) = 0$", "When $f'(x_n) = 0$", "When $x_n = 0$", "When $f''(x_n) = 0$"],
                "a": 1,
                "why": "If $f'(x_n) = 0$, the tangent line to the curve is horizontal. It never intersects the x-axis, causing a division by zero exception in computation."
            },
            {
                "q": "In Sastry Example 2.15 ($x^3 - 2x - 5 = 0$), starting from $x_0 = 2$, what is the first Newton–Raphson estimate $x_1$?",
                "o": ["2.0000", "2.1000", "2.0945", "2.5000"],
                "a": 1,
                "why": "$f(2) = 8 - 4 - 5 = -1, f'(x) = 3x^2 - 2 \\implies f'(2) = 12 - 2 = 10$. $x_1 = 2 - (-1)/10 = 2 + 0.1 = 2.1$."
            }
        ],
        "u11": [
            {
                "q": "What is the global accumulated truncation error order of Euler's method for solving $dy/dx = f(x, y)$?",
                "o": ["$O(h^2)$", "$O(h)$", "$O(h^3)$", "$O(\\sqrt{h})$"],
                "a": 1,
                "why": "Euler's method has a local error of $O(h^2)$ per step. Over $N = (b-a)/h$ steps, the global accumulated error scales as $N \\times O(h^2) = O(h)$ (first-order accurate)."
            },
            {
                "q": "In the second-order Runge–Kutta (Heun) method, what does $k_2$ represent?",
                "o": ["$h f(x_n, y_n)$", "$h f(x_n + h, y_n + k_1)$", "$h f(x_n + h/2, y_n)$", "$\\frac{1}{2}(k_1 + y_n)$"],
                "a": 1,
                "why": "$k_1 = h f(x_n, y_n)$ is the predicted slope at the start. $k_2 = h f(x_n + h, y_n + k_1)$ evaluates the slope at the predicted end of the step."
            },
            {
                "q": "In Sastry Example 8.5 ($dy/dx = -y, y(0) = 1$) with step $h = 0.1$, what is Euler's value at $x = 0.1$?",
                "o": ["1.0000", "0.9000", "0.9048", "0.8100"],
                "a": 1,
                "why": "$y_1 = y_0 + h(-y_0) = 1 + 0.1(-1) = 0.9000$. The exact analytical value is $e^{-0.1} \\approx 0.9048$."
            }
        ],
        "u12": [
            {
                "q": "What is the phase space trajectory of an undamped Simple Harmonic Oscillator (SHO)?",
                "o": ["A straight line through the origin", "A closed ellipse or circle", "An inward spiral", "An outward expanding spiral"],
                "a": 1,
                "why": "In an undamped SHO, total mechanical energy $E = \\frac{1}{2}m v^2 + \\frac{1}{2}k x^2$ is strictly conserved. In phase space ($v$ vs $x$), this constant energy equation describes a closed ellipse."
            },
            {
                "q": "What happens to the phase space trajectory of a damped harmonic oscillator as $t \\to \\infty$?",
                "o": ["It remains on a constant closed ellipse", "It spirals inward toward the origin $(0, 0)$ as energy dissipates", "It expands toward infinity", "It forms a chaotic strange attractor"],
                "a": 1,
                "why": "Damping dissipates mechanical energy continuously. Both displacement $x(t)$ and velocity $v(t)$ decay to zero, causing the trajectory to spiral inward to the equilibrium origin $(0, 0)$."
            },
            {
                "q": "What is the local truncation error order of Numerov's method for solving $y'' + k^2(x)y = S(x)$?",
                "o": ["$O(h^2)$", "$O(h^4)$", "$O(h^6)$", "$O(h)$"],
                "a": 2,
                "why": "Numerov's method eliminates both odd powers and fourth derivatives by using symmetric Taylor sums, achieving a local truncation error of order $O(h^6)$ and global error of $O(h^4)$."
            }
        ],
        "u13": [
            {
                "q": "How does the statistical error $\\sigma$ of Monte Carlo integration scale with the number of random samples $N$?",
                "o": ["$\\sigma \\propto \\frac{1}{N}$", "$\\sigma \\propto \\frac{1}{\\sqrt{N}}$", "$\\sigma \\propto \\frac{1}{N^2}$", "$\\sigma \\propto \\sqrt{N}$"],
                "a": 1,
                "why": "By the Central Limit Theorem, the standard error of the sample mean scales inversely with the square root of the number of trials: $\\sigma \\propto \\frac{1}{\\sqrt{N}}$, independent of dimension."
            },
            {
                "q": "In Monte Carlo estimation of $\\pi$ using a quarter-circle inside a unit square, if $N_{\\text{inside}} = 785$ out of $N = 1000$ points, what is the estimated value of $\\pi$?",
                "o": ["0.785", "3.140", "1.570", "3.925"],
                "a": 1,
                "why": "The quarter-circle area ratio is $\\pi/4 \\approx N_{\\text{inside}}/N$. Therefore, $\\pi \\approx 4 \\times \\frac{785}{1000} = 4 \\times 0.785 = 3.140$."
            },
            {
                "q": "In a 1D random walk where each step is randomly $\\pm 1$, how does the mean square displacement $\\langle x^2 \\rangle$ depend on the number of steps $t$?",
                "o": ["$\\langle x^2 \\rangle \\propto t^2$", "$\\langle x^2 \\rangle \\propto \\sqrt{t}$", "$\\langle x^2 \\rangle \\propto t$ (linear growth)", "$\\langle x^2 \\rangle = 0$"],
                "a": 2,
                "why": "In Brownian motion and random walks, the mean displacement $\\langle x \\rangle = 0$, while the mean squared displacement grows linearly with time: $\\langle x^2 \\rangle = 2Dt \\propto t$ (Einstein diffusion relation)."
            }
        ]
    }
