# Chapter V: Free Electron Theory of Metals

## 1. Classical Free Electron Theory (Drude–Lorentz Model)

### Core Assumptions
- A metal consists of an array of fixed positive ion cores surrounded by valence (conduction) electrons that move freely within the volume.
- Electron-electron Coulomb repulsion is neglected.
- The electrostatic potential due to the positive ion cores is taken to be uniform and constant inside the metal, conventionally set to $V = 0$. Consequently, the total energy of a conduction electron is entirely kinetic.
- Mutual electrostatic attraction between electrons and ion cores confines the conduction electrons within the crystal boundaries. The interior potential is lower than the potential outside (vacuum) by an amount $V_0$, establishing a finite potential barrier at the metal surface.
- Conduction electrons behave analogously to molecules in an ideal gas (the "free electron gas"), but with two distinctions:
  1. Conduction electrons carry net negative charge ($e$), whereas ideal gas particles are neutral.
  2. The electron number density ($n \sim 10^{28}\text{ m}^{-3}$) is orders of magnitude greater than that of an ordinary gas.
- In Lorentz's formulation (1909), the electron gas is treated using classical Maxwell–Boltzmann statistics under thermal equilibrium.

### Successes
1. **Ohm's Law:** In the absence of an applied electric field, electrons move randomly with no net current. Under an applied electric field $\mathcal{E}$, electrons undergo directional drift acceleration interspersed with elastic scattering against ion cores, establishing a steady-state drift current proportional to voltage.
2. **Wiedemann–Franz Law:** Because electrons carry both charge and thermal energy independently of crystal structure, the ratio of electrical conductivity ($\sigma$) to thermal conductivity ($K$) is constant at a fixed temperature:
   $$\frac{\sigma}{K} = \text{constant}$$
3. **Optical Properties:** Explains total opacity and metallic lustre via the absorption of incident electromagnetic radiation by conduction electrons, inducing forced oscillations and isotropic re-radiation.

### Failures and Shortcomings
1. **Temperature Dependence of Resistivity:** Classical theory predicts electrical resistivity $\rho \propto \sqrt{T}$, whereas experimentally for metals, $\rho \propto T$.
2. **Electronic Heat Capacity:** Maxwell–Boltzmann equipartition assigns each electron a thermal energy of $\frac{3}{2} k_B T$, yielding an electronic heat capacity $C_v = \frac{3}{2} N k_B = \frac{3}{2} R$ per mole. Experimentally, the electronic specific heat of metals at room temperature is $\lesssim 1\%$ of this value and varies linearly with $T$.
3. **Paramagnetic Susceptibility:** Classical statistics predicts a strong Curie-type temperature dependence ($\chi \propto 1/T$), whereas the observed Pauli paramagnetism in non-ferromagnetic metals is nearly temperature-independent and substantially smaller.
4. **Mean Free Path:** Classical theory fails to explain the extremely long electron mean free paths observed at low temperatures ($\sim 10^8$ to $10^9$ interatomic spacings, or $> 1\text{ cm}$).

---

## 2. Sommerfeld Quantum Free Electron Theory

Sommerfeld replaced classical Maxwell–Boltzmann statistics with quantum Fermi–Dirac statistics and applied the Schrödinger wave equation to conduction electrons confined in potential boxes, enforcing the Pauli exclusion principle.

### 2.1 Free Electron Gas in a One-Dimensional Box
Consider an electron of mass $m$ confined to a 1D line of length $L$ bounded by infinite potential barriers:
$$V(x) = \begin{cases} 0 & 0 < x < L \\ \infty & x \le 0,\; x \ge L \end{cases}$$

The 1D time-independent Schrödinger equation inside the well ($V=0$):
$$\frac{d^2\psi_n}{dx^2} + \frac{2m}{\hbar^2}E_n\psi_n = 0$$

General solution:
$$\psi_n(x) = A\sin(kx) + B\cos(kx), \quad \text{where } k = \frac{\sqrt{2mE_n}}{\hbar}$$

