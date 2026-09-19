/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics II · Module IV: Scattering Theory
   OMR / Objective Question Bank (OBJECTIVE)
   Types: MCQ (Single Choice), MSQ (Multiple Choice), NAT (Numerical Answer)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof OBJECTIVE === 'undefined') { var OBJECTIVE = []; }

OBJECTIVE.push(
  {
    id: 'o.8.1.1', sec: '8.1', type: 'MCQ', marks: 1, neg: -0.33, time: 60,
    tests: ['c.8.1.1'],
    prompt: `<p>In classical scattering off a hard sphere of radius $a$, what is the differential cross section $\\frac{d\\sigma}{d\\Omega}$?</p>`,
    options: [
      { k: 'A', t: '$\\pi a^2$' },
      { k: 'B', t: '$a^2 / 4$' },
      { k: 'C', t: '$a^2 / 2$' },
      { k: 'D', t: '$a^2$' }
    ],
    answer: 'B',
    solution: `<p>For a classical hard sphere, the relationship between impact parameter $b$ and scattering angle $\theta$ is $b = a\\cos(\\theta/2)$.<br>
The differential cross section is:
$$\\frac{d\\sigma}{d\\Omega} = \\frac{b}{\\sin\\theta}\\left|\\frac{db}{d\\theta}\\right| = \\frac{a\\cos(\\theta/2)}{2\\sin(\\theta/2)\\cos(\\theta/2)} \\frac{a}{2}\\sin\\left(\\frac{\\theta}{2}\\right) = \\frac{a^2}{4}$$
Integrating over all $4\\pi$ steradians gives the total geometric cross section $\\sigma_{\\text{tot}} = 4\\pi (a^2/4) = \\pi a^2$.</p>`,
    tested: 'Classical hard sphere differential cross section formula.',
    trap: 'Selecting A (π a²), which is the TOTAL cross section, not the differential cross section!'
  },
  {
    id: 'o.8.3.1', sec: '8.3', type: 'NAT', marks: 2, neg: 0, time: 90,
    tests: ['c.8.3.3'],
    prompt: `<p>In the low-energy limit ($ka \\ll 1$), what is the ratio of the total quantum scattering cross section $\\sigma_{\\text{quantum}}$ of an impenetrable hard sphere of radius $a$ to its classical cross section $\\sigma_{\\text{classical}} = \\pi a^2$?</p>`,
    answer: '4',
    solution: `<p>At low energies ($ka \\ll 1$), only $s$-wave scattering ($l=0$) contributes.<br>
The phase shift is $\\delta_0 = -ka$, yielding scattering amplitude $f_0 = -a$.<br>
The total quantum cross section is:
$$\\sigma_{\\text{quantum}} = 4\\pi |f_0|^2 = 4\\pi a^2$$
The classical cross section is:
$$\\sigma_{\\text{classical}} = \\pi a^2$$
The ratio is:
$$\\frac{\\sigma_{\\text{quantum}}}{\\sigma_{\\text{classical}}} = \\frac{4\\pi a^2}{\\pi a^2} = \\mathbf{4}$$</p>`,
    tested: 'Ratio of low-energy quantum hard sphere cross section to classical geometric area.',
    trap: 'Writing 1 (assuming classical correspondence holds at low energy; classical correspondence holds at high energy ka ≫ 1 where ratio approaches 2, never 1!).'
  },
  {
    id: 'o.8.3.2', sec: '8.3', type: 'MCQ', marks: 1, neg: -0.33, time: 60,
    tests: ['c.8.3.2'],
    prompt: `<p>According to the Optical Theorem, the total elastic scattering cross section $\\sigma_{\\text{tot}}$ is proportional to which quantity?</p>`,
    options: [
      { k: 'A', t: 'The real part of the backward scattering amplitude $\\text{Re}[f(\\pi)]$' },
      { k: 'B', t: 'The imaginary part of the forward scattering amplitude $\\text{Im}[f(0)]$' },
      { k: 'C', t: 'The magnitude of the forward scattering amplitude $|f(0)|^2$' },
      { k: 'D', t: 'The total phase shift $\\sum_l \\delta_l$' }
    ],
    answer: 'B',
    solution: `<p>The Optical Theorem states:
$$\\sigma_{\\text{tot}} = \\frac{4\\pi}{k}\\text{Im}[f(0)]$$
The total cross section is directly proportional to the <b>imaginary part of the forward scattering amplitude $f(0)$</b>.</p>`,
    tested: 'Optical Theorem statement and physical meaning.',
    trap: 'Selecting C (|f(0)|² is the forward differential cross section dσ/dΩ at θ = 0, NOT the total cross section!).'
  },
  {
    id: 'o.8.4.1', sec: '8.4', type: 'MSQ', marks: 2, neg: 0, time: 120,
    tests: ['c.8.4.2', 'c.8.4.3'],
    prompt: `<p>Select ALL correct statements regarding the First Born Approximation in quantum scattering:</p>`,
    options: [
      { k: 'A', t: 'The scattering amplitude $f^{(1)}(\\mathbf{q})$ is proportional to the 3D spatial Fourier transform of the potential $V(\\mathbf{r})$.' },
      { k: 'B', t: 'The magnitude of the momentum transfer is $q = 2k\\sin(\\theta/2)$.' },
      { k: 'C', t: 'For a spherically symmetric potential, the First Born scattering amplitude is always purely real.' },
      { k: 'D', t: 'Applied to the Coulomb potential, the First Born approximation reproduces the classical Rutherford differential cross section.' }
    ],
    answer: ['A', 'B', 'C', 'D'],
    solution: `<p><b>Analysis of Options:</b>
<ul>
  <li><b>A is correct:</b> $f^{(1)}(\\mathbf{q}) = -\\frac{m}{2\\pi\\hbar^2}\\int V(\\mathbf{r})e^{-i\\mathbf{q}\\cdot\\mathbf{r}}d^3\\mathbf{r}$.</li>
  <li><b>B is correct:</b> $|\mathbf{k}_f - \\mathbf{k}_i| = 2k\\sin(\\theta/2)$.</li>
  <li><b>C is correct:</b> For central potentials, $f^{(1)}(\\theta) = -\\frac{2m}{\\hbar^2 q}\\int_0^\\infty r V(r)\\sin(qr)dr$, which is an integral of real functions and therefore purely real! (Notice that because $f^{(1)}$ is real, the First Born approximation cannot satisfy the Optical Theorem $\\text{Im}[f(0)] > 0$; second Born corrections are required).</li>
  <li><b>D is correct:</b> Taking the $\\mu \\to 0$ limit of the Yukawa potential recovers the exact Rutherford formula $d\\sigma/d\\Omega \\propto 1/\\sin^4(\\theta/2)$.</li>
</ul>
All four statements are correct.</p>`,
    tested: 'Core properties and mathematical theorems of the First Born Approximation.',
    trap: 'Failing to realize that for central potentials, the First Born amplitude is purely real.'
  }
);
