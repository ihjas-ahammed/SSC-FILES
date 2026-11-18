#!/bin/bash
# build_one.sh <slug> [rawfile]  : raw md -> html (math+svg fixed) -> 2 PDFs, with checks
W=/home/ihjas/Documents/GitHub/SSC-FILES/2026/11/gate-notes-2026-11-19; cd $W; s=$1; raw=${2:-$(ls raw-*-$s.md)}
cp "$raw" $s.md; python3 work/extract.py $s.md $s.html; python3 work/mathfix.py $s.html >/dev/null
fx=$(node work/topdf.mjs $s.html x.pdf 1 svgonly); [ "$fx" != "[]" ] && python3 work/svgpatch.py $s.html "$fx" >/dev/null
me=$(node work/topdf.mjs $s.html x.pdf 1 mjerr | cut -c1-200)
a=$(node work/topdf.mjs $s.html $s.pdf 1); b=$(node work/topdf.mjs $s.html $s-two-column.pdf 2); rm -f x.pdf
echo "$s | svgfix:$fx | mjerr:$me | 1col:$a | 2col:$b" | sed 's/"sw":[0-9]*,"cw":[0-9]*//g' >> work/pdfcheck2.txt
