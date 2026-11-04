import data from "./src/data/module1.js";
const groups = [
  { id: "fermat", name: "Fermat's principle", short: "Fermat", color: "#e9b573", icon: "∫" },
  { id: "surface", name: "Single spherical surface", short: "Surface", color: "#71c8e6", icon: "R" },
  { id: "lens", name: "Thin lens", short: "Lens", color: "#a9a0f5", icon: "f" },
  { id: "newton", name: "Newton's formula", short: "Newton", color: "#ff86ce", icon: "x" },
  { id: "foundations", name: "Foundations", short: "Basics", color: "#83949e", icon: "·" },
];
const topicGlyphs = {
  fermat: "\\int n\\,ds",
  surface: "R",
  lens: "f",
  newton: "x_1x_2",
};
export default {
  ...data,
  groups,
  symbolNotes: {},
  topicGlyphs,
  glyphs: {},
  meta: {
    id: "optics-module-1",
    storageKey: "optics-module1-atlas-v1",
    emblem: "◎",
    brand: "optics",
    brandSuffix: "atlas",
    course: "Optics",
    qualification: "BSc Physics · Semester V",
    module: "Module 1",
    subtitle: "Geometrical optics · Module I",
    description: "Fermat's principle, spherical surfaces and the thin lens",
    exportPrefix: "Optics-Atlas",
    sourceName: "module1.md (CU PHY5B08 Optics PYQs, Nov 2019 to Nov 2025)",
    sourceLocation: "Module I · PYQ and 10-mark practice session",
    sourcePages: 0,
    localOnly: true,
    offlineDownload: "./index.html",
    parentUrl: null,
    sections: [
      { id: "A", label: "Part A", title: "Short answers", tag: "2 MARKS", hint: "Definitions and results" },
      { id: "B", label: "Part B", title: "Problems and derivations", tag: "4 TO 5 MARKS", hint: "Derive, then apply" },
      { id: "C", label: "Part C", title: "10-mark practice session", tag: "PRACTICE", hint: "Four questions, ten marks" },
    ],
  },
};
