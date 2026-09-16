#!/usr/bin/env python3
"""Build SSC-V4 Real Analysis study system into build/index.html.

Inlines styles and scripts so the application is completely self-contained
for deployment to Firebase Hosting (/math/real-analysis) or static serving.
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
APP_DIR = os.path.join(HERE, 'app')
BUILD_DIR = os.path.join(HERE, 'build')

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def main():
    os.makedirs(BUILD_DIR, exist_ok=True)
    html = read_file(os.path.join(APP_DIR, 'index.html'))
    css = read_file(os.path.join(APP_DIR, 'src', 'ui.css'))

    # Replace <link rel="stylesheet" href="src/ui.css"> with <style>
    style_tag = f'<style>\n/* app/src/ui.css */\n{css}\n</style>'
    html = re.sub(r'<link rel="stylesheet" href="src/ui\.css">', lambda m: style_tag, html)

    # Read live data sources from app/sources.js
    sources_content = read_file(os.path.join(APP_DIR, 'sources.js'))
    
    # Extract live file paths
    m = re.search(r'live:\s*\[(.*?)\]', sources_content, re.DOTALL)
    if not m:
        sys.exit("Error: could not find live files in sources.js")
    raw_list = m.group(1)
    file_rel_paths = re.findall(r"['\"]([^'\"]+)['\"]", raw_list)
    
    # Concatenate data scripts
    data_scripts = []
    for rel in file_rel_paths:
        p = os.path.normpath(os.path.join(APP_DIR, rel))
        data_scripts.append(f'/* ── {rel} ── */\n' + read_file(p))
    
    # Core app scripts in order as listed in app/index.html
    core_order = [
        'core.dom.js',
        'core.tex.js',
        'core.store.js',
        'core.pool.js',
        'core.latex.js',
        'ui.parts.js',
        'fig.library.js',
        'comp.figure.js',
        'comp.tree.js',
        'comp.write.js',
        'view.home.js',
        'view.study.js',
        'view.note.js',
        'view.recall.js',
        'view.omr.js',
        'view.write.js',
        'boot.js'
    ]
    
    app_scripts = []
    for s in core_order:
        p = os.path.join(APP_DIR, 'src', s)
        app_scripts.append(f'/* ── src/{s} ── */\n' + read_file(p))

    # Construct the single bundled script block
    bundled_sources = "const DATA_SOURCES = { use: 'live', live: ['data:text/javascript;charset=utf-8,//bundled'] };"
    
    combined_js = (
        bundled_sources + "\n\n" +
        "\n\n".join(data_scripts) + "\n\n" +
        "\n\n".join(app_scripts)
    )
    
    safe_js = combined_js.replace('</script', '<\\/script')
    script_bundle = f'<script>\n{safe_js}\n</script>'
    
    # Replace individual script tags from sources.js to boot.js
    pattern = r'<!-- data seam: which content set to load -->.*?<script src="src/boot\.js"></script>'
    html = re.sub(pattern, lambda m: script_bundle, html, flags=re.DOTALL)

    out_path = os.path.join(BUILD_DIR, 'index.html')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"Built {out_path} ({len(html)} bytes)")

if __name__ == '__main__':
    main()
