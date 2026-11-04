import { idea, chk } from "../dsl.js";
const r = String.raw;

// Extra supporting idea for Module 3, problems 1-6. Only what no existing concept covers.
export default [
  idea({
    id: "power-series",
    name: "Power Series",
    group: "ground",
    symbol: r`\sum_n c_nt^n`,
    prerequisites: ["Polynomial", "Limit", "Convergence"],
    minutes: 4,
    meaning: r`A power series is a polynomial that never stops: $c_0+c_1t+c_2t^2+\cdots$. For some values of $t$ the endless sum settles down to a number.`,
    linkedFormal: r`A power series is an endless sum $\sum_{n=0}^{\infty}c_nt^n$. For each value of $t$ it means the [[Limit|limit]] of the partial sums $c_0+c_1t+\cdots+c_Nt^N$, if that limit exists. The values of $t$ where it does are where the series [[Convergence|converges]]. For example $e^t=\sum t^n/n!$ converges for every $t$, and $\dfrac1{1-t}=\sum t^n$ converges only for $|t|<1$. Putting an operator in place of $t$ is how we define a function of an operator.`,
    example: r`At $t=1$ the series $e^t=1+1+\tfrac12+\tfrac16+\cdots$ adds up to $e\approx2.718$.`,
    pretest: chk(
      r`Add the first three terms of $1+t+t^2+t^3+\cdots$ for $t=\tfrac12$, one at a time. What are the running totals?`,
      r`$1,\ 1.5,\ 1.75$`,
      r`$1,\ 2,\ 3$`,
      r`$0.5,\ 0.75,\ 0.875$`,
      r`The running totals add one more term each time: $1$, then $1+\tfrac12=1.5$, then $1.5+\tfrac14=1.75$.`,
    ),
    check: chk(
      r`The running totals of a series are $2,\ 2.5,\ 2.75,\ 2.875,\ \ldots$ creeping up towards $3$. What is the sum of the series?`,
      r`$3$`,
      r`$2.875$`,
      r`It has no sum`,
      r`The sum of a series is the limit of its running totals, and these approach $3$.`,
    ),
    faq: [
      { q: r`Can every power series be added up?`, a: r`No. Only for the values of $t$ where the running totals settle down to a limit. Outside that range the series is meaningless.` },
      { q: r`Why do we meet power series in quantum mechanics?`, a: r`Because functions like $e^{A}$ of an operator are defined by putting the operator into the series for the function.` },
    ],
    proof: {
      idea: r`Find an exact formula for the running totals of the geometric series, then let the number of terms grow.`,
      steps: [
        { title: "The running total", text: r`Let $S_N=1+t+t^2+\cdots+t^N$.` },
        { title: "Multiply by $t$", text: r`$tS_N=t+t^2+\cdots+t^{N+1}$.` },
        { title: "Subtract", text: r`$S_N-tS_N=1-t^{N+1}$, because all middle terms cancel. So $S_N=\dfrac{1-t^{N+1}}{1-t}$ (for $t\ne1$).` },
        { title: "Let $N$ grow when $|t|<1$", text: r`$|t|^{N+1}\to0$ as $N\to\infty$ (a number smaller than $1$ in size, multiplied by itself again and again, shrinks to $0$). So $S_N\to\dfrac1{1-t}$.` },
        { title: "What if $|t|\\ge1$?", text: r`Then $t^{N+1}$ does not shrink to $0$, so $S_N$ does not settle down and the series has no sum.` },
      ],
      conclusion: r`$1+t+t^2+\cdots=\dfrac1{1-t}$ exactly when $|t|<1$. $\blacksquare$`,
      example: { text: r`For $t=\tfrac12$: $S_N=\dfrac{1-(1/2)^{N+1}}{1/2}$. With $N=3$ this is $1.875$, and as $N$ grows it approaches $2=\dfrac1{1-1/2}$.` },
    },
  }),
];
