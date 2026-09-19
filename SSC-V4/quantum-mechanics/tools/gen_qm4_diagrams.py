#!/usr/bin/env python3
"""Generate light/dark diagrams for Quantum Mechanics I — Module IV:
The Quantum Harmonic Oscillator & 3D Potentials.
Matches exact styling:
- Dark: bg #0f172a, card #1e293b, stroke #334155, accent #38bdf8 / #818cf8 / #34d399 / #f472b6, text #f8fafc / #94a3b8
- Light: bg #ffffff, card #f8fafc, stroke #cbd5e1, accent #0284c7 / #4f46e5 / #059669 / #db2777, text #0f172a / #64748b
"""
import os
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

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

def save_fig(fig, filename):
    for mode, dpath in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        path = os.path.join(dpath, filename)
    fig.clear()
    plt.close(fig)

# 1. c.4.1.1: SHO Potential and Energy Levels
def gen_c_4_1_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        x = np.linspace(-3.2, 3.2, 400)
        V = 0.5 * x**2
        ax.plot(x, V, color=t['muted'], lw=2.2, label=r'Potential $V(x) = \frac{1}{2}m\omega^2 x^2$')

        levels = [0.5, 1.5, 2.5, 3.5]
        labels = [r'$n=0: E_0 = \frac{1}{2}\hbar\omega$',
                  r'$n=1: E_1 = \frac{3}{2}\hbar\omega$',
                  r'$n=2: E_2 = \frac{5}{2}\hbar\omega$',
                  r'$n=3: E_3 = \frac{7}{2}\hbar\omega$']
        colors = [t['green'], t['cyan'], t['purple'], t['orange']]

        for E, lbl, col in zip(levels, labels, colors):
            x_turn = np.sqrt(2 * E)
            ax.hlines(E, -x_turn, x_turn, color=col, lw=2.4)
            ax.plot([-x_turn, x_turn], [E, E], 'o', color=col, markersize=4.5)
            ax.text(x_turn + 0.15, E, lbl, color=col, fontsize=9.5, va='center', fontweight='bold')

        # Annotate spacing
        ax.annotate('', xy=(0.3, 1.5), xytext=(0.3, 0.5),
                    arrowprops=dict(arrowstyle='<->', color=t['pink'], lw=1.6))
        ax.text(0.45, 1.0, r'$\Delta E = \hbar\omega$', color=t['pink'], fontsize=9.5, va='center', fontweight='bold')

        # Annotate zero point energy
        ax.annotate('Zero-Point Energy', xy=(0, 0.5), xytext=(-2.5, 0.7),
                    arrowprops=dict(arrowstyle='->', color=t['green'], lw=1.2),
                    color=t['green'], fontsize=9, fontweight='bold')

        ax.set_xlim(-3.4, 4.5)
        ax.set_ylim(-0.2, 4.2)
        ax.set_title('Quantum Harmonic Oscillator: Equispaced Quantized Energy Levels', color=t['text'], fontsize=12, fontweight='bold', pad=12)
        ax.set_xlabel(r'Position $x$', color=t['text'], fontsize=10.5)
        ax.set_ylabel(r'Energy $E$', color=t['text'], fontsize=10.5)
        ax.tick_params(colors=t['muted'])
        for spine in ax.spines.values():
            spine.set_color(t['stroke'])
        ax.grid(True, linestyle='--', alpha=0.3, color=t['stroke'])

        plt.tight_layout()
        plt.savefig(os.path.join(out_dir, 'c.4.1.1_sho_potential_energy_levels.png'), facecolor=t['bg'])
        plt.close(fig)

