# 1. The Wave Function

---

## 1.1 The Schrödinger Equation

In classical mechanics, the dynamics of a particle of mass $m$ constrained to one dimension under a conservative force $F(x, t) = -\frac{\partial V}{\partial x}$ are governed by Newton's second law:

$$m \frac{d^2x}{dt^2} = -\frac{\partial V}{\partial x}$$

Given initial conditions for position $x(0)$ and velocity $\dot{x}(0)$, this differential equation deterministically yields the trajectory $x(t)$, from which all dynamical variables—such as momentum $p = mv$ and kinetic energy $T = \frac{1}{2}mv^2$—are derived.

In non-relativistic quantum mechanics ($v \ll c$), the physical state of a particle is described by a complex wave function $\Psi(x, t)$. The time evolution of $\Psi(x, t)$ is governed by the time-dependent Schrödinger equation:

$$i\hbar \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2m}\frac{\partial^2 \Psi}{\partial x^2} + V(x, t)\Psi \tag{1.1}$$

where:
- $i = \sqrt{-1}$ is the imaginary unit.
- $\hbar \equiv \frac{h}{2\pi} \approx 1.054573 \times 10^{-34} \text{ J}\cdot\text{s}$ is the reduced Planck constant.
- $V(x, t)$ is the potential energy function.

Analogous to Newton’s second law, given an initial state $\Psi(x, 0)$, the Schrödinger equation uniquely determines $\Psi(x, t)$ for all subsequent times $t > 0$.

---

## 1.2 The Statistical Interpretation

### Born's Probability Density
The wave function $\Psi(x, t)$ does not describe a localized classical trajectory. Instead, Max Born proposed the statistical interpretation: the quantity $|\Psi(x, t)|^2$ represents the probability density for finding the particle at position $x$ at time $t$. 

Because $\Psi$ is complex-valued, the probability density is computed via its complex conjugate $\Psi^*$:

$$|\Psi(x, t)|^2 = \Psi^*(x, t)\Psi(x, t)$$

The probability $P_{ab}(t)$ of locating the particle in the spatial interval $a \le x \le b$ at time $t$ is:

$$P_{ab}(t) = \int_a^b |\Psi(x, t)|^2 \, dx \tag{1.3}$$

This introduces fundamental indeterminacy: even with complete knowledge of the state $\Psi(x, t)$, measurement outcomes can only be predicted probabilistically.

### The Measurement Problem and Interpretations of Quantum Mechanics
When a measurement yields a definite position $x = C$, the relation between the measurement outcome and the prior physical state gives rise to three historical viewpoints:

1. **The Realist Position (Local Hidden Variables):**
   The particle had a definite position $C$ immediately prior to the measurement. Because $\Psi(x, t)$ provides only probabilities, quantum mechanics is regarded as incomplete, requiring additional unobserved parameters (hidden variables) for a complete physical description.
2. **The Orthodox Position (Copenhagen Interpretation):**
   The particle did not possess a determinate position prior to observation. The act of measurement compels the physical system to adopt a definite eigenvalue $C$.
3. **The Agnostic Position (Operationalism):**
   Physical assertions regarding quantities prior to measurement are unfalsifiable and thus physically meaningless; physics should concern itself strictly with operational measurement outcomes.

John Bell (1964) proved that local realist theories satisfy mathematical constraints (Bell inequalities) that are violated by quantum mechanics. Subsequent experiments confirmed the violation of Bell inequalities, ruling out local hidden-variable theories and validating the orthodox formulation (aside from non-local formulations such as de Broglie–Bohm pilot-wave theory or the Many-Worlds interpretation).

### Wave Function Collapse
An immediate repetition of a position measurement on the same particle must yield the same result $C$. To account for this consistency:
- The act of measurement abruptly and discontinuously alters the state, causing the wave function to collapse into a sharp spike centered at $x = C$.
- The dynamics consist of two distinct processes:
  1. Continuous, unitary, deterministic time evolution governed by the Schrödinger equation.
  2. Discontinuous, non-unitary state reduction (collapse) induced by measurement.

