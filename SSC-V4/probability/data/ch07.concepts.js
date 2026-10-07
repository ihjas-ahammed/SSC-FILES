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
    "statement": "If $X$ is between $a$ and $b$ except on outcomes of probability zero, its average is also between them: $a\\le E[X]\\le b$. More generally, if $X\\le Y$ except on a zero-probability set and both have finite absolute averages $E[\\lvert X\\rvert],E[\\lvert Y\\rvert]$, then $E[X]\\le E[Y]$.",
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
    "statement": "For finitely many random quantities with finite absolute averages, multiplying by fixed numbers and adding can be done before or after averaging: $E[\\sum_i a_iX_i]=\\sum_i a_iE[X_i]$. Thus $E[X+Y]=E[X]+E[Y]$. This works even when the quantities affect each other.",
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
    "statement": "To average a rule $g$ applied to a pair $(X,Y)$, use the probabilities of whole pairs. For separate possible pairs, $E[g(X,Y)]=\\sum_x\\sum_y g(x,y)p(x,y)$, where $p(x,y)=P(X=x,Y=y)$. For a pair with joint density $f$, use $E[g(X,Y)]=\\iint g(x,y)f(x,y)\\,dx\\,dy$. These formulas allow a nonnegative infinite result; for a finite signed result require $E[\\lvert g(X,Y)\\rvert]<\\infty$.",
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
    "statement": "For each event $A_i$, set $I_i=1$ if it happens and zero otherwise. Then the count $X=\\sum_i I_i$ is the number of events that happen. Since the average of a zero-one switch is its chance of being one, $E[X]=\\sum_iP(A_i)$. The events may be related.",
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
    "statement": "If $X$ counts which of $n$ events happen, $(X)_k=X(X-1)\\cdots(X-k+1)$ counts ways to pick and order $k$ different successful events. Hence $E[(X)_k]=k!\\sum_{i_1<\\cdots<i_k}P(A_{i_1}\\cap\\cdots\\cap A_{i_k})$. For pairs this gives $E[X^2]=E[X]+2\\sum_{i<j}P(A_i\\cap A_j)$. Then $\\operatorname{Var}(X)=E[X^2]-E[X]^2$.",
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
    "statement": "Assume $E[X^2]$ and $E[Y^2]$ are finite. Covariance averages the product of the departures from their means: $\\operatorname{Cov}(X,Y)=E[(X-E[X])(Y-E[Y])]=E[XY]-E[X]E[Y]$. Positive covariance means these departures tend to have the same sign. Correlation divides out the units: $\\rho=\\operatorname{Cov}(X,Y)/(\\sigma_X\\sigma_Y)$, where the standard deviations must be positive. It lies between $-1$ and $1$. Independent variables have zero covariance; zero covariance can still occur for dependent variables.",
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
    "statement": "For a finite collection with finite second moments, $\\operatorname{Var}(\\sum_i X_i)=\\sum_i\\operatorname{Var}(X_i)+2\\sum_{i<j}\\operatorname{Cov}(X_i,X_j)$. The first sum measures each part's spread. The second measures how pairs move together. If each different pair has zero covariance, the second sum vanishes and the variances add. Independence guarantees this zero-covariance condition.",
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
    "statement": "When you learn $Y=y$, average $X$ using its updated probabilities: $E[X\\mid Y=y]=\\sum_x xP(X=x\\mid Y=y)$ for discrete values, provided $P(Y=y)>0$. With a conditional density, use $\\int x f_{X\\mid Y}(x\\mid y)dx$ where that density is defined. The expression $E[X\\mid Y]$ means the function that looks up the appropriate group mean for whichever $Y$ occurs. It is itself a random quantity.",
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
    "statement": "If $E[\\lvert X\\rvert]<\\infty$, averaging the conditional averages recovers the overall mean: $E[X]=E[E[X\\mid Y]]$. For discrete groups this means $E[X]=\\sum_y E[X\\mid Y=y]P(Y=y)$. With a density for $Y$, replace the weighted sum by $\\int E[X\\mid Y=y]f_Y(y)dy$.",
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
    "statement": "When $E[X^2]<\\infty$, the variance within the group described by $Y$ is $\\operatorname{Var}(X\\mid Y)=E[(X-E[X\\mid Y])^2\\mid Y]=E[X^2\\mid Y]-(E[X\\mid Y])^2$. Overall variance splits into two parts: $\\operatorname{Var}(X)=E[\\operatorname{Var}(X\\mid Y)]+\\operatorname{Var}(E[X\\mid Y])$. The first averages the within-group spread; the second measures how far apart group means are.",
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
    "statement": "Assume $E[Y^2]<\\infty$. A prediction $g(X)$ uses only the observed $X$. Its average squared error is $E[(Y-g(X))^2]=E[\\operatorname{Var}(Y\\mid X)]+E[(E[Y\\mid X]-g(X))^2]$. The first part does not depend on your prediction. The second is smallest, namely zero, when you predict the conditional average $g(X)=E[Y\\mid X]$.",
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
    "statement": "Assume $X$ has positive finite variance and $E[Y^2]<\\infty$. Among guesses of the form $a+bX$, the smallest average squared error occurs at $b=\\operatorname{Cov}(X,Y)/\\operatorname{Var}(X)$ and $a=E[Y]-bE[X]$. If both variables have positive variance, the resulting error is $\\operatorname{Var}(Y)(1-\\rho^2)$. Thus a stronger linear relationship gives a more accurate straight-line guess.",
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
    "statement": "The moment generating function, or MGF, is $M_X(t)=E[e^{tX}]$. Suppose this average is finite throughout an open interval around zero. Then differentiating $k$ times and setting $t=0$ gives $M_X^{(k)}(0)=E[X^k]$. Also, two variables with the same MGF near zero have the same distribution. The finiteness condition matters: some distributions have moments but no MGF on such an interval.",
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
    "statement": "For independent $X,Y$, $M_{X+Y}(t)=M_X(t)M_Y(t)$ wherever these averages are finite. If they are finite near zero, match that product to a known MGF to identify the sum's distribution. For example, independent Poisson counts combine into another Poisson count.",
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
    "statement": "Let $N$ be a nonnegative integer count, independent of values $X_i$ that are independent of each other and share one distribution. For $S=\\sum_{i=1}^N X_i$, $M_S(t)=E[M_X(t)^N]=M_N(\\log M_X(t))$ wherever finite. If the required moments are finite, $E[S]=E[N]E[X]$ and $\\operatorname{Var}(S)=E[N]\\operatorname{Var}(X)+(E[X])^2\\operatorname{Var}(N)$. An empty sum when $N=0$ equals zero.",
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
    "statement": "Take independent standard normal values $Z_1,\\ldots,Z_n$. If each $X_j$ is a fixed number plus a weighted sum of those ingredients, the collection is called multivariate normal. Every weighted sum of the $X_j$ is normal, even though the $X_j$ may be dependent. For weights $c_j$ its mean is $\\sum_jc_jE[X_j]$ and variance is $\\sum_{i,j}c_ic_j\\operatorname{Cov}(X_i,X_j)$. The means and covariances specify the whole joint normal law.",
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
    "statement": "Take $n\\ge2$ independent observations, each normal with mean $\\mu$ and positive variance $\\sigma^2$. Let $\\bar X=\\sum_iX_i/n$ and $S^2=\\sum_i(X_i-\\bar X)^2/(n-1)$. Then $\\bar X$ is normal with mean $\\mu$ and variance $\\sigma^2/n$. The scaled spread $(n-1)S^2/\\sigma^2$ has a chi-square distribution with $n-1$ degrees of freedom. Also $\\bar X$ and $S^2$ are independent. This last property depends on the normal model.",
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
    "statement": "For a variable with cumulative distribution function $F$, write its average transformed value as $E[g(X)]=\\int g(x)\\,dF(x)$. Here $dF$ means probability weight: a jump contributes its point probability and a density contributes $f(x)dx$. If $E[\\lvert g(X)\\rvert]<\\infty$, the signed average is finite. More generally it can have a one-sided infinite value, but it is undefined if its positive and negative contributions are both infinite. The notation gives the usual discrete sum $\\sum_xg(x)p(x)$ and density integral $\\int g(x)f(x)dx$.",
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
