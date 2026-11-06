#!/usr/bin/env python3
import os
import re
import json

BASE_DIR = "/home/ihjas/Documents/GitHub/SSC-FILES/2026/11/STUDY-PLAN-GATE-V1"
SRC_APP_DATA = os.path.join(BASE_DIR, "src/app/js/data")

COURSES = [
    {
        "id": "LA",
        "phase": 1,
        "role": "Phase 1 · Course 1 (11.0m)",
        "name": "Linear Algebra",
        "shortName": "Linear Algebra",
        "html": os.path.join(BASE_DIR, "syllabus/phase1/linear algebra/linear-algebra-syllabus.html"),
        "theme": { "cardBg": "#EEF2FF", "bannerBg": "#E0E7FF", "border": "#6366F1" },
        "iconId": "icon-solid-state",
        "revisions": [
            "Full revision: Vector spaces, subspaces, linear independence, basis, dimension and rank-nullity (1–9)",
            "Full revision: Linear systems, Gaussian elimination, matrix inverse, determinants and Cramer's rule (10–21)",
            "Full revision: Orthogonal bases, Gram-Schmidt process, projection matrices and least squares (22–31)",
            "Full revision: Eigenvalues, eigenvectors, symmetric diagonalization, positive definiteness and SVD (32–41)"
        ]
    },
    {
        "id": "CO",
        "phase": 1,
        "role": "Phase 1 · Course 2 (8.7m)",
        "name": "Calculus and Optimization",
        "shortName": "Calculus & Opt",
        "html": os.path.join(BASE_DIR, "syllabus/phase1/calculus and optimization/calculus-and-optimization-syllabus.html"),
        "theme": { "cardBg": "#FFFBEB", "bannerBg": "#FEF3C7", "border": "#F59E0B" },
        "iconId": "icon-convex-opt",
        "revisions": [
            "Full revision: Functions, limits, continuity, intermediate value theorem and asymptotic behavior (1–7)",
            "Full revision: Differentiation, product/chain rules, derivatives and Taylor/Maclaurin series expansions (8–16)",
            "Full revision: Mean value theorem, Cauchy MVT, L'Hopital rule, monotonicity and local/global extrema (17–22)",
            "Full revision: Convex sets, strictly convex functions, optimization conditions and gradient descent (23–31)"
        ]
    },
    {
        "id": "PS",
        "phase": 1,
        "role": "Phase 1 · Course 3 (17.0m)",
        "name": "Probability and Statistics",
        "shortName": "Prob & Stats",
        "html": os.path.join(BASE_DIR, "syllabus/phase1/probability and statistics/probability-and-statistics-syllabus.html"),
        "theme": { "cardBg": "#F0F9FF", "bannerBg": "#E0F2FE", "border": "#0EA5E9" },
        "iconId": "icon-electrodynamics",
        "revisions": [
            "Full revision: Permutations, combinations, probability axioms, conditional probability and Bayes' rule (1–6)",
            "Full revision: Discrete random variables: PMF, CDF, Binomial, Poisson, Geometric and Hypergeometric (7–12)",
            "Full revision: Continuous distributions: PDF, Uniform, Normal, Exponential, joint densities and expectations (13–21)",
            "Full revision: Sample statistics, Central Limit Theorem, confidence intervals, MLE and hypothesis testing (22–29)"
        ]
    },
    {
        "id": "PDSA",
        "phase": 2,
        "role": "Phase 2 · Course 4 (16.0m)",
        "name": "Programming, Data Structures & Algorithms",
        "shortName": "Prog & DSA",
        "html": os.path.join(BASE_DIR, "syllabus/phase2/programming data structures and algorithms/programming-data-structures-and-algorithms-syllabus.html"),
        "theme": { "cardBg": "#ECFDF5", "bannerBg": "#D1FAE5", "border": "#10B981" },
        "iconId": "icon-optics",
        "revisions": [
            "Full revision: Python syntax, scope, recursion trees, memory models and execution mechanics (1–26)",
            "Full revision: Linear data structures: arrays, linked lists, stacks, queues, deques and hashing (27–44)",
            "Full revision: Trees, binary tree traversals, BST operations, AVL balance and binary heaps (45–63)",
            "Full revision: Algorithm design: asymptotic notations, divide-and-conquer, sorting, DP and graph traversals (64–94)"
        ]
    },
    {
        "id": "DB",
        "phase": 2,
        "role": "Phase 2 · Course 5 (13.0m)",
        "name": "Database Management and Warehousing",
        "shortName": "DB & Warehousing",
        "html": os.path.join(BASE_DIR, "syllabus/phase2/database management and warehousing/database-management-and-warehousing-syllabus.html"),
        "theme": { "cardBg": "#F0FDFA", "bannerBg": "#CCFBF1", "border": "#14B8A6" },
        "iconId": "icon-materials",
        "revisions": [
            "Full revision: ER-modeling, relational data model, relational algebra operations and tuple calculus (1–21)",
            "Full revision: SQL declarative queries, multi-table joins, subqueries, group by and aggregations (22–39)",
            "Full revision: Normal forms (1NF, 2NF, 3NF, BCNF), functional dependency closure and B+ tree indexing (40–62)",
            "Full revision: Data warehousing, star/snowflake schemas, multidimensional cubes and OLAP operations (63–80)"
        ]
    },
    {
        "id": "ML",
        "phase": 3,
        "role": "Phase 3 · Course 6 (12.3m)",
        "name": "Machine Learning",
        "shortName": "Machine Learning",
        "html": os.path.join(BASE_DIR, "syllabus/phase3/machine learning/machine-learning-syllabus.html"),
        "theme": { "cardBg": "#FAF5FF", "bannerBg": "#F3E8FF", "border": "#A855F7" },
        "iconId": "icon-machine-learning",
        "revisions": [
            "Full revision: Supervised learning taxonomy, linear regression, least squares and logistic regression (1–19)",
            "Full revision: Decision trees, entropy, information gain, Naive Bayes and k-NN classification (20–37)",
            "Full revision: Support Vector Machines (SVMs), margin maximization, kernels and neural networks/MLPs (38–50)",
            "Full revision: Unsupervised learning: k-Means clustering, hierarchical clustering and PCA dimensionality reduction (51–64)"
        ]
    },
    {
        "id": "AI",
        "phase": 3,
        "role": "Phase 3 · Course 7 (7.0m)",
        "name": "Artificial Intelligence",
        "shortName": "Artificial Intelligence",
        "html": os.path.join(BASE_DIR, "syllabus/phase3/artificial intelligence/artificial-intelligence-syllabus.html"),
        "theme": { "cardBg": "#FFF1F2", "bannerBg": "#FFE4E6", "border": "#F43F5E" },
        "iconId": "icon-abstract-algebra",
        "revisions": [
            "Full revision: Problem-solving agents, state space formulation, BFS, DFS, UCS and search optimality (1–9)",
            "Full revision: Informed search: greedy best-first, A* search, heuristic admissibility and consistency (10–17)",
            "Full revision: Adversarial search, Minimax game trees, alpha-beta pruning and constraint satisfaction (18–26)",
            "Full revision: Propositional logic, First-Order Logic quantifiers, inference rules and Bayesian networks (27–44)"
        ]
    },
    {
        "id": "GA",
        "phase": 3,
        "role": "Phase 3 · Course 8 (15.0m)",
        "name": "General Aptitude",
        "shortName": "General Aptitude",
        "html": os.path.join(BASE_DIR, "syllabus/phase3/general aptitude/general-aptitude-syllabus.html"),
        "theme": { "cardBg": "#FEFCE8", "bannerBg": "#FEF9C3", "border": "#EAB308" },
        "iconId": "icon-sec-latex",
        "revisions": [
            "Full revision: Quantitative aptitude: number systems, divisibility, HCF/LCM and percentages (1–8)",
            "Full revision: Quantitative aptitude: ratios, proportions, mensuration, geometry and data interpretation (9–16)",
            "Full revision: Analytical & spatial reasoning: series completion, pattern unfolding and Venn diagrams (17–25)",
            "Full revision: Verbal ability: grammar, vocabulary, sentence completion and reading comprehension (26–29)"
        ]
    }
]

