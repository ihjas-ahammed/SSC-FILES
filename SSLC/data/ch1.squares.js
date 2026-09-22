/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 1: Squares (വർഗ്ഗങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm8.1.1.perfect-squares',
    sec: '8.1.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Square Numbers and Perfect Squares',
    title_ml: 'പൂർണ്ണവർഗ്ഗങ്ങൾ',
    oneLine_en: 'A perfect square is the product of a natural number multiplied by itself: 1, 4, 9, 16, 25...',
    oneLine_ml: 'ഒരു എണ്ണൽസംഖ്യയെ അതേ സംഖ്യകൊണ്ട് ഗുണിക്കുമ്പോൾ ലഭിക്കുന്ന സംഖ്യകളാണ് പൂർണ്ണവർഗ്ഗങ്ങൾ: 1, 4, 9, 16, 25...',
    statement_en: `<p>The product obtained by multiplying any number by itself is called its <b>square</b>:</p>
      $$n^2 = n \\times n$$
      <p>When $n$ is a natural number ($1, 2, 3, \\dots$), $n^2$ is called a <b>perfect square</b>:</p>
      $$1^2 = 1, \\quad 2^2 = 4, \\quad 3^2 = 9, \\quad 4^2 = 16, \\quad 5^2 = 25, \\quad \\dots$$
      <p>The product of a fraction by itself is also its square: $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.</p>`,
    statement_ml: `<p>ഒരു സംഖ്യയെ അതേ സംഖ്യകൊണ്ട് ഗുണിക്കുമ്പോൾ കിട്ടുന്ന ഗുണനഫലമാണ് അതിന്റെ <b>വർഗ്ഗം</b>:</p>
      $$n^2 = n \\times n$$
      <p>ഒരു എണ്ണൽസംഖ്യയുടെ വർഗ്ഗത്തെ <b>പൂർണ്ണവർഗ്ഗം</b> എന്ന് വിളിക്കുന്നു:</p>
      $$1^2 = 1, \\quad 2^2 = 4, \\quad 3^2 = 9, \\quad 4^2 = 16, \\quad 5^2 = 25, \\quad \\dots$$
      <p>ഭിന്നസംഖ്യകളെ തമ്മിൽ ഗുണിച്ചാലും വർഗ്ഗം ലഭിക്കും: $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.</p>`,
    intuition_en: `<p>These numbers represent the count of dots in square arrays: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\dots$.</p>
      <p><b>Worked micro-example:</b> $49$ is a perfect square because $7 \\times 7 = 49$. $50$ is not a perfect square because $7^2 = 49$ and $8^2 = 64$.</p>`,
    intuition_ml: `<p>സമചതുരാകൃതിയിൽ ബിന്ദുക്കൾ ക്രമീകരിച്ചാൽ കിട്ടുന്ന എണ്ണങ്ങളാണ് ഈ സംഖ്യകൾ: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\dots$.</p>
      <p><b>ഉദാഹരണം:</b> $49$ ഒരു പൂർണ്ണവർഗ്ഗമാണ് ($7 \\times 7 = 49$). എന്നാൽ $50$ പൂർണ്ണവർഗ്ഗമല്ല, കാരണം $7^2 = 49$-നും $8^2 = 64$-നും ഇടയിൽ മറ്റൊരു എണ്ണൽസംഖ്യയില്ല.</p>`,
    needs: ['s.powers-exponents', 's.multiplication', 's.fraction-ops'],
    traps_en: [
      'Confusing squaring n² with doubling 2n (e.g. 4² = 16, not 8).',
      'Squaring a proper fraction produces a smaller number, not a larger one (1/4 < 1/2).'
    ],
    traps_ml: [
      'ഒരു സംഖ്യയുടെ വർഗ്ഗം കാണുന്നതും (n²) 2 കൊണ്ട് ഗുണിക്കുന്നതും (2n) തമ്മിൽ മാറിപ്പോകരുത് (4² = 16, 8 അല്ല).',
      '1-ൽ താഴെയുള്ള ഭിന്നസംഖ്യകളുടെ വർഗ്ഗം കാണുമ്പോൾ സംഖ്യ ചെറുതാവുകയാണ് ചെയ്യുന്നത് (1/4 < 1/2).'
    ],
    cards_en: [
      { q: 'What is a perfect square?', a: 'The product of a natural number multiplied by itself ($1, 4, 9, 16, \\dots$).', kind: 'state' },
      { q: 'What is the square of the fraction 2/3?', a: '$\\frac{4}{9}$.', kind: 'apply' },
      { q: 'Is 20 a perfect square?', a: 'No, because $4^2 = 16$ and $5^2 = 25$.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'പൂർണ്ണവർഗ്ഗം എന്നാൽ എന്താണ്?', a: 'ഒരു എണ്ണൽസംഖ്യയെ അതേ സംഖ്യകൊണ്ട് ഗുണിക്കുമ്പോൾ ലഭിക്കുന്ന സംഖ്യ ($1, 4, 9, 16, \\dots$).', kind: 'state' },
      { q: '2/3 എന്ന ഭിന്നസംഖ്യയുടെ വർഗ്ഗം എത്ര?', a: '$\\frac{4}{9}$.', kind: 'apply' },
      { q: '20 ഒരു പൂർണ്ണവർഗ്ഗമാണോ?', a: 'അല്ല, കാരണം $4^2 = 16$ ഉം $5^2 = 25$ ഉം ആണ്.', kind: 'trap' }
    ]
  },

  {
    id: 'm8.1.2.geo-squares',
    sec: '8.1.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Geometric Square & Area Representation',
    title_ml: 'വർഗ്ഗത്തിന്റെ ജ്യാമിതീയ രൂപവും വിസ്തീർണ്ണവും',
    oneLine_en: 'The square of a number equals the area of a square of that side length: (a+b)² = a² + 2ab + b².',
    oneLine_ml: 'ഒരു സംഖ്യയുടെ വർഗ്ഗം ആ വശമുള്ള സമചതുരത്തിന്റെ വിസ്തീർണ്ണത്തിന് തുല്യമാണ്: (a+b)² = a² + 2ab + b².',
    statement_en: `<p>A geometric square of side $s$ has area $s^2$. If the side is partitioned into $a$ and $b$ ($s = a + b$), the square splits into four regions:</p>
      <ul>
        <li>A square of area $a^2$</li>
        <li>Two rectangles, each of area $ab$</li>
        <li>A square of area $b^2$</li>
      </ul>
      $$(a + b)^2 = a^2 + 2ab + b^2$$`,
    statement_ml: `<p>$s$ വശമുള്ള സമചതുരത്തിന്റെ വിസ്തീർണ്ണം $s^2$ ആണ്. വശത്തെ $a, b$ എന്നിങ്ങനെ രണ്ട് ഭാഗങ്ങളാക്കിയാൽ ($s = a + b$), സമചതുരം നാല് ഭാഗങ്ങളായി മാറുന്നു:</p>
      <ul>
        <li>$a^2$ വിസ്തീർണ്ണമുള്ള ഒരു സമചതുരം</li>
        <li>$ab$ വിസ്തീർണ്ണമുള്ള രണ്ട് ചതുരങ്ങൾ ($2ab$)</li>
        <li>$b^2$ വിസ്തീർണ്ണമുള്ള മറ്റൊരു സമചതുരം</li>
      </ul>
      $$(a + b)^2 = a^2 + 2ab + b^2$$`,
    intuition_en: `<p>Dividing a square of side $(a+b)$ geometrically gives $a^2 + ab + ab + b^2$. The two cross rectangles add up to $2ab$.</p>`,
    intuition_ml: `<p>$(a+b)$ വശമുള്ള സമചതുരത്തെ വരച്ച് ഭാഗിച്ചാൽ നാല് കള്ളികൾ കിട്ടും: $a^2 + ab + ab + b^2 = a^2 + 2ab + b^2$.</p>`,
    needs: ['m8.1.1.perfect-squares', 's.area-rectangle', 's.expanding-brackets', 's.grid-mult'],
    traps_en: ['Do not forget the two rectangular areas: (a+b)² ≠ a² + b².'],
    traps_ml: ['രണ്ട് ചതുരങ്ങളുടെ വിസ്തീർണ്ണമായ 2ab വിട്ടുപോകരുത്: (a+b)² എന്നാൽ a² + b² അല്ല.'],
    cards_en: [
      { q: 'In the geometric partition of (a+b)², what are the four pieces?', a: 'Two squares of area $a^2$ and $b^2$, and two rectangles each of area $ab$.', kind: 'state' },
      { q: 'Expand (a + b)²', a: '$a^2 + 2ab + b^2$.', kind: 'recall' },
      { q: 'Why is the middle term 2ab?', a: 'Because there are two identical rectangles of area $ab$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '(a+b)²-ന്റെ ജ്യാമിതീയ വിഭജനത്തിൽ വരുന്ന നാല് ഭാഗങ്ങൾ ഏവ?', a: '$a^2, b^2$ വിസ്തീർണ്ണമുള്ള രണ്ട് സമചതുരങ്ങളും, $ab$ വീതമുള്ള രണ്ട് ചതുരങ്ങളും.', kind: 'state' },
      { q: '(a + b)² വിപുലീകരിക്കുക.', a: '$a^2 + 2ab + b^2$.', kind: 'recall' },
      { q: 'നടുവിലെ പദം 2ab ആകാൻ കാരണം എന്താണ്?', a: '$ab$ വിസ്തീർണ്ണമുള്ള രണ്ട് തുല്യ ചതുരങ്ങൾ ഉള്ളതുകൊണ്ട്.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.1.3.two-digit-squares',
    sec: '8.1.3',
    kind: 'technique',
    tier: 'core',
    title_en: 'Squaring Two-Digit Numbers via (a+b)²',
    title_ml: 'രണ്ടക്ക സംഖ്യകളുടെ വർഗ്ഗം',
    oneLine_en: 'Break a two-digit number into tens and units: (10a + b)² = 100a² + 20ab + b².',
    oneLine_ml: 'രണ്ടക്ക സംഖ്യകളെ പത്തുകളും ഒന്നുകളുമായി വിഭജിച്ച് വർഗ്ഗം കാണുന്നു: (10a + b)² = 100a² + 20ab + b².',
    statement_en: `<p>Any two-digit number can be written as $10a + b$. Its square is:</p>
      $$(10a + b)^2 = 100a^2 + 20ab + b^2$$`,
    statement_ml: `<p>ഏതൊരു രണ്ടക്ക സംഖ്യയെയും $10a + b$ എന്ന് എഴുതാം. അതിന്റെ വർഗ്ഗം:</p>
      $$(10a + b)^2 = 100a^2 + 20ab + b^2$$`,
    intuition_en: `<p>Textbook examples:</p>
      <ul>
        <li>$12^2 = (10 + 2)^2 = 100 + 40 + 4 = 144$</li>
        <li>$24^2 = (20 + 4)^2 = 400 + 160 + 16 = 576$</li>
        <li>$36^2 = (30 + 6)^2 = 900 + 360 + 36 = 1296$</li>
        <li>$79^2 = (70 + 9)^2 = 4900 + 1260 + 81 = 6241$</li>
      </ul>`,
    intuition_ml: `<p>പാഠപുസ്തകത്തിലെ ഉദാഹരണങ്ങൾ:</p>
      <ul>
        <li>$12^2 = (10 + 2)^2 = 100 + 40 + 4 = 144$</li>
        <li>$24^2 = (20 + 4)^2 = 400 + 160 + 16 = 576$</li>
        <li>$36^2 = (30 + 6)^2 = 900 + 360 + 36 = 1296$</li>
        <li>$79^2 = (70 + 9)^2 = 4900 + 1260 + 81 = 6241$</li>
      </ul>`,
    needs: ['m8.1.2.geo-squares', 's.zero'],
    traps_en: ['Do not forget to double the product in 2(10a)(b) = 20ab.'],
    traps_ml: ['നടുവിലെ പദം കാണുമ്പോൾ 2 കൊണ്ട് ഗുണിക്കാൻ മറക്കരുത്: 2(10a)(b) = 20ab.'],
    cards_en: [
      { q: 'Calculate 23² via (20 + 3)²', a: '$400 + 120 + 9 = 529$.', kind: 'apply' },
      { q: 'Calculate 35² via (30 + 5)²', a: '$900 + 300 + 25 = 1225$.', kind: 'apply' },
      { q: 'What is 70²?', a: '$4900$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '23² എന്നത് (20 + 3)² രീതിയിൽ കാണുക.', a: '$400 + 120 + 9 = 529$.', kind: 'apply' },
      { q: '35² എന്നത് (30 + 5)² രീതിയിൽ കാണുക.', a: '$900 + 300 + 25 = 1225$.', kind: 'apply' },
      { q: '70² എത്ര?', a: '$4900$.', kind: 'recall' }
    ]
  },

  {
    id: 'm8.1.3.three-digit-squares',
    sec: '8.1.3',
    kind: 'technique',
    tier: 'core',
    title_en: 'Squaring Three-Digit Numbers',
    title_ml: 'മൂന്നക്ക സംഖ്യകളുടെ വർഗ്ഗം',
    oneLine_en: 'Split hundreds and the remaining two-digit block: (a + b)² where a is in hundreds.',
    oneLine_ml: 'നൂറുകളുടെ സ്ഥാനവും ബാക്കി സംഖ്യയും വെവ്വേറെയാക്കി (a + b)² സമവാക്യം ഉപയോഗിക്കുന്നു.',
    statement_en: `<p>To square a three-digit number, split into hundreds and the remaining two-digit block:</p>
      $$(100a + b)^2 = (100a)^2 + 2(100a)(b) + b^2$$`,
    statement_ml: `<p>മൂന്നക്ക സംഖ്യകളുടെ വർഗ്ഗം കാണാൻ നൂറുകളുടെ സ്ഥാനവും ബാക്കി സംഖ്യയും വിഭജിക്കുന്നു:</p>
      $$(100a + b)^2 = (100a)^2 + 2(100a)(b) + b^2$$`,
    intuition_en: `<p>For $436^2$, split as $400 + 36$:</p>
      <ul>
        <li>$400^2 = 160000$</li>
        <li>$2 \\times 400 \\times 36 = 28800$</li>
        <li>$36^2 = 1296$</li>
        <li>$436^2 = 160000 + 28800 + 1296 = 190096$</li>
      </ul>`,
    intuition_ml: `<p>$436^2$ കാണാൻ $400 + 36$ ആയി ഭാഗിക്കുന്നു:</p>
      <ul>
        <li>$400^2 = 160000$</li>
        <li>$2 \\times 400 \\times 36 = 28800$</li>
        <li>$36^2 = 1296$</li>
        <li>$436^2 = 160000 + 28800 + 1296 = 190096$</li>
      </ul>`,
    needs: ['m8.1.3.two-digit-squares'],
    traps_en: ['400² has four zeros (160000), not three.'],
    traps_ml: ['400²-ൽ നാല് പൂജ്യങ്ങൾ ഉണ്ടാകും (160000), മൂന്ന് പൂജ്യമല്ല.'],
    cards_en: [
      { q: 'How many zeros are at the end of (300)²?', a: 'Four zeros ($90,000$).', kind: 'recall' },
      { q: 'Split 512 for squaring via (a+b)²', a: '$500 + 12$.', kind: 'apply' },
      { q: 'Calculate 105² as (100 + 5)²', a: '$10000 + 1000 + 25 = 11025$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '(300)²-ന്റെ അവസാനം എത്ര പൂജ്യങ്ങൾ ഉണ്ടാകും?', a: 'നാല് പൂജ്യങ്ങൾ ($90,000$).', kind: 'recall' },
      { q: '512-ന്റെ വർഗ്ഗം കാണാൻ എങ്ങനെ വിഭജിക്കാം?', a: '$500 + 12$.', kind: 'apply' },
      { q: '105² എന്നത് (100 + 5)² രീതിയിൽ കാണുക.', a: '$10000 + 1000 + 25 = 11025$.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.1.4.decimal-squares',
    sec: '8.1.4',
    kind: 'technique',
    tier: 'core',
    title_en: 'Decimal Squares & Place Value Doubling',
    title_ml: 'ദശാംശ സംഖ്യകളുടെ വർഗ്ഗം',
    oneLine_en: 'The count of decimal places doubles upon squaring: (0.a)² has 2 decimal digits.',
    oneLine_ml: 'ദശാംശസംഖ്യകളുടെ വർഗ്ഗം കാണുമ്പോൾ ദശാംശസ്ഥാനങ്ങളുടെ എണ്ണം ഇരട്ടിയാകുന്നു.',
    statement_en: `<p>Two methods for squaring decimal numbers:</p>
      <ol>
        <li><b>Fraction method:</b> $3.7^2 = \\left(\\frac{37}{10}\\right)^2 = \\frac{1369}{100} = 13.69$.</li>
        <li><b>Split method:</b> $3.7^2 = (3 + 0.7)^2 = 9 + 4.2 + 0.49 = 13.69$.</li>
      </ol>
      <p><b>Rule:</b> If a number has $d$ decimal places, its square has $2d$ decimal places.</p>`,
    statement_ml: `<p>ദശാംശസംഖ്യകളുടെ വർഗ്ഗം കാണാൻ രണ്ട് രീതികൾ:</p>
      <ol>
        <li><b>ഭിന്നസംഖ്യാ രീതി:</b> $3.7^2 = \\left(\\frac{37}{10}\\right)^2 = \\frac{1369}{100} = 13.69$.</li>
        <li><b>വിഭജന രീതി:</b> $3.7^2 = (3 + 0.7)^2 = 9 + 4.2 + 0.49 = 13.69$.</li>
      </ol>
      <p><b>നിയമം:</b> ഒരു സംഖ്യയിൽ $d$ ദശാംശസ്ഥാനങ്ങളുണ്ടെങ്കിൽ അതിന്റെ വർഗ്ഗത്തിൽ $2d$ ദശാംശസ്ഥാനങ്ങൾ ഉണ്ടാകും.</p>`,
    intuition_en: `<p>Area of a square of side $3.7\\text{ m}$ is $3.7 \\times 3.7 = 13.69\\text{ sq m}$. $0.7^2 = 0.49$ (two decimal places!).</p>`,
    intuition_ml: `<p>$3.7$ മീറ്റർ വശമുള്ള സമചതുരത്തിന്റെ വിസ്തീർണ്ണം $3.7 \\times 3.7 = 13.69$ ചതുരശ്ര മീറ്ററാണ്. $0.7^2 = 0.49$ (രണ്ട് ദശാംശസ്ഥാനങ്ങൾ!).</p>`,
    needs: ['m8.1.3.two-digit-squares', 's.decimals', 's.decimal-ops'],
    traps_en: ['0.7² is 0.49, NOT 4.9.'],
    traps_ml: ['0.7² എന്നാൽ 0.49 ആണ്, 4.9 അല്ല.'],
    cards_en: [
      { q: 'Calculate 0.6²', a: '$0.36$.', kind: 'apply' },
      { q: 'Calculate 2.3² as (2 + 0.3)²', a: '$4 + 1.2 + 0.09 = 5.29$.', kind: 'apply' },
      { q: 'How many decimal places in (1.05)?', a: '$2 \\times 2 = 4$ places ($1.1025$).', kind: 'recall' }
    ],
    cards_ml: [
      { q: '0.6² എത്ര?', a: '$0.36$.', kind: 'apply' },
      { q: '2.3² എന്നത് (2 + 0.3)² ആയി കാണുക.', a: '$4 + 1.2 + 0.09 = 5.29$.', kind: 'apply' },
      { q: '(1.05)²-ൽ എത്ര ദശാംശസ്ഥാനങ്ങൾ ഉണ്ടാകും?', a: '$2 \\times 2 = 4$ സ്ഥാനങ്ങൾ ($1.1025$).', kind: 'recall' }
    ]
  },

  {
    id: 'm8.1.5.half-pattern',
    sec: '8.1.5',
    kind: 'technique',
    tier: 'core',
    title_en: 'Squares of Numbers Ending in 0.5: n(n+1) + 0.25',
    title_ml: 'പ്രത്യേക വർഗ്ഗ രീതികൾ (0.5 വരുന്നവ)',
    oneLine_en: '(n + 0.5)² = n(n + 1) + 0.25 — multiply n by the next integer and append .25.',
    oneLine_ml: 'ദശാംശഭാഗം 0.5 വരുന്ന സംഖ്യകളുടെ വർഗ്ഗം കാണാൻ: n-നെ തൊട്ടടുത്ത സംഖ്യകൊണ്ട് ഗുണിച്ച് 0.25 ചേർക്കുക.',
    statement_en: `<p>For any number ending in $0.5$ (or fraction $n + \\frac{1}{2}$):</p>
      $$\\left(n + \\frac{1}{2}\\right)^2 = n^2 + n + \\frac{1}{4} = n(n+1) + 0.25$$`,
    statement_ml: `<p>ദശാംശഭാഗം $0.5$ (അല്ലെങ്കിൽ $\\frac{1}{2}$) വരുന്ന സംഖ്യകളുടെ വർഗ്ഗം കാണാൻ:</p>
      $$\\left(n + \\frac{1}{2}\\right)^2 = n^2 + n + \\frac{1}{4} = n(n+1) + 0.25$$`,
    intuition_en: `<p>Examples:</p>
      <ul>
        <li>$1.5^2 = 1 \\times 2 + 0.25 = 2.25$</li>
        <li>$2.5^2 = 2 \\times 3 + 0.25 = 6.25$</li>
        <li>$3.5^2 = 3 \\times 4 + 0.25 = 12.25$</li>
        <li>$4.5^2 = 4 \\times 5 + 0.25 = 20.25$</li>
        <li>$7.5^2 = 7 \\times 8 + 0.25 = 56.25$</li>
      </ul>`,
    intuition_ml: `<p>ഉദാഹരണങ്ങൾ:</p>
      <ul>
        <li>$1.5^2 = 1 \\times 2 + 0.25 = 2.25$</li>
        <li>$2.5^2 = 2 \\times 3 + 0.25 = 6.25$</li>
        <li>$3.5^2 = 3 \\times 4 + 0.25 = 12.25$</li>
        <li>$4.5^2 = 4 \\times 5 + 0.25 = 20.25$</li>
        <li>$7.5^2 = 7 \\times 8 + 0.25 = 56.25$</li>
      </ul>`,
    needs: ['m8.1.4.decimal-squares', 's.expanding-brackets'],
    traps_en: ['Multiply n by (n+1), not by n itself (4.5² is 20.25, not 16.25).'],
    traps_ml: ['n-നെ തൊട്ടടുത്ത സംഖ്യയായ (n+1) കൊണ്ടാണ് ഗുണിക്കേണ്ടത് (4.5² = 20.25, 16.25 അല്ല).'],
    cards_en: [
      { q: 'Calculate 6.5² in one step.', a: '$6 \\times 7 + 0.25 = 42.25$.', kind: 'apply' },
      { q: 'Calculate 8.5².', a: '$8 \\times 9 + 0.25 = 72.25$.', kind: 'apply' },
      { q: 'What is the formula for (n + 0.5)²?', a: '$n(n+1) + 0.25$.', kind: 'state' }
    ],
    cards_ml: [
      { q: '6.5² ഒരൊറ്റ ഘട്ടത്തിൽ കാണുക.', a: '$6 \\times 7 + 0.25 = 42.25$.', kind: 'apply' },
      { q: '8.5² എത്ര?', a: '$8 \\times 9 + 0.25 = 72.25$.', kind: 'apply' },
      { q: '(n + 0.5)²-ന്റെ സമവാക്യം എന്താണ്?', a: '$n(n+1) + 0.25$.', kind: 'state' }
    ]
  },

  {
    id: 'm8.1.5.quarter-pattern',
    sec: '8.1.5',
    kind: 'technique',
    tier: 'core',
    title_en: 'Squares of Numbers Ending in 0.25: n² + 0.5n + 0.0625',
    title_ml: 'പ്രത്യേക വർഗ്ഗ രീതികൾ (0.25 വരുന്നവ)',
    oneLine_en: '(n + 0.25)² = n² + 0.5n + 0.0625.',
    oneLine_ml: 'ദശാംശഭാഗം 0.25 വരുന്ന സംഖ്യകളുടെ വർഗ്ഗം: n² + 0.5n + 0.0625.',
    statement_en: `<p>For any number ending in $0.25$ (or fraction $\\frac{1}{4}$):</p>
      $$(n + 0.25)^2 = n^2 + 2(n)(0.25) + 0.0625 = n^2 + 0.5n + 0.0625$$`,
    statement_ml: `<p>ദശാംശഭാഗം $0.25$ (അല്ലെങ്കിൽ $\\frac{1}{4}$) വരുന്ന സംഖ്യകളുടെ വർഗ്ഗം:</p>
      $$(n + 0.25)^2 = n^2 + 0.5n + 0.0625$$`,
    intuition_en: `<p>Examples:</p>
      <ul>
        <li>$1.25^2 = 1 + 0.5 + 0.0625 = 1.5625$</li>
        <li>$2.25^2 = 4 + 1.0 + 0.0625 = 5.0625$</li>
        <li>$3.25^2 = 9 + 1.5 + 0.0625 = 10.5625$</li>
        <li>$4.25^2 = 16 + 2.0 + 0.0625 = 18.0625$</li>
      </ul>`,
    intuition_ml: `<p>ഉദാഹരണങ്ങൾ:</p>
      <ul>
        <li>$1.25^2 = 1 + 0.5 + 0.0625 = 1.5625$</li>
        <li>$2.25^2 = 4 + 1.0 + 0.0625 = 5.0625$</li>
        <li>$3.25^2 = 9 + 1.5 + 0.0625 = 10.5625$</li>
        <li>$4.25^2 = 16 + 2.0 + 0.0625 = 18.0625$</li>
      </ul>`,
    needs: ['m8.1.5.half-pattern'],
    traps_en: ['0.25² is 0.0625 (four decimal places), NOT 0.625.'],
    traps_ml: ['0.25² എന്നാൽ 0.0625 ആണ് (നാല് ദശാംശസ്ഥാനങ്ങൾ), 0.625 അല്ല.'],
    cards_en: [
      { q: 'Calculate 0.25²', a: '$0.0625$.', kind: 'recall' },
      { q: 'Calculate 5.25².', a: '$25 + 2.5 + 0.0625 = 27.5625$.', kind: 'apply' },
      { q: 'What is the middle term in (n + 0.25)²?', a: '$0.5n$ (or $n/2$).', kind: 'state' }
    ],
    cards_ml: [
      { q: '0.25² എത്ര?', a: '$0.0625$.', kind: 'recall' },
      { q: '5.25² എത്ര?', a: '$25 + 2.5 + 0.0625 = 27.5625$.', kind: 'apply' },
      { q: '(n + 0.25)²-ലെ നടുവിലെ പദം എന്താണ്?', a: '$0.5n$ (അല്ലെങ്കിൽ $n/2$).', kind: 'state' }
    ]
  },

  {
    id: 'm8.1.6.square-roots',
    sec: '8.1.6',
    kind: 'definition',
    tier: 'core',
    title_en: 'Square Roots & Inverse Operations',
    title_ml: 'വർഗ്ഗമൂലം',
    oneLine_en: 'The square root √x is the non-negative number y such that y² = x.',
    oneLine_ml: 'ഒരു സംഖ്യയുടെ വർഗ്ഗം x ആണെങ്കിൽ, ആ സംഖ്യയെ x-ന്റെ വർഗ്ഗമൂലം (√x) എന്ന് വിളിക്കുന്നു.',
    statement_en: `<p>The <b>square root</b> of a non-negative number $x$ is the non-negative number $y$ such that:</p>
      $$\\sqrt{x} = y \\iff y^2 = x \\quad (y \\ge 0)$$
      <p><b>Unit digit rule:</b> Perfect squares only end in $0, 1, 4, 5, 6, 9$. Any number ending in $2, 3, 7,$ or $8$ is never a perfect square.</p>`,
    statement_ml: `<p>ഒരു സംഖ്യയുടെ വർഗ്ഗം $x$ ആണെങ്കിൽ, ആ സംഖ്യയെ $x$-ന്റെ <b>വർഗ്ഗമൂലം</b> എന്ന് വിളിക്കുന്നു:</p>
      $$\\sqrt{x} = y \\iff y^2 = x \\quad (y \\ge 0)$$
      <p><b>ഒറ്റയുടെ സ്ഥാനത്തെ അക്കങ്ങൾ:</b> പൂർണ്ണവർഗ്ഗങ്ങളുടെ അവസാന അക്കം $0, 1, 4, 5, 6, 9$ എന്നിവ മാത്രമേ വരൂ. അവസാന അക്കം $2, 3, 7, 8$ വരുന്ന സംഖ്യകൾ ഒരിക്കലും പൂർണ്ണവർഗ്ഗങ്ങളല്ല.</p>`,
    intuition_en: `<p>$\\sqrt{100} = 10$ because $10^2 = 100$. $\\sqrt{196} = 14$ because $14^2 = 196$. $\\sqrt{0.25} = 0.5$.</p>`,
    intuition_ml: `<p>$\\sqrt{100} = 10$ കാരണം $10^2 = 100$ ആണ്. $\\sqrt{196} = 14$ കാരണം $14^2 = 196$ ആണ്. $\\sqrt{0.25} = 0.5$.</p>`,
    needs: ['m8.1.1.perfect-squares', 's.prime-composite'],
    traps_en: ['Numbers ending in 2, 3, 7, or 8 can never be perfect squares.'],
    traps_ml: ['അവസാന അക്കം 2, 3, 7, അല്ലെങ്കിൽ 8 വരുന്ന സംഖ്യകൾ ഒരിക്കലും പൂർണ്ണവർഗ്ഗങ്ങളാകില്ല.'],
    cards_en: [
      { q: 'What is √144?', a: '$12$.', kind: 'apply' },
      { q: 'Which unit digits never appear in a perfect square?', a: '$2, 3, 7,$ and $8$.', kind: 'state' },
      { q: 'What is √0.04?', a: '$0.2$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '√144 എത്ര?', a: '$12$.', kind: 'apply' },
      { q: 'പൂർണ്ണവർഗ്ഗങ്ങളിൽ ഒരിക്കലും വരാത്ത അവസാന അക്കങ്ങൾ ഏവ?', a: '$2, 3, 7, 8$.', kind: 'state' },
      { q: '√0.04 എത്ര?', a: '$0.2$.', kind: 'apply' }
    ]
  }
);
