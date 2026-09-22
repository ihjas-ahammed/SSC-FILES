/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 8: Polynomials (ബഹുപദങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm9.8.1.algebraic-expressions-and-polynomials',
    sec: '9.8.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Algebraic Expressions and Concept of Polynomials',
    title_ml: 'ബീജഗണിത വാക്യങ്ങളും ബഹുപദങ്ങളുടെ ആശയവും',
    oneLine_en: 'A polynomial is an algebraic expression in which the exponents of the variable are strictly non-negative whole numbers (0, 1, 2, 3, ...).',
    oneLine_ml: 'ചരത്തിന്റെ കൃത്യങ്കങ്ങൾ (ഘാതങ്ങൾ) അഖണ്ഡസംഖ്യകൾ (0, 1, 2, 3, ...) മാത്രമായി വരുന്ന ബീജഗണിത വാക്യങ്ങളെയാണ് ബഹുപദങ്ങൾ എന്ന് വിളിക്കുന്നത്.',
    statement_en: `<p>In mathematics, when changing measurements like side lengths or extensions are represented using a variable $x$, expressions formed by combining terms through addition, subtraction, and multiplication are called <b>algebraic expressions</b>.</p>
      <p><b>Strict Definition of a Polynomial:</b></p>
      <p>An algebraic expression in a single indeterminate variable $x$ is called a <b>polynomial</b> if all the exponents of $x$ are <b>non-negative integers (whole numbers)</b>:</p>
      $$p(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_2 x^2 + a_1 x + a_0$$
      <p>where $a_n, a_{n-1}, \\dots, a_0$ are real numbers (called <b>coefficients</b>) and $a_n \\neq 0$.</p>
      <p><b>Polynomials vs Non-Polynomials:</b></p>
      <ul>
        <li><b>Valid Polynomials:</b> $3x^2 + 5x - 7$, $\\frac{1}{2}x^3 - 4x + 1$, $\\sqrt{5}x + 2$, $9$ (constant).</li>
        <li><b>NOT Polynomials:</b> $\\frac{1}{x} = x^{-1}$ (negative power), $\\sqrt{x} = x^{1/2}$ (fractional power), $\\frac{x+1}{x-2}$ (rational expression with variable in denominator).</li>
      </ul>`,
    statement_ml: `<p>നീളങ്ങൾ, വിസ്തീർണ്ണങ്ങൾ തുടങ്ങിയ അളവുകളിലുണ്ടാകുന്ന മാറ്റങ്ങളെ $x$ എന്ന ചരം ഉപയോഗിച്ച് സൂചിപ്പിക്കുമ്പോൾ സങ്കലനം, വ്യവകലനം, ഗുണനം എന്നിവ വഴി രൂപപ്പെടുന്ന വാക്യങ്ങളാണ് <b>ബീജഗണിത വാക്യങ്ങൾ</b>.</p>
      <p><b>ബഹുപദത്തിന്റെ കൃത്യമായ നിർവ്വചനം:</b></p>
      <p>ഒരു ബീജഗണിത വാക്യത്തിലെ ചരത്തിന്റെ എല്ലാ കൃത്യങ്കങ്ങളും (ഘാതങ്ങൾ) <b>അഖണ്ഡസംഖ്യകൾ (0, 1, 2, 3, ...)</b> ആയാൽ ആ വാക്യത്തെ <b>ബഹുപദം</b> എന്ന് വിളിക്കുന്നു:</p>
      $$p(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0$$
      <p>ഇവിടെ $a_n, a_{n-1}, \\dots, a_0$ എന്നിവ വാസ്തവിക സംഖ്യകളാണ് (ഗുണകങ്ങൾ), $a_n \\neq 0$.</p>
      <p><b>ബഹുപദങ്ങളും അല്ലാത്തവയും:</b></p>
      <ul>
        <li><b>ബഹുപദങ്ങൾ:</b> $3x^2 + 5x - 7$, $\\frac{1}{2}x^3 - 4$, $\\sqrt{5}x + 2$, $9$ (സ്ഥിര ബഹുപദം).</li>
        <li><b>ബഹുപദങ്ങൾ അല്ലാത്തവ:</b> $\\frac{1}{x} = x^{-1}$ (ഋണ ഘാതം), $\\sqrt{x} = x^{1/2}$ (ഭിന്നസംഖ്യാ ഘാതം), $\\frac{x+1}{x-2}$ (ഛേദത്തിൽ ചരം വരുന്നത്).</li>
      </ul>`,
    intuition_en: `<p>A polynomial is a pure combination of counting operations: you can multiply a number by itself any whole number of times, but you cannot divide by the variable or take fractional roots of the variable.</p>`,
    intuition_ml: `<p>ബഹുപദത്തിൽ ചരത്തെ എത്ര തവണ വേണമെങ്കിലും പരസ്പരം ഗുണിക്കാം; എന്നാൽ ചരം കൊണ്ട് ഹരിക്കാനോ ചരത്തിന്റെ വർഗ്ഗമൂലം കാണാനോ പാടില്ല.</p>`,
    proof: {
      idea_en: 'Verify non-negative integer power test on each term of the algebraic expression.',
      idea_ml: 'ഓരോ പദത്തിലെയും ചരത്തിന്റെ കൃത്യങ്കം അഖണ്ഡസംഖ്യയാണോ എന്ന് പരിശോധിക്കുന്നു.',
      why_en: 'Negative or fractional powers violate the definition of polynomial functions.',
      why_ml: 'ഋണസംഖ്യയോ ഭിന്നസംഖ്യയോ ഘാതമായി വന്നാൽ അത് ബഹുപദമാവില്ല.',
      rungs_en: [
        { why_en: 'Write each term in standard form a * x^k.', m: 'p(x) = \\sum a_k x^k' },
        { why_en: 'Check that every exponent k belongs to {0, 1, 2, 3, ...}.', m: 'k \\in \\mathbb{W}' },
        { why_en: 'If any k < 0 or k not an integer, it is not a polynomial.', m: 'x^{-1} = \\frac{1}{x} \\notin \\text{Polynomials}' }
      ],
      rungs_ml: [
        { why_ml: 'ഓരോ പദത്തെയും $a \\cdot x^k$ രൂപത്തിൽ എഴുതുന്നു.', m: 'p(x) = \\sum a_k x^k' },
        { why_ml: 'എല്ലാ കൃത്യങ്കങ്ങളും $k \\in \\{0, 1, 2, \\dots\\}$ ആണെന്ന് ഉറപ്പാക്കുന്നു.', m: 'k \\ge 0' },
        { why_ml: 'ഋണ ഘാതമോ ഭിന്നസംഖ്യാ ഘാതമോ വന്നാൽ ബഹുപദമല്ല.', m: '\\frac{1}{x} \\text{ ബഹുപദമല്ല}' }
      ]
    },
    needs: ['p.5.3', 'p.5.1'],
    traps_en: [
      'Coefficients CAN be fractions or square roots (e.g. sqrt(2)*x is a valid polynomial); only the EXPONENTS of x must be non-negative integers.',
      'Terms with 1/x or 1/x^2 are NEVER polynomials because their exponent is negative.'
    ],
    traps_ml: [
      'ഗുണകങ്ങൾ ഭിന്നസംഖ്യയോ വർഗ്ഗമൂലമോ ആകാം (ഉദാ: $\\sqrt{2}x$ ബഹുപദമാണ്); ചരത്തിന്റെ കൃത്യങ്കങ്ങൾ മാത്രമാണ് അഖണ്ഡസംഖ്യകളാകേണ്ടത്.',
      '$\\frac{1}{x}$ വരുന്ന വാക്യങ്ങൾ ഒരിക്കലും ബഹുപദമല്ല.'
    ],
    cards_en: [
      { q: 'Is $f(x) = 5x^3 - \\sqrt{2}x + 7$ a polynomial?', a: '**Yes**, because all exponents of $x$ (3, 1, 0) are non-negative integers (the coefficient $\\sqrt{2}$ is fine).', kind: 'apply' },
      { q: 'Is $g(x) = 3x^2 + \\frac{4}{x} - 5$ a polynomial?', a: '**No**, because $\\frac{4}{x} = 4x^{-1}$, which has a negative exponent.', kind: 'apply' },
      { q: 'What set of numbers must the exponents of a polynomial belong to?', a: '**Non-negative integers** (whole numbers: $0, 1, 2, 3, \\dots$).', kind: 'recall' }
    ],
    cards_ml: [
      { q: '$f(x) = 5x^3 - \\sqrt{2}x + 7$ എന്നത് ഒരു ബഹുപദമാണോ?', a: '**അതെ**, $x$-ന്റെ ഘാതങ്ങൾ (3, 1, 0) അഖണ്ഡസംഖ്യകളാണ് (ഗുണകം $\\sqrt{2}$ ആകുന്നത് പ്രശ്നമല്ല).', kind: 'apply' },
      { q: '$g(x) = 3x^2 + \\frac{4}{x} - 5$ എന്നത് ഒരു ബഹുപദമാണോ?', a: '**അല്ല**, കാരണം $\\frac{4}{x} = 4x^{-1}$ എന്നതിൽ കൃത്യങ്കം ഋണസംഖ്യയാണ്.', kind: 'apply' },
      { q: 'ബഹുപദങ്ങളിലെ ചരത്തിന്റെ കൃത്യങ്കങ്ങൾ ഏത് ഗണത്തിൽപ്പെട്ടതായിരിക്കണം?', a: '**അഖണ്ഡസംഖ്യകൾ** ($0, 1, 2, 3, \\dots$).', kind: 'recall' }
    ]
  },

  {
    id: 'm9.8.2.degree-and-classification',
    sec: '9.8.2',
    kind: 'definition',
    tier: 'core',
    title_en: 'Degree and Classification of Polynomials',
    title_ml: 'ബഹുപദങ്ങളുടെ കൃതിയും തരംതിരിവും',
    oneLine_en: 'The degree of a polynomial is the highest power of the variable with non-zero coefficient, categorizing polynomials as constant (0), linear (1), quadratic (2), or cubic (3).',
    oneLine_ml: 'ഒരു ബഹുപദത്തിലെ പൂജ്യമല്ലാത്ത ഗുണകമുള്ള ചരത്തിന്റെ ഏറ്റവും വലിയ ഘാതത്തെയാണ് അതിന്റെ കൃതി എന്ന് പറയുന്നത്; കൃതി 0 ആയാൽ സ്ഥിര ബഹുപദം, 1 ആയാൽ ഒന്നാംകൃതി, 2 ആയാൽ രണ്ടാംകൃതി, 3 ആയാൽ മൂന്നാംകൃതി ബഹുപദം.',
    statement_en: `<p>The <b>degree</b> (കൃതി) of a non-zero polynomial $p(x)$ is the <b>highest exponent</b> of the variable $x$ appearing in any term with a non-zero coefficient.</p>
      <p><b>Standard Classification by Degree:</b></p>
      <ol>
        <li><b>Constant Polynomial (Degree 0):</b> $p(x) = c$ (where $c \\neq 0$), e.g., $p(x) = 7 = 7x^0$. (The zero polynomial $p(x) = 0$ has no defined degree).</li>
        <li><b>Linear Polynomial (Degree 1 / ഒന്നാംകൃതി ബഹുപദം):</b>
          $$p(x) = ax + b \\quad (a \\neq 0)$$
          Its graph is always a straight line.</li>
        <li><b>Quadratic Polynomial (Degree 2 / രണ്ടാംകൃതി ബഹുപദം):</b>
          $$p(x) = ax^2 + bx + c \\quad (a \\neq 0)$$
          Its graph is a parabola.</li>
        <li><b>Cubic Polynomial (Degree 3 / മൂന്നാംകൃതി ബഹുപദം):</b>
          $$p(x) = ax^3 + bx^2 + cx + d \\quad (a \\neq 0)$$</li>
      </ol>
      <p><b>Classification by Number of Terms:</b> Monomial (1 term), Binomial (2 terms), Trinomial (3 terms).</p>`,
    statement_ml: `<p>പൂജ്യമല്ലാത്ത ഒരു ബഹുപദത്തിൽ പൂജ്യമല്ലാത്ത ഗുണകമുള്ള ചരത്തിന്റെ <b>ഏറ്റവും വലിയ കൃത്യങ്കത്തെയാണ്</b> ആ ബഹുപദത്തിന്റെ <b>കൃതി</b> എന്ന് പറയുന്നത്.</p>
      <p><b>കൃതി അടിസ്ഥാനമാക്കിയുള്ള തരംതിരിവ്:</b></p>
      <ol>
        <li><b>സ്ഥിര ബഹുപദം (കൃതി 0):</b> $p(x) = c$ ($c \\neq 0$), ഉദാ: $p(x) = 7 = 7x^0$. (പൂജ്യം ബഹുപദത്തിന് കൃതി നിർവ്വചിച്ചിട്ടില്ല).</li>
        <li><b>ഒന്നാംകൃതി ബഹുപദം (കൃതി 1):</b>
          $$p(x) = ax + b \\quad (a \\neq 0)$$
          ഇതിന്റെ ഗ്രാഫ് ഒരു നേർവരയായിരിക്കും.</li>
        <li><b>രണ്ടാംകൃതി ബഹുപദം (കൃതി 2):</b>
          $$p(x) = ax^2 + bx + c \\quad (a \\neq 0)$$
          ഇതിന്റെ ഗ്രാഫ് ഒരു പരവലയം ആയിരിക്കും.</li>
        <li><b>മൂന്നാംകൃതി ബഹുപദം (കൃതി 3):</b>
          $$p(x) = ax^3 + bx^2 + cx + d \\quad (a \\neq 0)$$</li>
      </ol>
      <p><b>പദങ്ങളുടെ എണ്ണമനുസരിച്ചുള്ള തരംതിരിവ്:</b> ഏകപദം, ദ്വിപദം, ത്രിപദം.</p>`,
    intuition_en: `<p>The degree dictates the long-term growth rate and maximum number of directional bends or turning points the polynomial curve can have.</p>`,
    intuition_ml: `<p>ബഹുപദത്തിന്റെ കൃതിയാണ് $x$ വലുതാകുമ്പോൾ അതിന്റെ വളർച്ചാ നിരക്കിനെയും ഗ്രാഫിലുണ്ടാകുന്ന വളവുകളുടെ എണ്ണത്തെയും നിയന്ത്രിക്കുന്നത്.</p>`,
    proof: {
      idea_en: 'Examine each term, identify the power of x, and select the maximum power with non-zero coefficient.',
      idea_ml: 'ഓരോ പദത്തിലെയും ഘാതങ്ങൾ പരിശോധിച്ച് ഏറ്റവും വലിയ ഘാതം തിരഞ്ഞെടുക്കുന്നു.',
      why_en: 'Highest power term dominates the value of the polynomial for large x.',
      why_ml: 'വലിയ സംഖ്യകൾക്ക് വില നൽകുമ്പോൾ ഏറ്റവും വലിയ ഘാതമുള്ള പദമാണ് ബഹുപദത്തിന്റെ വിലയെ നിർണ്ണയിക്കുന്നത്.',
      rungs_en: [
        { why_en: 'Given polynomial in expanded form.', m: 'p(x) = a_n x^n + \\dots + a_0, \\, a_n \\neq 0' },
        { why_en: 'Identify exponents of all non-zero terms.', m: 'E = \\{k \\mid a_k \\neq 0\\}' },
        { why_en: 'Degree is the maximum element of set E.', m: '\\deg(p) = \\max(E) = n' }
      ],
      rungs_ml: [
        { why_ml: 'ബഹുപദം ക്രമമായി എഴുതുന്നു.', m: 'p(x) = a_n x^n + \\dots + a_0' },
        { why_ml: 'പൂജ്യമല്ലാത്ത ഗുണകങ്ങളുള്ള പദങ്ങളുടെ ഘാതങ്ങൾ കണ്ടെത്തുന്നു.', m: 'k \\in E' },
        { why_ml: 'ഇതിലെ ഏറ്റവും വലിയ സംഖ്യയാണ് കൃതി.', m: '\\deg(p) = n' }
      ]
    },
    needs: ['m9.8.1.algebraic-expressions-and-polynomials'],
    traps_en: [
      'Degree is determined ONLY by the power of the VARIABLE x, not by powers on constant numbers (e.g. 5^3 * x^2 has degree 2, not 3).',
      'The leading coefficient must NOT be zero.'
    ],
    traps_ml: [
      'കൃതി എന്നത് ചരമായ $x$-ന്റെ ഏറ്റവും വലിയ ഘാതമാണ്, സംഖ്യകളുടെ ഘാതമല്ല (ഉദാ: $5^3 x^2$-ന്റെ കൃതി 2 ആണ്, 3 അല്ല).',
      'ഏറ്റവും വലിയ ഘാതത്തിന്റെ ഗുണകം പൂജ്യമാകാൻ പാടില്ല.'
    ],
    cards_en: [
      { q: 'What is the degree of the polynomial $p(x) = 4x^3 - 7x^5 + 2x - 9$?', a: '$\\mathbf{5}$ (the highest power of $x$ is 5).', kind: 'apply' },
      { q: 'What is the general form of a linear polynomial in one variable?', a: '$\\mathbf{p(x) = ax + b}$ (where $a \\neq 0$).', kind: 'recall' },
      { q: 'What is the degree of a non-zero constant polynomial like $p(x) = 14$?', a: '$\\mathbf{0}$ (since $14 = 14x^0$).', kind: 'recall' }
    ],
    cards_ml: [
      { q: '$p(x) = 4x^3 - 7x^5 + 2x - 9$ എന്ന ബഹുപദത്തിന്റെ കൃതി എത്ര?', a: '$\\mathbf{5}$ ($x$-ന്റെ ഏറ്റവും വലിയ ഘാതം 5 ആണ്).', kind: 'apply' },
      { q: 'ഒന്നാംകൃതി ബഹുപദത്തിന്റെ പൊതുരൂപം എന്താണ്?', a: '$\\mathbf{p(x) = ax + b}$ ($a \\neq 0$).', kind: 'recall' },
      { q: '$p(x) = 14$ എന്ന സ്ഥിര ബഹുപദത്തിന്റെ കൃതി എത്ര?', a: '$\\mathbf{0}$ ($14 = 14x^0$ ആയതിനാൽ).', kind: 'recall' }
    ]
  },

  {
    id: 'm9.8.3.values-and-zeroes-of-polynomials',
    sec: '9.8.3',
    kind: 'method',
    tier: 'core',
    title_en: 'Value of a Polynomial and Zeroes of Polynomials',
    title_ml: 'ബഹുപദത്തിന്റെ വിലയും ബഹുപദത്തിന്റെ പൂജ്യങ്ങളും',
    oneLine_en: 'The value of polynomial p(x) at x = k is p(k); a real number k is called a zero (root) of p(x) if p(k) = 0.',
    oneLine_ml: 'x = k ആകുമ്പോൾ ബഹുപദത്തിന്റെ വില p(k) ആണ്; p(k) = 0 ആകുന്ന സംഖ്യ k-യെ ആ ബഹുപദത്തിന്റെ പൂജ്യം (Zero / Root) എന്ന് വിളിക്കുന്നു.',
    statement_en: `<p><b>Value of a Polynomial:</b></p>
      <p>If $p(x)$ is a polynomial in $x$, and $k$ is any real number, the value obtained by substituting $x = k$ everywhere in $p(x)$ is denoted by $\\mathbf{p(k)}$.</p>
      <p><b>Zero of a Polynomial (ബഹുപദത്തിന്റെ പൂജ്യം):</b></p>
      <p>A real number $k$ is said to be a <b>zero</b> (or root) of a polynomial $p(x)$ if and only if:</p>
      $$\\mathbf{p(k) = 0}$$
      <p>Geometrically, the zeroes of $p(x)$ are the exact <b>$x$-intercepts</b> where the curve $y = p(x)$ crosses or touches the $x$-axis.</p>
      <p><b>Finding Zeroes:</b></p>
      <ul>
        <li><b>Linear Polynomial $p(x) = ax + b$:</b>
          $$ax + b = 0 \\implies \\mathbf{x = -\\frac{b}{a}}$$
          A linear polynomial has <b>exactly one</b> zero.</li>
        <li><b>Quadratic Polynomial $p(x) = ax^2 + bx + c$:</b>
          Can have <b>at most 2</b> real zeroes.</li>
        <li>In general, a polynomial of degree $n$ can have <b>at most $n$</b> real zeroes.</li>
      </ul>`,
    statement_ml: `<p><b>ബഹുപദത്തിന്റെ വില:</b></p>
      <p>$p(x)$ എന്ന ബഹുപദത്തിൽ $x$-ന് പകരം $k$ എന്ന സംഖ്യ നൽകുമ്പോൾ ലഭിക്കുന്ന മൂല്യത്തെ $\\mathbf{p(k)}$ എന്ന് സൂചിപ്പിക്കുന്നു.</p>
      <p><b>ബഹുപദത്തിന്റെ പൂജ്യം:</b></p>
      <p>$x = k$ ആകുമ്പോൾ ബഹുപദത്തിന്റെ വില പൂജ്യമായാൽ ($p(k) = 0$), $k$-യെ $p(x)$-ന്റെ <b>പൂജ്യം</b> എന്ന് വിളിക്കുന്നു:</p>
      $$\\mathbf{p(k) = 0}$$
      <p>ജ്യാമിതീയമായി, $y = p(x)$ എന്ന വര $x$-അക്ഷത്തെ മുറിച്ചുകടക്കുന്ന ബിന്ദുവിന്റെ $x$-സൂചകസംഖ്യയാണ് പൂജ്യം.</p>
      <p><b>പൂജ്യങ്ങൾ കണ്ടെത്തൽ:</b></p>
      <ul>
        <li><b>ഒന്നാംകൃതി ബഹുപദം $p(x) = ax + b$:</b>
          $$ax + b = 0 \\implies \\mathbf{x = -\\frac{b}{a}}$$
          ഒന്നാംകൃതി ബഹുപദത്തിന് <b>കൃത്യം ഒരു പൂജ്യം</b> മാത്രമേ ഉണ്ടായിരിക്കൂ.</li>
        <li><b>രണ്ടാംകൃതി ബഹുപദം:</b> പരമാവധി 2 പൂജ്യങ്ങൾ ഉണ്ടാകാം.</li>
        <li>പൊതുവെ, $n$ കൃതിയുള്ള ഒരു ബഹുപദത്തിന് <b>പരമാവധി $n$</b> പൂജ്യങ്ങൾ ഉണ്ടായിരിക്കും.</li>
      </ul>`,
    intuition_en: `<p>Finding the zero of a polynomial is asking: "At what input x does the balance point hit 0?"</p>`,
    intuition_ml: `<p>ബഹുപദത്തിന്റെ പൂജ്യം കാണുക എന്നാൽ അതിന്റെ വില പൂജ്യമായി മാറുന്ന $x$-ന്റെ മൂല്യം എന്താണെന്ന് കണ്ടെത്തുകയാണ്.</p>`,
    proof: {
      idea_en: 'Set p(x) equal to 0 and solve the resulting algebraic equation.',
      idea_ml: 'p(x) = 0 എന്ന് നൽകി സമവാക്യം നിർദ്ധാരണം ചെയ്യുന്നു.',
      why_en: 'By definition, a root makes the evaluated expression zero.',
      why_ml: 'നിർവ്വചനപ്രകാരം പൂജ്യം എന്നാൽ വില പൂജ്യമാകുന്ന ചരവിലയാണ്.',
      rungs_en: [
        { why_en: 'Set linear polynomial equal to zero.', m: 'p(x) = ax + b = 0' },
        { why_en: 'Subtract b from both sides.', m: 'ax = -b' },
        { why_en: 'Divide by non-zero coefficient a.', m: 'x = -\\frac{b}{a}' },
        { why_en: 'Verify: substitute x = -b/a back into p(x).', m: 'p\\left(-\\frac{b}{a}\\right) = a\\left(-\\frac{b}{a}\\right) + b = -b + b = 0' }
      ],
      rungs_ml: [
        { why_ml: 'ബഹുപദത്തെ പൂജ്യത്തോട് തുലനം ചെയ്യുന്നു.', m: 'ax + b = 0' },
        { why_ml: 'ഇരുവശത്തുനിന്നും b കുറയ്ക്കുന്നു.', m: 'ax = -b' },
        { why_ml: 'a കൊണ്ട് ഹരിക്കുന്നു.', m: 'x = -\\frac{b}{a}' },
        { why_ml: 'പരിശോധന: വില തിരികെ നൽകുമ്പോൾ 0 ലഭിക്കുന്നു.', m: 'p(-b/a) = 0' }
      ]
    },
    needs: ['m9.8.2.degree-and-classification', 'm8.11.2.linear-equations-one-variable'],
    traps_en: [
      'A zero of a polynomial does NOT mean the number 0 itself; it is the VALUE OF x that makes p(x) = 0.',
      'The number 0 CAN be a zero of a polynomial (e.g. for p(x) = 3x, x = 0 is indeed a zero).'
    ],
    traps_ml: [
      'ബഹുപദത്തിന്റെ പൂജ്യം എന്നാൽ സംഖ്യ പൂജ്യം (0) ആകണമെന്നില്ല; വില പൂജ്യമാകുന്ന $x$-ന്റെ സംഖ്യാവിലയാണ്.',
      'പൂജ്യം (0) ഒരു ബഹുപദത്തിന്റെ പൂജ്യമാകാനും സാധ്യതയുണ്ട് (ഉദാ: $p(x) = 3x$-ൽ $x = 0$ പൂജ്യമാണ്).'
    ],
    cards_en: [
      { q: 'Find the zero of the linear polynomial $p(x) = 3x - 12$.', a: '$3x - 12 = 0 \\implies 3x = 12 \\implies x = \\mathbf{4}$.', kind: 'apply' },
      { q: 'Evaluate $p(2)$ for the polynomial $p(x) = 2x^2 - 3x + 5$.', a: '$p(2) = 2(2^2) - 3(2) + 5 = 8 - 6 + 5 = \\mathbf{7}$.', kind: 'apply' },
      { q: 'How many zeroes can a degree $n$ polynomial have at most?', a: 'At most $\\mathbf{n}$ real zeroes.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '$p(x) = 3x - 12$ എന്ന ഒന്നാംകൃതി ബഹുപദത്തിന്റെ പൂജ്യം കണ്ടെത്തുക.', a: '$3x - 12 = 0 \\implies x = \\mathbf{4}$.', kind: 'apply' },
      { q: '$p(x) = 2x^2 - 3x + 5$ ആയാൽ $p(2)$ കാണുക.', a: '$p(2) = 2(4) - 3(2) + 5 = 8 - 6 + 5 = \\mathbf{7}$.', kind: 'apply' },
      { q: 'കൃതി $n$ ആയ ഒരു ബഹുപദത്തിന് പരമാവധി എത്ര പൂജ്യങ്ങൾ ഉണ്ടാകാം?', a: 'പരമാവധി $\\mathbf{n}$ പൂജ്യങ്ങൾ.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.8.4.polynomial-operations-and-geometric-modeling',
    sec: '9.8.4',
    kind: 'method',
    tier: 'core',
    title_en: 'Operations on Polynomials and Geometric Modeling',
    title_ml: 'ബഹുപദങ്ങളുടെ ക്രിയകളും ജ്യാമിതീയ പ്രയോഗങ്ങളും',
    oneLine_en: 'Polynomials can be added, subtracted, and multiplied; the degree of the product equals the sum of their degrees: $\deg(p \cdot q) = \deg(p) + \deg(q)$.',
    oneLine_ml: 'ബഹുപദങ്ങളെ കൂട്ടാനും കുറയ്ക്കാനും ഗുണിക്കാനും സാധിക്കും; രണ്ട് ബഹുപദങ്ങളുടെ ഗുണനഫലത്തിന്റെ കൃതി അവയുടെ കൃതികളുടെ തുകയ്ക്ക് തുല്യമായിരിക്കും: $\deg(p \cdot q) = \deg(p) + \deg(q)$.',
    statement_en: `<p><b>1. Addition and Subtraction:</b></p>
      <p>To add or subtract polynomials, combine like terms (terms having the identical power of $x$):</p>
      $$(3x^2 + 5x - 2) + (2x^2 - x + 7) = (3+2)x^2 + (5-1)x + (-2+7) = 5x^2 + 4x + 5$$
      $$\\deg(p \\pm q) \\le \\max(\\deg p, \\deg q)$$
      <p><b>2. Multiplication of Polynomials:</b></p>
      <p>Multiply every term of the first polynomial by every term of the second polynomial using the distributive law, then combine like terms:</p>
      $$\\mathbf{\\deg(p \\times q) = \\deg(p) + \\deg(q)}$$
      <p><b>Geometric Modeling of Physical Quantities:</b></p>
      <ul>
        <li><b>Perimeter Modeling:</b> A rectangle of initial sides $3\\text{ cm}$ and $5\\text{ cm}$ with all sides extended by $x$:
          $$P(x) = 2((3 + x) + (5 + x)) = 4x + 16 \\quad (\\text{degree 1})$$</li>
        <li><b>Area Modeling:</b> The area of the extended rectangle:
          $$A(x) = (x + 3)(x + 5) = x^2 + 8x + 15 \\quad (\\text{degree 2})$$</li>
        <li><b>Volume Modeling:</b> An open cardboard box made by cutting squares of side $x$ from corners of a $10 \\times 10$ sheet:
          $$V(x) = x(10 - 2x)^2 = 4x^3 - 40x^2 + 100x \\quad (\\text{degree 3})$$</li>
      </ul>`,
    statement_ml: `<p><b>1. സങ്കലനവും വ്യവകലനവും:</b></p>
      <p>ബഹുപദങ്ങൾ കൂട്ടുമ്പോഴും കുറയ്ക്കുമ്പോഴും സമാന പദങ്ങൾ (ഒരേ ഘാതമുള്ള പദങ്ങൾ) തമ്മിൽ കൂട്ടുകയോ കുറയ്ക്കുകയോ ചെയ്യുന്നു:</p>
      $$(3x^2 + 5x - 2) + (2x^2 - x + 7) = 5x^2 + 4x + 5$$
      $$\\deg(p \\pm q) \\le \\max(\\deg p, \\deg q)$$
      <p><b>2. ബഹുപദങ്ങളുടെ ഗുണനം:</b></p>
      <p>വിതരണ നിയമം ഉപയോഗിച്ച് ആദ്യ ബഹുപദത്തിലെ ഓരോ പദത്തെയും രണ്ടാമത്തെ ബഹുപദത്തിലെ ഓരോ പദം കൊണ്ടും ഗുണിക്കുന്നു:</p>
      $$\\mathbf{\\deg(p \\times q) = \\deg(p) + \\deg(q)}$$
      <p><b>ഭൗതിക അളവുകളുടെ ബഹുപദ രൂപീകരണം:</b></p>
      <ul>
        <li><b>ചുറ്റളവ് മോഡലിംഗ്:</b> $3\\text{ cm}, 5\\text{ cm}$ വശങ്ങളുള്ള ചതുരത്തിന്റെ വശങ്ങൾ $x$ വീതം നീട്ടിയാൽ പുതിയ ചുറ്റളവ്:
          $$P(x) = 2((3 + x) + (5 + x)) = 4x + 16 \\quad (\\text{ഒന്നാംകൃതി})$$</li>
        <li><b>പരപ്പളവ് മോഡലിംഗ്:</b> പുതിയ പരപ്പളവ്:
          $$A(x) = (x + 3)(x + 5) = x^2 + 8x + 15 \\quad (\\text{രണ്ടാംകൃതി})$$</li>
        <li><b>വ്യാപ്ത മോഡലിംഗ്:</b> ചതുരക്കടലാസിന്റെ മൂലകളിൽ നിന്ന് $x$ വശമുള്ള സമചതുരങ്ങൾ മുറിച്ചുണ്ടാക്കുന്ന പെട്ടിയുടെ വ്യാപ്തം:
          $$V(x) = x(10 - 2x)^2 = 4x^3 - 40x^2 + 100x \\quad (\\text{മൂന്നാംകൃതി})$$</li>
      </ul>`,
    intuition_en: `<p>Multiplying powers adds exponents ($x^m \\cdot x^n = x^{m+n}$), which is why multiplying polynomials of degrees m and n produces a polynomial of degree m + n.</p>`,
    intuition_ml: `<p>കൃത്യങ്ക നിയമപ്രകാരം $x^m \\cdot x^n = x^{m+n}$ ആയതിനാലാണ് ഗുണനഫലത്തിന്റെ കൃതി ഘാതങ്ങളുടെ തുകയായി മാറുന്നത്.</p>`,
    proof: {
      idea_en: 'Apply distributive law and exponent multiplication laws to leading terms.',
      idea_ml: 'വിതരണ നിയമവും കൃത്യങ്ക നിയമവും പ്രയോഗിച്ച് മുൻനിര പദങ്ങൾ ഗുണിക്കുന്നു.',
      why_en: 'Leading term of product is (a_m x^m) * (b_n x^n) = a_m b_n x^{m+n}.',
      why_ml: 'ഏറ്റവും ഉയർന്ന പദങ്ങൾ ഗുണിക്കുമ്പോൾ ഘാതങ്ങൾ തമ്മിൽ കൂട്ടപ്പെടുന്നു.',
      rungs_en: [
        { why_en: 'Leading terms are a_m x^m and b_n x^n with a_m, b_n non-zero.', m: 'p(x) = a_m x^m + \\dots, \\, q(x) = b_n x^n + \\dots' },
        { why_en: 'Product leading term.', m: '(a_m x^m)(b_n x^n) = a_m b_n x^{m+n}' },
        { why_en: 'Since real product a_m * b_n is non-zero, degree is m + n.', m: '\\deg(p \\cdot q) = m + n = \\deg(p) + \\deg(q)' }
      ],
      rungs_ml: [
        { why_ml: 'ഏറ്റവും ഉയർന്ന പദങ്ങൾ $a_m x^m$, $b_n x^n$ എന്നിവയാണ്.', m: 'p(x) = a_m x^m + \\dots' },
        { why_ml: 'ഗുണനഫലത്തിലെ ഉയർന്ന പദം.', m: '(a_m x^m)(b_n x^n) = a_m b_n x^{m+n}' },
        { why_ml: 'ഗുണനഫലത്തിന്റെ കൃതി ഘാതങ്ങളുടെ തുകയാകുന്നു.', m: '\\deg(p \\cdot q) = \\deg(p) + \\deg(q)' }
      ]
    },
    needs: ['m9.8.2.degree-and-classification', 'p.5.4'],
    traps_en: [
      'deg(p * q) is the SUM of degrees: deg(p) + deg(q), NOT the product.',
      'In area modeling, do not forget to multiply both length and breadth binomials completely.'
    ],
    traps_ml: [
      'ഗുണനഫലത്തിന്റെ കൃതി കൃതികളുടെ തുകയാണ്: $\\deg(p) + \\deg(q)$, ഗുണനഫലമല്ല.',
      'പരപ്പളവ് സമവാക്യത്തിൽ രണ്ട് ദ്വിപദങ്ങളും പരസ്പരം പൂർണ്ണമായി ഗുണിക്കണം.'
    ],
    cards_en: [
      { q: 'If $p(x)$ has degree 2 and $q(x)$ has degree 3, what is the degree of $p(x) \\times q(x)$?', a: '$2 + 3 = \\mathbf{5}$.', kind: 'apply' },
      { q: 'Multiply: $(x + 4)(x + 6)$.', a: '$x^2 + 6x + 4x + 24 = \\mathbf{x^2 + 10x + 24}$.', kind: 'apply' },
      { q: 'A square of side $x$ has each side increased by $3\\text{ cm}$. What is the polynomial for its new area?', a: '$(x + 3)^2 = \\mathbf{x^2 + 6x + 9}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '$p(x)$-ന്റെ കൃതി 2-ഉം $q(x)$-ന്റെ കൃതി 3-ഉം ആയാൽ $p(x) \\times q(x)$-ന്റെ കൃതി എത്ര?', a: '$2 + 3 = \\mathbf{5}$.', kind: 'apply' },
      { q: 'ഗുണിക്കുക: $(x + 4)(x + 6)$.', a: '$x^2 + 10x + 24$.', kind: 'apply' },
      { q: 'വശം $x$ ആയ സമചതുരത്തിന്റെ വശങ്ങൾ $3\\text{ cm}$ വീതം കൂട്ടിയാൽ പുതിയ പരപ്പളവിന്റെ ബഹുപദ രൂപം എന്താണ്?', a: '$(x + 3)^2 = \\mathbf{x^2 + 6x + 9}$.', kind: 'apply' }
    ]
  }
);