# 2. c.4.1.2: Ladder Operators Action
def gen_c_4_1_2():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        levels = [0, 1, 2, 3]
        labels = [r'$|0\rangle$ (Ground State)', r'$|1\rangle$', r'$|2\rangle$', r'$|3\rangle$']

        for i, (n, lbl) in enumerate(zip(levels, labels)):
            ax.hlines(n, 1.5, 4.5, color=t['cyan'], lw=3.0)
            ax.text(4.7, n, lbl, color=t['text'], fontsize=10, va='center', fontweight='bold')

        # Up arrows (creation a†)
        for n in range(3):
            ax.annotate('', xy=(2.3, n + 0.95), xytext=(2.3, n + 0.05),
                        arrowprops=dict(arrowstyle='->', color=t['green'], lw=2.0))
            ax.text(2.0, n + 0.5, rf'$a^\dagger|{n}\rangle = \sqrt{{{n+1}}}|{n+1}\rangle$',
                    color=t['green'], fontsize=8.8, ha='right', va='center', fontweight='bold')

        # Down arrows (annihilation a)
        for n in range(1, 4):
            ax.annotate('', xy=(3.7, n - 0.95), xytext=(3.7, n - 0.05),
                        arrowprops=dict(arrowstyle='->', color=t['pink'], lw=2.0))
            ax.text(4.0, n - 0.5, rf'$a|{n}\rangle = \sqrt{{{n}}}|{n-1}\rangle$',
                    color=t['pink'], fontsize=8.8, ha='left', va='center', fontweight='bold')

        # a|0> = 0 termination
        ax.annotate('', xy=(3.7, -0.6), xytext=(3.7, -0.05),
                    arrowprops=dict(arrowstyle='->', color=t['orange'], lw=2.0, linestyle=':'))
        ax.text(3.7, -0.75, r'$a|0\rangle = 0$ (Termination)', color=t['orange'], fontsize=9.5, ha='center', fontweight='bold')

        ax.set_xlim(0.5, 5.8)
        ax.set_ylim(-1.0, 3.8)
        ax.axis('off')
        ax.set_title(r'Algebraic Ladder Operators: Raising $a^\dagger$ and Lowering $a$', color=t['text'], fontsize=12, fontweight='bold', pad=12)

        plt.tight_layout()
        plt.savefig(os.path.join(out_dir, 'c.4.1.2_ladder_operators_action.png'), facecolor=t['bg'])
        plt.close(fig)

# 3. c.4.1.3: SHO Wavefunctions and Probability Densities
def gen_c_4_1_3():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(7.5, 4.0), dpi=180)
        fig.patch.set_facecolor(t['bg'])

        x = np.linspace(-3.5, 3.5, 400)
        # psi_0 = (1/pi^0.25) * exp(-x^2/2)
        psi0 = (1.0 / np.pi**0.25) * np.exp(-x**2 / 2.0)
        # psi_1 = (sqrt(2)/pi^0.25) * x * exp(-x^2/2)
        psi1 = (np.sqrt(2.0) / np.pi**0.25) * x * np.exp(-x**2 / 2.0)

        # Plot Wavefunctions
        ax1.set_facecolor(t['card'])
        ax1.plot(x, psi0, color=t['cyan'], lw=2.2, label=r'$\psi_0(x)$ (even, 0 nodes)')
        ax1.plot(x, psi1, color=t['pink'], lw=2.2, label=r'$\psi_1(x)$ (odd, 1 node)')
        ax1.axhline(0, color=t['stroke'], lw=1.0)
        ax1.set_title(r'Spatial Wavefunctions $\psi_n(x)$', color=t['text'], fontsize=10.5, fontweight='bold')
        ax1.set_xlabel(r'$x/\xi$', color=t['text'], fontsize=9.5)
        ax1.set_ylabel(r'$\psi_n(x)$', color=t['text'], fontsize=9.5)
        ax1.tick_params(colors=t['muted'])
        for s in ax1.spines.values(): s.set_color(t['stroke'])
        ax1.grid(True, linestyle='--', alpha=0.3, color=t['stroke'])
        ax1.legend(loc='upper right', fontsize=8, facecolor=t['bg'], edgecolor=t['stroke'], labelcolor=t['text'])

        # Plot Probability Densities
        ax2.set_facecolor(t['card'])
        ax2.plot(x, psi0**2, color=t['cyan'], lw=2.2, label=r'$|\psi_0|^2$ (central peak)')
        ax2.fill_between(x, psi0**2, alpha=0.25, color=t['cyan'])
        ax2.plot(x, psi1**2, color=t['pink'], lw=2.2, label=r'$|\psi_1|^2$ (node at origin)')
        ax2.fill_between(x, psi1**2, alpha=0.25, color=t['pink'])
        ax2.set_title(r'Probability Densities $|\psi_n(x)|^2$', color=t['text'], fontsize=10.5, fontweight='bold')
        ax2.set_xlabel(r'$x/\xi$', color=t['text'], fontsize=9.5)
        ax2.set_ylabel(r'$|\psi_n(x)|^2$', color=t['text'], fontsize=9.5)
        ax2.tick_params(colors=t['muted'])
        for s in ax2.spines.values(): s.set_color(t['stroke'])
        ax2.grid(True, linestyle='--', alpha=0.3, color=t['stroke'])
        ax2.legend(loc='upper right', fontsize=8, facecolor=t['bg'], edgecolor=t['stroke'], labelcolor=t['text'])

        plt.tight_layout()
        plt.savefig(os.path.join(out_dir, 'c.4.1.3_sho_wavefunctions_probabilities.png'), facecolor=t['bg'])
        plt.close(fig)

