/* ══════════════════════════════════════════════════════════════════════════
   LEVEL 4 · IIT JAM Physics (JAM PH) Past Paper Questions
   Quantum Mechanics II · Modules I & II: Central Potentials & Angular Momentum
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof PYQ === 'undefined') { var PYQ = []; }

PYQ.push(
  {
    id: 'p.jam.ph.2024.05',
    course: 'qm2',
    exam: 'JAM',
    year: 2024,
    paper: 'PH',
    qno: 18,
    marks: 2,
    neg: -0.66,
    sec: '5.4',
    tests: ['c.5.4.6'],
    title: 'Ratio of Most Probable Radius to Bohr Radius in Hydrogen 1s',
    type: 'MCQ',
    prompt: `<p>The radial wave function of the ground state of a hydrogen-like atom with atomic number $Z$ is:
$$R_{10}(r) = 2 \\left( \\frac{Z}{a_0} \\right)^{3/2} e^{-Z r / a_0}$$
where $a_0$ is the Bohr radius. The most probable distance $r_{\\text{mp}}$ of the electron from the nucleus is:</p>`,
    options: [
      { k: 'A', t: '$a_0 / Z$' },
      { k: 'B', t: '$a_0 / (2Z)$' },
      { k: 'C', t: '$3a_0 / (2Z)$' },
      { k: 'D', t: '$2a_0 / Z$' }
    ],
    answer: 'A',
    solution: `<p>The radial probability density of finding the electron in a spherical shell between $r$ and $r+dr$ is:
$$P(r) = r^2 |R_{10}(r)|^2 = 4 \\left( \\frac{Z}{a_0} \\right)^3 r^2 e^{-2 Z r / a_0}$$
To find the most probable distance $r_{\\text{mp}}$, differentiate $P(r)$ with respect to $r$ and set to zero:
$$\\frac{dP}{dr} = 4 \\left( \\frac{Z}{a_0} \\right)^3 \\left[ 2r e^{-2Zr/a_0} - \\frac{2Z}{a_0} r^2 e^{-2Zr/a_0} \\right] = 0$$
Factoring out common terms:
$$2r \\left( 1 - \\frac{Z r}{a_0} \\right) e^{-2Zr/a_0} = 0$$
For $r > 0$, the non-trivial root gives:
$$1 - \\frac{Z r_{\\text{mp}}}{a_0} = 0 \\implies \\boxed{r_{\\text{mp}} = \\frac{a_0}{Z}}$$
For ordinary hydrogen ($Z=1$), $r_{\\text{mp}} = a_0$. For a hydrogen-like ion of charge $Z$, the peak scales inversely with $Z$.</p>`,
    tested: 'Radial probability distribution and most probable radius in hydrogen-like ions.',
    trap: 'Selecting C (which is the expectation value ⟨r⟩ = 3a₀/(2Z), not the most probable distance).'
  },
  {
    id: 'p.jam.ph.2023.05',
    course: 'qm2',
    exam: 'JAM',
    year: 2023,
    paper: 'PH',
    qno: 22,
    marks: 2,
    neg: -0.66,
    sec: '6.4',
    tests: ['c.6.4.3'],
    title: 'Spin-1/2 Expectation Value along an Arbitrary Axis',
    type: 'MCQ',
    prompt: `<p>A spin-$1/2$ particle is in the normalized spin state:
$$|\\chi\\rangle = \\frac{1}{2} |\\uparrow\\rangle + \\frac{\\sqrt{3}}{2} |\\downarrow\\rangle$$
What is the expectation value $\\langle \\hat{S}_x \\rangle$ of the spin component along the $x$-axis?</p>`,
    options: [
      { k: 'A', t: '$\\dfrac{\\sqrt{3}}{4}\\hbar$' },
      { k: 'B', t: '$\\dfrac{\\sqrt{3}}{2}\\hbar$' },
      { k: 'C', t: '$\\dfrac{1}{4}\\hbar$' },
      { k: 'D', t: '$\\dfrac{1}{2}\\hbar$' }
    ],
    answer: 'A',
    solution: `<p>The spin operator $\\hat{S}_x$ in the $\{|\\uparrow\\rangle, |\\downarrow\\rangle\}$ basis is:
$$\\hat{S}_x = \\frac{\\hbar}{2}\\sigma_x = \\frac{\\hbar}{2}\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$$
Representing the state as a spinor:
$$\\chi = \\begin{pmatrix} 1/2 \\\\ \\sqrt{3}/2 \\end{pmatrix}$$
The expectation value is:
$$\\langle \\hat{S}_x \\rangle = \\chi^\\dagger \\hat{S}_x \\chi = \\frac{\\hbar}{2} \\begin{pmatrix} 1/2 & \\sqrt{3}/2 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 1/2 \\\\ \\sqrt{3}/2 \\end{pmatrix}$$
$$= \\frac{\\hbar}{2} \\begin{pmatrix} 1/2 & \\sqrt{3}/2 \\end{pmatrix} \\begin{pmatrix} \\sqrt{3}/2 \\\\ 1/2 \\end{pmatrix} = \\frac{\\hbar}{2} \\left[ \\left(\\frac{1}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) + \\left(\\frac{\\sqrt{3}}{2}\\right)\\left(\\frac{1}{2}\\right) \\right]$$
$$= \\frac{\\hbar}{2} \\left[ \\frac{\\sqrt{3}}{4} + \\frac{\\sqrt{3}}{4} \\right] = \\frac{\\hbar}{2} \\left( \\frac{\\sqrt{3}}{2} \\right) = \\boxed{\\frac{\\sqrt{3}}{4}\\hbar}$$</p>`,
    tested: 'Expectation values of non-diagonal Pauli spin operators in spinor states.',
    trap: 'Forgetting the ħ/2 factor in S_x = (ħ/2) σ_x.'
  },
  {
    id: 'p.jam.ph.2022.05',
    course: 'qm2',
    exam: 'JAM',
    year: 2022,
    paper: 'PH',
    qno: 35,
    marks: 2,
    neg: 0,
    sec: '6.1',
    tests: ['c.6.1.1'],
    title: 'Angular Momentum Decomposition of Spatial Wavefunction',
    type: 'NAT',
    prompt: `<p>A particle in a central potential is described by the spatial wavefunction:
$$\\psi(x, y, z) = C (x + y + 2z) e^{-\\alpha r}$$
where $C$ and $\\alpha$ are real constants and $r = \\sqrt{x^2 + y^2 + z^2}$. What is the eigenvalue of $\\hat{L}^2$ in units of $\\hbar^2$ for this state?</p>`,
    answer: '2',
    solution: `<p>Express the Cartesian coordinates in spherical polar coordinates:
$$x = r\\sin\\theta\\cos\\phi, \\quad y = r\\sin\\theta\\sin\\phi, \\quad z = r\\cos\\theta$$
The angular factor in $\\psi$ is:
$$x + y + 2z = r \\left( \\sin\\theta\\cos\\phi + \\sin\\theta\\sin\\phi + 2\\cos\\theta \\right)$$
Notice that all three terms are linear in $\\cos\\theta$ or $\\sin\\theta e^{\\pm i\\phi}$, which are exactly proportional to the $l = 1$ spherical harmonics ($p$-orbitals):
- $\\cos\\theta = \\sqrt{\\frac{4\\pi}{3}} Y_1^0$
- $\\sin\\theta\\cos\\phi = \\sqrt{\\frac{2\\pi}{3}} (-Y_1^1 + Y_1^{-1})$
- $\\sin\\theta\\sin\\phi = i\\sqrt{\\frac{2\\pi}{3}} (Y_1^1 + Y_1^{-1})$
Because the angular dependence is an exact linear combination purely of $l = 1$ spherical harmonics ($Y_1^0, Y_1^1, Y_1^{-1}$), $\\psi$ is a pure eigenstate of the total orbital angular momentum operator $\\hat{L}^2$ with eigenvalue:
$$\\hat{L}^2\\psi = l(l+1)\\hbar^2\\psi = 1(1+1)\\hbar^2\\psi = 2\\hbar^2\\psi$$
In units of $\\hbar^2$, the eigenvalue is exactly <b>2</b>.</p>`,
    tested: 'Decomposition of Cartesian polynomials into spherical harmonics and angular momentum eigenvalues.',
    trap: 'Thinking the state is not an eigenstate because it has multiple terms. It has different m values, but they all share the exact same l = 1!'
  },
  {
    id: 'p.jam.ph.2021.05',
    course: 'qm2',
    exam: 'JAM',
    year: 2021,
    paper: 'PH',
    qno: 42,
    marks: 2,
    neg: 0,
    sec: '6.5',
    tests: ['c.6.5.4'],
    title: 'Probability of Total Spin S = 1 in an Uncoupled State',
    type: 'NAT',
    prompt: `<p>Two non-interacting electrons are prepared in the uncoupled spin state $|\\uparrow\\downarrow\\rangle = |\\frac{1}{2}, \\frac{1}{2}\\rangle_1 |\\frac{1}{2}, -\\frac{1}{2}\\rangle_2$. If the total spin $\\hat{S}^2$ of the two-electron system is measured, what is the probability of obtaining the result $2\\hbar^2$ (i.e. finding the system in the triplet state $S=1$)? (Express as a decimal, e.g. 0.5).</p>`,
    answer: '0.5',
    solution: `<p>In terms of the coupled total spin basis $|S, M\\rangle$:
- The triplet state with $M = 0$ is $|1, 0\\rangle = \\frac{|\\uparrow\\downarrow\\rangle + |\\downarrow\\uparrow\\rangle}{\\sqrt{2}}$.
- The singlet state with $M = 0$ is $|0, 0\\rangle = \\frac{|\\uparrow\\downarrow\\rangle - |\\downarrow\\uparrow\\rangle}{\\sqrt{2}}$.<br>
Inverting to express the uncoupled state $|\\uparrow\\downarrow\\rangle$ in the coupled basis:
$$|\\uparrow\\downarrow\\rangle = \\frac{1}{\\sqrt{2}}|1, 0\\rangle + \\frac{1}{\\sqrt{2}}|0, 0\\rangle$$
The eigenvalue of $\\hat{S}^2$ for the triplet state $S=1$ is $1(1+1)\\hbar^2 = 2\\hbar^2$.<br>
The probability of measuring $S=1$ is the absolute square of the projection coefficient:
$$P(S=1) = |\\langle 1, 0 | \\uparrow\\downarrow \\rangle|^2 = \\left( \\frac{1}{\\sqrt{2}} \\right)^2 = \\frac{1}{2} = \\mathbf{0.5}$$</p>`,
    tested: 'Clebsch-Gordan expansion and measurement probability in coupled two-spin systems.',
    trap: 'Assuming |↑↓⟩ has total spin S = 0 because m_1 + m_2 = 0. A state with M = 0 is an equal mixture of S = 1 and S = 0!'
  },
  {
    id: 'p.jam.ph.2020.05',
    course: 'qm2',
    exam: 'JAM',
    year: 2020,
    paper: 'PH',
    qno: 15,
    marks: 1,
    neg: -0.33,
    sec: '5.3',
    tests: ['c.5.3.1'],
    title: 'Radial Behavior of Central Potential Wave Functions Near the Origin',
    type: 'MCQ',
    prompt: `<p>A particle of mass $m$ moves in a central potential $V(r)$ that is less singular than $1/r^2$ at the origin ($\\lim_{r \\to 0} r^2 V(r) = 0$). For an orbital state with angular momentum quantum number $l$, the radial wave function $R(r)$ behaves near the origin ($r \\to 0$) as:</p>`,
    options: [
      { k: 'A', t: '$R(r) \\propto r^l$' },
      { k: 'B', t: '$R(r) \\propto r^{l+1}$' },
      { k: 'C', t: '$R(r) \\propto r^{-(l+1)}$' },
      { k: 'D', t: '$R(r) \\propto r^{2l+1}$' }
    ],
    answer: 'A',
    solution: `<p>The modified radial wave function $u(r) = r R(r)$ satisfies:
$$\\frac{d^2 u}{dr^2} = \\left[ \\frac{2m}{\\hbar^2}(V(r) - E) + \\frac{l(l+1)}{r^2} \\right] u$$
Near the origin, the centrifugal barrier dominates:
$$\\frac{d^2 u}{dr^2} \\approx \\frac{l(l+1)}{r^2} u$$
The regular solution that vanishes at $r=0$ is $u(r) \\propto r^{l+1}$.<br>
Since $R(r) = u(r)/r$:
$$R(r) = \\frac{u(r)}{r} \\propto \\frac{r^{l+1}}{r} = \\boxed{r^l}$$
Therefore, $R(r) \\propto r^l$ as $r \\to 0$.</p>`,
    tested: 'Asymptotic power law behavior of radial wave functions near the origin.',
    trap: 'Confusing u(r) with R(r). u(r) ~ r^{l+1}, but R(r) ~ r^l!'
  },
  {
    id: 'p.jam.ph.2019.05',
    course: 'qm2',
    exam: 'JAM',
    year: 2019,
    paper: 'PH',
    qno: 31,
    marks: 2,
    neg: 0,
    sec: '6.5',
    tests: ['c.6.5.5'],
    title: 'Degeneracy and Energy Shift of Spin-Orbit Coupled Level',
    type: 'NAT',
    prompt: `<p>In an atom, an electron in a $p$-state ($l = 1$) is subjected to a spin-orbit interaction $\\hat{H}_{\\text{SO}} = A \\, \\hat{\\mathbf{L}} \\cdot \\hat{\\mathbf{S}}$. Into how many distinct fine-structure energy levels does this $p$-state split?</p>`,
    answer: '2',
    solution: `<p>The total angular momentum is $\\hat{\\mathbf{J}} = \\hat{\\mathbf{L}} + \\hat{\\mathbf{S}}$.<br>
For $l = 1$ and $s = 1/2$, the allowed values of $J$ are:
$$J = l + \\frac{1}{2} = 1 + \\frac{1}{2} = \\frac{3}{2}$$
$$J = l - \\frac{1}{2} = 1 - \\frac{1}{2} = \\frac{1}{2}$$
The energy shift is given by:
$$\\Delta E = \\frac{A\\hbar^2}{2}\\left[ J(J+1) - l(l+1) - s(s+1) \\right]$$
- For $J = 3/2$: $\\Delta E = +\\frac{1}{2}A\\hbar^2$ (labeled $^{2}P_{3/2}$, 4-fold degenerate)
- For $J = 1/2$: $\\Delta E = -A\\hbar^2$ (labeled $^{2}P_{1/2}$, 2-fold degenerate)<br>
The original 6-fold degenerate $p$-state ($2(2l+1) = 6$) splits into exactly <b>2</b> distinct fine-structure levels.</p>`,
    tested: 'Fine-structure splitting of atomic energy levels under spin-orbit coupling.',
    trap: 'Confusing the number of energy levels (2) with the degeneracy of individual levels (4 and 2).'
  }
);
