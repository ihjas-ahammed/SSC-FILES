var OBJECTIVE = typeof OBJECTIVE !== 'undefined' ? OBJECTIVE : [];
OBJECTIVE.push(...
[
  {
    "id": "o.prob.DA.PYQ.2024.11",
    "course": "prob",
    "sec": "5.2",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "If W is Poisson with parameter 4, state its mean and variance as their sum.",
    "answer": {
      "value": 8,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Both are 4, so their sum is 8.",
    "tested": "Original similar drill for Poisson and standard normal moments.",
    "trap": "Forgetting that Poisson mean equals its variance.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2024 Q11; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2024.12",
    "course": "prob",
    "sec": "2.3",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "Four fair coins are tossed. Let A be at least three heads and B be at least three tails. Find P(A intersect B).",
    "answer": {
      "value": 0,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "The requirements together demand at least six heads-or-tails across four tosses; they cannot both hold.",
    "tested": "Original similar drill for Mutually incompatible coin-count events.",
    "trap": "Treating these events as independent.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2024 Q12; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2024.24",
    "course": "prob",
    "sec": "3.4",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "Suppose A and B are independent fair bits and C=A XOR B. Are A and B independent conditional on C=0? Enter 1 for yes, 0 for no.",
    "answer": {
      "value": 0,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Given C=0, A=B; only (0,0) and (1,1) occur, so the variables are dependent.",
    "tested": "Original similar drill for Collider dependence in a Bayesian network.",
    "trap": "Confusing unconditional independence with independence after collider conditioning.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2024 Q24; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2024.36",
    "course": "prob",
    "sec": "4.8",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "A fair coin is tossed until two consecutive heads occur. Find the expected number of tosses.",
    "answer": {
      "value": 6,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Let E be the expectation with no current head run and F with one head. E=1+E/2+F/2, F=1+E/2; solving yields E=6.",
    "tested": "Original similar drill for Waiting for two consecutive even die throws.",
    "trap": "Using a geometric mean for success probability 1/4 while ignoring overlap of consecutive pairs.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2024 Q36; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2024.56",
    "course": "prob",
    "sec": "6.1",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "Independent X~Unif[0,2], Y~Unif[1,3]. Find P(X>Y).",
    "answer": {
      "value": 0.125,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "The event region 1<y<x<2 has area 1/2; joint support area is 4, so probability is 1/8.",
    "tested": "Original similar drill for Probability for independent uniforms.",
    "trap": "Forgetting to clip the region to both supports.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2024 Q56; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2024.57",
    "course": "prob",
    "sec": "5.5",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "For an exponential rate λ, E[X]=Var(X)/3. Find λ.",
    "answer": {
      "value": 0.3333333333333333,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "1/λ=(1/λ²)/3 implies λ=1/3.",
    "tested": "Original similar drill for Exponential rate from mean and variance.",
    "trap": "Using exponential mean as λ rather than 1/λ.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2024 Q57; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2024.58",
    "course": "prob",
    "sec": "3.3",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "P(A)=0.3, P(B|A)=0.4, P(B|Aᶜ)=0.2. Find P(A|B).",
    "answer": {
      "value": 0.46153846153846156,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "P(B)=.4(.3)+.2(.7)=.26; posterior=.12/.26=6/13.",
    "tested": "Original similar drill for Bayes rule with a complemented event.",
    "trap": "Using the likelihood without the prior probability.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2024 Q58; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2024.62",
    "course": "prob",
    "sec": "DA.1",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "A fair binary target is split into two equally sized groups, each with target proportions 3/4 and 1/4. Find information gain in bits.",
    "answer": {
      "value": 0.1887,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Parent entropy is 1 bit. Each child entropy is H(1/4)=0.8113, so gain is 1-.8113=.1887 bits.",
    "tested": "Original similar drill for Information gain from a binary feature.",
    "trap": "Adding child entropies instead of taking parent minus weighted child entropy.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2024 Q62; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2024.64",
    "course": "prob",
    "sec": "6.1",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "A factorized joint assignment has factors 0.4, 0.5, 1, and 0.25. Find the joint probability.",
    "answer": {
      "value": 0.05,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Multiply the four assignment factors: .4×.5×1×.25=.05.",
    "tested": "Original similar drill for Bayesian-network joint probability.",
    "trap": "Leaving out a conditional factor.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2024 Q64; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2024.65",
    "course": "prob",
    "sec": "4.5",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "Let X indicate two heads in two fair tosses and Y indicate at least one head. Find Cov(X,Y).",
    "answer": {
      "value": 0.0625,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "E[XY]=1/4, E[X]=1/4, E[Y]=3/4, so covariance=1/4-3/16=1/16=.0625.",
    "tested": "Original similar drill for Covariance of nested coin events.",
    "trap": "Assuming the nested-event indicators are independent.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2024 Q65; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2024.27",
    "course": "prob",
    "sec": "DA.1",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "A dataset has mean 50 and standard deviation 8. Find the z-score of observation 62.",
    "answer": {
      "value": 1.5,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "(62-50)/8=1.5.",
    "tested": "Original similar drill for Z-score standardization.",
    "trap": "Using the variance in place of the standard deviation.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2024 Q27; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2024.34",
    "course": "prob",
    "sec": "DA.1",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "A sample of 20 values has mean 30. Add one value equal to 51 and find the new sample mean.",
    "answer": {
      "value": 31,
      "tol": 0.01,
      "dp": 3
    },
    "solution": "Old total is 20(30)=600; new total 651 over 21 gives 31.",
    "tested": "Original similar drill for Updating a sample mean.",
    "trap": "Averaging the two means without their sample sizes.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2024 Q34; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.11",
    "course": "prob",
    "sec": "7.1",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "If E[X|Y]=2Y and E[Y]=3, find E[X].",
    "answer": {
      "value": 6,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "By the tower property E[X]=E[E[X|Y]]=E[2Y]=6.",
    "tested": "Original similar drill for Tower property of conditional expectation.",
    "trap": "Stopping at the conditional expression instead of taking its expectation.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q11; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.19",
    "course": "prob",
    "sec": "5.1",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "A continuous variable is uniform on [a,8] and has median 5. Find a.",
    "answer": {
      "value": 2,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "The uniform median is the midpoint: (a+8)/2=5, so a=2.",
    "tested": "Original similar drill for Median from a linear CDF.",
    "trap": "Using the upper endpoint as the median.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q19; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.20",
    "course": "prob",
    "sec": "5.4",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "Let X=aZ+b for standard normal Z, E[X]=3 and Cov(X,Z)=4. Find Var(X).",
    "answer": {
      "value": 16,
      "tol": 0.01,
      "dp": 3
    },
    "solution": "Cov(aZ+b,Z)=a, so a=4. Therefore Var(X)=a²=16.",
    "tested": "Original similar drill for Recovering an affine normal transformation.",
    "trap": "Using a instead of a² for variance.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q20; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.21",
    "course": "prob",
    "sec": "5.5",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "An exponential rate λ has P(X>3)=1/8. Find λ.",
    "answer": {
      "value": 0.693147,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "e^{-3λ}=1/8, hence λ=ln(8)/3=ln2≈.6931.",
    "tested": "Original similar drill for Exponential rate from a survival probability.",
    "trap": "Forgetting to divide the logarithm by elapsed time.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q21; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.26",
    "course": "prob",
    "sec": "3.4",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "Mark 1 for true, 0 for false: Gibbs sampling gives an approximate posterior in a Bayesian network.",
    "answer": {
      "value": 1,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Gibbs sampling uses a Markov chain and is an approximate inference procedure.",
    "tested": "Original similar drill for Exact and approximate Bayesian-network inference.",
    "trap": "Treating an MCMC output as exact.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q26; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.31",
    "course": "prob",
    "sec": "3.3",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "Box A is chosen with probability .4 and has white fraction .5; box B has prior .6 and white fraction .25. Given white, find P(B).",
    "answer": {
      "value": 0.42857142857142855,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Joint B-and-white=.6(.25)=.15; total white=.4(.5)+.15=.35; posterior=3/7.",
    "tested": "Original similar drill for Bayes rule for selecting a box.",
    "trap": "Ignoring the prior box-selection chances.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q31; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.34",
    "course": "prob",
    "sec": "DA.1",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "For data (0,2),(1,1),(2,4), fit y=wx by least squares through the origin and find w.",
    "answer": {
      "value": 1.8,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "The slope is sum(xy)/sum(x²)=(0+1+8)/(0+1+4)=9/5=1.8.",
    "tested": "Original similar drill for Least-squares slope through the origin.",
    "trap": "Fitting an intercept although the model is constrained through the origin.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q34; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.35",
    "course": "prob",
    "sec": "3.3",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "For a feature x, posterior class probabilities are .72 and .28. A MAP classifier is used. Find its error probability.",
    "answer": {
      "value": 0.28,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "It chooses the first class; conditional error is the posterior mass of the other class, .28.",
    "tested": "Original similar drill for Bayes error for a naive Bayes posterior.",
    "trap": "Answering with the probability of the chosen class.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q35; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.36",
    "course": "prob",
    "sec": "5.4",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "For Z standard normal, find Var(Z²).",
    "answer": {
      "value": 2,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "E[Z²]=1 and E[Z⁴]=3, so Var(Z²)=3-1=2.",
    "tested": "Original similar drill for Variance of squared standard normal.",
    "trap": "Using the variance of Z rather than Z².",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q36; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.39",
    "course": "prob",
    "sec": "5.1",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "A variable has CDF F(x)=(x+2)/4 on [-2,2]. Find P(|X|≤1).",
    "answer": {
      "value": 0.5,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "F(1)-F(-1)=3/4-1/4=1/2.",
    "tested": "Original similar drill for Interval probability from a quadratic CDF.",
    "trap": "Using only one side of the symmetric interval.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q39; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.40",
    "course": "prob",
    "sec": "8.3",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "A sum of 400 iid Bernoulli(.5) variables is approximated normally. Find the z-score of cutoff 220 using mean and standard deviation.",
    "answer": {
      "value": 2,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Mean=200, sd=√100=10; z=(220-200)/10=2.",
    "tested": "Original similar drill for CLT approximation for a binomial interval.",
    "trap": "Dividing by the variance or using n rather than √n.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q40; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.41",
    "course": "prob",
    "sec": "4.8",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "If X is exponential with rate ln 5 and Y=floor(X), write P(Y=3)=q³(1-q). Find q.",
    "answer": {
      "value": 0.2,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "e^{-λ}=e^{-ln5}=1/5; the interval probability is (1/5)^3(4/5), so q=.2.",
    "tested": "Original similar drill for Floor of an exponential variable.",
    "trap": "Taking q to be the rate instead of the one-unit survival probability.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q41; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.45",
    "course": "prob",
    "sec": "2.3",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "Ten independent fair dice are rolled. Find P(at least one 6), to three decimals.",
    "answer": {
      "value": 0.838,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "The complement probability is (5/6)^10, so desired probability is 1-(5/6)^10≈.8385.",
    "tested": "Original similar drill for At least one success in repeated trials.",
    "trap": "Adding ten event probabilities without correcting overlaps.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q45; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.54",
    "course": "prob",
    "sec": "4.5",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "For n iid Bernoulli(.4) trials, find Var(sample proportion) at n=25.",
    "answer": {
      "value": 0.0096,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Variance is p(1-p)/n=.4(.6)/25=.0096.",
    "tested": "Original similar drill for Mean and variance of a sample proportion.",
    "trap": "Using p/n or forgetting 1-p.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q54; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.60",
    "course": "prob",
    "sec": "DA.1",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "A centered dataset has covariance eigenvalues 81, 16, 9. Find its maximum projected variance.",
    "answer": {
      "value": 81,
      "tol": 0.01,
      "dp": 3
    },
    "solution": "The Rayleigh quotient maximum over unit directions is the largest eigenvalue, 81.",
    "tested": "Original similar drill for Variance along the principal component.",
    "trap": "Returning the square root of the eigenvalue.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q60; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2025.61",
    "course": "prob",
    "sec": "4.3",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "With replacement, a black outcome occurs with probability .3 on each of 80 draws. Find expected black count.",
    "answer": {
      "value": 24,
      "tol": 0.01,
      "dp": 3
    },
    "solution": "Sum the 80 Bernoulli indicators: expectation=80(.3)=24.",
    "tested": "Original similar drill for Expected count with replacement.",
    "trap": "Assuming dependent draws despite replacement.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2025 Q61; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2026.19",
    "course": "prob",
    "sec": "1.5",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "A nonempty subset is uniformly chosen from {1,…,10}. Find the probability its product is even.",
    "answer": {
      "value": 0.6666666666666666,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "There are 1023 nonempty subsets. Odd-product subsets are the 2^5-1 nonempty subsets of the five odd numbers; thus favorable=1023-31=992, probability=992/1023.",
    "tested": "Original similar drill for Even product of a random nonempty subset.",
    "trap": "Counting the empty set as an outcome or as an odd-product subset.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2026 Q19; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2026.20",
    "course": "prob",
    "sec": "1.5",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "Choose uniformly among nonnegative quadruples summing to 12. Find the probability all coordinates are positive.",
    "answer": {
      "value": 0.3626373626373626,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "All weak compositions number C(15,3)=455. Positive ones number C(11,3)=165; ratio is 165/455.",
    "tested": "Original similar drill for Uniform random weak composition.",
    "trap": "Counting ordered tuples as unordered partitions.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2026 Q20; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2026.28",
    "course": "prob",
    "sec": "5.6",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "Two symmetric continuous laws have equal density at c>0; their density difference is positive on (0,c). If their CDFs agree at zero, is the first CDF larger at c? Enter 1 for yes, 0 for no.",
    "answer": {
      "value": 1,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "The CDF difference at c is its value at 0 plus the integral of the positive density difference on (0,c), hence is positive.",
    "tested": "Original similar drill for CDF comparison for normal and Cauchy laws.",
    "trap": "Equal endpoint densities alone do not establish the ordering; integrate the density gap.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2026 Q28; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2026.34",
    "course": "prob",
    "sec": "5.5",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "An exponential variable has P(X>4)=.6. Find P(X>8|X>4).",
    "answer": {
      "value": 0.6,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Memorylessness makes the conditional probability equal P(X>4)=.6.",
    "tested": "Original similar drill for Memorylessness from an exponential tail.",
    "trap": "Using the unconditional eight-unit survival rather than the residual four-unit survival.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2026 Q34; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2026.44",
    "course": "prob",
    "sec": "4.5",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "Let independent A and B satisfy A²=1 always, E[B]=0 and Var(B)=25. Find Var(AB).",
    "answer": {
      "value": 25,
      "tol": 0.01,
      "dp": 3
    },
    "solution": "E[AB]=E[A]E[B]=0 and E[A²B²]=E[A²]E[B²]=25; variance is 25.",
    "tested": "Original similar drill for Variance of a product with independent factors.",
    "trap": "Mistaking random sign for an extra factor in the second moment.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2026 Q44; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2026.45",
    "course": "prob",
    "sec": "8.2",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "If N_n~Poisson(n), find the limiting probability P(N_n≤n).",
    "answer": {
      "value": 0.5,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Center and scale by √n; the standardized cutoff is 0, and the CLT limit is Φ(0)=.5.",
    "tested": "Original similar drill for Poisson probability at its mean in the limit.",
    "trap": "The point mass at n vanishes but the cumulative half-mass does not.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2026 Q45; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2026.53",
    "course": "prob",
    "sec": "DA.3",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "If Z1,…,Z4 are independent standard normals, find the variance of their sum of squares.",
    "answer": {
      "value": 8,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "The sum is chi-square with 4 degrees of freedom; variance=2ν=8.",
    "tested": "Original similar drill for Chi-square laws from standard normals.",
    "trap": "Using its mean ν=4 as its variance.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2026 Q53; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2026.54",
    "course": "prob",
    "sec": "4.10",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "A discrete random variable has mass .3 at 0 and .7 at 2. Find F(1).",
    "answer": {
      "value": 0.3,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "F(1)=P(X≤1)=P(X=0)=.3.",
    "tested": "Original similar drill for CDF properties for a discrete variable.",
    "trap": "Using the strict inequality in place of the CDF convention.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2026 Q54; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2026.57",
    "course": "prob",
    "sec": "3.3",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "A disease has prevalence .2, sensitivity .9, and false-positive rate .1. Find disease probability given a positive test.",
    "answer": {
      "value": 0.6923076923076923,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Bayes: .9(.2)/[.9(.2)+.1(.8)]=.18/.26=9/13≈.6923.",
    "tested": "Original similar drill for Posterior probability after a diagnostic test.",
    "trap": "Ignoring the false-positive contribution in the denominator.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2026 Q57; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2026.63",
    "course": "prob",
    "sec": "6.2",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "X is symmetric about zero and E[Y|X]=X²+2. Assuming finite moments, find Cov(X,Y).",
    "answer": {
      "value": 0,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "E[XY]=E[X E(Y|X)]=E[X³+2X]=0 by symmetry; E[X]=0, hence covariance is 0.",
    "tested": "Original similar drill for Zero correlation from a symmetric conditional mean.",
    "trap": "Assuming zero correlation means independence.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2026 Q63; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2026.65",
    "course": "prob",
    "sec": "DA.1",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "A symmetric projection has eigenvalues 1 and 0. Find the maximum of x^T A x over unit vectors.",
    "answer": {
      "value": 1,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "For symmetric A the maximum Rayleigh quotient is its largest eigenvalue, here 1.",
    "tested": "Original similar drill for Maximum of the centering quadratic form.",
    "trap": "Confusing the maximum with the trace.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2026 Q65; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2026.64",
    "course": "prob",
    "sec": "6.1",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "Independent fair bits fill a 4×4 array. Find the probability a selected row and a selected column both have sum 2.",
    "answer": {
      "value": 0.140625,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "Condition on their shared cell B. If B=0, each line’s other three bits must sum to 2, probability 3/8 each; if B=1, each must sum to 1, also 3/8. Either way the joint probability is (3/8)^2=9/64=.140625.",
    "tested": "Original similar drill for Overlapping row and column sums in a Bernoulli matrix.",
    "trap": "The two sums are dependent through the shared crossing cell; condition on it first.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2026 Q64; not a past-paper question."
  },
  {
    "id": "o.prob.DA.PYQ.2026.62",
    "course": "prob",
    "sec": "DA.1",
    "type": "NAT",
    "marks": 2,
    "neg": 0,
    "time": 75,
    "prompt": "For n=10, the pairwise sum \\sum_i\\sum_j(x_i-x_j)^2 equals 180. Find the centered sum of squares \\sum_i(x_i-\\bar x)^2.",
    "answer": {
      "value": 9,
      "tol": 0.001,
      "dp": 3
    },
    "solution": "The identity gives pairwise sum=2n times centered sum, so 180/(20)=9.",
    "tested": "Original similar drill for Pairwise differences and sample variation.",
    "trap": "Dropping the factor 2n.",
    "tests": [],
    "provenance": "Original similar practice for GATE DA 2026 Q62; not a past-paper question."
  }
]
);
