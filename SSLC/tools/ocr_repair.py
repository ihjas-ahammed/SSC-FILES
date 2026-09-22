#!/usr/bin/env python3
import os
import re
import sys
import html
import subprocess
import fitz  # PyMuPDF
from multiprocessing import Pool

CSS_TEMPLATE = """
:root {
  --bg-color: #fcfcfd;
  --card-bg: #ffffff;
  --text-color: #1e293b;
  --text-muted: #64748b;
  --primary-color: #0284c7;
  --primary-light: #e0f2fe;
  --border-color: #e2e8f0;
  --radius: 10px;
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05);
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans Malayalam", "Manjari", "Gayathri", sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: 1.8;
  font-size: 1.1rem;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 860px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 5rem 1.5rem;
}

header {
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--border-color);
}

.badge-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  background: var(--primary-light);
  color: var(--primary-color);
}

.badge-medium {
  background: #fef3c7;
  color: #b45309;
}

.badge-class {
  background: #dcfce7;
  color: #15803d;
}

h1 {
  font-size: 2.1rem;
  font-weight: 800;
  margin: 0.5rem 0 1rem 0;
  line-height: 1.3;
  color: #0f172a;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
  font-size: 0.95rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.nav-bar a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}

.nav-bar a:hover {
  background: var(--primary-light);
  border-color: var(--primary-color);
}

.nav-bar .disabled {
  color: var(--text-muted);
  pointer-events: none;
  border-color: transparent;
  background: transparent;
}

.page-section {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 2rem;
  margin-bottom: 2.5rem;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed var(--border-color);
}

.page-number {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.page-content p {
  margin: 0 0 1.25rem 0;
  white-space: pre-wrap;
  word-break: break-word;
}

.page-content p:last-child {
  margin-bottom: 0;
}

.diagram-card {
  margin: 2rem 0;
  text-align: center;
  background: #f8fafc;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 1rem;
  overflow: hidden;
}

.diagram-card img {
  max-width: 100%;
  height: auto;
  border-radius: calc(var(--radius) - 4px);
  display: inline-block;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
}

.diagram-card figcaption {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.75rem;
  font-weight: 500;
}

footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--border-color);
}
"""

def ocr_page(args):
    pdf_path, p_idx = args
    doc = fitz.open(pdf_path)
    page = doc[p_idx]
    pix = page.get_pixmap(dpi=150)
    img_bytes = pix.tobytes("png")
    
    cmd = ["tesseract", "stdin", "stdout", "-l", "mal+eng", "--tessdata-dir", "tools/tessdata", "--psm", "3"]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    out, err = proc.communicate(input=img_bytes)
    text = out.decode("utf-8", errors="ignore").strip()
    return p_idx + 1, text

