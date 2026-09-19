#!/usr/bin/env python3
"""Generate light/dark diagrams for Quantum Mechanics II — Module I:
The Central Potential & Hydrogen Atom.
"""
import os
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

def j_0(x):
    return np.sin(x) / x

def j_1(x):
    return np.sin(x) / (x**2) - np.cos(x) / x

def j_2(x):
    return (3.0 / (x**3) - 1.0 / x) * np.sin(x) - (3.0 / (x**2)) * np.cos(x)


HERE = os.path.dirname(os.path.abspath(__file__))
DIAG_DIR = os.path.join(HERE, '..', 'diagrams')
LIGHT_DIR = os.path.join(DIAG_DIR, 'light')
DARK_DIR = os.path.join(DIAG_DIR, 'dark')

os.makedirs(LIGHT_DIR, exist_ok=True)
os.makedirs(DARK_DIR, exist_ok=True)

THEMES = {
    'light': {
        'bg': '#ffffff', 'card': '#f8fafc', 'stroke': '#cbd5e1',
        'text': '#0f172a', 'muted': '#64748b', 'accent': '#0284c7',
        'cyan': '#0284c7', 'purple': '#4f46e5', 'green': '#059669',
        'pink': '#db2777', 'orange': '#d97706', 'grid': '#e2e8f0'
    },
    'dark': {
        'bg': '#0f172a', 'card': '#1e293b', 'stroke': '#334155',
        'text': '#f8fafc', 'muted': '#94a3b8', 'accent': '#38bdf8',
        'cyan': '#38bdf8', 'purple': '#818cf8', 'green': '#34d399',
        'pink': '#f472b6', 'orange': '#fbbf24', 'grid': '#1e293b'
    }
}

