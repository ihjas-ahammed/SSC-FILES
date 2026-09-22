/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 1: Arithmetic Sequences (സമാന്തരശ്രേണികൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.1.1 Number Patterns & Sequences (സംഖ്യാക്രമങ്ങളും ശ്രേണികളും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.1.1.number-patterns-and-sequences',
    sec: '10.1.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Number Patterns & Sequences',
    title_ml: 'സംഖ്യാക്രമങ്ങളും ശ്രേണികളും',
    oneLine_en: 'A number sequence is a collection of numbers arranged in a definite order (first, second, third, ...) according to a specific mathematical rule.',
    oneLine_ml: 'ഒരു പ്രത്യേക ഗണിത നിയമമനുസരിച്ച് ഒന്നാമത്, രണ്ടാമത്, മൂന്നാമത് എന്നിങ്ങനെ ക്രമമായി എഴുതിയിരിക്കുന്ന സംഖ്യകളുടെ കൂട്ടമാണ് സംഖ്യാശ്രേണി.',
    statement_en: `<p><b>Definition of a Sequence:</b></p>
      <p>A collection of numbers written one after another according to a specific rule is called a <b>number sequence</b>. The numbers in the sequence are called its <b>terms</b>: $x_1, x_2, x_3, \\dots, x_n, \\dots$.</p>
      <p>The position of a term is denoted by its subscript: $x_1$ is the first term, $x_2$ is the second term, and $x_n$ denotes the term at position $n$ ($n$-th term).</p>
      <p><b>Classic Examples from Geometry and Arithmetic:</b></p>
      <ul>
        <li><b>Natural numbers:</b> $1, 2, 3, 4, 5, \\dots$ ($x_n = n$)</li>
        <li><b>Even numbers:</b> $2, 4, 6, 8, 10, \\dots$ ($x_n = 2n$)</li>
        <li><b>Odd numbers:</b> $1, 3, 5, 7, 9, \\dots$ ($x_n = 2n - 1$)</li>
        <li><b>Square numbers:</b> $1, 4, 9, 16, 25, \\dots$ ($x_n = n^2$)</li>
        <li><b>Triangular numbers (dot patterns):</b> $1, 3, 6, 10, 15, \\dots$ ($x_n = \\frac{n(n+1)}{2}$)</li>
        <li><b>Sum of inner angles of polygons (triangles, quadrilaterals, pentagons...):</b> $180^\\circ, 360^\\circ, 540^\\circ, 720^\\circ, \\dots$ ($x_n = 180^\\circ \\times n$)</li>
        <li><b>Powers of 2:</b> $2, 4, 8, 16, 32, \\dots$ ($x_n = 2^n$)</li>
      </ul>`,
    statement_ml: `<p><b>സംഖ്യാശ്രേണിയുടെ നിർവ്വചനം:</b></p>
      <p>ഒരു നിശ്ചിത നിയമപ്രകാരം ഒന്നാമത്, രണ്ടാമത്, മൂന്നാമത് എന്നിങ്ങനെ ക്രമമായി എഴുതിയിരിക്കുന്ന സംഖ്യകളെയാണ് <b>സംഖ്യാശ്രേണി</b> എന്ന് പറയുന്നത്. ഇതിലെ ഓരോ സംഖ്യയേയും ശ്രേണിയിലെ <b>പദങ്ങൾ</b> എന്ന് വിളിക്കുന്നു: $x_1, x_2, x_3, \\dots, x_n, \\dots$.</p>
      <p>പദങ്ങളുടെ സ്ഥാനത്തെ സൂചിപ്പിക്കാൻ പാദാക്ഷരങ്ങൾ ഉപയോഗിക്കുന്നു: $x_1$ ഒന്നാം പദം, $x_2$ രണ്ടാം പദം, $x_n$ എന്നത് $n$-ാം പദം.</p>
      <p><b>പാഠപുസ്തകത്തിലെ പ്രധാന ഉദാഹരണങ്ങൾ:</b></p>
      <ul>
        <li><b>എണ്ണൽസംഖ്യകൾ:</b> $1, 2, 3, 4, 5, \\dots$ ($x_n = n$)</li>
        <li><b>ഇരട്ടസംഖ്യകൾ:</b> $2, 4, 6, 8, 10, \\dots$ ($x_n = 2n$)</li>
        <li><b>ഒറ്റസംഖ്യകൾ:</b> $1, 3, 5, 7, 9, \\dots$ ($x_n = 2n - 1$)</li>
        <li><b>വർഗ്ഗസംഖ്യകൾ:</b> $1, 4, 9, 16, 25, \\dots$ ($x_n = n^2$)</li>
        <li><b>ത്രികോണ സംഖ്യകൾ (ഡോട്ടുകളുടെ എണ്ണം):</b> $1, 3, 6, 10, 15, \\dots$ ($x_n = \\frac{n(n+1)}{2}$)</li>
        <li><b>ബഹുഭുജങ്ങളുടെ അകത്തെ കോണുകളുടെ തുക:</b> $180^\\circ, 360^\\circ, 540^\\circ, 720^\\circ, \\dots$</li>
        <li><b>രണ്ടിന്റെ കൃതികൾ:</b> $2, 4, 8, 16, 32, \\dots$ ($x_n = 2^n$)</li>
      </ul>`,
    intuition_en: `<p>A sequence is simply a list with an order: knowing the position number $n$ allows us, via the rule, to determine the term $x_n$ residing at that position.</p>`,
    intuition_ml: `<p>സ്ഥാനം അറിഞ്ഞാൽ നിയമമുപയോഗിച്ച് ആ സ്ഥാനത്തുള്ള സംഖ്യ കൃത്യമായി കണ്ടെത്താൻ സാധിക്കുന്ന ഒരു ക്രമമാണ് ശ്രേണി.</p>`,
    needs: ['p.1.1', 'p.1.2'],
    traps_en: [
      'A set of numbers is not a sequence unless there is a definite order and position rule: {3, 1, 2} is a set, but 1, 2, 3... is a sequence.',
      'Assuming a pattern from only two terms: 2, 4, ... could continue as 6, 8 (adding 2) or 8, 16 (powers of 2).'
    ],
    traps_ml: [
      'നിശ്ചിത സ്ഥാനക്രമമില്ലാത്ത സംഖ്യകളുടെ കൂട്ടത്തെ ശ്രേണി എന്ന് വിളിക്കാൻ കഴിയില്ല.',
      'രണ്ട് പദങ്ങൾ മാത്രം കണ്ട് ശ്രേണിയുടെ നിയമം ഉറപ്പിക്കരുത്: $2, 4, \\dots$ എന്നത് $6, 8$ എന്നും വരാം, $8, 16$ എന്നും വരാം.'
    ],
    cards_en: [
      { q: 'What is a number sequence?', a: 'A collection of numbers written in a definite order (first, second, third, ...) according to a specific mathematical rule.', kind: 'recall' },
      { q: 'What is the 5th term of the sequence of triangular numbers 1, 3, 6, 10, ...?', a: '$\\frac{5 \\times 6}{2} = \\mathbf{15}$.', kind: 'apply' },
      { q: 'Write the first 4 terms of the sequence of natural numbers ending in 1.', a: '$1, 11, 21, 31$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'സംഖ്യാശ്രേണി എന്നാൽ എന്താണ്?', a: 'ഒരു നിശ്ചിത നിയമമനുസരിച്ച് ഒന്നാമത്, രണ്ടാമത്, മൂന്നാമത് എന്നിങ്ങനെ ക്രമമായി എഴുതിയിരിക്കുന്ന സംഖ്യകളുടെ കൂട്ടം.', kind: 'recall' },
      { q: '1, 3, 6, 10, ... എന്ന ത്രികോണ സംഖ്യാശ്രേണിയിലെ 5-ാം പദം എത്രയാണ്?', a: '$\\frac{5 \\times 6}{2} = \\mathbf{15}$.', kind: 'apply' },
      { q: '1-ൽ അവസാനിക്കുന്ന എണ്ണൽസംഖ്യകളുടെ ശ്രേണിയിലെ ആദ്യ 4 പദങ്ങൾ എഴുതുക.', a: '$1, 11, 21, 31$.', kind: 'apply' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.2 Arithmetic Sequences & Common Difference (സമാന്തരശ്രേണികളും പൊതുവ്യത്യാസവും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.1.2.arithmetic-sequence-definition',
    sec: '10.1.2',
    kind: 'definition',
    tier: 'core',
    title_en: 'Arithmetic Sequences & Common Difference',
    title_ml: 'സമാന്തരശ്രേണികളും പൊതുവ്യത്യാസവും',
    oneLine_en: 'An arithmetic sequence is a sequence in which the difference between any term and its preceding term is always a constant value, called the common difference d.',
    oneLine_ml: 'ഏതൊരു പദത്തിൽ നിന്നും തൊട്ടുപുറകിലെ പദം കുറച്ചാൽ കിട്ടുന്ന വ്യത്യാസം എപ്പോഴും തുല്യമായിരിക്കുന്ന സംഖ്യാശ്രേണിയാണ് സമാന്തരശ്രേണി; ഈ സ്ഥിരവ്യത്യാസമാണ് പൊതുവ്യത്യാസം ($d$).',
    statement_en: `<p><b>Definition of Arithmetic Sequence:</b></p>
      <p>A sequence in which the difference between any term and its preceding term is always constant is called an <b>arithmetic sequence</b> (or arithmetic progression):</p>
      $$\\mathbf{x_n - x_{n-1} = d \\quad \\text{for all } n \\ge 2}$$
      <p>The constant number $d$ is called the <b>common difference</b>, and $x_1$ (or $a$) is the <b>first term</b>.</p>
      <p><b>Recursive & Additive Nature:</b></p>
      $$\\begin{aligned}
      x_1 &= a \\\\
      x_2 &= a + d \\\\
      x_3 &= a + 2d \\\\
      &\\;\\vdots \\\\
      x_n &= a + (n - 1)d
      \\end{aligned}$$
      <p><b>Sign of Common Difference:</b></p>
      <ul>
        <li>If $d > 0$, the sequence is strictly increasing (e.g. $3, 7, 11, 15, \\dots$ with $d = 4$).</li>
        <li>If $d < 0$, the sequence is strictly decreasing (e.g. $100, 93, 86, 79, \\dots$ with $d = -7$).</li>
        <li>If $d = 0$, the sequence is constant ($5, 5, 5, 5, \\dots$).</li>
      </ul>`,
    statement_ml: `<p><b>സമാന്തരശ്രേണിയുടെ നിർവ്വചനം:</b></p>
      <p>ഒരു ശ്രേണിയിൽ ഏതൊരു പദത്തിൽ നിന്നും തൊട്ടുപുറകിലെ പദം കുറച്ചാൽ കിട്ടുന്ന വ്യത്യാസം എപ്പോഴും ഒരേ സംഖ്യയാണെങ്കിൽ, ആ ശ്രേണിയെ <b>സമാന്തരശ്രേണി</b> എന്ന് വിളിക്കുന്നു:</p>
      $$\\mathbf{x_n - x_{n-1} = d \\quad (n \\ge 2)}$$
      <p>ഈ സ്ഥിരസംഖ്യയായ $d$-യെ <b>പൊതുവ്യത്യാസം</b> എന്നും, ആദ്യ പദത്തെ $x_1$ (അല്ലെങ്കിൽ $a$) എന്നും പറയുന്നു.</p>
      <p><b>പദങ്ങളുടെ രൂപീകരണം:</b></p>
      $$\\begin{aligned}
      x_1 &= a \\\\
      x_2 &= a + d \\\\
      x_3 &= a + 2d \\\\
      &\\;\\vdots \\\\
      x_n &= a + (n - 1)d
      \\end{aligned}$$
      <p><b>പൊതുവ്യത്യാസത്തിന്റെ പ്രത്യേകതകൾ:</b></p>
      <ul>
        <li>$d > 0$ ആകുമ്പോൾ ശ്രേണി കൂടിവരുന്നു ($3, 7, 11, \\dots$; $d = 4$).</li>
        <li>$d < 0$ ആകുമ്പോൾ ശ്രേണി കുറഞ്ഞുവരുന്നു ($100, 93, 86, \\dots$; $d = -7$).</li>
        <li>$d = 0$ ആകുമ്പോൾ ശ്രേണി സ്ഥിരമായിരിക്കും ($5, 5, 5, \\dots$).</li>
      </ul>`,
    intuition_en: `<p>Climbing a ladder with evenly spaced rungs: every step upward raises you by the exact same height $d$. Starting from ground level $a$, step $n$ is at height $a + (n-1)d$.</p>`,
    intuition_ml: `<p>തുല്യ അകലത്തിൽ പടികളുള്ള ഒരു ഗോവണി കയറുമ്പോൾ ഓരോ പടി കയറുമ്പോഴും ഉയരം ഒരേ അളവിൽ ($d$) കൂടിക്കൊണ്ടിരിക്കുന്നു.</p>`,
    proof: {
      idea_en: 'Inductive step: each next term is obtained by repeatedly adding the constant difference d.',
      idea_ml: 'ഓരോ പുതിയ പദവും മുൻപദത്തോട് സ്ഥിരവ്യത്യാസമായ $d$ കൂട്ടി നിർമ്മിക്കുന്നു.',
      why_en: 'Accumulation of (n - 1) increments of d from the first term a.',
      why_ml: 'ആദ്യപദത്തിൽ നിന്ന് $(n - 1)$ തവണ $d$ കൂട്ടുമ്പോൾ $n$-ാം പദം ലഭിക്കുന്നു.',
      rungs_en: [
        { why_en: 'First term definition.', m: 'x_1 = a' },
        { why_en: 'Second term by adding common difference.', m: 'x_2 = x_1 + d = a + d' },
        { why_en: 'Third term by adding common difference again.', m: 'x_3 = x_2 + d = a + 2d' },
        { why_en: 'General term after (n - 1) additions.', m: 'x_n = a + (n - 1)d' }
      ],
      rungs_ml: [
        { why_ml: 'ആദ്യപദത്തിന്റെ നിർവ്വചനം.', m: 'x_1 = a' },
        { why_ml: 'രണ്ടാം പദം ലഭിക്കാൻ ആദ്യപദത്തോട് $d$ കൂട്ടുന്നു.', m: 'x_2 = x_1 + d = a + d' },
        { why_ml: 'മൂന്നാം പദം ലഭിക്കാൻ വീണ്ടും $d$ കൂട്ടുന്നു.', m: 'x_3 = x_2 + d = a + 2d' },
        { why_ml: '$(n - 1)$ തവണ $d$ കൂട്ടുമ്പോൾ $n$-ാം പദം ലഭിക്കുന്നു.', m: 'x_n = a + (n - 1)d' }
      ]
    },
    needs: ['m10.1.1.number-patterns-and-sequences'],
    traps_en: [
      'Common difference is always (Term - Preceding Term). In 15, 11, 7..., d = 11 - 15 = -4, NOT +4.',
      'Do not confuse the position number n with the value of the term x_n.'
    ],
    traps_ml: [
      'പൊതുവ്യത്യാസം എപ്പോഴും (ഒരു പദം - തൊട്ടുപുറകിലെ പദം) ആണ്. $15, 11, 7, \\dots$ എന്നതിൽ $d = 11 - 15 = -4$ ആണ്, $+4$ അല്ല.',
      'പദത്തിന്റെ സ്ഥാനമായ $n$-ഉം പദത്തിന്റെ വിലയായ $x_n$-ഉം തമ്മിൽ മാറിപ്പോകരുത്.'
    ],
    cards_en: [
      { q: 'Define an arithmetic sequence.', a: 'A sequence in which the difference between any term and its preceding term is always a constant value ($d$).', kind: 'recall' },
      { q: 'What is the common difference of the sequence 20, 14, 8, 2, ...?', a: '$d = 14 - 20 = \\mathbf{-6}$.', kind: 'apply' },
      { q: 'If first term is 7 and common difference is 5, find the 10th term.', a: '$x_{10} = 7 + (9 \\times 5) = 7 + 45 = \\mathbf{52}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'സമാന്തരശ്രേണി നിർവ്വചിക്കുക.', a: 'ഏതൊരു പദത്തിൽ നിന്നും തൊട്ടുപുറകിലെ പദം കുറച്ചാൽ കിട്ടുന്ന വ്യത്യാസം എപ്പോഴും തുല്യമായിരിക്കുന്ന സംഖ്യാശ്രേണി.', kind: 'recall' },
      { q: '20, 14, 8, 2, ... എന്ന ശ്രേണിയുടെ പൊതുവ്യത്യാസം എത്ര?', a: '$d = 14 - 20 = \\mathbf{-6}$.', kind: 'apply' },
      { q: 'ആദ്യപദം 7-ഉം പൊതുവ്യത്യാസം 5-ഉം ആയാൽ 10-ാം പദം എത്ര?', a: '$x_{10} = 7 + (9 \\times 5) = 7 + 45 = \\mathbf{52}$.', kind: 'apply' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.3 Position and Term: Algebraic Form (സ്ഥാനവും പദവും — ബീജഗണിതരൂപം)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.1.3.algebraic-form-and-remainders',
    sec: '10.1.3',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Position and Term: Algebraic Form & Remainders',
    title_ml: 'സ്ഥാനവും പദവും: ബീജഗണിതരൂപവും ശിഷ്ടങ്ങളും',
    oneLine_en: 'The nth term of any arithmetic sequence is a first-degree polynomial in n: xₙ = dn + (a - d). Terms divided by the common difference d always leave the same remainder.',
    oneLine_ml: 'ഏതൊരു സമാന്തരശ്രേണിയുടെയും n-ാം പദം n-ൽ ഉള്ള ഒന്നാംകൃതി ബീജഗണിത വാക്യമാണ്: xₙ = dn + (a - d); പദങ്ങളെ പൊതുവ്യത്യാസം കൊണ്ട് ഹരിച്ചാൽ ഒരേ ശിഷ്ടം ലഭിക്കും.',
    statement_en: `<p><b>The Algebraic Form of an Arithmetic Sequence:</b></p>
      <p>For an arithmetic sequence with first term $a$ and common difference $d$:</p>
      $$\\mathbf{x_n = a + (n - 1)d = dn + (a - d)}$$
      <p>Letting $p = d$ and $q = a - d$, the $n$-th term is written in standard algebraic form as:</p>
      $$\\mathbf{x_n = pn + q}$$
      <p><b>Key Algebraic Rules:</b></p>
      <ul>
        <li>Every arithmetic sequence has an $n$-th term which is a <b>first-degree polynomial in $n$</b>.</li>
        <li>Conversely, any sequence whose $n$-th term is of the form $x_n = pn + q$ is an arithmetic sequence whose common difference is the coefficient of $n$ (i.e., $d = p$), and whose first term is $x_1 = p + q$.</li>
      </ul>
      <p><b>Remainder Principle (Sequence & Remainder):</b></p>
      <p>In any arithmetic sequence of natural numbers with common difference $d$, dividing each term by $d$ always leaves the <b>exact same remainder</b>:</p>
      $$\\mathbf{x_n \\equiv (a - d) \\pmod d \\equiv a \\pmod d}$$
      <p>For example, in the sequence $1, 6, 11, 16, 21, \\dots$ where $d = 5$, dividing each term by $5$ leaves remainder $1$.</p>`,
    statement_ml: `<p><b>സമാന്തരശ്രേണിയുടെ ബീജഗണിത രൂപം:</b></p>
      <p>ആദ്യപദം $a$-യും പൊതുവ്യത്യാസം $d$-യും ആയ സമാന്തരശ്രേണിയുടെ $n$-ാം പദം:</p>
      $$\\mathbf{x_n = a + (n - 1)d = dn + (a - d)}$$
      <p>$p = d$-യും $q = a - d$-യും ആക്കിയാൽ ബീജഗണിത രൂപം:</p>
      $$\\mathbf{x_n = pn + q}$$
      <p><b>പ്രധാന സവിശേഷതകൾ:</b></p>
      <ul>
        <li>ഏതൊരു സമാന്തരശ്രേണിയുടെയും $n$-ാം പദം $n$-ലുള്ള <b>ഒന്നാംകൃതി ബീജഗണിത വാക്യമായിരിക്കും</b>.</li>
        <li>തിരിച്ച്, $x_n = pn + q$ എന്ന രൂപത്തിലുള്ള ഏതൊരു ശ്രേണിയും സമാന്തരശ്രേണിയായിരിക്കും; ഇതിൽ $n$-ന്റെ ഗുണകമായ $p$ ആണ് പൊതുവ്യത്യാസം ($d = p$), ആദ്യപദം $x_1 = p + q$ ആണ്.</li>
      </ul>
      <p><b>ശ്രേണിയും ശിഷ്ടവും:</b></p>
      <p>ഒരു സമാന്തരശ്രേണിയിലെ എല്ലാ പദങ്ങളെയും പൊതുവ്യത്യാസം ($d$) കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന <b>ശിഷ്ടം തുല്യമായിരിക്കും</b>.</p>
      <p>ഉദാഹരണത്തിന്, $1, 6, 11, 16, 21, \\dots$ ($d = 5$) എന്ന ശ്രേണിയിലെ ഏത് പദത്തെ $5$ കൊണ്ട് ഹരിച്ചാലും ശിഷ്ടം $1$ ആയിരിക്കും.</p>`,
    intuition_en: `<p>The common difference $d$ is the constant speed (slope) at which the sequence grows with each step $n$. The coefficient of $n$ is always that speed $d$.</p>`,
    intuition_ml: `<p>ഓരോ സ്ഥാനത്തിനൊപ്പവും സംഖ്യ എത്ര കണ്ട് കൂടുന്നു എന്നതിന്റെ നിരക്കാണ് $n$-ന്റെ ഗുണകമായ പൊതുവ്യത്യാസം $d$.</p>`,
    proof: {
      idea_en: 'Expand the parenthesized product in the nth term formula and group like powers of n.',
      idea_ml: '$n$-ാം പദത്തിന്റെ സൂത്രവാക്യം വിപുലീകരിച്ച് $n$-ന്റെ പദങ്ങൾ ഒരുമിച്ച് എഴുതുന്നു.',
      why_en: 'Distributive property of multiplication over subtraction.',
      why_ml: 'ഗുണനത്തിന്റെ വിതരണ നിയമം ഉപയോഗിച്ച് വിപുലീകരിക്കുന്നു.',
      rungs_en: [
        { why_en: 'General formula for the nth term.', m: 'x_n = a + (n - 1)d' },
        { why_en: 'Expand brackets: (n - 1)d = nd - d.', m: 'x_n = a + nd - d' },
        { why_en: 'Rearrange in powers of n: d · n + (a - d).', m: 'x_n = dn + (a - d)' },
        { why_en: 'Conclusion: first degree polynomial with coefficient of n equal to d.', m: 'x_n = pn + q \\quad (p = d, \\; q = a - d)' }
      ],
      rungs_ml: [
        { why_ml: '$n$-ാം പദത്തിന്റെ പൊതുവായ രൂപം.', m: 'x_n = a + (n - 1)d' },
        { why_ml: 'ബ്രാക്കറ്റ് മാറ്റുന്നു: $(n - 1)d = nd - d$.', m: 'x_n = a + nd - d' },
        { why_ml: '$n$-ന്റെ പദങ്ങൾ ക്രമീകരിക്കുന്നു: $dn + (a - d)$.', m: 'x_n = dn + (a - d)' },
        { why_ml: 'ഇത് $n$-ൽ ഉള്ള ഒന്നാംകൃതി ബീജഗണിത വാക്യമാണ്.', m: 'x_n = pn + q \\quad (p = d, \\; q = a - d)' }
      ]
    },
    needs: ['m10.1.2.arithmetic-sequence-definition'],
    traps_en: [
      'In x_n = 4n + 3, the common difference is 4, NOT 3. The first term is 4(1) + 3 = 7, NOT 4.',
      'Forgetting that (a - d) can be negative: if a = 2, d = 5, then x_n = 5n - 3.'
    ],
    traps_ml: [
      '$x_n = 4n + 3$ എന്നതിൽ പൊതുവ്യത്യാസം $4$ ആണ്, $3$ അല്ല. ആദ്യപദം $4(1) + 3 = 7$ ആണ്.',
      '$a - d$ ന്യൂനസംഖ്യയാകാം: $a = 2, d = 5$ ആയാൽ $x_n = 5n - 3$ എന്ന് വരും.'
    ],
    cards_en: [
      { q: 'What is the algebraic form of the sequence 5, 9, 13, 17, ...?', a: '$d = 4, a = 5 \\implies x_n = 4n + (5 - 4) = \\mathbf{4n + 1}$.', kind: 'apply' },
      { q: 'If the algebraic form of a sequence is x_n = 7n - 2, what is its common difference and 1st term?', a: 'Common difference $d = \\mathbf{7}$, First term $x_1 = 7(1) - 2 = \\mathbf{5}$.', kind: 'apply' },
      { q: 'What remainder do all terms of the sequence 4, 11, 18, 25, ... leave when divided by 7?', a: 'Common difference is 7; dividing each term by 7 leaves remainder $\\mathbf{4}$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '5, 9, 13, 17, ... എന്ന ശ്രേണിയുടെ ബീജഗണിത രൂപം എന്ത്?', a: '$d = 4, a = 5 \\implies x_n = 4n + (5 - 4) = \\mathbf{4n + 1}$.', kind: 'apply' },
      { q: 'ഒരു ശ്രേണിയുടെ ബീജഗണിത രൂപം x_n = 7n - 2 ആയാൽ പൊതുവ്യത്യാസവും ആദ്യപദവും എത്ര?', a: 'പൊതുവ്യത്യാസം $d = \\mathbf{7}$, ആദ്യപദം $x_1 = 7(1) - 2 = \\mathbf{5}$.', kind: 'apply' },
      { q: '4, 11, 18, 25, ... എന്ന ശ്രേണിയിലെ പദങ്ങളെ 7 കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ശിഷ്ടം എത്ര?', a: 'പൊതുവ്യത്യാസം 7 ആയതിനാൽ ശിഷ്ടം എപ്പോഴും $\\mathbf{4}$ ആയിരിക്കും.', kind: 'recall' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.4 Changes in Position and Terms (സ്ഥാനമാറ്റവും പദമാറ്റവും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.1.4.position-difference-and-term-difference',
    sec: '10.1.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Changes in Position and Terms',
    title_ml: 'സ്ഥാനമാറ്റവും പദമാറ്റവും',
    oneLine_en: 'In an arithmetic sequence, the difference between any two terms equals the difference in their positions multiplied by the common difference: x_m - x_n = (m - n)d.',
    oneLine_ml: 'ഒരു സമാന്തരശ്രേണിയിലെ ഏതൊരു രണ്ട് പദങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം അവയുടെ സ്ഥാന വ്യത്യാസത്തെ പൊതുവ്യത്യാസം കൊണ്ട് ഗുണിച്ചതിന് തുല്യമാണ്: x_m - x_n = (m - n)d.',
    statement_en: `<p><b>The Term-Difference & Position-Difference Theorem:</b></p>
      <p>Let $x_m$ and $x_n$ be two terms of an arithmetic sequence at positions $m$ and $n$ ($m > n$). Then:</p>
      $$\\mathbf{x_m - x_n = (m - n)d}$$
      <p>From this fundamental relation, the common difference $d$ can be calculated from any two terms:</p>
      $$\\mathbf{d = \\frac{x_m - x_n}{m - n} = \\frac{\\text{Term Difference}}{\\text{Position Difference}}}$$
      <p><b>Criteria for Membership in an Arithmetic Sequence:</b></p>
      <p>A given number $k$ is a term of an arithmetic sequence with first term $a$ and common difference $d$ if and only if:</p>
      $$\\mathbf{\\frac{k - a}{d} \\text{ is a non-negative integer}}$$
      <p>If so, the position of $k$ is $n = \\frac{k - a}{d} + 1$.</p>
      <p>Equivalently, the difference between any two numbers in the sequence must be a multiple of the common difference $d$.</p>`,
    statement_ml: `<p><b>പദവ്യത്യാസവും സ്ഥാനവ്യത്യാസവും തമ്മിലുള്ള ബന്ധം:</b></p>
      <p>ഒരു സമാന്തരശ്രേണിയിലെ $m, n$ എന്നീ സ്ഥാനങ്ങളിലെ പദങ്ങൾ യഥാക്രമം $x_m, x_n$ ആയാൽ ($m > n$):</p>
      $$\\mathbf{x_m - x_n = (m - n)d}$$
      <p>ഇതിൽ നിന്ന് ഏതൊരു രണ്ട് പദങ്ങൾ തന്നാലും പൊതുവ്യത്യാസം $d$ കണ്ടെത്താം:</p>
      $$\\mathbf{d = \\frac{x_m - x_n}{m - n} = \\frac{\\text{പദങ്ങളുടെ വ്യത്യാസം}}{\\text{സ്ഥാനങ്ങളുടെ വ്യത്യാസം}}}$$
      <p><b>ഒരു സംഖ്യ ശ്രേണിയിലെ പദമാണോ എന്ന് പരിശോധിക്കുന്ന വിധം:</b></p>
      <p>$k$ എന്ന സംഖ്യ ആദ്യപദം $a$-യും പൊതുവ്യത്യാസം $d$-യും ആയ സമാന്തരശ്രേണിയിലെ ഒരു പദമാകണമെങ്കിൽ:</p>
      $$\\mathbf{\\frac{k - a}{d} \\text{ ഒരു പൂർണ്ണ എണ്ണൽസംഖ്യയായിരിക്കണം}}$$
      <p>അങ്ങനെയാണെങ്കിൽ, $k$-യുടെ സ്ഥാനം $n = \\frac{k - a}{d} + 1$ ആയിരിക്കും.</p>
      <p>അതായത്, ശ്രേണിയിലെ രണ്ട് പദങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം എപ്പോഴും പൊതുവ്യത്യാസത്തിന്റെ ഗുണിതമായിരിക്കും.</p>`,
    intuition_en: `<p>Stepping from position $n$ to position $m$ requires taking $(m - n)$ steps. Since every step adds $d$, the total rise is $(m - n) \\times d$.</p>`,
    intuition_ml: `<p>$n$-ാം സ്ഥാനത്തുനിന്ന് $m$-ാം സ്ഥാനത്തെത്താൻ $(m - n)$ പടികൾ കയറണം; ഓരോ പടിയും $d$ വീതമുള്ളതിനാൽ ആകെ ഉയരം $(m - n)d$ ആയിരിക്കും.</p>`,
    proof: {
      idea_en: 'Subtract the expansion of x_n from x_m; the initial term a cancels out.',
      idea_ml: '$x_m$-ൽ നിന്ന് $x_n$ കുറയ്ക്കുമ്പോൾ ആദ്യപദമായ $a$ ഇല്ലാതാകുന്നു.',
      why_en: 'Direct subtraction of nth term formulas.',
      why_ml: '$n$-ാം പദ സമവാക്യങ്ങളുടെ വ്യവകലനം.',
      rungs_en: [
        { why_en: 'Expression for the m-th term.', m: 'x_m = a + (m - 1)d' },
        { why_en: 'Expression for the n-th term.', m: 'x_n = a + (n - 1)d' },
        { why_en: 'Subtract x_n from x_m.', m: 'x_m - x_n = [a + (m - 1)d] - [a + (n - 1)d]' },
        { why_en: 'Simplify algebraic terms.', m: 'x_m - x_n = (m - 1 - n + 1)d = (m - n)d' }
      ],
      rungs_ml: [
        { why_ml: '$m$-ാം പദത്തിന്റെ രൂപം.', m: 'x_m = a + (m - 1)d' },
        { why_ml: '$n$-ാം പദത്തിന്റെ രൂപം.', m: 'x_n = a + (n - 1)d' },
        { why_ml: '$x_m$-ൽ നിന്ന് $x_n$ കുറയ്ക്കുന്നു.', m: 'x_m - x_n = [a + (m - 1)d] - [a + (n - 1)d]' },
        { why_ml: 'ലഘൂകരിക്കുമ്പോൾ $a$ ഇല്ലാതായി $(m - n)d$ ലഭിക്കുന്നു.', m: 'x_m - x_n = (m - n)d' }
      ]
    },
    needs: ['m10.1.2.arithmetic-sequence-definition'],
    traps_en: [
      'Forgetting that position difference is (m - n), not (m - n + 1). Difference between 8th and 3rd term is (8 - 3)d = 5d.',
      'Checking if a number is a term by dividing the number by d without subtracting the first term a first.'
    ],
    traps_ml: [
      'സ്ഥാനവ്യത്യാസം $(m - n)$ ആണ്. 8-ാം പദവും 3-ാം പദവും തമ്മിലുള്ള വ്യത്യാസം $(8 - 3)d = 5d$ ആണ്.',
      'ഒരു സംഖ്യ ശ്രേണിയിലുണ്ടോ എന്നറിയാൻ ആദ്യപദം കുറച്ചതിനുശേഷമേ $d$ കൊണ്ട് ഹരിക്കാവൂ.'
    ],
    cards_en: [
      { q: 'The 3rd term of an AP is 15 and the 8th term is 35. Find the common difference d.', a: '$d = \\frac{35 - 15}{8 - 3} = \\frac{20}{5} = \\mathbf{4}$.', kind: 'apply' },
      { q: 'State the relation between term difference and position difference.', a: '$\\mathbf{x_m - x_n = (m - n)d}$ (Term difference = Position difference $\\times$ Common difference).', kind: 'recall' },
      { q: 'Is 101 a term of the sequence 13, 24, 35, ...? (d = 11)', a: '$\\frac{101 - 13}{11} = \\frac{88}{11} = 8$ (integer). Yes, it is the $(8 + 1) = \\mathbf{9}$th term.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഒരു സമാന്തരശ്രേണിയിലെ 3-ാം പദം 15-ഉം 8-ാം പദം 35-ഉം ആയാൽ പൊതുവ്യത്യാസം എത്ര?', a: '$d = \\frac{35 - 15}{8 - 3} = \\frac{20}{5} = \\mathbf{4}$.', kind: 'apply' },
      { q: 'പദവ്യത്യാസവും സ്ഥാനവ്യത്യാസവും തമ്മിലുള്ള ബന്ധം പ്രസ്താവിക്കുക.', a: '$\\mathbf{x_m - x_n = (m - n)d}$ (പദവ്യത്യാസം = സ്ഥാനവ്യത്യാസം $\\times$ പൊതുവ്യത്യാസം).', kind: 'recall' },
      { q: '13, 24, 35, ... എന്ന ശ്രേണിയിലെ ഒരു പദമാണോ 101? (d = 11)', a: '$\\frac{101 - 13}{11} = \\frac{88}{11} = 8$. അതെ, ഇത് $\\mathbf{9}$-ാം പദമാണ് ($8 + 1$).', kind: 'apply' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.5 Term Relations & Middle Terms (പദബന്ധങ്ങളും മധ്യപദങ്ങളും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.1.5.term-relations-and-averages',
    sec: '10.1.5',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Term Relations, Symmetric Averages & Middle Terms',
    title_ml: 'പദബന്ധങ്ങളും മധ്യപദങ്ങളും',
    oneLine_en: 'Pairs of terms equidistant from the ends have equal sums: x₁ + xₙ = x₂ + xₙ₋₁. In an arithmetic sequence with an odd number of terms, the sum equals the number of terms times the middle term.',
    oneLine_ml: 'രണ്ടറ്റത്തുനിന്നും തുല്യ അകലത്തിലുള്ള പദങ്ങളുടെ തുക തുല്യമായിരിക്കും: x₁ + xₙ = x₂ + xₙ₋₁; ഒറ്റ എണ്ണം പദങ്ങളുള്ള സമാന്തരശ്രേണിയുടെ തുക പദങ്ങളുടെ എണ്ണത്തെ മധ്യപദം കൊണ്ട് ഗുണിച്ചതിന് തുല്യമാണ്.',
    statement_en: `<p><b>Symmetric Sum Property:</b></p>
      <p>In any finite arithmetic sequence $x_1, x_2, \\dots, x_n$, the sum of pairs of terms equidistant from the beginning and the end is constant:</p>
      $$\\mathbf{x_1 + x_n = x_2 + x_{n-1} = x_3 + x_{n-2} = \\dots}$$
      <p>More generally, if indices satisfy $\\mathbf{p + q = r + s}$, then:</p>
      $$\\mathbf{x_p + x_q = x_r + x_s}$$
      <p><b>Arithmetic Mean (Three Consecutive Terms):</b></p>
      <p>If $a, b, c$ are three consecutive terms of an arithmetic sequence, then $b$ is the <b>arithmetic mean</b> of $a$ and $c$:</p>
      $$\\mathbf{b = \\frac{a + c}{2} \\quad \\iff \\quad 2b = a + c}$$
      <p><b>Middle Term and Sum of Odd Number of Terms:</b></p>
      <p>If an arithmetic sequence has an odd number of terms ($n = 2k + 1$), the middle term is $x_{k+1}$, and the sum of all terms is:</p>
      $$\\mathbf{S_{2k+1} = (2k + 1) \\times x_{k+1} = n \\times (\\text{Middle Term})}$$
      <p>For example, the sum of the first 7 terms of any AP is $7 \\times x_4$.</p>`,
    statement_ml: `<p><b>തുല്യ അകലത്തിലുള്ള പദങ്ങളുടെ തുക:</b></p>
      <p>ഒരു സമാന്തരശ്രേണിയിൽ രണ്ടറ്റത്തുനിന്നും ഒരേ അകലത്തിലുള്ള പദങ്ങളുടെ തുക എപ്പോഴും തുല്യമായിരിക്കും:</p>
      $$\\mathbf{x_1 + x_n = x_2 + x_{n-1} = x_3 + x_{n-2} = \\dots}$$
      <p>പൊതുവായി പറഞ്ഞാൽ, സ്ഥാനങ്ങളുടെ തുക തുല്യമാണെങ്കിൽ ($p + q = r + s$) പദങ്ങളുടെ തുകയും തുല്യമായിരിക്കും:</p>
      $$\\mathbf{x_p + x_q = x_r + x_s}$$
      <p><b>സമാന്തര ശരാശരി:</b></p>
      <p>$a, b, c$ എന്നിവ ഒരു സമാന്തരശ്രേണിയിലെ തുടർച്ചയായ മൂന്ന് പദങ്ങളാണെങ്കിൽ, നടുവിലെ പദം മറ്റ് രണ്ട് പദങ്ങളുടെ സമാന്തര ശരാശരിയായിരിക്കും:</p>
      $$\\mathbf{b = \\frac{a + c}{2} \\quad \\iff \\quad 2b = a + c}$$
      <p><b>മധ്യപദവും തുകയും (ഒറ്റ എണ്ണം പദങ്ങൾ):</b></p>
      <p>ഒരു സമാന്തരശ്രേണിയിൽ ഒറ്റ എണ്ണം പദങ്ങളുണ്ടെങ്കിൽ ($n = 2k + 1$), ആകെ തുക പദങ്ങളുടെ എണ്ണത്തെ മധ്യപദം കൊണ്ട് ഗുണിച്ചതിന് തുല്യമായിരിക്കും:</p>
      $$\\mathbf{S_n = n \\times (\\text{മധ്യപദം})}$$
      <p>ഉദാഹരണത്തിന്, ആദ്യത്തെ 7 പദങ്ങളുടെ തുക $7 \\times x_4$ ആയിരിക്കും (4-ാം പദമാണ് മധ്യപദം).</p>`,
    intuition_en: `<p>Because terms grow linearly, the decrease from the end exactly balances the increase from the beginning: $(a + kd) + (b - kd) = a + b$. The average of all terms equals the central value.</p>`,
    intuition_ml: `<p>തുടക്കത്തിൽ നിന്ന് മുന്നോട്ട് പോകുമ്പോൾ കൂടുന്ന അതേ അളവിൽ അവസാനത്തിൽ നിന്ന് പിന്നോട്ട് വരുമ്പോൾ കുറയുന്നതിനാൽ ജോഡികളുടെ തുക എപ്പോഴും സ്ഥിരമായി നിൽക്കുന്നു.</p>`,
    proof: {
      idea_en: 'Substitute the algebraic definitions of each term into the sum of pairs.',
      idea_ml: 'ഓരോ പദത്തിന്റെയും ബീജഗണിത രൂപം നൽകി തുക കണ്ടെത്തുന്നു.',
      why_en: 'Direct algebraic evaluation shows independence from the offset index.',
      why_ml: 'രണ്ട് പദങ്ങളുടെ തുക കാണുമ്പോൾ സ്ഥാനങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം ഇല്ലാതാകുന്നു.',
      rungs_en: [
        { why_en: 'Write x_k from the left.', m: 'x_k = a + (k - 1)d' },
        { why_en: 'Write x_{n - k + 1} from the right.', m: 'x_{n - k + 1} = a + (n - k)d' },
        { why_en: 'Add the two terms together.', m: 'x_k + x_{n - k + 1} = 2a + (k - 1 + n - k)d = 2a + (n - 1)d' },
        { why_en: 'The sum is identical for all k, equal to x_1 + x_n.', m: 'x_k + x_{n - k + 1} = x_1 + x_n' }
      ],
      rungs_ml: [
        { why_ml: 'തുടക്കത്തിൽ നിന്നുള്ള $k$-ാം പദം.', m: 'x_k = a + (k - 1)d' },
        { why_ml: 'അവസാനത്തിൽ നിന്നുള്ള പദം.', m: 'x_{n - k + 1} = a + (n - k)d' },
        { why_ml: 'രണ്ട് പദങ്ങളും കൂട്ടുന്നു.', m: 'x_k + x_{n - k + 1} = 2a + (n - 1)d' },
        { why_ml: 'ഇത് എല്ലാ $k$-യ്ക്കും തുല്യവും $x_1 + x_n$-ന് തുല്യവുമാണ്.', m: 'x_k + x_{n - k + 1} = x_1 + x_n' }
      ]
    },
    needs: ['m10.1.3.algebraic-form-and-remainders'],
    traps_en: [
      'The middle term shortcut S_n = n × (middle term) ONLY works when the number of terms n is ODD. For even n, there is no single middle term.',
      'Checking indices: x_3 + x_7 = x_4 + x_6 because 3 + 7 = 4 + 6 = 10. But x_3 + x_7 is NOT x_5 + x_5 unless 5 + 5 = 10 (which it is, so 2x_5 = x_3 + x_7).'
    ],
    traps_ml: [
      'തുക = പദങ്ങളുടെ എണ്ണം $\\times$ മധ്യപദം എന്ന രീതി പദങ്ങളുടെ എണ്ണം ഒറ്റസംഖ്യയാകുമ്പോൾ മാത്രമേ ഉപയോഗിക്കാൻ സാധിക്കൂ.',
      'സ്ഥാനങ്ങളുടെ തുക തുല്യമാകുമ്പോൾ മാത്രമേ പദങ്ങളുടെ തുക തുല്യമാകൂ ($3 + 7 = 4 + 6 = 10 \\implies x_3 + x_7 = x_4 + x_6$).'
    ],
    cards_en: [
      { q: 'The 4th term of an AP is 8. What is the sum of its first 7 terms?', a: '$S_7 = 7 \\times x_4 = 7 \\times 8 = \\mathbf{56}$.', kind: 'apply' },
      { q: 'If 2x, x + 10, 3x + 2 are three consecutive terms of an AP, find x.', a: '$2(x + 10) = 2x + (3x + 2) \\implies 2x + 20 = 5x + 2 \\implies 3x = 18 \\implies x = \\mathbf{6}$.', kind: 'apply' },
      { q: 'In an AP, if x₁ + x₁₀ = 50, what is x₃ + x₈?', a: 'Since $1 + 10 = 3 + 8 = 11$, $x_3 + x_8 = x_1 + x_{10} = \\mathbf{50}$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു സമാന്തരശ്രേണിയുടെ 4-ാം പദം 8 ആയാൽ ആദ്യത്തെ 7 പദങ്ങളുടെ തുക എത്ര?', a: '$S_7 = 7 \\times x_4 = 7 \\times 8 = \\mathbf{56}$.', kind: 'apply' },
      { q: '2x, x + 10, 3x + 2 എന്നിവ ഒരു സമാന്തരശ്രേണിയിലെ തുടർച്ചയായ മൂന്ന് പദങ്ങളായാൽ x കാണുക.', a: '$2(x + 10) = 2x + 3x + 2 \\implies 2x + 20 = 5x + 2 \\implies 3x = 18 \\implies x = \\mathbf{6}$.', kind: 'apply' },
      { q: 'ഒരു സമാന്തരശ്രേണിയിൽ x₁ + x₁₀ = 50 ആയാൽ x₃ + x₈ എത്ര?', a: '$1 + 10 = 3 + 8 = 11$ ആയതിനാൽ, $x_3 + x_8 = \\mathbf{50}$.', kind: 'recall' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.1.6 Sum of Terms & Sum Algebra (സമാന്തരശ്രേണികളുടെ തുകയും ബീജഗണിതവും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.1.6.sum-of-arithmetic-sequence',
    sec: '10.1.6',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Sum of Terms of an Arithmetic Sequence',
    title_ml: 'സമാന്തരശ്രേണികളുടെ തുകയും ബീജഗണിതവും',
    oneLine_en: 'The sum of the first n terms of an arithmetic sequence is Sₙ = (n/2)(x₁ + xₙ) = (n/2)[2a + (n - 1)d]. The algebraic form of the sum is Sₙ = pn² + qn, where common difference d = 2p.',
    oneLine_ml: 'ഒരു സമാന്തരശ്രേണിയിലെ ആദ്യത്തെ n പദങ്ങളുടെ തുക Sₙ = (n/2)(x₁ + xₙ) = (n/2)[2a + (n - 1)d] ആണ്. തുകയുടെ ബീജഗണിത രൂപം Sₙ = pn² + qn ആണ്; ഇതിൽ പൊതുവ്യത്യാസം d = 2p ആയിരിക്കും.',
    statement_en: `<p><b>The Sum Formulas:</b></p>
      <p>For an arithmetic sequence with first term $a$, common difference $d$, and $n$-th term $x_n$:</p>
      $$\\mathbf{S_n = \\frac{n}{2}(x_1 + x_n) = \\frac{n}{2}[2a + (n - 1)d]}$$
      <p><b>Standard Sum Identities:</b></p>
      <ul>
        <li><b>Sum of first $n$ natural numbers:</b>
          $$1 + 2 + 3 + \\dots + n = \\mathbf{\\frac{n(n + 1)}{2}}$$</li>
        <li><b>Sum of first $n$ even numbers:</b>
          $$2 + 4 + 6 + \\dots + 2n = \\mathbf{n(n + 1)}$$</li>
        <li><b>Sum of first $n$ odd numbers:</b>
          $$1 + 3 + 5 + \\dots + (2n - 1) = \\mathbf{n^2}$$</li>
      </ul>
      <p><b>Algebraic Form of the Sum ($S_n$):</b></p>
      <p>Expanding the sum formula:</p>
      $$S_n = \\frac{n}{2}[2a + nd - d] = \\left(\\frac{d}{2}\\right)n^2 + \\left(a - \\frac{d}{2}\\right)n$$
      <p>Every arithmetic sequence has a sum of the form:</p>
      $$\\mathbf{S_n = pn^2 + qn}$$
      <p>Crucially:</p>
      <ul>
        <li>The constant term in $S_n$ is always <b>zero</b>.</li>
        <li>The coefficient of $n^2$ is half the common difference: $p = \\frac{d}{2} \\implies \\mathbf{d = 2p}$.</li>
        <li>The first term is $x_1 = S_1 = \\mathbf{p + q}$.</li>
      </ul>`,
    statement_ml: `<p><b>തുക കാണാനുള്ള സൂത്രവാക്യങ്ങൾ:</b></p>
      <p>ആദ്യപദം $a$-യും പൊതുവ്യത്യാസം $d$-യും $n$-ാം പദം $x_n$-ഉം ആയ സമാന്തരശ്രേണിയിലെ ആദ്യ $n$ പദങ്ങളുടെ തുക:</p>
      $$\\mathbf{S_n = \\frac{n}{2}(x_1 + x_n) = \\frac{n}{2}[2a + (n - 1)d]}$$
      <p><b>പ്രധാന തുകകൾ:</b></p>
      <ul>
        <li><b>ആദ്യത്തെ $n$ എണ്ണൽസംഖ്യകളുടെ തുക:</b>
          $$1 + 2 + 3 + \\dots + n = \\mathbf{\\frac{n(n + 1)}{2}}$$</li>
        <li><b>ആദ്യത്തെ $n$ ഇരട്ടസംഖ്യകളുടെ തുക:</b>
          $$2 + 4 + 6 + \\dots + 2n = \\mathbf{n(n + 1)}$$</li>
        <li><b>ആദ്യത്തെ $n$ ഒറ്റസംഖ്യകളുടെ തുക:</b>
          $$1 + 3 + 5 + \\dots + (2n - 1) = \\mathbf{n^2}$$</li>
      </ul>
      <p><b>തുകയുടെ ബീജഗണിത രൂപം ($S_n$):</b></p>
      <p>സമാന്തരശ്രേണിയുടെ തുകയുടെ ബീജഗണിത രൂപം എപ്പോഴും:</p>
      $$\\mathbf{S_n = pn^2 + qn}$$
      <p>പ്രധാന പ്രത്യേകതകൾ:</p>
      <ul>
        <li>ഇതിൽ സ്ഥിരസംഖ്യ ഉണ്ടാകില്ല (സ്ഥിരസംഖ്യ പൂജ്യമാണ്).</li>
        <li>$n^2$-ന്റെ ഗുണകമായ $p$ എന്നത് പൊതുവ്യത്യാസത്തിന്റെ പകുതിയായിരിക്കും ($p = \\frac{d}{2} \\implies \\mathbf{d = 2p}$).</li>
        <li>ആദ്യപദം $x_1 = S_1 = \\mathbf{p + q}$ ആണ്.</li>
      </ul>`,
    intuition_en: `<p>Gauss trick: write the sum forwards and backwards. Each column sums to $(x_1 + x_n)$. With $n$ such columns, the double sum is $n(x_1 + x_n)$, so the single sum is half of that.</p>`,
    intuition_ml: `<p>പദങ്ങൾ നേരെയും തിരിച്ചുമെഴുതി കൂട്ടിയാൽ $n$ ജോഡികൾ ലഭിക്കും; ഓരോ ജോഡിയുടെയും തുക $(x_1 + x_n)$ ആയതിനാൽ ആകെ തുക $\\frac{n}{2}(x_1 + x_n)$ ആകുന്നു.</p>`,
    proof: {
      idea_en: 'Write the sum forward and in reverse, sum pair-wise, and divide by 2.',
      idea_ml: 'തുക നേരെയും തിരിച്ചുമെഴുതി കൂട്ടിയ ശേഷം 2 കൊണ്ട് ഹരിക്കുന്നു.',
      why_en: 'Every pair of terms equidistant from ends has sum equal to (x_1 + x_n).',
      why_ml: 'രണ്ടറ്റത്തുനിന്നും തുല്യ അകലത്തിലുള്ള പദങ്ങളുടെ തുക എപ്പോഴും $(x_1 + x_n)$ ആണ്.',
      rungs_en: [
        { why_en: 'Write sum forwards.', m: 'S_n = x_1 + x_2 + \\dots + x_n' },
        { why_en: 'Write sum backwards.', m: 'S_n = x_n + x_{n-1} + \\dots + x_1' },
        { why_en: 'Add equations column by column (n pairs).', m: '2S_n = (x_1 + x_n) + (x_2 + x_{n-1}) + \\dots + (x_n + x_1) = n(x_1 + x_n)' },
        { why_en: 'Divide by 2 to isolate S_n.', m: 'S_n = \\frac{n}{2}(x_1 + x_n) = \\frac{n}{2}[2a + (n - 1)d]' }
      ],
      rungs_ml: [
        { why_ml: 'തുക നേരെ എഴുതുന്നു.', m: 'S_n = x_1 + x_2 + \\dots + x_n' },
        { why_ml: 'തുക തിരിച്ചെഴുതുന്നു.', m: 'S_n = x_n + x_{n-1} + \\dots + x_1' },
        { why_ml: 'രണ്ട് സമവാക്യങ്ങളും കൂട്ടുന്നു ($n$ എണ്ണം ജോഡികൾ).', m: '2S_n = n(x_1 + x_n)' },
        { why_ml: '2 കൊണ്ട് ഹരിക്കുമ്പോൾ സൂത്രവാക്യം ലഭിക്കുന്നു.', m: 'S_n = \\frac{n}{2}(x_1 + x_n) = \\frac{n}{2}[2a + (n - 1)d]' }
      ]
    },
    needs: ['m10.1.5.term-relations-and-averages'],
    traps_en: [
      'In S_n = 3n² + 5n, the common difference is 2 × 3 = 6, NOT 3.',
      'If S_n has a constant term (like 2n² + 3n + 1), it is NOT the sum of an arithmetic sequence starting from the first term.'
    ],
    traps_ml: [
      '$S_n = 3n^2 + 5n$ എന്നതിൽ പൊതുവ്യത്യാസം $2 \\times 3 = 6$ ആണ്, $3$ അല്ല.',
      '$S_n$-ൽ സ്ഥിരസംഖ്യ വന്നാൽ (ഉദാ: $2n^2 + 3n + 1$), അത് ആദ്യപദം മുതലുള്ള സമാന്തരശ്രേണിയുടെ തുകയല്ല.'
    ],
    cards_en: [
      { q: 'Find the sum of the first 20 natural numbers.', a: '$S_{20} = \\frac{20 \\times 21}{2} = 10 \\times 21 = \\mathbf{210}$.', kind: 'apply' },
      { q: 'If S_n = 2n² + 4n, find the common difference d and first term a.', a: '$d = 2 \\times 2 = \\mathbf{4}$; $a = S_1 = 2(1)^2 + 4(1) = \\mathbf{6}$.', kind: 'apply' },
      { q: 'What is the sum of the first 25 odd numbers?', a: 'Sum of first $n$ odd numbers is $n^2$: $25^2 = \\mathbf{625}$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ആദ്യത്തെ 20 എണ്ണൽസംഖ്യകളുടെ തുക കാണുക.', a: '$S_{20} = \\frac{20 \\times 21}{2} = 10 \\times 21 = \\mathbf{210}$.', kind: 'apply' },
      { q: 'S_n = 2n² + 4n ആയാൽ പൊതുവ്യത്യാസവും ആദ്യപദവും എത്ര?', a: '$d = 2 \\times 2 = \\mathbf{4}$; $a = S_1 = 2(1)^2 + 4(1) = \\mathbf{6}$.', kind: 'apply' },
      { q: 'ആദ്യത്തെ 25 ഒറ്റസംഖ്യകളുടെ തുക എത്ര?', a: 'ആദ്യത്തെ $n$ ഒറ്റസംഖ്യകളുടെ തുക $n^2$ ആണ്: $25^2 = \\mathbf{625}$.', kind: 'recall' }
    ]
  }
);
