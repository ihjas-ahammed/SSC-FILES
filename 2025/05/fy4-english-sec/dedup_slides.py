#!/usr/bin/env python3
"""Remove inter-slide sentence/paragraph repetition in unit data files.

Many theory slides currently echo the last paragraph(s) of the previous slide
at their start. This was meant as a continuity device but makes reading
tedious. We detect paragraph-level prefix-of-current == suffix-of-previous
overlaps and strip the duplicate prefix from the current slide.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

UNIT_DIR = Path(__file__).resolve().parent / "src" / "data" / "english_modules"

THEORY_BLOCK = re.compile(
    r'(\{\s*\n\s*id:\s*"[^"]*",\s*\n\s*type:\s*"theory",\s*\n\s*title:\s*"[^"]*",\s*\n\s*content:\s*`)([\s\S]*?)(`\s*\n?\s*\})',
    re.MULTILINE,
)


def normalize(s: str) -> str:
    return re.sub(r"\s+", " ", s.strip()).lower()


def split_paragraphs(text: str) -> list[str]:
    return [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]


def split_sentences(text: str) -> list[str]:
    # Split on sentence-ending punctuation followed by whitespace
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z\"'])", text.strip())
    return [s.strip() for s in parts if s.strip()]


def find_paragraph_overlap(prev: str, curr: str) -> tuple[int, str]:
    prev_paras = split_paragraphs(prev)
    curr_paras = split_paragraphs(curr)
    max_n = min(len(prev_paras), len(curr_paras))
    for n in range(max_n, 0, -1):
        if [normalize(p) for p in prev_paras[-n:]] == [
            normalize(p) for p in curr_paras[:n]
        ]:
            return n, "\n\n".join(curr_paras[n:])
    return 0, curr


def find_sentence_overlap(prev: str, curr: str) -> tuple[int, str]:
    """Fallback: look for sentence-level overlap inside the first paragraph."""
    prev_sents = split_sentences(prev)
    curr_sents = split_sentences(curr)
    max_n = min(len(prev_sents), len(curr_sents), 6)
    for n in range(max_n, 1, -1):  # require >=2 sentences to qualify
        if [normalize(s) for s in prev_sents[-n:]] == [
            normalize(s) for s in curr_sents[:n]
        ]:
            return n, " ".join(curr_sents[n:])
    return 0, curr


def process_file(path: Path) -> bool:
    src = path.read_text(encoding="utf-8")
    matches = list(THEORY_BLOCK.finditer(src))
    if len(matches) < 2:
        return False

    # Walk the matches in order and dedupe.
    # We build a list of replacements (old_substring -> new_substring).
    replacements: list[tuple[str, str]] = []
    prev_clean_content: str | None = None

    for m in matches:
        prefix, content, suffix = m.group(1), m.group(2), m.group(3)
        if prev_clean_content is None:
            prev_clean_content = content
            continue
        # Try paragraph-level first
        n_para, remainder = find_paragraph_overlap(prev_clean_content, content)
        if n_para == 0:
            n_sent, remainder = find_sentence_overlap(prev_clean_content, content)
            n_para = n_sent  # treat as same trigger
        if n_para > 0 and remainder.strip():
            new_block = prefix + remainder.strip() + suffix
            old_block = m.group(0)
            replacements.append((old_block, new_block))
            prev_clean_content = remainder.strip()
        else:
            prev_clean_content = content

    if not replacements:
        return False

    out = src
    for old, new in replacements:
        out = out.replace(old, new, 1)
    path.write_text(out, encoding="utf-8")
    return True


def main() -> int:
    files = sorted(UNIT_DIR.glob("sec_u*.ts"))
    if not files:
        print(f"No unit files found in {UNIT_DIR}", file=sys.stderr)
        return 1
    changed = 0
    for f in files:
        if process_file(f):
            print(f"  dedup → {f.name}")
            changed += 1
        else:
            print(f"  skip  → {f.name}")
    print(f"\nFiles updated: {changed}/{len(files)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
