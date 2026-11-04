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
      "idea": "Treat simulation runs as a sample of independent Bernoulli flags.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let I_j be 1 if the target event occurs in run j and 0 otherwise, and let its true probability be p.",
          "m": "$$E[I_j]=1\\cdot p+0\\cdot(1-p)=p$$",
          "meaning": "Independent runs must reproduce the same intended model."
        },
        {
          "why": "A flag equals its own square.",
          "m": "$$E[I_j^2]=p,\\quad\\operatorname{Var}(I_j)=p-p^2=p(1-p)$$",
          "meaning": "This is second moment minus squared mean."
        },
        {
          "why": "The success fraction is the average of k run flags.",
          "m": "$$\\hat p_k=\\frac1k\\sum_{j=1}^kI_j$$",
          "meaning": "It is observable even when the exact probability p is unknown."
        },
        {
          "why": "Average the fraction by linearity.",
          "m": "$$E[\\hat p_k]=\\frac{kp}{k}=p$$",
          "meaning": "This explains unbiasedness: across repeated batches, the average estimate equals p."
        },
        {
          "why": "Independence makes the sum variance k p(1−p); averaging rescales it by 1/k².",
          "m": "$$\\operatorname{Var}(\\hat p_k)=\\frac{p(1-p)}k$$",
          "meaning": "A single batch can still differ from p despite being unbiased."
        },
        {
          "why": "Take the square root to find the standard error.",
          "m": "$$\\operatorname{SE}(\\hat p_k)=\\sqrt{p(1-p)/k}\\le\\frac1{2\\sqrt k}$$",
          "meaning": "The last bound follows from p(1−p)=1/4−(p−1/2)²≤1/4."
        },
        {
          "why": "The iid flags are bounded, so E[|I_j|]=p is finite and the strong law applies.",
          "m": "$$\\hat p_k\\longrightarrow p\\quad\\text{almost surely}$$",
          "meaning": "This invokes the already justified strong law; it does not claim zero error for a finite simulation."
        }
      ],
      "ends": "Monte Carlo success fractions are unbiased, have variance p(1−p)/k, and settle almost surely under independent repetition."
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
      "idea": "Fix one desired permutation and compute its successive conditional chances.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "At stage i, choose J_i uniformly among positions 1 through i and swap it into position i.",
          "m": "$$P(J_i=j)=1/i\\quad(1\\le j\\le i)$$",
          "meaning": "Use fresh independent choices, so each choice is uniform even conditional on previous stages."
        },
        {
          "why": "For a fixed target order, its desired last item occupies exactly one of the n current positions.",
          "m": "$$P(\\text{correct item in position }n)=1/n$$",
          "meaning": "The swap selects each remaining item with the same chance."
        },
        {
          "why": "After the last position is fixed, it is never selected again.",
          "m": "$$P(\\text{correct item in position }n-1\\mid\\text{last correct})=1/(n-1)$$",
          "meaning": "The desired next item lies in one of the n−1 still open positions, whatever their current arrangement."
        },
        {
          "why": "Continue this argument until only one unfilled position remains.",
          "m": "$$\\frac1n,\\frac1{n-1},\\ldots,\\frac12,1$$",
          "meaning": "The final item is forced; it needs no new random choice."
        },
        {
          "why": "Multiply these conditional chances by the chain rule.",
          "m": "$$P(\\text{specified target order})=\\frac1n\\frac1{n-1}\\cdots\\frac12=\\frac1{n!}$$",
          "meaning": "Multiplying conditional probabilities is valid even though the evolving arrangements are dependent."
        },
        {
          "why": "There are n! target permutations, each with this same probability.",
          "m": "$$n!\\cdot\\frac1{n!}=1$$",
          "meaning": "Thus all outcomes are accounted for and the shuffle is uniform, including the one-item case."
        }
      ],
      "ends": "The successive-swap shuffle is uniform because every fixed final order requires the same sequence of conditional chances."
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
      "idea": "Use the generalized inverse’s first crossing to equate two cutoff events.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For 0<u<1, define the generalized inverse q(u) of a CDF F.",
          "m": "$$q(u)=\\inf\\{z:F(z)\\ge u\\}$$",
          "meaning": "Infimum means greatest lower bound; the CDF’s limits 0 and 1 ensure this crossing is finite for interior u."
        },
        {
          "why": "Right continuity makes the crossing value itself reach the level u.",
          "m": "$$F(q(u))\\ge u$$",
          "meaning": "There are crossing points arbitrarily close on the right; right continuity carries their ≥u bound to q(u)."
        },
        {
          "why": "If u≤F(x), then x belongs to the crossing set, so its infimum is at most x.",
          "m": "$$u\\le F(x)\\ \\Longrightarrow\\ q(u)\\le x$$",
          "meaning": "This direction follows from the meaning of an infimum."
        },
        {
          "why": "Conversely, if q(u)≤x, monotonicity and the preceding crossing bound give the reverse implication.",
          "m": "$$q(u)\\le x\\ \\Longrightarrow\\ F(x)\\ge F(q(u))\\ge u$$",
          "meaning": "Thus the two cutoff conditions are equivalent, even with jumps and flat CDF pieces."
        },
        {
          "why": "Draw U uniformly on (0,1) and set X=q(U).",
          "m": "$$\\{X\\le x\\}=\\{U\\le F(x)\\}$$",
          "meaning": "Apply the equivalence to the random interior probability level U."
        },
        {
          "why": "A uniform value falls in an interval of length a with probability a.",
          "m": "$$P(U\\le a)=a\\quad(0\\le a\\le1)$$",
          "meaning": "This is the uniform rectangle-area rule."
        },
        {
          "why": "Take probabilities of the equivalent events.",
          "m": "$$P(X\\le x)=P(U\\le F(x))=F(x)$$",
          "meaning": "The generated variable therefore has exactly the target CDF."
        },
        {
          "why": "If F is continuous and strictly increasing, q is its ordinary inverse.",
          "m": "$$F(x)=1-e^{-\\lambda x}\\ \\Longrightarrow\\ X=-\\log(1-U)/\\lambda$$",
          "meaning": "Solve u=1−e^(−λx) by subtraction and logarithms; 1−U is also uniform, so −log(U)/λ is an equivalent generator."
        }
      ],
      "ends": "Inverse transform sampling matches each target cutoff to an interval of the same probability length."
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
      "idea": "Multiply proposal density by acceptance chance, then normalize the accepted sample.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let f be the target density and g a proposal density, with f(y)≤c g(y) and c finite.",
          "m": "$$r(y)=\\frac{f(y)}{cg(y)}\\quad(g(y)>0)$$",
          "meaning": "Require f=0 wherever g=0; values of r on those zero-probability proposal points may be defined arbitrarily."
        },
        {
          "why": "Both densities are nonnegative and integrate to 1, so integrate the envelope inequality.",
          "m": "$$1\\le c,\\quad0\\le r(y)\\le1$$",
          "meaning": "Thus r(y) is a valid probability of acceptance."
        },
        {
          "why": "Draw Y from g and an independent U uniform on (0,1); accept when U≤r(Y).",
          "m": "$$P(\\text{accept}\\mid Y=y)=r(y)$$",
          "meaning": "Uniform interval length gives the conditional acceptance probability."
        },
        {
          "why": "For any set A of proposal values, multiply and accumulate the joint acceptance contribution.",
          "m": "$$P(Y\\in A,\\text{accept})=\\int_Ag(y)r(y)dy=\\frac1c\\int_Af(y)dy$$",
          "meaning": "The factor g cancels its denominator in r."
        },
        {
          "why": "Set A to the entire support to get the acceptance rate.",
          "m": "$$P(\\text{accept})=1/c$$",
          "meaning": "The target density has total integral 1."
        },
        {
          "why": "Divide the joint acceptance probability by this positive acceptance rate.",
          "m": "$$P(Y\\in A\\mid\\text{accept})=\\int_Af(y)dy$$",
          "meaning": "This is ordinary conditional probability, proving the accepted density is f."
        },
        {
          "why": "Repeat with fresh independent attempts until acceptance.",
          "m": "$$P(\\text{first acceptance at attempt }k)=(1-1/c)^{k-1}/c$$",
          "meaning": "This geometric trial count has mean c by the previously derived geometric mean, and eventual acceptance has probability 1."
        }
      ],
      "ends": "Rejection sampling corrects proposal weights by the acceptance ratio and returns the exact target law when the finite envelope condition holds."
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
      "idea": "Partition the unit interval into pieces having the requested discrete probabilities.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "List target values x_j with masses p_j≥0 summing to 1.",
          "m": "$$c_0=0,\\quad c_j=\\sum_{i=1}^jp_i$$",
          "meaning": "The cumulative endpoints never decrease and tend to 1 for a countably infinite list."
        },
        {
          "why": "Assign value x_j to the interval between successive endpoints.",
          "m": "$$I_j=(c_{j-1},c_j]$$",
          "meaning": "A zero mass gives an empty interval."
        },
        {
          "why": "Two different intervals do not overlap except for endpoints assigned to only one interval by this convention.",
          "m": "$$I_i\\cap I_j=\\varnothing\\quad(i\\ne j)$$",
          "meaning": "The right-closed, left-open rule prevents double assignments."
        },
        {
          "why": "Subtract neighboring cumulative sums to get the interval width.",
          "m": "$$c_j-c_{j-1}=p_j$$",
          "meaning": "All earlier masses cancel, leaving exactly the j-th one."
        },
        {
          "why": "For uniform U on (0,1), interval probability equals interval length.",
          "m": "$$P(U\\in I_j)=p_j$$",
          "meaning": "Single endpoints have probability zero, so implementation endpoint conventions do not change the law."
        },
        {
          "why": "Return X=x_j when U is in I_j.",
          "m": "$$P(X=x_j)=p_j$$",
          "meaning": "For every U<1 in a countable distribution, a cumulative endpoint eventually reaches U; thus a return value exists almost surely."
        },
        {
          "why": "As a check, masses 0.2,0.5,0.3 produce endpoints 0,0.2,0.7,1.",
          "m": "$$(0,0.2],\\ (0.2,0.7],\\ (0.7,1]$$",
          "meaning": "Their lengths are exactly the requested probabilities."
        }
      ],
      "ends": "Discrete inverse transform assigns intervals on the probability scale to support values."
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
    "provenance": "Ross, 10th ed., §10.3, PDF pp. 459–460, Examples 3b–3c.",
    "proof": {
      "idea": "Translate uniform draws into Bernoulli flags or exponential waits, then identify the generated count.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a Bernoulli success chance p, draw U uniform on (0,1).",
          "m": "$$I=\\mathbf1_{\\{U\\le p\\}},\\quad P(I=1)=p$$",
          "meaning": "Uniform interval length produces exactly the desired success probability."
        },
        {
          "why": "Add n independent flags generated from fresh independent uniforms.",
          "m": "$$B=\\sum_{i=1}^nI_i\\sim\\operatorname{Bin}(n,p)$$",
          "meaning": "The binomial pattern-count proof applies to these independent identical trials."
        },
        {
          "why": "For the Poisson algorithm with λ>0, turn each fresh uniform into an exponential wait.",
          "m": "$$E_i=-\\log U_i,\\quad P(E_i>t)=P(U_i<e^{-t})=e^{-t}$$",
          "meaning": "The decreasing log inequality gives the event translation; the uniform probability yields an exponential(1) survival."
        },
        {
          "why": "Taking the negative logarithm converts a product stopping condition into a sum stopping condition.",
          "m": "$$\\prod_{i=1}^NU_i<e^{-\\lambda}\\ \\Longleftrightarrow\\ \\sum_{i=1}^NE_i>\\lambda$$",
          "meaning": "Apply −log, which reverses the product comparison and changes products into sums."
        },
        {
          "why": "The algorithm stops at the first wait sum past time λ.",
          "m": "$$N-1=\\#\\text{ completed arrivals by time }\\lambda$$",
          "meaning": "Continuous waits hit the boundary exactly with probability zero, so either strict comparison convention has the same law."
        },
        {
          "why": "The exponential-wait arrival process is a rate-1 Poisson process, giving the return count.",
          "m": "$$N-1\\sim\\operatorname{Poisson}(\\lambda)$$",
          "meaning": "Equivalently, integrate the gamma arrival density against the final exponential survival: for k≥1, ∫_0^λ e^(−s)s^(k−1)/(k−1)! ·e^(−(λ−s))ds=e^(−λ)λ^k/k!; k=0 is e^(−λ)."
        },
        {
          "why": "For numerical stability accumulate waits instead of a tiny product; for λ=0 return zero.",
          "m": "$$\\text{stop when }\\sum_i(-\\log U_i)>\\lambda$$",
          "meaning": "This retains the exact mathematical condition while avoiding floating-point product underflow."
        }
      ],
      "ends": "Specialized generators are justified by uniform interval probabilities and the logarithm’s conversion of products into exponential waiting times."
    }
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
    "provenance": "Ross, 10th ed., §10.4.1, PDF pp. 460–461.",
    "proof": {
      "idea": "Compute the variance of a paired estimate and prove why monotone functions give negative covariance.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let U be uniform on (0,1), and suppose g(U) has finite variance v and mean m.",
          "m": "$$1-U\\sim\\operatorname{Unif}(0,1)$$",
          "meaning": "Reflecting a uniform interval preserves its lengths, so g(1−U) has the same mean and variance."
        },
        {
          "why": "The antithetic pair average uses two outputs from one reflected input pair.",
          "m": "$$A=\\frac{g(U)+g(1-U)}2,\\quad E[A]=m$$",
          "meaning": "Linearity preserves the mean even though the pair is dependent."
        },
        {
          "why": "Expand the variance of the weighted sum.",
          "m": "$$\\operatorname{Var}(A)=\\frac14[2v+2c]=\\frac{v+c}{2},\\quad c=\\operatorname{Cov}(g(U),g(1-U))$$",
          "meaning": "Each component contributes v; two cross terms contribute 2c."
        },
        {
          "why": "Two independently generated outputs instead have covariance zero.",
          "m": "$$\\operatorname{Var}(A_{\\text{independent}})=v/2$$",
          "meaning": "The reflected pair improves variance for the same two outputs exactly when c<0."
        },
        {
          "why": "Let U' be an independent copy of U and set a(u)=g(u), b(u)=g(1−u).",
          "m": "$$2\\operatorname{Cov}(a(U),b(U))=E[(a(U)-a(U'))(b(U)-b(U'))]$$",
          "meaning": "Expand the product: the two same-input terms equal E[ab], and the independent-input terms equal E[a]E[b]."
        },
        {
          "why": "If g is monotone, a and b change in opposite directions as u grows.",
          "m": "$$(a(u)-a(v))(b(u)-b(v))\\le0$$",
          "meaning": "This is an ordering argument for every pair u,v, including constant portions of g."
        },
        {
          "why": "Average that sign inequality in the covariance identity.",
          "m": "$$c\\le0$$",
          "meaning": "Monotonicity guarantees nonpositive covariance, with strict reduction when it is negative; it need not be strictly negative for constant g."
        },
        {
          "why": "For k independent pairs, averaging their A outputs divides paired variance by k.",
          "m": "$$\\operatorname{Var}(\\bar A_k)=\\frac{v+c}{2k}$$",
          "meaning": "Independence is required across pairs, not within each reflected pair."
        }
      ],
      "ends": "Antithetic averaging preserves the mean and reduces variance when reflection creates negative covariance; the monotone-case sign follows from a simple product-of-differences identity."
    }
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
      "idea": "Preserve the average while removing the within-group variance component.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume E[Y²]<∞ and define m(Z)=E[Y given Z].",
          "m": "$$E[m(Z)]=E[Y]$$",
          "meaning": "The law of total expectation proves the replacement is unbiased for the same mean."
        },
        {
          "why": "Subtract the overall mean and split the deviation at the conditional mean.",
          "m": "$$Y-E[Y]=[Y-m(Z)]+[m(Z)-E[Y]]$$",
          "meaning": "Adding and subtracting m(Z) does not change the observation."
        },
        {
          "why": "Within a fixed Z-group, the first bracket averages to zero.",
          "m": "$$E[Y-m(Z)\\mid Z]=0$$",
          "meaning": "The second bracket is a fixed number inside that group."
        },
        {
          "why": "Expand the squared brackets and average; the cross-product term disappears.",
          "m": "$$\\operatorname{Var}(Y)=E[(Y-m(Z))^2]+E[(m(Z)-E[Y])^2]$$",
          "meaning": "Total expectation carries the conditional-zero cross term to zero overall."
        },
        {
          "why": "Identify the within-group and between-group terms.",
          "m": "$$\\operatorname{Var}(Y)=E[\\operatorname{Var}(Y\\mid Z)]+\\operatorname{Var}(m(Z))$$",
          "meaning": "This also rederives total variance in the simulation notation."
        },
        {
          "why": "The removed within-group term is an average of nonnegative squared deviations.",
          "m": "$$\\operatorname{Var}(m(Z))\\le\\operatorname{Var}(Y)$$",
          "meaning": "Replacing Y by its computable conditional mean removes this source of noise."
        },
        {
          "why": "For k independent repetitions, both estimate variances divide by k.",
          "m": "$$\\operatorname{Var}\\left(\\frac1k\\sum_jm(Z_j)\\right)=\\frac{\\operatorname{Var}(m(Z))}k\\le\\frac{\\operatorname{Var}(Y)}k$$",
          "meaning": "Equality occurs when the removed conditional variance is zero almost surely; computational cost still affects practical efficiency."
        }
      ],
      "ends": "Conditioning preserves the target mean and reduces variance by the average within-group variance."
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
      "idea": "Use a zero-mean correction and minimize its variance by completing a square.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume finite second moments and a known mean μ_Z=E[Z].",
          "m": "$$W=Y+a(Z-\\mu_Z)$$",
          "meaning": "The coefficient a is fixed, and the centered control averages to zero."
        },
        {
          "why": "Use linearity to find the corrected mean.",
          "m": "$$E[W]=E[Y]+a(E[Z]-\\mu_Z)=E[Y]$$",
          "meaning": "The correction therefore preserves the target mean for every fixed a."
        },
        {
          "why": "Write V=Var(Z) and C=Cov(Y,Z), and expand the variance of a sum.",
          "m": "$$\\operatorname{Var}(W)=\\operatorname{Var}(Y)+a^2V+2aC$$",
          "meaning": "Centering Z does not change its variance or its covariance with Y."
        },
        {
          "why": "For V>0, complete the square in a.",
          "m": "$$\\operatorname{Var}(W)=\\operatorname{Var}(Y)-\\frac{C^2}V+V\\left(a+\\frac CV\\right)^2$$",
          "meaning": "Expanding the last square returns a²V+2aC+C²/V, whose constant cancels."
        },
        {
          "why": "A positive multiple of a square is smallest when the square is zero.",
          "m": "$$a^*=-\\frac CV=-\\frac{\\operatorname{Cov}(Y,Z)}{\\operatorname{Var}(Z)}$$",
          "meaning": "This gives the optimum without differentiation."
        },
        {
          "why": "Substitute the optimal coefficient and, when both variances are positive, express C through correlation.",
          "m": "$$\\operatorname{Var}(W^*)=\\operatorname{Var}(Y)-\\frac{C^2}V=\\operatorname{Var}(Y)(1-\\rho^2)$$",
          "meaning": "A stronger linear correlation gives a larger reduction."
        },
        {
          "why": "If V=0, the centered control is zero almost surely and provides no correction.",
          "m": "$$Z-\\mu_Z=0\\quad\\text{almost surely}$$",
          "meaning": "The displayed division by V must then be avoided. Estimating a from the same simulation data also needs separate analysis; this proof assumes a fixed coefficient."
        }
      ],
      "ends": "Control variates preserve the mean through a centered correction and reduce variance through the optimal completed-square coefficient."
    },
    "provenance": "Ross, 10th ed., §10.4.3, PDF pp. 462–463, equations (4.1)–(4.3)."
  }
]
);
