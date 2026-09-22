#!/usr/bin/env python3
import os
import re
import sys
import html
import requests
import fitz  # PyMuPDF

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

def download_drive_file(file_id, dest_path):
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 10000:
        # Check magic bytes
        with open(dest_path, 'rb') as f:
            if f.read(4) == b'%PDF':
                print(f"[CACHE] {dest_path} already exists and is a valid PDF.")
                return True

    print(f"[DOWNLOAD] Downloading {file_id} to {dest_path}...")
    urls = [
        f"https://drive.usercontent.google.com/download?id={file_id}&confirm=t",
        f"https://drive.google.com/uc?export=download&id={file_id}"
    ]
    
    session = requests.Session()
    headers = {"User-Agent": "Mozilla/5.0"}
    for url in urls:
        try:
            r = session.get(url, headers=headers, stream=True, timeout=60)
            if r.status_code == 200:
                with open(dest_path, 'wb') as f:
                    for chunk in r.iter_content(chunk_size=65536):
                        if chunk:
                            f.write(chunk)
                with open(dest_path, 'rb') as f:
                    if f.read(4) == b'%PDF':
                        print(f"[DOWNLOAD OK] Saved {dest_path} ({os.path.getsize(dest_path)} bytes)")
                        return True
                    else:
                        print(f"[WARN] Downloaded file {dest_path} is not a valid PDF. Retrying...")
                        os.remove(dest_path)
        except Exception as e:
            print(f"[ERROR] Download attempt failed: {e}")
            if os.path.exists(dest_path):
                os.remove(dest_path)
    return False

def slugify(text):
    text = text.lower()
    text = re.sub(r'[\s_]+', '_', text)
    text = re.sub(r'[^a-z0-9_]', '', text)
    return text.strip('_')

