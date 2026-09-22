/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Past Exam Papers (PYQ)
   Kerala SCERT Annual Examinations (2018–2024).
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Level 3 Completion Rung with Quick OMR and full step-by-step solutions.
   ══════════════════════════════════════════════════════════════════════════ */

PYQ.push(
  {
    id: 'pyq.m8.2024.q1',
    course: 'm8',
    exam: 'Annual Exam',
    year: 2024,
    qno: 1,
    marks: 2,
    type: 'MCQ',
    title_en: 'Isosceles Triangle Angles & Side',
    title_ml: 'സമപാർശ്വ ത്രികോണത്തിലെ കോണുകളും വശവും',
    prompt_en: `<p>In $\\triangle ABC$, $AB = 5\\text{ cm}$, $BC = 5\\text{ cm}$, and $\\angle B = 60^\\circ$.</p>
      <ol type="a">
        <li>Find the measure of $\\angle A$.</li>
        <li>What is the length of side $AC$?</li>
      </ol>`,
    prompt_ml: `<p>$\\triangle ABC$-യിൽ $AB = 5\\text{ cm}$, $BC = 5\\text{ cm}$, $\\angle B = 60^\\circ$ ആണ്.</p>
      <ol type="a">
        <li>$\\angle A$-യുടെ അളവ് കണ്ടെത്തുക.</li>
        <li>$AC$ എന്ന വശത്തിന്റെ നീളം എത്ര?</li>
      </ol>`,
    options_en: [
      { k: 'A', t: '$\\angle A = 60^\\circ, AC = 5\\text{ cm}$' },
      { k: 'B', t: '$\\angle A = 50^\\circ, AC = 6\\text{ cm}$' },
      { k: 'C', t: '$\\angle A = 60^\\circ, AC = 10\\text{ cm}$' },
      { k: 'D', t: '$\\angle A = 45^\\circ, AC = 5\\text{ cm}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\angle A = 60^\\circ, AC = 5\\text{ cm}$' },
      { k: 'B', t: '$\\angle A = 50^\\circ, AC = 6\\text{ cm}$' },
      { k: 'C', t: '$\\angle A = 60^\\circ, AC = 10\\text{ cm}$' },
      { k: 'D', t: '$\\angle A = 45^\\circ, AC = 5\\text{ cm}$' }
    ],
    answer: 'A',
    solution_en: `<ol type="a">
        <li>Since $AB = BC = 5\\text{ cm}$, $\\triangle ABC$ is an isosceles triangle. Therefore, the angles opposite to the equal sides are equal: $\\angle A = \\angle C$.<br>
            The sum of angles in a triangle is $180^\\circ$.<br>
            $$\\angle A + \\angle C = 180^\\circ - 60^\\circ = 120^\\circ$$
            Since $\\angle A = \\angle C$, $\\mathbf{\\angle A = \\frac{120^\\circ}{2} = 60^\\circ}$.</li>
        <li>Since all three angles are $60^\\circ$ ($\\angle A = \\angle B = \\angle C = 60^\\circ$), $\\triangle ABC$ is an equilateral triangle. Therefore, all three sides are equal:<br>
            $$\\mathbf{AC = 5\\text{ cm}}$$.</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>$AB = BC = 5\\text{ cm}$ ആയതിനാൽ $\\triangle ABC$ ഒരു സമപാർശ്വ ത്രികോണമാണ്. തുല്യവശങ്ങൾക്ക് എതിരെയുള്ള കോണുകൾ തുല്യമായിരിക്കും: $\\angle A = \\angle C$.<br>
            കോണുകളുടെ തുക $180^\\circ$ ആണ്.<br>
            $$\\angle A + \\angle C = 180^\\circ - 60^\\circ = 120^\\circ$$
            അതിനാൽ $\\mathbf{\\angle A = \\frac{120^\\circ}{2} = 60^\\circ}$.</li>
        <li>മൂന്ന് കോണുകളും $60^\\circ$ ആയതിനാൽ ഇത് സമഭുജ ത്രികോണമാണ്. അതിനാൽ മൂന്ന് വശങ്ങളും തുല്യമാണ്:<br>
            $$\\mathbf{AC = 5\\text{ cm}}$$.</li>
      </ol>`,
    tests: ['m8.2.4.isosceles-triangles', 'm8.2.5.equilateral-triangles']
  },

  {
    id: 'pyq.m8.2024.q4',
    course: 'm8',
    exam: 'Annual Exam',
    year: 2024,
    qno: 4,
    marks: 2,
    type: 'MCQ',
    title_en: 'Equilateral Triangle Definition & Angles',
    title_ml: 'സമഭുജ ത്രികോണത്തിന്റെ കോണുകൾ',
    prompt_en: `<p>A triangle has all three sides of equal length.</p>
      <ol type="a">
        <li>What special name is given to such a triangle?</li>
        <li>What is the measure of each interior angle?</li>
      </ol>`,
    prompt_ml: `<p>ഒരു ത്രികോണത്തിന്റെ മൂന്ന് വശങ്ങളുടെ നീളവും തുല്യമാണ്.</p>
      <ol type="a">
        <li>ഇത്തരം ത്രികോണങ്ങൾക്ക് പറയുന്ന പ്രത്യേക പേരെന്ത്?</li>
        <li>ഓരോ കോണിന്റെയും അളവ് എത്രയാണ്?</li>
      </ol>`,
    options_en: [
      { k: 'A', t: 'Equilateral triangle, $60^\\circ$' },
      { k: 'B', t: 'Isosceles triangle, $45^\\circ$' },
      { k: 'C', t: 'Right triangle, $90^\\circ$' },
      { k: 'D', t: 'Scalene triangle, $60^\\circ$' }
    ],
    options_ml: [
      { k: 'A', t: 'സമഭുജ ത്രികോണം, $60^\\circ$' },
      { k: 'B', t: 'സമപാർശ്വ ത്രികോണം, $45^\\circ$' },
      { k: 'C', t: 'മട്ടത്രികോണം, $90^\\circ$' },
      { k: 'D', t: 'വിഷമഭുജ ത്രികോണം, $60^\\circ$' }
    ],
    answer: 'A',
    solution_en: `<ol type="a">
        <li>A triangle with all three sides equal is called an <b>equilateral triangle</b>.</li>
        <li>Each interior angle measures $\\frac{180^\\circ}{3} = \\mathbf{60^\\circ}$.</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>മൂന്ന് വശങ്ങളും തുല്യമായ ത്രികോണത്തെ <b>സമഭുജ ത്രികോണം</b> എന്ന് വിളിക്കുന്നു.</li>
        <li>ഓരോ കോണിന്റെയും അളവ് $\\frac{180^\\circ}{3} = \\mathbf{60^\\circ}$ ആണ്.</li>
      </ol>`,
    tests: ['m8.2.5.equilateral-triangles']
  },

  {
    id: 'pyq.m8.2024.q6',
    course: 'm8',
    exam: 'Annual Exam',
    year: 2024,
    qno: 6,
    marks: 3,
    type: 'MCQ',
    title_en: 'Difference of Squares Applications',
    title_ml: 'വർഗ്ഗങ്ങളുടെ വ്യത്യാസത്തിന്റെ പ്രയോഗങ്ങൾ',
    prompt_en: `<ol type="a">
        <li>Calculate $146^2 - 145^2$ without direct multiplication.</li>
        <li>Using the identity $(x+y)(x-y) = x^2 - y^2$, compute $31 \\times 29$.</li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>നേരിട്ട് ഗുണിക്കാതെ $146^2 - 145^2$ കണക്കാക്കുക.</li>
        <li>$(x+y)(x-y) = x^2 - y^2$ എന്ന സമവാക്യം ഉപയോഗിച്ച് $31 \\times 29$ കണ്ടെത്തുക.</li>
      </ol>`,
    options_en: [
      { k: 'A', t: '(a) $291$, (b) $899$' },
      { k: 'B', t: '(a) $290$, (b) $901$' },
      { k: 'C', t: '(a) $1$, (b) $899$' },
      { k: 'D', t: '(a) $291$, (b) $900$' }
    ],
    options_ml: [
      { k: 'A', t: '(a) $291$, (b) $899$' },
      { k: 'B', t: '(a) $290$, (b) $901$' },
      { k: 'C', t: '(a) $1$, (b) $899$' },
      { k: 'D', t: '(a) $291$, (b) $900$' }
    ],
    answer: 'A',
    solution_en: `<ol type="a">
        <li>Using $a^2 - b^2 = (a+b)(a-b)$:<br>
            $$146^2 - 145^2 = (146 + 145)(146 - 145) = 291 \\times 1 = \\mathbf{291}$$</li>
        <li>Write $31 = 30 + 1$ and $29 = 30 - 1$:<br>
            $$31 \\times 29 = (30 + 1)(30 - 1) = 30^2 - 1^2 = 900 - 1 = \\mathbf{899}$$</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>$a^2 - b^2 = (a+b)(a-b)$ ഉപയോഗിച്ച്:<br>
            $$146^2 - 145^2 = (146 + 145)(146 - 145) = 291 \\times 1 = \\mathbf{291}$$</li>
        <li>$31 = 30 + 1$ എന്നും $29 = 30 - 1$ എന്നും എഴുതുക:<br>
            $$31 \\times 29 = (30 + 1)(30 - 1) = 30^2 - 1^2 = 900 - 1 = \\mathbf{899}$$</li>
      </ol>`,
    tests: ['m8.1.3.two-digit-squares', 'm8.3.4.diff-of-squares']
  },

  {
    id: 'pyq.m8.2023.q2',
    course: 'm8',
    exam: 'Annual Exam',
    year: 2023,
    qno: 2,
    marks: 2,
    type: 'MCQ',
    title_en: 'Decimal Squares and Square Roots',
    title_ml: 'ദശാംശ വർഗ്ഗങ്ങളും വർഗ്ഗമൂലവും',
    prompt_en: `<ol type="a">
        <li>What is the square of $0.07$?</li>
        <li>Find the value of $\\sqrt{0.0049}$.</li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>$0.07$-ന്റെ വർഗ്ഗം എത്രയാണ്?</li>
        <li>$\\sqrt{0.0049}$-ന്റെ വില കാണുക.</li>
      </ol>`,
    options_en: [
      { k: 'A', t: '(a) $0.0049$, (b) $0.07$' },
      { k: 'B', t: '(a) $0.049$, (b) $0.7$' },
      { k: 'C', t: '(a) $0.49$, (b) $0.07$' },
      { k: 'D', t: '(a) $0.00049$, (b) $0.007$' }
    ],
    options_ml: [
      { k: 'A', t: '(a) $0.0049$, (b) $0.07$' },
      { k: 'B', t: '(a) $0.049$, (b) $0.7$' },
      { k: 'C', t: '(a) $0.49$, (b) $0.07$' },
      { k: 'D', t: '(a) $0.00049$, (b) $0.007$' }
    ],
    answer: 'A',
    solution_en: `<ol type="a">
        <li>$0.07^2 = 0.07 \\times 0.07 = \\mathbf{0.0049}$ (two decimal places double to four).</li>
        <li>$\\sqrt{0.0049} = \\mathbf{0.07}$ (four decimal places halve to two).</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>$0.07^2 = 0.07 \\times 0.07 = \\mathbf{0.0049}$ (രണ്ട് ദശാംശസ്ഥാനങ്ങൾ വർഗ്ഗത്തിൽ നാലാകുന്നു).</li>
        <li>$\\sqrt{0.0049} = \\mathbf{0.07}$ (നാല് ദശാംശസ്ഥാനങ്ങളുടെ പകുതിയായ രണ്ട് സ്ഥാനങ്ങൾ).</li>
      </ol>`,
    tests: ['m8.1.4.decimal-squares', 'm8.1.6.square-roots']
  },

  {
    id: 'pyq.m8.2023.q7',
    course: 'm8',
    exam: 'Annual Exam',
    year: 2023,
    qno: 7,
    marks: 4,
    type: 'MCQ',
    title_en: 'Altitude and Area of an Isosceles Triangle',
    title_ml: 'സമപാർശ്വ ത്രികോണത്തിന്റെ ഉയരവും വിസ്തീർണ്ണവും',
    prompt_en: `<p>In $\\triangle ABC$, $AB = AC = 13\\text{ cm}$ and $BC = 10\\text{ cm}$. $AD$ is drawn perpendicular to $BC$.</p>
      <ol type="a">
        <li>What is the length of $BD$?</li>
        <li>Calculate the length of the altitude $AD$.</li>
        <li>Find the area of $\\triangle ABC$.</li>
      </ol>`,
    prompt_ml: `<p>$\\triangle ABC$-യിൽ $AB = AC = 13\\text{ cm}$, $BC = 10\\text{ cm}$ ആണ്. $A$-യിൽ നിന്ന് $BC$-യിലേക്ക് $AD$ ലംബമായി വരച്ചിരിക്കുന്നു.</p>
      <ol type="a">
        <li>$BD$-യുടെ നീളം എത്ര?</li>
        <li>ലംബമായ $AD$-യുടെ നീളം കണക്കാക്കുക.</li>
        <li>$\\triangle ABC$-യുടെ വിസ്തീർണ്ണം കണ്ടെത്തുക.</li>
      </ol>`,
    options_en: [
      { k: 'A', t: '$BD = 5\\text{ cm}, AD = 12\\text{ cm}, \\text{Area} = 60\\text{ cm}^2$' },
      { k: 'B', t: '$BD = 10\\text{ cm}, AD = 12\\text{ cm}, \\text{Area} = 120\\text{ cm}^2$' },
      { k: 'C', t: '$BD = 5\\text{ cm}, AD = 8\\text{ cm}, \\text{Area} = 40\\text{ cm}^2$' },
      { k: 'D', t: '$BD = 6\\text{ cm}, AD = 10\\text{ cm}, \\text{Area} = 50\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$BD = 5\\text{ cm}, AD = 12\\text{ cm}, \\text{പരപ്പളവ്} = 60\\text{ cm}^2$' },
      { k: 'B', t: '$BD = 10\\text{ cm}, AD = 12\\text{ cm}, \\text{പരപ്പളവ്} = 120\\text{ cm}^2$' },
      { k: 'C', t: '$BD = 5\\text{ cm}, AD = 8\\text{ cm}, \\text{പരപ്പളവ്} = 40\\text{ cm}^2$' },
      { k: 'D', t: '$BD = 6\\text{ cm}, AD = 10\\text{ cm}, \\text{പരപ്പളവ്} = 50\\text{ cm}^2$' }
    ],
    answer: 'A',
    solution_en: `<ol type="a">
        <li>The perpendicular from the vertex of an isosceles triangle bisects the base:<br>
            $$BD = \\frac{BC}{2} = \\frac{10}{2} = \\mathbf{5\\text{ cm}}$$</li>
        <li>In right-angled triangle $\\triangle ABD$, by the Pythagorean theorem:<br>
            $$AD^2 + BD^2 = AB^2$$
            $$AD^2 + 5^2 = 13^2 \\implies AD^2 + 25 = 169$$
            $$AD^2 = 169 - 25 = 144 \\implies AD = \\sqrt{144} = \\mathbf{12\\text{ cm}}$$</li>
        <li>Area of $\\triangle ABC = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 10 \\times 12 = \\mathbf{60\\text{ cm}^2}$.</li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>സമപാർശ്വ ത്രികോണത്തിലെ മുകളിൽ നിന്നുള്ള ലംബം പാദത്തെ സമഭാഗം ചെയ്യുന്നു:<br>
            $$BD = \\frac{BC}{2} = \\frac{10}{2} = \\mathbf{5\\text{ cm}}$$</li>
        <li>മട്ടത്രികോണം $\\triangle ABD$-യിൽ പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം:<br>
            $$AD^2 + BD^2 = AB^2$$
            $$AD^2 + 5^2 = 13^2 \\implies AD^2 + 25 = 169$$
            $$AD^2 = 169 - 25 = 144 \\implies AD = \\sqrt{144} = \\mathbf{12\\text{ cm}}$$</li>
        <li>$\\triangle ABC$-യുടെ പരപ്പളവ് $= \\frac{1}{2} \\times \\text{പാദം} \\times \\text{ഉയരം} = \\frac{1}{2} \\times 10 \\times 12 = \\mathbf{60\\text{ cm}^2}$.</li>
      </ol>`,
    tests: ['m8.2.4.isosceles-triangles']
  },

  {
    id: 'pyq.m8.2018.q1',
    course: 'm8',
    exam: 'Annual Exam',
    year: 2018,
    qno: 1,
    marks: 2,
    type: 'MCQ',
    title_en: 'Product of Binomials Mental Math',
    title_ml: 'രണ്ട് തുകകളുടെ ഗുണനം',
    prompt_en: `<p>Compute $51 \\times 61$ by writing it in the form $(50 + 1)(60 + 1)$.</p>`,
    prompt_ml: `<p>$(50 + 1)(60 + 1)$ എന്ന രൂപത്തിലെഴുതി $51 \\times 61$-ന്റെ ഗുണനഫലം കണ്ടെത്തുക.</p>`,
    options_en: [
      { k: 'A', t: '$3111$' },
      { k: 'B', t: '$3000$' },
      { k: 'C', t: '$3100$' },
      { k: 'D', t: '$3211$' }
    ],
    options_ml: [
      { k: 'A', t: '$3111$' },
      { k: 'B', t: '$3000$' },
      { k: 'C', t: '$3100$' },
      { k: 'D', t: '$3211$' }
    ],
    answer: 'A',
    solution_en: `<p>$$51 \\times 61 = (50 + 1)(60 + 1)$$
      $$= (50 \\times 60) + (50 \\times 1) + (1 \\times 60) + (1 \\times 1)$$
      $$= 3000 + 50 + 60 + 1 = 3000 + 111 = \\mathbf{3111}$$</p>`,
    solution_ml: `<p>$$51 \\times 61 = (50 + 1)(60 + 1)$$
      $$= (50 \\times 60) + (50 \\times 1) + (1 \\times 60) + (1 \\times 1)$$
      $$= 3000 + 50 + 60 + 1 = 3000 + 111 = \\mathbf{3111}$$</p>`,
    tests: ['m8.1.3.two-digit-squares', 'm8.3.5.product-of-binomials']
  },

  /* ══════════════════════════════════════════════════════════════════════════
     Class 9 Mathematics — Past Exam Papers (Annual Exam 2024)
     ══════════════════════════════════════════════════════════════════════════ */
  {
    id: 'pyq.m9.2024.q1',
    course: 'm9',
    exam: 'Annual Exam',
    year: 2024,
    qno: 1,
    marks: 2,
    type: 'MCQ',
    title_en: 'Median of Student Marks',
    title_ml: 'വിദ്യാർത്ഥികളുടെ മാർക്കിന്റെ മധ്യമം',
    prompt_en: '<p>The scores of 8 students in a test are: $70, 65, 45, 54, 72, 66, 58, 50$. Find the median score.</p>',
    prompt_ml: '<p>ഒരു പരീക്ഷയിൽ 8 കുട്ടികൾക്ക് ലഭിച്ച സ്കോറുകൾ: $70, 65, 45, 54, 72, 66, 58, 50$. മധ്യമ സ്കോർ കണ്ടെത്തുക.</p>',
    options_en: [
      { k: 'A', t: '$61.5$' },
      { k: 'B', t: '$65$' },
      { k: 'C', t: '$58$' },
      { k: 'D', t: '$60$' }
    ],
    options_ml: [
      { k: 'A', t: '$61.5$' },
      { k: 'B', t: '$65$' },
      { k: 'C', t: '$58$' },
      { k: 'D', t: '$60$' }
    ],
    answer: 'A',
    solution_en: '<p>Arrange in ascending order: $45, 50, 54, 58, 65, 66, 70, 72$.<br>Since $N = 8$ (even), the median is the average of the 4th and 5th values:<br>$$\\text{Median} = \\frac{58 + 65}{2} = \\frac{123}{2} = \\mathbf{61.5}$$</p>',
    solution_ml: '<p>ആരോഹണ ക്രമത്തിൽ എഴുതിയാൽ: $45, 50, 54, 58, 65, 66, 70, 72$.<br>ആകെ 8 എണ്ണം ഉള്ളതിനാൽ നടുവിലെ രണ്ട് സംഖ്യകളുടെ (4, 5 സ്ഥാനങ്ങളിലെ) ശരാശരിയാണ് മധ്യമം:<br>$$\\text{മധ്യമം} = \\frac{58 + 65}{2} = \\mathbf{61.5}$$</p>',
    tests: ['m9.13.1.concept-of-mean-and-calculations']
  },
  {
    id: 'pyq.m9.2024.q2',
    course: 'm9',
    exam: 'Annual Exam',
    year: 2024,
    qno: 2,
    marks: 2,
    type: 'MCQ',
    title_en: 'Sum and Difference of Two Numbers',
    title_ml: 'രണ്ട് സംഖ്യകളുടെ തുകയും വ്യത്യാസവും',
    prompt_en: '<p>The sum of two numbers is $21$ and their difference is $5$. What are the two numbers?</p>',
    prompt_ml: '<p>രണ്ട് സംഖ്യകളുടെ തുക $21$-ഉം അവയുടെ വ്യത്യാസം $5$-ഉം ആണ്. സംഖ്യകൾ ഏതെല്ലാം?</p>',
    options_en: [
      { k: 'A', t: '$13$ and $8$' },
      { k: 'B', t: '$14$ and $7$' },
      { k: 'C', t: '$12$ and $9$' },
      { k: 'D', t: '$15$ and $6$' }
    ],
    options_ml: [
      { k: 'A', t: '$13$-ഉം $8$-ഉം' },
      { k: 'B', t: '$14$-ഉം $7$-ഉം' },
      { k: 'C', t: '$12$-ഉം $9$-ഉം' },
      { k: 'D', t: '$15$-ഉം $6$-ഉം' }
    ],
    answer: 'A',
    solution_en: '<p>Let the numbers be $x$ and $y$.<br>$$x + y = 21, \\quad x - y = 5$$<br>Adding the two equations: $2x = 26 \\implies x = 13$.<br>Subtracting: $y = 21 - 13 = 8$.<br>The numbers are $\\mathbf{13}$ and $\\mathbf{8}$.</p>',
    solution_ml: '<p>സംഖ്യകൾ $x, y$ എന്നിരിക്കട്ടെ.<br>$$x + y = 21, \\quad x - y = 5$$<br>രണ്ട് സമവാക്യങ്ങളും കൂട്ടുമ്പോൾ: $2x = 26 \\implies x = 13$.<br>$y = 21 - 13 = 8$.<br>സംഖ്യകൾ $\\mathbf{13}$, $\\mathbf{8}$ എന്നിവയാണ്.</p>',
    tests: ['m9.3.1.formulating-pairs-of-equations', 'm9.3.2.elimination-method']
  },
  {
    id: 'pyq.m9.2024.q3',
    course: 'm9',
    exam: 'Annual Exam',
    year: 2024,
    qno: 3,
    marks: 3,
    type: 'MCQ',
    title_en: 'Hypotenuse of Right Triangle',
    title_ml: 'മട്ടത്രികോണത്തിന്റെ കർണ്ണത്തിന്റെ നീളം',
    prompt_en: '<p>In right triangle $\\triangle ABC$, $\\angle A = 90^\\circ$, $AB = 1\\text{ m}$, and $AC = 2\\text{ m}$. What is the exact length of hypotenuse $BC$?</p>',
    prompt_ml: '<p>മട്ടത്രികോണം $\\triangle ABC$-യിൽ $\\angle A = 90^\\circ$, $AB = 1\\text{ മീറ്റർ}$, $AC = 2\\text{ മീറ്റർ}$ ആയാൽ കർണ്ണം $BC$-യുടെ കൃത്യമായ നീളം എത്ര?</p>',
    options_en: [
      { k: 'A', t: '$\\sqrt{5}\\text{ m}$' },
      { k: 'B', t: '$3\\text{ m}$' },
      { k: 'C', t: '$\\sqrt{3}\\text{ m}$' },
      { k: 'D', t: '$2.5\\text{ m}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\sqrt{5}\\text{ മീറ്റർ}$' },
      { k: 'B', t: '$3\\text{ മീറ്റർ}$' },
      { k: 'C', t: '$\\sqrt{3}\\text{ മീറ്റർ}$' },
      { k: 'D', t: '$2.5\\text{ മീറ്റർ}$' }
    ],
    answer: 'A',
    solution_en: '<p>By the Pythagorean theorem:<br>$$BC^2 = AB^2 + AC^2 = 1^2 + 2^2 = 1 + 4 = 5$$<br>$$BC = \\mathbf{\\sqrt{5}\\text{ m}}$$.</p>',
    solution_ml: '<p>പൈതഗോറസ് സിദ്ധാന്തപ്രകാരം:<br>$$BC^2 = AB^2 + AC^2 = 1^2 + 2^2 = 1 + 4 = 5$$<br>$$BC = \\mathbf{\\sqrt{5}\\text{ മീറ്റർ}}$$.</p>',
    tests: ['m9.4.1.diagonal-of-square-and-sqrt2']
  },

  /* ══════════════════════════════════════════════════════════════════════════
     Class 10 Mathematics (SSLC) — Past Exam Papers (March 2024 Board Exam)
     ══════════════════════════════════════════════════════════════════════════ */
  {
    id: 'pyq.m10.2024.q1',
    course: 'm10',
    exam: 'SSLC Annual Exam',
    year: 2024,
    qno: 1,
    marks: 2,
    type: 'MCQ',
    title_en: 'Positions of Points Relative to Semicircle',
    title_ml: 'വ്യാസത്തിൽ വരച്ച വൃത്തവും ബിന്ദുക്കളുടെ സ്ഥാനവും',
    prompt_en: '<p>In a figure, a circle is drawn with line segment $AB$ as diameter. Point $P$ has $\\angle APB = 110^\\circ$ and point $Q$ has $\\angle AQB = 80^\\circ$. What are the positions of $P$ and $Q$ relative to the circle?</p>',
    prompt_ml: '<p>ചിത്രത്തിൽ $AB$ വ്യാസമായി ഒരു വൃത്തം വരച്ചാൽ, $\\angle APB = 110^\\circ$, $\\angle AQB = 80^\\circ$ ആകുമ്പോൾ $P, Q$ എന്നീ ബിന്ദുക്കൾ വൃത്തത്തിനകത്തോ പുറത്തോ വൃത്തത്തിലോ എന്ന് കണ്ടെത്തുക.</p>',
    options_en: [
      { k: 'A', t: 'P is inside the circle, Q is outside the circle' },
      { k: 'B', t: 'P is outside the circle, Q is inside the circle' },
      { k: 'C', t: 'Both P and Q are on the circle' },
      { k: 'D', t: 'Both P and Q are inside the circle' }
    ],
    options_ml: [
      { k: 'A', t: 'P വൃത്തത്തിനകത്താണ്, Q വൃത്തത്തിന് പുറത്താണ്' },
      { k: 'B', t: 'P വൃത്തത്തിന് പുറത്താണ്, Q വൃത്തത്തിനകത്താണ്' },
      { k: 'C', t: 'P-യും Q-വും വൃത്തത്തിലാണ്' },
      { k: 'D', t: 'രണ്ട് ബിന്ദുക്കളും വൃത്തത്തിനകത്താണ്' }
    ],
    answer: 'A',
    solution_en: '<p>Since $\\angle APB = 110^\\circ > 90^\\circ$, point $P$ lies <b>inside</b> the circle. Since $\\angle AQB = 80^\\circ < 90^\\circ$, point $Q$ lies <b>outside</b> the circle.</p>',
    solution_ml: '<p>$\\angle APB = 110^\\circ > 90^\\circ$ ആയതിനാൽ $P$ വൃത്തത്തിന് <b>അകത്താണ്</b>. $\\angle AQB = 80^\\circ < 90^\\circ$ ആയതിനാൽ $Q$ വൃത്തത്തിന് <b>പുറത്താണ്</b>.</p>',
    tests: ['m10.2.3.angles-inside-and-outside-circle']
  },
  {
    id: 'pyq.m10.2024.q2',
    course: 'm10',
    exam: 'SSLC Annual Exam',
    year: 2024,
    qno: 2,
    marks: 2,
    type: 'MCQ',
    title_en: 'Median of Hemoglobin Levels',
    title_ml: 'ഹീമോഗ്ലോബിൻ അളവിന്റെ മധ്യമം',
    prompt_en: '<p>The hemoglobin levels (in g/dL) of 7 students are: $12.9, 12.0, 12.6, 12.5, 14.1, 13.7, 13.4$. Find the median hemoglobin level.</p>',
    prompt_ml: '<p>7 കുട്ടികളുടെ രക്തത്തിലെ ഹീമോഗ്ലോബിന്റെ അളവ് (ഗ്രാം/ഡെസിലിറ്ററിൽ): $12.9, 12.0, 12.6, 12.5, 14.1, 13.7, 13.4$. മധ്യമം കണക്കാക്കുക.</p>',
    options_en: [
      { k: 'A', t: '$12.9\\text{ g/dL}$' },
      { k: 'B', t: '$12.6\\text{ g/dL}$' },
      { k: 'C', t: '$13.4\\text{ g/dL}$' },
      { k: 'D', t: '$12.5\\text{ g/dL}$' }
    ],
    options_ml: [
      { k: 'A', t: '$12.9\\text{ g/dL}$' },
      { k: 'B', t: '$12.6\\text{ g/dL}$' },
      { k: 'C', t: '$13.4\\text{ g/dL}$' },
      { k: 'D', t: '$12.5\\text{ g/dL}$' }
    ],
    answer: 'A',
    solution_en: '<p>Arrange in ascending order: $12.0, 12.5, 12.6, 12.9, 13.4, 13.7, 14.1$.<br>With $N = 7$ observations, the median is the 4th observation: $\\mathbf{12.9\\text{ g/dL}}$.</p>',
    solution_ml: '<p>ആരോഹണ ക്രമത്തിൽ എഴുതിയാൽ: $12.0, 12.5, 12.6, 12.9, 13.4, 13.7, 14.1$.<br>ആകെ 7 എണ്ണം ഉള്ളതിനാൽ നാലാമത്തെ നിരീക്ഷണമാണ് മധ്യമം: $\\mathbf{12.9\\text{ g/dL}}$.</p>',
    tests: ['m10.11.1.median-of-raw-data']
  },
  {
    id: 'pyq.m10.2024.q3',
    course: 'm10',
    exam: 'SSLC Annual Exam',
    year: 2024,
    qno: 3,
    marks: 2,
    type: 'MCQ',
    title_en: 'Square Perimeters Arithmetic Sequence',
    title_ml: 'സമചതുര ചുറ്റളവുകളുടെ സമാന്തരശ്രേണി',
    prompt_en: '<p>The perimeters of squares with sides $1\\text{ cm}, 2\\text{ cm}, 3\\text{ cm}, \\dots$ form an arithmetic sequence. What is the sequence and its common difference?</p>',
    prompt_ml: '<p>വശങ്ങൾ $1\\text{ cm}, 2\\text{ cm}, 3\\text{ cm}, \\dots$ എന്നിങ്ങനെയുള്ള സമചതുരങ്ങളുടെ ചുറ്റളവുകൾ സമാന്തരശ്രേണിയിലാണ്. ശ്രേണിയും പൊതുവ്യത്യാസവും ഏത്?</p>',
    options_en: [
      { k: 'A', t: 'Sequence: $4, 8, 12, \\dots$, Common difference $d = 4$' },
      { k: 'B', t: 'Sequence: $1, 4, 9, \\dots$, Common difference $d = 3$' },
      { k: 'C', t: 'Sequence: $4, 8, 16, \\dots$, Common difference $d = 4$' },
      { k: 'D', t: 'Sequence: $2, 4, 6, \\dots$, Common difference $d = 2$' }
    ],
    options_ml: [
      { k: 'A', t: 'ശ്രേണി: $4, 8, 12, \\dots$, പൊതുവ്യത്യാസം $d = 4$' },
      { k: 'B', t: 'ശ്രേണി: $1, 4, 9, \\dots$, പൊതുവ്യത്യാസം $d = 3$' },
      { k: 'C', t: 'ശ്രേണി: $4, 8, 16, \\dots$, പൊതുവ്യത്യാസം $d = 4$' },
      { k: 'D', t: 'ശ്രേണി: $2, 4, 6, \\dots$, പൊതുവ്യത്യാസം $d = 2$' }
    ],
    answer: 'A',
    solution_en: '<p>Perimeter $= 4 \\times \\text{side}$. For sides $1, 2, 3, \\dots$, perimeters are $4(1) = 4, 4(2) = 8, 4(3) = 12, \\dots$<br>The sequence is $\\mathbf{4, 8, 12, \\dots}$ with common difference $\\mathbf{d = 4}$.</p>',
    solution_ml: '<p>ചുറ്റളവ് $= 4 \\times \\text{വശം}$. വശങ്ങൾ $1, 2, 3, \\dots$ ആകുമ്പോൾ ചുറ്റളവുകൾ $4, 8, 12, \\dots$<br>ശ്രേണി: $\\mathbf{4, 8, 12, \\dots}$, പൊതുവ്യത്യാസം $\\mathbf{d = 4}$.</p>',
    tests: ['m10.1.1.arithmetic-sequence-definition']
  },
  {
    id: 'pyq.m10.2024.q4',
    course: 'm10',
    exam: 'SSLC Annual Exam',
    year: 2024,
    qno: 4,
    marks: 2,
    type: 'MCQ',
    title_en: 'Geometric Probability in Shaded Square',
    title_ml: 'സമചതുരത്തിലെ ജ്യാമിതീയ സാധ്യത',
    prompt_en: '<p>A rectangular strip of width $2\\text{ cm}$ across a square of side $5\\text{ cm}$ is shaded (area $= 2 \\times 5 = 10\\text{ cm}^2$). A dot is put inside the square without looking. Find the probability of the dot falling in the shaded region.</p>',
    prompt_ml: '<p>$5\\text{ cm}$ വശമുള്ള ഒരു സമചതുരത്തിൽ $2\\text{ cm}$ വീതിയിലുള്ള ഒരു ചതുരഭാഗം ഷേഡ് ചെയ്തിരിക്കുന്നു (പരപ്പളവ് $= 2 \\times 5 = 10\\text{ cm}^2$). കണ്ണടച്ച് ഒരു കുത്തിട്ടാൽ അത് ഷേഡ് ചെയ്ത ഭാഗത്താകാനുള്ള സാധ്യത എത്ര?</p>',
    options_en: [
      { k: 'A', t: '$\\frac{2}{5}$' },
      { k: 'B', t: '$\\frac{1}{5}$' },
      { k: 'C', t: '$\\frac{3}{5}$' },
      { k: 'D', t: '$\\frac{2}{25}$' }
    ],
    options_ml: [
      { k: 'A', t: '$\\frac{2}{5}$' },
      { k: 'B', t: '$\\frac{1}{5}$' },
      { k: 'C', t: '$\\frac{3}{5}$' },
      { k: 'D', t: '$\\frac{2}{25}$' }
    ],
    answer: 'A',
    solution_en: '<p>Total area of the square $= 5^2 = 25\\text{ cm}^2$.<br>Area of shaded region $= 2 \\times 5 = 10\\text{ cm}^2$.<br>$$\\text{Probability} = \\frac{10}{25} = \\mathbf{\\frac{2}{5}}$$.</p>',
    solution_ml: '<p>സമചതുരത്തിന്റെ ആകെ പരപ്പളവ് $= 5^2 = 25\\text{ cm}^2$.<br>ഷേഡ് ചെയ്ത ഭാഗത്തിന്റെ പരപ്പളവ് $= 10\\text{ cm}^2$.<br>$$\\text{സാധ്യത} = \\frac{10}{25} = \\mathbf{\\frac{2}{5}}$$.</p>',
    tests: ['m10.3.2.geometric-probability']
  },
  {
    id: 'pyq.m10.2024.q6',
    course: 'm10',
    exam: 'SSLC Annual Exam',
    year: 2024,
    qno: 6,
    marks: 3,
    type: 'MCQ',
    title_en: 'Quadratic Age Word Problem',
    title_ml: 'വയസ്സുകൾ തമ്മിലുള്ള രണ്ടാംകൃതി സമവാക്യം',
    prompt_en: '<p>Ajay is 10 years older than Renuka. The product of their ages is 144. Find their respective ages.</p>',
    prompt_ml: '<p>അജയന് രേണുകയേക്കാൾ 10 വയസ്സ് കൂടുതലാണ്. അവരുടെ വയസ്സുകളുടെ ഗുണനഫലം 144 ആണ്. രണ്ടുപേരുടെയും വയസ്സുകൾ കണ്ടെത്തുക.</p>',
    options_en: [
      { k: 'A', t: 'Renuka: $8$, Ajay: $18$' },
      { k: 'B', t: 'Renuka: $6$, Ajay: $16$' },
      { k: 'C', t: 'Renuka: $12$, Ajay: $22$' },
      { k: 'D', t: 'Renuka: $9$, Ajay: $19$' }
    ],
    options_ml: [
      { k: 'A', t: 'രേണുക: $8$, അജയൻ: $18$' },
      { k: 'B', t: 'രേണുക: $6$, അജയൻ: $16$' },
      { k: 'C', t: 'രേണുക: $12$, അജയൻ: $22$' },
      { k: 'D', t: 'രേണുക: $9$, അജയൻ: $19$' }
    ],
    answer: 'A',
    solution_en: '<p>Let Renuka age be $x$. Ajay age is $x + 10$.<br>$$x(x + 10) = 144 \\implies x^2 + 10x - 144 = 0$$<br>$$(x + 18)(x - 8) = 0 \\implies x = 8 \\text{ (since age } > 0)$$<br>Renuka is $\\mathbf{8}$ years old and Ajay is $8 + 10 = \\mathbf{18}$ years old.</p>',
    solution_ml: '<p>രേണുകയുടെ വയസ്സ് $x$ ആയാൽ, അജയന്റെ വയസ്സ് $x + 10$.<br>$$x(x + 10) = 144 \\implies x^2 + 10x - 144 = 0$$<br>$$(x + 18)(x - 8) = 0 \\implies x = 8$$<br>രേണുകയ്ക്ക് $\\mathbf{8}$ വയസ്സും അജയന് $\\mathbf{18}$ വയസ്സുമാണ്.</p>',
    tests: ['m10.4.4.applications-of-quadratic-equations']
  },
  {
    id: 'pyq.m10.2024.q15',
    course: 'm10',
    exam: 'SSLC Annual Exam',
    year: 2024,
    qno: 15,
    marks: 4,
    type: 'MCQ',
    title_en: 'Cone Made from Circular Sector',
    title_ml: 'വൃത്താംശത്തിൽ നിന്ന് ഉണ്ടാക്കുന്ന വൃത്തസ്തൂപിക',
    prompt_en: '<p>A sector of central angle $120^\\circ$ is cut out from a circle of radius $15\\text{ cm}$ and rolled up to form a cone. Find the slant height, base radius, and curved surface area of the cone.</p>',
    prompt_ml: '<p>ആരം $15\\text{ cm}$ ആയ വൃത്തത്തിൽ നിന്ന് $120^\\circ$ കേന്ദ്രകോണുള്ള വൃത്താംശം വെട്ടിയെടുത്ത് ഒരു വൃത്തസ്തൂപിക ഉണ്ടാക്കുന്നു. സ്തൂപികയുടെ ചരിവുയരം, പാദ ആരം, വക്രതല പരപ്പളവ് എന്നിവ കണ്ടെത്തുക.</p>',
    options_en: [
      { k: 'A', t: '$l = 15\\text{ cm}, r = 5\\text{ cm}, \\text{CSA} = 75\\pi\\text{ cm}^2$' },
      { k: 'B', t: '$l = 15\\text{ cm}, r = 6\\text{ cm}, \\text{CSA} = 90\\pi\\text{ cm}^2$' },
      { k: 'C', t: '$l = 12\\text{ cm}, r = 5\\text{ cm}, \\text{CSA} = 60\\pi\\text{ cm}^2$' },
      { k: 'D', t: '$l = 10\\text{ cm}, r = 5\\text{ cm}, \\text{CSA} = 50\\pi\\text{ cm}^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$l = 15\\text{ cm}, r = 5\\text{ cm}, \\text{വക്രതല പരപ്പളവ്} = 75\\pi\\text{ cm}^2$' },
      { k: 'B', t: '$l = 15\\text{ cm}, r = 6\\text{ cm}, \\text{വക്രതല പരപ്പളവ്} = 90\\pi\\text{ cm}^2$' },
      { k: 'C', t: '$l = 12\\text{ cm}, r = 5\\text{ cm}, \\text{വക്രതല പരപ്പളവ്} = 60\\pi\\text{ cm}^2$' },
      { k: 'D', t: '$l = 10\\text{ cm}, r = 5\\text{ cm}, \\text{വക്രതല പരപ്പളവ്} = 50\\pi\\text{ cm}^2$' }
    ],
    answer: 'A',
    solution_en: '<p>1. Slant height $l$ equals radius of sector: $l = \\mathbf{15\\text{ cm}}$.<br>2. Base radius $r = l \\times \\frac{x}{360} = 15 \\times \\frac{120}{360} = \\mathbf{5\\text{ cm}}$.<br>3. Curved Surface Area $= \\pi r l = \\pi \\times 5 \\times 15 = \\mathbf{75\\pi\\text{ cm}^2}$.</p>',
    solution_ml: '<p>1. ചരിവുയരം $l$ വൃത്തത്തിന്റെ ആരത്തിന് തുല്യം: $l = \\mathbf{15\\text{ cm}}$.<br>2. പാദ ആരം $r = 15 \\times \\frac{120}{360} = \\mathbf{5\\text{ cm}}$.<br>3. വക്രതല പരപ്പളവ് $= \\pi r l = \\pi \\times 5 \\times 15 = \\mathbf{75\\pi\\text{ cm}^2}$.</p>',
    tests: ['m10.8.3.cone-area-and-volume']
  }
);
