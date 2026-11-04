/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 8: Area of Quadrilaterals (ചതുർഭുജങ്ങളുടെ പരപ്പളവ്)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm8.8.1.general-quad-area',
    sec: '8.8.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Area of a General Quadrilateral',
    title_ml: 'സാധാരണ ചതുർഭുജത്തിന്റെ പരപ്പളവ്',
    oneLine_en: 'A diagonal splits the quadrilateral into two triangles; Area = (1/2) * d * (h1 + h2).',
    oneLine_ml: 'ഒരു വികർണ്ണം ചതുർഭുജത്തെ രണ്ട് ത്രികോണങ്ങളായി വിഭജിക്കുന്നു; പരപ്പളവ് = (1/2) * d * (h1 + h2).',
    statement_en: `<p>Any quadrilateral can be divided into two triangles by drawing a single diagonal.</p>
      <p>Let $d$ be the length of diagonal $AC$, and let $h_1$ and $h_2$ be the perpendicular heights (offsets) from the opposite vertices $B$ and $D$ to this diagonal:</p>
      $$\\text{Area of } ABCD = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ADC)$$
      $$\\text{Area} = \\frac{1}{2} d h_1 + \\frac{1}{2} d h_2 = \\frac{1}{2} d (h_1 + h_2)$$
      <p><b>Rule:</b> The area of a quadrilateral is half the product of the length of a diagonal and the sum of the perpendiculars drawn to it from the opposite vertices.</p>`,
    statement_ml: `<p>ഒരു വികർണ്ണം വരച്ചാൽ ഏതൊരു ചതുർഭുജത്തെയും രണ്ട് ത്രികോണങ്ങളായി വിഭജിക്കാം.</p>
      <p>വികർണ്ണം $AC$-യുടെ നീളം $d$ എന്നും, എതിർമൂലകളായ $B, D$ എന്നിവയിൽ നിന്ന് ഈ വികർണ്ണത്തിലേക്കുള്ള ലംബങ്ങളുടെ നീളം $h_1, h_2$ എന്നും ഇരിക്കട്ടെ:</p>
      $$\\text{ചതുർഭുജം } ABCD\\text{-യുടെ പരപ്പളവ്} = \\text{പരപ്പളവ്}(\\triangle ABC) + \\text{പരപ്പളവ്}(\\triangle ADC)$$
      $$\\text{പരപ്പളവ്} = \\frac{1}{2} d h_1 + \\frac{1}{2} d h_2 = \\frac{1}{2} d (h_1 + h_2)$$
      <p><b>തത്വം:</b> ഒരു ചതുർഭുജത്തിന്റെ പരപ്പളവ്, അതിന്റെ ഒരു വികർണ്ണത്തിന്റെയും എതിർമൂലകളിൽ നിന്ന് ആ വികർണ്ണത്തിലേക്കുള്ള ലംബങ്ങളുടെ തുകയുടെയും ഗുണനഫലത്തിന്റെ പകുതിയാണ്.</p>`,
    intuition_en: `<p>Instead of struggling with four crooked angles, we pin the shape along the diagonal spine and compute the areas of the two triangles sitting on either side.</p>`,
    intuition_ml: `<p>സങ്കീർണ്ണമായ ചതുർഭുജത്തെ വികർണ്ണത്തിലൂടെ രണ്ട് ത്രികോണങ്ങളാക്കി മാറ്റിയാൽ അവയുടെ പരപ്പളവുകൾ കൂട്ടി എളുപ്പത്തിൽ ആകെ പരപ്പളവ് കണ്ടെത്താം.</p>`,
    proof: {
      idea_en: 'Diagonal AC divides quadrilateral ABCD into triangle ABC and triangle ADC.',
      idea_ml: '$AC$ എന്ന വികർണ്ണം $ABCD$ എന്ന ചതുർഭുജത്തെ രണ്ട് ത്രികോണങ്ങളായി മാറ്റുന്നു.',
      why_en: 'The total area is the sum of the areas of the two component triangles.',
      why_ml: 'ആകെ പരപ്പളവ് രണ്ട് ത്രികോണങ്ങളുടെയും പരപ്പളവുകളുടെ തുകയാണ്.',
      rungs_en: [
        { why_en: 'Triangle ABC has base d and height h1.', m: '\\text{Area}(\\triangle ABC) = \\frac{1}{2} d h_1' },
        { why_en: 'Triangle ADC has base d and height h2.', m: '\\text{Area}(\\triangle ADC) = \\frac{1}{2} d h_2' },
        { why_en: 'Total area is the sum of both areas.', m: 'A = \\frac{1}{2} d h_1 + \\frac{1}{2} d h_2' },
        { why_en: 'Factor out (1/2) * d.', m: 'A = \\frac{1}{2} d (h_1 + h_2)' }
      ],
      rungs_ml: [
        { why_ml: '$\triangle ABC$-യുടെ പാദം d-യും ഉയരം h1-ഉം ആണ്.', m: '\\text{പരപ്പളവ്}(\\triangle ABC) = \\frac{1}{2} d h_1' },
        { why_ml: '$\triangle ADC$-യുടെ പാദം d-യും ഉയരം h2-ഉം ആണ്.', m: '\\text{പരപ്പളവ്}(\\triangle ADC) = \\frac{1}{2} d h_2' },
        { why_ml: 'ആകെ പരപ്പളവ് ഇവ രണ്ടിന്റെയും തുകയാണ്.', m: 'A = \\frac{1}{2} d h_1 + \\frac{1}{2} d h_2' },
        { why_ml: '(1/2) * d പൊതുവായി പുറത്തെടുക്കുക.', m: 'A = \\frac{1}{2} d (h_1 + h_2)' }
      ]
    },
    needs: ['m8.6.1.quad-uniqueness'],
    traps_en: [
      'The offsets h1 and h2 must be perpendicular to the diagonal, not the lengths of the side edges!',
      'Make sure both heights are measured to the SAME diagonal.'
    ],
    traps_ml: [
      'h1, h2 എന്നിവ വികർണ്ണത്തിലേക്കുള്ള ലംബദൂരങ്ങളാണ്, വശങ്ങളുടെ നീളമല്ല!',
      'രണ്ട് ലംബങ്ങളും ഒരേ വികർണ്ണത്തിലേക്ക് തന്നെയാണോ വരച്ചിരിക്കുന്നത് എന്ന് ഉറപ്പാക്കുക.'
    ],
    cards_en: [
      { q: 'In a quadrilateral, diagonal is 10 cm and offsets are 3 cm and 5 cm. What is its area?', a: '$\\frac{1}{2} \\times 10 \\times (3 + 5) = 5 \\times 8 = \\mathbf{40\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'What is the formula for the area of a quadrilateral with diagonal d and offsets h₁ and h₂?', a: '$\\text{Area} = \\frac{1}{2} d (h_1 + h_2)$.', kind: 'state' },
      { q: 'Can the diagonal chosen for calculating quadrilateral area be either diagonal?', a: 'Yes, provided the offsets are measured from the other two vertices to THAT chosen diagonal.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു ചതുർഭുജത്തിന്റെ വികർണ്ണം 10 cm ഉം ലംബങ്ങൾ 3 cm, 5 cm ഉം ആയാൽ പരപ്പളവ് എത്ര?', a: '$\\frac{1}{2} \\times 10 \\times (3 + 5) = 5 \\times 8 = \\mathbf{40\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'വികർണ്ണം d-യും ലംബങ്ങൾ h₁, h₂-ഉം ആയ ചതുർഭുജത്തിന്റെ പരപ്പളവ് സൂത്രവാക്യം എന്താണ്?', a: '$\\text{പരപ്പളവ്} = \\frac{1}{2} d (h_1 + h_2)$.', kind: 'state' },
      { q: 'ചതുർഭുജത്തിന്റെ ഏത് വികർണ്ണവും ഇതിനായി ഉപയോഗിക്കാമോ?', a: 'അതെ, തിരഞ്ഞെടുത്ത വികർണ്ണത്തിലേക്ക് തന്നെയായിരിക്കണം എതിർമൂലകളിൽ നിന്നുള്ള ലംബങ്ങൾ.', kind: 'recall' }
    ]
  },

  {
    id: 'm8.8.2.rhombus-area',
    sec: '8.8.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Area of a Rhombus',
    title_ml: 'റോംബസിന്റെ പരപ്പളവ്',
    oneLine_en: 'The area of a rhombus is half the product of its diagonals: Area = (1/2) * d1 * d2.',
    oneLine_ml: 'ഒരു റോംബസിന്റെ പരപ്പളവ് അതിന്റെ വികർണ്ണങ്ങളുടെ ഗുണനഫലത്തിന്റെ പകുതിയാണ്: പരപ്പളവ് = (1/2) * d1 * d2.',
    statement_en: `<p>In a rhombus, the diagonals are perpendicular bisectors of each other.</p>
      <p>Let the two diagonals have lengths $d_1$ and $d_2$. Diagonal $d_1$ splits the rhombus into two congruent triangles, each with base $d_1$ and height $\\frac{d_2}{2}$:</p>
      $$\\text{Area} = 2 \\times \\left(\\frac{1}{2} \\times d_1 \\times \\frac{d_2}{2}\\right) = \\frac{1}{2} d_1 d_2$$
      <p><b>Theorem:</b> The area of a rhombus is equal to half the product of the lengths of its diagonals.</p>
      <p><b>Enclosing Rectangle Relation:</b> A rectangle formed by lines through the vertices parallel to the diagonals has length $d_1$, breadth $d_2$, and area $d_1 d_2$. The rhombus occupies exactly half of this bounding rectangle.</p>`,
    statement_ml: `<p>റോംബസിൽ വികർണ്ണങ്ങൾ പരസ്പരം ലംബമായി സമഭാഗം ചെയ്യുന്നു.</p>
      <p>വികർണ്ണങ്ങളുടെ നീളം $d_1, d_2$ എന്നിരിക്കട്ടെ. $d_1$ എന്ന വികർണ്ണം റോംബസിനെ പാദം $d_1$-ഉം ഉയരം $\\frac{d_2}{2}$-ഉം ആയ രണ്ട് തുല്യ ത്രികോണങ്ങളായി വിഭജിക്കുന്നു:</p>
      $$\\text{പരപ്പളവ്} = 2 \\times \\left(\\frac{1}{2} \\times d_1 \\times \\frac{d_2}{2}\\right) = \\frac{1}{2} d_1 d_2$$
      <p><b>സിദ്ധാന്തം:</b> ഒരു റോംബസിന്റെ പരപ്പളവ് അതിന്റെ വികർണ്ണങ്ങളുടെ ഗുണനഫലത്തിന്റെ പകുതിക്ക് തുല്യമാണ്.</p>
      <p><b>ചതുരവുമായുള്ള ബന്ധം:</b> റോംബസിന്റെ വികർണ്ണങ്ങൾക്ക് സമാന്തരമായി മൂലകളിലൂടെ വരയ്ക്കുന്ന വലിയ ചതുരത്തിന്റെ പരപ്പളവ് $d_1 d_2$ ആണ്. റോംബസിന്റെ പരപ്പളവ് ഇതിന്റെ കൃത്യം പകുതിയായിരിക്കും.</p>`,
    intuition_en: `<p>The two perpendicular diagonals slice the rhombus into 4 congruent right-angled triangles. Each has legs $d_1/2$ and $d_2/2$. Four times their individual area gives $\\frac{1}{2} d_1 d_2$.</p>`,
    intuition_ml: `<p>റോംബസിലെ വികർണ്ണങ്ങൾ അതിനെ 4 തുല്യ മട്ടത്രികോണങ്ങളാക്കുന്നു. ഓരോന്നിന്റെയും പരപ്പളവുകൾ കൂട്ടിയാൽ $\\frac{1}{2} d_1 d_2$ ലഭിക്കും.</p>`,
    proof: {
      idea_en: 'Four congruent right triangles meet at center O.',
      idea_ml: 'മധ്യബിന്ദു O-യിൽ കൂട്ടിമുട്ടുന്ന 4 തുല്യ മട്ടത്രികോണങ്ങൾ ചേർന്നതാണ് റോംബസ്.',
      why_en: 'Each right triangle has area (1/2)*(d1/2)*(d2/2); multiply by 4.',
      why_ml: 'ഒരു മട്ടത്രികോണത്തിന്റെ പരപ്പളവ് (1/2)*(d1/2)*(d2/2) ആണ്; അതിനെ 4 കൊണ്ട് ഗുണിക്കുക.',
      rungs_en: [
        { why_en: 'Diagonals intersect perpendicularly at midpoint O.', m: '\\angle AOB = 90^\\circ' },
        { why_en: 'Legs of right triangle AOB are d1/2 and d2/2.', m: 'OA = \\frac{d_1}{2}, OB = \\frac{d_2}{2}' },
        { why_en: 'Area of one right triangle is (1/2)*(d1/2)*(d2/2).', m: '\\text{Area}(\\triangle AOB) = \\frac{1}{8} d_1 d_2' },
        { why_en: 'Total rhombus area is 4 times one right triangle.', m: 'A = 4 \\times \\left(\\frac{1}{8} d_1 d_2\\right) = \\frac{1}{2} d_1 d_2' }
      ],
      rungs_ml: [
        { why_ml: 'വികർണ്ണങ്ങൾ ലംബമായി സമഭാഗം ചെയ്യുന്നു.', m: '\\angle AOB = 90^\\circ' },
        { why_ml: '$\triangle AOB$-യുടെ ലംബവശങ്ങൾ d1/2, d2/2 ആണ്.', m: 'OA = \\frac{d_1}{2}, OB = \\frac{d_2}{2}' },
        { why_ml: 'ഒരു മട്ടത്രികോണത്തിന്റെ പരപ്പളവ് (1/8) * d1 * d2 ആണ്.', m: '\\text{പരപ്പളവ്}(\\triangle AOB) = \\frac{1}{8} d_1 d_2' },
        { why_ml: 'റോംബസിന്റെ പരപ്പളവ് 4 തുല്യ ത്രികോണങ്ങളുടെ തുകയാണ്.', m: 'A = 4 \\times \\left(\\frac{1}{8} d_1 d_2\\right) = \\frac{1}{2} d_1 d_2' }
      ]
    },
    needs: ['m8.8.1.general-quad-area', 'm8.6.4.special-quadrilaterals'],
    traps_en: [
      'Do not forget the factor of 1/2 in the formula: Area is (1/2)*d1*d2, NOT d1*d2.',
      'If given the side of the rhombus and one diagonal, use the Pythagorean theorem to find the second diagonal first.'
    ],
    traps_ml: [
      'സൂത്രവാക്യത്തിലെ 1/2 മറന്നുപോകരുത്: പരപ്പളവ് (1/2)*d1*d2 ആണ്, d1*d2 അല്ല.',
      'റോംബസിന്റെ വശവും ഒരു വികർണ്ണവുമാണ് നൽകിയിട്ടുള്ളതെങ്കിൽ പൈതഗോറസ് സിദ്ധാന്തം ഉപയോഗിച്ച് രണ്ടാമത്തെ വികർണ്ണം കണ്ട ശേഷം മാത്രമേ പരപ്പളവ് കാണാവൂ.'
    ],
    cards_en: [
      { q: 'The diagonals of a rhombus are 8 cm and 10 cm. What is its area?', a: '$\\frac{1}{2} \\times 8 \\times 10 = \\mathbf{40\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'A square has diagonal 6 cm. Using the rhombus formula, what is its area?', a: 'Since a square is a rhombus with equal diagonals: $\\frac{1}{2} \\times 6 \\times 6 = \\mathbf{18\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'What is the ratio of the area of a rhombus to the area of its bounding rectangle formed by the diagonals?', a: '$1 : 2$ (exactly half).', kind: 'state' }
    ],
    cards_ml: [
      { q: 'വികർണ്ണങ്ങൾ 8 cm, 10 cm ആയ റോംബസിന്റെ പരപ്പളവ് എത്ര?', a: '$\\frac{1}{2} \\times 8 \\times 10 = \\mathbf{40\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'വികർണ്ണം 6 cm ആയ സമചതുരത്തിന്റെ പരപ്പളവ് റോംബസ് സൂത്രവാക്യം ഉപയോഗിച്ച് കാണുക.', a: 'സമചതുരത്തിന്റെ വികർണ്ണങ്ങൾ തുല്യമായതിനാൽ: $\\frac{1}{2} \\times 6 \\times 6 = \\mathbf{18\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'റോംബസിന്റെ പരപ്പളവും വികർണ്ണങ്ങൾ കൊണ്ട് രൂപീകരിക്കുന്ന ചതുരത്തിന്റെ പരപ്പളവും തമ്മിലുള്ള അംശബന്ധം എത്ര?', a: '$1 : 2$ (കൃത്യം പകുതി).', kind: 'state' }
    ]
  },

  {
    id: 'm8.8.3.parallelogram-area',
    sec: '8.8.3',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Area of a Parallelogram',
    title_ml: 'സാമാന്തരികത്തിന്റെ പരപ്പളവ്',
    oneLine_en: 'The area of a parallelogram is the product of its base and perpendicular height: Area = b * h.',
    oneLine_ml: 'ഒരു സാമാന്തരികത്തിന്റെ പരപ്പളവ് പാദത്തിന്റെയും ലംബ ഉയരത്തിന്റെയും ഗുണനഫലമാണ്: പരപ്പളവ് = b * h.',
    statement_en: `<p>A <b>parallelogram</b> has opposite sides parallel and equal.</p>
      <p>Let $b$ be the length of any side chosen as base, and let $h$ be the perpendicular distance (height) between this base and the opposite parallel side:</p>
      $$\\text{Area of Parallelogram} = \\text{Base} \\times \\text{Height} = b \\times h$$
      <p><b>Dissection proof (Cavalieri / Translation):</b><br>
      Drop a perpendicular from one top corner to the base, cutting off a right-angled triangle. Translate this triangle to the opposite side: it fits perfectly onto the other slanted edge, transforming the parallelogram into a rectangle of base $b$ and height $h$. Since area is preserved under translation, $\\text{Area} = b \\times h$.</p>`,
    statement_ml: `<p>എതിർവശങ്ങൾ സമാന്തരവും തുല്യവുമായ ചതുർഭുജമാണ് <b>സാമാന്തരികം</b>.</p>
      <p>പാദത്തിന്റെ നീളം $b$ എന്നും, പാദത്തിൽ നിന്ന് എതിർവശത്തേക്കുള്ള ലംബദൂരം (ഉയരം) $h$ എന്നും ഇരിക്കട്ടെ:</p>
      $$\\text{സാമാന്തരികത്തിന്റെ പരപ്പളവ്} = \\text{പാദം} \\times \\text{ഉയരം} = b \\times h$$
      <p><b>വിഭജന തെളിവ്:</b><br>
      സാമാന്തരികത്തിന്റെ ഒരു മൂലയിൽ നിന്ന് പാദത്തിലേക്ക് ലംബം വരച്ച് മുറിച്ചെടുക്കുന്ന മട്ടത്രികോണം എതിർവശത്ത് ചേർത്തുവെച്ചാൽ $b$ നീളവും $h$ വീതിയുമുള്ള ഒരു ചതുരം ലഭിക്കുന്നു. അതിനാൽ പരപ്പളവ് $= b \\times h$.</p>`,
    intuition_en: `<p>Tilting a stack of playing cards changes their slanted side, but the vertical height and the base stay identical. The total area is unchanged!</p>`,
    intuition_ml: `<p>ചീട്ടുകൾ അടുക്കിവെച്ച ശേഷം ഒരു വശത്തേക്ക് ചരിച്ചാൽ ചരിഞ്ഞ വശത്തിന്റെ നീളം മാറുമെങ്കിലും ലംബ ഉയരവും പാദവും മാറുന്നില്ല. അതിനാൽ വിസ്തീർണ്ണത്തിൽ മാറ്റമില്ല!</p>`,
    proof: {
      idea_en: 'Transform the parallelogram into an equal-area rectangle via perpendicular slice and translation.',
      idea_ml: 'ലംബമായി മുറിച്ച മട്ടത്രികോണം മറുഭാഗത്ത് ചേർത്തുവെച്ച് തുല്യ പരപ്പളവുള്ള ചതുരമാക്കുക.',
      why_en: 'The transformed figure is a rectangle of dimensions b and h.',
      why_ml: 'രൂപം മാറിയത് b നീളവും h വീതിയുമുള്ള ചതുരമാണ്.',
      rungs_en: [
        { why_en: 'Draw perpendicular height h from vertex D to base AB at point E.', m: 'DE \\perp AB, DE = h' },
        { why_en: 'Cut right triangle ADE and translate it to the right.', m: '\\triangle ADE \\to \\triangle BCF' },
        { why_en: 'The resulting figure EFCD is a rectangle with length b and breadth h.', m: 'EF = AB = b, DE = h' },
        { why_en: 'Area of rectangle is length times breadth.', m: 'A = b \\times h' }
      ],
      rungs_ml: [
        { why_ml: 'D-യിൽ നിന്ന് AB-യിലേക്ക് ലംബം DE വരയ്ക്കുക (ഉയരം h).', m: 'DE \\perp AB, DE = h' },
        { why_ml: 'മട്ടത്രികോണം $\triangle ADE$ മുറിച്ച് വലതുവശത്ത് $\triangle BCF$-ലേക്ക് മാറ്റുക.', m: '\\triangle ADE \\to \\triangle BCF' },
        { why_ml: 'ലഭിക്കുന്ന രൂപം $EFCD$ ഒരു ചതുരമാണ് (നീളം b, വീതി h).', m: 'EF = AB = b, DE = h' },
        { why_ml: 'ചതുരത്തിന്റെ പരപ്പളവ് നീളം ഗുണം വീതിയാണ്.', m: 'A = b \\times h' }
      ]
    },
    needs: ['m8.8.1.general-quad-area'],
    traps_en: [
      'The height h must be the PERPENDICULAR distance, NOT the length of the slanted adjacent side!',
      'If side a and adjacent side b are given, area = a * b ONLY when the angle is 90° (a rectangle).'
    ],
    traps_ml: [
      'ഉയരം h എന്നത് ലംബദൂരമാണ്, ചരിഞ്ഞ വശത്തിന്റെ നീളമല്ല!',
      'അടുത്തടുത്ത വശങ്ങൾ തമ്മിൽ നേരിട്ട് ഗുണിച്ചാൽ പരപ്പളവ് ലഭിക്കില്ല (ചതുരത്തിൽ മാത്രമേ അത് ശരിയാകൂ).'
    ],
    cards_en: [
      { q: 'A parallelogram has base 12 cm and perpendicular height 7 cm. What is its area?', a: '$\\text{Area} = 12 \\times 7 = \\mathbf{84\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'If the area of a parallelogram is 96 cm² and base is 8 cm, what is its height?', a: '$h = \\frac{96}{8} = \\mathbf{12\\text{ cm}}$.', kind: 'apply' },
      { q: 'Why is the area of a parallelogram b * h and not base times adjacent side?', a: 'Because the adjacent side is slanted and longer than the perpendicular distance between the parallel lines.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'പാദം 12 cm ഉം ലംബ ഉയരം 7 cm ഉം ആയ സാമാന്തരികത്തിന്റെ പരപ്പളവ് എത്ര?', a: '$\\text{പരപ്പളവ്} = 12 \\times 7 = \\mathbf{84\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'പരപ്പളവ് 96 cm² ഉം പാദം 8 cm ഉം ആയ സാമാന്തരികത്തിന്റെ ഉയരം എത്ര?', a: '$h = \\frac{96}{8} = \\mathbf{12\\text{ cm}}$.', kind: 'apply' },
      { q: 'സാമാന്തരികത്തിന്റെ പരപ്പളവ് കാണാൻ ചരിഞ്ഞ വശത്തിന് പകരം ലംബ ഉയരം എടുക്കുന്നത് എന്തുകൊണ്ട്?', a: 'ചരിഞ്ഞ വശം സമാന്തര വരകൾ തമ്മിലുള്ള ഏറ്റവും കുറഞ്ഞ ലംബദൂരത്തേക്കാൾ നീളമുള്ളതാണ് എന്നതുകൊണ്ട്.', kind: 'recall' }
    ]
  },

  {
    id: 'm8.8.4.trapezium-area',
    sec: '8.8.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Area of a Trapezium',
    title_ml: 'ലംബകത്തിന്റെ പരപ്പളവ്',
    oneLine_en: 'The area of a trapezium is half the product of the distance between parallel sides and the sum of parallel sides: Area = (1/2) * h * (a + b).',
    oneLine_ml: 'ലംബകത്തിന്റെ പരപ്പളവ്, സമാന്തര വശങ്ങളുടെ തുകയുടെയും അവ തമ്മിലുള്ള ലംബദൂരത്തിന്റെയും ഗുണനഫലത്തിന്റെ പകുതിയാണ്: പരപ്പളവ് = (1/2) * h * (a + b).',
    statement_en: `<p>A <b>trapezium</b> (ലംബകം) is a quadrilateral with one pair of opposite sides parallel.</p>
      <p>Let the lengths of the two parallel sides be $a$ and $b$, and let the perpendicular distance between them be $h$:</p>
      <p>A diagonal divides the trapezium into two triangles:</p>
      <ul>
        <li>First triangle has base $a$ and height $h$: $\\text{Area}_1 = \\frac{1}{2} a h$.</li>
        <li>Second triangle has base $b$ and height $h$: $\\text{Area}_2 = \\frac{1}{2} b h$.</li>
      </ul>
      $$\\text{Total Area} = \\frac{1}{2} a h + \\frac{1}{2} b h = \\frac{1}{2} h (a + b)$$
      <p><b>Alternative interpretation:</b> $\\text{Area} = \\left(\\frac{a + b}{2}\\right) \\times h$.<br>
      The area is equal to the <b>average of the parallel sides</b> multiplied by the height.</p>`,
    statement_ml: `<p>ഒരു ജോടി എതിർവശങ്ങൾ മാത്രം സമാന്തരമായ ചതുർഭുജമാണ് <b>ലംബകം</b>.</p>
      <p>സമാന്തര വശങ്ങളുടെ നീളങ്ങൾ $a, b$ എന്നും, അവ തമ്മിലുള്ള ലംബദൂരം (ഉയരം) $h$ എന്നും ഇരിക്കട്ടെ:</p>
      <p>ഒരു വികർണ്ണം ലംബകത്തെ രണ്ട് ത്രികോണങ്ങളായി വിഭജിക്കുന്നു:</p>
      <ul>
        <li>ആദ്യ ത്രികോണത്തിന്റെ പാദം $a$-യും ഉയരം $h$-ഉം: $\\text{പരപ്പളവ്}_1 = \\frac{1}{2} a h$.</li>
        <li>രണ്ടാം ത്രികോണത്തിന്റെ പാദം $b$-യും ഉയരം $h$-ഉം: $\\text{പരപ്പളവ്}_2 = \\frac{1}{2} b h$.</li>
      </ul>
      $$\\text{ആകെ പരപ്പളവ്} = \\frac{1}{2} a h + \\frac{1}{2} b h = \\frac{1}{2} h (a + b)$$
      <p><b>മറ്റൊരു രീതി:</b> $\\text{പരപ്പളവ്} = \\left(\\frac{a + b}{2}\\right) \\times h$.<br>
      സമാന്തര വശങ്ങളുടെ <b>ശരാശരിയെ</b> ഉയരം കൊണ്ട് ഗുണിച്ചാൽ ലംബകത്തിന്റെ പരപ്പളവ് ലഭിക്കും.</p>`,
    intuition_en: `<p>If you glue an inverted identical trapezium next to the first one, they form a large parallelogram of base $a + b$ and height $h$. The trapezium is exactly half of this parallelogram.</p>`,
    intuition_ml: `<p>ഒരു ലംബകത്തിന് നേരെ തിരിച്ചുവെച്ച അതേ അളവുകളുള്ള മറ്റൊരു ലംബകം ചേർത്തുവെച്ചാൽ $a + b$ പാദവും $h$ ഉയരവുമുള്ള ഒരു വലിയ സാമാന്തരികം ലഭിക്കും. ലംബകത്തിന്റെ പരപ്പളവ് ഇതിന്റെ പകുതിയാണ്.</p>`,
    proof: {
      idea_en: 'Two identical trapeziums placed opposite form a parallelogram of base (a + b) and height h.',
      idea_ml: 'രണ്ട് തുല്യ ലംബകങ്ങൾ ചേർത്തുവെച്ചാൽ പാദം (a + b) ആയ സാമാന്തരികം ലഭിക്കുന്നു.',
      why_en: 'The area of the trapezium is half of the combined parallelogram.',
      why_ml: 'ലംബകത്തിന്റെ പരപ്പളവ് ഈ സാമാന്തരികത്തിന്റെ പകുതിയായിരിക്കും.',
      rungs_en: [
        { why_en: 'Consider trapezium ABCD with parallel sides AB = a and CD = b.', m: 'AB \\parallel CD' },
        { why_en: 'Make an identical inverted copy of the trapezium.', m: 'A_{\\text{copy}} = A' },
        { why_en: 'Join them along the slanted side to form a parallelogram of base (a + b) and height h.', m: 'B_{\\text{para}} = a + b, H = h' },
        { why_en: 'Parallelogram area is base times height.', m: 'A_{\\text{para}} = (a + b)h' },
        { why_en: 'One trapezium is half the parallelogram.', m: 'A = \\frac{1}{2} h (a + b)' }
      ],
      rungs_ml: [
        { why_ml: 'സമാന്തര വശങ്ങൾ a, b ആയ ലംബകം $ABCD$ പരിഗണിക്കുക.', m: 'AB \\parallel CD' },
        { why_ml: 'ഇതേ അളവുകളുള്ള മറ്റൊരു ലംബകം തലതിരിച്ച് എടുക്കുക.', m: 'A_{\\text{copy}} = A' },
        { why_ml: 'ചരിഞ്ഞ വശങ്ങളിലൂടെ ചേർത്തുവെച്ചാൽ പാദം (a + b) ആയ സാമാന്തരികം ലഭിക്കും.', m: 'B_{\\text{para}} = a + b, H = h' },
        { why_ml: 'സാമാന്തരികത്തിന്റെ പരപ്പളവ് പാദം ഗുണം ഉയരമാണ്.', m: 'A_{\\text{para}} = (a + b)h' },
        { why_ml: 'ഒരു ലംബകത്തിന്റെ പരപ്പളവ് ഇതിന്റെ പകുതിയാണ്.', m: 'A = \\frac{1}{2} h (a + b)' }
      ]
    },
    needs: ['m8.8.1.general-quad-area', 'm8.8.3.parallelogram-area'],
    traps_en: [
      'The sides a and b MUST be the two parallel sides, NOT the non-parallel legs!',
      'The height h must be the perpendicular distance between the parallel lines, not the length of a non-parallel leg.'
    ],
    traps_ml: [
      'a, b എന്നിവ സമാന്തര വശങ്ങൾ തന്നെയായിരിക്കണം, ചരിഞ്ഞ വശങ്ങളാകരുത്!',
      'ഉയരം h എന്നത് സമാന്തര വരകൾക്കിടയിലെ ലംബദൂരമാണ്, ചരിഞ്ഞ വശത്തിന്റെ നീളമല്ല.'
    ],
    cards_en: [
      { q: 'The parallel sides of a trapezium are 10 cm and 14 cm, and the distance between them is 5 cm. What is its area?', a: '$\\frac{1}{2} \\times 5 \\times (10 + 14) = \\frac{5 \\times 24}{2} = 5 \\times 12 = \\mathbf{60\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'What is the formula for the area of a trapezium with parallel sides a, b and height h?', a: '$\\text{Area} = \\frac{1}{2} h (a + b)$.', kind: 'state' },
      { q: 'Why does an inverted duplicate trapezium produce a parallelogram of base a + b?', a: 'Because placing the top side a next to bottom side b makes the total base a + b and opposite side b + a.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'സമാന്തര വശങ്ങൾ 10 cm, 14 cm ഉം ഉയരം 5 cm ഉം ആയ ലംബകത്തിന്റെ പരപ്പളവ് എത്ര?', a: '$\\frac{1}{2} \\times 5 \\times (10 + 14) = \\frac{5 \\times 24}{2} = \\mathbf{60\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'സമാന്തര വശങ്ങൾ a, b ഉം ഉയരം h-ഉം ആയ ലംബകത്തിന്റെ പരപ്പളവ് കാണാനുള്ള സമവാക്യം ഏതാണ്?', a: '$\\text{പരപ്പളവ്} = \\frac{1}{2} h (a + b)$.', kind: 'state' },
      { q: 'രണ്ട് ലംബകങ്ങൾ ചേർത്തുവെക്കുമ്പോൾ സാമാന്തരികത്തിന്റെ പാദം a + b ആകുന്നത് എന്തുകൊണ്ട്?', a: 'ഒരു ലംബകത്തിന്റെ താഴത്തെ വശമായ a-യോട് അടുത്തതിന്റെ വശമായ b ചേർന്നുവരുന്നതുകൊണ്ട്.', kind: 'recall' }
    ]
  }
);
