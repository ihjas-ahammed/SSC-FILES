import math, json
def r2(p): return [round(p[0], 2), round(p[1], 2)]
def unit(a, b):
    l = math.dist(a, b); return ((b[0]-a[0])/l, (b[1]-a[1])/l)
def sq(P, u, v, a=5): return [r2(P), r2((P[0]+a*u[0], P[1]+a*u[1])), r2((P[0]+a*(u[0]+v[0]), P[1]+a*(u[1]+v[1]))), r2((P[0]+a*v[0], P[1]+a*v[1]))]
def lens(x, hh, w=6, n=28): return [r2((x+w*math.cos(2*math.pi*k/n), hh*math.sin(2*math.pi*k/n))) for k in range(n)]
def foot(P, A, u):  # foot of the perpendicular from P on the line A + t u
    t = (P[0]-A[0])*u[0] + (P[1]-A[1])*u[1]; return (A[0]+t*u[0], A[1]+t*u[1])
def preview(full, si, hi, card, title, name):
    sec = full['sections'][si]; sh = sec['sheets'][hi]
    out = {'meta': dict(full['meta'], title=title), 'match': full['match'], 'glossary': full['glossary'],
           'sections': [{'short': sec.get('short', sec['title']), 'title': sec['title'], 'sheets': [dict({k: v for k, v in sh.items() if k != 'cards'}, cards=[card])]}]}
    json.dump(out, open('data/%s-preview.json' % name, 'w'), ensure_ascii=False, indent=2)
