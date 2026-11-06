"""
Module IV: Computational Techniques for Theoretical Physics (Units 11, 12, 13)
ASD-STE100 Compliant Technical Text
Strictly adhering to S.S. Sastry Chapter 8, Stickler & Schachinger Chapters 5, 8, 10, 14
and Dr. B P Ajithkumar Chapters 7 & 8
Includes all Textbook Examples & Full Derivations
"""

def get_mod4_stations():
    return [
        {
            "id": "u11",
            "title": "Unit 11 · Solving First Order ODEs (Euler & Second-Order Runge-Kutta)",
            "short": "First Order ODEs (Euler & RK2)",
            "est": "~45 min",
            "body": r"""
gist("Initial Value Problems solve differential equations dy/dx = f(x, y) starting from a known initial state y(x0) = y0.")

tp("Importance of Simulation in Physics")
<p>Analytical solutions in classical and quantum mechanics are limited to highly idealized physical systems (e.g. frictionless harmonic oscillator, hydrogen atom). Real physical systems involve nonlinear air drag, non-uniform gravitational fields, multi-body gravitational interactions, and temperature-dependent thermal conductivities (Stickler & Schachinger, Chapter 5).</p>
<p>Numerical simulation integrates the governing differential equations forward in time using discrete time steps $\Delta t$, enabling realistic modeling of complex physical dynamics.</p>

tp("Euler's Method for First Order ODEs")
<p>Consider the initial value problem: $\frac{dy}{dx} = f(x, y)$ with $y(x_0) = y_0$.</p>
<p>From the Taylor series expansion: $y(x_n + h) = y(x_n) + h y'(x_n) + \frac{h^2}{2} y''(\xi)$. Dropping second-order terms yields <b>Euler's Formula</b> (Sastry, Section 8.4):</p>
<p>$$y_{n+1} = y_n + h f(x_n, y_n)$$</p>
<ul>
  <li><b>Local Truncation Error:</b> $E_{\text{local}} = \frac{h^2}{2} y''(\xi) = \mathcal{O}(h^2)$ per step.</li>
  <li><b>Global Truncation Error:</b> Accumulating errors over $N = \frac{b-a}{h}$ steps gives: $E_{\text{global}} = N \times \mathcal{O}(h^2) = \mathcal{O}(h)$. Euler's method is first-order accurate.</li>
</ul>

tp("Sastry Textbook Examples: Euler's Method")

<p><b>Example 8.5 (Sastry, Page 307):</b></p>
<p><i>Solve $\frac{dy}{dx} = -y$ with initial condition $y(0) = 1$ using Euler's method. Compare results for step sizes $h = 0.01$ and $h = 0.05$ with the analytical solution $y(x) = e^{-x}$.</i></p>

ex(r'''# Sastry Example 8.5: Euler method on dy/dx = -y, y(0) = 1
import numpy as np

def f_decay(x, y):
    return -y

def euler_solve(f, x0, y0, x_end, h):
    steps = int(np.round((x_end - x0) / h))
    x_pts = [x0]
    y_pts = [y0]
    for _ in range(steps):
        x_curr = x_pts[-1]
        y_curr = y_pts[-1]
        y_next = y_curr + h * f(x_curr, y_curr)
        x_pts.append(x_curr + h)
        y_pts.append(y_next)
    return np.array(x_pts), np.array(y_pts)

# Solve at x = 0.1 with h = 0.01 and h = 0.05
_, y_001 = euler_solve(f_decay, 0.0, 1.0, 0.1, 0.01)
_, y_005 = euler_solve(f_decay, 0.0, 1.0, 0.1, 0.05)
exact_01 = np.exp(-0.1)

print(f"Example 8.5 at x = 0.1:")
print(f"Euler (h = 0.05): y(0.1) = {y_005[-1]:.6f} (Error = {abs(y_005[-1] - exact_01):.2e})")
print(f"Euler (h = 0.01): y(0.1) = {y_001[-1]:.6f} (Error = {abs(y_001[-1] - exact_01):.2e})")
print(f"Exact math exp(-0.1)    = {exact_01:.6f}")
''', {title: "Sastry Example 8.5 · Euler Method on Exponential Decay"})

<p><b>Example 8.7 (Sastry, Page 309):</b></p>
<p><i>Solve $\frac{dy}{dx} = x + y$, $y(0) = 1$ with $h = 0.02$ for $x \in [0, 0.1]$.</i></p>

ex(r'''# Sastry Example 8.7: Linear ODE dy/dx = x + y
def f_linear(x, y):
    return x + y

x_vals, y_vals = euler_solve(f_linear, 0.0, 1.0, 0.1, 0.02)
# Exact solution: y(x) = 2*exp(x) - x - 1
exact_at_01 = 2.0 * np.exp(0.1) - 0.1 - 1.0

print(f"Example 8.7: Euler y(0.1) = {y_vals[-1]:.6f}")
print(f"Exact analytical y(0.1)   = {exact_at_01:.6f}")
print(f"Absolute truncation error = {abs(y_vals[-1] - exact_at_01):.2e}")
''', {title: "Sastry Example 8.7 · Euler Linear ODE"})

tp("Second-Order Runge-Kutta Method (Heun / Modified Euler)")
<p>The second-order Runge-Kutta method (RK2) evaluates the slope at the predicted midpoint, eliminating the leading error term (Sastry, Section 8.5):</p>
<p>$$\begin{aligned} k_1 &= h f(x_n, y_n) \\ k_2 &= h f\left(x_n + h, y_n + k_1\right) \\ y_{n+1} &= y_n + \frac{1}{2}(k_1 + k_2) \end{aligned}$$</p>
<p>The local truncation error is $\mathcal{O}(h^3)$, and the global truncation error is $\mathcal{O}(h^2)$ (second-order accuracy).</p>

<p><b>Example 8.8 (Sastry, Page 312):</b></p>
<p><i>Apply the second-order Runge-Kutta method to solve $\frac{dy}{dx} = x + y$ with $y(0) = 1$ using $h = 0.1$.</i></p>

ex(r'''# Sastry Example 8.8: RK2 Method
def rk2_step(f, x, y, h):
    k1 = h * f(x, y)
    k2 = h * f(x + h, y + k1)
    return y + 0.5 * (k1 + k2)

h = 0.1
x0, y0 = 0.0, 1.0
y1_rk2 = rk2_step(f_linear, x0, y0, h)
exact_01 = 2.0 * np.exp(0.1) - 0.1 - 1.0

print(f"Sastry Example 8.8: RK2 y(0.1) = {y1_rk2:.6f}")
print(f"Exact solution y(0.1)          = {exact_01:.6f}")
print(f"RK2 error: {abs(y1_rk2 - exact_01):.2e} (vs Euler error: {abs(y_vals[-1] - exact_01):.2e})")
''', {title: "Sastry Example 8.8 · RK2 Method"})

tp("Physics Practical: Newton's Law of Cooling Simulation")
<p>A cooling body loses thermal energy at a rate proportional to the temperature difference with its surroundings: $\frac{dT}{dt} = -k(T - T_{\text{env}})$.</p>

ex(r'''# Physics Practical: Newton's Law of Cooling
import numpy as np

def newton_cooling(t, T, k=0.05, T_env=25.0):
    return -k * (T - T_env)

# Integrate over 60 minutes
dt = 1.0 # min
time = np.arange(0, 61, dt)
T_sim = np.zeros(len(time))
T_sim[0] = 85.0 # Hot liquid initially at 85 deg C

for i in range(len(time) - 1):
    # Use RK2 integration
    k1 = dt * newton_cooling(time[i], T_sim[i])
    k2 = dt * newton_cooling(time[i] + dt, T_sim[i] + k1)
    T_sim[i + 1] = T_sim[i] + 0.5 * (k1 + k2)

print("Cooling Simulation Results:")
for step in [0, 15, 30, 45, 60]:
    exact_T = 25.0 + (85.0 - 25.0) * np.exp(-0.05 * step)
    print(f"t = {step:2d} min: T_sim = {T_sim[step]:.2f} C (Exact = {exact_T:.2f} C)")
''', {title: "Physics Simulation · Newton's Law of Cooling"})

must("Textbook Comparison: The second-order Runge-Kutta method (RK2) evaluates the derivative at the beginning and the end of the step to cancel out the first-order error. For the same step size h, RK2 delivers an error scaling as O(h^2) compared to O(h) for Euler's method.")
"""
        },
        {
            "id": "u12",
            "title": "Unit 12 · Solving Second Order ODEs (Coupled Systems, Numerov & Phase Space)",
            "short": "Second Order ODEs & Numerov",
            "est": "~45 min",
            "body": r"""
gist("Second order differential equations model physical oscillators, wave equations, and planetary orbits. They are solved by coupled first order reduction or Numerov's method.")

tp("Coupled First-Order ODE Reduction")
<p>Newton's second law for a particle of mass $m$ is $m \frac{d^2 x}{dt^2} = F(x, v, t)$. We decompose this single second-order equation into two coupled first-order equations (Stickler & Schachinger, Chapter 5):</p>
<p>$$\begin{aligned} \frac{dx}{dt} &= v \\ \frac{dv}{dt} &= \frac{F(x, v, t)}{m} \end{aligned}$$</p>

tp("Simple and Damped Harmonic Oscillators: Phase Space Analysis")
<p>The equation of motion for a damped linear oscillator is $\frac{d^2x}{dt^2} + 2\gamma \frac{dx}{dt} + \omega_0^2 x = 0$.</p>
<p>In <b>Phase Space</b>, the system's dynamic state is plotted as a trajectory in the $(x, v)$ plane:</p>
<ul>
  <li><b>Simple Harmonic Oscillator ($\gamma = 0$):</b> Conservative system. The total mechanical energy $E = \frac{1}{2}m v^2 + \frac{1}{2}k x^2 = \text{const}$ is conserved. Trajectories form closed concentric ellipses.</li>
  <li><b>Damped Oscillator ($\gamma > 0$):</b> Dissipative system. Energy continuously decreases over time, causing the phase space trajectory to spiral inward toward the origin attractor $(0, 0)$.</li>
</ul>

ex(r'''# Physics Practical: Simple & Damped Harmonic Oscillator Phase Space
import numpy as np

def simulate_oscillator(omega0=2.0, gamma=0.25, x0=1.0, v0=0.0, dt=0.02, t_max=15.0):
    n_steps = int(t_max / dt)
    t = np.linspace(0, t_max, n_steps)
    x = np.zeros(n_steps)
    v = np.zeros(n_steps)
    x[0], v[0] = x0, v0
    
    # RK2 integration of coupled system: dx/dt = v, dv/dt = -2*gamma*v - omega0^2*x
    for i in range(n_steps - 1):
        # Slope 1
        k1_x = dt * v[i]
        k1_v = dt * (-2 * gamma * v[i] - omega0**2 * x[i])
        # Slope 2
        k2_x = dt * (v[i] + k1_v)
        k2_v = dt * (-2 * gamma * (v[i] + k1_v) - omega0**2 * (x[i] + k1_x))
        
        x[i + 1] = x[i] + 0.5 * (k1_x + k2_x)
        v[i + 1] = v[i] + 0.5 * (k1_v + k2_v)
        
    return t, x, v

# Run simulations
t, x_sho, v_sho = simulate_oscillator(gamma=0.0) # Undamped
t, x_dmp, v_dmp = simulate_oscillator(gamma=0.3) # Damped

print("Harmonic Oscillator Simulation Summary:")
print(f"SHO Energy at t=0:  {0.5*v_sho[0]**2 + 2.0*x_sho[0]**2:.4f}")
print(f"SHO Energy at t=15: {0.5*v_sho[-1]**2 + 2.0*x_sho[-1]**2:.4f} (Conserved)")
print(f"Damped amplitude at t=0:  x = {x_dmp[0]:.4f}")
print(f"Damped amplitude at t=15: x = {x_dmp[-1]:.4f} (Decayed toward attractor)")
''', {title: "Physics Simulation · SHO and Damped Phase Space"})

tp("Numerov's Method for Second-Order Differential Equations")
<p>When the second-order ODE contains no first-derivative term (e.g. $y''(x) + k^2(x) y(x) = S(x)$, ubiquitous in the 1D Schrödinger equation and undamped oscillations), <b>Numerov's algorithm</b> achieves sixth-order local accuracy $\mathcal{O}(h^6)$ with only one function evaluation per step (Stickler & Schachinger, Chapters 8.3 & 10.3):</p>

der("numerov")

<p>The standard Numerov recurrence formula is:</p>
<p>$$y_{n+1} - 2y_n + y_{n-1} = \frac{h^2}{12}\left[ y''_{n+1} + 10y''_n + y''_{n-1} \right] + \mathcal{O}(h^6)$$</p>

must("Textbook Advantage of Numerov's Method: Standard RK4 requires 4 force evaluations per step to achieve global O(h^4) accuracy. Numerov's method achieves global O(h^4) and local O(h^6) accuracy with only a single evaluation per step, making it the most efficient solver for the Schrödinger and wave equations.")
"""
        },
        {
            "id": "u13",
            "title": "Unit 13 · Monte Carlo Methods in Physics (Pi Estimation, Decay & Diffusion)",
            "short": "Monte Carlo Methods in Physics",
            "est": "~40 min",
            "body": r"""
gist("Monte Carlo methods solve physical problems through repeated random sampling. They model stochastic physical phenomena and evaluate high-dimensional integrals.")

tp("Principles of Stochastic Simulation")
<p>Many physical processes are fundamentally probabilistic: quantum measurement outcomes, spontaneous radioactive decay of unstable nuclei, molecular diffusion via Brownian collisions, and thermal fluctuations in spin lattices (Stickler & Schachinger, Chapter 14).</p>
<p>A pseudo-random number generator (PRNG) produces a deterministic sequence of numbers that statistically mimics independent, uniformly distributed random variables $\xi \in [0, 1)$.</p>

tp("Syllabus Practical 1: Estimation of Pi using Monte Carlo Simulation")
<p>Consider a quadrant of a unit circle inscribed inside a unit square of side length $L = 1$:</p>
<ul>
  <li>Area of unit square: $A_{\text{square}} = 1 \times 1 = 1$.</li>
  <li>Area of quarter circle: $A_{\text{quarter}} = \frac{1}{4} \pi R^2 = \frac{\pi}{4}$.</li>
  <li>Ratio of areas: $\frac{A_{\text{quarter}}}{A_{\text{square}}} = \frac{\pi}{4}$.</li>
</ul>
<p>Throwing $N$ uniformly distributed random darts $(x_i, y_i) \in [0, 1) \times [0, 1)$, a dart lands inside the circle if $x_i^2 + y_i^2 \le 1$. If $N_{\text{in}}$ darts hit the circle:</p>
<p>$$\frac{N_{\text{in}}}{N} \approx \frac{\pi}{4} \implies \pi \approx 4 \frac{N_{\text{in}}}{N}$$</p>
<p>By the Central Limit Theorem, the statistical error decreases as $\sigma \propto \frac{1}{\sqrt{N}}$, independent of dimensionality.</p>

ex(r'''# Syllabus Practical: Estimate pi using Monte Carlo sampling
import numpy as np

def estimate_pi(n_samples=50000, seed=42):
    rng = np.random.default_rng(seed)
    x = rng.uniform(0.0, 1.0, n_samples)
    y = rng.uniform(0.0, 1.0, n_samples)
    
    # Condition: inside unit quarter circle
    inside = (x**2 + y**2) <= 1.0
    n_inside = np.sum(inside)
    
    pi_estimate = 4.0 * n_inside / n_samples
    error = abs(pi_estimate - np.pi)
    return pi_estimate, error

for n in [1000, 10000, 100000, 500000]:
    est, err = estimate_pi(n)
    print(f"N = {n:7d}: pi ≈ {est:.6f} (Error = {err:.2e}, 1/sqrt(N) ≈ {1/np.sqrt(n):.2e})")
''', {title: "Syllabus Practical · Monte Carlo Estimation of Pi"})

tp("Syllabus Practical 2: Monte Carlo Simulation of Radioactive Decay")
<p>The radioactive decay law $\frac{dN}{dt} = -\lambda N$ describes the macroscopic expectation value. Microscopically, each nucleus decays independently with probability $P_{\text{decay}} = \lambda \Delta t$ per time interval $\Delta t$ (Ajithkumar, Chapter 8.3):</p>

ex(r'''# Syllabus Practical: Monte Carlo Simulation of Radioactive Decay
import numpy as np

def simulate_decay(N0=2000, half_life=10.0, dt=1.0, t_max=40.0, seed=123):
    rng = np.random.default_rng(seed)
    lam = np.log(2.0) / half_life # Decay constant lambda
    p_decay = lam * dt            # Probability per nucleus in dt
    
    steps = int(t_max / dt)
    time = np.linspace(0, t_max, steps + 1)
    N_surviving = np.zeros(steps + 1)
    N_surviving[0] = N0
    
    current_N = N0
    for i in range(steps):
        # Generate random probability for each currently surviving nucleus
        rand_nums = rng.uniform(0.0, 1.0, current_N)
        decays = np.sum(rand_nums < p_decay)
        current_N -= decays
        N_surviving[i + 1] = current_N
        
    return time, N_surviving, half_life

time, N_counts, t_half = simulate_decay()
print("=== Monte Carlo Radioactive Decay Simulation ===")
for idx in [0, 10, 20, 30, 40]:
    exact_N = 2000.0 * (0.5**(idx / t_half))
    print(f"t = {idx:2d} s (half-lives: {idx/t_half:.1f}): Surviving = {int(N_counts[idx]):4d} (Exact = {exact_N:6.1f})")
''', {title: "Syllabus Practical · Monte Carlo Radioactive Decay"})

tp("One-Dimensional Random Walk and Molecular Diffusion")
<p>A particle starts at $x = 0$. At each step $\Delta t$, it hops left ($\Delta x = -1$) or right ($\Delta x = +1$) with equal probability $p = 1/2$.</p>
<p>The mean displacement is $\langle x(t) \rangle = 0$. The mean square displacement grows linearly with time: $\langle x^2(t) \rangle = 2 D t \propto N$, which is Einstein's diffusion relation (Kinder & Nelson, Chapter 5.2).</p>

ex(r'''# 1D Random Walk and Diffusion Simulation
import numpy as np

def random_walk_1d(n_walkers=1000, n_steps=200, seed=42):
    rng = np.random.default_rng(seed)
    # Generate random steps: +1 or -1 with equal probability
    steps = rng.choice([-1, 1], size=(n_walkers, n_steps))
    trajectories = np.cumsum(steps, axis=1) # Shape: (walkers, steps)
    
    final_pos = trajectories[:, -1]
    mean_disp = np.mean(final_pos)
    msd = np.mean(final_pos**2) # Mean Square Displacement
    
    return mean_disp, msd, n_steps

mean_x, msd_val, total_steps = random_walk_1d()
print(f"1D Random Walk Simulation (1000 walkers, {total_steps} steps):")
print(f"Mean displacement <x>        = {mean_x:.2f} (Theoretical: 0.0)")
print(f"Mean square displacement <x^2> = {msd_val:.2f} (Theoretical N = {total_steps})")
''', {title: "Physics Simulation · 1D Random Walk and Diffusion"})
"""
        }
    ]