# 4. c.4.2.1: 3D Separation of Variables
def gen_c_4_2_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.2), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        # Draw 3D coordinate system & factorization boxes
        ax.text(0.5, 0.85, r'$\Psi(x,y,z) = X(x) \, Y(y) \, Z(z)$', color=t['cyan'], fontsize=13, ha='center', fontweight='bold')
        ax.text(0.5, 0.70, r'$\hat{H} = \hat{H}_x + \hat{H}_y + \hat{H}_z \rightarrow E = E_x + E_y + E_z$', color=t['purple'], fontsize=11, ha='center', fontweight='bold')

        # Three decoupled boxes
        box_coords = [0.18, 0.5, 0.82]
        box_titles = ['X-Equation', 'Y-Equation', 'Z-Equation']
        box_eqs = [
            r'$-\frac{\hbar^2}{2m}\frac{d^2X}{dx^2} + V_x X = E_x X$',
            r'$-\frac{\hbar^2}{2m}\frac{d^2Y}{dy^2} + V_y Y = E_y Y$',
            r'$-\frac{\hbar^2}{2m}\frac{d^2Z}{dz^2} + V_z Z = E_z Z$'
        ]
        cols = [t['green'], t['cyan'], t['orange']]

        for cx, title, eq, col in zip(box_coords, box_titles, box_eqs, cols):
            rect = plt.Rectangle((cx - 0.14, 0.18), 0.28, 0.38, facecolor=t['bg'], edgecolor=col, lw=2.0, zorder=2)
            ax.add_patch(rect)
            ax.text(cx, 0.48, title, color=col, fontsize=10, ha='center', fontweight='bold', zorder=3)
            ax.text(cx, 0.32, eq, color=t['text'], fontsize=8.5, ha='center', zorder=3)

        # Draw arrows from top to boxes
        for cx in box_coords:
            ax.annotate('', xy=(cx, 0.58), xytext=(0.5, 0.65),
                        arrowprops=dict(arrowstyle='->', color=t['stroke'], lw=1.5))

        ax.set_xlim(0, 1)
        ax.set_ylim(0.05, 0.98)
        ax.axis('off')
        ax.set_title('3D Cartesian Separation of Variables: Decoupling into Three 1D Problems', color=t['text'], fontsize=11.5, fontweight='bold', pad=10)

        plt.tight_layout()
        plt.savefig(os.path.join(out_dir, 'c.4.2.1_separation_of_variables_3d.png'), facecolor=t['bg'])
        plt.close(fig)

