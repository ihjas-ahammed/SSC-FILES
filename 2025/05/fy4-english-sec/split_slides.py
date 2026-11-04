#!/usr/bin/env python3
"""Split theory slides with 3+ paragraphs into multiple smaller slides.

Targets ~2 paragraphs per slide so each slide is a comfortable reading unit
for the new reader UI. The first chunk keeps the original ID and title; the
later chunks get suffixed IDs and the same title (the slide indicator dots in
the reader convey progress).
"""

from __future__ import annotations

import re
from pathlib import Path

UNIT_DIR = Path(__file__).resolve().parent / "src" / "data" / "english_modules"

THEORY_BLOCK = re.compile(
    r'(?P<indent>[ \t]*)\{\s*\n'
    r'(?P<lead>\s*id:\s*"(?P<id>[^"]*)",\s*\n'
    r'\s*type:\s*"theory",\s*\n'
    r'\s*title:\s*"(?P<title>[^"]*)",\s*\n'
    r'\s*content:\s*`)(?P<content>[\s\S]*?)(?P<tail>`\s*\n?\s*\})',
    re.MULTILINE,
)


def split_paragraphs(text: str) -> list[str]:
    return [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]


def chunk_paragraphs(paras: list[str], target: int = 2) -> list[list[str]]:
    """Split paragraphs into chunks aiming for `target` per chunk."""
    n = len(paras)
    if n <= target:
        return [paras]
    chunks: list[list[str]] = []
    i = 0
    while i < n:
        remaining = n - i
        if remaining <= target + 1 and remaining > target:
            # avoid orphan single paragraph at end: take all remaining
            chunks.append(paras[i:])
            break
        chunks.append(paras[i : i + target])
        i += target
    return chunks


def build_slide_block(indent: str, slide_id: str, title: str, content: str) -> str:
    return (
        f"{indent}{{\n"
        f"{indent}  id: \"{slide_id}\",\n"
        f"{indent}  type: \"theory\",\n"
        f"{indent}  title: \"{title}\",\n"
        f"{indent}  content: `{content}`\n"
        f"{indent}}}"
    )


def process_file(path: Path) -> int:
    src = path.read_text(encoding="utf-8")
    matches = list(THEORY_BLOCK.finditer(src))
    if not matches:
        return 0

    # Build replacements (largest first to avoid invalidating indexes)
    replacements: list[tuple[str, str]] = []
    seen_ids: set[str] = set()
    splits = 0

    for m in matches:
        slide_id = m.group("id")
        title = m.group("title")
        content = m.group("content")
        indent = m.group("indent")
        if slide_id in seen_ids:
            continue
        seen_ids.add(slide_id)

        paras = split_paragraphs(content)
        if len(paras) < 3:
            continue

        chunks = chunk_paragraphs(paras, target=2)
        if len(chunks) < 2:
            continue

        new_blocks: list[str] = []
        for i, chunk in enumerate(chunks):
            chunk_text = "\n\n".join(chunk)
            if i == 0:
                cid = slide_id
                ctitle = title
            else:
                cid = f"{slide_id}-p{i + 1}"
                ctitle = title  # same title; reader shows progress via dots
            new_blocks.append(build_slide_block(indent, cid, ctitle, chunk_text))

        old_block = m.group(0)
        new_block = ",\n".join(new_blocks)
        replacements.append((old_block, new_block))
        splits += 1

    out = src
    for old, new in replacements:
        out = out.replace(old, new, 1)

    if splits:
        path.write_text(out, encoding="utf-8")
    return splits


def main() -> int:
    files = sorted(UNIT_DIR.glob("sec_u*.ts"))
    total_splits = 0
    files_changed = 0
    for f in files:
        n = process_file(f)
        if n:
            print(f"  split {n:3d} → {f.name}")
            total_splits += n
            files_changed += 1
        else:
            print(f"  skip      → {f.name}")
    print(f"\nFiles changed: {files_changed}/{len(files)} · Slides split: {total_splits}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