### Wave-Particle Duality
Spatial interference is an intrinsic feature of wave phenomena arising from phase differences in linear superpositions. In quantum systems, interference patterns emerge even when particles traverse the apparatus individually. Each detection registers as a discrete, localized event; the statistical ensemble of many such events reconstructs the continuous interference pattern dictated by $|\Psi(x, t)|^2$.

---

## 1.3 Probability Theory

### 1.3.1 Discrete Variables
For a discrete variable $j$ that takes discrete values with frequency count $N(j)$, the total number of events is:

$$N = \sum_{j} N(j) \tag{1.4}$$

The probability distribution $P(j)$ is defined by:

$$P(j) = \frac{N(j)}{N} \tag{1.5}$$

satisfying the normalization condition:

$$\sum_{j} P(j) = 1 \tag{1.6}$$

Statistical metrics of the distribution include:
- **Most Probable Value (Mode):** The value of $j$ for which $P(j)$ attains its maximum.
- **Median:** The value of $j$ dividing the cumulative distribution into equal upper and lower probabilities.
- **Expectation Value (Mean):**

$$\langle j \rangle = \sum_{j} j P(j) \tag{1.7}$$

- **Expectation Value of an Arbitrary Function $f(j)$:**

$$\langle f(j) \rangle = \sum_{j} f(j) P(j) \tag{1.9}$$

The deviation from the mean is $\Delta j \equiv j - \langle j \rangle$. Its average vanishes: $\langle \Delta j \rangle = 0$. The dispersion is quantified by the **variance** $\sigma^2$:

$$\sigma^2 \equiv \langle (\Delta j)^2 \rangle = \sum_{j} (j - \langle j \rangle)^2 P(j) \tag{1.11}$$

Expanding the squared term:

$$\sigma^2 = \langle j^2 - 2j\langle j \rangle + \langle j \rangle^2 \rangle = \langle j^2 \rangle - \langle j \rangle^2$$

The **standard deviation** $\sigma$ is:

$$\sigma = \sqrt{\langle j^2 \rangle - \langle j \rangle^2} \tag{1.12}$$

Because $\sigma^2 \ge 0$, it follows that:

$$\langle j^2 \rangle \ge \langle j \rangle^2 \tag{1.13}$$

where equality holds if and only if $\sigma = 0$ (a zero-variance, deterministic distribution).

---

### 1.3.2 Continuous Variables
For a continuous variable $x$, the probability of obtaining a value in the infinitesimal interval $[x, x + dx]$ is defined through the probability density $\rho(x)$:

$$dP = \rho(x) \, dx \tag{1.14}$$

The finite probability across an interval $[a, b]$ is:

$$P_{ab} = \int_a^b \rho(x) \, dx \tag{1.15}$$

The statistical definitions map directly to continuous integrals:

$$\int_{-\infty}^{+\infty} \rho(x) \, dx = 1 \tag{1.16}$$

$$\langle x \rangle = \int_{-\infty}^{+\infty} x \rho(x) \, dx \tag{1.17}$$

$$\langle f(x) \rangle = \int_{-\infty}^{+\infty} f(x) \rho(x) \, dx \tag{1.18}$$

$$\sigma^2 \equiv \langle (\Delta x)^2 \rangle = \langle x^2 \rangle - \langle x \rangle^2 \tag{1.19}$$

---

## 1.4 Normalization

Since the particle must exist somewhere in space, the total spatial probability must equal unity:

$$\int_{-\infty}^{+\infty} |\Psi(x, t)|^2 \, dx = 1 \tag{1.20}$$

Because the Schrödinger equation is linear and homogeneous, if $\Psi(x, t)$ is a solution, then $A\Psi(x, t)$ is also a solution for any constant $A \in \mathbb{C}$. A physically realizable state must be square-integrable ($\Psi \in L^2(\mathbb{R})$):

$$\int_{-\infty}^{+\infty} |\Psi(x, t)|^2 \, dx < \infty$$

Normalization determines the modulus $|A|$, leaving an unobservable global phase factor $e^{i\theta}$. Non-square-integrable wave functions cannot represent localized single-particle states.

### Preservation of Normalization
To show that the normalization condition is preserved over time ($\frac{d}{dt}\int_{-\infty}^\infty |\Psi|^2 dx = 0$):