Boundary conditions $\psi_n(0) = 0$ and $\psi_n(L) = 0$ require:
- $B = 0$
- $\sin(kL) = 0 \implies k = \frac{n\pi}{L}, \quad n = 1, 2, 3, \dots$

Allowed energy eigenvalues:
$$E_n = \frac{\hbar^2}{2m}\left(\frac{n\pi}{L}\right)^2 = \frac{n^2 h^2}{8mL^2}, \quad E_n \propto n^2$$

Normalized wave function:
$$\int_0^L |\psi_n(x)|^2 dx = 1 \implies A = \sqrt{\frac{2}{L}}$$
$$\psi_n(x) = \sqrt{\frac{2}{L}}\sin\left(\frac{n\pi}{L}x\right)$$

#### Fermi Energy and Ground-State Energy (1D)
According to the Pauli exclusion principle, each orbital state labeled by principal quantum number $n$ can hold at most two electrons with opposite spin quantum numbers ($m_s = \pm 1/2$).
For $N$ electrons at $T = 0\text{ K}$, the electrons fill levels up to $n_F = N/2$. The highest filled energy level is the Fermi energy $E_F$:
$$E_F = \frac{\hbar^2}{2m}\left(\frac{n_F \pi}{L}\right)^2 = \frac{\hbar^2}{2m}\left(\frac{N\pi}{2L}\right)^2 = \frac{h^2}{8m}\left(\frac{N}{2L}\right)^2$$

Total ground-state energy $E_0$:
$$E_0 = 2 \sum_{n=1}^{N/2} E_n = 2\left(\frac{h^2}{8mL^2}\right)\sum_{n=1}^{N/2} n^2$$
Using $\sum_{n=1}^{s} n^2 \approx \frac{s^3}{3}$ for $s = N/2 \gg 1$:
$$E_0 = 2\left(\frac{h^2}{8mL^2}\right)\frac{1}{3}\left(\frac{N}{2}\right)^3 = \frac{1}{3} N \left[\frac{h^2}{8mL^2}\left(\frac{N}{2}\right)^2\right] = \frac{1}{3} N E_F$$

The average kinetic energy per electron in 1D at $T = 0\text{ K}$:
$$\bar{E}_0 = \frac{E_0}{N} = \frac{1}{3} E_F$$

#### Density of States (1D)
The density of states $D(E)$ is defined as the number of electron states per unit energy interval, including spin degeneracy ($g_s = 2$):
$$D(E) = 2\frac{dn}{dE}$$
From $E = \frac{h^2 n^2}{8mL^2}$:
$$\frac{dE}{dn} = \frac{h^2 n}{4mL^2} \implies \frac{dn}{dE} = \frac{4mL^2}{h^2 n}$$
Substituting $n = \left(\frac{8mL^2 E}{h^2}\right)^{1/2}$:
$$D(E) = 2\left(\frac{4mL^2}{h^2}\right)\left(\frac{h^2}{8mL^2 E}\right)^{1/2} = \left(\frac{8mL^2}{h^2 E}\right)^{1/2} = \frac{4L}{h}\left(\frac{m}{2E}\right)^{1/2} \propto E^{-1/2}$$

---

### 2.2 Free Electron Gas in Three Dimensions
For a cubical crystal of volume $V = L^3$ with $V(r) = 0$ inside:
$$\nabla^2\psi_{\mathbf{k}}(\mathbf{r}) + \frac{2mE_{\mathbf{k}}}{\hbar^2}\psi_{\mathbf{k}}(\mathbf{r}) = 0$$

Using periodic (Born–von Kármán) boundary conditions:
$$\psi(x+L, y, z) = \psi(x, y+L, z) = \psi(x, y, z+L) = \psi(x, y, z)$$

Traveling plane wave solution:
$$\psi_{\mathbf{k}}(\mathbf{r}) = \frac{1}{\sqrt{V}} e^{i\mathbf{k}\cdot\mathbf{r}} = \frac{1}{\sqrt{V}} e^{i(k_x x + k_y y + k_z z)}$$

