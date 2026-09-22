/* ══════════════════════════════════════════════════════════════════════════
   Class 8 Mathematics — Chapter 3: Square Identities (വർഗ്ഗസമവാക്യങ്ങൾ)
   Objective (OMR) Questions & Written Practice Questions
   Strictly bilingual: pure English (_en) and pure Malayalam (_ml).
   Authentic SCERT Kerala textbook problems. Zero language mixing.
   ══════════════════════════════════════════════════════════════════════════ */

/* ── Level 1: Objective Questions (OMR) ─────────────────────────────────── */
OBJECTIVE.push(
  {
    id: 'obj.m8.3.1',
    concept: 'm8.3.1.square-of-sum',
    sec: '8.3.1',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'Which of the following is the correct expansion of $(x + y)^2$?',
    prompt_ml: '$(x + y)^2$-ന്റെ ശരിയായ വികസിത രൂപം താഴെ പറയുന്നവയിൽ ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$x^2 + y^2$' },
      { k: 'B', t: '$x^2 + 2xy + y^2$' },
      { k: 'C', t: '$x^2 + xy + y^2$' },
      { k: 'D', t: '$x^2 - 2xy + y^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$x^2 + y^2$' },
      { k: 'B', t: '$x^2 + 2xy + y^2$' },
      { k: 'C', t: '$x^2 + xy + y^2$' },
      { k: 'D', t: '$x^2 - 2xy + y^2$' }
    ],
    answer: 'B',
    solution_en: 'By the square of a sum identity, $(x + y)^2 = (x + y)(x + y) = x^2 + xy + yx + y^2 = x^2 + 2xy + y^2$. The middle term $2xy$ represents the two rectangular pieces in geometric dissection.',
    solution_ml: 'തുകയുടെ വർഗ്ഗത്തിനുള്ള സമവാക്യപ്രകാരം, $(x + y)^2 = (x + y)(x + y) = x^2 + 2xy + y^2$ ആണ്. ഇതിലെ മധ്യപദമായ $2xy$ ജ്യാമിതീയ വിഭജനത്തിലെ രണ്ട് ചതുരങ്ങളെ സൂചിപ്പിക്കുന്നു.',
    tested_en: 'Identity for square of a sum.',
    tested_ml: 'തുകയുടെ വർഗ്ഗത്തിനുള്ള സമവാക്യം.',
    trap_en: 'Forgetting the middle term 2xy.',
    trap_ml: 'മധ്യത്തിലെ 2xy വിട്ടുപോകരുത്.'
  },

  {
    id: 'obj.m8.3.2',
    concept: 'm8.3.1.square-of-sum',
    sec: '8.3.1',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'Using the identity $(x + y)^2 = x^2 + 2xy + y^2$, what is the value of $103^2$?',
    prompt_ml: '$(x + y)^2 = x^2 + 2xy + y^2$ എന്ന സമവാക്യം ഉപയോഗിച്ച് $103^2$-ന്റെ വില എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$10609$' },
      { k: 'B', t: '$10309$' },
      { k: 'C', t: '$10690$' },
      { k: 'D', t: '$10009$' }
    ],
    options_ml: [
      { k: 'A', t: '$10609$' },
      { k: 'B', t: '$10309$' },
      { k: 'C', t: '$10690$' },
      { k: 'D', t: '$10009$' }
    ],
    answer: 'A',
    solution_en: '$103^2 = (100 + 3)^2 = 100^2 + 2(100)(3) + 3^2 = 10000 + 600 + 9 = 10609$.',
    solution_ml: '$103^2 = (100 + 3)^2 = 100^2 + 2(100)(3) + 3^2 = 10000 + 600 + 9 = 10609$.',
    tested_en: 'Mental squaring using (x+y)²',
    tested_ml: '(x+y)² ഉപയോഗിച്ചുള്ള മനസ്സിൽ കണക്കുകൂട്ടൽ.'
  },

  {
    id: 'obj.m8.3.3',
    concept: 'm8.3.2.square-of-diff',
    sec: '8.3.2',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'What is the expansion of $(x - y)^2$?',
    prompt_ml: '$(x - y)^2$-ന്റെ വികസിത രൂപം ഏതാണ്?',
    options_en: [
      { k: 'A', t: '$x^2 - 2xy - y^2$' },
      { k: 'B', t: '$x^2 - y^2$' },
      { k: 'C', t: '$x^2 - 2xy + y^2$' },
      { k: 'D', t: '$x^2 + 2xy - y^2$' }
    ],
    options_ml: [
      { k: 'A', t: '$x^2 - 2xy - y^2$' },
      { k: 'B', t: '$x^2 - y^2$' },
      { k: 'C', t: '$x^2 - 2xy + y^2$' },
      { k: 'D', t: '$x^2 + 2xy - y^2$' }
    ],
    answer: 'C',
    solution_en: '$(x - y)^2 = (x - y)(x - y) = x^2 - xy - yx + (-y)^2 = x^2 - 2xy + y^2$. Notice that the last term is $+y^2$ because $(-y) \\times (-y) = +y^2$.',
    solution_ml: '$(x - y)^2 = (x - y)(x - y) = x^2 - xy - yx + (-y)^2 = x^2 - 2xy + y^2$. $(-y) \\times (-y) = +y^2$ ആയതിനാൽ അവസാന പദം $+y^2$ ആയിരിക്കും.',
    tested_en: 'Identity for square of a difference.',
    tested_ml: 'വ്യത്യാസത്തിന്റെ വർഗ്ഗത്തിനുള്ള സമവാക്യം.',
    trap_en: 'Writing -y² at the end instead of +y².',
    trap_ml: 'അവസാനം +y² എന്നതിന് പകരം -y² എന്ന് തെറ്റായി എഴുതരുത്.'
  },

  {
    id: 'obj.m8.3.4',
    concept: 'm8.3.2.square-of-diff',
    sec: '8.3.2',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'Using $(x - y)^2$, what is $99^2$?',
    prompt_ml: '$(x - y)^2$ ഉപയോഗിച്ച് $99^2$-ന്റെ വില കണ്ടെത്തുക:',
    options_en: [
      { k: 'A', t: '$9801$' },
      { k: 'B', t: '$9901$' },
      { k: 'C', t: '$9810$' },
      { k: 'D', t: '$9701$' }
    ],
    options_ml: [
      { k: 'A', t: '$9801$' },
      { k: 'B', t: '$9901$' },
      { k: 'C', t: '$9810$' },
      { k: 'D', t: '$9701$' }
    ],
    answer: 'A',
    solution_en: '$99^2 = (100 - 1)^2 = 100^2 - 2(100)(1) + 1^2 = 10000 - 200 + 1 = 9801$.',
    solution_ml: '$99^2 = (100 - 1)^2 = 100^2 - 2(100)(1) + 1^2 = 10000 - 200 + 1 = 9801$.',
    tested_en: 'Mental squaring using difference of squares.',
    tested_ml: 'വ്യത്യാസത്തിന്റെ വർഗ്ഗം ഉപയോഗിച്ചുള്ള മനസ്സിൽ കണക്കുകൂട്ടൽ.'
  },

  {
    id: 'obj.m8.3.5',
    concept: 'm8.3.3.sum-diff-relations',
    sec: '8.3.3',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'What is the value of $(x + y)^2 - (x - y)^2$?',
    prompt_ml: '$(x + y)^2 - (x - y)^2$-ന്റെ വില എത്രയാണ്?',
    options_en: [
      { k: 'A', t: '$2(x^2 + y^2)$' },
      { k: 'B', t: '$2xy$' },
      { k: 'C', t: '$4xy$' },
      { k: 'D', t: '$0$' }
    ],
    options_ml: [
      { k: 'A', t: '$2(x^2 + y^2)$' },
      { k: 'B', t: '$2xy$' },
      { k: 'C', t: '$4xy$' },
      { k: 'D', t: '$0$' }
    ],
    answer: 'C',
    solution_en: '$(x + y)^2 - (x - y)^2 = (x^2 + 2xy + y^2) - (x^2 - 2xy + y^2) = 2xy - (-2xy) = 4xy$.',
    solution_ml: '$(x + y)^2 - (x - y)^2 = (x^2 + 2xy + y^2) - (x^2 - 2xy + y^2) = 2xy - (-2xy) = 4xy$.',
    tested_en: 'Difference between square of sum and square of difference.',
    tested_ml: 'തുകയുടെ വർഗ്ഗവും വ്യത്യാസത്തിന്റെ വർഗ്ഗവും തമ്മിലുള്ള വ്യത്യാസം.'
  },

  {
    id: 'obj.m8.3.6',
    concept: 'm8.3.4.diff-of-squares',
    sec: '8.3.4',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'What is the value of $68^2 - 32^2$ calculated using difference of two squares?',
    prompt_ml: 'വർഗ്ഗങ്ങളുടെ വ്യത്യാസത്തിനുള്ള സമവാക്യം ഉപയോഗിച്ച് $68^2 - 32^2$-ന്റെ വില കണ്ടെത്തുക:',
    options_en: [
      { k: 'A', t: '$3600$' },
      { k: 'B', t: '$360$' },
      { k: 'C', t: '$1296$' },
      { k: 'D', t: '$3200$' }
    ],
    options_ml: [
      { k: 'A', t: '$3600$' },
      { k: 'B', t: '$360$' },
      { k: 'C', t: '$1296$' },
      { k: 'D', t: '$3200$' }
    ],
    answer: 'A',
    solution_en: 'By the identity $x^2 - y^2 = (x + y)(x - y)$:\n$$68^2 - 32^2 = (68 + 32)(68 - 32) = 100 \\times 36 = 3600.$$',
    solution_ml: '$x^2 - y^2 = (x + y)(x - y)$ എന്ന സമവാക്യപ്രകാരം:\n$$68^2 - 32^2 = (68 + 32)(68 - 32) = 100 \\times 36 = 3600.$$',
    tested_en: 'Applying x² - y² = (x+y)(x-y).',
    tested_ml: 'x² - y² = (x+y)(x-y) സമവാക്യത്തിന്റെ പ്രയോഗം.'
  },

  {
    id: 'obj.m8.3.7',
    concept: 'm8.3.4.diff-of-squares',
    sec: '8.3.4',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'For three consecutive natural numbers, the product of the first and the third is always:',
    prompt_ml: 'തുടർച്ചയായ മൂന്ന് എണ്ണൽസംഖ്യകളിൽ ഒന്നാമത്തെയും മൂന്നാമത്തെയും സംഖ്യകളുടെ ഗുണനഫലം എപ്പോഴും:',
    options_en: [
      { k: 'A', t: 'Equal to the square of the middle number' },
      { k: 'B', t: 'One less than the square of the middle number' },
      { k: 'C', t: 'One more than the square of the middle number' },
      { k: 'D', t: 'Twice the middle number' }
    ],
    options_ml: [
      { k: 'A', t: 'നടുവിലെ സംഖ്യയുടെ വർഗ്ഗത്തിന് തുല്യമാണ്' },
      { k: 'B', t: 'നടുവിലെ സംഖ്യയുടെ വർഗ്ഗത്തേക്കാൾ 1 കുറവാണ്' },
      { k: 'C', t: 'നടുവിലെ സംഖ്യയുടെ വർഗ്ഗത്തേക്കാൾ 1 കൂടുതലാണ്' },
      { k: 'D', t: 'നടുവിലെ സംഖ്യയുടെ ഇരട്ടിയാണ്' }
    ],
    answer: 'B',
    solution_en: 'If the middle number is $x$, the first is $(x-1)$ and the third is $(x+1)$. Their product is $(x-1)(x+1) = x^2 - 1$, which is one less than $x^2$.',
    solution_ml: 'നടുവിലെ സംഖ്യ $x$ ആയാൽ, ആദ്യത്തെ സംഖ്യ $(x-1)$-ഉം മൂന്നാമത്തെ സംഖ്യ $(x+1)$-ഉം ആണ്. അവയുടെ ഗുണനഫലം $(x-1)(x+1) = x^2 - 1$ ആണ്; ഇത് നടുവിലെ സംഖ്യയുടെ വർഗ്ഗത്തേക്കാൾ 1 കുറവാണ്.',
    tested_en: 'Consecutive natural numbers product pattern.',
    tested_ml: 'തുടർച്ചയായ എണ്ണൽസംഖ്യകളുടെ ഗുണനഫല തത്വം.'
  },

  {
    id: 'obj.m8.3.8',
    concept: 'm8.3.5.product-of-binomials',
    sec: '8.3.5',
    type: 'MCQ',
    marks: 1,
    time: 45,
    prompt_en: 'In any calendar, for any $2 \\times 2$ block of dates $\\begin{matrix} n & n+1 \\\\ n+7 & n+8 \\end{matrix}$, what is the difference between the diagonal products $(n+1)(n+7) - n(n+8)$?',
    prompt_ml: 'ഒരു കലണ്ടറിലെ ഏത് $2 \\times 2$ തീയതിക്കട്ടയിലും $\\begin{matrix} n & n+1 \\\\ n+7 & n+8 \\end{matrix}$, കോണോടുകോൺ ഗുണനഫലങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം $(n+1)(n+7) - n(n+8)$ എത്രയായിരിക്കും?',
    options_en: [
      { k: 'A', t: '$1$' },
      { k: 'B', t: '$7$' },
      { k: 'C', t: '$8$' },
      { k: 'D', t: 'Depends on the month' }
    ],
    options_ml: [
      { k: 'A', t: '$1$' },
      { k: 'B', t: '$7$' },
      { k: 'C', t: '$8$' },
      { k: 'D', t: 'മാസത്തിനനുസരിച്ച് മാറും' }
    ],
    answer: 'B',
    solution_en: '$(n+1)(n+7) = n^2 + 8n + 7$. Also $n(n+8) = n^2 + 8n$. Subtracting gives $(n^2 + 8n + 7) - (n^2 + 8n) = 7$. It is always 7 regardless of the month or year!',
    solution_ml: '$(n+1)(n+7) = n^2 + 8n + 7$ ആണ്. $n(n+8) = n^2 + 8n$ ആണ്. ഇവ കുറയ്ക്കുമ്പോൾ $(n^2 + 8n + 7) - (n^2 + 8n) = 7$ ലഭിക്കുന്നു. ഇത് ഏത് മാസത്തിലും എപ്പോഴും 7 ആയിരിക്കും!',
    tested_en: 'Calendar date algebraic identity.',
    tested_ml: 'കലണ്ടർ സമചതുരത്തിലെ ബീജഗണിത തത്വം.'
  }
);

