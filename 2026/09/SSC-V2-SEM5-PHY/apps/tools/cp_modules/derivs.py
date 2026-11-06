"""
Animated Derivations dictionary for Computational Physics
"""
import json

DERIVS = {
    "newton_fwd": {
        "title": "Newton’s Forward Interpolation: \\(y(x) = E^p y_0 = (1+\\Delta)^p y_0\\)",
        "marks": "5 marks",
        "steps": [
            {
                "tex": "y(x) = f(x_0 + ph)",
                "phase": "Parameter definition",
                "move": {"type": "define", "label": "Express x with step parameter p: x = x_0 + ph"}
            },
            {
                "tex": "y(x) = E^p f(x_0) = E^p y_0",
                "move": {"type": "define", "label": "Apply the shift operator E: E y_n = y_{n+1}"}
            },
            {
                "tex": "E = 1 + \\Delta",
                "phase": "Operator relation",
                "move": {"type": "identity", "label": "Forward difference relation: \\Delta y_0 = y_1 - y_0 = (E - 1)y_0"}
            },
            {
                "tex": "y(x) = (1 + \\Delta)^p y_0",
                "move": {"type": "substitute", "by": "E = 1 + \\Delta"}
            },
            {
                "tex": "y(x) = \\left[ 1 + p\\Delta + \\frac{p(p-1)}{2!}\\Delta^2 + \\frac{p(p-1)(p-2)}{3!}\\Delta^3 + \\dots \\right] y_0",
                "phase": "Binomial expansion",
                "move": {"type": "identity", "label": "Expand (1 + \\Delta)^p using the binomial theorem for real p"}
            },
            {
                "tex": "y(x) = y_0 + p\\Delta y_0 + \\frac{p(p-1)}{2!}\\Delta^2 y_0 + \\frac{p(p-1)(p-2)}{3!}\\Delta^3 y_0 + \\dots",
                "phase": "Final standard formula",
                "move": {"type": "multiply", "label": "Distribute y_0 to every term"}
            }
        ]
    },
    "least_sq": {
        "title": "Method of Least Squares: Normal Equations for \\(y = ax + b\\)",
        "marks": "5 marks",
        "steps": [
            {
                "tex": "y = ax + b",
                "phase": "Model definition",
                "move": {"type": "define", "label": "Linear law with slope a and intercept b"}
            },
            {
                "tex": "e_i = y_i - (ax_i + b)",
                "move": {"type": "define", "label": "Residual error at each data point (x_i, y_i)"}
            },
            {
                "tex": "S = \\sum_{i=1}^n e_i^2 = \\sum_{i=1}^n [y_i - (ax_i + b)]^2",
                "phase": "Sum of squared errors",
                "move": {"type": "define", "label": "Objective function S to minimize"}
            },
            {
                "tex": "\\frac{\\partial S}{\\partial a} = -2 \\sum_{i=1}^n x_i [y_i - ax_i - b] = 0",
                "phase": "Minimization with respect to a",
                "move": {"type": "identity", "label": "Set derivative with respect to a equal to zero"}
            },
            {
                "tex": "\\sum_{i=1}^n x_i y_i = a \\sum_{i=1}^n x_i^2 + b \\sum_{i=1}^n x_i",
                "move": {"type": "rearrange", "label": "Expand sum and collect terms: First Normal Equation"}
            },
            {
                "tex": "\\frac{\\partial S}{\\partial b} = -2 \\sum_{i=1}^n [y_i - ax_i - b] = 0",
                "phase": "Minimization with respect to b",
                "move": {"type": "identity", "label": "Set derivative with respect to b equal to zero"}
            },
            {
                "tex": "\\sum_{i=1}^n y_i = a \\sum_{i=1}^n x_i + n b",
                "phase": "System of normal equations",
                "move": {"type": "rearrange", "label": "Expand sum: Second Normal Equation"}
            }
        ]
    },
    "newton_raphson": {
        "title": "Newton–Raphson Method & Quadratic Convergence: \\(\\epsilon_{n+1} \\propto \\epsilon_n^2\\)",
        "marks": "5 marks",
        "steps": [
            {
                "tex": "f(x_n + h) = f(x_n) + h f'(x_n) + \\frac{h^2}{2} f''(\\xi)",
                "phase": "Taylor series expansion",
                "move": {"type": "identity", "label": "Taylor expansion about the current estimate x_n"}
            },
            {
                "tex": "0 = f(x_n) + h f'(x_n)",
                "phase": "First order root approximation",
                "move": {"type": "define", "label": "Set f(x_n + h) = 0 and drop the second-order term"}
            },
            {
                "tex": "h = -\\frac{f(x_n)}{f'(x_n)}",
                "move": {"type": "rearrange", "label": "Solve for the correction step h"}
            },
            {
                "tex": "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}",
                "phase": "Iteration formula",
                "move": {"type": "substitute", "label": "Set new estimate x_{n+1} = x_n + h"}
            },
            {
                "tex": "e_{n+1} = x_{n+1} - \\alpha",
                "phase": "Error analysis",
                "move": {"type": "define", "label": "Define error e_n relative to exact root \\alpha"}
            },
            {
                "tex": "e_{n+1} \\approx \\frac{f''(\\alpha)}{2 f'(\\alpha)} e_n^2",
                "phase": "Quadratic convergence",
                "move": {"type": "identity", "label": "Second-order error relation showing quadratic convergence: p = 2"}
            }
        ]
    },
    "numerov": {
        "title": "Numerov’s Method for Second-Order ODEs: \\(y'' = f(x, y)\\)",
        "marks": "5 marks",
        "steps": [
            {
                "tex": "y''(x) + k^2(x)y(x) = S(x)",
                "phase": "Second-order ODE form",
                "move": {"type": "define", "label": "Differential equation with no first-derivative term"}
            },
            {
                "tex": "y(x+h) = y + h y' + \\frac{h^2}{2} y'' + \\frac{h^3}{6} y''' + \\frac{h^4}{24} y^{(4)} + O(h^5)",
                "phase": "Taylor expansion forward",
                "move": {"type": "identity", "label": "Expand y(x+h) in powers of step size h"}
            },
            {
                "tex": "y(x-h) = y - h y' + \\frac{h^2}{2} y'' - \\frac{h^3}{6} y''' + \\frac{h^4}{24} y^{(4)} + O(h^5)",
                "phase": "Taylor expansion backward",
                "move": {"type": "identity", "label": "Expand y(x-h) in powers of step size h"}
            },
            {
                "tex": "y_{n+1} - 2y_n + y_{n-1} = h^2 y''_n + \\frac{h^4}{12} y^{(4)}_n + O(h^6)",
                "phase": "Symmetric sum",
                "move": {"type": "substitute", "label": "Add both expansions: odd powers cancel out"}
            },
            {
                "tex": "y^{(4)}_n = \\frac{y''_{n+1} - 2y''_n + y''_{n-1}}{h^2} + O(h^2)",
                "phase": "Fourth derivative approximation",
                "move": {"type": "define", "label": "Replace fourth derivative with second difference of y''"}
            },
            {
                "tex": "y_{n+1} - 2y_n + y_{n-1} = \\frac{h^2}{12}\\left[ y''_{n+1} + 10y''_n + y''_{n-1} \\right] + O(h^6)",
                "phase": "Numerov standard recurrence",
                "move": {"type": "substitute", "label": "Group y'' terms to obtain local truncation error of order O(h^6)"}
            }
        ]
    },
    "trapezoidal": {
        "title": "Trapezoidal Quadrature & Global Error \\(\\mathcal{O}(h^2)\\)",
        "marks": "5 marks",
        "steps": [
            {
                "tex": "I = \\int_{x_0}^{x_1} f(x)\\,dx",
                "phase": "Single panel integral",
                "move": {"type": "define", "label": "Integral over one subinterval [x_0, x_1] of width h"}
            },
            {
                "tex": "P_1(x) = y_0 + \\frac{y_1 - y_0}{h}(x - x_0)",
                "phase": "Linear approximation",
                "move": {"type": "identity", "label": "Replace curve f(x) with straight line connecting (x_0, y_0) and (x_1, y_1)"}
            },
            {
                "tex": "I_1 = \\int_{x_0}^{x_0+h} \\left[ y_0 + \\frac{y_1 - y_0}{h}(x - x_0) \\right] dx = \\frac{h}{2}(y_0 + y_1)",
                "phase": "Panel area integration",
                "move": {"type": "multiply", "label": "Integrate linear polynomial: Area of trapezoid"}
            },
            {
                "tex": "I = \\sum_{i=0}^{n-1} \\frac{h}{2}(y_i + y_{i+1})",
                "phase": "Composite summation",
                "move": {"type": "substitute", "label": "Sum over all n panels from a = x_0 to b = x_n"}
            },
            {
                "tex": "I \\approx \\frac{h}{2} \\left[ y_0 + 2(y_1 + y_2 + \\dots + y_{n-1}) + y_n \\right]",
                "phase": "Composite Trapezoidal Rule",
                "move": {"type": "rearrange", "label": "Group internal terms (counted twice) and endpoint terms (counted once)"}
            },
            {
                "tex": "E_T = -\\frac{b-a}{12} h^2 f''(\\xi) = O(h^2)",
                "phase": "Global truncation error",
                "move": {"type": "identity", "label": "Error bound showing second-order accuracy: O(h^2)"}
            }
        ]
    }
}
