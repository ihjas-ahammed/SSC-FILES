/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 12: Parallel Lines (സമാന്തരവരകൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm8.12.1.parallel-lines-transversal',
    sec: '8.12.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Parallel Lines and Transversal Angles',
    title_ml: 'സമാന്തരവരകളും ചേദകരേഖയുണ്ടാക്കുന്ന കോണുകളും',
    oneLine_en: 'When a transversal cuts two parallel lines, corresponding angles are equal, alternate interior angles are equal, and co-interior angles sum to 180°.',
    oneLine_ml: 'രണ്ട് സമാന്തരവരകളെ ഒരു ചേദകരേഖ ഖണ്ഡിക്കുമ്പോൾ സമാനകോണുകൾ തുല്യമാണ്, ഏകാന്തരകോണുകൾ തുല്യമാണ്, ഒരു വശത്തെ ആന്തരകോണുകളുടെ തുക 180° ആണ്.',
    statement_en: `<p>Two lines in a plane that never meet, no matter how far extended, are called <b>parallel lines</b> ($l_1 \\parallel l_2$). The perpendicular distance between them is constant everywhere.</p>
      <p>A straight line that intersects two or more lines at distinct points is called a <b>transversal</b> (ചേദകരേഖ).</p>
      <p>When a transversal intersects two parallel lines:</p>
      <ul>
        <li><b>Corresponding Angles (സമാനകോണുകൾ)</b> are equal: each pair at the same relative position at each intersection is identical.</li>
        <li><b>Alternate Interior Angles (ഏകാന്തരകോണുകൾ)</b> are equal: angles on opposite sides of the transversal between the two lines are equal.</li>
        <li><b>Co-interior Angles (ഒരു വശത്തെ ആന്തരകോണുകൾ)</b> are supplementary: the sum of the interior angles on the same side of the transversal is $180^\\circ$.</li>
      </ul>
      <p><b>Converse:</b> If a transversal cuts two lines such that alternate angles or corresponding angles are equal, or co-interior angles add to $180^\\circ$, then the two lines are strictly parallel.</p>`,
    statement_ml: `<p>ഒരു തലത്തിലെ രണ്ട് വരകൾ എത്ര നീട്ടിയാലും പരസ്പരം കൂട്ടിമുട്ടുന്നില്ലെങ്കിൽ അവയെ <b>സമാന്തരവരകൾ</b> ($l_1 \\parallel l_2$) എന്ന് വിളിക്കുന്നു. അവയ്ക്കിടയിലുള്ള ലംബദൂരം എല്ലായിടത്തും തുല്യമായിരിക്കും.</p>
      <p>രണ്ടോ അതിലധികമോ വരകളെ വ്യത്യസ്ത ബിന്ദുക്കളിൽ മുറിച്ചു കടന്നുപോകുന്ന വരയാണ് <b>ചേദകരേഖ</b>.</p>
      <p>സമാന്തരവരകളെ ഒരു ചേദകരേഖ ഖണ്ഡിക്കുമ്പോൾ:</p>
      <ul>
        <li><b>സമാനകോണുകൾ (Corresponding Angles)</b> തുല്യമായിരിക്കും: ഒരേ സ്ഥാനങ്ങളിൽ വരുന്ന കോണുകൾ തുല്യമാണ്.</li>
        <li><b>ഏകാന്തരകോണുകൾ (Alternate Interior Angles)</b> തുല്യമായിരിക്കും: ചേദകരേഖയുടെ എതിർവശങ്ങളിൽ ഉള്ളിലായി വരുന്ന കോണുകൾ തുല്യമാണ്.</li>
        <li><b>ഒരു വശത്തെ ആന്തരകോണുകൾ (Co-interior Angles)</b> അനുപൂരകങ്ങളാണ് (തുക $180^\\circ$ ആണ്).</li>
      </ul>
      <p><b>വിപരീതതത്വം:</b> ഒരു ചേദകരേഖ രണ്ട് വരകളെ ഖണ്ഡിക്കുമ്പോൾ ഏകാന്തരകോണുകളോ സമാനകോണുകളോ തുല്യമായാൽ, അല്ലെങ്കിൽ ഒരു വശത്തെ ആന്തരകോണുകളുടെ തുക $180^\\circ$ ആയാൽ, ആ വരകൾ സമാന്തരങ്ങളായിരിക്കും.</p>`,
    intuition_en: `<p>Think of parallel railway tracks crossed by a straight road at an angle. The slant angle of the road relative to each rail is exactly identical.</p>`,
    intuition_ml: `<p>നേരായ റെയിൽപ്പാളങ്ങൾക്ക് കുറുകെ പോകുന്ന റോഡ് രണ്ട് പാളങ്ങളുമായും ഉണ്ടാക്കുന്ന ചരിവുകോണുകൾ ഒന്നുതന്നെയായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Linear pairs and vertically opposite angles together with the parallel postulate establish all angle equalities.',
      idea_ml: 'രേഖീയജോടിയും എതിർകോണുകളും സമാന്തരസ്വഭാവവും ഉപയോഗിച്ച് കോൺബന്ധങ്ങൾ തെളിയിക്കുന്നു.',
      why_en: 'Alternate angles form Z-shapes, corresponding angles form F-shapes, and interior angles form C-shapes.',
      why_ml: 'ഏകാന്തരകോണുകൾ Z-ആകൃതിയും, സമാനകോണുകൾ F-ആകൃതിയും, ആന്തരകോണുകൾ C-ആകൃതിയും ഉണ്ടാക്കുന്നു.',
      rungs_en: [
        { why_en: 'Corresponding angles are equal by translation along the transversal.', m: '\\angle 1 = \\angle 5' },
        { why_en: 'Vertically opposite angles are equal.', m: '\\angle 1 = \\angle 3' },
        { why_en: 'Therefore alternate angles are equal.', m: '\\angle 3 = \\angle 5' },
        { why_en: 'Linear pair adds to 180 degrees.', m: '\\angle 3 + \\angle 6 = 180^\\circ' }
      ],
      rungs_ml: [
        { why_ml: 'സമാനകോണുകൾ തുല്യമാണ്.', m: '\\angle 1 = \\angle 5' },
        { why_ml: 'എതിർകോണുകൾ തുല്യമാണ്.', m: '\\angle 1 = \\angle 3' },
        { why_ml: 'അതിനാൽ ഏകാന്തരകോണുകൾ തുല്യമാണ്.', m: '\\angle 3 = \\angle 5' },
        { why_ml: 'രേഖീയജോടിയുടെ തുക 180 ഡിഗ്രിയാണ്.', m: '\\angle 3 + \\angle 6 = 180^\\circ' }
      ]
    },
    needs: ['m8.2.1.sss-congruence'],
    traps_en: [
      'Interior angles on the same side are SUPPLEMENTARY (sum = 180°), NOT equal, unless the transversal is perpendicular.',
      'Alternate angles are only equal when the lines are truly parallel.'
    ],
    traps_ml: [
      'ഒരു വശത്തെ ആന്തരകോണുകൾ തുല്യമല്ല, അവയുടെ തുകയാണ് 180 ഡിഗ്രി ആകുന്നത് (ചേദകരേഖ ലംബമാകുമ്പോൾ മാത്രമാണ് തുല്യമാകുന്നത്).',
      'വരകൾ സമാന്തരമാകുമ്പോൾ മാത്രമേ ഏകാന്തരകോണുകൾ തുല്യമാകൂ.'
    ],
    cards_en: [
      { q: 'If two parallel lines are cut by a transversal and one angle is 65°, what is its alternate interior angle?', a: 'Alternate interior angles are equal, so it is $65^\\circ$.', kind: 'apply' },
      { q: 'What is the sum of co-interior angles on the same side of a transversal intersecting parallel lines?', a: 'The sum is always $180^\\circ$.', kind: 'recall' },
      { q: 'If one interior angle is 110°, what is the interior angle on the same side of the transversal?', a: '$180^\\circ - 110^\\circ = \\mathbf{70^\\circ}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'രണ്ട് സമാന്തരവരകളെ ഒരു ചേദകരേഖ ഖണ്ഡിക്കുമ്പോൾ ഒരു കോൺ 65° ആയാൽ അതിന്റെ ഏകാന്തരകോൺ എത്ര?', a: 'ഏകാന്തരകോണുകൾ തുല്യമായതിനാൽ $65^\\circ$ ആണ്.', kind: 'apply' },
      { q: 'സമാന്തരവരകളുടെ ഒരു വശത്തെ ആന്തരകോണുകളുടെ തുക എത്രയാണ്?', a: 'തുക എപ്പോഴും $180^\\circ$ ആയിരിക്കും.', kind: 'recall' },
      { q: 'ഒരു ആന്തരകോൺ 110° ആയാൽ ചേദകരേഖയുടെ അതേവശത്തുള്ള മറ്റേ ആന്തരകോൺ എത്ര?', a: '$180^\\circ - 110^\\circ = \\mathbf{70^\\circ}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.12.2.equidistant-parallel-lines',
    sec: '8.12.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Equidistant Parallel Lines Theorem',
    title_ml: 'തുല്യ അകലത്തിലുള്ള സമാന്തരവരകളുടെ സിദ്ധാന്തം',
    oneLine_en: 'If a set of parallel lines cuts off equal intercepts on one transversal, it cuts off equal intercepts on any other transversal.',
    oneLine_ml: 'ഒരു കൂട്ടം സമാന്തരവരകൾ ഒരു വരയെ തുല്യഭാഗങ്ങളായി ഭാഗിക്കുന്നുവെങ്കിൽ, അവ മറ്റേതൊരു വരയേയും തുല്യഭാഗങ്ങളായിത്തന്നെ ഭാഗിക്കും.',
    statement_en: `<p>Consider three or more parallel lines $L_1, L_2, L_3$. If they intercept equal line segments on a transversal line $T_1$ (so that $AB = BC$), then they intercept equal line segments on <b>any other transversal</b> $T_2$ (so that $PQ = QR$).</p>
      $$\\text{If } L_1 \\parallel L_2 \\parallel L_3 \\text{ and } AB = BC, \\text{ then } PQ = QR.$$
      <p><b>Significance:</b> This fundamental geometric theorem guarantees that equidistant parallel lines preserve equality of division across all intersecting lines, regardless of their inclination.</p>`,
    statement_ml: `<p>$L_1, L_2, L_3$ എന്നിവ മൂന്ന് സമാന്തരവരകളാണെന്നിരിക്കട്ടെ. ഇവ $T_1$ എന്ന ചേദകരേഖയെ തുല്യഭാഗങ്ങളായാണ് മുറിക്കുന്നതെങ്കിൽ ($AB = BC$), അവ മറ്റേതൊരു ചേദകരേഖയായ $T_2$-വിനെയും <b>തുല്യഭാഗങ്ങളായിത്തന്നെ</b> മുറിക്കും ($PQ = QR$).</p>
      $$L_1 \\parallel L_2 \\parallel L_3 \\text{ കൂടാതെ } AB = BC \\text{ ആണെങ്കിൽ, } PQ = QR \\text{ ആയിരിക്കും.}$$
      <p><b>പ്രാധാന്യം:</b> സമാന്തരവരകൾ തമ്മിലുള്ള അകലം തുല്യമായിരിക്കുമ്പോൾ, അവയെ ഖണ്ഡിക്കുന്ന ഏത് വരയിലെയും തുണ്ടുകളുടെ നീളം തുല്യമായിരിക്കും.</p>`,
    intuition_en: `<p>Ruled notebook lines are equally spaced. If you lay a ruler slanted at any angle across the lines, the distance between any two adjacent ruled lines along your ruler is always constant.</p>`,
    intuition_ml: `<p>വരയിട്ട നോട്ടുപുസ്തകത്തിലെ വരകൾ തുല്യ അകലത്തിലാണ്. അതിൽ ഏത് ചരിവിൽ സ്കെയിൽ വെച്ചാലും അടുത്തടുത്ത വരകൾക്കിടയിലെ സ്കെയിൽ അകലം തുല്യമായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Draw auxiliary lines parallel to the first transversal to form congruent triangles between adjacent parallel strips.',
      idea_ml: 'സമാന്തരവരകൾക്കിടയിൽ സമാന്തരരേഖകൾ വരച്ച് തുല്യത്രികോണങ്ങൾ ഉണ്ടാക്കി തെളിയിക്കുന്നു.',
      why_en: 'ASA congruence of the triangles proves corresponding sides on the second transversal are equal.',
      why_ml: 'ASA തുല്യത വഴി രണ്ടാമത്തെ വരയിലെ തുണ്ടുകൾ തുല്യമാണെന്ന് തെളിയുന്നു.',
      rungs_en: [
        { why_en: 'Draw parallel segments to T1 from P and Q meeting L2 and L3.', m: 'PM \\parallel T_1, \\quad QN \\parallel T_1' },
        { why_en: 'Parallelogram opposite sides are equal.', m: 'PM = AB, \\quad QN = BC' },
        { why_en: 'Given equal intercepts on T1.', m: 'AB = BC \\implies PM = QN' },
        { why_en: 'Triangles PMQ and QNR have equal angles and one equal side (ASA).', m: '\\triangle PMQ \\cong \\triangle QNR' },
        { why_en: 'Corresponding sides of congruent triangles are equal.', m: 'PQ = QR' }
      ],
      rungs_ml: [
        { why_ml: 'P-ൽ നിന്നും Q-വിൽ നിന്നും T1-ന് സമാന്തരമായി വരകൾ വരയ്ക്കുന്നു.', m: 'PM \\parallel T_1, \\quad QN \\parallel T_1' },
        { why_ml: 'സാമാന്തരികത്തിന്റെ എതിർവശങ്ങൾ തുല്യമാണ്.', m: 'PM = AB, \\quad QN = BC' },
        { why_ml: 'T1-ലെ ഭാഗങ്ങൾ തുല്യമായതിനാൽ.', m: 'AB = BC \\implies PM = QN' },
        { why_ml: 'ത്രികോണങ്ങൾ $\triangle PMQ, \triangle QNR$ എന്നിവ $ASA$ പ്രകാരം തുല്യമാണ്.', m: '\\triangle PMQ \\cong \\triangle QNR' },
        { why_ml: 'തുല്യത്രികോണങ്ങളിലെ തുല്യകോണുകൾക്കെതിരെയുള്ള വശങ്ങൾ തുല്യമാണ്.', m: 'PQ = QR' }
      ]
    },
    needs: ['m8.12.1.parallel-lines-transversal', 'm8.2.2.asa-congruence'],
    traps_en: [
      'The length PQ does NOT equal AB; what is equal is PQ = QR, not PQ = AB.',
      'The parallel lines must be mutually parallel; non-parallel lines do not have this property.'
    ],
    traps_ml: [
      'രണ്ടാമത്തെ വരയിലെ തുണ്ടിന്റെ നീളം (PQ) ആദ്യത്തെ വരയിലെ തുണ്ടിന് (AB) തുല്യമാകണമെന്നില്ല; PQ = QR ആണ് തുല്യമാകുന്നത്.',
      'വരകൾ പരസ്പരം സമാന്തരമായിരിക്കണം.'
    ],
    cards_en: [
      { q: 'Three parallel lines cut a line into two equal segments of 4 cm each. What does it do to another line intersecting them?', a: 'It cuts the second line into two equal segments as well.', kind: 'recall' },
      { q: 'If three parallel lines make intercepts of 5 cm and 5 cm on one line, and intercepts on another line are x cm and 7 cm, find x.', a: 'Since intercepts on the first are equal, $x = \\mathbf{7\\text{ cm}}$.', kind: 'apply' },
      { q: 'Does PQ equal AB when parallel lines cut two transversals?', a: 'No, in general $PQ \\neq AB$, but $PQ = QR$ if $AB = BC$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'മൂന്ന് സമാന്തരവരകൾ ഒരു വരയെ 4 cm വീതമുള്ള രണ്ട് തുല്യഭാഗങ്ങളാക്കുന്നു. മറ്റൊരു വരയെ ഇവ എങ്ങനെ ഭാഗിക്കും?', a: 'മറ്റേ വരയേയും തുല്യഭാഗങ്ങളായിത്തന്നെ ഭാഗിക്കും.', kind: 'recall' },
      { q: 'മൂന്ന് സമാന്തരവരകൾ ഒരു വരയിൽ 5 cm, 5 cm വീതമുള്ള തുണ്ടുകൾ ഉണ്ടാക്കുന്നു. മറ്റൊരു വരയിൽ x cm, 7 cm തുണ്ടുകൾ ഉണ്ടാക്കിയാൽ x എത്ര?', a: 'ആദ്യ വരയിലെ തുണ്ടുകൾ തുല്യമായതിനാൽ $x = \\mathbf{7\\text{ cm}}$ ആയിരിക്കും.', kind: 'apply' },
      { q: 'സമാന്തരവരകൾ മുറിക്കുമ്പോൾ രണ്ട് വരകളിലെയും തുണ്ടുകൾ തുല്യനീളമായിരിക്കുമോ?', a: 'അല്ല, പൊതുവെ $PQ \\neq AB$, എന്നാൽ $AB = BC$ ആയാൽ $PQ = QR$ ആയിരിക്കും.', kind: 'recall' }
    ]
  },

  {
    id: 'm8.12.3.dividing-line-segments',
    sec: '8.12.3',
    kind: 'method',
    tier: 'core',
    title_en: 'Dividing Line Segments in Equal Parts and Ratios',
    title_ml: 'വരയെ തുല്യഭാഗങ്ങളാക്കലും അംശബന്ധത്തിൽ വിഭജിക്കലും',
    oneLine_en: 'A line segment can be accurately divided into n equal parts or in a given ratio m:n by drawing an auxiliary ray with equal marks and connecting with parallel lines.',
    oneLine_ml: 'ഒരു വരയെ എത്ര തുല്യഭാഗങ്ങളാക്കാനും തന്നിരിക്കുന്ന അംശബന്ധത്തിൽ ഭാഗിക്കാനും സഹായരേഖയും സമാന്തരവരകളും ഉപയോഗിക്കുന്നു.',
    statement_en: `<p>To divide a line segment $AB$ of given length into $n$ equal parts without fractional measurement:</p>
      <ol>
        <li>Draw an auxiliary ray $AX$ making a convenient acute angle with $AB$.</li>
        <li>Using compasses with any fixed radius, mark off $n$ equal segments on ray $AX$: $A_1, A_2, \\dots, A_n$.</li>
        <li>Join the last point $A_n$ to the endpoint $B$.</li>
        <li>Through each intermediate mark $A_1, A_2, \\dots, A_{n-1}$, draw lines parallel to $A_n B$.</li>
        <li>By the equidistant parallel lines theorem, these parallel lines divide $AB$ into $n$ strictly equal parts.</li>
      </ol>
      <p><b>Dividing in a Given Ratio $m : n$:</b></p>
      <p>To divide $AB$ in the ratio $m : n$, mark off $m + n$ equal units on ray $AX$. Join $A_{m+n}$ to $B$, and draw a parallel line through mark $A_m$. The point $P$ where this line cuts $AB$ divides it such that:</p>
      $$\\frac{AP}{PB} = \\frac{m}{n}$$`,
    statement_ml: `<p>തന്നിരിക്കുന്ന നീളമുള്ള ഒരു വര $AB$-യെ $n$ തുല്യഭാഗങ്ങളായി ഭാഗിക്കാൻ:</p>
      <ol>
        <li>$AB$-യുമായി ന്യൂനകോണുണ്ടാക്കുന്ന $AX$ എന്ന സഹായരശ്മി വരയ്ക്കുക.</li>
        <li>കോമ്പസ് ഉപയോഗിച്ച് ഒരേ അളവിൽ $n$ തുല്യ അടയാളങ്ങൾ $A_1, A_2, \\dots, A_n$ രശ്മിയിൽ രേഖപ്പെടുത്തുക.</li>
        <li>അവസാനത്തെ ബിന്ദു $A_n$-നെ $B$-യുമായി യോജിപ്പിക്കുക.</li>
        <li>മറ്റ് ബിന്ദുക്കളിലൂടെ $A_n B$-ക്ക് സമാന്തരമായി വരകൾ വരയ്ക്കുക.</li>
        <li>സമാന്തരവരകളുടെ സിദ്ധാന്തപ്രകാരം ഈ വരകൾ $AB$-യെ $n$ തുല്യഭാഗങ്ങളായി ഭാഗിക്കുന്നു.</li>
      </ol>
      <p><b>തന്നിരിക്കുന്ന അംശബന്ധത്തിൽ ($m : n$) വിഭജിക്കൽ:</b></p>
      <p>$AB$-യെ $m : n$ എന്ന അംശബന്ധത്തിൽ ഭാഗിക്കാൻ, സഹായരശ്മിയിൽ ആകെ $m + n$ തുല്യ അടയാളങ്ങൾ ഇടുക. $(m+n)$-ാമത്തെ ബിന്ദുവിനെ $B$-യുമായി യോജിപ്പിച്ച്, $m$-ാമത്തെ ബിന്ദുവിലൂടെ സമാന്തരവര വരയ്ക്കുക. ഈ വര $AB$-യെ മുറിക്കുന്ന ബിന്ദു $P$ വരയെ $m : n$ അംശബന്ധത്തിൽ ഭാഗിക്കുന്നു:</p>
      $$\\frac{AP}{PB} = \\frac{m}{n}$$`,
    intuition_en: `<p>A ladder with equally spaced rungs projects shadows of equal spacing on any flat ground, no matter what angle the sun shines from.</p>`,
    intuition_ml: `<p>തുല്യ അകലത്തിൽ പടികളുള്ള ഒരു കോണി ഏത് ചരിവിൽ വെച്ചാലും തറയിൽ വീഴുന്ന നിഴൽത്തുണ്ടുകൾ തുല്യ അകലത്തിലായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Equidistant parallel lines project equal intercepts from the ray onto the line segment.',
      idea_ml: 'സഹായരേഖയിലെ തുല്യതുണ്ടുകളെ സമാന്തരവരകൾ വഴി തന്നിരിക്കുന്ന വരയിലേക്ക് തുല്യമായി പ്രതിഫലിപ്പിക്കുന്നു.',
      why_en: 'Since intercepts on ray AX are equal, intercepts on segment AB must also be equal.',
      why_ml: 'രശ്മി AX-ലെ തുണ്ടുകൾ തുല്യമായതിനാൽ AB-യിലെ തുണ്ടുകളും തുല്യമായിരിക്കും.',
      rungs_en: [
        { why_en: 'Mark points at equal distance on AX.', m: 'AA_1 = A_1A_2 = \\dots = A_{n-1}A_n' },
        { why_en: 'Draw parallel lines to the terminal line AnB.', m: 'A_1P_1 \\parallel A_2P_2 \\parallel \\dots \\parallel A_n B' },
        { why_en: 'By equidistant parallel lines theorem.', m: 'AP_1 = P_1P_2 = \\dots = P_{n-1}B' }
      ],
      rungs_ml: [
        { why_ml: 'AX-ൽ തുല്യ അകലത്തിൽ ബിന്ദുക്കൾ അടയാളപ്പെടുത്തുന്നു.', m: 'AA_1 = A_1A_2 = \\dots = A_{n-1}A_n' },
        { why_ml: 'അവസാന വരയ്ക്ക് സമാന്തരമായി വരകൾ വരയ്ക്കുന്നു.', m: 'A_1P_1 \\parallel A_2P_2 \\parallel \\dots \\parallel A_n B' },
        { why_ml: 'സമാന്തരവരകളുടെ സിദ്ധാന്തപ്രകാരം.', m: 'AP_1 = P_1P_2 = \\dots = P_{n-1}B' }
      ]
    },
    needs: ['m8.12.2.equidistant-parallel-lines'],
    traps_en: [
      'To divide in ratio 3 : 4, mark 3 + 4 = 7 equal parts on the ray, not 4 parts.',
      'The lines drawn through the marks must be STRICTLY parallel to the terminal line.'
    ],
    traps_ml: [
      '3 : 4 എന്ന അംശബന്ധത്തിൽ ഭാഗിക്കാൻ സഹായരേഖയിൽ 3 + 4 = 7 ഭാഗങ്ങളാണ് അടയാളപ്പെടുത്തേണ്ടത്, 4 ഭാഗമല്ല.',
      'വരയ്ക്കുന്ന വരകൾ അവസാന വരയ്ക്ക് തികച്ചും സമാന്തരമായിരിക്കണം.'
    ],
    cards_en: [
      { q: 'To divide a 10 cm line segment into 5 equal parts, how many marks are made on the ray?', a: '5 equally spaced marks.', kind: 'recall' },
      { q: 'To divide a segment in the ratio 2 : 3, how many total equal parts must be marked on the ray?', a: '$2 + 3 = \\mathbf{5}$ parts; the parallel line is drawn through the 2nd mark.', kind: 'apply' },
      { q: 'A 14 cm line is divided in the ratio 3 : 4. What is the length of the shorter piece?', a: 'Total parts $= 7$. Each part $= 14 / 7 = 2\\text{ cm}$. Shorter piece $= 3 \\times 2 = \\mathbf{6\\text{ cm}}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: '10 cm നീളമുള്ള വരയെ 5 തുല്യഭാഗങ്ങളാക്കാൻ സഹായരശ്മിയിൽ എത്ര അടയാളങ്ങൾ ഇടണം?', a: '5 തുല്യ അടയാളങ്ങൾ.', kind: 'recall' },
      { q: 'ഒരു വരയെ 2 : 3 എന്ന അംശബന്ധത്തിൽ ഭാഗിക്കാൻ സഹായരശ്മിയിൽ ആകെ എത്ര ഭാഗങ്ങൾ വേണം?', a: '$2 + 3 = \\mathbf{5}$ ഭാഗങ്ങൾ; രണ്ടാമത്തെ അടയാളത്തിലൂടെയാണ് സമാന്തരവര വരയ്ക്കുന്നത്.', kind: 'apply' },
      { q: '14 cm നീളമുള്ള വരയെ 3 : 4 എന്ന അംശബന്ധത്തിൽ ഭാഗിച്ചാൽ ചെറിയ കഷ്ണത്തിന്റെ നീളം എത്ര?', a: 'ആകെ ഭാഗങ്ങൾ $= 7$. ഒരു ഭാഗം $= 14 / 7 = 2\\text{ cm}$. ചെറിയ ഭാഗം $= 3 \\times 2 = \\mathbf{6\\text{ cm}}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.12.4.three-parallel-lines-theorem',
    sec: '8.12.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Three Parallel Lines & Triangle Proportionality Theorem',
    title_ml: 'മൂന്ന് സമാന്തരവരകളും ത്രികോണ അനുപാത സിദ്ധാന്തവും',
    oneLine_en: 'Three or more parallel lines intercept any two transversals proportionally: a/b = c/d; in a triangle, a line parallel to one side divides the other two sides in the same ratio.',
    oneLine_ml: 'മൂന്നോ അതിലധികമോ സമാന്തരവരകൾ രണ്ട് ചേദകരേഖകളെ ഒരേ അംശബന്ധത്തിൽ ഭാഗിക്കുന്നു: a/b = c/d; ത്രികോണത്തിൽ ഒരു വശത്തിന് സമാന്തരമായി വരയ്ക്കുന്ന വര മറ്റ് രണ്ട് വശങ്ങളെ ഒരേ അംശബന്ധത്തിൽ ഭാഗിക്കുന്നു.',
    statement_en: `<p><b>Three Parallel Lines Theorem:</b> Three parallel lines cut any two transversals in the same ratio:</p>
      $$\\frac{AB}{BC} = \\frac{PQ}{QR}$$
      <p>where $A, B, C$ are the intercept points on transversal $T_1$, and $P, Q, R$ are the corresponding intercept points on transversal $T_2$.</p>
      <p><b>Triangle Proportionality (Thales' Theorem):</b></p>
      <p>A straight line drawn parallel to any side of a triangle divides the other two sides in the exact same ratio:</p>
      $$\\text{In } \\triangle ABC, \\text{ if } DE \\parallel BC, \\text{ then } \\frac{AD}{DB} = \\frac{AE}{EC}$$
      <p>Also, by adding $1$ to both sides, we obtain:</p>
      $$\\frac{AB}{AD} = \\frac{AC}{AE} \\quad \\text{and} \\quad \\frac{AB}{DB} = \\frac{AC}{EC}$$`,
    statement_ml: `<p><b>മൂന്ന് സമാന്തരവരകളുടെ സിദ്ധാന്തം:</b> മൂന്ന് സമാന്തരവരകൾ ഏത് രണ്ട് ചേദകരേഖകളെയും ഒരേ അംശബന്ധത്തിലാണ് ഭാഗിക്കുന്നത്:</p>
      $$\\frac{AB}{BC} = \\frac{PQ}{QR}$$
      <p>ഇവിടെ $A, B, C$ എന്നിവ $T_1$ എന്ന വരയിലെ ബിന്ദുക്കളും, $P, Q, R$ എന്നിവ $T_2$ എന്ന വരയിലെ അനുരൂപ ബിന്ദുക്കളുമാണ്.</p>
      <p><b>ത്രികോണ അനുപാത സിദ്ധാന്തം (ഥേൽസ് സിദ്ധാന്തം):</b></p>
      <p>ഒരു ത്രികോണത്തിന്റെ ഒരു വശത്തിന് സമാന്തരമായി വരയ്ക്കുന്ന വര മറ്റ് രണ്ട് വശങ്ങളെ ഒരേ അംശബന്ധത്തിൽ ഭാഗിക്കുന്നു:</p>
      $$\\triangle ABC\\text{-ൽ } DE \\parallel BC \\text{ ആണെങ്കിൽ, } \\frac{AD}{DB} = \\frac{AE}{EC}$$
      <p>കൂടാതെ താഴെ പറയുന്ന അനുപാതങ്ങളും സത്യമാണ്:</p>
      $$\\frac{AB}{AD} = \\frac{AC}{AE} \\quad \\text{അതുപോലെ} \\quad \\frac{AB}{DB} = \\frac{AC}{EC}$$`,
    intuition_en: `<p>Scaling or zooming in on a shape expands all segments by the same multiplier, preserving proportional ratios across parallel slices.</p>`,
    intuition_ml: `<p>ഒരു ചിത്രത്തെ വലുതാക്കുമ്പോൾ എല്ലാ ഭാഗങ്ങളും ഒരേ തോതിൽ വലുതാകുന്നതുപോലെ സമാന്തരവരകൾക്കിടയിലെ നീളങ്ങളുടെ അനുപാതം സ്ഥിരമായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Using area ratios of triangles having the same height or connecting through the equidistant line theorem.',
      idea_ml: 'തുല്യ ഉയരമുള്ള ത്രികോണങ്ങളുടെ പരപ്പളവുകളുടെ അനുപാതം അവയുടെ പാദങ്ങളുടെ അനുപാതത്തിന് തുല്യമാണെന്ന തത്വം ഉപയോഗിച്ച് തെളിയിക്കുന്നു.',
      why_en: 'Triangles ADE and BDE share the same height from E onto AB, so their areas are in ratio AD : DB.',
      why_ml: 'ത്രികോണങ്ങൾ ADE, BDE എന്നിവയ്ക്ക് E-ൽ നിന്നുള്ള ഉയരം ഒന്നായതിനാൽ പരപ്പളവുകളുടെ അനുപാതം AD : DB ആയിരിക്കും.',
      rungs_en: [
        { why_en: 'Ratio of areas of triangles with common vertex E.', m: '\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle BDE)} = \\frac{AD}{DB}' },
        { why_en: 'Ratio of areas of triangles with common vertex D.', m: '\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle CDE)} = \\frac{AE}{EC}' },
        { why_en: 'Triangles on same base DE between parallels DE and BC have equal area.', m: '\\text{Area}(\\triangle BDE) = \\text{Area}(\\triangle CDE)' },
        { why_en: 'Equating both area ratios yields the theorem.', m: '\\frac{AD}{DB} = \\frac{AE}{EC}' }
      ],
      rungs_ml: [
        { why_ml: 'E ശീർഷമായുള്ള ത്രികോണങ്ങളുടെ പരപ്പളവ് അനുപാതം.', m: '\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle BDE)} = \\frac{AD}{DB}' },
        { why_ml: 'D ശീർഷമായുള്ള ത്രികോണങ്ങളുടെ പരപ്പളവ് അനുപാതം.', m: '\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle CDE)} = \\frac{AE}{EC}' },
        { why_ml: 'DE എന്ന ഒരേ പാദത്തിലും സമാന്തരവരകൾക്കിടയിലുമുള്ള ത്രികോണങ്ങളുടെ പരപ്പളവ് തുല്യമാണ്.', m: '\\text{Area}(\\triangle BDE) = \\text{Area}(\\triangle CDE)' },
        { why_ml: 'ഇരു പരപ്പളവ് അനുപാതങ്ങളും തുല്യമാകുമ്പോൾ സിദ്ധാന്തം ലഭിക്കുന്നു.', m: '\\frac{AD}{DB} = \\frac{AE}{EC}' }
      ]
    },
    needs: ['m8.12.3.dividing-line-segments'],
    traps_en: [
      'Make sure the line is parallel to the THIRD side, not any arbitrary transversal.',
      'AD/DB = AE/EC, but AD/AB = AE/AC = DE/BC (note the whole side in the base ratio).'
    ],
    traps_ml: [
      'വര മൂന്നാമത്തെ വശത്തിന് സമാന്തരമായിരിക്കണം.',
      'AD/DB = AE/EC ആണ്, എന്നാൽ DE/BC കാണാൻ AD/AB = AE/AC ആണ് ഉപയോഗിക്കേണ്ടത്.'
    ],
    cards_en: [
      { q: 'In triangle ABC, DE is parallel to BC. If AD = 3 cm, DB = 6 cm, and AE = 2 cm, find EC.', a: '$\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{3}{6} = \\frac{2}{EC} \\implies EC = \\mathbf{4\\text{ cm}}$.', kind: 'apply' },
      { q: 'Three parallel lines cut one transversal into lengths 4 cm and 6 cm. If they cut another transversal into x and 9 cm, find x.', a: '$\\frac{4}{6} = \\frac{x}{9} \\implies x = \\frac{4 \\times 9}{6} = \\mathbf{6\\text{ cm}}$.', kind: 'apply' },
      { q: 'State Thales theorem in your own words.', a: 'A line parallel to one side of a triangle divides the other two sides in the same ratio.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ത്രികോണം ABC-യിൽ DE സമാന്തരം BC ആണ്. AD = 3 cm, DB = 6 cm, AE = 2 cm ആയാൽ EC എത്ര?', a: '$\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{3}{6} = \\frac{2}{EC} \\implies EC = \\mathbf{4\\text{ cm}}$.', kind: 'apply' },
      { q: 'മൂന്ന് സമാന്തരവരകൾ ഒരു വരയിൽ 4 cm, 6 cm തുണ്ടുകളുണ്ടാക്കുന്നു. മറ്റൊരു വരയിൽ x, 9 cm തുണ്ടുകളുണ്ടാക്കിയാൽ x എത്ര?', a: '$\\frac{4}{6} = \\frac{x}{9} \\implies x = \\frac{4 \\times 9}{6} = \\mathbf{6\\text{ cm}}$.', kind: 'apply' },
      { q: 'ഥേൽസ് സിദ്ധാന്തം പ്രസ്താവിക്കുക.', a: 'ത്രികോണത്തിന്റെ ഒരു വശത്തിന് സമാന്തരമായി വരയ്ക്കുന്ന വര മറ്റ് രണ്ട് വശങ്ങളെ ഒരേ അംശബന്ധത്തിൽ ഭാഗിക്കുന്നു.', kind: 'recall' }
    ]
  }
);
