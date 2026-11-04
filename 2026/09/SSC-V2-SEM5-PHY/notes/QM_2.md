# 1. TIME-INDEPENDENT SCHRÖDINGER EQUATION

## 1.1 Stationary States and Separation of Variables

The time-dependent Schrödinger equation in one dimension is:
$$i\hbar \frac{\partial \Psi(x,t)}{\partial t} = -\frac{\hbar^2}{2m} \frac{\partial^2 \Psi(x,t)}{\partial x^2} + V(x,t)\Psi(x,t)$$

When the potential energy function $V$ is independent of time ($V(x,t) = V(x)$), the equation is solved via separation of variables:
$$\Psi(x, t) = \psi(x) \phi(t)$$

Substituting into the partial differential equation yields:
$$i\hbar \psi(x) \frac{d\phi(t)}{dt} = -\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} \phi(t) + V(x)\psi(x)\phi(t)$$

Dividing both sides by $\psi(x)\phi(t)$:
$$i\hbar \frac{1}{\phi(t)} \frac{d\phi(t)}{dt} = -\frac{\hbar^2}{2m} \frac{1}{\psi(x)} \frac{d^2\psi(x)}{dx^2} + V(x)$$

Because the left-hand side depends solely on $t$ and the right-hand side depends solely on $x$, both sides must equal a separation constant $E$:
1. **Temporal equation:**
   $$i\hbar \frac{1}{\phi(t)} \frac{d\phi(t)}{dt} = E \implies \frac{d\phi(t)}{dt} = -\frac{iE}{\hbar}\phi(t)$$
   Integrating gives:
   $$\phi(t) = e^{-iEt/\hbar}$$
   *(Any overall integration constant is absorbed into $\psi(x)$).*

2. **Spatial equation (Time-Independent Schrödinger Equation):**
   $$-\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) = E\psi(x)$$

---

## 1.2 Properties of Separable Solutions

### 1. Stationary States
For a state $\Psi(x,t) = \psi(x)e^{-iEt/\hbar}$, the probability density is time-independent:
$$|\Psi(x,t)|^2 = \Psi^*(x,t)\Psi(x,t) = \psi^*(x)e^{iEt/\hbar}\psi(x)e^{-iEt/\hbar} = |\psi(x)|^2$$

Expectation values of any time-independent observable operator $\hat{Q}\left(x, -i\hbar \frac{d}{dx}\right)$ are also constant in time:
$$\langle Q(x, p) \rangle = \int \psi^*(x) \hat{Q} \psi(x)\, dx$$
Consequently, $\langle x \rangle$ is constant, and $\langle p \rangle = m \frac{d\langle x \rangle}{dt} = 0$.

### 2. Definite Total Energy
Using the Hamiltonian operator $\hat{H} = -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x)$, the time-independent Schrödinger equation is an eigenvalue equation:
$$\hat{H}\psi = E\psi$$

The expectation values of energy and its square are:
$$\langle H \rangle = \int \psi^* \hat{H} \psi \, dx = E \int |\psi|^2 \, dx = E$$
$$\langle H^2 \rangle = \int \psi^* \hat{H}^2 \psi \, dx = E^2 \int |\psi|^2 \, dx = E^2$$

The variance of total energy vanishes:
$$\sigma_H^2 = \langle H^2 \rangle - \langle H \rangle^2 = E^2 - E^2 = 0$$
Every measurement of total energy on a stationary state yields the eigenvalue $E$ with certainty.

### 3. General Solution by Linear Superposition
Because the time-dependent Schrödinger equation is linear, any linear combination of solutions is also a solution. For a discrete set of spatial eigenfunctions $\{\psi_n(x)\}$ with corresponding energy eigenvalues $\{E_n\}$:
$$\Psi(x, t) = \sum_{n=1}^\infty c_n \psi_n(x) e^{-iE_n t/\hbar}$$

At $t = 0$:
$$\Psi(x, 0) = \sum_{n=1}^\infty c_n \psi_n(x)$$

The coefficients $c_n$ are determined via orthonormality ($\int \psi_m^*(x)\psi_n(x)\,dx = \delta_{mn}$):
$$c_n = \int \psi_n^*(x) \Psi(x, 0) \, dx$$

### 4. Physical Interpretation of Expansion Coefficients
- The probability of obtaining the energy value $E_n$ upon measuring $H$ is:
  $$P(E_n) = |c_n|^2$$
- Total probability conservation requires:
  $$\sum_{n=1}^\infty |c_n|^2 = 1$$
