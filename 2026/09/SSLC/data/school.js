/* ══════════════════════════════════════════════════════════════════════════
   Foundational Prerequisites: Class 1 to Class 7 Mathematics
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing of languages. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  /* ── CLASS 1 & 2: Numbers, Addition & Subtraction ───────────────────── */
  {
    id: 's.counting',
    sec: 'p.1.1',
    tier: 'school',
    kind: 'definition',
    title_en: 'Natural Numbers and Counting',
    title_ml: 'എണ്ണൽസംഖ്യകൾ',
    oneLine_en: 'The counting numbers 1, 2, 3, 4... used to tally discrete objects.',
    oneLine_ml: 'വസ്തുക്കളെ എണ്ണാൻ ഉപയോഗിക്കുന്ന 1, 2, 3, 4... തുടങ്ങിയ സംഖ്യകളാണ് എണ്ണൽസംഖ്യകൾ.',
    statement_en: `<p>The numbers used for counting objects are called <b>natural numbers</b> or <b>counting numbers</b>:</p>
      $$\\mathbb{N} = \\{1, 2, 3, 4, 5, \\dots\\}$$
      <p>The smallest natural number is $1$. Every natural number has an immediate successor obtained by adding $1$.</p>`,
    statement_ml: `<p>വസ്തുക്കളെ എണ്ണാൻ ഉപയോഗിക്കുന്ന സംഖ്യകളെയാണ് <b>എണ്ണൽസംഖ്യകൾ</b> എന്ന് വിളിക്കുന്നത്:</p>
      $$\\mathbb{N} = \\{1, 2, 3, 4, 5, \\dots\\}$$
      <p>ഏറ്റവും ചെറിയ എണ്ണൽസംഖ്യ $1$ ആണ്. ഏതൊരു എണ്ണൽസംഖ്യയോടും $1$ കൂട്ടുമ്പോൾ തൊട്ടടുത്ത എണ്ണൽസംഖ്യ ലഭിക്കുന്നു.</p>`,
    intuition_en: `<p>Counting is pairing each object with the next number in sequence. Natural numbers are ordered: if $a$ comes before $b$, then $a < b$.</p>
      <p><b>Worked micro-example:</b> If a basket has $4$ apples and you add $1$ more, you count to $5$. There is no largest natural number because counting can go on indefinitely.</p>`,
    intuition_ml: `<p>വസ്തുക്കളെ ഓരോന്നായി ക്രമത്തിൽ എടുത്ത് എണ്ണുന്ന രീതിയാണിത്. ഒരു സംഖ്യ മറ്റൊന്നിനേക്കാൾ വലുതാണോ ചെറുതാണോ എന്ന് എണ്ണൽ ക്രമം വഴി മനസ്സിലാക്കാം.</p>
      <p><b>ഉദാഹരണം:</b> ഒരു പെട്ടിയിൽ $4$ മാങ്ങയുണ്ടെങ്കിൽ ഒന്നുകൂടി വെക്കുമ്പോൾ എണ്ണം $5$ ആകുന്നു. എത്ര വലിയ സംഖ്യയോടും $1$ കൂട്ടി അതിലും വലിയ സംഖ്യ കണ്ടെത്താം.</p>`,
    needs: [],
    traps_en: ['Zero is not a natural number in school arithmetic; natural numbers start from 1.'],
    traps_ml: ['സ്കൂൾ ഗണിതത്തിൽ പൂജ്യം ഒരു എണ്ണൽസംഖ്യയല്ല. എണ്ണൽസംഖ്യകൾ 1 മുതലാണ് ആരംഭിക്കുന്നത്.'],
    cards_en: [
      { q: 'What is the smallest natural number?', a: '$1$.', kind: 'state' },
      { q: 'What is the successor of 99?', a: '$100$.', kind: 'apply' },
      { q: 'Is 0 a natural number?', a: 'No, natural numbers begin at $1$.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ഏറ്റവും ചെറിയ എണ്ണൽസംഖ്യ ഏതാണ്?', a: '$1$.', kind: 'state' },
      { q: '99 എന്ന സംഖ്യയ്ക്ക് തൊട്ടടുത്ത എണ്ണൽസംഖ്യ ഏതാണ്?', a: '$100$.', kind: 'apply' },
      { q: 'പൂജ്യം ഒരു എണ്ണൽസംഖ്യയാണോ?', a: 'അല്ല, എണ്ണൽസംഖ്യകൾ 1 മുതലാണ് ആരംഭിക്കുന്നത്.', kind: 'trap' }
    ]
  },

  {
    id: 's.addition',
    sec: 'p.1.2',
    tier: 'school',
    kind: 'technique',
    title_en: 'Addition and Combining Quantities',
    title_ml: 'കൂട്ടലും തുകയും',
    oneLine_en: 'Addition (+) combines two or more collections into a single total.',
    oneLine_ml: 'രണ്ടോ അതിലധികമോ അളവുകളെ ഒന്നിച്ചു ചേർത്ത് ആകെ തുക കാണുന്ന രീതിയാണ് സങ്കലനം (കൂട്ടൽ).',
    statement_en: `<p><b>Addition</b> combines two quantities $a$ and $b$ into their sum $a + b$.</p>
      <ul>
        <li><b>Commutative property:</b> $a + b = b + a$.</li>
        <li><b>Associative property:</b> $(a + b) + c = a + (b + c)$.</li>
        <li><b>Additive identity:</b> $a + 0 = a$.</li>
      </ul>`,
    statement_ml: `<p>രണ്ട് അളവുകളായ $a$, $b$ എന്നിവ ചേർത്ത് ആകെ തുക $a + b$ കണ്ടെത്തുന്നു.</p>
      <ul>
        <li><b>ക്രമനിയമം:</b> $a + b = b + a$. ക്രമം മാറ്റിക്കൂട്ടിയാലും തുക മാറില്ല.</li>
        <li><b>സഹവർത്തിനിയമം:</b> $(a + b) + c = a + (b + c)$.</li>
        <li><b>അനന്യകം:</b> ഏതൊരു സംഖ്യയോടും പൂജ്യം കൂട്ടിയാൽ അതേ സംഖ്യ തന്നെ ലഭിക്കും ($a + 0 = a$).</li>
      </ul>`,
    intuition_en: `<p>The order in which you add numbers does not change the result: $4 + 7 = 7 + 4 = 11$.</p>
      <p><b>Worked micro-example:</b> To add $18 + 35 + 2$, regroup mentally as $(18 + 2) + 35 = 20 + 35 = 55$.</p>`,
    intuition_ml: `<p>കൂട്ടുന്ന ക്രമം മാറ്റിയാലും തുകയിൽ വ്യത്യാസം വരില്ല: $4 + 7 = 7 + 4 = 11$.</p>
      <p><b>ലളിതമായ ഉദാഹരണം:</b> $18 + 35 + 2$ കൂട്ടാൻ, ആദ്യം $(18 + 2) = 20$ കൂട്ടി, ശേഷം $20 + 35 = 55$ എന്ന് എളുപ്പത്തിൽ കണ്ടെത്താം.</p>`,
    needs: ['s.counting'],
    traps_en: ['Addition order does not matter, but subtraction order does.'],
    traps_ml: ['കൂട്ടുമ്പോൾ ക്രമം മാറ്റാമെങ്കിലും കുറയ്ക്കുമ്പോൾ ക്രമം മാറ്റാൻ കഴിയില്ല.'],
    cards_en: [
      { q: 'State the commutative property of addition.', a: '$a + b = b + a$.', kind: 'state' },
      { q: 'Compute (27 + 46) + 3 mentally.', a: '$(27 + 3) + 46 = 30 + 46 = 76$.', kind: 'apply' },
      { q: 'What is the sum of any number and zero?', a: 'The same number ($a + 0 = a$).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'സങ്കലനത്തിലെ ക്രമനിയമം എന്താണ്?', a: '$a + b = b + a$.', kind: 'state' },
      { q: '(27 + 46) + 3 മനക്കണക്കായി കൂട്ടുക.', a: '$(27 + 3) + 46 = 30 + 46 = 76$.', kind: 'apply' },
      { q: 'ഒരു സംഖ്യയോട് പൂജ്യം കൂട്ടിയാൽ എന്ത് ലഭിക്കും?', a: 'അതേ സംഖ്യ തന്നെ ($a + 0 = a$).', kind: 'recall' }
    ]
  },

  {
    id: 's.subtraction',
    sec: 'p.1.3',
    tier: 'school',
    kind: 'technique',
    title_en: 'Subtraction as Difference and Inverse of Addition',
    title_ml: 'കുറയ്ക്കലും വ്യത്യാസവും',
    oneLine_en: 'Subtraction (−) measures what is left over, or the gap between two numbers.',
    oneLine_ml: 'ഒരു സംഖ്യയിൽ നിന്ന് മറ്റൊന്ന് മാറ്റിയാൽ ബാക്കി എത്രയുണ്ടെന്ന് കാണുന്നതാണ് വ്യവകലനം (കുറയ്ക്കൽ).',
    statement_en: `<p><b>Subtraction</b> is the inverse operation of addition:</p>
      $$a - b = c \\iff c + b = a$$
      <p>Here $a$ is the minuend, $b$ is the subtrahend, and $c$ is the <b>difference</b>.</p>`,
    statement_ml: `<p>കൂട്ടലിന്റെ വിപരീതക്രിയയാണ് <b>കുറയ്ക്കൽ</b>:</p>
      $$a - b = c \\iff c + b = a$$
      <p>ഇവിടെ $a$-യിൽ നിന്ന് $b$ കുറച്ചാൽ കിട്ടുന്ന ഫലമാണ് <b>വ്യത്യാസം</b> ($c$).</p>`,
    intuition_en: `<p>Subtraction tells you either how much remains after taking away, or how many steps lie between two values on the number line.</p>
      <p><b>Worked micro-example:</b> $15 - 9 = 6$ because $6 + 9 = 15$.</p>`,
    intuition_ml: `<p>ഒരു സംഖ്യ മറ്റേതിനേക്കാൾ എത്ര വലുതാണ് അല്ലെങ്കിൽ ബാക്കി എത്രയുണ്ട് എന്ന് കുറയ്ക്കൽ വഴി അറിയാം.</p>
      <p><b>ഉദാഹരണം:</b> $15 - 9 = 6$ കാരണം $6 + 9 = 15$ ആണ്.</p>`,
    needs: ['s.addition'],
    traps_en: ['Subtraction is not commutative: 9 − 4 ≠ 4 − 9.'],
    traps_ml: ['കുറയ്ക്കലിൽ ക്രമനിയമം ബാധകമല്ല: 9 − 4 ഉം 4 − 9 ഉം തുല്യമല്ല.'],
    cards_en: [
      { q: 'If x + 25 = 70, find x.', a: '$x = 70 - 25 = 45$.', kind: 'apply' },
      { q: 'Is subtraction commutative?', a: 'No, $a - b \\ne b - a$ in general.', kind: 'trap' },
      { q: 'What is a − a for any number a?', a: '$0$.', kind: 'state' }
    ],
    cards_ml: [
      { q: 'x + 25 = 70 ആണെങ്കിൽ x എത്ര?', a: '$x = 70 - 25 = 45$.', kind: 'apply' },
      { q: 'കുറയ്ക്കലിൽ ക്രമനിയമം ബാധകമാണോ?', a: 'അല്ല, പൊതുവെ $a - b \\ne b - a$ ആണ്.', kind: 'trap' },
      { q: 'ഏതൊരു സംഖ്യയിൽ നിന്നും അതേ സംഖ്യ കുറച്ചാൽ എന്ത് കിട്ടും?', a: '$0$.', kind: 'state' }
    ]
  },

  {
    id: 's.zero',
    sec: 'p.1.4',
    tier: 'school',
    kind: 'definition',
    title_en: 'Zero and Base-10 Place Value',
    title_ml: 'പൂജ്യവും സ്ഥാനവിലയും',
    oneLine_en: 'Each place to the left is worth 10 times more; zero marks an empty place.',
    oneLine_ml: 'ഓരോ സ്ഥാനവും ഇടതുവശത്തേക്ക് പോകുന്തോറും 10 ഇരട്ടിയാകുന്നു; പൂജ്യം സ്ഥാനവില നിലനിർത്തുന്നു.',
    statement_en: `<p>In decimal notation, digits have <b>face value</b> and <b>place value</b>:</p>
      $$405 = (4 \\times 100) + (0 \\times 10) + (5 \\times 1)$$
      <p>Zero represents the number of empty sets and keeps higher digits in their proper columns.</p>`,
    statement_ml: `<p>സംഖ്യകളെ എഴുതാൻ നാം സ്ഥാനവില രീതി ഉപയോഗിക്കുന്നു:</p>
      $$405 = (4 \\times 100) + (0 \\times 10) + (5 \\times 1)$$
      <p>ഇവിടെ പത്തിന്റെ സ്ഥാനത്ത് പൂജ്യമാണ്. പൂജ്യം ഇല്ലെങ്കിൽ സംഖ്യ 45 ആയി മാറും.</p>`,
    intuition_en: `<p>Without zero as a place holder, we could not distinguish $45$, $405$, and $450$.</p>`,
    intuition_ml: `<p>പൂജ്യം സ്ഥാനവില നിലനിർത്തുന്നതുകൊണ്ടാണ് 45, 405, 450 എന്നിവ വ്യത്യസ്ത സംഖ്യകളാകുന്നത്.</p>`,
    needs: ['s.counting', 's.addition'],
    traps_en: ['Multiplying by zero gives zero, but adding zero leaves the number unchanged.'],
    traps_ml: ['പൂജ്യം കൊണ്ട് ഗുണിച്ചാൽ പൂജ്യമാകും; എന്നാൽ പൂജ്യം കൂട്ടിയാൽ സംഖ്യക്ക് മാറ്റമില്ല.'],
    cards_en: [
      { q: 'What is the place value of 7 in 3,740?', a: 'Hundreds ($7 \\times 100 = 700$).', kind: 'apply' },
      { q: 'What is 58 × 0?', a: '$0$.', kind: 'recall' },
      { q: 'What is 58 + 0?', a: '$58$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '3,740 എന്ന സംഖ്യയിലെ 7-ന്റെ സ്ഥാനവില എത്ര?', a: 'നൂറുകൾ ($7 \\times 100 = 700$).', kind: 'apply' },
      { q: '58 × 0 എത്ര?', a: '$0$.', kind: 'recall' },
      { q: '58 + 0 എത്ര?', a: '$58$.', kind: 'recall' }
    ]
  },

  /* ── CLASS 3 & 4: Multiplication, Division & Parity ─────────────────── */
  {
    id: 's.multiplication',
    sec: 'p.2.1',
    tier: 'school',
    kind: 'technique',
    title_en: 'Multiplication as Repeated Addition',
    title_ml: 'ഗുണനം ആവർത്തന സങ്കലനമായി',
    oneLine_en: 'Multiplying a × b means adding a to itself b times.',
    oneLine_ml: 'ഒരു സംഖ്യയെ വീണ്ടും വീണ്ടും കൂട്ടുന്നതിന്റെ ചുരുക്കരൂപമാണ് ഗുണനം ($a \\times b$).',
    statement_en: `<p><b>Multiplication</b> is repeated addition of identical quantities:</p>
      $$a \\times b = \\underbrace{a + a + \\dots + a}_{b \\text{ times}}$$`,
    statement_ml: `<p>ഒരേ സംഖ്യയെ നിശ്ചിത തവണ ആവർത്തിച്ച് കൂട്ടുന്നതാണ് <b>ഗുണനം</b>:</p>
      $$a \\times b = \\underbrace{a + a + \\dots + a}_{b \\text{ തവണ}}$$`,
    intuition_en: `<p>Think of $4 \\times 3$ as $3$ groups of $4$ dots, giving $12$ dots in total.</p>`,
    intuition_ml: `<p>$4 \\times 3$ എന്നാൽ $4$ വീതമുള്ള $3$ കൂട്ടങ്ങൾ: $4 + 4 + 4 = 12$.</p>`,
    needs: ['s.addition'],
    traps_en: ['Confusing a × b with a + b.'],
    traps_ml: ['ഗുണനവും കൂട്ടലും തമ്മിൽ മാറിപ്പോകരുത് ($3 \\times 3 = 9$, എന്നാൽ $3 + 3 = 6$).'],
    cards_en: [
      { q: 'Write 6 × 4 as repeated addition.', a: '$6 + 6 + 6 + 6 = 24$.', kind: 'apply' },
      { q: 'What is a × 1?', a: '$a$.', kind: 'state' },
      { q: 'What is a × 0?', a: '$0$.', kind: 'state' }
    ],
    cards_ml: [
      { q: '6 × 4 എന്നതിനെ ആവർത്തന സങ്കലനമായി എഴുതുക.', a: '$6 + 6 + 6 + 6 = 24$.', kind: 'apply' },
      { q: 'a × 1 എത്ര?', a: '$a$.', kind: 'state' },
      { q: 'a × 0 എത്ര?', a: '$0$.', kind: 'state' }
    ]
  },

  {
    id: 's.mult-properties',
    sec: 'p.2.2',
    tier: 'school',
    kind: 'property',
    title_en: 'Commutative & Associative Properties of Multiplication',
    title_ml: 'ഗുണനത്തിന്റെ സവിശേഷതകൾ',
    oneLine_en: 'Changing order (ab = ba) or grouping ((ab)c = a(bc)) does not change the product.',
    oneLine_ml: 'ഗുണിക്കുന്ന ക്രമം മാറ്റിയാലും കൂട്ടം മാറ്റിയാലും ഗുണനഫലത്തിൽ മാറ്റമില്ല.',
    statement_en: `<p>For all numbers:</p>
      <ul>
        <li><b>Commutative property:</b> $a \\times b = b \\times a$.</li>
        <li><b>Associative property:</b> $(a \\times b) \\times c = a \\times (b \\times c)$.</li>
      </ul>`,
    statement_ml: `<p>എല്ലാ സംഖ്യകൾക്കും:</p>
      <ul>
        <li><b>ക്രമനിയമം:</b> $a \\times b = b \\times a$.</li>
        <li><b>സഹവർത്തിനിയമം:</b> $(a \\times b) \\times c = a \\times (b \\times c)$.</li>
      </ul>`,
    intuition_en: `<p>A dot grid of $3$ rows and $5$ columns has the same total dots as $5$ rows of $3$ columns.</p>`,
    intuition_ml: `<p>3 വരികളിലായി 5 വീതം ക്രമീകരിച്ചാലും 5 വരികളിലായി 3 വീതം ക്രമീകരിച്ചാലും ആകെ എണ്ണം തുല്യമാണ്.</p>`,
    needs: ['s.multiplication'],
    traps_en: ['Multiplication is commutative, but division is not.'],
    traps_ml: ['ഗുണനത്തിൽ ക്രമനിയമം ബാധകമാണ്, എന്നാൽ ഹരണത്തിൽ ബാധകമല്ല.'],
    cards_en: [
      { q: 'Compute 25 × 17 × 4 mentally.', a: '$(25 \\times 4) \\times 17 = 100 \\times 17 = 1700$.', kind: 'apply' },
      { q: 'State the commutative property of multiplication.', a: '$a \\times b = b \\times a$.', kind: 'state' },
      { q: 'Does 8 × 9 equal 9 × 8?', a: 'Yes, both equal $72$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '25 × 17 × 4 മനക്കണക്കായി ചെയ്യുക.', a: '$(25 \\times 4) \\times 17 = 100 \\times 17 = 1700$.', kind: 'apply' },
      { q: 'ഗുണനത്തിലെ ക്രമനിയമം എഴുതുക.', a: '$a \\times b = b \\times a$.', kind: 'state' },
      { q: '8 × 9 ഉം 9 × 8 ഉം തുല്യമാണോ?', a: 'അതെ, രണ്ടും $72$ ആണ്.', kind: 'recall' }
    ]
  },

  {
    id: 's.distributive-law',
    sec: 'p.2.3',
    tier: 'school',
    kind: 'technique',
    title_en: 'Distributive Property: a(b + c) = ab + ac',
    title_ml: 'വിതരണനിയമം',
    oneLine_en: 'Multiplication distributes over addition: a(b + c) = ab + ac.',
    oneLine_ml: 'ഒരു തുകയെ ഒരു സംഖ്യകൊണ്ട് ഗുണിക്കാൻ, ഓരോ പദത്തെയും വെവ്വേറെ ഗുണിച്ച് കൂട്ടിയാൽ മതി.',
    statement_en: `<p>The <b>distributive property</b> relates multiplication and addition:</p>
      $$a(b + c) = ab + ac$$
      <p>Similarly for subtraction: $a(b - c) = ab - ac$.</p>`,
    statement_ml: `<p>സങ്കലനത്തിന്മേലുള്ള ഗുണനത്തിന്റെ <b>വിതരണനിയമം</b>:</p>
      $$a(b + c) = ab + ac$$
      <p>കുറയ്ക്കലിലും ഇത് ബാധകമാണ്: $a(b - c) = ab - ac$.</p>`,
    intuition_en: `<p>A rectangle of height $a$ and split base $(b + c)$ has area equal to the sum of two smaller rectangles $ab$ and $ac$.</p>`,
    intuition_ml: `<p>ഉയരം $a$-യും വീതി $(b + c)$-യുമായ ഒരു ചതുരത്തിന്റെ വിസ്തീർണ്ണം, $ab$, $ac$ എന്നീ രണ്ട് ചെറിയ ചതുരങ്ങളുടെ വിസ്തീർണ്ണങ്ങളുടെ തുകയാണ്.</p>`,
    needs: ['s.multiplication', 's.addition'],
    traps_en: ['Do not forget to multiply both terms inside brackets: a(b + c) ≠ ab + c.'],
    traps_ml: ['ബ്രാക്കറ്റിനുള്ളിലെ രണ്ട് സംഖ്യകളെയും ഗുണിക്കണം: a(b + c) എന്നാൽ ab + c അല്ല.'],
    cards_en: [
      { q: 'Expand 5 × (20 + 3) using distribution.', a: '$(5 \\times 20) + (5 \\times 3) = 100 + 15 = 115$.', kind: 'apply' },
      { q: 'State the distributive law in symbols.', a: '$a(b + c) = ab + ac$.', kind: 'state' },
      { q: 'Calculate 8 × 99 as 8(100 − 1).', a: '$800 - 8 = 792$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '5 × (20 + 3) വിതരണനിയമം ഉപയോഗിച്ച് ചെയ്യുക.', a: '$(5 \\times 20) + (5 \\times 3) = 100 + 15 = 115$.', kind: 'apply' },
      { q: 'വിതരണനിയമം ചിഹ്നങ്ങളിൽ എഴുതുക.', a: '$a(b + c) = ab + ac$.', kind: 'state' },
      { q: '8 × 99 എന്നത് 8(100 − 1) ആയി മനക്കണക്കായി ചെയ്യുക.', a: '$800 - 8 = 792$.', kind: 'apply' }
    ]
  },

  {
    id: 's.division',
    sec: 'p.2.4',
    tier: 'school',
    kind: 'technique',
    title_en: 'Division as Equal Sharing & Inverse of Multiplication',
    title_ml: 'ഹരണവും ശിഷ്ടവും',
    oneLine_en: 'Division splits a quantity into equal parts: a = bq + r.',
    oneLine_ml: 'തുല്യമായി വീതിക്കുന്ന ക്രിയയാണ് ഹരണം; $a = bq + r$ (ഭാജ്യകം $\\times$ ഹരണഫലം $+$ ശിഷ്ടം).',
    statement_en: `<p><b>Division</b> is the inverse of multiplication:</p>
      $$a \\div b = q \\quad \\text{with remainder } r, \\quad \\text{where } a = bq + r \\ (0 \\le r < b)$$
      <p>Division by zero is undefined.</p>`,
    statement_ml: `<p>ഗുണനത്തിന്റെ വിപരീതക്രിയയാണ് <b>ഹരണം</b>:</p>
      $$a = bq + r \\quad (0 \\le r < b)$$
      <p>ഇവിടെ $a$ ഭാജ്യവും, $b$ ഭാജ്യകവും, $q$ ഹരണഫലവും, $r$ ശിഷ്ടവുമാണ്. പൂജ്യം കൊണ്ടുള്ള ഹരണം അർത്ഥശൂന്യമാണ്.</p>`,
    intuition_en: `<p>Sharing $14$ apples equally among $3$ children gives $4$ apples each with $2$ remaining: $14 = (3 \\times 4) + 2$.</p>`,
    intuition_ml: `<p>14 മിഠായികൾ 3 കുട്ടികൾക്ക് തുല്യമായി വീതിച്ചാൽ ഓരോരുത്തർക്കും 4 വീതം കിട്ടും, 2 എണ്ണം ബാക്കി വരും: $14 = (3 \\times 4) + 2$.</p>`,
    needs: ['s.multiplication', 's.subtraction'],
    traps_en: ['Remainder must always be smaller than the divisor: r < b.'],
    traps_ml: ['ശിഷ്ടം എപ്പോഴും ഭാജ്യകത്തേക്കാൾ ചെറുതായിരിക്കണം: r < b.'],
    cards_en: [
      { q: 'Divide 29 by 4. State quotient and remainder.', a: 'Quotient = $7$, Remainder = $1$ ($29 = 4 \\times 7 + 1$).', kind: 'apply' },
      { q: 'Why is division by zero undefined?', a: 'No number multiplied by $0$ can equal a non-zero number.', kind: 'trap' },
      { q: 'If 48 ÷ 6 = 8, what is the related multiplication?', a: '$6 \\times 8 = 48$.', kind: 'state' }
    ],
    cards_ml: [
      { q: '29-നെ 4 കൊണ്ട് ഹരിച്ചാൽ ഹരണഫലവും ശിഷ്ടവും എത്ര?', a: 'ഹരണഫലം = $7$, ശിഷ്ടം = $1$ ($29 = 4 \\times 7 + 1$).', kind: 'apply' },
      { q: 'പൂജ്യം കൊണ്ടുള്ള ഹരണം സാധ്യമല്ലാത്തത് എന്തുകൊണ്ട്?', a: 'പൂജ്യത്തെ ഏതൊരു സംഖ്യകൊണ്ട് ഗുണിച്ചാലും പൂജ്യമേ ലഭിക്കൂ.', kind: 'trap' },
      { q: '48 ÷ 6 = 8 എന്നതിന്റെ ഗുണന രൂപം എഴുതുക.', a: '$6 \\times 8 = 48$.', kind: 'state' }
    ]
  },

  {
    id: 's.even-odd',
    sec: 'p.2.5',
    tier: 'school',
    kind: 'definition',
    title_en: 'Even and Odd Numbers',
    title_ml: 'ഇരട്ടസംഖ്യകളും ഒറ്റസംഖ്യകളും',
    oneLine_en: 'Even numbers are multiples of 2 (2k); odd numbers leave remainder 1 (2k + 1).',
    oneLine_ml: 'രണ്ടിന്റെ ഗുണിതങ്ങളാണ് ഇരട്ടസംഖ്യകൾ (2k); 2 കൊണ്ട് ഹരിക്കുമ്പോൾ 1 ശിഷ്ടം വരുന്നവ ഒറ്റസംഖ്യകൾ (2k + 1).',
    statement_en: `<p>An integer is <b>even</b> if divisible by $2$ ($n = 2k$). An integer is <b>odd</b> if not ($n = 2k + 1$).</p>
      <ul>
        <li>$\\text{Even} \\times \\text{Even} = \\text{Even}$</li>
        <li>$\\text{Odd} \\times \\text{Odd} = \\text{Odd}$</li>
        <li>The square of an even number is always even; the square of an odd number is always odd.</li>
      </ul>`,
    statement_ml: `<p>2 കൊണ്ട് നിശ്ശേഷം ഹരിക്കാവുന്ന സംഖ്യകളാണ് <b>ഇരട്ടസംഖ്യകൾ</b> ($2k$). 2 കൊണ്ട് ഹരിക്കുമ്പോൾ 1 ശിഷ്ടം വരുന്നവയാണ് <b>ഒറ്റസംഖ്യകൾ</b> ($2k + 1$).</p>
      <ul>
        <li>ഇരട്ടസംഖ്യയുടെ വർഗ്ഗം എപ്പോഴും ഇരട്ടസംഖ്യയായിരിക്കും.</li>
        <li>ഒറ്റസംഖ്യയുടെ വർഗ്ഗം എപ്പോഴും ഒറ്റസംഖ്യയായിരിക്കും.</li>
      </ul>`,
    intuition_en: `<p>Any even number pairs up completely with no items left over. Odd numbers always leave one unpaired item.</p>`,
    intuition_ml: `<p>ഇരട്ടസംഖ്യകളെ തുല്യമായ ജോടികളാക്കാൻ കഴിയും. ഒറ്റസംഖ്യകളിൽ ഒരു വസ്തു ജോടിയില്ലാതെ ബാക്കി വരും.</p>`,
    needs: ['s.division'],
    traps_en: ['Zero is an even number because 0 = 2 × 0.'],
    traps_ml: ['പൂജ്യം ഒരു ഇരട്ടസംഖ്യയാണ് (0 = 2 × 0).'],
    cards_en: [
      { q: 'Is the square of 17 odd or even?', a: 'Odd (since 17 is odd).', kind: 'apply' },
      { q: 'Is 0 even or odd?', a: 'Even.', kind: 'recall' },
      { q: 'What is the sum of two odd numbers?', a: 'Even (e.g. $3 + 5 = 8$).', kind: 'state' }
    ],
    cards_ml: [
      { q: '17-ന്റെ വർഗ്ഗം ഒറ്റസംഖ്യയാണോ ഇരട്ടസംഖ്യയാണോ?', a: 'ഒറ്റസംഖ്യ (17 ഒറ്റസംഖ്യയായതിനാൽ).', kind: 'apply' },
      { q: 'പൂജ്യം ഒറ്റസംഖ്യയാണോ ഇരട്ടസംഖ്യയാണോ?', a: 'ഇരട്ടസംഖ്യ.', kind: 'recall' },
      { q: 'രണ്ട് ഒറ്റസംഖ്യകളുടെ തുക എന്തായിരിക്കും?', a: 'ഇരട്ടസംഖ്യ (ഉദാഹരണത്തിന് $3 + 5 = 8$).', kind: 'state' }
    ]
  },

  /* ── CLASS 5: Grid Multiplication, Factors, Primes & Area ──────────── */
  {
    id: 's.factors-multiples',
    sec: 'p.3.1',
    tier: 'school',
    kind: 'definition',
    title_en: 'Factors, Multiples & Divisibility',
    title_ml: 'ഘടകങ്ങളും ഗുണിതങ്ങളും',
    oneLine_en: 'a is a factor of b if b = a × k; b is a multiple of a.',
    oneLine_ml: 'ഒരു സംഖ്യയെ നിശ്ശേഷം ഹരിക്കാൻ കഴിയുന്ന സംഖ്യകളാണ് അതിന്റെ ഘടകങ്ങൾ.',
    statement_en: `<p>If natural number $a$ divides $b$ with zero remainder, $a$ is a <b>factor</b> of $b$, and $b$ is a <b>multiple</b> of $a$.</p>`,
    statement_ml: `<p>ഒരു സംഖ്യയെ മറ്റൊരു സംഖ്യകൊണ്ട് ശിഷ്ടമില്ലാതെ ഹരിക്കാമെങ്കിൽ ആദ്യത്തെ സംഖ്യ രണ്ടാമത്തേതിന്റെ <b>ഗുണിതവും</b>, രണ്ടാമത്തേത് ആദ്യത്തേതിന്റെ <b>ഘടകവുമാണ്</b>.</p>`,
    intuition_en: `<p>Factors of $12$ are $1, 2, 3, 4, 6, 12$. Multiples of $12$ are $12, 24, 36, 48, \\dots$.</p>`,
    intuition_ml: `<p>12-ന്റെ ഘടകങ്ങൾ: $1, 2, 3, 4, 6, 12$. 12-ന്റെ ഗുണിതങ്ങൾ: $12, 24, 36, 48, \\dots$.</p>`,
    needs: ['s.multiplication', 's.division'],
    traps_en: ['Every number is both a factor and a multiple of itself.'],
    traps_ml: ['ഏതൊരു സംഖ്യയും അതിന്റെ തന്നെ ഘടകവും ഗുണിതവുമാണ്.'],
    cards_en: [
      { q: 'List all factors of 20.', a: '$1, 2, 4, 5, 10, 20$.', kind: 'apply' },
      { q: 'What is the smallest positive multiple of 7?', a: '$7$.', kind: 'state' },
      { q: 'Is 6 a factor of 42?', a: 'Yes ($42 = 6 \\times 7$).', kind: 'recall' }
    ],
    cards_ml: [
      { q: '20-ന്റെ എല്ലാ ഘടകങ്ങളും എഴുതുക.', a: '$1, 2, 4, 5, 10, 20$.', kind: 'apply' },
      { q: '7-ന്റെ ഏറ്റവും ചെറിയ ഗുണിതം ഏതാണ്?', a: '$7$.', kind: 'state' },
      { q: '6 എന്നത് 42-ന്റെ ഘടകമാണോ?', a: 'അതെ ($42 = 6 \\times 7$).', kind: 'recall' }
    ]
  },

  {
    id: 's.prime-composite',
    sec: 'p.3.2',
    tier: 'school',
    kind: 'definition',
    title_en: 'Prime Numbers & Prime Factorisation',
    title_ml: 'അഭാജ്യസംഖ്യകളും ഘടകക്രിയയും',
    oneLine_en: 'Primes have exactly two factors (1 and itself); numbers decompose uniquely into primes.',
    oneLine_ml: '1-ഉം ആ സംഖ്യയും മാത്രമായി രണ്ട് ഘടകങ്ങൾ മാത്രമുള്ള സംഖ്യകളാണ് അഭാജ്യസംഖ്യകൾ.',
    statement_en: `<p>A natural number $> 1$ with only $1$ and itself as factors is a <b>prime number</b> ($2, 3, 5, 7, 11, \\dots$). Numbers with more than two factors are <b>composite</b>.</p>
      <p><b>Square property:</b> In the prime factorisation of any perfect square, all exponents are <b>even</b>.</p>`,
    statement_ml: `<p>1-ഉം ആ സംഖ്യയും അല്ലാതെ മറ്റ് ഘടകങ്ങളില്ലാത്ത സംഖ്യകളാണ് <b>അഭാജ്യസംഖ്യകൾ</b> ($2, 3, 5, 7, 11, \\dots$). രണ്ടിൽക്കൂടുതൽ ഘടകങ്ങളുള്ളവ <b>ഭാജ്യസംഖ്യകൾ</b>.</p>
      <p><b>വർഗ്ഗത്തിന്റെ സവിശേഷത:</b> ഒരു പൂർണ്ണവർഗ്ഗത്തിന്റെ അഭാജ്യഘടകങ്ങളിൽ എല്ലാ കൃത്യങ്കങ്ങളും <b>ഇരട്ടസംഖ്യകൾ</b> ആയിരിക്കും.</p>`,
    intuition_en: `<p>Primes are the indivisible building blocks of all numbers: $36 = 2^2 \\times 3^2$.</p>`,
    intuition_ml: `<p>എല്ലാ സംഖ്യകളുടെയും അടിസ്ഥാന നിർമ്മാണക്കല്ലുകളാണ് അഭാജ്യസംഖ്യകൾ: $36 = 2^2 \\times 3^2$.</p>`,
    needs: ['s.factors-multiples'],
    traps_en: ['1 is neither prime nor composite.'],
    traps_ml: ['1 ഭാജ്യസംഖ്യയുമല്ല അഭാജ്യസംഖ്യയുമല്ല.'],
    cards_en: [
      { q: 'What is the only even prime number?', a: '$2$.', kind: 'recall' },
      { q: 'Find the prime factorisation of 36.', a: '$2^2 \\times 3^2$.', kind: 'apply' },
      { q: 'Why is 1 not prime?', a: 'A prime must have exactly two distinct factors; 1 has only one.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ഏക ഇരട്ട അഭാജ്യസംഖ്യ ഏതാണ്?', a: '$2$.', kind: 'recall' },
      { q: '36-ന്റെ അഭാജ്യ ഘടകക്രിയ എഴുതുക.', a: '$2^2 \\times 3^2$.', kind: 'apply' },
      { q: '1 അഭാജ്യസംഖ്യ അല്ലാത്തത് എന്തുകൊണ്ട്?', a: 'അഭാജ്യസംഖ്യയ്ക്ക് രണ്ട് വ്യത്യസ്ത ഘടകങ്ങൾ വേണം; 1-ന് ഒരു ഘടകം മാത്രമേയുള്ളൂ.', kind: 'trap' }
    ]
  },

  {
    id: 's.grid-mult',
    sec: 'p.3.3',
    tier: 'school',
    kind: 'technique',
    title_en: 'Rectangle & Grid Multiplication',
    title_ml: 'ചതുരഗുണനം',
    oneLine_en: 'Multiply multi-digit numbers by splitting into place values and summing cell areas.',
    oneLine_ml: 'സംഖ്യകളെ സ്ഥാനവിലകളായി വിഭജിച്ച് ചതുരക്കള്ളികളിൽ എഴുതി ഗുണിച്ച് തുക കാണുന്ന രീതി.',
    statement_en: `<p>In Class 5 <i>Multiplication Methods</i>, we multiply numbers using a grid of rectangle cells:</p>
      $$(10 + 2)(10 + 3) = 100 + 30 + 20 + 6 = 156$$`,
    statement_ml: `<p>ക്ലാസ് 5-ൽ പഠിച്ച ചതുരഗുണന രീതി:</p>
      $$(10 + 2)(10 + 3) = 100 + 30 + 20 + 6 = 156$$`,
    intuition_en: `<p>When multiplying a number by itself ($a = b$), the two cross-cells are equal ($ab$ and $ba$), adding to $2ab$. This gives $(a+b)^2 = a^2 + 2ab + b^2$.</p>`,
    intuition_ml: `<p>ഒരു സംഖ്യയെ അതേ സംഖ്യകൊണ്ട് ഗുണിക്കുമ്പോൾ രണ്ട് വശങ്ങളിലെ ചതുരങ്ങളുടെ വിസ്തീർണ്ണം തുല്യമായിരിക്കും ($ab + ab = 2ab$). ഇതാണ് $(a+b)^2 = a^2 + 2ab + b^2$ എന്ന സമവാക്യത്തിന് ആധാരം.</p>`,
    needs: ['s.distributive-law', 's.zero'],
    traps_en: ['Always add all four partial product cells.'],
    traps_ml: ['നാല് ചതുരക്കള്ളികളിലെയും തുക കൃത്യമായി കൂട്ടണം.'],
    cards_en: [
      { q: 'In grid multiplication of (20 + 1) × (20 + 1), what are the 4 cell values?', a: '$400, 20, 20, 1$.', kind: 'apply' },
      { q: 'What is the sum of the 4 cells for 21²?', a: '$400 + 20 + 20 + 1 = 441$.', kind: 'apply' },
      { q: 'Why are the two off-diagonal cells equal when squaring?', a: 'Both represent rectangles of area $a \\times b$.', kind: 'state' }
    ],
    cards_ml: [
      { q: '(20 + 1) × (20 + 1) ചതുരക്കള്ളികളിൽ വരുന്ന 4 സംഖ്യകൾ ഏവ?', a: '$400, 20, 20, 1$.', kind: 'apply' },
      { q: '21²-ന്റെ 4 കള്ളികളിലെയും തുക എത്ര?', a: '$400 + 20 + 20 + 1 = 441$.', kind: 'apply' },
      { q: 'വർഗ്ഗം കാണുമ്പോൾ എതിർവശങ്ങളിലെ രണ്ട് കള്ളികൾ തുല്യമാകുന്നത് എന്തുകൊണ്ട്?', a: 'രണ്ടും $a \\times b$ വിസ്തീർണ്ണമുള്ള ചതുരങ്ങളായതിനാൽ.', kind: 'state' }
    ]
  },

  {
    id: 's.area-rectangle',
    sec: 'p.3.4',
    tier: 'school',
    kind: 'definition',
    title_en: 'Area of Rectangle & Square',
    title_ml: 'ചതുരത്തിന്റെയും സമചതുരത്തിന്റെയും വിസ്തീർണ്ണം',
    oneLine_en: 'Area of rectangle = l × b; area of square = side × side = s².',
    oneLine_ml: 'ചതുരത്തിന്റെ വിസ്തീർണ്ണം = നീളം × വീതി; സമചതുരത്തിന്റെ വിസ്തീർണ്ണം = വശം × വശം = s².',
    statement_en: `<p><b>Area of rectangle:</b> $\\text{Area} = l \\times b$</p>
      <p><b>Area of square:</b> When length equals breadth ($l = b = s$):</p>
      $$\\text{Area} = s \\times s = s^2$$`,
    statement_ml: `<p><b>ചതുരത്തിന്റെ വിസ്തീർണ്ണം:</b> $\\text{നീളം} \\times \\text{വീതി}$ ($l \\times b$)</p>
      <p><b>സമചതുരത്തിന്റെ വിസ്തീർണ്ണം:</b> നീളവും വീതിയും തുല്യമായതിനാൽ ($s$):</p>
      $$\\text{വിസ്തീർണ്ണം} = s \\times s = s^2$$`,
    intuition_en: `<p>Area is the count of unit squares needed to tile the region. This is why multiplying a number by itself is called "squaring".</p>`,
    intuition_ml: `<p>ഒരു രൂപം ഉൾക്കൊള്ളുന്ന സ്ഥലത്തിന്റെ അളവാണ് വിസ്തീർണ്ണം. സമചതുരത്തിന്റെ വിസ്തീർണ്ണം കാണുന്നതുകൊണ്ടാണ് ഒരേ സംഖ്യകളെ തമ്മിൽ ഗുണിക്കുന്നതിനെ "വർഗ്ഗം" എന്ന് വിളിക്കുന്നത്.</p>`,
    needs: ['s.multiplication'],
    traps_en: ['Units of area are square units (cm², m²), not linear units (cm, m).'],
    traps_ml: ['വിസ്തീർണ്ണത്തിന്റെ യൂണിറ്റ് ചതുരശ്ര യൂണിറ്റ് (ചതുരശ്ര സെ.മീ, ചതുരശ്ര മീറ്റർ) ആണ്.'],
    cards_en: [
      { q: 'Find the area of a square of side 8 cm.', a: '$8 \\times 8 = 64\\text{ cm}^2$.', kind: 'apply' },
      { q: 'Formula for area of a square with side s.', a: '$s^2$.', kind: 'state' },
      { q: 'If area of a square is 36 sq m, what is its side?', a: '$6\\text{ m}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '8 സെ.മീ വശമുള്ള സമചതുരത്തിന്റെ വിസ്തീർണ്ണം എത്ര?', a: '$8 \\times 8 = 64\\text{ ചതുരശ്ര സെ.മീ}$.', kind: 'apply' },
      { q: 's വശമുള്ള സമചതുരത്തിന്റെ വിസ്തീർണ്ണ സമവാക്യം എന്താണ്?', a: '$s^2$.', kind: 'state' },
      { q: 'ഒരു സമചതുരത്തിന്റെ വിസ്തീർണ്ണം 36 ചതുരശ്ര മീറ്ററാണെങ്കിൽ വശം എത്ര?', a: '$6\\text{ മീറ്റർ}$.', kind: 'apply' }
    ]
  },

  /* ── CLASS 6: Fractions, Decimals & Integers ─────────────────────────── */
  {
    id: 's.fractions',
    sec: 'p.4.1',
    tier: 'school',
    kind: 'definition',
    title_en: 'Fractions as Parts of a Whole',
    title_ml: 'ഭിന്നസംഖ്യകൾ',
    oneLine_en: 'a/b represents a parts out of b equal parts of a whole.',
    oneLine_ml: 'ഒരു വസ്തുവിനെ തുല്യഭാഗങ്ങളാക്കി അതിൽ ചില ഭാഗങ്ങളെ സൂചിപ്പിക്കുന്നതാണ് ഭിന്നസംഖ്യ (a/b).',
    statement_en: `<p>A <b>fraction</b> $\\frac{a}{b}$ represents $a$ equal parts out of a total of $b$ parts ($b \\ne 0$). $a$ is the <b>numerator</b> and $b$ is the <b>denominator</b>.</p>`,
    statement_ml: `<p>ഒരു പൂർണ്ണവസ്തുവിനെ $b$ തുല്യഭാഗങ്ങളാക്കിയതിൽ $a$ ഭാഗങ്ങളെ സൂചിപ്പിക്കുന്ന സംഖ്യയാണ് <b>ഭിന്നസംഖ്യ</b> $\\frac{a}{b}$. $a$ എന്നത് <b>അംശവും</b>, $b$ എന്നത് <b>ഛേദവുമാണ്</b>.</p>`,
    intuition_en: `<p>Dividing a pizza into $4$ slices and taking $3$ slices is represented as $\\frac{3}{4}$.</p>`,
    intuition_ml: `<p>ഒരു ദോശയെ 4 തുല്യഭാഗങ്ങളാക്കി അതിൽ 3 ഭാഗം എടുത്താൽ അത് $\\frac{3}{4}$ ഭാഗമാണ്.</p>`,
    needs: ['s.division'],
    traps_en: ['Denominator cannot be zero.'],
    traps_ml: ['ഛേദം ഒരിക്കലും പൂജ്യമാകാൻ പാടില്ല.'],
    cards_en: [
      { q: 'In 5/8, identify numerator and denominator.', a: 'Numerator = $5$, Denominator = $8$.', kind: 'state' },
      { q: 'Simplify 12/16 to lowest terms.', a: '$\\frac{3}{4}$.', kind: 'apply' },
      { q: 'Is 7/1 a fraction representing 7?', a: 'Yes.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '5/8 എന്നതിൽ അംശവും ഛേദവും ഏവ?', a: 'അംശം = $5$, ഛേദം = $8$.', kind: 'state' },
      { q: '12/16-നെ ലഘൂകരിച്ച രൂപം എഴുതുക.', a: '$\\frac{3}{4}$.', kind: 'apply' },
      { q: '7/1 എന്നത് 7 തന്നെയാണോ?', a: 'അതെ.', kind: 'recall' }
    ]
  },

  {
    id: 's.fraction-ops',
    sec: 'p.4.2',
    tier: 'school',
    kind: 'technique',
    title_en: 'Fraction Operations & Squaring Fractions',
    title_ml: 'ഭിന്നസംഖ്യകളുടെ ക്രിയകളും വർഗ്ഗവും',
    oneLine_en: 'To square a fraction, square both numerator and denominator: (a/b)² = a²/b².',
    oneLine_ml: 'ഒരു ഭിന്നസംഖ്യയുടെ വർഗ്ഗം കാണാൻ അംശത്തിന്റെയും ഛേദത്തിന്റെയും വർഗ്ഗം കാണണം: (a/b)² = a²/b².',
    statement_en: `<p><b>Multiplication:</b> $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$</p>
      <p><b>Squaring:</b> $\\left(\\frac{a}{b}\\right)^2 = \\frac{a^2}{b^2}$</p>
      <p>For any proper fraction between $0$ and $1$, its square is strictly smaller than itself.</p>`,
    statement_ml: `<p><b>ഗുണനം:</b> $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$</p>
      <p><b>വർഗ്ഗം:</b> $\\left(\\frac{a}{b}\\right)^2 = \\frac{a^2}{b^2}$</p>
      <p>0-നും 1-നും ഇടയിലുള്ള ഏതൊരു ഭിന്നസംഖ്യയുടെയും വർഗ്ഗം ആ സംഖ്യയേക്കാൾ ചെറുതായിരിക്കും.</p>`,
    intuition_en: `<p>$(1/2)^2 = 1/4$. Half of a half is a quarter, which is smaller than half!</p>`,
    intuition_ml: `<p>$(1/2)^2 = 1/4$. പകുതിയുടെ പകുതി കാൽ ഭാഗമാണ്; അത് പകുതിയേക്കാൾ ചെറുതാണ്!</p>`,
    needs: ['s.fractions', 's.multiplication'],
    traps_en: ['When squaring a fraction less than 1, the result is smaller, not bigger.'],
    traps_ml: ['1-ൽ താഴെയുള്ള ഭിന്നസംഖ്യകളുടെ വർഗ്ഗം കാണുമ്പോൾ സംഖ്യ ചെറുതാകുകയാണ് ചെയ്യുന്നത്.'],
    cards_en: [
      { q: 'Calculate (2/5)²', a: '$\\frac{4}{25}$.', kind: 'apply' },
      { q: 'Is (1/3)² greater or smaller than 1/3?', a: 'Smaller ($1/9 < 1/3$).', kind: 'trap' },
      { q: 'Multiply 3/4 by 2/3.', a: '$\\frac{6}{12} = \\frac{1}{2}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '(2/5)² എത്ര?', a: '$\\frac{4}{25}$.', kind: 'apply' },
      { q: '(1/3)² എന്നത് 1/3 നേക്കാൾ വലുതാണോ ചെറുതാണോ?', a: 'ചെറുതാണ് ($1/9 < 1/3$).', kind: 'trap' },
      { q: '3/4-നെ 2/3 കൊണ്ട് ഗുണിച്ചാൽ എന്ത് കിട്ടും?', a: '$\\frac{6}{12} = \\frac{1}{2}$.', kind: 'apply' }
    ]
  },

  {
    id: 's.decimals',
    sec: 'p.4.3',
    tier: 'school',
    kind: 'definition',
    title_en: 'Decimals & Decimal Place Value',
    title_ml: 'ദശാംശരൂപങ്ങൾ',
    oneLine_en: 'Digits after the dot represent tenths (0.1), hundredths (0.01), thousandths...',
    oneLine_ml: 'ദശാംശബിന്ദുവിന് ശേഷമുള്ള സ്ഥാനങ്ങൾ പത്തിലൊന്ന് (0.1), നൂറിലൊന്ന് (0.01) എന്നിവയെ സൂചിപ്പിക്കുന്നു.',
    statement_en: `<p>A <b>decimal</b> represents fractions with powers of 10 in the denominator:</p>
      $$2.35 = 2 + \\frac{3}{10} + \\frac{5}{100} = \\frac{235}{100}$$`,
    statement_ml: `<p>ഛേദത്തിൽ 10-ന്റെ ഗുണിതങ്ങൾ വരുന്ന ഭിന്നസംഖ്യകളുടെ രൂപമാണ് <b>ദശാംശസംഖ്യകൾ</b>:</p>
      $$2.35 = 2 + \\frac{3}{10} + \\frac{5}{100} = \\frac{235}{100}$$`,
    intuition_en: `<p>Each step to the right of the decimal point divides the place value by 10.</p>`,
    intuition_ml: `<p>ദശാംശബിന്ദുവിന് വലത്തോട്ട് ഓരോ സ്ഥാനം നീങ്ങുമ്പോഴും സ്ഥാനവില പത്തിലൊന്നായി കുറയുന്നു.</p>`,
    needs: ['s.zero', 's.fractions'],
    traps_en: ['0.4 is equal to 0.40, and is greater than 0.39.'],
    traps_ml: ['0.4 ഉം 0.40 ഉം തുല്യമാണ്; അത് 0.39 നേക്കാൾ വലുതാണ്.'],
    cards_en: [
      { q: 'Write 3/100 as a decimal.', a: '$0.03$.', kind: 'apply' },
      { q: 'Convert 0.5 to a fraction in lowest terms.', a: '$\\frac{1}{2}$.', kind: 'recall' },
      { q: 'Which is larger: 0.7 or 0.68?', a: '$0.7$ (since $0.70 > 0.68$).', kind: 'trap' }
    ],
    cards_ml: [
      { q: '3/100-നെ ദശാംശരൂപത്തിൽ എഴുതുക.', a: '$0.03$.', kind: 'apply' },
      { q: '0.5 എന്നതിനെ ലളിതമായ ഭിന്നസംഖ്യയാക്കുക.', a: '$\\frac{1}{2}$.', kind: 'recall' },
      { q: '0.7 ഉം 0.68 ഉം ഏതാണ് വലുത്?', a: '$0.7$ ($0.70 > 0.68$ ആയതിനാൽ).', kind: 'trap' }
    ]
  },

  {
    id: 's.decimal-ops',
    sec: 'p.4.4',
    tier: 'school',
    kind: 'technique',
    title_en: 'Decimal Operations & Place Value Rules',
    title_ml: 'ദശാംശക്രിയകൾ',
    oneLine_en: 'When multiplying decimals, count total decimal digits to place the dot; squaring doubles them.',
    oneLine_ml: 'ദശാംശങ്ങൾ ഗുണിക്കുമ്പോൾ ആകെ ദശാംശസ്ഥാനങ്ങൾ കൂട്ടി ബിന്ദു ഇടണം; വർഗ്ഗം കാണുമ്പോൾ സ്ഥാനങ്ങൾ ഇരട്ടിയാകും.',
    statement_en: `<p>When squaring a decimal with $d$ decimal places, the result has exactly $2d$ decimal places:</p>
      $$(0.3)^2 = 0.09 \\quad (1 \\text{ place} \\to 2 \\text{ places})$$
      $$(0.04)^2 = 0.0016 \\quad (2 \\text{ places} \\to 4 \\text{ places})$$`,
    statement_ml: `<p>$d$ ദശാംശസ്ഥാനങ്ങളുള്ള ഒരു സംഖ്യയുടെ വർഗ്ഗം കാണുമ്പോൾ ഗുണനഫലത്തിൽ $2d$ ദശാംശസ്ഥാനങ്ങൾ ഉണ്ടാകും:</p>
      $$(0.3)^2 = 0.09 \\quad (1 \\text{ സ്ഥാനം} \\to 2 \\text{ സ്ഥാനങ്ങൾ})$$
      $$(0.04)^2 = 0.0016 \\quad (2 \\text{ സ്ഥാനങ്ങൾ} \\to 4 \\text{ സ്ഥാനങ്ങൾ})$$`,
    intuition_en: `<p>Converting to fractions shows why: $\\frac{3}{10} \\times \\frac{3}{10} = \\frac{9}{100} = 0.09$.</p>`,
    intuition_ml: `<p>ഭിന്നസംഖ്യാരൂപത്തിൽ നോക്കിയാൽ ഇത് വ്യക്തമാകും: $\\frac{3}{10} \\times \\frac{3}{10} = \\frac{9}{100} = 0.09$.</p>`,
    needs: ['s.decimals', 's.multiplication'],
    traps_en: ['0.3² is 0.09, NOT 0.9.'],
    traps_ml: ['0.3² എന്നാൽ 0.09 ആണ്, 0.9 അല്ല.'],
    cards_en: [
      { q: 'Calculate 0.5².', a: '$0.25$.', kind: 'apply' },
      { q: 'How many decimal digits are in (0.002)²?', a: '$3 \\times 2 = 6$ digits ($0.000004$).', kind: 'apply' },
      { q: 'Calculate 1.2².', a: '$1.44$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '0.5² എത്ര?', a: '$0.25$.', kind: 'apply' },
      { q: '(0.002)²-ൽ എത്ര ദശാംശസ്ഥാനങ്ങൾ ഉണ്ടാകും?', a: '$3 \\times 2 = 6$ സ്ഥാനങ്ങൾ ($0.000004$).', kind: 'apply' },
      { q: '1.2² എത്ര?', a: '$1.44$.', kind: 'apply' }
    ]
  },

  {
    id: 's.integers',
    sec: 'p.4.5',
    tier: 'school',
    kind: 'definition',
    title_en: 'Integers, Negative Numbers & Signs',
    title_ml: 'പൂർണ്ണസംഖ്യകളും ചിഹ്നനിയമങ്ങളും',
    oneLine_en: 'Integers include negatives, zero, and positives; squaring any non-zero integer gives a positive.',
    oneLine_ml: 'പൂർണ്ണസംഖ്യകളിൽ ഋണസംഖ്യകളും പൂജ്യവും ധനസംഖ്യകളും ഉൾപ്പെടുന്നു; ഏതൊരു സംഖ്യയുടെയും വർഗ്ഗം ധനസംഖ്യയാണ്.',
    statement_en: `<p><b>Integers</b> $\\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$.</p>
      <p><b>Sign rule for squares:</b> $(-a)^2 = (-a) \\times (-a) = +a^2$. The square of any real number is non-negative.</p>`,
    statement_ml: `<p><b>പൂർണ്ണസംഖ്യകൾ:</b> $\\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$.</p>
      <p><b>ചിഹ്നനിയമം:</b> $(-a)^2 = (-a) \\times (-a) = +a^2$. ഏതൊരു സംഖ്യയുടെയും വർഗ്ഗം എല്ലായ്പ്പോഴും ഒരു ധനസംഖ്യയായിരിക്കും.</p>`,
    intuition_en: `<p>Negative times negative is positive. Hence $(-5)^2 = 25$ and $(+5)^2 = 25$.</p>`,
    intuition_ml: `<p>രണ്ട് ഋണസംഖ്യകൾ ഗുണിച്ചാൽ ധനസംഖ്യ ലഭിക്കും. അതിനാൽ $(-5)^2 = 25$ ഉം $(+5)^2 = 25$ ഉം ആണ്.</p>`,
    needs: ['s.subtraction', 's.multiplication'],
    traps_en: ['−5² means −(5²) = −25, whereas (−5)² = +25.'],
    traps_ml: ['−5² എന്നാൽ −(5²) = −25 ആണ്, എന്നാൽ (−5)² = +25 ആണ്.'],
    cards_en: [
      { q: 'Calculate (−8)²', a: '$+64$.', kind: 'apply' },
      { q: 'Can the square of any real number be negative?', a: 'No, never.', kind: 'trap' },
      { q: 'What is (−1) × (−1)?', a: '$+1$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '(−8)² എത്ര?', a: '$+64$.', kind: 'apply' },
      { q: 'ഏതെങ്കിലും സംഖ്യയുടെ വർഗ്ഗം ഋണസംഖ്യയാകുമോ?', a: 'ഇല്ല, ഒരിക്കലും ആകില്ല.', kind: 'trap' },
      { q: '(−1) × (−1) എത്ര?', a: '$+1$.', kind: 'recall' }
    ]
  },

  /* ── CLASS 7: Powers, Algebra & Pythagoras ──────────────────────────── */
  {
    id: 's.powers-exponents',
    sec: 'p.5.1',
    tier: 'school',
    kind: 'definition',
    title_en: 'Powers & Repeated Multiplication (aⁿ)',
    title_ml: 'ആവർത്തനഗുണനവും ഘാതങ്ങളും',
    oneLine_en: 'aⁿ means the base a multiplied by itself n times (the exponent).',
    oneLine_ml: 'ഒരു സംഖ്യയെ വീണ്ടും വീണ്ടും ഗുണിക്കുന്നതിനെ ഘാതരൂപത്തിൽ aⁿ എന്ന് എഴുതുന്നു.',
    statement_en: `<p>In Class 7 <i>Repeated Multiplication</i>:</p>
      $$a^n = \\underbrace{a \\times a \\times \\dots \\times a}_{n \\text{ factors}}$$
      <p>$a$ is the <b>base</b> and $n$ is the <b>exponent</b>. When $n = 2$, it is the <b>square</b> ($a^2$).</p>`,
    statement_ml: `<p>ക്ലാസ് 7-ൽ പഠിച്ച ആവർത്തനഗുണനം:</p>
      $$a^n = \\underbrace{a \\times a \\times \\dots \\times a}_{n \\text{ തവണ}}$$
      <p>ഇവിടെ $a$ <b>പാദവും</b>, $n$ <b>കൃത്യങ്കവുമാണ്</b>. $n = 2$ ആകുമ്പോൾ അത് <b>വർഗ്ഗം</b> ($a^2$) ആകുന്നു.</p>`,
    intuition_en: `<p>$3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$. $10^2 = 10 \\times 10 = 100$.</p>`,
    intuition_ml: `<p>$3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$. $10^2 = 10 \\times 10 = 100$.</p>`,
    needs: ['s.multiplication'],
    traps_en: ['4² is 4 × 4 = 16, NOT 4 × 2 = 8.'],
    traps_ml: ['4² എന്നാൽ 4 × 4 = 16 ആണ്, 4 × 2 = 8 അല്ല.'],
    cards_en: [
      { q: 'In 7⁴, name the base and exponent.', a: 'Base = $7$, Exponent = $4$.', kind: 'state' },
      { q: 'Calculate 2³.', a: '$8$.', kind: 'apply' },
      { q: 'Is 5² equal to 5 × 2?', a: 'No, $5^2 = 25$ while $5 \\times 2 = 10$.', kind: 'trap' }
    ],
    cards_ml: [
      { q: '7⁴ എന്നതിൽ പാദവും കൃത്യങ്കവും ഏവ?', a: 'പാദം = $7$, കൃത്യങ്കം = $4$.', kind: 'state' },
      { q: '2³ എത്ര?', a: '$8$.', kind: 'apply' },
      { q: '5² എന്നത് 5 × 2-ന് തുല്യമാണോ?', a: 'അല്ല, $5^2 = 25$ ആണ്, എന്നാൽ $5 \\times 2 = 10$ ആണ്.', kind: 'trap' }
    ]
  },

  {
    id: 's.laws-of-exponents',
    sec: 'p.5.2',
    tier: 'school',
    kind: 'property',
    title_en: 'Laws of Exponents',
    title_ml: 'കൃത്യങ്കനിയമങ്ങൾ',
    oneLine_en: 'Product: aᵐ · aⁿ = aᵐ⁺ⁿ; Power of product: (ab)ⁿ = aⁿbⁿ.',
    oneLine_ml: 'ഗുണനനിയമം: aᵐ · aⁿ = aᵐ⁺ⁿ; ഗുണനഫലത്തിന്റെ കൃത്യങ്കം: (ab)ⁿ = aⁿbⁿ.',
    statement_en: `<p><b>Product of powers:</b> $a^m \\times a^n = a^{m+n}$</p>
      <p><b>Power of a product:</b> $(ab)^n = a^n b^n$</p>
      <p><b>Power of 10:</b> $(10a)^2 = 100a^2$.</p>`,
    statement_ml: `<p><b>കൃത്യങ്കഗുണനനിയമം:</b> $a^m \\times a^n = a^{m+n}$</p>
      <p><b>ഗുണനഫലത്തിന്റെ കൃത്യങ്കം:</b> $(ab)^n = a^n b^n$</p>
      <p><b>10-ന്റെ ഗുണിതങ്ങൾ:</b> $(10a)^2 = 100a^2$.</p>`,
    intuition_en: `<p>$(20)^2 = (2 \\times 10)^2 = 2^2 \\times 10^2 = 4 \\times 100 = 400$.</p>`,
    intuition_ml: `<p>$(20)^2 = (2 \\times 10)^2 = 2^2 \\times 10^2 = 4 \\times 100 = 400$.</p>`,
    needs: ['s.powers-exponents'],
    traps_en: ['(a + b)² is NOT equal to a² + b².'],
    traps_ml: ['(a + b)² എന്നത് a² + b² അല്ല; നടുവിലെ 2ab വിട്ടുപോകരുത്.'],
    cards_en: [
      { q: 'Calculate (3 × 10)²', a: '$9 \\times 100 = 900$.', kind: 'apply' },
      { q: 'Simplify 2³ × 2⁴.', a: '$2^{3+4} = 2^7 = 128$.', kind: 'apply' },
      { q: 'Does (ab)² equal a²b²?', a: 'Yes.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '(3 × 10)² കണക്കാക്കുക.', a: '$9 \\times 100 = 900$.', kind: 'apply' },
      { q: '2³ × 2⁴ ലഘൂകരിക്കുക.', a: '$2^{3+4} = 2^7 = 128$.', kind: 'apply' },
      { q: '(ab)² എന്നത് a²b²-ന് തുല്യമാണോ?', a: 'അതെ.', kind: 'recall' }
    ]
  },

  {
    id: 's.algebraic-terms',
    sec: 'p.5.3',
    tier: 'school',
    kind: 'definition',
    title_en: 'Algebraic Terms & Expressions',
    title_ml: 'ബീജഗണിതവാക്യങ്ങൾ',
    oneLine_en: 'Letters represent unknown or variable quantities in mathematical expressions.',
    oneLine_ml: 'സംഖ്യകൾക്ക് പകരം അക്ഷരങ്ങൾ ഉപയോഗിച്ച് പ്രസ്താവനകളെ ബീജഗണിതവാക്യങ്ങളായി എഴുതുന്നു.',
    statement_en: `<p>In algebra, letters ($x, y, a, b$) stand for numbers. $2x$ means $2 \\times x$; $ab$ means $a \\times b$.</p>`,
    statement_ml: `<p>ഗണിതത്തിലെ പൊതുനിയമങ്ങൾ എഴുതാൻ അക്ഷരങ്ങൾ ($x, y, a, b$) ഉപയോഗിക്കുന്നു. $2x$ എന്നാൽ $2 \\times x$; $ab$ എന്നാൽ $a \\times b$.</p>`,
    intuition_en: `<p>Instead of writing "side times side", we write $s \\times s = s^2$.</p>`,
    intuition_ml: `<p>"വശം ഗുണിക്കണം വശം" എന്ന് എഴുതുന്നതിന് പകരം ലളിതമായി $s \\times s = s^2$ എന്ന് എഴുതുന്നു.</p>`,
    needs: ['s.multiplication'],
    traps_en: ['ab means a × b, NOT a + b.'],
    traps_ml: ['ab എന്നാൽ a × b ആണ്, a + b അല്ല.'],
    cards_en: [
      { q: 'Evaluate 4x when x = 6.', a: '$4(6) = 24$.', kind: 'apply' },
      { q: 'What does 2ab mean?', a: '$2 \\times a \\times b$.', kind: 'state' },
      { q: 'What is x + x?', a: '$2x$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'x = 6 ആകുമ്പോൾ 4x-ന്റെ വില എത്ര?', a: '$4(6) = 24$.', kind: 'apply' },
      { q: '2ab എന്നാൽ എന്താണ് അർത്ഥമാക്കുന്നത്?', a: '$2 \\times a \\times b$.', kind: 'state' },
      { q: 'x + x എത്ര?', a: '$2x$.', kind: 'recall' }
    ]
  },

  {
    id: 's.expanding-brackets',
    sec: 'p.5.4',
    tier: 'school',
    kind: 'technique',
    title_en: 'Expanding Brackets & (a+b)²',
    title_ml: 'ഗുണനഫലവും (a+b)² സമവാക്യവും',
    oneLine_en: '(a + b)² = a² + 2ab + b²: square of a sum has three distinct terms.',
    oneLine_ml: '(a + b)² = a² + 2ab + b²: രണ്ട് സംഖ്യകളുടെ തുകയുടെ വർഗ്ഗം.',
    statement_en: `<p>Applying the distributive property twice gives the fundamental identity:</p>
      $$(a + b)^2 = (a + b)(a + b) = a^2 + 2ab + b^2$$`,
    statement_ml: `<p>വിതരണനിയമം ഉപയോഗിച്ച് തുകയുടെ വർഗ്ഗ സമവാക്യം കണ്ടെത്തുന്നു:</p>
      $$(a + b)^2 = (a + b)(a + b) = a^2 + 2ab + b^2$$`,
    intuition_en: `<p>The square splits into four areas: $a^2$, $b^2$, and two identical rectangles of area $ab$.</p>`,
    intuition_ml: `<p>ഒരു വലിയ സമചതുരത്തെ രണ്ട് ചെറിയ സമചതുരങ്ങളായും ($a^2, b^2$), രണ്ട് ചതുരങ്ങളായും ($ab, ab$) വിഭജിക്കാം.</p>`,
    needs: ['s.distributive-law', 's.area-rectangle', 's.algebraic-terms'],
    traps_en: ['Never omit the middle term 2ab: (a + b)² ≠ a² + b².'],
    traps_ml: ['നടുവിലെ 2ab ഒരിക്കലും വിട്ടുപോകരുത്: (a + b)² എന്നാൽ a² + b² അല്ല.'],
    cards_en: [
      { q: 'State the formula for (a + b)²', a: '$a^2 + 2ab + b^2$.', kind: 'state' },
      { q: 'Expand (10 + 3)²', a: '$10^2 + 2(10)(3) + 3^2 = 100 + 60 + 9 = 169$.', kind: 'apply' },
      { q: 'Why is there a factor of 2 in 2ab?', a: 'Because there are two identical rectangles of area $ab$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '(a + b)²-ന്റെ സമവാക്യം എഴുതുക.', a: '$a^2 + 2ab + b^2$.', kind: 'state' },
      { q: '(10 + 3)² സമവാക്യം ഉപയോഗിച്ച് വിപുലീകരിക്കുക.', a: '$10^2 + 2(10)(3) + 3^2 = 100 + 60 + 9 = 169$.', kind: 'apply' },
      { q: '2ab-ൽ 2 വരാൻ കാരണം എന്താണ്?', a: '$ab$ വിസ്തീർണ്ണമുള്ള രണ്ട് ചതുരങ്ങൾ ഉള്ളതുകൊണ്ട്.', kind: 'recall' }
    ]
  },

  {
    id: 's.pythagoras-theorem',
    sec: 'p.5.5',
    tier: 'school',
    kind: 'theorem',
    title_en: 'The Pythagorean Theorem (a² + b² = c²)',
    title_ml: 'പൈതഗോറസ് സിദ്ധാന്തം',
    oneLine_en: 'In a right triangle, hypotenuse² = base² + altitude².',
    oneLine_ml: 'ഒരു മട്ടത്രികോണത്തിൽ കർണ്ണത്തിന്റെ വർഗ്ഗം മറ്റ് രണ്ട് വശങ്ങളുടെ വർഗ്ഗങ്ങളുടെ തുകയ്ക്ക് തുല്യമാണ്.',
    statement_en: `<p>In a right-angled triangle with perpendicular legs $a, b$ and hypotenuse $c$:</p>
      $$a^2 + b^2 = c^2$$`,
    statement_ml: `<p>ലംബവശങ്ങൾ $a, b$-യും കർണ്ണം $c$-യുമായ ഒരു മട്ടത്രികോണത്തിൽ:</p>
      $$a^2 + b^2 = c^2$$
      $$\\text{കർണ്ണം}^2 = \\text{പാദം}^2 + \\text{ലംബം}^2$$`,
    intuition_en: `<p>The area of the square built on the hypotenuse equals the sum of the areas of the squares on the other two sides.</p>`,
    intuition_ml: `<p>കർണ്ണത്തിൽ വരയ്ക്കുന്ന സമചതുരത്തിന്റെ വിസ്തീർണ്ണം, മറ്റ് രണ്ട് വശങ്ങളിൽ വരയ്ക്കുന്ന സമചതുരങ്ങളുടെ വിസ്തീർണ്ണങ്ങളുടെ തുകയ്ക്ക് തുല്യമാണ്.</p>`,
    needs: ['s.area-rectangle', 's.expanding-brackets'],
    traps_en: ['Applies ONLY to right-angled triangles (90°).'],
    traps_ml: ['മട്ടത്രികോണങ്ങളിൽ (90°) മാത്രമേ പൈതഗോറസ് സിദ്ധാന്തം ബാധകമാകൂ.'],
    cards_en: [
      { q: 'If the legs of a right triangle are 3 and 4, find the hypotenuse.', a: '$c^2 = 3^2 + 4^2 = 9 + 16 = 25 \\implies c = 5$.', kind: 'apply' },
      { q: 'State the Pythagorean theorem.', a: 'In a right-angled triangle, $a^2 + b^2 = c^2$.', kind: 'state' },
      { q: 'Can Pythagoras theorem be used on equilateral triangles?', a: 'No, only right triangles.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ഒരു മട്ടത്രികോണത്തിന്റെ വശങ്ങൾ 3 ഉം 4 ഉം ആണെങ്കിൽ കർണ്ണം എത്ര?', a: '$c^2 = 3^2 + 4^2 = 9 + 16 = 25 \\implies c = 5$.', kind: 'apply' },
      { q: 'പൈതഗോറസ് സിദ്ധാന്തം പ്രസ്താവിക്കുക.', a: 'ഒരു മട്ടത്രികോണത്തിൽ $a^2 + b^2 = c^2$ (കർണ്ണത്തിന്റെ വർഗ്ഗം മറ്റ് രണ്ട് വശങ്ങളുടെ വർഗ്ഗങ്ങളുടെ തുകയ്ക്ക് തുല്യമാണ്).', kind: 'state' },
      { q: 'സമഭുജ ത്രികോണത്തിൽ പൈതഗോറസ് സിദ്ധാന്തം നേരിട്ട് പ്രയോഗിക്കാമോ?', a: 'ഇല്ല, മട്ടത്രികോണത്തിൽ മാത്രമേ പ്രയോഗിക്കാനാകൂ.', kind: 'trap' }
    ]
  }
);
