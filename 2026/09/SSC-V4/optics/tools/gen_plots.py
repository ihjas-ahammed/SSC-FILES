#!/usr/bin/env python3
"""The Optics diagrams that are PLOTS of a formula, drawn from the formula (never by hand).

    python3 tools/gen_plots.py

Writes diagrams/light/<id>_<slug>.png and diagrams/dark/... at 1200x800. Schematic
figures (apparatus, ray diagrams) are drawn by tools/gen_codex_diagrams.py instead.
"""
import os
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

ROOT = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
THEMES = {
    'light': dict(bg='#ffffff', fg='#1f2937', grid='#e5e7eb', a='#a3186f', b='#0d9488', c='#d97706', d='#2563eb', mute='#9ca3af'),
    'dark':  dict(bg='#14121b', fg='#e6e1ea', grid='#2b2736', a='#ff7cc8', b='#2dd4bf', c='#fbbf24', d='#60a5fa', mute='#6b6478'),
}


def fig(theme, w=6.0, h=4.0, **kw):
    t = THEMES[theme]
    f, ax = plt.subplots(figsize=(w, h), dpi=200, **kw)
    f.patch.set_facecolor(t['bg'])
    for a in np.atleast_1d(ax).ravel():
        style(a, t)
    return f, ax, t


def style(a, t):
    a.set_facecolor(t['bg'])
    for s in a.spines.values():
        s.set_color(t['mute'])
    a.tick_params(colors=t['fg'], labelsize=8)
    a.xaxis.label.set_color(t['fg'])
    a.yaxis.label.set_color(t['fg'])
    a.title.set_color(t['fg'])
    a.grid(color=t['grid'], lw=.6)
    a.set_axisbelow(True)


def save(f, cid, slug, theme):
    d = os.path.join(ROOT, 'diagrams', theme)
    os.makedirs(d, exist_ok=True)
    f.tight_layout()
    f.savefig(os.path.join(d, '%s_%s.png' % (cid, slug)), facecolor=f.get_facecolor())
    plt.close(f)


def sinc2(b):
    return np.where(np.abs(b) < 1e-9, 1.0, (np.sin(b) / np.where(b == 0, 1, b)) ** 2)


def young(theme):
    f, ax, t = fig(theme)
    x = np.linspace(-3, 3, 1200)              # x in units of beta = lambda D / d
    ax.plot(x, 4 * np.cos(np.pi * x) ** 2, color=t['a'], lw=2)
    ax.axhline(2, color=t['b'], ls='--', lw=1.2)
    ax.text(2.95, 2.12, 'average $2I_0$', color=t['b'], ha='right', fontsize=9)
    ax.set_xlabel('position $x$ in units of the fringe width $\\beta=\\lambda D/d$')
    ax.set_ylabel('intensity  ($I_0$ = one slit alone)')
    ax.set_title("Young's fringes: $I=4I_0\\cos^2(\\pi d x/\\lambda D)$", fontsize=10)
    ax.set_ylim(0, 4.6)
    save(f, 'c.2.3.2', 'young_intensity', theme)


def single_slit(theme):
    f, ax, t = fig(theme)
    b = np.linspace(-4 * np.pi, 4 * np.pi, 2400)
    ax.plot(b / np.pi, sinc2(b), color=t['a'], lw=2)
    for m in (-3, -2, -1, 1, 2, 3):
        ax.plot([m, m], [0, 0.03], color=t['b'], lw=2)
    ax.text(-1, 0.1, 'first\nminimum', color=t['b'], ha='center', fontsize=8)
    sec = [1.43, 2.46, 3.47]
    for s in sec:
        v = float(sinc2(np.array([s * np.pi]))[0])
        ax.plot([s], [v], 'o', color=t['c'], ms=4)
    ax.text(1.5, 0.085, '4.7%', color=t['c'], ha='center', fontsize=8)
    ax.set_xlabel('$\\beta/\\pi = b\\sin\\theta/\\lambda$')
    ax.set_ylabel('$I/I_0$')
    ax.set_title('Single slit: $I=I_0(\\sin\\beta/\\beta)^2$, minima at $b\\sin\\theta=m\\lambda$', fontsize=10)
    save(f, 'c.3.1.3', 'single_slit_intensity', theme)


