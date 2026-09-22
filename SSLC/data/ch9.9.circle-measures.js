/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 9: Circle Measures (വൃത്തപ്പരപ്പളവ്)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm9.9.1.circumference-and-pi',
    sec: '9.9.1',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Circumference of a Circle and the Discovery of π',
    title_ml: 'വൃത്തത്തിന്റെ ചുറ്റളവും പൈയുടെ (π) കണ്ടെത്തലും',
    oneLine_en: 'For any circle, the ratio of its perimeter (circumference C) to its diameter (d = 2r) is strictly constant and equal to the irrational constant π ≈ 3.1416: C = 2πr.',
    oneLine_ml: 'ഏതൊരു വൃത്തത്തിലും അതിന്റെ ചുറ്റളവും (C) വ്യാസവും (d = 2r) തമ്മിലുള്ള അംശബന്ധം എപ്പോഴും ഒരു സ്ഥിരസംഖ്യയായിരിക്കും; ഈ സംഖ്യയെ പൈ (π ≈ 3.1416) എന്ന് വിളിക്കുന്നു: C = 2πr.',
    statement_en: `<p>For any regular polygon, the perimeter scales directly with the distance from the centre. As the number of sides increases indefinitely, the polygon approaches a circle, and the ratio of perimeter to diameter remains invariant.</p>
      <p><b>The Fundamental Ratio π:</b></p>
      $$\\mathbf{\\frac{\\text{Circumference}}{\\text{Diameter}} = \\frac{C}{d} = \\pi}$$
      <p>where $\\pi$ is an irrational mathematical constant with decimal approximation:</p>
      $$\\pi \\approx 3.14159265... \\approx \\frac{22}{7} \\approx 3.1416$$
      <p><b>Circumference Formula:</b></p>
      <p>Since diameter $d = 2r$ (where $r$ is the radius):</p>
      $$\\mathbf{C = \\pi d = 2\\pi r}$$
      <p><b>Proportional Scaling:</b> If the radius is scaled by a factor $k$, the circumference scales linearly by the exact same factor $k$.</p>`,
    statement_ml: `<p>സമബഹുഭുജങ്ങളുടെ വശങ്ങളുടെ എണ്ണം വർദ്ധിക്കുംതോറും അവ വൃത്തത്തോട് കൂടുതൽ അടുക്കുന്നു. ഏതൊരു വൃത്തത്തിലും ചുറ്റളവിനെ വ്യാസം കൊണ്ട് ഹരിച്ചാൽ കിട്ടുന്ന സംഖ്യ സ്ഥിരമായിരിക്കും.</p>
      <p><b>പൈ (π) എന്ന സ്ഥിരസംഖ്യ:</b></p>
      $$\\mathbf{\\frac{\\text{ചുറ്റളവ്}}{\\text{വ്യാസം}} = \\frac{C}{d} = \\pi}$$
      <p>$\\pi$ എന്നത് ഒരു അഭിന്നക സംഖ്യയാണ്. ഇതിന്റെ ഏകദേശ വിലകൾ:</p>
      $$\\pi \\approx 3.1416 \\approx \\frac{22}{7}$$
      <p><b>ചുറ്റളവ് സൂത്രവാക്യം:</b></p>
      <p>വ്യാസം $d = 2r$ (ആരം $r$) ആയതിനാൽ:</p>
      $$\\mathbf{C = \\pi d = 2\\pi r}$$
      <p>ആരം $k$ മടങ്ങായാൽ ചുറ്റളവും കൃത്യമായി $k$ മടങ്ങായി വർദ്ധിക്കുന്നു.</p>`,
    intuition_en: `<p>Rolling a circular wheel of diameter d along a flat line: one full revolution rolls out a straight distance of exactly π × d ≈ 3.1416 × d.</p>`,
    intuition_ml: `<p>വ്യാസം d ആയ ഒരു വൃത്തം ഒരു പ്രാവശ്യം പൂർണ്ണമായി ഉരുട്ടുമ്പോൾ അത് സഞ്ചരിക്കുന്ന നേർദൂരം കൃത്യം $\\pi \\times d$ (ഏകദേശം $3.14$ മടങ്ങ്) ആയിരിക്കും.</p>`,
    proof: {
      idea_en: 'Sandwich the circle between inscribed and circumscribed regular polygons and take the limit as number of sides n -> infinity.',
      idea_ml: 'വൃത്തത്തിന് അകത്തും പുറത്തും സമബഹുഭുജങ്ങൾ വരച്ച് വശങ്ങളുടെ എണ്ണം വർദ്ധിപ്പിച്ച് ചുറ്റളവ് കണ്ടെത്തുന്നു.',
      why_en: 'Perimeter of inscribed polygon < circle circumference < perimeter of circumscribed polygon, squeezing to a unique constant ratio pi.',
      why_ml: 'അന്തർലിഖിത ബഹുഭുജത്തിന്റെയും പരിലിഖിത ബഹുഭുജത്തിന്റെയും ചുറ്റളവുകൾക്കിടയിൽ വൃത്തത്തിന്റെ ചുറ്റളവ് സ്ഥിരപ്പെടുന്നു.',
      rungs_en: [
        { why_en: 'Let regular n-gon have side s_n inscribed in circle of radius r.', m: 'P_n = n s_n = 2n r \\sin(\\pi / n)' },
        { why_en: 'As number of sides n grows to infinity.', m: '\\lim_{n \\to \\infty} 2n r \\sin(\\pi / n) = 2\\pi r' },
        { why_en: 'Ratio to diameter 2r is constant.', m: '\\frac{C}{2r} = \\pi' }
      ],
      rungs_ml: [
        { why_ml: 'വൃത്തത്തിൽ $n$ വശങ്ങളുള്ള സമബഹുഭുജം വരയ്ക്കുന്നു.', m: 'P_n = n \\cdot s_n' },
        { why_ml: 'വശങ്ങളുടെ എണ്ണം $n$ അനന്തതയിലേക്ക് അടുക്കുമ്പോൾ.', m: '\\lim_{n \\to \\infty} P_n = 2\\pi r' },
        { why_ml: 'വ്യാസവുമായുള്ള അംശബന്ധം എപ്പോഴും പൈ ($\\pi$) ആണ്.', m: '\\frac{C}{2r} = \\pi' }
      ]
    },
    needs: ['m8.4.3.regular-polygons', 'p.4.1'],
    traps_en: [
      'pi is an IRRATIONAL number; 22/7 is only an APPROXIMATION, not the exact value.',
      'Circumference formula uses 2 * pi * r (or pi * d), do not mix with area pi * r^2.'
    ],
    traps_ml: [
      'പൈ (π) ഒരു അഭിന്നക സംഖ്യയാണ്; 22/7 എന്നത് അതിന്റെ ഏകദേശവില മാത്രമാണ്.',
      'ചുറ്റളവിന് $2\\pi r$-ഉം പരപ്പളവിന് $\\pi r^2$-ഉം ആണ് ഉപയോഗിക്കേണ്ടത്, പരസ്പരം മാറിപ്പോകരുത്.'
    ],
    cards_en: [
      { q: 'What is the circumference of a circle with radius 7 cm (using pi = 22/7)?', a: '$C = 2 \\times \\frac{22}{7} \\times 7 = \\mathbf{44\\text{ cm}}$.', kind: 'apply' },
      { q: 'A wheel has diameter 70 cm. How far does it travel in one complete rotation?', a: '$C = \\pi d = \\frac{22}{7} \\times 70 = \\mathbf{220\\text{ cm}} = 2.2\\text{ m}$.', kind: 'apply' },
      { q: 'What type of number is pi?', a: 'An **irrational number** (cannot be expressed as a ratio of integers).', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ആരം 7 cm ആയ വൃത്തത്തിന്റെ ചുറ്റളവ് എത്ര ($\\pi = 22/7$)?', a: '$C = 2 \\times \\frac{22}{7} \\times 7 = \\mathbf{44\\text{ cm}}$.', kind: 'apply' },
      { q: 'വ്യാസം 70 cm ആയ ഒരു ചക്രം ഒരു കറക്കത്തിൽ എത്ര ദൂരം സഞ്ചരിക്കും?', a: '$C = \\pi d = \\frac{22}{7} \\times 70 = \\mathbf{220\\text{ cm}} = 2.2\\text{ m}$.', kind: 'apply' },
      { q: 'പൈ (π) എത്തരത്തിലുള്ള സംഖ്യയാണ്?', a: '**അഭിന്നക സംഖ്യ** (ഭിന്നസംഖ്യയായി കൃത്യമായി എഴുതാൻ കഴിയില്ല).', kind: 'recall' }
    ]
  },

  {
    id: 'm9.9.2.area-of-a-circle',
    sec: '9.9.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Area of a Circle and Sector Dissection',
    title_ml: 'വൃത്തത്തിന്റെ പരപ്പളവും സെക്ടർ വിഭജനവും',
    oneLine_en: 'The area enclosed by a circle of radius r is strictly proportional to the square of its radius: Area = πr².',
    oneLine_ml: 'ആരം r ആയ വൃത്തത്തിന്റെ പരപ്പളവ് ആരത്തിന്റെ വർഗ്ഗത്തിന് ആനുപാതികമായിരിക്കും: പരപ്പളവ് = πr².',
    statement_en: `<p>The <b>area of a circle</b> of radius $r$ is given by:</p>
      $$\\mathbf{A = \\pi r^2}$$
      <p><b>Geometric Sector Dissection Proof:</b></p>
      <p>Divide the circle into a large number of equal sectors. Rearrange these alternating pie sectors head-to-tail to form an approximate rectangle:</p>
      <ul>
        <li>The curved top and bottom edges together equal the entire circumference $2\\pi r$, so each edge has length $\\frac{1}{2}(2\\pi r) = \\pi r$.</li>
        <li>The vertical height of the slices equals the radius $r$.</li>
        <li>As the number of sectors increases, the figure becomes an exact rectangle of width $\\pi r$ and height $r$:
          $$\\text{Area} = \\text{width} \\times \\text{height} = (\\pi r) \\times r = \\mathbf{\\pi r^2}$$</li>
      </ul>
      <p><b>Quadratic Scaling:</b> If the radius is doubled ($2r$), the area is multiplied by $2^2 = \\mathbf{4}$. If the radius is tripled ($3r$), the area is multiplied by $3^2 = \\mathbf{9}$.</p>`,
    statement_ml: `<p>ആരം $r$ ആയ വൃത്തത്തിന്റെ <b>പരപ്പളവ്</b>:</p>
      $$\\mathbf{A = \\pi r^2}$$
      <p><b>സെക്ടർ വിഭജന തെളിവ്:</b></p>
      <p>വൃത്തത്തെ നിരവധി തുല്യ സെക്ടറുകളായി മുറിച്ച് ഒന്നിടവിട്ട് തലതിരിച്ച് ചേർത്തുവെച്ചാൽ അതൊരു ചതുരമായി മാറുന്നു:</p>
      <ul>
        <li>ചതുരത്തിന്റെ മുകളിലെയും താഴത്തെയും വശങ്ങളുടെ ആകെ നീളം വൃത്തത്തിന്റെ ചുറ്റളവിന് ($2\\pi r$) തുല്യമാണ്. അതിനാൽ ഒരു വശത്തിന്റെ നീളം $= \\frac{2\\pi r}{2} = \\pi r$.</li>
        <li>ചതുരത്തിന്റെ വീതി വൃത്തത്തിന്റെ ആരമായ $r$-ന് തുല്യമാണ്.</li>
        <li>സെക്ടറുകളുടെ എണ്ണം കൂടുംതോറും ഇതൊരു കൃത്യമായ ചതുരമായി മാറുന്നു:
          $$\\text{പരപ്പളവ്} = \\text{നീളം} \\times \\text{വീതി} = (\\pi r) \\times r = \\mathbf{\\pi r^2}$$</li>
      </ul>
      <p><b>വർഗ്ഗാനുപാത വളർച്ച:</b> ആരം 2 മടങ്ങായാൽ പരപ്പളവ് $2^2 = \\mathbf{4}$ മടങ്ങാകും; ആരം 3 മടങ്ങായാൽ പരപ്പളവ് $3^2 = \\mathbf{9}$ മടങ്ങാകും.</p>`,
    intuition_en: `<p>Unrolling concentric rings of a circle from center to edge stacks them into a right triangle of base 2πr and height r, whose area is (1/2) * (2πr) * r = πr².</p>`,
    intuition_ml: `<p>വൃത്തത്തിലെ ഓരോ വളയങ്ങളും മുറിച്ച് നിവർത്തി വെച്ചാൽ പാദം $2\\pi r$-ഉം ഉയരം $r$-ഉം ആയ ഒരു മട്ടത്രികോണം ലഭിക്കുന്നു; അതിന്റെ പരപ്പളവ് $\\frac{1}{2} \\times 2\\pi r \\times r = \\pi r^2$ ആണ്.</p>`,
    proof: {
      idea_en: 'Decompose circle into n sectors, unroll into alternating rows forming a rectangle of dimensions pi * r by r.',
      idea_ml: 'വൃത്തത്തെ സെക്ടറുകളാക്കി മാറ്റി ചതുരമായി പുനഃക്രമീകരിച്ച് പരപ്പളവ് കാണുന്നു.',
      why_en: 'Limiting rectangle has length half of circumference (pi*r) and width equal to radius r.',
      why_ml: 'രൂപപ്പെടുന്ന ചതുരത്തിന്റെ നീളം ചുറ്റളവിന്റെ പകുതിയും വീതി ആരവുമാണ്.',
      rungs_en: [
        { why_en: 'Total perimeter of outer arcs is 2 * pi * r.', m: 'C = 2\\pi r' },
        { why_en: 'Half of sectors face up, half face down; base length is C / 2.', m: 'L = \\frac{2\\pi r}{2} = \\pi r' },
        { why_en: 'Sector side length is the radius r.', m: 'W = r' },
        { why_en: 'Area of limiting rectangle is length times width.', m: 'A = L \\times W = (\\pi r) \\times r = \\pi r^2' }
      ],
      rungs_ml: [
        { why_ml: 'ചാപങ്ങളുടെ ആകെ നീളം $2\\pi r$ ആണ്.', m: 'C = 2\\pi r' },
        { why_ml: 'പകുതി സെക്ടറുകൾ താഴെയും പകുതി മുകളിലും വരുന്നു: നീളം $= \\pi r$.', m: 'L = \\pi r' },
        { why_ml: 'ചതുരത്തിന്റെ വീതി ആരത്തിന് തുല്യമാണ്.', m: 'W = r' },
        { why_ml: 'ചതുരത്തിന്റെ പരപ്പളവ് = നീളം × വീതി.', m: 'A = \\pi r \\times r = \\pi r^2' }
      ]
    },
    needs: ['m9.9.1.circumference-and-pi', 'p.3.4'],
    traps_en: [
      'In pi * r^2, square the RADIUS, not the diameter (if diameter is given, divide by 2 first: r = d/2).',
      'Area scales quadratically: doubling radius quadruples area (not doubles).'
    ],
    traps_ml: [
      'സൂത്രവാക്യത്തിൽ ആരത്തിന്റെ വർഗ്ഗമാണ് കാണേണ്ടത് (വ്യാസമാണ് തന്നിട്ടുള്ളതെങ്കിൽ ആദ്യം 2 കൊണ്ട് ഹരിച്ച് ആരം കാണണം).',
      'ആരം ഇരട്ടിയായാൽ പരപ്പളവ് 4 മടങ്ങാകും (ഇരട്ടിയല്ല).'
    ],
    cards_en: [
      { q: 'Find the area of a circle with radius 7 cm (using pi = 22/7).', a: '$A = \\frac{22}{7} \\times 7^2 = 22 \\times 7 = \\mathbf{154\\text{ sq cm}}$.', kind: 'apply' },
      { q: 'A circle has diameter 20 cm. What is its exact area in terms of pi?', a: '$r = 10\\text{ cm}$. $A = \\pi (10^2) = \\mathbf{100\\pi\\text{ sq cm}}$.', kind: 'apply' },
      { q: 'If the radius of a circle is tripled, how many times larger does its area become?', a: '$3^2 = \\mathbf{9\\text{ times}}$ larger.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ആരം 7 cm ആയ വൃത്തത്തിന്റെ പരപ്പളവ് എത്ര ($\\pi = 22/7$)?', a: '$A = \\frac{22}{7} \\times 49 = \\mathbf{154\\text{ ച.സെ.മീ}}$.', kind: 'apply' },
      { q: 'വ്യാസം 20 cm ആയ വൃത്തത്തിന്റെ പരപ്പളവ് $\\pi$-ൽ എഴുതുക.', a: 'ആരം $= 10\\text{ cm}$. പരപ്പളവ് $= \\pi \\times 10^2 = \\mathbf{100\\pi\\text{ ച.സെ.മീ}}$.', kind: 'apply' },
      { q: 'ഒരു വൃത്തത്തിന്റെ ആരം 3 മടങ്ങാക്കിയാൽ പരപ്പളവ് എത്ര മടങ്ങാകും?', a: '$3^2 = \\mathbf{9\\text{ മടങ്ങ്}}$.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.9.3.arc-length',
    sec: '9.9.3',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Length of an Arc of a Circle',
    title_ml: 'വൃത്തചാപത്തിന്റെ നീളം',
    oneLine_en: 'The length of an arc subtending a central angle of θ° is proportional to the fraction θ/360° of the full circumference: l = (θ / 360°) × 2πr.',
    oneLine_ml: 'കേന്ദ്രകോൺ θ° ആയ ഒരു വൃത്തചാപത്തിന്റെ നീളം മുഴുവൻ ചുറ്റളവിന്റെ θ/360° ഭാഗമായിരിക്കും: l = (θ / 360°) × 2πr.',
    statement_en: `<p>A part of the circumference of a circle is called an <b>arc</b> (ചാപം).</p>
      <p>Since a full circle has a total central angle of $360^\\circ$, an arc that subtends a central angle of $\\theta^\\circ$ forms a fraction $\\frac{\\theta}{360^\\circ}$ of the entire circumference:</p>
      $$\\mathbf{l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{\\theta}{180^\\circ} \\pi r}$$
      <p><b>Standard Angle Fractions:</b></p>
      <ul>
        <li>$\\theta = 180^\\circ$ (Semicircle arc): $l = \\frac{180}{360} \\times 2\\pi r = \\pi r$ (half circumference).</li>
        <li>$\\theta = 90^\\circ$ (Quadrant arc): $l = \\frac{90}{360} \\times 2\\pi r = \\frac{1}{2}\\pi r$.</li>
        <li>$\\theta = 60^\\circ$ (One-sixth arc): $l = \\frac{60}{360} \\times 2\\pi r = \\frac{1}{3}\\pi r$.</li>
        <li>$\\theta = 45^\\circ$ (One-eighth arc): $l = \\frac{45}{360} \\times 2\\pi r = \\frac{1}{4}\\pi r$.</li>
      </ul>`,
    statement_ml: `<p>ഒരു വൃത്തപരിധിയുടെ ഒരു ഭാഗത്തെയാണ് <b>ചാപം</b> എന്ന് വിളിക്കുന്നത്.</p>
      <p>ഒരു വൃത്തത്തിന്റെ ആകെ കേന്ദ്രകോൺ $360^\\circ$ ആയതിനാൽ, $\\theta^\\circ$ കേന്ദ്രകോണുണ്ടാക്കുന്ന ചാപത്തിന്റെ നീളം മുഴുവൻ ചുറ്റളവിന്റെ $\\frac{\\theta}{360^\\circ}$ ഭാഗമായിരിക്കും:</p>
      $$\\mathbf{l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{\\theta}{180^\\circ} \\pi r}$$
      <p><b>പ്രധാന കേന്ദ്രകോൺ ഭാഗങ്ങൾ:</b></p>
      <ul>
        <li>$\\theta = 180^\\circ$ (അർദ്ധവൃത്ത ചാപം): $l = \\frac{1}{2} \\times 2\\pi r = \\pi r$.</li>
        <li>$\\theta = 90^\\circ$ (കാൽവൃത്ത ചാപം): $l = \\frac{1}{4} \\times 2\\pi r = \\frac{\\pi r}{2}$.</li>
        <li>$\\theta = 60^\\circ$: $l = \\frac{1}{6} \\times 2\\pi r = \\frac{\\pi r}{3}$.</li>
        <li>$\\theta = 45^\\circ$: $l = \\frac{1}{8} \\times 2\\pi r = \\frac{\\pi r}{4}$.</li>
      </ul>`,
    intuition_en: `<p>Angle is proportional to share of turn: central angle θ out of 360° is the exact proportion of the total circumference traversed.</p>`,
    intuition_ml: `<p>കേന്ദ്രത്തിൽ തിരിയുന്ന കോണിന്റെ അളവിനനുസരിച്ചാണ് വൃത്തപരിധിയിലൂടെയുള്ള ദൂരവും മാറുന്നത്.</p>`,
    proof: {
      idea_en: 'Direct proportion between central angle and arc length around circle.',
      idea_ml: 'കേന്ദ്രകോണും ചാപനീളവും തമ്മിലുള്ള നേർ അനുപാത തത്വം.',
      why_en: 'Complete rotation of 360° corresponds to full circumference 2*pi*r.',
      why_ml: '360 ഡിഗ്രി കറക്കത്തിന് തുല്യമാണ് മുഴുവൻ ചുറ്റളവായ 2*pi*r.',
      rungs_en: [
        { why_en: 'For full central angle of 360 degrees.', m: '\\theta = 360^\\circ \\implies l = 2\\pi r' },
        { why_en: 'For central angle of 1 degree.', m: 'l = \\frac{2\\pi r}{360^\\circ}' },
        { why_en: 'For central angle of theta degrees.', m: 'l = \\theta \\times \\frac{2\\pi r}{360^\\circ} = \\frac{\\theta}{360^\\circ} \\times 2\\pi r' }
      ],
      rungs_ml: [
        { why_ml: '360 ഡിഗ്രി കേന്ദ്രകോണിന് മുഴുവൻ ചുറ്റളവ്.', m: 'l = 2\\pi r' },
        { why_ml: '1 ഡിഗ്രി കേന്ദ്രകോണിന്റെ ചാപനീളം.', m: 'l = \\frac{2\\pi r}{360^\\circ}' },
        { why_ml: '$\\theta$ ഡിഗ്രി കേന്ദ്രകോണിന്റെ ചാപനീളം.', m: 'l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r' }
      ]
    },
    needs: ['m9.9.1.circumference-and-pi'],
    traps_en: [
      'Do not confuse the central angle with the angle in the circle (central angle is double the inscribed angle).',
      'Arc length uses 2*pi*r, whereas sector area uses pi*r^2.'
    ],
    traps_ml: [
      'കേന്ദ്രകോൺ തന്നെയാണോ തന്നിരിക്കുന്നത് എന്ന് ശ്രദ്ധിക്കുക (വൃത്തത്തിലെ കോൺ കേന്ദ്രകോണിന്റെ പകുതിയാണ്).',
      'ചാപനീളത്തിന് $2\\pi r$-ഉം സെക്ടർ പരപ്പളവിന് $\\pi r^2$-ഉം ആണ് ഉപയോഗിക്കേണ്ടത്.'
    ],
    cards_en: [
      { q: 'What is the length of an arc of a circle of radius 6 cm subtending a central angle of 60°?', a: '$l = \\frac{60}{360} \\times 2\\pi(6) = \\frac{1}{6} \\times 12\\pi = \\mathbf{2\\pi\\text{ cm}} \\approx 6.28\\text{ cm}$.', kind: 'apply' },
      { q: 'An arc of length 5π cm subtends an angle of 90° at the centre. What is the radius of the circle?', a: '$5\\pi = \\frac{90}{360} \\times 2\\pi r = \\frac{1}{2}\\pi r \\implies r = \\mathbf{10\\text{ cm}}$.', kind: 'apply' },
      { q: 'State the formula for the length of an arc with central angle θ and radius r.', a: '$\\mathbf{l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r}$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ആരം 6 cm ആയ വൃത്തത്തിൽ 60° കേന്ദ്രകോണുണ്ടാക്കുന്ന ചാപത്തിന്റെ നീളം എത്ര?', a: '$l = \\frac{60}{360} \\times 12\\pi = \\mathbf{2\\pi\\text{ cm}}$.', kind: 'apply' },
      { q: 'കേന്ദ്രത്തിൽ 90° കോണുണ്ടാക്കുന്ന ചാപത്തിന്റെ നീളം $5\\pi\\text{ cm}$ ആയാൽ വൃത്തത്തിന്റെ ആരം എത്ര?', a: '$\\frac{1}{4} \\times 2\\pi r = 5\\pi \\implies r = \\mathbf{10\\text{ cm}}$.', kind: 'apply' },
      { q: 'കേന്ദ്രകോൺ $\\theta$, ആരം $r$ ആയാൽ ചാപനീളത്തിന്റെ സൂത്രവാക്യം എന്താണ്?', a: '$\\mathbf{l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r}$.', kind: 'recall' }
    ]
  },

  {
    id: 'm9.9.4.sector-area-and-circular-rings',
    sec: '9.9.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Area of a Sector and Concentric Circular Rings (Annulus)',
    title_ml: 'സെക്ടറിന്റെ പരപ്പളവും വൃത്താകാര വളയങ്ങളും',
    oneLine_en: 'The area of a sector with central angle θ is A = (θ / 360°) × πr² = (1/2)lr; the area between two concentric circles of radii R and r is π(R² - r²).',
    oneLine_ml: 'കേന്ദ്രകോൺ θ ആയ സെക്ടറിന്റെ പരപ്പളവ് A = (θ / 360°) × πr² = (1/2)lr ആണ്; ആരങ്ങൾ R, r ആയ രണ്ട് ഏകേന്ദീയ വൃത്തങ്ങൾക്കിടയിലുള്ള വളയത്തിന്റെ പരപ്പളവ് π(R² - r²) ആണ്.',
    statement_en: `<p>A region enclosed by two radii and the connecting arc of a circle is called a <b>sector</b> (സെക്ടർ).</p>
      <p><b>1. Area of a Sector:</b></p>
      $$\\mathbf{A = \\frac{\\theta}{360^\\circ} \\times \\pi r^2}$$
      <p>Using the arc length $l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$, sector area can also be expressed as:</p>
      $$\\mathbf{A = \\frac{1}{2} l r}$$
      <p>which mirrors the triangle area formula $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$.</p>
      <p><b>2. Perimeter of a Sector:</b></p>
      $$\\mathbf{P = l + 2r = \\frac{\\theta}{360^\\circ} \\times 2\\pi r + 2r}$$
      <p><b>3. Area of a Circular Ring (Annulus / വൃത്താകാര വളയം):</b></p>
      <p>The region between two concentric circles with the same centre and radii $R$ (outer) and $r$ (inner):</p>
      $$\\mathbf{\\text{Area} = \\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2) = \\pi(R + r)(R - r)}$$
      <p>where $(R - r) = w$ is the width of the ring.</p>`,
    statement_ml: `<p>ഒരു വൃത്തത്തിലെ രണ്ട് ആരങ്ങളും അവയ്ക്കിടയിലെ ചാപവും ചേർന്ന് രൂപപ്പെടുന്ന ഭാഗത്തെയാണ് <b>സെക്ടർ</b> എന്ന് വിളിക്കുന്നത്.</p>
      <p><b>1. സെക്ടറിന്റെ പരപ്പളവ്:</b></p>
      $$\\mathbf{A = \\frac{\\theta}{360^\\circ} \\times \\pi r^2}$$
      <p>ചാപനീളം $l$ ഉപയോഗിച്ചാൽ സെക്ടർ പരപ്പളവിനെ ഇപ്രകാരവും എഴുതാം:</p>
      $$\\mathbf{A = \\frac{1}{2} l r}$$
      <p>ഇത് ത്രികോണത്തിന്റെ പരപ്പളവ് സൂത്രവാക്യമായ $\\frac{1}{2} \\times \\text{പാദം} \\times \\text{ഉയരം}$ എന്നതിന് സമാനമാണ്.</p>
      <p><b>2. സെക്ടറിന്റെ ചുറ്റളവ്:</b></p>
      $$\\mathbf{P = l + 2r}$$
      <p><b>3. വൃത്താകാര വളയത്തിന്റെ പരപ്പളവ്:</b></p>
      <p>ഒരേ കേന്ദ്രവും പുറം ആരം $R$, അകം ആരം $r$ ഉള്ള രണ്ട് വൃത്തങ്ങൾക്കിടയിലുള്ള സ്ഥലത്തിന്റെ പരപ്പളവ്:</p>
      $$\\mathbf{\\text{പരപ്പളവ്} = \\pi(R^2 - r^2) = \\pi(R + r)(R - r)}$$
      <p>ഇവിടെ $(R - r)$ എന്നത് വളയത്തിന്റെ വീതിയാണ്.</p>`,
    intuition_en: `<p>A sector is a fraction θ/360° of a pizza pie. An annulus is a large pizza minus the small inner pizza cut out from the center.</p>`,
    intuition_ml: `<p>സെക്ടർ എന്നത് മുഴുവൻ വൃത്തത്തിന്റെ $\\theta/360$ ഭാഗമാണ്. വളയത്തിന്റെ പരപ്പളവ് വലിയ വൃത്തത്തിൽ നിന്ന് ചെറിയ വൃത്തം മുറിച്ചു മാറ്റിയാൽ കിട്ടുന്ന ബാക്കി ഭാഗമാണ്.</p>`,
    proof: {
      idea_en: 'Proportion of angle to full circle for sector; difference of outer and inner circular areas for ring.',
      idea_ml: 'കേന്ദ്രകോണിന്റെ അനുപാതത്തിൽ സെക്ടർ പരപ്പളവും, പുറം വൃത്തത്തിൽ നിന്ന് അകം വൃത്തം കുറച്ച് വളയത്തിന്റെ പരപ്പളവും കാണുന്നു.',
      why_en: 'Full 360 degrees covers total area pi * r^2.',
      why_ml: '360 ഡിഗ്രി കേന്ദ്രകോണിൽ മുഴുവൻ പരപ്പളവായ $\\pi r^2$ ഉൾപ്പെടുന്നു.',
      rungs_en: [
        { why_en: 'Full circle area for 360 degrees is pi * r^2.', m: 'A_{\\text{circle}} = \\pi r^2' },
        { why_en: 'Sector area for angle theta.', m: 'A_{\\text{sector}} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2' },
        { why_en: 'Substitute arc length l = (theta/360) * 2*pi*r.', m: 'A = \\frac{1}{2} \\left(\\frac{\\theta}{360^\\circ} \\times 2\\pi r\\right) r = \\frac{1}{2} l r' },
        { why_en: 'Ring area is difference of outer and inner circles.', m: 'A_{\\text{ring}} = \\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2)' }
      ],
      rungs_ml: [
        { why_ml: 'മുഴുവൻ വൃത്തത്തിന്റെ പരപ്പളവ് $\\pi r^2$ ആണ്.', m: 'A = \\pi r^2' },
        { why_ml: 'സെക്ടറിന്റെ പരപ്പളവ്.', m: 'A = \\frac{\\theta}{360^\\circ} \\times \\pi r^2' },
        { why_ml: 'ചാപനീളം $l$ ഉൾപ്പെടുത്തുമ്പോൾ.', m: 'A = \\frac{1}{2} l r' },
        { why_ml: 'വളയത്തിന്റെ പരപ്പളവ് = പുറം വൃത്തം - അകം വൃത്തം.', m: 'A = \\pi(R^2 - r^2)' }
      ]
    },
    needs: ['m9.9.2.area-of-a-circle', 'm9.9.3.arc-length'],
    traps_en: [
      'Perimeter of a sector is l + 2r (arc PLUS TWO RADII), not just the arc length l.',
      'In R^2 - r^2, calculate (R^2 - r^2), NOT (R - r)^2.'
    ],
    traps_ml: [
      'സെക്ടറിന്റെ ചുറ്റളവ് കാണുമ്പോൾ ചാപനീളത്തോടൊപ്പം രണ്ട് ആരങ്ങളും കൂട്ടണം: $l + 2r$.',
      '$R^2 - r^2$ എന്നത് $(R - r)^2$ അല്ല.'
    ],
    cards_en: [
      { q: 'Find the area of a sector of a circle of radius 6 cm with central angle 60° (in terms of pi).', a: '$A = \\frac{60}{360} \\times \\pi (6^2) = \\frac{1}{6} \\times 36\\pi = \\mathbf{6\\pi\\text{ sq cm}}$.', kind: 'apply' },
      { q: 'A circular ring has outer radius 10 cm and inner radius 7 cm. What is its area (using pi = 22/7)?', a: '$\\pi(10^2 - 7^2) = \\frac{22}{7}(100 - 49) = \\frac{22}{7} \\times 51 = \\mathbf{160.29\\text{ sq cm}}$ (or $\\frac{22}{7} \\times (17 \\times 3) = \\frac{1122}{7}\\text{ sq cm}$).', kind: 'apply' },
      { q: 'What is the formula connecting sector area A with arc length l and radius r?', a: '$\\mathbf{A = \\frac{1}{2} l r}$.', kind: 'recall' }
    ],
    cards_ml: [
      { q: 'ആരം 6 cm, കേന്ദ്രകോൺ 60° ആയ സെക്ടറിന്റെ പരപ്പളവ് $\\pi$-ൽ കാണുക.', a: '$A = \\frac{60}{360} \\times 36\\pi = \\mathbf{6\\pi\\text{ ച.സെ.മീ}}$.', kind: 'apply' },
      { q: 'പുറം ആരം 10 cm, അകം ആരം 7 cm ആയ വൃത്താകാര വളയത്തിന്റെ പരപ്പളവ് എത്ര?', a: '$\\pi(10^2 - 7^2) = \\frac{22}{7} \\times 51 = \\frac{1122}{7} \\approx \\mathbf{160.29\\text{ ച.സെ.മീ}}$.', kind: 'apply' },
      { q: 'സെക്ടർ പരപ്പളവ് A, ചാപനീളം l, ആരം r എന്നിവ തമ്മിലുള്ള ബന്ധം എന്ത്?', a: '$\\mathbf{A = \\frac{1}{2} l r}$.', kind: 'recall' }
    ]
  }
);
