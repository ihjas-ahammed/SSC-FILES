import data from "./src/data/index.js";

const groups = [
  { id: "basics", name: "Counting basics", short: "Basics", color: "#83949e", icon: "·" },
  { id: "binomial", name: "Binomial coefficients", short: "Binomial", color: "#74dfc4", icon: "C" },
  { id: "method", name: "Proof methods", short: "Methods", color: "#a9a0f5", icon: "✦" },
  { id: "recursion", name: "Recursion", short: "Recursion", color: "#e9b573", icon: "↻" },
  { id: "stars", name: "Stars and bars", short: "Stars", color: "#ff86ce", icon: "★" },
  { id: "multinomial", name: "Multinomials", short: "Multinomial", color: "#71c8e6", icon: "Σ" },
];

const symbolNotes = {
  "∑": "Summation Notation",
  "Σ": "Summation Notation",
  "!": "Factorial",
  "∂": "Partial Derivative",
};

const topicGlyphs = {
  basics: "n",
  binomial: "\\binom nk",
  method: "=",
  recursion: "H_k",
  stars: "\\star|",
  multinomial: "\\binom{n}{n_1,n_2}",
};

export default {
  ...data,
  groups,
  symbolNotes,
  topicGlyphs,
  glyphs: {},
  meta: {
    id: "probability-module-1",
    storageKey: "ross-ch1-atlas-v1",
    emblem: "🎲",
    brand: "probability",
    brandSuffix: "atlas",
    course: "Probability",
    qualification: "Ross, A First Course in Probability",
    module: "Module 1",
    subtitle: "Combinatorial analysis · Theoretical exercises",
    description: "Combinatorial Analysis: the hard theoretical exercises",
    exportPrefix: "Probability-Atlas",
    sourceName: "Ross, A First Course in Probability (10e), Ch. 1",
    sourceLocation: "Chapter 1 · Theoretical Exercises",
    sourcePages: 0,
    localOnly: true,
    offlineDownload: "./index.html",
    parentUrl: null,
    sections: [
      { id: "A", label: "Part A", title: "Counting the same thing two ways", tag: "IDENTITIES", hint: "Exercises 8-12, 14" },
      { id: "B", label: "Part B", title: "Recursions and multinomials", tag: "RECURSION", hint: "Exercises 15, 16, 18, 19" },
      { id: "C", label: "Part C", title: "Stars and bars", tag: "SOLUTIONS", hint: "Exercises 20-23" },
    ],
  },
};
