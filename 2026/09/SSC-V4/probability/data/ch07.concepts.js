var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
CONCEPTS.push(...
[
  {
    "id": "c.prob.7.1.1",
    "sec": "7.1",
    "kind": "theorem",
    "tier": "core",
    "title": "Bounds and order preservation for expectation",
    "oneLine": "The average stays between the smallest and largest possible values.",
    "statement": "<p><b>Statement:</b> The expectation operator preserves inequalities and bounds almost surely:<br>(1) If $a \\le X \\le b$ with probability 1, then $a \\le E[X] \\le b$.<br>(2) <b>Monotonicity:</b> If $X \\le Y$ with probability 1 and both expectations exist, then $E[X] \\le E[Y]$.<br>(3) <b>Triangle Inequality:</b> $|E[X]| \\le E[|X|]$.</p><p><b>Mathematical terms:</b> Almost surely (with probability 1) means $P(a \\le X \\le b) = 1$; $E[X]$ is the expectation; monotonicity means order is preserved under integration.</p><p><b>Reason:</b> (1) If $X \\ge a$ almost surely, then $X - a \\ge 0$, so $E[X - a] = \\int (x - a) f(x) dx \\ge 0$ because the integrand is non-negative everywhere, implying $E[X] \\ge a$. Applying the same logic to $b - X \\ge 0$ gives $E[X] \\le b$. (2) If $X \\le Y$, then $Z = Y - X \\ge 0$ almost surely, so $E[Y - X] \\ge 0 \\iff E[Y] \\ge E[X]$. (3) Since $-|X| \\le X \\le |X|$ holds pointwise, applying monotonicity yields $-E[|X|] \\le E[X] \\le E[|X|]$, which is equivalent to $|E[X]| \\le E[|X|]$.</p>",
    "intuition": "If every bus trip takes between 10 and 30 minutes, the average trip cannot be 8 or 40 minutes. An expectation is just an average that gives more weight to more likely outcomes.",
    "needs": [],
    "traps": [
      "The inequalities need only hold except on a set of probability zero, not at outcomes of probability zero. Integrability is needed to make the expectations finite."
    ],
    "cards": [
      {
        "q": "What bounds apply if $a\\le X\\le b$ except on a set of probability zero?",
        "a": "$a\\le E[X]\\le b$, provided X has a finite absolute average.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.1, opening discussion, PDF p. 309.",
    "proof": {
      "idea": "Compare nonnegative differences before averaging.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume X≤Y except on a set of probability zero, and both have finite absolute means.",
          "m": "$$D=Y-X\\ge0\\quad\\text{almost surely}$$",
          "meaning": "Almost surely means the inequality can fail only on outcomes of probability zero."
        },
        {
          "why": "A nonnegative value times a nonnegative probability is nonnegative.",
          "m": "$$E[D]\\ge0$$",
          "meaning": "The same is true for an integral of a nonnegative quantity; zero-probability exceptions contribute no average."
        },
        {
          "why": "Linearity turns the difference’s average into a difference of averages.",
          "m": "$$E[D]=E[Y]-E[X]$$",
          "meaning": "Finiteness prevents undefined subtraction of infinite quantities."
        },
        {
          "why": "Add E[X] to the inequality E[Y]−E[X]≥0.",
          "m": "$$E[X]\\le E[Y]$$",
          "meaning": "Taking expectations therefore preserves an almost-sure ordering."
        },
        {
          "why": "If a≤X≤b, apply that comparison twice.",
          "m": "$$E[a]\\le E[X]\\le E[b]$$",
          "meaning": "Treat a and b as constant random variables."
        },
        {
          "why": "A constant averages to itself because probability totals 1.",
          "m": "$$a\\le E[X]\\le b$$",
          "meaning": "If all observations lie in an interval, their weighted average cannot lie outside it."
        }
      ],
      "ends": "Order preservation follows from nonnegative weighted averages, not from an assumption of independence."
    }
  },
  {
    "id": "c.prob.7.2.1",
    "sec": "7.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Expectation of a sum: linearity",
    "oneLine": "Average the parts, then add them to get the average total.",
    "statement": "<p><b>Statement:</b> <b>Linearity of Expectation:</b> For any collection of random variables $X_1, \\ldots, X_n$ with finite expectations and any constants $a_1, \\ldots, a_n, c \\in \\mathbb{R}$:$$E\\left[\\sum_{i=1}^n a_i X_i + c\\right] = \\sum_{i=1}^n a_i E[X_i] + c$$This identity holds universally, without requiring independence among $X_1, \\ldots, X_n$.</p><p><b>Mathematical terms:</b> Linear operator; $a_i, c$ are real constants; $\\sum a_i X_i$ is a linear combination of random variables.</p><p><b>Reason:</b> Expectation is integration against the underlying probability measure $P$: $E[\\sum a_i X_i] = \\int_\\Omega (\\sum a_i X_i(\\omega)) dP(\\omega)$. By the fundamental linearity of the integral with respect to measurable functions on a measure space, the integral of a finite linear combination is identically the linear combination of the integrals: $\\sum a_i \\int_\\Omega X_i(\\omega) dP(\\omega) = \\sum a_i E[X_i]$. Because this property relies strictly on the algebraic linearity of real addition on each outcome $\\omega$, no independence assumption is ever needed.</p>",
    "intuition": "If a trip has a walking part and a bus part, average total time is average walking time plus average bus time. This remains true even if a missed connection makes the two parts related.",
    "needs": [],
    "traps": [
      "Do not impose independence for expectation of a sum. Independence is needed for many variance formulas, not linearity."
    ],
    "cards": [
      {
        "q": "State linearity of expectation and its independence requirement.",
        "a": "For $X_i$ with finite absolute averages, $E[\\sum_i a_iX_i]=\\sum_i a_iE[X_i]$; no independence assumption is needed.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.2, Proposition 2.1 and Eq. (2.2), PDF pp. 310–311.",
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
    }
  },
  {
    "id": "c.prob.7.2.2",
    "sec": "7.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Expectation of a function of a pair",
    "oneLine": "Average each possible pair using the chance that the pair occurs.",
    "statement": "<p><b>Statement:</b> For continuous random variables $(X, Y)$ with joint density $f_{X,Y}(x, y)$ and any real-valued function $g: \\mathbb{R}^2 \\to \\mathbb{R}$, 2D LOTUS gives:$$E[g(X, Y)] = \\int_{-\\infty}^\\infty \\int_{-\\infty}^\\infty g(x, y) f_{X,Y}(x, y) \\, dx \\, dy$$provided $\\iint |g(x, y)| f_{X,Y}(x, y) dx dy < \\infty$. For discrete $(X, Y)$, $E[g(X, Y)] = \\sum_x \\sum_y g(x, y) p_{X,Y}(x, y)$.</p><p><b>Mathematical terms:</b> $g(X, Y)$ is a joint transformation; $f_{X,Y}(x, y)$ is the joint density; $p_{X,Y}(x, y)$ is the joint PMF; 2D LOTUS evaluates the expectation without deriving the 1D distribution of $g(X, Y)$.</p><p><b>Reason:</b> Partition $\\mathbb{R}^2$ into a grid of small rectangles $\\Delta x \\times \\Delta y$, where the probability mass of the cell at $(x_i, y_j)$ is approximately $f_{X,Y}(x_i, y_j)\\Delta x \\Delta y$. By discrete LOTUS on fibers $g^{-1}(z)$, the expected value is approximated by the 2D Riemann sum $\\sum \\sum g(x_i, y_j) f_{X,Y}(x_i, y_j)\\Delta x \\Delta y$. In the continuum limit $\\Delta x, \\Delta y \\to 0$, this sum converges to the double integral by the dominated convergence theorem.</p>",
    "intuition": "To average “height times weight,” it matters which heights belong with which weights. Two lists of separate averages do not tell you those pairings.",
    "needs": [
      "c.prob.7.2.1"
    ],
    "traps": [
      "Do not replace $f(x,y)$ by $f_X(x)f_Y(y)$ unless X and Y are independent."
    ],
    "cards": [
      {
        "q": "How is $E[g(X,Y)]$ computed in the continuous case?",
        "a": "$\\int_{-\\infty}^{\\infty}\\int_{-\\infty}^{\\infty}g(x,y)f_{X,Y}(x,y)\\,dx\\,dy$, provided it exists.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.2, Proposition 2.1, PDF p. 310.",
    "proof": {
      "idea": "Average whole pairs; keep their joint probabilities rather than inventing independent weights.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For discrete variables, the pair (x,y) has probability p(x,y).",
          "m": "$$p(x,y)=P(X=x,Y=y)$$",
          "meaning": "This is the joint mass; it need not equal the product of marginals."
        },
        {
          "why": "Let T=g(X,Y) be the output to average.",
          "m": "$$E[T]=\\sum_t tP(T=t)$$",
          "meaning": "Use nonnegative output or finite E[|T|] so regrouping is permitted."
        },
        {
          "why": "An output t collects all pairs mapped to t.",
          "m": "$$P(T=t)=\\sum_{(x,y):g(x,y)=t}p(x,y)$$",
          "meaning": "The pair events are disjoint."
        },
        {
          "why": "Insert this expression and replace t by its equal value g(x,y).",
          "m": "$$E[T]=\\sum_t\\sum_{g(x,y)=t}g(x,y)p(x,y)$$",
          "meaning": "Every pair belongs to exactly one output group."
        },
        {
          "why": "Remove the grouping to obtain the pairwise weighted average.",
          "m": "$$E[g(X,Y)]=\\sum_x\\sum_yg(x,y)p(x,y)$$",
          "meaning": "There is no independence requirement."
        },
        {
          "why": "For a joint density and g≥0, represent the output by its threshold layers.",
          "m": "$$g(x,y)=\\int_0^{\\infty}\\mathbf1_{\\{g(x,y)>u\\}}du$$",
          "meaning": "The inner unit-height area has length g(x,y)."
        },
        {
          "why": "Average those layers and exchange nonnegative integrals by Tonelli’s theorem.",
          "m": "$$E[g(X,Y)]=\\iint g(x,y)f_{X,Y}(x,y)dx\\,dy$$",
          "meaning": "For signed integrable g, apply this to its positive and negative parts and subtract their finite averages."
        }
      ],
      "ends": "LOTUS for a pair uses the joint law, so dependence is retained automatically."
    }
  },
  {
    "id": "c.prob.7.3.1",
    "sec": "7.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Indicator method for the number of events",
    "oneLine": "A yes-or-no switch turns each event into a number you can add.",
    "statement": "<p><b>Statement:</b> For any collection of events $A_1, \\ldots, A_n$ in a sample space $S$, let $I_i = \\mathbf{1}_{A_i}$ be the indicator variable of event $A_i$ ($I_i = 1$ if $A_i$ occurs, $0$ otherwise). The total number of events that occur is $X = \\sum_{i=1}^n I_i$, and its expectation is:$$E[X] = \\sum_{i=1}^n E[I_i] = \\sum_{i=1}^n P(A_i)$$</p><p>If the events have a common marginal probability $P(A_i) = p$, then $E[X] = np$, regardless of any dependence structure between the events.</p><p><b>Mathematical terms:</b> $I_i = \\mathbf{1}_{A_i}$ is an indicator random variable; $X = \\sum I_i$ is the count of realized events; $E[I_i] = P(A_i)$ converts expectation to event probability.</p><p><b>Reason:</b> On every elementary outcome $\\omega \\in S$, $X(\\omega) = \\sum_{i=1}^n I_i(\\omega)$ counts exactly how many events $A_i$ contain $\\omega$. Because expectation is linear, $E[X] = E[\\sum I_i] = \\sum E[I_i]$. For each indicator, $E[I_i] = 1 \\cdot P(A_i) + 0 \\cdot P(A_i^c) = P(A_i)$. Substituting this gives $\\sum P(A_i)$. This method solves complex counting problems (e.g. coupon collector, matching problems) without requiring the joint distribution of the count $X$.</p>",
    "intuition": "To find the average number of people who arrive, give each person a switch that is 1 if they arrive and 0 otherwise. Add the switches; the average count is the sum of arrival chances.",
    "needs": [
      "c.prob.7.2.1"
    ],
    "traps": [
      "The indicators need not be independent for the expectation formula. Independence matters for joint probabilities and variances."
    ],
    "cards": [
      {
        "q": "If X counts which of $A_1,\\ldots,A_n$ occur, what is $E[X]$?",
        "a": "$E[X]=\\sum_iP(A_i)$, by writing $X=\\sum_i1_{A_i}$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.3, Eq. (3.1), PDF p. 324.",
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
    }
  },
  {
    "id": "c.prob.7.3.2",
    "sec": "7.3",
    "kind": "theorem",
    "tier": "extra",
    "title": "Factorial moments of an event count",
    "oneLine": "Count successful pairs or groups to find higher moments of a count.",
    "statement": "<p><b>Statement:</b> For an event count $X = \\sum_{i=1}^n \\mathbf{1}_{A_i}$, the <b>falling-factorial moments</b> count joint occurrences of subsets of events:$$E[(X)_k] = E[X(X-1)\\cdots(X-k+1)] = k! \\sum_{1 \\le i_1 < i_2 < \\cdots < i_k \\le n} P(A_{i_1} \\cap A_{i_2} \\cap \\cdots \\cap A_{i_k})$$In particular, for $k = 2$, $E[X(X-1)] = 2 \\sum_{i < j} P(A_i \\cap A_j)$, which determines variance via $\\operatorname{Var}(X) = E[X(X-1)] + E[X] - (E[X])^2$.</p><p><b>Mathematical terms:</b> $(X)_k = \\frac{X!}{(X-k)!}$ is the $k$-th falling factorial; $k! \\sum P(\\bigcap A_{i_r})$ sums over all ordered $k$-tuples of distinct events; $P(A_i \\cap A_j)$ is the joint pairwise probability.</p><p><b>Reason:</b> Expand the product $(X)_2 = X(X-1) = (\\sum I_i)(\\sum I_j - 1) = \\sum_i \\sum_{j \\ne i} I_i I_j$. Note that $I_i I_j = \\mathbf{1}_{A_i \\cap A_j}$, so $E[I_i I_j] = P(A_i \\cap A_j)$. Summing over all $i \\ne j$ gives $\\sum_{i \\ne j} P(A_i \\cap A_j) = 2 \\sum_{i < j} P(A_i \\cap A_j)$. By induction, $E[(X)_k] = \\sum_{i_1, \\ldots, i_k \\text{ distinct}} E[I_{i_1}\\cdots I_{i_k}] = k! \\sum_{i_1 < \\cdots < i_k} P(\\bigcap_{r=1}^k A_{i_r})$.</p>",
    "intuition": "If X events happen, $X(X-1)$ counts ordered pairs among them. For example, when 3 people arrive, there are 6 ordered pairs of arriving people.",
    "needs": [
      "c.prob.7.3.1"
    ],
    "traps": [
      "Do not replace joint probabilities by products unless independence has been established. For a binomial count, independence makes the intersections factor."
    ],
    "cards": [
      {
        "q": "State the second-moment identity for a count X of events.",
        "a": "$E[X^2]=E[X]+2\\sum_{i<j}P(A_i\\cap A_j)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.3, Eqs. (3.2)–(3.4), PDF pp. 324–325.",
    "proof": {
      "idea": "Count ordered groups of successful events with products of flags.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let I_i be the 0-or-1 flag of A_i and X the number of occurring events.",
          "m": "$$X=\\sum_{i=1}^nI_i$$",
          "meaning": "Fix an integer k with 1≤k≤n."
        },
        {
          "why": "If X events occurred, choose an ordered list of k different occurring events.",
          "m": "$$(X)_k=X(X-1)\\cdots(X-k+1)$$",
          "meaning": "There are X choices for the first, X−1 for the second, and so on; the count is zero when X<k."
        },
        {
          "why": "First choosing an unordered group and then ordering it gives the same count.",
          "m": "$$(X)_k=k!\\binom Xk$$",
          "meaning": "Each chosen group has exactly k! orders."
        },
        {
          "why": "For one fixed k-index group, all its events occurred exactly when every flag is 1.",
          "m": "$$I_{i_1}\\cdots I_{i_k}=\\mathbf1_{A_{i_1}\\cap\\cdots\\cap A_{i_k}}$$",
          "meaning": "A product of 0-or-1 values is 1 precisely when no factor is zero."
        },
        {
          "why": "Add over all increasing index lists to count the successful groups.",
          "m": "$$\\binom Xk=\\sum_{i_1<\\cdots<i_k}I_{i_1}\\cdots I_{i_k}$$",
          "meaning": "Each unordered group has one increasing list of indices."
        },
        {
          "why": "Multiply by k!, then take expectations term by term.",
          "m": "$$E[(X)_k]=k!\\sum_{i_1<\\cdots<i_k}P(A_{i_1}\\cap\\cdots\\cap A_{i_k})$$",
          "meaning": "The mean of each product flag is the joint probability of its intersection."
        },
        {
          "why": "For k=2, use X²=X(X−1)+X.",
          "m": "$$E[X^2]=E[X]+2\\sum_{i<j}P(A_i\\cap A_j)$$",
          "meaning": "Subtract E[X]² to obtain variance. Independence is needed only if replacing joint probabilities by products."
        }
      ],
      "ends": "Factorial moments count ordered selections of successful events and therefore depend on their intersection probabilities."
    }
  },
  {
    "id": "c.prob.7.4.1",
    "sec": "7.4",
    "kind": "definition",
    "tier": "core",
    "title": "Covariance and correlation",
    "oneLine": "Covariance measures whether two quantities tend to be above their averages together.",
    "statement": "<p><b>Statement:</b> The <b>covariance</b> between random variables $X$ and $Y$ measures their joint linear variability:$$\\operatorname{Cov}(X, Y) = E[(X - \\mu_X)(Y - \\mu_Y)] = E[XY] - E[X]E[Y]$$The <b>Pearson correlation coefficient</b> is the dimensionless normalized covariance:$$\\rho(X, Y) = \\frac{\\operatorname{Cov}(X, Y)}{\\operatorname{SD}(X) \\operatorname{SD}(Y)} \\in [-1, 1]$$where $|\\rho| = 1$ if and only if $Y = aX + b$ almost surely for some constants $a \\ne 0, b \\in \\mathbb{R}$.</p><p><b>Mathematical terms:</b> $\\operatorname{Cov}(X, Y)$ is covariance; $\\rho$ is the correlation coefficient; $\\operatorname{Cov}(X, X) = \\operatorname{Var}(X)$; $|\\rho| \\le 1$ is Cauchy-Schwarz inequality for random variables.</p><p><b>Reason:</b> Expanding $E[(X - \\mu_X)(Y - \\mu_Y)] = E[XY - \\mu_X Y - \\mu_Y X + \\mu_X \\mu_Y] = E[XY] - \\mu_X\\mu_Y - \\mu_Y\\mu_X + \\mu_X\\mu_Y = E[XY] - E[X]E[Y]$. For any $t \\in \\mathbb{R}$, $E[((X-\\mu_X)t + (Y-\\mu_Y))^2] = t^2 \\sigma_X^2 + 2t \\operatorname{Cov}(X, Y) + \\sigma_Y^2 \\ge 0$. Because this quadratic polynomial in $t$ is non-negative everywhere, its discriminant must be non-positive: $\\Delta = 4\\operatorname{Cov}(X, Y)^2 - 4\\sigma_X^2\\sigma_Y^2 \\le 0 \\iff |\\operatorname{Cov}(X, Y)| \\le \\sigma_X \\sigma_Y$, proving $|\\rho| \\le 1$. Equality occurs when the squared deviation is zero almost surely, forcing an exact linear relationship.</p>",
    "intuition": "Covariance is positive when two quantities tend to rise above their own averages together, and negative when one rises as the other falls. Correlation is the same pattern scaled so units like dollars or centimeters do not matter.",
    "needs": [
      "c.prob.7.2.2"
    ],
    "traps": [
      "Uncorrelated does not generally mean independent; nonlinear dependence can have zero covariance. Correlation is undefined if either variance is zero."
    ],
    "cards": [
      {
        "q": "Define covariance and correlation.",
        "a": "Cov$(X,Y)=E[XY]-E[X]E[Y]$; $\\rho=\\operatorname{Cov}(X,Y)/(\\sigma_X\\sigma_Y)$ when both standard deviations are nonzero.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.4, definition and Eq. (4.2), PDF pp. 331, 334.",
    "proof": {
      "idea": "Expand covariance and derive the correlation bound from a nonnegative square.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let μ_X=E[X], μ_Y=E[Y], U=X−μ_X and V=Y−μ_Y, with finite second moments.",
          "m": "$$\\operatorname{Cov}(X,Y)=E[UV]$$",
          "meaning": "This defines covariance as the average product of deviations."
        },
        {
          "why": "Expand the product and average each term.",
          "m": "$$E[UV]=E[XY]-\\mu_XE[Y]-\\mu_YE[X]+\\mu_X\\mu_Y=E[XY]-\\mu_X\\mu_Y$$",
          "meaning": "The two negative mean products and one positive product leave one negative product."
        },
        {
          "why": "For independent inputs the joint average factors.",
          "m": "$$E[XY]=E[X]E[Y]\\ \\Longrightarrow\\ \\operatorname{Cov}(X,Y)=0$$",
          "meaning": "This uses the product joint law; its converse does not generally hold."
        },
        {
          "why": "Suppose both variances are positive, and standardize the centered variables.",
          "m": "$$A=U/\\sigma_X,\\quad B=V/\\sigma_Y,\\quad E[A^2]=E[B^2]=1,\\quad\\rho=E[AB]$$",
          "meaning": "Correlation removes measurement units by dividing by the two standard deviations."
        },
        {
          "why": "A square is nonnegative for every real c.",
          "m": "$$0\\le E[(A-cB)^2]=1-2c\\rho+c^2$$",
          "meaning": "Expand and use the standardized second moments."
        },
        {
          "why": "Choose c=ρ and simplify.",
          "m": "$$0\\le1-\\rho^2\\ \\Longrightarrow\\ -1\\le\\rho\\le1$$",
          "meaning": "This derives the correlation bound without quoting Cauchy–Schwarz."
        },
        {
          "why": "For a zero-covariance dependent example, take X uniform on −1,0,1 and Y=X².",
          "m": "$$E[X]=0,\\quad E[XY]=E[X^3]=0,\\quad\\operatorname{Cov}(X,Y)=0$$",
          "meaning": "Y is determined by X, so dependence remains. Zero covariance describes only the centered product average."
        }
      ],
      "ends": "Covariance is a centered product average; correlation is its unit-free version with magnitude at most 1 when both standard deviations are positive."
    }
  },
  {
    "id": "c.prob.7.4.2",
    "sec": "7.4",
    "kind": "theorem",
    "tier": "core",
    "title": "Variance of a sum",
    "oneLine": "The spread of a total includes how its parts move together.",
    "statement": "<p><b>Statement:</b> Bilinearity of covariance and variance of general linear combinations:<br>(1) <b>Bilinearity:</b> $\\operatorname{Cov}(\\sum_{i=1}^m a_i X_i, \\, \\sum_{j=1}^n b_j Y_j) = \\sum_{i=1}^m \\sum_{j=1}^n a_i b_j \\operatorname{Cov}(X_i, Y_j)$.<br>(2) <b>Variance of a linear combination:</b>$$\\operatorname{Var}\\left(\\sum_{i=1}^n a_i X_i\\right) = \\sum_{i=1}^n a_i^2 \\operatorname{Var}(X_i) + 2 \\sum_{1 \\le i < j \\le n} a_i a_j \\operatorname{Cov}(X_i, X_j)$$</p><p>In particular, $\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) + 2\\operatorname{Cov}(X, Y)$ and $\\operatorname{Var}(X - Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) - 2\\operatorname{Cov}(X, Y)$.</p><p><b>Mathematical terms:</b> Bilinear form; symmetric covariance matrix $\\boldsymbol{\\Sigma} = [\\operatorname{Cov}(X_i, X_j)]$; quadratic form $\\mathbf{a}^T \\boldsymbol{\\Sigma} \\mathbf{a}$.</p><p><b>Reason:</b> Expand $\\operatorname{Var}(\\sum a_i X_i) = \\operatorname{Cov}(\\sum a_i X_i, \\sum a_j X_j)$. By linearity in both arguments, the double sum expands into $\\sum_{i=1}^n \\sum_{j=1}^n a_i a_j \\operatorname{Cov}(X_i, X_j)$. Separating the diagonal terms $i = j$ (where $\\operatorname{Cov}(X_i, X_i) = \\operatorname{Var}(X_i)$) from the off-diagonal terms $i \\ne j$, and using the symmetry $\\operatorname{Cov}(X_i, X_j) = \\operatorname{Cov}(X_j, X_i)$, pairs the symmetric off-diagonal terms to yield $2 \\sum_{i < j} a_i a_j \\operatorname{Cov}(X_i, X_j)$.</p>",
    "intuition": "When two waiting times are added, their separate spreads are not always the whole story. If long waits tend to happen together, covariance adds extra spread; if one tends to offset the other, it subtracts spread.",
    "needs": [
      "c.prob.7.4.1"
    ],
    "traps": [
      "For dependent variables, do not add variances alone. Pairwise independence is sufficient but stronger than the needed pairwise zero covariance."
    ],
    "cards": [
      {
        "q": "When does variance of a sum equal the sum of variances?",
        "a": "When all distinct pairs have zero covariance; mutual independence is a sufficient condition.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.4, Proposition 4.2(iv) and Eq. (4.1), PDF pp. 331–332.",
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
    }
  },
  {
    "id": "c.prob.7.5.1",
    "sec": "7.5",
    "kind": "definition",
    "tier": "core",
    "title": "Conditional expectation given a random variable",
    "oneLine": "A conditional mean averages only within the group described by the information.",
    "statement": "<p><b>Statement:</b> The <b>conditional expectation</b> of $X$ given $Y$, denoted $E[X \\mid Y]$, is a random variable that is a measurable function of $Y$: $E[X \\mid Y] = g(Y)$, where the function $g(y)$ evaluates the conditional mean $g(y) = E[X \\mid Y = y]$. For discrete variables, $g(y) = \\sum_x x \\, p_{X \\mid Y}(x \\mid y)$; for continuous variables, $g(y) = \\int_{-\\infty}^\\infty x f_{X \\mid Y}(x \\mid y) \\, dx$.</p><p><b>Mathematical terms:</b> $E[X \\mid Y = y]$ is a fixed real number; $E[X \\mid Y]$ is a random variable; $g(Y)$ inherits its randomness entirely from the realized value of $Y$.</p><p><b>Reason:</b> Before $Y$ is observed, the predicted conditional average of $X$ is unknown and varies depending on which outcome $\\omega$ occurs through $Y(\\omega)$. Therefore, $E[X \\mid Y]$ is itself a random variable defined on $\\Omega$ taking the specific numerical value $E[X \\mid Y = y]$ whenever the trial yields $Y(\\omega) = y$. It represents the best available forecast of $X$ based on the information provided by $Y$.</p>",
    "intuition": "After seeing how many hours it rained, your best average guess for traffic time can change. That updated average is the conditional expectation: average after using the new information.",
    "needs": [
      "c.prob.6.4.1"
    ],
    "traps": [
      "For continuous Y, conditioning on $Y=y$ uses a conditional density, not division by the probability of a zero-probability point event."
    ],
    "cards": [
      {
        "q": "What does $E[X\\mid Y]$ represent?",
        "a": "The random variable whose value at Y=y is the conditional mean of X under the conditional law given Y=y.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.5.1, definitions, PDF pp. 336–337.",
    "proof": {
      "idea": "Build a function of the observed grouping value by calculating its within-group mean.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For discrete Y=y with positive probability, obtain X’s conditional masses.",
          "m": "$$P(X=x\\mid Y=y)=\\frac{P(X=x,Y=y)}{P(Y=y)}$$",
          "meaning": "These normalized weights sum to 1 in that group."
        },
        {
          "why": "Average X using these within-group weights.",
          "m": "$$m(y)=E[X\\mid Y=y]=\\sum_xxP(X=x\\mid Y=y)$$",
          "meaning": "This defines the conditional mean when its required absolute average is finite."
        },
        {
          "why": "Repeat the calculation for every positive-probability y group.",
          "m": "$$m:Y\\text{ values}\\to\\mathbb R$$",
          "meaning": "This produces a lookup function, not a single universal number."
        },
        {
          "why": "Evaluate the lookup at the actually observed random Y.",
          "m": "$$E[X\\mid Y]=m(Y)$$",
          "meaning": "Before Y is observed this conditional expectation is itself random."
        },
        {
          "why": "For a conditional density use the continuous weighted average instead.",
          "m": "$$m(y)=\\int x f_{X\\mid Y}(x\\mid y)dx$$",
          "meaning": "The density version is defined on almost every relevant y slice; marginal-null slices do not determine a unique version."
        },
        {
          "why": "Its overall average weights groups by their actual probabilities.",
          "m": "$$E[m(Y)]=E[X]$$",
          "meaning": "This is total expectation, proved in the next note by expanding and canceling the joint group weights."
        }
      ],
      "ends": "A conditional expectation is the function of the observation that returns the corresponding group mean."
    }
  },
  {
    "id": "c.prob.7.5.2",
    "sec": "7.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Law of total expectation",
    "oneLine": "Average each group first, then average the group averages using their sizes.",
    "statement": "<p><b>Statement:</b> The <b>Law of Total Expectation</b> (Adam's Law / Tower Property) states that the expected value of the conditional expectation equals the unconditional expectation:$$E[E[X \\mid Y]] = E[X]$$For discrete variables, $E[X] = \\sum_y E[X \\mid Y = y] p_Y(y)$; for continuous variables, $E[X] = \\int_{-\\infty}^\\infty E[X \\mid Y = y] f_Y(y) \\, dy$.</p><p><b>Mathematical terms:</b> Outer expectation is with respect to $Y$; inner expectation is with respect to $X \\mid Y$; tower property: $E[X] = E_Y[E_{X \\mid Y}[X \\mid Y]]$.</p><p><b>Reason:</b> Under continuous definitions: $E[E[X \\mid Y]] = \\int_{-\\infty}^\\infty E[X \\mid Y = y] f_Y(y) dy = \\int_{-\\infty}^\\infty \\left(\\int_{-\\infty}^\\infty x \\frac{f_{X,Y}(x, y)}{f_Y(y)} dx\\right) f_Y(y) dy$. The marginal densities $f_Y(y)$ cancel out in the product, leaving $\\int_{-\\infty}^\\infty \\int_{-\\infty}^\\infty x f_{X,Y}(x, y) dx dy = E[X]$ by 2D LOTUS. The unconditional average is obtained by averaging the conditional averages weighted by the probability of each conditioning state.</p>",
    "intuition": "Find the average score among each classroom, then weight those averages by class size. You recover the whole-school average; small and large classes should not count equally.",
    "needs": [
      "c.prob.7.5.1"
    ],
    "traps": [
      "Do not omit the weights $P(Y=y)$. The identity is not $E[X]=E[X\\mid Y]$ as a constant; the latter is itself a random variable."
    ],
    "cards": [
      {
        "q": "State the law of total expectation.",
        "a": "$E[X]=E[E[X\\mid Y]]$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.5.2, Proposition 5.1, PDF p. 337.",
    "proof": {
      "idea": "Expand each group average and cancel the conditioning weight.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume E[|X|]<∞ and consider discrete groups Y=y of positive probability.",
          "m": "$$m(y)=E[X\\mid Y=y]$$",
          "meaning": "Groups of zero probability can be omitted."
        },
        {
          "why": "Write the within-group weighted average explicitly.",
          "m": "$$m(y)=\\sum_x xP(X=x\\mid Y=y)$$",
          "meaning": "This is the ordinary mean in the conditional probability model."
        },
        {
          "why": "The average of group means weights each group by its occurrence probability.",
          "m": "$$E[m(Y)]=\\sum_y m(y)P(Y=y)$$",
          "meaning": "A small group receives a small weight; an unweighted average of group means is generally wrong."
        },
        {
          "why": "Substitute the inner mean and use the conditional-probability product rule.",
          "m": "$$E[m(Y)]=\\sum_y\\sum_x xP(X=x,Y=y)$$",
          "meaning": "Multiplying P(X=x given Y=y) by P(Y=y) cancels the conditioning denominator."
        },
        {
          "why": "Interchange the sums and add all Y-groups for each x.",
          "m": "$$E[m(Y)]=\\sum_xx\\sum_yP(X=x,Y=y)=\\sum_xxP(X=x)$$",
          "meaning": "Finite absolute mean justifies rearrangement, and the inner sum is the X marginal."
        },
        {
          "why": "Recognize the resulting overall weighted average.",
          "m": "$$E[E[X\\mid Y]]=E[X]$$",
          "meaning": "This is the law of total expectation, also called the tower rule."
        },
        {
          "why": "For a joint density, replace sums by integrals and use the density factorization.",
          "m": "$$\\int\\left[\\int x f_{X\\mid Y}(x\\mid y)dx\\right]f_Y(y)dy=\\iint x f_{X,Y}(x,y)dx\\,dy$$",
          "meaning": "Absolute integrability justifies exchanging these integrals; the abstract conditional-expectation version follows from its defining averaging property."
        }
      ],
      "ends": "Averaging conditional means with the correct group weights recovers the overall mean."
    }
  },
  {
    "id": "c.prob.7.5.3",
    "sec": "7.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Law of total variance",
    "oneLine": "Total spread equals spread within groups plus spread between their averages.",
    "statement": "<p><b>Statement:</b> The <b>Law of Total Variance</b> (Eve's Law) decomposes the total variance of $X$ into the sum of the expectation of the conditional variance and the variance of the conditional expectation:$$\\operatorname{Var}(X) = E[\\operatorname{Var}(X \\mid Y)] + \\operatorname{Var}(E[X \\mid Y])$$</p><p>where $\\operatorname{Var}(X \\mid Y = y) = E[(X - E[X \\mid Y = y])^2 \\mid Y = y]$ is the conditional variance.</p><p><b>Mathematical terms:</b> $E[\\operatorname{Var}(X \\mid Y)]$ is the unexplained (within-group) variance; $\\operatorname{Var}(E[X \\mid Y])$ is the explained (between-group) variance.</p><p><b>Reason:</b> By the variance formula, $\\operatorname{Var}(X \\mid Y) = E[X^2 \\mid Y] - (E[X \\mid Y])^2$. Taking expectations of both sides gives $E[\\operatorname{Var}(X \\mid Y)] = E[E[X^2 \\mid Y]] - E[(E[X \\mid Y])^2] = E[X^2] - E[(E[X \\mid Y])^2]$ by the Law of Total Expectation. Now consider the variance of $E[X \\mid Y]$: $\\operatorname{Var}(E[X \\mid Y]) = E[(E[X \\mid Y])^2] - (E[E[X \\mid Y]])^2 = E[(E[X \\mid Y])^2] - (E[X])^2$. Adding these two equations cancels the $E[(E[X \\mid Y])^2]$ terms, leaving $E[X^2] - (E[X])^2 = \\operatorname{Var}(X)$.</p>",
    "intuition": "Think of test scores in two classrooms. First, within each room, measure how far scores usually sit from that room’s own average; then average those spreads, giving each room a weight matching its share of students. Add the spread between the room averages, and you get the whole-school spread. For each observed room label Y, conditional variance is the average squared distance from that room’s conditional average.",
    "needs": [
      "c.prob.7.5.2"
    ],
    "traps": [
      "The first term is the average conditional variance; it is not $E[X\\mid Y]$."
    ],
    "cards": [
      {
        "q": "State the law of total variance.",
        "a": "$\\operatorname{Var}(X)=E[\\operatorname{Var}(X\\mid Y)]+\\operatorname{Var}(E[X\\mid Y])$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.5.4, Proposition 5.2, PDF p. 347.",
    "proof": {
      "idea": "Write within-group and between-group variances separately, then show their middle terms cancel.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume E[X²]<∞, set m(Y)=E[X given Y], and write μ=E[X].",
          "m": "$$E[m(Y)]=\\mu$$",
          "meaning": "Total expectation proves the equality of overall and averaged group means."
        },
        {
          "why": "Within a fixed Y-group, use variance as second moment minus squared mean.",
          "m": "$$\\operatorname{Var}(X\\mid Y)=E[X^2\\mid Y]-m(Y)^2$$",
          "meaning": "This is the ordinary variance identity applied inside each group."
        },
        {
          "why": "Average that identity over groups.",
          "m": "$$E[\\operatorname{Var}(X\\mid Y)]=E[E[X^2\\mid Y]]-E[m(Y)^2]$$",
          "meaning": "Linearity applies; the conditional-mean-square bound makes these terms finite when X has finite second moment."
        },
        {
          "why": "Apply total expectation to X².",
          "m": "$$E[\\operatorname{Var}(X\\mid Y)]=E[X^2]-E[m(Y)^2]$$",
          "meaning": "Averaging within-group second moments returns the overall second moment."
        },
        {
          "why": "Compute the variance of the group mean itself.",
          "m": "$$\\operatorname{Var}(m(Y))=E[m(Y)^2]-\\mu^2$$",
          "meaning": "Its mean is μ from the first step."
        },
        {
          "why": "Add the preceding two equations and cancel E[m(Y)²].",
          "m": "$$E[\\operatorname{Var}(X\\mid Y)]+\\operatorname{Var}(m(Y))=E[X^2]-\\mu^2$$",
          "meaning": "The right side is the ordinary variance of X."
        },
        {
          "why": "Recognize the total-variance identity.",
          "m": "$$\\operatorname{Var}(X)=E[\\operatorname{Var}(X\\mid Y)]+\\operatorname{Var}(E[X\\mid Y])$$",
          "meaning": "The two nonnegative terms measure average within-group spread and spread of the group means."
        }
      ],
      "ends": "Total variance splits into within-group and between-group variation; the split follows from two variance expansions and total expectation."
    }
  },
  {
    "id": "c.prob.7.6.1",
    "sec": "7.6",
    "kind": "theorem",
    "tier": "core",
    "title": "Conditional mean minimizes mean squared prediction error",
    "oneLine": "After seeing X, its group average gives the best squared-error guess for Y.",
    "statement": "<p><b>Statement:</b> Among all measurable functions $g(Y)$ of $Y$, the conditional expectation $g^*(Y) = E[X \\mid Y]$ is the unique <b>minimum mean squared error (MMSE) predictor</b> of $X$:$$E[(X - E[X \\mid Y])^2] \\le E[(X - g(Y))^2]$$with equality if and only if $g(Y) = E[X \\mid Y]$ almost surely. The residual prediction error $X - E[X \\mid Y]$ is orthogonal to any function $h(Y)$: $E[(X - E[X \\mid Y]) h(Y)] = 0$.</p><p><b>Mathematical terms:</b> MMSE predictor; orthogonal projection; $E[(X - g(Y))^2]$ is the mean squared error (MSE); $E[X \\mid Y]$ is the projection of $X$ onto the subspace of $Y$-measurable functions.</p><p><b>Reason:</b> Add and subtract $E[X \\mid Y]$: $X - g(Y) = (X - E[X \\mid Y]) + (E[X \\mid Y] - g(Y))$. Squaring this identity yields $(X - g(Y))^2 = (X - E[X \\mid Y])^2 + (E[X \\mid Y] - g(Y))^2 + 2(X - E[X \\mid Y])(E[X \\mid Y] - g(Y))$. Take expectations of the cross-product using the Tower Property: $E[(X - E[X \\mid Y]) h(Y)] = E_Y[E_{X \\mid Y}[(X - E[X \\mid Y]) h(Y) \\mid Y]] = E_Y[h(Y) (E[X \\mid Y] - E[X \\mid Y])] = 0$. Therefore, $E[(X - g(Y))^2] = E[(X - E[X \\mid Y])^2] + E[(E[X \\mid Y] - g(Y))^2]$. Because the second term is non-negative, the MSE is strictly minimized when $g(Y) = E[X \\mid Y]$.</p>",
    "intuition": "After measuring X, choose the conditional average of Y if squared prediction mistakes matter. It is the bullseye that makes the average squared miss as small as possible.",
    "needs": [
      "c.prob.7.5.1"
    ],
    "traps": [
      "The result is for squared-error loss; another loss function generally has a different optimal predictor."
    ],
    "cards": [
      {
        "q": "Under squared-error loss, what predictor based on X is optimal for Y?",
        "a": "$E[Y\\mid X]$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.6, Proposition 6.1, PDF p. 349.",
    "proof": {
      "idea": "Split prediction error at the conditional mean and expand its square.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume E[Y²]<∞ and write m(X)=E[Y given X].",
          "m": "$$Y-g(X)=[Y-m(X)]+[m(X)-g(X)]$$",
          "meaning": "Add and subtract m(X); the two brackets are residual noise and prediction offset."
        },
        {
          "why": "Within a fixed X-group, m(X) and g(X) are constants.",
          "m": "$$E[Y-m(X)\\mid X]=0$$",
          "meaning": "The conditional mean is defined to be that group’s average."
        },
        {
          "why": "Expand the square of the two brackets.",
          "m": "$$(Y-g(X))^2=(Y-m(X))^2+2(Y-m(X))(m(X)-g(X))+(m(X)-g(X))^2$$",
          "meaning": "This is the usual three-term expansion of (a+b)²."
        },
        {
          "why": "Take the conditional average; the cross term contains a constant times a zero mean.",
          "m": "$$E[(Y-g(X))^2\\mid X]=\\operatorname{Var}(Y\\mid X)+(m(X)-g(X))^2$$",
          "meaning": "The first bracket’s mean square is the conditional variance."
        },
        {
          "why": "Average over X by total expectation.",
          "m": "$$E[(Y-g(X))^2]=E[\\operatorname{Var}(Y\\mid X)]+E[(m(X)-g(X))^2]$$",
          "meaning": "For predictions with finite error, all cross-term operations are justified by finite second moments; infinite-error predictions cannot improve the finite-error conditional mean."
        },
        {
          "why": "The added offset term is an average of nonnegative squares.",
          "m": "$$E[(m(X)-g(X))^2]\\ge0$$",
          "meaning": "It cannot lower the error."
        },
        {
          "why": "Choose g(X)=m(X) to make this term zero.",
          "m": "$$\\min_g E[(Y-g(X))^2]=E[\\operatorname{Var}(Y\\mid X)]$$",
          "meaning": "Equality requires g(X)=m(X) almost surely; arbitrary changes on zero-probability inputs do not affect the error."
        }
      ],
      "ends": "The conditional mean gives the smallest mean squared prediction error among predictions based on X."
    }
  },
  {
    "id": "c.prob.7.6.2",
    "sec": "7.6",
    "kind": "theorem",
    "tier": "extra",
    "title": "Best linear predictor",
    "oneLine": "The best straight-line guess uses covariance to choose its slope.",
    "statement": "<p><b>Statement:</b> The <b>Best Linear Predictor (BLP)</b> of $Y$ given $X$ minimizes the mean squared error $E[(Y - (aX + b))^2]$ over all linear functions $aX + b$. The optimal coefficients are:$$a^* = \\frac{\\operatorname{Cov}(X, Y)}{\\operatorname{Var}(X)} = \\rho \\frac{\\sigma_Y}{\\sigma_X}, \\qquad b^* = \\mu_Y - a^* \\mu_X$$yielding the linear regression line $\\hat{Y} = \\mu_Y + \\rho \\frac{\\sigma_Y}{\\sigma_X}(X - \\mu_X)$, with minimum mean squared error $E[(Y - \\hat{Y})^2] = \\sigma_Y^2(1 - \\rho^2)$.</p><p><b>Mathematical terms:</b> Linear regression line; $a^*$ is the slope; $b^*$ is the intercept; $\\rho$ is the correlation; $\\sigma_Y^2(1-\\rho^2)$ is the minimum MSE.</p><p><b>Reason:</b> Expand the MSE: $M(a, b) = E[(Y - aX - b)^2] = E[((Y - \\mu_Y) - a(X - \\mu_X) + (\\mu_Y - a\\mu_X - b))^2]$. For any fixed $a$, the choice of $b$ that minimizes the expectation is $b = \\mu_Y - a\\mu_X$, eliminating the constant shift. The MSE then becomes $E[((Y - \\mu_Y) - a(X - \\mu_X))^2] = \\sigma_Y^2 - 2a \\operatorname{Cov}(X, Y) + a^2 \\sigma_X^2$. Differentiating with respect to $a$ and setting to zero gives $-2\\operatorname{Cov}(X, Y) + 2a\\sigma_X^2 = 0 \\iff a^* = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X^2} = \\rho \\frac{\\sigma_Y}{\\sigma_X}$. Substituting $a^*$ back yields $\\sigma_Y^2 - 2\\rho^2\\sigma_Y^2 + \\rho^2\\sigma_Y^2 = \\sigma_Y^2(1 - \\rho^2)$.</p>",
    "intuition": "A best-fit straight line is like laying a ruler through a cloud of points to minimize squared vertical misses. If the points bend, the ruler is still the best line but cannot trace the bend.",
    "needs": [
      "c.prob.7.4.1"
    ],
    "traps": [
      "This is the best predictor among affine functions, not necessarily among all functions; equality with conditional expectation holds when the conditional mean is affine."
    ],
    "cards": [
      {
        "q": "Give the slope and intercept of the best linear predictor.",
        "a": "$b=\\operatorname{Cov}(X,Y)/\\operatorname{Var}(X)$ and $a=E[Y]-bE[X]$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.6, best linear predictor derivation, PDF pp. 351–352.",
    "proof": {
      "idea": "Minimize an error quadratic by completing the square, avoiding differentiation.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let μ_X=E[X], μ_Y=E[Y], V=Var(X)>0, and C=Cov(X,Y).",
          "m": "$$U=X-\\mu_X,\\quad W=Y-\\mu_Y$$",
          "meaning": "The centered variables have mean zero and finite second moments."
        },
        {
          "why": "For prediction a+bX, separate the mean error from centered error.",
          "m": "$$Y-a-bX=(W-bU)+d,\\quad d=\\mu_Y-a-b\\mu_X$$",
          "meaning": "The term d is fixed."
        },
        {
          "why": "Expand the square and average; the cross term with d vanishes.",
          "m": "$$E[(Y-a-bX)^2]=E[(W-bU)^2]+d^2$$",
          "meaning": "This follows because E[W−bU]=0."
        },
        {
          "why": "For any slope b, the nonnegative d² is minimized by d=0.",
          "m": "$$a=\\mu_Y-b\\mu_X$$",
          "meaning": "The fitted line therefore passes through the pair of means."
        },
        {
          "why": "Expand the remaining centered square.",
          "m": "$$E[(W-bU)^2]=\\operatorname{Var}(Y)-2bC+b^2V$$",
          "meaning": "The mean product E[WU] is covariance C."
        },
        {
          "why": "Complete the square in b.",
          "m": "$$E[(W-bU)^2]=\\operatorname{Var}(Y)-\\frac{C^2}{V}+V\\left(b-\\frac CV\\right)^2$$",
          "meaning": "Expanding the final square gives Vb²−2bC+C²/V; the subtracted constant cancels the last term."
        },
        {
          "why": "Because V>0, the final term is smallest at b=C/V.",
          "m": "$$b^*=\\frac{\\operatorname{Cov}(X,Y)}{\\operatorname{Var}(X)},\\quad a^*=E[Y]-b^*E[X]$$",
          "meaning": "The minimum error is Var(Y)−C²/V."
        },
        {
          "why": "If Var(Y)>0, use ρ=C/sqrt(V Var(Y)).",
          "m": "$$\\text{minimum error}=\\operatorname{Var}(Y)(1-\\rho^2)$$",
          "meaning": "The nonnegativity of this minimum also proves |ρ|≤1. If Var(Y)=0 the constant mean predicts perfectly."
        }
      ],
      "ends": "The best linear predictor follows entirely from centering and completing a quadratic square."
    }
  },
  {
    "id": "c.prob.7.7.1",
    "sec": "7.7",
    "kind": "definition",
    "tier": "extra",
    "title": "Moment generating function",
    "oneLine": "One exponential average can encode many moments and even the whole distribution.",
    "statement": "<p><b>Statement:</b> The <b>Moment Generating Function (MGF)</b> of a random variable $X$ is defined by:$$M_X(t) = E\\left[e^{tX}\\right], \\quad t \\in (-h, h)$$for some $h > 0$. If $M_X(t)$ exists in an open neighborhood around $t = 0$, all moments $E[X^n]$ exist and are generated by derivatives at zero: $E[X^n] = M_X^{(n)}(0) = \\left.\\frac{d^n}{dt^n} M_X(t)\\right|_{t=0}$. Moreover, the MGF uniquely determines the distribution.</p><p><b>Mathematical terms:</b> $M_X(t)$ is the MGF; $t$ is a real parameter; $M_X(0) = E[e^0] = 1$; $M_X^{(n)}(0)$ is the $n$-th derivative evaluated at $t = 0$; uniqueness means identical MGFs imply identical CDFs.</p><p><b>Reason:</b> Expand $e^{tX}$ as a Taylor series: $e^{tX} = \\sum_{n=0}^\\infty \\frac{(tX)^n}{n!} = 1 + tX + \\frac{t^2 X^2}{2!} + \\cdots + \\frac{t^n X^n}{n!} + \\cdots$. Taking expectations term-by-term (justified by dominated convergence when the MGF converges in a neighborhood of 0) gives $M_X(t) = 1 + tE[X] + \\frac{t^2}{2!}E[X^2] + \\cdots + \\frac{t^n}{n!}E[X^n] + \\cdots$. Differentiating $n$ times with respect to $t$ and evaluating at $t = 0$ eliminates all other terms, isolating $M_X^{(n)}(0) = E[X^n]$.</p>",
    "intuition": "A moment-generating function is a compact fingerprint of a distribution. When it exists near zero, reading its slopes at zero gives the mean and other moments such as the variance.",
    "needs": [],
    "traps": [
      "An MGF may be infinite outside its domain; for an exponential(rate λ), it exists only for t<λ. Moments from derivatives require justified differentiation."
    ],
    "cards": [
      {
        "q": "Define the MGF and state its uniqueness condition.",
        "a": "$M_X(t)=E[e^{tX}]$ where finite; an MGF finite on an open interval around 0 uniquely determines the distribution.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.7, definition and uniqueness discussion, PDF pp. 353, 355.",
    "proof": {
      "idea": "Explain why differentiating the exponential average produces moments, with the needed convergence condition.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Define the MGF from an exponential weighted average.",
          "m": "$$M_X(t)=E[e^{tX}]$$",
          "meaning": "Require it to be finite throughout some interval (−δ,δ) about zero for the moment-generating conclusions."
        },
        {
          "why": "At t=0 the exponential equals 1 for every observation.",
          "m": "$$M_X(0)=E[1]=1$$",
          "meaning": "This is normalization, not the mean of X."
        },
        {
          "why": "Repeatedly differentiating the exponential multiplies by X each time.",
          "m": "$$\\frac{d^k}{dt^k}e^{tX}=X^ke^{tX}$$",
          "meaning": "Treat X as a fixed observed number while differentiating with respect to t."
        },
        {
          "why": "Finiteness on both sides of zero controls the absolute exponential tail.",
          "m": "$$e^{c|X|}\\le e^{cX}+e^{-cX}\\quad(0<c<\\delta)$$",
          "meaning": "Taking expectations bounds the left side by two finite MGF values."
        },
        {
          "why": "A polynomial times e^(tX) is dominated by a slightly larger absolute exponential on a smaller t interval.",
          "m": "$$|X|^k e^{tX}\\le C e^{c|X|}\\quad(|t|<c/2)$$",
          "meaning": "The function u^k e^(−cu/2) is bounded for u≥0; this supplies a fixed finite C."
        },
        {
          "why": "Dominated differentiation now allows expectation and derivative to interchange.",
          "m": "$$M_X^{(k)}(t)=E[X^ke^{tX}],\\quad M_X^{(k)}(0)=E[X^k]$$",
          "meaning": "This is a calculus theorem justified by the preceding integrable bound; setting t=0 removes the exponential factor."
        },
        {
          "why": "Equal MGFs on an interval about zero determine the same probability law.",
          "m": "$$M_X(t)=M_Y(t)\\text{ near }0\\ \\Longrightarrow\\ X\\text{ and }Y\\text{ have the same law}$$",
          "meaning": "This is the advanced MGF uniqueness theorem, used as a prerequisite in distribution-identification arguments; equal first few moments alone are insufficient."
        }
      ],
      "ends": "The MGF produces moments through justified differentiation. Both existence near zero and the uniqueness theorem must be stated when using it."
    }
  },
  {
    "id": "c.prob.7.7.2",
    "sec": "7.7",
    "kind": "theorem",
    "tier": "extra",
    "title": "MGF of a sum of independent variables",
    "oneLine": "Independent parts turn the MGF of a sum into a product.",
    "statement": "<p><b>Statement:</b> If $X$ and $Y$ are independent random variables with MGFs $M_X(t)$ and $M_Y(t)$, then the MGF of their sum $Z = X + Y$ is the product of their individual MGFs:$$M_{X+Y}(t) = M_X(t) \\cdot M_Y(t)$$More generally, for independent $X_1, \\ldots, X_n$, $M_{\\sum a_i X_i}(t) = \\prod_{i=1}^n M_{X_i}(a_i t)$.</p><p><b>Mathematical terms:</b> Product MGF formula; convolution in probability space transforms into point-wise multiplication in MGF space.</p><p><b>Reason:</b> By definition, $M_{X+Y}(t) = E[e^{t(X+Y)}] = E[e^{tX + tY}] = E[e^{tX} e^{tY}]$. Because $X$ and $Y$ are independent, any functions of them $g(X) = e^{tX}$ and $h(Y) = e^{tY}$ are also independent. By the product expectation property for independent variables, $E[e^{tX} e^{tY}] = E[e^{tX}] E[e^{tY}] = M_X(t) M_Y(t)$. This converts complicated convolution integrals into elementary algebraic multiplication.</p>",
    "intuition": "For independent waiting times, the exponential of their total splits into separate pieces, and independence lets each piece be averaged separately. That is why the two fingerprints multiply.",
    "needs": [
      "c.prob.7.7.1"
    ],
    "traps": [
      "The product formula depends on independence. Equal parameters are not required."
    ],
    "cards": [
      {
        "q": "State the MGF product rule for independent X and Y.",
        "a": "$M_{X+Y}(t)=M_X(t)M_Y(t)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.7, independent-sum property, PDF p. 355.",
    "proof": {
      "idea": "Use the exponent addition rule and independence of the two factors.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a real t where the required averages are finite, define the MGF.",
          "m": "$$M_X(t)=E[e^{tX}],\\quad M_Y(t)=E[e^{tY}]$$",
          "meaning": "MGF abbreviates moment generating function; it need not be finite at every t."
        },
        {
          "why": "The exponent addition rule holds at each outcome.",
          "m": "$$e^{t(X+Y)}=e^{tX}e^{tY}$$",
          "meaning": "The left side combines the sum inside the exponential."
        },
        {
          "why": "For discrete independent variables, their joint masses factor.",
          "m": "$$E[e^{tX}e^{tY}]=\\sum_x\\sum_y e^{tx}e^{ty}p_X(x)p_Y(y)$$",
          "meaning": "Independence is used here, rather than in the exponent rule."
        },
        {
          "why": "Factor the double sum into two separate sums.",
          "m": "$$E[e^{tX}e^{tY}]=\\left(\\sum_xe^{tx}p_X(x)\\right)\\left(\\sum_ye^{ty}p_Y(y)\\right)$$",
          "meaning": "For densities, the same calculation uses integrals; nonnegative exponential factors permit iterated integration."
        },
        {
          "why": "Recognize the two individual MGFs.",
          "m": "$$M_{X+Y}(t)=M_X(t)M_Y(t)$$",
          "meaning": "For a finite independent list, repeat the two-variable argument."
        },
        {
          "why": "To identify the sum law from this formula, require finiteness on an interval about zero.",
          "m": "$$M_{\\sum_iX_i}(t)=\\prod_iM_{X_i}(t)$$",
          "meaning": "The MGF uniqueness theorem on such an interval is an advanced prerequisite; matching a formula at only one value of t is not sufficient."
        }
      ],
      "ends": "Independent-sum MGFs multiply wherever finite; identifying a distribution additionally uses the uniqueness theorem."
    }
  },
  {
    "id": "c.prob.7.7.3",
    "sec": "7.7",
    "kind": "theorem",
    "tier": "extra",
    "title": "MGF formula for a random sum",
    "oneLine": "First fix how many terms are added, then average over that random count.",
    "statement": "<p><b>Statement:</b> Let $S_N = \\sum_{i=1}^N X_i$ be a <b>random sum</b>, where $N$ is a non-negative integer-valued random variable independent of the sequence of iid terms $X_1, X_2, \\ldots$ with common MGF $M_X(t)$. The MGF of $S_N$ is given by the composition:$$M_{S_N}(t) = E\\left[(M_X(t))^N\\right] = G_N(M_X(t))$$where $G_N(s) = E[s^N]$ is the probability generating function of $N$. By Wald's Identities, $E[S_N] = E[N] E[X]$ and $\\operatorname{Var}(S_N) = E[N] \\operatorname{Var}(X) + (E[X])^2 \\operatorname{Var}(N)$.</p><p><b>Mathematical terms:</b> $S_N$ is a random sum; $G_N(s) = E[s^N]$ is the PGF of $N$; $M_{S_N}(t)$ is the composite MGF; Wald's identity gives the mean and variance.</p><p><b>Reason:</b> Condition on $N$: $E[e^{t S_N} \\mid N = n] = E[e^{t(X_1+\\cdots+X_n)}] = (M_X(t))^n$ because the terms $X_i$ are iid and independent of $N$. Applying the Law of Total Expectation gives $M_{S_N}(t) = E[E[e^{t S_N} \\mid N]] = E[(M_X(t))^N]$. Differentiating once yields $E[S_N] = E[N]E[X]$, and applying the Law of Total Variance gives $\\operatorname{Var}(S_N) = E[\\operatorname{Var}(S_N \\mid N)] + \\operatorname{Var}(E[S_N \\mid N]) = E[N \\operatorname{Var}(X)] + \\operatorname{Var}(N E[X]) = E[N]\\operatorname{Var}(X) + (E[X])^2\\operatorname{Var}(N)$.</p>",
    "intuition": "If a shop’s daily sales are the total from a random number of customers, first work out the total for a fixed customer count. Then average over the possible counts.",
    "needs": [
      "c.prob.7.5.2",
      "c.prob.7.5.3"
    ],
    "traps": [
      "Independence of N from the sequence is needed. If N depends on the summands, the formulas may fail."
    ],
    "cards": [
      {
        "q": "State the mean and variance formulas for an independent random sum.",
        "a": "$E[S]=E[N]E[X]$ and $\\operatorname{Var}(S)=E[N]\\operatorname{Var}(X)+(E[X])^2\\operatorname{Var}(N)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.7, Example 7j and Eqs. (7.2)–(7.3), PDF pp. 357–358.",
    "proof": {
      "idea": "Condition on the random number of summands before taking the overall average.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let N be a nonnegative integer count, independent of iid summands X_i.",
          "m": "$$S=\\sum_{i=1}^NX_i$$",
          "meaning": "Set S=0 when N=0, so its exponential is 1 in that case."
        },
        {
          "why": "When N=n, independence of N leaves the summands’ distributions unchanged.",
          "m": "$$E[e^{tS}\\mid N=n]=M_X(t)^n$$",
          "meaning": "This is the fixed-length MGF product rule, including M_X(t)^0=1."
        },
        {
          "why": "Average this fixed-count expression over all possible n.",
          "m": "$$M_S(t)=\\sum_{n=0}^{\\infty}P(N=n)M_X(t)^n=E[M_X(t)^N]$$",
          "meaning": "Total expectation supplies the outer count weights."
        },
        {
          "why": "For finite positive M_X(t), rewrite its n-th power with a logarithm.",
          "m": "$$M_X(t)^n=e^{n\\log M_X(t)}$$",
          "meaning": "The logarithm is the inverse of the positive exponential; its argument here is positive."
        },
        {
          "why": "Apply the definition of the count MGF at this new argument.",
          "m": "$$M_S(t)=M_N(\\log M_X(t))$$",
          "meaning": "This equation is used only where the required averages are finite."
        },
        {
          "why": "Write μ=E[X] and σ²=Var(X); for fixed count n, add means and variances.",
          "m": "$$E[S\\mid N=n]=n\\mu,\\quad\\operatorname{Var}(S\\mid N=n)=n\\sigma^2$$",
          "meaning": "For the variance identity below assume E[X²]<∞ and E[N²]<∞."
        },
        {
          "why": "Use total expectation for the mean.",
          "m": "$$E[S]=E[N]\\mu$$",
          "meaning": "Every expected summand contributes the same expected amount."
        },
        {
          "why": "Use total variance for the two sources of spread.",
          "m": "$$\\operatorname{Var}(S)=E[N]\\sigma^2+\\mu^2\\operatorname{Var}(N)$$",
          "meaning": "The first term averages within-count variance nσ²; the second is Var(Nμ), the variability of conditional means."
        }
      ],
      "ends": "Random sums have randomness both in individual values and in the count; conditioning separates the two."
    }
  },
  {
    "id": "c.prob.7.8.1",
    "sec": "7.8",
    "kind": "theorem",
    "tier": "extra",
    "title": "Linear combinations of jointly normal variables",
    "oneLine": "Normal quantities built from the same independent normal ingredients stay normal when added.",
    "statement": "<p><b>Statement:</b> Random variables $X_1, \\ldots, X_n$ are <b>jointly normal</b> (multivariate Gaussian) if and only if every linear combination $Y = \\sum_{i=1}^n a_i X_i$ is a univariate normal random variable for all constants $a_1, \\ldots, a_n \\in \\mathbb{R}$. The distribution of $(X_1, \\ldots, X_n)$ is completely determined by the mean vector $\\boldsymbol{\\mu} = [E[X_i]]$ and covariance matrix $\\boldsymbol{\\Sigma} = [\\operatorname{Cov}(X_i, X_j)]$. In particular, jointly normal variables are independent if and only if they are uncorrelated ($\\operatorname{Cov}(X_i, X_j) = 0$).</p><p><b>Mathematical terms:</b> Joint normality; mean vector $\\boldsymbol{\\mu}$; covariance matrix $\\boldsymbol{\\Sigma}$; zero covariance implies independence for jointly normal variables.</p><p><b>Reason:</b> The joint characteristic function of $\\mathbf{X}$ is $\\phi_{\\mathbf{X}}(\\mathbf{t}) = E[\\exp(i \\mathbf{t}^T \\mathbf{X})]$. Because any linear combination $\\mathbf{t}^T \\mathbf{X}$ is univariate normal with mean $\\mathbf{t}^T \\boldsymbol{\\mu}$ and variance $\\mathbf{t}^T \\boldsymbol{\\Sigma} \\mathbf{t}$, the joint characteristic function is $\\phi_{\\mathbf{X}}(\\mathbf{t}) = \\exp(i \\mathbf{t}^T \\boldsymbol{\\mu} - \\frac{1}{2} \\mathbf{t}^T \\boldsymbol{\\Sigma} \\mathbf{t})$. When $\\operatorname{Cov}(X_i, X_j) = 0$ for $i \\ne j$, $\\boldsymbol{\\Sigma}$ is diagonal, so $\\mathbf{t}^T \\boldsymbol{\\Sigma} \\mathbf{t} = \\sum t_i^2 \\sigma_i^2$, which factors $\\phi_{\\mathbf{X}}(\\mathbf{t}) = \\prod \\phi_{X_i}(t_i)$, proving mutual independence.</p>",
    "intuition": "A jointly normal collection is one bell-shaped cloud, possibly tilted. Adding coordinates with fixed weights makes another bell-shaped quantity.",
    "needs": [
      "c.prob.7.7.1"
    ],
    "traps": [
      "Normal individuals alone do not imply a jointly normal vector; the multivariate-normal assumption is essential."
    ],
    "cards": [
      {
        "q": "If X is multivariate normal, what is the law of $c^TX$?",
        "a": "It is normal with mean $c^T\\mu$ and variance $c^T\\Sigma c$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.8.1, multivariate normal distribution, PDF pp. 360–361.",
    "proof": {
      "idea": "Express the dependent normal variables using independent standard-normal ingredients.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "By the stated multivariate-normal construction, each X_j uses independent standard normals Z_k.",
          "m": "$$X_j=\\mu_j+\\sum_kb_{kj}Z_k$$",
          "meaning": "The X_j may share Z ingredients and therefore be dependent."
        },
        {
          "why": "Insert this construction into a weighted sum T=Σc_j X_j.",
          "m": "$$T=\\sum_jc_j\\mu_j+\\sum_j\\sum_kc_jb_{kj}Z_k$$",
          "meaning": "The constants c_j and b_kj are fixed."
        },
        {
          "why": "Reorder the finite sums and collect each Z_k coefficient.",
          "m": "$$m=\\sum_jc_j\\mu_j,\\quad d_k=\\sum_jc_jb_{kj},\\quad T=m+\\sum_kd_kZ_k$$",
          "meaning": "This is simply collecting like terms in algebra."
        },
        {
          "why": "Use the standard-normal MGF, derived by completing the square in the normal-sum note.",
          "m": "$$M_{d_kZ_k}(t)=e^{d_k^2t^2/2}$$",
          "meaning": "Scaling a variable changes the argument of its MGF to d_k t."
        },
        {
          "why": "Independence of the Z_k permits multiplication of their MGFs.",
          "m": "$$M_T(t)=e^{mt}\\prod_ke^{d_k^2t^2/2}=e^{mt+(t^2/2)\\sum_kd_k^2}$$",
          "meaning": "The shared X_j ingredients never need to be treated as independent."
        },
        {
          "why": "MGF uniqueness identifies a normal law if v=Σd_k²>0.",
          "m": "$$T\\sim N(m,v),\\quad v=\\sum_kd_k^2$$",
          "meaning": "If v=0, every d_k is zero and T is the constant m."
        },
        {
          "why": "Expand v and identify the ingredient covariance of X_i and X_j.",
          "m": "$$v=\\sum_{i,j}c_ic_j\\sum_kb_{ki}b_{kj}=\\sum_{i,j}c_ic_j\\operatorname{Cov}(X_i,X_j)$$",
          "meaning": "Independent standard-normal ingredients have covariance 0 for different indices and variance 1 for equal indices."
        },
        {
          "why": "The characteristic function of the whole vector consequently depends only on means and covariances.",
          "m": "$$E[e^{i\\sum_jt_jX_j}]=\\exp\\left(i\\sum_jt_j\\mu_j-\\frac12\\sum_{i,j}t_it_j\\operatorname{Cov}(X_i,X_j)\\right)$$",
          "meaning": "Here i²=−1. Uniqueness of multivariate characteristic functions explains why those parameters specify the whole jointly normal law."
        }
      ],
      "ends": "Every linear combination in a jointly normal vector is normal or constant, with variance including all covariance terms."
    }
  },
  {
    "id": "c.prob.7.8.2",
    "sec": "7.8",
    "kind": "theorem",
    "tier": "extra",
    "title": "Normal sample mean and sample variance",
    "oneLine": "For a normal sample, its average and its measured spread are independent.",
    "statement": "<p><b>Statement:</b> Let $X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\mathcal{N}(\\mu, \\sigma^2)$ be a random sample from a normal distribution. Define the <b>sample mean</b> $\\bar{X} = \\frac{1}{n} \\sum_{i=1}^n X_i$ and <b>sample variance</b> $S^2 = \\frac{1}{n-1} \\sum_{i=1}^n (X_i - \\bar{X})^2$. Then:<br>(1) $\\bar{X} \\sim \\mathcal{N}\\left(\\mu, \\, \\frac{\\sigma^2}{n}\\right)$.<br>(2) $\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)$ (Chi-square distribution with $n-1$ degrees of freedom).<br>(3) $\\bar{X}$ and $S^2$ are statistically <b>independent</b>.</p><p><b>Mathematical terms:</b> Sample mean $\\bar{X}$; sample variance $S^2$; $\\chi^2(n-1)$ is the sum of $n-1$ squared independent standard normals; independence of $\\bar{X}$ and $S^2$ is Basu's theorem / Helmert's transformation.</p><p><b>Reason:</b> Apply an orthogonal (Helmert) matrix transformation $\\mathbf{Y} = \\mathbf{O}\\mathbf{Z}$, where $Z_i = \\frac{X_i-\\mu}{\\sigma} \\overset{\\text{iid}}{\\sim} \\mathcal{N}(0, 1)$ and the first row of $\\mathbf{O}$ is $(\\frac{1}{\\sqrt{n}}, \\ldots, \\frac{1}{\\sqrt{n}})$. Because $\\mathbf{O}$ is orthogonal ($\\mathbf{O}^T \\mathbf{O} = \\mathbf{I}$), $\\mathbf{Y} \\sim \\mathcal{N}(\\mathbf{0}, \\mathbf{I})$, so $Y_1, \\ldots, Y_n$ are independent standard normals. Notice $Y_1 = \\frac{\\sqrt{n}(\\bar{X}-\\mu)}{\\sigma}$, so $\\bar{X} = \\mu + \\frac{\\sigma}{\\sqrt{n}} Y_1$. Furthermore, $\\sum_{i=1}^n Z_i^2 = \\mathbf{Z}^T \\mathbf{Z} = \\mathbf{Y}^T \\mathbf{Y} = Y_1^2 + \\sum_{j=2}^n Y_j^2$. Since $\\sum Z_i^2 = Y_1^2 + \\frac{(n-1)S^2}{\\sigma^2}$, this forces $\\frac{(n-1)S^2}{\\sigma^2} = \\sum_{j=2}^n Y_j^2$. Because $S^2$ depends only on $Y_2, \\ldots, Y_n$, while $\\bar{X}$ depends only on $Y_1$, they are strictly independent.</p>",
    "intuition": "For normal test scores, the class average points along one direction and deviations from that average point sideways. Those parts are independent, which is why the t and chi-square formulas work.",
    "needs": [
      "c.prob.7.4.2",
      "c.prob.7.7.2"
    ],
    "traps": [
      "The independence and chi-square conclusion require a normal sample. For a general independent and identically distributed sample, the mean and sample variance are not generally independent."
    ],
    "cards": [
      {
        "q": "For an independent and identically distributed normal sample, give the law of $\\bar X$ and the scaled law of $S^2$.",
        "a": "$\\bar X\\sim N(\\mu,\\sigma^2/n)$ and $(n-1)S^2/\\sigma^2\\sim\\chi^2_{n-1}$; they are independent.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.8.2 and Proposition 8.1, PDF pp. 362–363.",
    "proof": {
      "idea": "Separate the sample’s average direction from its perpendicular deviation directions.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume n≥2 independent N(μ,σ²) observations with σ>0 and standardize them.",
          "m": "$$Z_i=\\frac{X_i-\\mu}{\\sigma}\\quad(i=1,\\ldots,n)$$",
          "meaning": "These are independent N(0,1) variables."
        },
        {
          "why": "The standardized sample mean uses the unit vector with equal coordinates.",
          "m": "$$A=\\frac1{\\sqrt n}\\sum_iZ_i=\\frac{\\sqrt n(\\bar X-\\mu)}\\sigma$$",
          "meaning": "The vector (1,...,1)/sqrt(n) has squared length n/n=1, so A has mean 0 and variance 1."
        },
        {
          "why": "Extend that unit vector to n mutually perpendicular unit directions and call the other coordinates B_1,...,B_(n−1).",
          "m": "$$\\sum_iZ_i^2=A^2+\\sum_{j=1}^{n-1}B_j^2$$",
          "meaning": "Perpendicular axes preserve squared length by Pythagoras. Constructing such a basis is a linear-algebra prerequisite."
        },
        {
          "why": "The joint standard-normal density depends only on squared length.",
          "m": "$$f_Z(z)=(2\\pi)^{-n/2}\\exp\\left(-\\frac12\\sum_i z_i^2\\right)$$",
          "meaning": "Independence multiplies n one-dimensional normal densities."
        },
        {
          "why": "Rotation preserves length and has absolute determinant 1, so the transformed density factors again.",
          "m": "$$f_{A,B}(a,b)=(2\\pi)^{-n/2}e^{-a^2/2}\\prod_{j=1}^{n-1}e^{-b_j^2/2}$$",
          "meaning": "The change-of-variables theorem therefore proves that A and every B_j are independent standard normals, not merely uncorrelated."
        },
        {
          "why": "Expand the centered sum of squares; ΣZ_i=sqrt(n)A.",
          "m": "$$\\sum_i(Z_i-\\bar Z)^2=\\sum_iZ_i^2-n\\bar Z^2=\\sum_iZ_i^2-A^2$$",
          "meaning": "The cross term −2bar(Z)ΣZ_i and the n copies of bar(Z)² combine into −nbar(Z)²."
        },
        {
          "why": "Use Pythagoras and undo the scale σ.",
          "m": "$$\\frac{(n-1)S^2}{\\sigma^2}=\\sum_{j=1}^{n-1}B_j^2\\sim\\chi^2_{n-1}$$",
          "meaning": "A chi-squared variable is defined as a sum of that many independent squared standard normals."
        },
        {
          "why": "The mean uses only A and the variance uses only the independent B coordinates.",
          "m": "$$\\bar X\\sim N(\\mu,\\sigma^2/n),\\quad\\bar X\\text{ is independent of }S^2$$",
          "meaning": "Functions of independent coordinate groups remain independent; this relies on the normal density’s rotation property."
        }
      ],
      "ends": "Normal samples give an independent mean and variance, and n−1 deviation directions explain the chi-squared degrees of freedom."
    }
  },
  {
    "id": "c.prob.7.9.1",
    "sec": "7.9",
    "kind": "definition",
    "tier": "extra",
    "title": "Expectation with respect to a distribution function",
    "oneLine": "Use probability as the weight whether outcomes are discrete, continuous, or a mixture.",
    "statement": "<p><b>Statement:</b> The general expectation of a random variable $X$ with cumulative distribution function $F(x)$ is defined via the <b>Riemann-Stieltjes integral</b>:$$E[X] = \\int_{-\\infty}^\\infty x \\, dF(x)$$which unifies discrete distributions ($dF(x) = p(x)$ at atoms, giving $\\sum x p(x)$), continuous distributions ($dF(x) = f(x)dx$, giving $\\int x f(x)dx$), and mixed distributions ($E[X] = \\sum x_i p_i + \\int x f(x)dx$).</p><p><b>Mathematical terms:</b> Riemann-Stieltjes integral $\\int x dF(x)$; $dF(x)$ is the Stieltjes probability measure; mixed distribution combines discrete atoms and continuous densities.</p><p><b>Reason:</b> A cumulative distribution function $F$ defines a unique Borel probability measure $\\mu_F$ on $\\mathbb{R}$ such that $\\mu_F((a, b]) = F(b) - F(a)$. By the Lebesgue decomposition theorem, any distribution decomposes into $F = \\alpha F_{\\text{discrete}} + (1-\\alpha) F_{\\text{continuous}}$. Integrating against $dF$ naturally integrates against the discrete point masses at jump discontinuities while integrating against the continuous density derivative $f(x) = F^\\prime(x)$ elsewhere, providing a single, universal foundation for expectation across all random variables.</p>",
    "intuition": "A CDF can rise in smooth ramps or jump at a value with a point mass. Integrating against its probability increments counts both kinds of probability without switching formulas.",
    "needs": [
      "c.prob.7.2.2"
    ],
    "traps": [
      "Do not treat $dF(x)$ as an ordinary density if F has jumps. Finite expectation requires both positive and negative parts not to be infinite together."
    ],
    "cards": [
      {
        "q": "How does general expectation relate to discrete and continuous formulas?",
        "a": "$E[g(X)]=\\int g\\,dF$; it becomes a sum for a pmf and an ordinary density integral for an absolutely continuous law.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.9, general definition, PDF pp. 364–365.",
    "proof": {
      "idea": "Interpret dF as probability weight and recover discrete, continuous and mixed averages.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "A CDF defines probability of a half-open interval by its increase.",
          "m": "$$P(a<X\\le b)=F(b)-F(a)$$",
          "meaning": "Thus increments of F are probability weights, even if F has jumps."
        },
        {
          "why": "For a step function g constant at value c_j on each disjoint numerical set A_j, its weighted average is a sum.",
          "m": "$$E[g(X)]=\\sum_jc_jP(X\\in A_j)$$",
          "meaning": "This is the direct expected-value definition for a finitely valued output."
        },
        {
          "why": "The distribution integral notation names the same weighted average.",
          "m": "$$\\int g(x)dF(x)=\\sum_jc_jP(X\\in A_j)$$",
          "meaning": "It is a Lebesgue–Stieltjes integral against the probability measure induced by F, rather than an ordinary derivative assumption."
        },
        {
          "why": "Nonnegative functions are built as increasing limits of nonnegative step functions.",
          "m": "$$E[g(X)]=\\int g(x)dF(x)\\quad(g\\ge0)$$",
          "meaning": "The monotone convergence theorem extends both weighted averages by the same limit; this is an explicit advanced integration prerequisite."
        },
        {
          "why": "For discrete F, weight sits at its jumps; for a density F, it is f(x)dx.",
          "m": "$$\\int g\\,dF=\\sum_xg(x)p_X(x)\\quad\\text{or}\\quad\\int g(x)f_X(x)dx$$",
          "meaning": "These reproduce the ordinary discrete and continuous LOTUS formulas. For a mixed law, add the jump and density contributions; a singular continuous component requires its own distribution weight."
        },
        {
          "why": "For signed g, subtract its positive and negative part averages only when that subtraction is defined.",
          "m": "$$E[|g(X)|]<\\infty\\ \\Longrightarrow\\ E[g(X)]\\text{ is finite}$$",
          "meaning": "If both part averages are infinite, no signed expected value is defined."
        }
      ],
      "ends": "Distribution integration unifies probability-weighted sums and density integrals without assuming every CDF has a density."
    }
  }
]
);