def double_slit(theme):
    f, ax, t = fig(theme)
    s = np.linspace(-4, 4, 4000)              # s = b sin(theta)/lambda ; d = 3b
    d_over_a = 3
    beta = np.pi * s
    gam = np.pi * d_over_a * s
    I = 4 * sinc2(beta) * np.cos(gam) ** 2
    ax.plot(s, 4 * sinc2(beta), color=t['b'], lw=1.4, ls='--', label='single-slit envelope')
    ax.plot(s, I, color=t['a'], lw=1.6, label='two slits, $d=3b$')
    for m in (-1, 1):
        ax.annotate('missing\n$m=\\pm3$', xy=(m, 0.02), xytext=(m * 1.05, 0.9), color=t['c'], fontsize=8,
                    ha='center', arrowprops=dict(arrowstyle='->', color=t['c'], lw=.8))
    ax.set_xlabel('$b\\sin\\theta/\\lambda$')
    ax.set_ylabel('$I/I_0$')
    ax.set_title('Two slits of width $b$, spacing $d=3b$: fringes inside the envelope', fontsize=10)
    ax.legend(facecolor=t['bg'], edgecolor=t['mute'], labelcolor=t['fg'], fontsize=8)
    save(f, 'c.3.2.1', 'double_slit_envelope', theme)


def nslit(theme):
    t = THEMES[theme]
    f, axes = plt.subplots(3, 1, figsize=(6, 5.4), dpi=200, sharex=True)
    f.patch.set_facecolor(t['bg'])
    g = np.linspace(-1.2, 1.2, 6000) * np.pi      # gamma
    for ax, N in zip(axes, (2, 4, 8)):
        style(ax, t)
        with np.errstate(all='ignore'):
            r = np.where(np.abs(np.sin(g)) < 1e-9, N, np.sin(N * g) / np.sin(g)) ** 2
        ax.plot(g / np.pi, r / N ** 2, color=t['a'], lw=1.5)
        ax.set_ylabel('$N=%d$' % N, color=t['fg'])
        ax.set_ylim(0, 1.08)
        ax.set_yticks([0, 1])
    axes[-1].set_xlabel('$\\gamma/\\pi = d\\sin\\theta/\\lambda$  (principal maxima at integers)')
    axes[0].set_title('$(\\sin N\\gamma/\\sin\\gamma)^2/N^2$: sharper maxima and $N-2$ weak ones between', fontsize=9.5,
                      color=t['fg'])
    save(f, 'c.3.3.1', 'nslit_patterns', theme)


def fresnel_cs(v):
    """Fresnel integrals by cumulative trapezoid on a fine grid (no scipy)."""
    n = 40001
    s = np.linspace(0, v.max(), n)
    c = np.concatenate([[0], np.cumsum((np.cos(np.pi * s[:-1] ** 2 / 2) + np.cos(np.pi * s[1:] ** 2 / 2)) / 2 * np.diff(s))])
    sn = np.concatenate([[0], np.cumsum((np.sin(np.pi * s[:-1] ** 2 / 2) + np.sin(np.pi * s[1:] ** 2 / 2)) / 2 * np.diff(s))])
    return np.interp(v, s, c), np.interp(v, s, sn)