def extract_pdf_part(pdf_path, cls, lang, subject, part, start_ch_num=1):
    doc = fitz.open(pdf_path)
    num_pages = len(doc)
    print(f"[EXTRACT] Processing {pdf_path} ({num_pages} pages)...")
    
    out_dir = f"extracted/{lang}/class_{cls:02d}/{subject}"
    img_dir = f"{out_dir}/images"
    os.makedirs(img_dir, exist_ok=True)
    
    toc = doc.get_toc()
    chapters = []
    
    # Analyze TOC
    if toc:
        # Filter top-level items
        l1 = [entry for entry in toc if entry[0] == 1]
        for i, entry in enumerate(l1):
            title = entry[1].strip()
            spage = entry[2]
            # Exclude front matter if spage <= 6 and title matches common front matter keywords
            if spage <= 6 and any(k in title.lower() for k in ['front', 'preface', 'contents', '1-6', 'title', 'ss front']):
                continue
            # End page is next entry start - 1, or last page
            if i + 1 < len(l1):
                epage = min(l1[i+1][2] - 1, num_pages)
            else:
                epage = num_pages
            if epage < spage:
                epage = spage
            chapters.append({'title': title, 'start': spage, 'end': epage})

    # If TOC didn't produce chapters (e.g. empty or only front matter)
    if not chapters:
        print("[INFO] TOC was empty or unhelpful, detecting chapters from text content...")
        # Scan pages for chapter/unit headers
        found_starts = []
        for p in range(num_pages):
            page_text = doc[p].get_text("text")
            lines = [l.strip() for l in page_text.split('\n') if l.strip()]
            for line in lines[:5]:  # Look at first few lines
                if re.search(r'^(?:chapter|unit|അധ്യായം|പാഠം)\s*[\dIVX]+', line, re.I):
                    found_starts.append((p + 1, line))
                    break
        
        if len(found_starts) >= 2:
            for i, (spage, title) in enumerate(found_starts):
                if i + 1 < len(found_starts):
                    epage = found_starts[i+1][0] - 1
                else:
                    epage = num_pages
                chapters.append({'title': title, 'start': spage, 'end': epage})
        else:
            # Fallback: split into ~20-page chunks
            chunk_size = 20
            for spage in range(1, num_pages + 1, chunk_size):
                epage = min(spage + chunk_size - 1, num_pages)
                title = f"Pages {spage}-{epage}"
                chapters.append({'title': title, 'start': spage, 'end': epage})
                
    extracted_chapters = []
    med_title = "English Medium" if lang == "en" else "Malayalam Medium"
    sub_title = subject.replace('_', ' ').capitalize()
    
    current_ch_num = start_ch_num
    for ch in chapters:
        title = ch['title']
        spage = ch['start']
        epage = ch['end']
        
        slug = slugify(title)
        if not slug or slug.isdigit():
            slug = f"{spage}_{epage}"
        filename_base = f"part_{part}_{slug}"
        
        txt_path = f"{out_dir}/{filename_base}.txt"
        html_path = f"{out_dir}/{filename_base}.html"
        
        txt_content = []
        txt_content.append(f"=== {title} ===\n")
        
        page_sections_html = []
        
        for p in range(spage, epage + 1):
            if p > num_pages:
                break
            page_idx = p - 1
            page = doc[page_idx]
            
            txt_content.append(f"--- PAGE {p} ---")
            
            # Extract images on this page
            img_list = page.get_images(full=True)
            diagram_figures_html = []
            
            for img_idx, img_info in enumerate(img_list, start=1):
                xref = img_info[0]
                try:
                    base_img = doc.extract_image(xref)
                    image_bytes = base_img["image"]
                    fig_id = f"fig_ch{current_ch_num:02d}_p{p:03d}_{img_idx:02d}"
                    fig_filename = f"{fig_id}.jpg"
                    fig_full_path = f"{img_dir}/{fig_filename}"
                    
                    # Convert to JPG via fitz pixmap to ensure standard RGB JPEG
                    pix = fitz.Pixmap(doc, xref)
                    if pix.n >= 5: # CMYK
                        pix = fitz.Pixmap(fitz.csRGB, pix)
                    pix.save(fig_full_path)
                    
                    txt_content.append(f"[Diagram: images/{fig_filename} ({fig_id})]")
                    diagram_figures_html.append(
                        f'  <figure class="diagram-card" id="{fig_id}">'
                        f'<img src="images/{fig_filename}" alt="Figure {fig_id} (Page {p})" loading="lazy" />'
                        f'<figcaption>Figure {fig_id} (Page {p})</figcaption></figure>'
                    )
                except Exception as e:
                    # Ignore corrupted/unextractable embedded objects
                    pass
            
            # Extract text
            page_text = page.get_text("text")
            paragraphs = [para.strip() for para in page_text.split("\n\n") if para.strip()]
            
            for para in paragraphs:
                txt_content.append(para)
            txt_content.append("")
            
            # Build section HTML
            p_html_parts = []
            for para in paragraphs:
                escaped = html.escape(para).replace('\n', '<br>')
                p_html_parts.append(f"    <p>{escaped}</p>")
            
            diagrams_str = "\n".join(diagram_figures_html)
            if diagrams_str:
                diagrams_str = "\n" + diagrams_str
            paragraphs_str = "\n".join(p_html_parts)
            
            page_sections_html.append(
                f'<section class="page-section" id="page-{p}">\n'
                f'  <div class="page-header"><span class="page-number">Page {p}</span></div>'
                f'{diagrams_str}\n'
                f'  <div class="page-content">\n'
                f'{paragraphs_str}\n'
                f'  </div>\n'
                f'</section>'
            )
            
        with open(txt_path, 'w', encoding='utf-8') as f:
            f.write("\n".join(txt_content))
            
        extracted_chapters.append({
            'title': title,
            'filename_base': filename_base,
            'page_sections': "\n".join(page_sections_html),
            'part': part,
            'ch_num': current_ch_num
        })
        current_ch_num += 1
        
    return extracted_chapters

