/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 4: Second Degree Equations (രണ്ടാംകൃതി സമവാക്യങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.4.1 Square Problems & Direct Square Roots (വർഗ്ഗ പ്രശ്നങ്ങളും നേരിട്ടുള്ള വർഗ്ഗമൂലവും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.4.1.square-problems-and-direct-roots',
    sec: '10.4.1',
    kind: 'concept',
    tier: 'core',
    title_en: 'Square Problems & Direct Square Roots',
    title_ml: 'വർഗ്ഗ പ്രശ്നങ്ങളും നേരിട്ടുള്ള വർഗ്ഗമൂലവും',
    oneLine_en: 'Equations where an algebraic square equals a positive constant can be solved directly by taking the square root on both sides: (x + a)² = k ⟹ x + a = ±√k.',
    oneLine_ml: 'ഒരു പൂർണ്ണവർഗ്ഗ പദം ഒരു പോസിറ്റീവ് സംഖ്യയ്ക്ക് തുല്യമാകുന്ന സമവാക്യങ്ങളെ ഇരുവശത്തും വർഗ്ഗമൂലമെടുത്ത് നേരിട്ട് നിർദ്ധാരണം ചെയ്യാം: $(x + a)^2 = k \\implies x + a = \\pm\\sqrt{k}$.',
    statement_en: `<p><b>Direct Square Root Equations:</b></p>
      <p>When an unknown quantity appears only inside a squared term, the equation can be written in the form:</p>
      $$\\mathbf{(x + a)^2 = k}$$
      <p>Taking the square root on both sides yields two solutions (for $k > 0$):</p>
      $$\\mathbf{x + a = \\pm\\sqrt{k} \\implies x = -a \\pm \\sqrt{k}}$$
      <p><b>Geometric and Physical Contexts:</b></p>
      <ul>
        <li><b>Squares & Paths:</b> If each side of a square of side $x$ is reduced by $2$ metres and the new area is $49\\text{ m}^2$, then $(x - 2)^2 = 49 \\implies x - 2 = 7 \\implies x = 9\\text{ metres}$.</li>
        <li><b>Path around a Ground:</b> A path of width $w$ around a square ground of side $x$ creates an outer square of side $x + 2w$ and area $(x + 2w)^2$.</li>
        <li><b>Physical Rule:</b> In geometric problems measuring length, perimeter, or area, negative roots are discarded because lengths cannot be negative. In purely algebraic equations, both roots must be given.</li>
      </ul>`,
    statement_ml: `<p><b>നേരിട്ടുള്ള വർഗ്ഗമൂല രീതി:</b></p>
      <p>അജ്ഞാത സംഖ്യ ഒരു പൂർണ്ണവർഗ്ഗത്തിന്റെ ഭാഗമായി മാത്രം വരുന്ന സമവാക്യങ്ങളെ താഴെ പറയുന്ന രൂപത്തിൽ എഴുതാം:</p>
      $$\\mathbf{(x + a)^2 = k}$$
      <p>$k > 0$ ആകുമ്പോൾ ഇരുവശത്തും വർഗ്ഗമൂലമെടുക്കുമ്പോൾ രണ്ട് ഉത്തരങ്ങൾ ലഭിക്കുന്നു:</p>
      $$\\mathbf{x + a = \\pm\\sqrt{k} \\implies x = -a \\pm \\sqrt{k}}$$
      <p><b>ജ്യാമിതീയ പശ്ചാത്തലം:</b></p>
      <ul>
        <li><b>സമചതുരങ്ങളും വഴികളും:</b> $x$ മീറ്റർ വശമുള്ള സമചതുരത്തിന്റെ വശങ്ങൾ 2 മീറ്റർ വീതം കുറച്ചപ്പോൾ പരപ്പളവ് $49\\text{ m}^2$ ആയാൽ: $(x - 2)^2 = 49 \\implies x - 2 = 7 \\implies x = 9$ മീറ്റർ.</li>
        <li><b>കളത്തിന് ചുറ്റുമുള്ള വഴി:</b> $x$ വശമുള്ള കളത്തിന് ചുറ്റും $w$ വീതിയിൽ വഴിയുണ്ടാക്കിയാൽ വലിയ സമചതുരത്തിന്റെ വശം $x + 2w$ ഉം പരപ്പളവ് $(x + 2w)^2$ ഉം ആയിരിക്കും.</li>
        <li><b>പ്രായോഗിക നിബന്ധന:</b> നീളങ്ങൾ നെഗറ്റീവ് ആകാൻ പാടില്ലാത്തതിനാൽ ജ്യാമിതീയ പ്രശ്നങ്ങളിൽ പോസിറ്റീവ് വില മാത്രമേ സ്വീകരിക്കാവൂ; എന്നാൽ ശുദ്ധ ബീജഗണിത സമവാക്യങ്ങളിൽ രണ്ട് ഉത്തരങ്ങളും എഴുതണം.</li>
      </ul>`,
    intuition_en: `<p>Squaring is the inverse of square root. Since both $(+d)^2$ and $(-d)^2$ equal $d^2$, the equation $(x + a)^2 = k$ produces two symmetric branches: $x + a = +\\sqrt{k}$ and $x + a = -\\sqrt{k}$.</p>`,
    intuition_ml: `<p>വർഗ്ഗം ചെയ്യുന്നതിന്റെ വിപരീത ക്രിയയാണ് വർഗ്ഗമൂലം കാണൽ. പോസിറ്റീവ് സംഖ്യയുടെയും നെഗറ്റീവ് സംഖ്യയുടെയും വർഗ്ഗം ഒന്നുതന്നെയായതിനാൽ വർഗ്ഗമൂലമെടുക്കുമ്പോൾ രണ്ട് ഉത്തരങ്ങൾ ($+\\sqrt{k}, -\\sqrt{k}$) ലഭിക്കുന്നു.</p>`,
    proof: {
      idea_en: 'Apply difference of two squares identity: (x + a)² - (√k)² = 0 factors into two linear equations.',
      idea_ml: 'രണ്ട് വർഗ്ഗങ്ങളുടെ വ്യത്യാസ സമവാക്യം ഉപയോഗിച്ച് ഒന്നാംകൃതി ഘടകങ്ങളാക്കി മാറ്റുന്നു.',
      why_en: 'Zero product principle forces at least one factor to be zero.',
      why_ml: 'രണ്ട് സംഖ്യകളുടെ ഗുണനഫലം പൂജ്യമായാൽ അവയിലൊന്ന് പൂജ്യമായിരിക്കണം.',
      rungs_en: [
        { why_en: 'Subtract k from both sides and express k as (√k)²', m: '(x + a)^2 - (\\sqrt{k})^2 = 0' },
        { why_en: 'Factor using difference of two squares: A² - B² = (A - B)(A + B)', m: '[(x + a) - \\sqrt{k}][(x + a) + \\sqrt{k}] = 0' },
        { why_en: 'Set each factor to zero by the zero-product rule', m: 'x + a - \\sqrt{k} = 0 \\implies x = -a + \\sqrt{k}' },
        { why_en: 'The second factor yields the alternate branch', m: 'x + a + \\sqrt{k} = 0 \\implies x = -a - \\sqrt{k}' }
      ],
      rungs_ml: [
        { why_ml: '$k$ ഇടത്തോട്ട് കൊണ്ടുവന്ന് വർഗ്ഗങ്ങളുടെ വ്യത്യാസ രൂപത്തിലാക്കുന്നു.', m: '(x + a)^2 - (\\sqrt{k})^2 = 0' },
        { why_ml: '$A^2 - B^2 = (A - B)(A + B)$ എന്ന സൂത്രവാക്യം ഉപയോഗിക്കുന്നു.', m: '[(x + a) - \\sqrt{k}][(x + a) + \\sqrt{k}] = 0' },
        { why_ml: 'ഒന്നാമത്തെ ഘടകം പൂജ്യമാകുമ്പോൾ.', m: 'x + a - \\sqrt{k} = 0 \\implies x = -a + \\sqrt{k}' },
        { why_ml: 'രണ്ടാമത്തെ ഘടകം പൂജ്യമാകുമ്പോൾ.', m: 'x + a + \\sqrt{k} = 0 \\implies x = -a - \\sqrt{k}' }
      ]
    },
    needs: ['m8.1.1.perfect-squares', 'm8.1.2.geo-squares'],
    traps_en: [
      'Forgetting the negative root when solving purely numerical quadratic equations.',
      'Accepting a negative length in geometric word problems without physical rejection.'
    ],
    traps_ml: [
      'ശുദ്ധ ബീജഗണിത സമവാക്യങ്ങൾ ചെയ്യുമ്പോൾ നെഗറ്റീവ് മൂല്യം എഴുതാൻ മറന്നുപോകുന്നത്.',
      'ജ്യാമിതീയ കണക്കുകളിൽ നീളം നെഗറ്റീവ് ആയി വരുന്നത് ഒഴിവാക്കാതിരിക്കുന്നത്.'
    ],
    cards_en: [
      { q: 'Solve for x: (x - 3)² = 49.', a: '$x - 3 = \\pm 7 \\implies x = 3 + 7 = \\mathbf{10}$, or $x = 3 - 7 = \\mathbf{-4}$.', kind: 'apply' },
      { q: 'When each side of a square ground is reduced by 2 metres, its area becomes 81 m². What is the side of the original ground?', a: '$(x - 2)^2 = 81 \\implies x - 2 = 9$ (since length $> 0$) $\\implies x = \\mathbf{11\\text{ metres}}$.', kind: 'apply' },
      { q: 'Why do we discard negative roots in geometric area problems?', a: 'Because physical lengths, widths, and distances cannot be negative numbers.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'x കാണുക: (x - 3)² = 49.', a: '$x - 3 = \\pm 7 \\implies x = 3 + 7 = \\mathbf{10}$, അല്ലെങ്കിൽ $x = 3 - 7 = \\mathbf{-4}$.', kind: 'apply' },
      { q: 'ഒരു സമചതുരത്തിന്റെ വശങ്ങൾ 2 മീറ്റർ വീതം കുറച്ചപ്പോൾ പരപ്പളവ് 81 m² ആയി. ആദ്യത്തെ വശത്തിന്റെ നീളം എത്ര?', a: '$(x - 2)^2 = 81 \\implies x - 2 = 9 \\implies x = \\mathbf{11}$ മീറ്റർ.', kind: 'apply' },
      { q: 'ജ്യാമിതീയ അളവുകളിൽ നെഗറ്റീവ് ഉത്തരങ്ങൾ ഒഴിവാക്കുന്നത് എന്തുകൊണ്ട്?', a: 'വശങ്ങളുടെ നീളവും അകലവും നെഗറ്റീവ് സംഖ്യകളാകാൻ കഴിയില്ല എന്നതുകൊണ്ട്.', kind: 'recall' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.4.2 Method of Completing the Square (വർഗ്ഗം തികയ്ക്കൽ രീതി)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.4.2.completing-the-square',
    sec: '10.4.2',
    kind: 'method',
    tier: 'core',
    title_en: 'Method of Completing the Square',
    title_ml: 'വർഗ്ഗം തികയ്ക്കൽ രീതി',
    oneLine_en: 'An expression of the form x² + bx is turned into a perfect square by adding (b/2)² to both sides of the equation: x² + bx + (b/2)² = (x + b/2)²',
    oneLine_ml: '$x^2 + bx$ എന്ന ബീജഗണിത വാക്യത്തെ പൂർണ്ണവർഗ്ഗമാക്കാൻ $x$-ന്റെ ഗുണകത്തിന്റെ പകുതിയുടെ വർഗ്ഗമായ $(\\frac{b}{2})^2$ ഇരുവശത്തും കൂട്ടുന്നു: $x^2 + bx + (\\frac{b}{2})^2 = (x + \\frac{b}{2})^2$.',
    statement_en: `<p><b>Completing the Square Algorithm:</b></p>
      <p>To solve an equation of the form $x^2 + bx = c$:</p>
      <ol>
        <li>Identify the coefficient of $x$, which is $b$.</li>
        <li>Compute half of this coefficient: $\\frac{b}{2}$.</li>
        <li>Square it: $\\left(\\frac{b}{2}\\right)^2$.</li>
        <li>Add $\\left(\\frac{b}{2}\\right)^2$ to <b>both sides</b>:
          $$x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = c + \\left(\\frac{b}{2}\\right)^2$$</li>
        <li>Write the left-hand side as a perfect square:
          $$\\mathbf{\\left(x + \\frac{b}{2}\\right)^2 = c + \\frac{b^2}{4}}$$</li>
        <li>Take square roots on both sides to find $x$.</li>
      </ol>
      <p><b>Geometric Dissection:</b></p>
      <p>A square of side $x$ (area $x^2$) and a rectangle of area $bx$ can be rearranged by splitting the rectangle into two strips of width $\\frac{b}{2}$. Attaching one strip to the right and one to the top leaves a small square missing at the corner of side $\\frac{b}{2}$ and area $\\left(\\frac{b}{2}\\right)^2$. Adding this corner completes the square of side $\\left(x + \\frac{b}{2}\\right)$.</p>`,
    statement_ml: `<p><b>വർഗ്ഗം തികയ്ക്കലിന്റെ ഘട്ടങ്ങൾ:</b></p>
      <p>$x^2 + bx = c$ എന്ന സമവാക്യം പരിഹരിക്കാൻ:</p>
      <ol>
        <li>$x$-ന്റെ ഗുണകമായ $b$ കണ്ടെത്തുക.</li>
        <li>അതിന്റെ പകുതി കാണുക: $\\frac{b}{2}$.</li>
        <li>ആ പകുതിയുടെ വർഗ്ഗം കാണുക: $\\left(\\frac{b}{2}\\right)^2$.</li>
        <li>ഈ വർഗ്ഗം സമവാക്യത്തിന്റെ <b>ഇരുവശത്തും കൂട്ടുക</b>:
          $$x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = c + \\left(\\frac{b}{2}\\right)^2$$</li>
        <li>ഇടതുവശം പൂർണ്ണവർഗ്ഗമാക്കി എഴുതുക:
          $$\\mathbf{\\left(x + \\frac{b}{2}\\right)^2 = c + \\frac{b^2}{4}}$$</li>
        <li>ഇരുവശത്തും വർഗ്ഗമൂലമെടുത്ത് $x$-ന്റെ വിലകൾ കണ്ടെത്തുക.</li>
      </ol>
      <p><b>ജ്യാമിതീയ വിശദീകരണം:</b></p>
      <p>$x$ വശമുള്ള സമചതുരത്തിന്റെ പരപ്പളവ് $x^2$ ആണ്. $bx$ പരപ്പളവുള്ള ചതുരത്തെ $\\frac{b}{2}$ വീതിയുള്ള രണ്ട് കഷണങ്ങളാക്കി സമചതുരത്തിന്റെ രണ്ട് വശങ്ങളിൽ വെച്ചാൽ, കോണിൽ ഒരു ചെറിയ സമചതുരം കുറവുണ്ടാകും. ആ മൂല പൂരിപ്പിക്കാൻ ആവശ്യമായ പരപ്പളവാണ് $(\\frac{b}{2})^2$.</p>`,
    intuition_en: `<p>To make a square out of an L-shaped region of area $x^2 + bx$, you just need to fill in the missing corner piece of area $\\left(\\frac{b}{2}\\right)^2$.</p>`,
    intuition_ml: `<p>$x^2 + bx$ എന്ന $L$-ആകൃതിയിലുള്ള ഭാഗത്തെ ഒരു വലിയ സമചതുരമാക്കാൻ കോണിലെ $(\\frac{b}{2})^2$ വിസ്തീർണ്ണമുള്ള ചെറിയ കള്ളി മാത്രം ചേർത്താൽ മതിയാകും.</p>`,
    proof: {
      idea_en: 'Expand the algebraic identity (x + b/2)² = x² + 2(b/2)x + (b/2)² = x² + bx + b²/4.',
      idea_ml: '(x + b/2)² എന്ന ദ്വിപദ വർഗ്ഗ സമവാക്യം വിപുലീകരിച്ച് തുല്യത തെളിയിക്കുന്നു.',
      why_en: 'Direct algebraic identity confirms that adding b²/4 to x² + bx produces an exact binomial square.',
      why_ml: 'x² + bx-നൊപ്പം b²/4 കൂട്ടുമ്പോൾ അത് കൃത്യമായ പൂർണ്ണവർഗ്ഗമായി മാറുന്നു.',
      rungs_en: [
        { why_en: 'Apply identity (p + q)² = p² + 2pq + q² with p = x and q = b/2', m: '\\left(x + \\frac{b}{2}\\right)^2 = x^2 + 2\\left(\\frac{b}{2}\\right)x + \\left(\\frac{b}{2}\\right)^2' },
        { why_en: 'Simplify the middle term: 2 * (b/2) * x = bx', m: '\\left(x + \\frac{b}{2}\\right)^2 = x^2 + bx + \\frac{b^2}{4}' },
        { why_en: 'Add b²/4 to both sides of x² + bx = c', m: 'x^2 + bx + \\frac{b^2}{4} = c + \\frac{b^2}{4}' },
        { why_en: 'Rewrite LHS as factored square', m: '\\left(x + \\frac{b}{2}\\right)^2 = \\frac{4c + b^2}{4}' }
      ],
      rungs_ml: [
        { why_ml: '$(p + q)^2 = p^2 + 2pq + q^2$ എന്ന സമവാക്യത്തിൽ $p = x, q = \\frac{b}{2}$ എന്ന് നൽകുന്നു.', m: '\\left(x + \\frac{b}{2}\\right)^2 = x^2 + 2\\left(\\frac{b}{2}\\right)x + \\left(\\frac{b}{2}\\right)^2' },
        { why_ml: 'നടുവിലെ പദം ലഘൂകരിക്കുമ്പോൾ $bx$ ലഭിക്കുന്നു.', m: '\\left(x + \\frac{b}{2}\\right)^2 = x^2 + bx + \\frac{b^2}{4}' },
        { why_ml: '$x^2 + bx = c$ എന്നതിന്റെ ഇരുവശത്തും $\\frac{b^2}{4}$ കൂട്ടുന്നു.', m: 'x^2 + bx + \\frac{b^2}{4} = c + \\frac{b^2}{4}' },
        { why_ml: 'ഇടതുവശത്തെ പൂർണ്ണവർഗ്ഗമായി മാറ്റുന്നു.', m: '\\left(x + \\frac{b}{2}\\right)^2 = \\frac{4c + b^2}{4}' }
      ]
    },
    needs: ['m10.4.1.square-problems-and-direct-roots'],
    traps_en: [
      'Adding (b/2)² to only the LHS and forgetting to add it to the RHS.',
      'Taking half of b with the wrong sign when b is negative.',
      'Forgetting to divide the entire equation by a if the leading coefficient is not 1.'
    ],
    traps_ml: [
      'ഇടതുവശത്ത് മാത്രം $(\\frac{b}{2})^2$ കൂട്ടി വലതുവശത്ത് കൂട്ടാൻ മറന്നുപോകുന്നത്.',
      '$b$ നെഗറ്റീവ് ആകുമ്പോൾ ചിഹ്നം ശ്രദ്ധിക്കാതിരിക്കുന്നത്.',
      '$x^2$-ന് ഗുണകമുള്ളപ്പോൾ ($a \\ne 1$) ആദ്യം സമവാക്യം മുഴുവൻ $a$ കൊണ്ട് ഹരിക്കാൻ മറക്കുന്നത്.'
    ],
    cards_en: [
      { q: 'What term must be added to x² + 12x to make it a perfect square?', a: '$\\left(\\frac{12}{2}\\right)^2 = 6^2 = \\mathbf{36}$. The resulting square is $(x + 6)^2$.', kind: 'apply' },
      { q: 'Solve x² + 6x = 16 by completing the square.', a: 'Add $3^2 = 9$ to both sides: $(x + 3)^2 = 25 \\implies x + 3 = \\pm 5 \\implies x = \\mathbf{2}$ or $\\mathbf{-8}$.', kind: 'apply' },
      { q: 'In the geometric model of completing the square, what shape is the added piece?', a: 'A small square of side length $\\mathbf{\\frac{b}{2}}$ and area $\\mathbf{\\left(\\frac{b}{2}\\right)^2}$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'x² + 12x പൂർണ്ണവർഗ്ഗമാക്കാൻ എന്ത് സംഖ്യ കൂട്ടണം?', a: '$\\left(\\frac{12}{2}\\right)^2 = 6^2 = \\mathbf{36}$. ലഭിക്കുന്ന പൂർണ്ണവർഗ്ഗം $(x + 6)^2$ ആണ്.', kind: 'apply' },
      { q: 'വർഗ്ഗം തികച്ച് നിർദ്ധാരണം ചെയ്യുക: x² + 6x = 16.', a: 'ഇരുവശത്തും 9 കൂട്ടുക: $(x + 3)^2 = 25 \\implies x + 3 = \\pm 5 \\implies x = \\mathbf{2}$ അല്ലെങ്കിൽ $\\mathbf{-8}$.', kind: 'apply' },
      { q: 'വർഗ്ഗം തികയ്ക്കലിന്റെ ജ്യാമിതീയ രൂപത്തിൽ കൂട്ടിച്ചേർക്കുന്ന ഭാഗത്തിന്റെ ആകൃതി എന്താണ്?', a: 'വശം $\\mathbf{\\frac{b}{2}}$-ഉം പരപ്പളവ് $\\mathbf{(\\frac{b}{2})^2}$-ഉം ആയ ചെറിയ സമചതുരം.', kind: 'recall' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.4.3 Quadratic Formula & Nature of Roots (രണ്ടാംകൃതി സൂത്രവാക്യവും മൂലങ്ങളുടെ സ്വഭാവവും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.4.3.quadratic-formula-and-discriminant',
    sec: '10.4.3',
    kind: 'formula',
    tier: 'core',
    title_en: 'Quadratic Formula & Nature of Roots',
    title_ml: 'രണ്ടാംകൃതി സൂത്രവാക്യവും മൂലങ്ങളുടെ സ്വഭാവവും',
    oneLine_en: 'The roots of ax² + bx + c = 0 are x = (-b ± √(b² - 4ac)) / (2a); the discriminant Δ = b² - 4ac dictates whether roots are real and distinct, equal, or non-real.',
    oneLine_ml: '$ax^2 + bx + c = 0$ എന്ന സമവാക്യത്തിന്റെ മൂലങ്ങൾ $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ ആണ്; വിവേചകമായ $\\Delta = b^2 - 4ac$ മൂലങ്ങളുടെ സ്വഭാവം നിർണ്ണയിക്കുന്നു.',
    statement_en: `<p><b>The General Quadratic Formula:</b></p>
      <p>For any second degree equation written in standard form $ax^2 + bx + c = 0$ ($a \\ne 0$):</p>
      $$\\mathbf{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}}$$
      <p><b>The Discriminant ($\\Delta$):</b></p>
      <p>The expression inside the radical $\\Delta = b^2 - 4ac$ is called the <b>discriminant</b>. It determines the number and type of solutions:</p>
      <ul>
        <li><b>$\\mathbf{b^2 - 4ac > 0}$:</b> Two distinct real roots: $x_1 \\ne x_2$.</li>
        <li><b>$\\mathbf{b^2 - 4ac = 0}$:</b> Two equal real roots (one unique solution): $x = -\\frac{b}{2a}$.</li>
        <li><b>$\\mathbf{b^2 - 4ac < 0}$:</b> No real roots (square root of a negative quantity is not a real number).</li>
      </ul>
      <p><b>Relations Between Roots and Coefficients:</b></p>
      <p>If $\\alpha$ and $\\beta$ are the roots of $ax^2 + bx + c = 0$:</p>
      $$\\mathbf{\\alpha + \\beta = -\\frac{b}{a} \\quad \\text{and} \\quad \\alpha \\beta = \\frac{c}{a}}$$`,
    statement_ml: `<p><b>രണ്ടാംകൃതി സമവാക്യ സൂത്രവാക്യം:</b></p>
      <p>$ax^2 + bx + c = 0$ ($a \\ne 0$) എന്ന ഏത് രണ്ടാംകൃതി സമവാക്യത്തിന്റെയും മൂലങ്ങൾ കാണുന്ന സൂത്രവാക്യം:</p>
      $$\\mathbf{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}}$$
      <p><b>വിവേചകം ($\\Delta$):</b></p>
      <p>വർഗ്ഗമൂല ചിഹ്നത്തിനുള്ളിലെ $\\Delta = b^2 - 4ac$ എന്ന പദത്തെ <b>വിവേചകം</b> എന്ന് വിളിക്കുന്നു. ഇത് മൂലങ്ങളുടെ സ്വഭാവം വ്യക്തമാക്കുന്നു:</p>
      <ul>
        <li><b>$\\mathbf{b^2 - 4ac > 0}$ എങ്കിൽ:</b> വ്യത്യസ്തങ്ങളായ രണ്ട് യഥാർത്ഥ സംഖ്യാ മൂലങ്ങൾ ലഭിക്കുന്നു.</li>
        <li><b>$\\mathbf{b^2 - 4ac = 0}$ എങ്കിൽ:</b> തുല്യമായ രണ്ട് യഥാർത്ഥ മൂലങ്ങൾ ($x = -\\frac{b}{2a}$) ലഭിക്കുന്നു.</li>
        <li><b>$\\mathbf{b^2 - 4ac < 0}$ എങ്കിൽ:</b> യഥാർത്ഥ സംഖ്യാ മൂലങ്ങൾ ഇല്ല.</li>
      </ul>
      <p><b>മൂലങ്ങളും ഗുണകങ്ങളും തമ്മിലുള്ള ബന്ധം:</b></p>
      <p>മൂലങ്ങൾ $\\alpha, \\beta$ ആയാൽ:</p>
      $$\\mathbf{\\alpha + \\beta = -\\frac{b}{a} \\quad \\text{ഉം} \\quad \\alpha \\beta = \\frac{c}{a}}$$`,
    intuition_en: `<p>The quadratic formula is the general solution obtained by applying completing the square to the variable equation $ax^2 + bx + c = 0$ once and for all, avoiding manual step-by-step completion for complex fractional coefficients.</p>`,
    intuition_ml: `<p>$ax^2 + bx + c = 0$ എന്ന പൊതുരൂപത്തിൽ വർഗ്ഗം തികയ്ക്കൽ രീതി പ്രയോഗിച്ച് നേരിട്ട് ഉണ്ടാക്കിയെടുത്ത സാർവ്വത്രിക സൂത്രവാക്യമാണിത്.</p>`,
    proof: {
      idea_en: 'Apply completing the square generally to ax² + bx + c = 0.',
      idea_ml: 'പൊതു സമവാക്യത്തിൽ വർഗ്ഗം തികയ്ക്കൽ രീതി പ്രയോഗിച്ച് സൂത്രവാക്യം തെളിയിക്കുന്നു.',
      why_en: 'Universal algebraic validity for all non-zero leading coefficients a.',
      why_ml: 'a പൂജ്യമല്ലാത്ത എല്ലാ സംഖ്യകൾക്കും ഈ ബീജഗണിത തെളിവ് സാധുവാകുന്നു.',
      rungs_en: [
        { why_en: 'Divide by a and move constant term to RHS', m: 'x^2 + \\frac{b}{a}x = -\\frac{c}{a}' },
        { why_en: 'Add (b / 2a)² = b² / (4a²) to both sides', m: 'x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = \\frac{b^2}{4a^2} - \\frac{c}{a} = \\frac{b^2 - 4ac}{4a^2}' },
        { why_en: 'Write LHS as complete square', m: '\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}' },
        { why_en: 'Take square roots on both sides', m: 'x + \\frac{b}{2a} = \\pm\\frac{\\sqrt{b^2 - 4ac}}{2a} \\implies x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}' }
      ],
      rungs_ml: [
        { why_ml: '$a$ കൊണ്ട് ഹരിച്ച് സ്ഥിരപദം വലതുവശത്തേക്ക് മാറ്റുന്നു.', m: 'x^2 + \\frac{b}{a}x = -\\frac{c}{a}' },
        { why_ml: 'ഇരുവശത്തും $(\\frac{b}{2a})^2 = \\frac{b^2}{4a^2}$ കൂട്ടുന്നു.', m: 'x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = \\frac{b^2 - 4ac}{4a^2}' },
        { why_ml: 'ഇടതുവശം പൂർണ്ണവർഗ്ഗമാക്കുന്നു.', m: '\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}' },
        { why_ml: 'വർഗ്ഗമൂലമെടുക്കുമ്പോൾ സൂത്രവാക്യം ലഭിക്കുന്നു.', m: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}' }
      ]
    },
    needs: ['m10.4.2.completing-the-square'],
    traps_en: [
      'Dividing only the square root part by 2a instead of the whole numerator (-b ± √Δ).',
      'Misidentifying the sign of -b when b itself is already negative (e.g., if b = -6, then -b = +6).',
      'Forgetting the factor of 4 in 4ac.'
    ],
    traps_ml: [
      'ഛേദമായ $2a$ കൊണ്ട് വർഗ്ഗമൂല ഭാഗത്തെ മാത്രം ഹരിച്ച് $-b$-യെ വിട്ടുപോകുന്നത്.',
      '$b$ നെഗറ്റീവാകുമ്പോൾ $-b$ പോസിറ്റീവാകുന്നത് ശ്രദ്ധിക്കാതിരിക്കുന്നത് (ഉദാഹരണത്തിന് $b = -6$ ആയാൽ $-b = +6$).',
      '$4ac$-യിലെ 4 വിട്ടുപോകുന്നത്.'
    ],
    cards_en: [
      { q: 'State the quadratic formula for solving ax² + bx + c = 0.', a: '$\\mathbf{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}}$.', kind: 'recall' },
      { q: 'What is the discriminant of 2x² - 5x + 2 = 0, and how many real roots exist?', a: '$\\Delta = (-5)^2 - 4(2)(2) = 25 - 16 = \\mathbf{9 > 0}$. There are **two distinct real roots** ($x = 2$ and $x = \\frac{1}{2}$).', kind: 'apply' },
      { q: 'If the discriminant of a quadratic equation is 0, what can you say about its roots?', a: 'The equation has **two equal real roots** (one distinct solution: $x = -\\frac{b}{2a}$).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ax² + bx + c = 0 നിർദ്ധാരണം ചെയ്യാനുള്ള രണ്ടാംകൃതി സൂത്രവാക്യം എഴുതുക.', a: '$\\mathbf{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}}$.', kind: 'recall' },
      { q: '2x² - 5x + 2 = 0 ന്റെ വിവേചകം എത്ര? എത്ര യഥാർത്ഥ മൂലങ്ങളുണ്ട്?', a: '$\\Delta = (-5)^2 - 4(2)(2) = 25 - 16 = \\mathbf{9 > 0}$. **വ്യത്യസ്തങ്ങളായ രണ്ട് യഥാർത്ഥ മൂലങ്ങളുണ്ട്** ($x = 2, \\frac{1}{2}$).', kind: 'apply' },
      { q: 'വിവേചകം പൂജ്യമായാൽ മൂലങ്ങളുടെ സ്വഭാവം എന്താണ്?', a: '**തുല്യമായ രണ്ട് യഥാർത്ഥ മൂലങ്ങൾ** ഉണ്ടാകും ($x = -\\frac{b}{2a}$).', kind: 'recall' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.4.4 Practical & Geometric Applications (പ്രായോഗിക രണ്ടാംകൃതി പ്രശ്നങ്ങൾ)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.4.4.applications-of-quadratic-equations',
    sec: '10.4.4',
    kind: 'application',
    tier: 'core',
    title_en: 'Practical and Geometric Applications',
    title_ml: 'പ്രായോഗിക രണ്ടാംകൃതി പ്രശ്നങ്ങൾ',
    oneLine_en: 'Real-world geometric and number problems translate into quadratic equations; valid solutions are verified by testing against physical constraints.',
    oneLine_ml: 'ജ്യാമിതീയ അളവുകളും സംഖ്യാ പ്രശ്നങ്ങളും രണ്ടാംകൃതി സമവാക്യങ്ങളാക്കി മാറ്റി പ്രായോഗിക വ്യവസ്ഥകൾക്കനുസൃതമായി പരിഹരിക്കുന്നു.',
    statement_en: `<p><b>Translating Word Problems into Quadratic Equations:</b></p>
      <ul>
        <li><b>Geometric Area Problems:</b> If a rectangle has perimeter $2P$, its semi-perimeter is $P$. With length $x$, width is $P - x$, giving area equation:
          $$x(P - x) = A \\implies \\mathbf{x^2 - Px + A = 0}$$</li>
        <li><b>Right-Angled Triangles:</b> In a right triangle with legs $x$ and $x + d$ and hypotenuse $h$:
          $$x^2 + (x + d)^2 = h^2 \\implies \\mathbf{2x^2 + 2dx + (d^2 - h^2) = 0}$$</li>
        <li><b>Consecutive Integers:</b> Two consecutive numbers $x$ and $x + 1$ with product $k$:
          $$x(x + 1) = k \\implies \\mathbf{x^2 + x - k = 0}$$</li>
        <li><b>Arithmetic Sequence Sums:</b> Sum of $n$ terms $S_n = \\frac{n}{2}[2a + (n-1)d] = K$, which is a quadratic in $n$. Since $n$ represents the number of terms, it must be a positive integer ($n \\in \\mathbb{N}$).</li>
      </ul>
      <p><b>Physical Validation Rule:</b> Always write an explicit sentence rejecting negative or non-integer solutions when solving for lengths, counts of items, or number of sequence terms.</p>`,
    statement_ml: `<p><b>വാചക പ്രശ്നങ്ങളെ രണ്ടാംകൃതി സമവാക്യങ്ങളാക്കൽ:</b></p>
      <ul>
        <li><b>ചതുര പരപ്പളവ് പ്രശ്നങ്ങൾ:</b> ചുറ്റളവിന്റെ പകുതി $P$ ആയാൽ, നീളം $x$, വീതി $P - x$. പരപ്പളവ്:
          $$x(P - x) = A \\implies \\mathbf{x^2 - Px + A = 0}$$</li>
        <li><b>മട്ടത്രികോണങ്ങൾ:</b> ലംബവശങ്ങൾ $x, x + d$ ഉം കർണ്ണം $h$ ഉം ആയാൽ പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം:
          $$x^2 + (x + d)^2 = h^2 \\implies \\mathbf{2x^2 + 2dx + (d^2 - h^2) = 0}$$</li>
        <li><b>തുടർച്ചയായ സംഖ്യകൾ:</b> അടുത്തടുത്ത രണ്ട് എണ്ണൽസംഖ്യകളുടെ ഗുണനഫലം $k$ ആയാൽ:
          $$x(x + 1) = k \\implies \\mathbf{x^2 + x - k = 0}$$</li>
        <li><b>സമാന്തരശ്രേണിയുടെ തുക:</b> ആദ്യ $n$ പദങ്ങളുടെ തുക $S_n = \\frac{n}{2}[2a + (n-1)d] = K$ എന്നത് $n$-ലുള്ള രണ്ടാംകൃതി സമവാക്യമാണ്. പദങ്ങളുടെ എണ്ണം ആയതിനാൽ $n$ ഒരു പോസിറ്റീവ് പൂർണ്ണസംഖ്യയായിരിക്കണം.</li>
      </ul>
      <p><b>പ്രായോഗിക നിബന്ധന:</b> നീളങ്ങൾ, പദങ്ങളുടെ എണ്ണം തുടങ്ങിയ അളവുകൾ കാണുമ്പോൾ നെഗറ്റീവ് മൂല്യങ്ങൾ തള്ളിക്കളയണം എന്ന കാരണം വ്യക്തമായി എഴുതണം.</p>`,
    intuition_en: `<p>Quadratic equations appear whenever two varying linear quantities multiply together — such as length times width for area, or number of terms times average term for sequence sums.</p>`,
    intuition_ml: `<p>രണ്ട് രേഖീയ അളവുകൾ പരസ്പരം ഗുണിക്കുമ്പോഴെല്ലാം (നീളം $\\times$ വീതി = പരപ്പളവ്, പദങ്ങളുടെ എണ്ണം $\\times$ ശരാശരി = തുക) രണ്ടാംകൃതി സമവാക്യങ്ങൾ ഉണ്ടാകുന്നു.</p>`,
    proof: {
      idea_en: 'Mathematical formulation of physical constraints and boundary domain verification.',
      idea_ml: 'പ്രായോഗിക വ്യവസ്ഥകളെ ഗണിത സമവാക്യങ്ങളാക്കി മാറ്റി മൂല്യങ്ങളുടെ സാധുത പരിശോധിക്കുന്നു.',
      why_en: 'Physical dimensions live in strictly positive domains (lengths > 0, n in natural numbers).',
      why_ml: 'ഭൗതിക അളവുകൾ പോസിറ്റീവ് സംഖ്യകളായിരിക്കണം എന്ന നിബന്ധന പാലിക്കപ്പെടണം.',
      rungs_en: [
        { why_en: 'Assign variable x to the primary physical dimension with constraint x > 0', m: 'x > 0' },
        { why_en: 'Express dependent dimensions in terms of x using given perimeter or difference relations', m: 'y = P - x' },
        { why_en: 'Set up the quadratic product equation and solve using formula or square completion', m: 'x(P - x) = A \\implies x^2 - Px + A = 0' },
        { why_en: 'Filter roots against domain: accept only x > 0 and geometrically valid values', m: 'x = \\frac{P \\pm \\sqrt{P^2 - 4A}}{2} \\in \\mathbb{R}^+' }
      ],
      rungs_ml: [
        { why_ml: 'പ്രായോഗിക അളവിന് $x > 0$ എന്ന നിബന്ധനയോടെ വേരിയബിൾ നൽകുന്നു.', m: 'x > 0' },
        { why_ml: 'മറ്റേ അളവിനെ $x$-ന്റെ പദങ്ങളിൽ എഴുതുന്നു.', m: 'y = P - x' },
        { why_ml: 'രണ്ടാംകൃതി സമവാക്യം രൂപീകരിച്ച് പരിഹരിക്കുന്നു.', m: 'x^2 - Px + A = 0' },
        { why_ml: 'പോസിറ്റീവായ ജ്യാമിതീയ മൂല്യം മാത്രം സ്വീകരിക്കുന്നു.', m: 'x = \\frac{P \\pm \\sqrt{P^2 - 4A}}{2}' }
      ]
    },
    needs: ['m10.4.3.quadratic-formula-and-discriminant'],
    traps_en: [
      'Forgetting that perimeter is 2(length + breadth), so length + breadth is half of perimeter.',
      'Accepting non-integer solutions for the number of terms n in an arithmetic sequence.',
      'Accepting a negative length without explicitly stating why it is rejected.'
    ],
    traps_ml: [
      'ചുറ്റളവ് $2(\\text{നീളം} + \\text{വീതി})$ ആയതിനാൽ നീളവും വീതിയും കൂട്ടിയാൽ ചുറ്റളവിന്റെ പകുതിയാണെന്നത് ഓർക്കാതിരിക്കുന്നത്.',
      'സമാന്തരശ്രേണിയിലെ പദങ്ങളുടെ എണ്ണമായ $n$-ന് ഭിന്നസംഖ്യയോ നെഗറ്റീവോ ഉത്തരമായി സ്വീകരിക്കുന്നത്.',
      'നീളം നെഗറ്റീവ് ആകില്ല എന്ന കാരണം വ്യക്തമാക്കാതെ ഉത്തരം എഴുതുന്നത്.'
    ],
    cards_en: [
      { q: 'A rectangle has perimeter 28 cm and area 48 cm². Find its length and width.', a: 'Semi-perimeter $= 14$. $x(14 - x) = 48 \\implies x^2 - 14x + 48 = 0 \\implies (x - 6)(x - 8) = 0$. Length is $\\mathbf{8\\text{ cm}}$ and width is $\\mathbf{6\\text{ cm}}$.', kind: 'apply' },
      { q: 'The hypotenuse of a right-angled triangle is 10 cm and one side is 2 cm longer than the other. Find the sides.', a: '$x^2 + (x + 2)^2 = 100 \\implies 2x^2 + 4x - 96 = 0 \\implies x^2 + 2x - 48 = 0 \\implies (x + 8)(x - 6) = 0$. Sides are $\\mathbf{6\\text{ cm}}$ and $\\mathbf{8\\text{ cm}}$.', kind: 'apply' },
      { q: 'How many terms of the arithmetic sequence 9, 11, 13, ... must be added to get a sum of 240?', a: '$S_n = \\frac{n}{2}[18 + (n-1)2] = n(n + 8) = 240 \\implies n^2 + 8n - 240 = 0 \\implies (n + 20)(n - 12) = 0$. Since $n > 0$, $\\mathbf{n = 12}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഒരു ചതുരത്തിന്റെ ചുറ്റളവ് 28 cm, പരപ്പളവ് 48 cm² ആയാൽ നീളവും വീതിയും എത്ര?', a: 'ചുറ്റളവിന്റെ പകുതി $= 14$. $x(14 - x) = 48 \\implies (x - 6)(x - 8) = 0$. നീളം $\\mathbf{8\\text{ cm}}$, വീതി $\\mathbf{6\\text{ cm}}$.', kind: 'apply' },
      { q: 'മട്ടത്രികോണത്തിന്റെ കർണ്ണം 10 cm ആണ്. ഒരു വശം മറ്റേതിനേക്കാൾ 2 cm കൂടുതലാണ്. വശങ്ങൾ കാണുക.', a: '$x^2 + (x + 2)^2 = 100 \\implies x^2 + 2x - 48 = 0 \\implies (x + 8)(x - 6) = 0$. വശങ്ങൾ $\\mathbf{6\\text{ cm}}$ ഉം $\\mathbf{8\\text{ cm}}$ ഉം.', kind: 'apply' },
      { q: '9, 11, 13, ... എന്ന സമാന്തരശ്രേണിയിലെ എത്ര പദങ്ങൾ കൂട്ടിയാലാണ് തുക 240 ആകുന്നത്?', a: '$S_n = n(n + 8) = 240 \\implies n^2 + 8n - 240 = 0 \\implies (n + 20)(n - 12) = 0$. $n > 0$ ആയതിനാൽ $\\mathbf{n = 12}$.', kind: 'apply' }
    ]
  }
);
