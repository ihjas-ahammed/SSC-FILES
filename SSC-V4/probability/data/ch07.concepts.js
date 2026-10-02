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
      "idea": "Subtract the lower bound. What remains cannot be negative, so its average cannot be negative either.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "Subtract the lower bound. What remains cannot be negative, so its average cannot be negative either.",
          "m": "$E[X-a]=E[X]-a\\ge0$",
          "meaning": "Moving the fixed number a outside the average proves the lower bound."
        },
        {
          "why": "Subtract X from the upper bound and use the same nonnegative-average argument.",
          "m": "$E[b-X]=b-E[X]\\ge0$",
          "meaning": "Rearranging proves the upper bound."
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
      "idea": "Start with the ordinary weighted average of the total for each possible outcome. Here omega is just a label for an outcome.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "Start with the ordinary weighted average of the total for each possible outcome. Here omega is just a label for an outcome.",
          "m": "$E[\\sum_i a_iX_i]=\\sum_\\omega(\\sum_i a_iX_i(\\omega))p(\\omega)$",
          "meaning": "Every possible outcome is weighted by its own probability."
        },
        {
          "why": "Distribute the finite sum: collect all contributions from the first variable, then the second, and so on.",
          "m": "$=\\sum_i a_i\\sum_\\omega X_i(\\omega)p(\\omega)=\\sum_i a_iE[X_i]$",
          "meaning": "Each collected weighted average is exactly the mean of that variable. The density proof uses the same distribution rule inside an integral."
        }
      ],
      "ends": "Linearity holds for any having a finite absolute average variables, independent or dependent."
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
      "idea": "For separate possible pairs, group together all pairs that give the same value of g.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "For separate possible pairs, group together all pairs that give the same value of g.",
          "m": "$E[g(X,Y)]=\\sum_y\\sum_xg(x,y)p(x,y)$",
          "meaning": "Adding those group probabilities recovers the average of g. The displayed sum keeps the pairs ungrouped but gives the same total."
        },
        {
          "why": "For a nonnegative g, average its tail indicator first, then change the order of the nonnegative integrals.",
          "m": "$E[g(X,Y)]=\\int\\int g(x,y)f_{X,Y}(x,y)\\,dx\\,dy$",
          "meaning": "The continuous version is rigorous because g(x,y) equals the integral of 1 from zero up to g(x,y). For a signed having a finite absolute average g, apply this argument to its positive and negative parts separately."
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
      "idea": "Put one switch next to each event and add the switches.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "Put one switch next to each event and add the switches.",
          "m": "$I_i=\\mathbf1_{A_i},\\qquad X=\\sum_{i=1}^nI_i$",
          "meaning": "Each switch is one for a success and zero otherwise, so their sum really is the count."
        },
        {
          "why": "The mean of a switch is the chance of its event. Apply the add-the-means rule.",
          "m": "$E[X]=\\sum_iE[I_i]=\\sum_iP(A_i)$",
          "meaning": "This uses no assumption about events being independent."
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
      "idea": "If X events happened, choosing k of them and then ordering them gives the falling product.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "If X events happened, choosing k of them and then ordering them gives the falling product.",
          "m": "$(X)_k=k!\\binom Xk$",
          "meaning": "There are k! different orders for each chosen group."
        },
        {
          "why": "A chosen group is successful exactly when the product of its switches is one. Add these products and average.",
          "m": "$E[(X)_k]=k!\\sum_{i_1<\\cdots<i_k}E[\\mathbf1_{A_{i_1}}\\cdots\\mathbf1_{A_{i_k}}]$",
          "meaning": "Each group contributes once before the factor k! accounts for all its orders."
        },
        {
          "why": "The average of the product switch is the chance that every event in its group happens.",
          "m": "$=k!\\sum_{i_1<\\cdots<i_k}P(A_{i_1}\\cap\\cdots\\cap A_{i_k})$",
          "meaning": "The formula therefore needs joint probabilities, which may reflect dependence."
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
    "provenance": "Ross, 10e, §7.4, definition and Eq. (4.2), PDF pp. 331, 334."
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
      "idea": "Subtract each variable's average before adding. The average of the resulting sum is zero.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "Subtract each variable's average before adding. The average of the resulting sum is zero.",
          "m": "$\\operatorname{Var}(\\sum_iX_i)=E[(\\sum_i(X_i-E[X_i]))^2]$",
          "meaning": "The variance of the total is the average square of these combined departures."
        },
        {
          "why": "Expand the square just as you would expand (a+b)^2.",
          "m": "$=\\sum_i\\operatorname{Var}(X_i)+2\\sum_{i<j}E[(X_i-E[X_i])(X_j-E[X_j])]$",
          "meaning": "Each squared departure gives its own variance. Each product of two different departures appears twice."
        },
        {
          "why": "Each cross-product average is the covariance of that pair.",
          "m": "$=\\sum_i\\operatorname{Var}(X_i)+2\\sum_{i<j}\\operatorname{Cov}(X_i,X_j)$",
          "meaning": "This explains both the covariance correction and the simpler formula when every such correction is zero."
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
    "provenance": "Ross, 10e, §7.5.1, definitions, PDF pp. 336–337."
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
      "idea": "Write out the average within each Y-group, then weight it by the chance of that group.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "Write out the average within each Y-group, then weight it by the chance of that group.",
          "m": "$\\sum_yE[X\\mid Y=y]P(Y=y)=\\sum_y\\sum_xxP(X=x\\mid Y=y)P(Y=y)$",
          "meaning": "Conditional probability times the chance of the conditioning group is joint probability."
        },
        {
          "why": "For a fixed x, add the joint probabilities across all the Y-groups.",
          "m": "$=\\sum_xx\\sum_yP(X=x,Y=y)=\\sum_xxP(X=x)$",
          "meaning": "This gives the ordinary probability that X equals x. We have recovered the usual average of X."
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
      "idea": "Within each group, variance is its mean square minus its squared mean. Average that identity across groups.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "Within each group, variance is its mean square minus its squared mean. Average that identity across groups.",
          "m": "$E[\\operatorname{Var}(X\\mid Y)]=E[X^2]-E[(E[X\\mid Y])^2]$",
          "meaning": "Averaging the group means of X squared gives the overall mean of X squared."
        },
        {
          "why": "Use the same variance identity on the group means themselves.",
          "m": "$\\operatorname{Var}(E[X\\mid Y])=E[(E[X\\mid Y])^2]-(E[X])^2$",
          "meaning": "Their overall average is the average of X by the total-expectation rule."
        },
        {
          "why": "Add the two identities. Their middle terms cancel.",
          "m": "$E[X^2]-(E[X])^2=\\operatorname{Var}(X)$",
          "meaning": "What remains is the ordinary overall variance, proving the two-part split."
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
      "idea": "Split your prediction error at the conditional mean.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "Split your prediction error at the conditional mean.",
          "m": "$Y-g(X)=(Y-E[Y\\mid X])+(E[Y\\mid X]-g(X))$",
          "meaning": "The first piece is random variation around the group average; the second is how far your guess is from that average."
        },
        {
          "why": "Square both pieces and average within a fixed X-group.",
          "m": "$E[(Y-g(X))^2\\mid X]=\\operatorname{Var}(Y\\mid X)+(E[Y\\mid X]-g(X))^2$",
          "meaning": "The cross term is zero: within this group the first piece has mean zero and the second piece is a fixed number."
        },
        {
          "why": "Average the group errors.",
          "m": "$E[(Y-g(X))^2]=E[\\operatorname{Var}(Y\\mid X)]+E[(E[Y\\mid X]-g(X))^2]$",
          "meaning": "The extra error from missing the conditional mean is an average of squares, so it can never improve the prediction."
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
      "idea": "Choose the intercept so that the average prediction error is zero. This follows by differentiating the error quadratic in a.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "Choose the intercept so that the average prediction error is zero. This follows by differentiating the error quadratic in a.",
          "m": "$E[Y-a-bX]=0$",
          "meaning": "The fitted line passes through the point of the two averages."
        },
        {
          "why": "Differentiate in the slope, then substitute that intercept.",
          "m": "$E[X(Y-a-bX)]=0,\\quad b=\\operatorname{Cov}(X,Y)/\\operatorname{Var}(X)$",
          "meaning": "Solving gives covariance divided by predictor variance. The error is a convex quadratic, so these equations give its minimum."
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
    "provenance": "Ross, 10e, §7.7, definition and uniqueness discussion, PDF pp. 353, 355."
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
      "idea": "Use the exponent rule that an exponential of a sum is a product.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "Use the exponent rule that an exponential of a sum is a product.",
          "m": "$e^{t(X+Y)}=e^{tX}e^{tY}$",
          "meaning": "This separates the expression into one factor using X and another using Y."
        },
        {
          "why": "Because X and Y are independent, the average of these two factors equals the product of their averages.",
          "m": "$E[e^{tX}e^{tY}]=E[e^{tX}]E[e^{tY}]$",
          "meaning": "Those averages are precisely the two individual MGFs."
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
      "idea": "Temporarily suppose the count is the fixed value n. Then use the MGF product rule for n independent terms.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "Temporarily suppose the count is the fixed value n. Then use the MGF product rule for n independent terms.",
          "m": "$E[e^{tS}\\mid N=n]=M_X(t)^n$",
          "meaning": "Independence of N ensures that learning its value does not change any term's distribution."
        },
        {
          "why": "Average these fixed-count answers using the probabilities of the different counts.",
          "m": "$M_S(t)=E[M_X(t)^N]=M_N(\\log M_X(t))$",
          "meaning": "The logarithm is simply a way of rewriting M_X(t) to the power N as an exponential for the count MGF."
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
      "idea": "Rewrite the weighted sum in terms of the independent standard normal ingredients Z, rather than assuming the X variables are independent.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "Rewrite the weighted sum in terms of the independent standard normal ingredients Z, rather than assuming the X variables are independent.",
          "m": "$X_j=\\mu_j+\\sum_k b_{kj}Z_k,\\quad \\sum_jc_jX_j=\\sum_jc_j\\mu_j+\\sum_k(\\sum_jc_jb_{kj})Z_k$",
          "meaning": "A weighted sum of the X variables may share ingredients. The Z variables are the ones whose MGFs can be multiplied."
        },
        {
          "why": "Collect the linear and quadratic terms in that product's exponent.",
          "m": "$M(t)=\\exp\\{t\\sum_j c_j\\mu_j+\\tfrac12t^2\\sum_k(\\sum_jc_jb_{kj})^2\\},\\quad \\operatorname{Var}(\\sum_jc_jX_j)=\\sum_{i,j}c_ic_j\\operatorname{Cov}(X_i,X_j)$",
          "meaning": "The result has the form of a normal MGF; its quadratic coefficient is the variance, including all covariance terms."
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
      "idea": "The standardized average is the component of the sample in the all-equal direction.",
      "why": "Each step uses the definition of an average or an explicitly stated property. Read the explanation beside each formula.",
      "rungs": [
        {
          "why": "The standardized average is the component of the sample in the all-equal direction.",
          "m": "$\\bar X\\sim N(\\mu,\\sigma^2/n)$",
          "meaning": "Adding independent normals shows that the average has the stated mean and variance."
        },
        {
          "why": "Choose n-1 perpendicular directions for the differences from the average. Express the standardized sample in this orthogonal coordinate system.",
          "m": "$(n-1)S^2/\\sigma^2=\\sum_{j=1}^{n-1}Z_j^2\\sim\\chi^2_{n-1}$",
          "meaning": "The joint standard-normal density depends only on the sum of coordinate squares, which rotation preserves. Thus the new coordinates remain independent standard normals, and the residual sum of squares is chi-square."
        },
        {
          "why": "The average coordinate is independent of all the perpendicular residual coordinates.",
          "m": "$\\bar X\\mathrel{\\perp\\!\\!\\!\\perp}S^2$",
          "meaning": "The sample variance is a function of those residual coordinates only, so it is independent of the average."
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
    "provenance": "Ross, 10e, §7.9, general definition, PDF pp. 364–365."
  }
]
);