def clean_text(html):
    t = re.sub(r"<[^>]+>", " ", html)
    return re.sub(r"\s+", " ", t).strip()

def format_size(bytes_num):
    if bytes_num < 1024:
        return f"{bytes_num} B"
    elif bytes_num < 1024 * 1024:
        return f"{bytes_num / 1024:.0f} KB"
    else:
        return f"{bytes_num / (1024 * 1024):.1f} MB"

def scan_course_resources(dir_path, rel_dir, mod_units_map):
    """
    Auto-indexes all resources for a course directory:
    - Modular notes (*module-[1..4].pdf or *notes*.pdf without 'textbook')
    - Modular textbook cutouts (*textbook*module-[1..4].pdf)
    - Interactive syllabus HTML (*-syllabus.html)
    - Full reference books and documents
    De-duplicates symlinks and files pointing to identical physical targets.
    """
    modules = {"1": [], "2": [], "3": [], "4": []}
    extra = []
    
    if not os.path.exists(dir_path):
        return {"folder": rel_dir, "modules": modules, "extra": extra}
        
    files = [f for f in os.listdir(dir_path) if not f.startswith(".") and not os.path.isdir(os.path.join(dir_path, f))]
    
    # De-duplicate symlinks pointing to the exact same physical file
    real_map = {}
    for f in files:
        fp = os.path.join(dir_path, f)
        rp = os.path.realpath(fp)
        real_map.setdefault(rp, []).append(f)
        
    chosen_files = []
    for rp, flist in real_map.items():
        # Prefer real physical files over symlinks, and longer descriptive names
        flist.sort(key=lambda x: (not os.path.islink(os.path.join(dir_path, x)), len(x), x), reverse=True)
        chosen_files.append(flist[0])
        
    chosen_files.sort()
    
    for f in chosen_files:
        fp = os.path.join(dir_path, f)
        rel_path = os.path.normpath(os.path.join(rel_dir, f))
        size_bytes = os.path.getsize(fp) if os.path.exists(fp) else 0
        size_str = format_size(size_bytes)
        f_lower = f.lower()
        
        if f_lower.endswith(".html"):
            label = "Interactive Syllabus & PYQ Roadmap" if "syllabus" in f_lower else f.replace("-", " ").replace(".html", "").title()
            extra.append({
                "category": "syllabus",
                "badge": "Syllabus",
                "label": label,
                "name": f,
                "path": rel_path,
                "sizeStr": size_str
            })
            continue
            
        if f_lower.endswith(".pdf"):
            mod_match = re.search(r"(?:module|mod)[-_ ]?([1-4])", f_lower)
            if not mod_match:
                mod_match = re.search(r"[-_ ]m([1-4])[-_ .]", f_lower)
                
            if mod_match:
                m = int(mod_match.group(1))
                m_str = str(m)
                if "textbook" in f_lower or "book" in f_lower:
                    modules[m_str].append({
                        "category": "textbook",
                        "badge": "Textbook",
                        "label": f"Module {m} Textbook Cutout",
                        "name": f,
                        "path": rel_path,
                        "sizeStr": size_str,
                        "units": mod_units_map.get(m, [])
                    })
                else:
                    modules[m_str].append({
                        "category": "notes",
                        "badge": "Notes",
                        "label": f"Module {m} Notes",
                        "name": f,
                        "path": rel_path,
                        "sizeStr": size_str,
                        "units": mod_units_map.get(m, [])
                    })
            else:
                extra.append({
                    "category": "reference",
                    "badge": "Reference",
                    "label": f.replace("-", " ").replace(".pdf", "").title(),
                    "name": f,
                    "path": rel_path,
                    "sizeStr": size_str
                })
                
    # Sort resources within each module: Notes first, then Textbook
    for m_str in modules:
        modules[m_str].sort(key=lambda x: (0 if x["category"] == "notes" else 1, x["label"]))
        
    return {
        "folder": rel_dir,
        "modules": modules,
        "extra": extra
    }

