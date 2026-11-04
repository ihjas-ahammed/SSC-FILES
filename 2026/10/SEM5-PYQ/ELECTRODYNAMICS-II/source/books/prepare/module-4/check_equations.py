"""Coverage check for Module 4 (Murugeshan). Every numbered equation of the listed section must appear as a display
block with its tag. Tags follow the book's numbering: 12.1(1), 12.3(a)(1), 12.5(ii)(3) and so on.
Usage: python3 check_equations.py <section1|section2>"""
import glob, re, sys
EXPECT = {
 'section1': ['12.1(1)', '12.1(2)', '12.1(3)', '12.1(4)', '12.2(1)', '12.2(2)'],
 'section2': ['12.3(a)(1)', '12.3(a)(2)', '12.3(a)(3)', '12.3(b)(1)', '12.3(b)(2)', '12.3(b)(3)',
              '12.5(i)(1)', '12.5(i)(2)', '12.5(i)(3)', '12.5(i)(4)', '12.5(ii)(1)', '12.5(ii)(2)', '12.5(ii)(3)', '12.5(ii)(4)'],
 'section3': [],
 'section4': ['13.2(ii)(1)', '13.2(ii)(2)', '13.2(iv)(1)', '13.2(iv)(2)', '13.2(iv)(3)', '13.2(iv)(4)', '13.2(iv)(5)', '13.2(iv)(6)',
              '13.2(v)(1)', '13.2(v)(2)', '13.2(v)(3)', '13.2(v)(4)', '13.2(v)(5)', '13.2(v)(6)'],
 'section5': ['13.2(vi)(1)', '13.2(vi)(2)', '13.3(a)(1)', '13.3(a)(2)', '13.3(a)(3)', '13.3(a)(4)', '13.3(a)(5)', '13.3(a)(6)', '13.3(a)(7)',
              '13.3(b)(1)', '13.3(b)(2)', '13.3(b)(3)', '13.3(b)(4)', '13.3(b)(5)', '13.3(res)(1)'],
 'section6': ['13.5(1)', '13.5(2)', '13.5(ex2)(1)', '13.5(ex2)(2)', '13.5(ex2)(3)', '13.5(ex2)(4)', '13.5(ex2)(5)'],
}
which = sys.argv[1] if len(sys.argv) > 1 else 'section1'
for kind in ('study', 'structured'):
    files = sorted(glob.glob(f'm4-s*-{kind}.body.html'))
    txt = ''.join(open(f, encoding='utf-8').read() for f in files)
    blocks = re.findall(r'<div class="eq[^"]*">(.*?)</div>', txt, flags=re.S)
    display = set(re.findall(r'\\tag\{([^}]+)\}', ' '.join(blocks)))
    missing = [t for t in EXPECT[which] if t not in display]
    print(f'{kind}: display tags {len(display)}, expected {len(EXPECT[which])}, MISSING {missing}')
