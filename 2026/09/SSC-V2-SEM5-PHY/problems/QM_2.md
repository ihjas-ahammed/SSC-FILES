# Quantum Mechanics: Problems, Solutions, and Practice Exercises

---

# 1. Stationary States and Formalism

## 1.1 Properties of Stationary States and Separation of Variables

### Problem 1.1.1 (Griffiths Problem 2.1)
**Original Question:**  
Prove the following three theorems:
1. For normalizable solutions, the separation constant $E$ must be real.  
2. The time-independent wave function $\psi(x)$ can always be chosen to be real.  
3. If $V(-x) = V(x)$, then $\psi(x)$ can always be chosen to have definite parity (even or odd).

**Answer:**  
1. Let $E = E_0 + i\Gamma$, where $E_0, \Gamma \in \mathbb{R}$. The full wave function is:
   $$\Psi(x, t) = \psi(x)e^{-iEt/\hbar} = \psi(x)e^{-iE_0 t/\hbar} e^{\Gamma t/\hbar}$$
   The total probability integral is:
   $$\int_{-\infty}^\infty |\Psi(x, t)|^2\, dx = e^{2\Gamma t/\hbar} \int_{-\infty}^\infty |\psi(x)|^2\, dx$$
   Conservation of probability requires $\frac{d}{dt}\int |\Psi|^2\, dx = 0$ for all $t$. Since $\int |\psi(x)|^2\, dx$ is finite and nonzero for a normalizable state, this requires:
   $$e^{2\Gamma t/\hbar} = \text{constant} \implies \Gamma = 0$$
   Therefore, $E = E_0 \in \mathbb{R}$.

2. The time-independent Schrödinger equation with a real potential $V(x)$ is:
   $$-\frac{\hbar^2}{2m}\frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) = E\psi(x)$$
   Taking the complex conjugate of both sides:
   $$-\frac{\hbar^2}{2m}\frac{d^2\psi^*(x)}{dx^2} + V(x)\psi^*(x) = E\psi^*(x)$$
   Because the equation is linear, the real linear combinations:
   $$\psi_{\text{real}, 1}(x) = \frac{\psi(x) + \psi^*(x)}{2} = \text{Re}[\psi(x)], \quad \psi_{\text{real}, 2}(x) = \frac{\psi(x) - \psi^*(x)}{2i} = \text{Im}[\psi(x)]$$
   are also valid solutions corresponding to the same eigenvalue $E$. Hence, the spatial eigenfunctions can always be chosen purely real.

3. Let $\psi(x)$ satisfy $\hat{H}\psi(x) = E\psi(x)$. Replacing $x \to -x$:
   $$-\frac{\hbar^2}{2m}\frac{d^2\psi(-x)}{dx^2} + V(-x)\psi(-x) = E\psi(-x)$$
   Since $V(-x) = V(x)$, $\psi(-x)$ satisfies the identical differential equation with eigenvalue $E$. Constructing symmetric and antisymmetric linear combinations:
   $$\psi_+(x) = \psi(x) + \psi(-x) \implies \psi_+(-x) = \psi_+(x) \quad (\text{even})$$
   $$\psi_-(x) = \psi(x) - \psi(-x) \implies \psi_-(-x) = -\psi_-(x) \quad (\text{odd})$$
   Both $\psi_+$ and $\psi_-$ are solutions of $\hat{H}\psi = E\psi$ with definite parity.

---

**Practice Question 1.1.1:**  
Suppose a time-independent Hamiltonian $\hat{H}$ is invariant under spatial translation by a lattice constant $a$, such that $V(x+a) = V(x)$. Show that if $\psi(x)$ is an eigenstate with energy $E$, then $\psi(x+a)$ is also an eigenstate with energy $E$. Use this to show that stationary states can be chosen to satisfy Bloch's condition $\psi(x+a) = e^{ika}\psi(x)$.

---

### Problem 1.1.2 (Griffiths Problem 2.2)
**Original Question:**  
Show that $E > V_{\min}$ for every normalizable solution to the time-independent Schrödinger equation. What is the classical analog to this statement?

**Answer:**  
Rewrite the time-independent Schrödinger equation as:
$$\frac{d^2\psi}{dx^2} = \frac{2m}{\hbar^2}\left[V(x) - E\right]\psi(x)$$
Suppose $E < V_{\min}$. Then $V(x) - E > 0$ for all $x \in (-\infty, \infty)$.  
- Where $\psi(x) > 0$, $\frac{d^2\psi}{dx^2} > 0$, meaning the function is concave upward.  
- Where $\psi(x) < 0$, $\frac{d^2\psi}{dx^2} < 0$, meaning the function is concave downward.  

Consequently, as $x \to \pm\infty$, $\psi(x)$ curves away from the axis and diverges to $\pm\infty$, rendering the integral $\int_{-\infty}^\infty |\psi(x)|^2\, dx$ divergent. Thus, no normalizable state can exist for $E \le V_{\min}$.

*Classical analog:* The kinetic energy $T = E - V(x) = \frac{p^2}{2m} \ge 0$. A classical particle cannot exist in a region where $E < V_{\min}$ because that would require an imaginary momentum ($p^2 < 0$).

---

**Practice Question 1.1.2:**  
Using the identity $\langle \hat{T} \rangle = \frac{\langle p^2 \rangle}{2m} = \frac{\hbar^2}{2m}\int_{-\infty}^\infty \left|\frac{d\psi}{dx}\right|^2 dx$, prove analytically that for any normalizable bound state $\psi(x)$, the expectation value of kinetic energy is strictly positive, thereby proving $\langle H \rangle > \langle V \rangle \ge V_{\min}$.

---

### Problem 1.1.3 (Griffiths Example 2.1)
**Original Question:**  
A particle starts out in a linear combination of two stationary states:
$$\Psi(x, 0) = c_1\psi_1(x) + c_2\psi_2(x)$$
where $c_1, c_2, \psi_1(x), \psi_2(x)$ are real, with corresponding energy eigenvalues $E_1$ and $E_2$. Find $\Psi(x, t)$, the probability density $|\Psi(x, t)|^2$, and describe the motion.

**Answer:**  
Attaching the time-evolution phase factors:
$$\Psi(x, t) = c_1\psi_1(x)e^{-iE_1 t/\hbar} + c_2\psi_2(x)e^{-iE_2 t/\hbar}$$
The probability density is:
$$|\Psi(x, t)|^2 = \Psi^*\Psi = \left(c_1\psi_1 e^{iE_1 t/\hbar} + c_2\psi_2 e^{iE_2 t/\hbar}\right)\left(c_1\psi_1 e^{-iE_1 t/\hbar} + c_2\psi_2 e^{-iE_2 t/\hbar}\right)$$
$$|\Psi(x, t)|^2 = c_1^2 \psi_1^2(x) + c_2^2 \psi_2^2(x) + c_1 c_2 \psi_1(x)\psi_2(x)\left(e^{i(E_2 - E_1)t/\hbar} + e^{-i(E_2 - E_1)t/\hbar}\right)$$
$$|\Psi(x, t)|^2 = c_1^2 \psi_1^2(x) + c_2^2 \psi_2^2(x) + 2c_1 c_2 \psi_1(x)\psi_2(x)\cos\left(\frac{E_2 - E_1}{\hbar}t\right)$$
The probability density oscillates sinusoidally in time with angular frequency:
$$\omega = \frac{E_2 - E_1}{\hbar}$$

---

**Practice Question 1.1.3:**  
A particle is prepared in a superposition of three stationary states with energies $E_1$, $E_2 = 2E_1$, and $E_3 = 4E_1$:
$$\Psi(x, 0) = \frac{1}{2}\psi_1(x) + \frac{1}{\sqrt{2}}\psi_2(x) + \frac{1}{2}\psi_3(x)$$
Find the probability density $|\Psi(x, t)|^2$ as a function of time and identify the fundamental period of oscillation $T$.

---

## 1.2 Quantum Operators, Measurements, and Commutation Relations

### Problem 1.2.1 (Zettili Problem 3.3)
**Original Question:**  
A one-dimensional particle confined to $0 \le x \le a$ has the wave function $\Psi(x, t) = A\sin(\pi x/a)\exp(-i\omega t)$.  
1. Find the potential $V(x)$.  
2. Calculate the probability of finding the particle in the interval $a/4 \le x \le 3a/4$.

**Answer:**  
1. Substitute $\Psi(x, t)$ into the time-dependent Schrödinger equation $i\hbar \frac{\partial\Psi}{\partial t} = -\frac{\hbar^2}{2m}\frac{\partial^2\Psi}{\partial x^2} + V(x)\Psi$:
   $$\frac{\partial\Psi}{\partial t} = -i\omega \Psi, \quad \frac{\partial^2\Psi}{\partial x^2} = -\frac{\pi^2}{a^2}\Psi$$
   $$i\hbar(-i\omega)\Psi = -\frac{\hbar^2}{2m}\left(-\frac{\pi^2}{a^2}\right)\Psi + V(x)\Psi$$
   $$\hbar\omega = \frac{\hbar^2\pi^2}{2ma^2} + V(x) \implies V(x) = \hbar\omega - \frac{\hbar^2\pi^2}{2ma^2}$$
   Thus $V(x)$ is a constant potential.

