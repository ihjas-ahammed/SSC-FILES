/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 11: Prisms (സ്തംഭങ്ങൾ)
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'm9.11.1.prism-definition-and-types',
    sec: '9.11.1',
    kind: 'definition',
    tier: 'core',
    title_en: 'Prisms and Geometric Classification',
    title_ml: 'സ്തംഭങ്ങളുടെ സവിശേഷതകളും തരങ്ങളും',
    oneLine_en: 'A prism is a three-dimensional solid with two identical, parallel polygonal bases and rectangular lateral faces connecting corresponding sides.',
    oneLine_ml: 'പരസ്പരം സമാന്തരവും സർവ്വസമവുമായ രണ്ട് ബഹുഭുജ പാദങ്ങളും, വശങ്ങളിൽ ചതുരാകൃതിയിലുള്ള പാർശ്വമുഖങ്ങളുമുള്ള ത്രിമാന രൂപമാണ് സ്തംഭം.',
    statement_en: `<p><b>Definition of a Prism:</b></p>
      <p>A solid shape whose top and bottom faces are identical (congruent) parallel polygons and whose lateral (side) faces are rectangles is called a <b>right prism</b>.</p>
      <p><b>Classification by Base Polygon:</b></p>
      <ul>
        <li><b>Triangular Prism:</b> Bases are congruent triangles; has $5$ faces ($2$ triangular bases + $3$ rectangular lateral faces), $9$ edges, and $6$ vertices.</li>
        <li><b>Rectangular Prism (Cuboid):</b> Bases are rectangles; all $6$ faces are rectangles; has $12$ edges and $8$ vertices.</li>
        <li><b>Square Prism:</b> A rectangular prism whose base is a square. If all $6$ faces are identical squares, it is a <b>cube</b>.</li>
        <li><b>Hexagonal Prism:</b> Bases are congruent hexagons; has $8$ faces ($2$ hexagonal bases + $6$ rectangular lateral faces), $18$ edges, and $12$ vertices.</li>
      </ul>
      <p>In general, for an $n$-gonal prism: number of faces $= n + 2$, number of edges $= 3n$, and number of vertices $= 2n$.</p>`,
    statement_ml: `<p><b>സ്തംഭത്തിന്റെ നിർവ്വചനം:</b></p>
      <p>മുകളിലെയും താഴെയും മുഖങ്ങൾ പരസ്പരം സമാന്തരവും തുല്യവുമായ ബഹുഭുജങ്ങളും, പാർശ്വമുഖങ്ങൾ ചതുരങ്ങളുമായ ഘനരൂപങ്ങളെയാണ് <b>സ്തംഭങ്ങൾ</b> എന്ന് വിളിക്കുന്നത്.</p>
      <p><b>പാദത്തിന്റെ അടിസ്ഥാനത്തിലുള്ള തരംതിരിവ്:</b></p>
      <ul>
        <li><b>ത്രികോണസ്തംഭം:</b> പാദങ്ങൾ തുല്യ ത്രികോണങ്ങളാണ്. $5$ മുഖങ്ങൾ ($2$ ത്രികോണ പാദങ്ങൾ + $3$ ചതുര പാർശ്വമുഖങ്ങൾ), $9$ വക്കുകൾ, $6$ മൂലകൾ.</li>
        <li><b>ചതുരസ്തംഭം (കട്ട):</b> എല്ലാ മുഖങ്ങളും ചതുരങ്ങളാണ്. $6$ മുഖങ്ങൾ, $12$ വക്കുകൾ, $8$ മൂലകൾ.</li>
        <li><b>സമചതുരസ്തംഭം:</b> പാദം സമചതുരമായ ചതുരസ്തംഭം. എല്ലാ മുഖങ്ങളും തുല്യ സമചതുരങ്ങളായാൽ അത് <b>സമഘനം (ക്യൂബ്)</b> ആകുന്നു.</li>
        <li><b>ഷഡ്ഭുജസ്തംഭം:</b> പാദങ്ങൾ സമഷഡ്ഭുജങ്ങളാണ്. $8$ മുഖങ്ങൾ, $18$ വക്കുകൾ, $12$ മൂലകൾ.</li>
      </ul>
      <p>പൊതുവായി, $n$ വശങ്ങളുള്ള ബഹുഭുജ പാദമുള്ള സ്തംഭത്തിന്: മുഖങ്ങളുടെ എണ്ണം $= n + 2$, വക്കുകൾ $= 3n$, മൂലകൾ $= 2n$.</p>`,
    intuition_en: `<p>Think of stamping a polygonal cookie-cutter downwards through dough: the bottom cut, the top cut, and the smooth vertical rectangular walls form a prism.</p>`,
    intuition_ml: `<p>ഒരു ബഹുഭുജ ആകൃതിയിലുള്ള അച്ച് നേരെ മുകളിലേക്ക് ഉയർത്തുമ്പോൾ രൂപപ്പെടുന്ന ഘനരൂപമാണ് സ്തംഭം; അടിഭാഗവും മുകൾഭാഗവും ഒരേ ആകൃതിയും വശങ്ങൾ ചതുരങ്ങളുമായിരിക്കും.</p>`,
    proof: {
      idea_en: 'Extrude an n-gon along a perpendicular vector: top and bottom are congruent translations, lateral faces connect parallel edges forming parallelograms (rectangles in right prisms).',
      idea_ml: 'ഒരു ബഹുഭുജത്തെ ലംബദിശയിൽ ഉയർത്തുമ്പോൾ വശങ്ങൾ ചതുരങ്ങളാകുന്നു.',
      why_en: 'Linear translation preserves side lengths, parallelism, and right angles between base and altitude.',
      why_ml: 'ലംബമായ ഉയർത്തൽ വശങ്ങളുടെ നീളവും കോണുകളും മാറ്റമില്ലാതെ നിലനിർത്തുന്നു.',
      rungs_en: [
        { why_en: 'Base has n vertices and n edges.', m: 'V_{\\text{base}} = n, \\; E_{\\text{base}} = n' },
        { why_en: 'Top identical copy adds n vertices and n edges.', m: 'V = 2n' },
        { why_en: 'Connecting corresponding vertices produces n vertical edges and n rectangular faces.', m: 'E = n + n + n = 3n, \\; F = 2 + n' }
      ],
      rungs_ml: [
        { why_ml: 'പാദത്തിൽ $n$ മൂലകളും $n$ വക്കുകളുമുണ്ട്.', m: 'V_{\\text{base}} = n' },
        { why_ml: 'മുകൾത്തട്ടിലും $n$ മൂലകളുണ്ട്.', m: 'V = 2n' },
        { why_ml: 'പാദങ്ങളെ ബന്ധിപ്പിക്കുന്ന $n$ ലംബ വക്കുകൾ കൂടി ചേരുമ്പോൾ.', m: 'E = 3n, \\; F = n + 2' }
      ]
    },
    needs: ['m8.13.1.prism-concept', 'm8.4.1.polygon-angle-sum'],
    traps_en: [
      'A pyramid is NOT a prism; pyramids taper to a single vertex, whereas prisms have two congruent bases.',
      'A rectangular prism has 6 faces and 12 edges, do not confuse edges with vertices.'
    ],
    traps_ml: [
      'സ്തൂപികകൾ സ്തംഭങ്ങളല്ല; സ്തൂപികകൾ ഒരു ബിന്ദുവിൽ കൂട്ടിമുട്ടുന്നു, സ്തംഭങ്ങൾക്ക് രണ്ട് തുല്യ പാദങ്ങളുണ്ട്.',
      'ചതുരസ്തംഭത്തിന് 6 മുഖങ്ങളും 12 വക്കുകളും 8 മൂലകളുമാണുള്ളത്.'
    ],
    cards_en: [
      { q: 'How many faces, edges, and vertices does a triangular prism have?', a: '$5$ faces, $9$ edges, and $6$ vertices.', kind: 'recall' },
      { q: 'What is the shape of the lateral faces of any right prism?', a: 'Rectangles.', kind: 'recall' },
      { q: 'How many edges does a pentagonal prism have?', a: '$3 \\times 5 = 15$ edges.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഒരു ത്രികോണസ്തംഭത്തിന് എത്ര മുഖങ്ങളും വക്കുകളും മൂലകളുമുണ്ട്?', a: '$5$ മുഖങ്ങൾ, $9$ വക്കുകൾ, $6$ മൂലകൾ.', kind: 'recall' },
      { q: 'ഏതൊരു നേർസ്തംഭത്തിന്റെയും പാർശ്വമുഖങ്ങളുടെ രൂപം എന്താണ്?', a: 'ചതുരം.', kind: 'recall' },
      { q: 'ഒരു പഞ്ചഭുജസ്തംഭത്തിന് എത്ര വക്കുകളുണ്ട്?', a: '$3 \\times 5 = 15$ വക്കുകൾ.', kind: 'apply' }
    ]
  },

  {
    id: 'm9.11.2.volume-of-prisms',
    sec: '9.11.2',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Volume of a Prism',
    title_ml: 'സ്തംഭത്തിന്റെ വ്യാപ്തം',
    oneLine_en: 'The volume of any prism is the product of its base area and its perpendicular height: V = Base Area × Height.',
    oneLine_ml: 'ഏതൊരു സ്തംഭത്തിന്റെയും വ്യാപ്തം അതിന്റെ പാദപരപ്പളവിനെയും ലംബ ഉയരത്തെയും തമ്മിൽ ഗുണിച്ചാൽ ലഭിക്കുന്ന തുകയ്ക്ക് തുല്യമാണ്: വ്യാപ്തം = പാദപരപ്പളവ് × ഉയരം.',
    statement_en: `<p><b>Volume Formula for Prisms:</b></p>
      <p>For any right prism with base area $A$ and height $h$:</p>
      $$\\mathbf{V = \\text{Base Area} \\times \\text{Height} = A \\times h}$$
      <p><b>Deduction from Rectangular Prisms:</b></p>
      <ul>
        <li>For a rectangular box with dimensions $l, b, h$, Volume $= l \\times b \\times h = (l \\times b) \\times h = \\text{Base Area} \\times h$.</li>
        <li>Any right triangular prism can be doubled to form a rectangular prism with twice the base area and identical height $h$. Thus its volume is half: $\\frac{1}{2}(2A \\times h) = A \\times h$.</li>
        <li>Any general polygonal prism can be triangulated into several triangular prisms sharing the same height $h$. Summing their volumes yields $\\sum (A_i \\times h) = (\\sum A_i) \\times h = A \\times h$.</li>
      </ul>`,
    statement_ml: `<p><b>സ്തംഭത്തിന്റെ വ്യാപ്തം കാണാനുള്ള സൂത്രവാക്യം:</b></p>
      <p>പാദപരപ്പളവ് $A$-യും ഉയരം $h$-ഉം ആയ ഏതൊരു സ്തംഭത്തിന്റെയും വ്യാപ്തം:</p>
      $$\\mathbf{V = \\text{പാദപരപ്പളവ്} \\times \\text{ഉയരം} = A \\times h}$$
      <p><b>ചതുരക്കട്ടയിൽ നിന്നുള്ള കണ്ടെത്തൽ:</b></p>
      <ul>
        <li>നീളം $l$, വീതി $b$, ഉയരം $h$ ആയ ചതുരക്കട്ടയുടെ വ്യാപ്തം $= l \\times b \\times h = (l \\times b) \\times h = \\text{പാദപരപ്പളവ്} \\times \\text{ഉയരം}$.</li>
        <li>ഒരു മട്ടത്രികോണസ്തംഭത്തോട് മറ്റൊന്ന് ചേർത്തുവെച്ചാൽ ഇരട്ടി പാദപരപ്പളവുള്ള ചതുരസ്തംഭമുണ്ടാക്കാം; അതിനാൽ ത്രികോണസ്തംഭത്തിന്റെ വ്യാപ്തം $= A \\times h$.</li>
        <li>ഏതൊരു ബഹുഭുജ സ്തംഭത്തെയും തുല്യ ഉയരമുള്ള ത്രികോണസ്തംഭങ്ങളായി വിഭജിക്കാം. അവയുടെ വ്യാപ്തങ്ങൾ കൂട്ടുമ്പോൾ ആകെ വ്യാപ്തം $= A \\times h$ എന്ന് ലഭിക്കുന്നു.</li>
      </ul>`,
    intuition_en: `<p>Stacking identical flat sheets of paper of area A one upon another until the pile reaches height h: the space enclosed is simply area A swept through height h.</p>`,
    intuition_ml: `<p>പരപ്പളവ് A ആയ തുല്യ കടലാസുകൾ ഒന്നിനുമീതെ ഒന്നായി h ഉയരത്തിൽ അടുക്കിവെച്ചാൽ, ആകെ ഉൾക്കൊള്ളുന്ന സ്ഥലം $A \\times h$ ആയിരിക്കും.</p>`,
    proof: {
      idea_en: 'Cavalieri’s principle / triangulation: slice the prism into thin polygonal layers of equal area A.',
      idea_ml: 'സ്തംഭത്തെ ഒരേ പരപ്പളവുള്ള ത്രികോണസ്തംഭങ്ങളായി ഭാഗിച്ച് വ്യാപ്തങ്ങൾ കൂട്ടുന്നു.',
      why_en: 'Volume is additive across disjoint triangular prisms of uniform height.',
      why_ml: 'ഒരേ ഉയരമുള്ള ഘനരൂപങ്ങൾ ചേർക്കുമ്പോൾ അവയുടെ പാദപരപ്പളവുകൾ തമ്മിൽ കൂട്ടിയാൽ മതിയാകും.',
      rungs_en: [
        { why_en: 'Rectangular prism has base area A = l * b and volume V = l * b * h = A * h.', m: 'V_{\\text{rect}} = A \\cdot h' },
        { why_en: 'Right triangular prism is half a rectangular prism of base 2A.', m: 'V_{\\text{tri}} = \\frac{1}{2}(2A \\cdot h) = A \\cdot h' },
        { why_en: 'Polygonal prism decomposes into triangular prisms of same height.', m: 'V = \\sum A_i h = (\\sum A_i) h = A \\cdot h' }
      ],
      rungs_ml: [
        { why_ml: 'ചതുരക്കട്ടയുടെ വ്യാപ്തം $l \\cdot b \\cdot h = A \\cdot h$.', m: 'V = A \\cdot h' },
        { why_ml: 'മട്ടത്രികോണസ്തംഭം ചതുരക്കട്ടയുടെ പകുതി വ്യാപ്തമുള്ളതാണ്.', m: 'V = \\frac{1}{2}(2A \\cdot h) = A \\cdot h' },
        { why_ml: 'എല്ലാ ബഹുഭുജ സ്തംഭങ്ങളെയും ത്രികോണസ്തംഭങ്ങളായി ഭാഗിക്കാം.', m: 'V = A \\cdot h' }
      ]
    },
    needs: ['m9.11.1.prism-definition-and-types', 'p.3.4'],
    traps_en: [
      'Ensure the height is measured perpendicular to the base, not along a slanted edge if tilted.',
      'Units of volume are cubic units (cm³, m³), while area is square units (cm², m²).'
    ],
    traps_ml: [
      'ഉയരം എന്നത് പാദത്തിൽ നിന്നുള്ള ലംബ ഉയരമായിരിക്കണം.',
      'വ്യാപ്തത്തിന്റെ യൂണിറ്റ് ക്യൂബിക് സെന്റിമീറ്റർ (ഘന സെ.മീ) ആണ്, വിസ്തീർണ്ണത്തിന് ചതുരശ്ര സെ.മീ ആണ്.'
    ],
    cards_en: [
      { q: 'The base of a prism has area 35 sq cm and height 12 cm. What is its volume?', a: '$V = 35 \\times 12 = \\mathbf{420\\text{ cm}^3}$.', kind: 'apply' },
      { q: 'The base of a right triangular prism has legs 6 cm and 8 cm. If its height is 15 cm, find its volume.', a: 'Base Area $= \\frac{1}{2} \\times 6 \\times 8 = 24\\text{ cm}^2$. Volume $= 24 \\times 15 = \\mathbf{360\\text{ cm}^3}$.', kind: 'apply' },
      { q: 'What happens to the volume of a prism if its height is tripled while keeping the base unchanged?', a: 'The volume is tripled ($3V$).', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ഒരു സ്തംഭത്തിന്റെ പാദപരപ്പളവ് 35 ച.സെ.മീ-ഉം ഉയരം 12 സെ.മീ-ഉം ആയാൽ വ്യാപ്തം എത്ര?', a: '$V = 35 \\times 12 = \\mathbf{420\\text{ ഘന സെ.മീ}}$.', kind: 'apply' },
      { q: 'ഒരു മട്ടത്രികോണസ്തംഭത്തിന്റെ പാദവശങ്ങൾ 6 cm, 8 cm ആണ്. ഉയരം 15 cm ആയാൽ വ്യാപ്തം എത്ര?', a: 'പാദപരപ്പളവ് $= \\frac{1}{2} \\times 6 \\times 8 = 24\\text{ ച.സെ.മീ}$. വ്യാപ്തം $= 24 \\times 15 = \\mathbf{360\\text{ ഘന സെ.മീ}}$.', kind: 'apply' },
      { q: 'പാദപരപ്പളവ് മാറ്റാതെ ഉയരം മൂന്നിരട്ടിയാക്കിയാൽ സ്തംഭത്തിന്റെ വ്യാപ്തത്തിന് എന്ത് മാറ്റം വരും?', a: 'വ്യാപ്തം മൂന്നിരട്ടിയാകും ($3V$).', kind: 'apply' }
    ]
  },

  {
    id: 'm9.11.3.surface-area-of-prisms',
    sec: '9.11.3',
    kind: 'rule',
    tier: 'core',
    title_en: 'Surface Area of Prisms',
    title_ml: 'സ്തംഭങ്ങളുടെ ഉപരിതല പരപ്പളവ്',
    oneLine_en: 'The lateral surface area of a prism is Base Perimeter × Height; the total surface area is the lateral surface area plus the areas of both identical bases.',
    oneLine_ml: 'സ്തംഭത്തിന്റെ പാർശ്വപരപ്പളവ് = പാദചുറ്റളവ് × ഉയരം; ആകെ ഉപരിതല പരപ്പളവ് = പാർശ്വപരപ്പളവ് + 2 × പാദപരപ്പളവ്.',
    statement_en: `<p><b>Lateral Surface Area (LSA):</b></p>
      <p>When the vertical rectangular faces of a prism of height $h$ with base sides $s_1, s_2, \\dots, s_n$ are unfolded flat, they form one single large rectangle of width equal to the base perimeter $P$ and height $h$:</p>
      $$\\mathbf{\\text{LSA} = (s_1 + s_2 + \\dots + s_n) \\times h = \\text{Base Perimeter} \\times \\text{Height} = P \\times h}$$
      <p><b>Total Surface Area (TSA):</b></p>
      <p>The total surface area includes the lateral faces and the two identical bases (top and bottom):</p>
      $$\\mathbf{\\text{TSA} = \\text{LSA} + 2 \\times \\text{Base Area} = (P \\times h) + 2A}$$`,
    statement_ml: `<p><b>പാർശ്വപരപ്പളവ്:</b></p>
      <p>ഉയരം $h$-ഉം പാദവശങ്ങൾ $s_1, s_2, \\dots, s_n$-ഉം ആയ ഒരു സ്തംഭത്തിന്റെ വശങ്ങളിലെ ചതുരങ്ങൾ നിവർത്തിവെച്ചാൽ, പാദചുറ്റളവ് $P$ നീളവും ഉയരം $h$ വീതിയുമുള്ള ഒരു വലിയ ചതുരം ലഭിക്കുന്നു:</p>
      $$\\mathbf{\\text{പാർശ്വപരപ്പളവ്} = \\text{പാദചുറ്റളവ്} \\times \\text{ഉയരം} = P \\times h}$$
      <p><b>ആകെ ഉപരിതല പരപ്പളവ്:</b></p>
      <p>പാർശ്വമുഖങ്ങളുടെ പരപ്പളവിനോടൊപ്പം മുകളിലെയും താഴെയും രണ്ട് പാദങ്ങളുടെ പരപ്പളവ് കൂടി ചേരുമ്പോഴാണ് ആകെ പരപ്പളവ് ലഭിക്കുന്നത്:</p>
      $$\\mathbf{\\text{ഉപരിതല പരപ്പളവ്} = \\text{പാർശ്വപരപ്പളവ്} + 2 \\times \\text{പാദപരപ്പളവ്} = (P \\times h) + 2A}$$`,
    intuition_en: `<p>Unwrapping a triangular prism box like a cardboard net reveals three side rectangles aligned edge-to-edge: total width is the perimeter of the triangle!</p>`,
    intuition_ml: `<p>ഒരു സ്തംഭത്തിന്റെ വശങ്ങൾ വെട്ടി നിവർത്തിയാൽ, പാദത്തിന്റെ ചുറ്റളവ് നീളവും സ്തംഭത്തിന്റെ ഉയരം വീതിയുമുള്ള ഒരൊറ്റ വലിയ ചതുരക്കടലാസായി അത് മാറും.</p>`,
    proof: {
      idea_en: 'Each lateral face is a rectangle of area s_i * h; summing across all sides factors out h.',
      idea_ml: 'ഓരോ പാർശ്വമുഖത്തിന്റെയും പരപ്പളവ് $s_i \\times h$ ആണ്; ഇവ കൂട്ടുമ്പോൾ $h(s_1 + s_2 + \\dots) = P \\times h$ ആകുന്നു.',
      why_en: 'Distributive property of multiplication over addition.',
      why_ml: 'ഗുണനത്തിന്റെ വിതരണ നിയമം വഴി $h$-നെ പൊതുവായി പുറത്തെടുക്കാം.',
      rungs_en: [
        { why_en: 'Lateral area is sum of n rectangular face areas.', m: '\\text{LSA} = s_1 h + s_2 h + \\dots + s_n h' },
        { why_en: 'Factor out common height h.', m: '\\text{LSA} = (s_1 + s_2 + \\dots + s_n)h = P \\cdot h' },
        { why_en: 'Add top and bottom congruent bases.', m: '\\text{TSA} = P \\cdot h + 2A' }
      ],
      rungs_ml: [
        { why_ml: 'പാർശ്വമുഖങ്ങളുടെ പരപ്പളവുകളുടെ തുക.', m: '\\text{LSA} = s_1 h + s_2 h + \\dots + s_n h' },
        { why_ml: '$h$ പൊതുവായി എടുക്കുന്നു.', m: '\\text{LSA} = (s_1 + s_2 + \\dots)h = P \\cdot h' },
        { why_ml: 'രണ്ട് പാദങ്ങളുടെ പരപ്പളവ് കൂടി ചേർക്കുന്നു.', m: '\\text{TSA} = P \\cdot h + 2A' }
      ]
    },
    needs: ['m9.11.1.prism-definition-and-types'],
    traps_en: [
      'Do not forget to double the base area for TSA (there is both a bottom and a top base).',
      'For open tubes/pipes, only the lateral surface area is computed (bases are missing).'
    ],
    traps_ml: [
      'ആകെ പരപ്പളവ് കാണുമ്പോൾ രണ്ട് പാദങ്ങളുടെ പരപ്പളവ് ($2A$) കൂട്ടാൻ മറക്കരുത്.',
      'തുറന്ന കുഴലുകളാണെങ്കിൽ പാർശ്വപരപ്പളവ് ($P \\times h$) മാത്രമേ കണക്കാക്കേണ്ടതുള്ളൂ.'
    ],
    cards_en: [
      { q: 'A prism has an equilateral triangle base of side 6 cm and height 10 cm. Find its lateral surface area.', a: 'Base perimeter $P = 3 \\times 6 = 18\\text{ cm}$. $\\text{LSA} = 18 \\times 10 = \\mathbf{180\\text{ sq cm}}$.', kind: 'apply' },
      { q: 'What is the formula for the Total Surface Area of a right prism?', a: '$\\text{TSA} = (\\text{Base Perimeter} \\times h) + 2 \\times \\text{Base Area}$.', kind: 'recall' },
      { q: 'A square prism has base side 4 cm and height 8 cm. Find its total surface area.', a: 'Base Area $= 16\\text{ cm}^2$, Perimeter $= 16\\text{ cm}$. $\\text{TSA} = (16 \\times 8) + 2(16) = 128 + 32 = \\mathbf{160\\text{ sq cm}}$.', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'വശം 6 cm ആയ സമഭുജ ത്രികോണം പാദമായ സ്തംഭത്തിന്റെ ഉയരം 10 cm ആയാൽ പാർശ്വപരപ്പളവ് എത്ര?', a: 'പാദചുറ്റളവ് $P = 3 \\times 6 = 18\\text{ cm}$. പാർശ്വപരപ്പളവ് $= 18 \\times 10 = \\mathbf{180\\text{ ച.സെ.മീ}}$.', kind: 'apply' },
      { q: 'ഒരു സ്തംഭത്തിന്റെ ആകെ ഉപരിതല പരപ്പളവിന്റെ സൂത്രവാക്യം എന്താണ്?', a: 'ഉപരിതല പരപ്പളവ് $= (\\text{പാദചുറ്റളവ്} \\times h) + 2 \\times \\text{പാദപരപ്പളവ്}$.', kind: 'recall' },
      { q: 'പാദവശം 4 cm-ഉം ഉയരം 8 cm-ഉം ആയ സമചതുരസ്തംഭത്തിന്റെ ആകെ ഉപരിതല പരപ്പളവ് എത്ര?', a: 'പാദപരപ്പളവ് $= 16\\text{ cm}^2$, ചുറ്റളവ് $= 16\\text{ cm}$. $\\text{TSA} = (16 \\times 8) + 2(16) = 128 + 32 = \\mathbf{160\\text{ ച.സെ.മീ}}$.', kind: 'apply' }
    ]
  },

  {
    id: 'm9.11.4.cylinder-as-circular-prism',
    sec: '9.11.4',
    kind: 'theorem',
    tier: 'core',
    title_en: 'Cylinder as a Circular Prism',
    title_ml: 'വൃത്തസ്തംഭം / സിലിണ്ടർ',
    oneLine_en: 'A right circular cylinder is a prism with circular bases of radius r and height h: Volume V = πr²h, Curved Surface Area $\text{CSA} = 2\pi rh$, and Total Surface Area $\text{TSA} = 2\pi r$(r + h).',
    oneLine_ml: 'ആരം r-ഉം ഉയരം h-ഉം ആയ വൃത്തങ്ങൾ പാദമായ സ്തംഭമാണ് വൃത്തസ്തംഭം (സിലിണ്ടർ): വ്യാപ്തം V = πr²h, വക്രതല പരപ്പളവ് $\text{CSA} = 2\pi rh$, ആകെ ഉപരിതല പരപ്പളവ് $\text{TSA} = 2\pi r$(r + h).',
    statement_en: `<p><b>Limit of Polygonal Prisms:</b></p>
      <p>As the number of sides of a regular polygon inscribed in a circle increases without bound, the regular prism approaches a <b>right circular cylinder</b>.</p>
      <p><b>Core Formulas for a Cylinder of Base Radius $r$ and Height $h$:</b></p>
      <ul>
        <li><b>Base Area ($A$):</b> Area of the circular base:
        $$\\mathbf{A = \\pi r^2}$$</li>
        <li><b>Volume ($V$):</b> Base Area $\\times$ Height:
        $$\\mathbf{V = \\pi r^2 h}$$</li>
        <li><b>Curved Surface Area (CSA):</b> Base Circumference $\\times$ Height:
        $$\\mathbf{\\text{CSA} = 2\\pi r h}$$</li>
        <li><b>Total Surface Area (TSA):</b> Curved Surface Area + $2 \\times$ Circular Base Areas:
        $$\\mathbf{\\text{TSA} = 2\\pi r h + 2\\pi r^2 = 2\\pi r(r + h)}$$</li>
      </ul>`,
    statement_ml: `<p><b>ബഹുഭുജസ്തംഭങ്ങളിൽ നിന്നുള്ള വികാസം:</b></p>
      <p>പാദമായ സമബഹുഭുജത്തിന്റെ വശങ്ങളുടെ എണ്ണം അനന്തമായി വർദ്ധിക്കുമ്പോൾ, അത് ക്രമേണ ഒരു വൃത്തമായി മാറുകയും സ്തംഭം ഒരു <b>വൃത്തസ്തംഭമായി (സിലിണ്ടർ)</b> മാറുകയും ചെയ്യുന്നു.</p>
      <p><b>ആരം $r$-ഉം ഉയരം $h$-ഉം ആയ വൃത്തസ്തംഭത്തിന്റെ സൂത്രവാക്യങ്ങൾ:</b></p>
      <ul>
        <li><b>പാദപരപ്പളവ് ($A$):</b> വൃത്തപാദത്തിന്റെ പരപ്പളവ്:
        $$\\mathbf{A = \\pi r^2}$$</li>
        <li><b>വ്യാപ്തം ($V$):</b> പാദപരപ്പളവ് $\\times$ ഉയരം:
        $$\\mathbf{V = \\pi r^2 h}$$</li>
        <li><b>വക്രതല പരപ്പളവ്:</b> പാദചുറ്റളവ് $\\times$ ഉയരം:
        $$\\mathbf{\\text{CSA} = 2\\pi r h}$$</li>
        <li><b>ആകെ ഉപരിതല പരപ്പളവ്:</b> വക്രതല പരപ്പളവ് + രണ്ട് വൃത്തപാദങ്ങളുടെ പരപ്പളവ്:
        $$\\mathbf{\\text{TSA} = 2\\pi r h + 2\\pi r^2 = 2\\pi r(r + h)}$$</li>
      </ul>`,
    intuition_en: `<p>Rolling a rectangular sheet of paper of length 2πr and height h curls into the curved wall of a cylinder; capping the top and bottom with circles of radius r seals the solid.</p>`,
    intuition_ml: `<p>നീളം $2\\pi r$-ഉം വീതി $h$-ഉം ആയ ഒരു ചതുരക്കടലാസ് വളച്ചാൽ ഒരു വൃത്തസ്തംഭത്തിന്റെ വശങ്ങൾ ലഭിക്കും; മുകളിലും താഴെയും $r$ ആരമുള്ള വൃത്തങ്ങൾ വെച്ചടച്ചാൽ സിലിണ്ടർ പൂർണ്ണമാകുന്നു.</p>`,
    proof: {
      idea_en: 'Inscribe regular n-gonal prisms in the cylinder: base area approaches pi*r^2 and perimeter approaches 2*pi*r.',
      idea_ml: 'സിലിണ്ടറിനുള്ളിൽ സമബഹുഭുജ സ്തംഭങ്ങൾ പരിഗണിച്ച് $n \\to \\infty$ എന്ന സീമ കാണുന്നു.',
      why_en: 'Prism volume formula V = A*h and lateral area P*h apply uniformly in the limit.',
      why_ml: 'സ്തംഭത്തിന്റെ നിയമങ്ങൾ വൃത്തസ്തംഭത്തിനും മാറ്റമില്ലാതെ ബാധകമാണ്.',
      rungs_en: [
        { why_en: 'Base perimeter approaches circumference of circle.', m: '\\lim_{n \\to \\infty} P_n = 2\\pi r' },
        { why_en: 'Base area approaches area of circle.', m: '\\lim_{n \\to \\infty} A_n = \\pi r^2' },
        { why_en: 'Volume and CSA formulas follow directly.', m: 'V = (\\pi r^2)h, \\quad \\text{CSA} = (2\\pi r)h' }
      ],
      rungs_ml: [
        { why_ml: 'പാദചുറ്റളവ് വൃത്തത്തിന്റെ ചുറ്റളവിലേക്ക് അടുക്കുന്നു.', m: 'P \\to 2\\pi r' },
        { why_ml: 'പാദപരപ്പളവ് വൃത്തപരപ്പളവിലേക്ക് അടുക്കുന്നു.', m: 'A \\to \\pi r^2' },
        { why_ml: 'വ്യാപ്തവും വക്രതല പരപ്പളവും ഇപ്രകാരം ലഭിക്കുന്നു.', m: 'V = \\pi r^2 h, \\quad \\text{CSA} = 2\\pi r h' }
      ]
    },
    needs: ['m9.11.2.volume-of-prisms', 'm9.9.1.circumference-and-pi', 'm9.9.2.area-of-a-circle'],
    traps_en: [
      'In volume, radius is squared: V = pi * r^2 * h. In curved area, radius is linear: CSA = 2 * pi * r * h.',
      'Remember that diameter d = 2r; always divide diameter by 2 before squaring.'
    ],
    traps_ml: [
      'വ്യാപ്തത്തിൽ ആരം വർഗ്ഗമാണ് ($V = \\pi r^2 h$), വക്രതല പരപ്പളവിൽ ആരം ആദ്യ കൃതിയിലാണ് ($\\text{CSA} = 2\\pi r h$).',
      'ചോദ്യത്തിൽ വ്യാസമാണ് (d) തന്നിരിക്കുന്നതെങ്കിൽ ആദ്യം 2 കൊണ്ട് ഹരിച്ച് ആരം (r) കണ്ടെത്തണം.'
    ],
    cards_en: [
      { q: 'Find the volume of a cylinder with base radius 7 cm and height 10 cm (pi = 22/7).', a: '$V = \\frac{22}{7} \\times 7^2 \\times 10 = 22 \\times 7 \\times 10 = \\mathbf{1540\\text{ cm}^3}$.', kind: 'apply' },
      { q: 'What is the curved surface area of a cylinder of radius 14 cm and height 5 cm (pi = 22/7)?', a: '$\\text{CSA} = 2 \\times \\frac{22}{7} \\times 14 \\times 5 = 2 \\times 22 \\times 2 \\times 5 = \\mathbf{440\\text{ sq cm}}$.', kind: 'apply' },
      { q: 'If the radius of a cylinder is doubled while keeping height constant, how does volume change?', a: 'Volume quadruples ($2^2 = 4$ times original volume).', kind: 'apply' }
    ],
    cards_ml: [
      { q: 'ആരം 7 cm-ഉം ഉയരം 10 cm-ഉം ആയ വൃത്തസ്തംഭത്തിന്റെ വ്യാപ്തം എത്ര ($\\pi = 22/7$)?', a: '$V = \\frac{22}{7} \\times 7^2 \\times 10 = \\mathbf{1540\\text{ ഘന സെ.മീ}}$.', kind: 'apply' },
      { q: 'ആരം 14 cm-ഉം ഉയരം 5 cm-ഉം ആയ വൃത്തസ്തംഭത്തിന്റെ വക്രതല പരപ്പളവ് എത്ര?', a: '$\\text{CSA} = 2 \\times \\frac{22}{7} \\times 14 \\times 5 = \\mathbf{440\\text{ ച.സെ.മീ}}$.', kind: 'apply' },
      { q: 'ഉയരം മാറ്റാതെ ആരം ഇരട്ടിയാക്കിയാൽ വൃത്തസ്തംഭത്തിന്റെ വ്യാപ്തം എത്ര മടങ്ങാകും?', a: 'വ്യാപ്തം 4 മടങ്ങാകും ($2^2 = 4$).', kind: 'apply' }
    ]
  }
);
