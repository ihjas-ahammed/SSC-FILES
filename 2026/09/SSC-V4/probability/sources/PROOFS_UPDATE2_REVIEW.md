# Probability Update 2: explained proofs and derivations

All 93 pre-existing concept proofs have been rewritten. The 68 remaining concept notes now include worked derivations, definition-based consequences, or checked examples. Axioms and distribution/model definitions are identified as assumptions or definitions; they are not claimed to have been proved from algebra.

The live probability app contains 161 concept ladders and 1,070 explained steps across chapters 1–10 and the DA inference bridge. Each step has a reason, a displayed equation, and an explanation of its meaning. The handwritten authoring source is `authoring/proofs_update2.py`; it updates only the probability concept files.

| Module | Concept ladders | Explained steps |
| --- | ---: | ---: |
| Chapter 1 | 11 | 68 |
| Chapter 2 | 13 | 75 |
| Chapter 3 | 12 | 66 |
| Chapter 4 | 25 | 165 |
| Chapter 5 | 16 | 109 |
| Chapter 6 | 20 | 128 |
| Chapter 7 | 18 | 124 |
| Chapter 8 | 13 | 97 |
| Chapter 9 | 10 | 77 |
| Chapter 10 | 9 | 64 |
| DA inference | 14 | 97 |

## Teaching approach

- Define symbols and the experiment before manipulating equations. Show intermediate factor cancellations, event decompositions, conditional denominators, finite-sum expansions, and changes of variable.
- Derive the consecutive-integer square sum from telescoping cubes. Derive geometric moments by a first-trial recursion. Complete squares to minimize prediction error, control-variate variance, and Cantelli bounds. These replace unnecessary differentiation with algebra.
- Explain integrals as accumulated rectangle area. State the power, product, chain and integration-by-parts rules where used. Show Gaussian normalization, beta–gamma normalization, transformation Jacobians, conditional-normal completed squares, order-statistic derivative cancellation, and t-density integration.
- Distinguish exact finite-sample identities, model assumptions, asymptotic approximations, and theorem applications. Full advanced results are presented with explicit prerequisites, rather than described as proofs using only high school mathematics.

## Mathematical corrections

- Hazard survival requires local integrability of the hazard while survival remains positive. The unrelated `E[|g(X)|]` condition was removed.
- The conditional bivariate-normal density calculation requires positive marginal standard deviations and `|ρ|<1`. The `|ρ|=1` case is separately explained as a conditional point mass.
- The general Poisson falling-factorial moment of every positive integer order is derived, as well as the first two moments.

## Advanced prerequisites

Analysis tools used explicitly include Tonelli, dominated/monotone convergence, change-of-variables and MGF/characteristic-function uniqueness. The CLT states where the characteristic-function continuity theorem is needed. The finite-absolute-mean strong-law ladder derives its tail-count bound, telescoping variance bound and averaging lemma; the independent-series convergence theorem remains a named prerequisite.

Additional extension results retain their necessary prerequisites: Poisson restart at random arrival times uses the strong Markov property, normal sample mean/variance independence uses perpendicular normal coordinates, chain asymptotics use finite-state ergodic/convergence theorems, categorical chi-squared references use limit theorems, and operational channel capacity uses the channel coding theorem.

Advanced theorem references consulted: [MIT, Scott Sheffield, CLT lecture](https://math.mit.edu/~sheffield/440/Lecture31.pdf) and [Stanford, Amir Dembo, Probability Theory notes, §2.3](https://stanford.edu/~montanar/TEACHING/Stat310A/lnotes.pdf). The teaching prose and intermediate derivations here are original.

## Rebuild and checks

Run from `SSC-V4/probability`:

```sh
python3 authoring/proofs_update2.py
node tools/audit.js
node tools/check_tex.js
python3 build.py
```

The generator validates complete concept coverage, unique authored IDs and nonempty step fields, and is idempotent. Run it after any earlier generator that rewrites concept files, including `authoring/inference.py`.

Validation performed for this update:

- Existing content audit and TeX gate passed for the complete live pool. Display delimiters ensure the TeX gate checks the proof equations as well as prose formulas.
- All 1,070 proof equations compiled with the same MathJax 3 renderer used by the app; every equation remained present in the shared proof-step component.
- 539 independent small-model mathematical checks passed: exhaustive hypergeometric samples, discrete-uniform moments, shuffle paths, integer allocations, Poisson/Bernoulli coupling, and the Cantelli completed-square identity. These are targeted checks, not a claim of automated verification of every theorem.
- A representative hypergeometric ladder was inspected at desktop and 390-pixel mobile widths; no document-level horizontal overflow occurred.
- All 161 concept IDs, prerequisite links, recall cards and other non-proof metadata were preserved, except for the two reviewed statement corrections listed above. Written/objective/PYQ banks were not rewritten.
- Proof illustration step references were aligned to the expanded ladders. Only the probability live build was rebuilt; stellar maps, both probability study-map directories, their standalone pages, and the shared engine were untouched.
