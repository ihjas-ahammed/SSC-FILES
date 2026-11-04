// Pre-renders $...$ and $$...$$ TeX in an HTML file with KaTeX (no JS needed at print time).
// usage: node render.js in.html out.html
const fs = require('fs'), path = require('path');
const katex = require(path.join(__dirname, 'katex', 'katex.js'));
const [, , inp, out] = process.argv;
let html = fs.readFileSync(inp, 'utf8');
let errors = 0;
const r = (tex, display) => {
  try { return katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: false, trust: true }); }
  catch (e) { errors++; console.error('TeX error:', e.message.slice(0, 160)); return `<span style="color:red">[TeX: ${tex}]</span>`; }
};
// skip <svg>...</svg> blocks? No: SVG labels are plain text. Math only in HTML body.
html = html.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => r(t, true));
html = html.replace(/\$([^\$\n]+?)\$/g, (_, t) => r(t.replace(/\\frac(?![a-zA-Z])/g, '\\dfrac'), false));
fs.writeFileSync(out, html);
console.log(`rendered ${path.basename(out)}  TeX errors: ${errors}`);
process.exit(errors ? 1 : 0);
