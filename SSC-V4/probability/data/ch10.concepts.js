var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
CONCEPTS.push(...
[
  {
    "id": "c.prob.10.1.1",
    "sec": "10.1",
    "kind": "technique",
    "tier": "ext",
    "title": "Simulation as a Monte Carlo estimate",
    "oneLine": "Estimate a probability by repeating the experiment and counting successes.",
    "statement": "Run independent copies of the experiment. Set $I_j=1$ if the event happens in run $j$, and 0 otherwise. The estimate $\\hat p_k=(I_1+\\cdots+I_k)/k$ has average $p$, variance $p(1-p)/k$, and approaches $p$ with probability one as $k$ grows. “Unbiased” means that the estimate’s average across repeated batches equals $p$; one batch can still have error.",
    "intuition": "Run the same random experiment many times and count how often the event happens. The fraction is an estimate: more independent runs usually make it wobble less, at a rate proportional to 1/√k.",
    "needs": [],
    "traps": [
      "Simulation estimates a quantity; finite runs do not return the exact probability.",
      "The variance formula assumes independent repetitions under the correct experiment model."
    ],
    "cards": [
      {
        "q": "How is an event probability estimated by simulation?",
        "a": "Run independent repetitions and divide the number of event occurrences by the number of runs.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Treat each run as a 0-or-1 success flag, then average the flags.",
      "why": "A success flag averages to the chance of success. Independence makes the variances add, and the strong law makes the running average settle.",
      "rungs": [
        {
          "why": "A flag is 1 with chance $p$, and its square equals itself. Thus its mean is $p$ and its variance is $p-p^2$.",
          "m": "E[I_j]=p,\\quad Var(I_j)=p(1-p)"
        },
        {
          "why": "Add the $k$ means and variances, then divide the sum by $k$. Dividing by $k$ divides variance by $k^2$.",
          "m": "E[\\hat p_k]=p,\\quad Var(\\hat p_k)=p(1-p)/k"
        },
        {
          "why": "Apply the strong law of large numbers.",
          "m": "\\hat p_k\\to p\\quad\\text{almost surely}"
        }
      ],
      "ends": "Simulation is useful when the target probability is hard to count analytically but the experiment is easy to reproduce."
    },
    "provenance": "Ross, 10th ed., §10.1, PDF pp. 449–450."
  },
  {
    "id": "c.prob.10.1.2",
    "sec": "10.1",
    "kind": "technique",
    "tier": "ext",
    "title": "Uniform random permutation by successive swaps",
    "oneLine": "Shuffle by choosing uniformly from the remaining items at each step.",
    "statement": "Start with $n$ items. For $i=n,n-1,\\ldots,2$, choose $J_i$ uniformly from $1,\\ldots,i$ and swap the items in positions $i$ and $J_i$. This fixes one position at a time. Every final ordering has probability $1/n!$.",
    "intuition": "To shuffle fairly, choose a random item for the last open place, then choose from the items still unplaced for the next place. Each full ordering gets the same chance.",
    "needs": [
      "c.prob.10.1.1"
    ],
    "traps": [
      "At stage i choose only among the first i positions; selecting from all n at every stage is a different procedure and can bias outputs.",
      "Do not confuse the shuffle with repeatedly drawing with replacement."
    ],
    "cards": [
      {
        "q": "What is the choice range at the i-th backward shuffle step?",
        "a": "Uniformly choose an index from 1 through i, then swap with position i.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Fix one target order and ask how likely the shuffle is to choose it.",
      "why": "Every target order requires the same sequence of uniform-choice chances.",
      "rungs": [
        {
          "why": "The last position is assigned one of n items uniformly.",
          "m": "P(\\text{specified item in position }n)=1/n"
        },
        {
          "why": "After fixing the last position, the same algorithm shuffles the other $n-1$ items. Starting from the one-item case, induction gives chance $1/(n-1)!$ for any specified remaining order.",
          "m": "P(\\text{specified remaining order})=1/(n-1)!"
        },
        {
          "why": "Multiply the stage probabilities.",
          "m": "P(\\text{specified permutation})=(1/n)(1/(n-1)!)=1/n!"
        }
      ],
      "ends": "Uniform permutations support unbiased shuffling and random assignment of subjects to treatment groups."
    },
    "provenance": "Ross, 10th ed., §10.1, PDF pp. 450–451, Example 1a."
  },
  {
    "id": "c.prob.10.2.1",
    "sec": "10.2",
    "kind": "theorem",
    "tier": "ext",
    "title": "Inverse transform method",
    "oneLine": "Convert a uniform random number into the value at that point of the cumulative probability scale.",
    "statement": "Draw $U$ uniformly between 0 and 1. Define $F^{-1}(u)=\\inf\\{x:F(x)\\ge u\\}$: the first value where accumulated probability reaches $u$. Then $X=F^{-1}(U)$ has cumulative distribution $F$. This definition works even when $F$ has jumps or flat parts. For a continuous, strictly increasing $F$, it is the ordinary inverse.",
    "intuition": "A uniform draw picks a random spot between 0 and 1. The inverse CDF stretches that spot onto the target distribution so that each cutoff x is reached with chance F(x).",
    "needs": [],
    "traps": [
      "For a discrete c.d.f. use the generalized inverse or cumulative-threshold rule; the usual algebraic inverse may not exist.",
      "The formula −log U gives unit exponential because 1−U is also uniform."
    ],
    "cards": [
      {
        "q": "State the inverse transform recipe.",
        "a": "Generate U uniform on (0,1) and set X=F⁻¹(U), using the generalized inverse.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "A returned value is at most $x$ exactly when the uniform draw has reached no farther than $F(x)$ on the probability scale.",
      "why": "A uniform draw falls in $(0,a]$ with probability $a$ for $0\\le a\\le1$.",
      "rungs": [
        {
          "why": "The cumulative distribution never decreases and is right-continuous. Its first crossing of level $U$ is at most $x$ exactly when the level is no greater than $F(x)$.",
          "m": "F^{-1}(U)\\le x\\iff U\\le F(x)"
        },
        {
          "why": "Use the uniform distribution.",
          "m": "P(X\\le x)=P(U\\le F(x))"
        },
        {
          "why": "Evaluate that probability.",
          "m": "P(X\\le x)=F(x)"
        }
      ],
      "ends": "Therefore the transformed variable has the target distribution; generalized inverses handle jumps."
    },
    "provenance": "Ross, 10th ed., §10.2.1, PDF pp. 452–453, Proposition 2.1 and Example 2a."
  },
  {
    "id": "c.prob.10.2.2",
    "sec": "10.2",
    "kind": "technique",
    "tier": "ext",
    "title": "Rejection sampling",
    "oneLine": "Draw from an easy distribution, then accept with a carefully chosen chance.",
    "statement": "Let $f$ be the density you want and $g$ an easy density to draw from. Choose a finite $c$ with $f(y)\\le cg(y)$ everywhere; wherever $g(y)=0$, require $f(y)=0$. Draw $Y$ from $g$ and independently draw uniform $U$. Keep $Y$ if $U\\le f(Y)/(cg(Y))$; otherwise try again with fresh independent draws. Kept values have density $f$, and each try succeeds with probability $1/c$.",
    "intuition": "Draw a candidate from an easy distribution that covers the target. Keep candidates more often where the target is high and throw away extra candidates where the covering curve is too generous.",
    "needs": [
      "c.prob.10.1.1"
    ],
    "traps": [
      "The bound c must dominate f/g everywhere on the support.",
      "If g(y)=0 where f(y)>0, rejection sampling cannot generate the target there."
    ],
    "cards": [
      {
        "q": "What is the acceptance test in rejection sampling?",
        "a": "Accept proposal Y~g if U≤f(Y)/(c g(Y)), with f≤cg everywhere.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Find the density of proposals that get kept, then divide by the total chance of being kept.",
      "why": "Multiplying proposal density by acceptance chance cancels $g$, leaving $f/c$.",
      "rungs": [
        {
          "why": "At value y, multiply proposal density by acceptance chance.",
          "m": "g(y)\\cdot\\frac{f(y)}{cg(y)}=f(y)/c"
        },
        {
          "why": "Integrate to find the total acceptance probability.",
          "m": "P(accept)=\\int f(y)/c\\,dy=1/c"
        },
        {
          "why": "Among accepted proposals, divide the density $f(y)/c$ by the acceptance probability $1/c$.",
          "m": "f_{Y|accept}(y)=(f(y)/c)/(1/c)=f(y)"
        }
      ],
      "ends": "The number of proposals through the first acceptance is geometric with mean c."
    },
    "provenance": "Ross, 10th ed., §10.2.2, PDF pp. 453–455, Proposition 2.2."
  },
  {
    "id": "c.prob.10.3.1",
    "sec": "10.3",
    "kind": "technique",
    "tier": "ext",
    "title": "Discrete inverse transform",
    "oneLine": "Give each possible value an interval whose length equals its probability.",
    "statement": "For possible values $x_1,x_2,\\ldots$ with chances $p_j$, draw uniform $U$ between 0 and 1. Return $x_j$ if $\\sum_{i<j}p_i<U\\le\\sum_{i\\le j}p_i$. The intervals cover the probability scale and interval $j$ has length $p_j$, so it is chosen with exactly that chance.",
    "intuition": "Lay the possible outcomes along a line from 0 to 1, giving each one a piece as long as its probability. A uniform draw lands on outcome j exactly as often as that piece’s length.",
    "needs": [
      "c.prob.10.2.1"
    ],
    "traps": [
      "Keep the support and cumulative probabilities in the same order.",
      "Boundary conventions on exact endpoints do not affect a continuous uniform input, but the intervals must cover (0,1)."
    ],
    "cards": [
      {
        "q": "How do you simulate from a discrete pmf using one uniform number?",
        "a": "Return the first support value whose cumulative mass is at least U.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "The chance of landing in each uniform interval is its length.",
      "why": "A uniform variable lands in an interval with probability equal to that interval’s length.",
      "rungs": [
        {
          "why": "Add the first $j$ probabilities to get endpoint $c_j$; let $c_0=0$. Interval $j$ runs between two consecutive endpoints.",
          "m": "I_j=(c_{j-1},c_j]"
        },
        {
          "why": "The interval length equals the j-th mass.",
          "m": "P(U\\in I_j)=c_j-c_{j-1}=p_j"
        },
        {
          "why": "Map every interval to its support value.",
          "m": "P(X=x_j)=p_j"
        }
      ],
      "ends": "The method works for every discrete law and requires only cumulative masses."
    },
    "provenance": "Ross, 10th ed., §10.3, PDF p. 458."
  },
  {
    "id": "c.prob.10.3.2",
    "sec": "10.3",
    "kind": "technique",
    "tier": "ext",
    "title": "Specialized discrete generators",
    "oneLine": "Build complicated draws from simpler random draws.",
    "statement": "For a binomial count, run $n$ independent 0-or-1 trials with success chance $p$ and add their results. For a Poisson count with $\\lambda>0$, multiply fresh independent uniforms until the product first falls below $e^{-\\lambda}$. If $N$ uniforms were needed, return $N-1$, which is Poisson with mean $\\lambda$. For $\\lambda=0$, return 0 directly. For very large $\\lambda$, use sums of negative logarithms to avoid numerical underflow.",
    "intuition": "Sometimes a familiar story is a faster recipe than a probability table: count how many independent successes occur, or multiply uniform draws until a stopping rule is met.",
    "needs": [
      "c.prob.10.3.1"
    ],
    "traps": [
      "For the Poisson product algorithm, return N−1, not N.",
      "The Bernoulli uniforms for a binomial must be independent."
    ],
    "cards": [
      {
        "q": "How can a binomial random variable be simulated?",
        "a": "Sum n independent indicators 1{U_i<p}.",
        "kind": "state"
      },
      {
        "q": "In the Poisson product algorithm, what count is returned?",
        "a": "N−1, where N is the first index with product(U_i)<e^(−λ).",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §10.3, PDF pp. 459–460, Examples 3b–3c."
  },
  {
    "id": "c.prob.10.4.1",
    "sec": "10.4",
    "kind": "technique",
    "tier": "ext",
    "title": "Monte Carlo error and antithetic variables",
    "oneLine": "Pair two related draws so that a high value in one tends to balance a low value in the other.",
    "statement": "Suppose $g(U)$ has finite variance for uniform $U$. Both $U$ and $1-U$ are uniform. Their paired estimate $[g(U)+g(1-U)]/2$ has the same mean and variance $[\\operatorname{Var}(g(U))+\\operatorname{Cov}(g(U),g(1-U))]/2$. Two independent draws averaged together have variance $\\operatorname{Var}(g(U))/2$. Thus the pair improves on two independent draws when its covariance is negative, as for a monotone $g$. Use independent pairs across repetitions.",
    "intuition": "Use the same random input twice in opposite directions. If a high first estimate tends to pair with a low second estimate, their average cancels some of the random ups and downs.",
    "needs": [
      "c.prob.10.1.1",
      "c.prob.10.2.1"
    ],
    "traps": [
      "Antithetic pairing preserves each marginal distribution, but variance reduction requires negative covariance.",
      "Monotonicity of g provides a useful sufficient condition in common inverse-transform settings; it is not true for every arbitrary transformation."
    ],
    "cards": [
      {
        "q": "What is the key variance condition for antithetic variables?",
        "a": "The paired outputs should have negative covariance while each retains the target marginal law.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §10.4.1, PDF pp. 460–461."
  },
  {
    "id": "c.prob.10.4.2",
    "sec": "10.4",
    "kind": "theorem",
    "tier": "ext",
    "title": "Conditioning as variance reduction",
    "oneLine": "Average out part of the simulation noise without changing the answer’s mean.",
    "statement": "Suppose $E[Y^2]<\\infty$, so $Y$ has a finite second moment. Replace output $Y$ by its conditional average $E[Y\\mid Z]$, the average over the randomness still unknown when $Z$ is fixed. Then $E[E[Y\\mid Z]]=E[Y]$ and $\\operatorname{Var}(E[Y\\mid Z])\\le\\operatorname{Var}(Y)$. It can reduce noise when this conditional average can be computed.",
    "intuition": "If you know Z, average over the remaining randomness in Y instead of drawing that randomness once. The average has the same overall target but less scatter.",
    "needs": [
      "c.prob.10.1.1"
    ],
    "traps": [
      "You must be able to compute or efficiently approximate E(Y|Z).",
      "The conditional estimate has equal variance only when the residual Y−E(Y|Z) is zero almost surely."
    ],
    "cards": [
      {
        "q": "What happens to mean and variance under conditional expectation?",
        "a": "The mean is unchanged; variance cannot increase.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Separate the overall spread into spread remaining within each fixed $Z$ and spread of the averages across different $Z$ values.",
      "why": "The overall mean is the average of the conditional means. The overall variance is the sum of these two nonnegative spread contributions.",
      "rungs": [
        {
          "why": "Average the averages for all possible $Z$ values; each result receives its original probability.",
          "m": "E[E(Y|Z)]=E[Y]"
        },
        {
          "why": "Write $Y-E[Y]=(Y-E[Y\\mid Z])+(E[Y\\mid Z]-E[Y])$, square, and average. The cross term is zero because $E[Y-E[Y\\mid Z]\\mid Z]=0$.",
          "m": "Var(Y)=E[Var(Y|Z)]+Var(E[Y|Z])"
        },
        {
          "why": "The first term, $E[\\operatorname{Var}(Y\\mid Z)]$, cannot be negative. Removing it leaves a variance no larger than the original.",
          "m": "Var(E[Y|Z])\\le Var(Y)"
        }
      ],
      "ends": "This is the Rao–Blackwell variance reduction principle used by the chapter’s conditional estimator."
    },
    "provenance": "Ross, 10th ed., §10.4.2, PDF pp. 461–462."
  },
  {
    "id": "c.prob.10.4.3",
    "sec": "10.4",
    "kind": "technique",
    "tier": "ext",
    "title": "Control variates",
    "oneLine": "Use a related quantity with a known mean to correct simulation noise.",
    "statement": "Suppose $Y,Z$ have finite second moments and the mean $\\mu_Z=E[Z]$ is known. Use $W=Y+a(Z-\\mu_Z)$ to estimate $E[Y]$. Its mean is still $E[Y]$ because the correction averages to zero. If $\\operatorname{Var}(Z)>0$, the best coefficient is $a^*=-\\operatorname{Cov}(Y,Z)/\\operatorname{Var}(Z)$.",
    "intuition": "Use a second quantity whose average is already known and that tends to rise and fall with your noisy answer. Subtracting its extra fluctuation can make the corrected estimate steadier.",
    "needs": [
      "c.prob.10.1.1"
    ],
    "traps": [
      "Use the centered control Z−E[Z], so the estimator remains unbiased for any a.",
      "The theoretically optimal coefficient depends on covariance and variance; in practice these are estimated from simulation."
    ],
    "cards": [
      {
        "q": "What is the optimal control-variate coefficient?",
        "a": "$a^*=-Cov(Y,Z)/Var(Z)$.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Write the corrected output’s variance as a quadratic in $a$, then find the bottom of that parabola.",
      "why": "The correction has mean zero, so it preserves the answer. The positive coefficient $\\operatorname{Var}(Z)$ makes the quadratic have a unique minimum.",
      "rungs": [
        {
          "why": "Expand Var(Y+a(Z−μ_Z)).",
          "m": "Var(W)=Var(Y)+a^2Var(Z)+2aCov(Y,Z)"
        },
        {
          "why": "The minimum of a quadratic occurs where its slope is zero. Alternatively, complete the square.",
          "m": "2aVar(Z)+2Cov(Y,Z)=0"
        },
        {
          "why": "Solve for the minimizing value.",
          "m": "a^*=-Cov(Y,Z)/Var(Z)"
        }
      ],
      "ends": "At this coefficient, variance is $Var(Y)-Cov(Y,Z)^2/Var(Z)$, which cannot exceed Var(Y)."
    },
    "provenance": "Ross, 10th ed., §10.4.3, PDF pp. 462–463, equations (4.1)–(4.3)."
  }
]
);