def render_chapter_html(ch, prev_ch, next_ch, cls, lang, subject):
    med_title = "English Medium" if lang == "en" else "Malayalam Medium"
    sub_title = subject.replace('_', ' ').capitalize()
    
    prev_link = f'<a href="{prev_ch["filename_base"]}.html">← {html.escape(prev_ch["title"])}</a>' if prev_ch else '<span class="nav-bar disabled"></span>'
    next_link = f'<a href="{next_ch["filename_base"]}.html">{html.escape(next_ch["title"])} →</a>' if next_ch else '<span class="nav-bar disabled"></span>'
    
    return f"""<!DOCTYPE html>
<html lang="{lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{html.escape(ch["title"])} - Class {cls} {sub_title}</title>
  <style>
{CSS_TEMPLATE}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="badge-row">
        <span class="badge badge-class">Class {cls}</span>
        <span class="badge badge-medium">{med_title}</span>
        <span class="badge">{sub_title}</span>
        <span class="badge">Part {ch["part"]}</span>
      </div>
      <h1>{html.escape(ch["title"])}</h1>
      <div class="nav-bar">{prev_link}<a href="index.html">☰ Index</a>{next_link}</div>
    </header>
    <main>
{ch["page_sections"]}
    </main>
    <footer>
      <div class="nav-bar">{prev_link}<a href="index.html">☰ Index</a>{next_link}</div>
    </footer>
  </div>
</body>
</html>
"""

def update_subject_index(cls, lang, subject, all_chapters):
    out_dir = f"extracted/{lang}/class_{cls:02d}/{subject}"
    sub_title = subject.replace('_', ' ').capitalize()
    med_title = "English Medium" if lang == "en" else "Malayalam Medium"
    
    items_html = []
    for ch in all_chapters:
        items_html.append(f"""
                    <li style="margin-bottom: 1rem;">
                      <a href="{ch['filename_base']}.html" style="font-size: 1.15rem; font-weight: 600; color: #0284c7; text-decoration: none;">{html.escape(ch['title'])}</a>
                      <span style="margin-left: 0.5rem;"><a href="{ch['filename_base']}.txt" style="font-size: 0.85rem; color: #64748b; text-decoration: underline;">Plain Text</a></span>
                    </li>
        """)
        
    index_html = f"""<!DOCTYPE html>
<html lang="{lang}">
<head>
  <meta charset="utf-8">
  <title>Class {cls} {sub_title} - Chapters</title>
  <style>
{CSS_TEMPLATE}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="badge-row">
        <span class="badge badge-class">Class {cls}</span>
        <span class="badge badge-medium">{med_title}</span>
      </div>
      <h1>{sub_title}</h1>
      <div class="nav-bar"><a href="../index.html">← Class {cls} Portal</a></div>
    </header>
    <main>
      <div class="page-section">
        <h2>Chapters</h2>
        <ul style="list-style-type: none; padding-left: 0; margin-top: 1.5rem;">
          {"".join(items_html)}
        </ul>
      </div>
    </main>
  </div>
</body>
</html>
"""
    with open(f"{out_dir}/index.html", 'w', encoding='utf-8') as f:
        f.write(index_html)

