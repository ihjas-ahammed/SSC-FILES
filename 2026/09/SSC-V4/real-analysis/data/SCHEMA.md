# Real Analysis content schema

Every node keys to **Bartle & Sherbert 4e** numbering. Never to module numbers.
A syllabus is a separate mapping file. This is what lets RA1 / RA2 / GATE / JAM be four
views over one content pool.

## Concept node

```js
{
  id:      'c.5.1.3',        // 'c.' + bartle number. Stable forever.
  bartle:  '5.1.3',          // exact numbering from the book
  sec:     '5.1',
  kind:    'definition',     // definition|theorem|corollary|lemma|example|technique|counterexample
  tier:    'core',           // core = examinable | extra = off end-sem, high GATE/JAM | ext = chapter completeness
  title:   'Sequential Criterion for Continuity',
  oneLine: 'Continuity = every sequence heading to c has images heading to f(c).',

  statement: `...HTML + $TeX$...`,   // the formal statement, stated correctly
  intuition: `...HTML...`,           // plain words FIRST, symbols second

  needs:  ['c.5.1.1','c.3.1.3'],     // prerequisite concept ids. May cross chapters AND courses.
  traps:  [ `...HTML...` ],          // common misconceptions / where marks are lost
  figs:   ['fig.seqcrit'],           // optional figure ids

  proof: {                            // omit entirely if the node has no proof
    idea:  `...HTML...`,              // MAIN IDEA, before any technical step
    why:   `...HTML...`,              // why this approach works at all
    rungs: [                          // ordered steps; the reader guesses each before revealing
      { why:'Why we do this step, in plain words', m:'$$ \\text{the line of maths} $$' },
    ],
    ends:  `...HTML...`               // conclusion / what was actually established
  },

  cards: [                            // retrieval items; drive Tab 3
    { q:'...', a:'...', kind:'state' } // state|recall|apply|trap
  ]
}
```

## School / background node

For prerequisites that come from earlier education, not university maths.

```js
{ id:'s.abs-ineq', tier:'school', kind:'technique',
  title:'Absolute-value inequalities',
  oneLine:'|x−a|<δ is exactly the open interval (a−δ, a+δ).',
  intuition:`...`, needs:[], cards:[...] }
```

## Question node

```js
{
  id:'q.ra2.m1.04', course:'ra2', module:'ra2.m1', marks:5,
  source:'exam-pattern',            // exam-pattern | bartle-exercise
  prompt:`...HTML...`,
  tests:['c.5.3.2','c.5.4.3'],      // THE key edge. Which concepts does this question examine?
  approach:`...HTML...`,            // the recognisable method/pattern, before the algebra
  solution:`...HTML...`,            // full worked solution
  trap:`...HTML...`                 // what goes wrong here
}
```

`tests` is the spine of the whole system: it is inverted at load time so every concept
knows which questions examine it, which is what delivers "if I never reach the questions,
I still covered their knowledge."

## Syllabus mapping (separate file, one per course)

```js
{ id:'ra2', title:'Real Analysis II', code:'MAT5CJ301', sem:'V',
  modules:[ { id:'ra2.m1', n:'I', title:'Continuous Functions', marks:15,
              secs:['5.1','5.2','5.3','5.4','5.5','5.6'] }, ... ] }
```

## Rules for authors

1. **Mathematical correctness outranks everything.** The OCR'd source is noisy
   (`i-`→`≠`, `lR`→`ℝ`, `l la`→`1/a`, `I`→`1`, `<Q`→`ℚ`). Use it for *numbering and
   scope*; restate the mathematics correctly yourself.
2. **Keep Bartle's numbering exactly.** `5.3.7` must be the result Bartle calls 5.3.7.
3. `needs` must be real dependencies, not topic associations. If the proof of X genuinely
   uses Y, list Y. Prefer the most specific node. Cross-course links (RA2 → RA1) and
   school links (→ `s.*`) are the point, not an afterthought.
4. **Proof rungs are steps a learner can guess.** Each rung = one idea. `why` explains the
   motive ("we need an upper bound that doesn't depend on x"), `m` carries the maths.
   Never dump a paragraph proof into one rung.
5. TeX is MathJax: `$inline$` and `$$display$$`. Escape backslashes for JS strings
   (`\\varepsilon`). Prefer `\\varepsilon` over `\\epsilon`.
6. `oneLine` must be genuinely one line and must avoid symbols where words will do.
7. Cards must be answerable from memory. No "Discuss…" prompts.