Allowed wave vector components:
$$k_x = \frac{2\pi n_x}{L}, \quad k_y = \frac{2\pi n_y}{L}, \quad k_z = \frac{2\pi n_z}{L} \quad (n_x, n_y, n_z \in \mathbb{Z})$$

Volume per allowed $\mathbf{k}$-state in $\mathbf{k}$-space:
$$\Omega_k = \left(\frac{2\pi}{L}\right)^3 = \frac{8\pi^3}{V}$$

Energy eigenvalues:
$$E_{\mathbf{k}} = \frac{\hbar^2 k^2}{2m} = \frac{\hbar^2}{2m}(k_x^2 + k_y^2 + k_z^2)$$

Momentum and velocity:
$$\mathbf{p} = -i\hbar\nabla \implies \mathbf{p}\psi_{\mathbf{k}} = \hbar\mathbf{k}\psi_{\mathbf{k}}$$
$$\mathbf{v} = \frac{\hbar\mathbf{k}}{m}$$

#### Fermi Sphere and Fermi Parameters (3D at $T = 0\text{ K}$)
In the ground state, $N$ electrons fill $\mathbf{k}$-space uniformly out to a spherical surface of radius $k_F$ (the Fermi sphere). Accounting for spin degeneracy:
$$N = 2 \times \frac{\text{Volume of Fermi sphere}}{\text{Volume per }\mathbf{k}\text{-state}} = 2\left[\frac{\frac{4}{3}\pi k_F^3}{(2\pi/L)^3}\right] = \frac{V}{3\pi^2}k_F^3$$

1. **Fermi Wave Vector:**
   $$k_F = \left(3\pi^2 \frac{N}{V}\right)^{1/3} = (3\pi^2 n)^{1/3}$$
2. **Fermi Energy:**
   $$E_F = \frac{\hbar^2 k_F^2}{2m} = \frac{\hbar^2}{2m}\left(3\pi^2 \frac{N}{V}\right)^{2/3} = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3} = \frac{h^2}{8m}\left(\frac{3n}{\pi}\right)^{2/3}$$
3. **Total Electron Count in Terms of $E_F$:**
   $$N = \frac{V}{3\pi^2}\left(\frac{2mE_F}{\hbar^2}\right)^{3/2}$$
4. **Fermi Velocity:**
   $$v_F = \frac{\hbar k_F}{m} = \frac{\hbar}{m}(3\pi^2 n)^{1/3}$$

#### 3D Density of States $D(E)$
At $T = 0\text{ K}$:
$$N = \int_0^{E_F} D(E)\,dE = \frac{V}{3\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2} E_F^{3/2}$$
Differentiating with respect to energy $E$:
$$D(E) = \frac{dN}{dE} = \frac{V}{2\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2} E^{1/2} \propto E^{1/2}$$

At the Fermi level $E = E_F$:
$$D(E_F) = \frac{3}{2}\frac{N}{E_F}$$
Logarithmic differentiation form:
$$\ln N = \frac{3}{2}\ln E_F + \text{const} \implies \frac{dN}{N} = \frac{3}{2}\frac{dE_F}{E_F} \implies D(E_F) = \frac{dN}{dE_F} = \frac{3}{2}\frac{N}{E_F}$$

#### Average Kinetic Energy (3D at $T = 0\text{ K}$)
$$\bar{E}_0 = \frac{1}{N}\int_0^{E_{F0}} E\, D(E)\, dE = \frac{1}{N} \frac{V}{2\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2} \int_0^{E_{F0}} E^{3/2}\, dE$$
$$\bar{E}_0 = \frac{1}{N} \frac{V}{2\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2} \left(\frac{2}{5} E_{F0}^{5/2}\right)$$
Substituting $N = \frac{V}{3\pi^2}\left(\frac{2m E_{F0}}{\hbar^2}\right)^{3/2}$:
$$\bar{E}_0 = \frac{3}{5} E_{F0}$$

---