def update_class_portal_index(cls, lang):
    cls_dir = f"extracted/{lang}/class_{cls:02d}"
    med_title = "English Medium" if lang == "en" else "Malayalam Medium"
    
    # Find all subjects in this class directory
    subjects = sorted([d for d in os.listdir(cls_dir) if os.path.isdir(os.path.join(cls_dir, d))])
    
    sections = []
    for sub in subjects:
        sub_dir = os.path.join(cls_dir, sub)
        # Count chapters
        html_files = [f for f in os.listdir(sub_dir) if f.endswith('.html') and f != 'index.html']
        sub_title = sub.replace('_', ' ').capitalize()
        sections.append(f"""
                <div class="page-section" style="margin-bottom: 1.5rem;">
                  <h2 style="margin-top: 0;"><a href="{sub}/index.html" style="color: #0284c7; text-decoration: none;">{sub_title}</a></h2>
                  <p style="color: #64748b; margin-bottom: 1rem;">{len(html_files)} Chapters</p>
                  <a href="{sub}/index.html" style="display: inline-block; padding: 0.4rem 0.8rem; background: #e0f2fe; color: #0284c7; border-radius: 6px; font-weight: 600; text-decoration: none;">Explore Chapters →</a>
                </div>
        """)
        
    cls_html = f"""<!DOCTYPE html>
<html lang="{lang}">
<head>
  <meta charset="utf-8">
  <title>Class {cls} - {med_title}</title>
  <style>
{CSS_TEMPLATE}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="badge-row">
        <span class="badge badge-class">Class {cls}</span>
        <span class="badge badge-medium">{med_title}</span>
      </div>
      <h1>Class {cls} Textbooks</h1>
      <div class="nav-bar"><a href="../../index.html">← Master Portal</a></div>
    </header>
    <main>
      {"".join(sections)}
    </main>
  </div>
</body>
</html>
"""
    with open(f"{cls_dir}/index.html", 'w', encoding='utf-8') as f:
        f.write(cls_html)