- The expectation value of energy is:
  $$\langle H \rangle = \sum_{n=1}^\infty |c_n|^2 E_n$$
  Because $c_n$ are independent of time, $\langle H \rangle$ and $P(E_n)$ are conserved.

---

## 1.3 General Theorems for 1D Potentials

1. **Reality of $E$:** For normalizable solutions, the separation constant $E$ must be real.
2. **Real Spatial Wave Functions:** For non-degenerate bound states, $\psi(x)$ can always be chosen real. If $\psi(x)$ solves the equation with energy $E$, then $\psi^*(x)$ also solves it; thus real linear combinations $\psi + \psi^*$ and $i(\psi - \psi^*)$ are solutions.
3. **Parity:** If $V(-x) = V(x)$, the eigenstates can be chosen to possess definite parity: either even ($\psi(-x) = \psi(x)$) or odd ($\psi(-x) = -\psi(x)$).
4. **Energy Lower Bound:** For every normalizable solution, $E > V_{\min}$. If $E < V_{\min}$, $\frac{d^2\psi}{dx^2}$ and $\psi$ share the same sign everywhere, causing $\psi$ to diverge exponentially toward $\pm\infty$.
5. **No Degeneracy in 1D Bound States:** In a one-dimensional potential with no infinite barrier separating regions, bound state solutions are non-degenerate.
6. **Node Theorem:** The number of nodes (zero-crossings) of real bound states strictly increases with increasing energy. The ground state has zero internal nodes, the first excited state has one node, and the $n$-th state has $(n-1)$ nodes.

---
## *
## 1.4 The Infinite Square Well (Particle in a Box)

The potential is defined by:
$$V(x) = \begin{cases} 0, & 0 \le x \le a \\ \infty, & \text{otherwise} \end{cases}$$

Outside the well, $\psi(x) = 0$. Inside the well ($0 \le x \le a$):
$$-\frac{\hbar^2}{2m} \frac{d^2\psi}{dx^2} = E\psi \implies \frac{d^2\psi}{dx^2} = -k^2\psi, \quad k \equiv \frac{\sqrt{2mE}}{\hbar}$$

General solution:
$$\psi(x) = A\sin(kx) + B\cos(kx)$$

Boundary conditions require continuity of $\psi(x)$:
- $\psi(0) = 0 \implies B = 0$
- $\psi(a) = 0 \implies \sin(ka) = 0 \implies k_n = \frac{n\pi}{a}, \quad n = 1, 2, 3, \dots$

Quantized energy eigenvalues:
$$E_n = \frac{\hbar^2 k_n^2}{2m} = \frac{n^2\pi^2\hbar^2}{2ma^2}$$

Normalization:
$$\int_0^a |A|^2 \sin^2\left(\frac{n\pi x}{a}\right) dx = |A|^2 \frac{a}{2} = 1 \implies A = \sqrt{\frac{2}{a}}$$

Stationary state eigenfunctions:
$$\psi_n(x) = \sqrt{\frac{2}{a}} \sin\left(\frac{n\pi x}{a}\right)$$

Complete time-dependent state:
$$\Psi(x, t) = \sum_{n=1}^\infty c_n \sqrt{\frac{2}{a}} \sin\left(\frac{n\pi x}{a}\right) e^{-i E_n t/\hbar}, \quad c_n = \sqrt{\frac{2}{a}} \int_0^a \sin\left(\frac{n\pi x}{a}\right) \Psi(x, 0) \, dx$$

---

## 1.5 The Free Particle

For $V(x) = 0$ everywhere:
$$-\frac{\hbar^2}{2m} \frac{d^2\psi}{dx^2} = E\psi \implies \frac{d^2\psi}{dx^2} = -k^2\psi, \quad k \equiv \frac{\sqrt{2mE}}{\hbar}$$

In exponential form:
$$\psi_k(x) = A e^{ikx} + B e^{-ikx}$$

Including time evolution:
$$\Psi_k(x, t) = A e^{i(kx - \frac{\hbar k^2}{2m}t)}$$
where $k > 0$ represents rightward propagation and $k < 0$ represents leftward propagation.

### Discrepancy Between Phase Velocity and Classical Particle Velocity
- Momentum: $p = \hbar k$
- Wave speed (Phase Velocity):
  $$v_{\text{phase}} = \frac{\omega}{k} = \frac{\hbar k}{2m} = \sqrt{\frac{E}{2m}}$$
- Classical particle speed:
  $$v_{\text{classical}} = \sqrt{\frac{2E}{m}} = 2 v_{\text{phase}}$$

