const DATA_KIND = "live";
const SYLLABI = [
  {
    "id": "prob",
    "title": "Probability \u00b7 GATE DA",
    "code": "GATE DA 2027",
    "sem": "Ross 10e",
    "book": "Sheldon Ross \u00b7 A First Course in Probability, 10e",
    "blurb": "Model the experiment, derive the law, solve and recall. Selected textbook practice; coverage reports record omissions.",
    "modules": [
      {
        "id": "prob.ch01",
        "n": "1",
        "title": "Combinatorial Analysis",
        "secs": [
          "1.1",
          "1.2",
          "1.3",
          "1.4",
          "1.5",
          "1.6"
        ],
        "extSecs": [
          "1.5",
          "1.6"
        ]
      },
      {
        "id": "prob.ch02",
        "n": "2",
        "title": "Axioms of Probability",
        "secs": [
          "2.1",
          "2.2",
          "2.3",
          "2.4",
          "2.5",
          "2.6",
          "2.7"
        ],
        "extSecs": [
          "2.6",
          "2.7"
        ]
      },
      {
        "id": "prob.ch03",
        "n": "3",
        "title": "Conditional Probability and Independence",
        "secs": [
          "3.1",
          "3.2",
          "3.3",
          "3.4",
          "3.5"
        ],
        "extSecs": [
          "3.5"
        ]
      },
      {
        "id": "prob.ch04",
        "n": "4",
        "title": "Random Variables",
        "secs": [
          "4.1",
          "4.2",
          "4.3",
          "4.4",
          "4.5",
          "4.6",
          "4.7",
          "4.8",
          "4.9",
          "4.10"
        ],
        "extSecs": [
          "4.8"
        ]
      },
      {
        "id": "prob.ch05",
        "n": "5",
        "title": "Continuous Random Variables",
        "secs": [
          "5.1",
          "5.2",
          "5.3",
          "5.4",
          "5.5",
          "5.6",
          "5.7"
        ],
        "extSecs": [
          "5.6"
        ]
      },
      {
        "id": "prob.ch06",
        "n": "6",
        "title": "Jointly Distributed Random Variables",
        "secs": [
          "6.1",
          "6.2",
          "6.3",
          "6.4",
          "6.5",
          "6.6",
          "6.7",
          "6.8"
        ],
        "extSecs": [
          "6.3",
          "6.6",
          "6.7",
          "6.8"
        ],
        "pending": true
      },
      {
        "id": "prob.ch07",
        "n": "7",
        "title": "Properties of Expectation",
        "secs": [
          "7.1",
          "7.2",
          "7.3",
          "7.4",
          "7.5",
          "7.6",
          "7.7",
          "7.8",
          "7.9"
        ],
        "extSecs": [
          "7.3",
          "7.6",
          "7.7",
          "7.8",
          "7.9"
        ],
        "pending": true
      },
      {
        "id": "prob.ch08",
        "n": "8",
        "title": "Limit Theorems",
        "secs": [
          "8.1",
          "8.2",
          "8.3",
          "8.4",
          "8.5",
          "8.6",
          "8.7"
        ],
        "extSecs": [
          "8.4",
          "8.5",
          "8.6",
          "8.7"
        ],
        "pending": true
      },
      {
        "id": "prob.ch09",
        "n": "9",
        "title": "Additional Topics in Probability",
        "secs": [
          "9.1",
          "9.2",
          "9.3",
          "9.4"
        ],
        "extSecs": [],
        "ext": true,
        "pending": true
      },
      {
        "id": "prob.ch10",
        "n": "10",
        "title": "Simulation",
        "secs": [
          "10.1",
          "10.2",
          "10.3",
          "10.4"
        ],
        "extSecs": [],
        "ext": true,
        "pending": true
      },
      {
        "id": "prob.inference",
        "n": "DA",
        "title": "DA inference bridge \u00b7 beyond Ross",
        "secs": [
          "DA.1",
          "DA.2",
          "DA.3"
        ]
      }
    ]
  }
];
const SECTITLE = {
  "1.1": "Introduction",
  "1.2": "The Basic Principle of Counting",
  "1.3": "Permutations",
  "1.4": "Combinations",
  "1.5": "Multinomial Coefficients",
  "1.6": "The Number of Integer Solutions of Equations",
  "2.1": "Introduction",
  "2.2": "Sample Space and Events",
  "2.3": "Axioms of Probability",
  "2.4": "Some Simple Propositions",
  "2.5": "Sample Spaces Having Equally Likely Outcomes",
  "2.6": "Probability as a Continuous Set Function",
  "2.7": "Probability as a Measure of Belief",
  "3.1": "Introduction",
  "3.2": "Conditional Probabilities",
  "3.3": "Bayes\u2019s Formula",
  "3.4": "Independent Events",
  "3.5": "P( |F) Is a Probability",
  "4.1": "Random Variables",
  "4.2": "Discrete Random Variables",
  "4.3": "Expected Value",
  "4.4": "Expectation of a Function of a Random Variable",
  "4.5": "Variance",
  "4.6": "The Bernoulli and Binomial Random Variables",
  "4.7": "The Poisson Random Variable",
  "4.8": "Other Discrete Probability Distributions",
  "4.9": "Expected Value of Sums of Random Variables",
  "4.10": "Properties of the Cumulative Distribution function",
  "5.1": "Introduction",
  "5.2": "Expectation and Variance of Continuous Random Variables",
  "5.3": "The Uniform Random Variable",
  "5.4": "Normal Random Variables",
  "5.5": "Exponential Random Variables",
  "5.6": "Other Continuous Distributions",
  "5.7": "The Distribution of a Function of a Random Variable",
  "6.1": "Joint Distribution Functions",
  "6.2": "Independent Random Variables",
  "6.3": "Sums of Independent Random Variables",
  "6.4": "Conditional Distributions: Discrete Case",
  "6.5": "Conditional Distributions: Continuous Case",
  "6.6": "Order statistics",
  "6.7": "Joint Probability Distribution of Functions of Random Variables",
  "6.8": "Exchangeable Random Variables",
  "7.1": "Introduction",
  "7.2": "Expectation of Sums of Random Variables",
  "7.3": "Moments of the Number of Events that Occur",
  "7.4": "Covariance, Variance of Sums, and Correlations",
  "7.5": "Conditional Expectation",
  "7.6": "Conditional Expectation and Prediction",
  "7.7": "Moment Generating Functions",
  "7.8": "Additional Properties of Normal Random Variables",
  "7.9": "General Definition of Expectation",
  "8.1": "Introduction",
  "8.2": "Chebyshev\u2019s Inequality and the Weak Law of Large Numbers",
  "8.3": "The Central Limit Theorem",
  "8.4": "The Strong Law of Large Numbers",
  "8.5": "Other Inequalities and a Poisson Limit Result",
  "8.6": "Bounding the Error Probability When Approximating a Sum of Independent Bernoulli Random Variables by a Poisson Random Variable",
  "8.7": "The Lorenz Curve",
  "9.1": "The Poisson Process",
  "9.2": "Markov Chains",
  "9.3": "Surprise, Uncertainty, and Entropy",
  "9.4": "Coding Theory and Entropy",
  "10.1": "Introduction",
  "10.2": "General Techniques for Simulating Continuous Random Variables",
  "10.3": "Simulating from Discrete Distributions",
  "10.4": "Variance Reduction Techniques",
  "DA.1": "Descriptive summaries and sampling laws",
  "DA.2": "Confidence intervals",
  "DA.3": "Hypothesis tests"
};
const EXT_SECS = {"1.5": true, "1.6": true, "10.1": true, "10.2": true, "10.3": true, "10.4": true, "2.6": true, "2.7": true, "3.5": true, "4.8": true, "5.6": true, "6.3": true, "6.6": true, "6.7": true, "6.8": true, "7.3": true, "7.6": true, "7.7": true, "7.8": true, "7.9": true, "8.4": true, "8.5": true, "8.6": true, "8.7": true, "9.1": true, "9.2": true, "9.3": true, "9.4": true};
var CONCEPTS = [];
var QUESTIONS = [];
var OBJECTIVE = [];
var PYQ = [];