def update_root_index():
    # Reads extracted/index.html and updates subject list strings
    # We inspect extracted/en and extracted/ml for each class
    for lang in ['en', 'ml']:
        for c in range(1, 11):
            cls_dir = f"extracted/{lang}/class_{c:02d}"
            if not os.path.exists(cls_dir):
                continue
            subs = sorted([d.replace('_', ' ').capitalize() for d in os.listdir(cls_dir) if os.path.isdir(os.path.join(cls_dir, d))])
            subs_str = ", ".join(subs)
            
            with open("extracted/index.html", 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Replace pattern for this class link
            pattern = rf'(<li><a href="{lang}/class_{c:02d}/index\.html"[^>]*>.*?</a>\s*<span[^>]*>)\([^<]*\)(</span></li>)'
            repl = rf'\g<1>({subs_str})\g<2>'
            new_content = re.sub(pattern, repl, content)
            
            with open("extracted/index.html", 'w', encoding='utf-8') as f:
                f.write(new_content)

def process_subject(cls, lang, subject, parts_info):
    """
    parts_info: list of (part_number, drive_file_id)
    """
    print(f"\n========================================================")
    print(f" PROCESSING: Class {cls} | {lang} | {subject}")
    print(f"========================================================")
    
    all_chapters = []
    ch_num = 1
    
    for part, drive_id in parts_info:
        pdf_path = f"PDFs/Class_{cls:02d}/{lang}/{subject}/{subject}_part_{part}.pdf"
        ok = download_drive_file(drive_id, pdf_path)
        if not ok:
            print(f"[FATAL] Failed to download Part {part} for Class {cls} {lang} {subject}")
            continue
            
        chapters = extract_pdf_part(pdf_path, cls, lang, subject, part, start_ch_num=ch_num)
        ch_num += len(chapters)
        all_chapters.extend(chapters)
        
        # Remove PDF after extraction to save disk space
        try:
            os.remove(pdf_path)
            print(f"[CLEANUP] Removed temporary PDF: {pdf_path}")
        except:
            pass

    # Render HTML chapters with next/prev links
    out_dir = f"extracted/{lang}/class_{cls:02d}/{subject}"
    for i, ch in enumerate(all_chapters):
        prev_ch = all_chapters[i - 1] if i > 0 else None
        next_ch = all_chapters[i + 1] if i + 1 < len(all_chapters) else None
        html_code = render_chapter_html(ch, prev_ch, next_ch, cls, lang, subject)
        with open(f"{out_dir}/{ch['filename_base']}.html", 'w', encoding='utf-8') as f:
            f.write(html_code)
            
    # Update subject index
    update_subject_index(cls, lang, subject, all_chapters)
    # Update class portal index
    update_class_portal_index(cls, lang)
    # Update master index
    update_root_index()
    print(f"[DONE] Successfully completed Class {cls} {lang} {subject} ({len(all_chapters)} chapters)")

DATASET = {
    4: [
        ('en', 'social_science', [(1, '1qAtzrnWOwW2KlT45qgmQGEyJoYvi-Cq2'), (2, '1TcUL5Cz4jDpn2vab_rXDNArnnJpBdmXe')]),
        ('ml', 'social_science', [(1, '1n9O64UM5fx5xCD3Y12ZW1JUriV75-Dwa'), (2, '18wHagFXTjcLm3lB2xVIqunIDT8zgVGCv')]),
    ],
    5: [
        ('en', 'social_science', [(1, '1rxfohnBDlx9tmzeqhAVEnAm8GVk2_iwT'), (2, '1A_phABeyNoKj2eK30k0owmSYmuHkSW9X')]),
        ('ml', 'social_science', [(1, '1d__idwut_BchPSTCj3qk-MSGG0KSmWp-'), (2, '1xmq8XAALX_GRqRFG_MoH9jFLt1Bi5zDV')]),
    ],
    6: [
        ('en', 'social_science', [(1, '1GWPXTNsG4qh3qO6tu3mF6FB2qasWii-l'), (2, '1lxDpPxuYsTLKD-T2r_24iA9kgp8KFPwm')]),
        ('ml', 'social_science', [(1, '138yVIDfYiXMG_X-Aj8aiTOVxFEC7bGad'), (2, '1RhGggUABwH73kZSkH0N86j1_Xt_g-Dy7')]),
    ],
    7: [
        ('en', 'social_science', [(1, '1R3zcly-Hyd5w-gunFmNuKAWsJ-4zdTyI'), (2, '19pDb0YrD0WqIH3W646QMf3RzmqTH1MPD')]),
        ('ml', 'social_science', [(1, '1BwJHyLVFNtpQ1u5d8V8Fbe7zLRYMuh2z'), (2, '17WaTkUxBwiUL6fVFUQanwjKtApxv0e7k')]),
    ],
    8: [
        ('en', 'social_science', [(1, '172K5ZJ6CGn1hY0HuvoSg0DiLrcRcNJ_I'), (2, '1moZzwgeEhiSPoKn6-F7WXsKqvIuw7U58')]),
        ('ml', 'social_science', [(1, '1Qx-IYvUN2i7g6WYVvxs5uiEfMrawefva'), (2, '13K0Q6372-OVDa-LEpCI7eKtGjrxdAWIc')]),
    ],
    9: [
        ('en', 'social_science_1', [(1, '1y164YibVXtNpkC3ALJfzGeIoeNw3tWnu'), (2, '1cWljQDzPXxpXhfX9TPr_n0mQJlgUMIYG')]),
        ('en', 'social_science_2', [(1, '1JIJtxIcFCrRuVz8PexLgTXr0PrR64F8l'), (2, '1POY7968i8jFxaDDUXcMk6ZOkoP6FAMl6')]),
        ('ml', 'social_science_1', [(1, '1le0TW-tp-sWTTjhOvwz2yUASvBNjmb3u'), (2, '1I4mE1LLS7YNtdyc0tbEG3Vf24YiFpd2e')]),
        ('ml', 'social_science_2', [(1, '1jCUW8nqVmeqdCAwYjpXfYS2gJoeKHLmX'), (2, '1XQQ6gIKHl5wUNyRGKzU-GO1P2Q6FqpHo')]),
    ],
}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: pipeline_extract.py <class_number>")
        sys.exit(1)
    cls = int(sys.argv[1])
    if cls not in DATASET:
        print(f"No pending subjects defined for Class {cls}")
        sys.exit(0)
    print(f"=== Starting progressive execution for Class {cls} ===")
    for lang, subject, parts in DATASET[cls]:
        process_subject(cls, lang, subject, parts)
    print(f"=== Completed all subjects for Class {cls} ===")

