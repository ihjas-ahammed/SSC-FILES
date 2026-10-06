/**
 * In-browser symbol classifier for the experimental handwriting input.
 *
 * There is no trained network here (the study map must work offline in one
 * file), so symbols are matched against templates drawn from the bundled math
 * fonts. Each handwritten symbol is scaled into a small grid and compared by
 * correlation. It is a best guess: the learner always sees and can edit the LaTeX.
 */
const GRID = 28;

const CLASSES = [
  ..."0123456789".split("").map((c) => ({ label: c, text: c, fonts: ["main", "sans"] })),
  ..."abcdefghijklmnopqrstuvwxyz".split("").map((c) => ({ label: c, text: c, fonts: ["math", "sans"] })),
  ..."NHPRAB".split("").map((c) => ({ label: c, text: c, fonts: ["math", "sans"] })),
  { label: "+", text: "+", fonts: ["main"] },
  { label: "(", text: "(", fonts: ["main", "sans"] },
  { label: ")", text: ")", fonts: ["main", "sans"] },
  { label: ",", text: ",", fonts: ["main"] },
  { label: ".", text: ".", fonts: ["main"] },
  { label: "!", text: "!", fonts: ["main", "sans"] },
  { label: "<", text: "<", fonts: ["main"] },
  { label: ">", text: ">", fonts: ["main"] },
  { label: "/", text: "/", fonts: ["main", "sans"] },
  { label: "\\sum", text: "\u2211", fonts: ["size1"] },
  { label: "\\cdot", text: "\u22C5", fonts: ["main"] },
];

const FONT_CSS = {
  main: '100px KaTeX_Main, "DM Sans", sans-serif',
  math: 'italic 100px KaTeX_Math, "DM Sans", serif',
  sans: '100px "DM Sans", sans-serif',
  size1: '100px KaTeX_Size1, KaTeX_Main, serif',
};

let templates = null;

const canvasOf = (size) => {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  return canvas;
};

/** Scale an ink canvas (any size) into the matching grid, keeping its proportions. */
function normalize(source, box) {
  const grid = canvasOf(GRID),
    ctx = grid.getContext("2d");
  const side = Math.max(box.w, box.h, 1);
  const scale = (GRID - 6) / side;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, GRID, GRID);
  ctx.drawImage(
    source,
    box.x,
    box.y,
    box.w,
    box.h,
    (GRID - box.w * scale) / 2,
    (GRID - box.h * scale) / 2,
    box.w * scale,
    box.h * scale,
  );
  const data = ctx.getImageData(0, 0, GRID, GRID).data;
  const raw = new Float32Array(GRID * GRID);
  for (let i = 0; i < raw.length; i++) raw[i] = data[i * 4] / 255;
  // One box blur so small drawing differences still overlap.
  const out = new Float32Array(raw.length);
  for (let y = 0; y < GRID; y++)
    for (let x = 0; x < GRID; x++) {
      let sum = 0,
        n = 0;
      for (let dy = -1; dy <= 1; dy++)
        for (let dx = -1; dx <= 1; dx++) {
          const xx = x + dx,
            yy = y + dy;
          if (xx >= 0 && yy >= 0 && xx < GRID && yy < GRID) {
            sum += raw[yy * GRID + xx];
            n++;
          }
        }
      out[y * GRID + x] = sum / n;
    }
  const mean = out.reduce((a, b) => a + b, 0) / out.length;
  let norm = 0;
  for (let i = 0; i < out.length; i++) {
    out[i] -= mean;
    norm += out[i] * out[i];
  }
  norm = Math.sqrt(norm) || 1;
  for (let i = 0; i < out.length; i++) out[i] /= norm;
  return { vector: out, aspect: Math.max(box.w, 1) / Math.max(box.h, 1) };
}

async function buildTemplates() {
  await Promise.all(
    Object.values(FONT_CSS).map((css) =>
      document.fonts.load(css, "0an+(\u2211").catch(() => {}),
    ),
  );
  const list = [];
  for (const cls of CLASSES)
    for (const font of cls.fonts) {
      const canvas = canvasOf(200),
        ctx = canvas.getContext("2d");
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, 200, 200);
      ctx.fillStyle = "#fff";
      ctx.font = FONT_CSS[font];
      ctx.textBaseline = "alphabetic";
      ctx.fillText(cls.text, 40, 130);
      // Crop to the ink so the template is scaled like a drawn symbol.
      const { data } = ctx.getImageData(0, 0, 200, 200);
      let minx = 200,
        miny = 200,
        maxx = -1,
        maxy = -1;
      for (let y = 0; y < 200; y++)
        for (let x = 0; x < 200; x++)
          if (data[(y * 200 + x) * 4] > 100) {
            if (x < minx) minx = x;
            if (x > maxx) maxx = x;
            if (y < miny) miny = y;
            if (y > maxy) maxy = y;
          }
      if (maxx < 0) continue;
      const { vector, aspect } = normalize(canvas, {
        x: minx,
        y: miny,
        w: maxx - minx + 1,
        h: maxy - miny + 1,
      });
      list.push({ label: cls.label, vector, aspect });
    }
  return list;
}

/** Draw a group's strokes as thick white lines on black, return the canvas and its ink box. */
function ink(group) {
  const { box } = group;
  const side = Math.max(box.w, box.h, 1);
  const pad = Math.max(8, side * 0.12);
  const width = Math.ceil(box.w + pad * 2),
    height = Math.ceil(box.h + pad * 2);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#fff";
  ctx.fillStyle = "#fff";
  ctx.lineCap = ctx.lineJoin = "round";
  ctx.lineWidth = Math.max(2, side * 0.11);
  for (const stroke of group.strokes) {
    ctx.beginPath();
    stroke.forEach((p, i) => {
      const x = p.x - box.minx + pad,
        y = p.y - box.miny + pad;
      if (i) ctx.lineTo(x, y);
      else ctx.moveTo(x, y);
    });
    if (stroke.length === 1) ctx.lineTo(stroke[0].x - box.minx + pad + 0.1, stroke[0].y - box.miny + pad);
    ctx.stroke();
  }
  const half = ctx.lineWidth / 2;
  return {
    canvas,
    box: {
      x: pad - half,
      y: pad - half,
      w: box.w + ctx.lineWidth,
      h: box.h + ctx.lineWidth,
    },
    // Aspect of the ink itself, without the pen width, decides thin vs round shapes.
    aspect: Math.max(box.w, 1) / Math.max(box.h, 1),
  };
}

/** Ready the templates (fonts must be loaded first). Safe to call repeatedly. */
export async function loadTemplates() {
  if (!templates) templates = await buildTemplates();
  return templates;
}

/** Best label for a stroke group, or null. Needs loadTemplates() to have resolved. */
export function classifyGroup(group, scale = 1) {
  if (!templates) return null;
  const { canvas, box } = ink(group);
  const { vector, aspect } = normalize(canvas, box);
  // Pen width inflates thin symbols; correct the aspect with the true ink size.
  const trueAspect = Math.max(group.box.w, 1) / Math.max(group.box.h, 1);
  void aspect;
  void scale;
  const best = new Map();
  for (const t of templates) {
    let dot = 0;
    for (let i = 0; i < vector.length; i++) dot += vector[i] * t.vector[i];
    const penalty = 0.22 * Math.abs(Math.log(trueAspect / t.aspect));
    const score = dot - penalty;
    if (!best.has(t.label) || score > best.get(t.label)) best.set(t.label, score);
  }
  const ranked = [...best.entries()].sort((a, b) => b[1] - a[1]);
  return ranked.length && ranked[0][1] > 0.15 ? ranked[0][0] : null;
}
