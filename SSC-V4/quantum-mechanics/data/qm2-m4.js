/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics II · Module IV: Scattering Theory
   Prescribed Syllabus: PHY7CJ401 (VII Semester BSc Physics Honours, Calicut University)
   Textbooks: David J. Griffiths 3e (Chapter 11) & Nouredine Zettili 2e (Chapter 11)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }

CONCEPTS.push(
  /* ── 8.1 Classical Scattering Theory ────────────────────────────────────── */
  {
    id: 'c.8.1.1', sec: '8.1', kind: 'law', tier: 'core',
    title: 'Classical Scattering Theory: Impact Parameter & Cross Section',
    oneLine: 'In classical scattering, particles incident with impact parameter b in range db scatter into solid angle dΩ, defining differential cross section dσ/dΩ = (b/sinθ)|db/dθ|.',
    statement: `In classical mechanics, a beam of identical particles with uniform cross-sectional intensity $I$ is fired at a target potential $V(\\mathbf{r})$.<br>
Let $b$ be the <b>impact parameter</b> (the perpendicular distance of the initial trajectory from the center of force), and $\\theta$ be the <b>scattering angle</b>.<br>
Particles incident in an annular strip $d\\sigma = 2\\pi b \\, db$ are scattered into solid angle $d\\Omega = 2\\pi \\sin\\theta \\, d\\theta$.<br>
The <b>differential scattering cross section</b> is:
$$\\boxed{\\frac{d\\sigma}{d\\Omega} = \\frac{b}{\\sin\\theta} \\left| \\frac{db}{d\\theta} \\right|}$$
The <b>total scattering cross section</b> $\\sigma_{\\text{tot}}$ is the integral over all $4\\pi$ steradians:
$$\\boxed{\\sigma_{\\text{tot}} = \\int \\frac{d\\sigma}{d\\Omega} \\, d\\Omega = 2\\pi \\int_0^\\pi \\frac{d\\sigma}{d\\Omega} \\sin\\theta \\, d\\theta}$$
For a hard sphere of radius $a$, $b = a\\cos(\\theta/2) \\implies \\frac{d\\sigma}{d\\Omega} = \\frac{a^2}{4}$ (isotropic), giving total classical cross section $\\sigma_{\\text{tot}} = \\pi a^2$.`,
    intuition: `What is a cross section physically? It has dimensions of area ($\text{m}^2$ or barns, $1\\text{ barn} = 10^{-28}\\text{ m}^2$). It represents the effective target area presented by the scatterer to the incoming beam. The differential cross section $d\\sigma/d\\Omega$ tells you how that area is distributed over different angles in space.`,
    needs: ['c.5.1.1'],
    traps: [
      `Forgetting the absolute value $|db/d\\theta|$. Because larger impact parameters $b$ typically produce smaller deflection angles $\\theta$, $db/d\\theta < 0$; cross sections must always be positive!`,
      `Confusing classical total cross section $\\pi a^2$ of a hard sphere with its quantum cross section ($4\\pi a^2$ at low energies).`
    ],
    cards: [
      { q: 'State the classical formula relating differential cross section to impact parameter b and scattering angle θ.', a: '$\\frac{d\\sigma}{d\\Omega} = \\frac{b}{\\sin\\theta}\\left|\\frac{db}{d\\theta}\\right|$.', kind: 'state' },
      { q: 'What is the classical total scattering cross section of a hard sphere of radius a?', a: '$\\sigma_{\\text{tot}} = \\pi a^2$.', kind: 'recall' }
    ]
  },

  /* ── 8.2 Quantum Scattering Theory & Scattering Amplitude ───────────────── */
  {
    id: 'c.8.2.1', sec: '8.2', kind: 'definition', tier: 'core',
    title: 'The Quantum Scattering Wave Function & Scattering Amplitude',
    oneLine: 'In quantum scattering, the asymptotic wavefunction decomposes into an incident plane wave e^{ikz} and an outgoing spherical wave f(θ, φ) e^{ikr}/r.',
    statement: `For a localized scattering potential $V(\\mathbf{r})$ that falls off faster than $1/r$ as $r \\to \\infty$, the stationary scattering state satisfies the asymptotic boundary condition:
$$\\boxed{\\psi(\\mathbf{r}) \\xrightarrow{r \\to \\infty} A \\left( e^{ikz} + f(\\theta, \\phi) \\frac{e^{ikr}}{r} \\right)}$$
where $k = \\frac{\\sqrt{2mE}}{\\hbar}$ is the wave number, $e^{ikz}$ is the <b>incident plane wave</b> propagating along the $+z$ axis, and $\\frac{e^{ikr}}{r}$ is an <b>outgoing spherical wave</b>.<br>
The complex angular coefficient $f(\\theta, \\phi)$ is the <b>scattering amplitude</b>.<br>
<b>Probability Flux & Differential Cross Section:</b>
- Incident probability current density: $J_{\\text{inc}} = \\frac{\\hbar k}{m}|A|^2$.
- Scattered probability current density: $J_{\\text{scat}} = \\frac{\\hbar k}{m}\\frac{|A|^2 |f(\\theta, \\phi)|^2}{r^2}$.<br>
The quantum <b>differential cross section</b> is the ratio of scattered power per solid angle to incident flux:
$$\\boxed{\\frac{d\\sigma}{d\\Omega} = \\frac{J_{\\text{scat}} r^2}{J_{\\text{inc}}} = |f(\\theta, \\phi)|^2}$$
The <b>total cross section</b> is:
$$\\boxed{\\sigma_{\\text{tot}} = \\int |f(\\theta, \\phi)|^2 d\\Omega}$$`,
    intuition: `In quantum mechanics, particles are waves that diffract around the target! The entire physics of the scattering process—the nature of the forces, nuclear resonances, quantum interference—is fully encoded in a single complex function of angle: the scattering amplitude $f(\\theta, \\phi)$. Measuring the angular pattern of scattered particles directly measures $|f(\\theta, \\phi)|^2$.`,
    needs: ['c.1.5.4', 'c.8.1.1'],
    traps: [
      `Attempting to use $e^{ikz}$ as a normalizable wave packet. The plane wave represents a continuous steady-state beam of incident particles with constant flux.`,
      `Thinking $f(\\theta, \\phi)$ has units of area. $f(\\theta, \\phi)$ has units of LENGTH (meters), so that $|f|^2$ has units of area (cross section).`
    ],
    cards: [
      { q: 'State the asymptotic form of the quantum scattering wave function far from the target.', a: '$\\psi(\\mathbf{r}) \\approx A\\left( e^{ikz} + f(\\theta, \\phi)\\frac{e^{ikr}}{r} \\right)$.', kind: 'state' },
      { q: 'How is the differential cross section dσ/dΩ related to the scattering amplitude f(θ, φ)?', a: '$\\frac{d\\sigma}{d\\Omega} = |f(\\theta, \\phi)|^2$.', kind: 'recall' }
    ]
  },

  /* ── 8.3 Partial Wave Analysis & Phase Shifts ───────────────────────────── */
  {
    id: 'c.8.3.1', sec: '8.3', kind: 'theorem', tier: 'core',
    title: 'Partial Wave Analysis & Phase Shifts',
    oneLine: 'Expanding the scattering amplitude in Legendre polynomials decomposes the wave into partial waves: f(θ) = (1/k) ∑_{l=0}^∞ (2l+1) e^{iδ_l} sin δ_l P_l(cos θ).',
    statement: `For a spherically symmetric potential $V(r)$, the scattering is azimuthally symmetric ($f(\\theta)$ independent of $\\phi$).<br>
The scattering amplitude is expanded in a complete series of Legendre polynomials:
$$\\boxed{f(\\theta) = \\sum_{l=0}^\\infty (2l + 1) f_l(k) P_l(\\cos\\theta)}$$
where $f_l(k)$ is the <b>partial wave amplitude</b> for orbital angular momentum $l$.<br>
By conservation of probability flux for elastic scattering, the magnitude of each outgoing partial wave is unchanged; it can only undergo a real <b>phase shift</b> $\\delta_l(k)$:
$$\\boxed{f_l(k) = \\frac{e^{2i\\delta_l} - 1}{2ik} = \\frac{e^{i\\delta_l}\\sin\\delta_l}{k}}$$
The total scattering amplitude is:
$$\\boxed{f(\\theta) = \\frac{1}{k} \\sum_{l=0}^\\infty (2l + 1) e^{i\\delta_l} \\sin\\delta_l \\, P_l(\\cos\\theta)}$$
<b>Low-Energy Scattering ($ka \\ll 1$):</b>
Only the $s$-wave ($l = 0$) contributes significantly: $\\delta_l \\propto k^{2l+1}$.<br>
Higher partial waves ($p, d, \\dots$) are repelled by the centrifugal barrier and contribute negligibly!`,
    intuition: `Each partial wave represents a specific angular momentum component $L = l\\hbar$. When a particle passes near a scatterer, the potential alters the wave inside, causing the asymptotic wave to emerge ahead of or behind the unperturbed free wave. An attractive potential pulls the wavefunction inward, creating a positive phase shift $\\delta_l > 0$; a repulsive potential pushes it outward, creating a negative phase shift $\\delta_l < 0$!`,
    needs: ['c.8.2.1', 'c.5.2.2'],
    traps: [
      `Including high $l$ partial waves at low incident energies ($ka \\ll 1$). At low energies, only $l = 0$ ($s$-wave scattering) is significant.`,
      `Thinking $\\delta_l$ can be complex for elastic scattering. For pure elastic scattering without absorption, probability conservation forces $\\delta_l$ to be strictly real.`
    ],
    cards: [
      { q: 'State the partial wave expansion of the scattering amplitude in terms of phase shifts δ_l.', a: '$f(\\theta) = \\frac{1}{k}\\sum_{l=0}^\\infty (2l+1)e^{i\\delta_l}\\sin\\delta_l P_l(\\cos\\theta)$.', kind: 'state' },
      { q: 'What is the sign of the phase shift δ_l for an attractive potential versus a repulsive potential?', a: '$\\delta_l > 0$ for attractive potentials; $\\delta_l < 0$ for repulsive potentials.', kind: 'recall' }
    ]
  },
  {
    id: 'c.8.3.2', sec: '8.3', kind: 'law', tier: 'core',
    title: 'Total Cross Section & The Optical Theorem',
    oneLine: 'Integrating over all angles yields σ_tot = (4π/k²) ∑ (2l+1) sin² δ_l, leading directly to the Optical Theorem: σ_tot = (4π/k) Im[f(0)].',
    statement: `Integrating $|f(\\theta)|^2$ over the sphere and using the orthogonality of Legendre polynomials $\\int_{-1}^1 P_l(\\cos\\theta)P_{l'}(\\cos\\theta)d(\\cos\\theta) = \\frac{2}{2l+1}\\delta_{ll'}$:
$$\\boxed{\\sigma_{\\text{tot}} = \\frac{4\\pi}{k^2} \\sum_{l=0}^\\infty (2l + 1) \\sin^2\\delta_l}$$
Notice that each partial wave contributes a maximum cross section (<b>unitarity limit</b>):
$$\\sigma_l^{\\text{max}} = \\frac{4\\pi(2l+1)}{k^2} \\quad (\\text{when } \\delta_l = \\pi/2, 3\\pi/2, \\dots)$$
<b>The Optical Theorem:</b>
Evaluate the forward scattering amplitude at $\\theta = 0$ ($P_l(1) = 1$):
$$f(0) = \\frac{1}{k}\\sum_{l=0}^\\infty (2l+1)e^{i\\delta_l}\\sin\\delta_l = \\frac{1}{k}\\sum_{l=0}^\\infty (2l+1)(\\cos\\delta_l + i\\sin\\delta_l)\\sin\\delta_l$$
The imaginary part is:
$$\\text{Im}[f(0)] = \\frac{1}{k}\\sum_{l=0}^\\infty (2l+1)\\sin^2\\delta_l$$
Comparing with $\\sigma_{\\text{tot}}$:
$$\\boxed{\\sigma_{\\text{tot}} = \\frac{4\\pi}{k} \\text{Im}[f(0)]}$$`,
    intuition: `The Optical Theorem is a profound consequence of probability conservation! Why does total scattering depend on scattering at zero degrees ($f(0)$)? Because in the forward direction directly behind the scatterer, the scattered wave $f(0)\\frac{e^{ikr}}{r}$ interferes destructively with the incident plane wave $e^{ikz}$, casting a "shadow". The amount of probability flux removed from the forward beam to create that shadow must exactly equal the total flux scattered into all other directions!`,
    needs: ['c.8.3.1'],
    traps: [
      `Using the real part of $f(0)$ in the Optical Theorem. The theorem connects $\\sigma_{\\text{tot}}$ strictly to the IMAGINARY part: $\\text{Im}[f(0)]$.`,
      `Forgetting the factor of $4\\pi/k$ in the Optical Theorem.`
    ],
    cards: [
      { q: 'State the Optical Theorem relating total cross section to the forward scattering amplitude.', a: '$\\sigma_{\\text{tot}} = \\frac{4\\pi}{k}\\text{Im}[f(0)]$.', kind: 'state' },
      { q: 'What is the maximum possible contribution of the s-wave (l=0) to the elastic cross section (unitary limit)?', a: '$\\sigma_0^{\\text{max}} = \\frac{4\\pi}{k^2}$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.8.3.3', sec: '8.3', kind: 'theorem', tier: 'core',
    title: 'Low-Energy Hard Sphere Scattering: Quantum vs Classical Cross Section',
    oneLine: 'At low energies (ka ≪ 1), quantum hard-sphere scattering gives σ_tot = 4πa², which is exactly FOUR TIMES the classical geometric cross section πa².',
    statement: `For an impenetrable hard sphere of radius $a$:
$$V(r) = \\begin{cases} \\infty & r \\le a \\\\ 0 & r > a \\end{cases}$$
The wavefunction vanishes at the hard surface: $\\psi(a) = 0$.<br>
In the <b>low-energy limit ($ka \\ll 1$)</b>, only the $s$-wave ($l = 0$) contributes:
$$R_0(r) = \\frac{u_0(r)}{r} = A \\frac{\\sin(kr + \\delta_0)}{kr}$$
Boundary condition at $r = a$:
$$\\sin(ka + \\delta_0) = 0 \\implies ka + \\delta_0 = 0 \\implies \\boxed{\\delta_0 = -ka}$$
The scattering amplitude is:
$$f_0 \\approx \\frac{\\delta_0}{k} = -a$$
<b>Total Low-Energy Quantum Cross Section:</b>
$$\\boxed{\\sigma_{\\text{tot}} = 4\\pi |f_0|^2 = 4\\pi a^2}$$
<b>Comparison with Classical Mechanics:</b>
$$\\frac{\\sigma_{\\text{quantum}}}{\\sigma_{\\text{classical}}} = \\frac{4\\pi a^2}{\\pi a^2} = \\boxed{4}$$
<b>High-Energy Limit ($ka \\gg 1$):</b>
As $k \\to \\infty$, $\\sigma_{\\text{tot}} \\to 2\\pi a^2$ (one $\\pi a^2$ from classical geometric reflection plus one $\\pi a^2$ from forward diffraction shadow scattering).`,
    intuition: `Why is the quantum cross section 4 times larger than the classical area $\\pi a^2$? Because at low energy, the wavelength $\\lambda = 2\\pi/k \\gg a$ is vastly larger than the sphere! The wave cannot resolve the sharp spherical boundary and scatters isotropically in all directions with an effective scattering length $a_s = a$, creating a full spherical envelope of area $4\\pi a^2$.`,
    needs: ['c.8.3.2', 'c.8.1.1'],
    traps: [
      `Confusing the low-energy limit ($4\\pi a^2$) with the high-energy limit ($2\\pi a^2$). Read exam questions carefully to see which energy regime is specified.`,
      `Thinking the high-energy quantum cross section approaches the classical value $\\pi a^2$. Even at $E \\to \\infty$, wave diffraction maintains a shadow scattering contribution, leaving $\\sigma_{\\text{tot}} = 2\\pi a^2$!`
    ],
    cards: [
      { q: 'What is the total scattering cross section of a hard sphere of radius a in the low-energy limit (ka ≪ 1)?', a: '$\\sigma_{\\text{tot}} = 4\\pi a^2$.', kind: 'recall' },
      { q: 'What is the ratio of the low-energy quantum cross section of a hard sphere to its classical cross section?', a: 'Ratio is $\\frac{4\\pi a^2}{\\pi a^2} = 4$.', kind: 'recall' }
    ]
  },

  /* ── 8.4 The Born Approximation ─────────────────────────────────────────── */
  {
    id: 'c.8.4.1', sec: '8.4', kind: 'law', tier: 'core',
    title: 'Integral Form of the Schrödinger Equation & Green\'s Function',
    oneLine: 'The Schrödinger scattering PDE is reformulated as the Lippmann-Schwinger integral equation ψ(r) = e^{ikz} + ∫ G(r, r\') V(r\') ψ(r\') d³r\' using the Helmholtz Green\'s function.',
    statement: `The time-independent Schrödinger equation $(\\nabla^2 + k^2)\\psi = \\frac{2m}{\\hbar^2}V(\\mathbf{r})\\psi$ is converted into an exact integral equation using the outgoing <b>Helmholtz Green\'s function</b>:
$$(\\nabla^2 + k^2)G(\\mathbf{r}, \\mathbf{r}') = \\delta^3(\\mathbf{r} - \\mathbf{r}') \\implies \\boxed{G(\\mathbf{r}, \\mathbf{r}') = -\\frac{1}{4\\pi} \\frac{e^{ik|\\mathbf{r} - \\mathbf{r}'|}}{|\\mathbf{r} - \\mathbf{r}'|}}$$
The exact <b>Lippmann-Schwinger integral equation</b> is:
$$\\boxed{\\psi(\\mathbf{r}) = e^{ikz} - \\frac{m}{2\\pi\\hbar^2} \\int \\frac{e^{ik|\\mathbf{r} - \\mathbf{r}'|}}{|\\mathbf{r} - \\mathbf{r}'|} V(\\mathbf{r}') \\psi(\\mathbf{r}') \\, d^3\\mathbf{r}'}$$
In the far-field limit ($r \\gg r'$), $|\mathbf{r} - \\mathbf{r}'| \\approx r - \\hat{\\mathbf{r}}\\cdot\\mathbf{r}'$:
$$\\boxed{f(\\theta, \\phi) = -\\frac{m}{2\\pi\\hbar^2} \\int e^{-i\\mathbf{k}_f \\cdot \\mathbf{r}'} V(\\mathbf{r}') \\psi(\\mathbf{r}') \\, d^3\\mathbf{r}'}$$
where $\\mathbf{k}_f = k\\hat{\\mathbf{r}}$ is the wavevector in the observation direction.`,
    intuition: `This integral equation is the Huygens-Fresnel principle of quantum wave mechanics! Every volume element $d^3\\mathbf{r}'$ of the potential acts as a secondary source of spherical waves $\\frac{e^{ik|\\mathbf{r}-\\mathbf{r}'|}}{|\\mathbf{r}-\\mathbf{r}'|}$, weighted by the strength of the potential $V(\\mathbf{r}')$ and the local wavefunction $\\psi(\\mathbf{r}')$. The total wave at any point is the coherent superposition of the incoming wave and all scattered secondary wavelets.`,
    needs: ['c.8.2.1'],
    traps: [
      `Using the advanced Green\'s function $e^{-ikr}/r$ instead of the retarded outgoing Green\'s function $e^{+ikr}/r$. Outgoing scattered waves require $e^{+ikr}$.`,
      `Forgetting that $\\psi(\\mathbf{r}')$ appears inside the integral on the right-hand side. This is an implicit integral equation, which must be solved iteratively (the Born series).`
    ],
    cards: [
      { q: 'State the outgoing free-particle Green\'s function for the 3D Helmholtz equation.', a: '$G(\\mathbf{r}, \\mathbf{r}\') = -\\frac{1}{4\\pi}\\frac{e^{ik|\\mathbf{r}-\\mathbf{r}\'|}}{|\\mathbf{r}-\\mathbf{r}\'|}$.', kind: 'state' },
      { q: 'What is the far-field approximation for |r - r\'| when r ≫ r\'?', a: '$|\\mathbf{r} - \\mathbf{r}\'| \\approx r - \\hat{\\mathbf{r}}\\cdot\\mathbf{r}\'$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.8.4.2', sec: '8.4', kind: 'theorem', tier: 'core',
    title: 'The First Born Approximation: Fourier Transform of the Potential',
    oneLine: 'Replacing the unknown wave inside the integral by the incident plane wave yields the First Born Approximation: f^{(1)}(θ, φ) = -(m / 2πħ²) ∫ V(r) e^{-iq · r} d³r.',
    statement: `In the <b>First Born Approximation</b>, the exact wavefunction inside the integral is approximated by the unperturbed incident plane wave $\\psi(\\mathbf{r}') \\approx e^{i\\mathbf{k}_i \\cdot \\mathbf{r}'}$ ($e^{ikz'}$):
$$\\boxed{f^{(1)}(\\theta, \\phi) = -\\frac{m}{2\\pi\\hbar^2} \\int V(\\mathbf{r}') e^{-i(\\mathbf{k}_f - \\mathbf{k}_i) \\cdot \\mathbf{r}'} \\, d^3\\mathbf{r}'}$$
Define the <b>momentum transfer vector</b> $\\mathbf{q}$:
$$\\boxed{\\mathbf{q} \\equiv \\mathbf{k}_f - \\mathbf{k}_i}$$
Because $|\mathbf{k}_i| = |\\mathbf{k}_f| = k$, the magnitude of the momentum transfer is:
$$\\boxed{q = |\\mathbf{k}_f - \\mathbf{k}_i| = 2k \\sin\\left( \\frac{\\theta}{2} \\right)}$$
The first Born amplitude is proportional to the <b>3D spatial Fourier transform</b> $\\tilde{V}(\\mathbf{q})$ of the potential:
$$\\boxed{f^{(1)}(\\theta, \\phi) = -\\frac{m}{2\\pi\\hbar^2} \\tilde{V}(\\mathbf{q})}$$`,
    intuition: `This is a breathtaking bridge between scattering and Fourier analysis! Scattering an electron or X-ray off an unknown potential $V(\\mathbf{r})$ is literally taking its optical Fourier transform! Measuring the scattered intensity $|f(\\mathbf{q})|^2$ as a function of scattering angle $\\theta$ directly samples the spatial Fourier power spectrum of the scattering target. This is the exact physics underlying X-ray crystallography and electron microscopy.`,
    needs: ['c.8.4.1'],
    traps: [
      `Using $q = k\\sin\\theta$. The correct momentum transfer is $q = 2k\\sin(\\theta/2)$! (From the isosceles triangle formed by $\\mathbf{k}_i$ and $\\mathbf{k}_f$).`,
      `Applying the Born approximation to very deep or singular potentials (like a hard sphere $V \\to \\infty$). The Born approximation requires the potential to be a weak perturbation.`
    ],
    cards: [
      { q: 'What is the magnitude of the momentum transfer vector q in elastic scattering?', a: '$q = 2k\\sin(\\theta/2)$.', kind: 'recall' },
      { q: 'In the First Born Approximation, what mathematical operation connects the potential V(r) to the scattering amplitude?', a: 'The 3D spatial Fourier transform: $f^{(1)}(\\mathbf{q}) = -\\frac{m}{2\\pi\\hbar^2}\\tilde{V}(\\mathbf{q})$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.8.4.3', sec: '8.4', kind: 'theorem', tier: 'core',
    title: 'Born Approximation for Spherically Symmetric Potentials & Yukawa Scattering',
    oneLine: 'For central potentials V(r), f(θ) = -(2m / ħ²q) ∫ r V(r) sin(qr) dr; for Yukawa potential V(r) = V₀ e^{-μr}/r it derives the screened Coulomb amplitude.',
    statement: `For a spherically symmetric potential $V(r)$, the angular integral in the Fourier transform evaluates to:
$$\\boxed{f^{(1)}(\\theta) = -\\frac{2m}{\\hbar^2 q} \\int_0^\\infty r V(r) \\sin(qr) \\, dr}$$
<b>Yukawa (Screened Coulomb) Potential:</b>
$$V(r) = V_0 \\frac{e^{-\\mu r}}{r}$$
Evaluating the integral using $\\int_0^\\infty e^{-\\mu r} \\sin(qr) dr = \\frac{q}{q^2 + \\mu^2}$:
$$\\boxed{f_{\\text{Yukawa}}^{(1)}(\\theta) = -\\frac{2m V_0}{\\hbar^2 (q^2 + \\mu^2)} = -\\frac{2m V_0}{\\hbar^2 [4k^2\\sin^2(\\theta/2) + \\mu^2]}}$$
<b>The Classical Rutherford Limit (Coulomb Potential, $\\mu \\to 0$):</b>
Setting $V_0 = \\frac{q_1 q_2}{4\\pi\\varepsilon_0}$ and taking the unscreened limit $\\mu \\to 0$:
$$f_{\\text{Coulomb}}(\\theta) = -\\frac{2m}{\\hbar^2} \\left( \\frac{q_1 q_2}{4\\pi\\varepsilon_0} \\right) \\frac{1}{4k^2 \\sin^2(\\theta/2)}$$
Using $E = \\frac{\\hbar^2 k^2}{2m}$:
$$\\boxed{\\frac{d\\sigma}{d\\Omega} = |f|^2 = \\left( \\frac{q_1 q_2}{16\\pi\\varepsilon_0 E} \\right)^2 \\frac{1}{\\sin^4(\\theta/2)}}$$
The First Born approximation reproduces the classical <b>Rutherford scattering formula</b> with 100% exact precision!`,
    intuition: `Why does quantum Born scattering for the Coulomb potential produce the exact same formula as classical Newtonian scattering? Because the $1/r$ Coulomb potential has no intrinsic length scale! In $\\hbar \\to 0$, Planck's constant drops out of the differential cross section entirely. Quantum wave diffraction and classical hyperbolic orbital deflection converge to the exact same physical cross section!`,
    needs: ['c.8.4.2', 'c.8.1.2'],
    traps: [
      `Attempting to calculate the total cross section for pure Coulomb scattering ($\mu = 0$). The total cross section diverges to $\\infty$ because the $1/r$ force has infinite range and deflects particles at arbitrarily large impact parameters!`,
      `Forgetting that the screening parameter $\\mu$ has dimensions of inverse length ($1/\\text{meter}$).`
    ],
    cards: [
      { q: 'State the 1D radial integral formula for the First Born scattering amplitude of a central potential V(r).', a: '$f^{(1)}(\\theta) = -\\frac{2m}{\\hbar^2 q}\\int_0^\\infty r V(r)\\sin(qr)\\,dr$.', kind: 'state' },
      { q: 'Why does the total cross section for pure Coulomb scattering diverge?', a: 'Because the $1/r$ Coulomb potential has infinite range, deflecting particles even at infinite impact parameters.', kind: 'recall' }
    ]
  }
);
