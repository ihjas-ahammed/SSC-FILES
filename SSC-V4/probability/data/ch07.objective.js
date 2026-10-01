if (typeof OBJECTIVE === 'undefined') { var OBJECTIVE = []; }
OBJECTIVE.push(...
[
  {
    "id": "o.prob.7.2.1",
    "course": "prob",
    "sec": "7.2",
    "type": "MCQ",
    "marks": 2,
    "neg": -2/3,
    "negLabel": "−2/3",
    "time": 60,
    "prompt": "If $E[X]=2$ and $E[Y]=5$, what is $E[3X-2Y]$ when X and Y may be dependent?",
    "answer": "A",
    "solution": "By linearity, $3(2)-2(5)=-4$.",
    "tested": "Linearity of expectation without independence.",
    "trap": "Assuming independence is needed before distributing the expectation.",
    "twist": {
      "q": "What related case or check should be considered?",
      "a": "Use the coefficients with their signs."
    },
    "tests": [
      "c.prob.7.2.1"
    ],
    "provenance": "Original item aligned with Ross §7.2.",
    "options": [
      {
        "k": "A",
        "t": "$-4$"
      },
      {
        "k": "B",
        "t": "$4$"
      },
      {
        "k": "C",
        "t": "$16$"
      },
      {
        "k": "D",
        "t": "$31$"
      }
    ]
  },
  {
    "id": "o.prob.7.3.1",
    "course": "prob",
    "sec": "7.3",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "negLabel": "0",
    "time": 60,
    "prompt": "Five balls are placed independently and uniformly into five urns. What is the expected number of empty urns? Give 3 decimal places.",
    "answer": {
      "value": 1.6384000000000003,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Each urn is empty with probability $(4/5)^5$. Sum five indicators: $5(4/5)^5=1.6384$, which rounds to 1.638.",
    "tested": "Indicator representation and linearity for a count.",
    "trap": "Treating urn-emptiness events as independent is unnecessary and false.",
    "twist": {
      "q": "What related case or check should be considered?",
      "a": "For n balls in n urns the expression is $n(1-1/n)^n$."
    },
    "tests": [
      "c.prob.7.3.1"
    ],
    "provenance": "Original item aligned with Ross §7.3."
  },
  {
    "id": "o.prob.7.4.1",
    "course": "prob",
    "sec": "7.4",
    "type": "MSQ",
    "marks": 2,
    "neg": 0,
    "negLabel": "0",
    "time": 60,
    "prompt": "Which statements are always true for finite-variance random variables? Select all that apply.",
    "answer": [
      "A",
      "C"
    ],
    "solution": "The covariance identity follows by expansion. Variance of a sum includes twice the covariance. Zero covariance does not generally imply independence, and correlation lies in [-1,1].",
    "tested": "Covariance, variance sums, and correlation limits.",
    "trap": "Dropping covariance in a dependent sum.",
    "twist": {
      "q": "What related case or check should be considered?",
      "a": "If X and Y are independent and square-integrable, the covariance term vanishes."
    },
    "tests": [
      "c.prob.7.4.1",
      "c.prob.7.4.2"
    ],
    "provenance": "Original item aligned with Ross §7.4.",
    "options": [
      {
        "k": "A",
        "t": "$\\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]$."
      },
      {
        "k": "B",
        "t": "Zero covariance implies independence."
      },
      {
        "k": "C",
        "t": "$\\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)+2\\operatorname{Cov}(X,Y)$."
      },
      {
        "k": "D",
        "t": "Correlation can exceed 1."
      }
    ]
  },
  {
    "id": "o.prob.7.5.1",
    "course": "prob",
    "sec": "7.5",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "negLabel": "0",
    "time": 60,
    "prompt": "A fair coin selects A or B. Conditional on A, X is equally likely 0 or 2; conditional on B, X=4. Find $E[X]$.",
    "answer": {
      "value": 2.5,
      "tol": 0,
      "dp": 1
    },
    "solution": "The conditional means are 1 and 4, each with probability 1/2. The tower property gives $E[X]=(1+4)/2=2.5$.",
    "tested": "Tower property / conditional expectation.",
    "trap": "Averaging the raw outcomes across groups without their conditional weights.",
    "twist": {
      "q": "What related case or check should be considered?",
      "a": "The law of total variance for these data gives 2.75."
    },
    "tests": [
      "c.prob.7.5.1",
      "c.prob.7.5.2"
    ],
    "provenance": "Original item aligned with Ross §7.5."
  },
  {
    "id": "o.prob.7.6.1",
    "course": "prob",
    "sec": "7.6",
    "type": "MCQ",
    "marks": 2,
    "neg": -2/3,
    "negLabel": "−2/3",
    "time": 60,
    "prompt": "If $\\operatorname{Var}(X)=9$ and $\\operatorname{Cov}(X,Y)=6$, what is the slope in the best linear predictor of Y from X?",
    "answer": "B",
    "solution": "The slope is $\\operatorname{Cov}(X,Y)/\\operatorname{Var}(X)=6/9=2/3$.",
    "tested": "Least-squares linear prediction coefficient.",
    "trap": "Dividing by Var(Y) instead of Var(X).",
    "twist": {
      "q": "What related case or check should be considered?",
      "a": "Reverse the prediction direction: the slope for predicting X from Y generally differs."
    },
    "tests": [
      "c.prob.7.6.1"
    ],
    "provenance": "Original item aligned with Ross §7.6.",
    "options": [
      {
        "k": "A",
        "t": "$3/2$"
      },
      {
        "k": "B",
        "t": "$2/3$"
      },
      {
        "k": "C",
        "t": "$6$"
      },
      {
        "k": "D",
        "t": "$1/3$"
      }
    ]
  },
  {
    "id": "o.prob.7.7.1",
    "course": "prob",
    "sec": "7.7",
    "type": "MCQ",
    "marks": 2,
    "neg": -2/3,
    "negLabel": "−2/3",
    "time": 60,
    "prompt": "For independent X and Y with MGFs finite at t, which identity is correct?",
    "answer": "C",
    "solution": "Independence factors $E[e^{tX}e^{tY}]$ into the product of the two MGFs evaluated at t.",
    "tested": "MGF factorization for independent sums.",
    "trap": "Adding MGFs is not the transform rule for sums.",
    "twist": {
      "q": "What related case or check should be considered?",
      "a": "Without independence, the product rule can fail."
    },
    "tests": [
      "c.prob.7.7.2"
    ],
    "provenance": "Original item aligned with Ross §7.7.",
    "options": [
      {
        "k": "A",
        "t": "$M_{X+Y}(t)=M_X(t)+M_Y(t)$"
      },
      {
        "k": "B",
        "t": "$M_{X+Y}(t)=M_X(t)M_Y(-t)$"
      },
      {
        "k": "C",
        "t": "$M_{X+Y}(t)=M_X(t)M_Y(t)$"
      },
      {
        "k": "D",
        "t": "$M_{X+Y}(t)=M_X(-t)M_Y(t)$"
      }
    ]
  },
  {
    "id": "o.prob.7.8.1",
    "course": "prob",
    "sec": "7.8",
    "type": "MSQ",
    "marks": 2,
    "neg": 0,
    "negLabel": "0",
    "time": 60,
    "prompt": "For a sample of n iid normal variables, which statements are true? Select all that apply.",
    "answer": [
      "A",
      "B"
    ],
    "solution": "Both statements are normal-sample results; the degrees of freedom are n−1.",
    "tested": "Normal sampling distribution of mean and variance.",
    "trap": "Extending a special normal result to arbitrary iid variables.",
    "twist": {
      "q": "What related case or check should be considered?",
      "a": "The sample mean itself is normal with variance σ²/n."
    },
    "tests": [
      "c.prob.7.8.1",
      "c.prob.7.8.2"
    ],
    "provenance": "Original item aligned with Ross §7.8.",
    "options": [
      {
        "k": "A",
        "t": "$\\bar X$ is independent of $S^2$."
      },
      {
        "k": "B",
        "t": "$(n-1)S^2/\\sigma^2\\sim\\chi^2_{n-1}$."
      },
      {
        "k": "C",
        "t": "$S^2$ is independent of $\\bar X$ for every iid population."
      },
      {
        "k": "D",
        "t": "$nS^2/\\sigma^2\\sim\\chi^2_n$."
      }
    ]
  },
  {
    "id": "o.prob.7.9.1",
    "course": "prob",
    "sec": "7.9",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "negLabel": "0",
    "time": 60,
    "prompt": "X equals 0 with probability 1/2; otherwise it is Uniform(0,2). Find E[X].",
    "answer": {
      "value": 0.5,
      "tol": 0,
      "dp": 1
    },
    "solution": "The atom contributes zero. The conditional uniform mean is 1, weighted by probability 1/2, so E[X]=1/2.",
    "tested": "Expectation under a mixed distribution.",
    "trap": "Ignoring the mixture probability and using the conditional mean as the unconditional mean.",
    "twist": {
      "q": "What related case or check should be considered?",
      "a": "The second moment is 2/3."
    },
    "tests": [
      "c.prob.7.9.1"
    ],
    "provenance": "Original item aligned with Ross §7.9."
  }
]
);
