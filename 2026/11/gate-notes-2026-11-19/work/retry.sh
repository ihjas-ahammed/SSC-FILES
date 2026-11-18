#!/bin/bash
W=/home/ihjas/Documents/GitHub/SSC-FILES/2026/11/gate-notes-2026-11-19; cd $W/work
for spec in "04:orthogonal-bases-and-gram-schmidt-ch-4-exercises" "08:profit-loss-percentage-return"; do
 n=${spec%%:*}; s=${spec#*:}; f=$(ls $W/source/$n*.pdf)
 for a in 1 2 3; do
  for model in gemini-4-hydrogen gemini-3.8-flash; do
   out=retry/$n-a$a-$model.md
   echo "$n a$a try $model" >> retry/log.txt
   if aistudio ask prompt.md -m $model -a ihjas.one@gmail.com -f "$f" -o "$out" 2> retry/$n-a$a.log && [ -s $out ]; then echo "$n a$a OK $model $(wc -c <$out)" >> retry/log.txt; break; else rm -f $out; echo "$n a$a FAIL $model" >> retry/log.txt; fi
  done
 done
done
echo RETRYDONE >> retry/log.txt