/* ── Level 2: Written Practice Exercises ─────────────────────────────────── */
QUESTIONS.push(
  {
    id: 'w.m8.3.1',
    sec: '8.3.1',
    concept: 'm8.3.1.square-of-sum',
    tests: ['m8.3.1.square-of-sum'],
    marks: 4,
    title_en: 'Properties of Squares of Odd Numbers',
    title_ml: 'ഒറ്റസംഖ്യകളുടെ വർഗ്ഗങ്ങളുടെ സവിശേഷതകൾ',
    prompt_en: `<p>Any odd number can be written algebraically in the form $2n + 1$, where $n$ is a whole number ($0, 1, 2, \\dots$).</p>
      <ol type="a">
        <li>Expand $(2n + 1)^2$ using the identity $(x + y)^2 = x^2 + 2xy + y^2$.</li>
        <li>Prove that the square of any odd number is always an odd number.</li>
        <li>Prove that the square of any odd number leaves a remainder of $1$ when divided by $4$.</li>
        <li>Prove that the square of any odd number leaves a remainder of $1$ when divided by $8$.</li>
      </ol>`,
    prompt_ml: `<p>ഏതൊരു ഒറ്റസംഖ്യയെയും $2n + 1$ ($n = 0, 1, 2, \\dots$) എന്ന രൂപത്തിൽ എഴുതാം.</p>
      <ol type="a">
        <li>$(x + y)^2 = x^2 + 2xy + y^2$ എന്ന സമവാക്യം ഉപയോഗിച്ച് $(2n + 1)^2$ വികസിപ്പിച്ചെഴുതുക.</li>
        <li>ഏതൊരു ഒറ്റസംഖ്യയുടെയും വർഗ്ഗം ഒരു ഒറ്റസംഖ്യയായിരിക്കും എന്ന് സമർത്ഥിക്കുക.</li>
        <li>ഏതൊരു ഒറ്റസംഖ്യയുടെയും വർഗ്ഗത്തെ $4$ കൊണ്ട് ഹരിച്ചാൽ ശിഷ്ടം $1$ ആയിരിക്കും എന്ന് തെളിയിക്കുക.</li>
        <li>ഏതൊരു ഒറ്റസംഖ്യയുടെയും വർഗ്ഗത്തെ $8$ കൊണ്ട് ഹരിച്ചാൽ ശിഷ്ടം $1$ ആയിരിക്കും എന്ന് തെളിയിക്കുക.</li>
      </ol>`,
    approach_en: 'Expand $(2n+1)^2 = 4n^2 + 4n + 1$. Factor out 4 and observe $n(n+1)$ is always an even number.',
    approach_ml: '$(2n+1)^2 = 4n^2 + 4n + 1$ എന്ന് വികസിപ്പിക്കുക. $4$-നെ പൊതുവായി എടുക്കുക, $n(n+1)$ എന്നത് തുടർച്ചയായ രണ്ട് സംഖ്യകളുടെ ഗുണനഫലമായതിനാൽ എപ്പോഴും ഇരട്ടസംഖ്യയാണെന്ന് ഉപയോഗിക്കുക.',
    solution_en: `<ol type="a">
        <li>Using $(x+y)^2 = x^2 + 2xy + y^2$ with $x = 2n$ and $y = 1$:
          $$(2n + 1)^2 = (2n)^2 + 2(2n)(1) + 1^2 = \\mathbf{4n^2 + 4n + 1}.$$
        </li>
        <li>We can write:
          $$4n^2 + 4n + 1 = 2(2n^2 + 2n) + 1$$
          Since $2(2n^2 + 2n)$ is divisible by 2 (an even number), adding 1 makes it an <b>odd number</b>. Hence, the square of any odd number is always odd.
        </li>
        <li>We can factor 4 from the first two terms:
          $$4n^2 + 4n + 1 = 4(n^2 + n) + 1$$
          This is 1 more than a multiple of 4. Therefore, on dividing by 4, the <b>remainder is always 1</b>.
        </li>
        <li>Notice that $n^2 + n = n(n + 1)$. Here $n$ and $n+1$ are two consecutive natural numbers, so one of them must be even. Therefore, $n(n+1)$ is an even number, say $2k$.
          $$4(n^2 + n) + 1 = 4[2k] + 1 = 8k + 1$$
          This is 1 more than a multiple of 8. Therefore, dividing the square of any odd number by 8 strictly leaves a <b>remainder of 1</b>.
        </li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>$x = 2n, y = 1$ എന്ന് എടുത്താൽ:
          $$(2n + 1)^2 = (2n)^2 + 2(2n)(1) + 1^2 = \\mathbf{4n^2 + 4n + 1}.$$
        </li>
        <li>ഇതിനെ താഴെ പറയുന്ന രീതിയിൽ എഴുതാം:
          $$4n^2 + 4n + 1 = 2(2n^2 + 2n) + 1$$
          $2(2n^2 + 2n)$ എന്നത് 2-ന്റെ ഗുണിതമായതിനാൽ ഇരട്ടസംഖ്യയാണ്. അതിനോട് 1 കൂട്ടുമ്പോൾ <b>ഒറ്റസംഖ്യ</b> ലഭിക്കുന്നു. അതിനാൽ ഏത് ഒറ്റസംഖ്യയുടെയും വർഗ്ഗം ഒറ്റസംഖ്യയായിരിക്കും.
        </li>
        <li>ആദ്യത്തെ രണ്ട് പദങ്ങളിൽ നിന്ന് 4 പൊതുവായി എടുത്താൽ:
          $$4n^2 + 4n + 1 = 4(n^2 + n) + 1$$
          ഇത് 4-ന്റെ ഗുണിതത്തോട് 1 കൂട്ടിയ രൂപമാണ്. അതിനാൽ 4 കൊണ്ട് ഹരിക്കുമ്പോൾ <b>ശിഷ്ടം 1 ആയിരിക്കും</b>.
        </li>
        <li>$n^2 + n = n(n + 1)$ എന്ന് എഴുതാം. $n, n+1$ എന്നിവ തുടർച്ചയായ രണ്ട് സംഖ്യകളായതിനാൽ അവയിലൊന്ന് നിർബന്ധമായും ഇരട്ടസംഖ്യയായിരിക്കും. അതിനാൽ $n(n+1) = 2k$ എന്ന് എടുക്കാം.
          $$4(n^2 + n) + 1 = 4[2k] + 1 = 8k + 1$$
          ഇത് 8-ന്റെ ഗുണിതത്തേക്കാൾ 1 കൂടുതലാണ്. അതിനാൽ ഏത് ഒറ്റസംഖ്യയുടെയും വർഗ്ഗത്തെ 8 കൊണ്ട് ഹരിച്ചാൽ <b>ശിഷ്ടം 1 ലഭിക്കുന്നു</b>.
        </li>
      </ol>`,
    trap_en: 'Make sure to explain why n(n+1) is even in part (d) to show divisibility by 8.',
    trap_ml: '8 കൊണ്ടുള്ള ഹരണത്തിൽ n(n+1) എന്നത് ഇരട്ടസംഖ്യയാണെന്ന കാര്യം വ്യക്തമാക്കാൻ മറക്കരുത്.'
  },

  {
    id: 'w.m8.3.2',
    sec: '8.3.2',
    concept: 'm8.3.2.square-of-diff',
    tests: ['m8.3.2.square-of-diff'],
    marks: 4,
    title_en: 'Mental Squaring and Algebraic Patterns using (x - y)²',
    title_ml: '(x - y)² ഉപയോഗിച്ചുള്ള മാനസിക ഗണനവും ബീജഗണിത രീതികളും',
    prompt_en: `<ol type="a">
        <li>Calculate the following mentally using the identity $(x - y)^2 = x^2 - 2xy + y^2$:
          <ol type="i">
            <li>$29^2$</li>
            <li>$999^2$</li>
            <li>$(9.7)^2$</li>
          </ol>
        </li>
        <li>Consider the pattern:
          $$3^2 - (2 \\times 3) = 3 = 2^2 - 1$$
          $$4^2 - (2 \\times 4) = 8 = 3^2 - 1$$
          $$5^2 - (2 \\times 5) = 15 = 4^2 - 1$$
          Explain the general principle behind this pattern using algebra.
        </li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>$(x - y)^2 = x^2 - 2xy + y^2$ എന്ന സമവാക്യം ഉപയോഗിച്ച് താഴെ പറയുന്നവ മനസ്സിൽ കണക്കാക്കുക:
          <ol type="i">
            <li>$29^2$</li>
            <li>$999^2$</li>
            <li>$(9.7)^2$</li>
          </ol>
        </li>
        <li>ചുവടെയുള്ള കണക്കുകൾ പരിശോധിക്കുക:
          $$3^2 - (2 \\times 3) = 3 = 2^2 - 1$$
          $$4^2 - (2 \\times 4) = 8 = 3^2 - 1$$
          $$5^2 - (2 \\times 5) = 15 = 4^2 - 1$$
          ഇതിലെ പൊതുതത്വം ബീജഗണിതം ഉപയോഗിച്ച് വിശദീകരിക്കുക.
        </li>
      </ol>`,
    approach_en: 'Write each number as $(a - b)^2$ near a power of 10 or whole number. For part (b), let the number be $x$, compute $x^2 - 2x$, and relate it to $(x-1)^2 - 1$.',
    approach_ml: 'ഓരോ സംഖ്യയെയും എളുപ്പ സംഖ്യകളിൽ നിന്ന് കുറച്ച് $(a - b)^2$ രൂപത്തിൽ എഴുതുക. ഭാഗം (b)-ൽ സംഖ്യയെ $x$ എന്ന് സങ്കൽപ്പിച്ച് $x^2 - 2x = (x-1)^2 - 1$ എന്ന് തെളിയിക്കുക.',
    solution_en: `<ol type="a">
        <li>
          <ol type="i">
            <li>$29^2 = (30 - 1)^2 = 30^2 - 2(30)(1) + 1^2 = 900 - 60 + 1 = \\mathbf{841}$.</li>
            <li>$999^2 = (1000 - 1)^2 = 1000^2 - 2(1000)(1) + 1^2 = 1000000 - 2000 + 1 = \\mathbf{998001}$.</li>
            <li>$(9.7)^2 = (10 - 0.3)^2 = 10^2 - 2(10)(0.3) + 0.3^2 = 100 - 6 + 0.09 = \\mathbf{94.09}$.</li>
          </ol>
        </li>
        <li>Let the starting number be $x$. The left hand side of the pattern is:
          $$x^2 - 2x$$
          Now consider the expansion of $(x - 1)^2$:
          $$(x - 1)^2 = x^2 - 2x + 1$$
          Subtracting 1 from both sides gives:
          $$(x - 1)^2 - 1 = x^2 - 2x$$
          Therefore, subtracting twice a number from its square always equals one less than the square of the preceding number:
          $$\\mathbf{x^2 - 2x = (x - 1)^2 - 1}.$$
        </li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>
          <ol type="i">
            <li>$29^2 = (30 - 1)^2 = 30^2 - 2(30)(1) + 1^2 = 900 - 60 + 1 = \\mathbf{841}$.</li>
            <li>$999^2 = (1000 - 1)^2 = 1000^2 - 2(1000)(1) + 1^2 = 1000000 - 2000 + 1 = \\mathbf{998001}$.</li>
            <li>$(9.7)^2 = (10 - 0.3)^2 = 10^2 - 2(10)(0.3) + 0.3^2 = 100 - 6 + 0.09 = \\mathbf{94.09}$.</li>
          </ol>
        </li>
        <li>തുടങ്ങുന്ന സംഖ്യ $x$ ആണെന്ന് കരുതുക. പാറ്റേണിന്റെ ഇടതുവശം:
          $$x^2 - 2x$$
          ഇനി $(x - 1)^2$-ന്റെ സമവാക്യം പരിശോധിച്ചാൽ:
          $$(x - 1)^2 = x^2 - 2x + 1$$
          ഇരുവശത്തുനിന്നും 1 കുറച്ചാൽ:
          $$(x - 1)^2 - 1 = x^2 - 2x$$
          അതായത് ഒരു സംഖ്യയുടെ വർഗ്ഗത്തിൽ നിന്ന് ആ സംഖ്യയുടെ ഇരട്ടി കുറച്ചാൽ, തൊട്ടുപുറകിലെ സംഖ്യയുടെ വർഗ്ഗത്തേക്കാൾ 1 കുറഞ്ഞ സംഖ്യ ലഭിക്കുന്നു:
          $$\\mathbf{x^2 - 2x = (x - 1)^2 - 1}.$$
        </li>
      </ol>`,
    trap_en: 'Be careful with decimals: (0.3)² is 0.09, not 0.9.',
    trap_ml: 'ദശാംശങ്ങളിൽ ശ്രദ്ധിക്കുക: (0.3)² എന്നത് 0.09 ആണ്, 0.9 അല്ല.'
  },

  {
    id: 'w.m8.3.3',
    sec: '8.3.3',
    concept: 'm8.3.3.sum-diff-relations',
    tests: ['m8.3.3.sum-diff-relations'],
    marks: 4,
    title_en: 'Writing Multiples of 8 as Difference of Two Squares',
    title_ml: '8-ന്റെ ഗുണിതങ്ങളെ രണ്ട് വർഗ്ഗങ്ങളുടെ വ്യത്യാസമായി രണ്ട് രീതിയിൽ എഴുതൽ',
    prompt_en: `<p>Some numbers can be written as the difference of two perfect squares in two different ways:</p>
      $$24 = 7^2 - 5^2 = 5^2 - 1^2$$
      $$32 = 9^2 - 7^2 = 6^2 - 2^2$$
      $$40 = 11^2 - 9^2 = 7^2 - 3^2$$
      <ol type="a">
        <li>Write the next multiple of $8$, which is $48$, as the difference of two perfect squares in two different ways.</li>
        <li>Explain algebraically why every multiple of $8$ of the form $8n$ ($n \\ge 3$) can be written as the difference of two squares in at least two different ways.</li>
        <li>Compute $78 \\times 22$ using the difference of two squares identity $xy = \\left(\\frac{x+y}{2}\\right)^2 - \\left(\\frac{x-y}{2}\\right)^2$.</li>
      </ol>`,
    prompt_ml: `<p>ചില സംഖ്യകളെ രണ്ട് പൂർണ്ണവർഗ്ഗങ്ങളുടെ വ്യത്യാസമായി രണ്ട് വ്യത്യസ്ത രീതികളിൽ എഴുതാം:</p>
      $$24 = 7^2 - 5^2 = 5^2 - 1^2$$
      $$32 = 9^2 - 7^2 = 6^2 - 2^2$$
      $$40 = 11^2 - 9^2 = 7^2 - 3^2$$
      <ol type="a">
        <li>അടുത്ത 8-ന്റെ ഗുണിതമായ $48$-നെ രണ്ട് പൂർണ്ണവർഗ്ഗങ്ങളുടെ വ്യത്യാസമായി രണ്ട് രീതികളിൽ എഴുതുക.</li>
        <li>$8n$ ($n \\ge 3$) രൂപത്തിലുള്ള 8-ന്റെ എല്ലാ ഗുണിതങ്ങളെയും രണ്ട് വ്യത്യസ്ത രീതികളിൽ വർഗ്ഗവ്യത്യാസമായി എഴുതാൻ സാധിക്കുന്നത് എന്തുകൊണ്ടെന്ന് ബീജഗണിതം ഉപയോഗിച്ച് വിശദീകരിക്കുക.</li>
        <li>$xy = \\left(\\frac{x+y}{2}\\right)^2 - \\left(\\frac{x-y}{2}\\right)^2$ എന്ന സമവാക്യം ഉപയോഗിച്ച് $78 \\times 22$ കണക്കാക്കുക.</li>
      </ol>`,
    approach_en: 'Use the identity $(a+b)(a-b) = a^2 - b^2$. Factor $8n = 4 \\times 2n$ and $8n = 2 \\times 4n$, then use $xy = ((x+y)/2)^2 - ((x-y)/2)^2$.',
    approach_ml: '$(a+b)(a-b) = a^2 - b^2$ ഉപയോഗിക്കുക. $8n$-നെ $4 \\times 2n$ എന്നും $2 \\times 4n$ എന്നും ഘടകങ്ങളാക്കി വർഗ്ഗവ്യത്യാസ രൂപങ്ങൾ കണ്ടെത്തുക.',
    solution_en: `<ol type="a">
        <li>For $48$:
          <ul>
            <li>First way: $48 = 4 \\times 12$. Half-sum $= \\frac{12+4}{2} = 8$, half-diff $= \\frac{12-4}{2} = 4$. So $48 = \\mathbf{8^2 - 4^2} = 64 - 16 = 48$.</li>
            <li>Second way: $48 = 2 \\times 24$. Half-sum $= \\frac{24+2}{2} = 13$, half-diff $= \\frac{24-2}{2} = 11$. So $48 = \\mathbf{13^2 - 11^2} = 169 - 121 = 48$.</li>
            <li>(Alternatively, $48 = 6 \\times 8 = 7^2 - 1^2$).</li>
          </ul>
        </li>
        <li>Any multiple of 8 can be factored into two even factors in multiple ways:
          <ol type="i">
            <li>Write $8n = 2 \\times (4n)$. Both factors have the same parity (even), so:
              $$8n = \\left(\\frac{4n + 2}{2}\\right)^2 - \\left(\\frac{4n - 2}{2}\\right)^2 = \\mathbf{(2n + 1)^2 - (2n - 1)^2}.$$
            </li>
            <li>Write $8n = 4 \\times (2n)$. Both factors are even:
              $$8n = \\left(\\frac{2n + 4}{2}\\right)^2 - \\left(\\frac{2n - 4}{2}\\right)^2 = \\mathbf{(n + 2)^2 - (n - 2)^2}.$$
            </li>
          </ol>
          For $n \\ge 3$, both pairs of integers are positive and distinct. Hence, every multiple of 8 starting from 24 has at least two representations.
        </li>
        <li>To compute $78 \\times 22$:
          $$\\text{Half-sum} = \\frac{78 + 22}{2} = \\frac{100}{2} = 50$$
          $$\\text{Half-difference} = \\frac{78 - 22}{2} = \\frac{56}{2} = 28$$
          $$78 \\times 22 = 50^2 - 28^2 = 2500 - 784 = \\mathbf{1716}.$$
        </li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>$48$-ന്:
          <ul>
            <li>ഒന്നാമത്തെ രീതി: $48 = 4 \\times 12$. തുകയുടെ പകുതി $= \\frac{12+4}{2} = 8$, വ്യത്യാസത്തിന്റെ പകുതി $= \\frac{12-4}{2} = 4$. അതിനാൽ $48 = \\mathbf{8^2 - 4^2} = 64 - 16 = 48$.</li>
            <li>രണ്ടാമത്തെ രീതി: $48 = 2 \\times 24$. തുകയുടെ പകുതി $= \\frac{24+2}{2} = 13$, വ്യത്യാസത്തിന്റെ പകുതി $= \\frac{24-2}{2} = 11$. അതിനാൽ $48 = \\mathbf{13^2 - 11^2} = 169 - 121 = 48$.</li>
            <li>(അല്ലെങ്കിൽ $48 = 6 \\times 8 = 7^2 - 1^2$).</li>
          </ul>
        </li>
        <li>8-ന്റെ ഏത് ഗുണിതത്തെയും രണ്ട് ഇരട്ടസംഖ്യകളുടെ ഗുണനഫലമായി ഒന്നിലധികം രീതികളിൽ എഴുതാം:
          <ol type="i">
            <li>$8n = 2 \\times (4n)$ എന്ന് എടുത്താൽ:
              $$8n = \\left(\\frac{4n + 2}{2}\\right)^2 - \\left(\\frac{4n - 2}{2}\\right)^2 = \\mathbf{(2n + 1)^2 - (2n - 1)^2}.$$
            </li>
            <li>$8n = 4 \\times (2n)$ എന്ന് എടുത്താൽ:
              $$8n = \\left(\\frac{2n + 4}{2}\\right)^2 - \\left(\\frac{2n - 4}{2}\\right)^2 = \\mathbf{(n + 2)^2 - (n - 2)^2}.$$
            </li>
          </ol>
          $n \\ge 3$ ആകുമ്പോൾ ഈ രണ്ട് ജോടികളും വ്യത്യസ്തമായ പൂർണ്ണസംഖ്യകൾ നൽകുന്നു. അതിനാൽ 24 മുതലുള്ള 8-ന്റെ എല്ലാ ഗുണിതങ്ങൾക്കും കുറഞ്ഞത് രണ്ട് വർഗ്ഗവ്യത്യാസ രൂപങ്ങൾ ഉണ്ടാകും.
        </li>
        <li>$78 \\times 22$ കണക്കാക്കാൻ:
          $$\\text{തുകയുടെ പകുതി} = \\frac{78 + 22}{2} = 50$$
          $$\\text{വ്യത്യാസത്തിന്റെ പകുതി} = \\frac{78 - 22}{2} = 28$$
          $$78 \\times 22 = 50^2 - 28^2 = 2500 - 784 = \\mathbf{1716}.$$
        </li>
      </ol>`,
    trap_en: 'Make sure the two factors are either both even or both odd so that their half-sum and half-difference are whole numbers.',
    trap_ml: 'തുകയുടെയും വ്യത്യാസത്തിന്റെയും പകുതി പൂർണ്ണസംഖ്യകളാകാൻ രണ്ട് ഘടകങ്ങളും ഇരട്ടസംഖ്യകളോ അല്ലെങ്കിൽ രണ്ട് ഘടകങ്ങളും ഒറ്റസംഖ്യകളോ ആയിരിക്കണം.'
  },

  {
    id: 'w.m8.3.4',
    sec: '8.3.4',
    concept: 'm8.3.4.diff-of-squares',
    tests: ['m8.3.4.diff-of-squares'],
    marks: 4,
    title_en: 'Difference of Two Squares & Geometric Comparison',
    title_ml: 'വർഗ്ഗങ്ങളുടെ വ്യത്യാസവും ജ്യാമിതീയ താരതമ്യവും',
    prompt_en: `<ol type="a">
        <li>A square has perimeter $20\\text{ cm}$. A rectangle has one side $2\\text{ cm}$ longer and one side $2\\text{ cm}$ shorter than the side of this square.
          <ol type="i">
            <li>What is the perimeter of the rectangle?</li>
            <li>What are the areas of the square and the rectangle?</li>
            <li>Which shape has the larger area, and by how much?</li>
          </ol>
        </li>
        <li>If the side of a square is $x$, and a rectangle has sides $(x + a)$ and $(x - a)$:
          <ol type="i">
            <li>Compare their perimeters.</li>
            <li>Which has the larger area, and what is the difference in areas?</li>
          </ol>
        </li>
      </ol>`,
    prompt_ml: `<ol type="a">
        <li>ഒരു സമചതുരത്തിന്റെ ചുറ്റളവ് $20\\text{ cm}$ ആണ്. ഒരു ചതുരത്തിന്റെ ഒരു വശം സമചതുരത്തിന്റെ വശത്തേക്കാൾ $2\\text{ cm}$ കൂടുതലും മറ്റേ വശം $2\\text{ cm}$ കുറവുമാണ്.
          <ol type="i">
            <li>ചതുരത്തിന്റെ ചുറ്റളവ് എത്രയാണ്?</li>
            <li>സമചതുരത്തിന്റെയും ചതുരത്തിന്റെയും പരപ്പളവുകൾ എത്രയാണ്?</li>
            <li>ഏതിനാണ് കൂടുതൽ പരപ്പളവ്? എത്ര കൂടുതൽ?</li>
          </ol>
        </li>
        <li>സമചതുരത്തിന്റെ ഒരു വശം $x$-ഉം ചതുരത്തിന്റെ വശങ്ങൾ $(x + a), (x - a)$-ഉം ആയാൽ:
          <ol type="i">
            <li>അവയുടെ ചുറ്റളവുകൾ താരതമ്യം ചെയ്യുക.</li>
            <li>ഏതിനാണ് കൂടുതൽ പരപ്പളവ്? പരപ്പളവുകളുടെ വ്യത്യാസം എത്രയാണ്?</li>
          </ol>
        </li>
      </ol>`,
    approach_en: 'Find the side of the square (perimeter / 4 = 5 cm). Then rectangle sides are 7 cm and 3 cm. Apply the identity $(x+a)(x-a) = x^2 - a^2$.',
    approach_ml: 'സമചതുരത്തിന്റെ വശം കാണുക (ചുറ്റളവ് / 4 = 5 cm). ചതുരത്തിന്റെ വശങ്ങൾ 7 cm, 3 cm ആകുന്നു. $(x+a)(x-a) = x^2 - a^2$ എന്ന സമവാക്യം പ്രയോഗിക്കുക.',
    solution_en: `<ol type="a">
        <li>
          <ol type="i">
            <li>Side of the square $= \\frac{20}{4} = 5\\text{ cm}$.<br>
                Sides of the rectangle: length $= 5 + 2 = 7\\text{ cm}$, breadth $= 5 - 2 = 3\\text{ cm}$.<br>
                Perimeter of the rectangle $= 2(7 + 3) = 2(10) = \\mathbf{20\\text{ cm}}$. Both have the same perimeter!</li>
            <li>Area of the square $= 5^2 = \\mathbf{25\\text{ cm}^2}$.<br>
                Area of the rectangle $= 7 \\times 3 = \\mathbf{21\\text{ cm}^2}$.</li>
            <li>The <b>square has the larger area</b> by $25 - 21 = \\mathbf{4\\text{ cm}^2}$ (which is exactly $2^2$).</li>
          </ol>
        </li>
        <li>
          <ol type="i">
            <li>Perimeter of square $= 4x$.<br>
                Perimeter of rectangle $= 2[(x + a) + (x - a)] = 2(2x) = 4x$.<br>
                <b>Their perimeters are strictly equal.</b></li>
            <li>Area of square $= x^2$.<br>
                Area of rectangle $= (x + a)(x - a) = x^2 - a^2$.<br>
                The <b>square always has the larger area</b>, and the difference is strictly $\\mathbf{a^2}$.</li>
          </ol>
        </li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>
          <ol type="i">
            <li>സമചതുരത്തിന്റെ വശം $= \\frac{20}{4} = 5\\text{ cm}$.<br>
                ചതുരത്തിന്റെ വശങ്ങൾ: നീളം $= 5 + 2 = 7\\text{ cm}$, വീതി $= 5 - 2 = 3\\text{ cm}$.<br>
                ചതുരത്തിന്റെ ചുറ്റളവ് $= 2(7 + 3) = 2(10) = \\mathbf{20\\text{ cm}}$. രണ്ടിന്റെയും ചുറ്റളവ് തുല്യമാണ്!</li>
            <li>സമചതുരത്തിന്റെ പരപ്പളവ് $= 5^2 = \\mathbf{25\\text{ cm}^2}$.<br>
                ചതുരത്തിന്റെ പരപ്പളവ് $= 7 \\times 3 = \\mathbf{21\\text{ cm}^2}$.</li>
            <li><b>സമചതുരത്തിനാണ് കൂടുതൽ പരപ്പളവ്</b>. വ്യത്യാസം $25 - 21 = \\mathbf{4\\text{ cm}^2}$ (ഇത് കൃത്യം $2^2$ ആണ്).</li>
          </ol>
        </li>
        <li>
          <ol type="i">
            <li>സമചതുരത്തിന്റെ ചുറ്റളവ് $= 4x$.<br>
                ചതുരത്തിന്റെ ചുറ്റളവ് $= 2[(x + a) + (x - a)] = 2(2x) = 4x$.<br>
                <b>രണ്ടിന്റെയും ചുറ്റളവുകൾ തുല്യമാണ്.</b></li>
            <li>സമചതുരത്തിന്റെ പരപ്പളവ് $= x^2$.<br>
                ചതുരത്തിന്റെ പരപ്പളവ് $= (x + a)(x - a) = x^2 - a^2$.<br>
                <b>സമചതുരത്തിനാണ് എപ്പോഴും കൂടുതൽ പരപ്പളവ്</b>; പരപ്പളവുകളുടെ വ്യത്യാസം കൃത്യം $\\mathbf{a^2}$ ആയിരിക്കും.</li>
          </ol>
        </li>
      </ol>`,
    trap_en: 'Remember that shapes with the same perimeter do not necessarily have the same area: the square maximizes area.',
    trap_ml: 'തുല്യ ചുറ്റളവുള്ള രൂപങ്ങൾക്ക് ഒരേ പരപ്പളവായിരിക്കില്ല; സമചതുരത്തിനാണ് എപ്പോഴും കൂടുതൽ പരപ്പളവ് ലഭിക്കുക.'
  },

  {
    id: 'w.m8.3.5',
    sec: '8.3.5',
    concept: 'm8.3.5.product-of-binomials',
    tests: ['m8.3.5.product-of-binomials'],
    marks: 4,
    title_en: 'Calendar Number Grid Algebraic Puzzles',
    title_ml: 'കലണ്ടറിലെ സംഖ്യാകട്ടകളിലെ ബീജഗണിത സമസ്യകൾ',
    prompt_en: `<p>In any calendar month, consider a square block of $9$ dates ($3 \\times 3$ grid):</p>
      $$\\begin{matrix} x-8 & x-7 & x-6 \\\\ x-1 & x & x+1 \\\\ x+6 & x+7 & x+8 \\end{matrix}$$
      <p>where $x$ is the central date.</p>
      <ol type="a">
        <li>Calculate the product of the left and right numbers: $(x-1)(x+1)$.</li>
        <li>Calculate the product of the top and bottom numbers: $(x-7)(x+7)$.</li>
        <li>Find the difference between these two products: $[(x-1)(x+1)] - [(x-7)(x+7)]$. Show that it is always strictly $48$ regardless of which $3 \\times 3$ block is chosen.</li>
        <li>Now calculate the products of the diagonal corner pairs: $(x-8)(x+8)$ and $(x-6)(x+6)$. What is their difference?</li>
      </ol>`,
    prompt_ml: `<p>ഏതൊരു കലണ്ടറിലെയും 9 തീയതികൾ അടങ്ങിയ ഒരു സമചതുരക്കട്ട ($3 \\times 3$ കട്ട) പരിശോധിക്കുക:</p>
      $$\\begin{matrix} x-8 & x-7 & x-6 \\\\ x-1 & x & x+1 \\\\ x+6 & x+7 & x+8 \\end{matrix}$$
      <p>ഇവിടെ നടുവിലെ തീയതി $x$ ആണ്.</p>
      <ol type="a">
        <li>ഇടത്തും വലത്തുമുള്ള സംഖ്യകളുടെ ഗുണനഫലം $(x-1)(x+1)$ കാണുക.</li>
        <li>മുകളിലും താഴെയുമുള്ള സംഖ്യകളുടെ ഗുണനഫലം $(x-7)(x+7)$ കാണുക.</li>
        <li>ഈ രണ്ട് ഗുണനഫലങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം $[(x-1)(x+1)] - [(x-7)(x+7)]$ കണക്കാക്കുക. ഇത് ഏത് $3 \\times 3$ കട്ടയിലും എപ്പോഴും കൃത്യം $48$ ആയിരിക്കും എന്ന് സമർത്ഥിക്കുക.</li>
        <li>ഇനി കോണോടുകോണിലുള്ള മൂലകളിലെ സംഖ്യകളുടെ ഗുണനഫലങ്ങളായ $(x-8)(x+8)$-ഉം $(x-6)(x+6)$-ഉം തമ്മിലുള്ള വ്യത്യാസം കാണുക.</li>
      </ol>`,
    approach_en: 'Use the difference of two squares identity $(x-a)(x+a) = x^2 - a^2$.',
    approach_ml: '$(x-a)(x+a) = x^2 - a^2$ എന്ന വർഗ്ഗവ്യത്യാസ സമവാക്യം പ്രയോഗിക്കുക.',
    solution_en: `<ol type="a">
        <li>Product of left and right numbers:
          $$(x - 1)(x + 1) = \\mathbf{x^2 - 1}.$$
        </li>
        <li>Product of top and bottom numbers:
          $$(x - 7)(x + 7) = \\mathbf{x^2 - 49}.$$
        </li>
        <li>Subtracting the two products:
          $$[(x - 1)(x + 1)] - [(x - 7)(x + 7)] = (x^2 - 1) - (x^2 - 49) = x^2 - 1 - x^2 + 49 = \\mathbf{48}.$$
          Since $x^2$ cancels out completely, this difference is strictly <b>48</b> for any $3 \\times 3$ square on any calendar!
        </li>
        <li>For the diagonal corner numbers:
          $$\\text{Top-left} \\times \\text{bottom-right} = (x - 8)(x + 8) = x^2 - 64$$
          $$\\text{Top-right} \\times \\text{bottom-left} = (x - 6)(x + 6) = x^2 - 36$$
          Subtracting the smaller from the larger:
          $$(x^2 - 36) - (x^2 - 64) = x^2 - 36 - x^2 + 64 = \\mathbf{28}.$$
          The difference between diagonal corner products is always strictly <b>28</b>!
        </li>
      </ol>`,
    solution_ml: `<ol type="a">
        <li>ഇടത്തും വലത്തുമുള്ള സംഖ്യകളുടെ ഗുണനഫലം:
          $$(x - 1)(x + 1) = \\mathbf{x^2 - 1}.$$
        </li>
        <li>മുകളിലും താഴെയുമുള്ള സംഖ്യകളുടെ ഗുണനഫലം:
          $$(x - 7)(x + 7) = \\mathbf{x^2 - 49}.$$
        </li>
        <li>രണ്ട് ഗുണനഫലങ്ങളുടെ വ്യത്യാസം:
          $$[(x - 1)(x + 1)] - [(x - 7)(x + 7)] = (x^2 - 1) - (x^2 - 49) = x^2 - 1 - x^2 + 49 = \\mathbf{48}.$$
          ഇവിടെ $x^2$ പരസ്പരം ഇല്ലാതാകുന്നതിനാൽ, ഏത് കലണ്ടറിലെ ഏത് $3 \\times 3$ കട്ട എടുത്താലും വ്യത്യാസം എപ്പോഴും കൃത്യം <b>48</b> ആയിരിക്കും!
        </li>
        <li>മൂലകളിലെ കോണോടുകോൺ സംഖ്യകൾക്ക്:
          $$\\text{മുകൾ-ഇടത്} \\times \\text{താഴ്-വലത്} = (x - 8)(x + 8) = x^2 - 64$$
          $$\\text{മുകൾ-വലത്} \\times \\text{താഴ്-ഇടത്} = (x - 6)(x + 6) = x^2 - 36$$
          വലിയ ഗുണനഫലത്തിൽ നിന്ന് ചെറിയ ഗുണനഫലം കുറച്ചാൽ:
          $$(x^2 - 36) - (x^2 - 64) = x^2 - 36 - x^2 + 64 = \\mathbf{28}.$$
          കോണോടുകോൺ ഗുണനഫലങ്ങളുടെ വ്യത്യാസം എപ്പോഴും കൃത്യം <b>28</b> ആയിരിക്കും!
        </li>
      </ol>`,
    trap_en: 'Be careful with signs when subtracting: -(-49) becomes +49, so -1 + 49 = 48.',
    trap_ml: 'കുറയ്ക്കുമ്പോൾ ചിഹ്നങ്ങളിൽ തെറ്റുപറ്റരുത്: -(-49) എന്നത് +49 ആയി മാറി -1 + 49 = 48 ലഭിക്കുന്നു.'
  }
);
