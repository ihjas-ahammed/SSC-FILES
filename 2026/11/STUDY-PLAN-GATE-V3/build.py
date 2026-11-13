#!/usr/bin/env python3
"""Build the GATE DA V3 adaptive study app.

    python3 build.py [--recut] [--no-cut]

Inputs (read-only): ../STUDY-PLAN-GATE-V1 (units, pages, PYQ sets, PDFs),
../STUDY-PLAN-GATE-V2/data/tiers.json (unit tiers and the 2024-26 question matches),
data/keys.json (official answer keys), pyq/index.json (from tools/crop_pyq.py).
Outputs: cuts/<COURSE>/u<NN>.pdf (one PDF per unit, served from GitHub raw),
data/app-data.json, index.html (single page; question images load from ./pyq/).
"""
import argparse, json, os, re, subprocess, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parents[2]                      # SSC-FILES
V1 = HERE.parent / "STUDY-PLAN-GATE-V1"
V2 = HERE.parent / "STUDY-PLAN-GATE-V2"
REL = lambda p: Path(os.path.relpath(p, REPO)).as_posix()
RAW = "https://raw.githubusercontent.com/ihjas-ahammed/SSC-FILES/main/"

ORDER = ["LA", "PS", "CO", "DB", "PDSA", "ML", "AI", "GA"]
MARKS = {"LA": 33, "CO": 26, "PS": 51, "PDSA": 48, "DB": 39, "ML": 37, "AI": 21, "GA": 45}
PACE = {"LA": 0.4, "PS": 0.4}
SHORT = {"LA": "Linear Algebra", "PS": "Probability & Stats", "CO": "Calculus & Opt.", "DB": "Databases",
         "PDSA": "Programming & DSA", "ML": "Machine Learning", "AI": "Artificial Intelligence", "GA": "General Aptitude"}
PAPER_OF = {"GATE DA 2024": "DA2024", "GATE DA 2025": "DA2025", "GATE DA 2026": "DA2026"}


def dump_v1():
    out = subprocess.run(["node", str(V2 / "src" / "dump_v1.mjs"), str(V1 / "src" / "app" / "js" / "data")],
                         capture_output=True, text=True, check=True).stdout
    return json.loads(out)


def tracked():
    out = subprocess.run(["git", "-C", str(REPO), "ls-files", "-z", "--", "2026/11"], capture_output=True, check=True).stdout
    return set(x.decode() for x in out.split(b"\0") if x)


def pdf_pages(p):
    try:
        out = subprocess.run(["pdfinfo", str(p)], capture_output=True, text=True).stdout
        return int(re.search(r"Pages:\s+(\d+)", out).group(1))
    except Exception:
        return 0


def unit_ranges(cid, pages_map, n_units):
    """{u: (abs_pdf_path, first, last)}; last = next unit's first - 1 in the same file."""
    rows = {int(u): v for u, v in pages_map.items()}
    res, counts = {}, {}
    for u in range(1, n_units + 1):
        v = rows.get(u)
        if not v:
            continue
        path = REPO / v["path"]
        if path not in counts:
            counts[path] = pdf_pages(path)
        first = v["page"]
        nxt = None
        for w in range(u + 1, n_units + 1):
            r = rows.get(w)
            if r and r["path"] == v["path"]:
                if r["page"] > first or (r["page"] == first and w == u + 1):
                    nxt = r["page"]
                break
        last = counts[path] if nxt is None else max(first, nxt - 1)
        if nxt is not None and nxt == first:
            last = first
        res[u] = (path, first, min(last, counts[path] or last))
    # suspected placeholders (page 1 after a later page in the same file): mark as unknown
    for u in list(res):
        p, f, l = res[u]
        prev = res.get(u - 1)
        if f == 1 and prev and prev[0] == p and prev[1] > 1:
            res[u] = (p, None, None)
    return res


