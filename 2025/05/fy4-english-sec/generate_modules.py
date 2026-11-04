#!/usr/bin/env python3
"""
Module generator for fy4-english-sec.

Reads manifests/*.json and generates TypeScript Section files
from the source text files in 'text sec/'.

Design goals (rewritten):
  - NEVER cut a sentence in half. If the line range given in the manifest
    starts or ends mid-sentence, we extend backward/forward to the nearest
    sentence boundary.
  - Produce readable, short paragraphs. Long blocks are broken into 2-sentence
    paragraphs (\\n\\n separated) so each slide reads quickly rather than as
    a wall of text.
  - The generated text should stand alone as a clean, scannable lesson.

Usage:
  python generate_modules.py           # process all manifests
  python generate_modules.py u1 u3     # process specific unit numbers
"""

import json
import os
import sys
import re

MANIFESTS_DIR = os.path.join(os.path.dirname(__file__), "manifests")
BASE_DIR = os.path.dirname(__file__)

# ─── Tunables ────────────────────────────────────────────────────────────────

SENTENCES_PER_PARAGRAPH = 2   # break long blocks every N sentences
MAX_BACKWARD_LINES      = 6   # safety cap when walking back for sentence start
MAX_FORWARD_LINES       = 6   # safety cap when walking forward for sentence end

# Abbreviations whose periods should NOT count as sentence terminators
ABBREV = (
    "Mr", "Mrs", "Ms", "Dr", "Prof", "Sr", "Jr", "St",
    "vs", "etc", "Inc", "Ltd", "Co",
    "e\\.g", "i\\.e", "cf", "viz", "approx",
    "Feb", "Jan", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Sept", "Oct", "Nov", "Dec",
)
ABBREV_RE = re.compile(r"\b(?:" + "|".join(ABBREV) + r")\.")


# ─── Text helpers ────────────────────────────────────────────────────────────

def read_source(path):
    """Return list of lines (newline stripped)."""
    with open(path, "r", encoding="utf-8") as f:
        return [ln.rstrip("\n") for ln in f.readlines()]


def _mask_abbrev(text):
    """Replace 'Dr.' style abbreviations with 'Dr<DOT>' so they don't break sentence split."""
    return ABBREV_RE.sub(lambda m: m.group(0).replace(".", "<DOT>"), text)


def _unmask_abbrev(text):
    return text.replace("<DOT>", ".")


def split_sentences(text):
    """
    Split a paragraph into sentences. Conservative: only splits on
    .?! followed by whitespace and an uppercase / quote start.
    Common abbreviations are protected.
    """
    text = _mask_abbrev(text)
    # Split AFTER terminator + whitespace, when next char looks like a sentence start.
    raw = re.split(r"(?<=[.!?])\s+(?=[\"'(\[]?[A-Z0-9])", text)
    out = []
    for s in raw:
        s = _unmask_abbrev(s).strip()
        if s:
            out.append(s)
    return out


def _join_lines(lines):
    """Join a list of source lines, dropping empties and collapsing whitespace."""
    parts = [ln.strip() for ln in lines if ln.strip()]
    text = " ".join(parts)
    return re.sub(r"\s+", " ", text).strip()


def _looks_like_sentence_start(text):
    """True if text appears to begin a new sentence."""
    if not text:
        return True
    first = text.lstrip()[:1]
    return first.isupper() or first in '"\'(['


def _ends_with_sentence(text):
    """True if text appears to end a sentence (including author attributions)."""
    if not text:
        return True
    last = text.rstrip()
    if not last:
        return True
    if last[-1] in '.!?"\'':
        return True
    # Attribution like "— Albert Einstein" or "- Marie Howe"
    if re.search(r"[—–-]\s+[A-Z][\w'\-]+(?:\s+[A-Z][\w'\-]+)*$", last):
        return True
    return False


