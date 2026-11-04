var QUESTIONS = QUESTIONS || [];
QUESTIONS.push(...
[
  {
    "id": "w.prob.4.1.1",
    "course": "prob",
    "sec": "4.1",
    "marks": 4,
    "title": "Recognize the induced variable",
    "prompt": "(Adapted from Ross Problem 4.7.) Roll a fair die twice. Let X be the larger value and Y the first roll minus the second. List the possible values of X and Y and explain why each is a random variable.",
    "approach": "A random variable is a numerical function of an outcome. Enumerate the ranges rather than probabilities.",
    "solution": "Each outcome is an ordered pair (i,j) in {1,...,6}². X(i,j)=max(i,j), so X takes values {1,2,3,4,5,6}. Y(i,j)=i−j, so Y takes values {−5,−4,...,4,5}. Both assign a unique real number to every outcome, hence are random variables.",
    "trap": "Assuming a random variable must take every real value or have a continuous distribution.",
    "tests": [
      "c.prob.4.1.1"
    ]
  },
  {
    "id": "w.prob.4.1.2",
    "course": "prob",
    "sec": "4.1",
    "marks": 4,
    "title": "Read probability from a c.d.f.",
    "prompt": "An integer-valued X has c.d.f. F(0)=0.2, F(1)=0.5, F(2)=0.9. Find P(X=1), P(0<X≤2), and P(X>2).",
    "approach": "Use jumps for point masses and c.d.f. differences for half-open intervals.",
    "solution": "P(X=1)=F(1)−F(1−)=.5−.2=.3. P(0<X≤2)=F(2)−F(0)=.9−.2=.7. P(X>2)=1−F(2)=.1.",
    "trap": "For P(X=1), subtract F(0), not F(1); the jump at 1 is included in F(1).",
    "tests": [
      "c.prob.4.1.1",
      "c.prob.4.1.2",
      "c.prob.4.10.1"
    ]
  },
  {
    "id": "w.prob.4.2.1",
    "course": "prob",
    "sec": "4.2",
    "marks": 5,
    "title": "Build a pmf from a payoff",
    "prompt": "(Adapted from Ross Problem 4.1.) Two balls are selected uniformly without replacement from an urn with 8 white, 4 black, and 2 orange balls. The payoff is 2 units for each black and a loss of 1 unit for each white ball selected; orange balls contribute zero. Find the possible payoff values and their probabilities.",
    "approach": "For each color-count pair (w,b,o) with total 2, compute payoff 2b−w and combine pairs producing the same value.",
    "solution": "There are C(14,2)=91 unordered pairs. (w,b,o) and count: (2,0,0) gives −2 with C(8,2)=28; (1,1,0) gives 1 with 8·4=32; (1,0,1) gives −1 with 8·2=16; (0,2,0) gives 4 with C(4,2)=6; (0,1,1) gives 2 with 4·2=8; (0,0,2) gives 0 with C(2,2)=1. Thus divide these counts by 91. The six masses sum (28+32+16+6+8+1)/91=1.",
    "trap": "Counting ordered draws while using the unordered total C(14,2), or forgetting that distinct color compositions can collide in payoff.",
    "tests": [
      "c.prob.4.1.1",
      "c.prob.4.2.1"
    ]
  },
  {
    "id": "w.prob.4.2.2",
    "course": "prob",
    "sec": "4.2",
    "marks": 4,
    "title": "Validate a proposed mass function",
    "prompt": "A proposed pmf on {0,1,2,3} is p(k)=c(k+1). Find c and P(X≥2).",
    "approach": "First impose total mass one, then sum the requested tail masses.",
    "solution": "1=Σ_{k=0}^3c(k+1)=c(1+2+3+4)=10c, so c=1/10. Then P(X≥2)=c(3+4)=7/10.",
    "trap": "Normalizing k rather than k+1, or forgetting the support begins at k=0.",
    "tests": [
      "c.prob.4.2.1"
    ]
  },
  {
    "id": "w.prob.4.3.1",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Expected defective count",
    "prompt": "(Adapted from Ross Problem 4.28.) A sample of 3 items is selected at random from 20, of which 4 are defective. Find the expected number of defective items.",
    "approach": "Use indicators for whether each selected position is defective, or the hypergeometric mean.",
    "solution": "For each of the 3 selected positions, the probability of a defective item is 4/20. If I_j indicates a defective item in position j, the count X=ΣI_j. By linearity, E[X]=ΣP(I_j=1)=3(4/20)=3/5.",
    "trap": "The expected count is not obtained by treating the three draws as independent; linearity still works without independence.",
    "tests": [
      "c.prob.4.3.1",
      "c.prob.4.3.2",
      "c.prob.4.9.1"
    ]
  },
  {
    "id": "w.prob.4.3.2",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Expectation from a pmf",
    "prompt": "X has pmf P(X=−1)=1/4, P(X=0)=1/2, P(X=3)=1/4. Compute E[X] and explain its interpretation.",
    "approach": "Multiply each support value by its mass; use the result as a long-run average, not necessarily a possible value.",
    "solution": "E[X]=(−1)(1/4)+0(1/2)+3(1/4)=1/2. Over many independent repetitions, the average payoff approaches 0.5 under the law of large numbers conditions.",
    "trap": "Taking the average of support values without probability weights.",
    "tests": [
      "c.prob.4.3.1"
    ]
  },
  {
    "id": "w.prob.4.4.1",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Product of two dice: pmf and expectation",
    "prompt": "(Adapted from Ross Problem 4.2.) Roll two fair dice and let X be their product. Find the pmf of X, then use it to calculate E[X].",
    "approach": "Count ordered factor pairs (i,j) in {1,...,6}² for each attainable product, then apply LOTUS.",
    "solution": "The attainable products and ordered-pair counts are: 1:1, 2:2, 3:2, 4:3, 5:2, 6:4, 8:2, 9:1, 10:2, 12:4, 15:2, 16:1, 18:2, 20:2, 24:2, 25:1, 30:2, 36:1. Divide each count by 36 for the pmf; the counts sum to 36. By LOTUS, E[X]=Σ_x xP(X=x)=Σ_{i=1}^6Σ_{j=1}^6ij/36=[(1+2+3+4+5+6)/6]^2=49/4=12.25.",
    "trap": "Products need not be equally likely: 6 has four ordered factor pairs, while 5 has two.",
    "tests": [
      "c.prob.4.2.1",
      "c.prob.4.4.1"
    ]
  },
  {
    "id": "w.prob.4.4.2",
    "course": "prob",
    "sec": "4.4",
    "marks": 4,
    "title": "Compute a nonlinear moment",
    "prompt": "A variable X has values 0, 1, 2 with probabilities 1/4, 1/2, 1/4. Find E[X²] and compare it with (E[X])².",
    "approach": "Apply LOTUS separately to x and x².",
    "solution": "E[X]=0+1/2+2(1/4)=1. E[X²]=0+1/2+4(1/4)=3/2. Thus (E[X])²=1, which is not E[X²]. Their difference is Var(X)=1/2.",
    "trap": "Moving the square outside the expectation.",
    "tests": [
      "c.prob.4.4.1",
      "c.prob.4.5.1"
    ]
  },
  {
    "id": "w.prob.4.5.1",
    "course": "prob",
    "sec": "4.5",
    "marks": 4,
    "title": "Recover variance from moments",
    "prompt": "A discrete variable has E[X]=2 and E[X²]=7. Find Var(X) and SD(X). Then find Var(3X−4).",
    "approach": "Use the second-moment identity, then the affine transformation rule.",
    "solution": "Var(X)=E[X²]−(E[X])²=7−4=3, so SD(X)=√3. Var(3X−4)=9Var(X)=27.",
    "trap": "The shift −4 has no effect on variance; the multiplier 3 is squared.",
    "tests": [
      "c.prob.4.5.1",
      "c.prob.4.5.2"
    ]
  },
  {
    "id": "w.prob.4.5.2",
    "course": "prob",
    "sec": "4.5",
    "marks": 4,
    "title": "Variance of a centered indicator",
    "prompt": "Let I indicate an event A with probability p. Derive Var(I)=p(1−p).",
    "approach": "Use I²=I and the second-moment formula.",
    "solution": "E[I]=p and I²=I, so E[I²]=p. Therefore Var(I)=E[I²]−E[I]²=p−p²=p(1−p).",
    "trap": "An indicator’s variance is not p; p is its mean.",
    "tests": [
      "c.prob.4.5.1"
    ]
  },
  {
    "id": "w.prob.4.6.1",
    "course": "prob",
    "sec": "4.6",
    "marks": 5,
    "title": "Binomial event probability",
    "prompt": "(Adapted from Ross Example 6b.) Each screw is independently defective with probability .01. A package contains 10 screws and is replaced if at least 2 are defective. What fraction of packages is expected to be replaced?",
    "approach": "The defective count is Bin(10,.01). Compute the complement of zero or one defect.",
    "solution": "P(replace)=1−P(X=0)−P(X=1)=1−(.99)^10−10(.01)(.99)^9≈0.0042662, or about 0.427%.",
    "trap": "“At least 2” means subtract 0 and 1, not only the probability of exactly 2.",
    "tests": [
      "c.prob.4.6.1"
    ]
  },
  {
    "id": "w.prob.4.6.2",
    "course": "prob",
    "sec": "4.6",
    "marks": 5,
    "title": "Why binomial variance adds",
    "prompt": "(Adapted from Ross §4.6.1.) Let X count successes in n independent Bernoulli(p) trials. Prove E[X]=np and Var(X)=np(1−p).",
    "approach": "Write X as a sum of success indicators and use independence only in the variance step.",
    "solution": "Let I_j be 1 if trial j succeeds and 0 otherwise. Then E[I_j]=p and Var(I_j)=p(1−p) by I_j²=I_j. Since X=ΣI_j, linearity gives E[X]=np. Independence gives Cov(I_i,I_j)=0 for i≠j, hence Var(X)=ΣVar(I_j)=np(1−p).",
    "trap": "The mean proof needs no independence, while this variance proof does.",
    "tests": [
      "c.prob.4.6.1",
      "c.prob.4.6.2"
    ]
  },
  {
    "id": "w.prob.4.6.3",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Compute a binomial mass recursively",
    "prompt": "(Adapted from Ross Example 6h.) If X~Bin(6,.4), compute P(X=3) from P(X=2)=.31104 using the adjacent-mass relation.",
    "approach": "Use p(k+1)/p(k)=[(n−k)/(k+1)][p/(1−p)].",
    "solution": "For k=2, the ratio is (6−2)/3 · .4/.6=(4/3)(2/3)=8/9. Thus P(X=3)=.31104·8/9=.27648.",
    "trap": "The recursion is a ratio of neighboring pmf terms, not a c.d.f. relation.",
    "tests": [
      "c.prob.4.6.1",
      "c.prob.4.6.3"
    ]
  },
  {
    "id": "w.prob.4.7.1",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Poisson approximation to a binomial tail",
    "prompt": "(Adapted from Ross Example 7b.) A component is defective with probability .1, independently. For a sample of 10, compare the exact probability of at most one defect with the Poisson approximation using λ=np.",
    "approach": "Compute the exact binomial terms k=0,1; then use the Poisson(1) terms.",
    "solution": "Exact: P(X≤1)=.9^10+10(.1)(.9)^9≈.73610. With λ=10(.1)=1, Poisson approximation gives e^(−1)(1+1)=2/e≈.73576. The values are close, though n=10,p=.1 is only a moderate approximation regime.",
    "trap": "Poisson parameter is np=1, not p=.1.",
    "tests": [
      "c.prob.4.7.1"
    ]
  },
  {
    "id": "w.prob.4.7.2",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Poisson normalization and mean",
    "prompt": "For X~Poisson(λ), verify that the pmf sums to one and calculate E[X].",
    "approach": "Use the exponential series and shift the index in the expectation sum.",
    "solution": "Normalization: Σ_{k≥0}e^(−λ)λ^k/k!=e^(−λ)e^λ=1. Mean: Σ_{k≥1}k e^(−λ)λ^k/k!=λe^(−λ)Σ_{j≥0}λ^j/j!=λ.",
    "trap": "Begin the expectation sum at k=1 because the k=0 term vanishes, then reindex with j=k−1.",
    "tests": [
      "c.prob.4.7.1"
    ]
  },
  {
    "id": "w.prob.4.8.1",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Geometric waiting time",
    "prompt": "(Adapted from Ross §4.8.1.) A fair die is rolled until the first 6. Find the probability the waiting time exceeds 4 rolls and its expected value.",
    "approach": "No six in the first four rolls gives the tail event; use the geometric mean formula.",
    "solution": "P(X>4)=(5/6)^4=625/1296≈.4823. With p=1/6, E[X]=1/p=6 rolls.",
    "trap": "X counts the successful roll, so P(X>4) means four failures, not three.",
    "tests": [
      "c.prob.4.8.1"
    ]
  },
  {
    "id": "w.prob.4.8.2",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Negative-binomial endpoint",
    "prompt": "(Adapted from Ross §4.8.2.) For independent Bernoulli(p) trials, derive the probability that the rth success occurs exactly on trial n.",
    "approach": "Trial n must be success; among the preceding n−1 trials choose r−1 success positions.",
    "solution": "There are C(n−1,r−1) arrangements of the first n−1 trials with r−1 successes and n−r failures. Each has probability p^(r−1)(1−p)^(n−r), and the final success contributes p. Therefore P(X=n)=C(n−1,r−1)p^r(1−p)^(n−r), n≥r.",
    "trap": "The last success is fixed at trial n, which explains both the coefficient and support.",
    "tests": [
      "c.prob.4.8.2"
    ]
  },
  {
    "id": "w.prob.4.8.3",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Hypergeometric count",
    "prompt": "(Practice based on Ross §4.8 hypergeometric sampling.) A lot of 10 components has 4 defective. Three are inspected without replacement. Find the chance all inspected components are good.",
    "approach": "Use either combinations or the product of sequential conditional probabilities.",
    "solution": "There are 6 good components. The probability is C(6,3)/C(10,3)=20/120=1/6. Equivalently (6/10)(5/9)(4/8)=1/6.",
    "trap": "The draws are without replacement, so the conditional quality proportion changes after each good component.",
    "tests": [
      "c.prob.4.8.3"
    ]
  },
  {
    "id": "w.prob.4.8.4",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Normalize a power-law pmf",
    "prompt": "For α>0, a positive-integer variable has probabilities proportional to k^(−α−1). Find the normalizing constant and state why it is finite.",
    "approach": "Set the infinite sum of masses to 1 and identify the convergent p-series.",
    "solution": "Let C be the constant. Then 1=CΣ_{k=1}∞k^(−α−1), so C=[Σ k^(−α−1)]^(−1)=1/ζ(α+1). Since α+1>1, the p-series converges and C is finite and positive.",
    "trap": "The convergence condition is exponent greater than 1, equivalent to α>0.",
    "tests": [
      "c.prob.4.8.4"
    ]
  },
  {
    "id": "w.prob.4.9.1",
    "course": "prob",
    "sec": "4.9",
    "marks": 4,
    "title": "Expected number of occupied categories",
    "prompt": "Ten balls are independently assigned to one of 4 bins, with equal chance for each bin. Find the expected number of nonempty bins.",
    "approach": "For each bin define an indicator that it is occupied, then sum the indicator expectations.",
    "solution": "For bin j, let I_j indicate it is nonempty. P(I_j=1)=1−(3/4)^10. The occupied-bin count is Σ_{j=1}^4I_j, so by linearity E=4[1−(3/4)^10]≈3.7749. The indicators are dependent, but that does not affect expectation linearity.",
    "trap": "Do not assume the bin indicators are independent; their dependence is irrelevant for their summed mean.",
    "tests": [
      "c.prob.4.3.2",
      "c.prob.4.9.1"
    ]
  },
  {
    "id": "w.prob.4.9.2",
    "course": "prob",
    "sec": "4.9",
    "marks": 5,
    "title": "Variance with dependent indicators",
    "prompt": "Two events A and B have probabilities .5 each and P(A∩B)=.3. Find the variance of the number of events occurring.",
    "approach": "Use the four joint outcomes or add indicator variances and twice their covariance.",
    "solution": "Let N=I_A+I_B. E[N]=1. E[N²]=E[I_A+I_B+2I_AI_B]=.5+.5+2(.3)=1.6. Thus Var(N)=1.6−1²=.6. Equivalently Cov(I_A,I_B)=.3−.25=.05 and Var(N)=.25+.25+2(.05)=.6.",
    "trap": "Adding the two individual variances alone ignores covariance.",
    "tests": [
      "c.prob.4.5.1",
      "c.prob.4.9.2"
    ]
  },
  {
    "id": "w.prob.4.10.1",
    "course": "prob",
    "sec": "4.10",
    "marks": 4,
    "title": "C.d.f. of a sample maximum",
    "prompt": "(Adapted from Ross Self-Test Problem 4.10.) Draw m times independently with replacement from {1,...,n}, uniformly. Let X be the maximum. Find P(X=k).",
    "approach": "First calculate the c.d.f. event that every draw is at most k, then take a difference.",
    "solution": "P(X≤k)=(k/n)^m for k=1,...,n because all m draws must be among the first k values. Hence P(X=k)=P(X≤k)−P(X≤k−1)=[k^m−(k−1)^m]/n^m. For k=1 use 0^m=0; for k=n the formula also gives total upper-end mass.",
    "trap": "The event X=k requires at least one draw equal k, not that all draws equal k.",
    "tests": [
      "c.prob.4.1.1",
      "c.prob.4.10.1"
    ],
    "provenance": "Ross, 10e, Self-Test Problem 4.10, full-book PDF p. 190; adapted from the maximum of a uniform sample drawn with replacement."
  },
  {
    "id": "w.prob.4.10.2",
    "course": "prob",
    "sec": "4.10",
    "marks": 4,
    "title": "Prove right continuity",
    "prompt": "Use probability continuity from above to show the c.d.f. F(x)=P(X≤x) is right-continuous.",
    "approach": "Take any decreasing sequence x_n↓x and examine the corresponding events.",
    "solution": "If x_n decreases to x, then A_n={X≤x_n} is a decreasing sequence of events, and ∩_n A_n={X≤x}. Probability is continuous from above, so lim_n F(x_n)=lim_nP(A_n)=P(∩A_n)=P(X≤x)=F(x). This is right continuity.",
    "trap": "For right continuity, approach x from values greater than x; the event intersection includes X=x.",
    "tests": [
      "c.prob.4.1.2"
    ]
  },
  {
    "id": "w.prob.4.ross.example.1a",
    "course": "prob",
    "sec": "4.1",
    "marks": 4,
    "title": "Tossing three fair coins",
    "prompt": "A game consists of flipping 3 balanced coins. Let X denote the total number of heads that appear. Find the probability mass function of X and verify that the probabilities sum to 1.",
    "approach": "Enumerate the 8 equally likely outcomes in the sample space and count heads for each.",
    "solution": "The 8 equally likely outcomes are HHH, HHT, HTH, HTT, THH, THT, TTH, TTT. The variable X takes values in {0, 1, 2, 3}. P(X=0) = 1/8 (TTT); P(X=1) = 3/8 (HTT, THT, TTH); P(X=2) = 3/8 (HHT, HTH, THH); P(X=3) = 1/8 (HHH). Sum = 1/8 + 3/8 + 3/8 + 1/8 = 8/8 = 1.",
    "trap": "Do not assume outcomes 0, 1, 2, 3 heads are equally likely; 1 and 2 heads have three permutations each.",
    "tests": [
      "c.prob.4.1.1",
      "c.prob.4.2.1"
    ],
    "provenance": "Ross, 10e, §4.1, Example 1a, PDF p. 131."
  },
  {
    "id": "w.prob.4.ross.example.1b",
    "course": "prob",
    "sec": "4.1",
    "marks": 4,
    "title": "Independent life insurance payouts",
    "prompt": "An insurance agent has two elderly clients who each hold a life insurance policy paying 100,000 dollars upon death. Over the coming year, the younger client dies with probability 0.05 and the older client dies with probability 0.10, independently. Let X be the total payout in units of 100,000 dollars. Determine the possible values of X and their probabilities.",
    "approach": "Identify the four product outcomes for the two independent life events and map them to payouts 0, 1, and 2.",
    "solution": "Let Y be the event that the younger client dies (P(Y) = 0.05) and O be the event that the older client dies (P(O) = 0.10). By independence: (1) Neither dies: X = 0 with probability P(Y^c)P(O^c) = (0.95)(0.90) = 0.855. (2) Exactly one dies: X = 1 with probability P(Y)P(O^c) + P(Y^c)P(O) = (0.05)(0.90) + (0.95)(0.10) = 0.045 + 0.095 = 0.140. (3) Both die: X = 2 with probability P(Y)P(O) = (0.05)(0.10) = 0.005. The probabilities sum to 0.855 + 0.140 + 0.005 = 1.000.",
    "trap": "Remember to add both disjoint paths (younger only, older only) for the single-death payout X = 1.",
    "tests": [
      "c.prob.4.1.1",
      "c.prob.4.2.1"
    ],
    "provenance": "Ross, 10e, §4.1, Example 1b, PDF p. 131."
  },
  {
    "id": "w.prob.4.ross.example.1c",
    "course": "prob",
    "sec": "4.1",
    "marks": 4,
    "title": "Maximum numbered ball selected from an urn",
    "prompt": "Four numbered balls are randomly chosen without replacement from an urn containing 20 balls numbered 1 through 20. Let X be the largest number among the four chosen balls. (a) Find the probability mass function of X. (b) Compute P(X > 10).",
    "approach": "For X = k, ball k must be drawn, and the other 3 balls must be chosen from the k-1 balls numbered below k. For the tail, compute 1 - P(X <= 10).",
    "solution": "(a) The possible values of X are k in {4, 5, ..., 20}. The total number of unordered samples is C(20, 4) = 4845. For the maximum to equal k, ball k must be included and the remaining 3 balls must come from {1, 2, ..., k-1}, which can happen in C(k-1, 3) ways. Therefore, P(X = k) = C(k-1, 3) / C(20, 4) for k = 4, 5, ..., 20. (b) P(X <= 10) is the probability that all 4 selected balls are chosen from {1, 2, ..., 10}, which is C(10, 4) / C(20, 4) = 210 / 4845. Thus P(X > 10) = 1 - 210/4845 = 4635/4845 = 309/323 approx 0.9567.",
    "trap": "The maximum cannot be less than 4 since four distinct balls are drawn without replacement.",
    "tests": [
      "c.prob.4.1.1",
      "c.prob.4.2.1"
    ],
    "provenance": "Ross, 10e, §4.1, Example 1c, PDF pp. 131–132."
  },
  {
    "id": "w.prob.4.ross.example.1d",
    "course": "prob",
    "sec": "4.1",
    "marks": 4,
    "title": "Truncated geometric coin tossing",
    "prompt": "Independent flips of a coin with probability p of landing heads are conducted until either a head appears or a total of n flips have been made. Let X denote the total number of coin flips. Find the probability mass function of X and verify that its sum is 1.",
    "approach": "For k < n, flip k is the first head. For k = n, either the n-th flip is a head or all n flips are tails.",
    "solution": "For k = 1, 2, ..., n-1, X = k requires k-1 tails followed by a head on flip k, so P(X = k) = (1-p)^{k-1} p. The process terminates at flip n if the first n-1 flips are all tails, regardless of what happens on flip n; thus P(X = n) = (1-p)^{n-1}. Check sum: sum_{k=1}^{n-1} p(1-p)^{k-1} + (1-p)^{n-1} = p [1 - (1-p)^{n-1}] / [1 - (1-p)] + (1-p)^{n-1} = [1 - (1-p)^{n-1}] + (1-p)^{n-1} = 1.",
    "trap": "For the final value X = n, do not multiply by p; X reaches n whenever the first n-1 flips are tails.",
    "tests": [
      "c.prob.4.1.1",
      "c.prob.4.2.1"
    ],
    "provenance": "Ross, 10e, §4.1, Example 1d, PDF p. 132."
  },
  {
    "id": "w.prob.4.ross.example.1e",
    "course": "prob",
    "sec": "4.1",
    "marks": 5,
    "title": "Coupon collector tail probability via inclusion-exclusion",
    "prompt": "There are r distinct coupon types. Each coupon collected is independently and equally likely to be any of the r types. Let T be the number of coupons collected until a complete set containing at least one of each type is obtained. (a) For n >= r, use the inclusion-exclusion principle to find P(T > n). (b) Establish the upper bound P(T > n) <= r * (1 - 1/r)^n <= r * exp(-n/r). Also derive P(T=n) and the distribution of D_n, the number of different types in n draws.",
    "approach": "Let A_j be the event that coupon type j is missing among the first n selections. Then {T > n} is the union of the A_j. Apply inclusion-exclusion and Boole inequality.",
    "solution": "(a) Let A_j be the event that type j is absent from the first n coupons. For any subset of k distinct types, the probability that none of these k types appear in n selections is ((r-k)/r)^n. By the inclusion-exclusion formula: P(T > n) = P(union_{j=1}^r A_j) = sum_{k=1}^{r-1} (-1)^{k+1} C(r, k) ((r-k)/r)^n. (b) By Boole inequality: P(T > n) <= sum_{j=1}^r P(A_j) = r * ((r-1)/r)^n = r * (1 - 1/r)^n. Using 1 - x <= exp(-x) for x = 1/r, we get (1 - 1/r)^n <= exp(-n/r), hence P(T > n) <= r * exp(-n/r). For completion on draw n, subtract the tail probabilities: P(T=n)=P(T>n−1)−P(T>n). For exactly k distinct types choose those types in C(r,k) ways. All n draws lie in them and each appears; inclusion–exclusion within that group gives P(D_n=k)=C(r,k)r^{−n}∑_{j=0}^k(−1)^jC(k,j)(k−j)^n for 0≤k≤min(r,n). At n=0 there are no observed types, so D_0=0; use 0^0=1 in the counting sum.",
    "trap": "The index in the alternating sum terminates at r-1 because all r types cannot be simultaneously missing when n >= 1.",
    "tests": [
      "c.prob.4.1.1",
      "c.prob.4.1.2"
    ],
    "provenance": "Ross, 10e, §4.1, Example 1e, PDF pp. 132–134."
  },
  {
    "id": "w.prob.4.ross.example.2a",
    "course": "prob",
    "sec": "4.2",
    "marks": 4,
    "title": "Normalizing a discrete Poisson-like mass function",
    "prompt": "The probability mass function of a discrete random variable X is given by p(i) = c * lambda^i / i! for i = 0, 1, 2, ... where lambda > 0 is a known constant. (a) Determine the normalizing constant c. (b) Find P(X = 0). (c) Find P(X > 2).",
    "approach": "Use the Taylor series for exp(lambda) to sum all probabilities to 1, then calculate tail probabilities.",
    "solution": "(a) Since sum_{i=0}^infty p(i) = 1, we have c * sum_{i=0}^infty lambda^i / i! = c * exp(lambda) = 1, so c = exp(-lambda). (b) P(X = 0) = p(0) = exp(-lambda) * lambda^0 / 0! = exp(-lambda). (c) P(X > 2) = 1 - P(X <= 2) = 1 - [p(0) + p(1) + p(2)] = 1 - exp(-lambda) [1 + lambda + lambda^2 / 2].",
    "trap": "Do not forget the i = 0 term; 0! = 1 and lambda^0 = 1.",
    "tests": [
      "c.prob.4.2.1",
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, §4.2, Example 2a, PDF p. 136."
  },
  {
    "id": "w.prob.4.ross.example.3a",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Expected value of a fair die roll",
    "prompt": "A standard fair six-sided die is rolled. Let X be the face value showing. Compute E[X] directly from the definition of expectation and interpret the result.",
    "approach": "Each face 1 through 6 has probability 1/6. Sum the products of outcomes and their probabilities.",
    "solution": "E[X] = sum_{x=1}^6 x P(X = x) = (1 + 2 + 3 + 4 + 5 + 6)/6 = 21/6 = 7/2 = 3.5. Interpretation: 3.5 is the long-run average roll over many trials, not an outcome that can appear on any single roll.",
    "trap": "Do not confuse expected value with the most probable value; 3.5 cannot even be rolled.",
    "tests": [
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, §4.3, Example 3a, PDF p. 138."
  },
  {
    "id": "w.prob.4.ross.example.3b",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Expected value of an indicator variable",
    "prompt": "Let A be an event with probability P(A). The indicator random variable I_A is defined to equal 1 if A occurs and 0 if A does not occur. Directly compute E[I_A] and explain its significance.",
    "approach": "Use the discrete definition of expectation with possible values 0 and 1.",
    "solution": "The indicator I_A takes only two values: 1 with probability P(A), and 0 with probability 1 - P(A). By definition: E[I_A] = 1 * P(I_A = 1) + 0 * P(I_A = 0) = 1 * P(A) + 0 = P(A). Significance: The expectation of an indicator variable is identically equal to the probability of the corresponding event. This bridges event probabilities and expectations of random variables.",
    "trap": "An indicator variable only takes values 0 and 1; its expectation is a probability between 0 and 1.",
    "tests": [
      "c.prob.4.3.1",
      "c.prob.4.3.2"
    ],
    "provenance": "Ross, 10e, §4.3, Example 3b, PDF pp. 138–139."
  },
  {
    "id": "w.prob.4.ross.example.3c",
    "course": "prob",
    "sec": "4.3",
    "marks": 5,
    "title": "Optimal quiz show strategy",
    "prompt": "A contestant is offered two questions, question 1 (worth V_1 dollars, correct with probability P_1) and question 2 (worth V_2 dollars, correct with probability P_2). She may choose which question to answer first, but is allowed to attempt the second question only if she answers the first correctly. (a) Derive the condition under which answering question 1 first maximizes expected winnings. (b) If question 1 is worth 200 dollars with P_1 = 0.6 and question 2 is worth 100 dollars with P_2 = 0.8, which should she attempt first? Assume that knowing the two answers are independent events.",
    "approach": "Express expected winnings under each order and compare the algebraic expressions.",
    "solution": "(a) If question 1 is attempted first: She wins 0 with prob 1 - P_1, wins V_1 with prob P_1(1 - P_2), and wins V_1 + V_2 with prob P_1 P_2. Expected winnings E_1 = V_1 P_1 (1 - P_2) + (V_1 + V_2) P_1 P_2 = V_1 P_1 + V_2 P_1 P_2. By symmetry, attempting question 2 first gives E_2 = V_2 P_2 + V_1 P_1 P_2. She should attempt question 1 first iff E_1 >= E_2, which is V_1 P_1 (1 - P_2) >= V_2 P_2 (1 - P_1), or equivalently V_1 P_1 / (1 - P_1) >= V_2 P_2 / (1 - P_2). (b) For question 1: V_1 P_1 / (1 - P_1) = 200(0.6) / 0.4 = 120 / 0.4 = 300. For question 2: V_2 P_2 / (1 - P_2) = 100(0.8) / 0.2 = 80 / 0.2 = 400. Since 400 > 300, she should attempt question 2 first.",
    "trap": "Do not simply compare individual expected values V_i P_i; you must factor in the penalty (1 - P_i) of failing and losing access to the second question.",
    "tests": [
      "c.prob.4.3.1",
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, 10e, §4.3, Example 3c, PDF pp. 139–140."
  },
  {
    "id": "w.prob.4.ross.example.3d",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Class size paradox: bus passengers vs bus average",
    "prompt": "A group of 120 students travels on 3 buses carrying 36, 40, and 44 students, respectively. One of the 120 students is chosen uniformly at random. Let X be the number of students on the bus of that chosen student. (a) Compute E[X]. (b) Compare E[X] with the average number of students per bus and explain the discrepancy.",
    "approach": "The probability a student is on a bus of size s is proportional to s. Compute E[X] = sum s * (s / 120).",
    "solution": "(a) Since each student is equally likely to be selected: P(X = 36) = 36/120 = 3/10; P(X = 40) = 40/120 = 1/3; P(X = 44) = 44/120 = 11/30. E[X] = 36*(36/120) + 40*(40/120) + 44*(44/120) = (1296 + 1600 + 1936)/120 = 4832/120 = 1208/30 approx 40.2667 students. (b) The simple average number of students per bus is 120/3 = 40.0. E[X] = 40.27 is strictly greater than 40.0 because larger buses contain more students, so a randomly chosen student is more likely to belong to a more crowded bus (size-biasing).",
    "trap": "The probability of choosing a bus of size s is not 1/3; it is s/120, which gives greater weight to larger buses.",
    "tests": [
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, §4.3, Example 3d, PDF p. 140."
  },
  {
    "id": "w.prob.4.ross.example.4a",
    "course": "prob",
    "sec": "4.4",
    "marks": 4,
    "title": "Expectation of a squared random variable",
    "prompt": "Let X be a discrete random variable taking values -1, 0, and 1 with probabilities P(X = -1) = 0.2, P(X = 0) = 0.5, and P(X = 1) = 0.3. (a) Find the probability distribution of Y = X^2 and compute E[Y]. (b) Compare E[X^2] with (E[X])^2.",
    "approach": "Determine the pmf of Y = X^2 by collapsing pre-images, then verify via LOTUS: E[X^2] = sum x^2 p(x).",
    "solution": "(a) Since (-1)^2 = 1, 0^2 = 0, and 1^2 = 1, Y takes only values 0 and 1. P(Y = 0) = P(X = 0) = 0.5; P(Y = 1) = P(X = -1) + P(X = 1) = 0.2 + 0.3 = 0.5. By direct expectation: E[Y] = 0*(0.5) + 1*(0.5) = 0.5. Equivalently by LOTUS: E[X^2] = (-1)^2 (0.2) + 0^2 (0.5) + 1^2 (0.3) = 0.2 + 0.3 = 0.5. (b) E[X] = (-1)(0.2) + 0(0.5) + 1(0.3) = 0.1. Thus (E[X])^2 = (0.1)^2 = 0.01. Clearly E[X^2] = 0.5 != 0.01 = (E[X])^2; their difference is Var(X) = 0.49.",
    "trap": "Never assume E[g(X)] = g(E[X]); for nonlinear functions like squaring, E[X^2] >= (E[X])^2 by Jensen inequality.",
    "tests": [
      "c.prob.4.4.1",
      "c.prob.4.5.1"
    ],
    "provenance": "Ross, 10e, §4.4, Example 4a, PDF p. 141."
  },
  {
    "id": "w.prob.4.ross.example.4b",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Optimal inventory ordering for perishable items",
    "prompt": "A seasonal product earns net profit b for each unit sold and loses ℓ for each unit left unsold. Demand X has mass p(i),i≥0. Find the expected profit for stocking s≥0 units and the stocking quantities maximizing it.",
    "approach": "Profit for demand X and stock s is 15*min(X, s) - 10*s. Evaluate expected profit for s = 10, 11, 12, 13.",
    "solution": "At demand i≤s, profit is bi−ℓ(s−i); at i>s it is bs. Therefore G(s)=∑_{i=0}^s[bi−ℓ(s−i)]p(i)+bsP(X>s)=bs+(b+ℓ)∑_{i=0}^s(i−s)p(i). Adding one unit changes it by G(s+1)−G(s)=b−(b+ℓ)P(X≤s). For b,ℓ>0, stock to the first integer s with P(X≤s)≥b/(b+ℓ). Before this point an extra unit improves profit; after it an extra unit worsens profit. If equality holds, s and s+1 tie, and a gap in the demand support can extend the tie.",
    "trap": "Remember that unsold inventory costs 10 dollars each with no salvage value.",
    "tests": [
      "c.prob.4.4.1",
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, §4.4, Example 4b, PDF pp. 141–142."
  },
  {
    "id": "w.prob.4.ross.example.4c",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Expected utility and rational choice",
    "prompt": "A decision-maker faces consequences C_1, ..., C_n where C is the most preferred consequence (utility 1) and c is the least preferred (utility 0). For each intermediate consequence C_i, the utility u(C_i) is defined as the indifference probability such that receiving C_i for certain is equivalent to a lottery giving C with probability u(C_i) and c with probability 1 - u(C_i). Prove that Action 1 (yielding consequence C_i with probability p_i) is preferred to Action 2 (yielding C_i with probability q_i) if and only if sum_{i=1}^n p_i u(C_i) > sum_{i=1}^n q_i u(C_i).",
    "approach": "Replace each outcome C_i by its equivalent compound lottery involving only C and c, then compute the effective overall probability of obtaining the top consequence C.",
    "solution": "Under Action 1, consequence C_i is selected with probability p_i. Since C_i is equivalent to receiving C with probability u(C_i) and c with probability 1 - u(C_i), Action 1 is equivalent to a single lottery between C and c where the probability of receiving C is P_1(C) = sum_{i=1}^n p_i u(C_i). Similarly, Action 2 is equivalent to a lottery where C is obtained with probability P_2(C) = sum_{i=1}^n q_i u(C_i). Since the decision-maker strictly prefers C to c, Action 1 is preferred to Action 2 if and only if P_1(C) > P_2(C), which means sum_{i=1}^n p_i u(C_i) > sum_{i=1}^n q_i u(C_i). Thus rational choice maximizes expected utility.",
    "trap": "Utilities are not objective monetary values; they represent subjective indifference probabilities calibrated between the extreme outcomes.",
    "tests": [
      "c.prob.4.4.1",
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, §4.4, Example 4c, PDF pp. 142–143."
  },
  {
    "id": "w.prob.4.ross.example.5a",
    "course": "prob",
    "sec": "4.5",
    "marks": 4,
    "title": "Variance of a standard six-sided die roll",
    "prompt": "Let X be the outcome of rolling a fair six-sided die. Using the first and second moments of X, compute the variance Var(X) and the standard deviation SD(X).",
    "approach": "Compute E[X] and E[X^2] = sum x^2 / 6, then use Var(X) = E[X^2] - (E[X])^2.",
    "solution": "E[X] = 7/2 = 3.5. E[X^2] = (1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2)/6 = (1 + 4 + 9 + 16 + 25 + 36)/6 = 91/6. Var(X) = 91/6 - (7/2)^2 = 91/6 - 49/4 = (182 - 147)/12 = 35/12 approx 2.9167. Standard deviation SD(X) = sqrt(35/12) approx 1.7078.",
    "trap": "Variance is in squared units; do not forget to subtract the square of the mean.",
    "tests": [
      "c.prob.4.5.1",
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, 10e, §4.5, Example 5a, PDF p. 144."
  },
  {
    "id": "w.prob.4.ross.example.5b",
    "course": "prob",
    "sec": "4.5",
    "marks": 5,
    "title": "The friendship paradox: average friends of friends",
    "prompt": "In a social network of n individuals, person i has f(i) friends, and f = sum_{i=1}^n f(i) is twice the total number of friendships. Let X be a uniformly chosen individual from {1, ..., n}. Let Y be the individual chosen when a friendship paper slip is drawn uniformly at random (so P(Y = i) = f(i)/f). Prove the friendship paradox: E[f(Y)] >= E[f(X)], with equality if and only if every person has the exact same number of friends.",
    "approach": "Express E[f(X)] and E[f(Y)] in terms of moments of f(X), then apply the second-moment inequality E[Z^2] >= (E[Z])^2.",
    "solution": "Since X is uniform on {1, ..., n}: E[f(X)] = sum_{i=1}^n f(i)/n = f/n, and E[f(X)^2] = sum_{i=1}^n f(i)^2 / n. For Y, each friend-mention has probability 1/f, so P(Y = i) = f(i)/f. Thus: E[f(Y)] = sum_{i=1}^n f(i) P(Y = i) = sum_{i=1}^n f(i)^2 / f = [n * E[f(X)^2]] / [n * E[f(X)]] = E[f(X)^2] / E[f(X)]. Since Var(f(X)) = E[f(X)^2] - (E[f(X)])^2 >= 0, we have E[f(X)^2] >= (E[f(X)])^2. Dividing both sides by E[f(X)] > 0 gives E[f(Y)] = E[f(X)^2] / E[f(X)] >= E[f(X)]. Equality holds if and only if Var(f(X)) = 0, meaning all f(i) are identical.",
    "trap": "A random person is equally likely to be anyone, but a random friend is sampled with probability proportional to degree, heavily biasing towards popular people.",
    "tests": [
      "c.prob.4.5.1",
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, 10e, §4.5, Example 5b, PDF pp. 145–146."
  },
  {
    "id": "w.prob.4.ross.example.5c",
    "course": "prob",
    "sec": "4.5",
    "marks": 5,
    "title": "Birthday coincidence and the Cauchy-Schwarz moment inequality",
    "prompt": "In a year of m days, each person is independently born on day r with probability p_r (where sum_{r=1}^m p_r = 1). Let A_{i,j} be the event that persons i and j have the same birthday. (a) Find P(A_{1,3}). (b) Find P(A_{1,3} | A_{1,2}). (c) Show that P(A_{1,3} | A_{1,2}) >= P(A_{1,3}), proving that knowledge of a match between persons 1 and 2 increases the likelihood that person 3 also matches person 1.",
    "approach": "Condition on the birthday of person 1 and relate the conditional probability to moments of the probability distribution.",
    "solution": "(a) P(A_{1,3}) = sum_{r=1}^m P(person 1 on r, person 3 on r) = sum_{r=1}^m p_r^2. (b) The joint event A_{1,2} and A_{1,3} means persons 1, 2, and 3 are all born on the same day: P(A_{1,2} cap A_{1,3}) = sum_{r=1}^m p_r^3. Since P(A_{1,2}) = sum_{r=1}^m p_r^2, we have P(A_{1,3} | A_{1,2}) = sum_{r=1}^m p_r^3 / sum_{r=1}^m p_r^2. (c) Define a random variable W taking value p_r with probability p_r (since sum p_r = 1). Then E[W] = sum p_r^2 and E[W^2] = sum p_r^3. By the variance inequality E[W^2] >= (E[W])^2, we have sum p_r^3 >= (sum p_r^2)^2. Dividing both sides by sum p_r^2 yields sum p_r^3 / sum p_r^2 >= sum p_r^2, which is P(A_{1,3} | A_{1,2}) >= P(A_{1,3}).",
    "trap": "Do not assume birthdays are uniformly distributed; the inequality holds for any non-uniform day distribution.",
    "tests": [
      "c.prob.4.5.1",
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, 10e, §4.5, Example 5c, PDF p. 146."
  },
  {
    "id": "w.prob.4.ross.example.6a",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Coin flipping binomial probability mass function",
    "prompt": "Five fair coins are flipped independently. Let X be the number of heads obtained. Determine the complete probability mass function of X.",
    "approach": "X follows a binomial distribution with n = 5 and p = 1/2. Use P(X = k) = C(5, k) (1/2)^5.",
    "solution": "Since n = 5 and p = 1/2, total outcomes = 2^5 = 32. For each k in {0, 1, 2, 3, 4, 5}: P(X = 0) = C(5, 0)/32 = 1/32; P(X = 1) = C(5, 1)/32 = 5/32; P(X = 2) = C(5, 2)/32 = 10/32 = 5/16; P(X = 3) = C(5, 3)/32 = 10/32 = 5/16; P(X = 4) = C(5, 4)/32 = 5/32; P(X = 5) = C(5, 5)/32 = 1/32. Check sum: (1 + 5 + 10 + 10 + 5 + 1)/32 = 32/32 = 1.",
    "trap": "Symmetry guarantees P(X=k) = P(X=5-k); verify all 6 probabilities sum to 1.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, §4.6, Example 6a, PDF p. 148."
  },
  {
    "id": "w.prob.4.ross.example.6b",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Defective screw packaging replacement probability",
    "prompt": "A factory produces screws that are defective with probability 0.01 independently. Screws are packaged in boxes of 10 with a guarantee that at most 1 screw is defective. What proportion of packages must be replaced under this warranty?",
    "approach": "X ~ Bin(10, 0.01). A package is replaced if X >= 2. Use the complement P(X >= 2) = 1 - P(X = 0) - P(X = 1).",
    "solution": "Let X be the number of defective screws in a box of 10. P(X = 0) = C(10, 0) (0.01)^0 (0.99)^10 = (0.99)^10 approx 0.904382. P(X = 1) = C(10, 1) (0.01)^1 (0.99)^9 = 10 * 0.01 * (0.99)^9 approx 0.091352. The probability of at most 1 defective is P(X <= 1) = 0.904382 + 0.091352 = 0.995734. The probability the package must be replaced is P(replace) = 1 - P(X <= 1) = 1 - 0.995734 = 0.004266 (approx 0.43%).",
    "trap": "At most 1 defective includes both 0 and 1 defectives; do not subtract only P(X=0).",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, §4.6, Example 6b, PDF pp. 148–149."
  },
  {
    "id": "w.prob.4.ross.example.6c",
    "course": "prob",
    "sec": "4.6",
    "marks": 5,
    "title": "Expected winnings in chuck-a-luck / wheel of fortune",
    "prompt": "In the carnival game chuck-a-luck, a player bets 1 unit on a number between 1 and 6. Three fair dice are rolled. If the chosen number appears k times (k = 1, 2, 3), the player wins k units (plus original bet back). If the chosen number does not appear at all, the player loses 1 unit. (a) Find the probability mass function of the player net winnings X. (b) Compute E[X] and state whether the game is fair.",
    "approach": "The number of matching dice follows Bin(3, 1/6). Map matching counts to payouts: -1, +1, +2, +3.",
    "solution": "(a) Let M be the number of dice showing the player number. M ~ Bin(3, 1/6). P(M = 0) = (5/6)^3 = 125/216 (payout X = -1). P(M = 1) = C(3, 1)(1/6)^1(5/6)^2 = 75/216 (payout X = +1). P(M = 2) = C(3, 2)(1/6)^2(5/6)^1 = 15/216 (payout X = +2). P(M = 3) = C(3, 3)(1/6)^3(5/6)^0 = 1/216 (payout X = +3). (b) E[X] = (-1)*(125/216) + (1)*(75/216) + (2)*(15/216) + (3)*(1/216) = (-125 + 75 + 30 + 3)/216 = -17/216 approx -0.0787 units. The game is unfair: the house edge is 17/216 approx 7.87%.",
    "trap": "Players often mistakenly think 3 rolls give 3*(1/6) = 1/2 chance to win; multiple matches reduce the frequency of winning rounds below 50%.",
    "tests": [
      "c.prob.4.6.1",
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, §4.6, Example 6c, PDF p. 149."
  },
  {
    "id": "w.prob.4.ross.example.6d",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Mendelian genetics of dominant traits",
    "prompt": "Suppose a gene has a dominant allele d and a recessive allele r. Individuals with genotype dd or rd show the dominant phenotype, while rr shows the recessive phenotype. Two hybrid (rd) parents have 4 children. Assuming independent gene inheritance, what is the probability that exactly 3 of the 4 children display the dominant phenotype?",
    "approach": "Each child independently receives one allele from each parent. Determine the probability p of the dominant phenotype, then use Bin(4, p).",
    "solution": "Each child receives d from mother with prob 1/2 and d from father with prob 1/2. Genotype probabilities: dd with prob 1/4; rd with prob 2/4 = 1/2; rr with prob 1/4. The dominant appearance occurs for dd or rd, with probability p = 1/4 + 1/2 = 3/4. The number of dominant children X in 4 independent births follows Bin(n = 4, p = 3/4). P(X = 3) = C(4, 3) * (3/4)^3 * (1/4)^1 = 4 * (27/64) * (1/4) = 27/64 approx 0.4219 (or 42.19%).",
    "trap": "Hybrid children rd show the dominant appearance; the success probability is 3/4, not 1/2.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, §4.6, Example 6d, PDF pp. 149–150."
  },
  {
    "id": "w.prob.4.ross.example.6e",
    "course": "prob",
    "sec": "4.6",
    "marks": 5,
    "title": "Jury decision accuracy under majority voting",
    "prompt": "A jury of 12 members requires at least 8 votes to convict. If fewer than 8 vote guilty, the defendant is acquitted. Each juror independently makes the correct judgment with probability theta. Suppose the prior probability that the defendant is guilty is alpha. (a) Express the probability that the jury reaches a correct verdict. (b) Explain why knowing alpha is necessary to evaluate jury accuracy.",
    "approach": "Condition on whether the defendant is guilty or innocent, and express conditional accuracy using binomial sums.",
    "solution": "(a) Let G be the event the defendant is guilty (P(G) = alpha). If the defendant is guilty, convicting requires at least 8 guilty votes: P(correct | G) = sum_{i=8}^{12} C(12, i) theta^i (1 - theta)^{12-i}. If the defendant is innocent, an acquittal requires at most 7 guilty votes (meaning at least 5 innocent votes): P(correct | G^c) = sum_{i=5}^{12} C(12, i) theta^i (1 - theta)^{12-i}. By total probability: P(correct) = alpha sum_{i=8}^{12} C(12, i) theta^i (1 - theta)^{12-i} + (1 - alpha) sum_{i=5}^{12} C(12, i) theta^i (1 - theta)^{12-i}. (b) Because the voting thresholds are asymmetric (8 votes needed to convict, but only 5 non-guilty votes needed to acquit), the error rates of false conviction and false acquittal are unequal, making overall accuracy dependent on the base rate alpha.",
    "trap": "Notice the asymmetry: 8 votes needed for conviction means an innocent defendant is acquitted if at least 5 jurors correctly vote innocent.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, §4.6, Example 6e, PDF p. 151."
  },
  {
    "id": "w.prob.4.ross.example.6f",
    "course": "prob",
    "sec": "4.6",
    "marks": 5,
    "title": "Majority voting system reliability comparison",
    "prompt": "A system of n independent components functions if at least half of the components function. Each component independently functions with probability p. (a) For what values of p is a 5-component system more reliable than a 3-component system? (b) Prove that in general a (2k+1)-component system is more reliable than a (2k-1)-component system if and only if p > 1/2.",
    "approach": "Express the reliability of 2k+1 vs 2k-1 by conditioning on the number of functioning components among the first 2k-1.",
    "solution": "(a) For 3 components: P_3 = C(3,2)p^2(1-p) + p^3 = 3p^2 - 2p^3. For 5 components: P_5 = C(5,3)p^3(1-p)^2 + C(5,4)p^4(1-p) + p^5 = 10p^3(1-p)^2 + 5p^4(1-p) + p^5. Their difference simplifies to P_5 - P_3 = p^2 (1-p)^2 (2p - 1) * 3 [or C(3,1) p^2 (1-p)^2 (2p-1)]. Since p^2(1-p)^2 > 0 for 0 < p < 1, P_5 > P_3 iff 2p - 1 > 0, which means p > 1/2. (b) In general, let X be the number of working components among the first 2k-1. The (2k+1)-system outperforms the (2k-1)-system when X = k-1 and both new components work, but underperforms when X = k and both new components fail. The net difference is P_{2k+1} - P_{2k-1} = C(2k-1, k) p^k (1-p)^k (p - (1-p)) = C(2k-1, k) p^k (1-p)^k (2p - 1). This is strictly positive iff p > 1/2.",
    "trap": "Adding more components does not always increase reliability: if components fail more than half the time (p < 1/2), adding components increases system failure rate.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, §4.6, Example 6f, PDF pp. 151–152."
  },
  {
    "id": "w.prob.4.ross.example.6g",
    "course": "prob",
    "sec": "4.6",
    "marks": 5,
    "title": "Electoral college voter decisiveness in large states",
    "prompt": "In a close presidential election with two candidates in a state of odd population n = 2k + 1, assume all other 2k voters independently vote for either candidate with probability 1/2. A single voter is decisive if the remaining 2k voters split evenly. (a) Express the probability of a tie among the other 2k voters. (b) Use Stirling approximation to show this probability is approximately 1/sqrt(k pi). (c) If the state has nc electoral votes, show the voter average power is proportional to sqrt(n).",
    "approach": "Use the binomial term C(2k, k)(1/2)^{2k} and substitute Stirling formula k! approx sqrt(2 pi k) (k/e)^k.",
    "solution": "(a) The tie probability among 2k voters is P(tie) = C(2k, k) (1/2)^{2k} = (2k)! / [k! k! 2^{2k}]. (b) By Stirling formula, k! approx sqrt(2 pi k) (k/e)^k and (2k)! approx sqrt(4 pi k) (2k/e)^{2k}. Substituting gives P(tie) approx [sqrt(4 pi k) (2k/e)^{2k}] / [2 pi k (k/e)^{2k} 2^{2k}] = sqrt(4 pi k) / [2 pi k] = 2 sqrt(pi k) / [2 pi k] = 1 / sqrt(pi k). (c) Since n = 2k + 1 approx 2k, k approx n/2, so P(decisive) approx 1 / sqrt(pi n / 2) = sqrt(2 / (pi n)). A decisive voter changes all nc electoral votes. Average power = nc * P(decisive) approx nc * sqrt(2 / (pi n)) = c * sqrt(2n / pi). The voter power grows as sqrt(n), so individual voters in larger states wield more expected electoral influence.",
    "trap": "Do not confuse individual tie probability (which decreases as 1/sqrt(n)) with the voter power on electoral college votes (which scales as nc / sqrt(n) proportional to sqrt(n)).",
    "tests": [
      "c.prob.4.6.1",
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, §4.6, Example 6g, PDF pp. 153–155."
  },
  {
    "id": "w.prob.4.ross.example.6h",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Recursive computation of binomial probabilities",
    "prompt": "Let X ~ Bin(n = 6, p = 0.4). Starting from P(X = 0) = (0.6)^6, use the adjacent term recursion P(X = k+1) = [(n-k)/(k+1)] * [p/(1-p)] * P(X = k) to compute P(X = k) for all k = 1, 2, ..., 6.",
    "approach": "Calculate the step multiplier [(6-k)/(k+1)] * (0.4/0.6) = [(6-k)/(k+1)] * (2/3) successively.",
    "solution": "Base term: P(X = 0) = (0.6)^6 = 0.046656. Ratio factor: [p/(1-p)] = 0.4/0.6 = 2/3. For k = 0: P(X = 1) = (6/1)*(2/3)*P(X=0) = 4 * 0.046656 = 0.186624. For k = 1: P(X = 2) = (5/2)*(2/3)*P(X=1) = (5/3) * 0.186624 = 0.311040. For k = 2: P(X = 3) = (4/3)*(2/3)*P(X=2) = (8/9) * 0.311040 = 0.276480. For k = 3: P(X = 4) = (3/4)*(2/3)*P(X=3) = (1/2) * 0.276480 = 0.138240. For k = 4: P(X = 5) = (2/5)*(2/3)*P(X=4) = (4/15) * 0.138240 = 0.036864. For k = 5: P(X = 6) = (1/6)*(2/3)*P(X=5) = (1/9) * 0.036864 = 0.004096. Sum = 0.046656 + 0.186624 + 0.311040 + 0.276480 + 0.138240 + 0.036864 + 0.004096 = 1.000000.",
    "trap": "The index ratio is (n-k)/(k+1), which decreases with k; the peak occurs at k=2 where the ratio transitions across 1.",
    "tests": [
      "c.prob.4.6.1",
      "c.prob.4.6.3"
    ],
    "provenance": "Ross, 10e, §4.6.2, Example 6h, PDF pp. 154–155."
  },
  {
    "id": "w.prob.4.ross.example.6i",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Binomial tail probabilities for large n",
    "prompt": "Let X be a binomial random variable with parameters n = 100 and p = 0.75. Explain how to compute: (a) P(X = 70), and (b) P(X <= 70), and report their values.",
    "approach": "Mean is np = 75, variance np(1-p) = 18.75. Evaluate P(X = 70) = C(100, 70)(0.75)^70 (0.25)^30 and the cumulative tail sum.",
    "solution": "(a) P(X = 70) = C(100, 70) * (0.75)^70 * (0.25)^30 approx 0.04575. (b) The cumulative distribution function value is P(X <= 70) = sum_{k=0}^{70} C(100, k) (0.75)^k (0.25)^{100-k} approx 0.14954. By normal approximation with continuity correction: Z = (70.5 - 75) / sqrt(18.75) = -4.5 / 4.3301 = -1.039, giving Phi(-1.04) approx 0.1492, which matches closely.",
    "trap": "For large n, exact combinatorial terms require logarithmic or recursive evaluation to avoid arithmetic overflow.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, §4.6.2, Example 6i, PDF p. 155."
  },
  {
    "id": "w.prob.4.ross.example.7a",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Typographical misprints on a page",
    "prompt": "The number of typos on a printed page is modeled as a Poisson random variable with mean rate lambda = 0.5. What is the probability that a randomly selected page has: (a) zero typos? (b) at least one typo? (c) exactly two typos?",
    "approach": "Use the Poisson pmf P(X = k) = exp(-lambda) * lambda^k / k! with lambda = 0.5.",
    "solution": "(a) P(X = 0) = exp(-0.5) * 0.5^0 / 0! = exp(-0.5) approx 0.6065. (b) P(X >= 1) = 1 - P(X = 0) = 1 - exp(-0.5) approx 1 - 0.6065 = 0.3935. (c) P(X = 2) = exp(-0.5) * 0.5^2 / 2! = exp(-0.5) * 0.25 / 2 = 0.125 * exp(-0.5) approx 0.0758.",
    "trap": "At least one is computed via complement 1 - P(X=0), not by summing an infinite tail.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, §4.7, Example 7a, PDF p. 156."
  },
  {
    "id": "w.prob.4.ross.example.7b",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Poisson approximation to a small binomial sample",
    "prompt": "Suppose the probability that an item produced by a machine is defective is 0.1. In a random sample of 10 items, compare the exact probability of at most 1 defective with its Poisson approximation.",
    "approach": "Exact model is Bin(10, 0.1). Poisson approximation uses lambda = np = 10 * 0.1 = 1.0.",
    "solution": "Exact Binomial: P(X = 0) = (0.9)^10 approx 0.348678. P(X = 1) = 10 * (0.1)^1 * (0.9)^9 approx 0.387420. Exact sum P(X <= 1) = 0.348678 + 0.387420 = 0.736098 approx 0.7361. Poisson Approximation with lambda = 1: P(Y = 0) = exp(-1) approx 0.367879. P(Y = 1) = exp(-1) * 1 = exp(-1) approx 0.367879. Poisson sum P(Y <= 1) = 2 * exp(-1) approx 0.735759 approx 0.7358. Absolute difference is |0.7361 - 0.7358| = 0.0003, showing excellent accuracy even for moderate n = 10.",
    "trap": "Poisson approximation works remarkably well even when n is as small as 10, provided lambda = np is moderate.",
    "tests": [
      "c.prob.4.7.1",
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, §4.7, Example 7b, PDF p. 156."
  },
  {
    "id": "w.prob.4.ross.example.7c",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Radioactive particle emissions per second",
    "prompt": "In a physics experiment, 1 gram of radioactive material emits on average 3.2 alpha particles per second. (a) What probability distribution models the emission count in a 1-second interval? (b) Find the probability that no more than 2 alpha particles are emitted in a 1-second interval.",
    "approach": "Emissions from a vast number of atoms with tiny individual disintegration probabilities follow Poisson(lambda = 3.2).",
    "solution": "(a) Because the gram contains a huge number n of atoms, each with an independent tiny decay probability p such that np = 3.2, the number of emitted alpha particles X is closely modeled by a Poisson distribution with parameter lambda = 3.2. (b) P(X <= 2) = P(X = 0) + P(X = 1) + P(X = 2) = exp(-3.2) [1 + 3.2/1! + (3.2)^2/2!] = exp(-3.2) [1 + 3.2 + 5.12] = 9.32 * exp(-3.2) approx 9.32 * 0.040762 = 0.3799 (about 38.0%).",
    "trap": "Remember to divide the k=2 term by 2! = 2: (3.2)^2 / 2 = 5.12.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, §4.7, Example 7c, PDF p. 157."
  },
  {
    "id": "w.prob.4.ross.example.7d",
    "course": "prob",
    "sec": "4.7",
    "marks": 5,
    "title": "Length of the longest run of heads in n coin tosses",
    "prompt": "A coin with probability p of landing heads is tossed n times. Let k be an integer, and let N be the number of head runs of length k followed immediately by a tail (or at the very end). (a) Express E[N] under the Poisson paradigm. (b) For a fair coin (p = 1/2), approximate the probability that the longest run of heads is strictly less than k. (c) What is the typical scale of the longest run as a function of n? Derive an exact expression or recurrence for the run probability as well as the approximation.",
    "approach": "Define non-overlapping tail-marked run events E_i and apply the Poisson approximation for zero occurrences.",
    "solution": "(a) For i <= n - k, let E_i be the event that flips i, ..., i+k-1 are heads and flip i+k is a tail (P(E_i) = p^k (1-p)). Let E_{n-k+1} be heads on the final k flips (P = p^k). Total expected count E[N] = (n - k) p^k (1-p) + p^k. (b) Under the Poisson paradigm, the number of occurrences N is approximately Poisson with parameter lambda = E[N]. No run of length k occurs iff N = 0: P(L_n < k) = P(N = 0) approx exp(-E[N]). For a fair coin (p = 1/2, 1-p = 1/2): E[N] approx n (1/2)^{k+1}. Thus P(L_n < k) approx exp(-n / 2^{k+1}). (c) Setting n / 2^{k+1} approx 1 gives 2^{k+1} approx n, so k approx log_2(n) - 1. The longest run grows logarithmically as log_2(n). For an exact inclusion–exclusion expression count the k-head block followed by a tail, or a final k-head block without a tail. Overlapping such ending blocks cannot coexist. For n≥k and q=1−p the exact probability is ∑_{r=1}^{n−k+1}(−1)^{r+1}p^{kr}[C(n−rk,r)q^r+C(n−rk,r−1)q^{r−1}], interpreting invalid combinations as zero. The first coefficient places r disjoint k-head-plus-tail blocks; the second places r−1 such blocks before the final k heads. An efficient equivalent recurrence is A_j=0 for 0≤j<k,A_k=p^k, and A_n=A_{n−1}+(1−A_{n−k−1})qp^k for n>k. The added term counts a first run ending on the newest toss.",
    "trap": "Do not define run events without the terminating tail; consecutive overlapping run indicators have strong dependence that violates the Poisson assumption.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, §4.7, Example 7d, PDF pp. 158–161."
  },
  {
    "id": "w.prob.4.ross.example.7e",
    "course": "prob",
    "sec": "4.7",
    "marks": 5,
    "title": "Poisson approximation for pairs and triplets sharing birthdays",
    "prompt": "Earthquakes follow a Poisson process with rate 2 per week. (a) Find the chance of at least three earthquakes in two weeks. (b) Find the distribution of the waiting time to the next earthquake.",
    "approach": "Define success as a match among pairs (mean lambda = C(n,2)/365) and triplets (mean lambda_3 = C(n,3)/365^2). Set P(0 successes) = exp(-lambda) <= 1/2.",
    "solution": "(a) The two-week count has Poisson mean 4, so P(N≥3)=1−e^{−4}(1+4+4²/2)=1−13e^{−4}≈.7618967. (b) Waiting time T exceeds t≥0 weeks exactly when no earthquake occurs in those t weeks. Hence P(T>t)=e^{−2t}. Its CDF is 0 for t<0 and 1−e^{−2t} for t≥0, and its density is 2e^{−2t} on t>0. This is an exponential waiting-time law.",
    "trap": "For three people matching, the probability is (1/365)^2, not (1/365)^3, because person 1 can be born on any day.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, §4.7, Example 7e, PDF pp. 161–162."
  },
  {
    "id": "w.prob.4.ross.example.7f",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Recursive computation of Poisson cumulative distribution",
    "prompt": "A computer routine computes Poisson cumulative probabilities using the ratio P(X = i+1) = [lambda / (i+1)] * P(X = i). (a) If X is Poisson with lambda = 100, what is P(X <= 90)? (b) If Y is Poisson with lambda = 1000, what is P(Y <= 1075)?",
    "approach": "Use standard Poisson distribution tables or normal approximations Z = (k + 0.5 - lambda) / sqrt(lambda).",
    "solution": "(a) For lambda = 100: mean is 100, standard deviation is sqrt(100) = 10. Evaluating the sum up to 90 yields P(X <= 90) approx 0.17138. Normal approximation with continuity correction: Z = (90.5 - 100)/10 = -0.95, Phi(-0.95) approx 0.1711. (b) For lambda = 1000: mean is 1000, standard deviation is sqrt(1000) approx 31.6228. Evaluating the sum up to 1075 yields P(Y <= 1075) approx 0.99095. Normal approximation: Z = (1075.5 - 1000)/31.6228 = 75.5/31.6228 approx 2.3875, Phi(2.39) approx 0.9916.",
    "trap": "For large lambda, Poisson distributions are bell-shaped and can be checked using normal approximations.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, §4.7, Example 7f, PDF pp. 162–163."
  },
  {
    "id": "w.prob.4.ross.example.8a",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Geometric sampling with replacement from an urn",
    "prompt": "An urn contains N white balls and M black balls. Balls are drawn randomly one at a time with replacement until the first black ball is selected. (a) What is the probability that exactly n draws are needed? (b) What is the probability that at least k draws are needed?",
    "approach": "Each draw independently yields black with probability p = M / (M + N). Use geometric pmf and tail formulas.",
    "solution": "Let p = M / (M + N) and q = 1 - p = N / (M + N). Let X be the number of draws until the first black ball. (a) Exactly n draws means the first n - 1 balls are white and the n-th is black: P(X = n) = q^{n-1} p = [N / (M + N)]^{n-1} * [M / (M + N)] = M N^{n-1} / (M + N)^n. (b) At least k draws are needed if and only if the first k - 1 draws all result in white balls: P(X >= k) = q^{k-1} = [N / (M + N)]^{k-1}.",
    "trap": "P(X >= k) means the first k-1 draws are failures; do not use exponent k.",
    "tests": [
      "c.prob.4.8.1"
    ],
    "provenance": "Ross, 10e, §4.8.1, Example 8a, PDF p. 163."
  },
  {
    "id": "w.prob.4.ross.example.8b",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Expected value of a geometric random variable",
    "prompt": "Let X be a geometric random variable with parameter p, so P(X = n) = (1 - p)^{n-1} p for n = 1, 2, ... Prove that E[X] = 1/p.",
    "approach": "Expand E[X] = sum_{n=1}^infty n (1-p)^{n-1} p by splitting n = (n-1) + 1, or by conditioning on the first trial.",
    "solution": "Let q = 1 - p. Then E[X] = sum_{n=1}^infty n q^{n-1} p. Split n = (n-1) + 1: E[X] = sum_{n=1}^infty (n-1) q^{n-1} p + sum_{n=1}^infty q^{n-1} p. The second sum is the total probability sum_{n=1}^infty P(X = n) = 1. In the first sum, let j = n - 1: sum_{j=1}^infty j q^j p = q sum_{j=1}^infty j q^{j-1} p = q E[X]. Thus E[X] = q E[X] + 1 <=> (1 - q) E[X] = 1. Since 1 - q = p, we obtain E[X] = 1/p. For example, rolling a die until rolling a 1 (p = 1/6) has expected waiting time 1/(1/6) = 6 rolls.",
    "trap": "Remember X counts the trial of the first success (support 1, 2, ...), so the mean is 1/p, not (1-p)/p.",
    "tests": [
      "c.prob.4.8.1",
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, §4.8.1, Example 8b, PDF p. 163."
  },
  {
    "id": "w.prob.4.ross.example.8c",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Variance of a geometric random variable",
    "prompt": "Let X be a geometric random variable with parameter p. Directly compute E[X^2] and show that Var(X) = (1 - p) / p^2.",
    "approach": "Write n^2 = (n-1)^2 + 2(n-1) + 1 to establish a linear equation for E[X^2] in terms of E[X] = 1/p.",
    "solution": "Let q = 1 - p. E[X^2] = sum_{n=1}^infty n^2 q^{n-1} p. Using n = (n-1) + 1, n^2 = (n-1)^2 + 2(n-1) + 1: E[X^2] = sum (n-1)^2 q^{n-1} p + 2 sum (n-1) q^{n-1} p + sum q^{n-1} p = q E[X^2] + 2q E[X] + 1. Since E[X] = 1/p: (1 - q) E[X^2] = 2q(1/p) + 1 <=> p E[X^2] = 2q/p + 1 = (2q + p)/p. Thus E[X^2] = (2q + p)/p^2 = (q + 1)/p^2. Now compute variance: Var(X) = E[X^2] - (E[X])^2 = (q + 1)/p^2 - 1/p^2 = q/p^2 = (1 - p)/p^2.",
    "trap": "Notice the numerator of variance is 1-p, whereas the mean has numerator 1.",
    "tests": [
      "c.prob.4.8.1",
      "c.prob.4.5.1"
    ],
    "provenance": "Ross, 10e, §4.8.1, Example 8c, PDF pp. 163–164."
  },
  {
    "id": "w.prob.4.ross.example.8d",
    "course": "prob",
    "sec": "4.8",
    "marks": 5,
    "title": "Problem of the points via the negative binomial distribution",
    "prompt": "Two players play independent rounds where player A wins each round with probability p. Player A needs k more round wins to win the match, while player B needs m more round wins. Express the probability that player A wins the match as a negative binomial sum.",
    "approach": "Player A wins the match before player B wins if and only if the k-th success occurs at or before trial k + m - 1.",
    "solution": "Let X be the round number on which player A achieves her k-th win. Then X follows a negative binomial distribution with parameters (k, p), taking values n in {k, k+1, ..., k+m-1, ...}. Player A achieves k wins before player B achieves m wins if and only if X <= k + m - 1 (because if player A has k wins in at most k + m - 1 rounds, player B has at most (k + m - 1) - k = m - 1 wins). Therefore: P(A wins) = sum_{n=k}^{k+m-1} P(X = n) = sum_{n=k}^{k+m-1} C(n-1, k-1) p^k (1-p)^{n-k}.",
    "trap": "The upper summation limit is k+m-1, which represents the maximum number of rounds before one player must reach their quota.",
    "tests": [
      "c.prob.4.8.2"
    ],
    "provenance": "Ross, 10e, §4.8.2, Example 8d, PDF p. 164."
  },
  {
    "id": "w.prob.4.ross.example.8e",
    "course": "prob",
    "sec": "4.8",
    "marks": 5,
    "title": "Banach matchbox problem",
    "prompt": "A pipe smoker keeps a matchbox containing N matches in his left pocket and another box containing N matches in his right pocket. Each time he needs a match, he randomly picks a pocket with probability 1/2. When he first discovers that his chosen box is empty, find the probability that there are exactly k matches remaining in the other box (0 <= k <= N).",
    "approach": "The smoker discovers an empty box when he reaches for that box for the (N+1)-th time. That means exactly N+1 selections of that pocket have occurred, and N-k selections of the other pocket.",
    "solution": "Consider the left box. The smoker discovers it empty on the (N+1)-th left-pocket reach. At that moment, he has made exactly N + (N - k) = 2N - k earlier reaches, of which exactly N were to the left pocket and N - k were to the right pocket. The number of such sequences is C(2N - k, N), and the final reach is to the left pocket. The probability of this sequence is C(2N - k, N) * (1/2)^{2N - k + 1}. By symmetry, the same holds with the roles of left and right pockets reversed. Therefore, the total probability that k matches remain in the other box when an empty box is discovered is 2 * C(2N - k, N) * (1/2)^{2N - k + 1} = C(2N - k, N) * (1/2)^{2N - k} for k = 0, 1, ..., N.",
    "trap": "Notice the box is discovered empty on the (N+1)-th reach to it, not when the last match is taken.",
    "tests": [
      "c.prob.4.8.2"
    ],
    "provenance": "Ross, 10e, §4.8.2, Example 8e, PDF pp. 164–165."
  },
  {
    "id": "w.prob.4.ross.example.8f",
    "course": "prob",
    "sec": "4.8",
    "marks": 5,
    "title": "Mean and variance of the negative binomial distribution",
    "prompt": "A negative binomial random variable X with parameters (r, p) represents the number of trials required to amass r successes. Prove that: (a) E[X] = r/p, and (b) Var(X) = r(1-p)/p^2.",
    "approach": "Express X as the sum of r independent geometric random variables Y_1 + ... + Y_r, each with parameter p.",
    "solution": "Let Y_1 be the number of trials until the 1st success, Y_2 the number of additional trials until the 2nd success, ..., and Y_r the number of additional trials from the (r-1)-th to the r-th success. Since trials are independent and memoryless, Y_1, ..., Y_r are independent and identically distributed Geometric(p) random variables. (a) By linearity of expectation: E[X] = sum_{i=1}^r E[Y_i] = sum_{i=1}^r (1/p) = r/p. (b) Because Y_1, ..., Y_r are independent, their variances add: Var(X) = sum_{i=1}^r Var(Y_i) = sum_{i=1}^r (1-p)/p^2 = r(1-p)/p^2.",
    "trap": "Sum of geometric variables makes the derivation immediate; algebraic expansion of moments directly is far more tedious.",
    "tests": [
      "c.prob.4.8.2",
      "c.prob.4.5.1"
    ],
    "provenance": "Ross, 10e, §4.8.2, Example 8f, PDF p. 164."
  },
  {
    "id": "w.prob.4.ross.example.8g",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Rolling a die until four aces appear",
    "prompt": "A fair six-sided die is rolled repeatedly until the number 1 (an ace) has appeared 4 times. Let X be the total number of rolls required. (a) Find E[X]. (b) Find Var(X).",
    "approach": "X follows a negative binomial distribution with parameters r = 4 and p = 1/6.",
    "solution": "Here success is rolling a 1, which has probability p = 1/6, and failure has probability 1 - p = 5/6. We require r = 4 successes. (a) E[X] = r / p = 4 / (1/6) = 4 * 6 = 24 rolls. (b) Var(X) = r(1 - p) / p^2 = 4 * (5/6) / (1/36) = (20/6) * 36 = 120. Standard deviation SD(X) = sqrt(120) approx 10.95 rolls.",
    "trap": "Do not confuse rolls until 4 aces with rolls until rolling a 4; here r = 4 and p = 1/6.",
    "tests": [
      "c.prob.4.8.2",
      "c.prob.4.5.1"
    ],
    "provenance": "Ross, 10e, §4.8.2, Example 8g, PDF pp. 164–165."
  },
  {
    "id": "w.prob.4.ross.example.8h",
    "course": "prob",
    "sec": "4.8",
    "marks": 5,
    "title": "Capture-recapture maximum likelihood estimation",
    "prompt": "An unknown population of N animals lives in a region. Ecologists catch and tag m animals, then release them. Later, a second sample of n animals is captured, of which i are found to be tagged. (a) Formulate the probability mass function of the tagged count X. (b) Find the maximum likelihood estimate (MLE) of the total population size N.",
    "approach": "X follows Hypergeometric(N, m, n). Examine the ratio P_i(N) / P_i(N-1) >= 1 to find the integer N maximizing the likelihood.",
    "solution": "(a) The tagged animals in the second catch follow a hypergeometric distribution: P(X = i) = P_i(N) = C(m, i) C(N-m, n-i) / C(N, n). (b) Consider the ratio of successive likelihoods: P_i(N) / P_i(N-1) = [C(N-m, n-i) / C(N, n)] / [C(N-1-m, n-i) / C(N-1, n)] = [(N-m)(N-n)] / [N(N-m-n+i)]. The ratio P_i(N) / P_i(N-1) >= 1 holds iff (N-m)(N-n) >= N(N-m-n+i) <=> N^2 - (m+n)N + mn >= N^2 - (m+n)N + Ni <=> mn >= Ni <=> N <= mn/i. Thus P_i(N) increases as long as N <= mn/i, and decreases thereafter. The maximum likelihood estimate is hat{N} = floor(mn/i). Example: If m = 50 tagged, n = 40 recaptured, and i = 4 tagged, then hat{N} = floor(50 * 40 / 4) = 500 animals.",
    "trap": "The likelihood ratio comparison is the discrete analogue of setting the derivative to zero; the threshold is mn/i.",
    "tests": [
      "c.prob.4.8.3"
    ],
    "provenance": "Ross, 10e, §4.8.3, Example 8h, PDF p. 165."
  },
  {
    "id": "w.prob.4.ross.example.8i",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Acceptance sampling of electrical components",
    "prompt": "A purchaser buys electrical components in lots of 10. For each lot, 3 components are sampled at random without replacement and tested; the lot is accepted only if all 3 are nondefective. Suppose 30% of incoming lots contain 4 defectives and 70% contain 1 defective. What overall fraction of lots is rejected?",
    "approach": "Compute the probability of accepting a lot under each quality type using hypergeometric probabilities, then apply total probability.",
    "solution": "Let A be the event that a lot is accepted (all 3 tested items good). Case 1: Lot has 4 defectives (and 6 good items). P(A | 4 def) = C(6, 3) / C(10, 3) = 20 / 120 = 1/6. Case 2: Lot has 1 defective (and 9 good items). P(A | 1 def) = C(9, 3) / C(10, 3) = 84 / 120 = 7/10. Overall probability of acceptance: P(A) = 0.30 * P(A | 4 def) + 0.70 * P(A | 1 def) = 0.30 * (20/120) + 0.70 * (84/120) = 6/120 + 58.8/120 = 64.8/120 = 0.05 + 0.49 = 0.54. The proportion of lots rejected is P(reject) = 1 - P(A) = 1 - 0.54 = 0.46 (46%).",
    "trap": "Draws are without replacement, so use C(good, 3)/C(10, 3), not binomial (good/10)^3.",
    "tests": [
      "c.prob.4.8.3"
    ],
    "provenance": "Ross, 10e, §4.8.3, Example 8i, PDF p. 165."
  },
  {
    "id": "w.prob.4.ross.example.8j",
    "course": "prob",
    "sec": "4.8",
    "marks": 5,
    "title": "Mean and variance of the hypergeometric distribution",
    "prompt": "A sample of n balls is chosen randomly without replacement from an urn containing N balls, of which m are white. Let X be the number of white balls chosen. Let p = m/N. Prove that: (a) E[X] = np, and (b) Var(X) = np(1-p) * [(N-n)/(N-1)].",
    "approach": "Write X = sum_{i=1}^n I_i where I_i indicates whether the i-th drawn ball is white, or use factorial moments.",
    "solution": "Let I_i = 1 if the i-th ball drawn is white, 0 otherwise. Since every ball is equally likely to be selected in position i: P(I_i = 1) = m/N = p. (a) By linearity of expectation: E[X] = sum_{i=1}^n E[I_i] = n * p = nm/N. (b) Var(I_i) = p(1-p). For i != j, P(I_i = 1, I_j = 1) = (m/N) * ((m-1)/(N-1)). Thus Cov(I_i, I_j) = E[I_i I_j] - E[I_i]E[I_j] = [m(m-1)] / [N(N-1)] - (m/N)^2 = (m/N) * [(m-1)/(N-1) - m/N] = p * [(Nm - N - Nm + m) / (N(N-1))] = -p(1-p) / (N-1). Now Var(X) = sum Var(I_i) + sum_{i != j} Cov(I_i, I_j) = n p(1-p) - n(n-1) p(1-p) / (N-1) = n p(1-p) [1 - (n-1)/(N-1)] = n p(1-p) [(N - n)/(N - 1)].",
    "trap": "The finite population correction factor (N-n)/(N-1) is strictly less than 1, meaning sampling without replacement has strictly smaller variance than sampling with replacement.",
    "tests": [
      "c.prob.4.8.3",
      "c.prob.4.5.1"
    ],
    "provenance": "Ross, 10e, §4.8.3, Example 8j, PDF pp. 165–166."
  },
  {
    "id": "w.prob.4.ross.example.9a",
    "course": "prob",
    "sec": "4.9",
    "marks": 4,
    "title": "Additivity of expectations: coin flip segments",
    "prompt": "A coin is flipped 5 times. Let X be the number of heads in the first 3 flips, and let Y be the number of heads in the final 2 flips. Let Z = X + Y be the total number of heads. Show that E[Z] = E[X] + E[Y] directly from sample space outcomes and probabilities.",
    "approach": "Represent Z(s) = X(s) + Y(s) for each sequence s in {H, T}^5 and group the expectation sum.",
    "solution": "Let S = {H, T}^5 be the sample space of 32 outcomes, each with probability p(s). For any sequence s = (s_1, ..., s_5), Z(s) is the total heads, X(s) is heads in the first 3 coordinates, and Y(s) is heads in the last 2 coordinates, so Z(s) = X(s) + Y(s) identically. By definition: E[Z] = sum_{s in S} Z(s) p(s) = sum_{s in S} [X(s) + Y(s)] p(s) = sum_{s in S} X(s) p(s) + sum_{s in S} Y(s) p(s) = E[X] + E[Y]. If the coin has P(H) = p: E[X] = 3p, E[Y] = 2p, and E[Z] = 5p, confirming 3p + 2p = 5p.",
    "trap": "Expectations add unconditionally for any random variables on the same probability space; no independence is needed.",
    "tests": [
      "c.prob.4.3.2",
      "c.prob.4.9.1"
    ],
    "provenance": "Ross, 10e, §4.9, Example 9a, PDF p. 167."
  },
  {
    "id": "w.prob.4.ross.example.9b",
    "course": "prob",
    "sec": "4.9",
    "marks": 4,
    "title": "Expected sum of two rolled dice",
    "prompt": "Flip a coin independently twice with head chance p. X counts the heads. Verify its mean both from the mass function and from the four sample outcomes.",
    "approach": "Express the sum X = X_1 + X_2 where X_1 and X_2 are the face values of the two dice.",
    "solution": "The mass at 0,1,2 is (1−p)²,2p(1−p),p². Its mean is 0·(1−p)²+1·2p(1−p)+2p²=2p. Directly the outcomes HH,HT,TH,TT contribute 2p²,p(1−p),(1−p)p,0, again summing to 2p. This verifies outcome-level averaging agrees with value-level averaging.",
    "trap": "Linearity avoids computing the full 11-term probability distribution of the sum (from 2 to 12).",
    "tests": [
      "c.prob.4.3.2",
      "c.prob.4.9.1"
    ],
    "provenance": "Ross, 10e, §4.9, Example 9b, PDF pp. 167–168."
  },
  {
    "id": "w.prob.4.ross.example.9c",
    "course": "prob",
    "sec": "4.9",
    "marks": 4,
    "title": "Expected sum of n fair dice",
    "prompt": "Suppose n fair six-sided dice are rolled. What is the expected value of the sum of the upturned faces?",
    "approach": "Express the sum as sum_{i=1}^n X_i where each X_i is the outcome of the i-th die.",
    "solution": "Let X = sum_{i=1}^n X_i, where X_i is the outcome of die i. For each fair die, E[X_i] = (1 + 2 + 3 + 4 + 5 + 6)/6 = 7/2 = 3.5. By Corollary 9.2, the expectation of a sum equals the sum of the expectations: E[X] = E[sum_{i=1}^n X_i] = sum_{i=1}^n E[X_i] = sum_{i=1}^n 3.5 = 3.5 * n.",
    "trap": "Notice this result holds regardless of whether the dice are rolled independently or even if they are loaded with identical marginal distributions.",
    "tests": [
      "c.prob.4.3.2",
      "c.prob.4.9.1"
    ],
    "provenance": "Ross, 10e, §4.9, Example 9c, PDF p. 168."
  },
  {
    "id": "w.prob.4.ross.example.9d",
    "course": "prob",
    "sec": "4.9",
    "marks": 4,
    "title": "Expected number of successes in n arbitrary trials",
    "prompt": "Suppose that n trials are performed, where trial i results in a success with probability p_i (i = 1, ..., n). The trials are not assumed to be independent. Find the expected total number of successes, and deduce the expectations of binomial and hypergeometric variables as special cases.",
    "approach": "Define indicator variables X_i for trial i being a success, and sum their expectations.",
    "solution": "Let X_i = 1 if trial i is a success, and 0 otherwise. Then E[X_i] = p_i. The total number of successes is X = sum_{i=1}^n X_i. By linearity: E[X] = sum_{i=1}^n E[X_i] = sum_{i=1}^n p_i. Special case 1 (Binomial): All trials have p_i = p, giving E[X] = np. Special case 2 (Hypergeometric): In sampling n balls without replacement from N balls (m white), the i-th ball drawn is white with probability p_i = m/N. Thus E[X] = sum_{i=1}^n (m/N) = nm/N, without needing independence.",
    "trap": "Do not assume trials must be independent to use E[X] = sum p_i; linearity holds for arbitrary dependence.",
    "tests": [
      "c.prob.4.3.2",
      "c.prob.4.9.1"
    ],
    "provenance": "Ross, 10e, §4.9, Example 9d, PDF pp. 168–169."
  },
  {
    "id": "w.prob.4.ross.example.9e",
    "course": "prob",
    "sec": "4.9",
    "marks": 5,
    "title": "Variance of the number of successes in dependent trials",
    "prompt": "Derive a general formula for the variance of the number of successes in n trials with success probabilities p_i and joint pair probabilities p_{i,j} = P(trials i and j succeed). Apply this formula to compute the variance of: (a) Bin(n, p), and (b) Hypergeometric(n, N, m).",
    "approach": "Expand E[X^2] = E[(sum X_i)^2] = sum E[X_i^2] + sum_{i != j} E[X_i X_j] using indicator properties X_i^2 = X_i.",
    "solution": "Let X = sum_{i=1}^n X_i. Since X_i^2 = X_i, E[X_i^2] = p_i. For i != j, X_i X_j = 1 iff both succeed, so E[X_i X_j] = p_{i,j}. Thus E[X^2] = sum_{i=1}^n p_i + sum_{i=1}^n sum_{j != i} p_{i,j}. Since (E[X])^2 = (sum p_i)^2, the general variance formula is Var(X) = sum_{i=1}^n p_i + sum_{i=1}^n sum_{j != i} p_{i,j} - (sum_{i=1}^n p_i)^2. (a) Binomial: Trials are independent with p_i = p and p_{i,j} = p^2. Then Var(X) = np + n(n-1)p^2 - (np)^2 = np + n^2 p^2 - np^2 - n^2 p^2 = np(1 - p). (b) Hypergeometric: p_i = m/N and p_{i,j} = (m/N) * ((m-1)/(N-1)). Substituting yields Var(X) = nm/N + n(n-1)[m(m-1)/(N(N-1))] - (nm/N)^2 = np(1 - p) [1 - (n-1)/(N-1)].",
    "trap": "Cross-product terms E[X_i X_j] equal the joint probability p_{i,j}; independence simplifies p_{i,j} to p_i p_j, eliminating cross covariances.",
    "tests": [
      "c.prob.4.5.1",
      "c.prob.4.9.2"
    ],
    "provenance": "Ross, 10e, §4.9, Example 9e, PDF pp. 169–170."
  },
  {
    "id": "w.prob.4.ross.example.10a",
    "course": "prob",
    "sec": "4.10",
    "marks": 4,
    "title": "Reading probabilities from a cumulative distribution function",
    "prompt": "The distribution function of a random variable X is given by: F(x) = 0 for x < 0; F(x) = x/2 for 0 <= x < 1; F(x) = 2/3 for 1 <= x < 2; F(x) = 11/12 for 2 <= x < 3; and F(x) = 1 for x >= 3. Compute: (a) P(X < 3), (b) P(X = 1), (c) P(X > 1/2), and (d) P(2 < X <= 4).",
    "approach": "Use left limits for strict inequalities and jump discontinuities for point masses: P(X = a) = F(a) - F(a-).",
    "solution": "(a) P(X < 3) = lim_{x uparrow 3} F(x) = 11/12. (b) P(X = 1) = F(1) - F(1-) = 2/3 - (1/2) = 4/6 - 3/6 = 1/6. (c) P(X > 1/2) = 1 - P(X <= 1/2) = 1 - F(1/2) = 1 - (1/2)/2 = 1 - 1/4 = 3/4. (d) P(2 < X <= 4) = F(4) - F(2) = 1 - 11/12 = 1/12.",
    "trap": "At x = 1, F(1) = 2/3 but the left limit is 1/2; the jump of size 1/6 is the point mass P(X = 1).",
    "tests": [
      "c.prob.4.1.2",
      "c.prob.4.10.1"
    ],
    "provenance": "Ross, 10e, §4.10, Example 10a, PDF pp. 171–172."
  },
  {
    "id": "w.prob.4.ross.problem.1",
    "course": "prob",
    "sec": "4.2",
    "marks": 4,
    "title": "Payoff distribution from colored ball selection",
    "prompt": "Two balls are chosen randomly without replacement from an urn containing 8 white, 4 black, and 2 orange balls. You win 2 dollars for each black ball drawn, lose 1 dollar for each white ball drawn, and receive 0 dollars for each orange ball. Let X denote your net winnings in dollars. Determine all possible values of X and their associated probabilities.",
    "approach": "Identify all feasible color pairs (w, b, o) summing to 2, compute the payoff 2b - w for each, and divide the sample counts by C(14, 2) = 91.",
    "solution": "Total pairs from 14 balls is C(14, 2) = 91. The feasible color draws and payoffs are: (1) 2 black: Payoff X = 2(2) = 4 dollars; ways = C(4, 2) = 6; P(X = 4) = 6/91. (2) 1 black, 1 orange: Payoff X = 2(1) - 0 = 2 dollars; ways = 4 * 2 = 8; P(X = 2) = 8/91. (3) 1 black, 1 white: Payoff X = 2(1) - 1 = 1 dollar; ways = 4 * 8 = 32; P(X = 1) = 32/91. (4) 2 orange: Payoff X = 0 dollars; ways = C(2, 2) = 1; P(X = 0) = 1/91. (5) 1 white, 1 orange: Payoff X = -1 dollar; ways = 8 * 2 = 16; P(X = -1) = 16/91. (6) 2 white: Payoff X = -2 dollars; ways = C(8, 2) = 28; P(X = -2) = 28/91. Sum = (6 + 8 + 32 + 1 + 16 + 28)/91 = 91/91 = 1.",
    "trap": "Distinct color compositions can produce distinct payoffs; make sure to count combinations with orange balls which contribute zero to net payout.",
    "tests": [
      "c.prob.4.1.1",
      "c.prob.4.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 1, PDF p. 175."
  },
  {
    "id": "w.prob.4.ross.problem.2",
    "course": "prob",
    "sec": "4.2",
    "marks": 5,
    "title": "Probability distribution of the product of two dice",
    "prompt": "Two fair six-sided dice are rolled independently. Let X be the product of the two rolled numbers. Determine the complete probability mass function P(X = i) for all possible values i in {1, ..., 36}.",
    "approach": "Enumerate the 36 equally likely pairs (a, b) in {1,...,6} x {1,...,6}, compute the product a*b, and count occurrences of each product value.",
    "solution": "Total equally likely outcomes = 36. Listing product values i and their count of pairs: i=1: (1,1) -> 1/36; i=2: (1,2),(2,1) -> 2/36; i=3: (1,3),(3,1) -> 2/36; i=4: (1,4),(2,2),(4,1) -> 3/36; i=5: (1,5),(5,1) -> 2/36; i=6: (1,6),(2,3),(3,2),(6,1) -> 4/36; i=8: (2,4),(4,2) -> 2/36; i=9: (3,3) -> 1/36; i=10: (2,5),(5,2) -> 2/36; i=12: (2,6),(3,4),(4,3),(6,2) -> 4/36; i=15: (3,5),(5,3) -> 2/36; i=16: (4,4) -> 1/36; i=18: (3,6),(6,3) -> 2/36; i=20: (4,5),(5,4) -> 2/36; i=24: (4,6),(6,4) -> 2/36; i=25: (5,5) -> 1/36; i=30: (5,6),(6,5) -> 2/36; i=36: (6,6) -> 1/36. For all other integers, P(X = i) = 0. Total count: 1+2+2+3+2+4+2+1+2+4+2+1+2+2+2+1+2+1 = 36.",
    "trap": "Products are not equally likely: composite numbers with multiple factorizations (like 6 and 12) have 4 pairs each, while primes or squares like 9 have only 1 or 2 pairs.",
    "tests": [
      "c.prob.4.1.1",
      "c.prob.4.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 2, PDF p. 175."
  },
  {
    "id": "w.prob.4.ross.problem.3",
    "course": "prob",
    "sec": "4.2",
    "marks": 5,
    "title": "Distribution of the sum of three fair dice",
    "prompt": "Three fair six-sided dice are rolled independently. Assuming all 6^3 = 216 outcomes are equally likely, find the probability mass function of the sum of the three dice X.",
    "approach": "Count the number of integer partitions (a, b, c) in {1,...,6}^3 summing to s for s = 3, ..., 18, using generating functions or symmetry.",
    "solution": "The sum X ranges from 3 to 18. By symmetry, P(X = s) = P(X = 21 - s). Number of combinations for each sum s: s=3: 1 -> 1/216; s=4: 3 -> 3/216; s=5: 6 -> 6/216; s=6: 10 -> 10/216; s=7: 15 -> 15/216; s=8: 21 -> 21/216; s=9: 25 -> 25/216; s=10: 27 -> 27/216; s=11: 27 -> 27/216; s=12: 25 -> 25/216; s=13: 21 -> 21/216; s=14: 15 -> 15/216; s=15: 10 -> 10/216; s=16: 6 -> 6/216; s=17: 3 -> 3/216; s=18: 1 -> 1/216. Sum of counts = 2 * (1 + 3 + 6 + 10 + 15 + 21 + 25 + 27) = 2 * 108 = 216. The distribution is symmetric around 10.5.",
    "trap": "Remember dice cannot exceed 6; for s >= 9, subtracting overcounted values using inclusion-exclusion avoids invalid face values.",
    "tests": [
      "c.prob.4.1.1",
      "c.prob.4.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 3, PDF p. 175."
  },
  {
    "id": "w.prob.4.ross.problem.4",
    "course": "prob",
    "sec": "4.2",
    "marks": 4,
    "title": "Exam rank distribution of highest-scoring woman",
    "prompt": "Five men and five women take a competitive exam, and all ten test scores are distinct and randomly ordered. Let X be the rank of the highest-scoring woman (where rank 1 is the best score). Find P(X = i) for all possible values i in {1, 2, ..., 10}.",
    "approach": "For rank X = i, the top i-1 ranks must be occupied by men, and rank i must be occupied by a woman.",
    "solution": "The possible ranks for the highest-scoring woman are i in {1, 2, 3, 4, 5, 6} (since there are only 5 men, at least one woman must appear by rank 6; P(X = i) = 0 for i >= 7). There are C(10, 5) = 252 ways to assign positions to the 5 women. For the first woman to appear at rank i, the remaining 4 women must be chosen from the 10 - i available lower ranks: P(X = i) = C(10 - i, 4) / C(10, 5). Explicit values: P(X = 1) = C(9, 4)/252 = 126/252 = 1/2; P(X = 2) = C(8, 4)/252 = 70/252 = 5/18; P(X = 3) = C(7, 4)/252 = 35/252 = 5/36; P(X = 4) = C(6, 4)/252 = 15/252 = 5/84; P(X = 5) = C(5, 4)/252 = 5/252; P(X = 6) = C(4, 4)/252 = 1/252. Sum = (126 + 70 + 35 + 15 + 5 + 1)/252 = 1.",
    "trap": "X cannot exceed 6 because there are only 5 men available to take the higher ranks.",
    "tests": [
      "c.prob.4.2.1",
      "c.prob.4.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 4, PDF p. 175."
  },
  {
    "id": "w.prob.4.ross.problem.5",
    "course": "prob",
    "sec": "4.1",
    "marks": 4,
    "title": "Difference between heads and tails in n coin tosses",
    "prompt": "Let X represent the difference between the number of heads and the number of tails obtained when a coin is tossed n times. Determine the set of possible values that X can take on.",
    "approach": "Express tails as n - heads and relate X algebraically to the number of heads k in {0, ..., n}.",
    "solution": "Let H be the number of heads obtained, so the number of tails is T = n - H. The difference is X = H - T = H - (n - H) = 2H - n. Since H can assume any integer value k in {0, 1, 2, ..., n}, X takes values 2k - n for k = 0, 1, ..., n. The set of possible values is {-n, -n + 2, -n + 4, ..., n - 2, n}. Notice that all values have the same parity as n (all even if n is even, all odd if n is odd), and adjacent values are separated by 2.",
    "trap": "Do not include numbers differing from n by an odd amount; 2H - n always has the same parity as n.",
    "tests": [
      "c.prob.4.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 5, PDF p. 175."
  },
  {
    "id": "w.prob.4.ross.problem.6",
    "course": "prob",
    "sec": "4.2",
    "marks": 4,
    "title": "Probabilities of head-tail difference for three fair coins",
    "prompt": "In Problem 4.5, for n = 3 coin tosses, if the coin is fair, find the probabilities associated with each value that X can take on.",
    "approach": "For n = 3, X takes values -3, -1, 1, 3. Compute probabilities using Bin(3, 1/2).",
    "solution": "When n = 3, H ~ Bin(3, 1/2). Possible values of X = 2H - 3 are: If H = 0: X = -3, P(X = -3) = C(3, 0)(1/2)^3 = 1/8. If H = 1: X = -1, P(X = -1) = C(3, 1)(1/2)^3 = 3/8. If H = 2: X = 1, P(X = 1) = C(3, 2)(1/2)^3 = 3/8. If H = 3: X = 3, P(X = 3) = C(3, 3)(1/2)^3 = 1/8. The sum of probabilities is 1/8 + 3/8 + 3/8 + 1/8 = 1.",
    "trap": "Remember the support only contains -3, -1, 1, 3; values like 0 or 2 cannot occur.",
    "tests": [
      "c.prob.4.2.1",
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 6, PDF p. 175."
  },
  {
    "id": "w.prob.4.ross.problem.7",
    "course": "prob",
    "sec": "4.1",
    "marks": 4,
    "title": "Possible values of random variables from two rolled dice",
    "prompt": "Suppose that a die is rolled twice. What are the possible values that the following random variables can take on: (a) the maximum value to appear in the two rolls; (b) the minimum value to appear in the two rolls; (c) the sum of the two rolls; (d) the value of the first roll minus the value of the second roll?",
    "approach": "Examine the range of each function over pairs (i, j) in {1,...,6} x {1,...,6}.",
    "solution": "(a) Maximum value max(i, j): ranges from min face 1 to max face 6, so possible values are {1, 2, 3, 4, 5, 6}. (b) Minimum value min(i, j): possible values are {1, 2, 3, 4, 5, 6}. (c) Sum i + j: ranges from 1 + 1 = 2 to 6 + 6 = 12, so possible values are {2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}. (d) Difference i - j: ranges from 1 - 6 = -5 to 6 - 1 = +5, so possible values are {-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5}.",
    "trap": "Difference can be negative when the first roll is smaller than the second; its range is symmetric from -5 to +5.",
    "tests": [
      "c.prob.4.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 7, PDF p. 175."
  },
  {
    "id": "w.prob.4.ross.problem.8",
    "course": "prob",
    "sec": "4.2",
    "marks": 5,
    "title": "Distributions of functions of two fair dice",
    "prompt": "Assuming the die in Problem 4.7 is fair, calculate the complete probability mass function for: (a) the maximum, (b) the minimum, (c) the sum, and (d) the first roll minus the second roll.",
    "approach": "Each of the 36 ordered pairs (i, j) has probability 1/36. Count favorable outcomes for each value.",
    "solution": "(a) Maximum M = max(i, j): P(M <= k) = (k/6)^2 = k^2/36. Thus P(M = k) = (k^2 - (k-1)^2)/36 = (2k - 1)/36. P(M=1)=1/36, P(M=2)=3/36, P(M=3)=5/36, P(M=4)=7/36, P(M=5)=9/36, P(M=6)=11/36. (b) Minimum L = min(i, j): P(L >= k) = ((7-k)/6)^2. Thus P(L = k) = (2(7-k)-1)/36 = (13 - 2k)/36. P(L=1)=11/36, P(L=2)=9/36, P(L=3)=7/36, P(L=4)=5/36, P(L=5)=3/36, P(L=6)=1/36. (c) Sum S = i + j: P(S = s) = (6 - |s - 7|)/36 for s = 2, ..., 12. Explicitly: P(2)=P(12)=1/36, P(3)=P(11)=2/36, P(4)=P(10)=3/36, P(5)=P(9)=4/36, P(6)=P(8)=5/36, P(7)=6/36. (d) Difference D = i - j: P(D = d) = (6 - |d|)/36 for d in {-5, ..., 5}. P(0)=6/36, P(1)=P(-1)=5/36, P(2)=P(-2)=4/36, P(3)=P(-3)=3/36, P(4)=P(-4)=2/36, P(5)=P(-5)=1/36.",
    "trap": "Be careful with min vs max: P(max = k) increases with k, whereas P(min = k) decreases with k.",
    "tests": [
      "c.prob.4.2.1",
      "c.prob.4.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 8, PDF p. 175."
  },
  {
    "id": "w.prob.4.ross.problem.9",
    "course": "prob",
    "sec": "4.2",
    "marks": 4,
    "title": "Sampling with replacement: maximum numbered ball",
    "prompt": "Four balls are randomly chosen with replacement from an urn containing 20 balls numbered 1 through 20. Let X be the largest number among the four chosen balls. (a) Find the probability mass function of X. (b) Compute P(X > 10).",
    "approach": "With replacement, draws are independent. The maximum is <= k iff all 4 draws are <= k, so P(X <= k) = (k/20)^4.",
    "solution": "(a) For each draw, the probability of selecting a ball numbered at most k is k/20. Since the 4 draws are independent and with replacement: P(X <= k) = (k/20)^4 for k = 1, 2, ..., 20. The probability mass function is obtained by differences: P(X = k) = P(X <= k) - P(X <= k - 1) = [k^4 - (k - 1)^4] / 20^4 for k = 1, 2, ..., 20 (with 0^4 = 0). (b) P(X > 10) = 1 - P(X <= 10) = 1 - (10/20)^4 = 1 - (1/2)^4 = 1 - 1/16 = 15/16 = 0.9375.",
    "trap": "Unlike sampling without replacement (where X >= 4), with replacement X can equal 1, 2, or 3.",
    "tests": [
      "c.prob.4.2.1",
      "c.prob.4.10.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 9, PDF p. 175."
  },
  {
    "id": "w.prob.4.ross.problem.10",
    "course": "prob",
    "sec": "4.2",
    "marks": 4,
    "title": "Gambler winnings and conditional probability",
    "prompt": "Let X denote the winnings of a gambler taking values in {-3, -2, -1, 0, 1, 2, 3} with probabilities p(0) = 1/3; p(1) = p(-1) = 13/55; p(2) = p(-2) = 1/11; p(3) = p(-3) = 1/165. Compute the conditional probability that the gambler wins 1 dollar given that he wins a positive amount.",
    "approach": "Use Bayes formula: P(X = 1 | X > 0) = P(X = 1) / P(X > 0), summing positive probabilities.",
    "solution": "The positive winnings are X in {1, 2, 3}. Find common denominator 165: p(1) = 13/55 = 39/165. p(2) = 1/11 = 15/165. p(3) = 1/165. The probability of winning a positive amount is P(X > 0) = p(1) + p(2) + p(3) = (39 + 15 + 1)/165 = 55/165 = 1/3. The conditional probability of winning 1 dollar given X > 0 is P(X = 1 | X > 0) = P(X = 1) / P(X > 0) = (39/165) / (55/165) = 39/55 approx 0.7091 (or 70.91%).",
    "trap": "Make sure to divide only by the total mass of the positive values {1, 2, 3}, which is 1/3.",
    "tests": [
      "c.prob.4.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 10, PDF p. 175."
  },
  {
    "id": "w.prob.4.ross.problem.11",
    "course": "prob",
    "sec": "4.2",
    "marks": 4,
    "title": "Benford law for first digits",
    "prompt": "A random variable X follows Benford law if P(X = i) = log_10((i + 1) / i) for i in {1, 2, ..., 9}. (a) Verify that this is a valid probability mass function by showing that sum_{i=1}^9 P(X = i) = 1. (b) Find P(X <= j) for any digit j in {1, 2, ..., 9}.",
    "approach": "Use logarithmic properties: sum log_10(a_i) = log_10(prod a_i) to collapse the telescoping product.",
    "solution": "(a) Since (i+1)/i > 1 for all i >= 1, each probability is strictly positive. Summing: sum_{i=1}^9 P(X = i) = sum_{i=1}^9 [log_10(i + 1) - log_10(i)] = [log_10(2) - log_10(1)] + [log_10(3) - log_10(2)] + ... + [log_10(10) - log_10(9)]. The sum telescopes completely: sum = log_10(10) - log_10(1) = 1 - 0 = 1. Thus it is a valid pmf. (b) For any integer j in {1, ..., 9}, the cumulative distribution function telescopes similarly: P(X <= j) = sum_{i=1}^j [log_10(i + 1) - log_10(i)] = log_10(j + 1) - log_10(1) = log_10(j + 1). For example, P(X <= 3) = log_10(4) approx 0.6021.",
    "trap": "Telescoping cancels intermediate log terms, leaving only the first and last arguments.",
    "tests": [
      "c.prob.4.2.1",
      "c.prob.4.1.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 11, PDF p. 175."
  },
  {
    "id": "w.prob.4.ross.problem.12",
    "course": "prob",
    "sec": "4.2",
    "marks": 5,
    "title": "Payoff distribution in Two-Finger Morra",
    "prompt": "In Two-Finger Morra, two players simultaneously show 1 or 2 fingers and guess their opponent count. If only one player guesses correctly, she wins an amount in dollars equal to the total fingers shown by both players; otherwise, no money is exchanged. Let X be Player 1 net winnings. (a) If each player independently chooses fingers and guess uniformly among the 4 options, find the possible values of X and their probabilities. (b) If each player always guesses the same number of fingers they show (equally likely 1 or 2), find the possible values of X and their probabilities.",
    "approach": "Enumerate joint strategy profiles: 16 profiles in part (a), 4 profiles in part (b).",
    "solution": "(a) Player 1 strategy (f_1, g_1) and Player 2 strategy (f_2, g_2) each have 4 equally likely choices, making 16 equally likely joint outcomes. Player 1 wins f_1 + f_2 if g_1 = f_2 and g_2 != f_1. Values of X: X = 0: Neither or both guess correctly. This occurs in 8 of the 16 cases, so P(X = 0) = 8/16 = 1/2. X = +2: f_1 = 1, f_2 = 1, P1 guesses 1, P2 guesses 2. Exactly 1 outcome: P(X = 2) = 1/16. By symmetry, P(X = -2) = 1/16. X = +3: (f_1=1, f_2=2, g_1=2, g_2=2) or (f_1=2, f_2=1, g_1=1, g_2=1). Exactly 2 outcomes: P(X = 3) = 2/16 = 1/8. By symmetry, P(X = -3) = 2/16 = 1/8. X = +4: f_1 = 2, f_2 = 2, g_1 = 2, g_2 = 1. Exactly 1 outcome: P(X = 4) = 1/16. By symmetry, P(X = -4) = 1/16. (b) If each plays (1,1) or (2,2) with probability 1/2: If both play (1,1): both show 1, both guess 1 -> both correct, payoff 0. If P1 plays (1,1) and P2 plays (2,2): P1 shows 1, guesses 1; P2 shows 2, guesses 2 -> neither guesses correctly, payoff 0. Similarly for (2,2) vs (1,1) and (2,2) vs (2,2). Therefore, under this strategy, X = 0 with probability 1.",
    "trap": "Remember that if BOTH players guess correctly, no money is exchanged (payoff is 0).",
    "tests": [
      "c.prob.4.1.1",
      "c.prob.4.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 12, PDF pp. 175–176."
  },
  {
    "id": "w.prob.4.ross.problem.13",
    "course": "prob",
    "sec": "4.2",
    "marks": 4,
    "title": "Drawing colored balls without replacement",
    "prompt": "A box contains 5 red, 3 green, and 2 blue balls. Two balls are drawn uniformly at random without replacement. Let X be the number of red balls obtained. Determine the probability mass function of X and compute P(X >= 1).",
    "approach": "Total balls N = 10, red m = 5, sample n = 2. Use hypergeometric distribution.",
    "solution": "Total ways to choose 2 balls from 10 is C(10, 2) = 45. P(X=0) = C(5,0)C(5,2)/45 = 10/45 = 2/9. P(X=1) = C(5,1)C(5,1)/45 = 25/45 = 5/9. P(X=2) = C(5,2)C(5,0)/45 = 10/45 = 2/9. Thus the pmf is P(X=0)=2/9, P(X=1)=5/9, P(X=2)=2/9. P(X >= 1) = 1 - P(X=0) = 1 - 2/9 = 7/9.",
    "trap": "Remember non-red balls pool together: 3 green + 2 blue = 5 non-red balls.",
    "tests": [
      "c.prob.4.2.1",
      "c.prob.4.8.3"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 13, PDF p. 176."
  },
  {
    "id": "w.prob.4.ross.problem.14",
    "course": "prob",
    "sec": "4.2",
    "marks": 4,
    "title": "Sequential elimination tournament winner counts",
    "prompt": "Five distinct numbers are randomly assigned to players 1 through 5. Player 1 compares numbers with player 2; the one with the higher number wins and plays player 3, and so on. Let X denote the total number of times player 1 is a winner. Find P(X = i) for all possible values i in {0, 1, 2, 3, 4}.",
    "approach": "Player 1 achieves X >= k if and only if Player 1 has the largest number among the first k + 1 players.",
    "solution": "Let N_1, ..., N_5 be the distinct numbers assigned to players. By symmetry, any subset of k + 1 players has each player equally likely to hold the largest number, so P(Player 1 largest among {1, ..., k+1}) = 1/(k+1). Notice Player 1 wins at least k games iff Player 1 holds the largest number among the first k + 1 players: P(X >= k) = 1/(k + 1) for k = 1, 2, 3, 4. Thus: P(X = 0) = 1 - P(X >= 1) = 1 - 1/2 = 1/2; P(X = 1) = P(X >= 1) - P(X >= 2) = 1/2 - 1/3 = 1/6; P(X = 2) = P(X >= 2) - P(X >= 3) = 1/3 - 1/4 = 1/12; P(X = 3) = P(X >= 3) - P(X >= 4) = 1/4 - 1/5 = 1/20; P(X = 4) = P(X >= 4) = 1/5. Check sum: 30/60 + 10/60 + 5/60 + 3/60 + 12/60 = 60/60 = 1.",
    "trap": "Once Player 1 loses a comparison, Player 1 is permanently eliminated and can win no further games.",
    "tests": [
      "c.prob.4.2.1",
      "c.prob.4.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 14, PDF p. 176."
  },
  {
    "id": "w.prob.4.ross.problem.15",
    "course": "prob",
    "sec": "4.2",
    "marks": 5,
    "title": "NBA draft lottery distribution for the worst-record team",
    "prompt": "The 11 non-playoff NBA teams participate in a draft lottery with 66 total balls: the worst-record team has 11 balls, the second-worst has 10, down to 1 ball for the 11th-worst team. The lottery determines picks 1, 2, and 3 by drawing balls without replacement of teams. Unchosen teams receive picks 4 through 11 in inverse record order, so the worst team receives pick 4 if it does not win pick 1, 2, or 3. Let X be the draft pick of the worst-record team. Find the probability mass function of X.",
    "approach": "Compute P(X = 1), P(X = 2), P(X = 3) by conditioning on the ball draw sequence, and P(X = 4) as the complement.",
    "solution": "Only picks 1,2,3,4 are possible for the worst team. P(X=1)=11/66=1/6. Number the other teams by their ball counts j=1,…,10. Ignoring discarded balls of already chosen teams, the next team is drawn proportional to its remaining total weight. Thus P(X=2)=∑_{j=1}^{10}(j/66)[11/(66−j)]≈.1556297121. For pick three, sum over ordered distinct earlier teams: P(X=3)=∑_{j=1}^{10}∑_{l=1,l≠j}^{10}(j/66)[l/(66−j)][11/(66−j−l)]≈.1434756999. P(X=4)=1−P(X=1)−P(X=2)−P(X=3)≈.5342279213. All other masses are zero.",
    "trap": "The worst team can never receive a pick worse than 4th because only the top 3 picks are determined by lottery.",
    "tests": [
      "c.prob.4.2.1",
      "c.prob.4.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 15, PDF p. 176."
  },
  {
    "id": "w.prob.4.ross.problem.16",
    "course": "prob",
    "sec": "4.2",
    "marks": 4,
    "title": "Optimal card guessing strategy distribution",
    "prompt": "A shuffled n-card deck has labels 1,…,n. Guess 1 until correct, then 2 until correct, then 3, and so on, learning only whether each guess was correct. Let G count correct guesses. Find its mass.",
    "approach": "Card k is guessed correctly if and only if card k appears after cards 1, ..., k-1 in the deck permutation.",
    "solution": "G≥k exactly when cards 1,…,k occur in that increasing relative order in the deck. All k! orders are equally likely, so P(G≥k)=1/k! for k=1,…,n. Therefore P(G=k)=1/k!−1/(k+1)! for k<n, and P(G=n)=1/n!. The mean is ∑_{k=1}^n1/k!, approaching e−1; this distribution is not uniform. If card 2 occurred before card 1, it has already passed when guessing 2 begins.",
    "trap": "Notice every outcome 1, 2, ..., n has identical probability 1/n; the expected score is simply the midpoint (n+1)/2.",
    "tests": [
      "c.prob.4.2.1",
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 16, PDF p. 176."
  },
  {
    "id": "w.prob.4.ross.problem.17",
    "course": "prob",
    "sec": "4.2",
    "marks": 4,
    "title": "Point masses and interval probabilities from a c.d.f.",
    "prompt": "The distribution function of a random variable X is given by: F(b) = 0 for b < 0; F(b) = b/4 for 0 <= b < 1; F(b) = 1/2 + (b-1)/4 for 1 <= b < 2; F(b) = 11/12 for 2 <= b < 3; and F(b) = 1 for b >= 3. (a) Find P(X = i) for i = 1, 2, 3. (b) Find P(1/2 < X < 3/2).",
    "approach": "Point mass at x is F(x) - F(x-). For an open interval (a, b), use P(a < X < b) = F(b-) - F(a).",
    "solution": "(a) Jump at 1: F(1) = 1/2 + 0 = 1/2; F(1-) = 1/4. Thus P(X = 1) = 1/2 - 1/4 = 1/4. Jump at 2: F(2) = 11/12; F(2-) = 1/2 + (2-1)/4 = 3/4 = 9/12. Thus P(X = 2) = 11/12 - 9/12 = 2/12 = 1/6. Jump at 3: F(3) = 1; F(3-) = 11/12. Thus P(X = 3) = 1 - 11/12 = 1/12. (b) P(1/2 < X < 3/2) = P(X < 3/2) - P(X <= 1/2) = F((3/2)-) - F(1/2). Since F is continuous at 3/2: F(3/2) = 1/2 + (3/2 - 1)/4 = 1/2 + 1/8 = 5/8. F(1/2) = (1/2)/4 = 1/8. Thus P(1/2 < X < 3/2) = 5/8 - 1/8 = 4/8 = 1/2.",
    "trap": "At x = 1, do not forget the jump discontinuity: F(1-) = 1/4 while F(1) = 1/2.",
    "tests": [
      "c.prob.4.1.2",
      "c.prob.4.10.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 17, PDF p. 176."
  },
  {
    "id": "w.prob.4.ross.problem.18",
    "course": "prob",
    "sec": "4.2",
    "marks": 4,
    "title": "Distribution of absolute deviation from coin toss mean",
    "prompt": "Four independent flips of a fair coin are made. Let X denote the total number of heads obtained. Determine the probability mass function of the random variable Y = |X - 2|.",
    "approach": "X follows Bin(4, 1/2). Determine the mapping from X in {0, 1, 2, 3, 4} to Y = |X - 2|.",
    "solution": "The distribution of X ~ Bin(4, 1/2) is: P(X = 0) = 1/16, P(X = 1) = 4/16, P(X = 2) = 6/16, P(X = 3) = 4/16, P(X = 4) = 1/16. The values of Y = |X - 2| are: (1) Y = 0: occurs when X = 2, so P(Y = 0) = P(X = 2) = 6/16 = 3/8 = 0.375. (2) Y = 1: occurs when X = 1 or X = 3, so P(Y = 1) = P(X = 1) + P(X = 3) = 4/16 + 4/16 = 8/16 = 1/2 = 0.500. (3) Y = 2: occurs when X = 0 or X = 4, so P(Y = 2) = P(X = 0) + P(X = 4) = 1/16 + 1/16 = 2/16 = 1/8 = 0.125. Check sum: 3/8 + 1/2 + 1/8 = 1.",
    "trap": "Absolute deviation folds symmetric outcomes around the mean 2 together: 1 and 3 merge into Y=1; 0 and 4 merge into Y=2.",
    "tests": [
      "c.prob.4.2.1",
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 18, PDF p. 176."
  },
  {
    "id": "w.prob.4.ross.problem.19",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Expected return in roulette wheel bets",
    "prompt": "X has CDF 0 for b<0; 1/2 for 0≤b<1; 3/5 for 1≤b<2; 4/5 for 2≤b<3; 9/10 for 3≤b<3.5; and 1 for b≥3.5. Find its mass function.",
    "approach": "Multiply each payoff by its probability and sum for both betting strategies.",
    "solution": "The masses are the jumps: P(X=0)=1/2,P(X=1)=3/5−1/2=1/10,P(X=2)=4/5−3/5=1/5,P(X=3)=9/10−4/5=1/10,P(X=3.5)=1−9/10=1/10. They are nonnegative and add to 1; the mass is zero elsewhere.",
    "trap": "Despite the large 35-dollar payoff, the single-number bet has the exact same house edge as the even-money red bet.",
    "tests": [
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 19, PDF p. 177."
  },
  {
    "id": "w.prob.4.ross.problem.20",
    "course": "prob",
    "sec": "4.3",
    "marks": 5,
    "title": "Analysis of a roulette martingale-like betting system",
    "prompt": "A roulette system advises: Bet 1 dollar on red (win prob p = 18/38). If you win, quit with 1 dollar profit. If you lose (prob q = 20/38), place 1 dollar bets on red on each of the next two spins and then quit. Let X denote total winnings. (a) Find P(X > 0). (b) Is this a winning strategy? Explain. (c) Compute E[X].",
    "approach": "Track paths through the 3-spin decision tree and compute probabilities and payoffs.",
    "solution": "Let p = 18/38 = 9/19, q = 20/38 = 10/19. Paths: Path 1: Win spin 1 (prob p). Payoff X = +1. Path 2: Lose spin 1, win spins 2 and 3 (prob q p^2). Payoff X = -1 + 1 + 1 = +1. Path 3: Lose spin 1, win one and lose one on spins 2 and 3 (prob 2 q p q). Payoff X = -1 + 1 - 1 = -1. Path 4: Lose spin 1, lose spins 2 and 3 (prob q^3). Payoff X = -1 - 1 - 1 = -3. (a) P(X > 0) = P(X = 1) = p + q p^2 = (9/19) + (10/19)*(9/19)^2 = 9/19 + 810/6859 = (3249 + 810)/6859 = 4059/6859 approx 0.5918 (about 59.2%). (b) No, it is not a winning strategy. Although P(X > 0) > 1/2, the losses when they occur are large (-1 or -3), producing a negative overall expectation. (c) E[X] = 1*(p + q p^2) - 1*(2 q^2 p) - 3*(q^3). With p = 9/19, q = 10/19: Expected total bets = 1*p + 3*q = 9/19 + 30/19 = 39/19 bets. Since each 1 dollar bet has expected return -2/38 = -1/19 dollars, E[X] = (39/19) * (-1/19) = -39/361 approx -0.1080 dollars.",
    "trap": "A strategy can win more than half the time and still have negative expected value because the losses (-3 dollars) outweigh the frequent small wins (+1 dollar).",
    "tests": [
      "c.prob.4.3.1",
      "c.prob.4.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 20, PDF pp. 176–177."
  },
  {
    "id": "w.prob.4.ross.problem.21",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Class size inspection paradox with school buses",
    "prompt": "Four buses carry 148 students to a stadium: Bus 1 carries 40, Bus 2 carries 33, Bus 3 carries 25, and Bus 4 carries 50 students. Let X be the number of students on the bus of a randomly chosen student. Let Y be the number of students on the bus of a randomly chosen driver. (a) Which expectation is larger, E[X] or E[Y], and why? (b) Compute E[X] and E[Y].",
    "approach": "E[Y] is the simple arithmetic mean of bus sizes. E[X] is the size-biased expectation where bus size s has weight s / 148.",
    "solution": "(a) E[X] is larger than E[Y] because a student is sampled with probability proportional to the bus occupancy, giving higher weight to fuller buses. (b) For the driver, each bus is equally likely (prob 1/4): E[Y] = (40 + 33 + 25 + 50)/4 = 148/4 = 37 students. For the student, a bus of size s is selected with probability s/148: E[X] = 40*(40/148) + 33*(33/148) + 25*(25/148) + 50*(50/148) = (1600 + 1089 + 625 + 2500)/148 = 5814/148 = 2907/74 approx 39.2838 students.",
    "trap": "The random student is not equally likely to come from each bus; the 50-student bus provides 50/148 of the students, whereas the 25-student bus provides only 25/148.",
    "tests": [
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 21, PDF p. 177."
  },
  {
    "id": "w.prob.4.ross.problem.22",
    "course": "prob",
    "sec": "4.3",
    "marks": 5,
    "title": "Expected duration of a best-of playoff series",
    "prompt": "Two teams play a series ending when one team wins i games. Each game is independently won by Team A with probability p and Team B with probability q = 1 - p. Find the expected number of games played when: (a) i = 2, and (b) i = 3. Show that in both cases the expected duration is maximized when p = 1/2.",
    "approach": "Identify the probability of terminating in exactly k games for each k, compute sum k P(N = k), and maximize as a function of p.",
    "solution": "(a) For i = 2 (first to 2 wins): Possible game counts are 2 or 3. N = 2 iff AA or BB: P(N = 2) = p^2 + q^2 = 1 - 2pq. N = 3 iff 2 games split: P(N = 3) = 2pq. E[N] = 2(1 - 2pq) + 3(2pq) = 2 + 2pq = 2 + 2p(1 - p). Since p(1-p) is maximized at p = 1/2 with max value 1/4, E[N] is maximized at p = 1/2 with maximum value 2 + 2(1/4) = 2.5 games. (b) For i = 3 (first to 3 wins): Games can be 3, 4, or 5. P(N = 3) = p^3 + q^3 = 1 - 3pq. P(N = 4) = C(3, 2) p^2 q * p + C(3, 2) q^2 p * q = 3pq(p^2 + q^2) = 3pq(1 - 2pq). P(N = 5) = C(4, 2) p^2 q^2 = 6 p^2 q^2. E[N] = 3(1 - 3pq) + 4[3pq(1 - 2pq)] + 5[6p^2 q^2] = 3 - 9pq + 12pq - 24p^2 q^2 + 30p^2 q^2 = 3 + 3pq + 6p^2 q^2. Let x = pq. f(x) = 3 + 3x + 6x^2 is strictly increasing for x >= 0. Since x = p(1-p) <= 1/4 with maximum at p = 1/2, E[N] is maximized when p = 1/2 with value 3 + 3(1/4) + 6(1/16) = 3 + 0.75 + 0.375 = 4.125 games.",
    "trap": "Notice the series ends immediately when a team reaches i wins; do not count phantom games after the winner is decided.",
    "tests": [
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 22, PDF p. 177."
  },
  {
    "id": "w.prob.4.ross.problem.23",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Expected wealth vs expected commodity maximization",
    "prompt": "You hold 1000 dollars, and a commodity sells for 2 dollars per ounce (so you could purchase 500 ounces). In one week, the commodity price will be either 1 dollar or 4 dollars per ounce, equally likely. (a) What strategy maximizes your expected money after one week? (b) What strategy maximizes your expected commodity ounces after one week?",
    "approach": "Compare the expected wealth in dollars and expected ounces under the two strategies: buy now vs hold cash.",
    "solution": "(a) Maximize expected cash: Strategy 1 (Hold cash): You have 1000 dollars for certain. Strategy 2 (Buy 500 ounces now): Next week you sell at 1 dollar with prob 1/2, or 4 dollars with prob 1/2. Expected money = (1/2)*(500 * 1) + (1/2)*(500 * 4) = 250 + 1000 = 1250 dollars. Since 1250 > 1000, you should buy the commodity now. (b) Maximize expected commodity: Strategy 1 (Buy now): You have 500 ounces for certain. Strategy 2 (Hold cash and buy next week): If price is 1 dollar, you buy 1000/1 = 1000 ounces; if price is 4 dollars, you buy 1000/4 = 250 ounces. Expected ounces = (1/2)*1000 + (1/2)*250 = 500 + 125 = 625 ounces. Since 625 > 500, you should hold cash and buy next week.",
    "trap": "This is an example of Jensen inequality: E[1/P] > 1/E[P], so maximizing expected money and maximizing expected commodity dictate opposite actions.",
    "tests": [
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 23, PDF p. 177."
  },
  {
    "id": "w.prob.4.ross.problem.24",
    "course": "prob",
    "sec": "4.3",
    "marks": 5,
    "title": "Minimax theorem and value of a 2x2 zero-sum game",
    "prompt": "Player A writes down 1 or 2, and Player B guesses. If Player B guesses correctly when A wrote i, B receives i units from A. If B guesses incorrectly, B pays 3/4 unit to A. Player B randomizes by guessing 1 with prob p and 2 with prob 1 - p. (a) Find B expected gain if A writes 1, and if A writes 2. (b) Find the maximin value of p and the resulting expected gain. (c) If A writes 1 with prob q, find A expected loss under B choices. (d) Find the minimax value of q and verify the minimax theorem.",
    "approach": "Express expected payoffs as linear functions of p and q, and solve for the equilibrium indifference probabilities.",
    "solution": "(a) If A writes 1: B wins 1 with prob p, loses 3/4 with prob 1 - p. Expected gain = 1*p - (3/4)(1 - p) = (7/4)p - 3/4. If A writes 2: B loses 3/4 with prob p, wins 2 with prob 1 - p. Expected gain = -(3/4)p + 2(1 - p) = 2 - (11/4)p. (b) To maximize the minimum gain, equate the two lines: (7/4)p - 3/4 = 2 - (11/4)p <=> (18/4)p = 11/4 <=> 18p = 11 <=> p = 11/18. Maximin gain = (7/4)(11/18) - 3/4 = 77/72 - 54/72 = 23/72 units. (c) If A writes 1 with prob q and 2 with prob 1 - q: If B guesses 1: A expected loss = 1*q - (3/4)(1 - q) = (7/4)q - 3/4. If B guesses 2: A expected loss = -(3/4)q + 2(1 - q) = 2 - (11/4)q. (d) Equating gives q = 11/18, yielding minimax loss = 23/72 units. The minimum of A maximum expected loss equals the maximum of B minimum expected gain (23/72 units), verifying von Neumann minimax theorem.",
    "trap": "Equating the payoffs makes the opponent indifferent and secures the optimal guaranteed value.",
    "tests": [
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 24, PDF p. 177."
  },
  {
    "id": "w.prob.4.ross.problem.25",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Independent biased coins: distribution and mean",
    "prompt": "Two independent coins are flipped: Coin 1 lands on heads with probability 0.6, and Coin 2 lands on heads with probability 0.7. Let X denote the total number of heads. (a) Find P(X = 1). (b) Determine E[X].",
    "approach": "Use independent product events for P(X = 1) and linearity of expectation for E[X].",
    "solution": "(a) X = 1 occurs if either Coin 1 is H and Coin 2 is T, or Coin 1 is T and Coin 2 is H: P(X = 1) = P(H_1)P(T_2) + P(T_1)P(H_2) = (0.6)(1 - 0.7) + (1 - 0.6)(0.7) = (0.6)(0.3) + (0.4)(0.7) = 0.18 + 0.28 = 0.46. (b) Let I_1 and I_2 indicate heads on coin 1 and coin 2. Then X = I_1 + I_2. By linearity of expectation: E[X] = E[I_1] + E[I_2] = 0.6 + 0.7 = 1.3 heads.",
    "trap": "Do not multiply probabilities for the mean; linearity of expectation E[X_1 + X_2] = E[X_1] + E[X_2] adds means directly.",
    "tests": [
      "c.prob.4.3.1",
      "c.prob.4.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 25, PDF p. 177."
  },
  {
    "id": "w.prob.4.ross.problem.26",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Expected questions to identify a secret number",
    "prompt": "A number from 1 to 10 is chosen uniformly. Find the expected questions under (a) asking “Is it i?” for i=1,…,10 in order, (b) splitting the remaining candidates as evenly as possible.",
    "approach": "Compute the probability of identifying the number at each depth and find the expected questions.",
    "solution": "(a) Under the literal listed yes/no protocol through a positive answer, the number k takes k questions, so E[N]=(1+…+10)/10=5.5. If the objective allows stopping once only 10 remains after nine no answers, it instead takes 5.4 on average. State which stopping convention is used. (b) Split ten into two groups of five. Each five splits 2+3; the two-element group takes one more question. In the three-element group, its singleton finishes at depth three while the pair finishes at depth four. Thus six of the ten numbers finish in three questions and four in four: E[N]=(6·3+4·4)/10=3.4.",
    "trap": "In sequential testing, the 10th number does not require a 10th question; 9 \"no\" answers uniquely identify 10.",
    "tests": [
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 26, PDF p. 177."
  },
  {
    "id": "w.prob.4.ross.problem.27",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Actuarial pricing for targeted profit margin",
    "prompt": "An insurance company issues a policy that pays an amount A if a specified event E occurs within a year. The company estimates that E occurs with probability p. What premium P should the company charge so that its expected profit equals 10 percent of the coverage amount A?",
    "approach": "Set Expected profit = Premium - Expected payout = 0.10 * A and solve for Premium.",
    "solution": "Let P be the premium charged. The payout is A with probability p and 0 with probability 1 - p, so expected payout is E[Payout] = p * A. The company profit is P - Payout. Expected profit = E[P - Payout] = P - p*A. Setting expected profit to 10% of A: P - p*A = 0.10*A <=> P = (p + 0.10)*A. For example, if A = 10,000 dollars and p = 0.05, the premium must be (0.05 + 0.10) * 10,000 = 1500 dollars.",
    "trap": "Profit is Premium minus payout, not premium alone; the 10% margin is loaded onto the actuarial fair cost p*A.",
    "tests": [
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 27, PDF p. 177."
  },
  {
    "id": "w.prob.4.ross.problem.28",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Expected defective count in hypergeometric sampling",
    "prompt": "A sample of 3 items is selected at random without replacement from a container holding 20 items, of which 4 are defective. Find the expected number of defective items in the sample.",
    "approach": "Use indicator variables for each draw being defective, or the hypergeometric mean np.",
    "solution": "Let I_j = 1 if the j-th selected item is defective, and 0 otherwise (j = 1, 2, 3). Each selected position is equally likely to be any of the 20 items, so P(I_j = 1) = 4/20 = 1/5. The total number of defectives in the sample is X = I_1 + I_2 + I_3. By linearity of expectation: E[X] = E[I_1] + E[I_2] + E[I_3] = 3 * (1/5) = 3/5 = 0.6 defective items.",
    "trap": "Linearity of expectation holds even though the draws are dependent without replacement.",
    "tests": [
      "c.prob.4.3.1",
      "c.prob.4.8.3"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 28, PDF p. 177."
  },
  {
    "id": "w.prob.4.ross.problem.29",
    "course": "prob",
    "sec": "4.3",
    "marks": 5,
    "title": "Optimal inspection ordering for machine breakdown diagnosis",
    "prompt": "A machine breakdown is caused by fault 1 with probability p_1 and fault 2 with probability p_2 = 1 - p_1. Checking cause 1 costs C_1 dollars and repairing it costs R_1 dollars; checking cause 2 costs C_2 dollars and repairing it costs R_2 dollars. If the first check fails to find the cause, the second cause must be checked and repaired. Under what condition on costs and probabilities is checking cause 1 first more economical than checking cause 2 first?",
    "approach": "Express expected diagnostic cost under both testing orders and compare.",
    "solution": "If cause 1 is checked first: Cost is C_1 + R_1 if cause 1 is the fault (prob p_1). If cause 1 is not the fault (prob 1 - p_1), we also pay to check and repair cause 2 (cost C_2 + R_2). Total expected cost: E_1 = p_1(C_1 + R_1) + (1 - p_1)(C_1 + C_2 + R_2) = C_1 + p_1 R_1 + (1 - p_1)(C_2 + R_2). If cause 2 is checked first: By symmetry, E_2 = C_2 + p_2 R_2 + (1 - p_2)(C_1 + R_1). Check cause 1 first is superior iff E_1 <= E_2: C_1 + p_1 R_1 + C_2 + R_2 - p_1 C_2 - p_1 R_2 <= C_2 + p_2 R_2 + C_1 + R_1 - p_2 C_1 - p_2 R_1. Since p_2 = 1 - p_1, cancel common terms: -p_1(C_2 + R_2) + p_1 R_1 <= -p_2(C_1 + R_1) + p_2 R_2 <=> -p_1 C_2 <= -p_2 C_1 <=> p_2 C_1 <= p_1 C_2, which is C_1 / p_1 <= C_2 / p_2. Check the cause with the smaller cost-to-probability ratio C_i / p_i first.",
    "trap": "Repair costs cancel out if both checks are guaranteed to diagnose the fault; only inspection costs and probabilities determine the optimal order.",
    "tests": [
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 29, PDF p. 178."
  },
  {
    "id": "w.prob.4.ross.problem.30",
    "course": "prob",
    "sec": "4.3",
    "marks": 5,
    "title": "The St. Petersburg paradox: infinite expectation game",
    "prompt": "Toss a fair coin until the first tail; a tail on toss n earns 2^n dollars. Show the expectation is infinite. Discuss paying one million dollars for (a) one game, (b) repeatedly playing with payment deferred until stopping.",
    "approach": "Use the geometric distribution P(T = n) = (1/2)^n to evaluate E[X] = sum 2^n (1/2)^n.",
    "solution": "P(T=n)=2^{−n}, so E[X]=∑_{n≥1}2^n2^{−n}=∞. (a) Infinite mean alone does not determine a person’s willingness to risk a large fee: wealth and preferences matter. The chance the payout exceeds one million is P(T≥20)=2^{−19}; most one-game outcomes lose almost the entire fee. (b) In the ideal mathematical model with independent games, unlimited credit and uncapped payouts, eventually stopping with cumulative profit positive is possible almost surely. Choose a finite cap M so E[min(X,M)] exceeds the million-dollar fee (these truncated means increase without bound). The strong law for these bounded independent capped rewards makes cumulative capped profit grow positively; actual rewards are at least as large, so actual cumulative profit eventually becomes positive. Stopping then pays all fees and leaves profit. Limited wealth or credit changes this ideal strategy.",
    "trap": "Infinite expected monetary value does not imply infinite expected utility; concave utility resolves the paradox.",
    "tests": [
      "c.prob.4.3.1",
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 30, PDF p. 178."
  },
  {
    "id": "w.prob.4.ross.problem.31",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Strictly proper Brier scoring rule for probability forecasters",
    "prompt": "A meteorologist announces probability p of rain tomorrow. She receives score 1 - (1 - p)^2 if it rains, and 1 - p^2 if it does not rain. If she genuinely believes the probability of rain is p*, prove that her expected score is uniquely maximized by honestly reporting p = p*.",
    "approach": "Write the expected score as a function of reported p with weights p* and 1 - p*, then differentiate with respect to p.",
    "solution": "Let S(p) be the score. Expected score given true probability p* is: E[S(p)] = p* [1 - (1 - p)^2] + (1 - p*) [1 - p^2] = p* [2p - p^2] + (1 - p*) [1 - p^2] = 2p p* - p* p^2 + 1 - p^2 - p* + p* p^2 = 1 - p* + 2p p* - p^2. To find the optimal reported p, differentiate with respect to p: d/dp E[S(p)] = 2p* - 2p. Setting the derivative to 0 gives 2p* - 2p = 0 <=> p = p*. The second derivative is d^2/dp^2 E[S(p)] = -2 < 0, confirming a strict global maximum at p = p*. Thus the Brier score strictly incentivizes truthful reporting.",
    "trap": "Notice the forecaster has no incentive to exaggerate or hedge; honest reporting p = p* uniquely maximizes expected reward.",
    "tests": [
      "c.prob.4.4.1",
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 31, PDF p. 178."
  },
  {
    "id": "w.prob.4.ross.problem.32",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Pooled blood testing efficiency",
    "prompt": "To screen 100 individuals for a rare virus, people are divided into 10 groups of 10. The blood samples in each group are pooled and tested together. If the pooled sample tests negative, only 1 test is needed for that group. If it tests positive, each of the 10 individuals is tested separately, requiring 11 tests in total for that group. Assume individuals are infected independently with probability p = 0.1. What is the expected total number of tests needed for all 100 people? Give the expected tests for one group as well as the full 100-person total.",
    "approach": "For one group, calculate the probability that the pooled test is negative. Then find expected tests per group and multiply by 10.",
    "solution": "For a group of 10, the pooled sample is negative if and only if all 10 individuals are uninfected. P(All 10 uninfected) = (1 - 0.1)^10 = 0.9^10 approx 0.3487. P(Pooled test positive) = 1 - 0.9^10 approx 0.6513. Let T_i be the number of tests for group i. T_i = 1 with prob 0.9^10, and T_i = 11 with prob 1 - 0.9^10. E[T_i] = 1*(0.9^10) + 11*(1 - 0.9^10) = 1 + 10*(1 - 0.9^10) approx 1 + 10*(0.6513) = 7.513 tests. For 10 groups, expected total tests = 10 * E[T_i] = 10 * 7.513 = 75.13 tests. This saves nearly 25% compared to 100 individual tests. For one ten-person group the mean is 1+10[1−(.9)^{10}]≈7.513215599 tests. Ten such groups have mean 75.13215599 tests.",
    "trap": "If the pooled test is positive, you do 1 pooled test PLUS 10 individual tests, totaling 11 tests.",
    "tests": [
      "c.prob.4.3.1",
      "c.prob.4.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 32, PDF p. 178."
  },
  {
    "id": "w.prob.4.ross.problem.33",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Optimal newsboy stocking with binomial demand",
    "prompt": "A newsboy buys newspapers for 10 cents each and sells them for 15 cents each. Unsold papers cannot be returned. Daily demand X follows Bin(n = 10, p = 1/3). How many papers s should he purchase to maximize expected profit?",
    "approach": "Profit is b = 5 cents per paper sold, loss ell = 10 cents per unsold paper. The optimal stock s* is the smallest integer satisfying P(X <= s*) >= b / (b + ell).",
    "solution": "Here unit profit b = 15 - 10 = 5 cents, unit loss ell = 10 cents. The critical fractile is b / (b + ell) = 5 / (5 + 10) = 5/15 = 1/3 approx 0.3333. We evaluate the cumulative distribution function of X ~ Bin(10, 1/3): P(X = 0) = (2/3)^10 = 1024 / 59049 approx 0.01734; P(X <= 0) = 0.0173. P(X = 1) = 10 * (1/3) * (2/3)^9 = 5120 / 59049 approx 0.08671; P(X <= 1) = 0.01734 + 0.08671 = 0.10405. P(X = 2) = C(10, 2) * (1/3)^2 * (2/3)^8 = 45 * 256 / 59049 = 11520 / 59049 approx 0.19509; P(X <= 2) = 0.10405 + 0.19509 = 0.29914 < 0.3333. P(X = 3) = C(10, 3) * (1/3)^3 * (2/3)^7 = 120 * 128 / 59049 = 15360 / 59049 approx 0.26012; P(X <= 3) = 0.29914 + 0.26012 = 0.55926 >= 0.3333. The smallest integer s with P(X <= s) >= 1/3 is s* = 3 papers.",
    "trap": "Notice the critical fractile is 1/3, which is reached at s* = 3 papers; stocking beyond 3 incurs excess risk of unsold loss.",
    "tests": [
      "c.prob.4.4.1",
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 33, PDF p. 178."
  },
  {
    "id": "w.prob.4.ross.problem.34",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Newsboy model with customer goodwill shortage penalty",
    "prompt": "In the inventory problem (Example 4b), suppose the store incurs an additional goodwill penalty c for each unit of unmet customer demand. If each sold unit yields profit b and each unsold unit yields loss ell, compute expected profit P(s) and determine the optimal stocking quantity s*.",
    "approach": "Express net profit when demand X <= s and X > s, then examine the difference P(s+1) - P(s).",
    "solution": "If demand X <= s: profit is b*X - ell*(s - X). If demand X > s: profit is b*s - c*(X - s). The profit difference when stocking s + 1 units instead of s is: (1) If X <= s: unit s + 1 is unsold, losing ell dollars. (2) If X > s: unit s + 1 is sold, gaining b dollars in margin AND avoiding the c dollar shortage penalty, for an effective gain of b + c dollars. Thus: E[P(s+1)] - E[P(s)] = (b + c) P(X > s) - ell P(X <= s) = (b + c)[1 - P(X <= s)] - ell P(X <= s) = (b + c) - (b + c + ell) P(X <= s). Stocking s + 1 is profitable whenever E[P(s+1)] >= E[P(s)], which holds iff P(X <= s) <= (b + c) / (b + c + ell). Therefore, expected profit is maximized at the smallest integer s* such that P(X <= s*) >= (b + c) / (b + c + ell).",
    "trap": "The shortage cost c acts as an added bonus (b + c) for having stock available, raising the critical ratio.",
    "tests": [
      "c.prob.4.4.1",
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 34, PDF p. 178."
  },
  {
    "id": "w.prob.4.ross.problem.35",
    "course": "prob",
    "sec": "4.5",
    "marks": 4,
    "title": "Expected payoff and variance in a marble drawing game",
    "prompt": "A bag contains 5 red and 5 blue marbles. Two marbles are drawn uniformly at random without replacement. If they are the same color, you win 1.10 dollars. If they are different colors, you lose 1.00 dollar (a payout of -1.00 dollar). Calculate: (a) the expected value of your net winnings, and (b) the variance of your net winnings.",
    "approach": "Find the probabilities of matching vs different colors using combinations, then apply formulas for mean and variance.",
    "solution": "Total pairs = C(10, 2) = 45. Matching color pairs = C(5, 2) + C(5, 2) = 10 + 10 = 20. Different color pairs = 5 * 5 = 25. Thus P(Same) = 20/45 = 4/9 and P(Different) = 25/45 = 5/9. Let W be the payoff. (a) E[W] = (1.10)*(4/9) + (-1.00)*(5/9) = (4.40 - 5.00)/9 = -0.60/9 = -1/15 approx -0.0667 dollars. (b) E[W^2] = (1.10)^2*(4/9) + (-1.00)^2*(5/9) = 1.21*(4/9) + 1.00*(5/9) = (4.84 + 5.00)/9 = 9.84/9 = 1.0933. Var(W) = E[W^2] - (E[W])^2 = 9.84/9 - (-0.60/9)^2 = 9.84/9 - 0.36/81 = (88.56 - 0.36)/81 = 88.20/81 = 98/90 approx 1.0889 dollars^2.",
    "trap": "Because draws are without replacement, matching color is 4/9, not 1/2.",
    "tests": [
      "c.prob.4.3.1",
      "c.prob.4.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 35, PDF p. 178."
  },
  {
    "id": "w.prob.4.ross.problem.36",
    "course": "prob",
    "sec": "4.5",
    "marks": 5,
    "title": "Friendship paradox on a concrete graph",
    "prompt": "Consider the 4-person network of Figure 4.5: f(1) = 3, f(2) = 2, f(3) = 1, f(4) = 2 (total edges = 4, f = 8). Let X be a uniformly chosen person, and let Z be a randomly chosen friend of X. Show explicitly that E[f(Z)] >= E[f(X)].",
    "approach": "Compute E[f(X)] as the simple average degree and E[f(Z)] by conditioning on the chosen person X.",
    "solution": "(1) For X uniform on {1, 2, 3, 4}: E[f(X)] = (3 + 2 + 1 + 2)/4 = 8/4 = 2.0 friends. (2) For Z, a randomly chosen friend of X: Condition on X = i: If X = 1 (friends 2, 3, 4 with degrees 2, 1, 2): E[f(Z) | X=1] = (2 + 1 + 2)/3 = 5/3. If X = 2 (friends 1, 4 with degrees 3, 2): E[f(Z) | X=2] = (3 + 2)/2 = 5/2. If X = 3 (friend 1 with degree 3): E[f(Z) | X=3] = 3/1 = 3. If X = 4 (friends 1, 2 with degrees 3, 2): E[f(Z) | X=4] = (3 + 2)/2 = 5/2. By the law of total expectation: E[f(Z)] = (1/4) * [5/3 + 5/2 + 3 + 5/2] = (1/4) * [5/3 + 5 + 3] = (1/4) * [5/3 + 8] = (1/4) * (29/3) = 29/12 approx 2.4167 friends. Since 29/12 = 2.4167 > 2.0 = E[f(X)], your friends have on average more friends than you do.",
    "trap": "Notice the conditioning: pick person X uniformly first, then pick one of their friends uniformly.",
    "tests": [
      "c.prob.4.5.1",
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 36, PDF p. 178."
  },
  {
    "id": "w.prob.4.ross.problem.37",
    "course": "prob",
    "sec": "4.5",
    "marks": 4,
    "title": "Variance of playoff duration and its maximum",
    "prompt": "For the best-of-3 playoff series in Problem 4.22 (where first team to 2 wins takes the series), let N be the number of games played. Find Var(N) as a function of p, and prove it is maximized at p = 1/2.",
    "approach": "Express N in {2, 3} with P(N = 3) = 2pq, calculate E[N^2] and (E[N])^2, then differentiate Var(N).",
    "solution": "Let q = 1 - p. N takes value 2 with prob 1 - 2pq and value 3 with prob 2pq. E[N] = 2(1 - 2pq) + 3(2pq) = 2 + 2pq. E[N^2] = 4(1 - 2pq) + 9(2pq) = 4 + 10pq. Var(N) = E[N^2] - (E[N])^2 = (4 + 10pq) - (2 + 2pq)^2 = 4 + 10pq - (4 + 8pq + 4p^2 q^2) = 2pq - 4p^2 q^2 = 2pq(1 - 2pq). Let u = pq = p(1 - p). Since 0 <= u <= 1/4 (maximized at p = 1/2), consider g(u) = 2u - 4u^2. Derivative g'(u) = 2 - 8u = 0 <=> u = 1/4. Since g''(u) = -8 < 0, the maximum occurs at u = 1/4 (which corresponds to p = 1/2). The maximum variance is Var(N) = 2(1/4) - 4(1/16) = 1/2 - 1/4 = 1/4 = 0.25.",
    "trap": "Var(N) is the variance of a Bernoulli-like shift N = 2 + I where I ~ Bernoulli(2pq), so Var(N) = 2pq(1 - 2pq).",
    "tests": [
      "c.prob.4.5.1",
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 37, PDF p. 178."
  },
  {
    "id": "w.prob.4.ross.problem.38",
    "course": "prob",
    "sec": "4.5",
    "marks": 4,
    "title": "Variance comparison for bus passenger inspection paradox",
    "prompt": "In the bus Problem 4.21 (buses of sizes 40, 33, 25, 50; total 148 students), find Var(X) and Var(Y) for passenger bus size X and driver bus size Y.",
    "approach": "Compute second moments E[X^2] = sum s^3 / 148 and E[Y^2] = sum s^2 / 4, then subtract squared means.",
    "solution": "(1) Driver bus size Y is uniform on {40, 33, 25, 50}: E[Y] = 148/4 = 37. E[Y^2] = (40^2 + 33^2 + 25^2 + 50^2)/4 = (1600 + 1089 + 625 + 2500)/4 = 5814/4 = 1453.5. Var(Y) = E[Y^2] - (E[Y])^2 = 1453.5 - 37^2 = 1453.5 - 1369 = 84.5. (2) Student bus size X has P(X = s) = s/148: E[X] = 5814/148 approx 39.28378. E[X^2] = (40^3 + 33^3 + 25^3 + 50^3)/148 = (64000 + 35937 + 15625 + 125000)/148 = 240562/148 approx 1625.4189. Var(X) = E[X^2] - (E[X])^2 = 1625.4189 - (39.28378)^2 approx 1625.4189 - 1543.2158 = 82.2031 approx 82.20.",
    "trap": "For X, the second moment weights s by s/148, making the numerator sum of cubes s^3.",
    "tests": [
      "c.prob.4.5.1",
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 38, PDF p. 178."
  },
  {
    "id": "w.prob.4.ross.problem.39",
    "course": "prob",
    "sec": "4.5",
    "marks": 4,
    "title": "Moments of linear transformations and quadratic functions",
    "prompt": "If E[X] = 1 and Var(X) = 5, calculate: (a) E[(2 + X)^2], and (b) Var(4 + 3X).",
    "approach": "Use E[X^2] = Var(X) + (E[X])^2 and the scaling property Var(aX + b) = a^2 Var(X).",
    "solution": "First find E[X^2]: E[X^2] = Var(X) + (E[X])^2 = 5 + 1^2 = 6. (a) Expand the square: (2 + X)^2 = 4 + 4X + X^2. By linearity: E[(2 + X)^2] = 4 + 4 E[X] + E[X^2] = 4 + 4(1) + 6 = 14. (b) For linear transformation 4 + 3X: Var(4 + 3X) = 3^2 Var(X) = 9 * 5 = 45.",
    "trap": "The additive constant 4 has zero effect on variance, while the multiplier 3 is squared to 9.",
    "tests": [
      "c.prob.4.5.1",
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 39, PDF pp. 178–179."
  },
  {
    "id": "w.prob.4.ross.problem.40",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Sampling with replacement: exactly two white balls in four draws",
    "prompt": "A ball is drawn from an urn containing 3 white and 3 black balls. The ball is replaced, and this process is repeated indefinitely. What is the probability that of the first 4 balls drawn, exactly 2 are white?",
    "approach": "Draws are independent Bernoulli trials with p = 3/6 = 1/2. Use Bin(4, 1/2).",
    "solution": "Each draw is with replacement from 6 balls, so each draw independently yields white with probability p = 3/6 = 1/2. The number of white balls X in 4 draws follows Bin(4, 1/2). P(X = 2) = C(4, 2) * (1/2)^2 * (1/2)^2 = 6 * (1/16) = 6/16 = 3/8 = 0.375 (37.5%).",
    "trap": "Replacement ensures trials are independent and identically distributed with constant p = 1/2.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 40, PDF p. 179."
  },
  {
    "id": "w.prob.4.ross.problem.41",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Guessing on a multiple-choice examination",
    "prompt": "A quiz contains 5 questions, each with 3 possible choices of which exactly one is correct. If an unprepared student guesses independently on every question, what is the probability that the student answers 4 or more questions correctly?",
    "approach": "The number of correct answers X follows Bin(n = 5, p = 1/3). Compute P(X = 4) + P(X = 5).",
    "solution": "P(X = 4) = C(5, 4) * (1/3)^4 * (2/3)^1 = 5 * (1/81) * (2/3) = 10/243. P(X = 5) = C(5, 5) * (1/3)^5 * (2/3)^0 = 1 * (1/243) = 1/243. Therefore P(X >= 4) = 10/243 + 1/243 = 11/243 approx 0.0453 (about 4.53%).",
    "trap": "Be sure to include both X = 4 and X = 5 when answering \"4 or more\".",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 41, PDF p. 179."
  },
  {
    "id": "w.prob.4.ross.problem.42",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Statistical significance of extrasensory perception claim",
    "prompt": "A subject claiming ESP predicts the outcome of 10 fair coin tosses in advance and gets 7 correct. What is the probability that an ordinary person guessing randomly would get 7 or more correct?",
    "approach": "Under the null hypothesis of no ESP, correct guesses X follows Bin(10, 1/2). Compute P(X >= 7).",
    "solution": "Total outcomes = 2^10 = 1024. P(X >= 7) = P(X = 7) + P(X = 8) + P(X = 9) + P(X = 10) = [C(10, 7) + C(10, 8) + C(10, 9) + C(10, 10)] / 1024 = [120 + 45 + 10 + 1] / 1024 = 176 / 1024 = 11 / 64 approx 0.171875 (about 17.2%). Because there is a greater than 17% chance of achieving 7 or more correct by pure luck, this outcome is not statistically significant evidence of ESP.",
    "trap": "In a one-tailed hypothesis test, evaluate P(X >= 7), not merely P(X = 7).",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 42, PDF p. 179."
  },
  {
    "id": "w.prob.4.ross.problem.43",
    "course": "prob",
    "sec": "4.6",
    "marks": 5,
    "title": "Joint test performance: both correct and either correct",
    "prompt": "Students A and B take the same n-question exam. For each question, A is correct with prob p_A independently, and B is correct with prob p_B independently. (a) Find the expected number of questions answered correctly by both A and B. (b) Find the variance of the number of questions answered correctly by either A or B. Evaluate for the source values n=10,p_A=.7,p_B=.4.",
    "approach": "Define indicator variables for each question and apply linearity of expectation and independence.",
    "solution": "(a) For question i, let I_i = 1 if both A and B answer correctly. By independence: P(I_i = 1) = p_A p_B. The number answered correctly by both is X = sum_{i=1}^n I_i. E[X] = sum_{i=1}^n E[I_i] = n p_A p_B. (b) For question i, let J_i = 1 if either A or B is correct. P(J_i = 0) = (1 - p_A)(1 - p_B), so p_E = P(J_i = 1) = 1 - (1 - p_A)(1 - p_B) = p_A + p_B - p_A p_B. The count Y = sum_{i=1}^n J_i is the sum of n independent Bernoulli(p_E) indicators. Thus Y ~ Bin(n, p_E). Var(Y) = n p_E (1 - p_E) = n [p_A + p_B - p_A p_B] (1 - p_A)(1 - p_B). At those source values, the mean both-correct count is 10·.7·.4=2.8. “Either” means at least one: its per-question chance is .7+.4−.7·.4=.82, and independence between questions gives variance 10·.82·.18=1.476.",
    "trap": "Questions are independent across i, so variances add directly; for question-level \"either\", use 1 - (1-p_A)(1-p_B).",
    "tests": [
      "c.prob.4.6.1",
      "c.prob.4.3.2",
      "c.prob.4.5.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 43, PDF p. 179."
  },
  {
    "id": "w.prob.4.ross.problem.44",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Repetition coding reliability over a binary symmetric channel",
    "prompt": "A communications channel has bit error probability 0.2. To transmit a binary message reliably, each 0 is sent as 00000 and each 1 as 11111. The receiver decodes by majority rule (3 or more matching bits). (a) What is the probability that the message is decoded incorrectly? (b) State the independence assumption made.",
    "approach": "The decoded bit is incorrect if 3, 4, or 5 bit errors occur. Model error count as Bin(5, 0.2).",
    "solution": "(a) Let X be the number of transmission errors in the 5 bits. By majority decoding, an error occurs if X >= 3. Since X ~ Bin(5, 0.2): P(X = 3) = C(5, 3)(0.2)^3 (0.8)^2 = 10 * 0.008 * 0.64 = 0.0512. P(X = 4) = C(5, 4)(0.2)^4 (0.8)^1 = 5 * 0.0016 * 0.8 = 0.0064. P(X = 5) = C(5, 5)(0.2)^5 (0.8)^0 = 1 * 0.00032 = 0.00032. P(error) = 0.0512 + 0.0064 + 0.00032 = 0.05792 (approx 5.79%). Repetition reduces error rate from 20% to under 6%. (b) Assumption: Bit errors on successive transmissions are mutually independent with identical probability 0.2.",
    "trap": "Majority decoding requires 3 or more errors out of 5; do not omit the X = 4 and X = 5 terms.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 44, PDF p. 179."
  },
  {
    "id": "w.prob.4.ross.problem.45",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Satellite system reliability under random weather conditions",
    "prompt": "A satellite system consists of n components and functions if at least k components function. On a rainy day (which occurs tomorrow with probability p), each component independently functions with probability p_1. On a dry day (prob 1 - p), each independently functions with probability p_0. What is the probability that the satellite system functions tomorrow?",
    "approach": "Condition on the weather (rainy vs dry), calculate binomial survival probabilities under each, and apply total probability.",
    "solution": "Let R be the event of a rainy day (P(R) = p) and D = R^c be a dry day (P(D) = 1 - p). On a rainy day, working components follow Bin(n, p_1): P(system functions | R) = sum_{i=k}^n C(n, i) p_1^i (1 - p_1)^{n-i}. On a dry day, working components follow Bin(n, p_0): P(system functions | D) = sum_{i=k}^n C(n, i) p_0^i (1 - p_0)^{n-i}. By the law of total probability: P(system functions) = p sum_{i=k}^n C(n, i) p_1^i (1 - p_1)^{n-i} + (1 - p) sum_{i=k}^n C(n, i) p_0^i (1 - p_0)^{n-i}.",
    "trap": "Component operating states are conditionally independent given the weather, but unconditionally dependent through weather.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 45, PDF p. 179."
  },
  {
    "id": "w.prob.4.ross.problem.46",
    "course": "prob",
    "sec": "4.6",
    "marks": 5,
    "title": "Oral exam strategy: choosing between 3 and 5 examiners",
    "prompt": "A student prepares for an oral exam where passing requires a majority vote. On an \"on\" day (probability 1/3), each examiner independently passes him with probability 0.8. On an \"off\" day (probability 2/3), each examiner passes him with probability 0.4. Should the student request 3 examiners or 5 examiners to maximize the probability of passing?",
    "approach": "Calculate the conditional pass probability under 3 and 5 examiners for both on and off days, then apply the law of total probability.",
    "solution": "(1) 3 examiners (majority is >= 2 passes): If on day, P(pass | on) = C(3,2)(0.8)^2(0.2) + C(3,3)(0.8)^3 = 3(0.128) + 0.512 = 0.384 + 0.512 = 0.896. If off day, P(pass | off) = C(3,2)(0.4)^2(0.6) + C(3,3)(0.4)^3 = 3(0.096) + 0.064 = 0.288 + 0.064 = 0.352. Overall P(pass with 3) = (1/3)(0.896) + (2/3)(0.352) = (0.896 + 0.704)/3 = 1.600 / 3 approx 0.5333 (53.33%). (2) 5 examiners (majority is >= 3 passes): If on day, P(pass | on) = C(5,3)(0.8)^3(0.2)^2 + C(5,4)(0.8)^4(0.2) + C(5,5)(0.8)^5 = 10(0.02048) + 5(0.08192) + 0.32768 = 0.2048 + 0.4096 + 0.32768 = 0.94208. If off day, P(pass | off) = C(5,3)(0.4)^3(0.6)^2 + C(5,4)(0.4)^4(0.6) + C(5,5)(0.4)^5 = 10(0.02304) + 5(0.01536) + 0.01024 = 0.2304 + 0.0768 + 0.01024 = 0.31744. Overall P(pass with 5) = (1/3)(0.94208) + (2/3)(0.31744) = (0.94208 + 0.63488)/3 = 1.57696 / 3 approx 0.52565 (52.57%). Comparing 0.5333 > 0.5257, the student has a higher chance of passing with 3 examiners. He should request 3 examiners.",
    "trap": "Because the off day is twice as likely as the on day, increasing examiners hurts performance on off days more than it helps on on days.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 46, PDF pp. 179–180."
  },
  {
    "id": "w.prob.4.ross.problem.47",
    "course": "prob",
    "sec": "4.6",
    "marks": 5,
    "title": "Jury conviction threshold and overall accuracy",
    "prompt": "A 12-member jury requires at least 9 guilty votes to convict. Each juror independently votes an innocent person guilty with probability 0.1, and votes a guilty person innocent with probability 0.2 (so votes guilty with probability 0.8). If 65% of defendants are guilty: (a) Find the probability that the jury renders a correct decision. (b) What percentage of defendants are convicted?",
    "approach": "Condition on the defendant being guilty (G) or innocent (I) and evaluate the binomial tail probabilities for >= 9 guilty votes.",
    "solution": "Let G = defendant guilty (P(G) = 0.65) and I = defendant innocent (P(I) = 0.35). (1) For a guilty defendant, guilty votes follow Bin(12, 0.8). Conviction requires >= 9 guilty votes: P(convict | G) = sum_{k=9}^{12} C(12, k) (0.8)^k (0.2)^{12-k} = C(12, 9)(0.8)^9(0.2)^3 + C(12, 10)(0.8)^{10}(0.2)^2 + C(12, 11)(0.8)^{11}(0.2)^1 + C(12, 12)(0.8)^{12} = 220(0.134218)(0.008) + 66(0.107374)(0.04) + 12(0.085899)(0.2) + 1(0.068719) = 0.2362 + 0.2835 + 0.2062 + 0.0687 = 0.7946. (2) For an innocent defendant, guilty votes follow Bin(12, 0.1). Conviction requires >= 9 guilty votes: P(convict | I) = sum_{k=9}^{12} C(12, k) (0.1)^k (0.9)^{12-k} approx C(12, 9)(0.1)^9(0.9)^3 = 220 * 10^{-9} * 0.729 approx 1.6 * 10^{-7} approx 0.0000. Thus P(acquit | I) = 1 - P(convict | I) approx 1.0000. (a) P(correct decision) = P(G) * P(convict | G) + P(I) * P(acquit | I) = 0.65(0.7946) + 0.35(1.0000) = 0.5165 + 0.3500 = 0.8665 (approx 86.65%). (b) Percentage of defendants convicted = P(convicted) = 0.65 * 0.7946 + 0.35 * 0 = 0.5165 (approx 51.65%).",
    "trap": "An innocent defendant is acquitted if guilty votes are 8 or fewer; with p = 0.1, wrongful conviction is virtually impossible.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 47, PDF p. 180."
  },
  {
    "id": "w.prob.4.ross.problem.48",
    "course": "prob",
    "sec": "4.6",
    "marks": 5,
    "title": "Peremptory challenges and conviction probabilities in military court",
    "prompt": "A military court initially has 9 judges. Prosecution and defense may peremptorily remove judges without replacement. Conviction requires a strict majority of guilty votes. A guilty defendant receives a guilty vote with probability 0.7 from each judge independently; an innocent defendant receives a guilty vote with probability 0.3. (a) Find the probability that a guilty defendant is convicted with: (i) 9 judges, (ii) 8 judges, and (iii) 7 judges. (b) Repeat part (a) for an innocent defendant. (c) If the defense can make at most 2 challenges (and prosecution makes none), how many challenges should the defense make if 60% certain the client is guilty?",
    "approach": "Conviction requires >= 5 votes for 9 judges, >= 5 votes for 8 judges, and >= 4 votes for 7 judges. Compute binomial tail sums.",
    "solution": "(a) Guilty defendant (p = 0.7): (i) 9 judges (need >= 5): P(convict) = sum_{k=5}^9 C(9, k)(0.7)^k (0.3)^{9-k} = 0.9012. (ii) 8 judges (need >= 5): P(convict) = sum_{k=5}^8 C(8, k)(0.7)^k (0.3)^{8-k} = 0.8059. (iii) 7 judges (need >= 4): P(convict) = sum_{k=4}^7 C(7, k)(0.7)^k (0.3)^{7-k} = 0.8740. (b) Innocent defendant (p = 0.3): (i) 9 judges (need >= 5): P(convict) = sum_{k=5}^9 C(9, k)(0.3)^k (0.7)^{9-k} = 1 - 0.9012 = 0.0988. (ii) 8 judges (need >= 5): P(convict) = sum_{k=5}^8 C(8, k)(0.3)^k (0.7)^{8-k} = 0.0580. (iii) 7 judges (need >= 4): P(convict) = sum_{k=4}^7 C(7, k)(0.3)^k (0.7)^{7-k} = 1 - 0.8740 = 0.1260. (c) Defense objective is to minimize P(conviction) given P(Guilty) = 0.60: With 0 challenges (9 judges): P = 0.60(0.9012) + 0.40(0.0988) = 0.5407 + 0.0395 = 0.5802. With 1 challenge (8 judges): P = 0.60(0.8059) + 0.40(0.0580) = 0.4835 + 0.0232 = 0.5067. With 2 challenges (7 judges): P = 0.60(0.8740) + 0.40(0.1260) = 0.5244 + 0.0504 = 0.5748. The minimum conviction probability occurs with 1 challenge (0.5067). The defense attorney should make exactly 1 challenge.",
    "trap": "For 8 judges, a majority is 5 votes (5/8 = 62.5%), which is a higher threshold than 5/9 (55.6%) or 4/7 (57.1%), making 8 judges the most favorable for the defendant.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 48, PDF p. 180."
  },
  {
    "id": "w.prob.4.ross.problem.49",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Package return probability under defective diskette guarantee",
    "prompt": "Diskettes are defective independently with probability 0.01 and sold in packages of 10. A money-back guarantee allows a customer to return a package if it contains more than 1 defective diskette. If someone buys 3 packages, what is the probability that exactly 1 package is returned?",
    "approach": "Find the return probability q for a single package using Bin(10, 0.01), then use Bin(3, q) for 3 packages.",
    "solution": "Let X be the number of defective diskettes in a package of 10. X ~ Bin(10, 0.01). A package is returned if X > 1: P(X = 0) = (0.99)^{10} approx 0.904382. P(X = 1) = C(10, 1)(0.01)^1 (0.99)^9 = 10 * 0.01 * 0.913517 = 0.091352. P(not returned) = P(X <= 1) = 0.904382 + 0.091352 = 0.995734. The return probability for a single package is q = 1 - 0.995734 = 0.004266. For 3 independent packages, the number of returned packages follows Bin(3, q): P(exactly 1 returned) = C(3, 1) q^1 (1 - q)^2 = 3 * (0.004266) * (0.995734)^2 = 3 * 0.004266 * 0.991486 approx 0.01269 (about 1.27%).",
    "trap": "Ensure you compute P(X > 1) = 1 - P(X <= 1), not 1 - P(X = 0).",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 49, PDF pp. 179–180."
  },
  {
    "id": "w.prob.4.ross.problem.50",
    "course": "prob",
    "sec": "4.6",
    "marks": 5,
    "title": "Random coin selection and conditional flip outcomes",
    "prompt": "Coin 1 lands on heads with probability 0.4; Coin 2 lands on heads with probability 0.7. One coin is randomly chosen (equal probability) and flipped 10 times. (a) What is the probability that the coin lands on heads on exactly 7 of the 10 flips? (b) Given that the first of the 10 flips lands heads, what is the conditional probability that exactly 7 of the 10 flips land on heads?",
    "approach": "Use the law of total probability across the two coins, and apply Bayes formula for conditional probability.",
    "solution": "Let C_1 and C_2 be the events of selecting Coin 1 and Coin 2, P(C_1) = P(C_2) = 0.5. (a) P(7 heads in 10 flips) = 0.5 * P(7 H | C_1) + 0.5 * P(7 H | C_2) = 0.5 * [C(10, 7)(0.4)^7 (0.6)^3] + 0.5 * [C(10, 7)(0.7)^7 (0.3)^3] = 0.5 * [120 * 0.0016384 * 0.216] + 0.5 * [120 * 0.0823543 * 0.027] = 0.5 * 0.042467 + 0.5 * 0.266828 = 0.021234 + 0.133414 = 0.15465 approx 0.155 (15.5%). (b) Let H_1 be the event the first flip is heads, and E be the event of 7 heads in 10 flips. P(H_1) = 0.5(0.4) + 0.5(0.7) = 0.2 + 0.35 = 0.55. Since every one of the 7 heads is equally likely to be the first flip, P(H_1 and E | C_i) = (7/10) * P(E | C_i). Thus P(H_1 and E) = (7/10) * P(E) = 0.7 * 0.15465 = 0.108255. Therefore P(E | H_1) = P(H_1 and E) / P(H_1) = 0.108255 / 0.55 approx 0.1968 (about 19.7%).",
    "trap": "The first flip being heads updates the posterior probability toward Coin 2, increasing the likelihood of 7 total heads.",
    "tests": [
      "c.prob.4.6.1",
      "c.prob.4.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 50, PDF p. 180."
  },
  {
    "id": "w.prob.4.ross.problem.51",
    "course": "prob",
    "sec": "4.6",
    "marks": 5,
    "title": "Distribution of same-sex peers and friendship network size",
    "prompt": "In a population of size n, each member is independently female with probability p or male with probability 1-p. Let X be the number of the other n-1 members who are of the same sex as person 1. (a) Find P(X = k) for k = 0, 1, ..., n-1. (b) Suppose two people of the same sex are friends with probability alpha, while two of opposite sexes are friends with probability beta (all pairs independent). Find the probability mass function of the number of friends of person 1.",
    "approach": "Condition on the sex of person 1, and for part (b) condition on the number of same-sex peers X = k.",
    "solution": "(a) Let F_1 be the event person 1 is female (P = p) and M_1 be male (P = 1-p). Given F_1, the other n-1 people are female independently with probability p, so X | F_1 ~ Bin(n-1, p). Given M_1, the other n-1 people are male independently with probability 1-p, so X | M_1 ~ Bin(n-1, 1-p). By total probability: P(X = k) = p * C(n-1, k) p^k (1-p)^{n-1-k} + (1-p) * C(n-1, k) (1-p)^k p^{n-1-k} = C(n-1, k) [p^{k+1}(1-p)^{n-1-k} + (1-p)^{k+1} p^{n-1-k}] for k = 0, 1, ..., n-1. (b) Let Y be the number of friends of person 1. Given X = k, person 1 has k same-sex peers and n - 1 - k opposite-sex peers. The friends from same-sex peers follows Bin(k, alpha) and from opposite-sex follows Bin(n-1-k, beta). By independence: P(Y = j | X = k) = sum_{r=0}^j C(k, r) alpha^r (1-alpha)^{k-r} * C(n-1-k, j-r) beta^{j-r} (1-beta)^{n-1-k-(j-r)}. Then P(Y = j) = sum_{k=0}^{n-1} P(X = k) P(Y = j | X = k).",
    "trap": "Person 1 is compared against the remaining n-1 people; the binomial index is n-1, not n.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 51, PDF p. 180."
  },
  {
    "id": "w.prob.4.ross.problem.52",
    "course": "prob",
    "sec": "4.3",
    "marks": 5,
    "title": "Expected games played in a sequential knockout tournament",
    "prompt": "In a knockout tournament with players 1, 2, 3, 4: Players 1 and 2 play game 1; the winner plays player 3 in game 2; the winner of game 2 plays player 4 in game 3 to determine the tournament champion. In any match between player i and player j, player i wins with probability i / (i + j). (a) Find the expected number of games played by player 1. (b) Find the expected number of games played by player 3.",
    "approach": "Express the number of games played by player i as an indicator sum of participation in each game round.",
    "solution": "(a) Player 1 plays game 1 with certainty (1 game). Player 1 advances to game 2 if 1 beats 2, which occurs with probability P(1 beats 2) = 1/(1+2) = 1/3. If 1 reaches game 2, 1 plays against 3, winning with probability P(1 beats 3) = 1/(1+3) = 1/4. Thus player 1 plays game 3 with probability (1/3) * (1/4) = 1/12. Expected games for player 1: E[N_1] = 1 + P(plays game 2) + P(plays game 3) = 1 + 1/3 + 1/12 = 17/12 approx 1.4167. (b) Player 3 enters in game 2 and thus plays game 2 with certainty (1 game). The opponent in game 2 is player 1 (with prob 1/3) or player 2 (with prob 2/3). P(3 wins game 2) = P(1 wins game 1)*P(3 beats 1) + P(2 wins game 1)*P(3 beats 2) = (1/3) * (3/4) + (2/3) * (3/5) = 1/4 + 2/5 = 13/20. If player 3 wins game 2, player 3 advances to game 3 against player 4. Expected games for player 3: E[N_3] = 1 + P(plays game 3) = 1 + 13/20 = 33/20 = 1.65.",
    "trap": "Player 3 plays in game 2 regardless of who won game 1, so the baseline game count for player 3 is 1.",
    "tests": [
      "c.prob.4.3.1",
      "c.prob.4.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 52, PDF p. 180."
  },
  {
    "id": "w.prob.4.ross.problem.53",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Conditional sequence probabilities given total binomial successes",
    "prompt": "A biased coin with head probability p is flipped 10 times. Given that exactly 6 heads occurred in total, find the conditional probability that the first 3 flips are: (a) H, T, T, and (b) T, H, T.",
    "approach": "Conditioning on the total number of successes makes all subsets of successful trials equally likely, independent of the coin bias p.",
    "solution": "Given that exactly 6 heads occur in 10 flips, each of the C(10, 6) sequences containing 6 heads and 4 tails is equally likely, with probability 1 / C(10, 6). (a) The outcome (H, T, T) on the first 3 flips specifies 1 head and 2 tails. To reach 6 heads total, the remaining 7 flips must contain 6 - 1 = 5 heads (and 2 tails). The number of such sequences is C(7, 5). Therefore: P((H, T, T) on first 3 | 6 heads total) = C(7, 5) / C(10, 6) = 21 / 210 = 1/10 = 0.10. (b) The outcome (T, H, T) on the first 3 flips also specifies exactly 1 head and 2 tails. By identical counting: P((T, H, T) on first 3 | 6 heads total) = C(7, 5) / C(10, 6) = 21 / 210 = 1/10 = 0.10. By exchangeability, any specific arrangement of 1 head and 2 tails on the first 3 trials has conditional probability 1/10.",
    "trap": "The bias parameter p completely cancels out in the conditional distribution; the trials behave like sampling without replacement.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 53, PDF p. 180."
  },
  {
    "id": "w.prob.4.ross.problem.54",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Poisson model for typographical misprints on a magazine page",
    "prompt": "The expected number of typographical errors on a page of a magazine is 0.2. What is the probability that the next page you read contains: (a) 0 errors, and (b) 2 or more errors? Explain your reasoning.",
    "approach": "Model the error count as Poisson(lambda = 0.2) because a page contains many characters/words (large n), each with a small chance of error (small p).",
    "solution": "Reasoning: A magazine page has hundreds or thousands of letters and words (large n). The probability of an error on any individual character is small and independent (small p). By the Poisson paradigm, the error count X is well modeled by Poisson(lambda = 0.2). (a) P(X = 0) = exp(-0.2) * (0.2)^0 / 0! = exp(-0.2) approx 0.81873 approx 0.8187 (81.87%). (b) P(X >= 2) = 1 - P(X = 0) - P(X = 1). P(X = 1) = exp(-0.2) * (0.2)^1 / 1! = 0.2 * exp(-0.2) approx 0.16375. Thus P(X >= 2) = 1 - (0.81873 + 0.16375) = 1 - 0.98248 = 0.01752 approx 0.0175 (1.75%).",
    "trap": "Use the complement 1 - P(0) - P(1) rather than summing an infinite series.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 54, PDF p. 180."
  },
  {
    "id": "w.prob.4.ross.problem.55",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Commercial airplane crash frequency per month",
    "prompt": "The monthly worldwide average number of commercial airline crashes is 3.5. What is the probability that in the next month there will be: (a) at least 2 accidents? (b) at most 1 accident? Explain your reasoning.",
    "approach": "Model the monthly accident count as Poisson(lambda = 3.5), justifiable since commercial flights are very numerous while crashes are rare.",
    "solution": "Reasoning: Millions of commercial airline flights occur worldwide each month (large n), each with an extremely tiny crash probability (small p). By the Poisson limit theorem, the monthly accident count X follows Poisson(lambda = 3.5). (b) P(at most 1) = P(X <= 1) = P(X = 0) + P(X = 1) = exp(-3.5) * (1 + 3.5) = 4.5 * exp(-3.5) approx 4.5 * 0.0301974 = 0.13589 approx 0.1359 (13.59%). (a) P(at least 2) = P(X >= 2) = 1 - P(X <= 1) = 1 - 0.13589 = 0.86411 approx 0.8641 (86.41%).",
    "trap": "At least 2 is the exact complement of at most 1.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 55, PDF p. 180."
  },
  {
    "id": "w.prob.4.ross.problem.56",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Birthday coincidences among married couples in New York",
    "prompt": "Approximately 80,000 marriages occurred in New York last year. Estimate the probability that for at least one couple: (a) both partners were born on April 30, and (b) both partners celebrate their birthday on the same day of the year. State your assumptions.",
    "approach": "Model each couple match as a Bernoulli trial and apply the Poisson approximation with lambda = n*p.",
    "solution": "Assumptions: A year has 365 days (ignoring leap day), all birth dates are equally likely with probability 1/365, and partners birthdays are independent. (a) For a given couple, P(both born April 30) = (1/365)^2 = 1 / 133,225. With n = 80,000 couples, the number of such couples follows Poisson(lambda) with lambda = 80,000 / 133,225 approx 0.60049. P(at least one couple) = 1 - exp(-lambda) = 1 - exp(-0.60049) approx 1 - 0.54854 = 0.45146 approx 0.4515 (45.15%). (b) For a given couple, P(both share the same birthday) = 365 * (1/365)^2 = 1/365. With n = 80,000 couples, lambda = 80,000 / 365 approx 219.178. P(at least one couple) = 1 - exp(-219.178) = 1 - 0 = 1.0 (virtually 100%).",
    "trap": "In part (a) the date is specified, giving probability (1/365)^2, while in part (b) any matching date qualifies, giving probability 1/365.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 56, PDF p. 180."
  },
  {
    "id": "w.prob.4.ross.problem.57",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Poisson model for abandoned cars on a highway",
    "prompt": "The average number of cars abandoned weekly on a certain highway is 2.2. Assuming weekly abandonments follow a Poisson process, approximate the probability that next week there will be: (a) no abandoned cars, and (b) at least 2 abandoned cars.",
    "approach": "Use Poisson(lambda = 2.2) pmf and complement formula.",
    "solution": "Assumptions: Cars are abandoned independently and at a constant average rate over time, making weekly abandonments X ~ Poisson(lambda = 2.2). (a) P(X = 0) = exp(-2.2) * (2.2)^0 / 0! = exp(-2.2) approx 0.11080 approx 0.1108 (11.08%). (b) P(X >= 2) = 1 - P(X = 0) - P(X = 1) = 1 - exp(-2.2) - 2.2 * exp(-2.2) = 1 - 3.2 * exp(-2.2) = 1 - 3.2 * 0.110803 = 1 - 0.35457 = 0.64543 approx 0.6454 (64.54%).",
    "trap": "Remember to subtract both the k=0 and k=1 terms when computing P(X >= 2).",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 57, PDF p. 180."
  },
  {
    "id": "w.prob.4.ross.problem.58",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Error-free article from a typing agency with two typists",
    "prompt": "A typing agency employs 2 typists. The number of errors per article is Poisson with mean 3.0 when typed by typist 1, and Poisson with mean 4.2 when typed by typist 2. If an article is equally likely to be assigned to either typist, approximate the probability that it will contain no errors.",
    "approach": "Condition on which typist prepares the article and apply the law of total probability.",
    "solution": "Let T_1 and T_2 be the events the article is typed by typist 1 and 2, P(T_1) = P(T_2) = 0.5. Given T_1, errors X ~ Poisson(3.0), so P(X = 0 | T_1) = exp(-3.0) approx 0.049787. Given T_2, errors X ~ Poisson(4.2), so P(X = 0 | T_2) = exp(-4.2) approx 0.014996. By the law of total probability: P(X = 0) = 0.5 * P(X = 0 | T_1) + 0.5 * P(X = 0 | T_2) = 0.5 * 0.049787 + 0.5 * 0.014996 = 0.024894 + 0.007498 = 0.032392 approx 0.0324 (about 3.24%).",
    "trap": "The mixture of two Poisson distributions is not itself Poisson; average the zero-probabilities, do not average the lambdas.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 58, PDF p. 180."
  },
  {
    "id": "w.prob.4.ross.problem.59",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Sample size needed to match a fixed target birthday",
    "prompt": "How many people are needed so that the probability that at least one of them has the same birthday as you is strictly greater than 1/2? (Assume 365 equally likely birthdays).",
    "approach": "Calculate the probability that none of n people share your specific birthday, set 1 - (364/365)^n > 0.5, and solve for n.",
    "solution": "Each person has birthday different from yours with probability 364/365. For n independent people, the probability that none of them share your birthday is (364/365)^n. We require: P(at least one match) = 1 - (364/365)^n > 0.5 <=> (364/365)^n < 0.5. Taking natural logarithms: n ln(364/365) < ln(0.5) <=> n * (-0.00274348) < -0.693147. Dividing by the negative number reverses the inequality: n > 0.693147 / 0.00274348 approx 252.65. Since n must be an integer, n = 253 people are needed.",
    "trap": "Do not confuse matching YOUR specific birthday (n = 253) with the classic birthday problem where ANY two people share a birthday (n = 23).",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 59, PDF pp. 180–181."
  },
  {
    "id": "w.prob.4.ross.problem.60",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Daily highway accident probabilities and truncation",
    "prompt": "The number of daily highway accidents is a Poisson random variable with parameter lambda = 3. (a) Find the probability that 3 or more accidents occur today. (b) Find this probability given that at least 1 accident occurs today.",
    "approach": "Evaluate cumulative Poisson terms for k = 0, 1, 2 and apply the definition of conditional probability.",
    "solution": "(a) P(X >= 3) = 1 - P(X = 0) - P(X = 1) - P(X = 2) = 1 - exp(-3)[1 + 3/1! + 3^2/2!] = 1 - exp(-3)[1 + 3 + 4.5] = 1 - 8.5 * exp(-3) = 1 - 8.5 * 0.049787 = 1 - 0.42319 = 0.57681 approx 0.5768 (57.68%). (b) Under the condition that at least 1 accident occurs: P(X >= 3 | X >= 1) = P(X >= 3 and X >= 1) / P(X >= 1) = P(X >= 3) / [1 - P(X = 0)] = 0.57681 / [1 - exp(-3)] = 0.57681 / [1 - 0.04979] = 0.57681 / 0.95021 approx 0.60703 approx 0.6070 (60.70%).",
    "trap": "In part (b), divide by P(X >= 1) = 1 - exp(-lambda); the intersection {X >= 3 and X >= 1} is simply {X >= 3}.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 60, PDF p. 181."
  },
  {
    "id": "w.prob.4.ross.problem.61",
    "course": "prob",
    "sec": "4.7",
    "marks": 5,
    "title": "Numerical comparison: Poisson approximation versus exact binomial",
    "prompt": "Compare the Poisson approximation with the exact binomial probability for: (a) P(X = 2) when n = 8, p = 0.1; (b) P(X = 9) when n = 10, p = 0.95; (c) P(X = 0) when n = 10, p = 0.1; (d) P(X = 4) when n = 9, p = 0.2.",
    "approach": "Compute exact binomial P(X = k) = C(n, k) p^k (1-p)^{n-k} and Poisson approximation with lambda = np (or lambda = n(1-p) for rare failures).",
    "solution": "(a) n = 8, p = 0.1, lambda = 0.8: Exact = C(8, 2)(0.1)^2 (0.9)^6 = 28 * 0.01 * 0.531441 = 0.1488. Poisson = exp(-0.8) * 0.8^2 / 2! = 0.449329 * 0.32 = 0.1438. Difference = 0.0050. (b) n = 10, p = 0.95: Here failures Y = 10 - X ~ Bin(10, 0.05) are rare, lambda = 10 * 0.05 = 0.5. Exact P(X = 9) = P(Y = 1) = C(10, 1)(0.95)^9 (0.05)^1 = 10 * 0.630249 * 0.05 = 0.3151. Poisson = exp(-0.5) * 0.5^1 / 1! = 0.5 * 0.606531 = 0.3033. Difference = 0.0118. (c) n = 10, p = 0.1, lambda = 1.0: Exact P(X = 0) = (0.9)^{10} = 0.3487. Poisson = exp(-1.0) = 0.3679. Difference = 0.0192. (d) n = 9, p = 0.2, lambda = 1.8: Exact P(X = 4) = C(9, 4)(0.2)^4 (0.8)^5 = 126 * 0.0016 * 0.32768 = 0.0661. Poisson = exp(-1.8) * 1.8^4 / 4! = 0.165299 * 10.4976 / 24 = 0.0723. Difference = 0.0062.",
    "trap": "When p is close to 1 as in (b), approximate the number of failures with lambda = n(1-p), not the number of successes.",
    "tests": [
      "c.prob.4.7.1",
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 61, PDF p. 181."
  },
  {
    "id": "w.prob.4.ross.problem.62",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Poisson approximation for multiple lottery tickets",
    "prompt": "If you buy a ticket in 50 independent lotteries, in each of which your chance of winning a prize is 1/100, what is the approximate probability that you will win a prize: (a) at least once? (b) exactly once? (c) at least twice?",
    "approach": "Set lambda = np = 50 * (1/100) = 0.5 and compute Poisson probabilities for k = 0, 1, and >= 2.",
    "solution": "Parameter lambda = n * p = 50 * 0.01 = 0.5. (a) P(at least once) = P(X >= 1) = 1 - P(X = 0) = 1 - exp(-0.5) = 1 - 0.60653 = 0.39347 approx 0.3935 (39.35%). (b) P(exactly once) = P(X = 1) = exp(-0.5) * 0.5 = 0.5 * 0.60653 = 0.30327 approx 0.3033 (30.33%). (c) P(at least twice) = P(X >= 2) = 1 - P(X = 0) - P(X = 1) = 1 - 0.60653 - 0.30327 = 0.09020 approx 0.0902 (9.02%).",
    "trap": "The probability of winning at least once is 39.35%, substantially less than 50 * 1% = 50% due to overlapping outcomes.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 62, PDF p. 181."
  },
  {
    "id": "w.prob.4.ross.problem.63",
    "course": "prob",
    "sec": "4.7",
    "marks": 5,
    "title": "Bayesian effectiveness of a cold-prevention wonder drug",
    "prompt": "The annual number of colds contracted by a person is Poisson with parameter lambda = 5. A new drug reduces lambda to 3 for 75% of the population, but has no effect (lambda = 5) on the remaining 25%. If an individual takes the drug for a year and contracts 2 colds, what is the probability that the drug was effective for this individual?",
    "approach": "Apply Bayes theorem with prior probabilities 0.75 and 0.25 and Poisson likelihoods with lambda = 3 and lambda = 5.",
    "solution": "Let E be the event that the drug is effective (P(E) = 0.75) and E^c be the event it is ineffective (P(E^c) = 0.25). Let C_2 be the event that the person contracts exactly 2 colds. Conditional likelihoods: P(C_2 | E) = exp(-3) * 3^2 / 2! = 4.5 * exp(-3) approx 4.5 * 0.049787 = 0.22404. P(C_2 | E^c) = exp(-5) * 5^2 / 2! = 12.5 * exp(-5) approx 12.5 * 0.006738 = 0.08422. By Bayes formula: P(E | C_2) = [P(E) P(C_2 | E)] / [P(E) P(C_2 | E) + P(E^c) P(C_2 | E^c)] = [0.75 * 0.22404] / [0.75 * 0.22404 + 0.25 * 0.08422] = 0.16803 / [0.16803 + 0.02106] = 0.16803 / 0.18909 approx 0.8886 (about 88.9%).",
    "trap": "Even though 2 colds is below both averages, the lower parameter lambda = 3 is much more likely to generate 2 colds than lambda = 5.",
    "tests": [
      "c.prob.4.7.1",
      "c.prob.4.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 63, PDF p. 181."
  },
  {
    "id": "w.prob.4.ross.problem.64",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Waiting for an odd number of heads",
    "prompt": "A full house has probability about .0014 in a poker hand. Approximate the chance of at least two full houses in 1000 hands, assuming fresh independent hands.",
    "approach": "X is geometric with p = 1/2. Sum the geometric series for odd values X = 1, 3, 5, ...",
    "solution": "The count is Binomial(1000,.0014), approximated by Poisson(1.4). Thus P(at least two)≈1−e^{−1.4}(1+1.4)≈.4081673. This requires independent fresh hands with the same success probability.",
    "trap": "The common ratio is (1/2)^2 = 1/4, since each odd power increases by 2.",
    "tests": [
      "c.prob.4.8.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 64, PDF p. 182."
  },
  {
    "id": "w.prob.4.ross.problem.65",
    "course": "prob",
    "sec": "4.7",
    "marks": 5,
    "title": "Poisson approximation for distinct outcomes in multinomial trials",
    "prompt": "Consider n independent trials, each resulting in one of k outcomes with respective probabilities p_1, ..., p_k (sum p_i = 1). Show that if all p_i are small, the probability that no trial outcome occurs more than once is approximately exp(-n(n-1) sum_{i=1}^k p_i^2 / 2).",
    "approach": "Treat each pair of trials as a rare event of matching outcomes, compute the expected number of matching pairs, and apply the Poisson paradigm.",
    "solution": "Consider all C(n, 2) = n(n-1)/2 pairs of trials {r, s} with 1 <= r < s <= n. For any specific pair, both trials yield outcome i with probability p_i^2. Summing over all mutually exclusive outcomes i, the probability that trials r and s yield the same outcome is p_{match} = sum_{i=1}^k p_i^2. When all p_i are small, p_{match} is small and the match events for different pairs have weak dependence. By the Poisson paradigm, the total number of duplicate pairs M is approximately Poisson distributed with mean lambda = E[M] = C(n, 2) * p_{match} = [n(n-1)/2] sum_{i=1}^k p_i^2. No trial outcome occurs more than once if and only if there are zero duplicate pairs (M = 0). Therefore: P(no outcome occurs more than once) = P(M = 0) approx exp(-lambda) = exp(-n(n-1) sum_{i=1}^k p_i^2 / 2).",
    "trap": "The sum of p_i^2 appears because two trials match by both choosing outcome i with probability p_i * p_i.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 65, PDF p. 181."
  },
  {
    "id": "w.prob.4.ross.problem.66",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Customer arrival probabilities at a casino",
    "prompt": "People enter a gambling casino at a Poisson rate of 1 person every 2 minutes. (a) What is the probability that no one enters between 12:00 and 12:05? (b) What is the probability that at least 4 people enter during that time?",
    "approach": "In a 5-minute interval, rate is lambda = 5 * (1/2) = 2.5. Compute Poisson probabilities for k = 0 and complement of k <= 3.",
    "solution": "Arrival rate is lambda = 0.5 persons per minute. Over t = 5 minutes, expected arrivals = 5 * 0.5 = 2.5. Thus X ~ Poisson(2.5). (a) P(X = 0) = exp(-2.5) * (2.5)^0 / 0! = exp(-2.5) approx 0.08208 approx 0.0821 (8.21%). (b) P(X >= 4) = 1 - [P(0) + P(1) + P(2) + P(3)]. Compute each term with exp(-2.5) approx 0.082085: P(1) = 2.5 * exp(-2.5) approx 0.20521; P(2) = (2.5^2 / 2) exp(-2.5) = 3.125 * exp(-2.5) approx 0.25652; P(3) = (2.5^3 / 6) exp(-2.5) = (15.625 / 6) exp(-2.5) approx 0.21376. Sum P(X <= 3) = 0.082085 + 0.20521 + 0.25652 + 0.21376 = 0.75758. Thus P(X >= 4) = 1 - 0.75758 = 0.24242 approx 0.2424 (24.24%).",
    "trap": "Scale the Poisson parameter proportionally to the interval length: lambda_t = 0.5 * 5 = 2.5.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 66, PDF p. 181."
  },
  {
    "id": "w.prob.4.ross.problem.67",
    "course": "prob",
    "sec": "4.7",
    "marks": 5,
    "title": "City suicide count model and monthly runs",
    "prompt": "A state suicide rate is 1 per 100,000 residents per month. In a city of 400,000 residents: (a) Find the probability of 8 or more suicides in a given month. (b) What is the probability of at least 2 months with 8 or more suicides in a year? (c) Counting this month as 1, what is the probability that the first month with 8 or more suicides is month i? State your assumptions.",
    "approach": "For the city, monthly suicides X ~ Poisson(lambda = 4). Evaluate monthly tail probability p = P(X >= 8), then use Binomial and Geometric models.",
    "solution": "The city monthly mean is lambda = 400,000 * (1/100,000) = 4. Assumptions: Suicides occur independently and at a constant rate, so monthly counts are i.i.d. Poisson(4). (a) P(X >= 8) = 1 - sum_{k=0}^7 exp(-4) 4^k / k!. Evaluating the sum: exp(-4) * [1 + 4 + 8 + 10.6667 + 10.6667 + 8.5333 + 5.6889 + 3.2508] = 0.0183156 * 51.8064 approx 0.94886. Thus p = P(X >= 8) = 1 - 0.94886 = 0.05114 approx 0.0511 (5.11%). (b) Over 12 independent months, the number of severe months Y ~ Bin(12, p = 0.05114). P(Y >= 2) = 1 - P(Y = 0) - P(Y = 1) = 1 - (1 - p)^{12} - 12 p (1 - p)^{11}. Since 1 - p = 0.94886: (0.94886)^{12} approx 0.53116; 12 * 0.05114 * (0.94886)^{11} approx 0.34313. Thus P(Y >= 2) = 1 - (0.53116 + 0.34313) = 1 - 0.87429 = 0.12571 approx 0.1257 (12.57%). (c) The waiting time M to the first severe month follows a Geometric distribution with parameter p: P(M = i) = (1 - p)^{i-1} p approx (0.9489)^{i-1} * 0.0511 for i = 1, 2, ...",
    "trap": "Do not confuse the monthly Poisson count with the 12-month binomial count of severe months.",
    "tests": [
      "c.prob.4.7.1",
      "c.prob.4.6.1",
      "c.prob.4.8.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 67, PDF pp. 181–182."
  },
  {
    "id": "w.prob.4.ross.problem.68",
    "course": "prob",
    "sec": "4.7",
    "marks": 5,
    "title": "Pooled blood testing reliability and posterior diagnosis",
    "prompt": "Each of 500 soldiers independently has a disease with probability 0.001. Blood samples from all 500 are pooled and tested together. (a) Approximate the probability that the pooled test is positive. (b) Given the pooled test is positive, what is the probability that more than one soldier has the disease? (c) If soldier Jones knows he has the disease, what is his probability that more than one soldier has the disease? (d) If individual tests begin and the first i-1 soldiers test negative while the i-th (Jones) tests positive, what is the probability that any of the remaining soldiers have the disease?",
    "approach": "Model total diseased soldiers as Poisson(lambda = 500 * 0.001 = 0.5) and apply conditional probability and independence.",
    "solution": "Let X be the total number of diseased soldiers. X ~ Bin(500, 0.001) ~ Poisson(lambda = 0.5). (a) A pooled test is positive if X >= 1: P(X >= 1) = 1 - exp(-0.5) approx 1 - 0.60653 = 0.39347 approx 0.3935 (39.35%). (b) Given X >= 1: P(X > 1 | X >= 1) = [1 - P(0) - P(1)] / [1 - P(0)] = [1 - exp(-0.5) - 0.5 exp(-0.5)] / [1 - exp(-0.5)] = [1 - 1.5 exp(-0.5)] / [1 - exp(-0.5)] = [1 - 0.90980] / 0.39347 = 0.09020 / 0.39347 approx 0.2292 (22.92%). (c) Jones already knows he is infected. The other 499 soldiers have infection states independent of Jones. The number of other infected soldiers Y follows Bin(499, 0.001) ~ Poisson(0.499). More than one infected means Y >= 1: P(Y >= 1) = 1 - (1 - 0.001)^{499} approx 1 - exp(-0.499) approx 1 - 0.60714 = 0.39286 approx 0.3929 (39.29%). (d) Exactly 500 - i soldiers remain untested. Since trials are independent, each remaining soldier is infected with probability 0.001. The probability that at least one of them is infected is: 1 - (1 - 0.001)^{500 - i} approx 1 - exp(-0.001(500 - i)).",
    "trap": "In part (c), conditioning on Jones being infected gives information only about Jones; the remaining 499 soldiers remain independent Bernoulli trials.",
    "tests": [
      "c.prob.4.7.1",
      "c.prob.4.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 68, PDF pp. 181–182."
  },
  {
    "id": "w.prob.4.ross.problem.69",
    "course": "prob",
    "sec": "4.7",
    "marks": 5,
    "title": "Couples seated at a round table: neighbor probabilities and Poisson limit",
    "prompt": "A total of 2n people consisting of n married couples are randomly seated at a round table. Let C_i be the event that couple i sit next to each other. (a) Find P(C_i). (b) For j != i, find P(C_j | C_i). (c) For large n, approximate the probability that no married couples sit next to each other.",
    "approach": "Calculate the probability that spouse 2 takes one of the 2 seats adjacent to spouse 1, and apply the Poisson paradigm with lambda = n P(C_i).",
    "solution": "(a) Fix the position of the first spouse of couple i anywhere around the circular table. There are 2n - 1 remaining seats, of which exactly 2 are adjacent to this spouse. Since seating is uniformly random: P(C_i) = 2 / (2n - 1). (b) Given that couple i is seated together, treat couple i as a single condensed unit, leaving 2n - 1 units around the circle. For couple j (j != i), the first spouse occupies one seat, leaving 2n - 2 seats available. There are 2 seats adjacent to spouse j, so: P(C_j | C_i) = 2 / (2n - 2) = 1 / (n - 1). (c) The number of adjacent couples X is the sum of n indicators C_1, ..., C_n. Expected adjacent couples: E[X] = n * P(C_i) = 2n / (2n - 1) -> 1 as n -> infty. Because each pair of events has weak dependence (P(C_j | C_i) approx P(C_j)), by the Poisson paradigm X is approximately Poisson with parameter lambda = 1. Therefore: P(no couples seated together) = P(X = 0) approx exp(-1) approx 0.3679 (about 36.8%).",
    "trap": "Spouses sit in circular seating, so each person has exactly 2 neighbors; the probability of being adjacent is 2/(2n-1), not 1/(2n-1).",
    "tests": [
      "c.prob.4.7.1",
      "c.prob.4.9.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 69, PDF p. 182."
  },
  {
    "id": "w.prob.4.ross.problem.70",
    "course": "prob",
    "sec": "4.7",
    "marks": 5,
    "title": "Couples seated at a round table with alternating sexes",
    "prompt": "Repeat Problem 4.69 assuming that the 2n people (n couples) are randomly seated subject to the constraint that men and women alternate around the table.",
    "approach": "Condition on the women occupying alternate seats, leaving n candidate seats for the n men, 2 of which are adjacent to each wife.",
    "solution": "With alternating sexes, fix the circular order of the n wives and place husbands uniformly into the n gaps. For n≥2: (a) Wife i has two adjacent husband seats, so P(C_i)=2/n. (b) Given husband i in one adjacent gap, exactly one of the other n−1 wives neighbors the occupied gap; she has only one adjacent gap free. Each other wife has two free adjacent gaps. Averaging gives P(C_j|C_i)=[1+2(n−2)]/(n−1)²=(2n−3)/(n−1)² for j≠i. (c) The mean adjacent-couple count is 2; the large-n Poisson approximation gives no adjacent couples with chance e^{−2}. For n=1 adjacency is certain and there is no distinct j.",
    "trap": "Alternating sexes doubles the adjacent-seat probability from ~1/n to 2/n, doubling lambda from 1 to 2.",
    "tests": [
      "c.prob.4.7.1",
      "c.prob.4.9.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 70, PDF p. 182."
  },
  {
    "id": "w.prob.4.ross.problem.71",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Missile defense interception probability via the Poisson paradigm",
    "prompt": "In response to an incoming attack of 10 missiles, 500 interceptor missiles are launched. Each interceptor independently targets one of the 10 missiles at random and hits it with probability 0.1. Use the Poisson paradigm to approximate the probability that all 10 incoming missiles are hit.",
    "approach": "Compute the hit rate per incoming missile, find the probability an individual missile survives, and apply the Poisson approximation for surviving missiles.",
    "solution": "Each interceptor targets missile j with probability 1/10 and successfully hits it with probability 0.1. The probability an interceptor hits missile j is p = (1/10) * 0.1 = 0.01. With n = 500 interceptors, the number of hits on missile j follows Bin(500, 0.01) ~ Poisson(lambda = 500 * 0.01 = 5). Missile j survives (is missed by all interceptors) with probability P(0 hits) = exp(-5) approx 0.0067379. Let Y be the number of surviving incoming missiles among the 10 missiles. By the Poisson paradigm, Y is approximately Poisson with parameter mu = 10 * exp(-5) = 10 * 0.0067379 = 0.067379. All missiles are hit if and only if zero missiles survive (Y = 0): P(all 10 hit) = P(Y = 0) approx exp(-mu) = exp(-0.067379) approx 0.9348 (about 93.5%).",
    "trap": "Apply the Poisson paradigm in two stages: first for hits on each missile (Poisson with mean 5), then for unhit missiles (Poisson with mean 10*exp(-5)).",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 71, PDF p. 182."
  },
  {
    "id": "w.prob.4.ross.problem.72",
    "course": "prob",
    "sec": "4.7",
    "marks": 5,
    "title": "Probability of a run of four consecutive heads in ten coin tosses",
    "prompt": "Flip a fair coin ten times. Find the chance of at least four consecutive heads (a) by the exact inclusion–exclusion formula, (b) by recurrence, (c) compare with Poisson approximation.",
    "approach": "Set up the linear recurrence for the probability P_n of no run of 4 heads in n tosses, and compare with the Poisson clump approximation.",
    "solution": "(a) Let P_n be the probability that no run of 4 consecutive heads occurs in n tosses of a fair coin. Conditioning on the flip of the first tail gives the recurrence: P_n = (1/2)P_{n-1} + (1/4)P_{n-2} + (1/8)P_{n-3} + (1/16)P_{n-4} for n >= 4, with initial conditions P_0 = P_1 = P_2 = P_3 = 1. Computing step by step: P_4 = 1 - (1/2)^4 = 15/16 = 0.93750; P_5 = (1/2)(15/16) + (1/4)(1) + (1/8)(1) + (1/16)(1) = 29/32 = 0.90625; P_6 = (1/2)(29/32) + (1/4)(15/16) + (1/8)(1) + (1/16)(1) = 56/64 = 7/8 = 0.87500; P_7 = (1/2)(56/64) + (1/4)(29/32) + (1/8)(15/16) + (1/16)(1) = 108/128 = 27/32 = 0.84375; P_8 = (1/2)(108/128) + (1/4)(56/64) + (1/8)(29/32) + (1/16)(15/16) = 208/256 = 13/16 = 0.81250; P_9 = (1/2)(208/256) + (1/4)(108/128) + (1/8)(56/64) + (1/16)(29/32) = 401/512 approx 0.78320; P_{10} = (1/2)(401/512) + (1/4)(208/256) + (1/8)(108/128) + (1/16)(56/64) = 773/1024 approx 0.75488. The exact probability of at least one run of 4 heads is P = 1 - P_{10} = 1 - 773/1024 = 251/1024 approx 0.24512 (24.51%). (b) Poisson approximation: Defining non-overlapping run completions, the expected count is lambda = (1/2)^4 + (10 - 4) * (1/2) * (1/2)^4 = 1/16 + 6/32 = 8/32 = 0.25. P(at least one run) approx 1 - exp(-0.25) = 1 - 0.77880 = 0.2212, which is reasonably close to the exact 0.2451. The exact formula of Example 7d with n=10,k=4,p=q=1/2 has only r=1,2 nonzero terms: r=1 contributes (C(6,1)/2+1)/16=1/4; r=2 contributes −[C(2,2)/4+C(2,1)/2]/256=−5/1024. Thus 1/4−5/1024=251/1024, agreeing with the recurrence.",
    "trap": "Remember P_n satisfies a order-4 recurrence; each term conditions on whether the first tail occurs on toss 1, 2, 3, or 4.",
    "tests": [
      "c.prob.4.7.1",
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 72, PDF p. 182."
  },
  {
    "id": "w.prob.4.ross.problem.73",
    "course": "prob",
    "sec": "4.7",
    "marks": 5,
    "title": "Coin orientation under a Poisson inspection process",
    "prompt": "At time t = 0, a coin that comes up heads with probability p lands on heads. At Poisson arrival times with rate lambda, the coin is picked up and flipped again (landing heads with probability p each time). What is the probability that the coin shows heads at time t?",
    "approach": "Condition on whether any flips have occurred by time t using the Poisson process count N(t).",
    "solution": "Let N(t) be the number of flips that take place in the time interval (0, t]. Then N(t) follows a Poisson distribution with parameter lambda * t. We condition on whether N(t) = 0 or N(t) >= 1: (1) If N(t) = 0, no flips have taken place by time t. The coin remains in its initial state, which was heads. Thus P(shows heads | N(t) = 0) = 1. (2) If N(t) >= 1, the coin has been flipped at least once. The state of the coin at time t is determined entirely by the outcome of the most recent flip. Because each flip lands on heads with probability p independently of all flip times and past outcomes, P(shows heads | N(t) >= 1) = p. By the law of total probability: P(shows heads at time t) = 1 * P(N(t) = 0) + p * P(N(t) >= 1) = exp(-lambda t) + p * (1 - exp(-lambda t)) = p + (1 - p) exp(-lambda t). Note that as t -> 0, this equals 1 (its initial state), and as t -> infty, this relaxes to p (the stationary flip probability).",
    "trap": "The outcome at time t depends only on the LAST flip, not the total number of flips.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 73, PDF p. 182."
  },
  {
    "id": "w.prob.4.ross.problem.74",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Roulette dozen bet waiting times",
    "prompt": "A roulette wheel has 38 numbers (1 through 36, 0, and 00). A player bets on the first dozen (numbers 1 through 12). (a) What is the probability of losing the first 5 bets? (b) What is the probability that the first win occurs on the fourth bet?",
    "approach": "The win probability is p = 12/38 = 6/19. Use geometric trial properties.",
    "solution": "The probability of winning each independent bet is p = 12/38 = 6/19. The probability of losing is q = 1 - p = 26/38 = 13/19. (a) Probability of losing the first 5 bets: P(lose first 5) = q^5 = (13/19)^5 = 371,293 / 2,476,099 approx 0.14995 approx 0.1500 (15.00%). (b) The first win occurs on the fourth bet if the first 3 bets are losses and the fourth bet is a win: P(X = 4) = q^3 * p = (13/19)^3 * (6/19) = (2197 / 6859) * (6/19) = 13,182 / 130,321 approx 0.10115 approx 0.1012 (10.12%).",
    "trap": "The roulette wheel has 38 slots, not 36; do not omit 0 and 00.",
    "tests": [
      "c.prob.4.8.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 74, PDF p. 182."
  },
  {
    "id": "w.prob.4.ross.problem.75",
    "course": "prob",
    "sec": "4.8",
    "marks": 5,
    "title": "Length and winning probability in a best-of-seven tournament",
    "prompt": "Two teams play a series where the first team to win 4 games wins the match. Team A wins each game independently with probability 0.6. (a) Find the probability that Team A wins the series in exactly i games, for i = 4, 5, 6, 7. (b) Compare the probability that Team A wins the best-of-7 series with the probability that Team A wins a best-of-3 series.",
    "approach": "Use the negative binomial distribution where Team A secures its 4th win on game i, requiring 3 wins in the first i-1 games.",
    "solution": "(a) Team A wins in game i if it wins exactly 3 of the first i-1 games and wins game i: P(N = i) = C(i-1, 3) (0.6)^4 (0.4)^{i-4}. For i = 4: C(3, 3)(0.6)^4 = 1 * 0.1296 = 0.1296. For i = 5: C(4, 3)(0.6)^4 (0.4)^1 = 4 * 0.1296 * 0.4 = 0.20736. For i = 6: C(5, 3)(0.6)^4 (0.4)^2 = 10 * 0.1296 * 0.16 = 0.20736. For i = 7: C(6, 3)(0.6)^4 (0.4)^3 = 20 * 0.1296 * 0.064 = 0.165888. Total probability Team A wins best-of-7: P(wins best-of-7) = 0.1296 + 0.20736 + 0.20736 + 0.165888 = 0.710208 approx 0.7102 (71.02%). (b) In a best-of-3 series (first to 2 wins): P(wins in 2) = (0.6)^2 = 0.36; P(wins in 3) = C(2, 1)(0.6)^2(0.4) = 2 * 0.36 * 0.4 = 0.288. Total probability Team A wins best-of-3 = 0.36 + 0.288 = 0.6480 (64.80%). The longer series significantly increases the stronger teams winning probability (71.02% vs 64.80%).",
    "trap": "The last game must be won by Team A; do not use standard Bin(i, 4) which allows the 4th win to occur anywhere.",
    "tests": [
      "c.prob.4.8.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 75, PDF pp. 182–183."
  },
  {
    "id": "w.prob.4.ross.problem.76",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Expected length of an evenly matched best-of-seven series",
    "prompt": "Suppose two evenly matched athletic teams (each winning any game with probability 1/2) play a best-of-seven series (first to 4 wins). What is the expected number of games played?",
    "approach": "Find the probability distribution of series length N in {4, 5, 6, 7} by doubling the negative binomial probability for either team.",
    "solution": "By symmetry, the series terminates in i games when either team achieves its 4th win: P(N = i) = 2 * C(i-1, 3) (1/2)^i. For i = 4: P(N = 4) = 2 * C(3, 3) (1/2)^4 = 2 * (1/16) = 2/16 = 1/8 = 0.125. For i = 5: P(N = 5) = 2 * C(4, 3) (1/2)^5 = 2 * 4 * (1/32) = 8/32 = 1/4 = 0.250. For i = 6: P(N = 6) = 2 * C(5, 3) (1/2)^6 = 2 * 10 * (1/64) = 20/64 = 5/16 = 0.3125. For i = 7: P(N = 7) = 2 * C(6, 3) (1/2)^7 = 2 * 20 * (1/128) = 40/128 = 5/16 = 0.3125. Check: 2/16 + 4/16 + 5/16 + 5/16 = 16/16 = 1.0. Expected number of games: E[N] = 4*(2/16) + 5*(4/16) + 6*(5/16) + 7*(5/16) = (8 + 20 + 30 + 35) / 16 = 93 / 16 = 5.8125 games.",
    "trap": "Multiply by 2 because either team A or team B can win the series in i games.",
    "tests": [
      "c.prob.4.8.2",
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 76, PDF p. 183."
  },
  {
    "id": "w.prob.4.ross.problem.77",
    "course": "prob",
    "sec": "4.8",
    "marks": 5,
    "title": "Interview quota success probabilities and contact counts",
    "prompt": "An interviewer needs 5 completed interviews. Each contacted person agrees independently with probability 2/3. (a) What is the probability of securing 5 interviews from a list of 5 people? (b) From a list of 8 people? (c) Given a list of 8, what is the probability she speaks to exactly 6 people? (d) To exactly 7 people?",
    "approach": "Use binomial probabilities for obtaining at least 5 successes, and negative binomial probabilities for the quota being reached on the k-th person.",
    "solution": "(a) List of 5 people: She must have all 5 agree. P = (2/3)^5 = 32 / 243 approx 0.13169 approx 0.1317 (13.17%). (b) List of 8 people: She succeeds if at least 5 agree out of 8: P(X >= 5) = sum_{k=5}^8 C(8, k) (2/3)^k (1/3)^{8-k} = [C(8, 5) 2^5 + C(8, 6) 2^6 + C(8, 7) 2^7 + C(8, 8) 2^8] / 3^8 = [56 * 32 + 28 * 64 + 8 * 128 + 1 * 256] / 6561 = [1792 + 1792 + 1024 + 256] / 6561 = 4864 / 6561 approx 0.74135 approx 0.7414 (74.14%). (c) She speaks to exactly 6 people if the 5th agreement occurs on the 6th person: P(N = 6) = C(5, 4) (2/3)^4 (1/3)^1 * (2/3) = 5 * (16/81) * (1/3) * (2/3) = 160 / 729 approx 0.21948 approx 0.2195 (21.95%). (d) She speaks to exactly 7 people if the 5th agreement occurs on the 7th person: P(N = 7) = C(6, 4) (2/3)^4 (1/3)^2 * (2/3) = 15 * (16/81) * (1/9) * (2/3) = 480 / 2187 = 160 / 729 approx 0.21948 approx 0.2195 (21.95%).",
    "trap": "In parts (c) and (d), the interviewer stops as soon as the 5th agreement is obtained; this is negative binomial, not binomial.",
    "tests": [
      "c.prob.4.8.2",
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 77, PDF p. 183."
  },
  {
    "id": "w.prob.4.ross.problem.78",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Negative binomial distribution of tails before the tenth head",
    "prompt": "A fair coin is continually flipped until heads appears for the 10th time. Let X denote the total number of tails that occur before the 10th head. Compute the probability mass function of X.",
    "approach": "The 10th head occurs on flip 10 + k, preceded by exactly 9 heads and k tails.",
    "solution": "Let X be the number of tails observed before the 10th head. The total number of flips is 10 + X. For X = k (where k = 0, 1, 2, ...), the (10 + k)-th flip must be a head, and among the first 9 + k flips there must be exactly 9 heads and k tails. The number of such flip sequences is C(9 + k, 9) = C(9 + k, k). Since each flip sequence of length 10 + k has probability (1/2)^{10 + k}: P(X = k) = C(9 + k, 9) (1/2)^{10 + k} = C(9 + k, k) (1/2)^{10 + k}, for k = 0, 1, 2, ... This is the negative binomial distribution with parameters r = 10 and p = 1/2 counting failures before r successes.",
    "trap": "Notice the support of X is k >= 0 (tails only); the total trial count is 10 + k.",
    "tests": [
      "c.prob.4.8.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 78, PDF p. 183."
  },
  {
    "id": "w.prob.4.ross.problem.79",
    "course": "prob",
    "sec": "4.8",
    "marks": 5,
    "title": "Banach matchbox problem with unequal initial capacities",
    "prompt": "Solve the Banach matchbox problem when the left-hand matchbox initially contains N_1 matches and the right-hand matchbox contains N_2 matches. Each box is chosen independently with probability 1/2. Find the probability that when an empty box is first discovered, the other box contains exactly k matches.",
    "approach": "An empty box is discovered when chosen for the (capacity + 1)-th time. Sum the probabilities for the left box being found empty and the right box being found empty.",
    "solution": "Case 1: The left box is discovered empty with k matches remaining in the right box (0 <= k <= N_2). This means the left box was chosen N_1 + 1 times, and the right box was chosen N_2 - k times. The total choices were (N_1 + 1) + (N_2 - k) = N_1 + N_2 + 1 - k, and the very last choice was the left box. The number of such sequences is C(N_1 + N_2 - k, N_1). Probability = C(N_1 + N_2 - k, N_1) (1/2)^{N_1 + N_2 + 1 - k}. Case 2: The right box is discovered empty with k matches remaining in the left box (0 <= k <= N_1). By symmetry, the right box was chosen N_2 + 1 times and left box N_1 - k times: Probability = C(N_1 + N_2 - k, N_2) (1/2)^{N_1 + N_2 + 1 - k}. If one asks for the probability that the other box has k matches without specifying which box was emptied, sum Case 1 (if k <= N_2) and Case 2 (if k <= N_1).",
    "trap": "The box is discovered empty on the (N + 1)-th reach into that box, not the N-th reach.",
    "tests": [
      "c.prob.4.8.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 79, PDF p. 183."
  },
  {
    "id": "w.prob.4.ross.problem.80",
    "course": "prob",
    "sec": "4.8",
    "marks": 5,
    "title": "Banach matchbox problem at the moment of exhaustion",
    "prompt": "In the Banach matchbox problem with N matches initially in each box, find the probability that at the exact moment when the first box is completely emptied (as opposed to when it is discovered empty), the other box contains exactly k matches.",
    "approach": "The first box is emptied on its N-th draw. The total draws are 2N - k, with the (2N - k)-th draw taking the last match of the emptied box.",
    "solution": "Suppose the left box is emptied first with k matches remaining in the right box (where 1 <= k <= N). This occurs when exactly N draws have been made from the left box, and N - k draws have been made from the right box. The total number of draws made is N + (N - k) = 2N - k. The very last draw (the (2N - k)-th draw) must come from the left box to empty it. Among the first 2N - k - 1 draws, exactly N - 1 came from the left box and N - k came from the right box. The probability of this sequence is C(2N - k - 1, N - 1) (1/2)^{2N - k}. By symmetry, the right box could be the one emptied first with equal probability. Therefore, the probability that either box is emptied leaving exactly k matches in the other is: P = 2 * C(2N - k - 1, N - 1) (1/2)^{2N - k} = C(2N - k - 1, N - 1) (1/2)^{2N - k - 1} for k = 1, ..., N. The valid support is 1≤k≤N. At the instant the first box becomes empty, the other still has at least one match; k=0 would require it already to have emptied earlier. Thus P(k=0)=0.",
    "trap": "Contrast with the standard Banach problem: here N draws are made from the empty box (emptying it), rather than N + 1 draws (discovering it empty).",
    "tests": [
      "c.prob.4.8.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 80, PDF p. 183."
  },
  {
    "id": "w.prob.4.ross.problem.81",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Sampling balls with replacement until balanced colors are drawn",
    "prompt": "An urn contains 4 white and 4 black balls. We randomly draw 4 balls without replacement. If exactly 2 are white and 2 are black, we stop. Otherwise, all balls are returned to the urn and the process is repeated. What is the probability that exactly n selections are required?",
    "approach": "Compute the probability of stopping on any single 4-ball draw using the hypergeometric formula, then apply the geometric distribution.",
    "solution": "On each draw of 4 balls from 8 balls without replacement, the probability p of drawing exactly 2 white and 2 black is: p = [C(4, 2) * C(4, 2)] / C(8, 4) = [6 * 6] / 70 = 36 / 70 = 18 / 35. The probability of not stopping is q = 1 - p = 17 / 35. Since the balls are replaced after an unsuccessful draw, successive selections are independent Bernoulli trials with success probability p = 18/35. The number of selections N required until the first balanced draw follows a Geometric distribution: P(N = n) = (1 - p)^{n-1} p = (17/35)^{n-1} * (18/35), for n = 1, 2, 3, ...",
    "trap": "Within each selection, balls are sampled without replacement (hypergeometric p = 18/35); across selections, the trial is repeated with replacement (geometric waiting time).",
    "tests": [
      "c.prob.4.8.1",
      "c.prob.4.8.3"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 81, PDF p. 183."
  },
  {
    "id": "w.prob.4.ross.problem.82",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Hypergeometric sampling of defective items from a batch",
    "prompt": "A batch of 100 items contains 6 defective and 94 nondefective items. A random sample of 10 items is drawn without replacement. Let X be the number of defective items in the sample. Find: (a) P(X = 0), and (b) P(X > 2).",
    "approach": "Use the hypergeometric formula P(X = k) = C(6, k) C(94, 10-k) / C(100, 10).",
    "solution": "The sample is drawn without replacement from N = 100 items (m = 6 defective, N-m = 94 nondefective), so X follows Hypergeometric(N = 100, m = 6, n = 10). (a) P(X = 0) = C(6, 0) * C(94, 10) / C(100, 10) = C(94, 10) / C(100, 10) = (94 * 93 * ... * 85) / (100 * 99 * ... * 91) approx 0.5126 (51.26%). (b) P(X > 2) = 1 - P(X = 0) - P(X = 1) - P(X = 2). Compute P(X = 1): C(6, 1) C(94, 9) / C(100, 10) = 6 * [C(94, 9) / C(100, 10)] approx 0.3684. Compute P(X = 2): C(6, 2) C(94, 8) / C(100, 10) = 15 * [C(94, 8) / C(100, 10)] approx 0.1017. Thus P(X > 2) = 1 - (0.5126 + 0.3684 + 0.1017) = 1 - 0.9827 = 0.0173 (1.73%).",
    "trap": "Sampling is without replacement, so use hypergeometric combinations rather than binomial powers.",
    "tests": [
      "c.prob.4.8.3"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 82, PDF p. 183."
  },
  {
    "id": "w.prob.4.ross.problem.83",
    "course": "prob",
    "sec": "4.8",
    "marks": 5,
    "title": "Casino Keno probabilities and expected payoff",
    "prompt": "In casino Keno, 20 numbers are chosen randomly from 1 through 80. A player selects n numbers. (a) For a 2-number selection paying 12 dollars won per 1 dollar bet when both match, what would be the fair payoff? (b) Write the formula for P_{n, k}, the probability that exactly k of n numbers match. (c) For a 10-number bet with casino payoffs (-1 dollar for 0-4 matches, 1 dollar for 5, 17 dollars for 6, 179 dollars for 7, 1299 dollars for 8, 2599 dollars for 9, 24999 dollars for 10), compute the expected payoff.",
    "approach": "Use hypergeometric probabilities C(20, k) C(60, n-k) / C(80, n) and compute the expected net return sum (payoff * probability).",
    "solution": "(a) Both chosen numbers hit with probability C(20,2)/C(80,2)=19/316. If the net win payoff is a dollars and losing costs one dollar, fairness requires a(19/316)−297/316=0, so a=297/19≈15.63158. (b) P_{n,k}=C(20,k)C(60,n−k)/C(80,n). (c) Set a_k=−1 for k≤4 and a_5=1,a_6=17,a_7=179,a_8=1299,a_9=2599,a_10=24999. The exact expected net payoff is ∑_{k=0}^{10}a_k C(20,k)C(60,10−k)/C(80,10)≈−.2057456183 dollars per one-dollar bet. Thus the expected loss is about 20.6 cents, using the table’s net-payoff convention.",
    "trap": "Remember the -1 dollar applies to all match counts 0 through 4 collectively, which encompass over 95% of all games.",
    "tests": [
      "c.prob.4.8.3",
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 83, PDF pp. 183–184."
  },
  {
    "id": "w.prob.4.ross.problem.84",
    "course": "prob",
    "sec": "4.8",
    "marks": 5,
    "title": "Rejection rates and posterior defect count in acceptance sampling",
    "prompt": "In the lot acceptance sampling of Example 8i (lots of 10 items, 3 sampled without replacement, accepted only if all 3 are nondefective): (a) What percentage of lots with i defectives does the purchaser reject, for i = 1 and i = 4? (b) If 30% of incoming lots have 4 defectives and 70% have 1 defective, and a lot is rejected, what is the conditional probability that it contained 4 defectives?",
    "approach": "Evaluate hypergeometric acceptance probabilities C(10-i, 3)/C(10, 3) for each lot quality, and apply Bayes formula for the posterior.",
    "solution": "(a) A lot is accepted if all 3 sampled components are nondefective: For i = 1 defective: P(accept | 1 def) = C(9, 3) / C(10, 3) = 84 / 120 = 7/10 = 0.70. Rejection percentage = 1 - 0.70 = 0.30 (30%). For i = 4 defectives: P(accept | 4 def) = C(6, 3) / C(10, 3) = 20 / 120 = 1/6 approx 0.1667. Rejection percentage = 1 - 1/6 = 5/6 approx 0.8333 (83.33%). (b) Overall probability that a lot is rejected: P(reject) = 0.30 * P(reject | 4 def) + 0.70 * P(reject | 1 def) = 0.30 * (5/6) + 0.70 * (0.30) = 0.25 + 0.21 = 0.46. By Bayes formula: P(4 defectives | rejected) = [0.30 * (5/6)] / 0.46 = 0.25 / 0.46 = 25 / 46 approx 0.5435 (about 54.35%).",
    "trap": "Rejection probability is 1 minus acceptance probability; a lot with 4 defectives is rejected with probability 5/6, not 1/6.",
    "tests": [
      "c.prob.4.8.3",
      "c.prob.4.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 84, PDF p. 184."
  },
  {
    "id": "w.prob.4.ross.problem.85",
    "course": "prob",
    "sec": "4.6",
    "marks": 4,
    "title": "Transistor lot rejection rate under independent component defects",
    "prompt": "A purchaser of transistors buys them in lots of 20. He randomly inspects 4 components from each lot and accepts the lot only if all 4 are nondefective. If each component in a lot is independently defective with probability 0.1, what proportion of lots is rejected?",
    "approach": "Determine the probability that each inspected component is nondefective and compute the complement of the acceptance probability.",
    "solution": "Since each transistor in the lot is defective with probability 0.1 independently of all others, any randomly chosen component is nondefective with probability 1 - 0.1 = 0.9, independently of the other chosen components. For a sample of 4 components, the probability that all 4 are nondefective is: P(accept lot) = (0.9)^4 = 0.6561. Therefore, the proportion of lots that are rejected is: P(reject lot) = 1 - P(accept lot) = 1 - 0.6561 = 0.3439 (34.39%).",
    "trap": "Even though sampling from the lot is without replacement, the components are independently defective from production; hence inspected items behave as independent Bernoulli trials.",
    "tests": [
      "c.prob.4.6.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 85, PDF p. 184."
  },
  {
    "id": "w.prob.4.ross.problem.86",
    "course": "prob",
    "sec": "4.9",
    "marks": 4,
    "title": "Expected total accidents across three county highways",
    "prompt": "There are 3 highways in a county. The daily numbers of accidents on these highways are Poisson random variables with parameters 0.3, 0.5, and 0.7 respectively. Find the expected total number of accidents that will occur on these highways today.",
    "approach": "Apply linearity of expectation to the sum of the three accident counts.",
    "solution": "Let X_1, X_2, and X_3 denote the number of daily accidents on highways 1, 2, and 3. We are given E[X_1] = 0.3, E[X_2] = 0.5, and E[X_3] = 0.7. The total number of accidents on all three highways is X = X_1 + X_2 + X_3. By linearity of expectation (which holds regardless of whether accidents on different highways are independent): E[X] = E[X_1 + X_2 + X_3] = E[X_1] + E[X_2] + E[X_3] = 0.3 + 0.5 + 0.7 = 1.5 accidents.",
    "trap": "Linearity of expectation holds unconditionally; you do not need to assume independence among the highways.",
    "tests": [
      "c.prob.4.9.1",
      "c.prob.4.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 86, PDF p. 184."
  },
  {
    "id": "w.prob.4.ross.problem.87",
    "course": "prob",
    "sec": "4.9",
    "marks": 5,
    "title": "Expected occupancy counts when placing balls into boxes",
    "prompt": "Suppose 10 balls are placed into 5 boxes, each ball independently placed into box i with probability p_i (sum_{i=1}^5 p_i = 1). (a) Find the expected number of empty boxes. (b) Find the expected number of boxes that contain exactly 1 ball.",
    "approach": "Define indicator random variables for each box being empty, and for each box having exactly 1 ball, then apply linearity of expectation.",
    "solution": "(a) For each box i (i = 1, ..., 5), let I_i = 1 if box i is empty (contains 0 balls), and 0 otherwise. Box i is empty if all 10 balls are placed in boxes other than i. By independence, P(I_i = 1) = (1 - p_i)^{10}. The total number of empty boxes is X = sum_{i=1}^5 I_i. By linearity of expectation: E[X] = sum_{i=1}^5 E[I_i] = sum_{i=1}^5 (1 - p_i)^{10}. (b) For each box i, let J_i = 1 if box i contains exactly 1 ball, and 0 otherwise. The number of balls in box i follows Bin(10, p_i), so P(J_i = 1) = C(10, 1) p_i (1 - p_i)^9 = 10 p_i (1 - p_i)^9. The total number of boxes containing exactly 1 ball is Y = sum_{i=1}^5 J_i. By linearity of expectation: E[Y] = sum_{i=1}^5 E[J_i] = sum_{i=1}^5 10 p_i (1 - p_i)^9.",
    "trap": "Indicator variables I_i are dependent (all 5 boxes cannot be simultaneously empty), but linearity of expectation requires no independence.",
    "tests": [
      "c.prob.4.9.1",
      "c.prob.4.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 87, PDF p. 184."
  },
  {
    "id": "w.prob.4.ross.problem.88",
    "course": "prob",
    "sec": "4.9",
    "marks": 4,
    "title": "Expected distinct coupon types in a collected sample",
    "prompt": "There are k types of coupons. Each new coupon collected is of type i with probability p_i (sum_{i=1}^k p_i = 1), independently of previously collected coupons. If n coupons are collected, find the expected number of distinct coupon types represented in the collection.",
    "approach": "Use indicator variables for whether type i appears at least once in the sample.",
    "solution": "For each coupon type i in {1, ..., k}, let I_i = 1 if type i appears at least once among the n collected coupons, and 0 otherwise. Type i fails to appear if all n collected coupons are of other types, which occurs with probability (1 - p_i)^n. Thus P(I_i = 1) = 1 - P(type i absent) = 1 - (1 - p_i)^n. The total number of distinct types collected is X = sum_{i=1}^k I_i. By linearity of expectation: E[X] = sum_{i=1}^k E[I_i] = sum_{i=1}^k [1 - (1 - p_i)^n] = k - sum_{i=1}^k (1 - p_i)^n. When all coupon types are equally likely (p_i = 1/k), this simplifies to k [1 - (1 - 1/k)^n].",
    "trap": "Linearity of expectation allows sum of indicator probabilities despite the strong dependence among coupon type counts.",
    "tests": [
      "c.prob.4.9.1",
      "c.prob.4.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 88, PDF p. 184."
  },
  {
    "id": "w.prob.4.ross.problem.89",
    "course": "prob",
    "sec": "4.9",
    "marks": 5,
    "title": "Random color selection and urn sampling without replacement",
    "prompt": "An urn contains 10 red, 8 black, and 7 green balls (total 25 balls). One of the 3 colors is chosen uniformly at random, and then 4 balls are drawn from the urn without replacement. Let X be the number of drawn balls matching the chosen color. (a) Find P(X = 0). (b) Let X_i = 1 if the i-th ball drawn matches the chosen color, and 0 otherwise. Find P(X_i = 1) for i = 1, 2, 3, 4. (c) Find E[X].",
    "approach": "Condition on the chosen color for (a). Use exchangeability and symmetry for (b), and sum indicator expectations for (c).",
    "solution": "(a) Let R, B, G denote the chosen color, each with prior probability 1/3. Total balls = 25. Draws = 4. Given R: balls are drawn from 15 non-red: P(X = 0 | R) = C(15, 4) / C(25, 4) = 1365 / 12650. Given B: balls are drawn from 17 non-black: P(X = 0 | B) = C(17, 4) / C(25, 4) = 2380 / 12650. Given G: balls are drawn from 18 non-green: P(X = 0 | G) = C(18, 4) / C(25, 4) = 3060 / 12650. By total probability: P(X = 0) = (1/3) * [1365 + 2380 + 3060] / 12650 = (1/3) * 6805 / 12650 = 6805 / 37950 = 1361 / 7590 approx 0.1793 (17.93%). (b) For any draw i in {1, 2, 3, 4}, the unconditional probability that the i-th ball is red is 10/25, black is 8/25, and green is 7/25. Conditioning on the chosen color: P(X_i = 1) = (1/3) * (10/25) + (1/3) * (8/25) + (1/3) * (7/25) = (1/3) * (25/25) = 1/3. This holds identically for all i = 1, 2, 3, 4. (c) Since X = X_1 + X_2 + X_3 + X_4: E[X] = sum_{i=1}^4 E[X_i] = sum_{i=1}^4 P(X_i = 1) = 4 * (1/3) = 4/3 approx 1.333.",
    "trap": "In part (b), by symmetry every draw position i has the same color probabilities; each ball drawn has probability exactly 1/3 of matching the randomly chosen color.",
    "tests": [
      "c.prob.4.9.1",
      "c.prob.4.8.3",
      "c.prob.4.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Problem 89, PDF p. 184."
  },
  {
    "id": "w.prob.4.ross.theor.2",
    "course": "prob",
    "sec": "4.3",
    "marks": 5,
    "title": "Tail-sum formula for expectation of integer random variables",
    "prompt": "X has CDF F. Find the CDF of e^X.",
    "approach": "Rewrite each integer k as a sum of 1s: k = sum_{n=1}^k 1, and interchange the order of summation.",
    "solution": "For y≤0 the probability is zero, since e^X is positive. For y>0, e^X≤y exactly when X≤ln y, so the CDF is F(ln y).",
    "trap": "The index starts at n=1, because P(X >= 0) is identically 1 and would add an extra 1 if included.",
    "tests": [
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Theoretical Exercise 2, PDF p. 187."
  },
  {
    "id": "w.prob.4.ross.theor.5",
    "course": "prob",
    "sec": "4.5",
    "marks": 4,
    "title": "Proof of the shift and scale properties of variance",
    "prompt": "For a nonnegative integer-valued N and numbers a_i≥0, prove ∑_{j≥1}(a_1+…+a_j)P(N=j)=∑_{i≥1}a_iP(N≥i). Deduce tail formulas for E[N] and E[N(N+1)].",
    "approach": "First find E[aX + b] by linearity, center the variable, and factor out the constant a.",
    "solution": "All terms are nonnegative, so reorder the sums: ∑_{j≥1}∑_{i=1}^ja_iP(N=j)=∑_{i≥1}a_i∑_{j≥i}P(N=j)=∑_{i≥1}a_iP(N≥i). With a_i=1 the left is E[N], giving E[N]=∑_{i≥1}P(N≥i). With a_i=2i, the inner sum is j(j+1), giving E[N(N+1)]=2∑_{i≥1}iP(N≥i). Infinite values are allowed.",
    "trap": "Do not add b to the variance; shifting every value by b shifts the mean by b, so all distances to the mean are preserved.",
    "tests": [
      "c.prob.4.5.1",
      "c.prob.4.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Theoretical Exercise 5, PDF p. 187."
  },
  {
    "id": "w.prob.4.ross.theor.13",
    "course": "prob",
    "sec": "4.6",
    "marks": 5,
    "title": "Mode and unimodality of the binomial distribution",
    "prompt": "There are n components in a row, independently working with probability p. Find the chance no two neighboring components both fail.",
    "approach": "Set up the adjacent probability ratio P(X = k) / P(X = k - 1) >= 1 and solve for k.",
    "solution": "If exactly j components fail with no adjacent failures, their positions can be chosen in C(n−j+1,j) ways: place j failures in the n−j+1 gaps around the working components. Each such pattern has probability (1−p)^j p^{n−j}. Sum j=0,…,⌊(n+1)/2⌋ to get ∑_j C(n−j+1,j)(1−p)^j p^{n−j}. This handles p=0,1 with the usual zero-exponent convention.",
    "trap": "The threshold is (n + 1)p, not np; the extra +1 comes from the ratio of binomial coefficients.",
    "tests": [
      "c.prob.4.6.1",
      "c.prob.4.6.3"
    ],
    "provenance": "Ross, 10e, Chapter 4, Theoretical Exercise 13, PDF p. 188."
  },
  {
    "id": "w.prob.4.ross.theor.19",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Memoryless property of the geometric distribution",
    "prompt": "For X~Poisson(λ), find λ≥0 maximizing P(X=k), for a fixed integer k≥0.",
    "approach": "Calculate P(X > k) as (1-p)^k, then apply conditional probability definition.",
    "solution": "For k≥1, ignore the constant k! and differentiate the log −λ+k ln λ. Its derivative is −1+k/λ and its second derivative is −k/λ²<0, so the unique maximum occurs at λ=k. For k=0 the probability e^{−λ} decreases with λ, and is maximized at λ=0.",
    "trap": "The memoryless property is unique to geometric distributions among discrete laws and exponential distributions among continuous laws.",
    "tests": [
      "c.prob.4.8.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Theoretical Exercise 19, PDF p. 189."
  },
  {
    "id": "w.prob.4.ross.selftest.2",
    "course": "prob",
    "sec": "4.3",
    "marks": 4,
    "title": "Expected prize in a state raffle",
    "prompt": "X takes values 0,1,2 with P(X=i)=cP(X=i−1), i=1,2, for a constant c≥0. Find E[X].",
    "approach": "Compute the expected gross payout from the ticket and subtract the 5-dollar ticket purchase price.",
    "solution": "Writing P(X=0)=a gives masses a,ca,c²a. They sum to 1, so a=1/(1+c+c²). Hence E[X]=(c+2c²)/(1+c+c²). This includes c=0, where X=0 with certainty.",
    "trap": "Remember to subtract ticket cost to get the net return.",
    "tests": [
      "c.prob.4.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Self-Test Problem 2, PDF p. 190."
  },
  {
    "id": "w.prob.4.ross.selftest.14",
    "course": "prob",
    "sec": "4.7",
    "marks": 4,
    "title": "Poisson model for hurricane occurrences",
    "prompt": "Assume the annual hurricane count is Poisson with mean 5.2. Find the chance of three or fewer hurricanes.",
    "approach": "Let X ~ Poisson(lambda = 5.2). Sum Poisson probabilities for k = 0, 1, 2.",
    "solution": "P(X≤3)=e^{−5.2}[1+5.2+5.2²/2!+5.2³/3!]≈.2380655. A mean alone does not imply Poisson, so the distribution assumption is part of the model.",
    "trap": "Remember to divide the k=2 term by 2! = 2.",
    "tests": [
      "c.prob.4.7.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Self-Test Problem 14, PDF p. 191."
  },
  {
    "id": "w.prob.4.ross.selftest.19",
    "course": "prob",
    "sec": "4.8",
    "marks": 4,
    "title": "Odd person pays: rounds until resolution",
    "prompt": "Three friends flip coins simultaneously to decide who buys coffee. If all three flip the same face (three heads or three tails), there is no odd person and they flip again. They continue until one person has an outcome different from the other two. What is the probability that: (a) exactly 3 rounds of flips are required? (b) more than 4 rounds are required?",
    "approach": "In each round, 8 outcomes exist. HHH and TTT tie (prob 2/8 = 1/4), so an odd person is found with probability p = 3/4. The number of rounds N is geometric with p = 3/4.",
    "solution": "Each round of 3 flips has 2^3 = 8 outcomes. Outcomes where everyone matches are HHH and TTT (2 outcomes). The remaining 6 outcomes have an odd person. Thus each round independently terminates with success probability p = 6/8 = 3/4, and continues with tie probability q = 1/4. The number of rounds N is geometric with parameter p = 3/4. (a) P(N = 3) = q^2 * p = (1/4)^2 * (3/4) = 3/64 approx 0.0469. (b) P(N > 4) = q^4 = (1/4)^4 = 1/256 approx 0.0039.",
    "trap": "Notice p = 3/4 (resolution) and q = 1/4 (tie), not 1/2.",
    "tests": [
      "c.prob.4.8.1"
    ],
    "provenance": "Ross, 10e, Chapter 4, Self-Test Problem 19, PDF pp. 191–192."
  },
  {
    "id": "w.prob.4.ross.selftest.25",
    "course": "prob",
    "sec": "4.9",
    "marks": 5,
    "title": "Expected value and variance of random card matches",
    "prompt": "An ordered deck of n cards labeled 1 to n is thoroughly shuffled. A match occurs at position i if card i is in position i. Let X be the total number of matches. Prove that E[X] = 1 and Var(X) = 1 for any n >= 2.",
    "approach": "Define indicators I_i for each card matching its position. Compute E[I_i] and E[I_i I_j] for i != j, then apply the indicator sum variance formula.",
    "solution": "Let I_i = 1 if card i is in position i, 0 otherwise. P(I_i = 1) = 1/n, so E[I_i] = 1/n and Var(I_i) = (1/n)(1 - 1/n) = (n-1)/n^2. For i != j, P(I_i = 1, I_j = 1) = 1/(n(n-1)), so Cov(I_i, I_j) = E[I_i I_j] - E[I_i]E[I_j] = 1/(n(n-1)) - 1/n^2 = 1/(n^2(n-1)). Now X = sum_{i=1}^n I_i. E[X] = sum E[I_i] = n * (1/n) = 1. For variance: Var(X) = sum_{i=1}^n Var(I_i) + sum_{i != j} Cov(I_i, I_j) = n * [(n-1)/n^2] + n(n-1) * [1/(n^2(n-1))] = (n-1)/n + 1/n = n/n = 1. Both the mean and variance of the number of matches equal 1 for any deck size n >= 2.",
    "trap": "Pairs of cards matching are positively correlated (Cov > 0); omitting the covariance would yield Var = (n-1)/n < 1.",
    "tests": [
      "c.prob.4.9.1",
      "c.prob.4.9.2"
    ],
    "provenance": "Ross, 10e, Chapter 4, Self-Test Problem 25, PDF p. 192."
  },
  {
    "id": "w.prob.4.ross.theoretical.1",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Coupon collection time",
    "prompt": "Independent coupons have N type probabilities p_i. Find the probability all types first appear on draw n.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Let A_m be the probability all types have appeared after m draws. Inclusion–exclusion gives A_m=∑_{S⊆{1,…,N}}(−1)^{|S|}(1−∑_{i∈S}p_i)^m. Thus P(T=n)=A_n−A_{n−1} for n≥1, with A_0=0 when N≥1. Equivalently sum over the type of the final draw: ∑_i p_i∑_{S⊆{1,…,N}∖{i}}(−1)^{|S|}(1−p_i−∑_{j∈S}p_j)^{n−1}. For a zero exponent take 0^0=1 in these counting expressions. If any required type has zero chance, completion is impossible.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 1; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.3",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "CDF under an affine change",
    "prompt": "X has distribution function F. Find the distribution function of αX+β for α≠0.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "For α>0, P(αX+β≤y)=F((y−β)/α). For α<0 the inequality reverses, giving P(X≥(y−β)/α)=1−F(((y−β)/α)−), where F(t−)=P(X<t) is the left limit. Writing 1−F(t) would wrongly exclude an atom at t.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 3; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.4",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Yule–Simon mass and moments",
    "prompt": "For n≥1 let P(X=n)=4/[n(n+1)(n+2)]. (a) Check the total is 1; (b) show E[X]=2; (c) show E[X²]=∞.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) Rewrite the mass as 2/[n(n+1)]−2/[(n+1)(n+2)]. The sum through m telescopes to 1−2/[(m+1)(m+2)], tending to 1. (b) E[X]=4∑_{n≥1}1/[(n+1)(n+2)]=4·(1/2)=2. (c) E[X²]=4∑ n/[(n+1)(n+2)]. For n≥1, n/[(n+1)(n+2)]≥1/(6n), so comparison with the divergent harmonic series proves infinity.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 4; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.6",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "A two-point exponential expectation",
    "prompt": "P(X=1)=p and P(X=−1)=1−p. Find a positive c≠1 such that E[c^X]=1.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "The equation is pc+(1−p)/c=1, or pc²−c+1−p=0. It factors as (c−1)(pc−(1−p))=0. Thus c=(1−p)/p for 0<p<1, p≠1/2. At p=1/2 the only positive solution is 1, and at p=0 or 1 no positive solution other than 1 exists.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 6; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.7",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Standardize a variable",
    "prompt": "X has mean μ and variance σ²>0. Find the mean and variance of Y=(X−μ)/σ.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Linearity gives E[Y]=(E[X]−μ)/σ=0. Subtracting a constant does not change variance, and dividing by σ divides variance by σ², so Var(Y)=σ²/σ²=1. The assumption σ>0 is needed to define Y.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 7; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.8",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Variance of two possible values",
    "prompt": "X=a with probability p and b with probability 1−p. Find its variance.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Write X=b+(a−b)I where I is 1 with probability p and 0 otherwise. Then Var(X)=(a−b)²Var(I)=p(1−p)(a−b)². Alternatively subtract [pa+(1−p)b]² from pa²+(1−p)b².",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 8; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.9",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Binomial theorem from probabilities",
    "prompt": "Derive (x+y)^n=∑_{i=0}^n C(n,i)x^i y^{n−i} for nonnegative x,y from the binomial mass formula.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "If x+y>0 set p=x/(x+y) and q=y/(x+y). Binomial probabilities add to 1: ∑C(n,i)p^i q^{n−i}=1. Multiplying by (x+y)^n gives the theorem. If x=y=0 and n>0 both sides vanish; at n=0 both sides equal 1 using the usual zero-exponent convention.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 9; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.10",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Reciprocal binomial count",
    "prompt": "For X~Binomial(n,p), prove E[1/(X+1)]=[1−(1−p)^{n+1}]/[(n+1)p].",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "For p>0 use C(n,i)/(i+1)=C(n+1,i+1)/(n+1). The expectation becomes 1/[(n+1)p] times ∑_{j=1}^{n+1}C(n+1,j)p^j(1−p)^{n+1−j}. The sum is 1−(1−p)^{n+1}. At p=0, X=0 and the expectation is 1, also the formula’s continuous limit.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 10; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.11",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "A middle binomial mass decreases",
    "prompt": "In 2n Bernoulli(p) trials show the probability of exactly n successes decreases as n grows.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "a_n=C(2n,n)[p(1−p)]^n. For 0<p<1, a_{n+1}/a_n=[(2n+2)(2n+1)/(n+1)²]p(1−p)=[4−2/(n+1)]p(1−p)<1 because p(1−p)≤1/4. At p=0 or 1, a_n=0 for n≥1, so it is nonincreasing rather than strictly decreasing.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 11; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.12",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Arrangements given a success count",
    "prompt": "Given exactly k successes in n independent Bernoulli(p) trials, prove all arrangements are equally likely.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Each of the C(n,k) arrangements has original chance p^k(1−p)^{n−k}. Their union has C(n,k) times that chance. Dividing gives 1/C(n,k) for each arrangement whenever the conditioning event has positive probability.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 12; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.14",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Maximum-likelihood success probability",
    "prompt": "For X~Binomial(n,p), which p maximizes P(X=k)?",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "For 0<k<n, log of the variable factor is k ln p+(n−k)ln(1−p). Its derivative k/p−(n−k)/(1−p) vanishes at p=k/n; the second derivative is negative, so this is the maximum. For k=0 the mass (1−p)^n is largest at p=0; for k=n it is largest at p=1. If n=0, the sole outcome is 0 and all p give probability 1.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 14; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.15",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Boys in a family-size mixture",
    "prompt": "For n≥1 a family has n children with chance αp^n, where 0<p<1 and 0≤α≤(1−p)/p. Each child is independently a boy or girl with probability 1/2. Find (a) the no-child fraction, (b) the fraction with exactly k boys.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) Sum positive-size chances: α∑_{n≥1}p^n=αp/(1−p). Hence no-child chance is 1−αp/(1−p). (b) For k≥1, sum α∑_{n≥k}C(n,k)(p/2)^n=α(p/2)^k/(1−p/2)^{k+1}=2αp^k/(2−p)^{k+1}. This uses ∑_{n≥k}C(n,k)z^n=z^k/(1−z)^{k+1}, obtained by differentiating the geometric series k times. For k=0 include no-child families: 1−αp/(1−p)+αp/(2−p).",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 15; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.16",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Even binomial outcomes",
    "prompt": "Prove the even-term binomial identity and use it to find the chance of an even number of heads in n tosses.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Expand (p+q)^n and (q−p)^n. Odd powers of p cancel on addition, and each even-power term appears twice. Thus ∑_{i=0}^{⌊n/2⌋}C(n,2i)p^{2i}q^{n−2i}=[(p+q)^n+(q−p)^n]/2. With q=1−p, the left side is the even-head chance, giving [1+(1−2p)^n]/2.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 16; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.17",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Poisson modes",
    "prompt": "Show where P(X=i) is largest for a Poisson(λ) variable.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "For λ>0, the ratio of masses at i and i−1 is λ/i. The masses increase for i<λ, tie when i=λ is an integer, and decrease for i>λ. Thus a noninteger λ has unique mode ⌊λ⌋; a positive integer λ has two modes λ−1 and λ. At λ=0 all mass is at zero.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 17; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.18",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Even Poisson counts",
    "prompt": "Find P(Poisson(λ) is even) by (a) a binomial limit and (b) direct summation.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) Take Binomial(n,λ/n). Its even probability is [1+(1−2λ/n)^n]/2, tending to [1+e^{−2λ}]/2. (b) The even terms in e^λ and e^{−λ} give ∑_{j≥0}λ^{2j}/(2j)!=(e^λ+e^{−λ})/2. Multiplying by e^{−λ} gives the same answer.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 18; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.20",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "A Poisson moment recurrence",
    "prompt": "For Poisson(λ), prove E[X^n]=λE[(X+1)^{n−1}] for positive integer n and find E[X³].",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "In the sum ∑_{k≥1}k^n e^{−λ}λ^k/k!, cancel one factor k and set j=k−1. This gives λ∑_{j≥0}(j+1)^{n−1}e^{−λ}λ^j/j!. For n=3, E[X³]=λ(E[X²]+2E[X]+1). Since E[X]=λ and E[X²]=λ²+λ, the result is λ³+3λ²+λ.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 20; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.21",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Repeat until a batch has heads",
    "prompt": "Toss n Bernoulli(p) coins in each independent batch, repeating until a nonzero head count. Which approximation for a final count of one is correct: (a) λe^{−λ}, (b) λe^{−λ}/(1−e^{−λ}), or (c) e^{−λ}, where λ=np?",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "The final batch has the Binomial(n,p) law conditioned to be positive. Exactly, P(X=1)=np(1−p)^{n−1}/[1−(1−p)^n]. For large n and small p with np=λ this approaches λe^{−λ}/(1−e^{−λ}), so (b) is correct. (a) includes unsuccessful zero-head batches; (c) incorrectly picks a special successful coin and changes the sampling model.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 21; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.22",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Birthday agreement events",
    "prompt": "E_ij means people i,j have the same independent uniform birthday among 365 days. Find (a) P(E_34|E_12), (b) P(E_13|E_12), (c) P(E_23|E_12∩E_13). Discuss independence.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) 1/365, since the two pairs use separate people. (b) 1/365: even knowing people 1 and 2 share a date leaves person 3’s uniform independent date. (c) 1, because people 2 and 3 then both share person 1’s date. The equality events are pairwise independent, but their triples need not be mutually independent.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 22; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.23",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Matching labels in withdrawn pairs",
    "prompt": "There are two balls of each of n labels. Remove random pairs. T is the first matching pair, or infinity. Let M_k be the matches in the first k pairs. (a) Approximate P(M_k=0), (b) express T>αn through M_k, (c) justify its limit for 0<α<1.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Each given pair of positions matches with probability 1/(2n−1), so the mean number among k pairs is k/(2n−1). A Poisson approximation gives (a) exp[−k/(2n−1)]. (b) T>αn means M_{⌊αn⌋}=0. (c) This gives limit e^{−α/2}. A justification beyond informal independence uses factorial moments: for fixed j, E[(M_k)_j]=(k)_j(n)_j2^j/(2n)_{2j}, tending to (α/2)^j when k=⌊αn⌋. Inclusion–exclusion’s upper/lower truncations for no matches converge to the corresponding partial sums of e^{−α/2}; letting the truncation grow proves the claimed limit. Here (x)_j=x(x−1)…(x−j+1).",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 23; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.24",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "No date with three birthdays",
    "prompt": "For n independent uniform birthdays, let E_i mean at least three fall on date i. (a) Find P(E_i), (b) approximate the chance no E_i occurs, (c) evaluate for n=88.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) With q=1/365, a=P(E_i)=1−[(1−q)^n+nq(1−q)^{n−1}+C(n,2)q²(1−q)^{n−2}]. (b) Approximate the number of dates with at least three birthdays by Poisson(365a), giving exp(−365a). The date counts are dependent, so this is an approximation. (c) For n=88, 365a≈.69227 and the approximation is about .50044.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 24; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.25",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Recurrence for a run",
    "prompt": "Let P_n be the chance of a run of k heads in n independent tosses with head probability p. (a) Identify new runs ending at n; (b) derive a recurrence.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "For n>k, either a run already appeared in the first n−1 tosses, or its first appearance ends at n. In the second case the first n−k−1 tosses have no run, toss n−k is a tail, and the final k are heads. These cases are separate. Thus P_n=P_{n−1}+(1−P_{n−k−1})(1−p)p^k, with P_j=0 for 0≤j<k and P_k=p^k. Independence justifies multiplying the prefix, tail, and final-head probabilities.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 25; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.26",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Thin a Poisson count",
    "prompt": "N~Poisson(λ). Count each of its events independently with probability p. Show the count is Poisson(λp). For λ=10,p=1/50 find chances of (a) one, (b) at least one, (c) at most one.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Given N=n, the counted events K are Binomial(n,p). Therefore P(K=k)=∑_{n≥k}e^{−λ}λ^n/n! C(n,k)p^k(1−p)^{n−k}=e^{−λp}(λp)^k/k!, after setting j=n−k and summing the exponential series. The mean rate is reduced by the counted fraction p. With λp=.2: (a) .2e^{−.2}≈.163746; (b) 1−e^{−.2}≈.181269; (c) 1.2e^{−.2}≈.982477.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 26; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.27",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Poisson sum as an integral",
    "prompt": "Prove ∑_{i=0}^n e^{−λ}λ^i/i! = (1/n!)∫_λ^∞e^{−x}x^n dx.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Let I_n be the integral divided by n!. Integration by parts gives I_n=e^{−λ}λ^n/n!+I_{n−1}; the boundary at infinity vanishes because an exponential dominates any fixed power. Since I_0=e^{−λ}, induction yields the stated finite sum.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 27; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.28",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Geometric memorylessness",
    "prompt": "For X the trial number of first success, prove P(X=n+k|X>n)=P(X=k), and explain it.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "With q=1−p, the numerator is P(X=n+k)=q^{n+k−1}p; the denominator is P(X>n)=q^n. Their ratio is q^{k−1}p=P(X=k), for k≥1 whenever the condition has positive probability. After n failures, independent future trials still have the original success probability, so waiting starts afresh.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 28; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.29",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Negative binomial tail equals a binomial event",
    "prompt": "X is the trial number of the r-th success and Y the successes in the first n trials, all with chance p. Show P(X>n)=P(Y<r).",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Use the same trial sequence for both variables. The r-th success occurs after n precisely when the first n trials contain fewer than r successes. These are the same event, so their probabilities agree. For n<r the probability is 1 on each side; for n≥r this also proves the equality of the negative-binomial tail sum and ∑_{i=0}^{r−1}C(n,i)p^i(1−p)^{n−i}.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 29; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.30",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Hypergeometric successive-mass ratio",
    "prompt": "Choose m balls without replacement from N, of which K are marked. Find P(X=k+1)/P(X=k).",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "The mass is C(K,k)C(N−K,m−k)/C(N,m). Dividing successive values and canceling factorials gives [(K−k)/(k+1)]·[(m−k)/(N−K−m+k+1)]. This applies when both k and k+1 lie in the support and the denominator mass is positive.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 30; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.31",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Maximum of a sample without replacement",
    "prompt": "Choose n≤N numbers from 1,…,N uniformly without replacement; Y is the largest. (a) Find its mass, (b) simplify its expectation.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) P(Y=y)=C(y−1,n−1)/C(N,n), n≤y≤N: choose y and n−1 smaller numbers. (b) E[Y]=∑_{y=n}^N y C(y−1,n−1)/C(N,n)=n∑_{y=n}^NC(y,n)/C(N,n). The hockey-stick identity makes the sum C(N+1,n+1). Thus E[Y]=n(N+1)/(n+1).",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 31; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.32",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Selected chips above every unselected chip",
    "prompt": "Choose n of m+n numbered chips uniformly, with m≥1. Let X count selected chips bigger than every unselected chip. Find its mass.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "X=x means the largest x chips are selected and chip m+n−x is unselected. Choose the remaining n−x selected chips from m+n−x−1 smaller chips. Hence P(X=x)=C(m+n−x−1,n−x)/C(m+n,n), x=0,…,n. This is the length of the final selected run when the ordered chips are marked selected/unselected.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 32; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.33",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "First repeated chip with replacement",
    "prompt": "Draw repeatedly from n chips, replacing each time. X is the draw number of the first repeat. Find its mass.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "The first k−1 draws must all differ, probability (n)_{k−1}/n^{k−1}; then draw k must be one of those k−1 labels, probability (k−1)/n. Thus P(X=k)=(n)_{k−1}(k−1)/n^k for k=2,…,n+1, and zero elsewhere.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 33; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.34",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "First repeated chip without replacement",
    "prompt": "Repeat the preceding experiment without replacing drawn chips. Find the first-repeat law.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "No chip can reappear: every drawn chip has been removed. There is no repeated draw before the urn becomes empty after n draws. If the first-repeat time is defined as infinity when no repeat occurs, P(X=∞)=1; no finite-value mass exists. An attempted (n+1)-st draw from an empty urn is not a repeat.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 34; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.35",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Size of a uniform nonempty subset",
    "prompt": "Pick uniformly one of the 2^n−1 nonempty subsets of an n-element set. Find the mean and variance of its size X and their large-n forms; compare with a uniform integer on 1,…,n.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "The size mass is C(n,k)/(2^n−1), k=1,…,n. The binomial identities ∑kC(n,k)=n2^{n−1} and ∑k²C(n,k)=n(n+1)2^{n−2} give E[X]=n2^{n−1}/(2^n−1) and Var(X)=n(n+1)2^{n−2}/(2^n−1)−n²2^{2n−2}/(2^n−1)² = [n2^{2n−2}−n(n+1)2^{n−2}]/(2^n−1)². Dividing by n/4 gives a ratio tending to 1. A uniform integer Y on 1,…,n instead has variance (n²−1)/12, growing quadratically rather than linearly.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 35; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.36",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "First blue in a reinforced urn",
    "prompt": "Start with one red and one blue; each drawn ball is replaced with one additional ball of its color. X is the first blue draw. (a) Find P(X>i), (b) prove eventual blue, (c) find E[X].",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) No blue in i draws means red each time, with probability (1/2)(2/3)…(i/(i+1))=1/(i+1). (b) This tail tends to zero, so blue eventually occurs with probability 1. (c) E[X]=∑_{i≥0}P(X>i)=∑_{i≥0}1/(i+1)=∞. Almost-sure finiteness does not imply a finite mean waiting time.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 36; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.theoretical.37",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Linearity for two discrete variables",
    "prompt": "Let X take x_i,Y take y_j, and their sum take z_k. (a) Find each sum mass; (b–c) regroup its expectation; (d) recover marginals; (e) prove E[X+Y]=E[X]+E[Y].",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) P(X+Y=z_k)=∑_{i,j:x_i+y_j=z_k}P(X=x_i,Y=y_j), since the pairs are separate possibilities. (b) Multiply each by z_k and sum k. (c) Each pair belongs to exactly one sum value, so E[X+Y]=∑_i∑_j(x_i+y_j)P(X=x_i,Y=y_j). (d) Summing over j gives P(X=x_i), and summing over i gives P(Y=y_j); the printed second marginal indices should be read in this way. (e) Distribute x_i+y_j and use these marginals to get ∑_ix_iP(X=x_i)+∑_jy_jP(Y=y_j). For signed variables, assume E|X| and E|Y| finite so these regroupings are valid; for nonnegative variables the identity also holds with infinite expectations.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, theoretical 37; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.1",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Baseball hit count",
    "prompt": "X counts hits in three at-bats. P(X=1)=.3,P(X=2)=.2,P(X=0)=3P(X=3). Find E[X].",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "The remaining mass is .5, split in a 3:1 ratio: P(X=0)=.375,P(X=3)=.125. Therefore E[X]=.3+2·.2+3·.125=1.075.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 1; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.3",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Stop at a second matching coin face",
    "prompt": "Flip a Bernoulli(p) coin until either heads or tails appears twice. Find the expected number of flips.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "At least two flips are needed. A third is needed exactly when the first two differ, with probability 2p(1−p). Therefore E[N]=2+2p(1−p).",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 3; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.4",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Family sampling by family or child",
    "prompt": "There are n_i families of size i, with m=∑n_i. X is size of a uniformly chosen family; Y is size of a uniformly chosen child’s family. Show E[Y]≥E[X].",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Write S_1=∑in_i,S_2=∑i²n_i. Then E[X]=S_1/m and E[Y]=S_2/S_1. The inequality mS_2≥S_1² is exactly nonnegative variance of the family size, or follows by expanding ∑_{i<j}n_i n_j(i−j)²≥0. Assuming at least one child, dividing gives the claimed comparison.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 4; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.5",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Bernoulli mean equals three variances",
    "prompt": "X has only values 0 and 1. If E[X]=3Var(X), find P(X=0).",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Let p=P(X=1). Then p=3p(1−p), or p[3p−2]=0. Thus p=0 or 2/3, and P(X=0)=1 or 1/3. The deterministic-zero solution is valid unless the question additionally requires a positive mean.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 5; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.6",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Value of knowing which coin",
    "prompt": "Choose equally between coins with head probabilities .6 and .3. You may bet 0 to 10 dollars on heads, winning or losing your bet. Information about which coin costs C dollars. Find the optimal expected payoff after buying and when buying pays.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "For the .6 coin, an x-dollar bet has expectation .2x, so choose x=10 and expect 2 dollars. For the .3 coin expectation is −.4x, so choose x=0. Before subtracting the price, the average optimum is (2+0)/2=1 dollar. Buying yields 1−C dollars. Without information the head chance is .45, so the best is bet zero and expect zero. Buying is strictly profitable for C<1, indifferent at C=1, and worse for C>1.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 6; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.7",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Red and blue amount strategy",
    "prompt": "A red paper has fixed positive x. A fair coin makes blue have 2x or x/2. (a) Why is viewing red then taking blue better than taking red? (b) View blue; accept it if at least y≥0, otherwise choose red. Find E[R_y(x)].",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) Given red x, blue has expected value (2x+x/2)/2=5x/4>x. (b) If y≤x/2, both blue values are accepted, giving 5x/4. If x/2<y≤2x, accept 2x but replace x/2 with x, giving 3x/2. If y>2x, always choose red, giving x. In particular y=0 gives 5x/4. No unspecified probability distribution for x is needed.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 7; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.8",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Complement a binomial count",
    "prompt": "Prove P(Binomial(n,p)≤i)=1−P(Binomial(n,1−p)≤n−i−1).",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "In the same n trials let X be successes and Y=n−X failures. Then Y~Binomial(n,1−p). Event X≤i is Y≥n−i, the complement of Y≤n−i−1 for integer i. Taking probabilities proves the formula.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 8; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.9",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Recover binomial parameters",
    "prompt": "A binomial X has mean 6 and variance 2.4. Find P(X=5).",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Mean np=6 and variance np(1−p)=2.4 imply 1−p=.4,p=.6,n=10. Thus P(X=5)=C(10,5)(.6)^5(.4)^5≈.20065812.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 9; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.10",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Maximum with replacement",
    "prompt": "Draw m times with replacement from balls numbered 1,…,n. X is the maximum. Find its mass.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "For k=1,…,n, P(X≤k)=(k/n)^m, since every draw must lie in the first k labels. Therefore P(X=k)=(k/n)^m−[(k−1)/n]^m. The source’s stated k=1,…,m is a support typo: possible labels range to n, the number of balls.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 10; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.11",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "First game and series victory",
    "prompt": "A wins each game independently with probability p; the first team to three wins takes the series. Find (a) P(A takes series|A wins first), (b) P(A wins first|A takes series).",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Let q=1−p. After a first-game win, A needs two wins before three losses: a=p²[1+2q+3q²], summing the possible one, two, or three failures before its last required win. Thus (a) a. From a fresh series A’s win chance is b=p³[1+3q+6q²]. Its first-win-and-series-win chance is pa. Hence (b) pa/b when b>0. At p=0 the conditioning events are impossible.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 11; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.12",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Upper and lower bracket wins",
    "prompt": "A team wins this weekend with chance .5. It then plays four independent games, each won with chance .4 if in the upper bracket after that win, or .7 after losing. Find the chance of at least three wins in the final four games.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "For four Binomial(4,u) games, the tail is 4u³(1−u)+u⁴. At u=.4 this is .1792; at u=.7 it is .6517. Average the two equally likely bracket routes: (.1792+.6517)/2=.41545.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 12; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.13",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Seven-judge majority",
    "prompt": "Seven independent judges are correct with chance .7. Find the majority-correct probability; given the vote was split four to three, find the chance the majority was correct.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Assume a binary decision so an incorrect judge votes for the opposite result. If X~Binomial(7,.7), the first answer is ∑_{j=4}^7C(7,j).7^j.3^{7−j}=.873964. A four-three split means X=4 or X=3. The conditional answer is P(X=4)/[P(X=4)+P(X=3)]=.7, because the equal binomial coefficients cancel and the two masses have ratio .7/.3.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 13; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.15",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Positive Poisson counts only",
    "prompt": "X~Poisson(λ), observed only when positive. For Y with the law of X given X>0, find E[Y].",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "For λ>0, E[Y]=∑_{i≥1}iP(X=i)/(1−e^{−λ})=λ/(1−e^{−λ}). The zero term contributes nothing to the original mean. At λ=0 the conditioning event has zero probability.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 15; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.16",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Mutual romantic choices",
    "prompt": "Each of n boys and n girls independently chooses one member of the other group uniformly. G_i means girl i is in a mutual-choice couple. Find (a) P(G_i), (b) P(G_i|G_j), (c) approximate no couples for large n, (d) approximate exactly k couples, (e) give exact no-couple inclusion–exclusion.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) Given her chosen boy, he chooses her with chance 1/n, so P(G_i)=1/n. (b) Given another mutual couple, girl i must choose one of n−1 different boys, chance (n−1)/n; that boy then chooses her with chance 1/n. Thus (n−1)/n² for i≠j and n≥2. (c–d) The total couples is approximately Poisson(1), so P_0≈e^{−1} and P_k≈e^{−1}/k!. (e) For a fixed j-girl set, there are (n)_j distinct possible boy assignments and probability n^{−2j} for each required set of mutual choices. Thus P_0=∑_{j=0}^n(−1)^j C(n,j)(n)_j/n^{2j}.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 16; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.17",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Married couples in random pairs",
    "prompt": "Randomly pair 2n people consisting of n married couples. W_i means wife i is paired with her husband. Find (a) P(W_i), (b) P(W_i|W_j), (c) approximate no married pairs for large n, (d) describe the version requiring every pair to be man–woman.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) Her partner is uniform among 2n−1 others, giving 1/(2n−1). (b) After fixing another couple, 2n−2 people remain and she has 2n−3 possible partners, giving 1/(2n−3), for i≠j,n≥2. (c) The number of married pairs is approximately Poisson with mean n/(2n−1)→1/2, giving no-pair chance about e^{−1/2}. (d) A random man–woman matching is a uniform permutation. Married pairs are fixed points, so this is the derangement/matching problem; exact no-married-pair probability is ∑_{j=0}^n(−1)^j/j!, tending to e^{−1}.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 17; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.18",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Roulette until four wins",
    "prompt": "Win a 5-dollar red bet with chance 18/38 independently. Stop after four wins. (a) Find the chance of exactly nine bets, (b) find expected winnings.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Let p=9/19,q=10/19. (a) The ninth bet must be the fourth win: C(8,3)p⁴q⁵. (b) The expected number of bets is 4/p=76/9 and losses are 4q/p=40/9. Net winnings are 5[4−40/9]=−20/9 dollars on average.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 18; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.20",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Reciprocal geometric time",
    "prompt": "For geometric(p) on 1,2,…, show E[1/X]=−p ln p/(1−p).",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Let q=1−p. E[1/X]=p∑_{k≥1}q^{k−1}/k=(p/q)∑_{k≥1}q^k/k. For 0<q<1 integrate ∑_{k≥1}t^{k−1}=1/(1−t) from 0 to q; nonnegative terms justify exchanging sum and integral. The sum is −ln(1−q)=−ln p. At p=1, X=1 and the expectation is 1, the continuous limit of the formula.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 20; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.21",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Turn two values into a Bernoulli variable",
    "prompt": "X=a with chance p,b with chance 1−p, with a≠b. (a) Show (X−b)/(a−b) is Bernoulli; (b) find Var(X).",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) The expression is 1 when X=a and 0 when X=b, so its probabilities are p and 1−p. (b) X=b+(a−b)I, giving variance p(1−p)(a−b)².",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 21; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.22",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Five games then continue on wins",
    "prompt": "Independent games are won with chance p<1. Play five, and if the fifth is won, continue until a loss. Find expected games and expected losses.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "The first five are certain. With probability p the fifth is won, and the extra wait to a loss has mean 1/(1−p). Hence E[N]=5+p/(1−p). The first five contain expected 5(1−p) losses. Extra play occurs with probability p and then contributes exactly one loss, so expected losses are 5(1−p)+p=5−4p. At p=1 the play never ends after game five.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 22; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.23",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Race between white and black removals",
    "prompt": "From N white and M black balls remove without replacement. Find the chance n white appear before m black, with n≤N,m≤M.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Look at the first L=n+m−1 removals. Exactly one threshold has been met by then. White wins precisely if at least n of those L are white. Thus the answer is ∑_{j=n}^{min(N,L)} C(N,j)C(M,L−j)/C(N+M,L), with impossible combinations interpreted as zero. This assumes positive thresholds n,m.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 23; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.24",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Balls allocated to five urns",
    "prompt": "Ten balls independently enter urn i with probability p_i. X_i is its count. (a) Identify X_i; (b) identify X_i+X_j; (c) find P(X_1+X_2+X_3=7).",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) Binomial(10,p_i). (b) Binomial(10,p_i+p_j), since each ball enters the union with that chance. (c) With a=p_1+p_2+p_3, the probability is C(10,7)a⁷(1−a)³. Counts of different urns are not independent because their total is fixed.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 24; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.26",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Even geometric waiting time",
    "prompt": "For geometric(p), find its even-value chance α (a) by summation, (b) by conditioning on the first trial.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Let q=1−p with p>0. (a) α=∑_{j≥1}pq^{2j−1}=pq/(1−q²)=q/(1+q)=(1−p)/(2−p). (b) A first success makes X=1, which is odd. A first failure shifts the remaining geometric wait by one, reversing parity, so α=q(1−α). Solving gives the same answer.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 26; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.27",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Six versus seven games",
    "prompt": "First team to four wins takes the series; game-win probability is p∈(0,1). (a) Prove P(N=6)≥P(N=7), equality only at p=1/2; (b) explain equality then; (c) for fair games find chance the first-game winner wins the series.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Let q=1−p. P(N=6)=C(5,3)(p⁴q²+q⁴p²)=10p²q²(p²+q²). P(N=7)=C(6,3)(p⁴q³+q⁴p³)=20p³q³. The difference is 10p²q²(p−q)²≥0, zero only at p=q. (b) At p=q, after five games a 3–2 score is needed for a sixth-game finish; its leader wins game six with probability 1/2, while the trailing team wins it with probability 1/2 and forces a seventh. (c) After the first win, that team needs three successes in the next six potential games. Its chance is ∑_{j=3}^6 C(6,j)/64=42/64=21/32.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 27; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.28",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Negative hypergeometric time",
    "prompt": "Draw without replacement from n white,m black until k white have appeared. (a) Compare with negative binomial; (b) find P(X=r).",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "(a) Without replacement the white probability changes after each draw and X is at most m+k. Negative-binomial trials instead have a constant success chance and are independent. (b) The first r−1 draws contain k−1 white and r−k black, then a white arrives. Thus P(X=r)=[C(n,k−1)C(m,r−k)/C(n+m,r−1)]·[(n−k+1)/(n+m−r+1)], for r=k,…,m+k.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 28; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.29",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "An unknown selected coin",
    "prompt": "Choose fairly among coins with head chances 1/3,1/2,3/4 and keep tossing that coin. Find (a) five heads in eight tosses, (b) first head on toss five.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Condition on the chosen coin. (a) (1/3)∑_{u∈{1/3,1/2,3/4}}C(8,5)u⁵(1−u)³. (b) (1/3)∑_{u∈{1/3,1/2,3/4}}(1−u)⁴u. Use one mixture after computing each whole event; replacing u with the average head probability would incorrectly make the tosses independent before the coin is known.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 29; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.30",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "Binomial complement",
    "prompt": "If X~Binomial(n,p), identify the law of n−X.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "In the same n independent trials, n−X counts failures. Each failure has probability 1−p, so n−X~Binomial(n,1−p).",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 30; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.31",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "A sample’s i-th smallest label",
    "prompt": "Choose n of 1,…,n+m uniformly. Find the mass of X, the i-th smallest chosen label.",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "For X=x the sample must contain x, exactly i−1 labels below x, and n−i above x. Thus P(X=x)=C(x−1,i−1)C(n+m−x,n−i)/C(n+m,n), for i≤x≤m+i, assuming 1≤i≤n.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 31; independently worded study adaptation."
  },
  {
    "id": "w.prob.4.ross.selftest.32",
    "course": "prob",
    "sec": "4.4",
    "marks": 5,
    "title": "One, either, or both color thresholds",
    "prompt": "Randomly remove n red,m blue balls. (a) X stops at r red; (b) V stops at either r red or s blue; (c) Z stops when both thresholds are reached; (d) find P(red threshold before blue threshold).",
    "approach": "Translate the stopping rule or condition into possible outcomes; then add their probabilities or simplify the relevant sum.",
    "solution": "Assume 1≤r≤n,1≤s≤m and let N=n+m. (a) For t=r,…,m+r, P(X=t)=[C(n,r−1)C(m,t−r)/C(N,t−1)]·[(n−r+1)/(N−t+1)]. (b) Red completes at t while blue is still below s, or blue completes while red is below r. Add the red term from (a) when t−r<s to the symmetric blue term [C(m,s−1)C(n,t−s)/C(N,t−1)]·[(m−s+1)/(N−t+1)] when t−s<r. (c) Use exactly the same two terminal-draw terms, but require t−r≥s for a final red and t−s≥r for a final blue: the other threshold must already be met. These terminal cases are disjoint. (d) Among the first r+s−1 draws, red wins exactly if there are at least r red. Hence ∑_{j=r}^{min(n,r+s−1)}C(n,j)C(m,r+s−1−j)/C(N,r+s−1). Every combination outside its valid range is zero.",
    "trap": "Keep the distribution’s support and the stopping rule explicit. A zero denominator does not define a conditional probability.",
    "tests": [
      "c.prob.4.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 4, selftest 32; independently worded study adaptation."
  }
]
);
