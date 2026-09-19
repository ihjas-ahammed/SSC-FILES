#!/usr/bin/env python3
"""Generate light/dark diagrams for Quantum Mechanics II — Module III:
Approximation Methods (Perturbation Theory, Variational Method, WKB).
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

# 1. c.7.1.1: Perturbation Theory & Level Repulsion
def gen_c_7_1_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        lam = np.linspace(0, 1.0, 100)
        # Two interacting levels E1, E2 with delta = 2, coupling V = lambda * 0.8
        E1_0 = 1.0
        E2_0 = 3.0
        V12 = 0.9 * lam
        E_plus = 2.0 + np.sqrt(1.0 + V12**2)
        E_minus = 2.0 - np.sqrt(1.0 + V12**2)

        ax.plot(lam, E_plus, color=t['cyan'], lw=2.5, label=r'Upper Level $E_2(\lambda)$ (pushed UP)')
        ax.plot(lam, E_minus, color=t['purple'], lw=2.5, label=r'Lower Level $E_1(\lambda)$ (pushed DOWN)')
        ax.plot(lam, [E2_0]*len(lam), '--', color=t['muted'], lw=1.2, label=r'Unperturbed $E_2^{(0)}$')
        ax.plot(lam, [E1_0]*len(lam), '--', color=t['muted'], lw=1.2, label=r'Unperturbed $E_1^{(0)}$')

        # Annotations
        ax.annotate(r'Level Repulsion: $\Delta E_1^{(2)} = -\frac{|V_{12}|^2}{E_2^{(0)}-E_1^{(0)}} < 0$',
                    xy=(0.6, 0.7), xytext=(0.2, 0.4), color=t['purple'], fontsize=9.5, fontweight='bold',
                    arrowprops=dict(arrowstyle='->', color=t['purple'], lw=1.5))
        ax.annotate(r'$\Delta E_2^{(2)} = +\frac{|V_{12}|^2}{E_2^{(0)}-E_1^{(0)}} > 0$',
                    xy=(0.6, 3.3), xytext=(0.2, 3.6), color=t['cyan'], fontsize=9.5, fontweight='bold',
                    arrowprops=dict(arrowstyle='->', color=t['cyan'], lw=1.5))

        ax.set_xlim([0, 1.0])
        ax.set_ylim([0.1, 4.0])
        ax.set_xlabel(r'Perturbation Parameter $\lambda$ in $\hat{H} = \hat{H}_0 + \lambda \hat{H}^\prime$', color=t['text'], fontsize=10.5)
        ax.set_ylabel(r'Energy Eigenvalues $E(\lambda)$', color=t['text'], fontsize=10.5)
        ax.set_title(r'Second-Order Perturbation Theory: Quantum Level Repulsion',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)

        ax.legend(frameon=True, facecolor=t['bg'], edgecolor=t['stroke'], labelcolor=t['text'], fontsize=8.5, loc='center left')
        ax.grid(color=t['grid'], linestyle=':', lw=0.8)
        ax.tick_params(colors=t['text'])
        for spine in ax.spines.values():
            spine.set_color(t['stroke'])

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.7.1.1_perturbation_level_repulsion.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 2. c.7.2.1: Degenerate Perturbation Theory
def gen_c_7_2_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        # Unperturbed degenerate level splits into 2 linearly
        ax.plot([0, 0.4], [2.0, 2.0], color=t['orange'], lw=3.5, label=r'2-Fold Degenerate Level $E_0$ ($\lambda = 0$)')
        ax.plot([0.4, 1.0], [2.0, 3.0], color=t['cyan'], lw=2.5, label=r'Split Level $E_+^{(1)} = E_0 + W_{12}$')
        ax.plot([0.4, 1.0], [2.0, 1.0], color=t['pink'], lw=2.5, label=r'Split Level $E_-^{(1)} = E_0 - W_{12}$')

        ax.scatter([0.4], [2.0], color=t['orange'], s=70, zorder=5)
        ax.text(0.42, 2.15, 'Degeneracy Lifted\nby Perturbation $\\hat{W}$', color=t['orange'], fontsize=9.5, fontweight='bold')

        ax.annotate(r'Secular Determinant: $\det(W_{ij} - E^{(1)}\delta_{ij}) = 0$',
                    xy=(0.7, 2.0), xytext=(0.45, 0.4), color=t['text'], fontsize=10, fontweight='bold',
                    bbox=dict(boxstyle='round,pad=0.4', facecolor=t['bg'], edgecolor=t['stroke']))

        ax.set_xlim([0, 1.1])
        ax.set_ylim([0.2, 3.5])
        ax.set_xlabel(r'Perturbation Strength $\lambda$', color=t['text'], fontsize=10.5)
        ax.set_ylabel('Energy', color=t['text'], fontsize=10.5)
        ax.set_title(r'Degenerate Perturbation Theory: Secular Equation & Splitting',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)

        ax.legend(frameon=True, facecolor=t['bg'], edgecolor=t['stroke'], labelcolor=t['text'], fontsize=9, loc='upper left')
        ax.grid(color=t['grid'], linestyle=':', lw=0.8)
        ax.tick_params(colors=t['text'])
        for spine in ax.spines.values():
            spine.set_color(t['stroke'])

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.7.2.1_degenerate_perturbation_splitting.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 3. c.7.2.3: Zeeman Effect in Hydrogen (Weak vs Strong Field)
def gen_c_7_2_3():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        B = np.linspace(0, 5.0, 200)
        # Levels for p1/2 and p3/2 transitioning to Paschen-Back
        # Low B: splits by g_J mu_B m_J B
        # High B: splits by (m_l + 2 m_s) mu_B B
        ax.plot(B, 0.5 * B, color=t['cyan'], lw=2.0, label=r'$m_j = +3/2$ ($^2P_{3/2}$)')
        ax.plot(B, 0.17 * B, color=t['purple'], lw=2.0, label=r'$m_j = +1/2$')
        ax.plot(B, -0.17 * B, color=t['green'], lw=2.0, label=r'$m_j = -1/2$')
        ax.plot(B, -0.5 * B, color=t['pink'], lw=2.0, label=r'$m_j = -3/2$')

        ax.axvline(1.8, color=t['muted'], lw=1.2, linestyle=':')
        ax.text(0.9, 2.0, 'Weak Field\n(Anomalous Zeeman)\n$\\mu_B B \\ll E_{\\mathrm{FS}}$',
                color=t['text'], fontsize=9, ha='center', fontweight='bold')
        ax.text(3.5, 2.0, 'Strong Field\n(Paschen-Back Effect)\n$\\mu_B B \\gg E_{\\mathrm{FS}}$',
                color=t['text'], fontsize=9, ha='center', fontweight='bold')

        ax.set_xlim([0, 5.0])
        ax.set_ylim([-2.8, 2.8])
        ax.set_xlabel(r'Magnetic Field Strength $B$ [Tesla]', color=t['text'], fontsize=10.5)
        ax.set_ylabel(r'Zeeman Shift $\Delta E / \mu_B$', color=t['text'], fontsize=10.5)
        ax.set_title(r'Zeeman Effect: Weak-Field Anomalous Zeeman to Paschen-Back Regime',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)

        ax.legend(frameon=True, facecolor=t['bg'], edgecolor=t['stroke'], labelcolor=t['text'], fontsize=8.5, loc='lower left')
        ax.grid(color=t['grid'], linestyle=':', lw=0.8)
        ax.tick_params(colors=t['text'])
        for spine in ax.spines.values():
            spine.set_color(t['stroke'])

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.7.2.3_zeeman_splitting_regimes.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 4. c.7.3.1: The Variational Principle
def gen_c_7_3_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        # Variational parameter alpha
        alpha = np.linspace(0.4, 2.5, 200)
        # E(alpha) = alpha^2 / 2 + 1 / (2 alpha^2) (min at alpha=1, E=1)
        E_trial = 0.5 * alpha**2 + 0.5 / (alpha**2)
        E_exact = 1.0

        ax.plot(alpha, E_trial, color=t['purple'], lw=2.5, label=r'Trial Energy Expectation $\langle H \rangle(\alpha)$')
        ax.axhline(E_exact, color=t['cyan'], lw=2.2, linestyle='--', label=r'Exact Ground State Energy $E_{\mathrm{gs}}$')

        # Minimum point
        ax.plot(1.0, 1.0, 'o', color=t['pink'], markersize=8, zorder=5)
        ax.annotate(r'Minimum: $\frac{\partial \langle H \rangle}{\partial \alpha} = 0 \rightarrow \langle H \rangle_{\min} \geq E_{\mathrm{gs}}$',
                    xy=(1.0, 1.0), xytext=(1.2, 1.8), color=t['pink'], fontsize=9.5, fontweight='bold',
                    arrowprops=dict(arrowstyle='->', color=t['pink'], lw=1.6))

        ax.fill_between(alpha, E_exact, E_trial, color=t['purple'], alpha=0.15)

        ax.set_xlim([0.4, 2.5])
        ax.set_ylim([0.6, 2.8])
        ax.set_xlabel(r'Variational Parameter $\alpha$', color=t['text'], fontsize=10.5)
        ax.set_ylabel('Energy', color=t['text'], fontsize=10.5)
        ax.set_title(r'The Variational Principle: $\langle \psi_{\mathrm{trial}} | \hat{H} | \psi_{\mathrm{trial}} \rangle \geq E_{\mathrm{gs}}$',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)

        ax.legend(frameon=True, facecolor=t['bg'], edgecolor=t['stroke'], labelcolor=t['text'], fontsize=9)
        ax.grid(color=t['grid'], linestyle=':', lw=0.8)
        ax.tick_params(colors=t['text'])
        for spine in ax.spines.values():
            spine.set_color(t['stroke'])

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.7.3.1_variational_principle_bound.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 5. c.7.4.1: WKB Classical vs Tunneling Region & Connection
def gen_c_7_4_1():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.8, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        x = np.linspace(-3.0, 3.5, 400)
        # Potential barrier V(x) = smooth step
        V = 1.0 / (1.0 + np.exp(-2.0 * x)) * 2.0
        E = 1.0
        ax.plot(x, V, color=t['muted'], lw=2.2, label=r'Potential $V(x)$')
        ax.axhline(E, color=t['pink'], lw=1.8, linestyle='--', label=r'Energy $E$')

        # WKB wavefunction: oscillatory for x < 0, decaying for x > 0
        x_class = np.linspace(-3.0, 0.0, 200)
        p_class = np.sqrt(np.maximum(0.01, E - 1.0 / (1.0 + np.exp(-2.0 * x_class)) * 2.0))
        psi_class = 0.5 * np.cos(6.0 * x_class) / np.sqrt(np.maximum(0.2, p_class)) + E

        x_tunn = np.linspace(0.0, 3.5, 200)
        p_tunn = np.sqrt(np.maximum(0.01, 1.0 / (1.0 + np.exp(-2.0 * x_tunn)) * 2.0 - E))
        psi_tunn = 0.5 * np.exp(-1.5 * x_tunn) / np.sqrt(np.maximum(0.2, p_tunn)) + E

        ax.plot(x_class, psi_class, color=t['cyan'], lw=2.0, label=r'Oscillatory: $\psi \sim \frac{1}{\sqrt{p}} \cos(\frac{1}{\hbar}\int p dx)$')
        ax.plot(x_tunn, psi_tunn, color=t['purple'], lw=2.0, label=r'Exponential Decay: $\psi \sim \frac{1}{\sqrt{|p|}} e^{-\frac{1}{\hbar}\int |p| dx}$')

        # Turning point
        ax.plot([0], [E], 'o', color=t['orange'], markersize=7)
        ax.text(0.1, E + 0.35, 'Classical Turning Point\n$E = V(x_0)$ (Connection Formulas)',
                color=t['orange'], fontsize=9, fontweight='bold')

        ax.axvline(0, color=t['orange'], lw=1.2, linestyle=':')

        ax.set_xlim([-3.0, 3.5])
        ax.set_ylim([-0.2, 2.6])
        ax.set_xlabel('Position $x$', color=t['text'], fontsize=10.5)
        ax.set_ylabel('Energy / Wavefunction', color=t['text'], fontsize=10.5)
        ax.set_title(r'WKB Approximation: Classical Oscillatory Region vs Non-Classical Tunneling Tail',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)

        ax.legend(frameon=True, facecolor=t['bg'], edgecolor=t['stroke'], labelcolor=t['text'], fontsize=8.5, loc='upper left')
        ax.grid(color=t['grid'], linestyle=':', lw=0.8)
        ax.tick_params(colors=t['text'])
        for spine in ax.spines.values():
            spine.set_color(t['stroke'])

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.7.4.1_wkb_turning_points_connection.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

# 6. c.7.4.3: WKB Quantization Condition for Bound States
def gen_c_7_4_3():
    for mode, out_dir in [('light', LIGHT_DIR), ('dark', DARK_DIR)]:
        t = THEMES[mode]
        fig, ax = plt.subplots(figsize=(7.5, 4.5), dpi=180)
        fig.patch.set_facecolor(t['bg'])
        ax.set_facecolor(t['card'])

        x = np.linspace(-2.5, 2.5, 300)
        V = 0.5 * x**2
        ax.plot(x, V, color=t['muted'], lw=2.2, label=r'Smooth Well $V(x)$')

        E = 1.5
        ax.axhline(E, color=t['pink'], lw=2.0, linestyle='--', label=r'Bound Energy $E_n$')

        x1, x2 = -np.sqrt(2*E), np.sqrt(2*E)
        ax.plot([x1, x2], [E, E], 'o', color=t['orange'], markersize=7)
        ax.text(x1-0.1, E+0.15, r'$x_1$', color=t['orange'], fontsize=11, fontweight='bold', ha='right')
        ax.text(x2+0.1, E+0.15, r'$x_2$', color=t['orange'], fontsize=11, fontweight='bold')

        # Shaded phase space area
        x_fill = np.linspace(x1, x2, 100)
        ax.fill_between(x_fill, 0.5 * x_fill**2, E, color=t['cyan'], alpha=0.25)
        ax.text(0, 0.7, r'Action Integral: $\int_{x_1}^{x_2} p(x) \, dx = (n - \frac{1}{2})\pi\hbar$',
                color=t['cyan'], fontsize=10, fontweight='bold', ha='center',
                bbox=dict(boxstyle='round,pad=0.4', facecolor=t['bg'], edgecolor=t['cyan'], lw=1.2))

        ax.set_xlim([-2.5, 2.5])
        ax.set_ylim([-0.1, 3.2])
        ax.set_xlabel('Position $x$', color=t['text'], fontsize=10.5)
        ax.set_ylabel('Energy', color=t['text'], fontsize=10.5)
        ax.set_title(r'WKB Bound-State Quantization (Bohr-Sommerfeld Condition)',
                     color=t['text'], fontsize=11, fontweight='bold', pad=10)

        ax.legend(frameon=True, facecolor=t['bg'], edgecolor=t['stroke'], labelcolor=t['text'], fontsize=9)
        ax.grid(color=t['grid'], linestyle=':', lw=0.8)
        ax.tick_params(colors=t['text'])
        for spine in ax.spines.values():
            spine.set_color(t['stroke'])

        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, 'c.7.4.3_wkb_quantization_condition.png'),
                    facecolor=t['bg'], edgecolor='none', dpi=180)
        plt.close(fig)

if __name__ == '__main__':
    print("Generating Module III diagrams...")
    gen_c_7_1_1()
    gen_c_7_2_1()
    gen_c_7_2_3()
    gen_c_7_3_1()
    gen_c_7_4_1()
    gen_c_7_4_3()
    print("Module III diagrams generated successfully!")
