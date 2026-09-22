/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 7: Similar Triangles (സദൃശ ത്രികോണങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm9.7.1.concept-of-similarity-and-aa',
    sec: '9.7.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Concept of Similarity and the AA Similarity Criterion',
    title_ml: 'സദൃശതയുടെ ആശയവും AA സദൃശതാ തത്വവും',
    oneLine_en: 'If the corresponding angles of two triangles are equal, their corresponding sides are proportional in the exact same ratio (scale factor k), and the triangles are said to be similar ($\triangle ABC \sim \triangle PQR$).',
    oneLine_ml: 'രണ്ട് ത്രികോണങ്ങളിലെ അനുരൂപ കോണുകൾ തുല്യമാണെങ്കിൽ അവയുടെ അനുരൂപ വശങ്ങൾ ഒരേ അംശബന്ധത്തിലായിരിക്കും (സ്കെയിൽ ഫാക്ടർ k); ഇത്തരം ത്രികോണങ്ങളെ സദൃശ ത്രികോണങ്ങൾ എന്ന് വിളിക്കുന്നു ($\triangle ABC \sim \triangle PQR$).',
    statement_en: `<p>Two geometric figures are said to be <b>similar</b> (സദൃശം) if they have the exact same shape, though not necessarily the same size. For triangles:</p>
      $$\\mathbf{\\triangle ABC \\sim \\triangle PQR}$$
      <p><b>Equiangular Property and Proportionality:</b></p>
      <p>If $\\angle A = \\angle P$, $\\angle B = \\angle Q$, and $\\angle C = \\angle R$, then the ratios of pairs of opposite sides are strictly equal to a common constant $k$ (called the <b>scale factor</b> or scaling ratio):</p>
      $$\\mathbf{\\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{AC}{PR} = k}$$
      <p><b>The AA (Angle-Angle) Similarity Criterion:</b></p>
      <p>Since the sum of angles in any triangle is always $180^\\circ$, if <b>two angles</b> of one triangle are equal to two angles of another triangle ($\\angle A = \\angle P$ and $\\angle B = \\angle Q$), the third angles are automatically equal ($\\angle C = \\angle R$). Hence, <b>two equal angles are sufficient</b> to prove that two triangles are similar.</p>`,
    statement_ml: `<p>ഒരേ ആകൃതിയുള്ളതും എന്നാൽ ഒരേ വലിപ്പമുണ്ടായിരിക്കണമെന്ന് നിർബന്ധമില്ലാത്തതുമായ രൂപങ്ങളെ <b>സദൃശ രൂപങ്ങൾ</b> എന്ന് വിളിക്കുന്നു. ത്രികോണങ്ങളുടെ കാര്യത്തിൽ:</p>
      $$\\mathbf{\\triangle ABC \\sim \\triangle PQR}$$
      <p><b>സമകോണ ത്രികോണങ്ങളും വശങ്ങളുടെ ആനുപാതികതയും:</b></p>
      <p>$\\angle A = \\angle P$, $\\angle B = \\angle Q$, $\\angle C = \\angle R$ എന്നിങ്ങനെ കോണുകൾ തുല്യമായാൽ, തുല്യകോണുകൾക്ക് എതിരെയുള്ള വശങ്ങളുടെ അംശബന്ധം തുല്യമായിരിക്കും:</p>
      $$\\mathbf{\\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{AC}{PR} = k}$$
      <p><b>AA (കോൺ-കോൺ) സദൃശതാ തത്വം:</b></p>
      <p>ത്രികോണത്തിലെ കോണുകളുടെ തുക $180^\\circ$ ആയതിനാൽ, ഒരു ത്രികോണത്തിലെ <b>രണ്ട് കോണുകൾ</b> മറ്റൊരു ത്രികോണത്തിലെ രണ്ട് കോണുകൾക്ക് തുല്യമായാൽ മൂന്നാമത്തെ കോണുകൾ തനിയെ തുല്യമാകും. അതിനാൽ രണ്ട് കോണുകൾ തുല്യമായാൽ തന്നെ ത്രികോണങ്ങൾ സദൃശമാണെന്ന് ഉറപ്പിക്കാം.</p>`,
    intuition_en: `<p>Aligning the smaller triangle inside the larger triangle at a common vertex places their opposite sides parallel, cutting the lateral sides in proportional ratios.</p>`,
    intuition_ml: `<p>ചെറിയ ത്രികോണത്തെ വലിയ ത്രികോണത്തിന്റെ ഒരു മൂലയിൽ ഒത്തുപോകുന്ന രീതിയിൽ വെച്ചാൽ പാദങ്ങൾ സമാന്തരമാവുകയും വശങ്ങൾ ഒരേ അനുപാതത്തിൽ ഭാഗിക്കപ്പെടുകയും ചെയ്യുന്നു.</p>`,
    proof: {
      idea_en: 'Place smaller triangle inside larger with matching angle, apply parallel line proportional intercept theorem.',
      idea_ml: 'ഒരു കോൺ ചേർത്തുവെച്ച് പാദങ്ങൾ സമാന്തരമാണെന്ന് കാണിച്ച് അനുപാത സിദ്ധാന്തം പ്രയോഗിക്കുന്നു.',
      why_en: 'Equal corresponding angles make the opposite sides parallel.',
      why_ml: 'അനുരൂപകോണുകൾ തുല്യമായതിനാൽ എതിർവശങ്ങൾ സമാന്തരമാകുന്നു.',
      rungs_en: [
        { why_en: 'Place angle A of triangle ABC onto angle P of triangle PQR.', m: '\\angle A = \\angle P' },
        { why_en: 'Since corresponding angle B equals Q.', m: 'BC \\parallel QR' },
        { why_en: 'By proportional intercepts theorem on triangle sides.', m: '\\frac{AB}{PQ} = \\frac{AC}{PR}' },
        { why_en: 'Repeating with angle B and Q gives all three ratios equal.', m: '\\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{AC}{PR}' }
      ],
      rungs_ml: [
        { why_ml: 'തുല്യകോണുകൾ ഒന്നിച്ചു ചേർത്തു വെക്കുന്നു.', m: '\\angle A = \\angle P' },
        { why_ml: 'അനുരൂപകോണുകൾ തുല്യമാകയാൽ വശങ്ങൾ സമാന്തരമാണ്.', m: 'BC \\parallel QR' },
        { why_ml: 'സമാന്തരവരകളുടെ അനുപാത സിദ്ധാന്തപ്രകാരം.', m: '\\frac{AB}{PQ} = \\frac{AC}{PR}' },
        { why_ml: 'മറ്റൊരു ശീർഷത്തിലും ഇത് ആവർത്തിക്കുമ്പോൾ മൂന്ന് അംശബന്ധങ്ങളും തുല്യമാകുന്നു.', m: '\\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{AC}{PR}' }
      ]
    },
    needs: ['m9.6.2.proportional-intercepts-theorem', 'm8.2.2.asa-congruence'],
    traps_en: [
      'In similar triangles, SIDES ARE PROPORTIONAL, NOT EQUAL (congruence requires equal sides, similarity requires proportional sides).',
      'Always match sides OPPOSITE to EQUAL ANGLES, not just visual orientation.'
    ],
    traps_ml: [
      'സദൃശ ത്രികോണങ്ങളിൽ വശങ്ങൾ തുല്യമാകണമെന്നില്ല, അവ ഒരേ അംശബന്ധത്തിലായിരിക്കും.',
      'തുല്യകോണുകൾക്ക് എതിരെയുള്ള വശങ്ങളാണ് അംശബന്ധത്തിൽ താരതമ്യം ചെയ്യേണ്ടത്.'
    ],
    cards_en: [
      { q: 'In △ABC and △PQR, ∠A = 50°, ∠B = 70°, ∠P = 50°, ∠Q = 70°. Are the triangles similar?', a: '**Yes**, by AA similarity criterion (third angles are both 60°).', kind: 'apply' },
      { q: 'In similar triangles ABC and PQR, AB = 4 cm, PQ = 8 cm, and BC = 5 cm. What is the length of QR?', a: 'Scale factor $k = \\frac{8}{4} = 2$. $QR = 5 \\times 2 = \\mathbf{10\\text{ cm}}$.', kind: 'apply' },
      { q: 'What is the relation between congruence and similarity?', a: 'All congruent triangles are similar (with scale factor $k = 1$), but similar triangles are not necessarily congruent.', kind: 'recall' }
    ],
    cards_ml: [
      { q: '△ABC, △PQR എന്നിവയിൽ ∠A = 50°, ∠B = 70°, ∠P = 50°, ∠Q = 70° ആയാൽ ത്രികോണങ്ങൾ സദൃശമാണോ?', a: '**അതെ**, AA സദൃശതാ തത്വപ്രകാരം (മൂന്നാമത്തെ കോണുകൾ 60° ആണ്).', kind: 'apply' },
      { q: 'സദൃശ ത്രികോണങ്ങളായ ABC, PQR എന്നിവയിൽ AB = 4 cm, PQ = 8 cm, BC = 5 cm ആയാൽ QR എത്ര?', a: 'സ്കെയിൽ ഫാക്ടർ $k = \\frac{8}{4} = 2$. $QR = 5 \\times 2 = \\mathbf{10\\text{ cm}}$.', kind: 'apply' },
      { q: 'സർവ്വസമതയും സദൃശതയും തമ്മിലുള്ള ബന്ധം എന്ത്?', a: 'എല്ലാ സർവ്വസമ ത്രികോണങ്ങളും സദൃശമാണ് ($k = 1$), എന്നാൽ സദൃശ ത്രികോണങ്ങൾ സർവ്വസമമാകണമെന്നില്ല.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.7.2.sas-and-sss-similarity',
    sec: '9.7.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'SAS and SSS Similarity Criteria',
    title_ml: '$SAS, SSS$ സദൃശതാ തത്വങ്ങൾ',
    oneLine_en: 'Triangles are similar if one angle of a triangle equals one angle of another and the including sides are proportional, or if all three pairs of corresponding sides are proportional.',
    oneLine_ml: 'ഒരു ത്രികോണത്തിലെ ഒരു കോൺ മറ്റൊരു ത്രികോണത്തിലെ ഒരു കോണിന് തുല്യമാവുകയും ആ കോൺ ഉൾക്കൊള്ളുന്ന വശങ്ങൾ ഒരേ അംശബന്ധത്തിലാവുകയും ചെയ്താൽ, അല്ലെങ്കിൽ മൂന്ന് ജോടി വശങ്ങളും ആനുപാതികമായാൽ (SSS) ത്രികോണങ്ങൾ സദൃശമായിരിക്കും.',
    statement_en: `<p>Beyond the AA criterion, two other fundamental criteria establish similarity:</p>
      <p><b>1. SAS (Side-Angle-Side) Similarity Criterion:</b></p>
      <p>If one angle of a triangle is equal to one angle of another triangle, and the sides including these angles are proportional:</p>
      $$\\mathbf{\\angle A = \\angle P \\quad \\text{and} \\quad \\frac{AB}{PQ} = \\frac{AC}{PR} \\implies \\triangle ABC \\sim \\triangle PQR}$$
      <p><b>2. SSS (Side-Side-Side) Similarity Criterion:</b></p>
      <p>If the three sides of one triangle are proportional to the three corresponding sides of another triangle:</p>
      $$\\mathbf{\\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{AC}{PR} \\implies \\triangle ABC \\sim \\triangle PQR}$$
      <p>When SSS similarity holds, all corresponding angles are automatically equal.</p>`,
    statement_ml: `<p>AA തത്വത്തിന് പുറമെ സദൃശത തെളിയിക്കാനുള്ള മറ്റ് രണ്ട് പ്രധാന തത്വങ്ങൾ താഴെ പറയുന്നവയാണ്:</p>
      <p><b>1. $SAS$ (വശം-കോൺ-വശം) സദൃശതാ തത്വം:</b></p>
      <p>ഒരു ത്രികോണത്തിലെ ഒരു കോൺ മറ്റൊരു ത്രികോണത്തിലെ ഒരു കോണിന് തുല്യമാവുകയും, ആ കോൺ ഉൾക്കൊള്ളുന്ന വശങ്ങൾ ഒരേ അംശബന്ധത്തിലാവുകയും ചെയ്താൽ:</p>
      $$\\mathbf{\\angle A = \\angle P \\quad \\text{കൂടാതെ} \\quad \\frac{AB}{PQ} = \\frac{AC}{PR} \\implies \\triangle ABC \\sim \\triangle PQR}$$
      <p><b>2. $SSS$ (വശം-വശം-വശം) സദൃശതാ തത്വം:</b></p>
      <p>ഒരു ത്രികോണത്തിന്റെ മൂന്ന് വശങ്ങൾ മറ്റൊരു ത്രികോണത്തിന്റെ മൂന്ന് അനുരൂപ വശങ്ങളുമായി ഒരേ അംശബന്ധത്തിലാണെങ്കിൽ:</p>
      $$\\mathbf{\\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{AC}{PR} \\implies \\triangle ABC \\sim \\triangle PQR}$$
      <p>ഇത്തരം സന്ദർഭങ്ങളിൽ അനുരൂപ കോണുകൾ എല്ലാം തനിയെ തുല്യമായിരിക്കും.</p>`,
    intuition_en: `<p>Fixing the ratio of two sides and the angle between them uniquely locks the shape and direction of the third side, locking the overall shape.</p>`,
    intuition_ml: `<p>രണ്ട് വശങ്ങളുടെ നീളത്തിന്റെ അംശബന്ധവും അവയ്ക്കിടയിലെ കോണും നിശ്ചയിച്ചാൽ മൂന്നാമത്തെ വശത്തിന്റെ ദിശയും ആകൃതിയും പൂർണ്ണമായി ഉറപ്പിക്കപ്പെടുന്നു.</p>`,
    proof: {
      idea_en: 'Cut off segments on the larger triangle equal to the scaled smaller triangle sides, and establish congruence with the parallel-cut triangle.',
      idea_ml: 'വലിയ ത്രികോണത്തിൽ നിന്ന് ചെറിയ ത്രികോണത്തിന്റെ അളവുകൾ മുറിച്ചെടുത്ത് സർവ്വസമത വഴി തെളിയിക്കുന്നു.',
      why_en: 'SAS congruence of the interior cut triangle establishes parallel sides and hence AA similarity.',
      why_ml: 'മുറിച്ചെടുത്ത ത്രികോണം സർവ്വസമമാവുകയും സമാന്തരത വഴി എല്ലാ കോണുകളും തുല്യമാണെന്ന് തെളിയുകയും ചെയ്യുന്നു.',
      rungs_en: [
        { why_en: 'On PQ mark M such that PM = AB, on PR mark N such that PN = AC.', m: 'PM = AB, \\, PN = AC' },
        { why_en: 'Given AB/PQ = AC/PR, so PM/PQ = PN/PR.', m: '\\frac{PM}{PQ} = \\frac{PN}{PR}' },
        { why_en: 'By converse of proportional intercepts theorem, MN is parallel to QR.', m: 'MN \\parallel QR' },
        { why_en: 'Parallel lines give equal corresponding angles: angle PMN = Q, angle PNM = R.', m: '\\triangle PMN \\sim \\triangle PQR' },
        { why_en: 'By SAS congruence: triangle ABC is congruent to triangle PMN.', m: '\\triangle ABC \\cong \\triangle PMN \\implies \\triangle ABC \\sim \\triangle PQR' }
      ],
      rungs_ml: [
        { why_ml: 'PQ-ൽ PM = AB, PR-ൽ PN = AC അടയാളപ്പെടുത്തുന്നു.', m: 'PM = AB, \\, PN = AC' },
        { why_ml: 'തന്നിരിക്കുന്ന അനുപാതപ്രകാരം PM/PQ = PN/PR.', m: '\\frac{PM}{PQ} = \\frac{PN}{PR}' },
        { why_ml: 'അനുപാത സിദ്ധാന്തത്തിന്റെ വിപരീതം പ്രകാരം MN, QR-ന് സമാന്തരമാണ്.', m: 'MN \\parallel QR' },
        { why_ml: 'സമാന്തരവരകൾ അനുരൂപ കോണുകൾ തുല്യമാക്കുന്നു.', m: '\\triangle PMN \\sim \\triangle PQR' },
        { why_ml: '$SAS$ തുല്യത വഴി $\triangle ABC, \triangle PMN$ സർവ്വസമമായതിനാൽ $\triangle ABC \sim \triangle PQR$.', m: '\\triangle ABC \\sim \\triangle PQR' }
      ]
    },
    needs: ['m9.7.1.concept-of-similarity-and-aa'],
    traps_en: [
      'In SAS similarity, the angle MUST be the INCLUDED angle between the two proportional sides.',
      'In SSS similarity, all THREE pairs of sides must share the EXACT SAME ratio.'
    ],
    traps_ml: [
      'SAS സദൃശതയിൽ കോൺ ആ രണ്ട് വശങ്ങൾക്കിടയിലുള്ളത് തന്നെയായിരിക്കണം.',
      'SSS സദൃശതയിൽ മൂന്ന് വശങ്ങളുടെയും അംശബന്ധം ഒന്നുതന്നെയായിരിക്കണം.'
    ],
    cards_en: [
      { q: 'Triangle 1 has sides 3, 4, 5. Triangle 2 has sides 6, 8, 10. Are they similar?', a: '**Yes**, by SSS similarity criterion (ratio of sides is $1 : 2$).', kind: 'apply' },
      { q: 'Can two triangles with sides in ratio 2 : 3 have different angles?', a: '**No**, SSS similarity guarantees that their corresponding angles are identical.', kind: 'recall' },
      { q: 'What is the required condition on the angle in SAS similarity?', a: 'It must be strictly the **included angle** between the two proportional sides.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു ത്രികോണത്തിന്റെ വശങ്ങൾ 3, 4, 5-ഉം മറ്റൊന്നിന്റേത് 6, 8, 10-ഉം ആണ്. അവ സദൃശമാണോ?', a: '**അതെ**, SSS സദൃശതാ തത്വപ്രകാരം (വശങ്ങളുടെ അംശബന്ധം $1 : 2$).', kind: 'apply' },
      { q: 'വശങ്ങൾ 2 : 3 അംശബന്ധത്തിലുള്ള രണ്ട് ത്രികോണങ്ങളുടെ കോണുകൾ വ്യത്യസ്തമാകാൻ സാധ്യതയുണ്ടോ?', a: '**ഇല്ല**, SSS സദൃശത അനുസരിച്ച് അവയുടെ കോണുകൾ തുല്യമായിരിക്കും.', kind: 'recall' },
      { q: 'SAS സദൃശതയിൽ കോണിന്റെ സ്ഥാനം എവിടെയായിരിക്കണം?', a: 'ആ രണ്ട് വശങ്ങൾ **ചേരുന്നിടത്തെ കോൺ (Included angle)** തന്നെയായിരിക്കണം.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.7.3.right-triangle-altitude-similarity',
    sec: '9.7.3',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Right Triangle Altitude and Geometric Mean Relations',
    title_ml: 'മട്ടത്രികോണത്തിലെ ലംബവും ജ്യാമിതീയ ശരാശരി ബന്ധങ്ങളും',
    oneLine_en: 'The perpendicular dropped from the right angle vertex to the hypotenuse divides the triangle into two right triangles that are similar to each other and to the original triangle: h² = ab.',
    oneLine_ml: 'മട്ടത്രികോണത്തിന്റെ മട്ടകോണിൽ നിന്ന് കർണ്ണത്തിലേക്ക് വരയ്ക്കുന്ന ലംബം ത്രികോണത്തെ പരസ്പരവും വലിയ ത്രികോണത്തോടും സദൃശമായ രണ്ട് മട്ടത്രികോണങ്ങളായി വിഭജിക്കുന്നു: h² = ab.',
    statement_en: `<p>Let $\\triangle ABC$ be a right-angled triangle with right angle at $C$ ($\\angle C = 90^\\circ$). Let $CD \\perp AB$ be the altitude dropped onto the hypotenuse $AB = c$, dividing the hypotenuse into two segments $AD = p$ and $DB = q$ (such that $p + q = c$):</p>
      $$\\mathbf{\\triangle ACD \\sim \\triangle CBD \\sim \\triangle ABC}$$
      <p><b>The Three Golden Geometric Mean Theorems:</b></p>
      <ol>
        <li><b>Altitude as Geometric Mean of Hypotenuse Segments:</b>
          $$\\frac{CD}{AD} = \\frac{DB}{CD} \\implies \\mathbf{CD^2 = AD \\times DB} \\quad (h^2 = p \\cdot q)$$</li>
        <li><b>Leg $AC$ as Geometric Mean of Hypotenuse and Adjacent Segment:</b>
          $$\\frac{AC}{AB} = \\frac{AD}{AC} \\implies \\mathbf{AC^2 = AB \\times AD} \\quad (b^2 = c \\cdot p)$$</li>
        <li><b>Leg $BC$ as Geometric Mean of Hypotenuse and Adjacent Segment:</b>
          $$\\frac{BC}{AB} = \\frac{BD}{BC} \\implies \\mathbf{BC^2 = AB \\times BD} \\quad (a^2 = c \\cdot q)$$</li>
      </ol>
      <p>Adding equations (2) and (3) yields a direct geometric proof of the <b>Pythagorean Theorem</b>:
        $$AC^2 + BC^2 = AB(AD + BD) = AB \\times AB = AB^2$$</p>`,
    statement_ml: `<p>$\\angle C = 90^\\circ$ ആയ മട്ടത്രികോണമാണ് $\\triangle ABC$ എന്നിരിക്കട്ടെ. $C$-ൽ നിന്ന് കർണ്ണമായ $AB$-യിലേക്ക് വരച്ച ലംബമാണ് $CD$ ($CD \\perp AB$). ഇത് കർണ്ണത്തെ $AD = p$, $DB = q$ എന്നീ ഭാഗങ്ങളാക്കുന്നു:</p>
      $$\\mathbf{\\triangle ACD \\sim \\triangle CBD \\sim \\triangle ABC}$$
      <p><b>പ്രധാന ജ്യാമിതീയ ശരാശരി സിദ്ധാന്തങ്ങൾ:</b></p>
      <ol>
        <li><b>ലംബത്തിന്റെ വർഗ്ഗം പാദഭാഗങ്ങളുടെ ഗുണനഫലത്തിന് തുല്യമാണ്:</b>
          $$\\mathbf{CD^2 = AD \\times DB} \\quad (h^2 = p \\cdot q)$$</li>
        <li><b>ലംബവശം $AC$-യുടെ വർഗ്ഗം:</b>
          $$\\mathbf{AC^2 = AB \\times AD} \\quad (b^2 = c \\cdot p)$$</li>
        <li><b>മറ്റേ ലംബവശം $BC$-യുടെ വർഗ്ഗം:</b>
          $$\\mathbf{BC^2 = AB \\times BD} \\quad (a^2 = c \\cdot q)$$</li>
      </ol>
      <p>(2), (3) സമവാക്യങ്ങൾ കൂട്ടുമ്പോൾ <b>പൈതഗോറസ് സിദ്ധാന്തം</b> തെളിയുന്നു:
        $$AC^2 + BC^2 = AB(AD + BD) = AB^2$$</p>`,
    intuition_en: `<p>The altitude CD splits the right angle into two complementary angles, each matching an acute angle of the opposite triangle, creating three identical-angle triangles.</p>`,
    intuition_ml: `<p>ലംബം $CD$ മട്ടകോണിനെ വിഭജിക്കുമ്പോൾ ഉണ്ടാകുന്ന കോണുകൾ എതിരെയുള്ള ശീർഷകോണുകൾക്ക് കൃത്യമായി തുല്യമാകുന്നതിനാൽ മൂന്ന് ത്രികോണങ്ങളും ഒരേ കോണുകളുള്ളവയായി മാറുന്നു.</p>`,
    proof: {
      idea_en: 'Angle chasing in right triangles ACD and CBD shows both have acute angles alpha and 90 - alpha.',
      idea_ml: 'മട്ടത്രികോണങ്ങളിലെ കോണുകൾ താരതമ്യം ചെയ്ത് AA സദൃശത സ്ഥാപിക്കുന്നു.',
      why_en: 'Each small triangle has one right angle and shares one acute angle with parent triangle ABC.',
      why_ml: 'ഓരോ ചെറിയ ത്രികോണത്തിനും ഒരു മട്ടകോണും വലിയ ത്രികോണവുമായി ഒരു പൊതു ന്യൂനകോണും ഉണ്ട്.',
      rungs_en: [
        { why_en: 'In triangle ABC, let angle A = alpha. Then angle B = 90 - alpha.', m: '\\angle A + \\angle B = 90^\\circ' },
        { why_en: 'In right triangle ACD: angle ADC = 90, angle CAD = alpha.', m: '\\angle ACD = 90^\\circ - \\alpha = \\angle B' },
        { why_en: 'In right triangle CBD: angle BDC = 90, angle CBD = 90 - alpha.', m: '\\angle BCD = \\alpha = \\angle A' },
        { why_en: 'By AA similarity criterion.', m: '\\triangle ACD \\sim \\triangle CBD \\sim \\triangle ABC' },
        { why_en: 'Take ratio of sides CD/AD = DB/CD.', m: 'CD^2 = AD \\times DB' }
      ],
      rungs_ml: [
        { why_ml: '$\\triangle ABC$-യിൽ $\\angle A = \\alpha$ ആയാൽ $\\angle B = 90 - \\alpha$.', m: '\\angle A + \\angle B = 90^\\circ' },
        { why_ml: 'മട്ടത്രികോണം $\triangle ACD$-യിൽ $\\angle ACD = 90 - \\alpha = \\angle B$.', m: '\\angle ACD = \\angle B' },
        { why_ml: 'മട്ടത്രികോണം $\triangle CBD$-യിൽ $\\angle BCD = \\alpha = \\angle A$.', m: '\\angle BCD = \\angle A' },
        { why_ml: 'AA സദൃശതാ തത്വപ്രകാരം മൂന്ന് ത്രികോണങ്ങളും സദൃശമാണ്.', m: '\\triangle ACD \\sim \\triangle CBD \\sim \\triangle ABC' },
        { why_ml: 'അനുരൂപ വശങ്ങളുടെ അംശബന്ധം എടുക്കുമ്പോൾ.', m: 'CD^2 = AD \\times DB' }
      ]
    },
    needs: ['m9.7.1.concept-of-similarity-and-aa', 'p.5.5'],
    traps_en: [
      'The altitude must be dropped from the RIGHT ANGLE vertex onto the hypotenuse.',
      'In CD^2 = AD * DB, AD and DB are the two segments of the HYPOTENUSE, not the legs.'
    ],
    traps_ml: [
      'ലംബം മട്ടകോണിൽ നിന്ന് കർണ്ണത്തിലേക്ക് തന്നെ വരച്ചതായിരിക്കണം.',
      'CD^2 = AD * DB എന്നതിൽ AD, DB എന്നിവ കർണ്ണത്തിന്റെ ഭാഗങ്ങളാണ്, ലംബവശങ്ങളല്ല.'
    ],
    cards_en: [
      { q: 'In a right triangle, the altitude to the hypotenuse divides it into segments of 4 cm and 9 cm. What is the length of the altitude?', a: '$h = \\sqrt{4 \\times 9} = \\sqrt{36} = \\mathbf{6\\text{ cm}}$.', kind: 'apply' },
      { q: 'State the geometric mean relation between the altitude to the hypotenuse and the segments of the hypotenuse.', a: '$\\mathbf{h^2 = p \\times q}$ (altitude squared equals product of hypotenuse segments).', kind: 'recall' },
      { q: 'In right triangle ABC with right angle at C, if hypotenuse AB = 25 cm and AD = 9 cm, find leg AC.', a: '$AC = \\sqrt{AB \\times AD} = \\sqrt{25 \\times 9} = 5 \\times 3 = \\mathbf{15\\text{ cm}}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'മട്ടകോണിൽ നിന്ന് കർണ്ണത്തിലേക്കുള്ള ലംബം കർണ്ണത്തെ 4 cm, 9 cm ഭാഗങ്ങളാക്കുന്നു. ലംബത്തിന്റെ നീളം എത്ര?', a: '$h = \\sqrt{4 \\times 9} = \\sqrt{36} = \\mathbf{6\\text{ cm}}$.', kind: 'apply' },
      { q: 'കർണ്ണത്തിലേക്കുള്ള ലംബവും കർണ്ണഭാഗങ്ങളും തമ്മിലുള്ള ജ്യാമിതീയ ശരാശരി സമവാക്യം പ്രസ്താവിക്കുക.', a: '$\\mathbf{h^2 = p \\times q}$ (ലംബത്തിന്റെ വർഗ്ഗം = ഭാഗങ്ങളുടെ ഗുണനഫലം).', kind: 'recall' },
      { q: 'മട്ടത്രികോണം ABC-യിൽ കർണ്ണം AB = 25 cm, AD = 9 cm ആയാൽ AC-യുടെ നീളം എത്ര?', a: '$AC = \\sqrt{AB \\times AD} = \\sqrt{25 \\times 9} = 5 \\times 3 = \\mathbf{15\\text{ cm}}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm9.7.4.perimeter-and-area-ratios',
    sec: '9.7.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Perimeter and Area Ratios of Similar Triangles',
    title_ml: 'സദൃശ ത്രികോണങ്ങളിലെ ചുറ്റളവുകളുടെയും പരപ്പളവുകളുടെയും അംശബന്ധം',
    oneLine_en: 'For two similar triangles with scale factor k, the ratio of their perimeters is k, and the ratio of their areas is strictly the square of the scale factor: Area₁ / Area₂ = k² = (a / p)²',
    oneLine_ml: 'വശങ്ങളുടെ അംശബന്ധം k ആയ രണ്ട് സദൃശ ത്രികോണങ്ങളിലെ ചുറ്റളവുകളുടെ അംശബന്ധം k-യും, പരപ്പളവുകളുടെ അംശബന്ധം വശങ്ങളുടെ അംശബന്ധത്തിന്റെ വർഗ്ഗവും (k²) ആയിരിക്കും: പരപ്പളവ്₁ / പരപ്പളവ്₂ = k².',
    statement_en: `<p>Let $\\triangle ABC \\sim \\triangle PQR$ with linear scale factor $k$ such that:</p>
      $$\\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{AC}{PR} = k$$
      <p><b>1. Ratio of Perimeters:</b></p>
      <p>The ratio of their perimeters equals the linear scale factor $k$:</p>
      $$\\mathbf{\\frac{\\text{Perimeter}(\\triangle ABC)}{\\text{Perimeter}(\\triangle PQR)} = \\frac{k(PQ + QR + PR)}{PQ + QR + PR} = k}$$
      <p><b>2. Ratio of Areas (The Area Square Theorem):</b></p>
      <p>The ratio of the areas of two similar triangles is strictly equal to the <b>square of the ratio of any pair of corresponding sides</b>:</p>
      $$\\mathbf{\\frac{\\text{Area}(\\triangle ABC)}{\\text{Area}(\\triangle PQR)} = \\left(\\frac{AB}{PQ}\\right)^2 = \\left(\\frac{BC}{QR}\\right)^2 = k^2}$$
      <p>This holds because area is two-dimensional: both the base and the corresponding altitude scale by $k$, making the area scale by $k \\times k = k^2$.</p>`,
    statement_ml: `<p>$\\triangle ABC \\sim \\triangle PQR$ എന്ന രണ്ട് സദൃശ ത്രികോണങ്ങളിലെ വശങ്ങളുടെ അംശബന്ധം $k$ ആണെന്നിരിക്കട്ടെ:</p>
      $$\\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{AC}{PR} = k$$
      <p><b>1. ചുറ്റളവുകളുടെ അംശബന്ധം:</b></p>
      <p>ചുറ്റളവുകളുടെ അംശബന്ധം വശങ്ങളുടെ അംശബന്ധമായ $k$-ക്ക് തന്നെ തുല്യമായിരിക്കും:</p>
      $$\\mathbf{\\frac{\\text{ചുറ്റളവ്}(\\triangle ABC)}{\\text{ചുറ്റളവ്}(\\triangle PQR)} = k}$$
      <p><b>2. പരപ്പളവുകളുടെ അംശബന്ധം (വർഗ്ഗ അനുപാത സിദ്ധാന്തം):</b></p>
      <p>രണ്ട് സദൃശ ത്രികോണങ്ങളുടെ പരപ്പളവുകളുടെ അംശബന്ധം അവയുടെ <b>അനുരൂപ വശങ്ങളുടെ അംശബന്ധത്തിന്റെ വർഗ്ഗത്തിന് ($k^2$)</b> തുല്യമായിരിക്കും:</p>
      $$\\mathbf{\\frac{\\text{പരപ്പളവ്}(\\triangle ABC)}{\\text{പരപ്പളവ്}(\\triangle PQR)} = \\left(\\frac{AB}{PQ}\\right)^2 = k^2}$$
      <p>പാദവും ഉയരവും ഒരുപോലെ $k$ മടങ്ങ് വർദ്ധിക്കുന്നതിനാലാണ് പരപ്പളവ് $k \\times k = k^2$ മടങ്ങായി വർദ്ധിക്കുന്നത്.</p>`,
    intuition_en: `<p>Length is 1D (scales by k); area is 2D, built by multiplying two lengths (scales by k × k = k²).</p>`,
    intuition_ml: `<p>നീളം ഒരു അളവാണ് (k മടങ്ങ്); എന്നാൽ പരപ്പളവ് രണ്ട് നീളങ്ങളുടെ ഗുണനഫലമായതിനാൽ $k \\times k = k^2$ മടങ്ങായി മാറുന്നു.</p>`,
    proof: {
      idea_en: 'Drop altitudes in both triangles. Altitudes scale by k, and base scales by k, so area = (1/2)*base*height scales by k^2.',
      idea_ml: 'രണ്ട് ത്രികോണങ്ങളിലും ലംബ ഉയരങ്ങൾ വരയ്ക്കുന്നു. പാദവും ഉയരവും k മടങ്ങാകുമ്പോൾ പരപ്പളവ് k^2 മടങ്ങാകുന്നു.',
      why_en: 'Altitudes form similar right triangles with the corresponding sides, scaling by the same factor k.',
      why_ml: 'ഉയരങ്ങൾ ഉണ്ടാക്കുന്ന മട്ടത്രികോണങ്ങൾ സദൃശമായതിനാൽ ഉയരങ്ങളുടെ അനുപാതവും k ആണ്.',
      rungs_en: [
        { why_en: 'Draw altitudes AM and PN perpendicular to bases BC and QR.', m: 'AM \\perp BC, \\quad PN \\perp QR' },
        { why_en: 'Right triangles ABM and PQN are similar by AA (angle B = Q).', m: '\\triangle ABM \\sim \\triangle PQN \\implies \\frac{AM}{PN} = \\frac{AB}{PQ} = k' },
        { why_en: 'Express area formula for both triangles.', m: '\\text{Area}_1 = \\frac{1}{2} BC \\times AM, \\quad \\text{Area}_2 = \\frac{1}{2} QR \\times PN' },
        { why_en: 'Divide the two area equations.', m: '\\frac{\\text{Area}_1}{\\text{Area}_2} = \\frac{BC}{QR} \\times \\frac{AM}{PN} = k \\times k = k^2' }
      ],
      rungs_ml: [
        { why_ml: 'BC, QR എന്നീ പാദങ്ങളിലേക്ക് AM, PN ലംബങ്ങൾ വരയ്ക്കുന്നു.', m: 'AM \\perp BC, \\quad PN \\perp QR' },
        { why_ml: 'മട്ടത്രികോണങ്ങൾ സദൃശമാകയാൽ ഉയരങ്ങളുടെ അനുപാതവും k ആണ്.', m: '\\frac{AM}{PN} = \\frac{AB}{PQ} = k' },
        { why_ml: 'രണ്ട് ത്രികോണങ്ങളുടെയും പരപ്പളവ് സമവാക്യങ്ങൾ എഴുതുന്നു.', m: '\\text{പരപ്പളവ്}_1 = \\frac{1}{2} BC \\cdot AM, \\quad \\text{പരപ്പളവ്}_2 = \\frac{1}{2} QR \\cdot PN' },
        { why_ml: 'ഹരിക്കുമ്പോൾ പരപ്പളവ് അനുപാതം വശങ്ങളുടെ അനുപാതത്തിന്റെ വർഗ്ഗമാകുന്നു.', m: '\\frac{\\text{പരപ്പളവ്}_1}{\\text{പരപ്പളവ്}_2} = k \\times k = k^2' }
      ]
    },
    needs: ['m9.7.1.concept-of-similarity-and-aa', 'm9.1.2.triangles-same-height-base-split'],
    traps_en: [
      'If sides are in ratio 2 : 3, the areas are in ratio 4 : 9 (SQUARED), NOT 2 : 3.',
      'Perimeter ratio is linear (k), whereas area ratio is quadratic (k²).'
    ],
    traps_ml: [
      'വശങ്ങളുടെ അംശബന്ധം 2 : 3 ആയാൽ പരപ്പളവുകളുടെ അംശബന്ധം 4 : 9 (വർഗ്ഗം) ആയിരിക്കും, 2 : 3 അല്ല.',
      'ചുറ്റളവുകളുടെ അംശബന്ധം k-യും പരപ്പളവുകളുടേത് k²-ഉം ആണ്.'
    ],
    cards_en: [
      { q: 'The sides of two similar triangles are in the ratio 3 : 5. What is the ratio of their areas?', a: '$3^2 : 5^2 = \\mathbf{9 : 25}$.', kind: 'apply' },
      { q: 'The areas of two similar triangles are 36 sq cm and 81 sq cm. What is the ratio of their perimeters?', a: '$\\sqrt{36} : \\sqrt{81} = 6 : 9 = \\mathbf{2 : 3}$.', kind: 'apply' },
      { q: 'If side lengths of a triangle are doubled, by what factor does the area increase?', a: '$2^2 = \\mathbf{4\\text{ times}}$ (quadruples).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'രണ്ട് സദൃശ ത്രികോണങ്ങളുടെ വശങ്ങൾ 3 : 5 എന്ന അംശബന്ധത്തിലാണ്. അവയുടെ പരപ്പളവുകളുടെ അംശബന്ധം എത്ര?', a: '$3^2 : 5^2 = \\mathbf{9 : 25}$.', kind: 'apply' },
      { q: 'രണ്ട് സദൃശ ത്രികോണങ്ങളുടെ പരപ്പളവുകൾ 36 ച.സെ.മീ, 81 ച.സെ.മീ ആണ്. അവയുടെ ചുറ്റളവുകളുടെ അംശബന്ധം എത്ര?', a: '$\\sqrt{36} : \\sqrt{81} = 6 : 9 = \\mathbf{2 : 3}$.', kind: 'apply' },
      { q: 'ഒരു ത്രികോണത്തിന്റെ വശങ്ങൾ ഇരട്ടിയാക്കിയാൽ പരപ്പളവ് എത്ര മടങ്ങായി വർദ്ധിക്കും?', a: '$2^2 = \\mathbf{4\\text{ മടങ്ങ്}}$ വർദ്ധിക്കും.', kind: 'recall' }
    ]
  }
);
