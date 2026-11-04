/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 1 — Arithmetic Sequences (സമാന്തരശ്രേണികൾ)
   12 Objective (2 per section) + 6 Written Practice Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Authentic SCERT Kerala SSLC Textbook exercises and exam questions.
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.1.1 Number Patterns & Sequences
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.1.1',
    concept: 'm10.1.1.number-patterns-and-sequences',
    sec: '10.1.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the 6th term of the sequence of triangular numbers: $1, 3, 6, 10, \\dots$?',
    prompt_ml: '$1, 3, 6, 10, \\dots$ എന്ന ത്രികോണ സംഖ്യാശ്രേണിയിലെ 6-ാം പദം എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$15$' },
      { k: 'B', t: '$21$' },
      { k: 'C', t: '$24$' },
      { k: 'D', t: '$28$' }
    ],
    options_ml: [
      { k: 'A', t: '$15$' },
      { k: 'B', t: '$21$' },
      { k: 'C', t: '$24$' },
      { k: 'D', t: '$28$' }
    ],
    answer: 'B',
    solution_en: 'The $n$-th triangular number is given by $x_n = \\frac{n(n + 1)}{2}$. For $n = 6$: $x_6 = \\frac{6 \\times 7}{2} = 21$.',
    solution_ml: '$n$-ാം ത്രികോണ സംഖ്യ $x_n = \\frac{n(n + 1)}{2}$ ആണ്. $n = 6$ ആകുമ്പോൾ: $x_6 = \\frac{6 \\times 7}{2} = 21$.',
    tested_en: 'Sequence of triangular numbers formula.',
    tested_ml: 'ത്രികോണ സംഖ്യാശ്രേണിയുടെ സൂത്രവാക്യം.'
  },
  {
    id: 'obj.m10.1.2',
    concept: 'm10.1.1.number-patterns-and-sequences',
    sec: '10.1.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If polygons with $3, 4, 5, 6, \\dots$ sides are arranged in order, what is the sequence of the sums of their inner angles?',
    prompt_ml: '$3, 4, 5, 6, \\dots$ വശങ്ങളുള്ള ബഹുഭുജങ്ങളെ ക്രമമായി എടുത്താൽ അവയുടെ അകത്തെ കോണുകളുടെ തുകയുടെ ശ്രേണി ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$180^\\circ, 360^\\circ, 540^\\circ, 720^\\circ, \\dots$' },
      { k: 'B', t: '$180^\\circ, 270^\\circ, 360^\\circ, 450^\\circ, \\dots$' },
      { k: 'C', t: '$360^\\circ, 540^\\circ, 720^\\circ, 900^\\circ, \\dots$' },
      { k: 'D', t: '$60^\\circ, 90^\\circ, 108^\\circ, 120^\\circ, \\dots$' }
    ],
    options_ml: [
      { k: 'A', t: '$180^\\circ, 360^\\circ, 540^\\circ, 720^\\circ, \\dots$' },
      { k: 'B', t: '$180^\\circ, 270^\\circ, 360^\\circ, 450^\\circ, \\dots$' },
      { k: 'C', t: '$360^\\circ, 540^\\circ, 720^\\circ, 900^\\circ, \\dots$' },
      { k: 'D', t: '$60^\\circ, 90^\\circ, 108^\\circ, 120^\\circ, \\dots$' }
    ],
    answer: 'A',
    solution_en: 'Sum of inner angles of an $n$-sided polygon is $(n - 2) \\times 180^\\circ$. For $n = 3, 4, 5, 6\\dots$, the sums are $180^\\circ, 360^\\circ, 540^\\circ, 720^\\circ, \\dots$.',
    solution_ml: '$n$ വശങ്ങളുള്ള ബഹുഭുജത്തിന്റെ അകത്തെ കോണുകളുടെ തുക $(n - 2) \\times 180^\\circ$ ആണ്. $n = 3, 4, 5, 6\\dots$ നൽകുമ്പോൾ $180^\\circ, 360^\\circ, 540^\\circ, 720^\\circ, \\dots$ ലഭിക്കുന്നു.',
    tested_en: 'Angle sum sequence of polygons.',
    tested_ml: 'ബഹുഭുജങ്ങളുടെ ആന്തരകോണുകളുടെ തുകയുടെ ശ്രേണി.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.2 Arithmetic Sequences & Common Difference
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.1.3',
    concept: 'm10.1.2.arithmetic-sequence-definition',
    sec: '10.1.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the common difference of the arithmetic sequence $15, 11, 7, 3, \\dots$?',
    prompt_ml: '$15, 11, 7, 3, \\dots$ എന്ന സമാന്തരശ്രേണിയുടെ പൊതുവ്യത്യാസം എത്ര?',
    options_en: [
      { k: 'A', t: '$-4$' },
      { k: 'B', t: '$4$' },
      { k: 'C', t: '$-3$' },
      { k: 'D', t: '$3$' }
    ],
    options_ml: [
      { k: 'A', t: '$-4$' },
      { k: 'B', t: '$4$' },
      { k: 'C', t: '$-3$' },
      { k: 'D', t: '$3$' }
    ],
    answer: 'A',
    solution_en: 'Common difference $d = x_2 - x_1 = 11 - 15 = -4$.',
    solution_ml: 'പൊതുവ്യത്യാസം $d = x_2 - x_1 = 11 - 15 = -4$.',
    tested_en: 'Identifying common difference in a decreasing arithmetic sequence.',
    tested_ml: 'കുറഞ്ഞുവരുന്ന സമാന്തരശ്രേണിയുടെ പൊതുവ്യത്യാസം കാണൽ.'
  },
  {
    id: 'obj.m10.1.4',
    concept: 'm10.1.2.arithmetic-sequence-definition',
    sec: '10.1.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Which of the following sequences is an arithmetic sequence?',
    prompt_ml: 'താഴെ പറയുന്നവയിൽ സമാന്തരശ്രേണി ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$\\frac{1}{2}, 1, \\frac{3}{2}, 2, \\dots$' },
      { k: 'B', t: '$1, 4, 9, 16, \\dots$' },
      { k: 'C', t: '$2, 4, 8, 16, \\dots$' },
      { k: 'D', t: '$1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\dots$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{1}{2}, 1, \\frac{3}{2}, 2, \\dots$' },
      { k: 'B', t: '$1, 4, 9, 16, \\dots$' },
      { k: 'C', t: '$2, 4, 8, 16, \\dots$' },
      { k: 'D', t: '$1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\dots$' }
    ],
    answer: 'A',
    solution_en: 'Consecutive differences: $1 - \\frac{1}{2} = \\frac{1}{2}$, $\\frac{3}{2} - 1 = \\frac{1}{2}$, $2 - \\frac{3}{2} = \\frac{1}{2}$. Constant difference $\\frac{1}{2}$ means it is an arithmetic progression.',
    solution_ml: 'തുടർച്ചയായ പദങ്ങളുടെ വ്യത്യാസം $1 - \\frac{1}{2} = \\frac{1}{2}$, $\\frac{3}{2} - 1 = \\frac{1}{2}$ എന്നിങ്ങനെ തുല്യമായതിനാൽ ഇത് സമാന്തരശ്രേണിയാണ്.',
    tested_en: 'Recognizing arithmetic sequences with fractional common difference.',
    tested_ml: 'ഭിന്നസംഖ്യാ പൊതുവ്യത്യാസമുള്ള സമാന്തരശ്രേണി തിരിച്ചറിയൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.3 Position and Term: Algebraic Form
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.1.5',
    concept: 'm10.1.3.algebraic-form-and-remainders',
    sec: '10.1.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the algebraic form ($x_n$) of the arithmetic sequence $4, 7, 10, 13, \\dots$?',
    prompt_ml: '$4, 7, 10, 13, \\dots$ എന്ന സമാന്തരശ്രേണിയുടെ ബീജഗണിത രൂപം ($x_n$) എന്താണ്?',
    options_en: [
      { k: 'A', t: '$3n + 1$' },
      { k: 'B', t: '$3n + 4$' },
      { k: 'C', t: '$4n + 3$' },
      { k: 'D', t: '$3n - 1$' }
    ],
    options_ml: [
      { k: 'A', t: '$3n + 1$' },
      { k: 'B', t: '$3n + 4$' },
      { k: 'C', t: '$4n + 3$' },
      { k: 'D', t: '$3n - 1$' }
    ],
    answer: 'A',
    solution_en: '$a = 4$, $d = 7 - 4 = 3$. Algebraic form $x_n = dn + (a - d) = 3n + (4 - 3) = 3n + 1$.',
    solution_ml: '$a = 4$, $d = 3$. ബീജഗണിത രൂപം $x_n = dn + (a - d) = 3n + (4 - 3) = 3n + 1$.',
    tested_en: 'Finding algebraic form from terms.',
    tested_ml: 'സമാന്തരശ്രേണിയുടെ ബീജഗണിത രൂപം കാണൽ.'
  },
  {
    id: 'obj.m10.1.6',
    concept: 'm10.1.3.algebraic-form-and-remainders',
    sec: '10.1.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If the algebraic form of an arithmetic sequence is $x_n = 5n - 2$, what is its first term and common difference?',
    prompt_ml: 'ഒരു സമാന്തരശ്രേണിയുടെ ബീജഗണിത രൂപം $x_n = 5n - 2$ ആയാൽ അതിന്റെ ആദ്യപദവും പൊതുവ്യത്യാസവും എത്ര?',
    options_en: [
      { k: 'A', t: '$x_1 = 3, d = 5$' },
      { k: 'B', t: '$x_1 = 5, d = 3$' },
      { k: 'C', t: '$x_1 = 5, d = -2$' },
      { k: 'D', t: '$x_1 = 3, d = -2$' }
    ],
    options_ml: [
      { k: 'A', t: '$x_1 = 3, d = 5$' },
      { k: 'B', t: '$x_1 = 5, d = 3$' },
      { k: 'C', t: '$x_1 = 5, d = -2$' },
      { k: 'D', t: '$x_1 = 3, d = -2$' }
    ],
    answer: 'A',
    solution_en: 'In $x_n = pn + q$, $d = p = 5$, and $x_1 = 5(1) - 2 = 3$.',
    solution_ml: '$x_n = pn + q$-ൽ പൊതുവ്യത്യാസം $d = p = 5$, ആദ്യപദം $x_1 = 5(1) - 2 = 3$.',
    tested_en: 'Extracting first term and common difference from algebraic expression.',
    tested_ml: 'ബീജഗണിത രൂപത്തിൽ നിന്ന് ആദ്യപദവും പൊതുവ്യത്യാസവും കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.4 Changes in Position and Terms
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.1.7',
    concept: 'm10.1.4.position-difference-and-term-difference',
    sec: '10.1.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In an arithmetic sequence, the 5th term is 23 and the 9th term is 39. What is the common difference?',
    prompt_ml: 'ഒരു സമാന്തരശ്രേണിയിൽ 5-ാം പദം 23-ഉം 9-ാം പദം 39-ഉം ആയാൽ പൊതുവ്യത്യാസം എത്ര?',
    options_en: [
      { k: 'A', t: '$3$' },
      { k: 'B', t: '$4$' },
      { k: 'C', t: '$5$' },
      { k: 'D', t: '$16$' }
    ],
    options_ml: [
      { k: 'A', t: '$3$' },
      { k: 'B', t: '$4$' },
      { k: 'C', t: '$5$' },
      { k: 'D', t: '$16$' }
    ],
    answer: 'B',
    solution_en: '$d = \\frac{x_9 - x_5}{9 - 5} = \\frac{39 - 23}{4} = \\frac{16}{4} = 4$.',
    solution_ml: '$d = \\frac{x_9 - x_5}{9 - 5} = \\frac{39 - 23}{4} = \\frac{16}{4} = 4$.',
    tested_en: 'Term difference divided by position difference equals common difference.',
    tested_ml: 'പദവ്യത്യാസത്തെ സ്ഥാനവ്യത്യാസം കൊണ്ട് ഹരിച്ച് പൊതുവ്യത്യാസം കാണൽ.'
  },
  {
    id: 'obj.m10.1.8',
    concept: 'm10.1.4.position-difference-and-term-difference',
    sec: '10.1.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Is $100$ a term of the arithmetic sequence $5, 9, 13, 17, \\dots$?',
    prompt_ml: '$5, 9, 13, 17, \\dots$ എന്ന സമാന്തരശ്രേണിയിലെ ഒരു പദമാണോ $100$?',
    options_en: [
      { k: 'A', t: 'No, because $(100 - 5)$ is not divisible by $4$' },
      { k: 'B', t: 'Yes, it is the 25th term' },
      { k: 'C', t: 'Yes, it is the 24th term' },
      { k: 'D', t: 'No, because $100$ is an even number' }
    ],
    options_ml: [
      { k: 'A', t: 'അല്ല, കാരണം $(100 - 5)$ എന്നത് $4$-ന്റെ ഗുണിതമല്ല' },
      { k: 'B', t: 'അതെ, ഇത് 25-ാം പദമാണ്' },
      { k: 'C', t: 'അതെ, ഇത് 24-ാം പദമാണ്' },
      { k: 'D', t: 'അല്ല, കാരണം $100$ ഇരട്ടസംഖ്യയാണ്' }
    ],
    answer: 'A',
    solution_en: '$x_n - a = 100 - 5 = 95$. Since $95$ is not divisible by $4$ ($95 = 23 \\times 4 + 3$), $100$ cannot be a term.',
    solution_ml: '$100 - 5 = 95$. $95$ എന്നത് പൊതുവ്യത്യാസമായ $4$ കൊണ്ട് നിശ്ശേഷം ഹരിക്കാൻ കഴിയില്ല ($95 = 23 \\times 4 + 3$). അതിനാൽ $100$ ഈ ശ്രേണിയിലെ പദമല്ല.',
    tested_en: 'Membership test for an arithmetic sequence.',
    tested_ml: 'ഒരു സംഖ്യ സമാന്തരശ്രേണിയിലെ പദമാണോ എന്ന് പരിശോധിക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.5 Term Relations & Middle Terms
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.1.9',
    concept: 'm10.1.5.term-relations-and-averages',
    sec: '10.1.5',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The 4th term of an arithmetic sequence is $12$. What is the sum of its first 7 terms?',
    prompt_ml: 'ഒരു സമാന്തരശ്രേണിയുടെ 4-ാം പദം $12$ ആണ്. ഇതിന്റെ ആദ്യത്തെ 7 പദങ്ങളുടെ തുക എത്ര?',
    options_en: [
      { k: 'A', t: '$48$' },
      { k: 'B', t: '$72$' },
      { k: 'C', t: '$84$' },
      { k: 'D', t: '$96$' }
    ],
    options_ml: [
      { k: 'A', t: '$48$' },
      { k: 'B', t: '$72$' },
      { k: 'C', t: '$84$' },
      { k: 'D', t: '$96$' }
    ],
    answer: 'C',
    solution_en: 'For $n = 7$ (odd), the middle term is $x_4$. Sum $S_7 = 7 \\times x_4 = 7 \\times 12 = 84$.',
    solution_ml: '$n = 7$ ആകുമ്പോൾ മധ്യപദം 4-ാം പദമാണ് ($x_4$). തുക $S_7 = 7 \\times x_4 = 7 \\times 12 = 84$.',
    tested_en: 'Sum of odd number of terms equals n times middle term.',
    tested_ml: 'തുക = പദങ്ങളുടെ എണ്ണം × മധ്യപദം എന്ന തത്വം.'
  },
  {
    id: 'obj.m10.1.10',
    concept: 'm10.1.5.term-relations-and-averages',
    sec: '10.1.5',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In an arithmetic sequence, if $x_3 + x_8 = 36$, what is $x_1 + x_{10}$?',
    prompt_ml: 'ഒരു സമാന്തരശ്രേണിയിൽ $x_3 + x_8 = 36$ ആയാൽ $x_1 + x_{10}$ എത്ര?',
    options_en: [
      { k: 'A', t: '$18$' },
      { k: 'B', t: '$36$' },
      { k: 'C', t: '$72$' },
      { k: 'D', t: '$54$' }
    ],
    options_ml: [
      { k: 'A', t: '$18$' },
      { k: 'B', t: '$36$' },
      { k: 'C', t: '$72$' },
      { k: 'D', t: '$54$' }
    ],
    answer: 'B',
    solution_en: 'Since $3 + 8 = 1 + 10 = 11$, the sum of pairs equidistant from ends is equal: $x_1 + x_{10} = x_3 + x_8 = 36$.',
    solution_ml: 'സ്ഥാനങ്ങളുടെ തുക തുല്യമായതിനാൽ ($3 + 8 = 1 + 10 = 11$), പദങ്ങളുടെ തുകയും തുല്യമായിരിക്കും: $x_1 + x_{10} = x_3 + x_8 = 36$.',
    tested_en: 'Equal index sum implies equal term sum.',
    tested_ml: 'തുല്യ സ്ഥാനത്തുകയുള്ള പദങ്ങളുടെ തുക തുല്യമായിരിക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.6 Sum of Terms & Sum Algebra
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.1.11',
    concept: 'm10.1.6.sum-of-arithmetic-sequence',
    sec: '10.1.6',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the sum of the first 25 odd natural numbers ($1 + 3 + 5 + \\dots$)?',
    prompt_ml: 'ആദ്യത്തെ 25 ഒറ്റസംഖ്യകളുടെ തുക ($1 + 3 + 5 + \\dots$) എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$500$' },
      { k: 'B', t: '$625$' },
      { k: 'C', t: '$650$' },
      { k: 'D', t: '$700$' }
    ],
    options_ml: [
      { k: 'A', t: '$500$' },
      { k: 'B', t: '$625$' },
      { k: 'C', t: '$650$' },
      { k: 'D', t: '$700$' }
    ],
    answer: 'B',
    solution_en: 'The sum of the first $n$ odd natural numbers is $n^2$. For $n = 25$, $S_{25} = 25^2 = 625$.',
    solution_ml: 'ആദ്യത്തെ $n$ ഒറ്റസംഖ്യകളുടെ തുക $n^2$ ആണ്. $n = 25$ ആകുമ്പോൾ $S_{25} = 25^2 = 625$.',
    tested_en: 'Sum of first n odd numbers is n^2.',
    tested_ml: 'ആദ്യത്തെ n ഒറ്റസംഖ്യകളുടെ തുക n^2 കാണൽ.'
  },
  {
    id: 'obj.m10.1.12',
    concept: 'm10.1.6.sum-of-arithmetic-sequence',
    sec: '10.1.6',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'If the sum of the first $n$ terms of an arithmetic sequence is $S_n = 3n^2 + 2n$, what is its common difference $d$?',
    prompt_ml: 'ഒരു സമാന്തരശ്രേണിയുടെ ആദ്യത്തെ $n$ പദങ്ങളുടെ തുക $S_n = 3n^2 + 2n$ ആയാൽ പൊതുവ്യത്യാസം $d$ എത്ര?',
    options_en: [
      { k: 'A', t: '$3$' },
      { k: 'B', t: '$5$' },
      { k: 'C', t: '$6$' },
      { k: 'D', t: '$2$' }
    ],
    options_ml: [
      { k: 'A', t: '$3$' },
      { k: 'B', t: '$5$' },
      { k: 'C', t: '$6$' },
      { k: 'D', t: '$2$' }
    ],
    answer: 'C',
    solution_en: 'In $S_n = pn^2 + qn$, the coefficient of $n^2$ is $p = \\frac{d}{2}$. Thus $d = 2p = 2 \\times 3 = 6$.',
    solution_ml: '$S_n = pn^2 + qn$-ൽ $n^2$-ന്റെ ഗുണകം $p = \\frac{d}{2}$ ആണ്. അതിനാൽ പൊതുവ്യത്യാസം $d = 2p = 2 \\times 3 = 6$.',
    tested_en: 'Common difference from sum formula S_n = pn^2 + qn.',
    tested_ml: 'തുകയുടെ ബീജഗണിത രൂപത്തിൽ നിന്ന് പൊതുവ്യത്യാസം കാണൽ.'
  }
);

