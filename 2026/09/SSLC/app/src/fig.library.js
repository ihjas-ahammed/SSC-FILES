/* ══════════════════════════════════════════════════════════════════════════
   Figures for Class 8 Mathematics & Foundational School Mathematics.
   Bilingual: English and Malayalam with real-time switching.
   ══════════════════════════════════════════════════════════════════════════ */

const FIGLIB = {

  /* ── Class 8 Chapter 1: Squares and Square Roots ───────────────────────── */

  'fig.square-defn': {
    title: 'Equal Squares & Area',
    title_ml: 'സമചതുരങ്ങളും വിസ്തീർണ്ണവും',
    caption: 'A square of side $x$ has area $x^2$. Drag the slider to see the grid of unit squares grow as the side length changes.',
    caption_ml: 'വശം $x$ ആയ സമചതുരത്തിന്റെ വിസ്തീർണ്ണം $x^2$ ആണ്. സ്ലൈഡർ നീക്കി വശത്തിനനുസരിച്ച് വിസ്തീർണ്ണം മാറുന്നത് കാണുക.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 210, xr: [0, 10], yr: [0, 10], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(side) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const s = Math.min(6, Math.max(1, side));
        const cellSize = 120 / 6;
        const totalW = s * cellSize;
        const startX = 165 - totalW / 2;
        const startY = 95 - totalW / 2;

        // Background square
        group.appendChild(Fig.svg('rect', {
          x: startX, y: startY, width: totalW, height: totalW,
          class: 'band', rx: 4, style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
        }));

        // Grid lines
        for (let i = 1; i < s; i++) {
          group.appendChild(Fig.svg('line', {
            x1: startX + i * cellSize, y1: startY,
            x2: startX + i * cellSize, y2: startY + totalW,
            class: 'guide', style: 'stroke: var(--accent-line); stroke-dasharray: 2 2;'
          }));
          group.appendChild(Fig.svg('line', {
            x1: startX, y1: startY + i * cellSize,
            x2: startX + totalW, y2: startY + i * cellSize,
            class: 'guide', style: 'stroke: var(--accent-line); stroke-dasharray: 2 2;'
          }));
        }

        // Dimension labels
        group.appendChild(Fig.svg('text', {
          x: 165, y: startY - 8, 'text-anchor': 'middle',
          class: 'lbl', style: 'font-weight: 700; fill: var(--ink);',
          text: (isMl ? 'വശം = ' : 'side = ') + s
        }));
        group.appendChild(Fig.svg('text', {
          x: startX - 10, y: 95, 'text-anchor': 'end',
          class: 'lbl', style: 'font-weight: 700; fill: var(--ink);',
          text: s
        }));

        // Area text in center
        group.appendChild(Fig.svg('text', {
          x: 165, y: 95 + 4, 'text-anchor': 'middle',
          class: 'lbl', style: 'font-weight: 700; font-size: 15px; fill: var(--accent);',
          text: s + ' × ' + s + ' = ' + (s * s)
        }));
      }

      draw(4);
      api.body.appendChild(p.svg);
      api.control({
        min: 1, max: 6, step: 1, value: 4,
        label: 'Side length',
        format: v => (typeof I18N !== 'undefined' && I18N.lang() === 'ml')
          ? ('വശം: ' + v + ' · വിസ്തീർണ്ണം: ' + (v * v))
          : ('Side: ' + v + ' · Area: ' + (v * v)),
        onInput: draw
      });
    }
  },

  'fig.square-last-digits': {
    title: 'Ending Digits of Perfect Squares',
    title_ml: 'വർഗ്ഗസംഖ്യകളുടെ അവസാന അക്കങ്ങൾ',
    caption: 'Every perfect square ends in $0, 1, 4, 5, 6,$ or $9$. Numbers ending in $2, 3, 7,$ or $8$ are never square numbers.',
    caption_ml: 'ഏതൊരു പൂർണ്ണവർഗ്ഗത്തിന്റെയും അവസാന അക്കം $0, 1, 4, 5, 6, 9$ എന്നിവയിൽ ഒന്നായിരിക്കും. $2, 3, 7, 8$ എന്നിവയിൽ അവസാനിക്കുന്നവ ഒരിക്കലും വർഗ്ഗമാകില്ല.',
    build(api) {
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
      const svg = Fig.svg('svg', { viewBox: '0 0 330 140', role: 'img' });

      // Allowed box
      svg.appendChild(Fig.svg('rect', {
        x: 10, y: 15, width: 210, height: 110, rx: 8,
        class: 'band', style: 'fill: var(--ok-soft); stroke: var(--ok-line); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 115, y: 36, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--ok);',
        text: isMl ? 'സാധ്യമായ അവസാന അക്കങ്ങൾ' : 'Allowed Square Endings'
      }));

      const digits = ['0', '1', '4', '5', '6', '9'];
      digits.forEach((d, i) => {
        const cx = 35 + i * 32;
        svg.appendChild(Fig.svg('circle', {
          cx: cx, cy: 75, r: 13,
          style: 'fill: var(--ok);'
        }));
        svg.appendChild(Fig.svg('text', {
          x: cx, y: 80, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 13px; fill: #ffffff;',
          text: d
        }));
      });

      // Forbidden box
      svg.appendChild(Fig.svg('rect', {
        x: 230, y: 15, width: 90, height: 110, rx: 8,
        class: 'band', style: 'fill: var(--bad-soft); stroke: var(--bad-line); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 275, y: 36, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--bad);',
        text: isMl ? 'സാധ്യമല്ലാത്തവ' : 'Impossible'
      }));

      const bad = ['2', '3', '7', '8'];
      bad.forEach((d, i) => {
        const cx = 252 + (i % 2) * 44;
        const cy = 60 + Math.floor(i / 2) * 35;
        svg.appendChild(Fig.svg('circle', {
          cx: cx, cy: cy, r: 12,
          style: 'fill: var(--bad);'
        }));
        svg.appendChild(Fig.svg('text', {
          x: cx, y: cy + 4, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 12px; fill: #ffffff;',
          text: d
        }));
      });

      api.body.appendChild(svg);
    }
  },

  'fig.square-identity': {
    title: 'Algebraic Square: (x + y)² = x² + 2xy + y²',
    title_ml: 'ബീജഗണിത സമവാക്യം: (x + y)² = x² + 2xy + y²',
    caption: 'A square with side $(x+y)$ decomposes into 4 geometric regions: $x^2 + xy + xy + y^2 = x^2 + 2xy + y^2$.',
    caption_ml: '$(x+y)$ വശമുള്ള സമചതുരത്തെ 4 ഭാഗങ്ങളായി വിഭജിക്കാം: $x^2 + xy + xy + y^2 = x^2 + 2xy + y^2$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 170', role: 'img' });
      const ox = 95, oy = 20, xSize = 85, ySize = 35;

      // x^2 region
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy, width: xSize, height: xSize,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + xSize / 2, y: oy + xSize / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 14px; fill: var(--accent);', text: 'x²'
      }));

      // top-right xy region
      svg.appendChild(Fig.svg('rect', {
        x: ox + xSize, y: oy, width: ySize, height: xSize,
        style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + xSize + ySize / 2, y: oy + xSize / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--warn);', text: 'xy'
      }));

      // bottom-left xy region
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy + xSize, width: xSize, height: ySize,
        style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + xSize / 2, y: oy + xSize + ySize / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--warn);', text: 'xy'
      }));

      // bottom-right y^2 region
      svg.appendChild(Fig.svg('rect', {
        x: ox + xSize, y: oy + xSize, width: ySize, height: ySize,
        style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + xSize + ySize / 2, y: oy + xSize + ySize / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--ok);', text: 'y²'
      }));

      // Dimensions
      svg.appendChild(Fig.svg('text', {
        x: ox + xSize / 2, y: oy - 6, 'text-anchor': 'middle',
        style: 'font-size: 12px; fill: var(--ink-2);', text: 'x'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + xSize + ySize / 2, y: oy - 6, 'text-anchor': 'middle',
        style: 'font-size: 12px; fill: var(--ink-2);', text: 'y'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox - 8, y: oy + xSize / 2 + 4, 'text-anchor': 'end',
        style: 'font-size: 12px; fill: var(--ink-2);', text: 'x'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox - 8, y: oy + xSize + ySize / 2 + 4, 'text-anchor': 'end',
        style: 'font-size: 12px; fill: var(--ink-2);', text: 'y'
      }));

      api.body.appendChild(svg);
    }
  },

  'fig.square-sum-odds': {
    title: 'Sum of Consecutive Odd Numbers',
    title_ml: 'തുടർച്ചയായ ഒറ്റസംഖ്യകളുടെ തുക',
    caption: 'Nested L-shaped layers (gnomons) of consecutive odd numbers ($1, 3, 5, 7, 9$) sum to produce perfect squares: $1 + 3 = 4 = 2^2$, $1 + 3 + 5 = 9 = 3^2$, $1 + 3 + 5 + 7 = 16 = 4^2$.',
    caption_ml: 'തുടർച്ചയായ ഒറ്റസംഖ്യകൾ ($1, 3, 5, 7, 9$) ചേർത്തുവെച്ചാൽ അടുത്തടുത്ത വർഗ്ഗങ്ങൾ ഉണ്ടാകുന്നു: $1+3=2^2$, $1+3+5=3^2$, $1+3+5+7=4^2$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 160', role: 'img' });
      const ox = 30, oy = 20, cs = 22;
      const colors = ['#60a5fa', '#34d399', '#fbbf24', '#f87171', '#a78bfa'];

      for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
          const layer = Math.max(r, c);
          svg.appendChild(Fig.svg('rect', {
            x: ox + c * cs, y: oy + r * cs, width: cs - 2, height: cs - 2, rx: 3,
            style: 'fill: ' + colors[layer] + ';'
          }));
        }
      }

      // Legend on right
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
      const sums = ['1 = 1²', '1 + 3 = 2²', '1 + 3 + 5 = 3²', '1 + 3 + 5 + 7 = 4²', '1 + 3 + 5 + 7 + 9 = 5²'];
      sums.forEach((txt, i) => {
        svg.appendChild(Fig.svg('circle', {
          cx: 165, cy: oy + i * 22 + 10, r: 6,
          style: 'fill: ' + colors[i] + ';'
        }));
        svg.appendChild(Fig.svg('text', {
          x: 180, y: oy + i * 22 + 14,
          style: 'font-weight: 600; font-size: 11px; fill: var(--ink);',
          text: txt
        }));
      });

      api.body.appendChild(svg);
    }
  },

  'fig.square-diff-consec': {
    title: 'Difference of Consecutive Squares: (n+1)² - n² = 2n + 1',
    title_ml: 'അടുത്തടുത്ത വർഗ്ഗങ്ങളുടെ വ്യത്യാസം: (n+1)² - n² = 2n + 1',
    caption: 'Growing from $n^2$ to $(n+1)^2$ adds an L-strip of width 1 consisting of $n + n + 1 = 2n + 1$ unit squares.',
    caption_ml: '$n^2$-ൽ നിന്ന് $(n+1)^2$-ലേക്ക് മാറുമ്പോൾ 1 വീതിയുള്ള ഒരു അതിര് കൂടുന്നു: $n + n + 1 = 2n + 1$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 150', role: 'img' });
      const ox = 90, oy = 20, nSize = 80, border = 20;

      // n x n square
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy, width: nSize, height: nSize,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + nSize / 2, y: oy + nSize / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 15px; fill: var(--accent);', text: 'n²'
      }));

      // Top strip n x 1
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy - border, width: nSize, height: border,
        style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + nSize / 2, y: oy - 6, 'text-anchor': 'middle',
        style: 'font-weight: 600; font-size: 11px; fill: var(--warn);', text: 'n'
      }));

      // Right strip 1 x n
      svg.appendChild(Fig.svg('rect', {
        x: ox + nSize, y: oy, width: border, height: nSize,
        style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + nSize + border / 2, y: oy + nSize / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 600; font-size: 11px; fill: var(--warn);', text: 'n'
      }));

      // Corner 1 x 1
      svg.appendChild(Fig.svg('rect', {
        x: ox + nSize, y: oy - border, width: border, height: border,
        style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + nSize + border / 2, y: oy - 6, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--ok);', text: '1'
      }));

      // Label below
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
      svg.appendChild(Fig.svg('text', {
        x: 165, y: oy + nSize + 24, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--ink);',
        text: isMl ? 'കൂടുതൽ വന്ന വിസ്തീർണ്ണം = n + n + 1 = 2n + 1' : 'Added Area = n + n + 1 = 2n + 1'
      }));

      api.body.appendChild(svg);
    }
  },

  'fig.square-between': {
    title: 'Numbers Between Consecutive Squares',
    title_ml: 'അടുത്തടുത്ത വർഗ്ഗങ്ങൾക്കിടയിലെ സംഖ്യകൾ',
    caption: 'Between $n^2$ and $(n+1)^2$, there are strictly $2n$ non-square numbers.',
    caption_ml: '$n^2, (n+1)^2$ എന്നീ വർഗ്ഗങ്ങൾക്കിടയിൽ കൃത്യം $2n$ പൂർണ്ണവർഗ്ഗമല്ലാത്ത സംഖ്യകളുണ്ട്.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 130', role: 'img' });
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

      // Example: 3^2 = 9 and 4^2 = 16
      svg.appendChild(Fig.svg('line', {
        x1: 25, y1: 65, x2: 305, y2: 65,
        style: 'stroke: var(--rule-2); stroke-width: 2px;'
      }));

      // Left square 3^2 = 9
      svg.appendChild(Fig.svg('circle', { cx: 40, cy: 65, r: 8, style: 'fill: var(--accent);' }));
      svg.appendChild(Fig.svg('text', {
        x: 40, y: 40, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--accent);', text: '3² = 9'
      }));

      // Intermediate numbers: 10, 11, 12, 13, 14, 15 (6 numbers = 2 * 3)
      for (let i = 1; i <= 6; i++) {
        const cx = 40 + i * 35;
        svg.appendChild(Fig.svg('circle', { cx: cx, cy: 65, r: 4, style: 'fill: var(--ink-3);' }));
        svg.appendChild(Fig.svg('text', {
          x: cx, y: 88, 'text-anchor': 'middle',
          style: 'font-size: 11px; fill: var(--ink-2);', text: String(9 + i)
        }));
      }

      // Right square 4^2 = 16
      svg.appendChild(Fig.svg('circle', { cx: 285, cy: 65, r: 8, style: 'fill: var(--accent);' }));
      svg.appendChild(Fig.svg('text', {
        x: 285, y: 40, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--accent);', text: '4² = 16'
      }));

      // Bracket / label
      svg.appendChild(Fig.svg('text', {
        x: 162, y: 115, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--ok);',
        text: isMl ? 'ഇടയിലെ സംഖ്യകൾ = 2 × 3 = 6 എണ്ണം' : 'Between them = 2 × 3 = 6 numbers'
      }));

      api.body.appendChild(svg);
    }
  },

  'fig.square-ends-5': {
    title: 'Pattern for Numbers Ending in 5',
    title_ml: '5-ൽ അവസാനിക്കുന്ന സംഖ്യകളുടെ വർഗ്ഗം',
    caption: '$(10a + 5)^2 = 100a(a+1) + 25$. Multiply the tens digit $a$ by $(a+1)$ and append $25$.',
    caption_ml: '$(10a + 5)^2 = 100a(a+1) + 25$. പത്തിന്റെ സ്ഥാനത്തെ $a$-യെ $(a+1)$ കൊണ്ട് ഗുണിച്ച് 25 ചേർക്കുക.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 130', role: 'img' });
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

      // Big example: 35^2 = 1225
      svg.appendChild(Fig.svg('text', {
        x: 165, y: 35, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 20px; fill: var(--ink);', text: '35²'
      }));

      // Split into two blocks
      svg.appendChild(Fig.svg('rect', {
        x: 65, y: 55, width: 95, height: 45, rx: 6,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 112, y: 76, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--accent);', text: '3 × 4 = 12'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 112, y: 92, 'text-anchor': 'middle',
        style: 'font-size: 10px; fill: var(--ink-2);', text: 'a × (a + 1)'
      }));

      svg.appendChild(Fig.svg('rect', {
        x: 170, y: 55, width: 95, height: 45, rx: 6,
        style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 217, y: 76, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--ok);', text: '5² = 25'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 217, y: 92, 'text-anchor': 'middle',
        style: 'font-size: 10px; fill: var(--ink-2);', text: isMl ? 'അവസാനം' : 'last 2 digits'
      }));

      svg.appendChild(Fig.svg('text', {
        x: 165, y: 122, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 14px; fill: var(--ink);', text: '35² = 1225'
      }));

      api.body.appendChild(svg);
    }
  },

  'fig.square-root-defn': {
    title: 'Square Root: Finding the Side from the Area',
    title_ml: 'വർഗ്ഗമൂലം: വിസ്തീർണ്ണത്തിൽ നിന്ന് വശം കണ്ടെത്തൽ',
    caption: 'Given a square of area $A$, its side length is the square root $\\sqrt{A}$. Drag the slider to test different areas.',
    caption_ml: 'വിസ്തീർണ്ണം $A$ ആയ സമചതുരത്തിന്റെ ഒരു വശത്തിന്റെ നീളമാണ് വർഗ്ഗമൂലം $\\sqrt{A}$. സ്ലൈഡർ നീക്കി പരീക്ഷിക്കുക.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 160', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      const roots = [1, 2, 3, 4, 5, 6, 7, 8];
      function draw(idx) {
        DOM.clear(group);
        const s = roots[Math.min(roots.length - 1, Math.max(0, idx))];
        const area = s * s;
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const px = 15 + s * 12;
        const ox = 165 - px / 2;
        const oy = 75 - px / 2;

        group.appendChild(Fig.svg('rect', {
          x: ox, y: oy, width: px, height: px, rx: 4,
          style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 2px;'
        }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 75 + 5, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 15px; fill: var(--ok);',
          text: (isMl ? 'വിസ്തീർണ്ണം = ' : 'Area = ') + area
        }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: oy - 8, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 13px; fill: var(--ink);',
          text: '√' + area + ' = ' + s
        }));
      }

      draw(3); // side 4, area 16
      api.body.appendChild(svg);
      api.control({
        min: 0, max: 7, step: 1, value: 3,
        label: 'Square Root',
        format: i => {
          const s = roots[i];
          return (typeof I18N !== 'undefined' && I18N.lang() === 'ml')
            ? ('വിസ്തീർണ്ണം: ' + (s * s) + ' ⇒ വശം: ' + s)
            : ('Area: ' + (s * s) + ' ⇒ Side: ' + s);
        },
        onInput: draw
      });
    }
  },

  /* ── Class 8 Chapter 2: Equal Triangles (തുല്യത്രികോണങ്ങൾ) ───────────────── */

  'fig.tri-sss': {
    title: 'SSS Congruence: Three Equal Sides',
    title_ml: 'SSS തുല്യത: മൂന്ന് വശങ്ങൾ തുല്യമായ ത്രികോണങ്ങൾ',
    caption: 'When three sides match ($6\\text{ cm}, 5\\text{ cm}, 4\\text{ cm}$), the angles opposite to equal sides are equal: $\\angle A = \\angle R$, $\\angle B = \\angle P$, $\\angle C = \\angle Q$.',
    caption_ml: 'മൂന്ന് വശങ്ങളും തുല്യമാകുമ്പോൾ ($6\\text{ cm}, 5\\text{ cm}, 4\\text{ cm}$), തുല്യവശങ്ങൾക്ക് എതിരെയുള്ള കോണുകൾ പരസ്പരം തുല്യമായിരിക്കും: $\\angle A = \\angle R$, $\\angle B = \\angle P$, $\\angle C = \\angle Q$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 160', role: 'img' });
      // Triangle ABC on left
      const ax = 65, ay = 40, bx = 30, by = 130, cx = 130, cy = 130;
      svg.appendChild(Fig.svg('polygon', {
        points: `${ax},${ay} ${bx},${by} ${cx},${cy}`,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
      }));
      svg.appendChild(Fig.svg('text', { x: ax, y: ay - 6, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'A' }));
      svg.appendChild(Fig.svg('text', { x: bx - 8, y: by + 6, 'text-anchor': 'end', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'B' }));
      svg.appendChild(Fig.svg('text', { x: cx + 8, y: cy + 6, 'text-anchor': 'start', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'C' }));

      svg.appendChild(Fig.svg('text', { x: (bx + cx)/2, y: by + 16, 'text-anchor': 'middle', style: 'font-size: 11px; fill: var(--ok); font-weight: 600;', text: '5 cm' }));
      svg.appendChild(Fig.svg('text', { x: (ax + bx)/2 - 12, y: (ay + by)/2, 'text-anchor': 'middle', style: 'font-size: 11px; fill: var(--accent); font-weight: 600;', text: '6 cm' }));
      svg.appendChild(Fig.svg('text', { x: (ax + cx)/2 + 14, y: (ay + cy)/2, 'text-anchor': 'middle', style: 'font-size: 11px; fill: var(--warn); font-weight: 600;', text: '4 cm' }));

      // Triangle PQR on right
      const rx = 235, ry = 40, qx = 200, qy = 130, px = 300, py = 130;
      svg.appendChild(Fig.svg('polygon', {
        points: `${rx},${ry} ${qx},${qy} ${px},${py}`,
        style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 2px;'
      }));
      svg.appendChild(Fig.svg('text', { x: rx, y: ry - 6, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'R' }));
      svg.appendChild(Fig.svg('text', { x: qx - 8, y: qy + 6, 'text-anchor': 'end', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'Q' }));
      svg.appendChild(Fig.svg('text', { x: px + 8, y: py + 6, 'text-anchor': 'start', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'P' }));

      svg.appendChild(Fig.svg('text', { x: (qx + px)/2, y: qy + 16, 'text-anchor': 'middle', style: 'font-size: 11px; fill: var(--ok); font-weight: 600;', text: '5 cm' }));
      svg.appendChild(Fig.svg('text', { x: (rx + px)/2 + 14, y: (ry + py)/2, 'text-anchor': 'middle', style: 'font-size: 11px; fill: var(--accent); font-weight: 600;', text: '6 cm' }));
      svg.appendChild(Fig.svg('text', { x: (rx + qx)/2 - 12, y: (ry + qy)/2, 'text-anchor': 'middle', style: 'font-size: 11px; fill: var(--warn); font-weight: 600;', text: '4 cm' }));

      api.body.appendChild(svg);
    }
  },

  'fig.tri-rigidity': {
    title: 'Stability: Triangular Frame vs Quadrilateral',
    title_ml: 'ത്രികോണ ദാർഢ്യവും ചതുർഭുജവും',
    caption: 'A four-sided frame easily tilts and deforms without changing side lengths. A triangular frame is rigid and cannot deform under pressure.',
    caption_ml: 'ചതുർഭുജ ചട്ടക്കൂട് വശങ്ങളുടെ നീളം മാറ്റാതെ തന്നെ ചരിഞ്ഞ് രൂപം മാറുന്നു. എന്നാൽ ത്രികോണ ചട്ടക്കൂട് ഒട്ടും ചലിക്കാതെ ദൃഢമായി നിൽക്കുന്നു.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 140', role: 'img' });
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

      // Left: Quadrilateral deforming
      svg.appendChild(Fig.svg('rect', {
        x: 30, y: 35, width: 80, height: 75,
        style: 'fill: none; stroke: var(--ink-3); stroke-dasharray: 3 3; stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('polygon', {
        points: '50,35 130,35 110,110 30,110',
        style: 'fill: var(--bad-soft); stroke: var(--bad); stroke-width: 2px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 75, y: 130, 'text-anchor': 'middle',
        style: 'font-weight: 600; font-size: 11px; fill: var(--bad);',
        text: isMl ? 'ചതുർഭുജം: ചായുന്നു' : 'Quadrilateral: tilts'
      }));

      // Right: Triangle (rigid)
      svg.appendChild(Fig.svg('polygon', {
        points: '190,110 280,110 235,35',
        style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 2px;'
      }));
      svg.appendChild(Fig.svg('circle', {
        cx: 235, cy: 80, r: 12,
        style: 'fill: var(--ok);'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 235, y: 84, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: #ffffff;', text: '✓'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 235, y: 130, 'text-anchor': 'middle',
        style: 'font-weight: 600; font-size: 11px; fill: var(--ok);',
        text: isMl ? 'ത്രികോണം: ദൃഢമാണ്' : 'Triangle: rigid'
      }));

      api.body.appendChild(svg);
    }
  },

  'fig.tri-asa': {
    title: 'ASA Congruence: One Side and Two Angles',
    title_ml: 'ASA തുല്യത: ഒരു വശവും രണ്ടറ്റത്തെ കോണുകളും',
    caption: 'Given side $BC = 6\\text{ cm}$, $\\angle B = 50^\\circ$ and $\\angle C = 70^\\circ$, the rays must intersect at $A$ with angle $60^\\circ$. The triangle is unique.',
    caption_ml: 'പാദം $BC = 6\\text{ cm}$ ഉം രണ്ടറ്റത്തെ കോണുകൾ $\\angle B = 50^\\circ, \\angle C = 70^\\circ$ ഉം ആയാൽ കിട്ടുന്ന ത്രികോണത്തിലെ മൂന്നാമത്തെ കോൺ $60^\\circ$ ആയി നിശ്ചയിക്കപ്പെടുന്നു.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 150', role: 'img' });
      const bx = 60, by = 120, cx = 240, cy = 120, ax = 135, ay = 40;

      svg.appendChild(Fig.svg('polygon', {
        points: `${ax},${ay} ${bx},${by} ${cx},${cy}`,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
      }));

      svg.appendChild(Fig.svg('text', {
        x: 150, y: 138, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--accent);', text: '6 cm'
      }));

      svg.appendChild(Fig.svg('path', {
        d: 'M 85 120 A 25 25 0 0 0 76 101',
        style: 'fill: none; stroke: var(--warn); stroke-width: 2px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 92, y: 114, style: 'font-weight: 600; font-size: 11px; fill: var(--warn);', text: '50°'
      }));

      svg.appendChild(Fig.svg('path', {
        d: 'M 215 120 A 25 25 0 0 1 231 96',
        style: 'fill: none; stroke: var(--ok); stroke-width: 2px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 200, y: 112, style: 'font-weight: 600; font-size: 11px; fill: var(--ok);', text: '70°'
      }));

      svg.appendChild(Fig.svg('text', {
        x: ax, y: ay - 8, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'A (60°)'
      }));
      svg.appendChild(Fig.svg('text', {
        x: bx - 10, y: by + 4, 'text-anchor': 'end',
        style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'B'
      }));
      svg.appendChild(Fig.svg('text', {
        x: cx + 10, y: cy + 4, 'text-anchor': 'start',
        style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'C'
      }));

      api.body.appendChild(svg);
    }
  },

  'fig.tri-sas': {
    title: 'SAS Congruence: Two Sides and Included Angle',
    title_ml: 'SAS തുല്യത: രണ്ട് വശങ്ങളും അവയ്ക്കിടയിലെ കോണും',
    caption: 'Sides $AB = 5\\text{ cm}$ and $AC = 4\\text{ cm}$ with included angle $55^\\circ$ fix the third side $BC$ uniquely.',
    caption_ml: '$AB = 5\\text{ cm}, AC = 4\\text{ cm}$ എന്നീ വശങ്ങളും അവയ്ക്കിടയിലെ കോൺ $55^\\circ$ ഉം മൂന്നാമത്തെ വശമായ $BC$-യുടെ നീളത്തെ പൂർണ്ണമായി നിശ്ചയിക്കുന്നു.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 150', role: 'img' });
      const ax = 60, ay = 120, bx = 240, by = 120, cx = 145, cy = 25;

      svg.appendChild(Fig.svg('polygon', {
        points: `${ax},${ay} ${bx},${by} ${cx},${cy}`,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
      }));

      svg.appendChild(Fig.svg('path', {
        d: 'M 90 120 A 30 30 0 0 0 77 95',
        style: 'fill: none; stroke: var(--warn); stroke-width: 2px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 92, y: 110, style: 'font-weight: 600; font-size: 11px; fill: var(--warn);', text: '55°'
      }));

      svg.appendChild(Fig.svg('text', {
        x: 150, y: 138, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--accent);', text: '5 cm'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 88, y: 65, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--ok);', text: '4 cm'
      }));

      svg.appendChild(Fig.svg('text', { x: ax - 8, y: ay + 4, 'text-anchor': 'end', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'A' }));
      svg.appendChild(Fig.svg('text', { x: bx + 8, y: by + 4, 'text-anchor': 'start', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'B' }));
      svg.appendChild(Fig.svg('text', { x: cx, y: cy - 6, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'C' }));

      api.body.appendChild(svg);
    }
  },

  'fig.tri-isosceles': {
    title: 'Isosceles Triangle & Perpendicular Bisector',
    title_ml: 'സമപാർശ്വ ത്രികോണവും ലംബസമഭാജിയും',
    caption: 'In isosceles $\\triangle ABC$ ($AB = AC$), the perpendicular altitude $AD$ bisects the base ($BD = DC$) and the vertex angle ($\\angle BAD = \\angle CAD$).',
    caption_ml: 'സമപാർശ്വ ത്രികോണം $ABC$-ൽ ($AB = AC$), മുകളിൽ നിന്നുള്ള ലംബം $AD$ പാദത്തെയും ($BD = DC$) മുകളിലെ കോണിനെയും സമഭാഗം ചെയ്യുന്നു.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 160', role: 'img' });
      const ax = 165, ay = 25, bx = 65, by = 130, cx = 265, cy = 130, dx = 165, dy = 130;

      svg.appendChild(Fig.svg('polygon', {
        points: `${ax},${ay} ${bx},${by} ${cx},${cy}`,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
      }));

      svg.appendChild(Fig.svg('line', {
        x1: ax, y1: ay, x2: dx, y2: dy,
        style: 'stroke: var(--warn); stroke-width: 1.8px; stroke-dasharray: 4 3;'
      }));

      svg.appendChild(Fig.svg('rect', {
        x: dx - 10, y: dy - 10, width: 10, height: 10,
        style: 'fill: none; stroke: var(--ink-2); stroke-width: 1.2px;'
      }));

      svg.appendChild(Fig.svg('line', { x1: 110, y1: 72, x2: 120, y2: 80, style: 'stroke: var(--accent); stroke-width: 2px;' }));
      svg.appendChild(Fig.svg('line', { x1: 210, y1: 80, x2: 220, y2: 72, style: 'stroke: var(--accent); stroke-width: 2px;' }));

      svg.appendChild(Fig.svg('line', { x1: 112, y1: 126, x2: 112, y2: 134, style: 'stroke: var(--ok); stroke-width: 2px;' }));
      svg.appendChild(Fig.svg('line', { x1: 218, y1: 126, x2: 218, y2: 134, style: 'stroke: var(--ok); stroke-width: 2px;' }));

      svg.appendChild(Fig.svg('text', { x: ax, y: ay - 6, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'A' }));
      svg.appendChild(Fig.svg('text', { x: bx - 8, y: by + 5, 'text-anchor': 'end', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'B' }));
      svg.appendChild(Fig.svg('text', { x: cx + 8, y: cy + 5, 'text-anchor': 'start', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'C' }));
      svg.appendChild(Fig.svg('text', { x: dx, y: dy + 16, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'D' }));

      api.body.appendChild(svg);
    }
  },

  'fig.tri-equilateral': {
    title: 'Equilateral Triangle: All Angles 60°',
    title_ml: 'സമഭുജ ത്രികോണം: എല്ലാ കോണുകളും 60°',
    caption: 'All three sides are equal and all three interior angles measure $60^\\circ$. It has 3 lines of symmetry.',
    caption_ml: 'മൂന്ന് വശങ്ങളും തുല്യമാണ്, ഓരോ കോണിന്റെയും അളവ് കൃത്യം $60^\\circ$ ആണ്. ഇതിന് 3 സമമിതി അക്ഷങ്ങളുണ്ട്.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 160', role: 'img' });
      const ax = 165, ay = 25, bx = 100, by = 138, cx = 230, cy = 138;

      svg.appendChild(Fig.svg('polygon', {
        points: `${ax},${ay} ${bx},${by} ${cx},${cy}`,
        style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 2px;'
      }));

      svg.appendChild(Fig.svg('text', {
        x: ax, y: ay + 26, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--ok);', text: '60°'
      }));
      svg.appendChild(Fig.svg('text', {
        x: bx + 22, y: by - 8, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--ok);', text: '60°'
      }));
      svg.appendChild(Fig.svg('text', {
        x: cx - 22, y: by - 8, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--ok);', text: '60°'
      }));

      svg.appendChild(Fig.svg('line', { x1: 128, y1: 78, x2: 136, y2: 84, style: 'stroke: var(--ok); stroke-width: 2px;' }));
      svg.appendChild(Fig.svg('line', { x1: 194, y1: 84, x2: 202, y2: 78, style: 'stroke: var(--ok); stroke-width: 2px;' }));
      svg.appendChild(Fig.svg('line', { x1: 165, y1: 134, x2: 165, y2: 142, style: 'stroke: var(--ok); stroke-width: 2px;' }));

      api.body.appendChild(svg);
    }
  },

  'fig.tri-parallelogram': {
    title: 'Parallelogram Divided by Diagonal',
    title_ml: 'സാമാന്തരികവും വികർണ്ണവും',
    caption: 'Diagonal $AC$ divides parallelogram $ABCD$ into two congruent triangles $\\triangle ABC = \\triangle CDA$ by ASA, proving opposite sides and opposite angles are equal.',
    caption_ml: 'വികർണ്ണം $AC$ സാമാന്തരികത്തെ രണ്ട് തുല്യത്രികോണങ്ങളായി വിഭജിക്കുന്നു ($\\triangle ABC = \\triangle CDA$). ഇത് എതിർവശങ്ങളും എതിർകോണുകളും തുല്യമാണെന്ന് തെളിയിക്കുന്നു.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 150', role: 'img' });
      const ax = 50, ay = 115, bx = 190, by = 115, cx = 280, cy = 35, dx = 140, dy = 35;

      svg.appendChild(Fig.svg('polygon', {
        points: `${ax},${ay} ${bx},${by} ${cx},${cy}`,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.8px;'
      }));
      svg.appendChild(Fig.svg('polygon', {
        points: `${ax},${ay} ${cx},${cy} ${dx},${dy}`,
        style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 1.8px;'
      }));

      svg.appendChild(Fig.svg('line', {
        x1: ax, y1: ay, x2: cx, y2: cy,
        style: 'stroke: var(--warn); stroke-width: 2px;'
      }));

      svg.appendChild(Fig.svg('text', { x: ax - 8, y: ay + 5, 'text-anchor': 'end', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'A' }));
      svg.appendChild(Fig.svg('text', { x: bx + 8, y: by + 5, 'text-anchor': 'start', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'B' }));
      svg.appendChild(Fig.svg('text', { x: cx + 8, y: cy - 4, 'text-anchor': 'start', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'C' }));
      svg.appendChild(Fig.svg('text', { x: dx - 8, y: cy - 4, 'text-anchor': 'end', style: 'font-weight: 700; font-size: 12px; fill: var(--ink);', text: 'D' }));

      svg.appendChild(Fig.svg('text', { x: 175, y: 92, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 12px; fill: var(--accent);', text: '△ABC' }));
      svg.appendChild(Fig.svg('text', { x: 155, y: 58, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 12px; fill: var(--ok);', text: '△CDA' }));

      api.body.appendChild(svg);
    }
  },

  /* ── Foundational Concepts (Class 1 to 7) ──────────────────────────────── */

  'fig.counting': {
    title: 'Counting & Natural Numbers',
    title_ml: 'എണ്ണൽ സംഖ്യകൾ',
    caption: 'Natural numbers correspond to discrete counts of physical objects: $1, 2, 3, 4, 5\\ldots$',
    caption_ml: 'വസ്തുക്കളെ എണ്ണാൻ ഉപയോഗിക്കുന്ന സംഖ്യകളാണ് എണ്ണൽ സംഖ്യകൾ: $1, 2, 3, 4, 5\\ldots$',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 110', role: 'img' });
      for (let n = 1; n <= 5; n++) {
        const cx = 25 + (n - 1) * 60;
        for (let j = 0; j < n; j++) {
          svg.appendChild(Fig.svg('circle', {
            cx: cx + (j % 2) * 16, cy: 35 + Math.floor(j / 2) * 16, r: 6,
            style: 'fill: var(--accent);'
          }));
        }
        svg.appendChild(Fig.svg('text', {
          x: cx + 8, y: 90, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 14px; fill: var(--ink);', text: String(n)
        }));
      }
      api.body.appendChild(svg);
    }
  },

  'fig.addition': {
    title: 'Addition as Combining Groups',
    title_ml: 'സങ്കലനം: കൂട്ടിച്ചേർക്കൽ',
    caption: 'Combining 3 blue dots and 4 green dots gives 7 dots: $3 + 4 = 7$.',
    caption_ml: '3 നീല ബിന്ദുക്കളും 4 പച്ച ബിന്ദുക്കളും ചേർത്താൽ 7 ബിന്ദുക്കൾ ആകുന്നു: $3 + 4 = 7$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 110', role: 'img' });
      // 3 blue dots
      for (let i = 0; i < 3; i++) {
        svg.appendChild(Fig.svg('circle', { cx: 45 + i * 22, cy: 45, r: 8, style: 'fill: var(--accent);' }));
      }
      svg.appendChild(Fig.svg('text', { x: 67, y: 85, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--accent);', text: '3' }));

      // + sign
      svg.appendChild(Fig.svg('text', { x: 130, y: 52, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 22px; fill: var(--ink);', text: '+' }));

      // 4 green dots
      for (let i = 0; i < 4; i++) {
        svg.appendChild(Fig.svg('circle', { cx: 170 + i * 22, cy: 45, r: 8, style: 'fill: var(--ok);' }));
      }
      svg.appendChild(Fig.svg('text', { x: 203, y: 85, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--ok);', text: '4' }));

      // = 7
      svg.appendChild(Fig.svg('text', { x: 275, y: 52, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 20px; fill: var(--ink);', text: '= 7' }));
      api.body.appendChild(svg);
    }
  },

  'fig.subtraction': {
    title: 'Subtraction as Take-Away',
    title_ml: 'വ്യവകലനം: കുറയ്ക്കൽ',
    caption: 'Starting with 7 items and removing 3 leaves 4 items: $7 - 3 = 4$.',
    caption_ml: '7 എണ്ണത്തിൽ നിന്ന് 3 എണ്ണം നീക്കം ചെയ്താൽ 4 എണ്ണം ബാക്കി വരുന്നു: $7 - 3 = 4$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 110', role: 'img' });
      // 4 remaining dots
      for (let i = 0; i < 4; i++) {
        svg.appendChild(Fig.svg('circle', { cx: 40 + i * 28, cy: 45, r: 9, style: 'fill: var(--ok);' }));
      }
      // 3 crossed out dots
      for (let i = 0; i < 3; i++) {
        const cx = 170 + i * 28;
        svg.appendChild(Fig.svg('circle', { cx: cx, cy: 45, r: 9, style: 'fill: var(--bad-soft); stroke: var(--bad); stroke-width: 1.5px;' }));
        svg.appendChild(Fig.svg('line', { x1: cx - 6, y1: 39, x2: cx + 6, y2: 51, style: 'stroke: var(--bad); stroke-width: 2px;' }));
        svg.appendChild(Fig.svg('line', { x1: cx + 6, y1: 39, x2: cx - 6, y2: 51, style: 'stroke: var(--bad); stroke-width: 2px;' }));
      }
      svg.appendChild(Fig.svg('text', {
        x: 280, y: 52, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 18px; fill: var(--ink);', text: '= 4'
      }));
      api.body.appendChild(svg);
    }
  },

  'fig.zero': {
    title: 'The Number Zero',
    title_ml: 'പൂജ്യം',
    caption: 'Zero represents the absence of quantity, the additive identity ($a + 0 = a$), and the origin on the number line.',
    caption_ml: 'ഒന്നുമില്ലായ്മയെ സൂചിപ്പിക്കുന്ന സംഖ്യയാണ് പൂജ്യം. സങ്കലന തന്മകവുമാണിത് ($a + 0 = a$).',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 100', role: 'img' });
      svg.appendChild(Fig.svg('line', { x1: 20, y1: 50, x2: 310, y2: 50, style: 'stroke: var(--rule-2); stroke-width: 2px;' }));
      for (let i = -3; i <= 3; i++) {
        const cx = 165 + i * 42;
        svg.appendChild(Fig.svg('line', { x1: cx, y1: 42, x2: cx, y2: 58, style: 'stroke: var(--ink); stroke-width: 2px;' }));
        svg.appendChild(Fig.svg('text', {
          x: cx, y: 78, 'text-anchor': 'middle',
          style: 'font-weight: ' + (i === 0 ? '700' : '400') + '; fill: ' + (i === 0 ? 'var(--accent)' : 'var(--ink-2)') + '; font-size: 13px;',
          text: String(i)
        }));
      }
      svg.appendChild(Fig.svg('circle', { cx: 165, cy: 50, r: 6, style: 'fill: var(--accent);' }));
      api.body.appendChild(svg);
    }
  },

  'fig.multiplication': {
    title: 'Multiplication as Repeated Addition',
    title_ml: 'ഗുണനം: ആവർത്തിച്ചുള്ള സങ്കലനം',
    caption: '3 groups of 4 objects make 12 objects: $4 + 4 + 4 = 3 \\times 4 = 12$.',
    caption_ml: '4 വീതമുള്ള 3 കൂട്ടങ്ങൾ ചേർന്നാൽ 12 ആകുന്നു: $4 + 4 + 4 = 3 \\times 4 = 12$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 110', role: 'img' });
      for (let g = 0; g < 3; g++) {
        const gx = 25 + g * 95;
        svg.appendChild(Fig.svg('rect', {
          x: gx, y: 20, width: 80, height: 60, rx: 6,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1px;'
        }));
        for (let i = 0; i < 4; i++) {
          svg.appendChild(Fig.svg('circle', {
            cx: gx + 25 + (i % 2) * 30, cy: 38 + Math.floor(i / 2) * 24, r: 6,
            style: 'fill: var(--accent);'
          }));
        }
      }
      svg.appendChild(Fig.svg('text', {
        x: 165, y: 100, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--ink);', text: '3 × 4 = 12'
      }));
      api.body.appendChild(svg);
    }
  },

  'fig.mult-comm': {
    title: 'Commutative Property: a × b = b × a',
    title_ml: 'ഗുണനത്തിലെ ക്രമനിയമം: a × b = b × a',
    caption: 'Rotating a $3 \\times 5$ array of dots produces a $5 \\times 3$ array: $3 \\times 5 = 5 \\times 3 = 15$.',
    caption_ml: '$3 \\times 5$ വലിപ്പമുള്ള ബിന്ദുക്കളെ തിരിച്ചുവെച്ചാൽ $5 \\times 3$ ആകുന്നു: $3 \\times 5 = 5 \\times 3 = 15$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 120', role: 'img' });
      // 3 rows of 5
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 5; c++) {
          svg.appendChild(Fig.svg('circle', { cx: 30 + c * 16, cy: 35 + r * 16, r: 4, style: 'fill: var(--accent);' }));
        }
      }
      svg.appendChild(Fig.svg('text', { x: 62, y: 95, 'text-anchor': 'middle', style: 'font-weight: 600; font-size: 12px; fill: var(--ink);', text: '3 × 5 = 15' }));

      // = sign
      svg.appendChild(Fig.svg('text', { x: 165, y: 55, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 20px; fill: var(--ink-2);', text: '=' }));

      // 5 rows of 3
      for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 3; c++) {
          svg.appendChild(Fig.svg('circle', { cx: 235 + c * 16, cy: 20 + r * 16, r: 4, style: 'fill: var(--ok);' }));
        }
      }
      svg.appendChild(Fig.svg('text', { x: 251, y: 108, 'text-anchor': 'middle', style: 'font-weight: 600; font-size: 12px; fill: var(--ink);', text: '5 × 3 = 15' }));
      api.body.appendChild(svg);
    }
  },

  'fig.distributive-law': {
    title: 'Distributive Property: a(b + c) = ab + ac',
    title_ml: 'വിതരണ നിയമം: a(b + c) = ab + ac',
    caption: 'A rectangle of height $a$ and width $(b+c)$ has total area equal to the sum of two smaller rectangles $ab + ac$.',
    caption_ml: '$a$ ഉയരവും $(b+c)$ വീതിയുമുള്ള ചതുരത്തിന്റെ വിസ്തീർണ്ണം $ab, ac$ എന്നീ രണ്ട് ചെറിയ ചതുരങ്ങളുടെ വിസ്തീർണ്ണങ്ങളുടെ തുകയാണ്.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 140', role: 'img' });
      const ox = 70, oy = 25, aH = 75, bW = 105, cW = 60;

      // ab box
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy, width: bW, height: aH,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + bW / 2, y: oy + aH / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; fill: var(--accent);', text: 'a × b'
      }));

      // ac box
      svg.appendChild(Fig.svg('rect', {
        x: ox + bW, y: oy, width: cW, height: aH,
        style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + bW + cW / 2, y: oy + aH / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; fill: var(--ok);', text: 'a × c'
      }));

      // Dimensions
      svg.appendChild(Fig.svg('text', { x: ox - 10, y: oy + aH / 2 + 4, 'text-anchor': 'end', style: 'font-weight: 700; fill: var(--ink);', text: 'a' }));
      svg.appendChild(Fig.svg('text', { x: ox + bW / 2, y: oy - 8, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--ink);', text: 'b' }));
      svg.appendChild(Fig.svg('text', { x: ox + bW + cW / 2, y: oy - 8, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--ink);', text: 'c' }));

      // Total label
      svg.appendChild(Fig.svg('text', {
        x: 165, y: oy + aH + 24, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--ink);', text: 'a(b + c) = ab + ac'
      }));
      api.body.appendChild(svg);
    }
  },

  'fig.division': {
    title: 'Division as Equal Sharing',
    title_ml: 'ഹരണം: തുല്യമായി ഭാഗിക്കൽ',
    caption: '12 items shared equally among 3 groups gives 4 items per group: $12 \\div 3 = 4$.',
    caption_ml: '12 വസ്തുക്കളെ 3 തുല്യ ഭാഗങ്ങളാക്കിയാൽ ഓരോന്നിലും 4 എണ്ണം വീതം ഉണ്ടാകും: $12 \\div 3 = 4$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 110', role: 'img' });
      for (let g = 0; g < 3; g++) {
        const gx = 30 + g * 95;
        svg.appendChild(Fig.svg('rect', {
          x: gx, y: 15, width: 80, height: 60, rx: 6,
          style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 1px;'
        }));
        for (let i = 0; i < 4; i++) {
          svg.appendChild(Fig.svg('circle', {
            cx: gx + 25 + (i % 2) * 30, cy: 32 + Math.floor(i / 2) * 24, r: 6,
            style: 'fill: var(--ok);'
          }));
        }
      }
      svg.appendChild(Fig.svg('text', {
        x: 165, y: 98, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--ink);', text: '12 ÷ 3 = 4'
      }));
      api.body.appendChild(svg);
    }
  },

  'fig.even-odd': {
    title: 'Even vs Odd Numbers',
    title_ml: 'ഇരട്ട സംഖ്യകളും ഒറ്റ സംഖ്യകളും',
    caption: 'Even numbers pair up completely with 0 remainder. Odd numbers always have 1 leftover item.',
    caption_ml: 'ഇരട്ട സംഖ്യകൾ കൃത്യമായി ജോഡികളാകുന്നു; ഒറ്റ സംഖ്യകളിൽ എപ്പോഴും ഒരെണ്ണം ബാക്കി വരുന്നു.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 120', role: 'img' });
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

      // Even: 6
      svg.appendChild(Fig.svg('text', { x: 80, y: 25, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--ok);', text: isMl ? 'ഇരട്ട: 6' : 'Even: 6' }));
      for (let i = 0; i < 3; i++) {
        svg.appendChild(Fig.svg('circle', { cx: 50 + i * 28, cy: 45, r: 7, style: 'fill: var(--ok);' }));
        svg.appendChild(Fig.svg('circle', { cx: 50 + i * 28, cy: 68, r: 7, style: 'fill: var(--ok);' }));
      }
      svg.appendChild(Fig.svg('text', { x: 80, y: 100, 'text-anchor': 'middle', style: 'font-size: 11px; fill: var(--ink-2);', text: isMl ? '3 ജോഡികൾ' : '3 complete pairs' }));

      // Odd: 7
      svg.appendChild(Fig.svg('text', { x: 235, y: 25, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--warn);', text: isMl ? 'ഒറ്റ: 7' : 'Odd: 7' }));
      for (let i = 0; i < 3; i++) {
        svg.appendChild(Fig.svg('circle', { cx: 195 + i * 28, cy: 45, r: 7, style: 'fill: var(--warn);' }));
        svg.appendChild(Fig.svg('circle', { cx: 195 + i * 28, cy: 68, r: 7, style: 'fill: var(--warn);' }));
      }
      // Single leftover dot
      svg.appendChild(Fig.svg('circle', { cx: 279, cy: 56, r: 7, style: 'fill: var(--bad);' }));
      svg.appendChild(Fig.svg('text', { x: 235, y: 100, 'text-anchor': 'middle', style: 'font-size: 11px; fill: var(--ink-2);', text: isMl ? '1 ബാക്കി' : '1 leftover' }));

      api.body.appendChild(svg);
    }
  },

  'fig.factors-multiples': {
    title: 'Factors of 12 as Rectangular Dimensions',
    title_ml: '12-ന്റെ ഘടകങ്ങൾ ചതുര രൂപത്തിൽ',
    caption: 'The factors of 12 are all dimensions of rectangles with area 12: $1 \\times 12$, $2 \\times 6$, and $3 \\times 4$.',
    caption_ml: '12 വിസ്തീർണ്ണമുള്ള ചതുരങ്ങൾ നിർമ്മിക്കാൻ കഴിയുന്ന വശങ്ങളാണ് 12-ന്റെ ഘടകങ്ങൾ: $1 \\times 12, 2 \\times 6, 3 \\times 4$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 130', role: 'img' });
      // 3 x 4 rectangle
      svg.appendChild(Fig.svg('rect', { x: 30, y: 25, width: 70, height: 55, rx: 4, style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;' }));
      svg.appendChild(Fig.svg('text', { x: 65, y: 56, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--accent);', text: '3 × 4' }));

      // 2 x 6 rectangle
      svg.appendChild(Fig.svg('rect', { x: 130, y: 35, width: 95, height: 38, rx: 4, style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 1.5px;' }));
      svg.appendChild(Fig.svg('text', { x: 177, y: 58, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--ok);', text: '2 × 6' }));

      // 1 x 12 rectangle
      svg.appendChild(Fig.svg('rect', { x: 245, y: 45, width: 75, height: 18, rx: 3, style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;' }));
      svg.appendChild(Fig.svg('text', { x: 282, y: 58, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 11px; fill: var(--warn);', text: '1 × 12' }));

      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
      svg.appendChild(Fig.svg('text', {
        x: 165, y: 110, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--ink);',
        text: isMl ? '12-ന്റെ ഘടകങ്ങൾ: 1, 2, 3, 4, 6, 12' : 'Factors of 12: 1, 2, 3, 4, 6, 12'
      }));
      api.body.appendChild(svg);
    }
  },

  'fig.prime-composite': {
    title: 'Prime vs Composite Numbers',
    title_ml: 'അഭാജ്യ സംഖ്യകളും ഭാജ്യ സംഖ്യകളും',
    caption: 'Prime numbers (like 7) can only form a single $1 \\times 7$ line. Composite numbers (like 6) can form a rectangle ($2 \\times 3$).',
    caption_ml: 'അഭാജ്യ സംഖ്യകളെ (ഉദാ: 7) ഒരൊറ്റ വരിയായി മാത്രമേ വെയ്ക്കാൻ കഴിയൂ ($1 \\times 7$). ഭാജ്യ സംഖ്യകളെ (ഉദാ: 6) ചതുര രൂപത്തിൽ ക്രമീകരിക്കാം ($2 \\times 3$).',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 110', role: 'img' });
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

      // Prime 7
      svg.appendChild(Fig.svg('text', { x: 80, y: 25, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--accent);', text: isMl ? 'അഭാജ്യം: 7' : 'Prime: 7' }));
      for (let i = 0; i < 7; i++) {
        svg.appendChild(Fig.svg('circle', { cx: 20 + i * 20, cy: 50, r: 6, style: 'fill: var(--accent);' }));
      }
      svg.appendChild(Fig.svg('text', { x: 80, y: 85, 'text-anchor': 'middle', style: 'font-size: 11px; fill: var(--ink-2);', text: '1 × 7' }));

      // Composite 6
      svg.appendChild(Fig.svg('text', { x: 245, y: 25, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--ok);', text: isMl ? 'ഭാജ്യം: 6' : 'Composite: 6' }));
      for (let r = 0; r < 2; r++) {
        for (let c = 0; c < 3; c++) {
          svg.appendChild(Fig.svg('circle', { cx: 220 + c * 24, cy: 42 + r * 22, r: 6, style: 'fill: var(--ok);' }));
        }
      }
      svg.appendChild(Fig.svg('text', { x: 245, y: 85, 'text-anchor': 'middle', style: 'font-size: 11px; fill: var(--ink-2);', text: '2 × 3' }));
      api.body.appendChild(svg);
    }
  },

  'fig.grid-mult': {
    title: 'Array Grid Model: (10 + 4) × (10 + 2)',
    title_ml: 'ഗ്രിഡ് രീതി: (10 + 4) × (10 + 2)',
    caption: 'Breaking multi-digit multiplication into 4 partial products: $100 + 20 + 40 + 8 = 168$.',
    caption_ml: 'വലിയ സംഖ്യകളുടെ ഗുണനം 4 ലളിതമായ ഭാഗങ്ങളായി തിരിക്കുന്നു: $100 + 20 + 40 + 8 = 168$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 145', role: 'img' });
      const ox = 90, oy = 25;

      // 10 x 10 = 100
      svg.appendChild(Fig.svg('rect', { x: ox, y: oy, width: 75, height: 50, style: 'fill: var(--accent-soft); stroke: var(--accent);' }));
      svg.appendChild(Fig.svg('text', { x: ox + 37, y: oy + 30, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--accent);', text: '100' }));

      // 2 x 10 = 20
      svg.appendChild(Fig.svg('rect', { x: ox + 75, y: oy, width: 35, height: 50, style: 'fill: var(--warn-soft); stroke: var(--warn);' }));
      svg.appendChild(Fig.svg('text', { x: ox + 92, y: oy + 30, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--warn);', text: '20' }));

      // 10 x 4 = 40
      svg.appendChild(Fig.svg('rect', { x: ox, y: oy + 50, width: 75, height: 30, style: 'fill: var(--warn-soft); stroke: var(--warn);' }));
      svg.appendChild(Fig.svg('text', { x: ox + 37, y: oy + 70, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--warn);', text: '40' }));

      // 2 x 4 = 8
      svg.appendChild(Fig.svg('rect', { x: ox + 75, y: oy + 50, width: 35, height: 30, style: 'fill: var(--ok-soft); stroke: var(--ok);' }));
      svg.appendChild(Fig.svg('text', { x: ox + 92, y: oy + 70, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--ok);', text: '8' }));

      // Labels
      svg.appendChild(Fig.svg('text', { x: ox + 37, y: oy - 8, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--ink);', text: '10' }));
      svg.appendChild(Fig.svg('text', { x: ox + 92, y: oy - 8, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--ink);', text: '2' }));
      svg.appendChild(Fig.svg('text', { x: ox - 10, y: oy + 30, 'text-anchor': 'end', style: 'font-weight: 700; fill: var(--ink);', text: '10' }));
      svg.appendChild(Fig.svg('text', { x: ox - 10, y: oy + 70, 'text-anchor': 'end', style: 'font-weight: 700; fill: var(--ink);', text: '4' }));

      svg.appendChild(Fig.svg('text', {
        x: 165, y: oy + 105, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--ink);', text: '14 × 12 = 100 + 20 + 40 + 8 = 168'
      }));
      api.body.appendChild(svg);
    }
  },

  'fig.area-rectangle': {
    title: 'Area of a Rectangle: Length × Breadth',
    title_ml: 'ചതുരത്തിന്റെ വിസ്തീർണ്ണം: നീളം × വീതി',
    caption: 'A rectangle of length $l = 5$ and breadth $b = 3$ contains $5 \\times 3 = 15$ unit squares.',
    caption_ml: 'നീളം $l = 5$, വീതി $b = 3$ ആയ ചതുരത്തിൽ $5 \\times 3 = 15$ യൂണിറ്റ് സമചതുരങ്ങളുണ്ട്.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 130', role: 'img' });
      const ox = 85, oy = 25, cs = 32;
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 5; c++) {
          svg.appendChild(Fig.svg('rect', {
            x: ox + c * cs, y: oy + r * cs, width: cs - 2, height: cs - 2, rx: 2,
            style: 'fill: var(--accent-soft); stroke: var(--accent-line);'
          }));
        }
      }
      svg.appendChild(Fig.svg('text', { x: ox + 2.5 * cs, y: oy - 8, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--ink);', text: 'നീളം / Length = 5' }));
      svg.appendChild(Fig.svg('text', { x: ox - 10, y: oy + 1.5 * cs + 4, 'text-anchor': 'end', style: 'font-weight: 700; fill: var(--ink);', text: '3' }));
      svg.appendChild(Fig.svg('text', { x: ox + 2.5 * cs, y: oy + 1.5 * cs + 5, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 15px; fill: var(--accent);', text: '5 × 3 = 15' }));
      api.body.appendChild(svg);
    }
  },

  'fig.fractions': {
    title: 'Fractions as Equal Parts',
    title_ml: 'ഭിന്നസംഖ്യകൾ: തുല്യ ഭാഗങ്ങൾ',
    caption: 'A circle divided into 4 equal quadrants: $\\frac{3}{4}$ is shaded and $\\frac{1}{4}$ is unshaded.',
    caption_ml: 'ഒരു വൃത്തത്തെ 4 തുല്യ ഭാഗങ്ങളാക്കിയത്: 3 ഭാഗം നിറം കൊടുത്തത് (\\frac{3}{4}), 1 ഭാഗം ബാക്കി (\\frac{1}{4}).',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 130', role: 'img' });
      const cx = 110, cy = 65, r = 45;

      // 4 quadrants
      const paths = [
        `M ${cx} ${cy} L ${cx + r} ${cy} A ${r} ${r} 0 0 1 ${cx} ${cy + r} Z`, // bottom-right
        `M ${cx} ${cy} L ${cx} ${cy + r} A ${r} ${r} 0 0 1 ${cx - r} ${cy} Z`, // bottom-left
        `M ${cx} ${cy} L ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx} ${cy - r} Z`, // top-left
        `M ${cx} ${cy} L ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx + r} ${cy} Z`  // top-right
      ];

      // Shade 3 quadrants
      for (let i = 0; i < 3; i++) {
        svg.appendChild(Fig.svg('path', { d: paths[i], style: 'fill: var(--accent); stroke: var(--paper); stroke-width: 2px;' }));
      }
      // Leave 4th quadrant light
      svg.appendChild(Fig.svg('path', { d: paths[3], style: 'fill: var(--surface-2); stroke: var(--paper); stroke-width: 2px;' }));

      svg.appendChild(Fig.svg('text', {
        x: 220, y: 55, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 20px; fill: var(--accent);', text: '3 / 4'
      }));
      svg.appendChild(Fig.svg('text', {
        x: 220, y: 80, 'text-anchor': 'middle',
        style: 'font-size: 12px; fill: var(--ink-2);', text: '3 of 4 equal parts'
      }));

      api.body.appendChild(svg);
    }
  },

  'fig.fraction-ops': {
    title: 'Adding Fractions: 1/4 + 2/4 = 3/4',
    title_ml: 'ഭിന്നസംഖ്യകളുടെ സങ്കലനം: 1/4 + 2/4 = 3/4',
    caption: 'When denominators are the same, add the numerators directly: $\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$.',
    caption_ml: 'ഛേദങ്ങൾ തുല്യമാകുമ്പോൾ അംശങ്ങൾ നേരിട്ട് കൂട്ടാം: $\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 110', role: 'img' });
      // 4-cell bar
      const ox = 45, oy = 35, cw = 45, ch = 35;
      svg.appendChild(Fig.svg('rect', { x: ox, y: oy, width: cw, height: ch, style: 'fill: var(--accent); stroke: var(--paper);' }));
      svg.appendChild(Fig.svg('text', { x: ox + cw / 2, y: oy + 22, 'text-anchor': 'middle', style: 'fill: #fff; font-weight: 700;', text: '1/4' }));

      svg.appendChild(Fig.svg('rect', { x: ox + cw, y: oy, width: cw * 2, height: ch, style: 'fill: var(--ok); stroke: var(--paper);' }));
      svg.appendChild(Fig.svg('text', { x: ox + cw * 2, y: oy + 22, 'text-anchor': 'middle', style: 'fill: #fff; font-weight: 700;', text: '2/4' }));

      svg.appendChild(Fig.svg('rect', { x: ox + cw * 3, y: oy, width: cw, height: ch, style: 'fill: var(--surface-2); stroke: var(--paper);' }));
      svg.appendChild(Fig.svg('text', { x: ox + cw * 3.5, y: oy + 22, 'text-anchor': 'middle', style: 'fill: var(--ink-3); font-size: 11px;', text: '1/4' }));

      svg.appendChild(Fig.svg('text', {
        x: 165, y: 95, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--ink);', text: '1/4 + 2/4 = 3/4'
      }));
      api.body.appendChild(svg);
    }
  },

  'fig.decimals': {
    title: 'Decimals: Tenths and Hundredths',
    title_ml: 'ദശാംശങ്ങൾ: പത്തിലൊന്നുകളും നൂറിലൊന്നുകളും',
    caption: '1 whole = 10 tenths = 100 hundredths. The fraction $\\frac{1}{10} = 0.1$ and $\\frac{1}{100} = 0.01$.',
    caption_ml: '1 പൂർണ്ണ സംഖ്യ = 10 പത്തിലൊന്നുകൾ = 100 നൂറിലൊന്നുകൾ. $\\frac{1}{10} = 0.1$, $\\frac{1}{100} = 0.01$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 130', role: 'img' });
      const ox = 40, oy = 20, size = 80;

      // 10x10 grid
      svg.appendChild(Fig.svg('rect', { x: ox, y: oy, width: size, height: size, style: 'fill: var(--surface-2); stroke: var(--rule-2);' }));
      // 3 columns shaded (0.3)
      svg.appendChild(Fig.svg('rect', { x: ox, y: oy, width: size * 0.3, height: size, style: 'fill: var(--accent); opacity: 0.8;' }));

      svg.appendChild(Fig.svg('text', {
        x: ox + size / 2, y: oy + size + 20, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--accent);', text: '0.3 = 3/10'
      }));

      // 1 column with 5 cells shaded on right (0.05)
      const ox2 = 180;
      svg.appendChild(Fig.svg('rect', { x: ox2, y: oy, width: size, height: size, style: 'fill: var(--surface-2); stroke: var(--rule-2);' }));
      svg.appendChild(Fig.svg('rect', { x: ox2, y: oy, width: size * 0.1, height: size * 0.5, style: 'fill: var(--ok);' }));

      svg.appendChild(Fig.svg('text', {
        x: ox2 + size / 2, y: oy + size + 20, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--ok);', text: '0.05 = 5/100'
      }));

      api.body.appendChild(svg);
    }
  },

  'fig.decimal-ops': {
    title: 'Decimal Alignment in Addition',
    title_ml: 'ദശാംശ സങ്കലനം: ബിന്ദുക്കൾ നേരെ ക്രമീകരിക്കൽ',
    caption: 'Always align the decimal points vertically before adding or subtracting decimals.',
    caption_ml: 'ദശാംശ സംഖ്യകൾ കൂട്ടുമ്പോഴും കുറയ്ക്കുമ്പോഴും ദശാംശ ബിന്ദുക്കൾ നേരെ താഴെയായി ക്രമീകരിക്കണം.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 110', role: 'img' });
      svg.appendChild(Fig.svg('text', { x: 165, y: 30, 'text-anchor': 'middle', style: 'font-family: monospace; font-size: 18px; fill: var(--ink);', text: '  3.45' }));
      svg.appendChild(Fig.svg('text', { x: 165, y: 55, 'text-anchor': 'middle', style: 'font-family: monospace; font-size: 18px; fill: var(--ink);', text: '+ 1.20' }));
      svg.appendChild(Fig.svg('line', { x1: 115, y1: 65, x2: 215, y2: 65, style: 'stroke: var(--ink); stroke-width: 2px;' }));
      svg.appendChild(Fig.svg('text', { x: 165, y: 90, 'text-anchor': 'middle', style: 'font-family: monospace; font-weight: 700; font-size: 18px; fill: var(--ok);', text: '  4.65' }));
      api.body.appendChild(svg);
    }
  },

  'fig.integers': {
    title: 'Integers & The Number Line',
    title_ml: 'പൂർണ്ണസംഖ്യകൾ സംഖ്യാരേഖയിൽ',
    caption: 'Positive integers extend to the right of $0$; negative integers extend symmetrically to the left.',
    caption_ml: 'പൂജ്യത്തിന് വലത്തോട്ട് പോസിറ്റീവ് സംഖ്യകളും, ഇടത്തോട്ട് നെഗറ്റീവ് സംഖ്യകളും സ്ഥിതി ചെയ്യുന്നു.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 110', role: 'img' });
      svg.appendChild(Fig.svg('line', { x1: 15, y1: 50, x2: 315, y2: 50, style: 'stroke: var(--rule-2); stroke-width: 2px;' }));

      for (let i = -4; i <= 4; i++) {
        const cx = 165 + i * 32;
        const isNeg = i < 0, isZero = i === 0;
        svg.appendChild(Fig.svg('line', { x1: cx, y1: 42, x2: cx, y2: 58, style: 'stroke: var(--ink); stroke-width: 1.5px;' }));
        svg.appendChild(Fig.svg('circle', {
          cx: cx, cy: 50, r: isZero ? 6 : 4,
          style: 'fill: ' + (isZero ? 'var(--accent)' : isNeg ? 'var(--bad)' : 'var(--ok)') + ';'
        }));
        svg.appendChild(Fig.svg('text', {
          x: cx, y: 76, 'text-anchor': 'middle',
          style: 'font-weight: ' + (isZero ? '700' : '500') + '; font-size: 12px; fill: ' + (isZero ? 'var(--accent)' : isNeg ? 'var(--bad)' : 'var(--ok)') + ';',
          text: String(i)
        }));
      }

      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
      svg.appendChild(Fig.svg('text', { x: 60, y: 25, 'text-anchor': 'middle', style: 'font-size: 11px; fill: var(--bad);', text: isMl ? '← നെഗറ്റീവ്' : '← Negative' }));
      svg.appendChild(Fig.svg('text', { x: 270, y: 25, 'text-anchor': 'middle', style: 'font-size: 11px; fill: var(--ok);', text: isMl ? 'പോസിറ്റീവ് →' : 'Positive →' }));

      api.body.appendChild(svg);
    }
  },

  'fig.powers-exponents': {
    title: 'Powers and Exponential Doubling',
    title_ml: 'കൃത്യങ്കങ്ങൾ: 2-ന്റെ കൃതികൾ',
    caption: 'Powers represent repeated multiplication: $2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16$. Each power doubles.',
    caption_ml: 'ആവർത്തിച്ചുള്ള ഗുണനത്തെയാണ് കൃത്യങ്കങ്ങൾ കാണിക്കുന്നത്: $2^1=2, 2^2=4, 2^3=8, 2^4=16$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 120', role: 'img' });
      const powers = [
        { exp: '2¹', val: 2, h: 15 },
        { exp: '2²', val: 4, h: 30 },
        { exp: '2³', val: 8, h: 55 },
        { exp: '2⁴', val: 16, h: 90 }
      ];

      powers.forEach((p, i) => {
        const x = 45 + i * 65;
        const y = 100 - p.h;
        svg.appendChild(Fig.svg('rect', {
          x: x, y: y, width: 38, height: p.h, rx: 4,
          style: 'fill: var(--accent);'
        }));
        svg.appendChild(Fig.svg('text', {
          x: x + 19, y: y - 6, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 12px; fill: var(--accent);', text: String(p.val)
        }));
        svg.appendChild(Fig.svg('text', {
          x: x + 19, y: 115, 'text-anchor': 'middle',
          style: 'font-weight: 600; font-size: 12px; fill: var(--ink);', text: p.exp
        }));
      });

      api.body.appendChild(svg);
    }
  },

  'fig.laws-exponents': {
    title: 'Law of Exponents: aᵐ × aⁿ = aᵐ⁺ⁿ',
    title_ml: 'കൃത്യങ്ക നിയമം: aᵐ × aⁿ = aᵐ⁺ⁿ',
    caption: '$2^3 \\times 2^2 = (2 \\times 2 \\times 2) \\times (2 \\times 2) = 2^5 = 32$. Exponents add under multiplication of equal bases.',
    caption_ml: '$2^3 \\times 2^2 = (2 \\times 2 \\times 2) \\times (2 \\times 2) = 2^5 = 32$. തുല്യ പാദസംഖ്യകൾ ഗുണിക്കുമ്പോൾ കൃതികൾ തമ്മിൽ കൂട്ടുന്നു.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 110', role: 'img' });
      svg.appendChild(Fig.svg('text', {
        x: 165, y: 35, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 16px; fill: var(--ink);', text: 'aᵐ × aⁿ = aᵐ⁺ⁿ'
      }));

      svg.appendChild(Fig.svg('rect', { x: 35, y: 50, width: 115, height: 35, rx: 5, style: 'fill: var(--accent-soft); stroke: var(--accent);' }));
      svg.appendChild(Fig.svg('text', { x: 92, y: 72, 'text-anchor': 'middle', style: 'font-weight: 600; fill: var(--accent);', text: '2³ = 2 × 2 × 2' }));

      svg.appendChild(Fig.svg('text', { x: 165, y: 72, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 18px; fill: var(--ink-2);', text: '×' }));

      svg.appendChild(Fig.svg('rect', { x: 180, y: 50, width: 115, height: 35, rx: 5, style: 'fill: var(--ok-soft); stroke: var(--ok);' }));
      svg.appendChild(Fig.svg('text', { x: 237, y: 72, 'text-anchor': 'middle', style: 'font-weight: 600; fill: var(--ok);', text: '2² = 2 × 2' }));

      svg.appendChild(Fig.svg('text', {
        x: 165, y: 102, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--ink);', text: '⇒ 2³⁺² = 2⁵ = 32'
      }));
      api.body.appendChild(svg);
    }
  },

  'fig.algebraic-terms': {
    title: 'Algebra Tiles: x², x, and 1',
    title_ml: 'ബീജഗണിത രൂപങ്ങൾ: x², x, 1',
    caption: 'Visualizing algebraic quantities geometrically: square tile $x^2$, rectangular tile $x$, unit tile $1$.',
    caption_ml: 'ബീജഗണിത പദങ്ങളെ ചിത്രരൂപത്തിൽ കാണാം: വലിയ സമചതുരം $x^2$, ചതുരം $x$, യൂണിറ്റ് സമചതുരം $1$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 120', role: 'img' });
      // x^2 tile
      svg.appendChild(Fig.svg('rect', { x: 40, y: 25, width: 65, height: 65, rx: 4, style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;' }));
      svg.appendChild(Fig.svg('text', { x: 72, y: 62, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 16px; fill: var(--accent);', text: 'x²' }));

      // x tile
      svg.appendChild(Fig.svg('rect', { x: 145, y: 25, width: 25, height: 65, rx: 4, style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;' }));
      svg.appendChild(Fig.svg('text', { x: 157, y: 62, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 15px; fill: var(--warn);', text: 'x' }));

      // 1 tile
      svg.appendChild(Fig.svg('rect', { x: 220, y: 65, width: 25, height: 25, rx: 3, style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 1.5px;' }));
      svg.appendChild(Fig.svg('text', { x: 232, y: 82, 'text-anchor': 'middle', style: 'font-weight: 700; font-size: 14px; fill: var(--ok);', text: '1' }));

      svg.appendChild(Fig.svg('text', {
        x: 165, y: 110, 'text-anchor': 'middle',
        style: 'font-size: 12px; fill: var(--ink-2);', text: 'x² + x + 1'
      }));
      api.body.appendChild(svg);
    }
  },

  'fig.expanding-brackets': {
    title: 'Expanding (x + a)(x + b)',
    title_ml: 'ബ്രാക്കറ്റുകൾ വികസിപ്പിക്കൽ: (x + a)(x + b)',
    caption: 'Area decomposition: $(x+a)(x+b) = x^2 + bx + ax + ab = x^2 + (a+b)x + ab$.',
    caption_ml: 'വിസ്തീർണ്ണ മാതൃക: $(x+a)(x+b) = x^2 + (a+b)x + ab$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 140', role: 'img' });
      const ox = 100, oy = 20, xs = 70, as = 35, bs = 35;

      svg.appendChild(Fig.svg('rect', { x: ox, y: oy, width: xs, height: xs, style: 'fill: var(--accent-soft); stroke: var(--accent);' }));
      svg.appendChild(Fig.svg('text', { x: ox + xs / 2, y: oy + xs / 2 + 5, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--accent);', text: 'x²' }));

      svg.appendChild(Fig.svg('rect', { x: ox + xs, y: oy, width: bs, height: xs, style: 'fill: var(--warn-soft); stroke: var(--warn);' }));
      svg.appendChild(Fig.svg('text', { x: ox + xs + bs / 2, y: oy + xs / 2 + 5, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--warn);', text: 'bx' }));

      svg.appendChild(Fig.svg('rect', { x: ox, y: oy + xs, width: xs, height: as, style: 'fill: var(--warn-soft); stroke: var(--warn);' }));
      svg.appendChild(Fig.svg('text', { x: ox + xs / 2, y: oy + xs + as / 2 + 5, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--warn);', text: 'ax' }));

      svg.appendChild(Fig.svg('rect', { x: ox + xs, y: oy + xs, width: bs, height: as, style: 'fill: var(--ok-soft); stroke: var(--ok);' }));
      svg.appendChild(Fig.svg('text', { x: ox + xs + bs / 2, y: oy + xs + as / 2 + 5, 'text-anchor': 'middle', style: 'font-weight: 700; fill: var(--ok);', text: 'ab' }));

      api.body.appendChild(svg);
    }
  },

  'fig.pythagoras': {
    title: 'The Pythagoras Theorem: a² + b² = c²',
    title_ml: 'പൈതഗോറസ് സിദ്ധാന്തം: a² + b² = c²',
    caption: 'In any right triangle, the area of the square on the hypotenuse equals the sum of areas on the other two sides: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$.',
    caption_ml: 'ഒരു മട്ടത്രികോണത്തിൽ കർണ്ണത്തിലെ സമചതുരത്തിന്റെ വിസ്തീർണ്ണം മറ്റ് രണ്ട് വശങ്ങളിലെ സമചതുരങ്ങളുടെ വിസ്തീർണ്ണങ്ങളുടെ തുകയ്ക്ക് തുല്യമാണ്: $9 + 16 = 25$.',
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 200', role: 'img' });
      const ox = 110, oy = 110;
      const a = 40, b = 55; // right triangle legs

      // Right triangle
      svg.appendChild(Fig.svg('polygon', {
        points: `${ox},${oy} ${ox + b},${oy} ${ox},${oy - a}`,
        style: 'fill: var(--surface-3); stroke: var(--ink); stroke-width: 2px;'
      }));

      // Square on leg a (left)
      svg.appendChild(Fig.svg('rect', {
        x: ox - a, y: oy - a, width: a, height: a,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox - a / 2, y: oy - a / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--accent);', text: 'a² = 9'
      }));

      // Square on leg b (bottom)
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy, width: b, height: b,
        style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + b / 2, y: oy + b / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--warn);', text: 'b² = 16'
      }));

      // Square on hypotenuse c (tilted)
      // Vector from (ox, oy - a) to (ox + b, oy) is (b, a)
      // Perpendicular vector is (-a, b)
      const p1x = ox, p1y = oy - a;
      const p2x = ox + b, p2y = oy;
      const p3x = p2x + a, p3y = p2y - b;
      const p4x = p1x + a, p4y = p1y - b;

      svg.appendChild(Fig.svg('polygon', {
        points: `${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y} ${p4x},${p4y}`,
        style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: (p1x + p3x) / 2, y: (p1y + p3y) / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--ok);', text: 'c² = 25'
      }));

      // Equation label below
      svg.appendChild(Fig.svg('text', {
        x: 165, y: 190, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--ink);', text: '9 + 16 = 25'
      }));

      api.body.appendChild(svg);
    }
  },

  /* ── Class 8 Chapter 3: Square Identities ──────────────────────────────── */

  'fig.ident-sum-sq': {
    title: 'Square of a Sum: (x + y)² = x² + 2xy + y²',
    title_ml: 'തുകയുടെ വർഗ്ഗം: (x + y)² = x² + 2xy + y²',
    caption: 'A square of side $(x+y)$ is divided into four regions: $x^2 + xy + xy + y^2$. Drag the slider to vary $x$.',
    caption_ml: '$(x+y)$ വശമുള്ള സമചതുരം 4 ഭാഗങ്ങളായി വിഭജിക്കപ്പെടുന്നു: $x^2 + xy + xy + y^2$. സ്ലൈഡർ നീക്കി $x$-ന്റെ അളവ് മാറ്റുക.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 210, xr: [0, 10], yr: [0, 10], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(xVal) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const x = Math.min(6, Math.max(2, xVal));
        const y = 2;
        const scale = 14;
        const xPx = x * scale;
        const yPx = y * scale;
        const total = xPx + yPx;
        const ox = 165 - total / 2;
        const oy = 95 - total / 2;

        // x^2 region
        group.appendChild(Fig.svg('rect', {
          x: ox, y: oy, width: xPx, height: xPx,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
        }));
        group.appendChild(Fig.svg('text', {
          x: ox + xPx / 2, y: oy + xPx / 2 + 5, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 13px; fill: var(--accent);',
          text: `x² = ${x * x}`
        }));

        // top-right xy region
        group.appendChild(Fig.svg('rect', {
          x: ox + xPx, y: oy, width: yPx, height: xPx,
          style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;'
        }));
        group.appendChild(Fig.svg('text', {
          x: ox + xPx + yPx / 2, y: oy + xPx / 2 + 5, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 11px; fill: var(--warn);',
          text: `xy = ${x * y}`
        }));

        // bottom-left xy region
        group.appendChild(Fig.svg('rect', {
          x: ox, y: oy + xPx, width: xPx, height: yPx,
          style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;'
        }));
        group.appendChild(Fig.svg('text', {
          x: ox + xPx / 2, y: oy + xPx + yPx / 2 + 5, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 11px; fill: var(--warn);',
          text: `xy = ${x * y}`
        }));

        // bottom-right y^2 region
        group.appendChild(Fig.svg('rect', {
          x: ox + xPx, y: oy + xPx, width: yPx, height: yPx,
          style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 1.5px;'
        }));
        group.appendChild(Fig.svg('text', {
          x: ox + xPx + yPx / 2, y: oy + xPx + yPx / 2 + 5, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 11px; fill: var(--ok);',
          text: `y² = ${y * y}`
        }));

        // Dimension labels
        group.appendChild(Fig.svg('text', {
          x: ox + xPx / 2, y: oy - 6, 'text-anchor': 'middle',
          style: 'font-weight: 600; font-size: 11px; fill: var(--ink-2);',
          text: `x = ${x}`
        }));
        group.appendChild(Fig.svg('text', {
          x: ox + xPx + yPx / 2, y: oy - 6, 'text-anchor': 'middle',
          style: 'font-weight: 600; font-size: 11px; fill: var(--ink-2);',
          text: `y = ${y}`
        }));
        group.appendChild(Fig.svg('text', {
          x: 165, y: oy + total + 18, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 12px; fill: var(--ink);',
          text: `(${x} + ${y})² = ${x*x} + 2(${x*y}) + ${y*y} = ${(x+y)*(x+y)}`
        }));
      }

      draw(4);
      api.body.appendChild(p.svg);
      api.control({
        min: 2, max: 6, step: 1, value: 4,
        label: 'x',
        format: v => (typeof I18N !== 'undefined' && I18N.lang() === 'ml')
          ? (`x = ${v}, y = 2 · (${v}+2)² = ${(v+2)*(v+2)}`)
          : (`x = ${v}, y = 2 · (${v}+2)² = ${(v+2)*(v+2)}`),
        onInput: draw
      });
    }
  },

  'fig.ident-diff-sq': {
    title: 'Square of a Difference: (x - y)² = x² - 2xy + y²',
    title_ml: 'വ്യത്യാസത്തിന്റെ വർഗ്ഗം: (x - y)² = x² - 2xy + y²',
    caption: 'From large square $x^2$, subtracting two strips $xy$ subtracts the corner $y^2$ twice. Adding back $y^2$ gives $x^2 - 2xy + y^2$.',
    caption_ml: '$x^2$ സമചതുരത്തിൽ നിന്ന് $xy$ വീതമുള്ള രണ്ട് ഭാഗങ്ങൾ കുറയ്ക്കുമ്പോൾ മൂലയിലെ $y^2$ രണ്ട് തവണ കുറഞ്ഞുപോകുന്നതിനാൽ ഒരു $y^2$ തിരിച്ചുകൂട്ടുമ്പോൾ $x^2 - 2xy + y^2$ ലഭിക്കുന്നു.',
    build(api) {
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
      const svg = Fig.svg('svg', { viewBox: '0 0 330 190', role: 'img' });
      const ox = 70, oy = 20;
      const xSize = 130, ySize = 40;
      const diff = xSize - ySize;

      // Outer square x^2 outline
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy, width: xSize, height: xSize,
        style: 'fill: var(--surface-2); stroke: var(--ink-line); stroke-width: 1.5px; stroke-dasharray: 4 4;'
      }));

      // (x-y)^2 inner square (top-left)
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy, width: diff, height: diff,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + diff / 2, y: oy + diff / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 14px; fill: var(--accent);',
        text: '(x - y)²'
      }));

      // Right strip: y * (x-y)
      svg.appendChild(Fig.svg('rect', {
        x: ox + diff, y: oy, width: ySize, height: diff,
        style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + diff + ySize / 2, y: oy + diff / 2 + 4, 'text-anchor': 'middle',
        style: 'font-size: 10px; fill: var(--warn); font-weight: 600;',
        text: '-xy'
      }));

      // Bottom strip: (x-y) * y
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy + diff, width: diff, height: ySize,
        style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + diff / 2, y: oy + diff + ySize / 2 + 4, 'text-anchor': 'middle',
        style: 'font-size: 10px; fill: var(--warn); font-weight: 600;',
        text: '-xy'
      }));

      // Corner y^2: double-subtracted, so added back (+y^2)
      svg.appendChild(Fig.svg('rect', {
        x: ox + diff, y: oy + diff, width: ySize, height: ySize,
        style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 2px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + diff + ySize / 2, y: oy + diff + ySize / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--ok);',
        text: '+y²'
      }));

      // Labels
      svg.appendChild(Fig.svg('text', {
        x: ox + diff / 2, y: oy - 6, 'text-anchor': 'middle',
        style: 'font-size: 11px; fill: var(--ink-2);', text: 'x - y'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + diff + ySize / 2, y: oy - 6, 'text-anchor': 'middle',
        style: 'font-size: 11px; fill: var(--ink-2);', text: 'y'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox - 8, y: oy + diff / 2 + 4, 'text-anchor': 'end',
        style: 'font-size: 11px; fill: var(--ink-2);', text: 'x - y'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox - 8, y: oy + diff + ySize / 2 + 4, 'text-anchor': 'end',
        style: 'font-size: 11px; fill: var(--ink-2);', text: 'y'
      }));

      // Formula at bottom
      svg.appendChild(Fig.svg('text', {
        x: 165, y: 178, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--ink);',
        text: isMl ? '(x - y)² = x² - 2xy + y²' : '(x - y)² = x² - 2xy + y²'
      }));

      api.body.appendChild(svg);
    }
  },

  'fig.ident-four-xy': {
    title: 'Pinwheel Identity: (x + y)² - (x - y)² = 4xy',
    title_ml: 'നാല് ചതുരങ്ങളുടെ ക്രമീകരണം: (x + y)² - (x - y)² = 4xy',
    caption: 'Four identical rectangles of dimensions $x \\times y$ in a pinwheel form an outer square of side $(x+y)$ and central hole of side $(x-y)$.',
    caption_ml: '$x \\times y$ അളവുകളുള്ള 4 ചതുരങ്ങൾ ക്രമീകരിച്ചാൽ പുറത്ത് $(x+y)$ വശമുള്ള സമചതുരവും നടുവിൽ $(x-y)$ വശമുള്ള സമചതുരവും ഉണ്ടാകുന്നു.',
    build(api) {
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
      const svg = Fig.svg('svg', { viewBox: '0 0 330 190', role: 'img' });
      const ox = 90, oy = 15;
      const x = 95, y = 35; // dimensions of each rectangle
      const total = x + y; // 130

      // Outer boundary (x+y)
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy, width: total, height: total,
        style: 'fill: none; stroke: var(--ink-line); stroke-width: 1px;'
      }));

      // Top rectangle: x wide, y tall
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy, width: x, height: y,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + x / 2, y: oy + y / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--accent);', text: 'xy'
      }));

      // Right rectangle: y wide, x tall
      svg.appendChild(Fig.svg('rect', {
        x: ox + x, y: oy, width: y, height: x,
        style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + x + y / 2, y: oy + x / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--warn);', text: 'xy'
      }));

      // Bottom rectangle: x wide, y tall (starting from ox + y)
      svg.appendChild(Fig.svg('rect', {
        x: ox + y, y: oy + x, width: x, height: y,
        style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + y + x / 2, y: oy + x + y / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--ok);', text: 'xy'
      }));

      // Left rectangle: y wide, x tall (starting from oy + y)
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy + y, width: y, height: x,
        style: 'fill: #fbcfe8; stroke: #db2777; stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + y / 2, y: oy + y + x / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: #db2777;', text: 'xy'
      }));

      // Central hole: (x-y) by (x-y)
      const hole = x - y;
      svg.appendChild(Fig.svg('rect', {
        x: ox + y, y: oy + y, width: hole, height: hole,
        style: 'fill: var(--surface-3); stroke: var(--ink); stroke-width: 1.5px; stroke-dasharray: 2 2;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + y + hole / 2, y: oy + y + hole / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 10px; fill: var(--ink);',
        text: '(x - y)²'
      }));

      // Formula
      svg.appendChild(Fig.svg('text', {
        x: 165, y: oy + total + 20, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--ink);',
        text: isMl ? '4xy = (x + y)² - (x - y)²' : '4xy = (x + y)² - (x - y)²'
      }));

      api.body.appendChild(svg);
    }
  },

  'fig.ident-diff-two-sq': {
    title: 'Difference of Squares: x² - y² = (x + y)(x - y)',
    title_ml: 'വർഗ്ഗങ്ങളുടെ വ്യത്യാസം: x² - y² = (x + y)(x - y)',
    caption: 'Cutting corner $y^2$ out of square $x^2$ leaves an L-shape that reassembles into rectangle $(x+y) \\times (x-y)$.',
    caption_ml: '$x^2$ സമചതുരത്തിൽ നിന്ന് $y^2$ മാറ്റിയാൽ കിട്ടുന്ന ഭാഗം മുറിച്ച് ചേർത്തുവെച്ചാൽ നീളം $(x+y)$-ഉം വീതി $(x-y)$-ഉം ആയ ചതുരമായി മാറുന്നു.',
    build(api) {
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
      const svg = Fig.svg('svg', { viewBox: '0 0 330 180', role: 'img' });
      const x = 75, y = 25;
      const diff = x - y; // 50

      // Left figure: L-shape piece
      const lox = 30, loy = 25;
      // Piece A: diff x x
      svg.appendChild(Fig.svg('rect', {
        x: lox, y: loy, width: diff, height: x,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: lox + diff / 2, y: loy + x / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--accent);', text: 'A'
      }));

      // Piece B: y x diff (bottom-right)
      svg.appendChild(Fig.svg('rect', {
        x: lox + diff, y: loy + y, width: y, height: diff,
        style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: lox + diff + y / 2, y: loy + y + diff / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--warn);', text: 'B'
      }));

      // Cutout corner y^2 (dashed outline)
      svg.appendChild(Fig.svg('rect', {
        x: lox + diff, y: loy, width: y, height: y,
        style: 'fill: var(--surface-2); stroke: var(--danger); stroke-width: 1px; stroke-dasharray: 3 3;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: lox + diff + y / 2, y: loy + y / 2 + 4, 'text-anchor': 'middle',
        style: 'font-size: 9px; fill: var(--danger); font-weight: 600;', text: '-y²'
      }));

      // Arrow
      svg.appendChild(Fig.svg('text', {
        x: 142, y: loy + x / 2 + 6, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 18px; fill: var(--ink-2);', text: '➔'
      }));

      // Right figure: Reassembled rectangle: Piece A + Piece B rotated
      const rox = 165, roy = loy + y;
      // Piece A: x x diff
      svg.appendChild(Fig.svg('rect', {
        x: rox, y: roy, width: x, height: diff,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: rox + x / 2, y: roy + diff / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--accent);', text: 'A'
      }));

      // Piece B attached to the right: y x diff
      svg.appendChild(Fig.svg('rect', {
        x: rox + x, y: roy, width: y, height: diff,
        style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: rox + x + y / 2, y: roy + diff / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--warn);', text: 'B'
      }));

      // Dimension labels on right
      svg.appendChild(Fig.svg('text', {
        x: rox + (x + y) / 2, y: roy - 6, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--ink);', text: 'x + y'
      }));
      svg.appendChild(Fig.svg('text', {
        x: rox + x + y + 10, y: roy + diff / 2 + 4, 'text-anchor': 'start',
        style: 'font-weight: 700; font-size: 11px; fill: var(--ink);', text: 'x - y'
      }));

      // Bottom formula
      svg.appendChild(Fig.svg('text', {
        x: 165, y: 168, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 12px; fill: var(--ink);',
        text: 'x² - y² = (x + y)(x - y)'
      }));

      api.body.appendChild(svg);
    }
  },

  'fig.ident-product-binomials': {
    title: 'Product of Binomials & Calendar Grid',
    title_ml: 'പൊതുഗുണന രൂപവും കലണ്ടർ സമസ്യയും',
    caption: 'Rectangle $(x+a)(x+b)$ decomposes into $x^2 + (a+b)x + ab$. In a calendar $2 \\times 2$ grid, cross-product difference is always 7.',
    caption_ml: '$(x+a)(x+b)$ ചതുരം $x^2 + (a+b)x + ab$ ആയി മാറുന്നു. കലണ്ടറിലെ $2 \\times 2$ കട്ടയിലെ കോണോടുകോൺ ഗുണനഫലങ്ങളുടെ വ്യത്യാസം എപ്പോഴും 7 ആണ്.',
    build(api) {
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
      const svg = Fig.svg('svg', { viewBox: '0 0 330 190', role: 'img' });

      // Left: (x+a)(x+b) rectangle
      const ox = 20, oy = 25;
      const x = 65, a = 35, b = 40;

      // x^2
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy, width: x, height: x,
        style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + x / 2, y: oy + x / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--accent);', text: 'x²'
      }));

      // ax
      svg.appendChild(Fig.svg('rect', {
        x: ox + x, y: oy, width: a, height: x,
        style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + x + a / 2, y: oy + x / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--warn);', text: 'ax'
      }));

      // bx
      svg.appendChild(Fig.svg('rect', {
        x: ox, y: oy + x, width: x, height: b,
        style: 'fill: var(--warn-soft); stroke: var(--warn); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + x / 2, y: oy + x + b / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--warn);', text: 'bx'
      }));

      // ab
      svg.appendChild(Fig.svg('rect', {
        x: ox + x, y: oy + x, width: a, height: b,
        style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox + x + a / 2, y: oy + x + b / 2 + 4, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--ok);', text: 'ab'
      }));

      // Labels left
      svg.appendChild(Fig.svg('text', {
        x: ox + (x + a) / 2, y: oy - 6, 'text-anchor': 'middle',
        style: 'font-size: 10px; fill: var(--ink-2);', text: 'x + a'
      }));
      svg.appendChild(Fig.svg('text', {
        x: ox - 6, y: oy + (x + b) / 2 + 4, 'text-anchor': 'end',
        style: 'font-size: 10px; fill: var(--ink-2);', text: 'x + b'
      }));

      // Right: Calendar 2x2 grid
      const cox = 185, coy = 30, cs = 45;
      svg.appendChild(Fig.svg('rect', {
        x: cox, y: coy, width: cs, height: cs,
        style: 'fill: var(--surface-2); stroke: var(--ink-line); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: cox + cs / 2, y: coy + cs / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--ink);', text: 'n'
      }));

      svg.appendChild(Fig.svg('rect', {
        x: cox + cs, y: coy, width: cs, height: cs,
        style: 'fill: var(--accent-soft); stroke: var(--ink-line); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: cox + cs + cs / 2, y: coy + cs / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--accent);', text: 'n+1'
      }));

      svg.appendChild(Fig.svg('rect', {
        x: cox, y: coy + cs, width: cs, height: cs,
        style: 'fill: var(--accent-soft); stroke: var(--ink-line); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: cox + cs / 2, y: coy + cs + cs / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--accent);', text: 'n+7'
      }));

      svg.appendChild(Fig.svg('rect', {
        x: cox + cs, y: coy + cs, width: cs, height: cs,
        style: 'fill: var(--surface-2); stroke: var(--ink-line); stroke-width: 1.5px;'
      }));
      svg.appendChild(Fig.svg('text', {
        x: cox + cs + cs / 2, y: coy + cs + cs / 2 + 5, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 13px; fill: var(--ink);', text: 'n+8'
      }));

      // Cross product result
      svg.appendChild(Fig.svg('text', {
        x: cox + cs, y: coy + 2 * cs + 22, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--accent);',
        text: '(n+1)(n+7) - n(n+8) = 7'
      }));

      // Bottom formula
      svg.appendChild(Fig.svg('text', {
        x: ox + (x + a) / 2, y: oy + x + b + 22, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--ink);',
        text: '(x+a)(x+b) = x²+(a+b)x+ab'
      }));

      api.body.appendChild(svg);
    }
  },

  /* ── Class 8 Chapter 4: Polygons (ബഹുഭുജങ്ങൾ) ─────────────────────────── */

  'fig.polygon-triangulation': {
    title: 'Triangulation & Angle Sum of Polygons',
    title_ml: 'ബഹുഭുജങ്ങളെ ത്രികോണങ്ങളാക്കൽ',
    caption: 'An $n$-sided polygon is divided into $(n - 2)$ triangles from one vertex. Sum of angles $= (n - 2) \\times 180^\\circ$.',
    caption_ml: 'ഒരു മൂലയിൽ നിന്ന് വരകൾ വരച്ച് $n$ വശങ്ങളുള്ള ബഹുഭുജത്തെ $(n - 2)$ ത്രികോണങ്ങളാക്കാം. കോണുകളുടെ തുക $= (n - 2) \\times 180^\\circ$.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 220, xr: [-1.4, 1.4], yr: [-1.4, 1.4], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      const colors = ['#388bfd', '#2ea043', '#d29922', '#db61a2', '#a371f7', '#f85149'];

      function draw(n) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const vertices = [];
        for (let i = 0; i < n; i++) {
          const angle = -Math.PI / 2 + (2 * Math.PI * i) / n;
          vertices.push([Math.cos(angle), Math.sin(angle)]);
        }

        // Draw triangles from vertex 0
        for (let i = 1; i < n - 1; i++) {
          const tPts = [vertices[0], vertices[i], vertices[i + 1]];
          const ptsStr = tPts.map(pt => p.tx(pt[0]) + ',' + p.ty(pt[1])).join(' ');
          group.appendChild(Fig.svg('polygon', {
            points: ptsStr,
            style: 'fill: ' + colors[(i - 1) % colors.length] + '22; stroke: ' + colors[(i - 1) % colors.length] + '; stroke-width: 1.5px;'
          }));

          // Triangle label in centroid
          const cx = (tPts[0][0] + tPts[1][0] + tPts[2][0]) / 3;
          const cy = (tPts[0][1] + tPts[1][1] + tPts[2][1]) / 3;
          group.appendChild(Fig.svg('text', {
            x: p.tx(cx), y: p.ty(cy) + 4, 'text-anchor': 'middle',
            style: 'font-weight: 700; font-size: 11px; fill: ' + colors[(i - 1) % colors.length] + ';',
            text: '180°'
          }));
        }

        // Outer polygon boundary
        const polyStr = vertices.map(pt => p.tx(pt[0]) + ',' + p.ty(pt[1])).join(' ');
        group.appendChild(Fig.svg('polygon', {
          points: polyStr,
          style: 'fill: none; stroke: var(--ink); stroke-width: 2.5px;'
        }));

        // Vertices dots
        vertices.forEach((pt, i) => {
          group.appendChild(Fig.svg('circle', {
            cx: p.tx(pt[0]), cy: p.ty(pt[1]), r: i === 0 ? 5 : 3.5,
            style: i === 0 ? 'fill: var(--accent); stroke: #fff; stroke-width: 1.5px;' : 'fill: var(--ink);'
          }));
        });

        // Summary text
        const sum = (n - 2) * 180;
        group.appendChild(Fig.svg('text', {
          x: p.tx(0), y: p.ty(-1.28), 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 13px; fill: var(--ink);',
          text: (isMl ? (n + ' വശങ്ങൾ · ' + (n - 2) + ' ത്രികോണങ്ങൾ · തുക: ' + sum + '°')
                      : (n + ' sides · ' + (n - 2) + ' triangles · Sum: ' + sum + '°'))
        }));
      }

      draw(5);
      api.body.appendChild(p.svg);
      api.control({
        min: 4, max: 8, step: 1, value: 5,
        label: 'Number of sides (n)',
        format: v => (typeof I18N !== 'undefined' && I18N.lang() === 'ml')
          ? ('വശങ്ങൾ: ' + v + ' · തുക: ' + ((v - 2) * 180) + '°')
          : ('Sides: ' + v + ' · Sum: ' + ((v - 2) * 180) + '°'),
        onInput: draw
      });
    }
  },

  'fig.polygon-outer-angles': {
    title: 'Sum of Outer Angles is 360°',
    title_ml: 'ബാഹ്യകോണുകളുടെ തുക 360°',
    caption: 'Extending each side in order reveals the outer angles. Their sum is always $360^\\circ$.',
    caption_ml: 'വശങ്ങൾ ഒരേ ക്രമത്തിൽ നീട്ടുമ്പോൾ ബാഹ്യകോണുകൾ രൂപപ്പെടുന്നു. ഇവയുടെ ആകെ തുക എല്ലായ്പ്പോഴും $360^\\circ$ ആണ്.',
    build(api) {
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
      const p = Fig.plot({ w: 330, h: 220, xr: [-1.6, 1.6], yr: [-1.6, 1.6], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      const n = 5;
      const vertices = [];
      for (let i = 0; i < n; i++) {
        const angle = -Math.PI / 2 + (2 * Math.PI * i) / n;
        vertices.push([Math.cos(angle), Math.sin(angle)]);
      }

      // Draw extended sides
      for (let i = 0; i < n; i++) {
        const v1 = vertices[i];
        const v2 = vertices[(i + 1) % n];
        const dx = v2[0] - v1[0];
        const dy = v2[1] - v1[1];
        const extX = v2[0] + dx * 0.45;
        const extY = v2[1] + dy * 0.45;

        // Extended line
        group.appendChild(Fig.svg('line', {
          x1: p.tx(v1[0]), y1: p.ty(v1[1]),
          x2: p.tx(extX), y2: p.ty(extY),
          style: 'stroke: var(--accent); stroke-width: 1.5px; stroke-dasharray: 4 2;'
        }));

        // Outer angle label
        const lblX = v2[0] + dx * 0.25 - dy * 0.15;
        const lblY = v2[1] + dy * 0.25 + dx * 0.15;
        group.appendChild(Fig.svg('text', {
          x: p.tx(lblX), y: p.ty(lblY), 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 11px; fill: var(--accent);',
          text: '72°'
        }));
      }

      // Polygon body
      const ptsStr = vertices.map(pt => p.tx(pt[0]) + ',' + p.ty(pt[1])).join(' ');
      group.appendChild(Fig.svg('polygon', {
        points: ptsStr,
        style: 'fill: var(--accent-soft); stroke: var(--ink); stroke-width: 2.5px;'
      }));

      // Center text
      group.appendChild(Fig.svg('text', {
        x: p.tx(0), y: p.ty(0), 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 14px; fill: var(--accent);',
        text: '5 × 72° = 360°'
      }));

      api.body.appendChild(p.svg);
    }
  },

  'fig.regular-polygons': {
    title: 'Regular Polygons & Angles',
    title_ml: 'സമബഹുഭുജങ്ങളും ആന്തരകോണുകളും',
    caption: 'A regular polygon has all sides and all angles equal: each outer angle is $\\frac{360^\\circ}{n}$ and inner angle is $180^\\circ - \\frac{360^\\circ}{n}$.',
    caption_ml: 'സമബഹുഭുജത്തിൽ എല്ലാ വശങ്ങളും കോണുകളും തുല്യമാണ്: ഓരോ ബാഹ്യകോണും $\\frac{360^\\circ}{n}$, ഓരോ ആന്തരകോണും $180^\\circ - \\frac{360^\\circ}{n}$.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 220, xr: [-1.4, 1.4], yr: [-1.4, 1.4], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      const names_en = { 3: 'Triangle', 4: 'Square', 5: 'Pentagon', 6: 'Hexagon', 8: 'Octagon', 10: 'Decagon' };
      const names_ml = { 3: 'സമഭുജ ത്രികോണം', 4: 'സമചതുരം', 5: 'സമപഞ്ചഭുജം', 6: 'സമഷഡ്ഭുജം', 8: 'സമഅഷ്ടഭുജം', 10: 'സമദശഭുജം' };

      function draw(n) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const vertices = [];
        for (let i = 0; i < n; i++) {
          const angle = -Math.PI / 2 + (2 * Math.PI * i) / n;
          vertices.push([Math.cos(angle), Math.sin(angle)]);
        }

        const ptsStr = vertices.map(pt => p.tx(pt[0]) + ',' + p.ty(pt[1])).join(' ');
        group.appendChild(Fig.svg('polygon', {
          points: ptsStr,
          style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 2.5px;'
        }));

        vertices.forEach(pt => {
          group.appendChild(Fig.svg('circle', {
            cx: p.tx(pt[0]), cy: p.ty(pt[1]), r: 3.5,
            style: 'fill: var(--ok);'
          }));
        });

        const outer = (360 / n).toFixed(1).replace('.0', '');
        const inner = (180 - 360 / n).toFixed(1).replace('.0', '');
        const name = (isMl ? names_ml[n] : names_en[n]) || (n + '-gon');

        group.appendChild(Fig.svg('text', {
          x: p.tx(0), y: p.ty(0.1), 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 14px; fill: var(--ink);',
          text: name
        }));
        group.appendChild(Fig.svg('text', {
          x: p.tx(0), y: p.ty(-0.15), 'text-anchor': 'middle',
          style: 'font-weight: 600; font-size: 12px; fill: var(--ok);',
          text: (isMl ? ('ആന്തരകോൺ: ' + inner + '° · ബാഹ്യകോൺ: ' + outer + '°')
                      : ('Inner: ' + inner + '° · Outer: ' + outer + '°'))
        }));
      }

      draw(6);
      api.body.appendChild(p.svg);
      api.control({
        min: 3, max: 10, step: 1, value: 6,
        label: 'Number of sides',
        format: v => (typeof I18N !== 'undefined' && I18N.lang() === 'ml')
          ? ('വശങ്ങൾ: ' + v + ' · ആന്തരകോൺ: ' + ((180 - 360 / v).toFixed(1).replace('.0', '')) + '°')
          : ('Sides: ' + v + ' · Inner: ' + ((180 - 360 / v).toFixed(1).replace('.0', '')) + '°'),
        onInput: draw
      });
    }
  },

  'fig.polygon-diagonals': {
    title: 'Diagonals of a Polygon',
    title_ml: 'ബഹുഭുജങ്ങളിലെ വികർണ്ണങ്ങൾ',
    caption: 'Connecting non-adjacent vertices gives $\\frac{n(n - 3)}{2}$ diagonals.',
    caption_ml: 'അടുത്തല്ലാത്ത മൂലകളെ തമ്മിൽ ബന്ധിപ്പിക്കുമ്പോൾ $\\frac{n(n - 3)}{2}$ വികർണ്ണങ്ങൾ ലഭിക്കുന്നു.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 220, xr: [-1.4, 1.4], yr: [-1.4, 1.4], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(n) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const vertices = [];
        for (let i = 0; i < n; i++) {
          const angle = -Math.PI / 2 + (2 * Math.PI * i) / n;
          vertices.push([Math.cos(angle), Math.sin(angle)]);
        }

        // Draw diagonals
        let diagCount = 0;
        for (let i = 0; i < n; i++) {
          for (let j = i + 2; j < n; j++) {
            if (i === 0 && j === n - 1) continue; // adjacent
            diagCount++;
            group.appendChild(Fig.svg('line', {
              x1: p.tx(vertices[i][0]), y1: p.ty(vertices[i][1]),
              x2: p.tx(vertices[j][0]), y2: p.ty(vertices[j][1]),
              style: 'stroke: var(--warn); stroke-width: 1.5px; opacity: 0.8;'
            }));
          }
        }

        // Polygon perimeter
        const ptsStr = vertices.map(pt => p.tx(pt[0]) + ',' + p.ty(pt[1])).join(' ');
        group.appendChild(Fig.svg('polygon', {
          points: ptsStr,
          style: 'fill: none; stroke: var(--ink); stroke-width: 2.5px;'
        }));

        vertices.forEach(pt => {
          group.appendChild(Fig.svg('circle', {
            cx: p.tx(pt[0]), cy: p.ty(pt[1]), r: 4,
            style: 'fill: var(--ink);'
          }));
        });

        group.appendChild(Fig.svg('text', {
          x: p.tx(0), y: p.ty(-1.28), 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 13px; fill: var(--ink);',
          text: (isMl ? (n + ' വശങ്ങൾ · ആകെ വികർണ്ണങ്ങൾ: ' + diagCount)
                      : (n + ' sides · Total diagonals: ' + diagCount))
        }));
      }

      draw(5);
      api.body.appendChild(p.svg);
      api.control({
        min: 4, max: 8, step: 1, value: 5,
        label: 'Number of sides',
        format: v => (typeof I18N !== 'undefined' && I18N.lang() === 'ml')
          ? ('വശങ്ങൾ: ' + v + ' · വികർണ്ണങ്ങൾ: ' + (v * (v - 3) / 2))
          : ('Sides: ' + v + ' · Diagonals: ' + (v * (v - 3) / 2)),
        onInput: draw
      });
    }
  },

  /* ── Class 8 Chapter 5: Money Maths (പണമിടപാടുകളിലെ കണക്ക്) ──────────── */

  'fig.simple-vs-compound': {
    title: 'Simple Interest vs Compound Interest Growth',
    title_ml: 'ലളിതപലിശയും കൂട്ടുപലിശയും തമ്മിലുള്ള വളർച്ച',
    caption: 'Compare ₹10,000 growing over time at 10% annual rate. In compound interest, interest earns additional interest each year.',
    caption_ml: '₹10,000 രൂപ 10% വാർഷിക നിരക്കിൽ വളരുന്നത് താരതമ്യം ചെയ്യുക. കൂട്ടുപലിശയിൽ ഓരോ വർഷത്തെയും പലിശയ്ക്കും വീണ്ടും പലിശ ലഭിക്കുന്നു.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 220, xr: [0, 5.5], yr: [9000, 17500], pad: 20 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(years) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const P = 10000;
        const r = 0.10;

        // Grid lines
        for (let y = 10000; y <= 17000; y += 2000) {
          group.appendChild(Fig.svg('line', {
            x1: p.tx(0), y1: p.ty(y), x2: p.tx(5.2), y2: p.ty(y),
            style: 'stroke: var(--border); stroke-dasharray: 2 2;'
          }));
          group.appendChild(Fig.svg('text', {
            x: p.tx(0) - 4, y: p.ty(y) + 3, 'text-anchor': 'end',
            style: 'font-size: 9px; fill: var(--muted);',
            text: '₹' + y
          }));
        }

        // Lines for SI and CI
        const siPts = [];
        const ciPts = [];
        for (let t = 0; t <= years; t += 0.2) {
          siPts.push([t, P * (1 + r * t)]);
          ciPts.push([t, P * Math.pow(1 + r, t)]);
        }

        const siStr = siPts.map(pt => p.tx(pt[0]) + ',' + p.ty(pt[1])).join(' ');
        const ciStr = ciPts.map(pt => p.tx(pt[0]) + ',' + p.ty(pt[1])).join(' ');

        // SI path (straight blue line)
        group.appendChild(Fig.svg('polyline', {
          points: siStr,
          style: 'fill: none; stroke: #388bfd; stroke-width: 2.5px;'
        }));

        // CI path (curved green line)
        group.appendChild(Fig.svg('polyline', {
          points: ciStr,
          style: 'fill: none; stroke: #2ea043; stroke-width: 3px;'
        }));

        // Year markers
        for (let t = 1; t <= years; t++) {
          const siVal = P * (1 + r * t);
          const ciVal = P * Math.pow(1 + r, t);

          group.appendChild(Fig.svg('circle', {
            cx: p.tx(t), cy: p.ty(siVal), r: 3.5,
            style: 'fill: #388bfd;'
          }));
          group.appendChild(Fig.svg('circle', {
            cx: p.tx(t), cy: p.ty(ciVal), r: 4,
            style: 'fill: #2ea043;'
          }));
        }

        const finalSI = Math.round(P * (1 + r * years));
        const finalCI = Math.round(P * Math.pow(1 + r, years));
        const diff = finalCI - finalSI;

        // Label box
        group.appendChild(Fig.svg('text', {
          x: p.tx(2.6), y: p.ty(16800), 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 13px; fill: var(--ink);',
          text: (isMl ? (years + ' വർഷം: ലളിതപലിശ ₹' + finalSI + ' · കൂട്ടുപലിശ ₹' + finalCI)
                      : (years + ' years: SI = ₹' + finalSI + ' · CI = ₹' + finalCI))
        }));
        group.appendChild(Fig.svg('text', {
          x: p.tx(2.6), y: p.ty(15800), 'text-anchor': 'middle',
          style: 'font-weight: 600; font-size: 12px; fill: #2ea043;',
          text: (isMl ? ('കൂട്ടുപലിശയിലെ അധിക നേട്ടം: +₹' + diff)
                      : ('Extra CI Advantage: +₹' + diff))
        }));
      }

      draw(3);
      api.body.appendChild(p.svg);
      api.control({
        min: 1, max: 5, step: 1, value: 3,
        label: 'Years (n)',
        format: v => (typeof I18N !== 'undefined' && I18N.lang() === 'ml')
          ? ('വർഷം: ' + v) : ('Years: ' + v),
        onInput: draw
      });
    }
  },

  'fig.compound-growth-curve': {
    title: 'The Compound Growth Scaling Factor: (1 + r/100)ⁿ',
    title_ml: 'കൂട്ടുപലിശയിലെ ഘാതീയ വളർച്ചാനിരക്ക്',
    caption: 'Visualising the scaling multiplier $(1 + r/100)^n$ over successive years.',
    caption_ml: '$(1 + r/100)^n$ എന്ന ഗുണകം വർഷങ്ങൾ കൂടുന്തോറും എങ്ങനെ വർദ്ധിക്കുന്നുവെന്ന് കാണുക.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 220, xr: [0, 6], yr: [0, 20000], pad: 20 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(rate) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const P = 10000;
        const r = rate / 100;

        // Draw year-by-year bars
        const barW = 32;
        for (let n = 0; n <= 4; n++) {
          const val = P * Math.pow(1 + r, n);
          const x = p.tx(n + 0.8) - barW / 2;
          const y = p.ty(val);
          const h = p.ty(0) - y;

          // Principal part
          const yP = p.ty(P);
          const hP = p.ty(0) - yP;
          group.appendChild(Fig.svg('rect', {
            x: x, y: yP, width: barW, height: hP,
            style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1px;'
          }));

          // Interest part
          if (val > P) {
            group.appendChild(Fig.svg('rect', {
              x: x, y: y, width: barW, height: yP - y,
              style: 'fill: #2ea04344; stroke: #2ea043; stroke-width: 1px;'
            }));
          }

          // Value on top of bar
          group.appendChild(Fig.svg('text', {
            x: x + barW / 2, y: y - 5, 'text-anchor': 'middle',
            style: 'font-weight: 700; font-size: 10px; fill: var(--ink);',
            text: '₹' + Math.round(val)
          }));

          // X-axis label
          group.appendChild(Fig.svg('text', {
            x: x + barW / 2, y: p.ty(0) + 14, 'text-anchor': 'middle',
            style: 'font-size: 11px; fill: var(--muted);',
            text: n === 0 ? (isMl ? 'തുടക്കം' : 'Start') : (isMl ? (n + ' വർഷം') : ('Yr ' + n))
          }));
        }

        // Header info
        group.appendChild(Fig.svg('text', {
          x: p.tx(3), y: p.ty(19000), 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 13px; fill: var(--ink);',
          text: (isMl ? ('നിരക്ക്: ' + rate + '% · മുതൽ: ₹10,000')
                      : ('Rate: ' + rate + '% · Principal: ₹10,000'))
        }));
      }

      draw(10);
      api.body.appendChild(p.svg);
      api.control({
        min: 5, max: 20, step: 5, value: 10,
        label: 'Interest rate (%)',
        format: v => v + '%',
        onInput: draw
      });
    }
  },

  'fig.compounding-frequency': {
    title: 'Compounding Frequency Comparison',
    title_ml: 'പലിശ തവണകളുടെ താരതമ്യം',
    caption: '₹10,000 deposited for 1 year at 12% per annum under Annual, Half-Yearly, and Quarterly compounding.',
    caption_ml: '₹10,000 രൂപയ്ക്ക് 12% നിരക്കിൽ 1 വർഷത്തെ വാർഷിക, അർദ്ധവാർഷിക, ത്രൈമാസിക കൂട്ടുപലിശകൾ തമ്മിലുള്ള താരതമ്യം.',
    build(api) {
      const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
      const svg = Fig.svg('svg', { viewBox: '0 0 330 200', role: 'img' });

      const data = [
        { label_en: 'Annual (1 time)', label_ml: 'വാർഷികം (1 തവണ)', amt: 11200, int: 1200, color: '#388bfd' },
        { label_en: 'Half-Yearly (2 times)', label_ml: 'അർദ്ധവാർഷികം (2 തവണ)', amt: 11236, int: 1236, color: '#2ea043' },
        { label_en: 'Quarterly (4 times)', label_ml: 'ത്രൈമാസികം (4 തവണ)', amt: 11255, int: 1255, color: '#a371f7' }
      ];

      data.forEach((item, i) => {
        const y = 30 + i * 52;
        const barMaxW = 160;
        const w = ((item.int - 1100) / 200) * barMaxW;

        svg.appendChild(Fig.svg('text', {
          x: 10, y: y + 14,
          style: 'font-weight: 600; font-size: 11px; fill: var(--ink);',
          text: isMl ? item.label_ml : item.label_en
        }));

        svg.appendChild(Fig.svg('rect', {
          x: 10, y: y + 20, width: Math.max(10, w), height: 16, rx: 4,
          style: 'fill: ' + item.color + '44; stroke: ' + item.color + '; stroke-width: 1.5px;'
        }));

        svg.appendChild(Fig.svg('text', {
          x: 10 + Math.max(10, w) + 8, y: y + 33,
          style: 'font-weight: 700; font-size: 12px; fill: ' + item.color + ';',
          text: '₹' + item.amt + ' (+₹' + item.int + ')'
        }));
      });

      svg.appendChild(Fig.svg('text', {
        x: 165, y: 190, 'text-anchor': 'middle',
        style: 'font-size: 11px; fill: var(--muted);',
        text: isMl ? 'കൂടുതൽ തവണ പലിശ കണക്കാക്കുമ്പോൾ വരുമാനം വർദ്ധിക്കുന്നു.'
                   : 'More frequent compounding yields higher total return.'
      }));

      api.body.appendChild(svg);
    }
  },

  'fig.depreciation-curve': {
    title: 'Value Depreciation Over Time: P(1 - r/100)ⁿ',
    title_ml: 'യന്ത്രങ്ങളുടെയും വാഹനങ്ങളുടെയും മൂല്യത്തകർച്ച',
    caption: 'An asset bought for ₹1,00,000 depreciating at 15% per year loses value each year.',
    caption_ml: '₹1,00,000 രൂപയ്ക്ക് വാങ്ങിയ ഒരു വസ്തുവിന് പ്രതിവർഷം 15% മൂല്യത്തകർച്ചയുണ്ടാകുമ്പോൾ വില കുറയുന്നത് കാണുക.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 220, xr: [0, 5.5], yr: [0, 110000], pad: 20 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(depRate) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const P0 = 100000;
        const r = depRate / 100;

        // Depreciating curve
        const pts = [];
        for (let t = 0; t <= 5; t += 0.2) {
          pts.push([t, P0 * Math.pow(1 - r, t)]);
        }
        const ptsStr = pts.map(pt => p.tx(pt[0]) + ',' + p.ty(pt[1])).join(' ');

        group.appendChild(Fig.svg('polyline', {
          points: ptsStr,
          style: 'fill: none; stroke: #f85149; stroke-width: 2.5px;'
        }));

        // Year dots
        for (let t = 0; t <= 5; t++) {
          const v = Math.round(P0 * Math.pow(1 - r, t));
          group.appendChild(Fig.svg('circle', {
            cx: p.tx(t), cy: p.ty(v), r: 4,
            style: 'fill: #f85149; stroke: #fff; stroke-width: 1px;'
          }));

          group.appendChild(Fig.svg('text', {
            x: p.tx(t), y: p.ty(v) - 8, 'text-anchor': 'middle',
            style: 'font-weight: 700; font-size: 9px; fill: var(--ink);',
            text: '₹' + (v >= 1000 ? Math.round(v / 1000) + 'k' : v)
          }));
        }

        group.appendChild(Fig.svg('text', {
          x: p.tx(2.7), y: p.ty(105000), 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 13px; fill: var(--ink);',
          text: (isMl ? ('മൂല്യത്തകർച്ചാ നിരക്ക്: ' + depRate + '% / വർഷം')
                      : ('Depreciation Rate: ' + depRate + '% / yr'))
        }));
      }

      draw(15);
      api.body.appendChild(p.svg);
      api.control({
        min: 10, max: 25, step: 5, value: 15,
        label: 'Depreciation rate (%)',
        format: v => v + '%',
        onInput: draw
      });
    }
  },

  /* ── Class 8 Chapter 6: Construction of Quadrilaterals ─────────────────── */

  'fig.quad-flexibility': {
    title: 'Flexibility of 4-Bar Frame vs Diagonal Locking',
    title_ml: 'ചതുർഭുജ ചട്ടക്കൂടിന്റെ അയവും വികർണ്ണ ദാർഢ്യവും',
    caption: 'A four-bar frame can freely flex its corner angles without changing side lengths. Adding a 5th element (a diagonal) divides it into two rigid triangles and locks its geometry uniquely.',
    caption_ml: 'നാല് കമ്പികൾ കൊണ്ടുള്ള ചട്ടക്കൂട് വശങ്ങളുടെ നീളം മാറ്റാതെ തന്നെ പല കോണുകളിലേക്ക് ചായുന്നു. എന്നാൽ ഒരു വികർണ്ണം (5-ാം അളവ്) നൽകിയാൽ അത് രണ്ട് ദൃഢ ത്രികോണങ്ങളായി ഉറച്ചുനിൽക്കുന്നു.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 180, xr: [0, 10], yr: [0, 6], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(deg) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const rad = (deg * Math.PI) / 180;

        // Base AB fixed at bottom
        const ax = 2.0, ay = 1.0;
        const bx = 6.5, by = 1.0;
        const sideAD = 3.5;

        // Corner D rotates with angle 'deg' at A
        const dx = ax + sideAD * Math.cos(rad);
        const dy = ay + sideAD * Math.sin(rad);

        // For a parallelogram-like linkage: C = B + (D - A)
        const cx = bx + (dx - ax);
        const cy = by + (dy - ay);

        // Ghost reference for 90 deg rectangle
        const rRad = (90 * Math.PI) / 180;
        const rdx = ax + sideAD * Math.cos(rRad);
        const rdy = ay + sideAD * Math.sin(rRad);
        const rcx = bx + (rdx - ax);
        const rcy = by + (rdy - ay);

        group.appendChild(Fig.svg('polygon', {
          points: `${p.tx(ax)},${p.ty(ay)} ${p.tx(bx)},${p.ty(by)} ${p.tx(rcx)},${p.ty(rcy)} ${p.tx(rdx)},${p.ty(rdy)}`,
          style: 'fill: none; stroke: var(--ink-3); stroke-dasharray: 4 4; stroke-width: 1.5px;'
        }));

        // Quadrilateral body
        group.appendChild(Fig.svg('polygon', {
          points: `${p.tx(ax)},${p.ty(ay)} ${p.tx(bx)},${p.ty(by)} ${p.tx(cx)},${p.ty(cy)} ${p.tx(dx)},${p.ty(dy)}`,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2.5px;'
        }));

        // Diagonal AC (locking element)
        group.appendChild(Fig.svg('line', {
          x1: p.tx(ax), y1: p.ty(ay),
          x2: p.tx(cx), y2: p.ty(cy),
          style: 'stroke: var(--bad); stroke-width: 2px; stroke-dasharray: 3 3;'
        }));

        // Diagonal length calculation
        const diagLen = Math.sqrt(Math.pow(cx - ax, 2) + Math.pow(cy - ay, 2)).toFixed(1);

        // Vertex circles and labels
        const pts = [
          { x: ax, y: ay, lbl: 'A', ox: -10, oy: 14 },
          { x: bx, y: by, lbl: 'B', ox: 10, oy: 14 },
          { x: cx, y: cy, lbl: 'C', ox: 12, oy: -6 },
          { x: dx, y: dy, lbl: 'D', ox: -12, oy: -6 }
        ];

        pts.forEach(pt => {
          group.appendChild(Fig.svg('circle', {
            cx: p.tx(pt.x), cy: p.ty(pt.y), r: 4,
            style: 'fill: var(--ink);'
          }));
          group.appendChild(Fig.svg('text', {
            x: p.tx(pt.x) + pt.ox, y: p.ty(pt.y) + pt.oy,
            'text-anchor': 'middle',
            style: 'font-weight: 700; font-size: 11px; fill: var(--ink);',
            text: pt.lbl
          }));
        });

        // Info text
        group.appendChild(Fig.svg('text', {
          x: p.tx(5.0), y: p.ty(5.5), 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 12px; fill: var(--ink);',
          text: (isMl ? `കോൺ ∠A = ${deg}° · വികർണ്ണം AC = ${diagLen}` : `Angle ∠A = ${deg}° · Diagonal AC = ${diagLen}`)
        }));

        group.appendChild(Fig.svg('text', {
          x: p.tx(5.0), y: p.ty(5.0), 'text-anchor': 'middle',
          style: 'font-size: 10px; fill: var(--bad); font-weight: 600;',
          text: isMl ? 'വികർണ്ണം ഉറപ്പിച്ചാൽ ആകൃതി ദൃഢമാകുന്നു (5-ാം അളവ്)' : 'Fixing diagonal AC locks the shape uniquely (5th measure)'
        }));
      }

      draw(70);
      api.body.appendChild(p.svg);
      api.control({
        min: 45, max: 120, step: 5, value: 70,
        label: 'Corner angle ∠A',
        format: v => v + '°',
        onInput: draw
      });
    }
  },

  'fig.quad-four-sides-diag': {
    title: 'Step-by-Step: 4 Sides and 1 Diagonal',
    title_ml: 'ഘട്ടം ഘട്ടമായ നിർമ്മിതി: 4 വശങ്ങളും 1 വികർണ്ണവും',
    caption: 'Constructing quadrilateral $ABCD$: first base triangle $\\triangle ABC$ using diagonal $AC$, then locating $D$ via intersecting arcs from $A$ and $C$.',
    caption_ml: 'ആദ്യം $AC$ വികർണ്ണമുപയോഗിച്ച് $\\triangle ABC$ നിർമ്മിക്കുന്നു, തുടർന്ന് $A, C$ എന്നിവയിൽ നിന്ന് ചാപങ്ങൾ വരച്ച് $D$ കണ്ടെത്തുന്നു.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 200, xr: [0, 11], yr: [0, 8], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(step) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        // Coordinates
        const ax = 2.0, ay = 2.0;
        const bx = 6.5, by = 2.0;
        const cx = 8.0, cy = 5.5;
        const dx = 3.5, dy = 6.5;

        // Step 1: Base AB
        group.appendChild(Fig.svg('line', {
          x1: p.tx(ax), y1: p.ty(ay),
          x2: p.tx(bx), y2: p.ty(by),
          style: 'stroke: var(--accent); stroke-width: 3px;'
        }));
        group.appendChild(Fig.svg('text', {
          x: p.tx(4.25), y: p.ty(ay) + 16, 'text-anchor': 'middle',
          style: 'font-weight: 600; font-size: 11px; fill: var(--accent);',
          text: 'AB = 4.5 cm'
        }));

        if (step >= 2) {
          // Step 2: Base Triangle ABC with diagonal AC
          group.appendChild(Fig.svg('line', {
            x1: p.tx(bx), y1: p.ty(by),
            x2: p.tx(cx), y2: p.ty(cy),
            style: 'stroke: var(--accent); stroke-width: 2.5px;'
          }));
          group.appendChild(Fig.svg('line', {
            x1: p.tx(ax), y1: p.ty(ay),
            x2: p.tx(cx), y2: p.ty(cy),
            style: 'stroke: var(--warn); stroke-width: 2px; stroke-dasharray: 4 3;'
          }));
          group.appendChild(Fig.svg('polygon', {
            points: `${p.tx(ax)},${p.ty(ay)} ${p.tx(bx)},${p.ty(by)} ${p.tx(cx)},${p.ty(cy)}`,
            style: 'fill: var(--accent-soft); fill-opacity: 0.5;'
          }));
          group.appendChild(Fig.svg('text', {
            x: p.tx(7.5), y: p.ty(3.5), 'text-anchor': 'start',
            style: 'font-size: 10px; fill: var(--ink);', text: 'BC = 5.5 cm'
          }));
          group.appendChild(Fig.svg('text', {
            x: p.tx(4.8), y: p.ty(4.2), 'text-anchor': 'end',
            style: 'font-size: 10px; fill: var(--warn); font-weight: 600;', text: 'AC = 7 cm'
          }));
        }

        if (step >= 3) {
          // Step 3: Arcs from A (r=AD) and C (r=CD)
          const radAD = Math.hypot(p.tx(dx) - p.tx(ax), p.ty(dy) - p.ty(ay));
          group.appendChild(Fig.svg('path', {
            d: `M ${p.tx(dx) - 20} ${p.ty(dy) - 15} A ${radAD} ${radAD} 0 0 1 ${p.tx(dx) + 20} ${p.ty(dy) + 15}`,
            style: 'fill: none; stroke: var(--bad); stroke-width: 1.5px;'
          }));
          const radCD = Math.hypot(p.tx(dx) - p.tx(cx), p.ty(dy) - p.ty(cy));
          group.appendChild(Fig.svg('path', {
            d: `M ${p.tx(dx) - 15} ${p.ty(dy) + 20} A ${radCD} ${radCD} 0 0 1 ${p.tx(dx) + 15} ${p.ty(dy) - 20}`,
            style: 'fill: none; stroke: var(--ok); stroke-width: 1.5px;'
          }));
        }

        if (step >= 4) {
          // Step 4: Complete quadrilateral
          group.appendChild(Fig.svg('line', {
            x1: p.tx(ax), y1: p.ty(ay),
            x2: p.tx(dx), y2: p.ty(dy),
            style: 'stroke: var(--accent); stroke-width: 2.5px;'
          }));
          group.appendChild(Fig.svg('line', {
            x1: p.tx(cx), y1: p.ty(cy),
            x2: p.tx(dx), y2: p.ty(dy),
            style: 'stroke: var(--accent); stroke-width: 2.5px;'
          }));
          group.appendChild(Fig.svg('polygon', {
            points: `${p.tx(ax)},${p.ty(ay)} ${p.tx(bx)},${p.ty(by)} ${p.tx(cx)},${p.ty(cy)} ${p.tx(dx)},${p.ty(dy)}`,
            style: 'fill: var(--ok-soft); fill-opacity: 0.3;'
          }));
          group.appendChild(Fig.svg('text', {
            x: p.tx(2.3), y: p.ty(4.6), 'text-anchor': 'end',
            style: 'font-size: 10px; fill: var(--ink);', text: 'AD = 6 cm'
          }));
          group.appendChild(Fig.svg('text', {
            x: p.tx(6.0), y: p.ty(6.5), 'text-anchor': 'start',
            style: 'font-size: 10px; fill: var(--ink);', text: 'CD = 4 cm'
          }));
        }

        // Vertices
        const vList = [
          { x: ax, y: ay, lbl: 'A', ox: -12, oy: 10 },
          { x: bx, y: by, lbl: 'B', ox: 12, oy: 10 }
        ];
        if (step >= 2) vList.push({ x: cx, y: cy, lbl: 'C', ox: 12, oy: -6 });
        if (step >= 3) vList.push({ x: dx, y: dy, lbl: 'D', ox: -12, oy: -6 });

        vList.forEach(v => {
          group.appendChild(Fig.svg('circle', {
            cx: p.tx(v.x), cy: p.ty(v.y), r: 4,
            style: 'fill: var(--ink);'
          }));
          group.appendChild(Fig.svg('text', {
            x: p.tx(v.x) + v.ox, y: p.ty(v.y) + v.oy,
            'text-anchor': 'middle',
            style: 'font-weight: 700; font-size: 12px; fill: var(--ink);',
            text: v.lbl
          }));
        });

        // Step description banner
        const stepMsgs_en = [
          '',
          'Step 1: Draw base AB = 4.5 cm',
          'Step 2: Construct base △ABC with diagonal AC = 7 cm',
          'Step 3: Draw intersecting arcs from A and C to find D',
          'Step 4: Join AD and CD — Quadrilateral ABCD complete!'
        ];
        const stepMsgs_ml = [
          '',
          'ഘട്ടം 1: പാദം AB = 4.5 cm വരയ്ക്കുക',
          'ഘട്ടം 2: വികർണ്ണം AC = 7 cm ഉപയോഗിച്ച് △ABC പൂർത്തിയാക്കുക',
          'ഘട്ടം 3: A, C എന്നിവയിൽ നിന്ന് ചാപങ്ങൾ വരച്ച് D കണ്ടെത്തുക',
          'ഘട്ടം 4: AD, CD യോജിപ്പിച്ച് ABCD പൂർത്തിയാക്കുക!'
        ];

        group.appendChild(Fig.svg('text', {
          x: p.tx(5.5), y: p.ty(7.6), 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 12px; fill: var(--accent);',
          text: isMl ? stepMsgs_ml[step] : stepMsgs_en[step]
        }));
      }

      draw(4);
      api.body.appendChild(p.svg);
      api.control({
        min: 1, max: 4, step: 1, value: 4,
        label: 'Construction step',
        format: v => (typeof I18N !== 'undefined' && I18N.lang() === 'ml') ? `ഘട്ടം ${v} / 4` : `Step ${v} of 4`,
        onInput: draw
      });
    }
  },

  'fig.quad-sides-angles': {
    title: 'Sides and Angles Construction',
    title_ml: 'വശങ്ങളും കോണുകളും നൽകിയുള്ള നിർമ്മിതി',
    caption: 'Given base $BC$, angle rays $\\angle B$ and $\\angle C$, arc cuts determine vertices $A$ and $D$. The segment $AD$ closes the quadrilateral.',
    caption_ml: 'പാദം $BC$, കോണുകൾ $\\angle B, \\angle C$ എന്നിവയിലൂടെ കിരണങ്ങൾ വരച്ച് $A, D$ എന്നീ മൂലകൾ കണ്ടെത്തി യോജിപ്പിക്കുന്നു.',
    build(api) {
      const p = Fig.plot({ w: 330, h: 180, xr: [0, 11], yr: [0, 7], pad: 15 });

      // Coordinates
      const bx = 3.0, by = 1.8;
      const cx = 8.5, cy = 1.8;
      // B angle = 60 deg, length BA = 4 cm
      const ax = bx + 4.0 * Math.cos((60 * Math.PI) / 180);
      const ay = by + 4.0 * Math.sin((60 * Math.PI) / 180);
      // C angle = 90 deg, length CD = 4.5 cm
      const dx = cx;
      const dy = cy + 4.0;

      // Base BC
      p.add(Fig.svg('line', {
        x1: p.tx(bx), y1: p.ty(by), x2: p.tx(cx), y2: p.ty(cy),
        style: 'stroke: var(--accent); stroke-width: 3px;'
      }));
      p.add(Fig.svg('text', {
        x: p.tx(5.75), y: p.ty(by) + 16, 'text-anchor': 'middle',
        style: 'font-weight: 700; font-size: 11px; fill: var(--accent);',
        text: 'BC = 5 cm'
      }));

      // Angle B ray (extended)
      p.add(Fig.svg('line', {
        x1: p.tx(bx), y1: p.ty(by),
        x2: p.tx(bx + 4.8 * Math.cos((60 * Math.PI) / 180)),
        y2: p.ty(by + 4.8 * Math.sin((60 * Math.PI) / 180)),
        style: 'stroke: var(--ink-3); stroke-dasharray: 4 3; stroke-width: 1.5px;'
      }));

      // Side BA
      p.add(Fig.svg('line', {
        x1: p.tx(bx), y1: p.ty(by), x2: p.tx(ax), y2: p.ty(ay),
        style: 'stroke: var(--accent); stroke-width: 2.5px;'
      }));
      p.add(Fig.svg('text', {
        x: p.tx((bx + ax) / 2) - 18, y: p.ty((by + ay) / 2),
        style: 'font-size: 10px; fill: var(--ink); font-weight: 600;',
        text: 'AB = 4 cm'
      }));

      // Angle arc at B
      p.add(Fig.svg('path', {
        d: `M ${p.tx(bx) + 22} ${p.ty(by)} A 22 22 0 0 0 ${p.tx(bx) + 11} ${p.ty(by) - 19}`,
        style: 'fill: none; stroke: var(--ok); stroke-width: 2px;'
      }));
      p.add(Fig.svg('text', {
        x: p.tx(bx) + 26, y: p.ty(by) - 10,
        style: 'font-size: 10px; fill: var(--ok); font-weight: 700;', text: '60°'
      }));

      // Angle C ray (extended perpendicular)
      p.add(Fig.svg('line', {
        x1: p.tx(cx), y1: p.ty(cy), x2: p.tx(dx), y2: p.ty(dy + 0.8),
        style: 'stroke: var(--ink-3); stroke-dasharray: 4 3; stroke-width: 1.5px;'
      }));

      // Side CD
      p.add(Fig.svg('line', {
        x1: p.tx(cx), y1: p.ty(cy), x2: p.tx(dx), y2: p.ty(dy),
        style: 'stroke: var(--accent); stroke-width: 2.5px;'
      }));
      p.add(Fig.svg('text', {
        x: p.tx(cx) + 10, y: p.ty((cy + dy) / 2),
        style: 'font-size: 10px; fill: var(--ink); font-weight: 600;',
        text: 'CD = 4.5 cm'
      }));

      // Right angle square at C
      p.add(Fig.svg('polyline', {
        points: `${p.tx(cx) - 12},${p.ty(cy)} ${p.tx(cx) - 12},${p.ty(cy) - 12} ${p.tx(cx)},${p.ty(cy) - 12}`,
        style: 'fill: none; stroke: var(--warn); stroke-width: 1.5px;'
      }));

      // Top closing segment AD
      p.add(Fig.svg('line', {
        x1: p.tx(ax), y1: p.ty(ay), x2: p.tx(dx), y2: p.ty(dy),
        style: 'stroke: var(--ok); stroke-width: 2.5px;'
      }));

      // Shaded polygon
      p.add(Fig.svg('polygon', {
        points: `${p.tx(ax)},${p.ty(ay)} ${p.tx(bx)},${p.ty(by)} ${p.tx(cx)},${p.ty(cy)} ${p.tx(dx)},${p.ty(dy)}`,
        style: 'fill: var(--accent-soft); fill-opacity: 0.35;'
      }));

      // Vertex dots and labels
      const vertices = [
        { x: bx, y: by, lbl: 'B', ox: -12, oy: 12 },
        { x: cx, y: cy, lbl: 'C', ox: 12, oy: 12 },
        { x: dx, y: dy, lbl: 'D', ox: 12, oy: -6 },
        { x: ax, y: ay, lbl: 'A', ox: -12, oy: -6 }
      ];
      vertices.forEach(v => {
        p.add(Fig.svg('circle', {
          cx: p.tx(v.x), cy: p.ty(v.y), r: 4,
          style: 'fill: var(--ink);'
        }));
        p.add(Fig.svg('text', {
          x: p.tx(v.x) + v.ox, y: p.ty(v.y) + v.oy,
          'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 12px; fill: var(--ink);',
          text: v.lbl
        }));
      });

      api.body.appendChild(p.svg);
    }
  },

  'fig.rhombus-diagonals': {
    title: 'Rhombus: Perpendicular Bisecting Diagonals',
    title_ml: 'റോംബസ്: ലംബമായി സമഭാഗം ചെയ്യുന്ന വികർണ്ണങ്ങൾ',
    caption: 'Diagonals $AC$ and $BD$ meet at $90^\\circ$ at midpoint $O$. From $O$, cut $d_2/2 = 4\\text{ cm}$ above and below to form all four equal sides ($5\\text{ cm}$).',
    caption_ml: 'വികർണ്ണങ്ങളായ $AC, BD$ എന്നിവ മധ്യബിന്ദു $O$-യിൽ $90^\\circ$-ൽ കൂട്ടിമുട്ടുന്നു. $O$-യിൽ നിന്ന് മുകളിലേക്കും താഴേക്കും $4\\text{ cm}$ വീതം അടയാളപ്പെടുത്തിയാൽ നാല് വശങ്ങളും ($5\\text{ cm}$) തുല്യമായ റോംബസ് ലഭിക്കുന്നു.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 210, xr: [-5, 5], yr: [-5, 5], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(halfD2) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        // Diagonal AC fixed horizontally (length 6 cm -> half = 3)
        const halfD1 = 3.0;
        const ax = -halfD1, ay = 0;
        const cx = halfD1, cy = 0;
        // Diagonal BD vertical (length 2 * halfD2)
        const bx = 0, by = halfD2;
        const dx = 0, dy = -halfD2;

        // Rhombus fill
        group.appendChild(Fig.svg('polygon', {
          points: `${p.tx(ax)},${p.ty(ay)} ${p.tx(bx)},${p.ty(by)} ${p.tx(cx)},${p.ty(cy)} ${p.tx(dx)},${p.ty(dy)}`,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2.5px;'
        }));

        // Diagonal AC (horizontal)
        group.appendChild(Fig.svg('line', {
          x1: p.tx(ax), y1: p.ty(ay), x2: p.tx(cx), y2: p.ty(cy),
          style: 'stroke: var(--ink); stroke-width: 2px;'
        }));

        // Diagonal BD (vertical perpendicular bisector)
        group.appendChild(Fig.svg('line', {
          x1: p.tx(bx), y1: p.ty(by + 0.5), x2: p.tx(dx), y2: p.ty(dy - 0.5),
          style: 'stroke: var(--ok); stroke-width: 2px; stroke-dasharray: 4 3;'
        }));

        // Right angle marker at O (0,0)
        group.appendChild(Fig.svg('polyline', {
          points: `${p.tx(0.4)},${p.ty(0)} ${p.tx(0.4)},${p.ty(0.4)} ${p.tx(0)},${p.ty(0.4)}`,
          style: 'fill: none; stroke: var(--warn); stroke-width: 1.5px;'
        }));

        // Side length via Pythagoras
        const sideLen = Math.hypot(halfD1, halfD2).toFixed(2);

        // Labels for diagonals
        group.appendChild(Fig.svg('text', {
          x: p.tx(-1.5), y: p.ty(0) - 6, 'text-anchor': 'middle',
          style: 'font-size: 10px; fill: var(--ink); font-weight: 600;', text: '3 cm'
        }));
        group.appendChild(Fig.svg('text', {
          x: p.tx(1.5), y: p.ty(0) - 6, 'text-anchor': 'middle',
          style: 'font-size: 10px; fill: var(--ink); font-weight: 600;', text: '3 cm'
        }));
        group.appendChild(Fig.svg('text', {
          x: p.tx(0) + 14, y: p.ty(halfD2 / 2),
          style: 'font-size: 10px; fill: var(--ok); font-weight: 600;', text: halfD2 + ' cm'
        }));
        group.appendChild(Fig.svg('text', {
          x: p.tx(0) + 14, y: p.ty(-halfD2 / 2),
          style: 'font-size: 10px; fill: var(--ok); font-weight: 600;', text: halfD2 + ' cm'
        }));

        // Vertices
        const vts = [
          { x: ax, y: ay, lbl: 'A', ox: -12, oy: 4 },
          { x: cx, y: cy, lbl: 'C', ox: 12, oy: 4 },
          { x: bx, y: by, lbl: 'B', ox: 0, oy: -8 },
          { x: dx, y: dy, lbl: 'D', ox: 0, oy: 14 },
          { x: 0, y: 0, lbl: 'O', ox: -10, oy: 12 }
        ];
        vts.forEach(v => {
          group.appendChild(Fig.svg('circle', {
            cx: p.tx(v.x), cy: p.ty(v.y), r: 3.5,
            style: 'fill: var(--ink);'
          }));
          group.appendChild(Fig.svg('text', {
            x: p.tx(v.x) + v.ox, y: p.ty(v.y) + v.oy,
            'text-anchor': 'middle',
            style: 'font-weight: 700; font-size: 11px; fill: var(--ink);',
            text: v.lbl
          }));
        });

        // Top banner: side length formula
        group.appendChild(Fig.svg('text', {
          x: p.tx(0), y: p.ty(4.6), 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 12px; fill: var(--accent);',
          text: (isMl ? `റോംബസ് വശം = √(3² + ${halfD2}²) = ${sideLen} cm`
                      : `Rhombus side = √(3² + ${halfD2}²) = ${sideLen} cm`)
        }));
      }

      draw(4);
      api.body.appendChild(p.svg);
      api.control({
        min: 2, max: 5, step: 0.5, value: 4,
        label: 'Half diagonal BD (OB)',
        format: v => v + ' cm (BD = ' + (2 * v) + ' cm)',
        onInput: draw
      });
    }
  },

  /* ── Class 8 Chapter 7: Ratio (അംശബന്ധം) ───────────────────────────────── */

  'fig.ratio-tape': {
    title: 'Ratio as Tape Diagram',
    title_ml: 'അംശബന്ധം ടേപ്പ് മോഡൽ',
    caption: 'Ratio $3 : 2$ represented as 3 equal blocks and 2 equal blocks. Drag multiplier $x$ to scale.',
    caption_ml: '3 : 2 എന്ന അംശബന്ധം 3 തുല്യ കഷണങ്ങളും 2 തുല്യ കഷണങ്ങളുമായി കാണിച്ചിരിക്കുന്നു. ഗുണകം $x$ മാറ്റുക.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 180', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(xVal) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const boxW = 38;
        const boxH = 34;
        const startX = 65;

        // Label A (3 parts)
        group.appendChild(Fig.svg('text', {
          x: 52, y: 52, 'text-anchor': 'end',
          style: 'font-weight: 700; font-size: 13px; fill: var(--ink);',
          text: 'A (3x):'
        }));
        for (let i = 0; i < 3; i++) {
          group.appendChild(Fig.svg('rect', {
            x: startX + i * boxW, y: 30, width: boxW - 3, height: boxH, rx: 4,
            style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
          }));
          group.appendChild(Fig.svg('text', {
            x: startX + i * boxW + (boxW - 3) / 2, y: 52, 'text-anchor': 'middle',
            style: 'font-weight: 600; font-size: 12px; fill: var(--accent);',
            text: xVal
          }));
        }
        group.appendChild(Fig.svg('text', {
          x: startX + 3 * boxW + 12, y: 52,
          style: 'font-weight: 700; font-size: 13px; fill: var(--accent);',
          text: '= ' + (3 * xVal)
        }));

        // Label B (2 parts)
        group.appendChild(Fig.svg('text', {
          x: 52, y: 104, 'text-anchor': 'end',
          style: 'font-weight: 700; font-size: 13px; fill: var(--ink);',
          text: 'B (2x):'
        }));
        for (let i = 0; i < 2; i++) {
          group.appendChild(Fig.svg('rect', {
            x: startX + i * boxW, y: 82, width: boxW - 3, height: boxH, rx: 4,
            style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 1.5px;'
          }));
          group.appendChild(Fig.svg('text', {
            x: startX + i * boxW + (boxW - 3) / 2, y: 104, 'text-anchor': 'middle',
            style: 'font-weight: 600; font-size: 12px; fill: var(--ok);',
            text: xVal
          }));
        }
        group.appendChild(Fig.svg('text', {
          x: startX + 2 * boxW + 12, y: 104,
          style: 'font-weight: 700; font-size: 13px; fill: var(--ok);',
          text: '= ' + (2 * xVal)
        }));

        // Summary footer
        const total = 5 * xVal;
        group.appendChild(Fig.svg('text', {
          x: 165, y: 154, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 13px; fill: var(--ink);',
          text: isMl ? `ആകെ = 3x + 2x = 5x = ${total}` : `Total Sum = 3x + 2x = 5x = ${total}`
        }));
      }

      draw(4);
      api.body.appendChild(svg);
      api.control({
        min: 2, max: 12, step: 1, value: 4,
        label: 'Common multiplier (x)',
        format: v => 'x = ' + v + ' · A = ' + (3 * v) + ', B = ' + (2 * v),
        onInput: draw
      });
    }
  },

  'fig.ratio-division': {
    title: 'Dividing in a Given Ratio',
    title_ml: 'അംശബന്ധത്തിൽ വിഭജിക്കൽ',
    caption: 'Dividing total quantity into ratio $3 : 2$. Step 1: 1 part = Total ÷ 5. Step 2: Multiply by parts.',
    caption_ml: 'തുകയെ 3 : 2 എന്ന അംശബന്ധത്തിൽ വിഭജിക്കുന്നു. ഘട്ടം 1: 1 ഭാഗം = തുക ÷ 5. ഘട്ടം 2: ഭാഗങ്ങൾ ഗുണിക്കുക.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 180', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(total) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const onePart = (total / 5).toFixed(1).replace(/\.0$/, '');
        const share1 = (3 * (total / 5)).toFixed(1).replace(/\.0$/, '');
        const share2 = (2 * (total / 5)).toFixed(1).replace(/\.0$/, '');

        // Bar container
        const barX = 35, barY = 40, barW = 260, barH = 36;
        const w1 = barW * 0.6;
        const w2 = barW * 0.4;

        // Share 1 block (3/5)
        group.appendChild(Fig.svg('rect', {
          x: barX, y: barY, width: w1, height: barH, rx: 4,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
        }));
        group.appendChild(Fig.svg('text', {
          x: barX + w1 / 2, y: barY + 22, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 13px; fill: var(--accent);',
          text: isMl ? `ഭാഗം 1: ${share1}` : `Part 1: ${share1}`
        }));

        // Share 2 block (2/5)
        group.appendChild(Fig.svg('rect', {
          x: barX + w1, y: barY, width: w2, height: barH, rx: 4,
          style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 2px;'
        }));
        group.appendChild(Fig.svg('text', {
          x: barX + w1 + w2 / 2, y: barY + 22, 'text-anchor': 'middle',
          style: 'font-weight: 700; font-size: 13px; fill: var(--ok);',
          text: isMl ? `ഭാഗം 2: ${share2}` : `Part 2: ${share2}`
        }));

        // Calculation labels
        group.appendChild(Fig.svg('text', {
          x: 165, y: 112, 'text-anchor': 'middle',
          style: 'font-size: 12px; fill: var(--ink); font-weight: 600;',
          text: isMl ? `1 ഭാഗം = ${total} ÷ (3 + 2) = ${onePart}` : `1 Part = ${total} ÷ (3 + 2) = ${onePart}`
        }));
        group.appendChild(Fig.svg('text', {
          x: 165, y: 138, 'text-anchor': 'middle',
          style: 'font-size: 12px; fill: var(--ink); font-weight: 600;',
          text: `${share1} : ${share2} = 3 : 2`
        }));
      }

      draw(50);
      api.body.appendChild(svg);
      api.control({
        min: 20, max: 100, step: 10, value: 50,
        label: 'Total Quantity',
        format: v => 'Total = ' + v,
        onInput: draw
      });
    }
  },

  'fig.ratio-triangle': {
    title: 'Triangles with Same Height',
    title_ml: 'തുല്യ ഉയരമുള്ള ത്രികോണങ്ങൾ',
    caption: 'When a vertex connects to the base, it splits the triangle into two with areas proportional to their bases.',
    caption_ml: 'ഒരു ശീർഷത്തിൽ നിന്നുള്ള വര പാദത്തെ വിഭജിക്കുമ്പോൾ ലഭിക്കുന്ന ത്രികോണങ്ങളുടെ പരപ്പളവ് പാദങ്ങളുടെ അംശബന്ധത്തിലാണ്.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 200, xr: [-1, 11], yr: [-1, 7], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(splitX) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const bx = 0, by = 0;
        const cx = 10, cy = 0;
        const ax = 4, ay = 6;
        const dx = splitX, dy = 0;

        // Triangle ABD
        group.appendChild(Fig.svg('polygon', {
          points: `${p.tx(bx)},${p.ty(by)} ${p.tx(dx)},${p.ty(dy)} ${p.tx(ax)},${p.ty(ay)}`,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
        }));

        // Triangle ADC
        group.appendChild(Fig.svg('polygon', {
          points: `${p.tx(dx)},${p.ty(dy)} ${p.tx(cx)},${p.ty(cy)} ${p.tx(ax)},${p.ty(ay)}`,
          style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 2px;'
        }));

        // Height line from A perpendicular to base (at x = 4)
        group.appendChild(Fig.svg('line', {
          x1: p.tx(ax), y1: p.ty(ay), x2: p.tx(ax), y2: p.ty(0),
          style: 'stroke: var(--warn); stroke-width: 1.5px; stroke-dasharray: 4 3;'
        }));
        group.appendChild(Fig.svg('text', {
          x: p.tx(ax) + 8, y: p.ty(3),
          style: 'font-size: 11px; fill: var(--warn); font-weight: 700;',
          text: 'h = 6'
        }));

        // Base lengths
        const b1 = splitX;
        const b2 = 10 - splitX;
        const a1 = (0.5 * b1 * 6).toFixed(1).replace(/\.0$/, '');
        const a2 = (0.5 * b2 * 6).toFixed(1).replace(/\.0$/, '');

        // Area text inside triangles
        group.appendChild(Fig.svg('text', {
          x: p.tx((bx + dx + ax) / 3), y: p.ty((by + dy + ay) / 3), 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--accent);',
          text: `A₁ = ${a1}`
        }));
        group.appendChild(Fig.svg('text', {
          x: p.tx((dx + cx + ax) / 3), y: p.ty((dy + cy + ay) / 3), 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ok);',
          text: `A₂ = ${a2}`
        }));

        // Ratio caption
        group.appendChild(Fig.svg('text', {
          x: p.tx(5), y: p.ty(-0.7), 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `പാദങ്ങൾ: ${b1} : ${b2} ⇒ പരപ്പളവുകൾ: ${a1} : ${a2}`
                     : `Bases: ${b1} : ${b2} ⇒ Areas: ${a1} : ${a2}`
        }));
      }

      draw(4);
      api.body.appendChild(p.svg);
      api.control({
        min: 2, max: 8, step: 1, value: 4,
        label: 'Base split point D',
        format: v => 'BD = ' + v + ', DC = ' + (10 - v),
        onInput: draw
      });
    }
  },

  /* ── Class 8 Chapter 8: Area of Quadrilaterals (ചതുർഭുജങ്ങളുടെ പരപ്പളവ്) ──── */

  'fig.area-general-quad': {
    title: 'Area of General Quadrilateral',
    title_ml: 'സാധാരണ ചതുർഭുജത്തിന്റെ പരപ്പളവ്',
    caption: 'Diagonal $d$ splits quadrilateral into two triangles with perpendicular offsets $h_1$ and $h_2$.',
    caption_ml: 'വികർണ്ണം $d$ ചതുർഭുജത്തെ $h_1, h_2$ ലംബങ്ങളുള്ള രണ്ട് ത്രികോണങ്ങളായി വിഭജിക്കുന്നു.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 210, xr: [-2, 16], yr: [-6, 6], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(d) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const ax = 0, ay = 0;
        const cx = d, cy = 0;
        const bx = d * 0.35, by = 4;
        const dx = d * 0.7, dy = -3.5;

        // Fill quadrilateral
        group.appendChild(Fig.svg('polygon', {
          points: `${p.tx(ax)},${p.ty(ay)} ${p.tx(bx)},${p.ty(by)} ${p.tx(cx)},${p.ty(cy)} ${p.tx(dx)},${p.ty(dy)}`,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
        }));

        // Diagonal AC (d)
        group.appendChild(Fig.svg('line', {
          x1: p.tx(ax), y1: p.ty(ay), x2: p.tx(cx), y2: p.ty(cy),
          style: 'stroke: var(--ink); stroke-width: 2.5px;'
        }));

        // Offset h1 (from B to AC)
        group.appendChild(Fig.svg('line', {
          x1: p.tx(bx), y1: p.ty(by), x2: p.tx(bx), y2: p.ty(0),
          style: 'stroke: var(--ok); stroke-width: 1.5px; stroke-dasharray: 4 3;'
        }));
        group.appendChild(Fig.svg('text', {
          x: p.tx(bx) + 6, y: p.ty(2),
          style: 'font-size: 10px; font-weight: 700; fill: var(--ok);',
          text: 'h₁ = 4'
        }));

        // Offset h2 (from D to AC)
        group.appendChild(Fig.svg('line', {
          x1: p.tx(dx), y1: p.ty(dy), x2: p.tx(dx), y2: p.ty(0),
          style: 'stroke: var(--warn); stroke-width: 1.5px; stroke-dasharray: 4 3;'
        }));
        group.appendChild(Fig.svg('text', {
          x: p.tx(dx) + 6, y: p.ty(-1.7),
          style: 'font-size: 10px; font-weight: 700; fill: var(--warn);',
          text: 'h₂ = 3.5'
        }));

        // Labels for vertices
        const pts = [
          { x: ax, y: ay, lbl: 'A', ox: -12, oy: 4 },
          { x: cx, y: cy, lbl: 'C', ox: 10, oy: 4 },
          { x: bx, y: by, lbl: 'B', ox: 0, oy: -8 },
          { x: dx, y: dy, lbl: 'D', ox: 0, oy: 14 }
        ];
        pts.forEach(pt => {
          group.appendChild(Fig.svg('circle', {
            cx: p.tx(pt.x), cy: p.ty(pt.y), r: 3, style: 'fill: var(--ink);'
          }));
          group.appendChild(Fig.svg('text', {
            x: p.tx(pt.x) + pt.ox, y: p.ty(pt.y) + pt.oy, 'text-anchor': 'middle',
            style: 'font-size: 11px; font-weight: 700; fill: var(--ink);', text: pt.lbl
          }));
        });

        // Area formula summary
        const area = (0.5 * d * (4 + 3.5)).toFixed(1).replace(/\.0$/, '');
        group.appendChild(Fig.svg('text', {
          x: p.tx(d / 2), y: p.ty(5.2), 'text-anchor': 'middle',
          style: 'font-size: 12px; font-weight: 700; fill: var(--accent);',
          text: isMl ? `പരപ്പളവ് = ½ × ${d} × (4 + 3.5) = ${area}`
                     : `Area = ½ × ${d} × (4 + 3.5) = ${area}`
        }));
      }

      draw(12);
      api.body.appendChild(p.svg);
      api.control({
        min: 8, max: 15, step: 1, value: 12,
        label: 'Diagonal length (d)',
        format: v => 'd = ' + v + ' cm',
        onInput: draw
      });
    }
  },

  'fig.area-rhombus': {
    title: 'Area of a Rhombus',
    title_ml: 'റോംബസിന്റെ പരപ്പളവ്',
    caption: 'Diagonals $d_1$ and $d_2$ are perpendicular bisectors. Area = $(1/2) \\times d_1 \\times d_2$.',
    caption_ml: 'വികർണ്ണങ്ങൾ $d_1, d_2$ ലംബമായി സമഭാഗം ചെയ്യുന്നു. പരപ്പളവ് = $(1/2) \\times d_1 \\times d_2$.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 210, xr: [-6, 6], yr: [-6, 6], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(d2) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const d1 = 8;
        const h1 = d1 / 2;
        const h2 = d2 / 2;

        // Bounding rectangle
        group.appendChild(Fig.svg('rect', {
          x: p.tx(-h1), y: p.ty(h2), width: p.tx(h1) - p.tx(-h1), height: p.ty(-h2) - p.ty(h2),
          style: 'fill: none; stroke: var(--accent-line); stroke-dasharray: 4 3; stroke-width: 1.5px;'
        }));

        // Rhombus body
        group.appendChild(Fig.svg('polygon', {
          points: `${p.tx(-h1)},${p.ty(0)} ${p.tx(0)},${p.ty(h2)} ${p.tx(h1)},${p.ty(0)} ${p.tx(0)},${p.ty(-h2)}`,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2.5px;'
        }));

        // Diagonals
        group.appendChild(Fig.svg('line', {
          x1: p.tx(-h1), y1: p.ty(0), x2: p.tx(h1), y2: p.ty(0),
          style: 'stroke: var(--ink); stroke-width: 2px;'
        }));
        group.appendChild(Fig.svg('line', {
          x1: p.tx(0), y1: p.ty(h2), x2: p.tx(0), y2: p.ty(-h2),
          style: 'stroke: var(--ok); stroke-width: 2px;'
        }));

        // Right angle marker
        group.appendChild(Fig.svg('polyline', {
          points: `${p.tx(0.5)},${p.ty(0)} ${p.tx(0.5)},${p.ty(0.5)} ${p.tx(0)},${p.ty(0.5)}`,
          style: 'fill: none; stroke: var(--warn); stroke-width: 1.5px;'
        }));

        // Area formula display
        const area = (0.5 * d1 * d2).toFixed(1).replace(/\.0$/, '');
        group.appendChild(Fig.svg('text', {
          x: p.tx(0), y: p.ty(5.2), 'text-anchor': 'middle',
          style: 'font-size: 12px; font-weight: 700; fill: var(--accent);',
          text: isMl ? `പരപ്പളവ് = ½ × 8 × ${d2} = ${area}` : `Area = ½ × 8 × ${d2} = ${area}`
        }));
      }

      draw(6);
      api.body.appendChild(p.svg);
      api.control({
        min: 4, max: 10, step: 1, value: 6,
        label: 'Diagonal d₂',
        format: v => 'd₁ = 8, d₂ = ' + v,
        onInput: draw
      });
    }
  },

  'fig.area-parallelogram': {
    title: 'Area of a Parallelogram',
    title_ml: 'സാമാന്തരികത്തിന്റെ പരപ്പളവ്',
    caption: 'Slide the left triangle to the right to see that parallelogram area equals base × height.',
    caption_ml: 'ഇടതുവശത്തെ ത്രികോണം വലത്തേക്ക് മാറ്റിയാൽ സാമാന്തരികത്തിന്റെ പരപ്പളവ് പാദം × ഉയരം ആണെന്ന് വ്യക്തമാകുന്നു.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 200, xr: [-1, 14], yr: [-1, 6], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(shift) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const b = 8, h = 4, slant = 2.5;

        // Middle body (trapezium part of parallelogram)
        group.appendChild(Fig.svg('polygon', {
          points: `${p.tx(slant)},${p.ty(0)} ${p.tx(b)},${p.ty(0)} ${p.tx(b + slant)},${p.ty(h)} ${p.tx(slant)},${p.ty(h)}`,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
        }));

        // Sliding left right-triangle
        const curShift = shift * b;
        group.appendChild(Fig.svg('polygon', {
          points: `${p.tx(0 + curShift)},${p.ty(0)} ${p.tx(slant + curShift)},${p.ty(0)} ${p.tx(slant + curShift)},${p.ty(h)}`,
          style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 2px;'
        }));

        // Height guide
        group.appendChild(Fig.svg('line', {
          x1: p.tx(slant), y1: p.ty(0), x2: p.tx(slant), y2: p.ty(h),
          style: 'stroke: var(--warn); stroke-width: 1.5px; stroke-dasharray: 4 3;'
        }));
        group.appendChild(Fig.svg('text', {
          x: p.tx(slant) - 8, y: p.ty(h / 2), 'text-anchor': 'end',
          style: 'font-size: 11px; font-weight: 700; fill: var(--warn);', text: 'h = 4'
        }));

        // Base label
        group.appendChild(Fig.svg('text', {
          x: p.tx(b / 2), y: p.ty(-0.6), 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);', text: 'b = 8'
        }));

        // Area statement
        group.appendChild(Fig.svg('text', {
          x: p.tx(6), y: p.ty(5.2), 'text-anchor': 'middle',
          style: 'font-size: 12px; font-weight: 700; fill: var(--accent);',
          text: isMl ? 'പരപ്പളവ് = പാദം × ഉയരം = 8 × 4 = 32' : 'Area = Base × Height = 8 × 4 = 32'
        }));
      }

      draw(0);
      api.body.appendChild(p.svg);
      api.control({
        min: 0, max: 1, step: 0.1, value: 0,
        label: 'Dissect & Slide',
        format: v => v === 0 ? 'Original Parallelogram' : (v === 1 ? 'Transformed Rectangle' : 'Sliding triangle...'),
        onInput: draw
      });
    }
  },

  'fig.area-trapezium': {
    title: 'Area of a Trapezium',
    title_ml: 'ലംബകത്തിന്റെ പരപ്പളവ്',
    caption: 'Diagonal divides trapezium into two triangles with bases $a$ and $b$ sharing height $h$: Area = (1/2)*h*(a+b).',
    caption_ml: 'വികർണ്ണം ലംബകത്തെ $a, b$ പാദങ്ങളും പൊതു ഉയരം $h$-ഉം ഉള്ള രണ്ട് ത്രികോണങ്ങളാക്കുന്നു: പരപ്പളവ് = (1/2)*h*(a+b).',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 200, xr: [-1, 12], yr: [-1, 6], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(a) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const b = 10, h = 4;
        const ax = 0, ay = 0;
        const bx = b, by = 0;
        const topStart = (b - a) / 2;
        const dx = topStart, dy = h;
        const cx = topStart + a, cy = h;

        // Triangle 1 (base b, vertex D)
        group.appendChild(Fig.svg('polygon', {
          points: `${p.tx(ax)},${p.ty(ay)} ${p.tx(bx)},${p.ty(by)} ${p.tx(cx)},${p.ty(cy)}`,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
        }));

        // Triangle 2 (base a, vertex A)
        group.appendChild(Fig.svg('polygon', {
          points: `${p.tx(ax)},${p.ty(ay)} ${p.tx(cx)},${p.ty(cy)} ${p.tx(dx)},${p.ty(dy)}`,
          style: 'fill: var(--ok-soft); stroke: var(--ok); stroke-width: 2px;'
        }));

        // Diagonal dividing line
        group.appendChild(Fig.svg('line', {
          x1: p.tx(ax), y1: p.ty(ay), x2: p.tx(cx), y2: p.ty(cy),
          style: 'stroke: var(--ink); stroke-width: 2px; stroke-dasharray: 4 3;'
        }));

        // Height line
        group.appendChild(Fig.svg('line', {
          x1: p.tx(dx), y1: p.ty(dy), x2: p.tx(dx), y2: p.ty(0),
          style: 'stroke: var(--warn); stroke-width: 1.5px; stroke-dasharray: 2 2;'
        }));
        group.appendChild(Fig.svg('text', {
          x: p.tx(dx) - 8, y: p.ty(h / 2), 'text-anchor': 'end',
          style: 'font-size: 11px; font-weight: 700; fill: var(--warn);', text: 'h = 4'
        }));

        // Dimension labels
        group.appendChild(Fig.svg('text', {
          x: p.tx((dx + cx) / 2), y: p.ty(h + 0.4), 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ok);', text: 'a = ' + a
        }));
        group.appendChild(Fig.svg('text', {
          x: p.tx(b / 2), y: p.ty(-0.6), 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--accent);', text: 'b = 10'
        }));

        // Area total
        const area = (0.5 * h * (a + b)).toFixed(1).replace(/\.0$/, '');
        group.appendChild(Fig.svg('text', {
          x: p.tx(5), y: p.ty(5.2), 'text-anchor': 'middle',
          style: 'font-size: 12px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `പരപ്പളവ് = ½ × 4 × (${a} + 10) = ${area}`
                     : `Area = ½ × 4 × (${a} + 10) = ${area}`
        }));
      }

      draw(6);
      api.body.appendChild(p.svg);
      api.control({
        min: 4, max: 9, step: 1, value: 6,
        label: 'Parallel side (a)',
        format: v => 'a = ' + v + ', b = 10',
        onInput: draw
      });
    }
  },

  /* ── Class 8 Chapter 9: Negative Numbers (ഋണസംഖ്യകൾ) ───────────────────── */

  'fig.negative-number-line': {
    title: 'The Number Line & Signed Steps',
    title_ml: 'സംഖ്യാരേഖയും ചുവടുകളും',
    caption: 'Start at $a = 2$. Drag the step slider to add positive or negative quantities and observe direction.',
    caption_ml: '$a = 2$ ൽ നിന്ന് തുടങ്ങുന്നു. സ്ലൈഡർ നീക്കി അധിസംഖ്യകളും ന്യൂനസംഖ്യകളും കൂട്ടുമ്പോഴുള്ള ദിശ നിരീക്ഷിക്കുക.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 180, xr: [-9, 9], yr: [-3, 4], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(step) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const startX = 2;
        const endX = startX + step;

        // Number line axis
        group.appendChild(Fig.svg('line', {
          x1: p.tx(-8.5), y1: p.ty(0), x2: p.tx(8.5), y2: p.ty(0),
          style: 'stroke: var(--ink); stroke-width: 2px;'
        }));

        // Arrows at ends
        group.appendChild(Fig.svg('polyline', {
          points: `${p.tx(-8.2)},${p.ty(0.3)} ${p.tx(-8.5)},${p.ty(0)} ${p.tx(-8.2)},${p.ty(-0.3)}`,
          style: 'fill: none; stroke: var(--ink); stroke-width: 2px;'
        }));
        group.appendChild(Fig.svg('polyline', {
          points: `${p.tx(8.2)},${p.ty(0.3)} ${p.tx(8.5)},${p.ty(0)} ${p.tx(8.2)},${p.ty(-0.3)}`,
          style: 'fill: none; stroke: var(--ink); stroke-width: 2px;'
        }));

        // Ticks and labels
        for (let i = -8; i <= 8; i += 2) {
          const isZero = i === 0;
          group.appendChild(Fig.svg('line', {
            x1: p.tx(i), y1: p.ty(-0.3), x2: p.tx(i), y2: p.ty(0.3),
            style: `stroke: ${isZero ? 'var(--accent)' : 'var(--ink)'}; stroke-width: ${isZero ? 2.5 : 1}px;`
          }));
          group.appendChild(Fig.svg('text', {
            x: p.tx(i), y: p.ty(-0.9), 'text-anchor': 'middle',
            style: `font-size: 10px; font-weight: ${isZero ? 700 : 500}; fill: ${isZero ? 'var(--accent)' : 'var(--ink)'};`,
            text: i
          }));
        }

        // Arc jump from startX to endX
        if (step !== 0) {
          const midX = (startX + endX) / 2;
          const arcH = Math.min(2.8, Math.max(1.2, Math.abs(step) * 0.35));
          const color = step > 0 ? 'var(--ok)' : 'var(--warn)';
          const pathD = `M ${p.tx(startX)} ${p.ty(0.3)} Q ${p.tx(midX)} ${p.ty(arcH)} ${p.tx(endX)} ${p.ty(0.3)}`;
          group.appendChild(Fig.svg('path', {
            d: pathD, style: `fill: none; stroke: ${color}; stroke-width: 2.5px;`
          }));
          group.appendChild(Fig.svg('text', {
            x: p.tx(midX), y: p.ty(arcH + 0.4), 'text-anchor': 'middle',
            style: `font-size: 11px; font-weight: 700; fill: ${color};`,
            text: (step > 0 ? '+' : '') + step
          }));
        }

        // Endpoint marker
        group.appendChild(Fig.svg('circle', {
          cx: p.tx(endX), cy: p.ty(0), r: 4.5,
          style: 'fill: var(--accent);'
        }));

        // Equation display
        group.appendChild(Fig.svg('text', {
          x: p.tx(0), y: p.ty(3.2), 'text-anchor': 'middle',
          style: 'font-size: 12px; font-weight: 700; fill: var(--accent);',
          text: `2 + (${step}) = ${endX}`
        }));
      }

      draw(-5);
      api.body.appendChild(p.svg);
      api.control({
        min: -8, max: 6, step: 1, value: -5,
        label: 'Step quantity',
        format: v => 'Step = ' + (v >= 0 ? '+' + v : v),
        onInput: draw
      });
    }
  },

  'fig.negative-subtraction': {
    title: 'Subtracting a Negative',
    title_ml: 'ന്യൂനസംഖ്യ കുറയ്ക്കൽ',
    caption: 'Subtracting a negative removes a deficit, moving to the right: $a - (-b) = a + b$.',
    caption_ml: 'ഒരു ന്യൂനസംഖ്യ കുറയ്ക്കുന്നത് കടം ഒഴിവാക്കുന്നതിന് തുല്യമാണ്: $a - (-b) = a + b$.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 170, xr: [-2, 12], yr: [-2, 4], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      function draw(b) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const a = 3;
        const res = a + b;

        // Number line
        group.appendChild(Fig.svg('line', {
          x1: p.tx(-1), y1: p.ty(0), x2: p.tx(11), y2: p.ty(0),
          style: 'stroke: var(--ink); stroke-width: 2px;'
        }));
        for (let i = 0; i <= 10; i += 2) {
          group.appendChild(Fig.svg('line', {
            x1: p.tx(i), y1: p.ty(-0.3), x2: p.tx(i), y2: p.ty(0.3),
            style: 'stroke: var(--ink); stroke-width: 1px;'
          }));
          group.appendChild(Fig.svg('text', {
            x: p.tx(i), y: p.ty(-0.9), 'text-anchor': 'middle',
            style: 'font-size: 10px; fill: var(--ink);', text: i
          }));
        }

        // Jump arrow forward (rightward)
        const mid = (a + res) / 2;
        group.appendChild(Fig.svg('path', {
          d: `M ${p.tx(a)} ${p.ty(0.3)} Q ${p.tx(mid)} ${p.ty(2.2)} ${p.tx(res)} ${p.ty(0.3)}`,
          style: 'fill: none; stroke: var(--ok); stroke-width: 2.5px;'
        }));
        group.appendChild(Fig.svg('circle', {
          cx: p.tx(res), cy: p.ty(0), r: 4.5, style: 'fill: var(--ok);'
        }));

        // Formula
        group.appendChild(Fig.svg('text', {
          x: p.tx(5), y: p.ty(3), 'text-anchor': 'middle',
          style: 'font-size: 12px; font-weight: 700; fill: var(--accent);',
          text: `3 - (-${b}) = 3 + ${b} = ${res}`
        }));
      }

      draw(4);
      api.body.appendChild(p.svg);
      api.control({
        min: 1, max: 7, step: 1, value: 4,
        label: 'Subtracted negative (-b)',
        format: v => '-(-' + v + ') = +' + v,
        onInput: draw
      });
    }
  },

  'fig.negative-multiplication': {
    title: 'Sign Rules of Multiplication',
    title_ml: 'ഗുണനത്തിലെ ചിഹ്നനിയമങ്ങൾ',
    caption: 'Products of like signs are positive (+); products of unlike signs are negative (-).',
    caption_ml: 'ഒരേ ചിഹ്നങ്ങളുടെ ഗുണനഫലം അധിസംഖ്യയും (+), വ്യത്യസ്ത ചിഹ്നങ്ങളുടെ ഗുണനഫലം ന്യൂനസംഖ്യയുമാണ് (-).',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 180', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(bVal) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const aVal = -4;
        const prod = aVal * bVal;
        const isPos = prod > 0;

        // Display card box
        svg.appendChild(Fig.svg('rect', {
          x: 20, y: 20, width: 290, height: 140, rx: 8,
          style: `fill: ${isPos ? 'var(--ok-soft)' : 'var(--accent-soft)'}; stroke: ${isPos ? 'var(--ok)' : 'var(--accent)'}; stroke-width: 1.5px;`
        }));

        // Formula line
        group.appendChild(Fig.svg('text', {
          x: 165, y: 65, 'text-anchor': 'middle',
          style: 'font-size: 16px; font-weight: 700; fill: var(--ink);',
          text: `(${aVal}) × (${bVal}) = ${prod > 0 ? '+' : ''}${prod}`
        }));

        // Rule description
        let ruleText = '';
        if (bVal < 0) {
          ruleText = isMl ? '(-) × (-) = (+) ന്യൂനവും ന്യൂനവും ഗുണിച്ചാൽ അധിസംഖ്യ!'
                          : '(-) × (-) = (+) Two negatives make a positive!';
        } else if (bVal > 0) {
          ruleText = isMl ? '(-) × (+) = (-) ന്യൂനവും അധിയും ഗുണിച്ചാൽ ന്യൂനസംഖ്യ!'
                          : '(-) × (+) = (-) Unlike signs make a negative!';
        } else {
          ruleText = isMl ? 'പൂജ്യത്തോട് ഗുണിച്ചാൽ ഫലം പൂജ്യം.' : 'Multiplication by zero gives zero.';
        }

        group.appendChild(Fig.svg('text', {
          x: 165, y: 110, 'text-anchor': 'middle',
          style: `font-size: 12px; font-weight: 700; fill: ${isPos ? 'var(--ok)' : 'var(--accent)'};`,
          text: ruleText
        }));
      }

      draw(-3);
      api.body.appendChild(svg);
      api.control({
        min: -5, max: 5, step: 1, value: -3,
        label: 'Second factor (b)',
        format: v => 'b = ' + v,
        onInput: draw
      });
    }
  },

  /* ── Class 8 Chapter 10: Statistics (സ്ഥിതിവിവരക്കണക്ക്) ─────────────────── */

  'fig.stat-tally': {
    title: 'Tally Marks Counter',
    title_ml: 'എണ്ണൽ അടയാളങ്ങൾ',
    caption: 'Every five occurrences are grouped with a diagonal tally stroke: 4 vertical lines + 1 diagonal = 5.',
    caption_ml: 'ഓരോ അഞ്ച് വിവരങ്ങൾക്കും 4 ലംബ വരകളും 1 കുറുകെ വരയും ചേർത്ത് കെട്ടുകളാക്കുന്നു.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 180', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(n) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const bundles = Math.floor(n / 5);
        const rem = n % 5;
        const startX = 35;
        const boxW = 55;

        for (let b = 0; b < bundles; b++) {
          const bx = startX + b * boxW;
          for (let v = 0; v < 4; v++) {
            group.appendChild(Fig.svg('line', {
              x1: bx + v * 9, y1: 45, x2: bx + v * 9, y2: 95,
              style: 'stroke: var(--accent); stroke-width: 2.5px;'
            }));
          }
          group.appendChild(Fig.svg('line', {
            x1: bx - 4, y1: 90, x2: bx + 32, y2: 50,
            style: 'stroke: var(--warn); stroke-width: 2.5px;'
          }));
        }

        const remX = startX + bundles * boxW;
        for (let r = 0; r < rem; r++) {
          group.appendChild(Fig.svg('line', {
            x1: remX + r * 9, y1: 45, x2: remX + r * 9, y2: 95,
            style: 'stroke: var(--accent); stroke-width: 2.5px;'
          }));
        }

        group.appendChild(Fig.svg('text', {
          x: 165, y: 145, 'text-anchor': 'middle',
          style: 'font-size: 13px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `ആകെ എണ്ണം: ${n} (${bundles} കെട്ടുകൾ + ${rem} ഒറ്റ വരകൾ)`
                     : `Total Count: ${n} (${bundles} bundles of 5 + ${rem} strokes)`
        }));
      }

      draw(18);
      api.body.appendChild(svg);
      api.control({
        min: 1, max: 24, step: 1, value: 18,
        label: 'Observation count',
        format: v => 'Count = ' + v,
        onInput: draw
      });
    }
  },

  'fig.stat-histogram': {
    title: 'Histogram & Modal Class',
    title_ml: 'ആവൃത്തിച്ചതുരവും മോഡൽ വിഭാഗവും',
    caption: 'Adjacent rectangles touching each other without gaps. The tallest rectangle indicates the modal class.',
    caption_ml: 'വിടവില്ലാതെ അടുത്തടുത്ത് നിൽക്കുന്ന ചതുരങ്ങൾ. ഏറ്റവും ഉയർന്ന ചതുരം മോഡൽ വിഭാഗത്തെ കാണിക്കുന്നു.',
    interactive: true,
    build(api) {
      const p = Fig.plot({ w: 330, h: 200, xr: [-5, 55], yr: [-2, 18], pad: 15 });
      const group = Fig.svg('g', {});
      p.add(group);

      const bins = [
        { label: '0-10', x0: 0, x1: 10, f: 4 },
        { label: '10-20', x0: 10, x1: 20, f: 9 },
        { label: '20-30', x0: 20, x1: 30, f: 15 },
        { label: '30-40', x0: 30, x1: 40, f: 10 },
        { label: '40-50', x0: 40, x1: 50, f: 3 }
      ];

      function draw(selIdx) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        // Axes
        group.appendChild(Fig.svg('line', {
          x1: p.tx(0), y1: p.ty(0), x2: p.tx(52), y2: p.ty(0),
          style: 'stroke: var(--ink); stroke-width: 2px;'
        }));
        group.appendChild(Fig.svg('line', {
          x1: p.tx(0), y1: p.ty(0), x2: p.tx(0), y2: p.ty(16),
          style: 'stroke: var(--ink); stroke-width: 2px;'
        }));

        bins.forEach((b, idx) => {
          const isSel = idx === selIdx;
          const isModal = b.f === 15;
          const fill = isSel ? 'var(--warn-soft)' : (isModal ? 'var(--ok-soft)' : 'var(--accent-soft)');
          const stroke = isSel ? 'var(--warn)' : (isModal ? 'var(--ok)' : 'var(--accent)');

          group.appendChild(Fig.svg('rect', {
            x: p.tx(b.x0), y: p.ty(b.f), width: p.tx(b.x1) - p.tx(b.x0), height: p.ty(0) - p.ty(b.f),
            style: `fill: ${fill}; stroke: ${stroke}; stroke-width: ${isSel ? 2.5 : 1.5}px;`
          }));

          group.appendChild(Fig.svg('text', {
            x: p.tx((b.x0 + b.x1) / 2), y: p.ty(b.f) - 5, 'text-anchor': 'middle',
            style: `font-size: 11px; font-weight: 700; fill: ${stroke};`,
            text: b.f
          }));

          group.appendChild(Fig.svg('text', {
            x: p.tx(b.x0), y: p.ty(-1), 'text-anchor': 'middle',
            style: 'font-size: 9px; fill: var(--ink);', text: b.x0
          }));
        });
        group.appendChild(Fig.svg('text', {
          x: p.tx(50), y: p.ty(-1), 'text-anchor': 'middle',
          style: 'font-size: 9px; fill: var(--ink);', text: 50
        }));

        const active = bins[selIdx];
        group.appendChild(Fig.svg('text', {
          x: p.tx(25), y: p.ty(17.2), 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `വിഭാഗം: ${active.label} | ആവൃത്തി: ${active.f} ${active.f === 15 ? '(മോഡൽ വിഭാഗം)' : ''}`
                     : `Class: ${active.label} | Frequency: ${active.f} ${active.f === 15 ? '(Modal Class)' : ''}`
        }));
      }

      draw(2);
      api.body.appendChild(p.svg);
      api.control({
        min: 0, max: 4, step: 1, value: 2,
        label: 'Select Class Interval',
        format: v => bins[v].label + ' (f=' + bins[v].f + ')',
        onInput: draw
      });
    }
  },

  /* ── Class 8 Chapter 11: Equations (സമവാക്യങ്ങൾ) ─────────────────────────── */

  'fig.equation-balance': {
    title: 'Equation as a Balance Scale',
    title_ml: 'സമവാക്യം തുലാസായി കാണൽ',
    caption: 'Solving $2x + 4 = 14$. Reversible balance operations maintain equal weight on both pans.',
    caption_ml: '$2x + 4 = 14$ സമവാക്യ പരിഹാരം. ഇരുവശത്തും തുല്യ മാറ്റം വരുത്തുമ്പോൾ തുലനാവസ്ഥ നിലനിൽക്കുന്നു.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 180', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(step) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        // Balance base & fulcrum
        group.appendChild(Fig.svg('polygon', {
          points: '165,85 150,140 180,140',
          style: 'fill: var(--accent);'
        }));
        group.appendChild(Fig.svg('line', {
          x1: 60, y1: 85, x2: 270, y2: 85,
          style: 'stroke: var(--ink); stroke-width: 3px;'
        }));

        // Left pan
        group.appendChild(Fig.svg('line', { x1: 60, y1: 85, x2: 45, y2: 120, style: 'stroke: var(--ink); stroke-width: 1px;' }));
        group.appendChild(Fig.svg('line', { x1: 60, y1: 85, x2: 95, y2: 120, style: 'stroke: var(--ink); stroke-width: 1px;' }));
        group.appendChild(Fig.svg('rect', { x: 35, y: 120, width: 70, height: 6, rx: 2, style: 'fill: var(--ink);' }));

        // Right pan
        group.appendChild(Fig.svg('line', { x1: 270, y1: 85, x2: 235, y2: 120, style: 'stroke: var(--ink); stroke-width: 1px;' }));
        group.appendChild(Fig.svg('line', { x1: 270, y1: 85, x2: 285, y2: 120, style: 'stroke: var(--ink); stroke-width: 1px;' }));
        group.appendChild(Fig.svg('rect', { x: 225, y: 120, width: 70, height: 6, rx: 2, style: 'fill: var(--ink);' }));

        let leftText = '', rightText = '', stepExpl = '';
        if (step === 0) {
          leftText = '2x + 4';
          rightText = '14';
          stepExpl = isMl ? 'തുടക്കത്തിലെ സമവാക്യം: 2x + 4 = 14' : 'Initial Equation: 2x + 4 = 14';
        } else if (step === 1) {
          leftText = '2x';
          rightText = '10';
          stepExpl = isMl ? 'ഇരുവശത്തുനിന്നും 4 കുറയ്ക്കുന്നു: 2x = 10' : 'Subtract 4 from both sides: 2x = 10';
        } else {
          leftText = 'x';
          rightText = '5';
          stepExpl = isMl ? 'ഇരുവശത്തെയും 2 കൊണ്ട് ഹരിക്കുന്നു: x = 5' : 'Divide both sides by 2: x = 5';
        }

        group.appendChild(Fig.svg('text', {
          x: 70, y: 114, 'text-anchor': 'middle',
          style: 'font-size: 13px; font-weight: 700; fill: var(--accent);', text: leftText
        }));
        group.appendChild(Fig.svg('text', {
          x: 260, y: 114, 'text-anchor': 'middle',
          style: 'font-size: 13px; font-weight: 700; fill: var(--ok);', text: rightText
        }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 35, 'text-anchor': 'middle',
          style: 'font-size: 12px; font-weight: 700; fill: var(--accent);', text: stepExpl
        }));
      }

      draw(0);
      api.body.appendChild(svg);
      api.control({
        min: 0, max: 2, step: 1, value: 0,
        label: 'Solving Step',
        format: v => v === 0 ? 'Step 0: 2x + 4 = 14' : (v === 1 ? 'Step 1: 2x = 10' : 'Step 2: x = 5'),
        onInput: draw
      });
    }
  },

  'fig.equation-transposition': {
    title: 'Transposition Across Equals Sign',
    title_ml: 'പക്ഷാന്തര നിയമം',
    caption: 'Solving $5x + 3 = 2x + 15$ by moving terms across the equals sign and reversing operations.',
    caption_ml: '$5x + 3 = 2x + 15$ സമവാക്യം പദങ്ങൾ അപ്പുറത്തേക്ക് മാറ്റി ചിഹ്നം വിപരീതമാക്കി പരിഹരിക്കുന്നു.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 170', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(step) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const lines = [
          { eq: '5x + 3 = 2x + 15', desc_en: 'Initial Equation with x on both sides', desc_ml: 'ഇരുവശത്തും x ഉള്ള സമവാക്യം' },
          { eq: '5x - 2x + 3 = 15', desc_en: 'Move +2x to left -> becomes -2x', desc_ml: '+2x ഇടത്തേക്ക് മാറ്റുന്നു -> -2x ആകുന്നു' },
          { eq: '3x = 15 - 3', desc_en: 'Move +3 to right -> becomes -3', desc_ml: '+3 വലത്തേക്ക് മാറ്റുന്നു -> -3 ആകുന്നു' },
          { eq: '3x = 12  ==>  x = 4', desc_en: 'Divide by 3 -> solution found!', desc_ml: '3 കൊണ്ട് ഹരിക്കുന്നു -> x = 4 ഉത്തരം!' }
        ];

        svg.appendChild(Fig.svg('rect', {
          x: 25, y: 25, width: 280, height: 120, rx: 8,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
        }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 70, 'text-anchor': 'middle',
          style: 'font-size: 16px; font-weight: 700; fill: var(--ink);',
          text: lines[step].eq
        }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 110, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 600; fill: var(--accent);',
          text: isMl ? lines[step].desc_ml : lines[step].desc_en
        }));
      }

      draw(0);
      api.body.appendChild(svg);
      api.control({
        min: 0, max: 3, step: 1, value: 0,
        label: 'Step',
        format: v => 'Step ' + v,
        onInput: draw
      });
    }
  },

  /* ── Class 8 Chapter 12: Parallel Lines (സമാന്തരവരകൾ) ───────────────────── */

  'fig.parallel-transversal': {
    title: 'Parallel Lines and Transversal Angles',
    title_ml: 'സമാന്തരവരകളും ചേദകരേഖയുണ്ടാക്കുന്ന കോണുകളും',
    caption: 'Alternate interior angles are equal (Z-shape), corresponding angles are equal (F-shape), and co-interior angles sum to 180°.',
    caption_ml: 'സമാന്തരവരകളിൽ ഏകാന്തരകോണുകൾ തുല്യമാണ്, സമാനകോണുകൾ തുല്യമാണ്, ഒരു വശത്തെ ആന്തരകോണുകളുടെ തുക 180° ആണ്.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 180', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(mode) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        // Parallel lines L1 and L2
        group.appendChild(Fig.svg('line', { x1: 20, y1: 55, x2: 310, y2: 55, style: 'stroke: var(--ink); stroke-width: 2px;' }));
        group.appendChild(Fig.svg('line', { x1: 20, y1: 125, x2: 310, y2: 125, style: 'stroke: var(--ink); stroke-width: 2px;' }));
        group.appendChild(Fig.svg('text', { x: 295, y: 48, style: 'font-size: 10px; font-weight: 700; fill: var(--ink);', text: 'L1' }));
        group.appendChild(Fig.svg('text', { x: 295, y: 118, style: 'font-size: 10px; font-weight: 700; fill: var(--ink);', text: 'L2' }));

        // Transversal line crossing at (130, 55) and (190, 125) -> angle theta approx 50 deg
        group.appendChild(Fig.svg('line', { x1: 105, y1: 25, x2: 215, y2: 155, style: 'stroke: var(--ink); stroke-width: 2px;' }));

        const theta = 50;
        const supp = 130;

        if (mode === 0) {
          // Mode 0: Alternate Interior Angles
          group.appendChild(Fig.svg('circle', { cx: 145, cy: 75, r: 12, style: 'fill: var(--accent); fill-opacity: 0.35;' }));
          group.appendChild(Fig.svg('circle', { cx: 175, cy: 105, r: 12, style: 'fill: var(--accent); fill-opacity: 0.35;' }));
          group.appendChild(Fig.svg('text', { x: 165, y: 172, 'text-anchor': 'middle', style: 'font-size: 11px; font-weight: 700; fill: var(--accent);',
            text: isMl ? `ഏകാന്തരകോണുകൾ (Alternate): ${theta}° = ${theta}°` : `Alternate Interior: ${theta}° = ${theta}° (Equal)` }));
        } else if (mode === 1) {
          // Mode 1: Corresponding Angles
          group.appendChild(Fig.svg('circle', { cx: 150, cy: 45, r: 12, style: 'fill: #16a34a; fill-opacity: 0.35;' }));
          group.appendChild(Fig.svg('circle', { cx: 210, cy: 115, r: 12, style: 'fill: #16a34a; fill-opacity: 0.35;' }));
          group.appendChild(Fig.svg('text', { x: 165, y: 172, 'text-anchor': 'middle', style: 'font-size: 11px; font-weight: 700; fill: #16a34a;',
            text: isMl ? `സമാനകോണുകൾ (Corresponding): ${theta}° = ${theta}°` : `Corresponding Angles: ${theta}° = ${theta}° (Equal)` }));
        } else {
          // Mode 2: Co-interior Angles
          group.appendChild(Fig.svg('circle', { cx: 145, cy: 75, r: 12, style: 'fill: #d97706; fill-opacity: 0.35;' }));
          group.appendChild(Fig.svg('circle', { cx: 165, cy: 115, r: 12, style: 'fill: #d97706; fill-opacity: 0.35;' }));
          group.appendChild(Fig.svg('text', { x: 165, y: 172, 'text-anchor': 'middle', style: 'font-size: 11px; font-weight: 700; fill: #d97706;',
            text: isMl ? `ആന്തരകോണുകളുടെ തുക: ${theta}° + ${supp}° = 180°` : `Co-interior Angles: ${theta}° + ${supp}° = 180° (Supplementary)` }));
        }
      }

      draw(0);
      api.body.appendChild(svg);
      api.control({
        min: 0, max: 2, step: 1, value: 0,
        label: 'Angle Pair',
        format: v => v === 0 ? 'Alternate Angles' : (v === 1 ? 'Corresponding' : 'Co-interior (180°)'),
        onInput: draw
      });
    }
  },

  'fig.parallel-intercepts': {
    title: 'Three Parallel Lines Proportionality',
    title_ml: 'മൂന്ന് സമാന്തരവരകളുടെ അനുപാതം',
    caption: 'Three parallel lines cut transversals proportionally: $a / b = c / d$.',
    caption_ml: 'മൂന്ന് സമാന്തരവരകൾ ചേദകരേഖകളെ ഒരേ അംശബന്ധത്തിൽ ഭാഗിക്കുന്നു: $a / b = c / d$.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 180', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(midY) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const y1 = 35;
        const y2 = midY;
        const y3 = 140;

        // 3 horizontal parallel lines
        [y1, y2, y3].forEach((y, i) => {
          group.appendChild(Fig.svg('line', { x1: 20, y1: y, x2: 310, y2: y, style: 'stroke: var(--ink); stroke-width: 1.5px;' }));
          group.appendChild(Fig.svg('text', { x: 295, y: y - 4, style: 'font-size: 9px; fill: var(--muted);', text: 'L' + (i + 1) }));
        });

        // Transversal 1
        const t1_x1 = 90, t1_x3 = 110;
        const t1_x2 = t1_x1 + ((y2 - y1) / (y3 - y1)) * (t1_x3 - t1_x1);
        group.appendChild(Fig.svg('line', { x1: 85, y1: 20, x2: 115, y2: 155, style: 'stroke: var(--accent); stroke-width: 2px;' }));

        // Transversal 2
        const t2_x1 = 200, t2_x3 = 260;
        const t2_x2 = t2_x1 + ((y2 - y1) / (y3 - y1)) * (t2_x3 - t2_x1);
        group.appendChild(Fig.svg('line', { x1: 190, y1: 20, x2: 270, y2: 155, style: 'stroke: #0284c7; stroke-width: 2px;' }));

        // Marks
        [ [t1_x1, y1], [t1_x2, y2], [t1_x3, y3], [t2_x1, y1], [t2_x2, y2], [t2_x3, y3] ].forEach(([x, y]) => {
          group.appendChild(Fig.svg('circle', { cx: x, cy: y, r: 3.5, style: 'fill: var(--ink);' }));
        });

        const d1 = Math.round((y2 - y1) / 10);
        const d2 = Math.round((y3 - y2) / 10);
        const ratio = (d1 / d2).toFixed(2);

        group.appendChild(Fig.svg('text', { x: 60, y: (y1 + y2) / 2 + 4, style: 'font-size: 11px; font-weight: 700; fill: var(--accent);', text: `a = ${d1}` }));
        group.appendChild(Fig.svg('text', { x: 60, y: (y2 + y3) / 2 + 4, style: 'font-size: 11px; font-weight: 700; fill: var(--accent);', text: `b = ${d2}` }));

        const d3 = Math.round(d1 * 1.5);
        const d4 = Math.round(d2 * 1.5);
        group.appendChild(Fig.svg('text', { x: 250, y: (y1 + y2) / 2 + 4, style: 'font-size: 11px; font-weight: 700; fill: #0284c7;', text: `c = ${d3}` }));
        group.appendChild(Fig.svg('text', { x: 275, y: (y2 + y3) / 2 + 4, style: 'font-size: 11px; font-weight: 700; fill: #0284c7;', text: `d = ${d4}` }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 172, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `അനുപാതം: a / b = ${d1}/${d2} = c / d = ${d3}/${d4} (${ratio})` : `Ratio: a / b = ${d1}/${d2} = c / d = ${d3}/${d4} (${ratio})`
        }));
      }

      draw(87);
      api.body.appendChild(svg);
      api.control({
        min: 60, max: 115, step: 5, value: 87,
        label: 'Position of Middle Parallel Line',
        format: v => 'Y = ' + v,
        onInput: draw
      });
    }
  },

  /* ── Class 8 Chapter 13: Prisms (സ്തംഭങ്ങൾ) ───────────────────────────────── */

  'fig.prism-3d': {
    title: '3D Prism Structure & Volume',
    title_ml: 'സ്തംഭത്തിന്റെ രൂപവും വ്യാപ്തവും',
    caption: 'Prism with height $h$ and base area $A_b$: $\\text{Volume} = A_b \\times h$.',
    caption_ml: 'സ്തംഭത്തിന്റെ വ്യാപ്തം = പാദപരപ്പളവ് $\\times$ ഉയരം ($A_b \\times h$).',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 180', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(type) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        if (type === 0) {
          // Triangular prism
          group.appendChild(Fig.svg('polygon', {
            points: '100,140 190,140 190,60 100,60',
            style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
          }));
          group.appendChild(Fig.svg('polygon', {
            points: '190,140 145,115 145,35 190,60',
            style: 'fill: var(--accent-soft); fill-opacity: 0.6; stroke: var(--accent); stroke-width: 1.5px;'
          }));
          group.appendChild(Fig.svg('polygon', {
            points: '100,60 190,60 145,35',
            style: 'fill: var(--surface); stroke: var(--ink); stroke-width: 1.5px;'
          }));
          group.appendChild(Fig.svg('line', { x1: 100, y1: 140, x2: 145, y2: 115, style: 'stroke: var(--muted); stroke-width: 1px; stroke-dasharray: 4,4;' }));
          group.appendChild(Fig.svg('line', { x1: 145, y1: 115, x2: 145, y2: 35, style: 'stroke: var(--muted); stroke-width: 1px; stroke-dasharray: 4,4;' }));

          group.appendChild(Fig.svg('text', { x: 145, y: 53, 'text-anchor': 'middle', style: 'font-size: 10px; font-weight: 700; fill: var(--ink);', text: 'Base Area Ab' }));
          group.appendChild(Fig.svg('text', { x: 75, y: 100, style: 'font-size: 11px; font-weight: 700; fill: var(--accent);', text: 'h = 10' }));
          group.appendChild(Fig.svg('text', {
            x: 165, y: 170, 'text-anchor': 'middle',
            style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
            text: isMl ? 'ത്രികോണസ്തംഭം: വ്യാപ്തം = പാദപരപ്പളവ് × ഉയരം' : 'Triangular Prism: Volume = Base Area × Height'
          }));
        } else {
          // Rectangular prism (Cuboid)
          group.appendChild(Fig.svg('rect', { x: 100, y: 70, width: 90, height: 65, style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;' }));
          group.appendChild(Fig.svg('polygon', { points: '100,70 140,40 230,40 190,70', style: 'fill: var(--surface); stroke: var(--ink); stroke-width: 1.5px;' }));
          group.appendChild(Fig.svg('polygon', { points: '190,70 230,40 230,105 190,135', style: 'fill: var(--accent-soft); fill-opacity: 0.6; stroke: var(--accent); stroke-width: 1.5px;' }));

          group.appendChild(Fig.svg('text', { x: 165, y: 58, 'text-anchor': 'middle', style: 'font-size: 10px; font-weight: 700; fill: var(--ink);', text: 'Top Base' }));
          group.appendChild(Fig.svg('text', { x: 75, y: 105, style: 'font-size: 11px; font-weight: 700; fill: var(--accent);', text: 'h = 8' }));
          group.appendChild(Fig.svg('text', {
            x: 165, y: 170, 'text-anchor': 'middle',
            style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
            text: isMl ? 'ചതുരസ്തംഭം (ചതുരക്കട്ട): വ്യാപ്തം = l × b × h' : 'Rectangular Prism (Cuboid): Volume = l × b × h'
          }));
        }
      }

      draw(0);
      api.body.appendChild(svg);
      api.control({
        min: 0, max: 1, step: 1, value: 0,
        label: 'Prism Base Type',
        format: v => v === 0 ? 'Triangular Prism' : 'Square/Rectangular Prism',
        onInput: draw
      });
    }
  },

  'fig.prism-unfold': {
    title: 'Unfolding Prism Net (Lateral Surface Area)',
    title_ml: 'സ്തംഭത്തിന്റെ നിവർത്തിയ രൂപം (പാർശ്വതല പരപ്പളവ്)',
    caption: 'Unfolding lateral faces forms a rectangle of length = Base Perimeter ($P$) and width = Height ($h$): LSA = $P \\times h$.',
    caption_ml: 'പാർശ്വമുഖങ്ങൾ നിവർത്തുമ്പോൾ പാദച്ചുറ്റളവ് നീളവും ഉയരം വീതിയുമുള്ള വലിയ ചതുരം ലഭിക്കുന്നു: പാർശ്വതല പരപ്പളവ് = $P \\times h$.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 180', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(step) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        if (step === 0) {
          group.appendChild(Fig.svg('polygon', { points: '110,130 190,130 190,60 110,60', style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;' }));
          group.appendChild(Fig.svg('polygon', { points: '190,130 155,110 155,40 190,60', style: 'fill: var(--accent-soft); fill-opacity: 0.6; stroke: var(--accent); stroke-width: 1.5px;' }));
          group.appendChild(Fig.svg('polygon', { points: '110,60 190,60 155,40', style: 'fill: var(--surface); stroke: var(--ink); stroke-width: 1.5px;' }));
          group.appendChild(Fig.svg('text', { x: 165, y: 165, 'text-anchor': 'middle', style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
            text: isMl ? 'ഘട്ടം 1: മടക്കിയ നിലയിലുള്ള ത്രികോണസ്തംഭം' : 'Step 1: Assembled 3D Triangular Prism' }));
        } else {
          const x0 = 45, y0 = 60, h = 60;
          const w1 = 65, w2 = 80, w3 = 70;

          group.appendChild(Fig.svg('rect', { x: x0, y: y0, width: w1, height: h, style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;' }));
          group.appendChild(Fig.svg('text', { x: x0 + w1/2, y: y0 + h/2 + 4, 'text-anchor': 'middle', style: 'font-size: 10px; fill: var(--ink);', text: 'a × h' }));

          group.appendChild(Fig.svg('rect', { x: x0 + w1, y: y0, width: w2, height: h, style: 'fill: var(--accent-soft); fill-opacity: 0.8; stroke: var(--accent); stroke-width: 1.5px;' }));
          group.appendChild(Fig.svg('text', { x: x0 + w1 + w2/2, y: y0 + h/2 + 4, 'text-anchor': 'middle', style: 'font-size: 10px; fill: var(--ink);', text: 'b × h' }));

          group.appendChild(Fig.svg('rect', { x: x0 + w1 + w2, y: y0, width: w3, height: h, style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;' }));
          group.appendChild(Fig.svg('text', { x: x0 + w1 + w2 + w3/2, y: y0 + h/2 + 4, 'text-anchor': 'middle', style: 'font-size: 10px; fill: var(--ink);', text: 'c × h' }));

          group.appendChild(Fig.svg('polygon', { points: `${x0+w1},${y0} ${x0+w1+w2},${y0} ${x0+w1+w2/2},${y0-35}`, style: 'fill: var(--surface); stroke: var(--ink); stroke-width: 1.5px;' }));
          group.appendChild(Fig.svg('polygon', { points: `${x0+w1},${y0+h} ${x0+w1+w2},${y0+h} ${x0+w1+w2/2},${y0+h+35}`, style: 'fill: var(--surface); stroke: var(--ink); stroke-width: 1.5px;' }));

          group.appendChild(Fig.svg('line', { x1: x0, y1: y0 - 10, x2: x0 + w1 + w2 + w3, y2: y0 - 10, style: 'stroke: var(--ink); stroke-width: 1.5px;' }));
          group.appendChild(Fig.svg('text', { x: x0 + (w1+w2+w3)/2, y: y0 - 14, 'text-anchor': 'middle', style: 'font-size: 10px; font-weight: 700; fill: var(--ink);', text: 'Base Perimeter P = a + b + c' }));
          group.appendChild(Fig.svg('text', { x: x0 - 12, y: y0 + h/2 + 4, 'text-anchor': 'middle', style: 'font-size: 10px; font-weight: 700; fill: var(--accent);', text: 'h' }));

          group.appendChild(Fig.svg('text', { x: 165, y: 172, 'text-anchor': 'middle', style: 'font-size: 11px; font-weight: 700; fill: var(--accent);',
            text: isMl ? 'പാർശ്വതല പരപ്പളവ് = (a + b + c) × h = പാദച്ചുറ്റളവ് × ഉയരം' : 'LSA = (a + b + c) × h = Perimeter × Height' }));
        }
      }

      draw(1);
      api.body.appendChild(svg);
      api.control({
        min: 0, max: 1, step: 1, value: 1,
        label: 'View Mode',
        format: v => v === 0 ? 'Folded Prism' : 'Unfolded Net (LSA)',
        onInput: draw
      });
    }
  },

  /* ── Class 9 Chapter 1: Area (പരപ്പളവ്) ───────────────────────────────────── */

  'fig.triangles-same-base': {
    title: 'Triangles on Same Base Between Parallel Lines',
    title_ml: 'ഒരേ പാദത്തിലും സമാന്തരവരകൾക്കിടയിലുമുള്ള ത്രികോണങ്ങൾ',
    caption: 'As vertex $C$ slides horizontally along the top parallel line, base $b$ and altitude $h$ stay constant, keeping Area $= \\frac{1}{2}bh$ invariant.',
    caption_ml: 'ശീർഷം $C$ സമാന്തരവരയിലൂടെ നീങ്ങുമ്പോഴും പാദവും ലംബ ഉയരവും മാറാത്തതിനാൽ പരപ്പളവ് ഒട്ടും മാറാതെ നിൽക്കുന്നു.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 180', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(cx) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const yTop = 45, yBot = 135;
        group.appendChild(Fig.svg('line', { x1: 20, y1: yTop, x2: 310, y2: yTop, style: 'stroke: var(--muted); stroke-width: 1.5px; stroke-dasharray: 4,4;' }));
        group.appendChild(Fig.svg('line', { x1: 20, y1: yBot, x2: 310, y2: yBot, style: 'stroke: var(--ink); stroke-width: 2px;' }));

        const ax = 95, bx = 215;

        group.appendChild(Fig.svg('polygon', {
          points: `${ax},${yBot} ${bx},${yBot} ${cx},${yTop}`,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
        }));

        group.appendChild(Fig.svg('line', { x1: cx, y1: yTop, x2: cx, y2: yBot, style: 'stroke: #dc2626; stroke-width: 1.5px; stroke-dasharray: 3,3;' }));
        group.appendChild(Fig.svg('circle', { cx: cx, cy: yTop, r: 4.5, style: 'fill: var(--accent);' }));

        group.appendChild(Fig.svg('text', { x: ax - 8, y: yBot + 14, style: 'font-size: 11px; font-weight: 700; fill: var(--ink);', text: 'A' }));
        group.appendChild(Fig.svg('text', { x: bx + 4, y: yBot + 14, style: 'font-size: 11px; font-weight: 700; fill: var(--ink);', text: 'B' }));
        group.appendChild(Fig.svg('text', { x: cx, y: yTop - 8, 'text-anchor': 'middle', style: 'font-size: 11px; font-weight: 700; fill: var(--accent);', text: 'C' }));

        group.appendChild(Fig.svg('text', { x: (ax + bx)/2, y: yBot + 14, 'text-anchor': 'middle', style: 'font-size: 10px; font-weight: 700; fill: var(--ink);', text: 'Base b = 8 cm' }));
        group.appendChild(Fig.svg('text', { x: cx + 6, y: (yTop + yBot)/2, style: 'font-size: 10px; font-weight: 700; fill: #dc2626;', text: 'h = 6 cm' }));

        const area = (0.5 * 8 * 6).toFixed(0);
        group.appendChild(Fig.svg('text', {
          x: 165, y: 172, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `സ്ഥിര പരപ്പളവ് = 1/2 × 8 × 6 = ${area} ച.സെ.മീ (മാറ്റമില്ല)` : `Invariant Area = 1/2 × 8 × 6 = ${area} cm² (Unchanged)`
        }));
      }

      draw(155);
      api.body.appendChild(svg);
      api.control({
        min: 60, max: 250, step: 10, value: 155,
        label: 'Slide Top Vertex C',
        format: v => 'X = ' + v,
        onInput: draw
      });
    }
  },

  'fig.triangle-base-ratio': {
    title: 'Triangles Sharing Height (Area Proportional to Base)',
    title_ml: 'തുല്യ ഉയരമുള്ള ത്രികോണങ്ങളിലെ പരപ്പളവ് അനുപാതം',
    caption: 'Dividing base $BC$ at point $D$ in ratio $m : n$ splits triangle area in the exact same ratio: $\\text{Area}_1 / \\text{Area}_2 = BD / DC$.',
    caption_ml: 'പാദത്തെ $D$ എന്ന ബിന്ദു $m : n$ അംശബന്ധത്തിൽ ഭാഗിക്കുമ്പോൾ പരപ്പളവുകളുടെ അംശബന്ധവും $m : n$ ആയിരിക്കും.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 180', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(splitPct) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const ax = 155, ay = 35;
        const bx = 55, by = 135;
        const cx = 275, cy = 135;

        const dx = bx + (cx - bx) * (splitPct / 100);
        const dy = by;

        group.appendChild(Fig.svg('polygon', {
          points: `${ax},${ay} ${bx},${by} ${dx},${dy}`,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
        }));

        group.appendChild(Fig.svg('polygon', {
          points: `${ax},${ay} ${dx},${dy} ${cx},${cy}`,
          style: 'fill: #e0f2fe; stroke: #0284c7; stroke-width: 1.5px;'
        }));

        group.appendChild(Fig.svg('line', { x1: ax, y1: ay, x2: dx, y2: dy, style: 'stroke: var(--ink); stroke-width: 2px;' }));

        [ [ax, ay, 'A', 'middle', -8], [bx, by, 'B', 'end', 14], [cx, cy, 'C', 'start', 14], [dx, dy, 'D', 'middle', 14] ].forEach(([x, y, txt, anc, yoff]) => {
          group.appendChild(Fig.svg('circle', { cx: x, cy: y, r: 3.5, style: 'fill: var(--ink);' }));
          group.appendChild(Fig.svg('text', { x: x, y: y + yoff, 'text-anchor': anc, style: 'font-size: 11px; font-weight: 700; fill: var(--ink);', text: txt }));
        });

        const part1 = (splitPct / 10).toFixed(1);
        const part2 = ((100 - splitPct) / 10).toFixed(1);
        const r1 = Math.round(splitPct / 10);
        const r2 = Math.round((100 - splitPct) / 10);

        group.appendChild(Fig.svg('text', {
          x: (bx + dx) / 2, y: by - 8, 'text-anchor': 'middle',
          style: 'font-size: 10px; font-weight: 700; fill: var(--accent);',
          text: `BD = ${part1}`
        }));
        group.appendChild(Fig.svg('text', {
          x: (dx + cx) / 2, y: cy - 8, 'text-anchor': 'middle',
          style: 'font-size: 10px; font-weight: 700; fill: #0284c7;',
          text: `DC = ${part2}`
        }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 172, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `പരപ്പളവ് അനുപാതം = BD / DC = ${r1} : ${r2}` : `Area Ratio: Area(ABD) / Area(ADC) = ${r1} : ${r2}`
        }));
      }

      draw(40);
      api.body.appendChild(svg);
      api.control({
        min: 20, max: 80, step: 10, value: 40,
        label: 'Position of Point D',
        format: v => 'BD : DC = ' + (v/10) + ' : ' + ((100-v)/10),
        onInput: draw
      });
    }
  },

  /* ── Class 9 Chapter 2: Decimal Forms (ദശാംശരൂപങ്ങൾ) ─────────────────────── */

  'fig.decimal-forms': {
    title: 'Fractions to Repeating & Terminating Decimals',
    title_ml: 'ഭിന്നസംഖ്യകളും ദശാംശരൂപങ്ങളും',
    caption: 'When converting fraction $\\frac{1}{n}$, if the denominator prime factors are only 2 and 5, it terminates. Otherwise, long division remainders cycle, producing a recurring decimal.',
    caption_ml: 'ഛേദത്തിന്റെ അഭാജ്യഘടകങ്ങൾ 2, 5 മാത്രമാണെങ്കിൽ ദശാംശം അവസാനിക്കുന്നു. അല്ലാത്തപക്ഷം ശിഷ്ടങ്ങൾ ആവർത്തിച്ച് ആവർത്തന ദശാംശമാകുന്നു.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 180', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      const data = {
        2: { dec: '0.5', type: 'Terminating', type_ml: 'അവസാനിക്കുന്നത്', cycle: 'Rem: 0' },
        3: { dec: '0.3333...', type: 'Recurring (Period 1)', type_ml: 'ആവർത്തിക്കുന്നത് (പിരീഡ് 1)', cycle: 'Rem: 1 → 1 → ...' },
        4: { dec: '0.25', type: 'Terminating', type_ml: 'അവസാനിക്കുന്നത്', cycle: 'Rem: 2, 0' },
        5: { dec: '0.2', type: 'Terminating', type_ml: 'അവസാനിക്കുന്നത്', cycle: 'Rem: 0' },
        6: { dec: '0.1666...', type: 'Recurring (Mixed)', type_ml: 'മിശ്ര ആവർത്തനം', cycle: 'Rem: 4 → 4 → ...' },
        7: { dec: '0.142857...', type: 'Recurring (Period 6)', type_ml: 'ആവർത്തിക്കുന്നത് (പിരീഡ് 6)', cycle: 'Rem: 3, 2, 6, 4, 5, 1' },
        8: { dec: '0.125', type: 'Terminating', type_ml: 'അവസാനിക്കുന്നത്', cycle: 'Rem: 2, 4, 0' },
        9: { dec: '0.1111...', type: 'Recurring (Period 1)', type_ml: 'ആവർത്തിക്കുന്നത് (പിരീഡ് 1)', cycle: 'Rem: 1 → 1 → ...' }
      };

      function draw(n) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const info = data[n] || data[3];

        group.appendChild(Fig.svg('rect', {
          x: 20, y: 15, width: 290, height: 150, rx: 8,
          style: 'fill: var(--card-bg, #f8fafc); stroke: var(--accent); stroke-width: 1.5px;'
        }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 48, 'text-anchor': 'middle',
          style: 'font-size: 20px; font-weight: 800; fill: var(--ink);',
          text: `1 / ${n} = ${info.dec}`
        }));

        const isTerm = info.type.startsWith('Terminating');
        const badgeFill = isTerm ? 'var(--ok-soft, #dcfce7)' : 'var(--warn-soft, #fef3c7)';
        const badgeColor = isTerm ? 'var(--ok, #16a34a)' : 'var(--warn, #d97706)';

        group.appendChild(Fig.svg('rect', {
          x: 65, y: 65, width: 200, height: 28, rx: 6,
          style: `fill: ${badgeFill}; stroke: ${badgeColor}; stroke-width: 1.2px;`
        }));
        group.appendChild(Fig.svg('text', {
          x: 165, y: 84, 'text-anchor': 'middle',
          style: `font-size: 12px; font-weight: 700; fill: ${badgeColor};`,
          text: isMl ? info.type_ml : info.type
        }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 122, 'text-anchor': 'middle',
          style: 'font-size: 12px; font-weight: 600; fill: var(--muted);',
          text: (isMl ? 'ശിഷ്ടങ്ങളുടെ ക്രമം: ' : 'Division Remainders: ') + info.cycle
        }));

        const ruleText = isTerm
          ? (isMl ? 'ഛേദം 2, 5 എന്നിവയുടെ ഗുണിതം മാത്രം.' : 'Denominator has only 2 or 5 as prime factors.')
          : (isMl ? 'ഛേദത്തിൽ 2, 5 അല്ലാത്ത ഘടകങ്ങളുണ്ട്.' : 'Denominator contains prime factors other than 2 or 5.');
        group.appendChild(Fig.svg('text', {
          x: 165, y: 146, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 500; fill: var(--ink);',
          text: ruleText
        }));
      }

      draw(7);
      api.body.appendChild(svg);
      api.control({
        min: 2, max: 9, step: 1, value: 7,
        label: 'Select Denominator n',
        format: v => '1 / ' + v,
        onInput: draw
      });
    }
  },

  /* ── Class 9 Chapter 3: Pairs of Equations (സമവാക്യജോടികൾ) ─────────────── */

  'fig.linear-systems': {
    title: 'Geometric Solution of Simultaneous Linear Equations',
    title_ml: 'രണ്ട് നേർവരകളുടെ സംഗമബിന്ദുവും സമവാക്യപരിഹാരവും',
    caption: 'System: $x + y = 10$ and $x - y = k$. The unique solution $(x, y)$ is the coordinates of the intersection point of the two lines.',
    caption_ml: 'സമവാക്യങ്ങൾ: $x + y = 10$, $x - y = k$. രണ്ട് വരകളും കൂട്ടിമുട്ടുന്ന ബിന്ദുവാണ് ഈ സമവാക്യങ്ങളുടെ പൊതുവായ പരിഹാരം $(x, y)$.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 190', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(k) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const ox = 50, oy = 150, sc = 11;

        group.appendChild(Fig.svg('line', { x1: ox, y1: 15, x2: ox, y2: oy + 10, style: 'stroke: var(--muted); stroke-width: 1.5px;' }));
        group.appendChild(Fig.svg('line', { x1: ox - 10, y1: oy, x2: 300, y2: oy, style: 'stroke: var(--muted); stroke-width: 1.5px;' }));

        for (let i = 2; i <= 12; i += 2) {
          group.appendChild(Fig.svg('text', { x: ox + i * sc, y: oy + 14, 'text-anchor': 'middle', style: 'font-size: 9px; fill: var(--muted);', text: i }));
          group.appendChild(Fig.svg('text', { x: ox - 6, y: oy - i * sc + 3, 'text-anchor': 'end', style: 'font-size: 9px; fill: var(--muted);', text: i }));
        }

        group.appendChild(Fig.svg('line', {
          x1: ox + 0 * sc, y1: oy - 10 * sc,
          x2: ox + 11 * sc, y2: oy - (-1) * sc,
          style: 'stroke: #2563eb; stroke-width: 2px;'
        }));
        group.appendChild(Fig.svg('text', {
          x: ox + 2 * sc, y: oy - 9 * sc,
          style: 'font-size: 10px; font-weight: 700; fill: #2563eb;',
          text: 'x + y = 10'
        }));

        const xStart = Math.max(0, k);
        const yStart = xStart - k;
        group.appendChild(Fig.svg('line', {
          x1: ox + xStart * sc, y1: oy - yStart * sc,
          x2: ox + 12 * sc, y2: oy - (12 - k) * sc,
          style: 'stroke: #dc2626; stroke-width: 2px;'
        }));
        group.appendChild(Fig.svg('text', {
          x: ox + 10 * sc, y: oy - (10 - k) * sc - 8,
          style: 'font-size: 10px; font-weight: 700; fill: #dc2626;',
          text: `x - y = ${k}`
        }));

        const ix = (10 + k) / 2;
        const iy = (10 - k) / 2;
        const px = ox + ix * sc;
        const py = oy - iy * sc;

        group.appendChild(Fig.svg('line', { x1: px, y1: oy, x2: px, y2: py, style: 'stroke: var(--accent); stroke-dasharray: 2,2;' }));
        group.appendChild(Fig.svg('line', { x1: ox, y1: py, x2: px, y2: py, style: 'stroke: var(--accent); stroke-dasharray: 2,2;' }));
        group.appendChild(Fig.svg('circle', { cx: px, cy: py, r: 5, style: 'fill: var(--accent); stroke: #fff; stroke-width: 2px;' }));

        group.appendChild(Fig.svg('text', {
          x: px + 8, y: py - 8,
          style: 'font-size: 12px; font-weight: 800; fill: var(--ink);',
          text: `(${ix}, ${iy})`
        }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 182, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--accent);',
          text: isMl ? `നിർദ്ധാരണം: x = ${ix}, y = ${iy}` : `Solution: x = ${ix}, y = ${iy}`
        }));
      }

      draw(2);
      api.body.appendChild(svg);
      api.control({
        min: 0, max: 6, step: 2, value: 2,
        label: 'Difference Value k',
        format: v => 'k = ' + v,
        onInput: draw
      });
    }
  },

  /* ── Class 9 Chapter 4: New Numbers (പുതിയ സംഖ്യകൾ) ──────────────────────── */

  'fig.root-spiral': {
    title: 'Spiral of Theodorus (Roots Construction)',
    title_ml: 'തിയോഡോറസ് സർപ്പിളം (വർഗ്ഗമൂലങ്ങൾ)',
    caption: 'Successive right-angled triangles with perpendicular side of 1 unit construct $\\sqrt{2}, \\sqrt{3}, \\sqrt{4}, \\sqrt{5}, \\dots$ consecutively.',
    caption_ml: 'ലംബവശം 1 യൂണിറ്റ് ആയി തുടർച്ചയായി മട്ടത്രികോണങ്ങൾ വരച്ച് $\\sqrt{2}, \\sqrt{3}, \\sqrt{4}, \\dots$ നിർമ്മിക്കുന്നു.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 200', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(steps) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const ox = 150, oy = 120, unit = 48;

        group.appendChild(Fig.svg('circle', { cx: ox, cy: oy, r: 3, style: 'fill: var(--ink);' }));
        group.appendChild(Fig.svg('text', { x: ox - 10, y: oy + 12, style: 'font-size: 10px; font-weight: 700; fill: var(--ink);', text: 'O' }));

        let currentAngle = 0;
        let lastX = ox + unit;
        let lastY = oy;

        group.appendChild(Fig.svg('line', { x1: ox, y1: oy, x2: lastX, y2: lastY, style: 'stroke: var(--ink); stroke-width: 2px;' }));
        group.appendChild(Fig.svg('text', { x: (ox + lastX)/2, y: oy + 14, 'text-anchor': 'middle', style: 'font-size: 10px; font-weight: 700; fill: var(--muted);', text: '1' }));

        const colors = ['#2563eb', '#16a34a', '#d97706', '#dc2626', '#9333ea', '#0891b2'];

        for (let n = 1; n <= steps; n++) {
          const col = colors[(n - 1) % colors.length];
          const delta = Math.atan(1 / Math.sqrt(n));
          currentAngle += delta;
          const nextHypot = Math.sqrt(n + 1) * unit;
          const nextX = ox + nextHypot * Math.cos(currentAngle);
          const nextY = oy - nextHypot * Math.sin(currentAngle);

          group.appendChild(Fig.svg('polygon', {
            points: `${ox},${oy} ${lastX},${lastY} ${nextX},${nextY}`,
            style: `fill: ${col}22; stroke: ${col}; stroke-width: 1.5px;`
          }));

          group.appendChild(Fig.svg('line', {
            x1: lastX, y1: lastY, x2: nextX, y2: nextY,
            style: 'stroke: var(--ink); stroke-width: 1.5px;'
          }));

          const midX = (ox + nextX) / 2;
          const midY = (oy + nextY) / 2;
          const rootVal = n + 1 === 4 ? '2' : `√${n + 1}`;
          group.appendChild(Fig.svg('text', {
            x: midX, y: midY - 4, 'text-anchor': 'middle',
            style: `font-size: 10px; font-weight: 800; fill: ${col};`,
            text: rootVal
          }));

          lastX = nextX;
          lastY = nextY;
        }

        const currRoot = steps + 1;
        const valApprox = Math.sqrt(currRoot).toFixed(3);
        group.appendChild(Fig.svg('text', {
          x: 165, y: 190, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `നിലവിലെ കർണ്ണം = √${currRoot} ≈ ${valApprox}` : `Current Hypotenuse = √${currRoot} ≈ ${valApprox}`
        }));
      }

      draw(3);
      api.body.appendChild(svg);
      api.control({
        min: 1, max: 6, step: 1, value: 3,
        label: 'Spiral Step n',
        format: v => `Hypotenuse: √${v + 1}`,
        onInput: draw
      });
    }
  },

  /* ── Class 9 Chapter 5: Circles (വൃത്തങ്ങൾ) ──────────────────────────────── */

  'fig.circle-theorems': {
    title: 'Inscribed Angle & Semicircle Theorem',
    title_ml: 'കേന്ദ്രകോണും വൃത്തത്തിലെ കോണും (അർദ്ധവൃത്ത കോൺ)',
    caption: 'The inscribed angle $\\angle APB$ is always half of the central angle $\\angle AOB$. When $AB$ is a diameter, the angle is strictly $90^\\circ$.',
    caption_ml: 'വൃത്തത്തിലെ കോൺ $\\angle APB$ കേന്ദ്രകോൺ $\\angle AOB$-യുടെ പകുതിയായിരിക്കും. $AB$ വ്യാസമാകുമ്പോൾ കോൺ കൃത്യം $90^\\circ$ ആയിരിക്കും.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 200', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(pAngleDeg) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const cx = 165, cy = 100, r = 70;

        group.appendChild(Fig.svg('circle', {
          cx: cx, cy: cy, r: r,
          style: 'fill: none; stroke: var(--ink); stroke-width: 1.5px;'
        }));

        group.appendChild(Fig.svg('circle', { cx: cx, cy: cy, r: 3.5, style: 'fill: var(--ink);' }));
        group.appendChild(Fig.svg('text', { x: cx, y: cy + 15, 'text-anchor': 'middle', style: 'font-size: 10px; font-weight: 700; fill: var(--ink);', text: 'O' }));

        const aRad = (210 * Math.PI) / 180;
        const bRad = (330 * Math.PI) / 180;
        const ax = cx + r * Math.cos(aRad);
        const ay = cy + r * Math.sin(aRad);
        const bx = cx + r * Math.cos(bRad);
        const by = cy + r * Math.sin(bRad);

        const pRad = (pAngleDeg * Math.PI) / 180;
        const px = cx + r * Math.cos(pRad);
        const py = cy - r * Math.sin(pRad);

        group.appendChild(Fig.svg('line', { x1: cx, y1: cy, x2: ax, y2: ay, style: 'stroke: var(--accent); stroke-width: 1.5px;' }));
        group.appendChild(Fig.svg('line', { x1: cx, y1: cy, x2: bx, y2: by, style: 'stroke: var(--accent); stroke-width: 1.5px;' }));

        group.appendChild(Fig.svg('line', { x1: px, y1: py, x2: ax, y2: ay, style: 'stroke: #16a34a; stroke-width: 1.8px;' }));
        group.appendChild(Fig.svg('line', { x1: px, y1: py, x2: bx, y2: by, style: 'stroke: #16a34a; stroke-width: 1.8px;' }));

        group.appendChild(Fig.svg('line', { x1: ax, y1: ay, x2: bx, y2: by, style: 'stroke: var(--muted); stroke-width: 1px; stroke-dasharray: 2,2;' }));

        [ [ax, ay, 'A', 'end', 12], [bx, by, 'B', 'start', 12], [px, py, 'P', 'middle', -8] ].forEach(([x, y, txt, anc, yoff]) => {
          group.appendChild(Fig.svg('circle', { cx: x, cy: y, r: 4, style: 'fill: var(--ink);' }));
          group.appendChild(Fig.svg('text', { x: x, y: y + yoff, 'text-anchor': anc, style: 'font-size: 11px; font-weight: 700; fill: var(--ink);', text: txt }));
        });

        const centralAngle = 120;
        const inscribedAngle = 60;

        group.appendChild(Fig.svg('text', {
          x: cx, y: cy - 10, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--accent);',
          text: `∠AOB = ${centralAngle}°`
        }));

        group.appendChild(Fig.svg('text', {
          x: px, y: py + 18, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: #16a34a;',
          text: `∠APB = ${inscribedAngle}°`
        }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 192, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? 'സിദ്ധാന്തം: കേന്ദ്രകോൺ (120°) = 2 × വൃത്തത്തിലെ കോൺ (60°)' : 'Theorem: Central Angle (120°) = 2 × Inscribed Angle (60°)'
        }));
      }

      draw(90);
      api.body.appendChild(svg);
      api.control({
        min: 45, max: 135, step: 15, value: 90,
        label: 'Move Vertex P along Arc',
        format: v => 'P Position: ' + v + '°',
        onInput: draw
      });
    }
  },

  /* ── Class 9 Chapter 6: Parallel Lines (സമാന്തരവരകൾ) ───────────────────────── */

  'fig.parallel-intercepts-ratio': {
    title: 'Parallel Lines and Proportional Intercepts',
    title_ml: 'സമാന്തരവരകളും അനുപാത സിദ്ധാന്തവും',
    caption: 'Three parallel lines cut transversals. Adjust the spacing: the ratio of intercepts on transversal 1 ($AB/BC$) remains strictly equal to transversal 2 ($DE/EF$).',
    caption_ml: 'മൂന്ന് സമാന്തരവരകൾ രണ്ട് വരകളെ മുറിക്കുമ്പോൾ രണ്ട് വരകളിലെയും ഭാഗങ്ങളുടെ അംശബന്ധം എപ്പോഴും തുല്യമായിരിക്കും ($AB/BC = DE/EF$).',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 190', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(splitRatio) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const y1 = 30;
        const y2 = 30 + Math.round((120 * splitRatio) / 10);
        const y3 = 150;

        [y1, y2, y3].forEach((y, i) => {
          group.appendChild(Fig.svg('line', {
            x1: 20, y1: y, x2: 310, y2: y,
            style: 'stroke: var(--accent); stroke-width: 1.5px;'
          }));
          group.appendChild(Fig.svg('text', {
            x: 295, y: y - 5, 'text-anchor': 'end',
            style: 'font-size: 10px; font-weight: 700; fill: var(--accent);',
            text: `L${i+1}`
          }));
        });

        const xA = 60, yA = y1;
        const xC = 110, yC = y3;
        const xB = xA + (xC - xA) * ((y2 - y1) / (y3 - y1));
        const yB = y2;

        group.appendChild(Fig.svg('line', {
          x1: xA - 10, y1: yA - 15, x2: xC + 10, y2: yC + 15,
          style: 'stroke: var(--ink); stroke-width: 2px;'
        }));

        const xD = 250, yD = y1;
        const xF = 180, yF = y3;
        const xE = xD + (xF - xD) * ((y2 - y1) / (y3 - y1));
        const yE = y2;

        group.appendChild(Fig.svg('line', {
          x1: xD + 10, y1: yD - 15, x2: xF - 10, y2: yF + 15,
          style: 'stroke: #dc2626; stroke-width: 2px;'
        }));

        [ [xA, yA, 'A', 'end', -6], [xB, yB, 'B', 'end', 0], [xC, yC, 'C', 'end', 10],
          [xD, yD, 'D', 'start', -6], [xE, yE, 'E', 'start', 0], [xF, yF, 'F', 'start', 10]
        ].forEach(([x, y, txt, anc, yoff]) => {
          group.appendChild(Fig.svg('circle', { cx: x, cy: y, r: 3.5, style: 'fill: var(--ink);' }));
          group.appendChild(Fig.svg('text', {
            x: anc === 'end' ? x - 6 : x + 6, y: y + yoff, 'text-anchor': anc,
            style: 'font-size: 11px; font-weight: 700; fill: var(--ink);', text: txt
          }));
        });

        const r1 = splitRatio;
        const r2 = 10 - splitRatio;

        group.appendChild(Fig.svg('text', {
          x: 165, y: 178, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `അംശബന്ധം: AB / BC = DE / EF = ${r1} : ${r2}` : `Intercept Ratio: AB / BC = DE / EF = ${r1} : ${r2}`
        }));
      }

      draw(4);
      api.body.appendChild(svg);
      api.control({
        min: 2, max: 8, step: 1, value: 4,
        label: 'Position of Middle Line',
        format: v => `Ratio: ${v} : ${10 - v}`,
        onInput: draw
      });
    }
  },

  /* ── Class 9 Chapter 7: Similar Triangles (സദൃശ ത്രികോണങ്ങൾ) ─────────────── */

  'fig.similar-triangles': {
    title: 'Similar Triangles & Scale Factor',
    title_ml: 'സദൃശ ത്രികോണങ്ങളും സ്കെയിൽ ഫാക്ടറും',
    caption: 'Drag scale factor $k$: all angles remain identical while side lengths scale by $k$ and the area scales quadratically by $k^2$.',
    caption_ml: 'സ്കെയിൽ ഫാക്ടർ $k$ മാറുമ്പോഴും കോണുകൾ മാറാതെ നിൽക്കുന്നു; വശങ്ങൾ $k$ മടങ്ങും പരപ്പളവ് $k^2$ മടങ്ങുമായി മാറുന്നു.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 190', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(k10) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const k = k10 / 10;

        const ax = 30, ay = 135;
        const bx = 110, by = 135;
        const cx = 60, cy = 65;

        group.appendChild(Fig.svg('polygon', {
          points: `${ax},${ay} ${bx},${by} ${cx},${cy}`,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;'
        }));
        group.appendChild(Fig.svg('text', {
          x: 70, y: 152, 'text-anchor': 'middle',
          style: 'font-size: 10px; font-weight: 700; fill: var(--ink);',
          text: '△ABC (1×)'
        }));

        const px = 145, py = 135;
        const qx = px + 80 * k, qy = 135;
        const rx = px + 30 * k, ry = py - 70 * k;

        group.appendChild(Fig.svg('polygon', {
          points: `${px},${py} ${qx},${qy} ${rx},${ry}`,
          style: 'fill: #fef3c7; stroke: #d97706; stroke-width: 1.8px;'
        }));
        group.appendChild(Fig.svg('text', {
          x: (px + qx) / 2, y: 152, 'text-anchor': 'middle',
          style: 'font-size: 10px; font-weight: 700; fill: #d97706;',
          text: `△PQR (${k.toFixed(1)}×)`
        }));

        const areaFactor = (k * k).toFixed(2);
        group.appendChild(Fig.svg('text', {
          x: 165, y: 178, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `വശങ്ങളുടെ അനുപാതം = ${k.toFixed(1)} · പരപ്പളവ് അനുപാതം = ${areaFactor}` : `Side Ratio = ${k.toFixed(1)} · Area Ratio = k² = ${areaFactor}`
        }));
      }

      draw(15);
      api.body.appendChild(svg);
      api.control({
        min: 8, max: 20, step: 2, value: 15,
        label: 'Scale Factor k',
        format: v => `k = ${(v/10).toFixed(1)}×`,
        onInput: draw
      });
    }
  },

  /* ── Class 9 Chapter 8: Polynomials (ബഹുപദങ്ങൾ) ───────────────────────────── */

  'fig.polynomial-graph': {
    title: 'Value and Zeroes of Polynomial p(x) = x² - 4x + 3',
    title_ml: 'ബഹുപദത്തിന്റെ വിലയും പൂജ്യങ്ങളും: p(x) = x² - 4x + 3',
    caption: 'Drag input $x$ to trace points along the parabola. The curve hits the $x$-axis ($p(x) = 0$) at the zeroes $x = 1$ and $x = 3$.',
    caption_ml: '$x$-ന്റെ വില മാറ്റി നോക്കുക; $x = 1, 3$ എന്നീ ബിന്ദുക്കളിൽ ബഹുപദത്തിന്റെ വില പൂജ്യമാകുന്നു ($p(x) = 0$).',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 190', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(xVal) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const ox = 110, oy = 115, sx = 28, sy = 14;

        group.appendChild(Fig.svg('line', { x1: 20, y1: oy, x2: 300, y2: oy, style: 'stroke: var(--muted); stroke-width: 1.2px;' }));
        group.appendChild(Fig.svg('line', { x1: ox, y1: 15, x2: ox, y2: 155, style: 'stroke: var(--muted); stroke-width: 1.2px;' }));

        for (let i = -1; i <= 5; i++) {
          const tx = ox + i * sx;
          group.appendChild(Fig.svg('line', { x1: tx, y1: oy - 3, x2: tx, y2: oy + 3, style: 'stroke: var(--muted);' }));
          group.appendChild(Fig.svg('text', { x: tx, y: oy + 14, 'text-anchor': 'middle', style: 'font-size: 9px; fill: var(--muted);', text: i }));
        }

        let pts = [];
        for (let t = -0.5; t <= 4.5; t += 0.1) {
          const y = t * t - 4 * t + 3;
          const px = ox + t * sx;
          const py = oy - y * sy;
          pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
        }
        group.appendChild(Fig.svg('polyline', {
          points: pts.join(' '),
          style: 'fill: none; stroke: var(--accent); stroke-width: 2px;'
        }));

        [1, 3].forEach(z => {
          group.appendChild(Fig.svg('circle', { cx: ox + z * sx, cy: oy, r: 4, style: 'fill: #16a34a;' }));
        });

        const currY = xVal * xVal - 4 * xVal + 3;
        const curPx = ox + xVal * sx;
        const curPy = oy - currY * sy;

        group.appendChild(Fig.svg('circle', { cx: curPx, cy: curPy, r: 5, style: 'fill: #dc2626; stroke: #fff; stroke-width: 1.5px;' }));
        group.appendChild(Fig.svg('text', {
          x: curPx + 8, y: curPy - 6,
          style: 'font-size: 11px; font-weight: 700; fill: #dc2626;',
          text: `(${xVal}, ${currY})`
        }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 180, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `x = ${xVal} ആകുമ്പോൾ p(${xVal}) = ${currY} (പൂജ്യങ്ങൾ: x = 1, 3)` : `At x = ${xVal}, p(${xVal}) = ${currY} (Zeroes at x = 1, 3)`
        }));
      }

      draw(2);
      api.body.appendChild(svg);
      api.control({
        min: 0, max: 4, step: 0.5, value: 2,
        label: 'Input Value x',
        format: v => 'x = ' + v,
        onInput: draw
      });
    }
  },

  /* ── Class 9 Chapter 9: Circle Measures (വൃത്തപ്പരപ്പളവ്) ──────────────────── */

  'fig.circle-sector': {
    title: 'Circle Sector, Arc Length and Area',
    title_ml: 'വൃത്ത സെക്ടർ, ചാപനീളം, പരപ്പളവ്',
    caption: 'Drag central angle $\\theta$: as the angle expands, arc length $l = \\frac{\\theta}{360}2\\pi r$ and sector area $A = \\frac{\\theta}{360}\\pi r^2$ scale proportionally.',
    caption_ml: 'കേന്ദ്രകോൺ $\\theta$ മാറ്റി നോക്കുക; കോണിനനുസരിച്ച് ചാപനീളവും സെക്ടർ പരപ്പളവും നേർ അനുപാതത്തിൽ മാറുന്നു.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 190', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(deg) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const cx = 165, cy = 95, r = 65;

        group.appendChild(Fig.svg('circle', {
          cx: cx, cy: cy, r: r,
          style: 'fill: none; stroke: var(--muted); stroke-width: 1px; stroke-dasharray: 3,3;'
        }));

        const rad = (deg * Math.PI) / 180;
        const x2 = cx + r * Math.cos(rad);
        const y2 = cy - r * Math.sin(rad);
        const largeArcFlag = deg > 180 ? 1 : 0;

        const pathData = `M ${cx} ${cy} L ${cx + r} ${cy} A ${r} ${r} 0 ${largeArcFlag} 0 ${x2} ${y2} Z`;
        group.appendChild(Fig.svg('path', {
          d: pathData,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
        }));

        group.appendChild(Fig.svg('circle', { cx: cx, cy: cy, r: 3.5, style: 'fill: var(--ink);' }));

        const arcData = `M ${cx + r} ${cy} A ${r} ${r} 0 ${largeArcFlag} 0 ${x2} ${y2}`;
        group.appendChild(Fig.svg('path', {
          d: arcData,
          style: 'fill: none; stroke: #dc2626; stroke-width: 3px;'
        }));

        const arcLen = (((deg / 360) * 2 * Math.PI * 7).toFixed(1));
        const areaVal = (((deg / 360) * Math.PI * 49).toFixed(1));

        group.appendChild(Fig.svg('text', {
          x: cx, y: cy - 6, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: `θ = ${deg}°`
        }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 178, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `r = 7 cm · ചാപനീളം l ≈ ${arcLen} cm · പരപ്പളവ് A ≈ ${areaVal} ച.സെ.മീ` : `r = 7 cm · Arc l ≈ ${arcLen} cm · Area A ≈ ${areaVal} cm²`
        }));
      }

      draw(90);
      api.body.appendChild(svg);
      api.control({
        min: 30, max: 270, step: 15, value: 90,
        label: 'Central Angle θ',
        format: v => `θ = ${v}°`,
        onInput: draw
      });
    }
  },

  /* ── Class 9 Chapter 10: Real Numbers (രേഖീയസംഖ്യകൾ) ───────────────────────── */
  'fig.real-number-distance': {
    title: 'Distance and Midpoint on the Real Line',
    title_ml: 'സംഖ്യാരേഖയിലെ അകലവും മധ്യബിന്ദുവും',
    caption: 'Drag coordinate $x$: the distance from fixed reference $a = 1$ is $|x - a|$ and their midpoint is $M = \\frac{a + x}{2}$.',
    caption_ml: 'സംഖ്യ $x$ മാറ്റി നോക്കുക: $a = 1$-ൽ നിന്നുള്ള അകലം $|x - a|$-ഉം മധ്യബിന്ദു $M = \\frac{a + x}{2}$-ഉം കാണാം.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 190', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(xVal) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const aVal = 1;
        const cy = 95;
        const originX = 165;
        const scale = 22;

        group.appendChild(Fig.svg('line', {
          x1: 20, y1: cy, x2: 310, y2: cy,
          style: 'stroke: var(--ink); stroke-width: 2px;'
        }));

        for (let i = -6; i <= 6; i++) {
          const tx = originX + i * scale;
          group.appendChild(Fig.svg('line', {
            x1: tx, y1: cy - 5, x2: tx, y2: cy + 5,
            style: 'stroke: var(--ink); stroke-width: 1px;'
          }));
          if (i % 2 === 0 || i === 0 || i === 1) {
            group.appendChild(Fig.svg('text', {
              x: tx, y: cy + 18, 'text-anchor': 'middle',
              style: 'font-size: 10px; fill: var(--text-muted);',
              text: i
            }));
          }
        }

        const ax = originX + aVal * scale;
        const xx = originX + xVal * scale;
        const midVal = ((aVal + xVal) / 2);
        const mx = originX + midVal * scale;
        const dist = Math.abs(xVal - aVal);

        const bracketY = cy - 25;
        const minX = Math.min(ax, xx);
        const maxX = Math.max(ax, xx);
        group.appendChild(Fig.svg('line', {
          x1: minX, y1: bracketY, x2: maxX, y2: bracketY,
          style: 'stroke: #dc2626; stroke-width: 2px;'
        }));
        group.appendChild(Fig.svg('line', {
          x1: minX, y1: bracketY - 4, x2: minX, y2: bracketY + 4,
          style: 'stroke: #dc2626; stroke-width: 2px;'
        }));
        group.appendChild(Fig.svg('line', {
          x1: maxX, y1: bracketY - 4, x2: maxX, y2: bracketY + 4,
          style: 'stroke: #dc2626; stroke-width: 2px;'
        }));

        group.appendChild(Fig.svg('circle', { cx: ax, cy: cy, r: 5, style: 'fill: #2563eb;' }));
        group.appendChild(Fig.svg('text', {
          x: ax, y: cy - 8, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: #2563eb;',
          text: 'a = 1'
        }));

        group.appendChild(Fig.svg('circle', { cx: xx, cy: cy, r: 5, style: 'fill: #dc2626;' }));
        group.appendChild(Fig.svg('text', {
          x: xx, y: cy - 8, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: #dc2626;',
          text: `x = ${xVal}`
        }));

        if (dist > 0.5) {
          group.appendChild(Fig.svg('circle', { cx: mx, cy: cy, r: 4, style: 'fill: #16a34a;' }));
          group.appendChild(Fig.svg('text', {
            x: mx, y: cy + 32, 'text-anchor': 'middle',
            style: 'font-size: 10px; font-weight: 700; fill: #16a34a;',
            text: `M = ${midVal}`
          }));
        }

        group.appendChild(Fig.svg('text', {
          x: 165, y: 175, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `അകലം |x - 1| = ${dist} · മധ്യബിന്ദു M = ${midVal}` : `Distance |x - 1| = ${dist} · Midpoint M = ${midVal}`
        }));
      }

      draw(4);
      api.body.appendChild(svg);
      api.control({
        min: -5, max: 6, step: 1, value: 4,
        label: 'Coordinate x',
        format: v => `x = ${v}`,
        onInput: draw
      });
    }
  },

  /* ── Class 9 Chapter 11: Prisms (സ്തംഭങ്ങൾ) ────────────────────────────────── */
  'fig.cylinder-surface': {
    title: 'Cylinder Dimensions, Volume & Surface Area',
    title_ml: 'സിലിണ്ടറിന്റെ അളവുകൾ, വ്യാപ്തം, ഉപരിതല പരപ്പളവ്',
    caption: 'Drag height $h$: the volume $V = \\pi r^2 h$ and curved surface area $\\text{CSA} = 2\\pi rh$ scale linearly with height.',
    caption_ml: 'ഉയരം $h$ മാറ്റി നോക്കുക: ഉയരത്തിനനുസരിച്ച് വ്യാപ്തവും വക്രതല പരപ്പളവും നേർ അനുപാതത്തിൽ മാറുന്നു.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 190', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(h) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
        const r = 35;
        const cx = 105;
        const cyBottom = 142;
        const cyTop = cyBottom - h * 7.5;

        group.appendChild(Fig.svg('rect', {
          x: cx - r, y: cyTop, width: 2 * r, height: cyBottom - cyTop,
          style: 'fill: var(--accent-soft); stroke: none;'
        }));

        group.appendChild(Fig.svg('line', {
          x1: cx - r, y1: cyTop, x2: cx - r, y2: cyBottom,
          style: 'stroke: var(--accent); stroke-width: 2px;'
        }));
        group.appendChild(Fig.svg('line', {
          x1: cx + r, y1: cyTop, x2: cx + r, y2: cyBottom,
          style: 'stroke: var(--accent); stroke-width: 2px;'
        }));

        group.appendChild(Fig.svg('ellipse', {
          cx: cx, cy: cyBottom, rx: r, ry: 12,
          style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 2px;'
        }));

        group.appendChild(Fig.svg('ellipse', {
          cx: cx, cy: cyTop, rx: r, ry: 12,
          style: 'fill: #bae6fd; stroke: var(--accent); stroke-width: 2px;'
        }));

        group.appendChild(Fig.svg('line', {
          x1: cx, y1: cyTop, x2: cx + r, y2: cyTop,
          style: 'stroke: #dc2626; stroke-width: 2px;'
        }));
        group.appendChild(Fig.svg('text', {
          x: cx + r / 2, y: cyTop - 4, 'text-anchor': 'middle',
          style: 'font-size: 10px; font-weight: 700; fill: #dc2626;',
          text: 'r = 7 cm'
        }));

        group.appendChild(Fig.svg('line', {
          x1: cx + r + 15, y1: cyTop, x2: cx + r + 15, y2: cyBottom,
          style: 'stroke: var(--ink); stroke-width: 1.5px; stroke-dasharray: 2,2;'
        }));
        group.appendChild(Fig.svg('text', {
          x: cx + r + 20, y: (cyTop + cyBottom) / 2 + 4, 'text-anchor': 'start',
          style: 'font-size: 10px; font-weight: 700; fill: var(--ink);',
          text: `h = ${h} cm`
        }));

        const vol = (22 / 7 * 49 * h).toFixed(0);
        const csa = (2 * 22 / 7 * 7 * h).toFixed(0);
        const tsa = (parseFloat(csa) + 2 * (22 / 7 * 49)).toFixed(0);

        const tx = 195;
        group.appendChild(Fig.svg('text', {
          x: tx, y: 50,
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `വ്യാപ്തം V = πr²h:` : `Volume V = πr²h:`
        }));
        group.appendChild(Fig.svg('text', {
          x: tx, y: 68,
          style: 'font-size: 12px; font-weight: 700; fill: var(--accent);',
          text: isMl ? `≈ ${vol} ഘന സെ.മീ` : `≈ ${vol} cm³`
        }));

        group.appendChild(Fig.svg('text', {
          x: tx, y: 98,
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `വക്രതല പരപ്പളവ് 2πrh:` : `Curved Area 2πrh:`
        }));
        group.appendChild(Fig.svg('text', {
          x: tx, y: 116,
          style: 'font-size: 12px; font-weight: 700; fill: #dc2626;',
          text: isMl ? `≈ ${csa} ച.സെ.മീ` : `≈ ${csa} cm²`
        }));

        group.appendChild(Fig.svg('text', {
          x: tx, y: 145,
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `ആകെ പരപ്പളവ് TSA:` : `Total Area TSA:`
        }));
        group.appendChild(Fig.svg('text', {
          x: tx, y: 163,
          style: 'font-size: 12px; font-weight: 700; fill: #16a34a;',
          text: isMl ? `≈ ${tsa} ച.സെ.മീ` : `≈ ${tsa} cm²`
        }));
      }

      draw(8);
      api.body.appendChild(svg);
      api.control({
        min: 4, max: 12, step: 1, value: 8,
        label: 'Height h',
        format: v => `h = ${v} cm`,
        onInput: draw
      });
    }
  },

  /* ── Class 9 Chapter 12: Proportion (അനുപാതം) ────────────────────────────── */
  'fig.proportion-direct-inverse': {
    title: 'Direct Proportion (y = 2x) vs Inverse (xy = 12)',
    title_ml: 'നേർ അനുപാതവും (y = 2x) വ്യസ്താനുപാതവും (xy = 12)',
    caption: 'Drag $x$: in direct proportion $y = 2x$ grows linearly through the origin; in inverse proportion $y = 12/x$ decreases as a hyperbola.',
    caption_ml: '$x$ മാറ്റി നോക്കുക: നേർ അനുപാതത്തിൽ $y = 2x$ കൂടുന്നു, വ്യസ്താനുപാതത്തിൽ $y = 12/x$ കുറയുന്നു.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 190', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(xVal) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const ox = 40, oy = 148;
        const sx = 38, sy = 9.5;

        group.appendChild(Fig.svg('line', {
          x1: ox, y1: oy, x2: ox + 260, y2: oy,
          style: 'stroke: var(--ink); stroke-width: 1.5px;'
        }));
        group.appendChild(Fig.svg('line', {
          x1: ox, y1: oy, x2: ox, y2: oy - 128,
          style: 'stroke: var(--ink); stroke-width: 1.5px;'
        }));

        group.appendChild(Fig.svg('text', { x: ox + 265, y: oy + 4, style: 'font-size: 10px; fill: var(--ink);', text: 'x' }));
        group.appendChild(Fig.svg('text', { x: ox - 4, y: oy - 130, style: 'font-size: 10px; fill: var(--ink); text-anchor: end;', text: 'y' }));

        group.appendChild(Fig.svg('line', {
          x1: ox, y1: oy, x2: ox + 6 * sx, y2: oy - 12 * sy,
          style: 'stroke: #2563eb; stroke-width: 2px;'
        }));

        let curveD = '';
        for (let t = 1; t <= 6.05; t += 0.2) {
          const px = ox + t * sx;
          const py = oy - (12 / t) * sy;
          curveD += (t === 1 ? `M ${px} ${py} ` : `L ${px} ${py} `);
        }
        group.appendChild(Fig.svg('path', {
          d: curveD,
          style: 'fill: none; stroke: #dc2626; stroke-width: 2px;'
        }));

        const yDir = 2 * xVal;
        const yInv = (12 / xVal).toFixed(1);

        const px = ox + xVal * sx;
        const pyDir = oy - yDir * sy;
        const pyInv = oy - parseFloat(yInv) * sy;

        group.appendChild(Fig.svg('line', {
          x1: px, y1: oy, x2: px, y2: Math.min(pyDir, pyInv) - 10,
          style: 'stroke: var(--muted); stroke-width: 1px; stroke-dasharray: 2,2;'
        }));

        group.appendChild(Fig.svg('circle', { cx: px, cy: pyDir, r: 4.5, style: 'fill: #2563eb;' }));
        group.appendChild(Fig.svg('circle', { cx: px, cy: pyInv, r: 4.5, style: 'fill: #dc2626;' }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 175, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `x = ${xVal} | നേർ y = 2x = ${yDir} | വ്യസ്ത y = 12/x = ${yInv}` : `x = ${xVal} | Direct y = 2x = ${yDir} | Inverse y = 12/x = ${yInv}`
        }));
      }

      draw(3);
      api.body.appendChild(svg);
      api.control({
        min: 1, max: 6, step: 0.5, value: 3,
        label: 'Value x',
        format: v => `x = ${v}`,
        onInput: draw
      });
    }
  },

  /* ── Class 9 Chapter 13: Statistics (സ്ഥിതിവിവരക്കണക്ക്) ───────────────────── */
  'fig.stat-mean-balance': {
    title: 'Arithmetic Mean as Balance Point',
    title_ml: 'സമാന്തര ശരാശരി തുലാസിന്റെ സന്തുലന ബിന്ദു',
    caption: 'Drag value $x_4$: the arithmetic mean acts as the exact fulcrum where Total Excess above mean equals Total Deficit below mean ($\\sum (x_i - \\bar{x}) = 0$).',
    caption_ml: '$x_4$ മാറ്റി നോക്കുക: ശരാശരി എന്നത് ആകെ കൂടുതലും ആകെ കുറവും തുല്യമായി നിൽക്കുന്ന സന്തുലന ബിന്ദുവാണ് ($\\sum (x_i - \\bar{x}) = 0$).',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 190', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(x4) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const data = [10, 20, 25, x4, 45];
        const sum = data.reduce((a, b) => a + b, 0);
        const mean = sum / data.length;

        const beamY = 100;
        const minVal = 0, maxVal = 60;
        const scale = 250 / (maxVal - minVal);
        const ox = 40;

        group.appendChild(Fig.svg('line', {
          x1: ox, y1: beamY, x2: ox + 250, y2: beamY,
          style: 'stroke: var(--ink); stroke-width: 4px; stroke-linecap: round;'
        }));

        const fx = ox + (mean - minVal) * scale;
        group.appendChild(Fig.svg('polygon', {
          points: `${fx},${beamY} ${fx - 12},${beamY + 24} ${fx + 12},${beamY + 24}`,
          style: 'fill: #2563eb; stroke: #1d4ed8; stroke-width: 1.5px;'
        }));
        group.appendChild(Fig.svg('text', {
          x: fx, y: beamY + 36, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: #2563eb;',
          text: isMl ? `ശരാശരി x̄ = ${mean.toFixed(1)}` : `Mean x̄ = ${mean.toFixed(1)}`
        }));

        let totalExcess = 0;
        let totalDeficit = 0;
        data.forEach((val, idx) => {
          const px = ox + (val - minVal) * scale;
          const isSelected = (idx === 3);
          group.appendChild(Fig.svg('circle', {
            cx: px, cy: beamY - 8, r: isSelected ? 6.5 : 5,
            style: `fill: ${isSelected ? '#dc2626' : 'var(--accent)'}; stroke: var(--ink); stroke-width: 1px;`
          }));
          group.appendChild(Fig.svg('text', {
            x: px, y: beamY - 18, 'text-anchor': 'middle',
            style: 'font-size: 9px; font-weight: 700; fill: var(--ink);',
            text: val
          }));
          const dev = val - mean;
          if (dev > 0) totalExcess += dev;
          else totalDeficit += Math.abs(dev);
        });

        group.appendChild(Fig.svg('text', {
          x: 165, y: 175, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `കൂടുതൽ = +${totalExcess.toFixed(1)} · കുറവ് = -${totalDeficit.toFixed(1)} · തുക = 0` : `Total Excess = +${totalExcess.toFixed(1)} · Total Deficit = -${totalDeficit.toFixed(1)} · Sum = 0`
        }));
      }

      draw(35);
      api.body.appendChild(svg);
      api.control({
        min: 15, max: 55, step: 5, value: 35,
        label: 'Value x₄',
        format: v => `x₄ = ${v}`,
        onInput: draw
      });
    }
  },

  /* ── Class 10 Chapter 1: Arithmetic Sequences (സമാന്തരശ്രേണികൾ) ────────────── */
  'fig.arithmetic-sequence': {
    title: 'Arithmetic Sequence Ladder and Term Sum',
    title_ml: 'സമാന്തരശ്രേണിയുടെ ഗോവണിയും തുകയും',
    caption: 'Drag $n$: each step increases by common difference $d = 3$; pairing terms from ends ($x_1 + x_n = x_2 + x_{n-1}$) demonstrates Gauss’s formula $S_n = \\frac{n}{2}(x_1 + x_n)$.',
    caption_ml: 'പദങ്ങളുടെ എണ്ണം $n$ മാറ്റി നോക്കുക: ഓരോ പടിയും $d = 3$ നിരക്കിൽ ഉയരുന്നു; ഇരുവശങ്ങളിൽ നിന്നും പദങ്ങൾ ജോഡികളാക്കി തുക $S_n$ കണ്ടെത്തുന്നത് കാണുക.',
    interactive: true,
    build(api) {
      const svg = Fig.svg('svg', { viewBox: '0 0 330 190', role: 'img' });
      const group = Fig.svg('g', {});
      svg.appendChild(group);

      function draw(n) {
        DOM.clear(group);
        const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';

        const a = 4, d = 3;
        const barW = Math.min(28, 240 / n);
        const startX = 165 - (n * barW) / 2;
        const baseY = 145;

        let terms = [];
        for (let i = 0; i < n; i++) {
          const val = a + i * d;
          terms.push(val);
          const barH = val * 3.5;
          const bx = startX + i * barW;
          const by = baseY - barH;

          group.appendChild(Fig.svg('rect', {
            x: bx + 2, y: by, width: barW - 4, height: barH,
            style: 'fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5px;',
            rx: 2
          }));

          group.appendChild(Fig.svg('text', {
            x: bx + barW / 2, y: by - 4, 'text-anchor': 'middle',
            style: 'font-size: 10px; font-weight: 700; fill: var(--ink);',
            text: val
          }));

          group.appendChild(Fig.svg('text', {
            x: bx + barW / 2, y: baseY + 14, 'text-anchor': 'middle',
            style: 'font-size: 9px; fill: var(--text-muted);',
            text: `x${i + 1}`
          }));
        }

        const pairSum = terms[0] + terms[n - 1];
        const totalSum = (n / 2) * pairSum;

        const xFirst = startX + barW / 2;
        const xLast = startX + (n - 1) * barW + barW / 2;
        group.appendChild(Fig.svg('path', {
          d: `M ${xFirst} 28 Q ${(xFirst + xLast) / 2} 10 ${xLast} 28`,
          style: 'fill: none; stroke: #dc2626; stroke-width: 1.5px; stroke-dasharray: 3,3;'
        }));
        group.appendChild(Fig.svg('text', {
          x: (xFirst + xLast) / 2, y: 16, 'text-anchor': 'middle',
          style: 'font-size: 10px; font-weight: 700; fill: #dc2626;',
          text: `x₁ + xₙ = ${terms[0]} + ${terms[n-1]} = ${pairSum}`
        }));

        group.appendChild(Fig.svg('text', {
          x: 165, y: 178, 'text-anchor': 'middle',
          style: 'font-size: 11px; font-weight: 700; fill: var(--ink);',
          text: isMl ? `ആകെ തുക S${n} = (${n}/2) × ${pairSum} = ${totalSum}` : `Total Sum S${n} = (${n}/2) × ${pairSum} = ${totalSum}`
        }));
      }

      draw(5);
      api.body.appendChild(svg);
      api.control({
        min: 3, max: 7, step: 1, value: 5,
        label: 'Terms n',
        format: v => `n = ${v}`,
        onInput: draw
      });
    }
  }
};