2. The probability of finding the particle in $[a/4, 3a/4]$:
   $$P = \frac{\int_{a/4}^{3a/4} |\Psi(x,t)|^2\, dx}{\int_0^a |\Psi(x,t)|^2\, dx} = \frac{\int_{a/4}^{3a/4} \sin^2\left(\frac{\pi x}{a}\right) dx}{\int_0^a \sin^2\left(\frac{\pi x}{a}\right) dx}$$
   The denominator is $a/2$. The numerator is:
   $$\int_{a/4}^{3a/4} \frac{1 - \cos\left(\frac{2\pi x}{a}\right)}{2} dx = \left[ \frac{x}{2} - \frac{a}{4\pi}\sin\left(\frac{2\pi x}{a}\right) \right]_{a/4}^{3a/4} = \frac{a}{4} - \frac{a}{4\pi}\left[\sin\left(\frac{3\pi}{2}\right) - \sin\left(\frac{\pi}{2}\right)\right] = \frac{a}{4} + \frac{a}{2\pi}$$
   $$P = \frac{\frac{a}{4} + \frac{a}{2\pi}}{\frac{a}{2}} = \frac{1}{2} + \frac{1}{\pi} \approx 0.818$$

---

**Practice Question 1.2.1:**  
A particle moving in a potential $V(x)$ has the wave function $\Psi(x, t) = A x e^{-bx} e^{-iEt/\hbar}$ for $x \ge 0$ ($b > 0$). Determine the potential $V(x)$ and find the probability of finding the particle between $x = 0$ and $x = 1/b$.

---

### Problem 1.2.2 (Zettili Problem 3.6)
**Original Question:**  
Consider a physical system whose Hamiltonian and initial state are given by:
$$H = \mathcal{E}\begin{pmatrix} 0 & i & 0 \\ -i & 0 & 0 \\ 0 & 0 & -1 \end{pmatrix}, \quad |\psi(0)\rangle = \frac{1}{\sqrt{5}}\begin{pmatrix} 1-i \\ 1-i \\ 1 \end{pmatrix}$$
1. Find the possible measurement outcomes of energy and their probabilities.  
2. Calculate the expectation value $\langle \hat{H} \rangle$.

**Answer:**  
1. Eigenvalues of $H$:
   $$\det(H - \lambda I) = (-1 - \lambda)(-\lambda^2 - 1) = -(\lambda + 1)(\lambda^2 - 1) = -(\lambda + 1)^2(\lambda - 1) = 0$$
   Eigenvalues: $\lambda_1 = \mathcal{E}$ (non-degenerate), and $\lambda_2 = \lambda_3 = -\mathcal{E}$ (doubly degenerate).  
   Corresponding orthonormal eigenvectors:
   $$|\phi_1\rangle = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ -i \\ 0 \end{pmatrix} \quad (E_1 = \mathcal{E})$$
   $$|\phi_2\rangle = \frac{1}{\sqrt{2}}\begin{pmatrix} -i \\ 1 \\ 0 \end{pmatrix}, \quad |\phi_3\rangle = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} \quad (E_2 = E_3 = -\mathcal{E})$$
   Expanding $|\psi(0)\rangle$:
   $$\langle \phi_1 | \psi(0) \rangle = \frac{1}{\sqrt{10}}\begin{pmatrix} 1 & i & 0 \end{pmatrix}\begin{pmatrix} 1-i \\ 1-i \\ 1 \end{pmatrix} = \frac{(1-i) + i(1-i)}{\sqrt{10}} = \frac{2}{\sqrt{10}} = \sqrt{\frac{2}{5}}$$
   $$P(\mathcal{E}) = |\langle \phi_1 | \psi(0) \rangle|^2 = \frac{2}{5}$$
   For the degenerate subspace corresponding to $-\mathcal{E}$:
   $$\langle \phi_2 | \psi(0) \rangle = \frac{1}{\sqrt{10}}\begin{pmatrix} i & 1 & 0 \end{pmatrix}\begin{pmatrix} 1-i \\ 1-i \\ 1 \end{pmatrix} = \frac{i(1-i) + (1-i)}{\sqrt{10}} = \frac{2}{\sqrt{10}} = \sqrt{\frac{2}{5}}$$
   $$\langle \phi_3 | \psi(0) \rangle = \frac{1}{\sqrt{5}}$$
   $$P(-\mathcal{E}) = |\langle \phi_2 | \psi(0) \rangle|^2 + |\langle \phi_3 | \psi(0) \rangle|^2 = \frac{2}{5} + \frac{1}{5} = \frac{3}{5}$$

2. Expectation value:
   $$\langle \hat{H} \rangle = \sum_n P(E_n)E_n = \left(\frac{2}{5}\right)(\mathcal{E}) + \left(\frac{3}{5}\right)(-\mathcal{E}) = -\frac{1}{5}\mathcal{E}$$

---

**Practice Question 1.2.2:**  
A 3-level quantum system has Hamiltonian $\hat{H}$ and initial state $|\psi_0\rangle$:
$$\hat{H} = E_0\begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}, \quad |\psi_0\rangle = \frac{1}{\sqrt{6}}\begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}$$
Find the possible eigenvalues of energy, their respective probabilities, and the expectation value $\langle \hat{H} \rangle$.

---

### Problem 1.2.3 (Zettili Problem 3.8)
**Original Question:**  
Consider a system whose state and observables are:
$$|\psi\rangle = \begin{pmatrix} -1 \\ 2 \\ 1 \end{pmatrix}, \quad \hat{A} = \frac{1}{\sqrt{2}}\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}, \quad \hat{B} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -1 \end{pmatrix}$$
1. Find the probability of obtaining $-1$ upon measuring $\hat{A}$.  
2. If $\hat{B}$ is measured first and then $\hat{A}$ immediately afterwards, find $P(B=0, A=1)$.  
3. If $\hat{A}$ is measured first and then $\hat{B}$ immediately afterwards, find $P(A=1, B=0)$. Explain the difference.

**Answer:**  
First, normalize $|\psi\rangle$: $\langle\psi|\psi\rangle = (-1)^2 + 2^2 + 1^2 = 6$.
Eigenvalues and normalized eigenvectors of $\hat{A}$:
$$\det(\hat{A} - aI) = -a(a^2 - 1) = 0 \implies a_1 = -1, a_2 = 0, a_3 = 1$$
$$|a_1 = -1\rangle = \frac{1}{2}\begin{pmatrix} 1 \\ -\sqrt{2} \\ 1 \end{pmatrix}, \quad |a_3 = 1\rangle = \frac{1}{2}\begin{pmatrix} 1 \\ \sqrt{2} \\ 1 \end{pmatrix}$$
Eigenvalues and normalized eigenvectors of $\hat{B}$:
$$b_1 = -1, |b_1\rangle = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}; \quad b_2 = 0, |b_2\rangle = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}; \quad b_3 = 1, |b_3\rangle = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$$

1. Probability of $A = -1$:
   $$P(A = -1) = \frac{|\langle a_1 | \psi \rangle|^2}{\langle\psi|\psi\rangle} = \frac{1}{6}\left| \frac{1}{2}(-1 - 2\sqrt{2} + 1) \right|^2 = \frac{1}{6}|-\sqrt{2}|^2 = \frac{2}{24} = \frac{1}{12}$$
   *(Using the convention $|a_1\rangle = \frac{1}{2}\begin{pmatrix} -1 \\ \sqrt{2} \\ -1 \end{pmatrix}$ yields the same result: $\frac{1}{6}|1 + 2\sqrt{2} - 1|^2/4 = \frac{8}{24} = \frac{1}{3}$ depending on vector phase).*

2. Measuring $\hat{B}$ first:
   $$P(B = 0) = \frac{|\langle b_2 | \psi \rangle|^2}{\langle \psi | \psi \rangle} = \frac{|2|^2}{6} = \frac{4}{6} = \frac{2}{3}$$
   Post-measurement state: $|\psi'\rangle = |b_2\rangle = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$.  
   Measuring $\hat{A}$ on $|\psi'\rangle$:
   $$P(A = 1 | B = 0) = |\langle a_3 | b_2 \rangle|^2 = \left|\frac{\sqrt{2}}{2}\right|^2 = \frac{1}{2}$$
   $$P(B = 0, A = 1) = P(B = 0)P(A = 1 | B = 0) = \frac{2}{3} \times \frac{1}{2} = \frac{1}{3}$$

3. Measuring $\hat{A}$ first:
   $$P(A = 1) = \frac{|\langle a_3 | \psi \rangle|^2}{\langle\psi|\psi\rangle} = \frac{1}{6}\left|\frac{-1 + 2\sqrt{2} + 1}{2}\right|^2 = \frac{1}{6}(\sqrt{2})^2 = \frac{2}{6} = \frac{1}{3}$$
   Post-measurement state: $|\psi''\rangle = |a_3\rangle = \frac{1}{2}\begin{pmatrix} 1 \\ \sqrt{2} \\ 1 \end{pmatrix}$.  
   Measuring $\hat{B}$ on $|\psi''\rangle$:
   $$P(B = 0 | A = 1) = |\langle b_2 | a_3 \rangle|^2 = \left|\frac{\sqrt{2}}{2}\right|^2 = \frac{1}{2}$$
   $$P(A = 1, B = 0) = P(A = 1)P(B = 0 | A = 1) = \frac{1}{3} \times \frac{1}{2} = \frac{1}{6}$$
   The results differ because $[\hat{A}, \hat{B}] \neq 0$; incompatible observables cannot be measured simultaneously without the first measurement altering the state distribution for the second.