### Non-Normalizability and Wave Packets
Individual plane wave states are not normalizable ($\int_{-\infty}^\infty |\Psi_k|^2 dx \to \infty$). Physical states are constructed as wave packets using continuous Fourier superpositions:
$$\Psi(x, t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} \phi(k) e^{i(kx - \omega(k) t)} \, dk$$
where $\omega(k) = \frac{\hbar k^2}{2m}$.

At $t = 0$:
$$\Psi(x, 0) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} \phi(k) e^{ikx} \, dk \iff \phi(k) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} \Psi(x, 0) e^{-ikx} \, dx$$

### Group Velocity
Expanding $\omega(k)$ around the central wave vector $k_0$:
$$\omega(k) \approx \omega(k_0) + \left.\frac{d\omega}{dk}\right|_{k_0} (k - k_0)$$
Substituting into the wave packet integral reveals that the modulation envelope travels at the group velocity:
$$v_{\text{group}} = \left.\frac{d\omega}{dk}\right|_{k_0} = \frac{\hbar k_0}{m} = v_{\text{classical}} = 2 v_{\text{phase}}$$

---

## 1.6 Bound States vs. Scattering States

- **Bound States ($E < V(+\infty)$ and $E < V(-\infty)$):** The spectrum is discrete. Eigenfunctions are normalizable and describe localized states.
- **Scattering States ($E > V(+\infty)$ or $E > V(-\infty)$):** The spectrum is continuous. Solutions are not normalizable to unity and describe unbound particles undergoing reflection and transmission.

---
## *
# 2. POSTULATES AND FORMALISM OF QUANTUM MECHANICS

## 2.1 Conservation of Probability and Current Density

The norm of a state $|\Psi(t)\rangle$ is:
$$\langle \Psi(t) | \Psi(t) \rangle = \int |\Psi(\vec{r}, t)|^2 \, d^3r$$

Because the Hamiltonian $\hat{H}$ is Hermitian ($\hat{H}^\dagger = \hat{H}$):
$$\frac{d}{dt} \langle \Psi(t) | \Psi(t) \rangle = \left(\frac{d}{dt}\langle\Psi(t)|\right)|\Psi(t)\rangle + \langle\Psi(t)|\left(\frac{d}{dt}|\Psi(t)\rangle\right) = \frac{i}{\hbar}\langle\Psi|\hat{H}|\Psi\rangle - \frac{i}{\hbar}\langle\Psi|\hat{H}|\Psi\rangle = 0$$

In local differential form:
$$\frac{\partial \rho(\vec{r}, t)}{\partial t} + \vec{\nabla} \cdot \vec{J}(\vec{r}, t) = 0$$
where:
- Probability density:
  $$\rho(\vec{r}, t) = |\Psi(\vec{r}, t)|^2 = \Psi^*(\vec{r}, t)\Psi(\vec{r}, t)$$
- Probability current density:
  $$\vec{J}(\vec{r}, t) = \frac{i\hbar}{2m}\left(\Psi \vec{\nabla}\Psi^* - \Psi^*\vec{\nabla}\Psi\right) = \frac{\hbar}{2im}\left(\Psi^*\vec{\nabla}\Psi - \Psi\vec{\nabla}\Psi^*\right) = \frac{1}{m}\text{Re}\left(\Psi^*\frac{\hbar}{i}\vec{\nabla}\Psi\right)$$

In one dimension:
$$J(x, t) = \frac{\hbar}{2im}\left(\psi^* \frac{d\psi}{dx} - \psi \frac{d\psi^*}{dx}\right)$$

---

## 2.2 Time Evolution of Expectation Values (Ehrenfest's Theorem)

For any linear operator $\hat{A}$:
$$\frac{d}{dt} \langle A \rangle = \frac{d}{dt} \langle \Psi(t) | \hat{A} | \Psi(t) \rangle = \frac{1}{i\hbar} \langle [\hat{A}, \hat{H}] \rangle + \left\langle \frac{\partial \hat{A}}{\partial t} \right\rangle$$

Consequences:
1. If $\hat{A}$ has no explicit time dependence ($\partial \hat{A}/\partial t = 0$), $\frac{d\langle A \rangle}{dt} = \frac{1}{i\hbar}\langle [\hat{A}, \hat{H}] \rangle$.
2. If $\hat{A}$ commutes with $\hat{H}$ ($[\hat{A}, \hat{H}] = 0$) and $\partial\hat{A}/\partial t = 0$, then $\langle A \rangle$ is a constant of motion.

