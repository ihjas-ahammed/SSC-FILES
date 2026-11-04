/* ══════════════════════════════════════════════════════════════════════════
   Class 9 Mathematics — Chapter 7: Similar Triangles (സദൃശ ത്രികോണങ്ങൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     9.7.1 Concept of Similarity and the AA Similarity Criterion
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.7.1',
    concept: 'm9.7.1.concept-of-similarity-and-aa',
    sec: '9.7.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In $\\triangle ABC$ and $\\triangle DEF$, $\\angle A = 40^\\circ, \\angle B = 80^\\circ$, and in $\\triangle DEF$, $\\angle E = 80^\\circ, \\angle F = 60^\\circ$. Which statement is true?',
    prompt_ml: '$\\triangle ABC, \\triangle DEF$ എന്നിവയിൽ $\\angle A = 40^\\circ, \\angle B = 80^\\circ$-ഉം, $\\triangle DEF$-ൽ $\\angle E = 80^\\circ, \\angle F = 60^\\circ$-ഉം ആണ്. താഴെ പറയുന്നവയിൽ ശരിയായ പ്രസ്താവന ഏത്?',
    options_en: [
      { k: 'A', t: '$\\triangle ABC \\sim \\triangle DEF$' },
      { k: 'B', t: 'The triangles are not similar' },
      { k: 'C', t: '$\\triangle ABC \\cong \\triangle DEF$' },
      { k: 'D', t: 'Cannot be determined' }
    ],
    options_ml: [
      { k: 'A', t: '$\\triangle ABC \\sim \\triangle DEF$' },
      { k: 'B', t: 'ത്രികോണങ്ങൾ സദൃശമല്ല' },
      { k: 'C', t: '$\\triangle ABC \\cong \\triangle DEF$' },
      { k: 'D', t: 'തീരുമാനിക്കാൻ കഴിയില്ല' }
    ],
    answer: 'A',
    solution_en: 'In $\\triangle ABC$, $\\angle C = 180^\\circ - (40^\\circ + 80^\\circ) = 60^\\circ$. In $\\triangle DEF$, $\\angle D = 180^\\circ - (80^\\circ + 60^\\circ) = 40^\\circ$. Both triangles have angles $40^\\circ, 80^\\circ, 60^\\circ$; therefore they are similar by AA similarity.',
    solution_ml: '$\\triangle ABC$-യിൽ $\\angle C = 60^\\circ$. $\\triangle DEF$-ൽ $\\angle D = 40^\\circ$. രണ്ട് ത്രികോണങ്ങളിലെയും കോണുകൾ $40^\\circ, 80^\\circ, 60^\\circ$ ആയതിനാൽ AA സദൃശതാ തത്വപ്രകാരം സദൃശമാണ്.',
    tested_en: 'Equiangular triangles and AA similarity criterion.',
    tested_ml: 'കോണുകളുടെ തുല്യതയും AA സദൃശതാ തത്വവും.'
  },
  {
    id: 'obj.m9.7.2',
    concept: 'm9.7.1.concept-of-similarity-and-aa',
    sec: '9.7.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: '$\\triangle ABC \\sim \\triangle PQR$. If $AB = 6\\text{ cm}, BC = 8\\text{ cm}, AC = 10\\text{ cm}$, and the shortest side of $\\triangle PQR$ is $9\\text{ cm}$, what is the length of the longest side of $\\triangle PQR$?',
    prompt_ml: '$\\triangle ABC \\sim \\triangle PQR$ ആണ്. $AB = 6\\text{ cm}, BC = 8\\text{ cm}, AC = 10\\text{ cm}$ ആണ്. $\\triangle PQR$-ലെ ഏറ്റവും ചെറിയ വശം $9\\text{ cm}$ ആണെങ്കിൽ ഏറ്റവും വലിയ വശത്തിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$15\\text{ cm}$' },
      { k: 'B', t: '$12\\text{ cm}$' },
      { k: 'C', t: '$18\\text{ cm}$' },
      { k: 'D', t: '$20\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$15\\text{ cm}$' },
      { k: 'B', t: '$12\\text{ cm}$' },
      { k: 'C', t: '$18\\text{ cm}$' },
      { k: 'D', t: '$20\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'Shortest side of $\\triangle ABC$ is $6\\text{ cm}$. Scale factor $k = \\frac{9}{6} = 1.5$. The longest side of $\\triangle ABC$ is $10\\text{ cm}$. Longest side of $\\triangle PQR = 10 \\times 1.5 = 15\\text{ cm}$.',
    solution_ml: 'ചെറിയ വശങ്ങളുടെ അനുപാതം $\\frac{9}{6} = 1.5$. വലിയ വശത്തിന്റെ നീളം $= 10 \\times 1.5 = 15\\text{ cm}$.',
    tested_en: 'Corresponding side proportionality using scale factor.',
    tested_ml: 'സ്കെയിൽ ഫാക്ടർ ഉപയോഗിച്ച് അനുരൂപ വശത്തിന്റെ നീളം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.7.2 SAS and SSS Similarity Criteria
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.7.3',
    concept: 'm9.7.2.sas-and-sss-similarity',
    sec: '9.7.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In $\\triangle ABC$, $AB = 4\\text{ cm}, AC = 6\\text{ cm}$, and $\\angle A = 55^\\circ$. In $\\triangle DEF$, $DE = 8\\text{ cm}, DF = 12\\text{ cm}$, and $\\angle D = 55^\\circ$. Are the two triangles similar, and by which criterion?',
    prompt_ml: '$\\triangle ABC$-യിൽ $AB = 4\\text{ cm}, AC = 6\\text{ cm}, \\angle A = 55^\\circ$. $\\triangle DEF$-ൽ $DE = 8\\text{ cm}, DF = 12\\text{ cm}, \\angle D = 55^\\circ$. ഈ ത്രികോണങ്ങൾ സദൃശമാണോ, ഏത് തത്വപ്രകാരം?',
    options_en: [
      { k: 'A', t: 'Yes, by SAS similarity criterion' },
      { k: 'B', t: 'Yes, by AA similarity criterion' },
      { k: 'C', t: 'Yes, by SSS similarity criterion' },
      { k: 'D', t: 'No, they are not similar' }
    ],
    options_ml: [
      { k: 'A', t: 'അതെ, SAS സദൃശതാ തത്വപ്രകാരം' },
      { k: 'B', t: 'അതെ, AA സദൃശതാ തത്വപ്രകാരം' },
      { k: 'C', t: 'അതെ, SSS സദൃശതാ തത്വപ്രകാരം' },
      { k: 'D', t: 'അല്ല, അവ സദൃശമല്ല' }
    ],
    answer: 'A',
    solution_en: 'The ratio of including sides is $\\frac{DE}{AB} = \\frac{8}{4} = 2$ and $\\frac{DF}{AC} = \\frac{12}{6} = 2$. The included angles are equal: $\\angle A = \\angle D = 55^\\circ$. Hence similar by SAS criterion.',
    solution_ml: 'വശങ്ങളുടെ അനുപാതം $\\frac{8}{4} = \\frac{12}{6} = 2$, ഉൾക്കൊള്ളുന്ന കോൺ $55^\\circ$ തുല്യമാണ്. അതിനാൽ $SAS$ തത്വപ്രകാരം സദൃശമാണ്.',
    tested_en: 'SAS similarity criterion identification.',
    tested_ml: '$SAS$ സദൃശതാ തത്വം തിരിച്ചറിയൽ.'
  },
  {
    id: 'obj.m9.7.4',
    concept: 'm9.7.2.sas-and-sss-similarity',
    sec: '9.7.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The sides of $\\triangle ABC$ are $5, 7, 8$. Which of the following side length sets forms a triangle similar to $\\triangle ABC$?',
    prompt_ml: '$\\triangle ABC$-യുടെ വശങ്ങൾ $5, 7, 8$ ആണ്. താഴെ പറയുന്നവയിൽ $\\triangle ABC$-ക്ക് സദൃശമായ ത്രികോണത്തിന്റെ വശങ്ങൾ ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$15, 21, 24$' },
      { k: 'B', t: '$10, 14, 18$' },
      { k: 'C', t: '$7, 9, 10$' },
      { k: 'D', t: '$10, 12, 16$' }
    ],
    options_ml: [
      { k: 'A', t: '$15, 21, 24$' },
      { k: 'B', t: '$10, 14, 18$' },
      { k: 'C', t: '$7, 9, 10$' },
      { k: 'D', t: '$10, 12, 16$' }
    ],
    answer: 'A',
    solution_en: 'Multiplying each side of $(5, 7, 8)$ by 3 gives $(15, 21, 24)$, maintaining a strict $1 : 3$ ratio for all three sides (SSS similarity).',
    solution_ml: 'എല്ലാ വശങ്ങളെയും 3 കൊണ്ട് ഗുണിച്ചാൽ $15, 21, 24$ ലഭിക്കുന്നു. $SSS$ തത്വപ്രകാരം ഇത് സദൃശമാണ്.',
    tested_en: 'SSS similarity side ratio preservation.',
    tested_ml: '$SSS$ സദൃശതയിലെ വശങ്ങളുടെ അനുപാതം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.7.3 Right Triangle Altitude and Geometric Mean Relations
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.7.5',
    concept: 'm9.7.3.right-triangle-altitude-similarity',
    sec: '9.7.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In a right triangle, the altitude drawn from the right angle to the hypotenuse divides the hypotenuse into segments of length $3\\text{ cm}$ and $12\\text{ cm}$. What is the length of the altitude?',
    prompt_ml: 'ഒരു മട്ടത്രികോണത്തിൽ മട്ടകോണിൽ നിന്ന് കർണ്ണത്തിലേക്ക് വരച്ച ലംബം കർണ്ണത്തെ $3\\text{ cm}$, $12\\text{ cm}$ നീളമുള്ള ഭാഗങ്ങളായി ഭാഗിക്കുന്നു. ഈ ലംബത്തിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$7.5\\text{ cm}$' },
      { k: 'C', t: '$9\\text{ cm}$' },
      { k: 'D', t: '$4\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$7.5\\text{ cm}$' },
      { k: 'C', t: '$9\\text{ cm}$' },
      { k: 'D', t: '$4\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'By the geometric mean altitude theorem: $h = \\sqrt{p \\times q} = \\sqrt{3 \\times 12} = \\sqrt{36} = 6\\text{ cm}$.',
    solution_ml: 'ജ്യാമിതീയ ശരാശരി സിദ്ധാന്തപ്രകാരം: $h = \\sqrt{3 \\times 12} = \\sqrt{36} = 6\\text{ cm}$.',
    tested_en: 'Altitude to hypotenuse as geometric mean of segments.',
    tested_ml: 'കർണ്ണത്തിലേക്കുള്ള ലംബത്തിന്റെ നീളം കാണൽ.'
  },
  {
    id: 'obj.m9.7.6',
    concept: 'm9.7.3.right-triangle-altitude-similarity',
    sec: '9.7.3',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In right-angled $\\triangle ABC$ with $\\angle C = 90^\\circ$ and altitude $CD \\perp AB$, hypotenuse $AB = 16\\text{ cm}$ and segment $AD = 4\\text{ cm}$. What is the length of leg $AC$?',
    prompt_ml: '$\\angle C = 90^\\circ$ ആയ മട്ടത്രികോണം $ABC$-യിൽ കർണ്ണത്തിലേക്കുള്ള ലംബമാണ് $CD$. കർണ്ണം $AB = 16\\text{ cm}$, $AD = 4\\text{ cm}$ ആയാൽ $AC$ എന്ന വശത്തിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$8\\text{ cm}$' },
      { k: 'B', t: '$6\\text{ cm}$' },
      { k: 'C', t: '$12\\text{ cm}$' },
      { k: 'D', t: '$4\\sqrt{3}\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$8\\text{ cm}$' },
      { k: 'B', t: '$6\\text{ cm}$' },
      { k: 'C', t: '$12\\text{ cm}$' },
      { k: 'D', t: '$4\\sqrt{3}\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'Leg squared equals hypotenuse times adjacent segment: $AC^2 = AB \\times AD = 16 \\times 4 = 64 \\implies AC = \\sqrt{64} = 8\\text{ cm}$.',
    solution_ml: '$AC^2 = AB \\times AD = 16 \\times 4 = 64 \\implies AC = \\sqrt{64} = 8\\text{ cm}$.',
    tested_en: 'Leg length geometric mean relation with hypotenuse.',
    tested_ml: 'കർണ്ണവും ലംബവശവും തമ്മിലുള്ള ജ്യാമിതീയ ശരാശരി ബന്ധം.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     9.7.4 Perimeter and Area Ratios of Similar Triangles
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m9.7.7',
    concept: 'm9.7.4.perimeter-and-area-ratios',
    sec: '9.7.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The ratio of corresponding sides of two similar triangles is $2 : 5$. If the area of the smaller triangle is $24\\text{ sq cm}$, what is the area of the larger triangle?',
    prompt_ml: 'രണ്ട് സദൃശ ത്രികോണങ്ങളിലെ അനുരൂപ വശങ്ങളുടെ അംശബന്ധം $2 : 5$ ആണ്. ചെറിയ ത്രികോണത്തിന്റെ പരപ്പളവ് $24\\text{ ച.സെ.മീ}$ ആയാൽ വലിയ ത്രികോണത്തിന്റെ പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$150\\text{ sq cm}$' },
      { k: 'B', t: '$60\\text{ sq cm}$' },
      { k: 'C', t: '$120\\text{ sq cm}$' },
      { k: 'D', t: '$100\\text{ sq cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$150\\text{ ച.സെ.മീ}$' },
      { k: 'B', t: '$60\\text{ ച.സെ.മീ}$' },
      { k: 'C', t: '$120\\text{ ച.സെ.മീ}$' },
      { k: 'D', t: '$100\\text{ ച.സെ.മീ}$' }
    ],
    answer: 'A',
    solution_en: 'Ratio of areas is the square of the side ratio: $\\frac{\\text{Area}_1}{\\text{Area}_2} = \\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$. Hence $\\text{Area}_2 = 24 \\times \\frac{25}{4} = 6 \\times 25 = 150\\text{ sq cm}$.',
    solution_ml: 'പരപ്പളവുകളുടെ അംശബന്ധം വശങ്ങളുടെ അനുപാതത്തിന്റെ വർഗ്ഗമാണ്: $\\frac{4}{25}$. വലിയ പരപ്പളവ് $= 24 \\times \\frac{25}{4} = 150\\text{ ച.സെ.മീ}$.',
    tested_en: 'Area ratio of similar triangles as square of side ratio.',
    tested_ml: 'സദൃശ ത്രികോണങ്ങളുടെ പരപ്പളവ് അനുപാതം കാണൽ.'
  },
  {
    id: 'obj.m9.7.8',
    concept: 'm9.7.4.perimeter-and-area-ratios',
    sec: '9.7.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The areas of two similar triangles are $49\\text{ sq cm}$ and $81\\text{ sq cm}$. If the perimeter of the smaller triangle is $28\\text{ cm}$, what is the perimeter of the larger triangle?',
    prompt_ml: 'രണ്ട് സദൃശ ത്രികോണങ്ങളുടെ പരപ്പളവുകൾ $49\\text{ ച.സെ.മീ}$, $81\\text{ ച.സെ.മീ}$ ആണ്. ചെറിയ ത്രികോണത്തിന്റെ ചുറ്റളവ് $28\\text{ cm}$ ആയാൽ വലിയ ത്രികോണത്തിന്റെ ചുറ്റളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$36\\text{ cm}$' },
      { k: 'B', t: '$42\\text{ cm}$' },
      { k: 'C', t: '$32\\text{ cm}$' },
      { k: 'D', t: '$45\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$36\\text{ cm}$' },
      { k: 'B', t: '$42\\text{ cm}$' },
      { k: 'C', t: '$32\\text{ cm}$' },
      { k: 'D', t: '$45\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: 'Ratio of sides and perimeters is the square root of the area ratio: $\\frac{P_1}{P_2} = \\sqrt{\\frac{49}{81}} = \\frac{7}{9}$. Therefore $P_2 = 28 \\times \\frac{9}{7} = 4 \\times 9 = 36\\text{ cm}$.',
    solution_ml: 'ചുറ്റളവുകളുടെ അംശബന്ധം $= \\sqrt{\\frac{49}{81}} = \\frac{7}{9}$. വലിയ ചുറ്റളവ് $= 28 \\times \\frac{9}{7} = 36\\text{ cm}$.',
    tested_en: 'Perimeter ratio from area ratio of similar triangles.',
    tested_ml: 'പരപ്പളവിൽ നിന്ന് ചുറ്റളവ് കാണൽ.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m9.7.1',
    sec: '9.7.1',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.7.1.concept-of-similarity-and-aa',
    tested_en: 'Indirect height calculation using shadow lengths and AA similarity',
    tested_ml: 'നിഴലളവുകളും AA സദൃശതയും ഉപയോഗിച്ച് ഉയരം കണക്കാക്കൽ',
    title_en: 'Indirect Height Measurement Using Shadows and AA Similarity',
    title_ml: 'നിഴലളവുകളും AA സദൃശതയും ഉപയോഗിച്ച് ഉയരം കണ്ടെത്തൽ',
    prompt_en: '<p>A vertical flagpole casts a shadow of length $12\\text{ m}$ on level ground at the same moment when a vertical meter rule of height $1.5\\text{ m}$ casts a shadow of length $2\\text{ m}$. Prove that the two triangles formed by the objects and their shadows are similar, and calculate the exact height of the flagpole.</p>',
    prompt_ml: '<p>ഒരു നിശ്ചിത സമയത്ത് $1.5\\text{ m}$ ഉയരമുള്ള ഒരു ലംബമായ കോൽ നിലത്ത് $2\\text{ m}$ നീളമുള്ള നിഴൽ വീഴ്ത്തുന്നു. അതേ സമയം സമീപത്തുള്ള കൊടിമരം $12\\text{ m}$ നീളമുള്ള നിഴൽ വീഴ്ത്തുന്നു. വസ്തുക്കളും അവയുടെ നിഴലുകളും ചേർന്നുണ്ടാക്കുന്ന ത്രികോണങ്ങൾ സദൃശമാണെന്ന് തെളിയിക്കുകയും കൊടിമരത്തിന്റെ ഉയരം കണക്കാക്കുകയും ചെയ്യുക.</p>',
    solution_en: `$$\\text{Step 1: Identifying the Angles of Both Triangles}$$
$$\\text{Let the flagpole be } AB = h, \\text{ shadow } BC = 12\\text{ m}. \\text{ The angle of elevation of the sun is } \\angle C = \\theta.$$
$$\\text{Let the vertical meter rule be } PQ = 1.5\\text{ m}, \\text{ shadow } QR = 2\\text{ m}. \\text{ The angle of elevation of the sun is } \\angle R = \\theta.$$

$$\\text{Step 2: Proving AA Similarity}$$
$$\\text{In } \\triangle ABC \\text{ and } \\triangle PQR:$$
$$\\angle B = \\angle Q = 90^\\circ \\quad (\\text{both objects stand vertically upright})$$
$$\\angle C = \\angle R = \\theta \\quad (\\text{sun rays are parallel at the same moment})$$
$$\\text{By the AA Similarity Criterion: } \\mathbf{\\triangle ABC \\sim \\triangle PQR}$$

$$\\text{Step 3: Calculating Flagpole Height } h$$
$$\\text{Since corresponding sides of similar triangles are in the same ratio:}$$
$$\\frac{AB}{PQ} = \\frac{BC}{QR}$$
$$\\frac{h}{1.5} = \\frac{12}{2} = 6$$
$$h = 1.5 \\times 6 = \\mathbf{9\\text{ metres}}$$
$$\\text{The height of the flagpole is } \\mathbf{9\\text{ m}}.$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: ത്രികോണങ്ങളിലെ കോണുകൾ നിശ്ചയിക്കൽ}$$
$$\\text{കൊടിമരത്തിന്റെ ഉയരം } AB = h, \\text{ നിഴൽ } BC = 12\\text{ m}.$$
$$\\text{കോലിന്റെ ഉയരം } PQ = 1.5\\text{ m}, \\text{ നിഴൽ } QR = 2\\text{ m}.$$
$$\\text{ഒരേ സമയത്ത് സൂര്യരശ്മികൾ സമാന്തരമായതിനാൽ സൂര്യന്റെ ഉന്നതികോൺ } (\\theta) \\text{ തുല്യമായിരിക്കും.}$$

$$\\text{ഘട്ടം 2: AA സദൃശത തെളിയിക്കൽ}$$
$$\\triangle ABC, \\triangle PQR \\text{ എന്നിവയിൽ:}$$
$$\\angle B = \\angle Q = 90^\\circ \\quad (\\text{രണ്ടും ലംബമായി നിൽക്കുന്നു})$$
$$\\angle C = \\angle R = \\theta \\quad (\\text{സൂര്യരശ്മികൾ ഉണ്ടാക്കുന്ന കോൺ})$$
$$\\text{AA സദൃശതാ തത്വപ്രകാരം: } \\mathbf{\\triangle ABC \\sim \\triangle PQR}$$

$$\\text{ഘട്ടം 3: കൊടിമരത്തിന്റെ ഉയരം കാണൽ}$$
$$\\frac{AB}{PQ} = \\frac{BC}{QR} \\implies \\frac{h}{1.5} = \\frac{12}{2} = 6$$
$$h = 1.5 \\times 6 = \\mathbf{9\\text{ മീറ്റർ}}$$`
  },

  {
    id: 'w.m9.7.2',
    sec: '9.7.2',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.7.2.sas-and-sss-similarity',
    tested_en: 'Trapezium diagonal intersection similarity and side ratios',
    tested_ml: 'ലംബക വികർണ്ണ വിഭജനത്തിലെ സദൃശതയും വശങ്ങളുടെ ആനുപാതികതയും',
    title_en: 'SAS Similarity in a Trapezium and Ratio of Bases',
    title_ml: 'ലംബകത്തിലെ SAS സദൃശതയും പാദങ്ങളുടെ അംശബന്ധവും',
    prompt_en: '<p>In trapezium $ABCD$, side $AB$ is parallel to $CD$ ($AB \\parallel CD$), and the diagonals $AC$ and $BD$ intersect at point $O$. Prove that $\\triangle OAB \\sim \\triangle OCD$, and deduce that $\\frac{OA}{OC} = \\frac{OB}{OD} = \\frac{AB}{CD}$.</p>',
    prompt_ml: '<p>ലംബകം $ABCD$-യിൽ $AB, CD$ എന്നിവ സമാന്തരങ്ങളാണ് ($AB \\parallel CD$). വികർണ്ണങ്ങളായ $AC, BD$ എന്നിവ $O$ എന്ന ബിന്ദുവിൽ പരസ്പരം ഛേദിക്കുന്നു. $\\triangle OAB \\sim \\triangle OCD$ എന്ന് തെളിയിക്കുകയും $\\frac{OA}{OC} = \\frac{OB}{OD} = \\frac{AB}{CD}$ എന്ന് സമർത്ഥിക്കുകയും ചെയ്യുക.</p>',
    solution_en: `$$\\text{Step 1: Angle Relations from Parallel Lines}$$
$$\\text{Since } AB \\parallel CD \\text{ and transversal } AC \\text{ cuts them:}$$
$$\\angle OAB = \\angle OCD \\quad (\\text{alternate interior angles})$$
$$\\text{Similarly, transversal } BD \\text{ cuts them:}$$
$$\\angle OBA = \\angle ODC \\quad (\\text{alternate interior angles})$$
$$\\text{Also, at the intersection:}$$
$$\\angle AOB = \\angle COD \\quad (\\text{vertically opposite angles})$$

$$\\text{Step 2: Establishing Similarity}$$
$$\\text{Since all three corresponding angles are equal:}$$
$$\\mathbf{\\triangle OAB \\sim \\triangle OCD} \\quad (\\text{by AA / AAA Similarity Criterion})$$

$$\\text{Step 3: Deductions of Proportionality}$$
$$\\text{Since corresponding sides of similar triangles are proportional:}$$
$$\\mathbf{\\frac{OA}{OC} = \\frac{OB}{OD} = \\frac{AB}{CD}}$$
$$\\text{This fundamental result proves that the diagonals of any trapezium divide each other proportionally.}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: സമാന്തരവരകളിലെ കോണുകൾ}$$
$$AB \\parallel CD \\text{ ആയതിനാൽ:}$$
$$\\angle OAB = \\angle OCD \\quad (\\text{ഏകാന്തര കോണുകൾ})$$
$$\\angle OBA = \\angle ODC \\quad (\\text{ഏകാന്തര കോണുകൾ})$$
$$\\angle AOB = \\angle COD \\quad (\\text{എതിർക്കോണുകൾ})$$

$$\\text{ഘട്ടം 2: സദൃശത ഉറപ്പാക്കൽ}$$
$$\\text{കോണുകൾ തുല്യമായതിനാൽ AA തത്വപ്രകാരം:}$$
$$\\mathbf{\\triangle OAB \\sim \\triangle OCD}$$

$$\\text{ഘട്ടം 3: അനുപാത സമവാക്യം}$$
$$\\text{സദൃശ ത്രികോണങ്ങളിലെ അനുരൂപ വശങ്ങൾ ആനുപാതികമായതിനാൽ:}$$
$$\\mathbf{\\frac{OA}{OC} = \\frac{OB}{OD} = \\frac{AB}{CD}}$$`
  },

  {
    id: 'w.m9.7.3',
    sec: '9.7.3',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.7.3.right-triangle-altitude-similarity',
    tested_en: 'Right triangle altitude similarity, geometric mean, and Pythagoras derivation',
    tested_ml: 'മട്ടത്രികോണ ലംബ സദൃശത, ജ്യാമിതീയ ശരാശരി, പൈതഗോറസ് തത്വ തെളിവ്',
    title_en: 'Proof of the Altitude to Hypotenuse Geometric Mean Theorem',
    title_ml: 'കർണ്ണത്തിലേക്കുള്ള ലംബത്തിന്റെ ജ്യാമിതീയ ശരാശരി സിദ്ധാന്ത തെളിവ്',
    prompt_en: '<p>In right-angled triangle $\\triangle ABC$, $\\angle C = 90^\\circ$ and $CD$ is the altitude drawn perpendicular to hypotenuse $AB$. Prove that $\\triangle ACD \\sim \\triangle CBD$, and deduce the geometric mean relation $CD^2 = AD \\times DB$. Also derive the Pythagorean theorem from these similarities.</p>',
    prompt_ml: '<p>മട്ടത്രികോണം $\\triangle ABC$-യിൽ $\\angle C = 90^\\circ$-ഉം, $CD$ കർണ്ണമായ $AB$-യിലേക്കുള്ള ലംബവുമാണ്. $\\triangle ACD \\sim \\triangle CBD$ എന്ന് തെളിയിക്കുകയും $CD^2 = AD \\times DB$ എന്ന ജ്യാമിതീയ ശരാശരി സമവാക്യം രൂപീകരിക്കുകയും ചെയ്യുക. ഈ സദൃശതകൾ ഉപയോഗിച്ച് പൈതഗോറസ് സിദ്ധാന്തം തെളിയിക്കുക.</p>',
    solution_en: `$$\\text{Step 1: Angle Analysis}$$
$$\\text{In } \\triangle ABC, \\, \\angle C = 90^\\circ. \\text{ Let } \\angle A = \\alpha \\implies \\angle B = 90^\\circ - \\alpha.$$
$$\\text{In right-angled } \\triangle ACD: \\, \\angle ADC = 90^\\circ, \\, \\angle CAD = \\alpha \\implies \\angle ACD = 90^\\circ - \\alpha = \\angle B.$$
$$\\text{In right-angled } \\triangle CBD: \\, \\angle BDC = 90^\\circ, \\, \\angle CBD = 90^\\circ - \\alpha \\implies \\angle BCD = \\alpha = \\angle A.$$

$$\\text{Step 2: Proving Similarity}$$
$$\\text{By AA similarity: } \\mathbf{\\triangle ACD \\sim \\triangle CBD \\sim \\triangle ABC}$$

$$\\text{Step 3: Altitude Geometric Mean Relation}$$
$$\\text{From } \\triangle ACD \\sim \\triangle CBD: \\quad \\frac{CD}{DB} = \\frac{AD}{CD}$$
$$\\mathbf{CD^2 = AD \\times DB} \\quad (h^2 = p \\cdot q)$$

$$\\text{Step 4: Deduction of the Pythagorean Theorem}$$
$$\\text{From } \\triangle ACD \\sim \\triangle ABC: \\quad \\frac{AC}{AB} = \\frac{AD}{AC} \\implies AC^2 = AB \\times AD$$
$$\\text{From } \\triangle CBD \\sim \\triangle ABC: \\quad \\frac{BC}{AB} = \\frac{BD}{BC} \\implies BC^2 = AB \\times BD$$
$$\\text{Adding the two equations:}$$
$$AC^2 + BC^2 = AB(AD + BD) = AB \\times AB = \\mathbf{AB^2}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: കോണുകളുടെ വിശകലനം}$$
$$\\angle A = \\alpha \\text{ ആയാൽ } \\angle B = 90^\\circ - \\alpha.$$
$$\\triangle ACD\\text{-ൽ } \\angle ACD = 90^\\circ - \\alpha = \\angle B.$$
$$\\triangle CBD\\text{-ൽ } \\angle BCD = \\alpha = \\angle A.$$

$$\\text{ഘട്ടം 2: സദൃശത തെളിയിക്കൽ}$$
$$\\text{AA സദൃശതാ തത്വപ്രകാരം: } \\mathbf{\\triangle ACD \\sim \\triangle CBD \\sim \\triangle ABC}$$

$$\\text{ഘട്ടം 3: ലംബത്തിന്റെ വർഗ്ഗം കാണൽ}$$
$$\\frac{CD}{DB} = \\frac{AD}{CD} \\implies \\mathbf{CD^2 = AD \\times DB}$$

$$\\text{ഘട്ടം 4: പൈതഗോറസ് സിദ്ധാന്ത തെളിവ്}$$
$$AC^2 = AB \\times AD$$
$$BC^2 = AB \\times BD$$
$$\\text{ഇവ കൂട്ടുമ്പോൾ: } AC^2 + BC^2 = AB(AD + BD) = AB \\times AB = \\mathbf{AB^2}$$`
  },

  {
    id: 'w.m9.7.4',
    sec: '9.7.4',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.7.4.perimeter-and-area-ratios',
    tested_en: 'Ratio of areas of similar triangles and trapezium area calculation',
    tested_ml: 'സദൃശ ത്രികോണങ്ങളുടെ പരപ്പളവുകളുടെ അംശബന്ധവും ലംബക പരപ്പളവും',
    title_en: 'Area Ratio and Trapezium Area Partitioning in Similar Triangles',
    title_ml: 'സദൃശ ത്രികോണങ്ങളിലെ പരപ്പളവ് അനുപാതവും ലംബക പരപ്പളവും',
    prompt_en: '<p>In $\\triangle ABC$, a line $DE$ is drawn parallel to base $BC$ ($DE \\parallel BC$) with $D$ on $AB$ and $E$ on $AC$, such that $AD : DB = 2 : 3$. If the area of $\\triangle ABC$ is $100\\text{ sq cm}$, calculate the area of $\\triangle ADE$ and the area of trapezium $BDEC$.</p>',
    prompt_ml: '<p>$\\triangle ABC$-യിൽ $BC$-ക്ക് സമാന്തരമായി $DE$ എന്ന വര വരച്ചിരിക്കുന്നു ($DE \\parallel BC$). $D, E$ എന്നിവ യഥാക്രമം $AB, AC$ എന്നിവയിലാണ്. $AD : DB = 2 : 3$ ആണ്. $\\triangle ABC$-യുടെ പരപ്പളവ് $100\\text{ ച.സെ.മീ}$ ആണെങ്കിൽ $\\triangle ADE$-യുടെ പരപ്പളവും $BDEC$ എന്ന ലംബകത്തിന്റെ പരപ്പളവും കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{Step 1: Scale Factor Analysis}$$
$$\\text{Given } AD : DB = 2 : 3. \\text{ Total side } AB = AD + DB = 2k + 3k = 5k.$$
$$\\text{Scale factor of } \\triangle ADE \\text{ to } \\triangle ABC: \\quad \\frac{AD}{AB} = \\frac{2}{5}$$

$$\\text{Step 2: Proving Similarity}$$
$$\\text{Since } DE \\parallel BC, \\, \\angle ADE = \\angle B \\text{ and } \\angle AED = \\angle C \\text{ (corresponding angles).}$$
$$\\triangle ADE \\sim \\triangle ABC \\quad (\\text{by AA Similarity})$$

$$\\text{Step 3: Area of } \\triangle ADE$$
$$\\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle ABC)} = \\left(\\frac{AD}{AB}\\right)^2 = \\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$$
$$\\text{Area}(\\triangle ADE) = \\frac{4}{25} \\times 100 = 4 \\times 4 = \\mathbf{16\\text{ sq cm}}$$

$$\\text{Step 4: Area of Trapezium } BDEC$$
$$\\text{Area}(BDEC) = \\text{Area}(\\triangle ABC) - \\text{Area}(\\triangle ADE) = 100 - 16 = \\mathbf{84\\text{ sq cm}}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: വശങ്ങളുടെ അംശബന്ധം}$$
$$AD : DB = 2 : 3 \\implies AB = 2 + 3 = 5 \\text{ ഭാഗങ്ങൾ.}$$
$$\\frac{AD}{AB} = \\frac{2}{5}$$

$$\\text{ഘട്ടം 2: സദൃശത ഉറപ്പാക്കൽ}$$
$$DE \\parallel BC \\text{ ആയതിനാൽ } \\triangle ADE \\sim \\triangle ABC.$$

$$\\text{ഘട്ടം 3: } \\triangle ADE\\text{-യുടെ പരപ്പളവ്}$$
$$\\frac{\\text{പരപ്പളവ്}(\\triangle ADE)}{\\text{പരപ്പളവ്}(\\triangle ABC)} = \\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$$
$$\\text{പരപ്പളവ്}(\\triangle ADE) = \\frac{4}{25} \\times 100 = \\mathbf{16\\text{ ച.സെ.മീ}}$$

$$\\text{ഘട്ടം 4: ലംബകം } BDEC\\text{-ന്റെ പരപ്പളവ്}$$
$$\\text{പരപ്പളവ്}(BDEC) = 100 - 16 = \\mathbf{84\\text{ ച.സെ.മീ}}$$`
  },

  {
    id: 'w.m9.7.5',
    sec: '9.7.3',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.7.3.right-triangle-altitude-similarity',
    tested_en: 'Right-triangle altitude geometric mean and side length computations',
    tested_ml: 'മട്ടത്രികോണ ലംബത്തിന്റെ ജ്യാമിതീയ ശരാശരിയും വശങ്ങളുടെ നീളവും കണക്കാക്കൽ',
    title_en: 'Perpendicular from Right Angle and Side Length Computations',
    title_ml: 'മട്ടകോണിൽ നിന്നുള്ള ലംബവും വശങ്ങളുടെ നീളവും കണക്കാക്കൽ',
    prompt_en: '<p>In right-angled triangle $\\triangle ABC$, $\\angle B = 90^\\circ$. An altitude $BD$ is drawn perpendicular to hypotenuse $AC$. If $AD = 4\\text{ cm}$ and $DC = 9\\text{ cm}$:<br>(a) Find the length of altitude $BD$.<br>(b) Calculate the lengths of sides $AB$ and $BC$.</p>',
    prompt_ml: '<p>മട്ടത്രികോണം $\\triangle ABC$-ൽ $\\angle B = 90^\\circ$ ആണ്. കർണ്ണം $AC$-യിലേക്ക് $BD$ എന്ന ലംബം വരച്ചിരിക്കുന്നു. $AD = 4\\text{ cm}$, $DC = 9\\text{ cm}$ ആണെങ്കിൽ:<br>(a) ലംബം $BD$-യുടെ നീളം കണ്ടെത്തുക.<br>(b) $AB, BC$ എന്നീ വശങ്ങളുടെ നീളങ്ങൾ കണക്കാക്കുക.</p>',
    solution_en: `$$\\text{(a) Using the geometric mean theorem for the altitude:}$$
$$BD^2 = AD \\times DC = 4 \\times 9 = 36 \\implies BD = \\sqrt{36} = \\mathbf{6\\text{ cm}}.$$

$$\\text{(b) Hypotenuse } AC = AD + DC = 4 + 9 = 13\\text{ cm}.$$
$$\\text{Using the geometric mean relations for sides:}$$
$$AB^2 = AC \\times AD = 13 \\times 4 = 52 \\implies AB = \\sqrt{52} = \\mathbf{2\\sqrt{13}\\text{ cm}}.$$
$$BC^2 = AC \\times DC = 13 \\times 9 = 117 \\implies BC = \\sqrt{117} = \\mathbf{3\\sqrt{13}\\text{ cm}}.$$`,
    solution_ml: `$$\\text{(a) ലംബത്തിന്റെ ജ്യാമിതീയ ശരാശരി സമവാക്യം:}$$
$$BD^2 = AD \\times DC = 4 \\times 9 = 36 \\implies BD = \\mathbf{6\\text{ cm}}.$$

$$\\text{(b) കർണ്ണം } AC = 4 + 9 = 13\\text{ cm}.$$
$$AB^2 = AC \\times AD = 13 \\times 4 = 52 \\implies AB = \\mathbf{2\\sqrt{13}\\text{ cm}}.$$
$$BC^2 = AC \\times DC = 13 \\times 9 = 117 \\implies BC = \\mathbf{3\\sqrt{13}\\text{ cm}}.$$`
  },

  {
    id: 'w.m9.7.6',
    sec: '9.7.4',
    type: 'written',
    marks: 4,
    time: 180,
    concept: 'm9.7.4.perimeter-and-area-ratios',
    tested_en: 'Perimeter, side length, and area ratios of similar triangles',
    tested_ml: 'സദൃശ ത്രികോണങ്ങളുടെ ചുറ്റളവ്, വശം, പരപ്പളവ് എന്നിവയുടെ അനുപാതങ്ങൾ',
    title_en: 'Perimeter and Area Relations of Similar Triangles',
    title_ml: 'സദൃശ ത്രികോണങ്ങളിലെ ചുറ്റളവും പരപ്പളവും തമ്മിലുള്ള ബന്ധം',
    prompt_en: '<p>Two similar triangles $\\triangle ABC$ and $\\triangle DEF$ have perimeters $36\\text{ cm}$ and $48\\text{ cm}$ respectively.<br>(a) Find the ratio of their corresponding sides.<br>(b) If the area of $\\triangle ABC$ is $81\\text{ sq cm}$, calculate the area of $\\triangle DEF$.<br>(c) If side $AB = 9\\text{ cm}$, find the length of corresponding side $DE$.</p>',
    prompt_ml: '<p>രണ്ട് സദൃശ ത്രികോണങ്ങളായ $\\triangle ABC, \\triangle DEF$ എന്നിവയുടെ ചുറ്റളവുകൾ യഥാക്രമം $36\\text{ cm}$, $48\\text{ cm}$ ആണ്.<br>(a) അവയുടെ അനുരൂപ വശങ്ങളുടെ അംശബന്ധം കണ്ടെത്തുക.<br>(b) $\\triangle ABC$-യുടെ പരപ്പളവ് $81\\text{ ച.സെ.മീ}$ ആണെങ്കിൽ $\\triangle DEF$-ന്റെ പരപ്പളവ് കണക്കാക്കുക.<br>(c) വശം $AB = 9\\text{ cm}$ ആണെങ്കിൽ അനുരൂപ വശമായ $DE$-യുടെ നീളം കണ്ടെത്തുക.</p>',
    solution_en: `$$\\text{(a) Ratio of corresponding sides equals the ratio of perimeters:}$$
$$\\frac{AB}{DE} = \\frac{\\text{Perimeter}(\\triangle ABC)}{\\text{Perimeter}(\\triangle DEF)} = \\frac{36}{48} = \\mathbf{\\frac{3}{4}} \\quad (3 : 4).$$

$$\\text{(b) Ratio of areas is the square of the side ratio:}$$
$$\\frac{\\text{Area}(\\triangle ABC)}{\\text{Area}(\\triangle DEF)} = \\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$$
$$\\frac{81}{\\text{Area}(\\triangle DEF)} = \\frac{9}{16} \\implies \\text{Area}(\\triangle DEF) = \\frac{81 \\times 16}{9} = \\mathbf{144\\text{ sq cm}}.$$

$$\\text{(c) Length of side } DE:$$
$$\\frac{9}{DE} = \\frac{3}{4} \\implies DE = \\frac{9 \\times 4}{3} = \\mathbf{12\\text{ cm}}.$$`,
    solution_ml: `$$\\text{(a) അനുരൂപ വശങ്ങളുടെ അംശബന്ധം ചുറ്റളവുകളുടെ അംശബന്ധത്തിന് തുല്യമാണ്:}$$
$$\\frac{AB}{DE} = \\frac{36}{48} = \\mathbf{\\frac{3}{4}} \\quad (3 : 4).$$

$$\\text{(b) പരപ്പളവുകളുടെ അംശബന്ധം വശങ്ങളുടെ അംശബന്ധത്തിന്റെ വർഗ്ഗത്തിന് തുല്യമാണ്:}$$
$$\\frac{\\text{പരപ്പളവ്}(\\triangle ABC)}{\\text{പരപ്പളവ്}(\\triangle DEF)} = \\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$$
$$\\frac{81}{\\text{പരപ്പളവ്}(\\triangle DEF)} = \\frac{9}{16} \\implies \\text{പരപ്പളവ്}(\\triangle DEF) = \\frac{81 \\times 16}{9} = \\mathbf{144\\text{ ച.സെ.മീ}}.$$

$$\\text{(c) } DE\\text{-ന്റെ നീളം:}$$
$$\\frac{9}{DE} = \\frac{3}{4} \\implies DE = \\frac{9 \\times 4}{3} = \\mathbf{12\\text{ cm}}.$$`
  }
);