def cornu(theme):
    f, ax, t = fig(theme, 5.2, 5.2)
    v = np.linspace(0, 5, 6000)
    C, S = fresnel_cs(v)
    ax.plot(C, S, color=t['a'], lw=1.8)
    ax.plot(-C, -S, color=t['a'], lw=1.8)
    ax.plot([.5, -.5], [.5, -.5], 'o', color=t['c'], ms=5)
    ax.text(.68, .66, '$(\\frac{1}{2},\\frac{1}{2})$', color=t['c'], fontsize=9)
    ax.text(-.68, -.7, '$(-\\frac{1}{2},-\\frac{1}{2})$', color=t['c'], fontsize=9, ha='right')
    for vv in (1.0, 2.0):
        c1, s1 = (float(a[0]) for a in fresnel_cs(np.array([vv, vv])))
        ax.plot([c1], [s1], 'o', color=t['b'], ms=4)
        ax.text(c1 + .04, s1 - .07, '$v=%g$' % vv, color=t['b'], fontsize=8)
    ax.set_aspect('equal')
    ax.set_xlim(-1, 1)
    ax.set_ylim(-1, 1)
    ax.set_xlabel('$C(v)$')
    ax.set_ylabel('$S(v)$')
    ax.set_title('The Cornu spiral', fontsize=10)
    save(f, 'c.3.5.1', 'cornu_spiral', theme)


def straight_edge(theme):
    f, ax, t = fig(theme)
    v = np.linspace(-4, 6, 4001)
    C, S = fresnel_cs(np.abs(v))
    C, S = np.sign(v) * C, np.sign(v) * S
    I = 0.5 * ((C + .5) ** 2 + (S + .5) ** 2)
    ax.plot(v, I, color=t['a'], lw=2)
    ax.axhline(1, color=t['mute'], ls='--', lw=1)
    ax.axvline(0, color=t['b'], ls=':', lw=1.2)
    ax.text(0.08, 0.05, 'edge of\ngeometrical shadow', color=t['b'], fontsize=8)
    ax.plot([0], [.25], 'o', color=t['c'], ms=4)
    ax.text(0.12, 0.3, '$I_0/4$', color=t['c'], fontsize=9)
    i = np.argmax(I)
    ax.plot([v[i]], [I[i]], 'o', color=t['c'], ms=4)
    ax.text(v[i] + .1, I[i] + .03, '1.37 $I_0$ at $v\\approx1.22$', color=t['c'], fontsize=8)
    ax.set_xlabel('$v = x\\sqrt{2(a+b)/(ab\\lambda)}$   (shadow at $v<0$)')
    ax.set_ylabel('$I/I_0$')
    ax.set_title('Straight-edge diffraction', fontsize=10)
    ax.set_ylim(0, 1.5)
    save(f, 'c.3.5.2', 'straight_edge_intensity', theme)


def ellipses(theme):
    t = THEMES[theme]
    f, axes = plt.subplots(1, 5, figsize=(9, 2.3), dpi=200)
    f.patch.set_facecolor(t['bg'])
    ph = np.linspace(0, 2 * np.pi, 400)
    for ax, (d, lab) in zip(axes, [(0, '$\\delta=0$'), (np.pi / 4, '$\\pi/4$'), (np.pi / 2, '$\\pi/2$'),
                                   (3 * np.pi / 4, '$3\\pi/4$'), (np.pi, '$\\pi$')]):
        style(ax, t)
        ax.grid(False)
        ax.plot(np.cos(ph), np.cos(ph + d), color=t['a'], lw=1.8)
        k = 60
        ax.annotate('', xy=(np.cos(ph[k + 3]), np.cos(ph[k + 3] + d)), xytext=(np.cos(ph[k]), np.cos(ph[k] + d)),
                    arrowprops=dict(arrowstyle='->', color=t['a'], lw=1.6))
        ax.axhline(0, color=t['mute'], lw=.6)
        ax.axvline(0, color=t['mute'], lw=.6)
        ax.set_xlim(-1.3, 1.3)
        ax.set_ylim(-1.3, 1.3)
        ax.set_aspect('equal')
        ax.set_xticks([])
        ax.set_yticks([])
        ax.set_title(lab, fontsize=10, color=t['fg'])
    f.suptitle('$x=a\\cos\\omega t,\\ y=a\\cos(\\omega t+\\delta)$: line, ellipse, circle, ellipse, line', fontsize=9,
               color=t['fg'], y=.02, va='bottom')
    f.subplots_adjust(bottom=.16)
    d = os.path.join(ROOT, 'diagrams', theme)
    f.savefig(os.path.join(d, 'c.4.1.2_polarisation_ellipses.png'), facecolor=f.get_facecolor())
    plt.close(f)