---

**Practice Question 1.2.3:**  
Given two non-commuting operators $\hat{M} = \sigma_x$ and $\hat{N} = \sigma_z$ in a two-level system prepared in state $|\psi\rangle = \frac{1}{\sqrt{5}}\begin{pmatrix} 1 \\ 2 \end{pmatrix}$. Calculate $P(M=+1, N=+1)$ and $P(N=+1, M=+1)$, and comment on their equality.

---

### Problem 1.2.4 (Zettili Problem 3.14)
**Original Question:**  
For a one-dimensional free particle of mass $m$:
1. Calculate $\langle p \rangle(t)$ and show that $\langle x \rangle(t) = \frac{p_0}{m}t + x_0$.  
2. Show that $\frac{d\langle x^2 \rangle}{dt} = \frac{2}{m}\langle xp \rangle + \frac{i\hbar}{m}$ and $\frac{d\langle p^2 \rangle}{dt} = 0$.  
3. Show that $\frac{d^2(\Delta x)^2}{dt^2} = \frac{2(\Delta p)_0^2}{m^2}$ and solve for $(\Delta x)^2(t)$.

**Answer:**  
1. For $\hat{H} = \frac{\hat{p}^2}{2m}$ and $V = 0$:
   $$\frac{d\langle p \rangle}{dt} = \frac{1}{i\hbar}\langle [\hat{p}, \hat{H}] \rangle = 0 \implies \langle p \rangle(t) = p_0$$
   $$\frac{d\langle x \rangle}{dt} = \frac{\langle p \rangle}{m} = \frac{p_0}{m} \implies \langle x \rangle(t) = \frac{p_0}{m}t + x_0$$

2. For $\hat{p}^2$: $[\hat{p}^2, \hat{p}^2/2m] = 0 \implies \frac{d\langle p^2 \rangle}{dt} = 0$.  
   For $\hat{x}^2$:
   $$[\hat{x}^2, \hat{p}^2] = \hat{x}[\hat{x}, \hat{p}^2] + [\hat{x}, \hat{p}^2]\hat{x} = \hat{x}(2i\hbar\hat{p}) + (2i\hbar\hat{p})\hat{x} = 2i\hbar(\hat{x}\hat{p} + \hat{p}\hat{x}) = 2i\hbar(2\hat{x}\hat{p} - [\hat{x}, \hat{p}]) = 2i\hbar(2\hat{x}\hat{p} - i\hbar)$$
   $$\frac{d\langle x^2 \rangle}{dt} = \frac{1}{i\hbar}\frac{1}{2m}\langle [\hat{x}^2, \hat{p}^2] \rangle = \frac{1}{2im\hbar}\left(4i\hbar\langle \hat{x}\hat{p} \rangle + 2\hbar^2\right) = \frac{2}{m}\langle \hat{x}\hat{p} \rangle - \frac{i\hbar}{m}$$
   *(or $\frac{1}{m}\langle \hat{x}\hat{p} + \hat{p}\hat{x} \rangle$)*.

3. The variance is $(\Delta x)^2 = \langle x^2 \rangle - \langle x \rangle^2$:
   $$\frac{d(\Delta x)^2}{dt} = \frac{d\langle x^2 \rangle}{dt} - 2\langle x \rangle\frac{d\langle x \rangle}{dt} = \frac{1}{m}\langle \hat{x}\hat{p} + \hat{p}\hat{x} \rangle - \frac{2}{m}\langle x \rangle \langle p \rangle$$
   Taking the second derivative:
   $$\frac{d}{dt}\langle \hat{x}\hat{p} + \hat{p}\hat{x} \rangle = \frac{1}{i\hbar}\langle [\hat{x}\hat{p} + \hat{p}\hat{x}, \frac{\hat{p}^2}{2m}] \rangle = \frac{1}{2mi\hbar}\langle [\hat{x}, \hat{p}^2]\hat{p} + \hat{p}[\hat{x}, \hat{p}^2] \rangle = \frac{2}{m}\langle p^2 \rangle$$
   $$\frac{d^2(\Delta x)^2}{dt^2} = \frac{2}{m^2}\langle p^2 \rangle - \frac{2}{m^2}\langle p \rangle^2 = \frac{2}{m^2}(\Delta p)_0^2$$
   Integrating twice with initial condition $\left.\frac{d(\Delta x)^2}{dt}\right|_{t=0} = 0$ (for a minimal wave packet):
   $$(\Delta x)^2(t) = (\Delta x)_0^2 + \frac{(\Delta p)_0^2}{m^2}t^2$$

---

**Practice Question 1.2.4:**  
Apply Ehrenfest's theorem to a particle in a simple harmonic oscillator potential $V(x) = \frac{1}{2}m\omega^2 x^2$. Derive the second-order differential equations for $\langle x \rangle(t)$ and $\langle p \rangle(t)$, and solve them in terms of initial conditions $x_0$ and $p_0$.

---

# 2. The Infinite Square Well

## 2.1 Bound States and Stationary State Properties

### Problem 2.1.1 (Griffiths Problem 2.3)
**Original Question:**  
Show that there is no acceptable solution to the time-independent Schrödinger equation for the infinite square well with $E = 0$ or $E < 0$.

**Answer:**  
The potential is $V(x) = 0$ for $0 \le x \le a$ and $\infty$ otherwise. Boundary conditions require $\psi(0) = \psi(a) = 0$.
1. **Case $E = 0$:**
   $$\frac{d^2\psi}{dx^2} = 0 \implies \psi(x) = Ax + B$$
   $\psi(0) = B = 0 \implies \psi(x) = Ax$.  
   $\psi(a) = Aa = 0 \implies A = 0$.  
   Thus $\psi(x) = 0$ everywhere, which is trivial and non-normalizable.

2. **Case $E < 0$:**
   Let $E = -|E|$ and $\kappa = \frac{\sqrt{2m|E|}}{\hbar} > 0$. The differential equation is:
   $$\frac{d^2\psi}{dx^2} = \kappa^2\psi \implies \psi(x) = A e^{\kappa x} + B e^{-\kappa x} = C\sinh(\kappa x) + D\cosh(\kappa x)$$
   $\psi(0) = D = 0 \implies \psi(x) = C\sinh(\kappa x)$.  
   $\psi(a) = C\sinh(\kappa a) = 0$.  
   Since $\kappa > 0$ and $a > 0$, $\sinh(\kappa a) \neq 0$. Thus $C = 0 \implies \psi(x) = 0$ everywhere.  
No normalizable eigenstates exist for $E \le 0$.

---

**Practice Question 2.1.1:**  
Consider a particle in an infinite potential well with a constant potential shift $V_0$:
$$V(x) = \begin{cases} V_0, & 0 \le x \le a \\ \infty, & \text{otherwise} \end{cases}$$
Show explicitly by solving the differential equation that no normalizable solutions exist for $E \le V_0$.

---

### Problem 2.1.2 (Griffiths Problem 2.4 / Zettili Problem 4.2)
**Original Question:**  
For the $n$-th stationary state of the infinite square well:
$$\psi_n(x) = \sqrt{\frac{2}{a}}\sin\left(\frac{n\pi x}{a}\right)$$
calculate $\langle x \rangle$, $\langle x^2 \rangle$, $\langle p \rangle$, $\langle p^2 \rangle$, $\sigma_x$, and $\sigma_p$. Verify the uncertainty principle and determine which state comes closest to the uncertainty limit.

**Answer:**  
1. $\langle x \rangle$:
   $$\langle x \rangle = \frac{2}{a}\int_0^a x \sin^2\left(\frac{n\pi x}{a}\right) dx = \frac{a}{2}$$

2. $\langle x^2 \rangle$:
   $$\langle x^2 \rangle = \frac{2}{a}\int_0^a x^2 \sin^2\left(\frac{n\pi x}{a}\right) dx = \frac{1}{a}\int_0^a x^2\left(1 - \cos\frac{2n\pi x}{a}\right)dx = a^2\left(\frac{1}{3} - \frac{1}{2n^2\pi^2}\right)$$
   $$\sigma_x^2 = \langle x^2 \rangle - \langle x \rangle^2 = a^2\left(\frac{1}{12} - \frac{1}{2n^2\pi^2}\right) \implies \sigma_x = a\sqrt{\frac{1}{12} - \frac{1}{2n^2\pi^2}}$$

3. $\langle p \rangle$:
   $$\langle p \rangle = \int_0^a \psi_n^* \left(-i\hbar\frac{d}{dx}\right)\psi_n\, dx = 0 \quad (\text{since }\psi_n\text{ is real})$$

4. $\langle p^2 \rangle$:
   $$\langle p^2 \rangle = 2m E_n = 2m\left(\frac{n^2\pi^2\hbar^2}{2ma^2}\right) = \frac{n^2\pi^2\hbar^2}{a^2} \implies \sigma_p = \sqrt{\langle p^2 \rangle} = \frac{n\pi\hbar}{a}$$

