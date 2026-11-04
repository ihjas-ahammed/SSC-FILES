#!/usr/bin/env python3
"""Build a model question paper (HTML + PDF) from a JSON file.

Usage:  python3 build_model_paper.py model-paper-N.json

The JSON file holds the paper; this script holds only the layout.
Outputs, next to the JSON file:  <stem>.html  and  <stem>.pdf
where <stem> is the "stem" field of the JSON (for example ELECTRODYNAMICS-II-MODEL-PAPER-1).

Layout copies the university paper format: a bordered table, a centred bar per
section, a bold instruction line with the ceiling, numbered rows, marks at right.
No name / register-number block.
"""
import json
import pathlib
import shutil
import subprocess
import sys

CHROME_CANDIDATES = ["google-chrome-stable", "google-chrome", "chromium", "chromium-browser"]

CSS = """
  body {
    margin: 0; background: #fff; color: #000;
    font-family: "Times New Roman", Times, "Liberation Serif", serif;
    font-size: 12.5px; line-height: 1.3;
  }
  .sheet { width: 178mm; margin: 0 auto; padding: 4mm 0; }
  .banner { text-align: center; }
  .banner .exam { font-size: 15px; font-weight: bold; }
  .banner .sch { font-size: 14px; font-weight: bold; margin-top: 2px; }
  .banner .mod { font-size: 13px; margin-top: 2px; }
  table.paper { width: 100%; border-collapse: collapse; margin-top: 8px; }
  table.paper td { border: 1px solid #000; padding: 2px 6px; vertical-align: top; }
  table.paper td.bar { text-align: center; font-weight: bold; font-size: 13.5px; padding: 3px; }
  table.paper td.rule { text-align: center; font-weight: bold; font-size: 12px; padding: 3px 7px; }
  table.paper td.meta { font-weight: bold; font-size: 13px; }
  table.paper td.meta.r { text-align: right; white-space: nowrap; }
  table.paper td.n { width: 26px; text-align: center; font-size: 13px; }
  table.paper td.q { font-size: 12.5px; }
  table.paper td.mk { width: 50px; text-align: center; font-weight: bold; font-size: 12px; white-space: nowrap; }
  table.paper tr.sec-start td { border-top: 2px solid #000; }
  @page { size: A4; margin: 12mm 16mm; }
  @media print { body { background: #fff; } .sheet { width: auto; margin: 0; padding: 0; } }
"""


def check(paper: dict) -> None:
    """Print the mark arithmetic and stop on a mismatch with the header."""
    total_ceiling = 0
    for sec in paper["sections"]:
        n = len(sec["questions"])
        ceiling = sec.get("ceiling", n * sec["marks"])
        total_ceiling += ceiling
        print(f'  {sec["name"]}: {n} questions x {sec["marks"]} marks, ceiling {ceiling}')
    print(f'  total ceiling {total_ceiling}, header maximum {paper["max_marks"]}')
    if total_ceiling != paper["max_marks"]:
        sys.exit("ERROR: section ceilings do not add up to the maximum marks")


def render_html(paper: dict) -> str:
    head = paper["title"]
    parts = [
        '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n',
        f'<title>{paper["stem"]}</title>\n',
        "<script>\nwindow.MathJax = {\n  tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] },\n"
        "  svg: { fontCache: 'global' }\n};\n</script>\n",
        '<script async src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>\n',
        f"<style>{CSS}</style>\n</head>\n<body><div class=\"sheet\">\n",
        '<div class="banner">\n',
        f'  <div class="exam">{head["exam"]}</div>\n',
        f'  <div class="sch">{head["subject"]}</div>\n',
        f'  <div class="sch">{head["course"]}</div>\n',
        f'  <div class="mod">{head["module"]}</div>\n',
        "</div>\n",
        '<table class="paper">\n',
        f'  <tr><td class="meta" colspan="2">Maximum Time: {paper["time"]}</td>'
        f'<td class="meta r">Maximum Marks: {paper["max_marks"]}</td></tr>\n',
    ]
    n = 0
    for sec in paper["sections"]:
        parts.append(
            f'  <tr class="sec-start"><td class="bar" colspan="3">{sec["name"]}</td></tr>\n'
            f'  <tr><td class="rule" colspan="3">{sec["rule"]}</td></tr>\n'
        )
        for q in sec["questions"]:
            n += 1
            parts.append(
                f'  <tr><td class="n">{n}</td><td class="q">{q}</td>'
                f'<td class="mk">{sec["marks"]}</td></tr>\n'
            )
    parts.append("</table>\n</div></body>\n</html>\n")
    return "".join(parts), n


def to_pdf(html_path: pathlib.Path, pdf_path: pathlib.Path) -> None:
    chrome = next((shutil.which(c) for c in CHROME_CANDIDATES if shutil.which(c)), None)
    if not chrome:
        sys.exit("ERROR: no Chrome/Chromium found; open the HTML and print to PDF by hand")
    if pdf_path.exists():
        pdf_path.unlink()
    subprocess.run(
        [chrome, "--headless", "--no-sandbox", "--disable-gpu", "--no-pdf-header-footer",
         "--virtual-time-budget=20000", f"--print-to-pdf={pdf_path}", html_path.resolve().as_uri()],
        check=False, timeout=180, capture_output=True,
    )
    if not pdf_path.exists():
        sys.exit("ERROR: PDF was not written")


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    json_path = pathlib.Path(sys.argv[1]).resolve()
    paper = json.loads(json_path.read_text(encoding="utf-8"))
    print(f"Paper: {paper['stem']}")
    check(paper)
    body, n = render_html(paper)
    html_path = json_path.parent / f"{paper['stem']}.html"
    pdf_path = json_path.parent / f"{paper['stem']}.pdf"
    html_path.write_text(body, encoding="utf-8")
    print(f"  wrote {html_path.name} ({n} questions)")
    to_pdf(html_path, pdf_path)
    print(f"  wrote {pdf_path.name}")


if __name__ == "__main__":
    main()
