/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 9: Negative Numbers (ഋണസംഖ്യകൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm8.9.1.negative-numbers-concept',
    sec: '8.9.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Negative Numbers & The Number Line',
    title_ml: 'ഋണസംഖ്യകളും സംഖ്യാരേഖയും',
    oneLine_en: 'Numbers less than zero indicate opposite directions, deficits, or temperatures below freezing; for positive x < y, x - y = -(y - x).',
    oneLine_ml: 'പൂജ്യത്തേക്കാൾ ചെറിയ സംഖ്യകൾ എതിർദിശ, കമ്മികൾ, പൂജ്യത്തിന് താഴെയുള്ള താപനില എന്നിവയെ സൂചിപ്പിക്കുന്നു; x < y ആയാൽ x - y = -(y - x).',
    statement_en: `<p>In practical life, we often encounter quantities that go in opposite directions from a fixed starting point ($0$):</p>
      <ul>
        <li>Temperatures below freezing point: $-5^\\circ\\text{C}, -12^\\circ\\text{C}$.</li>
        <li>Depths below sea level: $-50\\text{ m}$.</li>
        <li>Financial losses or debts compared to cash in hand.</li>
      </ul>
      <p>On the <b>number line</b>, positive numbers lie to the right of $0$, and <b>negative numbers</b> lie to the left of $0$ as mirror reflections.</p>
      <p><b>Fundamental Rule:</b> When a smaller positive number $x$ has a larger positive number $y$ subtracted from it:</p>
      $$x - y = -(y - x)$$
      <p>For example, $3 - 7 = -(7 - 3) = -4$.</p>`,
    statement_ml: `<p>നിത്യജീവിതത്തിൽ ഒരു നിശ്ചിത ബിന്ദുവിൽ ($0$) നിന്ന് ഇരുവശങ്ങളിലേക്കും സഞ്ചരിക്കേണ്ട സാഹചര്യങ്ങൾ ഉണ്ടാകാറുണ്ട്:</p>
      <ul>
        <li>പൂജ്യത്തിന് താഴെയുള്ള താപനില: $-5^\\circ\\text{C}, -12^\\circ\\text{C}$.</li>
        <li>സമുദ്രനിരപ്പിൽ നിന്നുമുള്ള ആഴം: $-50\\text{ മീറ്റർ}$.</li>
        <li>ലാഭത്തിന് എതിരായ നഷ്ടം അല്ലെങ്കിൽ കടം.</li>
      </ul>
      <p><b>സംഖ്യാരേഖയിൽ</b> പൂജ്യത്തിന്റെ വലതുവശത്ത് അധിസംഖ്യകളും, ഇടതുവശത്ത് <b>ഋണസംഖ്യകളും</b> അടയാളപ്പെടുത്തുന്നു.</p>
      <p><b>അടിസ്ഥാന നിയമം:</b> ചെറിയ സംഖ്യയായ $x$-ൽ നിന്ന് വലിയ സംഖ്യയായ $y$ കുറയ്ക്കുമ്പോൾ:</p>
      $$x - y = -(y - x)$$
      <p>ഉദാഹരണമായി, $3 - 7 = -(7 - 3) = -4$.</p>`,
    intuition_en: `<p>Think of walking on a line: moving right is forward ($+$) and moving left is backward ($-$). If you take 3 steps forward and 7 steps backward, you end up 4 steps behind the starting mark ($-4$).</p>`,
    intuition_ml: `<p>സംഖ്യാരേഖയിലൂടെയുള്ള നടത്തമായി ഇതിനെ കാണാം: വലത്തോട്ട് മുന്നോട്ടും ($+$), ഇടത്തോട്ട് പിന്നോട്ടും ($-$). 3 ചുവട് മുന്നോട്ട് വെച്ച ശേഷം 7 ചുവട് പിന്നോട്ട് നടന്നാൽ നിങ്ങൾ തുടങ്ങിയ സ്ഥലത്തിന് 4 ചുവട് പിന്നിലായിരിക്കും ($-4$).</p>`,
    proof: {
      idea_en: 'Subtracting a larger number is decomposing into reaching zero, then continuing in the negative direction.',
      idea_ml: 'വലിയ സംഖ്യ കുറയ്ക്കുമ്പോൾ ആദ്യം പൂജ്യത്തിലെത്തുകയും ബാക്കി എതിർദിശയിലേക്ക് നീങ്ങുകയും ചെയ്യുന്നു.',
      why_en: 'Split y into x + (y - x).',
      why_ml: 'y-നെ x + (y - x) എന്ന് ഭാഗിക്കുക.',
      rungs_en: [
        { why_en: 'Express the larger number y as x + (y - x).', m: 'y = x + (y - x)' },
        { why_en: 'Subtract y from x.', m: 'x - y = x - [x + (y - x)]' },
        { why_en: 'Cancel x - x to leave the negative remainder.', m: 'x - y = -(y - x)' }
      ],
      rungs_ml: [
        { why_ml: 'വലിയ സംഖ്യ y-നെ x + (y - x) എന്ന് എഴുതാം.', m: 'y = x + (y - x)' },
        { why_ml: 'x-ൽ നിന്ന് y കുറയ്ക്കുക.', m: 'x - y = x - [x + (y - x)]' },
        { why_ml: 'x - x പൂജ്യമാകുമ്പോൾ ബാക്കി ലഭിക്കുന്നത് -(y - x) ആണ്.', m: 'x - y = -(y - x)' }
      ]
    },
    needs: ['p.4.5'],
    traps_en: [
      'Remember that for negative numbers, a larger numerical magnitude means a smaller value: -10 < -2.',
      '0 is neither positive nor negative; it is the neutral boundary.'
    ],
    traps_ml: [
      'ഋണസംഖ്യകളിൽ അക്കവില കൂടുന്തോറും യഥാർത്ഥ വില കുറയുന്നു: -10 < -2.',
      'പൂജ്യം അധിസംഖ്യയോ ന്യൂനസംഖ്യയോ അല്ല; അത് ഇവ തമ്മിലുള്ള അതിർത്തിയാണ്.'
    ],
    cards_en: [
      { q: 'What is 5 - 12?', a: '$5 - 12 = -(12 - 5) = \\mathbf{-7}$.', kind: 'apply' },
      { q: 'Which is greater: -8 or -3?', a: '$\\mathbf{-3}$ is greater because it lies further to the right on the number line.', kind: 'recall' },
      { q: 'If temperature drops from 4°C by 9°C, what is the new temperature?', a: '$4 - 9 = \\mathbf{-5^\\circ\\text{C}}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '5 - 12 എത്രയാണ്?', a: '$5 - 12 = -(12 - 5) = \\mathbf{-7}$.', kind: 'apply' },
      { q: '-8, -3 എന്നിവയിൽ ഏതാണ് വലിയ സംഖ്യ?', a: 'സംഖ്യാരേഖയിൽ കൂടുതൽ വലതുവശത്തുള്ള $\\mathbf{-3}$ ആണ് വലിയ സംഖ്യ.', kind: 'recall' },
      { q: 'താപനില 4°C-ൽ നിന്ന് 9°C കുറഞ്ഞാൽ പുതിയ താപനില എത്ര?', a: '$4 - 9 = \\mathbf{-5^\\circ\\text{C}}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.9.2.addition-of-negatives',
    sec: '8.9.2',
    kind: 'rule',
    tier: 'core',
    title_en: 'Addition Involving Negative Numbers',
    title_ml: 'ന്യൂനസംഖ്യകളുടെ സങ്കലനം (കൂട്ടൽ)',
    oneLine_en: 'Adding a negative number is equivalent to subtracting its positive value: x + (-y) = x - y; adding two negatives gives -(x + y).',
    oneLine_ml: 'ഒരു ന്യൂനസംഖ്യ കൂട്ടുക എന്നാൽ അതിന്റെ അധിസംഖ്യ കുറയ്ക്കുക എന്നാണ്: x + (-y) = x - y; രണ്ട് ന്യൂനസംഖ്യകൾ കൂട്ടിയാൽ -(x + y).',
    statement_en: `<p>Addition of positive and negative numbers follows straightforward direction rules:</p>
      <ul>
        <li><b>Adding a negative to a positive:</b> Adding a debt or negative step reduces value.
          $$x + (-y) = x - y$$
          Example: $8 + (-5) = 8 - 5 = 3$.<br>
          Example: $4 + (-9) = 4 - 9 = -5$.
        </li>
        <li><b>Adding two negative numbers:</b> Combining two negative movements increases the total distance to the left.
          $$(-x) + (-y) = -(x + y)$$
          Example: $(-6) + (-4) = -(6 + 4) = -10$.
        </li>
      </ul>
      <p><b>Commutative Property:</b> For any numbers $x$ and $y$, $x + y = y + x$. Thus, $(-x) + y = y + (-x) = y - x$.</p>`,
    statement_ml: `<p>അധിസംഖ്യകളും ന്യൂനസംഖ്യകളും തമ്മിൽ കൂട്ടുന്നതിന് ലളിതമായ നിയമങ്ങളുണ്ട്:</p>
      <ul>
        <li><b>അധിസംഖ്യയും ന്യൂനസംഖ്യയും കൂട്ടൽ:</b> ഒരു സംഖ്യയോട് ന്യൂനസംഖ്യ കൂട്ടുക എന്നാൽ അതിന്റെ അധിസംഖ്യ കുറയ്ക്കുക എന്നാണ്.
          $$x + (-y) = x - y$$
          ഉദാഹരണം: $8 + (-5) = 8 - 5 = 3$.<br>
          ഉദാഹരണം: $4 + (-9) = 4 - 9 = -5$.
        </li>
        <li><b>രണ്ട് ന്യൂനസംഖ്യകൾ കൂട്ടൽ:</b> രണ്ട് ന്യൂനസംഖ്യകൾ കൂട്ടിയാൽ തുക കൂടുതൽ ഇടത്തോട്ട് പോകും.
          $$(-x) + (-y) = -(x + y)$$
          ഉദാഹരണം: $(-6) + (-4) = -(6 + 4) = -10$.
        </li>
      </ul>
      <p><b>ക്രമീകരണ നിയമം:</b> ഏതൊരു $x, y$ സംഖ്യകൾക്കും $x + y = y + x$ ആണ്. അതിനാൽ $(-x) + y = y - x$.</p>`,
    intuition_en: `<p>Adding a negative is like paying off an obligation with cash; your net balance drops by that exact amount.</p>`,
    intuition_ml: `<p>കയ്യിലുള്ള പണത്തിൽ നിന്ന് കടം കൊടുത്തുതീർക്കുന്നതുപോലെയാണ് ന്യൂനസംഖ്യ കൂട്ടുന്നത്; അത്രയും തുക കയ്യിൽ നിന്ന് കുറയുന്നു.</p>`,
    proof: {
      idea_en: 'Vectors or steps in the negative direction combine additively.',
      idea_ml: 'ഇടത്തോട്ടുള്ള ചുവടുകൾ പരസ്പരം കൂടിച്ചേർന്ന് ആകെ ഇടത്തോട്ടുള്ള അകലമാകുന്നു.',
      why_en: 'Two leftward displacements sum to a total leftward displacement.',
      why_ml: 'ഇടത്തോട്ടുള്ള രണ്ട് സഞ്ചാരങ്ങളുടെ തുക ആകെ ഇടത്തോട്ടുള്ള സ്ഥാനമാണ്.',
      rungs_en: [
        { why_en: 'Start at -x and move y units further left.', m: '(-x) + (-y) = -(x) - y' },
        { why_en: 'Factor out the negative sign.', m: '-(x + y)' }
      ],
      rungs_ml: [
        { why_ml: '-x ൽ നിന്ന് വീണ്ടും y യൂണിറ്റ് ഇടത്തോട്ട് നീങ്ങുന്നു.', m: '(-x) + (-y) = -(x) - y' },
        { why_ml: 'നെഗറ്റീവ് ചിഹ്നം പുറത്തെടുക്കുക.', m: '-(x + y)' }
      ]
    },
    needs: ['m8.9.1.negative-numbers-concept'],
    traps_en: [
      'Do not confuse (-5) + (-3) = -8 with multiplication: adding two negatives gives a NEGATIVE, not a positive!',
      'When signs differ, subtract the smaller magnitude from the larger and keep the sign of the larger.'
    ],
    traps_ml: [
      '(-5) + (-3) = -8 എന്നത് ഗുണനവുമായി തെറ്റിദ്ധരിക്കരുത്: രണ്ട് ന്യൂനസംഖ്യകൾ കൂട്ടിയാൽ ന്യൂനസംഖ്യ തന്നെയാണ് ലഭിക്കുന്നത്!',
      'ചിഹ്നങ്ങൾ വ്യത്യസ്തമാണെങ്കിൽ വലിയ സംഖ്യയിൽ നിന്ന് ചെറിയ സംഖ്യ കുറച്ച് വലിയ സംഖ്യയുടെ ചിഹ്നം നൽകുക.'
    ],
    cards_en: [
      { q: 'Evaluate: (-14) + (-8)', a: '$-(14 + 8) = \\mathbf{-22}$.', kind: 'apply' },
      { q: 'Evaluate: (-20) + 35', a: '$35 - 20 = \\mathbf{15}$.', kind: 'apply' },
      { q: 'Evaluate: 12 + (-17)', a: '$12 - 17 = -(17 - 12) = \\mathbf{-5}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'വില കാണുക: (-14) + (-8)', a: '$-(14 + 8) = \\mathbf{-22}$.', kind: 'apply' },
      { q: 'വില കാണുക: (-20) + 35', a: '$35 - 20 = \\mathbf{15}$.', kind: 'apply' },
      { q: 'വില കാണുക: 12 + (-17)', a: '$12 - 17 = -(17 - 12) = \\mathbf{-5}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.9.3.subtraction-of-negatives',
    sec: '8.9.3',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Subtraction Involving Negative Numbers',
    title_ml: 'ന്യൂനസംഖ്യകളുടെ വ്യവകലനം (കുറയ്ക്കൽ)',
    oneLine_en: 'Subtracting a negative number is the same as adding its positive opposite: x - (-y) = x + y.',
    oneLine_ml: 'ഒരു ന്യൂനസംഖ്യ കുറയ്ക്കുക എന്നാൽ അതിന്റെ അധിസംഖ്യ കൂട്ടുന്നതിന് തുല്യമാണ്: x - (-y) = x + y.',
    statement_en: `<p>In arithmetic, subtraction is the inverse of addition: $a - b = c \\iff c + b = a$.</p>
      <p>Applying this definition to negative numbers:</p>
      $$x - (-y) = x + y$$
      <p><b>Rule:</b> Subtracting a negative number is identical to adding its positive counterpart.</p>
      <ul>
        <li>$7 - (-5) = 7 + 5 = 12$</li>
        <li>$(-15) - (-8) = -15 + 8 = -7$</li>
        <li>$(-4) - 9 = -4 - 9 = -(4 + 9) = -13$</li>
      </ul>`,
    statement_ml: `<p>ഗണിതത്തിൽ കുറയ്ക്കൽ എന്നത് കൂട്ടലിന്റെ വിപരീതക്രിയയാണ്: $a - b = c \\iff c + b = a$.</p>
      <p>ഈ തത്വം ന്യൂനസംഖ്യകളിൽ പ്രയോഗിക്കുമ്പോൾ:</p>
      $$x - (-y) = x + y$$
      <p><b>നിയമം:</b> ഒരു ന്യൂനസംഖ്യ കുറയ്ക്കുക എന്നാൽ അതിന്റെ അധിസംഖ്യ കൂട്ടുന്നതിന് തുല്യമാണ്.</p>
      <ul>
        <li>$7 - (-5) = 7 + 5 = 12$</li>
        <li>$(-15) - (-8) = -15 + 8 = -7$</li>
        <li>$(-4) - 9 = -4 - 9 = -(4 + 9) = -13$</li>
      </ul>`,
    intuition_en: `<p>Removing a debt is the same as receiving cash! If someone cancels your ₹5 deficit ($-(-5)$), your net worth increases by $+5$.</p>`,
    intuition_ml: `<p>ഒരാളുടെ കടം ഇല്ലാതാക്കുന്നത് അയാൾക്ക് പണം കൊടുക്കുന്നതിന് തുല്യമാണ്! ഒരാൾ നിങ്ങളുടെ ₹5-ന്റെ കടം ഒഴിവാക്കിയാൽ ($-(-5)$) നിങ്ങളുടെ കയ്യിലെ തുക ₹5 കൂടുന്നു.</p>`,
    proof: {
      idea_en: 'Check that (x + y) + (-y) recovers x using the inverse definition of subtraction.',
      idea_ml: 'കുറയ്ക്കലിന്റെ വിപരീത നിർവ്വചനപ്രകാരം (x + y) + (-y) എന്നത് x ആകുന്നുണ്ടോ എന്ന് പരിശോധിക്കുക.',
      why_en: 'By definition, a - b = d means d + b = a.',
      why_ml: 'നിർവ്വചനപ്രകാരം a - b = d എന്നാൽ d + b = a ആണ്.',
      rungs_en: [
        { why_en: 'Let d = x + y.', m: 'd = x + y' },
        { why_en: 'Add (-y) to d.', m: 'd + (-y) = (x + y) + (-y) = x + [y + (-y)] = x + 0 = x' },
        { why_en: 'Since d + (-y) = x, by inverse definition x - (-y) = d.', m: 'x - (-y) = x + y' }
      ],
      rungs_ml: [
        { why_ml: 'd = x + y എന്നിരിക്കട്ടെ.', m: 'd = x + y' },
        { why_ml: 'd-യോട് (-y) കൂട്ടുക.', m: 'd + (-y) = (x + y) + (-y) = x + 0 = x' },
        { why_ml: 'അതിനാൽ വിപരീത നിർവ്വചനപ്രകാരം x - (-y) = x + y ആയിരിക്കും.', m: 'x - (-y) = x + y' }
      ]
    },
    needs: ['m8.9.2.addition-of-negatives'],
    traps_en: [
      'Two consecutive minus signs combine into a plus: -(-a) = +a.',
      'In (-7) - (-12), note that -12 becomes +12: -7 + 12 = +5, not -19!'
    ],
    traps_ml: [
      'തൊട്ടടുത്ത് വരുന്ന രണ്ട് ന്യൂനചിഹ്നങ്ങൾ സങ്കലന ചിഹ്നമായി (+) മാറും: -(-a) = +a.',
      '(-7) - (-12) എന്നതിൽ -(-12) എന്നത് +12 ആകുന്നു: -7 + 12 = +5 (ഇത് -19 അല്ല).'
    ],
    cards_en: [
      { q: 'Evaluate: 18 - (-7)', a: '$18 + 7 = \\mathbf{25}$.', kind: 'apply' },
      { q: 'Evaluate: (-12) - (-20)', a: '$-12 + 20 = \\mathbf{8}$.', kind: 'apply' },
      { q: 'Evaluate: (-9) - 15', a: '$-9 - 15 = -(9 + 15) = \\mathbf{-24}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'വില കാണുക: 18 - (-7)', a: '$18 + 7 = \\mathbf{25}$.', kind: 'apply' },
      { q: 'വില കാണുക: (-12) - (-20)', a: '$-12 + 20 = \\mathbf{8}$.', kind: 'apply' },
      { q: 'വില കാണുക: (-9) - 15', a: '$-9 - 15 = -(9 + 15) = \\mathbf{-24}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.9.4.multiplication-division-negatives',
    sec: '8.9.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Multiplication & Division of Negative Numbers',
    title_ml: 'ന്യൂനസംഖ്യകളുടെ ഗുണനവും ഹരണവും',
    oneLine_en: 'Like signs yield a positive product/quotient; unlike signs yield a negative product/quotient: (-a)*(-b) = ab, a*(-b) = -(ab).',
    oneLine_ml: 'ഒരേ ചിഹ്നമുള്ള സംഖ്യകളുടെ ഗുണനഫലം അധിസംഖ്യയും, വ്യത്യസ്ത ചിഹ്നങ്ങളുള്ളവയുടെ ഗുണനഫലം ന്യൂനസംഖ്യയുമാണ്: (-a)*(-b) = ab, a*(-b) = -(ab).',
    statement_en: `<p>The rules of signs for multiplication and division are universal:</p>
      <ul>
        <li><b>Positive $\\times$ Negative = Negative:</b>
          $$a \\times (-b) = -(a \\times b)$$
          Example: $4 \\times (-6) = -24$.
        </li>
        <li><b>Negative $\\times$ Positive = Negative:</b>
          $$(-a) \\times b = -(a \\times b)$$
          Example: $(-7) \\times 5 = -35$.
        </li>
        <li><b>Negative $\\times$ Negative = Positive:</b>
          $$(-a) \\times (-b) = a \\times b$$
          Example: $(-8) \\times (-3) = +24$.
        </li>
      </ul>
      <p><b>Division Rules:</b> Since division is inverse multiplication, identical sign rules apply:</p>
      $$\\frac{-a}{b} = \\frac{a}{-b} = -\\frac{a}{b}, \\qquad \\frac{-a}{-b} = \\frac{a}{b}$$`,
    statement_ml: `<p>ഗുണനത്തിലും ഹരണത്തിലും ചിഹ്നങ്ങളുടെ നിയമങ്ങൾ താഴെ പറയുന്നവയാണ്:</p>
      <ul>
        <li><b>അധിസംഖ്യ $\\times$ ന്യൂനസംഖ്യ = ന്യൂനസംഖ്യ:</b>
          $$a \\times (-b) = -(a \\times b)$$
          ഉദാഹരണം: $4 \\times (-6) = -24$.
        </li>
        <li><b>ന്യൂനസംഖ്യ $\\times$ അധിസംഖ്യ = ന്യൂനസംഖ്യ:</b>
          $$(-a) \\times b = -(a \\times b)$$
          ഉദാഹരണം: $(-7) \\times 5 = -35$.
        </li>
        <li><b>ന്യൂനസംഖ്യ $\\times$ ന്യൂനസംഖ്യ = അധിസംഖ്യ:</b>
          $$(-a) \\times (-b) = a \\times b$$
          ഉദാഹരണം: $(-8) \\times (-3) = +24$.
        </li>
      </ul>
      <p><b>ഹരണ നിയമങ്ങൾ:</b> ഹരണത്തിലും ഇതേ ചിഹ്നനിയമങ്ങൾ ബാധകമാണ്:</p>
      $$\\frac{-a}{b} = \\frac{a}{-b} = -\\frac{a}{b}, \\qquad \\frac{-a}{-b} = \\frac{a}{b}$$`,
    intuition_en: `<p>Reversing direction once makes you go backward ($-$). Reversing direction twice brings you facing forward again ($+$)!</p>`,
    intuition_ml: `<p>ഒരു തവണ ദിശ തിരിച്ചാൽ പിന്നോട്ട് സഞ്ചരിക്കുന്നു ($-$). വീണ്ടും ഒരിക്കൽക്കൂടി ദിശ തിരിച്ചാൽ പഴയതുപോലെ മുന്നോട്ട് തന്നെയായി ($+$)!</p>`,
    proof: {
      idea_en: 'Distributive property requires (-a)*(-b) = ab so that a*(b + (-b)) = 0 holds.',
      idea_ml: 'വിതരണനിയമപ്രകാരം a*(b + (-b)) = 0 ശരിയാകണമെങ്കിൽ (-a)*(-b) = ab ആകണം.',
      why_en: 'The distributive law must remain consistent for all numbers.',
      why_ml: 'എല്ലാ സംഖ്യകൾക്കും വിതരണനിയമം ബാധകമായിരിക്കണം.',
      rungs_en: [
        { why_en: 'Start with the identity (-a) * [b + (-b)].', m: '(-a) \\times [b + (-b)] = (-a) \\times 0 = 0' },
        { why_en: 'Distribute (-a) across the sum.', m: '(-a) \\times b + (-a) \\times (-b) = 0' },
        { why_en: 'Since (-a)*b = -(ab), substitute -(ab).', m: '-(ab) + (-a) \\times (-b) = 0' },
        { why_en: 'Add ab to both sides.', m: '(-a) \\times (-b) = ab' }
      ],
      rungs_ml: [
        { why_ml: '(-a) * [b + (-b)] എന്ന വാക്യം എടുക്കുക.', m: '(-a) \\times [b + (-b)] = (-a) \\times 0 = 0' },
        { why_ml: 'വിതരണനിയമം ഉപയോഗിച്ച് വികസിപ്പിക്കുക.', m: '(-a) \\times b + (-a) \\times (-b) = 0' },
        { why_ml: '(-a)*b = -(ab) ആയതിനാൽ വില നൽകുക.', m: '-(ab) + (-a) \\times (-b) = 0' },
        { why_ml: 'ഇരുവശത്തും ab കൂട്ടിയാൽ ഫലം ലഭിക്കുന്നു.', m: '(-a) \\times (-b) = ab' }
      ]
    },
    needs: ['m8.9.2.addition-of-negatives', 'm8.9.3.subtraction-of-negatives'],
    traps_en: [
      'Even number of negative factors gives POSITIVE product; odd number gives NEGATIVE product.',
      '(-3)² = (-3) * (-3) = +9, but -3² = -(3 * 3) = -9. Watch the brackets!'
    ],
    traps_ml: [
      'ഇരട്ട എണ്ണം ന്യൂനസംഖ്യകൾ ഗുണിച്ചാൽ അധിസംഖ്യയും, ഒറ്റ എണ്ണം ഗുണിച്ചാൽ ന്യൂനസംഖ്യയും ലഭിക്കും.',
      '(-3)² = +9 ആണ്, എന്നാൽ -3² = -9 ആണ്. ബ്രാക്കറ്റുകൾ ശ്രദ്ധിക്കുക!'
    ],
    cards_en: [
      { q: 'Calculate: (-6) * (-7)', a: '$(-6) \\times (-7) = \\mathbf{+42}$.', kind: 'apply' },
      { q: 'Calculate: (-48) / 6', a: '$\\frac{-48}{6} = \\mathbf{-8}$.', kind: 'apply' },
      { q: 'What is (-2) * (-3) * (-4)?', a: 'Three negative signs (odd count) $\\implies -(2 \\times 3 \\times 4) = \\mathbf{-24}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'കണക്കാക്കുക: (-6) * (-7)', a: '$(-6) \\times (-7) = \\mathbf{+42}$.', kind: 'apply' },
      { q: 'കണക്കാക്കുക: (-48) / 6', a: '$\\frac{-48}{6} = \\mathbf{-8}$.', kind: 'apply' },
      { q: '(-2) * (-3) * (-4) എത്രയാണ്?', a: 'മൂന്ന് ന്യൂനസംഖ്യകൾ (ഒറ്റ എണ്ണം) $\\implies -(2 \\times 3 \\times 4) = \\mathbf{-24}$.', kind: 'apply' }
    ]
  }
);
