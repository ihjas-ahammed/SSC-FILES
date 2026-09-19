/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics II · Module I: The Central Potential & Hydrogen Atom
   OMR / Objective Question Bank (OBJECTIVE)
   Types: MCQ (Single Choice), MSQ (Multiple Choice), NAT (Numerical Answer)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof OBJECTIVE === 'undefined') { var OBJECTIVE = []; }

OBJECTIVE.push(
  {
    id: 'o.5.1.1', sec: '5.1', type: 'MCQ', marks: 1, neg: -0.33, time: 60,
    tests: ['c.5.1.3'],
    prompt: `<p>For a particle moving in an arbitrary spherically symmetric potential $V(r)$, which of the following operators does NOT commute with the Hamiltonian $\\hat{H}$?</p>`,
    options: [
      { k: 'A', t: '$\\hat{L}^2$' },
      { k: 'B', t: '$\\hat{L}_z$' },
      { k: 'C', t: '$\\hat{L}_x$' },
      { k: 'D', t: '$\\hat{p}_x$' }
    ],
    answer: 'D',
    solution: `<p>For a spherically symmetric potential $V(r)$, the system is invariant under spatial rotations. Therefore, all components of the orbital angular momentum $\\hat{\\mathbf{L}}$ (including $\\hat{L}_x, \\hat{L}_y, \\hat{L}_z$) as well as $\\hat{L}^2$ commute with the Hamiltonian:
$$[\\hat{H}, \\hat{L}_i] = 0, \\qquad [\\hat{H}, \\hat{L}^2] = 0$$
However, linear momentum $\\hat{p}_x = -i\\hbar\\frac{\\partial}{\\partial x}$ does NOT commute with $V(r)$ because $V(r)$ breaks spatial translational invariance: $[\\hat{p}_x, V(r)] = -i\\hbar \\frac{\\partial V}{\\partial x} \\neq 0$.</p>`,
    tested: 'Symmetries and conservation laws in central potentials.',
    trap: 'Choosing L_x or L_y because they do not commute with L_z. Each individual component of L commutes with H!'
  },
  {
    id: 'o.5.2.1', sec: '5.2', type: 'MCQ', marks: 1, neg: -0.33, time: 60,
    tests: ['c.5.2.3'],
    prompt: `<p>What is the spatial parity of the spherical harmonic $Y_3^{-2}(\\theta, \\phi)$ under space inversion $\\mathbf{r} \\to -\\mathbf{r}$?</p>`,
    options: [
      { k: 'A', t: 'Even ($+1$)' },
      { k: 'B', t: 'Odd ($-1$)' },
      { k: 'C', t: 'Imaginary ($+i$)' },
      { k: 'D', t: 'It does not have a definite parity' }
    ],
    answer: 'B',
    solution: `<p>The spatial parity operation $\\hat{\\Pi}$ inverts coordinates: $\\theta \\to \\pi - \\theta$ and $\\phi \\to \\phi + \\pi$.<br>
The parity of any spherical harmonic $Y_l^m(\\theta, \\phi)$ depends exclusively on the orbital quantum number $l$:
$$\\hat{\\Pi} Y_l^m(\\theta, \\phi) = (-1)^l Y_l^m(\\theta, \\phi)$$
Here $l = 3$. Therefore:
$$\\hat{\\Pi} Y_3^{-2} = (-1)^3 Y_3^{-2} = -Y_3^{-2}$$
The state has strictly <b>odd parity ($-1$)</b>. The magnetic quantum number $m = -2$ does not affect the parity.</p>`,
    tested: 'Spatial parity eigenvalue of spherical harmonics.',
    trap: 'Using the magnetic quantum number m to determine parity: (-1)^m or (-1)^{-2} = +1 is WRONG.'
  },
  {
    id: 'o.5.2.2', sec: '5.2', type: 'MCQ', marks: 2, neg: -0.66, time: 90,
    tests: ['c.5.2.4'],
    prompt: `<p>A particle in a central potential is described by the angular wave function:
$$f(\\theta, \\phi) = A \\left[ 3 Y_2^1(\\theta, \\phi) - 4 Y_3^2(\\theta, \\phi) \\right]$$
If a measurement of $\\hat{L}^2$ is performed, what is the probability of obtaining the eigenvalue $6\\hbar^2$?</p>`,
    options: [
      { k: 'A', t: '$3/7$' },
      { k: 'B', t: '$9/25$' },
      { k: 'C', t: '$16/25$' },
      { k: 'D', t: '$9/16$' }
    ],
    answer: 'B',
    solution: `<p>The eigenvalue equation for $\\hat{L}^2$ is $\\hat{L}^2 Y_l^m = l(l+1)\\hbar^2 Y_l^m$.<br>
For $l=2$, the eigenvalue is $2(2+1)\\hbar^2 = 6\\hbar^2$.<br>
For $l=3$, the eigenvalue is $3(3+1)\\hbar^2 = 12\\hbar^2$.<br>
The probability of obtaining $6\\hbar^2$ is the probability of finding the state in the $l=2$ subspace:
$$P(l=2) = \\frac{|c_{2,1}|^2}{|c_{2,1}|^2 + |c_{3,2}|^2} = \\frac{|3|^2}{|3|^2 + |-4|^2} = \\frac{9}{9 + 16} = \\frac{9}{25} = 0.36$$</p>`,
    tested: 'Measurement probability for orbital angular momentum L² in superpositions.',
    trap: 'Forgetting to square the expansion coefficients.'
  },
  {
    id: 'o.5.3.1', sec: '5.3', type: 'MCQ', marks: 1, neg: -0.33, time: 60,
    tests: ['c.5.3.1'],
    prompt: `<p>In the effective 1D radial Schrödinger equation for a particle of mass $m$ in a central potential $V(r)$, the effective potential is $V_{\\text{eff}}(r) = V(r) + \\frac{C}{r^2}$. What is the value of the constant $C$ for a $d$-wave state ($l=2$)?</p>`,
    options: [
      { k: 'A', t: '$\\dfrac{\\hbar^2}{2m}$' },
      { k: 'B', t: '$\\dfrac{2\\hbar^2}{m}$' },
      { k: 'C', t: '$\\dfrac{3\\hbar^2}{m}$' },
      { k: 'D', t: '$\\dfrac{6\\hbar^2}{m}$' }
    ],
    answer: 'C',
    solution: `<p>The centrifugal barrier term in the effective potential is:
$$\\frac{\\hbar^2 l(l+1)}{2m r^2}$$
For a $d$-state, $l = 2$. Therefore:
$$\\frac{\\hbar^2 (2)(3)}{2m r^2} = \\frac{6\\hbar^2}{2m r^2} = \\frac{3\\hbar^2}{m r^2}$$
Thus $C = \\frac{3\\hbar^2}{m}$.</p>`,
    tested: 'Centrifugal potential barrier formula in effective radial Schrödinger equation.',
    trap: 'Forgetting the 2m in the denominator, which reduces 6 to 3.'
  },
  {
    id: 'o.5.3.2', sec: '5.3', type: 'NAT', marks: 2, neg: 0, time: 90,
    tests: ['c.5.3.4'],
    prompt: `<p>What is the degree of degeneracy (number of linearly independent eigenstates sharing the same energy) of the first excited state of a particle in an infinite spherical well?</p>`,
    answer: '3',
    solution: `<p>In an infinite spherical well of radius $a$, the energy eigenvalues are $E_{nl} = \\frac{\\hbar^2 \\beta_{nl}^2}{2ma^2}$, where $\\beta_{nl}$ is the $n$-th zero of the spherical Bessel function $j_l(x)$.<br>
The smallest roots are:
- Ground state: $n=1, l=0 \\implies \\beta_{1,0} = \\pi \\approx 3.142$ (Degeneracy $2l+1 = 1$).
- First excited state: $n=1, l=1 \\implies \\beta_{1,1} \\approx 4.493$.<br>
For $l=1$, the magnetic quantum number takes $2l+1 = 3$ values ($m = -1, 0, +1$).<br>
Therefore, the first excited state has a degeneracy of exactly <b>3</b>.</p>`,
    tested: 'Energy ordering and degeneracy of lowest states in the infinite spherical well.',
    trap: 'Assuming n=2, l=0 is the first excited state (which has root 2π ≈ 6.28, much higher in energy).'
  },
  {
    id: 'o.5.4.1', sec: '5.4', type: 'NAT', marks: 2, neg: 0, time: 90,
    tests: ['c.5.4.4'],
    prompt: `<p>Excluding electron spin, what is the total orbital degeneracy of the $n = 4$ energy level of the hydrogen atom?</p>`,
    answer: '16',
    solution: `<p>The orbital degeneracy of the $n$-th level of the hydrogen atom is given by:
$$g_n = \\sum_{l=0}^{n-1}(2l + 1) = n^2$$
For $n = 4$:
$$g_4 = 4^2 = 16$$
Explicitly:
- $l=0$ ($4s$): 1 state
- $l=1$ ($4p$): 3 states
- $l=2$ ($4d$): 5 states
- $l=3$ ($4f$): 7 states
Total = $1 + 3 + 5 + 7 = 16$.</p>`,
    tested: 'Orbital degeneracy formula g_n = n² for hydrogen atom.',
    trap: 'Multiplying by 2 for spin when the prompt explicitly states "Excluding electron spin".'
  },
  {
    id: 'o.5.4.2', sec: '5.4', type: 'NAT', marks: 2, neg: 0, time: 90,
    tests: ['c.5.4.5'],
    prompt: `<p>How many radial nodes (zeros in the interval $0 < r < \\infty$) exist in the radial wave function $R_{4,1}(r)$ of a hydrogen atom in the $4p$ state?</p>`,
    answer: '2',
    solution: `<p>The number of radial nodes $n_r$ for a hydrogen eigenstate with quantum numbers $(n, l)$ is:
$$n_r = n - l - 1$$
For the $4p$ state:
$$n = 4, \\qquad l = 1$$
$$n_r = 4 - 1 - 1 = 2$$
The radial wavefunction crosses zero at exactly 2 finite radii.</p>`,
    tested: 'Radial node counting theorem n_r = n - l - 1.',
    trap: 'Counting r = 0 or r = ∞ as radial nodes.'
  },
  {
    id: 'o.5.4.3', sec: '5.4', type: 'MCQ', marks: 2, neg: -0.66, time: 90,
    tests: ['c.5.4.6'],
    prompt: `<p>Which of the following expressions correctly gives the expectation value $\\left\\langle \\frac{1}{r} \\right\\rangle$ for an electron in the state $|n, l, m\\rangle$ of the hydrogen atom?</p>`,
    options: [
      { k: 'A', t: '$\\dfrac{1}{n a_0}$' },
      { k: 'B', t: '$\\dfrac{1}{n^2 a_0}$' },
      { k: 'C', t: '$\\dfrac{1}{[n - l(l+1)] a_0}$' },
      { k: 'D', t: '$\\dfrac{2}{3 n^2 a_0}$' }
    ],
    answer: 'B',
    solution: `<p>For any hydrogen eigenstate $|n, l, m\\rangle$, the expectation value of $1/r$ is:
$$\\left\\langle \\frac{1}{r} \\right\\rangle_{nlm} = \\frac{1}{n^2 a_0}$$
This is independent of both $l$ and $m$, which directly underlies the fact that the potential energy expectation value $\\langle V \\rangle = -\\frac{e^2}{4\\pi\\varepsilon_0}\\langle 1/r \\rangle = 2E_n$ depends only on $n$!</p>`,
    tested: 'Expectation value ⟨1/r⟩ in hydrogen states and connection to Bohr energies.',
    trap: 'Selecting 1/(n a₀) or including l-dependent corrections (which appear in ⟨r⟩ and ⟨r²⟩, but not in ⟨1/r⟩!).'
  },
  {
    id: 'o.5.4.4', sec: '5.4', type: 'MSQ', marks: 2, neg: 0, time: 120,
    tests: ['c.5.4.5', 'c.5.4.6'],
    prompt: `<p>Select ALL correct statements concerning the ground state ($1s$) of the hydrogen atom:</p>`,
    options: [
      { k: 'A', t: 'The spatial wavefunction $\\psi_{100}(\\mathbf{r})$ has its maximum value at $r = 0$.' },
      { k: 'B', t: 'The radial probability density $P(r) = r^2 |R_{10}(r)|^2$ has its maximum value at the Bohr radius $r = a_0$.' },
      { k: 'C', t: 'The expectation value of the radius is $\\langle r \\rangle = a_0$.' },
      { k: 'D', t: 'The expectation value of kinetic energy is $\\langle T \\rangle = +13.6\\text{ eV}$.' }
    ],
    answer: ['A', 'B', 'D'],
    solution: `<p><b>Analysis of Options:</b>
<ul>
  <li><b>A is correct:</b> $\\psi_{100}(r) = \\frac{1}{\\sqrt{\\pi a_0^3}}e^{-r/a_0}$ decreases monotonically with $r$, reaching its absolute maximum at $r = 0$.</li>
  <li><b>B is correct:</b> The radial probability density is $P(r) = \\frac{4}{a_0^3}r^2 e^{-2r/a_0}$. Setting $dP/dr = 0$ gives $r = a_0$.</li>
  <li><b>C is FALSE:</b> The average radius is $\\langle r \\rangle = \\frac{3}{2}a_0 = 1.5 a_0 \\neq a_0$.</li>
  <li><b>D is correct:</b> By the Virial Theorem, $\\langle T \\rangle = -E_1 = -(-13.6\\text{ eV}) = +13.6\\text{ eV}$.</li>
</ul></p>`,
    tested: 'Properties of hydrogen 1s state: wavefunction vs probability density, mean vs mode, and Virial theorem.',
    trap: 'Selecting C (confusing most probable distance r_mp = a₀ with expectation value ⟨r⟩ = 1.5 a₀).'
  },
  {
    id: 'o.5.4.5', sec: '5.4', type: 'MCQ', marks: 1, neg: -0.33, time: 60,
    tests: ['c.5.3.2'],
    prompt: `<p>Which of the following hydrogen atomic orbitals has a non-zero probability density at the nucleus ($r = 0$)?</p>`,
    options: [
      { k: 'A', t: '$2p$' },
      { k: 'B', t: '$3d$' },
      { k: 'C', t: '$2s$' },
      { k: 'D', t: '$4f$' }
    ],
    answer: 'C',
    solution: `<p>Near the origin, the radial wavefunction behaves as $R_{nl}(r) \\propto r^l$.<br>
- For any state with $l > 0$ ($p, d, f, \\dots$), $R_{nl}(0) = 0$ because $r^l \\to 0$ as $r \\to 0$.<br>
- For $s$-states ($l = 0$), $r^0 = 1$, so $R_{n0}(0) = \\frac{2}{n^{3/2}a_0^{3/2}} \\neq 0$.<br>
Among the choices, only the <b>$2s$ orbital</b> has $l = 0$, giving non-vanishing probability density at the nucleus.</p>`,
    tested: 'Behavior of atomic wavefunctions near the origin and orbital penetration.',
    trap: 'Confusing radial probability density P(0) (which is 0 for all states due to the r² Jacobian) with wavefunction value |ψ(0)|².'
  }
);
