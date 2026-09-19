/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics II · Module III: Approximation Methods
   OMR / Objective Question Bank (OBJECTIVE)
   Types: MCQ (Single Choice), MSQ (Multiple Choice), NAT (Numerical Answer)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof OBJECTIVE === 'undefined') { var OBJECTIVE = []; }

OBJECTIVE.push(
  {
    id: 'o.7.1.1', sec: '7.1', type: 'MCQ', marks: 1, neg: -0.33, time: 60,
    tests: ['c.7.1.2'],
    prompt: `<p>In time-independent perturbation theory, what can be rigorously stated about the second-order energy correction $E_0^{(2)}$ to the ground state of any non-degenerate quantum system?</p>`,
    options: [
      { k: 'A', t: 'It is always strictly positive ($E_0^{(2)} > 0$)' },
      { k: 'B', t: 'It is always non-positive ($E_0^{(2)} \\le 0$)' },
      { k: 'C', t: 'It is identically zero ($E_0^{(2)} = 0$)' },
      { k: 'D', t: 'Its sign depends on the sign of the perturbation Hamiltonian $\\hat{H}\'$' }
    ],
    answer: 'B',
    solution: `<p>The second-order energy correction is given by:
$$E_0^{(2)} = \\sum_{m \\neq 0} \\frac{|\\langle m^{(0)} | \\hat{H}' | 0^{(0)} \\rangle|^2}{E_0^{(0)} - E_m^{(0)}}$$
Because $E_0^{(0)}$ is the ground state energy, $E_0^{(0)} < E_m^{(0)}$ for all excited states $m \\neq 0$.<br>
Thus every denominator $E_0^{(0)} - E_m^{(0)} < 0$.<br>
Because the numerator $|\\dots|^2 \\ge 0$, every term in the summation is non-positive.<br>
Therefore, $\\boxed{E_0^{(2)} \\le 0}$ always.</p>`,
    tested: 'Ground state lowering theorem in second-order perturbation theory.',
    trap: 'Thinking the sign of H\' changes the sign of E₀^{(2)}. The numerator is squared, so the sign is governed purely by the denominator!'
  },
  {
    id: 'o.7.2.1', sec: '7.2', type: 'MCQ', marks: 2, neg: -0.66, time: 90,
    tests: ['c.7.2.3'],
    prompt: `<p>What is the Landé $g$-factor $g_J$ for an atomic electron in the $^{2}P_{3/2}$ spectroscopic state?</p>`,
    options: [
      { k: 'A', t: '$2/3$' },
      { k: 'B', t: '$4/3$' },
      { k: 'C', t: '$1$' },
      { k: 'D', t: '$2$' }
    ],
    answer: 'B',
    solution: `<p>For the $^{2}P_{3/2}$ state:
- Principal notation $^{2S+1}L_J$: $2S + 1 = 2 \\implies S = 1/2$.
- Spectroscopic symbol $P \\implies L = 1$.
- Total angular momentum index $J = 3/2$.<br>
Using the Landé $g$-factor formula:
$$g_J = 1 + \\frac{J(J+1) - L(L+1) + S(S+1)}{2J(J+1)}$$
Calculate the Casimir invariants:
- $J(J+1) = \\frac{3}{2}\\frac{5}{2} = \\frac{15}{4}$
- $L(L+1) = 1(2) = 2 = \\frac{8}{4}$
- $S(S+1) = \\frac{1}{2}\\frac{3}{2} = \\frac{3}{4}$<br>
Substitute:
$$g_J = 1 + \\frac{\\frac{15}{4} - \\frac{8}{4} + \\frac{3}{4}}{2 \\times \\frac{15}{4}} = 1 + \\frac{10/4}{30/4} = 1 + \\frac{10}{30} = 1 + \\frac{1}{3} = \\boxed{\\frac{4}{3}}$$</p>`,
    tested: 'Calculation of Landé g-factor from atomic term symbols.',
    trap: 'Forgetting to add the leading 1 in g_J = 1 + ...'
  },
  {
    id: 'o.7.2.2', sec: '7.2', type: 'NAT', marks: 2, neg: 0, time: 90,
    tests: ['c.7.2.4'],
    prompt: `<p>In the linear Stark effect on the $n = 2$ energy manifold of the hydrogen atom (total 4 spatial states excluding spin), how many states remain unshifted in energy to first order in the electric field?</p>`,
    answer: '2',
    solution: `<p>The four unperturbed states are $|2s\\rangle, |2p_0\\rangle, |2p_1\\rangle, |2p_{-1}\\rangle$.<br>
The electric field along $z$ only couples $|2s\\rangle$ and $|2p_0\\rangle$ (which share $m=0$ and opposite parity).<br>
These two states split into $\\pm 3e\\mathcal{E}a_0$.<br>
The remaining two states $|2p_1\\rangle$ ($m=+1$) and $|2p_{-1}\\rangle$ ($m=-1$) have zero matrix elements with any other state, so their first-order energy shift is exactly zero.<br>
Therefore, exactly <b>2</b> states remain unshifted.</p>`,
    tested: 'Counting of shifted and unshifted levels in the linear Stark effect.',
    trap: 'Thinking only 1 state is unshifted, or that all 4 states split.'
  },
  {
    id: 'o.7.3.1', sec: '7.3', type: 'MSQ', marks: 2, neg: 0, time: 120,
    tests: ['c.7.3.1'],
    prompt: `<p>Select ALL correct statements regarding the Ritz Variational Method in quantum mechanics:</p>`,
    options: [
      { k: 'A', t: 'The expectation value $\\langle H \\rangle_{\\text{trial}}$ is always greater than or equal to the exact ground state energy $E_{\\text{gs}}$.' },
      { k: 'B', t: 'If a trial wavefunction is chosen to be orthogonal to the exact ground state, minimizing $\\langle H \\rangle$ yields an upper bound to the first excited state energy.' },
      { k: 'C', t: 'The variational method can be used to prove that a 1D attractive potential always has at least one bound state.' },
      { k: 'D', t: 'The variational method provides both an upper bound and a lower bound to the ground state energy.' }
    ],
    answer: ['A', 'B', 'C'],
    solution: `<p><b>Analysis of Options:</b>
<ul>
  <li><b>A is correct:</b> The fundamental variational theorem proves $\\langle H \\rangle_{\\text{trial}} \\ge E_{\\text{gs}}$.</li>
  <li><b>B is correct:</b> When constrained to be orthogonal to the ground state, the expansion starts at $n=1$, guaranteeing $\\langle H \\rangle \\ge E_1$.</li>
  <li><b>C is correct:</b> Using a Gaussian trial function $\\psi(x) = e^{-\\alpha x^2}$ in 1D, as $\\alpha \\to 0$, the potential energy scales as $-\\alpha$ while kinetic energy scales as $+\\alpha^2$. For small $\\alpha$, $\\langle H \\rangle < 0$, rigorously proving a bound state exists!</li>
  <li><b>D is FALSE:</b> The standard Rayleigh-Ritz variational method provides strictly an <i>upper bound</i>, not a lower bound.</li>
</ul></p>`,
    tested: 'Variational principle theorems, excited state bounds, and 1D bound state existence.',
    trap: 'Selecting D: standard variational theory provides NO lower bound (Temple\'s formula requires ⟨H²⟩ and extra spectral knowledge).'
  },
  {
    id: 'o.7.4.1', sec: '7.4', type: 'MCQ', marks: 1, neg: -0.33, time: 60,
    tests: ['c.7.4.3'],
    prompt: `<p>In the WKB quantization condition $\\int p(x) dx = (n - \\gamma)\\pi\\hbar$, what is the value of the phase parameter $\\gamma$ for a particle trapped in a potential well that has one vertical rigid wall and one smooth classical turning point?</p>`,
    options: [
      { k: 'A', t: '$1/2$' },
      { k: 'B', t: '$1/4$' },
      { k: 'C', t: '$3/4$' },
      { k: 'D', t: '$0$' }
    ],
    answer: 'B',
    solution: `<p>At a smooth turning point, the reflection phase shift is $\\pi/2$ (giving a phase contribution of $\\pi/4$).<br>
At an infinite vertical wall, the wavefunction vanishes identically (Dirichlet boundary condition), giving a reflection phase shift of $\\pi$.<br>
Total round-trip phase condition is $\\frac{2}{\\hbar}\\int p dx - \\frac{\\pi}{2} - \\pi = 2n'\\pi \\implies \\int p dx = (n - 1/4)\\pi\\hbar$.<br>
Therefore, $\\boxed{\\gamma = 1/4}$.</p>`,
    tested: 'WKB phase loss parameter for mixed boundary condition wells.',
    trap: 'Confusing 1/4 (one vertical wall) with 1/2 (two smooth walls) or 0 (two vertical walls).'
  }
);
