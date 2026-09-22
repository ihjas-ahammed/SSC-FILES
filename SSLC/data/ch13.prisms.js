/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 13: Prisms (സ്തംഭങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm8.13.1.prism-concept',
    sec: '8.13.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Concept, Structure and Types of Prisms',
    title_ml: 'സ്തംഭങ്ങളുടെ നിർവചനവും വർഗ്ഗീകരണവും',
    oneLine_en: 'A prism is a polyhedron with two congruent parallel polygonal bases joined by rectangular lateral faces.',
    oneLine_ml: 'പരസ്പരം സമാന്തരവും തുല്യവുമായ രണ്ട് ബഹുഭുജ പാദങ്ങളും ചതുരാകൃതിയിലുള്ള പാർശ്വമുഖങ്ങളുമുള്ള ഘനരൂപമാണ് സ്തംഭം.',
    statement_en: `<p>A <b>prism</b> (സ്തംഭം) is a three-dimensional solid figure bounded by:</p>
      <ul>
        <li>Two identical, congruent, and parallel polygonal faces at the ends, called the <b>bases</b> (പാദങ്ങൾ).</li>
        <li>Lateral faces connecting the corresponding sides of the bases, which in a right prism are all <b>rectangles</b> (ചതുരങ്ങൾ).</li>
      </ul>
      <p>Prisms are classified according to the polygon forming their bases:</p>
      <ul>
        <li><b>Triangular Prism (ത്രികോണസ്തംഭം):</b> Base is a triangle (3 lateral rectangular faces).</li>
        <li><b>Quadrangular Prism (ചതുരസ്തംഭം):</b> Base is a quadrilateral (e.g. cuboid or cube, 4 lateral faces).</li>
        <li><b>Pentagonal Prism (പഞ്ചഭുജസ്തംഭം):</b> Base is a pentagon (5 lateral faces).</li>
        <li><b>Hexagonal Prism (ഷഡ്ഭുജസ്തംഭം):</b> Base is a hexagon (6 lateral faces).</li>
      </ul>
      <p><b>Properties for a base with $n$ sides:</b></p>
      $$\\text{Number of faces } (F) = n + 2$$
      $$\\text{Number of vertices } (V) = 2n$$
      $$\\text{Number of edges } (E) = 3n$$
      <p>Euler’s formula holds: $F + V - E = (n + 2) + 2n - 3n = 2$.</p>`,
    statement_ml: `<p>താഴെ പറയുന്ന പ്രത്യേകതകളുള്ള ത്രിമാന ഘനരൂപമാണ് <b>സ്തംഭം</b>:</p>
      <ul>
        <li>പരസ്പരം സമാന്തരവും തുല്യവുമായ രണ്ട് ബഹുഭുജ മുഖങ്ങൾ ഇരുവശങ്ങളിലുമുണ്ടാകും. ഇവയെ <b>പാദങ്ങൾ</b> എന്ന് വിളിക്കുന്നു.</li>
        <li>പാദങ്ങളുടെ അനുരൂപ വശങ്ങളെ തമ്മിൽ ബന്ധിപ്പിക്കുന്ന മുഖങ്ങളെ <b>പാർശ്വമുഖങ്ങൾ</b> എന്ന് വിളിക്കുന്നു. നേർസ്തംഭങ്ങളിൽ ഇവയെല്ലാം <b>ചതുരങ്ങളായിരിക്കും</b>.</li>
      </ul>
      <p>പാദമായ ബഹുഭുജത്തിന്റെ പേരിനെ അടിസ്ഥാനമാക്കിയാണ് സ്തംഭങ്ങളെ തരംതിരിക്കുന്നത്:</p>
      <ul>
        <li><b>ത്രികോണസ്തംഭം:</b> പാദം ത്രികോണമാണ് (3 പാർശ്വമുഖങ്ങൾ).</li>
        <li><b>ചതുരസ്തംഭം:</b> പാദം ചതുർഭുജമാണ് (ഉദാഹരണത്തിന് സമചതുരക്കട്ട അഥവാ ചതുരക്കട്ട, 4 പാർശ്വമുഖങ്ങൾ).</li>
        <li><b>പഞ്ചഭുജസ്തംഭം:</b> പാദം പഞ്ചഭുജമാണ് (5 പാർശ്വമുഖങ്ങൾ).</li>
        <li><b>ഷഡ്ഭുജസ്തംഭം:</b> പാദം ഷഡ്ഭുജമാണ് (6 പാർശ്വമുഖങ്ങൾ).</li>
      </ul>
      <p><b>$n$ വശങ്ങളുള്ള പാദമുള്ള സ്തംഭത്തിന്റെ പ്രത്യേകതകൾ:</b></p>
      $$\\text{മുഖങ്ങളുടെ എണ്ണം } (F) = n + 2$$
      $$\\text{ശീർഷങ്ങളുടെ എണ്ണം } (V) = 2n$$
      $$\\text{വിളുമ്പുകളുടെ (അരികുകളുടെ) എണ്ണം } (E) = 3n$$
      <p>യൂളറുടെ സമവാക്യം: $F + V - E = (n + 2) + 2n - 3n = 2$.</p>`,
    intuition_en: `<p>A deck of playing cards stacked straight up creates a rectangular prism; a stack of identical triangular biscuits forms a triangular prism.</p>`,
    intuition_ml: `<p>ഒരുപോലെയുള്ള ത്രികോണ ബിസ്കറ്റുകൾ ഒന്നിനുമീതെ ഒന്നായി അടുക്കിവെച്ചാൽ ഒരു ത്രികോണസ്തംഭം ഉണ്ടാകുന്നു.</p>`,
    proof: {
      idea_en: 'Extruding an n-gon along a vector perpendicular to its plane sweeps n rectangular lateral faces between the top and bottom copies.',
      idea_ml: 'ഒരു n-ഭുജത്തെ ലംബദിശയിൽ ഉയർത്തുമ്പോൾ n പാർശ്വമുഖങ്ങളും മേൽത്തട്ടും അടിത്തട്ടുമായി n+2 മുഖങ്ങൾ ഉണ്ടാകുന്നു.',
      why_en: 'Each edge of the base sweeps one rectangle; each vertex sweeps one vertical edge.',
      why_ml: 'പാദത്തിലെ ഓരോ വശവും ഓരോ ചതുരമുഖവും, ഓരോ ശീർഷവും ഓരോ ലംബ അരികും ഉണ്ടാക്കുന്നു.',
      rungs_en: [
        { why_en: 'Base polygon has n sides.', m: '\\text{Base edges} = n' },
        { why_en: 'Top and bottom give 2 bases.', m: '\\text{Bases} = 2' },
        { why_en: 'Vertical edges join corresponding vertices.', m: '\\text{Lateral edges} = n' },
        { why_en: 'Total faces = 2 bases + n lateral faces.', m: 'F = n + 2, \\quad E = n + n + n = 3n, \\quad V = 2n' }
      ],
      rungs_ml: [
        { why_ml: 'പാദത്തിന് n വശങ്ങളുണ്ട്.', m: '\\text{പാദത്തിലെ വശങ്ങൾ} = n' },
        { why_ml: 'മുകളിലും താഴെയുമായി 2 പാദങ്ങൾ.', m: '\\text{പാദങ്ങൾ} = 2' },
        { why_ml: 'ലംബ അരികുകൾ ശീർഷങ്ങളെ ബന്ധിപ്പിക്കുന്നു.', m: '\\text{ലംബ അരികുകൾ} = n' },
        { why_ml: 'ആകെ മുഖങ്ങൾ = 2 പാദങ്ങൾ + n പാർശ്വമുഖങ്ങൾ.', m: 'F = n + 2, \\quad E = 3n, \\quad V = 2n' }
      ]
    },
    needs: ['m8.4.1.polygon-angle-sum', 'p.3.4'],
    traps_en: [
      'A cylinder is NOT a prism because its base is a circle (curved), not a polygon.',
      'Remember that lateral faces of a right prism are RECTANGLES, never triangles (that would be a pyramid).'
    ],
    traps_ml: [
      'വൃത്തസ്തംഭം (സിലിണ്ടർ) ഒരു സ്തംഭമല്ല, കാരണം അതിന്റെ പാദം ബഹുഭുജമല്ല, വൃത്തമാണ്.',
      'സ്തംഭത്തിന്റെ പാർശ്വമുഖങ്ങൾ ചതുരങ്ങളാണ്, ത്രികോണങ്ങളല്ല (ത്രികോണങ്ങൾ വരുന്നത് സ്തൂപികയിലാണ്).'
    ],
    cards_en: [
      { q: 'How many faces, vertices, and edges does a triangular prism have?', a: 'Faces $= 3 + 2 = \\mathbf{5}$, Vertices $= 2 \\times 3 = \\mathbf{6}$, Edges $= 3 \\times 3 = \\mathbf{9}$.', kind: 'recall' },
      { q: 'What shapes form the lateral faces of a right prism?', a: 'Rectangles.', kind: 'recall' },
      { q: 'A prism has 8 faces. What polygon is its base?', a: '$F = n + 2 = 8 \\implies n = 6$, so its base is a **hexagon**.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഒരു ത്രികോണസ്തംഭത്തിന് എത്ര മുഖങ്ങളും ശീർഷങ്ങളും അരികുകളുമുണ്ട്?', a: 'മുഖങ്ങൾ $= 3 + 2 = \\mathbf{5}$, ശീർഷങ്ങൾ $= 2 \\times 3 = \\mathbf{6}$, അരികുകൾ $= 3 \\times 3 = \\mathbf{9}$.', kind: 'recall' },
      { q: 'നേർസ്തംഭത്തിന്റെ പാർശ്വമുഖങ്ങളുടെ ആകൃതി എന്താണ്?', a: 'ചതുരങ്ങൾ.', kind: 'recall' },
      { q: 'ഒരു സ്തംഭത്തിന് 8 മുഖങ്ങളുണ്ടെങ്കിൽ അതിന്റെ പാദം ഏത് ബഹുഭുജമാണ്?', a: '$F = n + 2 = 8 \\implies n = 6$, അതിനാൽ പാദം **ഷഡ്ഭുജമാണ്**.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.13.2.lateral-surface-area',
    sec: '8.13.2',
    kind: 'formula',
    tier: 'core',
    title_en: 'Lateral Surface Area of a Prism',
    title_ml: 'സ്തംഭത്തിന്റെ പാർശ്വതല പരപ്പളവ്',
    oneLine_en: 'The lateral surface area of any right prism is the product of its base perimeter and height: LSA = Perimeter × Height.',
    oneLine_ml: 'ഏതൊരു നേർസ്തംഭത്തിന്റെയും പാർശ്വതല പരപ്പളവ് പാദത്തിന്റെ ചുറ്റളവിനെയും ഉയരത്തെയും തമ്മിൽ ഗുണിച്ചതിന് തുല്യമാണ്: പാർശ്വതല പരപ്പളവ് = പാദച്ചുറ്റളവ് × ഉയരം.',
    statement_en: `<p>The <b>lateral surface area</b> (പാർശ്വതല പരപ്പളവ്) of a prism is the sum of the areas of all its vertical rectangular faces, excluding the top and bottom bases.</p>
      <p>If we cut along one vertical edge and unfold the lateral faces flat onto a table, all the rectangles combine seamlessly into <b>one single large rectangle</b>:</p>
      <ul>
        <li>The length of this unfolded rectangle is the sum of the base edges $= \\text{Perimeter of base } (P)$.</li>
        <li>The width of this rectangle is the <b>height</b> of the prism ($h$).</li>
      </ul>
      <p>Therefore:</p>
      $$\\mathbf{\\text{Lateral Surface Area (LSA)} = \\text{Base Perimeter} \\times \\text{Height} = P \\times h}$$
      <p><i>Example:</i> A triangular prism has base edges $3\\text{ cm}, 4\\text{ cm}, 5\\text{ cm}$ and height $10\\text{ cm}$.</p>
      $$\\text{Base Perimeter } P = 3 + 4 + 5 = 12\\text{ cm}$$
      $$\\text{LSA} = 12 \\times 10 = \\mathbf{120\\text{ cm}^2}$$`,
    statement_ml: `<p>സ്തംഭത്തിന്റെ മുകളിലെയും താഴെയും ഉള്ള പാദങ്ങളൊഴികെ ബാക്കിയുള്ള എല്ലാ പാർശ്വമുഖങ്ങളുടെയും പരപ്പളവുകളുടെ ആകെ തുകയാണ് <b>പാർശ്വതല പരപ്പളവ്</b>.</p>
      <p>ഒരു കുത്തനെയുള്ള അരികിലൂടെ വെട്ടി പാർശ്വമുഖങ്ങൾ നിവർത്തി പരത്തിവെച്ചാൽ, അവയെല്ലാം ചേർന്ന് <b>ഒരു വലിയ ചതുരമായി</b> മാറും:</p>
      <ul>
        <li>ഈ വലിയ ചതുരത്തിന്റെ നീളം പാദത്തിന്റെ വശങ്ങളുടെ തുകയാണ്, അതായത് <b>പാദത്തിന്റെ ചുറ്റളവ്</b> ($P$).</li>
        <li>ഈ ചതുരത്തിന്റെ വീതി സ്തംഭത്തിന്റെ <b>ഉയരമാണ്</b> ($h$).</li>
      </ul>
      <p>അതിനാൽ:</p>
      $$\\mathbf{\\text{പാർശ്വതല പരപ്പളവ്} = \\text{പാദച്ചുറ്റളവ്} \\times \\text{ഉയരം} = P \\times h}$$
      <p><i>ഉദാഹരണം:</i> ഒരു ത്രികോണസ്തംഭത്തിന്റെ പാദവശങ്ങൾ $3\\text{ cm}, 4\\text{ cm}, 5\\text{ cm}$ എന്നിവയും ഉയരം $10\\text{ cm}$-ഉം ആണ്.</p>
      $$\\text{പാദച്ചുറ്റളവ് } P = 3 + 4 + 5 = 12\\text{ cm}$$
      $$\\text{പാർശ്വതല പരപ്പളവ്} = 12 \\times 10 = \\mathbf{120\\text{ cm}^2}$$`,
    intuition_en: `<p>Wrapping a label around a prism-shaped cardboard box: the label must be wide enough to wrap all the way around the base (perimeter) and tall enough to cover its height.</p>`,
    intuition_ml: `<p>ഒരു സ്തംഭത്തിന് ചുറ്റും ലേബൽ ഒട്ടിക്കുമ്പോൾ, ആ ലേബലിന്റെ നീളം പാദത്തിന് ചുറ്റും തികയണം (ചുറ്റളവ്), വീതി സ്തംഭത്തിന്റെ ഉയരത്തിന് തുല്യവുമായിരിക്കണം.</p>`,
    proof: {
      idea_en: 'Summing individual rectangular face areas gives (a + b + c + ...) * h = P * h.',
      idea_ml: 'ഓരോ ചതുരമുഖങ്ങളുടെയും പരപ്പളവുകൾ കൂട്ടുമ്പോൾ (a + b + c + ...) * h = P * h ലഭിക്കുന്നു.',
      why_en: 'The distributive law allows factoring out the common height h.',
      why_ml: 'വിതരണ നിയമപ്രകാരം പൊതുവായ ഉയരം h പുറത്തെടുക്കാം.',
      rungs_en: [
        { why_en: 'Let base edges be a_1, a_2, ..., a_n.', m: 'P = a_1 + a_2 + \\dots + a_n' },
        { why_en: 'Area of each lateral face is edge times height.', m: 'A_i = a_i \\times h' },
        { why_en: 'Total lateral area is sum of faces.', m: '\\text{LSA} = a_1 h + a_2 h + \\dots + a_n h' },
        { why_en: 'Factor out h by distributive property.', m: '\\text{LSA} = (a_1 + a_2 + \\dots + a_n)h = P \\times h' }
      ],
      rungs_ml: [
        { why_ml: 'പാദത്തിന്റെ വശങ്ങൾ a_1, a_2, ..., a_n എന്നിരിക്കട്ടെ.', m: 'P = a_1 + a_2 + \\dots + a_n' },
        { why_ml: 'ഓരോ പാർശ്വമുഖത്തിന്റെയും പരപ്പളവ് വശം ഗുണം ഉയരമാണ്.', m: 'A_i = a_i \\times h' },
        { why_ml: 'ആകെ പാർശ്വതല പരപ്പളവ് മുഖങ്ങളുടെ തുകയാണ്.', m: '\\text{LSA} = a_1 h + a_2 h + \\dots + a_n h' },
        { why_ml: 'h പൊതുവായി പുറത്തെടുക്കുന്നു.', m: '\\text{LSA} = (a_1 + a_2 + \\dots + a_n)h = P \\times h' }
      ]
    },
    needs: ['m8.13.1.prism-concept', 'p.2.3'],
    traps_en: [
      'Do NOT include the two base areas in lateral surface area.',
      'Ensure all lengths (perimeter and height) are in the same unit (cm or m) before multiplying.'
    ],
    traps_ml: [
      'പാർശ്വതല പരപ്പളവിൽ മേൽത്തട്ടിന്റെയും അടിത്തട്ടിന്റെയും പരപ്പളവ് ഉൾപ്പെടുത്തരുത്.',
      'ഗുണിക്കുന്നതിന് മുൻപ് ചുറ്റളവും ഉയരവും ഒരേ യൂണിറ്റിലാണെന്ന് (cm അല്ലെങ്കിൽ m) ഉറപ്പാക്കുക.'
    ],
    cards_en: [
      { q: 'What is the formula for the lateral surface area of any right prism?', a: '$\\text{LSA} = \\text{Base Perimeter} \\times \\text{Height} = \\mathbf{P \\times h}$.', kind: 'recall' },
      { q: 'A square prism has base side 4 cm and height 12 cm. What is its lateral surface area?', a: 'Base perimeter $P = 4 \\times 4 = 16\\text{ cm}$. $\\text{LSA} = 16 \\times 12 = \\mathbf{192\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'The lateral surface area of a prism of height 8 cm is 120 sq cm. What is its base perimeter?', a: '$P = \\frac{\\text{LSA}}{h} = \\frac{120}{8} = \\mathbf{15\\text{ cm}}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഒരു നേർസ്തംഭത്തിന്റെ പാർശ്വതല പരപ്പളവ് കാണാനുള്ള സൂത്രവാക്യം എന്താണ്?', a: 'പാർശ്വതല പരപ്പളവ് $= \\text{പാദച്ചുറ്റളവ്} \\times \\text{ഉയരം} = \\mathbf{P \\times h}$.', kind: 'recall' },
      { q: 'പാദവശം 4 cm-ഉം ഉയരം 12 cm-ഉം ആയ സമചതുരസ്തംഭത്തിന്റെ പാർശ്വതല പരപ്പളവ് എത്ര?', a: 'പാദച്ചുറ്റളവ് $P = 4 \\times 4 = 16\\text{ cm}$. പാർശ്വതല പരപ്പളവ് $= 16 \\times 12 = \\mathbf{192\\text{ cm}^2}$.', kind: 'apply' },
      { q: '8 cm ഉയരമുള്ള സ്തംഭത്തിന്റെ പാർശ്വതല പരപ്പളവ് 120 ച.സെ.മീ ആയാൽ പാദച്ചുറ്റളവ് എത്ര?', a: '$P = \\frac{120}{8} = \\mathbf{15\\text{ cm}}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.13.3.total-surface-area',
    sec: '8.13.3',
    kind: 'formula',
    tier: 'core',
    title_en: 'Total Surface Area of a Prism',
    title_ml: 'സ്തംഭത്തിന്റെ ഉപരിതല പരപ്പളവ്',
    oneLine_en: 'Total surface area is the sum of the lateral surface area and twice the base area: TSA = LSA + 2 * Base Area.',
    oneLine_ml: 'ഒരു സ്തംഭത്തിന്റെ ഉപരിതല പരപ്പളവ് അതിന്റെ പാർശ്വതല പരപ്പളവിനോട് ഇരുപാദങ്ങളുടെയും പരപ്പളവ് കൂട്ടിയതിന് തുല്യമാണ്: ഉപരിതല പരപ്പളവ് = പാർശ്വതല പരപ്പളവ് + 2 × പാദപരപ്പളവ്.',
    statement_en: `<p>The <b>total surface area (TSA)</b> (ഉപരിതല പരപ്പളവ്) of a prism is the sum of the areas of all its outer surfaces, comprising the lateral faces plus the top and bottom bases:</p>
      $$\\mathbf{\\text{Total Surface Area (TSA)} = \\text{Lateral Surface Area} + 2 \\times \\text{Base Area}}$$
      $$\\mathbf{\\text{TSA} = Ph + 2 A_b}$$
      <p>where $P$ is the base perimeter, $h$ is the prism height, and $A_b$ is the area of one base.</p>
      <p><b>Important Special Cases:</b></p>
      <ul>
        <li><b>Rectangular Prism (Cuboid) of dimensions $l, b, h$:</b>
          $$\\text{TSA} = 2(lb + bh + lh)$$</li>
        <li><b>Cube of side $a$:</b>
          $$\\text{LSA} = 4a^2, \\quad \\text{TSA} = 6a^2$$</li>
        <li><b>Equilateral Triangular Prism of base side $a$ and height $h$:</b>
          $$A_b = \\frac{\\sqrt{3}}{4} a^2, \\quad \\text{TSA} = 3ah + 2\\left(\\frac{\\sqrt{3}}{4}a^2\\right) = 3ah + \\frac{\\sqrt{3}}{2}a^2$$</li>
      </ul>`,
    statement_ml: `<p>സ്തംഭത്തിന്റെ എല്ലാ ബാഹ്യമുഖങ്ങളുടെയും പരപ്പളവുകളുടെ ആകെ തുകയാണ് <b>ഉപരിതല പരപ്പളവ്</b>. ഇതിൽ പാർശ്വമുഖങ്ങളും മുകളിലെയും താഴെയും ഉള്ള പാദങ്ങളും ഉൾപ്പെടുന്നു:</p>
      $$\\mathbf{\\text{ഉപരിതല പരപ്പളവ്} = \\text{പാർശ്വതല പരപ്പളവ്} + 2 \\times \\text{പാദപരപ്പളവ്}}$$
      $$\\mathbf{\\text{TSA} = Ph + 2 A_b}$$
      <p>ഇവിടെ $P$ പാദച്ചുറ്റളവും, $h$ സ്തംഭത്തിന്റെ ഉയരവും, $A_b$ ഒരു പാദത്തിന്റെ പരപ്പളവുമാണ്.</p>
      <p><b>പ്രത്യേക രൂപങ്ങൾ:</b></p>
      <ul>
        <li><b>ചതുരക്കട്ട (അളവുകൾ $l, b, h$):</b>
          $$\\text{ഉപരിതല പരപ്പളവ്} = 2(lb + bh + lh)$$</li>
        <li><b>സമചതുരക്കട്ട (വശം $a$):</b>
          $$\\text{പാർശ്വതല പരപ്പളവ്} = 4a^2, \\quad \\text{ഉപരിതല പരപ്പളവ്} = 6a^2$$</li>
        <li><b>പാദവശം $a$-യും ഉയരം $h$-ഉം ആയ സമഭുജ ത്രികോണസ്തംഭം:</b>
          $$A_b = \\frac{\\sqrt{3}}{4} a^2, \\quad \\text{TSA} = 3ah + \\frac{\\sqrt{3}}{2}a^2$$</li>
      </ul>`,
    intuition_en: `<p>Painting the entire wooden block: you must paint the sides (lateral area) plus the top and the bottom (two bases).</p>`,
    intuition_ml: `<p>ഒരു തടി കട്ട പൂർണ്ണമായും പെയിന്റ് ചെയ്യുമ്പോൾ, അതിന്റെ വശങ്ങളും (പാർശ്വതലം) മുകൾഭാഗവും അടിഭാഗവും (രണ്ട് പാദങ്ങൾ) പെയിന്റ് ചെയ്യേണ്ടിവരുന്നു.</p>`,
    proof: {
      idea_en: 'Decomposing the closed boundary of the prism into disjoint polygonal faces.',
      idea_ml: 'സ്തംഭത്തിന്റെ ബാഹ്യമുഖങ്ങളെ പാർശ്വമുഖങ്ങളായും രണ്ട് പാദങ്ങളായും വേർതിരിച്ച് തുക കാണുന്നു.',
      why_en: 'Every point on the boundary belongs to exactly one lateral face or one of the two bases.',
      why_ml: 'സ്തംഭത്തിന്റെ ഉപരിതലത്തിൽ പാർശ്വമുഖങ്ങളും രണ്ട് പാദങ്ങളും മാത്രമേ ഉള്ളൂ.',
      rungs_en: [
        { why_en: 'Surface consists of lateral faces and two bases.', m: '\\text{Faces} = \\{F_{\\text{lat}}\\} \\cup \\{B_{\\text{top}}, B_{\\text{bottom}}\\}' },
        { why_en: 'Sum of lateral faces equals LSA.', m: '\\sum \\text{Area}(F_{\\text{lat}}) = Ph' },
        { why_en: 'Top and bottom bases are congruent with equal area.', m: '\\text{Area}(B_{\\text{top}}) = \\text{Area}(B_{\\text{bottom}}) = A_b' },
        { why_en: 'Total area is the sum.', m: '\\text{TSA} = Ph + 2 A_b' }
      ],
      rungs_ml: [
        { why_ml: 'ഉപരിതലത്തിൽ പാർശ്വമുഖങ്ങളും രണ്ട് പാദങ്ങളും അടങ്ങിയിരിക്കുന്നു.', m: '\\text{Faces} = \\{F_{\\text{lat}}\\} \\cup \\{B_{\\text{top}}, B_{\\text{bottom}}\\}' },
        { why_ml: 'പാർശ്വമുഖങ്ങളുടെ തുക $\text{LSA}$ ആണ്.', m: '\\sum \\text{Area}(F_{\\text{lat}}) = Ph' },
        { why_ml: 'മുകളിലെയും താഴെയും ഉള്ള പാദങ്ങൾ തുല്യമാണ്.', m: '\\text{Area}(B_{\\text{top}}) = \\text{Area}(B_{\\text{bottom}}) = A_b' },
        { why_ml: 'ആകെ ഉപരിതല പരപ്പളവ് തുകയായി ലഭിക്കുന്നു.', m: '\\text{TSA} = Ph + 2 A_b' }
      ]
    },
    needs: ['m8.13.2.lateral-surface-area'],
    traps_en: [
      'Multiply base area by TWO because there are two bases (top and bottom).',
      'For a right-angled triangular base with legs a and b, Base Area = (1/2)*a*b, so 2 * Base Area = a*b.'
    ],
    traps_ml: [
      'സ്തംഭത്തിന് മുകളിലും താഴെയുമായി രണ്ട് പാദങ്ങളുള്ളതിനാൽ പാദപരപ്പളവിനെ 2 കൊണ്ട് ഗുണിക്കാൻ മറക്കരുത്.',
      'ലംബത്രികോണ പാദത്തിൽ പരപ്പളവ് (1/2)*a*b ആയതിനാൽ രണ്ട് പാദങ്ങളുടെ പരപ്പളവ് a*b ആയിരിക്കും.'
    ],
    cards_en: [
      { q: 'What is added to the lateral surface area to get the total surface area of a prism?', a: 'Twice the base area ($2 A_b$).', kind: 'recall' },
      { q: 'A right triangular prism has base legs 6 cm and 8 cm (hypotenuse 10 cm) and height 15 cm. Find its TSA.', a: '$P = 6+8+10 = 24\\text{ cm}$. $A_b = \\frac{1}{2} \\times 6 \\times 8 = 24\\text{ cm}^2$. $\\text{TSA} = (24 \\times 15) + 2(24) = 360 + 48 = \\mathbf{408\\text{ cm}^2}$.', kind: 'apply' },
      { q: 'What is the total surface area of a cube of edge length 5 cm?', a: '$\\text{TSA} = 6 \\times 5^2 = 6 \\times 25 = \\mathbf{150\\text{ cm}^2}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'സ്തംഭത്തിന്റെ ഉപരിതല പരപ്പളവ് ലഭിക്കാൻ പാർശ്വതല പരപ്പളവിനോട് എന്ത് കൂട്ടണം?', a: 'ഇരുപാദങ്ങളുടെയും പരപ്പളവ് ($2 A_b$) കൂട്ടണം.', kind: 'recall' },
      { q: 'പാദവശങ്ങൾ 6 cm, 8 cm (കർണ്ണം 10 cm), ഉയരം 15 cm ആയ മട്ടത്രികോണസ്തംഭത്തിന്റെ ഉപരിതല പരപ്പളവ് കാണുക.', a: '$P = 24\\text{ cm}$, $A_b = \\frac{1}{2} \\times 6 \\times 8 = 24\\text{ cm}^2$. $\\text{TSA} = (24 \\times 15) + 2(24) = 360 + 48 = \\mathbf{408\\text{ cm}^2}$.', kind: 'apply' },
      { q: '5 cm വശമുള്ള ഒരു സമചതുരക്കട്ടയുടെ (ക്യൂബ്) ഉപരിതല പരപ്പളവ് എത്ര?', a: '$\\text{TSA} = 6 \\times 5^2 = 6 \\times 25 = \\mathbf{150\\text{ cm}^2}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm8.13.4.prism-volume',
    sec: '8.13.4',
    kind: 'formula',
    tier: 'core',
    title_en: 'Volume of a Prism',
    title_ml: 'സ്തംഭത്തിന്റെ വ്യാപ്തം',
    oneLine_en: 'The volume of any prism is the product of its base area and height: Volume = Base Area × Height.',
    oneLine_ml: 'ഏതൊരു സ്തംഭത്തിന്റെയും വ്യാപ്തം അതിന്റെ പാദപരപ്പളവിനെയും ഉയരത്തെയും തമ്മിൽ ഗുണിച്ചതിന് തുല്യമാണ്: വ്യാപ്തം = പാദപരപ്പളവ് × ഉയരം.',
    statement_en: `<p>The <b>volume</b> (വ്യാപ്തം) of a three-dimensional solid is the measure of the space enclosed within its boundary.</p>
      <p>Imagine building a prism by stacking thin polygonal sheets of uniform area $A_b$ to a height $h$. The space occupied is directly proportional to both the base area and the total height:</p>
      $$\\mathbf{\\text{Volume of Prism} = \\text{Base Area} \\times \\text{Height} = A_b \\times h}$$
      <p><b>Unit Relations:</b></p>
      <ul>
        <li>$1\\text{ m}^3 = 1000\\text{ litres} = 1{,}000{,}000\\text{ cm}^3$</li>
        <li>$1\\text{ litre} = 1000\\text{ cm}^3$</li>
      </ul>
      <p><i>Example:</i> A triangular prism has a right-angled triangular base with perpendicular sides $6\\text{ cm}$ and $8\\text{ cm}$. Its height is $12\\text{ cm}$.</p>
      $$\\text{Base Area } A_b = \\frac{1}{2} \\times 6 \\times 8 = 24\\text{ cm}^2$$
      $$\\text{Volume} = 24 \\times 12 = \\mathbf{288\\text{ cm}^3}$$`,
    statement_ml: `<p>ഒരു ത്രിമാന രൂപം ഉൾക്കൊള്ളുന്ന സ്ഥലത്തിന്റെ അളവിനെയാണ് അതിന്റെ <b>വ്യാപ്തം</b> എന്ന് പറയുന്നത്.</p>
      <p>$A_b$ പരപ്പളവുള്ള ഒരേപോലെയുള്ള ബഹുഭുജ കടലാസുകൾ $h$ ഉയരത്തിൽ ഒന്നിനുമീതെ ഒന്നായി അടുക്കിവെച്ച് സ്തംഭം ഉണ്ടാക്കുന്നതായി സങ്കൽപ്പിച്ചാൽ, അത് ഉൾക്കൊള്ളുന്ന വ്യാപ്തം പാദപരപ്പളവിനും ഉയരത്തിനും ആനുപാതികമായിരിക്കും:</p>
      $$\\mathbf{\\text{സ്തംഭത്തിന്റെ വ്യാപ്തം} = \\text{പാദപരപ്പളവ്} \\times \\text{ഉയരം} = A_b \\times h}$$
      <p><b>യൂണിറ്റുകൾ തമ്മിലുള്ള ബന്ധം:</b></p>
      <ul>
        <li>$1\\text{ ഘനമീറ്റർ (m}^3) = 1000\\text{ ലിറ്റർ} = 10{,}00{,}000\\text{ cm}^3$</li>
        <li>$1\\text{ ലിറ്റർ} = 1000\\text{ ഘന സെന്റിമീറ്റർ (cm}^3)$</li>
      </ul>
      <p><i>ഉദാഹരണം:</i> മട്ടമുണ്ടാക്കുന്ന വശങ്ങൾ $6\\text{ cm}, 8\\text{ cm}$-ഉം ഉയരം $12\\text{ cm}$-ഉം ആയ ത്രികോണസ്തംഭത്തിന്റെ വ്യാപ്തം:</p>
      $$\\text{പാദപരപ്പളവ് } A_b = \\frac{1}{2} \\times 6 \\times 8 = 24\\text{ cm}^2$$
      $$\\text{വ്യാപ്തം} = 24 \\times 12 = \\mathbf{288\\text{ cm}^3}$$`,
    intuition_en: `<p>A column of water rising in a container with vertical walls fills a volume equal to cross-sectional area times the liquid level.</p>`,
    intuition_ml: `<p>ലംബമായ ഭിത്തികളുള്ള ഒരു പാത്രത്തിൽ വെള്ളം നിറയുമ്പോൾ, വ്യാപ്തം പാത്രത്തിന്റെ അടിത്തട്ടിന്റെ പരപ്പളവും വെള്ളത്തിന്റെ ഉയരവും തമ്മിൽ ഗുണിച്ചതിന് തുല്യമായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Cavalieri’s principle: solids of equal heights having equal cross-sectional areas at all levels have equal volumes.',
      idea_ml: 'കവലിയേരി തത്വം: ഒരേ ഉയരമുള്ള രണ്ട് ഘനരൂപങ്ങളുടെ എല്ലാ തട്ടുകളിലെയും ഛേദതല പരപ്പളവുകൾ തുല്യമായാൽ അവയുടെ വ്യാപ്തങ്ങൾ തുല്യമായിരിക്കും.',
      why_en: 'Integrating constant cross-sectional area Ab over height h yields Ab * h.',
      why_ml: 'സ്ഥിരമായ പാദപരപ്പളവിനെ ഉയരത്തോളം കൂട്ടിയെടുക്കുമ്പോൾ Ab * h ലഭിക്കുന്നു.',
      rungs_en: [
        { why_en: 'Slice prism into n thin slabs of thickness delta h.', m: 'h = n \\, \\Delta h' },
        { why_en: 'Each slab has cross-sectional area Ab.', m: '\\Delta V \\approx A_b \\, \\Delta h' },
        { why_en: 'Summing all slab volumes.', m: 'V = \\sum_{i=1}^n A_b \\, \\Delta h = A_b \\sum \\Delta h' },
        { why_en: 'Total height equals sum of slice thicknesses.', m: 'V = A_b \\times h' }
      ],
      rungs_ml: [
        { why_ml: 'സ്തംഭത്തെ വളരെ കനംകുറഞ്ഞ പാളികളായി വിഭജിക്കുന്നു.', m: 'h = n \\, \\Delta h' },
        { why_ml: 'ഓരോ പാളിയുടെയും പരപ്പളവ് Ab ആണ്.', m: '\\Delta V \\approx A_b \\, \\Delta h' },
        { why_ml: 'എല്ലാ പാളികളുടെയും വ്യാപ്തങ്ങൾ കൂട്ടുന്നു.', m: 'V = \\sum A_b \\, \\Delta h = A_b h' },
        { why_ml: 'ആകെ വ്യാപ്തം ലഭിക്കുന്നു.', m: 'V = A_b \\times h' }
      ]
    },
    needs: ['m8.13.1.prism-concept'],
    traps_en: [
      'Do not confuse Perimeter with Base Area: LSA uses perimeter (P * h), Volume uses area (Ab * h).',
      '1 litre = 1000 cm^3, NOT 100 cm^3.'
    ],
    traps_ml: [
      'ചുറ്റളവും പരപ്പളവും തമ്മിൽ മാറിപ്പോകരുത്: പാർശ്വതല പരപ്പളവിന് ചുറ്റളവ് (P * h) ഉപയോഗിക്കുന്നു, വ്യാപ്തത്തിന് പരപ്പളവ് (Ab * h) ഉപയോഗിക്കുന്നു.',
      '1 ലിറ്റർ എന്നത് 1000 ഘന സെന്റിമീറ്റർ ആണ്, 100 അല്ല.'
    ],
    cards_en: [
      { q: 'What is the formula for the volume of any prism?', a: '$\\text{Volume} = \\text{Base Area} \\times \\text{Height} = \\mathbf{A_b \\times h}$.', kind: 'recall' },
      { q: 'A prism with base area 35 sq cm has height 10 cm. What is its volume?', a: '$\\text{Volume} = 35 \\times 10 = \\mathbf{350\\text{ cm}^3}$.', kind: 'apply' },
      { q: 'How many litres of water can a rectangular tank of 20000 cm³ hold?', a: '$\\frac{20000}{1000} = \\mathbf{20\\text{ litres}}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഒരു സ്തംഭത്തിന്റെ വ്യാപ്തം കാണാനുള്ള സൂത്രവാക്യം എന്താണ്?', a: 'വ്യാപ്തം $= \\text{പാദപരപ്പളവ്} \\times \\text{ഉയരം} = \\mathbf{A_b \\times h}$.', kind: 'recall' },
      { q: 'പാദപരപ്പളവ് 35 ച.സെ.മീ-ഉം ഉയരം 10 cm-ഉം ആയ സ്തംഭത്തിന്റെ വ്യാപ്തം എത്ര?', a: 'വ്യാപ്തം $= 35 \\times 10 = \\mathbf{350\\text{ cm}^3}$.', kind: 'apply' },
      { q: '20000 cm³ വ്യാപ്തമുള്ള ഒരു പാത്രത്തിൽ എത്ര ലിറ്റർ വെള്ളം കൊള്ളും?', a: '$\\frac{20000}{1000} = \\mathbf{20\\text{ ലിറ്റർ}}$.', kind: 'apply' }
    ]
  }
);
