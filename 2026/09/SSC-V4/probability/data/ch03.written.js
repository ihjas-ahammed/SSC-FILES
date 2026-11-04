var QUESTIONS = QUESTIONS || [];
QUESTIONS.push(...
[
  {
    "id": "w.prob.3.2.1",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Condition on distinct dice",
    "prompt": "(Adapted from Ross Problem 3.1.) Two fair dice are rolled. Find the conditional probability that at least one is a six, given that their values differ.",
    "approach": "Use the event in the condition as the reduced sample space of ordered outcomes. Count its members and then the favorable members.",
    "solution": "There are 36 equally likely ordered outcomes before conditioning. The condition removes the 6 doubles, leaving 30 outcomes. If at least one die is six and the values differ, the outcomes are (6,j) and (j,6), for j=1,...,5: 10 outcomes. Hence P(at least one 6 | different)=10/30=1/3.",
    "trap": "Including (6,6) among the favorable outcomes even though it violates the conditioning event.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.3"
    ]
  },
  {
    "id": "w.prob.3.2.2",
    "course": "prob",
    "sec": "3.2",
    "marks": 5,
    "title": "Sequential passes",
    "prompt": "(Adapted from Ross Problem 3.13.) A student passes exam 1 with probability .9. Given passing exam 1, the probability of passing exam 2 is .8; given passing both 1 and 2, the probability of passing exam 3 is .7. Find (a) the probability of passing all three; (b) given that she did not pass all three, the probability she failed exam 2.",
    "approach": "First calculate the sequential probability of three passes. Failure to pass all three consists of disjoint paths: fail 1, pass 1 then fail 2, or pass 1 and 2 then fail 3.",
    "solution": "(a) By the chain rule, P(pass all)=.9·.8·.7=.504. (b) The event “failed exam 2” has probability .9·.2=.18. Since it is contained in the event “did not pass all three,” divide by 1−.504=.496. The required conditional probability is .18/.496=45/124≈.3629.",
    "trap": "Using .2 alone for the probability of failing exam 2; she reaches exam 2 only after passing exam 1.",
    "tests": [
      "c.prob.3.2.2"
    ]
  },
  {
    "id": "w.prob.3.3.1",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Reverse a relative-risk statement",
    "prompt": "(Adapted from Ross Problem 3.16.) Smokers make up 32% of women of childbearing age. Ectopic pregnancy is twice as likely for a smoker as for a nonsmoker. Find the percentage of women with ectopic pregnancies who are smokers.",
    "approach": "Let r be the nonsmoker risk, so the smoker risk is 2r. Apply Bayes using the two population proportions; r cancels.",
    "solution": "Let S denote smoker and E ectopic pregnancy. P(E|S)=2r and P(E|Sᶜ)=r. By Bayes, P(S|E)=P(E|S)P(S)/[P(E|S)P(S)+P(E|Sᶜ)P(Sᶜ)]=(2r·.32)/(2r·.32+r·.68)=.64/1.32=16/33≈.48485. Thus about 48.5%.",
    "trap": "A twofold risk does not mean that two thirds of cases are smokers unless the groups were equally common.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ]
  },
  {
    "id": "w.prob.3.3.2",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Posterior with an imperfect signal",
    "prompt": "(Adapted from Ross Problem 3.33.) A tumor is cancerous with prior probability p. A fair coin is flipped. On heads the doctor calls if and only if the tumor is benign; on tails the doctor never calls. Find P(cancer | no call) and compare it with p.",
    "approach": "Calculate the no-call likelihood separately under cancer and benign status, then normalize. Keep p symbolic.",
    "solution": "If cancer is present, the doctor never calls, so P(no call|cancer)=1. If benign, no call occurs on tails, so P(no call|benign)=1/2. Therefore P(no call)=p+(1−p)/2=(1+p)/2, and P(cancer|no call)=p/[(1+p)/2]=2p/(1+p). For 0<p<1, 2p/(1+p)>p because 2/(1+p)>1; non-call raises the cancer probability. Endpoints p=0 or 1 remain equal.",
    "trap": "Treating the random coin decision as if it were informative under cancer; under cancer there is no call in either coin outcome.",
    "tests": [
      "c.prob.3.3.2",
      "c.prob.3.3.3"
    ]
  },
  {
    "id": "w.prob.3.4.1",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Pairwise but not mutual",
    "prompt": "A fair pair (X,Y) takes values (0,0),(0,1),(1,0),(1,1) equally likely. Define A={X=0}, B={Y=0}, C={X=Y}. Verify that each pair among A,B,C is independent, but the three events are not mutually independent.",
    "approach": "Compute each marginal and pairwise intersection, then compare the triple-intersection probability with the product of the three marginals.",
    "solution": "Each event has probability 1/2. A∩B={(0,0)}, A∩C={(0,0)}, and B∩C={(0,0)}, each of probability 1/4=(1/2)(1/2); all pairs are independent. But A∩B∩C={(0,0)} also has probability 1/4, whereas mutual independence would require (1/2)^3=1/8. Thus pairwise independence does not imply mutual independence.",
    "trap": "Stopping after checking the three pairwise identities.",
    "tests": [
      "c.prob.3.4.1",
      "c.prob.3.4.3"
    ]
  },
  {
    "id": "w.prob.3.ross.example.2a",
    "course": "prob",
    "sec": "3.2",
    "marks": 3,
    "title": "Missing key in jacket pocket search",
    "prompt": "<p>Joe is 80% certain that his missing key is in one of the two pockets of his hanging jacket, being 40% certain it is in the left pocket and 40% certain it is in the right pocket. If a search of the left pocket does not find the key, what is the conditional probability that it is in the right pocket?</p>",
    "approach": "<p>Apply the definition of conditional probability using the complement of finding the key in the left pocket.</p>",
    "solution": "<p>Let $L$ and $R$ be the events that the key is in the left and right pockets, respectively. We are given $P(L) = 0.40$ and $P(R) = 0.40$. The search of the left pocket failing is the event $L^c$. Because the key cannot be in both pockets simultaneously, $R \\cap L^c = R$. Hence, the conditional probability that the key is in the right pocket is $P(R\\mid L^c) = \\frac{P(R\\cap L^c)}{P(L^c)} = \\frac{P(R)}{1 - P(L)} = \\frac{0.40}{1 - 0.40} = \\frac{0.40}{0.60} = \\frac{2}{3}$.</p>",
    "trap": "Do not divide by the prior probability of being in any pocket (0.80); the conditioning event is solely that the left pocket was empty.",
    "tests": [
      "c.prob.3.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.2, Example 2a, PDF p. 82."
  },
  {
    "id": "w.prob.3.ross.example.2b",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Two-coin toss conditional on heads",
    "prompt": "<p>A fair coin is flipped twice with all four outcomes in $S=\\{(H,H),(H,T),(T,H),(T,T)\\}$ equally likely. Find the conditional probability that both flips land on heads given that: (a) the first flip lands on heads; (b) at least one flip lands on heads.</p>",
    "approach": "<p>Reduce the sample space to the conditioning event in each case and count favorable outcomes.</p>",
    "solution": "<p>(a) Given the first flip is heads, the reduced sample space is $F = \\{(H,H),(H,T)\\}$, containing 2 equally likely outcomes. Exactly 1 outcome is $(H,H)$, so $P(\\text{both } H \\mid \\text{first } H) = \\frac{1}{2}$.<br/>(b) Given at least one flip is heads, the reduced sample space is $A = \\{(H,H),(H,T),(T,H)\\}$, containing 3 equally likely outcomes. Exactly 1 outcome is $(H,H)$, so $P(\\text{both } H \\mid \\text{at least one } H) = \\frac{1}{3}$.</p>",
    "trap": "In (b), the two possibilities (both heads vs one head) are not equally likely: one head has twice the probability.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.2, Example 2b, PDF p. 82."
  },
  {
    "id": "w.prob.3.ross.example.2c",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Bridge spade distribution conditional on partner holdings",
    "prompt": "<p>In bridge, 52 cards are dealt equally to four players (North, South, East, West). If North and South hold a combined total of 8 spades among their 26 cards, what is the probability that East has exactly 3 of the remaining 5 spades?</p>",
    "approach": "<p>Work in the reduced sample space of 26 cards containing 5 spades distributed to East and West.</p>",
    "solution": "<p>Given that North and South hold 8 spades, exactly $13 - 8 = 5$ spades and $26 - 5 = 21$ non-spades remain among the 26 cards dealt to East and West. East receives 13 cards chosen uniformly from these 26 cards. The probability that East receives exactly 3 spades is hypergeometric: $P = \\frac{\\binom{5}{3}\\binom{21}{10}}{\\binom{26}{13}} = \\frac{10\\times 352,716}{10,400,600} = \\frac{3,527,160}{10,400,600} \\approx 0.3391$.</p>",
    "trap": "Do not compute over the full 52-card space; conditioning on the 26 North-South cards reduces the deck to 26 cards.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.2, Example 2c, PDF p. 82."
  },
  {
    "id": "w.prob.3.ross.example.2d",
    "course": "prob",
    "sec": "3.2",
    "marks": 3,
    "title": "Course choice and grade probability via multiplication rule",
    "prompt": "<p>Celine decides whether to take French or chemistry by flipping a fair coin. She estimates her probability of getting an A is $1/2$ in French and $2/3$ in chemistry. What is the probability that she takes chemistry and receives an A?</p>",
    "approach": "<p>Apply the multiplication rule $P(C\\cap A) = P(C)P(A\\mid C)$.</p>",
    "solution": "<p>Let $C$ be the event that Celine chooses chemistry and $A$ the event that she receives an A. The fair coin toss implies $P(C) = 1/2$. The conditional probability of an A in chemistry is $P(A\\mid C) = 2/3$. By the multiplication rule, $P(C\\cap A) = P(C)P(A\\mid C) = \\left(\\frac{1}{2}\\right)\\left(\\frac{2}{3}\\right) = \\frac{1}{3}$.</p>",
    "trap": "Make sure to multiply by the probability of selecting the course (1/2).",
    "tests": [
      "c.prob.3.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.2, Example 2d, PDF p. 82."
  },
  {
    "id": "w.prob.3.ross.example.2e",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Two-ball draw from urn under uniform and weighted selections",
    "prompt": "<p>An urn contains 8 red balls and 4 white balls (12 balls total). Two balls are drawn without replacement. (a) Assuming each ball is equally likely to be selected on each draw, find the probability that both balls are red. (b) If each red ball has weight $r$ and each white ball has weight $w$, and the probability of drawing a ball is proportional to its weight, find the probability that both balls are red.</p>",
    "approach": "<p>Use the multiplication rule $P(R_1 R_2) = P(R_1)P(R_2\\mid R_1)$ for both uniform and weight-proportional sampling.</p>",
    "solution": "<p>(a) Under uniform sampling, $P(R_1) = 8/12 = 2/3$. After removing one red ball, 7 red and 4 white balls remain, so $P(R_2\\mid R_1) = 7/11$. By the multiplication rule, $P(R_1 R_2) = (2/3)(7/11) = 14/33 \\approx 0.4242$.<br/>(b) With weights, the initial total weight is $8r + 4w$, so $P(R_1) = \\frac{8r}{8r + 4w}$. Given that the first ball drawn is red, the urn contains 7 red and 4 white balls with total weight $7r + 4w$. Thus $P(R_2\\mid R_1) = \\frac{7r}{7r + 4w}$. By the multiplication rule, $P(R_1 R_2) = \\left(\\frac{8r}{8r + 4w}\\right)\\left(\\frac{7r}{7r + 4w}\\right)$. When $r=w$, this reduces to $(8/12)(7/11) = 14/33$.</p>",
    "trap": "In (b), the denominator updates after the first draw because one red ball of weight $r$ has been removed.",
    "tests": [
      "c.prob.3.2.2",
      "c.prob.3.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.2, Example 2e, PDF pp. 82–83."
  },
  {
    "id": "w.prob.3.ross.example.2f",
    "course": "prob",
    "sec": "3.2",
    "marks": 5,
    "title": "Exact match count in hat-matching problem",
    "prompt": "<p>In the hat-matching problem with $N$ individuals and their $N$ distinct hats, let $P_M = \\sum_{i=0}^M (-1)^i / i!$ denote the probability of no matches among $M$ individuals. Derive the probability that exactly $k$ of the $N$ people select their own hats ($0\\le k\\le N$).</p>",
    "approach": "<p>Fix a subset of $k$ individuals to match, apply the chain rule, multiply by the derangement probability of the remaining $N-k$, and scale by $\\binom{N}{k}$.</p>",
    "solution": "<p>Fix a particular subset of $k$ individuals. The probability that all $k$ of these individuals select their own hats is $\\frac{1}{N}\\times\\frac{1}{N-1}\\times\\cdots\\times\\frac{1}{N-k+1} = \\frac{(N-k)!}{N!}$. Given that these $k$ people match, the remaining $N-k$ people are choosing among their own $N-k$ hats, so the conditional probability that none of them match is $P_{N-k} = \\sum_{i=0}^{N-k} \\frac{(-1)^i}{i!}$. Since there are $\\binom{N}{k}$ disjoint subsets of $k$ people, the probability of exactly $k$ matches is $P(\\text{exactly } k \\text{ matches}) = \\binom{N}{k}\\frac{(N-k)!}{N!}P_{N-k} = \\frac{N!}{k!(N-k)!}\\frac{(N-k)!}{N!}P_{N-k} = \\frac{P_{N-k}}{k!}$. For large $N$, $P_{N-k}\\approx e^{-1}$, so $P(\\text{exactly } k \\text{ matches}) \\approx \\frac{e^{-1}}{k!}$, a Poisson distribution with mean 1.</p>",
    "trap": "The remaining $N-k$ people choose among their own hats, so their conditional derangement probability is $P_{N-k}$, not $P_N$.",
    "tests": [
      "c.prob.3.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.2, Example 2f, PDF p. 83."
  },
  {
    "id": "w.prob.3.ross.example.2g",
    "course": "prob",
    "sec": "3.2",
    "marks": 5,
    "title": "Four-pile deck partition with exactly one ace each",
    "prompt": "<p>A standard 52-card deck is randomly divided into 4 hands of 13 cards each. Use the multiplication rule to compute the probability that each hand contains exactly one ace.</p>",
    "approach": "<p>Track the placement of the 4 aces into distinct hands sequentially using conditional probabilities.</p>",
    "solution": "<p>Let $E_1$ be the event that the ace of spades is in some hand (sure event, $P(E_1)=1$).<br/>- Let $E_2$ be the event that the ace of hearts is in a different hand from the ace of spades. The hand containing the ace of spades has 12 other card slots out of the 51 remaining cards. Thus $P(E_2\\mid E_1) = 1 - \\frac{12}{51} = \\frac{39}{51}$.<br/>- Let $E_3$ be the event that the ace of diamonds is in a different hand from the first two aces. Those two hands contain 24 remaining card slots out of 50 remaining cards, so $P(E_3\\mid E_1 E_2) = 1 - \\frac{24}{50} = \\frac{26}{50}$.<br/>- Let $E_4$ be the event that the ace of clubs is in the remaining hand. The first three hands contain 36 card slots out of 49 remaining cards, so $P(E_4\\mid E_1 E_2 E_3) = 1 - \\frac{36}{49} = \\frac{13}{49}$.<br/>By the multiplication rule, $P(E_1 E_2 E_3 E_4) = 1\\times\\frac{39}{51}\\times\\frac{26}{50}\\times\\frac{13}{49} = \\frac{13,182}{124,950} = \\frac{2,197}{20,825} \\approx 0.1055$.</p>",
    "trap": "Count the remaining card slots in the occupied piles (12, 24, 36) relative to total remaining cards (51, 50, 49).",
    "tests": [
      "c.prob.3.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.2, Example 2g, PDF pp. 83–84."
  },
  {
    "id": "w.prob.3.ross.example.2h",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Tournament quarterfinal pairing of strong and weak teams",
    "prompt": "<p>Eight teams in a soccer tournament quarterfinal include 4 acknowledged strong teams and 4 weak teams. If all pairings into 4 matches are equally likely, find the probability that none of the strong teams play against each other.</p>",
    "approach": "<p>Use the multiplication rule by pairing each strong team sequentially with an available weak team.</p>",
    "solution": "<p>Number the 4 strong teams 1, 2, 3, 4. Let $E_i$ be the event that strong team $i$ is paired with a weak team.<br/>- Strong team 1 is equally likely to be paired with any of the other 7 teams, 4 of which are weak: $P(E_1) = \\frac{4}{7}$.<br/>- Given $E_1$, strong team 1 and its weak opponent are paired. Strong team 2 can be paired with any of the remaining 5 teams (teams 3, 4, and 3 weak teams): $P(E_2\\mid E_1) = \\frac{3}{5}$.<br/>- Given $E_1 E_2$, strong team 3 can be paired with any of the remaining 3 teams (team 4 and 2 weak teams): $P(E_3\\mid E_1 E_2) = \\frac{2}{3}$.<br/>- Given $E_1 E_2 E_3$, strong team 4 must be paired with the single remaining weak team: $P(E_4\\mid E_1 E_2 E_3) = \\frac{1}{1} = 1$.<br/>By the multiplication rule, the probability is $P = \\frac{4}{7}\\times\\frac{3}{5}\\times\\frac{2}{3}\\times 1 = \\frac{24}{105} = \\frac{8}{35} \\approx 0.2286$.</p>",
    "trap": "The pool of available opponents shrinks by 2 teams after each match is formed.",
    "tests": [
      "c.prob.3.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.2, Example 2h, PDF p. 84."
  },
  {
    "id": "w.prob.3.ross.example.3a",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Accident-prone policyholder risk and posterior assessment",
    "prompt": "<p>An insurance company classifies people into accident-prone (probability 0.4 of an accident in a year) and non-accident-prone (probability 0.2 of an accident in a year). Assume 30% of the population is accident-prone. (a) What is the probability that a new policyholder has an accident within a year? (b) Given that a policyholder has an accident within a year, what is the probability that they are accident-prone?</p>",
    "approach": "<p>Use the law of total probability for (a) and Bayes formula for (b).</p>",
    "solution": "<p>Let $A$ denote accident-prone and $E$ denote having an accident within the year. We are given $P(A) = 0.30, P(A^c) = 0.70, P(E\\mid A) = 0.40$, and $P(E\\mid A^c) = 0.20$.<br/>(a) By the law of total probability: $P(E) = P(E\\mid A)P(A) + P(E\\mid A^c)P(A^c) = (0.40)(0.30) + (0.20)(0.70) = 0.12 + 0.14 = 0.26$.<br/>(b) By Bayes formula: $P(A\\mid E) = \\frac{P(E\\mid A)P(A)}{P(E)} = \\frac{(0.40)(0.30)}{0.26} = \\frac{0.12}{0.26} = \\frac{6}{13} \\approx 0.4615$.</p>",
    "trap": "Do not confuse $P(E\\mid A) = 0.40$ with $P(A\\mid E) = 6/13$; the accident increases the probability of being accident-prone from 0.30 to 0.4615.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3a, PDF pp. 85–86."
  },
  {
    "id": "w.prob.3.ross.example.3b",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Card guessing game winning probability invariance",
    "prompt": "<p>A deck of $n$ distinct cards, one of which is the Ace of Spades, is shuffled and turned over one card at a time. At any point, the player can guess that the next card is the Ace of Spades; the player also wins if the ace has not appeared when only 1 card remains and no guess has been made. Prove by induction that EVERY strategy has winning probability exactly $1/n$.</p>",
    "approach": "<p>Condition on whether the strategy chooses to guess on the first card, and apply the induction hypothesis to the remaining $n-1$ cards.</p>",
    "solution": "<p>For $n=1$, the player wins with probability $1/1 = 1$. Assume the claim holds for decks of size $n-1$. For an $n$-card deck, fix any strategy and let $p$ be the probability that it guesses on the first card.<br/>- If it guesses on the first card, it wins if and only if the first card is the Ace of Spades, which occurs with probability $1/n$.<br/>- If it does not guess on the first card, it can only win if the first card is not the Ace of Spades (probability $(n-1)/n$), followed by winning the continuation game with the remaining $n-1$ cards. By the induction hypothesis, any continuation strategy on the $n-1$ cards has winning probability $1/(n-1)$. Thus the probability of winning without guessing the first card is $\\frac{n-1}{n}\\times\\frac{1}{n-1} = \\frac{1}{n}$.<br/>Conditioning on whether the first card is guessed: $P(\\text{win}) = p\\left(\\frac{1}{n}\\right) + (1-p)\\left(\\frac{1}{n}\\right) = \\frac{1}{n}$. Thus every strategy wins with probability $1/n$.</p>",
    "trap": "No clever waiting strategy can beat random guessing: all strategies are equally effective with win probability $1/n$.",
    "tests": [
      "c.prob.3.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3b, PDF pp. 85–86."
  },
  {
    "id": "w.prob.3.ross.example.3c",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Multiple choice guessing vs knowing conditional probability",
    "prompt": "<p>On a multiple choice exam, a student knows the answer with probability $p$ and guesses with probability $1-p$. A student who guesses picks correctly with probability $1/m$, where $m$ is the number of alternatives. (a) Find the probability that the student knew the answer given that they answered correctly. (b) Evaluate this for $m=5$ and $p=1/2$.</p>",
    "approach": "<p>Apply Bayes formula partitioning into the events \"knows\" and \"guesses\".</p>",
    "solution": "<p>(a) Let $K$ be the event the student knows the answer and $C$ the event they answer correctly. We have $P(K)=p, P(K^c)=1-p, P(C\\mid K)=1$, and $P(C\\mid K^c)=1/m$. By Bayes formula: $P(K\\mid C) = \\frac{P(C\\mid K)P(K)}{P(C\\mid K)P(K) + P(C\\mid K^c)P(K^c)} = \\frac{1\\cdot p}{p + (1/m)(1-p)} = \\frac{mp}{1 + (m-1)p}$.<br/>(b) For $m=5$ and $p=1/2$: $P(K\\mid C) = \\frac{5(1/2)}{1 + 4(1/2)} = \\frac{5/2}{3} = \\frac{5}{6} \\approx 0.8333$.</p>",
    "trap": "A correct answer does not guarantee knowledge; guessing introduces false positive correct answers.",
    "tests": [
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3c, PDF p. 86."
  },
  {
    "id": "w.prob.3.ross.example.3d",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Medical screening test and the base rate fallacy",
    "prompt": "<p>A blood test is 95% effective in detecting a disease when present ($P(+\\mid D)=0.95$), but yields a 1% false positive rate in healthy individuals ($P(+\\mid D^c)=0.01$). If 0.5% of the population has the disease ($P(D)=0.005$), what is the probability that a person with a positive test actually has the disease?</p>",
    "approach": "<p>Apply Bayes formula and compare the true positive rate against the low base rate of the disease.</p>",
    "solution": "<p>Let $D$ denote having the disease and $+$ denote a positive test. We are given $P(D)=0.005, P(D^c)=0.995, P(+\\mid D)=0.95$, and $P(+\\mid D^c)=0.01$.<br/>By Bayes formula: $P(D\\mid +) = \\frac{P(+\\mid D)P(D)}{P(+\\mid D)P(D) + P(+\\mid D^c)P(D^c)} = \\frac{(0.95)(0.005)}{(0.95)(0.005) + (0.01)(0.995)} = \\frac{0.00475}{0.00475 + 0.00995} = \\frac{0.00475}{0.01470} = \\frac{95}{294} \\approx 0.3231$.<br/>Intuitive frequency interpretation: In a cohort of 200 people, on average 1 person has the disease (generating $1\\times 0.95 = 0.95$ true positive) and 199 are healthy (generating $199\\times 0.01 = 1.99$ false positives). Thus $P(D\\mid +) = \\frac{0.95}{0.95 + 1.99} = \\frac{0.95}{2.94} \\approx 32.3\\%$.</p>",
    "trap": "Even with 95% sensitivity and 99% specificity, a rare disease results in most positive tests being false positives.",
    "tests": [
      "c.prob.3.3.2",
      "c.prob.3.3.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3d, PDF pp. 86–87."
  },
  {
    "id": "w.prob.3.ross.example.3e",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Diagnostic test evaluation with diabetic condition interaction",
    "prompt": "<p>A physician recommends surgery if at least 80% certain a patient has disease $D$. Initially she is 60% certain Jones has $D$. Test A always detects $D$ when present ($P(+\\mid D)=1.0$) and is never positive in healthy non-diabetics. However, in diabetics without disease $D$, Test A yields a positive result with probability 0.30. Jones tests positive, then reveals he is diabetic. Should the doctor recommend surgery?</p>",
    "approach": "<p>Update the disease probability given Jones is diabetic and tested positive using Bayes formula.</p>",
    "solution": "<p>Let $D$ be the event Jones has the disease and $+$ be a positive test result. Given Jones is diabetic, the test properties are $P(+\\mid D) = 1.0$ and $P(+\\mid D^c) = 0.30$. The prior probability is $P(D) = 0.60$. By Bayes formula: $P(D\\mid +) = \\frac{P(+\\mid D)P(D)}{P(+\\mid D)P(D) + P(+\\mid D^c)P(D^c)} = \\frac{1.0\\times 0.60}{(1.0\\times 0.60) + (0.30\\times 0.40)} = \\frac{0.60}{0.60 + 0.12} = \\frac{0.60}{0.72} = \\frac{5}{6} \\approx 0.8333$. Because $0.8333 \\ge 0.80$, the physician should recommend surgery.</p>",
    "trap": "The diabetes status changes the false-positive rate from 0 to 0.30, modifying the posterior probability.",
    "tests": [
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3e, PDF pp. 86–87."
  },
  {
    "id": "w.prob.3.ross.example.3f",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Criminal investigation updating with physical trait evidence",
    "prompt": "<p>An investigator is 60% convinced of a suspect's guilt ($P(G)=0.60$). New forensic evidence reveals the perpetrator has a physical trait shared by 20% of the general population. If the suspect is found to possess this trait, what is the updated probability of guilt?</p>",
    "approach": "<p>Apply Bayes formula with $P(C\\mid G)=1$ and $P(C\\mid G^c)=0.20$.</p>",
    "solution": "<p>Let $G$ be the event the suspect is guilty and $C$ the event he possesses the trait. The true perpetrator possesses the trait, so $P(C\\mid G) = 1$. If innocent, he has the trait with the general population frequency, $P(C\\mid G^c) = 0.20$. By Bayes formula: $P(G\\mid C) = \\frac{P(C\\mid G)P(G)}{P(C\\mid G)P(G) + P(C\\mid G^c)P(G^c)} = \\frac{1\\times 0.60}{1\\times 0.60 + 0.20\\times 0.40} = \\frac{0.60}{0.60 + 0.08} = \\frac{0.60}{0.68} = \\frac{15}{17} \\approx 0.8824$.</p>",
    "trap": "Do not omit the innocent trait frequency in the denominator; possessing a matching trait increases guilt from 60% to 88.24%.",
    "tests": [
      "c.prob.3.3.2",
      "c.prob.3.3.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3f, PDF p. 87."
  },
  {
    "id": "w.prob.3.ross.example.3g",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Condition for evidence to support a hypothesis",
    "prompt": "<p>Let $H$ be a hypothesis with prior probability $P(H)$, and let $E$ be newly observed evidence. Prove that $E$ supports $H$ (in the sense that $P(H\\mid E) \\ge P(H)$) if and only if $P(E\\mid H) \\ge P(E\\mid H^c)$.</p>",
    "approach": "<p>Expand $P(H\\mid E)$ using Bayes formula and simplify the resulting inequality.</p>",
    "solution": "<p>By Bayes formula: $P(H\\mid E) = \\frac{P(E\\mid H)P(H)}{P(E\\mid H)P(H) + P(E\\mid H^c)[1-P(H)]}$. Therefore, $P(H\\mid E) \\ge P(H)$ holds if and only if $\\frac{P(E\\mid H)}{P(E\\mid H)P(H) + P(E\\mid H^c)[1-P(H)]} \\ge 1$. Clearing the positive denominator: $P(E\\mid H) \\ge P(E\\mid H)P(H) + P(E\\mid H^c)[1-P(H)]$, which rearranges to $P(E\\mid H)[1 - P(H)] \\ge P(E\\mid H^c)[1 - P(H)]$. Dividing both sides by $1 - P(H) > 0$ yields $P(E\\mid H) \\ge P(E\\mid H^c)$. Hence, evidence supports a hypothesis if and only if it is more probable under the hypothesis than under its negation.</p>",
    "trap": "Evidence consistent with guilt is not evidence FOR guilt unless it is more likely given guilt than given innocence.",
    "tests": [
      "c.prob.3.3.2",
      "c.prob.3.3.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3g, PDF pp. 87–88."
  },
  {
    "id": "w.prob.3.ross.example.3h",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Estimating identical twin fraction from same-sex data",
    "prompt": "<p>Identical twins are always of the same sex, whereas fraternal twins are of the same sex with probability $1/2$. In a county birth registry, approximately 64% of twin births are of the same sex. What fraction of twin pairs are identical?</p>",
    "approach": "<p>Condition on whether twins are identical using the law of total probability and solve for the prior fraction.</p>",
    "solution": "<p>Let $I$ be the event that a twin pair is identical, and $SS$ the event that they are of the same sex. We know $P(SS\\mid I) = 1$ and $P(SS\\mid I^c) = 1/2$. By the law of total probability: $P(SS) = P(SS\\mid I)P(I) + P(SS\\mid I^c)[1 - P(I)] = 1\\cdot P(I) + \\frac{1}{2}[1 - P(I)] = \\frac{1}{2} + \\frac{1}{2}P(I)$. Setting this equal to the observed rate $0.64$: $\\frac{1}{2} + \\frac{1}{2}P(I) = 0.64 \\implies \\frac{1}{2}P(I) = 0.14 \\implies P(I) = 0.28$. Approximately 28% of all twin births are identical.</p>",
    "trap": "The observed 64% includes both identical twins (100% same sex) and fraternal twins (50% same sex).",
    "tests": [
      "c.prob.3.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3h, PDF p. 88."
  },
  {
    "id": "w.prob.3.ross.example.3i",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Coin identification via odds ratio formulation",
    "prompt": "<p>An urn contains two Type A coins (heads probability $1/4$) and one Type B coin (heads probability $3/4$). A coin is randomly selected and flipped. Given that it lands on heads, use the odds formulation of Bayes rule to find the probability that it was a Type A coin.</p>",
    "approach": "<p>Multiply the prior odds by the likelihood ratio to determine posterior odds, then convert to probability.</p>",
    "solution": "<p>Let $A$ and $B = A^c$ denote choosing a Type A or Type B coin. The prior probabilities are $P(A) = 2/3$ and $P(B) = 1/3$, so the prior odds in favor of Type A are $\\frac{P(A)}{P(B)} = \\frac{2/3}{1/3} = 2$.<br/>The likelihood of heads is $P(H\\mid A) = 1/4$ and $P(H\\mid B) = 3/4$. The likelihood ratio is $\\frac{P(H\\mid A)}{P(H\\mid B)} = \\frac{1/4}{3/4} = \\frac{1}{3}$.<br/>The posterior odds after observing heads are $\\text{Odds}(A\\mid H) = \\text{Prior Odds} \\times \\text{Likelihood Ratio} = 2 \\times \\frac{1}{3} = \\frac{2}{3}$.<br/>Converting odds to probability: $P(A\\mid H) = \\frac{\\text{Odds}}{1 + \\text{Odds}} = \\frac{2/3}{1 + 2/3} = \\frac{2}{5} = 0.40$.</p>",
    "trap": "Odds $\\alpha$ correspond to probability $\\frac{\\alpha}{1+\\alpha}$, not $\\alpha$ itself.",
    "tests": [
      "c.prob.3.3.2",
      "c.prob.3.3.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3i, PDF pp. 88–89."
  },
  {
    "id": "w.prob.3.ross.example.3j",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Card following first ace via conditioning on deck arrangement",
    "prompt": "<p>A standard 52-card deck is shuffled and turned up one card at a time. Use a conditioning argument on the relative ordering of the other 51 cards to prove that the card immediately following the first ace is any specified card with probability $1/52$.</p>",
    "approach": "<p>Condition on the permutation of the 51 other cards and evaluate the equally likely insertion slots for the specified card.</p>",
    "solution": "<p>Let $x$ be any specified card, and let $E$ be the event that card $x$ immediately follows the first ace. Consider the other 51 cards in the deck, and condition on their complete relative order $\\mathcal{O}$. For any fixed ordering $\\mathcal{O}$ of the other 51 cards, the position of the first ace in $\\mathcal{O}$ is completely fixed. Card $x$ is equally likely to be inserted into any of the $52$ possible positions relative to $\\mathcal{O}$ (from the very first card to the very last card). Of these 52 positions, exactly ONE position immediately follows the first ace. Therefore, for every ordering $\\mathcal{O}$, $P(E\\mid \\mathcal{O}) = 1/52$. By the law of total probability, $P(E) = \\sum_{\\mathcal{O}} P(E\\mid \\mathcal{O})P(\\mathcal{O}) = \\frac{1}{52}\\sum_{\\mathcal{O}} P(\\mathcal{O}) = \\frac{1}{52}$.</p>",
    "trap": "The card following the first ace is NOT more likely to be a non-ace; every card has probability exactly $1/52$.",
    "tests": [
      "c.prob.3.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3j, PDF p. 89."
  },
  {
    "id": "w.prob.3.ross.example.3k",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Missing aircraft search with overlook probabilities",
    "prompt": "<p>A missing aircraft is equally likely to be in any of 3 regions ($P(R_i)=1/3$). If the plane is in region $i$, a search of region $i$ will overlook it with probability $\\beta_i$. If a search of region 1 is unsuccessful, find the updated conditional probabilities that the plane is in: (a) region 1; (b) region 2.</p>",
    "approach": "<p>Condition on the true crash location and evaluate Bayes formula with the overlook likelihoods.</p>",
    "solution": "<p>Let $E$ be the event that the search of region 1 is unsuccessful. The conditional likelihoods are $P(E\\mid R_1) = \\beta_1$, and $P(E\\mid R_2) = P(E\\mid R_3) = 1$ (since if the plane is in region 2 or 3, a search of region 1 cannot find it). By the law of total probability: $P(E) = \\sum_{i=1}^3 P(E\\mid R_i)P(R_i) = \\beta_1(1/3) + 1(1/3) + 1(1/3) = \\frac{\\beta_1 + 2}{3}$.<br/>(a) For region 1: $P(R_1\\mid E) = \\frac{P(E\\mid R_1)P(R_1)}{P(E)} = \\frac{\\beta_1(1/3)}{(\\beta_1 + 2)/3} = \\frac{\\beta_1}{\\beta_1 + 2}$.<br/>(b) For region 2: $P(R_2\\mid E) = \\frac{P(E\\mid R_2)P(R_2)}{P(E)} = \\frac{1(1/3)}{(\\beta_1 + 2)/3} = \\frac{1}{\\beta_1 + 2}$.</p>",
    "trap": "$P(R_1\\mid E)$ increases with $\\beta_1$: if region 1 is very hard to search (large $\\beta_1$), not finding it there is less informative.",
    "tests": [
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3k, PDF pp. 89–90."
  },
  {
    "id": "w.prob.3.ross.example.3l",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Three cards in a hat problem (Bertrand box paradox)",
    "prompt": "<p>Three cards are in a hat: one is red on both sides (RR), one is black on both sides (BB), and one is red on one side and black on the other (RB). A card is randomly drawn and placed on a table. If the upturned side is red, what is the probability that the other side is black?</p>",
    "approach": "<p>Condition on which card was selected or count among the 3 equally likely red card faces.</p>",
    "solution": "<p>Let $U_R$ be the event that the upturned side is red. Each card has prior probability $1/3$.<br/>- $P(U_R\\mid RR) = 1$<br/>- $P(U_R\\mid BB) = 0$<br/>- $P(U_R\\mid RB) = 1/2$<br/>By total probability, $P(U_R) = 1(1/3) + 0(1/3) + (1/2)(1/3) = 1/2$. The other side is black if and only if the drawn card is RB. By Bayes formula: $P(RB\\mid U_R) = \\frac{P(U_R\\mid RB)P(RB)}{P(U_R)} = \\frac{(1/2)(1/3)}{1/2} = \\frac{1/6}{1/2} = \\frac{1}{3}$.<br/>Equivalently, there are 6 distinct card faces, 3 of which are red (2 on RR, 1 on RB). Given a red face appears, each of these 3 red faces is equally likely; only 1 of them belongs to the RB card, giving $1/3$.</p>",
    "trap": "Do not assume the remaining two possible cards (RR and RB) are equally likely; RR has two red faces while RB has only one.",
    "tests": [
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3l, PDF p. 90."
  },
  {
    "id": "w.prob.3.ross.example.3m",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Two-child family gender inference with accompaniment observation",
    "prompt": "<p>A family has two children. A mother is seen walking with one of her children, who is a girl. Explain why the conditional probability that both children are girls depends on the mother's walking protocol, and evaluate the probability under: (a) random child selection with probability $1/2$; (b) walking with a daughter whenever one is available.</p>",
    "approach": "<p>Express the observation event $G$ using the law of total probability across the 4 birth-order gender states.</p>",
    "solution": "<p>Let $G_1, G_2$ be the events that the older and younger child are girls. Assuming equal gender chances, the 4 states $G_1 G_2, G_1 B_2, B_1 G_2, B_1 B_2$ each have probability $1/4$. Let $G$ be the event the mother is seen walking with a girl. Then $P(G\\mid G_1 G_2) = 1$ and $P(G\\mid B_1 B_2) = 0$. By Bayes formula: $P(G_1 G_2\\mid G) = \\frac{1/4}{1/4 + (1/4)P(G\\mid G_1 B_2) + (1/4)P(G\\mid B_1 G_2)} = \\frac{1}{1 + P(G\\mid G_1 B_2) + P(G\\mid B_1 G_2)}$.<br/>(a) If the mother picks either child at random ($P(G\\mid G_1 B_2) = P(G\\mid B_1 G_2) = 1/2$), then $P(G_1 G_2\\mid G) = \\frac{1}{1 + 1/2 + 1/2} = \\frac{1}{2}$.<br/>(b) If the mother always walks with a daughter if she has one ($P(G\\mid G_1 B_2) = P(G\\mid B_1 G_2) = 1$), then $P(G_1 G_2\\mid G) = \\frac{1}{1 + 1 + 1} = \\frac{1}{3}$. The problem is underspecified without describing how the accompanied child was selected.</p>",
    "trap": "\"Seeing a daughter\" is NOT identical to \"knowing at least one child is a girl\" unless the protocol always reveals a daughter when present.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3m, PDF pp. 90–91."
  },
  {
    "id": "w.prob.3.ross.example.3n",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Flashlight battery lifespan classification and posterior",
    "prompt": "<p>A bin contains three types of flashlights: 20% Type 1 ($P(>100\\text{ h})=0.7$), 30% Type 2 ($P(>100\\text{ h})=0.4$), and 50% Type 3 ($P(>100\\text{ h})=0.3$). (a) Find the probability a randomly chosen flashlight lasts over 100 hours. (b) Given it lasts over 100 hours, find the probability it is Type 1.</p>",
    "approach": "<p>Apply the law of total probability for (a) and Bayes formula for (b).</p>",
    "solution": "<p>(a) Let $A$ be the event the flashlight lasts $>100$ hours and $F_i$ the event it is Type $i$. By total probability: $P(A) = \\sum_{i=1}^3 P(A\\mid F_i)P(F_i) = (0.7)(0.20) + (0.4)(0.30) + (0.3)(0.50) = 0.14 + 0.12 + 0.15 = 0.41$.<br/>(b) By Bayes formula: $P(F_1\\mid A) = \\frac{P(A\\mid F_1)P(F_1)}{P(A)} = \\frac{(0.7)(0.20)}{0.41} = \\frac{0.14}{0.41} = \\frac{14}{41} \\approx 0.3415$. (Similarly $P(F_2\\mid A) = 12/41 \\approx 0.2927$ and $P(F_3\\mid A) = 15/41 \\approx 0.3659$).</p>",
    "trap": "The lifespan observation raises Type 1 from 20% to 34.15% while reducing Type 3 from 50% to 36.59%.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3n, PDF p. 91."
  },
  {
    "id": "w.prob.3.ross.example.3o",
    "course": "prob",
    "sec": "3.3",
    "marks": 6,
    "title": "DNA database match posterior probability in criminal trial",
    "prompt": "<p>A crime was committed in a city of 1,000,000 residents, including 10,000 ex-convicts. A 5-strand DNA match has innocent match probability $10^{-5}$. A prosecutor assumes each ex-convict is $c$ times as likely to be guilty as a non-convict (prior guilt $\\alpha = c\\beta$). A search of the 10,000 ex-convict database yields exactly one match (Jones). Find the probability Jones is guilty if: (a) $c=100$; (b) $c=10$; (c) $c=1$.</p>",
    "approach": "<p>Evaluate the joint probability of guilt and being the unique database match using Bayes formula.</p>",
    "solution": "<p>Let $G$ be the event Jones is guilty and $M$ the event Jones is the unique match among the 10,000 in the database.<br/>From population normalization: $10,000\\alpha + 990,000\\beta = 1 \\implies \\alpha = \\frac{c}{10,000c + 990,000}$.<br/>If Jones is guilty ($P(G)=\\alpha$), he matches with probability 1 and none of the other 9,999 match: $P(M\\mid G) = (1 - 10^{-5})^{9999}$.<br/>If Jones is innocent ($P(G^c) = 1 - \\alpha$), he must match by chance (probability $10^{-5}$) and none of the other 9,999 match: $P(M\\mid G^c) \\approx 10^{-5}(1 - 10,000\\alpha)(1 - 10^{-5})^{9999}$.<br/>Canceling the common factor: $P(G\\mid M) = \\frac{\\alpha}{\\alpha + 10^{-5}(1 - 10,000\\alpha)} = \\frac{1}{1 + 10^{-5}\\alpha^{-1}(1 - 10,000\\alpha)}$.<br/>(a) For $c=100$, $\\alpha = \\frac{100}{1,990,000} = \\frac{1}{19,900}$. Then $P(G\\mid M) = \\frac{1}{1 + 10^{-5}(19,900)(1 - 10,000/19,900)} = \\frac{1}{1 + 0.199\\times 0.4975} \\approx \\frac{1}{1.099} \\approx 0.9099$.<br/>(b) For $c=10$, $\\alpha = \\frac{10}{1,090,000} = \\frac{1}{109,000}$, giving $P(G\\mid M) \\approx 0.5025$.<br/>(c) For $c=1$ (uniform prior $\\alpha=10^{-6}$), $P(G\\mid M) = \\frac{10^{-6}}{10^{-6} + 10^{-5}(0.99)} = \\frac{1}{1 + 9.9} = \\frac{1}{10.9} \\approx 0.0917$.</p>",
    "trap": "Under a uniform prior ($c=1$), a database search match has only a ~9.2% probability of guilt due to testing multiple people.",
    "tests": [
      "c.prob.3.3.2",
      "c.prob.3.3.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.3, Example 3o, PDF pp. 91–92."
  },
  {
    "id": "w.prob.3.ross.example.4a",
    "course": "prob",
    "sec": "3.4",
    "marks": 3,
    "title": "Independence of card suit and face value",
    "prompt": "<p>A card is selected at random from a standard 52-card deck. Let $A$ be the event that the card is an Ace and $S$ the event that it is a Spade. Prove that $A$ and $S$ are independent events.</p>",
    "approach": "<p>Check the product definition $P(A\\cap S) = P(A)P(S)$.</p>",
    "solution": "<p>There are 52 equally likely cards in the deck.<br/>- The deck contains 4 aces, so $P(A) = 4/52 = 1/13$.<br/>- The deck contains 13 spades, so $P(S) = 13/52 = 1/4$.<br/>- The intersection $A\\cap S$ contains exactly 1 card (the Ace of Spades), so $P(A\\cap S) = 1/52$.<br/>Evaluating the product: $P(A)P(S) = \\left(\\frac{1}{13}\\right)\\left(\\frac{1}{4}\\right) = \\frac{1}{52} = P(A\\cap S)$. Because the joint probability factors into the product of marginals, $A$ and $S$ are independent.</p>",
    "trap": "Do not confuse independent events with mutually exclusive events; independent events can and do occur simultaneously.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.4, Example 4a, PDF p. 93."
  },
  {
    "id": "w.prob.3.ross.example.4b",
    "course": "prob",
    "sec": "3.4",
    "marks": 3,
    "title": "Independence of sequential coin flips",
    "prompt": "<p>Two fair coins are flipped. Let $E$ be the event that the first coin lands on heads, and $F$ the event that the second coin lands on tails. Show that $E$ and $F$ are independent.</p>",
    "approach": "<p>Verify $P(E\\cap F) = P(E)P(F)$ on the four equiprobable sample points.</p>",
    "solution": "<p>The sample space is $S = \\{(H,H),(H,T),(T,H),(T,T)\\}$ with each outcome having probability $1/4$.<br/>- $E = \\{(H,H),(H,T)\\}$, so $P(E) = 2/4 = 1/2$.<br/>- $F = \\{(H,T),(T,T)\\}$, so $P(F) = 2/4 = 1/2$.<br/>- $E\\cap F = \\{(H,T)\\}$, so $P(E\\cap F) = 1/4$.<br/>Since $P(E)P(F) = (1/2)(1/2) = 1/4 = P(E\\cap F)$, events $E$ and $F$ are independent.</p>",
    "trap": "Physical independence of separate coin flips corresponds mathematically to the product rule for joint probability.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.4, Example 4b, PDF p. 93."
  },
  {
    "id": "w.prob.3.ross.example.4c",
    "course": "prob",
    "sec": "3.4",
    "marks": 4,
    "title": "Dice sum dependency: sum of six vs sum of seven",
    "prompt": "<p>Two fair dice are rolled. Let $D_4$ be the event that the first die shows 4. (a) Let $S_6$ be the event that the sum of the dice is 6; are $S_6$ and $D_4$ independent? (b) Let $S_7$ be the event that the sum of the dice is 7; are $S_7$ and $D_4$ independent?</p>",
    "approach": "<p>Compare the joint probability with the product of marginals for each sum.</p>",
    "solution": "<p>(a) For sum 6: $P(S_6) = 5/36$ and $P(D_4) = 1/6$. The intersection $S_6 \\cap D_4 = \\{(4,2)\\}$, so $P(S_6 \\cap D_4) = 1/36$. The product is $P(S_6)P(D_4) = (5/36)(1/6) = 5/216 \\ne 1/36 = 6/216$. Thus, $S_6$ and $D_4$ are DEPENDENT.<br/>(b) For sum 7: $P(S_7) = 6/36 = 1/6$ and $P(D_4) = 1/6$. The intersection $S_7 \\cap D_4 = \\{(4,3)\\}$, so $P(S_7 \\cap D_4) = 1/36$. The product is $P(S_7)P(D_4) = (1/6)(1/6) = 1/36 = P(S_7 \\cap D_4)$. Thus, $S_7$ and $D_4$ are INDEPENDENT.</p>",
    "trap": "The sum of 7 is independent of the first die because no matter what number the first die shows, exactly 1 number on the second die yields a sum of 7.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.4, Example 4c, PDF pp. 93–94."
  },
  {
    "id": "w.prob.3.ross.example.4d",
    "course": "prob",
    "sec": "3.4",
    "marks": 3,
    "title": "Qualitative independence and complement property",
    "prompt": "<p>Explain why independence of events $E$ and $F$ implies that $E$ is also independent of $F^c$, and give a real-world example of events that are naturally assumed independent versus dependent.</p>",
    "approach": "<p>Use $P(E) = P(EF) + P(EF^c)$ to factor $P(EF^c)$.</p>",
    "solution": "<p>Suppose $E$ and $F$ are independent, so $P(EF) = P(E)P(F)$. Because $E = (EF) \\cup (EF^c)$ is a disjoint union: $P(E) = P(EF) + P(EF^c) = P(E)P(F) + P(EF^c)$. Rearranging gives $P(EF^c) = P(E) - P(E)P(F) = P(E)[1 - P(F)] = P(E)P(F^c)$. Thus $E$ and $F^c$ are independent.<br/>Real-world example: A presidential election outcome ($E$) and a major earthquake occurring within the year ($F$) are reasonably assumed independent. However, the election outcome ($E$) and a subsequent economic recession ($G$) cannot be assumed independent because economic policy interacts with government leadership.</p>",
    "trap": "Never assume independence between economic or political events without empirical verification.",
    "tests": [
      "c.prob.3.4.1",
      "c.prob.3.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.4, Example 4d & Proposition 4.1, PDF p. 94."
  },
  {
    "id": "w.prob.3.ross.example.4e",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Pairwise independence failing joint independence for dice",
    "prompt": "<p>Two fair dice are rolled. Let $E$ be the event the sum is 7, $F$ the event the first die is 4, and $G$ the event the second die is 3. Show that $E$ is independent of $F$ and $E$ is independent of $G$, yet $E$ is NOT independent of $FG$.</p>",
    "approach": "<p>Compute $P(E), P(F), P(G)$ and the joint probabilities $P(EF), P(EG)$, and $P(E\\cap FG)$.</p>",
    "solution": "<p>The sample space has 36 equiprobable pairs. We have $P(E) = 6/36 = 1/6, P(F) = 6/36 = 1/6$, and $P(G) = 6/36 = 1/6$.<br/>- $EF = \\{(4,3)\\} \\implies P(EF) = 1/36 = (1/6)(1/6) = P(E)P(F)$. Thus $E$ and $F$ are independent.<br/>- $EG = \\{(4,3)\\} \\implies P(EG) = 1/36 = (1/6)(1/6) = P(E)P(G)$. Thus $E$ and $G$ are independent.<br/>- Now consider $FG = \\{(4,3)\\}$. Since $(4,3)$ has sum 7, $FG \\subseteq E$, which means $E\\cap FG = FG = \\{(4,3)\\}$, so $P(E\\cap FG) = 1/36$.<br/>However, $P(E)P(FG) = (1/6)(1/36) = 1/216 \\ne 1/36$. Hence $E$ is NOT independent of $FG$; in fact, $P(E\\mid FG) = 1$.</p>",
    "trap": "Pairwise independence of $E$ with $F$ and $E$ with $G$ does not imply $E$ is independent of events formed from $F$ and $G$.",
    "tests": [
      "c.prob.3.4.1",
      "c.prob.3.4.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.4, Example 4e, PDF p. 94."
  },
  {
    "id": "w.prob.3.ross.example.4f",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Bernoulli trials: success thresholds and infinite continuity",
    "prompt": "<p>An infinite sequence of independent Bernoulli trials is performed with success probability $p$ and failure probability $1-p$. Find: (a) the probability of at least 1 success in the first $n$ trials; (b) the probability of exactly $k$ successes in the first $n$ trials; (c) the probability that all infinitely many trials result in successes.</p>",
    "approach": "<p>Use complement for (a), binomial coefficient for (b), and continuity of probability from above for (c).</p>",
    "solution": "<p>(a) Let $E_i$ be failure on trial $i$. By independence, $P(\\text{no successes in } n) = \\prod_{i=1}^n P(E_i) = (1-p)^n$. Thus $P(\\text{at least 1 success}) = 1 - (1-p)^n$.<br/>(b) Any specific sequence of $k$ successes and $n-k$ failures has probability $p^k(1-p)^{n-k}$. Since there are $\\binom{n}{k}$ such sequences, $P(\\text{exactly } k \\text{ successes}) = \\binom{n}{k}p^k(1-p)^{n-k}$.<br/>(c) The event that all trials succeed is the decreasing limit $\\cap_{n=1}^\\infty A_n$, where $A_n$ is the event the first $n$ trials succeed. By independence, $P(A_n) = p^n$. By continuity of probability (Proposition 6.1): $P(\\cap_{n=1}^\\infty A_n) = \\lim_{n\\to\\infty} P(A_n) = \\lim_{n\\to\\infty} p^n = 0$ if $p < 1$, and $1$ if $p = 1$.</p>",
    "trap": "For any $p<1$, an infinite run of consecutive successes has probability 0.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.4, Example 4f, PDF pp. 94–95."
  },
  {
    "id": "w.prob.3.ross.example.4g",
    "course": "prob",
    "sec": "3.4",
    "marks": 3,
    "title": "Parallel system reliability of independent components",
    "prompt": "<p>A parallel system functions if at least one of its $n$ independent components functions. If component $i$ functions with probability $p_i$ ($i=1,\\ldots,n$), what is the probability that the system functions?</p>",
    "approach": "<p>Compute the complement event that all components fail using independence.</p>",
    "solution": "<p>Let $A_i$ be the event that component $i$ functions. The system fails if and only if every component fails, which is the intersection $\\cap_{i=1}^n A_i^c$. Because the components are independent, their failures are independent: $P(\\cap_{i=1}^n A_i^c) = \\prod_{i=1}^n P(A_i^c) = \\prod_{i=1}^n (1 - p_i)$. Therefore, the system reliability is $P(\\text{system functions}) = 1 - P(\\cap_{i=1}^n A_i^c) = 1 - \\prod_{i=1}^n (1 - p_i)$.</p>",
    "trap": "Do not sum the probabilities $p_i$; parallel systems use complement multiplication.",
    "tests": [
      "c.prob.3.4.1",
      "c.prob.3.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.4, Example 4g, PDF p. 95."
  },
  {
    "id": "w.prob.3.ross.example.4h",
    "course": "prob",
    "sec": "3.4",
    "marks": 4,
    "title": "Sum of five before sum of seven in repeated dice rolls",
    "prompt": "<p>Independent rolls of a pair of fair dice are performed. What is the probability that a sum of 5 appears before a sum of 7? Solve using: (a) a geometric series; (b) conditioning on the first decisive outcome.</p>",
    "approach": "<p>Identify the per-roll probabilities $P(5)=4/36$ and $P(7)=6/36$, and ignore neutral outcomes.</p>",
    "solution": "<p>(a) Let $E_n$ be the event that no 5 or 7 appears on the first $n-1$ rolls and a 5 appears on roll $n$. Since $P(5)=4/36$ and $P(7)=6/36$, the probability of neither is $1 - 10/36 = 26/36 = 13/18$. By independence, $P(E_n) = (13/18)^{n-1}(4/36)$. Summing over all $n\\ge 1$: $P = \\sum_{n=1}^\\infty \\left(\\frac{13}{18}\\right)^{n-1}\\frac{1}{9} = \\frac{1/9}{1 - 13/18} = \\frac{1/9}{5/18} = \\frac{2}{5} = 0.40$.<br/>(b) Condition on the first roll: let $F$ be rolling a 5, $G$ rolling a 7, and $H$ rolling neither. Then $P(\\text{5 before 7}) = 1\\cdot P(F) + 0\\cdot P(G) + P(\\text{5 before 7})P(H)$. Thus $P = \\frac{P(F)}{1 - P(H)} = \\frac{P(F)}{P(F) + P(G)} = \\frac{4/36}{4/36 + 6/36} = \\frac{4}{10} = \\frac{2}{5}$.</p>",
    "trap": "Rolls resulting in neither 5 nor 7 do not change the odds between 5 and 7; the conditional approach solves it in one line.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.4, Example 4h, PDF p. 95."
  },
  {
    "id": "w.prob.3.ross.example.4i",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Coupon collection probabilities and pairwise dependence",
    "prompt": "<p>There are $n$ types of coupons, each drawn independently with probabilities $p_1, \\ldots, p_n$ ($\\sum p_i = 1$). If $k$ coupons are collected, let $A_i$ be the event that at least one type $i$ coupon is obtained. Find: (a) $P(A_i)$; (b) $P(A_i \\cup A_j)$; (c) $P(A_i \\mid A_j)$ for $i\\ne j$.</p>",
    "approach": "<p>Use complement probabilities of never drawing specified coupon types across $k$ independent trials.</p>",
    "solution": "<p>(a) On any single draw, a coupon is not type $i$ with probability $1 - p_i$. By independence over $k$ draws, $P(A_i^c) = (1 - p_i)^k$. Hence $P(A_i) = 1 - (1 - p_i)^k$.<br/>(b) A coupon is neither type $i$ nor type $j$ with probability $1 - p_i - p_j$. Thus $(A_i \\cup A_j)^c = A_i^c \\cap A_j^c$ has probability $(1 - p_i - p_j)^k$, so $P(A_i \\cup A_j) = 1 - (1 - p_i - p_j)^k$.<br/>(c) By inclusion-exclusion: $P(A_i A_j) = P(A_i) + P(A_j) - P(A_i \\cup A_j) = [1 - (1 - p_i)^k] + [1 - (1 - p_j)^k] - [1 - (1 - p_i - p_j)^k] = 1 - (1 - p_i)^k - (1 - p_j)^k + (1 - p_i - p_j)^k$. Dividing by $P(A_j)$ gives $P(A_i \\mid A_j) = \\frac{1 - (1 - p_i)^k - (1 - p_j)^k + (1 - p_i - p_j)^k}{1 - (1 - p_j)^k}$.</p>",
    "trap": "The events $A_i$ and $A_j$ are NOT independent: collecting type $j$ slightly reduces the opportunity to collect type $i$.",
    "tests": [
      "c.prob.3.4.1",
      "c.prob.3.4.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.4, Example 4i, PDF pp. 95–96."
  },
  {
    "id": "w.prob.3.ross.example.4j",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "The problem of the points (Pascal and Fermat solutions)",
    "prompt": "<p>Two players, A and B, play independent Bernoulli rounds with win probability $p$ for A and $1-p$ for B. The match is interrupted when A needs $n$ more points and B needs $m$ more points to win. (a) State Pascal's recursive relation. (b) Explain Fermat's solution expressing the winning probability as a binomial sum.</p>",
    "approach": "<p>Condition on the first trial for Pascal; fix the total virtual trial horizon to $n+m-1$ for Fermat.</p>",
    "solution": "<p>(a) Let $P_{n,m}$ be the probability that A wins $n$ points before B wins $m$ points. Conditioning on the first round: $P_{n,m} = p P_{n-1,m} + (1-p) P_{n,m-1}$, with boundary conditions $P_{0,m} = 1$ for $m > 0$ and $P_{n,0} = 0$ for $n > 0$.<br/>(b) Fermat observed that in any continuation, at most $n+m-1$ total rounds can be played before one player wins. Imagine all $n+m-1$ rounds are played regardless of early termination. Player A wins the match if and only if A achieves at least $n$ successes in these $n+m-1$ rounds (because if A has $\\ge n$ successes, B has $\\le m-1$ successes). By independence, the number of successes is binomial, giving Fermat's exact formula: $P_{n,m} = \\sum_{k=n}^{n+m-1} \\binom{n+m-1}{k} p^k (1-p)^{n+m-1-k}$.</p>",
    "trap": "Fermat's insight of continuing the game to a fixed number of rounds $n+m-1$ eliminates variable game lengths.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.4, Example 4j, PDF p. 96."
  },
  {
    "id": "w.prob.3.ross.example.4k",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Equivalence of service protocols in serve-and-rally games",
    "prompt": "<p>In a serve-and-rally match to $n$ points between A and B, player A wins a rally served by A with probability $p_a$, while a rally served by B is won by A with probability $p_b$. A serves first. Prove that the probability player A wins the match is identical under \"winner serves\" and \"alternating serve\" protocols.</p>",
    "approach": "<p>Extend play to a fixed horizon of $2n-1$ rallies and analyze the sequence of servers.</p>",
    "solution": "<p>Imagine the match always continues until exactly $2n-1$ rallies are played, regardless of whether a player reaches $n$ points earlier. The winner of the match is whoever wins at least $n$ of these $2n-1$ rallies.<br/>Under \"alternating serve\", the server sequence is fixed deterministically: A, B, A, B, ... for all $2n-1$ rallies.<br/>Under \"winner serves\", let $A_k$ and $B_k$ be the number of points won by A and B in the first $k$ rallies. Notice that each rally won by A causes the next rally to be served by A, while each rally won by B causes the next to be served by B. Crucially, in any complete realization of $2n-1$ rallies where A wins $k$ points and B wins $(2n-1)-k$ points, the total number of rallies served by A is determined solely by the boundary condition and outcome counts, not by the order of points. Therefore, every outcome sequence of $2n-1$ rallies has the exact same probability under both protocols, which proves that A's probability of winning $\\ge n$ points is identical under both rules.</p>",
    "trap": "Intuition suggests \"winner serves\" favors the better server through momentum, but the total match win probability is invariant.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.4, Example 4k, PDF pp. 96–97."
  },
  {
    "id": "w.prob.3.ross.example.5a",
    "course": "prob",
    "sec": "3.5",
    "marks": 4,
    "title": "Subsequent accident conditional on first-year accident",
    "prompt": "<p>In the insurance model where 30% of drivers are accident-prone ($P(A_1\\mid C)=0.4$) and 70% are not ($P(A_1\\mid C^c)=0.2$), suppose accidents in different years are conditionally independent given driver type. If a driver has an accident in year 1, find the conditional probability that they have an accident in year 2.</p>",
    "approach": "<p>Condition on driver type within the conditional probability measure $P(\\cdot\\mid A_1)$.</p>",
    "solution": "<p>Let $A_1$ and $A_2$ be accidents in years 1 and 2, and $C$ the event the driver is accident-prone. From Example 3a, $P(C\\mid A_1) = 6/13$ and $P(C^c\\mid A_1) = 7/13$.<br/>By conditional total probability: $P(A_2\\mid A_1) = P(A_2\\mid C, A_1)P(C\\mid A_1) + P(A_2\\mid C^c, A_1)P(C^c\\mid A_1)$.<br/>By conditional independence of yearly accidents given driver type, $P(A_2\\mid C, A_1) = P(A_2\\mid C) = 0.40$ and $P(A_2\\mid C^c, A_1) = P(A_2\\mid C^c) = 0.20$.<br/>Therefore, $P(A_2\\mid A_1) = (0.40)\\left(\\frac{6}{13}\\right) + (0.20)\\left(\\frac{7}{13}\\right) = \\frac{2.4 + 1.4}{13} = \\frac{3.8}{13} = \\frac{19}{65} \\approx 0.2923$.</p>",
    "trap": "The years are NOT unconditionally independent: $P(A_2\\mid A_1) = 0.2923 > P(A_2) = 0.26$ because year 1 reveals risk status.",
    "tests": [
      "c.prob.3.5.1",
      "c.prob.3.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.5, Example 5a, PDF pp. 102–103."
  },
  {
    "id": "w.prob.3.ross.example.5b",
    "course": "prob",
    "sec": "3.5",
    "marks": 4,
    "title": "Paternity genetic inference using conditional Bayes",
    "prompt": "<p>A female chimpanzee with gene pair $(A,A)$ gives birth to an offspring with gene pair $(A,a)$. Two candidate fathers have genotypes: Male 1 has $(a,a)$ and Male 2 has $(A,a)$. Prior probability that Male 1 is the father is $p$. If each parent transmits a random allele, what is the updated probability that Male 1 is the father?</p>",
    "approach": "<p>Apply Bayes rule inside the conditioned model given parental genotypes.</p>",
    "solution": "<p>The mother provides an $A$ allele with certainty, so the offspring receives an $a$ allele from the father with probability:<br/>- If Male 1 is the father ($(a,a)$): $P((A,a)\\mid M_1) = 1$.<br/>- If Male 2 is the father ($(A,a)$): $P((A,a)\\mid M_2) = 1/2$.<br/>Using Bayes formula with priors $P(M_1)=p$ and $P(M_2)=1-p$: $P(M_1\\mid (A,a)) = \\frac{1\\cdot p}{1\\cdot p + (1/2)(1-p)} = \\frac{p}{p + 1/2 - p/2} = \\frac{p}{(1+p)/2} = \\frac{2p}{1+p}$.<br/>Since $\\frac{2p}{1+p} > p$ for all $0 < p < 1$, the test increases the probability that Male 1 is the father.</p>",
    "trap": "Male 1 always passes $a$ while Male 2 passes $a$ only half the time, giving Male 1 a 2:1 likelihood advantage.",
    "tests": [
      "c.prob.3.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.5, Example 5b, PDF p. 103."
  },
  {
    "id": "w.prob.3.ross.example.5c",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Success run before failure run in Bernoulli trials",
    "prompt": "<p>Independent trials have success probability $p$ and failure probability $q=1-p$. Let $E$ be the event that a run of $n$ consecutive successes occurs before a run of $m$ consecutive failures. Derive the formula for $P(E)$, and evaluate it for $p=1/2$, $n=2$, and $m=3$.</p>",
    "approach": "<p>Condition on the first trial and the continuation run to establish linear equations for $P(E\\mid H)$ and $P(E\\mid H^c)$.</p>",
    "solution": "<p>Conditioning on the first trial: $P(E) = p P(E\\mid H) + q P(E\\mid H^c)$.<br/>Given a first success, the next $n-1$ trials succeed with probability $p^{n-1}$. If a failure occurs before completing the run, the previous successes are wiped out, reverting to $P(E\\mid H^c)$: $P(E\\mid H) = p^{n-1} + (1 - p^{n-1})P(E\\mid H^c)$.<br/>Similarly, given a first failure: $P(E\\mid H^c) = (1 - q^{m-1})P(E\\mid H)$.<br/>Solving these two simultaneous equations yields: $P(E\\mid H) = \\frac{p^{n-1}}{p^{n-1} + q^{m-1} - p^{n-1}q^{m-1}}$, and substituting into $P(E)$ gives: $P(E) = \\frac{p^{n-1}(1 - q^m)}{p^{n-1} + q^{m-1} - p^{n-1}q^{m-1}}$.<br/>For a fair coin ($p=q=1/2$), $n=2, m=3$: $p^{n-1} = 1/2$, $q^{m-1} = 1/4$, $q^m = 1/8$. Thus $P(E) = \\frac{(1/2)(1 - 1/8)}{1/2 + 1/4 - (1/2)(1/4)} = \\frac{(1/2)(7/8)}{3/4 - 1/8} = \\frac{7/16}{5/8} = \\frac{7}{10} = 0.70$.</p>",
    "trap": "A failure in a success streak resets the count completely, returning the process to the failure state $H^c$.",
    "tests": [
      "c.prob.3.5.1",
      "c.prob.3.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.5, Example 5c, PDF pp. 103–104."
  },
  {
    "id": "w.prob.3.ross.example.5d",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Derangement recurrence derived via conditioning",
    "prompt": "<p>In the hat-matching problem with $n$ people, let $P_n$ be the probability of no matches. Condition on whether the first person picks their own hat to derive the recurrence $P_n - P_{n-1} = -\\frac{1}{n}(P_{n-1} - P_{n-2})$, and deduce the closed form $P_n = \\sum_{i=0}^n (-1)^i / i!$.</p> Also find the probability of exactly k matches.",
    "approach": "<p>Condition on whether the first person selects their own hat, then partition the continuation by the \"extra\" hat selection.</p>",
    "solution": "<p>Let $M$ be the event person 1 gets their own hat ($P(M)=1/n$). Clearly $P(E\\mid M) = 0$. By total probability, $P_n = P(E\\mid M^c)\\frac{n-1}{n}$.<br/>In $E\\mid M^c$, person 1 does not choose hat 1; this leaves $n-1$ people choosing from $n-1$ hats where person 1's hat is \"extra\". Person 2 can either select the extra hat (probability $1/(n-1)$, leaving an ordinary derangement of $n-2$ people) or not select it (which is isomorphic to an ordinary derangement of $n-1$ people): $P(E\\mid M^c) = P_{n-1} + \\frac{1}{n-1}P_{n-2}$.<br/>Substituting gives $P_n = \\frac{n-1}{n}\\left(P_{n-1} + \\frac{1}{n-1}P_{n-2}\\right) = \\frac{n-1}{n}P_{n-1} + \\frac{1}{n}P_{n-2}$.<br/>Subtracting $P_{n-1}$ from both sides: $P_n - P_{n-1} = -\\frac{1}{n}(P_{n-1} - P_{n-2})$.<br/>With base cases $P_1 = 0$ and $P_2 = 1/2$, telescoping gives $P_n - P_{n-1} = \\frac{(-1)^n}{n!}$, which sums to $P_n = \\sum_{i=0}^n \\frac{(-1)^i}{i!}$.</p> For exactly k matches, choose the matched people in C(n,k) ways. Their hats are fixed, and the other n−k people must form a derangement. The probability is C(n,k)(n−k)!P_{n−k}/n!=P_{n−k}/k!, with P_0=1 and P_1=0. Thus exactly n−1 matches are impossible.",
    "trap": "The extra hat behaves exactly like person 2's own hat in determining whether a match occurs.",
    "tests": [
      "c.prob.3.5.1",
      "c.prob.3.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.5, Example 5d, PDF pp. 104–105."
  },
  {
    "id": "w.prob.3.ross.example.5e",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Laplace rule of succession derivation",
    "prompt": "<p>A box contains $k+1$ coins, where coin $i$ has heads probability $i/k$ ($i=0, 1, \\ldots, k$). A coin is chosen at random and flipped repeatedly. If the first $n$ flips all land on heads, find the probability that the $(n+1)$-st flip also lands on heads, and evaluate its limit as $k\\to\\infty$.</p>",
    "approach": "<p>Condition on the chosen coin and approximate the Riemann sums with integrals.</p>",
    "solution": "<p>Let $C_i$ be the event coin $i$ is chosen ($P(C_i) = \\frac{1}{k+1}$), and $H_n$ the event the first $n$ flips land on heads. Given $C_i$, flips are conditionally independent with head probability $i/k$, so $P(H_n\\mid C_i) = (i/k)^n$.<br/>By total probability: $P(H_n) = \\frac{1}{k+1}\\sum_{i=0}^k (i/k)^n$.<br/>The conditional probability of heads on flip $n+1$ is $P(H_{n+1}\\mid H_n) = \\frac{P(H_{n+1})}{P(H_n)} = \\frac{\\sum_{i=0}^k (i/k)^{n+1}}{\\sum_{i=0}^k (i/k)^n}$.<br/>As $k\\to\\infty$, the sums converge to Riemann integrals: $\\frac{1}{k}\\sum_{i=0}^k (i/k)^m \\to \\int_0^1 x^m dx = \\frac{1}{m+1}$.<br/>Therefore, for large $k$: $P(H_{n+1}\\mid H_n) \\approx \\frac{1/(n+2)}{1/(n+1)} = \\frac{n+1}{n+2}$.</p>",
    "trap": "Successive flips are NOT independent unconditionally; observing heads increases the posterior probability of having chosen a high-bias coin.",
    "tests": [
      "c.prob.3.5.1",
      "c.prob.3.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.5, Example 5e, PDF pp. 105–106."
  },
  {
    "id": "w.prob.3.ross.example.5f",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Sequential Bayesian updating under conditional independence",
    "prompt": "<p>Let $H_1, \\ldots, H_n$ be mutually exclusive and exhaustive hypotheses. Evidence $E_1$ is observed, followed by evidence $E_2$. Prove that using the posterior distribution $P(H_i\\mid E_1)$ as a new prior to compute $P(H_i\\mid E_1 E_2)$ via Bayes formula is valid if $E_1$ and $E_2$ are conditionally independent given each $H_j$.</p>",
    "approach": "<p>Expand $P(H_i\\mid E_1 E_2)$ using Bayes formula and factor the joint likelihood under conditional independence.</p>",
    "solution": "<p>By Bayes formula: $P(H_i\\mid E_1 E_2) = \\frac{P(E_1 E_2\\mid H_i)P(H_i)}{\\sum_j P(E_1 E_2\\mid H_j)P(H_j)}$.<br/>If $E_1$ and $E_2$ are conditionally independent given $H_j$, then $P(E_1 E_2\\mid H_j) = P(E_2\\mid H_j)P(E_1\\mid H_j)$ for all $j$. Substituting this into the numerator and denominator: $P(H_i\\mid E_1 E_2) = \\frac{P(E_2\\mid H_i)P(E_1\\mid H_i)P(H_i)}{\\sum_j P(E_2\\mid H_j)P(E_1\\mid H_j)P(H_j)}$.<br/>Notice that $P(E_1\\mid H_j)P(H_j) = P(H_j\\mid E_1)P(E_1)$. The factor $P(E_1)$ cancels from numerator and denominator, yielding $P(H_i\\mid E_1 E_2) = \\frac{P(E_2\\mid H_i)P(H_i\\mid E_1)}{\\sum_j P(E_2\\mid H_j)P(H_j\\mid E_1)}$.<br/>This is precisely Bayes formula with prior $P(H_i\\mid E_1)$ and likelihood $P(E_2\\mid H_i)$, proving sequential updating is valid under conditional independence.</p> Conditional independence is sufficient for using the likelihood P(E_2|H_i) without the first evidence. In general sequential Bayes still works, but uses P(E_2|H_i,E_1). Equality of the normalized answers for one observed pair does not require conditional independence, so “if and only if” would overstate the claim.",
    "trap": "If $E_1$ and $E_2$ are conditionally dependent given $H_i$, the likelihood term cannot be simplified to $P(E_2\\mid H_i)$ without including $E_1$.",
    "tests": [
      "c.prob.3.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, §3.5, Example 5f, PDF pp. 106–107."
  },
  {
    "id": "w.prob.3.ross.prob.2",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "First die value conditional on sum of two dice",
    "prompt": "<p>Two fair dice are rolled. For each integer $i \\in \\{2, 3, \\ldots, 12\\}$, find the conditional probability that the first die lands on 6 given that the sum of the dice equals $i$.</p>",
    "approach": "<p>Determine the number of favorable pairs $(6, i-6)$ and divide by the total number of pairs summing to $i$.</p>",
    "solution": "<p>Let $S_i$ be the event the sum is $i$. The first die can be 6 only if $i - 6 \\in \\{1, 2, \\ldots, 6\\}$, which requires $i \\ge 7$. For $i \\le 6$, $P(\\text{first is } 6 \\mid S_i) = 0$. For $i \\ge 7$, exactly one outcome has first die 6, namely $(6, i-6)$.<br/>- $i=2, 3, 4, 5, 6$: Probability = 0.<br/>- $i=7$: pairs: 6. $P = 1/6$.<br/>- $i=8$: pairs: 5. $P = 1/5$.<br/>- $i=9$: pairs: 4. $P = 1/4$.<br/>- $i=10$: pairs: 3. $P = 1/3$.<br/>- $i=11$: pairs: 2. $P = 1/2$.<br/>- $i=12$: pairs: 1. $P = 1/1 = 1$.</p>",
    "trap": "When $i \\le 6$, the first die cannot be 6 because the second die must be at least 1.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 2, PDF p. 109."
  },
  {
    "id": "w.prob.3.ross.prob.3",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Bridge hand spade distribution given partnership holdings",
    "prompt": "<p>In bridge, 52 cards are dealt equally to 4 players. If North and South hold a combined total of 8 spades among their 26 cards, compute the conditional probability that East holds exactly 3 spades.</p>",
    "approach": "<p>Apply the conditional probability formula to the remaining 26 cards containing 5 spades distributed between East and West.</p>",
    "solution": "<p>Given North and South hold 8 spades, exactly $13 - 8 = 5$ spades and $26 - 5 = 21$ non-spades remain among the 26 cards dealt to East and West. East receives 13 cards chosen uniformly from these 26 cards. The probability that East holds exactly 3 spades is $P = \\frac{\\binom{5}{3}\\binom{21}{10}}{\\binom{26}{13}} = \\frac{10\\times 352,716}{10,400,600} \\approx 0.3391$.</p>",
    "trap": "The population is 26 cards with 5 spades, not 52 cards with 13 spades.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 3, PDF p. 109."
  },
  {
    "id": "w.prob.3.ross.prob.4",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "At least one six conditional on dice sum",
    "prompt": "<p>What is the conditional probability that at least one of a pair of fair dice lands on 6, given that the sum of the dice equals $i$, for each $i = 2, 3, \\ldots, 12$?</p>",
    "approach": "<p>Count the number of pairs summing to $i$ containing at least one 6 and divide by the total pairs summing to $i$.</p>",
    "solution": "<p>Let $S_i$ be the event the sum is $i$. At least one 6 is possible only when $i \\ge 7$.<br/>- For $i \\le 6$: no outcomes contain a 6, so $P = 0$.<br/>- For $i=7$: outcomes are $(6,1)$ and $(1,6)$ out of 6 pairs summing to 7: $P = 2/6 = 1/3$.<br/>- For $i=8$: $(6,2)$ and $(2,6)$ out of 5 pairs: $P = 2/5$.<br/>- For $i=9$: $(6,3)$ and $(3,6)$ out of 4 pairs: $P = 2/4 = 1/2$.<br/>- For $i=10$: $(6,4)$ and $(4,6)$ out of 3 pairs: $P = 2/3$.<br/>- For $i=11$: $(6,5)$ and $(5,6)$ out of 2 pairs: $P = 2/2 = 1$.<br/>- For $i=12$: only $(6,6)$ out of 1 pair: $P = 1/1 = 1$.</p>",
    "trap": "For $i=12$, $(6,6)$ contains two sixes but represents only 1 favorable outcome.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 4, PDF p. 109."
  },
  {
    "id": "w.prob.3.ross.prob.5",
    "course": "prob",
    "sec": "3.2",
    "marks": 3,
    "title": "Sequential color pattern without replacement",
    "prompt": "<p>An urn contains 6 white and 9 black balls (15 balls total). If 4 balls are randomly selected without replacement, find the probability that the first 2 are white and the last 2 are black.</p>",
    "approach": "<p>Apply the multiplication rule sequentially updating urn composition.</p>",
    "solution": "<p>By the chain rule: $P(W_1 W_2 B_3 B_4) = P(W_1)P(W_2\\mid W_1)P(B_3\\mid W_1 W_2)P(B_4\\mid W_1 W_2 B_3) = \\frac{6}{15}\\times\\frac{5}{14}\\times\\frac{9}{13}\\times\\frac{8}{12} = \\frac{2,160}{32,760} = \\frac{6}{91} \\approx 0.06593$.</p>",
    "trap": "Update both the target color count and the total ball count on each successive draw.",
    "tests": [
      "c.prob.3.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 5, PDF p. 109."
  },
  {
    "id": "w.prob.3.ross.prob.6",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Position conditional probability with and without replacement",
    "prompt": "<p>An urn contains 12 balls, 8 of which are white. A sample of size 4 is drawn: (a) with replacement; (b) without replacement. In each case, what is the conditional probability that the first and third balls are white given that the sample contains exactly 3 white balls?</p>",
    "approach": "<p>Use exchangeability of draw positions under both sampling schemes.</p>",
    "solution": "<p>(a) With replacement: the 4 draws are i.i.d. Bernoulli trials. Given that exactly 3 of the 4 trials result in white balls, by symmetry all $\\binom{4}{3} = 4$ positions for the single non-white ball are equally likely. The first and third balls are white if and only if the non-white ball is in position 2 or position 4 (2 of the 4 positions). Thus $P = 2/4 = 1/2$.<br/>(b) Without replacement: by exchangeability of draws without replacement, every subset of 3 white balls among the 4 draw positions is equally likely. Again, the single non-white ball is equally likely to occupy any of the 4 positions. Thus the first and third balls are white if and only if the non-white ball is in position 2 or 4, giving $P = 2/4 = 1/2$. In both cases, the conditional probability is $1/2$.</p>",
    "trap": "The initial proportions of white balls cancel completely due to positional exchangeability.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 6, PDF p. 109."
  },
  {
    "id": "w.prob.3.ross.prob.7",
    "course": "prob",
    "sec": "3.2",
    "marks": 3,
    "title": "Sibling gender of an identified child",
    "prompt": "<p>The king comes from a family of 2 children. What is the probability that the other child is his sister?</p>",
    "approach": "<p>Distinguish the identified child (the king) from an unspecified \"at least one boy\" condition.</p>",
    "solution": "<p>Let the king be child $K$. The other child $C$ was born independently and is equally likely to be male or female: $P(\\text{female}) = 1/2$. Because the king is an identifiable individual child in the family, learning that child $K$ is male gives no information about the gender of child $C$. Thus, the probability that the other child is his sister is $1/2$.</p>",
    "trap": "Do not confuse this with \"a family known to have at least one boy\" where the conditional probability of two boys is $1/3$; here a specific child is male.",
    "tests": [
      "c.prob.3.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 7, PDF p. 109."
  },
  {
    "id": "w.prob.3.ross.prob.8",
    "course": "prob",
    "sec": "3.2",
    "marks": 3,
    "title": "Two-child gender conditional on older sibling",
    "prompt": "<p>A couple has 2 children. What is the probability that both are girls given that the older of the two is a girl?</p>",
    "approach": "<p>Condition on the gender of the first-born child in the sample space $\\{GG, GB, BG, BB\\}$.</p>",
    "solution": "<p>The four equiprobable birth orders are $GG, GB, BG, BB$, each with probability $1/4$. Given that the older child is a girl, the reduced sample space is $\\{GG, GB\\}$, which contains 2 equally likely outcomes. Exactly 1 of these is $GG$, so $P(\\text{both girls} \\mid \\text{older is girl}) = \\frac{1/4}{2/4} = \\frac{1}{2}$.</p>",
    "trap": "Conditioning on the older child leaves the younger child's gender independent with probability 1/2.",
    "tests": [
      "c.prob.3.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 8, PDF p. 109."
  },
  {
    "id": "w.prob.3.ross.prob.9",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Three-urn selection conditional on two white balls",
    "prompt": "<p>Three urns have the following contents: Urn A has 2 white and 4 red balls; Urn B has 8 white and 4 red balls; Urn C has 1 white and 3 red balls. One ball is chosen from each urn. Given that exactly 2 white balls were selected, what is the probability that the ball from Urn A was white?</p>",
    "approach": "<p>Enumerate the three mutually exclusive ways to obtain exactly 2 white balls and apply conditional probability.</p>",
    "solution": "<p>The single-urn white draw probabilities are $P(W_A) = 2/6 = 1/3$, $P(W_B) = 8/12 = 2/3$, and $P(W_C) = 1/4$.<br/>Exactly 2 white balls occur in three disjoint ways:<br/>- $W_A W_B R_C$: $(1/3)(2/3)(3/4) = 6/36$<br/>- $W_A R_B W_C$: $(1/3)(1/3)(1/4) = 1/36$<br/>- $R_A W_B W_C$: $(2/3)(2/3)(1/4) = 4/36$<br/>The total probability of exactly 2 white balls is $P(\\text{2 white}) = \\frac{6 + 1 + 4}{36} = \\frac{11}{36}$.<br/>The event that Urn A is white and exactly 2 white balls are selected is $W_A W_B R_C \\cup W_A R_B W_C$, with probability $\\frac{6 + 1}{36} = \\frac{7}{36}$.<br/>The conditional probability is $P(W_A \\mid \\text{2 white}) = \\frac{7/36}{11/36} = \\frac{7}{11} \\approx 0.6364$.</p>",
    "trap": "Urn C's ball can be red or white; include all combinations yielding 2 white balls.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 9, PDF p. 109."
  },
  {
    "id": "w.prob.3.ross.prob.10",
    "course": "prob",
    "sec": "3.2",
    "marks": 3,
    "title": "First card suit conditional on subsequent card suits",
    "prompt": "<p>Three cards are randomly selected without replacement from an ordinary 52-card deck. Compute the conditional probability that the first card selected is a spade given that the second and third cards selected are spades.</p>",
    "approach": "<p>Use exchangeability of cards without replacement to evaluate the remaining deck composition.</p>",
    "solution": "<p>By exchangeability of cards drawn without replacement, knowing that cards 2 and 3 are spades leaves 50 remaining cards in the deck, exactly $13 - 2 = 11$ of which are spades. Each of these 50 cards was equally likely to be the first card drawn. Therefore, $P(S_1 \\mid S_2 S_3) = \\frac{11}{50} = 0.22$.</p>",
    "trap": "Draw order in without-replacement sampling does not affect marginal or conditional probabilities; card 1 given cards 2 and 3 is treated as if cards 2 and 3 were drawn first.",
    "tests": [
      "c.prob.3.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 10, PDF p. 109."
  },
  {
    "id": "w.prob.3.ross.prob.11",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Both cards aces: specific ace vs at least one ace",
    "prompt": "<p>Two cards are chosen without replacement from a 52-card deck. Let $B$ be the event both cards are aces, $A_s$ the event the Ace of Spades is chosen, and $A$ the event at least one ace is chosen. Find: (a) $P(B\\mid A_s)$; (b) $P(B\\mid A)$.</p>",
    "approach": "<p>Evaluate conditional probabilities on the reduced spaces for a specific card versus the union of aces.</p>",
    "solution": "<p>(a) Given the Ace of Spades is chosen, the second card is selected uniformly from the remaining 51 cards, 3 of which are aces. Thus $P(B\\mid A_s) = \\frac{3}{51} = \\frac{1}{17} \\approx 0.05882$.<br/>(b) Total two-card hands is $\\binom{52}{2} = 1,326$. Hands with no aces: $\\binom{48}{2} = 1,128$. Hands with at least one ace: $1,326 - 1,128 = 198$. Hands with two aces: $\\binom{4}{2} = 6$. Thus $P(B\\mid A) = \\frac{6}{198} = \\frac{1}{33} \\approx 0.03030$. Notice $P(B\\mid A_s) = 1/17$ is nearly twice as large as $P(B\\mid A) = 1/33$.</p>",
    "trap": "Knowing WHICH ace was chosen nearly doubles the conditional probability of a second ace compared to merely knowing \"at least one ace\".",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 11(a–b), PDF p. 109."
  },
  {
    "id": "w.prob.3.ross.prob.12",
    "course": "prob",
    "sec": "3.2",
    "marks": 3,
    "title": "Conditional ordering of three random cards",
    "prompt": "<p>Distinct values are written on 3 cards randomly labeled A, B, and C. Given that card A's value is less than card B's value ($A < B$), find the probability that card A's value is also less than card C's value ($A < C$).</p>",
    "approach": "<p>Count permutations of the 3 distinct card values that satisfy the condition.</p>",
    "solution": "<p>There are $3! = 6$ equally likely orderings of the values of A, B, and C: $A<B<C, A<C<B, B<A<C, B<C<A, C<A<B, C<B<A$. The condition $A < B$ is satisfied by 3 of these orderings: $A<B<C, A<C<B$, and $C<A<B$. Among these 3 orderings, card A is less than card C in the first two: $A<B<C$ and $A<C<B$. Because all orderings are equally likely, $P(A < C \\mid A < B) = \\frac{2}{3}$.</p>",
    "trap": "Card A has rank 1 or 2 among A and B; with an independent C, A is smallest overall in 2 of the 3 cases.",
    "tests": [
      "c.prob.3.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 12, PDF p. 109."
  },
  {
    "id": "w.prob.3.ross.prob.14",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Aces in four bridge hands via multiplication rule",
    "prompt": "<p>A 52-card deck is divided randomly into 4 hands of 13 cards each. Let $E_i$ be the event that the $i$-th hand contains exactly one ace ($i=1..4$). Use the multiplication rule to find $P(E_1 E_2 E_3 E_4)$.</p>",
    "approach": "<p>Express $P(E_1 E_2 E_3 E_4) = P(E_1)P(E_2\\mid E_1)P(E_3\\mid E_1 E_2)P(E_4\\mid E_1 E_2 E_3)$ using hypergeometrics.</p>",
    "solution": "<p>- $P(E_1) = \\frac{\\binom{4}{1}\\binom{48}{12}}{\\binom{52}{13}}$.<br/>- Given $E_1$, 3 aces and 36 non-aces remain to fill the remaining 39 slots in hands 2, 3, 4: $P(E_2\\mid E_1) = \\frac{\\binom{3}{1}\\binom{36}{12}}{\\binom{39}{13}}$.<br/>- Given $E_1 E_2$, 2 aces and 24 non-aces remain for 26 slots: $P(E_3\\mid E_1 E_2) = \\frac{\\binom{2}{1}\\binom{24}{12}}{\\binom{26}{13}}$.<br/>- Given $E_1 E_2 E_3$, 1 ace and 12 non-aces fill the last hand of 13: $P(E_4\\mid E_1 E_2 E_3) = 1$.<br/>Multiplying these factors and canceling factorials yields $P = \\frac{4!\\times 13^4}{52\\times 51\\times 50\\times 49} = \\frac{24\\times 28,561}{6,497,400} = \\frac{685,464}{6,497,400} = \\frac{2,197}{20,825} \\approx 0.1055$.</p>",
    "trap": "Simplifying the product of hypergeometric fractions cancels large factorials down to $\\frac{24\\times 13^4}{52\\times 51\\times 50\\times 49}$.",
    "tests": [
      "c.prob.3.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 14, PDF p. 110."
  },
  {
    "id": "w.prob.3.ross.prob.15",
    "course": "prob",
    "sec": "3.2",
    "marks": 5,
    "title": "Polya urn color reinforcement probabilities",
    "prompt": "<p>An urn initially contains 5 white and 7 black balls (12 balls). Each time a ball is drawn, it is returned along with 2 additional balls of the same color. Find the probability that: (a) the first 2 balls selected are black and the next 2 are white; (b) exactly 2 of the first 4 balls selected are black.</p>",
    "approach": "<p>Use sequential conditioning for (a) and apply Polya urn sequence invariance for (b).</p>",
    "solution": "<p>(a) On draw 1: 7 black, 12 total. Draw 2: 9 black, 14 total. Draw 3: 5 white, 16 total. Draw 4: 7 white, 18 total. By the chain rule: $P(B_1 B_2 W_3 W_4) = \\frac{7}{12}\\times\\frac{9}{14}\\times\\frac{5}{16}\\times\\frac{7}{18} = \\frac{2,205}{48,384} = \\frac{35}{768} \\approx 0.04557$.<br/>(b) In a Polya urn model, any specific sequence of 2 black and 2 white balls has the exact same probability: the numerators are always the permutations of $7\\times 9$ and $5\\times 7$, while denominators are $12\\times 14\\times 16\\times 18$. Thus each of the $\\binom{4}{2} = 6$ sequences has probability $35/768$. Therefore: $P(\\text{exactly 2 black}) = 6\\times\\frac{35}{768} = \\frac{35}{128} \\approx 0.2734$.</p>",
    "trap": "The order of colors does not change the joint probability in Polya's urn model.",
    "tests": [
      "c.prob.3.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 15(a–b), PDF p. 110."
  },
  {
    "id": "w.prob.3.ross.prob.17",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Infant delivery survival given natural birth",
    "prompt": "<p>Overall, 98% of newborn deliveries result in infant survival ($P(S)=0.98$). Cesarean sections (C) account for 15% of births ($P(C)=0.15$), and have a 96% infant survival rate ($P(S\\mid C)=0.96$). What is the probability that a baby survives given that delivery is not by Cesarean section?</p>",
    "approach": "<p>Apply the law of total probability partitioned into Cesarean and non-Cesarean deliveries.</p>",
    "solution": "<p>By total probability: $P(S) = P(S\\mid C)P(C) + P(S\\mid C^c)P(C^c)$. We are given $P(S)=0.98, P(C)=0.15, P(C^c)=0.85$, and $P(S\\mid C)=0.96$. Substituting: $0.98 = (0.96)(0.15) + P(S\\mid C^c)(0.85) = 0.144 + 0.85 P(S\\mid C^c)$. Thus $0.85 P(S\\mid C^c) = 0.98 - 0.144 = 0.836$. Solving for $P(S\\mid C^c)$: $P(S\\mid C^c) = \\frac{0.836}{0.85} = \\frac{836}{850} = \\frac{418}{425} \\approx 0.9835$ (98.35%).</p>",
    "trap": "Do not subtract 0.96 from 0.98; use the weighted partition equation.",
    "tests": [
      "c.prob.3.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 17, PDF p. 110."
  },
  {
    "id": "w.prob.3.ross.prob.18",
    "course": "prob",
    "sec": "3.3",
    "marks": 3,
    "title": "Pet ownership joint and conditional probabilities",
    "prompt": "<p>In a community, 36% of families own a dog ($P(D)=0.36$) and 22% of dog-owning families also own a cat ($P(C\\mid D)=0.22$). Additionally, 30% of all families own a cat ($P(C)=0.30$). Find: (a) the probability a randomly selected family owns both a dog and a cat; (b) the conditional probability a family owns a dog given that it owns a cat.</p>",
    "approach": "<p>Use the multiplication rule for (a) and conditional definition for (b).</p>",
    "solution": "<p>(a) By the multiplication rule: $P(D\\cap C) = P(C\\mid D)P(D) = (0.22)(0.36) = 0.0792$ (7.92%).<br/>(b) By definition of conditional probability: $P(D\\mid C) = \\frac{P(D\\cap C)}{P(C)} = \\frac{0.0792}{0.30} = 0.264$ (26.4%).</p>",
    "trap": "$P(C\\mid D) = 0.22$ is the fraction of dog owners with cats, whereas $P(D\\mid C) = 0.264$ is the fraction of cat owners with dogs.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 18(a–b), PDF p. 110."
  },
  {
    "id": "w.prob.3.ross.prob.19",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Voter turnout decomposition and party posteriors",
    "prompt": "<p>In a city, voters are 46% Independent, 30% Liberal, and 24% Conservative. Local election turnout rates were 35% among Independents, 62% among Liberals, and 58% among Conservatives. (a) What percentage of voters participated in the election? (b) Given that a randomly chosen person voted, find the conditional probability that they are: (i) an Independent; (ii) a Liberal; (iii) a Conservative.</p>",
    "approach": "<p>Use total probability for overall turnout and Bayes formula for the posterior voter composition.</p>",
    "solution": "<p>(a) Let $V$ denote voting. By total probability: $P(V) = (0.35)(0.46) + (0.62)(0.30) + (0.58)(0.24) = 0.1610 + 0.1860 + 0.1392 = 0.4862$ (48.62% turnout).<br/>(b) By Bayes formula:<br/>(i) Independent: $P(I\\mid V) = \\frac{0.1610}{0.4862} = \\frac{1610}{4862} = \\frac{805}{2431} \\approx 0.3311$ (33.11%).<br/>(ii) Liberal: $P(L\\mid V) = \\frac{0.1860}{0.4862} = \\frac{1860}{4862} = \\frac{930}{2431} \\approx 0.3826$ (38.26%).<br/>(iii) Conservative: $P(C\\mid V) = \\frac{0.1392}{0.4862} = \\frac{1392}{4862} = \\frac{696}{2431} \\approx 0.2863$ (28.63%).</p>",
    "trap": "The voter profile shifts toward Liberals and Conservatives due to their higher relative turnout rates.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 19(a–d), PDF p. 110."
  },
  {
    "id": "w.prob.3.ross.prob.20",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Smoking cessation program success cohort analysis",
    "prompt": "<p>A smoking cessation program is 62% male and 38% female. After one year, 48% of the women and 37% of the men successfully remained nonsmokers and attended a celebration party. (a) What percentage of the original class attended the party? (b) What percentage of attendees were women?</p>",
    "approach": "<p>Apply total probability for overall success and Bayes rule for gender proportion among attendees.</p>",
    "solution": "<p>(a) By total probability: $P(\\text{Party}) = P(\\text{Success}\\mid F)P(F) + P(\\text{Success}\\mid M)P(M) = (0.48)(0.38) + (0.37)(0.62) = 0.1824 + 0.2294 = 0.4118$ (41.18% attended).<br/>(b) By Bayes formula: $P(F\\mid \\text{Party}) = \\frac{P(\\text{Success}\\mid F)P(F)}{P(\\text{Party})} = \\frac{0.1824}{0.4118} = \\frac{1,824}{4,118} = \\frac{912}{2,059} \\approx 0.4429$ (44.29% were women).</p>",
    "trap": "Women represented only 38% of entrants but 44.29% of successes due to their higher success rate.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 20(a–b), PDF p. 110."
  },
  {
    "id": "w.prob.3.ross.prob.21",
    "course": "prob",
    "sec": "3.2",
    "marks": 3,
    "title": "Gender and academic major conditional probabilities",
    "prompt": "<p>At a college, 52% of students are female ($P(F)=0.52$), 5% major in computer science ($P(CS)=0.05$), and 2% are female computer science majors ($P(F\\cap CS)=0.02$). If a student is chosen at random, find: (a) $P(F\\mid CS)$; (b) $P(CS\\mid F)$.</p>",
    "approach": "<p>Use the definition of conditional probability $P(A\\mid B) = P(A\\cap B)/P(B)$.</p>",
    "solution": "<p>(a) $P(F\\mid CS) = \\frac{P(F\\cap CS)}{P(CS)} = \\frac{0.02}{0.05} = \\frac{2}{5} = 0.40$ (40%).<br/>(b) $P(CS\\mid F) = \\frac{P(F\\cap CS)}{P(F)} = \\frac{0.02}{0.52} = \\frac{2}{52} = \\frac{1}{26} \\approx 0.03846$ (3.85%).</p>",
    "trap": "The two conditional probabilities have different denominators: $P(CS)=0.05$ versus $P(F)=0.52$.",
    "tests": [
      "c.prob.3.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 21(a–b), PDF p. 110."
  },
  {
    "id": "w.prob.3.ross.prob.22",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Contingency table income distributions for married couples",
    "prompt": "<p>A poll of 500 working couples reveals: both earn $<125k$: 212; husband $>125k$, wife $<125k$: 198; husband $<125k$, wife $>125k$: 36; both earn $>125k$: 54. For a randomly chosen couple, find: (a) probability husband earns $<125k$; (b) conditional probability wife earns $>125k$ given husband earns $>125k$; (c) conditional probability wife earns $>125k$ given husband earns $<125k$.</p>",
    "approach": "<p>Compute row and column marginals and divide joint counts by conditional totals.</p>",
    "solution": "<p>(a) Total couples where husband earns $<125k$: $212 + 36 = 248$. $P(H < 125k) = \\frac{248}{500} = 0.496$.<br/>(b) Total couples where husband earns $>125k$: $198 + 54 = 252$. Among these, wife earns $>125k$ in 54 couples: $P(W > 125k \\mid H > 125k) = \\frac{54}{252} = \\frac{3}{14} \\approx 0.2143$.<br/>(c) Among the 248 couples where husband earns $<125k$, wife earns $>125k$ in 36 couples: $P(W > 125k \\mid H < 125k) = \\frac{36}{248} = \\frac{9}{62} \\approx 0.1452$.</p>",
    "trap": "Condition on the specific subgroup of husbands defined in each subpart.",
    "tests": [
      "c.prob.3.2.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 22(a–c), PDF pp. 110–111."
  },
  {
    "id": "w.prob.3.ross.prob.23",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Strict ordering probability of three colored dice",
    "prompt": "<p>A red die ($R$), a blue die ($B$), and a yellow die ($Y$) are rolled. Find: (a) the probability that no two dice land on the same number; (b) the conditional probability that $B < Y < R$ given that no two dice land on the same number; (c) the unconditional probability $P(B < Y < R)$.</p>",
    "approach": "<p>Use permutation counting for (a) and symmetry among distinct face rankings for (b) and (c).</p>",
    "solution": "<p>(a) Total outcomes: $6^3 = 216$. Outcomes with 3 distinct numbers: $6\\times 5\\times 4 = 120$. $P(\\text{distinct}) = \\frac{120}{216} = \\frac{5}{9} \\approx 0.5556$.<br/>(b) Given that the 3 dice show distinct numbers, all $3! = 6$ strict orderings of the three numbers are equally likely by symmetry. Exactly 1 ordering satisfies $B < Y < R$. Therefore, $P(B < Y < R \\mid \\text{distinct}) = \\frac{1}{6}$.<br/>(c) Since $B < Y < R$ can only occur when the numbers are distinct: $P(B < Y < R) = P(B < Y < R \\mid \\text{distinct})P(\\text{distinct}) = \\left(\\frac{1}{6}\\right)\\left(\\frac{5}{9}\\right) = \\frac{5}{54} \\approx 0.09259$.</p>",
    "trap": "Ties have probability $1 - 5/9 = 4/9$; $B < Y < R$ automatically precludes any ties.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 23(a–c), PDF p. 111."
  },
  {
    "id": "w.prob.3.ross.prob.24",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Two-stage urn transfer and posterior transfer inference",
    "prompt": "<p>Urn I contains 2 white and 4 red balls. Urn II contains 1 white and 1 red ball. A ball is randomly transferred from Urn I to Urn II, and then a ball is randomly drawn from Urn II. (a) What is the probability that the ball drawn from Urn II is white? (b) Given that the ball drawn from Urn II is white, what is the conditional probability that the transferred ball was white?</p>",
    "approach": "<p>Condition on the color of the transferred ball using total probability and Bayes formula.</p>",
    "solution": "<p>(a) Let $W_I$ and $R_I$ denote the transferred ball being white or red ($P(W_I) = 2/6 = 1/3, P(R_I) = 4/6 = 2/3$).<br/>- If white is transferred, Urn II contains 2 white and 1 red: $P(W_{II}\\mid W_I) = 2/3$.<br/>- If red is transferred, Urn II contains 1 white and 2 red: $P(W_{II}\\mid R_I) = 1/3$.<br/>By total probability: $P(W_{II}) = (2/3)(1/3) + (1/3)(2/3) = \\frac{2}{9} + \\frac{2}{9} = \\frac{4}{9} \\approx 0.4444$.<br/>(b) By Bayes formula: $P(W_I\\mid W_{II}) = \\frac{P(W_{II}\\mid W_I)P(W_I)}{P(W_{II})} = \\frac{2/9}{4/9} = \\frac{1}{2} = 0.50$.</p>",
    "trap": "Urn II contains 3 balls after the transfer; update the denominator to 3.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 24(a–b), PDF p. 111."
  },
  {
    "id": "w.prob.3.ross.prob.25",
    "course": "prob",
    "sec": "3.3",
    "marks": 3,
    "title": "Information sufficiency check for Bayesian posterior calculation",
    "prompt": "<p>Twenty percent of Brenda's calls are with her daughter ($P(D)=0.20$). Sixty-five percent of calls with her daughter end with Brenda smiling ($P(S\\mid D)=0.65$). Given Brenda hung up smiling, do we have enough information to compute $P(D\\mid S)$? Explain why or state what additional data is required.</p>",
    "approach": "<p>Examine the terms in Bayes formula $P(D\\mid S) = \\frac{P(S\\mid D)P(D)}{P(S\\mid D)P(D) + P(S\\mid D^c)P(D^c)}$.</p>",
    "solution": "<p>No, we do not have enough information. By Bayes formula: $P(D\\mid S) = \\frac{P(S\\mid D)P(D)}{P(S\\mid D)P(D) + P(S\\mid D^c)P(D^c)}$. While we are given $P(D)=0.20, P(D^c)=0.80$, and $P(S\\mid D)=0.65$, we do not know $P(S\\mid D^c)$—the probability that Brenda hangs up smiling when speaking with someone other than her daughter. Without knowing how often other phone calls end in a smile, the total probability of smiling cannot be evaluated and the posterior cannot be determined.</p>",
    "trap": "You cannot compute a Bayesian posterior without knowing the likelihood of evidence under alternative hypotheses.",
    "tests": [
      "c.prob.3.3.2",
      "c.prob.3.3.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 25, PDF p. 111."
  },
  {
    "id": "w.prob.3.ross.prob.26",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Urn ball coloring: knowledge of paint vs physical reveal",
    "prompt": "<p>Each of 2 balls is independently painted black or gold with probability $1/2$. (a) Given that gold paint was used (at least one ball is gold), what is the probability that both balls are gold? (b) If the urn tips over and a randomly chosen ball rolls out and is gold, what is the probability that both balls are gold?</p>",
    "approach": "<p>Condition on the event of at least one gold ball in (a), versus the physical sampling of a gold ball in (b).</p>",
    "solution": "<p>The four equiprobable initial states are $GG, GB, BG, BB$, each with probability $1/4$.<br/>(a) The condition \"gold paint was used\" means at least one ball is gold: $A = \\{GG, GB, BG\\}$. Among these 3 equiprobable outcomes, exactly 1 is $GG$: $P(GG\\mid A) = \\frac{1/4}{3/4} = \\frac{1}{3}$.<br/>(b) Let $R_G$ be the event a randomly fallen ball is gold. By total probability: $P(R_G) = 1(1/4) + (1/2)(1/4) + (1/2)(1/4) + 0(1/4) = 1/2$. By Bayes formula: $P(GG\\mid R_G) = \\frac{P(R_G\\mid GG)P(GG)}{P(R_G)} = \\frac{1\\times 1/4}{1/2} = \\frac{1}{2}$.<br/>Explanation: A state with two gold balls is twice as likely to emit a gold ball ($1.0$) as a state with one gold ball ($0.5$), which weights $GG$ more heavily than in (a).</p>",
    "trap": "Physically observing a gold ball selects balls with probability proportional to their count, yielding $1/2$ rather than $1/3$.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 26(a–b), PDF p. 111."
  },
  {
    "id": "w.prob.3.ross.prob.27",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Sampling bias in street intercept population survey",
    "prompt": "<p>To estimate the proportion $p$ of residents over 50 in a town of 100,000, an observer counts the percentage of people encountered on the streets who are over 50. Let $\\alpha_1$ and $\\alpha_2$ be the average proportion of time spent on streets by residents under 50 and over 50. What does this method estimate, and when is it unbiased?</p>",
    "approach": "<p>Formulate the conditional probability of encountering an over-50 person on the street.</p>",
    "solution": "<p>Let $O$ be the event an encounter is with someone over 50. By Bayes formula: $P(O) = \\frac{\\alpha_2 p}{\\alpha_2 p + \\alpha_1(1-p)}$. Thus the observer's count estimates $\\frac{\\alpha_2 p}{\\alpha_2 p + \\alpha_1(1-p)}$, not $p$. This estimate equals $p$ if and only if $\\frac{\\alpha_2}{\\alpha_2 p + \\alpha_1(1-p)} = 1$, which requires $\\alpha_1 = \\alpha_2$. If residents over 50 spend less time on the streets ($\\alpha_2 < \\alpha_1$), the method substantially underestimates the senior population.</p>",
    "trap": "Street encounters sample time-at-location rather than individuals uniformly, creating length-biased sampling.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 27, PDF p. 111."
  },
  {
    "id": "w.prob.3.ross.prob.28",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Color blindness posterior given population gender ratios",
    "prompt": "<p>Color blindness affects 5% of men ($P(C\\mid M)=0.05$) and 0.25% of women ($P(C\\mid W)=0.0025$). A color-blind person is chosen at random. Find the probability this person is male if: (a) the population has equal numbers of men and women; (b) there are twice as many men as women.</p>",
    "approach": "<p>Apply Bayes formula with prior weights reflecting the gender proportions.</p>",
    "solution": "<p>(a) Equal numbers: $P(M) = 0.5, P(W) = 0.5$.<br/>$P(M\\mid C) = \\frac{(0.05)(0.5)}{(0.05)(0.5) + (0.0025)(0.5)} = \\frac{0.05}{0.0525} = \\frac{500}{525} = \\frac{20}{21} \\approx 0.9524$ (95.24%).<br/>(b) Twice as many men: $P(M) = 2/3, P(W) = 1/3$.<br/>$P(M\\mid C) = \\frac{(0.05)(2/3)}{(0.05)(2/3) + (0.0025)(1/3)} = \\frac{0.10}{0.1025} = \\frac{1000}{1025} = \\frac{40}{41} \\approx 0.9756$ (97.56%).</p>",
    "trap": "The 20:1 ratio in sex-specific rates means the vast majority of color-blind individuals are male even in an equal population.",
    "tests": [
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 28, PDF p. 111."
  },
  {
    "id": "w.prob.3.ross.prob.29",
    "course": "prob",
    "sec": "3.2",
    "marks": 3,
    "title": "Average car occupancy: worker sampling vs car sampling",
    "prompt": "<p>A company wants to estimate the average number of workers per car in its lot. Compare two proposals: Method A samples $n$ workers and averages their vehicle occupancy; Method B samples $n$ cars and averages their passenger count. Which method correctly estimates the target quantity?</p>",
    "approach": "<p>Analyze how the sampling unit affects outcome weighting (size-biased sampling).</p>",
    "solution": "<p>Method B correctly estimates the average number of workers per car. Let $C$ be the total number of cars and $W_i$ the number of occupants in car $i$. The true average workers per car is $\\frac{1}{C}\\sum_{i=1}^C W_i$. Randomly sampling cars gives an unbiased estimate of this mean.<br/>Method A, on the other hand, samples workers: a car carrying 4 workers is 4 times as likely to have one of its occupants sampled as a car carrying a solo driver. Thus Method A produces a size-biased (or length-biased) estimate $\\frac{\\sum W_i^2}{\\sum W_i} > \\frac{\\sum W_i}{C}$, which strictly overestimates the average vehicle occupancy.</p>",
    "trap": "Sampling individuals who use a service always oversamples high-density units.",
    "tests": [
      "c.prob.3.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 29, PDF pp. 111–112."
  },
  {
    "id": "w.prob.3.ross.prob.30",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Next card identification given first ace on turn twenty",
    "prompt": "<p>A 52-card deck is turned over until the first ace appears on the 20th card. What is the conditional probability that the 21st card is: (a) the Ace of Spades; (b) the Two of Clubs?</p>",
    "approach": "<p>Evaluate remaining deck composition after 19 non-aces and 1 ace are removed.</p>",
    "solution": "<p>Given the first ace is card 20, the first 19 cards contain 0 aces and card 20 is an ace. Thus 32 cards remain, consisting of exactly 3 aces and 29 non-aces.<br/>(a) The Ace of Spades was either the ace on turn 20 (probability $1/4$) or is among the remaining 32 cards (probability $3/4$). If among the remaining 32 cards, by symmetry it is equally likely to be any of them: $P(\\text{Ace of Spades on 21}) = \\left(\\frac{3}{4}\\right)\\left(\\frac{1}{32}\\right) = \\frac{3}{128} \\approx 0.02344$.<br/>(b) The Two of Clubs was either among the first 19 cards (probability 19/48, since 19 of the 48 non-aces were drawn) or is among the remaining 32 cards (probability $29/48$). If among the remaining 32 cards, it is card 21 with probability $1/32$: $P(\\text{Two of Clubs on 21}) = \\left(\\frac{29}{48}\\right)\\left(\\frac{1}{32}\\right) = \\frac{29}{1,536} \\approx 0.01888$.</p>",
    "trap": "The Ace of Spades is more likely to be card 21 ($3/128 \\approx 0.0234$) than the Two of Clubs ($29/1536 \\approx 0.0189$) because 19 non-aces have already been removed.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 30(a–b), PDF pp. 111–112."
  },
  {
    "id": "w.prob.3.ross.prob.31",
    "course": "prob",
    "sec": "3.2",
    "marks": 3,
    "title": "Sequential tennis ball freshness probability",
    "prompt": "<p>A box contains 15 tennis balls, 9 of which are unused. Three balls are randomly chosen, played with, and returned. Later, another 3 balls are randomly selected. What is the probability that all 3 balls in the second selection are unused?</p>",
    "approach": "<p>Track the number of unused balls remaining in the box after the first play session.</p>",
    "solution": "Let K be the number of originally unused balls chosen the first time. Its probabilities are P(K=k)=C(9,k)C(6,3−k)/C(15,3), k=0,1,2,3. After playing, 9−K unused balls remain; hence the answer is ∑_{k=0}^3 [C(9,k)C(6,3−k)/C(15,3)]·[C(9−k,3)/C(15,3)]. A shorter count names the second group first: all three must be originally unused, chance C(9,3)/C(15,3), and the first group must avoid these three, chance C(12,3)/C(15,3). Thus the answer is C(9,3)C(12,3)/C(15,3)²=528/5915≈.0892646. This works because the two group choices are independent uniform selections from the returned 15 balls.",
    "trap": "The first choice may contain already-used balls. Only its originally unused balls lose unused status.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 31, PDF p. 112."
  },
  {
    "id": "w.prob.3.ross.prob.32",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Two-box marble selection and posterior box origin",
    "prompt": "<p>Box 1 contains 1 black and 1 white marble. Box 2 contains 2 black and 1 white marble. A box is chosen at random ($1/2$ each), and a marble is drawn. (a) What is the probability that the marble is black? (b) Given that the marble is white, what is the probability that it came from Box 1?</p>",
    "approach": "<p>Use total probability for (a) and Bayes formula for (b).</p>",
    "solution": "<p>(a) Let $B$ be a black marble. $P(B\\mid \\text{Box 1}) = 1/2$ and $P(B\\mid \\text{Box 2}) = 2/3$. By total probability: $P(B) = (1/2)(1/2) + (2/3)(1/2) = 1/4 + 1/3 = \\frac{7}{12} \\approx 0.5833$.<br/>(b) The probability of drawing a white marble is $P(W) = 1 - 7/12 = 5/12$. By Bayes formula: $P(\\text{Box 1}\\mid W) = \\frac{P(W\\mid \\text{Box 1})P(\\text{Box 1})}{P(W)} = \\frac{(1/2)(1/2)}{5/12} = \\frac{1/4}{5/12} = \\frac{3}{5} = 0.60$.</p>",
    "trap": "Box 1 has a higher white concentration (1/2 vs 1/3), making it the more probable source of a white marble.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 32, PDF p. 112."
  },
  {
    "id": "w.prob.3.ross.prob.34",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Family size posterior given eldest child selection",
    "prompt": "<p>A family has $j$ children with probability $p_j$, where $p_1=0.10, p_2=0.25, p_3=0.35, p_4=0.30$. A child from the family is selected uniformly at random. Given that this child is the eldest child in the family, find the conditional probability that the family has: (a) only 1 child; (b) 4 children. (c) How do the answers change if the selected child is the youngest child?</p>",
    "approach": "<p>Compute the probability of selecting the eldest child in a $j$-child family ($1/j$) and apply Bayes formula.</p>",
    "solution": "<p>Let $E$ be the event the selected child is the eldest. In a family of size $j$, a random child is the eldest with probability $1/j$.<br/>By total probability: $P(E) = \\sum_{j=1}^4 \\frac{1}{j}p_j = \\frac{0.10}{1} + \\frac{0.25}{2} + \\frac{0.35}{3} + \\frac{0.30}{4} = 0.10 + 0.125 + 0.11667 + 0.075 = 0.41667 = \\frac{5}{12}$.<br/>(a) $P(1\\text{ child}\\mid E) = \\frac{1\\cdot 0.10}{5/12} = \\frac{0.10}{5/12} = \\frac{6}{25} = 0.24$.<br/>(b) $P(4\\text{ children}\\mid E) = \\frac{(1/4)(0.30)}{5/12} = \\frac{0.075}{5/12} = \\frac{9}{50} = 0.18$.<br/>(c) For the youngest child: since every family of size $j$ has exactly one youngest child, $P(Y\\mid j) = 1/j$ is identical. Thus the probabilities are unchanged: $0.24$ for 1 child and $0.18$ for 4 children.</p>",
    "trap": "A random child from a larger family is LESS likely to be the eldest (1/4 vs 1/1), weighting the posterior toward smaller families.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 34(a–b), PDF p. 112."
  },
  {
    "id": "w.prob.3.ross.prob.35",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Commute arrival punctuality and weather inference",
    "prompt": "<p>Joe is late to work with probability 0.3 on rainy days and with probability 0.1 on dry days. Tomorrow the weather forecast predicts a 70% chance of rain. (a) What is the probability Joe arrives on time tomorrow? (b) Given that Joe arrives on time, what is the probability that it rained?</p>",
    "approach": "<p>Partition on weather to compute on-time arrival, then invert using Bayes formula.</p>",
    "solution": "<p>Let $R$ be rain ($P(R)=0.70, P(R^c)=0.30$) and $T$ be on-time arrival.<br/>We are given $P(T\\mid R) = 1 - 0.30 = 0.70$ and $P(T\\mid R^c) = 1 - 0.10 = 0.90$.<br/>(a) By total probability: $P(T) = P(T\\mid R)P(R) + P(T\\mid R^c)P(R^c) = (0.70)(0.70) + (0.90)(0.30) = 0.49 + 0.27 = 0.76$ (76%).<br/>(b) By Bayes formula: $P(R\\mid T) = \\frac{P(T\\mid R)P(R)}{P(T)} = \\frac{0.49}{0.76} = \\frac{49}{76} \\approx 0.6447$ (64.47%).</p>",
    "trap": "Remember that \"on time\" is the complement of \"late\", so on-time likelihoods are 0.70 and 0.90.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 35(a–b), PDF p. 112."
  },
  {
    "id": "w.prob.3.ross.prob.36",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Suspect guilt updating under uncertain trait evidence",
    "prompt": "<p>In the investigation of Example 3f, suspect prior guilt is $P(G)=0.60$ and population trait frequency is 0.20. Suppose now that new evidence indicates only a 90% chance that the criminal possesses the trait. If the suspect has the trait, how likely is he to be guilty?</p>",
    "approach": "<p>Condition on whether the criminal possesses the trait to evaluate the likelihoods $P(C\\mid G)$ and $P(C\\mid G^c)$.</p>",
    "solution": "<p>Let $G$ be guilt and $C$ the event the suspect has the trait. If the suspect is guilty, he has the trait if and only if the criminal does, so $P(C\\mid G) = 0.90$. If the suspect is innocent, his having the trait is independent of the crime scene evidence, occurring with general population frequency $P(C\\mid G^c) = 0.20$.<br/>By Bayes formula: $P(G\\mid C) = \\frac{P(C\\mid G)P(G)}{P(C\\mid G)P(G) + P(C\\mid G^c)P(G^c)} = \\frac{(0.90)(0.60)}{(0.90)(0.60) + (0.20)(0.40)} = \\frac{0.54}{0.54 + 0.08} = \\frac{0.54}{0.62} = \\frac{27}{31} \\approx 0.8710$.</p>",
    "trap": "Uncertainty in the crime evidence lowers the posterior probability from 88.24% to 87.10%.",
    "tests": [
      "c.prob.3.3.2",
      "c.prob.3.3.3"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 36, PDF p. 112."
  },
  {
    "id": "w.prob.3.ross.prob.37",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Hidden gift location and parental source inference",
    "prompt": "<p>A gift is hidden by Mom with probability 0.6 and by Dad with probability 0.4. Mom hides it upstairs 70% of the time and downstairs 30% of the time. Dad hides it upstairs and downstairs with equal probability. (a) What is the probability the gift is upstairs? (b) Given that it is downstairs, what is the probability it was hidden by Dad?</p>",
    "approach": "<p>Use total probability for location and Bayes formula to infer the parent.</p>",
    "solution": "<p>(a) Let $U$ be upstairs, $M$ Mom, $D$ Dad. By total probability: $P(U) = P(U\\mid M)P(M) + P(U\\mid D)P(D) = (0.70)(0.60) + (0.50)(0.40) = 0.42 + 0.20 = 0.62$ (62%).<br/>(b) The probability the gift is downstairs is $P(U^c) = 1 - 0.62 = 0.38$. The probability Dad hid it downstairs is $P(U^c\\mid D)P(D) = (0.50)(0.40) = 0.20$. By Bayes formula: $P(D\\mid U^c) = \\frac{0.20}{0.38} = \\frac{10}{19} \\approx 0.5263$ (52.63%).</p>",
    "trap": "Dad is more likely than Mom to have hidden the gift downstairs even though Mom is more likely overall to hide the gift.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 37(a–b), PDF pp. 112–113."
  },
  {
    "id": "w.prob.3.ross.prob.38",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Store employee resignation source attribution",
    "prompt": "<p>Stores A, B, and C employ 50, 75, and 100 workers, with female percentages of 50%, 60%, and 70%, respectively. Resignations are equally likely across all employees regardless of gender. If a female employee resigns, what is the probability she works in Store C?</p>",
    "approach": "<p>Count the total number of female employees in each store and find the fraction belonging to Store C.</p>",
    "solution": "<p>Compute female employee counts across stores:<br/>- Store A: $50\\times 0.50 = 25$ women.<br/>- Store B: $75\\times 0.60 = 45$ women.<br/>- Store C: $100\\times 0.70 = 70$ women.<br/>Total female employees: $25 + 45 + 70 = 140$. Since every employee is equally likely to resign, each female employee is equally likely to be the one who resigned. The probability that the resigning woman works in Store C is $P(\\text{Store C}\\mid \\text{Woman}) = \\frac{70}{140} = \\frac{1}{2} = 0.50$.</p>",
    "trap": "Do not weight by the store employee fractions directly without multiplying by each store's female proportion.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 38, PDF p. 113."
  },
  {
    "id": "w.prob.3.ross.prob.39",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Sequential coin toss inference with two-headed coin",
    "prompt": "<p>A pocket contains a fair coin ($P(H)=1/2$) and a two-headed coin ($P(H)=1$). A coin is chosen at random ($1/2$ each) and flipped. Find the probability it is the fair coin if: (a) flip 1 shows heads; (b) flips 1 and 2 both show heads; (c) flip 3 shows tails.</p>",
    "approach": "<p>Apply Bayes formula sequentially after each observed outcome.</p>",
    "solution": "<p>Let $F$ be the fair coin ($P(F)=1/2$) and $T$ the two-headed coin ($P(T)=1/2$).<br/>(a) $P(F\\mid H_1) = \\frac{(1/2)(1/2)}{(1/2)(1/2) + 1(1/2)} = \\frac{1/4}{3/4} = \\frac{1}{3}$.<br/>(b) After two heads: $P(F\\mid H_1 H_2) = \\frac{(1/4)(1/2)}{(1/4)(1/2) + 1(1/2)} = \\frac{1/8}{5/8} = \\frac{1}{5}$.<br/>(c) Since a two-headed coin can never show tails ($P(T_3\\mid T)=0$), observing tails proves with certainty that the coin is fair: $P(F\\mid T_3) = 1$.</p>",
    "trap": "A single tail instantly collapses the posterior probability of the two-headed coin to zero.",
    "tests": [
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 39(a–c), PDF p. 113."
  },
  {
    "id": "w.prob.3.ross.prob.40",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Coin toss urn selection and posterior probability",
    "prompt": "<p>Urn A contains 5 white and 7 black balls (12 balls). Urn B contains 3 white and 12 black balls (15 balls). A fair coin is flipped: heads selects Urn A, tails selects Urn B. A ball is drawn and is white. What is the probability the coin landed tails?</p>",
    "approach": "<p>Use Bayes formula with prior $1/2$ for each urn.</p>",
    "solution": "<p>Let $W$ be drawing a white ball. The conditional draw probabilities are $P(W\\mid A) = 5/12$ and $P(W\\mid B) = 3/15 = 1/5$. The total probability of white is $P(W) = (5/12)(1/2) + (1/5)(1/2) = \\frac{5}{24} + \\frac{1}{10} = \\frac{25 + 12}{120} = \\frac{37}{120}$. By Bayes formula: $P(\\text{Tails}\\mid W) = \\frac{P(W\\mid B)P(B)}{P(W)} = \\frac{1/10}{37/120} = \\frac{12}{37} \\approx 0.3243$.</p>",
    "trap": "Urn B has a lower white concentration (20% vs 41.7%), making Tails less likely given a white ball.",
    "tests": [
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 40, PDF p. 113."
  },
  {
    "id": "w.prob.3.ross.prob.41",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Accident risk in year two given accident-free year one",
    "prompt": "<p>In the driver risk model (30% accident-prone with annual accident rate 0.40; 70% non-prone with rate 0.20), what is the probability a driver has an accident in year 2 given that they had no accidents in year 1?</p>",
    "approach": "<p>Update the driver type posterior after zero accidents, then compute year 2 risk.</p>",
    "solution": "<p>Let $N_1$ be no accidents in year 1. We have $P(N_1\\mid A) = 1 - 0.40 = 0.60$ and $P(N_1\\mid A^c) = 1 - 0.20 = 0.80$. Total probability: $P(N_1) = (0.60)(0.30) + (0.80)(0.70) = 0.18 + 0.56 = 0.74$. Updated probability of being accident-prone: $P(A\\mid N_1) = \\frac{0.18}{0.74} = \\frac{9}{37}$, and $P(A^c\\mid N_1) = \\frac{28}{37}$. The probability of an accident in year 2 is $P(A_2\\mid N_1) = (0.40)\\left(\\frac{9}{37}\\right) + (0.20)\\left(\\frac{28}{37}\\right) = \\frac{3.6 + 5.6}{37} = \\frac{9.2}{37} = \\frac{46}{185} \\approx 0.2486$.</p>",
    "trap": "An accident-free year lowers the accident-prone fraction from 30% to 24.32%, reducing year 2 risk from 0.26 to 0.2486.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 41, PDF p. 113."
  },
  {
    "id": "w.prob.3.ross.prob.42",
    "course": "prob",
    "sec": "3.2",
    "marks": 5,
    "title": "Polya urn color reinforcement composition probabilities",
    "prompt": "<p>An urn begins with 5 white and 7 red balls (12 balls). At each step, a ball is drawn and returned with 1 additional ball of the same color. For a sample of 3 draws, find the probability of obtaining: (a) 0 white balls; (b) 1 white ball; (c) 3 white balls; (d) 2 white balls.</p>",
    "approach": "<p>Use sequence probability invariance in Polya's urn with parameter $c=1$.</p>",
    "solution": "<p>The total denominator for 3 draws is $12\\times 13\\times 14 = 2,184$.<br/>(a) 0 white balls ($RRR$): $\\frac{7\\times 8\\times 9}{2,184} = \\frac{504}{2,184} = \\frac{3}{13} \\approx 0.2308$.<br/>(b) 1 white ball: Any sequence with 1 white and 2 red (e.g. $WRR$) has probability $\\frac{5\\times 7\\times 8}{2,184} = \\frac{280}{2,184}$. There are $\\binom{3}{1}=3$ such sequences: $P = 3\\times\\frac{280}{2,184} = \\frac{840}{2,184} = \\frac{5}{13} \\approx 0.3846$.<br/>(c) 3 white balls ($WWW$): $\\frac{5\\times 6\\times 7}{2,184} = \\frac{210}{2,184} = \\frac{5}{52} \\approx 0.09615$.<br/>(d) 2 white balls: There are $\\binom{3}{2}=3$ sequences each having probability $\\frac{5\\times 6\\times 7}{2,184} = \\frac{210}{2,184}$: $P = 3\\times\\frac{210}{2,184} = \\frac{630}{2,184} = \\frac{15}{52} \\approx 0.2885$.</p>",
    "trap": "Check normalization: $3/13 + 5/13 + 5/52 + 15/52 = 8/13 + 20/52 = 8/13 + 5/13 = 1$.",
    "tests": [
      "c.prob.3.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 42(a–d), PDF p. 113."
  },
  {
    "id": "w.prob.3.ross.prob.43",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Half-deck card transfer and subsequent draw",
    "prompt": "<p>A 52-card deck is divided into two halves of 26 cards each. A card drawn from the first half turns out to be an ace, and is placed into the second half (now 27 cards). The second half is shuffled and a card is drawn. What is the probability that this drawn card is an ace?</p>",
    "approach": "<p>Condition on whether the drawn card is the transferred ace or one of the original 26 cards.</p>",
    "solution": "<p>Let $T$ be the transferred card and $C$ the drawn card. By total probability: $P(C \\text{ is ace}) = P(C \\text{ is ace}\\mid C = T)P(C = T) + P(C \\text{ is ace}\\mid C \\ne T)P(C \\ne T)$.<br/>- $P(C = T) = 1/27$, and given $C = T$, it is an ace with probability 1.<br/>- $P(C \\ne T) = 26/27$. Given $C \\ne T$, the card is drawn from the original 26 cards of the second half. Since the entire deck has 4 aces and the first half is known to contain at least 1 ace (the transferred ace), the remaining 51 cards contain 3 aces. By symmetry, each of the other 26 cards has probability $3/51$ of being an ace.<br/>Therefore: $P(C \\text{ is ace}) = 1\\left(\\frac{1}{27}\\right) + \\left(\\frac{3}{51}\\right)\\left(\\frac{26}{27}\\right) = \\frac{1}{27} + \\frac{26}{459} = \\frac{17 + 26}{459} = \\frac{43}{459} \\approx 0.09368$.</p>",
    "trap": "The 26 original cards in the second half have ace probability $3/51$, not $4/52$.",
    "tests": [
      "c.prob.3.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 43, PDF p. 113."
  },
  {
    "id": "w.prob.3.ross.prob.44",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "High-income household rate across geographic divisions",
    "prompt": "<p>Twelve percent of US households are in California ($P(CA)=0.12$). Nationwide, 1.3% of households earn $>\\$250k$ ($P(H)=0.013$), whereas 3.3% of California households earn $>\\$250k$ ($P(H\\mid CA)=0.033$). (a) What proportion of non-California households earn $>\\$250k$? (b) Given a US household earns $>\\$250k$, what is the probability it is in California?</p>",
    "approach": "<p>Use total probability to solve for non-California rate and Bayes formula for geographic attribution.</p>",
    "solution": "<p>(a) By total probability: $P(H) = P(H\\mid CA)P(CA) + P(H\\mid CA^c)P(CA^c)$. Substituting: $0.013 = (0.033)(0.12) + P(H\\mid CA^c)(0.88) = 0.00396 + 0.88 P(H\\mid CA^c)$. Thus $0.88 P(H\\mid CA^c) = 0.013 - 0.00396 = 0.00904$. Therefore $P(H\\mid CA^c) = \\frac{0.00904}{0.88} = \\frac{904}{88,000} = \\frac{113}{11,000} \\approx 0.01027$ (about 1.03%).<br/>(b) By Bayes formula: $P(CA\\mid H) = \\frac{P(H\\mid CA)P(CA)}{P(H)} = \\frac{0.00396}{0.013} = \\frac{396}{1,300} = \\frac{99}{325} \\approx 0.3046$ (30.46%).</p>",
    "trap": "California contains 12% of households but over 30% of high-income households.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 44(a–b), PDF p. 113."
  },
  {
    "id": "w.prob.3.ross.prob.45",
    "course": "prob",
    "sec": "3.3",
    "marks": 3,
    "title": "Coin type posterior among three coin varieties",
    "prompt": "<p>A box contains 3 coins: Coin 1 is two-headed ($P(H)=1$), Coin 2 is fair ($P(H)=0.5$), and Coin 3 is biased ($P(H)=0.75$). A coin is chosen at random ($1/3$ each) and flipped, showing heads. What is the probability it was the two-headed coin?</p>",
    "approach": "<p>Apply Bayes formula across the three equiprobable coin types.</p>",
    "solution": "<p>Let $C_1, C_2, C_3$ denote the choice of Coin 1, 2, or 3 ($P(C_i)=1/3$). By Bayes formula: $P(C_1\\mid H) = \\frac{P(H\\mid C_1)P(C_1)}{\\sum_{i=1}^3 P(H\\mid C_i)P(C_i)} = \\frac{1(1/3)}{1(1/3) + 0.5(1/3) + 0.75(1/3)} = \\frac{1}{1 + 0.5 + 0.75} = \\frac{1}{2.25} = \\frac{4}{9} \\approx 0.4444$.</p>",
    "trap": "Cancel the common prior factor $1/3$ to simplify to $\\frac{1}{1 + 0.5 + 0.75} = 4/9$.",
    "tests": [
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 45, PDF p. 113."
  },
  {
    "id": "w.prob.3.ross.prob.46",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "The Three Prisoners paradox analysis",
    "prompt": "<p>Three prisoners, A, B, and C, are told one will be executed and two freed. Prisoner A asks the jailer to name one of B or C who will be freed, arguing that since at least one must be freed, the information is harmless. The jailer refuses, claiming A's execution chance would rise from $1/3$ to $1/2$. Critique the jailer's reasoning and compute the true conditional probabilities.</p>",
    "approach": "<p>Model the jailer's protocol using Bayes formula across the three possible execution outcomes.</p>",
    "solution": "<p>The jailer's reasoning is FALSE. Let $A, B, C$ denote who is executed ($P(A)=P(B)=P(C)=1/3$). Suppose the jailer names B as being freed ($J_B$).<br/>- If A is executed, the jailer chooses between naming B or C at random: $P(J_B\\mid A) = 1/2$.<br/>- If B is executed, the jailer cannot name B: $P(J_B\\mid B) = 0$.<br/>- If C is executed, the jailer must name B: $P(J_B\\mid C) = 1$.<br/>By Bayes formula: $P(A\\mid J_B) = \\frac{(1/2)(1/3)}{(1/2)(1/3) + 0(1/3) + 1(1/3)} = \\frac{1/6}{1/6 + 1/3} = \\frac{1/6}{1/2} = \\frac{1}{3}$.<br/>Meanwhile, $P(C\\mid J_B) = \\frac{1(1/3)}{1/2} = \\frac{2}{3}$. Learning that B is freed does not change A's probability of execution (it remains $1/3$); instead, it doubles C's execution probability to $2/3$.</p>",
    "trap": "The jailer's announcement carries no information about A, but concentrated information about C.",
    "tests": [
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 46, PDF p. 113."
  },
  {
    "id": "w.prob.3.ross.prob.47",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Sequential repair attempts and successful agent probability",
    "prompt": "<p>Alice has a 30% chance of fixing her computer. If Alice cannot fix it, her friend Bob has a 40% chance of fixing it. (a) What is the probability the computer is fixed? (b) Given that the computer is fixed, what is the probability it was fixed by Bob?</p>",
    "approach": "<p>Partition the repair outcome into Alice fixing it and Bob fixing it after Alice fails.</p>",
    "solution": "<p>(a) Let $A$ and $B$ denote Alice and Bob fixing the computer. The disjoint events leading to repair are $A$ (probability 0.30) and $A^c \\cap B$ (probability $P(B\\mid A^c)P(A^c) = (0.40)(0.70) = 0.28$). The total probability the computer is fixed is $P(\\text{Fixed}) = 0.30 + 0.28 = 0.58$ (58%).<br/>(b) Given that the computer is fixed, the probability Bob fixed it is $P(B\\mid \\text{Fixed}) = \\frac{P(A^c \\cap B)}{P(\\text{Fixed})} = \\frac{0.28}{0.58} = \\frac{28}{58} = \\frac{14}{29} \\approx 0.4828$ (48.28%).</p>",
    "trap": "Bob only gets an attempt if Alice fails, so Bob's overall contribution is $(0.70)(0.40) = 0.28$.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 47(a–b), PDF p. 113."
  },
  {
    "id": "w.prob.3.ross.prob.48",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Correlation in multi-year claims from population heterogeneity",
    "prompt": "<p>Male drivers make an insurance claim with probability $p_m$ and females with probability $p_f$ ($p_m \\ne p_f$). Fraction $\\alpha$ of policyholders are male ($0 < \\alpha < 1$). Let $A_i$ be the event a randomly chosen policyholder makes a claim in year $i$. Prove that $P(A_2\\mid A_1) > P(A_1)$ and give the intuitive explanation.</p> Assume claims in different years are independent once the driver’s gender is known.",
    "approach": "<p>Compute $P(A_1)$ and $P(A_1 A_2)$ using conditional independence given gender and apply Cauchy-Schwarz / variance.</p>",
    "solution": "<p>By total probability: $P(A_1) = \\alpha p_m + (1-\\alpha)p_f$. Since claims in successive years are conditionally independent given gender: $P(A_1 A_2) = \\alpha p_m^2 + (1-\\alpha)p_f^2$.<br/>Consider the difference $P(A_1 A_2) - [P(A_1)]^2 = \\alpha p_m^2 + (1-\\alpha)p_f^2 - [\\alpha p_m + (1-\\alpha)p_f]^2 = \\alpha(1-\\alpha)(p_m - p_f)^2$.<br/>Because $0 < \\alpha < 1$ and $p_m \\ne p_f$, this difference is strictly positive: $P(A_1 A_2) > [P(A_1)]^2$.<br/>Dividing both sides by $P(A_1)$ yields $P(A_2\\mid A_1) = \\frac{P(A_1 A_2)}{P(A_1)} > P(A_1)$.<br/>Intuitive reason: Making a claim in year 1 provides evidence that the driver belongs to the higher-risk group, which strictly increases the probability of making a claim in year 2.</p>",
    "trap": "Even when years are independent for any fixed individual, population mixture creates positive dependence across time.",
    "tests": [
      "c.prob.3.4.1",
      "c.prob.3.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 48, PDF pp. 113–114."
  },
  {
    "id": "w.prob.3.ross.prob.49",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Die-determined sample size and urn color homogeneity",
    "prompt": "<p>An urn contains 5 white and 10 black balls (15 balls). A fair die is rolled ($N\\in\\{1,\\ldots,6\\}$), and $N$ balls are randomly chosen without replacement. (a) Find the probability that all selected balls are white. (b) Given that all selected balls are white, find the conditional probability the die landed on 3.</p>",
    "approach": "<p>Condition on the die roll $N$ and compute hypergeometric probabilities $\\binom{5}{N}/\\binom{15}{N}$.</p>",
    "solution": "<p>Let $W$ be the event all chosen balls are white. For $N=6$, $P(W\\mid N=6) = 0$ because there are only 5 white balls in the urn. For $N=1..5$:<br/>- $N=1$: $\\frac{5}{15} = \\frac{1}{3} = \\frac{1001}{3003}$<br/>- $N=2$: $\\frac{\\binom{5}{2}}{\\binom{15}{2}} = \\frac{10}{105} = \\frac{2}{21} = \\frac{286}{3003}$<br/>- $N=3$: $\\frac{\\binom{5}{3}}{\\binom{15}{3}} = \\frac{10}{455} = \\frac{2}{91} = \\frac{66}{3003}$<br/>- $N=4$: $\\frac{\\binom{5}{4}}{\\binom{15}{4}} = \\frac{5}{1365} = \\frac{1}{273} = \\frac{11}{3003}$<br/>- $N=5$: $\\frac{\\binom{5}{5}}{\\binom{15}{5}} = \\frac{1}{3003}$<br/>(a) $P(W) = \\frac{1}{6}\\sum_{N=1}^5 P(W\\mid N) = \\frac{1}{6}\\left(\\frac{1001 + 286 + 66 + 11 + 1}{3003}\\right) = \\frac{1,365}{6\\times 3,003} = \\frac{455}{6,006} = \\frac{5}{66} \\approx 0.07576$.<br/>(b) By Bayes formula: $P(N=3\\mid W) = \\frac{(1/6)(66/3003)}{P(W)} = \\frac{66}{1,365} = \\frac{22}{455} \\approx 0.04835$.</p>",
    "trap": "For $N=6$, drawing all white balls is impossible ($P=0$).",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 49, PDF p. 114."
  },
  {
    "id": "w.prob.3.ross.prob.50",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Two-cabinet coin drawer selection (Bertrand box paradox)",
    "prompt": "<p>Cabinet A has 2 drawers, each containing a silver coin. Cabinet B has 2 drawers, one with a silver coin and one with a gold coin. A cabinet is chosen at random ($1/2$ each), a random drawer is opened, and a silver coin is found. What is the probability that the other drawer in that cabinet contains a silver coin?</p>",
    "approach": "<p>Condition on the chosen cabinet or count among the 3 equally likely silver coins.</p>",
    "solution": "<p>The other drawer contains a silver coin if and only if Cabinet A was chosen. Let $S$ be the event of finding a silver coin.<br/>- $P(S\\mid A) = 1$<br/>- $P(S\\mid B) = 1/2$<br/>By total probability: $P(S) = 1(1/2) + (1/2)(1/2) = 1/2 + 1/4 = 3/4$.<br/>By Bayes formula: $P(A\\mid S) = \\frac{P(S\\mid A)P(A)}{P(S)} = \\frac{1(1/2)}{3/4} = \\frac{2}{3}$.<br/>Direct count interpretation: There are 3 silver coins in total (2 in A, 1 in B). The opened drawer is equally likely to reveal any of these 3 coins. In 2 of the 3 cases, the coin is in Cabinet A (whose other drawer also contains silver), giving $2/3$.</p>",
    "trap": "Do not assume the two cabinets are equally likely once a silver coin is drawn; Cabinet A contains twice as many silver coins.",
    "tests": [
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 50, PDF p. 114."
  },
  {
    "id": "w.prob.3.ross.prob.51",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Prostate-specific antigen test Bayesian updating",
    "prompt": "<p>An elevated PSA test occurs in 26.8% of men with prostate cancer ($P(+\\mid C)=0.268$) and in 13.5% of men without cancer ($P(+\\mid C^c)=0.135$). (a) If a physician's prior belief of cancer is 70%, find $P(C\\mid +)$ and $P(C\\mid -)$. (b) Repeat for a prior belief of 30%.</p>",
    "approach": "<p>Apply Bayes formula for positive and negative test outcomes under both priors.</p>",
    "solution": "<p>(a) With prior $P(C)=0.70$ ($P(C^c)=0.30$):<br/>- Positive test: $P(C\\mid +) = \\frac{(0.268)(0.70)}{(0.268)(0.70) + (0.135)(0.30)} = \\frac{0.1876}{0.1876 + 0.0405} = \\frac{0.1876}{0.2281} \\approx 0.8224$ (82.24%).<br/>- Negative test: $P(C\\mid -) = \\frac{(1-0.268)(0.70)}{(1-0.268)(0.70) + (1-0.135)(0.30)} = \\frac{(0.732)(0.70)}{(0.732)(0.70) + (0.865)(0.30)} = \\frac{0.5124}{0.5124 + 0.2595} = \\frac{0.5124}{0.7719} \\approx 0.6638$ (66.38%).<br/>(b) With prior $P(C)=0.30$ ($P(C^c)=0.70$):<br/>- Positive test: $P(C\\mid +) = \\frac{(0.268)(0.30)}{(0.268)(0.30) + (0.135)(0.70)} = \\frac{0.0804}{0.0804 + 0.0945} = \\frac{0.0804}{0.1749} \\approx 0.4597$ (45.97%).<br/>- Negative test: $P(C\\mid -) = \\frac{(0.732)(0.30)}{(0.732)(0.30) + (0.865)(0.70)} = \\frac{0.2196}{0.2196 + 0.6055} = \\frac{0.2196}{0.8251} \\approx 0.2661$ (26.61%).</p>",
    "trap": "Due to poor specificity and sensitivity, a negative test only slightly reduces cancer probability.",
    "tests": [
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 51(a–b), PDF p. 114."
  },
  {
    "id": "w.prob.3.ross.prob.52",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Three-tier driver risk classification and accident-free update",
    "prompt": "<p>An insurer classifies people into good risks (20%, accident rate 0.05), average risks (50%, accident rate 0.15), and bad risks (30%, accident rate 0.30). (a) What proportion of people have an accident in a given year? (b) Given that a policyholder has no accidents in a year, what is the probability they are a good risk? An average risk?</p>",
    "approach": "<p>Use total probability across the three risk tiers and Bayes formula for the accident-free posterior.</p>",
    "solution": "<p>(a) Let $A$ be an accident. By total probability: $P(A) = (0.05)(0.20) + (0.15)(0.50) + (0.30)(0.30) = 0.010 + 0.075 + 0.090 = 0.175$ (17.5%).<br/>(b) The probability of having no accidents is $P(A^c) = 1 - 0.175 = 0.825$.<br/>- Good risk: $P(G\\mid A^c) = \\frac{(1-0.05)(0.20)}{0.825} = \\frac{0.190}{0.825} = \\frac{190}{825} = \\frac{38}{165} \\approx 0.2303$ (23.03%).<br/>- Average risk: $P(\\text{Avg}\\mid A^c) = \\frac{(1-0.15)(0.50)}{0.825} = \\frac{0.425}{0.825} = \\frac{425}{825} = \\frac{17}{33} \\approx 0.5152$ (51.52%).<br/>(Similarly, Bad risk is $\\frac{(0.70)(0.30)}{0.825} = \\frac{210}{825} = \\frac{14}{55} \\approx 0.2545$).</p>",
    "trap": "Good risk rises from 20% to 23.03% while Bad risk drops from 30% to 25.45%.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 52, PDF p. 114."
  },
  {
    "id": "w.prob.3.ross.prob.53",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Recommendation strength posteriors given job outcome",
    "prompt": "<p>A worker receives a strong recommendation with probability 0.7 ($P(\\text{offer})=0.8$), moderate with probability 0.2 ($P(\\text{offer})=0.4$), and weak with probability 0.1 ($P(\\text{offer})=0.1$). (a) What is the overall offer probability? (b) Given an offer, find the posteriors for each recommendation strength. (c) Given no offer, find the posteriors.</p>",
    "approach": "<p>Apply total probability for the offer rate and Bayes formula for both offer and rejection outcomes.</p>",
    "solution": "<p>(a) Let $O$ be receiving an offer. By total probability: $P(O) = (0.8)(0.7) + (0.4)(0.2) + (0.1)(0.1) = 0.56 + 0.08 + 0.01 = 0.65$ (65%).<br/>(b) Given an offer ($P(O)=0.65$):<br/>- Strong: $\\frac{0.56}{0.65} = \\frac{56}{65} \\approx 0.8615$ (86.15%).<br/>- Moderate: $\\frac{0.08}{0.65} = \\frac{8}{65} \\approx 0.1231$ (12.31%).<br/>- Weak: $\\frac{0.01}{0.65} = \\frac{1}{65} \\approx 0.0154$ (1.54%).<br/>(c) Given no offer ($P(O^c) = 1 - 0.65 = 0.35$):<br/>- Strong: $\\frac{(0.2)(0.7)}{0.35} = \\frac{0.14}{0.35} = \\frac{2}{5} = 0.40$ (40%).<br/>- Moderate: $\\frac{(0.6)(0.2)}{0.35} = \\frac{0.12}{0.35} = \\frac{12}{35} \\approx 0.3429$ (34.29%).<br/>- Weak: $\\frac{(0.9)(0.1)}{0.35} = \\frac{0.09}{0.35} = \\frac{9}{35} \\approx 0.2571$ (25.71%).</p>",
    "trap": "Even after rejection, a strong recommendation has 40% posterior probability because 70% of recommendations were strong.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 53(a–c), PDF p. 114."
  },
  {
    "id": "w.prob.3.ross.prob.54",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "King-of-the-hill tournament winning probability",
    "prompt": "<p>Four players A, B, C, D are randomly ordered in line. Players 1 and 2 play; the winner plays player 3; the winner of that game plays player 4 for the championship. If player A wins every game with probability $p$, what is the probability A wins the tournament?</p>",
    "approach": "<p>Condition on player A's initial position in line (1, 2, 3, or 4).</p>",
    "solution": "<p>Because the order is random, player A is equally likely to occupy any of the 4 positions ($1/4$ each).<br/>- If A is in position 1 or 2 (probability $2/4 = 1/2$), A must play 3 games (rounds 1, 2, 3) and win all 3: probability $p^3$.<br/>- If A is in position 3 (probability $1/4$), A enters in round 2, playing 2 games (rounds 2, 3) and must win both: probability $p^2$.<br/>- If A is in position 4 (probability $1/4$), A enters in round 3, playing only the final game: probability $p$.<br/>By total probability, the probability A wins the tournament is $P = \\left(\\frac{1}{2}\\right)p^3 + \\left(\\frac{1}{4}\\right)p^2 + \\left(\\frac{1}{4}\\right)p = \\frac{p(2p^2 + p + 1)}{4}$.</p>",
    "trap": "Positions 1 and 2 are symmetric because both players start in round 1.",
    "tests": [
      "c.prob.3.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 54, PDF p. 114."
  },
  {
    "id": "w.prob.3.ross.prob.55",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Three-player weighted tournament winning probabilities",
    "prompt": "<p>Three players 1, 2, 3 enter a tournament. Two are chosen randomly to play round 1; the winner plays the remaining player in round 2 for the title. Player $i$ beats $j$ with probability $\\frac{i}{i+j}$. (a) Find the probability player 1 wins the tournament. (b) Given player 1 wins, find the conditional probability player 1 sat out round 1.</p>",
    "approach": "<p>Condition on which pair is chosen for round 1 and apply game-tree conditional probabilities.</p>",
    "solution": "<p>Each of the $\\binom{3}{2}=3$ pairs is equally likely to be selected for round 1 ($1/3$ each).<br/>- Pair $\\{1,2\\}$: 1 beats 2 with prob $1/3$, then 1 beats 3 with prob $1/4$: $P = (1/3)(1/4) = 1/12$.<br/>- Pair $\\{1,3\\}$: 1 beats 3 with prob $1/4$, then 1 beats 2 with prob $1/3$: $P = (1/4)(1/3) = 1/12$.<br/>- Pair $\\{2,3\\}$ (player 1 sits out): 2 beats 3 with prob $2/5$ (then 1 beats 2 with prob $1/3$: $(2/5)(1/3) = 2/15$) or 3 beats 2 with prob $3/5$ (then 1 beats 3 with prob $1/4$: $(3/5)(1/4) = 3/20$). Total for pair $\\{2,3\\}$ is $\\frac{2}{15} + \\frac{3}{20} = \\frac{8 + 9}{60} = \\frac{17}{60}$.<br/>(a) $P(1\\text{ wins}) = \\frac{1}{3}\\left(\\frac{1}{12} + \\frac{1}{12} + \\frac{17}{60}\\right) = \\frac{1}{3}\\left(\\frac{5 + 5 + 17}{60}\\right) = \\frac{27}{180} = \\frac{3}{20} = 0.15$.<br/>(b) By Bayes formula: $P(\\text{sat out}\\mid 1\\text{ wins}) = \\frac{(1/3)(17/60)}{3/20} = \\frac{17/180}{27/180} = \\frac{17}{27} \\approx 0.6296$.</p>",
    "trap": "Player 1 is much more likely to win if sitting out round 1 ($17/60 \\approx 0.283$) than if playing round 1 ($1/12 \\approx 0.083$).",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 55(a–b), PDF p. 114."
  },
  {
    "id": "w.prob.3.ross.prob.56",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Two-coin repeated tossing sequential probabilities",
    "prompt": "<p>A box contains Coin 1 ($P(H)=0.3$) and Coin 2 ($P(H)=0.5$). One coin is selected at random and repeatedly flipped. Let $H_j$ be heads on flip $j$. Find: (a) $P(H_1)$; (b) $P(H_2\\mid H_1)$; (c) $P(C_1\\mid H_1)$; (d) $P(H_2 H_3 H_4\\mid H_1)$.</p>",
    "approach": "<p>Condition on the chosen coin and apply total probability and Bayes formula.</p>",
    "solution": "<p>(a) $P(H_1) = (0.3)(0.5) + (0.5)(0.5) = 0.15 + 0.25 = 0.40$.<br/>(b) $P(H_1 H_2) = (0.3)^2(0.5) + (0.5)^2(0.5) = 0.045 + 0.125 = 0.170$. Thus $P(H_2\\mid H_1) = \\frac{0.170}{0.40} = 0.425$.<br/>(c) By Bayes formula: $P(C_1\\mid H_1) = \\frac{(0.3)(0.5)}{0.40} = \\frac{0.15}{0.40} = \\frac{3}{8} = 0.375$.<br/>(d) $P(H_1 H_2 H_3 H_4) = (0.3)^4(0.5) + (0.5)^4(0.5) = 0.00405 + 0.03125 = 0.0353$. Dividing by $P(H_1) = 0.40$ gives $P(H_2 H_3 H_4\\mid H_1) = \\frac{0.0353}{0.40} = 0.08825$.</p>",
    "trap": "The flips are NOT unconditionally independent: $P(H_2\\mid H_1) = 0.425 > P(H_1) = 0.40$.",
    "tests": [
      "c.prob.3.5.1",
      "c.prob.3.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 56(a–d), PDF pp. 114–115."
  },
  {
    "id": "w.prob.3.ross.prob.57",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Best-of-seven playoff series comeback and lead attribution",
    "prompt": "<p>In a best-of-7 series between teams A and B, games are independently won by A with probability $p$. Given that one team leads 3 games to 0: (a) what is the probability it is team A? (b) what is the probability that the leading team wins the series?</p>",
    "approach": "<p>Use Bayes formula for team identity, and compute the probability the trailing team wins 4 straight games to stage a comeback.</p>",
    "solution": "<p>(a) The probability A leads 3-0 is $p^3$; the probability B leads 3-0 is $(1-p)^3$. By Bayes formula: $P(\\text{A leads 3-0}\\mid \\text{someone leads 3-0}) = \\frac{p^3}{p^3 + (1-p)^3}$.<br/>(b) The leading team needs 1 win in at most 4 remaining games. It loses the series if and only if the trailing team wins the next 4 consecutive games.<br/>- If A leads, B wins 4 straight with probability $(1-p)^4$, so A wins with probability $1 - (1-p)^4$.<br/>- If B leads, A wins 4 straight with probability $p^4$, so B wins with probability $1 - p^4$.<br/>By total probability, the probability the leading team wins the series is $\\frac{p^3[1 - (1-p)^4] + (1-p)^3[1 - p^4]}{p^3 + (1-p)^3}$. When $p=1/2$, this equals $1 - (1/2)^4 = 1 - 1/16 = 15/16 = 0.9375$.</p>",
    "trap": "A 3-0 lead requires only 1 win from up to 4 games, so a comeback requires 4 consecutive wins by the trailer.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 57(a–b), PDF pp. 114–115."
  },
  {
    "id": "w.prob.3.ross.prob.58",
    "course": "prob",
    "sec": "3.4",
    "marks": 3,
    "title": "Component functionality in a working parallel system",
    "prompt": "<p>A parallel system of $n$ components functions if at least one component works. Components function independently with probability $p$. Find the conditional probability that component 1 works given that the system is functioning.</p> Evaluate for the book’s component probability p=1/2.",
    "approach": "<p>Apply the definition of conditional probability using the complement probability of system failure.</p>",
    "solution": "<p>Let $C_1$ be the event component 1 works and $S$ the event the system functions. Since $C_1 \\subseteq S$, $C_1 \\cap S = C_1$, so $P(C_1 \\cap S) = P(C_1) = p$. The system functions unless all $n$ components fail, so $P(S) = 1 - (1-p)^n$. Therefore, $P(C_1\\mid S) = \\frac{P(C_1 \\cap S)}{P(S)} = \\frac{p}{1 - (1-p)^n}$.</p> At p=1/2 this is 2^{n−1}/(2^n−1). Conditioning requires a positive chance that the system works.",
    "trap": "$C_1$ is a subset of $S$, so their intersection is simply $C_1$.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 58, PDF p. 115."
  },
  {
    "id": "w.prob.3.ross.prob.59",
    "course": "prob",
    "sec": "3.4",
    "marks": 4,
    "title": "Qualitative independence assessments for real-world pairs",
    "prompt": "<p>For each pair of events (a)–(e), state whether you would model them as independent and justify: (a) businesswoman has blue eyes, secretary has blue eyes; (b) professor owns a car, professor listed in phone book; (c) man under 6 ft tall, man weighs $>200$ lbs; (d) woman lives in US, woman lives in Western Hemisphere; (e) rain tomorrow, rain day after tomorrow.</p>",
    "approach": "<p>Examine whether knowledge of one event physically or statistically alters the probability of the other.</p>",
    "solution": "<p>(a) Independent: eye color of an employer and employee have no common causal mechanism or hiring correlation.<br/>(b) Dependent: both car ownership and landline phone listing correlate positively with income, homeownership, and age.<br/>(c) Dependent: height and weight are positively correlated in human populations; being under 6 ft decreases the probability of exceeding 200 lbs.<br/>(d) Dependent: the United States is entirely contained within the Western Hemisphere; living in the US implies living in the Western Hemisphere with probability 1.<br/>(e) Dependent: meteorological conditions persist over multi-day periods; rain tomorrow indicates an active low-pressure weather system, increasing rain probability the following day.</p>",
    "trap": "Containment ($E\\subseteq F$) implies strong dependence, never independence (unless $P(E)=0$).",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 59(a–e), PDF p. 115."
  },
  {
    "id": "w.prob.3.ross.prob.60",
    "course": "prob",
    "sec": "3.4",
    "marks": 4,
    "title": "Class and gender independence headcount equation",
    "prompt": "<p>A class contains 4 first-year boys, 6 first-year girls, and 6 sophomore boys. How many sophomore girls must be enrolled so that gender and academic class are independent when a student is selected at random?</p>",
    "approach": "<p>Equate the cell proportion to the product of row and column marginal proportions.</p>",
    "solution": "<p>Let $g$ be the number of sophomore girls. The 2x2 contingency table has entries: First-year boys = 4, First-year girls = 6, Sophomore boys = 6, Sophomore girls = $g$.<br/>- First-year total: $4 + 6 = 10$.<br/>- Sophomore total: $6 + g$.<br/>- Total boys: $4 + 6 = 10$.<br/>- Total class size: $10 + 6 + g = 16 + g$.<br/>Independence between gender and class requires $P(\\text{First-year} \\cap \\text{Boy}) = P(\\text{First-year})P(\\text{Boy})$, which translates to $\\frac{4}{16+g} = \\left(\\frac{10}{16+g}\\right)\\left(\\frac{10}{16+g}\\right)$. Cross-multiplying: $4(16+g) = 100 \\implies 64 + 4g = 100 \\implies 4g = 36 \\implies g = 9$. There must be 9 sophomore girls.</p>",
    "trap": "Check the ratio: boys to girls is $4:6 = 2:3$ in first-year, so sophomores must also have ratio $6:g = 2:3 \\implies g=9$.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 60, PDF p. 115."
  },
  {
    "id": "w.prob.3.ross.prob.61",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Probability that the n-th coupon is a new type",
    "prompt": "<p>Coupons are continually collected from $m$ distinct types, where each coupon is independently of type $i$ with probability $p_i$ ($\\sum_{i=1}^m p_i = 1$). What is the probability that the $n$-th coupon collected is a new type?</p>",
    "approach": "<p>Condition on the type of the $n$-th coupon and use independence of earlier draws.</p>",
    "solution": "<p>Let $C_n$ be the type of the $n$-th coupon. By total probability: $P(n\\text{-th is new}) = \\sum_{i=1}^m P(n\\text{-th is new}\\mid C_n = i)P(C_n = i)$.<br/>Given $C_n = i$, the coupon is a new type if and only if none of the first $n-1$ coupons were of type $i$. Since draws are independent, the probability that any single coupon is not of type $i$ is $1 - p_i$, so the probability none of the first $n-1$ are type $i$ is $(1 - p_i)^{n-1}$.<br/>Since $P(C_n = i) = p_i$, substituting gives $P(n\\text{-th is new}) = \\sum_{i=1}^m p_i (1 - p_i)^{n-1}$.</p>",
    "trap": "The condition applies to the specific type drawn on step $n$, which decouples the earlier draw events.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 61, PDF p. 115."
  },
  {
    "id": "w.prob.3.ross.prob.62",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Random walk stock price increments and first-step inference",
    "prompt": "<p>Each day a stock price independently moves $+1$ with probability $p$ and $-1$ with probability $1-p$. Find: (a) probability price is unchanged after 2 days; (b) probability price increases by 1 after 3 days; (c) given the price increased by 1 after 3 days, conditional probability it went up on day 1.</p>",
    "approach": "<p>Enumerate step combinations matching net displacements and apply conditional probability.</p>",
    "solution": "<p>(a) Unchanged after 2 days requires 1 up ($U$) and 1 down ($D$): $\\binom{2}{1}p(1-p) = 2p(1-p)$.<br/>(b) After 3 days, net change $+1$ requires 2 ups and 1 down: $\\binom{3}{2}p^2(1-p) = 3p^2(1-p)$.<br/>(c) The 3 paths producing net change $+1$ are $UUD$, $UDU$, and $DUU$. Each has identical probability $p^2(1-p)$. Two of these paths ($UUD$ and $UDU$) start with an up move on day 1. Therefore: $P(\\text{Up on day 1}\\mid \\text{Net } +1) = \\frac{2p^2(1-p)}{3p^2(1-p)} = \\frac{2}{3}$.</p>",
    "trap": "The parameter $p$ cancels completely in (c) because all 3 paths have the exact same likelihood.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 62(a–c), PDF p. 115."
  },
  {
    "id": "w.prob.3.ross.prob.63",
    "course": "prob",
    "sec": "3.4",
    "marks": 4,
    "title": "Von Neumann coin simulation from an unknown bias",
    "prompt": "<p>To simulate a fair coin from a coin with unknown head probability $p \\in (0,1)$, consider: (1) flip twice; (2) if outcomes are identical ($HH$ or $TT$), discard and repeat; (3) if different, take the last flip as the result. (a) Prove this generates fair flips. (b) Explain why waiting for consecutive flips to differ in continuous tossing is biased.</p>",
    "approach": "<p>Show that $P(HT) = P(TH)$ and examine run transitions in sequential tossing.</p>",
    "solution": "<p>(a) In independent pairs of tosses: $P(HT) = p(1-p)$ and $P(TH) = (1-p)p$. These two probabilities are identically equal for every $p\\in(0,1)$. Conditioning on stopping ($HT \\cup TH$): $P(HT\\mid HT\\cup TH) = \\frac{p(1-p)}{p(1-p) + (1-p)p} = \\frac{p(1-p)}{2p(1-p)} = \\frac{1}{2}$. Thus taking the last flip of the stopping pair produces an exact fair coin.<br/>(b) In continuous rolling until two consecutive flips differ, the process stops on the first transition. The first transition is $HT$ if the sequence begins with a run of heads, which has probability $\\sum_{k=1}^\\infty p^k(1-p) = p$. The first transition is $TH$ if it begins with tails (probability $1-p$). The final flip would therefore result in tails with probability $p$ and heads with probability $1-p$, retaining the original bias rather than producing a fair outcome.</p>",
    "trap": "Continuous sequential transitions depend on which run comes first, destroying symmetry.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 63(a–b), PDF p. 115."
  },
  {
    "id": "w.prob.3.ross.prob.64",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Coin sequence pattern race: HHHH versus THHH",
    "prompt": "Flip a coin independently with head probability p. (a) Find the chance the first four flips are HHHH. (b) Find the chance they are THHH. (c) Find the chance HHHH appears before THHH.",
    "approach": "<p>Notice that $HHHH$ can appear first if and only if it occurs on the very first four flips.</p>",
    "solution": "(a) p^4. (b) (1−p)p^3. (c) Suppose the first HHHH starts later than flip 1. The flip just before it must be T, since H would make an earlier HHHH. That preceding T and the next three H form THHH, ending one flip before HHHH. Thus HHHH wins this race exactly when the first four flips are heads, with probability p^4. For 0<p<1 a pattern eventually appears almost surely. At p=0 neither pattern appears; at p=1 HHHH wins surely.",
    "trap": "For a fair coin ($p=1/2$), $THHH$ beats $HHHH$ with overwhelming probability $1 - (1/2)^4 = 15/16 \\approx 0.9375$.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 64(a–c), PDF p. 115."
  },
  {
    "id": "w.prob.3.ross.prob.65",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Mendelian inheritance of eye color and sequential births",
    "prompt": "<p>Brown eyes ($B$) is dominant over blue ($b$). Smith and both of his parents have brown eyes, but his sister has blue eyes. (a) What is the probability Smith carries the blue-eyed gene? (b) If Smith marries a blue-eyed woman, what is the probability their first child has blue eyes? (c) If their first child has brown eyes, what is the probability their second child has brown eyes?</p>",
    "approach": "<p>Deduce parental genotypes from the sister, then update Smith's genotype sequentially.</p>",
    "solution": "<p>(a) Since the sister has blue eyes ($bb$), both parents must be carriers ($Bb$). Smith has brown eyes, ruling out $bb$. His possible genotypes from parents $Bb \\times Bb$ are $BB, Bb, bB$, each with probability $1/3$. The probability Smith carries the blue gene is $P(Bb) = 2/3$.<br/>(b) The wife is $bb$. A child has blue eyes if Smith passes $b$: $P(\\text{1st blue}) = P(Bb)P(b\\mid Bb) = (2/3)(1/2) = 1/3$.<br/>(c) Given first child has brown eyes ($B_1$): $P(B_1\\mid Bb) = 1/2$ and $P(B_1\\mid BB) = 1$. By Bayes formula: $P(Bb\\mid B_1) = \\frac{(1/2)(2/3)}{(1/2)(2/3) + 1(1/3)} = \\frac{1/3}{1/3 + 1/3} = \\frac{1}{2}$. The probability the second child has blue eyes is $P(Bb\\mid B_1)(1/2) = (1/2)(1/2) = 1/4$. Thus the probability the second child has brown eyes is $1 - 1/4 = 3/4$.</p>",
    "trap": "A brown-eyed first child reduces the probability that Smith is a carrier from $2/3$ to $1/2$.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 65(a–c), PDF p. 116."
  },
  {
    "id": "w.prob.3.ross.prob.66",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Albinism carrier probabilities and child offspring risks",
    "prompt": "<p>Albinism is recessive ($a$). Normal parents have two children, one of whom is albino. The nonalbino child mates with a known carrier ($Aa$). (a) What is the probability their first offspring is albino? (b) Given the first offspring is normal, what is the conditional probability their second offspring is albino?</p>",
    "approach": "<p>Condition on the nonalbino parent's carrier status ($Aa$) and update via Bayes formula after the first birth.</p>",
    "solution": "<p>(a) The grandparents produced an albino child ($aa$), so both grandparents are $Aa$. The nonalbino child $C$ has genotype $AA$ with probability $1/3$ and $Aa$ with probability $2/3$. The mate is $Aa$. An albino offspring ($aa$) occurs only if $C$ is $Aa$ and both parents pass $a$: $P(\\text{1st albino}) = P(C \\text{ is } Aa)P(a\\mid C)P(a\\mid \\text{mate}) = (2/3)(1/2)(1/2) = 1/6$.<br/>(b) Let $N_1$ be the event the first child is normal ($P(N_1) = 1 - 1/6 = 5/6$). By Bayes formula: $P(C \\text{ is } Aa\\mid N_1) = \\frac{P(N_1\\mid Aa)P(Aa)}{P(N_1)} = \\frac{(3/4)(2/3)}{5/6} = \\frac{1/2}{5/6} = \\frac{3}{5}$. The probability the second child is albino is $P(C \\text{ is } Aa\\mid N_1)(1/4) = (3/5)(1/4) = \\frac{3}{20} = 0.15$.</p>",
    "trap": "A normal first child reduces the probability of being a carrier from $2/3$ to $3/5$.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 66(a–b), PDF p. 116."
  },
  {
    "id": "w.prob.3.ross.prob.67",
    "course": "prob",
    "sec": "3.4",
    "marks": 4,
    "title": "Simultaneous target shooting hit attribution",
    "prompt": "<p>Barbara hits a target with probability $p_1$ and Dianne hits it with probability $p_2$ independently. They shoot simultaneously. Given that the target was hit, find the conditional probability that: (a) both hit the target; (b) Barbara hit the target. State your independence assumptions.</p>",
    "approach": "<p>Use independence to evaluate the union probability and divide joint probabilities by $P(H_1 \\cup H_2)$.</p>",
    "solution": "<p>Let $H_1$ and $H_2$ be the events Barbara and Dianne hit the target. By independence: $P(H_1 H_2) = p_1 p_2$ and $P(H_1 \\cup H_2) = 1 - (1 - p_1)(1 - p_2) = p_1 + p_2 - p_1 p_2$.<br/>(a) Both hit: $P(H_1 H_2\\mid H_1 \\cup H_2) = \\frac{P(H_1 H_2)}{P(H_1 \\cup H_2)} = \\frac{p_1 p_2}{p_1 + p_2 - p_1 p_2}$.<br/>(b) Barbara hit: $P(H_1\\mid H_1 \\cup H_2) = \\frac{P(H_1)}{P(H_1 \\cup H_2)} = \\frac{p_1}{p_1 + p_2 - p_1 p_2}$.<br/>Assumption: The shot accuracies $H_1$ and $H_2$ are statistically independent.</p>",
    "trap": "Since $H_1 \\subseteq H_1 \\cup H_2$, the intersection $H_1 \\cap (H_1 \\cup H_2) = H_1$.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 67, PDF p. 116."
  },
  {
    "id": "w.prob.3.ross.prob.68",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Simultaneous duel termination and survival probabilities",
    "prompt": "<p>In a duel, A and B shoot simultaneously until at least one is hit. A hits B with probability $p_A$ and B hits A with probability $p_B$ on each round independently. Find: (a) $P(\\text{A is not hit})$; (b) $P(\\text{both are hit})$; (c) probability the duel ends on round $n$; (d) conditional probability the duel ends on round $n$ given A is not hit.</p> (e) Find the conditional probability the duel ends on round n given both are hit.",
    "approach": "<p>Identify decisive round probabilities using geometric waiting times.</p>",
    "solution": "<p>Each round has continuation probability $q = (1 - p_A)(1 - p_B)$, and termination probability $1 - q = p_A + p_B - p_A p_B$.<br/>(a) A is not hit if and only if on the decisive round, A hits B while B misses A: $P(\\text{A not hit}) = \\frac{p_A(1 - p_B)}{p_A + p_B - p_A p_B}$.<br/>(b) Both are hit if and only if both hit on the decisive round: $P(\\text{both hit}) = \\frac{p_A p_B}{p_A + p_B - p_A p_B}$.<br/>(c) The duel ends on round $n$ if both miss for $n-1$ rounds and someone is hit on round $n$: $P(\\text{end on } n) = [(1 - p_A)(1 - p_B)]^{n-1}(p_A + p_B - p_A p_B)$.<br/>(d) The probability the duel ends on round $n$ with A not hit is $[(1 - p_A)(1 - p_B)]^{n-1}p_A(1 - p_B)$. Dividing by $P(\\text{A not hit})$ from (a) gives $[(1 - p_A)(1 - p_B)]^{n-1}(p_A + p_B - p_A p_B)$, which is the exact same distribution as (c).</p> (e) The joint chance of ending on n and both being hit is q^{n−1}p_Ap_B. Divide by p_Ap_B/(1−q), giving q^{n−1}(1−q), again the geometric law in (c). A conditional probability is defined only when its conditioning event has positive probability. The unconditional ending law assumes 1−q>0.",
    "trap": "The round on which the duel terminates is conditionally independent of which termination outcome occurs.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 68(a–e), PDF p. 116."
  },
  {
    "id": "w.prob.3.ross.prob.69",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Posterior probability of identical twins from same-sex data",
    "prompt": "<p>Assuming 64% of twin births are of the same sex, and that 28% of all twin pairs are identical, find the conditional probability that a newborn pair of same-sex twins is identical.</p>",
    "approach": "<p>Apply Bayes formula using $P(SS\\mid I)=1$ and $P(SS)=0.64$.</p>",
    "solution": "<p>Let $I$ be identical twins and $SS$ same sex. We have $P(I) = 0.28, P(SS\\mid I) = 1$, and $P(SS) = 0.64$. By Bayes formula: $P(I\\mid SS) = \\frac{P(SS\\mid I)P(I)}{P(SS)} = \\frac{1\\times 0.28}{0.64} = \\frac{28}{64} = \\frac{7}{16} = 0.4375$ (43.75%).</p>",
    "trap": "Although identical twins are always same sex, less than half of same-sex twins are identical due to the larger fraternal base.",
    "tests": [
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 69, PDF p. 116."
  },
  {
    "id": "w.prob.3.ross.prob.70",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Circuit flow reliability in series-parallel relay networks",
    "prompt": "<p>Relays 1 to 5 close independently with probabilities $p_1, \\ldots, p_5$. Compute the probability that current flows from A to B for: (a) a network with branches (1-2 in series) in parallel with (3-4 in series), followed in series by relay 5; (b) a bridge circuit with relays 1 and 2 leading into relay 3, and relays 4 and 5 exiting to B.</p>",
    "approach": "<p>Use parallel-series reliability formulas for (a) and condition on relay 3 for the bridge circuit in (b).</p>",
    "solution": "<p>(a) Branch 1-2 functions with probability $p_1 p_2$. Branch 3-4 functions with probability $p_3 p_4$. The parallel combination functions with probability $1 - (1 - p_1 p_2)(1 - p_3 p_4)$. Since relay 5 is in series with this parallel unit: $P(\\text{flow}) = [1 - (1 - p_1 p_2)(1 - p_3 p_4)] p_5$.<br/>(b) In the bridge network, condition on relay 3:<br/>- If relay 3 is closed (prob $p_3$): current flows if (1 or 2 closes) AND (4 or 5 closes), with probability $[1 - (1 - p_1)(1 - p_2)][1 - (1 - p_4)(1 - p_5)]$.<br/>- If relay 3 is open (prob $1 - p_3$): current flows if (1-4 closes) OR (2-5 closes), with probability $1 - (1 - p_1 p_4)(1 - p_2 p_5)$.<br/>By total probability: $P(\\text{flow}) = p_3[1 - (1 - p_1)(1 - p_2)][1 - (1 - p_4)(1 - p_5)] + (1 - p_3)[1 - (1 - p_1 p_4)(1 - p_2 p_5)]$.</p>",
    "trap": "Conditioning on the bridging component decomposes complex non-series-parallel networks into simple parallel paths.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 70(a–b), PDF pp. 116–117."
  },
  {
    "id": "w.prob.3.ross.prob.71",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "k-out-of-n system reliability formulas",
    "prompt": "<p>A $k$-out-of-$n$ system functions if and only if at least $k$ of its $n$ independent components function. (a) Find the reliability of a 2-out-of-4 system with component probabilities $P_1, P_2, P_3, P_4$. (b) Find the reliability of a 3-out-of-5 system. (c) Express the reliability when all $P_i = p$.</p>",
    "approach": "<p>Sum over all subsets of working components of size $\\ge k$, using the binomial distribution for identical components.</p>",
    "solution": "<p>(a) For 2-out-of-4: sum the probabilities of all $\\binom{4}{2}=6$ pairs, $\\binom{4}{3}=4$ triples, and all 4 working: $P = \\sum_{i<j} P_i P_j \\prod_{l\\ne i,j}(1 - P_l) + \\sum_i (1 - P_i)\\prod_{l\\ne i} P_l + \\prod_{l=1}^4 P_l$. Alternatively: $1 - \\prod_{i=1}^4 (1 - P_i) - \\sum_{i=1}^4 P_i \\prod_{l\\ne i} (1 - P_l)$.<br/>(b) For 3-out-of-5: sum probabilities of states where $\\ge 3$ components function (10 triples, 5 quadruples, 1 quintuple).<br/>(c) When all $P_i = p$, the number of working components is $\\text{Binomial}(n, p)$. Thus $P(\\ge k \\text{ work}) = \\sum_{i=k}^n \\binom{n}{i} p^i (1 - p)^{n-i}$.</p>",
    "trap": "For non-identical components, expand explicitly over distinct configurations; for identical components, use the binomial sum.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 71(a–c), PDF p. 117."
  },
  {
    "id": "w.prob.3.ross.prob.72",
    "course": "prob",
    "sec": "3.4",
    "marks": 4,
    "title": "Component operation posterior given system current flow",
    "prompt": "<p>In the relay circuit of Problem 70(a) (branches 1-2 and 3-4 in parallel, in series with relay 5), find the conditional probability that relays 1 and 2 are both closed given that current flows from A to B.</p>",
    "approach": "<p>Divide the joint probability of flow and relays 1,2 closed by the total flow probability.</p>",
    "solution": "<p>Let $F$ be the event that current flows and $C_{12}$ the event that relays 1 and 2 are both closed. If relays 1 and 2 are closed, current flows if and only if relay 5 is closed, so $P(C_{12} \\cap F) = P(C_{12} \\cap C_5) = p_1 p_2 p_5$. From Problem 70(a), the total probability of flow is $P(F) = [1 - (1 - p_1 p_2)(1 - p_3 p_4)] p_5$. Dividing: $P(C_{12}\\mid F) = \\frac{p_1 p_2 p_5}{[1 - (1 - p_1 p_2)(1 - p_3 p_4)] p_5} = \\frac{p_1 p_2}{1 - (1 - p_1 p_2)(1 - p_3 p_4)} = \\frac{p_1 p_2}{p_1 p_2 + p_3 p_4 - p_1 p_2 p_3 p_4}$.</p>",
    "trap": "Relay 5 cancels completely because its operation is necessary for ANY current to flow.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 72, PDF p. 117."
  },
  {
    "id": "w.prob.3.ross.prob.73",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Multi-locus phenotypic and genotypic resemblance probabilities",
    "prompt": "<p>Parent 1 has genotype $aA, bB, cC, dD, eE$ and Parent 2 has $aa, bB, cc, Dd, ee$. Dominant alleles are capitalized. Each parent transmits a random allele at each of the 5 independent loci. Find the probability the progeny: (i) phenotypically; (ii) genotypically resembles: (a) parent 1; (b) parent 2.</p>",
    "approach": "<p>Multiply independent per-locus resemblance probabilities for phenotype and genotype.</p>",
    "solution": "<p>Offspring allele distributions at each locus from cross $(aA, aa), (bB, bB), (cC, cc), (dD, Dd), (eE, ee)$:<br/>- Locus A: $Aa$ (1/2, dominant), $aa$ (1/2, recessive).<br/>- Locus B: $BB$ (1/4), $bB$ (1/2), $bb$ (1/4). Dominant: 3/4.<br/>- Locus C: $Cc$ (1/2, dominant), $cc$ (1/2, recessive).<br/>- Locus D: $DD$ (1/4), $dD$ (1/2), $dd$ (1/4). Dominant: 3/4.<br/>- Locus E: $Ee$ (1/2, dominant), $ee$ (1/2, recessive).<br/>Parent 1 phenotype is all dominant ($A, B, C, D, E$):<br/>(a)(i) Phenotype 1: $(1/2)(3/4)(1/2)(3/4)(1/2) = \\frac{9}{128} \\approx 0.0703$.<br/>(a)(ii) Genotype 1 ($aA, bB, cC, dD, eE$): $(1/2)(1/2)(1/2)(1/2)(1/2) = \\frac{1}{32} \\approx 0.03125$.<br/>Parent 2 phenotype is recessive at A, C, E, dominant at B, D ($a, B, c, D, e$):<br/>(b)(i) Phenotype 2: $(1/2)(3/4)(1/2)(3/4)(1/2) = \\frac{9}{128} \\approx 0.0703$.<br/>(b)(ii) Genotype 2 ($aa, bB, cc, Dd, ee$): $(1/2)(1/2)(1/2)(1/2)(1/2) = \\frac{1}{32} \\approx 0.03125$.</p>",
    "trap": "Phenotypic dominance allows multiple genotypes (e.g. $BB$ and $bB$) to produce the dominant trait.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 73(a–b), PDF pp. 117–118."
  },
  {
    "id": "w.prob.3.ross.prob.74",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Hemophilia carrier updating and next offspring risk",
    "prompt": "<p>A queen has a 50% chance of carrying the hemophilia gene ($P(C)=0.50$). If she is a carrier, each prince has a 50% chance of inheriting the disease. The queen has had 3 princes without hemophilia. (a) What is the updated probability she is a carrier? (b) If she has a fourth prince, what is the probability he has hemophilia?</p>",
    "approach": "<p>Use Bayes formula to update carrier probability given 3 healthy sons, then multiply by inheritance risk.</p>",
    "solution": "<p>(a) Let $N_3$ be 3 healthy princes. If carrier: $P(N_3\\mid C) = (1/2)^3 = 1/8$. If non-carrier: $P(N_3\\mid C^c) = 1$. By Bayes formula: $P(C\\mid N_3) = \\frac{(1/8)(1/2)}{(1/8)(1/2) + 1(1/2)} = \\frac{1/8}{1/8 + 1} = \\frac{1}{9} \\approx 0.1111$.<br/>(b) A fourth prince has hemophilia only if the queen is a carrier: $P(H_4\\mid N_3) = P(H_4\\mid C)P(C\\mid N_3) = \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{9}\\right) = \\frac{1}{18} \\approx 0.0556$.</p>",
    "trap": "The fourth son's risk is $1/18$, NOT $1/2$, because the three healthy older brothers provide strong evidence she is not a carrier.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 74, PDF p. 118."
  },
  {
    "id": "w.prob.3.ross.prob.75",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Pivotal voting power in hierarchical legislative bodies",
    "prompt": "<p>A council of 7 has a 3-member steering committee. Legislation advances only if at least 2 committee members approve, and then passes if at least 4 of the 7 council members approve. Each member independently votes yes with probability $p$. Find the probability that a member's vote is decisive (pivotal) for: (a) a steering committee member; (b) a non-committee member.</p>",
    "approach": "<p>Identify the voting states of the other 6 members where the member's vote uniquely determines passage.</p>",
    "solution": "Write q=1−p. (a) Hold the other six votes fixed and compare this committee member voting yes and no. If exactly one of the other two committee members says yes (chance 2pq), a yes vote advances the bill and supplies two council yeses, so at least two outsiders must say yes. Their chance is 6p²q²+4p³q+p⁴. If both other committee members say yes (chance p²), the committee advances either way; the member is pivotal exactly when one of the four outsiders says yes, chance 4pq³. Hence P(pivotal committee)=2pq(6p²q²+4p³q+p⁴)+4p³q³. (b) An outsider is pivotal when the other six give exactly three yeses and the committee approves. Either all three committee members say yes and all three other outsiders say no, or exactly two committee members and exactly one other outsider say yes. The total is p³q³+(3p²q)(3pq²)=10p³q³. These events depend on the other votes; the member’s own random vote need not be included.",
    "trap": "A committee member can be decisive either at the committee gate or at the full council floor.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 75, PDF p. 118."
  },
  {
    "id": "w.prob.3.ross.prob.76",
    "course": "prob",
    "sec": "3.4",
    "marks": 4,
    "title": "Five-child family gender configuration probabilities",
    "prompt": "<p>Each child is independently a boy or girl with probability $1/2$. For a family with 5 children, find the probabilities that: (a) all children are of the same sex; (b) the 3 eldest are boys and the others girls; (c) exactly 3 are boys; (d) the 2 oldest are girls; (e) there is at least 1 girl.</p>",
    "approach": "<p>Use independent product rules and binomial distributions with $n=5$ and $p=1/2$.</p>",
    "solution": "<p>Total equally likely gender sequences: $2^5 = 32$.<br/>(a) All same sex ($BBBBB$ or $GGGGG$): $\\frac{2}{32} = \\frac{1}{16} = 0.0625$.<br/>(b) Specific sequence $BBBGG$: $(1/2)^5 = \\frac{1}{32} = 0.03125$.<br/>(c) Exactly 3 boys: $\\binom{5}{3}(1/2)^5 = \\frac{10}{32} = \\frac{5}{16} = 0.3125$.<br/>(d) The 2 oldest are girls: $(1/2)^2 = \\frac{1}{4} = 0.25$.<br/>(e) At least 1 girl (complement of all boys): $1 - (1/2)^5 = 1 - \\frac{1}{32} = \\frac{31}{32} = 0.96875$.</p>",
    "trap": "In (d), the genders of the 3 youngest children do not affect the condition on the 2 oldest.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 76(a–e), PDF p. 118."
  },
  {
    "id": "w.prob.3.ross.prob.77",
    "course": "prob",
    "sec": "3.4",
    "marks": 4,
    "title": "Alternating dice game termination attribution",
    "prompt": "<p>A and B alternate rolling a pair of fair dice, with A rolling first. A wins if they roll a sum of 9; B wins if they roll a sum of 6. Find the probability that A makes the final roll (A wins).</p>",
    "approach": "<p>Determine per-turn win probabilities and sum the infinite geometric series.</p>",
    "solution": "<p>The per-roll success probabilities are:<br/>- A rolls sum 9: outcomes $(3,6),(4,5),(5,4),(6,3)$ (4 pairs), so $p_A = 4/36 = 1/9$, failure $q_A = 8/9$.<br/>- B rolls sum 6: outcomes $(1,5),(2,4),(3,3),(4,2),(5,1)$ (5 pairs), so $p_B = 5/36$, failure $q_B = 31/36$.<br/>A wins on round 1 with prob $p_A$; on round 2 with prob $q_A q_B p_A$; and generally on round $k$ with prob $(q_A q_B)^{k-1}p_A$.<br/>Summing the geometric series: $P(\\text{A wins}) = \\frac{p_A}{1 - q_A q_B} = \\frac{1/9}{1 - (8/9)(31/36)} = \\frac{1/9}{1 - 248/324} = \\frac{1/9}{76/324} = \\frac{36}{76} = \\frac{9}{19} \\approx 0.4737$.</p>",
    "trap": "A has fewer winning rolls (4 vs 5) but shoots first; the first-mover advantage brings A to 47.37%.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 77, PDF p. 118."
  },
  {
    "id": "w.prob.3.ross.prob.78",
    "course": "prob",
    "sec": "3.4",
    "marks": 4,
    "title": "Proportion of eldest sons in village family cohorts",
    "prompt": "<p>Assuming each child is independently equally likely to be a boy or girl: (a) If every family has 2 children, what proportion of all sons are eldest sons? (b) If every family has 3 children, what proportion of all sons are eldest sons?</p>",
    "approach": "<p>Count total sons and total eldest sons across all equally likely family birth-order configurations.</p>",
    "solution": "<p>(a) In 2-child families, the 4 equiprobable types are $BB, BG, GB, GG$.<br/>- $BB$: 2 sons, 1 eldest son.<br/>- $BG$: 1 son, 1 eldest son.<br/>- $GB$: 1 son, 0 eldest sons (the son is the younger child).<br/>- $GG$: 0 sons.<br/>Total sons = $2 + 1 + 1 + 0 = 4$. Total eldest sons = $1 + 1 + 0 + 0 = 2$. Proportion = $2/4 = 1/2 = 0.50$.<br/>(b) In 3-child families, there are 8 equiprobable types with total sons $3\\times 8 / 2 = 12$. Exactly 7 of the 8 types have at least one son (all except $GGG$), and each family with at least one son has exactly ONE eldest son. Thus there are 7 eldest sons among the 12 total sons. Proportion = $7/12 \\approx 0.5833$.</p>",
    "trap": "Every family with at least one boy contributes exactly ONE eldest son, regardless of how many boys they have.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 78(a–b), PDF p. 118."
  },
  {
    "id": "w.prob.3.ross.prob.79",
    "course": "prob",
    "sec": "3.4",
    "marks": 3,
    "title": "First occurrence race between mutually exclusive events",
    "prompt": "<p>Let $E$ and $F$ be mutually exclusive events in an experiment with $P(E\\cup F) > 0$. Prove that in independent repetitions of the experiment, $E$ occurs before $F$ with probability $\\frac{P(E)}{P(E) + P(F)}$.</p>",
    "approach": "<p>Condition on the first trial that results in either $E$ or $F$.</p>",
    "solution": "<p>Let $A$ be the event that $E$ occurs before $F$. Condition on the outcome of the first trial: it can result in $E$ (probability $P(E)$), in $F$ (probability $P(F)$), or in neither $E$ nor $F$ (probability $1 - P(E) - P(F)$).<br/>- If $E$ occurs first, $E$ occurred before $F$: $P(A\\mid E) = 1$.<br/>- If $F$ occurs first, $E$ did not occur before $F$: $P(A\\mid F) = 0$.<br/>- If neither occurs, by independence of trials the game restarts identically: $P(A\\mid (E\\cup F)^c) = P(A)$.<br/>By total probability: $P(A) = 1\\cdot P(E) + 0\\cdot P(F) + P(A)[1 - P(E) - P(F)]$.<br/>Rearranging: $P(A)[P(E) + P(F)] = P(E) \\implies P(A) = \\frac{P(E)}{P(E) + P(F)}$.</p>",
    "trap": "Trials resulting in $(E\\cup F)^c$ are completely neutral and do not affect the relative likelihood of $E$ versus $F$.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 79, PDF p. 118."
  },
  {
    "id": "w.prob.3.ross.prob.80",
    "course": "prob",
    "sec": "3.4",
    "marks": 4,
    "title": "Initial outcomes given specified final outcome in a coupon trial",
    "prompt": "<p>Trials result in outcomes 1, 2, or 3 with equal probability $1/3$. Given that outcome 3 is the LAST of the three outcomes to appear, find the conditional probability that: (a) the first trial results in outcome 1; (b) the first two trials both result in outcome 1.</p>",
    "approach": "<p>Condition on outcome 3 being the last to occur and use symmetry between outcomes 1 and 2.</p>",
    "solution": "<p>Let $L_3$ be the event that outcome 3 occurs last among $\\{1, 2, 3\\}$. By symmetry, each of the 3 outcomes is equally likely to be the last to appear, so $P(L_3) = 1/3$.<br/>(a) Given $L_3$, outcomes 1 and 2 both appear before 3. By symmetry between outcomes 1 and 2, the one that appears first is equally likely to be 1 or 2. Thus $P(\\text{first trial is 1}\\mid L_3) = \\frac{1}{2}$.<br/>(b) For the first two trials to both be 1 and $L_3$ to hold: trials 1 and 2 must both be 1 (probability $(1/3)^2 = 1/9$). From trial 3 onwards, outcome 2 must appear before outcome 3. By Problem 79, $P(2 \\text{ before } 3) = \\frac{1/3}{1/3 + 1/3} = 1/2$. Thus the joint probability is $\\left(\\frac{1}{9}\\right)\\left(\\frac{1}{2}\\right) = \\frac{1}{18}$. Dividing by $P(L_3) = 1/3$ gives $P(\\text{first two are 1}\\mid L_3) = \\frac{1/18}{1/3} = \\frac{3}{18} = \\frac{1}{6}$.</p>",
    "trap": "In (b), trials 1 and 2 must specifically be outcome 1, followed by 2 beating 3 from step 3 onward.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 80(a–b), PDF p. 118."
  },
  {
    "id": "w.prob.3.ross.prob.81",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Two-game lead stopping rule series analysis",
    "prompt": "<p>A and B play games independently won by A with probability $p$ and by B with probability $1-p$. Play stops when one player leads by 2 games. (a) Find the probability that exactly 4 games are played. (b) Find the probability that A wins the series.</p>",
    "approach": "<p>Analyze the 2-game Markov transitions where score differences reset on ties.</p>",
    "solution": "<p>Because stopping requires a lead of 2, the number of games played must be an even integer $2k$. In any pair of games, the outcomes are: A wins both (prob $p^2$, A wins series); B wins both (prob $(1-p)^2$, B wins series); split 1-1 (prob $2p(1-p)$, net score returns to 0).<br/>(a) Exactly 4 games are played if the first 2 games are split (prob $2p(1-p)$) and the next 2 games are decisive (prob $p^2 + (1-p)^2$): $P(\\text{4 games}) = 2p(1-p)[p^2 + (1-p)^2]$.<br/>(b) The series is a race where each 2-game block either ends with an A win ($p^2$), a B win ($(1-p)^2$), or a restart. By Problem 79, the probability A wins the series is $P(\\text{A wins}) = \\frac{p^2}{p^2 + (1-p)^2}$.</p>",
    "trap": "Games can only end on even trials $2, 4, 6, \\ldots$; split rounds reset the contest completely.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 81(a–b), PDF p. 118."
  },
  {
    "id": "w.prob.3.ross.prob.82",
    "course": "prob",
    "sec": "3.4",
    "marks": 4,
    "title": "Two sevens before six even numbers in dice rolling",
    "prompt": "<p>In successive rolls of a pair of fair dice, what is the probability of rolling 2 sevens before rolling 6 even numbers?</p>",
    "approach": "<p>Reduce the sample space to decisive outcomes (sum 7 vs even sum) and apply Fermat's binomial formula.</p>",
    "solution": "<p>On each roll of 2 fair dice: $P(\\text{sum is 7}) = 6/36 = 1/6$. Even sums are $2, 4, 6, 8, 10, 12$ with counts $1 + 3 + 5 + 5 + 3 + 1 = 18$, so $P(\\text{even sum}) = 18/36 = 1/2$. Rolls with odd non-7 sums ($3, 5, 9, 11$, prob $12/36=1/3$) are neutral.<br/>Conditioning on a decisive roll: $p = P(7\\mid 7 \\cup \\text{even}) = \\frac{1/6}{1/6 + 1/2} = \\frac{1}{4}$, and $q = 1 - p = \\frac{3}{4}$.<br/>The problem is equivalent to 2 successes before 6 failures in Bernoulli trials with $p=1/4$. By Fermat's formula (Example 4j), this requires at least 2 successes in the first $2 + 6 - 1 = 7$ decisive trials: $P = \\sum_{k=2}^7 \\binom{7}{k}\\left(\\frac{1}{4}\\right)^k\\left(\\frac{3}{4}\\right)^{7-k} = 1 - \\binom{7}{0}\\left(\\frac{3}{4}\\right)^7 - \\binom{7}{1}\\left(\\frac{1}{4}\\right)\\left(\\frac{3}{4}\\right)^6 = 1 - \\frac{2,187}{16,384} - \\frac{7\\times 729}{16,384} = 1 - \\frac{2,187 + 5,103}{16,384} = 1 - \\frac{7,290}{16,384} = \\frac{9,094}{16,384} = \\frac{4,547}{8,192} \\approx 0.55505$.</p>",
    "trap": "Ignore non-7 odd sums; restricting to the decisive outcomes makes the per-trial success rate $1/4$.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 82, PDF p. 118."
  },
  {
    "id": "w.prob.3.ross.prob.83",
    "course": "prob",
    "sec": "3.4",
    "marks": 6,
    "title": "Pair meeting probability in a balanced knockout tournament",
    "prompt": "There are 2^n equally skilled players, randomly paired anew in every round. A_i means designated player A plays exactly i games; E means designated players A and B never meet. (a) Find P(A_i). (b) Find P(E). (c) Give a recurrence for P_n=P(E) and check the result. (d) Explain why 2^n−1 games are played. (e) If B_j means A and B meet in numbered game j, find P(B_j). (f) Use (e) to find P(E) again.",
    "approach": "<p>Use elimination counting: each match eliminates 1 player, and each pair is equally likely to be the participants of any match.</p>",
    "solution": "(a) For i<n, A must win i−1 times then lose, so P(A_i)=2^{−i}; P(A_n)=2^{−(n−1)}, since reaching the final guarantees n games. (b) Given A plays exactly i games, symmetry makes each of the other 2^n−1 named players equally likely to occupy each of A’s i opponent positions. A never plays an opponent twice, so P(meet B|A_i)=i/(2^n−1). Also E[number of A’s games]=∑_{r=1}^nP(A reaches round r)=∑_{r=1}^n2^{−(r−1)}=2−2^{1−n}. Averaging gives P(meet B)=(2−2^{1−n})/(2^n−1)=2^{1−n}, hence P(E)=1−2^{1−n}. (c) P_1=0. In the first round A and B avoid pairing with chance (2^n−2)/(2^n−1). Given this, they both survive with chance 1/4; if at least one loses (chance 3/4), they can never meet. Thus P_n=(2^n−2)/(2^n−1)[3/4+P_{n−1}/4]. Substitute P_{n−1}=1−2^{2−n} to obtain P_n=1−2^{1−n}, checking (b). (d) Every game eliminates one player, leaving one champion, so there are 2^n−1 games. (e) Label games by a rule independent of player names. Equal skill and random pairing make every unordered pair equally likely in any fixed game: P(B_j)=1/C(2^n,2). (f) A and B can meet at most once, so the B_j are disjoint. Their sum gives P(meet)=(2^n−1)/C(2^n,2)=2^{1−n}, and its complement gives (b).",
    "trap": "The pairing symmetry across all $2^n - 1$ matches gives a clean one-line proof avoiding complex bracket casework.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 83(a–f), PDF pp. 118–119."
  },
  {
    "id": "w.prob.3.ross.prob.84",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Gambler ruin formula applied to stock price targets",
    "prompt": "<p>An investor holds stock currently priced at 25 and will sell if it drops to 10 or rises to 40. Daily price steps are independent: $+1$ with probability 0.55 and $-1$ with probability 0.45. What is the probability the investor exits at 40 (retires a winner)?</p>",
    "approach": "<p>Shift the origin to 10 and apply the classic Gambler's Ruin formula with $p=0.55, q=0.45$.</p>",
    "solution": "<p>Let the wealth be $X_n$. The process starts at $X_0 = 25$ and absorbs at 10 or 40. Shift by 10 so that $i = 25 - 10 = 15$ and the target absorption barrier is $N = 40 - 10 = 30$.<br/>The ratio of down to up probabilities is $\\frac{q}{p} = \\frac{0.45}{0.55} = \\frac{9}{11}$.<br/>By the gambler's ruin formula: $P(\\text{reaches } 40 \\text{ before } 10) = \\frac{1 - (q/p)^i}{1 - (q/p)^N} = \\frac{1 - (9/11)^{15}}{1 - (9/11)^{30}} = \\frac{1}{1 + (9/11)^{15}}$.<br/>Computing $(9/11)^{15} = (0.81818)^{15} \\approx 0.04988$.<br/>Therefore, $P = \\frac{1}{1 + 0.04988} = \\frac{1}{1.04988} \\approx 0.95249$ (95.25%).</p>",
    "trap": "The difference $1 - x^{15}$ factors from $1 - x^{30} = (1 - x^{15})(1 + x^{15})$, simplifying the fraction to $\\frac{1}{1 + (q/p)^{15}}$.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 84, PDF p. 119."
  },
  {
    "id": "w.prob.3.ross.prob.85",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Turn-based coin tossing head streak competitions",
    "prompt": "A starts flipping with head probability p_1 until a tail, then B flips with head probability p_2 until a tail, and turns alternate. Find A’s winning chance for (a) two consecutive heads, (b) two heads in total, (c) three consecutive heads, (d) three heads in total. All flips are independent.",
    "approach": "<p>Condition on the number of heads accumulated during the player's first turn.</p>",
    "solution": "For (a) and (c), on a turn the chance of getting k consecutive heads before a tail is p_1^k for A and p_2^k for B. A either wins now or both fail and restart, so its chance is p_1^k/[p_1^k+p_2^k−p_1^kp_2^k]. Use k=2 for (a), k=3 for (c). For total heads, let A_{r,s} and B_{r,s} be A’s winning chance when A needs r heads, B needs s heads, and the next flip belongs to A or B respectively. First-flip conditioning gives A_{r,s}=p_1A_{r−1,s}+(1−p_1)B_{r,s} and B_{r,s}=p_2B_{r,s−1}+(1−p_2)A_{r,s}. Set d=p_1+p_2−p_1p_2, x=p_1/d, y=p_2/d, z=p_1p_2/d. Eliminating B gives A_{r,s}=xA_{r−1,s}+yA_{r,s−1}−zA_{r−1,s−1}, with A_{0,s}=1 for s>0 and A_{r,0}=0 for r>0. At (1,1), A_{1,1}=x by direct conditioning. Successive substitution gives A_{1,2}=x(1+y)−z, A_{2,1}=x², and (b) A_{2,2}=x²(1+2y)−2xz. Continuing gives A_{2,3}=x²(1+2y+3y²)−2xz(1+2y)+z², A_{3,2}=x³(1+3y)−3x²z, and (d) A_{3,3}=x³(1+3y+6y²)−3x²z(1+3y)+3xz². These are explicit rational formulas in the two head probabilities. They require d>0. If both head chances are zero nobody wins; if just one is positive that player wins almost surely.",
    "trap": "In (a), consecutive heads require both flips to occur in the same streak before a tail.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 85(a–d), PDF p. 119."
  },
  {
    "id": "w.prob.3.ross.prob.86",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Die selection inference from repeated color outcomes",
    "prompt": "<p>Die A has 4 red and 2 white faces ($P(R\\mid A)=2/3$); Die B has 2 red and 4 white faces ($P(R\\mid B)=1/3$). A fair coin flips to choose Die A or B, which is then rolled repeatedly. (a) Find $P(\\text{Red on any roll})$. (b) If the first 2 rolls are red, what is $P(\\text{Red on roll 3})$? (c) If the first 2 rolls are red, what is $P(\\text{Die A was chosen})$?</p>",
    "approach": "<p>Use total probability for (a), Bayes formula for (c), and conditional total probability for (b).</p>",
    "solution": "<p>(a) $P(R) = (2/3)(1/2) + (1/3)(1/2) = 1/2$.<br/>(c) Let $R_1 R_2$ be two reds. $P(R_1 R_2\\mid A) = (2/3)^2 = 4/9$ and $P(R_1 R_2\\mid B) = (1/3)^2 = 1/9$. By Bayes formula: $P(A\\mid R_1 R_2) = \\frac{(4/9)(1/2)}{(4/9)(1/2) + (1/9)(1/2)} = \\frac{4}{4 + 1} = \\frac{4}{5} = 0.80$.<br/>(b) By conditional total probability: $P(R_3\\mid R_1 R_2) = P(R_3\\mid A)P(A\\mid R_1 R_2) + P(R_3\\mid B)P(B\\mid R_1 R_2) = \\left(\\frac{2}{3}\\right)\\left(\\frac{4}{5}\\right) + \\left(\\frac{1}{3}\\right)\\left(\\frac{1}{5}\\right) = \\frac{8 + 1}{15} = \\frac{9}{15} = \\frac{3}{5} = 0.60$.</p>",
    "trap": "Rolls are conditionally independent given the die, but unconditionally dependent: observing red rolls raises Die A's probability to 80%.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 86(a–c), PDF p. 119."
  },
  {
    "id": "w.prob.3.ross.prob.87",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Three-player white ball extraction contest",
    "prompt": "<p>An urn contains 4 white and 8 black balls (12 balls). Players A, B, C draw in order A, B, C, A, B, C... First to draw a white ball wins. Find the win probability for each player if: (a) draws are with replacement; (b) draws are without replacement.</p>",
    "approach": "<p>Use geometric series for (a) and finite sequential probabilities for (b).</p>",
    "solution": "<p>(a) With replacement: $p = 4/12 = 1/3, q = 2/3$.<br/>- A wins on turn $1, 4, 7, \\ldots$: $P(A) = \\frac{p}{1 - q^3} = \\frac{1/3}{1 - 8/27} = \\frac{1/3}{19/27} = \\frac{9}{19} \\approx 0.4737$.<br/>- B wins on turn $2, 5, 8, \\ldots$: $P(B) = q P(A) = \\left(\\frac{2}{3}\\right)\\left(\\frac{9}{19}\\right) = \\frac{6}{19} \\approx 0.3158$.<br/>- C wins on turn $3, 6, 9, \\ldots$: $P(C) = q^2 P(A) = \\left(\\frac{4}{9}\\right)\\left(\\frac{9}{19}\\right) = \\frac{4}{19} \\approx 0.2105$.<br/>(b) Without replacement: total 8 black balls, so game must end by turn 9.<br/>- A draws on turns 1, 4, 7: $P(A) = \\frac{4}{12} + \\left(\\frac{8\\times 7\\times 6}{12\\times 11\\times 10}\\right)\\frac{4}{9} + \\left(\\frac{8\\times 7\\times 6\\times 5\\times 4\\times 3}{12\\times 11\\times 10\\times 9\\times 8\\times 7}\\right)\\frac{4}{6} = \\frac{1}{3} + \\frac{56}{330}\\frac{4}{9} + \\frac{1}{66}\\frac{2}{3} = \\frac{1}{3} + \\frac{112}{1485} + \\frac{1}{99} = \\frac{165 + 37.33 + 5}{495} = \\frac{231}{495} = \\frac{7}{15} \\approx 0.4667$.<br/>- Similarly $P(B) = \\frac{53}{165} \\approx 0.3212$ and $P(C) = \\frac{7}{33} \\approx 0.2121$.</p>",
    "trap": "Without replacement terminates in at most 9 turns because only 8 black balls exist.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 87(a–b), PDF p. 119."
  },
  {
    "id": "w.prob.3.ross.prob.88",
    "course": "prob",
    "sec": "3.4",
    "marks": 4,
    "title": "Three players drawing without replacement from separate urns",
    "prompt": "Three players A,B,C take turns in that order, each drawing from their own separate urn with 4 white and 8 black balls. The first white wins. Find each winning chance (a) with replacement, (b) without replacement.",
    "approach": "<p>Compute sequential round probabilities where each player samples from their own urn.</p>",
    "solution": "(a) Each independent draw has white chance 1/3 and black chance 2/3. A wins in round k with probability (8/27)^{k−1}/3. B and C add factors 2/3 and (2/3)². Geometric sums give P(A)=9/19, P(B)=6/19, P(C)=4/19. (b) Define s_k=C(8,k)/C(12,k) for 0≤k≤8 and s_9=0. This is a player’s chance of k initial blacks. Its first-white-on-draw-k chance is w_k=s_{k−1}·4/(13−k), 1≤k≤9. For A to win in round k, B and C must each have k−1 blacks, giving P(A)=∑_{k=1}^9w_ks_{k−1}²=6476548/13476375≈.480585321. B’s turn requires A to have k blacks and C to have k−1, giving P(B)=∑w_ks_ks_{k−1}=6994/22275≈.313984287. C’s turn requires both others to have k blacks, giving P(C)=∑w_ks_k²=922819/4492125≈.205430392. The three chances sum exactly to 1.",
    "trap": "Each player depletes only their own urn, so draws across players are statistically independent.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 88, PDF p. 119."
  },
  {
    "id": "w.prob.3.ross.prob.89",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Random subset containment and disjointness probabilities",
    "prompt": "<p>Let $S=\\{1, 2, \\ldots, n\\}$. Subsets $A$ and $B$ are chosen independently and uniformly at random from all $2^n$ subsets of $S$. Show that: (a) $P(A\\subseteq B) = (3/4)^n$; (b) $P(A\\cap B = \\varnothing) = (3/4)^n$.</p>",
    "approach": "<p>Examine element-wise membership choices across the four possible membership pairs for each element.</p>",
    "solution": "<p>(a) For each element $x\\in S$, there are 4 equally likely joint membership outcomes in $(A, B)$:<br/>1. $x\\in A, x\\in B$<br/>2. $x\\notin A, x\\in B$<br/>3. $x\\notin A, x\\notin B$<br/>4. $x\\in A, x\\notin B$<br/>The condition $A\\subseteq B$ means that no element has $x\\in A$ and $x\\notin B$ (outcome 4 is forbidden). Thus, for each element $x$, exactly 3 of the 4 outcomes satisfy containment. By independent selection for each of the $n$ elements, $P(A\\subseteq B) = \\prod_{x=1}^n \\frac{3}{4} = \\left(\\frac{3}{4}\\right)^n$.<br/>(b) Similarly, $A\\cap B = \\varnothing$ means that no element has $x\\in A$ and $x\\in B$ (outcome 1 is forbidden). Exactly 3 of the 4 membership states satisfy disjointness for each element. Thus $P(A\\cap B = \\varnothing) = \\left(\\frac{3}{4}\\right)^n$.</p>",
    "trap": "By bijection between $B$ and $B^c$, $A\\subseteq B \\iff A\\cap B^c = \\varnothing$, proving the probabilities must be identical.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 89(a–b), PDF pp. 119–120."
  },
  {
    "id": "w.prob.3.ross.prob.90",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Tournament bracket tree winning probability",
    "prompt": "In the eight-team bracket, quarterfinals are (1,8),(4,5),(3,6),(2,7); the winners of the first two meet, and the winners of the last two meet, before the final. Team i beats j with chance j/(i+j), independently of other game results. Find team 1’s title chance.",
    "approach": "<p>Condition on the opponents encountered by team 1 in the quarterfinals, semifinals, and championship match.</p>",
    "solution": "Team 1 beats 8 with chance 8/9. Its semifinal opponent is 4 with chance 5/9 or 5 with chance 4/9. Thus its semifinal success chance is (5/9)(4/5)+(4/9)(5/6)=22/27. In the lower half, the title-finalist probabilities are w_3=(6/9)[(7/9)(2/5)+(2/9)(7/10)]=14/45; w_6=(3/9)[(7/9)(2/8)+(2/9)(7/13)]=49/468; w_2=(7/9)[(6/9)(3/5)+(3/9)(6/8)]=91/180; w_7=(2/9)[(6/9)(3/10)+(3/9)(6/13)]=46/585. They sum to 1. Team 1’s conditional final success chance is ∑_{j∈{2,3,6,7}}w_j j/(1+j)=5117/7020. Multiply the three round factors: (8/9)(22/27)(5117/7020)=225148/426465≈.527940159.",
    "trap": "The opponent in later rounds is random; average over the opponent distribution weighted by their qualification probabilities.",
    "tests": [
      "c.prob.3.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 90, PDF p. 120."
  },
  {
    "id": "w.prob.3.ross.prob.91",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Pocket search updating with imperfect detection",
    "prompt": "<p>In Example 2a, $P(L)=0.4, P(R)=0.4$. Suppose now that searching a pocket containing the key has a 10% chance of overlooking it ($P(U\\mid \\text{here})=0.10$). Let $U_L$ be an unsuccessful search of the left pocket and $S_R$ a successful search of the right pocket. Find $P(S_R\\mid U_L)$.</p> Give (a) the joint-probability-over-condition approach and (b) conditional total probability.",
    "approach": "<p>Condition on key location to compute $P(U_L)$ and $P(S_R U_L)$, then divide.</p>",
    "solution": "<p>Let $L, R, N$ be key in left, right, neither pocket ($P(L)=0.4, P(R)=0.4, P(N)=0.2$).<br/>- $P(U_L\\mid L) = 0.10$, $P(U_L\\mid R) = 1$, $P(U_L\\mid N) = 1$.<br/>$P(U_L) = (0.10)(0.40) + 1(0.40) + 1(0.20) = 0.04 + 0.40 + 0.20 = 0.64$.<br/>Now consider $S_R \\cap U_L$: a successful search of the right pocket can only occur if the key is in the right pocket ($R$), in which case the left search was necessarily unsuccessful ($P(U_L\\mid R) = 1$) and the right search succeeds with probability $1 - 0.10 = 0.90$.<br/>Thus $P(S_R U_L) = P(S_R U_L\\mid R)P(R) = (0.90\\times 1)(0.40) = 0.36$.<br/>Therefore: $P(S_R\\mid U_L) = \\frac{P(S_R U_L)}{P(U_L)} = \\frac{0.36}{0.64} = \\frac{9}{16} = 0.5625$.</p> (b) Bayes gives P(R|U_L)=.4/.64=5/8. Given the key is in R, the right search succeeds with chance .9; otherwise it cannot succeed. Conditional total probability gives .9(5/8)+0·(3/8)=9/16, confirming (a).",
    "trap": "$S_R$ implies the key is in the right pocket, so $S_R U_L = S_R \\cap R$.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 91(a–b), PDF p. 121."
  },
  {
    "id": "w.prob.3.ross.prob.92",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Coin bias posterior in Laplace succession model",
    "prompt": "<p>In the box of $k+1$ coins with head probabilities $i/k$ ($i=0, 1, \\ldots, k$), find the exact conditional probability that coin $i$ was selected given that the first $n$ flips all resulted in heads.</p>",
    "approach": "<p>Apply Bayes formula with prior $1/(k+1)$ and likelihood $(i/k)^n$.</p>",
    "solution": "<p>Let $C_i$ be the choice of coin $i$ ($P(C_i) = \\frac{1}{k+1}$ for $i=0..k$), and $H_n$ the event of $n$ consecutive heads. The likelihood is $P(H_n\\mid C_i) = (i/k)^n$. By Bayes formula: $P(C_i\\mid H_n) = \\frac{P(H_n\\mid C_i)P(C_i)}{\\sum_{j=0}^k P(H_n\\mid C_j)P(C_j)} = \\frac{(i/k)^n \\frac{1}{k+1}}{\\frac{1}{k+1}\\sum_{j=0}^k (j/k)^n} = \\frac{i^n}{\\sum_{j=0}^k j^n}$.</p>",
    "trap": "The common factors $1/(k+1)$ and $(1/k)^n$ cancel, leaving the clean ratio of powers $i^n / \\sum_{j=0}^k j^n$.",
    "tests": [
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 92, PDF p. 121."
  },
  {
    "id": "w.prob.3.ross.prob.93",
    "course": "prob",
    "sec": "3.4",
    "marks": 3,
    "title": "Non-independence of successive trials in Laplace succession",
    "prompt": "<p>In Laplace's rule of succession, are the outcomes of successive flips independent? Explain mathematically and conceptually.</p>",
    "approach": "<p>Compare the conditional probability $P(H_2\\mid H_1)$ with the marginal probability $P(H_1)$.</p>",
    "solution": "<p>No, the successive flips are DEPENDENT. For example, with $n=1$, $P(H_1) = \\frac{1}{k+1}\\sum_{i=0}^k \\frac{i}{k} = \\frac{1}{2}$. By Laplace's rule of succession, $P(H_2\\mid H_1) = \\frac{1+1}{1+2} = \\frac{2}{3}$ (for large $k$). Because $P(H_2\\mid H_1) = 2/3 \\ne 1/2 = P(H_2)$, the flips are dependent. Conceptually, observing heads on earlier flips provides evidence that the chosen coin has a higher heads probability ($i/k$), which increases the probability of heads on subsequent flips.</p>",
    "trap": "The flips are conditionally independent given the coin, but unconditionally dependent across trials.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 93, PDF p. 121."
  },
  {
    "id": "w.prob.3.ross.prob.94",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Judicial panel voting conditional probabilities and independence",
    "prompt": "<p>A defendant is guilty with probability 0.70. Judges vote guilty independently with probability 0.70 if guilty and 0.20 if innocent. Find the conditional probability judge 3 votes guilty given: (a) judges 1 and 2 vote guilty; (b) judge 1 votes guilty and judge 2 innocent; (c) judges 1 and 2 vote innocent. Are the judges' votes independent? Conditionally independent?</p>",
    "approach": "<p>Update guilt posterior given judges 1 and 2, then compute judge 3's expected vote.</p>",
    "solution": "<p>Let $G$ be guilt ($P(G)=0.70, P(G^c)=0.30$) and $V_i$ be judge $i$ voting guilty.<br/>(a) Given $V_1 V_2$: $P(V_1 V_2\\mid G) = (0.7)^2 = 0.49, P(V_1 V_2\\mid G^c) = (0.2)^2 = 0.04$. $P(G\\mid V_1 V_2) = \\frac{(0.49)(0.7)}{(0.49)(0.7) + (0.04)(0.3)} = \\frac{0.343}{0.343 + 0.012} = \\frac{343}{355} \\approx 0.9662$. Thus $P(V_3\\mid V_1 V_2) = (0.7)(0.9662) + (0.2)(0.0338) \\approx 0.683$.<br/>(b) Given $V_1 V_2^c$: $P(V_1 V_2^c\\mid G) = (0.7)(0.3) = 0.21, P(V_1 V_2^c\\mid G^c) = (0.2)(0.8) = 0.16$. $P(G\\mid V_1 V_2^c) = \\frac{(0.21)(0.7)}{(0.21)(0.7) + (0.16)(0.3)} = \\frac{0.147}{0.147 + 0.048} = \\frac{147}{195} \\approx 0.7538$. Thus $P(V_3\\mid V_1 V_2^c) = (0.7)(0.7538) + (0.2)(0.2462) \\approx 0.577$.<br/>(c) Given $V_1^c V_2^c$: $P(G\\mid V_1^c V_2^c) = \\frac{(0.3)^2(0.7)}{(0.3)^2(0.7) + (0.8)^2(0.3)} = \\frac{0.063}{0.063 + 0.192} = \\frac{63}{255} \\approx 0.2471$. Thus $P(V_3\\mid V_1^c V_2^c) = (0.7)(0.2471) + (0.2)(0.7529) \\approx 0.324$.<br/>Independence: The votes are conditionally independent given guilt, but NOT independent unconditionally because earlier votes alter the belief about the defendant's guilt.</p>",
    "trap": "The judges are conditionally independent given guilt, but unconditionally dependent.",
    "tests": [
      "c.prob.3.5.1",
      "c.prob.3.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 94(a–c), PDF p. 121."
  },
  {
    "id": "w.prob.3.ross.prob.95",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Symmetric worker job dispatch assignment probability",
    "prompt": "<p>Each of $n$ workers is independently qualified for a job with probability $p$. If none are qualified, the job is rejected. Otherwise, it is assigned randomly to one of the qualified workers. Find the probability that Worker 1 is assigned the job.</p>",
    "approach": "<p>Use symmetry among all $n$ workers and condition on whether at least one worker is qualified.</p>",
    "solution": "<p>By symmetry, every one of the $n$ workers has the exact same probability of being assigned the job. Let $A_i$ be the event worker $i$ is assigned the job. Since at most one worker is assigned the job, the events $A_1, \\ldots, A_n$ are mutually exclusive, and their union is the event that the job is assigned (not rejected). The job is assigned if and only if at least one worker is qualified, which occurs with probability $1 - (1 - p)^n$. Because all $n$ workers are equally likely to receive the job: $\\sum_{i=1}^n P(A_i) = n P(A_1) = 1 - (1 - p)^n$. Therefore: $P(A_1) = \\frac{1 - (1 - p)^n}{n}$.</p>",
    "trap": "Do not perform an elaborate binomial summation; symmetry gives the answer instantly.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.3.1"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 95, PDF p. 121."
  },
  {
    "id": "w.prob.3.ross.prob.96",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Asymmetric two-worker qualification and assignment posteriors",
    "prompt": "<p>In a 2-worker pool, Worker 1 is qualified with probability $p_1$ and Worker 2 with probability $p_2$. If both qualify, each is chosen with probability $1/2$. (a) Find the probability Worker 1 is assigned the job. (b) Given Worker 1 is assigned, find the conditional probability Worker 2 was also qualified.</p>",
    "approach": "<p>Partition on the qualification states of both workers.</p>",
    "solution": "<p>(a) Worker 1 is assigned if Worker 1 is solely qualified ($p_1(1-p_2)$) or both qualify and Worker 1 is chosen ($(1/2)p_1 p_2$): $P(A_1) = p_1(1 - p_2) + \\frac{1}{2}p_1 p_2 = p_1\\left(1 - \\frac{p_2}{2}\\right)$.<br/>(b) Given Worker 1 is assigned, both were qualified if and only if the second case occurred: $P(Q_2\\mid A_1) = \\frac{(1/2)p_1 p_2}{p_1(1 - p_2/2)} = \\frac{p_2/2}{1 - p_2/2} = \\frac{p_2}{2 - p_2}$.</p>",
    "trap": "In (b), $p_1$ cancels out completely: the posterior depends only on Worker 2's qualification probability $p_2$.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 96(a–b), PDF p. 121."
  },
  {
    "id": "w.prob.3.ross.prob.97",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Gender-dependent social friendship network correlations",
    "prompt": "<p>Each person in a population of size $n$ is female with probability $p$ and male with probability $1-p$. Same-sex pairs are friends with probability $\\alpha$, and opposite-sex pairs with probability $\\beta$ . Let $A_{i,j}$ be the event persons $i$ and $j$ are friends. (a) Find $P(A_{1,2})$. (b) Are $A_{1,2}$ and $A_{1,3}$ independent? (c) Are $A_{1,2}$ and $A_{1,3}$ conditionally independent given person 1's gender? (d) Find $P(A_{1,2} A_{1,3})$.</p>",
    "approach": "<p>Condition on the gender of the shared individual (person 1).</p>",
    "solution": "<p>(a) Persons 1 and 2 have the same sex with probability $p^2 + (1-p)^2$, and opposite sexes with probability $2p(1-p)$. Thus $P(A_{1,2}) = \\alpha[p^2 + (1-p)^2] + 2\\beta p(1-p)$.<br/>(c) Given person 1 is female ($F_1$), person 2 is female with prob $p$ (friendship prob $\\alpha$) and male with prob $1-p$ (friendship prob $\\beta$), so $P(A_{1,2}\\mid F_1) = \\alpha p + \\beta(1-p)$. Similarly $P(A_{1,3}\\mid F_1) = \\alpha p + \\beta(1-p)$. Given $F_1$, the genders and friendship ties of persons 2 and 3 are completely independent, so $A_{1,2}$ and $A_{1,3}$ ARE conditionally independent given person 1's gender.<br/>(d) By conditional independence: $P(A_{1,2} A_{1,3}\\mid F_1) = [\\alpha p + \\beta(1-p)]^2$, and $P(A_{1,2} A_{1,3}\\mid M_1) = [\\alpha(1-p) + \\beta p]^2$. Thus $P(A_{1,2} A_{1,3}) = p[\\alpha p + \\beta(1-p)]^2 + (1-p)[\\alpha(1-p) + \\beta p]^2$.<br/>(b) Subtracting the product of the two marginal probabilities from (d) gives p(1−p)(α−β)²(2p−1)². The two friendship events are independent exactly when this is zero: p=0, p=1, p=1/2, or α=β. Otherwise their joint chance is larger than the product and they are dependent. In particular, p=1/2 gives independence even when α≠β.</p>",
    "trap": "The shared individual creates common latent variance: persons 1 and 2 being friends increases the likelihood that person 1 matches the common sex, influencing friendship with person 3.",
    "tests": [
      "c.prob.3.4.1",
      "c.prob.3.5.2"
    ],
    "provenance": "Ross, 10e, Chapter 3, Problem 97(a–d), PDF p. 121."
  },
  {
    "id": "w.prob.3.ross.problem.1",
    "course": "prob",
    "sec": "3.2",
    "marks": 4,
    "title": "Condition on distinct dice",
    "prompt": "(Adapted from Ross Problem 3.1.) Two fair dice are rolled. Find the conditional probability that at least one is a six, given that their values differ.",
    "approach": "Use the event in the condition as the reduced sample space of ordered outcomes. Count its members and then the favorable members.",
    "solution": "There are 36 equally likely ordered outcomes before conditioning. The condition removes the 6 doubles, leaving 30 outcomes. If at least one die is six and the values differ, the outcomes are (6,j) and (j,6), for j=1,...,5: 10 outcomes. Hence P(at least one 6 | different)=10/30=1/3.",
    "trap": "Including (6,6) among the favorable outcomes even though it violates the conditioning event.",
    "tests": [
      "c.prob.3.2.1",
      "c.prob.3.2.3"
    ]
  },
  {
    "id": "w.prob.3.ross.problem.13",
    "course": "prob",
    "sec": "3.2",
    "marks": 5,
    "title": "Sequential passes",
    "prompt": "(Adapted from Ross Problem 3.13.) A student passes exam 1 with probability .9. Given passing exam 1, the probability of passing exam 2 is .8; given passing both 1 and 2, the probability of passing exam 3 is .7. Find (a) the probability of passing all three; (b) given that she did not pass all three, the probability she failed exam 2.",
    "approach": "First calculate the sequential probability of three passes. Failure to pass all three consists of disjoint paths: fail 1, pass 1 then fail 2, or pass 1 and 2 then fail 3.",
    "solution": "(a) By the chain rule, P(pass all)=.9·.8·.7=.504. (b) The event “failed exam 2” has probability .9·.2=.18. Since it is contained in the event “did not pass all three,” divide by 1−.504=.496. The required conditional probability is .18/.496=45/124≈.3629.",
    "trap": "Using .2 alone for the probability of failing exam 2; she reaches exam 2 only after passing exam 1.",
    "tests": [
      "c.prob.3.2.2"
    ]
  },
  {
    "id": "w.prob.3.ross.problem.16",
    "course": "prob",
    "sec": "3.3",
    "marks": 4,
    "title": "Reverse a relative-risk statement",
    "prompt": "(Adapted from Ross Problem 3.16.) Smokers make up 32% of women of childbearing age. Ectopic pregnancy is twice as likely for a smoker as for a nonsmoker. Find the percentage of women with ectopic pregnancies who are smokers.",
    "approach": "Let r be the nonsmoker risk, so the smoker risk is 2r. Apply Bayes using the two population proportions; r cancels.",
    "solution": "Let S denote smoker and E ectopic pregnancy. P(E|S)=2r and P(E|Sᶜ)=r. By Bayes, P(S|E)=P(E|S)P(S)/[P(E|S)P(S)+P(E|Sᶜ)P(Sᶜ)]=(2r·.32)/(2r·.32+r·.68)=.64/1.32=16/33≈.48485. Thus about 48.5%.",
    "trap": "A twofold risk does not mean that two thirds of cases are smokers unless the groups were equally common.",
    "tests": [
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ]
  },
  {
    "id": "w.prob.3.ross.problem.33",
    "course": "prob",
    "sec": "3.3",
    "marks": 5,
    "title": "Posterior with an imperfect signal",
    "prompt": "(Adapted from Ross Problem 3.33.) A tumor is cancerous with prior probability p. A fair coin is flipped. On heads the doctor calls if and only if the tumor is benign; on tails the doctor never calls. Find P(cancer | no call) and compare it with p.",
    "approach": "Calculate the no-call likelihood separately under cancer and benign status, then normalize. Keep p symbolic.",
    "solution": "If cancer is present, the doctor never calls, so P(no call|cancer)=1. If benign, no call occurs on tails, so P(no call|benign)=1/2. Therefore P(no call)=p+(1−p)/2=(1+p)/2, and P(cancer|no call)=p/[(1+p)/2]=2p/(1+p). For 0<p<1, 2p/(1+p)>p because 2/(1+p)>1; non-call raises the cancer probability. Endpoints p=0 or 1 remain equal.",
    "trap": "Treating the random coin decision as if it were informative under cancer; under cancer there is no call in either coin outcome.",
    "tests": [
      "c.prob.3.3.2",
      "c.prob.3.3.3"
    ]
  },
  {
    "id": "w.prob.3.ross.example.4l",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Fair transfers among several players",
    "prompt": "Player i starts with n_i units. At each round two players exchange one unit through a fair independent game. Players with no money leave; eventually one player owns all N units. Find each winning probability.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "A player’s expected fortune does not change in a fair game. Stop after t rounds or when the game ends, whichever comes first. Its expectation remains n_i. Fortunes stay between 0 and N, so when absorption occurs with probability 1, passing to the limit preserves the expectation. The final fortune is N with probability P_i and 0 otherwise. Thus NP_i=n_i, or P_i=n_i/N. This allows any rule for choosing the pair that ensures the process eventually ends. A rule that never lets some players play need not produce a victor.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, example 4l; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.example.4m",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Gambler’s ruin and a drug comparison",
    "prompt": "A starts with i units and B with N−i. A wins each independent unit bet with probability p. Find the probability A takes all the money. Also apply this to a test that compares two cure rates and stops when their cure totals differ by M.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Write u_i for A’s win probability and q=1−p. The first bet gives u_i=pu_{i+1}+qu_{i−1}, with u_0=0 and u_N=1. Therefore u_{i+1}−u_i=(q/p)(u_i−u_{i−1}). Summing these successive differences gives u_i=[1−(q/p)^i]/[1−(q/p)^N] if 0<p<1 and p≠1/2; for p=1/2 it gives i/N. For p=0 or 1 the answer is 0 or 1 at interior states. With i=5,N=15, the values are 1/3 for p=1/2 and about .8703 for p=.6. The game ends almost surely: in each block of N bets, all heads or all tails has a fixed positive chance, and either forces absorption. For drug rates p_1>p_2, retain only pairs with different outcomes. An upward step has probability p=p_1(1−p_2)/[p_1(1−p_2)+p_2(1−p_1)]. Starting midway between −M and M, the error probability is 1/(1+γ^M), where γ=p_1(1−p_2)/[p_2(1−p_1)]. For .6 and .4 this is about .01705 at M=5 and .0003006 at M=10. Degenerate cure rates are handled directly.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, example 4m; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.example.4n",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Compute a knockout bracket",
    "prompt": "A 16-team bracket pairs seeds (1,16),(8,9),(5,12),(4,13),(6,11),(3,14),(7,10),(2,15), in that bracket order. If i beats j with probability p_ij independently of other matches, calculate each team’s chance to win. Illustrate p_ij=j/(i+j).",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Let O_i(k) be the teams in the opposite half of i’s size-2^k bracket block. Let a_i(0)=1 and a_i(k) be its chance of winning its first k rounds. The other half’s winner is j with probability a_j(k−1). Since the halves use different independent matches, a_i(k)=a_i(k−1)∑_{j∈O_i(k)}a_j(k−1)p_ij. Compute all 16 values at level k before advancing to k+1; the answers are a_i(4). For p_ij=j/(i+j), a_i(1)=(17−i)/17. Then a_1(2)=(16/17)[(9/17)(8/9)+(8/17)(9/10)]=.84152249. The same stated recursion supplies every third- and fourth-round value without assuming that the strongest possible opponent always wins.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, example 4n; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.example.4o",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "A coloring exists by a probability bound",
    "prompt": "Color every edge of the complete graph on n vertices red or blue. Show there is a coloring with no single-color complete subgraph of size k whenever C(n,k)<2^{k(k−1)/2−1}.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Color edges independently, each color having probability 1/2. A fixed group of k vertices has d=k(k−1)/2 edges. All are red with probability 2^{−d}, and all blue with the same probability; for k≥2 these events are disjoint. The chance that some group is single-colored is at most C(n,k)·2^{1−d} by adding the bad-event probabilities. The stated inequality makes this less than 1, so the complementary event has positive probability. At least one coloring therefore avoids every bad group. The argument proves existence rather than describing which coloring to choose.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, example 4o; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.1",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "An intersection under two conditions",
    "prompt": "Show P(A∩B|A)≥P(A∩B|A∪B), assuming P(A)>0.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Both numerators are P(A∩B). The denominators are P(A) and P(A∪B). Since P(A)≤P(A∪B), dividing the same nonnegative numerator by the smaller positive denominator gives the larger value.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 1; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.2",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Nested events",
    "prompt": "If A⊆B, simplify P(A|B), P(A|Bᶜ), P(B|A), P(B|Aᶜ).",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "When the respective denominators are positive, the answers are P(A)/P(B), 0, 1, and [P(B)−P(A)]/[1−P(A)]. Use A∩B=A, A∩Bᶜ=∅, and B∩Aᶜ=B minus A. A zero denominator means that conditional probability is undefined.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 2; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.3",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Firstborn sampling bias",
    "prompt": "There are n_i families with i children, with m=∑n_i. Compare choosing a family uniformly then one of its children uniformly, with choosing a child uniformly from all children.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Method A chooses a firstborn with probability (1/m)∑n_i/i. Method B gives m/∑in_i. Their comparison is (∑n_i/i)(∑in_i)≥m². Expanding, the diagonal terms agree, and each pair i<j contributes n_i n_j(i/j+j/i)≥2n_i n_j, since (i−j)²/(ij)≥0. Equality occurs when every represented family size is the same; otherwise A is strictly more likely.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 3; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.4",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "An unsuccessful box search",
    "prompt": "A ball is in box j with probability p_j. A search of box i detects a ball there with probability α_i. Find its location probabilities after that search fails.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Failure has probability 1−α_i p_i. For j≠i, a ball in box j guarantees this failure, so the joint probability is p_j. For j=i it is p_i(1−α_i). Divide each by 1−α_i p_i. The answers are p_j/(1−α_i p_i) and p_i(1−α_i)/(1−α_i p_i), provided failure has positive probability.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 4; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.5",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Disjoint alternatives after conditioning",
    "prompt": "(a) Find P(E|E∪F) when E,F are disjoint. (b) Do the same for E_j given the union of countably many disjoint E_i.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) E∩(E∪F)=E and P(E∪F)=P(E)+P(F), so the answer is P(E)/[P(E)+P(F)]. (b) Replace the denominator by ∑_i P(E_i); the numerator remains P(E_j). Both require a positive denominator.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 5; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.6",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "At least one independent event",
    "prompt": "Prove P(∪_{i=1}^n E_i)=1−∏_{i=1}^n[1−P(E_i)] for mutually independent events.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "None occurs exactly when all complements occur. Complements of mutually independent events are mutually independent (expand the complement factors or successively subtract intersections). Thus P(none)=∏P(E_iᶜ). Subtract this probability from 1.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 6; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.7",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Which color lasts longest?",
    "prompt": "(a) Remove n white and m black balls uniformly until only one color remains. Find the chance it is white. (b) Remove r red,b blue,g green fish uniformly; find the chance red becomes extinct first.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) Continue the same random ordering to the final ball. The surviving color is the last ball’s color, so its probability is n/(n+m). (b) Write N=r+b+g. The order red-blue-green has probability (g/N)[b/(r+b)]: the final ball is green, and in the relative red-blue ordering the final ball is blue. Red-green-blue similarly has probability (b/N)[g/(r+g)]. Add them: bg/N[1/(r+b)+1/(r+g)]. Conditioning on the last species leaves the relative ordering of the other two uniformly random.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 7; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.8",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Conditional comparisons need care",
    "prompt": "For dice events A,B,C: (a) If P(A|C)>P(B|C) and P(A|Cᶜ)>P(B|Cᶜ), must P(A)>P(B)? (b) If both A and B are individually more likely under C than Cᶜ, must their intersection also be more likely?",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) Yes, when 0<P(C)<1. Multiply the two strict inequalities by P(C) and P(Cᶜ) and add; total probability gives P(A)>P(B). (b) No. Take C={sum is 10}, A={first die is 6}, B={second die is 6}. Under C, each has probability 1/3. Under Cᶜ each has probability 5/33. Yet P(A∩B|C)=0 while P(A∩B|Cᶜ)=1/33.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 8; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.9",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Pairwise independence is weaker",
    "prompt": "Use two independent fair coin tosses: A=first head, B=second head, C=matching faces. Show pairwise independence but not mutual independence.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Each event contains two of four equally likely outcomes, so each has probability 1/2. Every pair meets only at HH, with probability 1/4, equal to the pair’s product. The triple also meets at HH and has probability 1/4, whereas the three probabilities multiply to 1/8.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 9; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.10",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "A positive mammogram",
    "prompt": "Cancer prevalence is .02; sensitivity is .9 and the false-positive rate is .08. Find P(cancer|positive).",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "The cancer-and-positive chance is .02·.9=.018; the no-cancer-and-positive chance is .98·.08=.0784. Divide: .018/(.018+.0784)=45/241≈.18672. The positive result does not itself distinguish those two routes.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 10; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.11",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Enough coin tosses for a head",
    "prompt": "Independent tosses have head probability p. How many make the chance of at least one head at least 1/2?",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "For 0<p<1, no heads in n tosses has probability (1−p)^n. Require (1−p)^n≤1/2. Taking logarithms and dividing by the negative ln(1−p) reverses the inequality, giving n≥ln(1/2)/ln(1−p). The smallest integer is its ceiling. For p=1 one toss suffices; for p=0 no finite number does.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 11; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.12",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "First-success identity",
    "prompt": "For 0≤a_i≤1, prove ∑_{i≥1}a_i∏_{j<i}(1−a_j)+∏_{i≥1}(1−a_i)=1.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Set b_0=1 and b_i=∏_{j≤i}(1−a_j). Then a_i b_{i−1}=b_{i−1}−b_i. Summing to n gives ∑_{i=1}^n a_i b_{i−1}=1−b_n. The sequence b_n decreases and is at least 0, so it has a limit. Passing to the limit gives the identity. In independent trials the terms are the probabilities of first success at i and of no success ever.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 12; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.13",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Alternating turns after tails",
    "prompt": "A flips until a tail, then B does likewise, alternating. Heads have probability p. Let P_{n,m} be the chance A reaches n total heads before B reaches m. Derive a recurrence.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "If A’s first flip is a head, A now needs n−1 and the chance is P_{n−1,m}. If it is a tail, B starts; exchanging player names shows A’s chance is 1−P_{m,n}, provided the race finishes almost surely (0<p<1). Hence P_{n,m}=pP_{n−1,m}+(1−p)(1−P_{m,n}), with P_{0,m}=1 and P_{n,0}=0.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 13; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.14",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Ruin against an unlimited opponent",
    "prompt": "Starting with i units, win or lose one independently with probabilities p,q. Find the probability of ever reaching zero.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Stop instead on reaching 0 or a higher level N>i. For 0<p<1 the ruin probability before N is 1−[1−(q/p)^i]/[1−(q/p)^N]. As N tends to infinity these events increase to eventual ruin: a path that reaches zero has a finite maximum before doing so. If p≤1/2 the limit is 1; if p>1/2 it is (q/p)^i. At p=0 ruin is certain, and at p=1 it is impossible for i>0.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 14; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.15",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Trial of the r-th success and the points problem",
    "prompt": "Show that the r-th success occurs on trial n with probability C(n−1,r−1)p^r(1−p)^{n−r}. Use this to divide a stake when A needs r further wins and B needs s.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "The first n−1 trials must contain exactly r−1 successes, and trial n must succeed. Choosing those positions and multiplying probabilities proves the formula. A wins the race on trial n precisely for r≤n≤r+s−1: at that moment n−r<s failures have occurred. Thus A’s fair share is the stake times ∑_{n=r}^{r+s−1}C(n−1,r−1)p^r(1−p)^{n−r}; B gets the remainder.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 15; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.16",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Even number of successes",
    "prompt": "Let P_n be the probability of an even number of successes in n Bernoulli(p) trials. Prove a recurrence and a formula.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "An even count at n comes from an odd previous count and a success, or an even previous count and a failure. So P_n=p(1−P_{n−1})+(1−p)P_{n−1}. Subtract 1/2: P_n−1/2=(1−2p)(P_{n−1}−1/2). Since P_0=1, P_n=[1+(1−2p)^n]/2. This also proves the formula by induction.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 16; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.17",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Odd successes with changing probabilities",
    "prompt": "Trial i succeeds with probability 1/(2i+1). (a) Compute odd-count probabilities for n=1,…,5; (b–d) conjecture, derive, and prove the general formula.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Write a_n=1/(2n+1). The same parity split gives P_n=a_n(1−P_{n−1})+(1−a_n)P_{n−1}, with P_0=0. Then 1−2P_n=(1−2a_n)(1−2P_{n−1}) and ∏_{i=1}^n(2i−1)/(2i+1)=1/(2n+1). Therefore P_n=n/(2n+1). The first five values are 1/3,2/5,3/7,4/9,5/11. Substitution into the recurrence and the base value verifies the conjecture.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 17; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.18",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "No run of three heads",
    "prompt": "Let Q_n be the chance that n fair tosses contain no HHH. Prove Q_n=Q_{n−1}/2+Q_{n−2}/4+Q_{n−3}/8, and calculate Q_8.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "For n≥3 an acceptable sequence starts with T, HT, or HHT. These have probabilities 1/2,1/4,1/8 and leave independent acceptable suffixes of lengths n−1,n−2,n−3. These separate cases exhaust the possibilities. Q_0=Q_1=Q_2=1. The counts 2^nQ_n satisfy a_n=a_{n−1}+a_{n−2}+a_{n−3}, starting 1,2,4. Successive values are 7,13,24,44,81,149, so Q_8=149/256.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 18; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.19",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Gambler’s ruin with a time limit",
    "prompt": "Let P_{n,i} be the chance A wins all N units within n bets, starting with i; each bet is won with probability p. Find a recurrence and P_{7,3} for N=5.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "P_{n,i}=pP_{n−1,i+1}+qP_{n−1,i−1} for interior i. Boundaries are P_{n,0}=0,P_{n,N}=1, and P_{0,i}=0 at interior i. Repeated substitution for N=5 gives P_{7,3}=p²+2p³q+5p⁴q²; success can first occur at bets 2,4,6, and no odd bet. For fair bets this is 29/64.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 19; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.20",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Switch urns after black",
    "prompt": "Urn white probabilities are p,p′. Start in urn 1 with probability α; stay after white and switch after black, replacing the ball. Find the urn and white probabilities at time n and their limits.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "If α_n is the chance of using urn 1, then α_{n+1}=pα_n+(1−p′)(1−α_n)=(p+p′−1)α_n+1−p′. Let d=p+p′−1 and a=(1−p′)/(2−p−p′), where the denominator is positive. Then α_n=a+(α−a)d^{n−1}, by subtracting the fixed point a and iterating. The white probability is W_n=pα_n+p′(1−α_n). For |d|<1 the limits are a and pa+p′(1−a). If p=p′=1 the urn never changes, α_n=α and W_n=1. If p=p′=0 it alternates, α_n alternates between α and 1−α (unless α=1/2), and W_n=0.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 20; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.21",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Ballot theorem",
    "prompt": "A receives n votes and B m, with n>m. Every ordering is equally likely. Find the chance A is strictly ahead after every counted vote: include small cases, formulas for m=1,2, a recurrence, and a proof.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "The formula is P_{n,m}=(n−m)/(n+m). Thus P_{2,1}=1/3,P_{3,1}=1/2,P_{3,2}=1/5,P_{4,1}=3/5,P_{4,2}=1/3,P_{4,3}=1/7. For m=1,2 it gives (n−1)/(n+1),(n−2)/(n+2). Condition on the last vote: P_{n,m}=n/(n+m)P_{n−1,m}+m/(n+m)P_{n,m−1}, setting P_{n,n}=0 and P_{n,0}=1 for n>0. If n−1=m the first predecessor is the zero boundary. Substitution of the proposed formula gives [n(n−1−m)+m(n−m+1)]/[(n+m)(n+m−1)]=(n−m)/(n+m). The smaller totals and boundaries prove it by induction.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 21; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.22",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Weather switches",
    "prompt": "Tomorrow repeats today’s wet/dry state with probability p. Starting dry, derive and solve a recurrence for the chance P_n of being dry n days later.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Tomorrow is dry after today dry with probability p, or today wet with probability 1−p. Thus P_n=pP_{n−1}+(1−p)(1−P_{n−1})=(2p−1)P_{n−1}+1−p. Subtracting 1/2 gives P_n−1/2=(2p−1)(P_{n−1}−1/2). With P_0=1, P_n=1/2+(2p−1)^n/2.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 22; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.23",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Discard runs of the same color",
    "prompt": "A bag starts with a>0 white and b>0 black balls. Discard a random ball; keep discarding balls of its color until a different color appears, return that ball, and begin a new run. Show the last ball is white with probability 1/2.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Use induction on a+b, with both colors present. When a=b=1, the first discarded color decides the opposite last color, each with probability 1/2. In general, condition on the first discarded run. If it removes all white, the last ball is black; if it removes all black, the last ball is white. In a uniform ordering, the probability all a white precede every black is 1/C(a+b,a), equal to the probability all b black precede every white. Every other first run leaves fewer balls but both colors present; by induction its later white-last chance is 1/2. If t is either exhaustion probability, the total is t·0+t·1+(1−2t)/2=1/2. The claim requires both colors initially.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 23; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.24",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Tournament existence",
    "prompt": "Show a tournament on n players can have a player beating every member of each k-player set if C(n,k)(1−2^{−k})^{n−k}<1.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Make every match an independent fair result. For a fixed k-player group, each outside player beats all its members with probability 2^{−k}. The matches used for different outside players are disjoint, so the chance nobody does this is (1−2^{−k})^{n−k}. The chance at least one group fails is at most C(n,k) times that value. If this is less than 1, some tournament has no failure.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 24; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.25",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Total probability inside a condition",
    "prompt": "Prove P(E|F)=P(E|F∩G)P(G|F)+P(E|F∩Gᶜ)P(Gᶜ|F).",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Multiply the first two factors to get P(E∩F∩G)/P(F), and the second pair to get P(E∩F∩Gᶜ)/P(F). Those disjoint pieces join to E∩F, giving P(E∩F)/P(F). Assume P(F)>0; any piece with zero probability contributes zero without requiring an undefined conditional factor.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 25; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.26",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Two forms of conditional independence",
    "prompt": "Prove P(E_1|E_2∩F)=P(E_1|F) is equivalent to P(E_1∩E_2|F)=P(E_1|F)P(E_2|F).",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "The conditional multiplication rule gives P(E_1∩E_2|F)=P(E_1|E_2∩F)P(E_2|F). Substitute the first equality to prove one direction. If P(E_2|F)>0, divide by it to prove the reverse direction. When P(E_2|F)=0, the product definition still makes sense but the first conditional probability is undefined.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 26; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.27",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "More than two conditionally independent events",
    "prompt": "Define mutual conditional independence of E_1,…,E_n given F.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Require P(F)>0 and, for every nonempty subset I of indices, P(∩_{i∈I}E_i|F)=∏_{i∈I}P(E_i|F). The requirement is for every subset, not just every pair. It means these events are mutually independent in the probability model obtained after restricting to F.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 27; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.28",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Does independence survive conditioning?",
    "prompt": "Must two independent events remain conditionally independent given F?",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "No. For two fair coin tosses, take E_1=first head,E_2=second head and F=at least one head. Originally each has probability 1/2 and their intersection has probability 1/4. Given F, their probabilities are 2/3 and their intersection is 1/3, which differs from (2/3)².",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 28; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.29",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Several future heads under Laplace’s model",
    "prompt": "Choose uniformly one of the coins with head probabilities i/k, i=0,…,k. Given n heads, find the chance the next m tosses are heads for large k.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "The exact answer is [∑_{i=0}^k(i/k)^{n+m}]/[∑_{i=0}^k(i/k)^n]. Dividing each sum by k gives Riemann sums tending to 1/(n+m+1) and 1/(n+1). Hence the limit is (n+1)/(n+m+1). The printed expression (n+1)/(n+m−1) is an error: at m=1 it can exceed 1 and disagrees with the one-step rule.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 29; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.30",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Laplace’s rule after mixed observations",
    "prompt": "With a uniformly distributed head probability on [0,1], observe r heads and n−r tails. Prove the next-head probability is (r+1)/(n+2), using ∫_0^1 y^a(1−y)^b dy=a!b!/(a+b+1)!.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Let I(a,b) be that integral. I(a,0)=1/(a+1). Integration by parts for b≥1 gives I(a,b)=b I(a+1,b−1)/(a+1); induction yields the factorial formula. Observing the specified results weights possible head probabilities by y^r(1−y)^{n−r}. The next-head chance is the ratio I(r+1,n−r)/I(r,n−r)=(r+1)/(n+2). A large evenly spaced finite set of coins approaches this continuous result; for finite k the ratio of sums is generally not exactly this value.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 30; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.theoretical.31",
    "course": "prob",
    "sec": "3.5",
    "marks": 5,
    "title": "Why age is not a Laplace coin model",
    "prompt": "A friend says Laplace’s rule makes an 80-year-old more likely to survive another year than a 10-year-old. Explain the mistake.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "The rule assumes repeated trials have one fixed unknown success probability, are independent given that probability, and start with a uniform prior for it. Yearly survival does not have this model: risk changes with age, health, and circumstances, and biological evidence supplies much more information than a uniform prior. Applying a correct theorem after discarding its assumptions gives no valid prediction.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.5.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, theoretical 31; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.1",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Partner’s bridge aces",
    "prompt": "West has no aces. Find his partner’s chance of (a) no aces, (b) at least two; (c) repeat when West has exactly one ace.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Conditioning on West’s hand leaves a uniform 13-card partner hand from 39 cards. (a) C(35,13)/C(39,13). (b) 1−[C(35,13)+4C(35,12)]/C(39,13). (c) With three aces left, replace these by C(36,13)/C(39,13) and 1−[C(36,13)+3C(36,12)]/C(39,13).",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 1; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.2",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Battery life after 10,000 miles",
    "prompt": "The chances a battery lasts beyond 10,000,20,000,30,000 miles are .8,.4,.1. Given survival to 10,000, find the chance (a) total life exceeds 20,000; (b) additional life exceeds 20,000.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Survival to a later threshold is a subset of survival to 10,000. Divide by .8. (a) .4/.8=1/2. (b) Additional life beyond 20,000 means total life beyond 30,000, so .1/.8=1/8.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 2; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.3",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Arrange two urns optimally",
    "prompt": "Split 10 white and 10 black balls between two nonempty urns. Pick an urn fairly and then a ball uniformly. Maximize the white-ball chance.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Put one white ball alone in urn 1 and the remaining 9 white and 10 black in urn 2. This gives [1+9/19]/2=14/19. To see optimality, let urn 1 have n≤10 balls and w whites (exchange urn names if necessary). The total chance is [w/n+(10−w)/(20−n)]/2, which increases with w for n<10. Its maximum at fixed n occurs at w=n, producing [1+(10−n)/(20−n)]/2, decreasing with n. The best is n=1. At n=10 the value is 1/2 regardless of allocation.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 3; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.4",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Transferred ball given a white draw",
    "prompt": "A has 2 white and 1 black; B has 1 white and 5 black. Transfer one random A ball to B, then draw a white ball from B. Find the chance the transfer was white.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "The white-transfer-and-white-draw probability is (2/3)(2/7)=4/21. A black transfer then white draw has probability (1/3)(1/7)=1/21. Divide the first by their sum to get 4/5.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 4; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.5",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Colors at different removal positions",
    "prompt": "Randomly remove r red and w white balls. Find (a) P(R_i), (b) P(R_5|R_3), (c) P(R_3|R_5).",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "A random ordering treats every position alike, so (a) r/(r+w). Given one named position is red, the remaining r+w−1 positions contain r−1 red balls symmetrically. Thus (b) and (c) both equal (r−1)/(r+w−1). The named positions must exist, and the conditioning event must have positive probability.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 5; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.6",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Reinforced urn in reverse",
    "prompt": "An urn has b black and r red. Draw a ball, replace it with c additional balls of its color, and draw again. Show P(first black|second red)=b/(b+r+c).",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "The joint probability is [b/(b+r)]·[r/(b+r+c)]. Total probability gives P(second red)=[r/(b+r)]·[(r+c)/(b+r+c)]+[b/(b+r)]·[r/(b+r+c)]=r/(b+r). Divide to get b/(b+r+c), assuming r>0.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 6; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.7",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Two aces under different information",
    "prompt": "Two cards are drawn without replacement. Find P(both aces) given (a) one is the ace of spades; (b) the first is an ace; (c) the second is an ace; (d) at least one is an ace.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) The other card is uniform among 51, of which 3 are aces, giving 1/17. (b) After the first ace, 3 of 51 remaining cards are aces, also 1/17. (c) Exchange the ordered positions: again 1/17. (d) There are C(52,2)−C(48,2)=198 pairs with at least one ace and C(4,2)=6 with two, giving 1/33.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 7; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.8",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Posterior odds",
    "prompt": "Show P(H|E)/P(G|E)=[P(H)/P(G)]·[P(E|H)/P(E|G)]. H is initially three times as likely as G; E is twice as likely under G as H. Which is more likely afterward?",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Bayes gives P(H|E)=P(E|H)P(H)/P(E), and similarly for G. Divide; the evidence denominator cancels. Posterior odds H:G are 3·(1/2)=3/2. H remains more likely, although its relative advantage falls. All probabilities used as denominators must be positive.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 8; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.9",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "A watered plant",
    "prompt": "A neighbor remembers watering with probability .9. A plant dies with probability .15 when watered and .8 otherwise. Find (a) survival chance, (b) chance watering was forgotten given death.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) .9·.85+.1·.2=.785. (b) Forgotten-and-dead has probability .1·.8=.08; death probability is .215. The conditional answer is .08/.215=16/43.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 9; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.10",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Six colored balls",
    "prompt": "Choose six from 8 red,10 green,12 blue. (a) Find the chance of at least one red. (b) Given no red, find the chance of exactly two green.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) 1−C(22,6)/C(30,6). (b) The condition restricts to six of the 22 nonred balls. Choose two of 10 green and four of 12 blue, giving C(10,2)C(12,4)/C(22,6).",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 10; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.11",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Mixed battery types",
    "prompt": "Choose a battery from 8 type C and 6 type D. Their working chances are .7 and .4. Find (a) the working chance, (b) the chance a failed battery was type C.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) (8/14).7+(6/14).4=4/7. (b) Type-C failure has probability (8/14).3=6/35. Failure probability is 3/7. Divide: (6/35)/(3/7)=2/5.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 11; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.12",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Books liked",
    "prompt": "Maria likes book 1 with chance .6, book 2 with .5, and both with .4. Find P(likes 2|does not like 1).",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Book 2 without book 1 has probability .5−.4=.1. Not liking book 1 has probability .4. Divide to get .1/.4=1/4.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 12; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.13",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Order of exhausted colors",
    "prompt": "Remove balls randomly. (a) With 20 red,10 blue, find the chance red is exhausted before blue. Add 8 green: (b) repeat, (c) find blue-red-green exhaustion order, (d) find blue exhausted first.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) The final ball must be blue, so 10/30=1/3. (b) Ignore green in the relative red-blue ordering; the answer stays 1/3. (c) The final color is green with probability 8/38; among red and blue the final color is red with probability 20/30. Product =8/57. (d) Add blue-red-green and blue-green-red: (8/38)(20/30)+(20/38)(8/18)=64/171. Conditioning on the final species leaves the relative ordering of the others uniformly random.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 13; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.14",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "A forgetful messenger",
    "prompt": "A coin is heads with chance .8. A reports correctly when remembering; with chance .4 he forgets and reports a random face. Find (a) chance of a heads report, (b) correct-report chance, (c) true-head chance given a heads report.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) .6·.8+.4·.5=.68. (b) .6+.4·.5=.8. (c) A heads coin is reported heads with chance .6+.4·.5=.8. Thus heads-and-heads-report has chance .8·.8=.64. Divide by .68 to get 16/17.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 14; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.15",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Rat genotype updating",
    "prompt": "Black dominates brown. A black rat has black parents and a brown sibling. (a) Find the chance it is pure black. (b) It mates with a brown rat and all five offspring are black; update that chance.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "The brown sibling shows both parents have genotype Bb. Their child probabilities are BB:1/4,Bb:1/2,bb:1/4. Given a black child, (a) P(BB)=1/3. (b) A BB parent gives all black offspring with probability 1; a Bb parent does so with probability (1/2)^5. Bayes gives (1/3)/[(1/3)+(2/3)/32]=16/17.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 15; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.16",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Bridge circuit by conditioning",
    "prompt": "For the bridge in Problem 70(b), (a) calculate flow by conditioning on relay 1; (b) calculate P(relay 3 closed|flow). Label 1,2 as the left upper/lower edges, 4,5 as right upper/lower edges, and 3 as the middle link.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Let a=1−(1−p_1)(1−p_2) and b=1−(1−p_4)(1−p_5). Conditioning on relay 3 gives R=p_3ab+(1−p_3)[1−(1−p_1p_4)(1−p_2p_5)]. (a) If 1 is closed, flow has probability R_1=p_4+(1−p_4)p_5[p_2+(1−p_2)p_3]. If 1 is open, it has probability R_0=p_2[p_5+(1−p_5)p_3p_4]. Hence R=p_1R_1+(1−p_1)R_0, which expands to the same expression. (b) The requested probability is p_3ab/R, provided R>0.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 16; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.17",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Working component given a working system",
    "prompt": "Independent components work with chance 1/2. Find P(component 1 works|at least k of n work) for (a) k=1,n=2; (b) k=2,n=3.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) The working-system outcomes 01,10,11 are equally likely; component 1 works in two, giving 2/3. (b) The possible working outcomes are 110,101,011,111. Component 1 works in three, giving 3/4.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 17; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.18",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Waiting for roulette blacks",
    "prompt": "A gambler bets red only after ten black spins, arguing that eleven consecutive blacks are unlikely. Assess the argument.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "If spins are independent, conditioning on any previous outcomes leaves the next-spin red probability unchanged. On a European wheel it is 18/37, and on an American wheel 18/38. A long run’s small unconditional probability cannot raise a probability after the first ten outcomes are already known.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 18; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.19",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Odd player out",
    "prompt": "A,B,C independently toss with head chances p_1,p_2,p_3. Repeat whole rounds with no odd player until one is odd. Find the chance it is A.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Let a=p_1(1−p_2)(1−p_3)+(1−p_1)p_2p_3. Define b,c by exchanging labels. A is odd on a given round with probability a, and somebody is odd with probability s=a+b+c. The chance A is ultimately odd is ∑_{t≥0}(1−s)^t a=a/s when s>0. If s=0, the procedure never ends.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 19; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.20",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Second outcome larger",
    "prompt": "Independent trials take ordered outcomes i=1,…,n with probabilities p_i. Find P(second>first).",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "The chance of a tie is ∑p_i². Swapping the two independent identically distributed trials makes second>first and first>second equally likely. Each has probability [1−∑p_i²]/2. Equivalently sum p_i p_j over i<j.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 20; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.21",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "One extra fair coin",
    "prompt": "A tosses n+1 fair coins, B tosses n. Show P(A has more heads)=1/2.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "After n tosses each, write t for the tie probability. Symmetry makes each strict lead have probability (1−t)/2. A’s extra coin preserves an A lead; it cannot overturn a B lead into a strict A lead; from a tie it gives an A lead with probability 1/2. Total =(1−t)/2+t/2=1/2.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 21; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.22",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Three independence claims",
    "prompt": "Prove or refute: (a) E independent of F and G implies independence of F∪G; (b) the same with F∩G=∅; (c) E independent of F, F independent of G, and E independent of F∩G implies G independent of E∩F.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) False: with two fair coins take F=first head,G=second head,E=faces equal. E is independent of each, but P(E∩(F∪G))=1/4≠(1/2)(3/4). (b) True: the disjoint pieces E∩F,E∩G give P(E∩(F∪G))=P(E)[P(F)+P(G)]. (c) True: P(EFG)=P(E)P(FG)=P(E)P(F)P(G)=P(EF)P(G).",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 22; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.23",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "True, false, or possible?",
    "prompt": "For positive-probability A,B classify: (a) mutually exclusive implies independent; (b) independent implies mutually exclusive; (c) probabilities both .6 and mutually exclusive; (d) probabilities both .6 and independent.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) Necessarily false: the intersection is 0 while P(A)P(B)>0. (b) Necessarily false for the same reason. (c) Impossible: a disjoint union would have probability 1.2. (d) Possible: independent Bernoulli(.6) coordinates give intersection .36.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 23; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.24",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Rank three chances",
    "prompt": "Rank a fair head, three independent successes with chance .8 each, and seven independent successes with chance .9 each.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "The probabilities are .5,.8³=.512,.9⁷=.4782969. Hence three .8 successes is most likely, then a fair head, then seven .9 successes.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 24; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.25",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Same factory, two radios",
    "prompt": "Both radios come from one equally likely factory. Factory A defects with chance .05 and B with .01; defects are independent given the factory. Given the first is defective, find the second-defect chance.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "First-defect probability is (.05+.01)/2=.03. Both-defect probability is (.05²+.01²)/2=.0013. Divide: .0013/.03=13/300≈.04333. Shared unknown factory makes the two defects dependent before conditioning on factory.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 25; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.26",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Certain implication reversed",
    "prompt": "Show P(A|B)=1 implies P(Bᶜ|Aᶜ)=1 whenever these conditionals are defined.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "P(A|B)=1 means P(B∩Aᶜ)=0. Thus P(Bᶜ∩Aᶜ)=P(Aᶜ), so division by the positive P(Aᶜ) gives 1. If P(Aᶜ)=0 the asserted conditional probability is undefined.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 26; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.27",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Uniform counts in a reinforced urn",
    "prompt": "Start with one red and one blue. Draw a ball, replace it by two of that color, and repeat. Prove the number of red balls after n stages is uniform on 1,…,n+1.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "At n=0 it is 1 with certainty. Assume each count i at n has probability 1/(n+1), with n+2 total balls. An interior count j at n+1 comes from count j−1 and a red draw, or j and a blue draw. Its probability is [(j−1)+(n+2−j)]/[(n+1)(n+2)]=1/(n+2). The endpoint j=1 comes only from a blue draw at i=1, and j=n+2 only from a red draw at i=n+1; both also give 1/(n+2). This proves the next uniform law.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 27; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.28",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "One player declares an ace",
    "prompt": "Divide 2n cards, including two aces, equally between two players. Given player 1 has at least one ace, find the chance player 2 has none for n=2,10,100 and in the limit.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Both aces with player 1 has probability C(n,2)/C(2n,2)=(n−1)/[2(2n−1)]. At least one with player 1 has probability 1−the same value=(3n−1)/[2(2n−1)]. The conditional probability is (n−1)/(3n−1): 1/5,9/29,99/299, tending to 1/3. In the limit each ace independently chooses a player with probability 1/2; conditioning excludes just the both-with-player-2 outcome, leaving three equally likely placements, one of which has both with player 1.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 28; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.29",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "All coupon types and an identity",
    "prompt": "(a) Collect n independent coupons with type probabilities p_i. Find the chance of one of each. (b) For equally likely types, prove n!=∑_{k=0}^n(−1)^k C(n,k)(n−k)^n.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) There are n! distinct orders with exactly one of each, each having probability ∏p_i, so the answer is n!∏p_i. (b) For a fixed k missing types, the chance all n draws avoid them is [(n−k)/n]^n. Inclusion–exclusion makes the chance no type is missing ∑_{k=0}^n(−1)^kC(n,k)[(n−k)/n]^n. By (a) this is n!/n^n. Multiply by n^n to get the identity.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 29; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.30",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Conditioning on a union",
    "prompt": "Prove P(E|E∪F)≥P(E|F) when the denominators are positive.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Let a=P(E∩F),b=P(E∩Fᶜ),c=P(F∩Eᶜ). Then the two probabilities are (a+b)/(a+b+c) and a/(a+c). Their difference is bc/[(a+b+c)(a+c)]≥0.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 30; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.31",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Odds into probability",
    "prompt": "Find probabilities when event odds P(A)/P(Aᶜ) are (a) 2/3, (b) 5.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "If odds are o, solve p/(1−p)=o to get p=o/(1+o). Thus (a) 2/5, (b) 5/6.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 31; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.32",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Odds for three heads",
    "prompt": "Three fair tosses: find (a) odds of all heads, (b) conditional odds given at least one head.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) All heads has chance 1/8 and its complement 7/8, so odds are 1/7. (b) Given at least one head, seven outcomes remain; one is HHH. Odds are (1/7)/(6/7)=1/6.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 32; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.33",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Independent events and a complement",
    "prompt": "For mutually independent E,F,G show P(E|F∩Gᶜ)=P(E).",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "P(EFGᶜ)=P(EF)−P(EFG)=P(E)P(F)[1−P(G)]. The denominator is P(FGᶜ)=P(F)[1−P(G)]. Divide when it is positive to obtain P(E).",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 33; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.34",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Three-player knockout",
    "prompt": "Choose a pair fairly from players 1,2,3; its winner plays the remaining player. All games are independent and i beats j with probability i/(i+j). Find player 1’s title chance and the chance 1 skipped round one given winning.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "If 1 skips, player 2 wins the first match with probability 2/5 and player 3 with 3/5, so 1’s title chance on this branch is (2/5)(1/3)+(3/5)(1/4)=17/60. If 1 first plays 2 it must then beat 3, chance (1/3)(1/4)=1/12; if first plays 3, it must then beat 2, also 1/12. Average the three equally likely pair choices: P(title)=(17/60+1/12+1/12)/3=3/20. Skip-and-title chance is 17/180, so the requested posterior is (17/180)/(3/20)=17/27.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 34; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.35",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Four same-color balls",
    "prompt": "Choose four balls from 4 red,5 white,6 blue,7 green. Given all share a color, find the chance all are white.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "The possible monochromatic selections number C(4,4)+C(5,4)+C(6,4)+C(7,4)=1+5+15+35=56. Five are white, so the answer is 5/56.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 35; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.36",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Four-player tournament",
    "prompt": "Players 1,2 meet and 3,4 meet; winners meet. If i beats j with probability i/(i+j), find player 1’s title chance.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "Player 1 first wins with probability 1/3. The final opponent is 3 with probability 3/7 or 4 with 4/7, independently of the first semifinal. Thus the answer is (1/3)[(3/7)(1/4)+(4/7)(1/5)]=31/420.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 36; independently worded study adaptation."
  },
  {
    "id": "w.prob.3.ross.selftest.37",
    "course": "prob",
    "sec": "3.4",
    "marks": 5,
    "title": "Sequential challenger tournament",
    "prompt": "Players 1,2 play; winner meets 3, then winner meets 4, up to n. If i beats j with probability i/(i+j), find (a) player 3’s title chance, (b) player 4’s for n=4.",
    "approach": "Name the events, split into separate cases when needed, and keep the condition in the denominator.",
    "solution": "(a) Player 3 beats the first winner with probability (1/3)(3/4)+(2/3)(3/5)=13/20. It must then beat every j=4,…,n, so its title chance is (13/20)∏_{j=4}^n3/(3+j). For n=3 the empty product is 1. (b) After round two the survivor probabilities for 1,2,3 are 1/12,4/15,13/20. Player 4’s win probability is (1/12)(4/5)+(4/15)(4/6)+(13/20)(4/7)=194/315.",
    "trap": "Check that the event after “given” has positive probability. Independence needs a reason; it does not follow from the word random.",
    "tests": [
      "c.prob.3.4.1"
    ],
    "provenance": "Ross, A First Course in Probability, 10e, Chapter 3, selftest 37; independently worded study adaptation."
  }
]
);
