var PYQ = typeof PYQ !== 'undefined' ? PYQ : [];
PYQ.push(...
[
  {
    "id": "p.prob.DA.2024.11",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2024,
    "qno": 11,
    "type": "MCQ",
    "marks": 1,
    "neg": -0.3333333333333333,
    "sec": "5.2",
    "title": "Poisson and standard normal moments",
    "prompt": "Which option correctly evaluates the two claims: (i) a Poisson variable has equal mean and variance; (ii) a standard normal has mean 0 and variance 1?",
    "solution": "For Poisson($\\lambda$), both mean and variance are $\\lambda$. By definition $Z\\sim N(0,1)$ has mean 0 and variance 1, so both statements hold.",
    "tested": "Recognizing named-law moments.",
    "trap": "Do not confuse the normal variance with its standard deviation, or mistake the Poisson parameterization.",
    "provenance": "GATE 2024 DA master question paper Q11; official final answer key Q11.",
    "options": [
      {
        "k": "A",
        "t": "Both claims are true"
      },
      {
        "k": "B",
        "t": "Only (i) is true"
      },
      {
        "k": "C",
        "t": "Only (ii) is true"
      },
      {
        "k": "D",
        "t": "Both are false"
      }
    ],
    "answer": "A"
  },
  {
    "id": "p.prob.DA.2024.12",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2024,
    "qno": 12,
    "type": "MCQ",
    "marks": 1,
    "neg": -0.3333333333333333,
    "sec": "2.3",
    "title": "Mutually incompatible coin-count events",
    "prompt": "Three independent fair coins are tossed. Let T mean at least two heads and S mean at least two tails. Find $P(T\\cap S)$.",
    "solution": "With three tosses, at least two heads and at least two tails would require at least four tosses. The events are disjoint, so the intersection probability is zero.",
    "tested": "Intersections and event logic.",
    "trap": "Treating the two events as independent, despite their mutually incompatible counts.",
    "provenance": "GATE 2024 DA master question paper Q12; official final answer key Q12.",
    "options": [
      {
        "k": "A",
        "t": "$0$"
      },
      {
        "k": "B",
        "t": "$1/2$"
      },
      {
        "k": "C",
        "t": "$1/4$"
      },
      {
        "k": "D",
        "t": "$1$"
      }
    ],
    "answer": "A"
  },
  {
    "id": "p.prob.DA.2024.24",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2024,
    "qno": 24,
    "type": "MCQ",
    "marks": 1,
    "neg": -0.3333333333333333,
    "sec": "3.4",
    "title": "Collider dependence in a Bayesian network",
    "prompt": "The joint law factors as $P(U)P(V)P(W\\mid U,V)P(X\\mid W)P(Y\\mid W)$. Which claimed conditional independence is false?",
    "solution": "Given W, the factors for X and Y separate and neither depends further on U,V; hence X and Y are conditionally independent of the non-descendants U,V given W. But U and V are parents of the common effect W, and conditioning on that collider generally makes them dependent.",
    "tested": "Reading conditional independence from a factorization / collider structure.",
    "trap": "Assuming marginal independence of U,V is preserved after conditioning on their common child W.",
    "provenance": "GATE 2024 DA master question paper Q24; official final answer key Q24.",
    "options": [
      {
        "k": "A",
        "t": "$Y\\perp V\\mid W$"
      },
      {
        "k": "B",
        "t": "$X\\perp U\\mid W$"
      },
      {
        "k": "C",
        "t": "$U\\perp V\\mid W$"
      },
      {
        "k": "D",
        "t": "$X\\perp Y\\mid W$"
      }
    ],
    "answer": "C"
  },
  {
    "id": "p.prob.DA.2024.36",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2024,
    "qno": 36,
    "type": "MCQ",
    "marks": 2,
    "neg": -0.6666666666666666,
    "sec": "4.8",
    "title": "Waiting for two consecutive even die throws",
    "prompt": "A fair die is thrown independently until two consecutive even outcomes occur. Find the expected number of throws.",
    "solution": "Let E be the expected remaining throws with no current even run, and F with one even already observed. From E: $E=1+\\tfrac12E+\\tfrac12F$. From F: $F=1+\\tfrac12E$ (odd resets). Solving gives $E=6$.",
    "tested": "Geometric runs and first-step expectation.",
    "trap": "Using the mean waiting time for two successes without accounting for overlap/reset after an odd result.",
    "provenance": "GATE 2024 DA master question paper Q36; official final answer key Q36.",
    "options": [
      {
        "k": "A",
        "t": "$2$"
      },
      {
        "k": "B",
        "t": "$4$"
      },
      {
        "k": "C",
        "t": "$6$"
      },
      {
        "k": "D",
        "t": "$8$"
      }
    ],
    "answer": "C"
  },
  {
    "id": "p.prob.DA.2024.56",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2024,
    "qno": 56,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "6.1",
    "title": "Probability for independent uniforms",
    "prompt": "Independent $X\\sim\\mathrm{Unif}[1,3]$ and $Y\\sim\\mathrm{Unif}[2,4]$. Find $P(X\\ge Y)$.",
    "solution": "The joint density is $1/4$ on a square of area 4. The event region is $2\\le y\\le x\\le3$, a right triangle of area $1/2$. Thus the probability is $(1/2)/4=1/8=0.125$.",
    "tested": "Geometric integration over joint support.",
    "trap": "Treating the variables as the same uniform law or using the full square as support.",
    "provenance": "GATE 2024 DA master question paper Q56; official final answer key Q56.",
    "answer": {
      "value": 0.125,
      "tol": 0.0005,
      "dp": 3
    }
  },
  {
    "id": "p.prob.DA.2024.57",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2024,
    "qno": 57,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "5.5",
    "title": "Exponential rate from mean and variance",
    "prompt": "An exponential variable with rate $\\lambda$ satisfies $5E[X]=\\operatorname{Var}(X)$. Find $\\lambda$.",
    "solution": "For rate $\\lambda$, $E[X]=1/\\lambda$ and $\\operatorname{Var}(X)=1/\\lambda^2$. The equation $5/\\lambda=1/\\lambda^2$ gives $\\lambda=1/5=0.2$.",
    "tested": "Exponential moments and parameter conventions.",
    "trap": "Using the scale/mean as though it were the rate.",
    "provenance": "GATE 2024 DA master question paper Q57; official final answer key Q57.",
    "answer": {
      "value": 0.2,
      "tol": 0.0005,
      "dp": 1
    }
  },
  {
    "id": "p.prob.DA.2024.58",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2024,
    "qno": 58,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "3.3",
    "title": "Bayes rule with a complemented event",
    "prompt": "Given $P(T^c)=0.6$, $P(S\\mid T)=0.3$, and $P(S\\mid T^c)=0.6$, find $P(T\\mid S)$.",
    "solution": "First $P(T)=0.4$. Total probability gives $P(S)=0.3(0.4)+0.6(0.6)=0.48$. Bayes gives $P(T\\mid S)=0.3(0.4)/0.48=0.25$.",
    "tested": "Total probability and Bayes theorem.",
    "trap": "Forgetting to convert the complement probability to $P(T)=0.4$.",
    "provenance": "GATE 2024 DA master question paper Q58; official final answer key Q58.",
    "answer": {
      "value": 0.25,
      "tol": 0.005,
      "dp": 2
    }
  },
  {
    "id": "p.prob.DA.2024.62",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2024,
    "qno": 62,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "DA.1",
    "title": "Information gain from a binary feature",
    "prompt": "Ten labeled observations have 4 Green and 6 Blue outcomes. A binary feature Pitch splits them into group S: (3 Green, 2 Blue) and group F: (1 Green, 4 Blue). Find the information gain in bits, rounded to two decimals.",
    "solution": "The parent entropy is $H(0.4,0.6)=0.97095$ bits. Both children have size 5: entropies $H(3/5,2/5)=0.97095$ and $H(1/5,4/5)=0.72193$. Weighted child entropy is $0.84644$, so gain is $0.12451\\approx0.12$ bits (within official range 0.12–0.13).",
    "tested": "Entropy reduction for a categorical split.",
    "trap": "Using the unweighted sum of child entropies, or forgetting that logarithms are base 2 for bits.",
    "provenance": "GATE 2024 DA master question paper Q62; official final answer key Q62.",
    "answer": {
      "value": 0.12,
      "tol": 0.005,
      "dp": 2
    }
  },
  {
    "id": "p.prob.DA.2024.64",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2024,
    "qno": 64,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "6.1",
    "title": "Bayesian-network joint probability",
    "prompt": "A network has $P(U=1)=1/2$, $P(V=1\\mid U)=1/2$, $W=U$, and $P(Z=1\\mid V=1,W=1)=1/2$. Find $P(U=1,V=1,W=1,Z=1)$.",
    "solution": "Multiply the factors in the joint assignment: $(1/2)(1/2)(1)(1/2)=1/8=0.125$.",
    "tested": "Joint probability factorization in a Bayesian network.",
    "trap": "Multiplying only the marginal root probabilities and omitting the conditional factor for Z.",
    "provenance": "GATE 2024 DA master question paper Q64; official final answer key Q64.",
    "answer": {
      "value": 0.125,
      "tol": 0.0005,
      "dp": 3
    }
  },
  {
    "id": "p.prob.DA.2024.65",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2024,
    "qno": 65,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "4.5",
    "title": "Covariance of nested coin events",
    "prompt": "Two independent fair coins are tossed. X indicates both are heads; Y indicates at least one head. Find $\\operatorname{Cov}(X,Y)$.",
    "solution": "$XY=1$ exactly when both coins are heads, so $E[XY]=1/4$. Also $E[X]=1/4$ and $E[Y]=3/4$. Therefore covariance is $1/4-(1/4)(3/4)=1/16=0.0625$.",
    "tested": "Indicator covariance from joint events.",
    "trap": "Assuming indicators are independent; X=1 implies Y=1.",
    "provenance": "GATE 2024 DA master question paper Q65; official final answer key Q65.",
    "answer": {
      "value": 0.0625,
      "tol": 0.0005,
      "dp": 3
    }
  },
  {
    "id": "p.prob.DA.2024.27",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2024,
    "qno": 27,
    "type": "MCQ",
    "marks": 1,
    "neg": -0.3333333333333333,
    "sec": "DA.1",
    "title": "Z-score standardization",
    "prompt": "A value 106000 is drawn from data with mean 96000 and standard deviation 21000. What is its z-score, to three decimals?",
    "solution": "The standard score is $(106000-96000)/21000=10/21\\approx0.476$.",
    "tested": "Standardization by the sample mean and standard deviation.",
    "trap": "Subtracting the mean but dividing by the range or maximum instead of the standard deviation.",
    "provenance": "GATE 2024 DA master question paper Q27; official final answer key Q27.",
    "options": [
      {
        "k": "A",
        "t": "0.217"
      },
      {
        "k": "B",
        "t": "0.476"
      },
      {
        "k": "C",
        "t": "0.623"
      },
      {
        "k": "D",
        "t": "2.304"
      }
    ],
    "answer": "B"
  },
  {
    "id": "p.prob.DA.2024.34",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2024,
    "qno": 34,
    "type": "NAT",
    "marks": 1,
    "neg": 0,
    "sec": "DA.1",
    "title": "Updating a sample mean",
    "prompt": "Fifty observations have mean 40. A new observation equal to 142 is added. Find the new mean.",
    "solution": "The old total is $50(40)=2000$. Adding 142 gives 2142, and $2142/51=42$.",
    "tested": "Sufficient-statistic update for a sample mean.",
    "trap": "Averaging 40 and 142 directly rather than updating the total.",
    "provenance": "GATE 2024 DA master question paper Q34; official final answer key Q34.",
    "answer": {
      "value": 42,
      "tol": 0,
      "dp": 0
    }
  },
  {
    "id": "p.prob.DA.2025.11",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 11,
    "type": "MCQ",
    "marks": 1,
    "neg": -0.3333333333333333,
    "sec": "7.1",
    "title": "Tower property of conditional expectation",
    "prompt": "For integrable random variables X and Y, what is $E[E[X\\mid Y]]$?",
    "solution": "The law of total expectation states $E[E[X\\mid Y]]=E[X]$.",
    "tested": "Conditional expectation and its averaging property.",
    "trap": "Treating the conditional expectation, which is a function of Y, as the final answer instead of averaging it.",
    "provenance": "GATE 2025 DA master question paper Q11; official final answer key Q11.",
    "options": [
      {
        "k": "A",
        "t": "$E[X\\mid Y]$"
      },
      {
        "k": "B",
        "t": "$E[X]/E[Y]$"
      },
      {
        "k": "C",
        "t": "$E[X]$"
      },
      {
        "k": "D",
        "t": "$E[Y]$"
      }
    ],
    "answer": "C"
  },
  {
    "id": "p.prob.DA.2025.19",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 19,
    "type": "MCQ",
    "marks": 1,
    "neg": -0.3333333333333333,
    "sec": "5.1",
    "title": "Median from a linear CDF",
    "prompt": "A continuous variable has CDF $F(x)=(x-t)/(4-t)$ for $t\\le x\\le4$, with 0 below t and 1 above 4. If its median is 3, find t.",
    "solution": "The median satisfies $F(3)=1/2$: $(3-t)/(4-t)=1/2$. Thus $6-2t=4-t$, giving $t=2$.",
    "tested": "Median as the half-probability quantile.",
    "trap": "Solving $F(3)=1/2$ without retaining the CDF support and checking the resulting endpoint.",
    "provenance": "GATE 2025 DA master question paper Q19; official final answer key Q19.",
    "options": [
      {
        "k": "A",
        "t": "$2$"
      },
      {
        "k": "B",
        "t": "$1$"
      },
      {
        "k": "C",
        "t": "$-1$"
      },
      {
        "k": "D",
        "t": "$0$"
      }
    ],
    "answer": "A"
  },
  {
    "id": "p.prob.DA.2025.20",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 20,
    "type": "MCQ",
    "marks": 1,
    "neg": -0.3333333333333333,
    "sec": "5.4",
    "title": "Recovering an affine normal transformation",
    "prompt": "Let $X=aZ+b$, $Z\\sim N(0,1)$, with $E[X]=1$, $E[(X-E[X])Z]=-2$, and $\\operatorname{Var}(X)=4$. Find $(a,b)$.",
    "solution": "Since $X-E[X]=aZ$, the covariance with Z is $aE[Z^2]=a=-2$. The mean is b, so b=1. Then variance $a^2=4$ is consistent.",
    "tested": "Affine normal moments and covariance.",
    "trap": "Using $|a|=2$ from the variance without using covariance to determine its sign.",
    "provenance": "GATE 2025 DA master question paper Q20; official final answer key Q20.",
    "options": [
      {
        "k": "A",
        "t": "$a=-2,b=1$"
      },
      {
        "k": "B",
        "t": "$a=2,b=-1$"
      },
      {
        "k": "C",
        "t": "$a=-2,b=-1$"
      },
      {
        "k": "D",
        "t": "$a=1,b=1$"
      }
    ],
    "answer": "A"
  },
  {
    "id": "p.prob.DA.2025.21",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 21,
    "type": "MCQ",
    "marks": 1,
    "neg": -0.3333333333333333,
    "sec": "5.5",
    "title": "Exponential rate from a survival probability",
    "prompt": "For an exponential variable with rate $\\lambda$, $P(X\\ge2)=0.25$. Find $\\lambda$.",
    "solution": "The exponential tail is $e^{-2\\lambda}=0.25=1/4$, so $2\\lambda=\\ln4$ and $\\lambda=\\ln2$.",
    "tested": "Exponential survival and rate.",
    "trap": "Confusing the rate with the mean, or taking the logarithm without dividing by 2.",
    "provenance": "GATE 2025 DA master question paper Q21; official final answer key Q21.",
    "options": [
      {
        "k": "A",
        "t": "$\\ln2$"
      },
      {
        "k": "B",
        "t": "$\\ln4$"
      },
      {
        "k": "C",
        "t": "$\\ln3$"
      },
      {
        "k": "D",
        "t": "$\\ln0.25$"
      }
    ],
    "answer": "A"
  },
  {
    "id": "p.prob.DA.2025.26",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 26,
    "type": "MSQ",
    "marks": 1,
    "neg": 0,
    "sec": "3.4",
    "title": "Exact and approximate Bayesian-network inference",
    "prompt": "Select the true claims about Bayesian-network inference.",
    "solution": "Variable elimination computes exact conditional probabilities (C). Rejection sampling approximates posterior probabilities through sampled cases that survive evidence filtering (D). Claims A and B reverse those classifications.",
    "tested": "Exact versus approximate inference.",
    "trap": "Calling sampling exact or variable elimination approximate.",
    "provenance": "GATE 2025 DA master question paper Q26; official final answer key Q26.",
    "options": [
      {
        "k": "A",
        "t": "Variable elimination is approximate"
      },
      {
        "k": "B",
        "t": "Gibbs sampling is exact"
      },
      {
        "k": "C",
        "t": "Variable elimination can compute conditional probabilities"
      },
      {
        "k": "D",
        "t": "Rejection sampling is approximate"
      }
    ],
    "answer": [
      "C",
      "D"
    ]
  },
  {
    "id": "p.prob.DA.2025.31",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 31,
    "type": "NAT",
    "marks": 1,
    "neg": 0,
    "sec": "3.3",
    "title": "Bayes rule for selecting a box",
    "prompt": "Choose among boxes 1, 2, 3 with probabilities $1/2,1/6,1/3$. Their white-ball fractions are $1/3,2/3,1/2$. Given a white ball, find the probability box 2 was selected.",
    "solution": "The joint chance of box 2 and white is $(1/6)(2/3)=1/9$. Total white chance is $(1/2)(1/3)+(1/6)(2/3)+(1/3)(1/2)=1/6+1/9+1/6=4/9$. The posterior is $(1/9)/(4/9)=1/4=0.25$.",
    "tested": "Bayes theorem with a latent source.",
    "trap": "Using just the likelihood $2/3$ and ignoring the unequal box-selection priors.",
    "provenance": "GATE 2025 DA master question paper Q31; official final answer key Q31.",
    "answer": {
      "value": 0.25,
      "tol": 0.005,
      "dp": 2
    }
  },
  {
    "id": "p.prob.DA.2025.34",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 34,
    "type": "NAT",
    "marks": 1,
    "neg": 0,
    "sec": "DA.1",
    "title": "Least-squares slope through the origin",
    "prompt": "Three data points are $(-1,1),(2,-5),(3,5)$. Fit $y=wx$ by least squares and give the minimizing slope w.",
    "solution": "Minimize $\\sum_i(y_i-wx_i)^2$; differentiating gives $w=\\sum_i x_i y_i/\\sum_i x_i^2$. The numerator is $-1-10+15=4$ and denominator $1+4+9=14$, so $w=2/7\\approx0.286$, matching the key range.",
    "tested": "Least-squares estimation for a one-parameter regression.",
    "trap": "Using the unconstrained intercept model or minimizing vertical residuals without the zero-intercept constraint.",
    "provenance": "GATE 2025 DA master question paper Q34; official final answer key Q34.",
    "answer": {
      "value": 0.2857142857142857,
      "tol": 0.001,
      "dp": 3
    }
  },
  {
    "id": "p.prob.DA.2025.35",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 35,
    "type": "NAT",
    "marks": 1,
    "neg": 0,
    "sec": "3.3",
    "title": "Bayes error for a naive Bayes posterior",
    "prompt": "Two classes have priors 1/3 and 2/3, and a given feature has likelihoods 3/4 and 1/4. Under a maximum-posterior classifier, find the conditional misclassification probability for this feature.",
    "solution": "Unnormalized posterior weights are $(1/3)(3/4)=1/4$ and $(2/3)(1/4)=1/6$. Normalize: probabilities are 3/5 and 2/5, so class 1 is chosen and its error probability is 2/5=0.4.",
    "tested": "Posterior odds and classification error.",
    "trap": "Mistaking the error probability for the posterior probability of the predicted class.",
    "provenance": "GATE 2025 DA master question paper Q35; official final answer key Q35.",
    "answer": {
      "value": 0.4,
      "tol": 0.01,
      "dp": 2
    }
  },
  {
    "id": "p.prob.DA.2025.36",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 36,
    "type": "MCQ",
    "marks": 2,
    "neg": -0.6666666666666666,
    "sec": "5.4",
    "title": "Variance of squared standard normal",
    "prompt": "If $Z=(X-\\mu)/\\sigma$ for a normal variable X and $Y=Z^2$, find $\\operatorname{Var}(Y)$.",
    "solution": "A standard normal square is $\\chi^2_1$, whose variance is $2\\nu=2$ at $\\nu=1$. Equivalently, $E[Z^2]=1$ and $E[Z^4]=3$, so variance is $3-1=2$.",
    "tested": "Fourth moment of the standard normal.",
    "trap": "Reporting $E[Z^2]=1$ as the variance of the square.",
    "provenance": "GATE 2025 DA master question paper Q36; official final answer key Q36.",
    "options": [
      {
        "k": "A",
        "t": "$1$"
      },
      {
        "k": "B",
        "t": "$2$"
      },
      {
        "k": "C",
        "t": "$3$"
      },
      {
        "k": "D",
        "t": "$4$"
      }
    ],
    "answer": "B"
  },
  {
    "id": "p.prob.DA.2025.39",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 39,
    "type": "MCQ",
    "marks": 2,
    "neg": -0.6666666666666666,
    "sec": "5.1",
    "title": "Interval probability from a quadratic CDF",
    "prompt": "A CDF is 0 for $x\\le-1$, $(x+1)^2/4$ on $[-1,1]$, and 1 above 1. Find $P(X^2\\le0.25)$.",
    "solution": "The event is $-0.5\\le X\\le0.5$. Its probability is $F(0.5)-F((-0.5)^-) = (1.5)^2/4-(0.5)^2/4=9/16-1/16=1/2$.",
    "tested": "CDF differences and a two-sided event.",
    "trap": "Taking only $0<X\\le0.5$ and omitting the negative half of the preimage.",
    "provenance": "GATE 2025 DA master question paper Q39; official final answer key Q39.",
    "options": [
      {
        "k": "A",
        "t": "$0.625$"
      },
      {
        "k": "B",
        "t": "$0.25$"
      },
      {
        "k": "C",
        "t": "$0.5$"
      },
      {
        "k": "D",
        "t": "$0.5625$"
      }
    ],
    "answer": "C"
  },
  {
    "id": "p.prob.DA.2025.40",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 40,
    "type": "MCQ",
    "marks": 2,
    "neg": -0.6666666666666666,
    "sec": "8.3",
    "title": "CLT approximation for a binomial interval",
    "prompt": "Let $Y$ be the sum of 300 iid Bernoulli$(0.25)$ variables. Approximate $P(60\\le Y\\le90)$ by the stated normal-CLT convention.",
    "solution": "The mean is 75 and standard deviation is $\\sqrt{300(0.25)(0.75)}=7.5$. The endpoints are 15 from the mean, or 2 standard deviations, so the exam’s CLT expression is $\\Phi(2)-\\Phi(-2)$. (The official key selects A.)",
    "tested": "Binomial mean/variance and normal standardization.",
    "trap": "Using variance as standard deviation or using the unstandardized cutoffs directly in $\\Phi$. The paper’s official-key convention omits a continuity correction; applying one changes the endpoints to about ±2.067, which is not among the options.",
    "provenance": "GATE 2025 DA master question paper Q40; official final answer key Q40.",
    "options": [
      {
        "k": "A",
        "t": "$\\Phi(2)-\\Phi(-2)$"
      },
      {
        "k": "B",
        "t": "$\\Phi(1)-\\Phi(-1)$"
      },
      {
        "k": "C",
        "t": "$\\Phi(3)-\\Phi(-3)$"
      },
      {
        "k": "D",
        "t": "$\\Phi(90)-\\Phi(60)$"
      }
    ],
    "answer": "A"
  },
  {
    "id": "p.prob.DA.2025.41",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 41,
    "type": "MCQ",
    "marks": 2,
    "neg": -0.6666666666666666,
    "sec": "4.8",
    "title": "Floor of an exponential variable",
    "prompt": "Let X be exponential with mean $1/\\ln10$ and $Y=\\lfloor X\\rfloor$. If $P(Y=\\ell)=q^\\ell(1-q)$ for positive integer ell, find q.",
    "solution": "The rate is $\\lambda=\\ln10$. For integer $\\ell\\ge0$, $P(Y=\\ell)=P(\\ell\\le X<\\ell+1)=e^{-\\lambda\\ell}(1-e^{-\\lambda})=0.1^\\ell(0.9)$. Thus q=0.1.",
    "tested": "Transforming a continuous lifetime into discrete waiting intervals.",
    "trap": "The geometric ratio is the one-step survival probability $e^{-\\lambda}=0.1$, not the rate.",
    "provenance": "GATE 2025 DA master question paper Q41; official final answer key Q41.",
    "options": [
      {
        "k": "A",
        "t": "$0.1$"
      },
      {
        "k": "B",
        "t": "$0.01$"
      },
      {
        "k": "C",
        "t": "$0.5$"
      },
      {
        "k": "D",
        "t": "$0.434$"
      }
    ],
    "answer": "A"
  },
  {
    "id": "p.prob.DA.2025.45",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 45,
    "type": "MCQ",
    "marks": 2,
    "neg": -0.6666666666666666,
    "sec": "2.3",
    "title": "At least one success in repeated trials",
    "prompt": "One hundred independent fair dice are rolled. Find the probability at least one shows a 1.",
    "solution": "Use the complement: the probability that every roll avoids 1 is $(5/6)^{100}$. Therefore the target probability is $1-(5/6)^{100}$.",
    "tested": "Complement rule for a union of independent events.",
    "trap": "Adding 100 individual probabilities and ignoring overlap among the events.",
    "provenance": "GATE 2025 DA master question paper Q45; official final answer key Q45.",
    "options": [
      {
        "k": "A",
        "t": "$0$"
      },
      {
        "k": "B",
        "t": "$1$"
      },
      {
        "k": "C",
        "t": "$1-(5/6)^{100}$"
      },
      {
        "k": "D",
        "t": "$(5/6)^{100}$"
      }
    ],
    "answer": "C"
  },
  {
    "id": "p.prob.DA.2025.54",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 54,
    "type": "MSQ",
    "marks": 2,
    "neg": 0,
    "sec": "4.5",
    "title": "Mean and variance of a sample proportion",
    "prompt": "For independent Bernoulli(p) trials, let $\\hat p$ be the average of n indicators. Which statements are true?",
    "solution": "By linearity, $E[\\hat p]=p$. Independence gives $\\operatorname{Var}(\\hat p)=p(1-p)/n$, which decreases as n grows. Thus A and C only.",
    "tested": "Unbiasedness and variance of a sample proportion.",
    "trap": "Using $p/n$ for the mean or forgetting the factor $1-p$ in the variance.",
    "provenance": "GATE 2025 DA master question paper Q54; official final answer key Q54.",
    "options": [
      {
        "k": "A",
        "t": "$E[\\hat p]=p$"
      },
      {
        "k": "B",
        "t": "$E[\\hat p]=p/n$"
      },
      {
        "k": "C",
        "t": "Its variance decreases with n"
      },
      {
        "k": "D",
        "t": "Its variance is independent of n"
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "p.prob.DA.2025.60",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 60,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "DA.1",
    "title": "Variance along the principal component",
    "prompt": "Centered observations have covariance eigenvalues $100,50,25,\\ldots$. Find the average squared projection onto a unit direction of maximum variance.",
    "solution": "The variance of the centered projection $u^TX$ is $u^T\\Sigma u$. Its maximum over unit u is the largest eigenvalue, 100.",
    "tested": "Rayleigh quotient and principal-component variance.",
    "trap": "Choosing the largest standard deviation (10) instead of the largest variance (100).",
    "provenance": "GATE 2025 DA master question paper Q60; official final answer key Q60.",
    "answer": {
      "value": 100,
      "tol": 0.5,
      "dp": 0
    }
  },
  {
    "id": "p.prob.DA.2025.61",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2025,
    "qno": 61,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "4.3",
    "title": "Expected count with replacement",
    "prompt": "A draw from a bag returns a black ball with probability 2/3. In 100 independent draws with replacement, find the expected number of black outcomes.",
    "solution": "Write the count as a sum of 100 indicators, each with mean 2/3. Linearity gives $E[S]=100(2/3)=66.666\\ldots$, which rounds to 66.7.",
    "tested": "Indicator expectation and linearity.",
    "trap": "Assuming without replacement even though each draw is returned.",
    "provenance": "GATE 2025 DA master question paper Q61; official final answer key Q61.",
    "answer": {
      "value": 66.7,
      "tol": 0.05,
      "dp": 1
    }
  },
  {
    "id": "p.prob.DA.2026.19",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2026,
    "qno": 19,
    "type": "MCQ",
    "marks": 1,
    "neg": -0.3333333333333333,
    "sec": "1.5",
    "title": "Even product of a random nonempty subset",
    "prompt": "Choose a nonempty subset uniformly from $\\{1,\\ldots,2026\\}$. Which expression is the probability that its element product is even?",
    "solution": "There are $2^{2026}-1$ nonempty subsets. A product is odd exactly when the chosen subset contains only the 1013 odd elements and is nonempty, giving $2^{1013}-1$ bad subsets. Favorable count is $2^{2026}-2^{1013}=2^{1013}(2^{1013}-1)$, divided by $2^{2026}-1$.",
    "tested": "Uniform finite sample spaces and complementary counting.",
    "trap": "Counting the empty odd-only subset as a possible sampled subset even though the experiment excludes it.",
    "provenance": "GATE 2026 DA master question paper Q19; official final answer key Q19.",
    "options": [
      {
        "k": "A",
        "t": "$2^{1013}(2^{1013}-1)/2^{2026}$"
      },
      {
        "k": "B",
        "t": "$2^{1013}/2^{2026}$"
      },
      {
        "k": "C",
        "t": "$2^{1013}(2^{1013}-1)/(2^{2026}-1)$"
      },
      {
        "k": "D",
        "t": "$1/(2^{2026}-1)$"
      }
    ],
    "answer": "C"
  },
  {
    "id": "p.prob.DA.2026.20",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2026,
    "qno": 20,
    "type": "MCQ",
    "marks": 1,
    "neg": -0.3333333333333333,
    "sec": "1.5",
    "title": "Uniform random weak composition",
    "prompt": "A solution is selected from the nonnegative integer quadruples summing to 20. Under the equiprobable-solution interpretation used by the official key, what is the probability all four entries are positive?",
    "solution": "Stars and bars gives $\\binom{23}{3}$ nonnegative solutions. Positive solutions correspond to subtracting 1 from each variable, leaving a sum of 16, hence $\\binom{19}{3}$. The ratio is $\\binom{19}{3}/\\binom{23}{3}$.",
    "tested": "Counting favorable and total outcomes in an equiprobable finite space.",
    "trap": "The paper does not state uniformity explicitly; the official key presumes equiprobable solutions. Under any nonuniform selection rule this probability could differ.",
    "provenance": "GATE 2026 DA master question paper Q20; official final answer key Q20.",
    "options": [
      {
        "k": "A",
        "t": "$\\binom{19}{3}/\\binom{23}{3}$"
      },
      {
        "k": "B",
        "t": "$\\binom{20}{4}/\\binom{24}{4}$"
      },
      {
        "k": "C",
        "t": "$\\binom{20}{3}/\\binom{23}{3}$"
      },
      {
        "k": "D",
        "t": "$\\binom{19}{4}/\\binom{24}{4}$"
      }
    ],
    "answer": "A"
  },
  {
    "id": "p.prob.DA.2026.28",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2026,
    "qno": 28,
    "type": "MSQ",
    "marks": 1,
    "neg": 0,
    "sec": "5.6",
    "title": "CDF comparison for normal and Cauchy laws",
    "prompt": "Let g,G be the standard normal density and CDF; h,H those of standard Cauchy. At c>0 suppose g(c)=h(c). Select the necessarily true statements.",
    "solution": "Both laws are symmetric about zero, so $G(0)=H(0)=1/2$ (A). The ratio $g(x)/h(x)$ starts above 1 at zero and crosses 1 once at c, so g>h on (0,c). Therefore $G(c)-H(c)=\\int_0^c(g-h)>0$, and B is false. Symmetry gives $G(-c)-H(-c)=-(G(c)-H(c))<0$, hence C. D is false because the densities differ at zero.",
    "tested": "Distribution symmetry and density-to-CDF comparison.",
    "trap": "Inferring CDF ordering solely from equal densities at c; one must track the density difference from 0 to c.",
    "provenance": "GATE 2026 DA master question paper Q28; official final answer key Q28.",
    "options": [
      {
        "k": "A",
        "t": "$G(0)=H(0)$"
      },
      {
        "k": "B",
        "t": "$G(c)<H(c)$"
      },
      {
        "k": "C",
        "t": "$G(-c)<H(-c)$"
      },
      {
        "k": "D",
        "t": "$g(0)=h(0)$"
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "p.prob.DA.2026.34",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2026,
    "qno": 34,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "5.5",
    "title": "Memorylessness from an exponential tail",
    "prompt": "An exponential lifetime has $P(X>5)=0.35$. Find $P(X>10\\mid X>5)$.",
    "solution": "By memorylessness, $P(X>10\\mid X>5)=P(X>5)=0.35$.",
    "tested": "Exponential lack of memory.",
    "trap": "Dividing the unconditional 10-unit survival by 0.35 without noting the exponential ratio already equals 0.35.",
    "provenance": "GATE 2026 DA master question paper Q34; official final answer key Q34.",
    "answer": {
      "value": 0.35,
      "tol": 0.01,
      "dp": 2
    }
  },
  {
    "id": "p.prob.DA.2026.44",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2026,
    "qno": 44,
    "type": "MCQ",
    "marks": 2,
    "neg": -0.6666666666666666,
    "sec": "4.5",
    "title": "Variance of a product with independent factors",
    "prompt": "Let X and Y be independent, with X Bernoulli(0.3) and Y normal with mean 0 and variance 100. Find $\\operatorname{Var}((2X-1)Y)$.",
    "solution": "The factor $2X-1$ is always either -1 or 1, so its square is 1. Independence gives $E[((2X-1)Y)^2]=E[(2X-1)^2]E[Y^2]=100$. The product has mean 0, hence variance 100.",
    "tested": "Variance of an independent product.",
    "trap": "Applying a variance product shortcut that is valid only under extra mean conditions, instead of computing second moment and mean.",
    "provenance": "GATE 2026 DA master question paper Q44; official final answer key Q44.",
    "options": [
      {
        "k": "A",
        "t": "$100$"
      },
      {
        "k": "B",
        "t": "$90$"
      },
      {
        "k": "C",
        "t": "$49$"
      },
      {
        "k": "D",
        "t": "$21$"
      }
    ],
    "answer": "A"
  },
  {
    "id": "p.prob.DA.2026.45",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2026,
    "qno": 45,
    "type": "MCQ",
    "marks": 2,
    "neg": -0.6666666666666666,
    "sec": "8.2",
    "title": "Poisson probability at its mean in the limit",
    "prompt": "Evaluate $\\lim_{n\\to\\infty}P(N_n\\le n)$ for $N_n\\sim\\operatorname{Pois}(n)$.",
    "solution": "The Poisson distribution with mean n is asymptotically normal with mean n and standard deviation $\\sqrt n$. The cutoff is at the center; asymptotic symmetry and the local limit theorem give probability one-half.",
    "tested": "Poisson central limit behavior.",
    "trap": "Confusing the entire cumulative probability with the probability mass at n, which tends to zero.",
    "provenance": "GATE 2026 DA master question paper Q45; official final answer key Q45.",
    "options": [
      {
        "k": "A",
        "t": "$0.5$"
      },
      {
        "k": "B",
        "t": "$1$"
      },
      {
        "k": "C",
        "t": "$0$"
      },
      {
        "k": "D",
        "t": "$e^{-1}$"
      }
    ],
    "answer": "A"
  },
  {
    "id": "p.prob.DA.2026.53",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2026,
    "qno": 53,
    "type": "MSQ",
    "marks": 2,
    "neg": 0,
    "sec": "DA.3",
    "title": "Chi-square laws from standard normals",
    "prompt": "Let $X_1,\\ldots,X_n$ be iid standard normal and $\\bar X$ their mean. Which distributional claims are true?",
    "solution": "A is $\\chi^2_n$ by definition. Centering removes one degree of freedom, so the residual sum of squares is $\\chi^2_{n-1}$ (B). For n≥2, the sum of two independent squared standard normals is $\\chi^2_2$, an exponential with mean 2 (C). Since $\\sqrt n\\bar X\\sim N(0,1)$, its square is $\\chi^2_1$, not $\\chi^2_2$ (D false).",
    "tested": "Chi-square construction, residual degrees of freedom and normal sample mean.",
    "trap": "Confusing the square of one standardized sample mean with a two-degree-of-freedom chi-square. The keyed C claim implicitly requires n≥2 so that X1 and Xn are distinct.",
    "provenance": "GATE 2026 DA master question paper Q53; official final answer key Q53.",
    "options": [
      {
        "k": "A",
        "t": "$\\sum_iX_i^2\\sim\\chi^2_n$"
      },
      {
        "k": "B",
        "t": "$\\sum_i(X_i-\\bar X)^2\\sim\\chi^2_{n-1}$"
      },
      {
        "k": "C",
        "t": "$X_1^2+X_n^2$ is exponential with mean 2 (for distinct i,n)"
      },
      {
        "k": "D",
        "t": "$(\\sqrt n\\bar X)^2\\sim\\chi^2_2$"
      }
    ],
    "answer": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": "p.prob.DA.2026.54",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2026,
    "qno": 54,
    "type": "MSQ",
    "marks": 2,
    "neg": 0,
    "sec": "4.10",
    "title": "CDF properties for a discrete variable",
    "prompt": "Which statements about the CDF F of a discrete-valued random variable are necessarily true?",
    "solution": "A CDF is non-decreasing and right-continuous, with limits 0 and 1. A discrete distribution has at least one atom, hence a jump at a support point. It need not be strictly positive (it is zero below the support), and it is right- rather than left-continuous in general.",
    "tested": "CDF monotonicity, continuity convention and atoms.",
    "trap": "Swapping left continuity for right continuity, or reading nonnegative as strictly positive.",
    "provenance": "GATE 2026 DA master question paper Q54; official final answer key Q54.",
    "options": [
      {
        "k": "A",
        "t": "$F(x)>0$ for every real x"
      },
      {
        "k": "B",
        "t": "$F$ is non-decreasing"
      },
      {
        "k": "C",
        "t": "$F$ has at least one jump"
      },
      {
        "k": "D",
        "t": "$F$ is left-continuous"
      }
    ],
    "answer": [
      "B",
      "C"
    ]
  },
  {
    "id": "p.prob.DA.2026.57",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2026,
    "qno": 57,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "3.3",
    "title": "Posterior probability after a diagnostic test",
    "prompt": "A disease prevalence is 0.30; a test is positive with probabilities 0.80 if diseased and 0.10 if not. Find the disease probability after a positive result.",
    "solution": "Bayes rule gives $0.8(0.3)/[0.8(0.3)+0.1(0.7)]=0.24/0.31=0.77419\\ldots$, approximately 0.77 (within official interval 0.76–0.78).",
    "tested": "Bayesian diagnostic testing and base-rate effects.",
    "trap": "Reporting sensitivity 0.80 as the posterior and ignoring base prevalence and false positives.",
    "provenance": "GATE 2026 DA master question paper Q57; official final answer key Q57.",
    "answer": {
      "value": 0.7742,
      "tol": 0.01,
      "dp": 2
    }
  },
  {
    "id": "p.prob.DA.2026.63",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2026,
    "qno": 63,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "6.2",
    "title": "Zero correlation from a symmetric conditional mean",
    "prompt": "Let X be uniform on (-1,1), and conditional on X=x let Y be uniform on $(x^2-0.1,x^2+0.1)$. Find $\\operatorname{Corr}(X,Y)$.",
    "solution": "The conditional mean is $E[Y\\mid X]=X^2$. Thus $E[XY]=E[X^3]=0$ by symmetry, while $E[X]=0$; hence covariance is zero. Both variables have positive variance, so correlation is zero.",
    "tested": "Conditional expectation, covariance and symmetry.",
    "trap": "Mistaking the dependence of Y’s conditional distribution on $X^2$ for nonzero linear correlation.",
    "provenance": "GATE 2026 DA master question paper Q63; official final answer key Q63.",
    "answer": {
      "value": 0,
      "tol": 0,
      "dp": 0
    }
  },
  {
    "id": "p.prob.DA.2026.65",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2026,
    "qno": 65,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "DA.1",
    "title": "Maximum of the centering quadratic form",
    "prompt": "Let $A=I_n-(1/n)11^T$. Find $\\max_{\\|x\\|=1}x^TAx$ for $n>1$.",
    "solution": "A is the orthogonal projection onto the subspace perpendicular to the all-ones vector. Its eigenvalues are 1 on that subspace and 0 in the all-ones direction. The maximum unit-vector quadratic form is its largest eigenvalue, 1.",
    "tested": "Centering projection and Rayleigh quotient.",
    "trap": "Treating the centering matrix as the identity, or maximizing without the unit-norm constraint.",
    "provenance": "GATE 2026 DA master question paper Q65; official final answer key Q65.",
    "answer": {
      "value": 1,
      "tol": 0,
      "dp": 0
    }
  },
  {
    "id": "p.prob.DA.2026.64",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2026,
    "qno": 64,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "6.1",
    "title": "Overlapping row and column sums in a Bernoulli matrix",
    "prompt": "A 5 by 5 matrix has independent Bernoulli(1/2) entries. Find the probability row 2 and column 3 each sum to 3.",
    "solution": "The row and column share one entry B. If B=0 (probability 1/2), each of the other four entries in its line must sum to 3, probability $(4/16)^2=1/16$, giving 1/32. If B=1, each remaining line must sum to 2, probability $(6/16)^2=9/64$, weighted contribution 9/128. Total is $1/32+9/128=13/128=0.1015625$, within the official interval.",
    "tested": "Conditioning on a shared Bernoulli component and binomial counts.",
    "trap": "Treating the two line sums as independent even though the lines share the (2,3) entry.",
    "provenance": "GATE 2026 DA master question paper Q64; official final answer key Q64.",
    "answer": {
      "value": 0.1015625,
      "tol": 0.02,
      "dp": 2
    }
  },
  {
    "id": "p.prob.DA.2026.62",
    "course": "prob",
    "exam": "GATE",
    "paper": "DA",
    "year": 2026,
    "qno": 62,
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "sec": "DA.1",
    "title": "Pairwise differences and sample variation",
    "prompt": "For n=100 observations, suppose $(1/2000)\\sum_i\\sum_j(x_i-x_j)^2=99$. Find $(1/99)\\sum_i(x_i-\\bar x)^2$.",
    "solution": "Use $\\sum_i\\sum_j(x_i-x_j)^2=2n\\sum_i(x_i-\\bar x)^2$. The double sum is $2000(99)=198000$, hence the centered sum of squares is $198000/(2\\cdot100)=990$. Dividing by 99 gives 10.",
    "tested": "Pairwise-distance identity and sample variance.",
    "trap": "Confusing the pairwise-difference sum with the centered sum of squares; the identity includes the factor 2n.",
    "provenance": "GATE 2026 DA master question paper Q62; official final answer key Q62.",
    "answer": {
      "value": 10,
      "tol": 0,
      "dp": 0
    }
  }
]
);
