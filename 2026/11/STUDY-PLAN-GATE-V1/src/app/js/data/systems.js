/* =========================================================================
   INTERACTIVE GATE SYLLABUS & PYQ ROADMAP SYSTEM LINKS
   ========================================================================= */

export const SYS_BASE = /(^|\.)ssc-data-science-qm\.web\.app$/.test(location.hostname)
  ? ""
  : "https://ssc-data-science-qm.web.app";

export const SYSTEMS = {
  LA: { name: "Linear Algebra Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase1/linear%20algebra/linear-algebra-syllabus.html", modules: ["1", "2", "3", "4"] },
  CO: { name: "Calculus & Optimization Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase1/calculus%20and%20optimization/calculus-and-optimization-syllabus.html", modules: ["1", "2", "3", "4"] },
  PS: { name: "Probability & Statistics Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase1/probability%20and%20statistics/probability-and-statistics-syllabus.html", modules: ["1", "2", "3", "4"] },
  PDSA: { name: "Programming, DSA Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase2/programming%20data%20structures%20and%20algorithms/programming-data-structures-and-algorithms-syllabus.html", modules: ["1", "2", "3", "4"] },
  DB: { name: "Database & Warehousing Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase2/database%20management%20and%20warehousing/database-management-and-warehousing-syllabus.html", modules: ["1", "2", "3", "4"] },
  ML: { name: "Machine Learning Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase3/machine%20learning/machine-learning-syllabus.html", modules: ["1", "2", "3", "4"] },
  AI: { name: "Artificial Intelligence Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase3/artificial%20intelligence/artificial-intelligence-syllabus.html", modules: ["1", "2", "3", "4"] },
  GA: { name: "General Aptitude Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase3/general%20aptitude/general-aptitude-syllabus.html", modules: ["1", "2", "3", "4"] }
};
