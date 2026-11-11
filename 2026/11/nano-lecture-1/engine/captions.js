// Kinetic captions. Script syntax per chunk:
//   "Everyone thinks"              plain words
//   "[Claude Code] knows"          orange highlight box (serif italic)
//   "Your {payments.}"             red highlight box
// Each chunk replaces the previous one. Word times come from a word timeline
// (e.g. Whisper output) or are spread evenly when no timeline exists.
import { clamp, ease, inv } from './anim.js';

const norm = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');

const EQUIV = {
  nu: ['new'],
  new: ['nu'],
  nought: ['not'],
  not: ['nought'],
  too: ['two', 'to'],
  two: ['too', 'to'],
  to: ['too', 'two'],
  bohr: ['bor'],
  bohrs: ['bors'],
  davisson: ['davison'],
  n: ['and', 'an'],
};

function matchWord(a, b) {
  if (!a || !b) return false;
  if (a === b || a.startsWith(b) || b.startsWith(a)) return true;
  if (EQUIV[a]?.includes(b) || EQUIV[b]?.includes(a)) return true;
  return false;
}

export function parseChunk(text) {
  const out = [];
  const re = /\[([^\]]+)\]|\{([^}]+)\}|(\S+)/g;
  let m;
  while ((m = re.exec(text))) {
    if (m[1] || m[2]) {
      const kind = m[1] ? 'hl' : 'bad';
      const ws = (m[1] || m[2]).split(/\s+/);
      ws.forEach((w, i) => out.push({ w, kind, groupStart: i === 0, groupEnd: i === ws.length - 1 }));
    } else out.push({ w: m[3], kind: 'plain' });
  }
  return out;
}

// Resolve chunk + word timings.
// chunks: [{ at?, text, end?, times? }]; words: [[word, start, end], ...]
export function timeChunks(chunks, words = [], { wordGap = 0.16, ignoreAt = false } = {}) {
  let ptr = 0;
  // ignoreAt: align purely to the word timeline (design-time `at`/`times`/`end` are ignored)
  if (ignoreAt) chunks = chunks.map(({ at, times, end, ...c }) => c);
  const res = [];
  chunks.forEach((c, cIdx) => {
    let matched = false;
    const toks = parseChunk(c.text);
    const prevChunk = res[cIdx - 1];
    const prevEnd = prevChunk ? (prevChunk.toks?.at(-1)?.t ?? prevChunk.at) : 0;
    let last = c.at ?? (cIdx > 0 ? prevEnd + 0.3 : 0);
    toks.forEach((tk, i) => {
      if (c.times && c.times[i] != null) { tk.t = c.times[i]; last = tk.t; return; }
      let found = -1;
      for (let j = ptr; j < Math.min(words.length, ptr + 8); j++) {
        if (c.at != null && words[j][1] < c.at - 0.35) continue;
        const a = norm(words[j][0]), b = norm(tk.w);
        if (matchWord(a, b)) { found = j; break; }
      }
      if (found >= 0) {
        tk.t = words[found][1];
        ptr = found + 1;
        matched = true;
      } else {
        tk.t = (i === 0 && c.at != null) ? c.at : last + wordGap;
      }
      if (c.at != null && i === 0 && tk.t < c.at) tk.t = c.at;
      last = tk.t;
    });
    const firstMatched = toks.findIndex(tk => tk.t !== undefined && words.some(w => Math.abs(w[1] - tk.t) < 0.001));
    if (firstMatched > 0) {
      for (let i = firstMatched - 1; i >= 0; i--) {
        toks[i].t = Math.max(prevEnd, toks[i + 1].t - wordGap);
      }
    }
    res.push({ ...c, at: c.at ?? toks[0].t, toks, matched });
  });
  res.forEach((c, i) => {
    if (c.end == null) c.end = res[i + 1] ? Math.max(c.at + 0.2, res[i + 1].at) : Infinity;
  });
  return res;
}