For a particle in potential $V(x)$:
$$\frac{d\langle x \rangle}{dt} = \frac{\langle p \rangle}{m}$$
$$\frac{d\langle p \rangle}{dt} = -\left\langle \frac{dV(x)}{dx} \right\rangle$$

---

## 2.3 Classical Limit and Correspondence Principle

Quantum mechanics approaches classical mechanics under the following equivalent limits:
$$\lim_{\hbar \to 0} \text{Quantum Mechanics} = \text{Classical Mechanics}$$
$$\lim_{\lambda \to 0} \text{Quantum Mechanics} = \text{Classical Mechanics}$$

The quantum commutator maps onto the classical Poisson bracket:
$$\frac{1}{i\hbar}[\hat{A}, \hat{B}] \xrightarrow{\hbar \to 0} \{A, B\}_{\text{classical}}$$
where the Poisson bracket is defined by:
$$\{f, g\} = \sum_j \left( \frac{\partial f}{\partial q_j}\frac{\partial g}{\partial p_j} - \frac{\partial f}{\partial p_j}\frac{\partial g}{\partial q_j} \right)$$

---
## *
# 3. ONE-DIMENSIONAL SCATTERING AND BARRIERS

## 3.1 Boundary Conditions on Wave Functions

At any boundary between potential regions:
1. **Continuity of $\psi(x)$:**
   $$\psi_1(x_0) = \psi_2(x_0)$$
   ensuring the probability density is well-defined and continuous everywhere.
2. **Continuity of $\frac{d\psi}{dx}$:**
   $$\left.\frac{d\psi_1}{dx}\right|_{x_0} = \left.\frac{d\psi_2}{dx}\right|_{x_0}$$
   valid provided the potential $V(x)$ remains finite at $x_0$.
3. **Discontinuity across a Dirac Delta potential $\alpha \delta(x - x_0)$:**
   Integrating $-\frac{\hbar^2}{2m} \frac{d^2\psi}{dx^2} + V(x)\psi = E\psi$ across an infinitesimal interval $[x_0-\epsilon, x_0+\epsilon]$:
   $$\Delta\left(\frac{d\psi}{dx}\right) = \left.\frac{d\psi}{dx}\right|_{x_0^+} - \left.\frac{d\psi}{dx}\right|_{x_0^-} = \frac{2m\alpha}{\hbar^2}\psi(x_0)$$

---

## 3.2 The Potential Step

$$V(x) = \begin{cases} 0, & x < 0 \\ V_0, & x \ge 0 \end{cases}$$

### Case 1: $E > V_0$
Wave numbers:
$$k_1 = \frac{\sqrt{2mE}}{\hbar}, \quad k_2 = \frac{\sqrt{2m(E - V_0)}}{\hbar}$$

Wave functions:
$$\psi(x) = \begin{cases} A e^{ik_1 x} + B e^{-ik_1 x}, & x < 0 \\ C e^{ik_2 x}, & x \ge 0 \end{cases}$$

Applying boundary conditions at $x = 0$ ($A + B = C$ and $k_1(A - B) = k_2 C$):
$$\frac{B}{A} = \frac{k_1 - k_2}{k_1 + k_2}, \quad \frac{C}{A} = \frac{2k_1}{k_1 + k_2}$$

Reflection and Transmission coefficients:
$$R = \frac{|J_{\text{reflected}}|}{|J_{\text{incident}}|} = \frac{|B|^2}{|A|^2} = \left(\frac{k_1 - k_2}{k_1 + k_2}\right)^2 = \left(\frac{1 - K}{1 + K}\right)^2$$
$$T = \frac{|J_{\text{transmitted}}|}{|J_{\text{incident}}|} = \frac{k_2 |C|^2}{k_1 |A|^2} = \frac{4k_1 k_2}{(k_1 + k_2)^2} = \frac{4K}{(1 + K)^2}$$
where $K \equiv k_2 / k_1 = \sqrt{1 - V_0/E}$. Conservation of probability holds: $R + T = 1$.

### Case 2: $E < V_0$ (Evanescent Decay)
Wave numbers:
$$k_1 = \frac{\sqrt{2mE}}{\hbar}, \quad k_2' = \frac{\sqrt{2m(V_0 - E)}}{\hbar}$$

