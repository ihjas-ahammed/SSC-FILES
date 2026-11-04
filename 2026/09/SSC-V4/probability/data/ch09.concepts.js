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
      "idea": "Translate short-time arrival rules into differential equations and solve them step by step.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let p_n(t)=P(N(t)=n); the process starts at zero and has stationary independent increments.",
          "m": "$$p_0(0)=1,\\quad p_n(0)=0\\ (n\\ge1)$$",
          "meaning": "The model has no arrivals before time zero."
        },
        {
          "why": "In an interval of length h, subtract the chances of one or more arrivals from 1.",
          "m": "$$P(N(h)=0)=1-\\lambda h+o(h)$$",
          "meaning": "Both the one-arrival remainder and the multiple-arrival probability have error divided by h tending to zero."
        },
        {
          "why": "No arrivals by t+h requires no arrivals by t and no arrivals in the new interval.",
          "m": "$$p_0(t+h)=p_0(t)[1-\\lambda h+o(h)]$$",
          "meaning": "Independent increments multiply the probabilities; stationarity lets the new interval use the length-h rule."
        },
        {
          "why": "Subtract p_0(t), divide by h, and shrink h to zero.",
          "m": "$$p_0'(t)=-\\lambda p_0(t)$$",
          "meaning": "This is the definition of the derivative; the remainder divided by h vanishes."
        },
        {
          "why": "Multiply by e^(λt) and use the product derivative rule.",
          "m": "$$\\frac d{dt}[e^{\\lambda t}p_0(t)]=e^{\\lambda t}[p_0'(t)+\\lambda p_0(t)]=0$$",
          "meaning": "A derivative zero gives a constant; the initial value makes that constant 1, so p_0(t)=e^(−λt)."
        },
        {
          "why": "For n≥1, a final count n comes from count n and no new arrival, or count n−1 and one new arrival.",
          "m": "$$p_n(t+h)=p_n(t)(1-\\lambda h)+p_{n-1}(t)\\lambda h+o(h)$$",
          "meaning": "All remaining ways involve at least two new arrivals and have total probability o(h)."
        },
        {
          "why": "Subtract, divide by h and take the limit to obtain the recursion.",
          "m": "$$p_n'(t)+\\lambda p_n(t)=\\lambda p_{n-1}(t)$$",
          "meaning": "The left side will again become a product derivative after multiplication by e^(λt)."
        },
        {
          "why": "Set q_n(t)=e^(λt)p_n(t), giving q_0=1 and q_n(0)=0 for n≥1.",
          "m": "$$q_n'(t)=\\lambda q_{n-1}(t)$$",
          "meaning": "The exponent factor cancels the same factor in the previous-count probability."
        },
        {
          "why": "Induct from q_0=1 and integrate the power for each next count.",
          "m": "$$q_n(t)=\\int_0^t\\lambda\\frac{(\\lambda s)^{n-1}}{(n-1)!}ds=\\frac{(\\lambda t)^n}{n!}$$",
          "meaning": "The derivative of s^n/n is s^(n−1), and n(n−1)!=n!."
        },
        {
          "why": "Undo the integrating factor.",
          "m": "$$p_n(t)=e^{-\\lambda t}\\frac{(\\lambda t)^n}{n!}$$",
          "meaning": "These are Poisson masses of parameter λt and sum to 1 by the exponential series."
        }
      ],
      "ends": "The Poisson count law follows from the process assumptions and elementary differential-equation calculations; derivatives express the short-time limits."
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
      "idea": "Translate the first waiting time into a count event, then restart the process and sum the waits.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let T_1 be the first waiting time and S_n the n-th arrival time of a rate-λ process with λ>0.",
          "m": "$$\\{T_1>t\\}=\\{N(t)=0\\}\\quad(t\\ge0)$$",
          "meaning": "The first wait exceeds t exactly when there have been no arrivals by t."
        },
        {
          "why": "Use the Poisson zero-count probability already derived.",
          "m": "$$P(T_1>t)=e^{-\\lambda t}$$",
          "meaning": "This is the exponential survival function."
        },
        {
          "why": "Subtract survival from 1 and differentiate the CDF.",
          "m": "$$F_{T_1}(t)=1-e^{-\\lambda t},\\quad f_{T_1}(t)=\\lambda e^{-\\lambda t}$$",
          "meaning": "The chain rule supplies the rate factor λ; the density is zero for t<0."
        },
        {
          "why": "At an arrival time S_k, the future process restarts independently with the same rate.",
          "m": "$$P(T_{k+1}>t\\mid T_1,\\ldots,T_k)=e^{-\\lambda t}$$",
          "meaning": "This uses the strong Markov restart property of a Poisson process at stopping times. Independent increments at fixed deterministic times alone do not justify substituting a random S_k; that extension is an explicit advanced prerequisite."
        },
        {
          "why": "The unchanged conditional law for every previous wait proves the waits are iid exponential.",
          "m": "$$T_1,T_2,\\ldots\\text{ are independent }\\operatorname{Exp}(\\lambda)$$",
          "meaning": "Sequential conditional probabilities factor into the same exponential laws."
        },
        {
          "why": "The n-th arrival occurs after the first n waits have elapsed.",
          "m": "$$S_n=T_1+\\cdots+T_n$$",
          "meaning": "This is a definition of arrival time through accumulated interarrival times."
        },
        {
          "why": "Use the gamma-sum law with exponential shape 1.",
          "m": "$$S_n\\sim\\operatorname{Gamma}(n,\\lambda),\\quad f_{S_n}(s)=\\frac{\\lambda^n s^{n-1}e^{-\\lambda s}}{(n-1)!}\\ (s>0)$$",
          "meaning": "The sum of n independent common-rate gamma shapes 1 has shape n; Γ(n)=(n−1)! follows by integration by parts."
        },
        {
          "why": "Check the same arrival-time law directly from counts.",
          "m": "$$P(S_n>t)=P(N(t)<n)=e^{-\\lambda t}\\sum_{j=0}^{n-1}\\frac{(\\lambda t)^j}{j!}$$",
          "meaning": "Differentiating this finite expression and cancelling consecutive terms gives the same gamma density, independently checking the marginal arrival-time formula."
        }
      ],
      "ends": "Waits are iid exponential once the random-time restart property is justified; their accumulated arrival times are gamma."
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
    "provenance": "Ross, 10th ed., §9.2, PDF pp. 430–431.",
    "proof": {
      "idea": "Define the Markov rule and derive the transition-row requirements.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let X_n denote the current state, and suppose the full past is known.",
          "m": "$$P(X_{n+1}=j\\mid X_n=i,X_{n-1},\\ldots,X_0)=P_{ij}$$",
          "meaning": "This is the time-homogeneous Markov assumption: only the present state is needed to specify the next-step law."
        },
        {
          "why": "For each fixed current state i, these are probabilities of separate next-state events.",
          "m": "$$P_{ij}\\ge0$$",
          "meaning": "Nonnegativity is inherited from conditional probability."
        },
        {
          "why": "Exactly one possible next state occurs.",
          "m": "$$\\sum_jP_{ij}=1$$",
          "meaning": "The next-state events are disjoint and exhaustive within the current-state model."
        },
        {
          "why": "Organize those conditional laws as the rows of a matrix.",
          "m": "$$P=(P_{ij})$$",
          "meaning": "Row i lists where the process can go after leaving state i; rows, rather than columns, sum to 1 in this convention."
        },
        {
          "why": "Given a current-state row distribution v_i, split the next-state event by the current state.",
          "m": "$$P(X_{n+1}=j)=\\sum_i v_iP_{ij}$$",
          "meaning": "Total probability gives the next-state mix, which is the row-vector product vP."
        }
      ],
      "ends": "The Markov property is a modeling assumption. Nonnegative normalized matrix rows and the vP updating rule follow from it."
    }
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
      "idea": "Multiply conditional step probabilities for a path and add over the middle state for a long transition.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let P_ij=P(X_(t+1)=j given X_t=i) be a time-homogeneous transition probability.",
          "m": "$$\\sum_jP_{ij}=1,\\quad P_{ij}\\ge0$$",
          "meaning": "Each row is the probability distribution of the next state from current state i."
        },
        {
          "why": "Use the ordinary chain rule for one specific state path.",
          "m": "$$P(X_0=i_0,\\ldots,X_n=i_n)=P(X_0=i_0)\\prod_{r=1}^nP(X_r=i_r\\mid X_0=i_0,\\ldots,X_{r-1}=i_{r-1})$$",
          "meaning": "This separates a joint path probability into sequential conditional factors."
        },
        {
          "why": "The Markov property removes all but the latest known state from each factor.",
          "m": "$$P(\\text{path})=P(X_0=i_0)\\prod_{r=1}^nP_{i_{r-1},i_r}$$",
          "meaning": "Homogeneity means the same transition matrix applies at every step."
        },
        {
          "why": "For a journey of r+s steps, split all possible paths by their state k after r steps.",
          "m": "$$P(X_{r+s}=j\\mid X_0=i)=\\sum_kP(X_r=k,X_{r+s}=j\\mid X_0=i)$$",
          "meaning": "The middle-state cases are disjoint and exhaustive."
        },
        {
          "why": "Factor each case using the conditional multiplication rule.",
          "m": "$$P(X_r=k,X_{r+s}=j\\mid X_0=i)=P_{ik}^{(r)}P_{kj}^{(s)}$$",
          "meaning": "Markov and homogeneity make the continuation depend only on k and the remaining s steps."
        },
        {
          "why": "Sum the middle-state contributions.",
          "m": "$$P_{ij}^{(r+s)}=\\sum_kP_{ik}^{(r)}P_{kj}^{(s)}$$",
          "meaning": "This is Chapman–Kolmogorov, including terms of zero probability as zero contributions."
        },
        {
          "why": "Matrix multiplication is defined by exactly this row-times-column sum.",
          "m": "$$P^{(r+s)}=P^{(r)}P^{(s)},\\quad P^{(n)}=P^n$$",
          "meaning": "Starting from the one-step matrix P, induction gives the n-step matrix power; P^0 is the identity matrix."
        }
      ],
      "ends": "Path probabilities multiply along fixed paths; transition probabilities add those products across alternative paths."
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
    "provenance": "Ross, 10th ed., §9.2, PDF pp. 432–433, Theorem 2.1 and examples 2e–2f.",
    "proof": {
      "idea": "Derive the stationary equation and use a periodic example to explain the limit-theorem conditions.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "If the current-state distribution is the row vector π, total probability updates it after one step.",
          "m": "$$P(X_{n+1}=j)=\\sum_i\\pi_iP_{ij}$$",
          "meaning": "The weights π_i describe the current mixture of states."
        },
        {
          "why": "A stationary mixture remains unchanged after that update.",
          "m": "$$\\pi_j=\\sum_i\\pi_iP_{ij},\\quad\\pi_i\\ge0,\\quad\\sum_i\\pi_i=1$$",
          "meaning": "These equations define stationarity and must be solved together with normalization."
        },
        {
          "why": "In matrix shorthand the same equations read π=πP.",
          "m": "$$\\pi=\\pi P$$",
          "meaning": "This derives the matrix equation from total probability, rather than assuming a matrix formula."
        },
        {
          "why": "For a two-state chain with switch probabilities a,b>0, write π=(x,1−x).",
          "m": "$$x=x(1-a)+(1-x)b\\ \\Longrightarrow\\ x=\\frac b{a+b}$$",
          "meaning": "Expand, cancel x, and solve ax=b−bx; the other stationary probability is a/(a+b)."
        },
        {
          "why": "For a finite irreducible chain, the Markov ergodic theorem gives a unique stationary distribution and long-run visit frequencies.",
          "m": "$$\\frac1n\\sum_{k=0}^{n-1}\\mathbf1_{\\{X_k=j\\}}\\to\\pi_j\\quad\\text{almost surely}$$",
          "meaning": "This is an advanced chain theorem, not a consequence of solving π=πP alone."
        },
        {
          "why": "For distribution-at-a-fixed-time convergence, also require aperiodicity.",
          "m": "$$P(X_n=j\\mid X_0=i)\\to\\pi_j$$",
          "meaning": "The finite irreducible aperiodic convergence theorem supplies this stronger kind of limit."
        },
        {
          "why": "If a=b=1, the process alternates deterministically even though π=(1/2,1/2) is stationary.",
          "m": "$$P=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$$",
          "meaning": "From a fixed start, state probabilities alternate rather than converge; visit fractions still tend to one-half. This example explains why the two limit statements differ."
        }
      ],
      "ends": "Stationarity is derived by unchanged one-step mixing; long-run frequencies and time-marginal convergence use separate theorems with explicit hypotheses."
    }
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
    "provenance": "Ross, 10th ed., §9.3, PDF pp. 434–436, Theorem 3.1 and entropy definition.",
    "proof": {
      "idea": "Explain why independent-event surprise adds and why logarithms express that rule.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For independent events of probabilities p and q, their joint chance is pq.",
          "m": "$$s(pq)=s(p)+s(q)$$",
          "meaning": "Additive surprise is a desired property of the information measure, not a probability axiom."
        },
        {
          "why": "The logarithm turns multiplication into addition.",
          "m": "$$-\\log_2(pq)=-\\log_2p-\\log_2q$$",
          "meaning": "Thus logarithmic surprise has the required additivity."
        },
        {
          "why": "To see why continuity singles it out, set r(t)=s(2^(−t)) for t≥0.",
          "m": "$$r(t+u)=r(t)+r(u)$$",
          "meaning": "The product 2^(−t)2^(−u)=2^(−(t+u)) translates the desired property into an additive equation."
        },
        {
          "why": "Repeated addition gives r(m)=m r(1) and r(m/n)=(m/n)r(1) for nonnegative integers m and positive n.",
          "m": "$$r(t)=Ct\\quad\\text{for rational }t\\ge0$$",
          "meaning": "Divide the equation n r(m/n)=r(m) by n."
        },
        {
          "why": "Continuity extends this linear formula from rational to real t.",
          "m": "$$s(p)=-C\\log_2p$$",
          "meaning": "Choosing the unit so a fair binary outcome has surprise 1 sets C=1; rarer outcomes then have greater surprise."
        },
        {
          "why": "Average these outcome surprises with their actual probabilities.",
          "m": "$$H(X)=\\sum_ip_i[-\\log_2p_i]$$",
          "meaning": "This defines Shannon entropy as expected surprise."
        },
        {
          "why": "For zero-probability outcomes use the limiting contribution.",
          "m": "$$\\lim_{p\\downarrow0}[-p\\log_2p]=0$$",
          "meaning": "Substitute p=e^(−t): the expression becomes t e^(−t)/ln2→0, justifying the convention 0 log 0=0."
        }
      ],
      "ends": "Logarithmic surprise follows from continuous additivity for independent probabilities; entropy is its probability-weighted average."
    }
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
      "idea": "Split a logarithm for the chain rule, then derive the logarithm bound needed for reduced average entropy.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a finite joint distribution write p_xy=P(X=x,Y=y) and p_y=P(Y=y).",
          "m": "$$p_{xy}=p_y p_{x\\mid y}$$",
          "meaning": "The conditional factorization holds on positive-probability pairs; zero terms are assigned 0 log 0=0."
        },
        {
          "why": "Entropy is the average base-2 surprise of a pair.",
          "m": "$$H(X,Y)=-\\sum_{x,y:p_{xy}>0}p_{xy}\\log_2p_{xy}$$",
          "meaning": "Base 2 measures surprise in bits."
        },
        {
          "why": "Use log(ab)=log(a)+log(b) in the conditional factorization.",
          "m": "$$H(X,Y)=-\\sum_{x,y}p_{xy}\\log_2p_y-\\sum_{x,y}p_{xy}\\log_2p_{x\\mid y}$$",
          "meaning": "All terms shown are evaluated on positive-probability pairs."
        },
        {
          "why": "In the first sum add over x, giving p_y; in the second use the definition of conditional entropy.",
          "m": "$$H(X,Y)=H(Y)+H(X\\mid Y)$$",
          "meaning": "Conditional entropy is Σ_y p_y H(X given Y=y)."
        },
        {
          "why": "For u>0, establish the inequality log(u)≤u−1.",
          "m": "$$\\ln u=\\int_1^u\\frac{dt}{t}\\le u-1$$",
          "meaning": "For u≥1 the integrand is at most 1; for 0<u<1 it is at least 1 on (u,1), and reversing the integration direction gives the same inequality. Equality holds only at u=1."
        },
        {
          "why": "Let q_xy=P(X=x)P(Y=y), which is positive wherever p_xy is positive.",
          "m": "$$H(X\\mid Y)-H(X)=\\sum_{p_{xy}>0}p_{xy}\\log_2\\frac{q_{xy}}{p_{xy}}$$",
          "meaning": "Expand the entropy definitions and use log(p_x p_y/p_xy)=log(p_x)−log(p_(x|y))."
        },
        {
          "why": "Apply the logarithm inequality to each q_xy/p_xy and add.",
          "m": "$$H(X\\mid Y)-H(X)\\le\\frac{\\sum_{p_{xy}>0}q_{xy}-1}{\\ln2}\\le0$$",
          "meaning": "Multiplying ln(q/p)≤q/p−1 by p cancels the denominator; the q values on a subset sum to at most 1."
        },
        {
          "why": "Equality requires every positive pair to have q_xy=p_xy and no positive q mass outside that set.",
          "m": "$$H(X\\mid Y)=H(X)\\ \\Longleftrightarrow\\ p_{xy}=p_xp_y\\text{ for all pairs}$$",
          "meaning": "Those conditions are exactly independence. This compares averages over Y, not the entropy of every individual observed slice."
        }
      ],
      "ends": "The entropy chain rule follows from a log product, and the logarithm bound proves that conditioning reduces entropy on average."
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
      "idea": "Compare the actual masses with equal masses and prove the required log comparison.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "List n possible values and let p_i be their probabilities, allowing zero values.",
          "m": "$$u_i=1/n,\\quad\\sum_ip_i=\\sum_iu_i=1$$",
          "meaning": "The u_i describe the uniform comparison law."
        },
        {
          "why": "For every u>0, ln(u)≤u−1, with equality only at u=1.",
          "m": "$$-\\ln u\\ge1-u$$",
          "meaning": "One proof integrates 1/t from 1 to u and compares it with height 1 on either side of 1."
        },
        {
          "why": "For each p_i>0, substitute u=u_i/p_i and multiply by p_i.",
          "m": "$$p_i\\ln(p_i/u_i)\\ge p_i-u_i$$",
          "meaning": "A positive probability preserves the inequality when multiplying."
        },
        {
          "why": "Add those inequalities and divide by the positive number ln 2.",
          "m": "$$D(p\\Vert u)=\\sum_{p_i>0}p_i\\log_2(p_i/u_i)\\ge\\frac{1-\\sum_{p_i>0}u_i}{\\ln2}\\ge0$$",
          "meaning": "Zero p_i terms contribute zero, and the selected u_i sum to at most 1."
        },
        {
          "why": "Since log_2(u_i)=−log_2(n), expand the left side.",
          "m": "$$D(p\\Vert u)=\\sum_ip_i\\log_2p_i+\\log_2n=\\log_2n-H(X)$$",
          "meaning": "The uniform constant multiplies Σp_i=1."
        },
        {
          "why": "Rearrange the nonnegative comparison.",
          "m": "$$H(X)\\le\\log_2n$$",
          "meaning": "Entropy cannot exceed the surprise level of n equal possibilities."
        },
        {
          "why": "Equality requires no missing uniform mass and equality in every logarithm comparison.",
          "m": "$$H(X)=\\log_2n\\ \\Longleftrightarrow\\ p_i=1/n\\text{ for every }i$$",
          "meaning": "Thus all n outcomes must be equally likely; if fewer are possible the maximum is correspondingly smaller."
        }
      ],
      "ends": "Uniform probabilities maximize entropy because the nonnegative logarithm comparison measures the gap from that maximum."
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
      "idea": "Count binary-tree descendants for Kraft’s inequality, then derive both coding-length bounds.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "A prefix-free binary code has integer word lengths l_i and no word begins another.",
          "m": "$$D=\\max_i l_i$$",
          "meaning": "For a finite code, look at the full binary tree at depth D, with 2^D possible bit strings."
        },
        {
          "why": "A codeword of length l_i is the prefix of exactly 2^(D−l_i) depth-D strings.",
          "m": "$$2^{D-l_i}$$",
          "meaning": "Each of the remaining D−l_i bits has two choices by the multiplication rule."
        },
        {
          "why": "Different prefix-free codewords cover disjoint descendant sets.",
          "m": "$$\\sum_i2^{D-l_i}\\le2^D$$",
          "meaning": "Their descendants must fit among all depth-D strings; this is the essential prefix-free assumption."
        },
        {
          "why": "Divide by 2^D to obtain Kraft’s inequality.",
          "m": "$$K=\\sum_i2^{-l_i}\\le1$$",
          "meaning": "A countable code follows by applying the finite bound to every finite sublist."
        },
        {
          "why": "For positive source probabilities p_i define q_i=2^(−l_i)/K, so the q_i sum to 1.",
          "m": "$$q_i=\\frac{2^{-l_i}}K$$",
          "meaning": "The earlier logarithm comparison applies to any two normalized positive distributions."
        },
        {
          "why": "Expand the nonnegative comparison D(p||q).",
          "m": "$$0\\le\\sum_ip_i\\log_2(p_i/q_i)=-H(X)+\\sum_ip_il_i+\\log_2K$$",
          "meaning": "Use log_2(q_i)=−l_i−log_2K and Σp_i=1."
        },
        {
          "why": "Write L=Σp_i l_i and use log_2K≤0.",
          "m": "$$H(X)\\le L+\\log_2K\\le L$$",
          "meaning": "This proves the lower bound on average code length."
        },
        {
          "why": "For the upper bound, select rounded surprise lengths.",
          "m": "$$l_i=\\lceil-\\log_2p_i\\rceil,\\quad2^{-l_i}\\le p_i,\\quad\\sum_i2^{-l_i}\\le1$$",
          "meaning": "Ceiling means round upward to an integer, so these lengths satisfy Kraft’s condition."
        },
        {
          "why": "To see these lengths can be assigned prefix-free words, process them in increasing order.",
          "m": "$$\\#\\text{free nodes at depth }l_i=2^{l_i}\\left(1-\\sum_{j<i}2^{-l_j}\\right)\\ge1$$",
          "meaning": "Earlier chosen words block their descendants. The full Kraft sum ensures the remaining capacity is at least 2^(−l_i), hence at least one node is free; choosing it continues the construction."
        },
        {
          "why": "Each rounded length is less than surprise plus 1; average this strict inequality.",
          "m": "$$L=\\sum_ip_i\\lceil-\\log_2p_i\\rceil<H(X)+1$$",
          "meaning": "Together with the lower bound this gives H≤L<H+1. A one-value source may use the unique empty word of length zero."
        }
      ],
      "ends": "Tree counting proves Kraft, the log comparison proves the lower coding bound, and rounded surprise lengths plus the tree construction prove existence below H+1."
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
    "provenance": "Ross, 10th ed., §9.4, PDF pp. 441–443, Theorem 4.2 and Problem 9.18.",
    "proof": {
      "idea": "Compute the maximum information of a binary symmetric channel before invoking the coding theorem.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let X be the sent bit and let independent noise E be 1 when that bit is flipped.",
          "m": "$$Y=X\\mathbin{\\oplus}E,\\quad P(E=0)=p,\\quad P(E=1)=1-p$$",
          "meaning": "Exclusive-or means add bits modulo 2; this is the binary symmetric channel model."
        },
        {
          "why": "For either fixed sent value, the output is correct with chance p and flipped otherwise.",
          "m": "$$H(Y\\mid X)=H_b(p)=-p\\log_2p-(1-p)\\log_2(1-p)$$",
          "meaning": "Conditional output entropy equals the same two-value noise entropy for each input."
        },
        {
          "why": "Information shared by input and output is the reduction in output entropy upon learning the input.",
          "m": "$$I(X;Y)=H(Y)-H(Y\\mid X)$$",
          "meaning": "This is the mutual-information definition, equivalent to the earlier joint entropy identities."
        },
        {
          "why": "A binary output has at most 1 bit of entropy by the uniform-maximum theorem.",
          "m": "$$I(X;Y)\\le1-H_b(p)$$",
          "meaning": "The bound follows because the conditional noise entropy does not depend on the chosen input probability."
        },
        {
          "why": "Choose a uniform sent bit so the output is also uniform.",
          "m": "$$P(Y=0)=\\tfrac12p+\\tfrac12(1-p)=\\tfrac12$$",
          "meaning": "Total probability shows that this choice makes H(Y)=1 and reaches the bound."
        },
        {
          "why": "Maximizing over input distributions therefore gives the information expression.",
          "m": "$$\\max_{P_X}I(X;Y)=1-H_b(p)$$",
          "meaning": "The algebra establishes the maximum mutual information per use."
        },
        {
          "why": "The channel coding theorem identifies this maximum with achievable reliable communication capacity.",
          "m": "$$C=1+p\\log_2p+(1-p)\\log_2(1-p)$$",
          "meaning": "The theorem, an advanced information-theory prerequisite, proves reliable coding below C and its converse; the entropy calculation alone does not construct those long codes."
        },
        {
          "why": "For p<1/2 reverse each received bit, changing correct probability to 1−p.",
          "m": "$$H_b(p)=H_b(1-p),\\quad C(p)=C(1-p)$$",
          "meaning": "The entropy expression is symmetric; p=1/2 gives zero capacity, while deterministic correct or inverted output gives 1 bit."
        }
      ],
      "ends": "Entropy algebra derives the maximum mutual information; the channel coding theorem supplies its operational capacity meaning."
    }
  }
]
);
