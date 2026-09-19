/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics II · Module IV: Scattering Theory
   Worked Problems & Step-by-Step Proof Exercises (QUESTIONS)
   Textbooks: David J. Griffiths 3e (Chapter 11) & Nouredine Zettili 2e (Chapter 11)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof QUESTIONS === 'undefined') { var QUESTIONS = []; }

QUESTIONS.push(
  {
    id: 'w.8.1.1', sec: '8.1', marks: 5,
    title: 'Classical Scattering from a Hard Sphere',
    tests: ['c.8.1.1'],
    prompt: `<p>A classical particle of mass $m$ is incident with impact parameter $b$ on a rigid, impenetrable sphere of radius $a$.
<ol>
  <li>Using the law of specular reflection, derive the relation between impact parameter $b$ and scattering angle $\theta$.</li>
  <li>Calculate the differential cross section $\\frac{d\\sigma}{d\\Omega}$ and the total cross section $\\sigma_{\\text{tot}}$.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Impact Parameter and Scattering Angle.</b><br>
From the geometry of reflection at a sphere, the angle of incidence equals the angle of reflection $\\alpha$.<br>
The impact parameter is $b = a\\sin\\alpha$.<br>
The deflection angle is $\\theta = \\pi - 2\\alpha \\implies \\alpha = \\frac{\\pi - \\theta}{2} = \\frac{\\pi}{2} - \\frac{\\theta}{2}$.<br>
Therefore:
$$\\boxed{b(\\theta) = a\\sin\\left( \\frac{\\pi}{2} - \\frac{\\theta}{2} \\right) = a\\cos\\left( \\frac{\\theta}{2} \\right)}$$
<b>Part 2: Cross Sections.</b><br>
Compute the derivative:
$$\\frac{db}{d\\theta} = -\\frac{a}{2}\\sin\\left( \\frac{\\theta}{2} \\right) \\implies \\left| \\frac{db}{d\\theta} \\right| = \\frac{a}{2}\\sin\\left( \\frac{\\theta}{2} \\right)$$
The differential cross section is:
$$\\frac{d\\sigma}{d\\Omega} = \\frac{b}{\\sin\\theta}\\left| \\frac{db}{d\\theta} \\right| = \\frac{a\\cos(\\theta/2)}{\\sin\\theta} \\frac{a}{2}\\sin\\left(\\frac{\\theta}{2}\\right)$$
Using the double angle identity $\\sin\\theta = 2\\sin(\\theta/2)\\cos(\\theta/2)$:
$$\\boxed{\\frac{d\\sigma}{d\\Omega} = \\frac{a^2 \\cos(\\theta/2)\\sin(\\theta/2)}{4\\sin(\\theta/2)\\cos(\\theta/2)} = \\frac{a^2}{4}}$$
The scattering is <b>isotropic</b> (identical in all directions).<br>
The total cross section is:
$$\\boxed{\\sigma_{\\text{tot}} = \\int \\frac{d\\sigma}{d\\Omega} d\\Omega = \\frac{a^2}{4} \\int d\\Omega = \\frac{a^2}{4}(4\\pi) = \\pi a^2}$$
This matches the classical geometric cross-sectional area of the sphere!</p>`,
    tested: 'Classical scattering kinematics and cross section calculation.',
    trap: 'Thinking the classical cross section is 4π a². The classical area is π a²; 4π a² is the low-energy quantum cross section!'
  },
  {
    id: 'w.8.3.1', sec: '8.3', marks: 5,
    title: 'Verification of the Optical Theorem for s and p Partial Waves',
    tests: ['c.8.3.1', 'c.8.3.2'],
    prompt: `<p>In an elastic scattering experiment, only the $s$-wave ($l=0$) and $p$-wave ($l=1$) phase shifts are non-zero ($\delta_0$ and $\delta_1$).
<ol>
  <li>Write down the explicit scattering amplitude $f(\\theta)$ in terms of $\\delta_0, \\delta_1, k$, and $\\cos\\theta$.</li>
  <li>Calculate the total cross section $\\sigma_{\\text{tot}}$ by integrating $|f(\\theta)|^2$ over all solid angles.</li>
  <li>Calculate $\\text{Im}[f(0)]$ and verify the Optical Theorem $\\sigma_{\\text{tot}} = \\frac{4\\pi}{k}\\text{Im}[f(0)]$.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Scattering Amplitude $f(\\theta)$.</b><br>
Using $f(\\theta) = \\frac{1}{k}\\sum_{l=0}^1 (2l+1)e^{i\\delta_l}\\sin\\delta_l P_l(\\cos\\theta)$ with $P_0 = 1, P_1 = \\cos\\theta$:
$$\\boxed{f(\\theta) = \\frac{1}{k}\\left[ e^{i\\delta_0}\\sin\\delta_0 + 3e^{i\\delta_1}\\sin\\delta_1 \\cos\\theta \\right]}$$
<b>Part 2: Total Cross Section $\\sigma_{\\text{tot}}$.</b><br>
Integrate over all angles using $\\int P_l P_{l'} d\\Omega = \\frac{4\\pi}{2l+1}\\delta_{ll'}$:
$$\\sigma_{\\text{tot}} = \\int |f(\\theta)|^2 d\\Omega = \\frac{1}{k^2} \\left[ 4\\pi \\sin^2\\delta_0 + 9\\sin^2\\delta_1 \\left( \\frac{4\\pi}{3} \\right) \\right] = \\boxed{\\frac{4\\pi}{k^2}\\left[ \\sin^2\\delta_0 + 3\\sin^2\\delta_1 \\right]}$$
Notice that the interference term proportional to $\\cos\\theta$ integrates to zero identically!<br>
<b>Part 3: Forward Scattering Amplitude and Optical Theorem.</b><br>
At $\\theta = 0$, $\\cos(0) = 1$:
$$f(0) = \\frac{1}{k}\\left[ e^{i\\delta_0}\\sin\\delta_0 + 3e^{i\\delta_1}\\sin\\delta_1 \\right] = \\frac{1}{k}\\left[ (\\cos\\delta_0 + i\\sin\\delta_0)\\sin\\delta_0 + 3(\\cos\\delta_1 + i\\sin\\delta_1)\\sin\\delta_1 \\right]$$
The imaginary part is:
$$\\text{Im}[f(0)] = \\frac{1}{k}\\left[ \\sin^2\\delta_0 + 3\\sin^2\\delta_1 \\right]$$
Multiply by $\\frac{4\\pi}{k}$:
$$\\frac{4\\pi}{k}\\text{Im}[f(0)] = \\frac{4\\pi}{k^2}\\left[ \\sin^2\\delta_0 + 3\\sin^2\\delta_1 \\right] = \\sigma_{\\text{tot}} \\quad \\checkmark$$
The Optical Theorem is verified exactly.</p>`,
    tested: 'Partial wave interference, orthogonality integration, and Optical Theorem verification.',
    trap: 'Trying to include cross terms between l=0 and l=1 in the total cross section. Legendre orthogonality eliminates all cross terms in σ_tot!'
  },
  {
    id: 'w.8.4.1', sec: '8.4', marks: 5,
    title: 'First Born Approximation for a Spherical Delta-Shell Potential',
    tests: ['c.8.4.2', 'c.8.4.3'],
    prompt: `<p>A particle of mass $m$ is scattered by a spherical delta-shell potential:
$$V(r) = \\gamma \\, \\delta(r - a)$$
where $\\gamma$ and $a$ are constants.
<ol>
  <li>Using the First Born Approximation for central potentials, compute the scattering amplitude $f^{(1)}(\\theta)$.</li>
  <li>Find the differential cross section $\\frac{d\\sigma}{d\\Omega}$.</li>
  <li>Determine the low-energy limit ($ka \\ll 1$) of the total cross section.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Scattering Amplitude.</b><br>
For a central potential:
$$f^{(1)}(\\theta) = -\\frac{2m}{\\hbar^2 q} \\int_0^\\infty r V(r) \\sin(qr) \\, dr$$
Substitute $V(r) = \\gamma \\delta(r - a)$:
$$f^{(1)}(\\theta) = -\\frac{2m\\gamma}{\\hbar^2 q} \\int_0^\\infty r \\delta(r - a) \\sin(qr) \\, dr = -\\frac{2m\\gamma}{\\hbar^2 q} a \\sin(qa) = \\boxed{-\\frac{2m\\gamma a}{\\hbar^2} \\frac{\\sin(qa)}{qa}}$$
where $q = 2k\\sin(\\theta/2)$.<br>
<b>Part 2: Differential Cross Section.</b><br>
$$\\boxed{\\frac{d\\sigma}{d\\Omega} = |f^{(1)}(\\theta)|^2 = \\left( \\frac{2m\\gamma a}{\\hbar^2} \\right)^2 \\left( \\frac{\\sin(qa)}{qa} \\right)^2}$$
<b>Part 3: Low-Energy Limit ($ka \\ll 1$).</b><br>
As $k \\to 0$, $q = 2k\\sin(\\theta/2) \\to 0$.<br>
Since $\\lim_{qa \\to 0} \\frac{\\sin(qa)}{qa} = 1$:
$$f^{(1)}(\\theta) \\approx -\\frac{2m\\gamma a}{\\hbar^2}$$
The low-energy scattering is isotropic, with total cross section:
$$\\boxed{\\sigma_{\\text{tot}} = 4\\pi |f|^2 = 4\\pi \\left( \\frac{2m\\gamma a}{\\hbar^2} \\right)^2 = \\frac{16\\pi m^2 \\gamma^2 a^2}{\\hbar^4}}$$</p>`,
    tested: 'First Born approximation applied to spherical delta potentials and low-energy limits.',
    trap: 'Forgetting that q = 2k sin(θ/2) depends on the scattering angle θ.'
  }
);
