/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 8: Area of Quadrilaterals (ചതുർഭുജങ്ങളുടെ പരപ്പളവ്)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Zero mixing. Authentic SCERT Kerala textbook terminology.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  /* ──────────────────────────────────────────────────────────────────────────
     8.8.1 General Quadrilateral Area
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.8.1',
    concept: 'm8.8.1.general-quad-area',
    sec: '8.8.1',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'In a quadrilateral, the length of a diagonal is $12\\text{ cm}$ and the lengths of the perpendiculars drawn from the other two vertices to this diagonal are $4\\text{ cm}$ and $6\\text{ cm}$. What is its area?',
    prompt_ml: 'ഒരു ചതുർഭുജത്തിൽ ഒരു വികർണ്ണത്തിന്റെ നീളം $12\\text{ cm}$-ഉം, എതിർമൂലകളിൽ നിന്ന് ആ വികർണ്ണത്തിലേക്കുള്ള ലംബങ്ങളുടെ നീളങ്ങൾ $4\\text{ cm}$, $6\\text{ cm}$ വീതവുമാണ്. ഇതിന്റെ പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$60\\text{ cm}^2$' },
      { k: 'B', t: '$120\\text{ cm}^2$' },
      { k: 'C', t: '$48\\text{ cm}^2$' },
      { k: 'D', t: '$72\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$60\\text{ cm}^2$' },
      { k: 'B', t: '$120\\text{ cm}^2$' },
      { k: 'C', t: '$48\\text{ cm}^2$' },
      { k: 'D', t: '$72\\text{ cm}^2$' }
    ],
    answer: 'A',
    solution_en: '$\\text{Area} = \\frac{1}{2} d (h_1 + h_2) = \\frac{1}{2} \\times 12 \\times (4 + 6) = 6 \\times 10 = 60\\text{ cm}^2$.',
    solution_ml: '$\\text{പരപ്പളവ്} = \\frac{1}{2} d (h_1 + h_2) = \\frac{1}{2} \\times 12 \\times (4 + 6) = 6 \\times 10 = 60\\text{ cm}^2$.',
    tested_en: 'Area formula for general quadrilateral using diagonal and two offsets.',
    tested_ml: 'വികർണ്ണവും രണ്ട് ലംബങ്ങളും നൽകിയുള്ള ചതുർഭുജ പരപ്പളവ് സൂത്രവാക്യം.'
  },
  {
    id: 'obj.m8.8.2',
    concept: 'm8.8.1.general-quad-area',
    sec: '8.8.1',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'The area of a quadrilateral is $84\\text{ cm}^2$ and the sum of the offsets (perpendiculars) to a diagonal is $14\\text{ cm}$. What is the length of this diagonal?',
    prompt_ml: 'ഒരു ചതുർഭുജത്തിന്റെ പരപ്പളവ് $84\\text{ cm}^2$-ഉം ഒരു വികർണ്ണത്തിലേക്കുള്ള ലംബങ്ങളുടെ തുക $14\\text{ cm}$-ഉം ആണ്. എങ്കിൽ ആ വികർണ്ണത്തിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$12\\text{ cm}$' },
      { k: 'C', t: '$14\\text{ cm}$' },
      { k: 'D', t: '$24\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$6\\text{ cm}$' },
      { k: 'B', t: '$12\\text{ cm}$' },
      { k: 'C', t: '$14\\text{ cm}$' },
      { k: 'D', t: '$24\\text{ cm}$' }
    ],
    answer: 'B',
    solution_en: '$\\text{Area} = \\frac{1}{2} d (h_1 + h_2) \\implies 84 = \\frac{1}{2} \\times d \\times 14 = 7d \\implies d = \\frac{84}{7} = 12\\text{ cm}$.',
    solution_ml: '$\\text{പരപ്പളവ്} = \\frac{1}{2} d (h_1 + h_2) \\implies 84 = \\frac{1}{2} \\times d \\times 14 = 7d \\implies d = \\frac{84}{7} = 12\\text{ cm}$.',
    tested_en: 'Calculating diagonal from quadrilateral area and sum of heights.',
    tested_ml: 'പരപ്പളവിൽ നിന്നും ലംബങ്ങളുടെ തുകയിൽ നിന്നും വികർണ്ണത്തിന്റെ നീളം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.8.2 Rhombus Area
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.8.3',
    concept: 'm8.8.2.rhombus-area',
    sec: '8.8.2',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'The diagonals of a rhombus measure $16\\text{ cm}$ and $12\\text{ cm}$. What is the area of the rhombus?',
    prompt_ml: 'ഒരു റോംബസിന്റെ വികർണ്ണങ്ങളുടെ നീളം $16\\text{ cm}$, $12\\text{ cm}$ ആണ്. റോംബസിന്റെ പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$192\\text{ cm}^2$' },
      { k: 'B', t: '$96\\text{ cm}^2$' },
      { k: 'C', t: '$48\\text{ cm}^2$' },
      { k: 'D', t: '$56\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$192\\text{ cm}^2$' },
      { k: 'B', t: '$96\\text{ cm}^2$' },
      { k: 'C', t: '$48\\text{ cm}^2$' },
      { k: 'D', t: '$56\\text{ cm}^2$' }
    ],
    answer: 'B',
    solution_en: '$\\text{Area} = \\frac{1}{2} d_1 d_2 = \\frac{1}{2} \\times 16 \\times 12 = 8 \\times 12 = 96\\text{ cm}^2$.',
    solution_ml: '$\\text{പരപ്പളവ്} = \\frac{1}{2} d_1 d_2 = \\frac{1}{2} \\times 16 \\times 12 = 8 \\times 12 = 96\\text{ cm}^2$.',
    tested_en: 'Area of a rhombus using diagonals.',
    tested_ml: 'വികർണ്ണങ്ങൾ നൽകിയാൽ റോംബസിന്റെ പരപ്പളവ് കണ്ടെത്തൽ.'
  },
  {
    id: 'obj.m8.8.4',
    concept: 'm8.8.2.rhombus-area',
    sec: '8.8.2',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'The area of a rhombus is $75\\text{ cm}^2$ and one of its diagonals is $10\\text{ cm}$. What is the length of the other diagonal?',
    prompt_ml: 'ഒരു റോംബസിന്റെ പരപ്പളവ് $75\\text{ cm}^2$-ഉം ഒരു വികർണ്ണത്തിന്റെ നീളം $10\\text{ cm}$-ഉം ആണ്. രണ്ടാമത്തെ വികർണ്ണത്തിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$7.5\\text{ cm}$' },
      { k: 'B', t: '$15\\text{ cm}$' },
      { k: 'C', t: '$20\\text{ cm}$' },
      { k: 'D', t: '$30\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$7.5\\text{ cm}$' },
      { k: 'B', t: '$15\\text{ cm}$' },
      { k: 'C', t: '$20\\text{ cm}$' },
      { k: 'D', t: '$30\\text{ cm}$' }
    ],
    answer: 'B',
    solution_en: '$\\frac{1}{2} \\times 10 \\times d_2 = 75 \\implies 5 d_2 = 75 \\implies d_2 = 15\\text{ cm}$.',
    solution_ml: '$\\frac{1}{2} \\times 10 \\times d_2 = 75 \\implies 5 d_2 = 75 \\implies d_2 = 15\\text{ cm}$.',
    tested_en: 'Finding one diagonal of a rhombus given area and other diagonal.',
    tested_ml: 'പരപ്പളവും ഒരു വികർണ്ണവും നൽകിയാൽ രണ്ടാമത്തെ വികർണ്ണം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.8.3 Parallelogram Area
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.8.5',
    concept: 'm8.8.3.parallelogram-area',
    sec: '8.8.3',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'A parallelogram has base $15\\text{ cm}$ and perpendicular distance between the base and the opposite side $8\\text{ cm}$. What is its area?',
    prompt_ml: 'ഒരു സാമാന്തരികത്തിന്റെ പാദം $15\\text{ cm}$-ഉം പാദത്തിൽ നിന്ന് എതിർവശത്തേക്കുള്ള ലംബദൂരം $8\\text{ cm}$-ഉം ആണ്. ഇതിന്റെ പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$60\\text{ cm}^2$' },
      { k: 'B', t: '$120\\text{ cm}^2$' },
      { k: 'C', t: '$92\\text{ cm}^2$' },
      { k: 'D', t: '$46\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$60\\text{ cm}^2$' },
      { k: 'B', t: '$120\\text{ cm}^2$' },
      { k: 'C', t: '$92\\text{ cm}^2$' },
      { k: 'D', t: '$46\\text{ cm}^2$' }
    ],
    answer: 'B',
    solution_en: '$\\text{Area} = \\text{Base} \\times \\text{Height} = 15 \\times 8 = 120\\text{ cm}^2$.',
    solution_ml: '$\\text{പരപ്പളവ്} = \\text{പാദം} \\times \\text{ഉയരം} = 15 \\times 8 = 120\\text{ cm}^2$.',
    tested_en: 'Area of a parallelogram using base and perpendicular height.',
    tested_ml: 'പാദവും ലംബ ഉയരവും ഉപയോഗിച്ച് സാമാന്തരികത്തിന്റെ പരപ്പളവ് കാണൽ.'
  },
  {
    id: 'obj.m8.8.6',
    concept: 'm8.8.3.parallelogram-area',
    sec: '8.8.3',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'The area of a parallelogram is $108\\text{ cm}^2$ and its height is $9\\text{ cm}$. What is the length of its corresponding base?',
    prompt_ml: 'ഒരു സാമാന്തരികത്തിന്റെ പരപ്പളവ് $108\\text{ cm}^2$-ഉം ഉയരം $9\\text{ cm}$-ഉം ആയാൽ പാദത്തിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$12\\text{ cm}$' },
      { k: 'B', t: '$24\\text{ cm}$' },
      { k: 'C', t: '$18\\text{ cm}$' },
      { k: 'D', t: '$99\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$12\\text{ cm}$' },
      { k: 'B', t: '$24\\text{ cm}$' },
      { k: 'C', t: '$18\\text{ cm}$' },
      { k: 'D', t: '$99\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: '$b = \\frac{\\text{Area}}{h} = \\frac{108}{9} = 12\\text{ cm}$.',
    solution_ml: '$b = \\frac{\\text{പരപ്പളവ്}}{h} = \\frac{108}{9} = 12\\text{ cm}$.',
    tested_en: 'Calculating base from parallelogram area and height.',
    tested_ml: 'സാമാന്തരികത്തിന്റെ പരപ്പളവിൽ നിന്നും ഉയരത്തിൽ നിന്നും പാദം കാണൽ.'
  },

  /* ──────────────────────────────────────────────────────────────────────────
     8.8.4 Trapezium Area
     ────────────────────────────────────────────────────────────────────────── */
  {
    id: 'obj.m8.8.7',
    concept: 'm8.8.4.trapezium-area',
    sec: '8.8.4',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'The parallel sides of a trapezium are $14\\text{ cm}$ and $10\\text{ cm}$, and the perpendicular distance between them is $6\\text{ cm}$. What is its area?',
    prompt_ml: 'ഒരു ലംബകത്തിന്റെ സമാന്തര വശങ്ങളുടെ നീളങ്ങൾ $14\\text{ cm}$, $10\\text{ cm}$ വീതവും അവ തമ്മിലുള്ള ലംബദൂരം $6\\text{ cm}$-ഉം ആണ്. ഇതിന്റെ പരപ്പളവ് എത്ര?',
    options_en: [
      { k: 'A', t: '$144\\text{ cm}^2$' },
      { k: 'B', t: '$72\\text{ cm}^2$' },
      { k: 'C', t: '$84\\text{ cm}^2$' },
      { k: 'D', t: '$60\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$144\\text{ cm}^2$' },
      { k: 'B', t: '$72\\text{ cm}^2$' },
      { k: 'C', t: '$84\\text{ cm}^2$' },
      { k: 'D', t: '$60\\text{ cm}^2$' }
    ],
    answer: 'B',
    solution_en: '$\\text{Area} = \\frac{1}{2} h (a + b) = \\frac{1}{2} \\times 6 \\times (14 + 10) = 3 \\times 24 = 72\\text{ cm}^2$.',
    solution_ml: '$\\text{പരപ്പളവ്} = \\frac{1}{2} h (a + b) = \\frac{1}{2} \\times 6 \\times (14 + 10) = 3 \\times 24 = 72\\text{ cm}^2$.',
    tested_en: 'Area of a trapezium using parallel sides and height.',
    tested_ml: 'സമാന്തര വശങ്ങളും ലംബദൂരവും നൽകിയാൽ ലംബകത്തിന്റെ പരപ്പളവ് കാണൽ.'
  },
  {
    id: 'obj.m8.8.8',
    concept: 'm8.8.4.trapezium-area',
    sec: '8.8.4',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'The area of a trapezium is $135\\text{ cm}^2$. If one parallel side is $18\\text{ cm}$ and the distance between the parallel sides is $9\\text{ cm}$, what is the length of the other parallel side?',
    prompt_ml: 'ഒരു ലംബകത്തിന്റെ പരപ്പളവ് $135\\text{ cm}^2$ ആണ്. ഒരു സമാന്തര വശം $18\\text{ cm}$-ഉം അവ തമ്മിലുള്ള ലംബദൂരം $9\\text{ cm}$-ഉം ആയാൽ മറ്റേ സമാന്തര വശത്തിന്റെ നീളം എത്ര?',
    options_en: [
      { k: 'A', t: '$12\\text{ cm}$' },
      { k: 'B', t: '$15\\text{ cm}$' },
      { k: 'C', t: '$10\\text{ cm}$' },
      { k: 'D', t: '$14\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$12\\text{ cm}$' },
      { k: 'B', t: '$15\\text{ cm}$' },
      { k: 'C', t: '$10\\text{ cm}$' },
      { k: 'D', t: '$14\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: '$\\frac{1}{2} \\times 9 \\times (18 + b) = 135 \\implies 18 + b = \\frac{135 \\times 2}{9} = 30 \\implies b = 30 - 18 = 12\\text{ cm}$.',
    solution_ml: '$\\frac{1}{2} \\times 9 \\times (18 + b) = 135 \\implies 18 + b = \\frac{135 \\times 2}{9} = 30 \\implies b = 30 - 18 = 12\\text{ cm}$.',
    tested_en: 'Finding unknown parallel side of a trapezium from area.',
    tested_ml: 'പരപ്പളവിൽ നിന്നും ലംബകത്തിന്റെ അജ്ഞാതമായ സമാന്തര വശം കണ്ടെത്തൽ.'
  }
);

/* ── Level 2: Written Exercises ─────────────────────────────────────────── */
WRITTEN.push(
  {
    id: 'w.m8.8.1',
    sec: '8.8.1',
    concept: 'm8.8.1.general-quad-area',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Quadrilateral Diagonal and Offsets Calculation',
    title_ml: 'വികർണ്ണവും ലംബങ്ങളും ഉപയോഗിച്ച് പരപ്പളവ് കണ്ടെത്തൽ',
    prompt_en: '<p>In quadrilateral $ABCD$, diagonal $AC = 18\\text{ cm}$. The perpendiculars from vertices $B$ and $D$ to diagonal $AC$ measure $7\\text{ cm}$ and $5\\text{ cm}$ respectively. Find the area of the quadrilateral.</p>',
    prompt_ml: '<p>ചതുർഭുജം $ABCD$-യിൽ വികർണ്ണം $AC = 18\\text{ cm}$ ആണ്. എതിർമൂലകളായ $B, D$ എന്നിവയിൽ നിന്ന് $AC$-യിലേക്കുള്ള ലംബങ്ങൾ യഥാക്രമം $7\\text{ cm}$, $5\\text{ cm}$ വീതമാണ്. ചതുർഭുജത്തിന്റെ പരപ്പളവ് കാണുക.</p>',
    solution_en: `$$\\text{Given: } d = AC = 18\\text{ cm}, \\quad h_1 = 7\\text{ cm}, \\quad h_2 = 5\\text{ cm}$$
$$\\text{Area of quadrilateral } ABCD = \\frac{1}{2} \\times d \\times (h_1 + h_2)$$
$$\\text{Area} = \\frac{1}{2} \\times 18 \\times (7 + 5)$$
$$\\text{Area} = 9 \\times 12 = \\mathbf{108\\text{ cm}^2}$$`,
    solution_ml: `$$\\text{നൽകിയിരിക്കുന്നത്: } d = AC = 18\\text{ cm}, \\quad h_1 = 7\\text{ cm}, \\quad h_2 = 5\\text{ cm}$$
$$\\text{ചതുർഭുജം } ABCD\\text{-യുടെ പരപ്പളവ്} = \\frac{1}{2} \\times d \\times (h_1 + h_2)$$
$$\\text{പരപ്പളവ്} = \\frac{1}{2} \\times 18 \\times (7 + 5)$$
$$\\text{പരപ്പളവ്} = 9 \\times 12 = \\mathbf{108\\text{ cm}^2}$$`,
    tested_en: 'General quadrilateral area using diagonal and two perpendicular offsets.',
    tested_ml: 'വികർണ്ണവും രണ്ട് ലംബങ്ങളും ഉപയോഗിച്ചുള്ള ചതുർഭുജ പരപ്പളവ് സൂത്രവാക്യം.'
  },

  {
    id: 'w.m8.8.2',
    sec: '8.8.2',
    concept: 'm8.8.2.rhombus-area',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Rhombus Area and Ground Leveling Cost',
    title_ml: 'റോംബസ് പരപ്പളവും നിരപ്പാക്കാനുള്ള ചിലവും',
    prompt_en: '<p>A plot of land is in the shape of a rhombus whose diagonals measure $24\\text{ metres}$ and $10\\text{ metres}$. Find its area. If the cost of leveling the ground is ₹$25$ per square metre, find the total cost of leveling.</p>',
    prompt_ml: '<p>ഒരു വസ്തു റോംബസ് ആകൃതിയിലാണ്. ഇതിന്റെ വികർണ്ണങ്ങളുടെ നീളം $24\\text{ മീറ്റർ}$, $10\\text{ മീറ്റർ}$ വീതമാണ്. ഇതിന്റെ പരപ്പളവ് കാണുക. ഒരു ചതുരശ്ര മീറ്ററിന് ₹$25$ നിരക്കിൽ നിരപ്പാക്കാൻ ആകെ എത്ര രൂപ ചിലവാകും?</p>',
    solution_en: `$$\\text{Step 1: Calculate the area of the rhombus}$$
$$\\text{Area} = \\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 24 \\times 10 = 12 \\times 10 = \\mathbf{120\\text{ m}^2}$$

$$\\text{Step 2: Calculate the cost of leveling}$$
$$\\text{Rate} = ₹25\\text{ per m}^2$$
$$\\text{Total Cost} = 120 \\times 25 = \\mathbf{₹3000}$$`,
    solution_ml: `$$\\text{ഘട്ടം 1: റോംബസിന്റെ പരപ്പളവ് കാണുക}$$
$$\\text{പരപ്പളവ്} = \\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 24 \\times 10 = 12 \\times 10 = \\mathbf{120\\text{ m}^2}$$

$$\\text{ഘട്ടം 2: നിരപ്പാക്കാനുള്ള ആകെ തുക കണക്കാക്കുക}$$
$$\\text{നിരക്ക്} = ₹25\\text{ / m}^2$$
$$\\text{ആകെ ചിലവ്} = 120 \\times 25 = \\mathbf{₹3000}$$`,
    tested_en: 'Rhombus area from diagonals and practical unitary leveling cost.',
    tested_ml: 'വികർണ്ണങ്ങളിൽ നിന്ന് റോംബസ് പരപ്പളവും നിരപ്പാക്കൽ ചിലവും കാണൽ.'
  },

  {
    id: 'w.m8.8.3',
    sec: '8.8.3',
    concept: 'm8.8.3.parallelogram-area',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Parallelogram Area and Alternate Height Calculation',
    title_ml: 'സാമാന്തരികത്തിന്റെ പരപ്പളവും അടുത്ത ഉയരവും കാണൽ',
    prompt_en: '<p>In a parallelogram, one side is $16\\text{ cm}$ and the perpendicular distance to this side from the opposite side is $7.5\\text{ cm}$. Another side is $12\\text{ cm}$. Find: (a) the area of the parallelogram, and (b) the perpendicular distance between the other pair of parallel sides.</p>',
    prompt_ml: '<p>ഒരു സാമാന്തരികത്തിന്റെ ഒരു വശം $16\\text{ cm}$-ഉം ഈ വശത്തേക്കുള്ള ലംബദൂരം $7.5\\text{ cm}$-ഉം ആണ്. മറ്റേ വശം $12\\text{ cm}$ ആണെങ്കിൽ: (a) സാമാന്തരികത്തിന്റെ പരപ്പളവ് എത്ര? (b) അടുത്ത വശങ്ങൾ തമ്മിലുള്ള ലംബദൂരം എത്ര?</p>',
    solution_en: `$$\\text{(a) Area of the parallelogram:}$$
$$\\text{Base } b_1 = 16\\text{ cm}, \\quad \\text{Height } h_1 = 7.5\\text{ cm}$$
$$\\text{Area} = b_1 \\times h_1 = 16 \\times 7.5 = \\mathbf{120\\text{ cm}^2}$$

$$\\text{(b) Perpendicular distance between the other pair of parallel sides } (h_2):$$
$$\\text{Base } b_2 = 12\\text{ cm}$$
$$\\text{Area} = b_2 \\times h_2 \\implies 120 = 12 \\times h_2$$
$$h_2 = \\frac{120}{12} = \\mathbf{10\\text{ cm}}$$`,
    solution_ml: `$$\\text{(a) സാമാന്തരികത്തിന്റെ പരപ്പളവ്:}$$
$$\\text{പാദം } b_1 = 16\\text{ cm}, \\quad \\text{ഉയരം } h_1 = 7.5\\text{ cm}$$
$$\\text{പരപ്പളവ്} = b_1 \\times h_1 = 16 \\times 7.5 = \\mathbf{120\\text{ cm}^2}$$

$$\\text{(b) അടുത്ത ജോടി സമാന്തര വശങ്ങൾ തമ്മിലുള്ള ലംബദൂരം } (h_2):$$
$$\\text{പാദം } b_2 = 12\\text{ cm}$$
$$\\text{പരപ്പളവ്} = b_2 \\times h_2 \\implies 120 = 12 \\times h_2$$
$$h_2 = \\frac{120}{12} = \\mathbf{10\\text{ cm}}$$`,
    tested_en: 'Parallelogram area and calculating alternate perpendicular height.',
    tested_ml: 'സാമാന്തരിക പരപ്പളവും അടുത്ത ലംബ ഉയരവും കണ്ടെത്തൽ.'
  },

  {
    id: 'w.m8.8.4',
    sec: '8.8.4',
    concept: 'm8.8.4.trapezium-area',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Cross-Section Area of a Canal as Trapezium',
    title_ml: 'കനാലിന്റെ ഛേദപരപ്പളവ് ലംബക സൂത്രവാക്യം വഴി കാണൽ',
    prompt_en: '<p>The cross-section of a canal is a trapezium. The width at the top is $10\\text{ metres}$, the width at the bottom is $6\\text{ metres}$, and the depth of the canal is $2.5\\text{ metres}$. Find the area of the cross-section.</p>',
    prompt_ml: '<p>ഒരു കനാലിന്റെ കുറുകെയുള്ള ഛേദം ലംബകത്തിന്റെ ആകൃതിയിലാണ്. മുകൾഭാഗത്തെ വീതി $10\\text{ മീറ്റർ}$, അടിഭാഗത്തെ വീതി $6\\text{ മീറ്റർ}$, ആഴം $2.5\\text{ മീറ്റർ}$ ആയാൽ ഇതിന്റെ പരപ്പളവ് കാണുക.</p>',
    solution_en: `$$\\text{Given: Parallel sides } a = 10\\text{ m}, \\; b = 6\\text{ m}, \\quad \\text{Height (depth) } h = 2.5\\text{ m}$$
$$\\text{Area of cross-section} = \\frac{1}{2} \\times h \\times (a + b)$$
$$\\text{Area} = \\frac{1}{2} \\times 2.5 \\times (10 + 6)$$
$$\\text{Area} = \\frac{1}{2} \\times 2.5 \\times 16 = 2.5 \\times 8 = \\mathbf{20\\text{ m}^2}$$`,
    solution_ml: `$$\\text{നൽകിയിരിക്കുന്നത്: സമാന്തര വശങ്ങൾ } a = 10\\text{ m}, \\; b = 6\\text{ m}, \\quad \\text{ഉയരം (ആഴം) } h = 2.5\\text{ m}$$
$$\\text{ഛേദത്തിന്റെ പരപ്പളവ്} = \\frac{1}{2} \\times h \\times (a + b)$$
$$\\text{പരപ്പളവ്} = \\frac{1}{2} \\times 2.5 \\times (10 + 6)$$
$$\\text{പരപ്പളവ്} = \\frac{1}{2} \\times 2.5 \\times 16 = 2.5 \\times 8 = \\mathbf{20\\text{ m}^2}$$`,
    tested_en: 'Trapezium cross-section area using parallel sides and perpendicular depth.',
    tested_ml: 'സമാന്തര വശങ്ങളും ആഴവും ഉപയോഗിച്ച് ലംബക പരപ്പളവ് കാണൽ.'
  },

  {
    id: 'w.m8.8.5',
    sec: '8.8.2',
    concept: 'm8.8.2.rhombus-area',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Rhombus Perimeter and Area from Pythagorean Relationship',
    title_ml: 'റോംബസിന്റെ ചുറ്റളവും പരപ്പളവും',
    prompt_en: `<ol type="a">
        <li>The perimeter of a rhombus is $52\\text{ cm}$ and one of its diagonals is $10\\text{ cm}$. Find the length of the second diagonal.</li>
        <li>Calculate the area of this rhombus.</li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>ഒരു റോംബസിന്റെ ചുറ്റളവ് $52\\text{ cm}$-ഉം ഒരു വികർണ്ണത്തിന്റെ നീളം $10\\text{ cm}$-ഉം ആണ്. രണ്ടാമത്തെ വികർണ്ണത്തിന്റെ നീളം കാണുക.</li>
        <li>ഈ റോംബസിന്റെ പരപ്പളവ് കണക്കാക്കുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>All four sides of a rhombus are equal.<br>
          $$\\text{Side } s = \\frac{52}{4} = 13\\text{ cm}$$
          The diagonals bisect each other perpendicularly at right angles.<br>
          Half of first diagonal $= \\frac{10}{2} = 5\\text{ cm}$.<br>
          Let half of the second diagonal be $x$. By the Pythagorean theorem:
          $$x^2 + 5^2 = 13^2 \\implies x^2 + 25 = 169 \\implies x^2 = 144 \\implies x = 12\\text{ cm}$$
          $$\\text{Second diagonal } d_2 = 2 \\times 12 = \\mathbf{24\\text{ cm}}$$</li>
        <li>$$\\text{Area} = \\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 10 \\times 24 = \\mathbf{120\\text{ cm}^2}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>റോംബസിന്റെ നാല് വശങ്ങളും തുല്യമാണ്.<br>
          $$\\text{ഒരു വശം } s = \\frac{52}{4} = 13\\text{ cm}$$
          റോംബസിന്റെ വികർണ്ണങ്ങൾ പരസ്പരം ലംബമായി സമഭാഗം ചെയ്യുന്നു.<br>
          ഒന്നാം വികർണ്ണത്തിന്റെ പകുതി $= \\frac{10}{2} = 5\\text{ cm}$.<br>
          രണ്ടാം വികർണ്ണത്തിന്റെ പകുതി $x$ എന്നിരിക്കട്ടെ. പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം:
          $$x^2 + 5^2 = 13^2 \\implies x^2 + 25 = 169 \\implies x^2 = 144 \\implies x = 12\\text{ cm}$$
          $$\\text{രണ്ടാം വികർണ്ണം } d_2 = 2 \\times 12 = \\mathbf{24\\text{ cm}}$$</li>
        <li>$$\\text{പരപ്പളവ്} = \\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 10 \\times 24 = \\mathbf{120\\text{ cm}^2}$$</li>
      </ol>`,
    tested_en: 'Rhombus diagonal relationship via Pythagorean theorem and area.',
    tested_ml: 'റോംബസിന്റെ വികർണ്ണങ്ങളും വശവും തമ്മിലുള്ള പൈതഗോറസ് ബന്ധവും പരപ്പളവും.'
  },

  {
    id: 'w.m8.8.6',
    sec: '8.8.4',
    concept: 'm8.8.4.trapezium-area',
    type: 'written',
    marks: 4,
    time: 210,
    title_en: 'Isosceles Trapezium Height and Total Area',
    title_ml: 'സമദ്വിബാഹു ലംബകത്തിന്റെ ലംബ ഉയരവും പരപ്പളവും',
    prompt_en: `<ol type="a">
        <li>The parallel sides of an isosceles trapezium are $25\\text{ cm}$ and $13\\text{ cm}$, and each of its non-parallel sides is $10\\text{ cm}$. Find the perpendicular height between the parallel sides.</li>
        <li>Calculate the total area of the trapezium.</li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>ഒരു സമദ്വിബാഹു ലംബകത്തിന്റെ സമാന്തര വശങ്ങൾ $25\\text{ cm}$, $13\\text{ cm}$ വീതവും സമാന്തരമല്ലാത്ത വശങ്ങൾ $10\\text{ cm}$ വീതവുമാണ്. സമാന്തര വശങ്ങൾ തമ്മിലുള്ള ലംബ ഉയരം കണ്ടെത്തുക.</li>
        <li>ലംബകത്തിന്റെ ആകെ പരപ്പളവ് കണക്കാക്കുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Draw perpendiculars from the ends of the smaller parallel side ($13\\text{ cm}$) to the larger parallel side ($25\\text{ cm}$).<br>
          Difference between parallel sides $= 25 - 13 = 12\\text{ cm}$.<br>
          Since it is an isosceles trapezium, the perpendiculars cut off equal segments of length $\\frac{12}{2} = 6\\text{ cm}$ at each end.<br>
          By the Pythagorean theorem in the right triangle with hypotenuse $10\\text{ cm}$ and base $6\\text{ cm}$:
          $$h = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = \\mathbf{8\\text{ cm}}$$</li>
        <li>$$\\text{Area} = \\frac{1}{2} \\times h \\times (a + b) = \\frac{1}{2} \\times 8 \\times (25 + 13) = 4 \\times 38 = \\mathbf{152\\text{ cm}^2}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>ചെറിയ സമാന്തര വശത്തിന്റെ ($13\\text{ cm}$) അറ്റങ്ങളിൽ നിന്നും വലിയ വശത്തിലേക്ക് ($25\\text{ cm}$) ലംബങ്ങൾ വരയ്ക്കുന്നു.<br>
          സമാന്തര വശങ്ങളുടെ വ്യത്യാസം $= 25 - 13 = 12\\text{ cm}$.<br>
          സമദ്വിബാഹു ലംബകമായതിനാൽ ഇരുവശങ്ങളിലും ഉണ്ടാകുന്ന കഷണങ്ങളുടെ നീളം $\\frac{12}{2} = 6\\text{ cm}$ വീതമായിരിക്കും.<br>
          കർണ്ണം $10\\text{ cm}$-ഉം ഒരു വശം $6\\text{ cm}$-ഉം ആയ മട്ടത്രികോണത്തിൽ പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം:
          $$h = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = \\mathbf{8\\text{ cm}}$$</li>
        <li>$$\\text{പരപ്പളവ്} = \\frac{1}{2} \\times h \\times (a + b) = \\frac{1}{2} \\times 8 \\times (25 + 13) = 4 \\times 38 = \\mathbf{152\\text{ cm}^2}$$</li>
      </ol>`,
    tested_en: 'Isosceles trapezium height derivation via right triangles and area computation.',
    tested_ml: 'സമദ്വിബാഹു ലംബകത്തിന്റെ ലംബ ഉയരം കണ്ടെത്തലും പരപ്പളവ് കണക്കാക്കലും.'
  }
);