## 3. Fermi–Dirac Distribution and Temperature Effects

The probability that an electronic state with energy $E$ is occupied at absolute temperature $T$ is given by the Fermi–Dirac distribution:
$$f(E) = \frac{1}{\exp\left(\frac{E - E_F}{k_B T}\right) + 1}$$

- **At $T = 0\text{ K}$:**
  $$f(E) = \begin{cases} 1 & \text{for } E < E_{F0} \\ 0 & \text{for } E > E_{F0} \end{cases}$$
  The distribution is a strict Heaviside step function. $E_{F0}$ is the energy of the topmost filled state.
- **At $T > 0\text{ K}$:**
  $f(E_F) = 1/2$ at all temperatures. The position of $E_F$ shifts weakly with temperature:
  $$E_F(T) \approx E_{F0}\left[1 - \frac{\pi^2}{12}\left(\frac{k_B T}{E_{F0}}\right)^2\right]$$
- Only electrons within a thermal energy slice of width $\sim k_B T$ about $E_F$ can absorb thermal energy and scatter into unoccupied states. Deep-lying states ($E_F - E \gg k_B T$) remain completely filled because Pauli exclusion prevents transition to already occupied adjacent levels.

### Electronic Specific Heat
Classically, all $N$ electrons absorb thermal energy, predicting $C_v = \frac{3}{2} N k_B$.
In quantum theory, only a fraction of electrons proportional to $\frac{k_B T}{E_F} = \frac{T}{T_F}$ participates in thermal excitations, where the Fermi temperature is defined as:
$$T_F = \frac{E_F}{k_B}$$
Effective number of excited electrons:
$$N_{\text{eff}} \approx N\left(\frac{k_B T}{E_F}\right) = N\left(\frac{T}{T_F}\right)$$
Thermal kinetic energy and heat capacity:
$$E_{\text{thermal}} \approx N_{\text{eff}} k_B T \approx N k_B \frac{T^2}{T_F}$$
$$C_v = \frac{\partial E_{\text{thermal}}}{\partial T} \approx \frac{3}{2} N k_B \left(\frac{T}{T_F}\right)$$
Because $T_F \sim 10^4\text{ to } 10^5\text{ K}$, at room temperature ($T \approx 300\text{ K}$) the ratio $\frac{T}{T_F} \sim 0.01$, suppressing the electronic heat capacity to $\sim 1\%$ of the classical prediction and reproducing the observed linear temperature dependence ($C_v \propto T$).

---
## *
# Chapter VI: Band Theory of Solids

## 1. Physical Basis and Origin of Band Gaps

The free electron model fails to explain:
1. Why solids divide into conductors, semiconductors, and insulators.
2. The sign and magnitude of the Hall coefficient.
3. The temperature dependence of semiconductor resistivity.

The failure originates from assuming a constant electrostatic potential throughout the crystal. In a real lattice, conduction electrons interact with the periodic array of fixed positive ion cores. 

By taking the ion cores to be fixed at lattice sites with interatomic spacing (lattice constant) $a$, the effective one-electron potential satisfies spatial periodicity:
$$V(x) = V(x + a)$$

The motion of an electron in this periodic potential leads to:
1. The splitting of the energy continuum into alternating bands of allowed energy states separated by forbidden energy regions (band gaps).
2. Energy functions $E(\mathbf{k})$ that are periodic in reciprocal space.
3. Formation of band gaps at Brillouin zone boundaries ($k = \pm n\pi/a$), which corresponds to constructive Bragg reflection of electron waves:
   $$k = \frac{2\pi}{\lambda} = \frac{n\pi}{a} \implies n\lambda = 2a$$
   At these wave vectors, incident and reflected waves interfere to produce standing waves, preventing propagation through the lattice and opening energy discontinuities.

---

## 2. Bloch's Theorem