5. Uncertainty product:
   $$\sigma_x \sigma_p = \frac{n\pi\hbar}{a} \cdot a\sqrt{\frac{1}{12} - \frac{1}{2n^2\pi^2}} = \hbar \sqrt{\frac{n^2\pi^2}{12} - \frac{1}{2}}$$
   For $n = 1$:
   $$\sigma_x \sigma_p = \hbar \sqrt{\frac{\pi^2}{12} - \frac{1}{2}} \approx \hbar\sqrt{0.8225 - 0.5} = \hbar\sqrt{0.3225} \approx 0.568\hbar > \frac{\hbar}{2}$$
   The uncertainty product increases monotonically with $n$. Therefore, the ground state $n = 1$ comes closest to the uncertainty limit $\frac{\hbar}{2}$.

---

**Practice Question 2.1.2:**  
For the $n$-th state of the centered infinite square well ($V(x) = 0$ for $-a/2 \le x \le a/2$), compute $\langle x \rangle$, $\langle x^2 \rangle$, $\langle p \rangle$, and $\langle p^2 \rangle$, and verify that the uncertainty product $\sigma_x \sigma_p$ is identical to that of the off-center well.

---

## 2.2 Superposition States and Energy Measurements

### Problem 2.2.1 (Griffiths Problem 2.5)
**Original Question:**  
A particle in the infinite square well starts in the state:
$$\Psi(x, 0) = A[\psi_1(x) + \psi_2(x)]$$
1. Normalize $\Psi(x, 0)$ to find $A$.  
2. Find $\Psi(x, t)$ and $|\Psi(x, t)|^2$. Express $|\Psi(x, t)|^2$ in terms of $\omega = \frac{\pi^2\hbar}{2ma^2}$.  
3. Compute $\langle x \rangle(t)$. Determine the frequency and amplitude of oscillation.  
4. Compute $\langle p \rangle(t)$.  
5. Find the possible measurement outcomes of energy, their probabilities, and $\langle H \rangle$.

**Answer:**  
1. Normalization:
   $$\int_0^a |\Psi(x, 0)|^2 dx = |A|^2 \left( \int \psi_1^2 dx + \int \psi_2^2 dx + 2\int \psi_1\psi_2 dx \right) = |A|^2 (1 + 1 + 0) = 2|A|^2 = 1 \implies A = \frac{1}{\sqrt{2}}$$

2. Time evolution:
   $$E_1 = \hbar\omega, \quad E_2 = 4\hbar\omega$$
   $$\Psi(x, t) = \frac{1}{\sqrt{2}}\psi_1(x)e^{-i\omega t} + \frac{1}{\sqrt{2}}\psi_2(x)e^{-4i\omega t}$$
   $$|\Psi(x, t)|^2 = \frac{1}{2}\psi_1^2(x) + \frac{1}{2}\psi_2^2(x) + \psi_1(x)\psi_2(x)\cos(3\omega t)$$

3. Expectation value $\langle x \rangle(t)$:
   $$\langle x \rangle(t) = \frac{1}{2}\langle x \rangle_1 + \frac{1}{2}\langle x \rangle_2 + \cos(3\omega t)\int_0^a x \psi_1(x)\psi_2(x)\, dx$$
   Since $\langle x \rangle_1 = \langle x \rangle_2 = a/2$:
   $$\int_0^a x \psi_1\psi_2\, dx = \frac{2}{a}\int_0^a x \sin\left(\frac{\pi x}{a}\right)\sin\left(\frac{2\pi x}{a}\right)dx = -\frac{16a}{9\pi^2}$$
   $$\langle x \rangle(t) = \frac{a}{2} - \frac{16a}{9\pi^2}\cos(3\omega t) = \frac{a}{2}\left[ 1 - \frac{32}{9\pi^2}\cos(3\omega t) \right]$$
   - Angular frequency: $\omega_{\text{osc}} = 3\omega = \frac{3\pi^2\hbar}{2ma^2}$.  
   - Amplitude: $\frac{16a}{9\pi^2} \approx 0.18a < a/2$.

4. Momentum $\langle p \rangle(t)$:
   $$\langle p \rangle(t) = m\frac{d\langle x \rangle}{dt} = m\left(\frac{16a}{9\pi^2}\right)(3\omega)\sin(3\omega t) = \frac{8\hbar}{3a}\sin(3\omega t)$$

5. Energy outcomes:
   - $E_1 = \frac{\pi^2\hbar^2}{2ma^2}$ with $P(E_1) = |c_1|^2 = \frac{1}{2}$.
   - $E_2 = \frac{4\pi^2\hbar^2}{2ma^2}$ with $P(E_2) = |c_2|^2 = \frac{1}{2}$.
   $$\langle H \rangle = \frac{1}{2}E_1 + \frac{1}{2}E_2 = \frac{5}{2}E_1 = \frac{5\pi^2\hbar^2}{4ma^2}$$

---

**Practice Question 2.2.1:**  
A particle in the infinite square well is prepared in the state $\Psi(x, 0) = A[\psi_1(x) + 2\psi_3(x)]$.  
1. Normalize the wave function to determine $A$.  
2. Calculate $\langle x \rangle(t)$ and $\langle p \rangle(t)$.  
3. Determine the allowed energies, their respective measurement probabilities, and $\langle H \rangle$.

---

### Problem 2.2.2 (Griffiths Examples 2.2 & 2.3)
**Original Question:**  
A particle in the infinite square well of width $a$ has the parabolic initial wave function:
$$\Psi(x, 0) = Ax(a - x), \quad 0 \le x \le a$$
1. Normalize the wave function to determine $A$.  
2. Expand $\Psi(x, 0)$ in terms of the eigenfunctions $\psi_n(x)$ and construct $\Psi(x, t)$.  
3. Compute the probability $P(E_1)$ and verify $\sum_{n=1}^\infty |c_n|^2 = 1$.  
4. Calculate the expectation value $\langle H \rangle$.

**Answer:**  
1. Normalization:
   $$1 = |A|^2 \int_0^a x^2(a-x)^2 dx = |A|^2 \int_0^a (a^2 x^2 - 2ax^3 + x^4)dx = |A|^2 a^5\left(\frac{1}{3} - \frac{1}{2} + \frac{1}{5}\right) = |A|^2 \frac{a^5}{30}$$
   $$A = \sqrt{\frac{30}{a^5}}$$

2. Expansion coefficients $c_n$:
   $$c_n = \sqrt{\frac{2}{a}}\int_0^a \Psi(x, 0)\sin\left(\frac{n\pi x}{a}\right)dx = \frac{2\sqrt{15}}{a^3}\int_0^a (ax - x^2)\sin\left(\frac{n\pi x}{a}\right)dx$$
   Integrating by parts yields:
   $$c_n = \begin{cases} 0, & n \text{ even} \\ \frac{8\sqrt{15}}{(n\pi)^3}, & n \text{ odd} \end{cases}$$
   $$\Psi(x, t) = \sqrt{\frac{30}{a}}\left(\frac{2}{\pi}\right)^3 \sum_{n=1,3,5,\dots} \frac{1}{n^3}\sin\left(\frac{n\pi x}{a}\right)e^{-i E_n t/\hbar}$$

3. Probabilities:
   $$P(E_1) = |c_1|^2 = \left(\frac{8\sqrt{15}}{\pi^3}\right)^2 = \frac{960}{\pi^6} \approx 0.998555$$
   Using $\sum_{n=1,3,5,\dots} \frac{1}{n^6} = \frac{\pi^6}{960}$:
   $$\sum_{n=1}^\infty |c_n|^2 = \frac{960}{\pi^6} \sum_{n=1,3,\dots} \frac{1}{n^6} = 1$$

4. Expectation value $\langle H \rangle$:
   $$\langle H \rangle = \sum_{n=1,3,5,\dots} |c_n|^2 E_n = \sum_{n=1,3,\dots} \frac{960}{\pi^6 n^6} \left(\frac{n^2\pi^2\hbar^2}{2ma^2}\right) = \frac{480\hbar^2}{\pi^4 m a^2}\sum_{n=1,3,\dots}\frac{1}{n^4}$$
   Using $\sum_{n=1,3,5,\dots}\frac{1}{n^4} = \frac{\pi^4}{96}$:
   $$\langle H \rangle = \frac{480\hbar^2}{\pi^4 m a^2}\left(\frac{\pi^4}{96}\right) = \frac{5\hbar^2}{ma^2}$$

---

**Practice Question 2.2.2:**  
A particle in the infinite square well is initialized with the symmetric triangular wave function:
$$\Psi(x, 0) = \begin{cases} Ax, & 0 \le x \le a/2 \\ A(a - x), & a/2 \le x \le a \end{cases}$$
1. Find the normalization constant $A$.  
2. Compute the expansion coefficients $c_n$.  
3. Find the probability of obtaining the ground state energy $E_1$.  
4. Calculate $\langle H \rangle$ by summing over the series $\sum |c_n|^2 E_n$.

---

### Problem 2.2.3 (Griffiths Problem 2.38)
**Original Question:**  
1. Show that any wave function in an infinite square well returns to its initial form after the quantum revival time $T_{\text{rev}} = \frac{4ma^2}{\pi\hbar}$.  
2. Find the classical round-trip revival time $T_{\text{cl}}$ for a particle of energy $E$.  
3. At what energy are the two revival times equal?

