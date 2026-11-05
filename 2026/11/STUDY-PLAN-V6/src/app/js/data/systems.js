/* =========================================================================
   HOSTED INTERACTIVE STUDY SYSTEMS & ANCHOR MAPPINGS
   ========================================================================= */

export const SYS_BASE = /(^|\.)ssc-data-science-qm\.web\.app$/.test(location.hostname)
  ? ""
  : "https://ssc-data-science-qm.web.app";

export const SYSTEMS = {
  SSP: {
    name: "Solid State Physics",
    url: "/SOLID_STATE_1234.html",
    modules: ["1", "2", "3", "4"],
    at: {
      1: "m1-basics", 2: "m1-symmetry", 3: "m1-bravais", 4: "m1-packing", 5: "m1-xrd",
      6: "m2-drude", 7: "m2-fermi", 8: "m2-dos", 9: "m2-fd", 10: "m2-bloch", 11: "m2-dynamics",
      12: "m3-types", 13: "m3-drift", 14: "m3-drift", 15: "m3-carriers", 16: "m3-extrinsic",
      17: "m4-terms", 18: "m4-diapara", 19: "m4-antiferri", 20: "m4-dielectric", 21: "m4-sources", 22: "m4-ferropiezo"
    }
  },
  CO: {
    name: "Convex Optimization (Modules I–IV)",
    url: "/CONVEX_OPTIMIZATION_1234.html",
    modules: ["1", "2", "3", "4"],
    at: {
      1: "m1-dirpartial", 2: "m1-diff", 3: "m1-chain", 4: "m1-stationary", 5: "m1-hessian", 6: "m1-hessian",
      7: "m1-classify", 8: "m1-classify", 9: "m2-affine", 10: "m2-ops", 11: "m2-geninq", 12: "m2-sep",
      13: "m2-dual", 14: "m2-cvxfn", 15: "m2-fnops", 16: "m2-quasi", 17: "m2-kconvex", 18: "m3-opt",
      19: "m3-lp", 20: "m3-qp", 21: "m3-gp", 22: "m3-vector", 23: "m4-dualfn", 24: "m4-saddle", 25: "m4-alt"
    }
  },
  OPT: { name: "Optics Study System", url: "/phy/optics/", modules: ["1", "2", "3", "4"] },
  QM: { name: "Quantum Mechanics Study System", url: "/phy/quantum-mechanics/", modules: ["1", "2", "3", "4"] },
  MS: { name: "Materials Science (Modules I–II)", url: "/MATERIAL_SCIENCE_12.html", modules: ["1", "2"] },
  SEC_PHY: { name: "Python for Data Analysis (Modules I–II)", url: "/PYTHON_12.html", modules: ["1", "2"] },
  SEC_MAT: { name: "LaTeX (Modules I–II)", url: "/LATEX_1.html", modules: ["1", "2"] }
};