# 1. c.5.1.1: Spherical Coordinates System & Volume Element
def gen_c_5_1_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig = plt.figure(figsize=(7.5, 5.0), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax = fig.add_subplot(111, projection='3d')
        ax.set_facecolor(t['card'])

        # Coordinate axes
        ax.plot([0, 2.0], [0, 0], [0, 0], color=t['muted'], lw=1.5)
        ax.plot([0, 0], [0, 2.0], [0, 0], color=t['muted'], lw=1.5)
        ax.plot([0, 0], [0, 0], [0, 2.0], color=t['muted'], lw=1.5)
        ax.text(2.1, 0, 0, r'$x$', color=t['text'], fontsize=11, fontweight='bold')
        ax.text(0, 2.1, 0, r'$y$', color=t['text'], fontsize=11, fontweight='bold')
        ax.text(0, 0, 2.1, r'$z$', color=t['text'], fontsize=11, fontweight='bold')

        # Point P at (r, theta, phi)
        r0 = 1.8
        theta0 = np.pi / 4  # 45 deg
        phi0 = np.pi / 3    # 60 deg
        x0 = r0 * np.sin(theta0) * np.cos(phi0)
        y0 = r0 * np.sin(theta0) * np.sin(phi0)
        z0 = r0 * np.cos(theta0)

        # Line from origin to P
        ax.plot([0, x0], [0, y0], [0, z0], color=t['cyan'], lw=2.5)
        ax.scatter([x0], [y0], [z0], color=t['pink'], s=50, zorder=5)
        ax.text(x0+0.1, y0+0.1, z0+0.1, r'$P(r,\theta,\phi)$', color=t['pink'], fontsize=10.5, fontweight='bold')

        # Projection onto xy plane
        ax.plot([x0, x0], [y0, y0], [z0, 0], '--', color=t['muted'], lw=1.2)
        ax.plot([0, x0], [0, y0], [0, 0], '--', color=t['purple'], lw=1.5)
        ax.scatter([x0], [y0], [0], color=t['purple'], s=25)

        # Arc for theta
        arc_th = np.linspace(0, theta0, 30)
        ax.plot(0.5 * np.sin(arc_th) * np.cos(phi0),
                0.5 * np.sin(arc_th) * np.sin(phi0),
                0.5 * np.cos(arc_th), color=t['orange'], lw=1.8)
        ax.text(0.3 * np.sin(theta0/2) * np.cos(phi0),
                0.3 * np.sin(theta0/2) * np.sin(phi0),
                0.55 * np.cos(theta0/2), r'$\theta$', color=t['orange'], fontsize=11, fontweight='bold')

        # Arc for phi in xy plane
        arc_phi = np.linspace(0, phi0, 30)
        ax.plot(0.6 * np.cos(arc_phi), 0.6 * np.sin(arc_phi), 0, color=t['green'], lw=1.8)
        ax.text(0.65 * np.cos(phi0/2), 0.65 * np.sin(phi0/2), 0, r'$\phi$', color=t['green'], fontsize=11, fontweight='bold')

        ax.set_title('Spherical Polar Coordinates $(r, \\theta, \\phi)$\n' +
                     r'$dV = r^2 \sin\theta \, dr \, d\theta \, d\phi$',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)
        ax.set_xlim([0, 2.2])
        ax.set_ylim([0, 2.2])
        ax.set_zlim([0, 2.2])
        ax.view_init(elev=22, azim=35)
        ax.grid(False)
        ax.axis('off')

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.5.1.1_spherical_coordinates_system.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 2. c.5.2.1: Spherical Harmonics Angular Patterns |Y_l^m|^2
def gen_c_5_2_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, axes = plt.subplots(1, 4, figsize=(9.5, 3.2), dpi=180, subplot_kw={'projection': 'polar'})
        fig.patch.set_facecolor(t['bg'])

        theta = np.linspace(0, 2 * np.pi, 300)

        # |Y_0^0|^2 = 1/(4pi) -> isotropic circle
        r00 = np.ones_like(theta) * np.sqrt(1.0 / (4 * np.pi))
        axes[0].plot(theta, r00, color=t['cyan'], lw=2.2)
        axes[0].fill(theta, r00, color=t['cyan'], alpha=0.25)
        axes[0].set_title(r'$l=0, m=0$ ($s$)' + '\n' + r'$|Y_0^0|^2 = \frac{1}{4\pi}$', color=t['text'], fontsize=9.5, fontweight='bold', pad=10)

        # |Y_1^0|^2 ~ cos^2(theta) -> p_z dumbbell
        r10 = np.abs(np.cos(theta)) * np.sqrt(3.0 / (4 * np.pi))
        axes[1].plot(theta, r10, color=t['purple'], lw=2.2)
        axes[1].fill(theta, r10, color=t['purple'], alpha=0.25)
        axes[1].set_title(r'$l=1, m=0$ ($p_z$)' + '\n' + r'$|Y_1^0|^2 \propto \cos^2\theta$', color=t['text'], fontsize=9.5, fontweight='bold', pad=10)

        # |Y_1^1|^2 ~ sin^2(theta) -> donut / perpendicular
        r11 = np.abs(np.sin(theta)) * np.sqrt(3.0 / (8 * np.pi))
        axes[2].plot(theta, r11, color=t['green'], lw=2.2)
        axes[2].fill(theta, r11, color=t['green'], alpha=0.25)
        axes[2].set_title(r'$l=1, m=\pm 1$ ($p_\pm$)' + '\n' + r'$|Y_1^{\pm 1}|^2 \propto \sin^2\theta$', color=t['text'], fontsize=9.5, fontweight='bold', pad=10)

        # |Y_2^0|^2 ~ (3 cos^2(theta) - 1)^2 -> d_z2 clover/dumbbell
        r20 = np.abs(3 * np.cos(theta)**2 - 1) * np.sqrt(5.0 / (16 * np.pi))
        axes[3].plot(theta, r20, color=t['orange'], lw=2.2)
        axes[3].fill(theta, r20, color=t['orange'], alpha=0.25)
        axes[3].set_title(r'$l=2, m=0$ ($d_{z^2}$)' + '\n' + r'$|Y_2^0|^2 \propto (3\cos^2\theta-1)^2$', color=t['text'], fontsize=9.5, fontweight='bold', pad=10)

        for ax in axes:
            ax.set_facecolor(t['card'])
            ax.tick_params(colors=t['muted'], labelsize=7)
            ax.grid(color=t['grid'], lw=0.8, linestyle=':')

        fig.suptitle(r'Spherical Harmonics Angular Probability Density $|Y_l^m(\theta,\phi)|^2$',
                     color=t['text'], fontsize=11, fontweight='bold', y=1.04)
        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.5.2.1_spherical_harmonics_shapes.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180, bbox_inches='tight')
        plt.close(fig)

