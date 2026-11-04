/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 6: Parallel Lines (സമാന്തരവരകൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm9.6.1.equal-division-of-segments',
    sec: '9.6.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Equal Division of Line Segments by Parallel Lines',
    title_ml: 'സമാന്തരവരകൾ വരകളെ തുല്യഭാഗങ്ങളാക്കൽ',
    oneLine_en: 'If three or more equidistant parallel lines intercept equal segments on one transversal, they intercept equal segments on any other transversal line as well.',
    oneLine_ml: 'തുല്യ അകലത്തിലുള്ള മൂന്നോ അതിലധികമോ സമാന്തരവരകൾ ഒരു ചേദകരേഖയിൽ തുല്യഭാഗങ്ങൾ ഉണ്ടാക്കുന്നുവെങ്കിൽ, മറ്റേതൊരു ചേദകരേഖയിലും അവ തുല്യഭാഗങ്ങൾ തന്നെ ഉണ്ടാക്കും.',
    statement_en: `<p>Let three or more parallel lines $L_1, L_2, L_3, \\dots$ be equally spaced such that on a transversal line $T_1$, the intercepts are equal:</p>
      $$AB = BC = CD = \\dots$$
      <p>Then on any other transversal line $T_2$ cutting across these parallel lines, the corresponding intercepts are strictly equal:</p>
      $$\\mathbf{PQ = QR = RS = \\dots}$$
      <p><b>Geometric Construction Application:</b></p>
      <p>To divide a given line segment $AB$ into $n$ equal parts:</p>
      <ol>
        <li>Draw any acute ray $AX$ making an angle with $AB$.</li>
        <li>Using a compass with any convenient fixed opening, mark $n$ equal segments $A_1, A_2, \\dots, A_n$ on $AX$.</li>
        <li>Join the last point $A_n$ to endpoint $B$.</li>
        <li>Through the intermediate points $A_1, A_2, \\dots, A_{n-1}$, draw parallel lines to $A_n B$. These parallel lines divide $AB$ into $n$ strictly equal segments.</li>
      </ol>`,
    statement_ml: `<p>തുല്യ അകലത്തിലുള്ള സമാന്തരവരകളാണ് $L_1, L_2, L_3, \\dots$ എന്നിരിക്കട്ടെ. $T_1$ എന്ന ചേദകരേഖയിൽ ഇവ തുല്യ നീളമുള്ള ഭാഗങ്ങൾ ഉണ്ടാക്കുന്നുവെങ്കിൽ:</p>
      $$AB = BC = CD = \\dots$$
      <p>ഈ സമാന്തരവരകൾ മുറിച്ചു കടന്നുപോകുന്ന മറ്റേതൊരു ചേദകരേഖയായ $T_2$-ലും ഉണ്ടാക്കുന്ന ഭാഗങ്ങൾ പരസ്പരം തുല്യമായിരിക്കും:</p>
      $$\\mathbf{PQ = QR = RS = \\dots}$$
      <p><b>ജ്യാമിതീയ നിർമ്മിതി പ്രയോഗം:</b></p>
      <p>ഒരു വര $AB$-യെ $n$ തുല്യഭാഗങ്ങളാക്കാൻ:</p>
      <ol>
        <li>$AB$-യുമായി ന്യൂനകോണുണ്ടാക്കുന്ന $AX$ എന്ന കിരണരേഖ വരയ്ക്കുക.</li>
        <li>കോമ്പസിൽ നിശ്ചിത അകലമെടുത്ത് $AX$-ൽ $n$ തുല്യഭാഗങ്ങൾ ($A_1, A_2, \\dots, A_n$) അടയാളപ്പെടുത്തുക.</li>
        <li>അവസാന ബിന്ദുവായ $A_n$-നെ $B$-യുമായി യോജിപ്പിക്കുക.</li>
        <li>മറ്റ് ബിന്ദുക്കളിലൂടെ $A_n B$-ക്ക് സമാന്തരമായി വരകൾ വരച്ചാൽ അവ $AB$-യെ $n$ തുല്യഭാഗങ്ങളായി വിഭജിക്കുന്നു.</li>
      </ol>`,
    intuition_en: `<p>Right-angled triangles formed between parallel lines and any transversal line share identical altitudes and angle inclinations, forcing their hypotenuses to be congruent.</p>`,
    intuition_ml: `<p>സമാന്തരവരകൾക്കിടയിൽ ഉണ്ടാവുന്ന മട്ടത്രികോണങ്ങളുടെ ലംബ ഉയരങ്ങളും കോണുകളും തുല്യമായതിനാൽ കർണ്ണങ്ങളായ വരഭാഗങ്ങളും തുല്യമായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Construct perpendiculars or congruent triangles between successive parallel lines.',
      idea_ml: 'സമാന്തരവരകൾക്കിടയിൽ ലംബങ്ങൾ വരച്ച് സർവ്വസമ ത്രികോണങ്ങൾ രൂപീകരിച്ച് കർണ്ണങ്ങൾ തുല്യമാണെന്ന് തെളിയിക്കുന്നു.',
      why_en: 'AAS congruence of triangles formed between consecutive parallel lines.',
      why_ml: 'സമാന്തരവരകൾക്കിടയിലെ ത്രികോണങ്ങൾ AAS തത്വപ്രകാരം സർവ്വസമമാണ്.',
      rungs_en: [
        { why_en: 'Draw perpendicular segments between parallel lines.', m: 'h_1 = h_2 = d \\quad (\\text{equidistant parallels})' },
        { why_en: 'Transversal cuts parallels at identical corresponding angles.', m: '\\theta_1 = \\theta_2 = \\theta' },
        { why_en: 'In each right triangle, hypotenuse length is d / sin(theta).', m: 'PQ = \\frac{d}{\\sin\\theta}, \\quad QR = \\frac{d}{\\sin\\theta}' },
        { why_en: 'Therefore the intercept segments are equal.', m: 'PQ = QR' }
      ],
      rungs_ml: [
        { why_ml: 'സമാന്തരവരകൾക്കിടയിലെ ലംബങ്ങൾ വരയ്ക്കുന്നു.', m: 'h_1 = h_2 = d' },
        { why_ml: 'ചേദകരേഖ സമാന്തരവരകളുമായി ഒരേ അനുരൂപകോണുകൾ ഉണ്ടാക്കുന്നു.', m: '\\theta_1 = \\theta_2 = \\theta' },
        { why_ml: 'ഓരോ മട്ടത്രികോണത്തിലും കർണ്ണം $d / \\sin\\theta$ ആണ്.', m: 'PQ = QR = \\frac{d}{\\sin\\theta}' },
        { why_ml: 'അതിനാൽ ഭാഗങ്ങൾ തുല്യമാണ്.', m: 'PQ = QR' }
      ]
    },
    needs: ['m8.12.2.equidistant-parallel-lines', 'm8.12.3.dividing-line-segments'],
    traps_en: [
      'The parallel lines must be EQUIDISTANT to produce equal segments; arbitrary parallel lines do not produce equal segments.',
      'The transversal line does NOT have to be perpendicular to the parallel lines.'
    ],
    traps_ml: [
      'സമാന്തരവരകൾ പരസ്പരം തുല്യ അകലത്തിലായിരിക്കണം, എങ്കിൽ മാത്രമേ തുല്യഭാഗങ്ങൾ ലഭിക്കൂ.',
      'ചേദകരേഖ സമാന്തരവരകൾക്ക് ലംബമായിരിക്കണമെന്ന് നിർബന്ധമില്ല.'
    ],
    cards_en: [
      { q: 'Three equidistant parallel lines cut a line segment of length 12 cm into equal pieces. What is the length of each piece?', a: 'Two pieces: $\\frac{12}{2} = \\mathbf{6\\text{ cm}}$.', kind: 'apply' },
      { q: 'Can any line segment be divided into 5 equal parts using ruler and compasses without measuring?', a: '**Yes**, by drawing an acute ray, marking 5 equal units, and drawing parallel lines.', kind: 'recall' },
      { q: 'If parallel lines intercept equal segments on one transversal, what happens on another transversal?', a: 'They intercept strictly **equal segments** on the other transversal as well.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'തുല്യ അകലത്തിലുള്ള മൂന്ന് സമാന്തരവരകൾ 12 cm നീളമുള്ള വരയെ തുല്യഭാഗങ്ങളാക്കുന്നു. ഓരോ ഭാഗത്തിന്റെയും നീളം എത്ര?', a: 'രണ്ട് ഭാഗങ്ങൾ: $\\frac{12}{2} = \\mathbf{6\\text{ cm}}$.', kind: 'apply' },
      { q: 'അളക്കാതെ തന്നെ ഒരു വരയെ 5 തുല്യഭാഗങ്ങളാക്കാൻ കഴിയുമോ?', a: '**കഴിയും**, സമാന്തരവരകളുടെ സഹായത്തോടെ ന്യൂനകോൺ കിരണം വരച്ച് നിർമ്മിക്കാം.', kind: 'recall' },
      { q: 'ഒരു ചേദകരേഖയിൽ തുല്യഭാഗങ്ങൾ ഉണ്ടാക്കുന്ന സമാന്തരവരകൾ മറ്റൊരു ചേദകരേഖയിൽ എങ്ങനെയുള്ള ഭാഗങ്ങളാണ് ഉണ്ടാക്കുക?', a: 'മറ്റേ വരയിലും **തുല്യഭാഗങ്ങൾ** തന്നെ ഉണ്ടാക്കും.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.6.2.proportional-intercepts-theorem',
    sec: '9.6.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Three Parallel Lines and Proportional Intercepts Theorem',
    title_ml: 'മൂന്ന് സമാന്തരവരകളും അനുപാത സിദ്ധാന്തവും',
    oneLine_en: 'Three or more parallel lines cut any two transversals in the exact same ratio: AB / BC = PQ / QR.',
    oneLine_ml: 'മൂന്നോ അതിലധികമോ സമാന്തരവരകൾ ഏതൊരു രണ്ട് ചേദകരേഖകളെയും ഒരേ അംശബന്ധത്തിൽ വിഭജിക്കുന്നു: AB / BC = PQ / QR.',
    statement_en: `<p>Let three parallel lines $L_1, L_2, L_3$ be cut by two transversal lines $T_1$ and $T_2$ at points $A, B, C$ and $P, Q, R$ respectively:</p>
      $$\\mathbf{\\frac{AB}{BC} = \\frac{PQ}{QR}}$$
      <p><b>Division of a Line Segment in a Given Ratio $m : n$:</b></p>
      <p>To divide a segment $AB$ internally in the ratio $m : n$:</p>
      <ul>
        <li>Draw ray $AX$ and mark $(m + n)$ equal steps along $AX$.</li>
        <li>Let the $m$-th point be $M$ and the $(m+n)$-th point be $N$.</li>
        <li>Join $NB$, and draw a line through $M$ parallel to $NB$ meeting $AB$ at point $P$.</li>
        <li>Then point $P$ divides $AB$ in the ratio $\\mathbf{AP : PB = m : n}$.</li>
      </ul>`,
    statement_ml: `<p>മൂന്ന് സമാന്തരവരകളായ $L_1, L_2, L_3$-നെ രണ്ട് ചേദകരേഖകൾ യഥാക്രമം $A, B, C$ എന്നിവയിലും $P, Q, R$ എന്നിവയിലും ഖണ്ഡിക്കുന്നുവെങ്കിൽ:</p>
      $$\\mathbf{\\frac{AB}{BC} = \\frac{PQ}{QR}}$$
      <p><b>ഒരു വരയെ $m : n$ അംശബന്ധത്തിൽ വിഭജിക്കൽ:</b></p>
      <p>ഒരു വര $AB$-യെ $m : n$ എന്ന അംശബന്ധത്തിൽ ഭാഗിക്കാൻ:</p>
      <ul>
        <li>$AX$ എന്ന കിരണരേഖയിൽ $(m + n)$ തുല്യഭാഗങ്ങൾ അടയാളപ്പെടുത്തുക.</li>
        <li>$m$-ാമത്തെ ബിന്ദു $M$, $(m+n)$-ാമത്തെ ബിന്ദു $N$ എന്നിവ അടയാളപ്പെടുത്തുക.</li>
        <li>$NB$ യോജിപ്പിക്കുകയും $M$-ലൂടെ $NB$-ക്ക് സമാന്തരമായി വരയ്ക്കുകയും ചെയ്യുക. ഈ വര $AB$-യെ $P$-യിൽ മുറിക്കുന്നു.</li>
        <li>അപ്പോൾ $P$ എന്ന ബിന്ദു $AB$-യെ $\\mathbf{AP : PB = m : n}$ എന്ന അംശബന്ധത്തിൽ ഭാഗിക്കുന്നു.</li>
      </ul>`,
    intuition_en: `<p>If $AB : BC = m : n$, we can subdivide $AB$ into $m$ equal slices and $BC$ into $n$ equal slices. Passing parallel lines through all subdivision points forces the corresponding transversal pieces to also have $m$ and $n$ equal slices.</p>`,
    intuition_ml: `<p>വരയെ $m$ തുല്യഭാഗങ്ങളും $n$ തുല്യഭാഗങ്ങളുമായി ഭാഗിച്ച് അവയിലൂടെയെല്ലാം സമാന്തരവരകൾ വരച്ചാൽ മറുഭാഗത്തെ വരയും സ്വാഭാവികമായി $m : n$ അംശബന്ധത്തിലാകും.</p>`,
    proof: {
      idea_en: 'Express ratio m/n as rational parts, slice into equal intervals, and apply the equal division theorem.',
      idea_ml: 'അംശബന്ധത്തെ തുല്യ കഷണങ്ങളാക്കി വിഭജിച്ച് തുല്യവിഭജന സിദ്ധാന്തം ഉപയോഗിച്ച് തെളിയിക്കുന്നു.',
      why_en: 'Every slice of transversal 1 corresponds to an equal slice of transversal 2.',
      why_ml: 'ആദ്യ വരയിലെ ഓരോ തുല്യ കഷണത്തിനും അനുരൂപമായി രണ്ടാം വരയിലും തുല്യ കഷണങ്ങൾ ലഭിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Assume AB/BC = m/n where m, n are positive integers.', m: '\\frac{AB}{BC} = \\frac{m}{n}' },
        { why_en: 'Divide AB into m equal parts and BC into n equal parts.', m: '\\text{Each part on } T_1 = u = \\frac{AB}{m} = \\frac{BC}{n}' },
        { why_en: 'Draw parallel lines through all division points.', m: '\\text{All parallel lines are equidistant}' },
        { why_en: 'By equal division theorem, parts on T_2 are equal to some length v.', m: 'PQ = m \\times v, \\quad QR = n \\times v \\implies \\frac{PQ}{QR} = \\frac{m}{n}' },
        { why_en: 'Equate the ratios.', m: '\\frac{AB}{BC} = \\frac{PQ}{QR}' }
      ],
      rungs_ml: [
        { why_ml: 'അംശബന്ധം പൂർണ്ണസംഖ്യകളായി കരുതുന്നു.', m: '\\frac{AB}{BC} = \\frac{m}{n}' },
        { why_ml: 'AB-യെ m തുല്യഭാഗങ്ങളായും BC-യെ n തുല്യഭാഗങ്ങളായും മാറ്റുന്നു.', m: 'u = \\frac{AB}{m} = \\frac{BC}{n}' },
        { why_ml: 'എല്ലാ ബിന്ദുക്കളിലൂടെയും സമാന്തരവരകൾ വരയ്ക്കുന്നു.', m: '\\text{സമാന്തരവരകൾ തുല്യ അകലത്തിലാകുന്നു}' },
        { why_ml: 'തുല്യവിഭജന സിദ്ധാന്തപ്രകാരം രണ്ടാമത്തെ വരയിലും തുല്യ കഷണങ്ങൾ ഉണ്ടാകുന്നു.', m: 'PQ = m \\times v, \\quad QR = n \\times v \\implies \\frac{PQ}{QR} = \\frac{m}{n}' },
        { why_ml: 'അംശബന്ധങ്ങൾ തുല്യമാകുന്നു.', m: '\\frac{AB}{BC} = \\frac{PQ}{QR}' }
      ]
    },
    needs: ['m9.6.1.equal-division-of-segments', 'm8.7.2.dividing-in-ratio'],
    traps_en: [
      'The ratio is AB / BC = PQ / QR. It is NOT AB / PQ = BC / QR directly from definition (though cross-multiplication allows it).',
      'The intercepted segments must lie between the corresponding pairs of parallel lines.'
    ],
    traps_ml: [
      'അംശബന്ധം AB / BC = PQ / QR ആണ്. ഒരേ വരയിലെ ഭാഗങ്ങളുടെ അനുപാതമാണ് തുല്യമാകുന്നത്.',
      'അളവുകൾ എടുക്കുമ്പോൾ ഒരേ സമാന്തരവരകൾക്കിടയിലുള്ള ഭാഗങ്ങൾ തന്നെ താരതമ്യം ചെയ്യണം.'
    ],
    cards_en: [
      { q: 'Three parallel lines cut intercepts of 4 cm and 6 cm on one line. If the first intercept on a second line is 6 cm, what is the second intercept?', a: '$\\frac{4}{6} = \\frac{6}{x} \\implies 4x = 36 \\implies x = \\mathbf{9\\text{ cm}}$.', kind: 'apply' },
      { q: 'To divide a 10 cm segment in ratio 2 : 3, into how many equal units should the ray be marked?', a: '$2 + 3 = \\mathbf{5\\text{ equal parts}}$.', kind: 'recall' },
      { q: 'State the relation between intercepts made by three parallel lines on two transversals.', a: '$\\frac{AB}{BC} = \\frac{PQ}{QR}$ (they cut transversals in the same ratio).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'മൂന്ന് സമാന്തരവരകൾ ഒരു വരയിൽ 4 cm, 6 cm ഭാഗങ്ങളുണ്ടാക്കുന്നു. രണ്ടാമത്തെ വരയിലെ ആദ്യഭാഗം 6 cm ആയാൽ അടുത്ത ഭാഗം എത്ര?', a: '$\\frac{4}{6} = \\frac{6}{x} \\implies 4x = 36 \\implies x = \\mathbf{9\\text{ cm}}$.', kind: 'apply' },
      { q: 'ഒരു വരയെ 2 : 3 അംശബന്ധത്തിൽ വിഭജിക്കാൻ കിരണരേഖയിൽ ആകെ എത്ര തുല്യഭാഗങ്ങൾ അടയാളപ്പെടുത്തണം?', a: '$2 + 3 = \\mathbf{5\\text{ തുല്യഭാഗങ്ങൾ}}$.', kind: 'recall' },
      { q: 'മൂന്ന് സമാന്തരവരകൾ രണ്ട് ചേദകരേഖകളിലുണ്ടാക്കുന്ന ഭാഗങ്ങളുടെ അംശബന്ധ സിദ്ധാന്തം പ്രസ്താവിക്കുക.', a: 'അവ ചേദകരേഖകളെ ഒരേ അംശബന്ധത്തിൽ വിഭജിക്കുന്നു: $\\frac{AB}{BC} = \\frac{PQ}{QR}$.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.6.3.midpoint-theorem-in-triangles',
    sec: '9.6.3',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Midpoint Theorem in Triangles & Area Subdivision',
    title_ml: 'ത്രികോണങ്ങളിലെ മധ്യബിന്ദു സിദ്ധാന്തവും പരപ്പളവ് വിഭജനവും',
    oneLine_en: 'The line segment joining the midpoints of two sides of a triangle is parallel to the third side and is half its length; connecting all three midpoints divides the triangle into four congruent triangles each of 1/4 area.',
    oneLine_ml: 'ഒരു ത്രികോണത്തിലെ രണ്ട് വശങ്ങളുടെ മധ്യബിന്ദുക്കളെ തമ്മിൽ യോജിപ്പിക്കുന്ന വര മൂന്നാമത്തെ വശത്തിന് സമാന്തരവും അതിന്റെ നീളത്തിന്റെ പകുതിയും ആയിരിക്കും; മൂന്ന് മധ്യബിന്ദുക്കളും യോജിപ്പിച്ചാൽ ത്രികോണം തുല്യ പരപ്പളവുള്ള 4 സർവ്വസമ ത്രികോണങ്ങളായി മാറും.',
    statement_en: `<p>In any triangle $\\triangle ABC$, let $D$ be the midpoint of side $AB$ and $E$ be the midpoint of side $AC$:</p>
      $$\\mathbf{DE \\parallel BC \\quad \\text{and} \\quad DE = \\frac{1}{2} BC}$$
      <p><b>Converse of Midpoint Theorem:</b> A line drawn through the midpoint of one side of a triangle parallel to another side bisects the third side.</p>
      <p><b>The Midpoint Triangle (മധ്യത്രികോണം):</b></p>
      <p>Connecting the midpoints $D, E, F$ of all three sides divides $\\triangle ABC$ into <b>four congruent triangles</b>:</p>
      $$\\triangle ADE \\cong \\triangle DBF \\cong \\triangle EFC \\cong \\triangle FED$$
      $$\\mathbf{\\text{Area}(\\triangle DEF) = \\frac{1}{4} \\text{Area}(\\triangle ABC)}$$
      <p>Moreover, the quadrilateral formed by joining the midpoints of any quadrilateral in order is always a <b>parallelogram</b> (Varignon's Theorem).</p>`,
    statement_ml: `<p>ത്രികോണം $\\triangle ABC$-യിൽ $AB$-യുടെ മധ്യബിന്ദു $D$-യും, $AC$-യുടെ മധ്യബിന്ദു $E$-യും ആണെങ്കിൽ:</p>
      $$\\mathbf{DE \\parallel BC \\quad \\text{ആയിരിക്കും, കൂടാതെ} \\quad DE = \\frac{1}{2} BC}$$
      <p><b>വിപരീത സിദ്ധാന്തം:</b> ഒരു വശത്തിന്റെ മധ്യബിന്ദുവിലൂടെ മറ്റൊരു വശത്തിന് സമാന്തരമായി വരയ്ക്കുന്ന വര മൂന്നാമത്തെ വശത്തെ സമഭാഗം ചെയ്യുന്നു.</p>
      <p><b>മധ്യത്രികോണ വിഭജനം:</b></p>
      <p>മൂന്ന് വശങ്ങളുടെയും മധ്യബിന്ദുക്കളായ $D, E, F$ യോജിപ്പിച്ചാൽ കിട്ടുന്ന നാല് ചെറിയ ത്രികോണങ്ങളും സർവ്വസമമാണ്:</p>
      $$\\triangle ADE \\cong \\triangle DBF \\cong \\triangle EFC \\cong \\triangle FED$$
      $$\\mathbf{\\text{പരപ്പളവ്}(\\triangle DEF) = \\frac{1}{4} \\text{പരപ്പളവ്}(\\triangle ABC)}$$
      <p>ഏതൊരു ചതുർഭുജത്തിന്റെയും വശങ്ങളുടെ മധ്യബിന്ദുക്കൾ ക്രമമായി യോജിപ്പിച്ചാൽ ലഭിക്കുന്ന രൂപം ഒരു <b>സമാന്തരികം</b> ആയിരിക്കും.</p>`,
    intuition_en: `<p>Scaling triangle ABC by factor 1/2 about vertex A maps side BC to segment DE, which has half the length and remains parallel to BC.</p>`,
    intuition_ml: `<p>ശീർഷം A കേന്ദ്രമാക്കി ത്രികോണത്തെ പകുതി വലിപ്പത്തിലേക്ക് ചുരുക്കുമ്പോൾ പാദം BC നേരെ DE ആയി മാറുന്നു; വലിപ്പം പകുതിയാവുകയും സമാന്തരത നിലനിൽക്കുകയും ചെയ്യുന്നു.</p>`,
    proof: {
      idea_en: 'Extend DE to F such that EF = DE, join CF, and prove DBCF is a parallelogram.',
      idea_ml: 'DE-യെ EF = DE ആകത്തക്കവിധം F വരെ നീട്ടി, $DBCF$ ഒരു സമാന്തരികമാണെന്ന് തെളിയിക്കുന്നു.',
      why_en: 'Opposite sides equal and parallel confirms parallelogram.',
      why_ml: 'എതിർവശങ്ങൾ തുല്യവും സമാന്തരവുമാകുന്നത് സമാന്തരികത്തിന്റെ ലക്ഷണമാണ്.',
      rungs_en: [
        { why_en: 'Extend DE to F such that EF = DE. Join CF.', m: 'EF = DE, \\quad AE = EC' },
        { why_en: 'SAS congruence of triangles ADE and CFE.', m: '\\triangle ADE \\cong \\triangle CFE \\implies CF = AD, \\, CF \\parallel AD' },
        { why_en: 'Since D is midpoint of AB, AD = DB.', m: 'CF = DB \\quad \\text{and} \\quad CF \\parallel DB' },
        { why_en: 'Quadrilateral DBCF has one pair of sides equal and parallel.', m: 'DBCF \\text{ is a parallelogram}' },
        { why_en: 'Therefore DF is parallel and equal to BC.', m: 'DF \\parallel BC \\implies DE \\parallel BC' },
        { why_en: 'Since DE is half of DF, DE = (1/2)BC.', m: 'DE = \\frac{1}{2} DF = \\frac{1}{2} BC' }
      ],
      rungs_ml: [
        { why_ml: 'DE-യെ EF = DE ആകത്തക്കവിധം നീട്ടി CF യോജിപ്പിക്കുന്നു.', m: 'EF = DE, \\quad AE = EC' },
        { why_ml: '$SAS$ തത്വപ്രകാരം ത്രികോണങ്ങൾ സർവ്വസമമാണ്.', m: '\\triangle ADE \\cong \\triangle CFE \\implies CF = AD, \\, CF \\parallel AD' },
        { why_ml: 'D മധ്യബിന്ദുവായതിനാൽ AD = DB ആണ്.', m: 'CF = DB, \\quad CF \\parallel DB' },
        { why_ml: 'ഒരു ജോടി എതിർവശങ്ങൾ തുല്യവും സമാന്തരവുമാകയാൽ $DBCF$ സമാന്തരികമാണ്.', m: 'DBCF \\text{ സമാന്തരികം}' },
        { why_ml: 'അതിനാൽ DF, BC-ക്ക് സമാന്തരവും തുല്യവുമാണ്.', m: 'DE \\parallel BC' },
        { why_ml: 'DE എന്നത് DF-ന്റെ പകുതിയായതിനാൽ.', m: 'DE = \\frac{1}{2} BC' }
      ]
    },
    needs: ['m9.6.2.proportional-intercepts-theorem', 'm8.6.4.special-quadrilaterals'],
    traps_en: [
      'The midpoint segment is HALF the base, not double: DE = (1/2) BC.',
      'The area of the midpoint triangle is ONE-FOURTH (1/4) of the parent triangle, NOT 1/2.'
    ],
    traps_ml: [
      'മധ്യബിന്ദുക്കളെ ബന്ധിപ്പിക്കുന്ന വര പാദത്തിന്റെ പകുതിയാണ്: DE = (1/2) BC.',
      'മധ്യത്രികോണത്തിന്റെ പരപ്പളവ് വലിയ ത്രികോണത്തിന്റെ പരപ്പളവിന്റെ നാലിലൊന്നാണ് (1/4), പകുതിയല്ല.'
    ],
    cards_en: [
      { q: 'In triangle ABC, side BC = 14 cm. Segment DE joins the midpoints of AB and AC. What is the length of DE?', a: '$DE = \\frac{1}{2} \\times 14 = \\mathbf{7\\text{ cm}}$.', kind: 'apply' },
      { q: 'If the area of triangle ABC is 48 sq cm, what is the area of the triangle formed by joining its midpoints?', a: '$\\frac{1}{4} \\times 48 = \\mathbf{12\\text{ sq cm}}$.', kind: 'apply' },
      { q: 'What shape is formed by joining the midpoints of any quadrilateral in order?', a: 'Always a **parallelogram**.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ത്രികോണം ABC-യിൽ വശം BC = 14 cm. AB, AC എന്നിവയുടെ മധ്യബിന്ദുക്കൾ ബന്ധിപ്പിക്കുന്ന വരയാണ് DE എങ്കിൽ DE-യുടെ നീളം എത്ര?', a: '$DE = \\frac{1}{2} \\times 14 = \\mathbf{7\\text{ cm}}$.', kind: 'apply' },
      { q: 'ത്രികോണം ABC-യുടെ പരപ്പളവ് 48 ച.സെ.മീ ആയാൽ അതിന്റെ വശങ്ങളുടെ മധ്യബിന്ദുക്കൾ യോജിപ്പിച്ചാൽ കിട്ടുന്ന ത്രികോണത്തിന്റെ പരപ്പളവ് എത്ര?', a: '$\\frac{1}{4} \\times 48 = \\mathbf{12\\text{ ച.സെ.മീ}}$.', kind: 'apply' },
      { q: 'ഏതൊരു ചതുർഭുജത്തിന്റെയും വശങ്ങളുടെ മധ്യബിന്ദുക്കൾ ക്രമമായി യോജിപ്പിച്ചാൽ ലഭിക്കുന്ന രൂപം ഏതാണ്?', a: '**സമാന്തരികം**.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.6.4.medians-and-centroid',
    sec: '9.6.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Medians and Centroid of a Triangle',
    title_ml: 'മധ്യമങ്ങളും മധ്യകേന്ദ്രവും',
    oneLine_en: 'The three medians of a triangle concur at a single point called the centroid (G), which divides each median in the ratio 2 : 1 from vertex to base.',
    oneLine_ml: 'ഒരു ത്രികോണത്തിലെ മൂന്ന് മധ്യമങ്ങളും സംഗമിക്കുന്ന ബിന്ദുവാണ് മധ്യകേന്ദ്രം (G); ഇത് ഓരോ മധ്യമത്തെയും ശീർഷത്തിൽ നിന്ന് 2 : 1 എന്ന അംശബന്ധത്തിൽ വിഭജിക്കുന്നു.',
    statement_en: `<p>A line segment joining a vertex of a triangle to the midpoint of the opposite side is called a <b>median</b> (മധ്യമം). Every triangle has three medians.</p>
      <p><b>The Centroid Theorem:</b></p>
      <ul>
        <li>The three medians of any triangle intersect at a single concurrent point $G$, called the <b>centroid</b> (മധ്യകേന്ദ്രം).</li>
        <li>The centroid divides each median in the ratio <b>$2 : 1$</b>, with the larger part toward the vertex:
          $$\\mathbf{AG : GD = 2 : 1, \\quad BG : GE = 2 : 1, \\quad CG : GF = 2 : 1}$$</li>
        <li><b>Area Trisection:</b> The line segments joining centroid $G$ to the three vertices divide the triangle into <b>three triangles of equal area</b>:
          $$\\text{Area}(\\triangle ABG) = \\text{Area}(\\triangle BCG) = \\text{Area}(\\triangle CAG) = \\frac{1}{3} \\text{Area}(\\triangle ABC)$$</li>
        <li>The three medians together divide the entire triangle into <b>six small triangles of equal area</b> (each having area equal to $\\frac{1}{6}\\text{Area}(\\triangle ABC)$).</li>
      </ul>`,
    statement_ml: `<p>ഒരു ത്രികോണത്തിന്റെ ശീർഷത്തെ എതിർവശത്തിന്റെ മധ്യബിന്ദുവുമായി ബന്ധിപ്പിക്കുന്ന വരയാണ് <b>മധ്യമം</b>. ഏതൊരു ത്രികോണത്തിനും മൂന്ന് മധ്യമങ്ങൾ ഉണ്ടായിരിക്കും.</p>
      <p><b>മധ്യകേന്ദ്ര സിദ്ധാന്തം:</b></p>
      <ul>
        <li>ഒരു ത്രികോണത്തിലെ മൂന്ന് മധ്യമങ്ങളും സംഗമിക്കുന്ന പൊതുബിന്ദുവാണ് <b>മധ്യകേന്ദ്രം</b> ($G$).</li>
        <li>മധ്യകേന്ദ്രം ഓരോ മധ്യമത്തെയും ശീർഷത്തിൽ നിന്ന് പാദത്തിലേക്ക് <b>$2 : 1$</b> എന്ന അംശബന്ധത്തിൽ വിഭജിക്കുന്നു:
          $$\\mathbf{AG : GD = 2 : 1, \\quad BG : GE = 2 : 1, \\quad CG : GF = 2 : 1}$$</li>
        <li><b>തുല്യ പരപ്പളവ് ത്രിവിഭജനം:</b> മധ്യകേന്ദ്രത്തിൽ നിന്ന് മൂന്ന് ശീർഷങ്ങളിലേക്കും വരച്ചാൽ ത്രികോണം <b>തുല്യ പരപ്പളവുള്ള 3 ത്രികോണങ്ങളായി</b> വിഭജിക്കപ്പെടുന്നു:
          $$\\text{പരപ്പളവ്}(\\triangle ABG) = \\text{പരപ്പളവ്}(\\triangle BCG) = \\text{പരപ്പളവ്}(\\triangle CAG) = \\frac{1}{3} \\text{പരപ്പളവ്}(\\triangle ABC)$$</li>
        <li>മൂന്ന് മധ്യമങ്ങളും ചേർന്ന് ത്രികോണത്തെ <b>തുല്യ പരപ്പളവുള്ള 6 ചെറിയ ത്രികോണങ്ങളായി</b> ഭാഗിക്കുന്നു (ഓരോന്നിന്റെയും പരപ്പളവ് $\\frac{1}{6}$ വീതം).</li>
      </ul>`,
    intuition_en: `<p>The centroid is the physical center of gravity of a uniform triangular plate, where all mass balances in equilibrium.</p>`,
    intuition_ml: `<p>ഒരു ത്രികോണാകൃതിയിലുള്ള തകിടിന്റെ ഭാരകേന്ദ്രമാണ് മധ്യകേന്ദ്രം. ഇതിൽ ഒരു സൂചിമുന വെച്ചാൽ ത്രികോണം തികച്ചും ബാലൻസ് ചെയ്തു നിൽക്കും.</p>`,
    proof: {
      idea_en: 'Use midpoint theorem on triangle ABC and triangle GAB to show opposite segments form a parallelogram whose diagonals bisect each other.',
      idea_ml: 'മധ്യബിന്ദു സിദ്ധാന്തം ഉപയോഗിച്ച് സമാന്തരികം രൂപീകരിച്ച് വികർണ്ണങ്ങൾ പരസ്പരം സമഭാഗം ചെയ്യുന്നു എന്നതിലൂടെ 2:1 തെളിയിക്കുന്നു.',
      why_en: 'Diagonals of a parallelogram bisect each other, giving equal half-lengths.',
      why_ml: 'സമാന്തരികത്തിലെ വികർണ്ണങ്ങൾ പരസ്പരം സമഭാഗം ചെയ്യുന്നു.',
      rungs_en: [
        { why_en: 'Let medians AD and BE intersect at G.', m: 'AD \\cap BE = \\{G\\}' },
        { why_en: 'Join D and E. By Midpoint Theorem.', m: 'DE \\parallel AB, \\quad DE = \\frac{1}{2} AB' },
        { why_en: 'Let P and Q be midpoints of AG and BG.', m: 'PQ \\parallel AB, \\quad PQ = \\frac{1}{2} AB' },
        { why_en: 'Thus DEQP is a parallelogram.', m: 'DE \\parallel PQ, \\quad DE = PQ' },
        { why_en: 'Diagonals of DEQP bisect each other: PG = GD and QG = GE.', m: 'AP = PG = GD \\implies AG = 2 GD \\implies AG : GD = 2 : 1' }
      ],
      rungs_ml: [
        { why_ml: 'AD, BE എന്നീ മധ്യമങ്ങൾ G-യിൽ കൂട്ടിമുട്ടുന്നു.', m: 'AD \\cap BE = \\{G\\}' },
        { why_ml: 'മധ്യബിന്ദു സിദ്ധാന്തപ്രകാരം DE, AB-ക്ക് സമാന്തരവും പകുതിയുമാണ്.', m: 'DE \\parallel AB, \\quad DE = \\frac{1}{2} AB' },
        { why_ml: 'AG, BG എന്നിവയുടെ മധ്യബിന്ദുക്കൾ P, Q എടുക്കുന്നു.', m: 'PQ \\parallel AB, \\quad PQ = \\frac{1}{2} AB' },
        { why_ml: '$DEQP$ ഒരു സമാന്തരികമാകുന്നു.', m: 'DE \\parallel PQ, \\quad DE = PQ' },
        { why_ml: 'വികർണ്ണങ്ങൾ സമഭാഗം ചെയ്യുമ്പോൾ AP = PG = GD ലഭിക്കുന്നു.', m: 'AG : GD = 2 : 1' }
      ]
    },
    needs: ['m9.6.3.midpoint-theorem-in-triangles'],
    traps_en: [
      'The ratio is 2 : 1 FROM THE VERTEX to the base (vertex part is 2/3 of total median, base part is 1/3).',
      'The centroid divides the triangle into 3 triangles of EQUAL AREA, not congruent triangles.'
    ],
    traps_ml: [
      'അംശബന്ധം ശീർഷത്തിൽ നിന്ന് പാദത്തിലേക്ക് 2 : 1 ആണ് (ശീർഷഭാഗം 2/3, പാദഭാഗം 1/3).',
      'മധ്യകേന്ദ്രം ത്രികോണത്തെ തുല്യ പരപ്പളവുള്ള 3 ഭാഗങ്ങളാക്കുന്നു, അവ സർവ്വസമമാകണമെന്നില്ല.'
    ],
    cards_en: [
      { q: 'The total length of a median AD is 12 cm. What is the length of AG (where G is the centroid)?', a: '$\\frac{2}{3} \\times 12 = \\mathbf{8\\text{ cm}}$ (and $GD = 4\\text{ cm}$).', kind: 'apply' },
      { q: 'In what ratio does the centroid divide each median?', a: '$\\mathbf{2 : 1}$ (measured from vertex to base).', kind: 'recall' },
      { q: 'If area of triangle ABC is 36 sq cm, what is the area of triangle BCG where G is the centroid?', a: '$\\frac{36}{3} = \\mathbf{12\\text{ sq cm}}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'മധ്യമം AD-യുടെ ആകെ നീളം 12 cm ആണ്. മധ്യകേന്ദ്രം G ആയാൽ AG-യുടെ നീളം എത്ര?', a: '$\\frac{2}{3} \\times 12 = \\mathbf{8\\text{ cm}}$ (കൂടാതെ $GD = 4\\text{ cm}$).', kind: 'apply' },
      { q: 'മധ്യകേന്ദ്രം ഓരോ മധ്യമത്തെയും ഏത് അംശബന്ധത്തിലാണ് വിഭജിക്കുന്നത്?', a: 'ശീർഷത്തിൽ നിന്ന് പാദത്തിലേക്ക് $\\mathbf{2 : 1}$.', kind: 'recall' },
      { q: 'ത്രികോണം ABC-യുടെ പരപ്പളവ് 36 ച.സെ.മീ ആയാൽ ത്രികോണം BCG-യുടെ പരപ്പളവ് എത്ര?', a: '$\\frac{36}{3} = \\mathbf{12\\text{ ച.സെ.മീ}}$.', kind: 'apply' }
    ]
  }
);