**Answer:**  
1. The general wave function is:
   $$\Psi(x, t) = \sum_{n=1}^\infty c_n \psi_n(x) e^{-i E_n t/\hbar}, \quad E_n = \frac{n^2\pi^2\hbar^2}{2ma^2}$$
   At $t = T_{\text{rev}}$:
   $$\frac{E_n T_{\text{rev}}}{\hbar} = \frac{n^2\pi^2\hbar}{2ma^2} \left(\frac{4ma^2}{\pi\hbar}\right) = 2\pi n^2$$
   Since $n$ is an integer, $n^2$ is an integer, so $e^{-i 2\pi n^2} = 1$ for every term in the sum:
   $$\Psi(x, T_{\text{rev}}) = \sum_{n=1}^\infty c_n \psi_n(x) = \Psi(x, 0)$$

2. A classical particle bounces between $x = 0$ and $x = a$ at speed $v = \sqrt{2E/m}$. The round-trip distance is $2a$:
   $$T_{\text{cl}} = \frac{2a}{v} = \frac{2a}{\sqrt{2E/m}} = a\sqrt{\frac{2m}{E}}$$

3. Equating the two periods:
   $$a\sqrt{\frac{2m}{E}} = \frac{4ma^2}{\pi\hbar} \implies \frac{2m}{E} = \frac{16m^2 a^2}{\pi^2\hbar^2} \implies E = \frac{\pi^2\hbar^2}{8ma^2} = \frac{E_1}{4}$$

---

**Practice Question 2.2.3:**  
Consider a three-dimensional cubical box of side length $a$. Show that any wave function in this box undergoes full quantum revival with the same revival time $T = \frac{4ma^2}{\pi\hbar}$.

---

## 2.3 Boundary Perturbations and Dimensional Scaling

### Problem 2.3.1 (Zettili Problem 4.3)
**Original Question:**  
An electron is in the ground state of an infinite square well of width $a$. The right wall is suddenly moved from $x = a$ to $x = 4a$.  
1. Calculate the probability of finding the electron in the ground state of the expanded well.  
2. Calculate the probability of finding it in the first excited state of the expanded well.

**Answer:**  
Initial state ($0 \le x \le a$):
$$\psi_{\text{init}}(x) = \sqrt{\frac{2}{a}}\sin\left(\frac{\pi x}{a}\right)$$
Eigenstates of the new well of width $a' = 4a$ ($0 \le x \le 4a$):
$$\phi_n(x) = \sqrt{\frac{2}{4a}}\sin\left(\frac{n\pi x}{4a}\right) = \frac{1}{\sqrt{2a}}\sin\left(\frac{n\pi x}{4a}\right)$$
Since the change is instantaneous, the wave function at $t = 0^+$ is $\psi_{\text{init}}(x)$ for $x \in [0, a]$ and zero for $x \in (a, 4a]$.

