if (typeof OBJECTIVE === 'undefined') { var OBJECTIVE = []; }
OBJECTIVE.push(...
[
  {
    "id": "o.prob.8.2.1",
    "course": "prob",
    "sec": "8.2",
    "type": "MCQ",
    "marks": 2,
    "neg": -2/3,
    "negLabel": "−2/3",
    "time": 60,
    "prompt": "If X≥0 and E[X]=12, Markov’s inequality gives which upper bound for $P(X\\ge4)$?",
    "answer": "A",
    "solution": "Markov gives $12/4=3$, but probabilities are at most 1, so the resulting usable bound is 1.",
    "tested": "Markov inequality and probability ceiling.",
    "trap": "Reporting a Markov bound larger than one as a meaningful probability estimate.",
    "twist": {
      "q": "What related case or check should be considered?",
      "a": "For threshold 24, Markov gives 1/2."
    },
    "tests": [
      "c.prob.8.2.1"
    ],
    "provenance": "Original item aligned with Ross §8.2.",
    "options": [
      {
        "k": "A",
        "t": "1"
      },
      {
        "k": "B",
        "t": "$1/3$"
      },
      {
        "k": "C",
        "t": "$1/4$"
      },
      {
        "k": "D",
        "t": "$1/12$"
      }
    ]
  },
  {
    "id": "o.prob.8.3.1",
    "course": "prob",
    "sec": "8.3",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "negLabel": "0",
    "time": 60,
    "prompt": "For iid observations with mean 4 and variance 9, n=100. What is the CLT standard deviation of the sample mean?",
    "answer": {
      "value": 0.3,
      "tol": 0,
      "dp": 1
    },
    "solution": "The standard error is $\\sigma/\\sqrt n=3/10=0.3$.",
    "tested": "CLT scaling for a sample mean.",
    "trap": "Using the sum standard deviation instead of the average’s standard error.",
    "twist": {
      "q": "What related case or check should be considered?",
      "a": "The sum has standard deviation 30."
    },
    "tests": [
      "c.prob.8.3.1",
      "c.prob.8.3.2"
    ],
    "provenance": "Original item aligned with Ross §8.3."
  },
  {
    "id": "o.prob.8.4.1",
    "course": "prob",
    "sec": "8.4",
    "type": "MSQ",
    "marks": 2,
    "neg": 0,
    "negLabel": "0",
    "time": 60,
    "prompt": "Which are conclusions of the strong law for iid integrable Xᵢ with mean μ? Select all that apply.",
    "answer": [
      "A",
      "C"
    ],
    "solution": "Almost-sure convergence holds with probability one, and the indicator case gives frequencies. Exceptional null paths may fail; normality is not required.",
    "tested": "Strong law hypotheses and its event-frequency consequence.",
    "trap": "Interpreting “almost surely” as every path.",
    "twist": {
      "q": "What is the key integrability assumption?",
      "a": "Finite absolute mean."
    },
    "tests": [
      "c.prob.8.4.1"
    ],
    "provenance": "Original item aligned with Ross §8.4.",
    "options": [
      {
        "k": "A",
        "t": "$\\bar X_n\to\\mu$ almost surely."
      },
      {
        "k": "B",
        "t": "Every possible sample path converges to μ."
      },
      {
        "k": "C",
        "t": "For iid Bernoulli indicators of A, empirical frequency converges almost surely to P(A)."
      },
      {
        "k": "D",
        "t": "The theorem requires a normal distribution."
      }
    ]
  },
  {
    "id": "o.prob.8.5.1",
    "course": "prob",
    "sec": "8.5",
    "type": "MCQ",
    "marks": 2,
    "neg": -2/3,
    "negLabel": "−2/3",
    "time": 60,
    "prompt": "For a convex function g and integrable X with required expectations, Jensen gives:",
    "answer": "B",
    "solution": "Jensen’s inequality places the function at the mean below the mean of the function for convex g.",
    "tested": "Direction of Jensen’s inequality.",
    "trap": "Reversing convex and concave cases.",
    "twist": {
      "q": "What related case or check should be considered?",
      "a": "For concave g, the inequality reverses."
    },
    "tests": [
      "c.prob.8.5.3"
    ],
    "provenance": "Original item aligned with Ross §8.5.",
    "options": [
      {
        "k": "A",
        "t": "$E[g(X)]\\le g(E[X])$"
      },
      {
        "k": "B",
        "t": "$g(E[X])\\le E[g(X)]$"
      },
      {
        "k": "C",
        "t": "$g(E[X])=E[g(X)]$ always"
      },
      {
        "k": "D",
        "t": "No inequality is available"
      }
    ]
  },
  {
    "id": "o.prob.8.6.1",
    "course": "prob",
    "sec": "8.6",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "negLabel": "0",
    "time": 60,
    "prompt": "For 20 independent Bernoulli variables each with p=0.1, what is the Poisson approximation parameter λ?",
    "answer": {
      "value": 2,
      "tol": 0,
      "dp": 0
    },
    "solution": "The Poisson parameter is the sum of success probabilities, $20(0.1)=2$.",
    "tested": "Poisson approximation for Bernoulli sums.",
    "trap": "Using sum of squared probabilities as the Poisson mean.",
    "twist": {
      "q": "What related case or check should be considered?",
      "a": "Ross’s absolute event-probability error bound here is 0.2."
    },
    "tests": [
      "c.prob.8.6.1"
    ],
    "provenance": "Original item aligned with Ross §8.6."
  },
  {
    "id": "o.prob.8.7.1",
    "course": "prob",
    "sec": "8.7",
    "type": "MCQ",
    "marks": 2,
    "neg": -2/3,
    "negLabel": "−2/3",
    "time": 60,
    "prompt": "A Lorenz curve is $L(p)=p^2$ for 0≤p≤1. What is its Gini index?",
    "answer": "C",
    "solution": "$G=1-2\\int_0^1p^2dp=1-2/3=1/3$.",
    "tested": "Compute Gini from area under the Lorenz curve.",
    "trap": "Forgetting the factor 2 in the area formula.",
    "twist": {
      "q": "What related case or check should be considered?",
      "a": "The uniform income example has exactly this Lorenz curve."
    },
    "tests": [
      "c.prob.8.7.2"
    ],
    "provenance": "Adaptation of Ross §8.7 uniform example.",
    "options": [
      {
        "k": "A",
        "t": "$1/6$"
      },
      {
        "k": "B",
        "t": "$1/4$"
      },
      {
        "k": "C",
        "t": "$1/3$"
      },
      {
        "k": "D",
        "t": "$2/3$"
      }
    ]
  }
]
);