Wave functions:
$$\psi(x) = \begin{cases} A e^{ik_1 x} + B e^{-ik_1 x}, & x < 0 \\ C e^{-k_2' x}, & x \ge 0 \end{cases}$$

Continuity at $x = 0$ gives:
$$\frac{B}{A} = \frac{k_1 - ik_2'}{k_1 + ik_2'}, \quad \frac{C}{A} = \frac{2k_1}{k_1 + ik_2'}$$

Currents and Coefficients:
$$J_{\text{transmitted}} = 0 \implies R = \frac{|B|^2}{|A|^2} = \frac{k_1^2 + (k_2')^2}{k_1^2 + (k_2')^2} = 1, \quad T = 0$$
Total reflection occurs, but the wave function penetrates the barrier with an exponential decay length $\delta = 1/k_2'$.

---

## 3.3 The Rectangular Potential Barrier

$$V(x) = \begin{cases} 0, & x < 0 \\ V_0, & 0 \le x \le a \\ 0, & x > a \end{cases}$$

### Case 1: $E > V_0$
Wave functions in the three regions:
$$\psi_1(x) = A e^{ik_1 x} + B e^{-ik_1 x} \quad (x < 0)$$
$$\psi_2(x) = C e^{ik_2 x} + D e^{-ik_2 x} \quad (0 \le x \le a)$$
$$\psi_3(x) = F e^{ik_1 x} \quad (x > a)$$
where $k_1 = \frac{\sqrt{2mE}}{\hbar}$ and $k_2 = \frac{\sqrt{2m(E - V_0)}}{\hbar}$.

Transmission coefficient:
$$T = \left[ 1 + \frac{V_0^2}{4E(E - V_0)} \sin^2(k_2 a) \right]^{-1} = \left[ 1 + \frac{1}{4\varepsilon(\varepsilon - 1)} \sin^2\left(\lambda\sqrt{\varepsilon - 1}\right) \right]^{-1}$$
where $\varepsilon = E/V_0$ and $\lambda = a\frac{\sqrt{2mV_0}}{\hbar}$.

Resonance occurs ($T = 1$) when:
$$k_2 a = n\pi \implies E_n - V_0 = \frac{n^2\pi^2\hbar^2}{2ma^2}, \quad n = 1, 2, 3, \dots$$

### Case 2: $E < V_0$ (Quantum Tunneling)
Setting $k_2 \to i k_2'$ where $k_2' = \frac{\sqrt{2m(V_0 - E)}}{\hbar}$:
$$T = \left[ 1 + \frac{V_0^2}{4E(V_0 - E)} \sinh^2(k_2' a) \right]^{-1} = \left[ 1 + \frac{1}{4\varepsilon(1 - \varepsilon)} \sinh^2\left(\lambda\sqrt{1 - \varepsilon}\right) \right]^{-1}$$

In the thick/high barrier limit ($k_2' a \gg 1$):
$$\sinh(k_2' a) \approx \frac{1}{2} e^{k_2' a}$$
$$T \approx 16 \varepsilon (1 - \varepsilon) e^{-2 k_2' a} = \frac{16 E}{V_0} \left(1 - \frac{E}{V_0}\right) e^{-\frac{2a}{\hbar}\sqrt{2m(V_0 - E)}}$$

---

## 3.4 The Scattering Matrix ($S$-Matrix) and Transfer Matrix ($M$-Matrix)


For a localized potential confined to Region II:
- Region I ($x < x_{\text{left}}$): $\psi(x) = A e^{ikx} + B e^{-ikx}$
- Region III ($x > x_{\text{right}}$): $\psi(x) = F e^{ikx} + G e^{-ikx}$

### Scattering Matrix ($S$)
Relates outgoing waves $(B, F)$ to incoming waves $(A, G)$:
$$\begin{pmatrix} B \\ F \end{pmatrix} = \begin{pmatrix} S_{11} & S_{12} \\ S_{21} & S_{22} \end{pmatrix} \begin{pmatrix} A \\ G \end{pmatrix}$$

For scattering from the left ($G = 0$):
$$R_l = |S_{11}|^2, \quad T_l = |S_{21}|^2$$
For scattering from the right ($A = 0$):
$$R_r = |S_{22}|^2, \quad T_r = |S_{12}|^2$$

### Transfer Matrix ($M$)
Relates the wave amplitudes to the right of the potential $(F, G)$ to those to the left $(A, B)$:
$$\begin{pmatrix} F \\ G \end{pmatrix} = \begin{pmatrix} M_{11} & M_{12} \\ M_{21} & M_{22} \end{pmatrix} \begin{pmatrix} A \\ B \end{pmatrix}$$

For composite barriers made of consecutive localized potentials $V_1$ followed by $V_2$:
$$M = M_2 M_1$$

# * 