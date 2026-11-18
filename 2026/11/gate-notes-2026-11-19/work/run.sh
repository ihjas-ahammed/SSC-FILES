#!/bin/bash
W=/home/ihjas/Documents/GitHub/SSC-FILES/2026/11/gate-notes-2026-11-19; cd $W/work
slug(){ basename "$1" .pdf | sed -E 's/^[0-9]+ //; s/ pp [0-9-]+$//' | tr 'A-Z' 'a-z' | sed -E 's/[^a-z0-9]+/-/g; s/^-|-$//g'; }
i=0
for f in $W/source/*.pdf; do
  i=$((i+1)); s=$(slug "$f"); n=$(printf %02d $i); out=$W/raw-$n-$s.md
  [ -s "$out" ] && continue
  for model in gemini-4-hydrogen gemini-3.8-flash gemini-4-hydrogen gemini-3.8-flash; do
    echo "$n $s try $model" >> log.txt
    if aistudio ask prompt.md -m $model -a ihjas.one@gmail.com -f "$f" -o "$out" 2> $n-$s.log && [ -s "$out" ]; then echo "$n $s OK $model" >> log.txt; echo "$n $s $model" >> models.txt; break; fi
    rm -f "$out"; echo "$n $s FAIL $model: $(tail -1 $n-$s.log)" >> log.txt
  done
done
echo ALLDONE >> log.txt