### Formal Statement
For a one-dimensional Schrödinger equation with a periodic potential $V(x) = V(x+a)$:
$$\frac{d^2\psi}{dx^2} + \frac{2m}{\hbar^2}\big(E - V(x)\big)\psi = 0$$
the solutions are modulated plane waves:
$$\psi(x) = e^{\pm i k x} u_k(x)$$
where $u_k(x)$ shares the periodicity of the underlying lattice:
$$u_k(x) = u_k(x + a)$$

In three dimensions:
$$\psi_{\mathbf{k}}(\mathbf{r}) = e^{i\mathbf{k}\cdot\mathbf{r}} u_{\mathbf{k}}(\mathbf{r}), \quad \text{with } u_{\mathbf{k}}(\mathbf{r} + \mathbf{R}) = u_{\mathbf{k}}(\mathbf{r})$$

---

### Proof of Bloch's Theorem
Let $f(x)$ and $g(x)$ be two real, linearly independent solutions to the second-order differential equation:
$$\frac{d^2\psi}{dx^2} + \frac{2m}{\hbar^2}[E - V(x)]\psi = 0$$

General solution:
$$\psi(x) = A f(x) + B g(x)$$

Because $V(x+a) = V(x)$, $f(x+a)$ and $g(x+a)$ are also solutions and can be expanded in the basis $\{f(x), g(x)\}$:
$$f(x+a) = \alpha_1 f(x) + \alpha_2 g(x)$$
$$g(x+a) = \beta_1 f(x) + \beta_2 g(x)$$
where $\alpha_1, \alpha_2, \beta_1, \beta_2$ are real functions of energy $E$.

Under spatial translation by $a$:
$$\psi(x+a) = A f(x+a) + B g(x+a) = (A\alpha_1 + B\beta_1)f(x) + (A\alpha_2 + B\beta_2)g(x)$$

To satisfy the eigenvalue condition $\psi(x+a) = \lambda\psi(x) = \lambda [A f(x) + B g(x)]$:
$$A\alpha_1 + B\beta_1 = \lambda A$$
$$A\alpha_2 + B\beta_2 = \lambda B$$

This system yields non-trivial solutions for $A$ and $B$ only if:
$$\begin{vmatrix} \alpha_1 - \lambda & \beta_1 \\ \alpha_2 & \beta_2 - \lambda \end{vmatrix} = 0 \implies \lambda^2 - (\alpha_1 + \beta_2)\lambda + (\alpha_1\beta_2 - \alpha_2\beta_1) = 0$$

#### Evaluation of the Wronskian Determinant
From the Schrödinger equation for $f(x)$ and $g(x)$:
$$\frac{d^2 g}{dx^2} + \frac{2m}{\hbar^2}[E - V(x)]g = 0$$
$$\frac{d^2 f}{dx^2} + \frac{2m}{\hbar^2}[E - V(x)]f = 0$$

Multiplying the first by $f(x)$, the second by $g(x)$, and subtracting:
$$f(x)\frac{d^2 g}{dx^2} - g(x)\frac{d^2 f}{dx^2} = 0 \implies \frac{d}{dx}\left[f(x)\frac{dg}{dx} - g(x)\frac{df}{dx}\right] = 0$$
The Wronskian $W(x) = f(x)\frac{dg}{dx} - g(x)\frac{df}{dx}$ is independent of $x$:
$$W(x) = \text{constant}$$

Evaluating $W(x+a)$:
$$W(x+a) = f(x+a)g'(x+a) - g(x+a)f'(x+a) = (\alpha_1\beta_2 - \alpha_2\beta_1) W(x)$$
Because $W(x+a) = W(x) \neq 0$:
$$\alpha_1\beta_2 - \alpha_2\beta_1 = 1$$

The characteristic equation simplifies to:
$$\lambda^2 - (\alpha_1 + \beta_2)\lambda + 1 = 0$$

