"""Build a transcribed PYQ paper HTML (Abstract Algebra house layout) for any course.
Usage: python3 build_paper.py <data.py>   (data.py defines DATA; see keys below)
"""
import html, runpy, sys, os

OUT_DIR = "/home/ihjas/Documents/GitHub/SSC-FILES/SEM5-PYQ/PROPERTIES-OF-SOLIDS/source/pyq"

def build(d):
    head = open(f"{OUT_DIR}/transcription-head.html", encoding="utf-8").read()
    head = head.replace("<title>Past paper</title>",
                        f"<title>{d['title']}</title>")
    H = d["header"]
    out = [head, ""]
    for pi, blocks in enumerate(d["pages"], 1):
        out.append('<div class="sheet">')
        if pi == 1:
            out.append('<div class="hdr">\n<div class="code">%s</div>\n<div class="pages">(Pages : %s)</div>\n'
                       '<div class="name">Name.................................<br>Reg. No.................................</div>\n</div>'
                       % (H["code"], H["pages"]))
            out.append('<div class="title">\n' + "\n".join(
                f'<div class="tl {c}">{t}</div>' for c, t in H["title"]) + '\n</div>')
            out.append(f'<div class="meta"><span>Time : {H["time"]}</span><span>{H["max"]}</span></div>')
        else:
            out.append(f'<div class="pno">{pi}</div><div class="pno-hdr">{H["code"]}</div>')
        open_sec = False
        for b in blocks:
            kind = b[0]
            if kind == "sec":
                if open_sec: out.append('</div></div>')
                out.append(f'<div class="sec"><div class="sec-title" style="text-align:center">{b[1]}</div>')
                if b[2]:
                    out.append(f'<div class="lead" style="text-align:center;font-style:italic">{b[2]}</div>')
                out.append('<div class="qs">'); open_sec = True
            elif kind == "q":
                out.append(f'<div class="q"><span class="n">{b[1]}</span><p>{b[2]}</p></div>')
            elif kind == "sub":
                out.append(f'<div class="sub" style="margin-bottom:6px">{b[1]}</div>')
            elif kind == "foot":
                out.append(f'<div class="lead" style="text-align:center">{b[1]}</div>')
            elif kind == "turn":
                out.append('<div class="turn">Turn over</div>')
        if open_sec: out.append('</div></div>')
        out.append('</div>')
    out.append("</body>\n</html>\n")
    path = os.path.join(OUT_DIR, d["file"])
    open(path, "w", encoding="utf-8").write("\n".join(out))
    nq = sum(1 for bl in d["pages"] for b in bl if b[0] == "q")
    nums = [b[1] for bl in d["pages"] for b in bl if b[0] == "q"]
    print(path, "| questions:", nq, "| numbers ok:", nums == list(range(nums[0], nums[0] + nq)))

if __name__ == "__main__":
    ns = runpy.run_path(sys.argv[1])
    build(ns["DATA"])