# 5. c.4.3.1: 3D Cubic Box Degeneracy
def gen_c_4_3_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        # Energy levels E = (nx^2 + ny^2 + nz^2) E_0
        # (1,1,1) -> 3 E0, deg 1
        # (2,1,1), (1,2,1), (1,1,2) -> 6 E0, deg 3
        # (2,2,1), (2,1,2), (1,2,2) -> 9 E0, deg 3
        # (3,1,1), (1,3,1), (1,1,3) -> 11 E0, deg 3
        # (2,2,2) -> 12 E0, deg 1
        # (1,2,3) permutations -> 14 E0, deg 6
        levels = [
            (3, 1, '(1,1,1)', t['green']),
            (6, 3, '(2,1,1), (1,2,1), (1,1,2)', t['cyan']),
            (9, 3, '(2,2,1), (2,1,2), (1,2,2)', t['purple']),
            (11, 3, '(3,1,1), (1,3,1), (1,1,3)', t['pink']),
            (12, 1, '(2,2,2)', t['orange']),
            (14, 6, 'Permutations of (1,2,3)', t['accent'])
        ]

        for E_val, deg, states, col in levels:
            ax.hlines(E_val, 1.5, 4.0, color=col, lw=2.6)
            ax.text(4.2, E_val, rf'$E = {E_val}E_1$ (Degeneracy $g = {deg}$)', color=col, fontsize=9.2, va='center', fontweight='bold')
            ax.text(1.3, E_val, states, color=t['muted'], fontsize=8.0, va='center', ha='right')

        ax.set_xlim(-0.8, 6.2)
        ax.set_ylim(1.5, 16.0)
        ax.set_title(r'3D Cubic Box Energy Levels & Degeneracies ($E_1 = \pi^2\hbar^2/2mL^2$)', color=t['text'], fontsize=11.5, fontweight='bold', pad=12)
        ax.set_ylabel(r'Energy in units of $E_1$', color=t['text'], fontsize=10.5)
        ax.tick_params(colors=t['muted'])
        ax.set_xticks([])
        for spine in ax.spines.values():
            spine.set_color(t['stroke'])
        ax.grid(True, linestyle='--', alpha=0.3, color=t['stroke'], axis='y')

        plt.tight_layout()
        plt.savefig(os.path.join(out_dir, 'c.4.3.1_3d_cubic_box_degeneracy.png'), facecolor=t['bg'])
        plt.close(fig)

# 6. c.4.4.1: 3D Isotropic Oscillator Degeneracy
def gen_c_4_4_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        # E_N = (N + 3/2) hbar omega
        # g_N = (N+1)(N+2)/2
        # N=0: 3/2, g=1
        # N=1: 5/2, g=3
        # N=2: 7/2, g=6
        # N=3: 9/2, g=10
        levels = [
            (0, 1.5, 1, '(0,0,0)', t['green']),
            (1, 2.5, 3, '(1,0,0), (0,1,0), (0,0,1)', t['cyan']),
            (2, 3.5, 6, '3 of (2,0,0) + 3 of (1,1,0)', t['purple']),
            (3, 4.5, 10, '3 of (3,0,0) + 6 of (2,1,0) + 1 of (1,1,1)', t['pink'])
        ]

        for N, E_val, deg, states, col in levels:
            ax.hlines(E_val, 1.5, 3.8, color=col, lw=2.8)
            ax.text(4.0, E_val, rf'$N={N}: E = \frac{{{int(2*E_val)}}}{{2}}\hbar\omega$  [$g_{{{N}}} = {deg}$]',
                    color=col, fontsize=9.5, va='center', fontweight='bold')
            ax.text(1.3, E_val, states, color=t['muted'], fontsize=7.8, va='center', ha='right')

        ax.text(2.65, 0.6, r'Degeneracy Formula: $g_N = \frac{(N+1)(N+2)}{2}$',
                color=t['text'], fontsize=10.5, ha='center', fontweight='bold',
                bbox=dict(boxstyle='round,pad=0.4', facecolor=t['bg'], edgecolor=t['stroke']))

        ax.set_xlim(-1.2, 5.8)
        ax.set_ylim(0.2, 5.2)
        ax.set_title(r'3D Isotropic Oscillator Spectrum: $E_N = (N + \frac{3}{2})\hbar\omega$', color=t['text'], fontsize=11.5, fontweight='bold', pad=12)
        ax.set_ylabel(r'Energy in units of $\hbar\omega$', color=t['text'], fontsize=10.5)
        ax.tick_params(colors=t['muted'])
        ax.set_xticks([])
        for spine in ax.spines.values():
            spine.set_color(t['stroke'])
        ax.grid(True, linestyle='--', alpha=0.3, color=t['stroke'], axis='y')

        plt.tight_layout()
        plt.savefig(os.path.join(out_dir, 'c.4.4.1_3d_isotropic_oscillator_degeneracy.png'), facecolor=t['bg'])
        plt.close(fig)

if __name__ == '__main__':
    print("Generating Module IV diagrams...")
    gen_c_4_1_1()
    gen_c_4_1_2()
    gen_c_4_1_3()
    gen_c_4_2_1()
    gen_c_4_3_1()
    gen_c_4_4_1()
    print("Module IV diagrams generated successfully in diagrams/light and diagrams/dark.")