export class Captions {
  constructor(el, chunks, opts = {}) {
    this.el = el;
    this.chunks = chunks;
    this.cur = -1;
    this.o = { inDur: 0.26, boxDelay: 0.08, boxDur: 0.22, ...opts };
  }

  build(i) {
    this.el.innerHTML = '';
    this.spans = [];
    if (i < 0) return;
    const line = document.createElement('div');
    line.className = 'cap-line';
    for (const tk of this.chunks[i].toks) {
      const s = document.createElement('span');
      s.className = 'w ' + tk.kind + (tk.groupStart ? ' gs' : '') + (tk.groupEnd ? ' ge' : '');
      const inner = document.createElement('span');
      inner.className = 'wi';
      inner.textContent = tk.w.replace(/'/g, '’');
      if (tk.kind !== 'plain') { const b = document.createElement('i'); b.className = 'box'; s.appendChild(b); }
      s.appendChild(inner);
      line.appendChild(s);
      this.spans.push({ s, inner, box: s.querySelector('.box'), tk });
    }
    this.el.appendChild(line);
  }

  update(t, theme = 'light') {
    let i = -1;
    for (let k = 0; k < this.chunks.length; k++) if (t >= this.chunks[k].at && t < this.chunks[k].end) i = k;
    if (i !== this.cur) { this.cur = i; this.build(i); }
    this.el.dataset.theme = theme;
    if (i < 0) return;
    const { inDur, boxDelay, boxDur } = this.o;
    for (const { s, inner, box, tk } of this.spans) {
      const k = ease.outQuint(inv(tk.t, tk.t + inDur, t));
      const vis = t >= tk.t;
      s.style.visibility = vis ? 'visible' : 'hidden';
      const sc = 1 + 0.38 * (1 - k);
      inner.style.transform = `translateY(${(1 - k) * 10}px) scale(${sc})`;
      inner.style.opacity = (0.25 + 0.75 * k).toFixed(3);
      if (box) {
        const bk = ease.out(inv(tk.t + boxDelay, tk.t + boxDelay + boxDur, t));
        box.style.transform = `scaleX(${bk})`;
        s.style.setProperty('--ink', bk.toFixed(3));
        s.classList.toggle('boxed', bk > 0.55);
      }
    }
  }
}

export const captionCSS = `
.captions{position:absolute;left:48px;right:40px;top:226px;height:80px;pointer-events:none;z-index:5}
.cap-line{display:flex;flex-wrap:nowrap;align-items:center;white-space:nowrap;height:80px}
.captions .w{position:relative;display:inline-flex;align-items:center;margin-right:.26em;font:600 48px/1 'Manrope',sans-serif;letter-spacing:-0.01em;color:var(--fg)}
.captions .wi{display:inline-block;transform-origin:0% 70%;will-change:transform}
.captions .w.hl,.captions .w.bad{font:400 italic 57px/1 'Instrument Serif',serif;letter-spacing:-0.01em;margin-right:0;padding:0 .07em 0 .07em}
.captions .w.hl.ge,.captions .w.bad.ge{margin-right:.2em;padding-right:.12em}
.captions .w.hl.gs,.captions .w.bad.gs{padding-left:.1em}
.captions .w.hl:not(.ge) .wi::after,.captions .w.bad:not(.ge) .wi::after{content:'\\00a0'}
.captions .box{position:absolute;left:0;right:0;top:3px;bottom:-1px;transform-origin:0 50%;transform:scaleX(0);border-radius:3px;z-index:-1}
.captions .hl .box{background:#f47b2b}
.captions .bad .box{background:#e5454f}
.captions .hl .wi{color:#f47b2b}.captions .hl.boxed .wi{color:#1a120c}
.captions .bad .wi{color:#e5454f}.captions .bad.boxed .wi{color:#ffd0cc}
.captions[data-theme=light]{--fg:#1d1916}.captions[data-theme=dark]{--fg:#f4efe8}
.captions .w.plain .wi{text-shadow:0 1px 0 rgba(0,0,0,.02)}
`;