def repair_subject_mojibake(pdf_path, cls, lang, subject, chapters_def):
    """
    chapters_def: list of dicts:
      {
        'slug': 'part_1_chapter_01',
        'ch_num': 1,
        'title': 'യൂണിറ്റ് 1: ...',
        'spage': 7,
        'epage': 26
      }
    """
    out_dir = f"extracted/{lang}/class_{cls:02d}/{subject}"
    img_dir = f"{out_dir}/images"
    os.makedirs(img_dir, exist_ok=True)
    
    # Collect all pages to OCR
    pages_to_ocr = []
    for ch in chapters_def:
        for p in range(ch['spage'], ch['epage'] + 1):
            pages_to_ocr.append((pdf_path, p - 1))
            
    print(f"[OCR] Starting parallel OCR for {len(pages_to_ocr)} pages using 4 workers...")
    with Pool(processes=4) as pool:
        ocr_results = dict(pool.map(ocr_page, pages_to_ocr))
    print(f"[OCR] Completed OCR for {len(ocr_results)} pages.")
    
    # Process each chapter
    for ch in chapters_def:
        slug = ch['slug']
        txt_path = f"{out_dir}/{slug}.txt"
        
        # Read existing txt to preserve diagram markers
        existing_diagrams = {} # p -> list of diagram strings
        if os.path.exists(txt_path):
            with open(txt_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            pages_blocks = re.split(r'--- PAGE (\d+) ---', content)
            for idx in range(1, len(pages_blocks), 2):
                p_num = int(pages_blocks[idx])
                p_text = pages_blocks[idx + 1]
                diags = re.findall(r'(\[Diagram:\s*images/[^\s]+\s*\([^)]+\)\])', p_text)
                if diags:
                    existing_diagrams[p_num] = diags
                    
        txt_lines = [f"=== {ch['title']} ===\n"]
        page_sections_html = []
        
        for p in range(ch['spage'], ch['epage'] + 1):
            txt_lines.append(f"--- PAGE {p} ---")
            diags = existing_diagrams.get(p, [])
            diag_cards_html = []
            
            for d in diags:
                txt_lines.append(d)
                m = re.search(r'\[Diagram:\s*(images/[^\s]+)\s*\(([^)]+)\)\]', d)
                if m:
                    d_path, d_id = m.group(1), m.group(2)
                    diag_cards_html.append(f'''
                    <figure class="diagram-card">
                      <img src="{d_path}" alt="{d_id}" loading="lazy">
                      <figcaption>Figure: {d_id}</figcaption>
                    </figure>''')
                    
            page_text = ocr_results.get(p, "").strip()
            if page_text:
                txt_lines.append(page_text)
                p_text_esc = html.escape(page_text)
                paragraphs = p_text_esc.split('\n\n')
                p_html = ''.join(f'<p>{p_graf.replace(chr(10), "<br>")}</p>' for p_graf in paragraphs if p_graf.strip())
            else:
                p_html = '<p><em>[ചിത്രം / വിവരണം മാത്രം]</em></p>' if diag_cards_html else '<p><em>[ശൂന്യമായ താൾ]</em></p>'
                
            page_sections_html.append(f'''
            <section class="page-section" id="page-{p}">
              <div class="page-header">
                <span class="page-number">Page {p}</span>
              </div>
              <div class="page-content">
                {p_html}
                {''.join(diag_cards_html)}
              </div>
            </section>''')
            
        # Write clean txt
        with open(txt_path, 'w', encoding='utf-8') as f:
            f.write('\n\n'.join(txt_lines))
            
    # Now regenerate HTML for all chapters in subject directory
    regenerate_subject_html(cls, lang, subject)
    print(f"[REPAIRED] Class {cls} {lang} {subject} successfully updated with clean Malayalam Unicode!")

def regenerate_subject_html(cls, lang, subject):
    out_dir = f"extracted/{lang}/class_{cls:02d}/{subject}"
    txt_files = sorted([f for f in os.listdir(out_dir) if f.endswith('.txt')])
    
    chapters_meta = []
    for tf in txt_files:
        slug = tf[:-4]
        with open(f"{out_dir}/{tf}", 'r', encoding='utf-8') as f:
            first_line = f.readline().strip()
        m = re.match(r'^===\s*(.*?)\s*===$', first_line)
        title = m.group(1) if m else slug
        chapters_meta.append({'slug': slug, 'title': title})
        
    for i, ch in enumerate(chapters_meta):
        prev_ch = chapters_meta[i - 1] if i > 0 else None
        next_ch = chapters_meta[i + 1] if i + 1 < len(chapters_meta) else None
        
        prev_link = f'<a href="{prev_ch["slug"]}.html">← {prev_ch["title"]}</a>' if prev_ch else '<span class="disabled">← മുൻപത്തേത്</span>'
        next_link = f'<a href="{next_ch["slug"]}.html">{next_ch["title"]} →</a>' if next_ch else '<span class="disabled">അടുത്തത് →</span>'
        
        with open(f"{out_dir}/{ch['slug']}.txt", 'r', encoding='utf-8') as f:
            content = f.read()
            
        pages_raw = re.split(r'--- PAGE (\d+) ---', content)
        page_sections_html = []
        
        for p_idx in range(1, len(pages_raw), 2):
            p_num = pages_raw[p_idx]
            p_body = pages_raw[p_idx + 1].strip()
            
            diag_matches = re.findall(r'\[Diagram:\s*(images/[^\s]+)\s*\(([^)]+)\)\]', p_body)
            p_clean = re.sub(r'\[Diagram:\s*images/[^\s]+\s*\([^)]+\)\]', '', p_body).strip()
            
            diag_html = []
            for d_path, d_id in diag_matches:
                diag_html.append(f'''
                <figure class="diagram-card">
                  <img src="{d_path}" alt="{d_id}" loading="lazy">
                  <figcaption>Figure: {d_id}</figcaption>
                </figure>''')
                
            if p_clean:
                p_clean_esc = html.escape(p_clean)
                paragraphs = p_clean_esc.split('\n\n')
                p_html = ''.join(f'<p>{p_graf.replace(chr(10), "<br>")}</p>' for p_graf in paragraphs if p_graf.strip())
            else:
                p_html = '<p><em>[ചിത്രം / വിവരണം മാത്രം]</em></p>' if diag_html else '<p><em>[ശൂന്യമായ താൾ]</em></p>'
                
            page_sections_html.append(f'''
            <section class="page-section" id="page-{p_num}">
              <div class="page-header">
                <span class="page-number">Page {p_num}</span>
              </div>
              <div class="page-content">
                {p_html}
                {''.join(diag_html)}
              </div>
            </section>''')
            
        html_code = f'''<!DOCTYPE html>
<html lang="{lang}">
<head>
  <meta charset="utf-8">
  <title>{ch['title']} - Class {cls} {subject.replace('_', ' ').capitalize()}</title>
  <style>
{CSS_TEMPLATE}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="badge-row">
        <span class="badge badge-class">Class {cls}</span>
        <span class="badge badge-medium">{"മലയാളം മീഡിയം" if lang == "ml" else "English Medium"}</span>
        <span class="badge">{subject.replace('_', ' ').capitalize()}</span>
      </div>
      <h1>{ch['title']}</h1>
      <div class="nav-bar">
        <a href="index.html">← അധ്യായ സൂചിക</a>
        <span><a href="{ch['slug']}.txt" style="font-size: 0.85rem; color: #64748b; text-decoration: underline;">Plain Text</a></span>
      </div>
    </header>
    <main>
      {''.join(page_sections_html)}
    </main>
    <footer>
      <div class="nav-bar">
        {prev_link}
        <a href="index.html">അധ്യായ സൂചിക</a>
        {next_link}
      </div>
    </footer>
  </div>
</body>
</html>'''
        with open(f"{out_dir}/{ch['slug']}.html", 'w', encoding='utf-8') as f:
            f.write(html_code)
            
    # Rebuild subject index.html
    chapter_items = []
    for ch in chapters_meta:
        chapter_items.append(f'''
            <li style="margin-bottom: 1rem;">
              <a href="{ch['slug']}.html" style="font-size: 1.15rem; font-weight: 600; color: #0284c7; text-decoration: none;">{ch['title']}</a>
              <span style="margin-left: 0.5rem;"><a href="{ch['slug']}.txt" style="font-size: 0.85rem; color: #64748b; text-decoration: underline;">Plain Text</a></span>
            </li>''')
            
    index_html = f'''<!DOCTYPE html>
<html lang="{lang}">
<head>
  <meta charset="utf-8">
  <title>Class {cls} {subject.replace('_', ' ').capitalize()} - അധ്യായങ്ങൾ</title>
  <style>
{CSS_TEMPLATE}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="badge-row">
        <span class="badge badge-class">Class {cls}</span>
        <span class="badge badge-medium">{"മലയാളം മീഡിയം" if lang == "ml" else "English Medium"}</span>
      </div>
      <h1>{subject.replace('_', ' ').capitalize()}</h1>
      <div class="nav-bar"><a href="../index.html">← Class {cls} Portal</a></div>
    </header>
    <main>
      <div class="page-section">
        <h2>അധ്യായങ്ങൾ</h2>
        <ul style="list-style-type: none; padding-left: 0; margin-top: 1.5rem;">
          {''.join(chapter_items)}
        </ul>
      </div>
    </main>
  </div>
</body>
</html>'''
    with open(f"{out_dir}/index.html", 'w', encoding='utf-8') as f:
        f.write(index_html)
