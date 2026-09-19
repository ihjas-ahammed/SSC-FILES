/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics II · Module I: The Central Potential & Hydrogen Atom
   Prescribed Syllabus: PHY7CJ401 (VII Semester BSc Physics Honours, Calicut University)
   Textbooks: David J. Griffiths 3e (Chapter 4 §§4.1–4.2)
              & Nouredine Zettili 2e (Chapter 6 §§6.1–6.4)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }

CONCEPTS.push(
  /* ── 5.1 Schrödinger Equation in Spherical Coordinates ──────────────────── */
  {
    id: 'c.5.1.1', sec: '5.1', kind: 'law', tier: 'core',
    title: 'Spherical Polar Coordinates & The Laplacian Operator',
    oneLine: 'In spherical polar coordinates (r, θ, φ), the 3D Laplacian separates cleanly into a radial derivative and the orbital angular momentum operator ∇² = (1/r²)(∂/∂r)(r² ∂/∂r) - L̂²/(ħ² r²).',
    statement: `In <b>spherical polar coordinates</b> $(r, \\theta, \\phi)$ related to Cartesian coordinates by:
$$x = r\\sin\\theta\\cos\\phi, \\quad y = r\\sin\\theta\\sin\\phi, \\quad z = r\\cos\\theta$$
where $r \\in [0, \\infty)$, $\\theta \\in [0, \\pi]$, and $\\phi \\in [0, 2\\pi)$, the <b>Laplacian operator</b> $\\nabla^2$ is:
$$\\boxed{\\nabla^2 = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}\\left(r^2\\frac{\\partial}{\\partial r}\\right) + \\frac{1}{r^2\\sin\\theta}\\frac{\\partial}{\\partial \\theta}\\left(\\sin\\theta\\frac{\\partial}{\\partial \\theta}\\right) + \\frac{1}{r^2\\sin^2\\theta}\\frac{\\partial^2}{\\partial\\phi^2}}$$
The differential volume element is:
$$\\boxed{dV = d^3\\mathbf{r} = r^2 \\sin\\theta \\, dr \\, d\\theta \\, d\\phi = r^2 dr \\, d\\Omega}$$
where $d\\Omega = \\sin\\theta \\, d\\theta \\, d\\phi$ is the infinitesimal element of solid angle.`,
    intuition: `Notice the remarkable connection to rotational physics: the purely angular differential operator appearing in $\\nabla^2$ is exactly proportional to the square of the orbital angular momentum operator:
$$\\hat{L}^2 = -\\hbar^2 \\left[ \\frac{1}{\\sin\\theta}\\frac{\\partial}{\\partial\\theta}\\left(\\sin\\theta\\frac{\\partial}{\\partial\\theta}\\right) + \\frac{1}{\\sin^2\\theta}\\frac{\\partial^2}{\\partial\\phi^2} \\right]$$
Therefore, the 3D Laplacian can be written compactly as:
$$\\nabla^2 = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}\\left(r^2\\frac{\\partial}{\\partial r}\\right) - \\frac{\\hat{L}^2}{\\hbar^2 r^2}$$
This proves that the angular kinetic energy of a quantum particle in 3D is precisely its rotational energy $\\frac{\\hat{L}^2}{2mr^2}$, exactly mirroring the classical expression $T = \\frac{p_r^2}{2m} + \\frac{L^2}{2mr^2}$!`,
    needs: ['c.4.2.1', 'c.2.1.1'],
    traps: [
      `Forgetting the metric factors $r^2 \\sin\\theta$ in the volume element $dV$. Integrating over all 3D space requires $\\int_0^\\infty r^2 dr \\int_0^\\pi \\sin\\theta d\\theta \\int_0^{2\\pi} d\\phi$, not simple $dr d\\theta d\\phi$.`,
      `Confusing the range of the polar angle $\\theta \\in [0, \\pi]$ with the azimuthal angle $\\phi \\in [0, 2\\pi]$.`
    ],
    cards: [
      { q: 'State the 3D Laplacian in spherical polar coordinates in terms of the radial derivative and L̂².', a: '$\\nabla^2 = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}\\left(r^2\\frac{\\partial}{\\partial r}\\right) - \\frac{\\hat{L}^2}{\\hbar^2 r^2}$.', kind: 'state' },
      { q: 'What is the differential volume element in spherical coordinates?', a: '$dV = r^2\\sin\\theta \\, dr \\, d\\theta \\, d\\phi = r^2 dr \\, d\\Omega$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.1.2', sec: '5.1', kind: 'theorem', tier: 'core',
    title: 'Separation of Variables for Central Potentials',
    oneLine: 'For any spherically symmetric potential V(r), the time-independent Schrödinger equation separates into a radial ODE and an angular PDE with separation constant l(l+1).',
    statement: `For a <b>central potential</b> $V(\\mathbf{r}) = V(r)$, the time-independent Schrödinger equation:
$$-\\frac{\\hbar^2}{2m}\\nabla^2\\psi(r, \\theta, \\phi) + V(r)\\psi(r, \\theta, \\phi) = E\\psi(r, \\theta, \\phi)$$
admits separable solutions of the product form:
$$\\boxed{\\psi(r, \\theta, \\phi) = R(r) Y(\\theta, \\phi)}$$
Substituting into the Schrödinger equation and dividing by $R(r)Y(\\theta, \\phi)$ yields two decoupled equations sharing the dimensionless separation constant $l(l+1)$:
<ol>
  <li><b>The Angular Equation:</b>
  $$\\boxed{\\hat{L}^2 Y(\\theta, \\phi) = l(l+1)\\hbar^2 Y(\\theta, \\phi)}$$</li>
  <li><b>The Radial Equation:</b>
  $$\\boxed{\\frac{d}{dr}\\left(r^2\\frac{dR}{dr}\\right) - \\frac{2m r^2}{\\hbar^2}\\left[V(r) - E\\right]R(r) = l(l+1)R(r)}$$</li>
</ol>`,
    intuition: `Why does the separation constant take the form $l(l+1)$ rather than just an arbitrary constant $C$? As we will see when solving the polar angle equation, physical solutions that remain finite at the north and south poles ($\\theta = 0, \\pi$) require $C = l(l+1)$ where $l$ is a non-negative integer $l \\in \\{0, 1, 2, \\dots\\}$. This is orbital angular momentum quantization born directly from geometric boundary conditions!`,
    needs: ['c.5.1.1', 'c.4.2.1'],
    traps: [
      `Assuming the angular function $Y(\\theta, \\phi)$ depends on the specific form of the potential $V(r)$. It does NOT! Every spherically symmetric potential in physics (Coulomb, isotropic oscillator, finite spherical well, Yukawa) shares identical angular solutions $Y_l^m(\\theta, \\phi)$.`,
      `Thinking $l$ can take half-integer values for orbital angular momentum. Half-integers arise exclusively in spin or general angular momentum, never in spatial orbital wavefunctions where $l$ must be an integer.`
    ],
    proof: {
      idea: 'Insert ψ(r, θ, φ) = R(r)Y(θ, φ) into [ -(ħ²/2m)∇² + V(r) ]ψ = Eψ and divide by R Y.',
      why: 'Show that the 3D PDE separates into an angular eigenvalue equation and a 1D radial ODE.',
      rungs: [
        {
          why: 'Express Hamiltonian in terms of radial derivative and L̂²',
          m: '$$-\\frac{\\hbar^2}{2m}\\left[ \\frac{1}{r^2}\\frac{\\partial}{\\partial r}\\left(r^2\\frac{\\partial}{\\partial r}\\right) - \\frac{\\hat{L}^2}{\\hbar^2 r^2} \\right]\\psi + V(r)\\psi = E\\psi$$',
          meaning: 'Use the identity ∇² = (1/r²)∂_r(r² ∂_r) - L̂²/(ħ² r²).',
          label: 'Radial/Angular Decomposition of Ĥ',
          math: '-\\frac{\\hbar^2}{2m}\\left[ \\frac{1}{r^2}\\frac{\\partial}{\\partial r}\\left(r^2\\frac{\\partial}{\\partial r}\\right) - \\frac{\\hat{L}^2}{\\hbar^2 r^2} \\right]\\psi + V(r)\\psi = E\\psi',
          note: 'Decompose Laplacian.'
        },
        {
          why: 'Substitute the product ansatz ψ = R(r)Y(θ, φ)',
          m: '$$-\\frac{\\hbar^2}{2m}Y\\frac{d}{dr}\\left(r^2\\frac{dR}{dr}\\right) + \\frac{R}{2m r^2}\\hat{L}^2 Y + r^2 V(r) R Y = E r^2 R Y$$',
          meaning: 'Act with radial derivatives on R(r) and L̂² on Y(θ, φ), then multiply by r².',
          label: 'Apply Product Ansatz',
          math: '-\\frac{\\hbar^2}{2m}Y\\frac{d}{dr}\\left(r^2\\frac{dR}{dr}\\right) + \\frac{R}{2m r^2}\\hat{L}^2 Y + r^2 V(r) R Y = E r^2 R Y',
          note: 'Multiply by r².'
        },
        {
          why: 'Divide by R(r)Y(θ, φ) and separate variables',
          m: '$$\\frac{1}{R}\\left[ \\frac{d}{dr}\\left(r^2\\frac{dR}{dr}\\right) - \\frac{2mr^2}{\\hbar^2}[V(r)-E]R \\right] = \\frac{\\hat{L}^2 Y}{\\hbar^2 Y} = l(l+1)$$',
          meaning: 'The left side depends solely on r while the middle depends solely on (θ, φ). Both must equal a mutual constant l(l+1).',
          label: 'Separation Constant Equivalence',
          math: '\\frac{1}{R}\\left[ \\frac{d}{dr}\\left(r^2\\frac{dR}{dr}\\right) - \\frac{2mr^2}{\\hbar^2}[V(r)-E]R \\right] = \\frac{\\hat{L}^2 Y}{\\hbar^2 Y} = l(l+1)',
          note: 'Equate to constant l(l+1).'
        }
      ]
    },
    cards: [
      { q: 'What is the separation ansatz for a central potential in 3D?', a: '$\\psi(r, \\theta, \\phi) = R(r) Y(\\theta, \\phi)$.', kind: 'state' },
      { q: 'Why are the angular functions Y(θ, φ) identical for all central potentials?', a: 'Because the potential $V(r)$ is purely radial; the angular part of the Laplacian contains no potential terms and depends only on spherical geometry.', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.1.3', sec: '5.1', kind: 'law', tier: 'core',
    title: 'Complete Set of Commuting Observables (CSCO) for Central Potentials',
    oneLine: 'In any central field, {Ĥ, L̂², L̂z} forms a Complete Set of Commuting Observables, with stationary states uniquely labelled by |n, l, m⟩.',
    statement: `For any spherically symmetric Hamiltonian $\\hat{H} = \\frac{\\hat{p}^2}{2m} + V(r)$, the Hamiltonian commutes with all components of orbital angular momentum:
$$\\boxed{[\\hat{H}, \\hat{\\mathbf{L}}] = 0, \\qquad [\\hat{H}, \\hat{L}^2] = 0, \\qquad [\\hat{H}, \\hat{L}_z] = 0}$$
Because $[\\hat{L}_x, \\hat{L}_y] = i\\hbar\\hat{L}_z \\neq 0$, the components $\\hat{L}_x, \\hat{L}_y, \\hat{L}_z$ do not commute with each other. Therefore, the maximal set of mutually commuting operators is the <b>Complete Set of Commuting Observables (CSCO)</b>:
$$\\boxed{\\text{CSCO} = \\{ \\hat{H}, \\hat{L}^2, \\hat{L}_z \\}}$$
Their simultaneous eigenstates are uniquely labelled by three quantum numbers $|n, l, m\\rangle$ satisfying the eigenvalue equations:
$$\\hat{H}\\psi_{nlm} = E_{nl}\\psi_{nlm}, \\quad \\hat{L}^2\\psi_{nlm} = l(l+1)\\hbar^2\\psi_{nlm}, \\quad \\hat{L}_z\\psi_{nlm} = m\\hbar\\psi_{nlm}$$`,
    intuition: `Spherical symmetry means the physics is invariant under any 3D spatial rotation. By Noether's theorem, rotational invariance implies the conservation of angular momentum vector $\\hat{\\mathbf{L}}$. In quantum mechanics, $[\hat{H}, \\hat{\\mathbf{L}}] = 0$ ensures that energy eigenstates can be chosen with definite total angular momentum $l$ and definite orientation along the quantization axis $m$.`,
    needs: ['c.3.6.3', 'c.5.1.2'],
    traps: [
      `Attempting to construct simultaneous eigenstates of $\\hat{H}, \\hat{L}_x, \\hat{L}_y$. Since $[\\hat{L}_x, \\hat{L}_y] \\neq 0$, Heisenberg's uncertainty principle forbids simultaneous eigenstates of multiple components!`,
      `Thinking the energy $E_{nl}$ in a general central potential depends on the magnetic quantum number $m$. It is strictly independent of $m$ due to rotational invariance, guaranteeing at least $(2l+1)$-fold degeneracy for each $l$.`
    ],
    cards: [
      { q: 'What is the CSCO for a spinless particle in a central potential?', a: '$\\{\\hat{H}, \\hat{L}^2, \\hat{L}_z\\}$.', kind: 'state' },
      { q: 'Why is the energy Enl of a central potential independent of m in the absence of external fields?', a: 'Because space is isotropic; rotating the coordinate system in any direction cannot change the energy of a spherically symmetric system.', kind: 'recall' }
    ]
  },

  /* ── 5.2 The Angular Equation & Spherical Harmonics ─────────────────────── */
  {
    id: 'c.5.2.1', sec: '5.2', kind: 'theorem', tier: 'core',
    title: 'Separation of the Angular Equation & Azimuthal Quantization',
    oneLine: 'The angular equation separates into Y(θ, φ) = Θ(θ)Φ(φ), where single-valuedness of Φ(φ) = e^{imφ} requires m to be an integer: m ∈ ℤ.',
    statement: `The angular eigenvalue equation $\\hat{L}^2 Y(\\theta, \\phi) = l(l+1)\\hbar^2 Y(\\theta, \\phi)$ expands explicitly as:
$$-\\left[ \\frac{1}{\\sin\\theta}\\frac{\\partial}{\\partial\\theta}\\left(\\sin\\theta\\frac{\\partial Y}{\\partial\\theta}\\right) + \\frac{1}{\\sin^2\\theta}\\frac{\\partial^2 Y}{\\partial\\phi^2} \\right] = l(l+1)Y$$
Assuming a product solution:
$$\\boxed{Y(\\theta, \\phi) = \\Theta(\\theta) \\Phi(\\phi)}$$
multiplying by $\\sin^2\\theta$ and dividing by $\\Theta\\Phi$ separates variables with constant $m^2$:
<ol>
  <li><b>Azimuthal Equation:</b>
  $$\\boxed{\\frac{d^2\\Phi}{d\\phi^2} = -m^2\\Phi \\implies \\Phi(\\phi) = \\frac{1}{\\sqrt{2\\pi}}e^{im\\phi}}$$</li>
  <li><b>Polar Equation:</b>
  $$\\boxed{\\sin\\theta\\frac{d}{d\\theta}\\left(\\sin\\theta\\frac{d\\Theta}{d\\theta}\\right) + \\left[l(l+1)\\sin^2\\theta - m^2\\right]\\Theta = 0}$$</li>
</ol>
<b>Single-Valuedness Requirement:</b>
Rotating through a full circle $\\phi \\to \\phi + 2\\pi$ returns to the identical physical point. Wavefunction single-valuedness requires:
$$\\Phi(\\phi + 2\\pi) = \\Phi(\\phi) \\implies e^{i 2\\pi m} = 1 \\implies \\boxed{m = 0, \\pm 1, \\pm 2, \\dots \\in \\mathbb{Z}}$$`,
    intuition: `This is quantization directly emerging from topological periodicity! Because the azimuthal angle $\\phi$ wraps around a closed circle $S^1$, the phase accumulated after traversing $2\\pi$ must be an integer multiple of $2\\pi$. If $m$ were fractional, $\\psi$ would change phase by a non-trivial factor upon a complete rotation, creating an unphysical branch cut in continuous space.`,
    needs: ['c.5.1.2'],
    traps: [
      `Using $\\sin(m\\phi)$ and $\\cos(m\\phi)$ instead of $e^{im\\phi}$. While real sines and cosines satisfy the second-order equation, they are NOT eigenfunctions of $\\hat{L}_z = -i\\hbar\\partial_\\phi$. Only complex exponentials $e^{im\\phi}$ are simultaneous eigenfunctions of $\\hat{L}^2$ and $\\hat{L}_z$.`,
      `Forgetting the normalization factor $\\frac{1}{\\sqrt{2\\pi}}$ in $\\Phi(\\phi)$. Normalization requires $\\int_0^{2\\pi}|\\Phi|^2 d\\phi = 1$.`
    ],
    cards: [
      { q: 'What physical condition forces the magnetic quantum number m to be an integer in wave mechanics?', a: 'Single-valuedness of the wave function under a 2π rotation around the z-axis: $\\Phi(\\phi+2\\pi) = \\Phi(\\phi) \\implies e^{i2\\pi m} = 1$.', kind: 'recall' },
      { q: 'What is the normalized eigenfunction of L̂z with eigenvalue mħ?', a: '$\\Phi_m(\\phi) = \\frac{1}{\\sqrt{2\\pi}}e^{im\\phi}$.', kind: 'state' }
    ]
  },
  {
    id: 'c.5.2.2', sec: '5.2', kind: 'definition', tier: 'core',
    title: 'Associated Legendre Functions & Orbital Angular Momentum Quantization',
    oneLine: 'Requiring Θ(θ) to be finite at θ = 0 and θ = π forces l to be a non-negative integer l ∈ {0, 1, 2, ...} with |m| ≤ l.',
    statement: `With the substitution $\\xi = \\cos\\theta \\in [-1, 1]$, the polar equation becomes the <b>associated Legendre differential equation</b>:
$$\\boxed{(1 - \\xi^2)\\frac{d^2\\Theta}{d\\xi^2} - 2\\xi\\frac{d\\Theta}{d\\xi} + \\left[ l(l+1) - \\frac{m^2}{1 - \\xi^2} \\right]\\Theta = 0}$$
The non-singular solutions on the interval $\\xi \\in [-1, 1]$ are the <b>associated Legendre functions</b> $P_l^m(\\cos\\theta)$, defined from the standard <b>Legendre polynomials</b> $P_l(\\xi)$ via:
$$\\boxed{P_l^m(\\xi) = (-1)^m (1 - \\xi^2)^{m/2} \\frac{d^m}{d\\xi^m}P_l(\\xi) \\quad (m \\ge 0)}$$
where $P_l(\\xi)$ are generated by <b>Rodrigues\' Formula</b>:
$$\\boxed{P_l(\\xi) = \\frac{1}{2^l l!} \\frac{d^l}{d\\xi^l}\\left( \\xi^2 - 1 \\right)^l}$$
<b>Quantization Condition:</b>
To prevent logarithmic divergences of the series at $\\xi = \\pm 1$ (the north and south poles $\\theta = 0, \\pi$), the indices must satisfy:
$$\\boxed{l = 0, 1, 2, 3, \\dots, \\qquad m = -l, -l+1, \\dots, +l \\quad (2l+1 \\text{ values})}$$`,
    intuition: `If $l$ were not an integer or if $|m| > l$, the power series solution would diverge as $\\ln(1 - \\cos^2\\theta) \\to -\\infty$ at the poles. The requirement that the wavefunction be normalizable and square-integrable over the entire sphere naturally forces the truncation of the series into finite polynomials!`,
    needs: ['c.5.2.1'],
    traps: [
      `Allowing $|m| > l$. For a given orbital angular momentum $l$, the projection on the $z$-axis cannot exceed the total magnitude: $m$ is strictly bounded by $-l \\le m \\le +l$.`,
      `Confusing $P_l^0(\\cos\\theta)$ with general $P_l^m$. When $m=0$, $P_l^0(\\cos\\theta) = P_l(\\cos\\theta)$ is the ordinary Legendre polynomial, which has no $\\phi$-dependence.`
    ],
    cards: [
      { q: 'State Rodrigues\' formula for the Legendre polynomials Pl(ξ).', a: '$P_l(\\xi) = \\frac{1}{2^l l!}\\frac{d^l}{d\\xi^l}(\\xi^2 - 1)^l$.', kind: 'state' },
      { q: 'For a given orbital quantum number l, how many allowed values of m exist?', a: '$2l + 1$ values: $m = -l, -l+1, \\dots, +l$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.2.3', sec: '5.2', kind: 'law', tier: 'core',
    title: 'Spherical Harmonics Y_l^m(θ, φ) & Spatial Parity',
    oneLine: 'Spherical harmonics form an orthonormal basis on the unit sphere, with definite spatial parity Π̂ Y_l^m(θ, φ) = (-1)^l Y_l^m(θ, φ).',
    statement: `The normalized simultaneous eigenfunctions of $\\hat{L}^2$ and $\\hat{L}_z$ are the <b>Spherical Harmonics</b> $Y_l^m(\\theta, \\phi)$:
$$\\boxed{Y_l^m(\\theta, \\phi) = (-1)^m \\sqrt{\\frac{2l+1}{4\\pi}\\frac{(l-m)!}{(l+m)!}} P_l^m(\\cos\\theta) e^{im\\phi} \\quad (m \\ge 0)}$$
For negative $m$, $Y_l^{-m}(\\theta, \\phi) = (-1)^m [Y_l^m(\\theta, \\phi)]^*$.<br>
<b>Lowest Spherical Harmonics:</b>
<ul>
  <li>$l=0$ (s-wave): $Y_0^0 = \\frac{1}{\\sqrt{4\\pi}}$</li>
  <li>$l=1$ (p-wave): $Y_1^0 = \\sqrt{\\frac{3}{4\\pi}}\\cos\\theta$, \\quad $Y_1^{\\pm 1} = \\mp \\sqrt{\\frac{3}{8\\pi}}\\sin\\theta e^{\\pm i\\phi}$</li>
  <li>$l=2$ (d-wave): $Y_2^0 = \\sqrt{\\frac{5}{16\\pi}}(3\\cos^2\\theta - 1)$, \\quad $Y_2^{\\pm 1} = \\mp\\sqrt{\\frac{15}{8\\pi}}\\sin\\theta\\cos\\theta e^{\\pm i\\phi}$</li>
</ul>
<b>Orthonormality Relation:</b>
$$\\boxed{\\int_0^{2\\pi} d\\phi \\int_0^\\pi \\sin\\theta \\, d\\theta \\; Y_l^m(\\theta, \\phi)^* Y_{l'}^{m'}(\\theta, \\phi) = \\delta_{ll'}\\delta_{mm'}}$$
<b>Spatial Parity Operation:</b> Under space inversion $\\mathbf{r} \\to -\\mathbf{r}$ ($r \\to r, \\theta \\to \\pi - \\theta, \\phi \\to \\phi + \\pi$):
$$\\boxed{\\hat{\\Pi} Y_l^m(\\theta, \\phi) = Y_l^m(\\pi-\\theta, \\phi+\\pi) = (-1)^l Y_l^m(\\theta, \\phi)}$$`,
    intuition: `Notice the beautiful physical meaning of parity: whether a state is even or odd under spatial reflection depends solely on the orbital angular momentum $l$! Even $l$ ($s, d, g, \\dots$) states have even parity $+1$; odd $l$ ($p, f, h, \\dots$) states have odd parity $-1$. The magnetic quantum number $m$ plays no role in parity!`,
    needs: ['c.5.2.2'],
    traps: [
      `Assuming the Condon-Shortley phase $(-1)^m$ is present for negative $m$. The convention adopted in Griffiths and Zettili includes $(-1)^m$ for $m \\ge 0$, and connects negative $m$ via $Y_l^{-m} = (-1)^m (Y_l^m)^*$.`,
      `Thinking $Y_l^m$ is symmetric under $\\theta \\to \\pi - \\theta$ alone. Reflection through the origin in 3D inverts BOTH $\\theta$ and $\\phi$: $\\theta \\to \\pi - \\theta$ and $\\phi \\to \\phi + \\pi$.`
    ],
    cards: [
      { q: 'What is the spatial parity of an orbital angular momentum state with quantum number l?', a: 'Parity is $(-1)^l$: even for even $l$, odd for odd $l$.', kind: 'state' },
      { q: 'Write the explicit form of the isotropic spherical harmonic Y_0^0.', a: '$Y_0^0 = \\frac{1}{\\sqrt{4\\pi}}$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.2.4', sec: '5.2', kind: 'theorem', tier: 'core',
    title: 'Completeness & Angular Function Expansions',
    oneLine: 'Any square-integrable angular function f(θ, φ) on the unit sphere can be expanded as a generalized Fourier series in spherical harmonics.',
    statement: `Because the spherical harmonics $\{Y_l^m\}$ form a complete orthonormal basis on the sphere $S^2$, any arbitrary angular wavefunction $f(\\theta, \\phi)$ can be uniquely expanded as:
$$\\boxed{f(\\theta, \\phi) = \\sum_{l=0}^\\infty \\sum_{m=-l}^l c_{lm} Y_l^m(\\theta, \\phi)}$$
where the expansion coefficients are computed via the projection integral:
$$\\boxed{c_{lm} = \\langle Y_l^m | f \\rangle = \\int_0^{2\\pi} d\\phi \\int_0^\\pi \\sin\\theta \\, d\\theta \\; Y_l^m(\\theta, \\phi)^* f(\\theta, \\phi)}$$
<b>Measurement Probabilities:</b>
If $f(\\theta, \\phi)$ is normalized, $\\sum_{l,m}|c_{lm}|^2 = 1$.<br>
A measurement of $\\hat{L}^2$ and $\\hat{L}_z$ yields $l(l+1)\\hbar^2$ and $m\\hbar$ with probability:
$$\\boxed{P(l, m) = |c_{lm}|^2}$$`,
    intuition: `This is the spherical analog of Fourier series! Just as periodic functions on a line decompose into sines and cosines $e^{ikx}$, functions on the 2D surface of a sphere decompose into spherical harmonics $Y_l^m$. In quantum mechanics, the expansion coefficients $c_{lm}$ are probability amplitudes for finding the particle with orbital angular momentum $(l, m)$.`,
    needs: ['c.5.2.3', 'c.3.1.2'],
    traps: [
      `Attempting to expand an unnormalized function without dividing by the norm. Always ensure $\\int |f|^2 d\\Omega = 1$ before interpreting $|c_{lm}|^2$ as physical probabilities.`,
      `Forgetting the solid angle integration weight $\\sin\\theta \\, d\\theta \\, d\\phi$ when calculating the overlap inner product $c_{lm}$.`
    ],
    cards: [
      { q: 'How is the probability of measuring angular momentum eigenvalues (l, m) determined from an angular function f(θ, φ)?', a: '$P(l, m) = |c_{lm}|^2$ where $c_{lm} = \\int Y_l^m(\\theta, \\phi)^* f(\\theta, \\phi) \\, d\\Omega$.', kind: 'recall' },
      { q: 'State the completeness relation for spherical harmonics on the unit sphere.', a: '$\\sum_{l=0}^\\infty \\sum_{m=-l}^l Y_l^m(\\theta, \\phi) Y_l^m(\\theta\', \\phi\')^* = \\frac{1}{\\sin\\theta}\\delta(\\theta - \\theta\')\\delta(\\phi - \\phi\')$.', kind: 'state' }
    ]
  },

  /* ── 5.3 The Radial Equation & Infinite Spherical Well ─────────────────── */
  {
    id: 'c.5.3.1', sec: '5.3', kind: 'law', tier: 'core',
    title: 'The Radial Equation & Centrifugal Potential Barrier',
    oneLine: 'Substituting u(r) = r R(r) transforms the radial ODE into an effective 1D Schrödinger equation with centrifugal barrier V_eff(r) = V(r) + ħ²l(l+1)/(2mr²).',
    statement: `The radial equation for $R(r)$:
$$\\frac{1}{r^2}\\frac{d}{dr}\\left(r^2\\frac{dR}{dr}\\right) - \\frac{2m}{\\hbar^2}\\left[V(r) - E\\right]R(r) = \\frac{l(l+1)}{r^2}R(r)$$
is transformed by introducing the <b>modified radial function</b>:
$$\\boxed{u(r) \\equiv r R(r)}$$
into the <b>effective one-dimensional Schrödinger equation</b> on the half-line $r \\in [0, \\infty)$:
$$\\boxed{-\\frac{\\hbar^2}{2m}\\frac{d^2 u}{dr^2} + V_{\\text{eff}}(r) u(r) = E u(r)}$$
where the <b>effective potential</b> is:
$$\\boxed{V_{\\text{eff}}(r) = V(r) + \\frac{\\hbar^2 l(l+1)}{2m r^2}}$$
The additional term $\\frac{\\hbar^2 l(l+1)}{2mr^2}$ is the <b>centrifugal potential barrier</b>.`,
    intuition: `In classical mechanics, conservation of angular momentum $L$ produces a fictitious repulsive centrifugal force $F_{\\text{cent}} = \\frac{L^2}{mr^3} = -\\frac{d}{dr}\\left(\\frac{L^2}{2mr^2}\\right)$. In quantum mechanics, the exact same barrier emerges with $L^2 \\to l(l+1)\\hbar^2$! For states with $l > 0$, this repulsive barrier shoots up to $+\\infty$ as $r \\to 0$, strongly pushing the particle away from the origin!`,
    needs: ['c.5.1.2'],
    traps: [
      `Forgetting that the equation for $u(r)$ applies only on the half-line $r \\in [0, \\infty)$, not on $(-\\infty, \\infty)$.`,
      `Thinking the centrifugal barrier exists for $l=0$ ($s$-states). When $l=0$, $l(l+1)=0$, so $V_{\\text{eff}}(r) = V(r)$ with zero centrifugal repulsion.`
    ],
    proof: {
      idea: 'Compute d/dr(r² dR/dr) with R(r) = u(r)/r and simplify.',
      why: 'Prove that the 3D radial equation maps exactly to the 1D Schrödinger equation for u(r).',
      rungs: [
        {
          why: 'Express derivatives of R = u/r',
          m: '$$\\frac{dR}{dr} = \\frac{d}{dr}\\left(\\frac{u}{r}\\right) = \\frac{1}{r}\\frac{du}{dr} - \\frac{u}{r^2}$$',
          meaning: 'Apply the quotient rule to R(r) = u(r)/r.',
          label: 'First Derivative of R(r)',
          math: '\\frac{dR}{dr} = \\frac{1}{r}\\frac{du}{dr} - \\frac{u}{r^2}',
          note: 'Quotient rule.'
        },
        {
          why: 'Multiply by r² and differentiate again',
          m: '$$r^2\\frac{dR}{dr} = r\\frac{du}{dr} - u \\implies \\frac{d}{dr}\\left(r^2\\frac{dR}{dr}\\right) = \\frac{du}{dr} + r\\frac{d^2 u}{dr^2} - \\frac{du}{dr} = r\\frac{d^2 u}{dr^2}$$',
          meaning: 'Notice how the cross-terms cancel out identically!',
          label: 'Derivative Simplification',
          math: '\\frac{d}{dr}\\left(r^2\\frac{dR}{dr}\\right) = r\\frac{d^2 u}{dr^2}',
          note: 'Cross-terms cancel.'
        },
        {
          why: 'Substitute back into radial equation and divide by r',
          m: '$$\\frac{1}{r}\\left(r\\frac{d^2 u}{dr^2}\\right) - \\frac{2m}{\\hbar^2}[V(r)-E]\\frac{u}{r} = \\frac{l(l+1)}{r^2}\\frac{u}{r} \\implies -\\frac{\\hbar^2}{2m}\\frac{d^2 u}{dr^2} + \\left[ V(r) + \\frac{\\hbar^2 l(l+1)}{2mr^2} \\right]u = E u$$',
          meaning: 'Multiplying by -ħ²/(2m) yields the standard 1D Schrödinger equation with V_eff(r).',
          label: 'Effective 1D Equation',
          math: '-\\frac{\\hbar^2}{2m}\\frac{d^2 u}{dr^2} + \\left[ V(r) + \\frac{\\hbar^2 l(l+1)}{2mr^2} \\right]u = E u',
          note: 'Rearrange terms.'
        }
      ]
    },
    cards: [
      { q: 'State the effective potential V_eff(r) in the radial Schrödinger equation.', a: '$V_{\\text{eff}}(r) = V(r) + \\frac{\\hbar^2 l(l+1)}{2mr^2}$.', kind: 'state' },
      { q: 'What is the physical origin of the centrifugal barrier term?', a: 'It represents the quantum mechanical kinetic energy of angular rotation, corresponding to classical $L^2/(2mr^2)$ with $L^2 = l(l+1)\\hbar^2$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.3.2', sec: '5.3', kind: 'theorem', tier: 'core',
    title: 'Boundary Conditions & Behavior of Radial Functions Near the Origin',
    oneLine: 'Physical normalizability requires u(0) = 0, and for r → 0 the radial function scales as R(r) ~ r^l while u(r) ~ r^{l+1}.',
    statement: `<b>Boundary Condition at the Origin:</b>
Because $R(r) = u(r)/r$, for the 3D wave function $\\psi$ to remain finite and avoid a delta-function singularity in $\\nabla^2(1/r) = -4\\pi\\delta^3(\\mathbf{r})$:
$$\\boxed{u(0) = 0}$$
<b>Normalization Condition:</b>
Because the 3D volume element includes $r^2 dr$:
$$\\int |\\psi|^2 d^3\\mathbf{r} = \\int_0^\\infty |R(r)|^2 r^2 dr \\underbrace{\\int |Y_l^m|^2 d\\Omega}_{= 1} = \\boxed{\\int_0^\\infty |u(r)|^2 dr = 1}$$
<b>Asymptotic Behavior as $r \\to 0$:</b>
Near the origin, the centrifugal term dominates over any physical potential with $V(r) \\ll 1/r^2$:
$$\\frac{d^2 u}{dr^2} \\approx \\frac{l(l+1)}{r^2} u \\implies u(r) \\propto r^{l+1} \\quad (r \\to 0)$$
Consequently, the true radial wavefunction behaves near the origin as:
$$\\boxed{R(r) \\propto r^l \\quad (r \\to 0)}$$`,
    intuition: `Look at what $R(r) \\propto r^l$ implies physically:
- For $l = 0$ ($s$-states): $R(0) = \\text{constant} \\neq 0$. Only $s$-wave electrons can physically penetrate to the center of the nucleus!
- For $l \\ge 1$ ($p, d, f, \\dots$): $R(0) = 0$. The centrifugal barrier repels the particle so strongly that the probability density vanishing at the nucleus is strictly guaranteed!`,
    needs: ['c.5.3.1'],
    traps: [
      `Thinking $u(r) \\propto r^{-l}$ is physically allowed. The second Frobenius solution $r^{-l}$ would give $R(r) \\propto r^{-(l+1)}$, which diverges violently at the origin and is not square-integrable.`,
      `Forgetting the $r^2$ factor in radial integrals: $\\int_0^\\infty |R(r)|^2 dr$ is WRONG; the correct 3D normalization integral is $\\int_0^\\infty |R(r)|^2 r^2 dr = \\int_0^\\infty |u(r)|^2 dr = 1$.`
    ],
    cards: [
      { q: 'What is the required boundary condition on u(r) at r = 0?', a: '$u(0) = 0$.', kind: 'recall' },
      { q: 'How does the radial wavefunction R(r) behave near the origin for a state with orbital quantum number l?', a: '$R(r) \\propto r^l$ as $r \\to 0$.', kind: 'state' }
    ]
  },
  {
    id: 'c.5.3.3', sec: '5.3', kind: 'law', tier: 'core',
    title: 'The Infinite Spherical Well & Spherical Bessel Functions',
    oneLine: 'Inside an infinite spherical well of radius a, the radial solutions are spherical Bessel functions R(r) = A j_l(kr), with quantized energies E_nl = ħ²β_nl²/(2ma²).',
    statement: `The <b>Infinite Spherical Well</b> potential is:
$$V(r) = \\begin{cases} 0 & r \\le a \\\\ \\infty & r > a \\end{cases}$$
Inside the well ($r \\le a$), with $k = \\frac{\\sqrt{2mE}}{\\hbar}$, the radial equation is the <b>spherical Bessel differential equation</b>:
$$\\boxed{\\frac{d^2 R}{dr^2} + \\frac{2}{r}\\frac{dR}{dr} + \\left[ k^2 - \\frac{l(l+1)}{r^2} \\right]R = 0}$$
The general solution is a linear combination of <b>spherical Bessel functions</b> $j_l(kr)$ and <b>spherical Neumann functions</b> $n_l(kr)$:
$$R(r) = A j_l(kr) + B n_l(kr)$$
Because $n_l(kr) \\sim r^{-(l+1)} \\to -\\infty$ diverges at the origin, regular boundary conditions enforce $B = 0$. Thus:
$$\\boxed{R_{nl}(r) = A_{nl} j_l(k_{nl} r)}$$
<b>Boundary Condition at the Rigid Wall $r = a$:</b>
$$\\psi(a) = 0 \\implies j_l(k a) = 0 \\implies k_{nl} a = \\beta_{nl}$$
where $\\beta_{nl}$ is the $n$-th non-trivial root of the $l$-th spherical Bessel function $j_l(x)$.<br>
The quantized <b>energy eigenvalues</b> are:
$$\\boxed{E_{nl} = \\frac{\\hbar^2 \\beta_{nl}^2}{2m a^2}}$$`,
    intuition: `Spherical Bessel functions are simply spherical analogs of sines and cosines! For $l=0$, $j_0(x) = \\frac{\\sin x}{x}$. As $l$ increases, the centrifugal barrier pushes the peaks of $j_l(x)$ further out, meaning higher angular momentum states require greater radial energy to fit within the box radius $a$.`,
    needs: ['c.5.3.2', 'c.2.2.1'],
    traps: [
      `Including spherical Neumann functions $n_l(kr)$ in a region that includes the origin $r = 0$. $n_l(kr)$ is only physically permissible in regions where $r=0$ is excluded (e.g., spherical shell potentials with inner radius $b > 0$).`,
      `Assuming energy levels depend on $m$. Each level $E_{nl}$ has $(2l+1)$-fold orbital degeneracy from $m = -l, \\dots, +l$.`
    ],
    cards: [
      { q: 'Why is the coefficient of the spherical Neumann function set to zero for the infinite spherical well?', a: 'Because $n_l(kr)$ diverges to $-\\infty$ at the origin $r=0$, violating square-integrability.', kind: 'recall' },
      { q: 'State the energy eigenvalues of a particle of mass m in an infinite spherical well of radius a.', a: '$E_{nl} = \\frac{\\hbar^2 \\beta_{nl}^2}{2ma^2}$, where $\\beta_{nl}$ is the $n$-th zero of $j_l(x)$.', kind: 'state' }
    ]
  },
  {
    id: 'c.5.3.4', sec: '5.3', kind: 'theorem', tier: 'core',
    title: 'Zero Angular Momentum (l = 0) States & Degeneracy Spectrum',
    oneLine: 'For s-states (l = 0), the infinite spherical well spectrum E_n0 = n²π²ħ²/(2ma²) exactly reproduces the 1D infinite square well.',
    statement: `For spherically symmetric $s$-states ($l = 0$), the spherical Bessel function is:
$$\\boxed{j_0(kr) = \\frac{\\sin(kr)}{kr}}$$
The boundary condition $j_0(ka) = 0$ requires $\\sin(ka) = 0$, giving exact zeros:
$$\\boxed{\\beta_{n0} = n\\pi, \\qquad n = 1, 2, 3, \\dots}$$
The corresponding $s$-wave energy spectrum is:
$$\\boxed{E_{n0} = \\frac{n^2 \\pi^2 \\hbar^2}{2m a^2}}$$
The normalized ground state wavefunction ($n=1, l=0, m=0$) is:
$$\\boxed{\\psi_{100}(r) = \\frac{1}{\\sqrt{2\\pi a}} \\frac{\\sin(\\pi r / a)}{r}}$$
<b>Energy Ordering & Degeneracy:</b>
Comparing roots across different $l$:
- $\\beta_{1,0} = \\pi \\approx 3.142 \\implies E_{1,0} = 1.00 \\, E_0$ (Ground state, non-degenerate, $g=1$)
- $\\beta_{1,1} \\approx 4.493 \\implies E_{1,1} = 2.05 \\, E_0$ (First excited state, $l=1$, 3-fold degenerate, $g=3$)
- $\\beta_{1,2} \\approx 5.763 \\implies E_{1,2} = 3.36 \\, E_0$ (Second excited state, $l=2$, 5-fold degenerate, $g=5$)
- $\\beta_{2,0} = 2\\pi \\approx 6.283 \\implies E_{2,0} = 4.00 \\, E_0$ (Third excited state, $l=0$, non-degenerate, $g=1$)`,
    intuition: `Notice how the first excited state has $l=1$ ($\\beta_{1,1} \\approx 4.49$) rather than the second radial node of $l=0$ ($\\beta_{2,0} = 2\\pi \\approx 6.28$)! Adding one unit of angular momentum costs less energy than introducing an extra radial node. This pattern of interleaving radial and angular excitations is universal across central potentials.`,
    needs: ['c.5.3.3'],
    traps: [
      `Allowing $n=0$ in the zero-point energy. If $n=0$, $\\sin(0) = 0$ and the wave function vanishes everywhere identically: $\\psi \\equiv 0$. The minimum quantum number is $n = 1$.`,
      `Thinking the ground state of the infinite spherical well is 3-fold degenerate. The ground state has $l=0, m=0$, so its degeneracy is $2l+1 = 1$ (non-degenerate).`
    ],
    cards: [
      { q: 'What is the ground state energy of a particle in an infinite spherical well of radius a?', a: '$E_{1,0} = \\frac{\\pi^2 \\hbar^2}{2ma^2}$.', kind: 'recall' },
      { q: 'What are the quantum numbers and degeneracy of the first excited state in an infinite spherical well?', a: '$n=1, l=1$ with 3-fold degeneracy ($m = -1, 0, +1$).', kind: 'recall' }
    ]
  },

  /* ── 5.4 The Hydrogen Atom ──────────────────────────────────────────────── */
  {
    id: 'c.5.4.1', sec: '5.4', kind: 'law', tier: 'core',
    title: 'The Two-Body Coulomb Hamiltonian & Reduced Mass Reduction',
    oneLine: 'The two-body electron-proton Coulomb system separates into center-of-mass translation and relative motion with reduced mass μ = m_e m_p / (m_e + m_p) ≈ m_e.',
    statement: `The <b>Hydrogen Atom</b> consists of a proton of mass $m_p$ and charge $+e$ and an electron of mass $m_e$ and charge $-e$ interacting via the attractive <b>Coulomb potential</b>:
$$\\boxed{V(r) = -\\frac{e^2}{4\\pi\\varepsilon_0 r} = -\\frac{k e^2}{r}}$$
Transforming from laboratory coordinates $(\\mathbf{r}_p, \\mathbf{r}_e)$ to center-of-mass $\\mathbf{R} = \\frac{m_p\\mathbf{r}_p + m_e\\mathbf{r}_e}{m_p + m_e}$ and relative position $\\mathbf{r} = \\mathbf{r}_e - \\mathbf{r}_p$, the total Hamiltonian separates:
$$\\hat{H}_{\\text{tot}} = -\\frac{\\hbar^2}{2M}\\nabla_R^2 - \\frac{\\hbar^2}{2\\mu}\\nabla_r^2 + V(r)$$
where $M = m_p + m_e$ is the total mass and $\\mu$ is the <b>reduced mass</b>:
$$\\boxed{\\mu = \\frac{m_e m_p}{m_e + m_p} = \\frac{m_e}{1 + m_e/m_p} \\approx 0.99946 \\, m_e}$$
The relative motion is governed by the single-particle Schrödinger equation with reduced mass $\\mu$:
$$\\boxed{-\\frac{\\hbar^2}{2\\mu}\\nabla^2\\psi(\\mathbf{r}) - \\frac{e^2}{4\\pi\\varepsilon_0 r}\\psi(\\mathbf{r}) = E\\psi(\\mathbf{r})}$$`,
    intuition: `Because $m_p \\approx 1836 \\, m_e$, the proton is almost 2000 times heavier than the electron. The reduced mass correction is small ($\approx 0.05\\%$) but experimentally critical: it precisely explains isotope shifts, such as the spectral line shift between ordinary Hydrogen ($^1\\text{H}$) and Deuterium ($^2\\text{H}$), which led directly to Harold Urey's Nobel Prize discovery of heavy hydrogen in 1931!`,
    needs: ['c.5.1.1', 'c.5.3.1'],
    traps: [
      `Using the bare electron mass $m_e$ when computing high-precision spectral shifts between isotopes. Always replace $m_e$ by $\\mu = \\frac{m_e M_{\\text{nucleus}}}{m_e + M_{\\text{nucleus}}}$.`,
      `Confusing the sign of the Coulomb potential: $V(r) = -e^2/(4\\pi\\varepsilon_0 r)$ is negative everywhere, representing an attractive bound potential.`
    ],
    cards: [
      { q: 'What is the reduced mass μ of the hydrogen atom in terms of electron mass me and proton mass mp?', a: '$\\mu = \\frac{m_e m_p}{m_e + m_p}$.', kind: 'recall' },
      { q: 'State the Coulomb potential for a hydrogen-like atom with nuclear charge +Ze.', a: '$V(r) = -\\frac{Z e^2}{4\\pi\\varepsilon_0 r}$.', kind: 'state' }
    ]
  },
  {
    id: 'c.5.4.2', sec: '5.4', kind: 'theorem', tier: 'core',
    title: 'Asymptotic Analysis & Series Solution of the Radial Coulomb Equation',
    oneLine: 'Asymptotic limits u(ρ) ~ ρ^{l+1} (ρ→0) and u(ρ) ~ e^{-ρ/2} (ρ→∞) peel off the divergent factors, leaving a terminating polynomial v(ρ).',
    statement: `For bound states ($E < 0$), define the wave number $\\kappa = \\frac{\\sqrt{-2\\mu E}}{\\hbar}$ and dimensionless radial variable:
$$\\rho \\equiv 2\\kappa r, \\qquad \\rho_0 \\equiv \\frac{2\\mu}{\\hbar^2 \\kappa}\\left(\\frac{e^2}{4\\pi\\varepsilon_0}\\right)$$
The radial equation for $u(\\rho) = r R(r)$ becomes:
$$\\frac{d^2 u}{d\\rho^2} = \\left[ \\frac{1}{4} - \\frac{\\rho_0}{\\rho} + \\frac{l(l+1)}{\\rho^2} \\right]u$$
<b>Asymptotic Analysis:</b>
<ol>
  <li><b>As $\\rho \\to \\infty$:</b> $\\frac{d^2 u}{d\\rho^2} \\approx \\frac{1}{4}u \\implies u(\\rho) \\sim e^{-\\rho/2}$ (discarding $e^{+\\rho/2}$).</li>
  <li><b>As $\\rho \\to 0$:</b> $\\frac{d^2 u}{d\\rho^2} \\approx \\frac{l(l+1)}{\\rho^2}u \\implies u(\\rho) \\sim \\rho^{l+1}$.</li>
</ol>
Factoring out the asymptotic behavior:
$$\\boxed{u(\\rho) = \\rho^{l+1} e^{-\\rho/2} v(\\rho)}$$
where $v(\\rho) = \\sum_{j=0}^\\infty c_j \\rho^j$ satisfies the <b>Associated Laguerre differential equation</b> with recursion relation:
$$\\boxed{c_{j+1} = \\frac{j + l + 1 - \\rho_0 / 2}{(j + 1)(j + 2l + 2)} c_j}$$`,
    intuition: `If the series $v(\\rho)$ did not terminate, for large $j$ the ratio $\\frac{c_{j+1}}{c_j} \\approx \\frac{1}{j}$, which is the power series expansion of $e^\\rho$! Multiplying $e^\\rho$ by the asymptotic tail $e^{-\\rho/2}$ would yield $u(\\rho) \\sim e^{+\\rho/2} \\to \\infty$, catastrophically blowing up at infinity. Therefore, normalizability demands that the series MUST terminate after a finite number of terms!`,
    needs: ['c.5.4.1', 'c.5.3.2'],
    traps: [
      `Retaining the $e^{+\\rho/2}$ asymptotic solution. It diverges exponentially as $r \\to \\infty$ and cannot be normalized.`,
      `Setting $\\rho = \\kappa r$ instead of $\\rho = 2\\kappa r$. The factor of 2 in $\\rho = 2\\kappa r$ ensures the convenient coefficient of $\\frac{1}{4}$ in the asymptotic differential equation.`
    ],
    cards: [
      { q: 'What is the asymptotic behavior of the hydrogen radial function u(ρ) as ρ → ∞ for bound states?', a: '$u(\\rho) \\sim e^{-\\rho/2}$.', kind: 'recall' },
      { q: 'Why must the power series v(ρ) terminate into a polynomial?', a: 'If it did not terminate, it would behave as $e^\\rho$, causing $u(\\rho) \\sim e^{\\rho/2} \\to \\infty$, which cannot be normalized.', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.4.3', sec: '5.4', kind: 'law', tier: 'core',
    title: 'Hydrogen Energy Eigenvalues, Bohr Radius & The Rydberg Formula',
    oneLine: 'Series termination truncates at j_max, defining the principal quantum number n = j_max + l + 1 and yielding Bohr energy levels E_n = -13.6 eV / n².',
    statement: `The series terminates at $j = j_{\\text{max}}$ when the numerator of the recursion relation vanishes:
$$j_{\\text{max}} + l + 1 - \\frac{\\rho_0}{2} = 0$$
Define the <b>principal quantum number</b> $n$:
$$\\boxed{n \\equiv j_{\\text{max}} + l + 1 = \\frac{\\rho_0}{2} \\in \\{1, 2, 3, \\dots\\}}$$
Because $j_{\\text{max}} \\ge 0$, for a given $n$, the orbital quantum number $l$ is strictly constrained to:
$$\\boxed{l = 0, 1, 2, \\dots, n - 1}$$
<b>Energy Spectrum of Hydrogen:</b>
Recalling $\\rho_0 = 2n$ and $\\kappa = \\frac{\\sqrt{-2\\mu E}}{\\hbar}$, the quantized <b>Bohr energy levels</b> are:
$$\\boxed{E_n = -\\frac{\\mu}{2\\hbar^2}\\left(\\frac{e^2}{4\\pi\\varepsilon_0}\\right)^2 \\frac{1}{n^2} = -\\frac{E_1}{n^2} = -\\frac{13.606 \\text{ eV}}{n^2}}$$
<b>The Bohr Radius:</b>
$$\\boxed{a_0 \\equiv \\frac{4\\pi\\varepsilon_0 \\hbar^2}{\\mu e^2} \\approx 0.529177 \\text{ \\AA} = 5.29177 \\times 10^{-11} \\text{ m}}$$
<b>Rydberg Formula for Spectral Emission:</b>
$$\\frac{1}{\\lambda} = R_\\infty \\left( \\frac{1}{n_f^2} - \\frac{1}{n_i^2} \\right), \\qquad R_\\infty = \\frac{\\mu e^4}{8\\varepsilon_0^2 h^3 c} \\approx 1.09737 \\times 10^7 \\text{ m}^{-1}$$`,
    intuition: `Schrödinger's wave mechanics derives Bohr's 1913 quantized energy levels from first principles without any ad hoc quantization postulates! The energy $E_n \\propto -1/n^2$ converges to $E_\\infty = 0$ as $n \\to \\infty$, where the infinite dense accumulation of Rydberg levels transitions seamlessly into the continuous ionization spectrum ($E > 0$).`,
    needs: ['c.5.4.2'],
    traps: [
      `Allowing $l \\ge n$. For principal quantum number $n$, the maximum possible orbital angular momentum is strictly $l_{\\text{max}} = n - 1$. (For example, $n=1$ only has $l=0$ ($1s$); there is no $1p$ state in physics).`,
      `Forgetting the negative sign in bound state energies: $E_n < 0$. Bound states always have negative energy relative to the ionization threshold $E=0$.`
    ],
    cards: [
      { q: 'State the formula for the energy eigenvalues of hydrogen in terms of principal quantum number n.', a: '$E_n = -\\frac{13.6\\text{ eV}}{n^2}$.', kind: 'state' },
      { q: 'What is the allowed range of the orbital quantum number l for a given principal quantum number n?', a: '$l = 0, 1, 2, \\dots, n-1$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.4.4', sec: '5.4', kind: 'theorem', tier: 'core',
    title: 'Orbital & Spin Degeneracy of Hydrogen Energy Levels',
    oneLine: 'Each hydrogen energy level E_n has an exact n²-fold orbital degeneracy (2n² including electron spin), reflecting the hidden SO(4) symmetry of the 1/r Coulomb potential.',
    statement: `For a given principal quantum number $n$, the energy $E_n$ depends solely on $n$, and is completely independent of $l$ and $m$.<br>
<b>Total Orbital Degeneracy $g_n$:</b>
Summing the $(2l+1)$ magnetic substates over all allowed values of $l \\in \\{0, 1, \\dots, n-1\\}$:
$$\\boxed{g_n = \\sum_{l=0}^{n-1}(2l + 1) = 2\\sum_{l=0}^{n-1}l + \\sum_{l=0}^{n-1}1 = 2\\frac{(n-1)n}{2} + n = n^2}$$
<b>Total Degeneracy with Electron Spin ($s = 1/2$):</b>
Because the electron has two spin states ($m_s = \\pm 1/2$):
$$\\boxed{g_n^{\\text{total}} = 2n^2}$$
<b>Accidental Degeneracy & SO(4) Symmetry:</b>
- The $(2l+1)$ degeneracy for fixed $l$ is a <b>geometric degeneracy</b> guaranteed by spatial rotational invariance ($SO(3)$ symmetry).
- The degeneracy across different $l$ for the same $n$ (e.g., $2s$ and $2p$ having identical energy $-3.4\\text{ eV}$) is an <b>accidental degeneracy</b> unique to the $1/r$ Coulomb potential, caused by the conservation of the quantum <b>Laplace-Runge-Lenz vector</b> $\\hat{\\mathbf{M}}$, which enlarges the dynamical symmetry group to $SO(4)$.`,
    intuition: `Why should an electron in a spherical $2s$ orbital with zero angular momentum have the exact same energy as an electron in an elongated $2p$ orbital with $l=1$? In any generic central potential $V(r) \\neq -k/r$ (such as alkali atoms with core electron shielding), this degeneracy is broken and $E(2s) < E(2p)$. The exact $l$-degeneracy of pure hydrogen is a special symmetry miracle exclusive to inverse-square $1/r^2$ forces!`,
    needs: ['c.5.4.3', 'c.5.1.3'],
    traps: [
      `Confusing orbital degeneracy ($n^2$) with total degeneracy including spin ($2n^2$). Read exam questions carefully to see whether electron spin is included.`,
      `Assuming the $l$-degeneracy holds in multi-electron atoms (e.g. Helium, Lithium). In multi-electron atoms, electron-electron repulsion destroys the pure $1/r$ central potential, lifting the accidental degeneracy so $E(ns) < E(np) < E(nd)$.`
    ],
    cards: [
      { q: 'What is the orbital degeneracy of the n-th energy level of hydrogen (excluding spin)?', a: '$g_n = n^2$.', kind: 'recall' },
      { q: 'What conserved physical observable causes the accidental l-degeneracy in the hydrogen atom?', a: 'The Laplace–Runge–Lenz vector $\\hat{\\mathbf{M}}$ (giving dynamical $SO(4)$ symmetry).', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.4.5', sec: '5.4', kind: 'definition', tier: 'core',
    title: 'Hydrogen Radial Wave Functions & Associated Laguerre Polynomials',
    oneLine: 'The radial wave functions R_nl(r) are expressed analytically via associated Laguerre polynomials L_{n-l-1}^{2l+1}(2r/na₀), having n - l - 1 radial nodes.',
    statement: `The normalized <b>radial wave functions</b> of hydrogen are:
$$\\boxed{R_{nl}(r) = -\\left( \\frac{2}{n a_0} \\right)^{3/2} \\sqrt{\\frac{(n-l-1)!}{2n [(n+l)!]^3}} e^{-r/n a_0} \\left( \\frac{2r}{n a_0} \\right)^l L_{n+l}^{2l+1}\\left( \\frac{2r}{n a_0} \\right)}$$
<b>Explicit Low-Lying Radial Wave Functions:</b>
<ul>
  <li><b>1s State ($n=1, l=0$):</b>
  $$\\boxed{R_{10}(r) = 2 a_0^{-3/2} e^{-r/a_0}}$$</li>
  <li><b>2s State ($n=2, l=0$):</b>
  $$\\boxed{R_{20}(r) = \\frac{1}{\\sqrt{2}} a_0^{-3/2} \\left( 1 - \\frac{r}{2a_0} \\right) e^{-r/2a_0}}$$</li>
  <li><b>2p State ($n=2, l=1$):</b>
  $$\\boxed{R_{21}(r) = \\frac{1}{\\sqrt{24}} a_0^{-3/2} \\frac{r}{a_0} e^{-r/2a_0}}$$</li>
  <li><b>3s State ($n=3, l=0$):</b>
  $$\\boxed{R_{30}(r) = \\frac{2}{\\sqrt{27}} a_0^{-3/2} \\left( 1 - \\frac{2r}{3a_0} + \\frac{2r^2}{27a_0^2} \\right) e^{-r/3a_0}}$$</li>
</ul>
<b>Radial Node Counting Theorem:</b>
The number of radial nodes (zeros at finite $0 < r < \\infty$) is strictly:
$$\\boxed{n_r = n - l - 1}$$`,
    intuition: `Notice how node counting works:
- $1s$: $n=1, l=0 \\implies n_r = 1 - 0 - 1 = 0$ nodes.
- $2s$: $n=2, l=0 \\implies n_r = 2 - 0 - 1 = 1$ node (at $r = 2a_0$).
- $2p$: $n=2, l=1 \\implies n_r = 2 - 1 - 1 = 0$ nodes.
- $3s$: $n=3, l=0 \\implies n_r = 3 - 0 - 1 = 2$ nodes.
Nodes in the radial wavefunction represent points where the electron has zero probability of being detected at that radial shell!`,
    needs: ['c.5.4.3', 'c.5.3.2'],
    traps: [
      `Counting $r=0$ or $r=\\infty$ as radial nodes. Radial nodes are strictly the zeros of $R(r)$ located in the interior domain $0 < r < \\infty$.`,
      `Confusing $R_{20}$ and $R_{21}$: $R_{20}(0) = \\frac{1}{\\sqrt{2}a_0^{3/2}} \\neq 0$, whereas $R_{21}(0) = 0$ due to the $r^l$ factor.`
    ],
    cards: [
      { q: 'State the formula for the number of radial nodes nr in a hydrogen state |n, l, m⟩.', a: '$n_r = n - l - 1$.', kind: 'recall' },
      { q: 'At what radius does the radial wavefunction R_20(r) have its radial node?', a: 'At $r = 2a_0$ (where $1 - r/(2a_0) = 0$).', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.4.6', sec: '5.4', kind: 'law', tier: 'core',
    title: 'Radial Probability Density & Expectation Values for Hydrogen',
    oneLine: 'The probability of finding the electron between r and r+dr is P(r)dr = r²|R_nl(r)|²dr, peaking at r = a₀ for the 1s ground state.',
    statement: `The probability of finding the electron in a spherical shell of radius $r$ and thickness $dr$ (integrated over all angles $\\theta, \\phi$) is the <b>radial probability density</b> $P(r)$:
$$\\boxed{P_{nl}(r) = r^2 |R_{nl}(r)|^2}$$
For the $1s$ ground state:
$$P_{10}(r) = r^2 \\left( 2 a_0^{-3/2} e^{-r/a_0} \\right)^2 = \\frac{4}{a_0^3} r^2 e^{-2r/a_0}$$
<b>Most Probable Distance vs Mean Radius:</b>
- Setting $\\frac{dP_{10}}{dr} = 0 \\implies \\boxed{r_{\\text{mp}} = a_0}$ (The most probable distance equals the Bohr radius!).
- The expectation value (mean radius) is:
$$\\boxed{\\langle r \\rangle_{10} = \\int_0^\\infty r P_{10}(r) dr = \\frac{3}{2}a_0}$$
<b>General Hydrogen Expectation Values:</b>
$$\\boxed{\\left\\langle \\frac{1}{r} \\right\\rangle_{nl} = \\frac{1}{n^2 a_0}, \\qquad \\langle r \\rangle_{nl} = \\frac{a_0}{2}\\left[ 3n^2 - l(l+1) \\right]}$$
$$\\boxed{\\langle r^2 \\rangle_{nl} = \\frac{n^2 a_0^2}{2}\\left[ 5n^2 + 1 - 3l(l+1) \\right]}$$
<b>Quantum Virial Theorem for Coulomb Potential ($V \\propto 1/r$):</b>
$$\\boxed{\\langle T \\rangle = -E_n = +\\frac{13.6\\text{ eV}}{n^2}, \\qquad \\langle V \\rangle = 2E_n = -\\frac{27.2\\text{ eV}}{n^2} \\implies \\langle T \\rangle = -\\frac{1}{2}\\langle V \\rangle}$$`,
    intuition: `Why is the most probable radius $r_{\\text{mp}} = a_0$ while the average radius is $\\langle r \\rangle = 1.5 a_0$? Because the volume of a spherical shell $4\\pi r^2 dr$ grows with radius, which pulls the probability distribution outward, skewing the distribution so the mean exceeds the mode. Notice also the Virial Theorem: kinetic energy is always positive, potential energy is twice as negative, summing to $E_n = -\\langle T \\rangle$!`,
    needs: ['c.5.4.5', 'c.1.3.1'],
    traps: [
      `Confusing the maximum of the wave function $R_{10}(r)$ (which occurs at $r=0$) with the maximum of the radial probability density $P(r) = r^2 |R(r)|^2$ (which occurs at $r = a_0$).`,
      `Assuming $\\langle 1/r \\rangle = 1 / \\langle r \\rangle$. By Jensen\'s inequality, $\\langle 1/r \\rangle = \\frac{1}{n^2 a_0} \\neq \\frac{1}{\\langle r \\rangle} = \\frac{2}{3a_0}$!`
    ],
    cards: [
      { q: 'Where does the radial probability density P(r) of the ground state 1s hydrogen atom achieve its maximum?', a: 'At the Bohr radius $r = a_0$.', kind: 'recall' },
      { q: 'State the relationship between ⟨T⟩, ⟨V⟩, and total energy En for a hydrogen bound state (Virial Theorem).', a: '$\\langle T \\rangle = -E_n$ and $\\langle V \\rangle = 2E_n$, so $\\langle T \\rangle = -\\frac{1}{2}\\langle V \\rangle$.', kind: 'state' }
    ]
  }
);
