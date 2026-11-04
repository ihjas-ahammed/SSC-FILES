#!/usr/bin/env python3
"""Generate light/dark diagrams for Quantum Mechanics II — Module II:
Angular Momentum & Spin.
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

# 1. c.6.1.1: Orbital Angular Momentum & Commutators
def gen_c_6_1_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        # Draw circular commutator cycle
        angles = np.array([np.pi/2, 7*np.pi/6, 11*np.pi/6])
        labels = [r'$\hat{L}_x$', r'$\hat{L}_y$', r'$\hat{L}_z$']
        colors = [t['cyan'], t['purple'], t['orange']]
        pts = np.column_stack([np.cos(angles)*1.4, np.sin(angles)*1.4])

        for (x, y), lbl, col in zip(pts, labels, colors):
            circle = plt.Circle((x, y), 0.35, color=col, alpha=0.2)
            ax.add_patch(circle)
            circle_b = plt.Circle((x, y), 0.35, fill=False, edgecolor=col, lw=2.0)
            ax.add_patch(circle_b)
            ax.text(x, y, lbl, color=col, fontsize=14, fontweight='bold', ha='center', va='center')

        # Cyclic arrows
        r_arc = 1.4
        arc_x = [0.8, -0.8, 0.0]
        arc_y = [0.0, -0.6, 0.9]
        commutators = [
            r'$[\hat{L}_x, \hat{L}_y] = i\hbar\hat{L}_z$',
            r'$[\hat{L}_y, \hat{L}_z] = i\hbar\hat{L}_x$',
            r'$[\hat{L}_z, \hat{L}_x] = i\hbar\hat{L}_y$'
        ]

        # Draw curved arrows
        from matplotlib.patches import FancyArrowPatch
        p1 = FancyArrowPatch((pts[0][0]-0.25, pts[0][1]-0.25), (pts[1][0]+0.1, pts[1][1]+0.3),
                             connectionstyle="arc3,rad=0.25", arrowstyle="->", mutation_scale=16, color=t['pink'], lw=2.0)
        p2 = FancyArrowPatch((pts[1][0]+0.3, pts[1][1]-0.05), (pts[2][0]-0.3, pts[2][1]-0.05),
                             connectionstyle="arc3,rad=0.25", arrowstyle="->", mutation_scale=16, color=t['pink'], lw=2.0)
        p3 = FancyArrowPatch((pts[2][0]+0.1, pts[2][1]+0.3), (pts[0][0]+0.25, pts[0][1]-0.25),
                             connectionstyle="arc3,rad=0.25", arrowstyle="->", mutation_scale=16, color=t['pink'], lw=2.0)
        ax.add_patch(p1)
        ax.add_patch(p2)
        ax.add_patch(p3)

        ax.text(0, -0.1, r'$[\hat{\mathbf{L}}^2, \hat{L}_i] = 0$' + '\n' +
                          r'$[\hat{L}_i, \hat{L}_j] = i\hbar\varepsilon_{ijk}\hat{L}_k$',
                color=t['text'], fontsize=11, fontweight='bold', ha='center', va='center',
                bbox=dict(boxstyle='round,pad=0.5', facecolor=t['bg'], edgecolor=t['stroke'], lw=1.2))

        ax.set_xlim([-2.3, 2.3])
        ax.set_ylim([-2.0, 2.2])
        ax.set_title(r'Orbital Angular Momentum Lie Algebra & Cyclic Commutators',
                     color=t['text'], fontsize=11.5, fontweight='bold', pad=10)
        ax.axis('off')

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.6.1.1_orbital_angular_momentum_commutators.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 2. c.6.2.1: Geometrical Vector Cones of Angular Momentum (j=2)
def gen_c_6_2_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 5.0), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        j = 2
        J_mag = np.sqrt(j * (j + 1))  # sqrt(6) ~ 2.449
        ms = [-2, -1, 0, 1, 2]
        colors = [t['muted'], t['cyan'], t['green'], t['purple'], t['orange']]

        # z axis
        ax.plot([0, 0], [-2.8, 2.8], color=t['text'], lw=1.8)
        ax.text(0.1, 2.8, r'$z$-axis ($J_z = m\hbar$)', color=t['text'], fontsize=10, fontweight='bold')

        # Draw vectors and cones for each m
        for m, col in zip(ms, colors):
            theta = np.arccos(m / J_mag)
            # vector in xz plane
            vx = J_mag * np.sin(theta)
            vz = m
            ax.arrow(0, 0, vx, vz, head_width=0.1, head_length=0.12, fc=col, ec=col, lw=2.2, length_includes_head=True)
            ax.arrow(0, 0, -vx, vz, head_width=0.08, head_length=0.1, fc=col, ec=col, lw=1.2, linestyle=':', length_includes_head=True)

            # Precession ellipse
            u = np.linspace(0, 2*np.pi, 100)
            ex = vx * np.cos(u)
            ey = vz + 0.15 * np.sin(u)
            ax.plot(ex, ey, color=col, alpha=0.5, lw=1.0)

            ax.text(vx + 0.15, vz, f'$m={m}$ ($\\theta={np.degrees(theta):.1f}^\\circ$)',
                    color=col, fontsize=9, fontweight='bold', va='center')

        # Outer sphere arc
        arc_phi = np.linspace(-np.pi/2, np.pi/2, 200)
        ax.plot(J_mag * np.cos(arc_phi), J_mag * np.sin(arc_phi), '--', color=t['muted'], lw=1.0, alpha=0.6)
        ax.text(1.6, -2.4, r'$|\mathbf{J}| = \hbar\sqrt{j(j+1)} = \sqrt{6}\hbar \approx 2.45\hbar$',
                color=t['pink'], fontsize=9.5, fontweight='bold')

        ax.set_xlim([-2.7, 3.2])
        ax.set_ylim([-3.0, 3.2])
        ax.set_title(r'Angular Momentum Vector Model for $j=2$: Precession Cones & Quantized $J_z$',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)
        ax.axis('off')

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.6.2.1_angular_momentum_vector_cones.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 3. c.6.3.1: Angular Momentum Ladder Spectrum & Transitions
def gen_c_6_3_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        states = [
            (2, r'$|j, +j\rangle$ (Top Rung)', t['orange']),
            (1, r'$|j, j-1\rangle$', t['purple']),
            (0, r'$|j, 0\rangle$', t['green']),
            (-1, r'$|j, -(j-1)\rangle$', t['cyan']),
            (-2, r'$|j, -j\rangle$ (Bottom Rung)', t['pink'])
        ]

        for val, lbl, col in states:
            ax.hlines(val, 1.0, 3.5, color=col, lw=3.0)
            ax.text(3.7, val, lbl, color=col, fontsize=10, fontweight='bold', va='center')
            ax.text(0.7, val, f'$m={val}$', color=t['muted'], fontsize=9.5, ha='right', va='center')

        # Ladder arrows
        # J+ raising
        for i in range(-2, 2):
            ax.annotate('', xy=(1.8, i+1), xytext=(1.8, i),
                        arrowprops=dict(arrowstyle='->', color=t['cyan'], lw=2.0))
        ax.text(1.5, 0.0, r'$\hat{J}_+$' + '\nRaising', color=t['cyan'], fontsize=9.5, fontweight='bold', ha='center')

        # J- lowering
        for i in range(2, -2, -1):
            ax.annotate('', xy=(2.7, i-1), xytext=(2.7, i),
                        arrowprops=dict(arrowstyle='->', color=t['purple'], lw=2.0))
        ax.text(3.0, 0.0, r'$\hat{J}_-$' + '\nLowering', color=t['purple'], fontsize=9.5, fontweight='bold', ha='center')

        # Termination markers
        ax.text(1.8, 2.35, r'$\hat{J}_+|j, +j\rangle = 0$', color=t['orange'], fontsize=9.5, fontweight='bold', ha='center')
        ax.text(2.7, -2.45, r'$\hat{J}_-|j, -j\rangle = 0$', color=t['pink'], fontsize=9.5, fontweight='bold', ha='center')

        ax.set_xlim([0.0, 5.0])
        ax.set_ylim([-2.8, 2.8])
        ax.set_title(r'Ladder Operators Spectrum: $(2j+1)$ Multiplet with $\Delta m = \pm 1$',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)
        ax.axis('off')

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.6.3.1_angular_momentum_ladder_spectrum.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 4. c.6.4.1: Stern-Gerlach Experiment & Spin Splitting
def gen_c_6_4_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.8, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        # Oven source
        oven = plt.Rectangle((0.3, 1.6), 0.7, 0.8, color=t['muted'], alpha=0.3)
        ax.add_patch(oven)
        ax.text(0.65, 2.0, 'Oven\nSource', color=t['text'], fontsize=8.5, ha='center', va='center', fontweight='bold')

        # Unpolarized beam
        ax.plot([1.0, 2.5], [2.0, 2.0], color=t['muted'], lw=2.5)
        ax.text(1.75, 2.2, 'Unpolarized Ag beam', color=t['muted'], fontsize=8.5, ha='center')

        # Inhomogeneous Magnet Poles
        # North pole (pointed)
        n_pole = plt.Polygon([(2.5, 2.8), (3.7, 2.8), (3.1, 2.3)], color=t['pink'], alpha=0.35)
        ax.add_patch(n_pole)
        ax.text(3.1, 2.65, 'N (sharp pole)', color=t['pink'], fontsize=8.5, ha='center', fontweight='bold')

        # South pole (flat)
        s_pole = plt.Rectangle((2.5, 1.2), 1.2, 0.5, color=t['cyan'], alpha=0.35)
        ax.add_patch(s_pole)
        ax.text(3.1, 1.45, 'S (flat pole)', color=t['cyan'], fontsize=8.5, ha='center', fontweight='bold')

        ax.text(3.1, 2.0, r'$\frac{\partial B_z}{\partial z} \neq 0$', color=t['orange'], fontsize=9.5, ha='center', va='center', fontweight='bold')

        # Splitting beams
        # Spin up deflected up
        ax.plot([3.7, 5.5], [2.0, 2.7], color=t['cyan'], lw=2.2)
        ax.plot(5.5, 2.7, 'o', color=t['cyan'], markersize=7)
        ax.text(5.65, 2.7, r'$S_z = +\frac{\hbar}{2}$ ($|\uparrow\rangle$)', color=t['cyan'], fontsize=9.5, fontweight='bold', va='center')

        # Spin down deflected down
        ax.plot([3.7, 5.5], [2.0, 1.3], color=t['purple'], lw=2.2)
        ax.plot(5.5, 1.3, 'o', color=t['purple'], markersize=7)
        ax.text(5.65, 1.3, r'$S_z = -\frac{\hbar}{2}$ ($|\downarrow\rangle$)', color=t['purple'], fontsize=9.5, fontweight='bold', va='center')

        # Detection screen
        ax.plot([5.5, 5.5], [0.8, 3.2], color=t['text'], lw=2.5)
        ax.text(5.5, 0.6, 'Detector Screen\n(Two discrete spots)', color=t['text'], fontsize=8.5, ha='center')

        ax.set_xlim([0.0, 7.0])
        ax.set_ylim([0.4, 3.4])
        ax.set_title('Stern-Gerlach Experiment: Space Quantization of Electron Spin $s=1/2$',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)
        ax.axis('off')

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.6.4.1_stern_gerlach_spin_splitting.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 5. c.6.4.3: Bloch Sphere Representation of Spin-1/2
def gen_c_6_4_3():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 5.0), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        # Sphere circle
        u = np.linspace(0, 2*np.pi, 200)
        ax.plot(np.cos(u)*1.8, np.sin(u)*1.8, color=t['muted'], lw=1.5)
        # Equator ellipse
        ax.plot(np.cos(u)*1.8, np.sin(u)*0.45, '--', color=t['muted'], lw=1.0)

        # Axes
        ax.plot([0, 0], [-2.1, 2.1], color=t['text'], lw=1.5)
        ax.plot([-2.1, 2.1], [0, 0], color=t['text'], lw=1.5)

        # Poles
        ax.scatter([0], [1.8], color=t['cyan'], s=60, zorder=5)
        ax.text(0.1, 1.95, r'$|0\rangle = |\uparrow\rangle$ (North Pole)', color=t['cyan'], fontsize=9.5, fontweight='bold')

        ax.scatter([0], [-1.8], color=t['purple'], s=60, zorder=5)
        ax.text(0.1, -2.0, r'$|1\rangle = |\downarrow\rangle$ (South Pole)', color=t['purple'], fontsize=9.5, fontweight='bold')

        # Equator states
        ax.scatter([1.8], [0], color=t['green'], s=50, zorder=5)
        ax.text(1.9, 0.1, r'$|+\rangle = \frac{|\uparrow\rangle+|\downarrow\rangle}{\sqrt{2}}$', color=t['green'], fontsize=8.5, fontweight='bold')

        # Arbitrary state vector |\psi>
        th0 = np.radians(45)
        ph0 = np.radians(35)
        vx = 1.8 * np.sin(th0) * np.cos(ph0)
        vy = 1.8 * np.cos(th0)
        ax.arrow(0, 0, vx, vy, head_width=0.1, head_length=0.12, fc=t['pink'], ec=t['pink'], lw=2.4, length_includes_head=True)
        ax.text(vx+0.1, vy+0.05, r'$|\psi\rangle = \cos\frac{\theta}{2}|\uparrow\rangle + e^{i\phi}\sin\frac{\theta}{2}|\downarrow\rangle$',
                color=t['pink'], fontsize=9.5, fontweight='bold')

        ax.set_xlim([-2.6, 2.8])
        ax.set_ylim([-2.4, 2.4])
        ax.set_title(r'Bloch Sphere Representation of Pure Spin-$\frac{1}{2}$ Quantum States',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)
        ax.axis('off')

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.6.4.3_bloch_sphere_spin_half.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 6. c.6.5.1: Addition of Angular Momenta & Singlet/Triplet
def gen_c_6_5_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.8, 4.8), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        # Uncoupled vs Coupled basis comparison
        ax.text(1.2, 3.2, 'Uncoupled Basis (4 states)\n$|s_1, m_1; s_2, m_2\\rangle$',
                color=t['cyan'], fontsize=10.5, fontweight='bold', ha='center')
        ax.text(4.8, 3.2, 'Coupled Basis (Singlet + Triplet)\n$|S, M\\rangle$',
                color=t['purple'], fontsize=10.5, fontweight='bold', ha='center')

        uncoupled = [
            (2.4, r'$|\uparrow\uparrow\rangle = |\frac{1}{2},\frac{1}{2};\frac{1}{2},\frac{1}{2}\rangle$'),
            (1.8, r'$|\uparrow\downarrow\rangle = |\frac{1}{2},\frac{1}{2};\frac{1}{2},-\frac{1}{2}\rangle$'),
            (1.2, r'$|\downarrow\uparrow\rangle = |\frac{1}{2},-\frac{1}{2};\frac{1}{2},\frac{1}{2}\rangle$'),
            (0.6, r'$|\downarrow\downarrow\rangle = |\frac{1}{2},-\frac{1}{2};\frac{1}{2},-\frac{1}{2}\rangle$')
        ]

        for y, lbl in uncoupled:
            ax.text(1.2, y, lbl, color=t['text'], fontsize=9, ha='center',
                    bbox=dict(boxstyle='round,pad=0.3', facecolor=t['bg'], edgecolor=t['stroke'], lw=1))

        coupled = [
            (2.5, r'Triplet ($S=1, M=+1$): $|1,1\rangle = |\uparrow\uparrow\rangle$', t['orange']),
            (1.9, r'Triplet ($S=1, M=0$): $|1,0\rangle = \frac{|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle}{\sqrt{2}}$', t['orange']),
            (1.3, r'Triplet ($S=1, M=-1$): $|1,-1\rangle = |\downarrow\downarrow\rangle$', t['orange']),
            (0.5, r'Singlet ($S=0, M=0$): $|0,0\rangle = \frac{|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle}{\sqrt{2}}$', t['pink'])
        ]

        for y, lbl, col in coupled:
            ax.text(4.8, y, lbl, color=col, fontsize=8.8, ha='center', fontweight='bold',
                    bbox=dict(boxstyle='round,pad=0.35', facecolor=t['bg'], edgecolor=col, lw=1.2))

        # Big arrow in middle
        ax.annotate('', xy=(3.0, 1.8), xytext=(2.3, 1.8),
                    arrowprops=dict(arrowstyle='->', color=t['muted'], lw=2.5))
        ax.text(2.65, 2.05, 'Clebsch-\nGordan\nTransformation', color=t['muted'], fontsize=8.5, ha='center', fontweight='bold')

        ax.set_xlim([0.0, 6.6])
        ax.set_ylim([0.0, 3.8])
        ax.set_title(r'Two Spin-$\frac{1}{2}$ Addition: $\frac{1}{2} \otimes \frac{1}{2} = 1 \oplus 0$ (Triplet $\oplus$ Singlet)',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)
        ax.axis('off')

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.6.5.1_addition_of_angular_momenta_cg.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

if __name__ == '__main__':
    print("Generating Module II diagrams...")
    gen_c_6_1_1()
    gen_c_6_2_1()
    gen_c_6_3_1()
    gen_c_6_4_1()
    gen_c_6_4_3()
    gen_c_6_5_1()
    print("Module II diagrams generated successfully!")
