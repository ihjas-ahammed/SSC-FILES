def stars_badge(stars_str):
    if not stars_str:
        return ""
    s = stars_str.replace("*", "★")
    return f'<span class="item-stars" title="Difficulty: {len(s)} stars">{s}</span>'

def make_solution_box(steps_html="", final_answer=""):
    answer_html = f"""
    <div class="final-answer-box">
      <div class="final-answer-title">Final Result / Conclusion:</div>
      <div class="final-answer-content">{final_answer}</div>
    </div>
""" if final_answer else ""

    return f"""
    <div class="solution-card">
      <div class="solution-header">
        <span class="solution-badge">Detailed Step-by-Step Solution</span>
      </div>
      <div class="solution-body">
        <div class="solution-steps">
          {steps_html}
        </div>
        {answer_html}
      </div>
    </div>
"""

def make_example(num, title, body_html, subparts=None, hint=None, diagram_html=None, solution_data=None):
    out = f"""
    <div class="item-card example-card" id="ex-2-{num}">
      <div class="item-head">
        <div class="item-title-group">
          <span class="item-badge badge-example">Example 2.{num}</span>
          <span class="item-title">{title}</span>
        </div>
      </div>
      <div class="item-body">
        {body_html}
"""
    if diagram_html:
        out += diagram_html
    if subparts:
        out += '<ul class="item-parts">\n'
        for label, pcontent in subparts:
            out += f'  <li class="part-item"><span class="part-label">({label})</span><div class="part-content">{pcontent}</div></li>\n'
        out += '</ul>\n'
    if hint:
        out += f'<div class="hint-block"><div class="hint-title">Hint / Context</div>{hint}</div>\n'
    out += "      </div>\n"

    if solution_data:
        out += make_solution_box(
            steps_html=solution_data.get("steps", ""),
            final_answer=solution_data.get("answer", "")
        )

    out += "    </div>\n"
    return out

def make_problem(num, stars, title, body_html, subparts=None, hint=None, diagram_html=None, solution_data=None):
    star_elem = stars_badge(stars)
    out = f"""
    <div class="item-card problem-card" id="prob-2-{num}">
      <div class="item-head">
        <div class="item-title-group">
          <span class="item-badge badge-problem">Problem 2.{num}</span>
          {f'<span class="item-title">{title}</span>' if title else ''}
          {star_elem}
        </div>
      </div>
      <div class="item-body">
        {body_html}
"""
    if diagram_html:
        out += diagram_html
    if subparts:
        out += '<ul class="item-parts">\n'
        for label, pcontent in subparts:
            out += f'  <li class="part-item"><span class="part-label">({label})</span><div class="part-content">{pcontent}</div></li>\n'
        out += '</ul>\n'
    if hint:
        out += f'<div class="hint-block"><div class="hint-title">Hint / Note</div>{hint}</div>\n'
    out += "      </div>\n"

    if solution_data:
        out += make_solution_box(
            steps_html=solution_data.get("steps", ""),
            final_answer=solution_data.get("answer", "")
        )

    out += "    </div>\n"
    return out