/* Concept → figures map for Class 8 Mathematics & Foundations */
const FIGMAP = {
  // Class 8 Chapter 1
  'm8.1.1.perfect-squares': ['fig.square-defn', 'fig.square-last-digits'],
  'm8.1.2.geo-squares': ['fig.square-identity'],
  'm8.1.3.two-digit-squares': ['fig.square-diff-consec', 'fig.square-sum-odds'],
  'm8.1.3.three-digit-squares': ['fig.square-between'],
  'm8.1.4.decimal-squares': ['fig.decimals'],
  'm8.1.5.half-pattern': ['fig.square-ends-5'],
  'm8.1.5.quarter-pattern': ['fig.fractions'],
  'm8.1.6.square-roots': ['fig.square-root-defn'],

  // Class 8 Chapter 2: Equal Triangles
  'm8.2.1.sss-congruence': ['fig.tri-sss'],
  'm8.2.1.rigidity': ['fig.tri-rigidity'],
  'm8.2.2.asa-congruence': ['fig.tri-asa'],
  'm8.2.3.sas-congruence': ['fig.tri-sas'],
  'm8.2.4.isosceles-triangles': ['fig.tri-isosceles'],
  'm8.2.5.equilateral-triangles': ['fig.tri-equilateral'],
  'm8.2.6.triangle-applications': ['fig.tri-parallelogram'],

  // Class 8 Chapter 3: Square Identities
  'm8.3.1.square-of-sum': ['fig.ident-sum-sq'],
  'm8.3.2.square-of-diff': ['fig.ident-diff-sq'],
  'm8.3.3.sum-diff-relations': ['fig.ident-four-xy'],
  'm8.3.4.diff-of-squares': ['fig.ident-diff-two-sq'],
  'm8.3.5.product-of-binomials': ['fig.ident-product-binomials'],

  // Class 8 Chapter 4: Polygons
  'm8.4.1.polygon-angle-sum': ['fig.polygon-triangulation'],
  'm8.4.2.polygon-outer-angles': ['fig.polygon-outer-angles'],
  'm8.4.3.regular-polygons': ['fig.regular-polygons'],
  'm8.4.4.polygon-diagonals': ['fig.polygon-diagonals'],

  // Class 8 Chapter 5: Money Maths
  'm8.5.1.interest-on-interest': ['fig.simple-vs-compound'],
  'm8.5.2.compound-interest-formula': ['fig.compound-growth-curve'],
  'm8.5.3.changing-compounding-periods': ['fig.compounding-frequency'],
  'm8.5.4.growth-and-depreciation': ['fig.depreciation-curve'],

  // Class 8 Chapter 6: Construction of Quadrilaterals
  'm8.6.1.quad-uniqueness': ['fig.quad-flexibility'],
  'm8.6.2.four-sides-one-diagonal': ['fig.quad-four-sides-diag'],
  'm8.6.3.sides-and-angles': ['fig.quad-sides-angles'],
  'm8.6.4.special-quadrilaterals': ['fig.rhombus-diagonals'],

  // Class 8 Chapter 7: Ratio (അംശബന്ധം)
  'm8.7.1.concept-of-ratio': ['fig.ratio-tape'],
  'm8.7.2.dividing-in-ratio': ['fig.ratio-division'],
  'm8.7.3.ratio-change': ['fig.ratio-tape'],
  'm8.7.4.ratio-geometry': ['fig.ratio-triangle'],

  // Class 8 Chapter 8: Area of Quadrilaterals (ചതുർഭുജങ്ങളുടെ പരപ്പളവ്)
  'm8.8.1.general-quad-area': ['fig.area-general-quad'],
  'm8.8.2.rhombus-area': ['fig.area-rhombus'],
  'm8.8.3.parallelogram-area': ['fig.area-parallelogram'],
  'm8.8.4.trapezium-area': ['fig.area-trapezium'],

  // Class 8 Chapter 9: Negative Numbers (ഋണസംഖ്യകൾ)
  'm8.9.1.negative-numbers-concept': ['fig.negative-number-line'],
  'm8.9.2.addition-of-negatives': ['fig.negative-number-line'],
  'm8.9.3.subtraction-of-negatives': ['fig.negative-subtraction'],
  'm8.9.4.multiplication-division-negatives': ['fig.negative-multiplication'],

  // Class 8 Chapter 10: Statistics (സ്ഥിതിവിവരക്കണക്ക്)
  'm8.10.1.data-and-tally': ['fig.stat-tally'],
  'm8.10.2.grouped-frequency-table': ['fig.stat-histogram'],
  'm8.10.3.histogram': ['fig.stat-histogram'],
  'm8.10.4.data-interpretation': ['fig.stat-histogram'],

  // Class 8 Chapter 11: Equations (സമവാക്യങ്ങൾ)
  'm8.11.1.inversion-method': ['fig.equation-balance'],
  'm8.11.2.linear-equations-one-variable': ['fig.equation-balance'],
  'm8.11.3.variable-on-both-sides': ['fig.equation-transposition'],
  'm8.11.4.applied-equation-problems': ['fig.equation-transposition'],

  // Class 8 Chapter 12: Parallel Lines (സമാന്തരവരകൾ)
  'm8.12.1.parallel-lines-transversal': ['fig.parallel-transversal'],
  'm8.12.2.equidistant-parallel-lines': ['fig.parallel-intercepts'],
  'm8.12.3.dividing-line-segments': ['fig.parallel-intercepts'],
  'm8.12.4.three-parallel-lines-theorem': ['fig.parallel-intercepts'],

  // Class 8 Chapter 13: Prisms (സ്തംഭങ്ങൾ)
  'm8.13.1.prism-concept': ['fig.prism-3d'],
  'm8.13.2.lateral-surface-area': ['fig.prism-unfold'],
  'm8.13.3.total-surface-area': ['fig.prism-unfold', 'fig.prism-3d'],
  'm8.13.4.prism-volume': ['fig.prism-3d'],

  // Class 9 Chapter 1: Area (പരപ്പളവ്)
  'm9.1.1.triangles-same-base-parallels': ['fig.triangles-same-base'],
  'm9.1.2.triangles-same-height-base-split': ['fig.triangle-base-ratio'],
  'm9.1.3.transforming-quadrilaterals': ['fig.triangles-same-base'],
  'm9.1.4.trapezium-and-land-division': ['fig.triangles-same-base'],

  // Class 9 Chapter 2: Decimal Forms (ദശാംശരൂപങ്ങൾ)
  'm9.2.1.fractions-and-terminating-decimals': ['fig.decimal-forms', 'fig.decimals'],
  'm9.2.2.repeating-decimals': ['fig.decimal-forms'],
  'm9.2.3.converting-repeating-decimals': ['fig.decimal-forms', 'fig.fractions'],
  'm9.2.4.non-repeating-decimals-and-approximations': ['fig.decimal-forms'],

  // Class 9 Chapter 3: Pairs of Equations (സമവാക്യജോടികൾ)
  'm9.3.1.formulating-pairs-of-equations': ['fig.linear-systems'],
  'm9.3.2.elimination-method': ['fig.linear-systems', 'fig.equation-transposition'],
  'm9.3.3.substitution-method': ['fig.linear-systems'],
  'm9.3.4.applied-word-problems-pairs': ['fig.linear-systems'],

  // Class 9 Chapter 4: New Numbers (പുതിയ സംഖ്യകൾ)
  'm9.4.1.diagonal-of-square-and-sqrt2': ['fig.root-spiral', 'fig.pythagoras'],
  'm9.4.2.geometric-construction-of-roots': ['fig.root-spiral'],
  'm9.4.3.decimal-approximation-of-roots': ['fig.root-spiral', 'fig.decimals'],
  'm9.4.4.operations-on-surds': ['fig.root-spiral'],

  // Class 9 Chapter 5: Circles (വൃത്തങ്ങൾ)
  'm9.5.1.chords-and-perpendicular-bisector': ['fig.circle-theorems', 'fig.pythagoras'],
  'm9.5.2.chords-and-angles-at-centre': ['fig.circle-theorems'],
  'm9.5.3.angle-in-a-semicircle': ['fig.circle-theorems'],
  'm9.5.4.angle-subtended-by-an-arc': ['fig.circle-theorems'],

  // Class 9 Chapter 6: Parallel Lines (സമാന്തരവരകൾ)
  'm9.6.1.equal-division-of-segments': ['fig.parallel-intercepts-ratio', 'fig.parallel-intercepts'],
  'm9.6.2.proportional-intercepts-theorem': ['fig.parallel-intercepts-ratio'],
  'm9.6.3.midpoint-theorem-in-triangles': ['fig.parallel-intercepts-ratio', 'fig.triangles-same-base'],
  'm9.6.4.medians-and-centroid': ['fig.parallel-intercepts-ratio'],

  // Class 9 Chapter 7: Similar Triangles (സദൃശ ത്രികോണങ്ങൾ)
  'm9.7.1.concept-of-similarity-and-aa': ['fig.similar-triangles'],
  'm9.7.2.sas-and-sss-similarity': ['fig.similar-triangles'],
  'm9.7.3.right-triangle-altitude-similarity': ['fig.similar-triangles', 'fig.pythagoras'],
  'm9.7.4.perimeter-and-area-ratios': ['fig.similar-triangles'],

  // Class 9 Chapter 8: Polynomials (ബഹുപദങ്ങൾ)
  'm9.8.1.algebraic-expressions-and-polynomials': ['fig.polynomial-graph', 'fig.algebraic-terms'],
  'm9.8.2.degree-and-classification': ['fig.polynomial-graph'],
  'm9.8.3.values-and-zeroes-of-polynomials': ['fig.polynomial-graph'],
  'm9.8.4.polynomial-operations-and-geometric-modeling': ['fig.polynomial-graph'],

  // Class 9 Chapter 9: Circle Measures (വൃത്തപ്പരപ്പളവ്)
  'm9.9.1.circumference-and-pi': ['fig.circle-sector'],
  'm9.9.2.area-of-a-circle': ['fig.circle-sector'],
  'm9.9.3.arc-length': ['fig.circle-sector'],
  'm9.9.4.sector-area-and-circular-rings': ['fig.circle-sector'],

  // Class 9 Chapter 10: Real Numbers (രേഖീയസംഖ്യകൾ)
  'm9.10.1.real-numbers-and-number-line': ['fig.real-number-distance', 'fig.negative-number-line'],
  'm9.10.2.absolute-value-and-modulus': ['fig.real-number-distance'],
  'm9.10.3.absolute-value-equations': ['fig.real-number-distance'],
  'm9.10.4.midpoint-and-intervals': ['fig.real-number-distance'],

  // Class 9 Chapter 11: Prisms (സ്തംഭങ്ങൾ)
  'm9.11.1.prism-definition-and-types': ['fig.prism-3d'],
  'm9.11.2.volume-of-prisms': ['fig.prism-3d'],
  'm9.11.3.surface-area-of-prisms': ['fig.prism-unfold'],
  'm9.11.4.cylinder-as-circular-prism': ['fig.cylinder-surface', 'fig.circle-sector'],

  // Class 9 Chapter 12: Proportion (അനുപാതം)
  'm9.12.1.proportional-changes-and-constant': ['fig.proportion-direct-inverse', 'fig.ratio-tape'],
  'm9.12.2.geometric-proportion': ['fig.proportion-direct-inverse', 'fig.similar-triangles'],
  'm9.12.3.direct-proportion-and-linear-equations': ['fig.proportion-direct-inverse'],
  'm9.12.4.inverse-proportion': ['fig.proportion-direct-inverse'],

  // Class 9 Chapter 13: Statistics (സ്ഥിതിവിവരക്കണക്ക്)
  'm9.13.1.arithmetic-mean-and-deviations': ['fig.stat-mean-balance'],
  'm9.13.2.mean-of-frequency-distributions': ['fig.stat-histogram', 'fig.stat-mean-balance'],
  'm9.13.3.grouped-frequency-and-class-marks': ['fig.stat-histogram'],
  'm9.13.4.assumed-mean-method': ['fig.stat-mean-balance'],

  // Class 10 Chapter 1: Arithmetic Sequences (സമാന്തരശ്രേണികൾ)
  'm10.1.1.number-patterns-and-sequences': ['fig.arithmetic-sequence'],
  'm10.1.1.number-sequences-and-common-difference': ['fig.arithmetic-sequence'],
  'm10.1.2.arithmetic-sequence-definition': ['fig.arithmetic-sequence'],
  'm10.1.2.algebraic-form-of-arithmetic-sequence': ['fig.arithmetic-sequence'],
  'm10.1.3.algebraic-form-and-remainders': ['fig.arithmetic-sequence'],
  'm10.1.3.position-difference-and-term-relations': ['fig.arithmetic-sequence'],
  'm10.1.4.position-difference-and-term-difference': ['fig.arithmetic-sequence'],
  'm10.1.4.sum-of-terms-of-arithmetic-sequence': ['fig.arithmetic-sequence'],
  'm10.1.5.term-relations-and-averages': ['fig.arithmetic-sequence'],
  'm10.1.6.sum-of-arithmetic-sequence': ['fig.arithmetic-sequence'],

  // Class 10 Chapter 2: Circles (വൃത്തങ്ങൾ)
  'm10.2.1.angle-in-semicircle': ['fig.circle-theorems', 'fig.pythagoras'],
  'm10.2.1.inscribed-angle-and-central-angle': ['fig.circle-theorems', 'fig.circle-sector'],
  'm10.2.2.inscribed-angle-and-central-angle': ['fig.circle-theorems', 'fig.circle-sector'],
  'm10.2.2.angles-in-same-segment': ['fig.circle-theorems'],
  'm10.2.3.angles-in-same-segment': ['fig.circle-theorems'],
  'm10.2.3.cyclic-quadrilaterals': ['fig.circle-theorems'],
  'm10.2.4.cyclic-quadrilaterals': ['fig.circle-theorems'],
  'm10.2.4.chords-and-intersecting-segments': ['fig.circle-theorems', 'fig.pythagoras'],
  'm10.2.5.intersecting-chords-and-tangents': ['fig.circle-theorems', 'fig.pythagoras'],

  // Class 10 Chapter 3: Mathematics of Chance (സാധ്യതകളുടെ ഗണിതം)
  'm10.3.1.probability-as-measure-of-chance': ['fig.fractions', 'fig.ratio-tape'],
  'm10.3.2.geometric-probability': ['fig.area-rectangle', 'fig.circle-sector'],
  'm10.3.3.pairs-of-events-and-product-rule': ['fig.mult-comm', 'fig.grid-mult'],
  'm10.3.4.complementary-events-and-applications': ['fig.fractions'],

  // Class 10 Chapter 4: Second Degree Equations (രണ്ടാംകൃതി സമവാക്യങ്ങൾ)
  'm10.4.1.square-problems-and-direct-roots': ['fig.square-defn', 'fig.square-root-defn'],
  'm10.4.2.completing-the-square': ['fig.ident-sum-sq', 'fig.square-identity'],
  'm10.4.3.quadratic-formula-and-discriminant': ['fig.ident-diff-two-sq'],
  'm10.4.4.applications-of-quadratic-equations': ['fig.area-rectangle', 'fig.pythagoras'],

  // Class 10 Chapter 5: Trigonometry (ത്രികോണമിതി)
  'm10.5.1.trigonometric-ratios-in-right-triangles': ['fig.pythagoras', 'fig.similar-triangles'],
  'm10.5.2.special-angles-and-values': ['fig.tri-equilateral', 'fig.pythagoras'],
  'm10.5.3.area-of-triangles-and-sine-formula': ['fig.triangles-same-base', 'fig.similar-triangles'],
  'm10.5.4.heights-and-distances': ['fig.pythagoras'],

  // Class 10 Chapter 6: Coordinates (സൂചകസംഖ്യകൾ)
  'm10.6.1.coordinate-axes-and-points': ['fig.negative-number-line', 'fig.polynomial-graph'],
  'm10.6.2.distance-on-parallel-lines': ['fig.real-number-distance', 'fig.negative-number-line'],
  'm10.6.3.distance-formula-in-plane': ['fig.pythagoras', 'fig.real-number-distance'],
  'm10.6.4.geometric-applications-of-coordinates': ['fig.pythagoras', 'fig.area-parallelogram'],

  // Class 10 Chapter 7: Tangents (തൊടുവരകൾ)
  'm10.7.1.tangent-line-and-perpendicular-radius': ['fig.pythagoras', 'fig.circle-theorems'],
  'm10.7.2.tangents-from-an-external-point': ['fig.circle-theorems', 'fig.pythagoras'],
  'm10.7.3.incircle-and-inradius': ['fig.triangles-same-base', 'fig.circle-theorems'],
  'm10.7.4.chord-tangent-theorem-and-segments': ['fig.similar-triangles', 'fig.circle-theorems'],

  // Class 10 Chapter 8: Solids (ഘനരൂപങ്ങൾ)
  'm10.8.1.square-pyramid-dimensions-and-relations': ['fig.pythagoras', 'fig.prism-3d'],
  'm10.8.2.surface-area-and-volume-of-square-pyramid': ['fig.prism-3d', 'fig.pythagoras'],
  'm10.8.3.cone-area-and-volume': ['fig.circle-sector', 'fig.cylinder-surface'],
  'm10.8.4.sphere-and-hemisphere': ['fig.cylinder-surface', 'fig.circle-sector'],

  // Class 10 Chapter 9: Geometry and Algebra (ജ്യാമിതിയും ബീജഗണിതവും)
  'm10.9.1.section-formula-and-ratio-division': ['fig.ratio-tape', 'fig.similar-triangles'],
  'm10.9.2.midpoint-and-centroid': ['fig.triangles-same-base', 'fig.real-number-distance'],
  'm10.9.3.slope-of-a-line': ['fig.linear-systems', 'fig.proportion-direct-inverse'],
  'm10.9.4.equations-of-line-and-circle': ['fig.polynomial-graph', 'fig.circle-theorems'],

  // Class 10 Chapter 10: Polynomials (ബഹുപദങ്ങൾ)
  'm10.10.1.polynomial-functions-and-degree': ['fig.polynomial-graph', 'fig.algebraic-terms'],
  'm10.10.2.remainder-and-factor-theorem': ['fig.polynomial-graph'],
  'm10.10.3.factoring-polynomials': ['fig.ident-product-binomials'],
  'm10.10.4.roots-and-solutions-of-polynomial-equations': ['fig.polynomial-graph'],

  // Class 10 Chapter 11: Statistics (സ്ഥിതിവിവരക്കണക്ക്)
  'm10.11.1.median-of-raw-data': ['fig.stat-mean-balance', 'fig.negative-number-line'],
  'm10.11.2.median-of-frequency-distributions': ['fig.stat-histogram'],
  'm10.11.3.median-of-grouped-distributions': ['fig.stat-histogram'],
  'm10.11.4.comparing-mean-and-median': ['fig.stat-mean-balance', 'fig.stat-histogram'],

  // Foundations (Class 1 to 7)
  's.counting': ['fig.counting'],
  's.addition': ['fig.addition'],
  's.subtraction': ['fig.subtraction'],
  's.zero': ['fig.zero'],
  's.multiplication': ['fig.multiplication'],
  's.mult-properties': ['fig.mult-comm'],
  's.distributive-law': ['fig.distributive-law'],
  's.division': ['fig.division'],
  's.even-odd': ['fig.even-odd'],
  's.factors-multiples': ['fig.factors-multiples'],
  's.prime-composite': ['fig.prime-composite'],
  's.grid-mult': ['fig.grid-mult'],
  's.area-rectangle': ['fig.area-rectangle'],
  's.fractions': ['fig.fractions'],
  's.fraction-ops': ['fig.fraction-ops'],
  's.decimals': ['fig.decimals'],
  's.decimal-ops': ['fig.decimal-ops'],
  's.integers': ['fig.integers'],
  's.powers-exponents': ['fig.powers-exponents'],
  's.laws-of-exponents': ['fig.laws-exponents'],
  's.algebraic-terms': ['fig.algebraic-terms'],
  's.expanding-brackets': ['fig.expanding-brackets'],
  's.pythagoras-theorem': ['fig.pythagoras']
};
