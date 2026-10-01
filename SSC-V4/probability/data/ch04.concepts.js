if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }
CONCEPTS.push(...
[
  {
    "id": "c.prob.4.1.1",
    "sec": "4.1",
    "kind": "definition",
    "tier": "core",
    "title": "Random variable and induced distribution",
    "oneLine": "A random variable assigns a real number to each outcome; its distribution records the probability of each assigned value.",
    "statement": "A random variable is a real-valued function $X:S\\to\\mathbb R$. Its distribution function is $F_X(x)=P(X\\le x)$. The value $X$ is determined by the outcome, while its probability law is induced from the probability measure on outcomes.",
    "intuition": "A random variable is a number-label you attach to each experiment result. A messy card draw can become the simple number “how many hearts appeared”; its distribution tells you how often each number should show up.",
    "needs": [],
    "traps": [
      "A random variable is a function on outcomes, not a value that changes randomly after the outcome is known.",
      "Different experiments or functions can induce the same distribution."
    ],
    "cards": [
      {
        "q": "Define a random variable and its c.d.f.",
        "a": "A random variable is a real-valued function on the sample space; $F_X(x)=P(X\\le x)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §4.1, PDF pp. 131–134; sources/chapters/ch04.pdf and ch04.txt."
  },
  {
    "id": "c.prob.4.1.2",
    "sec": "4.1",
    "kind": "theorem",
    "tier": "core",
    "title": "Basic cumulative distribution function facts",
    "oneLine": "A c.d.f. is nondecreasing, has limits 0 and 1 at the two tails, and is right-continuous.",
    "statement": "For $F(x)=P(X\\le x)$: if $x<y$, then $F(x)\\le F(y)$; $\\lim_{x\\to-\\infty}F(x)=0$; $\\lim_{x\\to\\infty}F(x)=1$; and $F$ is right-continuous.",
    "intuition": "F(x) asks, “What is the chance the number X is at most x?” As you move x right, more results fit, so the answer never goes down; far to the left almost nothing fits, and far to the right everything fits.",
    "needs": [
      "c.prob.4.1.1"
    ],
    "traps": [
      "A c.d.f. need not be continuous; discrete laws have jumps.",
      "Right-continuity is the convention: $F(x)$ includes any atom at x."
    ],
    "cards": [
      {
        "q": "List the four c.d.f. properties used in this chapter.",
        "a": "Nondecreasing; limits 0 at −∞ and 1 at +∞; right-continuous.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Use containment for monotonicity and continuity of probability on increasing or decreasing event sequences for limits and right continuity.",
      "why": "Cumulative events {X≤x} form nested sets, so their probabilities inherit the order and limit behavior.",
      "rungs": [
        {
          "why": "If x≤y then {X≤x} is contained in {X≤y}.",
          "m": "x\\le y\\Rightarrow F(x)\\le F(y)"
        },
        {
          "why": "As x increases to infinity, the events {X≤x} increase to the whole space; as x decreases to −infinity they shrink to the empty event.",
          "m": "\\lim_{x\\to\\infty}F(x)=1,\\qquad\\lim_{x\\to-\\infty}F(x)=0"
        },
        {
          "why": "For x_n decreasing to x, the events {X≤x_n} decrease to {X≤x}; continuity from above gives the right limit.",
          "m": "F(x_n)\\to P(X\\le x)=F(x)"
        }
      ],
      "ends": "These are necessary c.d.f. properties; in this discrete chapter they also let us recover point masses from jumps."
    },
    "provenance": "Ross, 10th ed., §4.1 PDF pp. 133–134 and §4.10 PDF pp. 171–172."
  },
  {
    "id": "c.prob.4.2.1",
    "sec": "4.2",
    "kind": "definition",
    "tier": "core",
    "title": "Discrete random variable and probability mass function",
    "oneLine": "A discrete law assigns nonnegative masses to countably many possible values, summing to one.",
    "statement": "For a discrete X with support values $x_i$, its pmf is $p_X(x_i)=P(X=x_i)$, with $p_X(x_i)\\ge0$ and $\\sum_i p_X(x_i)=1$. For any set A, $P(X\\in A)=\\sum_{x_i\\in A}p_X(x_i)$.",
    "intuition": "A probability mass function is a table of the possible number values and their chances. To find the chance of getting an even number, add the rows for 2, 4, and 6; all table entries together must add to 1.",
    "needs": [
      "c.prob.4.1.1"
    ],
    "traps": [
      "The support is the set of values with positive mass; do not sum over outcomes of the original experiment as if those were necessarily distinct X-values.",
      "A proposed pmf needs both nonnegative entries and total mass one."
    ],
    "cards": [
      {
        "q": "What conditions define a discrete pmf?",
        "a": "Nonnegative masses over a countable support whose sum is 1.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §4.2, PDF pp. 135–137, examples 2a and pmf definition."
  },
  {
    "id": "c.prob.4.3.1",
    "sec": "4.3",
    "kind": "definition",
    "tier": "core",
    "title": "Expected value of a discrete random variable",
    "oneLine": "Expectation is the probability-weighted average of the possible values, when the sum is well-defined.",
    "statement": "For discrete X with pmf p, $E[X]=\\sum_x x p_X(x)$ when $\\sum_x|x|p_X(x)<\\infty$; nonnegative X may have an infinite expectation. For finite support the sum is always finite.",
    "intuition": "The expected value is a probability-weighted balance point, not necessarily a value you can actually see. If a game pays 0 dollars most of the time and 100 dollars rarely, the rare big payout can pull the average upward.",
    "needs": [
      "c.prob.4.2.1"
    ],
    "traps": [
      "Expectation need not be a value X can actually take.",
      "For unbounded signed X, the positive and negative parts both need finite expectation; rearranging a conditionally convergent series is unsafe."
    ],
    "cards": [
      {
        "q": "Give the discrete expectation formula.",
        "a": "$E[X]=\\sum_x xp_X(x)$, provided the series is well-defined (for integrable X, absolutely convergent).",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §4.3, PDF pp. 138–140; sources/chapters/ch04.pdf and ch04.txt."
  },
  {
    "id": "c.prob.4.3.2",
    "sec": "4.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Linearity of expectation",
    "oneLine": "The expectation of a finite sum equals the sum of the expectations; independence is unnecessary.",
    "statement": "For integrable random variables $X_1,\\ldots,X_n$, $E[\\sum_iX_i]=\\sum_iE[X_i]$. In particular, $E[aX+b]=aE[X]+b$.",
    "intuition": "If you combine two costs before taking an average, you get the same average as averaging each cost separately and adding. This works even when the costs move together; independence matters for spread, not for the average.",
    "needs": [
      "c.prob.4.3.1"
    ],
    "traps": [
      "Linearity does not require independence.",
      "Linearity for an infinite sum needs additional convergence conditions; do not infer it blindly from the finite case."
    ],
    "cards": [
      {
        "q": "State linearity of expectation and its independence condition.",
        "a": "$E[\\sum_iX_i]=\\sum_iE[X_i]$; no independence is required.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Write the expectation as a sum over sample outcomes and distribute the finite sum of random-variable values.",
      "why": "Each outcome contributes its probability times the sum of the component values, which splits into component contributions.",
      "rungs": [
        {
          "why": "Evaluate the sum random variable at each outcome s.",
          "m": "(\\sum_iX_i)(s)=\\sum_iX_i(s)"
        },
        {
          "why": "Use the discrete expectation representation and interchange finite sums.",
          "m": "E[\\sum_iX_i]=\\sum_s(\\sum_iX_i(s))P(s)=\\sum_i\\sum_sX_i(s)P(s)"
        },
        {
          "why": "Recognize each inner sum as an expectation.",
          "m": "E[\\sum_iX_i]=\\sum_iE[X_i]"
        }
      ],
      "ends": "The argument uses additivity only, not a product rule or independence assumption."
    },
    "provenance": "Ross, 10th ed., §4.9, PDF pp. 167–170, Proposition 9.1 / Corollary 9.2."
  },
  {
    "id": "c.prob.4.4.1",
    "sec": "4.4",
    "kind": "theorem",
    "tier": "core",
    "title": "LOTUS: expectation of a function",
    "oneLine": "Compute the expectation of g(X) directly from X’s distribution without first finding g(X)’s pmf.",
    "statement": "For discrete X, $E[g(X)]=\\sum_x g(x)p_X(x)$ whenever the sum is well-defined. For a vector of discrete outcomes in a countable sample space, equivalently $E[g(X)]=\\sum_s g(X(s))P(s)$.",
    "intuition": "To average a score after changing it, first look up the changed score for each possible value, then weight by that value’s chance. For example, if X is the number rolled, average X² by squaring each face before weighting, not by squaring the average roll.",
    "needs": [
      "c.prob.4.2.1",
      "c.prob.4.3.1"
    ],
    "traps": [
      "Do not replace $E[g(X)]$ by $g(E[X])$ unless a special identity applies.",
      "If multiple outcomes yield the same X value, their probabilities combine in the pmf."
    ],
    "cards": [
      {
        "q": "State the discrete LOTUS formula.",
        "a": "$E[g(X)]=\\sum_xg(x)P(X=x)$.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Partition outcomes into level sets {X=x}, on each of which g(X) is constant.",
      "why": "It explains why one can use X’s pmf directly instead of deriving a separate law for g(X).",
      "rungs": [
        {
          "why": "Group the expectation over outcomes s by their common X value.",
          "m": "E[g(X)]=\\sum_x\\sum_{s:X(s)=x}g(X(s))P(s)"
        },
        {
          "why": "On each level set, g(X(s)) equals g(x).",
          "m": "=\\sum_xg(x)\\sum_{s:X(s)=x}P(s)"
        },
        {
          "why": "The inner probability is P(X=x).",
          "m": "E[g(X)]=\\sum_xg(x)P(X=x)"
        }
      ],
      "ends": "Taking g(x)=x gives ordinary expectation; taking g(x)=x² gives the second moment."
    },
    "provenance": "Ross, 10th ed., §4.4, PDF pp. 141–143, Proposition 4.1 / examples 4a–4c."
  },
  {
    "id": "c.prob.4.5.1",
    "sec": "4.5",
    "kind": "definition",
    "tier": "core",
    "title": "Variance and standard deviation",
    "oneLine": "Variance is the expected squared distance from the mean; standard deviation is its square root.",
    "statement": "For $\\mu=E[X]$, $\\operatorname{Var}(X)=E[(X-\\mu)^2]$, and $\\operatorname{SD}(X)=\\sqrt{\\operatorname{Var}(X)}$. When second moments exist, $\\operatorname{Var}(X)=E[X^2]-(E[X])^2$.",
    "intuition": "Variance measures how far results tend to sit from the average, with big misses counted extra because the distance is squared. Standard deviation takes the square root to bring the spread back into the original units, such as dollars or minutes.",
    "needs": [
      "c.prob.4.3.1",
      "c.prob.4.4.1"
    ],
    "traps": [
      "$E[X^2]$ is not the variance: subtract $(E[X])^2$.",
      "Adding a constant changes the mean but not the variance; scaling by a multiplies variance by a²."
    ],
    "cards": [
      {
        "q": "State both formulas for variance.",
        "a": "$Var(X)=E[(X-E[X])^2]=E[X^2]-(E[X])^2$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §4.5, PDF pp. 144–147, definition, properties and examples 5a–5c."
  },
  {
    "id": "c.prob.4.5.2",
    "sec": "4.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Variance shift and scale rules",
    "oneLine": "Adding a constant leaves variance unchanged, while multiplying by a scales it by a squared.",
    "statement": "For constants a,b and finite variance, $Var(aX+b)=a^2Var(X)$.",
    "intuition": "Adding 10 to everyone’s score moves the center but does not change how spread out the scores are. Doubling every score doubles each distance from the center, so the variance—based on squared distances—becomes four times as large.",
    "needs": [
      "c.prob.4.5.1"
    ],
    "traps": [
      "Standard deviation scales by $|a|$, not $a^2$.",
      "Do not distribute variance over sums without covariance terms."
    ],
    "cards": [
      {
        "q": "What is Var(aX+b)?",
        "a": "$a^2Var(X)$.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Subtract the transformed mean and factor out a from the centered variable.",
      "why": "The constant b cancels in every deviation, while squaring the scaled deviation produces a².",
      "rungs": [
        {
          "why": "Compute the transformed mean.",
          "m": "E[aX+b]=aE[X]+b"
        },
        {
          "why": "Center the transformed variable.",
          "m": "aX+b-E[aX+b]=a(X-E[X])"
        },
        {
          "why": "Square and take expectation.",
          "m": "Var(aX+b)=E[a^2(X-E[X])^2]=a^2Var(X)"
        }
      ],
      "ends": "The formula includes shift invariance at a=1 and scaling at b=0."
    },
    "provenance": "Ross, 10th ed., §4.5, PDF pp. 144–147."
  },
  {
    "id": "c.prob.4.6.1",
    "sec": "4.6",
    "kind": "definition",
    "tier": "core",
    "title": "Bernoulli and binomial laws",
    "oneLine": "A binomial variable counts successes in n independent, identically distributed Bernoulli trials.",
    "statement": "A Bernoulli(p) variable has P(X=1)=p and P(X=0)=1−p. If X counts successes in n independent trials each with success chance p, then $X\\sim Bin(n,p)$ and $P(X=k)=\\binom nkp^k(1-p)^{n-k}$ for k=0,...,n.",
    "intuition": "A Bernoulli trial is one yes/no attempt, such as whether a package is damaged. A binomial variable counts the yeses in a fixed number of independent attempts that all use the same success chance.",
    "needs": [
      "c.prob.4.2.1"
    ],
    "traps": [
      "Binomial assumptions: fixed n, independent trials, same success probability, two outcomes per trial.",
      "Sampling without replacement from a finite population is generally hypergeometric, not binomial."
    ],
    "cards": [
      {
        "q": "State the binomial pmf and its assumptions.",
        "a": "$P(X=k)=\\binom nkp^k(1-p)^{n-k}$; n independent trials with common success probability p.",
        "kind": "state"
      },
      {
        "q": "What is a Bernoulli(p) pmf?",
        "a": "$P(X=1)=p$, $P(X=0)=1-p$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §4.6, PDF pp. 148–152, equations (6.1)–(6.2)."
  },
  {
    "id": "c.prob.4.6.2",
    "sec": "4.6",
    "kind": "theorem",
    "tier": "core",
    "title": "Binomial mean and variance",
    "oneLine": "For n independent Bernoulli(p) trials, the success count has mean np and variance np(1−p).",
    "statement": "If $X\\sim Bin(n,p)$, then $E[X]=np$ and $Var(X)=np(1-p)$.",
    "intuition": "For 20 independent shots with success chance p, each shot adds an average p success and a spread p(1−p). Add those contributions across the shots to get the count’s mean and variance.",
    "needs": [
      "c.prob.4.6.1",
      "c.prob.4.3.2",
      "c.prob.4.5.1"
    ],
    "traps": [
      "Mean is not the most likely integer in every parameter case; the mode is near (n+1)p.",
      "Variance is np(1−p), not np or np(1−p)²."
    ],
    "cards": [
      {
        "q": "Give mean and variance for Bin(n,p).",
        "a": "Mean np; variance np(1−p).",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Represent the binomial count as a sum of independent Bernoulli indicators.",
      "why": "The indicator decomposition turns a distribution formula into simple additivity of moments.",
      "rungs": [
        {
          "why": "Let I_j mark success on trial j.",
          "m": "X=\\sum_{j=1}^nI_j,\\quad E[I_j]=p"
        },
        {
          "why": "Apply linearity of expectation.",
          "m": "E[X]=\\sum_jE[I_j]=np"
        },
        {
          "why": "Each indicator has variance p(1−p), and independent indicators have zero covariance.",
          "m": "Var(X)=\\sum_jVar(I_j)=np(1-p)"
        }
      ],
      "ends": "The variance addition here depends on independence; the expectation calculation does not."
    },
    "provenance": "Ross, 10th ed., §4.6.1, PDF pp. 152–153."
  },
  {
    "id": "c.prob.4.6.3",
    "sec": "4.6",
    "kind": "technique",
    "tier": "core",
    "title": "Binomial pmf recursion and c.d.f. computation",
    "oneLine": "Adjacent binomial probabilities can be computed recursively instead of evaluating each binomial coefficient.",
    "statement": "For $X\\sim Bin(n,p)$ and k=0,...,n−1, $P(X=k+1)=P(X=k)\\dfrac{n-k}{k+1}\\dfrac p{1-p}$ when 0<p<1. Sum masses through k to obtain $P(X\\le k)$.",
    "intuition": "Neighboring binomial counts are connected: compare the chance of k+1 successes with the chance of k, rather than rebuilding every factorial from scratch. Then add the needed table rows to get a cumulative chance.",
    "needs": [
      "c.prob.4.6.1"
    ],
    "traps": [
      "Use p/(1−p), not (1−p)/p; check the direction by noting that the mass ratio grows with p.",
      "At p=0 or p=1 use the degenerate distribution directly."
    ],
    "cards": [
      {
        "q": "State the adjacent-mass recursion for a binomial law.",
        "a": "$p_{k+1}=p_k\\frac{n-k}{k+1}\\frac p{1-p}$ for 0<p<1.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Divide adjacent binomial pmf terms and cancel common factors.",
      "why": "Only one success is moved from failure to success as k increases by one.",
      "rungs": [
        {
          "why": "Write the two adjacent masses.",
          "m": "p_k=C(n,k)p^k(1-p)^{n-k},\\quad p_{k+1}=C(n,k+1)p^{k+1}(1-p)^{n-k-1}"
        },
        {
          "why": "Cancel common powers and use the ratio of binomial coefficients.",
          "m": "p_{k+1}/p_k=(n-k)/(k+1)\\cdot p/(1-p)"
        }
      ],
      "ends": "The recursion generates all masses from one initial mass; summing them gives the c.d.f."
    },
    "provenance": "Ross, 10th ed., §4.6.2, PDF pp. 154–155, equation (6.3)."
  },
  {
    "id": "c.prob.4.7.1",
    "sec": "4.7",
    "kind": "definition",
    "tier": "core",
    "title": "Poisson law and rare-event approximation",
    "oneLine": "A Poisson(λ) variable counts sparse events with mean rate λ; it approximates Bin(n,p) when n is large and p is small with np≈λ.",
    "statement": "For λ>0, $P(X=k)=e^{-\\lambda}\\lambda^k/k!$, k=0,1,...; $E[X]=Var(X)=\\lambda$. If $n\\to\\infty$, $p\\to0$, and $np\\to\\lambda$, the Bin(n,p) masses approach this pmf.",
    "intuition": "The Poisson law is a model for counts such as calls in a minute when each of many callers has a tiny chance of calling then. Its parameter λ is both the average count and the variance; it also approximates a binomial count when the trials are numerous and rare.",
    "needs": [
      "c.prob.4.2.1",
      "c.prob.4.3.1",
      "c.prob.4.5.1"
    ],
    "traps": [
      "The approximation is strongest when p is small and np is moderate; a small sample or large p may give a poor fit.",
      "The rate parameter λ equals the mean, not the probability of at least one event."
    ],
    "cards": [
      {
        "q": "State the Poisson pmf and its mean/variance.",
        "a": "$P(X=k)=e^{-\\lambda}\\lambda^k/k!$; mean and variance are λ.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Use factorial moments from the Poisson pmf.",
      "why": "Index shifts in the exponential series make the first two factorial moments immediate.",
      "rungs": [
        {
          "why": "Shift the index in E[X].",
          "m": "E[X]=e^{-\\lambda}\\sum_{k\\ge1}k\\lambda^k/k!=\\lambda"
        },
        {
          "why": "Compute the second falling-factorial moment similarly.",
          "m": "E[X(X-1)]=e^{-\\lambda}\\sum_{k\\ge2}k(k-1)\\lambda^k/k!=\\lambda^2"
        },
        {
          "why": "Recover the ordinary second moment and variance.",
          "m": "E[X^2]=\\lambda^2+\\lambda,\\quad Var(X)=E[X^2]-(E[X])^2=\\lambda"
        }
      ],
      "ends": "Thus the Poisson parameter is both the mean event count and its variance."
    },
    "provenance": "Ross, 10th ed., §4.7, PDF pp. 156–162, equation (7.1), limit derivation and examples 7a–7b."
  },
  {
    "id": "c.prob.4.8.1",
    "sec": "4.8",
    "kind": "definition",
    "tier": "core",
    "title": "Geometric law: trials until first success",
    "oneLine": "The geometric variable counts independent Bernoulli trials up to and including the first success.",
    "statement": "For success probability p, $P(X=n)=(1-p)^{n-1}p$, n=1,2,...; $E[X]=1/p$ and $Var(X)=(1-p)/p^2$.",
    "intuition": "For “number of attempts until the first win,” the first n−1 attempts must be losses and attempt n must be a win. Because the chance resets on every independent attempt, the average wait is 1/p.",
    "needs": [
      "c.prob.4.6.1"
    ],
    "traps": [
      "Some conventions count failures before the first success, giving support 0,1,...; this chapter’s variable counts trials and starts at 1.",
      "The memoryless property follows from constant independent success chances."
    ],
    "cards": [
      {
        "q": "State the trials-until-first-success geometric pmf.",
        "a": "$P(X=n)=(1-p)^{n-1}p$, n≥1.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Differentiate the geometric series to obtain its first two moments.",
      "why": "The geometric tail makes trial counts tractable through power-series identities.",
      "rungs": [
        {
          "why": "Sum n q^(n−1) with q=1−p.",
          "m": "E[X]=p\\sum_{n\\ge1}nq^{n-1}=p/(1-q)^2=1/p"
        },
        {
          "why": "Use the second-moment series.",
          "m": "E[X^2]=p\\sum_{n\\ge1}n^2q^{n-1}=p(1+q)/(1-q)^3=(1+q)/p^2"
        },
        {
          "why": "Subtract the squared mean.",
          "m": "Var(X)=(1+q)/p^2-1/p^2=q/p^2=(1-p)/p^2"
        }
      ],
      "ends": "The convention here counts trials including the successful trial, so support begins at one."
    },
    "provenance": "Ross, 10th ed., §4.8.1, PDF pp. 163–164."
  },
  {
    "id": "c.prob.4.8.2",
    "sec": "4.8",
    "kind": "definition",
    "tier": "core",
    "title": "Negative binomial law: trials until r successes",
    "oneLine": "The negative binomial variable counts trials needed to obtain r successes.",
    "statement": "For independent Bernoulli(p) trials, the trial count X of the rth success has $P(X=n)=\\binom{n-1}{r-1}p^r(1-p)^{n-r}$ for n≥r, with $E[X]=r/p$ and $Var(X)=r(1-p)/p^2$.",
    "intuition": "To finish on trial n after r successes, trial n must be a success, and exactly r−1 of the earlier n−1 trials must be successes. That is why the count of ways to place those earlier wins appears in the formula.",
    "needs": [
      "c.prob.4.6.1"
    ],
    "traps": [
      "Do not use $\\binom nr$: the final trial is fixed as a success, so choose the earlier r−1 successes among n−1 slots.",
      "Parameterizations differ: this chapter counts trials, not failures."
    ],
    "cards": [
      {
        "q": "State the negative-binomial pmf when X counts trials through the rth success.",
        "a": "$P(X=n)=\\binom{n-1}{r-1}p^r(1-p)^{n-r}$, n≥r.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "View the waiting time for r successes as the sum of r independent geometric waiting times.",
      "why": "After each success, future Bernoulli trials restart independently with the same success probability.",
      "rungs": [
        {
          "why": "Break the total count into inter-success waiting times.",
          "m": "X=G_1+\\cdots+G_r"
        },
        {
          "why": "Each G_j has geometric mean and variance.",
          "m": "E[G_j]=1/p,\\quad Var(G_j)=(1-p)/p^2"
        },
        {
          "why": "Add means and, by independence, variances.",
          "m": "E[X]=r/p,\\quad Var(X)=r(1-p)/p^2"
        }
      ],
      "ends": "This derivation matches the pmf convention in which X counts trials through the rth success."
    },
    "provenance": "Ross, 10th ed., §4.8.2, PDF pp. 164–165."
  },
  {
    "id": "c.prob.4.8.3",
    "sec": "4.8",
    "kind": "definition",
    "tier": "core",
    "title": "Hypergeometric law: sampling without replacement",
    "oneLine": "A hypergeometric variable counts marked items in a fixed-size sample drawn without replacement.",
    "statement": "From N objects containing m marked ones, choose n uniformly without replacement. Then $P(X=k)=\\binom mk\\binom{N-m}{n-k}/\\binom Nn$ for feasible k; $E[X]=nm/N$ and $Var(X)=np(1-p)(N-n)/(N-1)$ where p=m/N.",
    "intuition": "Suppose a box has marked and unmarked items, and you draw several without putting any back. Count the ways to select k marked and the rest unmarked; as the box empties, later draws depend on what was already taken.",
    "needs": [
      "c.prob.4.2.1",
      "c.prob.4.3.2",
      "c.prob.4.5.1"
    ],
    "traps": [
      "Support is $max(0,n-(N-m))\\le k\\le min(n,m)$.",
      "The binomial approximation needs population size large relative to sample size; the finite-population correction is (N−n)/(N−1)."
    ],
    "cards": [
      {
        "q": "State the hypergeometric pmf.",
        "a": "$P(X=k)=\\binom mk\\binom{N-m}{n-k}/\\binom Nn$.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Represent the sample count as a sum of indicators for marked objects at each draw position.",
      "why": "Linearity gives the mean directly, while the joint probability of two marked positions gives the finite-population variance correction.",
      "rungs": [
        {
          "why": "Each draw position is marked with probability p=m/N.",
          "m": "X=\\sum_{j=1}^nI_j,\\quad E[X]=np"
        },
        {
          "why": "Two distinct positions are both marked with probability m(m−1)/(N(N−1)).",
          "m": "E[I_iI_j]=m(m-1)/(N(N-1))"
        },
        {
          "why": "Expand E[X²] and subtract (np)².",
          "m": "Var(X)=np(1-p)\\frac{N-n}{N-1}"
        }
      ],
      "ends": "As N grows with sample size n fixed, the correction tends to one and the variance approaches the binomial value."
    },
    "provenance": "Ross, 10th ed., §4.8.3, PDF pp. 165–166, equation (8.4), examples 8h–8j."
  },
  {
    "id": "c.prob.4.8.4",
    "sec": "4.8",
    "kind": "definition",
    "tier": "extra",
    "title": "Zeta (Zipf) distribution",
    "oneLine": "The zeta law assigns power-law masses proportional to k^(−α−1) on the positive integers.",
    "statement": "For α>0, $P(X=k)=Ck^{-(\\alpha+1)}$, k=1,2,..., where $C=[\\sum_{k=1}^\\infty k^{-(\\alpha+1)}]^{-1}=1/\\zeta(\\alpha+1)$.",
    "intuition": "The Zipf law gives smaller chances to larger labels, but its tail fades slowly: a very large value is unusual, not impossible. It is a reminder that a countable list can have many tiny probabilities whose total still adds to 1.",
    "needs": [
      "c.prob.4.2.1"
    ],
    "traps": [
      "The exponent must exceed 1 for the normalizing series to converge; here that is equivalent to α>0.",
      "A valid pmf need not have a finite mean; moment existence depends on the tail exponent."
    ],
    "cards": [
      {
        "q": "How is the zeta/Zipf pmf normalized?",
        "a": "Use $C=1/\\zeta(\\alpha+1)$ for α>0.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §4.8.4, PDF p. 166."
  },
  {
    "id": "c.prob.4.9.1",
    "sec": "4.9",
    "kind": "theorem",
    "tier": "core",
    "title": "Expectation of sums and indicator method",
    "oneLine": "Represent a count as a sum of indicators to compute its mean even when the counted events are dependent.",
    "statement": "For integrable $X_1,\\ldots,X_n$, $E[\\sum_iX_i]=\\sum_iE[X_i]$. If $I_i=1_{A_i}$, then $E[I_i]=P(A_i)$ and $E[\\sum_iI_i]=\\sum_iP(A_i)$, with no independence requirement.",
    "intuition": "A total score is a sum of the separate scores, so its average is the sum of their averages. For a count, use one yes/no marker per event; add their chances even if the events overlap.",
    "needs": [
      "c.prob.4.3.2"
    ],
    "traps": [
      "Expectation adds without independence; variance generally does not.",
      "For random sums, dependence between the number of terms and summands requires care."
    ],
    "cards": [
      {
        "q": "How do you find the expected number of events that occur?",
        "a": "Sum their individual probabilities using indicator variables; independence is unnecessary.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Write each event count as a Bernoulli indicator and apply finite-sum linearity.",
      "why": "Each indicator contributes 1 exactly when its event occurs, so its expected value is the event probability.",
      "rungs": [
        {
          "why": "Represent the count by indicators.",
          "m": "N=\\sum_iI_i"
        },
        {
          "why": "Use linearity of expectation.",
          "m": "E[N]=\\sum_iE[I_i]"
        },
        {
          "why": "Evaluate each Bernoulli mean.",
          "m": "E[I_i]=P(A_i)\\Rightarrow E[N]=\\sum_iP(A_i)"
        }
      ],
      "ends": "No independence assumption is needed for the expectation of this sum."
    },
    "provenance": "Ross, 10th ed., §4.9, PDF pp. 167–170, examples 9c–9e."
  },
  {
    "id": "c.prob.4.9.2",
    "sec": "4.9",
    "kind": "theorem",
    "tier": "core",
    "title": "Variance of a sum and covariance correction",
    "oneLine": "Variance of a sum includes pairwise joint success probabilities or covariance terms.",
    "statement": "For $X=\\sum_iX_i$ with finite second moments, $Var(X)=\\sum_iVar(X_i)+2\\sum_{i<j}Cov(X_i,X_j)$. For Bernoulli indicators with $p_i=P(I_i=1)$ and $p_{ij}=P(I_i=I_j=1)$, $Var(\\sum_iI_i)=\\sum_ip_i+\\sum_{i\\ne j}p_{ij}-(\\sum_ip_i)^2$.",
    "intuition": "The spread of a total depends not only on each part’s spread but also on whether two parts tend to rise and fall together. If the parts are independent, that extra pair effect is zero; otherwise it can increase or decrease the total spread.",
    "needs": [
      "c.prob.4.5.1",
      "c.prob.4.9.1"
    ],
    "traps": [
      "Do not add variances unless pairwise covariances vanish.",
      "Independence is sufficient for zero covariance when moments exist, but zero covariance need not imply independence."
    ],
    "cards": [
      {
        "q": "State the variance-of-a-sum identity.",
        "a": "$Var(\\sum_iX_i)=\\sum_iVar(X_i)+2\\sum_{i<j}Cov(X_i,X_j)$.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Expand the square of the sum and keep the cross-products.",
      "why": "The cross-products are exactly the dependence terms omitted by a naive sum of variances.",
      "rungs": [
        {
          "why": "Expand X² for X=ΣX_i.",
          "m": "E[X^2]=\\sum_iE[X_i^2]+2\\sum_{i<j}E[X_iX_j]"
        },
        {
          "why": "Subtract (ΣE[X_i])².",
          "m": "Var(X)=\\sum_iVar(X_i)+2\\sum_{i<j}(E[X_iX_j]-E[X_i]E[X_j])"
        },
        {
          "why": "Recognize covariance.",
          "m": "Var(X)=\\sum_iVar(X_i)+2\\sum_{i<j}Cov(X_i,X_j)"
        }
      ],
      "ends": "Independent pairs have zero covariance, so in that case the individual variances add."
    },
    "provenance": "Ross, 10th ed., §4.9, PDF pp. 169–170, equation (9.1) and examples 9d–9e."
  },
  {
    "id": "c.prob.4.10.1",
    "sec": "4.10",
    "kind": "theorem",
    "tier": "core",
    "title": "C.d.f. interval and atom probabilities",
    "oneLine": "C.d.f. differences give interval probabilities, with endpoint inclusion determined by jumps.",
    "statement": "For $F(x)=P(X\\le x)$ and a<b, $P(a<X\\le b)=F(b)-F(a)$; $P(X=x)=F(x)-F(x^-)$, where $F(x^-)=\\lim_{t\\uparrow x}F(t)$.",
    "intuition": "A CDF is a running total. Subtract the total chance up to a from the total up to b to keep values in the interval, and read the jump at x as the chance placed exactly at x.",
    "needs": [
      "c.prob.4.1.1",
      "c.prob.4.1.2"
    ],
    "traps": [
      "$P(X<b)$ can differ from $F(b)$ by the atom at b.",
      "For a continuous distribution there are no jumps, but this chapter includes discrete variables where endpoint choices matter."
    ],
    "cards": [
      {
        "q": "Express P(a<X≤b) through a c.d.f.",
        "a": "$F(b)-F(a)$.",
        "kind": "state"
      },
      {
        "q": "How do you recover a point mass from a c.d.f.?",
        "a": "$P(X=x)=F(x)-F(x^-)$.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Decompose {X≤b} into the disjoint events {X≤a} and {a<X≤b}; use a limit from below for the atom.",
      "why": "The c.d.f. stores all cumulative mass, so differences isolate an interval and jumps isolate a point.",
      "rungs": [
        {
          "why": "Use the disjoint event decomposition.",
          "m": "\\{X\\le b\\}=\\{X\\le a\\}\\cup\\{a<X\\le b\\}"
        },
        {
          "why": "Subtract probabilities.",
          "m": "P(a<X\\le b)=F(b)-F(a)"
        },
        {
          "why": "Approach x from below to isolate the event X=x.",
          "m": "P(X=x)=F(x)-F(x^-)"
        }
      ],
      "ends": "Endpoint conventions follow from whether the interval includes the jump at an endpoint."
    },
    "provenance": "Ross, 10th ed., §4.10, PDF pp. 171–173, equation (10.1) and examples 10a onward."
  },
  {
    "id": "c.prob.4.2.2",
    "sec": "4.2",
    "kind": "technique",
    "tier": "core",
    "title": "Aggregate outcomes into a random-variable pmf",
    "oneLine": "The probability at a value x is the total probability of every experiment outcome mapped to x.",
    "statement": "For a countable sample space, $P(X=x)=\\sum_{s:X(s)=x}P(\\{s\\})$. Distinct outcomes with the same X-value must be combined.",
    "intuition": "Several experiment results can produce the same number X. To find the chance of that number, gather every such result and add their chances; do not count only the first way it can happen.",
    "needs": [
      "c.prob.4.1.1",
      "c.prob.4.2.1"
    ],
    "traps": [
      "Do not assign one mass to each original outcome when multiple outcomes give the same X.",
      "Enumerate the attainable values before declaring the support."
    ],
    "cards": [
      {
        "q": "How is P(X=x) computed from the original sample space?",
        "a": "Sum the probabilities of all outcomes s for which X(s)=x.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §4.2, PDF pp. 135–137; examples 2a and 2b."
  },
  {
    "id": "c.prob.4.4.2",
    "sec": "4.4",
    "kind": "technique",
    "tier": "core",
    "title": "Nonlinear functions and expectations",
    "oneLine": "For nonlinear g, evaluate E[g(X)] across the support; g(E[X]) usually gives a different quantity.",
    "statement": "In general, $E[g(X)]\\ne g(E[X])$. For example, $E[X^2]=Var(X)+(E[X])^2$.",
    "intuition": "Changing numbers before averaging can change the balance. If a game score is squared, large scores get much heavier weight, so the average of the squares usually differs from the square of the average.",
    "needs": [
      "c.prob.4.4.1",
      "c.prob.4.5.1"
    ],
    "traps": [
      "Only affine functions commute with expectation in the general case.",
      "For convex or concave g, Jensen’s inequality gives a direction, but not equality in general."
    ],
    "cards": [
      {
        "q": "Can E[g(X)] generally be replaced by g(E[X])?",
        "a": "No. Use LOTUS; equality requires special conditions such as affine g or a degenerate X.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §4.4, PDF pp. 141–143, examples 4a–4c and variance discussion in §4.5."
  },
  {
    "id": "c.prob.4.7.2",
    "sec": "4.7",
    "kind": "theorem",
    "tier": "core",
    "title": "Poisson factorial moments",
    "oneLine": "The first falling-factorial moments of a Poisson variable are powers of its parameter.",
    "statement": "If $X\\sim Poisson(\\lambda)$, then $E[X(X-1)\\cdots(X-r+1)]=\\lambda^r$ for positive integer r. In particular $E[X]=\\lambda$ and $Var(X)=\\lambda$.",
    "intuition": "The falling product X(X−1)… counts ordered choices of distinct events that happened. For a Poisson count, its r-event average simplifies to λ^r; for r=2 it counts ordered pairs of different arrivals.",
    "needs": [
      "c.prob.4.7.1",
      "c.prob.4.4.1"
    ],
    "traps": [
      "The raw second moment is λ²+λ, while the second factorial moment is λ².",
      "Do not infer the Poisson variance from the identity of its mean and variance without checking the model."
    ],
    "cards": [
      {
        "q": "What is E[X(X−1)] for Poisson(λ)?",
        "a": "λ².",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Cancel factorial factors in the defining sum and shift the summation index.",
      "why": "The resulting series is the exponential normalization sum.",
      "rungs": [
        {
          "why": "For r=1 cancel k against k!.",
          "m": "E[X]=e^{-\\lambda}\\sum_{k\\ge1}k\\lambda^k/k!=\\lambda"
        },
        {
          "why": "For r=2 cancel k(k−1) against k!.",
          "m": "E[X(X-1)]=e^{-\\lambda}\\sum_{k\\ge2}\\lambda^k/(k-2)!=\\lambda^2"
        },
        {
          "why": "Convert the factorial moment into a raw second moment.",
          "m": "E[X^2]=E[X(X-1)]+E[X]=\\lambda^2+\\lambda"
        }
      ],
      "ends": "Subtracting the squared mean gives Var(X)=λ; the same index shift proves all factorial moments."
    },
    "provenance": "Ross, 10th ed., §4.7, PDF pp. 156–162, pmf equation (7.1)."
  },
  {
    "id": "c.prob.4.10.2",
    "sec": "4.10",
    "kind": "technique",
    "tier": "core",
    "title": "Endpoint bookkeeping with a c.d.f.",
    "oneLine": "Translate open and closed interval endpoints through F(x)=P(X≤x), paying attention to atom jumps.",
    "statement": "Useful identities include $P(X<x)=F(x^-)$, $P(X\\ge x)=1-F(x^-)$, and $P(a\\le X\\le b)=F(b)-F(a^-)$, where $F(x^-)=\\lim_{t\\uparrow x}F(t)$.",
    "intuition": "At a jump in the running total, decide whether the endpoint belongs in your event. “Below x” leaves out the pile exactly at x; “at least x” includes it, so the left-hand value just before x is useful.",
    "needs": [
      "c.prob.4.10.1"
    ],
    "traps": [
      "$1-F(x)$ is P(X>x), whereas $1-F(x^-)$ is P(X≥x).",
      "For atom-free laws these may agree, which can hide endpoint mistakes in discrete problems."
    ],
    "cards": [
      {
        "q": "Express P(X≥x) with F and its left limit.",
        "a": "$1-F(x^-)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §4.10, PDF pp. 171–174."
  },
  {
    "id": "c.prob.4.2.3",
    "sec": "4.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Discrete uniform law on consecutive integers",
    "oneLine": "If each integer in a fixed consecutive range is equally likely, the mean is the midpoint and the variance depends only on how many values there are.",
    "statement": "If $X$ is uniform on $\\{a,a+1,\\ldots,a+N-1\\}$, where $a$ is an integer and $N\\ge1$ is the number of values, then $P(X=x)=1/N$ on this set (and 0 outside), $E[X]=a+(N-1)/2$, and $\\operatorname{Var}(X)=(N^2-1)/12$.",
    "intuition": "A fair die is discrete uniform: each face gets the same chance, and the center of faces 1 through 6 is 3.5. The spread depends on the number of faces, not on where the numbering starts.",
    "needs": [
      "c.prob.4.2.1"
    ],
    "traps": [
      "“Uniform” here means equal probability on a finite set of integers, not a constant density over an interval.",
      "The variance formula uses N, the number of integer values; shifting a does not change variance."
    ],
    "cards": [
      {
        "q": "If X is uniform on N consecutive integers starting at a, give its mean and variance.",
        "a": "$E[X]=a+(N-1)/2$ and $\\operatorname{Var}(X)=(N^2-1)/12$.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "First compute the mean and variance on {0,...,N−1}, then shift the support by a.",
      "why": "A shift changes the mean by a but leaves every distance from the mean unchanged.",
      "rungs": [
        {
          "why": "Average the consecutive integers 0 through N−1.",
          "m": "$E[X_0]=\\frac{0+(N-1)}2=\\frac{N-1}2$",
          "meaning": "The average of an evenly spaced list is its midpoint."
        },
        {
          "why": "Use the sums of the first N−1 integers and their squares.",
          "m": "$E[X_0^2]=\\frac{(N-1)(2N-1)}6$",
          "meaning": "Each value has probability 1/N."
        },
        {
          "why": "Subtract the squared mean, then shift by a.",
          "m": "$\\operatorname{Var}(X_0)=\\frac{N^2-1}{12};\\quad X=a+X_0$",
          "meaning": "A constant shift changes the mean only."
        }
      ],
      "ends": "The discrete-uniform mean is its midpoint and its variance is (N²−1)/12."
    },
    "provenance": "GATE 2027 DA syllabus, Section 1 “Probability and Statistics” (uniform distribution), PDF p. 1; discrete-uniform formulas added as a syllabus-aligned supplement to Ross §4.2."
  },
  {
    "id": "c.prob.4.2.4",
    "sec": "4.2",
    "kind": "example",
    "tier": "core",
    "title": "Discrete uniform drill: four consecutive values",
    "oneLine": "For a short consecutive list, write the equal masses and compute the center and spread directly.",
    "statement": "Let X be uniform on {2,3,4,5}, so each value has probability 1/4. Then $E[X]=(2+3+4+5)/4=3.5$. Its variance is $[(2-3.5)^2+(3-3.5)^2+(4-3.5)^2+(5-3.5)^2]/4=1.25$, matching $(4^2-1)/12=1.25$.",
    "intuition": "Think of a fair spinner with four equal spaces labeled 2, 3, 4, and 5. The balance point is halfway between 3 and 4; the four squared distances from that point average to 1.25.",
    "needs": [
      "c.prob.4.2.3"
    ],
    "traps": [
      "Use probability 1/4 for each of the four values.",
      "Variance averages squared distances from 3.5, not distances from zero."
    ],
    "cards": [
      {
        "q": "For X uniform on {2,3,4,5}, what are its mean and variance?",
        "a": "$E[X]=3.5$ and $\\operatorname{Var}(X)=1.25$.",
        "kind": "state"
      }
    ],
    "provenance": "Original worked example; formulas align with the discrete-uniform supplement added for the GATE 2027 DA syllabus."
  }
]
);
