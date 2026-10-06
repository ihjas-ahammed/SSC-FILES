import data from "./src/data/index.js";

const groups = [
  { id: "sets", name: "Events and sets", short: "Sets", color: "#83949e", icon: "∪" },
  { id: "axioms", name: "Axioms of probability", short: "Axioms", color: "#74dfc4", icon: "P" },
  { id: "bounds", name: "Bounds and inclusion-exclusion", short: "Bounds", color: "#a9a0f5", icon: "≤" },
  { id: "counting", name: "Counting", short: "Counting", color: "#71c8e6", icon: "C" },
  { id: "recursion", name: "Recursion and induction", short: "Recursion", color: "#e9b573", icon: "↻" },
  { id: "infinite", name: "Infinite sample spaces", short: "Infinite", color: "#ff86ce", icon: "∞" },
];

const symbolNotes = {
  "∑": "Summation Notation",
  "Σ": "Summation Notation",
  "!": "Factorial",
  "∂": "Partial Derivative",
};

const topicGlyphs = {
  sets: "\\cup",
  axioms: "P(E)",
  bounds: "\\le",
  counting: "\\binom nk",
  recursion: "T_n",
  infinite: "\\infty",
};

export default {
  ...data,
  groups,
  symbolNotes,
  topicGlyphs,
  glyphs: {},
  meta: {
    id: "probability-module-2",
    storageKey: "ross-ch2-atlas-v1",
    emblem: "🎲",
    brand: "probability",
    brandSuffix: "atlas",
    course: "Probability",
    qualification: "Ross, A First Course in Probability",
    module: "Module 2",
    subtitle: "Axioms of probability · Theoretical exercises",
    description: "Axioms of Probability: the hard theoretical exercises",
    exportPrefix: "Probability-Atlas-2",
    sourceName: "Ross, A First Course in Probability (10e), Ch. 2",
    sourceLocation: "Chapter 2 · Theoretical Exercises",
    sourcePages: 0,
    localOnly: true,
    offlineDownload: "./index.html",
    parentUrl: null,
    sections: [
      { id: "A", label: "Part A", title: "Events and the axioms", tag: "INEQUALITIES", hint: "Exercises 5, 10, 14, 16; Self-Test 14" },
      { id: "B", label: "Part B", title: "Limits and waiting times", tag: "LIMITS", hint: "Exercises 19, 20; Self-Test 15, 20" },
      { id: "C", label: "Part C", title: "Counting recursions", tag: "RECURSION", hint: "Exercises 8, 17, 18, 21; Self-Test 16" },
    ],
  },
};
