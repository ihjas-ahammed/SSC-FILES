/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 4: New Numbers (പുതിയ സംഖ്യകൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm9.4.1.diagonal-of-square-and-sqrt2',
    sec: '9.4.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Diagonal of a Unit Square and the Discovery of √2',
    title_ml: 'സമചതുരത്തിന്റെ വികർണ്ണവും √2 എന്ന പുതിയ സംഖ്യയും',
    oneLine_en: 'The diagonal of a square of side 1 has length √2; no fraction p/q has square equal to 2, proving that lengths exist which cannot be expressed as fractions.',
    oneLine_ml: 'വശം 1 ആയ സമചതുരത്തിന്റെ വികർണ്ണത്തിന്റെ നീളം √2 ആണ്; വർഗ്ഗം 2 ആകുന്ന ഭിന്നസംഖ്യകൾ ഇല്ലെന്നത് ഭിന്നസംഖ്യകളല്ലാത്ത പുതിയ സംഖ്യകളുടെ ആവശ്യകത തെളിയിക്കുന്നു.',
    statement_en: `<p>Consider a square of side $1\\text{ unit}$. By the Pythagorean Theorem, the length of its diagonal $d$ satisfies:</p>
      $$d^2 = 1^2 + 1^2 = 2$$
      <p>A square constructed on this diagonal has an area of exactly $2\\text{ sq units}$.</p>
      <p><b>Is $d$ a Fraction?</b></p>
      <p>Can $d$ be represented as a fraction $\\frac{p}{q}$ in lowest terms? If so:</p>
      $$\\left(\\frac{p}{q}\\right)^2 = 2 \\implies p^2 = 2q^2$$
      <p>This means $p^2$ is even, which implies $p$ must be even ($p = 2k$). Substituting this yields:</p>
      $$(2k)^2 = 2q^2 \\implies 4k^2 = 2q^2 \\implies q^2 = 2k^2$$
      <p>This implies $q^2$ is also even, so $q$ must be even. But this contradicts our assumption that $\\frac{p}{q}$ was in lowest terms (having no common factor other than 1).</p>
      <p><b>Conclusion:</b> There exists <b>no fraction</b> whose square is $2$. To denote this geometric length, mathematicians defined a <b>new number</b>: $\\mathbf{\\sqrt{2}}$.</p>`,
    statement_ml: `<p>വശം $1\\text{ യൂണിറ്റ്}$ ആയ ഒരു സമചതുരം പരിഗണിക്കുക. പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം അതിന്റെ വികർണ്ണത്തിന്റെ നീളം $d$ കണ്ടെത്താം:</p>
      $$d^2 = 1^2 + 1^2 = 2$$
      <p>ഈ വികർണ്ണത്തിൽ വരയ്ക്കുന്ന സമചതുരത്തിന്റെ പരപ്പളവ് കൃത്യമായി $2\\text{ ചതുരശ്ര യൂണിറ്റ്}$ ആയിരിക്കും.</p>
      <p><b>$d$ ഒരു ഭിന്നസംഖ്യയാണോ?</b></p>
      <p>$d$-നെ ഏറ്റവും ലഘുവായ $\\frac{p}{q}$ എന്ന ഭിന്നസംഖ്യയായി എഴുതാൻ കഴിയുമെന്ന് സങ്കൽപ്പിച്ചാൽ:</p>
      $$\\left(\\frac{p}{q}\\right)^2 = 2 \\implies p^2 = 2q^2$$
      <p>ഇതിൽ നിന്ന് $p^2$ ഒരു ഇരട്ടസംഖ്യയാണെന്ന് വരുന്നു; അതിനാൽ $p$ ഒരു ഇരട്ടസംഖ്യയായിരിക്കണം ($p = 2k$). ഇത് സമവാക്യത്തിൽ നൽകിയാൽ:</p>
      $$(2k)^2 = 2q^2 \\implies 4k^2 = 2q^2 \\implies q^2 = 2k^2$$
      <p>ഇത് കാണിക്കുന്നത് $q^2$-ഉം ഇരട്ടസംഖ്യയാണ്, അതുകൊണ്ട് $q$-ഉം ഇരട്ടസംഖ്യയായിരിക്കണം എന്നാണ്. എന്നാൽ ഇത് $p, q$ എന്നിവയ്ക്ക് പൊതുഘടകങ്ങളില്ല എന്ന ആദ്യ സങ്കൽപ്പത്തിന് വിരുദ്ധമാണ്.</p>
      <p><b>തീരുമാനം:</b> വർഗ്ഗം 2 ആകുന്ന ഒരു ഭിന്നസംഖ്യയുമില്ല. ഇത്തരം ജ്യാമിതീയ നീളങ്ങളെ സൂചിപ്പിക്കാൻ ഗണിതശാസ്ത്രജ്ഞർ നിർവ്വചിച്ച <b>പുതിയ സംഖ്യയാണ് $\\mathbf{\\sqrt{2}}$</b>.</p>`,
    intuition_en: `<p>Nature provides perfect geometric lengths that simple counting fractions cannot capture. The diagonal of a square is one such fundamental geometric reality.</p>`,
    intuition_ml: `<p>ജ്യാമിതീയമായി വരയ്ക്കാൻ കഴിയുന്ന പല നീളങ്ങളും ഭിന്നസംഖ്യകൾ ഉപയോഗിച്ച് കൃത്യമായി പറയാൻ കഴിയില്ല; സമചതുരത്തിന്റെ വികർണ്ണം ഇതിന് ഏറ്റവും മികച്ച ഉദാഹരണമാണ്.</p>`,
    proof: {
      idea_en: 'Proof by contradiction via parity: assuming p/q is in lowest terms leads to both p and q being even.',
      idea_ml: 'ഇരട്ടസംഖ്യാ സ്വഭാവം ഉപയോഗിച്ചുള്ള പരോക്ഷ തെളിവ്: ഭിന്നസംഖ്യയാണെന്ന് സങ്കൽപ്പിച്ചാൽ p-യും q-വും ഇരട്ടസംഖ്യകളാകുന്നു.',
      why_en: 'The square of an odd number is always odd; only an even number has an even square.',
      why_ml: 'ഒറ്റസംഖ്യയുടെ വർഗ്ഗം എപ്പോഴും ഒറ്റസംഖ്യയും, ഇരട്ടസംഖ്യയുടെ വർഗ്ഗം ഇരട്ടസംഖ്യയുമാണ്.',
      rungs_en: [
        { why_en: 'Assume sqrt(2) is a reduced fraction.', m: '\\sqrt{2} = \\frac{p}{q}, \\quad \\gcd(p, q) = 1' },
        { why_en: 'Square both sides.', m: 'p^2 = 2q^2 \\implies p^2 \\text{ is even} \\implies p = 2k' },
        { why_en: 'Substitute p = 2k.', m: '4k^2 = 2q^2 \\implies q^2 = 2k^2 \\implies q \\text{ is even}' },
        { why_en: 'Both p and q share factor 2, contradiction.', m: '2 \\mid \\gcd(p, q) \\implies \\text{Contradiction!}' }
      ],
      rungs_ml: [
        { why_ml: '$\sqrt{2}$ ഒരു ലഘു ഭിന്നസംഖ്യയാണെന്ന് കരുതുക.', m: '\\sqrt{2} = \\frac{p}{q}' },
        { why_ml: 'ഇരുവശവും വർഗ്ഗം ചെയ്യുന്നു.', m: 'p^2 = 2q^2 \\implies p \\text{ ഇരട്ടസംഖ്യ}' },
        { why_ml: 'p = 2k എന്ന് നൽകുന്നു.', m: 'q^2 = 2k^2 \\implies q \\text{ ഇരട്ടസംഖ്യ}' },
        { why_ml: 'രണ്ടിനും 2 പൊതുഘടകമായി വരുന്നു, ഇത് തെറ്റാണ്.', m: '\\sqrt{2} \\notin \\mathbb{Q}' }
      ]
    },
    needs: ['m8.1.1.perfect-squares', 'p.5.5'],
    traps_en: [
      'sqrt(2) is NOT 1.414 exactly; 1.414 is only an approximate rational value.',
      'sqrt(2) is a single definite real number representing an exact geometric distance.'
    ],
    traps_ml: [
      '$\sqrt{2}$ എന്നാൽ കൃത്യം 1.414 അല്ല; 1.414 എന്നത് ഒരു ഏകദേശ വില മാത്രമാണ്.',
      '$\sqrt{2}$ എന്നത് കൃത്യമായ ജ്യാമിതീയ നീളത്തെ സൂചിപ്പിക്കുന്ന ഒരു നിർദ്ദിഷ്ട സംഖ്യയാണ്.'
    ],
    cards_en: [
      { q: 'What is the length of the diagonal of a square of side 1 cm?', a: '$\\mathbf{\\sqrt{2}\\text{ cm}}$.', kind: 'recall' },
      { q: 'Can √2 be written as a fraction p/q where p and q are integers?', a: 'No, √2 is an **irrational number**.', kind: 'recall' },
      { q: 'What is the area of a square whose side is √2 cm?', a: '$(\\sqrt{2})^2 = \\mathbf{2\\text{ cm}^2}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '1 cm വശമുള്ള സമചതുരത്തിന്റെ വികർണ്ണത്തിന്റെ നീളം എത്ര?', a: '$\\mathbf{\\sqrt{2}\\text{ cm}}$.', kind: 'recall' },
      { q: '√2-നെ പൂർണ്ണസംഖ്യകളുടെ ഭിന്നസംഖ്യയായ p/q രൂപത്തിൽ എഴുതാമോ?', a: 'ഇല്ല, √2 ഒരു **അഭിന്നക സംഖ്യയാണ്**.', kind: 'recall' },
      { q: 'വശം √2 cm ആയ സമചതുരത്തിന്റെ പരപ്പളവ് എത്ര?', a: '$(\\sqrt{2})^2 = \\mathbf{2\\text{ cm}^2}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm9.4.2.geometric-construction-of-roots',
    sec: '9.4.2',
    kind: 'method',
    tier: 'core',
    title_en: 'Geometric Construction of Square Roots (Theodorus Spiral)',
    title_ml: 'വർഗ്ഗമൂലങ്ങളുടെ ജ്യാമിതീയ നിർമ്മിതി (തിയോഡോറസ് സർപ്പിളം)',
    oneLine_en: 'Square roots of all natural numbers can be constructed geometrically as hypotenuses of successive right triangles with unit perpendicular legs.',
    oneLine_ml: 'ലംബവശം 1 ആയ മട്ടത്രികോണങ്ങൾ തുടർച്ചയായി വരച്ച് കർണ്ണങ്ങളായി എല്ലാ എണ്ണൽസംഖ്യകളുടെയും വർഗ്ഗമൂലങ്ങൾ ജ്യാമിതീയമായി നിർമ്മിക്കാം.',
    statement_en: `<p>Any square root of a natural number $\\sqrt{n}$ can be constructed geometrically using ruler and compasses by applying the Pythagorean Theorem:</p>
      <p><b>The Spiral of Theodorus (Root Spiral):</b></p>
      <ol>
        <li>Start with an isosceles right triangle with perpendicular legs of length $1$:
          $$\\text{Hypotenuse } = \\sqrt{1^2 + 1^2} = \\mathbf{\\sqrt{2}}$$</li>
        <li>On this hypotenuse of length $\\sqrt{2}$, construct a perpendicular leg of length $1$:
          $$\\text{New Hypotenuse } = \\sqrt{(\\sqrt{2})^2 + 1^2} = \\sqrt{2 + 1} = \\mathbf{\\sqrt{3}}$$</li>
        <li>Repeat the process: on hypotenuse $\\sqrt{3}$, construct a perpendicular leg of length $1$:
          $$\\text{New Hypotenuse } = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{3 + 1} = \\sqrt{4} = \\mathbf{2}$$</li>
        <li>In general, the $n$-th right triangle has hypotenuse $\\mathbf{\\sqrt{n+1}}$.</li>
      </ol>
      <p>By transferring these hypotenuse lengths with compasses onto a number line starting at $0$, we pinpoint the exact locations of $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}, \\dots$</p>`,
    statement_ml: `<p>പൈതഗോറസ് സിദ്ധാന്തം ഉപയോഗിച്ച് കോമ്പസും സ്കെയിലും കൊണ്ട് ഏതൊരു എണ്ണൽസംഖ്യയുടെയും വർഗ്ഗമൂലം ($\\sqrt{n}$) ജ്യാമിതീയമായി നിർമ്മിക്കാം:</p>
      <p><b>തിയോഡോറസിന്റെ വർഗ്ഗമൂല സർപ്പിളം:</b></p>
      <ol>
        <li>ലംബവശങ്ങൾ $1\\text{ cm}$ വീതമായ സമപാർശ്വ മട്ടത്രികോണം വരയ്ക്കുക:
          $$\\text{കർണ്ണം} = \\sqrt{1^2 + 1^2} = \\mathbf{\\sqrt{2}}$$</li>
        <li>ഈ $\\sqrt{2}$ നീളമുള്ള കർണ്ണത്തിൽ $1\\text{ cm}$ ലംബമായി വരച്ച് അടുത്ത മട്ടത്രികോണം ഉണ്ടാക്കുക:
          $$\\text{പുതിയ കർണ്ണം} = \\sqrt{(\\sqrt{2})^2 + 1^2} = \\sqrt{2 + 1} = \\mathbf{\\sqrt{3}}$$</li>
        <li>ഇതുപോലെ $\\sqrt{3}$ കർണ്ണത്തിന്മേൽ $1\\text{ cm}$ ലംബം വരയ്ക്കുമ്പോൾ:
          $$\\text{കർണ്ണം} = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{4} = \\mathbf{2}$$</li>
        <li>തുടർച്ചയായി ചെയ്താൽ $\\sqrt{5}, \\sqrt{6}, \\sqrt{7}, \\dots$ എന്നിവ ലഭിക്കുന്നു.</li>
      </ol>
      <p>ഈ കർണ്ണങ്ങളുടെ നീളങ്ങൾ കോമ്പസിൽ എടുത്ത് സംഖ്യാരേഖയിൽ അടയാളപ്പെടുത്തി $\\sqrt{2}, \\sqrt{3}, \\dots$ എന്നിവയുടെ കൃത്യമായ സ്ഥാനങ്ങൾ കണ്ടെത്താം.</p>`,
    intuition_en: `<p>A spiral staircase where every step adds 1 unit of squared area under the hypotenuse, steadily climbing the ladder of square roots.</p>`,
    intuition_ml: `<p>ഓരോ പടി കയറുമ്പോഴും കർണ്ണത്തിന്റെ വർഗ്ഗത്തിലേക്ക് 1 വീതം കൂട്ടിച്ചേർക്കപ്പെടുന്ന ഒരു സർപ്പിള ഗോവണിപോലെയാണ് വർഗ്ഗമൂല നിർമ്മിതി.</p>`,
    proof: {
      idea_en: 'Inductive step: hypotenuse h_n = $\sqrt{n}$ combined with orthogonal unit leg yields h_{n+1}^2 = ($\sqrt{n}$)^2 + 1^2 = n + 1.',
      idea_ml: 'ഗണിത ആഗമന തത്വം: $\sqrt{n}$ കർണ്ണത്തിൽ 1 ലംബമാക്കുമ്പോൾ പുതിയ കർണ്ണം $\sqrt{n+1}$ ആകുന്നു.',
      why_en: 'Pythagorean Theorem: hypotenuse squared is the sum of the squares of the legs.',
      why_ml: 'കർണ്ണത്തിന്റെ വർഗ്ഗം പാദവർഗ്ഗവും ലംബവർഗ്ഗവും തമ്മിൽ കൂട്ടിയതിന് തുല്യമാണ്.',
      rungs_en: [
        { why_en: 'Base step: leg 1 and leg 1.', m: 'h_1^2 = 1^2 + 1^2 = 2 \\implies h_1 = \\sqrt{2}' },
        { why_en: 'Next step: base h_1 and perpendicular leg 1.', m: 'h_2^2 = (\\sqrt{2})^2 + 1^2 = 2 + 1 = 3 \\implies h_2 = \\sqrt{3}' },
        { why_en: 'General inductive recurrence.', m: 'h_n^2 = (\\sqrt{n})^2 + 1^2 = n + 1 \\implies h_n = \\sqrt{n+1}' }
      ],
      rungs_ml: [
        { why_ml: 'ആദ്യ ഘട്ടം: 1, 1 ലംബവശങ്ങൾ.', m: 'h_1 = \\sqrt{1^2 + 1^2} = \\sqrt{2}' },
        { why_ml: 'രണ്ടാം ഘട്ടം: $\sqrt{2}, 1$ വശങ്ങൾ.', m: 'h_2 = \\sqrt{2 + 1} = \\sqrt{3}' },
        { why_ml: 'പൊതുരൂപം.', m: 'h_n = \\sqrt{n+1}' }
      ]
    },
    needs: ['m9.4.1.diagonal-of-square-and-sqrt2'],
    traps_en: [
      'The newly added side of length 1 MUST be strictly PERPENDICULAR (90°) to the previous hypotenuse.',
      'Remember that √4 = 2 is an integer, forming a straight check-point in the spiral.'
    ],
    traps_ml: [
      'പുതുതായി വരയ്ക്കുന്ന 1 cm വശം മുൻപത്തെ കർണ്ണത്തിന് തികച്ചും ലംബമായിരിക്കണം (90 ഡിഗ്രി).',
      '√4 = 2 എന്നത് കൃത്യമായ പൂർണ്ണസംഖ്യയാണ്.'
    ],
    cards_en: [
      { q: 'In the root spiral, a right triangle has legs of length √3 and 1. What is its hypotenuse?', a: '$\\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{3 + 1} = \\sqrt{4} = \\mathbf{2}$.', kind: 'apply' },
      { q: 'What theorem is the geometric construction of square roots based on?', a: 'The Pythagorean Theorem ($a^2 + b^2 = c^2$).', kind: 'recall' },
      { q: 'To construct √5 in a single right triangle, what lengths can be used for the legs?', a: 'Legs of lengths **2** and **1**, since $2^2 + 1^2 = 4 + 1 = 5$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'വർഗ്ഗമൂല സർപ്പിളത്തിൽ √3, 1 എന്നിവ ലംബവശങ്ങളായ മട്ടത്രികോണത്തിന്റെ കർണ്ണം എത്ര?', a: '$\\sqrt{3 + 1} = \\sqrt{4} = \\mathbf{2}$.', kind: 'apply' },
      { q: 'വർഗ്ഗമൂലങ്ങളുടെ ജ്യാമിതീയ നിർമ്മിതി ഏത് സിദ്ധാന്തത്തെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്?', a: 'പൈതഗോറസ് സിദ്ധാന്തം ($a^2 + b^2 = c^2$).', kind: 'recall' },
      { q: 'ഒറ്റ മട്ടത്രികോണം കൊണ്ട് √5 നിർമ്മിക്കാൻ ലംബവശങ്ങളായി ഏതൊക്കെ അളവുകൾ എടുക്കാം?', a: '**2**-ഉം **1**-ഉം, കാരണം $2^2 + 1^2 = 4 + 1 = 5$.', kind: 'apply' }
    ]
  },

  {
    id: 'm9.4.3.decimal-approximation-of-roots',
    sec: '9.4.3',
    kind: 'method',
    tier: 'core',
    title_en: 'Decimal Approximation of Square Roots',
    title_ml: 'വർഗ്ഗമൂലങ്ങളുടെ ദശാംശ ഏകദേശനം',
    oneLine_en: 'Square roots of non-perfect squares are approximated to desired decimal precision by finding narrower and narrower bounding intervals using squares.',
    oneLine_ml: 'പൂർണ്ണവർഗ്ഗമല്ലാത്ത സംഖ്യകളുടെ വർഗ്ഗമൂലങ്ങളെ കൂടുതൽ സൂക്ഷ്മമായ ദശാംശ പരിധികളിലൂടെ ആവശ്യമുള്ള കൃത്യതയിലേക്ക് ഏകദേശനം ചെയ്യുന്നു.',
    statement_en: `<p>Since $\\sqrt{2}$ cannot be written as a fraction, its decimal expansion continues infinitely without recurring. We approximate its value by <b>systematic squaring</b>:</p>
      <p><b>Step 1 (Whole Number Place):</b></p>
      $$1^2 = 1 < 2 < 2^2 = 4 \\implies \\mathbf{1 < \\sqrt{2} < 2}$$
      <p><b>Step 2 (Tenths Place):</b></p>
      $$(1.4)^2 = 1.96 < 2 < (1.5)^2 = 2.25 \\implies \\mathbf{1.4 < \\sqrt{2} < 1.5}$$
      <p><b>Step 3 (Hundredths Place):</b></p>
      $$(1.41)^2 = 1.9881 < 2 < (1.42)^2 = 2.0164 \\implies \\mathbf{1.41 < \\sqrt{2} < 1.42}$$
      <p><b>Step 4 (Thousandths Place):</b></p>
      $$(1.414)^2 = 1.999396 < 2 < (1.415)^2 = 2.002225 \\implies \\mathbf{1.414 < \\sqrt{2} < 1.415}$$
      <p><b>Standard Values to Remember:</b></p>
      $$\\sqrt{2} \\approx 1.414, \\quad \\sqrt{3} \\approx 1.732, \\quad \\sqrt{5} \\approx 2.236$$`,
    statement_ml: `<p>$\\sqrt{2}$ ഒരു ഭിന്നസംഖ്യയല്ലാത്തതിനാൽ അതിന്റെ ദശാംശരൂപം അവസാനിക്കുകയോ ആവർത്തിക്കുകയോ ചെയ്യില്ല. വർഗ്ഗം കണ്ടെത്തി <b>ഘട്ടംഘട്ടമായി പരിധികൾ ചുരുക്കി</b> ഇതിന്റെ ഏകദേശവില കണ്ടെത്താം:</p>
      <p><b>ഘട്ടം 1 (പൂർണ്ണസംഖ്യാ സ്ഥാനം):</b></p>
      $$1^2 = 1 < 2 < 2^2 = 4 \\implies \\mathbf{1 < \\sqrt{2} < 2}$$
      <p><b>ഘട്ടം 2 (ദശാംശ സ്ഥാനം):</b></p>
      $$(1.4)^2 = 1.96 < 2 < (1.5)^2 = 2.25 \\implies \\mathbf{1.4 < \\sqrt{2} < 1.5}$$
      <p><b>ഘട്ടം 3 (രണ്ടാം ദശാംശ സ്ഥാനം):</b></p>
      $$(1.41)^2 = 1.9881 < 2 < (1.42)^2 = 2.0164 \\implies \\mathbf{1.41 < \\sqrt{2} < 1.42}$$
      <p><b>ഘട്ടം 4 (മൂന്നാം ദശാംശ സ്ഥാനം):</b></p>
      $$(1.414)^2 = 1.999396 < 2 < (1.415)^2 = 2.002225 \\implies \\mathbf{1.414 < \\sqrt{2} < 1.415}$$
      <p><b>ഓർത്തിരിക്കേണ്ട പ്രധാന ഏകദേശ വിലകൾ:</b></p>
      $$\\sqrt{2} \\approx 1.414, \\quad \\sqrt{3} \\approx 1.732, \\quad \\sqrt{5} \\approx 2.236$$`,
    intuition_en: `<p>Zooming in with a magnifying glass: each decimal place zooms into an interval 10 times narrower, pinpointing the root between two adjacent ticks.</p>`,
    intuition_ml: `<p>ഭൂതക്കണ്ണാടിയിലൂടെ കൂടുതൽ സൂക്ഷ്മമായി നോക്കുമ്പോൾ ഓരോ ഘട്ടത്തിലും അകലം 10 ഇരട്ടി കുറഞ്ഞ് സംഖ്യ കൂടുതൽ കൃത്യതയോടെ ഉറപ്പിക്കപ്പെടുന്നു.</p>`,
    proof: {
      idea_en: 'Order preservation of squaring on positive reals: a < b iff a^2 < b^2 allows sandwiching roots between rational squares.',
      idea_ml: 'ധനസംഖ്യകളിൽ സംഖ്യകൾ കൂടുമ്പോൾ അവയുടെ വർഗ്ഗവും കൂടുന്നു എന്ന തത്വം ഉപയോഗിച്ച് വർഗ്ഗമൂലത്തെ രണ്ട് ഭിന്നകങ്ങൾക്കിടയിൽ കുരുക്കുന്നു.',
      why_en: 'The squaring function f(x) = x^2 is strictly monotonically increasing for x > 0.',
      why_ml: 'f(x) = x^2 എന്നത് ധനസംഖ്യകളിൽ ക്രമമായി വർദ്ധിക്കുന്ന ഫലനമാണ്.',
      rungs_en: [
        { why_en: 'For positive reals a, b: a < b iff a^2 < b^2.', m: 'x_1 < \\sqrt{n} < x_2 \\iff x_1^2 < n < x_2^2' },
        { why_en: 'Search digits sequentially in base 10.', m: 'd_k \\in \\{0, 1, \\dots, 9\\}' },
        { why_en: 'Interval width shrinks by 10x at each step.', m: '|x_2 - x_1| = 10^{-k}' },
        { why_en: 'Produces arbitrarily accurate rational bounds.', m: '\\lim_{k \\to \\infty} 10^{-k} = 0' }
      ],
      rungs_ml: [
        { why_ml: 'ധനസംഖ്യകളിൽ a < b ആയാൽ a^2 < b^2 ആണ്.', m: 'x_1^2 < n < x_2^2' },
        { why_ml: 'ഓരോ ദശാംശസ്ഥാനവും ക്രമമായി കണ്ടെത്തുന്നു.', m: 'd_k' },
        { why_ml: 'വ്യത്യാസം 10 ഇരട്ടി വീതം കുറയുന്നു.', m: '10^{-k}' },
        { why_ml: 'ആവശ്യമായ കൃത്യതയിൽ വില ലഭിക്കുന്നു.', m: '\\sqrt{n} \\approx x_1' }
      ]
    },
    needs: ['m9.4.1.diagonal-of-square-and-sqrt2'],
    traps_en: [
      'Squaring 1.4 gives 1.96 (not 1.4^2 = 2.8; squaring is 1.4 * 1.4, not 1.4 * 2).',
      'Approximation is an estimate; writing √2 = 1.414 without the approximation sign (≈) is formally incorrect.'
    ],
    traps_ml: [
      '1.4-ന്റെ വർഗ്ഗം 1.96 ആണ്, 2.8 അല്ല (1.4 * 1.4 ആണ്, 1.4 * 2 അല്ല).',
      '√2 = 1.414 എന്ന് എഴുതുന്നത് പൂർണ്ണമായും ശരിയല്ല; ഇത് ഏകദേശ വിലയായതിനാൽ √2 ≈ 1.414 എന്ന് എഴുതണം.'
    ],
    cards_en: [
      { q: 'Between which two consecutive tenths does √3 lie?', a: 'Since $1.7^2 = 2.89$ and $1.8^2 = 3.24$, $\\mathbf{1.7 < \\sqrt{3} < 1.8}$.', kind: 'apply' },
      { q: 'What is the commonly used approximation of √3 to 3 decimal places?', a: '$\\mathbf{1.732}$.', kind: 'recall' },
      { q: 'What is (1.41)²?', a: '$1.41 \\times 1.41 = \\mathbf{1.9881}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '√3 ഏത് രണ്ട് തുടർച്ചയായ ദശാംശങ്ങൾക്കിടയിലാണ്?', a: '$1.7^2 = 2.89$, $1.8^2 = 3.24$ ആയതിനാൽ $\\mathbf{1.7 < \\sqrt{3} < 1.8}$.', kind: 'apply' },
      { q: '√3-ന്റെ 3 ദശാംശസ്ഥാനം വരെയുള്ള പൊതുവായ ഏകദേശ വില എത്ര?', a: '$\\mathbf{1.732}$.', kind: 'recall' },
      { q: '(1.41)²-ന്റെ വില എത്ര?', a: '$1.41 \\times 1.41 = \\mathbf{1.9881}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm9.4.4.operations-on-surds',
    sec: '9.4.4',
    kind: 'formula',
    tier: 'core',
    title_en: 'Arithmetic Operations and Rules for Square Roots (Surds)',
    title_ml: 'വർഗ്ഗമൂലങ്ങളുടെ ക്രിയകളും നിയമങ്ങളും',
    oneLine_en: 'For positive real numbers a and b: √(ab) = √a * √b and √(a/b) = √a / √b; terms like √(a + b) do NOT equal √a + √b.',
    oneLine_ml: 'ധനസംഖ്യകളായ a, b എന്നിവയ്ക്ക് √(ab) = √a * √b അതുപോലെ √(a/b) = √a / √b ആണ്; എന്നാൽ √(a + b) എന്നത് √a + √b-ക്ക് തുല്യമല്ല.',
    statement_en: `<p>Square roots satisfy fundamental algebraic multiplication and division identities for any positive numbers $a$ and $b$:</p>
      <p><b>1. Product Rule:</b></p>
      $$\\mathbf{\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}}$$
      <p><i>Simplification Example:</i> $\\sqrt{72} = \\sqrt{36 \\times 2} = \\sqrt{36} \\times \\sqrt{2} = \\mathbf{6\\sqrt{2}}$.</p>
      <p><b>2. Quotient Rule:</b></p>
      $$\\mathbf{\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}}$$
      <p><i>Example:</i> $\\sqrt{\\frac{25}{16}} = \\frac{\\sqrt{25}}{\\sqrt{16}} = \\mathbf{\\frac{5}{4}}$.</p>
      <p><b>3. Addition/Subtraction Rule (Combining Like Radicals):</b></p>
      $$3\\sqrt{2} + 5\\sqrt{2} = (3 + 5)\\sqrt{2} = \\mathbf{8\\sqrt{2}}$$
      <p><b>4. Rationalising the Denominator:</b></p>
      $$\\frac{1}{\\sqrt{a}} = \\frac{1 \\times \\sqrt{a}}{\\sqrt{a} \\times \\sqrt{a}} = \\mathbf{\\frac{\\sqrt{a}}{a}}$$
      $$\\text{Example: } \\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = \\mathbf{2\\sqrt{3}}$$
      <p><b>CRITICAL WARNING:</b> $\\mathbf{\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}}$ in general!</p>
      <p>For example, $\\sqrt{9 + 16} = \\sqrt{25} = 5$, but $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7 \\neq 5$.</p>`,
    statement_ml: `<p>ധനസംഖ്യകളായ $a, b$ എന്നിവയ്ക്ക് വർഗ്ഗമൂലങ്ങൾ താഴെ പറയുന്ന ബീജഗണിത നിയമങ്ങൾ പാലിക്കുന്നു:</p>
      <p><b>1. ഗുണന നിയമം:</b></p>
      $$\\mathbf{\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}}$$
      <p><i>ലഘൂകരണ ഉദാഹരണം:</i> $\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$.</p>
      <p><b>2. ഹരണ നിയമം:</b></p>
      $$\\mathbf{\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}}$$
      <p><i>ഉദാഹരണം:</i> $\\sqrt{\\frac{25}{16}} = \\frac{5}{4}$.</p>
      <p><b>3. സമാന വർഗ്ഗമൂലങ്ങളുടെ സങ്കലനം:</b></p>
      $$3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$$
      <p><b>4. ഛേദത്തെ ഭിന്നകമാക്കൽ:</b></p>
      $$\\frac{1}{\\sqrt{a}} = \\frac{\\sqrt{a}}{a}$$
      <p><i>ഉദാഹരണം:</i> $\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$.</p>
      <p><b>പ്രത്യേകം ശ്രദ്ധിക്കുക:</b> $\\mathbf{\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}}$ ആണ്!</p>
      <p>ഉദാഹരണത്തിന് $\\sqrt{9 + 16} = \\sqrt{25} = 5$ ആണ്, എന്നാൽ $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$ ആണ് ($5 \\neq 7$).</p>`,
    intuition_en: `<p>The area of a rectangle of sides √a and √b is √a * √b. A square of the same area has side length √(ab), so √a * √b must equal √(ab).</p>`,
    intuition_ml: `<p>വശങ്ങൾ √a, √b ആയ ചതുരത്തിന്റെ പരപ്പളവ് √a * √b ആണ്. ഇതേ പരപ്പളവുള്ള സമചതുരത്തിന്റെ വശം √(ab) ആണ്; അതിനാൽ √a * √b = √(ab) ആയിരിക്കും.</p>`,
    proof: {
      idea_en: 'Squaring (sqrt(a) * sqrt(b)) gives (sqrt(a))^2 * (sqrt(b))^2 = a * b, whose positive square root is $\sqrt{ab}$.',
      idea_ml: 'ഇരുവശങ്ങളും വർഗ്ഗം ചെയ്യുമ്പോൾ ab ലഭിക്കുന്നു; അതിനാൽ വർഗ്ഗമൂലങ്ങൾ തുല്യമാണ്.',
      why_en: 'By definition, the unique positive number whose square is ab is $\sqrt{ab}$.',
      why_ml: 'വർഗ്ഗം ab ആകുന്ന ഏകൈക ധനസംഖ്യയാണ് √(ab).',
      rungs_en: [
        { why_en: 'Let p = sqrt(a) * sqrt(b).', m: 'p = \\sqrt{a} \\cdot \\sqrt{b}' },
        { why_en: 'Square p.', m: 'p^2 = (\\sqrt{a} \\cdot \\sqrt{b})^2 = (\\sqrt{a})^2 (\\sqrt{b})^2 = a \\cdot b' },
        { why_en: 'Since p > 0 and p^2 = ab.', m: 'p = \\sqrt{ab}' },
        { why_en: 'Therefore the identity holds.', m: '\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}' }
      ],
      rungs_ml: [
        { why_ml: '$p = \sqrt{a} \cdot \sqrt{b}$ എന്ന് കരുതുക.', m: 'p = \\sqrt{a} \\cdot \\sqrt{b}' },
        { why_ml: 'p-ന്റെ വർഗ്ഗം കാണുന്നു.', m: 'p^2 = (\\sqrt{a})^2 (\\sqrt{b})^2 = a \\cdot b' },
        { why_ml: 'p ധനസംഖ്യയും വർഗ്ഗം ab-യും ആയതിനാൽ.', m: 'p = \\sqrt{ab}' },
        { why_ml: 'നിയമം തെളിഞ്ഞു.', m: '\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}' }
      ]
    },
    needs: ['m9.4.3.decimal-approximation-of-roots'],
    traps_en: [
      '√(a + b) does NOT equal √a + √b (root cannot be distributed across addition!).',
      'When simplifying √50, find the LARGEST perfect square factor: 25 * 2 = 5√2.'
    ],
    traps_ml: [
      '√(a + b) ഒരിക്കലും √a + √b-ക്ക് തുല്യമാകില്ല (കൂട്ടലിൽ വർഗ്ഗമൂലത്തെ വേർതിരിക്കരുത്).',
      '√50 ലഘൂകരിക്കുമ്പോൾ ഏറ്റവും വലിയ പൂർണ്ണവർഗ്ഗ ഘടകം എടുക്കുക: 25 * 2 = 5√2.'
    ],
    cards_en: [
      { q: 'Simplify √50 into the form k√2.', a: '$\\sqrt{50} = \\sqrt{25 \\times 2} = \\mathbf{5\\sqrt{2}}$.', kind: 'apply' },
      { q: 'Does √(9 + 16) equal √9 + √16?', a: '**No**, $\\sqrt{25} = 5$, whereas $3 + 4 = 7$.', kind: 'recall' },
      { q: 'Simplify 12 / √3 by rationalising the denominator.', a: '$\\frac{12\\sqrt{3}}{3} = \\mathbf{4\\sqrt{3}}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '√50-നെ k√2 എന്ന രൂപത്തിൽ ലഘൂകരിക്കുക.', a: '$\\sqrt{25 \\times 2} = \\mathbf{5\\sqrt{2}}$.', kind: 'apply' },
      { q: '√(9 + 16) എന്നത് √9 + √16-ന് തുല്യമാണോ?', a: '**അല്ല**, $\\sqrt{25} = 5$ ആണ്, എന്നാൽ $3 + 4 = 7$ ആണ്.', kind: 'recall' },
      { q: '12 / √3-ന്റെ ഛേദത്തെ ഭിന്നകമാക്കി ലഘൂകരിക്കുക.', a: '$\\frac{12\\sqrt{3}}{3} = \\mathbf{4\\sqrt{3}}$.', kind: 'apply' }
    ]
  }
);