#### Analysis of Roots
1. **Case I: $(\alpha_1 + \beta_2)^2 < 4$**
   The roots are complex conjugates with product $\lambda_1 \lambda_2 = 1$. They can be parameterized as:
   $$\lambda_1 = e^{ika}, \quad \lambda_2 = e^{-ika} \quad (k \in \mathbb{R})$$
   Then:
   $$\psi(x+a) = e^{\pm ika}\psi(x)$$
   Setting $\psi(x) = e^{\pm ikx}u_k(x)$ yields $u_k(x+a) = u_k(x)$.
   Because $|\lambda| = 1$, the wave function remains bounded for all $x \to \pm\infty$. These roots define the **allowed energy bands**.

2. **Case II: $(\alpha_1 + \beta_2)^2 > 4$**
   The roots are real:
   $$\lambda_1 = e^{\mu a}, \quad \lambda_2 = e^{-\mu a} \quad (\mu \in \mathbb{R},\; \mu \neq 0)$$
   This produces solutions of the form $\psi(x) = e^{\pm \mu x} u(x)$.
   As $x \to \pm\infty$, $|\psi(x)| \to \infty$. These states cannot be normalized and are physically unacceptable. These regions define the **forbidden energy bands (band gaps)**.

---

## 3. The Kronig–Penney Model

The periodic potential is approximated as an array of rectangular potential wells and barriers of period $(a+b)$:
$$V(x) = \begin{cases} 0 & 0 < x < a \quad (\text{well}) \\ V_0 & -b < x < 0 \quad (\text{barrier}) \end{cases}$$

For $E < V_0$, define real wave numbers:
$$\alpha^2 = \frac{2mE}{\hbar^2}, \quad \beta^2 = \frac{2m(V_0 - E)}{\hbar^2}$$

Schrödinger equations:
- Region I ($0 < x < a$): $\frac{d^2\psi_1}{dx^2} + \alpha^2\psi_1 = 0$
- Region II ($-b < x < 0$): $\frac{d^2\psi_2}{dx^2} - \beta^2\psi_2 = 0$

Using Bloch's theorem, $\psi(x) = e^{ikx} u_k(x)$:
- $u_1(x) = A e^{i(\alpha - k)x} + B e^{-i(\alpha + k)x}$
- $u_2(x) = C e^{(\beta - ik)x} + D e^{-(\beta + ik)x}$

Applying boundary conditions of continuity for $u$ and $\frac{du}{dx}$ at $x = 0$ and matching periodicity at $x = a$ and $x = -b$:
$$\begin{aligned}
u_1(0) &= u_2(0) \\
\left.\frac{du_1}{dx}\right|_{x=0} &= \left.\frac{du_2}{dx}\right|_{x=0} \\
u_1(a) &= u_2(-b) \\
\left.\frac{du_1}{dx}\right|_{x=a} &= \left.\frac{du_2}{dx}\right|_{x=-b}
\end{aligned}$$

Setting the determinant of coefficients $(A, B, C, D)$ to zero yields:
$$\frac{\beta^2 - \alpha^2}{2\alpha\beta}\sinh(\beta b)\sin(\alpha a) + \cosh(\beta b)\cos(\alpha a) = \cos[k(a+b)]$$

### Delta-Function Potential Limit
Let the barrier become a delta barrier: $V_0 \to \infty$, $b \to 0$, such that the barrier strength $V_0 b$ remains finite.
Then:
$$\sinh(\beta b) \to \beta b, \quad \cosh(\beta b) \to 1, \quad \frac{\beta^2 - \alpha^2}{2\alpha\beta} \to \frac{\beta}{2\alpha} = \frac{m V_0}{\alpha \hbar^2}$$

The dispersion relation simplifies to:
$$P\frac{\sin(\alpha a)}{\alpha a} + \cos(\alpha a) = \cos(ka)$$
where $P$ is the dimensionless barrier strength parameter:
$$P = \frac{m V_0 b a}{\hbar^2}$$

### Physical Consequences
Since $-1 \le \cos(ka) \le 1$, real values of $k$ exist only when:
$$-1 \le P\frac{\sin(\alpha a)}{\alpha a} + \cos(\alpha a) \le 1$$

