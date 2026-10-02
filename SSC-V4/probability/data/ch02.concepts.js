var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
CONCEPTS.push(...
[
  {
    "id": "c.prob.2.1.1",
    "sec": "2.1",
    "kind": "definition",
    "tier": "core",
    "title": "Probability model begins with outcomes",
    "oneLine": "Decide exactly what one outcome records before assigning probabilities.",
    "statement": "Start by describing the experiment and listing its possible results, the sample space $S$. Then assign probabilities to events, which are groups of results. You can record an experiment in different ways, but each way must give the same probabilities to the questions you want to answer.",
    "intuition": "Before asking for a chance, write down what one full result looks like. For two named coin tosses, HH, HT, TH, and TT keep the toss positions visible; if the question cares about which toss was heads, combining HT and TH too early loses useful information.",
    "needs": [],
    "traps": [
      "Do not start counting before deciding what constitutes one outcome. A die pair may be an ordered pair when the dice are distinguished."
    ],
    "cards": [
      {
        "q": "What are the two ingredients introduced before computing event probabilities?",
        "a": "A sample space of possible outcomes, and a probability assignment to events in that sample space.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.1, PDF p. 41."
  },
  {
    "id": "c.prob.2.2.1",
    "sec": "2.2",
    "kind": "definition",
    "tier": "core",
    "title": "Sample spaces and events",
    "oneLine": "The sample space lists everything that can happen; an event selects some of those results.",
    "statement": "The sample space $S$ is the set of possible results. An event $E$ happens when the result is in $E$. For a die, $S=\\{1,2,3,4,5,6\\}$ and “an even result” is $E=\\{2,4,6\\}$. The event $S$ always happens. The empty event $\\varnothing$ has no results and cannot happen.",
    "intuition": "The sample space is the full menu of outcomes; an event is the subset that answers a yes/no question. If you roll a die, “even” is {2,4,6}, while the sure event is {1,2,3,4,5,6} and the impossible one is empty.",
    "needs": [],
    "traps": [
      "A sample point is an outcome; an event can contain many outcomes, one outcome, or none.",
      "For continuous measurements, a singleton event can be nonempty even if later its probability is zero."
    ],
    "cards": [
      {
        "q": "Define a sample space and an event.",
        "a": "$S$ is the set of all possible outcomes. An event $E\\subseteq S$ occurs iff the realized outcome belongs to E.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.2, definitions and Examples 1–5, PDF pp. 42–43."
  },
  {
    "id": "c.prob.2.2.2",
    "sec": "2.2",
    "kind": "definition",
    "tier": "core",
    "title": "Event algebra and De Morgan laws",
    "oneLine": "Union means “at least one”; intersection means “both”; complement means “does not happen”.",
    "statement": "For events $E,F$, $E\\cup F$ means at least one happens, $E\\cap F$ means both happen, and $E^c$ means $E$ does not happen. If $E\\cap F=\\varnothing$, they cannot happen together (mutually exclusive). If $E\\subseteq F$, every result in $E$ is also in $F$. De Morgan’s rules translate “none happen” and “not all happen”: $(\\cup_iE_i)^c=\\cap_iE_i^c$ and $(\\cap_iE_i)^c=\\cup_iE_i^c$.",
    "intuition": "For events, union means “E or F,” intersection means “both E and F,” and complement means “not E.” If E is “bus is late” and F is “it rains,” De Morgan’s rule says “neither late nor rain” means “not late and not rain.”",
    "needs": [
      "c.prob.2.2.1"
    ],
    "traps": [
      "“Or” in probability is inclusive: $E\\cup F$ includes the case where both occur.",
      "Mutually exclusive means disjoint; it does not mean statistically independent."
    ],
    "cards": [
      {
        "q": "State De Morgan’s laws for a sequence of events.",
        "a": "$(\\cup_i E_i)^c=\\cap_i E_i^c$ and $(\\cap_i E_i)^c=\\cup_i E_i^c$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.2, event operations and De Morgan laws, PDF pp. 43–47."
  },
  {
    "id": "c.prob.2.3.1",
    "sec": "2.3",
    "kind": "definition",
    "tier": "core",
    "title": "Axioms of probability",
    "oneLine": "Probabilities lie between zero and one, total one, and add for events that cannot happen together.",
    "statement": "The probability rules are: (1) $0\\le P(E)\\le1$; (2) $P(S)=1$, since some possible result must occur; (3) if events never overlap, add their probabilities. This last rule also works for a list $E_1,E_2,\\ldots$ that continues forever: $P(\\cup_{i=1}^{\\infty}E_i)=\\sum_{i=1}^{\\infty}P(E_i)$. Here “never overlap” means $E_i\\cap E_j=\\varnothing$ whenever $i\\ne j$.",
    "intuition": "The probability rules keep every event’s chance between 0 and 1, make the whole sample space certain, and let us add chances for alternatives that cannot happen together. For example, a single card cannot be both a heart and a spade, so those two chances add.",
    "needs": [
      "c.prob.2.2.1"
    ],
    "traps": [
      "Axiom 3 requires disjoint events; arbitrary event probabilities cannot simply be added.",
      "Axiom 3 is countable additivity, not just finite additivity."
    ],
    "cards": [
      {
        "q": "State the three probability axioms.",
        "a": "$0\\le P(E)\\le1$; $P(S)=1$; and for pairwise disjoint $E_i$, $P(\\cup_i E_i)=\\sum_iP(E_i)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.3, three axioms, PDF pp. 48–49."
  },
  {
    "id": "c.prob.2.3.2",
    "sec": "2.3",
    "kind": "corollary",
    "tier": "core",
    "title": "Finite additivity and the null event",
    "oneLine": "An impossible event has probability zero; finitely many separate cases add.",
    "statement": "The rules force $P(\\varnothing)=0$. For a finite list of events that cannot happen together, $P(\\cup_{i=1}^nE_i)=\\sum_{i=1}^nP(E_i)$. To get this from the rule for an infinite list, add empty events after the first $n$ events; these add zero.",
    "intuition": "The impossible event has chance zero, and chances add when events cannot overlap. “A roll is 1” and “a roll is 2” are disjoint, so either result has chance 1/6+1/6. In an infinite experiment, a nonempty event can still have probability zero, so “zero chance” need not mean “no possible outcome.”",
    "needs": [
      "c.prob.2.3.1"
    ],
    "traps": [
      "The event $\\varnothing$ has probability zero, but an event of probability zero need not be empty in an infinite model."
    ],
    "proof": {
      "idea": "Add empty events to a list; they cannot change which results the list contains.",
      "why": "The infinite-sum probability rule applies when no result belongs to two events in the list.",
      "rungs": [
        {
          "why": "The union of S followed by empty events is S.",
          "m": "1=P(S)=P(S)+\\sum_{i=2}^{\\infty}P(\\varnothing)",
          "meaning": "The equality is valid by countable additivity."
        },
        {
          "why": "All probabilities are nonnegative, so the remaining sum must vanish.",
          "m": "P(\\varnothing)=0",
          "meaning": "In particular its first term is zero."
        },
        {
          "why": "Append empty events to any finite nonoverlapping list.",
          "m": "P(\\cup_{i=1}^{n}E_i)=\\sum_{i=1}^{n}P(E_i)",
          "meaning": "The added terms contribute zero."
        }
      ],
      "ends": "Null-event probability zero and finite additivity."
    },
    "cards": [
      {
        "q": "What is $P(\\varnothing)$, and how does finite additivity follow?",
        "a": "$P(\\varnothing)=0$; pad any finite disjoint collection by empty events and apply countable additivity.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.3, derivation following Axiom 3, PDF p. 49."
  },
  {
    "id": "c.prob.2.4.1",
    "sec": "2.4",
    "kind": "theorem",
    "tier": "core",
    "title": "Complement rule and monotonicity",
    "oneLine": "“Does not happen” has the leftover probability; adding possible outcomes cannot reduce probability.",
    "statement": "An event and its opposite cover all results, so $P(E^c)=1-P(E)$. If every result in $E$ is also in $F$ ($E\\subseteq F$), then $P(E)\\le P(F)$. To keep only the part of $E$ outside $F$, subtract their overlap: $P(E\\setminus F)=P(E)-P(E\\cap F)$.",
    "intuition": "An event and “it did not happen” split all possibilities in two, so their chances total 1. If getting 90 or more is one way to pass, then the chance of 90-or-more cannot exceed the chance of passing by any score.",
    "needs": [
      "c.prob.2.3.1"
    ],
    "traps": [
      "The complement is relative to the chosen sample space.",
      "Monotonicity follows from disjoint additivity and nonnegativity; inclusion alone is not an assertion of independence."
    ],
    "proof": {
      "idea": "Partition S into E and E complement; split F into E and its remainder when E is contained in F.",
      "why": "The component events are nonoverlapping, allowing direct additivity.",
      "rungs": [
        {
          "why": "Use $S=E\\cup E^c$ as a nonoverlapping union.",
          "m": "1=P(S)=P(E)+P(E^c)",
          "meaning": "This gives the complement probability."
        },
        {
          "why": "Write $F=E\\cup(F\\setminus E)$ for $E\\subseteq F$.",
          "m": "P(F)=P(E)+P(F\\setminus E)",
          "meaning": "The extra region has nonnegative probability."
        }
      ],
      "ends": "$P(E^c)=1-P(E)$ and $P(E)\\le P(F)$. "
    },
    "cards": [
      {
        "q": "State the complement and monotonicity rules.",
        "a": "$P(E^c)=1-P(E)$; if $E\\subseteq F$, then $P(E)\\le P(F)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.4, Propositions 4.1–4.2, PDF p. 51."
  },
  {
    "id": "c.prob.2.4.2",
    "sec": "2.4",
    "kind": "theorem",
    "tier": "core",
    "title": "Inclusion–exclusion",
    "oneLine": "Add the two probabilities, then subtract the overlap counted twice.",
    "statement": "For two events, $P(E\\cup F)=P(E)+P(F)-P(E\\cap F)$. For $n$ events, add the individual probabilities, subtract all overlaps of two events, add overlaps of three, and continue with alternating signs. The last term is $(-1)^{n+1}P(E_1\\cap\\cdots\\cap E_n)$. These corrections make each result count exactly once.",
    "intuition": "When you add the chances of “takes the bus” and “takes the train,” anyone who uses both got counted twice. Subtract that overlap once. With more events, the same correction continues through triple overlaps, four-way overlaps, and so on.",
    "needs": [
      "c.prob.2.4.1"
    ],
    "traps": [
      "For disjoint events the intersection term vanishes. For overlapping events, plain addition double-counts shared outcomes.",
      "For exactly one of E,F, use $P(E)+P(F)-2P(EF)$; this differs from the union."
    ],
    "proof": {
      "idea": "Split the union into nonoverlapping regions or count each outcome according to how many events contain it.",
      "why": "A nonoverlapping split lets the axioms add probabilities without overlap.",
      "rungs": [
        {
          "why": "Decompose $E\\cup F$ into $E$ and the part of F outside E.",
          "m": "P(E\\cup F)=P(E)+P(F\\setminus E)",
          "meaning": "These pieces are nonoverlapping."
        },
        {
          "why": "Decompose F into its overlap with E and its outside part.",
          "m": "P(F)=P(E\\cap F)+P(F\\setminus E)",
          "meaning": "Rearrange to replace the outside part."
        },
        {
          "why": "Suppose one result belongs to exactly $k$ of the events. It appears $k$ times in the single-event sum, $\\binom k2$ times in the subtracted pair sum, and so on.",
          "m": "\\sum_{j=1}^{k}(-1)^{j+1}\\binom{k}{j}=1",
          "meaning": "Expand $(1-1)^k=0$ and move its first term, 1, to the other side. The remaining alternating sum equals 1, so that result is counted once."
        }
      ],
      "ends": "Two-event and finite inclusion–exclusion identities."
    },
    "cards": [
      {
        "q": "State inclusion–exclusion for two events.",
        "a": "$P(E\\cup F)=P(E)+P(F)-P(E\\cap F)$.",
        "kind": "state"
      },
      {
        "q": "What sign pattern occurs in finite inclusion–exclusion?",
        "a": "Add singles, subtract pairs, add triples, and continue alternating through the full intersection with sign $(-1)^{n+1}$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.4, Propositions 4.3–4.4, PDF pp. 51–54."
  },
  {
    "id": "c.prob.2.5.1",
    "sec": "2.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Uniform finite sample spaces",
    "oneLine": "With equally likely results, probability is the fraction that answers your question.",
    "statement": "Suppose there are $N$ possible results, all equally likely. Their probabilities add to one, so each has probability $1/N$. An event $E$ containing $|E|$ results has $P(E)=|E|/|S|$. You may count ordered lists or unordered groups, but you must first check that the results you count really have equal chances.",
    "intuition": "If a fair die has six faces, each face gets one-sixth of the chance, so an event containing three faces has chance 3/6. The same fraction works for cards or dice only if the listed elementary outcomes really are equally likely.",
    "needs": [
      "c.prob.2.3.1",
      "c.prob.2.3.2"
    ],
    "traps": [
      "“Randomly selected” must imply a uniform model on the chosen outcome representation.",
      "Ordered and unordered outcome descriptions give matching ratios only when their induced probabilities are uniform."
    ],
    "proof": {
      "idea": "Apply finite additivity to the nonoverlapping individual results.",
      "why": "Every event in a finite space is the union of its individual points.",
      "rungs": [
        {
          "why": "Let the common probability of one result be p and add all N points.",
          "m": "1=P(S)=Np",
          "meaning": "the rule that total probability is one forces the mass at each point."
        },
        {
          "why": "Add probabilities of individual results in E.",
          "m": "P(E)=|E|p=\\frac{|E|}{|S|}",
          "meaning": "Each favorable point contributes the same amount."
        }
      ],
      "ends": "The favorable-outcome ratio for a finite uniform space."
    },
    "cards": [
      {
        "q": "State the probability formula for a finite equiprobable sample space.",
        "a": "$P(E)=|E|/|S|$, since every point has probability $1/|S|$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.5, equally likely sample spaces, PDF pp. 56–57."
  },
  {
    "id": "c.prob.2.6.1",
    "sec": "2.6",
    "kind": "theorem",
    "tier": "extra",
    "title": "Continuity of probability for monotone events",
    "oneLine": "When events keep growing or shrinking, their probabilities approach that of the final event.",
    "statement": "If $E_1\\subseteq E_2\\subseteq\\cdots$, the final event contains every result that eventually enters: $E=\\cup_nE_n$. If $E_1\\supseteq E_2\\supseteq\\cdots$, the final event contains only results that never leave: $E=\\cap_nE_n$. In both cases, $P(E_n)\\to P(E)$ as $n$ grows.",
    "intuition": "Imagine E_n means “the first n coin tosses are all heads.” As n grows, these events shrink toward the outcome “every toss is heads”; their probabilities settle to the probability of that limiting event. For increasing events, each new stage adds a fresh, nonoverlapping piece instead.",
    "needs": [
      "c.prob.2.3.1",
      "c.prob.2.3.2",
      "c.prob.2.4.1"
    ],
    "traps": [
      "The event limit is a union for an increasing sequence and an intersection for a decreasing sequence.",
      "Continuity here needs monotonicity; arbitrary sequences of events need not have convergent probabilities matching a set limit."
    ],
    "proof": {
      "idea": "For growing events, count only the new results added at each stage. For shrinking events, look at the growing complements.",
      "why": "Countable additivity applies to nonoverlapping pieces, not to the original nested sequence.",
      "rungs": [
        {
          "why": "Set $F_1=E_1$ and $F_n=E_n\\setminus E_{n-1}$ for n>1.",
          "m": "E_n=\\bigcup_{i=1}^{n}F_i",
          "meaning": "Each result is counted at the first stage where it enters. The new pieces do not overlap, and the first $n$ pieces make $E_n$."
        },
        {
          "why": "Apply countable additivity to all increments and take partial sums.",
          "m": "P(\\bigcup_iE_i)=\\sum_iP(F_i)=\\lim_nP(E_n)",
          "meaning": "The partial sum is exactly the probability of E_n."
        },
        {
          "why": "For decreasing events, apply the increasing result to complements.",
          "m": "P(E_n)=1-P(E_n^c)\\longrightarrow1-P(\\bigcup_n E_n^c)=P(\\bigcap_nE_n)",
          "meaning": "De Morgan converts the union of complements to the intersection."
        }
      ],
      "ends": "Continuity from below and from above."
    },
    "cards": [
      {
        "q": "State continuity of probability for monotone event sequences.",
        "a": "If $E_n$ increases, $P(E_n)\\to P(\\cup_n E_n)$; if $E_n$ decreases, $P(E_n)\\to P(\\cap_n E_n)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.6, Proposition 6.1 and proof, PDF pp. 65–66."
  },
  {
    "id": "c.prob.2.6.2",
    "sec": "2.6",
    "kind": "theorem",
    "tier": "extra",
    "title": "Consequences for infinite unions and intersections",
    "oneLine": "Adding event probabilities gives an upper bound even when events overlap.",
    "statement": "For any finite or infinite list of events, $P(\\cup_iE_i)\\le\\sum_iP(E_i)$ (the union bound, also called Boole’s inequality). With no overlap, equality holds. There is no equal-chance probability law on a list of individual points that continues forever: a common positive probability would eventually total more than one, and a common zero probability would total zero.",
    "intuition": "For many possible mishaps, adding their chances gives a safe upper bound on the chance that at least one happens, even if they overlap. But for nonoverlapping cases, the sum is exact. You cannot make countably many points all equally likely with one common positive chance: the total would exceed 1.",
    "needs": [
      "c.prob.2.3.1",
      "c.prob.2.3.2"
    ],
    "traps": [
      "The inequality holds without disjointness, but equality generally does not.",
      "Countably many equally likely points cannot each have the same probability while totaling one."
    ],
    "proof": {
      "idea": "Assign each result to the first event containing it. These trimmed events do not overlap.",
      "why": "Trimming an event cannot increase its probability. The trimmed events still cover exactly the same results as the original list.",
      "rungs": [
        {
          "why": "Define $F_1=E_1$ and $F_n=E_n\\setminus\\cup_{i<n}E_i$ for n>1.",
          "m": "F_i\\cap F_j=\\varnothing,\\qquad\\cup_iF_i=\\cup_iE_i",
          "meaning": "Every point in the union is assigned to its first event, so it appears once."
        },
        {
          "why": "Apply countable additivity to the nonoverlapping pieces and use inclusion.",
          "m": "P(\\cup_iE_i)=\\sum_iP(F_i)\\le\\sum_iP(E_i)",
          "meaning": "Since $F_i\\subseteq E_i$, monotonicity gives each termwise bound."
        },
        {
          "why": "For countably many individual results with common mass q, the rule that total probability is one would require the series of q’s to equal one.",
          "m": "\\sum_{i=1}^{\\infty}q=1",
          "meaning": "If q=0 the sum is 0; if q>0 the partial sums eventually exceed 1, a contradiction."
        }
      ],
      "ends": "Boole’s inequality and impossibility of a uniform probability law on a countably infinite set of points."
    },
    "cards": [
      {
        "q": "State Boole’s inequality.",
        "a": "For any countable events $E_i$, $P(\\cup_i E_i)\\le\\sum_iP(E_i)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.6 and Chapter 2 Self-Test Problem 14, PDF pp. 65–66, 79."
  },
  {
    "id": "c.prob.2.7.1",
    "sec": "2.7",
    "kind": "definition",
    "tier": "core",
    "title": "Subjective probability as coherent belief",
    "oneLine": "A personal probability expresses belief, while following the same probability rules.",
    "statement": "A personal or subjective probability measures how strongly someone believes an event will happen, given their information. It must still lie between zero and one, give probability one to all possible results together, and add correctly for events that cannot happen together. When events overlap, subtract the overlap using the same inclusion–exclusion rules.",
    "intuition": "A person’s probability can describe how strongly they believe a claim when they do not know the result yet. The numbers still have to fit together: if “rain” and “no rain” cover every possibility, their assigned chances must add to 1.",
    "needs": [
      "c.prob.2.3.1",
      "c.prob.2.4.2"
    ],
    "traps": [
      "Subjective does not mean arbitrary: inconsistent numbers violate the axioms.",
      "Do not confuse a personal probability for a proposition with an empirically measured relative frequency, even though both follow the axioms."
    ],
    "cards": [
      {
        "q": "What is the subjective interpretation of probability, and what constrains it?",
        "a": "It measures degree of belief in an event; its assignments must still satisfy the probability axioms.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.7, probability as measure of belief, PDF p. 68."
  },
  {
    "id": "c.prob.2.5.2",
    "sec": "2.5",
    "kind": "technique",
    "tier": "core",
    "title": "Changing between ordered and unordered samples",
    "oneLine": "Ignoring draw order preserves equal chances when every group has equally many orders.",
    "statement": "Draw $r$ different objects from $N$, choosing uniformly from those remaining at each step. Every ordered list of $r$ draws has the same chance. Each unordered group occurs in exactly $r!$ orders, so every group also has the same chance. You may count in either way as long as numerator and denominator use the same kind of outcome.",
    "intuition": "If you draw 3 different cards without replacement and then ignore their order, every 3-card hand has the same number of possible draw orders: 3!. So all hands remain equally likely. This would fail if some hands had more ways to be produced than others.",
    "needs": [
      "c.prob.1.4.1",
      "c.prob.2.5.1"
    ],
    "traps": [
      "Do not infer uniform subsets merely from the phrase “randomly selected” without checking the mechanism.",
      "For distinguishable balls, counting color patterns as if equally likely can be wrong when patterns have different multiplicities."
    ],
    "proof": {
      "idea": "Collect all ordered draws giving the same group of objects.",
      "why": "Every subset has exactly r! permutations.",
      "rungs": [
        {
          "why": "Count ordered draws without replacement.",
          "m": "N(N-1)\\cdots(N-r+1)",
          "meaning": "Each ordered ordered list is one equally likely elementary outcome."
        },
        {
          "why": "Each fixed subset has r! orderings.",
          "m": "\\frac{N!}{(N-r)!}=r!\\binom Nr",
          "meaning": "Each group appears in exactly the same number of ordered lists, namely $r!$."
        },
        {
          "why": "Equal-size unions of equally likely points have equal probability.",
          "m": "P(\\text{each subset})=\\frac{r!}{N(N-1)\\cdots(N-r+1)}=\\frac1{\\binom Nr}",
          "meaning": "The resulting list of unordered groups is uniform."
        }
      ],
      "ends": "Uniformity on r-subsets."
    },
    "cards": [
      {
        "q": "Why are r-subsets uniform when drawing uniformly without replacement and ignoring order?",
        "a": "Each r-subset corresponds to exactly r! equally likely ordered draws, so every subset has the same probability.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.5, discussion before Example 5c and Example 5b, PDF pp. 56–57."
  },
  {
    "id": "c.prob.2.7.2",
    "sec": "2.7",
    "kind": "example",
    "tier": "core",
    "title": "Comparing wagers under personal probabilities",
    "oneLine": "For separate possible winners, add the probabilities of the winners covered by the bet.",
    "statement": "Suppose exactly one of $H_1,\\ldots,H_n$ wins, and its personal probability is $p_i=P(H_i)$. A bet covering the winners in a list $I$ succeeds with probability $\\sum_{i\\in I}p_i$. If two bets pay the same amount and cost the same, their chances of winning can be compared directly.",
    "intuition": "For a fair even-money bet on one of several possible winners, add the personal chances assigned to those winners. If the covered winners cannot occur together, the sum is the chance the bet wins; the bet still depends on the stated belief model.",
    "needs": [
      "c.prob.2.3.1",
      "c.prob.2.7.1"
    ],
    "traps": [
      "Only disjoint winner events may be added directly.",
      "At even money, higher success probability means higher expected payoff only when win and loss amounts are equal."
    ],
    "cards": [
      {
        "q": "How is the personal probability of a wager on one of several mutually exclusive winners computed?",
        "a": "Add the personal probabilities of the winner events covered by the wager.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10e, §2.7, Example 7a, PDF p. 68."
  }
]
);
