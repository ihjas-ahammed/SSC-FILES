/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 10 Chapter 1 — Arithmetic Sequences (സമാന്തരശ്രേണികൾ)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.1.1 Number Sequences & Common Difference
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.1.1',
    concept: 'm10.1.1.number-sequences-and-common-difference',
    sec: '10.1.1',
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
    id: 'obj.m10.1.2',
    concept: 'm10.1.1.number-sequences-and-common-difference',
    sec: '10.1.1',
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
    solution_en: 'The difference between consecutive terms is constant: $1 - \\frac{1}{2} = \\frac{1}{2}$, $\\frac{3}{2} - 1 = \\frac{1}{2}$, $2 - \\frac{3}{2} = \\frac{1}{2}$. Thus it is an AP with $d = \\frac{1}{2}$.',
    solution_ml: 'തുടർച്ചയായ പദങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം തുല്യമാണ്: $1 - \\frac{1}{2} = \\frac{1}{2}$. അതിനാൽ ഇതൊരു സമാന്തരശ്രേണിയാണ് ($d = \\frac{1}{2}$).',
    tested_en: 'Recognizing arithmetic sequences with fractional common differences.',
    tested_ml: 'ഭിന്നസംഖ്യാ വ്യത്യാസമുള്ള സമാന്തരശ്രേണി തിരിച്ചറിയൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.2 Algebraic Form of an Arithmetic Sequence
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.1.3',
    concept: 'm10.1.2.algebraic-form-of-arithmetic-sequence',
    sec: '10.1.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the 25th term of the arithmetic sequence $7, 12, 17, 22, \\dots$?',
    prompt_ml: '$7, 12, 17, 22, \\dots$ എന്ന സമാന്തരശ്രേണിയുടെ 25-ാം പദം എത്ര?',
    options_en: [
      { k: 'A', t: '$127$' },
      { k: 'B', t: '$122$' },
      { k: 'C', t: '$132$' },
      { k: 'D', t: '$125$' }
    ],
    options_ml: [
      { k: 'A', t: '$127$' },
      { k: 'B', t: '$122$' },
      { k: 'C', t: '$132$' },
      { k: 'D', t: '$125$' }
    ],
    answer: 'A',
    solution_en: 'First term $a = 7$, difference $d = 5$. Algebraic form $x_n = 5n + 2$. For $n = 25$: $x_{25} = 5(25) + 2 = 125 + 2 = 127$.',
    solution_ml: '$a = 7, d = 5$. $x_n = 5n + 2$. $x_{25} = 5(25) + 2 = 127$.',
    tested_en: 'Calculating nth term using algebraic form.',
    tested_ml: 'ബീജഗണിത രൂപം ഉപയോഗിച്ച് n-ാം പദം കാണൽ.'
  },
  {
    id: 'obj.m10.1.4',
    concept: 'm10.1.2.algebraic-form-of-arithmetic-sequence',
    sec: '10.1.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The algebraic form of an arithmetic sequence is $x_n = 4n - 3$. When divided by $4$, what remainder do all terms of this sequence leave?',
    prompt_ml: 'ഒരു സമാന്തരശ്രേണിയുടെ ബീജഗണിത രൂപം $x_n = 4n - 3$ ആണ്. ഈ ശ്രേണിയിലെ എല്ലാ പദങ്ങളെയും $4$ കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ശിഷ്ടം എത്ര?',
    options_en: [
      { k: 'A', t: '$1$' },
      { k: 'B', t: '$3$' },
      { k: 'C', t: '$-3$' },
      { k: 'D', t: '$0$' }
    ],
    options_ml: [
      { k: 'A', t: '$1$' },
      { k: 'B', t: '$3$' },
      { k: 'C', t: '$-3$' },
      { k: 'D', t: '$0$' }
    ],
    answer: 'A',
    solution_en: 'Rewriting: $4n - 3 = 4(n - 1) + 1$. Since $4(n - 1)$ is a multiple of $4$, every term leaves a remainder of $1$ when divided by $4$ (terms are $1, 5, 9, 13, \\dots$).',
    solution_ml: '$4n - 3 = 4(n - 1) + 1$ ആയതിനാൽ പദങ്ങളെ $4$ കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ശിഷ്ടം $1$ ആയിരിക്കും (പദങ്ങൾ: $1, 5, 9, 13\\dots$).',
    tested_en: 'Remainder property of arithmetic sequence terms.',
    tested_ml: 'സമാന്തരശ്രേണിയിലെ പദങ്ങളുടെ ശിഷ്ട നിയമം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.3 Position Difference and Term Relations
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.1.5',
    concept: 'm10.1.3.position-difference-and-term-relations',
    sec: '10.1.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In an arithmetic sequence, the 4th term is $19$ and the 9th term is $44$. What is the common difference?',
    prompt_ml: 'ഒരു സമാന്തരശ്രേണിയിൽ 4-ാം പദം $19$-ഉം 9-ാം പദം $44$-ഉം ആണ്. പൊതുവ്യത്യാസം എത്ര?',
    options_en: [
      { k: 'A', t: '$5$' },
      { k: 'B', t: '$4$' },
      { k: 'C', t: '$6$' },
      { k: 'D', t: '$25$' }
    ],
    options_ml: [
      { k: 'A', t: '$5$' },
      { k: 'B', t: '$4$' },
      { k: 'C', t: '$6$' },
      { k: 'D', t: '$25$' }
    ],
    answer: 'A',
    solution_en: '$d = \\frac{x_9 - x_4}{9 - 4} = \\frac{44 - 19}{5} = \\frac{25}{5} = 5$.',
    solution_ml: '$d = \\frac{x_9 - x_4}{9 - 4} = \\frac{44 - 19}{5} = \\frac{25}{5} = 5$.',
    tested_en: 'Finding common difference from two arbitrary terms.',
    tested_ml: 'ഏതെങ്കിലും രണ്ട് പദങ്ങളിൽ നിന്നും പൊതുവ്യത്യാസം കാണൽ.'
  },
  {
    id: 'obj.m10.1.6',
    concept: 'm10.1.3.position-difference-and-term-relations',
    sec: '10.1.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In an arithmetic sequence, the 7th term is $30$. What is the sum of its 5th and 9th terms ($x_5 + x_9$)?',
    prompt_ml: 'ഒരു സമാന്തരശ്രേണിയിൽ 7-ാം പദം $30$ ആണ്. 5-ാം പദത്തിന്റെയും 9-ാം പദത്തിന്റെയും തുക ($x_5 + x_9$) എത്ര?',
    options_en: [
      { k: 'A', t: '$60$' },
      { k: 'B', t: '$30$' },
      { k: 'C', t: '$90$' },
      { k: 'D', t: '$45$' }
    ],
    options_ml: [
      { k: 'A', t: '$60$' },
      { k: 'B', t: '$30$' },
      { k: 'C', t: '$90$' },
      { k: 'D', t: '$45$' }
    ],
    answer: 'A',
    solution_en: 'Since $5 + 9 = 2 \\times 7$, the 7th term is the exact arithmetic mean of the 5th and 9th terms: $x_5 + x_9 = 2 \\times x_7 = 2 \\times 30 = 60$.',
    solution_ml: '$5 + 9 = 2 \\times 7$ ആയതിനാൽ $x_5 + x_9 = 2 \\times x_7 = 2 \\times 30 = 60$.',
    tested_en: 'Symmetry of terms equidistant from a central term.',
    tested_ml: 'മധ്യപദത്തിന് ഇരുവശത്തുമുള്ള പദങ്ങളുടെ തുക കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.4 Sum of Terms of an Arithmetic Sequence
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m10.1.7',
    concept: 'm10.1.4.sum-of-terms-of-arithmetic-sequence',
    sec: '10.1.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the sum of the first $30$ positive natural numbers ($1 + 2 + 3 + \\dots + 30$)?',
    prompt_ml: 'ആദ്യത്തെ $30$ എണ്ണൽസംഖ്യകളുടെ തുക എത്ര ($1 + 2 + 3 + \\dots + 30$)?',
    options_en: [
      { k: 'A', t: '$465$' },
      { k: 'B', t: '$900$' },
      { k: 'C', t: '$450$' },
      { k: 'D', t: '$480$' }
    ],
    options_ml: [
      { k: 'A', t: '$465$' },
      { k: 'B', t: '$900$' },
      { k: 'C', t: '$450$' },
      { k: 'D', t: '$480$' }
    ],
    answer: 'A',
    solution_en: '$S_n = \\frac{n(n + 1)}{2} = \\frac{30 \\times 31}{2} = 15 \\times 31 = 465$.',
    solution_ml: '$S_{30} = \\frac{30 \\times 31}{2} = 15 \\times 31 = 465$.',
    tested_en: 'Sum of first n natural numbers.',
    tested_ml: 'ആദ്യ n എണ്ണൽസംഖ്യകളുടെ തുക കാണൽ.'
  },
  {
    id: 'obj.m10.1.8',
    concept: 'm10.1.4.sum-of-terms-of-arithmetic-sequence',
    sec: '10.1.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The sum of the first $n$ terms of an arithmetic sequence is given by $S_n = 2n^2 + 5n$. What is the common difference of the sequence?',
    prompt_ml: 'ഒരു സമാന്തരശ്രേണിയുടെ ആദ്യ $n$ പദങ്ങളുടെ തുക $S_n = 2n^2 + 5n$ ആണ്. ഈ ശ്രേണിയുടെ പൊതുവ്യത്യാസം എത്ര?',
    options_en: [
      { k: 'A', t: '$4$' },
      { k: 'B', t: '$2$' },
      { k: 'C', t: '$5$' },
      { k: 'D', t: '$7$' }
    ],
    options_ml: [
      { k: 'A', t: '$4$' },
      { k: 'B', t: '$2$' },
      { k: 'C', t: '$5$' },
      { k: 'D', t: '$7$' }
    ],
    answer: 'A',
    solution_en: 'In $S_n = pn^2 + qn$, the coefficient of $n^2$ is $p = \\frac{d}{2}$. Here $\\frac{d}{2} = 2 \\implies d = 4$.',
    solution_ml: '$S_n = pn^2 + qn$ എന്നതിൽ $n^2$-ന്റെ ഗുണകം $\\frac{d}{2} = 2$ ആണ്. അതിനാൽ പൊതുവ്യത്യാസം $d = 4$.',
    tested_en: 'Deducing common difference from the algebraic form of the sum.',
    tested_ml: 'തുകയുടെ ബീജഗണിത രൂപത്തിൽ നിന്നും പൊതുവ്യത്യാസം കാണൽ.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     Level 2 Written Exercises (1 per section)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m10.1.1',
    concept: 'm10.1.1.number-sequences-and-common-difference',
    sec: '10.1.1',
    type: 'written',
    marks: 4,
    time: 180,
    prompt_en: '<p>Consider the sequences:</p><p>(A) $5, 9, 13, 17, \\dots$</p><p>(B) $2, 6, 18, 54, \\dots$</p><p>(C) $100, 93, 86, 79, \\dots$</p><p>(i) For each sequence, determine whether it is an arithmetic sequence, giving clear mathematical justification.</p><p>(ii) For those that are arithmetic sequences, find their first term and common difference.</p>',
    prompt_ml: '<p>താഴെ നൽകിയിരിക്കുന്ന ശ്രേണികൾ പരിഗണിക്കുക:</p><p>(A) $5, 9, 13, 17, \\dots$</p><p>(B) $2, 6, 18, 54, \\dots$</p><p>(C) $100, 93, 86, 79, \\dots$</p><p>(i) ഓരോ ശ്രേണിയും സമാന്തരശ്രേണിയാണോ അല്ലയോ എന്ന് വ്യക്തമായ ഗണിത കാരണങ്ങളോടെ സമർത്ഥിക്കുക.</p><p>(ii) സമാന്തരശ്രേണികളായവയുടെ ആദ്യ പദവും പൊതുവ്യത്യാസവും എഴുതുക.</p>',
    solution_en: `<h4>Part (i) & (ii): Evaluation of Each Sequence</h4>
<ul>
  <li><b>Sequence (A): $5, 9, 13, 17, \\dots$</b>
  $$9 - 5 = 4, \\quad 13 - 9 = 4, \\quad 17 - 13 = 4$$
  The difference between consecutive terms is constant ($4$).
  <br><b>It IS an arithmetic sequence.</b> First term $a = \\mathbf{5}$, Common difference $d = \\mathbf{4}$.</li>

  <li><b>Sequence (B): $2, 6, 18, 54, \\dots$</b>
  $$6 - 2 = 4, \\quad 18 - 6 = 12$$
  The difference between consecutive terms is not constant ($4 \\neq 12$).
  <br><b>It is NOT an arithmetic sequence</b> (it is a geometric progression where terms are multiplied by $3$).</li>

  <li><b>Sequence (C): $100, 93, 86, 79, \\dots$</b>
  $$93 - 100 = -7, \\quad 86 - 93 = -7, \\quad 79 - 86 = -7$$
  The difference between consecutive terms is constant ($-7$).
  <br><b>It IS an arithmetic sequence.</b> First term $a = \\mathbf{100}$, Common difference $d = \\mathbf{-7}$.</li>
</ul>`,
    solution_ml: `<h4>ഭാഗം (i) & (ii): പരിശോധന</h4>
<ul>
  <li><b>ശ്രേണി (A): $5, 9, 13, 17, \\dots$</b>
  $$9 - 5 = 4, \\quad 13 - 9 = 4, \\quad 17 - 13 = 4$$
  തുടർച്ചയായ പദങ്ങളുടെ വ്യത്യാസം തുല്യമാണ് ($4$).
  <br><b>ഇതൊരു സമാന്തരശ്രേണിയാണ്.</b> ആദ്യ പദം $a = \\mathbf{5}$, പൊതുവ്യത്യാസം $d = \\mathbf{4}$.</li>

  <li><b>ശ്രേണി (B): $2, 6, 18, 54, \\dots$</b>
  $$6 - 2 = 4, \\quad 18 - 6 = 12$$
  വ്യത്യാസം തുല്യമല്ല. അതിനാൽ <b>ഇത് സമാന്തരശ്രേണിയല്ല</b>.</li>

  <li><b>ശ്രേണി (C): $100, 93, 86, 79, \\dots$</b>
  $$93 - 100 = -7, \\quad 86 - 93 = -7$$
  വ്യത്യാസം തുല്യമാണ് ($-7$).
  <br><b>ഇതൊരു സമാന്തരശ്രേണിയാണ്.</b> ആദ്യ പദം $a = \\mathbf{100}$, പൊതുവ്യത്യാസം $d = \\mathbf{-7}$.</li>
</ul>`,
    tested_en: 'Identification of arithmetic sequences and constant difference test.',
    tested_ml: 'സമാന്തരശ്രേണി പരിശോധനയും ആദ്യപദവും പൊതുവ്യത്യാസവും കാണൽ.'
  },

  {
    id: 'w.m10.1.2',
    concept: 'm10.1.2.algebraic-form-of-arithmetic-sequence',
    sec: '10.1.2',
    type: 'written',
    marks: 4,
    time: 200,
    prompt_en: '<p>The arithmetic sequence is $6, 11, 16, 21, \\dots$</p><p>(i) Write down the algebraic form ($n$-th term $x_n$) of this sequence.</p><p>(ii) What is the 50th term of this sequence?</p><p>(iii) Check whether $256$ is a term of this sequence. If so, which term is it?</p>',
    prompt_ml: '<p>$6, 11, 16, 21, \\dots$ എന്ന സമാന്തരശ്രേണി പരിഗണിക്കുക.</p><p>(i) ഈ ശ്രേണിയുടെ ബീജഗണിത രൂപം ($n$-ാം പദം $x_n$) എഴുതുക.</p><p>(ii) ഈ ശ്രേണിയുടെ 50-ാം പദം കണ്ടെത്തുക.</p><p>(iii) $256$ ഈ ശ്രേണിയിലെ ഒരു പദമാണോ എന്ന് പരിശോധിക്കുക. ആണെങ്കിൽ അത് എത്രാമത്തെ പദമാണ്?</p>',
    solution_en: `<h4>Part (i): Algebraic Form ($x_n$)</h4>
<p>First term $a = 6$, Common difference $d = 11 - 6 = 5$.</p>
$$x_n = dn + (a - d) = 5n + (6 - 5) = \\mathbf{5n + 1}$$

<h4>Part (ii): The 50th Term</h4>
$$x_{50} = 5(50) + 1 = 250 + 1 = \\mathbf{251}$$

<h4>Part (iii): Is 256 a Term of the Sequence?</h4>
<p>Set $x_n = 256$:</p>
$$5n + 1 = 256$$
$$5n = 256 - 1 = 255$$
$$n = \\frac{255}{5} = \\mathbf{51}$$
<p>Since $n = 51$ is a natural number (positive integer), <b>$256$ is the 51st term</b> of this arithmetic sequence.</p>`,
    solution_ml: `<h4>ഭാഗം (i): ബീജഗണിത രൂപം ($x_n$)</h4>
<p>ആദ്യ പദം $a = 6$, പൊതുവ്യത്യാസം $d = 5$.</p>
$$x_n = dn + (a - d) = 5n + (6 - 5) = \\mathbf{5n + 1}$$

<h4>ഭാഗം (ii): 50-ാം പദം</h4>
$$x_{50} = 5(50) + 1 = 250 + 1 = \\mathbf{251}$$

<h4>ഭാഗം (iii): 256 ഒരു പദമാണോ?</h4>
$$5n + 1 = 256 \\implies 5n = 255 \\implies n = \\frac{255}{5} = \\mathbf{51}$$
<p>$n = 51$ ഒരു എണ്ണൽസംഖ്യയായതിനാൽ, <b>$256$ എന്നത് ഈ ശ്രേണിയിലെ 51-ാം പദമാണ്</b>.</p>`,
    tested_en: 'Algebraic form derivation, term evaluation, and membership testing.',
    tested_ml: 'ബീജഗണിത രൂപം കണ്ടെത്തൽ, പദം കാണൽ, ശ്രേണിയിലെ പദമാണോ എന്ന് പരിശോധിക്കൽ.'
  },

  {
    id: 'w.m10.1.3',
    concept: 'm10.1.3.position-difference-and-term-relations',
    sec: '10.1.3',
    type: 'written',
    marks: 4,
    time: 200,
    prompt_en: '<p>In an arithmetic sequence, the 5th term is $23$ and the 12th term is $58$.</p><p>(i) Find the common difference $d$ and the first term $a$.</p><p>(ii) Write the algebraic form of the sequence.</p><p>(iii) What is the difference between the 30th term and the 20th term?</p>',
    prompt_ml: '<p>ഒരു സമാന്തരശ്രേണിയിൽ 5-ാം പദം $23$-ഉം 12-ാം പദം $58$-ഉം ആണ്.</p><p>(i) പൊതുവ്യത്യാസം $d$-യും ആദ്യപദം $a$-യും കാണുക.</p><p>(ii) ശ്രേണിയുടെ ബീജഗണിത രൂപം എഴുതുക.</p><p>(iii) ഈ ശ്രേണിയുടെ 30-ാം പദവും 20-ാം പദവും തമ്മിലുള്ള വ്യത്യാസം എത്ര?</p>',
    solution_en: `<h4>Step 1: Find Common Difference and First Term</h4>
<p>Using the term-position relation:</p>
$$d = \\frac{x_{12} - x_5}{12 - 5} = \\frac{58 - 23}{7} = \\frac{35}{7} = \\mathbf{5}$$
<p>Now find the first term $a$ using $x_5 = a + 4d$:</p>
$$23 = a + 4(5) = a + 20 \\implies a = 23 - 20 = \\mathbf{3}$$

<h4>Step 2: Algebraic Form of the Sequence</h4>
$$x_n = dn + (a - d) = 5n + (3 - 5) = \\mathbf{5n - 2}$$

<h4>Step 3: Difference between 30th and 20th Terms</h4>
<p>By the position-difference formula:</p>
$$x_{30} - x_{20} = (30 - 20)d = 10 \\times 5 = \\mathbf{50}$$`,
    solution_ml: `<h4>ഘട്ടം 1: പൊതുവ്യത്യാസവും ആദ്യപദവും കാണൽ</h4>
$$d = \\frac{x_{12} - x_5}{12 - 5} = \\frac{58 - 23}{7} = \\frac{35}{7} = \\mathbf{5}$$
$$x_5 = a + 4d \\implies 23 = a + 4(5) \\implies a = 23 - 20 = \\mathbf{3}$$

<h4>ഘട്ടം 2: ബീജഗണിത രൂപം</h4>
$$x_n = 5n + (3 - 5) = \\mathbf{5n - 2}$$

<h4>ഘട്ടം 3: 30-ാം പദവും 20-ാം പദവും തമ്മിലുള്ള വ്യത്യാസം</h4>
$$x_{30} - x_{20} = (30 - 20) \\times d = 10 \\times 5 = \\mathbf{50}$$`,
    tested_en: 'Solving for sequence parameters from two terms and position difference theorem.',
    tested_ml: 'രണ്ട് പദങ്ങൾ ഉപയോഗിച്ച് ശ്രേണി രൂപീകരിക്കലും പദ വ്യത്യാസം കാണലും.'
  },

  {
    id: 'w.m10.1.4',
    concept: 'm10.1.4.sum-of-terms-of-arithmetic-sequence',
    sec: '10.1.4',
    type: 'written',
    marks: 5,
    time: 240,
    prompt_en: '<p>For the arithmetic sequence $4, 7, 10, 13, \\dots$:</p><p>(i) Write the algebraic form of the sequence and find its 25th term.</p><p>(ii) Calculate the sum of the first $25$ terms of this sequence.</p><p>(iii) Write the algebraic expression for the sum of the first $n$ terms ($S_n$).</p>',
    prompt_ml: '<p>$4, 7, 10, 13, \\dots$ എന്ന സമാന്തരശ്രേണി പരിഗണിക്കുക:</p><p>(i) ശ്രേണിയുടെ ബീജഗണിത രൂപം എഴുതി 25-ാം പദം കണ്ടെത്തുക.</p><p>(ii) ഈ ശ്രേണിയുടെ ആദ്യത്തെ $25$ പദങ്ങളുടെ തുക കണക്കാക്കുക.</p><p>(iii) ആദ്യത്തെ $n$ പദങ്ങളുടെ തുക ($S_n$) കാണാനുള്ള ബീജഗണിത സമവാക്യം രൂപീകരിക്കുക.</p>',
    solution_en: `<h4>Step 1: Algebraic Form and 25th Term</h4>
<p>First term $a = 4$, common difference $d = 7 - 4 = 3$.</p>
$$x_n = dn + (a - d) = 3n + (4 - 3) = \\mathbf{3n + 1}$$
$$x_{25} = 3(25) + 1 = 75 + 1 = \\mathbf{76}$$

<h4>Step 2: Sum of First 25 Terms ($S_{25}$)</h4>
<p>Using $S_n = \\frac{n}{2}(x_1 + x_n)$:</p>
$$S_{25} = \\frac{25}{2}(x_1 + x_{25}) = \\frac{25}{2}(4 + 76) = \\frac{25}{2} \\times 80 = 25 \\times 40 = \\mathbf{1000}$$

<h4>Step 3: Algebraic Expression for $S_n$</h4>
$$S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{n}{2}[2(4) + (n - 1)3] = \\frac{n}{2}[8 + 3n - 3] = \\frac{n}{2}[3n + 5]$$
$$S_n = \\mathbf{\\frac{3}{2}n^2 + \\frac{5}{2}n} \\quad \\left(\\text{or } \\frac{3n^2 + 5n}{2}\\right)$$
<p>(Check: $S_1 = \\frac{3+5}{2} = 4 = x_1$; $S_{25} = \\frac{3(625) + 5(25)}{2} = \\frac{1875 + 125}{2} = 1000$).</p>`,
    solution_ml: `<h4>ഘട്ടം 1: ബീജഗണിത രൂപവും 25-ാം പദവും</h4>
<p>ആദ്യ പദം $a = 4$, പൊതുവ്യത്യാസം $d = 3$.</p>
$$x_n = 3n + (4 - 3) = \\mathbf{3n + 1}$$
$$x_{25} = 3(25) + 1 = \\mathbf{76}$$

<h4>ഘട്ടം 2: ആദ്യ 25 പദങ്ങളുടെ തുക ($S_{25}$)</h4>
$$S_{25} = \\frac{25}{2}(x_1 + x_{25}) = \\frac{25}{2}(4 + 76) = \\frac{25}{2} \\times 80 = 25 \\times 40 = \\mathbf{1000}$$

<h4>ഘട്ടം 3: തുകയുടെ ബീജഗണിത രൂപം ($S_n$)</h4>
$$S_n = \\frac{n}{2}[2(4) + (n - 1)3] = \\frac{n}{2}[3n + 5] = \\mathbf{\\frac{3n^2 + 5n}{2}}$$`,
    tested_en: 'AP nth term, finite sum computation, and algebraic sum polynomial formula.',
    tested_ml: 'സമാന്തരശ്രേണിയുടെ n-ാം പദം, തുക, തുകയുടെ ബീജഗണിത രൂപം കാണൽ.'
  }
);
