/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 1: Arithmetic Sequences (സമാന്തരശ്രേണികൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm10.1.1.number-sequences-and-common-difference',
    sec: '10.1.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Number Sequences & Common Difference',
    title_ml: 'സംഖ്യാശ്രേണികളും പൊതുവ്യത്യാസവും',
    oneLine_en: 'An arithmetic sequence is a sequence of numbers in which each term after the first is obtained by adding a fixed constant number (common difference d) to the preceding term.',
    oneLine_ml: 'ഒരു നിശ്ചിത സംഖ്യയിൽ തുടങ്ങി ഓരോ പദത്തോടും ഒരു സ്ഥിരസംഖ്യ (പൊതുവ്യത്യാസം d) കൂട്ടി കൂട്ടി എഴുതുന്ന സംഖ്യാക്രമമാണ് സമാന്തരശ്രേണി.',
    statement_en: `<p><b>Definition of Sequence:</b></p>
      <p>A collection of numbers written one after another according to a specific mathematical rule is called a <b>number sequence</b>. The numbers in the sequence are called its <b>terms</b>: $x_1, x_2, x_3, \\dots, x_n, \\dots$.</p>
      <p><b>Definition of Arithmetic Sequence:</b></p>
      <p>A sequence in which the difference between any term and its preceding term is always a constant value is called an <b>arithmetic sequence</b> (or arithmetic progression, AP):</p>
      $$\\mathbf{x_{n} - x_{n-1} = d \\quad \\text{for all } n \\ge 2}$$
      <p>The constant $d$ is called the <b>common difference</b>, and $x_1$ (often denoted $a$) is the <b>first term</b>.</p>
      <p><b>Recursive Structure:</b></p>
      <ul>
        <li>$x_1 = a$</li>
        <li>$x_2 = a + d$</li>
        <li>$x_3 = a + 2d$</li>
        <li>$x_n = a + (n - 1)d$</li>
      </ul>
      <p>If $d > 0$, the sequence is increasing; if $d < 0$, it is decreasing; if $d = 0$, it is constant.</p>`,
    statement_ml: `<p><b>സംഖ്യാശ്രേണിയുടെ നിർവ്വചനം:</b></p>
      <p>ഒരു പ്രത്യേക ഗണിത നിയമമനുസരിച്ച് തുടർച്ചയായി എഴുതിയിട്ടുള്ള സംഖ്യാക്രമത്തെയാണ് <b>സംഖ്യാശ്രേണി</b> എന്ന് വിളിക്കുന്നത്. ശ്രേണിയിലെ സംഖ്യകളെ <b>പദങ്ങൾ</b> എന്ന് വിളിക്കുന്നു: $x_1, x_2, x_3, \\dots, x_n, \\dots$.</p>
      <p><b>സമാന്തരശ്രേണിയുടെ നിർവ്വചനം:</b></p>
      <p>ഒരു ശ്രേണിയിൽ ഏതൊരു പദത്തിൽ നിന്നും തൊട്ടുപുറകിലെ പദം കുറച്ചാൽ കിട്ടുന്ന വ്യത്യാസം എപ്പോഴും തുല്യമാണെങ്കിൽ (സ്ഥിരസംഖ്യയാണെങ്കിൽ), ആ ശ്രേണിയെ <b>സമാന്തരശ്രേണി</b> എന്ന് വിളിക്കുന്നു:</p>
      $$\\mathbf{x_n - x_{n-1} = d \\quad (n \\ge 2)}$$
      <p>ഈ സ്ഥിരസംഖ്യയായ $d$-യെ <b>പൊതുവ്യത്യാസം</b> എന്നും, ആദ്യ പദത്തെ $x_1$ (അല്ലെങ്കിൽ $a$) എന്നും വിളിക്കുന്നു.</p>
      <p><b>പദങ്ങളുടെ ഘടന:</b></p>
      <ul>
        <li>ആദ്യ പദം: $x_1 = a$</li>
        <li>രണ്ടാം പദം: $x_2 = a + d$</li>
        <li>മൂന്നാം പദം: $x_3 = a + 2d$</li>
        <li>$n$-ാം പദം: $x_n = a + (n - 1)d$</li>
      </ul>
      <p>$d > 0$ ആകുമ്പോൾ ശ്രേണി കൂടിവരുന്നു; $d < 0$ ആകുമ്പോൾ ശ്രേണി കുറഞ്ഞുവരുന്നു.</p>`,
    intuition_en: `<p>Climbing a ladder with equally spaced rungs: with every step you take, your height increases by the exact same vertical distance d.</p>`,
    intuition_ml: `<p>തുല്യ അകലത്തിൽ പടികളുള്ള ഒരു ഗോവണി കയറുമ്പോൾ, ഓരോ പടി കയറുമ്പോഴും ഉയരം ഒരേ നിശ്ചിത അളവിൽ (പൊതുവ്യത്യാസം d) കൂടിക്കൊണ്ടിരിക്കുന്നു.</p>`,
    proof: {
      idea_en: 'Inductive step: each next term is obtained by adding d to the previous term.',
      idea_ml: 'ഓരോ പുതിയ പദവും മുൻപദത്തോട് $d$ കൂട്ടി നിർമ്മിക്കുന്നു.',
      why_en: 'Mathematical induction establishes x_n = a + (n - 1)d for all natural numbers n.',
      why_ml: 'ഗണിതശാസ്ത്ര ആഗമന തത്വപ്രകാരം ഇത് എല്ലാ എണ്ണൽസംഖ്യകൾക്കും ശരിയാണെന്ന് തെളിയുന്നു.',
      rungs_en: [
        { why_en: 'Base step: first term.', m: 'x_1 = a' },
        { why_en: 'Difference condition: consecutive difference is d.', m: 'x_k - x_{k-1} = d' },
        { why_en: 'Accumulated additions of d.', m: 'x_n = x_1 + \\underbrace{(d + d + \\dots + d)}_{(n-1) \\text{ times}} = a + (n - 1)d' }
      ],
      rungs_ml: [
        { why_ml: 'ആദ്യ പദം.', m: 'x_1 = a' },
        { why_ml: 'അടുത്തടുത്ത പദങ്ങളുടെ വ്യത്യാസം $d$ ആണ്.', m: 'x_2 - x_1 = d' },
        { why_ml: '$n$-ാം പദത്തിൽ $(n - 1)$ തവണ $d$ കൂട്ടുന്നു.', m: 'x_n = a + (n - 1)d' }
      ]
    },
    needs: ['p.1.2', 'm8.11.1.inversion-method'],
    traps_en: [
      'The common difference is ALWAYS (next term - previous term), so for 10, 7, 4... the difference is 7 - 10 = -3, NOT +3.',
      'Check at least three terms: equal first difference does not guarantee an AP unless differences continue to be equal.'
    ],
    traps_ml: [
      'പൊതുവ്യത്യാസം എപ്പോഴും (ഒരു പദം - തൊട്ടുപുറകിലെ പദം) ആണ്; $10, 7, 4\\dots$ എന്നതിൽ $d = 7 - 10 = -3$ ആണ്, $+3$ അല്ല.',
      'തുടർച്ചയായ എല്ലാ പദങ്ങൾ തമ്മിലുള്ള വ്യത്യാസവും തുല്യമാണെങ്കിൽ മാത്രമേ സമാന്തരശ്രേണിയാകൂ.'
    ],
    cards_en: [
      { q: 'Is the sequence 3, 7, 11, 15, ... an arithmetic sequence? If so, find its common difference.', a: 'Yes, because $7 - 3 = 11 - 7 = 15 - 11 = 4$. Common difference $d = \\mathbf{4}$.', kind: 'apply' },
      { q: 'What is the common difference of the sequence 20, 16, 12, 8, ...?', a: '$d = 16 - 20 = \\mathbf{-4}$.', kind: 'apply' },
      { q: 'How many times the common difference d must be added to the 1st term to reach the 10th term?', a: '$10 - 1 = \\mathbf{9}$ times ($x_{10} = x_1 + 9d$).', kind: 'recall' }
    ],
    cards_ml: [
      { q: '3, 7, 11, 15, ... ഒരു സമാന്തരശ്രേണിയാണോ? ആണെങ്കിൽ പൊതുവ്യത്യാസം എത്ര?', a: 'അതെ, കാരണം $7 - 3 = 11 - 7 = 4$. പൊതുവ്യത്യാസം $d = \\mathbf{4}$.', kind: 'apply' },
      { q: '20, 16, 12, 8, ... എന്ന ശ്രേണിയുടെ പൊതുവ്യത്യാസം എത്ര?', a: '$d = 16 - 20 = \\mathbf{-4}$.', kind: 'apply' },
      { q: 'ആദ്യ പദത്തോട് എത്ര തവണ പൊതുവ്യത്യാസം കൂട്ടിയാൽ 10-ാം പദം കിട്ടും?', a: '$10 - 1 = \\mathbf{9}$ തവണ ($x_{10} = x_1 + 9d$).', kind: 'recall' }
    ]
  },

  {
    id: 'm10.1.2.algebraic-form-of-arithmetic-sequence',
    sec: '10.1.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Algebraic Form of an Arithmetic Sequence',
    title_ml: 'സമാന്തരശ്രേണിയുടെ ബീജഗണിതം',
    oneLine_en: 'The nth term of any arithmetic sequence is a first-degree polynomial in n: xₙ = $dn + (a - d)$, where the coefficient of n is always the common difference d.',
    oneLine_ml: 'ഏതൊരു സമാന്തരശ്രേണിയുടെയും n-ാം പദം n-ൽ ഉള്ള ഒന്നാംകൃതി ബീജഗണിത വാക്യമാണ്: xₙ = dn + (a - d); ഇതിൽ n-ന്റെ ഗുണകം എപ്പോഴും പൊതുവ്യത്യാസം d ആയിരിക്കും.',
    statement_en: `<p><b>The $n$-th Term Formula:</b></p>
      <p>For an arithmetic sequence with first term $a$ and common difference $d$, the term at position $n$ is:</p>
      $$\\mathbf{x_n = a + (n - 1)d}$$
      <p>Expanding and rearranging terms by powers of $n$:</p>
      $$\\mathbf{x_n = dn + (a - d)}$$
      <p><b>Crucial Properties of the Algebraic Form:</b></p>
      <ul>
        <li>Every arithmetic sequence has an algebraic form $\\mathbf{x_n = an + b}$ (a first-degree polynomial in $n$).</li>
        <li>Conversely, any sequence whose $n$-th term is of the form $x_n = an + b$ is an arithmetic sequence whose <b>common difference is $a$</b> (the coefficient of $n$) and whose first term is $a + b$ (setting $n = 1$).</li>
        <li><b>Remainder Property:</b> If the common difference $d$ is a natural number, then all terms in the sequence leave the <b>same remainder</b> when divided by $d$.</li>
      </ul>`,
    statement_ml: `<p><b>$n$-ാം പദത്തിന്റെ സൂത്രവാക്യം:</b></p>
      <p>ആദ്യ പദം $a$-യും പൊതുവ്യത്യാസം $d$-യും ആയ സമാന്തരശ്രേണിയുടെ $n$-ാം പദം:</p>
      $$\\mathbf{x_n = a + (n - 1)d}$$
      <p>ഇതിനെ ബ്രാക്കറ്റ് തുറന്ന് ക്രമീകരിച്ചാൽ:</p>
      $$\\mathbf{x_n = dn + (a - d)}$$
      <p><b>ബീജഗണിത രൂപത്തിന്റെ പ്രധാന സവിശേഷതകൾ:</b></p>
      <ul>
        <li>ഏതൊരു സമാന്തരശ്രേണിയുടെയും ബീജഗണിത രൂപം $\\mathbf{x_n = an + b}$ എന്ന ഒന്നാംകൃതി വാക്യമായിരിക്കും.</li>
        <li>മറിച്ചും, $x_n = an + b$ രൂപത്തിലുള്ള ഏതൊരു ശ്രേണിയും ഒരു സമാന്തരശ്രേണിയായിരിക്കും; ഇതിന്റെ <b>പൊതുവ്യത്യാസം $a$</b> (n-ന്റെ ഗുണകം) ആയിരിക്കും, ആദ്യ പദം $a + b$ ($n = 1$ നൽകുമ്പോൾ) ആയിരിക്കും.</li>
        <li><b>ശിഷ്ട നിയമം:</b> പൊതുവ്യത്യാസം $d$ ഒരു എണ്ണൽസംഖ്യയാണെങ്കിൽ, ശ്രേണിയിലെ എല്ലാ പദങ്ങളെയും $d$ കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന <b>ശിഷ്ടം തുല്യമായിരിക്കും</b>.</li>
      </ul>`,
    intuition_en: `<p>Think of y = mx + c: an arithmetic sequence is the discrete grid version of a straight line, where step size n moves x_n up by slope d each time.</p>`,
    intuition_ml: `<p>ഒരു നേർവരയുടെ സമവാക്യം $y = mx + c$ എന്നതിന് സമാനമാണിത്; ഓരോ പടി മുന്നോട്ട് വെക്കുമ്പോഴും തുക $d$ നിരക്കിൽ ഉയരുന്ന നേർരേഖാ മാറ്റമാണ് സമാന്തരശ്രേണി.</p>`,
    proof: {
      idea_en: 'Expand a + (n-1)d = an - d + a = dn + (a - d). Check consecutive difference: x_{n+1} - x_n = d(n+1) - dn = d.',
      idea_ml: '$x_{n+1} - x_n$ കാണുമ്പോൾ $d$ ലഭിക്കുന്നു, അതിനാൽ $n$-ന്റെ ഗുണകമാണ് പൊതുവ്യത്യാസം.',
      why_en: 'Linear expressions in n always have constant first differences.',
      why_ml: '$n$-ലുള്ള ഒന്നാംകൃതി വാക്യങ്ങളുടെ അടുത്തടുത്ത വ്യത്യാസം എപ്പോഴും സ്ഥിരമായിരിക്കും.',
      rungs_en: [
        { why_en: 'General formula.', m: 'x_n = a + (n - 1)d' },
        { why_en: 'Distribute d.', m: 'x_n = a + nd - d = dn + (a - d)' },
        { why_en: 'Check difference of consecutive terms.', m: 'x_{n+1} - x_n = [d(n+1) + (a-d)] - [dn + (a-d)] = d' }
      ],
      rungs_ml: [
        { why_ml: 'പൊതു സമവാക്യം.', m: 'x_n = a + (n - 1)d' },
        { why_ml: 'ഗുണിച്ചെഴുതുമ്പോൾ.', m: 'x_n = dn + (a - d)' },
        { why_ml: 'അടുത്തടുത്ത പദങ്ങളുടെ വ്യത്യാസം $d$ ആണ്.', m: 'x_{n+1} - x_n = d' }
      ]
    },
    needs: ['m10.1.1.number-sequences-and-common-difference'],
    traps_en: [
      'In x_n = dn + (a - d), the constant term is (a - d), NOT simply a.',
      'To find whether a number K is a term of the sequence, check if n = (K - a)/d + 1 is a POSITIVE INTEGER.'
    ],
    traps_ml: [
      '$x_n = dn + (a - d)$ എന്നതിൽ സ്ഥിരപദം $(a - d)$ ആണ്, $a$ അല്ല.',
      'ഒരു സംഖ്യ ശ്രേണിയിലെ പദമാണോ എന്ന് പരിശോധിക്കാൻ $n = \\frac{K - a}{d} + 1$ ഒരു ധന പൂർണ്ണസംഖ്യയാണോ എന്ന് നോക്കണം.'
    ],
    cards_en: [
      { q: 'Find the algebraic form of the sequence 5, 8, 11, 14, ...', a: 'First term $a = 5$, difference $d = 3$. $x_n = dn + (a - d) = 3n + (5 - 3) = \\mathbf{3n + 2}$.', kind: 'apply' },
      { q: 'The algebraic form of a sequence is x_n = 7n - 4. What is its first term and common difference?', a: 'Common difference $d = \\mathbf{7}$ (coefficient of $n$); First term $x_1 = 7(1) - 4 = \\mathbf{3}$.', kind: 'apply' },
      { q: 'Is 100 a term of the sequence 4, 7, 10, ...?', a: '$x_n = 3n + 1$. $3n + 1 = 100 \\implies 3n = 99 \\implies n = 33$. Yes, it is the **33rd term**.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '5, 8, 11, 14, ... എന്ന ശ്രേണിയുടെ ബീജഗണിത രൂപം കാണുക.', a: '$a = 5, d = 3$. $x_n = dn + (a - d) = 3n + (5 - 3) = \\mathbf{3n + 2}$.', kind: 'apply' },
      { q: 'ഒരു ശ്രേണിയുടെ ബീജഗണിത രൂപം $x_n = 7n - 4$ ആണ്. ഇതിന്റെ ആദ്യ പദവും പൊതുവ്യത്യാസവും എത്ര?', a: 'പൊതുവ്യത്യാസം $d = \\mathbf{7}$; ആദ്യ പദം $x_1 = 7(1) - 4 = \\mathbf{3}$.', kind: 'apply' },
      { q: '100 എന്നത് 4, 7, 10, ... എന്ന ശ്രേണിയിലെ ഒരു പദമാണോ?', a: '$x_n = 3n + 1$. $3n + 1 = 100 \\implies 3n = 99 \\implies n = 33$. അതെ, ഇത് **33-ാം പദമാണ്**.', kind: 'apply' }
    ]
  },

  {
    id: 'm10.1.3.position-difference-and-term-relations',
    sec: '10.1.3',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Position Difference and Term Relations',
    title_ml: 'പദ വ്യത്യാസവും സ്ഥാന വ്യത്യാസവും',
    oneLine_en: 'The difference between any two terms of an arithmetic sequence is equal to the product of their position difference and the common difference: xₚ - x_q = (p - q)d.',
    oneLine_ml: 'ഒരു സമാന്തരശ്രേണിയിലെ ഏതൊരു രണ്ട് പദങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം അവയുടെ സ്ഥാന വ്യത്യാസത്തെ പൊതുവ്യത്യാസം കൊണ്ട് ഗുണിച്ചതിന് തുല്യമാണ്: xₚ - x_q = (p - q)d.',
    statement_en: `<p><b>Fundamental Term-Position Relation:</b></p>
      <p>For any two positions $p$ and $q$ in an arithmetic sequence with common difference $d$:</p>
      $$\\mathbf{x_p - x_q = (p - q)d}$$
      <p>Equivalently, the common difference is the ratio of term difference to position difference:</p>
      $$\\mathbf{d = \\frac{x_p - x_q}{p - q} = \\frac{\\text{Term Difference}}{\\text{Position Difference}}}$$
      <p><b>Consequences & Symmetries:</b></p>
      <ul>
        <li><b>Equidistant Terms:</b> In an AP, terms at equal position distances from a center have the center as their arithmetic mean:
        $$\\mathbf{\\frac{x_{n-k} + x_{n+k}}{2} = x_n \\quad \\iff \\quad x_{n-k} + x_{n+k} = 2x_n}$$</li>
        <li><b>Index Sum Invariance:</b> If $p + q = r + s$, then:
        $$\\mathbf{x_p + x_q = x_r + x_s}$$</li>
      </ul>`,
    statement_ml: `<p><b>പദ വ്യത്യാസവും സ്ഥാന വ്യത്യാസവും തമ്മിലുള്ള ബന്ധം:</b></p>
      <p>പൊതുവ്യത്യാസം $d$ ആയ ഒരു സമാന്തരശ്രേണിയിലെ $p, q$ സ്ഥാനങ്ങളിലുള്ള പദങ്ങൾക്ക്:</p>
      $$\\mathbf{x_p - x_q = (p - q)d}$$
      <p>അതായത്, പൊതുവ്യത്യാസം എന്നത് പദവ്യത്യാസത്തെ സ്ഥാനവ്യത്യാസം കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന തുകയ്ക്ക് തുല്യമാണ്:</p>
      $$\\mathbf{d = \\frac{x_p - x_q}{p - q} = \\frac{\\text{പദ വ്യത്യാസം}}{\\text{സ്ഥാന വ്യത്യാസം}}}$$
      <p><b>പ്രധാന സമമിതികൾ:</b></p>
      <ul>
        <li><b>തുല്യ അകലത്തിലുള്ള പദങ്ങൾ:</b> ഒരു പദത്തിന് ഇരുവശത്തുനിന്നും തുല്യ സ്ഥാന അകലത്തിലുള്ള രണ്ട് പദങ്ങളുടെ ശരാശരി ആ മധ്യപദത്തിന് തുല്യമായിരിക്കും:
        $$\\mathbf{x_{n-k} + x_{n+k} = 2x_n}$$</li>
        <li><b>സ്ഥാനങ്ങളുടെ തുക തുല്യമായാൽ:</b> $p + q = r + s$ ആണെങ്കിൽ:
        $$\\mathbf{x_p + x_q = x_r + x_s}$$</li>
      </ul>`,
    intuition_en: `<p>Moving from milestone p to milestone q along a road with telephone poles every d meters: the distance covered is the number of poles stepped past (p - q) multiplied by the step size d.</p>`,
    intuition_ml: `<p>ഒരു റോഡിൽ തുല്യ അകലത്തിൽ പോസ്റ്റുകളുണ്ടെങ്കിൽ, 5-ാം പോസ്റ്റിൽ നിന്ന് 9-ാം പോസ്റ്റിലേക്കുള്ള അകലം $(9 - 5 = 4)$ പോസ്റ്റ് അകലങ്ങൾക്ക് തുല്യമായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Subtract x_q = a + (q-1)d from x_p = a + (p-1)d: the initial term a cancels out, leaving ((p-1) - (q-1))d = (p-q)d.',
      idea_ml: '$x_p, x_q$ എന്നിവ കുറയ്ക്കുമ്പോൾ ആദ്യപദമായ $a$ ക്യാൻസൽ ആയി $(p - q)d$ ലഭിക്കുന്നു.',
      why_en: 'Independence from initial state: differences depend only on step intervals.',
      why_ml: 'ആദ്യ പദമേതാണെന്നത് വ്യത്യാസത്തെ ബാധിക്കില്ല.',
      rungs_en: [
        { why_en: 'Write both terms algebraically.', m: 'x_p = a + (p - 1)d, \\; x_q = a + (q - 1)d' },
        { why_en: 'Subtract the two equations.', m: 'x_p - x_q = [(p - 1) - (q - 1)]d' },
        { why_en: 'Simplify indices.', m: 'x_p - x_q = (p - q)d' }
      ],
      rungs_ml: [
        { why_ml: 'രണ്ട് പദങ്ങളുടെയും രൂപം എഴുതുന്നു.', m: 'x_p = a + (p - 1)d, \\; x_q = a + (q - 1)d' },
        { why_ml: 'രണ്ടും തമ്മിൽ കുറയ്ക്കുന്നു.', m: 'x_p - x_q = [(p - 1) - (q - 1)]d' },
        { why_ml: 'ലഘൂകരിക്കുന്നു.', m: 'x_p - x_q = (p - q)d' }
      ]
    },
    needs: ['m10.1.2.algebraic-form-of-arithmetic-sequence'],
    traps_en: [
      'Order of subtraction must match: x_p - x_q corresponds to (p - q), not (q - p).',
      'The difference between any two terms of an arithmetic sequence must be a MULTIPLE of the common difference.'
    ],
    traps_ml: [
      'കുറയ്ക്കുന്ന ക്രമം ശ്രദ്ധിക്കണം: $x_p - x_q$ എന്നത് $(p - q)d$ ആണ്, $(q - p)d$ അല്ല.',
      'ഒരു സമാന്തരശ്രേണിയിലെ ഏത് രണ്ട് പദങ്ങൾ തമ്മിലുള്ള വ്യത്യാസവും പൊതുവ്യത്യാസത്തിന്റെ ഗുണിതമായിരിക്കും.'
    ],
    cards_en: [
      { q: 'The 3rd term of an AP is 13 and the 7th term is 29. Find the common difference d.', a: '$d = \\frac{x_7 - x_3}{7 - 3} = \\frac{29 - 13}{4} = \\frac{16}{4} = \\mathbf{4}$.', kind: 'apply' },
      { q: 'In an AP, the 5th term is 20. What is the sum of its 3rd and 7th terms?', a: '$x_3 + x_7 = 2 \\times x_5 = 2 \\times 20 = \\mathbf{40}$.', kind: 'apply' },
      { q: 'Can the difference between any two terms of an AP with common difference 5 be 32?', a: 'No, because 32 is not a multiple of 5.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു സമാന്തരശ്രേണിയുടെ 3-ാം പദം 13-ഉം 7-ാം പദം 29-ഉം ആണ്. പൊതുവ്യത്യാസം d കാണുക.', a: '$d = \\frac{x_7 - x_3}{7 - 3} = \\frac{29 - 13}{4} = \\frac{16}{4} = \\mathbf{4}$.', kind: 'apply' },
      { q: 'ഒരു സമാന്തരശ്രേണിയുടെ 5-ാം പദം 20 ആണ്. ഇതിന്റെ 3-ാം പദത്തിന്റെയും 7-ാം പദത്തിന്റെയും തുക എത്ര?', a: '$x_3 + x_7 = 2 \\times x_5 = 2 \\times 20 = \\mathbf{40}$.', kind: 'apply' },
      { q: 'പൊതുവ്യത്യാസം 5 ആയ ഒരു സമാന്തരശ്രേണിയിലെ രണ്ട് പദങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം 32 ആകാൻ കഴിയുമോ?', a: 'കഴിയില്ല, കാരണം 32 എന്നത് 5-ന്റെ ഗുണിതമല്ല.', kind: 'recall' }
    ]
  },

  {
    id: 'm10.1.4.sum-of-terms-of-arithmetic-sequence',
    sec: '10.1.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Sum of Terms of an Arithmetic Sequence',
    title_ml: 'സമാന്തരശ്രേണികളുടെ തുക',
    oneLine_en: 'The sum of the first n terms of an arithmetic sequence is half the number of terms times the sum of the first and last terms: Sₙ = (n/2)(x₁ + xₙ) = (n/2)[2a + (n - 1)d].',
    oneLine_ml: 'ഒരു സമാന്തരശ്രേണിയുടെ ആദ്യത്തെ n പദങ്ങളുടെ തുക, പദങ്ങളുടെ എണ്ണത്തിന്റെ പകുതിയെ ആദ്യപദത്തിന്റെയും അവസാനപദത്തിന്റെയും തുക കൊണ്ട് ഗുണിച്ചതിന് തുല്യമാണ്: Sₙ = (n/2)(x₁ + xₙ).',
    statement_en: `<p><b>Formulas for the Sum of First $n$ Terms ($S_n$):</b></p>
      <p>For an arithmetic sequence with first term $a$ and common difference $d$:</p>
      $$\\mathbf{S_n = \\frac{n}{2}(x_1 + x_n) = \\frac{n}{2}(a + l)}$$
      <p>Substituting $x_n = a + (n - 1)d$ gives the alternative form:</p>
      $$\\mathbf{S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{d}{2}n^2 + \\left(a - \\frac{d}{2}\\right)n}$$
      <p><b>Algebraic Form of Sum:</b></p>
      <p>The sum of the first $n$ terms of any AP is a quadratic expression in $n$ with <b>no constant term</b>: $S_n = pn^2 + qn$, where the coefficient of $n^2$ is always half the common difference ($p = \\frac{d}{2}$).</p>
      <p><b>Special Sums:</b></p>
      <ul>
        <li>Sum of first $n$ natural numbers: $\\mathbf{1 + 2 + \\dots + n = \\frac{n(n + 1)}{2}}$</li>
        <li>Sum of first $n$ odd numbers: $\\mathbf{1 + 3 + 5 + \\dots + (2n - 1) = n^2}$</li>
        <li>Sum of first $n$ even numbers: $\\mathbf{2 + 4 + 6 + \\dots + 2n = n(n + 1) = n^2 + n}$</li>
      </ul>`,
    statement_ml: `<p><b>ആദ്യ $n$ പദങ്ങളുടെ തുക ($S_n$) കാണാനുള്ള സൂത്രവാക്യങ്ങൾ:</b></p>
      <p>ആദ്യ പദം $a$-യും പൊതുവ്യത്യാസം $d$-യും ആയ സമാന്തരശ്രേണിക്ക്:</p>
      $$\\mathbf{S_n = \\frac{n}{2}(x_1 + x_n) = \\frac{n}{2}(a + l)}$$
      <p>$x_n = a + (n - 1)d$ എന്ന് മാറ്റിയെഴുതിയാൽ:</p>
      $$\\mathbf{S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{d}{2}n^2 + \\left(a - \\frac{d}{2}\\right)n}$$
      <p><b>തുകയുടെ ബീജഗണിത രൂപം:</b></p>
      <p>ഏതൊരു സമാന്തരശ്രേണിയുടെയും തുക $n$-ൽ ഉള്ള ഒരു രണ്ടാംകൃതി വാക്യമായിരിക്കും: $S_n = pn^2 + qn$ (സ്ഥിരപദം പൂജ്യമായിരിക്കും). ഇതിൽ $n^2$-ന്റെ ഗുണകം എപ്പോഴും പൊതുവ്യത്യാസത്തിന്റെ പകുതിയായിരിക്കും ($p = \\frac{d}{2}$).</p>
      <p><b>പ്രത്യേക തുകകൾ:</b></p>
      <ul>
        <li>ആദ്യത്തെ $n$ എണ്ണൽസംഖ്യകളുടെ തുക: $\\mathbf{1 + 2 + \\dots + n = \\frac{n(n + 1)}{2}}$</li>
        <li>ആദ്യത്തെ $n$ ഒറ്റസംഖ്യകളുടെ തുക: $\\mathbf{1 + 3 + 5 + \\dots + (2n - 1) = n^2}$</li>
        <li>ആദ്യത്തെ $n$ ഇരട്ടസംഖ്യകളുടെ തുക: $\\mathbf{2 + 4 + 6 + \\dots + 2n = n(n + 1)}$</li>
      </ul>`,
    intuition_en: `<p>Gauss's trick: pair the first and last numbers (1 + 100 = 101), the second and second-last (2 + 99 = 101), up to 50 equal pairs: 50 × 101 = 5050.</p>`,
    intuition_ml: `<p>ഗാസിന്റെ വിദ്യ: ആദ്യത്തെയും അവസാനത്തെയും സംഖ്യകൾ ജോഡികളാക്കുക ($1 + 100 = 101, 2 + 99 = 101$). ഇങ്ങനെയുള്ള തുല്യ തുകയുള്ള $n/2$ ജോഡികളുടെ ഗുണനഫലമാണ് തുക.</p>`,
    proof: {
      idea_en: 'Write the sum forwards and backwards, add column-wise: each of the n pairs sums to (x1 + xn).',
      idea_ml: 'തുകയെ നേരെയും തിരിച്ചുമെഴുതി കൂട്ടിയാൽ $n$ തുല്യ ജോഡികൾ ലഭിക്കുന്നു.',
      why_en: 'Pairwise symmetry of arithmetic sequences around the central term.',
      why_ml: 'ഇരുവശങ്ങളിൽ നിന്നുമുള്ള പദങ്ങളുടെ തുക എപ്പോഴും തുല്യമായിരിക്കും.',
      rungs_en: [
        { why_en: 'Sum written forwards.', m: 'S_n = x_1 + x_2 + \\dots + x_{n-1} + x_n' },
        { why_en: 'Sum written in reverse order.', m: 'S_n = x_n + x_{n-1} + \\dots + x_2 + x_1' },
        { why_en: 'Add both equations together.', m: '2S_n = (x_1 + x_n) + (x_2 + x_{n-1}) + \\dots = n(x_1 + x_n)' },
        { why_en: 'Divide by 2.', m: 'S_n = \\frac{n}{2}(x_1 + x_n)' }
      ],
      rungs_ml: [
        { why_ml: 'തുക നേരെ എഴുതുന്നു.', m: 'S_n = x_1 + x_2 + \\dots + x_n' },
        { why_ml: 'തുക തിരിച്ചെഴുതുന്നു.', m: 'S_n = x_n + x_{n-1} + \\dots + x_1' },
        { why_ml: 'രണ്ടും തമ്മിൽ കൂട്ടുമ്പോൾ $n$ തുല്യ തുകകൾ ലഭിക്കുന്നു.', m: '2S_n = n(x_1 + x_n)' },
        { why_ml: '2 കൊണ്ട് ഹരിക്കുന്നു.', m: 'S_n = \\frac{n}{2}(x_1 + x_n)' }
      ]
    },
    needs: ['m10.1.2.algebraic-form-of-arithmetic-sequence', 'm10.1.3.position-difference-and-term-relations'],
    traps_en: [
      'In S_n = pn^2 + qn, the common difference is 2p (TWICE the coefficient of n²), NOT p.',
      'For odd number of terms, Sum = n * (middle term).'
    ],
    traps_ml: [
      '$S_n = pn^2 + qn$ എന്നതിൽ പൊതുവ്യത്യാസം $d = 2p$ ($n^2$-ന്റെ ഗുണകത്തിന്റെ ഇരട്ടി) ആണ്, $p$ അല്ല.',
      'പദങ്ങളുടെ എണ്ണം ഒറ്റസംഖ്യയാണെങ്കിൽ തുക $= n \\times (\\text{മധ്യപദം})$ ആയിരിക്കും.'
    ],
    cards_en: [
      { q: 'Find the sum of the first 20 terms of the sequence 3, 7, 11, 15, ...', a: '$a = 3, d = 4$. $S_{20} = \\frac{20}{2}[2(3) + 19(4)] = 10[6 + 76] = 10(82) = \\mathbf{820}$.', kind: 'apply' },
      { q: 'What is the sum of the first 25 odd numbers?', a: '$S_{25} = 25^2 = \\mathbf{625}$.', kind: 'apply' },
      { q: 'If the sum of first n terms is S_n = 3n² + 2n, what is the common difference of the sequence?', a: 'Common difference $d = 2 \\times 3 = \\mathbf{6}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '3, 7, 11, 15, ... എന്ന സമാന്തരശ്രേണിയുടെ ആദ്യത്തെ 20 പദങ്ങളുടെ തുക കാണുക.', a: '$a = 3, d = 4$. $S_{20} = 10[6 + 76] = 10 \\times 82 = \\mathbf{820}$.', kind: 'apply' },
      { q: 'ആദ്യത്തെ 25 ഒറ്റസംഖ്യകളുടെ തുക എത്ര?', a: '$S_{25} = 25^2 = \\mathbf{625}$.', kind: 'apply' },
      { q: 'ഒരു സമാന്തരശ്രേണിയുടെ ആദ്യത്തെ $n$ പദങ്ങളുടെ തുക $S_n = 3n^2 + 2n$ ആയാൽ പൊതുവ്യത്യാസം എത്ര?', a: 'പൊതുവ്യത്യാസം $d = 2 \\times 3 = \\mathbf{6}$.', kind: 'apply' }
    ]
  }
);