def cut(src, first, last, dst, force):
    if dst.exists() and not force and dst.stat().st_mtime > src.stat().st_mtime:
        return
    from pypdf import PdfReader, PdfWriter
    r = PdfReader(str(src))
    w = PdfWriter()
    for i in range(first - 1, last):
        w.add_page(r.pages[i])
    try:
        w.compress_identical_objects(remove_duplicates=True, remove_unreferenced=True)
    except Exception:
        pass
    dst.parent.mkdir(parents=True, exist_ok=True)
    with open(dst, "wb") as f:
        w.write(f)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--recut", action="store_true")
    ap.add_argument("--no-cut", action="store_true")
    a = ap.parse_args()

    d = dump_v1()
    tiers = json.loads((V2 / "data" / "tiers.json").read_text())
    keys = json.loads((HERE / "data" / "keys.json").read_text())
    qidx = json.loads((HERE / "pyq" / "index.json").read_text())
    git = tracked()

    courses, qmap = [], {}       # qmap[paper:n] = {c, m, u?}
    for cid in ORDER:
        S = d["SUBJECTS"][cid]
        n = len(S["units"])
        rng = unit_ranges(cid, d["UNIT_PAGES"][cid], n)
        mods = d["UNIT_MODULE"][cid]
        hours = d["HOURS"][cid]
        units = []
        for i, uu in enumerate(S["units"], 1):
            title = re.sub(r"\s*\(\d+\)\s*$", "", uu["text"]).strip()
            t = tiers.get(cid, {}).get(str(i), {})
            mins = max(10, round(hours[i - 1] * 60 / 1.25 * PACE.get(cid, 0.6) / 5) * 5)
            src, f, l = rng.get(i, (None, None, None))
            entry = {"id": f"{cid}-{i}", "n": i, "t": title, "m": int(mods[i - 1]), "min": mins,
                     "tier": t.get("tier", "C"), "sc": t.get("score", 0), "why": t.get("reason", "")}
            if src is not None:
                entry["src"] = REL(src)
                if f:
                    entry["pg"] = [f, l]
                    dst = HERE / "cuts" / cid / f"u{i:02d}.pdf"
                    if not a.no_cut:
                        cut(src, f, l, dst, a.recut)
                    if dst.exists():
                        entry["cut"] = REL(dst)
            for m in re.finditer(r"(20\d\d) Q\.(\d+)", t.get("reason", "")):
                key = f"DA{m.group(1)}:{m.group(2)}"
                qmap.setdefault(key, {"c": cid, "m": int(mods[i - 1]), "u": []})
                if qmap[key]["c"] == cid and i not in qmap[key]["u"]:
                    qmap[key]["u"].append(i)
            units.append(entry)
        # V1 module PYQ lists (module placement is approximate; unit matches above win)
        for mod, lst in d["GATE_PYQ"][cid].items():
            for e in lst:
                mm = re.search(r"Q\.\s*(\d+)", e.get("t", ""))
                p = PAPER_OF.get(e.get("s"))
                if mm and p:
                    qmap.setdefault(f"{p}:{mm.group(1)}", {"c": cid, "m": int(mod), "u": []})
        mod_titles = {}
        for u in units:
            mod_titles.setdefault(u["m"], u["t"])
        courses.append({"id": cid, "name": S["name"], "short": SHORT[cid], "marks": MARKS[cid],
                        "rev": S.get("revisionBullets", []), "units": units,
                        "mods": sorted(mod_titles)})
        print(f"{cid}: {n} units, {sum(1 for u in units if 'cut' in u)} cut")

    # GA: questions 1-10 of every paper
    for p in ("DA2024", "DA2025", "DA2026"):
        for q in range(1, 11):
            qmap.setdefault(f"{p}:{q}", {"c": "GA", "m": 0, "u": []})

    questions = []
    for p, qs in qidx.items():
        for nq, meta in sorted(qs.items(), key=lambda x: int(x[0])):
            k = keys.get(p, {}).get("q", {}).get(nq)
            mp = qmap.get(f"{p}:{nq}", {})
            questions.append({"id": f"{p}:{nq}", "p": p, "n": int(nq), "img": f"pyq/{p}/q{nq}.webp",
                              "w": meta["w"], "h": meta["h"],
                              "ty": k["type"] if k else None, "key": k["key"] if k else None,
                              "mk": k["marks"] if k else (1 if int(nq) <= 5 or 11 <= int(nq) <= 35 else 2),
                              "c": mp.get("c"), "m": mp.get("m"), "u": mp.get("u", [])})
    mapped = sum(1 for q in questions if q["c"] and q["p"] != "DA2024_SAMPLE")
    print(f"questions: {len(questions)}, mapped to a course: {mapped}")

    # resources explorer
    def node(name):
        return {"n": name, "k": []}

    def add_file(parent, path, name=None):
        real = Path(os.path.realpath(path))
        rel = REL(real) if str(real).startswith(str(REPO)) else None
        if not rel or not (rel in git or rel.startswith(REL(HERE))):
            return
        parent["k"].append({"n": name or path.name, "p": rel, "s": real.stat().st_size, "pg": pdf_pages(real)})

    def add_tree(parent, root):
        for x in sorted(root.iterdir(), key=lambda x: (x.is_file(), x.name.lower())):
            if x.name.startswith(".") or x.name == "__pycache__":
                continue
            if x.is_dir():
                sub = node(x.name)
                add_tree(sub, x)
                if sub["k"]:
                    parent["k"].append(sub)
            elif x.suffix.lower() == ".pdf":
                add_file(parent, x)

    tree = node("Resources")
    topics = node("Topic PDFs (cut by unit)")
    for c in courses:
        cn = node(c["name"])
        for m in c["mods"]:
            mn = node(f"Module {m}")
            for u in c["units"]:
                if u["m"] == m and "cut" in u:
                    p = HERE.parent.parent.parent / u["cut"]
                    mn["k"].append({"n": f"{u['n']:02d} · {u['t']}", "p": u["cut"], "s": p.stat().st_size, "pg": u["pg"][1] - u["pg"][0] + 1, "uid": u["id"]})
            if mn["k"]:
                cn["k"].append(mn)
        topics["k"].append(cn)
    tree["k"].append(topics)
    papers = node("GATE DA papers + answer keys")
    for p in ("DA2026", "DA2025", "DA2024", "DA2024_SAMPLE"):
        add_file(papers, V1 / "PYQ" / f"{p}.pdf", f"{p.replace('_', ' ')} question paper.pdf")
        kp = HERE / "keys" / f"{p}_Keys.pdf"
        if kp.exists():
            add_file(papers, kp, f"{p} official answer key.pdf")
    tree["k"].append(papers)
    for label, sub in (("Module textbooks", V1 / "syllabus"), ("Other GATE papers (CS, MA, EC, EE)", V1 / "PYQ"), ("Reference books", V1 / "books")):
        nd = node(label)
        add_tree(nd, sub)
        if label.startswith("Other"):
            nd["k"] = [k for k in nd["k"] if "k" in k]
        if nd["k"]:
            tree["k"].append(nd)

    data = {"built": subprocess.run(["date", "+%Y-%m-%d"], capture_output=True, text=True).stdout.strip(),
            "raw": RAW, "courses": courses, "questions": questions,
            "keysrc": {p: keys[p].get("source") for p in keys}, "tree": tree,
            "sem6": {"label": "Sem 6 university exams", "exams": ["2027-01-19", "2027-01-20", "2027-01-21", "2027-01-22", "2027-01-25", "2027-01-27"],
                     "prep": ["2027-01-10", "2027-01-27"]}}
    (HERE / "data" / "app-data.json").write_text(json.dumps(data, separators=(",", ":")))

    src = HERE / "src"
    html = (src / "index.html").read_text()
    html = html.replace("/*STYLE*/", (src / "style.css").read_text())
    html = html.replace("/*DATA*/", "window.DATA=" + json.dumps(data, separators=(",", ":")).replace("</", "<\\/") + ";")
    html = html.replace("/*VIEWER*/", (src / "viewer.js").read_text())
    html = html.replace("/*APP*/", (src / "app.js").read_text())
    (HERE / "index.html").write_text(html)
    print(f"index.html {len(html) // 1024} KB")


if __name__ == "__main__":
    main()
