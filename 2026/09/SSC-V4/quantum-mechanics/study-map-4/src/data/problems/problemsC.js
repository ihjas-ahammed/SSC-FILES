import { problem, chk } from "../dsl.js";
const r = String.raw;

// Module 4, Part B (boxes) and Part C (three-dimensional oscillators).
// The printed review questions repeat each other, so P9-P13 are five unique problems.
export default [
  // ---------------------------------------------------------------- P9
  problem({
    id: "rectangular-box",
    name: "Particle in a Rectangular Box",
    group: "waves",
    symbol: r`\psi_{n_xn_yn_z}`,
    prerequisites: ["Separation of Variables in Three Dimensions", "Infinite Square Well", "Time-Independent Schrödinger Equation", "Boundary Condition", "Normalization", "Integral"],
    ross: { n: "B19 · A35, A36, C8", label: "Module 4 · Part B Q19 (with A35, A36, C8)", section: "B", page: 5 },
    title: "Energy levels and eigenfunctions of a rectangular box",
    statement: r`A particle of mass $m$ is confined to the rectangular box $0<x<L_x$, $0<y<L_y$, $0<z<L_z$ by an infinite potential: $V=0$ inside and $V=\infty$ outside. Derive the allowed energies and the normalized eigenfunctions, state the allowed values of the quantum numbers $n_x,n_y,n_z$, and verify the normalization.`,
    meaning: r`A box is three one-dimensional wells side by side. Each direction has its own standing wave, and the energies simply add.`,
    linkedFormal: r`Inside the box the [[Time-Independent Schrödinger Equation|Schrödinger equation]] is $-\dfrac{\hbar^2}{2m}\nabla^2\psi=E\psi$ and $\psi=0$ on the walls. The solutions are $\psi_{n_xn_yn_z}=\sqrt{\dfrac{8}{L_xL_yL_z}}\sin\dfrac{n_x\pi x}{L_x}\sin\dfrac{n_y\pi y}{L_y}\sin\dfrac{n_z\pi z}{L_z}$ with energies $E=\dfrac{\pi^2\hbar^2}{2m}\left(\dfrac{n_x^2}{L_x^2}+\dfrac{n_y^2}{L_y^2}+\dfrac{n_z^2}{L_z^2}\right)$, where each $n$ is $1,2,3,\ldots$. The method is [[Separation of Variables in Three Dimensions|separation of variables]], and each factor is an [[Infinite Square Well|infinite square well]] solution.`,
    example: r`For a cube of side $L$ the ground state is $n_x=n_y=n_z=1$ with $E=\dfrac{3\pi^2\hbar^2}{2mL^2}$. For a box with $L_x=L$, $L_y=2L$, $L_z=3L$ the ground energy is $\dfrac{\pi^2\hbar^2}{2mL^2}\left(1+\tfrac14+\tfrac19\right)=\dfrac{49}{36}\dfrac{\pi^2\hbar^2}{2mL^2}$.`,
    pretest: {
      prompt: r`A particle in a one-dimensional infinite well of width $L$ has $E_n=\dfrac{n^2\pi^2\hbar^2}{2mL^2}$. If the width is doubled, what happens to the ground-state energy?`,
      options: [r`It becomes one quarter as large`, r`It becomes half as large`, r`It does not change`],
      correct: 0,
      explanation: r`The energy contains $1/L^2$. Doubling $L$ makes $1/L^2$ four times smaller.`,
    },
    check: {
      prompt: r`A particle is trapped in a box. What must the wave function be at the walls and outside the box?`,
      options: [r`Zero at the walls and zero outside`, r`Equal to one at the walls and zero outside`, r`Largest at the walls and decaying outside`],
      correct: 0,
      explanation: r`The potential is infinite outside, so the particle can never be found there. The wave function must be continuous, so it is zero on the walls too.`,
    },
    faq: [
      { q: r`Why is the box a product of three wells?`, a: r`Because the potential splits into a sum $V_x+V_y+V_z$ (zero inside the box in every direction). Then the equation separates, as in [[Separation of Variables in Three Dimensions|separation of variables]].` },
      { q: r`Why do the quantum numbers start at 1 and not at 0?`, a: r`The choice $n=0$ gives $\sin 0=0$ for all $x$. That is the zero function, which is no state at all and cannot be normalized.` },
      { q: r`Where does the factor $\sqrt{8/(L_xL_yL_z)}$ come from?`, a: r`Each direction contributes $\sqrt{2/L}$ so that $\int_0^L(\sqrt{2/L}\sin\frac{n\pi x}{L})^2dx=1$. The three factors multiply to $\sqrt{8/(L_xL_yL_z)}$.` },
    ],
    proof: {
      idea: r`Treat each direction as its own one-dimensional well. Solve the one-dimensional problem once, then multiply the three solutions and add the three energies.`,
      steps: [
        {
          title: "Write the equation and the walls",
          text: r`Inside the box $V=0$, so the [[Time-Independent Schrödinger Equation|Schrödinger equation]] reads $-\dfrac{\hbar^2}{2m}\left(\dfrac{\partial^2\psi}{\partial x^2}+\dfrac{\partial^2\psi}{\partial y^2}+\dfrac{\partial^2\psi}{\partial z^2}\right)=E\psi$. Outside the box $V=\infty$, so $\psi=0$ there. Since $\psi$ is continuous, it must also be zero on every wall: [[Boundary Condition|boundary conditions]] $\psi=0$ at $x=0,L_x$, $y=0,L_y$ and $z=0,L_z$.`,
          check: chk(r`Why must the wave function be zero on the walls of an infinite box?`, r`It is zero outside and the wave function is continuous`, r`The particle sits exactly on the wall`, r`The energy is zero on the wall`, r`An infinite potential forbids the particle outside. A continuous function that is zero just outside must be zero on the wall.`, "Boundary Condition"),
        },
        {
          title: "Separate the variables",
          text: r`Because the potential is a sum of three parts, try the product $\psi=X(x)Y(y)Z(z)$ as in [[Separation of Variables in Three Dimensions|separation of variables]]. Dividing by $XYZ$ gives $-\dfrac{\hbar^2}{2m}\dfrac{X''}{X}-\dfrac{\hbar^2}{2m}\dfrac{Y''}{Y}-\dfrac{\hbar^2}{2m}\dfrac{Z''}{Z}=E$. Each term depends on one variable only, so each must be a constant, $E_x$, $E_y$, $E_z$, with $E=E_x+E_y+E_z$. Now we have three one-dimensional equations, for example $-\dfrac{\hbar^2}{2m}X''=E_xX$.`,
          check: chk(r`After separation, how does the total energy $E$ relate to the three direction constants?`, r`$E=E_x+E_y+E_z$`, r`$E=E_xE_yE_z$`, r`$E=\max(E_x,E_y,E_z)$`, r`The three terms in the equation add up to $E$ and each equals its own constant, so the constants add.`, "Separation of Variables in Three Dimensions"),
        },
        {
          title: "Solve one direction",
          text: r`The equation $X''=-k^2X$ with $k^2=2mE_x/\hbar^2$ has solutions $A\sin kx+B\cos kx$. The condition $X(0)=0$ kills the cosine, so $X=A\sin kx$. The condition $X(L_x)=0$ needs $\sin kL_x=0$, so $kL_x=n_x\pi$ with $n_x$ a whole number. The value $n_x=0$ gives $X\equiv0$, which is no state, and negative $n_x$ only repeats the same function with a minus sign. So $n_x=1,2,3,\ldots$ and $E_x=\dfrac{\hbar^2k^2}{2m}=\dfrac{\pi^2\hbar^2n_x^2}{2mL_x^2}$.`,
          check: chk(r`Why is $n_x=0$ not allowed for a particle in a box?`, r`It gives $\sin 0=0$ for all $x$, so there is no particle`, r`It gives infinite energy`, r`It gives a negative energy`, r`With $n_x=0$ the function is identically zero. It cannot be normalized, so it is not a state.`, "Infinite Square Well"),
        },
        {
          title: "Combine the three directions",
          text: r`The same argument works for $y$ and $z$. Multiplying the three solutions and adding the three energies gives $\psi=A\sin\dfrac{n_x\pi x}{L_x}\sin\dfrac{n_y\pi y}{L_y}\sin\dfrac{n_z\pi z}{L_z}$ and $E=\dfrac{\pi^2\hbar^2}{2m}\left(\dfrac{n_x^2}{L_x^2}+\dfrac{n_y^2}{L_y^2}+\dfrac{n_z^2}{L_z^2}\right)$ with $n_x,n_y,n_z=1,2,3,\ldots$, each independently. A state is labelled by the three numbers.`,
          check: chk(r`A box has sides $L_x=L_y=L_z=L$. What is the energy of the state $(n_x,n_y,n_z)=(1,2,1)$?`, r`$\dfrac{6\pi^2\hbar^2}{2mL^2}$`, r`$\dfrac{4\pi^2\hbar^2}{2mL^2}$`, r`$\dfrac{3\pi^2\hbar^2}{2mL^2}$`, r`Add the squares: $1^2+2^2+1^2=6$, so $E=6\cdot\dfrac{\pi^2\hbar^2}{2mL^2}$.`, "Integer"),
        },
        {
          title: "Normalize one direction",
          text: r`The wave function must obey $\iiint|\psi|^2\,dx\,dy\,dz=1$ ([[Normalization|normalization]]). Because $\psi$ is a product, the triple [[Integral|integral]] is a product of three single integrals. We use $\displaystyle\int_0^{L}\sin^2\dfrac{n\pi x}{L}\,dx=\dfrac{L}{2}$, which holds for every whole number $n\ge1$, since $\sin^2$ averages to $\tfrac12$ over whole half-waves.`,
          check: chk(r`What is $\displaystyle\int_0^{L}\sin^2\dfrac{n\pi x}{L}\,dx$ for a whole number $n\ge1$?`, r`$\dfrac{L}{2}$`, r`$L$`, r`$\dfrac{L}{4}$`, r`Using $\sin^2u=\tfrac12(1-\cos2u)$, the cosine part integrates to zero over whole half-waves, leaving $\tfrac12L$.`, "Integral"),
        },
        {
          title: "Fix the constant and verify",
          text: r`The triple integral is $A^2\cdot\dfrac{L_x}{2}\cdot\dfrac{L_y}{2}\cdot\dfrac{L_z}{2}=A^2\dfrac{L_xL_yL_z}{8}$. Setting this equal to $1$ gives $A=\sqrt{\dfrac{8}{L_xL_yL_z}}$. Substituting back: $\dfrac{8}{L_xL_yL_z}\cdot\dfrac{L_xL_yL_z}{8}=1$, so the normalization is verified.`,
          check: chk(r`The triple integral of $|\psi|^2$ with constant $A$ is $A^2\dfrac{L_xL_yL_z}{8}$. What value of $A$ gives probability one?`, r`$A=\sqrt{\dfrac{8}{L_xL_yL_z}}$`, r`$A=\dfrac{8}{L_xL_yL_z}$`, r`$A=\sqrt{\dfrac{L_xL_yL_z}{8}}$`, r`Solve $A^2\dfrac{L_xL_yL_z}{8}=1$ for $A$.`, "Normalization"),
        },
      ],
      conclusion: r`The normalized eigenfunctions are $\psi_{n_xn_yn_z}=\sqrt{\dfrac{8}{L_xL_yL_z}}\sin\dfrac{n_x\pi x}{L_x}\sin\dfrac{n_y\pi y}{L_y}\sin\dfrac{n_z\pi z}{L_z}$ with energies $E=\dfrac{\pi^2\hbar^2}{2m}\left(\dfrac{n_x^2}{L_x^2}+\dfrac{n_y^2}{L_y^2}+\dfrac{n_z^2}{L_z^2}\right)$, where $n_x,n_y,n_z=1,2,3,\ldots$ $\blacksquare$`,
      example: {
        text: r`A cube of side $L$. The state $(1,1,1)$ has $\psi=\sqrt{8/L^3}\sin\frac{\pi x}{L}\sin\frac{\pi y}{L}\sin\frac{\pi z}{L}$ and $E=3\epsilon$ with $\epsilon=\frac{\pi^2\hbar^2}{2mL^2}$. The normalization is $\frac{8}{L^3}\cdot\left(\frac L2\right)^3=1$. The state $(2,1,1)$ has $E=(4+1+1)\epsilon=6\epsilon$.`,
      },
    },
    question: {
      plain: r`A particle is trapped in a rectangular box with impenetrable walls. Find its allowed energies and wave functions, say which whole numbers are allowed, and check that the total probability is $1$.`,
      faq: [
        { q: r`What does "infinite box" mean physically?`, a: r`The potential is zero inside and infinitely large outside, so the particle can never leave. The only condition is that the wave function is zero on the walls.` },
        { q: r`Do I have to solve a three-dimensional partial differential equation?`, a: r`No. The potential separates, so the problem breaks into three one-dimensional equations that you already know.` },
        { q: r`Which values of the quantum numbers are allowed?`, a: r`Each of $n_x,n_y,n_z$ is a positive integer, $1,2,3,\ldots$. Zero is excluded because it gives no wave function.` },
        { q: r`What does "verify the normalization" ask me to do?`, a: r`Integrate $|\psi|^2$ over the whole box and show the answer is $1$. Use the fact that the integral splits into three single integrals.` },
        { q: r`Is the energy always positive?`, a: r`Yes. Every term is a square, and the smallest is $n=1$, so even the ground state has positive energy. This is the box version of zero-point energy.` },
      ],
      keywords: [
        "rectangular box|three-dimensional box|3D box", "infinite potential|infinite walls|hard walls", "potential zero inside|V=0 inside|zero inside",
        "wave function is zero at walls|boundary conditions|psi equals zero at walls", "separation of variables|product wave function|X(x)Y(y)Z(z)",
        "separation constants|Ex Ey Ez|three constants", "energies add|total energy is the sum|E=Ex+Ey+Ez", "sine standing waves|sin(n pi x/L)|standing wave",
        "quantization condition|k L = n pi|kL=n pi", "quantum numbers|nx ny nz|three quantum numbers", "n starts at one|n=0 excluded|zero is not allowed",
        "energy eigenvalues|allowed energies|energy levels", "pi squared hbar squared over 2m|pi^2 hbar^2/2m", "normalization|normalised|probability one",
        "square root of 8 over volume|sqrt(8/V)|8/(LxLyLz)", "integral of sine squared|L/2|sin squared integral", "triple integral|product of three integrals",
        "ground state energy|lowest energy|nx=ny=nz=1",
      ],
      retryPrompt: r`Without looking, explain how the three-dimensional box splits into three one-dimensional wells, why $n=0$ is excluded, and where $\sqrt{8/(L_xL_yL_z)}$ comes from. Write the eigenfunction and the energy in the LaTeX box and recall the key words.`,
      sourcePageText: r`19. Derive the allowed energy eigenvalues for a particle in a rectangular box of dimensions Lx, Ly, Lz. Write the normalized eigenfunction for a particle in a rectangular box and verify its normalization. (Also A35, A36: define a rectangular infinite potential box; write the normalized energy eigenfunction, the energy eigenvalues and the allowed quantum numbers. C8: solve the Schrödinger equation for a particle in a rectangular three-dimensional infinite potential box.)`,
    },
  }),

  // ---------------------------------------------------------------- P10
  problem({
    id: "box-symmetry-degeneracy",
    name: "Symmetry and Degeneracy in a Box",
    group: "eigen",
    symbol: r`g_E`,
    prerequisites: ["Particle in a Rectangular Box", "Degeneracy", "Eigenspace", "Eigenvalue", "Integer"],
    ross: { n: "B22, B23 · A37, A38, C9, C12", label: "Module 4 · Part B Q22, Q23 (with A37, A38, C9, C12)", section: "B", page: 6 },
    title: "Why a cube is more degenerate than a rectangular box",
    statement: r`What is meant by degeneracy of an energy level? Explain why a cubic box has more degeneracy than a rectangular box with unequal sides. Show that the ground state of a rectangular or cubic box is nondegenerate. Give an example of different states with the same energy in a cubic box, and decide whether $(1,2,3)$ and $(3,2,1)$ are degenerate there.`,
    meaning: r`A level is degenerate when several different states share one energy. A cube treats the three directions equally, so swapping the numbers $n_x,n_y,n_z$ never changes the energy.`,
    linkedFormal: r`The [[Degeneracy|degeneracy]] $g$ of an energy $E$ is the number of linearly independent eigenstates with that energy, the dimension of its [[Eigenspace|eigenspace]]. In a box of sides $L_x,L_y,L_z$ the energy is $E\propto n_x^2/L_x^2+n_y^2/L_y^2+n_z^2/L_z^2$. For a cube it is $\propto n_x^2+n_y^2+n_z^2$, which is unchanged when the numbers are swapped. The ground state $(1,1,1)$ is nondegenerate in every box.`,
    example: r`In a cube, $(1,1,2)$, $(1,2,1)$ and $(2,1,1)$ all have $E=6\epsilon$ with $\epsilon=\frac{\pi^2\hbar^2}{2mL^2}$. They are three different standing waves with the same energy.`,
    pretest: {
      prompt: r`Two different wave functions $\psi_1$ and $\psi_2$ have the same energy $E$. What do we call this situation?`,
      options: [r`Degeneracy of the level $E$`, r`Normalization of the level $E$`, r`Superposition collapse`],
      correct: 0,
      explanation: r`More than one independent state with one energy is degeneracy. It has nothing to do with normalization or collapse.`,
    },
    check: {
      prompt: r`In a cubic box, which statement about the states $(n_x,n_y,n_z)$ and $(n_y,n_x,n_z)$ is true?`,
      options: [r`They have the same energy and are different states if $n_x\ne n_y$`, r`They are the same state`, r`They have different energies if $n_x\ne n_y$`],
      correct: 0,
      explanation: r`Swapping two numbers changes the wave function (the nodal planes move) but not $n_x^2+n_y^2+n_z^2$.`,
    },
    faq: [
      { q: r`Is a degenerate level two names for one state?`, a: r`No. Degenerate states are different, independent wave functions. For example $(1,1,2)$ has a node plane along $z$ and $(2,1,1)$ has one along $x$. They only share the energy.` },
      { q: r`Can a rectangular box ever be degenerate?`, a: r`Yes, but only by accident for special side ratios. If $L_x=2L_y$ then $(4,1,n_z)$ and $(2,2,n_z)$ have the same energy.` },
      { q: r`Why does symmetry give degeneracy?`, a: r`If a rotation or reflection maps the box onto itself, it maps solutions to solutions with the same energy. A cube has many such motions, so many states come in groups.` },
    ],
    proof: {
      idea: r`Write the energy as a formula in $n_x,n_y,n_z$. Degeneracy happens whenever two different triples give the same number. A cube has equal side lengths, so reordering the triple never changes the formula.`,
      steps: [
        {
          title: "Define degeneracy",
          text: r`An energy level $E$ is degenerate if there are two or more linearly independent eigenfunctions with that same eigenvalue. The number of such independent eigenfunctions is the degeneracy $g$ of the level. In the box the states are labelled by triples $(n_x,n_y,n_z)$, so we count triples with the same energy.`,
          check: chk(r`What is the degeneracy $g$ of an energy level?`, r`The number of independent eigenstates with that energy`, r`The size of the energy itself`, r`The number of different energies in the spectrum`, r`$g$ counts independent states that share one energy.`, "Degeneracy"),
        },
        {
          title: "Rectangular box with unequal sides",
          text: r`For sides $L_x,L_y,L_z$ the energy is $E=\dfrac{\pi^2\hbar^2}{2m}\left(\dfrac{n_x^2}{L_x^2}+\dfrac{n_y^2}{L_y^2}+\dfrac{n_z^2}{L_z^2}\right)$. When the three sides are different, the three terms carry different weights. Take $L_x:L_y:L_z=1:2:3$. Then $E\propto n_x^2+\tfrac14n_y^2+\tfrac19n_z^2$. Swapping $n_x$ and $n_y$ changes the value: $(2,1,1)$ gives $4+\tfrac14+\tfrac19$ but $(1,2,1)$ gives $1+1+\tfrac19$. So generally different triples have different energies and the levels are not degenerate.`,
          check: chk(r`Box with $L_x:L_y:L_z=1:2:3$. Do $(2,1,1)$ and $(1,2,1)$ have the same energy?`, r`No, the weights $1/L^2$ differ`, r`Yes, both have the same quantum numbers`, r`Yes, because the sum $n_x+n_y+n_z$ is equal`, r`The energy depends on $n^2/L^2$, not on the sum of the $n$'s. With unequal sides the swap changes the value.`, "Particle in a Rectangular Box"),
        },
        {
          title: "The cube",
          text: r`For a cube $L_x=L_y=L_z=L$, so $E=\dfrac{\pi^2\hbar^2}{2mL^2}\left(n_x^2+n_y^2+n_z^2\right)$. This formula does not care about the order of the three numbers. So every reordering of $(n_x,n_y,n_z)$ gives the same energy. The reordered wave functions are different functions, since the sines in $x$, $y$, $z$ have different numbers of nodes. So $(1,1,2)$, $(1,2,1)$ and $(2,1,1)$, all with $E=6\epsilon$, are three states of one level. A triple with three different entries, like $(1,2,3)$, has six reorderings, and $(1,2,3)$ and $(3,2,1)$ are degenerate with $E=14\epsilon$.`,
          check: chk(r`In a cubic box, are the states $(1,2,3)$ and $(3,2,1)$ degenerate?`, r`Yes, both have $n_x^2+n_y^2+n_z^2=14$`, r`No, their quantum numbers differ`, r`No, because $3>1$`, r`Degeneracy means equal energy. Both sums of squares equal $14$, so the states are degenerate.`, "Eigenvalue"),
        },
        {
          title: "The ground state is not degenerate",
          text: r`Each $n$ is at least $1$, so each square $n^2$ is at least $1$, and each term in the energy is smallest when $n=1$. The lowest energy therefore needs all three numbers equal to $1$. Any other triple has at least one number $\ge2$, which raises the energy strictly. So only the triple $(1,1,1)$ has the lowest energy and the ground state is nondegenerate. This holds for a rectangular box and for a cube alike.`,
          check: chk(r`Why is the ground state $(1,1,1)$ of a cube nondegenerate?`, r`Any other triple of positive integers has a strictly larger sum of squares`, r`Because $1$ is the smallest quantum number allowed to repeat`, r`Because the ground state has no wave function`, r`Since $n\ge1$, the minimum of $n_x^2+n_y^2+n_z^2$ is $3$, reached only when all three are $1$.`, "Integer"),
        },
        {
          title: "The origin of the difference",
          text: r`A cube can be turned or reflected so that it looks the same, and in particular the three axes can be exchanged. If $\psi$ solves the equation, the exchanged function also solves it with the same energy. This symmetry produces the groups of equal-energy states. A rectangular box with unequal sides has no such exchange symmetry, so such groups do not appear, except by accident for special side ratios, for example $L_x=2L_y$ where $(4,1,n_z)$ and $(2,2,n_z)$ both give $\tfrac{16}{4}+1=\tfrac44+4=5$ in units of $1/L_y^2$.`,
          check: chk(r`Why does a cube have more degeneracy than a rectangular box with unequal sides?`, r`Exchanging the three axes is a symmetry of the cube, and symmetric partners share the energy`, r`A cube is larger, so it has more states`, r`A cube has fewer boundary conditions`, r`Symmetries map solutions to solutions with equal energy, which forms groups of degenerate states.`, "Eigenspace"),
        },
      ],
      conclusion: r`A level is degenerate when several independent states share its energy. In a cube $E\propto n_x^2+n_y^2+n_z^2$ is unchanged by reordering the triple, so reordered states, such as $(1,1,2),(1,2,1),(2,1,1)$ or $(1,2,3),(3,2,1)$, are degenerate. In a box with unequal sides the weights differ and degeneracy is only accidental. The ground state $(1,1,1)$ is the only triple with the lowest energy, so it is nondegenerate in every box. $\blacksquare$`,
      example: {
        text: r`Cube, in units of $\epsilon=\frac{\pi^2\hbar^2}{2mL^2}$: the states $(1,1,2),(1,2,1),(2,1,1)$ each have $E=1+1+4=6$. A box with $L_x=L$, $L_y=2L$, $L_z=3L$ has $(1,1,2)\to1+\tfrac14+\tfrac49$ and $(2,1,1)\to4+\tfrac14+\tfrac19$, which are different.`,
      },
    },
    question: {
      plain: r`What does it mean for an energy level to be degenerate? Explain why a cube has more degenerate levels than a box with unequal sides, show the lowest state is not degenerate, and decide whether $(1,2,3)$ and $(3,2,1)$ share the same energy in a cube.`,
      faq: [
        { q: r`What does degeneracy mean?`, a: r`Several independent states with exactly the same energy. See [[Degeneracy|degeneracy]].` },
        { q: r`How many questions am I answering?`, a: r`Four parts: define degeneracy, explain cube versus rectangle, show the ground state is nondegenerate, and give example states in a cube.` },
        { q: r`Is $(1,2,3)$ the same state as $(3,2,1)$?`, a: r`No. They are different wave functions. In the cube they have the same energy, so they are degenerate partners.` },
        { q: r`Does a rectangular box never have degeneracy?`, a: r`Not never. It generally has none, but special side ratios give accidental degeneracy.` },
        { q: r`Why is the ground state nondegenerate?`, a: r`Because only the triple $(1,1,1)$ gives the lowest value of the energy formula.` },
      ],
      keywords: [
        "degeneracy|degenerate level|degenerate states", "same energy|equal energy|energy shared", "independent eigenstates|linearly independent states|different states",
        "eigenspace|degenerate subspace", "cubic box|cube", "rectangular box|unequal sides", "Lx=Ly=Lz|equal side lengths|equal sides",
        "energy formula|nx squared plus ny squared plus nz squared|sum of squares", "symmetry|permutation symmetry|exchange of axes", "swap quantum numbers|permute nx ny nz|reordering",
        "(1,1,2)|1,1,2|112", "(1,2,1)|1,2,1|121", "(2,1,1)|2,1,1|211", "(1,2,3) and (3,2,1)|123 and 321|1,2,3", "ground state nondegenerate|ground state is single|ground state not degenerate",
        "(1,1,1)|all ones|nx=ny=nz=1", "accidental degeneracy|special side ratio|coincidence", "nodal planes differ|different wave functions|different nodes",
      ],
      retryPrompt: r`Without looking, explain why swapping quantum numbers changes the state in a cube but not its energy, why the ground state is nondegenerate, and when a rectangular box can still be degenerate. Write the energy formula in the LaTeX box and recall the key words.`,
      sourcePageText: r`22. Compare the energy spectrum of a rectangular box with unequal side lengths and a cubic box. Show that the ground state of a rectangular or cubic box is nondegenerate. 23. For a cubic box, determine whether the states (1,2,3) and (3,2,1) are degenerate. Explain. (Also A37, A38, C9, C12: degeneracy of an energy level; why a cubic box has more degeneracy; examples of states with the same energy; symmetry of the cubic box leads to degeneracy.)`,
    },
  }),

  // ---------------------------------------------------------------- P11
  problem({
    id: "box-degeneracy-counting",
    name: "Counting Degenerate Box States",
    group: "eigen",
    symbol: r`n_x^2+n_y^2+n_z^2`,
    prerequisites: ["Symmetry and Degeneracy in a Box", "Degeneracy", "Integer", "Basic Algebra"],
    ross: { n: "B20, B21 · C10, C11", label: "Module 4 · Part B Q20, Q21 (with C10, C11)", section: "B", page: 6 },
    title: "The lowest cubic-box levels and the degeneracy of 14",
    statement: r`For a particle in a cubic box of side $L$, find the ground-state energy and the first three distinct energy levels with their degeneracies. Determine the degeneracy of the level $n_x^2+n_y^2+n_z^2=14$, and explain why $(1,1,2)$, $(1,2,1)$ and $(2,1,1)$ have the same energy.`,
    meaning: r`Energies in a cubic box depend only on the number $S=n_x^2+n_y^2+n_z^2$. Counting a level means counting the ordered triples of positive whole numbers with that sum of squares.`,
    linkedFormal: r`In a cube $E=S\epsilon$ with $\epsilon=\dfrac{\pi^2\hbar^2}{2mL^2}$ and $S=n_x^2+n_y^2+n_z^2$, $n_i\ge1$. To find the [[Degeneracy|degeneracy]] of a level, list the unordered triples $\{a,b,c\}$ with $a^2+b^2+c^2=S$ and count their orderings: $6$ if all three differ, $3$ if exactly two are equal, $1$ if all are equal.`,
    example: r`$S=6$: the only triple is $\{1,1,2\}$, with two equal entries, so $g=3$. $S=14$: the only triple is $\{1,2,3\}$, all different, so $g=6$.`,
    pretest: {
      prompt: r`How many different ordered triples can you make by rearranging the numbers $1,1,2$?`,
      options: [r`$3$`, r`$6$`, r`$2$`],
      correct: 0,
      explanation: r`Only the position of the number $2$ matters: first, second or third. That is $3$ orderings. Six would be right only if all three numbers were different.`,
    },
    check: {
      prompt: r`A cubic-box level has $S=a^2+b^2+c^2$ with $a,b,c$ all different. How many states does it contain?`,
      options: [r`$6$, the number of orderings of three different numbers`, r`$3$`, r`$1$`],
      correct: 0,
      explanation: r`Three different numbers can be arranged in $3!=6$ ways, and each arrangement is a different state.`,
    },
    faq: [
      { q: r`Why only positive integers?`, a: r`In a box the quantum numbers start at $1$. A triple with a zero would give the zero function, so it is not a state.` },
      { q: r`What are "the first three distinct levels"?`, a: r`The three lowest different values of $S$, namely $3$, $6$ and $9$, not the first three states.` },
      { q: r`What if two different unordered triples give the same $S$?`, a: r`Then the level contains the orderings of both. This first happens in the cube at $S=27$: $\{1,1,5\}$ and $\{3,3,3\}$ give $27$, with $g=3+1=4$.` },
    ],
    proof: {
      idea: r`Every energy is a multiple of $\epsilon$ determined by $S$. List all ways to write $S$ as a sum of three positive squares, then count how many ordered triples each way gives.`,
      steps: [
        {
          title: "Reduce the energy to a whole number",
          text: r`From [[Symmetry and Degeneracy in a Box|the previous problem]], for a cube $E=\epsilon(n_x^2+n_y^2+n_z^2)$ with $\epsilon=\dfrac{\pi^2\hbar^2}{2mL^2}$ and $n_x,n_y,n_z\ge1$. We only need the integer $S=n_x^2+n_y^2+n_z^2$. The smallest value is $S=1+1+1=3$, so the ground-state energy is $E_0=3\epsilon=\dfrac{3\pi^2\hbar^2}{2mL^2}$.`,
          check: chk(r`In a cubic box, what is the ground-state energy?`, r`$\dfrac{3\pi^2\hbar^2}{2mL^2}$`, r`$\dfrac{\pi^2\hbar^2}{2mL^2}$`, r`$0$`, r`The lowest triple is $(1,1,1)$, so $S=3$.`, "Integer"),
        },
        {
          title: "A counting method",
          text: r`To count the states with a given $S$: (1) list the squares $1,4,9,16,\ldots$ that are less than $S$; (2) find all unordered triples of positive integers $a\le b\le c$ with $a^2+b^2+c^2=S$; (3) for each triple count the orderings: $6$ if $a,b,c$ differ, $3$ if exactly two are equal, $1$ if all are equal; (4) add the counts. This works because each ordering of the triple is a different state with the same energy.`,
          check: chk(r`A triple has the form $\{a,a,b\}$ with $a\ne b$. How many ordered triples does it give?`, r`$3$`, r`$6$`, r`$1$`, r`Only the position of $b$ matters: $3$ places.`, "Degeneracy"),
        },
        {
          title: "The first three distinct levels",
          text: r`$S=3$: only $\{1,1,1\}$, so $g=1$. The next values of $S$: $S=4$ and $S=5$ cannot be written as three positive squares ($1+1+1=3$, $1+1+4=6$). So the next is $S=6$: $\{1,1,2\}$, $g=3$. Then $S=9$: $\{1,2,2\}$ since $1+4+4=9$, $g=3$ ($S=7,8$ are impossible). The first three distinct levels are $3\epsilon$ ($g=1$), $6\epsilon$ ($g=3$) and $9\epsilon$ ($g=3$). The next ones continue with $11\epsilon$ ($\{1,1,3\}$, $g=3$), $12\epsilon$ ($\{2,2,2\}$, $g=1$) and $14\epsilon$.`,
          check: chk(r`Which values of $S=n_x^2+n_y^2+n_z^2$ are the lowest three for a cubic box?`, r`$3,\ 6,\ 9$`, r`$3,\ 4,\ 5$`, r`$1,\ 4,\ 9$`, r`The smallest sums of three positive squares are $1+1+1=3$, $1+1+4=6$, $1+4+4=9$.`, "Basic Algebra"),
        },
        {
          title: "Find the triples for $S=14$",
          text: r`The squares below $14$ are $1,4,9$. The largest square used must be $9$, because $4+4+4=12<14$. With $9$: $14-9=5=4+1$, so $9+4+1$. There is no other way. The only unordered triple is $\{1,2,3\}$, since $1^2+2^2+3^2=1+4+9=14$.`,
          check: chk(r`Which unordered triple of positive integers has $a^2+b^2+c^2=14$?`, r`$\{1,2,3\}$`, r`$\{2,2,2\}$`, r`$\{1,1,4\}$`, r`$1+4+9=14$. For $\{2,2,2\}$ the sum is $12$ and for $\{1,1,4\}$ it is $18$.`, "Integer"),
        },
        {
          title: "Count the orderings",
          text: r`The three entries $1,2,3$ are all different, so there are $3!=6$ orderings: $(1,2,3),(1,3,2),(2,1,3),(2,3,1),(3,1,2),(3,2,1)$. Each is a different standing wave and each has $E=14\epsilon$. So the level $n_x^2+n_y^2+n_z^2=14$ has degeneracy $6$. In particular $(1,2,3)$ and $(3,2,1)$ are degenerate partners.`,
          check: chk(r`What is the degeneracy of the cubic-box level $n_x^2+n_y^2+n_z^2=14$?`, r`$6$`, r`$3$`, r`$1$`, r`The only triple is $\{1,2,3\}$, with all entries different, giving $3!=6$ ordered states.`, "Degeneracy"),
        },
        {
          title: "Why $(1,1,2)$, $(1,2,1)$, $(2,1,1)$ agree",
          text: r`Each of these triples has $1^2+1^2+2^2=6$, so each has $E=6\epsilon$. In a cube the three directions are equivalent, so which direction carries the number $2$ does not affect the energy. The three states are different functions: for example $(2,1,1)$ has a node plane at $x=L/2$, while $(1,2,1)$ has it at $y=L/2$.`,
          check: chk(r`Which feature of the cube makes $(1,1,2)$, $(1,2,1)$ and $(2,1,1)$ equal in energy?`, r`The three directions are equivalent, so the energy depends only on the squares' sum`, r`They are all the same wave function`, r`The sum $n_x+n_y+n_z$ is not allowed to change`, r`All three have squares $1,1,4$ in different places, and the energy only adds them.`, "Symmetry and Degeneracy in a Box"),
        },
      ],
      conclusion: r`For the cubic box $E=\epsilon(n_x^2+n_y^2+n_z^2)$: the ground state is $3\epsilon$ ($g=1$), and the first three distinct levels are $3\epsilon$ ($g=1$), $6\epsilon$ ($g=3$) and $9\epsilon$ ($g=3$). The level with $n_x^2+n_y^2+n_z^2=14$ has degeneracy $6$, because only $\{1,2,3\}$ gives $14$ and it has $6$ orderings. $\blacksquare$`,
      example: {
        text: r`Levels of the cubic box in units of $\epsilon$: $3\,(g=1)$, $6\,(3)$, $9\,(3)$, $11\,(3)$, $12\,(1)$, $14\,(6)$. Check $S=11$: $1+1+9=11$ with $\{1,1,3\}$, which has two equal entries, so $g=3$.`,
      },
    },
    question: {
      plain: r`For a cubic box find the lowest energy and the next three different energy levels with how many states each has. Find how many states have $n_x^2+n_y^2+n_z^2=14$ and why $(1,1,2)$, $(1,2,1)$, $(2,1,1)$ have equal energy.`,
      faq: [
        { q: r`Why is the energy written in units of $\pi^2\hbar^2/2mL^2$?`, a: r`Then the energy of each state is just the integer $S=n_x^2+n_y^2+n_z^2$, which is easy to list and compare.` },
        { q: r`Is "first three levels" the same as "first three states"?`, a: r`No. A level is one energy value, and it may contain several states. The first three levels have $1+3+3=7$ states in all.` },
        { q: r`How do I know I have found every triple for $S=14$?`, a: r`List the squares below $14$ and check the largest one used. The squares are $1,4,9$ and only $9+4+1$ works.` },
        { q: r`Why do we count orderings?`, a: r`Different orderings of the triple are different states: the number of nodes along each axis changes. They are the degenerate partners.` },
        { q: r`Why does the question mention $(1,1,2)$, $(1,2,1)$, $(2,1,1)$?`, a: r`It is the standard example of degeneracy caused by the symmetry of the cube. See [[Symmetry and Degeneracy in a Box|symmetry and degeneracy]].` },
      ],
      keywords: [
        "cubic box|cube", "ground state energy|lowest energy|3 pi squared hbar squared over 2mL squared", "energy in units of epsilon|epsilon=pi^2 hbar^2/2mL^2|unit of energy",
        "sum of squares|nx squared plus ny squared plus nz squared|S=nx^2+ny^2+nz^2", "positive integers|n at least one|no zero", "distinct energy levels|first three levels|lowest levels",
        "level 3|S=3|(1,1,1)", "level 6|S=6|(1,1,2)", "level 9|S=9|(1,2,2)", "degeneracy 3|threefold|three states", "degeneracy 1|nondegenerate|single state",
        "level 14|S=14|nx^2+ny^2+nz^2=14", "triple 1,2,3|{1,2,3}|one two three", "six orderings|6 permutations|3 factorial", "list the squares|1 4 9|squares below fourteen",
        "permutations of the triple|reorderings|orderings", "equivalent directions|same energy|cube symmetry", "six-fold degenerate|degeneracy six|g=6",
      ],
      retryPrompt: r`Without looking, explain how to find the levels of a cubic box and their degeneracies, then work out the degeneracy of $n_x^2+n_y^2+n_z^2=14$. Write the energy formula in the LaTeX box and recall the key words.`,
      sourcePageText: r`20. Find the ground-state energy of a particle in a cubic box of side L. Find the first three distinct energy levels of a particle in a cubic box and state their degeneracies. 21. Determine the degeneracy of the energy corresponding to nx^2 + ny^2 + nz^2 = 14. Explain why the states (1,1,2), (1,2,1), and (2,1,1) have the same energy in a cubic box. (Also C10, C11: first few energy levels of the cubic box and their degeneracies; the first excited level.)`,
    },
  }),

  // ---------------------------------------------------------------- P12
  problem({
    id: "anisotropic-oscillator",
    name: "Anisotropic Three-Dimensional Oscillator",
    group: "waves",
    symbol: r`E_{n_xn_yn_z}`,
    prerequisites: ["Separation of Variables in Three Dimensions", "Oscillator Energy Levels from Ladder Operators", "Harmonic Oscillator Potential", "Hamiltonian", "Stationary State", "Degeneracy"],
    ross: { n: "B28, B29, B30 · A45, A47, C13, C18, C19", label: "Module 4 · Part B Q28–Q30 (with A45, A47, C13, C18, C19)", section: "C", page: 6 },
    title: "Three independent oscillators with different frequencies",
    statement: r`Write the potential of an anisotropic three-dimensional harmonic oscillator. Derive its energy eigenvalues from the one-dimensional energies, write its eigenfunctions as products of one-dimensional eigenfunctions, find the ground-state energy for frequencies $\omega_x,\omega_y,\omega_z$, and explain the meaning of $n_x,n_y,n_z$.`,
    meaning: r`The oscillator is a spring in each of the three directions, each with its own stiffness. The motions in the three directions do not disturb each other, so the energy is the sum of three one-dimensional oscillator energies.`,
    linkedFormal: r`$V=\tfrac12m(\omega_x^2x^2+\omega_y^2y^2+\omega_z^2z^2)$ is a sum $V_x+V_y+V_z$, so the problem [[Separation of Variables in Three Dimensions|separates]]. The energies are $E=\hbar\omega_x(n_x+\tfrac12)+\hbar\omega_y(n_y+\tfrac12)+\hbar\omega_z(n_z+\tfrac12)$ and the eigenfunctions are $\psi_{n_x}(x)\psi_{n_y}(y)\psi_{n_z}(z)$, with $n_x,n_y,n_z=0,1,2,\ldots$. The ground energy is $\tfrac12\hbar(\omega_x+\omega_y+\omega_z)$.`,
    example: r`With $\omega_x=\omega$, $\omega_y=2\omega$, $\omega_z=3\omega$ the ground energy is $\tfrac12\hbar\omega(1+2+3)=3\hbar\omega$ and the state $(1,0,0)$ has $E=3\hbar\omega+\hbar\omega=4\hbar\omega$.`,
    pretest: {
      prompt: r`A one-dimensional oscillator of frequency $\omega$ has levels $E_n=\hbar\omega(n+\tfrac12)$. What is its lowest possible energy?`,
      options: [r`$\tfrac12\hbar\omega$`, r`$0$`, r`$\hbar\omega$`],
      correct: 0,
      explanation: r`The lowest level is $n=0$, giving $\tfrac12\hbar\omega$. It is not zero: that is the zero-point energy.`,
    },
    check: {
      prompt: r`The potential $V=\tfrac12m\omega_x^2x^2+\tfrac12m\omega_y^2y^2+\tfrac12m\omega_z^2z^2$ is called anisotropic when...`,
      options: [r`The three frequencies are not all equal`, r`The three frequencies are all equal`, r`The mass depends on the direction only`],
      correct: 0,
      explanation: r`Isotropic means the same in every direction, so equal frequencies. Anisotropic means at least one frequency differs.`,
    },
    faq: [
      { q: r`Why can I use the one-dimensional results?`, a: r`The potential is a sum of one-variable pieces, so the Schrödinger equation splits into three one-dimensional oscillator equations. See [[Separation of Variables in Three Dimensions|separation of variables]].` },
      { q: r`What do $n_x,n_y,n_z$ count?`, a: r`The number of energy quanta $\hbar\omega_x$, $\hbar\omega_y$, $\hbar\omega_z$ in each direction. Each one starts from $0$.` },
      { q: r`Is the ground state degenerate?`, a: r`No. Only $(0,0,0)$ has the lowest energy, whatever the frequencies are.` },
    ],
    proof: {
      idea: r`The potential is the sum of three one-variable potentials, so the equation falls apart into three one-dimensional oscillators. Use their known energies and eigenfunctions and combine them.`,
      steps: [
        {
          title: "The potential is a sum",
          text: r`An anisotropic oscillator has a different spring constant in each direction: $V(x,y,z)=\tfrac12m\omega_x^2x^2+\tfrac12m\omega_y^2y^2+\tfrac12m\omega_z^2z^2=V_x(x)+V_y(y)+V_z(z)$. This is exactly the sum form needed in [[Separation of Variables in Three Dimensions|separation of variables]], so the [[Hamiltonian|Hamiltonian]] splits as $H=H_x+H_y+H_z$ with $H_x=\dfrac{p_x^2}{2m}+\tfrac12m\omega_x^2x^2$, and similarly for $y$ and $z$.`,
          check: chk(r`What property of $V(x,y,z)$ makes the three-dimensional oscillator separable?`, r`It is a sum $V_x(x)+V_y(y)+V_z(z)$`, r`It is a product $V_x(x)V_y(y)V_z(z)$`, r`It is spherically symmetric`, r`A sum of one-variable potentials splits the Hamiltonian into three independent one-dimensional Hamiltonians.`, "Harmonic Oscillator Potential"),
        },
        {
          title: "Three one-dimensional equations",
          text: r`With $\psi=X(x)Y(y)Z(z)$ the equation $H\psi=E\psi$ becomes $H_xX=E_xX$, $H_yY=E_yY$, $H_zZ=E_zZ$ with $E=E_x+E_y+E_z$. Each is a one-dimensional harmonic oscillator, of frequency $\omega_x$, $\omega_y$, $\omega_z$ (in that order).`,
          check: chk(r`After separation, which frequency does the $y$-equation use?`, r`$\omega_y$`, r`$\omega_x$`, r`The average of the three frequencies`, r`Each direction keeps its own spring, so $Y$ solves the oscillator equation with $\omega_y$.`, "Hamiltonian"),
        },
        {
          title: "Use the one-dimensional solutions",
          text: r`From [[Oscillator Energy Levels from Ladder Operators|the one-dimensional oscillator]], $E_x=\hbar\omega_x(n_x+\tfrac12)$ with $n_x=0,1,2,\ldots$, and the eigenfunction is $\psi_{n_x}(x)\propto H_{n_x}\!\left(\sqrt{m\omega_x/\hbar}\,x\right)e^{-m\omega_xx^2/2\hbar}$. The same holds for $y$ and $z$ with $\omega_y$ and $\omega_z$.`,
          check: chk(r`In the $x$-direction, which energies are possible?`, r`$\hbar\omega_x(n_x+\tfrac12)$ with $n_x=0,1,2,\ldots$`, r`$\hbar\omega_x n_x$ with $n_x=1,2,\ldots$`, r`$\hbar\omega_x(n_x+1)$ with $n_x=0,1,\ldots$`, r`The one-dimensional oscillator has half-integer multiples of $\hbar\omega$, starting from $\tfrac12\hbar\omega$.`, "Oscillator Energy Levels from Ladder Operators"),
        },
        {
          title: "Add the energies, multiply the functions",
          text: r`The total energy is $E_{n_xn_yn_z}=\hbar\omega_x(n_x+\tfrac12)+\hbar\omega_y(n_y+\tfrac12)+\hbar\omega_z(n_z+\tfrac12)$ and the eigenfunction is $\psi_{n_xn_yn_z}(x,y,z)=\psi_{n_x}(x)\,\psi_{n_y}(y)\,\psi_{n_z}(z)$. Each of the three quantum numbers runs independently over $0,1,2,\ldots$ and counts the quanta of energy in its own direction. Each factor is normalized, so the product is normalized too, and distinct triples give orthogonal states.`,
          check: chk(r`What does the quantum number $n_y$ count in the anisotropic oscillator?`, r`The number of energy quanta $\hbar\omega_y$ in the $y$-motion`, r`The total number of quanta in all three directions`, r`The angular momentum about the $y$-axis`, r`Each $n$ belongs to one direction and counts the excitation of that one-dimensional oscillator.`, "Stationary State"),
        },
        {
          title: "The ground state",
          text: r`The lowest energy is at $n_x=n_y=n_z=0$, so $E_{000}=\tfrac12\hbar(\omega_x+\omega_y+\omega_z)$ and $\psi_{000}\propto\exp\!\left[-\dfrac{m}{2\hbar}(\omega_xx^2+\omega_yy^2+\omega_zz^2)\right]$, a product of three Gaussians. Only $(0,0,0)$ has this energy, so the ground state is nondegenerate.`,
          check: chk(r`Frequencies $\omega_x=\omega$, $\omega_y=2\omega$, $\omega_z=3\omega$. What is the ground-state energy?`, r`$3\hbar\omega$`, r`$6\hbar\omega$`, r`$\tfrac32\hbar\omega$`, r`$\tfrac12\hbar(\omega+2\omega+3\omega)=\tfrac12\hbar\cdot6\omega=3\hbar\omega$.`, "Zero-Point Energy"),
        },
        {
          title: "Degeneracy: generally none",
          text: r`For a generic choice of frequencies, different triples give different energies, so the levels are nondegenerate. Degeneracy appears only by accident when the frequencies are in rational ratios. For example, with $\omega_x=2\omega_y$ the states $(n_x,n_y)=(1,0)$ and $(0,2)$ with equal $n_z$ have $2(1+\tfrac12)+(0+\tfrac12)=\tfrac72$ and $2(\tfrac12)+(2+\tfrac12)=\tfrac72$ in units of $\hbar\omega_y$. In contrast, the isotropic case $\omega_x=\omega_y=\omega_z$ always has degeneracy, which is the next problem.`,
          check: chk(r`When is an anisotropic oscillator level degenerate?`, r`Only by accident, for frequencies in rational ratios`, r`Always, for every triple of quantum numbers`, r`Never, for any choice of frequencies`, r`With generic frequencies each triple has its own energy, but special ratios like $\omega_x=2\omega_y$ can make two triples agree.`, "Degeneracy"),
        },
      ],
      conclusion: r`The anisotropic oscillator separates into three one-dimensional oscillators. Its eigenfunctions are $\psi_{n_x}(x)\psi_{n_y}(y)\psi_{n_z}(z)$ and its energies are $E=\hbar\omega_x(n_x+\tfrac12)+\hbar\omega_y(n_y+\tfrac12)+\hbar\omega_z(n_z+\tfrac12)$ with $n_x,n_y,n_z=0,1,2,\ldots$. The ground energy is $\tfrac12\hbar(\omega_x+\omega_y+\omega_z)$, and levels are generally nondegenerate. $\blacksquare$`,
      example: {
        text: r`$\omega_x=\omega$, $\omega_y=2\omega$, $\omega_z=3\omega$: $E=\hbar\omega\left(n_x+\tfrac12\right)+2\hbar\omega\left(n_y+\tfrac12\right)+3\hbar\omega\left(n_z+\tfrac12\right)=\hbar\omega(n_x+2n_y+3n_z+3)$. The first states: $(0,0,0)\to3\hbar\omega$, $(1,0,0)\to4\hbar\omega$, $(2,0,0)$ and $(0,1,0)\to5\hbar\omega$. So here $(2,0,0)$ and $(0,1,0)$ are an accidental degenerate pair.`,
      },
    },
    question: {
      plain: r`A 3D oscillator has a different spring strength in each direction. Write its potential, find its energies from the 1D energies, write its wave functions as products, and say what $n_x,n_y,n_z$ mean.`,
      faq: [
        { q: r`What does anisotropic mean?`, a: r`The spring constants, or frequencies, differ between directions. If all three are equal the oscillator is isotropic.` },
        { q: r`Do I need to solve a new differential equation?`, a: r`No. The potential is a sum, so the equation separates into three one-dimensional oscillator equations that are already solved.` },
        { q: r`How do I write the eigenfunction?`, a: r`As the product $\psi_{n_x}(x)\psi_{n_y}(y)\psi_{n_z}(z)$ of one-dimensional oscillator eigenfunctions, each with its own frequency.` },
        { q: r`What are the quantum numbers?`, a: r`Three independent integers $n_x,n_y,n_z=0,1,2,\ldots$, one for each direction. See [[Oscillator Energy Levels from Ladder Operators|the one-dimensional oscillator]].` },
        { q: r`Why is the ground state energy not zero?`, a: r`Each direction contributes its zero-point energy $\tfrac12\hbar\omega$, so the total is $\tfrac12\hbar(\omega_x+\omega_y+\omega_z)$.` },
      ],
      keywords: [
        "anisotropic oscillator|three-dimensional oscillator|3D harmonic oscillator", "potential energy|V=1/2 m omega^2 x^2|spring in each direction", "different frequencies|omega x omega y omega z|three frequencies",
        "separation of variables|separable|product wave function", "sum of potentials|Vx+Vy+Vz|potential is a sum", "three one-dimensional oscillators|independent oscillators|three independent springs",
        "energy eigenvalues|energy levels|allowed energies", "h bar omega (n + 1/2)|hbar omega(n+1/2)|half integer", "total energy is the sum|energies add|E=Ex+Ey+Ez",
        "product of eigenfunctions|psi nx psi ny psi nz|product wave function", "quantum numbers|nx ny nz|three quantum numbers", "number of quanta|quanta in each direction|excitation in each direction",
        "ground state energy|lowest energy|nx=ny=nz=0", "half h bar sum of frequencies|1/2 hbar (omega x+omega y+omega z)|zero-point energy", "Hermite polynomial|Gaussian factor|Hermite Gaussian",
        "nondegenerate|no degeneracy|generic frequencies", "accidental degeneracy|rational ratio of frequencies|special frequencies", "not isotropic|frequencies not equal",
      ],
      retryPrompt: r`Without looking, explain how the anisotropic oscillator reduces to three one-dimensional oscillators, then write its energy formula, its eigenfunction and its ground-state energy. Say when it can be degenerate. Use the LaTeX box for the formulas and recall the key words.`,
      sourcePageText: r`28. Derive the energy eigenvalues of an anisotropic three-dimensional harmonic oscillator from the corresponding one-dimensional energies. 29. Write the eigenfunctions of the three-dimensional harmonic oscillator as products of one-dimensional oscillator eigenfunctions. 30. Find the ground-state energy of the anisotropic oscillator with frequencies wx, wy, wz. (Also A45, A47, C13, C18, C19: potential and energy of an anisotropic oscillator; meaning of the quantum numbers; the oscillator as three independent one-dimensional oscillators.)`,
    },
  }),

  // ---------------------------------------------------------------- P13
  problem({
    id: "isotropic-oscillator-degeneracy",
    name: "Isotropic Oscillator Degeneracy",
    group: "eigen",
    symbol: r`g_N=\tfrac{(N+1)(N+2)}{2}`,
    prerequisites: ["Anisotropic Three-Dimensional Oscillator", "Counting Degenerate Box States", "Counting Solutions of a Sum", "Degeneracy", "Zero-Point Energy"],
    ross: { n: "B31–B35 · A46, A48, A49, C14–C17", label: "Module 4 · Part B Q31–Q35 (with A46, A48, A49, C14–C17)", section: "C", page: 6 },
    title: "Energy levels and degeneracy of the isotropic oscillator",
    statement: r`For the isotropic three-dimensional harmonic oscillator, derive $E_N=\hbar\omega\left(N+\tfrac32\right)$ with $N=n_x+n_y+n_z$ and the degeneracy $g_N=\dfrac{(N+1)(N+2)}{2}$. List the states of $N=0,1,2$, find the degeneracy of $N=3$, compare the lowest levels with the one-dimensional oscillator, and compare the origin of degeneracy with that of the cubic box and of the anisotropic oscillator.`,
    meaning: r`When all three springs are equal, the energy only depends on the total number of quanta $N$. Counting the ways to share $N$ quanta among three directions gives the degeneracy.`,
    linkedFormal: r`For $\omega_x=\omega_y=\omega_z=\omega$ the [[Anisotropic Three-Dimensional Oscillator|anisotropic formula]] becomes $E=\hbar\omega(n_x+n_y+n_z+\tfrac32)=\hbar\omega(N+\tfrac32)$. The [[Degeneracy|degeneracy]] $g_N$ is the number of triples of non-negative integers $(n_x,n_y,n_z)$ with sum $N$, which is $\dbinom{N+2}{2}=\dfrac{(N+1)(N+2)}{2}$ by [[Counting Solutions of a Sum|stars and bars]]. The ground state $N=0$ has $g=1$.`,
    example: r`$N=2$ has $g_2=\dfrac{3\cdot4}{2}=6$ states: $(2,0,0)$, $(0,2,0)$, $(0,0,2)$, $(1,1,0)$, $(1,0,1)$, $(0,1,1)$, all with $E=\tfrac72\hbar\omega$.`,
    pretest: {
      prompt: r`In how many ways can you write $2$ as a sum of three non-negative whole numbers, if the order matters?`,
      options: [r`$6$`, r`$3$`, r`$2$`],
      correct: 0,
      explanation: r`$2+0+0$ in $3$ orderings and $1+1+0$ in $3$ orderings, so $3+3=6$.`,
    },
    check: {
      prompt: r`In the isotropic oscillator, what does the energy $E_N=\hbar\omega(N+\tfrac32)$ depend on?`,
      options: [r`Only the total $N=n_x+n_y+n_z$`, r`Each of $n_x,n_y,n_z$ separately`, r`Only $n_x$`],
      correct: 0,
      explanation: r`With equal frequencies the three terms $\hbar\omega(n+\tfrac12)$ add up to a function of the sum only.`,
    },
    faq: [
      { q: r`What is the difference from the anisotropic oscillator?`, a: r`In the isotropic case all three frequencies are equal. Then only the total number of quanta matters, and many triples have the same energy.` },
      { q: r`Why is the ground state nondegenerate?`, a: r`Only $(0,0,0)$ has $N=0$. This agrees with $g_0=\frac{1\cdot2}{2}=1$.` },
      { q: r`What are "stars and bars"?`, a: r`A way to count sharing $N$ identical quanta among $3$ directions: draw $N$ stars and $2$ bars to separate three groups. See [[Counting Solutions of a Sum|counting solutions of a sum]].` },
    ],
    proof: {
      idea: r`With equal frequencies the energy depends only on the total $N$. So the degeneracy of the level $N$ is the number of ordered triples of non-negative integers that add up to $N$, and we count them.`,
      steps: [
        {
          title: "The energy depends on $N$ only",
          text: r`Put $\omega_x=\omega_y=\omega_z=\omega$ into the [[Anisotropic Three-Dimensional Oscillator|anisotropic energy]]: $E=\hbar\omega(n_x+\tfrac12)+\hbar\omega(n_y+\tfrac12)+\hbar\omega(n_z+\tfrac12)=\hbar\omega(n_x+n_y+n_z+\tfrac32)$. With $N=n_x+n_y+n_z$ this is $E_N=\hbar\omega(N+\tfrac32)$, and $N=0,1,2,\ldots$. Two triples with the same sum have the same energy.`,
          check: chk(r`The states $(2,0,0)$ and $(1,1,0)$ of the isotropic oscillator have...`, r`The same energy, because $N=2$ for both`, r`Different energies, since the triples differ`, r`Zero energy`, r`Both have $n_x+n_y+n_z=2$, and in the isotropic case the energy only depends on this sum.`, "Zero-Point Energy"),
        },
        {
          title: "Count the triples directly",
          text: r`$g_N$ is the number of $(n_x,n_y,n_z)$ with $n_x+n_y+n_z=N$ and each $n\ge0$. Choose $n_x$ first: it can be any value $0,1,\ldots,N$. For a given $n_x$ the remaining quanta $N-n_x$ must be shared by $n_y$ and $n_z$, which gives $N-n_x+1$ choices ($n_y=0,\ldots,N-n_x$ and then $n_z$ is fixed). So $g_N=\sum_{n_x=0}^{N}(N-n_x+1)=(N+1)+N+\cdots+1=\dfrac{(N+1)(N+2)}{2}$.`,
          check: chk(r`For fixed $n_x$, how many pairs $(n_y,n_z)$ of non-negative integers satisfy $n_y+n_z=N-n_x$?`, r`$N-n_x+1$`, r`$N-n_x$`, r`$N-n_x-1$`, r`$n_y$ can be $0,1,\ldots,N-n_x$, which is $N-n_x+1$ values, and $n_z$ is then fixed.`, "Counting Solutions of a Sum"),
        },
        {
          title: "Check with stars and bars",
          text: r`Another way: write $N$ identical quanta as $N$ stars and cut them into three groups (for $x$, $y$, $z$) with $2$ bars. An arrangement is a row of $N+2$ symbols with $2$ of them bars, so there are $\binom{N+2}{2}=\dfrac{(N+2)(N+1)}{2}$ arrangements. This agrees with the sum above.`,
          check: chk(r`How many symbols are in a stars-and-bars row for $N$ quanta shared among $3$ directions?`, r`$N+2$ ($N$ stars and $2$ bars)`, r`$N+3$`, r`$3N$`, r`Three groups need two dividers, so the row has $N$ stars plus $2$ bars.`, "Counting Solutions of a Sum"),
        },
        {
          title: "List the lowest levels",
          text: r`$N=0$: $(0,0,0)$, $g=1$, $E=\tfrac32\hbar\omega$. $N=1$: $(1,0,0),(0,1,0),(0,0,1)$, $g=3$, $E=\tfrac52\hbar\omega$. $N=2$: $(2,0,0),(0,2,0),(0,0,2),(1,1,0),(1,0,1),(0,1,1)$, $g=6$, $E=\tfrac72\hbar\omega$. $N=3$: $(3,0,0),(0,3,0),(0,0,3),(2,1,0),(2,0,1),(1,2,0),(0,2,1),(1,0,2),(0,1,2),(1,1,1)$, $g=10=\dfrac{4\cdot5}{2}$. The ground state is nondegenerate.`,
          check: chk(r`What is the degeneracy of the level $N=3$ of the isotropic oscillator?`, r`$10$`, r`$9$`, r`$6$`, r`$g_3=\dfrac{(3+1)(3+2)}{2}=10$, matching the ten listed triples.`, "Degeneracy"),
        },
        {
          title: "Compare with one dimension and with the cube",
          text: r`A one-dimensional oscillator has levels $\hbar\omega(n+\tfrac12)$, each nondegenerate, with ground energy $\tfrac12\hbar\omega$ and first excited energy $\tfrac32\hbar\omega$. The three-dimensional isotropic oscillator has ground energy $\tfrac32\hbar\omega$ ($g=1$) and first excited energy $\tfrac52\hbar\omega$ ($g=3$): the zero-point energy is three times larger, the spacing is still $\hbar\omega$, and the levels are degenerate. The cubic box has an irregular pattern as in [[Counting Degenerate Box States|its counting problem]]: degeneracies $1,3,3,3,1,6,\ldots$, while the oscillator has the regular pattern $1,3,6,10,\ldots$.`,
          check: chk(r`How do the lowest levels of the 3D isotropic oscillator compare with the 1D oscillator?`, r`3D: $\tfrac32\hbar\omega\ (g=1)$ and $\tfrac52\hbar\omega\ (g=3)$; 1D: $\tfrac12\hbar\omega$ and $\tfrac32\hbar\omega$, both nondegenerate`, r`They are identical`, r`The 3D ground state has zero energy`, r`The 3D ground energy is three zero-point energies. The first excited level has three states, as one of three directions can hold the quantum.`, "Zero-Point Energy"),
        },
        {
          title: "Where the degeneracy comes from",
          text: r`The potential $\tfrac12m\omega^2(x^2+y^2+z^2)=\tfrac12m\omega^2r^2$ depends only on the distance $r$, so every rotation maps solutions to solutions of the same energy. This is a rotational symmetry, and it forces the groups of states. The isotropic oscillator has a still larger hidden symmetry (called $SU(3)$), which explains why all states with equal $N$ are degenerate. In the cube, only the permutations of the three axes are symmetries, so the degeneracy is smaller and irregular. In an anisotropic oscillator no such symmetry is left, so degeneracy is only accidental.`,
          check: chk(r`Which symmetry is behind the degeneracy of the isotropic oscillator?`, r`Rotations about the centre, since $V$ depends only on $r$`, r`Swapping the three axes only`, r`There is no symmetry; it is an accident`, r`$V=\tfrac12m\omega^2r^2$ is unchanged by rotations, and rotated solutions share the energy.`, "Degeneracy"),
        },
      ],
      conclusion: r`For equal frequencies $E_N=\hbar\omega\left(N+\tfrac32\right)$ with $N=n_x+n_y+n_z$. The degeneracy is the number of triples of non-negative integers with sum $N$, namely $g_N=\dfrac{(N+1)(N+2)}{2}$. This gives $g=1,3,6,10$ for $N=0,1,2,3$, the ground state is nondegenerate, and the isotropic case has more degeneracy than the anisotropic case because of its rotational symmetry. $\blacksquare$`,
      example: {
        text: r`$N=2$ with $\omega=1$ and $\hbar=1$: all six states $(2,0,0),(0,2,0),(0,0,2),(1,1,0),(1,0,1),(0,1,1)$ have $E=2+\tfrac32=\tfrac72$. The formula gives $\frac{3\cdot4}{2}=6$. For $N=3$ the formula gives $10$, which matches the list.`,
      },
    },
    question: {
      plain: r`For a 3D oscillator with the same spring in every direction, show the energy is $\hbar\omega(N+\tfrac32)$ and that there are $\tfrac{(N+1)(N+2)}2$ states at level $N$. List the lowest levels and compare with the cube and the unequal-spring oscillator.`,
      faq: [
        { q: r`What does isotropic mean?`, a: r`The same in all directions: the three frequencies are equal, $V=\tfrac12m\omega^2r^2$.` },
        { q: r`How do I get the degeneracy formula?`, a: r`Count the ordered triples of non-negative integers with sum $N$. A direct sum over $n_x$ or stars and bars gives $\frac{(N+1)(N+2)}{2}$.` },
        { q: r`Is the ground state of the isotropic oscillator degenerate?`, a: r`No. Only $(0,0,0)$ has $N=0$, with energy $\tfrac32\hbar\omega$.` },
        { q: r`Why is the anisotropic case less degenerate?`, a: r`Different frequencies give different weights to the quantum numbers, so triples with the same sum generally have different energies. The rotational symmetry is lost.` },
        { q: r`How is this compared with the cubic box?`, a: r`The box energy is $n_x^2+n_y^2+n_z^2$ with $n\ge1$, with only axis-swapping symmetry. The oscillator energy is $N+\tfrac32$ with a regular pattern. See [[Counting Degenerate Box States|the box counting problem]].` },
        { q: r`What is the first excited level of the 3D oscillator?`, a: r`$N=1$, with $E=\tfrac52\hbar\omega$ and three states, one with a quantum in each direction.` },
      ],
      keywords: [
        "isotropic oscillator|equal frequencies|spherical oscillator", "omega x = omega y = omega z|same frequency|equal springs", "energy eigenvalues|energy levels|allowed energies",
        "hbar omega (N + 3/2)|E_N=hbar omega(N+3/2)|N plus three halves", "N = nx + ny + nz|total quantum number|total number of quanta", "energy depends only on N|depends on the sum|same energy same N",
        "degeneracy|degenerate level|number of states", "(N+1)(N+2)/2|g_N|degeneracy formula", "count triples|ordered triples|non-negative integers with sum N", "stars and bars|N stars and 2 bars|binomial N+2 choose 2",
        "ground state nondegenerate|N=0|(0,0,0)", "N=1 three states|(1,0,0)|degeneracy three", "N=2 six states|(1,1,0)|(2,0,0)", "N=3 ten states|(1,1,1)|degeneracy ten",
        "zero-point energy|three halves hbar omega|ground energy 3/2 hbar omega", "compare one dimension|1D oscillator levels|nondegenerate levels in 1D", "rotational symmetry|V depends on r|spherical symmetry",
        "cubic box comparison|permutation symmetry|accidental degeneracy", "anisotropic less degenerate|different frequencies|no rotational symmetry",
      ],
      retryPrompt: r`Without looking, explain why the isotropic oscillator's energy depends only on $N$, derive the degeneracy $\frac{(N+1)(N+2)}{2}$, list the states of $N=2$, and say where its degeneracy comes from compared with the cubic box and the anisotropic oscillator. Use the LaTeX box for the formulas and recall the key words.`,
      sourcePageText: r`31. For an isotropic oscillator, find the energy and degeneracy of the level with nx + ny + nz = 2. 32. List all the states belonging to the N = 2 energy level of the isotropic oscillator. 33. Find the degeneracy of the N = 3 energy level of the isotropic oscillator. 34. Explain why the isotropic oscillator has greater degeneracy than the anisotropic oscillator. 35. Compare the first two energy levels of a one-dimensional oscillator and a three-dimensional isotropic oscillator. (Also A46, A48, A49 and C14-C17: isotropic oscillator, energy E_N = hbar omega (N + 3/2), degeneracy g_N = (N+1)(N+2)/2, comparison with the cubic box.)`,
    },
  }),
];
