#!/usr/bin/env python3
"""
Study Plan Standalone HTML Builder (GATE DA)

Builds a self-contained, standalone `study-plan-gate.html` from modular sources in `src/app/`.
Inlines all CSS stylesheets and bundles all JavaScript modules into an IIFE script.

Usage:
    python3 build.py
    python3 build.py --out src/study-plan-gate.html
    python3 build.py --pure-python
    python3 build.py --minify
"""

import argparse
import base64
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path


def find_project_dirs(script_dir: Path):
    """Locate src/app and output paths relative to script location or cwd."""
    candidates_app = [
        script_dir / "src" / "app",
        script_dir / "app",
        script_dir,
        Path.cwd() / "src" / "app",
        Path.cwd() / "app",
        Path.cwd(),
        Path.cwd() / "2026" / "11" / "STUDY-PLAN-V6" / "src" / "app",
    ]
    app_dir = None
    for cand in candidates_app:
        if cand.is_dir() and (cand / "index.html").exists():
            app_dir = cand.resolve()
            break

    if not app_dir:
        sys.exit("Error: Could not locate 'src/app' containing index.html. Specify --src.")

    # Default output file
    if app_dir.name == "app":
        default_out = app_dir.parent / "study-plan-gate.html"
    else:
        default_out = app_dir / "study-plan-gate.html"

    return app_dir, default_out


def find_esbuild(script_dir: Path):
    """Find esbuild binary from PATH, repo node_modules, or npx."""
    # 1. On PATH
    which_esbuild = shutil.which("esbuild")
    if which_esbuild:
        return [which_esbuild]

    # 2. In workspace / repo node_modules
    curr = script_dir.resolve()
    for _ in range(6):
        cand = curr / "node_modules" / ".bin" / "esbuild"
        if cand.is_file() and os.access(cand, os.X_OK):
            return [str(cand)]
        cand2 = curr / "2026" / "09" / "SSC-V4" / "flow-library" / "study-map" / "node_modules" / ".bin" / "esbuild"
        if cand2.is_file() and os.access(cand2, os.X_OK):
            return [str(cand2)]
        if curr.parent == curr:
            break
        curr = curr.parent

    # 3. Via npx
    if shutil.which("npx"):
        try:
            res = subprocess.run(["npx", "--no-install", "esbuild", "--version"],
                                 capture_output=True, text=True, timeout=5)
            if res.returncode == 0:
                return ["npx", "esbuild"]
        except Exception:
            pass

    return None


def bundle_js_python(js_dir: Path) -> str:
    """Pure Python fallback bundler that concatenates modules in topological order."""
    order = [
        "utils/dom.js",
        "utils/dates.js",
        "utils/export-image.js",
        "data/icons.js",
        "data/systems.js",
        "data/subjects.js",
        "data/resources.js",
        "data/unit-pages.js",
        "data/pyq-gate.js",
        "engine/syllabus.js",
        "engine/planner.js",
        "sync.js",
        "state.js",
        "views/shared-editors.js",
        "views/wizard.js",
        "views/plan-view.js",
        "views/day-view.js",
        "views/session-modal.js",
        "views/pdf-viewer.js",
        "views/session-detail-view.js",
        "views/schedule-view.js",
        "views/settings-view.js",
        "main.js"
    ]

    combined = []
    for rel in order:
        f = js_dir / rel
        if not f.exists():
            sys.exit(f"Error: Missing expected module {rel} in {js_dir}")
        content = f.read_text(encoding="utf-8")
        # Strip import statements
        content = re.sub(r"^\s*import\s+.*?;\s*$", "", content, flags=re.MULTILINE)
        # Strip export declarations
        content = re.sub(r"^\s*export\s+default\s+", "", content, flags=re.MULTILINE)
        content = re.sub(r"^\s*export\s+(const|let|var|function|class|async\s+function)\s+", r"\1 ", content, flags=re.MULTILINE)
        content = re.sub(r"^\s*export\s*\{[^}]*\}\s*;?\s*$", "", content, flags=re.MULTILINE)
        combined.append(f"// --- {rel} ---\n" + content.strip())

    return "(() => {\n" + "\n\n".join(combined) + "\n})();"


def bundle_js(app_dir: Path, force_python: bool = False, minify: bool = False) -> str:
    """Bundle JavaScript modules using esbuild with automatic fallback to pure Python."""
    js_entry = app_dir / "js" / "main.js"
    if not js_entry.exists():
        sys.exit(f"Error: JavaScript entry point not found at {js_entry}")

    if not force_python:
        esbuild_cmd = find_esbuild(app_dir)
        if esbuild_cmd:
            cmd = list(esbuild_cmd) + [str(js_entry), "--bundle", "--format=iife"]
            if minify:
                cmd.append("--minify")
            try:
                res = subprocess.run(cmd, capture_output=True, text=True, check=True)
                return res.stdout.strip()
            except subprocess.CalledProcessError as e:
                print(f"[Warning] esbuild failed ({e.stderr.strip()}), falling back to Python bundler...", file=sys.stderr)
        else:
            print("[Info] esbuild not found, using built-in pure Python bundler.", file=sys.stderr)

    return bundle_js_python(app_dir / "js")


