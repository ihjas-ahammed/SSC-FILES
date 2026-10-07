var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];
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
    "provenance": "Ross, A First Course in Probability, 10th ed., §3.2, PDF pp. 82–83 (source: sources/chapters/ch03.pdf; local transcription: ch03.txt).",
    "proof": {
      "idea": "Renormalize the part of the original event inside the known condition.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Suppose event F is known to have occurred and P(F)>0.",
          "m": "$$\\text{remaining outcomes lie in }F$$",
          "meaning": "All outcomes outside F are excluded from the reduced model."
        },
        {
          "why": "The part of target event E still possible is its intersection with F.",
          "m": "$$E\\cap F$$",
          "meaning": "Only outcomes satisfying both requirements count as success now."
        },
        {
          "why": "Divide this original probability by the total remaining probability.",
          "m": "$$P(E\\mid F)=\\frac{P(E\\cap F)}{P(F)}$$",
          "meaning": "This is the definition of conditioning, chosen so the remaining space F has total weight 1."
        },
        {
          "why": "Check that conditioning assigns certainty to F itself.",
          "m": "$$P(F\\mid F)=P(F)/P(F)=1$$",
          "meaning": "The denominator’s role is normalization."
        },
        {
          "why": "For a fair die, let F={2,4,6} and E={4,5,6}.",
          "m": "$$P(E\\mid F)=\\frac{2/6}{3/6}=2/3$$",
          "meaning": "The reduced equally likely list has two successful results, 4 and 6, out of three remaining results."
        }
      ],
      "ends": "The conditional formula is a definition of the reduced model, with normalization explained and checked."
    }
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
      "idea": "Rearrange the definition of conditional probability, then repeat it.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For P(F)>0, conditional probability is the fraction of F also in E.",
          "m": "$$P(E\\mid F)=\\frac{P(E\\cap F)}{P(F)}$$",
          "meaning": "The denominator is the probability of the reduced sample space."
        },
        {
          "why": "Multiply both sides by the positive denominator.",
          "m": "$$P(E\\cap F)=P(F)P(E\\mid F)$$",
          "meaning": "This is the two-event multiplication rule; it does not assume independence."
        },
        {
          "why": "For three events, condition the last event on both earlier events.",
          "m": "$$P(E_1\\cap E_2\\cap E_3)=P(E_1\\cap E_2)P(E_3\\mid E_1\\cap E_2)$$",
          "meaning": "This requires the earlier intersection to have positive probability."
        },
        {
          "why": "Apply the two-event rule to that earlier intersection.",
          "m": "$$P(E_1\\cap E_2)=P(E_1)P(E_2\\mid E_1)$$",
          "meaning": "Substitute this expression into the preceding equation."
        },
        {
          "why": "The three-event expansion now lists all sequential conditional chances.",
          "m": "$$P(E_1\\cap E_2\\cap E_3)=P(E_1)P(E_2\\mid E_1)P(E_3\\mid E_1\\cap E_2)$$",
          "meaning": "The third factor must retain both earlier conditions."
        },
        {
          "why": "Repeat the same substitution for n events.",
          "m": "$$P\\left(\\bigcap_{i=1}^nE_i\\right)=P(E_1)\\prod_{k=2}^nP\\left(E_k\\mid\\bigcap_{i=1}^{k-1}E_i\\right)$$",
          "meaning": "If an earlier intersection has probability zero, the full intersection has probability zero; do not form an undefined conditional ratio."
        }
      ],
      "ends": "The chain rule is successive conditioning. Independence is needed only when replacing conditional factors by unconditional probabilities."
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
    "provenance": "Ross, 10th ed., §3.2, PDF pp. 82–84, examples 2b, 2c, 2e, 2g.",
    "proof": {
      "idea": "Use the reduced sample space or updated draw pool after each observation.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For a finite equally likely original sample space, condition on a nonempty event F.",
          "m": "$$P(E\\mid F)=\\frac{|E\\cap F|/|S|}{|F|/|S|}$$",
          "meaning": "Insert the equal-likelihood counting probabilities into the conditional ratio."
        },
        {
          "why": "Cancel the common original-space factor.",
          "m": "$$P(E\\mid F)=\\frac{|E\\cap F|}{|F|}$$",
          "meaning": "This justifies counting within a reduced sample space."
        },
        {
          "why": "For sequential draws without replacement, update the pool after the observed draw.",
          "m": "$$P(\\text{marked second}\\mid\\text{marked first})=\\frac{m-1}{N-1}$$",
          "meaning": "One marked object and one total object have been removed."
        },
        {
          "why": "Multiply by the first-draw chance to compute both marked.",
          "m": "$$P(\\text{both marked})=\\frac mN\\frac{m-1}{N-1}$$",
          "meaning": "The multiplication rule uses a conditional second factor."
        },
        {
          "why": "If draws are with replacement and independently repeated, restore the original pool.",
          "m": "$$P(\\text{both marked})=(m/N)^2$$",
          "meaning": "This different formula follows only from the changed sampling rule."
        }
      ],
      "ends": "Conditioning changes the allowed outcomes or remaining population; the next denominator must describe that updated model."
    }
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
      "idea": "Split the target event among all the possible cases.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let F_i be disjoint cases covering S, with P(F_i)>0 for the cases used.",
          "m": "$$\\bigcup_iF_i=S,\\quad F_i\\cap F_j=\\varnothing\\ (i\\ne j)$$",
          "meaning": "Such a list is a partition: every outcome has exactly one case."
        },
        {
          "why": "Keep only the outcomes where the target event E also occurs.",
          "m": "$$E=\\bigcup_i(E\\cap F_i)$$",
          "meaning": "Every outcome of E still has one and only one case."
        },
        {
          "why": "These restricted pieces are disjoint, so add their probabilities.",
          "m": "$$P(E)=\\sum_iP(E\\cap F_i)$$",
          "meaning": "This addition requires disjointness, not independence."
        },
        {
          "why": "Use the conditional-probability definition within case F_i.",
          "m": "$$P(E\\mid F_i)=\\frac{P(E\\cap F_i)}{P(F_i)}$$",
          "meaning": "The probability inside a case can differ from the overall probability."
        },
        {
          "why": "Multiply by P(F_i) and replace each joint probability in the sum.",
          "m": "$$P(E)=\\sum_iP(E\\mid F_i)P(F_i)$$",
          "meaning": "Each contribution is case probability times success probability within that case."
        },
        {
          "why": "For two cases the formula is an ordinary weighted average.",
          "m": "$$P(E)=P(E\\mid F)P(F)+P(E\\mid F^c)P(F^c)$$",
          "meaning": "Zero-probability cases contribute zero joint probability and are omitted to avoid undefined conditionals."
        }
      ],
      "ends": "The law of total probability adds contributions from exhaustive, disjoint cases."
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
      "idea": "Compute the share of the observed evidence contributed by a particular case.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Use disjoint exhaustive cases F_i, and suppose evidence E has P(E)>0.",
          "m": "$$P(F_j\\mid E)=\\frac{P(F_j\\cap E)}{P(E)}$$",
          "meaning": "This is the definition of the updated case probability."
        },
        {
          "why": "Intersections are symmetric: both events happening is the same regardless of order.",
          "m": "$$F_j\\cap E=E\\cap F_j$$",
          "meaning": "We may compute the same joint probability in the other conditional direction."
        },
        {
          "why": "The multiplication rule gives the contribution from case j.",
          "m": "$$P(E\\cap F_j)=P(E\\mid F_j)P(F_j)$$",
          "meaning": "The factors are the likelihood of the evidence and the prior case probability."
        },
        {
          "why": "Add the contributions from all cases to get all evidence.",
          "m": "$$P(E)=\\sum_iP(E\\mid F_i)P(F_i)$$",
          "meaning": "This is total probability, derived by splitting E into disjoint pieces."
        },
        {
          "why": "Substitute the numerator and denominator into the first ratio.",
          "m": "$$P(F_j\\mid E)=\\frac{P(E\\mid F_j)P(F_j)}{\\sum_iP(E\\mid F_i)P(F_i)}$$",
          "meaning": "The denominator is positive by the assumption on E."
        },
        {
          "why": "All updated case shares add to 1 because their numerators sum to the denominator.",
          "m": "$$\\sum_jP(F_j\\mid E)=1$$",
          "meaning": "Bayes’ formula normalizes the evidence contributions rather than reversing a conditional by guesswork."
        }
      ],
      "ends": "A case’s posterior is its contribution to the evidence divided by all evidence contributions."
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
    "provenance": "Ross, 10th ed., §3.3, PDF pp. 85–93, examples 3a, 3f, 3h, 3k, 3n.",
    "proof": {
      "idea": "Turn prior and likelihood information into normalized evidence contributions.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "For each case F_i assign prior probability π_i and evidence likelihood ℓ_i.",
          "m": "$$\\pi_i=P(F_i),\\quad\\ell_i=P(E\\mid F_i)$$",
          "meaning": "Cases must be disjoint and exhaustive for this sum calculation."
        },
        {
          "why": "Multiply the prior by its within-case evidence chance.",
          "m": "$$w_i=\\pi_i\\ell_i=P(F_i\\cap E)$$",
          "meaning": "Each w_i is the case’s contribution to observed evidence."
        },
        {
          "why": "Add all case contributions.",
          "m": "$$P(E)=\\sum_iw_i$$",
          "meaning": "Total probability explains this evidence denominator."
        },
        {
          "why": "Provided that sum is positive, divide each contribution by it.",
          "m": "$$P(F_i\\mid E)=\\frac{w_i}{\\sum_jw_j}$$",
          "meaning": "Bayes’ formula is normalization of the evidence weights."
        },
        {
          "why": "For two cases of positive prior and posterior probabilities, divide their posterior probabilities.",
          "m": "$$\\frac{P(F_1\\mid E)}{P(F_2\\mid E)}=\\frac{\\pi_1}{\\pi_2}\\frac{\\ell_1}{\\ell_2}$$",
          "meaning": "The common evidence denominator cancels; posterior odds equal prior odds times the likelihood ratio."
        }
      ],
      "ends": "Updating weights requires all evidence contributions, including contributions from alternative cases."
    }
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
    "provenance": "Ross, 10th ed., §3.4, PDF pp. 93–94, definition and examples 4a–4e.",
    "proof": {
      "idea": "Distinguish the independence assumption from its conditional consequence.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Independence of E and F is defined by factorization of their joint probability.",
          "m": "$$P(E\\cap F)=P(E)P(F)$$",
          "meaning": "This equation is a property to check or a justified model assumption."
        },
        {
          "why": "If P(F)>0, write the conditional-probability ratio.",
          "m": "$$P(E\\mid F)=\\frac{P(E\\cap F)}{P(F)}$$",
          "meaning": "Division is valid only for a positive conditioning probability."
        },
        {
          "why": "Substitute the independence product and cancel P(F).",
          "m": "$$P(E\\mid F)=P(E)$$",
          "meaning": "Knowing F does not change E’s chance."
        },
        {
          "why": "Conversely, multiply this unchanged-chance equation by P(F).",
          "m": "$$P(E\\mid F)=P(E)\\ \\Longrightarrow\\ P(E\\cap F)=P(E)P(F)$$",
          "meaning": "Thus the conditional characterization is equivalent when its denominator exists."
        },
        {
          "why": "Disjoint positive-probability events fail the product condition.",
          "m": "$$P(E\\cap F)=0<P(E)P(F)$$",
          "meaning": "Mutually exclusive positive-probability events are dependent, since learning one rules out the other."
        }
      ],
      "ends": "Independence is joint factorization; unchanged conditional probabilities are its consequence when defined."
    }
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
      "idea": "Use subtraction and factoring to extend independence to complements.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume E and F are independent.",
          "m": "$$P(E\\cap F)=P(E)P(F)$$",
          "meaning": "This product equation is the definition, including zero-probability events."
        },
        {
          "why": "Split E according to whether F occurs.",
          "m": "$$E=(E\\cap F)\\cup(E\\cap F^c)$$",
          "meaning": "The pieces are disjoint."
        },
        {
          "why": "Add the two pieces and isolate the second.",
          "m": "$$P(E\\cap F^c)=P(E)-P(E\\cap F)$$",
          "meaning": "This uses finite additivity followed by subtraction."
        },
        {
          "why": "Insert the independence product and factor P(E).",
          "m": "$$P(E\\cap F^c)=P(E)[1-P(F)]$$",
          "meaning": "The distributive identity a−ab=a(1−b) is high school algebra."
        },
        {
          "why": "Use the complement rule on the bracket.",
          "m": "$$P(E\\cap F^c)=P(E)P(F^c)$$",
          "meaning": "This proves E and F^c are independent."
        },
        {
          "why": "Interchange E and F to obtain independence of E^c and F, then complement F once more.",
          "m": "$$P(E^c\\cap F^c)=P(E^c)P(F^c)$$",
          "meaning": "The same argument applies to the newly established independent pair."
        }
      ],
      "ends": "Independence is preserved when either or both events are replaced by their complements."
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
    "provenance": "Ross, 10th ed., §3.4, PDF pp. 94–96, examples 4e–4h.",
    "proof": {
      "idea": "Check a two-coin example pair by pair, then test the triple intersection.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Take two independent fair coins with four equally likely outcomes.",
          "m": "$$S=\\{HH,HT,TH,TT\\}$$",
          "meaning": "Each complete outcome has probability 1/4."
        },
        {
          "why": "Define A as first coin heads, B as second coin heads, and C as matching coins.",
          "m": "$$A=\\{HH,HT\\},\\quad B=\\{HH,TH\\},\\quad C=\\{HH,TT\\}$$",
          "meaning": "Each event contains two outcomes, so each has probability 1/2."
        },
        {
          "why": "Every pairwise intersection is the singleton HH.",
          "m": "$$P(A\\cap B)=P(A\\cap C)=P(B\\cap C)=1/4$$",
          "meaning": "This equals (1/2)(1/2), so all event pairs are independent."
        },
        {
          "why": "The triple intersection is also HH.",
          "m": "$$P(A\\cap B\\cap C)=1/4$$",
          "meaning": "Once the first two coins are heads, matching is certain, not another independent one-half chance."
        },
        {
          "why": "Mutual independence would require the product of all three individual probabilities.",
          "m": "$$P(A)P(B)P(C)=1/8\\ne1/4$$",
          "meaning": "The triple condition fails despite all pair conditions passing."
        }
      ],
      "ends": "Mutual independence requires every finite subcollection’s intersection probability to factor; checking only pairs is insufficient."
    }
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
      "idea": "Check every probability axiom for the model in which F is known.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Fix an event F with positive probability and define a new event-weight function.",
          "m": "$$Q(E)=\\frac{P(E\\cap F)}{P(F)}$$",
          "meaning": "All original probabilities are measured first, then divided by the same positive number."
        },
        {
          "why": "The restricted event is contained in F.",
          "m": "$$\\varnothing\\subseteq E\\cap F\\subseteq F$$",
          "meaning": "Monotonicity bounds its probability between 0 and P(F)."
        },
        {
          "why": "Divide those bounds by P(F)>0.",
          "m": "$$0\\le Q(E)\\le1$$",
          "meaning": "Division by a positive number preserves inequality signs."
        },
        {
          "why": "The full sample space includes every outcome of F.",
          "m": "$$Q(S)=\\frac{P(S\\cap F)}{P(F)}=1$$",
          "meaning": "This checks normalization in the reduced model."
        },
        {
          "why": "If E_i are disjoint, their restrictions to F are still disjoint.",
          "m": "$$\\left(\\bigcup_iE_i\\right)\\cap F=\\bigcup_i(E_i\\cap F)$$",
          "meaning": "Intersection distributes over union."
        },
        {
          "why": "Use original countable additivity and divide the sum by P(F).",
          "m": "$$Q\\left(\\bigcup_iE_i\\right)=\\frac{\\sum_iP(E_i\\cap F)}{P(F)}=\\sum_iQ(E_i)$$",
          "meaning": "This checks the remaining axiom, so all probability rules apply to Q."
        }
      ],
      "ends": "Conditional probability is a complete probability model when the conditioning event has positive probability."
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
      "idea": "Apply ordinary total probability and Bayes inside a previously restricted model.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Assume P(F)>0 and write Q(A)=P(A given F).",
          "m": "$$Q(A)=\\frac{P(A\\cap F)}{P(F)}$$",
          "meaning": "Q is a probability model by the preceding proof."
        },
        {
          "why": "For a case E_i of positive Q-probability, define conditioning within Q.",
          "m": "$$Q(A\\mid E_i)=\\frac{Q(A\\cap E_i)}{Q(E_i)}$$",
          "meaning": "This is ordinary conditional probability but with Q in place of P."
        },
        {
          "why": "Substitute the two P-ratios and cancel their common denominator.",
          "m": "$$Q(A\\mid E_i)=\\frac{P(A\\cap E_i\\cap F)}{P(E_i\\cap F)}=P(A\\mid E_i\\cap F)$$",
          "meaning": "Learning E_i inside F means keeping both conditions."
        },
        {
          "why": "Split A among disjoint exhaustive cases E_i.",
          "m": "$$Q(A)=\\sum_{i:Q(E_i)>0}Q(A\\mid E_i)Q(E_i)$$",
          "meaning": "Total probability is valid because Q satisfies the axioms."
        },
        {
          "why": "When Q(A)>0, write the reverse conditional ratio.",
          "m": "$$Q(E_j\\mid A)=\\frac{Q(E_j\\cap A)}{Q(A)}$$",
          "meaning": "The joint numerator is Q(A given E_j) times Q(E_j)."
        },
        {
          "why": "Substitute that product and the total-probability denominator.",
          "m": "$$P(E_j\\mid A\\cap F)=\\frac{P(A\\mid E_j\\cap F)P(E_j\\mid F)}{\\sum_iP(A\\mid E_i\\cap F)P(E_i\\mid F)}$$",
          "meaning": "Only positive-probability cases are included; every factor retains the original F condition."
        }
      ],
      "ends": "Bayes and total probability work inside a condition, provided all the relevant conditional denominators are positive."
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
    "provenance": "Ross, 10th ed., §3.1 introduction and §3.2, PDF pp. 81–82.",
    "proof": {
      "idea": "Specify how the information was generated before conditioning on it.",
      "why": "Read each equation together with its reason. Symbols are introduced before they are used; an integral means accumulated area and an expectation means a probability-weighted average.",
      "rungs": [
        {
          "why": "Let A be the event of interest and F the event describing received information.",
          "m": "$$P(A\\mid F)=\\frac{P(A\\cap F)}{P(F)}$$",
          "meaning": "This formula is usable only after the observation event F has been defined precisely and has positive probability."
        },
        {
          "why": "For two fair coins, learning that at least one is heads excludes only TT.",
          "m": "$$F=\\{HH,HT,TH\\}$$",
          "meaning": "The three remaining complete outcomes still have equal conditional probability."
        },
        {
          "why": "Within that information, both heads has one favorable outcome.",
          "m": "$$P(HH\\mid F)=\\frac{1/4}{3/4}=1/3$$",
          "meaning": "The original likelihood factors cancel."
        },
        {
          "why": "Learning instead that the first coin is heads leaves only HH and HT.",
          "m": "$$G=\\{HH,HT\\},\\quad P(HH\\mid G)=\\frac{1/4}{2/4}=1/2$$",
          "meaning": "A more specific observation produces a different reduced model."
        },
        {
          "why": "If information is delivered through a selective reporting procedure, include that procedure’s likelihood.",
          "m": "$$P(A\\mid\\text{report})\\propto P(\\text{report}\\mid A)P(A)$$",
          "meaning": "The proportionality is made into an equality by dividing by the sum of all report contributions, as in Bayes’ formula."
        }
      ],
      "ends": "Partial-information problems depend on the observation or reporting mechanism, not merely on a phrase that sounds similar."
    }
  }
]
);
