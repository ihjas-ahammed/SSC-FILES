#!/usr/bin/env python3
"""Download the example data files the book sessions read (McKinney, Python for Data Analysis, examples/ folder).
Saved in vendor/examples/ and embedded in the page, so the examples run without the book."""
import os, urllib.request
HERE = os.path.dirname(os.path.abspath(__file__))
DEST = os.path.join(HERE, 'vendor', 'examples')
BASE = 'https://raw.githubusercontent.com/wesm/pydata-book/2nd-edition/'
FILES = ['examples/ex1.csv', 'examples/ex2.csv', 'examples/ex3.txt', 'examples/ex4.csv', 'examples/ex5.csv',
         'examples/ex6.csv', 'examples/ex7.csv', 'examples/tips.csv', 'examples/macrodata.csv',
         'examples/stock_px_2.csv', 'examples/csv_mindex.csv', 'examples/tseries.csv', 'examples/example.json']

def fetch():
    os.makedirs(DEST, exist_ok=True)
    got = []
    for f in FILES:
        local = os.path.join(DEST, os.path.basename(f))
        if not os.path.exists(local):
            try:
                data = urllib.request.urlopen(BASE + f, timeout=30).read()
                open(local, 'wb').write(data)
            except Exception as e:
                print('skip', f, e); continue
        got.append(f)
    print('data files ready:', len(got), 'of', len(FILES))
    return got

if __name__ == '__main__':
    fetch()
