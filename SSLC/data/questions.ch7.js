/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 7: Ratio (അംശബന്ധം)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  {
    id: 'obj.m8.7.1',
    concept: 'm8.7.1.concept-of-ratio',
    sec: '8.7.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'What is the ratio of 40 cm to 2.4 m in its simplest form?',
    prompt_ml: '40 cm ഉം 2.4 m ഉം തമ്മിലുള്ള അംശബന്ധത്തിന്റെ ലളിതരൂപം ഏതാണ്?',
    options_en: [
      { k: 'A', t: '1 : 6' },
      { k: 'B', t: '1 : 60' },
      { k: 'C', t: '1 : 4' },
      { k: 'D', t: '5 : 12' }
    ],
    options_ml: [
      { k: 'A', t: '1 : 6' },
      { k: 'B', t: '1 : 60' },
      { k: 'C', t: '1 : 4' },
      { k: 'D', t: '5 : 12' }
    ],
    answer: 'A',
    solution_en: 'First convert meters to centimeters: $2.4\\text{ m} = 240\\text{ cm}$. Ratio $= 40 : 240 = \\frac{40}{240} = 1 : 6$.',
    solution_ml: 'ആദ്യം മീറ്ററിനെ സെന്റീമീറ്ററിലേക്ക് മാറ്റുക: $2.4\\text{ m} = 240\\text{ cm}$. അംശബന്ധം $= 40 : 240 = \\frac{40}{240} = 1 : 6$.',
    tested_en: 'Simplifying ratio with unit conversion.',
    tested_ml: 'യൂണിറ്റ് തുല്യമാക്കി അംശബന്ധം ലളിതമാക്കൽ.'
  },

  {
    id: 'obj.m8.7.2',
    concept: 'm8.7.1.concept-of-ratio',
    sec: '8.7.1',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'In a school library, the ratio of science books to math books is 4 : 7. If there are 280 science books, how many math books are there?',
    prompt_ml: 'ഒരു സ്കൂൾ ലൈബ്രറിയിൽ സയൻസ് പുസ്തകങ്ങളും കണക്ക് പുസ്തകങ്ങളും തമ്മിലുള്ള അംശബന്ധം 4 : 7 ആണ്. സയൻസ് പുസ്തകങ്ങളുടെ എണ്ണം 280 ആണെങ്കിൽ കണക്ക് പുസ്തകങ്ങൾ എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '490' },
      { k: 'B', t: '420' },
      { k: 'C', t: '350' },
      { k: 'D', t: '560' }
    ],
    options_ml: [
      { k: 'A', t: '490' },
      { k: 'B', t: '420' },
      { k: 'C', t: '350' },
      { k: 'D', t: '560' }
    ],
    answer: 'A',
    solution_en: 'Let the quantities be $4x$ and $7x$. $4x = 280 \\implies x = \\frac{280}{4} = 70$. Math books $= 7 \\times 70 = 490$.',
    solution_ml: 'പുസ്തകങ്ങൾ $4x, 7x$ എന്നിരിക്കട്ടെ. $4x = 280 \\implies x = 70$. കണക്ക് പുസ്തകങ്ങളുടെ എണ്ണം $= 7 \\times 70 = 490$.',
    tested_en: 'Finding quantity from ratio and given share.',
    tested_ml: 'അംശബന്ധത്തിൽ നിന്ന് ഒരു അളവ് കണ്ടെത്തൽ.'
  },

  {
    id: 'obj.m8.7.3',
    concept: 'm8.7.2.dividing-in-ratio',
    sec: '8.7.2',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'An amount of ₹4,500 is divided between A and B in the ratio 4 : 5. How much does B receive?',
    prompt_ml: '₹4,500 രൂപ A, B എന്നിവർക്ക് 4 : 5 എന്ന അംശബന്ധത്തിൽ വീതിച്ചാൽ B-ക്ക് എത്ര രൂപ ലഭിക്കും?',
    options_en: [
      { k: 'A', t: '₹2,500' },
      { k: 'B', t: '₹2,000' },
      { k: 'C', t: '₹2,250' },
      { k: 'D', t: '₹3,000' }
    ],
    options_ml: [
      { k: 'A', t: '₹2,500' },
      { k: 'B', t: '₹2,000' },
      { k: 'C', t: '₹2,250' },
      { k: 'D', t: '₹3,000' }
    ],
    answer: 'A',
    solution_en: 'Total parts $= 4 + 5 = 9$. One part $= \\frac{4500}{9} = ₹500$. B receives $5 \\times 500 = ₹2,500$.',
    solution_ml: 'ആകെ ഭാഗം $= 4 + 5 = 9$. ഒരു ഭാഗം $= \\frac{4500}{9} = ₹500$. B-ക്ക് ലഭിക്കുന്നത് $= 5 \\times 500 = ₹2,500$.',
    tested_en: 'Dividing total amount in two parts.',
    tested_ml: 'തുകയെ രണ്ട് വിഹിതങ്ങളായി ഭാഗിക്കൽ.'
  },

  {
    id: 'obj.m8.7.4',
    concept: 'm8.7.2.dividing-in-ratio',
    sec: '8.7.2',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'Three partners share a profit of ₹36,000 in the ratio 1 : 2 : 3. What is the difference between the largest and the smallest share?',
    prompt_ml: 'മൂന്ന് പങ്കാളികൾ ₹36,000 ലാഭം 1 : 2 : 3 എന്ന അംശബന്ധത്തിൽ പങ്കിടുന്നു. ഏറ്റവും വലിയ വിഹിതവും ചെറിയ വിഹിതവും തമ്മിലുള്ള വ്യത്യാസം എത്ര?',
    options_en: [
      { k: 'A', t: '₹12,000' },
      { k: 'B', t: '₹6,000' },
      { k: 'C', t: '₹18,000' },
      { k: 'D', t: '₹8,000' }
    ],
    options_ml: [
      { k: 'A', t: '₹12,000' },
      { k: 'B', t: '₹6,000' },
      { k: 'C', t: '₹18,000' },
      { k: 'D', t: '₹8,000' }
    ],
    answer: 'A',
    solution_en: 'Total parts $= 1 + 2 + 3 = 6$. One part $= \\frac{36000}{6} = ₹6,000$. Difference between largest (3 parts) and smallest (1 part) is $3 - 1 = 2$ parts $= 2 \\times 6000 = ₹12,000$.',
    solution_ml: 'ആകെ ഭാഗം $= 1 + 2 + 3 = 6$. ഒരു ഭാഗം $= \\frac{36000}{6} = ₹6,000$. വലിയ വിഹിതവും (3) ചെറിയ വിഹിതവും (1) തമ്മിലുള്ള വ്യത്യാസം $= 2$ ഭാഗങ്ങൾ $= 2 \\times 6000 = ₹12,000$.',
    tested_en: 'Difference between shares in a three-part ratio.',
    tested_ml: 'മൂന്ന് വിഹിതങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം കാണൽ.'
  },

  {
    id: 'obj.m8.7.5',
    concept: 'm8.7.3.ratio-change',
    sec: '8.7.3',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'Two numbers are in the ratio 7 : 4. If the larger number is 24 more than the smaller number, what is the sum of the two numbers?',
    prompt_ml: 'രണ്ട് സംഖ്യകൾ തമ്മിലുള്ള അംശബന്ധം 7 : 4 ആണ്. വലിയ സംഖ്യ ചെറിയ സംഖ്യയേക്കാൾ 24 കൂടുതലാണെങ്കിൽ സംഖ്യകളുടെ തുക എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '88' },
      { k: 'B', t: '77' },
      { k: 'C', t: '66' },
      { k: 'D', t: '96' }
    ],
    options_ml: [
      { k: 'A', t: '88' },
      { k: 'B', t: '77' },
      { k: 'C', t: '66' },
      { k: 'D', t: '96' }
    ],
    answer: 'A',
    solution_en: 'Difference in parts $= 7 - 4 = 3$ parts $= 24 \\implies 1\\text{ part} = 8$. Total parts $= 7 + 4 = 11$. Sum $= 11 \\times 8 = 88$.',
    solution_ml: 'ഭാഗങ്ങളിലെ വ്യത്യാസം $= 7 - 4 = 3$ ഭാഗങ്ങൾ $= 24 \\implies 1\\text{ ഭാഗം} = 8$. ആകെ ഭാഗം $= 7 + 4 = 11$. തുക $= 11 \\times 8 = 88$.',
    tested_en: 'Finding sum from ratio difference.',
    tested_ml: 'വ്യത്യാസത്തിൽ നിന്ന് തുക കണ്ടെത്തൽ.'
  },

  {
    id: 'obj.m8.7.6',
    concept: 'm8.7.3.ratio-change',
    sec: '8.7.3',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'In a mixture of 40 L, the ratio of milk to water is 3 : 1. How many liters of water must be added so that the ratio becomes 3 : 2?',
    prompt_ml: '40 ലിറ്റർ മിശ്രിതത്തിൽ പാലിലെയും വെള്ളത്തിലെയും അംശബന്ധം 3 : 1 ആണ്. അംശബന്ധം 3 : 2 ആക്കാൻ എത്ര ലിറ്റർ വെള്ളം കൂടി ചേർക്കണം?',
    options_en: [
      { k: 'A', t: '10 L' },
      { k: 'B', t: '5 L' },
      { k: 'C', t: '8 L' },
      { k: 'D', t: '12 L' }
    ],
    options_ml: [
      { k: 'A', t: '10 L' },
      { k: 'B', t: '5 L' },
      { k: 'C', t: '8 L' },
      { k: 'D', t: '12 L' }
    ],
    answer: 'A',
    solution_en: 'Total parts $= 4$. One part $= \\frac{40}{4} = 10\\text{ L}$. Milk $= 30\\text{ L}$, Water $= 10\\text{ L}$. For new ratio $3 : 2$, milk stays $30\\text{ L}$ (3 parts), so 1 part is $10\\text{ L}$. Water needs $2$ parts $= 20\\text{ L}$. Additional water $= 20 - 10 = 10\\text{ L}$.',
    solution_ml: 'ആകെ ഭാഗം $= 4$. ഒരു ഭാഗം $= 10\\text{ L}$. പാൽ $= 30\\text{ L}$, വെള്ളം $= 10\\text{ L}$. പുതിയ അംശബന്ധം $3 : 2$ ആകുമ്പോൾ പാലിന്റെ അളവ് ($30\\text{ L}$) മാറുന്നില്ല. അതിനാൽ വെള്ളം $2$ ഭാഗം $= 20\\text{ L}$ ആകണം. അധികം ചേർക്കേണ്ട വെള്ളം $= 20 - 10 = 10\\text{ L}$.',
    tested_en: 'Mixture quantity adjustment problem.',
    tested_ml: 'മിശ്രിത കണക്കുകളിൽ അംശബന്ധ മാറ്റം.'
  },

  {
    id: 'obj.m8.7.7',
    concept: 'm8.7.4.ratio-geometry',
    sec: '8.7.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'The angles of a triangle are in the ratio 1 : 2 : 3. What is the largest angle of the triangle?',
    prompt_ml: 'ഒരു ത്രികോണത്തിലെ കോണുകൾ 1 : 2 : 3 എന്ന അംശബന്ധത്തിലാണ്. ത്രികോണത്തിലെ ഏറ്റവും വലിയ കോൺ എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '90°' },
      { k: 'B', t: '60°' },
      { k: 'C', t: '100°' },
      { k: 'D', t: '75°' }
    ],
    options_ml: [
      { k: 'A', t: '90°' },
      { k: 'B', t: '60°' },
      { k: 'C', t: '100°' },
      { k: 'D', t: '75°' }
    ],
    answer: 'A',
    solution_en: 'Sum of angles $= 180^\\circ$. Total parts $= 1 + 2 + 3 = 6$. One part $= \\frac{180^\\circ}{6} = 30^\\circ$. Largest angle $= 3 \\times 30^\\circ = 90^\\circ$ (a right-angled triangle).',
    solution_ml: 'കോണുകളുടെ തുക $= 180^\\circ$. ആകെ ഭാഗം $= 6$. ഒരു ഭാഗം $= 30^\\circ$. വലിയ കോൺ $= 3 \\times 30^\\circ = 90^\\circ$ (മട്ടത്രികോണം).',
    tested_en: 'Angles of a triangle from ratio.',
    tested_ml: 'അംശബന്ധത്തിൽ നിന്ന് ത്രികോണ കോണുകൾ കാണൽ.'
  },

  {
    id: 'obj.m8.7.8',
    concept: 'm8.7.4.ratio-geometry',
    sec: '8.7.4',
    type: 'MCQ',
    marks: 1,
    time: 30,
    prompt_en: 'A line segment from the top vertex of a triangle divides the base into two segments of lengths 4 cm and 6 cm. What is the ratio of the areas of the two triangles formed?',
    prompt_ml: 'ഒരു ത്രികോണത്തിന്റെ മുകളിലെ മൂലയിൽ നിന്നും താഴത്തെ പാദത്തിലേക്ക് വരച്ച വര പാദത്തെ 4 cm, 6 cm അളവുകളുള്ള രണ്ട് ഭാഗങ്ങളാക്കുന്നു. ഇങ്ങനെ ഉണ്ടാകുന്ന രണ്ട് ത്രികോണങ്ങളുടെ പരപ്പളവുകളുടെ അംശബന്ധം എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '2 : 3' },
      { k: 'B', t: '4 : 9' },
      { k: 'C', t: '1 : 2' },
      { k: 'D', t: '3 : 5' }
    ],
    options_ml: [
      { k: 'A', t: '2 : 3' },
      { k: 'B', t: '4 : 9' },
      { k: 'C', t: '1 : 2' },
      { k: 'D', t: '3 : 5' }
    ],
    answer: 'A',
    solution_en: 'Both triangles share the exact same height from the common vertex. Therefore, the ratio of their areas equals the ratio of their bases: $4 : 6 = 2 : 3$.',
    solution_ml: 'രണ്ട് ത്രികോണങ്ങൾക്കും പൊതുവായ മൂലയിൽ നിന്നുള്ള ലംബ ഉയരം തുല്യമാണ്. അതിനാൽ പരപ്പളവുകളുടെ അംശബന്ധം പാദങ്ങളുടെ അംശബന്ധത്തിന് തുല്യമാണ്: $4 : 6 = 2 : 3$.',
    tested_en: 'Ratio of areas of triangles sharing height.',
    tested_ml: 'ഒരേ ഉയരമുള്ള ത്രികോണങ്ങളുടെ പരപ്പളവ് അംശബന്ധം.'
  }
);

