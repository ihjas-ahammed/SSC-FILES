/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 10: Polynomials (ബഹുപദങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm10.10.1.polynomial-functions-and-degree',
    sec: '10.10.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Polynomial Functions & Evaluation',
    title_ml: 'ബഹുപദങ്ങളും വില കാണലും',
    oneLine_en: 'A polynomial P(x) is an algebraic expression of the form an xⁿ + ... + a1 x + a0 with non-negative integer exponents; evaluating at x = k gives the number P(k).',
    oneLine_ml: 'ഋണേതര പൂർണ്ണസംഖ്യകൾ കൃതികളായി വരുന്ന an xⁿ + ... + a1 x + a0 എന്ന രൂപത്തിലുള്ള ബീജഗണിത വാക്യമാണ് ബഹുപദം; x ന് k എന്ന വില നൽകുമ്പോൾ ലഭിക്കുന്ന മൂല്യമാണ് P(k).',
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
    intuition_en: 'Think of a polynomial as a mathematical recipe or function machine: you drop in a number x, and it computes a weighted sum of powers of x to produce a single output number P(x).',
    intuition_ml: 'ഒരു ബഹുപദത്തെ ഒരു ഗണിത യന്ത്രമായി കാണാം: x എന്ന സംഖ്യ അകത്തേക്ക് നൽകുമ്പോൾ അതിന്റെ വിവിധ കൃതികൾ കണക്കാക്കി ഒരു പുതിയ സംഖ്യ P(x) നൽകുന്നു.',
    proof: {
      idea_en: 'Well-defined functional mapping of real polynomial rings.',
      idea_ml: 'സംഖ്യാ ഗണങ്ങളിലെ സങ്കലന-ഗുണന പ്രവർത്തനങ്ങളുടെ സ്ഥിരതയിലൂടെ നിർവ്വചിക്കുന്നു.',
      why_en: 'Because polynomials are closed under standard algebraic operations and evaluation preserves homomorphism.',
      why_ml: 'ബഹുപദങ്ങളിലെ ക്രിയകൾ ക്രമബദ്ധമായ സംഖ്യാഫലം നൽകുന്നു.',
      rungs: [
        {
          title_en: 'Term Definition and Non-negative Exponent',
          title_ml: 'പദങ്ങളുടെ നിർവ്വചനം',
          detail_en: 'Each term $a_k x^k$ requires $k \\in \\{0, 1, 2, \\dots\\}$. Exponents like $-1$ or $1/2$ are strictly forbidden in polynomials.',
          detail_ml: 'ഓരോ പദത്തിലും കൃത്യങ്കം $0, 1, 2, \\dots$ എന്നിവ മാത്രമേ വരാവൂ. നെഗറ്റീവ് കൃതികളോ ഭിന്നസംഖ്യാ കൃതികളോ ബഹുപദങ്ങളിൽ അനുവദനീയമല്ല.'
        },
        {
          title_en: 'Evaluation Mapping',
          title_ml: 'വില നൽകൽ പ്രക്രിയ',
          detail_en: 'The evaluation map $\\text{ev}_k: \\mathbb{R}[x] \\to \\mathbb{R}$ substituting $x \\mapsto k$ uniquely determines the real value $P(k)$.',
          detail_ml: '$x$ ന് പകരം $k$ നൽകി കണക്കാക്കുമ്പോൾ കൃത്യമായ ഒരു യഥാർത്ഥ സംഖ്യ ലഭിക്കുന്നു.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Thinking that 1/x or √x is a polynomial term.',
        fix_en: 'A polynomial must have ONLY non-negative integer powers: x⁻¹ and x^(1/2) are NOT polynomial terms.'
      }
    ],
    traps_ml: [
      {
        trap_ml: '1/x, √x എന്നിവ ബഹുപദങ്ങളാണെന്ന് തെറ്റിദ്ധരിക്കുന്നത്.',
        fix_ml: 'ബഹുപദങ്ങളിൽ x ന്റെ കൃതികൾ എണ്ണൽസംഖ്യകളോ പൂജ്യമോ മാത്രമേ ആകാവൂ; ഛേദത്തിൽ x വരുന്നതോ വർഗ്ഗമൂലം വരുന്നതോ ബഹുപദമല്ല.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'If P(x) = 2x² - 5x + 3, find the value of P(2).',
        a: 'P(2) = 2(2)² - 5(2) + 3 = 2(4) - 10 + 3 = 8 - 10 + 3 = 1.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'P(x) = 2x² - 5x + 3 ആയാൽ P(2) ന്റെ വില കാണുക.',
        a: 'P(2) = 2(4) - 10 + 3 = 8 - 10 + 3 = 1.'
      }
    ]
  },
  {
    id: 'm10.10.2.remainder-and-factor-theorem',
    sec: '10.10.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Remainder Theorem & Factor Theorem',
    title_ml: 'ശിഷ്ട സിദ്ധാന്തവും ഘടക സിദ്ധാന്തവും',
    oneLine_en: 'When P(x) is divided by $(x - a)$, the remainder is P(a); therefore, (x - a) is a factor of P(x) if and only if P(a) = 0.',
    oneLine_ml: 'P(x) നെ (x - a) കൊണ്ട് ഹരിച്ചാൽ കിട്ടുന്ന ശിഷ്ടം P(a) ആണ്; അതിനാൽ P(a) = 0 ആയാൽ മാത്രമേ (x - a) എന്നത് P(x) ന്റെ ഒരു ഘടകമാകൂ.',
    statement_en: `<p><b>The Remainder Theorem:</b></p>
      <p>When a polynomial $P(x)$ is divided by a linear polynomial $(x - a)$, the remainder is the constant $P(a)$:</p>
      $$\\mathbf{P(x) = (x - a) \\cdot Q(x) + P(a)}$$
      <p>where $Q(x)$ is the quotient polynomial.</p>
      <p><b>The Factor Theorem:</b></p>
      <p>For any polynomial $P(x)$ and any real number $a$:</p>
      $$\\mathbf{(x - a) \\text{ is a factor of } P(x) \\iff P(a) = 0}$$
      <p><b>Corollaries:</b></p>
      <ul>
        <li>$(x + a)$ is a factor of $P(x) \\iff P(-a) = 0$.</li>
        <li>$(ax - b)$ is a factor of $P(x) \\iff P\\left(\\frac{b}{a}\\right) = 0$.</li>
        <li>If $P(1) = 0$ (sum of all coefficients is 0), then $(x - 1)$ is always a factor.</li>
        <li>If $P(-1) = 0$ (sum of coefficients of even powers equals sum of coefficients of odd powers), then $(x + 1)$ is a factor.</li>
      </ul>`,
    statement_ml: `<p><b>ശിഷ്ട സിദ്ധാന്തം:</b></p>
      <p>$P(x)$ എന്ന ബഹുപദത്തെ $(x - a)$ എന്ന ഒന്നാംകൃതി ബഹുപദം കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ശിഷ്ടം $P(a)$ ആയിരിക്കും:</p>
      $$\\mathbf{P(x) = (x - a) \\cdot Q(x) + P(a)}$$
      <p><b>ഘടക സിദ്ധാന്തം:</b></p>
      <p>$P(x)$ എന്ന ബഹുപദത്തിന്:</p>
      $$\\mathbf{(x - a) \\text{ ഒരു ഘടകമാകണമെങ്കിൽ } P(a) = 0 \\text{ ആയിരിക്കണം}}$$
      <p><b>പ്രധാന നിഗമനങ്ങൾ:</b></p>
      <ul>
        <li>$(x + a)$ ഘടകമാകണമെങ്കിൽ $P(-a) = 0$ ആയിരിക്കണം.</li>
        <li>$(ax - b)$ ഘടകമാകണമെങ്കിൽ $P(b/a) = 0$ ആയിരിക്കണം.</li>
        <li>എല്ലാ ഗുണകങ്ങളുടെയും തുക 0 ആയാൽ $P(1) = 0$ ആയതിനാൽ $(x - 1)$ എപ്പോഴും ഒരു ഘടകമായിരിക്കും.</li>
        <li>ഇരട്ട കൃതികളുടെ ഗുണകങ്ങളുടെ തുകയും ഒറ്റ കൃതികളുടെ ഗുണകങ്ങളുടെ തുകയും തുല്യമായാൽ $(x + 1)$ ഒരു ഘടകമായിരിക്കും.</li>
      </ul>`,
    intuition_en: 'Just like integer division: 15 / 5 has remainder 0, so 5 is a factor of 15. If dividing P(x) by (x - a) leaves remainder P(a) = 0, then (x - a) divides P(x) with no leftover, making it a factor.',
    intuition_ml: 'സാധാരണ സംഖ്യാ ഹരണത്തിന് തുല്യമാണിത്: 15 നെ 5 കൊണ്ട് ഹരിച്ചാൽ ശിഷ്ടം 0 ആയതിനാൽ 5 ഒരു ഘടകമാണ്. അതുപോലെ P(a) = 0 ആയാൽ ശിഷ്ടം പൂജ്യമായതിനാൽ (x - a) ഘടകമാകുന്നു.',
    proof: {
      idea_en: 'Division algorithm for polynomials evaluated at x = a.',
      idea_ml: 'ബഹുപദ ഹരണ നിയമത്തിൽ x = a നൽകി ശിഷ്ടം കണ്ടെത്തുന്നു.',
      why_en: 'Substituting x = a makes the product term (x - a)Q(x) completely vanish to zero.',
      why_ml: 'x = a നൽകിയാൽ (x - a)Q(x) എന്ന ഗുണനഫലം പൂജ്യമായി ശിഷ്ടം മാത്രം അവശേഷിക്കുന്നു.',
      rungs: [
        {
          title_en: 'Polynomial Division Algorithm',
          title_ml: 'ബഹുപദ ഹരണ നിയമം',
          detail_en: 'By Euclidean division of polynomials, dividing $P(x)$ by $(x - a)$ gives $P(x) = (x - a)Q(x) + R$, where remainder $R$ has degree $< 1$, meaning $R$ is a constant.',
          detail_ml: '$P(x) = (x - a)Q(x) + R$. $(x - a)$ ഒന്നാംകൃതി ആയതിനാൽ ശിഷ്ടം $R$ ഒരു സ്ഥിരസംഖ്യയാണ്.'
        },
        {
          title_en: 'Substitution of x = a',
          title_ml: 'x = a നൽകൽ',
          detail_en: 'Evaluate at $x = a$: $P(a) = (a - a)Q(a) + R = 0 \\cdot Q(a) + R = R$. Hence $R = P(a)$.',
          detail_ml: '$x = a$ നൽകിയാൽ: $P(a) = (a - a)Q(a) + R = 0 + R = R \\implies R = P(a)$.'
        },
        {
          title_en: 'Factor Criterion',
          title_ml: 'ഘടക മാനദണ്ഡം',
          detail_en: '$(x - a)$ is a factor $\\iff R = 0 \\iff P(a) = 0$.',
          detail_ml: '$(x - a)$ ഘടകമാകുന്നത് ശിഷ്ടം $R = 0$ ആകുമ്പോൾ മാത്രമാണ്, അതായത് $P(a) = 0$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Testing x = a when checking if (x + a) is a factor, getting the sign backwards.',
        fix_en: 'For factor (x - a), test P(a). For factor (x + a), test P(-a).'
      }
    ],
    traps_ml: [
      {
        trap_ml: '(x + a) ഘടകമാണോ എന്ന് നോക്കാൻ P(a) കണക്കാക്കുന്നത്.',
        fix_ml: '(x - a) ന് P(a) യും, (x + a) ന് ചിഹ്നം മാറ്റി P(-a) യും ആണ് നോക്കേണ്ടത്.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Is (x - 2) a factor of P(x) = x³ - 4x² + 5x - 2?',
        a: 'P(2) = 2³ - 4(2)² + 5(2) - 2 = 8 - 16 + 10 - 2 = 0. Yes, (x - 2) is a factor.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: '(x - 2) എന്നത് P(x) = x³ - 4x² + 5x - 2 ന്റെ ഒരു ഘടകമാണോ?',
        a: 'P(2) = 8 - 16 + 10 - 2 = 0. ശിഷ്ടം പൂജ്യമായതിനാൽ (x - 2) ഘടകമാണ്.'
      }
    ]
  },
  {
    id: 'm10.10.3.factoring-polynomials',
    sec: '10.10.3',
    kind: 'method',
    tier: 'core',
    title_en: 'Factoring Quadratic & Higher Polynomials',
    title_ml: 'ബഹുപദങ്ങളുടെ ഘടകക്രിയ',
    oneLine_en: 'A second-degree polynomial ax² + bx + c with roots p and q factors into a$(x - p)$(x - q); higher degree polynomials are factored using synthetic division and the rational root theorem.',
    oneLine_ml: 'മൂലങ്ങൾ p, q ആയ രണ്ടാംകൃതി ബഹുപദം ax² + bx + c യെ a(x - p)(x - q) എന്ന് ഘടകങ്ങളാക്കാം.',
    statement_en: `<p><b>Factoring Quadratic Polynomials:</b></p>
      <p>If $p$ and $q$ are the roots of the equation $ax^2 + bx + c = 0$, then the polynomial factors completely into linear factors as:</p>
      $$\\mathbf{ax^2 + bx + c = a(x - p)(x - q)}$$
      <p><b>Sum and Product of Roots:</b></p>
      <p>Expanding $a(x - p)(x - q) = a(x^2 - (p + q)x + pq)$ shows:</p>
      $$\\mathbf{p + q = -\\frac{b}{a}, \\quad pq = \\frac{c}{a}}$$
      <p><b>Factoring Cubic Polynomials:</b></p>
      <ol>
        <li>Find a first rational root $x = a$ by testing factors of the constant term ($P(a) = 0$).</li>
        <li>Divide $P(x)$ by $(x - a)$ to get a quadratic quotient $Q(x)$.</li>
        <li>Factor the quadratic quotient $Q(x)$ into two linear factors.</li>
      </ol>`,
    statement_ml: `<p><b>രണ്ടാംകൃതി ബഹുപദങ്ങളുടെ ഘടകക്രിയ:</b></p>
      <p>$ax^2 + bx + c = 0$ ന്റെ മൂലങ്ങൾ $p, q$ ആയാൽ ബഹുപദത്തിന്റെ ഘടക രൂപം:</p>
      $$\\mathbf{ax^2 + bx + c = a(x - p)(x - q)}$$
      <p><b>മൂലങ്ങളുടെ തുകയും ഗുണനഫലവും:</b></p>
      $$\\mathbf{p + q = -\\frac{b}{a}, \\quad pq = \\frac{c}{a}}$$
      <p><b>മൂന്നാംകൃതി ബഹുപദങ്ങളുടെ ഘടകക്രിയ:</b></p>
      <ol>
        <li>സ്ഥിരസംഖ്യയുടെ ഘടകങ്ങൾ നൽകി $P(a) = 0$ ആകുന്ന ഒരു മൂല്യം കണ്ടെത്തി $(x - a)$ എന്ന ഘടകം ഉറപ്പാക്കുക.</li>
        <li>$P(x)$ നെ $(x - a)$ കൊണ്ട് ഹരിച്ച് രണ്ടാംകൃതി ബഹുപദം $Q(x)$ കണ്ടെത്തുക.</li>
        <li>രണ്ടാംകൃതി ഭാഗത്തെ ഘടകങ്ങളാക്കി മൂന്ന് ഒന്നാംകൃതി ഘടകങ്ങളുടെ ഗുണനഫലമായി എഴുതുക.</li>
      </ol>`,
    intuition_en: 'Factoring breaks down complicated higher-degree expressions into simple building blocks (linear factors), exactly like prime factorisation breaks down composite numbers into prime numbers.',
    intuition_ml: 'ഒരു വലിയ സംഖ്യയെ അഭാജ്യ ഘടകങ്ങളാക്കി മാറ്റുന്നതുപോലെ, സങ്കീർണ്ണമായ ബഹുപദങ്ങളെ ലളിതമായ ഒന്നാംകൃതി ഘടകങ്ങളാക്കി മാറ്റുന്ന പ്രക്രിയയാണ് ഘടകക്രിയ.',
    proof: {
      idea_en: 'Fundamental Theorem of Algebra for real factorizations.',
      idea_ml: 'ബീജഗണിതത്തിന്റെ അടിസ്ഥാന സിദ്ധാന്തത്തിലൂടെ ഘടക രൂപം തെളിയിക്കുന്നു.',
      why_en: 'Every polynomial of degree n has at most n roots and factors linearly over its roots.',
      why_ml: 'കൃതി n ആയ ബഹുപദത്തിന് പരമാവധി n മൂലങ്ങളും അത്രയും ഒന്നാംകൃതി ഘടകങ്ങളും ഉണ്ടായിരിക്കും.',
      rungs: [
        {
          title_en: 'Root Equivalence',
          title_ml: 'മൂല തുല്യത',
          detail_en: 'If $p$ is a root, $P(p) = 0$, so by factor theorem $(x - p)$ is a factor: $P(x) = (x - p)Q(x)$.',
          detail_ml: '$p$ ഒരു മൂലമായാൽ $P(p) = 0$ ആയതിനാൽ $(x - p)$ ഘടകമായിരിക്കും.'
        },
        {
          title_en: 'Complete Quadratic Factorization',
          title_ml: 'രണ്ടാംകൃതിയിലെ പൂർണ്ണ ഘടകങ്ങൾ',
          detail_en: 'For $ax^2 + bx + c$, if roots are $p$ and $q$, the quotient after factoring $(x - p)$ must be $a(x - q)$, giving $a(x - p)(x - q)$.',
          detail_ml: 'ആദ്യ പദം $ax^2$ ആയതിനാൽ ഗുണകം $a$ പുറത്തെടുത്ത് $a(x - p)(x - q)$ എന്ന് പൂർണ്ണമായി ഘടകങ്ങളാക്കുന്നു.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Forgetting the leading coefficient a: writing (x - p)(x - q) when a != 1.',
        fix_en: 'Always include leading coefficient a: 2x² + ... factors as 2(x - p)(x - q).'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'x² ന്റെ ഗുണകമായ a പുറത്തെഴുതാൻ വിട്ടുപോയി വെറുതെ (x - p)(x - q) എന്ന് എഴുതുന്നത്.',
        fix_ml: 'x² ന്റെ ഗുണകം 1 അല്ലെങ്കിൽ അത് മുന്നിൽ എഴുതണം: a(x - p)(x - q).'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Factorize x² - 5x + 6 into first degree factors.',
        a: 'Sum = -5, product = 6. Numbers are -2 and -3. x² - 5x + 6 = (x - 2)(x - 3).'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'x² - 5x + 6 നെ ഒന്നാംകൃതി ഘടകങ്ങളാക്കി എഴുതുക.',
        a: 'തുക -5, ഗുണനഫലം 6. സംഖ്യകൾ -2, -3. x² - 5x + 6 = (x - 2)(x - 3).'
      }
    ]
  },
  {
    id: 'm10.10.4.roots-and-solutions-of-polynomial-equations',
    sec: '10.10.4',
    kind: 'application',
    tier: 'core',
    title_en: 'Roots, Factors & Equation Solutions',
    title_ml: 'മൂലങ്ങളും സമവാക്യ പരിഹാരങ്ങളും',
    oneLine_en: 'A number k is a root of polynomial P(x) if P(k) = 0; finding all roots of P(x) = 0 is identical to finding the linear factors $(x - k)$ of P(x).',
    oneLine_ml: 'P(k) = 0 ആയാൽ k എന്നത് P(x) ന്റെ ഒരു മൂലമാണ്; P(x) = 0 ന്റെ പരിഹാരങ്ങൾ കണ്ടെത്തുന്നത് P(x) ന്റെ (x - k) എന്ന ഘടകങ്ങൾ കണ്ടെത്തുന്നതിന് തുല്യമാണ്.',
    statement_en: `<p><b>Roots of a Polynomial Equation:</b></p>
      <p>A number $k$ is called a <b>root</b> (or zero) of the polynomial $P(x)$ if and only if:</p>
      $$\\mathbf{P(k) = 0}$$
      <p>Solving the equation $P(x) = 0$ means determining all such numbers $k$.</p>
      <p><b>Constructing Polynomials with Given Roots:</b></p>
      <ul>
        <li>A second degree polynomial with roots $\\alpha$ and $\\beta$ is:
        $$\\mathbf{P(x) = (x - \\alpha)(x - \\beta) = x^2 - (\\alpha + \\beta)x + \\alpha\\beta}$$</li>
        <li>Any non-zero multiple $k \\cdot P(x)$ has the exact same roots.</li>
      </ul>
      <p><b>Relationship between Roots and Factors:</b></p>
      $$\\mathbf{\\text{Roots are } x_1, x_2, \\dots, x_n \\iff \\text{Linear factors are } (x - x_1), (x - x_2), \\dots, (x - x_n)}$$`,
    statement_ml: `<p><b>ബഹുപദ സമവാക്യത്തിന്റെ മൂലങ്ങൾ (Roots / Zeros):</b></p>
      <p>$P(k) = 0$ ആകുന്ന സംഖ്യ $k$ യെ $P(x)$ ന്റെ <b>മൂലം (പൂജ്യം)</b> എന്ന് വിളിക്കുന്നു. $P(x) = 0$ എന്ന സമവാക്യം പരിഹരിക്കുക എന്നാൽ ഇത്തരം എല്ലാ $k$ വിലകളും കണ്ടെത്തുക എന്നാണ് അർത്ഥം.</p>
      <p><b>തന്നിരിക്കുന്ന മൂലങ്ങൾ ഉപയോഗിച്ച് ബഹുപദം നിർമ്മിക്കൽ:</b></p>
      <ul>
        <li>മൂലങ്ങൾ $\\alpha, \\beta$ ആയ രണ്ടാംകൃതി ബഹുപദം:
        $$\\mathbf{P(x) = (x - \\alpha)(x - \\beta) = x^2 - (\\alpha + \\beta)x + \\alpha\\beta}$$</li>
        <li>ഇതിനെ ഏതൊരു സംഖ്യ കൊണ്ട് ഗുണിച്ചാലും മൂലങ്ങൾക്ക് മാറ്റമുണ്ടാകില്ല.</li>
      </ul>
      <p><b>മൂലങ്ങളും ഘടകങ്ങളും തമ്മിലുള്ള ബന്ധം:</b></p>
      $$\\mathbf{\\text{മൂലങ്ങൾ } x_1, x_2 \\iff \\text{ഘടകങ്ങൾ } (x - x_1), (x - x_2)}$$`,
    intuition_en: 'Finding roots and factoring are two sides of the same coin: knowing the factors immediately gives the roots, and finding the roots immediately gives the factors.',
    intuition_ml: 'ഘടകങ്ങളും മൂലങ്ങളും ഒരേ നാணயത്തിന്റെ ഇരുവശങ്ങളാണ്: ഘടകങ്ങൾ അറിഞ്ഞാൽ മൂലങ്ങൾ കിട്ടും, മൂലങ്ങൾ കണ്ടെത്തിയാൽ ഘടകങ്ങൾ കിട്ടും.',
    proof: {
      idea_en: 'Zero-product property of real numbers.',
      idea_ml: 'സംഖ്യാ ഗുണനത്തിലെ പൂജ്യ നിയമം പ്രയോഗിച്ച് തെളിയിക്കുന്നു.',
      why_en: 'If a product of factors equals zero, at least one factor must be zero.',
      why_ml: 'രണ്ട് സംഖ്യകളുടെ ഗുണനഫലം പൂജ്യമായാൽ അവയിലൊന്ന് നിർബന്ധമായും പൂജ്യമായിരിക്കണം.',
      rungs: [
        {
          title_en: 'Factored Product Form',
          title_ml: 'ഘടകങ്ങളുടെ ഗുണനഫല രൂപം',
          detail_en: '$P(x) = a(x - x_1)(x - x_2) \\dots (x - x_n) = 0$.',
          detail_ml: '$P(x) = a(x - x_1)(x - x_2) \\dots (x - x_n) = 0$.'
        },
        {
          title_en: 'Zero-Product Conclusion',
          title_ml: 'പൂജ്യ ഗുണന നിഗമനം',
          detail_en: 'By zero product property, $P(x) = 0 \\iff x - x_i = 0 \\iff x = x_i$ for some $i$.',
          detail_ml: 'ഗുണനഫലം പൂജ്യമാകണമെങ്കിൽ ഏതെങ്കിലും $x - x_i = 0 \\implies x = x_i$ ആയിരിക്കണം.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Flipping signs when writing factors from roots: writing (x + 3) when root is 3.',
        fix_en: 'If root is positive 3, the factor is (x - 3). If root is negative 3, factor is (x + 3).'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'മൂലം 3 ആകുമ്പോൾ ഘടകം (x + 3) എന്ന് ചിഹ്നം തെറ്റിച്ചെഴുതുന്നത്.',
        fix_ml: 'മൂലം 3 ആയാൽ ഘടകം (x - 3) ഉം, മൂലം -3 ആയാൽ ഘടകം (x + 3) ഉം ആണ്.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Write a second-degree polynomial having roots 3 and -4.',
        a: 'P(x) = (x - 3)(x - (-4)) = (x - 3)(x + 4) = x² + x - 12.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'മൂലങ്ങൾ 3 ഉം -4 ഉം ആയ ഒരു രണ്ടാംകൃതി ബഹുപദം എഴുതുക.',
        a: 'P(x) = (x - 3)(x + 4) = x² + x - 12.'
      }
    ]
  }
);
