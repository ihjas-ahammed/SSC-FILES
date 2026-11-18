#!/bin/bash
# for each raw-NN-slug.md not yet finalized: make slug.md, slug.html, two PDFs, overflow report
W=/home/ihjas/Documents/GitHub/SSC-FILES/2026/11/gate-notes-2026-11-19; cd $W
for r in raw-*.md; do
  [ -e "$r" ] || continue
  s=$(echo "$r" | sed -E 's/^raw-[0-9]+-//; s/\.md$//')
  [ -s $s-two-column.pdf ] && continue
  cp "$r" $s.md
  python3 work/extract.py "$r" $s.html
  a=$(node work/topdf.mjs $s.html $s.pdf 1); b=$(node work/topdf.mjs $s.html $s-two-column.pdf 2)
  echo "$s | 1col: $a | 2col: $b" >> work/pdfcheck.txt
done
