/**
 * Experimental handwriting-to-LaTeX layout, in the spirit of Math2LaTeX:
 * segment strokes into symbols, classify each symbol, then read the page
 * the way a person would (baseline, powers, subscripts, fractions, binomials).
 *
 * This file is pure geometry, so it runs and is tested without a browser. The
 * symbol classifier is injected: see handwritingTemplates.js for the in-browser one.
 *
 * A stroke is an array of {x, y} points, y growing downward as on a canvas.
 */

const median = (values, fallback) => {
  if (!values.length) return fallback;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
};

export function boxOf(points) {
  let minx = Infinity,
    miny = Infinity,
    maxx = -Infinity,
    maxy = -Infinity;
  for (const p of points) {
    if (p.x < minx) minx = p.x;
    if (p.x > maxx) maxx = p.x;
    if (p.y < miny) miny = p.y;
    if (p.y > maxy) maxy = p.y;
  }
  return finishBox({ minx, miny, maxx, maxy });
}

function finishBox(b) {
  const w = b.maxx - b.minx,
    h = b.maxy - b.miny;
  return { ...b, w, h, cx: b.minx + w / 2, cy: b.miny + h / 2 };
}

const unionBox = (boxes) =>
  finishBox({
    minx: Math.min(...boxes.map((b) => b.minx)),
    miny: Math.min(...boxes.map((b) => b.miny)),
    maxx: Math.max(...boxes.map((b) => b.maxx)),
    maxy: Math.max(...boxes.map((b) => b.maxy)),
  });

const isBar = (box, unit) => box.h <= Math.max(0.22 * box.w, 2) && box.w > 0.4 * unit;

/** Join strokes that belong to one written symbol (+, =, x, the dot of i, !). */
export function groupStrokes(strokes) {
  const items = strokes.filter((s) => s.length).map((points) => ({ points, box: boxOf(points) }));
  if (!items.length) return [];
  const sizes = items.map((i) => Math.max(i.box.w, i.box.h));
  const unit = median(
    sizes.filter((s) => s > 0),
    40,
  ) || 40;
  items.forEach((i) => (i.bar = isBar(i.box, unit)));
  const parent = items.map((_, i) => i);
  const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  const join = (a, b) => (parent[find(a)] = find(b));
  const margin = 0.08 * unit;
  for (let a = 0; a < items.length; a++) {
    for (let b = a + 1; b < items.length; b++) {
      const A = items[a],
        B = items[b];
      const xOverlap =
        Math.min(A.box.maxx, B.box.maxx) - Math.max(A.box.minx, B.box.minx);
      if (A.bar && B.bar) {
        // Two similar bars stacked closely are an equals sign.
        const wide = Math.max(A.box.w, B.box.w),
          ratio = Math.min(A.box.w, B.box.w) / wide;
        if (
          ratio > 0.55 &&
          Math.abs(A.box.cx - B.box.cx) < 0.4 * wide &&
          Math.abs(A.box.cy - B.box.cy) < 0.7 * wide &&
          Math.abs(A.box.cy - B.box.cy) < 0.9 * unit
        )
          join(a, b);
      } else if (A.bar || B.bar) {
        // A stroke crossing a bar makes a plus sign.
        const bar = A.bar ? A : B,
          other = A.bar ? B : A;
        if (
          other.box.miny < bar.box.cy &&
          other.box.maxy > bar.box.cy &&
          other.box.cx > bar.box.minx - margin &&
          other.box.cx < bar.box.maxx + margin &&
          other.box.h < 2.2 * bar.box.w
        )
          join(a, b);
      } else {
        const yOverlap =
          Math.min(A.box.maxy, B.box.maxy) - Math.max(A.box.miny, B.box.miny);
        if (xOverlap > -margin && yOverlap > -margin) join(a, b);
        else {
          // The dot of i or j (above) and of ! (below) join their stem.
          const [dot, stem] = Math.max(A.box.w, A.box.h) < Math.max(B.box.w, B.box.h) ? [A, B] : [B, A];
          const small = Math.max(dot.box.w, dot.box.h) < 0.3 * unit;
          const inside = Math.abs(dot.box.cx - stem.box.cx) < 0.3 * Math.max(stem.box.w, 0.3 * stem.box.h);
          const above = stem.box.miny - dot.box.maxy;
          const below = dot.box.miny - stem.box.maxy;
          if (small && inside && ((above > -margin && above < 0.45 * unit) || (below > -margin && below < 0.45 * unit && stem.box.h > 0.7 * unit && stem.box.w < 0.35 * stem.box.h)))
            join(a, b);
        }
      }
    }
  }
  const groups = new Map();
  items.forEach((item, i) => {
    const root = find(i);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(item);
  });
  return [...groups.values()]
    .map((members) => ({
      strokes: members.map((m) => m.points),
      box: unionBox(members.map((m) => m.box)),
      bar: members.length === 1 && members[0].bar,
    }))
    .sort((a, b) => a.box.minx - b.box.minx);
}

