/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 4: Polygons (ബഹുഭുജങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm8.4.1.polygon-angle-sum',
    sec: '8.4.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Sum of Angles of a Polygon',
    title_ml: 'ബഹുഭുജങ്ങളിലെ കോണുകളുടെ തുക',
    oneLine_en: 'The sum of interior angles of an n-sided polygon is (n - 2) × 180°.',
    oneLine_ml: 'n വശങ്ങളുള്ള ഒരു ബഹുഭുജത്തിലെ ആന്തരകോണുകളുടെ തുക (n - 2) × 180° ആണ്.',
    statement_en: `<p>Any convex $n$-sided polygon can be divided into $(n - 2)$ triangles by drawing diagonals from a single vertex to all other non-adjacent vertices.</p>
      <p>Since the sum of angles of each triangle is $180^\\circ$, the sum of all interior angles of an $n$-sided polygon is:</p>
      $$\\mathbf{S = (n - 2) \\times 180^\\circ}$$
      <ul>
        <li><b>Triangle ($n = 3$):</b> $(3 - 2) \\times 180^\\circ = 1 \\times 180^\\circ = 180^\\circ$</li>
        <li><b>Quadrilateral ($n = 4$):</b> $(4 - 2) \\times 180^\\circ = 2 \\times 180^\\circ = 360^\\circ$</li>
        <li><b>Pentagon ($n = 5$):</b> $(5 - 2) \\times 180^\\circ = 3 \\times 180^\\circ = 540^\\circ$</li>
        <li><b>Hexagon ($n = 6$):</b> $(6 - 2) \\times 180^\\circ = 4 \\times 180^\\circ = 720^\\circ$</li>
        <li><b>Heptagon ($n = 7$):</b> $(7 - 2) \\times 180^\\circ = 5 \\times 180^\\circ = 900^\\circ$</li>
        <li><b>Octagon ($n = 8$):</b> $(8 - 2) \\times 180^\\circ = 6 \\times 180^\\circ = 1080^\\circ$</li>
      </ul>`,
    statement_ml: `<p>$n$ വശങ്ങളുള്ള ഏതൊരു ബഹുഭുജത്തെയും ഒരു മൂലയിൽ നിന്ന് അടുത്തല്ലാത്ത മറ്റ് മൂലകളിലേക്ക് വരകൾ വരച്ച് $(n - 2)$ ത്രികോണങ്ങളാക്കി മാറ്റാം.</p>
      <p>ഒരു ത്രികോണത്തിലെ മൂന്ന് കോണുകളുടെയും തുക $180^\\circ$ ആയതിനാൽ, $n$ വശങ്ങളുള്ള ബഹുഭുജത്തിലെ ആന്തരകോണുകളുടെ തുക:</p>
      $$\\mathbf{S = (n - 2) \\times 180^\\circ}$$
      <ul>
        <li><b>ത്രികോണം ($n = 3$):</b> $(3 - 2) \\times 180^\\circ = 1 \\times 180^\\circ = 180^\\circ$</li>
        <li><b>ചതുർഭുജം ($n = 4$):</b> $(4 - 2) \\times 180^\\circ = 2 \\times 180^\\circ = 360^\\circ$</li>
        <li><b>പഞ്ചഭുജം ($n = 5$):</b> $(5 - 2) \\times 180^\\circ = 3 \\times 180^\\circ = 540^\\circ$</li>
        <li><b>ഷഡ്ഭുജം ($n = 6$):</b> $(6 - 2) \\times 180^\\circ = 4 \\times 180^\\circ = 720^\\circ$</li>
        <li><b>സപ്തഭുജം ($n = 7$):</b> $(7 - 2) \\times 180^\\circ = 5 \\times 180^\\circ = 900^\\circ$</li>
        <li><b>അഷ്ടഭുജം ($n = 8$):</b> $(8 - 2) \\times 180^\\circ = 6 \\times 180^\\circ = 1080^\\circ$</li>
      </ul>`,
    intuition_en: `<p>Every time you add a side to a polygon, you can attach one more triangle, which increases the total angle sum by exactly $180^\\circ$.</p>
      <p><b>Worked micro-example:</b> What is the sum of angles in a 12-sided polygon (dodecagon)?<br>
      $S = (12 - 2) \\times 180^\\circ = 10 \\times 180^\\circ = 1800^\\circ$.</p>`,
    intuition_ml: `<p>ഒരു ബഹുഭുജത്തിലേക്ക് ഓരോ വശം കൂടുമ്പോഴും പുതിയ ഒരു ത്രികോണം കൂടി ചേരുന്നു, അതിനാൽ കോണുകളുടെ ആകെ തുകയിൽ കൃത്യം $180^\\circ$ വർദ്ധിക്കുന്നു.</p>
      <p><b>ഉദാഹരണം:</b> 12 വശങ്ങളുള്ള ഒരു ബഹുഭുജത്തിലെ കോണുകളുടെ തുക എത്രയാണ്?<br>
      $S = (12 - 2) \\times 180^\\circ = 10 \\times 180^\\circ = 1800^\\circ$.</p>`,
    proof: {
      idea_en: 'Triangulate the polygon from one vertex into (n - 2) triangles.',
      idea_ml: 'ഒരു മൂലയിൽ നിന്നും വികർണ്ണങ്ങൾ വരച്ച് ബഹുഭുജത്തെ (n - 2) ത്രികോണങ്ങളായി വിഭജിക്കുക.',
      why_en: 'The angles of the triangles add up without overlap or gaps to the interior angles of the polygon.',
      why_ml: 'ത്രികോണങ്ങളുടെ കോണുകൾ ചേർത്തുവെച്ചാൽ വിടവുകളില്ലാതെ ബഹുഭുജത്തിന്റെ എല്ലാ ആന്തരകോണുകളും ലഭിക്കും.',
      rungs_en: [
        { why_en: 'Choose one vertex of the n-sided polygon.', m: 'V_1' },
        { why_en: 'Draw line segments to all non-adjacent vertices. The vertex cannot connect to itself or its 2 adjacent neighbours, giving (n - 3) diagonals.', m: 'n - 3 \\text{ diagonals}' },
        { why_en: 'These (n - 3) diagonals divide the interior into exactly (n - 2) triangles.', m: 'T_1, T_2, \\dots, T_{n-2}' },
        { why_en: 'Each triangle has an angle sum of 180°. Summing all triangles gives the polygon sum.', m: 'S = (n - 2) \\times 180^\\circ' }
      ],
      rungs_ml: [
        { why_ml: 'n വശങ്ങളുള്ള ബഹുഭുജത്തിലെ ഒരു മൂല തിരഞ്ഞെടുക്കുക.', m: 'V_1' },
        { why_ml: 'അടുത്തല്ലാത്ത മറ്റ് മൂലകളിലേക്ക് വികർണ്ണങ്ങൾ വരയ്ക്കുക. സ്വയം അല്ലെങ്കിൽ തൊട്ടടുത്ത 2 മൂലകളിലേക്ക് വരയ്ക്കാനാവാത്തതിനാൽ (n - 3) വികർണ്ണങ്ങൾ ലഭിക്കും.', m: 'n - 3 \\text{ വികർണ്ണങ്ങൾ}' },
        { why_ml: 'ഈ (n - 3) വികർണ്ണങ്ങൾ ബഹുഭുജത്തെ കൃത്യം (n - 2) ത്രികോണങ്ങളായി വിഭജിക്കുന്നു.', m: 'T_1, T_2, \\dots, T_{n-2}' },
        { why_ml: 'ഓരോ ത്രികോണത്തിലെയും കോണുകളുടെ തുക 180° ആണ്. അതിനാൽ ആകെ തുക ലഭിക്കുന്നു.', m: 'S = (n - 2) \\times 180^\\circ' }
      ]
    },
    needs: ['m8.2.1.congruence-intro', 's.area-triangles'],
    traps_en: [
      'Do not multiply n by 180°; you must subtract 2 first: (n - 2) × 180°.',
      'Check whether the question asks for sum of angles or each angle in a regular polygon.'
    ],
    traps_ml: [
      'വശങ്ങളുടെ എണ്ണത്തെ നേരിട്ട് 180° കൊണ്ട് ഗുണിക്കരുത്; ആദ്യം 2 കുറയ്ക്കണം: (n - 2) × 180°.',
      'ചോദ്യം ചോദിച്ചിരിക്കുന്നത് കോണുകളുടെ തുകയാണോ അതോ ഓരോ കോണിന്റെ അളവാണോ എന്ന് ശ്രദ്ധിക്കുക.'
    ],
    cards_en: [
      { q: 'What is the formula for the sum of angles in an n-sided polygon?', a: '$(n - 2) \\times 180^\\circ$.', kind: 'state' },
      { q: 'What is the sum of angles of a pentagon (5 sides)?', a: '$(5 - 2) \\times 180^\\circ = 3 \\times 180^\\circ = 540^\\circ$.', kind: 'apply' },
      { q: 'If the sum of angles of a polygon is 1440°, how many sides does it have?', a: '$n - 2 = \\frac{1440}{180} = 8 \\implies n = 10$ sides.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'n വശങ്ങളുള്ള ഒരു ബഹുഭുജത്തിലെ കോണുകളുടെ തുക കാണാനുള്ള സൂത്രവാക്യം എന്താണ്?', a: '$(n - 2) \\times 180^\\circ$.', kind: 'state' },
      { q: 'ഒരു പഞ്ചഭുജത്തിലെ (5 വശങ്ങൾ) കോണുകളുടെ തുക എത്രയാണ്?', a: '$(5 - 2) \\times 180^\\circ = 3 \\times 180^\\circ = 540^\\circ$.', kind: 'apply' },
      { q: 'ഒരു ബഹുഭുജത്തിലെ കോണുകളുടെ തുക 1440° ആണെങ്കിൽ അതിന് എത്ര വശങ്ങളുണ്ട്?', a: '$n - 2 = \\frac{1440}{180} = 8 \\implies n = 10$ വശങ്ങൾ.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.4.2.polygon-outer-angles',
    sec: '8.4.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Outer Angles & Sum of Outer Angles',
    title_ml: 'ബാഹ്യകോണുകളും അവയുടെ തുകയും',
    oneLine_en: 'The sum of the outer angles of any convex polygon is always 360°.',
    oneLine_ml: 'ഏതൊരു ബഹുഭുജത്തിലെയും ബാഹ്യകോണുകളുടെ തുക എല്ലായ്പ്പോഴും 360° ആയിരിക്കും.',
    statement_en: `<p>When each side of a polygon is extended in order, the angle between the extended side and the adjacent side is called an <b>outer angle</b> (exterior angle).</p>
      <p>At each of the $n$ vertices, the inner angle and the outer angle form a linear pair:</p>
      $$\\text{Inner angle} + \\text{Outer angle} = 180^\\circ$$
      <p>For all $n$ vertices combined:</p>
      $$\\text{Sum of all linear pairs} = n \\times 180^\\circ$$
      <p>Since the sum of inner angles is $(n - 2) \\times 180^\\circ = n \\times 180^\\circ - 360^\\circ$, subtracting the inner angles gives:</p>
      $$\\mathbf{\\text{Sum of outer angles} = 360^\\circ}$$
      <p>This holds for <b>every</b> convex polygon, regardless of how many sides it has!</p>`,
    statement_ml: `<p>ഒരു ബഹുഭുജത്തിന്റെ വശങ്ങൾ ഒരേ ക്രമത്തിൽ നീട്ടുമ്പോൾ, നീട്ടിയ വരയും അടുത്ത വശവും തമ്മിലുണ്ടാകുന്ന കോണിനെ <b>ബാഹ്യകോൺ</b> എന്ന് വിളിക്കുന്നു.</p>
      <p>ഓരോ മൂലയിലും ആന്തരകോണും ബാഹ്യകോണും ചേർന്ന് ഒരു രേഖീയജോടി ഉണ്ടാക്കുന്നു:</p>
      $$\\text{ആന്തരകോൺ} + \\text{ബാഹ്യകോൺ} = 180^\\circ$$
      <p>$n$ മൂലകളിലെയും രേഖീയജോടികളുടെ ആകെ തുക:</p>
      $$\\text{ആകെ തുക} = n \\times 180^\\circ$$
      <p>ആന്തരകോണുകളുടെ തുക $(n - 2) \\times 180^\\circ = n \\times 180^\\circ - 360^\\circ$ ആയതിനാൽ, ഇത് കുറച്ചാൽ ബാഹ്യകോണുകളുടെ തുക ലഭിക്കുന്നു:</p>
      $$\\mathbf{\\text{ബാഹ്യകോണുകളുടെ തുക} = 360^\\circ}$$
      <p>വശങ്ങളുടെ എണ്ണം എത്രയായാലും <b>ഏതൊരു ബഹുഭുജത്തിലും</b> ബാഹ്യകോണുകളുടെ തുക $360^\\circ$ ആയിരിക്കും!</p>`,
    intuition_en: `<p>Imagine walking around the polygon. At each vertex, you turn by the outer angle. After going all the way around and facing your starting direction, you have made one complete turn: $360^\\circ$.</p>`,
    intuition_ml: `<p>ബഹുഭുജത്തിന്റെ വശങ്ങളിലൂടെ നടക്കുന്നത് സങ്കൽപ്പിക്കുക. ഓരോ മൂലയിലും നിങ്ങൾ ബാഹ്യകോണിന്റെ അളവിൽ തിരിയുന്നു. ഒരു വട്ടം പൂർത്തിയാക്കി തുടങ്ങിയ ദിശയിലേക്ക് തന്നെ തിരിച്ചെത്തുമ്പോൾ നിങ്ങൾ ഒരു പൂർണ്ണ തിരിവ് ($360^\\circ$) പൂർത്തിയാക്കിയിരിക്കും.</p>`,
    proof: {
      idea_en: 'Subtract the sum of interior angles from the sum of all linear pairs.',
      idea_ml: 'എല്ലാ രേഖീയജോടികളുടെയും തുകയിൽ നിന്ന് ആന്തരകോണുകളുടെ തുക കുറയ്ക്കുക.',
      why_en: 'Each vertex contributes a 180° linear pair.',
      why_ml: 'ഓരോ മൂലയിലും 180° ഉള്ള രേഖീയജോടി രൂപപ്പെടുന്നു.',
      rungs_en: [
        { why_en: 'At each vertex, inner angle + outer angle = 180° (linear pair).', m: 'i_k + e_k = 180^\\circ' },
        { why_en: 'For an n-sided polygon, the sum of all n pairs is n × 180°.', m: '\\sum (i_k + e_k) = n \\times 180^\\circ' },
        { why_en: 'We know the sum of all inner angles is (n - 2) × 180°.', m: '\\sum i_k = n \\times 180^\\circ - 360^\\circ' },
        { why_en: 'Subtracting inner angles leaves the sum of outer angles as 360°.', m: '\\sum e_k = 360^\\circ' }
      ],
      rungs_ml: [
        { why_ml: 'ഓരോ മൂലയിലും ആന്തരകോൺ + ബാഹ്യകോൺ = 180° (രേഖീയജോടി).', m: 'i_k + e_k = 180^\\circ' },
        { why_ml: 'n വശങ്ങളുള്ള ബഹുഭുജത്തിൽ n രേഖീയജോടികളുടെ ആകെ തുക n × 180° ആണ്.', m: '\\sum (i_k + e_k) = n \\times 180^\\circ' },
        { why_ml: 'ആന്തരകോണുകളുടെ തുക (n - 2) × 180° = n × 180° - 360° ആണെന്ന് നമുക്കറിയാം.', m: '\\sum i_k = n \\times 180^\\circ - 360^\\circ' },
        { why_ml: 'ഇത് കുറയ്ക്കുമ്പോൾ ബാഹ്യകോണുകളുടെ തുക കൃത്യം 360° ആയി ലഭിക്കുന്നു.', m: '\\sum e_k = 360^\\circ' }
      ]
    },
    needs: ['m8.4.1.polygon-angle-sum'],
    traps_en: [
      'The sum of outer angles is ALWAYS 360°, regardless of the number of sides. It does NOT increase with n!',
      'An outer angle and its inner angle add to 180°, not 360°.'
    ],
    traps_ml: [
      'വശങ്ങളുടെ എണ്ണം എത്രയായാലും ബാഹ്യകോണുകളുടെ തുക എല്ലായ്പ്പോഴും 360° തന്നെയാണ്. വശങ്ങൾ കൂടുന്തോറും ഇത് മാറില്ല!',
      'ഒരു മൂലയിലെ ആന്തരകോണും ബാഹ്യകോണും ചേർന്നാൽ 180° ആണ്, 360° അല്ല.'
    ],
    cards_en: [
      { q: 'What is the sum of the outer angles of any polygon?', a: '$360^\\circ$.', kind: 'state' },
      { q: 'What is the relation between an inner angle and its outer angle at a vertex?', a: 'They form a linear pair: inner + outer = $180^\\circ$.', kind: 'state' },
      { q: 'If an interior angle of a polygon is 100°, what is the corresponding outer angle?', a: '$180^\\circ - 100^\\circ = 80^\\circ$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഏതൊരു ബഹുഭുജത്തിലെയും ബാഹ്യകോണുകളുടെ തുക എത്രയാണ്?', a: '$360^\\circ$.', kind: 'state' },
      { q: 'ഒരു മൂലയിലെ ആന്തരകോണും ബാഹ്യകോണും തമ്മിലുള്ള ബന്ധം എന്താണ്?', a: 'അവ രേഖീയജോടിയാണ്: ആന്തരകോൺ + ബാഹ്യകോൺ = $180^\\circ$.', kind: 'state' },
      { q: 'ഒരു ബഹുഭുജത്തിലെ ഒരു ആന്തരകോൺ 100° ആണെങ്കിൽ അവിടുത്തെ ബാഹ്യകോൺ എത്ര?', a: '$180^\\circ - 100^\\circ = 80^\\circ$.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.4.3.regular-polygons',
    sec: '8.4.3',
    kind: 'definition',
    tier: 'core',
    title_en: 'Regular Polygons',
    title_ml: 'സമബഹുഭുജങ്ങൾ',
    oneLine_en: 'A polygon with all sides equal and all angles equal: each outer angle is 360°/n, each inner angle is 180° - 360°/n.',
    oneLine_ml: 'എല്ലാ വശങ്ങളും എല്ലാ കോണുകളും തുല്യമായ ബഹുഭുജമാണ് സമബഹുഭുജം: ഓരോ ബാഹ്യകോണും 360°/n, ഓരോ ആന്തരകോണും 180° - 360°/n.',
    statement_en: `<p>A polygon is called a <b>regular polygon</b> if all its sides are equal in length and all its angles are equal in measure.</p>
      <p>For an $n$-sided regular polygon:</p>
      <ul>
        <li><b>Each outer angle:</b> $$\\mathbf{e = \\frac{360^\\circ}{n}}$$</li>
        <li><b>Each inner angle:</b> $$\\mathbf{i = 180^\\circ - \\frac{360^\\circ}{n} = \\frac{(n - 2) \\times 180^\\circ}{n}}$$</li>
      </ul>
      <p><b>Standard Regular Polygons:</b></p>
      <ul>
        <li><b>Equilateral triangle ($n = 3$):</b> Outer $= 120^\\circ$, Inner $= 60^\\circ$</li>
        <li><b>Square ($n = 4$):</b> Outer $= 90^\\circ$, Inner $= 90^\\circ$</li>
        <li><b>Regular pentagon ($n = 5$):</b> Outer $= \\frac{360^\\circ}{5} = 72^\\circ$, Inner $= 180^\\circ - 72^\\circ = 108^\\circ$</li>
        <li><b>Regular hexagon ($n = 6$):</b> Outer $= \\frac{360^\\circ}{6} = 60^\\circ$, Inner $= 180^\\circ - 60^\\circ = 120^\\circ$</li>
        <li><b>Regular octagon ($n = 8$):</b> Outer $= \\frac{360^\\circ}{8} = 45^\\circ$, Inner $= 180^\\circ - 45^\\circ = 135^\\circ$</li>
      </ul>`,
    statement_ml: `<p>എല്ലാ വശങ്ങളുടെ നീളവും എല്ലാ കോണുകളുടെ അളവും തുല്യമായ ബഹുഭുജങ്ങളെ <b>സമബഹുഭുജങ്ങൾ</b> എന്ന് വിളിക്കുന്നു.</p>
      <p>$n$ വശങ്ങളുള്ള ഒരു സമബഹുഭുജത്തിൽ:</p>
      <ul>
        <li><b>ഓരോ ബാഹ്യകോണും:</b> $$\\mathbf{e = \\frac{360^\\circ}{n}}$$</li>
        <li><b>ഓരോ ആന്തരകോണും:</b> $$\\mathbf{i = 180^\\circ - \\frac{360^\\circ}{n} = \\frac{(n - 2) \\times 180^\\circ}{n}}$$</li>
      </ul>
      <p><b>പ്രധാന സമബഹുഭുജങ്ങൾ:</b></p>
      <ul>
        <li><b>സമഭുജ ത്രികോണം ($n = 3$):</b> ബാഹ്യകോൺ $= 120^\\circ$, ആന്തരകോൺ $= 60^\\circ$</li>
        <li><b>സമചതുരം ($n = 4$):</b> ബാഹ്യകോൺ $= 90^\\circ$, ആന്തരകോൺ $= 90^\\circ$</li>
        <li><b>സമപഞ്ചഭുജം ($n = 5$):</b> ബാഹ്യകോൺ $= \\frac{360^\\circ}{5} = 72^\\circ$, ആന്തരകോൺ $= 180^\\circ - 72^\\circ = 108^\\circ$</li>
        <li><b>സമഷഡ്ഭുജം ($n = 6$):</b> ബാഹ്യകോൺ $= \\frac{360^\\circ}{6} = 60^\\circ$, ആന്തരകോൺ $= 180^\\circ - 60^\\circ = 120^\\circ$</li>
        <li><b>സമഅഷ്ടഭുജം ($n = 8$):</b> ബാഹ്യകോൺ $= \\frac{360^\\circ}{8} = 45^\\circ$, ആന്തരകോൺ $= 180^\\circ - 45^\\circ = 135^\\circ$</li>
      </ul>`,
    intuition_en: `<p>To find the angles of a regular polygon, it is always fastest to find the outer angle first by dividing $360^\\circ$ by $n$, then subtract from $180^\\circ$ to get the inner angle!</p>`,
    intuition_ml: `<p>ഒരു സമബഹുഭുജത്തിലെ കോണുകൾ കാണാൻ, ആദ്യം $360^\\circ$-നെ വശങ്ങളുടെ എണ്ണം കൊണ്ട് ഹരിച്ച് ബാഹ്യകോൺ കാണുക, ശേഷം $180^\\circ$-ൽ നിന്ന് അത് കുറച്ച് ആന്തരകോൺ കണ്ടെത്തുക — ഇതാണ് ഏറ്റവും എളുപ്പമുള്ള വഴി!</p>`,
    needs: ['m8.4.1.polygon-angle-sum', 'm8.4.2.polygon-outer-angles'],
    traps_en: [
      'A rhombus has all sides equal, but it is not regular unless its angles are also equal (90°).',
      'A rectangle has all angles equal (90°), but it is not regular unless its sides are also equal.'
    ],
    traps_ml: [
      'ഒരു സമഭുജസാമാന്തരികത്തിന് (Rhombus) എല്ലാ വശങ്ങളും തുല്യമാണെങ്കിലും കോണുകൾ തുല്യമല്ലാത്തതിനാൽ അത് സമബഹുഭുജമല്ല.',
      'ഒരു ചതുരത്തിന് എല്ലാ കോണുകളും തുല്യമാണെങ്കിലും (90°) വശങ്ങൾ തുല്യമല്ലാത്തതിനാൽ അത് സമബഹുഭുജമല്ല.'
    ],
    cards_en: [
      { q: 'What is the formula for each outer angle of an n-sided regular polygon?', a: '$\\frac{360^\\circ}{n}$.', kind: 'state' },
      { q: 'What is each interior angle of a regular hexagon (6 sides)?', a: 'Outer $= \\frac{360^\\circ}{6} = 60^\\circ \\implies$ Inner $= 180^\\circ - 60^\\circ = 120^\\circ$.', kind: 'apply' },
      { q: 'Can a regular polygon have an interior angle of 50°?', a: 'No, because outer angle would be $130^\\circ$, and $\\frac{360}{130}$ is not a whole number.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'n വശങ്ങളുള്ള ഒരു സമബഹുഭുജത്തിലെ ഓരോ ബാഹ്യകോണും കാണാനുള്ള സൂത്രവാക്യം എന്താണ്?', a: '$\\frac{360^\\circ}{n}$.', kind: 'state' },
      { q: 'ഒരു സമഷഡ്ഭുജത്തിലെ (6 വശങ്ങൾ) ഓരോ ആന്തരകോണിന്റെയും അളവ് എത്ര?', a: 'ബാഹ്യകോൺ $= \\frac{360^\\circ}{6} = 60^\\circ \\implies$ ആന്തരകോൺ $= 180^\\circ - 60^\\circ = 120^\\circ$.', kind: 'apply' },
      { q: 'ഒരു സമബഹുഭുജത്തിന്റെ ആന്തരകോൺ 50° ആകാൻ സാധിക്കുമോ?', a: 'ഇല്ല, കാരണം അപ്പോൾ ബാഹ്യകോൺ $130^\\circ$ ആകും, $\\frac{360}{130}$ ഒരു പൂർണ്ണസംഖ്യയല്ല.', kind: 'trap' }
    ]
  },

  {
    id: 'm8.4.4.polygon-diagonals',
    sec: '8.4.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Diagonals of a Polygon',
    title_ml: 'ബഹുഭുജങ്ങളിലെ വികർണ്ണങ്ങൾ',
    oneLine_en: 'The number of diagonals in an n-sided polygon is n(n - 3) / 2.',
    oneLine_ml: 'n വശങ്ങളുള്ള ഒരു ബഹുഭുജത്തിലെ ആകെ വികർണ്ണങ്ങളുടെ എണ്ണം n(n - 3) / 2 ആണ്.',
    statement_en: `<p>A <b>diagonal</b> of a polygon is a line segment connecting any two non-adjacent vertices.</p>
      <p>From each of the $n$ vertices of a polygon, we can draw line segments to $(n - 3)$ other vertices (excluding the vertex itself and its 2 adjacent neighbours).</p>
      <p>Since each diagonal connects two vertices, counting $(n - 3)$ from each of the $n$ vertices counts every diagonal twice. Therefore:</p>
      $$\\mathbf{D = \\frac{n(n - 3)}{2}}$$
      <ul>
        <li><b>Triangle ($n = 3$):</b> $\\frac{3(3 - 3)}{2} = 0$ diagonals</li>
        <li><b>Quadrilateral ($n = 4$):</b> $\\frac{4(4 - 3)}{2} = \\frac{4 \\times 1}{2} = 2$ diagonals</li>
        <li><b>Pentagon ($n = 5$):</b> $\\frac{5(5 - 3)}{2} = \\frac{5 \\times 2}{2} = 5$ diagonals</li>
        <li><b>Hexagon ($n = 6$):</b> $\\frac{6(6 - 3)}{2} = \\frac{6 \\times 3}{2} = 9$ diagonals</li>
        <li><b>Octagon ($n = 8$):</b> $\\frac{8(8 - 3)}{2} = \\frac{8 \\times 5}{2} = 20$ diagonals</li>
        <li><b>Decagon ($n = 10$):</b> $\\frac{10(10 - 3)}{2} = \\frac{10 \\times 7}{2} = 35$ diagonals</li>
      </ul>`,
    statement_ml: `<p>ഒരു ബഹുഭുജത്തിലെ അടുത്തടുത്തല്ലാത്ത രണ്ട് മൂലകളെ തമ്മിൽ ബന്ധിപ്പിക്കുന്ന വരയാണ് <b>വികർണ്ണം</b>.</p>
      <p>$n$ മൂലകളുള്ള ഒരു ബഹുഭുജത്തിലെ ഓരോ മൂലയിൽ നിന്നും അടുത്തല്ലാത്ത $(n - 3)$ മൂലകളിലേക്ക് വരകൾ വരയ്ക്കാം (സ്വന്തം മൂലയും തൊട്ടടുത്ത 2 മൂലകളും ഒഴിവാക്കണം).</p>
      <p>ഓരോ വികർണ്ണത്തിനും രണ്ട് അറ്റങ്ങൾ ഉള്ളതിനാൽ, ഓരോ മൂലയിൽ നിന്നുമുള്ള എണ്ണം കൂട്ടിയാൽ ഓരോ വികർണ്ണവും രണ്ട് തവണ എണ്ണപ്പെടും. അതിനാൽ:</p>
      $$\\mathbf{D = \\frac{n(n - 3)}{2}}$$
      <ul>
        <li><b>ത്രികോണം ($n = 3$):</b> $\\frac{3(3 - 3)}{2} = 0$ വികർണ്ണങ്ങൾ</li>
        <li><b>ചതുർഭുജം ($n = 4$):</b> $\\frac{4(4 - 3)}{2} = \\frac{4 \\times 1}{2} = 2$ വികർണ്ണങ്ങൾ</li>
        <li><b>പഞ്ചഭുജം ($n = 5$):</b> $\\frac{5(5 - 3)}{2} = \\frac{5 \\times 2}{2} = 5$ വികർണ്ണങ്ങൾ</li>
        <li><b>ഷഡ്ഭുജം ($n = 6$):</b> $\\frac{6(6 - 3)}{2} = \\frac{6 \\times 3}{2} = 9$ വികർണ്ണങ്ങൾ</li>
        <li><b>അഷ്ടഭുജം ($n = 8$):</b> $\\frac{8(8 - 3)}{2} = \\frac{8 \\times 5}{2} = 20$ വികർണ്ണങ്ങൾ</li>
        <li><b>ദശഭുജം ($n = 10$):</b> $\\frac{10(10 - 3)}{2} = \\frac{10 \\times 7}{2} = 35$ വികർണ്ണങ്ങൾ</li>
      </ul>`,
    intuition_en: `<p>A triangle has no non-adjacent vertices, so it has 0 diagonals. A quadrilateral has 2 diagonals. A pentagon is the unique polygon where the number of sides equals the number of diagonals (5 sides, 5 diagonals!).</p>`,
    intuition_ml: `<p>ത്രികോണത്തിൽ അടുത്തടുത്തല്ലാത്ത മറ്റ് മൂലകളില്ലാത്തതിനാൽ വികർണ്ണങ്ങളില്ല (0). ചതുർഭുജത്തിന് 2 വികർണ്ണങ്ങൾ. വശങ്ങളുടെ എണ്ണവും വികർണ്ണങ്ങളുടെ എണ്ണവും തുല്യമായി വരുന്ന ഒരേയൊരു ബഹുഭുജമാണ് പഞ്ചഭുജം (5 വശങ്ങൾ, 5 വികർണ്ണങ്ങൾ!).</p>`,
    needs: ['m8.4.1.polygon-angle-sum'],
    traps_en: [
      'Do not forget to divide by 2; otherwise you are counting each diagonal twice.',
      'From a single vertex, the number of diagonals is (n - 3), which divides the polygon into (n - 2) triangles.'
    ],
    traps_ml: [
      '2 കൊണ്ട് ഹരിക്കാൻ മറക്കരുത്; ഇല്ലെങ്കിൽ ഓരോ വികർണ്ണവും രണ്ട് തവണ എണ്ണപ്പെടും.',
      'ഒരു മൂലയിൽ നിന്ന് വരയ്ക്കാവുന്ന വികർണ്ണങ്ങളുടെ എണ്ണം (n - 3) ആണ്; ഇത് ബഹുഭുജത്തെ (n - 2) ത്രികോണങ്ങളായി വിഭജിക്കുന്നു.'
    ],
    cards_en: [
      { q: 'What is the formula for the number of diagonals in an n-sided polygon?', a: '$\\frac{n(n - 3)}{2}$.', kind: 'state' },
      { q: 'How many diagonals does an octagon (8 sides) have?', a: '$\\frac{8(8 - 3)}{2} = \\frac{8 \\times 5}{2} = 20$.', kind: 'apply' },
      { q: 'Which polygon has the same number of sides as diagonals?', a: 'Pentagon (5 sides and 5 diagonals).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'n വശങ്ങളുള്ള ഒരു ബഹുഭുജത്തിലെ വികർണ്ണങ്ങളുടെ എണ്ണം കാണാനുള്ള സൂത്രവാക്യം എന്താണ്?', a: '$\\frac{n(n - 3)}{2}$.', kind: 'state' },
      { q: 'ഒരു അഷ്ടഭുജത്തിന് (8 വശങ്ങൾ) എത്ര വികർണ്ണങ്ങളുണ്ട്?', a: '$\\frac{8(8 - 3)}{2} = \\frac{8 \\times 5}{2} = 20$.', kind: 'apply' },
      { q: 'വശങ്ങളുടെ എണ്ണവും വികർണ്ണങ്ങളുടെ എണ്ണവും തുല്യമായ ബഹുഭുജം ഏതാണ്?', a: 'പഞ്ചഭുജം (5 വശങ്ങളും 5 വികർണ്ണങ്ങളും).', kind: 'recall' }
    ]
  }
);
