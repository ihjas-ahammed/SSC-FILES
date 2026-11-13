#!/usr/bin/env python3
"""Crop every question of the GATE DA papers into its own image.

    python3 tools/crop_pyq.py [--dpi 130]

Reads ../STUDY-PLAN-GATE-V1/PYQ/DA*.pdf, writes pyq/<PAPER>/q<N>.webp and
pyq/index.json ({paper: {n: {pages, h}}}). A question that runs onto the next
page is stitched from both parts. Uses pdftotext -bbox-layout and pdftoppm.
"""
import argparse, json, re, subprocess, sys, tempfile
from pathlib import Path
from xml.etree import ElementTree as ET
from PIL import Image

HERE = Path(__file__).resolve().parent.parent
V1 = HERE.parent / "STUDY-PLAN-GATE-V1" / "PYQ"
OUT = HERE / "pyq"
PAPERS = ["DA2024", "DA2025", "DA2026", "DA2024_SAMPLE"]
QRE = re.compile(r"^Q\.?\s*(\d+)\b")


def lines_of(pdf):
    xml = subprocess.run(["pdftotext", "-bbox-layout", str(pdf), "-"], capture_output=True, text=True, check=True).stdout
    xml = re.sub(r"<!DOCTYPE[^>]*>", "", xml).replace('xmlns="http://www.w3.org/1999/xhtml"', "")
    xml = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\ufffe\uffff]", "", xml)
    xml = re.sub(r"&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)", "&amp;", xml)
    root = ET.fromstring(xml)
    pages = []
    for pg in root.iter("page"):
        ls = []
        for ln in pg.iter("line"):
            ws = [w for w in ln.iter("word")]
            if not ws:
                continue
            text = " ".join((w.text or "") for w in ws)
            ls.append({"text": text, "x": float(ws[0].get("xMin")), "y0": float(ln.get("yMin")), "y1": float(ln.get("yMax")), "first": (ws[0].text or "")})
        pages.append({"w": float(pg.get("width")), "h": float(pg.get("height")), "lines": ls})
    return pages


def is_header(t):
    return ("carry" in t.lower() and "Q." in t) or re.search(r"^(General Aptitude|Data Science|Organizing|Page \d+ of)", t.strip()) or re.search(r"Page \d+ of \d+", t)


def find_questions(pages):
    """[(n, page_idx, y)] in order; ignores section header lines."""
    found, want = [], 1
    for i, pg in enumerate(pages):
        for ln in sorted(pg["lines"], key=lambda l: l["y0"]):
            m = QRE.match(ln["text"].strip())
            if not m or "carry" in ln["text"].lower() or ln["x"] > 140:
                continue
            n = int(m.group(1))
            if n == want:
                found.append((n, i, ln["y0"]))
                want += 1
    return found


def bounds(pg):
    """Content top/bottom of a page (below the running header, above the footer)."""
    top, bot = 0.0, pg["h"]
    for ln in pg["lines"]:
        t = ln["text"]
        if ln["y0"] < pg["h"] * 0.12 and ("Data Science" in t or "DA" == t.strip()):
            top = max(top, ln["y1"] + 3)
        if ln["y0"] > pg["h"] * 0.85 and (re.search(r"Page \d+ of", t) or "Organizing" in t):
            bot = min(bot, ln["y0"] - 3)
    return top, bot


def stop_before(pg, y_from, y_to):
    """Cut a question's region before any section header that sits inside it."""
    for ln in sorted(pg["lines"], key=lambda l: l["y0"]):
        if y_from + 2 < ln["y0"] < y_to and is_header(ln["text"]) and not ln["text"].startswith("Data Science"):
            return ln["y0"] - 4
    return y_to


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dpi", type=int, default=130)
    a = ap.parse_args()
    index = {}
    for paper in PAPERS:
        pdf = V1 / f"{paper}.pdf"
        if not pdf.exists():
            print("skip", paper); continue
        pages = lines_of(pdf)
        qs = find_questions(pages)
        out = OUT / paper
        out.mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory() as td:
            subprocess.run(["pdftoppm", "-r", str(a.dpi), "-gray", "-png", str(pdf), f"{td}/p"], check=True)
            imgs = sorted(Path(td).glob("p-*.png"))
            index[paper] = {}
            for k, (n, pi, y) in enumerate(qs):
                nxt = qs[k + 1] if k + 1 < len(qs) else None
                parts, p = [], pi
                while True:
                    pg = pages[p]
                    top, bot = bounds(pg)
                    y0 = (y - 5) if p == pi else top
                    y1 = (nxt[2] - 5) if (nxt and nxt[1] == p) else bot
                    y1 = stop_before(pg, y0 + 8, y1)
                    body = [l for l in pg["lines"] if y0 - 1 <= l["y0"] and l["y1"] <= y1 + 1 and not is_header(l["text"])
                            and not re.fullmatch(r"[\W\d_]*", l["text"]) and len(l["text"].strip()) > 1]
                    if body:
                        parts.append((p, y0, min(y1, max(l["y1"] for l in body) + 7)))
                    if nxt is None or nxt[1] == p or p + 1 >= len(pages):
                        break
                    p += 1
                tiles = []
                for (p, y0, y1) in parts:
                    im = Image.open(imgs[p])
                    s = im.width / pages[p]["w"]
                    x0, x1 = int(40 * s), int((pages[p]["w"] - 36) * s)
                    tiles.append(im.crop((x0, int(y0 * s), x1, int(y1 * s))))
                if not tiles:
                    print("WARN no region", paper, n); continue
                W = max(t.width for t in tiles); H = sum(t.height for t in tiles)
                canvas = Image.new("L", (W, H), 255)
                yy = 0
                for t in tiles:
                    canvas.paste(t, (0, yy)); yy += t.height
                # trim blank rows at the bottom
                px = canvas.load(); last = H - 1
                while last > 20 and all(px[x, last] > 245 for x in range(0, W, 4)):
                    last -= 1
                canvas = canvas.crop((0, 0, W, min(H, last + 8)))
                canvas.save(out / f"q{n}.webp", "WEBP", quality=72, method=6)
                index[paper][str(n)] = {"pages": sorted({p + 1 for p, _, _ in parts}), "w": canvas.width, "h": canvas.height}
        print(f"{paper}: {len(qs)} questions")
        if len(qs) != 65:
            print(f"  WARN expected 65, got {len(qs)}: last={qs[-1][0] if qs else None}", file=sys.stderr)
    (OUT / "index.json").write_text(json.dumps(index, indent=1))


if __name__ == "__main__":
    main()