def extract_clean(lines, start, end):
    """
    Extract clean text for slide content from lines[start..end] (1-indexed,
    inclusive). Extends backward/forward to the nearest sentence boundary so
    sentences are never cut in half.
    """
    if start < 1: start = 1
    if end > len(lines): end = len(lines)
    if end < start: end = start

    raw = _join_lines(lines[start - 1: end])
    if not raw:
        return ""

    # ── Backward extension ─────────────────────────────────────────────────
    if not _looks_like_sentence_start(raw):
        prefix = []
        i = start - 2   # 0-indexed line just before start
        steps = 0
        while i >= 0 and steps < MAX_BACKWARD_LINES:
            ln = lines[i].strip()
            if not ln:
                if prefix:
                    break  # paragraph break is a clean boundary
                i -= 1; steps += 1; continue
            prefix.insert(0, ln)
            joined = " ".join(prefix)
            # Find LAST sentence boundary within prefix
            last = None
            for m in re.finditer(r"[.!?]\s+(?=[\"'(\[]?[A-Z0-9])", _mask_abbrev(joined)):
                last = m
            if last:
                tail = _unmask_abbrev(joined)[last.end():].strip()
                raw = (tail + " " + raw).strip() if tail else raw
                break
            i -= 1; steps += 1
        else:
            # ran off the top without a clean boundary; accept what we have
            if prefix:
                raw = (" ".join(prefix) + " " + raw).strip()

    # ── Forward extension ──────────────────────────────────────────────────
    if not _ends_with_sentence(raw):
        suffix = []
        i = end   # 0-indexed line just after end
        steps = 0
        while i < len(lines) and steps < MAX_FORWARD_LINES:
            ln = lines[i].strip()
            if not ln:
                if suffix:
                    break
                i += 1; steps += 1; continue
            suffix.append(ln)
            joined = " ".join(suffix)
            masked = _mask_abbrev(joined)
            m = re.search(r"[.!?](?:\s|$)", masked)
            if m:
                cut_at = m.start() + 1
                tail = _unmask_abbrev(masked[:cut_at]).strip()
                raw = (raw + " " + tail).strip()
                break
            i += 1; steps += 1
        else:
            if suffix:
                raw = (raw + " " + " ".join(suffix)).strip()

    return raw


def format_for_reading(text, per_para=SENTENCES_PER_PARAGRAPH):
    """
    Break long blocks into shorter paragraphs of ~per_para sentences each
    so the slide doesn't render as a wall of text.
    """
    if not text:
        return text
    sentences = split_sentences(text)
    if len(sentences) <= per_para:
        return text.strip()
    paragraphs = []
    for i in range(0, len(sentences), per_para):
        paragraphs.append(" ".join(sentences[i:i + per_para]).strip())
    return "\n\n".join(p for p in paragraphs if p)


def extract(lines, start, end):
    """Public helper: extract a clean, sentence-respecting, paragraph-broken block."""
    raw = extract_clean(lines, start, end)
    return format_for_reading(raw)


# ─── TS escaping ─────────────────────────────────────────────────────────────

def ts_escape(text):
    """Escape text for TypeScript template-literal (backtick string)."""
    text = text.replace("\\", "\\\\")
    text = text.replace("`", "\\`")
    text = text.replace("${", "\\${")
    return text


def dq_escape(text):
    """Escape text for TypeScript double-quoted string."""
    text = text.replace("\\", "\\\\")
    text = text.replace('"', '\\"')
    text = text.replace("\n", "\\n")
    return text


# ─── Slide generators ────────────────────────────────────────────────────────

def gen_theory(slide, src_lines):
    if "lines" in slide:
        raw = extract(src_lines, slide["lines"][0], slide["lines"][1])
    else:
        raw = slide.get("content", "")
    return "              content: `" + ts_escape(raw) + "`"


def gen_quiz(slide, src_lines):
    q = dq_escape(slide.get("question", ""))
    opt_lines = []
    for o in slide.get("options", []):
        oid   = o["id"]
        otext = dq_escape(o.get("text", ""))
        ocorr = "true" if o.get("correct", False) else "false"
        oexp  = dq_escape(o.get("explanation", ""))
        opt_lines.append(
            f'                {{ id: "{oid}", text: "{otext}", isCorrect: {ocorr}, explanation: "{oexp}" }}'
        )
    opts_str = ",\n".join(opt_lines)
    return (
        f'              content: "{q}",\n'
        f"              options: [\n{opts_str}\n              ]"
    )


def gen_fill_in_blank(slide, src_lines):
    if "line" in slide:
        sentence = src_lines[slide["line"] - 1].strip()
    else:
        sentence = slide.get("sentence", "")
    blank = slide.get("blank", "")
    displayed = sentence.replace(blank, "___", 1)
    return (
        f'              content: "{dq_escape(displayed)}",\n'
        f'              blankAnswer: "{dq_escape(blank)}"'
    )


def gen_word_card(slide, src_lines):
    word     = dq_escape(slide.get("word", ""))
    definition = dq_escape(slide.get("translation", ""))
    ctx      = dq_escape(slide.get("context", ""))
    if "example_line" in slide:
        ex = src_lines[slide["example_line"] - 1].strip()
    else:
        ex = slide.get("example", "")
    ex = dq_escape(ex)
    return (
        f'              content: "Vocabulary",\n'
        f"              wordCard: {{\n"
        f'                word: "{word}",\n'
        f'                translation: "{definition}",\n'
        f'                context: "{ctx}",\n'
        f'                example: "{ex}"\n'
        f"              }}"
    )


