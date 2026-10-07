var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
CONCEPTS.push(...
[
  {
    "id": "c.prob.4.1.1",
    "sec": "4.1",
    "kind": "definition",
    "tier": "core",
    "title": "Random variable and induced distribution",
    "oneLine": "A random variable assigns a real number to each outcome; its distribution records the probability of each assigned value.",
    "statement": "<p><b>Statement:</b> A <b>random variable</b> $X$ on a probability space $(\\Omega, \\mathcal{F}, P)$ is a measurable function mapping the sample space to the real numbers: $X: \\Omega \\to \\mathbb{R}$, such that for every $x \\in \\mathbb{R}$, the pre-image $\\{\\omega \\in \\Omega : X(\\omega) \\le x\\} \\in \\mathcal{F}$. Its <b>cumulative distribution function</b> (CDF) $F_X: \\mathbb{R} \\to [0, 1]$ is defined by:$$F_X(x) = P(X \\le x) = P(\\{\\omega \\in \\Omega : X(\\omega) \\le x\\})$$</p><p><b>Mathematical terms:</b> $\\Omega$ is the sample space; $\\mathcal{F}$ is the event $\\sigma$-algebra; $X(\\omega) \\in \\mathbb{R}$ is the numerical value realized by outcome $\\omega$; $F_X(x)$ is the cumulative distribution function; $\\{\\omega : X(\\omega) \\le x\\}$ is the inverse image event.</p><p><b>Reason:</b> Random variables map complex, non-numerical outcomes (such as sequences of coin flips or quantum states) into real numbers so that mathematical and statistical operations can be applied. Measurability ensures that questions of the form \"$X \\le x$\" correspond to legitimate events in $\\mathcal{F}$ to which the probability measure $P$ can assign a well-defined value.</p>",
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
    "provenance": "Ross, 10th ed., §4.1, PDF pp. 131–134; sources/chapters/ch04.pdf and ch04.txt.",
    "proof": {
      "idea": "Group original outcomes by their recorded numerical value.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "A random variable is a rule assigning one real number to every outcome.",
          "m": "$$X:S\\to\\mathbb R$$",
          "meaning": "The function is fixed; the observed value varies because the outcome is random."
        },
        {
          "why": "A numerical event corresponds to the outcomes whose assigned numbers satisfy it.",
          "m": "$$\\{X\\in B\\}=\\{s\\in S:X(s)\\in B\\}$$",
          "meaning": "This preimage is how the original probability model induces a law on numbers."
        },
        {
          "why": "For a discrete value x, add all original outcome probabilities in that group.",
          "m": "$$P(X=x)=\\sum_{s:X(s)=x}P(\\{s\\})$$",
          "meaning": "This sum form uses a discrete original model; general models use the probability of the preimage set directly."
        },
        {
          "why": "Different x groups are disjoint and collectively cover all outcomes.",
          "m": "$$\\sum_xP(X=x)=1$$",
          "meaning": "This normalization follows from additivity, not from every x being equally likely."
        },
        {
          "why": "For two fair dice, the sum 2 has one preimage pair and the sum 7 has six.",
          "m": "$$P(X=2)=1/36,\\quad P(X=7)=6/36$$",
          "meaning": "A function of uniform outcomes can therefore have a nonuniform distribution."
        }
      ],
      "ends": "The distribution of a random variable is obtained by assigning original probability to its numerical preimage events."
    }
  },
  {
    "id": "c.prob.4.1.2",
    "sec": "4.1",
    "kind": "theorem",
    "tier": "core",
    "title": "Basic cumulative distribution function facts",
    "oneLine": "A c.d.f. is nondecreasing, has limits 0 and 1 at the two tails, and is right-continuous.",
    "statement": "<p><b>Statement:</b> Every cumulative distribution function $F(x) = P(X \\le x)$ satisfies three fundamental properties:<br>(1) <b>Monotonicity:</b> $F$ is non-decreasing; if $x_1 < x_2$, then $F(x_1) \\le F(x_2)$.<br>(2) <b>Limits at infinity:</b> $\\lim_{x \\to -\\infty} F(x) = 0$ and $\\lim_{x \\to \\infty} F(x) = 1$.<br>(3) <b>Right-continuity:</b> For every $x \\in \\mathbb{R}$, $\\lim_{h \\downarrow 0} F(x + h) = F(x^+)$ equals $F(x)$.</p><p><b>Mathematical terms:</b> $F(x)$ is the CDF; $F(x^+)$ is the right-hand limit $\\lim_{h \\to 0^+} F(x+h)$; $F(x^-)$ is the left-hand limit $\\lim_{h \\to 0^+} F(x-h)$; $P(X = x) = F(x) - F(x^-)$ is the probability mass (atom) at $x$.</p><p><b>Reason:</b> (1) If $x_1 < x_2$, the event $\\{X \\le x_1\\} \\subseteq \\{X \\le x_2\\}$; by monotonicity of probability, $F(x_1) \\le F(x_2)$. (2) As $x \\to -\\infty$, the nested events $\\{X \\le -n\\}$ decrease to $\\varnothing$, so $F(x) \\to P(\\varnothing) = 0$ by continuity from above. As $x \\to \\infty$, $\\{X \\le n\\}$ increases to $\\Omega$, so $F(x) \\to P(\\Omega) = 1$ by continuity from below. (3) The sequence of events $\\{X \\le x + 1/n\\}$ decreases monotonically to $\\{X \\le x\\}$; by continuity from above, $\\lim F(x + 1/n) = F(x)$, establishing right-continuity.</p>",
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
      "idea": "Use containment and nested-event continuity to prove the CDF properties.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Define F(x) as the probability that the recorded value X is at most x.",
          "m": "$$F(x)=P(X\\le x)$$",
          "meaning": "X is assumed real-valued, so each observation is finite."
        },
        {
          "why": "A smaller cutoff includes fewer possible values.",
          "m": "$$x\\le y\\ \\Longrightarrow\\ \\{X\\le x\\}\\subseteq\\{X\\le y\\}$$",
          "meaning": "Every value at most x is also at most y."
        },
        {
          "why": "Use monotonicity of probability on that containment.",
          "m": "$$F(x)\\le F(y)$$",
          "meaning": "A CDF can stay flat or rise, but cannot fall."
        },
        {
          "why": "As positive integers n grow, the events X≤n increase to the whole sample space.",
          "m": "$$\\lim_{n\\to\\infty}F(n)=P(S)=1$$",
          "meaning": "Every finite value is eventually included; nested-event continuity justifies the limit."
        },
        {
          "why": "The events X≤−n decrease to the empty event.",
          "m": "$$\\lim_{n\\to\\infty}F(-n)=P(\\varnothing)=0$$",
          "meaning": "No finite value is below every negative-integer cutoff; monotonicity extends these two limits to arbitrary real cutoffs."
        },
        {
          "why": "If x_n decreases to x, the events X≤x_n decrease exactly to X≤x.",
          "m": "$$\\bigcap_n\\{X\\le x_n\\}=\\{X\\le x\\}$$",
          "meaning": "A value bigger than x is eventually excluded, while x itself stays included."
        },
        {
          "why": "Continuity for decreasing events yields right continuity.",
          "m": "$$\\lim_nF(x_n)=F(x)$$",
          "meaning": "A jump can occur from the left at an atom; the value at the jump equals its right-hand limit."
        }
      ],
      "ends": "CDFs are nondecreasing, have limits 0 and 1 at the two ends, and are right-continuous."
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
    "statement": "<p><b>Statement:</b> A random variable $X$ is <b>discrete</b> if its range (support) is a countable set $\\mathcal{X} = \\{x_1, x_2, \\ldots\\} \\subset \\mathbb{R}$. Its <b>probability mass function</b> (PMF) $p_X: \\mathbb{R} \\to [0, 1]$ is defined by $p_X(x) = P(X = x)$, and satisfies:<br>(1) $p_X(x) \\ge 0$ for all $x \\in \\mathcal{X}$, and $p_X(x) = 0$ for $x \\notin \\mathcal{X}$.<br>(2) Normalization: $\\sum_{x \\in \\mathcal{X}} p_X(x) = 1$.<br>(3) For any Borel set $B \\subseteq \\mathbb{R}$, $P(X \\in B) = \\sum_{x \\in B \\cap \\mathcal{X}} p_X(x)$.</p><p><b>Mathematical terms:</b> $\\mathcal{X}$ is the countable support of $X$; $p_X(x)$ is the PMF; $\\sum_{x \\in \\mathcal{X}}$ sums over all distinct mass points in the support; $P(X \\in B)$ is the probability that $X$ takes a value in set $B$.</p><p><b>Reason:</b> Because the range $\\mathcal{X}$ is countable, the event $\\{X \\in B\\}$ is the countable union of mutually disjoint singletons $\\bigcup_{x \\in B \\cap \\mathcal{X}} \\{X = x\\}$. By countable additivity of Kolmogorov's third axiom, the probability of the union equals the series sum of the individual point probabilities, $\\sum p_X(x)$. Setting $B = \\mathbb{R}$ forces the total mass to equal $P(\\Omega) = 1$.</p>",
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
    "provenance": "Ross, 10th ed., §4.2, PDF pp. 135–137, examples 2a and pmf definition.",
    "proof": {
      "idea": "Explain the PMF definition and derive its normalization and CDF formula.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "A discrete X takes values in a finite or countably infinite support D.",
          "m": "$$p_X(x)=P(X=x)\\quad(x\\in D)$$",
          "meaning": "This is the definition of its probability mass function."
        },
        {
          "why": "Different exact-value events cannot occur together.",
          "m": "$$\\{X=x\\}\\cap\\{X=y\\}=\\varnothing\\quad(x\\ne y)$$",
          "meaning": "One observed real number cannot equal two different values."
        },
        {
          "why": "All support-value events together have probability one.",
          "m": "$$\\sum_{x\\in D}p_X(x)=1,\\quad p_X(x)\\ge0$$",
          "meaning": "Countable additivity and nonnegativity give the PMF requirements."
        },
        {
          "why": "A numerical set B collects exactly its support values.",
          "m": "$$P(X\\in B)=\\sum_{x\\in B\\cap D}p_X(x)$$",
          "meaning": "The sum is over disjoint value events."
        },
        {
          "why": "A cutoff event selects the support values not exceeding its cutoff.",
          "m": "$$F_X(t)=\\sum_{x\\le t}p_X(x)$$",
          "meaning": "This derives the discrete CDF from the PMF."
        }
      ],
      "ends": "A PMF gives probability at separate values; a CDF accumulates those masses through a cutoff."
    }
  },
  {
    "id": "c.prob.4.3.1",
    "sec": "4.3",
    "kind": "definition",
    "tier": "core",
    "title": "Expected value of a discrete random variable",
    "oneLine": "Expectation is the probability-weighted average of the possible values, when the sum is well-defined.",
    "statement": "<p><b>Statement:</b> The <b>expected value</b> (mean) of a discrete random variable $X$ with support $\\mathcal{X}$ and PMF $p(x) = P(X = x)$ is defined by:$$E[X] = \\sum_{x \\in \\mathcal{X}} x \\, p(x)$$provided the expectation exists, meaning $\\sum_{x \\in \\mathcal{X}} |x| p(x) < \\infty$ (absolute convergence).</p><p><b>Mathematical terms:</b> $E[X]$ (or $\\mu$) is the expectation / population mean; $x$ is the realized value; $p(x)$ is the probability weight; absolute convergence means $E[|X|] < \\infty$, preventing conditional convergence ambiguities.</p><p><b>Reason:</b> The expected value represents the probability-weighted center of mass of the distribution. Each possible value $x$ is weighted by its asymptotic relative frequency $p(x)$. Absolute convergence $\\sum |x|p(x) < \\infty$ is mathematically required so that the series sum is independent of the order of summation by the Riemann rearrangement theorem, guaranteeing a stable physical mean.</p>",
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
    "provenance": "Ross, 10th ed., §4.3, PDF pp. 138–140; sources/chapters/ch04.pdf and ch04.txt.",
    "proof": {
      "idea": "Explain expected value as a weighted average rather than as a predicted single observation.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Suppose discrete X has values x and probabilities p_X(x).",
          "m": "$$\\sum_xp_X(x)=1$$",
          "meaning": "The probabilities provide normalized nonnegative weights."
        },
        {
          "why": "For a finite list, form the ordinary weighted average by multiplying each value by its weight.",
          "m": "$$E[X]=\\sum_xx p_X(x)$$",
          "meaning": "This defines expected value; an infinite signed list needs a convergence condition."
        },
        {
          "why": "Separate positive and negative contributions to avoid an undefined infinity-minus-infinity expression.",
          "m": "$$E[|X|]=\\sum_x|x|p_X(x)<\\infty$$",
          "meaning": "This sufficient condition makes the signed sum absolutely convergent and independent of summation order."
        },
        {
          "why": "For a fair die the six weights are all 1/6.",
          "m": "$$E[X]=\\frac{1+2+3+4+5+6}{6}=3.5$$",
          "meaning": "No die face is 3.5; the expectation is the distribution’s balance point."
        },
        {
          "why": "A constant c has the same value at every outcome.",
          "m": "$$E[c]=c\\sum_xp_X(x)=c$$",
          "meaning": "This explains why fixed constants can be treated normally in expectation algebra."
        }
      ],
      "ends": "Expectation is a probability-weighted average, with finite absolute mean required for the finite signed calculations used here."
    }
  },
  {
    "id": "c.prob.4.3.2",
    "sec": "4.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Linearity of expectation",
    "oneLine": "The expectation of a finite sum equals the sum of the expectations; independence is unnecessary.",
    "statement": "<p><b>Statement:</b> For any discrete random variables $X_1, \\ldots, X_n$ with finite expectations $E[|X_i|] < \\infty$ and any real constants $a_1, \\ldots, a_n, c \\in \\mathbb{R}$, the expectation operator is strictly <b>linear</b>:$$E\\left[\\sum_{i=1}^n a_i X_i + c\\right] = \\sum_{i=1}^n a_i E[X_i] + c$$This identity holds universally, regardless of whether the random variables are independent or dependent.</p><p><b>Mathematical terms:</b> $a_i, c$ are fixed constants; $\\sum a_i X_i$ is a linear combination of random variables; linearity holds without any assumption of independence.</p><p><b>Reason:</b> By definition on the sample space, $X_i$ is a function $X_i(\\omega)$. The expectation is the sum over elementary outcomes $E[\\sum a_i X_i] = \\sum_{\\omega \\in \\Omega} (\\sum a_i X_i(\\omega)) P(\\{\\omega\\})$. Because finite sums and scalar multiplication distribute across real additions, the summation re-groups as $\\sum a_i \\sum_{\\omega} X_i(\\omega) P(\\{\\omega\\}) = \\sum a_i E[X_i]$. Because this rearrangement depends only on the linearity of addition on each outcome $\\omega$, no independence hypothesis is required.</p>",
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
      "idea": "Distribute a finite sum inside a probability-weighted average.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a discrete joint model, let p(s) be the probability of the full outcome s.",
          "m": "$$E[X_i]=\\sum_s X_i(s)p(s)$$",
          "meaning": "Combining outcomes with the same X_i value recovers the usual expectation definition."
        },
        {
          "why": "At outcome s, the total value is the sum of the component values.",
          "m": "$$T(s)=\\sum_{i=1}^nX_i(s)$$",
          "meaning": "This equality describes an actual observation, before taking any average."
        },
        {
          "why": "Insert the total into its weighted-average formula.",
          "m": "$$E[T]=\\sum_s\\left(\\sum_{i=1}^nX_i(s)\\right)p(s)$$",
          "meaning": "The same outcome probability multiplies every component at that outcome."
        },
        {
          "why": "Use distribution of multiplication over addition and interchange the finite component sum.",
          "m": "$$E[T]=\\sum_{i=1}^n\\sum_sX_i(s)p(s)$$",
          "meaning": "For countably many outcomes, finite absolute means justify the rearrangement. For a joint density, integrals replace the outcome sum with the same linearity rule."
        },
        {
          "why": "Recognize each inner average.",
          "m": "$$E[T]=\\sum_{i=1}^nE[X_i]$$",
          "meaning": "Independence has not been used: even dependent components satisfy the formula."
        },
        {
          "why": "The same argument allows fixed multipliers and an added constant b.",
          "m": "$$E\\left[b+\\sum_i a_iX_i\\right]=b+\\sum_i a_iE[X_i]$$",
          "meaning": "A constant b averages to b because the total probability is 1."
        }
      ],
      "ends": "For a finite list with finite absolute means, expectation adds whether or not the variables are independent."
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
    "statement": "<p><b>Statement:</b> The <b>Law of the Unconscious Statistician (LOTUS)</b> states that for a discrete random variable $X$ with PMF $p_X(x)$ and any real-valued function $g: \\mathbb{R} \\to \\mathbb{R}$, the expected value of $Y = g(X)$ is given by:$$E[g(X)] = \\sum_{x \\in \\mathcal{X}} g(x) \\, p_X(x)$$provided $\\sum_{x \\in \\mathcal{X}} |g(x)| p_X(x) < \\infty$, eliminating the need to derive the explicit PMF of $Y$.</p><p><b>Mathematical terms:</b> $g(X)$ is a transformed random variable; $p_X(x)$ is the original PMF of $X$; LOTUS computes the expectation using the distribution of $X$ directly.</p><p><b>Reason:</b> Let $Y = g(X)$ have support $\\mathcal{Y}$. By definition of expectation, $E[Y] = \\sum_{y \\in \\mathcal{Y}} y \\, P(Y = y)$. The event $\\{Y = y\\}$ partitions into pre-images: $\\{Y = y\\} = \\bigcup_{x: g(x)=y} \\{X = x\\}$. Therefore $P(Y = y) = \\sum_{x: g(x)=y} p_X(x)$. Substituting this into the expectation gives $\\sum_{y} y \\sum_{x: g(x)=y} p_X(x) = \\sum_{y} \\sum_{x: g(x)=y} g(x) p_X(x) = \\sum_{x} g(x) p_X(x)$, summing over the fiber partition.</p>",
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
      "idea": "Group outcome contributions by the value of X rather than by the value of g(X).",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let p_X(x)=P(X=x), and let Y=g(X) be the quantity to average.",
          "m": "$$E[Y]=\\sum_y yP(Y=y)$$",
          "meaning": "Assume a finite absolute mean, or use nonnegative quantities so the sum is well defined."
        },
        {
          "why": "The event Y=y consists of all X-values mapped to y.",
          "m": "$$P(Y=y)=\\sum_{x:g(x)=y}p_X(x)$$",
          "meaning": "These X-value events are disjoint."
        },
        {
          "why": "Replace each output probability by this sum.",
          "m": "$$E[Y]=\\sum_y\\sum_{x:g(x)=y}y\\,p_X(x)$$",
          "meaning": "Several inputs can share one output; every input still belongs to exactly one output group."
        },
        {
          "why": "In its group, y equals g(x).",
          "m": "$$E[Y]=\\sum_y\\sum_{x:g(x)=y}g(x)p_X(x)$$",
          "meaning": "Only the label for the same numerical value has changed."
        },
        {
          "why": "Remove the grouping without changing any contributions.",
          "m": "$$E[g(X)]=\\sum_xg(x)p_X(x)$$",
          "meaning": "Absolute summability, or nonnegativity, permits this regrouping of an infinite sum."
        },
        {
          "why": "For the square function, this gives the second moment directly.",
          "m": "$$E[X^2]=\\sum_xx^2p_X(x)$$",
          "meaning": "It does not give (E[X])²; averaging squares and squaring an average are different operations."
        }
      ],
      "ends": "LOTUS is a weighted average of output values using the original input probabilities."
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
    "statement": "<p><b>Statement:</b> For a random variable $X$ with finite mean $\\mu = E[X]$ and finite second moment $E[X^2] < \\infty$, the <b>variance</b> $\\operatorname{Var}(X)$ (or $\\sigma^2$) is the expected squared deviation from the mean:$$\\operatorname{Var}(X) = E\\left[(X - \\mu)^2\\right] = E[X^2] - (E[X])^2$$The <b>standard deviation</b> is $\\operatorname{SD}(X) = \\sigma = \\sqrt{\\operatorname{Var}(X)} \\ge 0$.</p><p><b>Mathematical terms:</b> $\\mu = E[X]$ is the center; $(X - \\mu)^2$ is the squared distance from the mean; $\\operatorname{Var}(X) \\ge 0$ measures dispersion; $\\operatorname{SD}(X)$ has the same physical units as $X$.</p><p><b>Reason:</b> Squaring the deviation $(X - \\mu)$ ensures all non-zero deviations contribute positive weight, preventing positive and negative fluctuations from canceling out. Expanding the square gives $E[(X - \\mu)^2] = E[X^2 - 2\\mu X + \\mu^2] = E[X^2] - 2\\mu E[X] + \\mu^2 = E[X^2] - 2\\mu^2 + \\mu^2 = E[X^2] - \\mu^2$, providing the standard computational shortcut.</p>",
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
    "provenance": "Ross, 10th ed., §4.5, PDF pp. 144–147, definition, properties and examples 5a–5c.",
    "proof": {
      "idea": "Derive the variance shortcut from the definition and explain its units.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let μ=E[X] and assume E[X²]<∞.",
          "m": "$$D=X-\\mu$$",
          "meaning": "A deviation is positive above the mean and negative below it."
        },
        {
          "why": "Deviations themselves average to zero by linearity.",
          "m": "$$E[D]=E[X]-\\mu=0$$",
          "meaning": "A signed-deviation average therefore cannot measure spread."
        },
        {
          "why": "Define variance by averaging squared deviations.",
          "m": "$$\\operatorname{Var}(X)=E[D^2]\\ge0$$",
          "meaning": "Squaring prevents positive and negative departures from cancelling; this is a definition of spread."
        },
        {
          "why": "Expand the square and use E[X]=μ.",
          "m": "$$E[(X-\\mu)^2]=E[X^2]-2\\mu E[X]+\\mu^2=E[X^2]-\\mu^2$$",
          "meaning": "This derives the computational shortcut."
        },
        {
          "why": "Define standard deviation as the nonnegative square root.",
          "m": "$$\\operatorname{SD}(X)=\\sqrt{\\operatorname{Var}(X)}$$",
          "meaning": "If X is in centimeters, variance is in square centimeters and standard deviation returns to centimeters."
        },
        {
          "why": "Variance is zero exactly when the deviation is zero almost surely.",
          "m": "$$\\operatorname{Var}(X)=0\\ \\Longleftrightarrow\\ P(X=\\mu)=1$$",
          "meaning": "A nonnegative square cannot have zero average while being positive with positive probability."
        }
      ],
      "ends": "Variance is a mean square, and standard deviation is its square root in the original measurement units."
    }
  },
  {
    "id": "c.prob.4.5.2",
    "sec": "4.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Variance shift and scale rules",
    "oneLine": "Adding a constant leaves variance unchanged, while multiplying by a scales it by a squared.",
    "statement": "<p><b>Statement:</b> For any constants $a, b \\in \\mathbb{R}$ and random variable $X$ with finite variance, the affine transformation rules for variance and standard deviation are:$$\\operatorname{Var}(aX + b) = a^2 \\operatorname{Var}(X), \\qquad \\operatorname{SD}(aX + b) = |a| \\operatorname{SD}(X)$$</p><p>In particular, variance is invariant under constant shifts ($\\operatorname{Var}(X + b) = \\operatorname{Var}(X)$) and scales quadratically under multiplication.</p><p><b>Mathematical terms:</b> $a$ is a multiplicative scale factor; $b$ is an additive shift; $|a|$ is the absolute value; $a^2$ reflects quadratic scaling of squared units.</p><p><b>Reason:</b> By linearity of expectation, $E[aX + b] = a\\mu + b$. The deviation of $aX + b$ from its mean is $(aX + b) - (a\\mu + b) = a(X - \\mu)$. The additive shift $b$ cancels out completely. Squaring this deviation yields $[a(X - \\mu)]^2 = a^2 (X - \\mu)^2$. Taking expectations gives $E[a^2 (X - \\mu)^2] = a^2 E[(X - \\mu)^2] = a^2 \\operatorname{Var}(X)$. Taking the square root gives $\\sqrt{a^2 \\sigma^2} = |a|\\sigma$.</p>",
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
      "idea": "Expand a square, then track what a shift and a scale do to deviations.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Write μ for the finite mean and define variance as the mean squared deviation.",
          "m": "$$\\mu=E[X],\\quad \\operatorname{Var}(X)=E[(X-\\mu)^2]$$",
          "meaning": "Assume E[X²] is finite, so every term below exists."
        },
        {
          "why": "Expand the square using (u−v)²=u²−2uv+v².",
          "m": "$$(X-\\mu)^2=X^2-2\\mu X+\\mu^2$$",
          "meaning": "μ is a fixed number, not a new random observation."
        },
        {
          "why": "Average each term and substitute E[X]=μ.",
          "m": "$$\\operatorname{Var}(X)=E[X^2]-2\\mu^2+\\mu^2=E[X^2]-\\mu^2$$",
          "meaning": "A constant can leave an expectation unchanged, just as it leaves a weighted sum."
        },
        {
          "why": "Let Y=aX+b, with fixed real a and b, and use linearity.",
          "m": "$$E[Y]=a\\mu+b$$",
          "meaning": "Multiplying values by a and adding b changes their average in the same way."
        },
        {
          "why": "Subtract the new mean and cancel b.",
          "m": "$$Y-E[Y]=aX+b-(a\\mu+b)=a(X-\\mu)$$",
          "meaning": "A shift does not change the distances from the mean."
        },
        {
          "why": "Square this identity and average it.",
          "m": "$$\\operatorname{Var}(Y)=E[a^2(X-\\mu)^2]=a^2\\operatorname{Var}(X)$$",
          "meaning": "A stretch by a multiplies squared distances by a², even when a is negative."
        },
        {
          "why": "Take the nonnegative square root to recover standard deviation.",
          "m": "$$\\operatorname{SD}(Y)=|a|\\operatorname{SD}(X)$$",
          "meaning": "For a=0 the variable is constant and its variance is zero."
        }
      ],
      "ends": "Variance equals second moment minus squared mean. Shifts preserve variance and scales multiply it by the square of the scale."
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
    "statement": "<p><b>Statement:</b> A <b>Bernoulli</b> random variable $I \\sim \\operatorname{Bernoulli}(p)$ has PMF $P(I = 1) = p$ and $P(I = 0) = 1-p = q$ for $p \\in [0, 1]$. A <b>Binomial</b> random variable $X \\sim \\operatorname{Binomial}(n, p)$ models the total number of successes in $n$ independent and identically distributed Bernoulli trials, with PMF:$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k \\in \\{0, 1, \\ldots, n\\}$$</p><p><b>Mathematical terms:</b> $n \\in \\mathbb{N}$ is the fixed trial count; $p \\in [0, 1]$ is the success probability per trial; $k$ is the number of successes; $\\binom{n}{k}$ is the binomial coefficient; $p^k(1-p)^{n-k}$ is the probability of any single specific sequence containing $k$ successes.</p><p><b>Reason:</b> In $n$ independent trials, any specific ordered sequence of $k$ successes and $n-k$ failures has probability $p^k(1-p)^{n-k}$ by mutual independence. Because there are $\\binom{n}{k}$ distinct sequences containing exactly $k$ successes, and each sequence represents a mutually disjoint outcome in the sample space, summing their probabilities yields $\\binom{n}{k} p^k(1-p)^{n-k}$.</p>",
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
    "provenance": "Ross, 10th ed., §4.6, PDF pp. 148–152, equations (6.1)–(6.2).",
    "proof": {
      "idea": "Derive the binomial mass from success-pattern counting.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "One Bernoulli trial is a flag I with success chance p.",
          "m": "$$P(I=1)=p,\\quad P(I=0)=1-p$$",
          "meaning": "This defines the two-value Bernoulli law."
        },
        {
          "why": "Take n mutually independent trials, all with the same p, and let X count successes.",
          "m": "$$X=\\sum_{i=1}^nI_i$$",
          "meaning": "This sampling model defines a binomial count."
        },
        {
          "why": "A specified success/failure pattern with k successes contains n−k failures.",
          "m": "$$P(\\text{one pattern})=p^k(1-p)^{n-k}$$",
          "meaning": "Independence supplies the product of trial probabilities."
        },
        {
          "why": "Choose which k labeled trial positions are successes.",
          "m": "$$\\binom nk$$",
          "meaning": "The choosing coefficient counts distinct patterns, not probabilities."
        },
        {
          "why": "The patterns are disjoint, so add their identical probabilities.",
          "m": "$$P(X=k)=\\binom nkp^k(1-p)^{n-k}\\quad(0\\le k\\le n)$$",
          "meaning": "The count times one-pattern probability gives the PMF."
        },
        {
          "why": "The binomial theorem checks that all masses sum to one.",
          "m": "$$\\sum_{k=0}^n\\binom nkp^k(1-p)^{n-k}=[p+(1-p)]^n=1$$",
          "meaning": "For p=0 or 1, interpret the law directly as a deterministic count rather than evaluating ambiguous endpoint powers mechanically."
        }
      ],
      "ends": "Binomial masses require both independent trials and a common success probability."
    }
  },
  {
    "id": "c.prob.4.6.2",
    "sec": "4.6",
    "kind": "theorem",
    "tier": "core",
    "title": "Binomial mean and variance",
    "oneLine": "For n independent Bernoulli(p) trials, the success count has mean np and variance np(1−p).",
    "statement": "<p><b>Statement:</b> For $X \\sim \\operatorname{Binomial}(n, p)$, the expectation and variance are:$$E[X] = np, \\qquad \\operatorname{Var}(X) = np(1-p) = npq$$where $q = 1-p$.</p><p><b>Mathematical terms:</b> $n$ is the number of trials; $p$ is the success probability; $q = 1-p$ is the failure probability; $X = \\sum_{i=1}^n I_i$ is represented as the sum of independent indicators.</p><p><b>Reason:</b> Represent $X = \\sum_{i=1}^n I_i$, where $I_i$ is the indicator of success on trial $i$. For each trial, $E[I_i] = 1(p) + 0(q) = p$, and $\\operatorname{Var}(I_i) = E[I_i^2] - (E[I_i])^2 = p - p^2 = p(1-p)$. By linearity of expectation, $E[X] = \\sum_{i=1}^n E[I_i] = np$. Because the trials are mutually independent, the covariances between distinct trials vanish, so the variance of the sum is the sum of the variances: $\\operatorname{Var}(X) = \\sum_{i=1}^n \\operatorname{Var}(I_i) = np(1-p)$.</p>",
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
      "idea": "Write a binomial count as independent 0-or-1 success flags.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For independent trials with common success chance p, let I_j record success on trial j.",
          "m": "$$I_j=1\\text{ on success},\\quad I_j=0\\text{ on failure}$$",
          "meaning": "The binomial count X adds all n flags."
        },
        {
          "why": "Add the flags to count the successes.",
          "m": "$$X=I_1+\\cdots+I_n$$",
          "meaning": "Each successful trial contributes exactly one."
        },
        {
          "why": "Compute a flag’s mean by the two-value weighted average.",
          "m": "$$E[I_j]=1\\cdot p+0\\cdot(1-p)=p$$",
          "meaning": "Its mean is precisely its success probability."
        },
        {
          "why": "Squaring either possible value leaves it unchanged.",
          "m": "$$I_j^2=I_j,\\quad E[I_j^2]=p$$",
          "meaning": "Both 0²=0 and 1²=1."
        },
        {
          "why": "Use variance as second moment minus squared mean.",
          "m": "$$\\operatorname{Var}(I_j)=p-p^2=p(1-p)$$",
          "meaning": "Factor p from the difference."
        },
        {
          "why": "Average the sum using linearity.",
          "m": "$$E[X]=\\sum_{j=1}^n p=np$$",
          "meaning": "Equal means add without needing independence."
        },
        {
          "why": "For i≠j, independent trials imply E[I_i I_j]=p², so their covariance is zero.",
          "m": "$$\\operatorname{Cov}(I_i,I_j)=p^2-p\\cdot p=0$$",
          "meaning": "Here independence is essential."
        },
        {
          "why": "Add variances using the variance-of-a-sum formula.",
          "m": "$$\\operatorname{Var}(X)=\\sum_{j=1}^np(1-p)=np(1-p)$$",
          "meaning": "The cross-covariance correction vanishes."
        }
      ],
      "ends": "A binomial with n trials and success probability p has mean np and variance np(1−p)."
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
    "statement": "<p><b>Statement:</b> The binomial PMF $p(k) = P(X = k)$ satisfies the ratio recursion:$$\\frac{p(k)}{p(k-1)} = \\frac{n - k + 1}{k} \\cdot \\frac{p}{1-p}, \\quad k \\in \\{1, \\ldots, n\\}$$The PMF increases while $k \\le (n+1)p$, reaching its mode at $k^* = \\lfloor(n+1)p\\rfloor$, and decreases thereafter.</p><p><b>Mathematical terms:</b> $p(k)$ is the PMF value at $k$; $\\frac{p(k)}{p(k-1)}$ is the step ratio; $k^*$ is the mode (most likely value); $\\lfloor\\cdot\\rfloor$ is the floor function.</p><p><b>Reason:</b> Expanding the ratio of consecutive terms: $\\frac{\\binom{n}{k} p^k q^{n-k}}{\\binom{n}{k-1} p^{k-1} q^{n-k+1}} = \\frac{n!/[k!(n-k)!]}{n!/[(k-1)!(n-k+1)!]} \\cdot \\frac{p}{q} = \\frac{n-k+1}{k} \\cdot \\frac{p}{q}$. The condition for $p(k) \\ge p(k-1)$ is $\\frac{n-k+1}{k} \\frac{p}{1-p} \\ge 1 \\iff (n-k+1)p \\ge kq \\iff np + p \\ge k(p+q) \\iff k \\le (n+1)p$. This provides a numerically stable recurrence for CDF evaluation without evaluating astronomical factorials.</p>",
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
      "idea": "Divide neighboring binomial probabilities and show every cancellation.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume 0<p<1 and define p_k as the probability of k successes in n trials.",
          "m": "$$p_k=\\binom nk p^k(1-p)^{n-k}$$",
          "meaning": "The powers give the probability of one pattern; the choosing coefficient counts patterns."
        },
        {
          "why": "Increase the success count by one.",
          "m": "$$p_{k+1}=\\binom n{k+1}p^{k+1}(1-p)^{n-k-1}$$",
          "meaning": "This is valid for 0≤k<n."
        },
        {
          "why": "Divide the second formula by the first.",
          "m": "$$\\frac{p_{k+1}}{p_k}=\\frac{\\binom n{k+1}}{\\binom nk}\\frac{p^{k+1}}{p^k}\\frac{(1-p)^{n-k-1}}{(1-p)^{n-k}}$$",
          "meaning": "The denominator is positive under 0<p<1."
        },
        {
          "why": "Expand the choosing coefficients and cancel n!.",
          "m": "$$\\frac{\\binom n{k+1}}{\\binom nk}=\\frac{k!(n-k)!}{(k+1)!(n-k-1)!}=\\frac{n-k}{k+1}$$",
          "meaning": "Use (k+1)!=(k+1)k! and (n−k)!=(n−k)(n−k−1)!."
        },
        {
          "why": "Cancel the powers and multiply the ratios.",
          "m": "$$p_{k+1}=p_k\\frac{n-k}{k+1}\\frac p{1-p}$$",
          "meaning": "This computes the next mass without recalculating large factorials."
        },
        {
          "why": "Start at zero successes and accumulate masses to obtain the CDF.",
          "m": "$$p_0=(1-p)^n,\\quad F(k)=\\sum_{j=0}^kp_j$$",
          "meaning": "For p=0 or p=1 use the constant-count distribution directly; the division recursion does not apply."
        }
      ],
      "ends": "The recursion follows from cancellation, and a CDF is the sum of masses through its cutoff."
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
    "statement": "<p><b>Statement:</b> A random variable $X$ has a <b>Poisson distribution</b> with parameter $\\lambda > 0$ ($X \\sim \\operatorname{Poisson}(\\lambda)$) if its PMF is:$$P(X = k) = e^{-\\lambda} \\frac{\\lambda^k}{k!}, \\quad k \\in \\{0, 1, 2, \\ldots\\}$$By the Poisson Paradigm (Law of Rare Events), if $n \\to \\infty$ and $p_n \\to 0$ such that $n p_n \\to \\lambda$, then $\\operatorname{Binomial}(n, p_n) \\to \\operatorname{Poisson}(\\lambda)$ pointwise for every $k$.</p><p><b>Mathematical terms:</b> $\\lambda > 0$ is the mean rate of occurrence; $k \\in \\mathbb{N}_0$ is the realized count; $e^{-\\lambda}$ is the normalization factor ensuring $\\sum_{k=0}^\\infty P(X = k) = e^{-\\lambda} \\sum \\frac{\\lambda^k}{k!} = e^{-\\lambda} e^\\lambda = 1$.</p><p><b>Reason:</b> In the binomial PMF with $p = \\lambda/n$, write $\\binom{n}{k} (\\frac{\\lambda}{n})^k (1 - \\frac{\\lambda}{n})^{n-k} = \\frac{n(n-1)\\cdots(n-k+1)}{n^k} \\frac{\\lambda^k}{k!} (1 - \\frac{\\lambda}{n})^n (1 - \\frac{\\lambda}{n})^{-k}$. As $n \\to \\infty$ with $k$ fixed, $\\frac{n(n-1)\\cdots(n-k+1)}{n^k} \\to 1$, $(1 - \\frac{\\lambda}{n})^n \\to e^{-\\lambda}$, and $(1 - \\frac{\\lambda}{n})^{-k} \\to 1$. The product converges precisely to $e^{-\\lambda} \\frac{\\lambda^k}{k!}$.</p>",
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
      "idea": "First derive Poisson moments, then show the rare-event limit.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a Poisson variable, λ≥0 is its rate parameter; begin with λ>0.",
          "m": "$$P(X=k)=e^{-\\lambda}\\frac{\\lambda^k}{k!}\\quad(k=0,1,\\ldots)$$",
          "meaning": "The λ=0 case is X=0 with probability one."
        },
        {
          "why": "Use the exponential series to check the total probability.",
          "m": "$$\\sum_{k=0}^{\\infty}e^{-\\lambda}\\frac{\\lambda^k}{k!}=e^{-\\lambda}e^\\lambda=1$$",
          "meaning": "The identity e^z=Σz^k/k! can be taken as the exponential’s series definition; convergence is a calculus result."
        },
        {
          "why": "Insert the masses into the definition of the mean; k=0 contributes zero.",
          "m": "$$E[X]=e^{-\\lambda}\\sum_{k=1}^{\\infty}\\frac{k\\lambda^k}{k!}$$",
          "meaning": "Expectation weights each possible value by its probability."
        },
        {
          "why": "Cancel k against the first factor of k!, remove one λ, and put j=k−1.",
          "m": "$$E[X]=\\lambda e^{-\\lambda}\\sum_{j=0}^{\\infty}\\frac{\\lambda^j}{j!}=\\lambda$$",
          "meaning": "The remaining series is e^λ, cancelling e^(−λ)."
        },
        {
          "why": "For the product X(X−1), the first two terms are zero and two factorial factors cancel.",
          "m": "$$E[X(X-1)]=e^{-\\lambda}\\sum_{k=2}^{\\infty}\\frac{\\lambda^k}{(k-2)!}$$",
          "meaning": "The identity k!=k(k−1)(k−2)! explains the cancellation."
        },
        {
          "why": "Put j=k−2 and take out λ².",
          "m": "$$E[X(X-1)]=\\lambda^2e^{-\\lambda}\\sum_{j=0}^{\\infty}\\frac{\\lambda^j}{j!}=\\lambda^2$$",
          "meaning": "This is the same exponential-series calculation."
        },
        {
          "why": "Use the algebraic identity X²=X(X−1)+X.",
          "m": "$$E[X^2]=\\lambda^2+\\lambda$$",
          "meaning": "Linearity adds the two already computed moments."
        },
        {
          "why": "Subtract the squared mean to compute variance.",
          "m": "$$\\operatorname{Var}(X)=\\lambda^2+\\lambda-\\lambda^2=\\lambda$$",
          "meaning": "These moments agree with the constant-zero case when λ=0."
        },
        {
          "why": "For a binomial with p=λ/n, fix k while n tends to infinity.",
          "m": "$$P(B_n=k)=\\binom nk(\\lambda/n)^k(1-\\lambda/n)^{n-k}$$",
          "meaning": "Take n≥λ so this is a valid probability model."
        },
        {
          "why": "Combine the growing choosing coefficient with n^(−k).",
          "m": "$$\\binom nk\\frac{\\lambda^k}{n^k}=\\frac{\\lambda^k}{k!}\\prod_{j=0}^{k-1}(1-j/n)\\longrightarrow\\frac{\\lambda^k}{k!}$$",
          "meaning": "For fixed k there are finitely many factors, each tending to 1."
        },
        {
          "why": "Use the exponential limit for the remaining factor.",
          "m": "$$(1-\\lambda/n)^{n-k}=(1-\\lambda/n)^n(1-\\lambda/n)^{-k}\\longrightarrow e^{-\\lambda}$$",
          "meaning": "Taking logs uses log(1+u)/u→1 as u→0, a calculus limit."
        },
        {
          "why": "Multiply the two limits.",
          "m": "$$P(B_n=k)\\longrightarrow e^{-\\lambda}\\frac{\\lambda^k}{k!}$$",
          "meaning": "This is a limit for each fixed k; it is not an exact identity for finite n."
        }
      ],
      "ends": "The Poisson law has mean and variance λ and is the fixed-rate rare-success limit of binomial laws."
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
    "statement": "<p><b>Statement:</b> A <b>Geometric</b> random variable $X \\sim \\operatorname{Geometric}(p)$ models the number of independent Bernoulli trials until the first success occurs ($p \\in (0, 1]$). Its PMF and CDF are:$$P(X = k) = (1-p)^{k-1} p, \\quad k \\in \\{1, 2, \\ldots\\}, \\qquad F_X(k) = 1 - (1-p)^k$$It is the unique discrete distribution possessing the <b>memoryless property</b>: $P(X > s + t \\mid X > s) = P(X > t)$ for $s, t \\in \\mathbb{N}$. Its mean and variance are $E[X] = \\frac{1}{p}$ and $\\operatorname{Var}(X) = \\frac{1-p}{p^2}$.</p><p><b>Mathematical terms:</b> $p$ is the success probability per trial; $k$ is the trial index of the first success; $(1-p)^{k-1}$ is the probability of $k-1$ initial consecutive failures; $P(X > k) = (1-p)^k$ is the tail survival probability.</p><p><b>Reason:</b> The first success occurs at trial $k$ if and only if trials $1, \\ldots, k-1$ are failures and trial $k$ is a success. By independence, multiplying these probabilities gives $(1-p)^{k-1}p$. For the memoryless property, the event $\\{X > s + t\\}$ conditioned on $\\{X > s\\}$ requires $t$ additional failures; because trials are independent, the previous $s$ failures provide zero information about future trials: $P(X > s + t \\mid X > s) = \\frac{(1-p)^{s+t}}{(1-p)^s} = (1-p)^t = P(X > t)$.</p>",
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
      "idea": "Use a first-trial split to derive geometric moments without differentiating an infinite series.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let X count trials up to and including the first success, with 0<p≤1 and q=1−p.",
          "m": "$$P(X=n)=q^{n-1}p\\quad(n\\ge1)$$",
          "meaning": "The first n−1 trials fail and the last succeeds; independence multiplies these chances."
        },
        {
          "why": "The tail decreases geometrically, so the first and second moments are finite.",
          "m": "$$P(X>n)=q^n$$",
          "meaning": "For 0<q<1, n²q^n is bounded by a decaying geometric sequence eventually; this justifies the moment equations below. For p=1, X=1 directly."
        },
        {
          "why": "After a first-trial failure, a fresh independent wait X' has the same law as X.",
          "m": "$$X=1\\text{ on success},\\quad X=1+X'\\text{ on failure}$$",
          "meaning": "Let m=E[X] and s=E[X²]."
        },
        {
          "why": "Average the two first-trial cases.",
          "m": "$$m=p\\cdot1+q(1+m)=1+qm$$",
          "meaning": "Total expectation weights cases by p and q."
        },
        {
          "why": "Move qm to the left and use 1−q=p.",
          "m": "$$pm=1,\\quad m=1/p$$",
          "meaning": "This is ordinary solution of a linear equation."
        },
        {
          "why": "Square the failure-case value and average the two cases again.",
          "m": "$$s=p+qE[(1+X')^2]=1+2qm+qs$$",
          "meaning": "Expand (1+X')²=1+2X'+X'² and substitute the equal moments of X'."
        },
        {
          "why": "Isolate s and substitute m=1/p.",
          "m": "$$ps=1+2q/p,\\quad s=\\frac{p+2q}{p^2}=\\frac{1+q}{p^2}$$",
          "meaning": "The simplification uses p+q=1."
        },
        {
          "why": "Subtract the squared mean.",
          "m": "$$\\operatorname{Var}(X)=s-m^2=\\frac q{p^2}=\\frac{1-p}{p^2}$$",
          "meaning": "For p=1 this gives mean 1 and variance 0, as required."
        }
      ],
      "ends": "The trial-count geometric distribution starts at 1; counting failures instead shifts the mean down by 1 and leaves the variance unchanged."
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
    "statement": "<p><b>Statement:</b> A <b>Negative Binomial</b> random variable $X \\sim \\operatorname{NegBin}(r, p)$ models the number of independent Bernoulli trials required to achieve $r$ successes ($r \\in \\mathbb{N}, p \\in (0, 1]$). Its PMF is:$$P(X = k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}, \\quad k \\in \\{r, r+1, \\ldots\\}$$Its mean and variance are $E[X] = \\frac{r}{p}$ and $\\operatorname{Var}(X) = \\frac{r(1-p)}{p^2}$.</p><p><b>Mathematical terms:</b> $r$ is the specified target number of successes; $k$ is the total trial count; $\\binom{k-1}{r-1}$ selects positions of earlier successes; $p^r(1-p)^{k-r}$ is the probability of any sequence with $r$ successes and $k-r$ failures.</p><p><b>Reason:</b> For the $r$-th success to occur exactly on trial $k$, two independent events must occur simultaneously: (1) exactly $r-1$ successes must occur in the first $k-1$ trials (which occurs in $\\binom{k-1}{r-1}$ ways, each with probability $p^{r-1}(1-p)^{(k-1)-(r-1)}$), and (2) trial $k$ must be a success (probability $p$). Multiplying these independent probabilities gives $\\binom{k-1}{r-1} p^r(1-p)^{k-r}$. Representing $X = \\sum_{j=1}^r G_j$ as the sum of $r$ independent $\\operatorname{Geometric}(p)$ variables gives $E[X] = r/p$ and $\\operatorname{Var}(X) = r(1-p)/p^2$.</p>",
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
      "idea": "Count sequences ending in the r-th success and decompose the waiting time into geometric waits.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let X be the trial number of the r-th success, with integer r≥1 and 0<p≤1.",
          "m": "$$X\\ge r$$",
          "meaning": "At least r trials are needed for r successes."
        },
        {
          "why": "For X=n, the final trial is a success and the preceding n−1 trials have exactly r−1 successes.",
          "m": "$$\\binom{n-1}{r-1}\\text{ preceding patterns}$$",
          "meaning": "Choose the positions of those earlier successes."
        },
        {
          "why": "Every such pattern has r successes and n−r failures.",
          "m": "$$P(X=n)=\\binom{n-1}{r-1}p^r(1-p)^{n-r}$$",
          "meaning": "Independence gives the same product probability to each disjoint pattern."
        },
        {
          "why": "Separate the wait into successive blocks ending at a success.",
          "m": "$$X=G_1+\\cdots+G_r$$",
          "meaning": "G_1 is the first wait; G_2 counts trials after that success until the next, and so on."
        },
        {
          "why": "For fixed positive block lengths g_j, prescribe failures then one success in every block.",
          "m": "$$P(G_1=g_1,\\ldots,G_r=g_r)=\\prod_{j=1}^r(1-p)^{g_j-1}p$$",
          "meaning": "Disjoint trial positions are independent, proving that the G_j are independent geometric variables, even though block endpoints are random."
        },
        {
          "why": "Use the previously derived geometric moments.",
          "m": "$$E[G_j]=1/p,\\quad \\operatorname{Var}(G_j)=(1-p)/p^2$$",
          "meaning": "Each block restarts with the same independent trial rule."
        },
        {
          "why": "Add means and, by independence, variances.",
          "m": "$$E[X]=r/p,\\quad\\operatorname{Var}(X)=r(1-p)/p^2$$",
          "meaning": "The failure count X−r has the same variance but mean r(1−p)/p."
        }
      ],
      "ends": "The negative binomial formula here counts trials through the r-th success; state the convention before using its mean."
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
    "statement": "<p><b>Statement:</b> A <b>Hypergeometric</b> random variable $X \\sim \\operatorname{Hypergeometric}(N, m, n)$ models the number of successes in an unordered sample of size $n$ drawn <i>without replacement</i> from a finite population of size $N$ containing $m$ successes. Its PMF is:$$P(X = k) = \\frac{\\binom{m}{k} \\binom{N-m}{n-k}}{\\binom{N}{n}}, \\quad \\max(0, n - (N-m)) \\le k \\le \\min(n, m)$$Its mean is $E[X] = n \\frac{m}{N}$ and its variance is $\\operatorname{Var}(X) = n \\frac{m}{N} \\left(1 - \\frac{m}{N}\\right) \\left(\\frac{N-n}{N-1}\\right)$.</p><p><b>Mathematical terms:</b> $N$ is population size; $m$ is success items in population; $n$ is sample size; $k$ is observed sample successes; $\\frac{N-n}{N-1}$ is the <b>finite population correction factor</b>.</p><p><b>Reason:</b> There are $\\binom{N}{n}$ equally likely ways to draw an unordered sample of size $n$. To obtain exactly $k$ successes and $n-k$ failures, one must choose $k$ items from the $m$ successes (in $\\binom{m}{k}$ ways) and $n-k$ items from the $N-m$ failures (in $\\binom{N-m}{n-k}$ ways). By the counting principle, the product $\\binom{m}{k}\\binom{N-m}{n-k}$ gives the favorable outcome count. The finite population correction factor $\\frac{N-n}{N-1} < 1$ reflects the reduced variance caused by negative covariance between draws without replacement.</p>",
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
      "idea": "Count marked subsets and show the covariance algebra for sampling without replacement.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "There are N objects, m marked, and a uniform n-object sample without replacement.",
          "m": "$$p=m/N,\\quad 0\\le n\\le N$$",
          "meaning": "Assume N>1 for the displayed variance formula."
        },
        {
          "why": "A sample with k marked objects chooses k from m and n−k from N−m.",
          "m": "$$P(X=k)=\\frac{\\binom mk\\binom{N-m}{n-k}}{\\binom Nn}$$",
          "meaning": "Favorable unordered samples are divided by all equally likely unordered samples; impossible choosing counts give zero."
        },
        {
          "why": "Order the sampled objects and let I_j indicate a marked object in draw position j.",
          "m": "$$X=\\sum_{j=1}^nI_j,\\quad E[I_j]=p$$",
          "meaning": "Symmetry makes each position equally likely to contain any population object."
        },
        {
          "why": "Average the sum and compute each flag’s variance.",
          "m": "$$E[X]=np,\\quad\\operatorname{Var}(I_j)=p(1-p)$$",
          "meaning": "This mean needs no independence."
        },
        {
          "why": "For two distinct positions, use conditional sampling without replacement.",
          "m": "$$E[I_iI_j]=\\frac mN\\frac{m-1}{N-1}$$",
          "meaning": "Given a marked first object, only m−1 marked objects remain among N−1."
        },
        {
          "why": "Subtract the product of means and simplify.",
          "m": "$$\\operatorname{Cov}(I_i,I_j)=\\frac{m(m-1)}{N(N-1)}-\\frac{m^2}{N^2}=-\\frac{p(1-p)}{N-1}$$",
          "meaning": "The common numerator is mN(m−1)−m²(N−1)=−m(N−m)."
        },
        {
          "why": "There are n(n−1)/2 unordered position pairs; the variance expansion multiplies that count by 2.",
          "m": "$$\\operatorname{Var}(X)=np(1-p)-n(n-1)\\frac{p(1-p)}{N-1}$$",
          "meaning": "Negative covariances reduce spread relative to independent draws."
        },
        {
          "why": "Factor np(1−p) and combine the bracket.",
          "m": "$$\\operatorname{Var}(X)=np(1-p)\\frac{N-n}{N-1}$$",
          "meaning": "The bracket is 1−(n−1)/(N−1)=(N−n)/(N−1). For N=1 the count is deterministic, so variance is zero directly."
        }
      ],
      "ends": "Without replacement, draw flags are dependent; the finite-population correction follows from their negative covariance."
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
    "statement": "<p><b>Statement:</b> A random variable $X$ follows a <b>Zeta (Zipf) distribution</b> with parameter $\\alpha > 1$ if its PMF is:$$P(X = k) = \\frac{1}{\\zeta(\\alpha)} \\frac{1}{k^\\alpha}, \\quad k \\in \\{1, 2, 3, \\ldots\\}$$where $\\zeta(\\alpha) = \\sum_{n=1}^\\infty n^{-\\alpha}$ is the Riemann Zeta function. The $m$-th moment $E[X^m]$ is finite if and only if $\\alpha > m + 1$.</p><p><b>Mathematical terms:</b> $\\alpha > 1$ is the power-law shape parameter; $\\zeta(\\alpha)$ is the Riemann zeta normalization constant; heavy-tailed means tail probabilities decay polynomially rather than exponentially.</p><p><b>Reason:</b> The normalization constant $C$ must satisfy $\\sum_{k=1}^\\infty C k^{-\\alpha} = 1$, which forces $C = 1/\\sum_{k=1}^\\infty k^{-\\alpha} = 1/\\zeta(\\alpha)$. The $p$-series $\\sum k^{-\\alpha}$ converges if and only if $\\alpha > 1$. The $m$-th moment sum $\\sum_{k=1}^\\infty k^m \\frac{1}{\\zeta(\\alpha) k^\\alpha} = \\frac{1}{\\zeta(\\alpha)} \\sum k^{-(\\alpha - m)}$ converges if and only if the exponent $\\alpha - m > 1$, establishing that moments exist only when $\\alpha > m + 1$.</p>",
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
    "provenance": "Ross, 10th ed., §4.8.4, PDF p. 166.",
    "proof": {
      "idea": "Normalize power-law masses and test which moments exist.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For α>1, let ζ(α) be the sum of the positive power-law terms.",
          "m": "$$\\zeta(\\alpha)=\\sum_{k=1}^{\\infty}k^{-\\alpha}$$",
          "meaning": "The p-series convergence test gives finiteness exactly for α>1; comparing with ∫_1^∞x^(−α)dx proves this threshold."
        },
        {
          "why": "Divide each positive term by the sum.",
          "m": "$$P(X=k)=\\frac{k^{-\\alpha}}{\\zeta(\\alpha)}\\quad(k\\ge1)$$",
          "meaning": "The definition guarantees nonnegative masses summing to 1."
        },
        {
          "why": "To calculate a positive r-th moment, multiply each mass by k^r.",
          "m": "$$E[X^r]=\\frac1{\\zeta(\\alpha)}\\sum_{k=1}^{\\infty}k^{-(\\alpha-r)}$$",
          "meaning": "The exponent identity k^r k^(−α)=k^(−(α−r)) gives the displayed series."
        },
        {
          "why": "Apply the same p-series convergence threshold.",
          "m": "$$E[X^r]<\\infty\\ \\Longleftrightarrow\\ \\alpha>r+1$$",
          "meaning": "At and below the threshold the nonnegative series diverges; one cannot use a finite-moment formula there."
        },
        {
          "why": "For α>2 the mean is the ratio of two zeta sums, and for α>3 variance uses the second moment.",
          "m": "$$E[X]=\\frac{\\zeta(\\alpha-1)}{\\zeta(\\alpha)},\\quad\\operatorname{Var}(X)=\\frac{\\zeta(\\alpha-2)}{\\zeta(\\alpha)}-\\left(\\frac{\\zeta(\\alpha-1)}{\\zeta(\\alpha)}\\right)^2\\ (\\alpha>3)$$",
          "meaning": "These follow by substituting r=1,2 and subtracting the squared mean."
        }
      ],
      "ends": "A normalized distribution can still lack a finite mean or variance; moment existence depends on the tail exponent."
    }
  },
  {
    "id": "c.prob.4.9.1",
    "sec": "4.9",
    "kind": "theorem",
    "tier": "core",
    "title": "Expectation of sums and indicator method",
    "oneLine": "Represent a count as a sum of indicators to compute its mean even when the counted events are dependent.",
    "statement": "<p><b>Statement:</b> The <b>Indicator Method</b> evaluates the expected count of events $X = \\sum_{i=1}^n I_i$ by decomposing $X$ into indicator variables $I_i = \\mathbf{1}_{A_i}$, where $I_i = 1$ if event $A_i$ occurs and $0$ otherwise. Because $E[I_i] = P(A_i)$ and expectation is linear, the expected total count is:$$E[X] = E\\left[\\sum_{i=1}^n I_i\\right] = \\sum_{i=1}^n E[I_i] = \\sum_{i=1}^n P(A_i)$$</p><p>This identity holds without requiring independence among the events $A_i$.</p><p><b>Mathematical terms:</b> $\\mathbf{1}_{A_i}$ is the indicator random variable of event $A_i$; $X$ is the total number of events that occur; $E[I_i] = P(A_i)$ converts expectation directly into event probability.</p><p><b>Reason:</b> An indicator variable takes value 1 with probability $P(A_i)$ and 0 with probability $1 - P(A_i)$; its expectation is $1 \\cdot P(A_i) + 0 \\cdot (1 - P(A_i)) = P(A_i)$. By linearity of expectation, the expectation of a sum is always the sum of the expectations, irrespective of whether the indicators $I_i$ are independent or heavily correlated. This reduces computing complex expected totals to evaluating marginal probabilities of individual events.</p>",
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
      "idea": "Turn each event into a 0-or-1 flag and average the count.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For each of n events A_i, define its membership flag I_i.",
          "m": "$$I_i=\\mathbf1_{A_i}$$",
          "meaning": "This notation means 1 if A_i occurs and 0 otherwise."
        },
        {
          "why": "At any outcome, add one for each occurring event.",
          "m": "$$N=I_1+\\cdots+I_n$$",
          "meaning": "This exactly equals the number of occurring events, even when they overlap."
        },
        {
          "why": "The flag has only two possible values, so compute its weighted average.",
          "m": "$$E[I_i]=1P(A_i)+0P(A_i^c)=P(A_i)$$",
          "meaning": "No information about any other event is needed."
        },
        {
          "why": "Average the finite sum by linearity.",
          "m": "$$E[N]=\\sum_{i=1}^nE[I_i]$$",
          "meaning": "Dependence affects joint probabilities but does not prevent adding means."
        },
        {
          "why": "Substitute the individual flag means.",
          "m": "$$E[N]=\\sum_{i=1}^nP(A_i)$$",
          "meaning": "Event counts can therefore have a simple mean even when their full distribution is difficult."
        },
        {
          "why": "For example, with event chances 0.2, 0.5 and 0.8, add those three numbers.",
          "m": "$$E[N]=0.2+0.5+0.8=1.5$$",
          "meaning": "An expected count can be noninteger; it is an average across experiments, not the count in one experiment."
        }
      ],
      "ends": "The indicator method computes an expected event count without assuming independent events."
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
    "statement": "<p><b>Statement:</b> For a sum of random variables $X = \\sum_{i=1}^n X_i$, the variance is given by the sum of individual variances plus all pairwise covariance corrections:$$\\operatorname{Var}\\left(\\sum_{i=1}^n X_i\\right) = \\sum_{i=1}^n \\operatorname{Var}(X_i) + 2 \\sum_{1 \\le i < j \\le n} \\operatorname{Cov}(X_i, X_j) = \\sum_{i=1}^n \\sum_{j=1}^n \\operatorname{Cov}(X_i, X_j)$$</p><p>where $\\operatorname{Cov}(X_i, X_j) = E[(X_i - \\mu_i)(X_j - \\mu_j)] = E[X_i X_j] - E[X_i]E[X_j]$. When $X_i$ are pairwise uncorrelated ($\\operatorname{Cov} = 0$), the variance simplifies to $\\sum \\operatorname{Var}(X_i)$.</p><p><b>Mathematical terms:</b> $\\operatorname{Cov}(X_i, X_j)$ is the covariance; $\\operatorname{Cov}(X_i, X_i) = \\operatorname{Var}(X_i)$; pairwise uncorrelated means $\\operatorname{Cov}(X_i, X_j) = 0$ for all $i \\ne j$.</p><p><b>Reason:</b> Expand the definition $\\operatorname{Var}(\\sum X_i) = E[(\\sum (X_i - \\mu_i))^2]$. Expanding the square of an $n$-term sum produces $n$ diagonal terms $(X_i - \\mu_i)^2$ and $2\\binom{n}{2}$ off-diagonal cross-product terms $(X_i - \\mu_i)(X_j - \\mu_j)$. Distributing the expectation gives $\\sum E[(X_i - \\mu_i)^2] + 2 \\sum_{i < j} E[(X_i - \\mu_i)(X_j - \\mu_j)] = \\sum \\operatorname{Var}(X_i) + 2 \\sum_{i < j} \\operatorname{Cov}(X_i, X_j)$.</p>",
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
      "idea": "Expand the square of a sum and identify each cross term as covariance.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume finite second moments and let μ_i=E[X_i].",
          "m": "$$T=\\sum_iX_i,\\quad E[T]=\\sum_i\\mu_i$$",
          "meaning": "A finite sum has a mean by linearity."
        },
        {
          "why": "Subtract the total mean before squaring.",
          "m": "$$T-E[T]=\\sum_i(X_i-\\mu_i)$$",
          "meaning": "Write D_i=X_i−μ_i for these centered deviations."
        },
        {
          "why": "Use the repeated version of (a+b)²=a²+2ab+b².",
          "m": "$$\\left(\\sum_iD_i\\right)^2=\\sum_iD_i^2+2\\sum_{i<j}D_iD_j$$",
          "meaning": "Each pair occurs twice in the full expansion; i<j lists it once."
        },
        {
          "why": "Average every term of this finite expansion.",
          "m": "$$\\operatorname{Var}(T)=\\sum_iE[D_i^2]+2\\sum_{i<j}E[D_iD_j]$$",
          "meaning": "This uses the definition of variance and linearity."
        },
        {
          "why": "Recognize the mean square of each deviation as its variance and the mean product as covariance.",
          "m": "$$\\operatorname{Var}(T)=\\sum_i\\operatorname{Var}(X_i)+2\\sum_{i<j}\\operatorname{Cov}(X_i,X_j)$$",
          "meaning": "Expand the covariance definition to obtain E[X_iX_j]−μ_iμ_j if desired."
        },
        {
          "why": "For independent variables, the joint weighted average factors.",
          "m": "$$E[X_iX_j]=E[X_i]E[X_j]\\ \\Longrightarrow\\ \\operatorname{Cov}(X_i,X_j)=0$$",
          "meaning": "Independence is sufficient; zero covariance can also occur without independence."
        },
        {
          "why": "For fixed weights a_i, replace every D_i by a_iD_i.",
          "m": "$$\\operatorname{Var}\\left(\\sum_i a_iX_i\\right)=\\sum_i a_i^2\\operatorname{Var}(X_i)+2\\sum_{i<j}a_i a_j\\operatorname{Cov}(X_i,X_j)$$",
          "meaning": "Squared terms acquire a_i² and cross terms acquire a_i a_j."
        }
      ],
      "ends": "Variances add only when the covariance correction is zero; the full identity always includes it."
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
    "statement": "<p><b>Statement:</b> For any real numbers $a < b$, a cumulative distribution function $F(x) = P(X \\le x)$ determines interval probabilities through the fundamental evaluation formulas:<br>(1) Half-open interval: $P(a < X \\le b) = F(b) - F(a)$.<br>(2) Closed interval: $P(a \\le X \\le b) = F(b) - F(a^-)$.<br>(3) Open interval: $P(a < X < b) = F(b^-) - F(a)$.<br>(4) Point mass (atom): $P(X = a) = F(a) - F(a^-)$.</p><p><b>Mathematical terms:</b> $F(a) = \\lim_{x \\downarrow a} F(x)$ is the right-continuous value; $F(a^-) = \\lim_{x \\uparrow a} F(x)$ is the left-hand limit; an atom is a discontinuity jump where $F(a) > F(a^-)$.</p><p><b>Reason:</b> Partition the event $\\{X \\le b\\}$ into the disjoint union $\\{X \\le a\\} \\cup \\{a < X \\le b\\}$. By finite additivity, $P(X \\le b) = P(X \\le a) + P(a < X \\le b)$, which rearranges to $P(a < X \\le b) = F(b) - F(a)$. For a point mass, write $\\{X = a\\} = \\{X \\le a\\} \\setminus \\{X < a\\}$; since $\\{X < a\\} = \\bigcup_{n=1}^\\infty \\{X \\le a - 1/n\\}$, continuity from below yields $P(X < a) = \\lim F(a - 1/n) = F(a^-)$, giving $P(X = a) = F(a) - F(a^-)$.</p>",
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
      "idea": "Isolate an interval or one exact value by subtracting nested cutoff probabilities.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a<b, values at most b split into values at most a and values between a and b.",
          "m": "$$\\{X\\le b\\}=\\{X\\le a\\}\\cup\\{a<X\\le b\\}$$",
          "meaning": "The second piece excludes a so the two pieces are disjoint."
        },
        {
          "why": "Apply finite additivity.",
          "m": "$$F(b)=F(a)+P(a<X\\le b)$$",
          "meaning": "F(t)=P(X≤t) includes its endpoint t."
        },
        {
          "why": "Subtract F(a) to isolate the interval.",
          "m": "$$P(a<X\\le b)=F(b)-F(a)$$",
          "meaning": "The left endpoint is excluded and the right endpoint included."
        },
        {
          "why": "For a fixed x, cutoffs x−1/n increase toward x but never include x.",
          "m": "$$\\bigcup_n\\{X\\le x-1/n\\}=\\{X<x\\}$$",
          "meaning": "Every value below x is eventually included in this union."
        },
        {
          "why": "Continuity for increasing events gives the left limit.",
          "m": "$$F(x^-)=\\lim_{n\\to\\infty}F(x-1/n)=P(X<x)$$",
          "meaning": "The superscript minus means approaching x from smaller values."
        },
        {
          "why": "Split X≤x into X<x and X=x, then subtract.",
          "m": "$$P(X=x)=F(x)-F(x^-)$$",
          "meaning": "Thus a CDF jump is exactly the probability mass at that value."
        },
        {
          "why": "For inclusive left and exclusive right endpoints, use the corresponding left limits.",
          "m": "$$P(a\\le X\\le b)=F(b)-F(a^-),\\quad P(a<X<b)=F(b^-)-F(a)$$",
          "meaning": "Replace a cutoff by a left limit precisely when its boundary value must be removed or restored."
        }
      ],
      "ends": "Endpoint choices matter when atoms have positive probability; a density distribution has no atoms."
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
    "statement": "<p><b>Statement:</b> Given a random variable $X: \\Omega \\to \\mathbb{R}$ on a discrete sample space with outcome probabilities $P(\\{\\omega\\})$, the probability mass function $p_X(x)$ at each value $x \\in \\mathbb{R}$ is the sum of the probabilities of all outcomes that map to $x$:$$p_X(x) = P(X = x) = \\sum_{\\omega \\in \\Omega : X(\\omega) = x} P(\\{\\omega\\})$$</p><p><b>Mathematical terms:</b> The set $X^{-1}(x) = \\{\\omega \\in \\Omega : X(\\omega) = x\\}$ is the fiber (pre-image) of $x$; $p_X(x)$ is the aggregated mass.</p><p><b>Reason:</b> The event $\\{X = x\\}$ is by definition the pre-image set $\\{\\omega \\in \\Omega : X(\\omega) = x\\}$. Because each distinct outcome $\\omega$ represents an elementary, disjoint event in the discrete sample space, the probability of the pre-image event is the sum of the individual probabilities of its constituent outcomes by countable additivity.</p>",
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
    "provenance": "Ross, 10th ed., §4.2, PDF pp. 135–137; examples 2a and 2b.",
    "proof": {
      "idea": "Recover a numerical PMF by adding outcome groups.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let S be a discrete original sample space with known outcome weights p(s).",
          "m": "$$\\sum_{s\\in S}p(s)=1$$",
          "meaning": "They need not be equal."
        },
        {
          "why": "Define the recorded value X(s) for each outcome.",
          "m": "$$A_x=\\{s:X(s)=x\\}$$",
          "meaning": "Each A_x collects all outcomes giving that same value."
        },
        {
          "why": "Add the original probabilities in each group.",
          "m": "$$p_X(x)=\\sum_{s\\in A_x}p(s)$$",
          "meaning": "Additivity is valid because the original outcomes are disjoint singleton events."
        },
        {
          "why": "The value groups form a partition of all outcomes.",
          "m": "$$\\sum_xp_X(x)=\\sum_sp(s)=1$$",
          "meaning": "Regrouping nonnegative weights preserves their total."
        },
        {
          "why": "If p(s)=1/|S| is uniform, the group sum becomes a count.",
          "m": "$$p_X(x)=|A_x|/|S|$$",
          "meaning": "Different group sizes give different numerical masses, even from a uniform experiment."
        }
      ],
      "ends": "Aggregating outcomes sums their probability weights; it does not average their labels or assume a uniform numerical law."
    }
  },
  {
    "id": "c.prob.4.4.2",
    "sec": "4.4",
    "kind": "technique",
    "tier": "core",
    "title": "Nonlinear functions and expectations",
    "oneLine": "For nonlinear g, evaluate E[g(X)] across the support; g(E[X]) usually gives a different quantity.",
    "statement": "<p><b>Statement:</b> For a non-linear function $g(x)$, the expectation of the function is in general strictly unequal to the function of the expectation: $E[g(X)] \\ne g(E[X])$. If $g$ is convex ($g^{\\prime\\prime}(x) \\ge 0$), <b>Jensen's Inequality</b> guarantees:$$E[g(X)] \\ge g(E[X])$$</p><p>with equality if and only if $g$ is linear on the support of $X$ or $X$ is almost surely constant.</p><p><b>Mathematical terms:</b> Non-linear function $g$; convex function means chords lie on or above the curve; $E[X^2] \\ge (E[X])^2$ is the quadratic special case since $\\operatorname{Var}(X) = E[X^2] - (E[X])^2 \\ge 0$.</p><p><b>Reason:</b> For a strictly convex function like $g(x) = x^2$, the tangent line at the mean $\\mu = E[X]$ satisfies $g(x) \\ge g(\\mu) + g^\\prime(\\mu)(x - \\mu)$ for all $x$. Taking expectations of both sides preserves the inequality: $E[g(X)] \\ge g(\\mu) + g^\\prime(\\mu) E[X - \\mu] = g(E[X]) + 0 = g(E[X])$. Only when $g$ is affine does the tangent line coincide with $g$ everywhere, permitting $E[g(X)] = g(E[X])$.</p>",
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
    "provenance": "Ross, 10th ed., §4.4, PDF pp. 141–143, examples 4a–4c and variance discussion in §4.5.",
    "proof": {
      "idea": "Show algebraically why applying a nonlinear function before and after averaging differs.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a discrete X, LOTUS gives the average of a calculated output.",
          "m": "$$E[g(X)]=\\sum_xg(x)p_X(x)$$",
          "meaning": "Apply g separately to each input, then weight those outputs."
        },
        {
          "why": "Applying g after averaging instead gives a different expression.",
          "m": "$$g(E[X])=g\\left(\\sum_xx p_X(x)\\right)$$",
          "meaning": "There is no general distributive rule for nonlinear g."
        },
        {
          "why": "For X equally likely to be 0 or 2, compute the mean first.",
          "m": "$$E[X]=1$$",
          "meaning": "The two weights are one-half each."
        },
        {
          "why": "For g(x)=x², average the squares and compare with the squared mean.",
          "m": "$$E[X^2]=(0^2+2^2)/2=2,\\quad(E[X])^2=1$$",
          "meaning": "The explicit example disproves the proposed equality for nonlinear functions."
        },
        {
          "why": "For an affine function aX+b, linearity does give equality.",
          "m": "$$E[aX+b]=aE[X]+b$$",
          "meaning": "Constants distribute through the weighted sum, explaining exactly why this special case works."
        }
      ],
      "ends": "Nonlinear outputs must be averaged using LOTUS; affine functions alone have the general mean-commuting rule."
    }
  },
  {
    "id": "c.prob.4.7.2",
    "sec": "4.7",
    "kind": "theorem",
    "tier": "core",
    "title": "Poisson factorial moments",
    "oneLine": "The first falling-factorial moments of a Poisson variable are powers of its parameter.",
    "statement": "<p><b>Statement:</b> For $X \\sim \\operatorname{Poisson}(\\lambda)$, the $r$-th <b>falling-factorial moment</b> for any integer $r \\ge 1$ is given exactly by:$$E[(X)_r] = E[X(X-1)\\cdots(X-r+1)] = \\lambda^r$$In particular, $E[X] = \\lambda$, $E[X(X-1)] = \\lambda^2$, and $\\operatorname{Var}(X) = E[X(X-1)] + E[X] - (E[X])^2 = \\lambda^2 + \\lambda - \\lambda^2 = \\lambda$.</p><p><b>Mathematical terms:</b> $(X)_r = \\frac{X!}{(X-r)!}$ is the falling factorial of order $r$; $\\lambda$ is the Poisson parameter; $\\operatorname{Var}(X) = \\lambda$ reflects equal mean and variance.</p><p><b>Reason:</b> Apply LOTUS: $E[(X)_r] = \\sum_{k=0}^\\infty k(k-1)\\cdots(k-r+1) e^{-\\lambda} \\frac{\\lambda^k}{k!}$. For $k < r$, the factorial term is zero. For $k \\ge r$, the factorials cancel: $\\frac{k!}{(k-r)!} \\frac{\\lambda^k}{k!} = \\frac{\\lambda^k}{(k-r)!}$. Factoring out $\\lambda^r e^{-\\lambda}$ and shifting indices with $j = k - r$ yields $\\lambda^r e^{-\\lambda} \\sum_{j=0}^\\infty \\frac{\\lambda^j}{j!} = \\lambda^r e^{-\\lambda} e^\\lambda = \\lambda^r$.</p>",
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
      "idea": "Cancel falling-factorial factors in the Poisson weighted sums.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a Poisson variable, λ≥0 is its rate parameter; begin with λ>0.",
          "m": "$$P(X=k)=e^{-\\lambda}\\frac{\\lambda^k}{k!}\\quad(k=0,1,\\ldots)$$",
          "meaning": "The λ=0 case is X=0 with probability one."
        },
        {
          "why": "Use the exponential series to check the total probability.",
          "m": "$$\\sum_{k=0}^{\\infty}e^{-\\lambda}\\frac{\\lambda^k}{k!}=e^{-\\lambda}e^\\lambda=1$$",
          "meaning": "The identity e^z=Σz^k/k! can be taken as the exponential’s series definition; convergence is a calculus result."
        },
        {
          "why": "Insert the masses into the definition of the mean; k=0 contributes zero.",
          "m": "$$E[X]=e^{-\\lambda}\\sum_{k=1}^{\\infty}\\frac{k\\lambda^k}{k!}$$",
          "meaning": "Expectation weights each possible value by its probability."
        },
        {
          "why": "Cancel k against the first factor of k!, remove one λ, and put j=k−1.",
          "m": "$$E[X]=\\lambda e^{-\\lambda}\\sum_{j=0}^{\\infty}\\frac{\\lambda^j}{j!}=\\lambda$$",
          "meaning": "The remaining series is e^λ, cancelling e^(−λ)."
        },
        {
          "why": "For the product X(X−1), the first two terms are zero and two factorial factors cancel.",
          "m": "$$E[X(X-1)]=e^{-\\lambda}\\sum_{k=2}^{\\infty}\\frac{\\lambda^k}{(k-2)!}$$",
          "meaning": "The identity k!=k(k−1)(k−2)! explains the cancellation."
        },
        {
          "why": "Put j=k−2 and take out λ².",
          "m": "$$E[X(X-1)]=\\lambda^2e^{-\\lambda}\\sum_{j=0}^{\\infty}\\frac{\\lambda^j}{j!}=\\lambda^2$$",
          "meaning": "This is the same exponential-series calculation."
        },
        {
          "why": "Use the algebraic identity X²=X(X−1)+X.",
          "m": "$$E[X^2]=\\lambda^2+\\lambda$$",
          "meaning": "Linearity adds the two already computed moments."
        },
        {
          "why": "Subtract the squared mean to compute variance.",
          "m": "$$\\operatorname{Var}(X)=\\lambda^2+\\lambda-\\lambda^2=\\lambda$$",
          "meaning": "These moments agree with the constant-zero case when λ=0."
        },
        {
          "why": "For any positive integer r, the falling product is zero when X<r; for k≥r it cancels the first r factors of k!.",
          "m": "$$E[(X)_r]=e^{-\\lambda}\\sum_{k=r}^{\\infty}\\frac{\\lambda^k}{(k-r)!}$$",
          "meaning": "Here (X)_r=X(X−1)⋯(X−r+1). This is the same cancellation used for r=1 and r=2."
        },
        {
          "why": "Put j=k−r and factor out r powers of λ, leaving the exponential series.",
          "m": "$$E[(X)_r]=\\lambda^re^{-\\lambda}\\sum_{j=0}^{\\infty}\\frac{\\lambda^j}{j!}=\\lambda^r$$",
          "meaning": "The series is e^λ and cancels e^(−λ). The constant-zero Poisson case λ=0 also satisfies every positive-order factorial-moment identity."
        }
      ],
      "ends": "Every positive-integer falling-factorial moment is λ^r; in particular the mean and variance are λ."
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
    "statement": "<p><b>Statement:</b> When evaluating probabilities for discrete integer-valued random variables using the CDF $F(x) = P(X \\le x)$, strict and non-strict inequalities must be converted precisely using the continuity points and integers:<br>(1) $P(X \\ge k) = 1 - P(X \\le k - 1) = 1 - F(k - 1)$.<br>(2) $P(X > k) = 1 - P(X \\le k) = 1 - F(k)$.<br>(3) $P(j \\le X \\le k) = F(k) - F(j - 1)$ for integers $j \\le k$.<br>(4) $P(j < X \\le k) = F(k) - F(j)$.</p><p><b>Mathematical terms:</b> $k, j \\in \\mathbb{Z}$ are integer thresholds; $F(k) = P(X \\le k)$ is the CDF evaluated at integer $k$; $F(k-1)$ subtracts all probability mass strictly below $k$.</p><p><b>Reason:</b> For integer-valued random variables, the open condition $X < k$ is logically identical to the non-strict condition $X \\le k - 1$, because there are no possible values strictly between $k-1$ and $k$. Therefore, the complement of $\\{X \\ge k\\}$ is $\\{X < k\\} = \\{X \\le k - 1\\}$, so $P(X \\ge k) = 1 - F(k-1)$. Similarly, $P(j \\le X \\le k) = P(X \\le k) - P(X \\le j - 1) = F(k) - F(j-1)$.</p>",
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
    "provenance": "Ross, 10th ed., §4.10, PDF pp. 171–174.",
    "proof": {
      "idea": "Choose CDF or left-limit endpoints to match precisely the requested interval.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Define F(t)=P(X≤t) and F(t^-)=P(X<t).",
          "m": "$$P(X=t)=F(t)-F(t^-)$$",
          "meaning": "The left-limit formula follows by increasing cutoffs below t toward t."
        },
        {
          "why": "To include the right endpoint b and exclude the left endpoint a, subtract values through a.",
          "m": "$$P(a<X\\le b)=F(b)-F(a)$$",
          "meaning": "The subtraction removes the mass at a along with all lower values."
        },
        {
          "why": "To include a, subtract only the values strictly below a.",
          "m": "$$P(a\\le X\\le b)=F(b)-F(a^-)$$",
          "meaning": "A left limit on the lower cutoff retains its atom."
        },
        {
          "why": "To exclude b, use its strict-below accumulation.",
          "m": "$$P(a<X<b)=F(b^-)-F(a)$$",
          "meaning": "The upper left limit removes the atom at b."
        },
        {
          "why": "Exclude b while including a by using both left limits.",
          "m": "$$P(a\\le X<b)=F(b^-)-F(a^-)$$",
          "meaning": "For a density distribution, all point masses vanish and these interval probabilities coincide."
        }
      ],
      "ends": "A CDF includes its endpoint; a left limit excludes it. Choose each endpoint to match the event wording."
    }
  },
  {
    "id": "c.prob.4.2.3",
    "sec": "4.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Discrete uniform law on consecutive integers",
    "oneLine": "If each integer in a fixed consecutive range is equally likely, the mean is the midpoint and the variance depends only on how many values there are.",
    "statement": "<p><b>Statement:</b> A random variable $X$ has a <b>Discrete Uniform distribution</b> on consecutive integers $\\{a, a+1, \\ldots, b\\}$ with $N = b - a + 1$ possible values if its PMF is:$$P(X = k) = \\frac{1}{b - a + 1} = \\frac{1}{N}, \\quad k \\in \\{a, \\ldots, b\\}$$Its mean is the midpoint $E[X] = \\frac{a + b}{2}$ and its variance is $\\operatorname{Var}(X) = \\frac{(b - a + 1)^2 - 1}{12} = \\frac{N^2 - 1}{12}$.</p><p><b>Mathematical terms:</b> $a$ is the minimum value; $b$ is the maximum value; $N = b - a + 1$ is the total count of consecutive integers; $\\frac{N^2 - 1}{12}$ is the discrete uniform variance formula.</p><p><b>Reason:</b> Normalization across $N$ equally likely points forces $p(k) = 1/N$. By symmetry around the center, $E[X] = \\frac{1}{N} \\sum_{k=a}^b k = \\frac{1}{N} \\frac{N(a+b)}{2} = \\frac{a+b}{2}$. Shifting $X$ to $\\{1, \\ldots, N\\}$ does not alter variance. Using the sum of squares formula $\\sum_{k=1}^N k^2 = \\frac{N(N+1)(2N+1)}{6}$, the second moment is $E[X^2] = \\frac{(N+1)(2N+1)}{6}$. Subtracting $(E[X])^2 = (\\frac{N+1}{2})^2$ yields $\\frac{(N+1)(2N+1)}{6} - \\frac{(N+1)^2}{4} = \\frac{(N+1)(4N+2 - 3N - 3)}{12} = \\frac{(N+1)(N-1)}{12} = \\frac{N^2 - 1}{12}$.</p>",
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
      "idea": "Derive the sum-of-squares formula by telescoping cubes, then compute the uniform moments.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let X_0 be uniform on 0 through N−1, with N≥1; each value has probability 1/N.",
          "m": "$$M=N-1,\\quad P(X_0=k)=1/N\\ (0\\le k\\le M)$$",
          "meaning": "First derive the two ordinary finite sums we need."
        },
        {
          "why": "Write 0+1+⋯+M forwards and backwards, then add the lists term by term.",
          "m": "$$2\\sum_{k=0}^M k=(M+1)M,\\quad\\sum_{k=0}^M k=\\frac{M(M+1)}2$$",
          "meaning": "There are M+1 pairs, each equal to M."
        },
        {
          "why": "Expand consecutive cubes and sum the differences.",
          "m": "$$(k+1)^3-k^3=3k^2+3k+1$$",
          "meaning": "This follows from the binomial expansion of (k+1)³."
        },
        {
          "why": "Every intermediate cube cancels in the sum from k=0 through M.",
          "m": "$$(M+1)^3=3\\sum_{k=0}^Mk^2+3\\frac{M(M+1)}2+(M+1)$$",
          "meaning": "This is a telescoping sum: the right endpoint cube remains."
        },
        {
          "why": "Solve for the sum of squares and factor the result.",
          "m": "$$\\sum_{k=0}^Mk^2=\\frac{M(M+1)(2M+1)}6$$",
          "meaning": "Subtract the last two terms and divide by 3."
        },
        {
          "why": "Divide both finite sums by N=M+1 to obtain weighted averages.",
          "m": "$$E[X_0]=\\frac{N-1}2,\\quad E[X_0^2]=\\frac{(N-1)(2N-1)}6$$",
          "meaning": "Equal mass 1/N makes the weighted average the ordinary list average."
        },
        {
          "why": "Put the variance terms over denominator 12.",
          "m": "$$\\operatorname{Var}(X_0)=\\frac{2(N-1)(2N-1)-3(N-1)^2}{12}=\\frac{N^2-1}{12}$$",
          "meaning": "Factor N−1; the remaining bracket is 4N−2−3N+3=N+1."
        },
        {
          "why": "For a uniform law on a through b, let N=b−a+1 and X=a+X_0.",
          "m": "$$E[X]=\\frac{a+b}2,\\quad\\operatorname{Var}(X)=\\frac{(b-a+1)^2-1}{12}$$",
          "meaning": "Adding a shifts the mean by a but leaves variance unchanged."
        }
      ],
      "ends": "The discrete uniform variance follows from elementary finite sums; it differs from the continuous uniform variance."
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
    "statement": "<p><b>Statement:</b> For a discrete uniform random variable on $N = 4$ consecutive values, such as $X \\in \\{1, 2, 3, 4\\}$, the PMF is $P(X = k) = \\frac{1}{4}$ for each $k \\in \\{1, 2, 3, 4\\}$. The mean is $E[X] = \\frac{1+4}{2} = 2.5$, the second moment is $E[X^2] = \\frac{1+4+9+16}{4} = \\frac{30}{4} = 7.5$, and the variance is $\\operatorname{Var}(X) = 7.5 - (2.5)^2 = 7.5 - 6.25 = 1.25 = \\frac{4^2 - 1}{12} = \\frac{15}{12}$.</p><p><b>Mathematical terms:</b> $N = 4$; support $\\{1, 2, 3, 4\\}$; uniform probability $p = 1/4 = 0.25$; mean $\\mu = 2.5$; variance $\\sigma^2 = 1.25 = 5/4$.</p><p><b>Reason:</b> Direct arithmetic evaluation of LOTUS sums: $E[X] = \\frac{1}{4}(1 + 2 + 3 + 4) = \\frac{10}{4} = 2.5$. $E[X^2] = \\frac{1}{4}(1^2 + 2^2 + 3^2 + 4^2) = \\frac{30}{4} = 7.5$. The variance formula $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$ gives $7.5 - 6.25 = 1.25$, matching the general formula $\\frac{N^2 - 1}{12} = \\frac{16 - 1}{12} = \\frac{15}{12} = 1.25$ exactly.</p>",
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
    "provenance": "Original worked example; formulas align with the discrete-uniform supplement added for the GATE 2027 DA syllabus.",
    "proof": {
      "idea": "Evaluate the four-value uniform moments directly as a check on the general formula.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let X be uniform on a,a+1,a+2,a+3 and shift to X_0=X−a.",
          "m": "$$P(X_0=k)=1/4\\quad(k=0,1,2,3)$$",
          "meaning": "All four probabilities are equal and sum to 1."
        },
        {
          "why": "Compute the weighted mean of the shifted values.",
          "m": "$$E[X_0]=(0+1+2+3)/4=3/2$$",
          "meaning": "Equal weights make this an ordinary list average."
        },
        {
          "why": "Compute the weighted second moment.",
          "m": "$$E[X_0^2]=(0+1+4+9)/4=7/2$$",
          "meaning": "Square each value before adding."
        },
        {
          "why": "Subtract the squared mean.",
          "m": "$$\\operatorname{Var}(X_0)=7/2-(3/2)^2=14/4-9/4=5/4$$",
          "meaning": "Putting both terms over denominator 4 makes the subtraction explicit."
        },
        {
          "why": "Undo the shift and compare with the N=4 formula.",
          "m": "$$E[X]=a+3/2,\\quad\\operatorname{Var}(X)=5/4=(4^2-1)/12$$",
          "meaning": "A constant shift leaves the variance unchanged."
        }
      ],
      "ends": "The four-value calculation verifies the general discrete-uniform mean and variance without using a sum formula."
    }
  }
]
);
