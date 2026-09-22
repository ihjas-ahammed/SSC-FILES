/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 1: Area (പരപ്പളവ്)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm9.1.1.triangles-same-base-parallels',
    sec: '9.1.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Triangles on the Same Base Between Parallel Lines',
    title_ml: 'ഒരേ പാദത്തിലും ഒരേ സമാന്തരവരകൾക്കിടയിലുമുള്ള ത്രികോണങ്ങൾ',
    oneLine_en: 'Triangles having the same base and lying between the same two parallel lines have strictly equal areas.',
    oneLine_ml: 'ഒരേ പാദവും ഒരേ സമാന്തരവരകൾക്കിടയിലുമുള്ള ത്രികോണങ്ങളുടെ പരപ്പളവുകൾ തുല്യമായിരിക്കും.',
    statement_en: `<p>Let two triangles $\\triangle ABC$ and $\\triangle ABD$ share the same base $AB$, and let their third vertices $C$ and $D$ lie on a line $l$ that is parallel to the base line $AB$ ($l \\parallel AB$).</p>
      $$\\mathbf{\\text{Area}(\\triangle ABC) = \\text{Area}(\\triangle ABD)}$$
      <p><b>Reason:</b> The area of any triangle is given by:</p>
      $$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} b h$$
      <p>Because the lines are parallel, the perpendicular distance $h$ from line $l$ to base $AB$ is constant at every point. Since both triangles have the identical base $b = AB$ and identical height $h$, their areas are strictly equal.</p>
      <p><b>Shearing Principle (Vertex Sliding):</b> If the top vertex of a triangle is slid continuously along any line parallel to its base, the shape of the triangle changes but its <b>area remains invariant</b>.</p>`,
    statement_ml: `<p>$\\triangle ABC, \\triangle ABD$ എന്നീ രണ്ട് ത്രികോണങ്ങൾക്ക് $AB$ എന്ന ഒരേ പാദമാണുള്ളതെന്നും, അവയുടെ മൂന്നാമത്തെ ശീർഷങ്ങളായ $C, D$ എന്നിവ പാദത്തിന് സമാന്തരമായ $l$ എന്ന വരയിലാണ് സ്ഥിതിചെയ്യുന്നതെന്നും ($l \\parallel AB$) കരുതുക.</p>
      $$\\mathbf{\\text{Area}(\\triangle ABC) = \\text{Area}(\\triangle ABD)}$$
      <p><b>കാരണം:</b> ഏതൊരു ത്രികോണത്തിന്റെയും പരപ്പളവ്:</p>
      $$\\text{പരപ്പളവ്} = \\frac{1}{2} \\times \\text{പാദം} \\times \\text{ഉയരം} = \\frac{1}{2} b h$$
      <p>വരകൾ സമാന്തരമായതിനാൽ, $l$-ൽ നിന്ന് പാദമായ $AB$-യിലേക്കുള്ള ലംബദൂരം ($h$) എല്ലായിടത്തും തുല്യമായിരിക്കും. രണ്ട് ത്രികോണങ്ങൾക്കും ഒരേ പാദവും ($b$) ഒരേ ഉയരവും ($h$) ഉള്ളതിനാൽ അവയുടെ പരപ്പളവുകൾ തുല്യമായിരിക്കും.</p>
      <p><b>ശീർഷം നീക്കൽ തത്വം:</b> ഒരു ത്രികോണത്തിന്റെ ഒരു ശീർഷത്തെ എതിർവശത്തിന് (പാദത്തിന്) സമാന്തരമായ വരയിലൂടെ എങ്ങോട്ട് നീക്കിയാലും രൂപം മാറാമെങ്കിലും അതിന്റെ <b>പരപ്പളവ് മാറാതെ നിൽക്കും</b>.</p>`,
    intuition_en: `<p>Think of leaning a stack of paper: slanting the stack shifts the top edge parallel to the table, but the total volume and face area of each slice remain completely unchanged.</p>`,
    intuition_ml: `<p>മേശപ്പുറത്തിരിക്കുന്ന ചതുരക്കടലാസ് കെട്ട് ഒരുവശത്തേക്ക് ചരിഞ്ഞുപോയാലും അതിന്റെ കനമോ ആകെ പരപ്പളവോ മാറാത്തതുപോലെയാണ് സമാന്തരവരയിലൂടെ ശീർഷം നീക്കുമ്പോഴുള്ള പരപ്പളവ് സ്ഥിരത.</p>`,
    proof: {
      idea_en: 'Perpendicular distance between parallel lines is constant, giving identical altitude for both triangles.',
      idea_ml: 'സമാന്തരവരകൾ തമ്മിലുള്ള ലംബദൂരം സ്ഥിരമായതിനാൽ രണ്ട് ത്രികോണങ്ങളുടെയും ലംബ ഉയരം ഒന്നായിരിക്കും.',
      why_en: 'Area formula Area = 1/2 * b * h depends only on base and perpendicular height.',
      why_ml: 'പരപ്പളവ് = 1/2 * പാദം * ഉയരം എന്ന സൂത്രവാക്യത്തിൽ പാദവും ലംബ ഉയരവും മാത്രമേ സ്വാധീനിക്കുന്നുള്ളൂ.',
      rungs_en: [
        { why_en: 'Draw perpendicular heights from C and D to line AB.', m: 'h_C \\perp AB, \\quad h_D \\perp AB' },
        { why_en: 'Since line CD is parallel to line AB.', m: 'h_C = h_D = h' },
        { why_en: 'Compute areas using the triangle area formula.', m: '\\text{Area}(\\triangle ABC) = \\frac{1}{2} AB \\cdot h_C = \\frac{1}{2} AB \\cdot h' },
        { why_en: 'Compare with triangle ABD.', m: '\\text{Area}(\\triangle ABD) = \\frac{1}{2} AB \\cdot h_D = \\frac{1}{2} AB \\cdot h' },
        { why_en: 'Conclude equality.', m: '\\text{Area}(\\triangle ABC) = \\text{Area}(\\triangle ABD)' }
      ],
      rungs_ml: [
        { why_ml: 'C, D എന്നിവയിൽ നിന്ന് AB-യിലേക്ക് ലംബ ഉയരങ്ങൾ വരയ്ക്കുന്നു.', m: 'h_C \\perp AB, \\quad h_D \\perp AB' },
        { why_ml: 'വര CD വര AB-ക്ക് സമാന്തരമായതിനാൽ.', m: 'h_C = h_D = h' },
        { why_ml: '$\triangle ABC$-യുടെ പരപ്പളവ് കാണുന്നു.', m: '\\text{Area}(\\triangle ABC) = \\frac{1}{2} AB \\cdot h' },
        { why_ml: '$\triangle ABD$-യുടെ പരപ്പളവ് കാണുന്നു.', m: '\\text{Area}(\\triangle ABD) = \\frac{1}{2} AB \\cdot h' },
        { why_ml: 'ഇരുവരുടെയും പരപ്പളവ് തുല്യമാണെന്ന് തെളിയുന്നു.', m: '\\text{Area}(\\triangle ABC) = \\text{Area}(\\triangle ABD)' }
      ]
    },
    needs: ['m8.12.1.parallel-lines-transversal', 'p.3.4'],
    traps_en: [
      'The triangles must share the SAME base (or bases of equal length) and lie between the SAME parallel lines.',
      'Slant sides can be completely different; equal area does NOT imply congruent or equal perimeter.'
    ],
    traps_ml: [
      'ത്രികോണങ്ങൾക്ക് ഒരേ പാദവും ഒരേ സമാന്തരവരകളും ആയിരിക്കണം.',
      'പരപ്പളവ് തുല്യമായതുകൊണ്ട് ത്രികോണങ്ങൾ തുല്യമാകണമെന്നോ ചുറ്റളവ് തുല്യമാകണമെന്നോ ഇല്ല.'
    ],
    cards_en: [
      { q: 'Two triangles have the same base and lie between the same parallel lines. What is the relation between their areas?', a: 'Their areas are strictly equal.', kind: 'recall' },
      { q: 'If base = 8 cm and the perpendicular distance between parallel lines is 5 cm, what is the area of any triangle on this base?', a: '$\\text{Area} = \\frac{1}{2} \\times 8 \\times 5 = \\mathbf{20\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'What happens to the area of a triangle if its top vertex is slid along a line parallel to its base?', a: 'The area remains unchanged (constant).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരേ പാദത്തിലും ഒരേ സമാന്തരവരകൾക്കിടയിലുമുള്ള രണ്ട് ത്രികോണങ്ങളുടെ പരപ്പളവുകൾ തമ്മിലുള്ള ബന്ധം എന്താണ്?', a: 'അവയുടെ പരപ്പളവുകൾ തുല്യമായിരിക്കും.', kind: 'recall' },
      { q: 'പാദം 8 cm-ഉം സമാന്തരവരകൾ തമ്മിലുള്ള ലംബദൂരം 5 cm-ഉം ആയാൽ ഈ പാദത്തിലുള്ള ഏതൊരു ത്രികോണത്തിന്റെയും പരപ്പളവ് എത്ര?', a: '$\\text{പരപ്പളവ്} = \\frac{1}{2} \\times 8 \\times 5 = \\mathbf{20\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'ഒരു ത്രികോണത്തിന്റെ ശീർഷം പാദത്തിന് സമാന്തരമായ വരയിലൂടെ നീക്കിയാൽ പരപ്പളവിന് എന്ത് മാറ്റം വരും?', a: 'പരപ്പളവ് മാറാതെ സ്ഥിരമായി നിൽക്കും.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.1.2.triangles-same-height-base-split',
    sec: '9.1.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Triangles with Same Height & Area-Base Proportionality',
    title_ml: 'തുല്യ ഉയരമുള്ള ത്രികോണങ്ങളും പാദങ്ങളുടെ അംശബന്ധവും',
    oneLine_en: 'If two triangles share a common vertex and their bases lie on the same line, their areas are directly proportional to their base lengths.',
    oneLine_ml: 'ഒരു ശീർഷം പൊതുവായി വരുകയും പാദങ്ങൾ ഒരേ വരയിലാവുകയും ചെയ്യുന്ന രണ്ട് ത്രികോണങ്ങളുടെ പരപ്പളവുകളുടെ അംശബന്ധം അവയുടെ പാദങ്ങളുടെ അംശബന്ധത്തിന് തുല്യമാണ്.',
    statement_en: `<p>Let a line from vertex $A$ of $\\triangle ABC$ meet base $BC$ at point $D$. This line divides $\\triangle ABC$ into two sub-triangles: $\\triangle ABD$ and $\\triangle ADC$.</p>
      <p>Both sub-triangles share the same vertex $A$, and their bases $BD$ and $DC$ lie on the same straight line. Therefore, they have the <b>identical perpendicular height</b> $h$ drawn from $A$ to line $BC$.</p>
      $$\\frac{\\text{Area}(\\triangle ABD)}{\\text{Area}(\\triangle ADC)} = \\frac{\\frac{1}{2} \\times BD \\times h}{\\frac{1}{2} \\times DC \\times h} = \\mathbf{\\frac{BD}{DC}}$$
      <p><b>Important Corollaries:</b></p>
      <ul>
        <li><b>Median divides area equally:</b> If $AD$ is a median, then $BD = DC$, so $\\text{Area}(\\triangle ABD) = \\text{Area}(\\triangle ADC) = \\frac{1}{2}\\text{Area}(\\triangle ABC)$.</li>
        <li><b>General Base Division:</b> If $D$ divides $BC$ in the ratio $m : n$, then the areas of the two triangles are in the ratio $m : n$.</li>
      </ul>`,
    statement_ml: `<p>$\\triangle ABC$-യുടെ $A$ എന്ന ശീർഷത്തിൽ നിന്ന് വരയ്ക്കുന്ന ഒരു വര $BC$ എന്ന പാദത്തെ $D$-ൽ ഖണ്ഡിക്കുന്നുവെന്നിരിക്കട്ടെ. ഇത് ത്രികോണത്തെ $\\triangle ABD, \\triangle ADC$ എന്നീ രണ്ട് ത്രികോണങ്ങളായി ഭാഗിക്കുന്നു.</p>
      <p>ഈ രണ്ട് ത്രികോണങ്ങൾക്കും $A$ എന്ന പൊതുശീർഷമാണുള്ളത്, കൂടാതെ അവയുടെ പാദങ്ങളായ $BD, DC$ എന്നിവ ഒരേ നേർവരയിലാണ്. അതിനാൽ, $A$-യിൽ നിന്നുള്ള ലംബ ഉയരം ($h$) രണ്ട് ത്രികോണങ്ങൾക്കും <b>ഒന്നുതന്നെയായിരിക്കും</b>.</p>
      $$\\frac{\\text{Area}(\\triangle ABD)}{\\text{Area}(\\triangle ADC)} = \\frac{\\frac{1}{2} \\times BD \\times h}{\\frac{1}{2} \\times DC \\times h} = \\mathbf{\\frac{BD}{DC}}$$
      <p><b>പ്രധാന അനുമാനങ്ങൾ:</b></p>
      <ul>
        <li><b>മധ്യരേഖ പരപ്പളവിനെ തുല്യമായി ഭാഗിക്കുന്നു:</b> $AD$ ഒരു മധ്യരേഖയാണെങ്കിൽ $BD = DC$ ആണ്; അതിനാൽ $\\text{Area}(\\triangle ABD) = \\text{Area}(\\triangle ADC) = \\frac{1}{2}\\text{Area}(\\triangle ABC)$ ആയിരിക്കും.</li>
        <li><b>പൊതു അംശബന്ധ വിഭജനം:</b> പാദത്തെ $D$ എന്ന ബിന്ദു $m : n$ എന്ന അംശബന്ധത്തിലാണ് ഭാഗിക്കുന്നതെങ്കിൽ, ത്രികോണങ്ങളുടെ പരപ്പളവുകളുടെ അംശബന്ധവും $m : n$ ആയിരിക്കും.</li>
      </ul>`,
    intuition_en: `<p>Slicing a triangular cake with straight cuts from the apex point to the flat base: the size of each slice is purely determined by the width of its base slice.</p>`,
    intuition_ml: `<p>ഒരു ത്രികോണ കേക്ക് അതിന്റെ മുകളിലെ ശീർഷത്തിൽ നിന്ന് അടിത്തട്ടിലേക്ക് നേരെ മുറിക്കുമ്പോൾ, ഓരോ കഷ്ണത്തിന്റെയും വലിപ്പം അടിത്തട്ടിലെ വീതിക്ക് ആനുപാതികമായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Both triangles share the same altitude line dropped from the common vertex to the shared baseline.',
      idea_ml: 'പൊതു ശീർഷത്തിൽ നിന്ന് ഒരേ പാദവരയിലേക്കുള്ള ലംബം ഒന്നായതിനാൽ ഉയരം ക്യാൻസൽ ആയി പാദങ്ങളുടെ അനുപാതം മാത്രം അവശേഷിക്കുന്നു.',
      why_en: 'The common factor 1/2 * h cancels from numerator and denominator.',
      why_ml: '1/2 * h എന്ന പൊതു ഘടകം അംശത്തിൽ നിന്നും ഛേദത്തിൽ നിന്നും ഇല്ലാതാകുന്നു.',
      rungs_en: [
        { why_en: 'Altitude from A perpendicular to baseline BC is h.', m: 'h_A \\perp BC' },
        { why_en: 'Compute area of left triangle ABD.', m: 'A_1 = \\frac{1}{2} \\times BD \\times h' },
        { why_en: 'Compute area of right triangle ADC.', m: 'A_2 = \\frac{1}{2} \\times DC \\times h' },
        { why_en: 'Take ratio of the two areas.', m: '\\frac{A_1}{A_2} = \\frac{\\frac{1}{2} BD \\cdot h}{\\frac{1}{2} DC \\cdot h} = \\frac{BD}{DC}' }
      ],
      rungs_ml: [
        { why_ml: 'A-യിൽ നിന്നും പാദവരയിലേക്കുള്ള ലംബ ഉയരം h ആണ്.', m: 'h_A \\perp BC' },
        { why_ml: 'ഇടതുവശത്തെ $\triangle ABD$-യുടെ പരപ്പളവ്.', m: 'A_1 = \\frac{1}{2} \\times BD \\times h' },
        { why_ml: 'വലതുവശത്തെ $\triangle ADC$-യുടെ പരപ്പളവ്.', m: 'A_2 = \\frac{1}{2} \\times DC \\times h' },
        { why_ml: 'രണ്ട് പരപ്പളവുകളുടെ അംശബന്ധം എടുക്കുന്നു.', m: '\\frac{A_1}{A_2} = \\frac{\\frac{1}{2} BD \\cdot h}{\\frac{1}{2} DC \\cdot h} = \\frac{BD}{DC}' }
      ]
    },
    needs: ['m9.1.1.triangles-same-base-parallels'],
    traps_en: [
      'The bases must lie on the EXACT SAME straight line for the altitudes to be identical.',
      'The median divides AREA into two equal halves, but does NOT necessarily bisect the vertex angle.'
    ],
    traps_ml: [
      'രണ്ട് പാദങ്ങളും ഒരേ നേർവരയിൽ തന്നെ ആയിരിക്കണം.',
      'മധ്യരേഖ പരപ്പളവിനെ പകുതിയാക്കുന്നു, എന്നാൽ അത് ശീർഷകോണിനെ പകുതിയാക്കണമെന്നില്ല.'
    ],
    cards_en: [
      { q: 'A line from vertex A divides base BC in the ratio 2 : 3. What is the ratio of areas of the two triangles?', a: 'The area ratio is also $2 : 3$.', kind: 'recall' },
      { q: 'In triangle ABC of area 60 sq cm, D is the midpoint of BC. What is the area of triangle ABD?', a: '$\\text{Area} = \\frac{60}{2} = \\mathbf{30\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'If BD = 4 cm and DC = 6 cm, and Area(ABD) = 20 sq cm, what is Area(ADC)?', a: '$\\frac{\\text{Area}(ADC)}{20} = \\frac{6}{4} \\implies \\text{Area}(ADC) = \\frac{6 \\times 20}{4} = \\mathbf{30\\text{ cm}^2}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ത്രികോണത്തിന്റെ പാദത്തെ 2 : 3 എന്ന അംശബന്ധത്തിൽ ഭാഗിച്ചാൽ ഉണ്ടാകുന്ന ത്രികോണങ്ങളുടെ പരപ്പളവുകളുടെ അംശബന്ധം എത്ര?', a: 'പരപ്പളവുകളുടെ അംശബന്ധവും $2 : 3$ ആയിരിക്കും.', kind: 'recall' },
      { q: 'പരപ്പളവ് 60 ച.സെ.മീ ആയ ത്രികോണത്തിന്റെ ഒരു മധ്യരേഖ അതിനെ ഭാഗിക്കുമ്പോൾ കിട്ടുന്ന ഒരു ത്രികോണത്തിന്റെ പരപ്പളവ് എത്ര?', a: '$\\frac{60}{2} = \\mathbf{30\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'BD = 4 cm, DC = 6 cm, Area(ABD) = 20 ച.സെ.മീ ആയാൽ Area(ADC) എത്ര?', a: '$\\frac{6}{4} \\times 20 = \\mathbf{30\\text{ cm}^2}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm9.1.3.transforming-quadrilaterals',
    sec: '9.1.3',
    kind: 'method',
    tier: 'core',
    title_en: 'Transforming Quadrilaterals into Triangles of Equal Area',
    title_ml: 'ചതുർഭുജത്തെ തുല്യപരപ്പളവുള്ള ത്രികോണമാക്കൽ',
    oneLine_en: 'Any convex quadrilateral can be converted into a single triangle of identical area by drawing a diagonal and shifting a vertex along a parallel line.',
    oneLine_ml: 'ഒരു ചതുർഭുജത്തിന്റെ വികർണ്ണത്തിന് സമാന്തരമായി വര വരച്ച് ശീർഷം നീക്കുന്നതിലൂടെ അതേ പരപ്പളവുള്ള ത്രികോണമാക്കി മാറ്റാം.',
    statement_en: `<p>Every convex quadrilateral $ABCD$ can be transformed into a triangle of <b>strictly equal area</b> using the principle of triangles on the same base between parallel lines:</p>
      <ol>
        <li>Draw diagonal $AC$ dividing the quadrilateral into $\\triangle ABC$ and $\\triangle ACD$.</li>
        <li>Through vertex $D$, draw a straight line <b>parallel to diagonal $AC$</b>.</li>
        <li>Extend base side $AB$ to intersect this parallel line at point $E$.</li>
        <li>Join $E$ to $C$. This forms the triangle $\\triangle EBC$.</li>
      </ol>
      <p><b>Proof of Equal Area:</b></p>
      $$\\text{Triangles } \\triangle ACD \\text{ and } \\triangle ACE \\text{ share the same base } AC \\text{ and lie between parallels } AC \\parallel DE.$$
      $$\\implies \\text{Area}(\\triangle ACD) = \\text{Area}(\\triangle ACE)$$
      $$\\text{Area}(\\text{quadrilateral } ABCD) = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACD)$$
      $$= \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACE) = \\mathbf{\\text{Area}(\\triangle EBC)}$$`,
    statement_ml: `<p>സമാന്തരവരകൾക്കിടയിലെ ത്രികോണങ്ങളുടെ തത്വമുപയോഗിച്ച് ഏതൊരു ചതുർഭുജം $ABCD$-യെയും <b>അതേ പരപ്പളവുള്ള ഒരു ത്രികോണമാക്കി</b> മാറ്റാം:</p>
      <ol>
        <li>$AC$ എന്ന വികർണ്ണം വരയ്ക്കുക; ഇത് ചതുർഭുജത്തെ $\\triangle ABC, \\triangle ACD$ എന്നീ രണ്ട് ത്രികോണങ്ങളാക്കുന്നു.</li>
        <li>$D$ എന്ന ശീർഷത്തിലൂടെ <b>വികർണ്ണം $AC$-ക്ക് സമാന്തരമായി</b> ഒരു വര വരയ്ക്കുക.</li>
        <li>പാദവശമായ $AB$ നീട്ടി ഈ സമാന്തരവരയെ $E$ എന്ന ബിന്ദുവിൽ കൂട്ടിമുട്ടിക്കുക.</li>
        <li>$E$-യെയും $C$-യെയും തമ്മിൽ യോജിപ്പിക്കുക. ഇത് $\\triangle EBC$ എന്ന പുതിയ ത്രികോണം നൽകുന്നു.</li>
      </ol>
      <p><b>പരപ്പളവ് തുല്യമാണെന്നതിന്റെ തെളിവ്:</b></p>
      $$\\triangle ACD, \\triangle ACE \\text{ എന്നിവയ്ക്ക് } AC \\text{ എന്ന ഒരേ പാദമാണുള്ളത്; അവ } AC \\parallel DE \\text{ എന്ന സമാന്തരവരകൾക്കിടയിലാണ്.}$$
      $$\\implies \\text{Area}(\\triangle ACD) = \\text{Area}(\\triangle ACE)$$
      $$\\text{Area}(\\text{ചതുർഭുജം } ABCD) = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACD)$$
      $$= \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACE) = \\mathbf{\\text{Area}(\\triangle EBC)}$$`,
    intuition_en: `<p>Shearing the upper triangle ACD into triangle ACE over the common diagonal hinge AC swaps the triangular part without adding or removing any area.</p>`,
    intuition_ml: `<p>വികർണ്ണം $AC$ എന്ന പൊതുവര നിലനിർത്തി മുകളിലെ ത്രികോണം $\triangle ACD$-യെ സമാന്തരവരയിലൂടെ നീക്കി $\triangle ACE$ ആക്കുമ്പോൾ ചതുർഭുജത്തിന്റെ മൊത്തം പരപ്പളവ് ഒട്ടും മാറാതെ ത്രികോണമായി മാറുന്നു.</p>`,
    proof: {
      idea_en: 'Decompose quadrilateral into triangle ABC plus ACD, then replace ACD with triangle ACE of identical area.',
      idea_ml: 'ചതുർഭുജത്തെ രണ്ട് ത്രികോണങ്ങളാക്കി വിഭജിച്ച് ഒരു ത്രികോണത്തെ അതേ പരപ്പളവുള്ള മറ്റൊരു ത്രികോണം കൊണ്ട് പ്രതിസ്ഥാപിക്കുന്നു.',
      why_en: 'Adding equal areas to the shared triangle ABC maintains overall equality.',
      why_ml: 'പൊതുവായ ത്രികോണം $\triangle ABC$-യോട് തുല്യ പരപ്പളവുകൾ കൂട്ടുമ്പോൾ ആകെത്തുക തുല്യമായിരിക്കും.',
      rungs_en: [
        { why_en: 'ACD and ACE share base AC and lie between parallels AC and DE.', m: '\\text{Area}(\\triangle ACD) = \\text{Area}(\\triangle ACE)' },
        { why_en: 'Area of quadrilateral ABCD is sum of components.', m: '\\text{Area}(ABCD) = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACD)' },
        { why_en: 'Substitute equal area.', m: '\\text{Area}(ABCD) = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACE)' },
        { why_en: 'Combined adjacent triangles form triangle EBC.', m: '\\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACE) = \\text{Area}(\\triangle EBC)' }
      ],
      rungs_ml: [
        { why_ml: '$\triangle ACD, \triangle ACE$ എന്നിവ ഒരേ പാദത്തിലും സമാന്തരവരകൾക്കിടയിലുമാണ്.', m: '\\text{Area}(\\triangle ACD) = \\text{Area}(\\triangle ACE)' },
        { why_ml: 'ചതുർഭുജം $ABCD$-യുടെ പരപ്പളവ് രണ്ട് ത്രികോണങ്ങളുടെ തുകയാണ്.', m: '\\text{Area}(ABCD) = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACD)' },
        { why_ml: 'തുല്യ പരപ്പളവ് പ്രതിസ്ഥാപിക്കുന്നു.', m: '\\text{Area}(ABCD) = \\text{Area}(\\triangle ABC) + \\text{Area}(\\triangle ACE)' },
        { why_ml: 'ചേർന്ന് പുതിയ വലിയ ത്രികോണം $\triangle EBC$ ഉണ്ടാകുന്നു.', m: '\\text{Area}(ABCD) = \\text{Area}(\\triangle EBC)' }
      ]
    },
    needs: ['m9.1.1.triangles-same-base-parallels'],
    traps_en: [
      'The parallel line must be drawn through D parallel to DIAGONAL AC, not parallel to side BC.',
      'Extend the base side AB, not any random side, to meet the parallel line.'
    ],
    traps_ml: [
      'സമാന്തരവര വരയ്ക്കേണ്ടത് വികർണ്ണമായ $AC$-ക്ക് സമാന്തരമായാണ്, വശമായ $BC$-ക്കല്ല.',
      'പാദവശമായ $AB$ ആണ് സമാന്തരവരയിലേക്ക് നീട്ടി വരയ്ക്കേണ്ടത്.'
    ],
    cards_en: [
      { q: 'In transforming quadrilateral ABCD into triangle EBC, which line is parallel to diagonal AC?', a: 'The line drawn through vertex D ($DE \\parallel AC$).', kind: 'recall' },
      { q: 'Why is Area(ACD) = Area(ACE) in the transformation?', a: 'They share the same base AC and lie between parallel lines AC and DE.', kind: 'recall' },
      { q: 'If quadrilateral ABCD has area 48 sq cm, what is the area of the transformed triangle EBC?', a: '$\\mathbf{48\\text{ cm}^2}$ (strictly identical area).', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ചതുർഭുജം $ABCD$-യെ ത്രികോണം $\triangle EBC$ ആക്കി മാറ്റുമ്പോൾ വികർണ്ണം $AC$-ക്ക് സമാന്തരമായി വരയ്ക്കുന്ന വര ഏതാണ്?', a: 'D എന്ന ശീർഷത്തിലൂടെ വരയ്ക്കുന്ന വര ($DE \\parallel AC$).', kind: 'recall' },
      { q: 'ഈ നിർമ്മിതിയിൽ $\text{Area}(\triangle ACD) = \text{Area}(\triangle ACE)$ ആകാൻ കാരണം എന്താണ്?', a: 'അവയ്ക്ക് $AC$ എന്ന ഒരേ പാദമാണുള്ളത്, കൂടാതെ അവ $AC, DE$ എന്നീ സമാന്തരവരകൾക്കിടയിലാണ്.', kind: 'recall' },
      { q: 'ചതുർഭുജം $ABCD$-യുടെ പരപ്പളവ് $48\text{ ച.സെ.മീ}$ ആയാൽ നിർമ്മിച്ച $\triangle EBC$-യുടെ പരപ്പളവ് എത്ര?', a: '$\\mathbf{48\\text{ cm}^2}$ (തുല്യ പരപ്പളവായിരിക്കും).', kind: 'apply' }
    ]
  },

  {
    id: 'm9.1.4.trapezium-and-land-division',
    sec: '9.1.4',
    kind: 'application',
    tier: 'core',
    title_en: 'Trapezium Diagonals & Fair Land Partitioning',
    title_ml: 'ലംബകത്തിലെ വികർണ്ണങ്ങളും തുല്യ പരപ്പളവ് വിഭജനവും',
    oneLine_en: 'In any trapezium, the diagonals divide it into four triangles such that the two non-parallel side triangles have strictly equal areas.',
    oneLine_ml: 'ഏതൊരു ലംബകത്തിലും വികർണ്ണങ്ങൾ മുറിച്ചുണ്ടാകുന്ന നാല് ത്രികോണങ്ങളിൽ സമാന്തരമല്ലാത്ത വശങ്ങളോട് ചേർന്ന ത്രികോണങ്ങളുടെ പരപ്പളവുകൾ തുല്യമായിരിക്കും.',
    statement_en: `<p><b>Trapezium Diagonal Theorem:</b></p>
      <p>Let $ABCD$ be a trapezium with $AB \\parallel CD$, and let diagonals $AC$ and $BD$ intersect at point $O$. The diagonals divide the trapezium into four triangles: $\\triangle AOB, \\triangle BOC, \\triangle COD, \\triangle AOD$.</p>
      $$\\mathbf{\\text{Area}(\\triangle AOD) = \\text{Area}(\\triangle BOC)}$$
      <p><b>Proof:</b> $\\triangle ADC$ and $\\triangle BDC$ have the same base $CD$ and lie between the same parallel lines $AB \\parallel CD$.</p>
      $$\\implies \\text{Area}(\\triangle ADC) = \\text{Area}(\\triangle BDC)$$
      <p>Subtracting the common sub-triangle $\\triangle COD$ from both sides:</p>
      $$\\text{Area}(\\triangle ADC) - \\text{Area}(\\triangle COD) = \\text{Area}(\\triangle BDC) - \\text{Area}(\\triangle COD)$$
      $$\\implies \\mathbf{\\text{Area}(\\triangle AOD) = \\text{Area}(\\triangle BOC)}$$
      <p><b>Fair Land Division Application:</b></p>
      <p>When two neighboring plots of land share a crooked or zig-zag boundary, this theorem allows straightening the boundary from a fixed corner post into a single straight boundary fence without altering the exact acreage owned by either neighbor.</p>`,
    statement_ml: `<p><b>ലംബകത്തിലെ വികർണ്ണ സിദ്ധാന്തം:</b></p>
      <p>$AB \\parallel CD$ ആയ ലംബകം $ABCD$-യിലെ വികർണ്ണങ്ങളായ $AC, BD$ എന്നിവ $O$ എന്ന ബിന്ദുവിൽ കൂട്ടിമുട്ടുന്നുവെന്നിരിക്കട്ടെ. ഇവ ലംബകത്തെ നാല് ത്രികോണങ്ങളായി തിരിക്കുന്നു: $\\triangle AOB, \\triangle BOC, \\triangle COD, \\triangle AOD$.</p>
      $$\\mathbf{\\text{Area}(\\triangle AOD) = \\text{Area}(\\triangle BOC)}$$
      <p><b>തെളിവ്:</b> $\\triangle ADC, \\triangle BDC$ എന്നീ ത്രികോണങ്ങൾക്ക് $CD$ എന്ന ഒരേ പാദമാണുള്ളത്, കൂടാതെ അവ $AB \\parallel CD$ എന്ന ഒരേ സമാന്തരവരകൾക്കിടയിലാണ്.</p>
      $$\\implies \\text{Area}(\\triangle ADC) = \\text{Area}(\\triangle BDC)$$
      <p>ഇരുവശത്തുനിന്നും പൊതുവായ $\\triangle COD$ എന്ന ത്രികോണത്തിന്റെ പരപ്പളവ് കുറയ്ക്കുന്നു:</p>
      $$\\text{Area}(\\triangle ADC) - \\text{Area}(\\triangle COD) = \\text{Area}(\\triangle BDC) - \\text{Area}(\\triangle COD)$$
      $$\\implies \\mathbf{\\text{Area}(\\triangle AOD) = \\text{Area}(\\triangle BOC)}$$
      <p><b>ഭൂമി വിഭജന പ്രയോഗം:</b></p>
      <p>രണ്ട് പേരുടെ ഭൂമികൾക്കിടയിലുള്ള അതിർത്തി വളഞ്ഞുപുളഞ്ഞതാണെങ്കിൽ, ആരുടെയും ഭൂമിയുടെ പരപ്പളവിൽ മാറ്റം വരുത്താതെ അതിർത്തി നേർവരയിലാക്കാൻ ഈ സിദ്ധാന്തം ഉപയോഗിക്കുന്നു.</p>`,
    intuition_en: `<p>Two balanced seesaws overlapping on the base: subtracting the shared central weight leaves exactly identical weights on both outer arms.</p>`,
    intuition_ml: `<p>രണ്ട് വലിയ തുല്യ പരപ്പളവുകളിൽ നിന്ന് ഒരേ നടുവിലെ കഷ്ണം എടുത്തുമാറ്റിയാൽ ബാക്കി വരുന്ന രണ്ട് വശങ്ങളിലെ കഷ്ണങ്ങളുടെ പരപ്പളവുകൾ തികച്ചും തുല്യമായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Triangles ADC and BDC have identical base and height. Subtracting common triangle COD yields the non-parallel side triangle equality.',
      idea_ml: 'തുല്യ പരപ്പളവുള്ള വലിയ ത്രികോണങ്ങളിൽ നിന്ന് പൊതുവായ ത്രികോണം കുറയ്ക്കുന്നു.',
      why_en: 'Subtracting equals from equals preserves equality.',
      why_ml: 'തുല്യ അളവുകളിൽ നിന്ന് ഒരേ അളവ് കുറച്ചാൽ ബാക്കി വരുന്നവ തുല്യമായിരിക്കും.',
      rungs_en: [
        { why_en: 'Triangles ADC and BDC have common base CD between parallels AB and CD.', m: '\\text{Area}(\\triangle ADC) = \\text{Area}(\\triangle BDC)' },
        { why_en: 'Decompose into sub-triangles sharing vertex O.', m: '\\text{Area}(\\triangle ADC) = \\text{Area}(\\triangle AOD) + \\text{Area}(\\triangle COD)' },
        { why_en: 'Decompose triangle BDC.', m: '\\text{Area}(\\triangle BDC) = \\text{Area}(\\triangle BOC) + \\text{Area}(\\triangle COD)' },
        { why_en: 'Subtract $\text{Area}(\triangle COD)$ from both sides.', m: '\\text{Area}(\\triangle AOD) = \\text{Area}(\\triangle BOC)' }
      ],
      rungs_ml: [
        { why_ml: '$\triangle ADC, \triangle BDC$ എന്നിവയ്ക്ക് $CD$ എന്ന ഒരേ പാദമാണുള്ളത്.', m: '\\text{Area}(\\triangle ADC) = \\text{Area}(\\triangle BDC)' },
        { why_ml: 'ത്രികോണം $\triangle ADC$-യെ വിഭജിക്കുന്നു.', m: '\\text{Area}(\\triangle ADC) = \\text{Area}(\\triangle AOD) + \\text{Area}(\\triangle COD)' },
        { why_ml: 'ത്രികോണം $\triangle BDC$-യെ വിഭജിക്കുന്നു.', m: '\\text{Area}(\\triangle BDC) = \\text{Area}(\\triangle BOC) + \\text{Area}(\\triangle COD)' },
        { why_ml: 'ഇരുവശത്തുനിന്നും $\text{Area}(\triangle COD)$ കുറയ്ക്കുന്നു.', m: '\\text{Area}(\\triangle AOD) = \\text{Area}(\\triangle BOC)' }
      ]
    },
    needs: ['m9.1.1.triangles-same-base-parallels'],
    traps_en: [
      'The equal triangles are the ONES ON THE SIDES (non-parallel sides), NOT top and bottom triangles.',
      'Area(AOB) does NOT equal Area(COD) unless the trapezium is a parallelogram.'
    ],
    traps_ml: [
      'സമാന്തരമല്ലാത്ത വശങ്ങളോട് ചേർന്ന വശങ്ങളിലെ ത്രികോണങ്ങളുടെ പരപ്പളവുകളാണ് തുല്യമാകുന്നത്; മുകളിലെയും താഴെയും ഉള്ളവയല്ല.',
      'സാമാന്തരികത്തിൽ മാത്രമേ മുകളിലെയും താഴെയും ഉള്ള ത്രികോണങ്ങളുടെ പരപ്പളവ് തുല്യമാകൂ.'
    ],
    cards_en: [
      { q: 'In trapezium ABCD with AB || CD and diagonals meeting at O, which pair of triangles has equal area?', a: '$\\triangle AOD$ and $\\triangle BOC$ (the non-parallel side triangles).', kind: 'recall' },
      { q: 'If Area(AOD) = 14 sq cm in a trapezium, what is Area(BOC)?', a: '$\\mathbf{14\\text{ cm}^2}$ (strictly equal).', kind: 'apply' },
      { q: 'If Area(ADC) = 35 sq cm and Area(COD) = 15 sq cm, what is Area(BOC)?', a: '$\\text{Area}(AOD) = 35 - 15 = 20\\text{ cm}^2 \\implies \\text{Area}(BOC) = \\mathbf{20\\text{ cm}^2}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '$AB \parallel CD$ ആയ ലംബകത്തിൽ വികർണ്ണങ്ങൾ $O$-വിൽ മുട്ടുമ്പോൾ തുല്യ പരപ്പളവുള്ള ത്രികോണജോടി ഏതാണ്?', a: '$\\triangle AOD, \\triangle BOC$ (സമാന്തരമല്ലാത്ത വശങ്ങളോട് ചേർന്നവ).', kind: 'recall' },
      { q: 'ഒരു ലംബകത്തിൽ $\text{Area}(\triangle AOD) = 14\text{ ച.സെ.മീ}$ ആയാൽ $\text{Area}(\triangle BOC)$ എത്ര?', a: '$\\mathbf{14\\text{ cm}^2}$ (തുല്യമായിരിക്കും).', kind: 'apply' },
      { q: '$\text{Area}(\triangle ADC) = 35\text{ ച.സെ.മീ}, \text{Area}(\triangle COD) = 15\text{ ച.സെ.മീ}$ ആയാൽ $\text{Area}(\triangle BOC)$ എത്ര?', a: '$\\text{Area}(AOD) = 35 - 15 = 20 \\implies \\text{Area}(BOC) = \\mathbf{20\\text{ ച.സെ.മീ}}$.', kind: 'apply' }
    ]
  }
);