subjects_dict = {}
unit_module_dict = {}
syllabus_hours_map = {}
unit_pages_dict = {}
resources_dict = {}
pyq_dict = {}

REPO_ROOT = "/home/ihjas/Documents/GitHub/SSC-FILES"

for c in COURSES:
    cid = c["id"]
    content = open(c["html"]).read()
    dir_path = os.path.dirname(c["html"])
    rel_dir = os.path.relpath(dir_path, REPO_ROOT)
    
    tables = re.findall(r"<table[^>]*>(.*?)</table>", content, re.DOTALL)
    units = []
    unit_mod_str = ""
    hours_list = []
    unit_pages = {}
    mod_units_map = {1: [], 2: [], 3: [], 4: []}
    
    unit_no = 1
    for mod_idx, table in enumerate(tables):
        mod_no = mod_idx + 1
        rows = re.findall(r"<tr[^>]*>(.*?)</tr>", table, re.DOTALL)
        for r in rows[1:]:
            cells = re.findall(r"<t[dh][^>]*>(.*?)</t[dh]>", r, re.DOTALL)
            if not cells: continue
            
            link_m = re.search(r"href=[\x27\"](\./.*?\.pdf)#page=(\d+)[\x27\"]", r)
            if not link_m:
                link_m = re.search(r"href=[\x27\"](\./.*?\.pdf)[\x27\"]", r)
                pdf_rel = link_m.group(1) if link_m else ""
                page_no = 1
            else:
                pdf_rel = link_m.group(1)
                page_no = int(link_m.group(2))
                
            pdf_path = os.path.normpath(os.path.join(rel_dir, pdf_rel))
            sec_num = clean_text(cells[0])
            title = clean_text(cells[1])
            
            est_h = 1.5
            time_m = re.search(r"(\d+)\s*mins?", r)
            if time_m:
                est_h = round(int(time_m.group(1)) / 60.0, 2)
            elif cid in ["PDSA", "DB", "ML"]:
                est_h = 1.0
            elif cid in ["AI", "GA"]:
                est_h = 1.0
                
            units.append({
                "u": unit_no,
                "text": f"{title} ({unit_no})"
            })
            unit_mod_str += str(mod_no)
            hours_list.append(est_h)
            unit_pages[unit_no] = {
                "page": page_no,
                "path": pdf_path
            }
            mod_units_map[mod_no].append(unit_no)
            unit_no += 1
            
    # Parse PYQ cards
    subj_pyqs = {1: [], 2: [], 3: [], 4: []}
    # Match pyq cards and associate them with modules
    cards = re.findall(r"<div class=[\x27\"]pyq-card[\x27\"]>(.*?)</div>\s*</div>\s*(?:</div>)?", content, re.DOTALL)
    card_idx = 0
    for card_html in cards:
        qid_m = re.search(r"class=[\x27\"]pyq-id[\x27\"]>(.*?)<", card_html)
        qid = clean_text(qid_m.group(1)) if qid_m else f"PYQ-{card_idx+1}"
        mark_m = re.search(r"class=[\x27\"]badge-mark[^\x27\"]*[\x27\"]>(.*?)<", card_html)
        mark_str = clean_text(mark_m.group(1)) if mark_m else "1 Mark"
        k_val = 2 if "2" in mark_str else 1
        
        # Extract year
        y_val = 2024
        if "2026" in qid: y_val = 2026
        elif "2025" in qid: y_val = 2025
        
        # Extract question body
        q_m = re.search(r"class=[\x27\"]pyq-question[\x27\"]>(.*?)</div>", card_html, re.DOTALL)
        q_text = clean_text(q_m.group(1)) if q_m else ""
        q_text = re.sub(r"^Question Statement:\s*", "", q_text)
        
        # Assign to module based on card position or index
        target_mod = min(4, max(1, (card_idx * 4 // len(cards)) + 1)) if cards else 1
        
        subj_pyqs[target_mod].append({
            "id": f"{cid.lower()}-pyq-{card_idx+1}",
            "t": f"{qid} ({mark_str})",
            "y": y_val,
            "m": "Feb",
            "k": k_val,
            "s": f"GATE DA {y_val}",
            "q": q_text[:350]
        })
        card_idx += 1
        
    pyq_dict[cid] = subj_pyqs

    subjects_dict[cid] = {
        "id": cid,
        "stream": "gate_da",
        "role": c["role"],
        "name": c["name"],
        "shortName": c["shortName"],
        "examDate": "2027-02-14",
        "totalUnits": len(units),
        "unitLabel": "units",
        "theme": c["theme"],
        "iconId": c["iconId"],
        "units": units,
        "revisionBullets": c["revisions"]
    }
    unit_module_dict[cid] = unit_mod_str
    syllabus_hours_map[cid] = hours_list
    unit_pages_dict[cid] = unit_pages
    
    # Auto-index resources
    resources_dict[cid] = scan_course_resources(dir_path, rel_dir, mod_units_map)

print("Successfully processed all 8 courses.")

# 1. Write subjects.js
subjects_js_content = f"""/* =========================================================================
   GATE DATA SCIENCE & AI (GATE DA) CURRICULUM & MODULE SPECIFICATION
   Master Exam Date: February 14, 2027 (Single GATE Exam Milestone)
   ========================================================================= */

export const MODULE_LABEL = {{ "1": "I", "2": "II", "3": "III", "4": "IV" }};
export const MOD_ROMAN = {{ "1": "Module I", "2": "Module II", "3": "Module III", "4": "Module IV" }};
export const MODS = ["1", "2", "3", "4"];

export const DEPTS = {{
  gate_da: {{
    label: "GATE Data Science & AI",
    sub: "Math Foundations · Core Systems · Machine Learning & AI",
    ids: ["LA", "CO", "PS", "PDSA", "DB", "ML", "AI", "GA"]
  }}
}};

export const UNIT_MODULE = {json.dumps(unit_module_dict, indent=2)};

export const SYLLABUS_HOURS_MAP = {json.dumps(syllabus_hours_map, indent=2)};

export const SUBJECTS = {json.dumps(subjects_dict, indent=2)};

export const LAST_EXAM = "2027-02-14";
"""
with open(os.path.join(SRC_APP_DATA, "subjects.js"), "w", encoding="utf-8") as f:
    f.write(subjects_js_content)
print(f"Wrote {os.path.join(SRC_APP_DATA, 'subjects.js')}")

# 2. Write unit-pages.js
unit_pages_js = f"""/* =========================================================================
   GATE DA UNIT TO TEXTBOOK CUTOUT PDF PAGE MAPPINGS
   Auto-scroll targets for in-app PDF viewer
   ========================================================================= */

export const UNIT_PAGES = {json.dumps(unit_pages_dict, indent=2)};

export function getUnitPdfInfo(subjectId, unitNumber) {{
  const s = UNIT_PAGES[subjectId];
  if (!s) return null;
  return s[unitNumber] || null;
}}
"""
with open(os.path.join(SRC_APP_DATA, "unit-pages.js"), "w", encoding="utf-8") as f:
    f.write(unit_pages_js)
print(f"Wrote {os.path.join(SRC_APP_DATA, 'unit-pages.js')}")

# 3. Write resources.js
resources_js = f"""/* =========================================================================
   TEXTBOOK PDF CUTOUTS & MODULAR RESOURCES (GATE DA)
   ========================================================================= */

export const RES_RAW = "https://raw.githubusercontent.com/ihjas-ahammed/SSC-FILES/main/";

export const RESOURCES = {json.dumps(resources_dict, indent=2)};
"""
with open(os.path.join(SRC_APP_DATA, "resources.js"), "w", encoding="utf-8") as f:
    f.write(resources_js)
print(f"Wrote {os.path.join(SRC_APP_DATA, 'resources.js')}")

# 4. Write pyq-gate.js
pyq_gate_js = f"""/* =========================================================================
   GATE DA OFFICIAL PREVIOUS YEAR QUESTIONS (PYQ) MAPPINGS (2024–2026)
   ========================================================================= */

export const GATE_PYQ = {json.dumps(pyq_dict, indent=2)};
"""
with open(os.path.join(SRC_APP_DATA, "pyq-gate.js"), "w", encoding="utf-8") as f:
    f.write(pyq_gate_js)
print(f"Wrote {os.path.join(SRC_APP_DATA, 'pyq-gate.js')}")

# 5. Write systems.js
systems_js = f"""/* =========================================================================
   INTERACTIVE GATE SYLLABUS & PYQ ROADMAP SYSTEM LINKS
   ========================================================================= */

export const SYS_BASE = /(^|\\.)ssc-data-science-qm\\.web\\.app$/.test(location.hostname)
  ? ""
  : "https://ssc-data-science-qm.web.app";

export const SYSTEMS = {{
  LA: {{ name: "Linear Algebra Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase1/linear%20algebra/linear-algebra-syllabus.html", modules: ["1", "2", "3", "4"] }},
  CO: {{ name: "Calculus & Optimization Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase1/calculus%20and%20optimization/calculus-and-optimization-syllabus.html", modules: ["1", "2", "3", "4"] }},
  PS: {{ name: "Probability & Statistics Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase1/probability%20and%20statistics/probability-and-statistics-syllabus.html", modules: ["1", "2", "3", "4"] }},
  PDSA: {{ name: "Programming, DSA Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase2/programming%20data%20structures%20and%20algorithms/programming-data-structures-and-algorithms-syllabus.html", modules: ["1", "2", "3", "4"] }},
  DB: {{ name: "Database & Warehousing Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase2/database%20management%20and%20warehousing/database-management-and-warehousing-syllabus.html", modules: ["1", "2", "3", "4"] }},
  ML: {{ name: "Machine Learning Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase3/machine%20learning/machine-learning-syllabus.html", modules: ["1", "2", "3", "4"] }},
  AI: {{ name: "Artificial Intelligence Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase3/artificial%20intelligence/artificial-intelligence-syllabus.html", modules: ["1", "2", "3", "4"] }},
  GA: {{ name: "General Aptitude Syllabus & PYQ", url: "/study-plan-gate/syllabus/phase3/general%20aptitude/general-aptitude-syllabus.html", modules: ["1", "2", "3", "4"] }}
}};
"""
with open(os.path.join(SRC_APP_DATA, "systems.js"), "w", encoding="utf-8") as f:
    f.write(systems_js)
print(f"Wrote {os.path.join(SRC_APP_DATA, 'systems.js')}")
