var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
CONCEPTS.push(...
[
  {
    "id": "c.prob.7.1.1",
    "sec": "7.1",
    "kind": "theorem",
    "tier": "core",
    "title": "Bounds and order preservation for expectation",
    "oneLine": "An almost-sure bound on X also bounds its expectation.",
    "statement": "If $a\\le X\\le b$ with probability 1 and $E[|X|]<\\infty$, then $a\\le E[X]\\le b$. More generally, if $X\\le Y$ almost surely and both expectations are finite, then $E[X]\\le E[Y]$.",
    "intuition": "If every bus trip takes between 10 and 30 minutes, the average trip cannot be 8 or 40 minutes. An expectation is just an average that gives more weight to more likely outcomes.",
    "needs": [],
    "traps": [
      "The inequalities need only hold almost surely, not at outcomes of probability zero. Integrability is needed to make the expectations finite."
    ],
    "cards": [
      {
        "q": "What bounds apply if $a\\le X\\le b$ almost surely?",
        "a": "$a\\le E[X]\\le b$, provided X is integrable.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.1, opening discussion, PDF p. 309.",
    "proof": {
      "idea": "Take expectations of pointwise nonnegative differences.",
      "why": "Nonnegative random variables have nonnegative expectations.",
      "rungs": [
        {
          "why": "Since $X-a\\ge0$ almost surely, expectation preserves the inequality.",
          "m": "$E[X-a]=E[X]-a\\ge0$",
          "meaning": "The constant has expectation a."
        },
        {
          "why": "Apply the same argument to $b-X$.",
          "m": "$E[b-X]=b-E[X]\\ge0$",
          "meaning": "This gives the upper bound."
        }
      ],
      "ends": "Expectation lies in [a,b]."
    }
  },
  {
    "id": "c.prob.7.2.1",
    "sec": "7.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Expectation of a sum: linearity",
    "oneLine": "Expectation is additive and homogeneous; independence is not required.",
    "statement": "If $X_1,\\ldots,X_n$ are integrable and $a_1,\\ldots,a_n$ are constants, then $E[\\sum_i a_iX_i]=\\sum_i a_iE[X_i]$. In particular, $E[X+Y]=E[X]+E[Y]$, whether or not X and Y are independent.",
    "intuition": "If a trip has a walking part and a bus part, average total time is average walking time plus average bus time. This remains true even if a missed connection makes the two parts related.",
    "needs": [],
    "traps": [
      "Do not impose independence for expectation of a sum. Independence is needed for many variance formulas, not linearity."
    ],
    "cards": [
      {
        "q": "State linearity of expectation and its independence requirement.",
        "a": "For integrable $X_i$, $E[\\sum_i a_iX_i]=\\sum_i a_iE[X_i]$; no independence assumption is needed.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.2, Proposition 2.1 and Eq. (2.2), PDF pp. 310–311.",
    "proof": {
      "idea": "Use the joint expectation formula and distribute the finite sum.",
      "why": "Every summand is integrated against the same joint law; summing first or last gives the same result.",
      "rungs": [
        {
          "why": "In the discrete case, expand and exchange finite sums.",
          "m": "$E[\\sum_i a_iX_i]=\\sum_\\omega(\\sum_i a_iX_i(\\omega))p(\\omega)$",
          "meaning": "The inner sum can be distributed term by term."
        },
        {
          "why": "Collect each variable’s expectation.",
          "m": "$=\\sum_i a_i\\sum_\\omega X_i(\\omega)p(\\omega)=\\sum_i a_iE[X_i]$",
          "meaning": "Each term is exactly its own marginal expectation."
        }
      ],
      "ends": "Linearity holds for any integrable variables, independent or dependent."
    }
  },
  {
    "id": "c.prob.7.2.2",
    "sec": "7.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Expectation of a function of a pair",
    "oneLine": "The expected value of g(X,Y) is computed from the joint law, not by assuming independence.",
    "statement": "For jointly discrete $(X,Y)$ with pmf $p(x,y)$, $E[g(X,Y)]=\\sum_y\\sum_xg(x,y)p(x,y)$. For jointly continuous variables with joint density $f(x,y)$, $E[g(X,Y)]=\\int\\int g(x,y)f(x,y)\\,dx\\,dy$, when the expectation exists.",
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
      "idea": "Use the joint law and the definition of expectation.",
      "why": "The joint pmf or density weights every pair by its probability, so summing/integrating g over pairs is exactly its expectation.",
      "rungs": [
        {
          "why": "Partition by possible pairs (x,y).",
          "m": "$E[g(X,Y)]=\\sum_y\\sum_xg(x,y)p(x,y)$",
          "meaning": "Each pair contributes its value times its joint probability."
        },
        {
          "why": "For a density, replace probability masses by density elements.",
          "m": "$E[g(X,Y)]=\\int\\int g(x,y)f_{X,Y}(x,y)\\,dx\\,dy$",
          "meaning": "The same expectation definition becomes a double integral."
        }
      ],
      "ends": "Expectation of a function is computed against the joint distribution."
    }
  },
  {
    "id": "c.prob.7.3.1",
    "sec": "7.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Indicator method for the number of events",
    "oneLine": "Represent a count by a sum of indicators; its mean is the sum of event probabilities.",
    "statement": "For events $A_1,\\ldots,A_n$, let $I_i=1$ on $A_i$ and 0 otherwise, and let $X=\\sum_iI_i$, the number of events that occur. Then $E[X]=\\sum_iP(A_i)$, with no independence condition.",
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
      "idea": "Express the count as a sum of indicators and apply linearity.",
      "why": "For each outcome, the number of occurring events equals the sum of their 0–1 indicators.",
      "rungs": [
        {
          "why": "Define one indicator for each event.",
          "m": "$I_i=\\mathbf1_{A_i},\\qquad X=\\sum_{i=1}^nI_i$",
          "meaning": "This identity holds outcome by outcome."
        },
        {
          "why": "Use $E[I_i]=P(A_i)$ and linearity.",
          "m": "$E[X]=\\sum_iE[I_i]=\\sum_iP(A_i)$",
          "meaning": "Each indicator’s expectation is its event probability."
        }
      ],
      "ends": "The expected count is the sum of event probabilities."
    }
  },
  {
    "id": "c.prob.7.3.2",
    "sec": "7.3",
    "kind": "theorem",
    "tier": "extra",
    "title": "Factorial moments of an event count",
    "oneLine": "Joint event probabilities determine the factorial moments of a count.",
    "statement": "For $X=\\sum_{i=1}^n\\mathbf1_{A_i}$ and integer $k\\ge1$, $(X)_k=X(X-1)\\cdots(X-k+1)$ satisfies $E[(X)_k]=k!\\sum_{i_1<\\cdots<i_k}P(A_{i_1}\\cap\\cdots\\cap A_{i_k})$. For $k=2$, $E[X^2]=E[X]+2\\sum_{i<j}P(A_i\\cap A_j)$ and $\\operatorname{Var}(X)=E[X^2]-E[X]^2$.",
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
      "idea": "Count ordered selections among the events that occur.",
      "why": "The falling factorial counts ordered k-tuples of distinct successes.",
      "rungs": [
        {
          "why": "For each fixed outcome with X occurring events, count ordered k-tuples.",
          "m": "$(X)_k=k!\\binom Xk$",
          "meaning": "Every k-subset of occurring events has k! orders."
        },
        {
          "why": "Write the subset count as a sum of intersection indicators and take expectations.",
          "m": "$E[(X)_k]=k!\\sum_{i_1<\\cdots<i_k}E[\\mathbf1_{A_{i_1}}\\cdots\\mathbf1_{A_{i_k}}]$",
          "meaning": "The product indicator equals one exactly when all k events occur."
        },
        {
          "why": "Replace each product expectation by its intersection probability.",
          "m": "$=k!\\sum_{i_1<\\cdots<i_k}P(A_{i_1}\\cap\\cdots\\cap A_{i_k})$",
          "meaning": "This gives the factorial moment formula."
        }
      ],
      "ends": "The pair case gives the second-moment and variance identities."
    }
  },
  {
    "id": "c.prob.7.4.1",
    "sec": "7.4",
    "kind": "definition",
    "tier": "core",
    "title": "Covariance and correlation",
    "oneLine": "Covariance measures centered joint variation; correlation standardizes it.",
    "statement": "For finite second moments, $\\operatorname{Cov}(X,Y)=E[(X-E[X])(Y-E[Y])]=E[XY]-E[X]E[Y]$. If both variances are positive, $\\rho(X,Y)=\\operatorname{Cov}(X,Y)/(\\sigma_X\\sigma_Y)$ and $-1\\le\\rho\\le1$. Independence implies zero covariance, but zero covariance alone does not imply independence.",
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
    "provenance": "Ross, 10e, §7.4, definition and Eq. (4.2), PDF pp. 331, 334."
  },
  {
    "id": "c.prob.7.4.2",
    "sec": "7.4",
    "kind": "theorem",
    "tier": "core",
    "title": "Variance of a sum",
    "oneLine": "The variance of a sum includes every pairwise covariance; independence removes the cross terms.",
    "statement": "For finite second moments, $\\operatorname{Var}(\\sum_{i=1}^nX_i)=\\sum_i\\operatorname{Var}(X_i)+2\\sum_{i<j}\\operatorname{Cov}(X_i,X_j)$. If the variables are pairwise uncorrelated, this reduces to the sum of variances; independence is sufficient for that reduction.",
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
      "idea": "Expand the square of the centered sum.",
      "why": "Each cross term is exactly twice a covariance when unordered pairs are used.",
      "rungs": [
        {
          "why": "Center each summand and expand.",
          "m": "$\\operatorname{Var}(\\sum_iX_i)=E[(\\sum_i(X_i-E[X_i]))^2]$",
          "meaning": "Variance is the second moment of the centered sum."
        },
        {
          "why": "Separate diagonal and off-diagonal products.",
          "m": "$=\\sum_i\\operatorname{Var}(X_i)+2\\sum_{i<j}E[(X_i-E[X_i])(X_j-E[X_j])]$",
          "meaning": "Each unordered pair occurs twice in the full double sum."
        },
        {
          "why": "Recognize the cross terms.",
          "m": "$=\\sum_i\\operatorname{Var}(X_i)+2\\sum_{i<j}\\operatorname{Cov}(X_i,X_j)$",
          "meaning": "The formula follows directly from the definition."
        }
      ],
      "ends": "If covariances vanish, variance adds."
    }
  },
  {
    "id": "c.prob.7.5.1",
    "sec": "7.5",
    "kind": "definition",
    "tier": "core",
    "title": "Conditional expectation given a random variable",
    "oneLine": "Condition on Y by taking the mean under the conditional distribution at each Y value.",
    "statement": "For discrete X,Y and values y with $P(Y=y)>0$, $E[X\\mid Y=y]=\\sum_xxP(X=x\\mid Y=y)$. In the density case, $E[X\\mid Y=y]=\\int x f_{X\\mid Y}(x\\mid y)dx$ where defined. The random variable $E[X\\mid Y]$ takes this conditional mean at the realized Y.",
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
    "provenance": "Ross, 10e, §7.5.1, definitions, PDF pp. 336–337."
  },
  {
    "id": "c.prob.7.5.2",
    "sec": "7.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Law of total expectation",
    "oneLine": "Average the conditional means over the conditioning variable to recover the unconditional mean.",
    "statement": "If X is integrable, $E[X]=E[E[X\\mid Y]]$. In the discrete case this is $\\sum_y E[X\\mid Y=y]P(Y=y)$; in the continuous case it is the corresponding integral against the law of Y.",
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
      "idea": "Average the conditional mean using the marginal distribution of Y.",
      "why": "The joint law factors into a conditional law of X given Y and the marginal law of Y.",
      "rungs": [
        {
          "why": "For discrete X,Y, substitute the conditional pmf.",
          "m": "$\\sum_yE[X\\mid Y=y]P(Y=y)=\\sum_y\\sum_xxP(X=x\\mid Y=y)P(Y=y)$",
          "meaning": "Each weight converts a conditional probability into a joint probability."
        },
        {
          "why": "Sum the joint probabilities over y.",
          "m": "$=\\sum_xx\\sum_yP(X=x,Y=y)=\\sum_xxP(X=x)$",
          "meaning": "The inner sum is the marginal pmf of X."
        }
      ],
      "ends": "The same result holds by integrating in continuous and general cases."
    }
  },
  {
    "id": "c.prob.7.5.3",
    "sec": "7.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Law of total variance",
    "oneLine": "Total variance is average within-group variance plus variance between group means.",
    "statement": "For $E[X^2]<\\infty$, define the conditional variance by $\\operatorname{Var}(X\\mid Y)=E[(X-E[X\\mid Y])^2\\mid Y]=E[X^2\\mid Y]-(E[X\\mid Y])^2$. Then $\\operatorname{Var}(X)=E[\\operatorname{Var}(X\\mid Y)]+\\operatorname{Var}(E[X\\mid Y])$.",
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
      "idea": "Expand conditional variance and use the tower property.",
      "why": "The formula separates the second moment into conditional spread and spread of conditional means.",
      "rungs": [
        {
          "why": "Use $\\operatorname{Var}(X\\mid Y)=E[X^2\\mid Y]-(E[X\\mid Y])^2$.",
          "m": "$E[\\operatorname{Var}(X\\mid Y)]=E[X^2]-E[(E[X\\mid Y])^2]$",
          "meaning": "The tower property turns the first term into $E[X^2]$."
        },
        {
          "why": "Expand variance of the conditional mean.",
          "m": "$\\operatorname{Var}(E[X\\mid Y])=E[(E[X\\mid Y])^2]-(E[X])^2$",
          "meaning": "The mean of the conditional mean is $E[X]$."
        },
        {
          "why": "Add and cancel the squared conditional-mean term.",
          "m": "$E[X^2]-(E[X])^2=\\operatorname{Var}(X)$",
          "meaning": "The two components reconstruct total variance."
        }
      ],
      "ends": "Within-condition and between-condition variance sum to total variance."
    }
  },
  {
    "id": "c.prob.7.6.1",
    "sec": "7.6",
    "kind": "theorem",
    "tier": "core",
    "title": "Conditional mean minimizes mean squared prediction error",
    "oneLine": "Among predictors based on X, the conditional mean $E[Y\\mid X]$ uniquely minimizes squared-error risk up to almost-sure equality.",
    "statement": "For square-integrable Y and any measurable predictor g(X), $E[(Y-g(X))^2]=E[\\operatorname{Var}(Y\\mid X)]+E[(E[Y\\mid X]-g(X))^2]$. Thus the minimum is attained by $g(X)=E[Y\\mid X]$.",
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
      "idea": "Condition on X and expand around the conditional mean.",
      "why": "The cross term vanishes conditionally because the residual has conditional mean zero.",
      "rungs": [
        {
          "why": "Write error as residual plus conditional-mean bias.",
          "m": "$Y-g(X)=(Y-E[Y\\mid X])+(E[Y\\mid X]-g(X))$",
          "meaning": "The second term is determined by X."
        },
        {
          "why": "Square and condition on X.",
          "m": "$E[(Y-g(X))^2\\mid X]=\\operatorname{Var}(Y\\mid X)+(E[Y\\mid X]-g(X))^2$",
          "meaning": "The mixed term is zero since $E[Y-E[Y\\mid X]\\mid X]=0$."
        },
        {
          "why": "Take expectations.",
          "m": "$E[(Y-g(X))^2]=E[\\operatorname{Var}(Y\\mid X)]+E[(E[Y\\mid X]-g(X))^2]$",
          "meaning": "The final term is nonnegative and vanishes at the conditional mean."
        }
      ],
      "ends": "Conditional expectation is the minimum mean-square predictor."
    }
  },
  {
    "id": "c.prob.7.6.2",
    "sec": "7.6",
    "kind": "theorem",
    "tier": "extra",
    "title": "Best linear predictor",
    "oneLine": "The best affine predictor of Y from X uses the regression slope Cov(X,Y)/Var(X).",
    "statement": "If $0<\\operatorname{Var}(X)<\\infty$ and $Y$ is square-integrable, the minimizer of $E[(Y-a-bX)^2]$ is $b=\\operatorname{Cov}(X,Y)/\\operatorname{Var}(X)$ and $a=E[Y]-bE[X]$. Its error is $\\operatorname{Var}(Y)(1-\\rho^2)$ when both variances are positive.",
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
      "idea": "Minimize the quadratic prediction error.",
      "why": "The zero-derivative equations force the residual to have zero mean and zero covariance with X.",
      "rungs": [
        {
          "why": "Differentiate over the intercept a.",
          "m": "$E[Y-a-bX]=0$",
          "meaning": "This implies a=E[Y]−bE[X]."
        },
        {
          "why": "Differentiate over b and use the first equation.",
          "m": "$E[X(Y-a-bX)]=0,\\quad b=\\operatorname{Cov}(X,Y)/\\operatorname{Var}(X)$",
          "meaning": "Positive variance makes the unique slope well-defined."
        }
      ],
      "ends": "The affine least-squares predictor has the stated slope and intercept."
    }
  },
  {
    "id": "c.prob.7.7.1",
    "sec": "7.7",
    "kind": "definition",
    "tier": "extra",
    "title": "Moment generating function",
    "oneLine": "The MGF is $M_X(t)=E[e^{tX}]$ where finite; derivatives at zero yield moments.",
    "statement": "For t in a neighborhood where the expectation is finite, $M_X(t)=E[e^{tX}]$. When differentiation and expectation can be interchanged, $M_X^{(k)}(0)=E[X^k]$. If an MGF exists on an open interval containing zero, it uniquely determines the distribution.",
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
    "provenance": "Ross, 10e, §7.7, definition and uniqueness discussion, PDF pp. 353, 355."
  },
  {
    "id": "c.prob.7.7.2",
    "sec": "7.7",
    "kind": "theorem",
    "tier": "extra",
    "title": "MGF of a sum of independent variables",
    "oneLine": "Independence turns the MGF of a sum into a product.",
    "statement": "For independent $X,Y$ with MGFs finite at t, $M_{X+Y}(t)=M_X(t)M_Y(t)$. Thus, when uniqueness applies, the distribution of a sum can be identified by matching the product MGF.",
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
      "idea": "Factor the exponential and use independence.",
      "why": "Independence gives factorization of expectations for functions of separate variables.",
      "rungs": [
        {
          "why": "Rewrite the exponential of the sum.",
          "m": "$e^{t(X+Y)}=e^{tX}e^{tY}$",
          "meaning": "The algebra separates the two random variables."
        },
        {
          "why": "Apply independence.",
          "m": "$E[e^{tX}e^{tY}]=E[e^{tX}]E[e^{tY}]$",
          "meaning": "This is the factorization property of independent variables."
        }
      ],
      "ends": "The MGF of the independent sum is the product."
    }
  },
  {
    "id": "c.prob.7.7.3",
    "sec": "7.7",
    "kind": "theorem",
    "tier": "extra",
    "title": "MGF formula for a random sum",
    "oneLine": "For an independent count N and iid summands, condition on N to obtain the random-sum MGF.",
    "statement": "Let $N$ be nonnegative integer-valued, independent of iid $X_i$ with MGF $M_X(t)$. For $S=\\sum_{i=1}^N X_i$, $M_S(t)=E[(M_X(t))^N]=M_N(\\log M_X(t))$ where defined. If moments are finite, $E[S]=E[N]E[X]$ and $\\operatorname{Var}(S)=E[N]\\operatorname{Var}(X)+(E[X])^2\\operatorname{Var}(N)$.",
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
      "idea": "Condition on the random number of summands.",
      "why": "Given N=n, independence makes the sum MGF the nth power; averaging over N gives the composition.",
      "rungs": [
        {
          "why": "Condition on N.",
          "m": "$E[e^{tS}mid N=n]=M_X(t)^n$",
          "meaning": "The summands are iid and independent of N."
        },
        {
          "why": "Average over the distribution of N.",
          "m": "$M_S(t)=E[M_X(t)^N]=M_N(\\log M_X(t))$",
          "meaning": "The identity holds wherever these expectations are finite."
        }
      ],
      "ends": "The random-sum MGF is a composition of MGFs."
    }
  },
  {
    "id": "c.prob.7.8.1",
    "sec": "7.8",
    "kind": "theorem",
    "tier": "extra",
    "title": "Linear combinations of jointly normal variables",
    "oneLine": "Any linear combination of a multivariate normal vector is normal.",
    "statement": "If $Z_1,\\ldots,Z_n$ are independent standard normals and $X_j=a_j+\\sum_i b_{ij}Z_i$, then the vector X is multivariate normal. Every linear combination $c^TX$ is normal; its mean and variance are $c^T\\mu$ and $c^T\\Sigma c$.",
    "intuition": "A jointly normal collection is one bell-shaped cloud, possibly tilted. Adding coordinates with fixed weights makes another bell-shaped quantity.",
    "needs": [
      "c.prob.7.7.1"
    ],
    "traps": [
      "Normal marginals alone do not imply a jointly normal vector; the multivariate-normal assumption is essential."
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
      "idea": "Write a linear combination as a sum of independent normal variables.",
      "why": "The MGF of independent normal summands multiplies to the MGF of a normal variable.",
      "rungs": [
        {
          "why": "Use independence to factor the MGF.",
          "m": "$M_{\\sum_i a_iX_i}(t)=\\prod_iM_{X_i}(a_it)$",
          "meaning": "Each scaled normal summand has a normal MGF."
        },
        {
          "why": "Collect the exponents.",
          "m": "$M(t)=\\exp\\{t\\sum_i a_i\\mu_i+\\tfrac12t^2\\sum_{i,j}a_ia_j\\operatorname{Cov}(X_i,X_j)\\}$",
          "meaning": "This is the MGF of a normal law with the resulting mean and variance."
        }
      ],
      "ends": "Every linear combination of a jointly normal vector is normal."
    }
  },
  {
    "id": "c.prob.7.8.2",
    "sec": "7.8",
    "kind": "theorem",
    "tier": "extra",
    "title": "Normal sample mean and sample variance",
    "oneLine": "For iid normal data, the sample mean and unbiased sample variance are independent with known scaled laws.",
    "statement": "If $X_i\\overset{iid}{\\sim}N(\\mu,\\sigma^2)$, define $\\bar X=n^{-1}\\sum_iX_i$ and $S^2=(n-1)^{-1}\\sum_i(X_i-\\bar X)^2$. Then $\\bar X\\sim N(\\mu,\\sigma^2/n)$, $(n-1)S^2/\\sigma^2\\sim\\chi^2_{n-1}$, and $\\bar X$ and $S^2$ are independent.",
    "intuition": "For normal test scores, the class average points along one direction and deviations from that average point sideways. Those parts are independent, which is why the t and chi-square formulas work.",
    "needs": [
      "c.prob.7.4.2",
      "c.prob.7.7.2"
    ],
    "traps": [
      "The independence and chi-square conclusion require a normal sample. For a general iid sample, the mean and sample variance are not generally independent."
    ],
    "cards": [
      {
        "q": "For an iid normal sample, give the law of $\\bar X$ and the scaled law of $S^2$.",
        "a": "$\\bar X\\sim N(\\mu,\\sigma^2/n)$ and $(n-1)S^2/\\sigma^2\\sim\\chi^2_{n-1}$; they are independent.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §7.8.2 and Proposition 8.1, PDF pp. 362–363.",
    "proof": {
      "idea": "Rotate the standardized normal sample into mean and residual coordinates.",
      "why": "Orthogonal transformations preserve independent standard-normal coordinates; the mean direction is orthogonal to the n−1 dimensional residual space.",
      "rungs": [
        {
          "why": "Project onto the all-ones direction.",
          "m": "$\\bar X\\sim N(\\mu,\\sigma^2/n)$",
          "meaning": "The projection has variance σ²/n."
        },
        {
          "why": "Project onto the orthogonal residual subspace.",
          "m": "$(n-1)S^2/\\sigma^2=\\sum_{j=1}^{n-1}Z_j^2\\sim\\chi^2_{n-1}$",
          "meaning": "The residual coordinates are independent standard normals."
        },
        {
          "why": "Use orthogonality of Gaussian coordinates.",
          "m": "$\\bar X\\mathrel{\\perp\\!\\!\\!\\perp}S^2$",
          "meaning": "Uncorrelated orthogonal Gaussian projections are independent."
        }
      ],
      "ends": "The classical sample mean/variance laws and independence follow."
    }
  },
  {
    "id": "c.prob.7.9.1",
    "sec": "7.9",
    "kind": "definition",
    "tier": "extra",
    "title": "Expectation with respect to a distribution function",
    "oneLine": "The Lebesgue–Stieltjes integral defines expectation uniformly for discrete, continuous, and mixed laws.",
    "statement": "For a random variable with cdf F, when the positive and negative parts have finite integrals, $E[g(X)]=\\int_{-\\infty}^{\\infty}g(x)\\,dF(x)$. This reduces to $\\sum_xg(x)p(x)$ for a discrete law and $\\int g(x)f(x)dx$ for a density.",
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
    "provenance": "Ross, 10e, §7.9, general definition, PDF pp. 364–365."
  }
]
);
