/* ══════════════════════════════════════════════════════════════════════════
   Class 10 Mathematics — Chapter 8: Solids (ഘനരൂപങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala SSLC textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  /* ──────────────────────────────────────────────────────────────────────────
     10.8.1 Square Pyramid: Dimensions & Relations (സമചതുര സ്തൂപിക — അളവുകളും ബന്ധങ്ങളും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.8.1.square-pyramid-dimensions-and-relations',
    sec: '10.8.1',
    kind: 'concept',
    tier: 'core',
    title_en: 'Square Pyramid: Dimensions & Relations',
    title_ml: 'സമചതുര സ്തൂപിക — അളവുകളും ബന്ധങ്ങളും',
    oneLine_en: 'In a square pyramid of base edge a, vertical height h, slant height l, and lateral edge e, key right-triangle relations are l² = h² + (a/2)² and e² = l² + (a/2)².',
    oneLine_ml: 'പാദവക്ക് $a$, ലംബ ഉയരം $h$, ചരിവുയരം $l$, പാർശ്വധാര $e$ എന്നിവയുള്ള സമചതുര സ്തൂപികയിൽ $l^2 = h^2 + (a/2)^2$ ഉം $e^2 = l^2 + (a/2)^2$ ഉം ആണ്.',
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
      <p><b>പ്രധാന മട്ടത്രികോണ ബന്ധങ്ങൾ:</b></p>
      <ol>
        <li><b>ഉയരവും ചരിവുയരവും പാദത്തിന്റെ പകുതിയും:</b>
        $$\\mathbf{l^2 = h^2 + \\left(\\frac{a}{2}\\right)^2}$$</li>
        <li><b>പാർശ്വധാരയും ചരിവുയരവും പാദത്തിന്റെ പകുതിയും:</b>
        $$\\mathbf{e^2 = l^2 + \\left(\\frac{a}{2}\\right)^2}$$</li>
        <li><b>പാർശ്വധാരയും ഉയരവും വികർണ്ണത്തിന്റെ പകുതിയും:</b>
        പാദ വികർണ്ണം $d = a\\sqrt{2}$ ആയാൽ:
        $$\\mathbf{e^2 = h^2 + \\frac{a^2}{2}}$$</li>
      </ol>`,
    intuition_en: `<p>A square pyramid contains two perpendicular vertical cross-sections: one passing through face midpoints (giving the right triangle with legs $h, a/2$ and hypotenuse $l$) and one passing through opposite corners (giving the right triangle with legs $h, d/2$ and hypotenuse $e$).</p>`,
    intuition_ml: `<p>സ്തൂപികയെ വശങ്ങളുടെ മധ്യത്തിലൂടെ ലംബമായി മുറിച്ചാൽ $h, a/2, l$ എന്ന മട്ടത്രികോണവും, കോണുകളിലൂടെ വികർണ്ണമായി മുറിച്ചാൽ $h, d/2, e$ എന്ന മട്ടത്രികോണവും ലഭിക്കുന്നു.</p>`,
    proof: {
      idea_en: 'Pythagorean decomposition of 3D interior right-angled planes.',
      idea_ml: 'ത്രിമാന രൂപത്തിനുള്ളിലെ ലംബ തലങ്ങളിൽ പൈതഗോറസ് സിദ്ധാന്തം പ്രയോഗിക്കുന്നു.',
      why_en: 'The vertical altitude drops perpendicularly to the center of the square base.',
      why_ml: 'ലംബ ഉയരം സമചതുര പാദത്തിന്റെ കേന്ദ്രത്തിലേക്ക് കൃത്യം 90° യിലാണ് പതിക്കുന്നത്.',
      rungs_en: [
        { why_en: 'The segment from base center to face midpoint has length a/2.', m: '\\text{Base midpoint distance} = \\frac{a}{2}' },
        { why_en: 'Vertical altitude h is perpendicular to the base plane.', m: 'h \\perp \\text{base plane}' },
        { why_en: 'Apex, base center, and face midpoint form a right triangle with hypotenuse l.', m: 'l^2 = h^2 + \\left(\\frac{a}{2}\\right)^2' },
        { why_en: 'In lateral face, altitude l bisects base edge a, forming right triangle with hypotenuse e.', m: 'e^2 = l^2 + \\left(\\frac{a}{2}\\right)^2' }
      ],
      rungs_ml: [
        { why_ml: 'പാദകേന്ദ്രത്തിൽ നിന്ന് വശത്തിന്റെ മധ്യത്തിലേക്കുള്ള അകലം $a/2$ ആണ്.', m: '\\text{വശ മധ്യത്തിലേക്കുള്ള ദൂരം} = \\frac{a}{2}' },
        { why_ml: 'ലംബ ഉയരം $h$ പാദത്തിന് ലംബമാണ്.', m: 'h \\perp \\text{പാദതലം}' },
        { why_ml: 'ശീർഷം, കേന്ദ്രം, വശമധ്യം എന്നിവ കർണ്ണം $l$ ആയ മട്ടത്രികോണമുണ്ടാക്കുന്നു.', m: 'l^2 = h^2 + \\left(\\frac{a}{2}\\right)^2' },
        { why_ml: 'പാർശ്വ മുഖത്തിൽ ചരിവുയരം $l$ ലംബമായി വരയ്ക്കുമ്പോൾ കർണ്ണം $e$ ആയ മട്ടത്രികോണം ലഭിക്കുന്നു.', m: 'e^2 = l^2 + \\left(\\frac{a}{2}\\right)^2' }
      ]
    },
    traps_en: [
      'Confusing vertical height h with slant height l: volume uses h, whereas lateral face area uses l.',
      'Forgetting that half of the base edge (a/2) is used in the right triangle, NOT the full base edge a.'
    ],
    traps_ml: [
      'ലംബ ഉയരം $h$ ഉം ചരിവുയരം $l$ ഉം പരസ്പരം മാറിപ്പോകുന്നത്; വ്യാപ്തത്തിന് $h$-ഉം പരപ്പളവിന് $l$-ഉം ഉപയോഗിക്കണം.',
      'മട്ടത്രികോണത്തിൽ പാദവക്കിന്റെ പകുതിയായ $a/2$ ന് പകരം പൂർണ്ണ പാദവക്കായ $a$ എടുക്കുന്നത്.'
    ],
    cards_en: [
      { q: 'State the relationship between slant height l, vertical height h, and base edge a in a square pyramid.', a: '$\\mathbf{l^2 = h^2 + \\left(\\frac{a}{2}\\right)^2}$', kind: 'recall' },
      { q: 'In a square pyramid, base edge a = 10 cm and vertical height h = 12 cm. Find slant height l.', a: '$l = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = \\mathbf{13}$ cm.', kind: 'apply' },
      { q: 'If slant height l = 12 cm and base edge a = 10 cm, what is the lateral edge e?', a: '$e = \\sqrt{l^2 + (a/2)^2} = \\sqrt{12^2 + 5^2} = \\sqrt{169} = \\mathbf{13}$ cm.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'സമചതുര സ്തൂപികയിൽ ചരിവുയരം $l$, ലംബ ഉയരം $h$, പാദവക്ക് $a$ എന്നിവ തമ്മിലുള്ള ബന്ധം എഴുതുക.', a: '$\\mathbf{l^2 = h^2 + \\left(\\frac{a}{2}\\right)^2}$', kind: 'recall' },
      { q: 'പാദവക്ക് $a = 10$ cm ഉം ലംബ ഉയരം $h = 12$ cm ഉം ആയ സമചതുര സ്തൂപികയുടെ ചരിവുയരം $l$ എത്ര?', a: '$l = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = \\mathbf{13}$ cm.', kind: 'apply' },
      { q: 'ചരിവുയരം $l = 12$ cm ഉം പാദവക്ക് $a = 10$ cm ഉം ആയാൽ പാർശ്വധാര $e$ എത്ര?', a: '$e = \\sqrt{12^2 + 5^2} = \\sqrt{169} = \\mathbf{13}$ cm.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.8.2 Surface Area & Volume of Square Pyramid (പരപ്പളവും വ്യാപ്തവും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.8.2.surface-area-and-volume-of-square-pyramid',
    sec: '10.8.2',
    kind: 'formula',
    tier: 'core',
    title_en: 'Surface Area & Volume of Square Pyramid',
    title_ml: 'സമചതുര സ്തൂപികയുടെ പരപ്പളവും വ്യാപ്തവും',
    oneLine_en: 'For a square pyramid: Base Area = a², Lateral Area = 2al, Total Area = a² + 2al, and Volume = (1/3) a²h.',
    oneLine_ml: 'സമചതുര സ്തൂപികയുടെ പാദപരപ്പളവ് $= a^2$, പാർശ്വപരപ്പളവ് $= 2al$, ആകെ പരപ്പളവ് $= a^2 + 2al$, വ്യാപ്തം $= \\frac{1}{3}a^2h$ ആണ്.',
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
    intuition_en: `<p>A cube of side $a$ can be divided into 6 identical square pyramids meeting at its center, each with base $a^2$ and height $h = a/2$. Thus volume of each pyramid is $\\frac{a^3}{6} = \\frac{1}{3} a^2 (a/2) = \\frac{1}{3} a^2 h$.</p>`,
    intuition_ml: `<p>ഒരു സമചതുരക്കട്ടയെ അതിന്റെ കേന്ദ്രത്തിൽ ശീർഷം വരുന്ന തുല്യമായ 6 സ്തൂപികകളാക്കി മാറ്റാം. ഇതിലൂടെ സ്തൂപികയുടെ വ്യാപ്തം സ്തംഭത്തിന്റെ വ്യാപ്തത്തിന്റെ മൂന്നിലൊന്നാണെന്ന് ($\\frac{1}{3}a^2h$) മനസ്സിലാക്കാം.</p>`,
    proof: {
      idea_en: 'Decomposition of a square prism into pyramids and lateral face summation.',
      idea_ml: 'സമചതുര സ്തംഭത്തെ സ്തൂപികകളായി വിഭജിച്ചും പാർശ്വമുഖങ്ങൾ കൂട്ടിയും തെളിയിക്കുന്നു.',
      why_en: 'Lateral faces are 4 identical triangles, and volume is 1/3 of the corresponding prism.',
      why_ml: '4 പാർശ്വമുഖങ്ങളും തുല്യ ത്രികോണങ്ങളാണ്, വ്യാപ്തം സ്തംഭ വ്യാപ്തത്തിന്റെ മൂന്നിലൊന്നാണ്.',
      rungs_en: [
        { why_en: 'Area of one triangular lateral face is 1/2 * base * slant height.', m: '\\text{Face Area} = \\frac{1}{2}al' },
        { why_en: 'Multiply by 4 congruent lateral faces.', m: '\\text{LSA} = 4 \\times \\frac{1}{2}al = 2al' },
        { why_en: 'Total surface area is base area plus lateral surface area.', m: '\\text{TSA} = a^2 + 2al = a(a + 2l)' },
        { why_en: 'Pyramid volume is 1/3 base area times vertical height.', m: 'V = \\frac{1}{3}a^2h' }
      ],
      rungs_ml: [
        { why_ml: 'ഒരു പാർശ്വ ത്രികോണത്തിന്റെ പരപ്പളവ് $\\frac{1}{2} \\times \\text{പാദം} \\times \\text{ചരിവുയരം}$.', m: '\\text{ഒരു മുഖത്തിന്റെ പരപ്പളവ്} = \\frac{1}{2}al' },
        { why_ml: '4 പാർശ്വമുഖങ്ങളുടെ പരപ്പളവ് കാണാൻ 4 കൊണ്ട് ഗുണിക്കുന്നു.', m: '\\text{പാർശ്വ പരപ്പളവ്} = 4 \\times \\frac{1}{2}al = 2al' },
        { why_ml: 'ആകെ പരപ്പളവ് പാദപരപ്പളവും പാർശ്വപരപ്പളവും ചേർന്നതാണ്.', m: '\\text{ആകെ പരപ്പളവ്} = a^2 + 2al = a(a + 2l)' },
        { why_ml: 'സ്തൂപികയുടെ വ്യാപ്തം പാദപരപ്പളവും ലംബ ഉയരവും ഗുണിച്ചതിന്റെ മൂന്നിലൊന്നാണ്.', m: 'V = \\frac{1}{3}a^2h' }
      ]
    },
    needs: ['m10.8.1.square-pyramid-dimensions-and-relations'],
    traps_en: [
      'Writing 4al instead of 2al for lateral surface area: 4 * (1/2 al) = 2al.',
      'Using slant height l instead of vertical height h when calculating volume: V = (1/3) a² h, NOT (1/3) a² l.'
    ],
    traps_ml: [
      'പാർശ്വ പരപ്പളവ് കാണുമ്പോൾ $2al$ ന് പകരം $4al$ എന്ന് എഴുതുന്നത് ($4 \\times \\frac{1}{2}al = 2al$).',
      'വ്യാപ്തം കാണുമ്പോൾ ലംബ ഉയരം $h$-ന് പകരം ചരിവുയരം $l$ ഉപയോഗിക്കുന്നത്; $V = \\frac{1}{3}a^2h$ ആണ്.'
    ],
    cards_en: [
      { q: 'State the formulas for Lateral Surface Area and Volume of a square pyramid.', a: '$\\mathbf{\\text{LSA} = 2al}$ and $\\mathbf{V = \\frac{1}{3}a^2h}$.', kind: 'recall' },
      { q: 'A square pyramid has base edge 6 cm and vertical height 4 cm. Find its volume.', a: '$V = \\frac{1}{3} \\times 6^2 \\times 4 = \\frac{1}{3} \\times 36 \\times 4 = \\mathbf{48\\text{ cm}^3}$.', kind: 'apply' },
      { q: 'A square pyramid has base edge 8 cm and slant height 5 cm. What is its total surface area?', a: '$\\text{TSA} = a^2 + 2al = 8^2 + 2(8)(5) = 64 + 80 = \\mathbf{144\\text{ cm}^2}$.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'സമചതുര സ്തൂപികയുടെ പാർശ്വ പരപ്പളവും വ്യാപ്തവും കാണാനുള്ള സൂത്രവാക്യങ്ങൾ എഴുതുക.', a: '$\\mathbf{\\text{പാർശ്വ പരപ്പളവ്} = 2al}$, $\\mathbf{V = \\frac{1}{3}a^2h}$.', kind: 'recall' },
      { q: 'പാദവക്ക് 6 cm ഉം ലംബ ഉയരം 4 cm ഉം ആയ സമചതുര സ്തൂപികയുടെ വ്യാപ്തം എത്ര?', a: '$V = \\frac{1}{3} \\times 6^2 \\times 4 = \\frac{1}{3} \\times 36 \\times 4 = \\mathbf{48\\text{ cm}^3}$.', kind: 'apply' },
      { q: 'പാദവക്ക് 8 cm ഉം ചരിവുയരം 5 cm ഉം ആയ സമചതുര സ്തൂപികയുടെ ആകെ പരപ്പളവ് എത്ര?', a: '$\\text{ആകെ പരപ്പളവ്} = 8^2 + 2(8)(5) = 64 + 80 = \\mathbf{144\\text{ cm}^2}$.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.8.3 Right Circular Cone: Area & Volume (വൃത്തസ്തൂപിക — പരപ്പളവും വ്യാപ്തവും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.8.3.cone-area-and-volume',
    sec: '10.8.3',
    kind: 'formula',
    tier: 'core',
    title_en: 'Right Circular Cone: Area & Volume',
    title_ml: 'വൃത്തസ്തൂപിക (കോൺ) — പരപ്പളവും വ്യാപ്തവും',
    oneLine_en: 'In a cone with base radius r, height h, and slant height l = √(r² + h²): Curved Area = πrl, Total Area = πr(r + l), and Volume = (1/3) πr²h.',
    oneLine_ml: 'ആരം $r$, ഉയരം $h$, ചരിവുയരം $l = \\sqrt{r^2 + h^2}$ ആയ കോണിൽ: വക്രതല പരപ്പളവ് $= \\pi rl$, ആകെ പരപ്പളവ് $= \\pi r(r + l)$, വ്യാപ്തം $= \\frac{1}{3}\\pi r^2h$ ആണ്.',
    statement_en: `<p><b>Dimensions and Sector Unfolding of a Cone:</b></p>
      <ul>
        <li><b>Slant Height Relation:</b>
        $$\\mathbf{l = \\sqrt{r^2 + h^2} \\iff h = \\sqrt{l^2 - r^2}}$$</li>
        <li><b>Sector Unfolding:</b> The curved surface of a cone unfolds into a circular sector of radius $R = l$ and central angle $x^\\circ$:
        $$\\mathbf{\\frac{x}{360^\\circ} = \\frac{r}{l} \\implies x = \\frac{r}{l} \\times 360^\\circ, \\quad r = l \\times \\frac{x}{360^\\circ}}$$</li>
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
        $$\\mathbf{l = \\sqrt{r^2 + h^2} \\iff h = \\sqrt{l^2 - r^2}}$$</li>
        <li><b>വൃത്താംശം ചുരുട്ടി കോണുണ്ടാക്കൽ:</b> ആരം $R = l$ ഉം കേന്ദ്രകോൺ $x^\\circ$ ഉം ഉള്ള വൃത്താംശം ചുരുട്ടിയാണ് കോണുണ്ടാക്കുന്നത്:
        $$\\mathbf{\\frac{x}{360^\\circ} = \\frac{r}{l} \\implies x = \\frac{r}{l} \\times 360^\\circ, \\quad r = l \\times \\frac{x}{360^\\circ}}$$</li>
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
    intuition_en: `<p>The curved surface of a cone of slant height $l$ is a rolled-up sector of radius $l$. The arc length $2\\pi r$ becomes the perimeter of the cone base.</p>`,
    intuition_ml: `<p>കോണിന്റെ വക്രതലം നിവർത്തിയാൽ $l$ ആരമുള്ള ഒരു വൃത്താംശമായി മാറും. വൃത്താംശത്തിന്റെ ചാപനീളമായ $2\\pi r$ ആണ് കോണിന്റെ പാദവൃത്തത്തിന്റെ ചുറ്റളവ്.</p>`,
    proof: {
      idea_en: 'Proportional relationship between sector area and full circle area.',
      idea_ml: 'വൃത്താംശത്തിന്റെ പരപ്പളവ് പൂർണ്ണ വൃത്ത പരപ്പളവുമായി താരതമ്യം ചെയ്യുന്നു.',
      why_en: 'Arc length 2*pi*r is a fraction (r/l) of the full circle perimeter 2*pi*l.',
      why_ml: 'ചാപനീളം $2\\pi r$ ആയതിനാൽ പൂർണ്ണ വൃത്തത്തിന്റെ $r/l$ ഭാഗമാണ് വൃത്താംശത്തിന്റെ പരപ്പളവ്.',
      rungs_en: [
        { why_en: 'Sector arc length equals cone base circumference.', m: 's = 2\\pi r' },
        { why_en: 'Full circle perimeter of radius l is 2*pi*l, so fraction is r/l.', m: '\\frac{\\text{Arc}}{\\text{Circumference}} = \\frac{2\\pi r}{2\\pi l} = \\frac{r}{l}' },
        { why_en: 'Multiply sector fraction by full circle area pi*l^2.', m: '\\text{CSA} = \\frac{r}{l} \\times (\\pi l^2) = \\pi r l' },
        { why_en: 'Volume is 1/3 of the circumscribing cylinder with base area pi*r^2 and height h.', m: 'V = \\frac{1}{3}\\pi r^2 h' }
      ],
      rungs_ml: [
        { why_ml: 'വൃത്താംശത്തിന്റെ ചാപനീളം കോണിന്റെ പാദ ചുറ്റളവിന് തുല്യമാണ്.', m: 's = 2\\pi r' },
        { why_ml: '$l$ ആരമുള്ള വൃത്തത്തിന്റെ ചുറ്റളവ് $2\\pi l$ ആയതിനാൽ ഭാഗം $r/l$ ആണ്.', m: '\\frac{\\text{ചാപനീളം}}{\\text{ചുറ്റളവ്}} = \\frac{2\\pi r}{2\\pi l} = \\frac{r}{l}' },
        { why_ml: 'പൂർണ്ണ വൃത്തത്തിന്റെ പരപ്പളവായ $\\pi l^2$ നെ $r/l$ കൊണ്ട് ഗുണിക്കുന്നു.', m: '\\text{വക്രതല പരപ്പളവ്} = \\frac{r}{l} \\times \\pi l^2 = \\pi r l' },
        { why_ml: 'വ്യാപ്തം സിലിണ്ടർ വ്യാപ്തത്തിന്റെ മൂന്നിലൊന്നാണ്.', m: 'V = \\frac{1}{3}\\pi r^2 h' }
      ]
    },
    traps_en: [
      'Using vertical height h instead of slant height l when calculating curved surface area: CSA = πrl, NOT πrh.',
      'Confusing the sector radius R with the cone base radius r: the sector radius R equals the cone SLANT height l.'
    ],
    traps_ml: [
      'വക്രതല പരപ്പളവിൽ ചരിവുയരം $l$-ന് പകരം ലംബ ഉയരം $h$ നൽകുന്നത്; വക്രതല പരപ്പളവ് $\\pi rl$ ആണ്.',
      'വൃത്താംശത്തിന്റെ ആരം $R$ ഉം കോണിന്റെ പാദ ആരം $r$ ഉം തമ്മിൽ മാറിപ്പോകുന്നത്; വൃത്താംശത്തിന്റെ ആരം $R$ കോണിന്റെ ചരിവുയരമായ $l$ ആണ്.'
    ],
    cards_en: [
      { q: 'State the curved surface area and volume formulas for a right circular cone.', a: '$\\mathbf{\\text{CSA} = \\pi r l}$ and $\\mathbf{V = \\frac{1}{3}\\pi r^2 h}$.', kind: 'recall' },
      { q: 'A cone has base radius 7 cm and slant height 10 cm. Find its curved surface area (use π = 22/7).', a: '$\\text{CSA} = \\frac{22}{7} \\times 7 \\times 10 = \\mathbf{220\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'A sector of radius 12 cm and central angle 120° is rolled into a cone. What is the base radius r of the cone?', a: '$r = l \\times \\frac{x}{360^\\circ} = 12 \\times \\frac{120}{360} = 12 \\times \\frac{1}{3} = \\mathbf{4\\text{ cm}}$.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'വൃത്തസ്തൂപികയുടെ വക്രതല പരപ്പളവും വ്യാപ്തവും കാണാനുള്ള സൂത്രവാക്യങ്ങൾ എഴുതുക.', a: '$\\mathbf{\\text{വക്രതല പരപ്പളവ്} = \\pi rl}$, $\\mathbf{V = \\frac{1}{3}\\pi r^2 h}$.', kind: 'recall' },
      { q: 'ആരം 7 cm ഉം ചരിവുയരം 10 cm ഉം ആയ കോണിന്റെ വക്രതല പരപ്പളവ് കാണുക ($\\pi = 22/7$).', a: '$\\text{പരപ്പളവ്} = \\frac{22}{7} \\times 7 \\times 10 = \\mathbf{220\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'ആരം 12 cm ഉം കേന്ദ്രകോൺ $120^\\circ$ ഉം ഉള്ള വൃത്താംശം ചുരുട്ടി കോണുണ്ടാക്കിയാൽ പാദ ആരം $r$ എത്ര?', a: '$r = 12 \\times \\frac{120}{360} = 12 \\times \\frac{1}{3} = \\mathbf{4\\text{ cm}}$.', kind: 'trap' }
    ]
  },

  /* ──────────────────────────────────────────────────────────────────────────
     10.8.4 Sphere and Hemisphere: Area & Volume (ഗോളവും അർദ്ധഗോളവും)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'm10.8.4.sphere-and-hemisphere',
    sec: '10.8.4',
    kind: 'formula',
    tier: 'core',
    title_en: 'Sphere and Hemisphere: Area & Volume',
    title_ml: 'ഗോളവും അർദ്ധഗോളവും — പരപ്പളവും വ്യാപ്തവും',
    oneLine_en: 'For a sphere: Surface Area = 4πr², Volume = (4/3)πr³; for a solid hemisphere: Curved Area = 2πr², Total Area = 3πr², Volume = (2/3)πr³.',
    oneLine_ml: 'ഗോളത്തിന്റെ ഉപരിതല പരപ്പളവ് $= 4\\pi r^2$, വ്യാപ്തം $= \\frac{4}{3}\\pi r^3$; ഖര അർദ്ധഗോളത്തിന്റെ വക്രതല പരപ്പളവ് $= 2\\pi r^2$, ആകെ പരപ്പളവ് $= 3\\pi r^2$, വ്യാപ്തം $= \\frac{2}{3}\\pi r^3$ ആണ്.',
    statement_en: `<p><b>Formulas for Sphere:</b></p>
      <ul>
        <li><b>Surface Area of Sphere:</b>
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
        <li><b>ഉപരിതല പരപ്പളവ്:</b>
        $$\\mathbf{A = 4\\pi r^2}$$</li>
        <li><b>വ്യാപ്തം:</b>
        $$\\mathbf{V = \\frac{4}{3}\\pi r^3}$$</li>
      </ul>
      <p><b>ഖര അർദ്ധഗോളത്തിന്റെ സൂത്രവാക്യങ്ങൾ:</b></p>
      <ul>
        <li><b>വക്രതല പരപ്പളവ്:</b>
        $$\\mathbf{\\text{വക്രതല പരപ്പളവ്} = 2\\pi r^2}$$</li>
        <li><b>ആകെ ഉപരിതല പരപ്പളവ്:</b> വക്രതലവും പരന്ന അടിത്തറയായ വൃത്തവും ചേർന്നത്:
        $$\\mathbf{\\text{ആകെ പരപ്പളവ്} = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2}$$</li>
        <li><b>വ്യാപ്തം:</b>
        $$\\mathbf{V = \\frac{2}{3}\\pi r^3}$$</li>
      </ul>`,
    intuition_en: `<p>Archimedes discovered that a sphere inscribed in a cylinder has exactly $\\frac{2}{3}$ of the cylinder's surface area and $\\frac{2}{3}$ of its volume: $V_{\\text{sphere}} = \\frac{2}{3}(\\pi r^2 \\times 2r) = \\frac{4}{3}\\pi r^3$.</p>`,
    intuition_ml: `<p>സിലിണ്ടറിനുള്ളിൽ അടങ്ങിയിരിക്കുന്ന ഗോളത്തിന്റെ വ്യാപ്തവും പരപ്പളവും ആ സിലിണ്ടറിന്റെ മൂന്നിൽ രണ്ട് ഭാഗമായിരിക്കും ($2/3$) എന്ന് ആർക്കിമിഡീസ് തെളിയിച്ചു.</p>`,
    proof: {
      idea_en: 'Archimedean cylindrical projection and cross-sectional circular integration.',
      idea_ml: 'ഗോളത്തെ ഉൾക്കൊള്ളുന്ന സിലിണ്ടറുമായുള്ള താരതമ്യം വഴി തെളിയിക്കുന്നു.',
      why_en: 'A sphere inscribed in a cylinder of height 2r shares projection surface area 4*pi*r^2.',
      why_ml: 'ഉയരം $2r$ ആയ സിലിണ്ടറിലെ പ്രൊജക്ഷൻ പരപ്പളവ് $4\\pi r^2$ ആണ്.',
      rungs_en: [
        { why_en: 'Circumscribing cylinder has radius r and height 2r.', m: 'h = 2r' },
        { why_en: 'Cylinder curved surface area equals sphere surface area.', m: 'A = 2\\pi r (2r) = 4\\pi r^2' },
        { why_en: 'Volume of sphere is 2/3 of the cylinder volume pi*r^2*(2r).', m: 'V = \\frac{2}{3}(\\pi r^2 \\times 2r) = \\frac{4}{3}\\pi r^3' },
        { why_en: 'Solid hemisphere has curved area 2*pi*r^2 plus flat circle base pi*r^2.', m: '\\text{TSA} = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2' }
      ],
      rungs_ml: [
        { why_ml: 'ഗോളത്തെ ഉൾക്കൊള്ളുന്ന സിലിണ്ടറിന്റെ ഉയരം $2r$ ആണ്.', m: 'h = 2r' },
        { why_ml: 'സിലിണ്ടറിന്റെ വക്രതല പരപ്പളവ് ഗോളത്തിന്റെ ഉപരിതല പരപ്പളവിന് തുല്യമാണ്.', m: 'A = 2\\pi r (2r) = 4\\pi r^2' },
        { why_ml: 'ഗോളത്തിന്റെ വ്യാപ്തം സിലിണ്ടർ വ്യാപ്തത്തിന്റെ മൂന്നിൽ രണ്ട് ഭാഗമാണ്.', m: 'V = \\frac{2}{3}(\\pi r^2 \\times 2r) = \\frac{4}{3}\\pi r^3' },
        { why_ml: 'ഖര അർദ്ധഗോളത്തിൽ വക്രതലവും പരന്ന പാദവും ചേരുമ്പോൾ $3\\pi r^2$ ആകുന്നു.', m: '\\text{ആകെ പരപ്പളവ്} = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2' }
      ]
    },
    traps_en: [
      'Using 2πr² for the total surface area of a solid hemisphere instead of 3πr²: remember to include the flat base πr².',
      'Confusing sphere radius r with diameter 2r in volume calculation: (4/3)πr³ uses radius, not diameter.'
    ],
    traps_ml: [
      'ഖര അർദ്ധഗോളത്തിന്റെ ആകെ പരപ്പളവ് കാണുമ്പോൾ അടിത്തറ കൂട്ടാതെ $2\\pi r^2$ എന്ന് എഴുതുന്നത്; പാദം കൂട്ടി $3\\pi r^2$ എടുക്കണം.',
      'വ്യാപ്തം കാണുമ്പോൾ വ്യാസത്തെ ആരം എന്ന് തെറ്റിദ്ധരിക്കുന്നത്; വ്യാസത്തിന്റെ പകുതിയായ ആരം $r$ ആണ് ഉപയോഗിക്കേണ്ടത്.'
    ],
    cards_en: [
      { q: 'State the Surface Area and Volume formulas for a sphere of radius r.', a: '$\\mathbf{A = 4\\pi r^2}$ and $\\mathbf{V = \\frac{4}{3}\\pi r^3}$.', kind: 'recall' },
      { q: 'What is the total surface area of a solid hemisphere of radius 7 cm (use π = 22/7)?', a: '$\\text{TSA} = 3\\pi r^2 = 3 \\times \\frac{22}{7} \\times 49 = 3 \\times 22 \\times 7 = \\mathbf{462\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'Find the ratio of the surface area of a sphere to the total surface area of a solid hemisphere of the same radius.', a: '$\\frac{4\\pi r^2}{3\\pi r^2} = \\mathbf{4 : 3}$.', kind: 'trap' }
    ],
    cards_ml: [
      { q: 'ആരം $r$ ആയ ഗോളത്തിന്റെ ഉപരിതല പരപ്പളവും വ്യാപ്തവും കാണാനുള്ള സൂത്രവാക്യങ്ങൾ എഴുതുക.', a: '$\\mathbf{A = 4\\pi r^2}$, $\\mathbf{V = \\frac{4}{3}\\pi r^3}$.', kind: 'recall' },
      { q: 'ആരം 7 cm ആയ ഖര അർദ്ധഗോളത്തിന്റെ ആകെ ഉപരിതല പരപ്പളവ് കാണുക ($\\pi = 22/7$).', a: '$\\text{ആകെ പരപ്പളവ്} = 3\\pi r^2 = 3 \\times \\frac{22}{7} \\times 49 = \\mathbf{462\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'ഒരേ ആരമുള്ള ഗോളത്തിന്റെ പരപ്പളവും ഖര അർദ്ധഗോളത്തിന്റെ ആകെ പരപ്പളവും തമ്മിലുള്ള അനുപാതം എത്ര?', a: '$\\frac{4\\pi r^2}{3\\pi r^2} = \\mathbf{4 : 3}$.', kind: 'trap' }
    ]
  }
);
