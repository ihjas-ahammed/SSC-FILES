#!/usr/bin/env python3
"""Generate light/dark diagrams for Quantum Mechanics II — Module IV:
Scattering Theory (Partial Waves, Phase Shifts, Born Approximation).
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

# 1. c.8.1.1: Classical Scattering Cross Section
def gen_c_8_1_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.8, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        # Center of force at origin
        ax.plot(0, 0, 'o', color=t['pink'], markersize=10, zorder=5)
        ax.text(0, -0.35, 'Target / Scatterer', color=t['pink'], fontsize=9.5, fontweight='bold', ha='center')

        # Incoming trajectory at impact parameter b
        b = 1.0
        x_in = np.linspace(-3.5, 0.0, 100)
        # Hyperbolic deflection trajectory
        x = np.linspace(-3.5, 3.0, 300)
        # Model trajectory asymptotic to y = b and deflected by angle theta
        theta = np.radians(45)
        y = np.sqrt(b**2 + 0.3 * np.exp(-x)) + (x > 0) * np.tan(theta) * (x)

        ax.plot([-3.5, 3.0], [0, 0], '--', color=t['muted'], lw=1.2)
        ax.plot([-3.5, -0.2], [b, b], color=t['cyan'], lw=2.2)
        ax.arrow(1.0, 1.0 + np.tan(theta)*1.0, 0.8, 0.8*np.tan(theta),
                 head_width=0.12, head_length=0.15, fc=t['cyan'], ec=t['cyan'], lw=2.2)

        # Impact parameter b annotation
        ax.annotate('', xy=(-2.0, b), xytext=(-2.0, 0),
                    arrowprops=dict(arrowstyle='<->', color=t['orange'], lw=1.8))
        ax.text(-2.15, b/2, r'Impact parameter $b$', color=t['orange'], fontsize=9.5, fontweight='bold', ha='right', va='center')

        # Scattering angle theta
        ax.text(1.8, 1.2, r'Scattering angle $\theta$', color=t['purple'], fontsize=10, fontweight='bold')
        ax.text(-0.5, 2.2, r'$\frac{d\sigma}{d\Omega} = \frac{b}{\sin\theta} \left| \frac{db}{d\theta} \right|$',
                color=t['text'], fontsize=11, fontweight='bold',
                bbox=dict(boxstyle='round,pad=0.4', facecolor=t['bg'], edgecolor=t['stroke']))

        ax.set_xlim([-3.8, 3.5])
        ax.set_ylim([-0.8, 2.8])
        ax.set_title(r'Classical Scattering: Impact Parameter $b$ & Differential Cross Section',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)
        ax.axis('off')

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.8.1.1_classical_scattering_cross_section.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 2. c.8.2.1: Quantum Scattering Wavefunction
def gen_c_8_2_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.8, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        # Incoming plane wave lines
        for x_line in [-3.2, -2.6, -2.0, -1.4, -0.8]:
            ax.plot([x_line, x_line], [-1.8, 1.8], color=t['cyan'], lw=1.8, alpha=0.7)
        ax.arrow(-2.6, -1.2, 0.8, 0, head_width=0.12, head_length=0.15, fc=t['cyan'], ec=t['cyan'], lw=2.0)
        ax.text(-2.2, -0.9, r'Incoming plane wave $e^{ikz}$', color=t['cyan'], fontsize=9.5, fontweight='bold', ha='center')

        # Scatterer at origin
        circle = plt.Circle((0, 0), 0.3, color=t['pink'], alpha=0.4)
        ax.add_patch(circle)
        ax.plot(0, 0, 'o', color=t['pink'], markersize=7)
        ax.text(0, -0.5, 'Target $V(\\mathbf{r})$', color=t['pink'], fontsize=9, fontweight='bold', ha='center')

        # Outgoing spherical waves
        radii = [0.8, 1.4, 2.0, 2.6]
        for r in radii:
            u = np.linspace(-np.pi/2, np.pi/2, 100)
            ax.plot(r * np.cos(u), r * np.sin(u), color=t['purple'], lw=1.8, alpha=0.8)

        ax.arrow(1.4, 0.7, 0.7, 0.35, head_width=0.12, head_length=0.15, fc=t['purple'], ec=t['purple'], lw=2.0)
        ax.text(1.8, 1.4, r'Outgoing spherical wave' + '\n' + r'$f(\theta,\phi)\frac{e^{ikr}}{r}$',
                color=t['purple'], fontsize=9.5, fontweight='bold')

        ax.text(0.0, -2.1, r'Asymptotic Wavefunction: $\psi(\mathbf{r}) \approx A \left( e^{ikz} + f(\theta,\phi)\frac{e^{ikr}}{r} \right)$',
                color=t['text'], fontsize=10.5, fontweight='bold', ha='center',
                bbox=dict(boxstyle='round,pad=0.4', facecolor=t['bg'], edgecolor=t['stroke']))

        ax.set_xlim([-3.6, 3.4])
        ax.set_ylim([-2.4, 2.2])
        ax.set_title(r'Quantum Scattering: Incident Plane Wave & Outgoing Spherical Wave',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)
        ax.axis('off')

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.8.2.1_quantum_scattering_wavefunction.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 3. c.8.3.1: Partial Waves & Phase Shifts
def gen_c_8_3_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        r = np.linspace(0.1, 10.0, 300)
        # Free wave: sin(kr)
        k = 1.2
        psi_free = np.sin(k * r)
        # Shifted wave with phase shift delta = pi/4
        delta = np.pi / 4
        psi_scattered = np.sin(k * r + delta)

        ax.plot(r, psi_free, '--', color=t['muted'], lw=2.0, label=r'Unscattered Wave $\propto \sin(kr)$')
        ax.plot(r, psi_scattered, color=t['cyan'], lw=2.4, label=r'Scattered Wave $\propto \sin(kr + \delta_0)$')

        # Phase shift delta annotation
        ax.annotate(r'Phase Shift $\delta_0$', xy=(2.6, 0.0), xytext=(2.6, 0.6),
                    color=t['pink'], fontsize=10, fontweight='bold',
                    arrowprops=dict(arrowstyle='->', color=t['pink'], lw=1.6))

        ax.text(5.2, -0.75, r'Optical Theorem:' + '\n' + r'$\sigma_{\mathrm{tot}} = \frac{4\pi}{k} \mathrm{Im}[f(0)]$',
                color=t['purple'], fontsize=10, fontweight='bold', ha='center',
                bbox=dict(boxstyle='round,pad=0.4', facecolor=t['bg'], edgecolor=t['purple'], lw=1.2))

        ax.axhline(0, color=t['muted'], lw=0.8, linestyle=':')
        ax.set_xlim([0, 10.0])
        ax.set_ylim([-1.2, 1.3])
        ax.set_xlabel('Radial distance $r$', color=t['text'], fontsize=10.5)
        ax.set_ylabel(r'Radial wave $u_l(r)$', color=t['text'], fontsize=10.5)
        ax.set_title(r'Partial Wave Phase Shift $\delta_l$ & The Optical Theorem',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)

        ax.legend(frameon=True, facecolor=t['bg'], edgecolor=t['stroke'], labelcolor=t['text'], fontsize=9, loc='upper right')
        ax.grid(color=t['grid'], linestyle=':', lw=0.8)
        ax.tick_params(colors=t['text'])
        for spine in ax.spines.values():
            spine.set_color(t['stroke'])

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.8.3.1_partial_wave_phase_shifts.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 4. c.8.4.1: The Born Approximation & Momentum Transfer
def gen_c_8_4_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        # Momentum vectors: k_i -> k_f with transfer q = k_f - k_i
        theta = np.radians(50)
        k_len = 2.0
        ki_x, ki_y = k_len, 0
        kf_x, kf_y = k_len * np.cos(theta), k_len * np.sin(theta)

        ax.arrow(0, 0, ki_x, ki_y, head_width=0.08, head_length=0.1, fc=t['cyan'], ec=t['cyan'], lw=2.2, length_includes_head=True)
        ax.arrow(0, 0, kf_x, kf_y, head_width=0.08, head_length=0.1, fc=t['purple'], ec=t['purple'], lw=2.2, length_includes_head=True)
        ax.arrow(ki_x, ki_y, kf_x - ki_x, kf_y - ki_y, head_width=0.08, head_length=0.1, fc=t['pink'], ec=t['pink'], lw=2.2, length_includes_head=True)

        ax.text(ki_x/2, -0.2, r'Incident $\mathbf{k}_i$', color=t['cyan'], fontsize=10.5, fontweight='bold', ha='center')
        ax.text(kf_x/2 - 0.2, kf_y/2 + 0.15, r'Scattered $\mathbf{k}_f$', color=t['purple'], fontsize=10.5, fontweight='bold')
        ax.text((ki_x + kf_x)/2 + 0.15, (ki_y + kf_y)/2, r'Momentum transfer $\mathbf{q} = \mathbf{k}_f - \mathbf{k}_i$' + '\n' + r'$q = 2k\sin(\theta/2)$',
                color=t['pink'], fontsize=9.5, fontweight='bold')

        ax.text(0.5, -1.0, r'First Born Amplitude: $f^{(1)}(\theta,\phi) = -\frac{m}{2\pi\hbar^2}\int V(\mathbf{r})e^{-i\mathbf{q}\cdot\mathbf{r}}d^3\mathbf{r}$',
                color=t['text'], fontsize=10.5, fontweight='bold', ha='center',
                bbox=dict(boxstyle='round,pad=0.4', facecolor=t['bg'], edgecolor=t['stroke']))

        ax.set_xlim([-0.3, 2.5])
        ax.set_ylim([-1.4, 1.8])
        ax.set_title(r'First Born Approximation: 3D Fourier Transform of Potential $V(\mathbf{r})$',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)
        ax.axis('off')

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.8.4.1_born_approximation_fourier.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

if __name__ == '__main__':
    print("Generating Module IV diagrams...")
    gen_c_8_1_1()
    gen_c_8_2_1()
    gen_c_8_3_1()
    gen_c_8_4_1()
    print("Module IV diagrams generated successfully!")
