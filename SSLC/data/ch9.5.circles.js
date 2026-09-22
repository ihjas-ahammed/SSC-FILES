/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 5: Circles (വൃത്തങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm9.5.1.chords-and-perpendicular-bisector',
    sec: '9.5.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Chords and Perpendicular Bisector from the Centre',
    title_ml: 'ഞാണും കേന്ദ്രത്തിൽ നിന്നുള്ള ലംബവും',
    oneLine_en: 'The perpendicular dropped from the centre of a circle to a chord bisects the chord; conversely, the line joining the centre to the midpoint of a chord is perpendicular to it.',
    oneLine_ml: 'വൃത്തകേന്ദ്രത്തിൽ നിന്ന് ഞാണിലേക്കുള്ള ലംബം ഞാണിനെ സമഭാഗം ചെയ്യുന്നു; കേന്ദ്രത്തെയും ഞാണിന്റെ മധ്യബിന്ദുവിനെയും തമ്മിൽ ബന്ധിപ്പിക്കുന്ന വര ഞാണിന് ലംബമായിരിക്കും.',
    statement_en: `<p>A line segment joining any two points on a circle is called a <b>chord</b> (ഞാൺ). The diameter is the longest chord, passing through the centre.</p>
      <p><b>Core Theorems:</b></p>
      <ul>
        <li>The perpendicular line dropped from the centre $O$ of a circle to any chord $AB$ bisects the chord at point $M$ ($AM = MB$).</li>
        <li>Conversely, the line joining the centre $O$ to the midpoint $M$ of a chord $AB$ is strictly perpendicular to the chord ($OM \\perp AB$).</li>
      </ul>
      <p><b>The Fundamental Right Triangle:</b></p>
      <p>Connecting the centre $O$ to an endpoint $A$ creates a right-angled triangle $\\triangle OMA$ with hypotenuse equal to radius $r$, perpendicular distance $d = OM$, and half-chord length $\\frac{c}{2} = AM$:</p>
      $$\\mathbf{r^2 = d^2 + \\left(\\frac{c}{2}\\right)^2}$$
      <p><b>Consequence:</b> In a circle, <b>equal chords are equidistant from the centre</b>, and conversely, chords equidistant from the centre are equal in length.</p>`,
    statement_ml: `<p>വൃത്തത്തിലെ ഏതെങ്കിലും രണ്ട് ബിന്ദുക്കളെ തമ്മിൽ ബന്ധിപ്പിക്കുന്ന വരയാണ് <b>ഞാൺ</b>. വൃത്തകേന്ദ്രത്തിലൂടെ കടന്നുപോകുന്ന ഏറ്റവും നീളം കൂടിയ ഞാണാണ് വ്യാസം.</p>
      <p><b>അടിസ്ഥാന സിദ്ധാന്തങ്ങൾ:</b></p>
      <ul>
        <li>വൃത്തകേന്ദ്രം $O$-ൽ നിന്ന് $AB$ എന്ന ഞാണിലേക്ക് വരയ്ക്കുന്ന ലംബം ഞാണിനെ $M$ എന്ന ബിന്ദുവിൽ സമഭാഗം ചെയ്യുന്നു ($AM = MB$).</li>
        <li>മറിച്ചു പറഞ്ഞാൽ, വൃത്തകേന്ദ്രത്തെയും ഞാണിന്റെ മധ്യബിന്ദുവായ $M$-നെയും ബന്ധിപ്പിക്കുന്ന വര ഞാണിന് ലംബമായിരിക്കും ($OM \\perp AB$).</li>
      </ul>
      <p><b>പൈതഗോറസ് മട്ടത്രികോണം:</b></p>
      <p>കേന്ദ്രം $O$-യെ ഞാണിന്റെ ഒരറ്റമായ $A$-യുമായി യോജിപ്പിച്ചാൽ ആരം $r$ കർണ്ണമായും, കേന്ദ്രത്തിൽ നിന്നുള്ള ലംബദൂരം $d = OM$, ഞാണിന്റെ പകുതി $\\frac{c}{2} = AM$ എന്നിവ ലംബവശങ്ങളായും ഉള്ള മട്ടത്രികോണം $\\triangle OMA$ ലഭിക്കുന്നു:</p>
      $$\\mathbf{r^2 = d^2 + \\left(\\frac{c}{2}\\right)^2}$$
      <p><b>അനുമാനം:</b> ഒരേ വൃത്തത്തിലെ <b>തുല്യ ഞാണുകൾ കേന്ദ്രത്തിൽ നിന്ന് തുല്യ അകലത്തിലായിരിക്കും</b>; തിരിച്ചും കേന്ദ്രത്തിൽ നിന്ന് തുല്യ അകലത്തിലുള്ള ഞാണുകൾ തുല്യ നീളമുള്ളവയായിരിക്കും.</p>`,
    intuition_en: `<p>A circle has complete bilateral symmetry about the perpendicular bisector of any chord. Folding along this line maps the two halves of the chord directly onto each other.</p>`,
    intuition_ml: `<p>ഞാണിന്റെ ലംബസമഭാജിയിലൂടെ വൃത്തം മടക്കിയാൽ ഞാണിന്റെ ഇരുപകുതികളും കൃത്യമായി ഒന്നിനുമീതെ ഒന്നായി പറ്റിയിരിക്കും.</p>`,
    proof: {
      idea_en: 'RHS or SSS congruence between the two right triangles formed by the radii and the perpendicular bisector.',
      idea_ml: 'ആരങ്ങളും ലംബവും ചേർന്നുണ്ടാക്കുന്ന രണ്ട് മട്ടത്രികോണങ്ങൾ $RHS$ തുല്യതാ തത്വപ്രകാരം സർവ്വസമമാണ്.',
      why_en: 'Radii OA and OB are equal hypotenuses, and OM is a shared common leg.',
      why_ml: '$OA, OB$ എന്നീ ആരങ്ങൾ തുല്യ കർണ്ണങ്ങളും $OM$ പൊതുവായ വശവുമാണ്.',
      rungs_en: [
        { why_en: 'Join OA and OB to form two triangles OMA and OMB.', m: 'OA = OB = r \\quad (\\text{radii})' },
        { why_en: 'Given OM perpendicular to AB.', m: '\\angle OMA = \\angle OMB = 90^\\circ' },
        { why_en: 'OM is the shared leg.', m: 'OM = OM' },
        { why_en: 'By RHS congruence theorem.', m: '\\triangle OMA \\cong \\triangle OMB \\implies AM = MB' }
      ],
      rungs_ml: [
        { why_ml: 'OA, OB ആരങ്ങൾ വരയ്ക്കുന്നു.', m: 'OA = OB = r' },
        { why_ml: 'OM ലംബമാണ്.', m: '\\angle OMA = \\angle OMB = 90^\\circ' },
        { why_ml: 'OM പൊതുവശമാണ്.', m: 'OM = OM' },
        { why_ml: '$RHS$ തുല്യത പ്രകാരം ത്രികോണങ്ങൾ തുല്യമാണ്.', m: 'AM = MB' }
      ]
    },
    needs: ['m8.2.3.sas-congruence', 'p.5.5'],
    traps_en: [
      'In r^2 = d^2 + (c/2)^2, use HALF the chord length (c/2), not the full chord c.',
      'Distance from the centre ALWAYS means the PERPENDICULAR distance.'
    ],
    traps_ml: [
      'സൂത്രവാക്യത്തിൽ ഞാണിന്റെ പകുതിയാണ് (c/2) ഉപയോഗിക്കേണ്ടത്, മുഴുവൻ ഞാണല്ല.',
      'കേന്ദ്രത്തിൽ നിന്നുള്ള അകലം എന്നാൽ ലംബദൂരമാണ്.'
    ],
    cards_en: [
      { q: 'In a circle of radius 5 cm, a chord has length 8 cm. What is its distance from the centre?', a: 'Half-chord $= 4\\text{ cm}$. $d = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = \\sqrt{9} = \\mathbf{3\\text{ cm}}$.', kind: 'apply' },
      { q: 'A chord is at a distance of 5 cm from the centre of a circle of radius 13 cm. What is its length?', a: 'Half-chord $= \\sqrt{13^2 - 5^2} = 12\\text{ cm}$. Chord length $= 2 \\times 12 = \\mathbf{24\\text{ cm}}$.', kind: 'apply' },
      { q: 'State the relation between equal chords and their distances from the centre.', a: 'Equal chords are at equal distances from the centre.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ആരം 5 cm ആയ വൃത്തത്തിൽ 8 cm നീളമുള്ള ഞാണിലേക്കുള്ള കേന്ദ്രത്തിൽ നിന്നുള്ള അകലം എത്ര?', a: 'ഞാണിന്റെ പകുതി $= 4\\text{ cm}$. അകലം $d = \\sqrt{5^2 - 4^2} = \\mathbf{3\\text{ cm}}$.', kind: 'apply' },
      { q: 'ആരം 13 cm ആയ വൃത്തത്തിൽ കേന്ദ്രത്തിൽ നിന്ന് 5 cm അകലെയുള്ള ഞാണിന്റെ നീളം എത്ര?', a: 'പകുതി $= \\sqrt{13^2 - 5^2} = 12\\text{ cm}$. ഞാണിന്റെ നീളം $= 2 \\times 12 = \\mathbf{24\\text{ cm}}$.', kind: 'apply' },
      { q: 'തുല്യ ഞാണുകൾ കേന്ദ്രത്തിൽ നിന്നുള്ള അകലത്തെക്കുറിച്ച് എന്ത് പറയാം?', a: 'തുല്യ ഞാണുകൾ കേന്ദ്രത്തിൽ നിന്ന് തുല്യ അകലത്തിലായിരിക്കും.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.5.2.chords-and-angles-at-centre',
    sec: '9.5.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Chords and Central Angles',
    title_ml: 'ഞാണുകളും കേന്ദ്രകോണുകളും',
    oneLine_en: 'Equal chords subtend equal angles at the centre; conversely, chords that subtend equal angles at the centre are equal in length.',
    oneLine_ml: 'തുല്യ ഞാണുകൾ വൃത്തകേന്ദ്രത്തിൽ തുല്യകോണുകൾ ഉണ്ടാക്കുന്നു; തിരിച്ചും കേന്ദ്രത്തിൽ തുല്യകോണുണ്ടാക്കുന്ന ഞാണുകൾ തുല്യനീളമുള്ളവയായിരിക്കും.',
    statement_en: `<p>Let $AB$ and $CD$ be two chords of a circle with centre $O$. The angle formed by connecting the endpoints of a chord to the centre is called the <b>central angle</b> (കേന്ദ്രകോൺ) subtended by that chord:</p>
      $$\\mathbf{\\text{If } AB = CD, \\text{ then } \\angle AOB = \\angle COD}$$
      <p><b>Converse Theorem:</b></p>
      $$\\mathbf{\\text{If } \\angle AOB = \\angle COD, \\text{ then } AB = CD}$$
      <p><b>Arc-Chord Equivalence:</b> Equal central angles also correspond to equal arc lengths: the arc lengths $\\widehat{AB}$ and $\\widehat{CD}$ are equal if and only if chords $AB$ and $CD$ are equal.</p>`,
    statement_ml: `<p>കേന്ദ്രം $O$ ആയ വൃത്തത്തിലെ രണ്ട് ഞാണുകളാണ് $AB, CD$ എന്നിരിക്കട്ടെ. ഞാണിന്റെ അഗ്രങ്ങളെ കേന്ദ്രവുമായി യോജിപ്പിക്കുമ്പോൾ ഉണ്ടാകുന്ന കോണാണ് ആ ഞാൺ ഉണ്ടാക്കുന്ന <b>കേന്ദ്രകോൺ</b>:</p>
      $$\\mathbf{AB = CD \\text{ ആണെങ്കിൽ, } \\angle AOB = \\angle COD \\text{ ആയിരിക്കും}}$$
      <p><b>വിപരീത സിദ്ധാന്തം:</b></p>
      $$\\mathbf{\\angle AOB = \\angle COD \\text{ ആണെങ്കിൽ, } AB = CD \\text{ ആയിരിക്കും}}$$
      <p><b>ചാപ-ഞാൺ ബന്ധം:</b> കേന്ദ്രകോണുകൾ തുല്യമാകുമ്പോൾ അവയുണ്ടാക്കുന്ന ചാപങ്ങളുടെ നീളങ്ങളും ($\\widehat{AB}, \\widehat{CD}$) പരസ്പരം തുല്യമായിരിക്കും.</p>`,
    intuition_en: `<p>Rotating a rigid triangle around the circle's centre: rotating triangle AOB by a fixed angle carries chord AB to chord CD without stretching or shrinking.</p>`,
    intuition_ml: `<p>ഒരു ത്രികോണത്തെ കേന്ദ്രത്തിൽ പിടിച്ച് കറക്കുന്നതുപോലെയാണ്; ത്രികോണം $\triangle AOB$-യെ കറക്കി $\triangle COD$-യിലേക്ക് വെക്കുമ്പോൾ ഞാണുകളും കോണുകളും തികച്ചും ഒത്തുപോകുന്നു.</p>`,
    proof: {
      idea_en: 'SSS congruence of triangles AOB and COD proves angle equality; SAS congruence proves the converse.',
      idea_ml: '$SSS$ തുല്യത വഴി കോണുകൾ തുല്യമാണെന്നും, $SAS$ തുല്യത വഴി ഞാണുകൾ തുല്യമാണെന്നും തെളിയുന്നു.',
      why_en: 'All radii OA, OB, OC, OD are equal to r.',
      why_ml: '$OA, OB, OC, OD$ എന്നിവയെല്ലാം തുല്യ ആരങ്ങളാണ്.',
      rungs_en: [
        { why_en: 'In triangles AOB and COD, sides are radii.', m: 'OA = OC = r, \\quad OB = OD = r' },
        { why_en: 'Given chords are equal.', m: 'AB = CD' },
        { why_en: 'By SSS congruence criterion.', m: '\\triangle AOB \\cong \\triangle COD' },
        { why_en: 'Corresponding angles are equal.', m: '\\angle AOB = \\angle COD' }
      ],
      rungs_ml: [
        { why_ml: 'ത്രികോണങ്ങളിൽ വശങ്ങൾ ആരങ്ങളാണ്.', m: 'OA = OC = r, \\quad OB = OD = r' },
        { why_ml: 'ഞാണുകൾ തുല്യമാണ്.', m: 'AB = CD' },
        { why_ml: '$SSS$ തുല്യതാ തത്വപ്രകാരം.', m: '\\triangle AOB \\cong \\triangle COD' },
        { why_ml: 'അനുരൂപ കോണുകൾ തുല്യമാണ്.', m: '\\angle AOB = \\angle COD' }
      ]
    },
    needs: ['m8.2.1.sss-congruence'],
    traps_en: [
      'Doubling the central angle does NOT double the chord length (because chords are straight lines, while arcs are curved).',
      'The chord subtending a 60° central angle forms an equilateral triangle with the radii, so chord length = radius r.'
    ],
    traps_ml: [
      'കേന്ദ്രകോൺ ഇരട്ടിയായാൽ ഞാണിന്റെ നീളം ഇരട്ടിയാകില്ല (ചാപത്തിന്റെ നീളം മാത്രമേ ഇരട്ടിയാകൂ).',
      'കേന്ദ്രകോൺ 60° ആകുമ്പോൾ ത്രികോണം സമഭുജ ത്രികോണമാകുന്നതിനാൽ ഞാണിന്റെ നീളം ആരത്തിന് (r) തുല്യമായിരിക്കും.'
    ],
    cards_en: [
      { q: 'In a circle of radius r, what is the length of a chord subtending a 60° angle at the centre?', a: '$\\mathbf{r}$ (the radius itself, because triangle AOB is equilateral).', kind: 'apply' },
      { q: 'Two chords AB and CD subtend 45° and 60° at the centre respectively. Which chord is longer?', a: 'Chord **CD** is longer (larger central angle subtends a longer chord).', kind: 'apply' },
      { q: 'If two chords subtend equal angles at the centre, what can be said about their lengths?', a: 'Their lengths are equal.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ആരം r ആയ വൃത്തത്തിൽ കേന്ദ്രത്തിൽ 60° കോണുണ്ടാക്കുന്ന ഞാണിന്റെ നീളം എത്ര?', a: 'ആരത്തിന് തുല്യമായിരിക്കും ($\\mathbf{r}$), കാരണം ഉണ്ടാകുന്ന ത്രികോണം സമഭുജമാണ്.', kind: 'apply' },
      { q: 'രണ്ട് ഞാണുകൾ കേന്ദ്രത്തിൽ യഥാക്രമം 45°, 60° കോണുകളുണ്ടാക്കുന്നു. ഇതിൽ ഏത് ഞാണിനാണ് നീളം കൂടുതൽ?', a: '**60° കോണുണ്ടാക്കുന്ന ഞാണിന്** നീളം കൂടുതലായിരിക്കും.', kind: 'apply' },
      { q: 'രണ്ട് ഞാണുകൾ കേന്ദ്രത്തിൽ തുല്യകോണുണ്ടാക്കിയാൽ അവയുടെ നീളങ്ങളെക്കുറിച്ച് എന്ത് പറയാം?', a: 'അവ തുല്യ നീളമുള്ളവയായിരിക്കും.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.5.3.angle-in-a-semicircle',
    sec: '9.5.3',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Angle in a Semicircle is a Right Angle (Thales Circle Theorem)',
    title_ml: 'അർദ്ധവൃത്തത്തിലെ കോൺ മട്ടകോണാണ്',
    oneLine_en: 'The angle subtended by a diameter at any point on the circumference of a circle is strictly 90° (a right angle).',
    oneLine_ml: 'ഒരു വൃത്തത്തിന്റെ വ്യാസം വൃത്തത്തിലെ ഏതൊരു ബിന്ദുവിലും ഉണ്ടാക്കുന്ന കോൺ 90° (മട്ടകോൺ) ആയിരിക്കും.',
    statement_en: `<p>Let $AB$ be a diameter of a circle with centre $O$. Let $P$ be any point on the circle other than $A$ and $B$.</p>
      $$\\mathbf{\\angle APB = 90^\\circ}$$
      <p><b>Thales' Circle Theorem:</b> Any angle inscribed in a semicircle is a <b>right angle</b> ($90^\\circ$).</p>
      <p><b>Corollaries:</b></p>
      <ul>
        <li>If a triangle has one side as a diameter and the opposite vertex lies on the circle, it is a <b>right-angled triangle</b>.</li>
        <li>The midpoint of the hypotenuse of any right-angled triangle is the <b>circumcentre</b> (it is equidistant from all three vertices).</li>
        <li>Points inside the circle make an obtuse angle ($> 90^\\circ$) with the diameter.</li>
        <li>Points outside the circle make an acute angle ($< 90^\\circ$) with the diameter.</li>
      </ul>`,
    statement_ml: `<p>കേന്ദ്രം $O$ ആയ വൃത്തത്തിലെ വ്യാസമാണ് $AB$ എന്നിരിക്കട്ടെ. $A, B$ അല്ലാതെ വൃത്തത്തിലെ മറ്റൊരു ബിന്ദുവാണ് $P$.</p>
      $$\\mathbf{\\angle APB = 90^\\circ}$$
      <p><b>അർദ്ധവൃത്ത കോൺ സിദ്ധാന്തം (ഥേൽസ് സിദ്ധാന്തം):</b> അർദ്ധവൃത്തത്തിലെ കോൺ എപ്പോഴും <b>മട്ടകോണാണ്</b> ($90^\\circ$).</p>
      <p><b>പ്രധാന അനുമാനങ്ങൾ:</b></p>
      <ul>
        <li>ഒരു ത്രികോണത്തിന്റെ ഒരു വശം വ്യാസമാവുകയും എതിർ ശീർഷം വൃത്തത്തിലാവുകയും ചെയ്താൽ അത് <b>മട്ടത്രികോണമായിരിക്കും</b>.</li>
        <li>ഏതൊരു മട്ടത്രികോണത്തിന്റെയും കർണ്ണത്തിന്റെ മധ്യബിന്ദു അതിന്റെ <b>പരിവൃത്തകേന്ദ്രമായിരിക്കും</b> (ശീർഷങ്ങളിൽ നിന്ന് തുല്യ അകലം).</li>
        <li>വൃത്തത്തിന് ഉള്ളിലുള്ള ബിന്ദുക്കൾ വ്യാസവുമായി ഉണ്ടാക്കുന്ന കോൺ ബൃഹത്കോണും ($> 90^\\circ$) ആയിരിക്കും.</li>
        <li>വൃത്തത്തിന് പുറത്തുള്ള ബിന്ദുക്കൾ വ്യാസവുമായി ഉണ്ടാക്കുന്ന കോൺ ന്യൂനകോണും ($< 90^\\circ$) ആയിരിക്കും.</li>
      </ul>`,
    intuition_en: `<p>Connecting point P to centre O divides triangle APB into two isosceles triangles (radii OA = OP = OB), where the two base angle pairs sum to the vertex angle, forcing it to be exactly half of 180°, which is 90°.</p>`,
    intuition_ml: `<p>P-യെ കേന്ദ്രം O-യുമായി യോജിപ്പിച്ചാൽ രണ്ട് സമപാർശ്വ ത്രികോണങ്ങൾ ലഭിക്കുന്നു (OA = OP = OB). കോണുകളുടെ തുക 180° ആയതിനാൽ ശീർഷകോൺ കൃത്യം 90° ആയി മാറുന്നു.</p>`,
    proof: {
      idea_en: 'Decompose triangle APB by radius OP into two isosceles triangles OPA and OPB.',
      idea_ml: 'OP എന്ന ആരം വരച്ച് ത്രികോണത്തെ രണ്ട് സമപാർശ്വ ത്രികോണങ്ങളാക്കി കോണുകൾ കൂട്ടുന്നു.',
      why_en: 'Sum of angles in triangle APB is 2(alpha + beta) = 180°, so alpha + beta = 90°.',
      why_ml: 'ത്രികോണത്തിലെ കോണുകളുടെ തുക 180° ആയതിനാൽ ആകെ തുകയുടെ പകുതി 90° ലഭിക്കുന്നു.',
      rungs_en: [
        { why_en: 'In isosceles triangle OAP (OA = OP = r).', m: '\\angle OAP = \\angle OPA = \\alpha' },
        { why_en: 'In isosceles triangle OBP (OB = OP = r).', m: '\\angle OBP = \\angle OPB = \\beta' },
        { why_en: 'Total angle at P.', m: '\\angle APB = \\alpha + \\beta' },
        { why_en: 'Sum of angles in triangle APB is 180.', m: '\\alpha + \\beta + (\\alpha + \\beta) = 180^\\circ \\implies 2(\\alpha + \\beta) = 180^\\circ' },
        { why_en: 'Divide by 2.', m: '\\angle APB = \\alpha + \\beta = 90^\\circ' }
      ],
      rungs_ml: [
        { why_ml: 'സമപാർശ്വ ത്രികോണം $\triangle OAP$-യിൽ.', m: '\\angle OAP = \\angle OPA = \\alpha' },
        { why_ml: 'സമപാർശ്വ ത്രികോണം $\triangle OBP$-യിൽ.', m: '\\angle OBP = \\angle OPB = \\beta' },
        { why_ml: 'P-യിലെ ആകെ കോൺ.', m: '\\angle APB = \\alpha + \\beta' },
        { why_ml: 'ത്രികോണത്തിലെ കോണുകളുടെ തുക.', m: '2(\\alpha + \\beta) = 180^\\circ' },
        { why_ml: 'അർദ്ധവൃത്തത്തിലെ കോൺ മട്ടകോണാണ്.', m: '\\angle APB = 90^\\circ' }
      ]
    },
    needs: ['m8.2.4.isosceles-triangles'],
    traps_en: [
      'The chord AB MUST be a DIAMETER passing through the centre for the angle to be 90°.',
      'Points outside the semicircle make angles LESS than 90°, inside make GREATER than 90°.'
    ],
    traps_ml: [
      'കോൺ 90 ഡിഗ്രി ആകണമെങ്കിൽ AB ഒരു വ്യാസം തന്നെയായിരിക്കണം.',
      'വൃത്തത്തിന് പുറത്തുള്ള ബിന്ദുവിൽ കോൺ 90-ൽ കുറവും, വൃത്തത്തിനകത്ത് 90-ൽ കൂടുതലുമായിരിക്കും.'
    ],
    cards_en: [
      { q: 'What is the measure of an angle inscribed in a semicircle?', a: '$\\mathbf{90^\\circ}$ (a right angle).', kind: 'recall' },
      { q: 'In a circle with diameter AB, P is a point outside the circle. Is angle APB acute, right, or obtuse?', a: '**Acute** ($< 90^\\circ$).', kind: 'apply' },
      { q: 'Where does the circumcentre of a right-angled triangle lie?', a: 'At the **midpoint of its hypotenuse**.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'അർദ്ധവൃത്തത്തിലെ കോണിന്റെ അളവ് എത്രയാണ്?', a: '$\\mathbf{90^\\circ}$ (മട്ടകോൺ).', kind: 'recall' },
      { q: 'AB വ്യാസമായ വൃത്തത്തിന് പുറത്താണ് P എന്ന ബിന്ദുവെങ്കിൽ കോൺ APB ന്യൂനകോണോ മട്ടകോണോ ബൃഹത്കോണോ?', a: '**ന്യൂനകോൺ** ($< 90^\\circ$).', kind: 'apply' },
      { q: 'ഒരു മട്ടത്രികോണത്തിന്റെ പരിവൃത്തകേന്ദ്രം എവിടെയാണ് സ്ഥിതിചെയ്യുന്നത്?', a: '**കർണ്ണത്തിന്റെ മധ്യബിന്ദുവിൽ**.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.5.4.angle-subtended-by-an-arc',
    sec: '9.5.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Angle Subtended by an Arc (Inscribed Angle Theorem)',
    title_ml: 'ചാപം കേന്ദ്രത്തിലും വൃത്തത്തിലും ഉണ്ടാക്കുന്ന കോൺ',
    oneLine_en: 'The angle subtended by an arc at the centre of a circle is double the angle subtended by it at any point on the remaining part of the circle: $\angle AOB = 2\angle APB$.',
    oneLine_ml: 'ഒരു വൃത്തചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ ബാക്കി വൃത്തഭാഗത്ത് ഉണ്ടാക്കുന്ന കോണിന്റെ ഇരട്ടിയായിരിക്കും: $\angle AOB = 2\angle APB$.',
    statement_en: `<p>Let arc $AB$ of a circle with centre $O$ subtend an angle $\\angle AOB$ at the centre, and let $P$ be any point on the remaining part of the circumference:</p>
      $$\\mathbf{\\angle AOB = 2 \\times \\angle APB}$$
      <p><b>Major Corollaries:</b></p>
      <ul>
        <li><b>Angles in the same segment are equal:</b> Any two points $P$ and $Q$ on the same arc subtend identical angles: $\\angle APB = \\angle AQB$.</li>
        <li><b>Angle in a major segment is acute:</b> If arc $AB$ is a minor arc, $\\angle APB < 90^\\circ$.</li>
        <li><b>Angle in a minor segment is obtuse:</b> If arc $AB$ is a major arc, the inscribed angle is $> 90^\\circ$.</li>
        <li><b>Cyclic Quadrilaterals:</b> Opposite angles of a quadrilateral whose vertices lie on a circle add up to $180^\\circ$ (they are supplementary):
          $$\\angle A + \\angle C = 180^\\circ, \\quad \\angle B + \\angle D = 180^\\circ$$</li>
      </ul>`,
    statement_ml: `<p>കേന്ദ്രം $O$ ആയ വൃത്തത്തിലെ $AB$ എന്ന ചാപം കേന്ദ്രത്തിലുണ്ടാക്കുന്ന കോൺ $\\angle AOB$-യും, ബാക്കി വൃത്തഭാഗത്തിലെ ഏതെങ്കിലും ബിന്ദു $P$-യിൽ ഉണ്ടാക്കുന്ന കോൺ $\\angle APB$-യും ആണെങ്കിൽ:</p>
      $$\\mathbf{\\angle AOB = 2 \\times \\angle APB}$$
      <p><b>പ്രധാന അനുമാനങ്ങൾ:</b></p>
      <ul>
        <li><b>ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകൾ തുല്യമാണ്:</b> ഒരേ വൃത്തഭാഗത്ത് വരുന്ന ഏതൊരു രണ്ട് കോണുകളും തുല്യമായിരിക്കും: $\\angle APB = \\angle AQB$.</li>
        <li><b>വലിയ വൃത്തഖണ്ഡത്തിലെ കോൺ ന്യൂനകോണാണ്:</b> ($< 90^\\circ$).</li>
        <li><b>ചെറിയ വൃത്തഖണ്ഡത്തിലെ കോൺ ബൃഹത്കോണാണ്:</b> ($> 90^\\circ$).</li>
        <li><b>വൃത്തീയ ചതുർഭുജം:</b> നാല് ശീർഷങ്ങളും വൃത്തത്തിലുള്ള ചതുർഭുജത്തിലെ എതിർകോണുകൾ അനുപൂരകങ്ങളാണ് (തുക $180^\\circ$):
          $$\\angle A + \\angle C = 180^\\circ, \\quad \\angle B + \\angle D = 180^\\circ$$</li>
      </ul>`,
    intuition_en: `<p>As you pull the vertex back from the centre to the boundary of the circle, the view angle narrows by exactly half.</p>`,
    intuition_ml: `<p>കേന്ദ്രത്തിൽ നിന്ന് വൃത്തപരിധിയിലേക്ക് പിൻവാങ്ങുമ്പോൾ കാഴ്ചക്കോൺ കൃത്യം പകുതിയായി ചുരുങ്ങുന്നു.</p>`,
    proof: {
      idea_en: 'Extend diameter PO through centre O to Q and apply exterior angle theorem on the two isosceles triangles OPA and OPB.',
      idea_ml: 'PO നീട്ടി വ്യാസമുണ്ടാക്കി സമപാർശ്വ ത്രികോണങ്ങളിലെ ബാഹ്യകോൺ തത്വം ഉപയോഗിച്ച് തെളിയിക്കുന്നു.',
      why_en: 'Exterior angle of a triangle equals the sum of two opposite interior angles.',
      why_ml: 'ത്രികോണത്തിലെ ബാഹ്യകോൺ എതിരെയുള്ള രണ്ട് ആന്തരകോണുകളുടെ തുകയ്ക്ക് തുല്യമാണ്.',
      rungs_en: [
        { why_en: 'Draw line PO extended to Q through center O.', m: 'POQ \\text{ is a straight line}' },
        { why_en: 'Exterior angle of isosceles triangle OPA.', m: '\\angle AOQ = 2 \\angle APO' },
        { why_en: 'Exterior angle of isosceles triangle OPB.', m: '\\angle BOQ = 2 \\angle BPO' },
        { why_en: 'Add the two angle relations.', m: '\\angle AOB = \\angle AOQ + \\angle BOQ = 2(\\angle APO + \\angle BPO) = 2 \\angle APB' }
      ],
      rungs_ml: [
        { why_ml: 'PO-യെ Q വരെ നീട്ടുന്നു.', m: 'POQ \\text{ നേർവര}' },
        { why_ml: '$\triangle OPA$-യിലെ ബാഹ്യകോൺ.', m: '\\angle AOQ = 2 \\angle APO' },
        { why_ml: '$\triangle OPB$-യിലെ ബാഹ്യകോൺ.', m: '\\angle BOQ = 2 \\angle BPO' },
        { why_ml: 'ഇരു കോണുകളും കൂട്ടുമ്പോൾ.', m: '\\angle AOB = 2 \\angle APB' }
      ]
    },
    needs: ['m9.5.3.angle-in-a-semicircle', 'm8.4.2.polygon-outer-angles'],
    traps_en: [
      'The central angle is TWICE the inscribed angle, not the other way around: Angle at Centre = 2 * Angle at Perimeter.',
      'In cyclic quadrilaterals, OPPOSITE angles add to 180°, not adjacent angles.'
    ],
    traps_ml: [
      'കേന്ദ്രകോൺ ആണ് വൃത്തത്തിലെ കോണിന്റെ ഇരട്ടി (വൃത്തത്തിലെ കോൺ = കേന്ദ്രകോണിന്റെ പകുതി).',
      'വൃത്തീയ ചതുർഭുജത്തിൽ എതിർകോണുകളുടെ തുകയാണ് 180°, അടുത്തടുത്ത കോണുകളുടേതല്ല.'
    ],
    cards_en: [
      { q: 'An arc subtends an angle of 110° at the centre. What angle does it subtend at the circumference?', a: '$\\frac{110^\\circ}{2} = \\mathbf{55^\\circ}$.', kind: 'apply' },
      { q: 'In a cyclic quadrilateral ABCD, angle A = 70°. What is angle C?', a: 'Opposite angles sum to 180°: $\\angle C = 180^\\circ - 70^\\circ = \\mathbf{110^\\circ}$.', kind: 'apply' },
      { q: 'What can be said about angles in the same segment of a circle?', a: 'They are strictly equal.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ഒരു ചാപം കേന്ദ്രത്തിൽ 110° കോണുണ്ടാക്കിയാൽ വൃത്തത്തിലെ ബാക്കി ഭാഗത്ത് ഉണ്ടാക്കുന്ന കോൺ എത്ര?', a: '$\\frac{110^\\circ}{2} = \\mathbf{55^\\circ}$.', kind: 'apply' },
      { q: 'വൃത്തീയ ചതുർഭുജം ABCD-യിൽ കോൺ A = 70° ആയാൽ കോൺ C എത്ര?', a: 'എതിർകോണുകളുടെ തുക 180° ആയതിനാൽ: $180^\\circ - 70^\\circ = \\mathbf{110^\\circ}$.', kind: 'apply' },
      { q: 'ഒരേ വൃത്തഖണ്ഡത്തിലെ കോണുകളെക്കുറിച്ച് എന്ത് പറയാം?', a: 'അവ പരസ്പരം തുല്യമായിരിക്കും.', kind: 'recall' }
    ]
  }
);