# 3. c.5.3.1: Effective Potential & Centrifugal Barrier
def gen_c_5_3_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        r = np.linspace(0.18, 4.5, 300)
        # Coulomb attractive potential V(r) = -1/r
        V_coul = -1.0 / r

        # Centrifugal barrier for l=0, 1, 2: l(l+1)/(2 r^2)
        for l, col, lbl in [(0, t['cyan'], r'$l=0$ (Pure Coulomb $V(r)$)'),
                            (1, t['purple'], r'$l=1$ ($V_{\mathrm{eff}} = -1/r + 1/r^2$)'),
                            (2, t['orange'], r'$l=2$ ($V_{\mathrm{eff}} = -1/r + 3/r^2$)')]:
            V_eff = V_coul + (l * (l + 1)) / (2 * r**2)
            ax.plot(r, V_eff, color=col, lw=2.2, label=lbl)

        ax.axhline(0, color=t['muted'], lw=1.0, linestyle='--')
        ax.set_ylim([-3.5, 3.0])
        ax.set_xlim([0.1, 4.5])
        ax.set_xlabel(r'Radial distance $r / a_0$', color=t['text'], fontsize=10.5)
        ax.set_ylabel(r'Effective Potential $V_{\mathrm{eff}}(r)$', color=t['text'], fontsize=10.5)
        ax.set_title(r'Centrifugal Barrier: $V_{\mathrm{eff}}(r) = V(r) + \frac{\hbar^2 l(l+1)}{2\mu r^2}$',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)

        # Annotations
        ax.annotate('Repulsive Centrifugal\nBarrier as $r \to 0$ for $l > 0$', xy=(0.4, 2.0), xytext=(1.2, 2.2),
                    color=t['pink'], fontsize=9.5, fontweight='bold',
                    arrowprops=dict(arrowstyle='->', color=t['pink'], lw=1.5))
        ax.annotate(r'Attractive Well ($E < 0$ Bound States)', xy=(2.0, -0.4), xytext=(2.3, -1.8),
                    color=t['green'], fontsize=9.5, fontweight='bold',
                    arrowprops=dict(arrowstyle='->', color=t['green'], lw=1.5))

        ax.legend(frameon=True, facecolor=t['bg'], edgecolor=t['stroke'], labelcolor=t['text'], fontsize=9)
        ax.grid(color=t['grid'], linestyle=':', lw=0.8)
        ax.tick_params(colors=t['text'])
        for spine in ax.spines.values():
            spine.set_color(t['stroke'])

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.5.3.1_effective_potential_centrifugal_barrier.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 4. c.5.3.3: Spherical Bessel Functions & Infinite Spherical Well
def gen_c_5_3_3():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        x = np.linspace(0.01, 14.0, 400)
        j0 = j_0(x)
        j1 = j_1(x)
        j2 = j_2(x)

        ax.plot(x, j0, color=t['cyan'], lw=2.2, label=r'$j_0(x) = \frac{\sin x}{x}$')
        ax.plot(x, j1, color=t['purple'], lw=2.2, label=r'$j_1(x) = \frac{\sin x}{x^2} - \frac{\cos x}{x}$')
        ax.plot(x, j2, color=t['orange'], lw=2.2, label=r'$j_2(x) = (\frac{3}{x^3}-\frac{1}{x})\sin x - \frac{3}{x^2}\cos x$')

        # Mark first roots of j0: pi, 2pi, 3pi
        roots_j0 = [np.pi, 2*np.pi, 3*np.pi]
        for idx, r0 in enumerate(roots_j0):
            ax.plot(r0, 0, 'o', color=t['cyan'], markersize=6)
            ax.text(r0, 0.08, f'$\\beta_{{{idx+1},0}}={idx+1}\\pi$', color=t['cyan'], fontsize=8.5, ha='center')

        # First root of j1: ~4.493
        ax.plot(4.4934, 0, 's', color=t['purple'], markersize=6)
        ax.text(4.4934, -0.15, r'$\beta_{1,1}=4.49$', color=t['purple'], fontsize=8.5, ha='center')

        ax.axhline(0, color=t['muted'], lw=1.0, linestyle='--')
        ax.set_ylim([-0.35, 1.05])
        ax.set_xlim([0, 14.0])
        ax.set_xlabel(r'Dimensionless variable $x = k r$', color=t['text'], fontsize=10.5)
        ax.set_ylabel(r'Radial function $R_{nl}(r) \propto j_l(kr)$', color=t['text'], fontsize=10.5)
        ax.set_title(r'Spherical Bessel Functions $j_l(kr)$ & Infinite Spherical Well Zeros $\beta_{nl}$',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)

        ax.legend(frameon=True, facecolor=t['bg'], edgecolor=t['stroke'], labelcolor=t['text'], fontsize=9)
        ax.grid(color=t['grid'], linestyle=':', lw=0.8)
        ax.tick_params(colors=t['text'])
        for spine in ax.spines.values():
            spine.set_color(t['stroke'])

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.5.3.3_spherical_bessel_functions.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 5. c.5.4.1: Hydrogen Energy Levels & Spectral Transitions
def gen_c_5_4_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.8, 5.2), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        # Levels n=1, 2, 3, 4, 5, inf
        ns = [1, 2, 3, 4, 5]
        Es = [-13.6 / (n**2) for n in ns]

        for n, E in zip(ns, Es):
            ax.hlines(E, 0.5, 4.5, color=t['cyan'], lw=2.0)
            ax.text(0.3, E, f'$n={n}$\n$({n**2}\\text{{-fold}})$', color=t['cyan'], fontsize=8.5, va='center', ha='right', fontweight='bold')
            ax.text(4.65, E, f'${E:.2f}\\text{{ eV}}$', color=t['text'], fontsize=8.5, va='center')

        # Continuum limit
        ax.hlines(0, 0.5, 4.5, color=t['pink'], lw=2.0, linestyle='--')
        ax.text(0.3, 0, r'$n \to \infty$', color=t['pink'], fontsize=9, va='center', ha='right', fontweight='bold')
        ax.text(4.65, 0, r'$0\text{ eV (Ionization)}$', color=t['pink'], fontsize=8.5, va='center')

        # Lyman series (n -> 1, UV)
        for n_init in [2, 3, 4]:
            E_init = -13.6 / (n_init**2)
            x_pos = 1.0 + (n_init - 2) * 0.3
            ax.annotate('', xy=(x_pos, Es[0]), xytext=(x_pos, E_init),
                        arrowprops=dict(arrowstyle='->', color=t['purple'], lw=1.6))
        ax.text(1.3, -8.0, 'Lyman Series\n(Ultraviolet)\n$n \\to 1$', color=t['purple'], fontsize=8.5, ha='center', fontweight='bold')

        # Balmer series (n -> 2, Visible)
        for n_init in [3, 4, 5]:
            E_init = -13.6 / (n_init**2)
            x_pos = 2.4 + (n_init - 3) * 0.3
            ax.annotate('', xy=(x_pos, Es[1]), xytext=(x_pos, E_init),
                        arrowprops=dict(arrowstyle='->', color=t['green'], lw=1.6))
        ax.text(2.7, -2.2, 'Balmer Series\n(Visible)\n$n \\to 2$', color=t['green'], fontsize=8.5, ha='center', fontweight='bold')

        # Paschen series (n -> 3, Infrared)
        for n_init in [4, 5]:
            E_init = -13.6 / (n_init**2)
            x_pos = 3.7 + (n_init - 4) * 0.3
            ax.annotate('', xy=(x_pos, Es[2]), xytext=(x_pos, E_init),
                        arrowprops=dict(arrowstyle='->', color=t['orange'], lw=1.6))
        ax.text(3.85, -0.7, 'Paschen\n(IR) $n \\to 3$', color=t['orange'], fontsize=8.0, ha='center', fontweight='bold')

        ax.set_ylim([-14.5, 1.2])
        ax.set_xlim([0.0, 5.6])
        ax.set_ylabel(r'Energy $E_n = -13.6 / n^2\text{ [eV]}$', color=t['text'], fontsize=10.5)
        ax.set_title(r'Hydrogen Atom Energy Spectrum, Degeneracy $g_n = n^2$, & Spectral Series',
                     color=t['text'], fontsize=11, fontweight='bold', pad=12)

        ax.grid(False)
        ax.axis('off')

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.5.4.1_hydrogen_energy_levels_transitions.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 6. c.5.4.3: Hydrogen Radial Probability Densities P_nl(r)
def gen_c_5_4_3():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, axes = plt.subplots(1, 3, figsize=(9.5, 3.5), dpi=180, sharey=False)
        fig.patch.set_facecolor(t['bg'])

        r = np.linspace(0, 16.0, 400)

        # 1s: R_10(r) = 2 e^(-r), P_10(r) = 4 r^2 e^(-2r)
        P10 = 4.0 * (r**2) * np.exp(-2.0 * r)
        axes[0].plot(r, P10, color=t['cyan'], lw=2.2, label=r'$1s$ ($n=1, l=0$)')
        axes[0].fill_between(r, 0, P10, color=t['cyan'], alpha=0.25)
        axes[0].axvline(1.0, color=t['pink'], lw=1.2, linestyle='--', label=r'Peak at $r=a_0$')
        axes[0].set_xlim([0, 5.0])
        axes[0].set_title(r'Ground State $1s$', color=t['text'], fontsize=9.5, fontweight='bold')
        axes[0].legend(frameon=False, fontsize=8, labelcolor=t['text'])

        # 2s: R_20(r) = 1/sqrt(2) (1 - r/2) e^(-r/2), P_20 = r^2 R^2
        R20 = (1.0 / np.sqrt(2.0)) * (1.0 - 0.5 * r) * np.exp(-0.5 * r)
        P20 = (r**2) * (R20**2)
        axes[1].plot(r, P20, color=t['purple'], lw=2.2, label=r'$2s$ ($n=2, l=0$)')
        axes[1].fill_between(r, 0, P20, color=t['purple'], alpha=0.25)
        axes[1].plot(2.0, 0, 'o', color=t['pink'], markersize=5, label=r'Radial node $r=2a_0$')
        axes[1].set_xlim([0, 14.0])
        axes[1].set_title(r'Excited State $2s$ (1 Node)', color=t['text'], fontsize=9.5, fontweight='bold')
        axes[1].legend(frameon=False, fontsize=8, labelcolor=t['text'])

        # 2p: R_21(r) = 1/sqrt(24) r e^(-r/2), P_21 = r^2 R^2
        R21 = (1.0 / np.sqrt(24.0)) * r * np.exp(-0.5 * r)
        P21 = (r**2) * (R21**2)
        axes[2].plot(r, P21, color=t['orange'], lw=2.2, label=r'$2p$ ($n=2, l=1$)')
        axes[2].fill_between(r, 0, P21, color=t['orange'], alpha=0.25)
        axes[2].axvline(4.0, color=t['green'], lw=1.2, linestyle='--', label=r'Peak at $r=4a_0$')
        axes[2].set_xlim([0, 14.0])
        axes[2].set_title(r'Excited State $2p$ (0 Nodes)', color=t['text'], fontsize=9.5, fontweight='bold')
        axes[2].legend(frameon=False, fontsize=8, labelcolor=t['text'])

        for ax in axes:
            ax.set_facecolor(t['card'])
            ax.set_xlabel(r'$r / a_0$', color=t['text'], fontsize=9.5)
            ax.set_ylabel(r'$P_{nl}(r) = r^2 |R_{nl}|^2$', color=t['text'], fontsize=8.5)
            ax.grid(color=t['grid'], linestyle=':', lw=0.8)
            ax.tick_params(colors=t['text'], labelsize=8)
            for spine in ax.spines.values():
                spine.set_color(t['stroke'])

        fig.suptitle(r'Hydrogen Atom Radial Probability Distribution $P_{nl}(r) = r^2 |R_{nl}(r)|^2$',
                     color=t['text'], fontsize=11, fontweight='bold', y=1.03)
        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.5.4.3_hydrogen_radial_probability_densities.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180, bbox_inches='tight')
        plt.close(fig)

if __name__ == '__main__':
    print("Generating Module I diagrams...")
    gen_c_5_1_1()
    gen_c_5_2_1()
    gen_c_5_3_1()
    gen_c_5_3_3()
    gen_c_5_4_1()
    gen_c_5_4_3()
    print("Module I diagrams generated successfully!")
