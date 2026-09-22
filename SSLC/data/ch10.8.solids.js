/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 8: Solids (ഘനരൂപങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm10.8.1.square-pyramid-dimensions-and-relations',
    sec: '10.8.1',
    kind: 'concept',
    tier: 'core',
    title_en: 'Square Pyramid: Dimensions & Relations',
    title_ml: 'സമചതുര സ്തൂപിക — അളവുകളും ബന്ധങ്ങളും',
    oneLine_en: 'In a square pyramid of base edge a, vertical height h, slant height l, and lateral edge e, key right-triangle relations are l² = h² + (a/2)² and e² = l² + (a/2)².',
    oneLine_ml: 'പാദവക്കുകൾ a, ലംബ ഉയരം h, ചരിവുയരം l, ചരിവുധാര e എന്നിവയുള്ള സമചതുര സ്തൂപികയിൽ l² = h² + (a/2)² ഉം e² = l² + (a/2)² ഉം ആണ്.',
    statement_en: `<p><b>Dimensions of a Square Pyramid:</b></p>
      <ul>
        <li><b>Base Edge ($a$):</b> The side length of the square base.</li>
        <li><b>Height ($h$):</b> The perpendicular distance from the top apex to the centre of the square base.</li>
        <li><b>Slant Height ($l$):</b> The altitude of any of the four congruent isosceles triangular lateral faces.</li>
        <li><b>Lateral Edge ($e$):</b> The line segment joining the apex to any base corner vertex.</li>
      </ul>
      <p><b>Two Fundamental Right-Angled Triangles:</b></p>
      <ol>
        <li><b>Height, Slant Height, and Half-Base:</b>
        $$\\mathbf{l^2 = h^2 + \\left(\\frac{a}{2}\\right)^2 \\iff h^2 = l^2 - \\left(\\frac{a}{2}\\right)^2}$$</li>
        <li><b>Lateral Edge, Slant Height, and Half-Base:</b>
        $$\\mathbf{e^2 = l^2 + \\left(\\frac{a}{2}\\right)^2 \\iff l^2 = e^2 - \\left(\\frac{a}{2}\\right)^2}$$</li>
        <li><b>Lateral Edge, Height, and Half-Diagonal:</b>
        With base diagonal $d = a\\sqrt{2}$, half-diagonal is $\\frac{a}{\\sqrt{2}}$:
        $$\\mathbf{e^2 = h^2 + \\left(\\frac{d}{2}\\right)^2 = h^2 + \\frac{a^2}{2}}$$</li>
      </ol>`,
    statement_ml: `<p><b>സമചതുര സ്തൂപികയുടെ പ്രധാന അളവുകൾ:</b></p>
      <ul>
        <li><b>പാദവക്ക് ($a$):</b> പാദമായ സമചതുരത്തിന്റെ വശത്തിന്റെ നീളം.</li>
        <li><b>ലംബ ഉയരം ($h$):</b> മുകളിലെ ശീർഷത്തിൽ നിന്ന് പാദത്തിന്റെ കേന്ദ്രത്തിലേക്കുള്ള ലംബദൂരം.</li>
        <li><b>ചരിവുയരം ($l$):</b> പാർശ്വ മുഖങ്ങളായ സമപാർശ്വ ത്രികോണങ്ങളുടെ ഉയരം.</li>
        <li><b>പാർശ്വധാര ($e$):</b> ശീർഷത്തിൽ നിന്ന് പാദത്തിന്റെ കോണുകളിലേക്ക് പോകുന്ന വര.</li>
      </ul>
      <p><b>രണ്ട് പ്രധാന മട്ടത്രികോണ ബന്ധങ്ങൾ:</b></p>
      <ol>
        <li><b>ഉയരവും ചരിവുയരവും പാദത്തിന്റെ പകുതിയും:</b>
        $$\\mathbf{l^2 = h^2 + \\left(\\frac{a}{2}\\right)^2}$$</li>
        <li><b>പാർശ്വധാരയും ചരിവുയരവും പാദത്തിന്റെ പകുതിയും:</b>
        $$\\mathbf{e^2 = l^2 + \\left(\\frac{a}{2}\\right)^2}$$</li>
        <li><b>പാർശ്വധാരയും ഉയരവും വികർണ്ണത്തിന്റെ പകുതിയും:</b>
        പാദ വികർണ്ണം $d = a\\sqrt{2}$ ആയാൽ:
        $$\\mathbf{e^2 = h^2 + \\frac{a^2}{2}}$$</li>
      </ol>`,
    intuition_en: 'A square pyramid contains two perpendicular vertical slicing planes: one cutting through the face midpoints (giving the h, a/2, l triangle) and one cutting through opposite corners (giving the h, d/2, e triangle).',
    intuition_ml: 'സ്തൂപികയെ വശങ്ങളുടെ മധ്യത്തിലൂടെ ലംബമായി മുറിച്ചാൽ h, a/2, l എന്ന മട്ടത്രികോണവും, കോണുകളിലൂടെ വികർണ്ണമായി മുറിച്ചാൽ h, d/2, e എന്ന മട്ടത്രികോണവും ലഭിക്കുന്നു.',
    proof: {
      idea_en: 'Pythagorean decomposition of 3D interior planes.',
      idea_ml: 'ത്രിമാന രൂപത്തിനുള്ളിലെ ലംബ തലങ്ങളിൽ പൈതഗോറസ് പ്രയോഗിക്കുന്നു.',
      why_en: 'The vertical altitude drops perpendicularly to the center of symmetry of the square base.',
      why_ml: 'ലംബ ഉയരം സമചതുര പാദത്തിന്റെ കേന്ദ്രത്തിലേക്ക് കൃത്യം 90° യിലാണ് പതിക്കുന്നത്.',
      rungs: [
        {
          title_en: 'Altitude to Face Midpoint',
          title_ml: 'പാർശ്വമുഖ മധ്യത്തിലേക്കുള്ള ലംബം',
          detail_en: 'The segment from base center to face midpoint has length $a/2$. The apex, base center, and face midpoint form a right triangle with legs $h$ and $a/2$, and hypotenuse $l$, so $l^2 = h^2 + (a/2)^2$.',
          detail_ml: 'പാദകേന്ദ്രത്തിൽ നിന്ന് വശത്തിന്റെ മധ്യത്തിലേക്കുള്ള അകലം $a/2$ ആണ്. ഇത് ഉയരം $h$ മായി മട്ടകോണുണ്ടാക്കുന്നു, കർണ്ണം $l$ ആണ്: $l^2 = h^2 + (a/2)^2$.'
        },
        {
          title_en: 'Face Altitude Triangle',
          title_ml: 'പാർശ്വമുഖത്തിലെ മട്ടത്രികോണം',
          detail_en: 'In the isosceles triangular face of base $a$, altitude $l$ bisects the base into two segments of $a/2$. The right triangle with legs $l$ and $a/2$ has hypotenuse $e$, so $e^2 = l^2 + (a/2)^2$.',
          detail_ml: 'പാർശ്വ ത്രികോണത്തിൽ ചരിവുയരം $l$ പാദത്തെ $a/2$ വീതം പകുക്കുന്നു. കർണ്ണം $e$ ആയതിനാൽ $e^2 = l^2 + (a/2)^2$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Confusing vertical height h with slant height l in volume and area formulas.',
        fix_en: 'Volume uses vertical height h (V = 1/3 a²h); lateral area uses slant height l (LSA = 2al).'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'വ്യാപ്തത്തിലും പരപ്പളവിലും ലംബ ഉയരം h ഉം ചരിവുയരം l ഉം പരസ്പരം മാറിപ്പോകുന്നത്.',
        fix_ml: 'വ്യാപ്തത്തിന് ലംബ ഉയരവും (V = 1/3 a²h), പാർശ്വ പരപ്പളവിന് ചരിവുയരവും (LSA = 2al) ഉപയോഗിക്കണം.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'In a square pyramid, base edge a = 10 cm and height h = 12 cm. Find slant height l.',
        a: 'l² = h² + (a/2)² = 12² + 5² = 144 + 25 = 169 ⟹ l = 13 cm.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ഒരു സമചതുര സ്തൂപികയുടെ പാദവക്ക് a = 10 cm, ലംബ ഉയരം h = 12 cm ആയാൽ ചരിവുയരം l എത്ര?',
        a: 'l² = 12² + 5² = 144 + 25 = 169 ⟹ l = 13 cm.'
      }
    ]
  },
  {
    id: 'm10.8.2.surface-area-and-volume-of-square-pyramid',
    sec: '10.8.2',
    kind: 'formula',
    tier: 'core',
    title_en: 'Surface Area & Volume of Square Pyramid',
    title_ml: 'സമചതുര സ്തൂപികയുടെ പരപ്പളവും വ്യാപ്തവും',
    oneLine_en: 'For a square pyramid: Base Area = a², Lateral Area = 2al, Total Area = a² + 2al, and Volume = (1/3) a²h.',
    oneLine_ml: 'സമചതുര സ്തൂപികയുടെ പാദപരപ്പളവ് = a², പാർശ്വപരപ്പളവ് = 2al, ആകെ പരപ്പളവ് = a² + 2al, വ്യാപ്തം = (1/3) a²h ആണ്.',
    statement_en: `<p><b>Square Pyramid Formulas:</b></p>
      <ul>
        <li><b>Base Area:</b>
        $$\\mathbf{\\text{Base Area} = a^2}$$</li>
        <li><b>Lateral Surface Area (LSA):</b> Area of 4 congruent triangles of base $a$ and height $l$:
        $$\\mathbf{\\text{LSA} = 4 \\times \\left(\\frac{1}{2}al\\right) = 2al}$$</li>
        <li><b>Total Surface Area (TSA):</b>
        $$\\mathbf{\\text{TSA} = \\text{Base Area} + \\text{LSA} = a^2 + 2al = a(a + 2l)}$$</li>
        <li><b>Volume ($V$):</b> Exactly one-third of the prism with the same base and height:
        $$\\mathbf{V = \\frac{1}{3}a^2h}$$</li>
      </ul>`,
    statement_ml: `<p><b>സമചതുര സ്തൂപികയുടെ സൂത്രവാക്യങ്ങൾ:</b></p>
      <ul>
        <li><b>പാദപരപ്പളവ്:</b>
        $$\\mathbf{\\text{പാദപരപ്പളവ്} = a^2}$$</li>
        <li><b>പാർശ്വ പ്രതല പരപ്പളവ്:</b> പാദം $a$, ഉയരം $l$ ആയ 4 ത്രികോണങ്ങളുടെ പരപ്പളവ്:
        $$\\mathbf{\\text{പാർശ്വ പരപ്പളവ്} = 4 \\times \\left(\\frac{1}{2}al\\right) = 2al}$$</li>
        <li><b>ആകെ ഉപരിതല പരപ്പളവ്:</b>
        $$\\mathbf{\\text{ആകെ പരപ്പളവ്} = a^2 + 2al = a(a + 2l)}$$</li>
        <li><b>വ്യാപ്തം ($V$):</b> അതേ പാദവും ഉയരവുമുള്ള സമചതുര സ്തംഭത്തിന്റെ വ്യാപ്തത്തിന്റെ മൂന്നിലൊന്ന്:
        $$\\mathbf{V = \\frac{1}{3}a^2h}$$</li>
      </ul>`,
    intuition_en: 'A cube can be partitioned into 6 identical pyramids meeting at the center, each having base a^2 and height a/2. This proves that a pyramid volume is exactly (1/3) * base * height.',
    intuition_ml: 'ഒരു സമചതുരക്കട്ടയെ അതിന്റെ കേന്ദ്രത്തിൽ ശീർഷം വരുന്ന തുല്യമായ 6 സ്തൂപികകളാക്കി മാറ്റാം. ഇതിലൂടെ സ്തൂപികയുടെ വ്യാപ്തം സ്തംഭത്തിന്റെ വ്യാപ്തത്തിന്റെ മൂന്നിലൊന്നാണെന്ന് (1/3 a²h) മനസ്സിലാക്കാം.',
    proof: {
      idea_en: 'Decomposition of a square prism into pyramids.',
      idea_ml: 'സമചതുര സ്തംഭത്തെ സ്തൂപികകളായി വിഭജിച്ചു വ്യാപ്തം തെളിയിക്കുന്നു.',
      why_en: 'Equal horizontal cross-sectional slices satisfy Cavalieri principle with ratio 1/3 upon integration.',
      why_ml: 'കാവാളിയേരി തത്വപ്രകാരം വിസ്തീർണ്ണം ഉയരത്തിന്റെ വർഗ്ഗാനുപാതത്തിൽ മാറുന്നതിനാൽ വ്യാപ്തത്തിൽ 1/3 എന്ന അനുപാതം വരുന്നു.',
      rungs: [
        {
          title_en: 'Lateral Face Sum',
          title_ml: 'പാർശ്വമുഖങ്ങളുടെ തുക',
          detail_en: 'Each of the four triangular faces has base $a$ and altitude $l$, giving area $\\frac{1}{2}al$. Multiplying by 4 gives $4 \\times \\frac{1}{2}al = 2al$.',
          detail_ml: '4 പാർശ്വ ത്രികോണങ്ങളുടെയും പരപ്പളവുകളുടെ തുക $= 4 \\times \\frac{1}{2}al = 2al$.'
        },
        {
          title_en: 'Volume Ratio',
          title_ml: 'വ്യാപ്ത അനുപാതം',
          detail_en: 'Integration of square slices of side $a(1 - z/h)$ from $z=0$ to $h$ yields $\\int_0^h a^2(1 - z/h)^2 dz = \\frac{1}{3}a^2h$.',
          detail_ml: 'ലംബ ഉയരത്തിനനുസരിച്ചുള്ള സങ്കലനം വഴി വ്യാപ്തം $\\frac{1}{3}a^2h$ എന്ന് ലഭിക്കുന്നു.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Multiplying by 4al instead of 2al for lateral surface area.',
        fix_en: 'Remember each face has area (1/2)al, so 4 * (1/2)al = 2al, NOT 4al.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'പാർശ്വ പരപ്പളവ് 2al ന് പകരം 4al എന്ന് തെറ്റായി ഗുണിക്കുന്നത്.',
        fix_ml: 'ഒരു മുഖത്തിന്റെ പരപ്പളവ് (1/2)al ആണ്, അതിനാൽ നാല് മുഖങ്ങൾക്ക് 4 x (1/2)al = 2al.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'A square pyramid has base edge 6 cm and height 4 cm. Find its volume.',
        a: 'V = (1/3) * a² * h = (1/3) * 36 * 4 = 12 * 4 = 48 cm³.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'പാദവക്ക് 6 cm ഉം ഉയരം 4 cm ഉം ആയ സമചതുര സ്തൂപികയുടെ വ്യാപ്തം കാണുക.',
        a: 'V = (1/3) * 6² * 4 = (1/3) * 36 * 4 = 48 cm³.'
      }
    ]
  },
  {
    id: 'm10.8.3.cone-area-and-volume',
    sec: '10.8.3',
    kind: 'formula',
    tier: 'core',
    title_en: 'Right Circular Cone: Area & Volume',
    title_ml: 'വൃത്തസ്തൂപിക (കോൺ) — പരപ്പളവും വ്യാപ്തവും',
    oneLine_en: 'In a cone with base radius r, height h, and slant height l = √(r² + h²): Curved Area = πrl, Total Area = πr(r + l), and Volume = (1/3) πr²h.',
    oneLine_ml: 'ആരം r, ഉയരം h, ചരിവുയരം l = √(r² + h²) ആയ കോണിൽ: വക്രതല പരപ്പളവ് = πrl, ആകെ പരപ്പളവ് = πr(r + l), വ്യാപ്തം = (1/3) πr²h ആണ്.',
    statement_en: `<p><b>Dimensions and Sector Unfolding of a Cone:</b></p>
      <ul>
        <li><b>Slant Height Relation:</b>
        $$\\mathbf{l = \\sqrt{r^2 + h^2} \\iff h = \\sqrt{l^2 - r^2}}$$</li>
        <li><b>Sector Unfolding:</b> The curved surface of a cone unfolds into a circular sector of radius $R = l$ and central angle $x^\\circ$:
        $$\\mathbf{\\frac{x}{360^\\circ} = \\frac{r}{l} \\implies x = \\frac{r}{l} \\times 360^\\circ}$$</li>
      </ul>
      <p><b>Cone Formulas:</b></p>
      <ul>
        <li><b>Curved Surface Area (CSA):</b>
        $$\\mathbf{\\text{CSA} = \\pi r l}$$</li>
        <li><b>Total Surface Area (TSA):</b>
        $$\\mathbf{\\text{TSA} = \\pi r^2 + \\pi r l = \\pi r(r + l)}$$</li>
        <li><b>Volume ($V$):</b>
        $$\\mathbf{V = \\frac{1}{3}\\pi r^2 h}$$</li>
      </ul>`,
    statement_ml: `<p><b>വൃത്തസ്തൂപികയുടെ അളവുകളും വൃത്താംശ രൂപീകരണവും:</b></p>
      <ul>
        <li><b>ചരിവുയര ബന്ധം:</b>
        $$\\mathbf{l = \\sqrt{r^2 + h^2}}$$</li>
        <li><b>വൃത്താംശം ചുരുട്ടി കോണുണ്ടാക്കൽ:</b> ആരം $R = l$ ഉം കേന്ദ്രകോൺ $x^\\circ$ ഉം ഉള്ള വൃത്താംശം ചുരുട്ടിയാണ് കോണുണ്ടാക്കുന്നത്:
        $$\\mathbf{\\frac{x}{360^\\circ} = \\frac{r}{l} \\implies x = \\frac{r}{l} \\times 360^\\circ}$$</li>
      </ul>
      <p><b>കോണിന്റെ പ്രധാന സൂത്രവാക്യങ്ങൾ:</b></p>
      <ul>
        <li><b>വക്രതല പരപ്പളവ്:</b>
        $$\\mathbf{\\text{വക്രതല പരപ്പളവ്} = \\pi r l}$$</li>
        <li><b>ആകെ ഉപരിതല പരപ്പളവ്:</b>
        $$\\mathbf{\\text{ആകെ പരപ്പളവ്} = \\pi r^2 + \\pi r l = \\pi r(r + l)}$$</li>
        <li><b>വ്യാപ്തം:</b>
        $$\\mathbf{V = \\frac{1}{3}\\pi r^2 h}$$</li>
      </ul>`,
    intuition_en: 'The curved surface of a cone of slant height l is just a rolled-up slice of a pie (sector) of radius l. The arc length 2*pi*r becomes the circumference of the cone base.',
    intuition_ml: 'കോണിന്റെ വക്രതലം നിവർത്തിയാൽ l ആരമുള്ള ഒരു വൃത്താംശമായി മാറും. വൃത്താംശത്തിന്റെ ചാപനീളമായ 2*pi*r ആണ് കോണിന്റെ പാദവൃത്തത്തിന്റെ ചുറ്റളവ്.',
    proof: {
      idea_en: 'Sector area ratio to circle area.',
      idea_ml: 'വൃത്താംശത്തിന്റെ പരപ്പളവ് വൃത്ത പരപ്പളവുമായി താരതമ്യം ചെയ്യുന്നു.',
      why_en: 'Arc length 2*pi*r is fraction (r/l) of full circumference 2*pi*l.',
      why_ml: 'ചാപനീളം 2*pi*r ആയതിനാൽ പൂർണ്ണ വൃത്തത്തിന്റെ r/l ഭാഗമാണ് വൃത്താംശത്തിന്റെ പരപ്പളവ്.',
      rungs: [
        {
          title_en: 'Circumference Mapping',
          title_ml: 'ചുറ്റളവ് തുല്യത',
          detail_en: 'Arc length of sector $= 2\\pi r$. The full perimeter of circle of radius $l$ is $2\\pi l$. The ratio is $\\frac{2\\pi r}{2\\pi l} = \\frac{r}{l}$.',
          detail_ml: 'വൃത്താംശത്തിന്റെ ചാപനീളം $= 2\\pi r$. $l$ ആരമുള്ള വൃത്തത്തിന്റെ ചുറ്റളവ് $= 2\\pi l$. അനുപാതം $= \\frac{r}{l}$.'
        },
        {
          title_en: 'Curved Surface Area',
          title_ml: 'വക്രതല പരപ്പളവ് രൂപീകരണം',
          detail_en: '$\\text{CSA} = \\frac{r}{l} \\times (\\pi l^2) = \\pi r l$.',
          detail_ml: 'വക്രതല പരപ്പളവ് $= \\frac{r}{l} \\times \\pi l^2 = \\pi r l$.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Using height h instead of slant height l in πrl.',
        fix_en: 'Always use slant height l = √(r² + h²) for curved surface area; use height h for volume.'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'വക്രതല പരപ്പളവിൽ l ന് പകരം ലംബ ഉയരം h നൽകുന്നത്.',
        fix_ml: 'പരപ്പളവിന് ചരിവുയരം l ഉം, വ്യാപ്തത്തിന് ലംബ ഉയരം h ഉം ഉപയോഗിക്കണം.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Find the curved surface area of a cone of radius 7 cm and slant height 10 cm (take pi = 22/7).',
        a: 'CSA = pi * r * l = (22/7) * 7 * 10 = 220 cm².'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ആരം 7 cm ഉം ചരിവുയരം 10 cm ഉം ആയ കോണിന്റെ വക്രതല പരപ്പളവ് കാണുക (pi = 22/7).',
        a: 'പരപ്പളവ് = pi * r * l = (22/7) * 7 * 10 = 220 cm².'
      }
    ]
  },
  {
    id: 'm10.8.4.sphere-and-hemisphere',
    sec: '10.8.4',
    kind: 'formula',
    tier: 'core',
    title_en: 'Sphere and Hemisphere: Area & Volume',
    title_ml: 'ഗോളവും അർദ്ധഗോളവും — പരപ്പളവും വ്യാപ്തവും',
    oneLine_en: 'For a sphere: Surface Area = 4πr², Volume = (4/3)πr³; for a solid hemisphere: Curved Area = 2πr², Total Area = 3πr², Volume = (2/3)πr³.',
    oneLine_ml: 'ഗോളത്തിന്റെ ഉപരിതല പരപ്പളവ് = 4πr², വ്യാപ്തം = (4/3)πr³; അർദ്ധഗോളത്തിന്റെ വക്രതല പരപ്പളവ് = 2πr², ആകെ പരപ്പളവ് = 3πr², വ്യാപ്തം = (2/3)πr³ ആണ്.',
    statement_en: `<p><b>Formulas for Sphere:</b></p>
      <ul>
        <li><b>Surface Area of Sphere:</b> Exactly equal to the curved surface of a circumscribing cylinder of radius $r$ and height $2r$:
        $$\\mathbf{A = 4\\pi r^2}$$</li>
        <li><b>Volume of Sphere:</b>
        $$\\mathbf{V = \\frac{4}{3}\\pi r^3}$$</li>
      </ul>
      <p><b>Formulas for Solid Hemisphere:</b></p>
      <ul>
        <li><b>Curved Surface Area (CSA):</b>
        $$\\mathbf{\\text{CSA} = 2\\pi r^2}$$</li>
        <li><b>Total Surface Area (TSA):</b> Curved surface plus circular flat base:
        $$\\mathbf{\\text{TSA} = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2}$$</li>
        <li><b>Volume ($V$):</b>
        $$\\mathbf{V = \\frac{2}{3}\\pi r^3}$$</li>
      </ul>`,
    statement_ml: `<p><b>ഗോളത്തിന്റെ സൂത്രവാക്യങ്ങൾ:</b></p>
      <ul>
        <li><b>ഉപരിതല പരപ്പളവ്:</b> ഗോളത്തിന്റെ ആരമുള്ള 4 വൃത്തങ്ങളുടെ പരപ്പളവിന് തുല്യം:
        $$\\mathbf{A = 4\\pi r^2}$$</li>
        <li><b>വ്യാപ്തം:</b>
        $$\\mathbf{V = \\frac{4}{3}\\pi r^3}$$</li>
      </ul>
      <p><b>അർദ്ധഗോളത്തിന്റെ സൂത്രവാക്യങ്ങൾ:</b></p>
      <ul>
        <li><b>വക്രതല പരപ്പളവ്:</b>
        $$\\mathbf{\\text{വക്രതല പരപ്പളവ്} = 2\\pi r^2}$$</li>
        <li><b>ആകെ ഉപരിതല പരപ്പളവ്:</b> വക്രതലവും പരന്ന അടിത്തറയായ വൃത്തവും ചേർന്നത്:
        $$\\mathbf{\\text{ആകെ പരപ്പളവ്} = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2}$$</li>
        <li><b>വ്യാപ്തം:</b>
        $$\\mathbf{V = \\frac{2}{3}\\pi r^3}$$</li>
      </ul>`,
    intuition_en: 'Archimedes proved that a sphere inscribed inside a cylinder has 2/3 of the surface area and 2/3 of the volume of the cylinder: V_sphere = (2/3) * (pi r² * 2r) = (4/3) pi r³.',
    intuition_ml: 'സിലിണ്ടറിനുള്ളിൽ അടങ്ങിയിരിക്കുന്ന ഗോളത്തിന്റെ വ്യാപ്തവും പരപ്പളവും ആ സിലിണ്ടറിന്റെ മൂന്നിൽ രണ്ട് ഭാഗമായിരിക്കും എന്ന് ആർക്കിമിഡീസ് തെളിയിച്ചു.',
    proof: {
      idea_en: 'Archimedean projection onto circumscribed cylinder.',
      idea_ml: 'ഗോളത്തെ ഉൾക്കൊള്ളുന്ന സിലിണ്ടറുമായുള്ള താരതമ്യം വഴി തെളിയിക്കുന്നു.',
      why_en: 'Horizontal slices of sphere have surface area identical to cylindrical projection strips.',
      why_ml: 'ഗോളത്തിന്റെ ഓരോ കഷ്ണത്തിന്റെയും ഉപരിതല വിസ്തീർണ്ണം സിലിണ്ടറിലെ അനുരൂപ ഭാഗത്തിന് തുല്യമാണ്.',
      rungs: [
        {
          title_en: 'Cylinder Comparison',
          title_ml: 'സിലിണ്ടറുമായുള്ള താരതമ്യം',
          detail_en: 'Circumscribed cylinder has radius $r$ and height $2r$. Its curved area is $2\\pi r(2r) = 4\\pi r^2$.',
          detail_ml: 'സിലിണ്ടറിന്റെ വക്രതല പരപ്പളവ് $= 2\\pi r \\times 2r = 4\\pi r^2$.'
        },
        {
          title_en: 'Volume Integration',
          title_ml: 'വ്യാപ്ത സങ്കലനം',
          detail_en: 'Integrating cross-sections: $\\int_{-r}^r \\pi (r^2 - z^2) dz = \\pi [r^2 z - z^3/3]_{-r}^r = \\frac{4}{3}\\pi r^3$.',
          detail_ml: 'വൃത്താകൃതിയിലുള്ള കഷ്ണങ്ങളുടെ സങ്കലനം വഴി വ്യാപ്തം $\\frac{4}{3}\\pi r^3$ എന്ന് ലഭിക്കുന്നു.'
        }
      ]
    },
    traps_en: [
      {
        trap_en: 'Using 2πr² for the total surface area of a solid hemisphere instead of 3πr².',
        fix_en: 'For a SOLID hemisphere, remember to add the flat circular base: 2πr² + πr² = 3πr².'
      }
    ],
    traps_ml: [
      {
        trap_ml: 'അർദ്ധഗോളത്തിന്റെ ആകെ പരപ്പളവ് കാണുമ്പോൾ അടിത്തറ കൂട്ടാതെ 2πr² എന്ന് എഴുതുന്നത്.',
        fix_ml: 'ഖര അർദ്ധഗോളത്തിൽ വക്രതലമായ 2πr² നോടൊപ്പം പരന്ന പാദമായ πr² കൂടി കൂട്ടി 3πr² എന്ന് എടുക്കണം.'
      }
    ],
    cards_en: [
      {
        kind: 'apply',
        q: 'Find the ratio of the surface area of a sphere of radius r to that of a solid hemisphere of the same radius.',
        a: 'Ratio = (4 * pi * r²) / (3 * pi * r²) = 4 : 3.'
      }
    ],
    cards_ml: [
      {
        kind: 'apply',
        q: 'ആരം r ആയ ഗോളത്തിന്റെ പരപ്പളവും അതേ ആരമുള്ള അർദ്ധഗോളത്തിന്റെ ആകെ പരപ്പളവും തമ്മിലുള്ള അനുപാതം എത്ര?',
        a: 'അനുപാതം = 4πr² : 3πr² = 4 : 3.'
      }
    ]
  }
);
