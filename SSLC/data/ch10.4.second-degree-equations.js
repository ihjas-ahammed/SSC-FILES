/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 4: Second Degree Equations (രണ്ടാംകൃതി സമവാക്യങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm10.4.1.square-problems-and-direct-roots',
    sec: '10.4.1',
    kind: 'concept',
    tier: 'core',
    title_en: 'Square Problems & Direct Square Roots',
    title_ml: 'വർഗ്ഗ പ്രശ്നങ്ങളും നേരിട്ടുള്ള വർഗ്ഗമൂലവും',
    oneLine_en: 'Equations where an algebraic square equals a positive constant can be solved directly by taking the square root on both sides: (x + a)² = k ⟹ x + a = ±√k.',
    oneLine_ml: 'ഒരു പൂർണ്ണവർഗ്ഗ പദം ഒരു പോസിറ്റീവ് സംഖ്യയ്ക്ക് തുല്യമാകുന്ന സമവാക്യങ്ങളെ ഇരുവശത്തും വർഗ്ഗമൂലമെടുത്ത് നേരിട്ട് നിർദ്ധാരണം ചെയ്യാം: (x + a)² = k ⟹ x + a = ±√k.',
    statement_en: `<p><b>Direct Square Root Equations:</b></p>
      <p>When an unknown quantity is involved only as part of a squared term, the equation can be rearranged into the form:</p>
      $$\\mathbf{(x + a)^2 = k}$$
      <p>Taking the square root on both sides yields two solutions (for $k > 0$):</p>
      $$\\mathbf{x + a = \\pm\\sqrt{k} \\implies x = -a \\pm \\sqrt{k}}$$
      <p><b>Geometric Geometric Origins in SCERT:</b></p>
      <ul>
        <li>If each side of a square of side $x$ is increased by $a$ metres, the area of the enlarged square becomes $(x + a)^2$. If this area is known to be $k$, then $x + a = \\sqrt{k}$ (since side length must be positive), giving original side $x = \\sqrt{k} - a$.</li>
        <li>For purely numerical problems, negative roots must always be retained, while in physical/geometric contexts (lengths, ages, counts), negative solutions are discarded with explicit physical justification.</li>
      </ul>`,
    statement_ml: `<p><b>നേരിട്ടുള്ള വർഗ്ഗമൂല രീതി:</b></p>
      <p>അജ്ഞാത സംഖ്യ ഒരു പൂർണ്ണവർഗ്ഗത്തിന്റെ ഭാഗമായി മാത്രം വരുന്ന സമവാക്യങ്ങളെ താഴെ പറയുന്ന രൂപത്തിലേക്ക് മാറ്റാം:</p>
      $$\\mathbf{(x + a)^2 = k}$$
      <p>$k > 0$ ആകുമ്പോൾ ഇരുവശത്തും വർഗ്ഗമൂലമെടുക്കുമ്പോൾ രണ്ട് ഉത്തരങ്ങൾ ലഭിക്കുന്നു:</p>
      $$\\mathbf{x + a = \\pm\\sqrt{k} \\implies x = -a \\pm \\sqrt{k}}$$
      <p><b>പാഠപുസ്തകത്തിലെ ജ്യാമിതീയ പശ്ചാത്തലം:</b></p>
      <ul>
        <li>ഒരു സമചതുരത്തിന്റെ വശങ്ങളെല്ലാം $a$ മീറ്റർ വീതം കൂട്ടുമ്പോൾ കിട്ടുന്ന പുതിയ സമചതുരത്തിന്റെ പരപ്പളവ് $(x + a)^2 = k$ ആണെങ്കിൽ, വശത്തിന്റെ നീളം നെഗറ്റീവ് ആകാത്തതിനാൽ $x + a = \\sqrt{k}$, അതായത് $x = \\sqrt{k} - a$.</li>
        <li>ശുദ്ധ ഗണിത സമവാക്യങ്ങളിൽ പോസിറ്റീവും നെഗറ്റീവുമായ രണ്ട് ഉത്തരങ്ങളും പരിഗണിക്കുമ്പോൾ, നീളം, പ്രായം, എണ്ണം തുടങ്ങിയ പ്രായോഗിക സന്ദർഭങ്ങളിൽ പോസിറ്റീവ് വില മാത്രമേ സ്വീകരിക്കുകയുള്ളൂ.</li>
      </ul>`,
    intuition_en: 'Taking the square root is the direct inverse of squaring. Because both (+d)^2 and (-d)^2 equal d^2, taking the square root always yields two symmetric branches: +√k and -√k.',
    intuition_ml: 'വർഗ്ഗം ചെയ്യുന്നതിന്റെ വിപരീത ക്രിയയാണ് വർഗ്ഗമൂലം കാണൽ. (+d)^2 ഉം (-d)^2 ഉം d^2 ന് തുല്യമായതിനാൽ വർഗ്ഗമൂലമെടുക്കുമ്പോൾ എപ്പോഴും രണ്ട് സാധ്യതകൾ (+√k, -√k) ഉണ്ടാകും.',
    proof: {
      idea_en: 'Apply the definition of principal and negative square roots to algebraic squares.',
      idea_ml: 'പൂർണ്ണവർഗ്ഗ വ്യത്യാസ സമവാക്യത്തിലൂടെ രണ്ട് മൂലങ്ങൾ ഉണ്ടെന്ന് തെളിയിക്കുന്നു.',
      why_en: 'Difference of two squares identity guarantees factorization into two linear factors.',
      why_ml: 'രണ്ട് വർഗ്ഗങ്ങളുടെ വ്യത്യാസം കാണുന്ന സമവാക്യത്തിലൂടെ രണ്ട് ഒന്നാംകൃതി ഘടകങ്ങളാക്കാൻ സാധിക്കുന്നു.',
      rungs: [
        {
          title_en: 'Difference of Two Squares Form',
          title_ml: 'വർഗ്ഗങ്ങളുടെ വ്യത്യാസ രൂപം',
          detail_en: '$(x + a)^2 = k \\iff (x + a)^2 - (\\sqrt{k})^2 = 0$.',
          detail_ml: '$(x + a)^2 = k$ എന്നതിനെ $(x + a)^2 - (\\sqrt{k})^2 = 0$ എന്ന് എഴുതാം.'
        },
        {
          title_en: 'Linear Factorization',
          title_ml: 'ഒന്നാംകൃതി ഘടകങ്ങൾ',
          detail_en: '$[(x + a) - \\sqrt{k}][(x + a) + \\sqrt{k}] = 0$. By the zero-product property, either $x + a - \\sqrt{k} = 0$ or $x + a + \\sqrt{k} = 0$, giving $x = -a + \\sqrt{k}$ or $x = -a - \\sqrt{k}$.',
          detail_ml: '$[(x + a) - \\sqrt{k}][(x + a) + \\sqrt{k}] = 0$ ആയതിനാൽ ഒന്നുകിൽ $x = -a + \\sqrt{k}$, അല്ലെങ്കിൽ $x = -a - \\sqrt{k}$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Forgetting the negative root when solving pure algebraic equations.',
        fix_en: 'Remember (x + a)^2 = k yields BOTH +√k and -√k unless physical context prohibits negative values.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'വർഗ്ഗമൂലമെടുക്കുമ്പോൾ നെഗറ്റീവ് വില വിട്ടുപോകുന്നത്.',
        fix_ml: 'ജ്യാമിതീയ നീളങ്ങൾ അല്ലാത്ത ശുദ്ധ ബീജഗണിത പ്രശ്നങ്ങളിൽ പോസിറ്റീവും നെഗറ്റീവുമായ രണ്ട് വിലകളും പരിഗണിക്കണം.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Solve: (x - 3)² = 25.',
        a: 'x - 3 = ±5 ⟹ x = 3 + 5 = 8, or x = 3 - 5 = -2.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'നിർദ്ധാരണം ചെയ്യുക: (x - 3)² = 25.',
        a: 'x - 3 = ±5 ⟹ x = 3 + 5 = 8, അല്ലെങ്കിൽ x = 3 - 5 = -2.'
      }
    ]
  },
  {
    id: 'm10.4.2.completing-the-square',
    sec: '10.4.2',
    kind: 'method',
    tier: 'core',
    title_en: 'Method of Completing the Square',
    title_ml: 'വർഗ്ഗം തികയ്ക്കൽ രീതി',
    oneLine_en: 'An expression of the form x² + bx is converted into a perfect square by adding (b/2)² to both sides: x² + bx + (b/2)² = (x + b/2)²',
    oneLine_ml: 'x² + bx എന്ന രൂപത്തിലുള്ള ഒരു ബീജഗണിത വാക്യത്തെ പൂർണ്ണവർഗ്ഗമാക്കാൻ x ന്റെ ഗുണകത്തിന്റെ പകുതിയുടെ വർഗ്ഗമായ (b/2)² ഇരുവശത്തും കൂട്ടുന്നു: x² + bx + (b/2)² = (x + b/2)²',
    statement_en: `<p><b>Completing the Square Procedure:</b></p>
      <p>Given a quadratic equation in the form $x^2 + bx = c$:</p>
      <ol>
        <li>Identify the coefficient of $x$, which is $b$.</li>
        <li>Take half of this coefficient: $\\frac{b}{2}$.</li>
        <li>Square it: $\\left(\\frac{b}{2}\\right)^2$.</li>
        <li>Add $\\left(\\frac{b}{2}\\right)^2$ to <b>both sides</b> of the equation:
        $$x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = c + \\left(\\frac{b}{2}\\right)^2$$</li>
        <li>Write the left side as a complete square:
        $$\\mathbf{\\left(x + \\frac{b}{2}\\right)^2 = c + \\frac{b^2}{4}}$$</li>
        <li>Solve by taking the square root on both sides:
        $$x + \\frac{b}{2} = \\pm\\sqrt{c + \\frac{b^2}{4}}$$</li>
      </ol>
      <p><b>When $a \\ne 1$ in $ax^2 + bx + c = 0$:</b> First divide the entire equation by $a$, then complete the square.</p>`,
    statement_ml: `<p><b>വർഗ്ഗം തികയ്ക്കലിന്റെ ഘട്ടങ്ങൾ:</b></p>
      <p>$x^2 + bx = c$ എന്ന രൂപത്തിലുള്ള സമവാക്യം തന്നാൽ:</p>
      <ol>
        <li>$x$ ന്റെ ഗുണകം $b$ കണ്ടെത്തുക.</li>
        <li>അതിന്റെ പകുതി കാണുക: $\\frac{b}{2}$.</li>
        <li>ആ പകുതിയുടെ വർഗ്ഗം കാണുക: $\\left(\\frac{b}{2}\\right)^2$.</li>
        <li>ഈ വർഗ്ഗം സമവാക്യത്തിന്റെ <b>ഇരുവശത്തും കൂട്ടുക</b>:
        $$x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = c + \\left(\\frac{b}{2}\\right)^2$$</li>
        <li>ഇടതുവശത്തെ പൂർണ്ണവർഗ്ഗ രൂപത്തിൽ എഴുതുക:
        $$\\mathbf{\\left(x + \\frac{b}{2}\\right)^2 = c + \\frac{b^2}{4}}$$</li>
        <li>ഇരുവശത്തും വർഗ്ഗമൂലമെടുത്ത് $x$ ന്റെ വില കണ്ടെത്തുക.</li>
      </ol>
      <p>$x^2$ ന് ഗുണകമുണ്ടെങ്കിൽ ($ax^2 + bx + c = 0$), ആദ്യം സമവാക്യത്തെ മുഴുവനായി $a$ കൊണ്ട് ഹരിച്ച ശേഷം ഈ രീതി പ്രയോഗിക്കുക.</p>`,
    intuition_en: 'Geometrically, x^2 is a square of side x, and bx is a rectangle of sides x and b. Split the rectangle into two strips of width b/2 and attach them to adjacent sides of the square. The missing corner piece needed to complete the larger square has area (b/2)^2.',
    intuition_ml: 'ജ്യാമിതീയമായി, x^2 എന്നത് ഒരു സമചതുരവും bx എന്നത് രണ്ട് വശങ്ങൾ x ഉം b ഉം ആയ ഒരു ചതുരവുമാണ്. ചതുരത്തെ b/2 വീതിയുള്ള രണ്ട് കഷ്ണങ്ങളാക്കി സമചതുരത്തിന്റെ രണ്ട് വശങ്ങളിൽ ചേർത്തുവെച്ചാൽ ഒരു വലിയ സമചതുരം തികയ്ക്കാൻ മൂലയിൽ കുറവുവരുന്ന ഭാഗത്തിന്റെ പരപ്പളവാണ് (b/2)^2.',
    proof: {
      idea_en: 'Algebraic expansion of (x + b/2)^2 confirms identity.',
      idea_ml: '(x + b/2)^2 എന്ന സമവാക്യ വിപുലീകരണത്തിലൂടെ വർഗ്ഗം തികയുന്നു എന്ന് തെളിയിക്കുന്നു.',
      why_en: 'Direct binomial expansion gives exactly x^2 + 2(b/2)x + (b/2)^2 = x^2 + bx + b^2/4.',
      why_ml: '(x + b/2)^2 വിപുലീകരിക്കുമ്പോൾ x^2 + bx + (b/2)^2 കൃത്യമായി ലഭിക്കുന്നു.',
      rungs: [
        {
          title_en: 'Binomial Expansion',
          title_ml: 'ദ്വിപദ വിപുലീകരണം',
          detail_en: 'By the square identity $(p + q)^2 = p^2 + 2pq + q^2$. Letting $p = x$ and $q = \\frac{b}{2}$, we have: $\\left(x + \\frac{b}{2}\\right)^2 = x^2 + 2\\left(\\frac{b}{2}\\right)x + \\left(\\frac{b}{2}\\right)^2 = x^2 + bx + \\frac{b^2}{4}$.',
          detail_ml: '$(p + q)^2 = p^2 + 2pq + q^2$ എന്ന സമവാക്യത്തിൽ $p = x, q = \\frac{b}{2}$ എന്ന് നൽകിയാൽ: $\\left(x + \\frac{b}{2}\\right)^2 = x^2 + bx + \\frac{b^2}{4}$.'
        },
        {
          title_en: 'Balance of Equality',
          title_ml: 'സമത്വ സന്തുലനം',
          detail_en: 'Adding $\\frac{b^2}{4}$ to $x^2 + bx = c$ maintains algebraic equality while transforming the LHS into a factored square.',
          detail_ml: 'ഇരുവശത്തും $\\frac{b^2}{4}$ കൂട്ടുമ്പോൾ സമവാക്യത്തിന്റെ തുല്യത മാറാതെ ഇടതുവശം ഒരു പൂർണ്ണവർഗ്ഗമായി മാറുന്നു.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Adding (b/2)^2 to only the left side and forgetting to add it to the right side.',
        fix_en: 'Always add (b/2)^2 to BOTH sides of the equation to maintain balance.'
      }
    ],
    traps_ml: [
      {
        trap_ml: '(b/2)^2 ഇടതുവശത്ത് മാത്രം കൂട്ടി വലതുവശത്ത് കൂട്ടാൻ മറന്നുപോകുന്നത്.',
        fix_ml: 'സമവാക്യത്തിന്റെ സന്തുലനം നിലനിർത്താൻ (b/2)^2 ഇരുവശത്തും കൂട്ടണം.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'What number must be added to x² + 8x to make it a perfect square?',
        a: '(8/2)² = 4² = 16. The resulting square is (x + 4)².'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'x² + 8x എന്നതിനെ ഒരു പൂർണ്ണവർഗ്ഗമാക്കാൻ എന്ത് സംഖ്യ കൂട്ടണം?',
        a: '(8/2)² = 4² = 16 കൂട്ടണം. ലഭിക്കുന്ന പൂർണ്ണവർഗ്ഗം (x + 4)² ആയിരിക്കും.'
      }
    ]
  },
  {
    id: 'm10.4.3.quadratic-formula-and-discriminant',
    sec: '10.4.3',
    kind: 'formula',
    tier: 'core',
    title_en: 'Quadratic Formula & Nature of Roots',
    title_ml: 'രണ്ടാംകൃതി സൂത്രവാക്യവും മൂലങ്ങളുടെ സ്വഭാവവും',
    oneLine_en: 'The roots of ax² + bx + c = 0 are given by x = (-b ± √(b² - 4ac)) / (2a); the discriminant Δ = b² - 4ac dictates whether roots are distinct, equal, or non-real.',
    oneLine_ml: 'ax² + bx + c = 0 എന്ന സമവാക്യത്തിന്റെ മൂലങ്ങൾ x = (-b ± √(b² - 4ac)) / (2a) ആണ്; വിവേചകമായ Δ = b² - 4ac ആണ് മൂലങ്ങളുടെ സ്വഭാവം നിർണ്ണയിക്കുന്നത്.',
    statement_en: `<p><b>The Quadratic Formula:</b></p>
      <p>For any second degree equation of the standard form $ax^2 + bx + c = 0$ with $a \\ne 0$, the solutions are:</p>
      $$\\mathbf{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}}$$
      <p><b>The Discriminant ($\\Delta$):</b></p>
      <p>The quantity $\\Delta = b^2 - 4ac$ under the square root determines the nature of the roots:</p>
      <ul>
        <li><b>$\\mathbf{b^2 - 4ac > 0}$:</b> Two distinct, unequal real roots ($x_1 \\ne x_2$).</li>
        <li><b>$\\mathbf{b^2 - 4ac = 0}$:</b> Exactly one real root (two equal real roots: $x = -\\frac{b}{2a}$).</li>
        <li><b>$\\mathbf{b^2 - 4ac < 0}$:</b> No real roots (square root of a negative number is not a real number).</li>
      </ul>`,
    statement_ml: `<p><b>രണ്ടാംകൃതി സമവാക്യ സൂത്രവാക്യം:</b></p>
      <p>$ax^2 + bx + c = 0$ ($a \\ne 0$) എന്ന ഏത് രണ്ടാംകൃതി സമവാക്യത്തിന്റെയും പരിഹാരങ്ങൾ:</p>
      $$\\mathbf{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}}$$
      <p><b>വിവേചകം ($\\Delta$):</b></p>
      <p>വർഗ്ഗമൂലത്തിനുള്ളിലെ $\\Delta = b^2 - 4ac$ എന്ന സംഖ്യ മൂലങ്ങളുടെ സ്വഭാവം വ്യക്തമാക്കുന്നു:</p>
      <ul>
        <li><b>$\\mathbf{b^2 - 4ac > 0}$ ആയാൽ:</b> വ്യത്യസ്തങ്ങളായ രണ്ട് യഥാർത്ഥ സംഖ്യാ മൂലങ്ങൾ ($x_1 \\ne x_2$).</li>
        <li><b>$\\mathbf{b^2 - 4ac = 0}$ ആയാൽ:</b> തുല്യമായ രണ്ട് യഥാർത്ഥ മൂലങ്ങൾ ($x = -\\frac{b}{2a}$).</li>
        <li><b>$\\mathbf{b^2 - 4ac < 0}$ ആയാൽ:</b> യഥാർത്ഥ സംഖ്യാ മൂലങ്ങൾ ഇല്ല (നെഗറ്റീവ് സംഖ്യകൾക്ക് യഥാർത്ഥ വർഗ്ഗമൂലം ഇല്ല).</li>
      </ul>`,
    intuition_en: 'The quadratic formula is not magic — it is simply the general result of applying completing the square to ax^2 + bx + c = 0 once and for all, saving us from re-doing the steps every time.',
    intuition_ml: 'രണ്ടാംകൃതി സൂത്രവാക്യം എന്നത് ax^2 + bx + c = 0 എന്ന പൊതുരൂപത്തിൽ വർഗ്ഗം തികയ്ക്കൽ രീതി പ്രയോഗിച്ച് നേരിട്ട് ഉണ്ടാക്കിയെടുത്ത എളുപ്പവഴിയാണ്.',
    proof: {
      idea_en: 'Derive the formula by completing the square on the general quadratic equation ax^2 + bx + c = 0.',
      idea_ml: 'ax^2 + bx + c = 0 ൽ വർഗ്ഗം തികയ്ക്കൽ രീതി പ്രയോഗിച്ച് സൂത്രവാക്യം രൂപീകരിക്കുന്നു.',
      why_en: 'This algebraic derivation holds universally for all real coefficients where a != 0.',
      why_ml: 'a പൂജ്യമല്ലാത്ത എല്ലാ സമവാക്യങ്ങൾക്കും ഈ ബീജഗണിത വഴി ബാധകമാണ്.',
      rungs: [
        {
          title_en: 'Division by Leading Coefficient',
          title_ml: 'ആദ്യ ഗുണകം കൊണ്ട് ഹരിക്കൽ',
          detail_en: 'Start with $ax^2 + bx + c = 0$. Divide across by $a$: $x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0 \\implies x^2 + \\frac{b}{a}x = -\\frac{c}{a}$.',
          detail_ml: '$ax^2 + bx + c = 0$ നെ $a$ കൊണ്ട് ഹരിച്ചാൽ: $x^2 + \\frac{b}{a}x = -\\frac{c}{a}$.'
        },
        {
          title_en: 'Add Half Coefficient Squared',
          title_ml: 'വർഗ്ഗം കൂട്ടി തികയ്ക്കൽ',
          detail_en: 'Add $\\left(\\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2}$ to both sides: $x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = \\frac{b^2}{4a^2} - \\frac{c}{a} = \\frac{b^2 - 4ac}{4a^2}$.',
          detail_ml: 'ഇരുവശത്തും $\\frac{b^2}{4a^2}$ കൂട്ടുമ്പോൾ: $\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$.'
        },
        {
          title_en: 'Taking Square Roots',
          title_ml: 'വർഗ്ഗമൂലമെടുക്കൽ',
          detail_en: '$x + \\frac{b}{2a} = \\pm\\frac{\\sqrt{b^2 - 4ac}}{2a} \\implies x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.',
          detail_ml: 'വർഗ്ഗമൂലമെടുത്താൽ: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Dividing only the radical by 2a instead of the whole expression (-b ± √Δ).',
        fix_en: 'The denominator 2a divides BOTH -b and the radical term: (-b ± √Δ)/(2a).'
      }
    ],
    traps_ml: [
      {
        trap_ml: '2a കൊണ്ട് വർഗ്ഗമൂല ഭാഗത്തെ മാത്രം ഹരിച്ച് -b യെ ഹരിക്കാൻ മറന്നുപോകുന്നത്.',
        fix_ml: 'ഛേദമായ 2a എന്നത് -b ക്കും വർഗ്ഗമൂലത്തിനും ഒരുപോലെ ബാധകമാണ്: (-b ± √Δ)/(2a).'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'What is the discriminant of 2x² - 4x + 1 = 0, and what does it tell you about the roots?',
        a: 'b² - 4ac = (-4)² - 4(2)(1) = 16 - 8 = 8 > 0. There are two distinct real roots.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: '2x² - 4x + 1 = 0 ന്റെ വിവേചകം എത്ര? മൂലങ്ങളുടെ സ്വഭാവം എന്താണ്?',
        a: 'b² - 4ac = (-4)² - 4(2)(1) = 16 - 8 = 8 > 0. വ്യത്യസ്തങ്ങളായ രണ്ട് യഥാർത്ഥ മൂലങ്ങളുണ്ട്.'
      }
    ]
  },
  {
    id: 'm10.4.4.applications-of-quadratic-equations',
    sec: '10.4.4',
    kind: 'application',
    tier: 'core',
    title_en: 'Practical and Geometric Applications',
    title_ml: 'പ്രായോഗിക രണ്ടാംകൃതി പ്രശ്നങ്ങൾ',
    oneLine_en: 'Real-world geometric and rate problems translate into second-degree equations; valid solutions are selected by applying physical feasibility constraints.',
    oneLine_ml: 'ജ്യാമിതീയ അളവുകളും വേഗതയും സംഖ്യകളും തമ്മിലുള്ള പ്രായോഗിക പ്രശ്നങ്ങളെ രണ്ടാംകൃതി സമവാക്യങ്ങളാക്കി മാറ്റി പോസിറ്റീവ് വിലകൾ സ്വീകരിച്ച് പരിഹരിക്കുന്നു.',
    statement_en: `<p><b>Translating Word Problems to Quadratic Equations:</b></p>
      <ul>
        <li><b>Geometric Area Problems:</b> If a rectangle has length $x$ and perimeter $2P$, its width is $P - x$, giving area $x(P - x) = A \\implies x^2 - Px + A = 0$.</li>
        <li><b>Right-Angled Triangles:</b> If legs are $x$ and $x + d$, by Pythagoras theorem:
        $$x^2 + (x + d)^2 = h^2 \\implies 2x^2 + 2dx + (d^2 - h^2) = 0$$</li>
        <li><b>Consecutive Integers:</b> Product of two consecutive natural numbers $x(x+1) = k \\implies x^2 + x - k = 0$.</li>
        <li><b>Speed, Distance, and Time:</b> If increasing speed by $v$ km/h reduces travel time for distance $D$ by $t$ hours:
        $$\\frac{D}{s} - \\frac{D}{s + v} = t \\implies ts^2 + tvs - Dv = 0$$</li>
      </ul>
      <p><b>Physical Constraint Rule:</b> Always reject extraneous negative solutions when measuring geometric lengths, speeds, time durations, or physical items.</p>`,
    statement_ml: `<p><b>വാചക രൂപത്തിലുള്ള പ്രശ്നങ്ങളെ സമവാക്യമാക്കൽ:</b></p>
      <ul>
        <li><b>ചതുര പരപ്പളവ് പ്രശ്നങ്ങൾ:</b> ചുറ്റളവിന്റെ പകുതി $P$ ആയാൽ, നീളം $x$, വീതി $P - x$. പരപ്പളവ് $= x(P - x) = A \\implies x^2 - Px + A = 0$.</li>
        <li><b>മട്ടത്രികോണം:</b> ലംബവശങ്ങൾ $x$ ഉം $x + d$ ഉം ആയാൽ പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം:
        $$x^2 + (x + d)^2 = h^2$$</li>
        <li><b>തുടർച്ചയായ എണ്ണൽസംഖ്യകൾ:</b> അടുത്തടുത്ത രണ്ട് എണ്ണൽസംഖ്യകളുടെ ഗുണനഫലം $k$ ആയാൽ: $x(x+1) = k \\implies x^2 + x - k = 0$.</li>
        <li><b>വേഗതയും സമയവും:</b> വേഗത കൂട്ടിയാൽ സമയം കുറയുന്ന സന്ദർഭങ്ങളിൽ സമയ വ്യത്യാസ സമവാക്യമുണ്ടാക്കി രണ്ടാംകൃതി സമവാക്യമായി പരിഹരിക്കുന്നു.</li>
      </ul>
      <p><b>പ്രായോഗിക വ്യവസ്ഥ:</b> നീളം, വേഗത, സമയം, വയസ്സ് എന്നിവ നെഗറ്റീവ് ആകാൻ കഴിയില്ല എന്നതിനാൽ പോസിറ്റീവ് മൂല്യം മാത്രമേ ഉത്തരമായി സ്വീകരിക്കാവൂ.</p>`,
    intuition_en: 'Second degree equations arise naturally whenever two quantities multiply together — such as length times width for area, or speed times time for distance.',
    intuition_ml: 'രണ്ട് അളവുകൾ പരസ്പരം ഗുണിക്കുമ്പോഴെല്ലാം (നീളം x വീതി = പരപ്പളവ്, വേഗത x സമയം = ദൂരം) സ്വാഭാവികമായും രണ്ടാംകൃതി സമവാക്യങ്ങൾ രൂപപ്പെടുന്നു.',
    proof: {
      idea_en: 'Mathematical modeling of constraints and root validation.',
      idea_ml: 'പ്രായോഗിക വ്യവസ്ഥകളെ ഗണിത രൂപത്തിലേക്ക് മാറ്റലും സാധുത പരിശോധിക്കലും.',
      why_en: 'Algebraic equations capture pure magnitude, but physical domain imposes strict positivity bounds.',
      why_ml: 'ബീജഗണിതം എല്ലാ സംഖ്യകളെയും സ്വീകരിക്കുമെങ്കിലും ഭൗതിക അളവുകൾ പോസിറ്റീവ് ആയിരിക്കണം.',
      rungs: [
        {
          title_en: 'Variable Assignment & Formulation',
          title_ml: 'അജ്ഞാത പദവും സമവാക്യ രൂപീകരണവും',
          detail_en: 'Let unknown be $x > 0$. Formulate relation: $f(x) = ax^2 + bx + c = 0$.',
          detail_ml: 'അജ്ഞാത അളവ് $x > 0$ എന്ന് എടുത്ത് ബന്ധങ്ങളെ $ax^2 + bx + c = 0$ എന്ന സമവാക്യത്തിലേക്ക് മാറ്റുന്നു.'
        },
        {
          title_en: 'Domain Verification',
          title_ml: 'സാധുത പരിശോധന',
          detail_en: 'Obtain roots $x_1, x_2$. Test each against $x > 0$ and geometric feasibility.',
          detail_ml: 'ലഭിച്ച രണ്ട് ഉത്തരങ്ങളിൽ നിന്ന് $x > 0$ ആയത് മാത്രം തിരഞ്ഞെടുക്കുന്നു.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Blindly accepting a negative value as a geometric side length or speed.',
        fix_en: 'Always write an explicit note discarding negative roots for physical quantities.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'നീളമോ വേഗതയോ നെഗറ്റീവ് ആയി വരുന്നത് ശ്രദ്ധിക്കാതെ ഉത്തരമായി എഴുതുന്നത്.',
        fix_ml: 'നീളം നെഗറ്റീവ് ആകില്ല എന്ന കാരണം വ്യക്തമായി എഴുതി നെഗറ്റീവ് വില ഒഴിവാക്കണം.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'The product of two consecutive positive integers is 56. What are the integers?',
        a: 'x(x + 1) = 56 ⟹ x² + x - 56 = 0 ⟹ (x + 8)(x - 7) = 0. Since x > 0, x = 7. The integers are 7 and 8.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'തുടർച്ചയായ രണ്ട് എണ്ണൽസംഖ്യകളുടെ ഗുണനഫലം 56 ആണ്. സംഖ്യകൾ ഏതെല്ലാം?',
        a: 'x(x + 1) = 56 ⟹ x² + x - 56 = 0 ⟹ (x - 7)(x + 8) = 0. എണ്ണൽസംഖ്യയായതിനാൽ x = 7. സംഖ്യകൾ 7 ഉം 8 ഉം.'
      }
    ]
  }
);
