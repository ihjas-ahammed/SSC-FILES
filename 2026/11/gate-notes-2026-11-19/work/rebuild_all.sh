#!/bin/bash
cd /home/ihjas/Documents/GitHub/SSC-FILES/2026/11/gate-notes-2026-11-19
for r in raw-*.md; do s=$(echo $r | sed -E 's/^raw-[0-9]+-//; s/\.md$//'); case $s in orthogonal*) r=work/retry/04-a2-gemini-3.8-flash.md;; profit*) r=work/retry/08-a1-gemini-3.8-flash.md;; esac; work/build_one.sh $s $r; done
python3 work/pdfcheck.py *.pdf > work/margincheck.txt 2>/dev/null; echo done > work/rebuild.done
