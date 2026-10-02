var QUESTIONS = QUESTIONS || [];
QUESTIONS.push(...
[
  {
    "id": "w.prob.9.1.1",
    "course": "prob",
    "sec": "9.1",
    "marks": 4,
    "title": "Condition on a Poisson count",
    "prompt": "(Adapted from Ross Problem 9.1.) Customers arrive according to a homogeneous Poisson process. Given that exactly two arrive during the first hour, find the probability (a) both arrived in the first 20 minutes, and (b) at least one arrived in the first 20 minutes.",
    "approach": "Condition on the total count in the hour. The two arrival locations are uniform over the hour; equivalently, split the hour into thirds and use conditional Poisson counts.",
    "solution": "Given N(1)=2, the two arrival times are independent uniform locations in the hour (up to ordering). Each is in the first third with probability 1/3. Thus (a) (1/3)²=1/9. (b) use the complement that both are outside: 1−(2/3)²=5/9.",
    "trap": "Do not use the unconditional Poisson probability of arrivals in the first 20 minutes after conditioning on exactly two arrivals during the full hour.",
    "tests": [
      "c.prob.9.1.1"
    ]
  },
  {
    "id": "w.prob.9.1.2",
    "course": "prob",
    "sec": "9.1",
    "marks": 4,
    "title": "Counts and waiting times",
    "prompt": "A Poisson process has rate 3 events per hour. Find the probability of no events in a 10-minute interval, and the expected waiting time until the third event after the interval begins.",
    "approach": "Use Poisson(λt) for the count and Gamma waiting-time mean n/λ for the third arrival.",
    "solution": "Ten minutes is 1/6 hour, so the interval count has parameter λt=3/6=1/2. Thus P(no event)=e^(−1/2). The third arrival time is Gamma(shape 3, rate 3 per hour), with mean 3/3=1 hour.",
    "trap": "Convert time units before multiplying by the rate. The first waiting time mean is 1/λ; the third arrival mean is 3/λ.",
    "tests": [
      "c.prob.9.1.1",
      "c.prob.9.1.2"
    ]
  },
  {
    "id": "w.prob.9.2.1",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Three-step weather chain",
    "prompt": "(Adapted from Ross Problem 9.5.) Rain today has probability 1/2. If it rains today, tomorrow is rainy with probability .7; if it is dry today, tomorrow is rainy with probability .3. Find the probability it rains three days from today.",
    "approach": "Use the two-state transition matrix or update the rain probability one step at a time.",
    "solution": "Let r_n be the rain probability n days after today. The update is r_{n+1}=.7r_n+.3(1−r_n)=.3+.4r_n. Starting r_0=.5 gives r_1=r_2=r_3=.5. Equivalently the initial distribution (.5,.5) is stationary for P=[[.7,.3],[.3,.7]].",
    "trap": "The transition probability conditioned on today’s state is not itself the unconditional probability for a future day.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.2"
    ]
  },
  {
    "id": "w.prob.9.2.2",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Stationary mood proportions",
    "prompt": "(Adapted from Ross Problem 9.8.) Buffy’s states are cheerful C, so-so S, gloomy G. The transition rows are C:(.7,.2,.1), S:(.4,.3,.3), G:(.2,.4,.4). Find the stationary probability of being cheerful.",
    "approach": "Solve π=πP together with π_C+π_S+π_G=1.",
    "solution": "The stationary equations give .3π_C=.4π_S+.2π_G and .7π_S=.2π_C+.4π_G. Solving with the normalization yields (π_C,π_S,π_G)=(30/59,16/59,13/59). Thus Buffy is cheerful in the long run with probability 30/59≈.5085.",
    "trap": "The stationary vector is a row vector under the row-stochastic convention; also normalize the solution to sum to one.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.3"
    ]
  },
  {
    "id": "w.prob.9.3.1",
    "course": "prob",
    "sec": "9.3",
    "marks": 4,
    "title": "Entropy of a fair-dice sum",
    "prompt": "(Adapted from Ross Problem 9.12.) Two fair dice are rolled. Write the entropy of their sum exactly as a finite logarithmic sum.",
    "approach": "The sum s has 6−|7−s| ordered outcomes for s=2,...,12. Substitute those masses in Shannon entropy.",
    "solution": "The probabilities for sums 2 through 12 are (1,2,3,4,5,6,5,4,3,2,1)/36. Therefore H(S)=−Σ_{s=2}^{12}[(6−|7−s|)/36]log₂[(6−|7−s|)/36] bits. Grouping equal terms, H(S)=−2[(1/36)log₂(1/36)+(2/36)log₂(2/36)+(3/36)log₂(3/36)+(4/36)log₂(4/36)+(5/36)log₂(5/36)]−(6/36)log₂(6/36).",
    "trap": "The sum is not uniform on eleven values; central sums have more underlying dice outcomes.",
    "tests": [
      "c.prob.9.3.1"
    ]
  },
  {
    "id": "w.prob.9.3.2",
    "course": "prob",
    "sec": "9.3",
    "marks": 4,
    "title": "Maximum entropy on a finite support",
    "prompt": "(Adapted from Ross Problem 9.13.) Prove that a variable with at most n possible values has entropy at most log₂ n, with equality for the uniform law.",
    "approach": "Use nonnegativity of relative entropy between the law p and the uniform distribution u_i=1/n.",
    "solution": "For positive p_i, Gibbs’ inequality gives Σ_i p_i log₂(p_i/u_i)≥0. Since u_i=1/n, the left side is Σp_i log₂p_i+log₂n=−H(X)+log₂n. Hence H(X)≤log₂n. Equality in Gibbs’ inequality holds exactly when p_i=u_i for all i, so the uniform law uniquely maximizes entropy on n points. Zero masses follow by continuity and cannot attain equality across all n slots.",
    "trap": "The equality claim requires all n possible values to have equal positive mass.",
    "tests": [
      "c.prob.9.3.1",
      "c.prob.9.3.3"
    ]
  },
  {
    "id": "w.prob.9.4.1",
    "course": "prob",
    "sec": "9.4",
    "marks": 5,
    "title": "Kraft check and source coding lower bound",
    "prompt": "A source has four symbols with probabilities (1/2,1/4,1/8,1/8). For codeword lengths (1,2,3,3), verify Kraft’s inequality, compute average length and entropy, and interpret the result.",
    "approach": "Compute Σ2^(−l_i), L=Σp_il_i, and H=−Σp_i log₂p_i.",
    "solution": "Kraft sum=2^−1+2^−2+2·2^−3=1, so the lengths are feasible for a prefix-free binary code. Average length L=(1/2)(1)+(1/4)(2)+(1/8)(3)+(1/8)(3)=7/4=1.75 bits. Entropy is the same sum because −log₂p_i=(1,2,3,3), so H=1.75 bits. This code attains the entropy lower bound exactly for this dyadic source.",
    "trap": "A Kraft sum below one establishes feasibility of some prefix code with those lengths, not that any arbitrary strings of those lengths form a prefix code.",
    "tests": [
      "c.prob.9.3.1",
      "c.prob.9.4.1"
    ]
  },
  {
    "id": "w.prob.9.4.2",
    "course": "prob",
    "sec": "9.4",
    "marks": 5,
    "title": "Binary symmetric channel capacity",
    "prompt": "(Adapted from Ross Problem 9.18.) A binary symmetric channel transmits a bit correctly with probability p. Explain why the maximizing input has probability 1/2 for each bit and give its capacity.",
    "approach": "The output entropy is maximized by a uniform output; for a symmetric channel, a uniform input produces that output. Subtract the conditional output entropy given the input.",
    "solution": "For input bit X and received bit Y, information rate is H(Y)−H(Y|X). The channel is symmetric, and a uniform input makes Y uniform, maximizing H(Y)=1 bit. Given X, Y is correct with probability p and flipped with probability 1−p, so H(Y|X)=H_b(p)=−p log₂p−(1−p)log₂(1−p). Therefore C=1−H_b(p)=1+p log₂p+(1−p)log₂(1−p) bits per channel use. (This uses Ross’s p=correct-transmission convention.)",
    "trap": "The expression depends on whether p denotes correct transmission or crossover probability; state the convention.",
    "tests": [
      "c.prob.9.3.1",
      "c.prob.9.4.2"
    ]
  },
  {
    "id": "w.prob.9.ross.example.2a",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Ross Example 2a: Two-state weather Markov chain model",
    "prompt": "Suppose tomorrow's weather depends on past weather only through today's conditions. If it rains today, it rains tomorrow with probability $\\alpha$; if it does not rain today, it rains tomorrow with probability $\\beta$. (a) Formulate this process as a two-state Markov chain and write its transition matrix $P$. (b) Express the joint probability that it rains on days 0, 1, and 2, but not on day 3, given initial rain probability $P(X_0 = 0) = p_0$.",
    "approach": "Define state 0 as rainy and state 1 as dry. Construct the transition matrix from given conditional probabilities and use the Markov path product formula.",
    "solution": "(a) Let state 0 denote rain and state 1 denote no rain. The one-step transition probabilities are $P_{00} = \\alpha, P_{01} = 1 - \\alpha$, and $P_{10} = \\beta, P_{11} = 1 - \\beta$. Thus the transition probability matrix is $P = \\begin{pmatrix} \\alpha & 1 - \\alpha \\\\ \\beta & 1 - \\beta \\end{pmatrix}$. (b) By the Markov property, the probability of the trajectory $X_0 = 0, X_1 = 0, X_2 = 0, X_3 = 1$ is $P(X_0 = 0) P_{00} P_{00} P_{01} = p_0 \\alpha^2 (1 - \\alpha)$.",
    "trap": "Ensure row indices correspond to current state and column indices to next state, so rows sum to 1.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.2"
    ],
    "provenance": "Ross, 10e, §9.2, Example 2a, PDF p. 430."
  },
  {
    "id": "w.prob.9.ross.example.2b",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Ross Example 2b: Gambler's ruin Markov chain formulation",
    "prompt": "A gambler bets 1 unit per round, winning with probability $p$ and losing with probability $1-p$. The game stops when the gambler's fortune reaches 0 or $M$. Formulate this process as a Markov chain by specifying the state space and the transition matrix entries.",
    "approach": "Track the gambler's current fortune $X_n \\in \\{0, 1, \\dots, M\\}$. Identify interior birth-death transitions and absorbing boundary conditions at 0 and $M$.",
    "solution": "Let $X_n$ denote the gambler's fortune after $n$ rounds, with state space $S = \\{0, 1, \\dots, M\\}$. For intermediate states $i \\in \\{1, 2, \\dots, M-1\\}$, the transition probabilities are $P_{i, i+1} = p$ (win 1 unit) and $P_{i, i-1} = 1 - p$ (lose 1 unit), with all other $P_{ij} = 0$. Since the gambler quits upon reaching 0 (ruin) or $M$ (target goal), states 0 and $M$ are absorbing states: $P_{00} = 1, P_{MM} = 1$, and $P_{0j}=0$ for $j\\ne0$ and $P_{Mj}=0$ for $j\\ne M$.",
    "trap": "States 0 and $M$ are absorbing boundaries with $P_{00} = P_{MM} = 1$, not reflecting boundaries.",
    "tests": [
      "c.prob.9.2.1"
    ],
    "provenance": "Ross, 10e, §9.2, Example 2b, PDF p. 430."
  },
  {
    "id": "w.prob.9.ross.example.2c",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Ross Example 2c: Paul and Tatyana Ehrenfest urn model transitions",
    "prompt": "In the Ehrenfest model for molecular diffusion, $M$ molecules are distributed between two urns. At each step, a molecule is selected uniformly at random from all $M$ molecules and moved to the other urn. Let $X_n$ be the number of molecules in urn 1. Find the transition probabilities $P_{ij}$ of this Markov chain.",
    "approach": "At state $i$, compute the probability that the randomly chosen molecule comes from urn 1 (decreasing the count by 1) or from urn 2 (increasing the count by 1).",
    "solution": "The state space is $\\{0, 1, \\dots, M\\}$, representing the count of molecules in urn 1. When the current state is $X_n = i$, urn 1 contains $i$ molecules and urn 2 contains $M - i$ molecules. Each of the $M$ molecules is chosen with equal probability $1/M$. If a molecule from urn 1 is picked (probability $i/M$), it is transferred to urn 2, transitioning to state $i - 1$: $P_{i, i-1} = \\frac{i}{M}$ for $1\\le i\\le M$. If a molecule from urn 2 is picked (probability $(M-i)/M$), it is transferred to urn 1, transitioning to state $i + 1$: $P_{i, i+1} = \\frac{M-i}{M}$ for $0\\le i<M$. All other transition probabilities are zero: $P_{ij} = 0$ for $|j - i| \\ne 1$.",
    "trap": "Transitions can only change the count by exactly $+1$ or $-1$; remaining in the same state has probability 0 ($P_{ii} = 0$).",
    "tests": [
      "c.prob.9.2.1"
    ],
    "provenance": "Ross, 10e, §9.2, Example 2c, PDF pp. 430–431."
  },
  {
    "id": "w.prob.9.ross.example.2d",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Ross Example 2d: Simple random walk transition probabilities",
    "prompt": "A particle moves on the integers $\\mathbb{Z}$, taking a step $+1$ with probability $p$ and a step $-1$ with probability $1-p$. Find the $n$-step transition probability $P_{ij}^{(n)}$ of reaching state $j$ from state $i$ in $n$ steps.",
    "approach": "Set up equations for the number of right and left steps among $n$ total steps, and apply the binomial distribution.",
    "solution": "Let $R$ be the number of steps to the right ($+1$) and $L = n - R$ the number of steps to the left ($-1$). The net displacement from state $i$ is $j - i = R - L = R - (n - R) = 2R - n$. Solving for $R$ gives $R = \\frac{n + j - i}{2}$. For this transition to be possible, $R$ must be an integer between 0 and $n$, which requires $n + j - i$ to be an even integer with $|j - i| \\le n$. Since the $n$ steps are independent Bernoulli trials with probability $p$ of moving right, the $n$-step transition probability is the binomial probability: $P_{ij}^{(n)} = \\binom{n}{(n+j-i)/2} p^{(n+j-i)/2} (1-p)^{(n-j+i)/2}$ if $n + j - i$ is even and $0 \\le \\frac{n+j-i}{2} \\le n$, and $P_{ij}^{(n)} = 0$ otherwise.",
    "trap": "Check the parity condition: in an odd number of steps, the displacement $j - i$ must be odd; in an even number of steps, it must be even.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.2"
    ],
    "provenance": "Ross, 10e, §9.2, Example 2d, PDF pp. 431–432."
  },
  {
    "id": "w.prob.9.ross.example.2e",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Ross Example 2e: Weather chain stationary probabilities",
    "prompt": "For the two-state weather Markov chain of Example 2a with rain probability $\\alpha$ following rain and $\\beta$ following dry weather: (a) Derive the stationary distribution $(\\pi_0, \\pi_1)$ in terms of $\\alpha$ and $\\beta$. (b) Evaluate $\\pi_0$ and $\\pi_1$ when $\\alpha = 0.6$ and $\\beta = 0.3$.",
    "approach": "Solve the balance equations $\\pi = \\pi P$ subject to $\\pi_0 + \\pi_1 = 1$, and substitute the given parameter values.",
    "solution": "(a) The stationary distribution satisfies $\\pi_0 = \\alpha \\pi_0 + \\beta \\pi_1$ and $\\pi_0 + \\pi_1 = 1$. Rearranging the first equation gives $(1 - \\alpha) \\pi_0 = \\beta \\pi_1$. Substituting $\\pi_1 = 1 - \\pi_0$ yields $(1 - \\alpha) \\pi_0 = \\beta (1 - \\pi_0) \\implies (1 - \\alpha + \\beta) \\pi_0 = \\beta$. Thus $\\pi_0 = \\frac{\\beta}{1 + \\beta - \\alpha}$ and $\\pi_1 = 1 - \\pi_0 = \\frac{1 - \\alpha}{1 + \\beta - \\alpha}$. (b) For $\\alpha = 0.6$ and $\\beta = 0.3$: $\\pi_0 = \\frac{0.3}{1 + 0.3 - 0.6} = \\frac{0.3}{0.7} = \\frac{3}{7} \\approx 0.4286$, and $\\pi_1 = \\frac{1 - 0.6}{0.7} = \\frac{0.4}{0.7} = \\frac{4}{7} \\approx 0.5714$. In the long run, it rains on $3/7$ of days. The formula requires $1-\\alpha+\\beta>0$. When $\\alpha=1,\\beta=0$, both states are absorbing and every initial mix is stationary. For $0<\\alpha,\\beta<1$, the chain is irreducible and aperiodic, so its state probabilities converge to this stationary mix.",
    "trap": "Check that $\\pi_0 + \\pi_1 = 1$ and both probabilities are non-negative for valid transition probabilities $\\alpha, \\ beta \\in (0, 1)$.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.3"
    ],
    "provenance": "Ross, 10e, §9.2, Example 2e, PDF pp. 432–433."
  },
  {
    "id": "w.prob.9.ross.example.2f",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Ross Example 2f: Ehrenfest urn model binomial stationary distribution",
    "prompt": "In the Ehrenfest urn model with $M$ molecules, verify that the stationary distribution is binomial: $\\pi_j = \\binom{M}{j} \\left(\\frac{1}{2}\\right)^M$ for $j = 0, 1, \\dots, M$.",
    "approach": "Substitute $\\pi_j = \\binom{M}{j} (1/2)^M$ into the stationary balance equations $\\pi_j = \\sum_k \\pi_k P_{kj}$ and verify equality for all states.",
    "solution": "The stationary equations for the Ehrenfest chain are: $\\pi_0 = \\pi_1 \\frac{1}{M}$, $\\pi_M = \\pi_{M-1} \\frac{1}{M}$, and for $1 \\le j \\le M-1$: $\\pi_j = \\pi_{j-1} \\frac{M - j + 1}{M} + \\pi_{j+1} \\frac{j + 1}{M}$. Substituting $\\pi_j = \\binom{M}{j} (1/2)^M$: For boundary state $j = 0$: $\\pi_1 \\frac{1}{M} = \\binom{M}{1} (1/2)^M \\frac{1}{M} = M (1/2)^M \\frac{1}{M} = (1/2)^M = \\binom{M}{0}(1/2)^M = \\pi_0$. For intermediate state $j$: $\\pi_{j-1} \\frac{M - j + 1}{M} = \\frac{M!}{(j-1)!(M-j+1)!} (1/2)^M \\frac{M - j + 1}{M} = \\frac{(M-1)!}{(j-1)!(M-j)!} (1/2)^M = \\frac{j}{M} \\binom{M}{j} (1/2)^M$. Similarly, $\\pi_{j+1} \\frac{j+1}{M} = \\frac{M!}{(j+1)!(M-j-1)!} (1/2)^M \\frac{j+1}{M} = \\frac{(M-1)!}{j!(M-j-1)!} (1/2)^M = \\frac{M-j}{M} \\binom{M}{j} (1/2)^M$. Adding the two terms: $\\pi_{j-1} P_{j-1, j} + \\pi_{j+1} P_{j+1, j} = \\left( \\frac{j}{M} + \\frac{M-j}{M} \\right) \\binom{M}{j} (1/2)^M = \\binom{M}{j} (1/2)^M = \\pi_j$. Finally, $\\sum_{j=0}^M \\pi_j = (1/2)^M \\sum_{j=0}^M \\binom{M}{j} = (1/2)^M 2^M = 1$. Thus the binomial distribution is the unique stationary distribution. Assume $M\\ge1$. Each move changes the parity of the count, so the chain has period 2. This verifies the unique stationary distribution and time-average proportions; starting from a fixed count, the distribution at step $n$ does not converge to this binomial mix.",
    "trap": "Remember that each molecule acts independently at equilibrium, making the steady-state molecule count $\\operatorname{Binomial}(M, 1/2)$.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.3"
    ],
    "provenance": "Ross, 10e, §9.2, Example 2f, PDF p. 433."
  },
  {
    "id": "w.prob.9.ross.example.4b",
    "course": "prob",
    "sec": "9.4",
    "marks": 5,
    "title": "Ross Example 4b: Block coding of 10 coin tosses and BSC repetition codes",
    "prompt": "Ten independent coin tosses with head chance $p$ must be sent as a binary message. (a) Find the entropy of the complete sequence and the bounds on the minimum average code length. (b) Explain the fair-coin case and calculate the bounds for $p=1/4$. As extra practice, group the $p=1/4$ tosses into pairs and use codewords $(0,10,110,111)$, assigned to $(0,0),(0,1),(1,0),(1,1)$. Find its average length. (c) As channel practice, calculate the error chance of a three-repetition majority code when each bit is correct with chance $0.8$.",
    "approach": "Use additivity of entropy for iid variables, calculate expected codeword length for the 5-pair code, and apply binomial majority voting for the BSC.",
    "solution": "For general $p$, independence gives $H(X_1,\\ldots,X_{10})=-10[p\\log_2p+(1-p)\\log_2(1-p)]=10H_b(p)$. Every code has average length $L\\ge H$, and a prefix-free code exists with $L<H+1$. For $p=1/2$, $H=10$, so sending the actual ten bits is optimal. For $p=1/4$, $H\\approx8.1128$, and an optimal code lies between $8.1128$ and $9.1128$ average bits. (a) For a single toss with $p = 1/4$, $H(X_1) = -\\left[ \\frac{1}{4}\\log_2\\frac{1}{4} + \\frac{3}{4}\\log_2\\frac{3}{4} \\right] = -\\left[ \\frac{1}{4}(-2) + \\frac{3}{4}(\\log_2 3 - 2) \\right] = 2 - \\frac{3}{4}(1.58496) \\approx 0.8113$ bits. By independence, $H(X_1, \\dots, X_{10}) = 10 H(X_1) \\approx 8.113$ bits. (b) For each pair $(X_i, X_{i+1})$, outcomes $(0,0), (0,1), (1,0), (1,1)$ have probabilities $(3/4)^2 = 9/16, (1/4)(3/4) = 3/16, 3/16, 1/16$. Codeword lengths are $1, 2, 3, 3$ bits. Average length per pair is $1(9/16) + 2(3/16) + 3(3/16) + 3(1/16) = \\frac{9 + 6 + 9 + 3}{16} = \\frac{27}{16} = 1.6875$ bits. For 5 pairs, the total average length is $5 \\times 1.6875 = \\frac{135}{16} \\approx 8.44$ bits (saving $1.56$ bits over raw 10-bit transmission). (c) On a BSC with crossover probability $1 - p = 0.2$, a 3-repetition code fails if 2 or 3 bits flip. By binomial probability: $P(\\text{error}) = \\binom{3}{2}(0.2)^2(0.8) + \\binom{3}{3}(0.2)^3 = 3(0.04)(0.8) + 0.008 = 0.096 + 0.008 = 0.104$.",
    "trap": "The 3-repetition code reduces bit error rate from 0.20 to 0.104, but cuts the transmission rate to 1/3 bit per channel use.",
    "tests": [
      "c.prob.9.3.1",
      "c.prob.9.4.1",
      "c.prob.9.4.2"
    ],
    "provenance": "Ross, 10e, §9.4, Example 4b, PDF pp. 440–442."
  },
  {
    "id": "w.prob.9.ross.prob.2",
    "course": "prob",
    "sec": "9.1",
    "marks": 4,
    "title": "Ross Problem 9.2: Highway crossing survival probability under Poisson traffic",
    "prompt": "Cars pass a point on a highway according to a Poisson process with rate 3 cars per minute. A pedestrian takes $s$ seconds to run blindly across the road, surviving if and only if no cars pass during the crossing. Find the survival probability for: (a) $s = 2$, (b) $s = 5$, (c) $s = 10$, and (d) $s = 20$ seconds.",
    "approach": "Convert rate to cars per second ($\\lambda = 3/60 = 1/20$ car/sec) and evaluate $P(N(s) = 0) = e^{-\\lambda s}$.",
    "solution": "The rate is $\\lambda = \\frac{3}{60} = \\frac{1}{20} = 0.05$ cars per second. The number of cars in $s$ seconds follows a Poisson distribution with mean $\\lambda s = s/20$. The pedestrian is uninjured if $N(s) = 0$, which has probability $P(N(s) = 0) = e^{-\\lambda s} = e^{-s/20}$. (a) For $s = 2$: $P = e^{-2/20} = e^{-0.10} \\approx 0.9048$. (b) For $s = 5$: $P = e^{-5/20} = e^{-0.25} \\approx 0.7788$. (c) For $s = 10$: $P = e^{-10/20} = e^{-0.50} \\approx 0.6065$. (d) For $s = 20$: $P = e^{-20/20} = e^{-1.0} \\approx 0.3679$.",
    "trap": "Ensure time units are consistent: rate is given in cars per minute, while crossing time is given in seconds.",
    "tests": [
      "c.prob.9.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 9.2, PDF p. 444."
  },
  {
    "id": "w.prob.9.ross.prob.3",
    "course": "prob",
    "sec": "9.1",
    "marks": 4,
    "title": "Ross Problem 9.3: Agile pedestrian crossing survival with single-car escape",
    "prompt": "Under the Poisson traffic of Problem 9.2 (rate $\\lambda = 3$ cars/min), suppose the pedestrian is agile enough to escape if encountering at most 1 car, but is injured if encountering 2 or more cars. Find the survival probability when crossing takes $s$ seconds for: (a) $s = 5$, (b) $s = 10$, (c) $s = 20$, and (d) $s = 30$ seconds.",
    "approach": "Compute $P(N(s) \\le 1) = e^{-\\lambda s}(1 + \\lambda s)$ with $\\lambda = 1/20$ per second.",
    "solution": "The traffic rate is $\\lambda = 1/20 = 0.05$ cars per second. The pedestrian survives if $N(s) \\le 1$. In a Poisson process, $P(N(s) \\le 1) = P(N(s) = 0) + P(N(s) = 1) = e^{-\\lambda s} + e^{-\\lambda s}(\\lambda s) = e^{-\\lambda s}(1 + \\lambda s)$. (a) For $s = 5$: $\\lambda s = 5/20 = 0.25$, so $P = e^{-0.25}(1 + 0.25) = 1.25 e^{-0.25} \\approx 1.25(0.77880) \\approx 0.9735$. (b) For $s = 10$: $\\lambda s = 10/20 = 0.5$, so $P = e^{-0.5}(1 + 0.5) = 1.5 e^{-0.5} \\approx 1.5(0.60653) \\approx 0.9098$. (c) For $s = 20$: $\\lambda s = 20/20 = 1.0$, so $P = e^{-1}(1 + 1) = 2 e^{-1} \\approx 2(0.36788) \\approx 0.7358$. (d) For $s = 30$: $\\lambda s = 30/20 = 1.5$, so $P = e^{-1.5}(1 + 1.5) = 2.5 e^{-1.5} \\approx 2.5(0.22313) \\approx 0.5578$.",
    "trap": "The survival event is $N(s) \\in \\{0, 1\\}$, not just $N(s) = 1$.",
    "tests": [
      "c.prob.9.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 9.3, PDF p. 444."
  },
  {
    "id": "w.prob.9.ross.prob.4",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Ross Problem 9.4: Transition matrix for two urns with three balls each",
    "prompt": "Two urns each contain 3 balls, with 3 white and 3 black balls distributed between them. The state $i \\in \\{0, 1, 2, 3\\}$ is the number of white balls in urn 1. At each stage, 1 ball is drawn uniformly from each urn and placed in the other urn. Compute the transition probability matrix $P$.",
    "approach": "At state $i$, urn 1 has $i$ white and $3-i$ black balls, while urn 2 has $3-i$ white and $i$ black balls. Determine probabilities of drawing (black from urn 1, white from urn 2), (white from urn 1, black from urn 2), or matching colors.",
    "solution": "Let $X_n = i$ be the number of white balls in urn 1. Urn 1 has $i$ white and $3-i$ black balls; urn 2 has $3-i$ white and $i$ black balls. Drawing one ball from each urn: To increase white balls to $i+1$, we must draw a black ball from urn 1 and a white ball from urn 2: $P_{i, i+1} = \\left(\\frac{3-i}{3}\\right) \\left(\\frac{3-i}{3}\\right) = \\frac{(3-i)^2}{9}$. To decrease white balls to $i-1$, we must draw a white ball from urn 1 and a black ball from urn 2: $P_{i, i-1} = \\left(\\frac{i}{3}\\right) \\left(\\frac{i}{3}\\right) = \\frac{i^2}{9}$. To leave the count unchanged, both drawn balls must have the same color: $P_{ii} = \\left(\\frac{i}{3}\\right)\\left(\\frac{3-i}{3}\\right) + \\left(\\frac{3-i}{3}\\right)\\left(\\frac{i}{3}\\right) = \\frac{2i(3-i)}{9}$. Evaluating for each state $i \\in \\{0, 1, 2, 3\\}$: State 0: $P_{00} = 0, P_{01} = 9/9 = 1, P_{02} = 0, P_{03} = 0$. State 1: $P_{10} = 1/9, P_{11} = 4/9, P_{12} = 4/9, P_{13} = 0$. State 2: $P_{20} = 0, P_{21} = 4/9, P_{22} = 4/9, P_{23} = 1/9$. State 3: $P_{30} = 0, P_{31} = 0, P_{32} = 9/9 = 1, P_{33} = 0$. In matrix form: $P = \\begin{pmatrix} 0 & 1 & 0 & 0 \\\\ 1/9 & 4/9 & 4/9 & 0 \\\\ 0 & 4/9 & 4/9 & 1/9 \\\\ 0 & 0 & 1 & 0 \\end{pmatrix}$.",
    "trap": "Check that each row sums to 1: $1/9 + 4/9 + 4/9 = 1$, and boundary rows have probability 1 of moving toward the center.",
    "tests": [
      "c.prob.9.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 9.4, PDF p. 444."
  },
  {
    "id": "w.prob.9.ross.prob.6",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Ross Problem 9.6: Limiting stationary probabilities for 3-ball urn model",
    "prompt": "Compute the limiting probabilities $(\\pi_0, \\pi_1, \\pi_2, \\pi_3)$ for the Markov chain urn model of Problem 9.4.",
    "approach": "Set up and solve the detailed balance equations $\\pi_i P_{i, i+1} = \\pi_{i+1} P_{i+1, i}$, or use the hypergeometric equilibrium distribution for sampling 3 balls out of 6.",
    "solution": "Method 1 (Detailed Balance): Because the chain is a birth-death process on $\\{0, 1, 2, 3\\}$, detailed balance $\\pi_i P_{i, i+1} = \\pi_{i+1} P_{i+1, i}$ holds: For $i = 0$: $\\pi_0 (1) = \\pi_1 (1/9) \\implies \\pi_1 = 9 \\pi_0$. For $i = 1$: $\\pi_1 (4/9) = \\pi_2 (4/9) \\implies \\pi_2 = \\pi_1 = 9 \\pi_0$. For $i = 2$: $\\pi_2 (1/9) = \\pi_3 (1) \\implies \\pi_3 = \\frac{1}{9} \\pi_2 = \\pi_0$. Normalizing: $\\pi_0 + \\pi_1 + \\pi_2 + \\pi_3 = \\pi_0 + 9\\pi_0 + 9\\pi_0 + \\pi_0 = 20 \\pi_0 = 1 \\implies \\pi_0 = 1/20$. Thus $\\pi_0 = 1/20 = 0.05, \\pi_1 = 9/20 = 0.45, \\pi_2 = 9/20 = 0.45, \\pi_3 = 1/20 = 0.05$. Method 2 (Hypergeometric interpretation): In the long run, urn 1 contains a completely random subset of 3 balls chosen from the 6 total balls (3 white, 3 black). The number of white balls in urn 1 is hypergeometric: $\\pi_i = \\frac{\\binom{3}{i}\\binom{3}{3-i}}{\\binom{6}{3}} = \\frac{\\binom{3}{i}^2}{20}$, giving $\\pi_0 = 1/20, \\pi_1 = 9/20, \\pi_2 = 9/20, \\pi_3 = 1/20$.",
    "trap": "Detailed balance is valid for any birth-death Markov chain and avoids solving a full $4 \\times 4$ system.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 9.6, PDF p. 444."
  },
  {
    "id": "w.prob.9.ross.prob.7",
    "course": "prob",
    "sec": "9.2",
    "marks": 4,
    "title": "Ross Problem 9.7: Doubly stochastic transition matrix implies uniform stationary distribution",
    "prompt": "A transition probability matrix $P$ on states $\\{0, 1, \\dots, M\\}$ is doubly stochastic if all its column sums also equal 1: $\\sum_{i=0}^M P_{ij} = 1$ for all $j$. Show that if this chain is ergodic, its stationary distribution is uniform: $\\pi_j = \\frac{1}{M+1}$ for all $j = 0, 1, \\dots, M$.",
    "approach": "Substitute the uniform vector $\\pi_i = 1/(M+1)$ into the stationary equation $\\pi_j = \\sum_{i=0}^M \\pi_i P_{ij}$ and verify that column stochasticity satisfies it.",
    "solution": "The stationary distribution must satisfy $\\pi_j = \\sum_{i=0}^M \\pi_i P_{ij}$ for all $j$, along with $\\sum_{j=0}^M \\pi_j = 1$ and $\\pi_j \\ge 0$. Let us propose the uniform distribution $\\pi_i = \\frac{1}{M+1}$ for all $i = 0, 1, \\dots, M$. Substituting into the right-hand side of the stationary equation: $\\sum_{i=0}^M \\pi_i P_{ij} = \\sum_{i=0}^M \\frac{1}{M+1} P_{ij} = \\frac{1}{M+1} \\sum_{i=0}^M P_{ij}$. Because $P$ is doubly stochastic, each column sum is 1: $\\sum_{i=0}^M P_{ij} = 1$. Therefore, $\\sum_{i=0}^M \\pi_i P_{ij} = \\frac{1}{M+1} (1) = \\frac{1}{M+1} = \\pi_j$. Furthermore, the probabilities sum to 1: $\\sum_{j=0}^M \\pi_j = \\sum_{j=0}^M \\frac{1}{M+1} = (M+1) \\frac{1}{M+1} = 1$. Since the chain is ergodic, the stationary distribution is unique, establishing that $\\pi_j = \\frac{1}{M+1}$ for all $j$.",
    "trap": "Do not confuse row stochasticity (sum_j P_ij = 1, which holds for all Markov chains) with column stochasticity (sum_i P_ij = 1, which defines doubly stochastic chains).",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 9.7, PDF p. 444."
  },
  {
    "id": "w.prob.9.ross.prob.9",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Ross Problem 9.9: Second-order weather Markov chain with two-day memory",
    "prompt": "Tomorrow's weather depends on the past only through yesterday and today: if it rained both days, rain tomorrow with probability 0.8; if rained yesterday but not today, rain tomorrow with probability 0.3; if rained today but not yesterday, rain tomorrow with probability 0.4; if dry both days, rain tomorrow with probability 0.2. What proportion of days does it rain?",
    "approach": "Define a 4-state Markov chain tracking pairs of consecutive days $(X_{n-1}, X_n)$, find the stationary distribution, and sum the probabilities of states where today rains.",
    "solution": "Define 4 states tracking $(X_{n-1}, X_n)$ where 1 = Rain and 0 = No rain: State 1: $(1, 1)$, State 2: $(1, 0)$, State 3: $(0, 1)$, State 4: $(0, 0)$. From state $(a, b)$, the next state must be of the form $(b, c)$. The non-zero transition probabilities are: From State 1 $(1,1)$: $P_{11} = 0.8$ (rain), $P_{12} = 0.2$ (no rain). From State 2 $(1,0)$: $P_{23} = 0.3$ (rain), $P_{24} = 0.7$ (no rain). From State 3 $(0,1)$: $P_{31} = 0.4$ (rain), $P_{32} = 0.6$ (no rain). From State 4 $(0,0)$: $P_{43} = 0.2$ (rain), $P_{44} = 0.8$ (no rain). The stationary distribution satisfies $\\pi = \\pi P$: $\\pi_1 = 0.8\\pi_1 + 0.4\\pi_3 \\implies 0.2\\pi_1 = 0.4\\pi_3 \\implies \\pi_1 = 2\\pi_3$. $\\pi_2 = 0.2\\pi_1 + 0.6\\pi_3 = 0.2(2\\pi_3) + 0.6\\pi_3 = \\pi_3$. $\\pi_3 = 0.3\\pi_2 + 0.2\\pi_4 = 0.3\\pi_3 + 0.2\\pi_4 \\implies 0.7\\pi_3 = 0.2\\pi_4 \\implies \\pi_4 = 3.5\\pi_3$. Normalizing: $\\pi_1 + \\pi_2 + \\pi_3 + \\pi_4 = (2 + 1 + 1 + 3.5)\\pi_3 = 7.5\\pi_3 = 1 \\implies \\pi_3 = \\frac{1}{7.5} = \\frac{2}{15}$. Thus $\\pi_1 = 4/15, \\pi_2 = 2/15, \\pi_3 = 2/15, \\pi_4 = 7/15$. A day is rainy if the system is in State 1 $(1, 1)$ or State 3 $(0, 1)$. Therefore, the long-run proportion of rainy days is $\\pi_1 + \\pi_3 = \\frac{4}{15} + \\frac{2}{15} = \\frac{6}{15} = \\frac{2}{5} = 0.40$ (or 40% of days).",
    "trap": "A second-order Markov process is converted into a standard first-order Markov chain by expanding the state space to pairs of consecutive observations.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 9.9, PDF p. 444."
  },
  {
    "id": "w.prob.9.ross.prob.10",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Ross Problem 9.10: Runner with five pairs of shoes and barefoot proportion",
    "prompt": "A runner owns 5 pairs of shoes, distributed between the front and back doors. Each morning, he is equally likely to leave from either door, and upon return, equally likely to enter either door, leaving his shoes at the door of return. If no shoes are available at the departure door, he runs barefooted. (a) Set this up as a Markov chain by specifying states and transition probabilities. (b) Determine the long-run proportion of days he runs barefooted.",
    "approach": "Let the state $i \\in \\{0, 1, 2, 3, 4, 5\\}$ be the number of shoe pairs at the front door. Compute transition probabilities and solve for the stationary distribution.",
    "solution": "(a) Let $X_n = i$ be the number of shoe pairs at the front door before the $n$-th run ($0 \\le i \\le 5$), leaving $5 - i$ pairs at the back door. The runner leaves from front or back with probability $1/2$ each, and returns to front or back with probability $1/2$ each. For interior states $i \\in \\{1, 2, 3, 4\\}$: Front departure (takes shoe): returns front $\\implies$ net change 0 (prob 1/4); returns back $\\implies$ loses 1 from front: $i \\to i-1$ (prob 1/4). Back departure (takes shoe): returns front $\\implies$ gains 1 at front: $i \\to i+1$ (prob 1/4); returns back $\\implies$ net change 0 (prob 1/4). Thus $P_{i, i-1} = 1/4, P_{ii} = 1/2, P_{i, i+1} = 1/4$. For boundary state $i = 0$ (no shoes at front): Front departure: runs barefooted, returns front ($0 \\to 0$, prob 1/4) or back ($0 \\to 0$, prob 1/4). Back departure (takes shoe): returns front ($0 \\to 1$, prob 1/4) or back ($0 \\to 0$, prob 1/4). Thus $P_{00} = 3/4, P_{01} = 1/4$. By symmetry at state $i = 5$: $P_{55} = 3/4, P_{54} = 1/4$. (b) By detailed balance $\\pi_i P_{i, i+1} = \\pi_{i+1} P_{i+1, i}$, we have $\\pi_i (1/4) = \\pi_{i+1}(1/4) \\implies \\pi_0 = \\pi_1 = \\pi_2 = \\pi_3 = \\pi_4 = \\pi_5 = 1/6$. The runner runs barefoot if he is at state 0 and leaves from the front door (prob $(1/6)(1/2) = 1/12$), or at state 5 and leaves from the back door (prob $(1/6)(1/2) = 1/12$). Thus the proportion of days he runs barefooted is $\\frac{1}{12} + \\frac{1}{12} = \\frac{1}{6} \\approx 0.1667$ (or 16.67%).",
    "trap": "When running barefooted, no shoe is moved, so returning to the front door still leaves 0 pairs at the front door.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 9.10, PDF p. 444."
  },
  {
    "id": "w.prob.9.ross.prob.11",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Ehrenfest equilibrium and the parity caveat",
    "prompt": "In the Ehrenfest model, exactly one of $M\\ge1$ molecules switches urns at each step. (a) Check the binomial stationary probabilities. (b) Find the long-time chance for one molecule to be in urn 1. (c) Decide whether all molecule locations become independent from a fixed starting assignment. (d) Explain in what sense the binomial law is the equilibrium law. Distinguish stationary probabilities from step-by-step limits.",
    "approach": "Verify balance equations algebraically, trace individual molecule transitions as symmetric two-state chains, and invoke asymptotic independence.",
    "solution": "(a) Put $\\pi_j=\\binom Mj2^{-M}$. For an interior $j$, the two inflows are $(j/M)\\pi_j$ and $((M-j)/M)\\pi_j$, adding to $\\pi_j$. At the ends, $\\pi_1/M=\\pi_0$ and $\\pi_{M-1}/M=\\pi_M$. The probabilities sum to one by the binomial theorem. (b) For a fixed molecule, $r_{n+1}=1/M+(1-2/M)r_n$, hence $r_n=1/2+(r_0-1/2)(1-2/M)^n$. For $M>1$, this tends to $1/2$; for $M=1$, a fixed starting location alternates forever. (c) All $M$ locations do not become mutually independent from a fixed assignment: the parity of the number in urn 1 is determined by the starting parity and $n$. Independent fair locations would assign both parities probability $1/2$. For $M>2$, even asymptotic pairwise independence does not remove this joint parity constraint. (d) If locations are initially independent fair choices, their uniform distribution on all $2^M$ assignments is stationary: flipping any selected coordinate preserves it. The count then has $\\operatorname{Binomial}(M,1/2)$ distribution. This is also the count’s unique stationary law and its time-average occupancy law. A fixed-start count oscillates between parity classes instead of converging to that law. Adding a positive probability of no move removes the period and gives convergence to the same equilibrium.",
    "trap": "Stationary does not mean convergence from every starting point. A parity restriction blocks joint independence and step-by-step convergence.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 9.11, PDF pp. 444–445."
  },
  {
    "id": "w.prob.9.ross.prob.14",
    "course": "prob",
    "sec": "9.3",
    "marks": 5,
    "title": "Ross Problem 9.14: Joint, marginal, and conditional entropy for dice roll and sum indicator",
    "prompt": "A pair of fair dice is rolled. Let $Y \\in \\{1, 2, \\dots, 6\\}$ be the value of the first die, and let $X = 1$ if the sum of the dice is 6, and $X = 0$ otherwise. Compute: (a) $H(Y)$, (b) $H_Y(X)$, and (c) $H(X, Y)$ in bits.",
    "approach": "Use the uniform entropy formula for $H(Y)$, condition on $Y = y$ to find $H(X|Y=y)$, and combine using the entropy chain rule $H(X, Y) = H(Y) + H_Y(X)$.",
    "solution": "(a) The first die $Y$ is uniformly distributed on $\\{1, 2, 3, 4, 5, 6\\}$, so $H(Y) = \\log_2 6 = 1 + \\log_2 3 \\approx 2.5850$ bits. (b) Given $Y = y$: If $y \\in \\{1, 2, 3, 4, 5\\}$, the sum is 6 if and only if the second die equals $6 - y$, which has probability $1/6$. Thus $P(X = 1 \\mid Y = y) = 1/6$ and $P(X = 0 \\mid Y = y) = 5/6$. The conditional entropy is $H(X \\mid Y = y) = -\\left[ \\frac{1}{6}\\log_2\\frac{1}{6} + \\frac{5}{6}\\log_2\\frac{5}{6} \\right] = H_b(1/6) \\approx 0.6500$ bits. If $y = 6$, the second die would have to be 0 (impossible), so $P(X = 1 \\mid Y = 6) = 0$ and $P(X = 0 \\mid Y = 6) = 1$, giving $H(X \\mid Y = 6) = 0$. Averaging over $Y$: $H_Y(X) = \\sum_{y=1}^6 P(Y = y) H(X \\mid Y = y) = \\frac{5}{6} H_b(1/6) + \\frac{1}{6}(0) = \\frac{5}{6}(0.6500) \\approx 0.5417$ bits. (c) By the entropy chain rule: $H(X, Y) = H(Y) + H_Y(X) = \\log_2 6 + \\frac{5}{6} H_b(1/6) \\approx 2.5850 + 0.5417 = 3.1267$ bits. (Note that knowing $(X, Y)$ is not identical to knowing both dice, since $X$ only indicates whether the sum is 6.)",
    "trap": "When $Y = 6$, the conditional entropy is 0 because $X$ is deterministically 0; do not include it as $1/6$.",
    "tests": [
      "c.prob.9.3.1",
      "c.prob.9.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 9.14, PDF p. 445."
  },
  {
    "id": "w.prob.9.ross.prob.15",
    "course": "prob",
    "sec": "9.3",
    "marks": 4,
    "title": "Ross Problem 9.15: Entropy of six independent biased coin flips",
    "prompt": "A coin with probability $p = 2/3$ of landing heads is flipped 6 times independently. (a) Compute the entropy of the sequence of 6 outcomes. (b) Explain how this compares to the entropy of the total number of heads.",
    "approach": "Apply additivity of Shannon entropy for independent random variables, and note data processing inequality for the total head count.",
    "solution": "(a) Let $Z_1, \\dots, Z_6$ denote the binary outcomes of the 6 independent flips. For each flip $Z_i$, $P(Z_i = 1) = 2/3$ and $P(Z_i = 0) = 1/3$. The entropy of a single flip is $H(Z_i) = -\\left[ \\frac{2}{3}\\log_2\\frac{2}{3} + \\frac{1}{3}\\log_2\\frac{1}{3} \\right] = \\log_2 3 - \\frac{2}{3} \\approx 1.58496 - 0.66667 = 0.9183$ bits. By independence of the flips, the joint entropy of the full 6-toss sequence is the sum of individual entropies: $H(Z_1, \\dots, Z_6) = \\sum_{i=1}^6 H(Z_i) = 6 \\left( \\log_2 3 - \\frac{2}{3} \\right) \\approx 6 \\times 0.9183 = 5.5098$ bits. (b) The total number of heads $K = \\sum_{i=1}^6 Z_i$ is a deterministic function of the sequence. Since deterministic functions cannot increase entropy ($H(f(Z)) \\le H(Z)$), the entropy of the count $K \\sim \\operatorname{Binomial}(6, 2/3)$ is strictly smaller ($H(K) \\approx 2.2301$ bits), reflecting the loss of information regarding the specific order of heads and tails.",
    "trap": "The entropy of the full sequence of 6 tosses is 6 times the single-toss entropy; the entropy of the sum of heads is strictly lower.",
    "tests": [
      "c.prob.9.3.1",
      "c.prob.9.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 9.15, PDF p. 445."
  },
  {
    "id": "w.prob.9.ross.prob.16",
    "course": "prob",
    "sec": "9.4",
    "marks": 4,
    "title": "Ross Problem 9.16: Twenty questions game and noiseless coding bounds",
    "prompt": "A random variable $X$ takes values in $\\{x_1, \\dots, x_n\\}$ with probabilities $p(x_1), \\dots, p(x_n)$. We determine $X$ by asking a sequence of yes/no questions. What can be said about the minimum expected number of questions $\\bar{Q}$ required to identify $X$?",
    "approach": "Map each questioning strategy to a binary decision tree / prefix code, and apply Shannon's noiseless coding theorem.",
    "solution": "Any strategy of asking yes/no questions to uniquely identify $X$ corresponds to a binary decision tree where each question branches to 'yes' (0) or 'no' (1), and each leaf corresponds to an outcome $x_i$. Because no leaf is an ancestor of another, the paths from the root to the leaves define a prefix-free binary code with lengths $l_i$ equal to the number of questions asked when $X = x_i$. The expected number of questions asked is $\\bar{Q} = \\sum_{i=1}^n p(x_i) l_i$. By Shannon's Noiseless Coding Theorem (Theorem 4.1), any prefix-free binary code satisfies $\\bar{Q} \\ge H(X)$, with equality if and only if all probabilities are dyadic powers of 2 ($p(x_i) = 2^{-l_i}$). Furthermore, by Huffman coding or Shannon-Fano coding, there exists an optimal questioning strategy such that $H(X) \\le \\bar{Q} < H(X) + 1$, where $H(X) = -\\sum_{i=1}^n p(x_i) \\log_2 p(x_i)$ is the Shannon entropy in bits.",
    "trap": "The expected number of questions cannot be strictly less than $H(X)$; entropy provides the absolute information-theoretic lower bound.",
    "tests": [
      "c.prob.9.3.1",
      "c.prob.9.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 9.16, PDF p. 445."
  },
  {
    "id": "w.prob.9.ross.prob.17",
    "course": "prob",
    "sec": "9.3",
    "marks": 4,
    "title": "Ross Problem 9.17: Deterministic function reduces or preserves entropy",
    "prompt": "For a discrete variable $X$, prove that applying a deterministic function cannot increase entropy: $H(f(X))\\le H(X)$. When $H(X)$ is finite, identify the equality condition.",
    "approach": "Apply the entropy chain rule to the joint pair $(X, f(X))$ in both expansion orders and use nonnegativity of conditional entropy.",
    "solution": "Consider the joint entropy $H(X, f(X))$. Expanding by the entropy chain rule conditioning on $X$: $H(X, f(X)) = H(X) + H(f(X) \\mid X)$. Because $f(X)$ is completely determined once $X$ is known, the conditional uncertainty is zero: $H(f(X) \\mid X) = 0$. Thus $H(X, f(X)) = H(X)$. Next, expanding the joint entropy conditioning on $f(X)$: $H(X, f(X)) = H(f(X)) + H(X \\mid f(X))$. Equating the two expressions gives $H(X) = H(f(X)) + H(X \\mid f(X))$. Because conditional entropy of discrete variables is always non-negative ($H(X \\mid f(X)) \\ge 0$), we conclude that $H(X) \\ge H(f(X))$, or equivalently $H(f(X)) \\le H(X)$. Equality holds if and only if $H(X \\mid f(X)) = 0$, which means that $X$ is uniquely determined given $f(X)$. This occurs if and only if $f$ is one-to-one on the support of $X$. The equality characterization assumes $H(X)<\\infty$. With infinite entropy, both sides can be infinite even for a many-to-one function, so equality alone no longer implies injectivity.",
    "trap": "This fundamental result (data processing inequality for entropy) shows that deterministic processing can never create new information; it can only preserve or destroy uncertainty.",
    "tests": [
      "c.prob.9.3.1",
      "c.prob.9.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 9.17, PDF p. 445."
  },
  {
    "id": "w.prob.9.ross.st.1",
    "course": "prob",
    "sec": "9.1",
    "marks": 5,
    "title": "Ross Self-Test Problem 9.1: Poisson process counts and fifth arrival time",
    "prompt": "Events occur according to a Poisson process with rate $\\lambda = 3$ per hour. (a) What is the probability that no events occur between 8:00 AM and 10:00 AM? (b) What is the expected number of events between 8:00 AM and 10:00 AM? (c) What is the expected time of occurrence of the 5th event after 2:00 PM?",
    "approach": "Use the Poisson count distribution $N(t) \\sim \\operatorname{Poisson}(\\lambda t)$ for intervals of length $t = 2$, and Gamma waiting time mean $E[S_n] = n/\\lambda$.",
    "solution": "(a) The interval from 8:00 AM to 10:00 AM has duration $t = 2$ hours. The number of events in this interval is Poisson distributed with mean $\\lambda t = 3(2) = 6$. The probability of zero events is $P(N(2) = 0) = e^{-6} \\approx 0.002479$. (b) The expected number of events in this 2-hour interval is $E[N(2)] = \\lambda t = 3 \\times 2 = 6$ events. (c) Let $S_5$ be the waiting time until the 5th event after 2:00 PM. Since interarrival times are iid Exponential with rate $\\lambda = 3$, $S_5$ is Gamma distributed with shape $n = 5$ and rate $\\lambda = 3$. Its expected value is $E[S_5] = \\frac{n}{\\lambda} = \\frac{5}{3}$ hours $= 1$ hour and 40 minutes. Adding this to 2:00 PM, the expected time of occurrence is 3:40 PM.",
    "trap": "For (c), the expected arrival time adds $n/\\lambda$ directly to the starting time 2:00 PM.",
    "tests": [
      "c.prob.9.1.1",
      "c.prob.9.1.2"
    ],
    "provenance": "Ross, 10e, Chapter 9, Self-Test Problem 9.1, PDF p. 446."
  },
  {
    "id": "w.prob.9.ross.st.2",
    "course": "prob",
    "sec": "9.1",
    "marks": 5,
    "title": "Ross Self-Test Problem 9.2: Conditional Poisson arrival time locations",
    "prompt": "Customers arrive at a retail store according to a Poisson process with rate $\\lambda$ per hour. Given that exactly two customers arrived during the first hour, find the probability that: (a) both arrived in the first 20 minutes; (b) at least one arrived in the first 30 minutes.",
    "approach": "Given $N(1) = 2$, the arrival times $U_1, U_2$ are distributed as the order statistics of two independent Uniform(0, 1) random variables.",
    "solution": "Given $N(1) = 2$, the two unordered arrival locations can be represented by independent Uniform(0, 1) random variables (the chronological arrival times are their dependent order statistics) on the 1-hour interval. (a) 20 minutes corresponds to $t_1 = 20/60 = 1/3$ hour. The probability that an independent uniform arrival falls in $[0, 1/3]$ is $1/3$. Since both arrivals are independent uniform locations: $P(\\text{both in first 20 min} \\mid N(1) = 2) = (1/3)^2 = 1/9 \\approx 0.1111$. (b) 30 minutes corresponds to $t_2 = 30/60 = 1/2$ hour. The probability that a single arrival occurs after 30 minutes is $1 - 1/2 = 1/2$. By the complement, the probability that at least one arrival falls in the first 30 minutes is: $1 - P(\\text{both in }(1/2, 1]) = 1 - (1/2)^2 = 1 - 1/4 = 3/4 = 0.75$.",
    "trap": "The arrival rate $\\lambda$ cancels out completely when conditioning on the total count $N(1) = 2$.",
    "tests": [
      "c.prob.9.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 9, Self-Test Problem 9.2, PDF p. 446."
  },
  {
    "id": "w.prob.9.ross.st.3",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Ross Self-Test Problem 9.3: Truck and car alternating traffic stationary proportion",
    "prompt": "On a highway, four out of every five trucks are followed by a car, while one out of every six cars is followed by a truck. What proportion of vehicles on the road are trucks?",
    "approach": "Formulate a 2-state Markov chain for vehicle types (Truck $T$, Car $C$), find the transition matrix, and solve for the stationary distribution.",
    "solution": "Let the states be $T$ (Truck) and $C$ (Car). The given transition probabilities are: From $T$: followed by a car with probability $P_{TC} = 4/5$, so followed by a truck with probability $P_{TT} = 1 - 4/5 = 1/5$. From $C$: followed by a truck with probability $P_{CT} = 1/6$, so followed by a car with probability $P_{CC} = 1 - 1/6 = 5/6$. The transition probability matrix is $P = \\begin{pmatrix} 1/5 & 4/5 \\\\ 1/6 & 5/6 \\end{pmatrix}$. The stationary distribution $(\\pi_T, \\pi_C)$ satisfies detailed balance: $\\pi_T P_{TC} = \\pi_C P_{CT} \\implies \\pi_T \\left(\\frac{4}{5}\\right) = \\pi_C \\left(\\frac{1}{6}\\right) \\implies \\pi_T = \\frac{5}{24} \\pi_C$. Normalizing using $\\pi_T + \\pi_C = 1$: $\\frac{5}{24} \\pi_C + \\pi_C = \\frac{29}{24} \\pi_C = 1 \\implies \\pi_C = \\frac{24}{29}$. Therefore, $\\pi_T = \\frac{5}{24} \\left(\\frac{24}{29}\\right) = \\frac{5}{29} \\approx 0.1724$. Thus, $5/29$ (or approximately $17.24\\%$) of the vehicles on the road are trucks.",
    "trap": "Balance the rate of transitions between trucks and cars (\\pi_T P_{TC} = \\pi_C P_{CT}) to find the relative proportions directly.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 9, Self-Test Problem 9.3, PDF p. 446."
  },
  {
    "id": "w.prob.9.ross.st.4",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Ross Self-Test Problem 9.4: Three-state town weather chain stationary distribution",
    "prompt": "A town's daily weather is Rainy (R), Sunny (S), or Overcast (O). If rainy, tomorrow is equally likely sunny or overcast. If not rainy, the weather persists with probability $1/3$, or changes to either of the other two states with equal probability $1/3$ each. In the long run, what proportion of days are sunny, and what proportion are rainy?",
    "approach": "Construct the $3 \\times 3$ transition matrix and solve $\\pi = \\pi P$ subject to $\\pi_R + \\pi_S + \\pi_O = 1$.",
    "solution": "The transition probabilities among states $(R, S, O)$ are: Row R: from Rainy, tomorrow is never Rainy, and equally likely Sunny or Overcast: $P_{RR} = 0, P_{RS} = 1/2, P_{RO} = 1/2$. Row S: from Sunny, persists with prob $1/3$, changes to R with prob $1/3$, changes to O with prob $1/3$: $P_{SR} = 1/3, P_{SS} = 1/3, P_{SO} = 1/3$. Row O: by identical rules: $P_{OR} = 1/3, P_{OS} = 1/3, P_{OO} = 1/3$. The transition matrix is $P = \\begin{pmatrix} 0 & 1/2 & 1/2 \\\\ 1/3 & 1/3 & 1/3 \\\\ 1/3 & 1/3 & 1/3 \\end{pmatrix}$. The stationary distribution satisfies $\\pi_R = \\frac{1}{3}\\pi_S + \\frac{1}{3}\\pi_O = \\frac{1}{3}(\\pi_S + \\pi_O)$. Since $\\pi_S + \\pi_O = 1 - \\pi_R$, we have $\\pi_R = \\frac{1}{3}(1 - \\pi_R) \\implies \\frac{4}{3}\\pi_R = \\frac{1}{3} \\implies \\pi_R = 1/4$. By symmetry between Sunny and Overcast: $\\pi_S = \\pi_O = \\frac{1 - 1/4}{2} = \\frac{3}{8}$. Verifying for Sunny: $\\pi_S = \\frac{1}{2}\\pi_R + \\frac{1}{3}\\pi_S + \\frac{1}{3}\\pi_O = \\frac{1}{2}(1/4) + \\frac{1}{3}(3/8) + \\frac{1}{3}(3/8) = \\frac{1}{8} + \\frac{1}{8} + \\frac{1}{8} = \\frac{3}{8}$. Thus, in the long run, the proportion of rainy days is $\\pi_R = 1/4 = 0.25$ (25%) and the proportion of sunny days is $\\pi_S = 3/8 = 0.375$ (37.5%).",
    "trap": "Exploiting the exact symmetry between Sunny and Overcast reduces the $3 \\times 3$ linear system to a one-variable equation.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 9, Self-Test Problem 9.4, PDF p. 446."
  },
  {
    "id": "w.prob.9.ross.st.5",
    "course": "prob",
    "sec": "9.3",
    "marks": 5,
    "title": "Ross Self-Test Problem 9.5: Entropy comparison of two five-outcome distributions",
    "prompt": "Let $X$ have distribution $(0.35, 0.2, 0.2, 0.2, 0.05)$ and $Y$ have distribution $(0.05, 0.35, 0.1, 0.15, 0.35)$. (a) Show that $H(X) > H(Y)$. (b) Give an intuitive explanation using the principle that uniform distributions maximize entropy.",
    "approach": "Calculate the Shannon entropy in bits for both distributions explicitly, and interpret the difference via closeness to uniformity / majorization.",
    "solution": "(a) For $X$ with probabilities $(0.35, 0.2, 0.2, 0.2, 0.05)$: $H(X) = -\\left[ 0.35\\log_2(0.35) + 3(0.2\\log_2(0.2)) + 0.05\\log_2(0.05) \\right]$. Computing terms: $0.35\\log_2(0.35) \\approx 0.35(-1.51457) \\approx -0.5301$, $0.6\\log_2(0.2) \\approx 0.6(-2.32193) \\approx -1.3932$, $0.05\\log_2(0.05) \\approx 0.05(-4.32193) \\approx -0.2161$. Summing gives $H(X) \\approx 0.5301 + 1.3932 + 0.2161 = 2.1394$ bits. For $Y$ with sorted probabilities $(0.35, 0.35, 0.15, 0.10, 0.05)$: $H(Y) = -\\left[ 2(0.35\\log_2(0.35)) + 0.15\\log_2(0.15) + 0.10\\log_2(0.10) + 0.05\\log_2(0.05) \\right]$. Computing terms: $2(0.35)(-1.51457) \\approx -1.0602$, $0.15(-2.73697) \\approx -0.4105$, $0.10(-3.32193) \\approx -0.3322$, $0.05(-4.32193) \\approx -0.2161$. Summing gives $H(Y) \\approx 1.0602 + 0.4105 + 0.3322 + 0.2161 = 2.0190$ bits. Since $2.1394 > 2.0190$, $H(X) > H(Y)$. (b) The maximum possible entropy on 5 outcomes is $\\log_2 5 \\approx 2.3219$ bits, attained by the uniform distribution $(0.2, 0.2, 0.2, 0.2, 0.2)$. In distribution $X$, three of the five outcomes match the uniform mass of 0.2 exactly, so $X$ is much closer to uniform. In distribution $Y$, two outcomes each take probability 0.35, concentrating 70% of the total mass on just two values, creating greater predictability and reducing uncertainty.",
    "trap": "The log base must be 2 for units of bits; verify the calculation with exact values before rounding.",
    "tests": [
      "c.prob.9.3.1",
      "c.prob.9.3.3"
    ],
    "provenance": "Ross, 10e, Chapter 9, Self-Test Problem 9.5, PDF pp. 446–447."
  },
  {
    "id": "w.prob.9.ross.combined.1",
    "course": "prob",
    "sec": "9.1",
    "marks": 4,
    "title": "Condition on a Poisson count",
    "prompt": "(Adapted from Ross Problem 9.1.) Customers arrive according to a homogeneous Poisson process. Given that exactly two arrive during the first hour, find the probability (a) both arrived in the first 20 minutes, and (b) at least one arrived in the first 20 minutes.",
    "approach": "Condition on the total count in the hour. The two arrival locations are uniform over the hour; equivalently, split the hour into thirds and use conditional Poisson counts.",
    "solution": "Given N(1)=2, the two arrival times are independent uniform locations in the hour (up to ordering). Each is in the first third with probability 1/3. Thus (a) (1/3)²=1/9. (b) use the complement that both are outside: 1−(2/3)²=5/9.",
    "trap": "Do not use the unconditional Poisson probability of arrivals in the first 20 minutes after conditioning on exactly two arrivals during the full hour.",
    "tests": [
      "c.prob.9.1.1"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 1; original wording and worked explanation."
  },
  {
    "id": "w.prob.9.ross.combined.5",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Three-step weather chain",
    "prompt": "(Adapted from Ross Problem 9.5.) Rain today has probability 1/2. If it rains today, tomorrow is rainy with probability .7; if it is dry today, tomorrow is rainy with probability .3. Find the probability it rains three days from today.",
    "approach": "Use the two-state transition matrix or update the rain probability one step at a time.",
    "solution": "Let r_n be the rain probability n days after today. The update is r_{n+1}=.7r_n+.3(1−r_n)=.3+.4r_n. Starting r_0=.5 gives r_1=r_2=r_3=.5. Equivalently the initial distribution (.5,.5) is stationary for P=[[.7,.3],[.3,.7]].",
    "trap": "The transition probability conditioned on today’s state is not itself the unconditional probability for a future day.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 5; original wording and worked explanation."
  },
  {
    "id": "w.prob.9.ross.combined.8",
    "course": "prob",
    "sec": "9.2",
    "marks": 5,
    "title": "Stationary mood proportions",
    "prompt": "(Adapted from Ross Problem 9.8.) Buffy’s states are cheerful C, so-so S, gloomy G. The transition rows are C:(.7,.2,.1), S:(.4,.3,.3), G:(.2,.4,.4). Find the stationary probability of being cheerful.",
    "approach": "Solve π=πP together with π_C+π_S+π_G=1.",
    "solution": "The stationary equations give .3π_C=.4π_S+.2π_G and .7π_S=.2π_C+.4π_G. Solving with the normalization yields (π_C,π_S,π_G)=(30/59,16/59,13/59). Thus Buffy is cheerful in the long run with probability 30/59≈.5085.",
    "trap": "The stationary vector is a row vector under the row-stochastic convention; also normalize the solution to sum to one.",
    "tests": [
      "c.prob.9.2.1",
      "c.prob.9.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 8; original wording and worked explanation."
  },
  {
    "id": "w.prob.9.ross.combined.12",
    "course": "prob",
    "sec": "9.3",
    "marks": 4,
    "title": "Entropy of a fair-dice sum",
    "prompt": "(Adapted from Ross Problem 9.12.) Two fair dice are rolled. Write the entropy of their sum exactly as a finite logarithmic sum.",
    "approach": "The sum s has 6−|7−s| ordered outcomes for s=2,...,12. Substitute those masses in Shannon entropy.",
    "solution": "The probabilities for sums 2 through 12 are (1,2,3,4,5,6,5,4,3,2,1)/36. Therefore H(S)=−Σ_{s=2}^{12}[(6−|7−s|)/36]log₂[(6−|7−s|)/36] bits. Grouping equal terms, H(S)=−2[(1/36)log₂(1/36)+(2/36)log₂(2/36)+(3/36)log₂(3/36)+(4/36)log₂(4/36)+(5/36)log₂(5/36)]−(6/36)log₂(6/36).",
    "trap": "The sum is not uniform on eleven values; central sums have more underlying dice outcomes.",
    "tests": [
      "c.prob.9.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 12; original wording and worked explanation."
  },
  {
    "id": "w.prob.9.ross.combined.13",
    "course": "prob",
    "sec": "9.3",
    "marks": 4,
    "title": "Maximum entropy on a finite support",
    "prompt": "(Adapted from Ross Problem 9.13.) Prove that a variable with at most n possible values has entropy at most log₂ n, with equality for the uniform law.",
    "approach": "Use nonnegativity of relative entropy between the law p and the uniform distribution u_i=1/n.",
    "solution": "For positive p_i, Gibbs’ inequality gives Σ_i p_i log₂(p_i/u_i)≥0. Since u_i=1/n, the left side is Σp_i log₂p_i+log₂n=−H(X)+log₂n. Hence H(X)≤log₂n. Equality in Gibbs’ inequality holds exactly when p_i=u_i for all i, so the uniform law uniquely maximizes entropy on n points. Zero masses follow by continuity and cannot attain equality across all n slots.",
    "trap": "The equality claim requires all n possible values to have equal positive mass.",
    "tests": [
      "c.prob.9.3.1",
      "c.prob.9.3.3"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 13; original wording and worked explanation."
  },
  {
    "id": "w.prob.9.ross.combined.18",
    "course": "prob",
    "sec": "9.4",
    "marks": 5,
    "title": "Binary symmetric channel capacity",
    "prompt": "(Adapted from Ross Problem 9.18.) A binary symmetric channel transmits a bit correctly with probability p. Explain why the maximizing input has probability 1/2 for each bit and give its capacity.",
    "approach": "The output entropy is maximized by a uniform output; for a symmetric channel, a uniform input produces that output. Subtract the conditional output entropy given the input.",
    "solution": "For input bit X and received bit Y, information rate is H(Y)−H(Y|X). The channel is symmetric, and a uniform input makes Y uniform, maximizing H(Y)=1 bit. Given X, Y is correct with probability p and flipped with probability 1−p, so H(Y|X)=H_b(p)=−p log₂p−(1−p)log₂(1−p). Therefore C=1−H_b(p)=1+p log₂p+(1−p)log₂(1−p) bits per channel use. (This uses Ross’s p=correct-transmission convention.)",
    "trap": "The expression depends on whether p denotes correct transmission or crossover probability; state the convention.",
    "tests": [
      "c.prob.9.3.1",
      "c.prob.9.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 9, Problem 18; original wording and worked explanation."
  },
  {
    "id": "w.prob.9.ross.example.4a",
    "course": "prob",
    "sec": "9.4",
    "marks": 5,
    "title": "Kraft check and source coding lower bound",
    "prompt": "A source has four symbols with probabilities (1/2,1/4,1/8,1/8). For codeword lengths (1,2,3,3), verify Kraft’s inequality, compute average length and entropy, and interpret the result. Give an actual prefix-free code attaining this average.",
    "approach": "Compute Σ2^(−l_i), L=Σp_il_i, and H=−Σp_i log₂p_i.",
    "solution": "Kraft sum=2^−1+2^−2+2·2^−3=1, so the lengths are feasible for a prefix-free binary code. Average length L=(1/2)(1)+(1/4)(2)+(1/8)(3)+(1/8)(3)=7/4=1.75 bits. Entropy is the same sum because −log₂p_i=(1,2,3,3), so H=1.75 bits. This code attains the entropy lower bound exactly for this dyadic source. Assign codewords 0, 10, 110, 111 to the four symbols in that order. No codeword starts with another complete codeword, so the receiver can separate symbols unambiguously. These lengths are exactly (1,2,3,3), and the 1.75-bit average equals the entropy lower bound.",
    "trap": "A Kraft sum below one establishes feasibility of some prefix code with those lengths, not that any arbitrary strings of those lengths form a prefix code.",
    "tests": [
      "c.prob.9.3.1",
      "c.prob.9.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 9, Example 4a; original wording and worked explanation."
  }
]
);