$$\frac{d}{dt} \int_{-\infty}^{+\infty} |\Psi(x, t)|^2 \, dx = \int_{-\infty}^{+\infty} \frac{\partial}{\partial t} |\Psi(x, t)|^2 \, dx \tag{1.21}$$

Using the product rule:

$$\frac{\partial}{\partial t} |\Psi|^2 = \frac{\partial}{\partial t}(\Psi^* \Psi) = \Psi^* \frac{\partial \Psi}{\partial t} + \frac{\partial \Psi^*}{\partial t} \Psi \tag{1.22}$$

From the Schrödinger equation (assuming a real potential $V^* = V$):

$$\frac{\partial \Psi}{\partial t} = \frac{i\hbar}{2m}\frac{\partial^2 \Psi}{\partial x^2} - \frac{i}{\hbar}V\Psi \tag{1.23}$$

$$\frac{\partial \Psi^*}{\partial t} = -\frac{i\hbar}{2m}\frac{\partial^2 \Psi^*}{\partial x^2} + \frac{i}{\hbar}V\Psi^* \tag{1.24}$$

Substituting Equations (1.23) and (1.24) into Equation (1.22):

$$\frac{\partial}{\partial t} |\Psi|^2 = \frac{i\hbar}{2m} \left( \Psi^* \frac{\partial^2 \Psi}{\partial x^2} - \frac{\partial^2 \Psi^*}{\partial x^2}\Psi \right) = \frac{\partial}{\partial x} \left[ \frac{i\hbar}{2m} \left( \Psi^* \frac{\partial \Psi}{\partial x} - \frac{\partial \Psi^*}{\partial x} \Psi \right) \right] \tag{1.25}$$

Evaluating the integral in Equation (1.21):

$$\frac{d}{dt} \int_{-\infty}^{+\infty} |\Psi(x, t)|^2 \, dx = \left[ \frac{i\hbar}{2m} \left( \Psi^* \frac{\partial \Psi}{\partial x} - \frac{\partial \Psi^*}{\partial x}\Psi \right) \right]_{-\infty}^{+\infty} \tag{1.26}$$

For square-integrable states, $\Psi(x, t) \to 0$ and $\frac{\partial \Psi}{\partial x} \to 0$ as $x \to \pm\infty$. Hence:

$$\frac{d}{dt} \int_{-\infty}^{+\infty} |\Psi(x, t)|^2 \, dx = 0 \tag{1.27}$$

Normalization at $t = 0$ is conserved for all $t$.

---

## 1.5 Momentum and Operators

### Expectation Value of Position
The expectation value of position is:

$$\langle x \rangle = \int_{-\infty}^{+\infty} x |\Psi(x, t)|^2 \, dx \tag{1.28}$$

$\langle x \rangle$ represents the statistical average of measurements performed on an ensemble of identically prepared systems in state $\Psi$.

### Expectation Value of Velocity and Momentum
Differentiating $\langle x \rangle$ with respect to time:

$$\frac{d\langle x \rangle}{dt} = \int_{-\infty}^{+\infty} x \frac{\partial |\Psi|^2}{\partial t} \, dx = \frac{i\hbar}{2m} \int_{-\infty}^{+\infty} x \frac{\partial}{\partial x} \left( \Psi^* \frac{\partial \Psi}{\partial x} - \frac{\partial \Psi^*}{\partial x} \Psi \right) dx \tag{1.29}$$

Integrating by parts and applying vanishing boundary conditions at infinity:

$$\frac{d\langle x \rangle}{dt} = -\frac{i\hbar}{2m} \int_{-\infty}^{+\infty} \left( \Psi^* \frac{\partial \Psi}{\partial x} - \frac{\partial \Psi^*}{\partial x} \Psi \right) dx \tag{1.30}$$

A second integration by parts on the second term yields:

$$\int_{-\infty}^{+\infty} \frac{\partial \Psi^*}{\partial x} \Psi \, dx = -\int_{-\infty}^{+\infty} \Psi^* \frac{\partial \Psi}{\partial x} \, dx$$

Thus:

