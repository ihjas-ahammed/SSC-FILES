/* =========================================================================
   HOSTED INTERACTIVE STUDY SYSTEMS & ANCHOR MAPPINGS
   ========================================================================= */

export const SYS_BASE = /(^|\.)ssc-data-science-qm\.web\.app$/.test(location.hostname)
  ? ""
  : "https://ssc-data-science-qm.web.app";

export const SYSTEMS = {
  // Physics
  TH: { name: "Thermodynamics", url: "/phy/thermodynamics/", modules: ["1", "2", "3", "4"] },
  EL2: { name: "Electronics II", url: "/phy/electronics-2/", modules: ["1", "2", "3", "4"] },
  NP: { name: "Nuclear & Particle Physics", url: "/phy/nuclear-physics/", modules: ["1", "2", "3", "4"] },
  NT: { name: "Nanoscience & Technology", url: "/phy/nanoscience/", modules: ["1", "2", "3", "4"] },
  OPTO: { name: "Optoelectronics", url: "/phy/optoelectronics/", modules: ["1", "2", "3", "4"] },
  EPD: { name: "Electrical & Photovoltaic Devices", url: "/phy/epd/", modules: ["1", "2", "3", "4"] },

  // Mathematics
  DE: { name: "Methods of Differential Equations", url: "/math/diff-equations/", modules: ["1", "2", "3", "4"] },
  CA2: { name: "Complex Analysis II", url: "/math/complex-analysis-2/", modules: ["1", "2", "3", "4"] },
  ENT: { name: "Elementary Number Theory", url: "/math/number-theory/", modules: ["1", "2", "3", "4"] },
  AP: { name: "Applied Probability", url: "/math/applied-probability/", modules: ["1", "2", "3", "4"] },
  ML2: { name: "Machine Learning II", url: "/math/machine-learning-2/", modules: ["1", "2", "3", "4"] },
  DSP: { name: "Data Science with Python", url: "/math/data-science-python/", modules: ["1", "2", "3", "4"] }
};
