/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 10: Polynomials (ബഹുപദങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.10.1 Polynomial Functions & Evaluation (ബഹുപദങ്ങളും വില കാണലും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.10.1.polynomial-functions-and-degree',
    sec: '10.10.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Polynomial Functions & Evaluation',
    title_ml: 'ബഹുപദങ്ങളും വില കാണലും',
    oneLine_en: 'A polynomial P(x) is an algebraic expression of the form an xⁿ + ... + a1 x + a0 with non-negative integer exponents; evaluating at x = k gives the number P(k).',
    oneLine_ml: 'ഋണേതര പൂർണ്ണസംഖ്യകൾ കൃതികളായി വരുന്ന $a_n x^n + \\dots + a_1 x + a_0$ എന്ന രൂപത്തിലുള്ള ബീജഗണിത വാക്യമാണ് ബഹുപദം; $x$ ന് $k$ എന്ന വില നൽകുമ്പോൾ ലഭിക്കുന്ന മൂല്യമാണ് $P(k)$.',
    statement_en: `<p><b>Definition of a Polynomial:</b></p>
      <p>An algebraic expression in variable $x$ of the form:</p>
      $$\\mathbf{P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0}$$
      <p>where $a_n \\ne 0$ and $n$ is a non-negative integer ($0, 1, 2, \\dots$), is called a <b>polynomial of degree $n$</b>.</p>
      <p><b>Classification by Degree:</b></p>
      <ul>
        <li><b>Linear Polynomial (Degree 1):</b> $P(x) = ax + b$ ($a \\ne 0$).</li>
        <li><b>Quadratic Polynomial (Degree 2):</b> $P(x) = ax^2 + bx + c$ ($a \\ne 0$).</li>
        <li><b>Cubic Polynomial (Degree 3):</b> $P(x) = ax^3 + bx^2 + cx + d$ ($a \\ne 0$).</li>
      </ul>
      <p><b>Polynomial Evaluation:</b> If $k$ is any real number, the value of $P(x)$ at $x = k$ is denoted by $P(k)$, obtained by replacing every occurrence of $x$ with $k$.</p>`,
    statement_ml: `<p><b>ബഹുപദത്തിന്റെ നിർവ്വചനം:</b></p>
      <p>$x$ എന്ന ചരത്തിലുള്ള താഴെ പറയുന്ന രൂപത്തിലുള്ള ബീജഗണിത വാക്യമാണ് <b>ബഹുപദം</b>:</p>
      $$\\mathbf{P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0}$$
      <p>ഇവിടെ $a_n \\ne 0$ ഉം $n$ ഒരു അഖണ്ഡസംഖ്യയും ($0, 1, 2, \\dots$) ആണ്. ഏറ്റവും വലിയ കൃതിയായ $n$ നെ ബഹുപദത്തിന്റെ <b>കൃതി</b> എന്ന് പറയുന്നു.</p>
      <p><b>കൃതിക്കനുസരിച്ചുള്ള തരംതിരിവ്:</b></p>
      <ul>
        <li><b>ഒന്നാംകൃതി ബഹുപദം:</b> $P(x) = ax + b$ ($a \\ne 0$).</li>
        <li><b>രണ്ടാംകൃതി ബഹുപദം:</b> $P(x) = ax^2 + bx + c$ ($a \\ne 0$).</li>
        <li><b>മൂന്നാംകൃതി ബഹുപദം:</b> $P(x) = ax^3 + bx^2 + cx + d$ ($a \\ne 0$).</li>
      </ul>
      <p><b>ബഹുപദത്തിന്റെ വില:</b> $x$ ന് പകരം ഒരു സംഖ്യ $k$ നൽകിയാൽ ലഭിക്കുന്ന വിലയെ $P(k)$ എന്ന് അടയാളപ്പെടുത്തുന്നു.</p>`,
    intuition_en: `<p>Think of a polynomial as a mathematical function machine: you input a number $x$, and it computes a weighted combination of powers of $x$ to yield an exact output number $P(x)$.</p>`,
    intuition_ml: `<p>ഒരു ബഹുപദത്തെ ഒരു ഗണിത യന്ത്രമായി കാണാം: $x$ എന്ന സംഖ്യ നൽകുമ്പോൾ അതിന്റെ വിവിധ കൃതികൾ കണക്കാക്കി ഗുണിച്ച് കൂട്ടി ഒരു പുതിയ സംഖ്യ $P(x)$ നൽകുന്നു.</p>`,
    proof: {
      idea_en: 'Well-defined functional mapping of real polynomial expressions under substitution.',
      idea_ml: 'ചരത്തിന് സംഖ്യാവില നൽകുമ്പോൾ സങ്കലന-ഗുണന നിയമങ്ങൾ വഴി സ്ഥിരമായ മൂല്യം ലഭിക്കുന്നു.',
      why_en: 'Polynomials are algebraic expressions closed under finite sums and products of indeterminates.',
      why_ml: 'ബഹുപദങ്ങളിലെ ക്രിയകൾ ഗണിതനിയമങ്ങൾക്കനുസൃതമായി കൃത്യമായ സംഖ്യാഫലം നൽകുന്നു.',
      rungs_en: [
        { why_en: 'General form of a polynomial of degree n with real coefficients.', m: 'P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0, \\quad a_n \\ne 0' },
        { why_en: 'Substitution of real value x = k into every power term.', m: 'P(k) = a_n k^n + a_{n-1} k^{n-1} + \\dots + a_1 k + a_0' },
        { why_en: 'Evaluating each power and taking the linear combination yields a unique real scalar.', m: 'P(k) \\in \\mathbb{R}' }
      ],
      rungs_ml: [
        { why_ml: '$n$-ആം കൃതിയിലുള്ള ബഹുപദത്തിന്റെ പൊതു രൂപം.', m: 'P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0, \\quad a_n \\ne 0' },
        { why_ml: '$x$ ന് പകരം $k$ എന്ന സംഖ്യ ഓരോ പദത്തിലും നൽകുന്നു.', m: 'P(k) = a_n k^n + a_{n-1} k^{n-1} + \\dots + a_1 k + a_0' },
        { why_ml: 'ഓരോ കൃതിയും കണക്കാക്കി ഗുണനവും സങ്കലനവും ചെയ്യുമ്പോൾ ഒരു സംഖ്യ ലഭിക്കുന്നു.', m: 'P(k) \\in \\mathbb{R}' }
      ]
    },
    traps_en: [
      'Thinking expressions with negative or fractional exponents like 1/x = x⁻¹ or √x = x^(1/2) are polynomials; all exponents must be non-negative integers (0, 1, 2, ...).',
      'Mishandling signs when substituting negative values into powers, such as writing (-2)² = -4 instead of +4.'
    ],
    traps_ml: [
      '$\\frac{1}{x} = x^{-1}, \\sqrt{x} = x^{1/2}$ എന്നിവ ബഹുപദങ്ങളാണെന്ന് തെറ്റിദ്ധരിക്കുന്നത്; കൃത്യങ്കങ്ങൾ ഋണേതര പൂർണ്ണസംഖ്യകൾ ($0, 1, 2, \\dots$) മാത്രമേ ആകാവൂ.',
      'നെഗറ്റീവ് സംഖ്യകൾ നൽകി കണക്കാക്കുമ്പോൾ ചിഹ്നങ്ങളിൽ തെറ്റുവരുത്തുന്നത്; ഉദാഹരണത്തിന് $(-2)^2 = 4$ എന്നതിന് പകരം $-4$ എന്ന് എഴുതുന്നത്.'
    ],
    cards_en: [
      { q: 'What is the definition and degree of the polynomial P(x) = 5x^3 - 4x + 7?', a: 'Degree is **3** (highest power of $x$). The leading coefficient is $5$ and constant term is $7$.', kind: 'recall' },
      { q: 'If P(x) = 2x^2 - 5x + 3, find the value of P(2) and P(-1).', a: '$P(2) = 2(4) - 10 + 3 = \\mathbf{1}$.\\n$P(-1) = 2(1) + 5 + 3 = \\mathbf{10}$.', kind: 'apply' },
      { q: 'Is Q(x) = 3x^2 + 2/x + 5 a polynomial? Explain.', a: '**No**, because $\\frac{2}{x} = 2x^{-1}$ has a negative exponent $-1$, violating the polynomial condition.', kind: 'trap' }
    ],
    cards_ml: [
      { q: '$P(x) = 5x^3 - 4x + 7$ എന്ന ബഹുപദത്തിന്റെ കൃതി എത്ര?', a: 'കൃതി **$3$** ആണ് ($x$ ന്റെ ഏറ്റവും ഉയർന്ന കൃത്യങ്കം). പ്രധാന ഗുണകം $5$ ഉം സ്ഥിരപദം $7$ ഉം ആണ്.', kind: 'recall' },
      { q: '$P(x) = 2x^2 - 5x + 3$ ആയാൽ $P(2), P(-1)$ എന്നിവയുടെ വിലകൾ കാണുക.', a: '$P(2) = 2(4) - 10 + 3 = \\mathbf{1}$.\\n$P(-1) = 2(1) + 5 + 3 = \\mathbf{10}$.', kind: 'apply' },
      { q: '$Q(x) = 3x^2 + \\frac{2}{x} + 5$ എന്നത് ഒരു ബഹുപദമാണോ? വിശദീകരിക്കുക.', a: '**അല്ല**, കാരണം $\\frac{2}{x} = 2x^{-1}$ ൽ ഋണ സംഖ്യ കൃതിയായി വരുന്നു. ബഹുപദങ്ങളിൽ കൃതി ഋണേതര പൂർണ്ണസംഖ്യ മാത്രമേ ആകാവൂ.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.2 Remainder Theorem & Factor Theorem (ശിഷ്ട സിദ്ധാന്തവും ഘടക സിദ്ധാന്തവും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.10.2.remainder-and-factor-theorem',
    sec: '10.10.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Remainder Theorem & Factor Theorem',
    title_ml: 'ശിഷ്ട സിദ്ധാന്തവും ഘടക സിദ്ധാന്തവും',
    oneLine_en: 'When P(x) is divided by (x - a), the remainder is P(a); therefore, (x - a) is a factor of P(x) if and only if P(a) = 0.',
    oneLine_ml: '$P(x)$ നെ $(x - a)$ കൊണ്ട് ഹരിച്ചാൽ കിട്ടുന്ന ശിഷ്ടം $P(a)$ ആണ്; അതിനാൽ $P(a) = 0$ ആയാൽ മാത്രമേ $(x - a)$ എന്നത് $P(x)$ ന്റെ ഒരു ഘടകമാകൂ.',
    statement_en: `<p><b>The Remainder Theorem:</b></p>
      <p>When a polynomial $P(x)$ is divided by a linear polynomial $(x - a)$, the remainder is the constant $P(a)$:</p>
      $$\\mathbf{P(x) = (x - a) \\cdot Q(x) + P(a)}$$
      <p>where $Q(x)$ is the quotient polynomial.</p>
      <p><b>Important Consequence:</b> For any polynomial $P(x)$ and any number $a$, the polynomial $(x - a)$ is always a factor of $\\mathbf{P(x) - P(a)}$.</p>
      <p><b>The Factor Theorem:</b></p>
      <p>For any polynomial $P(x)$ and any real number $a$:</p>
      $$\\mathbf{(x - a) \\text{ is a factor of } P(x) \\iff P(a) = 0}$$
      <p><b>Corollaries:</b></p>
      <ul>
        <li>$(x + a)$ is a factor of $P(x) \\iff P(-a) = 0$.</li>
        <li>$(ax - b)$ is a factor of $P(x) \\iff P\\left(\\frac{b}{a}\\right) = 0$.</li>
        <li>If $P(1) = 0$ (sum of all coefficients is 0), then $(x - 1)$ is always a factor.</li>
        <li>If $P(-1) = 0$, then $(x + 1)$ is always a factor.</li>
      </ul>`,
    statement_ml: `<p><b>ശിഷ്ട സിദ്ധാന്തം:</b></p>
      <p>$P(x)$ എന്ന ബഹുപദത്തെ $(x - a)$ എന്ന ഒന്നാംകൃതി ബഹുപദം കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ശിഷ്ടം $P(a)$ ആയിരിക്കും:</p>
      $$\\mathbf{P(x) = (x - a) \\cdot Q(x) + P(a)}$$
      <p><b>പ്രധാന നിഗമനം:</b> ഏതൊരു ബഹുപദം $P(x)$ നും ഏതൊരു സംഖ്യ $a$ ക്കും, $P(x) - P(a)$ ന്റെ ഒരു ഘടകമായിരിക്കും $(x - a)$.</p>
      <p><b>ഘടക സിദ്ധാന്തം:</b></p>
      <p>$P(x)$ എന്ന ബഹുപദത്തിന്:</p>
      $$\\mathbf{(x - a) \\text{ ഒരു ഘടകമാകണമെങ്കിൽ } P(a) = 0 \\text{ ആയിരിക്കണം}}$$
      <p><b>പ്രധാന നിഗമനങ്ങൾ:</b></p>
      <ul>
        <li>$(x + a)$ ഘടകമാകണമെങ്കിൽ $P(-a) = 0$ ആയിരിക്കണം.</li>
        <li>$(ax - b)$ ഘടകമാകണമെങ്കിൽ $P(b/a) = 0$ ആയിരിക്കണം.</li>
        <li>എല്ലാ ഗുണകങ്ങളുടെയും തുക $0$ ആയാൽ $P(1) = 0$ ആയതിനാൽ $(x - 1)$ എപ്പോഴും ഒരു ഘടകമായിരിക്കും.</li>
        <li>$P(-1) = 0$ ആയാൽ $(x + 1)$ ഒരു ഘടകമായിരിക്കും.</li>
      </ul>`,
    intuition_en: `<p>Just like integer arithmetic: $15 \\div 5$ leaves remainder $0$, so $5$ is a factor of $15$. If dividing $P(x)$ by $(x - a)$ leaves remainder $P(a) = 0$, then $(x - a)$ divides $P(x)$ with zero leftover, making it a factor.</p>`,
    intuition_ml: `<p>സാധാരണ സംഖ്യാ ഹരണത്തിന് തുല്യമാണിത്: $15$ നെ $5$ കൊണ്ട് ഹരിച്ചാൽ ശിഷ്ടം $0$ ആയതിനാൽ $5$ ഒരു ഘടകമാണ്. അതുപോലെ $P(a) = 0$ ആയാൽ ശിഷ്ടം പൂജ്യമായതിനാൽ $(x - a)$ ഘടകമാകുന്നു.</p>`,
    proof: {
      idea_en: 'Euclidean division algorithm for polynomials evaluated at the root point x = a.',
      idea_ml: 'ബഹുപദ ഹരണ നിയമത്തിൽ x = a നൽകി ശിഷ്ടം കണ്ടെത്തുന്നു.',
      why_en: 'Substituting x = a makes the product term (x - a)Q(x) vanish completely to zero.',
      why_ml: 'x = a നൽകിയാൽ (x - a)Q(x) എന്ന ഗുണനഫലം പൂജ്യമായി ശിഷ്ടം മാത്രം അവശേഷിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Euclidean division of P(x) by linear divisor (x - a) yields a quotient Q(x) and a constant remainder R.', m: 'P(x) = (x - a)Q(x) + R' },
        { why_en: 'Substitute x = a into the division identity.', m: 'P(a) = (a - a)Q(a) + R = 0 \\cdot Q(a) + R = R' },
        { why_en: 'The remainder R is precisely P(a), establishing the Remainder Theorem.', m: 'P(x) = (x - a)Q(x) + P(a) \\implies P(x) - P(a) = (x - a)Q(x)' },
        { why_en: '(x - a) is a factor if and only if the remainder R = 0, proving the Factor Theorem.', m: '(x - a) \\text{ divides } P(x) \\iff P(a) = 0' }
      ],
      rungs_ml: [
        { why_ml: '$P(x)$ നെ $(x - a)$ കൊണ്ട് ഹരിച്ചാൽ ഒരു ഹരണഫലം $Q(x)$ ഉം സ്ഥിരസംഖ്യയായ ശിഷ്ടം $R$ ഉം ലഭിക്കുന്നു.', m: 'P(x) = (x - a)Q(x) + R' },
        { why_ml: 'സമവാക്യത്തിൽ $x = a$ എന്ന് നൽകുന്നു.', m: 'P(a) = (a - a)Q(a) + R = 0 \\cdot Q(a) + R = R' },
        { why_ml: 'ശിഷ്ടം $R = P(a)$ എന്ന് ലഭിക്കുന്നു. ഇതിൽ നിന്ന് $P(x) - P(a)$ ന്റെ ഘടകമാണ് $(x - a)$ എന്ന് വ്യക്തമാകുന്നു.', m: 'P(x) = (x - a)Q(x) + P(a) \\implies P(x) - P(a) = (x - a)Q(x)' },
        { why_ml: 'ശിഷ്ടം $R = 0$ ആകുമ്പോൾ മാത്രമേ $(x - a)$ എന്നത് $P(x)$ ന്റെ ഘടകമാകൂ, ഇത് ഘടക സിദ്ധാന്തം തെളിയിക്കുന്നു.', m: '(x - a) \\text{ ഘടകമാണ് } \\iff P(a) = 0' }
      ]
    },
    traps_en: [
      'Testing P(a) when checking if (x + a) is a factor: remember (x + a) = (x - (-a)), so you must evaluate P(-a).',
      'Subtracting the wrong constant to make (x - a) a factor: the exact number to subtract from P(x) is P(a), because P(x) - P(a) leaves remainder 0.'
    ],
    traps_ml: [
      '$(x + a)$ ഘടകമാണോ എന്ന് പരിശോധിക്കാൻ $P(a)$ കാണുന്നത്; $(x + a) = (x - (-a))$ ആയതിനാൽ $P(-a)$ ആണ് കാണേണ്ടത്.',
      '$(x - a)$ ഘടകമാകാൻ കുറയ്ക്കേണ്ട സംഖ്യ തെറ്റായി തിരഞ്ഞെടുക്കുന്നത്; $P(x)$ ൽ നിന്ന് കൃത്യമായി $P(a)$ കുറച്ചാലാണ് ശിഷ്ടം പൂജ്യമാകുന്നത്.'
    ],
    cards_en: [
      { q: 'State the Remainder Theorem and Factor Theorem.', a: 'When $P(x)$ is divided by $(x - a)$, the remainder is **$P(a)$**. Furthermore, $(x - a)$ is a factor of $P(x)$ if and only if **$P(a) = 0$**.', kind: 'recall' },
      { q: 'Find the remainder when P(x) = 2x^3 - 3x^2 + 4x - 5 is divided by (x - 2).', a: 'Remainder $= P(2) = 2(8) - 3(4) + 4(2) - 5 = 16 - 12 + 8 - 5 = \\mathbf{7}$.', kind: 'apply' },
      { q: 'What number must be subtracted from P(x) = x^2 - 3x + 5 so that (x - 4) is a factor of the resulting polynomial?', a: 'Evaluate $P(4) = 4^2 - 3(4) + 5 = 16 - 12 + 5 = 9$. Subtracting **$9$** gives $x^2 - 3x - 4 = (x - 4)(x + 1)$.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ശിഷ്ട സിദ്ധാന്തവും ഘടക സിദ്ധാന്തവും പ്രസ്താവിക്കുക.', a: '$P(x)$ നെ $(x - a)$ കൊണ്ട് ഹരിച്ചാൽ കിട്ടുന്ന ശിഷ്ടം **$P(a)$** ആണ്. കൂടാതെ, $(x - a)$ എന്നത് $P(x)$ ന്റെ ഘടകമാകണമെങ്കിൽ **$P(a) = 0$** ആയിരിക്കണം.', kind: 'recall' },
      { q: '$P(x) = 2x^3 - 3x^2 + 4x - 5$ നെ $(x - 2)$ കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ശിഷ്ടം എത്ര?', a: 'ശിഷ്ടം $= P(2) = 2(8) - 3(4) + 4(2) - 5 = 16 - 12 + 8 - 5 = \\mathbf{7}$.', kind: 'apply' },
      { q: '$P(x) = x^2 - 3x + 5$ ൽ നിന്ന് ഏത് സംഖ്യ കുറച്ചാലാണ് $(x - 4)$ ഒരു ഘടകമായി ലഭിക്കുക?', a: '$P(4) = 16 - 12 + 5 = 9$. **$9$** കുറച്ചാൽ ലഭിക്കുന്ന $x^2 - 3x - 4 = (x - 4)(x + 1)$ ന്റെ ഘടകമാണ് $(x - 4)$.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.3 Factoring Quadratic & Higher Polynomials (ബഹുപദങ്ങളുടെ ഘടകക്രിയ)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.10.3.factoring-polynomials',
    sec: '10.10.3',
    kind: 'method',
    tier: 'core',
    title_en: 'Factoring Quadratic & Higher Polynomials',
    title_ml: 'ബഹുപദങ്ങളുടെ ഘടകക്രിയ',
    oneLine_en: 'A second-degree polynomial ax² + bx + c with roots p and q factors into a(x - p)(x - q); higher degree polynomials are factored using rational roots and division.',
    oneLine_ml: 'മൂലങ്ങൾ $p, q$ ആയ രണ്ടാംകൃതി ബഹുപദം $ax^2 + bx + c$ യെ $a(x - p)(x - q)$ എന്ന് ഘടകങ്ങളാക്കാം; ഉയർന്ന കൃതിയിലുള്ളവയെ ഘടക സിദ്ധാന്തവും ഹരണവും വഴി ഘടകങ്ങളാക്കുന്നു.',
    statement_en: `<p><b>Factoring Quadratic Polynomials:</b></p>
      <p>If $p$ and $q$ are the roots of the equation $ax^2 + bx + c = 0$, then the polynomial factors completely into linear factors as:</p>
      $$\\mathbf{ax^2 + bx + c = a(x - p)(x - q)}$$
      <p><b>Sum and Product of Roots:</b></p>
      $$\\mathbf{p + q = -\\frac{b}{a}, \\quad pq = \\frac{c}{a}}$$
      <p><b>Condition for Real Factorability:</b></p>
      <p>A second-degree polynomial $ax^2 + bx + c$ can be factored into first-degree polynomials with real coefficients if and only if its discriminant is non-negative:</p>
      $$\\mathbf{b^2 - 4ac \\ge 0}$$
      <p>If $b^2 - 4ac < 0$, it has no real roots and cannot be factored into real linear factors.</p>
      <p><b>Factoring Cubic Polynomials:</b></p>
      <ol>
        <li>Find a first rational root $x = a$ by testing factors of the constant term such that $P(a) = 0$. Then $(x - a)$ is a factor.</li>
        <li>Divide $P(x)$ by $(x - a)$ to determine the second-degree quotient $Q(x)$.</li>
        <li>Factor the quadratic quotient $Q(x)$ into two linear factors to obtain three linear factors in total.</li>
      </ol>`,
    statement_ml: `<p><b>രണ്ടാംകൃതി ബഹുപദങ്ങളുടെ ഘടകക്രിയ:</b></p>
      <p>$ax^2 + bx + c = 0$ എന്ന സമവാക്യത്തിന്റെ മൂലങ്ങൾ $p, q$ ആയാൽ ബഹുപദത്തിന്റെ ഘടക രൂപം:</p>
      $$\\mathbf{ax^2 + bx + c = a(x - p)(x - q)}$$
      <p><b>മൂലങ്ങളുടെ തുകയും ഗുണനഫലവും:</b></p>
      $$\\mathbf{p + q = -\\frac{b}{a}, \\quad pq = \\frac{c}{a}}$$
      <p><b>ഒന്നാംകൃതി ഘടകങ്ങളാക്കാനുള്ള നിബന്ധന:</b></p>
      <p>ഒരു രണ്ടാംകൃതി ബഹുപദത്തെ യഥാർത്ഥ സംഖ്യകൾ ഉൾക്കൊള്ളുന്ന ഒന്നാംകൃതി ഘടകങ്ങളാക്കാൻ സാധിക്കുന്നത് വിവേചകം പൂജ്യമോ അതിൽ കൂടുതലോ ആകുമ്പോൾ മാത്രമാണ്:</p>
      $$\\mathbf{b^2 - 4ac \\ge 0}$$
      <p>$b^2 - 4ac < 0$ ആയാൽ അതിന് ഒന്നാംകൃതി ഘടകങ്ങൾ ഉണ്ടായിരിക്കില്ല.</p>
      <p><b>മൂന്നാംകൃതി ബഹുപദങ്ങളുടെ ഘടകക്രിയ:</b></p>
      <ol>
        <li>സ്ഥിരപദത്തിന്റെ ഘടകങ്ങൾ നൽകി $P(a) = 0$ ആകുന്ന ഒരു സംഖ്യ $a$ കണ്ടെത്തുക. അപ്പോൾ $(x - a)$ ഒരു ഘടകമായിരിക്കും.</li>
        <li>$P(x)$ നെ $(x - a)$ കൊണ്ട് ഹരിച്ച് രണ്ടാംകൃതി ബഹുപദമായ $Q(x)$ കണ്ടെത്തുക.</li>
        <li>$Q(x)$ നെ ഘടകങ്ങളാക്കി ആകെ മൂന്ന് ഒന്നാംകൃതി ഘടകങ്ങളുടെ ഗുണനഫലമായി എഴുതുക.</li>
      </ol>`,
    intuition_en: `<p>Factoring breaks down complicated higher-degree expressions into basic linear building blocks, exactly like prime factorization decomposes composite integers into prime factors.</p>`,
    intuition_ml: `<p>ഒരു വലിയ സംഖ്യയെ അഭാജ്യ ഘടകങ്ങളാക്കി മാറ്റുന്നതുപോലെ, സങ്കീർണ്ണമായ ഉയർന്ന കൃതിയിലുള്ള ബഹുപദങ്ങളെ ലളിതമായ ഒന്നാംകൃതി ഘടകങ്ങളാക്കി മാറ്റുന്ന പ്രക്രിയയാണ് ഘടകക്രിയ.</p>`,
    proof: {
      idea_en: 'Fundamental Theorem of Algebra and factor decomposition via roots.',
      idea_ml: 'ബീജഗണിതത്തിന്റെ അടിസ്ഥാന സിദ്ധാന്തവും മൂലങ്ങൾ വഴിയുള്ള ഘടക വിഭജനവും.',
      why_en: 'Every polynomial of degree n has at most n roots and factors linearly over its roots.',
      why_ml: 'കൃതി n ആയ ബഹുപദത്തിന് പരമാവധി n മൂലങ്ങളും അത്രയും ഒന്നാംകൃതി ഘടകങ്ങളും ഉണ്ടായിരിക്കും.',
      rungs_en: [
        { why_en: 'Express quadratic polynomial with roots p and q.', m: 'ax^2 + bx + c = a\\left(x^2 + \\frac{b}{a}x + \\frac{c}{a}\\right)' },
        { why_en: 'Relate coefficients to sum and product of roots: p + q = -b/a and pq = c/a.', m: 'x^2 + \\frac{b}{a}x + \\frac{c}{a} = x^2 - (p + q)x + pq = (x - p)(x - q)' },
        { why_en: 'Multiply back the leading coefficient a.', m: 'ax^2 + bx + c = a(x - p)(x - q)' },
        { why_en: 'Roots exist in real numbers if and only if discriminant is non-negative.', m: 'p, q = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\in \\mathbb{R} \\iff b^2 - 4ac \\ge 0' }
      ],
      rungs_ml: [
        { why_ml: '$p, q$ എന്നിവ മൂലങ്ങളായ രണ്ടാംകൃതി ബഹുപദം എഴുതുന്നു.', m: 'ax^2 + bx + c = a\\left(x^2 + \\frac{b}{a}x + \\frac{c}{a}\\right)' },
        { why_ml: 'മൂലങ്ങളുടെ തുകയും ഗുണനഫലവും ചേർത്തുവെക്കുന്നു: $p + q = -b/a, pq = c/a$.', m: 'x^2 + \\frac{b}{a}x + \\frac{c}{a} = x^2 - (p + q)x + pq = (x - p)(x - q)' },
        { why_ml: 'പ്രധാന ഗുണകമായ $a$ ചേർത്തുവെച്ച് പൂർണ്ണ ഘടക രൂപം എഴുതുന്നു.', m: 'ax^2 + bx + c = a(x - p)(x - q)' },
        { why_ml: 'യഥാർത്ഥ മൂലങ്ങൾ ഉണ്ടാകണമെങ്കിൽ വിവേചകം പൂജ്യമോ പോസിറ്റീവോ ആയിരിക്കണം.', m: 'p, q = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\in \\mathbb{R} \\iff b^2 - 4ac \\ge 0' }
      ]
    },
    traps_en: [
      'Forgetting the leading coefficient a: writing (x - p)(x - q) when a != 1, such as factoring 2x² - 5x + 2 as (x - 2)(x - 1/2) without the leading factor 2.',
      'Attempting to factor quadratics where b² - 4ac < 0 over real numbers; polynomials like x² + 1 or x² + x + 1 have no real first-degree factors.'
    ],
    traps_ml: [
      '$x^2$ ന്റെ ഗുണകമായ $a$ വിട്ടുപോകുന്നത്; $a \\ne 1$ ആകുമ്പോൾ $a(x - p)(x - q)$ എന്ന് തന്നെ എഴുതണം. ഉദാഹരണത്തിന് $2x^2 - 5x + 2 = 2(x - 2)(x - 1/2)$.',
      '$b^2 - 4ac < 0$ ആകുമ്പോൾ ഘടകങ്ങളാക്കാൻ ശ്രമിക്കുന്നത്; $x^2 + 1, x^2 + x + 1$ തുടങ്ങിയവയ്ക്ക് ഒന്നാംകൃതി ഘടകങ്ങൾ ഇല്ല.'
    ],
    cards_en: [
      { q: 'How does ax^2 + bx + c factor when its roots are p and q?', a: '$\\mathbf{ax^2 + bx + c = a(x - p)(x - q)}$, where $p + q = -b/a$ and $pq = c/a$.', kind: 'recall' },
      { q: 'Factorize completely: 4x^2 - 16x + 15.', a: 'Roots from quadratic formula: $x = \\frac{16 \\pm \\sqrt{256 - 240}}{8} = \\frac{16 \\pm 4}{8}$, giving $5/2$ and $3/2$.\\n$4(x - 5/2)(x - 3/2) = \\mathbf{(2x - 5)(2x - 3)}$.', kind: 'apply' },
      { q: 'Can x^2 + 2x + 5 be factored into first-degree polynomials with real coefficients? Why?', a: '**No**, because the discriminant $b^2 - 4ac = 2^2 - 4(1)(5) = 4 - 20 = -16 < 0$, so there are no real roots.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'മൂലങ്ങൾ $p, q$ ആയാൽ $ax^2 + bx + c$ ന്റെ ഘടക രൂപം എന്താണ്?', a: '$\\mathbf{ax^2 + bx + c = a(x - p)(x - q)}$. ഇവിടെ $p + q = -b/a, pq = c/a$.', kind: 'recall' },
      { q: '$4x^2 - 16x + 15$ നെ ഒന്നാംകൃതി ഘടകങ്ങളാക്കുക.', a: 'മൂലങ്ങൾ: $x = \\frac{16 \\pm 4}{8} = 5/2, 3/2$.\\n$4(x - 5/2)(x - 3/2) = \\mathbf{(2x - 5)(2x - 3)}$.', kind: 'apply' },
      { q: '$x^2 + 2x + 5$ നെ യഥാർത്ഥ സംഖ്യകൾ ഉപയോഗിച്ച് ഒന്നാംകൃതി ഘടകങ്ങളാക്കാൻ കഴിയുമോ? എന്തുകൊണ്ട്?', a: '**ഇല്ല**, കാരണം $b^2 - 4ac = 4 - 20 = -16 < 0$ ആയതിനാൽ യഥാർത്ഥ മൂലങ്ങൾ ഇല്ല.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.10.4 Roots, Factors & Equation Solutions (മൂലങ്ങളും സമവാക്യ പരിഹാരങ്ങളും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.10.4.roots-and-solutions-of-polynomial-equations',
    sec: '10.10.4',
    kind: 'application',
    tier: 'core',
    title_en: 'Roots, Factors & Equation Solutions',
    title_ml: 'മൂലങ്ങളും സമവാക്യ പരിഹാരങ്ങളും',
    oneLine_en: 'A number k is a root of polynomial P(x) if P(k) = 0; finding all roots of P(x) = 0 is identical to finding the linear factors (x - k) of P(x).',
    oneLine_ml: '$P(k) = 0$ ആയാൽ $k$ എന്നത് $P(x)$ ന്റെ ഒരു മൂലമാണ്; $P(x) = 0$ ന്റെ പരിഹാരങ്ങൾ കണ്ടെത്തുന്നത് $P(x)$ ന്റെ $(x - k)$ എന്ന ഘടകങ്ങൾ കണ്ടെത്തുന്നതിന് തുല്യമാണ്.',
    statement_en: `<p><b>Roots of a Polynomial Equation:</b></p>
      <p>A number $k$ is called a <b>root</b> (or zero) of the polynomial $P(x)$ if and only if:</p>
      $$\\mathbf{P(k) = 0}$$
      <p>Solving the polynomial equation $P(x) = 0$ means determining all such values of $k$.</p>
      <p><b>Constructing Polynomials with Given Roots:</b></p>
      <ul>
        <li>A second-degree polynomial with roots $\\alpha$ and $\\beta$ is given by:
        $$\\mathbf{P(x) = c(x - \\alpha)(x - \\beta) = c\\left[x^2 - (\\alpha + \\beta)x + \\alpha\\beta\\right]}$$
        where $c \\ne 0$ is a non-zero real scaling constant.</li>
        <li>If an additional value such as $P(x_0) = y_0$ is specified, the constant $c$ is uniquely determined.</li>
      </ul>
      <p><b>Direct Duality between Roots and Factors:</b></p>
      $$\\mathbf{\\text{Roots are } x_1, x_2, \\dots, x_n \\iff \\text{Linear factors are } (x - x_1), (x - x_2), \\dots, (x - x_n)}$$`,
    statement_ml: `<p><b>ബഹുപദ സമവാക്യത്തിന്റെ മൂലങ്ങൾ (പൂജ്യങ്ങൾ):</b></p>
      <p>$P(k) = 0$ ആകുന്ന സംഖ്യ $k$ യെ $P(x)$ ന്റെ <b>മൂലം (പൂജ്യം)</b> എന്ന് വിളിക്കുന്നു. $P(x) = 0$ എന്ന സമവാക്യം പരിഹരിക്കുക എന്നാൽ ഇത്തരം എല്ലാ $k$ വിലകളും കണ്ടെത്തുക എന്നാണ് അർത്ഥം.</p>
      <p><b>തന്നിരിക്കുന്ന മൂലങ്ങൾ ഉപയോഗിച്ച് ബഹുപദം നിർമ്മിക്കൽ:</b></p>
      <ul>
        <li>മൂലങ്ങൾ $\\alpha, \\beta$ ആയ രണ്ടാംകൃതി ബഹുപദം:
        $$\\mathbf{P(x) = c(x - \\alpha)(x - \\beta) = c\\left[x^2 - (\\alpha + \\beta)x + \\alpha\\beta\\right]}$$
        ഇവിടെ $c \\ne 0$ ഒരു പൂജ്യമല്ലാത്ത സ്ഥിരസംഖ്യയാണ്.</li>
        <li>$P(x_0) = y_0$ എന്ന ഒരു അധിക വ്യവസ്ഥ തന്നിട്ടുണ്ടെങ്കിൽ $c$ യുടെ കൃത്യമായ വില കണ്ടെത്താം.</li>
      </ul>
      <p><b>മൂലങ്ങളും ഘടകങ്ങളും തമ്മിലുള്ള പരസ്പര ബന്ധം:</b></p>
      $$\\mathbf{\\text{മൂലങ്ങൾ } x_1, x_2, \\dots \\iff \\text{ഘടകങ്ങൾ } (x - x_1), (x - x_2), \\dots}$$`,
    intuition_en: `<p>Finding roots and factoring are two sides of the same coin: knowing the linear factors immediately gives the roots, and finding the roots immediately gives the linear factors.</p>`,
    intuition_ml: `<p>ഘടകങ്ങളും മൂലങ്ങളും ഒരേ നാணயത്തിന്റെ ഇരുവശങ്ങളാണ്: ഘടകങ്ങൾ അറിഞ്ഞാൽ മൂലങ്ങൾ കിട്ടും, മൂലങ്ങൾ കണ്ടെത്തിയാൽ ഘടകങ്ങൾ കിട്ടും.</p>`,
    proof: {
      idea_en: 'Zero-product property of real numbers applied to factorized polynomials.',
      idea_ml: 'സംഖ്യാ ഗുണനത്തിലെ പൂജ്യ നിയമം പ്രയോഗിച്ച് തെളിയിക്കുന്നു.',
      why_en: 'If a product of real factors equals zero, at least one factor must be zero.',
      why_ml: 'രണ്ട് സംഖ്യകളുടെ ഗുണനഫലം പൂജ്യമായാൽ അവയിലൊന്ന് നിർബന്ധമായും പൂജ്യമായിരിക്കണം.',
      rungs_en: [
        { why_en: 'Definition of root: k satisfies the equation P(k) = 0.', m: 'P(k) = 0' },
        { why_en: 'By the Factor Theorem, P(k) = 0 implies (x - k) is a factor of P(x).', m: 'P(x) = (x - k)Q(x)' },
        { why_en: 'By the zero-product property of real numbers, a product equals zero if and only if at least one factor is zero.', m: '(x - k)Q(x) = 0 \\iff x = k \\text{ or } Q(x) = 0' },
        { why_en: 'A polynomial of degree n can have at most n distinct real roots.', m: '\\text{Number of roots } \\le n' }
      ],
      rungs_ml: [
        { why_ml: 'മൂലത്തിന്റെ നിർവ്വചനം: $k$ എന്നത് $P(k) = 0$ ആകുന്ന സംഖ്യയാണ്.', m: 'P(k) = 0' },
        { why_ml: 'ഘടക സിദ്ധാന്തപ്രകാരം $P(k) = 0$ ആയാൽ $(x - k)$ എന്നത് $P(x)$ ന്റെ ഘടകമാണ്.', m: 'P(x) = (x - k)Q(x)' },
        { why_ml: 'സംഖ്യാ ഗുണന നിയമപ്രകാരം ഒരു ഗുണനഫലം പൂജ്യമാകണമെങ്കിൽ ഏതെങ്കിലും ഒരു ഘടകം പൂജ്യമായിരിക്കണം.', m: '(x - k)Q(x) = 0 \\iff x = k \\text{ അല്ലെങ്കിൽ } Q(x) = 0' },
        { why_ml: '$n$-ാം കൃതിയിലുള്ള ഒരു ബഹുപദത്തിന് പരമാവധി $n$ വ്യത്യസ്ത മൂലങ്ങൾ മാത്രമേ ഉണ്ടാകൂ.', m: '\\text{മൂലങ്ങളുടെ എണ്ണം } \\le n' }
      ]
    },
    traps_en: [
      'Confusing the root k with the factor (x - k): if 3 is a root, the factor is (x - 3), not (x + 3). If -4 is a root, the factor is (x + 4).',
      'Assuming two polynomials with the same roots are identical; they can differ by a constant scaling factor c != 0.'
    ],
    traps_ml: [
      'മൂലവും ഘടകവും തമ്മിൽ ചിഹ്നം മാറിപ്പോകുന്നത്; മൂലം $3$ ആയാൽ ഘടകം $(x - 3)$ ഉം, മൂലം $-4$ ആയാൽ ഘടകം $(x + 4)$ ഉം ആണ്.',
      'ഒരേ മൂലങ്ങളുള്ള രണ്ട് ബഹുപദങ്ങൾ തുല്യമായിരിക്കും എന്ന് കരുതുന്നത്; അവ ഒരു സ്ഥിരസംഖ്യ $c \\ne 0$ കൊണ്ട് ഗുണിച്ച വ്യത്യാസത്തിലാകാം.'
    ],
    cards_en: [
      { q: 'What is the relationship between the roots of P(x) = 0 and the linear factors of P(x)?', a: 'A real number $k$ is a root of $P(x) = 0$ if and only if **$(x - k)$ is a linear factor** of $P(x)$.', kind: 'recall' },
      { q: 'Find a second-degree polynomial whose roots are 5 and -2, and whose constant term is -20.', a: 'Roots $5, -2 \\implies P(x) = c(x - 5)(x + 2) = c(x^2 - 3x - 10)$. Constant term is $-10c = -20 \\implies c = 2$.\\nThus $\\mathbf{P(x) = 2x^2 - 6x - 20}$.', kind: 'apply' },
      { q: 'For what values of k can P(x) = x^2 + 4x + k be factored into two first-degree polynomials?', a: 'Factorable $\\iff b^2 - 4ac \\ge 0 \\implies 4^2 - 4(1)(k) \\ge 0 \\implies 16 - 4k \\ge 0 \\implies \\mathbf{k \\le 4}$.', kind: 'trap' }
    ],
    cards_ml: [
      { q: '$P(x) = 0$ ന്റെ മൂലങ്ങളും $P(x)$ ന്റെ ഒന്നാംകൃതി ഘടകങ്ങളും തമ്മിലുള്ള ബന്ധം എന്ത്?', a: '$k$ എന്നത് $P(x) = 0$ ന്റെ മൂലമാകണമെങ്കിൽ **$(x - k)$ എന്നത് $P(x)$ ന്റെ ഒരു ഘടകമായിരിക്കണം**.', kind: 'recall' },
      { q: 'മൂലങ്ങൾ $5$ ഉം $-2$ ഉം, സ്ഥിരപദം $-20$ ഉം ആയ രണ്ടാംകൃതി ബഹുപദം കണ്ടെത്തുക.', a: '$P(x) = c(x - 5)(x + 2) = c(x^2 - 3x - 10)$. സ്ഥിരപദം $-10c = -20 \\implies c = 2$.\\nഅതിനാൽ $\\mathbf{P(x) = 2x^2 - 6x - 20}$.', kind: 'apply' },
      { q: '$P(x) = x^2 + 4x + k$ നെ രണ്ട് ഒന്നാംകൃതി ഘടകങ്ങളാക്കാൻ $k$ ക്ക് പരമാവധി എത്ര വരെ വില നൽകാം?', a: 'ഘടകങ്ങളാകാൻ $b^2 - 4ac \\ge 0 \\implies 16 - 4k \\ge 0 \\implies \\mathbf{k \\le 4}$.', kind: 'trap' }
    ]
  }
);