$$\frac{d\langle x \rangle}{dt} = -\frac{i\hbar}{m} \int_{-\infty}^{+\infty} \Psi^* \frac{\partial \Psi}{\partial x} \, dx \tag{1.31}$$

Defining the expectation value of velocity as $\langle v \rangle \equiv \frac{d\langle x \rangle}{dt}$, the expectation value of momentum $\langle p \rangle = m\langle v \rangle$ is:

$$\langle p \rangle = m \frac{d\langle x \rangle}{dt} = -i\hbar \int_{-\infty}^{+\infty} \Psi^* \frac{\partial \Psi}{\partial x} \, dx \tag{1.33}$$

### Quantum Mechanical Operators
Expectation values can be formulated by sandwiching linear differential operators between $\Psi^*$ and $\Psi$:

$$\langle x \rangle = \int_{-\infty}^{+\infty} \Psi^* [x] \Psi \, dx \tag{1.34}$$

$$\langle p \rangle = \int_{-\infty}^{+\infty} \Psi^* \left[ -i\hbar \frac{\partial}{\partial x} \right] \Psi \, dx \tag{1.35}$$

The position and momentum observables correspond to the operators:
- **Position Operator:** $\hat{x} = x$
- **Momentum Operator:** $\hat{p} = -i\hbar \frac{\partial}{\partial x}$

For any classical dynamical observable $Q(x, p)$, the corresponding quantum operator $\hat{Q} = Q\left(x, -i\hbar \frac{\partial}{\partial x}\right)$ defines the expectation value:

$$\langle Q(x, p) \rangle = \int_{-\infty}^{+\infty} \Psi^* Q\left(x, -i\hbar \frac{\partial}{\partial x}\right) \Psi \, dx \tag{1.36}$$

For kinetic energy $T = \frac{p^2}{2m}$:

$$\hat{T} = -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2}$$

$$\langle T \rangle = -\frac{\hbar^2}{2m} \int_{-\infty}^{+\infty} \Psi^* \frac{\partial^2 \Psi}{\partial x^2} \, dx \tag{1.37}$$

### Probability Current and Continuity
Equation (1.25) can be rewritten as a continuity equation:

$$\frac{\partial \rho}{\partial t} + \frac{\partial J}{\partial x} = 0$$

where $\rho(x, t) = |\Psi(x, t)|^2$ is the probability density, and $J(x, t)$ is the **probability current**:

$$J(x, t) \equiv \frac{i\hbar}{2m} \left( \Psi \frac{\partial \Psi^*}{\partial x} - \Psi^* \frac{\partial \Psi}{\partial x} \right) = \frac{\hbar}{m}\text{Im}\left( \Psi^* \frac{\partial \Psi}{\partial x} \right)$$

Integrating across a spatial interval $[a, b]$ yields:

$$\frac{d P_{ab}}{dt} = J(a, t) - J(b, t)$$

---

## 1.6 The Uncertainty Principle

In wave mechanics, a wavepacket cannot simultaneously possess a localized spatial position and a monochromatic wavelength. By Fourier analysis:
- A spatially localized pulse contains a broad distribution of spatial frequencies (wavenumbers $k$).
- A pure harmonic wave with a single wavelength $\lambda = \frac{2\pi}{k}$ is infinitely extended in space.

According to the de Broglie relation:

$$p = \frac{h}{\lambda} = \hbar k \tag{1.39}$$

A spread in spatial wavelength $\Delta \lambda$ corresponds directly to a spread in physical momentum $\Delta p$. Consequently, a particle state cannot possess simultaneously well-defined position and momentum.

Quantitatively, this trade-off is formalized by the **Heisenberg Uncertainty Principle**:

$$\sigma_x \sigma_p \ge \frac{\hbar}{2} \tag{1.40}$$

where $\sigma_x$ and $\sigma_p$ denote the standard deviations of position and momentum:

$$\sigma_x = \sqrt{\langle x^2 \rangle - \langle x \rangle^2}, \quad \sigma_p = \sqrt{\langle p^2 \rangle - \langle p \rangle^2}$$

Equation (1.40) represents a fundamental lower bound on the product of uncertainties inherent to any valid quantum state $\Psi(x, t)$.