1. **Band Structure:** The electron energy spectrum consists of alternating allowed bands (where the condition is met) and forbidden gaps (where the function exceeds $[-1, 1]$).
2. **Band Width Variation:** As $\alpha a$ (or energy $E$) increases, the amplitude of $P\frac{\sin(\alpha a)}{\alpha a}$ decreases, causing the allowed bands to broaden and the forbidden gaps to narrow.
3. **Limiting Case $P \to \infty$ (Isolated Atoms):**
   $$\sin(\alpha a) = 0 \implies \alpha a = \pm n\pi \implies E_n = \frac{n^2 \pi^2 \hbar^2}{2ma^2} = \frac{n^2 h^2}{8ma^2}$$
   The allowed bands collapse into discrete bound atomic levels.
4. **Limiting Case $P \to 0$ (Free Electron Gas):**
   $$\cos(\alpha a) = \cos(ka) \implies \alpha = k \implies E = \frac{\hbar^2 k^2}{2m}$$
   Forbidden gaps vanish, recovering the continuous parabolic spectrum of the free electron model.

---

## 4. Representations of Energy Bands ($E-k$ Relations)

Because $\cos(ka) = \cos[(k + 2\pi n / a)a]$, energy $E(k)$ is periodic in reciprocal space with period $\frac{2\pi}{a}$.

1. **Periodic (Repeated) Zone Scheme:**
   $E(k)$ is plotted periodically over all reciprocal space across every Brillouin zone.
2. **Extended Zone Scheme:**
   Different energy bands are plotted in consecutive Brillouin zones:
   - 1st Zone: $-\frac{\pi}{a} \le k \le \frac{\pi}{a}$
   - 2nd Zone: $\frac{\pi}{a} < |k| \le \frac{2\pi}{a}$
   - $n$th Zone: $\frac{(n-1)\pi}{a} < |k| \le \frac{n\pi}{a}$
   Discontinuities open at every boundary $k = \pm \frac{n\pi}{a}$.
3. **Reduced Zone Scheme:**
   Using translation by a reciprocal lattice vector $G = \frac{2\pi n}{a}$, all bands are mapped back into the first Brillouin zone ($-\frac{\pi}{a} \le k \le \frac{\pi}{a}$):
   $$k_{\text{reduced}} = k - G$$

---
## *
## 5. Capacity of an Energy Band

For a 1D crystal of length $L$ containing $N$ primitive unit cells ($L = N a$) under periodic boundary conditions:
$$e^{i k L} = 1 \implies k = \frac{2\pi n}{L}, \quad n \in \mathbb{Z}$$
The number of allowed wave vectors within interval $dk$ is:
$$dn = \frac{L}{2\pi}dk$$

For the first Brillouin zone spanning $-\frac{\pi}{a} \le k \le \frac{\pi}{a}$ (total width $\Delta k = \frac{2\pi}{a}$):
$$N_{\text{states}} = \frac{L}{2\pi}\left(\frac{2\pi}{a}\right) = \frac{L}{a} = N$$

- The number of distinct orbital $k$-states per band equals the number of primitive cells $N$.
- Accounting for spin degeneracy ($g_s = 2$), each band holds at most:
  $$N_{\text{max}} = 2N \text{ electrons}$$

---

## 6. Dynamics of Electrons in a Band

### 6.1 Electron Group Velocity
An electron state with wave vector $k$ is a wave packet moving with group velocity $v_g$:
$$v = v_g = \frac{d\omega}{dk} = \frac{1}{\hbar}\frac{dE}{dk}$$

- For free electrons ($E = \frac{\hbar^2 k^2}{2m}$):
  $$v = \frac{\hbar k}{m} \propto k$$
- In a periodic potential:
  - At band extrema ($k = 0$ and zone boundaries $k = \pm \pi/a$), the slope vanishes: $\frac{dE}{dk} = 0 \implies v = 0$ (standing wave formation).
  - Velocity peaks at the inflection point $k_0$ where $\frac{d^2E}{dk^2} = 0$.