def malus(theme):
    f, ax, t = fig(theme)
    th = np.linspace(0, 360, 900)
    ax.plot(th, np.cos(np.radians(th)) ** 2, color=t['a'], lw=2)
    ax.set_xticks(range(0, 361, 90))
    ax.axhline(.5, color=t['b'], ls='--', lw=1)
    ax.text(178, .53, 'unpolarised through a polariser: $\\frac{1}{2}$', color=t['b'], fontsize=8, ha='center')
    ax.set_xlabel('angle $\\theta$ between analyser axis and plane of vibration (degrees)')
    ax.set_ylabel('$I/I_0$')
    ax.set_title("Malus' law: $I=I_0\\cos^2\\theta$", fontsize=10)
    save(f, 'c.4.3.1', 'malus_law', theme)


def phasor_polygon(theme):
    f, ax, t = fig(theme, 5.6, 4.2)
    ax.grid(False)
    N, delta = 6, 0.55
    pts = [np.array([0.0, 0.0])]
    for k in range(N):
        ang = k * delta
        pts.append(pts[-1] + np.array([np.cos(ang), np.sin(ang)]))
    pts = np.array(pts)
    for k in range(N):
        ax.annotate('', xy=pts[k + 1], xytext=pts[k], arrowprops=dict(arrowstyle='->', color=t['b'], lw=1.8))
    ax.annotate('', xy=pts[-1], xytext=pts[0], arrowprops=dict(arrowstyle='->', color=t['a'], lw=2.4))
    ax.set_aspect('equal')
    ax.set_xlim(-.6, pts[:, 0].max() + .6)
    ax.set_ylim(-.5, pts[:, 1].max() + .6)
    ax.set_xticks([])
    ax.set_yticks([])
    ax.text(pts[-1][0] * .45, pts[-1][1] * .45 - .32, '$a$', color=t['a'], fontsize=12, ha='center')
    ax.text(.5, -.3, '$a_0$', color=t['b'], fontsize=10, ha='center')
    ax.set_title('$N$ equal phasors, step $\\delta$: resultant $a=a_0\\sin(N\\delta/2)/\\sin(\\delta/2)$', fontsize=9.5)
    save(f, 'c.2.1.3', 'phasor_polygon', theme)


def zone_spiral(theme):
    f, ax, t = fig(theme, 5.2, 5.2)
    ax.grid(False)
    # each half-period zone turns the phasor through pi and adds a little less than the one before
    th = np.linspace(0, 12 * np.pi, 3000)
    amp = 1 - th / (12.5 * np.pi)
    z = np.cumsum(amp * np.exp(1j * th)) * (th[1] - th[0]) / 2
    ax.plot(z.real, z.imag, color=t['a'], lw=1.6)
    ax.plot([0, z.real[-1]], [0, z.imag[-1]], color=t['b'], lw=2.2)
    ax.text(z.real[-1] / 2, z.imag[-1] / 2 + .12, '$A\\approx A_1/2$', color=t['b'], fontsize=10, ha='center')
    ax.plot([0, z.real[len(z) // 12]], [0, 0], color=t['c'], lw=1)
    ax.text(z.real[len(z) // 12] / 2, -.1, '$A_1$', color=t['c'], fontsize=10, ha='center')
    ax.set_aspect('equal')
    ax.set_xticks([])
    ax.set_yticks([])
    ax.set_title('Zone amplitudes spiral in to $A_1/2$', fontsize=10)
    save(f, 'c.3.4.2', 'zone_amplitude_spiral', theme)


def main():
    for theme in THEMES:
        for fn in (young, single_slit, double_slit, nslit, cornu, straight_edge, ellipses, malus, phasor_polygon,
                   zone_spiral):
            fn(theme)
    print('plots written')


if __name__ == '__main__':
    main()
