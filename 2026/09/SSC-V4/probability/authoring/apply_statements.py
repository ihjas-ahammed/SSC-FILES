#!/usr/bin/env python3
"""Apply improved statements to all 8 modules (ch01 to ch08) in Probability.
Defines formal mathematical statements, explains mathematical terms, and
gives reasons behind each statement, while keeping lede text at only one place.
"""
import json
import subprocess
from pathlib import Path

from statements_ch01 import STATEMENTS_CH01
from statements_ch02 import STATEMENTS_CH02
from statements_ch03 import STATEMENTS_CH03
from statements_ch04 import STATEMENTS_CH04
from statements_ch05 import STATEMENTS_CH05
from statements_ch06 import STATEMENTS_CH06
from statements_ch07 import STATEMENTS_CH07
from statements_ch08 import STATEMENTS_CH08

ROOT = Path(__file__).resolve().parents[1]

ALL_STATEMENTS = {}
ALL_STATEMENTS.update(STATEMENTS_CH01)
ALL_STATEMENTS.update(STATEMENTS_CH02)
ALL_STATEMENTS.update(STATEMENTS_CH03)
ALL_STATEMENTS.update(STATEMENTS_CH04)
ALL_STATEMENTS.update(STATEMENTS_CH05)
ALL_STATEMENTS.update(STATEMENTS_CH06)
ALL_STATEMENTS.update(STATEMENTS_CH07)
ALL_STATEMENTS.update(STATEMENTS_CH08)


def main():
    print(f"Total authored statements across 8 modules: {len(ALL_STATEMENTS)}")
    assert len(ALL_STATEMENTS) == 128, f"Expected 128 statements, got {len(ALL_STATEMENTS)}"

    js = r"""
const fs=require('fs'),vm=require('vm');
const files=process.argv.slice(1),out=[];
for(const file of files){
 const ctx=vm.createContext({CONCEPTS:[]});vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:file});
 out.push({file,concepts:ctx.CONCEPTS});
}
process.stdout.write(JSON.stringify(out));
"""
    files = [ROOT / f"data/ch{i:02d}.concepts.js" for i in range(1, 9)]
    pools = json.loads(subprocess.check_output(['node', '-e', js, *map(str, files)], text=True))

    total_updated = 0
    for pool in pools:
        for c in pool['concepts']:
            cid = c['id']
            if cid in ALL_STATEMENTS:
                c['statement'] = ALL_STATEMENTS[cid]
                total_updated += 1
            else:
                raise ValueError(f"Concept {cid} in {pool['file']} missing updated statement!")

        content = json.dumps(pool['concepts'], ensure_ascii=False, indent=2)
        Path(pool['file']).write_text(
            "var CONCEPTS = typeof CONCEPTS !== 'undefined' ? CONCEPTS : [];\nCONCEPTS.push(...\n"
            + content
            + "\n);\n"
        )

    print(f"Successfully applied updated statements to {total_updated} concepts across 8 modules.")


if __name__ == '__main__':
    main()