# ─── Structure builders ──────────────────────────────────────────────────────

def build_slide(slide, src_lines):
    sid   = slide["id"]
    stype = slide["type"]
    stitle = dq_escape(slide.get("title", ""))

    dispatch = {
        "theory":        gen_theory,
        "quiz":          gen_quiz,
        "fill_in_blank": gen_fill_in_blank,
        "word_card":     gen_word_card,
    }
    body_fn = dispatch.get(stype, gen_theory)
    body = body_fn(slide, src_lines)

    return (
        f"            {{\n"
        f'              id: "{sid}",\n'
        f'              type: "{stype}",\n'
        f'              title: "{stitle}",\n'
        f"{body}\n"
        f"            }}"
    )


def build_lesson(lesson, src_lines):
    lid    = lesson["id"]
    ltitle = dq_escape(lesson.get("title", ""))
    ldesc  = dq_escape(lesson.get("description", ""))
    licon  = lesson.get("icon", "BookOpen")
    slides_ts = ",\n".join(build_slide(s, src_lines) for s in lesson.get("slides", []))
    return (
        f"        {{\n"
        f'          id: "{lid}",\n'
        f'          title: "{ltitle}",\n'
        f'          description: "{ldesc}",\n'
        f'          icon: "{licon}",\n'
        f"          slides: [\n{slides_ts}\n          ]\n"
        f"        }}"
    )


def build_unit(unit, src_lines):
    uid    = unit["id"]
    utitle = dq_escape(unit.get("title", ""))
    udesc  = dq_escape(unit.get("description", ""))
    ucolor = unit.get("color", "duo-blue")
    lessons_ts = ",\n".join(build_lesson(l, src_lines) for l in unit.get("lessons", []))
    return (
        f"    {{\n"
        f'      id: "{uid}",\n'
        f'      title: "{utitle}",\n'
        f'      description: "{udesc}",\n'
        f'      color: "{ucolor}",\n'
        f"      lessons: [\n{lessons_ts}\n      ]\n"
        f"    }}"
    )


# ─── Main generate ───────────────────────────────────────────────────────────

def process_manifest(mf_path):
    with open(mf_path, "r", encoding="utf-8") as f:
        m = json.load(f)

    src_rel  = m.get("source_file", "")
    src_path = os.path.normpath(os.path.join(BASE_DIR, src_rel)) if src_rel else None
    src_lines = read_source(src_path) if src_path and os.path.exists(src_path) else []

    if src_path and not os.path.exists(src_path):
        print(f"  [WARN] source file not found: {src_path}")

    module_id   = m["module_id"]
    export_name = m["export_name"]
    title       = dq_escape(m.get("title", ""))
    description = dq_escape(m.get("description", ""))
    color       = m.get("color", "duo-blue")

    units_ts = ",\n".join(build_unit(u, src_lines) for u in m.get("units", []))

    ts = (
        f"import {{ Section }} from '../../types';\n\n"
        f"export const {export_name}: Section = {{\n"
        f'  id: "{module_id}",\n'
        f'  title: "{title}",\n'
        f'  description: "{description}",\n'
        f'  color: "{color}",\n'
        f"  units: [\n{units_ts}\n  ]\n"
        f"}};\n"
    )

    out_rel  = m.get("output_file", "")
    out_path = os.path.normpath(os.path.join(BASE_DIR, out_rel))
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(ts)

    units_count   = len(m.get("units", []))
    lessons_count = sum(len(u.get("lessons", [])) for u in m.get("units", []))
    slides_count  = sum(
        len(l.get("slides", []))
        for u in m.get("units", [])
        for l in u.get("lessons", [])
    )
    print(f"  -> {out_path}")
    print(f"     {units_count} units | {lessons_count} lessons | {slides_count} slides")


def main():
    if not os.path.isdir(MANIFESTS_DIR):
        print(f"No manifests/ directory found at: {MANIFESTS_DIR}")
        sys.exit(1)

    filter_keys = set(sys.argv[1:])  # e.g. "u1" "u3"

    manifest_files = sorted(
        f for f in os.listdir(MANIFESTS_DIR) if f.endswith(".json")
    )
    if not manifest_files:
        print("No manifest JSON files found.")
        sys.exit(1)

    for mf in manifest_files:
        if filter_keys and not any(k in mf for k in filter_keys):
            continue
        mf_path = os.path.join(MANIFESTS_DIR, mf)
        print(f"Processing {mf} ...")
        process_manifest(mf_path)

    print("Done.")


if __name__ == "__main__":
    main()