def bundle_css(app_dir: Path, css_dir: Path) -> str:
    """Read and concatenate CSS modules in order."""
    css_files = sorted(list(css_dir.glob("*.css")), key=lambda p: p.name)
    if not css_files:
        sys.exit(f"Error: No CSS files found in {css_dir}")

    parts = []
    for f in css_files:
        content = f.read_text(encoding="utf-8").strip()
        parts.append(f"/* === {f.name} === */\n{content}")

    return "\n\n".join(parts)


def inline_icons(app_dir: Path, html: str) -> str:
    """Inline favicon and apple-touch-icon as data URIs for true standalone portability."""
    icon_svg = app_dir / "icon.svg"
    if icon_svg.exists():
        svg_data = base64.b64encode(icon_svg.read_bytes()).decode("ascii")
        html = re.sub(
            r'<link\s+rel=[\'\"]icon[\'\"].*?>',
            f'<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,{svg_data}" />',
            html
        )

    icon_png = app_dir / "icon-192.png"
    if icon_png.exists():
        png_data = base64.b64encode(icon_png.read_bytes()).decode("ascii")
        html = re.sub(
            r'<link\s+rel=[\'\"]apple-touch-icon[\'\"].*?>',
            f'<link rel="apple-touch-icon" href="data:image/png;base64,{png_data}" />',
            html
        )

    manifest_file = app_dir / "manifest.webmanifest"
    if manifest_file.exists():
        man_data = base64.b64encode(manifest_file.read_bytes()).decode("ascii")
        html = re.sub(
            r'<link\s+rel=[\'\"]manifest[\'\"].*?>',
            f'<link rel="manifest" href="data:application/manifest+json;base64,{man_data}" />',
            html
        )

    return html


def build(app_dir: Path, out_path: Path, force_python: bool = False, minify: bool = False, check_only: bool = False):
    """Build standalone HTML from source."""
    index_html = app_dir / "index.html"
    if not index_html.exists():
        sys.exit(f"Error: {index_html} does not exist.")

    # 0. Auto-index resources and regenerate curriculum data
    script_dir = Path(__file__).parent.resolve()
    gen_script = script_dir / "generate_gate_data.py"
    if gen_script.exists():
        try:
            res = subprocess.run([sys.executable, str(gen_script)], capture_output=True, text=True, check=True)
            for line in res.stdout.strip().splitlines():
                if "Successfully" in line or "Wrote" in line:
                    print(f"  [Auto-Index] {line}")
        except Exception as e:
            print(f"  [Auto-Index Warning] {e}")

    html = index_html.read_text(encoding="utf-8")

    # 1. Bundle CSS
    css_bundled = bundle_css(app_dir, app_dir / "css")
    style_tag = f"<style>\n{css_bundled}\n</style>"

    # Replace <link rel="stylesheet" ...> block
    link_re = r"(<!--\s*Modular Stylesheets\s*-->\s*)?(<link\s+rel=[\'\"]stylesheet[\'\"].*?>\s*)+"
    html = re.sub(link_re, lambda _: style_tag + "\n", html)

    # 2. Bundle JS
    js_bundled = bundle_js(app_dir, force_python=force_python, minify=minify)
    script_tag = f"<script>\n{js_bundled}\n</script>"

    # Replace <script type="module" src="js/main.js"></script>
    script_re = r"<script\s+type=[\'\"]module[\'\"]\s+src=[\'\"]js/main\.js[\'\"]\s*>\s*</script>"
    html = re.sub(script_re, lambda _: script_tag, html)

    # 3. Inline icon assets for single-file portability
    html = inline_icons(app_dir, html)

    if check_only:
        print(f"[Check] Dry run successful. Output would be {len(html):,} bytes ({len(html.splitlines())} lines).")
        return html

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(html, encoding="utf-8")
    print(f"✓ Standalone HTML built successfully:")
    print(f"  Destination : {out_path}")
    print(f"  File size   : {out_path.stat().st_size:,} bytes ({out_path.stat().st_size / 1024:.1f} KB)")
    print(f"  Total lines : {len(html.splitlines()):,}")

    return html


def main():
    parser = argparse.ArgumentParser(description="Build standalone study-plan-gate.html from modular source.")
    parser.add_argument("--src", type=Path, default=None, help="Path to src/app directory containing modular source.")
    parser.add_argument("--out", type=Path, default=None, help="Output standalone HTML file path.")
    parser.add_argument("--pure-python", action="store_true", help="Force pure Python JS bundler instead of esbuild.")
    parser.add_argument("--minify", action="store_true", help="Minify JavaScript bundle with esbuild.")
    parser.add_argument("--check", action="store_true", help="Perform dry run check without writing.")
    args = parser.parse_args()

    script_dir = Path(__file__).parent.resolve()
    detected_app, default_out = find_project_dirs(script_dir)

    app_dir = args.src.resolve() if args.src else detected_app
    out_path = args.out.resolve() if args.out else default_out

    build(app_dir, out_path, force_python=args.pure_python, minify=args.minify, check_only=args.check)


if __name__ == "__main__":
    main()