const NO_SCRIPT = new Set(["+", "-", "=", "(", ",", ".", "<", ">", "\\cdot", "!"]);

function relation(s, base, ref) {
  if (base.bar || NO_SCRIPT.has(base.label)) return null;
  const big = base.label === "\\sum";
  const small = s.h < 0.88 * Math.max(base.h, ref * 0.8);
  if (!small) return null;
  const sideOk = big ? s.cx >= base.minx - 0.2 * base.w && s.cx <= base.maxx + 0.2 * base.w + 0.5 * ref : s.cx > base.cx;
  if (!sideOk) return null;
  if (s.cy < base.cy - 0.2 * base.h && s.maxy < base.cy + 0.25 * base.h) return "sup";
  if (s.cy > base.cy + 0.2 * base.h && s.miny > base.cy - 0.25 * base.h) return "sub";
  return null;
}

// Commands carry a trailing space while building; drop it wherever it is not needed.
const tidy = (latex) =>
  latex
    .replace(/ +/g, " ")
    .replace(/ (?=[{}^_+\-=,()\\]|$)/g, "")
    .trim();

function parseExpression(list) {
  if (!list.length) return "";
  const letters = list.filter((s) => !s.bar && s.label !== "(" && s.label !== ")");
  const ref = median(
    letters.map((s) => s.h),
    40,
  );
  // A bar with something above and something below is a fraction line.
  const candidates = list
    .filter((s) => s.bar)
    .filter((bar) => {
      const inside = list.filter((s) => s !== bar && s.cx >= bar.minx - 0.1 * bar.w && s.cx <= bar.maxx + 0.1 * bar.w);
      return inside.some((s) => s.cy < bar.cy) && inside.some((s) => s.cy > bar.cy);
    })
    .sort((a, b) => b.w - a.w);
  if (candidates.length) {
    const bar = candidates[0];
    const left = [],
      right = [],
      above = [],
      below = [];
    for (const s of list) {
      if (s === bar) continue;
      if (s.cx < bar.minx - 0.1 * bar.w) left.push(s);
      else if (s.cx > bar.maxx + 0.1 * bar.w) right.push(s);
      else (s.cy < bar.cy ? above : below).push(s);
    }
    return tidy(
      `${parseExpression(left)}\\frac{${parseExpression(above)}}{${parseExpression(below)}}${parseExpression(right)}`,
    );
  }
  return tidy(parseSequence(list, ref));
}

function parseSequence(list, ref) {
  const items = [...list].sort((a, b) => a.minx - b.minx);
  let out = "";
  let i = 0;
  while (i < items.length) {
    const s = items[i];
    if (s.label === "(" && s.h > 1.5 * ref) {
      // Tall brackets around two stacked rows are a binomial coefficient.
      const j = items.findIndex((t, k) => k > i && t.label === ")" && t.h > 0.7 * s.h);
      if (j > i + 1) {
        const inner = items.slice(i + 1, j);
        const rows = [...inner].sort((a, b) => a.cy - b.cy);
        let cut = -1,
          widest = 0.2 * s.h;
        for (let k = 1; k < rows.length; k++) {
          const gap = rows[k].miny - Math.max(...rows.slice(0, k).map((r) => r.maxy));
          const centres = rows[k].cy - rows[k - 1].cy;
          if (centres > widest && gap > -0.1 * s.h) {
            widest = centres;
            cut = k;
          }
        }
        if (cut > 0) {
          const top = rows.slice(0, cut),
            bottom = rows.slice(cut);
          out += `\\binom{${parseExpression(top)}}{${parseExpression(bottom)}}`;
          i = j + 1;
          continue;
        }
      }
    }
    out += s.bar ? "-" : s.label.startsWith("\\") ? `${s.label} ` : s.label;
    i++;
    const sups = [],
      subs = [];
    while (i < items.length) {
      const kind = relation(items[i], s, ref);
      if (!kind) break;
      (kind === "sup" ? sups : subs).push(items[i]);
      i++;
    }
    if (subs.length) out += `_{${parseExpression(subs)}}`;
    if (sups.length) out += `^{${parseExpression(sups)}}`;
  }
  return out;
}

/**
 * Strokes in, LaTeX out. `classify(group)` returns the best LaTeX token for a
 * group of strokes, or null when nothing fits.
 */
export function recognize(strokes, classify) {
  const groups = groupStrokes(strokes);
  const symbols = groups.map((g) => {
    const equals = g.strokes.length === 2 && g.strokes.every((s) => isBar(boxOf(s), 1));
    const label = g.bar ? "-" : equals ? "=" : classify(g) || "?";
    return { ...g.box, label, bar: g.bar && label === "-", group: g };
  });
  const unknown = symbols.filter((s) => s.label === "?").length;
  return { latex: parseExpression(symbols), symbols: symbols.length, unknown };
}