/* ── Level 2: Written Practice Exercises (SCERT Textbook) ────────────────── */
QUESTIONS.push(
  {
    id: 'w.m8.7.1',
    sec: '8.7.1',
    concept: 'm8.7.1.concept-of-ratio',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Simplifying Ratios and Comparing Fractions',
    title_ml: 'അംശബന്ധങ്ങളുടെ ലഘൂകരണവും താരതമ്യവും',
    prompt_en: `<ol type="a">
        <li>Simplify the ratio of $75\\text{ cm}$ to $1.25\\text{ m}$.</li>
        <li>In a class of $45$ students, $25$ are girls and the rest are boys. Find the ratio of girls to boys, and the ratio of boys to total students.</li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>$75\\text{ cm}$-ഉം $1.25\\text{ m}$-ഉം തമ്മിലുള്ള അംശബന്ധം ലഘൂകരിക്കുക.</li>
        <li>$45$ കുട്ടികളുള്ള ഒരു ക്ലാസിൽ $25$ പേർ പെൺകുട്ടികളും ബാക്കിയുള്ളവർ ആൺകുട്ടികളുമാണ്. പെൺകുട്ടികളും ആൺകുട്ടികളും തമ്മിലുള്ള അംശബന്ധവും, ആൺകുട്ടികളും ആകെ കുട്ടികളും തമ്മിലുള്ള അംശബന്ധവും കാണുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>$1.25\\text{ m} = 125\\text{ cm}$.<br>
          $$\\text{Ratio} = 75 : 125 = \\frac{75 \\div 25}{125 \\div 25} = \\mathbf{3 : 5}$$</li>
        <li>Total students $= 45$, girls $= 25$, boys $= 45 - 25 = 20$.<br>
          $$\\text{Girls to Boys} = 25 : 20 = \\mathbf{5 : 4}$$
          $$\\text{Boys to Total} = 20 : 45 = \\mathbf{4 : 9}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>$1.25\\text{ m} = 125\\text{ cm}$.<br>
          $$\\text{അംശബന്ധം} = 75 : 125 = \\frac{75 \\div 25}{125 \\div 25} = \\mathbf{3 : 5}$$</li>
        <li>ആകെ കുട്ടികൾ $= 45$, പെൺകുട്ടികൾ $= 25$, ആൺകുട്ടികൾ $= 45 - 25 = 20$.<br>
          $$\\text{പെൺകുട്ടികളും ആൺകുട്ടികളും} = 25 : 20 = \\mathbf{5 : 4}$$
          $$\\text{ആൺകുട്ടികളും ആകെ കുട്ടികളും} = 20 : 45 = \\mathbf{4 : 9}$$</li>
      </ol>`,
    tested_en: 'Ratio simplification, unit conversion, and part-to-whole comparisons.',
    tested_ml: 'അംശബന്ധ ലഘൂകരണം, യൂണിറ്റ് മാറ്റം, ഭാഗ താരതമ്യം.'
  },

  {
    id: 'w.m8.7.2',
    sec: '8.7.2',
    concept: 'm8.7.2.dividing-in-ratio',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Dividing Perimeter and Money in Given Ratios',
    title_ml: 'തുകയെയും ചുറ്റളവിനെയും അംശബന്ധത്തിൽ വിഭജിക്കൽ',
    prompt_en: `<ol type="a">
        <li>A wire of length $84\\text{ cm}$ is cut into two pieces in the ratio $3 : 4$. Find the length of each piece.</li>
        <li>An inheritance of ₹1,80,000 is divided among three children in the ratio $2 : 3 : 4$. Calculate the amount received by each child.</li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>$84\\text{ cm}$ നീളമുള്ള ഒരു കമ്പി $3 : 4$ എന്ന അംശബന്ധത്തിൽ രണ്ട് കഷണങ്ങളാക്കി മുറിക്കുന്നു. ഓരോ കഷണത്തിന്റെയും നീളം എത്ര?</li>
        <li>₹1,80,000 രൂപ മൂന്ന് മക്കൾക്കായി $2 : 3 : 4$ എന്ന അംശബന്ധത്തിൽ വീതിച്ചു നൽകുന്നു. ഓരോരുത്തർക്കും ലഭിച്ച തുക കണക്കാക്കുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Total parts $= 3 + 4 = 7$.<br>
          One part $= \\frac{84}{7} = 12\\text{ cm}$.<br>
          $$\\text{First piece} = 3 \\times 12 = \\mathbf{36\\text{ cm}}$$
          $$\\text{Second piece} = 4 \\times 12 = \\mathbf{48\\text{ cm}}$$</li>
        <li>Total parts $= 2 + 3 + 4 = 9$.<br>
          One part $= \\frac{180000}{9} = ₹20,000$.<br>
          $$\\text{First child} = 2 \\times 20000 = \\mathbf{₹40,000}$$
          $$\\text{Second child} = 3 \\times 20000 = \\mathbf{₹60,000}$$
          $$\\text{Third child} = 4 \\times 20000 = \\mathbf{₹80,000}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>ആകെ ഭാഗം $= 3 + 4 = 7$.<br>
          ഒരു ഭാഗം $= \\frac{84}{7} = 12\\text{ cm}$.<br>
          $$\\text{ആദ്യ കഷണം} = 3 \\times 12 = \\mathbf{36\\text{ cm}}$$
          $$\\text{രണ്ടാം കഷണം} = 4 \\times 12 = \\mathbf{48\\text{ cm}}$$</li>
        <li>ആകെ ഭാഗം $= 2 + 3 + 4 = 9$.<br>
          ഒരു ഭാഗം $= \\frac{180000}{9} = ₹20,000$.<br>
          $$\\text{ഒന്നാമത്തെ ആൾക്ക്} = 2 \\times 20000 = \\mathbf{₹40,000}$$
          $$\\text{രണ്ടാമത്തെ ആൾക്ക്} = 3 \\times 20000 = \\mathbf{₹60,000}$$
          $$\\text{മൂന്നാമത്തെ ആൾക്ക്} = 4 \\times 20000 = \\mathbf{₹80,000}$$</li>
      </ol>`,
    tested_en: 'Partitioning quantities and money according to given multi-part ratios.',
    tested_ml: 'അളവുകളെയും തുകയെയും തന്നിട്ടുള്ള അംശബന്ധത്തിൽ വിഭജിക്കൽ.'
  },

  {
    id: 'w.m8.7.3',
    sec: '8.7.3',
    concept: 'm8.7.3.ratio-change',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Ratio of Ages and Quantity Changes',
    title_ml: 'പ്രായങ്ങളിലെയും അളവുകളിലെയും അംശബന്ധ മാറ്റം',
    prompt_en: `<p>The present ages of a father and his son are in the ratio $7 : 2$.</p>
      <ol type="a">
        <li>If the father is $30$ years older than the son, find their present ages.</li>
        <li>After $10$ years, what will be the ratio of their ages?</li>
      </ol>`,
    prompt_ml: `<p>അച്ഛന്റെയും മകന്റെയും ഇപ്പോഴത്തെ പ്രായങ്ങൾ തമ്മിലുള്ള അംശബന്ധം $7 : 2$ ആണ്.</p>
      <ol type="a">
        <li>അച്ഛന് മകനേക്കാൾ $30$ വയസ്സ് കൂടുതലാണെങ്കിൽ ഇരുവരുടെയും ഇപ്പോഴത്തെ പ്രായം കണ്ടെത്തുക.</li>
        <li>$10$ വർഷത്തിനു ശേഷം ഇവരുടെ പ്രായങ്ങൾ തമ്മിലുള്ള അംശബന്ധം എത്രയായിരിക്കും?</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Let present ages be $7x$ and $2x$.<br>
          Difference $= 7x - 2x = 5x = 30 \\implies x = 6$.<br>
          $$\\text{Father's age} = 7 \\times 6 = \\mathbf{42\\text{ years}}$$
          $$\\text{Son's age} = 2 \\times 6 = \\mathbf{12\\text{ years}}$$</li>
        <li>After 10 years:<br>
          Father's age $= 42 + 10 = 52\\text{ years}$.<br>
          Son's age $= 12 + 10 = 22\\text{ years}$.<br>
          $$\\text{New ratio} = 52 : 22 = \\frac{52}{22} = \\mathbf{26 : 11}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>ഇപ്പോഴത്തെ പ്രായങ്ങൾ $7x, 2x$ എന്നിരിക്കട്ടെ.<br>
          വ്യത്യാസം $= 7x - 2x = 5x = 30 \\implies x = 6$.<br>
          $$\\text{അച്ഛന്റെ പ്രായം} = 7 \\times 6 = \\mathbf{42\\text{ വയസ്സ്}}$$
          $$\\text{മകന്റെ പ്രായം} = 2 \\times 6 = \\mathbf{12\\text{ വയസ്സ്}}$$</li>
        <li>10 വർഷത്തിനു ശേഷം:<br>
          അച്ഛന്റെ പ്രായം $= 42 + 10 = 52\\text{ വയസ്സ്}$.<br>
          മകന്റെ പ്രായം $= 12 + 10 = 22\\text{ വയസ്സ്}$.<br>
          $$\\text{പുതിയ അംശബന്ധം} = 52 : 22 = \\frac{52}{22} = \\mathbf{26 : 11}$$</li>
      </ol>`,
    tested_en: 'Linear equations for ratio change with age differences.',
    tested_ml: 'പ്രായ വ്യത്യാസവും അംശബന്ധ മാറ്റവും ഉപയോഗിച്ചുള്ള സമവാക്യ രൂപീകരണം.'
  },

  {
    id: 'w.m8.7.4',
    sec: '8.7.4',
    concept: 'm8.7.4.ratio-geometry',
    type: 'written',
    marks: 4,
    time: 180,
    title_en: 'Rectangle Dimensions and Triangle Area Partition',
    title_ml: 'ചതുരത്തിന്റെ അളവുകളും ത്രികോണ പരപ്പളവ് വിഭജനവും',
    prompt_en: `<ol type="a">
        <li>The length and breadth of a rectangular plot are in the ratio $5 : 3$. If its perimeter is $128\\text{ m}$, find its dimensions and area.</li>
        <li>In $\\triangle ABC$, point $D$ lies on base $BC$ such that $BD : DC = 3 : 2$. If the area of $\\triangle ABC$ is $75\\text{ cm}^2$, find the area of $\\triangle ABD$ and $\\triangle ADC$.</li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>ഒരു ചതുരസ്ഥലത്തിന്റെ നീളവും വീതിയും തമ്മിലുള്ള അംശബന്ധം $5 : 3$ ആണ്. ചുറ്റളവ് $128\\text{ m}$ ആണെങ്കിൽ നീളവും വീതിയും വിസ്തീർണ്ണവും കാണുക.</li>
        <li>$\\triangle ABC$-യിൽ $D$ എന്നത് പാദമായ $BC$-യിലെ ഒരു ബിന്ദുവാണ്, $BD : DC = 3 : 2$. $\\triangle ABC$-യുടെ പരപ്പളവ് $75\\text{ cm}^2$ ആണെങ്കിൽ $\\triangle ABD$, $\\triangle ADC$ എന്നിവയുടെ പരപ്പളവ് കണ്ടെത്തുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Let length $= 5x$ and breadth $= 3x$.<br>
          Perimeter $= 2(5x + 3x) = 2(8x) = 16x = 128 \\implies x = 8\\text{ m}$.<br>
          $$\\text{Length} = 5 \\times 8 = \\mathbf{40\\text{ m}}$$
          $$\\text{Breadth} = 3 \\times 8 = \\mathbf{24\\text{ m}}$$
          $$\\text{Area} = 40 \\times 24 = \\mathbf{960\\text{ m}^2}$$</li>
        <li>Triangles $\\triangle ABD$ and $\\triangle ADC$ share the same height from vertex $A$.<br>
          Ratio of areas $= BD : DC = 3 : 2$. Total parts $= 3 + 2 = 5$.<br>
          One part $= \\frac{75}{5} = 15\\text{ cm}^2$.<br>
          $$\\text{Area of } \\triangle ABD = 3 \\times 15 = \\mathbf{45\\text{ cm}^2}$$
          $$\\text{Area of } \\triangle ADC = 2 \\times 15 = \\mathbf{30\\text{ cm}^2}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>നീളം $= 5x$, വീതി $= 3x$ എന്നിരിക്കട്ടെ.<br>
          ചുറ്റളവ് $= 2(5x + 3x) = 16x = 128 \\implies x = 8\\text{ m}$.<br>
          $$\\text{നീളം} = 5 \\times 8 = \\mathbf{40\\text{ m}}$$
          $$\\text{വീതി} = 3 \\times 8 = \\mathbf{24\\text{ m}}$$
          $$\\text{വിസ്തീർണ്ണം} = 40 \\times 24 = \\mathbf{960\\text{ m}^2}$$</li>
        <li>$\\triangle ABD$, $\\triangle ADC$ എന്നിവയ്ക്ക് $A$-യിൽ നിന്നുള്ള ലംബ ഉയരം തുല്യമാണ്.<br>
          പരപ്പളവുകളുടെ അംശബന്ധം $= 3 : 2$. ആകെ ഭാഗം $= 3 + 2 = 5$.<br>
          ഒരു ഭാഗം $= \\frac{75}{5} = 15\\text{ cm}^2$.<br>
          $$\\triangle ABD\\text{-യുടെ പരപ്പളവ്} = 3 \\times 15 = \\mathbf{45\\text{ cm}^2}$$
          $$\\triangle ADC\\text{-യുടെ പരപ്പളവ്} = 2 \\times 15 = \\mathbf{30\\text{ cm}^2}$$</li>
      </ol>`,
    tested_en: 'Ratio applications in perimeter, area, and triangle base division.',
    tested_ml: 'ചുറ്റളവ്, പരപ്പളവ്, ത്രികോണ പാദ വിഭജനത്തിലെ അംശബന്ധ പ്രയോഗങ്ങൾ.'
  },

  {
    id: 'w.m8.7.5',
    sec: '8.7.4',
    concept: 'm8.7.4.ratio-geometry',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Three-Term Ratio and Triangle Geometry',
    title_ml: 'ത്രിപദ അംശബന്ധവും ത്രികോണ ജ്യാമിതിയും',
    prompt_en: `<ol type="a">
        <li>The three angles of a triangle are in the ratio $2 : 3 : 5$. Find the measure of each angle. Is it a right-angled triangle?</li>
        <li>The sides of a triangle are in the ratio $5 : 12 : 13$ and its perimeter is $60\\text{ cm}$. Find the lengths of the three sides and calculate its area.</li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>ഒരു ത്രികോണത്തിലെ മൂന്ന് കോണുകൾ തമ്മിലുള്ള അംശബന്ധം $2 : 3 : 5$ ആണ്. ഓരോ കോണിന്റെയും അളവ് കാണുക. ഇതൊരു മട്ടത്രികോണമാണോ?</li>
        <li>ഒരു ത്രികോണത്തിന്റെ വശങ്ങൾ തമ്മിലുള്ള അംശബന്ധം $5 : 12 : 13$-ഉം ചുറ്റളവ് $60\\text{ cm}$-ഉം ആണ്. മൂന്ന് വശങ്ങളുടെയും നീളം കണ്ട് ത്രികോണത്തിന്റെ പരപ്പളവ് കണക്കാക്കുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Sum of angles in a triangle $= 180^\\circ$. Total parts $= 2 + 3 + 5 = 10$.<br>
          One part $= \\frac{180^\\circ}{10} = 18^\\circ$.<br>
          $$\\text{First angle} = 2 \\times 18^\\circ = \\mathbf{36^\\circ}$$
          $$\\text{Second angle} = 3 \\times 18^\\circ = \\mathbf{54^\\circ}$$
          $$\\text{Third angle} = 5 \\times 18^\\circ = \\mathbf{90^\\circ}$$
          Yes, since one angle is $90^\\circ$, it is a <b>right-angled triangle</b>.</li>
        <li>Total parts $= 5 + 12 + 13 = 30$.<br>
          One part $= \\frac{60}{30} = 2\\text{ cm}$.<br>
          $$a = 5 \\times 2 = \\mathbf{10\\text{ cm}}, \\quad b = 12 \\times 2 = \\mathbf{24\\text{ cm}}, \\quad c = 13 \\times 2 = \\mathbf{26\\text{ cm}}$$
          Since $10^2 + 24^2 = 100 + 576 = 676 = 26^2$, it is a right-angled triangle with perpendicular sides $10\\text{ cm}$ and $24\\text{ cm}$.<br>
          $$\\text{Area} = \\frac{1}{2} \\times 10 \\times 24 = \\mathbf{120\\text{ cm}^2}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>ത്രികോണത്തിലെ കോണുകളുടെ തുക $= 180^\\circ$. ആകെ ഭാഗം $= 2 + 3 + 5 = 10$.<br>
          ഒരു ഭാഗം $= \\frac{180^\\circ}{10} = 18^\\circ$.<br>
          $$\\text{ഒന്നാം കോൺ} = 2 \\times 18^\\circ = \\mathbf{36^\\circ}$$
          $$\\text{രണ്ടാം കോൺ} = 3 \\times 18^\\circ = \\mathbf{54^\\circ}$$
          $$\\text{മൂന്നാം കോൺ} = 5 \\times 18^\\circ = \\mathbf{90^\\circ}$$
          ഒരു കോൺ $90^\\circ$ ആയതിനാൽ ഇതൊരു <b>മട്ടത്രികോണമാണ്</b>.</li>
        <li>ആകെ ഭാഗം $= 5 + 12 + 13 = 30$.<br>
          ഒരു ഭാഗം $= \\frac{60}{30} = 2\\text{ cm}$.<br>
          $$a = 5 \\times 2 = \\mathbf{10\\text{ cm}}, \\quad b = 12 \\times 2 = \\mathbf{24\\text{ cm}}, \\quad c = 13 \\times 2 = \\mathbf{26\\text{ cm}}$$
          $10^2 + 24^2 = 100 + 576 = 676 = 26^2$ ആയതിനാൽ ഇതൊരു മട്ടത്രികോണമാണ്.<br>
          $$\\text{പരപ്പളവ്} = \\frac{1}{2} \\times 10 \\times 24 = \\mathbf{120\\text{ cm}^2}$$</li>
      </ol>`,
    tested_en: 'Angle and side ratios, Pythagorean verification, and right triangle area.',
    tested_ml: 'കോൺ-വശ അംശബന്ധങ്ങൾ, പൈതഗോറസ് ബന്ധം, മട്ടത്രികോണ പരപ്പളവ്.'
  },

  {
    id: 'w.m8.7.6',
    sec: '8.7.3',
    concept: 'm8.7.3.ratio-change',
    type: 'written',
    marks: 4,
    time: 200,
    title_en: 'Mixture Invariance and Ratio Change',
    title_ml: 'മിശ്രിതങ്ങളും അംശബന്ധ മാറ്റവും',
    prompt_en: `<ol type="a">
        <li>A mixture of $60\\text{ litres}$ contains milk and water in the ratio $2 : 1$. How many litres of water must be added to make the ratio of milk to water $1 : 2$?</li>
        <li>Two numbers are in the ratio $3 : 5$. If $8$ is added to each number, the ratio becomes $2 : 3$. Find the original two numbers.</li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>$60\\text{ litres}$ ഉള്ള ഒരു മിശ്രിതത്തിൽ പാലും വെള്ളവും $2 : 1$ എന്ന അംശബന്ധത്തിലാണ്. പാലും വെള്ളവും തമ്മിലുള്ള അംശബന്ധം $1 : 2$ ആകാൻ എത്ര ലിറ്റർ വെള്ളം കൂടി ചേർക്കണം?</li>
        <li>രണ്ട് സംഖ്യകൾ തമ്മിലുള്ള അംശബന്ധം $3 : 5$ ആണ്. രണ്ട് സംഖ്യകളോടും $8$ വീതം കൂട്ടിയപ്പോൾ അംശബന്ധം $2 : 3$ ആയി മാറി. സംഖ്യകൾ കണ്ടെത്തുക.</li>
      </ol>`,
    solution_en: `<ol type="a">
        <li>Total mixture $= 60\\text{ L}$, ratio $= 2 : 1$.<br>
          Milk $= \\frac{2}{3} \\times 60 = 40\\text{ L}$, Water $= \\frac{1}{3} \\times 60 = 20\\text{ L}$.<br>
          Let $x$ litres of water be added. Milk remains $40\\text{ L}$.<br>
          $$\\frac{40}{20 + x} = \\frac{1}{2} \\implies 40 \\times 2 = 20 + x \\implies 80 = 20 + x \\implies x = \\mathbf{60\\text{ litres}}$$
          Hence, $60\\text{ litres}$ of water must be added.</li>
        <li>Let the numbers be $3x$ and $5x$.<br>
          $$\\frac{3x + 8}{5x + 8} = \\frac{2}{3}$$
          $$3(3x + 8) = 2(5x + 8) \\implies 9x + 24 = 10x + 16 \\implies 10x - 9x = 24 - 16 \\implies x = 8$$
          $$\\text{First number} = 3 \\times 8 = \\mathbf{24}$$
          $$\\text{Second number} = 5 \\times 8 = \\mathbf{40}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>ആകെ മിശ്രിതം $= 60\\text{ L}$, അംശബന്ധം $= 2 : 1$.<br>
          പാൽ $= \\frac{2}{3} \\times 60 = 40\\text{ L}$, വെള്ളം $= \\frac{1}{3} \\times 60 = 20\\text{ L}$.<br>
          $x$ ലിറ്റർ വെള്ളം ചേർക്കുന്നു എന്ന് കരുതുക. പാലിന്റെ അളവ് മാറ്റമില്ലാതെ $40\\text{ L}$ ആയി തുടരുന്നു.<br>
          $$\\frac{40}{20 + x} = \\frac{1}{2} \\implies 80 = 20 + x \\implies x = \\mathbf{60\\text{ ലിറ്റർ}}$$
          അതിനാൽ $60\\text{ ലിറ്റർ}$ വെള്ളം കൂടി ചേർക്കണം.</li>
        <li>സംഖ്യകൾ $3x, 5x$ എന്നിരിക്കട്ടെ.<br>
          $$\\frac{3x + 8}{5x + 8} = \\frac{2}{3}$$
          $$3(3x + 8) = 2(5x + 8) \\implies 9x + 24 = 10x + 16 \\implies x = 8$$
          $$\\text{ആദ്യ സംഖ്യ} = 3 \\times 8 = \\mathbf{24}$$
          $$\\text{രണ്ടാം സംഖ്യ} = 5 \\times 8 = \\mathbf{40}$$</li>
      </ol>`,
    tested_en: 'Ratio alteration in liquid mixtures and algebraic formulation of ratio shifts.',
    tested_ml: 'മിശ്രിതങ്ങളിലെ അംശബന്ധ മാറ്റവും ബീജഗണിത സമവാക്യ പരിഹാരവും.'
  }
);