/* ══════════════════════════════════════════════════════════════════════════
   Level 2/3 Written Exercises — Textbook Exercises Page-by-Page
   ══════════════════════════════════════════════════════════════════════════ */
WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.1.1 Number Patterns & Sequences (Textbook Page 8-9, Questions 1-4)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.1.1',
    concept: 'm10.1.1.number-patterns-and-sequences',
    sec: '10.1.1',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Pattern Formations & Sequences (Textbook Page 8–9)',
    title_ml: 'ക്രമങ്ങളും ശ്രേണികളും (പാഠപുസ്തകം പേജ് 8–9)',
    prompt_en: `<p>Write down the first four terms of each sequence described below, and write their general rule:</p>
      <p>(i) Sequence of dot counts used to make triangles (triangular numbers).</p>
      <p>(ii) Sequence of natural numbers that leave remainder $1$ when divided by $3$.</p>
      <p>(iii) Sequence of natural numbers ending in $1$ or $6$.</p>
      <p>(iv) Sequence of the number of diagonals in polygons with $3, 4, 5, 6, \\dots$ sides.</p>`,
    prompt_ml: `<p>താഴെ പറയുന്ന ഓരോ ശ്രേണിയുടെയും ആദ്യത്തെ നാല് പദങ്ങളും അവയുടെ പൊതുനിയമവും എഴുതുക:</p>
      <p>(i) ബിന്ദുക്കൾ അടുക്കി ത്രികോണങ്ങൾ ഉണ്ടാക്കുമ്പോൾ ആവശ്യമുള്ള ബിന്ദുക്കളുടെ എണ്ണത്തിന്റെ ശ്രേണി (ത്രികോണ സംഖ്യകൾ).</p>
      <p>(ii) $3$ കൊണ്ട് ഹരിച്ചാൽ $1$ ശിഷ്ടം വരുന്ന എണ്ണൽസംഖ്യകളുടെ ശ്രേണി.</p>
      <p>(iii) $1$-ലോ $6$-ലോ അവസാനിക്കുന്ന എണ്ണൽസംഖ്യകളുടെ ശ്രേണി.</p>
      <p>(iv) $3, 4, 5, 6, \\dots$ വശങ്ങളുള്ള ബഹുഭുജങ്ങളിലെ വികർണ്ണങ്ങളുടെ എണ്ണത്തിന്റെ ശ്രേണി.</p>`,
    solution_en: `<h4>(i) Triangular Numbers</h4>
      <p>Dots added row by row: $1, 1+2=3, 3+3=6, 6+4=10$.</p>
      <p>First 4 terms: $\\mathbf{1, 3, 6, 10}$. Rule: $\\mathbf{x_n = \\frac{n(n + 1)}{2}}$.</p>
      <h4>(ii) Numbers leaving remainder 1 on division by 3</h4>
      <p>Natural numbers: $3(0)+1=1, 3(1)+1=4, 3(2)+1=7, 3(3)+1=10$.</p>
      <p>First 4 terms: $\\mathbf{1, 4, 7, 10}$. Rule: $\\mathbf{x_n = 3n - 2}$.</p>
      <h4>(iii) Numbers ending in 1 or 6</h4>
      <p>Alternating steps of 5: $\\mathbf{1, 6, 11, 16}$.</p>
      <p>Rule: Numbers leaving remainder 1 on division by 5: $\\mathbf{x_n = 5n - 4}$.</p>
      <h4>(iv) Diagonals of Polygons</h4>
      <p>Formula for diagonals of an $n$-sided polygon is $\\frac{n(n - 3)}{2}$.</p>
      <p>For triangle ($n=3$): $0$. For quadrilateral ($n=4$): $2$. For pentagon ($n=5$): $5$. For hexagon ($n=6$): $9$.</p>
      <p>First 4 terms: $\\mathbf{0, 2, 5, 9}$.</p>`,
    solution_ml: `<h4>(i) ത്രികോണ സംഖ്യകൾ</h4>
      <p>ഡോട്ടുകൾ കൂട്ടിയെടുക്കുമ്പോൾ: $1, 1+2=3, 3+3=6, 6+4=10$.</p>
      <p>ആദ്യ 4 പദങ്ങൾ: $\\mathbf{1, 3, 6, 10}$. നിയമം: $\\mathbf{x_n = \\frac{n(n + 1)}{2}}$.</p>
      <h4>(ii) 3 കൊണ്ട് ഹരിച്ചാൽ 1 ശിഷ്ടം വരുന്ന സംഖ്യകൾ</h4>
      <p>ആദ്യ 4 പദങ്ങൾ: $\\mathbf{1, 4, 7, 10}$. നിയമം: $\\mathbf{x_n = 3n - 2}$.</p>
      <h4>(iii) 1-ലോ 6-ലോ അവസാനിക്കുന്ന സംഖ്യകൾ</h4>
      <p>ആദ്യ 4 പദങ്ങൾ: $\\mathbf{1, 6, 11, 16}$. നിയമം: $\\mathbf{x_n = 5n - 4}$.</p>
      <h4>(iv) ബഹുഭുജങ്ങളിലെ വികർണ്ണങ്ങളുടെ എണ്ണം</h4>
      <p>സൂത്രവാക്യം: $\\frac{n(n - 3)}{2}$.</p>
      <p>ത്രികോണം ($n=3$): $0$, ചതുർഭുജം ($n=4$): $2$, പഞ്ചഭുജം ($n=5$): $5$, ഷഡ്ഭുജം ($n=6$): $9$.</p>
      <p>ആദ്യ 4 പദങ്ങൾ: $\\mathbf{0, 2, 5, 9}$.</p>`,
    tested_en: 'Formulating number sequences from geometric and numerical word descriptions.',
    tested_ml: 'ജ്യാമിതീയ, സംഖ്യാപരമായ വിവരണങ്ങളിൽ നിന്ന് ശ്രേണികൾ രൂപീകരിക്കൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.2 Arithmetic Sequences & Common Difference (Textbook Page 13, Questions 1-3)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.1.2',
    concept: 'm10.1.2.arithmetic-sequence-definition',
    sec: '10.1.2',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Testing & Characterizing Arithmetic Sequences (Textbook Page 13)',
    title_ml: 'സമാന്തരശ്രേണി പരിശോധന (പാഠപുസ്തകം പേജ് 13)',
    prompt_en: `<p>(i) Check whether each of the following sequences is an arithmetic sequence, giving clear mathematical justification:</p>
      <p>(A) $1, 4, 7, 10, \\dots$</p>
      <p>(B) $2, 4, 8, 16, \\dots$</p>
      <p>(C) $\\frac{1}{2}, 1, \\frac{3}{2}, 2, \\dots$</p>
      <p>(ii) Consider equilateral triangles with side lengths $1\\text{ cm}, 2\\text{ cm}, 3\\text{ cm}, 4\\text{ cm}, \\dots$</p>
      <p>(a) Does the sequence of perimeters form an arithmetic sequence? Explain.</p>
      <p>(b) Does the sequence of areas form an arithmetic sequence? Explain.</p>`,
    prompt_ml: `<p>(i) താഴെ പറയുന്ന ഓരോ ശ്രേണിയും സമാന്തരശ്രേണിയാണോ അല്ലയോ എന്ന് കൃത്യമായ കാരണങ്ങളോടെ വ്യക്തമാക്കുക:</p>
      <p>(A) $1, 4, 7, 10, \\dots$</p>
      <p>(B) $2, 4, 8, 16, \\dots$</p>
      <p>(C) $\\frac{1}{2}, 1, \\frac{3}{2}, 2, \\dots$</p>
      <p>(ii) വശങ്ങളുടെ നീളം $1\\text{ cm}, 2\\text{ cm}, 3\\text{ cm}, 4\\text{ cm}, \\dots$ ആയ സമഭുജ ത്രികോണങ്ങൾ പരിഗണിക്കുക:</p>
      <p>(a) ചുറ്റളവുകളുടെ ശ്രേണി സമാന്തരശ്രേണിയാകുമോ? കാരണം വ്യക്തമാക്കുക.</p>
      <p>(b) പരപ്പളവുകളുടെ ശ്രേണി സമാന്തരശ്രേണിയാകുമോ? കാരണം വ്യക്തമാക്കുക.</p>`,
    solution_en: `<h4>Part (i): Testing Consecutive Differences</h4>
      <ul>
        <li><b>(A) $1, 4, 7, 10, \\dots$:</b>
          $4 - 1 = 3, \\; 7 - 4 = 3, \\; 10 - 7 = 3$. Difference is constant ($d = 3$). <b>Yes, it is an arithmetic sequence.</b></li>
        <li><b>(B) $2, 4, 8, 16, \\dots$:</b>
          $4 - 2 = 2, \\; 8 - 4 = 4$. Differences are not equal ($2 \\neq 4$). <b>No, it is not an arithmetic sequence.</b></li>
        <li><b>(C) $\\frac{1}{2}, 1, \\frac{3}{2}, 2, \\dots$:</b>
          $1 - \\frac{1}{2} = \\frac{1}{2}, \\; \\frac{3}{2} - 1 = \\frac{1}{2}, \\; 2 - \\frac{3}{2} = \\frac{1}{2}$. Constant difference ($d = \\frac{1}{2}$). <b>Yes, it is an arithmetic sequence.</b></li>
      </ul>
      <h4>Part (ii): Geometric Equilateral Triangles</h4>
      <ul>
        <li><b>(a) Perimeters:</b> Perimeter of an equilateral triangle with side $s$ is $3s$.
          For $s = 1, 2, 3, 4, \\dots$, perimeters are $3, 6, 9, 12, \\dots$
          Differences: $6 - 3 = 3, 9 - 6 = 3$. <b>Yes, perimeters form an AP with common difference $d = 3\\text{ cm}$.</b></li>
        <li><b>(b) Areas:</b> Area is $\\frac{\\sqrt{3}}{4}s^2$.
          Areas: $\\frac{\\sqrt{3}}{4}, \\frac{4\\sqrt{3}}{4}, \\frac{9\\sqrt{3}}{4}, \\dots$
          Differences: $\\frac{3\\sqrt{3}}{4} \\neq \\frac{5\\sqrt{3}}{4}$. <b>No, areas do NOT form an AP.</b></li>
      </ul>`,
    solution_ml: `<h4>ഭാഗം (i): പദവ്യത്യാസ പരിശോധന</h4>
      <ul>
        <li><b>(A) $1, 4, 7, 10, \\dots$:</b>
          $4 - 1 = 3, \\; 7 - 4 = 3, \\; 10 - 7 = 3$. വ്യത്യാസം തുല്യമാണ് ($d = 3$). <b>ഇതൊരു സമാന്തരശ്രേണിയാണ്.</b></li>
        <li><b>(B) $2, 4, 8, 16, \\dots$:</b>
          $4 - 2 = 2, \\; 8 - 4 = 4$. വ്യത്യാസം തുല്യമല്ല. <b>ഇത് സമാന്തരശ്രേണിയല്ല.</b></li>
        <li><b>(C) $\\frac{1}{2}, 1, \\frac{3}{2}, 2, \\dots$:</b>
          വ്യത്യാസം എപ്പോഴും $\\frac{1}{2}$ ആണ്. <b>ഇതൊരു സമാന്തരശ്രേണിയാണ്.</b></li>
      </ul>
      <h4>ഭാഗം (ii): സമഭുജ ത്രികോണങ്ങൾ</h4>
      <ul>
        <li><b>(a) ചുറ്റളവുകൾ:</b> വശം $s$ ആയാൽ ചുറ്റളവ് $3s$.
          ചുറ്റളവുകളുടെ ശ്രേണി: $3, 6, 9, 12, \\dots$
          വ്യത്യാസം $d = 3$ തുല്യമായതിനാൽ <b>ഇതൊരു സമാന്തരശ്രേണിയാണ്.</b></li>
        <li><b>(b) പരപ്പളവുകൾ:</b> പരപ്പളവ് $\\frac{\\sqrt{3}}{4}s^2$ ആണ്.
          പരപ്പളവുകളുടെ ശ്രേണി: $\\frac{\\sqrt{3}}{4}, \\frac{4\\sqrt{3}}{4}, \\frac{9\\sqrt{3}}{4}, \\dots$
          വ്യത്യാസം തുല്യമല്ല. അതിനാൽ <b>ഇത് സമാന്തരശ്രേണിയല്ല.</b></li>
      </ul>`,
    tested_en: 'Constant difference criterion in numerical sequences and geometry.',
    tested_ml: 'സമാന്തരശ്രേണി സ്ഥിരവ്യത്യാസ പരിശോധനയും ജ്യാമിതീയ പ്രയോഗങ്ങളും.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.3 Position and Term: Algebraic Form (Textbook Page 18, Questions 1-4)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.1.3',
    concept: 'm10.1.3.algebraic-form-and-remainders',
    sec: '10.1.3',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Position and Term, Remainders & Algebraic Form (Textbook Page 18)',
    title_ml: 'സ്ഥാനവും പദവും, ശിഷ്ടവും ബീജഗണിതരൂപവും (പാഠപുസ്തകം പേജ് 18)',
    prompt_en: `<p>(i) What is the 25th term of the arithmetic sequence $1, 11, 21, 31, \\dots$?</p>
      <p>(ii) In an arithmetic sequence, the 10th term is $46$ and its 11th term is $51$. Find its 1st term and write the sequence.</p>
      <p>(iii) What is the 21st term of the arithmetic sequence $100, 95, 90, \\dots$?</p>
      <p>(iv) Write the algebraic form ($x_n$) of the sequence $7, 12, 17, 22, \\dots$. What remainder do all its terms leave when divided by $5$?</p>`,
    prompt_ml: `<p>(i) $1, 11, 21, 31, \\dots$ എന്ന സമാന്തരശ്രേണിയിലെ 25-ാം പദം എന്താണ്?</p>
      <p>(ii) ഒരു സമാന്തരശ്രേണിയിലെ 10-ാം പദം $46$-ഉം 11-ാം പദം $51$-ഉം ആണ്. ഇതിന്റെ ആദ്യപദം കണ്ട് ശ്രേണി എഴുതുക.</p>
      <p>(iii) $100, 95, 90, \\dots$ എന്ന സമാന്തരശ്രേണിയിലെ 21-ാം പദം എന്താണ്?</p>
      <p>(iv) $7, 12, 17, 22, \\dots$ എന്ന ശ്രേണിയുടെ ബീജഗണിത രൂപം ($x_n$) എഴുതുക. ഈ ശ്രേണിയിലെ പദങ്ങളെ $5$ കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ശിഷ്ടം എത്ര?</p>`,
    solution_en: `<h4>Part (i): 25th Term of $1, 11, 21, \\dots$</h4>
      <p>$a = 1, d = 11 - 1 = 10$.</p>
      <p>$$x_{25} = a + (25 - 1)d = 1 + (24 \\times 10) = 1 + 240 = \\mathbf{241}$$</p>
      <h4>Part (ii): Finding 1st Term & Sequence</h4>
      <p>Common difference $d = x_{11} - x_{10} = 51 - 46 = 5$.</p>
      <p>$$x_{10} = a + 9d \\implies 46 = a + (9 \\times 5) = a + 45 \\implies a = 46 - 45 = 1$$</p>
      <p>Sequence: $\\mathbf{1, 6, 11, 16, 21, \\dots}$</p>
      <h4>Part (iii): 21st Term of Decreasing Sequence</h4>
      <p>$a = 100, d = 95 - 100 = -5$.</p>
      <p>$$x_{21} = 100 + (20 \\times -5) = 100 - 100 = \\mathbf{0}$$</p>
      <h4>Part (iv): Algebraic Form & Remainder</h4>
      <p>$a = 7, d = 5$.</p>
      <p>Algebraic form: $x_n = dn + (a - d) = 5n + (7 - 5) = \\mathbf{5n + 2}$.</p>
      <p>Dividing $x_n = 5n + 2$ by $5$ leaves remainder $\\mathbf{2}$.</p>`,
    solution_ml: `<h4>ഭാഗം (i): 25-ാം പദം</h4>
      <p>$a = 1, d = 10$.</p>
      <p>$$x_{25} = a + 24d = 1 + (24 \\times 10) = \\mathbf{241}$$</p>
      <h4>ഭാഗം (ii): ആദ്യപദവും ശ്രേണിയും</h4>
      <p>പൊതുവ്യത്യാസം $d = x_{11} - x_{10} = 51 - 46 = 5$.</p>
      <p>$$x_{10} = a + 9d \\implies 46 = a + 45 \\implies a = \\mathbf{1}$$</p>
      <p>ശ്രേണി: $\\mathbf{1, 6, 11, 16, 21, \\dots}$</p>
      <h4>ഭാഗം (iii): 21-ാം പദം</h4>
      <p>$a = 100, d = -5$.</p>
      <p>$$x_{21} = 100 + (20 \\times -5) = 100 - 100 = \\mathbf{0}$$</p>
      <h4>ഭാഗം (iv): ബീജഗണിതരൂപവും ശിഷ്ടവും</h4>
      <p>$a = 7, d = 5$. ബീജഗണിതരൂപം: $x_n = 5n + (7 - 5) = \\mathbf{5n + 2}$.</p>
      <p>$5n + 2$-നെ $5$ കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ശിഷ്ടം $\\mathbf{2}$ ആണ്.</p>`,
    tested_en: 'Calculating nth terms, finding sequence from adjacent terms, and remainder theorem on APs.',
    tested_ml: 'n-ാം പദം കാണൽ, അടുത്തടുത്ത പദങ്ങളിൽ നിന്ന് ആദ്യപദം കണ്ടെത്തൽ, ശിഷ്ടം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.4 Changes in Position and Terms (Textbook Page 21-22, Questions 1-4)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.1.4',
    concept: 'm10.1.4.position-difference-and-term-difference',
    sec: '10.1.4',
    type: 'written',
    marks: 4,
    time: 220,
    title_en: 'Position Difference & Membership Testing (Textbook Page 21–22)',
    title_ml: 'സ്ഥാനവ്യത്യാസവും പദപരിശോധനയും (പാഠപുസ്തകം പേജ് 21–22)',
    prompt_en: `<p>(i) In an arithmetic sequence, the 3rd term is $15$ and the 8th term is $35$.</p>
      <p>(a) Find the common difference and the first term.</p>
      <p>(b) Write down the sequence.</p>
      <p>(c) What is the 20th term?</p>
      <p>(ii) Consider the arithmetic sequence $13, 24, 35, \\dots$</p>
      <p>(a) Check whether $101$ is a term of this sequence. If so, which term is it?</p>
      <p>(b) Check whether $1001$ is a term of this sequence. Give clear mathematical justification.</p>`,
    prompt_ml: `<p>(i) ഒരു സമാന്തരശ്രേണിയിലെ 3-ാം പദം $15$-ഉം 8-ാം പദം $35$-ഉം ആണ്.</p>
      <p>(a) പൊതുവ്യത്യാസവും ആദ്യപദവും കാണുക.</p>
      <p>(b) ശ്രേണി എഴുതുക.</p>
      <p>(c) 20-ാം പദം എത്രയാണ്?</p>
      <p>(ii) $13, 24, 35, \\dots$ എന്ന സമാന്തരശ്രേണി പരിഗണിക്കുക:</p>
      <p>(a) $101$ ഈ ശ്രേണിയിലെ ഒരു പദമാണോ? ആണെങ്കിൽ അത് എത്രാമത്തെ പദമാണ്?</p>
      <p>(b) $1001$ ഈ ശ്രേണിയിലെ ഒരു പദമാണോ എന്ന് വ്യക്തമായ കാരണത്തോടെ സമർത്ഥിക്കുക.</p>`,
    solution_en: `<h4>Part (i): Term Difference & Common Difference</h4>
      <p>Position difference $= 8 - 3 = 5$.</p>
      <p>Term difference $= x_8 - x_3 = 35 - 15 = 20$.</p>
      <p>$$d = \\frac{20}{5} = \\mathbf{4}$$</p>
      <p>$$x_3 = a + 2d \\implies 15 = a + 2(4) = a + 8 \\implies a = 15 - 8 = \\mathbf{7}$$</p>
      <p>Sequence: $\\mathbf{7, 11, 15, 19, \\dots}$</p>
      <p>20th term: $x_{20} = a + 19d = 7 + (19 \\times 4) = 7 + 76 = \\mathbf{83}$.</p>
      <h4>Part (ii): Checking Sequence Membership</h4>
      <p>First term $a = 13$, common difference $d = 24 - 13 = 11$.</p>
      <ul>
        <li><b>Testing $101$:</b>
          $$\\frac{101 - 13}{11} = \\frac{88}{11} = 8 \\quad (\\text{integer})$$
          <b>Yes, $101$ is a term</b>, and its position is $n = 8 + 1 = \\mathbf{9}$ (9th term).</li>
        <li><b>Testing $1001$:</b>
          $$\\frac{1001 - 13}{11} = \\frac{988}{11} = 89.818\\dots$$
          Since $988$ is not divisible by $11$ ($988 = 89 \\times 11 + 9$), <b>$1001$ is NOT a term of this sequence</b>.</li>
      </ul>`,
    solution_ml: `<h4>ഭാഗം (i): പൊതുവ്യത്യാസവും ആദ്യപദവും</h4>
      <p>സ്ഥാനവ്യത്യാസം $= 8 - 3 = 5$.</p>
      <p>പദവ്യത്യാസം $= 35 - 15 = 20$.</p>
      <p>$$d = \\frac{20}{5} = \\mathbf{4}$$</p>
      <p>$$x_3 = a + 2d \\implies 15 = a + 8 \\implies a = \\mathbf{7}$$</p>
      <p>ശ്രേണി: $\\mathbf{7, 11, 15, 19, \\dots}$</p>
      <p>20-ാം പദം: $x_{20} = 7 + (19 \\times 4) = \\mathbf{83}$.</p>
      <h4>ഭാഗം (ii): പദപരിശോധന</h4>
      <p>$a = 13, d = 11$.</p>
      <ul>
        <li><b>101 പരിശോധിക്കുന്നു:</b>
          $$\\frac{101 - 13}{11} = \\frac{88}{11} = 8$$
          <b>അതെ, 101 ഈ ശ്രേണിയിലെ പദമാണ്</b>, സ്ഥാനം $n = 8 + 1 = \\mathbf{9}$ (9-ാം പദം).</li>
        <li><b>1001 പരിശോധിക്കുന്നു:</b>
          $$\\frac{1001 - 13}{11} = \\frac{988}{11} = 89 \\frac{9}{11}$$
          $988$ എന്നത് $11$-ന്റെ ഗുണിതമല്ലാത്തതിനാൽ <b>1001 ഈ ശ്രേണിയിലെ പദമല്ല</b>.</li>
      </ul>`,
    tested_en: 'Calculating common difference from two arbitrary terms and testing membership in an AP.',
    tested_ml: 'ഏതെങ്കിലും രണ്ട് പദങ്ങളിൽ നിന്ന് പൊതുവ്യത്യാസം കാണലും സംഖ്യ ശ്രേണിയിലുണ്ടോ എന്ന് പരിശോധിക്കലും.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.5 Term Relations & Middle Terms (Textbook Page 26-27, Questions 1-4)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.1.5',
    concept: 'm10.1.5.term-relations-and-averages',
    sec: '10.1.5',
    type: 'written',
    marks: 4,
    time: 220,
    title_en: 'Symmetric Sums & Middle Term Relations (Textbook Page 26–27)',
    title_ml: 'പദബന്ധങ്ങളും മധ്യപദ പ്രയോഗങ്ങളും (പാഠപുസ്തകം പേജ് 26–27)',
    prompt_en: `<p>(i) The 4th term of an arithmetic sequence is $8$. Find the sum of the first 7 terms.</p>
      <p>(ii) The common difference of an arithmetic sequence is $2$, and the sum of its 9th, 10th, and 11th terms is $60$.</p>
      <p>(a) Find the 10th term.</p>
      <p>(b) Find the 1st term and write the sequence.</p>
      <p>(iii) The sum of the first 3 terms of an arithmetic sequence is $30$, and the sum of the first 7 terms is $140$. Find the sequence.</p>`,
    prompt_ml: `<p>(i) ഒരു സമാന്തരശ്രേണിയുടെ 4-ാം പദം $8$ ആണ്. ആദ്യത്തെ 7 പദങ്ങളുടെ തുക എത്ര?</p>
      <p>(ii) ഒരു സമാന്തരശ്രേണിയുടെ പൊതുവ്യത്യാസം $2$-ഉം, 9-ാം പദം, 10-ാം പദം, 11-ാം പദം എന്നിവയുടെ തുക $60$-ഉം ആണ്.</p>
      <p>(a) 10-ാം പദം കാണുക.</p>
      <p>(b) ആദ്യപദം കണ്ട് ശ്രേണി എഴുതുക.</p>
      <p>(iii) ഒരു സമാന്തരശ്രേണിയിലെ ആദ്യത്തെ 3 പദങ്ങളുടെ തുക $30$-ഉം ആദ്യത്തെ 7 പദങ്ങളുടെ തുക $140$-ഉം ആണ്. ശ്രേണി കണ്ടെത്തുക.</p>`,
    solution_en: `<h4>Part (i): Sum via Middle Term</h4>
      <p>For $n = 7$, the middle term is $x_4$.</p>
      <p>$$S_7 = 7 \\times x_4 = 7 \\times 8 = \\mathbf{56}$$</p>
      <h4>Part (ii): Three Consecutive Terms</h4>
      <p>(a) $x_9 + x_{10} + x_{11} = 3 \\times x_{10} = 60 \\implies x_{10} = \\frac{60}{3} = \\mathbf{20}$.</p>
      <p>(b) Given $d = 2$:</p>
      <p>$$x_{10} = a + 9d \\implies 20 = a + 9(2) = a + 18 \\implies a = 20 - 18 = \\mathbf{2}$$</p>
      <p>Sequence: $\\mathbf{2, 4, 6, 8, 10, \\dots}$</p>
      <h4>Part (iii): Sequence from Two Odd Sums</h4>
      <p>Sum of first 3 terms: $S_3 = 3 \\times x_2 = 30 \\implies x_2 = \\mathbf{10}$.</p>
      <p>Sum of first 7 terms: $S_7 = 7 \\times x_4 = 140 \\implies x_4 = \\mathbf{20}$.</p>
      <p>Common difference:</p>
      <p>$$x_4 - x_2 = 2d \\implies 20 - 10 = 2d \\implies 2d = 10 \\implies d = \\mathbf{5}$$</p>
      <p>First term: $a = x_2 - d = 10 - 5 = \\mathbf{5}$.</p>
      <p>Sequence: $\\mathbf{5, 10, 15, 20, 25, \\dots}$</p>`,
    solution_ml: `<h4>ഭാഗം (i): മധ്യപദ തത്വം</h4>
      <p>$n = 7$ ആകുമ്പോൾ മധ്യപദം 4-ാം പദമാണ് ($x_4$).</p>
      <p>$$S_7 = 7 \\times x_4 = 7 \\times 8 = \\mathbf{56}$$</p>
      <h4>ഭാഗം (ii): തുടർച്ചയായ മൂന്ന് പദങ്ങൾ</h4>
      <p>(a) $x_9 + x_{10} + x_{11} = 3 \\times x_{10} = 60 \\implies x_{10} = \\frac{60}{3} = \\mathbf{20}$.</p>
      <p>(b) $d = 2$ ആയതിനാൽ:</p>
      <p>$$x_{10} = a + 9d \\implies 20 = a + 18 \\implies a = \\mathbf{2}$$</p>
      <p>ശ്രേണി: $\\mathbf{2, 4, 6, 8, 10, \\dots}$</p>
      <h4>ഭാഗം (iii): ശ്രേണി കണ്ടെത്തൽ</h4>
      <p>ആദ്യ 3 പദങ്ങളുടെ തുക $= 3 \\times x_2 = 30 \\implies x_2 = \\mathbf{10}$.</p>
      <p>ആദ്യ 7 പദങ്ങളുടെ തുക $= 7 \\times x_4 = 140 \\implies x_4 = \\mathbf{20}$.</p>
      <p>പൊതുവ്യത്യാസം:</p>
      <p>$$x_4 - x_2 = 2d \\implies 20 - 10 = 2d \\implies 2d = 10 \\implies d = \\mathbf{5}$$</p>
      <p>ആദ്യപദം: $a = x_2 - d = 10 - 5 = \\mathbf{5}$.</p>
      <p>ശ്രേണി: $\\mathbf{5, 10, 15, 20, 25, \\dots}$</p>`,
    tested_en: 'Middle term shortcut and solving arithmetic sequences using symmetric properties.',
    tested_ml: 'മധ്യപദ തത്വവും സമമിതി തത്വവുമുപയോഗിച്ച് സമാന്തരശ്രേണി കണ്ടെത്തൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.6 Sum of Terms & Sum Algebra (Textbook Page 30 & 70, Questions 1-5)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.1.6',
    concept: 'm10.1.6.sum-of-arithmetic-sequence',
    sec: '10.1.6',
    type: 'written',
    marks: 4,
    time: 240,
    title_en: 'Sum Calculations & Sum Algebra (Textbook Page 30 & 70)',
    title_ml: 'തുക കണക്കാക്കലും തുകയുടെ ബീജഗണിതവും (പാഠപുസ്തകം പേജ് 30 & 70)',
    prompt_en: `<p>(i) Find the sum of the first $25$ terms of the arithmetic sequence $3, 7, 11, 15, \\dots$</p>
      <p>(ii) Find the sum of all natural numbers between $100$ and $300$ which are multiples of $6$.</p>
      <p>(iii) The sum of the first $n$ terms of an arithmetic sequence is given by $S_n = 2n^2 + 5n$.</p>
      <p>(a) Find the first term and the common difference.</p>
      <p>(b) Write the algebraic form of the $n$-th term ($x_n$).</p>
      <p>(c) What is the 20th term of this sequence?</p>`,
    prompt_ml: `<p>(i) $3, 7, 11, 15, \\dots$ എന്ന സമാന്തരശ്രേണിയിലെ ആദ്യത്തെ 25 പദങ്ങളുടെ തുക കാണുക.</p>
      <p>(ii) $100$-നും $300$-നും ഇടയിലുള്ള $6$-ന്റെ ഗുണിതങ്ങളായ എല്ലാ എണ്ണൽസംഖ്യകളുടെയും തുക കാണുക.</p>
      <p>(iii) ഒരു സമാന്തരശ്രേണിയുടെ ആദ്യത്തെ $n$ പദങ്ങളുടെ തുക $S_n = 2n^2 + 5n$ ആണ്.</p>
      <p>(a) ആദ്യപദവും പൊതുവ്യത്യാസവും കാണുക.</p>
      <p>(b) $n$-ാം പദത്തിന്റെ ബീജഗണിത രൂപം ($x_n$) എഴുതുക.</p>
      <p>(c) ഈ ശ്രേണിയുടെ 20-ാം പദം എത്ര?</p>`,
    solution_en: `<h4>Part (i): Sum of 25 Terms of $3, 7, 11, \\dots$</h4>
      <p>$a = 3, d = 4, n = 25$.</p>
      <p>$$S_n = \\frac{n}{2}[2a + (n - 1)d]$$</p>
      <p>$$S_{25} = \\frac{25}{2}[2(3) + 24(4)] = \\frac{25}{2}[6 + 96] = \\frac{25}{2}(102) = 25 \\times 51 = \\mathbf{1275}$$</p>
      <h4>Part (ii): Multiples of 6 between 100 and 300</h4>
      <p>First multiple after 100: $102$ ($6 \\times 17$).</p>
      <p>Last multiple before 300: $294$ ($6 \\times 49$).</p>
      <p>Number of terms $n = \\frac{294 - 102}{6} + 1 = \\frac{192}{6} + 1 = 32 + 1 = 33$.</p>
      <p>$$S_{33} = \\frac{33}{2}(102 + 294) = \\frac{33}{2}(396) = 33 \\times 198 = \\mathbf{6534}$$</p>
      <h4>Part (iii): Analyzing $S_n = 2n^2 + 5n$</h4>
      <p>(a) First term $a = S_1 = 2(1)^2 + 5(1) = 2 + 5 = \\mathbf{7}$.</p>
      <p>Coefficient of $n^2$ is $p = 2 \\implies d = 2p = 2 \\times 2 = \\mathbf{4}$.</p>
      <p>(b) $x_n = dn + (a - d) = 4n + (7 - 4) = \\mathbf{4n + 3}$.</p>
      <p>(c) $x_{20} = 4(20) + 3 = 80 + 3 = \\mathbf{83}$.</p>`,
    solution_ml: `<h4>ഭാഗം (i): 25 പദങ്ങളുടെ തുക</h4>
      <p>$a = 3, d = 4, n = 25$.</p>
      <p>$$S_{25} = \\frac{25}{2}[2(3) + 24(4)] = \\frac{25}{2}[6 + 96] = 25 \\times 51 = \\mathbf{1275}$$</p>
      <h4>ഭാഗം (ii): 100-നും 300-നും ഇടയിലുള്ള 6-ന്റെ ഗുണിതങ്ങൾ</h4>
      <p>ആദ്യ സംഖ്യ $= 102$ ($6 \\times 17$), അവസാന സംഖ്യ $= 294$ ($6 \\times 49$).</p>
      <p>പദങ്ങളുടെ എണ്ണം $n = \\frac{294 - 102}{6} + 1 = 32 + 1 = 33$.</p>
      <p>$$S_{33} = \\frac{33}{2}(102 + 294) = 33 \\times 198 = \\mathbf{6534}$$</p>
      <h4>ഭാഗം (iii): $S_n = 2n^2 + 5n$ വിശകലനം</h4>
      <p>(a) ആദ്യപദം $a = S_1 = 2(1) + 5(1) = \\mathbf{7}$.</p>
      <p>പൊതുവ്യത്യാസം $d = 2 \\times 2 = \\mathbf{4}$.</p>
      <p>(b) $x_n = 4n + (7 - 4) = \\mathbf{4n + 3}$.</p>
      <p>(c) 20-ാം പദം $x_{20} = 4(20) + 3 = \\mathbf{83}$.</p>`,
    tested_en: 'Sum formula calculation, bounded arithmetic progressions, and sum algebra interpretation.',
    tested_ml: 'തുക കാണൽ, പരിധിക്കുള്ളിലെ ഗുണിതങ്ങളുടെ തുക, തുകയുടെ ബീജഗണിത വിശകലനം.'
  }
);
