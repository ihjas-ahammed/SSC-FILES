import { idea } from "../dsl.js";
const r = String.raw;

// Extra supporting ideas for problems 12-16 (matrices and continuous bases).
export default [
  idea({
    id: "trace-cyclicity",
    name: "Trace Cyclicity",
    group: "matrices",
    symbol: r`\operatorname{tr}(XY)`,
    prerequisites: ["Trace", "Matrix"],
    minutes: 3,
    meaning: r`The trace does not change when you swap two matrices that are multiplied together: $\operatorname{tr}(XY)=\operatorname{tr}(YX)$.`,
    linkedFormal: r`For square [[Matrix|matrices]] $X$ and $Y$ of the same size, $\operatorname{tr}(XY)=\operatorname{tr}(YX)$. Proof: $\operatorname{tr}(XY)=\sum_i\sum_kX_{ik}Y_{ki}$. The numbers $X_{ik}Y_{ki}$ can be added in any order, so this equals $\sum_k\sum_iY_{ki}X_{ik}=\operatorname{tr}(YX)$. Consequently a product of several matrices may be moved around in a circle: $\operatorname{tr}(XYZ)=\operatorname{tr}(ZXY)=\operatorname{tr}(YZX)$. Swapping only two of three factors is not allowed in general.`,
    example: r`$X=\begin{pmatrix}1&2\\0&1\end{pmatrix}$ and $Y=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. Then $XY=\begin{pmatrix}2&1\\1&0\end{pmatrix}$ with trace $2$, and $YX=\begin{pmatrix}0&1\\1&2\end{pmatrix}$ with trace $2$.`,
    pretest: {
      prompt: r`$X$ and $Y$ are $2\times2$ matrices and $\operatorname{tr}(XY)=7$. What is $\operatorname{tr}(YX)$?`,
      options: [r`$7$`, r`$0$`, r`It cannot be found without the entries`],
      correct: 0,
      explanation: r`The trace of a product does not depend on the order of the two factors, so $\operatorname{tr}(YX)=7$ as well.`,
    },
    check: {
      prompt: r`Which rewrite of $\operatorname{tr}(XYZ)$ is always allowed for square matrices?`,
      options: [r`$\operatorname{tr}(ZXY)$`, r`$\operatorname{tr}(XZY)$`, r`$\operatorname{tr}X\cdot\operatorname{tr}Y\cdot\operatorname{tr}Z$`],
      correct: 0,
      explanation: r`Moving the last factor to the front keeps the circular order $X\to Y\to Z$. Swapping two factors in the middle changes that order.`,
    },
    faq: [
      { q: r`Does this mean $XY=YX$?`, a: r`No. The matrices $XY$ and $YX$ are usually different. Only their traces, the sums of their diagonal entries, are equal.` },
      { q: r`Why does this matter in quantum mechanics?`, a: r`It shows that the [[Trace|trace]] of an operator does not depend on the basis in which you write its matrix, because a basis change only multiplies the matrix by $U^\dagger$ and $U$.` },
    ],
  }),

  idea({
    id: "separable-differential-equation",
    name: "Separable Differential Equation",
    group: "ground",
    symbol: r`\dfrac{dy}{dx}=ky`,
    prerequisites: ["Derivative", "Exponential Function"],
    minutes: 3,
    meaning: r`An equation of the form $dy/dx=ky$ says that the rate of change of $y$ is proportional to $y$. Its solutions are exponentials.`,
    linkedFormal: r`If $\dfrac{dy}{dx}=ky$ with a constant $k$ (real or complex), then $y(x)=Ce^{kx}$ for a constant $C$. To see this, divide by $y$ and integrate: $\int\frac{dy}{y}=\int k\,dx$ gives $\ln y=kx+\text{const}$. Equivalently, $\dfrac{d}{dx}\bigl(ye^{-kx}\bigr)=(y'-ky)e^{-kx}=0$, so $ye^{-kx}$ is a constant $C$. The number $C$ is fixed by one starting value, $C=y(0)$. See [[Derivative|derivative]] and [[Exponential Function|exponential]].`,
    example: r`$\dfrac{dy}{dx}=3y$ with $y(0)=2$ has the solution $y=2e^{3x}$. Check: $y'=6e^{3x}=3y$.`,
    pretest: {
      prompt: r`Which function satisfies $\dfrac{dy}{dx}=3y$ and $y(0)=2$?`,
      options: [r`$2e^{3x}$`, r`$3e^{2x}$`, r`$2e^{x/3}$`],
      correct: 0,
      explanation: r`The derivative of $2e^{3x}$ is $6e^{3x}=3\cdot2e^{3x}$, and its value at $0$ is $2$. In the other two, the factor $3$ ends up in the wrong place.`,
    },
    check: {
      prompt: r`For real $y(0)>0$, what does the solution of $y'=-2y$ do as $x$ grows?`,
      options: [r`It decays like $e^{-2x}$`, r`It grows like $e^{2x}$`, r`It stays equal to $y(0)$`],
      correct: 0,
      explanation: r`The solution is $y=y(0)e^{-2x}$, and $e^{-2x}$ shrinks as $x$ increases.`,
    },
    faq: [
      { q: r`Can $k$ be a complex number such as $ip/\hbar$?`, a: r`Yes. The same solution $y=Ce^{kx}$ works. With $k=ip/\hbar$ it is a wave $e^{ipx/\hbar}$ that oscillates instead of growing or decaying.` },
      { q: r`Where does the constant $C$ come from?`, a: r`The equation alone only fixes the shape. A starting value, or in quantum mechanics a normalization condition, fixes $C$.` },
    ],
  }),

  idea({
    id: "plane-wave",
    name: "Plane Wave",
    group: "waves",
    symbol: r`e^{ipx/\hbar}`,
    prerequisites: ["Exponential Function", "Wave Function", "Planck Constant"],
    minutes: 3,
    meaning: r`A plane wave $e^{ipx/\hbar}$ is the wave function of a particle with exactly one momentum value $p$.`,
    linkedFormal: r`The function $e^{ipx/\hbar}$ has [[Absolute Value|absolute value]] $1$ for real $p$ and $x$, so the [[Probability Density|probability density]] $|e^{ipx/\hbar}|^2=1$ is the same everywhere. It is an eigenfunction of $-i\hbar\,d/dx$ with eigenvalue $p$: $-i\hbar\dfrac d{dx}e^{ipx/\hbar}=p\,e^{ipx/\hbar}$. It has a sharp momentum and no position information, and it is not a normalizable [[Wave Function|wave function]]; it is a [[Generalized State|generalized state]]. The de Broglie wavelength is $\lambda=2\pi\hbar/p$.`,
    example: r`For $p=2\hbar$, $e^{ipx/\hbar}=e^{2ix}$. It repeats every $\pi$ in $x$, which is the wavelength $2\pi\hbar/p=\pi$.`,
    pretest: {
      prompt: r`For real $p$ and $x$, what is $|e^{ipx/\hbar}|^2$?`,
      options: [r`$1$`, r`$e^{2ipx/\hbar}$`, r`$p^2$`],
      correct: 0,
      explanation: r`A number of the form $e^{i\theta}$ lies on the unit circle, so its absolute value is $1$, and so is its square.`,
    },
    check: {
      prompt: r`The plane wave $e^{ipx/\hbar}$ is an eigenfunction of $-i\hbar\,d/dx$ with eigenvalue…`,
      options: [r`$p$`, r`$\hbar p$`, r`$-p$`],
      correct: 0,
      explanation: r`Differentiating gives $(ip/\hbar)e^{ipx/\hbar}$, and multiplying by $-i\hbar$ turns the factor $ip/\hbar$ into $p$.`,
    },
    faq: [
      { q: r`Why can't a real particle be exactly a plane wave?`, a: r`Its density is $1$ everywhere, so $\int|\psi|^2dx$ is infinite and the wave cannot be [[Normalization|normalized]]. Real states are bundles of plane waves with a spread of momenta.` },
      { q: r`What is the link to the momentum basis?`, a: r`The momentum basis states $|p\rangle$ have position wave functions $\langle x|p\rangle$ that are plane waves, multiplied by a normalizing constant $1/\sqrt{2\pi\hbar}$.` },
    ],
  }),
];
