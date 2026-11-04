import { idea, chk } from "../dsl.js";
const r = String.raw;

// Extra supporting idea for problems 12-16 (matrices and continuous bases).
// Trace Cyclicity and Plane Wave now live with their topics in notes/matrices.js and notes/wavesB.js.
export default [
  idea({
    id: "separable-differential-equation",
    name: "Separable Differential Equation",
    group: "ground",
    symbol: r`\dfrac{dy}{dx}=ky`,
    prerequisites: ["Derivative", "Exponential Function"],
    minutes: 4,
    meaning: r`An equation of the form $dy/dx=ky$ says that the rate of change of $y$ is proportional to $y$ itself. Its solutions are exponentials.`,
    linkedFormal: r`If $\dfrac{dy}{dx}=ky$ with a constant $k$ (real or complex), then $y(x)=Ce^{kx}$ for a constant $C$. The number $C$ is fixed by one starting value: $C=y(0)$. This is the kind of equation we solve to find the momentum eigenfunction. See [[Derivative|Derivative]] and [[Exponential Function|Exponential Function]].`,
    example: r`$\dfrac{dy}{dx}=3y$ with $y(0)=2$ has the solution $y=2e^{3x}$. Check: $y'=6e^{3x}=3y$.`,
    pretest: chk(
      r`Which function satisfies $\dfrac{dy}{dx}=3y$ and $y(0)=2$?`,
      r`$2e^{3x}$`,
      r`$3e^{2x}$`,
      r`$2e^{x/3}$`,
      r`The derivative of $2e^{3x}$ is $6e^{3x}=3\cdot2e^{3x}$, and its value at $0$ is $2$. In the other two, the factor $3$ ends up in the wrong place.`,
    ),
    check: chk(
      r`For $y(0)>0$, what does the solution of $y'=-2y$ do as $x$ grows?`,
      r`It dies away like $e^{-2x}$`,
      r`It grows like $e^{2x}$`,
      r`It stays equal to $y(0)$`,
      r`The solution is $y=y(0)e^{-2x}$, and $e^{-2x}$ shrinks as $x$ increases.`,
    ),
    faq: [
      { q: r`Can $k$ be a complex number such as $ip/\hbar$?`, a: r`Yes. The same solution $y=Ce^{kx}$ works. With $k=ip/\hbar$ it is a wave $e^{ipx/\hbar}$ that oscillates instead of growing or dying away.` },
      { q: r`Where does the constant $C$ come from?`, a: r`The equation alone only fixes the shape. A starting value, or in quantum mechanics a normalization condition, fixes $C$.` },
    ],
    proof: {
      idea: r`Multiply $y$ by $e^{-kx}$ and show that the derivative of the product is zero. A function whose derivative is zero everywhere is a constant.`,
      steps: [
        { title: "Differentiate $ye^{-kx}$", text: r`By the product rule, $\dfrac d{dx}\bigl(ye^{-kx}\bigr)=y'e^{-kx}+y\cdot(-k)e^{-kx}=(y'-ky)e^{-kx}$.` },
        { title: "Use the equation", text: r`Since $y'=ky$, the bracket is $0$. So $\dfrac d{dx}\bigl(ye^{-kx}\bigr)=0$.` },
        { title: "A function with zero slope is constant", text: r`If the slope is $0$ everywhere, the graph is flat, so $ye^{-kx}=C$ for some constant $C$. (We accept this fact about derivatives.)` },
        { title: "Solve for $y$", text: r`Multiply by $e^{kx}$: $y=Ce^{kx}$. At $x=0$ we get $y(0)=C$.` },
      ],
      conclusion: r`Every solution of $y'=ky$ is $y=y(0)\,e^{kx}$. $\blacksquare$`,
      example: { text: r`For $y'=-2y$ and $y(0)=5$: $y=5e^{-2x}$. At $x=0.5$ it is $5e^{-1}\approx1.84$.` },
    },
  }),
];