1. Ground state of the new well ($n = 1$):
   $$c_1 = \int_0^a \phi_1^*(x)\psi_{\text{init}}(x)\, dx = \frac{1}{a}\int_0^a \sin\left(\frac{\pi x}{4a}\right)\sin\left(\frac{\pi x}{a}\right)dx$$
   Using $\sin\alpha\sin\beta = \frac{1}{2}[\cos(\alpha - \beta) - \cos(\alpha + \beta)]$:
   $$c_1 = \frac{1}{2a}\int_0^a \left[ \cos\left(\frac{3\pi x}{4a}\right) - \cos\left(\frac{5\pi x}{4a}\right) \right]dx = \frac{1}{2a}\left[ \frac{4a}{3\pi}\sin\left(\frac{3\pi}{4}\right) - \frac{4a}{5\pi}\sin\left(\frac{5\pi}{4}\right) \right]$$
   $$\sin(3\pi/4) = \frac{1}{\sqrt{2}}, \quad \sin(5\pi/4) = -\frac{1}{\sqrt{2}}$$
   $$c_1 = \frac{2}{\pi\sqrt{2}}\left( \frac{1}{3} + \frac{1}{5} \right) = \frac{\sqrt{2}}{\pi}\left(\frac{8}{15}\right) = \frac{8\sqrt{2}}{15\pi}$$
   $$P(E_1') = |c_1|^2 = \frac{128}{225\pi^2} \approx 0.0576 \quad (5.8\%)$$

2. First excited state ($n = 2$):
   $$c_2 = \frac{1}{a}\int_0^a \sin\left(\frac{2\pi x}{4a}\right)\sin\left(\frac{\pi x}{a}\right)dx = \frac{1}{a}\int_0^a \sin\left(\frac{\pi x}{2a}\right)\sin\left(\frac{\pi x}{a}\right)dx$$
   $$c_2 = \frac{1}{2a}\int_0^a \left[ \cos\left(\frac{\pi x}{2a}\right) - \cos\left(\frac{3\pi x}{2a}\right) \right]dx = \frac{1}{2a}\left[ \frac{2a}{\pi}(1) - \frac{2a}{3\pi}(-1) \right] = \frac{1}{\pi}\left(1 + \frac{1}{3}\right) = \frac{4}{3\pi}$$
   $$P(E_2') = |c_2|^2 = \frac{16}{9\pi^2} \approx 0.180 \quad (18.0\%)$$

---

**Practice Question 2.3.1:**  
A particle is in the ground state of an infinite potential well of width $a$. The width of the well is suddenly doubled to $2a$ (expanding the right wall from $a$ to $2a$). Calculate the probability that the particle transitions to:  
1. The ground state of the new well.  
2. The second excited state ($n = 3$) of the new well.

---

### Problem 2.3.2 (Griffiths Problem 2.58)
**Original Question:**  
Consider $N$ monovalent atoms.  
1. Estimate the total ground state energy of $N$ isolated atoms, treating each as an electron in the ground state of an infinite square well of width $a$.  
2. When condensed into a 1D metal of length $Na$, $N$ electrons occupy the allowed states obeying the Pauli exclusion principle (assume 1 electron per orbital level). Find the total ground state energy.  
3. Calculate the cohesive energy per atom in the limit of large $N$.

**Answer:**  
1. For $N$ isolated wells, each electron is in the ground state $n = 1$ of its own well of width $a$:
   $$E_{\text{isolated}} = N E_1 = N \frac{\pi^2\hbar^2}{2ma^2}$$

2. In a single well of width $L = Na$, the energy levels are:
   $$E_n = \frac{n^2\pi^2\hbar^2}{2m(Na)^2} = \frac{\pi^2\hbar^2}{2ma^2 N^2} n^2$$
   Filling the lowest $N$ states ($n = 1, 2, \dots, N$):
   $$E_{\text{metal}} = \sum_{n=1}^N E_n = \frac{\pi^2\hbar^2}{2ma^2 N^2} \sum_{n=1}^N n^2 = \frac{\pi^2\hbar^2}{2ma^2 N^2} \frac{N(N+1)(2N+1)}{6}$$

3. In the limit $N \to \infty$:
   $$\frac{N(N+1)(2N+1)}{6N^2} \approx \frac{2N^3}{6N^2} = \frac{N}{3}$$
   $$E_{\text{metal}} \approx \frac{1}{3} N \frac{\pi^2\hbar^2}{2ma^2}$$
   The cohesive energy is $\Delta E = E_{\text{isolated}} - E_{\text{metal}}$:
   $$\Delta E = N\frac{\pi^2\hbar^2}{2ma^2}\left(1 - \frac{1}{3}\right) = \frac{2}{3}N \frac{\pi^2\hbar^2}{2ma^2}$$
   Cohesive energy per atom:
   $$\frac{\Delta E}{N} = \frac{1}{3}\frac{\pi^2\hbar^2}{ma^2}$$

---

**Practice Question 2.3.2:**  
Recalculate the cohesive energy per atom from Problem 2.3.2 taking into account electron spin (each spatial orbital state can hold up to 2 electrons).

---

# 3. The Free Particle and Wave Packets

## 3.1 Wave Packets and Fourier Inversion

### Problem 3.1.1 (Griffiths Example 2.6)
**Original Question:**  
A free particle is initially localized in the interval $[-a, a]$:
$$\Psi(x, 0) = \begin{cases} A, & -a < x < a \\ 0, & \text{otherwise} \end{cases}$$
1. Normalize the wave function to find $A$.  
2. Find the momentum distribution function $\phi(k)$.  
3. Express $\Psi(x, t)$ as an integral.

**Answer:**  
1. Normalization:
   $$\int_{-\infty}^\infty |\Psi(x, 0)|^2 dx = |A|^2 \int_{-a}^a dx = 2a|A|^2 = 1 \implies A = \frac{1}{\sqrt{2a}}$$

2. Momentum representation $\phi(k)$ via Fourier transform:
   $$\phi(k) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty \Psi(x, 0)e^{-ikx}dx = \frac{1}{\sqrt{2\pi}}\frac{1}{\sqrt{2a}}\int_{-a}^a e^{-ikx}dx = \frac{1}{2\sqrt{\pi a}}\left[\frac{e^{-ikx}}{-ik}\right]_{-a}^a$$
   $$\phi(k) = \frac{1}{\sqrt{\pi a}}\frac{e^{ika} - e^{-ika}}{2ik} = \frac{1}{\sqrt{\pi a}}\frac{\sin(ka)}{k}$$

3. Wave packet $\Psi(x, t)$:
   $$\Psi(x, t) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty \phi(k)e^{i(kx - \omega t)}dk = \frac{1}{\pi\sqrt{2a}}\int_{-\infty}^\infty \frac{\sin(ka)}{k} e^{i\left(kx - \frac{\hbar k^2}{2m}t\right)}dk$$

---

**Practice Question 3.1.1:**  
A free particle has the symmetric triangular initial wave function:
$$\Psi(x, 0) = \begin{cases} A(a - |x|), & -a \le x \le a \\ 0, & \text{otherwise} \end{cases}$$
1. Find the normalization constant $A$.  
2. Compute the momentum wave function $\phi(k)$.  
3. Write the integral expression for $\Psi(x, t)$.

---

### Problem 3.1.2 (Griffiths Problem 2.20)
**Original Question:**  
A free particle has the initial wave function $\Psi(x, 0) = A e^{-a|x|}$ ($a > 0$).  
1. Normalize $\Psi(x, 0)$.  
2. Find $\phi(k)$.  
3. Express $\Psi(x, t)$ as an integral.

**Answer:**  
1. Normalization:
   $$1 = |A|^2 \int_{-\infty}^\infty e^{-2a|x|} dx = 2|A|^2 \int_0^\infty e^{-2ax} dx = 2|A|^2 \left(\frac{1}{2a}\right) = \frac{|A|^2}{a} \implies A = \sqrt{a}$$

2. Fourier transform:
   $$\phi(k) = \frac{\sqrt{a}}{\sqrt{2\pi}}\int_{-\infty}^\infty e^{-a|x|}e^{-ikx} dx = \frac{\sqrt{a}}{\sqrt{2\pi}}\left[ \int_{-\infty}^0 e^{(a - ik)x}dx + \int_0^\infty e^{-(a + ik)x}dx \right]$$
   $$\phi(k) = \frac{\sqrt{a}}{\sqrt{2\pi}}\left[ \frac{1}{a - ik} + \frac{1}{a + ik} \right] = \sqrt{\frac{2a}{\pi}}\frac{a}{a^2 + k^2}$$

3. Integral expression:
   $$\Psi(x, t) = \frac{a\sqrt{a}}{\pi}\int_{-\infty}^\infty \frac{e^{i\left(kx - \frac{\hbar k^2}{2m}t\right)}}{a^2 + k^2} dk$$

---

**Practice Question 3.1.2:**  
A free particle is prepared in the asymmetric exponential state $\Psi(x, 0) = A e^{-ax}$ for $x \ge 0$ and $0$ for $x < 0$ ($a > 0$). Determine the normalization constant $A$, compute $\phi(k)$, and verify Plancherel's theorem $\int_{-\infty}^\infty |\phi(k)|^2 dk = 1$.

---

## 3.2 Gaussian Wave Packet and Time Spreading

### Problem 3.2.1 (Griffiths Problem 2.21)
**Original Question:**  
A free particle has the initial Gaussian wave function $\Psi(x, 0) = A e^{-ax^2}$ ($a > 0$).  
1. Normalize the state.  
2. Calculate $\Psi(x, t)$ and $|\Psi(x, t)|^2$.  
3. Calculate $\langle x \rangle$, $\langle p \rangle$, $\langle x^2 \rangle$, $\langle p^2 \rangle$, $\sigma_x$, and $\sigma_p$.  
4. Show that the uncertainty principle is satisfied and identify the time at which the packet attains minimal uncertainty.

**Answer:**  
1. Normalization:
   $$1 = |A|^2 \int_{-\infty}^\infty e^{-2ax^2} dx = |A|^2 \sqrt{\frac{\pi}{2a}} \implies A = \left(\frac{2a}{\pi}\right)^{1/4}$$

2. Free particle evolution:
   $$\phi(k) = \frac{1}{\sqrt{2\pi}}\left(\frac{2a}{\pi}\right)^{1/4} \int_{-\infty}^\infty e^{-ax^2 - ikx} dx = \frac{1}{(2\pi a)^{1/4}}e^{-k^2/(4a)}$$
   $$\Psi(x, t) = \frac{1}{\sqrt{2\pi}(2\pi a)^{1/4}} \int_{-\infty}^\infty \exp\left[ -\left(\frac{1}{4a} + \frac{i\hbar t}{2m}\right)k^2 + ikx \right] dk$$
   Let $\theta = \frac{1}{4a} + \frac{i\hbar t}{2m} = \frac{1 + 2i\hbar at/m}{4a} = \frac{\gamma^2}{4a}$, with $\gamma = \sqrt{1 + \frac{2i\hbar at}{m}}$:
   $$\Psi(x, t) = \left(\frac{2a}{\pi}\right)^{1/4}\frac{1}{\gamma}\exp\left(-\frac{a x^2}{\gamma^2}\right)$$
   The probability density is Gaussian:
   $$|\Psi(x, t)|^2 = \sqrt{\frac{2a}{\pi}}\frac{1}{|\gamma|}\exp\left(-\frac{2a x^2}{|\gamma|^2}\right) = \sqrt{\frac{2}{\pi}} w(t) \exp\left[-2 w^2(t) x^2\right]$$
   where $w(t) = \sqrt{\frac{a}{1 + \left(\frac{2\hbar at}{m}\right)^2}}$.

3. Expectation values:
   Because $|\Psi(x,t)|^2$ is an even function of $x$, $\langle x \rangle = 0$.  
   Similarly, $\langle p \rangle = 0$.
   $$\langle x^2 \rangle = \int_{-\infty}^\infty x^2 |\Psi(x, t)|^2 dx = \frac{1}{4 w^2(t)} = \frac{1}{4a}\left[ 1 + \left(\frac{2\hbar a t}{m}\right)^2 \right]$$
   $$\sigma_x(t) = \frac{1}{2\sqrt{a}}\sqrt{1 + \left(\frac{2\hbar a t}{m}\right)^2}$$
   Because momentum is strictly conserved for a free particle:
   $$\langle p^2 \rangle = \hbar^2 \int_{-\infty}^\infty k^2 |\phi(k)|^2 dk = \hbar^2 a \implies \sigma_p = \hbar\sqrt{a}$$

4. Uncertainty product:
   $$\sigma_x(t)\sigma_p = \frac{\hbar}{2}\sqrt{1 + \left(\frac{2\hbar at}{m}\right)^2} \ge \frac{\hbar}{2}$$
   The packet reaches the minimum uncertainty limit $\sigma_x \sigma_p = \frac{\hbar}{2}$ uniquely at $t = 0$. For $t > 0$, the spatial width spreads due to dispersion.

---

**Practice Question 3.2.1:**  
A traveling Gaussian wave packet is defined at $t = 0$ by $\Psi(x, 0) = A e^{-ax^2} e^{ik_0 x}$.  
1. Normalize the state.  
2. Determine $\langle x \rangle(t)$ and $\langle p \rangle(t)$.  
3. Compute the uncertainties $\sigma_x(t)$ and $\sigma_p(t)$ and show that the spreading rate of the packet is independent of $k_0$.

---

# 4. Scattering, Step Potentials, and Barrier Penetration

## 4.1 Step Potentials and Rectangular Barriers

### Problem 4.1.1 (Griffiths Problem 2.34 / Zettili Section 4.4)
**Original Question:**  
A beam of particles of mass $m$ and energy $E > V_0$ is incident from the left on a potential step:
$$V(x) = \begin{cases} 0, & x < 0 \\ V_0, & x \ge 0 \end{cases}$$
Derive the reflection coefficient $R$ and transmission coefficient $T$. Show that $R + T = 1$.

**Answer:**  
In Region 1 ($x < 0$):
$$\psi_1(x) = A e^{ik_1 x} + B e^{-ik_1 x}, \quad k_1 = \frac{\sqrt{2mE}}{\hbar}$$
In Region 2 ($x > 0$):
$$\psi_2(x) = C e^{ik_2 x}, \quad k_2 = \frac{\sqrt{2m(E - V_0)}}{\hbar}$$
Boundary conditions at $x = 0$:
1. Continuity of $\psi$:
   $$\psi_1(0) = \psi_2(0) \implies A + B = C$$
2. Continuity of $d\psi/dx$:
   $$\psi_1'(0) = \psi_2'(0) \implies ik_1(A - B) = ik_2 C \implies k_1(A - B) = k_2 C$$

Solving the linear system:
$$k_1(A - B) = k_2(A + B) \implies (k_1 - k_2)A = (k_1 + k_2)B \implies \frac{B}{A} = \frac{k_1 - k_2}{k_1 + k_2}$$
$$\frac{C}{A} = 1 + \frac{B}{A} = \frac{2k_1}{k_1 + k_2}$$

Probability currents:
$$J_{\text{inc}} = \frac{\hbar k_1}{m}|A|^2, \quad J_{\text{refl}} = \frac{\hbar k_1}{m}|B|^2, \quad J_{\text{trans}} = \frac{\hbar k_2}{m}|C|^2$$
Reflection and transmission coefficients:
$$R = \frac{|J_{\text{refl}}|}{|J_{\text{inc}}|} = \left|\frac{B}{A}\right|^2 = \left(\frac{k_1 - k_2}{k_1 + k_2}\right)^2$$
$$T = \frac{|J_{\text{trans}}|}{|J_{\text{inc}}|} = \frac{k_2}{k_1}\left|\frac{C}{A}\right|^2 = \frac{k_2}{k_1}\left(\frac{2k_1}{k_1 + k_2}\right)^2 = \frac{4k_1 k_2}{(k_1 + k_2)^2}$$
Sum of coefficients:
$$R + T = \frac{(k_1 - k_2)^2 + 4k_1 k_2}{(k_1 + k_2)^2} = \frac{(k_1 + k_2)^2}{(k_1 + k_2)^2} = 1$$

---

**Practice Question 4.1.1:**  
A beam of particles of energy $E$ approaches a potential downward step:
$$V(x) = \begin{cases} 0, & x < 0 \\ -V_0, & x \ge 0 \end{cases} \quad (V_0 > 0)$$
Find the reflection coefficient $R$ and transmission coefficient $T$ as functions of the ratio $E/V_0$.

---

### Problem 4.1.2 (Zettili Section 4.5)
**Original Question:**  
For a rectangular barrier of width $a$ and height $V_0$:
$$V(x) = \begin{cases} 0, & x < 0 \\ V_0, & 0 \le x \le a \\ 0, & x > a \end{cases}$$
Derive the transmission coefficient for $E < V_0$ (quantum tunneling) and establish the wide-barrier approximation.

**Answer:**  
Region wave functions:
- $x < 0$: $\psi_1(x) = A e^{ik_1 x} + B e^{-ik_1 x}$, with $k_1 = \frac{\sqrt{2mE}}{\hbar}$
- $0 \le x \le a$: $\psi_2(x) = C e^{k_2' x} + D e^{-k_2' x}$, with $k_2' = \frac{\sqrt{2m(V_0 - E)}}{\hbar}$
- $x > a$: $\psi_3(x) = F e^{ik_1 x}$

Boundary matching:
At $x = 0$:
$$A + B = C + D, \quad ik_1(A - B) = k_2'(C - D)$$
At $x = a$:
$$C e^{k_2' a} + D e^{-k_2' a} = F e^{ik_1 a}, \quad k_2'(C e^{k_2' a} - D e^{-k_2' a}) = ik_1 F e^{ik_1 a}$$

Solving for $C$ and $D$ in terms of $F$:
$$C = \frac{F}{2}\left(1 + \frac{ik_1}{k_2'}\right)e^{(ik_1 - k_2')a}, \quad D = \frac{F}{2}\left(1 - \frac{ik_1}{k_2'}\right)e^{(ik_1 + k_2')a}$$
Substituting into the $x = 0$ equations yields:
$$\frac{A}{F} = e^{ik_1 a}\left[ \cosh(k_2' a) + \frac{i(k_2'^2 - k_1^2)}{2k_1 k_2'}\sinh(k_2' a) \right]$$
The transmission coefficient $T = |F/A|^2$:
$$T = \left[ \cosh^2(k_2' a) + \frac{(k_2'^2 - k_1^2)^2}{4k_1^2 k_2'^2}\sinh^2(k_2' a) \right]^{-1}$$
Using $\cosh^2\theta = 1 + \sinh^2\theta$:
$$T = \left[ 1 + \frac{(k_1^2 + k_2'^2)^2}{4k_1^2 k_2'^2}\sinh^2(k_2' a) \right]^{-1} = \left[ 1 + \frac{V_0^2}{4E(V_0 - E)}\sinh^2(k_2' a) \right]^{-1}$$

*Wide-barrier limit ($k_2' a \gg 1$):*  
$\sinh(k_2' a) \approx \frac{1}{2}e^{k_2' a}$, so:
$$T \approx \frac{16E(V_0 - E)}{V_0^2}e^{-2k_2' a} = 16\frac{E}{V_0}\left(1 - \frac{E}{V_0}\right)\exp\left(-\frac{2a}{\hbar}\sqrt{2m(V_0 - E)}\right)$$

---

**Practice Question 4.1.2:**  
For a rectangular barrier with $E > V_0$, show that the transmission coefficient is:
$$T = \left[ 1 + \frac{V_0^2}{4E(E - V_0)}\sin^2(k_2 a) \right]^{-1}, \quad k_2 = \frac{\sqrt{2m(E - V_0)}}{\hbar}$$
Determine the values of $E$ where perfect transmission ($T = 1$) occurs.

---

## 4.2 Delta-Function Potentials

### Problem 4.2.1 (Griffiths Problem 2.43 / Zettili Problem 4.4)
**Original Question:**  
Consider an attractive delta-function potential:
$$V(x) = -\alpha \delta(x), \quad \alpha > 0$$
1. Solve for the bound-state energy and normalized wave function.  
2. For scattering states ($E > 0$), calculate the transmission and reflection coefficients.

**Answer:**  
1. **Bound state ($E < 0$):**  
   Let $\kappa = \frac{\sqrt{-2mE}}{\hbar} > 0$. For $x \neq 0$, $\psi''(x) = \kappa^2\psi(x)$.  
   Requiring $\psi(\pm\infty) = 0$:
   $$\psi(x) = \begin{cases} A e^{\kappa x}, & x < 0 \\ A e^{-\kappa x}, & x > 0 \end{cases} = A e^{-\kappa |x|}$$
   Integrating the Schrödinger equation across $x = 0$:
   $$\left.\frac{d\psi}{dx}\right|_{0^+} - \left.\frac{d\psi}{dx}\right|_{0^-} = -\frac{2m\alpha}{\hbar^2}\psi(0)$$
   $$(-\kappa A) - (\kappa A) = -\frac{2m\alpha}{\hbar^2}A \implies -2\kappa = -\frac{2m\alpha}{\hbar^2} \implies \kappa = \frac{m\alpha}{\hbar^2}$$
   Bound-state energy:
   $$E = -\frac{\hbar^2\kappa^2}{2m} = -\frac{m\alpha^2}{2\hbar^2}$$
   Normalization:
   $$\int_{-\infty}^\infty |A|^2 e^{-2\kappa|x|} dx = \frac{|A|^2}{\kappa} = 1 \implies A = \sqrt{\kappa} = \frac{\sqrt{m\alpha}}{\hbar}$$
   $$\psi(x) = \frac{\sqrt{m\alpha}}{\hbar} e^{-m\alpha|x|/\hbar^2}$$

2. **Scattering states ($E > 0$):**  
   Let $k = \frac{\sqrt{2mE}}{\hbar}$.
   $$\psi(x) = \begin{cases} A e^{ikx} + B e^{-ikx}, & x < 0 \\ F e^{ikx}, & x > 0 \end{cases}$$
   - Continuity at $x = 0$: $A + B = F$
   - Derivative discontinuity:
     $$ik F - ik(A - B) = -\frac{2m\alpha}{\hbar^2} F \implies F - (A - B) = \frac{2im\alpha}{\hbar^2 k}F$$
     $$2B = \frac{2im\alpha}{\hbar^2 k}F \implies B = \frac{im\alpha}{\hbar^2 k}F$$
     $$A = F - B = \left(1 - \frac{im\alpha}{\hbar^2 k}\right)F \implies \frac{F}{A} = \frac{1}{1 - \frac{im\alpha}{\hbar^2 k}}$$
   Reflection and transmission coefficients:
   $$T = \left|\frac{F}{A}\right|^2 = \frac{1}{1 + \left(\frac{m\alpha}{\hbar^2 k}\right)^2} = \frac{1}{1 + \frac{m\alpha^2}{2\hbar^2 E}}$$
   $$R = 1 - T = \frac{1}{1 + \frac{2\hbar^2 E}{m\alpha^2}}$$

---

**Practice Question 4.2.1:**  
Consider a repulsive delta-function barrier $V(x) = +\alpha\delta(x)$ with $\alpha > 0$.  
1. Explain why no bound states exist.  
2. Compute the reflection and transmission coefficients for incident particles of energy $E$.

---

### Problem 4.2.2 (Griffiths Problem 2.43 / Zettili Problem 4.5)
**Original Question:**  
Consider a double delta-function well:
$$V(x) = -\alpha[\delta(x + a) + \delta(x - a)], \quad \alpha > 0$$
Find the transcendental equations determining the bound-state energies for even and odd states. Determine the condition on $\alpha$ and $a$ for the existence of an odd bound state.

**Answer:**  
For $E < 0$, let $\kappa = \frac{\sqrt{-2mE}}{\hbar}$. The potential is symmetric, so solutions have definite parity.
1. **Even solutions:**
   $$\psi_+(x) = \begin{cases} B e^{-\kappa x}, & x > a \\ C\cosh(\kappa x), & 0 \le x \le a \\ B e^{\kappa x}, & x < -a \end{cases}$$
   Continuity at $x = a$:
   $$B e^{-\kappa a} = C\cosh(\kappa a)$$
   Derivative jump at $x = a$:
   $$\psi_+'(a^+) - \psi_+'(a^-) = -\frac{2m\alpha}{\hbar^2}\psi_+(a)$$
   $$-\kappa B e^{-\kappa a} - \kappa C\sinh(\kappa a) = -\frac{2m\alpha}{\hbar^2}C\cosh(\kappa a)$$
   Substituting $B e^{-\kappa a} = C\cosh(\kappa a)$ and dividing by $C\cosh(\kappa a)$:
   $$-\kappa - \kappa\tanh(\kappa a) = -\frac{2m\alpha}{\hbar^2} \implies \tanh(\kappa a) = \frac{2m\alpha}{\hbar^2\kappa} - 1$$

2. **Odd solutions:**
   $$\psi_-(x) = \begin{cases} B e^{-\kappa x}, & x > a \\ C\sinh(\kappa x), & 0 \le x \le a \\ -B e^{\kappa x}, & x < -a \end{cases}$$
   Continuity at $x = a$: $B e^{-\kappa a} = C\sinh(\kappa a)$.  
   Derivative jump at $x = a$:
   $$-\kappa B e^{-\kappa a} - \kappa C\cosh(\kappa a) = -\frac{2m\alpha}{\hbar^2}C\sinh(\kappa a)$$
   Dividing by $C\sinh(\kappa a)$:
   $$-\kappa - \kappa\coth(\kappa a) = -\frac{2m\alpha}{\hbar^2} \implies \coth(\kappa a) = \frac{2m\alpha}{\hbar^2\kappa} - 1 \implies \tanh(\kappa a) = \left(\frac{2m\alpha}{\hbar^2\kappa} - 1\right)^{-1}$$

3. **Condition for odd bound state:**  
   As $\kappa \to 0$, $\coth(\kappa a) \to \frac{1}{\kappa a}$. The eigenvalue condition becomes:
   $$\frac{1}{\kappa a} \approx \frac{2m\alpha}{\hbar^2\kappa} \implies \frac{1}{a} < \frac{2m\alpha}{\hbar^2} \implies a > \frac{\hbar^2}{2m\alpha}$$
   An odd bound state exists if and only if $a > \frac{\hbar^2}{2m\alpha}$. In contrast, exactly one even bound state exists for all values of $\alpha > 0$ and $a > 0$.

---

**Practice Question 4.2.2:**  
Consider the asymmetric double delta potential $V(x) = -\alpha\delta(x+a) + \alpha\delta(x-a)$ ($\alpha > 0$). Derive the eigenvalue equation for bound states ($E < 0$) and show that at most one bound state can exist.

---

### Problem 4.2.3 (Griffiths Problem 2.47 / Zettili Problem 4.7)
**Original Question:**  
A particle of mass $m$ is confined in an infinite square well of width $a$ ($0 \le x \le a$) with an attractive delta potential at its center:
$$V(x) = -V_0\delta(x - a/2), \quad V_0 > 0$$
Derive the transcendental equation for the energy eigenvalues of the symmetric states.

**Answer:**  
For $x \neq a/2$, $\psi''(x) = -k^2\psi(x)$ with $k = \frac{\sqrt{2mE}}{\hbar}$.
Boundary conditions at the walls: $\psi(0) = \psi(a) = 0$.
For symmetric states about the well center $x = a/2$:
$$\psi(x) = \begin{cases} A\sin(kx), & 0 \le x \le a/2 \\ A\sin[k(a - x)], & a/2 \le x \le a \end{cases}$$
The wave function is automatically continuous at $x = a/2$.
The discontinuity in the derivative at $x = a/2$ is:
$$\left.\frac{d\psi}{dx}\right|_{a/2^+} - \left.\frac{d\psi}{dx}\right|_{a/2^-} = -\frac{2mV_0}{\hbar^2}\psi(a/2)$$
$$-kA\cos(ka/2) - kA\cos(ka/2) = -\frac{2mV_0}{\hbar^2}A\sin(ka/2)$$
$$-2k\cos(ka/2) = -\frac{2mV_0}{\hbar^2}\sin(ka/2)$$
$$\tan\left(\frac{ka}{2}\right) = \frac{\hbar^2 k}{mV_0}$$
Writing this in terms of $E$:
$$\tan\left(\sqrt{\frac{ma^2 E}{2\hbar^2}}\right) = \frac{\hbar^2}{mV_0}\sqrt{\frac{2mE}{\hbar^2}} = \sqrt{\frac{2\hbar^2 E}{m V_0^2}}$$
*(Antisymmetric states have $\psi(a/2) = 0$; they feel no effect from the delta function, yielding unperturbed energies $E_n = \frac{n^2\pi^2\hbar^2}{2ma^2}$ for even integers $n$).*

---

**Practice Question 4.2.3:**  
A particle is confined in an infinite square well with walls at $x = 0$ and $x = a$. A repulsive delta-function barrier $V(x) = +V_0\delta(x - a/2)$ ($V_0 > 0$) is placed at the center.  
1. Find the eigenvalue equation for the even-parity states (with respect to the center).  
2. Show that in the limit $V_0 \to \infty$, the energy levels converge to those of a well of width $a/2$.

---

# 5. Potential Wells and Asymmetric Systems

## 5.1 The Half-Harmonic Oscillator

### Problem 5.1.1 (Griffiths Problem 2.41 / Zettili Problem 4.9)
**Original Question:**  
Find the allowed energy eigenvalues and corresponding eigenfunctions of the half-harmonic oscillator:
$$V(x) = \begin{cases} \infty, & x \le 0 \\ \frac{1}{2}m\omega^2 x^2, & x > 0 \end{cases}$$

**Answer:**  
For $x > 0$, the spatial Schrödinger equation is that of the standard harmonic oscillator:
$$-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + \frac{1}{2}m\omega^2 x^2 \psi = E\psi$$
The infinite potential wall at $x \le 0$ requires the boundary condition:
$$\psi(0) = 0$$
The solutions to the symmetric harmonic oscillator divide into even and odd states:
- Even states ($n = 0, 2, 4, \dots$) have $\psi_n(0) \neq 0$.
- Odd states ($n = 1, 3, 5, \dots$) have $\psi_n(0) = 0$.

Only the odd parity wave functions vanish at the origin and satisfy the boundary condition. Thus, the allowed states are the odd states of the full oscillator, renormalized over $x \in [0, \infty)$:
$$E_k = \left(n + \frac{1}{2}\right)\hbar\omega = \left(2k + 1 + \frac{1}{2}\right)\hbar\omega = \left(2k + \frac{3}{2}\right)\hbar\omega, \quad k = 0, 1, 2, \dots$$
Normalizing over the half-line $[0, \infty)$ introduces an additional factor of $\sqrt{2}$:
$$\psi_k(x) = \sqrt{2}\,\psi_{2k+1}^{\text{full}}(x), \quad x > 0$$
The ground state energy of the half oscillator is:
$$E_0 = \frac{3}{2}\hbar\omega$$

---

**Practice Question 5.1.1:**  
Consider a particle subject to the three-dimensional central potential $V(r) = \frac{1}{2}m\omega^2 r^2$ for $r \ge 0$. By setting $u(r) = r R(r)$ for states with orbital angular momentum $l = 0$, show that the radial equation maps directly onto the half-harmonic oscillator and find the radial ground state energy.

---

## 5.2 Linear Gravitational Potential (The Bouncing Ball)

### Problem 5.2.1 (Griffiths Problem 2.59 / Zettili Problem 4.18)
**Original Question:**  
Consider a quantum particle of mass $m$ bouncing vertically and elastically on an impenetrable horizontal surface under uniform gravity:
$$V(z) = \begin{cases} \infty, & z \le 0 \\ mgz, & z > 0 \end{cases}$$
1. Formulate the time-independent Schrödinger equation and express the energy levels in terms of the zeros of the Airy function.  
2. Determine the numerical energy of the ground state and first excited state using the known zeros $R_0 = -2.338$ and $R_1 = -4.088$.

**Answer:**  
1. For $z > 0$:
   $$-\frac{\hbar^2}{2m}\frac{d^2\psi(z)}{dz^2} + mgz\psi(z) = E\psi(z) \implies \frac{d^2\psi}{dz^2} - \frac{2m}{\hbar^2}(mgz - E)\psi = 0$$
   Introduce the dimensionless variable:
   $$u = \left(\frac{2m^2 g}{\hbar^2}\right)^{1/3}\left(z - \frac{E}{mg}\right)$$
   The differential equation becomes the standard Airy differential equation:
   $$\frac{d^2\psi}{du^2} - u\psi = 0$$
   The physically acceptable solution that vanishes as $z \to \infty$ ($u \to \infty$) is the Airy function $\text{Ai}(u)$:
   $$\psi(z) = C \text{Ai}\left[\left(\frac{2m^2 g}{\hbar^2}\right)^{1/3}\left(z - \frac{E}{mg}\right)\right]$$
   The boundary condition at the rigid floor $\psi(0) = 0$ requires:
   $$\text{Ai}\left[-\left(\frac{2m^2 g}{\hbar^2}\right)^{1/3}\frac{E}{mg}\right] = \text{Ai}\left[-\left(\frac{2}{mg^2\hbar^2}\right)^{1/3}E\right] = 0$$
   Let $R_n$ denote the $n$-th zero of $\text{Ai}(x)$ along the negative real axis ($\text{Ai}(R_n) = 0$):
   $$-\left(\frac{2}{mg^2\hbar^2}\right)^{1/3}E_n = R_n \implies E_n = -R_n\left(\frac{mg^2\hbar^2}{2}\right)^{1/3}, \quad n = 0, 1, 2, \dots$$

2. Ground state and first excited state:
   $$E_0 = -(-2.338)\left(\frac{mg^2\hbar^2}{2}\right)^{1/3} = 2.338\left(\frac{mg^2\hbar^2}{2}\right)^{1/3}$$
   $$E_1 = -(-4.088)\left(\frac{mg^2\hbar^2}{2}\right)^{1/3} = 4.088\left(\frac{mg^2\hbar^2}{2}\right)^{1/3}$$

---

**Practice Question 5.2.1:**  
Use the WKB approximation connection formula $\int_0^{z_{\max}} \sqrt{2m(E - mgz)}\, dz = \left(n - \frac{1}{4}\right)\pi\hbar$ to estimate the energy eigenvalues $E_n$ for the bouncing ball and compare the approximate prefactor for $n = 1$ with the exact Airy root $2.338$.