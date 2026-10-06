import { idea } from "../dsl.js";
const r = String.raw;

// Extra supporting ideas for Module 3, problems 1-6. Only what no existing concept covers.
export default [
  idea({
    id: "power-series",
    name: "Power Series",
    group: "ground",
    symbol: r`\sum_n c_nt^n`,
    prerequisites: ["Polynomial", "Limit", "Convergence"],
    minutes: 3,
    meaning: r`A power series is a polynomial that never stops: $c_0+c_1t+c_2t^2+\cdots$.`,
    linkedFormal: r`A power series is an infinite sum $\sum_{n=0}^{\infty}c_nt^n$. For each value of $t$ it is the [[Limit|limit]] of the partial sums $c_0+c_1t+\cdots+c_Nt^N$, if that limit exists. The values of $t$ where it does are where the series [[Convergence|converges]]. Examples: $e^t=\sum t^n/n!$ converges for every $t$, and $1/(1-t)=\sum t^n$ converges only for $|t|<1$.`,
    example: r`At $t=1$ the series $e^t=1+1+\tfrac12+\tfrac16+\cdots$ adds up to $e\approx2.718$.`,
    pretest: {
      prompt: r`Which of these is the first three partial sums of $1+t+t^2+t^3+\cdots$ at $t=\tfrac12$?`,
      options: [r`$1,\ 1.5,\ 1.75$`, r`$1,\ 2,\ 3$`, r`$0.5,\ 0.75,\ 0.875$`],
      correct: 0,
      explanation: r`Partial sums add one more term each time: $1$, then $1+\tfrac12=1.5$, then $1.5+\tfrac14=1.75$.`,
    },
    check: {
      prompt: r`A power series has partial sums $2,\,2.5,\,2.75,\,2.875,\dots$ creeping up towards 3. What is its sum?`,
      options: [r`$3$`, r`$2.875$`, r`It has no sum`],
      correct: 0,
      explanation: r`The sum of a series is the limit of its partial sums, and these approach 3.`,
    },
    faq: [
      { q: r`Is every power series allowed to be summed?`, a: r`No. Only for the values of $t$ where the partial sums settle down to a limit. Outside that range the series is meaningless.` },
      { q: r`Why do we meet power series in quantum mechanics?`, a: r`Because functions like $e^{A}$ of an operator are defined by putting the operator into the series for the function.` },
    ],
  }),
];
