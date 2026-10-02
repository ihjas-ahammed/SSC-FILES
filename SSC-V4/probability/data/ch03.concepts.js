if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }
CONCEPTS.push(...
[
  {
    "id": "c.prob.3.2.1",
    "sec": "3.2",
    "kind": "definition",
    "tier": "core",
    "title": "Conditional probability as a reduced model",
    "oneLine": "“Given F” means keep only outcomes where F happens, then recalculate the chance.",
    "statement": "Suppose event $F$ has positive probability. Among the outcomes in $F$, the fraction of probability also belonging to $E$ is $P(E\\mid F)=P(E\\cap F)/P(F)$. Here $E\\cap F$ means both events happen. If all original outcomes are equally likely, this is $|E\\cap F|/|F|$: favorable remaining outcomes divided by all remaining outcomes.",
    "intuition": "“Given that the bus arrived” means cross off every outcome where the bus did not arrive, then look only at what remains. Within that smaller set, count how often the event of interest also happened and divide by the remaining total chance.",
    "needs": [],
    "traps": [
      "The denominator is $P(F)$, the event after “given”; conditioning on an event of probability 0 is not defined by this formula.",
      "“At least one” information does not make the remaining event descriptions equally likely: retain the original point probabilities."
    ],
    "cards": [
      {
        "q": "State the definition of $P(E\\mid F)$.",
        "a": "$P(E\\mid F)=P(E\\cap F)/P(F)$, provided $P(F)>0$.",
        "kind": "state"
      },
      {
        "q": "What is the equally likely finite-space version?",
        "a": "$|E\\cap F|/|F|$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, A First Course in Probability, 10th ed., §3.2, PDF pp. 82–83 (source: sources/chapters/ch03.pdf; local transcription: ch03.txt)."
  },
  {
    "id": "c.prob.3.2.2",
    "sec": "3.2",
    "kind": "theorem",
    "tier": "core",
    "title": "Multiplication rule and chain rule",
    "oneLine": "For several events in sequence, multiply each next-event chance given what has already happened.",
    "statement": "The chance that both $E$ and $F$ happen is $P(E\\cap F)=P(F)P(E\\mid F)$ when $P(F)>0$. For a longer sequence, $P(\\cap_{i=1}^nE_i)=P(E_1)\\prod_{k=2}^nP(E_k\\mid E_1\\cap\\cdots\\cap E_{k-1})$. Each factor is the chance of the next event after all earlier events have happened. Each conditioning event must have positive probability.",
    "intuition": "For a sequence like “draw a red marble, then another red,” the chance of the whole sequence is the first chance times the chance of red on the next draw given what the first draw did. After taking a marble out, the jar has changed, so the second chance changes too.",
    "needs": [
      "c.prob.3.2.1"
    ],
    "traps": [
      "The factors are conditional on the entire preceding history; replacing them by unconditional probabilities requires independence.",
      "A zero-probability prefix makes the corresponding conditional factor undefined; use the intersection directly or handle that branch separately."
    ],
    "cards": [
      {
        "q": "State the chain rule for three events.",
        "a": "$P(ABC)=P(A)P(B\\mid A)P(C\\mid AB)$ when the conditional probabilities are defined.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "For several events in sequence, multiply each next-event chance given what has already happened.",
      "why": "Each equation below translates a separate-case or conditional-chance step into symbols.",
      "rungs": [
        {
          "why": "Start by writing “all n events” as a conditional chance times the chance of the first n−1.",
          "m": "P(E_1\\cdots E_n)=P(E_1\\cdots E_n\\mid E_1\\cdots E_{n-1})P(E_1\\cdots E_{n-1})"
        },
        {
          "why": "Once the first n−1 events are known, only the last event still needs to happen.",
          "m": "P(E_1\\cdots E_n\\mid E_1\\cdots E_{n-1})=P(E_n\\mid E_1\\cdots E_{n-1})"
        },
        {
          "why": "Apply the same rule to the shorter list, continuing until only the first event remains.",
          "m": "P(\\cap_iE_i)=P(E_1)\\prod_{k=2}^nP(E_k\\mid E_1\\cap\\cdots\\cap E_{k-1})"
        }
      ],
      "ends": "For n=2 this is the ordinary multiplication rule; for n=3 it reads $P(ABC)=P(A)P(B|A)P(C|AB)$. "
    },
    "provenance": "Ross, 10th ed., §3.2, PDF pp. 82–84; chain-rule discussion and examples 2e–2g."
  },
  {
    "id": "c.prob.3.2.3",
    "sec": "3.2",
    "kind": "technique",
    "tier": "core",
    "title": "Reduced sample space and sequential sampling",
    "oneLine": "Cross out outcomes that contradict the information, and keep the original relative weights.",
    "statement": "If a finite list of outcomes is equally likely and we learn $F$ happened, its remaining $|F|$ outcomes each have chance $1/|F|$. If draws are made one after another, the next draw uses the contents left after the previous draws. Multiply these conditional chances; replacing a ball and keeping a ball out give different next-draw models.",
    "intuition": "If all outcomes started equally likely, learning that F happened leaves the outcomes inside F equally likely. In a no-replacement draw, update the contents after every draw; the jar you face on draw two is not the jar you started with.",
    "needs": [
      "c.prob.3.2.1",
      "c.prob.3.2.2"
    ],
    "traps": [
      "With replacement and without replacement have different conditional probabilities.",
      "A condition on the final sample may make positions dependent even when the original draws were exchangeable."
    ],
    "cards": [
      {
        "q": "How do you compute a conditional probability in a uniform finite space?",
        "a": "Count favorable outcomes inside the conditioning event and divide by the number of outcomes in that event.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §3.2, PDF pp. 82–84, examples 2b, 2c, 2e, 2g."
  },
  {
    "id": "c.prob.3.3.1",
    "sec": "3.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Law of total probability",
    "oneLine": "Split a question into separate cases, calculate each case’s contribution, and add.",
    "statement": "Suppose $F_1,\\ldots,F_n$ are separate cases covering all possible outcomes: exactly one happens. This is called a partition. If every case has positive probability, $P(E)=\\sum_iP(E\\mid F_i)P(F_i)$. For just $F$ and “not $F$,” $P(E)=P(E\\mid F)P(F)+P(E\\mid F^c)P(F^c)$. A case with probability zero contributes zero and can be left out.",
    "intuition": "Break the ways an event can happen into separate cases that cover every possibility. For example, a package might come from one of two factories; add “from this factory and defective” across factories to get the overall defective chance.",
    "needs": [
      "c.prob.3.2.1"
    ],
    "traps": [
      "The cases must be exhaustive and mutually exclusive.",
      "Weights are prior case probabilities, not the conditional case probabilities after observing E."
    ],
    "cards": [
      {
        "q": "State the law of total probability for a finite partition.",
        "a": "$P(E)=\\sum_iP(E|F_i)P(F_i)$.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Split a question into separate cases, calculate each case’s contribution, and add.",
      "why": "Each equation below translates a separate-case or conditional-chance step into symbols.",
      "rungs": [
        {
          "why": "Every outcome in E belongs to exactly one of the separate cases F_i.",
          "m": "E=\\bigcup_i(E\\cap F_i)"
        },
        {
          "why": "Because the pieces cannot happen together, their probabilities add.",
          "m": "P(E)=\\sum_iP(E\\cap F_i)"
        },
        {
          "why": "Each piece requires its case to happen and then E to happen within that case. Multiply those two chances.",
          "m": "P(E)=\\sum_iP(E|F_i)P(F_i)"
        }
      ],
      "ends": "For two cases, the formula is the familiar weighted average across F and its complement."
    },
    "provenance": "Ross, 10th ed., §3.3, PDF pp. 85–86, equation (3.1) and examples 3a–3c."
  },
  {
    "id": "c.prob.3.3.2",
    "sec": "3.3",
    "kind": "theorem",
    "tier": "core",
    "title": "Bayes formula",
    "oneLine": "To work backward from evidence, compare how much each possible cause contributes to it.",
    "statement": "Suppose exactly one of the cases $F_i$ happens, each with positive probability, and evidence $E$ has positive probability. Bayes’ formula is $P(F_j\\mid E)=\\dfrac{P(E\\mid F_j)P(F_j)}{\\sum_iP(E\\mid F_i)P(F_i)}$. The top is the chance of both the chosen case and the evidence. The bottom is the evidence’s total chance, adding every possible case.",
    "intuition": "Bayes’ rule works backward from an observation to its possible causes. A positive test may be much more likely if someone is ill, but if the illness is rare, many positive results can still come from the much larger healthy group.",
    "needs": [
      "c.prob.3.2.1",
      "c.prob.3.3.1"
    ],
    "traps": [
      "Do not confuse $P(E|F)$ (likelihood) with $P(F|E)$ (posterior).",
      "The denominator must include all partition cases capable of producing the observed evidence."
    ],
    "cards": [
      {
        "q": "Write Bayes formula for a partition with positive-probability cells.",
        "a": "$P(F_j|E)=P(E|F_j)P(F_j)/\\sum_iP(E|F_i)P(F_i)$, when every $P(F_i)>0$ and $P(E)>0$.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "To work backward from evidence, compare how much each possible cause contributes to it.",
      "why": "Each equation below translates a separate-case or conditional-chance step into symbols.",
      "rungs": [
        {
          "why": "Within the evidence E, count the part that also came from F_j.",
          "m": "P(F_j|E)=P(E\\cap F_j)/P(E)"
        },
        {
          "why": "That part requires F_j first, then evidence E; multiply the two chances.",
          "m": "P(E\\cap F_j)=P(E|F_j)P(F_j)"
        },
        {
          "why": "Find all the evidence by adding the contributions from every separate case.",
          "m": "P(E)=\\sum_iP(E|F_i)P(F_i)"
        }
      ],
      "ends": "Substitution yields Bayes formula; the denominator also verifies posterior probabilities sum to one."
    },
    "provenance": "Ross, 10th ed., §3.3, PDF pp. 85–93, equations (3.1)–(3.3) and examples 3a–3o."
  },
  {
    "id": "c.prob.3.3.3",
    "sec": "3.3",
    "kind": "technique",
    "tier": "core",
    "title": "Bayesian updating and evidence",
    "oneLine": "Update a possibility by multiplying its starting chance by how well it predicts the evidence.",
    "statement": "For possible explanations $H_i$ covering all outcomes without overlap, first compute $w_i=P(E\\mid H_i)P(H_i)$. These are contributions to the evidence, rather than final probabilities. Divide each by the total: $P(H_i\\mid E)=w_i/\\sum_jw_j$, provided that total is positive. Starting chances are called prior probabilities; the updated chances are posterior probabilities.",
    "intuition": "Start with how common each explanation was before seeing the evidence. Multiply each starting chance by how likely the evidence would be under that explanation, then rescale the scores so they add to 1.",
    "needs": [
      "c.prob.3.3.2"
    ],
    "traps": [
      "Rare-event tests can produce many false positives even when sensitivity is high.",
      "Sequential evidence needs the correct conditional likelihood under each hypothesis; multiplying marginal likelihoods can be wrong."
    ],
    "cards": [
      {
        "q": "What are the unnormalized posterior weights?",
        "a": "For hypothesis $H_i$, $P(E|H_i)P(H_i)$. Normalize them by their sum.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §3.3, PDF pp. 85–93, examples 3a, 3f, 3h, 3k, 3n."
  },
  {
    "id": "c.prob.3.4.1",
    "sec": "3.4",
    "kind": "definition",
    "tier": "core",
    "title": "Independence of two events",
    "oneLine": "Two events are independent when knowing one occurred does not change the other’s chance.",
    "statement": "Events $E,F$ are independent exactly when $P(E\\cap F)=P(E)P(F)$. If $P(F)>0$, dividing by $P(F)$ gives the equivalent statement $P(E\\mid F)=P(E)$. Use the product definition when an event has probability zero, since its conditional probability would be undefined.",
    "intuition": "Two events are independent when learning one gives no change to the chance of the other. For separate fair coin tosses, the first toss being heads does not change the chance that the second is heads.",
    "needs": [
      "c.prob.3.2.1"
    ],
    "traps": [
      "Disjoint events with positive probabilities are dependent: one occurring rules out the other.",
      "The conditional-probability equivalence requires a positive conditioning probability; the product definition covers zero-probability events."
    ],
    "cards": [
      {
        "q": "State event independence using an intersection.",
        "a": "$P(E\\cap F)=P(E)P(F)$.",
        "kind": "state"
      },
      {
        "q": "When can independence be written conditionally?",
        "a": "If $P(F)>0$, iff $P(E|F)=P(E)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §3.4, PDF pp. 93–94, definition and examples 4a–4e."
  },
  {
    "id": "c.prob.3.4.2",
    "sec": "3.4",
    "kind": "theorem",
    "tier": "core",
    "title": "Complement closure for independent events",
    "oneLine": "If two events are independent, replacing either with “does not happen” keeps independence.",
    "statement": "If $E,F$ are independent, the pairs $(E,F^c)$, $(E^c,F)$, and $(E^c,F^c)$ are also independent. The superscript $c$ means the event does not happen. For example $P(E\\cap F^c)=P(E)P(F^c)$ and $P(E^c\\cap F^c)=P(E^c)P(F^c)$.",
    "intuition": "If knowing that it rained does not change the chance the bus is late, then knowing that it did not rain does not change it either. Independence keeps working when you switch either event to its opposite.",
    "needs": [
      "c.prob.3.4.1"
    ],
    "traps": [
      "Pairwise independence with two events does not imply that a third event or an intersection of several events is independent.",
      "The complement result is a consequence of the product identity, not a reason to assume independence."
    ],
    "cards": [
      {
        "q": "What does complement closure say?",
        "a": "If E,F are independent, E and $F^c$, $E^c$ and F, and $E^c,F^c$ are also independent.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "If two events are independent, replacing either with “does not happen” keeps independence.",
      "why": "Each equation below translates a separate-case or conditional-chance step into symbols.",
      "rungs": [
        {
          "why": "E happens either with F or without F. These two possibilities are separate.",
          "m": "P(E)=P(EF)+P(EF^c)"
        },
        {
          "why": "Subtract the known chance of both events from E’s whole chance.",
          "m": "P(EF^c)=P(E)-P(E)P(F)"
        },
        {
          "why": "Factor out P(E). The leftover factor is exactly the chance F does not happen.",
          "m": "P(EF^c)=P(E)[1-P(F)]=P(E)P(F^c)"
        }
      ],
      "ends": "Apply the same argument after swapping E and F, then take complements again to obtain all mixed pairs."
    },
    "provenance": "Ross, 10th ed., §3.4, PDF pp. 93–94, Proposition 4.1."
  },
  {
    "id": "c.prob.3.4.3",
    "sec": "3.4",
    "kind": "counterexample",
    "tier": "core",
    "title": "Pairwise independence is weaker than mutual independence",
    "oneLine": "Checking every pair does not check how three or more events work together.",
    "statement": "For mutual independence of $E_1,\\ldots,E_n$, every group of at least two events must satisfy $P(\\cap_{i\\in I}E_i)=\\prod_{i\\in I}P(E_i)$. The index set $I$ chooses the group. For three events, check each pair and also the triple. Pairwise independence checks only the pairs and can miss a dependence involving all three.",
    "intuition": "Checking pairs is like checking that every two students in a group can get along: it does not prove the whole group has no hidden rule. With three coin outcomes formed from two fair tosses, the pairwise relationships can look independent while all three together still obey a constraint.",
    "needs": [
      "c.prob.3.4.1"
    ],
    "traps": [
      "For three events, checking three pairwise equations is insufficient; also check $P(EFG)=P(E)P(F)P(G)$.",
      "“Independent one at a time” is not the same as independent of a joint event."
    ],
    "cards": [
      {
        "q": "What must be checked for mutual independence of three events?",
        "a": "The three pairwise factorizations and the triple factorization $P(EFG)=P(E)P(F)P(G)$.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §3.4, PDF pp. 94–96, examples 4e–4h."
  },
  {
    "id": "c.prob.3.5.1",
    "sec": "3.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Conditional probability is a probability measure",
    "oneLine": "After restricting to known information, the ordinary probability rules still work.",
    "statement": "Fix $F$ with $P(F)>0$ and write $Q(E)=P(E\\mid F)$. Then $Q$ is a probability rule for the updated model: every chance is between 0 and 1, $Q(S)=1$ for the full outcome set $S$, and probabilities of separate cases add: $Q(\\cup_iE_i)=\\sum_iQ(E_i)$ for disjoint events, including a countably infinite list.",
    "intuition": "After fixing what we know, such as “the first roll was even,” probabilities inside that condition follow the usual rules: the possible cases still total 1, and nonoverlapping cases still add.",
    "needs": [
      "c.prob.3.2.1"
    ],
    "traps": [
      "F must have positive probability.",
      "The events $E_i$ must remain mutually exclusive after intersection with F; this follows if they were mutually exclusive originally."
    ],
    "cards": [
      {
        "q": "What are the three axioms for the conditional measure Q?",
        "a": "$0\\le Q(E)\\le1$, $Q(S)=1$, and countable additivity for pairwise disjoint events.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "After restricting to known information, the ordinary probability rules still work.",
      "why": "Each equation below translates a separate-case or conditional-chance step into symbols.",
      "rungs": [
        {
          "why": "The part where both E and F happen lies inside F, so its probability is between zero and P(F). Divide by positive P(F).",
          "m": "\\varnothing\\subseteq E\\cap F\\subseteq F\\Rightarrow0\\le P(E\\cap F)/P(F)\\le1"
        },
        {
          "why": "The full outcome set S and F happen together exactly when F happens.",
          "m": "Q(S)=P(S\\cap F)/P(F)=P(F)/P(F)=1"
        },
        {
          "why": "Restricting separate events to F keeps them separate. Add their original probabilities and divide every term by the same P(F).",
          "m": "Q(\\cup_iE_i)=P((\\cup_iE_i)F)/P(F)=\\sum_iP(E_iF)/P(F)=\\sum_iQ(E_i)"
        }
      ],
      "ends": "Consequently, standard probability formulas may be applied under a fixed condition F."
    },
    "provenance": "Ross, 10th ed., §3.5, PDF pp. 102–103, Proposition 5.1."
  },
  {
    "id": "c.prob.3.5.2",
    "sec": "3.5",
    "kind": "theorem",
    "tier": "core",
    "title": "Total probability and Bayes within a condition",
    "oneLine": "Keep the original information in every case when splitting or updating again.",
    "statement": "Suppose $F$ is known, with $P(F)>0$, and abbreviate $Q(E)=P(E\\mid F)$. For separate cases $E_i$ covering all outcomes, $Q(A)=\\sum_{i:Q(E_i)>0}Q(A\\mid E_i)Q(E_i)$. Here $Q(A\\mid E_i)=P(A\\mid E_i\\cap F)$: both pieces of information stay in the condition. If $Q(A)>0$, $Q(E_i\\mid A)=Q(A\\mid E_i)Q(E_i)/\\sum_{j:Q(E_j)>0}Q(A\\mid E_j)Q(E_j)$ for a positive-probability case. Zero-probability cases contribute zero.",
    "intuition": "Even after you learn F, you can split the remaining possibilities into cases and add their weighted chances. Bayes also works inside this smaller world, as long as the case being conditioned on can actually occur there.",
    "needs": [
      "c.prob.3.5.1",
      "c.prob.3.3.1",
      "c.prob.3.3.2"
    ],
    "traps": [
      "Nested conditioning must respect the conditioning event: $P(A|E_i,F)$ is the natural form.",
      "Do not drop F from the model unless independence justifies doing so."
    ],
    "cards": [
      {
        "q": "Can Bayes and total probability be applied under a fixed condition F?",
        "a": "Yes. The conditional set function $Q(E)=P(E|F)$ is a probability measure when $P(F)>0$; conditional terms still require positive conditioning-event probability.",
        "kind": "state"
      }
    ],
    "proof": {
      "idea": "Keep the original information in every case when splitting or updating again.",
      "why": "Each equation below translates a separate-case or conditional-chance step into symbols.",
      "rungs": [
        {
          "why": "Inside the model where F is known, split A into its separate case pieces. Leave out pieces with zero chance.",
          "m": "Q(A)=\\sum_{i:Q(E_i)>0}Q(A\\cap E_i)"
        },
        {
          "why": "For each remaining piece, multiply the case chance by A’s chance within it, keeping F in the condition.",
          "m": "Q(A\\cap E_i)=Q(A|E_i)Q(E_i)"
        },
        {
          "why": "To find a case’s updated share after A, divide its contribution by the sum of every case’s contribution.",
          "m": "Q(E_i|A)=Q(A|E_i)Q(E_i)/\\sum_{j:Q(E_j)>0}Q(A|E_j)Q(E_j)"
        }
      ],
      "ends": "The conditioning event F remains part of Q throughout; dropping it would require a separate independence argument."
    },
    "provenance": "Ross, 10th ed., §3.5, PDF pp. 102–105, equation (5.1) and examples 5a–5e."
  },
  {
    "id": "c.prob.3.1.1",
    "sec": "3.1",
    "kind": "technique",
    "tier": "core",
    "title": "Model partial information by conditioning",
    "oneLine": "Name what you know and what you want before calculating a chance.",
    "statement": "Let $F$ describe information you know is true and $E$ the event you are asking about. If $P(F)>0$, the updated chance is $P(E\\mid F)=P(E\\cap F)/P(F)$. First name the original possible outcomes, then $F$, then $E$. This prevents confusing “both happen” with “one happens given the other.”",
    "intuition": "When a question gives a clue such as “at least one child is a boy,” write down exactly which family outcomes fit that clue before counting. That small step prevents you from treating outcomes inside the clue as equally likely when they are not.",
    "needs": [],
    "traps": [
      "Do not assume the remaining outcomes are equally likely unless they were equally likely under the original model.",
      "Distinguish the target event from the event supplying the information; the latter belongs in the denominator."
    ],
    "cards": [
      {
        "q": "What are the three events to identify in a conditional-probability model?",
        "a": "The original outcome model, the evidence/conditioning event F, and the target event E.",
        "kind": "state"
      }
    ],
    "provenance": "Ross, 10th ed., §3.1 introduction and §3.2, PDF pp. 81–82."
  }
]
);
