var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
CONCEPTS.push(...
[
  {
    "id": "c.prob.9.1.1",
    "sec": "9.1",
    "kind": "definition",
    "tier": "ext",
    "title": "Homogeneous Poisson process",
    "oneLine": "A Poisson process counts arrivals that occur independently at a steady rate.",
    "statement": "A rate-$\\lambda$ Poisson process starts at $N(0)=0$. Counts in separate time intervals are independent; intervals of the same length have the same count distribution. In a very short interval of length $h$, the chance of one arrival is $\\lambda h+o(h)$ and the chance of two or more is $o(h)$. Here $o(h)$ means an error whose ratio to $h$ goes to zero. These rules give $N(t)\\sim\\operatorname{Poisson}(\\lambda t)$.",
    "intuition": "Imagine counting raindrops during a shower. If the rate stays steady and separate time windows do not affect each other, then a longer window simply gives more chances for drops; the count over time t follows a Poisson law with average λt.",
    "needs": [],
    "traps": [
      "Poisson process requires independent and stationary increments; a Poisson marginal count by itself does not establish a process.",
      "The rate λ is events per unit time, so mean count over length t is λt."
    ],
    "cards": [
      {
        "q": "State the defining increment features of a homogeneous Poisson process.",
        "a": "Starts at zero; independent increments; stationary increments; short interval one-event probability λh+o(h), multi-event probability o(h).",
        "kind": "state"
      },
      {
        "q": "What is the distribution of N(t)?",
        "a": "Poisson with parameter λt.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Write an equation for each possible count using what can happen in the next tiny time interval.",
      "why": "Independence lets us multiply the count probability so far by the next-interval probability. In a tiny interval, two or more arrivals contribute only a smaller-order error.",
      "rungs": [
        {
          "why": "To still have zero arrivals at $t+h$, there must be none by $t$ and none in the new interval.",
          "m": "P_0(t+h)=P_0(t)[1-\\lambda h+o(h)]"
        },
        {
          "why": "Subtract $P_0(t)$, divide by $h$, and let $h$ shrink. The resulting differential equation starts at $P_0(0)=1$.",
          "m": "P_0' (t)=-\\lambda P_0(t),\\quad P_0(t)=e^{-\\lambda t}"
        },
        {
          "why": "For $n\\ge1$, a count of $n$ after the next interval comes from $n$ with no new arrival or $n-1$ with one new arrival. This gives $P_n\\prime(t)=-\\lambda P_n(t)+\\lambda P_{n-1}(t)$ with $P_n(0)=0$. Substitute the formula below to check it solves each equation.",
          "m": "P(N(t)=n)=e^{-\\lambda t}(\\lambda t)^n/n!"
        }
      ],
      "ends": "Thus counts over an interval of length t are Poisson(λt), and nonoverlapping intervals give independent counts."
    },
    "provenance": "Ross, 10th ed., §9.1, PDF pp. 427–429, Lemma 1.1, Proposition 1.1 and Theorem 1.1."
  },
  {
    "id": "c.prob.9.1.2",
    "sec": "9.1",
    "kind": "theorem",
    "tier": "ext",
    "title": "Interarrival and arrival times",
    "oneLine": "Successive waiting times are exponential; adding them gives an arrival time.",
    "statement": "In a rate-$\\lambda$ Poisson process, the waits $T_1,T_2,\\ldots$ between arrivals are independent copies of an exponential variable with mean $1/\\lambda$. The time of arrival number $n$ is $S_n=T_1+\\cdots+T_n$. It has a gamma density $f_{S_n}(x)=\\lambda e^{-\\lambda x}(\\lambda x)^{n-1}/(n-1)!$ for $x\\ge0$. Here the gamma shape is $n$ and its rate is $\\lambda$.",
    "intuition": "If arrivals happen at a steady rate, the time until the next one has an exponential waiting-time law. After each arrival the clock starts fresh, and the time to the nth arrival is the sum of n such waits.",
    "needs": [
      "c.prob.9.1.1"
    ],
    "traps": [
      "Mean interarrival time is 1/λ, whereas mean count per unit time is λ.",
      "The Gamma convention here uses rate λ, not scale λ."
    ],
    "cards": [
      {
        "q": "What are the interarrival times in a Poisson process?",
        "a": "Independent exponential random variables, each with rate λ.",
        "kind": "state"
      },
      {
        "q": "What is the nth arrival-time law?",
        "a": "Gamma with shape n and rate λ.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Waiting longer than $t$ means there have been no arrivals during that wait.",
      "why": "The Poisson process restarts with the same arrival rules after each arrival. This restart property also holds at arrival times, which are random times; ordinary independence at fixed times alone is not the whole justification.",
      "rungs": [
        {
          "why": "Translate T₁>t into a zero-count event.",
          "m": "P(T_1>t)=P(N(t)=0)=e^{-\\lambda t}"
        },
        {
          "why": "Use the Poisson process’s restart property at arrival time $S_k$. The next wait is exponential and independent of all previous waits.",
          "m": "P(T_{k+1}>t\\mid T_1,\\ldots,T_k)=e^{-\\lambda t}"
        },
        {
          "why": "Add the $n$ independent waits. Repeated convolution of exponential densities gives the gamma density stated above.",
          "m": "S_n=T_1+\\cdots+T_n\\sim Gamma(n,\\lambda)"
        }
      ],
      "ends": "The gamma arrival-time distribution is the bridge between waiting times and Poisson event counts."
    },
    "provenance": "Ross, 10th ed., §9.1, PDF pp. 428–429."
  },
  {
    "id": "c.prob.9.2.1",
    "sec": "9.2",
    "kind": "definition",
    "tier": "ext",
    "title": "Markov property and transition matrix",
    "oneLine": "Knowing the present state is enough to give the next-state probabilities.",
    "statement": "A Markov chain is a sequence of states $X_0,X_1,\\ldots$. If the current state is $i$, the next state is $j$ with chance $P_{ij}$, even when the earlier history is also known: $P(X_{n+1}=j\\mid X_n=i,X_{n-1},\\ldots,X_0)=P_{ij}$. These chances are the same at each step (a time-homogeneous chain). Each row lists all next-state choices, so $P_{ij}\\ge0$ and $\\sum_jP_{ij}=1$.",
    "intuition": "For a Markov chain, the current situation contains everything from the past that matters for the next move. For example, if the weather today is known, yesterday’s weather gives no extra help predicting tomorrow in this model.",
    "needs": [],
    "traps": [
      "Markov does not mean the states Xₙ are independent.",
      "Rows are conditioned on the current state; the transition matrix convention here is row-stochastic."
    ],
    "cards": [
      {
        "q": "State the Markov property.",
        "a": "Given the current state, the next state is conditionally independent of the earlier history.",
        "kind": "state"
      },
      {
        "q": "What must each transition-matrix row satisfy?",
        "a": "Nonnegative entries that sum to 1.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §9.2, PDF pp. 430–431."
  },
  {
    "id": "c.prob.9.2.2",
    "sec": "9.2",
    "kind": "theorem",
    "tier": "ext",
    "title": "Path probabilities and Chapman–Kolmogorov",
    "oneLine": "Multiply probabilities along one path; add across possible middle states.",
    "statement": "A path $i_0,\\ldots,i_n$ has probability $P(X_0=i_0)\\prod_{r=1}^nP_{i_{r-1},i_r}$. To travel from $i$ to $j$ in $r+s$ steps, add the chances of travelling through each possible state $k$ after $r$ steps: $P_{ij}^{(r+s)}=\\sum_kP_{ik}^{(r)}P_{kj}^{(s)}$. In matrix notation, the $n$-step transition matrix is $P^{(n)}=P^n$.",
    "intuition": "To get from state i to state j in several steps, list the possible in-between states. Find the chance of each route by multiplying its step chances, then add the route chances.",
    "needs": [
      "c.prob.9.2.1"
    ],
    "traps": [
      "The one-step entry Pᵢⱼ is not the probability of being at j after n steps.",
      "When composing steps, sum over intermediate states; multiplying one selected path gives only that path’s contribution."
    ],
    "cards": [
      {
        "q": "State Chapman–Kolmogorov for r+s steps.",
        "a": "$P_{ij}^{(r+s)}=\\sum_kP_{ik}^{(r)}P_{kj}^{(s)}$.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "List every possible state at the middle time, calculate each route’s chance, then add.",
      "why": "Exactly one middle state occurs. The routes through these states are separate cases covering every possible route.",
      "rungs": [
        {
          "why": "Separate the paths according to the middle state $X_r=k$.",
          "m": "P(X_{r+s}=j\\mid X_0=i)=\\sum_kP(X_{r+s}=j,X_r=k\\mid X_0=i)"
        },
        {
          "why": "Once $X_r=k$ is known, the Markov rule gives the remaining travel chance without needing the earlier path.",
          "m": "=\\sum_kP(X_{r+s}=j\\mid X_r=k)P(X_r=k\\mid X_0=i)"
        },
        {
          "why": "Multiply the chance of reaching $k$ by the chance of continuing from $k$ to $j$, then add over $k$.",
          "m": "P_{ij}^{(r+s)}=\\sum_kP_{ik}^{(r)}P_{kj}^{(s)}"
        }
      ],
      "ends": "In matrix notation this is matrix multiplication, so the n-step transition matrix is Pⁿ."
    },
    "provenance": "Ross, 10th ed., §9.2, PDF pp. 430–432, Proposition 2.1."
  },
  {
    "id": "c.prob.9.2.3",
    "sec": "9.2",
    "kind": "technique",
    "tier": "ext",
    "title": "Stationary distribution and long-run proportions",
    "oneLine": "A stationary distribution is a state mix that stays unchanged after one step.",
    "statement": "A probability row vector $\\pi$ is stationary if $\\pi=\\pi P$: one more transition leaves the state mix unchanged. In a finite chain where every state can reach every other (irreducible), this mix is unique and $\\pi_j$ is the long-run fraction of time spent in state $j$. If the chain also avoids a forced cycle (aperiodic), the probability of being in state $j$ after $n$ steps approaches $\\pi_j$ from any starting state. A stationary mix alone does not guarantee this convergence.",
    "intuition": "A stationary distribution is a set of state percentages that stays the same after one step. In a well-mixing finite chain, those percentages also describe the long-run share of time spent in each state.",
    "needs": [
      "c.prob.9.2.1",
      "c.prob.9.2.2"
    ],
    "traps": [
      "A stationary distribution may exist without convergence from every starting state.",
      "Solve πP=π together with Σπⱼ=1; do not mistake a right eigenvector convention for the row-vector convention used here."
    ],
    "cards": [
      {
        "q": "What equations define a stationary distribution?",
        "a": "π=πP, πⱼ≥0, and Σⱼπⱼ=1.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §9.2, PDF pp. 432–433, Theorem 2.1 and examples 2e–2f."
  },
  {
    "id": "c.prob.9.3.1",
    "sec": "9.3",
    "kind": "definition",
    "tier": "ext",
    "title": "Surprise and Shannon entropy",
    "oneLine": "Rare outcomes carry more information; entropy averages this surprise.",
    "statement": "An outcome with probability $p>0$ has surprise $-\\log_2p$ bits. Thus a chance of $1/2$ gives 1 bit, and $1/8$ gives 3 bits. For probabilities $p_i$, the average surprise is entropy: $H(X)=-\\sum_ip_i\\log_2p_i$, with $0\\log_20=0$. Requiring surprise to add for independent events, change continuously, and increase as probability falls gives $-C\\log_2p$ for a positive choice of units $C$; bits use $C=1$.",
    "intuition": "A rare result tells you more when it happens than an expected result does. Entropy is the average number of bits of surprise you would get before learning which result occurred.",
    "needs": [],
    "traps": [
      "Entropy is an average over outcomes, not the surprise of one particular outcome.",
      "The log base sets units: base 2 gives bits, natural log gives nats."
    ],
    "cards": [
      {
        "q": "Define Shannon entropy for a discrete variable.",
        "a": "$H(X)=-\\sum_ip_i\\log_2p_i$, with zero-mass terms set to zero.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §9.3, PDF pp. 434–436, Theorem 3.1 and entropy definition."
  },
  {
    "id": "c.prob.9.3.2",
    "sec": "9.3",
    "kind": "theorem",
    "tier": "ext",
    "title": "Entropy chain rule and conditioning reduces entropy",
    "oneLine": "Learning another variable cannot increase uncertainty on average.",
    "statement": "For discrete $X,Y$ with finitely many possible values, $H(X,Y)=H(Y)+H(X\\mid Y)$. Read this as: learning both means learning $Y$, then learning what remains unknown about $X$. Also $H(X\\mid Y)\\le H(X)$, with equality exactly when $X$ and $Y$ are independent. This compares averages over the observed values of $Y$; a particular observation may increase uncertainty.",
    "intuition": "After you learn Y, some questions about X may already be answered. The chain rule adds what Y tells you and what remains about X; on average, learning Y cannot leave you more uncertain about X.",
    "needs": [
      "c.prob.9.3.1"
    ],
    "traps": [
      "For a particular observed y, H(X|Y=y) can exceed H(X); the inequality is for the average conditional entropy.",
      "Independence gives equality; dependence can reduce but not increase average uncertainty."
    ],
    "cards": [
      {
        "q": "State the entropy chain rule.",
        "a": "$H(X,Y)=H(Y)+H(X|Y)$.",
        "kind": "state"
      },
      {
        "q": "When does H(X|Y)=H(X)?",
        "a": "Exactly when X and Y are independent.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Write a joint probability as “chance of $Y$” times “chance of $X$ given $Y$”, then split its logarithm.",
      "why": "The identity $\\log(ab)=\\log a+\\log b$ turns the two probability factors into two information contributions.",
      "rungs": [
        {
          "why": "Substitute the conditional factorization into joint entropy.",
          "m": "-\\sum_{x,y}p(x,y)\\log[p(y)p(x|y)]"
        },
        {
          "why": "Split the logarithm and sum each contribution.",
          "m": "H(X,Y)=H(Y)+H(X|Y)"
        },
        {
          "why": "Put $p_{xy}=P(X=x,Y=y)$ and $q_{xy}=P(X=x)P(Y=y)$. The inequality $\\ln u\\le u-1$ gives $\\sum_{p_{xy}>0}p_{xy}\\ln(q_{xy}/p_{xy})\\le\\sum_{p_{xy}>0}q_{xy}-1\\le0$. Divide by $\\ln2$.",
          "m": "H(X\\mid Y)-H(X)=\\sum_{p_{xy}>0}p_{xy}\\log_2(q_{xy}/p_{xy})\\le0"
        }
      ],
      "ends": "Equality in the entropy inequality holds precisely when p(x|y)=p(x) on all positive-probability pairs, which is independence."
    },
    "provenance": "Ross, 10th ed., §9.3, PDF pp. 436–437, Proposition 3.1, Lemma 3.1, Theorem 3.2."
  },
  {
    "id": "c.prob.9.3.3",
    "sec": "9.3",
    "kind": "theorem",
    "tier": "ext",
    "title": "Entropy is maximized by a uniform law",
    "oneLine": "Equal chances give the greatest uncertainty among a fixed number of possible values.",
    "statement": "If $X$ has at most $n$ possible values, $H(X)\\le\\log_2n$. Equality holds exactly when all $n$ values have probability $1/n$. For example, among two possible outcomes a fair coin has the largest entropy, 1 bit.",
    "intuition": "If one of n results is certain to happen and you have no reason to favor any one of them, equal chances create the most uncertainty: log₂n bits.",
    "needs": [
      "c.prob.9.3.1"
    ],
    "traps": [
      "The bound depends on the number of possible values, not the numerical sizes of those values.",
      "Zero-probability listed values mean the effective support is smaller, so equality cannot hold across all n slots."
    ],
    "cards": [
      {
        "q": "What is the maximum entropy for n possible outcomes?",
        "a": "log₂ n bits, attained by the uniform distribution.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Compare the chances with the equal-chance list. A logarithm inequality measures how much extra concentration the list has.",
      "why": "The elementary inequality $\\ln u\\le u-1$, with equality only at $u=1$, is the key comparison.",
      "rungs": [
        {
          "why": "For each positive $p_i$, apply $-\\ln(u_i/p_i)\\ge1-u_i/p_i$, where $u_i=1/n$. After multiplying by $p_i$ and adding, the right side is $1-\\sum_{p_i>0}u_i\\ge0$. This proves the displayed bound; zeros contribute nothing.",
          "m": "D(p\\|u)=\\sum_ip_i\\log_2(p_i/u_i)\\ge0"
        },
        {
          "why": "Expand and use Σp_i=1.",
          "m": "D(p\\|u)=\\sum_ip_i\\log_2p_i+\\log_2n=\\log_2n-H(X)"
        },
        {
          "why": "Rearrange and identify equality.",
          "m": "H(X)\\le\\log_2n,\\quad equality\\iff p_i=1/n"
        }
      ],
      "ends": "Uniform probabilities uniquely maximize entropy on a fixed n-point support."
    },
    "provenance": "Ross, 10th ed., §9.3, PDF pp. 435–436 and Problem 9.13, PDF p. 445."
  },
  {
    "id": "c.prob.9.4.1",
    "sec": "9.4",
    "kind": "theorem",
    "tier": "ext",
    "title": "Kraft inequality and noiseless coding bound",
    "oneLine": "Codes that can be read without separators obey a length rule and an entropy limit.",
    "statement": "A prefix-free binary code has no codeword that is the start of another. If its word lengths are $l_i$, Kraft’s inequality says $\\sum_i2^{-l_i}\\le1$. For source chances $p_i$, its average length $L=\\sum_ip_il_i$ is at least $H(X)$. For a finite source with positive probabilities, a prefix-free code exists with $H(X)\\le L<H(X)+1$. A one-value source can use an empty word.",
    "intuition": "A prefix-free code never makes one complete message label the beginning of another, so you can tell when a message ends. Common messages can get short labels and rare messages longer ones, but the average label length cannot beat the source’s average information.",
    "needs": [
      "c.prob.9.3.1"
    ],
    "traps": [
      "Prefix-free is the decodability condition; arbitrary variable-length strings can be ambiguous.",
      "Entropy is a lower bound on average length, not necessarily an exactly attainable length for each finite source."
    ],
    "cards": [
      {
        "q": "State the binary Kraft inequality.",
        "a": "For prefix-free lengths lᵢ, Σᵢ2^(−lᵢ)≤1.",
        "kind": "state"
      },
      {
        "q": "What average-length bounds does the noiseless coding theorem give?",
        "a": "H(X)≤L, and some code has L<H(X)+1.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Interpret length $l_i$ as a share $2^{-l_i}$ of a binary tree. Prefix-free words occupy separate shares, giving Kraft’s rule. Then compare the source chances with these shares.",
      "why": "At a common tree depth $m$ at least as large as all word lengths, word $i$ occupies $2^{m-l_i}$ leaves. These leaves cannot overlap, so their total is at most $2^m$. Dividing proves Kraft’s inequality for a finite code.",
      "rungs": [
        {
          "why": "Set qᵢ proportional to 2^(−lᵢ), normalized by their sum.",
          "m": "q_i=2^{-l_i}/\\sum_j2^{-l_j}"
        },
        {
          "why": "Use the nonnegative logarithm comparison from the entropy proof: $\\sum_i p_i\\log_2(p_i/q_i)\\ge0$. Substitute the normalized tree shares for $q_i$.",
          "m": "H(X)\\le\\sum_ip_il_i+\\log_2\\sum_j2^{-l_j}"
        },
        {
          "why": "Apply Kraft’s bound.",
          "m": "H(X)\\le L"
        }
      ],
      "ends": "For positive source chances choose $l_i=\\lceil-\\log_2p_i\\rceil$. Then $2^{-l_i}\\le p_i$, so the length list satisfies Kraft’s rule; its converse constructs a prefix-free tree. Since $-\\log_2p_i\\le l_i<-\\log_2p_i+1$, averaging gives $H(X)\\le L<H(X)+1$."
    },
    "provenance": "Ross, 10th ed., §9.4, PDF pp. 438–440, Lemma 4.1 and Theorem 4.1."
  },
  {
    "id": "c.prob.9.4.2",
    "sec": "9.4",
    "kind": "theorem",
    "tier": "ext",
    "title": "Binary symmetric channel capacity",
    "oneLine": "A noisy binary channel has a limit on how many information bits it can reliably carry.",
    "statement": "Suppose each transmitted bit is correct with chance $p$, independently of other uses. The binary symmetric channel has capacity $C=1+p\\log_2p+(1-p)\\log_2(1-p)=1-H_b(p)$ bits per use, with $0\\log_20=0$. Rates below $C$ allow error probability to be made arbitrarily small by using sufficiently long codes. For $p<1/2$, reversing received bits gives the equivalent channel with correct chance $1-p$.",
    "intuition": "A binary channel can send at most one bit each time. If a bit flips randomly, some of that capacity is spent figuring out whether the received bit was changed; the remaining reliable rate is 1−H_b(p).",
    "needs": [
      "c.prob.9.3.1"
    ],
    "traps": [
      "The coding theorem is asymptotic; it does not say a short code has zero error.",
      "If p denotes crossover probability instead of correctness probability, the algebraic expression must be reparameterized; Ross uses correctness probability p."
    ],
    "cards": [
      {
        "q": "What is the binary symmetric channel capacity in Ross’s correctness-probability convention?",
        "a": "$1-H_b(p)=1+p\\log_2p+(1-p)\\log_2(1-p)$ bits/use.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §9.4, PDF pp. 441–443, Theorem 4.2 and Problem 9.18."
  }
]
);
