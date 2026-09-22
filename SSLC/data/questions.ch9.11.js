/* ══════════════════════════════════════════════════════════════════════════
   Questions: Class 9 Chapter 11 — Prisms (സ്തംഭങ്ങൾ)
   8 Objective (2 per section) + 4 Written Exercises (1 per section).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.11.1 Prisms and Geometric Classification
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.11.1',
    concept: 'm9.11.1.prism-definition-and-types',
    sec: '9.11.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'How many edges does an octagonal prism (a prism with an $8$-sided polygon base) have?',
    prompt_ml: 'എട്ടുവശങ്ങളുള്ള ബഹുഭുജം (അഷ്ടഭുജം) പാദമായ ഒരു സ്തംഭത്തിന് എത്ര വക്കുകളുണ്ട്?',
    options_en: [
      { k: 'A', t: '$24$' },
      { k: 'B', t: '$16$' },
      { k: 'C', t: '$10$' },
      { k: 'D', t: '$18$' }
    ],
    options_ml: [
      { k: 'A', t: '$24$' },
      { k: 'B', t: '$16$' },
      { k: 'C', t: '$10$' },
      { k: 'D', t: '$18$' }
    ],
    answer: 'A',
    solution_en: 'For any $n$-gonal prism, the number of edges is $3n$. For an octagon ($n = 8$): $3 \\times 8 = 24$ edges.',
    solution_ml: '$n$ വശങ്ങളുള്ള ബഹുഭുജ പാദമുള്ള സ്തംഭത്തിന് $3n$ വക്കുകളുണ്ട്. അഷ്ടഭുജത്തിന് ($n = 8$): $3 \\times 8 = 24$ വക്കുകൾ.',
    tested_en: 'Counting edges of an n-gonal prism.',
    tested_ml: 'സ്തംഭങ്ങളിലെ വക്കുകളുടെ എണ്ണം കാണൽ.'
  },
  {
    id: 'obj.m9.11.2',
    concept: 'm9.11.1.prism-definition-and-types',
    sec: '9.11.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A prism has $14$ vertices. What is the shape of its base polygon?',
    prompt_ml: 'ഒരു സ്തംഭത്തിന് $14$ മൂലകളുണ്ട്. അതിന്റെ പാദത്തിന്റെ രൂപം എന്താണ്?',
    options_en: [
      { k: 'A', t: 'Heptagon (7-sided polygon)' },
      { k: 'B', t: 'Hexagon (6-sided polygon)' },
      { k: 'C', t: 'Octagon (8-sided polygon)' },
      { k: 'D', t: 'Nonagon (9-sided polygon)' }
    ],
    options_ml: [
      { k: 'A', t: 'സപ്തഭുജം (7 വശങ്ങളുള്ള ബഹുഭുജം)' },
      { k: 'B', t: 'ഷഡ്ഭുജം (6 വശങ്ങളുള്ള ബഹുഭുജം)' },
      { k: 'C', t: 'അഷ്ടഭുജം (8 വശങ്ങളുള്ള ബഹുഭുജം)' },
      { k: 'D', t: 'നവഭുജം (9 വശങ്ങളുള്ള ബഹുഭുജം)' }
    ],
    answer: 'A',
    solution_en: 'Number of vertices in an $n$-gonal prism is $2n$. Here $2n = 14 \\implies n = 7$ (heptagon).',
    solution_ml: 'സ്തംഭത്തിലെ മൂലകളുടെ എണ്ണം $2n = 14$ ആണ്. അതിനാൽ $n = 7$ (സപ്തഭുജം).',
    tested_en: 'Relationship between number of vertices and base polygon.',
    tested_ml: 'സ്തംഭത്തിലെ മൂലകളും പാദത്തിന്റെ വശങ്ങളും തമ്മിലുള്ള ബന്ധം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.11.2 Volume of Prisms
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.11.3',
    concept: 'm9.11.2.volume-of-prisms',
    sec: '9.11.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The base of a right triangular prism has perpendicular sides of lengths $5\\text{ cm}$ and $12\\text{ cm}$. If the height of the prism is $10\\text{ cm}$, what is its volume?',
    prompt_ml: 'ഒരു മട്ടത്രികോണസ്തംഭത്തിന്റെ പാദത്തിലെ ലംബവശങ്ങളുടെ നീളങ്ങൾ $5\\text{ cm}$, $12\\text{ cm}$ ആണ്. സ്തംഭത്തിന്റെ ഉയരം $10\\text{ cm}$ ആയാൽ വ്യാപ്തം എത്ര?',
    options_en: [
      { k: 'A', t: '$300\\text{ cubic cm}$' },
      { k: 'B', t: '$600\\text{ cubic cm}$' },
      { k: 'C', t: '$150\\text{ cubic cm}$' },
      { k: 'D', t: '$360\\text{ cubic cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$300\\text{ ഘന സെ.മീ}$' },
      { k: 'B', t: '$600\\text{ ഘന സെ.മീ}$' },
      { k: 'C', t: '$150\\text{ ഘന സെ.മീ}$' },
      { k: 'D', t: '$360\\text{ ഘന സെ.മീ}$' }
    ],
    answer: 'A',
    solution_en: 'Base Area $= \\frac{1}{2} \\times 5 \\times 12 = 30\\text{ sq cm}$. Volume $= \\text{Base Area} \\times h = 30 \\times 10 = 300\\text{ cm}^3$.',
    solution_ml: 'പാദപരപ്പളവ് $= \\frac{1}{2} \\times 5 \\times 12 = 30\\text{ ച.സെ.മീ}$. വ്യാപ്തം $= 30 \\times 10 = 300\\text{ ഘന സെ.മീ}$.',
    tested_en: 'Computing volume of a right triangular prism.',
    tested_ml: 'മട്ടത്രികോണസ്തംഭത്തിന്റെ വ്യാപ്തം കണക്കാക്കൽ.'
  },
  {
    id: 'obj.m9.11.4',
    concept: 'm9.11.2.volume-of-prisms',
    sec: '9.11.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A square prism has volume $500\\text{ cubic cm}$ and height $20\\text{ cm}$. What is the length of each side of its base?',
    prompt_ml: 'ഒരു സമചതുരസ്തംഭത്തിന്റെ വ്യാപ്തം $500\\text{ ഘന സെ.മീ}$-ഉം ഉയരം $20\\text{ cm}$-ഉം ആണ്. പാദത്തിന്റെ ഒരു വശത്തിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$5\\text{ cm}$' },
      { k: 'B', t: '$25\\text{ cm}$' },
      { k: 'C', t: '$10\\text{ cm}$' },
      { k: 'D', t: '$4\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$5\\text{ cm}$' },
      { k: 'B', t: '$25\\text{ cm}$' },
      { k: 'C', t: '$10\\text{ cm}$' },
      { k: 'D', t: '$4\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: '$\\text{Base Area} = \\frac{\\text{Volume}}{\\text{Height}} = \\frac{500}{20} = 25\\text{ sq cm}$. Side length $s = \\sqrt{25} = 5\\text{ cm}$.',
    solution_ml: 'പാദപരപ്പളവ് $= \\frac{500}{20} = 25\\text{ ച.സെ.മീ}$. വശത്തിന്റെ നീളം $= \\sqrt{25} = 5\\text{ cm}$.',
    tested_en: 'Calculating base side from volume and height.',
    tested_ml: 'വ്യാപ്തത്തിൽ നിന്നും ഉയരത്തിൽ നിന്നും പാദവശം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.11.3 Surface Area of Prisms
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.11.5',
    concept: 'm9.11.3.surface-area-of-prisms',
    sec: '9.11.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The base of a prism is an equilateral triangle of side $8\\text{ cm}$. If the lateral surface area of the prism is $360\\text{ sq cm}$, what is its height?',
    prompt_ml: 'വശം $8\\text{ cm}$ ആയ സമഭുജ ത്രികോണം പാദമായ ഒരു സ്തംഭത്തിന്റെ പാർശ്വപരപ്പളവ് $360\\text{ ച.സെ.മീ}$ ആണ്. സ്തംഭത്തിന്റെ ഉയരം എത്ര?',
    options_en: [
      { k: 'A', t: '$15\\text{ cm}$' },
      { k: 'B', t: '$12\\text{ cm}$' },
      { k: 'C', t: '$20\\text{ cm}$' },
      { k: 'D', t: '$45\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$15\\text{ cm}$' },
      { k: 'B', t: '$12\\text{ cm}$' },
      { k: 'C', t: '$20\\text{ cm}$' },
      { k: 'D', t: '$45\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'Base Perimeter $P = 3 \\times 8 = 24\\text{ cm}$. Height $h = \\frac{\\text{LSA}}{P} = \\frac{360}{24} = 15\\text{ cm}$.',
    solution_ml: 'പാദചുറ്റളവ് $P = 3 \\times 8 = 24\\text{ cm}$. ഉയരം $h = \\frac{360}{24} = 15\\text{ cm}$.',
    tested_en: 'Finding height from lateral surface area and base perimeter.',
    tested_ml: 'പാർശ്വപരപ്പളവും പാദചുറ്റളവും ഉപയോഗിച്ച് ഉയരം കാണൽ.'
  },
  {
    id: 'obj.m9.11.6',
    concept: 'm9.11.3.surface-area-of-prisms',
    sec: '9.11.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A rectangular box has length $6\\text{ cm}$, width $4\\text{ cm}$, and height $5\\text{ cm}$. What is its total surface area?',
    prompt_ml: 'നീളം $6\\text{ cm}$, വീതി $4\\text{ cm}$, ഉയരം $5\\text{ cm}$ ഉള്ള ഒരു ചതുരക്കട്ടയുടെ ആകെ ഉപരിതല പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$148\\text{ sq cm}$' },
      { k: 'B', t: '$120\\text{ sq cm}$' },
      { k: 'C', t: '$100\\text{ sq cm}$' },
      { k: 'D', t: '$74\\text{ sq cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$148\\text{ ച.സെ.മീ}$' },
      { k: 'B', t: '$120\\text{ ച.സെ.മീ}$' },
      { k: 'C', t: '$100\\text{ ച.സെ.മീ}$' },
      { k: 'D', t: '$74\\text{ ച.സെ.മീ}$' }
    ],
    answer: 'A',
    solution_en: '$\\text{TSA} = 2(lb + bh + lh) = 2(24 + 20 + 30) = 2(74) = 148\\text{ sq cm}$.',
    solution_ml: 'ആകെ പരപ്പളവ് $= 2(lb + bh + lh) = 2(24 + 20 + 30) = 2(74) = 148\\text{ ച.സെ.മീ}$.',
    tested_en: 'Total surface area calculation for a rectangular prism.',
    tested_ml: 'ചതുരക്കട്ടയുടെ ആകെ ഉപരിതല പരപ്പളവ് കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.11.4 Cylinder as a Circular Prism
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.11.7',
    concept: 'm9.11.4.cylinder-as-circular-prism',
    sec: '9.11.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the curved surface area of a cylinder with base radius $7\\text{ cm}$ and height $20\\text{ cm}$ (take $\\pi = \\frac{22}{7}$)?',
    prompt_ml: 'ആരം $7\\text{ cm}$-ഉം ഉയരം $20\\text{ cm}$-ഉം ആയ വൃത്തസ്തംഭത്തിന്റെ വക്രതല പരപ്പളവ് എത്ര ($\\pi = \\frac{22}{7}$)?',
    options_en: [
      { k: 'A', t: '$880\\text{ sq cm}$' },
      { k: 'B', t: '$440\\text{ sq cm}$' },
      { k: 'C', t: '$3080\\text{ sq cm}$' },
      { k: 'D', t: '$1188\\text{ sq cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$880\\text{ ച.സെ.മീ}$' },
      { k: 'B', t: '$440\\text{ ച.സെ.മീ}$' },
      { k: 'C', t: '$3080\\text{ ച.സെ.മീ}$' },
      { k: 'D', t: '$1188\\text{ ച.സെ.മീ}$' }
    ],
    answer: 'A',
    solution_en: '$\\text{CSA} = 2\\pi rh = 2 \\times \\frac{22}{7} \\times 7 \\times 20 = 2 \\times 22 \\times 20 = 880\\text{ sq cm}$.',
    solution_ml: '$\\text{CSA} = 2\\pi rh = 2 \\times \\frac{22}{7} \\times 7 \\times 20 = 880\\text{ ച.സെ.മീ}$.',
    tested_en: 'Calculating curved surface area of a cylinder.',
    tested_ml: 'വൃത്തസ്തംഭത്തിന്റെ വക്രതല പരപ്പളവ് കാണൽ.'
  },
  {
    id: 'obj.m9.11.8',
    concept: 'm9.11.4.cylinder-as-circular-prism',
    sec: '9.11.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'Two cylinders have their base radii in the ratio $2 : 3$ and their heights in the ratio $3 : 2$. What is the ratio of their volumes?',
    prompt_ml: 'രണ്ട് വൃത്തസ്തംഭങ്ങളുടെ ആരങ്ങളുടെ അംശബന്ധം $2 : 3$-ഉം ഉയരങ്ങളുടെ അംശബന്ധം $3 : 2$-ഉം ആണ്. അവയുടെ വ്യാപ്തങ്ങളുടെ അംശബന്ധം എത്ര?',
    options_en: [
      { k: 'A', t: '$2 : 3$' },
      { k: 'B', t: '$1 : 1$' },
      { k: 'C', t: '$4 : 9$' },
      { k: 'D', t: '$3 : 2$' }
    ],
    options_ml: [
      { k: 'A', t: '$2 : 3$' },
      { k: 'B', t: '$1 : 1$' },
      { k: 'C', t: '$4 : 9$' },
      { k: 'D', t: '$3 : 2$' }
    ],
    answer: 'A',
    solution_en: 'Ratio of volumes $= \\frac{\\pi r_1^2 h_1}{\\pi r_2^2 h_2} = \\left(\\frac{r_1}{r_2}\\right)^2 \\times \\left(\\frac{h_1}{h_2}\\right) = \\left(\\frac{2}{3}\\right)^2 \\times \\left(\\frac{3}{2}\\right) = \\frac{4}{9} \\times \\frac{3}{2} = \\frac{2}{3}$.',
    solution_ml: 'വ്യാപ്തങ്ങളുടെ അംശബന്ധം $= \\left(\\frac{r_1}{r_2}\\right)^2 \\times \\left(\\frac{h_1}{h_2}\\right) = \\frac{4}{9} \\times \\frac{3}{2} = \\frac{2}{3} = 2 : 3$.',
    tested_en: 'Ratio of volumes of cylinders with varying radii and heights.',
    tested_ml: 'സിലിണ്ടറുകളുടെ വ്യാപ്തങ്ങളുടെ അംശബന്ധം കാണൽ.'
  }
);

WRITTEN.push(
  /* ──────────────────────────────────────────────────────────────────────────
     Level 2 Written Exercises (1 per section)
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'w.m9.11.1',
    concept: 'm9.11.1.prism-definition-and-types',
    sec: '9.11.1',
    type: 'written',
    marks: 4,
    time: 180,
    prompt_en: '<p>(i) Clearly define a right prism and explain how its lateral faces relate to its base edges.</p><p>(ii) For an $n$-sided polygonal prism, write formulas for the number of faces $F$, vertices $V$, and edges $E$, and verify Euler’s formula $F + V - E = 2$ for a hexagonal prism.</p>',
    prompt_ml: '<p>(i) ഒരു നേർസ്തംഭം എന്നാൽ എന്ത് എന്ന് നിർവ്വചിക്കുക. അതിന്റെ പാർശ്വമുഖങ്ങളും പാദത്തിന്റെ വക്കുകളും തമ്മിലുള്ള ബന്ധം വ്യക്തമാക്കുക.</p><p>(ii) $n$ വശങ്ങളുള്ള ബഹുഭുജ പാദമുള്ള സ്തംഭത്തിന് മുഖങ്ങൾ $F$, മൂലകൾ $V$, വക്കുകൾ $E$ എന്നിവ കാണാനുള്ള സൂത്രവാക്യങ്ങൾ എഴുതുക. ഒരു ഷഡ്ഭുജസ്തംഭത്തിന് ഓയ്‌ലറുടെ സമവാക്യമായ $F + V - E = 2$ പരിശോധിക്കുക.</p>',
    solution_en: `<h4>Part (i): Definition and Geometric Structure</h4>
<p>A <b>right prism</b> is a 3D polyhedron bounded by two identical (congruent) parallel polygonal bases at the top and bottom, with vertical lateral faces that are <b>rectangles</b> joining corresponding base edges.</p>

<h4>Part (ii): Formulas and Euler’s Formula for Hexagonal Prism</h4>
<p>For an $n$-gonal prism:</p>
<ul>
  <li>Faces: $F = n + 2$ ($2$ polygonal bases + $n$ lateral rectangular faces)</li>
  <li>Vertices: $V = 2n$ ($n$ on top base + $n$ on bottom base)</li>
  <li>Edges: $E = 3n$ ($n$ on top + $n$ on bottom + $n$ vertical edges)</li>
</ul>
<p>For a <b>hexagonal prism</b> ($n = 6$):</p>
$$F = 6 + 2 = \\mathbf{8}$$
$$V = 2(6) = \\mathbf{12}$$
$$E = 3(6) = \\mathbf{18}$$
<p>Applying Euler's formula:</p>
$$F + V - E = 8 + 12 - 18 = 20 - 18 = \\mathbf{2}$$
<p>Euler's polyhedral formula is verified.</p>`,
    solution_ml: `<h4>ഭാഗം (i): നിർവ്വചനവും ഘടനയും</h4>
<p>പരസ്പരം സമാന്തരവും തുല്യവുമായ രണ്ട് ബഹുഭുജ പാദങ്ങളും, വശങ്ങളിൽ ചതുരാകൃതിയിലുള്ള പാർശ്വമുഖങ്ങളുമുള്ള ഘനരൂപമാണ് <b>നേർസ്തംഭം</b>.</p>

<h4>ഭാഗം (ii): സൂത്രവാക്യങ്ങളും ഓയ്‌ലർ സമവാക്യവും</h4>
<p>$n$ വശങ്ങളുള്ള സ്തംഭത്തിന്:</p>
<ul>
  <li>മുഖങ്ങൾ: $F = n + 2$</li>
  <li>മൂലകൾ: $V = 2n$</li>
  <li>വക്കുകൾ: $E = 3n$</li>
</ul>
<p><b>ഷഡ്ഭുജസ്തംഭത്തിന്</b> ($n = 6$):</p>
$$F = 6 + 2 = \\mathbf{8}$$
$$V = 2 \\times 6 = \\mathbf{12}$$
$$E = 3 \\times 6 = \\mathbf{18}$$
<p>ഓയ്‌ലറുടെ സമവാക്യം:</p>
$$F + V - E = 8 + 12 - 18 = \\mathbf{2}$$
<p>ഓയ്‌ലറുടെ സമവാക്യം ശരിയാണെന്ന് വ്യക്തമായി.</p>`,
    tested_en: 'Combinatorial structure and Euler’s formula for prisms.',
    tested_ml: 'സ്തംഭങ്ങളുടെ ജ്യാമിതീയ ഘടനയും ഓയ്‌ലർ സമവാക്യ പരിശോധനയും.'
  },

  {
    id: 'w.m9.11.2',
    concept: 'm9.11.2.volume-of-prisms',
    sec: '9.11.2',
    type: 'written',
    marks: 4,
    time: 200,
    prompt_en: '<p>The base of a prism is a right-angled triangle whose hypotenuse is $17\\text{ cm}$ and one perpendicular side is $8\\text{ cm}$.</p><p>(i) Calculate the length of the other perpendicular side and the area of the base triangle.</p><p>(ii) If the volume of the prism is $1020\\text{ cubic cm}$, find the height of the prism.</p>',
    prompt_ml: '<p>ഒരു മട്ടത്രികോണസ്തംഭത്തിന്റെ പാദമായ ത്രികോണത്തിന്റെ കർണ്ണം $17\\text{ cm}$-ഉം ഒരു ലംബവശം $8\\text{ cm}$-ഉം ആണ്.</p><p>(i) മറ്റേ ലംബവശത്തിന്റെ നീളവും പാദത്രികോണത്തിന്റെ പരപ്പളവും കണക്കാക്കുക.</p><p>(ii) സ്തംഭത്തിന്റെ വ്യാപ്തം $1020\\text{ ഘന സെ.മീ}$ ആയാൽ സ്തംഭത്തിന്റെ ഉയരം കണ്ടെത്തുക.</p>',
    solution_en: `<h4>Step 1: Find the Unknown Leg and Base Area</h4>
<p>Using the Pythagorean theorem for the base right triangle:</p>
$$b = \\sqrt{c^2 - a^2} = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = \\mathbf{15\\text{ cm}}$$
<p>Area of the base triangle ($A$):</p>
$$A = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 15 \\times 8 = \\mathbf{60\\text{ sq cm}}$$

<h4>Step 2: Find Height from Given Volume</h4>
<p>Volume of the prism is given by $V = A \\times h$:</p>
$$1020 = 60 \\times h$$
$$h = \\frac{1020}{60} = \\mathbf{17\\text{ cm}}$$
<p>The height of the prism is <b>$17\\text{ cm}$</b>.</p>`,
    solution_ml: `<h4>ഘട്ടം 1: മറ്റേ വശവും പാദപരപ്പളവും കാണൽ</h4>
<p>പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം:</p>
$$b = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = \\mathbf{15\\text{ cm}}$$
<p>പാദത്രികോണത്തിന്റെ പരപ്പളവ് ($A$):</p>
$$A = \\frac{1}{2} \\times 15 \\times 8 = \\mathbf{60\\text{ ച.സെ.മീ}}$$

<h4>ഘട്ടം 2: സ്തംഭത്തിന്റെ ഉയരം കാണൽ</h4>
$$V = A \\times h$$
$$1020 = 60 \\times h \\implies h = \\frac{1020}{60} = \\mathbf{17\\text{ cm}}$$
<p>സ്തംഭത്തിന്റെ ഉയരം <b>$17\\text{ cm}$</b> ആണ്.</p>`,
    tested_en: 'Right triangle base area computation and prism height inversion.',
    tested_ml: 'മട്ടത്രികോണ പാദപരപ്പളവും സ്തംഭത്തിന്റെ ഉയരവും കാണൽ.'
  },

  {
    id: 'w.m9.11.3',
    concept: 'm9.11.3.surface-area-of-prisms',
    sec: '9.11.3',
    type: 'written',
    marks: 4,
    time: 200,
    prompt_en: '<p>A prism has a regular hexagonal base with side length $6\\text{ cm}$ and height $15\\text{ cm}$.</p><p>(i) Calculate the lateral surface area of the prism.</p><p>(ii) Calculate the total surface area of the prism (giving your answer in exact form with $\\sqrt{3}$).</p>',
    prompt_ml: '<p>വശം $6\\text{ cm}$ ആയ സമഷഡ്ഭുജം പാദമായ ഒരു സ്തംഭത്തിന്റെ ഉയരം $15\\text{ cm}$ ആണ്.</p><p>(i) സ്തംഭത്തിന്റെ പാർശ്വപരപ്പളവ് കണക്കാക്കുക.</p><p>(ii) സ്തംഭത്തിന്റെ ആകെ ഉപരിതല പരപ്പളവ് കണക്കാക്കുക ($\\sqrt{3}$ ഉൾപ്പെടുന്ന കൃത്യമായ രൂപത്തിൽ എഴുതുക).</p>',
    solution_en: `<h4>Step 1: Calculate Lateral Surface Area</h4>
<p>Perimeter of regular hexagonal base ($P$):</p>
$$P = 6 \\times 6 = \\mathbf{36\\text{ cm}}$$
<p>Lateral Surface Area ($\\text{LSA}$):</p>
$$\\text{LSA} = P \\times h = 36 \\times 15 = \\mathbf{540\\text{ sq cm}}$$

<h4>Step 2: Calculate Area of Regular Hexagon and TSA</h4>
<p>A regular hexagon of side $s = 6\\text{ cm}$ is composed of $6$ equilateral triangles of side $6\\text{ cm}$:</p>
$$\\text{Area of 1 equilateral triangle} = \\frac{\\sqrt{3}}{4} s^2 = \\frac{\\sqrt{3}}{4} \\times 36 = 9\\sqrt{3}\\text{ sq cm}$$
$$\\text{Base Area } A = 6 \\times 9\\sqrt{3} = \\mathbf{54\\sqrt{3}\\text{ sq cm}}$$
<p>Total Surface Area ($\\text{TSA}$):</p>
$$\\text{TSA} = \\text{LSA} + 2A = 540 + 2(54\\sqrt{3}) = \\mathbf{540 + 108\\sqrt{3}\\text{ sq cm}}$$
<p>(Using $\\sqrt{3} \\approx 1.732$, $\\text{TSA} \\approx 540 + 187.06 = 727.06\\text{ sq cm}$).</p>`,
    solution_ml: `<h4>ഘട്ടം 1: പാർശ്വപരപ്പളവ് കണക്കാക്കൽ</h4>
<p>പാദചുറ്റളവ് $P = 6 \\times 6 = \\mathbf{36\\text{ cm}}$</p>
<p>പാർശ്വപരപ്പളവ് $= P \\times h = 36 \\times 15 = \\mathbf{540\\text{ ച.സെ.മീ}}$</p>

<h4>ഘട്ടം 2: പാദപരപ്പളവും ആകെ ഉപരിതല പരപ്പളവും</h4>
<p>സമഷഡ്ഭുജം $6$ സമഭുജ ത്രികോണങ്ങൾ ചേർന്നതാണ്:</p>
$$\\text{ഒരു ത്രികോണത്തിന്റെ പരപ്പളവ്} = \\frac{\\sqrt{3}}{4} \\times 6^2 = 9\\sqrt{3}\\text{ ച.സെ.മീ}$$
$$\\text{പാദപരപ്പളവ് } A = 6 \\times 9\\sqrt{3} = \\mathbf{54\\sqrt{3}\\text{ ച.സെ.മീ}}$$
<p>ആകെ ഉപരിതല പരപ്പളവ്:</p>
$$\\text{TSA} = \\text{പാർശ്വപരപ്പളവ്} + 2A = 540 + 2(54\\sqrt{3}) = \\mathbf{540 + 108\\sqrt{3}\\text{ ച.സെ.മീ}}$$`,
    tested_en: 'Hexagonal prism lateral and total surface area computation.',
    tested_ml: 'ഷഡ്ഭുജസ്തംഭത്തിന്റെ പാർശ്വപരപ്പളവും ആകെ പരപ്പളവും കാണൽ.'
  },

  {
    id: 'w.m9.11.4',
    concept: 'm9.11.4.cylinder-as-circular-prism',
    sec: '9.11.4',
    type: 'written',
    marks: 4,
    time: 200,
    prompt_en: '<p>A cylindrical water tank has a base diameter of $1.4\\text{ metres}$ and a height of $2\\text{ metres}$. (take $\\pi = \\frac{22}{7}$)</p><p>(i) Calculate the internal volume of the tank in cubic metres, and find how many litres of water it can hold (1 m³ = 1000 litres).</p><p>(ii) Calculate the total surface area of the closed tank.</p>',
    prompt_ml: '<p>വൃത്താകാരമായ ഒരു വാട്ടർ ടാങ്കിന്റെ പാദവ്യാസം $1.4\\text{ മീറ്റർ}$-ഉം ഉയരം $2\\text{ മീറ്റർ}$-ഉം ആണ്. ($\\pi = \\frac{22}{7}$)</p><p>(i) ടാങ്കിന്റെ ഉൾവ്യാപ്തം ക്യൂബിക് മീറ്ററിൽ കണ്ടെത്തുക. ഇതിൽ എത്ര ലിറ്റർ വെള്ളം കൊള്ളും എന്ന് കണക്കാക്കുക (1 m³ = 1000 ലിറ്റർ).</p><p>(ii) അടച്ച ഈ ടാങ്കിന്റെ ആകെ ഉപരിതല പരപ്പളവ് കണ്ടെത്തുക.</p>',
    solution_en: `<h4>Step 1: Calculate Volume and Water Capacity</h4>
<p>Radius $r = \\frac{d}{2} = \\frac{1.4}{2} = 0.7\\text{ m} = \\frac{7}{10}\\text{ m}$. Height $h = 2\\text{ m}$.</p>
$$\\text{Volume } V = \\pi r^2 h = \\frac{22}{7} \\times (0.7)^2 \\times 2 = \\frac{22}{7} \\times 0.49 \\times 2$$
$$V = 22 \\times 0.07 \\times 2 = \\mathbf{3.08\\text{ m}^3}$$
<p>Capacity in litres:</p>
$$\\text{Capacity} = 3.08 \\times 1000 = \\mathbf{3080\\text{ litres}}$$

<h4>Step 2: Calculate Total Surface Area</h4>
$$\\text{TSA} = 2\\pi r (r + h)$$
$$\\text{TSA} = 2 \\times \\frac{22}{7} \\times 0.7 \\times (0.7 + 2) = 2 \\times 22 \\times 0.1 \\times 2.7 = 4.4 \\times 2.7 = \\mathbf{11.88\\text{ sq metres}}$$`,
    solution_ml: `<h4>ഘട്ടം 1: വ്യാപ്തവും സംഭരണശേഷിയും</h4>
<p>ആരം $r = \\frac{1.4}{2} = 0.7\\text{ m}$. ഉയരം $h = 2\\text{ m}$.</p>
$$\\text{വ്യാപ്തം } V = \\pi r^2 h = \\frac{22}{7} \\times (0.7)^2 \\times 2 = \\mathbf{3.08\\text{ ഘന മീറ്റർ}}$$
<p>ലിറ്ററിലുള്ള അളവ്:</p>
$$\\text{സംഭരണശേഷി} = 3.08 \\times 1000 = \\mathbf{3080\\text{ ലിറ്റർ}}$$

<h4>ഘട്ടം 2: ആകെ ഉപരിതല പരപ്പളവ്</h4>
$$\\text{TSA} = 2\\pi r (r + h) = 2 \\times \\frac{22}{7} \\times 0.7 \\times (0.7 + 2) = 4.4 \\times 2.7 = \\mathbf{11.88\\text{ ചതുരശ്ര മീറ്റർ}}$$`,
    tested_en: 'Cylindrical volume, capacity conversion, and total surface area.',
    tested_ml: 'വൃത്തസ്തംഭത്തിന്റെ വ്യാപ്തവും ലിറ്റർ അളവും ആകെ പരപ്പളവും കാണൽ.'
  }
);
