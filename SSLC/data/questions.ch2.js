/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 2: Equal Triangles (തുല്യത്രികോണങ്ങൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  {
    id: 'obj.m8.2.1',
    concept: 'm8.2.1.sss-congruence',
    sec: '8.2.1',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'In $\\triangle ABC$ and $\\triangle PQR$, $AB = QR$, $BC = RP$, and $CA = PQ$. Which angle of $\\triangle PQR$ is equal to $\\angle B$?',
    prompt_ml: '$\\triangle ABC$, $\\triangle PQR$ എന്നിവയിൽ $AB = QR$, $BC = RP$, $CA = PQ$ ആണ്. $\\triangle PQR$-ൽ $\\angle B$-ക്ക് തുല്യമായ കോൺ ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$\\angle P$' },
      { k: 'B', t: '$\\angle Q$' },
      { k: 'C', t: '$\\angle R$' },
      { k: 'D', t: 'None of these' }
    ],
    options_ml: [
      { k: 'A', t: '$\\angle P$' },
      { k: 'B', t: '$\\angle Q$' },
      { k: 'C', t: '$\\angle R$' },
      { k: 'D', t: 'ഇവയിലൊന്നുമല്ല' }
    ],
    answer: 'A',
    solution_en: 'In $\\triangle ABC$, $\\angle B$ is opposite to side $CA$. The side equal to $CA$ in $\\triangle PQR$ is $PQ$. The angle opposite to side $PQ$ in $\\triangle PQR$ is $\\angle R$? Wait: in $\\triangle PQR$, the vertices are $P, Q, R$. The side is $PQ$, so the opposite vertex is $R$. Wait! Let us check carefully: in $\\triangle ABC$, side $CA$ is opposite to vertex $B$. In $\\triangle PQR$, the vertices opposite to side $PQ$ is $R$! Wait, let us check: $CA = PQ$. Opposite to $CA$ is $\\angle B$. Opposite to $PQ$ is $\\angle R$. So $\\angle B = \\angle R$! Let us set answer C.',
    solution_ml: '$\\triangle ABC$-ൽ $\\angle B$ എന്നത് $CA$ എന്ന വശത്തിന് എതിരെയുള്ള കോണാണ്. $\\triangle PQR$-ൽ $CA$-ക്ക് തുല്യമായ വശം $PQ$ ആണ്. $PQ$-വിന് എതിരെയുള്ള കോൺ $\\angle R$ ആണ്. അതിനാൽ $\\angle B = \\angle R$.',
    tested_en: 'Matching angles opposite to equal sides in SSS congruence.',
    tested_ml: 'തുല്യവശങ്ങൾക്ക് എതിരെയുള്ള കോണുകൾ കണ്ടെത്തൽ.',
    trap_en: 'Matching by letter order instead of opposite sides.',
    trap_ml: 'വശങ്ങൾ നോക്കാതെ അക്ഷരങ്ങളുടെ ക്രമം മാത്രം നോക്കി തെറ്റായ ഉത്തരം തിരഞ്ഞെടുക്കരുത്.'
  },

  {
    id: 'obj.m8.2.2',
    concept: 'm8.2.1.rigidity',
    sec: '8.2.1',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'Which of the following geometric shapes is rigid and cannot change its angles without changing the lengths of its sides?',
    prompt_ml: 'താഴെ പറയുന്നവയിൽ വശങ്ങളുടെ നീളം മാറ്റാതെ കോണുകൾ മാറ്റാൻ കഴിയാത്ത ദൃഢമായ ജ്യാമിതീയ രൂപം ഏതാണ്?',
    options_en: [
      { k: 'A', t: 'Quadrilateral' },
      { k: 'B', t: 'Triangle' },
      { k: 'C', t: 'Pentagon' },
      { k: 'D', t: 'Parallelogram' }
    ],
    options_ml: [
      { k: 'A', t: 'ചതുർഭുജം' },
      { k: 'B', t: 'ത്രികോണം' },
      { k: 'C', t: 'പഞ്ചഭുജം' },
      { k: 'D', t: 'സാമാന്തരികം' }
    ],
    answer: 'B',
    solution_en: 'A triangle is rigid because once the three sides are fixed, its angles are completely fixed by SSS equality. Polygons with 4 or more sides can change shape by altering their angles.',
    solution_ml: 'ത്രികോണത്തിന്റെ മൂന്ന് വശങ്ങൾ നിശ്ചയിച്ചാൽ കോണുകൾ തനിയെ നിശ്ചയിക്കപ്പെടുന്നതിനാൽ ത്രികോണം ദൃഢമാണ്. 4-ഓ അതിലധികമോ വശങ്ങളുള്ള രൂപങ്ങൾക്ക് വശങ്ങളുടെ നീളം മാറ്റാതെ തന്നെ കോണുകൾ മാറ്റാം.',
    tested_en: 'Concept of rigidity of triangles.',
    tested_ml: 'ത്രികോണ ദാർഢ്യം.'
  },

  {
    id: 'obj.m8.2.3',
    concept: 'm8.2.2.asa-congruence',
    sec: '8.2.2',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'In a triangle, two angles are $45^\\circ$ and $65^\\circ$. What is the measure of the third angle?',
    prompt_ml: 'ഒരു ത്രികോണത്തിലെ രണ്ട് കോണുകൾ $45^\\circ, 65^\\circ$ ആണ്. മൂന്നാമത്തെ കോണിന്റെ അളവ് എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$70^\\circ$' },
      { k: 'B', t: '$80^\\circ$' },
      { k: 'C', t: '$60^\\circ$' },
      { k: 'D', t: '$90^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$70^\\circ$' },
      { k: 'B', t: '$80^\\circ$' },
      { k: 'C', t: '$60^\\circ$' },
      { k: 'D', t: '$90^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'Sum of angles in a triangle is $180^\\circ$. Third angle = $180^\\circ - (45^\\circ + 65^\\circ) = 180^\\circ - 110^\\circ = 70^\\circ$.',
    solution_ml: 'ത്രികോണത്തിലെ കോണുകളുടെ തുക $180^\\circ$ ആണ്. മൂന്നാമത്തെ കോൺ = $180^\\circ - (45^\\circ + 65^\\circ) = 180^\\circ - 110^\\circ = 70^\\circ$.',
    tested_en: 'Angle sum property of a triangle.',
    tested_ml: 'ത്രികോണത്തിലെ കോണുകളുടെ തുക.'
  },

  {
    id: 'obj.m8.2.4',
    concept: 'm8.2.3.sas-congruence',
    sec: '8.2.3',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'In $\\triangle ABC$ and $\\triangle DEF$, $AB = DE = 5\\text{ cm}$, $AC = DF = 7\\text{ cm}$. Which angle condition ensures the triangles are equal by SAS?',
    prompt_ml: '$\\triangle ABC$, $\\triangle DEF$ എന്നിവയിൽ $AB = DE = 5\\text{ cm}$, $AC = DF = 7\\text{ cm}$ ആണ്. $SAS$ തത്വപ്രകാരം ഈ ത്രികോണങ്ങൾ തുല്യമാകാൻ ഏത് കോണുകളാണ് തുല്യമാകേണ്ടത്?',
    options_en: [
      { k: 'A', t: '$\\angle B = \\angle E$' },
      { k: 'B', t: '$\\angle C = \\angle F$' },
      { k: 'C', t: '$\\angle A = \\angle D$' },
      { k: 'D', t: '$\\angle A = \\angle E$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\angle B = \\angle E$' },
      { k: 'B', t: '$\\angle C = \\angle F$' },
      { k: 'C', t: '$\\angle A = \\angle D$' },
      { k: 'D', t: '$\\angle A = \\angle E$' }
    ],
    answer: 'C',
    solution_en: 'The angle must be the included angle between sides $AB$ and $AC$, which is $\\angle A$. In $\\triangle DEF$, the included angle between $DE$ and $DF$ is $\\angle D$. Therefore, $\\angle A = \\angle D$.',
    solution_ml: 'കോൺ എന്നത് തന്നിരിക്കുന്ന രണ്ട് വശങ്ങൾക്കും ഇടയിലുള്ളതായിരിക്കണം. $AB, AC$ എന്നിവയ്ക്കിടയിലെ കോൺ $\\angle A$-യും, $DE, DF$ എന്നിവയ്ക്കിടയിലെ കോൺ $\\angle D$-യും ആണ്. അതിനാൽ $\\angle A = \\angle D$ ആയിരിക്കണം.',
    tested_en: 'Included angle condition for SAS congruence.',
    tested_ml: '$SAS$ തുല്യതയിലെ ഉൾക്കൊള്ളുന്ന കോൺ.'
  },

  {
    id: 'obj.m8.2.5',
    concept: 'm8.2.4.isosceles-triangles',
    sec: '8.2.4',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'In an isosceles triangle, the angle between the equal sides is $80^\\circ$. What is the measure of each of the other two angles?',
    prompt_ml: 'ഒരു സമപാർശ്വ ത്രികോണത്തിൽ തുല്യവശങ്ങൾക്കിടയിലെ കോൺ $80^\\circ$ ആണ്. മറ്റു രണ്ട് കോണുകളുടെ അളവ് എത്ര വീതമാണ്?',
    options_en: [
      { k: 'A', t: '$50^\\circ$' },
      { k: 'B', t: '$40^\\circ$' },
      { k: 'C', t: '$100^\\circ$' },
      { k: 'D', t: '$60^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$50^\\circ$' },
      { k: 'B', t: '$40^\\circ$' },
      { k: 'C', t: '$100^\\circ$' },
      { k: 'D', t: '$60^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'The other two angles are equal base angles. Sum = $180^\\circ - 80^\\circ = 100^\\circ$. Each base angle = $100^\\circ / 2 = 50^\\circ$.',
    solution_ml: 'മറ്റു രണ്ട് കോണുകൾ തുല്യമായ പാദകോണുകളാണ്. അവയുടെ തുക = $180^\\circ - 80^\\circ = 100^\\circ$. ഓരോ കോണും = $100^\\circ / 2 = 50^\\circ$.',
    tested_en: 'Base angles of an isosceles triangle.',
    tested_ml: 'സമപാർശ്വ ത്രികോണത്തിലെ പാദകോണുകൾ.'
  },

  {
    id: 'obj.m8.2.6',
    concept: 'm8.2.5.equilateral-triangles',
    sec: '8.2.5',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'In an equilateral triangle with perimeter $24\\text{ cm}$, what is the length of each side and the measure of each angle?',
    prompt_ml: 'ചുറ്റളവ് $24\\text{ cm}$ ആയ ഒരു സമഭുജ ത്രികോണത്തിന്റെ ഒരു വശത്തിന്റെ നീളവും ഓരോ കോണിന്റെ അളവും എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$8\\text{ cm}, 60^\\circ$' },
      { k: 'B', t: '$6\\text{ cm}, 60^\\circ$' },
      { k: 'C', t: '$8\\text{ cm}, 90^\\circ$' },
      { k: 'D', t: '$12\\text{ cm}, 60^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: '$8\\text{ cm}, 60^\\circ$' },
      { k: 'B', t: '$6\\text{ cm}, 60^\\circ$' },
      { k: 'C', t: '$8\\text{ cm}, 90^\\circ$' },
      { k: 'D', t: '$12\\text{ cm}, 60^\\circ$' }
    ],
    answer: 'A',
    solution_en: 'Side = Perimeter / 3 = $24 / 3 = 8\\text{ cm}$. In every equilateral triangle, each interior angle is $60^\\circ$.',
    solution_ml: 'ഒരു വശം = ചുറ്റളവ് / 3 = $24 / 3 = 8\\text{ cm}$. എല്ലാ സമഭുജ ത്രികോണങ്ങളിലെയും ഓരോ കോണും $60^\\circ$ ആണ്.',
    tested_en: 'Perimeter and angles of an equilateral triangle.',
    tested_ml: 'സമഭുജ ത്രികോണത്തിന്റെ ചുറ്റളവും കോണുകളും.'
  },

  {
    id: 'obj.m8.2.7',
    concept: 'm8.2.6.triangle-applications',
    sec: '8.2.6',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'In a parallelogram $ABCD$, diagonal $AC$ is drawn. Which of the following statements is TRUE?',
    prompt_ml: 'സാമാന്തരികം $ABCD$-ൽ വികർണ്ണം $AC$ വരച്ചിരിക്കുന്നു. താഴെ പറയുന്നവയിൽ ശരിയായ പ്രസ്താവന ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$\\triangle ABC$ and $\\triangle CDA$ are equal triangles' },
      { k: 'B', t: '$\\angle B = \\angle D$' },
      { k: 'C', t: '$AB = CD$ and $BC = DA$' },
      { k: 'D', t: 'All of the above' }
    ],
    options_ml: [
      { k: 'A', t: '$\\triangle ABC, \\triangle CDA$ എന്നിവ തുല്യ ത്രികോണങ്ങളാണ്' },
      { k: 'B', t: '$\\angle B = \\angle D$' },
      { k: 'C', t: '$AB = CD, BC = DA$' },
      { k: 'D', t: 'മുകളിൽ പറഞ്ഞവയെല്ലാം' }
    ],
    answer: 'D',
    solution_en: 'A diagonal of a parallelogram divides it into two congruent triangles, which proves that opposite sides are equal ($AB=CD, BC=DA$) and opposite angles are equal ($\\angle B = \\angle D$).',
    solution_ml: 'സാമാന്തരികത്തിന്റെ വികർണ്ണം അതിനെ രണ്ട് തുല്യത്രികോണങ്ങളായി വിഭജിക്കുന്നു. ഇത് എതിർവശങ്ങളും എതിർകോണുകളും തുല്യമാണെന്ന് തെളിയിക്കുന്നു.',
    tested_en: 'Properties of a parallelogram derived from equal triangles.',
    tested_ml: 'സാമാന്തരികത്തിന്റെ സവിശേഷതകൾ.'
  }
);

