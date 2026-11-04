import fs from "node:fs";
import { segments } from "./solution-segments.mjs";
import { symbolDefinitions } from "./symbol-definitions.mjs";
const file = "source/curriculum-reviewed.json";
const data = JSON.parse(fs.readFileSync(file, "utf8"));
const baselineTerms = JSON.parse(
  fs.readFileSync("source/question-terms.json", "utf8"),
);
const byName = Object.fromEntries(data.concepts.map((c) => [c.name, c]));
function fixMath(text) {
  return text
    .split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$)/g)
    .map((t) =>
      t.startsWith("$") ? t.replace(/\n\s*e(?=\s*[0-9a-z])/g, "\\ne ") : t,
    )
    .join("");
}
for (const c of data.concepts)
  for (const k of ["formal", "linkedFormal", "example", "meaning"])
    c[k] = fixMath(c[k] || "");
for (const q of data.questions)
  for (const k of ["answer", "linkedAnswer"]) q[k] = fixMath(q[k]);
for (const s of symbolDefinitions) {
  if (byName[s.name]) continue;
  const c = {
    ...s,
    id: s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    group: "notation",
    verify: false,
    minutes: 2,
    depth: 0,
    usedIn: [],
    linkedFormal: s.formal,
  };
  data.concepts.push(c);
  byName[c.name] = c;
}
const add = (name, deps, meaning, formal, example, prompt, options) => {
  const c = {
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name,
    group: "spaces",
    symbol: String.raw`\diamond`,
    aliases: [],
    prerequisites: deps,
    meaning,
    formal,
    linkedFormal: formal,
    example,
    minutes: 3,
    depth: 0,
    usedIn: [],
    verify: false,
    check: { prompt, options, correct: 0, explanation: meaning },
  };
  if (byName[name]) Object.assign(byName[name], c);
  else {
    data.concepts.push(c);
    byName[name] = c;
  }
};
add(
  "Negligible Set",
  ["Set", "Real Number", "Basic Algebra"],
  "A set of points whose total length can be made smaller than any positive number.",
  String.raw`A [[Set]] $N$ has zero length if, for every [[Real Number]] $\epsilon>0$, intervals can cover $N$ with total length less than $\epsilon$. Such sets do not change an [[Integral]] when an integrable [[Function]] is changed only on them.`,
  String.raw`A single point can be covered by an interval of length $\epsilon/2$, however small $\epsilon$ is.`,
  "Which set has zero length?",
  [
    "One isolated point",
    "The interval from 0 to 1",
    "Every interval with nonzero width",
  ],
);
add(
  "Almost Everywhere",
  ["Negligible Set", "Function"],
  "A statement may fail at points with zero total length and still hold for the purposes of integration.",
  "Two [[Function|functions]] agree almost everywhere when the [[Set]] where they differ is a [[Negligible Set]]. In $L^2$, such functions represent the same [[Square-Integrable Function]] state.",
  "Changing a function at $x=0$ alone does not change its squared integral.",
  "If two functions differ at just one point, are they the same L² element?",
  [
    "Yes, because they agree almost everywhere",
    "No, because their printed formulas differ",
    "Only if both are zero",
  ],
);
add(
  "Subspace",
  ["Vector Space", "Closure"],
  "A smaller collection inside a vector space that still follows the same addition and scaling rules.",
  String.raw`A subspace $W$ of a [[Vector Space]] $V$ contains the [[Zero Vector]] and is closed under [[Linear Combination|linear combinations]]: $u,v\in W$ implies $au+bv\in W$ for [[Scalar|scalars]] $a,b$.`,
  "The vectors $(x,0)$ form a subspace of the two-dimensional plane.",
  "Which is a subspace of the plane?",
  ["All vectors (x,0)", "All vectors (x,1)", "Only the vector (1,0)"],
);
add(
  "Invariant Subspace",
  ["Subspace", "Linear Operator"],
  "A smaller vector space that an operation never sends you outside.",
  String.raw`A [[Subspace]] $W$ is invariant under a [[Linear Operator]] $A$ when $Aw\in W$ for every $w\in W$.`,
  String.raw`For $A=\operatorname{diag}(2,3)$, the line $(x,0)$ is invariant.`,
  "What does invariant under A mean?",
  [
    "A maps every vector in W back into W",
    "A maps every vector to zero",
    "Every vector in W has length one",
  ],
);
add(
  "Operator Restriction",
  ["Invariant Subspace", "Operator Domain"],
  "Use the same operation while allowing only inputs from a chosen smaller collection.",
  "The restriction $A|_W$ uses a [[Linear Operator]] $A$ only on inputs from an [[Invariant Subspace]] $W$. Its [[Operator Domain]] and outputs lie in $W$.",
  String.raw`Restrict $\operatorname{diag}(2,3)$ to vectors $(x,0)$: the action is multiplication by 2.`,
  "Restricting A to W changes what?",
  [
    "The allowed inputs",
    "The rule for multiplying every vector",
    "The numerical eigenvalues by adding one",
  ],
);
// Keep source wording untouched. Expand the calculations where an intermediate step was missing.
const patches = {
  "Q-B-3": String.raw`1. If $|\phi\rangle=0$, both sides are zero. Otherwise let $s=\langle\phi|\psi\rangle$, $N=\langle\phi|\phi\rangle>0$, $c=s/N$, and $|r\rangle=|\psi\rangle-c|\phi\rangle$.
2. Expand explicitly: $\langle r|r\rangle=\langle\psi|\psi\rangle-c\langle\psi|\phi\rangle-c^*\langle\phi|\psi\rangle+|c|^2N=\langle\psi|\psi\rangle-|s|^2/N$. Positive definiteness gives $0\le\langle r|r\rangle$.
3. Multiply by $N>0$: $|\langle\phi|\psi\rangle|^2\le\langle\phi|\phi\rangle\langle\psi|\psi\rangle$. Equality holds precisely when $r=0$, so nonzero vectors are linearly dependent; a zero vector also gives equality.`,
  "Q-B-5": String.raw`1. For a normalized state $|\psi\rangle$, define $A'=A-\langle A\rangle I$, $B'=B-\langle B\rangle I$, $|\alpha\rangle=A'|\psi\rangle$ and $|\beta\rangle=B'|\psi\rangle$. Here $\langle A\rangle=\langle\psi|A|\psi\rangle$, and $(\Delta A)^2=\langle A^2\rangle-\langle A\rangle^2=\langle\alpha|\alpha\rangle$, with the analogous expression for $B$. Assume finite variances and the necessary operator domains.
2. The Schwarz inequality gives $(\Delta A)^2(\Delta B)^2\ge |z|^2$, where $z=\langle\alpha|\beta\rangle=\langle\psi|A'B'|\psi\rangle$.
3. Hermiticity gives $z^*=\langle B'A'\rangle$, so $z-z^*=\langle[A,B]\rangle$. Thus $\operatorname{Im}z=\langle[A,B]\rangle/(2i)$ and $|z|^2=(\operatorname{Re}z)^2+(\operatorname{Im}z)^2\ge\tfrac14|\langle[A,B]\rangle|^2$.
4. Taking nonnegative square roots yields $\Delta A\,\Delta B\ge\tfrac12|\langle[A,B]\rangle|$.`,
  "Q-B-10": String.raw`1. Let $\{|i\rangle\}$ and $\{|e_j\rangle\}$ be the old and new orthonormal bases. Set $U_{ij}=\langle i|e_j\rangle$, so $|e_j\rangle=\sum_iU_{ij}|i\rangle$. Orthonormality gives $(U^\dagger U)_{mn}=\sum_iU_{im}^*U_{in}=\delta_{mn}$, hence $U$ is unitary.
2. Insert both expansions into each matrix entry: $A'_{mn}=\langle e_m|A|e_n\rangle=\sum_{ij}U_{im}^*\langle i|A|j\rangle U_{jn}=\sum_{ij}U_{im}^*A_{ij}U_{jn}$.
3. Therefore $A'=U^\dagger AU$, and the state coordinates transform as $c'=U^\dagger c$. For a general invertible change-of-basis matrix $S$ that need not be unitary, use $A'=S^{-1}AS$ and $c'=S^{-1}c$.`,
  "Q-C-2": String.raw`(a) Center the observables. For a normalized state $|\psi\rangle$, let $A'=A-\langle A\rangle I$, $B'=B-\langle B\rangle I$, $|\alpha\rangle=A'|\psi\rangle$ and $|\beta\rangle=B'|\psi\rangle$. Assume the required products are defined and variances are finite.

(b) Identify the variances and apply Schwarz. Because $A,B$ are Hermitian, $\langle\alpha|\alpha\rangle=\langle(A')^2\rangle=\langle A^2\rangle-\langle A\rangle^2=(\Delta A)^2$. Similarly $\langle\beta|\beta\rangle=(\Delta B)^2$. Schwarz gives $(\Delta A)^2(\Delta B)^2\ge|\langle A'B'\rangle|^2$.

(c) Separate real and imaginary parts. $A'B'=\tfrac12\{A',B'\}+\tfrac12[A,B]$. The first expectation is real; the second is purely imaginary since $[A,B]^\dagger=-[A,B]$. Define $\operatorname{Cov}(A,B)=\tfrac12\langle\{A',B'\}\rangle=\tfrac12\langle AB+BA\rangle-\langle A\rangle\langle B\rangle$. Hence the full Robertson–Schrödinger relation is $(\Delta A)^2(\Delta B)^2\ge\operatorname{Cov}(A,B)^2+\tfrac14|\langle[A,B]\rangle|^2$.

(d) Obtain the printed bound. Dropping the nonnegative covariance square and taking square roots gives $\Delta A\,\Delta B\ge\tfrac12|\langle[A,B]\rangle|$, the weaker Robertson relation.

(e) Apply to position and momentum. On the common domain where $[\hat x,\hat p_x]=i\hbar I$, normalization gives $\langle[\hat x,\hat p_x]\rangle=i\hbar$. Therefore $\Delta x\,\Delta p_x\ge\hbar/2$. These are standard deviations across repeated preparations, with finite variances assumed.`,
};
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const aliases = [];
for (const c of data.concepts) {
  for (const name of [c.name, ...c.aliases])
    if (
      name.length > 2 &&
      ![
        "inverse",
        "completeness",
        "number",
        "numbers",
        "root",
        "roots",
        "continuous",
      ].includes(name.toLowerCase())
    )
      aliases.push([name, c.name]);
  if (!c.name.endsWith("s")) aliases.push([c.name + "s", c.name]);
}
const replacements = new Map(
  aliases
    .sort((a, b) => b[0].length - a[0].length)
    .map(([a, b]) => [a.toLowerCase(), b]),
);
const pattern = new RegExp(
  "\\b(" +
    [...new Set(aliases.map((a) => a[0]))]
      .sort((a, b) => b.length - a.length)
      .map(escape)
      .join("|") +
    ")\\b",
  "gi",
);
function link(text) {
  return text
    .split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$|\[\[[^\]]+\]\])/g)
    .map((t) =>
      t.startsWith("$") || t.startsWith("[[")
        ? t
        : t.replace(
            pattern,
            (word) => `[[${replacements.get(word.toLowerCase())}|${word}]]`,
          ),
    )
    .join("");
}
function fragments(text) {
  const tokens = text.split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$)/g),
    out = [];
  let current = "";
  for (const token of tokens) {
    if (token.startsWith("$")) {
      current += token;
      continue;
    }
    const chunks = token.split(/(?<=[^\d]\.)\s+(?=[A-Z(])|\n\n|\n(?=\d+\.)/);
    chunks.forEach((s, i) => {
      if (i) {
        out.push(current);
        current = "";
      }
      current += s;
    });
  }
  if (current) out.push(current);
  return out.filter((t) => t.trim());
}
function symbolsIn(text) {
  const math = (text.match(/\$\$[\s\S]*?\$\$|\$[^$]*?\$/g) || []).join(" ");
  return symbolDefinitions
    .filter((s) => {
      if (s.name === "Imaginary Unit")
        return /(^|[^a-zA-Z\\])i(?=[^a-zA-Z]|p(?:x|\\)|\\hbar)/.test(math);
      if (s.name === "Absolute-Value Bars")
        return /\|[^|<>]*\|/.test(
          math
            .replace(/\\langle[^$]*?\\rangle/g, "")
            .replace(/\|[^$]*?\\rangle/g, ""),
        );
      return s.match.some(
        (m) =>
          math.includes(m) || (/[†ℏψφλΔδΣ∫∂∞παβθ]/.test(m) && text.includes(m)),
      );
    })
    .map((s) => s.name);
}
for (const q of data.questions) {
  q.answer = patches[q.id] || q.answer;
  if (segments[q.id]) q.answer = segments[q.id].join("\n\n");
  // All Fourier transforms are on the full line, with explicit limits.
  if (["Q-A-14", "Q-B-11", "Q-B-13", "Q-C-4"].includes(q.id))
    q.answer = q.answer.replace(
      /\\int(?![_a-z])/g,
      "\\int_{-\\infty}^{\\infty}",
    );
  q.answer = q.answer
    .replace(/position completeness/g, "position completeness relation")
    .replace(
      /insert position completeness/gi,
      "insert the position completeness relation",
    );
  q.answer = q.answer.replace(
    /completeness relation(?: relation)+/g,
    "completeness relation",
  );
  q.linkedAnswer = link(q.answer);
  q.symbols = symbolsIn(q.answer + " " + q.text);
  const parts = segments[q.id] || fragments(q.answer),
    count = Math.min(parts.length, q.steps.length),
    blocks = [];
  for (let i = 0; i < count; i++) {
    const from = Math.floor((i * parts.length) / count),
      to = Math.floor(((i + 1) * parts.length) / count);
    const text = parts.slice(from, to).join("\n");
    const checkIndex =
      count === 1 ? 0 : Math.round((i * (q.steps.length - 1)) / (count - 1));
    blocks.push({
      title: `Step ${i + 1}`,
      text: link(text),
      checkIndex,
      hint: q.steps[checkIndex].explanation,
      symbols: symbolsIn(text),
    });
  }
  // Render and export exactly the same complete solution assembled from its unlocks.
  q.solutionBlocks = blocks;
  q.linkedAnswer = blocks.map((b) => b.text).join("\n\n");
  q.answer = q.linkedAnswer.replace(
    /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
    (_, name, label) => label || name,
  );
  q.hints = [
    `Identify the ${q.type === "define" ? "objects and defining properties" : "given information and the result to establish"}.`,
    q.steps[0].prompt,
    `Use the prerequisite notes if a symbol or operation is unfamiliar. Work through ${count} solution checkpoints.`,
  ];
  const linked = [...q.linkedAnswer.matchAll(/\[\[([^\]|]+)/g)].map(
    (m) => m[1],
  );
  const extra =
    q.id === "Q-B-1"
      ? ["Almost Everywhere"]
      : q.id === "Q-C-1"
        ? ["Invariant Subspace", "Operator Restriction"]
        : [];
  q.terms = [
    ...new Set([...baselineTerms[q.id], ...linked, ...q.symbols, ...extra]),
  ];
}
const active = new Set(),
  done = new Set();
function depth(name) {
  if (active.has(name)) throw Error("Cycle " + name);
  const c = byName[name];
  if (!c) throw Error("Missing " + name);
  if (done.has(name)) return c.depth;
  active.add(name);
  c.depth = c.prerequisites.length
    ? 1 + Math.max(...c.prerequisites.map(depth))
    : 0;
  active.delete(name);
  done.add(name);
  return c.depth;
}
data.concepts.forEach((c) => depth(c.name));
function closure(names) {
  const seen = new Set();
  function visit(n) {
    if (seen.has(n)) return;
    seen.add(n);
    byName[n].prerequisites.forEach(visit);
  }
  names.forEach(visit);
  return [...seen];
}
for (const q of data.questions) q.graphTerms = closure(q.terms);
for (const c of data.concepts)
  c.usedIn = data.questions
    .filter((q) => q.graphTerms.includes(c.name))
    .map((q) => q.id);
data.report.created = data.concepts.length + 35;
data.report.reviewed = "2026-10-04";
data.source.references = [
  {
    title: "David Tong: The Formalism of Quantum Mechanics",
    url: "https://www.damtp.cam.ac.uk/user/tong/qm/qmhtml/S3.html",
  },
  {
    title: "MIT 8.05: Uncertainty principle notes",
    url: "https://live.ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf",
  },
];
fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
console.log(
  `Reviewed ${data.questions.length} complete solutions; ${data.concepts.length} concept and symbol notes. Vault progress untouched.`,
);