### 6.2 Effective Mass ($m^*$)
Work done by an external electric field $\mathcal{E}$ over time $dt$:
$$dE = e\mathcal{E} v\, dt = \frac{e\mathcal{E}}{\hbar}\frac{dE}{dk}dt$$
Since $dE = \frac{dE}{dk}dk$:
$$\hbar \frac{dk}{dt} = e\mathcal{E} = F_{\text{ext}} \implies \frac{dp_{\text{crystal}}}{dt} = F_{\text{ext}}$$

Differentiating velocity with respect to time:
$$a = \frac{dv}{dt} = \frac{1}{\hbar}\frac{d}{dt}\left(\frac{dE}{dk}\right) = \frac{1}{\hbar}\frac{d^2E}{dk^2}\frac{dk}{dt} = \frac{e\mathcal{E}}{\hbar^2}\frac{d^2E}{dk^2}$$

Comparing with Newton's second law ($a = \frac{e\mathcal{E}}{m^*}$):
$$m^* = \frac{\hbar^2}{\frac{d^2E}{dk^2}}$$

- **Lower half of the band ($\frac{d^2E}{dk^2} > 0$):** $m^* > 0$. The electron accelerates in the direction of the applied force.
- **At the inflection point ($\frac{d^2E}{dk^2} = 0$):** $m^* \to \pm\infty$.
- **Upper half of the band ($\frac{d^2E}{dk^2} < 0$):** $m^* < 0$. The electron decelerates under an accelerating field due to momentum transfer to the crystal lattice via Bragg reflection.
- **Hole Concept:** A nearly filled band with a vacancy near the top behaves as a collection of positively charged quasi-particles ($+e$) with positive effective mass $m_h^* = -m_e^* > 0$.

---

## 7. Classification of Solids: Metals, Semimetals, Semiconductors, and Insulators

The effective number of conduction electrons $N_{\text{eff}}$ in a band filled up to wave vector $k_1$ is:
$$f_k = \frac{m}{m^*} = \frac{m}{\hbar^2}\frac{d^2E}{dk^2}$$
$$N_{\text{eff}} = 2 \int_{-k_1}^{k_1} f_k \left(\frac{L}{2\pi}\right)dk = \frac{2Lm}{\pi\hbar^2}\int_0^{k_1}\frac{d^2E}{dk^2}dk = \left.\frac{2Lm}{\pi\hbar^2}\frac{dE}{dk}\right|_{k=k_1}$$

- For a **completely filled band** ($k_1 = \pi/a$):
  $$\left.\frac{dE}{dk}\right|_{k=\pi/a} = 0 \implies N_{\text{eff}} = 0$$
  A completely filled band carries zero net current under an applied field.

### Diagnostic Criteria
1. **Insulators:** 
   - Completely filled valence band separated from an empty conduction band by a wide band gap ($E_g \gtrsim 5\text{ to } 6\text{ eV}$, e.g., diamond).
   - Thermal energy at normal temperatures is insufficient to excite electrons across $E_g$. Conductivity is near zero.
2. **Semiconductors:**
   - Similar band structure to insulators, but with a narrow band gap ($E_g \sim 1\text{ eV}$, e.g., $\text{Si} \approx 1.1\text{ eV}$, $\text{Ge} \approx 0.7\text{ eV}$).
   - At $T = 0\text{ K}$, semiconductors are insulators.
   - At $T > 0\text{ K}$, thermal excitation promotes electrons into the conduction band, leaving holes in the valence band. Conductivity increases exponentially with temperature:
     $$\sigma_{\text{semi}} \propto e^{-E_g / (2 k_B T)}$$
3. **Metals:**
   - Characterized by a partially filled band (e.g., alkali metals with 1 electron per atom filling half of the $2N$ capacity), or by the overlapping of a filled valence band with an empty conduction band (e.g., divalent alkaline earth metals).
   - Abundant empty states exist directly adjacent to the Fermi level, producing high electrical and thermal conductivities.
   - Conductivity decreases with increasing temperature due to electron-phonon scattering:
     $$\sigma_{\text{metal}} \propto \frac{1}{T}$$