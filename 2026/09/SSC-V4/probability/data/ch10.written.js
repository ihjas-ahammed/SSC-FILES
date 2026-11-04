var QUESTIONS = QUESTIONS || [];
QUESTIONS.push(...
[
  {
    "id": "w.prob.10.1.1",
    "course": "prob",
    "sec": "10.1",
    "marks": 4,
    "title": "Simulation estimate and precision",
    "prompt": "A simulated game is won with probability p. After k independent games, define the win-fraction estimator. Show it is unbiased and give its variance.",
    "approach": "Represent each game outcome by a Bernoulli indicator and use moments of an average.",
    "solution": "Let I_j=1 if game j is won and 0 otherwise. The estimator is p̂=k⁻¹Σ_{j=1}^k I_j. Since E[I_j]=p, E[p̂]=k⁻¹kp=p. Independence gives Var(p̂)=k⁻²Σp(1−p)=p(1−p)/k.",
    "trap": "The standard error is √(p(1−p)/k), not p(1−p)/k; the latter is the variance.",
    "tests": [
      "c.prob.10.1.1"
    ]
  },
  {
    "id": "w.prob.10.1.2",
    "course": "prob",
    "sec": "10.1",
    "marks": 4,
    "title": "Why the shuffle is uniform",
    "prompt": "(Adapted from Ross Example 1a.) In a list of n items, choose J_i uniformly from {1,...,i} and swap positions i and J_i for i=n down to 2. Explain why the final permutation is uniform.",
    "approach": "Fix a target permutation and count the unique sequence of choices that produces it.",
    "solution": "For any prescribed final permutation, the item that must occupy position n is selected with probability 1/n. Conditional on this choice, the remaining n−1 items are uniformly permuted by the same procedure; by induction this has probability 1/(n−1)!. Thus the target ordering has probability (1/n)(1/(n−1)!)=1/n!. Every permutation is equally likely.",
    "trap": "At step i, the draw must be among the first i positions; choosing from all n positions breaks the argument.",
    "tests": [
      "c.prob.10.1.1",
      "c.prob.10.1.2"
    ]
  },
  {
    "id": "w.prob.10.2.1",
    "course": "prob",
    "sec": "10.2",
    "marks": 4,
    "title": "Inverse transform for a Weibull law",
    "prompt": "(Adapted from Ross §10.2.1.) Let F(x)=1−e^(−x^β) for x≥0, β>0. Derive an inverse-transform simulation formula from one uniform random number.",
    "approach": "Set F(x)=U and solve for x; 1−U is uniform whenever U is.",
    "solution": "Set U=1−e^(−x^β). Then e^(−x^β)=1−U, so x^β=−ln(1−U), hence X=[−ln(1−U)]^(1/β). Since 1−U is also uniform on (0,1), an equivalent formula is X=(−ln U)^(1/β).",
    "trap": "The exponent is 1/β; check that β=1 returns an exponential variable.",
    "tests": [
      "c.prob.10.2.1"
    ]
  },
  {
    "id": "w.prob.10.2.2",
    "course": "prob",
    "sec": "10.2",
    "marks": 5,
    "title": "Rejection algorithm and expected proposals",
    "prompt": "Suppose target density f is bounded by c g, where g is an easy proposal density. State the accept/reject rule, prove the accepted density is f, and give the expected number of proposals.",
    "approach": "Compute the proposal-and-accept density, then condition on acceptance.",
    "solution": "Generate Y~g and U~Uniform(0,1), accepting Y if U≤f(Y)/(cg(Y)). The joint density contribution at y for an accepted proposal is g(y)f(y)/(cg(y))=f(y)/c. Integrating gives acceptance probability 1/c; dividing by that probability leaves density f(y). Repeated independent proposals have geometric success probability 1/c, so the expected number tried is c.",
    "trap": "A rejection step discards the proposal entirely; returning it after rejection biases the output.",
    "tests": [
      "c.prob.10.2.2"
    ]
  },
  {
    "id": "w.prob.10.3.1",
    "course": "prob",
    "sec": "10.3",
    "marks": 4,
    "title": "Discrete inverse-transform table",
    "prompt": "(Adapted from Ross Self-Test Problem 10.3.) A variable has masses .15,.20,.35,.30 at values 1,2,3,4. Give the intervals of a uniform U that produce each value.",
    "approach": "Take cumulative sums and assign consecutive intervals of those lengths.",
    "solution": "Cumulative masses are .15, .35, .70, 1. Thus return 1 for 0<U≤.15; 2 for .15<U≤.35; 3 for .35<U≤.70; and 4 for .70<U<1. The interval lengths match the four probabilities.",
    "trap": "The intervals must cover all of (0,1) without gaps; a cumulative total different from 1 signals a pmf error.",
    "tests": [
      "c.prob.10.3.1"
    ]
  },
  {
    "id": "w.prob.10.3.2",
    "course": "prob",
    "sec": "10.3",
    "marks": 4,
    "title": "Simulate a binomial count from uniforms",
    "prompt": "Describe a method using n independent Uniform(0,1) values to simulate Binomial(n,p), and justify its law.",
    "approach": "Convert each uniform into a success/failure indicator and add.",
    "solution": "Generate U₁,...,Uₙ independently uniform and set I_j=1{U_j<p}. Then P(I_j=1)=p, the indicators are independent, and X=ΣI_j counts successes in n independent Bernoulli(p) trials. Therefore X~Binomial(n,p).",
    "trap": "Using one shared uniform for every indicator makes the trial outcomes dependent and does not produce the binomial law.",
    "tests": [
      "c.prob.10.3.2"
    ]
  },
  {
    "id": "w.prob.10.4.1",
    "course": "prob",
    "sec": "10.4",
    "marks": 5,
    "title": "Antithetic estimator for π",
    "prompt": "(Adapted from Ross Example 4a and Problem 10.14.) For U~Uniform(0,1), let g(U)=√(1−U²). Pair U with 1−U. Show both have mean π/4 and the same variance; write the antithetic estimator.",
    "approach": "Use symmetry of the quarter-circle integral and calculate second moments directly.",
    "solution": "E[g(U)]=∫₀¹√(1−u²)du=π/4. Since 1−U is also uniform, E[g(1−U)]=π/4. For either variable, the second moment is ∫₀¹(1−u²)du=2/3, so both variances equal 2/3−π²/16. With k independent uniforms U_j, estimate π/4 by k⁻¹Σ_j[g(U_j)+g(1−U_j)]/2; multiplying by 4 estimates π.",
    "trap": "The paired estimator variance depends on covariance between g(U) and g(1−U); matching marginals alone does not imply a variance improvement.",
    "tests": [
      "c.prob.10.4.1"
    ]
  },
  {
    "id": "w.prob.10.4.2",
    "course": "prob",
    "sec": "10.4",
    "marks": 5,
    "title": "Choose the control-variate coefficient",
    "prompt": "(Adapted from Ross Problem 10.15.) Let W=Y+a(Z−E[Z]), where E[Z] is known. Derive the value of a minimizing Var(W) and the resulting minimum variance.",
    "approach": "Expand the variance as a quadratic in a and complete the square or differentiate.",
    "solution": "Var(W)=Var(Y)+a²Var(Z)+2aCov(Y,Z). If Var(Z)>0, the derivative is 2aVar(Z)+2Cov(Y,Z); setting it to zero gives a*=−Cov(Y,Z)/Var(Z). Substituting yields Var(W)=Var(Y)−Cov(Y,Z)²/Var(Z), which is nonnegative and no larger than Var(Y).",
    "trap": "Centering Z by its known mean keeps the estimator unbiased; changing a does not change E[W]=E[Y].",
    "tests": [
      "c.prob.10.4.3"
    ]
  },
  {
    "id": "w.prob.10.ross.example.2a",
    "course": "prob",
    "sec": "10.2",
    "marks": 4,
    "title": "Ross Example 2a: Exponential random variable inverse transform",
    "prompt": "Derive the inverse transformation formula for generating an exponential random variable with mean $1/\\lambda$ from a uniform $(0, 1)$ random number.",
    "approach": "Equate the exponential CDF $F(x) = 1 - e^{-\\lambda x}$ to $U$ and solve for $x$, noting that $1 - U$ has the same distribution as $U$.",
    "solution": "The CDF of an exponential random variable $X$ with rate $\\lambda$ is $F(x) = 1 - e^{-\\lambda x}$ for $x \\ge 0$. Setting $F(X) = U$ where $U \\sim \\operatorname{Uniform}(0, 1)$: $1 - e^{-\\lambda X} = U \\implies e^{-\\lambda X} = 1 - U \\implies -\\lambda X = \\ln(1 - U) \\implies X = -\\frac{1}{\\lambda} \\ln(1 - U)$. Since $1 - U$ is also uniformly distributed on $(0, 1)$, we can equally well generate $X$ by setting $X = -\\frac{1}{\\lambda} \\ln U$.",
    "trap": "The factor is $-1/\\lambda$; since $\\ln U < 0$ for $U \\in (0, 1)$, $X$ is strictly positive as required.",
    "tests": [
      "c.prob.10.2.1"
    ],
    "provenance": "Ross, 10e, §10.2.1, Example 2a, PDF pp. 452–453."
  },
  {
    "id": "w.prob.10.ross.example.2b",
    "course": "prob",
    "sec": "10.2",
    "marks": 4,
    "title": "Ross Example 2b: Gamma simulation via sum of exponentials",
    "prompt": "Show how to simulate a gamma random variable with integer shape parameter $n$ and rate $\\lambda$ using $n$ independent uniform $(0, 1)$ random numbers and a single logarithm.",
    "approach": "Express the gamma variable as the sum of $n$ independent exponential variates and combine logarithms.",
    "solution": "A $\\operatorname{Gamma}(n, \\lambda)$ random variable with integer $n$ can be represented as the sum of $n$ independent $\\operatorname{Exp}(\\lambda)$ random variables: $X = \\sum_{i=1}^n X_i$. From Example 2a, each $X_i$ can be simulated as $X_i = -\\frac{1}{\\lambda} \\ln U_i$, where $U_1, \\dots, U_n$ are independent $\\operatorname{Uniform}(0, 1)$ random numbers. Summing these: $X = \\sum_{i=1}^n \\left( -\\frac{1}{\\lambda} \\ln U_i \\right) = -\\frac{1}{\\lambda} \\sum_{i=1}^n \\ln U_i = -\\frac{1}{\\lambda} \\ln\\left( \\prod_{i=1}^n U_i \\right)$. This generates the gamma variate using only $n$ uniform draws and a single logarithmic evaluation.",
    "trap": "Ensure $n$ is an integer for this exact convolution representation; general fractional shape parameters require rejection sampling.",
    "tests": [
      "c.prob.10.2.1"
    ],
    "provenance": "Ross, 10e, §10.2.1, Example 2b, PDF p. 453."
  },
  {
    "id": "w.prob.10.ross.example.2c",
    "course": "prob",
    "sec": "10.2",
    "marks": 5,
    "title": "Ross Example 2c: Standard normal rejection sampling from exponential proposal",
    "prompt": "Describe the rejection sampling algorithm for generating a standard normal random variable using an exponential proposal with rate 1, including recycling the residual exponential.",
    "approach": "Bound the density of $|Z|$ by an exponential envelope $c g(x)$ with $c = \\sqrt{2e/\\pi}$, accept with probability $e^{-(Y-1)^2/2}$, and assign a random sign.",
    "solution": "The absolute value of a unit normal $Z$ has density $f(x) = \\sqrt{\\frac{2}{\\pi}} e^{-x^2/2}$ for $x > 0$. Using proposal $g(x) = e^{-x}$ for $x > 0$: $\\frac{f(x)}{g(x)} = \\sqrt{\\frac{2}{\\pi}} e^{x - x^2/2} = \\sqrt{\\frac{2e}{\\pi}} e^{-(x-1)^2/2} \\le \\sqrt{\\frac{2e}{\\pi}} = c \\approx 1.3155$. The acceptance probability is $\\frac{f(Y)}{c g(Y)} = e^{-(Y-1)^2/2}$. Generate independent exponentials $Y_1, Y_2 \\sim \\operatorname{Exp}(1)$ (where $Y_2 = -\\ln U$). If $Y_2 \\ge (Y_1 - 1)^2/2$, accept $|Z| = Y_1$. Then pick a random sign $Z = Y_1$ if $U_2 \\le 1/2$ and $Z = -Y_1$ if $U_2 > 1/2$. By the memoryless property of the exponential, the difference $Y_2 - (Y_1 - 1)^2/2$ is an independent $\\operatorname{Exp}(1)$ random variable, which can be reused in place of generating a new $Y_1$ for the next normal variate.",
    "trap": "Rejection generates the folded normal $|Z|$; the random sign step is essential to restore the full bell curve.",
    "tests": [
      "c.prob.10.2.2"
    ],
    "provenance": "Ross, 10e, §10.2.2, Example 2c, PDF pp. 454–455."
  },
  {
    "id": "w.prob.10.ross.example.2d",
    "course": "prob",
    "sec": "10.2",
    "marks": 5,
    "title": "Ross Example 2d: Polar method for generating independent standard normals",
    "prompt": "Explain the Box-Muller polar algorithm for generating a pair of independent standard normal random variables without evaluating trigonometric functions.",
    "approach": "Generate points uniformly in the unit disk via rejection on the square $[-1, 1]^2$, and map the squared radius and angle projections to normal coordinates.",
    "solution": "1. Generate independent $U_1, U_2 \\sim \\operatorname{Uniform}(0, 1)$, and set $V_1 = 2U_1 - 1, V_2 = 2U_2 - 1$. 2. Compute $S = V_1^2 + V_2^2$. If $S > 1$, reject and repeat step 1. 3. Once $S \\le 1$, the point $(V_1, V_2)$ is uniformly distributed in the unit disk. Conditional on $S \\le 1$, $S = R^2$ is uniformly distributed on $(0, 1)$ and independent of the direction $(\\cos\\Theta, \\sin\\Theta) = (V_1/\\sqrt{S}, V_2/\\sqrt{S})$. In Box-Muller, independent normals are $X = \\sqrt{-2\\ln U} \\cos(2\\pi U') = \\sqrt{-2\\ln S} (V_1/\\sqrt{S}) = \\sqrt{\\frac{-2\\ln S}{S}} V_1$, and $Y = \\sqrt{\\frac{-2\\ln S}{S}} V_2$. This yields two independent $\\mathcal{N}(0, 1)$ variates. Acceptance probability is $\\pi/4 \\approx 0.785$, requiring an average of $4/\\pi \\approx 1.273$ iterations.",
    "trap": "The rejection step ensures $(V_1, V_2)$ is uniform in the circle; without it, the direction is biased toward the corners of the square.",
    "tests": [
      "c.prob.10.2.1",
      "c.prob.10.2.2"
    ],
    "provenance": "Ross, 10e, §10.2.2, Example 2d, PDF pp. 455–457."
  },
  {
    "id": "w.prob.10.ross.example.2e",
    "course": "prob",
    "sec": "10.2",
    "marks": 4,
    "title": "Ross Example 2e: Chi-squared random variable simulation",
    "prompt": "Describe how to simulate a chi-squared random variable with $n$ degrees of freedom for both even ($n = 2k$) and odd ($n = 2k + 1$) cases.",
    "approach": "Use the fact that the sum of two squared standard normals is exponential with rate $1/2$, and sum $k$ such pairs plus an extra squared normal if odd.",
    "solution": "The chi-squared variable with $n$ degrees of freedom is $\\chi_n^2 = \\sum_{i=1}^n Z_i^2$, where $Z_i \\sim \\mathcal{N}(0, 1)$ iid. For any pair of independent normals, $Z_{2j-1}^2 + Z_{2j}^2 \\sim \\operatorname{Exp}(1/2) = -2\\ln U_j$. (a) When $n = 2k$ is even, $\\chi_{2k}^2$ is the sum of $k$ independent $\\operatorname{Exp}(1/2)$ variates: $\\chi_{2k}^2 = -2\\sum_{j=1}^k \\ln U_j = -2\\ln\\left( \\prod_{j=1}^k U_j \\right)$, where $U_1, \\dots, U_k \\sim \\operatorname{Uniform}(0, 1)$ iid. (b) When $n = 2k + 1$ is odd, generate one unit normal $Z$ (via the polar method or rejection) and $k$ uniform numbers: $\\chi_{2k+1}^2 = Z^2 - 2\\ln\\left( \\prod_{j=1}^k U_j \\right)$.",
    "trap": "For even degrees of freedom, you do not need to generate any normal variables at all; $k$ uniform numbers suffice.",
    "tests": [
      "c.prob.10.2.1"
    ],
    "provenance": "Ross, 10e, §10.2.2, Example 2e, PDF p. 457."
  },
  {
    "id": "w.prob.10.ross.example.3a",
    "course": "prob",
    "sec": "10.3",
    "marks": 4,
    "title": "Ross Example 3a: Geometric random variable inverse transform",
    "prompt": "Derive a closed-form formula for simulating a geometric random variable with parameter $p$ using a single uniform $(0, 1)$ random number.",
    "approach": "Invert the discrete cumulative distribution $F(j) = 1 - (1-p)^j$ by isolating $j$ with logarithms.",
    "solution": "A geometric random variable $X$ has PMF $P(X = i) = (1-p)^{i-1} p$ for $i \\ge 1$, so $P(X > j-1) = (1-p)^{j-1}$. The discrete inverse transform sets $X = j$ when $1 - (1-p)^{j-1} < U \\le 1 - (1-p)^j$, which is equivalent to $(1-p)^j \\le 1 - U < (1-p)^{j-1}$. Since $1 - U \\sim \\operatorname{Uniform}(0, 1)$, we can replace $1 - U$ by $U$: $(1-p)^j \\le U < (1-p)^{j-1}$. Taking natural logarithms (noting $\\ln(1-p) < 0$, which flips the inequalities): $j \\ln(1-p) \\le \\ln U < (j-1)\\ln(1-p) \\implies j \\ge \\frac{\\ln U}{\\ln(1-p)} > j - 1$. Therefore, $j - 1 = \\left\\lfloor \\frac{\\ln U}{\\ln(1-p)} \\right\\rfloor$, giving the closed-form formula: $X = 1 + \\left\\lfloor \\frac{\\ln U}{\\ln(1-p)} \\right\\rfloor$.",
    "trap": "Dividing by the negative quantity $\\ln(1-p)$ reverses the inequality; forgetting this leads to the wrong floor index.",
    "tests": [
      "c.prob.10.3.1"
    ],
    "provenance": "Ross, 10e, §10.3, Example 3a, PDF p. 458."
  },
  {
    "id": "w.prob.10.ross.example.3c",
    "course": "prob",
    "sec": "10.3",
    "marks": 4,
    "title": "Ross Example 3c: Poisson simulation via uniform product algorithm",
    "prompt": "Explain the multiplicative algorithm for generating a Poisson random variable with mean $\\lambda$ from uniform $(0, 1)$ random numbers, and prove why it works.",
    "approach": "Relate the product of uniforms to the sum of exponential interarrival times in a Poisson counting process.",
    "solution": "Algorithm: Generate independent uniforms $U_1, U_2, \\dots$ and let $N = \\min\\left\\{ n : \\prod_{i=1}^n U_i < e^{-\\lambda} \\right\\}$. Return $X = N - 1$. Proof: The condition $\\prod_{i=1}^n U_i < e^{-\\lambda}$ is equivalent to $\\sum_{i=1}^n \\ln U_i < -\\lambda$, or $\\sum_{i=1}^n (-\\ln U_i) > \\lambda$. Since $T_i = -\\ln U_i$ are independent Exponential(1) random variables, $S_n = \\sum_{i=1}^n T_i$ is the time of the $n$-th arrival of a rate 1 Poisson process. The event $X = k$ (i.e., $N = k + 1$) means $S_k \\le \\lambda < S_{k+1}$, which states that exactly $k$ events occurred by time $\\lambda$. Since the count of events in time $\\lambda$ for a rate 1 Poisson process is $\\operatorname{Poisson}(\\lambda)$, $X$ has the desired Poisson distribution with mean $\\lambda$.",
    "trap": "Remember to return $N - 1$, not $N$, because $N$ is the index of the first arrival that exceeds the threshold $\\lambda$.",
    "tests": [
      "c.prob.10.3.2"
    ],
    "provenance": "Ross, 10e, §10.3, Example 3c, PDF pp. 459–460."
  },
  {
    "id": "w.prob.10.ross.prob.1",
    "course": "prob",
    "sec": "10.1",
    "marks": 5,
    "title": "Ross Problem 10.1: Forward random permutation algorithm and induction proof",
    "prompt": "Consider the algorithm: Set $P(1) = 1$. For $k = 2, \\dots, n$, generate uniform $U$ and set $J = \\lfloor kU \\rfloor + 1$; then swap $P(k) = P(J)$ and $P(J) = k$. (a) Explain what the algorithm is doing. (b) Prove by induction that $P(1), \\dots, P(n)$ is a uniformly distributed random permutation.",
    "approach": "Interpret the algorithm as inserting each new element $k$ into a randomly chosen position among the first $k$ slots, and prove inductive preservation of uniform likelihood.",
    "solution": "(a) The algorithm builds a random permutation incrementally: starting with a 1-element list $(1)$, at each step $k \\in \\{2, \\dots, n\\}$, it chooses a position $J \\in \\{1, 2, \\dots, k\\}$ with equal probability $1/k$. It moves the element currently at position $J$ to the new slot $k$, and places the new element $k$ into position $J$. Unlike the backward Fisher-Yates shuffle, no position is frozen until the end. (b) Proof by induction: Base case $k = 1$: $P(1) = 1$ is the unique permutation of $\\{1\\}$, occurring with probability $1 = 1/1!$. Inductive step: Assume that after step $k - 1$, $P(1), \\dots, P(k-1)$ is equally likely to be any of the $(k-1)!$ permutations of $\\{1, \\dots, k-1\\}$. At step $k$, element $k$ is inserted into position $J \\in \\{1, \\dots, k\\}$ with probability $1/k$. For any specific target permutation $(i_1, \\dots, i_k)$ of $\\{1, \\dots, k\\}$, element $k$ must be in position $J$ where $i_J = k$, which occurs with probability $1/k$. Given this placement, the remaining $k-1$ elements must have been in the unique predecessor ordering on $\\{1, \\dots, k-1\\}$, which has probability $1/(k-1)!$ by the induction hypothesis. By independence, $P(P = (i_1, \\dots, i_k)) = \\frac{1}{k} \\times \\frac{1}{(k-1)!} = \\frac{1}{k!}$. Thus, by induction, all $n!$ permutations are equally likely.",
    "trap": "The displaced element $P(J)$ is moved to the end slot $k$, so no elements are lost or duplicated.",
    "tests": [
      "c.prob.10.1.2"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 10.1, PDF p. 465."
  },
  {
    "id": "w.prob.10.ross.prob.2",
    "course": "prob",
    "sec": "10.2",
    "marks": 4,
    "title": "Ross Problem 10.2: Double exponential (Laplace) inverse transform simulation",
    "prompt": "Develop an inverse transform method for simulating a random variable with density $f(x) = e^{2x}$ for $x < 0$ and $f(x) = e^{-2x}$ for $x > 0$.",
    "approach": "Integrate to find the piecewise CDF, and invert $F(x) = U$ separately for $U \\le 1/2$ and $U > 1/2$.",
    "solution": "First verify that $f$ integrates to 1: $\\int_{-\\infty}^0 e^{2x} dx + \\int_0^\\infty e^{-2x} dx = \\frac{1}{2} + \\frac{1}{2} = 1$. The CDF is: For $x \\le 0$: $F(x) = \\int_{-\\infty}^x e^{2t} dt = \\frac{1}{2} e^{2x}$. For $x > 0$: $F(x) = \\frac{1}{2} + \\int_0^x e^{-2t} dt = \\frac{1}{2} + \\frac{1}{2}(1 - e^{-2x}) = 1 - \\frac{1}{2} e^{-2x}$. Setting $F(X) = U$: (1) If $U \\le 1/2$: $\\frac{1}{2} e^{2X} = U \\implies e^{2X} = 2U \\implies X = \\frac{1}{2} \\ln(2U)$. (2) If $U > 1/2$: $1 - \\frac{1}{2} e^{-2X} = U \\implies \\frac{1}{2} e^{-2X} = 1 - U \\implies e^{-2X} = 2(1 - U) \\implies X = -\\frac{1}{2} \\ln(2(1 - U))$. Algorithm: Generate $U \\sim \\operatorname{Uniform}(0, 1)$. If $U \\le 1/2$, return $X = \\frac{1}{2} \\ln(2U)$; otherwise return $X = -\\frac{1}{2} \\ln(2(1 - U))$. (Equivalently: generate independent $U_1, U_2 \\sim \\operatorname{Uniform}(0, 1)$, set magnitude $Y = -\\frac{1}{2}\\ln U_1 \\sim \\operatorname{Exp}(2)$, and assign random sign based on $U_2$.)",
    "trap": "Check the boundary at $U = 1/2$: both branches give $X = 0$, ensuring continuity of the inverse transform.",
    "tests": [
      "c.prob.10.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 10.2, PDF p. 465."
  },
  {
    "id": "w.prob.10.ross.prob.3",
    "course": "prob",
    "sec": "10.2",
    "marks": 5,
    "title": "Ross Problem 10.3: Piecewise linear triangular density simulation",
    "prompt": "Give an inverse transform technique for simulating a random variable with density $f(x) = \\frac{1}{2}(x - 2)$ for $2 \\le x \\le 3$, $f(x) = \\frac{1}{2}(2 - x/3)$ for $3 < x \\le 6$, and 0 otherwise.",
    "approach": "Compute the CDF by integrating $f(x)$ piecewise, determine the split point at $x = 3$, and invert.",
    "solution": "1. Integrate $f(x)$: For $2 \\le x \\le 3$: $F(x) = \\int_2^x \\frac{1}{2}(t - 2) dt = \\frac{1}{4}(x - 2)^2$. At $x = 3$, $F(3) = 1/4$. For $3 < x \\le 6$: $F(x) = \\frac{1}{4} + \\int_3^x \\frac{1}{2}\\left(2 - \\frac{t}{3}\\right) dt = \\frac{1}{4} + \\left[ t - \\frac{t^2}{12} \\right]_3^x = 1 - \\frac{(6 - x)^2}{12}$. At $x = 6$, $F(6) = 1$. 2. Invert $F(X) = U$: (a) If $U \\le 1/4$: $\\frac{1}{4}(X - 2)^2 = U \\implies (X - 2)^2 = 4U \\implies X = 2 + 2\\sqrt{U}$. (b) If $U > 1/4$: $1 - \\frac{(6 - X)^2}{12} = U \\implies \\frac{(6 - X)^2}{12} = 1 - U \\implies (6 - X)^2 = 12(1 - U) \\implies X = 6 - \\sqrt{12(1 - U)}$. Algorithm: Generate $U \\sim \\operatorname{Uniform}(0, 1)$. If $U \\le 1/4$, return $X = 2 + 2\\sqrt{U}$; otherwise return $X = 6 - \\sqrt{12(1 - U)}$.",
    "trap": "When inverting on $3 < x \\le 6$, ensure you choose the root $6 - \\sqrt{12(1-U)}$ so that $X \\le 6$, not $6 + \\sqrt{12(1-U)}$.",
    "tests": [
      "c.prob.10.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 10.3, PDF p. 465."
  },
  {
    "id": "w.prob.10.ross.prob.4",
    "course": "prob",
    "sec": "10.2",
    "marks": 4,
    "title": "Ross Problem 10.4: Piecewise continuous CDF simulation via inverse transform",
    "prompt": "Present an inverse transform method for simulating a random variable with CDF: $F(x) = 0$ for $x \\le -3$, $F(x) = \\frac{1}{2} + \\frac{x}{6}$ for $-3 < x < 0$, $F(x) = \\frac{1}{2} + \\frac{x^2}{32}$ for $0 < x \\le 4$, and $F(x) = 1$ for $x > 4$.",
    "approach": "Identify the threshold at $x = 0$ ($F(0) = 1/2$) and solve $F(X) = U$ algebraically in each region.",
    "solution": "Notice that $F(-3) = 0, F(0) = 1/2$, and $F(4) = 1/2 + 16/32 = 1$. The CDF is continuous and strictly increasing from $-3$ to $4$. Setting $F(X) = U$: 1. If $U \\le 1/2$: $\\frac{1}{2} + \\frac{X}{6} = U \\implies \\frac{X}{6} = U - \\frac{1}{2} \\implies X = 6U - 3$. 2. If $U > 1/2$: $\\frac{1}{2} + \\frac{X^2}{32} = U \\implies \\frac{X^2}{32} = U - \\frac{1}{2} \\implies X^2 = 32\\left(U - \\frac{1}{2}\\right) = 16(2U - 1) \\implies X = 4\\sqrt{2U - 1}$ (taking the positive root since $X > 0$). Algorithm: Generate $U \\sim \\operatorname{Uniform}(0, 1)$. If $U \\le 1/2$, return $X = 6U - 3$; otherwise return $X = 4\\sqrt{2U - 1}$.",
    "trap": "Check boundary matching: at $U = 1/2$, $6(1/2) - 3 = 0$ and $4\\sqrt{2(1/2) - 1} = 0$, verifying consistency.",
    "tests": [
      "c.prob.10.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 10.4, PDF p. 465."
  },
  {
    "id": "w.prob.10.ross.prob.6",
    "course": "prob",
    "sec": "10.2",
    "marks": 4,
    "title": "Ross Problem 10.6: Hazard rate inverse transform simulation for power laws",
    "prompt": "Give a method for simulating a continuous random variable having failure rate function: (a) $\\lambda(t) = c$, (b) $\\lambda(t) = ct$, (c) $\\lambda(t) = ct^2$, and (d) $\\lambda(t) = ct^3$, where $c > 0$.",
    "approach": "Compute the cumulative hazard $H(t) = \\int_0^t \\lambda(s) ds$, set $H(t) = -\\ln U$, and solve for $t$.",
    "solution": "The survival function satisfies $1 - F(t) = \\exp\\left( -\\int_0^t \\lambda(s) ds \\right) = e^{-H(t)}$. Setting $1 - F(t) = U$ (where $U \\sim \\operatorname{Uniform}(0, 1)$) is equivalent to $H(t) = -\\ln U$. (a) $\\lambda(t) = c \\implies H(t) = ct$. Thus $ct = -\\ln U \\implies t = -\\frac{1}{c} \\ln U$ (Exponential distribution). (b) $\\lambda(t) = ct \\implies H(t) = \\frac{1}{2} c t^2$. Thus $\\frac{1}{2} c t^2 = -\\ln U \\implies t = \\sqrt{-\\frac{2}{c} \\ln U}$ (Weibull / Rayleigh distribution). (c) $\\lambda(t) = ct^2 \\implies H(t) = \\frac{1}{3} c t^3$. Thus $\\frac{1}{3} c t^3 = -\\ln U \\implies t = \\left(-\\frac{3}{c} \\ln U\\right)^{1/3}$. (d) $\\lambda(t) = ct^3 \\implies H(t) = \\frac{1}{4} c t^4$. Thus $\\frac{1}{4} c t^4 = -\\ln U \\implies t = \\left(-\\frac{4}{c} \\ln U\\right)^{1/4}$. In general, for $\\lambda(t) = c t^k$, $t = \\left( -\\frac{k+1}{c} \\ln U \\right)^{1/(k+1)}$.",
    "trap": "The hazard function integrates to cumulative hazard $H(t)$; do not confuse the hazard rate with the probability density function.",
    "tests": [
      "c.prob.10.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 10.6, PDF p. 465."
  },
  {
    "id": "w.prob.10.ross.prob.7",
    "course": "prob",
    "sec": "10.2",
    "marks": 4,
    "title": "Ross Problem 10.7: Inverse transform vs maximum of uniforms for power CDF",
    "prompt": "For $F(x) = x^n, 0 < x < 1$: (a) Give a simulation method using a single uniform number. (b) Show that if $U_1, \\dots, U_n$ are iid uniform, $P(\\max(U_1, \\dots, U_n) \\le x) = x^n$. (c) Use (b) to provide an alternative simulation method and compare.",
    "approach": "Invert $F(x) = U$ directly for (a), and apply the order statistic property for (b) and (c).",
    "solution": "(a) Setting $F(X) = U$ gives $X^n = U \\implies X = U^{1/n}$, using one uniform random number and an $n$-th root. (b) For independent uniform random numbers $U_1, \\dots, U_n$, the maximum is at most $x$ if and only if every $U_i \\le x$: $P(\\max(U_1, \\dots, U_n) \\le x) = P(U_1 \\le x, \\dots, U_n \\le x) = \\prod_{i=1}^n P(U_i \\le x) = x^n$ for $0 < x < 1$. (c) Alternative method: Generate $n$ independent uniforms $U_1, \\dots, U_n$ and return $X = \\max(U_1, \\dots, U_n)$. Comparison: Method (a) requires only 1 uniform number but requires evaluating an $n$-th root $U^{1/n}$ (floating-point power function). Method (c) requires $n$ uniform random numbers and $n-1$ simple comparisons, completely avoiding root computations, which can be computationally faster for small integer $n$.",
    "trap": "Method (c) is valid only for integer $n$, whereas method (a) works for any real power $\\alpha > 0$.",
    "tests": [
      "c.prob.10.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 10.7, PDF p. 465."
  },
  {
    "id": "w.prob.10.ross.prob.8",
    "course": "prob",
    "sec": "10.2",
    "marks": 4,
    "title": "Ross Problem 10.8: Simulating product and parallel reliability systems",
    "prompt": "Suppose we can easily simulate from distributions $F_1, \\dots, F_n$. How can we simulate from: (a) $F(x) = \\prod_{i=1}^n F_i(x)$? (b) $F(x) = 1 - \\prod_{i=1}^n [1 - F_i(x)]$?",
    "approach": "Recognize (a) as the distribution of the maximum of independent variables, and (b) as the distribution of the minimum.",
    "solution": "(a) Let $X_1, \\dots, X_n$ be independent random variables where $X_i \\sim F_i$. The maximum $M = \\max(X_1, \\dots, X_n)$ has distribution: $P(M \\le x) = P(X_1 \\le x, \\dots, X_n \\le x) = \\prod_{i=1}^n P(X_i \\le x) = \\prod_{i=1}^n F_i(x) = F(x)$. Therefore, simulate independent $X_1 \\sim F_1, \\dots, X_n \\sim F_n$, and return $X = \\max(X_1, \\dots, X_n)$. (b) Similarly, the minimum $L = \\min(X_1, \\dots, X_n)$ has survival function: $P(L > x) = \\prod_{i=1}^n P(X_i > x) = \\prod_{i=1}^n [1 - F_i(x)]$. Hence its CDF is $P(L \\le x) = 1 - \\prod_{i=1}^n [1 - F_i(x)] = F(x)$. Therefore, simulate independent $X_1 \\sim F_1, \\dots, X_n \\sim F_n$, and return $X = \\min(X_1, \\dots, X_n)$.",
    "trap": "Product of CDFs corresponds to the maximum (parallel system); product of survival functions corresponds to the minimum (series system).",
    "tests": [
      "c.prob.10.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 10.8, PDF pp. 465–466."
  },
  {
    "id": "w.prob.10.ross.prob.9",
    "course": "prob",
    "sec": "10.2",
    "marks": 4,
    "title": "Ross Problem 10.9: Composition mixture distribution simulation",
    "prompt": "Explain how to simulate from the mixture distribution $F(x) = p F_1(x) + (1-p) F_2(x)$ for $0 < p < 1$. Apply this method to simulate from $F(x) = \\frac{1}{3}(1 - e^{-3x}) + \\frac{2}{3}x$ for $0 < x \\le 1$ and $\\frac{1}{3}(1 - e^{-3x}) + \\frac{2}{3}$ for $x > 1$.",
    "approach": "Use a Bernoulli trial with parameter $p$ to choose between simulating from $F_1$ or $F_2$.",
    "solution": "General method (Composition): Generate a random number $U_1 \\sim \\operatorname{Uniform}(0, 1)$. If $U_1 \\le p$, simulate and return $X$ from distribution $F_1$; otherwise (if $U_1 > p$), simulate and return $X$ from distribution $F_2$. Application: Here $p = 1/3$. $F_1(x) = 1 - e^{-3x}$ for $x > 0$ is the $\\operatorname{Exp}(3)$ distribution. $F_2(x) = x$ for $0 < x < 1$ (and 1 for $x \\ge 1$) is the $\\operatorname{Uniform}(0, 1)$ distribution. Concrete algorithm: 1. Generate $U_1, U_2 \\sim \\operatorname{Uniform}(0, 1)$ independently. 2. If $U_1 \\le 1/3$, return $X = -\\frac{1}{3} \\ln U_2$ (exponential variate). 3. If $U_1 > 1/3$, return $X = U_2$ (uniform variate).",
    "trap": "Use a fresh uniform $U_2$ for the chosen sub-distribution so the selection step does not condition or distort the sampled value.",
    "tests": [
      "c.prob.10.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 10.9, PDF p. 466."
  },
  {
    "id": "w.prob.10.ross.prob.10",
    "course": "prob",
    "sec": "10.2",
    "marks": 5,
    "title": "Ross Problem 10.10: Optimal proposal rate for normal rejection sampling from exponential",
    "prompt": "In simulating the absolute value of a unit normal from an exponential density $g(x) = \\lambda e^{-\\lambda x}$, show that the expected number of iterations $c(\\lambda)$ is minimized when $\\lambda = 1$.",
    "approach": "Find the maximum of $f(x)/g(x)$ as a function of $\\lambda$, and minimize the resulting envelope constant $c(\\lambda)$ using calculus.",
    "solution": "The folded standard normal density is $f(x) = \\sqrt{\\frac{2}{\\pi}} e^{-x^2/2}$ for $x > 0$. The proposal is $g(x) = \\lambda e^{-\\lambda x}$ for $x > 0$. The ratio is: $R(x) = \\frac{f(x)}{g(x)} = \\sqrt{\\frac{2}{\\pi}} \\frac{1}{\\lambda} e^{\\lambda x - x^2/2} = \\sqrt{\\frac{2}{\\pi}} \\frac{1}{\\lambda} e^{\\lambda^2/2} e^{-(x - \\lambda)^2/2}$. For any fixed $\\lambda > 0$, the maximum over $x > 0$ occurs at $x = \\lambda$, giving envelope constant: $c(\\lambda) = \\max_{x} R(x) = \\sqrt{\\frac{2}{\\pi}} \\frac{1}{\\lambda} e^{\\lambda^2/2}$. To minimize $c(\\lambda)$, minimize its logarithm: $h(\\lambda) = \\ln c(\\lambda) = \\frac{1}{2}\\ln\\left(\\frac{2}{\\pi}\\right) - \\ln\\lambda + \\frac{\\lambda^2}{2}$. Differentiating with respect to $\\lambda$: $h'(\\lambda) = -\\frac{1}{\\lambda} + \\lambda = 0 \\implies \\lambda^2 = 1 \\implies \\lambda = 1$ (since $\\lambda > 0$). The second derivative is $h''(\\lambda) = \\frac{1}{\\lambda^2} + 1 > 0$, confirming that $\\lambda = 1$ is the unique global minimum. At $\\lambda = 1$, the expected iterations is $c(1) = \\sqrt{2e/\\pi} \\approx 1.3155$.",
    "trap": "Check that $x = \\lambda$ is within the positive support $x > 0$, which holds since $\\lambda > 0$.",
    "tests": [
      "c.prob.10.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 10.10, PDF p. 466."
  },
  {
    "id": "w.prob.10.ross.prob.11",
    "course": "prob",
    "sec": "10.2",
    "marks": 4,
    "title": "Ross Problem 10.11: Rejection method for Beta(4, 3) density using uniform proposal",
    "prompt": "Use the rejection method with uniform proposal $g(x) = 1$ on $(0, 1)$ to simulate a random variable with density $f(x) = 60 x^3 (1-x)^2$ for $0 < x < 1$.",
    "approach": "Find the maximum of $f(x)$ on $(0, 1)$ to determine $c$, and state the accept/reject condition.",
    "solution": "The target is the $\\operatorname{Beta}(4, 3)$ density $f(x) = 60 x^3 (1-x)^2$ on $(0, 1)$, and proposal $g(x) = 1$. The ratio is $\\frac{f(x)}{g(x)} = 60 x^3 (1-x)^2$. To find $c = \\max_{x \\in (0, 1)} f(x)$, differentiate $h(x) = x^3(1-x)^2$: $h'(x) = 3x^2(1-x)^2 - 2x^3(1-x) = x^2(1-x)[3(1-x) - 2x] = x^2(1-x)(3 - 5x) = 0$. The interior maximum occurs at $x^* = 3/5 = 0.6$. The maximum value is $c = 60 (0.6)^3 (0.4)^2 = 60(0.216)(0.16) = 60(0.03456) = 2.0736$. The acceptance ratio is: $\\frac{f(Y)}{c g(Y)} = \\frac{60 Y^3(1-Y)^2}{2.0736} = \\frac{Y^3(1-Y)^2}{0.03456}$. Algorithm: 1. Generate $Y \\sim \\operatorname{Uniform}(0, 1)$ and $U \\sim \\operatorname{Uniform}(0, 1)$ independently. 2. If $U \\le \\frac{Y^3(1-Y)^2}{0.03456}$, accept $X = Y$. 3. Otherwise, return to step 1. The expected number of iterations is $c = 2.0736$.",
    "trap": "The mode of $\\operatorname{Beta}(\\alpha, \\beta)$ is $\\frac{\\alpha - 1}{\\alpha + \\beta - 2} = \\frac{3}{5} = 0.6$; evaluating $f$ at the mode gives the exact tightest bound $c$.",
    "tests": [
      "c.prob.10.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 10.11, PDF p. 466."
  },
  {
    "id": "w.prob.10.ross.prob.12",
    "course": "prob",
    "sec": "10.1",
    "marks": 4,
    "title": "Ross Problem 10.12: Monte Carlo estimation of arbitrary definite integral",
    "prompt": "Explain how random numbers can be used to approximate the definite integral $\\theta = \\int_0^1 k(x) dx$ for an arbitrary function $k(x)$.",
    "approach": "Express the integral as the expectation of $k(U)$ for $U \\sim \\operatorname{Uniform}(0, 1)$ and apply the Law of Large Numbers.",
    "solution": "Let $U$ be a uniform random variable on $(0, 1)$. Since the probability density of $U$ is $f_U(u) = 1$ for $u \\in (0, 1)$, the expected value of $k(U)$ is: $E[k(U)] = \\int_0^1 k(u) f_U(u) du = \\int_0^1 k(u) du = \\theta$. Therefore, we can estimate $\\theta$ by standard Monte Carlo simulation: 1. Generate $n$ independent uniform random numbers $U_1, U_2, \\dots, U_n$. 2. Compute the sample mean: $\\hat{\\theta}_n = \\frac{1}{n} \\sum_{i=1}^n k(U_i)$. By the Strong Law of Large Numbers, $\\hat{\\theta}_n$ converges to $\\theta$ with probability 1 as $n \\to \\infty$. By the Central Limit Theorem, the estimator is unbiased with variance $\\operatorname{Var}(\\hat{\\theta}_n) = \\frac{\\sigma^2}{n}$, where $\\sigma^2 = \\operatorname{Var}(k(U)) = \\int_0^1 k^2(x) dx - \\theta^2$.",
    "trap": "For an integral over a general interval $(a, b)$, substitute $x = a + (b - a)u$ so that $\\int_a^b k(x) dx = (b - a) E[k(a + (b - a)U)]$.",
    "tests": [
      "c.prob.10.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 10.12, PDF p. 466."
  },
  {
    "id": "w.prob.10.ross.prob.13",
    "course": "prob",
    "sec": "10.2",
    "marks": 5,
    "title": "Ross Problem 10.13: Polar coordinates of uniform disk distribution independence proof",
    "prompt": "Let $(X, Y)$ be uniformly distributed in the unit circle $x^2 + y^2 \\le 1$. In polar coordinates $R = \\sqrt{X^2 + Y^2}$ and $\\Theta = \\operatorname{atan2}(Y, X)$, show that $R$ and $\\Theta$ are independent, with $R^2 \\sim \\operatorname{Uniform}(0, 1)$ and $\\Theta \\sim \\operatorname{Uniform}(0, 2\\pi)$.",
    "approach": "Transform the joint density $f_{X,Y}(x, y) = 1/\\pi$ using polar coordinates with Jacobian $r$, and factor into marginal densities.",
    "solution": "The joint density of $(X, Y)$ is $f_{X, Y}(x, y) = \\frac{1}{\\pi}$ for $x^2 + y^2 \\le 1$. Transformation to polar coordinates: $x = r\\cos\\theta, y = r\\sin\\theta$, with Jacobian $J = \\left| \\det \\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix} \\right| = r(\\cos^2\\theta + \\sin^2\\theta) = r$. The joint density of $(R, \\Theta)$ is $f_{R, \\Theta}(r, \\theta) = f_{X, Y}(r\\cos\\theta, r\\sin\\theta) |J| = \\frac{r}{\\pi}$ for $0 \\le r \\le 1, 0 \\le \\theta < 2\\pi$. The marginal densities are: $f_R(r) = \\int_0^{2\\pi} \\frac{r}{\\pi} d\\theta = 2r$ for $0 \\le r \\le 1$. $f_\\Theta(\\theta) = \\int_0^1 \\frac{r}{\\pi} dr = \\frac{1}{\\pi} \\left[ \\frac{r^2}{2} \\right]_0^1 = \\frac{1}{2\\pi}$ for $0 \\le \\theta < 2\\pi$. Since $f_{R, \\Theta}(r, \\theta) = (2r)\\left(\\frac{1}{2\\pi}\\right) = f_R(r) f_\\Theta(\\theta)$, $R$ and $\\Theta$ are independent, and $\\Theta \\sim \\operatorname{Uniform}(0, 2\\pi)$. For $W = R^2$: $P(W \\le w) = P(R \\le \\sqrt{w}) = \\int_0^{\\sqrt{w}} 2r dr = [r^2]_0^{\\sqrt{w}} = w$ for $0 \\le w \\le 1$. Thus $R^2 \\sim \\operatorname{Uniform}(0, 1)$.",
    "trap": "The radial density $f_R(r) = 2r$ is not uniform; it is $R^2$ that is uniformly distributed on $(0, 1)$.",
    "tests": [
      "c.prob.10.2.1",
      "c.prob.10.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 10.13, PDF p. 466."
  },
  {
    "id": "w.prob.10.ross.prob.16",
    "course": "prob",
    "sec": "10.4",
    "marks": 4,
    "title": "Ross Problem 10.16: Importance sampling principle and variance reduction",
    "prompt": "Let $X$ have density $f(x)$ on $(0, 1)$. Show that $\\theta = \\int_0^1 g(x) dx$ can be estimated by sampling $X \\sim f$ and evaluating $g(X)/f(X)$. How does choosing $f$ similar to $|g|$ reduce variance?",
    "approach": "Write the integral as an expectation under $f$ via change of measure, and compute the variance of the importance-sampling estimator.",
    "solution": "1. Representation: $\\theta = \\int_0^1 g(x) dx = \\int_0^1 \\frac{g(x)}{f(x)} f(x) dx = E_f\\left[ \\frac{g(X)}{f(X)} \\right]$. Generating $X_1, \\dots, X_n \\sim f$, the importance sampling estimator is $\\hat{\\theta} = \\frac{1}{n} \\sum_{i=1}^n \\frac{g(X_i)}{f(X_i)}$. By the Law of Large Numbers, $\\hat{\\theta}$ is unbiased: $E[\\hat{\\theta}] = \\theta$. 2. Variance: The variance of a single draw is $\\operatorname{Var}\\left(\\frac{g(X)}{f(X)}\\right) = \\int_0^1 \\left( \\frac{g(x)}{f(x)} \\right)^2 f(x) dx - \\theta^2 = \\int_0^1 \\frac{g^2(x)}{f(x)} dx - \\theta^2$. If $f(x)$ is chosen proportional to $|g(x)|$, i.e., $f(x) = \\frac{|g(x)|}{\\int_0^1 |g(t)| dt}$, then the ratio $\\frac{g(x)}{f(x)}$ is constant (when $g \\ge 0$, $\\frac{g(x)}{f(x)} = \\theta$), making the variance identically 0! In practice, selecting an easily sampled $f(x)$ that closely mirrors the shape and peaks of $|g(x)|$ drives the variance $\\operatorname{Var}(\\hat{\\theta})$ far below standard uniform Monte Carlo.",
    "trap": "The importance density $f(x)$ must be strictly positive wherever $g(x) \\ne 0$; otherwise, regions of the integral are omitted and the estimator is biased.",
    "tests": [
      "c.prob.10.1.1",
      "c.prob.10.4.3"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 10.16, PDF pp. 466–467."
  },
  {
    "id": "w.prob.10.ross.st.1",
    "course": "prob",
    "sec": "10.2",
    "marks": 4,
    "title": "Ross Self-Test Problem 10.1: Normalizing constant and inverse transform for exponential density",
    "prompt": "A random variable $X$ has density $f(x) = C e^x$ for $0 < x < 1$. (a) Find the constant $C$. (b) Give an inverse transform method for simulating $X$.",
    "approach": "Integrate $f(x)$ to 1 to find $C$, determine the CDF $F(x)$, and solve $F(X) = U$.",
    "solution": "(a) Normalization condition: $\\int_0^1 C e^x dx = C [e^x]_0^1 = C(e - 1) = 1 \\implies C = \\frac{1}{e - 1} \\approx 0.5820$. (b) The CDF for $0 < x < 1$ is: $F(x) = \\int_0^x \\frac{e^t}{e - 1} dt = \\frac{e^x - 1}{e - 1}$. Setting $F(X) = U$ where $U \\sim \\operatorname{Uniform}(0, 1)$: $\\frac{e^X - 1}{e - 1} = U \\implies e^X - 1 = (e - 1)U \\implies e^X = 1 + (e - 1)U \\implies X = \\ln(1 + (e - 1)U)$. Algorithm: Generate $U \\sim \\operatorname{Uniform}(0, 1)$ and return $X = \\ln(1 + (e - 1)U)$.",
    "trap": "Note that $1 + (e-1)U \\in (1, e)$ for $U \\in (0, 1)$, ensuring $X = \\ln(1 + (e-1)U) \\in (0, 1)$ strictly.",
    "tests": [
      "c.prob.10.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 10, Self-Test Problem 10.1, PDF p. 467."
  },
  {
    "id": "w.prob.10.ross.st.2",
    "course": "prob",
    "sec": "10.2",
    "marks": 5,
    "title": "Ross Self-Test Problem 10.2: Rejection method for Beta(3, 3) symmetric density",
    "prompt": "Give a rejection sampling approach for simulating a random variable with density $f(x) = 30(x^2 - 2x^3 + x^4) = 30 x^2 (1-x)^2$ for $0 < x < 1$.",
    "approach": "Find the maximum of $f(x)$ on $(0, 1)$ to find the bounding constant $c$ for a uniform proposal $g(x) = 1$, and state the acceptance condition.",
    "solution": "The target density is $f(x) = 30 x^2 (1 - x)^2 = 30 [x(1 - x)]^2$ on $(0, 1)$, which is the $\\operatorname{Beta}(3, 3)$ density. Using proposal $g(x) = 1$ on $(0, 1)$: The ratio is $\\frac{f(x)}{g(x)} = 30 [x(1 - x)]^2$. Because $x(1 - x)$ is symmetric about $1/2$ and maximized at $x = 1/2$, the maximum of $f(x)$ occurs at $x = 1/2$: $c = \\max_{x \\in (0, 1)} f(x) = 30 \\left( \\frac{1}{2} \\times \\frac{1}{2} \\right)^2 = 30 \\left(\\frac{1}{4}\\right)^2 = \\frac{30}{16} = \\frac{15}{8} = 1.875$. The acceptance probability for a proposal $Y \\sim \\operatorname{Uniform}(0, 1)$ is: $\\frac{f(Y)}{c g(Y)} = \\frac{30 Y^2 (1 - Y)^2}{30/16} = 16 Y^2 (1 - Y)^2 = [4Y(1 - Y)]^2$. Algorithm: 1. Generate independent uniforms $Y, U \\sim \\operatorname{Uniform}(0, 1)$. 2. If $U \\le 16 Y^2 (1 - Y)^2$, accept $X = Y$. 3. Otherwise, reject and repeat from step 1. The expected number of iterations is $c = 1.875$.",
    "trap": "Check that $4Y(1-Y) \\le 1$ on $(0, 1)$, so $[4Y(1-Y)]^2 \\le 1$, making it a valid acceptance probability.",
    "tests": [
      "c.prob.10.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 10, Self-Test Problem 10.2, PDF p. 467."
  },
  {
    "id": "w.prob.10.ross.st.4",
    "course": "prob",
    "sec": "10.4",
    "marks": 4,
    "title": "Ross Self-Test Problem 10.4: Antithetic variable construction for general normal random variable",
    "prompt": "If $X$ is a normal random variable with mean $\\mu$ and variance $\\sigma^2$, define a random variable $Y$ that has the same distribution as $X$ and is negatively correlated with it.",
    "approach": "Reflect $X$ across its mean $\\mu$: set $Y = 2\\mu - X$.",
    "solution": "Define $Y = 2\\mu - X = \\mu - (X - \\mu)$. 1. Distribution of $Y$: Since $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$, $Y$ is a linear combination of a normal random variable, so $Y$ is also normally distributed. Its mean is $E[Y] = 2\\mu - E[X] = 2\\mu - \\mu = \\mu$. Its variance is $\\operatorname{Var}(Y) = \\operatorname{Var}(2\\mu - X) = (-1)^2 \\operatorname{Var}(X) = \\sigma^2$. Therefore, $Y \\sim \\mathcal{N}(\\mu, \\sigma^2)$, identical to $X$. 2. Negative correlation: The covariance is $\\operatorname{Cov}(X, Y) = \\operatorname{Cov}(X, 2\\mu - X) = \\operatorname{Cov}(X, -X) = -\\operatorname{Var}(X) = -\\sigma^2$. The correlation coefficient is $\\rho = \\frac{\\operatorname{Cov}(X, Y)}{\\sqrt{\\operatorname{Var}(X)\\operatorname{Var}(Y)}} = \\frac{-\\sigma^2}{\\sigma^2} = -1$. Thus $Y$ is perfectly negatively correlated with $X$ while having the exact same marginal normal distribution.",
    "trap": "Do not use $-\\mu - X$; the correct reflection around mean $\\mu$ is $\\mu - (X - \\mu) = 2\\mu - X$.",
    "tests": [
      "c.prob.10.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 10, Self-Test Problem 10.4, PDF p. 467."
  },
  {
    "id": "w.prob.10.ross.st.5",
    "course": "prob",
    "sec": "10.4",
    "marks": 5,
    "title": "Ross Self-Test Problem 10.5: Monte Carlo and control variate estimation for exponential product expectation",
    "prompt": "Let $X$ and $Y$ be independent exponential random variables with mean 1. (a) Explain how to use simulation to estimate $\\theta = E[e^{XY}]$. (b) Show how to improve the estimation using a control variate.",
    "approach": "Simulate $X, Y$ via inverse transform for the raw estimator, and use $Z = XY$ (with known mean $E[XY] = 1$) as a control variate.",
    "solution": "As printed, the target is $E[e^{XY}]$, which is infinite. To check before simulating, hold Y=y fixed. Since X has density e^(−x), $E[e^{yX}]=\\int_0^\\infty e^{(y-1)x}\\,dx$. This diverges for every y≥1. The event Y≥1 has positive probability e^(−1), so averaging over Y gives $E[e^{XY}]=\\infty$. (a) The usual finite-mean Monte Carlo guarantee therefore does not apply. A finite run produces a finite number, but it cannot establish a finite target expectation. (b) A control variate such as XY−1 cannot create a finite expectation or variance for e^(XY); the usual optimal covariance formula is undefined. This is an issue with the exercise as printed, rather than a missing simulation trick. A separately stated bounded or integrable target would be needed to pose the intended variance-reduction exercise.",
    "trap": "Always check that the target expectation and the moments needed for variance reduction exist before applying the usual Monte Carlo formulas.",
    "tests": [
      "c.prob.10.4.3"
    ],
    "provenance": "Ross, 10e, Chapter 10, Self-Test Problem 10.5, PDF pp. 467–468."
  },
  {
    "id": "w.prob.10.ross.example.1a",
    "course": "prob",
    "sec": "10.1",
    "marks": 4,
    "title": "Why the shuffle is uniform",
    "prompt": "(Adapted from Ross Example 1a.) In a list of n items, choose J_i uniformly from {1,...,i} and swap positions i and J_i for i=n down to 2. Explain why the final permutation is uniform.",
    "approach": "Fix a target permutation and count the unique sequence of choices that produces it.",
    "solution": "For any prescribed final permutation, the item that must occupy position n is selected with probability 1/n. Conditional on this choice, the remaining n−1 items are uniformly permuted by the same procedure; by induction this has probability 1/(n−1)!. Thus the target ordering has probability (1/n)(1/(n−1)!)=1/n!. Every permutation is equally likely.",
    "trap": "At step i, the draw must be among the first i positions; choosing from all n positions breaks the argument.",
    "tests": [
      "c.prob.10.1.1",
      "c.prob.10.1.2"
    ],
    "provenance": "Ross, 10e, Chapter 10, Example 1a; original wording and worked explanation."
  },
  {
    "id": "w.prob.10.ross.example.3b",
    "course": "prob",
    "sec": "10.3",
    "marks": 4,
    "title": "Simulate a binomial count from uniforms",
    "prompt": "Describe a method using n independent Uniform(0,1) values to simulate Binomial(n,p), and justify its law. Also give the one-uniform cumulative-probability algorithm used for faster binomial simulation.",
    "approach": "Convert each uniform into a success/failure indicator and add.",
    "solution": "Generate U₁,...,Uₙ independently uniform and set I_j=1{U_j<p}. Then P(I_j=1)=p, the indicators are independent, and X=ΣI_j counts successes in n independent Bernoulli(p) trials. Therefore X~Binomial(n,p). Alternatively, draw one uniform U. Start at k=0 with $p_0=(1-p)^n$ and cumulative mass C=p_0. While U>C, increase k by one, update the next probability by $p_k=p_{k-1}(n-k+1)p/(k(1-p))$, and add it to C. Return k. Each value is returned over an interval whose length is its binomial probability. Handle p=0 by returning 0 and p=1 by returning n. The n-uniform method is simple; the cumulative method uses one uniform and a varying number of probability updates.",
    "trap": "Using one shared uniform for every indicator makes the trial outcomes dependent and does not produce the binomial law.",
    "tests": [
      "c.prob.10.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 10, Example 3b; original wording and worked explanation."
  },
  {
    "id": "w.prob.10.ross.example.4a",
    "course": "prob",
    "sec": "10.4",
    "marks": 5,
    "title": "Estimate π with a dartboard, then reduce the scatter by conditioning",
    "prompt": "Draw a point uniformly in the square from −1 to 1 on both axes. (a) Use the indicator of being inside the unit circle to estimate π. (b) Average out the vertical coordinate instead, given the horizontal coordinate. Show that the new estimator has the same target and no larger variance.",
    "approach": "First use the area ratio; then compute the fraction of the vertical line segment inside the circle.",
    "solution": "(a) Draw independent uniforms U₁,U₂ and set V₁=2U₁−1, V₂=2U₂−1. The point is uniform in a square of area 4. The unit circle has area π, so $I=\\mathbf1_{\\{V_1^2+V_2^2\\le1\\}}$ has mean π/4. For k independent points, $4\\bar I$ estimates π. (b) Given V₁=v, the allowed vertical interval is $[-\\sqrt{1-v^2},\\sqrt{1-v^2}]$. Its length divided by the full vertical length 2 is $\\sqrt{1-v^2}$. Thus $E[I\\mid V_1]=\\sqrt{1-V_1^2}$. Average these conditional probabilities instead of the yes/no indicators and multiply by 4. The target is unchanged by averaging in stages. The total-variance identity gives $\\operatorname{Var}(I)=E[\\operatorname{Var}(I\\mid V_1)]+\\operatorname{Var}(E[I\\mid V_1])$, so the new per-draw variance cannot exceed the old one. In fact it is $2/3-\\pi^2/16$, compared with $(\\pi/4)(1-\\pi/4)$ for I.",
    "trap": "The circle boundary is a square-root height; 1−v² itself is not the allowed half-height.",
    "tests": [
      "c.prob.10.1.1",
      "c.prob.10.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 10, Example 4a; original wording and worked explanation."
  },
  {
    "id": "w.prob.10.ross.problem.5",
    "course": "prob",
    "sec": "10.2",
    "marks": 4,
    "title": "Inverse transform for a Weibull law",
    "prompt": "Use one uniform draw to simulate the Weibull distribution with cumulative probability $F(t)=1-e^{-at^\\beta}$ for $t\\ge0$, where $a>0$ and $\\beta>0$. Explain how this relates to the scale-parameter convention.",
    "approach": "Set F(x)=U and solve for x; 1−U is uniform whenever U is.",
    "solution": "Draw $U$ uniformly from $(0,1)$. Solve $u=1-e^{-at^\\beta}$ to obtain $T=[-\\ln(1-U)/a]^{1/\\beta}$. Since $1-U$ is also uniform, $T=(-\\ln U/a)^{1/\\beta}$ works too. For $t\\ge0$, $P(T\\le t)=P(U\\ge e^{-at^\\beta})=1-e^{-at^\\beta}$. The scale convention $F(t)=1-e^{-(t/s)^\\beta}$ uses $s=a^{-1/\\beta}$; its inverse is $s(-\\ln U)^{1/\\beta}$. In particular, $a=1$ gives $(-\\ln U)^{1/\\beta}$.",
    "trap": "Ross uses a coefficient a in the exponent. It is related to the Weibull scale by s=a^(−1/β); these two parameters cannot be substituted for one another.",
    "tests": [
      "c.prob.10.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 5; original wording and worked explanation."
  },
  {
    "id": "w.prob.10.ross.problem.14",
    "course": "prob",
    "sec": "10.4",
    "marks": 5,
    "title": "Equal moments from symmetric and positive uniform inputs",
    "prompt": "Let V be uniform on (−1,1) and U uniform on (0,1). Show that $\\sqrt{1-V^2}$ and $\\sqrt{1-U^2}$ have the same mean and variance, and find those values.",
    "approach": "Use the distribution of |V|, then compute the first two moments.",
    "solution": "The absolute value |V| is uniform on (0,1), so both transformed variables have the same distribution. Their mean is the quarter-circle area $\\int_0^1\\sqrt{1-u^2}\\,du=\\pi/4$. Their second moment is $\\int_0^1(1-u^2)\\,du=2/3$. Therefore each variance is $2/3-\\pi^2/16$. The two input intervals differ, but the transformation depends only on the input’s absolute value.",
    "trap": "Uniform(−1,1) has density 1/2; do not forget this if integrating directly.",
    "tests": [
      "c.prob.10.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 14; original wording and worked explanation."
  },
  {
    "id": "w.prob.10.ross.problem.15",
    "course": "prob",
    "sec": "10.4",
    "marks": 5,
    "title": "Choose the control-variate coefficient",
    "prompt": "(Adapted from Ross Problem 10.15.) Let W=Y+a(Z−E[Z]), where E[Z] is known. Derive the value of a minimizing Var(W) and the resulting minimum variance.",
    "approach": "Expand the variance as a quadratic in a and complete the square or differentiate.",
    "solution": "Var(W)=Var(Y)+a²Var(Z)+2aCov(Y,Z). If Var(Z)>0, the derivative is 2aVar(Z)+2Cov(Y,Z); setting it to zero gives a*=−Cov(Y,Z)/Var(Z). Substituting yields Var(W)=Var(Y)−Cov(Y,Z)²/Var(Z), which is nonnegative and no larger than Var(Y).",
    "trap": "Centering Z by its known mean keeps the estimator unbiased; changing a does not change E[W]=E[Y].",
    "tests": [
      "c.prob.10.4.3"
    ],
    "provenance": "Ross, 10e, Chapter 10, Problem 15; original wording and worked explanation."
  },
  {
    "id": "w.prob.10.ross.selftest.3",
    "course": "prob",
    "sec": "10.3",
    "marks": 4,
    "title": "Discrete inverse-transform table",
    "prompt": "A variable takes values 1, 2, 3, 4 with chances .15, .20, .35, .30. Give an efficient simulation algorithm using one uniform draw, and explain why it works.",
    "approach": "Take cumulative sums and assign consecutive intervals of those lengths.",
    "solution": "Draw uniform $U$ between 0 and 1. Test the largest probabilities first: if $U<.35$, return 3; otherwise if $U<.65$, return 4; otherwise if $U<.85$, return 2; otherwise return 1. The interval lengths are .35, .30, .20, .15, so each output has its required chance. A straightforward sequential implementation uses on average $1(.35)+2(.30)+3(.20)+3(.15)=2$ comparisons (the last outcome needs no final test). Descending probability order minimizes this average for sequential interval tests. The original-order cumulative intervals $(0,.15],(.15,.35],(.35,.70],(.70,1)$ also work but need $1(.15)+2(.20)+3(.35+.30)=2.5$ comparisons in this implementation. Endpoints have probability zero.",
    "trap": "The values do not need to be tested in numerical order. Efficient sequential simulation checks higher-probability outputs earlier.",
    "tests": [
      "c.prob.10.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 10, Self-Test Problem 3; original wording and worked explanation."
  }
]
);
