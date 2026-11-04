/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 3: Square Identities (വർഗ്ഗസമവാക്യങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm8.3.1.square-of-sum',
    sec: '8.3.1',
    kind: 'formula',
    tier: 'core',
    title_en: 'Square of a Sum: (x + y)² = x² + 2xy + y²',
    title_ml: 'തുകയുടെ വർഗ്ഗം: (x + y)² = x² + 2xy + y²',
    oneLine_en: 'The square of the sum of two numbers equals the sum of their squares plus twice their product.',
    oneLine_ml: 'രണ്ട് സംഖ്യകളുടെ തുകയുടെ വർഗ്ഗം അവയുടെ വർഗ്ഗങ്ങളുടെ തുകയോട് അവയുടെ ഗുണനഫലത്തിന്റെ ഇരട്ടി കൂട്ടിയതിന് തുല്യമാണ്.',
    statement_en: `<p><b>Identity (Square of a Sum):</b> For all numbers $x$ and $y$:</p>
      $$(x + y)^2 = x^2 + 2xy + y^2$$
      <p><b>Special Cases:</b></p>
      <ul>
        <li><b>One more than a number:</b>
          $$(x + 1)^2 = x^2 + 2x + 1$$
          To get the square of the next natural number, add the number, the next number, and the square: $n^2 + n + (n+1) = (n+1)^2$.
        </li>
        <li><b>Numbers with fractional part 1/2:</b>
          $$\\left(x + \\frac{1}{2}\\right)^2 = x^2 + x + \\frac{1}{4} = x(x+1) + \\frac{1}{4}$$
        </li>
      </ul>`,
    statement_ml: `<p><b>സമവാക്യം (തുകയുടെ വർഗ്ഗം):</b> ഏതൊരു $x, y$ സംഖ്യകൾക്കും:</p>
      $$(x + y)^2 = x^2 + 2xy + y^2$$
      <p><b>പ്രത്യേക രൂപങ്ങൾ:</b></p>
      <ul>
        <li><b>ഒരു സംഖ്യയേക്കാൾ 1 കൂടുതലായ സംഖ്യയുടെ വർഗ്ഗം:</b>
          $$(x + 1)^2 = x^2 + 2x + 1$$
          ഒരു സംഖ്യയുടെ വർഗ്ഗത്തോട് ആ സംഖ്യയുടെ ഇരട്ടിയും ഒന്നും കൂട്ടിയാൽ തൊട്ടടുത്ത സംഖ്യയുടെ വർഗ്ഗം ലഭിക്കുന്നു.
        </li>
        <li><b>ഭിന്നഭാഗം 1/2 വരുന്ന സംഖ്യകൾ:</b>
          $$\\left(x + \\frac{1}{2}\\right)^2 = x^2 + x + \\frac{1}{4} = x(x+1) + \\frac{1}{4}$$
        </li>
      </ul>`,
    intuition_en: `<p>A square of side $(x+y)$ is made of four geometric pieces: a large square $x^2$, a smaller square $y^2$, and two identical rectangles of area $xy$. Adding all four areas gives $x^2 + 2xy + y^2$.</p>
      <p><b>Worked micro-example:</b> Compute $103^2$ mentally:</p>
      $$103^2 = (100 + 3)^2 = 100^2 + 2(100)(3) + 3^2 = 10000 + 600 + 9 = 10609.$$`,
    intuition_ml: `<p>$(x+y)$ വശമുള്ള ഒരു സമചതുരത്തെ നാല് ഭാഗങ്ങളായി ഭാഗിക്കാം: വിസ്തീർണ്ണം $x^2$ ആയ വലിയ സമചതുരം, $y^2$ ആയ ചെറിയ സമചതുരം, വിസ്തീർണ്ണം $xy$ വീതമുള്ള രണ്ട് ചതുരങ്ങൾ. ഇവ നാലും കൂട്ടുമ്പോൾ $x^2 + 2xy + y^2$ ലഭിക്കുന്നു.</p>
      <p><b>ഉദാഹരണം:</b> $103^2$ മനസ്സിൽ കണക്കാക്കുക:</p>
      $$103^2 = (100 + 3)^2 = 100^2 + 2(100)(3) + 3^2 = 10000 + 600 + 9 = 10609.$$`,
    needs: ['m8.1.2.geo-squares', 's.expanding-brackets', 's.algebraic-terms'],
    figs: ['fig.ident-sum-sq'],
    traps_en: [
      'Forgetting the middle term 2xy (writing (x+y)² = x² + y² is the most famous algebra error).'
    ],
    traps_ml: [
      'മധ്യത്തിലെ 2xy വിട്ടുപോയി (x+y)² = x² + y² എന്ന് തെറ്റായി എഴുതരുത്.'
    ],
    cards_en: [
      { q: 'State the algebraic identity for the square of a sum.', a: '$(x + y)^2 = x^2 + 2xy + y^2$.', kind: 'state' },
      { q: 'Calculate 52² using (x+y)²', a: '$(50+2)^2 = 2500 + 200 + 4 = 2704$.', kind: 'apply' },
      { q: 'What is (x + 1)² expanded?', a: '$x^2 + 2x + 1$.', kind: 'state' }
    ],
    cards_ml: [
      { q: 'തുകയുടെ വർഗ്ഗത്തിനുള്ള സമവാക്യം പ്രസ്താവിക്കുക.', a: '$(x + y)^2 = x^2 + 2xy + y^2$.', kind: 'state' },
      { q: '(x+y)² സമവാക്യം ഉപയോഗിച്ച് 52² കാണുക.', a: '$(50+2)^2 = 2500 + 200 + 4 = 2704$.', kind: 'apply' },
      { q: '(x + 1)²-ന്റെ വികസിത രൂപം എന്ത്?', a: '$x^2 + 2x + 1$.', kind: 'state' }
    ]
  },

  {
    id: 'm8.3.2.square-of-diff',
    sec: '8.3.2',
    kind: 'formula',
    tier: 'core',
    title_en: 'Square of a Difference: (x - y)² = x² - 2xy + y²',
    title_ml: 'വ്യത്യാസത്തിന്റെ വർഗ്ഗം: $(x - y)^2$ = x² - 2xy + y²',
    oneLine_en: 'The square of the difference of two numbers equals the sum of their squares minus twice their product.',
    oneLine_ml: 'രണ്ട് സംഖ്യകളുടെ വ്യത്യാസത്തിന്റെ വർഗ്ഗം അവയുടെ വർഗ്ഗങ്ങളുടെ തുകയിൽ നിന്ന് അവയുടെ ഗുണനഫലത്തിന്റെ ഇരട്ടി കുറച്ചതിന് തുല്യമാണ്.',
    statement_en: `<p><b>Identity (Square of a Difference):</b> For all numbers $x$ and $y$:</p>
      $$(x - y)^2 = x^2 - 2xy + y^2$$
      <p><b>Special Cases:</b></p>
      <ul>
        <li><b>One less than a number:</b>
          $$(x - 1)^2 = x^2 - 2x + 1$$
        </li>
        <li><b>Subtracting half:</b>
          $$\\left(x - \\frac{1}{2}\\right)^2 = x^2 - x + \\frac{1}{4} = x(x-1) + \\frac{1}{4}$$
        </li>
      </ul>`,
    statement_ml: `<p><b>സമവാക്യം (വ്യത്യാസത്തിന്റെ വർഗ്ഗം):</b> ഏതൊരു $x, y$ സംഖ്യകൾക്കും:</p>
      $$(x - y)^2 = x^2 - 2xy + y^2$$
      <p><b>പ്രത്യേക രൂപങ്ങൾ:</b></p>
      <ul>
        <li><b>ഒരു സംഖ്യയേക്കാൾ 1 കുറഞ്ഞ സംഖ്യയുടെ വർഗ്ഗം:</b>
          $$(x - 1)^2 = x^2 - 2x + 1$$
        </li>
        <li><b>പകുതി കുറച്ച സംഖ്യയുടെ വർഗ്ഗം:</b>
          $$\\left(x - \\frac{1}{2}\\right)^2 = x^2 - x + \\frac{1}{4} = x(x-1) + \\frac{1}{4}$$
        </li>
      </ul>`,
    intuition_en: `<p>To find the area of a square of side $(x-y)$, start with a large square of area $x^2$. Subtract two strips of area $xy$. Since the small corner of area $y^2$ was subtracted twice, add back $y^2$ once: $x^2 - 2xy + y^2$.</p>
      <p><b>Worked micro-example:</b> Compute $98^2$ mentally:</p>
      $$98^2 = (100 - 2)^2 = 100^2 - 2(100)(2) + 2^2 = 10000 - 400 + 4 = 9604.$$`,
    intuition_ml: `<p>$(x-y)$ വശമുള്ള സമചതുരത്തിന്റെ വിസ്തീർണ്ണം കാണാൻ, $x^2$ വിസ്തീർണ്ണമുള്ള വലിയ സമചതുരത്തിൽ നിന്ന് $xy$ വീതമുള്ള രണ്ട് ചതുരങ്ങൾ കുറയ്ക്കുക. അപ്പോൾ മൂലയിലെ $y^2$ രണ്ട് തവണ കുറഞ്ഞുപോയതിനാൽ ഒരു $y^2$ തിരിച്ചുകൂട്ടുന്നു: $x^2 - 2xy + y^2$.</p>
      <p><b>ഉദാഹരണം:</b> $98^2$ മനസ്സിൽ കണക്കാക്കുക:</p>
      $$98^2 = (100 - 2)^2 = 100^2 - 2(100)(2) + 2^2 = 10000 - 400 + 4 = 9604.$$`,
    needs: ['m8.3.1.square-of-sum', 's.integers'],
    figs: ['fig.ident-diff-sq'],
    traps_en: [
      'Writing -y² at the end instead of +y² (the square of a negative quantity is always positive: (-y)² = +y²).'
    ],
    traps_ml: [
      'അവസാനം +y² എന്നതിന് പകരം -y² എന്ന് തെറ്റായി എഴുതരുത് (ഒരു സംഖ്യയെ അതേ സംഖ്യകൊണ്ട് ഗുണിക്കുമ്പോൾ എപ്പോഴും പോസിറ്റീവ് ആണ്: (-y)² = +y²).'
    ],
    cards_en: [
      { q: 'State the identity for (x - y)²', a: '$(x - y)^2 = x^2 - 2xy + y^2$.', kind: 'state' },
      { q: 'Calculate 49² using (x - y)²', a: '$(50 - 1)^2 = 2500 - 100 + 1 = 2401$.', kind: 'apply' },
      { q: 'Why is the last term +y² and not -y²?', a: 'Because (-y) × (-y) = +y².', kind: 'trap' }
    ],
    cards_ml: [
      { q: '(x - y)²-ന്റെ സമവാക്യം പ്രസ്താവിക്കുക.', a: '$(x - y)^2 = x^2 - 2xy + y^2$.', kind: 'state' },
      { q: '(x - y)² ഉപയോഗിച്ച് 49² കാണുക.', a: '$(50 - 1)^2 = 2500 - 100 + 1 = 2401$.', kind: 'apply' },
      { q: 'അവസാന പദം -y² ആകാതെ +y² ആകുന്നത് എന്തുകൊണ്ട്?', a: '(-y) × (-y) = +y² ആയതുകൊണ്ട്.', kind: 'trap' }
    ]
  },

  {
    id: 'm8.3.3.sum-diff-relations',
    sec: '8.3.3',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Sum and Difference Relations: 4xy & 2(x² + y²)',
    title_ml: 'തുകയും വ്യത്യാസവും ചേരുമ്പോൾ: 4xy & 2(x² + y²)',
    oneLine_en: '(x+y)² + (x-y)² = 2(x² + y²) and (x+y)² - (x-y)² = 4xy, expressing a product as difference of two squares.',
    oneLine_ml: '(x+y)² + (x-y)² = 2(x² + y²) ഉം (x+y)² - (x-y)² = 4xy ഉം ഉപയോഗിച്ച് ഗുണനഫലത്തെ രണ്ട് വർഗ്ഗങ്ങളുടെ വ്യത്യാസമായി എഴുതാം.',
    statement_en: `<p><b>Two Fundamental Relations:</b></p>
      <ol>
        <li><b>Adding the square of sum and square of difference:</b>
          $$(x + y)^2 + (x - y)^2 = 2(x^2 + y^2)$$
          Twice the sum of two squares is also the sum of two squares.
        </li>
        <li><b>Subtracting them:</b>
          $$(x + y)^2 - (x - y)^2 = 4xy$$
          Dividing by 4 expresses any product as the difference of two squares:
          $$xy = \\left(\\frac{x + y}{2}\\right)^2 - \\left(\\frac{x - y}{2}\\right)^2$$
        </li>
      </ol>`,
    statement_ml: `<p><b>പ്രധാനപ്പെട്ട രണ്ട് ബന്ധങ്ങൾ:</b></p>
      <ol>
        <li><b>തുകയുടെ വർഗ്ഗവും വ്യത്യാസത്തിന്റെ വർഗ്ഗവും കൂട്ടുമ്പോൾ:</b>
          $$(x + y)^2 + (x - y)^2 = 2(x^2 + y^2)$$
          രണ്ട് പൂർണ്ണവർഗ്ഗങ്ങളുടെ തുകയുടെ ഇരട്ടിയെയും രണ്ട് വർഗ്ഗങ്ങളുടെ തുകയായി എഴുതാം.
        </li>
        <li><b>അവ തമ്മിൽ കുറയ്ക്കുമ്പോൾ:</b>
          $$(x + y)^2 - (x - y)^2 = 4xy$$
          ഇതിനെ 4 കൊണ്ട് ഹരിച്ചാൽ ഏതൊരു ഗുണനഫലത്തെയും രണ്ട് വർഗ്ഗങ്ങളുടെ വ്യത്യാസമായി എഴുതാം:
          $$xy = \\left(\\frac{x + y}{2}\\right)^2 - \\left(\\frac{x - y}{2}\\right)^2$$
        </li>
      </ol>`,
    intuition_en: `<p>Four identical rectangles of dimensions $x \\times y$ placed in a pinwheel around a central square of side $(x-y)$ form a large outer square of side $(x+y)$. Therefore, the four rectangles equal $(x+y)^2 - (x-y)^2 = 4xy$.</p>
      <p><b>Worked micro-example:</b> Write $16 \\times 14$ as the difference of two squares:</p>
      $$16 \\times 14 = \\left(\\frac{16+14}{2}\\right)^2 - \\left(\\frac{16-14}{2}\\right)^2 = 15^2 - 1^2 = 225 - 1 = 224.$$`,
    intuition_ml: `<p>$x, y$ വശങ്ങളുള്ള 4 ചതുരങ്ങൾ ചേർത്ത് നടുവിൽ $(x-y)$ വശമുള്ള സമചതുരം വരുന്ന രീതിയിൽ ക്രമീകരിച്ചാൽ പുറത്ത് $(x+y)$ വശമുള്ള വലിയ സമചതുരം ഉണ്ടാകുന്നു. അതിനാൽ 4 ചതുരങ്ങളുടെ വിസ്തീർണ്ണം $(x+y)^2 - (x-y)^2 = 4xy$ ആണ്.</p>
      <p><b>ഉദാഹരണം:</b> $16 \\times 14$-നെ രണ്ട് വർഗ്ഗങ്ങളുടെ വ്യത്യാസമായി എഴുതുക:</p>
      $$16 \\times 14 = \\left(\\frac{16+14}{2}\\right)^2 - \\left(\\frac{16-14}{2}\\right)^2 = 15^2 - 1^2 = 225 - 1 = 224.$$`,
    needs: ['m8.3.1.square-of-sum', 'm8.3.2.square-of-diff'],
    figs: ['fig.ident-four-xy'],
    traps_en: [
      'Confusing the addition formula 2(x²+y²) with the subtraction formula 4xy.'
    ],
    traps_ml: [
      'കൂട്ടുമ്പോൾ കിട്ടുന്ന 2(x²+y²)-ഉം കുറയ്ക്കുമ്പോൾ കിട്ടുന്ന 4xy-യും തമ്മിൽ മാറിപ്പോകരുത്.'
    ],
    cards_en: [
      { q: 'What is (x + y)² - (x - y)²?', a: '$4xy$.', kind: 'state' },
      { q: 'How can any product xy be written as difference of two squares?', a: '$xy = ((x+y)/2)^2 - ((x-y)/2)^2$.', kind: 'apply' },
      { q: 'What is (x + y)² + (x - y)²?', a: '$2(x^2 + y^2)$.', kind: 'state' }
    ],
    cards_ml: [
      { q: '(x + y)² - (x - y)² എത്രയാണ്?', a: '$4xy$.', kind: 'state' },
      { q: 'ഒരു ഗുണനഫലത്തെ രണ്ട് വർഗ്ഗങ്ങളുടെ വ്യത്യാസമായി എങ്ങനെ എഴുതാം?', a: '$xy = ((x+y)/2)^2 - ((x-y)/2)^2$.', kind: 'apply' },
      { q: '(x + y)² + (x - y)² എത്രയാണ്?', a: '$2(x^2 + y^2)$.', kind: 'state' }
    ]
  },

  {
    id: 'm8.3.4.diff-of-squares',
    sec: '8.3.4',
    kind: 'formula',
    tier: 'core',
    title_en: 'Difference of Two Squares: x² - y² = (x + y)(x - y)',
    title_ml: 'വർഗ്ഗങ്ങളുടെ വ്യത്യാസം: $x^2 - y^2 = (x + y)(x - y)$',
    oneLine_en: 'The difference between the squares of two numbers equals the product of their sum and difference.',
    oneLine_ml: 'രണ്ട് സംഖ്യകളുടെ വർഗ്ഗങ്ങളുടെ വ്യത്യാസം അവയുടെ തുകയുടെയും വ്യത്യാസത്തിന്റെയും ഗുണനഫലത്തിന് തുല്യമാണ്.',
    statement_en: `<p><b>Identity (Difference of Two Squares):</b> For all numbers $x$ and $y$:</p>
      $$x^2 - y^2 = (x + y)(x - y)$$
      <p><b>Two Powerful Applications:</b></p>
      <ol>
        <li><b>Mental Multiplication:</b> Multiply two numbers equidistant from an easy round number $x$:
          $$(x + a)(x - a) = x^2 - a^2$$
          For example: $52 \\times 48 = (50 + 2)(50 - 2) = 50^2 - 2^2 = 2500 - 4 = 2496$.
        </li>
        <li><b>Difference of Consecutive Squares:</b> When $y = x - 1$:
          $$x^2 - (x - 1)^2 = (x + x - 1)(1) = 2x - 1$$
        </li>
      </ol>`,
    statement_ml: `<p><b>സമവാക്യം (വർഗ്ഗങ്ങളുടെ വ്യത്യാസം):</b> ഏതൊരു $x, y$ സംഖ്യകൾക്കും:</p>
      $$x^2 - y^2 = (x + y)(x - y)$$
      <p><b>പ്രധാന പ്രയോഗങ്ങൾ:</b></p>
      <ol>
        <li><b>എളുപ്പ ഗുണനം:</b> ഒരു എളുപ്പ സംഖ്യയായ $x$-ൽ നിന്ന് തുല്യ അകലത്തിലുള്ള സംഖ്യകളെ ഗുണിക്കാൻ:
          $$(x + a)(x - a) = x^2 - a^2$$
          ഉദാഹരണം: $52 \\times 48 = (50 + 2)(50 - 2) = 50^2 - 2^2 = 2500 - 4 = 2496$.
        </li>
        <li><b>തുടർച്ചയായ സംഖ്യകളുടെ വർഗ്ഗങ്ങളുടെ വ്യത്യാസം:</b> $y = x - 1$ ആകുമ്പോൾ:
          $$x^2 - (x - 1)^2 = (x + x - 1)(1) = 2x - 1$$
        </li>
      </ol>`,
    intuition_en: `<p>Cut a corner square of side $y$ out of a larger square of side $x$. The remaining L-shaped piece can be sliced into two rectangles and reassembled into a single rectangle of length $(x+y)$ and breadth $(x-y)$.</p>
      <p><b>Worked micro-example:</b> Compute $146^2 - 145^2$ without multiplying:</p>
      $$146^2 - 145^2 = (146 + 145)(146 - 145) = 291 \\times 1 = 291.$$`,
    intuition_ml: `<p>$x$ വശമുള്ള സമചതുരത്തിൽ നിന്ന് $y$ വശമുള്ള ചെറിയ സമചതുരം വെട്ടിമാറ്റിയാൽ കിട്ടുന്ന ഭാഗത്തെ മുറിച്ച് ചേർത്തുവെച്ചാൽ നീളം $(x+y)$-ഉം വീതി $(x-y)$-ഉം ആയ ഒരൊറ്റ ചതുരമായി മാറുന്നു.</p>
      <p><b>ഉദാഹരണം:</b> ഗുണിക്കാതെ $146^2 - 145^2$ കണ്ടെത്തുക:</p>
      $$146^2 - 145^2 = (146 + 145)(146 - 145) = 291 \\times 1 = 291.$$`,
    needs: ['m8.3.1.square-of-sum', 's.area-rectangle'],
    figs: ['fig.ident-diff-two-sq'],
    traps_en: [
      'Writing (x - y)² instead of (x + y)(x - y) (x² - y² is NOT equal to (x - y)²).'
    ],
    traps_ml: [
      'x² - y² എന്നതും (x - y)² എന്നതും ഒന്നാണെന്ന് തെറ്റിദ്ധരിക്കരുത് (x² - y² = (x+y)(x-y), എന്നാൽ (x-y)² = x² - 2xy + y²).'
    ],
    cards_en: [
      { q: 'State the difference of squares identity.', a: '$x^2 - y^2 = (x + y)(x - y)$.', kind: 'state' },
      { q: 'Calculate 65² - 35².', a: '$(65 + 35)(65 - 35) = 100 \\times 30 = 3000$.', kind: 'apply' },
      { q: 'Compute 31 × 29 using algebra.', a: '$(30 + 1)(30 - 1) = 30^2 - 1^2 = 900 - 1 = 899$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'വർഗ്ഗങ്ങളുടെ വ്യത്യാസത്തിനുള്ള സമവാക്യം പ്രസ്താവിക്കുക.', a: '$x^2 - y^2 = (x + y)(x - y)$.', kind: 'state' },
      { q: '65² - 35² കണക്കാക്കുക.', a: '$(65 + 35)(65 - 35) = 100 \\times 30 = 3000$.', kind: 'apply' },
      { q: '31 × 29 ബീജഗണിത സമവാക്യം ഉപയോഗിച്ച് കണ്ടെത്തുക.', a: '$(30 + 1)(30 - 1) = 30^2 - 1^2 = 900 - 1 = 899$.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.3.5.product-of-binomials',
    sec: '8.3.5',
    kind: 'formula',
    tier: 'core',
    title_en: 'Product of Binomials: (x + a)(x + b) = x² + (a + b)x + ab',
    title_ml: 'പൊതുഗുണന രൂപം: (x + a)(x + b) = x² + (a + b)x + ab',
    oneLine_en: 'The product of two binomials with a common term equals the square of the common term plus the sum of uncommon terms times the common term, plus their product.',
    oneLine_ml: 'ഒരു പദം തുല്യമായ രണ്ട് തുകകളുടെ ഗുണനഫലം തുല്യപദത്തിന്റെ വർഗ്ഗത്തോട് മറ്റു രണ്ട് പദങ്ങളുടെ തുകയെ തുല്യപദം കൊണ്ട് ഗുണിച്ചതും അവയുടെ ഗുണനഫലവും കൂട്ടിയതിന് തുല്യമാണ്.',
    statement_en: `<p><b>General Identity:</b> For all numbers $x, a,$ and $b$:</p>
      $$(x + a)(x + b) = x^2 + (a + b)x + ab$$
      <p><b>Calendar Pattern Application:</b> In any calendar grid, choosing a $2 \\times 2$ block of dates:</p>
      $$\\begin{matrix} n & n+1 \\\\ n+7 & n+8 \\end{matrix}$$
      <p>The cross-products satisfy:</p>
      $$n(n+8) = n^2 + 8n$$
      $$(n+1)(n+7) = n^2 + 8n + 7$$
      <p>The difference between diagonal products is always strictly <b>7</b> regardless of the month or year!</p>`,
    statement_ml: `<p><b>പൊതു സമവാക്യം:</b> ഏതൊരു $x, a, b$ സംഖ്യകൾക്കും:</p>
      $$(x + a)(x + b) = x^2 + (a + b)x + ab$$
      <p><b>കലണ്ടർ സംഖ്യാ കൗതുകം:</b> കലണ്ടറിലെ ഏത് $2 \\times 2$ തീയതിക്കട്ട എടുത്താലും:</p>
      $$\\begin{matrix} n & n+1 \\\\ n+7 & n+8 \\end{matrix}$$
      <p>കോണോടുകോൺ ഗുണനഫലങ്ങൾ പരിശോധിച്ചാൽ:</p>
      $$n(n+8) = n^2 + 8n$$
      $$(n+1)(n+7) = n^2 + 8n + 7$$
      <p>അവയുടെ വ്യത്യാസം ഏത് മാസത്തിലും എപ്പോഴും കൃത്യം <b>7</b> ആയിരിക്കും!</p>`,
    intuition_en: `<p>Draw a rectangle with length $(x + a)$ and breadth $(x + b)$. It splits into four rectangles: $x^2$, $ax$, $bx$, and $ab$. Factoring out $x$ from the two middle rectangles gives $x^2 + (a + b)x + ab$.</p>
      <p><b>Worked micro-example:</b> Compute $52 \\times 53$:</p>
      $$52 \\times 53 = (50 + 2)(50 + 3) = 50^2 + (2 + 3)50 + (2 \\times 3) = 2500 + 250 + 6 = 2756.$$`,
    intuition_ml: `<p>നീളം $(x + a)$-ഉം വീതി $(x + b)$-ഉം ആയ ചതുരത്തെ നാല് ഭാഗങ്ങളാക്കാം: $x^2, ax, bx, ab$. ഇതിൽ നിന്ന് $x$ പൊതുവായി എടുത്താൽ $x^2 + (a + b)x + ab$ ലഭിക്കുന്നു.</p>
      <p><b>ഉദാഹരണം:</b> $52 \\times 53$ കണ്ടെത്തുക:</p>
      $$52 \\times 53 = (50 + 2)(50 + 3) = 50^2 + (2 + 3)50 + (2 \\times 3) = 2500 + 250 + 6 = 2756.$$`,
    needs: ['m8.3.1.square-of-sum', 's.expanding-brackets', 's.distributive-law'],
    figs: ['fig.ident-product-binomials'],
    traps_en: [
      'Multiplying only the first and last terms: (x+a)(x+b) is NOT x² + ab.'
    ],
    traps_ml: [
      'ആദ്യത്തേതും അവസാനത്തേതും മാത്രം ഗുണിച്ച് x² + ab എന്ന് എഴുതിയാൽ തെറ്റാണ്; മധ്യത്തിലെ (a+b)x നിർബന്ധമാണ്.'
    ],
    cards_en: [
      { q: 'State the identity for (x + a)(x + b).', a: '$x^2 + (a + b)x + ab$.', kind: 'state' },
      { q: 'Calculate 102 × 104 using algebra.', a: '$(100 + 2)(100 + 4) = 10000 + 600 + 8 = 10608$.', kind: 'apply' },
      { q: 'What is the constant difference between cross products in a 2x2 calendar square?', a: 'Always 7.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '(x + a)(x + b)-ന്റെ സമവാക്യം പ്രസ്താവിക്കുക.', a: '$x^2 + (a + b)x + ab$.', kind: 'state' },
      { q: '102 × 104 ബീജഗണിത സമവാക്യം ഉപയോഗിച്ച് കണ്ടെത്തുക.', a: '$(100 + 2)(100 + 4) = 10000 + 600 + 8 = 10608$.', kind: 'apply' },
      { q: 'കലണ്ടറിലെ 2x2 കളങ്ങളിലെ കോണോടുകോൺ ഗുണനഫലങ്ങളുടെ വ്യത്യാസം എപ്പോഴും എത്രയായിരിക്കും?', a: 'എപ്പോഴും 7 ആയിരിക്കും.', kind: 'apply' }
    ]
  }
);
