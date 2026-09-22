/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 7: Ratio (അംശബന്ധം)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm8.7.1.concept-of-ratio',
    sec: '8.7.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Concept of Ratio and Part-Whole Relations',
    title_ml: 'അംശബന്ധത്തിന്റെ അടിസ്ഥാന തത്വം',
    oneLine_en: 'A ratio a : b compares two quantities by division; if a quantity is split into parts a and b, the total parts are a + b.',
    oneLine_ml: 'രണ്ട് അളവുകളെ ഹരണത്തിലൂടെ താരതമ്യം ചെയ്യുന്നതാണ് അംശബന്ധം; ഒരു തുകയെ a, b ഭാഗങ്ങളാക്കിയാൽ ആകെ ഭാഗങ്ങൾ a + b ആണ്.',
    statement_en: `<p>A <b>ratio</b> is a mathematical comparison of two quantities of the same kind by division. The ratio of $a$ to $b$ is written as $a : b$ or $\\frac{a}{b}$ (where $b \\ne 0$).</p>
      <ul>
        <li><b>Equivalence and Scaling:</b> Multiplying or dividing both terms of a ratio by the same non-zero number does not change the ratio:
          $$a : b = ka : kb \\quad (k \\ne 0)$$</li>
        <li><b>Part-to-Part vs Part-to-Whole:</b> If two quantities are in the ratio $a : b$:
          <ul>
            <li>The total number of equal parts is $a + b$.</li>
            <li>The first quantity represents the fraction $\\frac{a}{a+b}$ of the total.</li>
            <li>The second quantity represents the fraction $\\frac{b}{a+b}$ of the total.</li>
          </ul></li>
        <li><b>Simplest Form:</b> A ratio $a : b$ is in its simplest form when $a$ and $b$ are integers with no common factor other than $1$ (coprime).</li>
      </ul>`,
    statement_ml: `<p>ഒരേ ഇനത്തിൽപ്പെട്ട രണ്ട് അളവുകളെ തമ്മിൽ ഹരണത്തിലൂടെ താരതമ്യം ചെയ്യുന്ന രീതിയാണ് <b>അംശബന്ധം</b>. $a$-യും $b$-യും തമ്മിലുള്ള അംശബന്ധത്തെ $a : b$ അല്ലെങ്കിൽ $\\frac{a}{b}$ ($b \\ne 0$) എന്ന് എഴുതുന്നു.</p>
      <ul>
        <li><b>തുല്യ അംശബന്ധങ്ങൾ:</b> ഒരു അംശബന്ധത്തിലെ രണ്ട് പദങ്ങളെയും ഒരേ പൂജ്യമല്ലാത്ത സംഖ്യ കൊണ്ട് ഗുണിച്ചാലോ ഹരിച്ചാലോ അംശബന്ധത്തിന്റെ മൂല്യം മാറില്ല:
          $$a : b = ka : kb \\quad (k \\ne 0)$$</li>
        <li><b>ഭാഗങ്ങളും ആകെത്തുകയും:</b> രണ്ട് അളവുകൾ $a : b$ എന്ന അംശബന്ധത്തിലാണെങ്കിൽ:
          <ul>
            <li>ആകെ തുല്യ ഭാഗങ്ങളുടെ എണ്ണം $a + b$ ആണ്.</li>
            <li>ഒന്നാമത്തെ അളവ് ആകെത്തുകയുടെ $\\frac{a}{a+b}$ ഭാഗമാണ്.</li>
            <li>രണ്ടാമത്തെ അളവ് ആകെത്തുകയുടെ $\\frac{b}{a+b}$ ഭാഗമാണ്.</li>
          </ul></li>
        <li><b>ലഘുരൂപം:</b> $a, b$ എന്നിവയ്ക്ക് $1$ അല്ലാതെ മറ്റ് പൊതുഘടകങ്ങൾ ഒന്നുമില്ലെങ്കിൽ ആ അംശബന്ധം അതിന്റെ ലളിതരൂപത്തിലാണെന്ന് പറയുന്നു.</li>
      </ul>`,
    intuition_en: `<p>If orange juice is mixed in the ratio $2 : 3$ with water, every 5 glasses of mixture contains exactly 2 glasses of juice and 3 glasses of water.</p>`,
    intuition_ml: `<p>ഒരു പാനീയത്തിൽ ഓറഞ്ച് നീരും വെള്ളവും $2 : 3$ എന്ന അംശബന്ധത്തിൽ ചേർത്താൽ, ലഭിക്കുന്ന ഓരോ 5 ഗ്ലാസ്സ് പാനീയത്തിലും 2 ഗ്ലാസ്സ് ഓറഞ്ച് നീരും 3 ഗ്ലാസ്സ് വെള്ളവും ഉണ്ടായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Represent each part by an unknown unit multiplier x.',
      idea_ml: 'ഓരോ ഭാഗത്തെയും x എന്ന പൊതുഗുണിതം കൊണ്ട് സൂചിപ്പിക്കുക.',
      why_en: 'If the quantities are ax and bx, their sum is (a+b)x and their ratio is ax/(bx) = a/b.',
      why_ml: 'അളവുകൾ ax, bx ആയാൽ തുക (a+b)x ഉം അംശബന്ധം ax/(bx) = a/b ഉം ആണ്.',
      rungs_en: [
        { why_en: 'Let each equal unit part be x.', m: 'x > 0' },
        { why_en: 'First quantity has a parts, so its measure is ax.', m: 'Q_1 = ax' },
        { why_en: 'Second quantity has b parts, so its measure is bx.', m: 'Q_2 = bx' },
        { why_en: 'The ratio is ax : bx = a : b.', m: '\\frac{ax}{bx} = \\frac{a}{b}' },
        { why_en: 'The total quantity is ax + bx = (a + b)x.', m: 'T = (a + b)x' }
      ],
      rungs_ml: [
        { why_ml: 'ഒരു തുല്യഭാഗത്തിന്റെ അളവ് x ആയിരിക്കട്ടെ.', m: 'x > 0' },
        { why_ml: 'ഒന്നാമത്തെ അളവിന് a ഭാഗങ്ങളുള്ളതിനാൽ അത് ax ആണ്.', m: 'Q_1 = ax' },
        { why_ml: 'രണ്ടാമത്തെ അളവിന് b ഭാഗങ്ങളുള്ളതിനാൽ അത് bx ആണ്.', m: 'Q_2 = bx' },
        { why_ml: 'ഇവ തമ്മിലുള്ള അംശബന്ധം ax : bx = a : b ആണ്.', m: '\\frac{ax}{bx} = \\frac{a}{b}' },
        { why_ml: 'ആകെ തുക ax + bx = (a + b)x ആണ്.', m: 'T = (a + b)x' }
      ]
    },
    needs: [],
    traps_en: [
      'A ratio compares quantities in the SAME units (e.g., to find ratio of 50 paise to ₹2, first convert ₹2 to 200 paise: 50 : 200 = 1 : 4).',
      'A ratio a : b is pure number without physical units.'
    ],
    traps_ml: [
      'അംശബന്ധം കാണുമ്പോൾ രണ്ട് അളവുകളും ഒരേ യൂണിറ്റിലായിരിക്കണം (ഉദാ: 50 പൈസയും ₹2 രൂപയും തമ്മിലുള്ള അംശബന്ധം കാണാൻ ₹2-നെ 200 പൈസയാക്കി മാറ്റണം: 50 : 200 = 1 : 4).',
      'അംശബന്ധത്തിന് പ്രത്യേക യൂണിറ്റുകളില്ല, അതൊരു സംഖ്യ മാത്രമാണ്.'
    ],
    cards_en: [
      { q: 'What is the ratio of 500 mL to 2 L?', a: '$500\\text{ mL} : 2000\\text{ mL} = 1 : 4$.', kind: 'apply' },
      { q: 'If the ratio of boys to girls is 3 : 5, what fraction of the class are boys?', a: '$\\frac{3}{3 + 5} = \\frac{3}{8}$.', kind: 'state' },
      { q: 'Does multiplying both terms of a ratio by a negative number keep it the same ratio in arithmetic?', a: 'No, in school arithmetic ratio multipliers must be positive.', kind: 'trap' }
    ],
    cards_ml: [
      { q: '500 mL ഉം 2 L ഉം തമ്മിലുള്ള അംശബന്ധം എത്രയാണ്?', a: '$500\\text{ mL} : 2000\\text{ mL} = 1 : 4$.', kind: 'apply' },
      { q: 'ഒരു ക്ലാസിലെ ആൺകുട്ടികളും പെൺകുട്ടികളും തമ്മിലുള്ള അംശബന്ധം 3 : 5 ആണെങ്കിൽ ആൺകുട്ടികൾ ആകെ കുട്ടികളുടെ എത്ര ഭാഗമാണ്?', a: '$\\frac{3}{3 + 5} = \\frac{3}{8}$ ഭാഗം.', kind: 'state' },
      { q: 'അംശബന്ധം കാണുമ്പോൾ രണ്ട് അളവുകളുടെയും യൂണിറ്റുകൾ തുല്യമായിരിക്കണമെന്നുണ്ടോ?', a: 'അതെ, രണ്ടും ഒരേ യൂണിറ്റിലേക്ക് മാറ്റിയ ശേഷം മാത്രമേ അംശബന്ധം കാണാവൂ.', kind: 'trap' }
    ]
  },

  {
    id: 'm8.7.2.dividing-in-ratio',
    sec: '8.7.2',
    kind: 'technique',
    tier: 'core',
    title_en: 'Dividing Quantities in a Given Ratio',
    title_ml: 'തുകയെ അംശബന്ധത്തിൽ വിഭജിക്കൽ',
    oneLine_en: 'To divide total T in the ratio a : b, find the value of one part T/(a+b) and multiply by each ratio term.',
    oneLine_ml: 'ആകെ തുകയായ T-യെ a : b എന്ന അംശബന്ധത്തിൽ വിഭജിക്കാൻ, ഒരു ഭാഗത്തിന്റെ വില T/(a+b) കണ്ട് ഓരോ പദം കൊണ്ടും ഗുണിക്കുക.',
    statement_en: `<p>To divide a given total quantity $T$ into parts in the ratio $a : b$:</p>
      <ol>
        <li>Find the total number of parts: $n = a + b$.</li>
        <li>Calculate the value of one single part:
          $$\\text{Value of 1 part} = \\frac{T}{a + b}$$</li>
        <li>Multiply by the respective ratio terms:
          $$\\text{First share} = a \\times \\frac{T}{a + b}$$
          $$\\text{Second share} = b \\times \\frac{T}{a + b}$$</li>
      </ol>
      <p><b>Generalisation for three quantities ($a : b : c$):</b><br>
      Total parts $= a + b + c$. The shares are $a \\times \\frac{T}{a+b+c}$, $b \\times \\frac{T}{a+b+c}$, and $c \\times \\frac{T}{a+b+c}$.</p>`,
    statement_ml: `<p>നൽകിയിരിക്കുന്ന ഒരു ആകെ തുക $T$-യെ $a : b$ എന്ന അംശബന്ധത്തിൽ വിഭജിക്കുന്ന രീതി:</p>
      <ol>
        <li>ആകെ ഭാഗങ്ങളുടെ എണ്ണം കാണുക: $n = a + b$.</li>
        <li>ഒരു ഭാഗത്തിന്റെ വില കണ്ടെത്തുക:
          $$\\text{ഒരു ഭാഗം} = \\frac{T}{a + b}$$</li>
        <li>ഓരോരുത്തർക്കുമുള്ള വിഹിതം കണക്കാക്കുക:
          $$\\text{ഒന്നാം വിഹിതം} = a \\times \\frac{T}{a + b}$$
          $$\\text{രണ്ടാം വിഹിതം} = b \\times \\frac{T}{a + b}$$</li>
      </ol>
      <p><b>മൂന്ന് അളവുകൾ വരുമ്പോൾ ($a : b : c$):</b><br>
      ആകെ ഭാഗങ്ങൾ $= a + b + c$. വിഹിതങ്ങൾ യഥാക്രമം $a \\times \\frac{T}{a+b+c}$, $b \\times \\frac{T}{a+b+c}$, $c \\times \\frac{T}{a+b+c}$ എന്നിവയായിരിക്കും.</p>`,
    intuition_en: `<p>Think of cutting a long ribbon into $a + b$ equal pieces, and handing $a$ pieces to one person and $b$ pieces to the other.</p>`,
    intuition_ml: `<p>ഒരു കയറിനെ തുല്യമായ $a + b$ കഷണങ്ങളാക്കി മുറിച്ച്, അതിൽ $a$ കഷണങ്ങൾ ഒരാൾക്കും $b$ കഷണങ്ങൾ മറ്റൊരാൾക്കും നൽകുന്നതായി സങ്കൽപ്പിക്കുക.</p>`,
    needs: ['m8.7.1.concept-of-ratio'],
    traps_en: [
      'Always verify that the sum of the calculated shares equals the original total quantity T.',
      'Do not confuse the ratio of shares with the difference between shares.'
    ],
    traps_ml: [
      'കണക്കുകൂട്ടിയ ശേഷം ലഭിച്ച വിഹിതങ്ങളുടെ തുക ചോദ്യത്തിലെ ആകെ തുകയ്ക്ക് തുല്യമാണോ എന്ന് കൂട്ടിനോക്കുക.',
      'അംശബന്ധവും വിഹിതങ്ങൾ തമ്മിലുള്ള വ്യത്യാസവും തമ്മിൽ ആശയക്കുഴപ്പമുണ്ടാകരുത്.'
    ],
    cards_en: [
      { q: 'Divide ₹1,200 in the ratio 2 : 3.', a: 'Total parts $= 5$. One part $= ₹240$. Shares are $2 \\times 240 = ₹480$ and $3 \\times 240 = ₹720$.', kind: 'apply' },
      { q: 'If ₹1,000 is divided in the ratio 1 : 2 : 7, what is the largest share?', a: 'Total parts $= 10$. Largest share $= 7 \\times \\frac{1000}{10} = ₹700$.', kind: 'apply' },
      { q: 'In a division of ratio a : b, what represents one part?', a: '$\\frac{\\text{Total}}{a + b}$.', kind: 'state' }
    ],
    cards_ml: [
      { q: '₹1,200 രൂപയെ 2 : 3 എന്ന അംശബന്ധത്തിൽ വിഭജിക്കുക.', a: 'ആകെ ഭാഗം $= 5$. ഒരു ഭാഗം $= ₹240$. വിഹിതങ്ങൾ $2 \\times 240 = ₹480$, $3 \\times 240 = ₹720$.', kind: 'apply' },
      { q: '₹1,000 രൂപയെ 1 : 2 : 7 എന്ന അംശബന്ധത്തിൽ വിഭജിച്ചാൽ ഏറ്റവും വലിയ വിഹിതം എത്ര?', a: 'ആകെ ഭാഗം $= 10$. വലിയ വിഹിതം $= 7 \\times \\frac{1000}{10} = ₹700$.', kind: 'apply' },
      { q: 'a : b അംശബന്ധ വിഭജനത്തിൽ ഒരു ഭാഗത്തിന്റെ അളവ് എങ്ങനെ കാണാം?', a: '$\\frac{\\text{ആകെ തുക}}{a + b}$.', kind: 'state' }
    ]
  },

  {
    id: 'm8.7.3.ratio-change',
    sec: '8.7.3',
    kind: 'technique',
    tier: 'core',
    title_en: 'Changing Quantities and Unknown Parts',
    title_ml: 'അംശബന്ധത്തിലെ മാറ്റങ്ങളും അജ്ഞാതഭാഗങ്ങളും',
    oneLine_en: 'Represent parts as ax and bx; when quantities are added or removed, set up an algebraic equation to find the multiplier x.',
    oneLine_ml: 'അളവുകളെ ax, bx എന്ന് രേഖപ്പെടുത്തി, കൂട്ടലോ കുറയ്ക്കലോ നടക്കുമ്പോൾ ബീജഗണിത സമവാക്യം രൂപീകരിച്ച് x കണ്ടെത്തുക.',
    statement_en: `<p>When problems involve additions, removals, or differences between parts in a ratio:</p>
      <ol>
        <li>Let the common multiplier be $x$. The initial quantities are $ax$ and $bx$.</li>
        <li><b>Difference between parts:</b> If one share exceeds the other by $D$:
          $$bx - ax = D \\implies (b - a)x = D \\implies x = \\frac{D}{b - a}$$</li>
        <li><b>Change in quantities:</b> If an amount $k$ is added to the first quantity, the new ratio becomes $c : d$:
          $$\\frac{ax + k}{bx} = \\frac{c}{d} \\implies d(ax + k) = c(bx)$$
          Solve for $x$ and then compute the required original or new quantities.</li>
      </ol>`,
    statement_ml: `<p>അംശബന്ധത്തിൽ മാറ്റങ്ങൾ (കൂട്ടൽ, കുറയ്ക്കൽ, വ്യത്യാസം) വരുമ്പോഴുള്ള കണക്കുകൾ ചെയ്യുന്ന രീതി:</p>
      <ol>
        <li>പൊതുഗുണിതം $x$ എന്ന് കരുതുക. അപ്പോൾ അളവുകൾ $ax, bx$ ആകുന്നു.</li>
        <li><b>വിഹിതങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം:</b> രണ്ട് വിഹിതങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം $D$ ആണെങ്കിൽ:
          $$bx - ax = D \\implies (b - a)x = D \\implies x = \\frac{D}{b - a}$$</li>
        <li><b>അളവിലെ മാറ്റം:</b> ആദ്യ അളവിനോട് $k$ കൂട്ടുമ്പോൾ പുതിയ അംശബന്ധം $c : d$ ആകുന്നുവെങ്കിൽ:
          $$\\frac{ax + k}{bx} = \\frac{c}{d} \\implies d(ax + k) = c(bx)$$
          ഇതിൽ നിന്ന് $x$-ന്റെ വില കണ്ട് യഥാർത്ഥ അളവുകൾ കണ്ടെത്താം.</li>
      </ol>`,
    intuition_en: `<p>The multiplier $x$ represents the actual size of one "part". Once $x$ is known from the equation, every quantity in the problem is immediately unlocked.</p>`,
    intuition_ml: `<p>ഒരു ഭാഗത്തിന്റെ യഥാർത്ഥ അളവാണ് $x$. സമവാക്യം പരിഹരിച്ച് $x$ കണ്ടെത്തിയാൽ എല്ലാ അളവുകളും എളുപ്പത്തിൽ കണക്കാക്കാം.</p>`,
    needs: ['m8.7.1.concept-of-ratio', 'm8.7.2.dividing-in-ratio'],
    traps_en: [
      'Do not set (a + k) : b equal to the new ratio; the addition is made to the ACTUAL quantity ax, not to the ratio number a.',
      'Check if the question asks for the ORIGINAL quantity or the NEW quantity after the change.'
    ],
    traps_ml: [
      'അംശബന്ധ സംഖ്യയോടല്ല മാറ്റം കൂട്ടേണ്ടത്, യഥാർത്ഥ അളവായ $ax$-നോടാണ് $k$ കൂട്ടേണ്ടത്.',
      'ചോദ്യത്തിൽ ചോദിച്ചിരിക്കുന്നത് ആദ്യത്തെ അളവാണോ അതോ മാറ്റത്തിന് ശേഷമുള്ള അളവാണോ എന്ന് ശ്രദ്ധിക്കുക.'
    ],
    cards_en: [
      { q: 'Two numbers are in the ratio 5 : 3. Their difference is 18. What are the numbers?', a: 'Difference in parts $= 5 - 3 = 2$. $2x = 18 \\implies x = 9$. Numbers are $5(9) = 45$ and $3(9) = 27$.', kind: 'apply' },
      { q: 'The ratio of ages of A and B is 4 : 3. If A is 24 years old, what is B\'s age?', a: '$4x = 24 \\implies x = 6$. $B = 3(6) = 18\\text{ years}$.', kind: 'apply' },
      { q: 'Why must an algebraic variable x be used when adding quantities to a ratio?', a: 'Because the ratio only gives relative proportions, not the absolute amounts.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'രണ്ട് സംഖ്യകൾ തമ്മിലുള്ള അംശബന്ധം 5 : 3 ഉം അവ തമ്മിലുള്ള വ്യത്യാസം 18 ഉം ആണ്. സംഖ്യകൾ ഏതെല്ലാം?', a: 'ഭാഗങ്ങളിലെ വ്യത്യാസം $= 5 - 3 = 2$. $2x = 18 \\implies x = 9$. സംഖ്യകൾ $5 \\times 9 = 45$, $3 \\times 9 = 27$.', kind: 'apply' },
      { q: 'A, B എന്നിവരുടെ വയസ്സുകൾ തമ്മിലുള്ള അംശബന്ധം 4 : 3 ആണ്. A-യുടെ വയസ്സ് 24 ആണെങ്കിൽ B-യുടെ വയസ്സ് എത്ര?', a: '$4x = 24 \\implies x = 6$. B-യുടെ വയസ്സ് $= 3 \\times 6 = 18$.', kind: 'apply' },
      { q: 'അംശബന്ധ കണക്കുകളിൽ x എന്ന പൊതുഗുണിതം ഉപയോഗിക്കുന്നത് എന്തുകൊണ്ട്?', a: 'അംശബന്ധം യഥാർത്ഥ അളവിനെയല്ല, അളവുകൾ തമ്മിലുള്ള താരതമ്യത്തെ മാത്രമാണ് സൂചിപ്പിക്കുന്നത് എന്നതുകൊണ്ട്.', kind: 'recall' }
    ]
  },

  {
    id: 'm8.7.4.ratio-geometry',
    sec: '8.7.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Ratio in Geometry (Perimeter, Angles and Area)',
    title_ml: 'ജ്യാമിതിയിലെ അംശബന്ധം (ചുറ്റളവ്, കോണുകൾ, പരപ്പളവ്)',
    oneLine_en: 'Ratios govern triangle angles (sum = 180°), rectangle perimeters (2(l+b)), and triangle areas sharing the same height (A₁:A₂ = b₁:b₂).',
    oneLine_ml: 'ത്രികോണ കോണുകളിലും (തുക = 180°), ചുറ്റളവിലും, ഒരേ ഉയരമുള്ള ത്രികോണങ്ങളുടെ പരപ്പളവിലും (A₁:A₂ = b₁:b₂) അംശബന്ധം പ്രയോഗിക്കുന്നു.',
    statement_en: `<p>Ratio appears extensively in geometric figures:</p>
      <ul>
        <li><b>Angles of a Triangle:</b> If the angles are in the ratio $a : b : c$, their sum is $180^\\circ$:
          $$ax + bx + cx = 180^\\circ \\implies (a + b + c)x = 180^\\circ \\implies x = \\frac{180^\\circ}{a + b + c}$$</li>
        <li><b>Rectangle Dimensions and Perimeter:</b> If length and breadth are in ratio $l : b$ with perimeter $P$:
          $$2(lx + bx) = P \\implies 2(l + b)x = P \\implies x = \\frac{P}{2(l + b)}$$</li>
        <li><b>Theorem on Areas of Triangles with Same Height:</b>
          <p>If two triangles have the same height $h$ and their bases are $b_1$ and $b_2$, the ratio of their areas is equal to the ratio of their bases:
          $$\\frac{\\text{Area}_1}{\\text{Area}_2} = \\frac{\\frac{1}{2} b_1 h}{\\frac{1}{2} b_2 h} = \\frac{b_1}{b_2}$$</p>
          <p>A line segment from a vertex dividing the opposite base in ratio $m : n$ divides the triangle into two triangles whose areas are in the ratio $m : n$.</p></li>
      </ul>`,
    statement_ml: `<p>ജ്യാമിതീയ രൂപങ്ങളിലെ അംശബന്ധ പ്രയോഗങ്ങൾ:</p>
      <ul>
        <li><b>ത്രികോണത്തിലെ കോണുകൾ:</b> കോണുകൾ $a : b : c$ എന്ന അംശബന്ധത്തിലാണെങ്കിൽ അവയുടെ തുക $180^\\circ$ ആണ്:
          $$(a + b + c)x = 180^\\circ \\implies x = \\frac{180^\\circ}{a + b + c}$$</li>
        <li><b>ചതുരത്തിന്റെ ചുറ്റളവും വശങ്ങളും:</b> നീളവും വീതിയും $l : b$ അംശബന്ധത്തിലും ചുറ്റളവ് $P$ ഉം ആയാൽ:
          $$2(lx + bx) = P \\implies 2(l + b)x = P \\implies x = \\frac{P}{2(l + b)}$$</li>
        <li><b>ഒരേ ഉയരമുള്ള ത്രികോണങ്ങളുടെ പരപ്പളവ് സിദ്ധാന്തം:</b>
          <p>ഒരേ ഉയരം ($h$) ഉള്ള രണ്ട് ത്രികോണങ്ങളുടെ പാദങ്ങൾ $b_1, b_2$ ആയാൽ, അവയുടെ പരപ്പളവുകൾ തമ്മിലുള്ള അംശബന്ധം പാദങ്ങൾ തമ്മിലുള്ള അംശബന്ധത്തിന് തുല്യമായിരിക്കും:
          $$\\frac{\\text{പരപ്പളവ്}_1}{\\text{പരപ്പളവ്}_2} = \\frac{\\frac{1}{2} b_1 h}{\\frac{1}{2} b_2 h} = \\frac{b_1}{b_2}$$</p>
          <p>ഒരു മൂലയിൽ നിന്നും എതിർവശത്തെ $m : n$ എന്ന അംശബന്ധത്തിൽ ഭാഗിക്കുന്ന രേഖ, ആ ത്രികോണത്തെ $m : n$ എന്ന അംശബന്ധത്തിലുള്ള രണ്ട് പരപ്പളവുകളായി വിഭജിക്കുന്നു.</p></li>
      </ul>`,
    intuition_en: `<p>Triangles between the same two parallel lines have the same height; their areas grow in direct proportion to how wide their bases are.</p>`,
    intuition_ml: `<p>രണ്ട് സമാന്തര വരകൾക്കിടയിലുള്ള ത്രികോണങ്ങൾക്ക് ഒരേ ഉയരമായിരിക്കും; അതിനാൽ അവയുടെ പരപ്പളവ് പാദത്തിന്റെ നീളത്തിന് ആനുപാതികമായിരിക്കും.</p>`,
    needs: ['m8.7.1.concept-of-ratio', 'm8.7.2.dividing-in-ratio'],
    traps_en: [
      'The area ratio equals the base ratio ONLY when the heights of the two triangles are equal.',
      'Remember that perimeter of a rectangle is 2(l + b), not l + b.'
    ],
    traps_ml: [
      'രണ്ട് ത്രികോണങ്ങളുടെ ഉയരങ്ങൾ തുല്യമാകുമ്പോൾ മാത്രമേ പരപ്പളവുകളുടെ അംശബന്ധം പാദങ്ങളുടെ അംശബന്ധത്തിന് തുല്യമാകൂ.',
      'ചതുരത്തിന്റെ ചുറ്റളവ് $2(l + b)$ ആണ്, $l + b$ അല്ല.'
    ],
    cards_en: [
      { q: 'The angles of a triangle are in the ratio 2 : 3 : 4. Find the smallest angle.', a: 'Total parts $= 2 + 3 + 4 = 9$. One part $= \\frac{180^\\circ}{9} = 20^\\circ$. Smallest angle $= 2(20^\\circ) = 40^\\circ$.', kind: 'apply' },
      { q: 'A line divides the base of a triangle of area 60 cm² in the ratio 2 : 3. What are the areas of the two parts?', a: 'Total parts $= 5$. Areas are $2 \\times \\frac{60}{5} = 24\\text{ cm}^2$ and $3 \\times \\frac{60}{5} = 36\\text{ cm}^2$.', kind: 'apply' },
      { q: 'What is the relation between the areas of two triangles having the same height?', a: 'Their areas are in the same ratio as the lengths of their bases.', kind: 'state' }
    ],
    cards_ml: [
      { q: 'ഒരു ത്രികോണത്തിലെ കോണുകൾ 2 : 3 : 4 എന്ന അംശബന്ധത്തിലാണ്. ഏറ്റവും ചെറിയ കോൺ എത്ര?', a: 'ആകെ ഭാഗം $= 9$. ഒരു ഭാഗം $= \\frac{180^\\circ}{9} = 20^\\circ$. ചെറിയ കോൺ $= 2 \\times 20^\\circ = 40^\\circ$.', kind: 'apply' },
      { q: 'പരപ്പളവ് 60 cm² ആയ ഒരു ത്രികോണത്തിന്റെ പാദത്തെ 2 : 3 എന്ന അംശബന്ധത്തിൽ വിഭജിച്ചാൽ ലഭിക്കുന്ന രണ്ട് ത്രികോണങ്ങളുടെ പരപ്പളവ് എത്ര?', a: 'ആകെ ഭാഗം $= 5$. പരപ്പളവുകൾ $2 \\times 12 = 24\\text{ cm}^2$, $3 \\times 12 = 36\\text{ cm}^2$.', kind: 'apply' },
      { q: 'ഒരേ ഉയരമുള്ള രണ്ട് ത്രികോണങ്ങളുടെ പരപ്പളവുകൾ തമ്മിലുള്ള ബന്ധം എന്താണ്?', a: 'അവയുടെ പരപ്പളവുകളുടെ അംശബന്ധം പാദങ്ങളുടെ നീളങ്ങളുടെ അംശബന്ധത്തിന് തുല്യമായിരിക്കും.', kind: 'state' }
    ]
  }
);