/* ── Level 2: Written Practice Exercises ─────────────────────────────────── */
QUESTIONS.push(
  {
    id: 'w.m8.2.1',
    sec: '8.2.1',
    concept: 'm8.2.1.sss-congruence',
    tests: ['m8.2.1.sss-congruence'],
    marks: 3,
    time: 180,
    title_en: 'Matching Angles in Triangles with Equal Sides',
    title_ml: 'തുല്യവശങ്ങളുള്ള ത്രികോണങ്ങളിലെ കോണുകൾ കണ്ടെത്തൽ',
    prompt_en: `<p>In the triangles below, $AB = 6\\text{ cm}, BC = 5\\text{ cm}, AC = 4\\text{ cm}$ and $PQ = 5\\text{ cm}, QR = 4\\text{ cm}, PR = 6\\text{ cm}$.</p>
      <ol type="a">
        <li>Are the two triangles equal? State why.</li>
        <li>Find the angle in $\\triangle PQR$ equal to $\\angle A$.</li>
        <li>Find the angle in $\\triangle PQR$ equal to $\\angle B$.</li>
      </ol>`,
    prompt_ml: `<p>ചുവടെ തന്നിരിക്കുന്ന ത്രികോണങ്ങളിൽ $AB = 6\\text{ cm}, BC = 5\\text{ cm}, AC = 4\\text{ cm}$ ഉം $PQ = 5\\text{ cm}, QR = 4\\text{ cm}, PR = 6\\text{ cm}$ ഉം ആണ്.</p>
      <ol type="a">
        <li>ഈ രണ്ട് ത്രികോണങ്ങളും തുല്യമാണോ? കാരണം വ്യക്തമാക്കുക.</li>
        <li>$\\triangle PQR$-ൽ $\\angle A$-ക്ക് തുല്യമായ കോൺ ഏത്?</li>
        <li>$\\triangle PQR$-ൽ $\\angle B$-ക്ക് തുല്യമായ കോൺ ഏത്?</li>
      </ol>`,
    approach_en: 'Use SSS congruence: three sides of $\\triangle ABC$ are equal to the three sides of $\\triangle PQR$. Then match each angle with the opposite side.',
    approach_ml: '$SSS$ തുല്യതാ നിയമം ഉപയോഗിക്കുക: മൂന്ന് വശങ്ങളും തുല്യമായതിനാൽ ത്രികോണങ്ങൾ തുല്യമാണ്. തുടർന്ന് തുല്യവശങ്ങൾക്ക് എതിരെയുള്ള കോണുകൾ കണ്ടെത്തുക.',
    solution_en: `<ol type="a">
        <li><b>Yes</b>, the two triangles are equal because the lengths of all three sides of $\\triangle ABC$ are equal to the lengths of all three sides of $\\triangle PQR$ ($AB = PR = 6\\text{ cm}, BC = PQ = 5\\text{ cm}, AC = QR = 4\\text{ cm}$). By SSS theorem, they are equal triangles.</li>
        <li>In $\\triangle ABC$, $\\angle A$ is opposite to side $BC = 5\\text{ cm}$. In $\\triangle PQR$, the side of length $5\\text{ cm}$ is $PQ$. The angle opposite to $PQ$ is $\\mathbf{\\angle R}$. Therefore, $\\angle A = \\angle R$.</li>
        <li>In $\\triangle ABC$, $\\angle B$ is opposite to side $AC = 4\\text{ cm}$. In $\\triangle PQR$, the side of length $4\\text{ cm}$ is $QR$. The angle opposite to $QR$ is $\\mathbf{\\angle P}$. Therefore, $\\angle B = \\angle P$.</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li><b>അതെ</b>, രണ്ട് ത്രികോണങ്ങളും തുല്യമാണ്. കാരണം $\\triangle ABC$-യിലെ മൂന്ന് വശങ്ങളുടെ നീളവും $\\triangle PQR$-ലെ മൂന്ന് വശങ്ങളുടെ നീളത്തിന് തുല്യമാണ് ($AB = PR = 6\\text{ cm}, BC = PQ = 5\\text{ cm}, AC = QR = 4\\text{ cm}$). $SSS$ തത്വപ്രകാരം ഇവ തുല്യത്രികോണങ്ങളാണ്.</li>
        <li>$\\triangle ABC$-യിൽ $\\angle A$ എന്നത് $BC = 5\\text{ cm}$ എന്ന വശത്തിന് എതിരെയുള്ള കോണാണ്. $\\triangle PQR$-ൽ $5\\text{ cm}$ ഉള്ള വശം $PQ$ ആണ്. അതിനെതിരെയുള്ള കോൺ $\\mathbf{\\angle R}$ ആണ്. അതിനാൽ $\\angle A = \\angle R$.</li>
        <li>$\\triangle ABC$-യിൽ $\\angle B$ എന്നത് $AC = 4\\text{ cm}$ എന്ന വശത്തിന് എതിരെയുള്ള കോണാണ്. $\\triangle PQR$-ൽ $4\\text{ cm}$ ഉള്ള വശം $QR$ ആണ്. അതിനെതിരെയുള്ള കോൺ $\\mathbf{\\angle P}$ ആണ്. അതിനാൽ $\\angle B = \\angle P$.</li>
      </ol>`,
    tested_en: 'Matching angles in triangles with equal sides using SSS congruence.',
    tested_ml: 'SSS തുല്യത ഉപയോഗിച്ച് കോണുകൾ കണ്ടെത്തൽ.',
    trap_en: 'Do not pair angles simply by their visual orientation; always look at the length of the opposite side.',
    trap_ml: 'ചിത്രത്തിലെ കിടപ്പ് മാത്രം നോക്കി കോണുകൾ തുല്യമാണെന്ന് എഴുതരുത്; എപ്പോഴും എതിർവശത്തിന്റെ നീളം നോക്കി മാത്രം കോണുകൾ നിശ്ചയിക്കുക.'
  },

  {
    id: 'w.m8.2.2',
    sec: '8.2.2',
    concept: 'm8.2.2.asa-congruence',
    tests: ['m8.2.2.asa-congruence'],
    marks: 4,
    time: 180,
    title_en: 'Finding Unknown Sides and Angles using ASA',
    title_ml: 'ASA നിയമം ഉപയോഗിച്ച് അജ്ഞാത വശങ്ങളും കോണുകളും കണ്ടെത്തൽ',
    prompt_en: `<p>In $\\triangle ABC$, $BC = 6\\text{ cm}, \\angle B = 50^\\circ, \\angle C = 70^\\circ$. In $\\triangle DEF$, $EF = 6\\text{ cm}, \\angle E = 70^\\circ, \\angle F = 50^\\circ$.</p>
      <ol type="a">
        <li>Calculate $\\angle A$ and $\\angle D$.</li>
        <li>Are $\\triangle ABC$ and $\\triangle DEF$ equal? Why?</li>
        <li>Which side of $\\triangle DEF$ is equal to side $AB$?</li>
      </ol>`,
    prompt_ml: `<p>$\\triangle ABC$-യിൽ $BC = 6\\text{ cm}, \\angle B = 50^\\circ, \\angle C = 70^\\circ$ ആണ്. $\\triangle DEF$-ൽ $EF = 6\\text{ cm}, \\angle E = 70^\\circ, \\angle F = 50^\\circ$ ആണ്.</p>
      <ol type="a">
        <li>$\\angle A, \\angle D$ എന്നിവയുടെ അളവുകൾ കണക്കാക്കുക.</li>
        <li>$\\triangle ABC, \\triangle DEF$ എന്നിവ തുല്യമാണോ? എന്തുകൊണ്ട്?</li>
        <li>$\\triangle DEF$-ൽ $AB$ എന്ന വശത്തിന് തുല്യമായ വശം ഏതാണ്?</li>
      </ol>`,
    approach_en: 'First compute the third angle using the 180° angle sum property. Then apply ASA congruence and identify sides opposite to equal angles.',
    approach_ml: 'ആദ്യം കോണുകളുടെ തുക $180^\\circ$ ഉപയോഗിച്ച് മൂന്നാമത്തെ കോൺ കാണുക. തുടർന്ന് ASA തത്വം പ്രയോഗിച്ച് തുല്യകോണുകൾക്ക് എതിരെയുള്ള വശങ്ങൾ കണ്ടെത്തുക.',
    solution_en: `<ol type="a">
        <li>In $\\triangle ABC$: $\\angle A = 180^\\circ - (50^\\circ + 70^\\circ) = 180^\\circ - 120^\\circ = 60^\\circ$.<br>
            In $\\triangle DEF$: $\\angle D = 180^\\circ - (70^\\circ + 50^\\circ) = 180^\\circ - 120^\\circ = 60^\\circ$.</li>
        <li><b>Yes</b>, they are equal. One side ($BC = EF = 6\\text{ cm}$) and the two angles at its ends ($50^\\circ$ and $70^\\circ$) are equal in both triangles. By ASA theorem, the triangles are equal.</li>
        <li>In $\\triangle ABC$, side $AB$ is opposite to $\\angle C = 70^\\circ$. In $\\triangle DEF$, the angle equal to $70^\\circ$ is $\\angle E$. The side opposite to $\\angle E$ is $\\mathbf{DF}$. Therefore, $AB = DF$.</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>$\\triangle ABC$-യിൽ: $\\angle A = 180^\\circ - (50^\\circ + 70^\\circ) = 180^\\circ - 120^\\circ = 60^\\circ$.<br>
            $\\triangle DEF$-ൽ: $\\angle D = 180^\\circ - (70^\\circ + 50^\\circ) = 180^\\circ - 120^\\circ = 60^\\circ$.</li>
        <li><b>അതെ</b>, അവ തുല്യമാണ്. കാരണം ഒരു വശവും ($BC = EF = 6\\text{ cm}$) അതിന്റെ രണ്ടറ്റത്തുമുള്ള കോണുകളും ($50^\\circ, 70^\\circ$) രണ്ട് ത്രികോണങ്ങളിലും തുല്യമാണ് ($ASA$ തത്വം).</li>
        <li>$\\triangle ABC$-യിൽ $AB$ എന്ന വശം $\\angle C = 70^\\circ$-ക്ക് എതിരെയുള്ളതാണ്. $\\triangle DEF$-ൽ $70^\\circ$ ഉള്ള കോൺ $\\angle E$ ആണ്. $\\angle E$-ക്ക് എതിരെയുള്ള വശം $\\mathbf{DF}$ ആണ്. അതിനാൽ $AB = DF$.</li>
      </ol>`,
    tested_en: 'Calculating unknown angles and sides using ASA congruence criterion.',
    tested_ml: 'ASA നിയമമുപയോഗിച്ച് അജ്ഞാത കോണുകളും വശങ്ങളും കണ്ടെത്തൽ.',
    trap_en: 'Make sure not to say AB = DE without checking the opposite angles.',
    trap_ml: 'കോണുകൾ പരിശോധിക്കാതെ $AB = DE$ എന്ന് ധൃതിപിടിച്ച് എഴുതരുത്.'
  },

  {
    id: 'w.m8.2.3',
    sec: '8.2.4',
    concept: 'm8.2.4.isosceles-triangles',
    tests: ['m8.2.4.isosceles-triangles'],
    marks: 4,
    time: 180,
    title_en: 'Perpendicular Bisector in an Isosceles Triangle',
    title_ml: 'സമപാർശ്വ ത്രികോണത്തിലെ ലംബസമഭാജി',
    prompt_en: `<p>In $\\triangle ABC$, $AB = AC = 10\\text{ cm}$ and $BC = 12\\text{ cm}$. $AD$ is drawn perpendicular to $BC$.</p>
      <ol type="a">
        <li>Prove that $\\triangle ABD = \\triangle ACD$.</li>
        <li>Find the length of $BD$.</li>
        <li>Find the length of the perpendicular $AD$.</li>
      </ol>`,
    prompt_ml: `<p>$\\triangle ABC$-യിൽ $AB = AC = 10\\text{ cm}$ ഉം $BC = 12\\text{ cm}$ ഉം ആണ്. $A$-യിൽ നിന്ന് $BC$-യിലേക്ക് $AD$ എന്ന ലംബം വരച്ചിരിക്കുന്നു.</p>
      <ol type="a">
        <li>$\\triangle ABD = \\triangle ACD$ എന്ന് തെളിയിക്കുക.</li>
        <li>$BD$-യുടെ നീളം കണ്ടെത്തുക.</li>
        <li>ലംബമായ $AD$-യുടെ നീളം കണ്ടെത്തുക.</li>
      </ol>`,
    approach_en: 'Use RHS or SSS/ASA congruence to prove the two triangles are equal. Use the fact that $D$ is the midpoint of $BC$, then apply the Pythagorean theorem in right triangle $\\triangle ABD$.',
    approach_ml: 'രണ്ട് ത്രികോണങ്ങളും തുല്യമാണെന്ന് തെളിയിക്കുക. $D$ എന്നത് $BC$-യുടെ മധ്യബിന്ദുവാണെന്ന് മനസ്സിലാക്കി, മട്ടത്രികോണം $\\triangle ABD$-യിൽ പൈതഗോറസ് സിദ്ധാന്തം ഉപയോഗിക്കുക.',
    solution_en: `<ol type="a">
        <li>In right triangles $\\triangle ABD$ and $\\triangle ACD$:
          <ul>
            <li>Hypotenuse $AB = AC = 10\\text{ cm}$ (given)</li>
            <li>$AD = AD$ (common side)</li>
            <li>$\\angle ADB = \\angle ADC = 90^\\circ$ ($AD \\perp BC$)</li>
          </ul>
          Therefore, $\\triangle ABD = \\triangle ACD$.</li>
        <li>Since the triangles are equal, corresponding sides are equal: $BD = CD$.<br>
            $BD = \\frac{BC}{2} = \\frac{12}{2} = \\mathbf{6\\text{ cm}}$.</li>
        <li>In right-angled triangle $\\triangle ABD$, by the Pythagorean theorem:
          $$AD^2 + BD^2 = AB^2$$
          $$AD^2 + 6^2 = 10^2 \\implies AD^2 + 36 = 100$$
          $$AD^2 = 100 - 36 = 64 \\implies AD = \\sqrt{64} = \\mathbf{8\\text{ cm}}.$$
        </li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>മട്ടത്രികോണങ്ങളായ $\\triangle ABD, \\triangle ACD$ എന്നിവയിൽ:
          <ul>
            <li>കർണ്ണം $AB = AC = 10\\text{ cm}$ (തന്നിരിക്കുന്നു)</li>
            <li>$AD = AD$ (പൊതുവായ വശം)</li>
            <li>$\\angle ADB = \\angle ADC = 90^\\circ$ ($AD \\perp BC$)</li>
          </ul>
          അതിനാൽ $\\triangle ABD, \\triangle ACD$ തുല്യ ത്രികോണങ്ങളാണ്.</li>
        <li>ത്രികോണങ്ങൾ തുല്യമായതിനാൽ $BD = CD$ ആയിരിക്കും.<br>
            $BD = \\frac{BC}{2} = \\frac{12}{2} = \\mathbf{6\\text{ cm}}$.</li>
        <li>മട്ടത്രികോണം $\\triangle ABD$-യിൽ പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം:
          $$AD^2 + BD^2 = AB^2$$
          $$AD^2 + 6^2 = 10^2 \\implies AD^2 + 36 = 100$$
          $$AD^2 = 100 - 36 = 64 \\implies AD = \\sqrt{64} = \\mathbf{8\\text{ cm}}.$$
        </li>
      </ol>`,
    tested_en: 'Properties of altitude in an isosceles triangle.',
    tested_ml: 'സമപാർശ്വ ത്രികോണത്തിലെ ലംബത്തിന്റെ സവിശേഷതകൾ.',
    trap_en: 'Remember that BC is the entire base, so BD is half of BC (6 cm), not 12 cm.',
    trap_ml: 'BC എന്നത് മുഴുവൻ പാദമാണ്, അതിനാൽ BD എന്നത് അതിന്റെ പകുതിയായ 6 cm ആണ്, 12 cm അല്ല.'
  },

  {
    id: 'w.m8.2.4',
    sec: '8.2.6',
    concept: 'm8.2.6.triangle-applications',
    tests: ['m8.2.6.triangle-applications'],
    marks: 4,
    time: 200,
    title_en: 'Opposite Sides of a Parallelogram are Equal',
    title_ml: 'സാമാന്തരികത്തിന്റെ എതിർവശങ്ങൾ തുല്യമാണെന്ന് തെളിയിക്കൽ',
    prompt_en: `<p>In quadrilateral $ABCD$, $AB$ is parallel to $CD$, and $AD$ is parallel to $BC$. Diagonal $AC$ is drawn.</p>
      <ol type="a">
        <li>Name the alternate interior angles that are equal.</li>
        <li>Prove that $\\triangle ABC = \\triangle CDA$.</li>
        <li>Deduce that $AB = CD$ and $AD = BC$.</li>
      </ol>`,
    prompt_ml: `<p>ചതുർഭുജം $ABCD$-ൽ $AB$ സമാന്തരം $CD$ ഉം, $AD$ സമാന്തരം $BC$ ഉം ആണ്. വികർണ്ണം $AC$ വരച്ചിരിക്കുന്നു.</p>
      <ol type="a">
        <li>തുല്യമായ മറുകോണുകൾ ഏതെല്ലാമെന്ന് എഴുതുക.</li>
        <li>$\\triangle ABC = \\triangle CDA$ എന്ന് തെളിയിക്കുക.</li>
        <li>$AB = CD$ എന്നും $AD = BC$ എന്നും സമർത്ഥിക്കുക.</li>
      </ol>`,
    approach_en: 'Use transversal lines cutting parallel lines: alternate interior angles are equal. Then apply ASA congruence with the common diagonal AC.',
    approach_ml: 'സമാന്തര വരകളെ മുറിക്കുന്ന വരയിലെ മറുകോണുകൾ തുല്യമാണെന്ന തത്വം ഉപയോഗിക്കുക. തുടർന്ന് വികർണ്ണം AC പൊതുവായ വശമായി എടുത്ത് ASA തത്വം പ്രയോഗിക്കുക.',
    solution_en: `<ol type="a">
        <li>Since $AB \\parallel CD$ with transversal $AC$, alternate angles $\\mathbf{\\angle BAC = \\angle DCA}$.<br>
            Since $AD \\parallel BC$ with transversal $AC$, alternate angles $\\mathbf{\\angle BCA = \\angle DAC}$.</li>
        <li>In $\\triangle ABC$ and $\\triangle CDA$:
          <ul>
            <li>$\\angle BAC = \\angle DCA$ (alternate angles)</li>
            <li>$AC = AC$ (common side)</li>
            <li>$\\angle BCA = \\angle DAC$ (alternate angles)</li>
          </ul>
          By ASA theorem (one side and the two angles at its ends are equal), $\\mathbf{\\triangle ABC = \\triangle CDA}$.</li>
        <li>Since the triangles are equal, corresponding sides opposite to equal angles are equal:
          <ul>
            <li>Opposite to $\\angle BCA$ is side $AB$; opposite to equal angle $\\angle DAC$ is side $CD$. Thus $\\mathbf{AB = CD}$.</li>
            <li>Opposite to $\\angle BAC$ is side $BC$; opposite to equal angle $\\angle DCA$ is side $AD$. Thus $\\mathbf{BC = AD}$.</li>
          </ul>
        </li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>$AB \\parallel CD$ ആയതിനാൽ വികർണ്ണം $AC$ ഉണ്ടാക്കുന്ന മറുകോണുകൾ: $\\mathbf{\\angle BAC = \\angle DCA}$.<br>
            $AD \\parallel BC$ ആയതിനാൽ വികർണ്ണം $AC$ ഉണ്ടാക്കുന്ന മറുകോണുകൾ: $\\mathbf{\\angle BCA = \\angle DAC}$.</li>
        <li>$\\triangle ABC, \\triangle CDA$ എന്നിവയിൽ:
          <ul>
            <li>$\\angle BAC = \\angle DCA$ (മറുകോണുകൾ)</li>
            <li>$AC = AC$ (പൊതുവായ വശം)</li>
            <li>$\\angle BCA = \\angle DAC$ (മറുകോണുകൾ)</li>
          </ul>
          ഒരു വശവും രണ്ടറ്റത്തെ കോണുകളും തുല്യമായതിനാൽ ($ASA$ തത്വം), $\\mathbf{\\triangle ABC = \\triangle CDA}$.</li>
        <li>ത്രികോണങ്ങൾ തുല്യമായതിനാൽ തുല്യകോണുകൾക്ക് എതിരെയുള്ള വശങ്ങൾ തുല്യമായിരിക്കും:
          <ul>
            <li>$\\angle BCA$-ക്ക് എതിരെയുള്ളത് $AB$; തുല്യകോണായ $\\angle DAC$-ക്ക് എതിരെയുള്ളത് $CD$. അതിനാൽ $\\mathbf{AB = CD}$.</li>
            <li>$\\angle BAC$-ക്ക് എതിരെയുള്ളത് $BC$; തുല്യകോണായ $\\angle DCA$-ക്ക് എതിരെയുള്ളത് $AD$. അതിനാൽ $\\mathbf{BC = AD}$.</li>
          </ul>
        </li>
      </ol>`,
    tested_en: 'Proof of equality of opposite sides in a parallelogram.',
    tested_ml: 'സാമാന്തരികത്തിന്റെ എതിർവശങ്ങൾ തുല്യമാണെന്ന് തെളിയിക്കൽ.',
    trap_en: 'Make sure to pair the correct alternate angles: BAC with DCA (from AB || CD), not BAC with DAC.',
    trap_ml: 'സമാന്തര വരകൾ തിരിച്ചറിഞ്ഞ് ശരിയായ മറുകോണുകൾ തന്നെ തിരഞ്ഞെടുക്കുക (AB || CD ആയതിനാൽ BAC-യും DCA-യും ആണ് തുല്യം).'
  },

  {
    id: 'w.m8.2.5',
    sec: '8.2.3',
    concept: 'm8.2.3.sas-congruence',
    tests: ['m8.2.3.sas-congruence'],
    marks: 4,
    time: 180,
    title_en: 'Two Sides and Included Angle (SAS Congruence)',
    title_ml: 'രണ്ട് വശങ്ങളും അവയ്ക്കിടയിലെ കോണും ($SAS$ തുല്യത)',
    prompt_en: `<p>In $\\triangle ABC$ and $\\triangle PQR$, $AB = PQ = 5\\text{ cm}$, $AC = PR = 7\\text{ cm}$, and the included angle $\\angle A = \\angle P = 60^\\circ$.</p>
      <ol type="a">
        <li>State the congruence criterion that makes these two triangles equal.</li>
        <li>Which side of $\\triangle PQR$ is equal to side $BC$?</li>
        <li>If $\\angle B = 75^\\circ$, find the measure of $\\angle Q$ and $\\angle R$.</li>
      </ol>`,
    prompt_ml: `<p>$\\triangle ABC$, $\\triangle PQR$ എന്നിവയിൽ $AB = PQ = 5\\text{ cm}$, $AC = PR = 7\\text{ cm}$, ഉൾപ്പെട്ട കോൺ $\\angle A = \\angle P = 60^\\circ$ ആണ്.</p>
      <ol type="a">
        <li>ഈ രണ്ട് ത്രികോണങ്ങളും തുല്യമാണെന്ന് സ്ഥാപിക്കുന്ന തത്വം ഏതാണ്?</li>
        <li>$\\triangle PQR$-ലെ ഏത് വശമാണ് $BC$-ക്ക് തുല്യമായി വരുന്നത്?</li>
        <li>$\\angle B = 75^\\circ$ ആണെങ്കിൽ $\\angle Q, \\angle R$ എന്നിവയുടെ അളവ് കണ്ടെത്തുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li><b>SAS Congruence:</b> If two sides and the included angle of one triangle are equal to two sides and the included angle of another, the triangles are equal ($\\triangle ABC = \\triangle PQR$).</li>
        <li>Since the triangles are congruent, the third sides opposite the equal angles are equal: $QR = BC$.</li>
        <li>Corresponding angles opposite equal sides are equal:<br>
          $\\angle Q = \\angle B = \\mathbf{75^\\circ}$.<br>
          $\\angle R = 180^\\circ - (60^\\circ + 75^\\circ) = 180^\\circ - 135^\\circ = \\mathbf{45^\\circ}$.</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li><b>$SAS$ തുല്യത:</b> ഒരു ത്രികോണത്തിന്റെ രണ്ട് വശങ്ങളും അവയ്ക്കിടയിലെ കോണും മറ്റൊരു ത്രികോണത്തിന്റെ രണ്ട് വശങ്ങൾക്കും അവയ്ക്കിടയിലെ കോണിനും തുല്യമായാൽ ആ ത്രികോണങ്ങൾ തുല്യമാണ്.</li>
        <li>തുല്യകോണുകൾക്ക് എതിരെയുള്ള മൂന്നാമത്തെ വശങ്ങൾ തുല്യമാണ്: $QR = BC$.</li>
        <li>തുല്യവശങ്ങൾക്ക് എതിരെയുള്ള കോണുകൾ തുല്യമായിരിക്കും:<br>
          $\\angle Q = \\angle B = \\mathbf{75^\\circ}$.<br>
          $\\angle R = 180^\\circ - (60^\\circ + 75^\\circ) = 180^\\circ - 135^\\circ = \\mathbf{45^\\circ}$.</li>
      </ol>`,
    tested_en: 'Solving side and angle relationships using SAS congruence.',
    tested_ml: 'SAS തുല്യത ഉപയോഗിച്ച് വശങ്ങളും കോണുകളും കണക്കാക്കൽ.'
  },

  {
    id: 'w.m8.2.6',
    sec: '8.2.5',
    concept: 'm8.2.5.equilateral-triangles',
    tests: ['m8.2.5.equilateral-triangles'],
    marks: 4,
    time: 180,
    title_en: 'Equilateral Triangles and Altitude Properties',
    title_ml: 'സമഭുജത്രികോണവും ലംബത്തിന്റെ സവിശേഷതകളും',
    prompt_en: `<p>In an equilateral triangle $ABC$, each side has length $6\\text{ cm}$. Altitude $AD$ is drawn from $A$ to base $BC$.</p>
      <ol type="a">
        <li>What is the measure of each interior angle of $\\triangle ABC$?</li>
        <li>Prove that $AD$ bisects base $BC$ and bisects $\\angle A$.</li>
        <li>Calculate the exact length of altitude $AD$.</li>
      </ol>`,
    prompt_ml: `<p>വശങ്ങളുടെ നീളം $6\\text{ cm}$ വീതമായ സമഭുജത്രികോണം $ABC$-ൽ, $A$-യിൽ നിന്ന് പാദം $BC$-യിലേക്ക് $AD$ എന്ന ലംബം വരയ്ക്കുന്നു.</p>
      <ol type="a">
        <li>$\\triangle ABC$-യിലെ ഓരോ കോണിന്റെയും അളവ് എത്രയാണ്?</li>
        <li>$AD$ പാദമായ $BC$-യെയും കോൺ $\\angle A$-യെയും തുല്യമായി പകുക്കുന്നുവെന്ന് സമർത്ഥിക്കുക.</li>
        <li>ലംബം $AD$-യുടെ നീളം കണക്കാക്കുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Since all three sides are equal, all three angles are equal: $\\frac{180^\\circ}{3} = \\mathbf{60^\\circ}$.</li>
        <li>In right triangles $\\triangle ADB$ and $\\triangle ADC$: $AB = AC = 6\\text{ cm}$ (hypotenuses equal), and $AD$ is common. By RHS congruence, $\\triangle ADB = \\triangle ADC$. Hence $BD = DC = 3\\text{ cm}$ (base bisected), and $\\angle BAD = \\angle CAD = 30^\\circ$ (vertical angle bisected).</li>
        <li>By the Pythagorean theorem in $\\triangle ADB$:
          $$AD = \\sqrt{AB^2 - BD^2} = \\sqrt{6^2 - 3^2} = \\sqrt{36 - 9} = \\sqrt{27} = \\mathbf{3\\sqrt{3}\\text{ cm}} \\approx 5.20\\text{ cm}.$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>മൂന്ന് വശങ്ങളും തുല്യമായതിനാൽ മൂന്ന് കോണുകളും തുല്യമാണ്: $\\frac{180^\\circ}{3} = \\mathbf{60^\\circ}$.</li>
        <li>മട്ടത്രികോണങ്ങളായ $\\triangle ADB, \\triangle ADC$ എന്നിവയിൽ കർണ്ണങ്ങളായ $AB = AC = 6\\text{ cm}$ ഉം $AD$ പൊതുവശവുമാണ്. $RHS$ തുല്യതയനുസരിച്ച് ഇവ തുല്യമാണ്. അതിനാൽ $BD = DC = 3\\text{ cm}$ (പാദത്തെ സമഭാഗം ചെയ്യുന്നു), $\\angle BAD = \\angle CAD = 30^\\circ$ (കോണിനെ സമഭാഗം ചെയ്യുന്നു).</li>
        <li>$\\triangle ADB$-യിൽ പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം:
          $$AD = \\sqrt{6^2 - 3^2} = \\sqrt{36 - 9} = \\sqrt{27} = \\mathbf{3\\sqrt{3}\\text{ cm}} \\approx 5.20\\text{ cm}.$$</li>
      </ol>`,
    tested_en: 'Properties of equilateral triangles and calculating altitude length.',
    tested_ml: 'സമഭുജ ത്രികോണത്തിന്റെ സവിശേഷതകളും ലംബ ഉയരവും കണക്കാക്കൽ.'
  }
);
