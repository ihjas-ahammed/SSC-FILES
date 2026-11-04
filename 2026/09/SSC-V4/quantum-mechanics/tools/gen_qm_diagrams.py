#!/usr/bin/env python3
"""Generate high-resolution light and dark diagrams for Quantum Mechanics Module 1.
"""
import os
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
LIGHT_DIR = os.path.join(ROOT, 'diagrams', 'light')
DARK_DIR = os.path.join(ROOT, 'diagrams', 'dark')

os.makedirs(LIGHT_DIR, exist_ok=True)
os.makedirs(DARK_DIR, exist_ok=True)

THEMES = {
    'light': {
        'bg': '#FAF8F4',
        'fg': '#1A1A1E',
        'grid': '#E5E2DA',
        'c1': '#2563EB',    # Blue
        'c2': '#059669',    # Green / Emerald
        'c3': '#D97706',    # Amber
        'c4': '#DC2626',    # Red
        'c5': '#7C3AED',    # Violet
        'shade': '#3B82F6',
        'shade_alpha': 0.22,
        'spine': '#D5D3CD'
    },
    'dark': {
        'bg': '#101216',
        'fg': '#E2E8F0',
        'grid': '#252B3A',
        'c1': '#60A5FA',    # Sky Blue
        'c2': '#34D399',    # Bright Emerald
        'c3': '#FBBF24',    # Gold
        'c4': '#F87171',    # Coral
        'c5': '#A78BFA',    # Light Violet
        'shade': '#60A5FA',
        'shade_alpha': 0.28,
        'spine': '#2E3648'
    }
}


def apply_theme(fig, ax, t):
    fig.patch.set_facecolor(t['bg'])
    ax.set_facecolor(t['bg'])
    ax.tick_params(colors=t['fg'], which='both', labelsize=10)
    for spine in ax.spines.values():
        spine.set_color(t['spine'])
        spine.set_linewidth(1.2)
    ax.xaxis.label.set_color(t['fg'])
    ax.yaxis.label.set_color(t['fg'])
    ax.title.set_color(t['fg'])
    ax.grid(True, linestyle='--', alpha=0.5, color=t['grid'])


# ── 1. Born's Probability Density (c.1.2.1) ──────────────────────────────────
def make_born_density(theme_name, t):
    fig, ax = plt.subplots(figsize=(7, 4.2), dpi=140)
    apply_theme(fig, ax, t)

    x = np.linspace(-4, 4, 600)
    # A localized wave packet packet
    sigma = 1.0
    psi_real = np.exp(-x**2 / (2 * sigma**2)) * np.cos(3 * x) / np.sqrt(np.sqrt(np.pi) * sigma)
    psi_imag = np.exp(-x**2 / (2 * sigma**2)) * np.sin(3 * x) / np.sqrt(np.sqrt(np.pi) * sigma)
    prob_dens = psi_real**2 + psi_imag**2

    ax.plot(x, prob_dens, color=t['c1'], lw=2.4, label=r'Probability Density $|\Psi(x,t)|^2$')
    ax.plot(x, psi_real, color=t['c5'], lw=1.2, ls=':', alpha=0.75, label=r'Real part $\mathrm{Re}[\Psi(x,t)]$')

    # Shaded region between a and b
    a, b = -0.5, 1.2
    idx = (x >= a) & (x <= b)
    ax.fill_between(x[idx], 0, prob_dens[idx], color=t['shade'], alpha=t['shade_alpha'],
                    label=r'$P_{ab} = \int_a^b |\Psi(x,t)|^2 \, dx$')

    # Vertical markers
    ax.axvline(a, color=t['c3'], ls='--', lw=1.5)
    ax.axvline(b, color=t['c3'], ls='--', lw=1.5)
    ax.text(a - 0.08, -0.05, '$a$', color=t['c3'], fontsize=12, fontweight='bold', ha='right')
    ax.text(b + 0.08, -0.05, '$b$', color=t['c3'], fontsize=12, fontweight='bold', ha='left')

    ax.set_title(r"Born's Statistical Interpretation: $P(a \leq x \leq b) = \int_a^b |\Psi(x,t)|^2 \, dx$",
                 fontsize=11.5, pad=12)
    ax.set_xlabel('Position $x$', fontsize=11)
    ax.set_ylabel('Probability Density / Amplitude', fontsize=11)
    ax.legend(loc='upper right', framealpha=0.85, facecolor=t['bg'], edgecolor=t['grid'], fontsize=9.5)
    ax.set_ylim(-0.6, 0.75)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.1.2.1_born_probability_density.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 2. Wave Function Collapse (c.1.2.3) ──────────────────────────────────────
def make_collapse(theme_name, t):
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(9.5, 4.0), dpi=140)
    apply_theme(fig, ax1, t)
    apply_theme(fig, ax2, t)

    x = np.linspace(-4, 4, 600)
    psi_sq_before = (np.exp(-(x+1.5)**2 / 0.8) * 0.5 + np.exp(-(x-1.2)**2 / 0.9) * 0.6) / 1.1

    ax1.plot(x, psi_sq_before, color=t['c1'], lw=2.2)
    ax1.fill_between(x, 0, psi_sq_before, color=t['shade'], alpha=t['shade_alpha'])
    ax1.set_title(r'Before Measurement: Superposition $|\Psi(x)|^2$', fontsize=10.5, pad=10)
    ax1.set_xlabel('$x$', fontsize=10.5)
    ax1.set_ylabel(r'Probability Density $|\Psi|^2$', fontsize=10.5)
    ax1.set_ylim(-0.05, 1.2)

    # Spike at x = C
    C = 1.2
    spike = np.exp(-(x - C)**2 / 0.02) * 1.05
    ax2.plot(x, spike, color=t['c4'], lw=2.4)
    ax2.fill_between(x, 0, spike, color=t['c4'], alpha=0.25)
    ax2.axvline(C, color=t['c3'], ls='--', lw=1.2)
    ax2.text(C, 1.12, r'Measured $x = C$', color=t['c3'], fontsize=10.5, ha='center', fontweight='bold')
    ax2.set_title(r'Immediately After: Collapsed State $\delta(x - C)$', fontsize=10.5, pad=10)
    ax2.set_xlabel('$x$', fontsize=10.5)
    ax2.set_ylim(-0.05, 1.2)

    plt.suptitle('Wave Function Collapse upon Position Observation', color=t['fg'], fontsize=12.5, y=0.98)
    fig.tight_layout()

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.1.2.3_wave_function_collapse.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 3. Variance & Standard Deviation (c.1.3.3) ───────────────────────────────
def make_variance(theme_name, t):
    fig, ax = plt.subplots(figsize=(7.2, 4.0), dpi=140)
    apply_theme(fig, ax, t)

    x = np.linspace(-4, 4, 600)
    mu, sigma = 0.5, 1.1
    rho = (1 / (sigma * np.sqrt(2 * np.pi))) * np.exp(-0.5 * ((x - mu) / sigma)**2)

    ax.plot(x, rho, color=t['c2'], lw=2.4, label=r'Continuous Distribution $\rho(x)$')

    # Shading 1-sigma interval
    idx_1s = (x >= mu - sigma) & (x <= mu + sigma)
    ax.fill_between(x[idx_1s], 0, rho[idx_1s], color=t['c2'], alpha=0.25,
                    label=r'$68.3\%$ in $[\langle x \rangle - \sigma, \langle x \rangle + \sigma]$')

    ax.axvline(mu, color=t['c4'], lw=1.8, ls='-', label=r'Mean $\langle x \rangle$')
    ax.axvline(mu - sigma, color=t['c3'], lw=1.3, ls='--')
    ax.axvline(mu + sigma, color=t['c3'], lw=1.3, ls='--')

    ax.annotate(r'$\langle x \rangle$', xy=(mu, 0.38), xytext=(mu + 0.3, 0.40),
                arrowprops=dict(arrowstyle='->', color=t['c4'], lw=1.2), color=t['c4'], fontsize=11)
    ax.annotate(r'$\pm\sigma_x$', xy=(mu + sigma, 0.22), xytext=(mu + sigma + 0.3, 0.26),
                arrowprops=dict(arrowstyle='->', color=t['c3'], lw=1.2), color=t['c3'], fontsize=11)

    ax.set_title(r"Standard Deviation $\sigma = \sqrt{\langle x^2 \rangle - \langle x \rangle^2}$ as Dispersion Measure",
                 fontsize=11, pad=12)
    ax.set_xlabel('$x$', fontsize=11)
    ax.set_ylabel(r'$\rho(x)$', fontsize=11)
    ax.legend(loc='upper right', framealpha=0.85, facecolor=t['bg'], edgecolor=t['grid'], fontsize=9.5)
    ax.set_ylim(-0.02, 0.45)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.1.3.3_variance_standard_deviation.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 4. Preservation of Normalization (c.1.4.2) ──────────────────────────────
def make_preservation(theme_name, t):
    fig, ax = plt.subplots(figsize=(7.5, 4.2), dpi=140)
    apply_theme(fig, ax, t)

    x = np.linspace(-5, 5, 600)
    # Wave packet dispersing over time
    w0, w1, w2 = 0.8, 1.3, 2.0
    p0 = (1 / (w0 * np.sqrt(2 * np.pi))) * np.exp(-0.5 * (x / w0)**2)
    p1 = (1 / (w1 * np.sqrt(2 * np.pi))) * np.exp(-0.5 * ((x - 0.7) / w1)**2)
    p2 = (1 / (w2 * np.sqrt(2 * np.pi))) * np.exp(-0.5 * ((x - 1.5) / w2)**2)

    ax.plot(x, p0, color=t['c1'], lw=2.0, label=r'$t = 0$ (compact: $\int |\Psi|^2 dx = 1$)')
    ax.plot(x, p1, color=t['c2'], lw=2.0, ls='--', label=r'$t = t_1$ (moving & spreading: $\int |\Psi|^2 dx = 1$)')
    ax.plot(x, p2, color=t['c5'], lw=2.0, ls='-.', label=r'$t = t_2$ (diffuse: $\int |\Psi|^2 dx = 1$)')

    ax.fill_between(x, 0, p0, color=t['c1'], alpha=0.08)
    ax.fill_between(x, 0, p1, color=t['c2'], alpha=0.08)
    ax.fill_between(x, 0, p2, color=t['c5'], alpha=0.08)

    ax.set_title(r"Preservation of Normalization: $\frac{d}{dt}\int_{-\infty}^{\infty} |\Psi(x,t)|^2 \, dx = 0$",
                 fontsize=11.5, pad=12)
    ax.set_xlabel('Position $x$', fontsize=11)
    ax.set_ylabel(r'Probability Density $|\Psi(x,t)|^2$', fontsize=11)
    ax.legend(loc='upper left', framealpha=0.85, facecolor=t['bg'], edgecolor=t['grid'], fontsize=9.5)
    ax.set_ylim(-0.02, 0.55)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.1.4.2_preservation_of_normalization.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 5. Probability Current & Continuity (c.1.5.4) ────────────────────────────
def make_current(theme_name, t):
    fig, ax = plt.subplots(figsize=(7.5, 4.0), dpi=140)
    apply_theme(fig, ax, t)

    x = np.linspace(-3, 3, 500)
    rho = np.exp(-x**2 / 1.5) * 0.7
    ax.plot(x, rho, color=t['c1'], lw=2.2, label=r'$\rho(x,t) = |\Psi(x,t)|^2$')

    # Control volume [x1, x2]
    x1, x2 = -1.2, 1.2
    idx = (x >= x1) & (x <= x2)
    ax.fill_between(x[idx], 0, rho[idx], color=t['shade'], alpha=t['shade_alpha'],
                    label=r'Enclosed Probability $P(t) = \int_{x_1}^{x_2} \rho \, dx$')

    ax.axvline(x1, color=t['c3'], lw=1.6, ls='--')
    ax.axvline(x2, color=t['c3'], lw=1.6, ls='--')

    # Current arrows
    ax.annotate('', xy=(x1 + 0.45, 0.25), xytext=(x1 - 0.45, 0.25),
                arrowprops=dict(arrowstyle='->,head_width=0.4,head_length=0.6', color=t['c2'], lw=2.5))
    ax.text(x1 - 0.05, 0.32, r'$J(x_1, t)$ (inflow)', color=t['c2'], fontsize=10.5, ha='center', fontweight='bold')

    ax.annotate('', xy=(x2 + 0.55, 0.25), xytext=(x2 - 0.35, 0.25),
                arrowprops=dict(arrowstyle='->,head_width=0.4,head_length=0.6', color=t['c4'], lw=2.5))
    ax.text(x2 + 0.1, 0.32, r'$J(x_2, t)$ (outflow)', color=t['c4'], fontsize=10.5, ha='center', fontweight='bold')

    ax.text(0, 0.15, r'$\frac{\partial \rho}{\partial t} + \frac{\partial J}{\partial x} = 0$',
            color=t['fg'], fontsize=13, ha='center',
            bbox=dict(boxstyle='round,pad=0.4', facecolor=t['bg'], edgecolor=t['c1'], lw=1.2))

    ax.set_title(r'Local Conservation of Probability: Continuity Equation', fontsize=11.5, pad=12)
    ax.set_xlabel('$x$', fontsize=11)
    ax.set_ylabel(r'$\rho(x,t)$', fontsize=11)
    ax.set_ylim(-0.05, 0.85)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.1.5.4_probability_current_continuity.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 6. Heisenberg Uncertainty Principle (c.1.6.1) ────────────────────────────
def make_uncertainty(theme_name, t):
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(9.5, 4.0), dpi=140)
    apply_theme(fig, ax1, t)
    apply_theme(fig, ax2, t)

    # Narrow in x -> Broad in p
    x = np.linspace(-4, 4, 500)
    p = np.linspace(-4, 4, 500)

    # Case A: Narrow x
    psi_x_narrow = np.exp(-x**2 / (2 * 0.4**2)) / (np.pi**0.25 * np.sqrt(0.4))
    phi_p_broad = np.exp(-p**2 / (2 * 1.6**2)) / (np.pi**0.25 * np.sqrt(1.6))

    ax1.plot(x, psi_x_narrow**2, color=t['c1'], lw=2.2, label=r'$|\psi(x)|^2$')
    ax1.fill_between(x, 0, psi_x_narrow**2, color=t['c1'], alpha=0.2)
    ax1.set_title(r'Narrow in Position ($\Delta x$ small)', fontsize=10.5, pad=10)
    ax1.set_xlabel('Position $x$', fontsize=10.5)
    ax1.set_ylabel(r'Probability Density $|\psi(x)|^2$', fontsize=10.5)
    ax1.set_ylim(-0.05, 1.6)

    ax2.plot(p, phi_p_broad**2, color=t['c4'], lw=2.2, label=r'$|\phi(p)|^2$')
    ax2.fill_between(p, 0, phi_p_broad**2, color=t['c4'], alpha=0.2)
    ax2.set_title(r'Broad in Momentum ($\Delta p$ large)', fontsize=10.5, pad=10)
    ax2.set_xlabel(r'Momentum $p / \hbar$', fontsize=10.5)
    ax2.set_ylabel(r'Probability Density $|\phi(p)|^2$', fontsize=10.5)
    ax2.set_ylim(-0.05, 0.6)

    plt.suptitle(r'Heisenberg Uncertainty Principle: $\sigma_x \sigma_p \geq \frac{\hbar}{2}$',
                 color=t['fg'], fontsize=12.5, y=0.98)
    fig.tight_layout()

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.1.6.1_heisenberg_uncertainty_principle.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 7. Triangular Wave Packet (c.1.4.1 / Griffiths 1.4) ──────────────────────
def make_triangular(theme_name, t):
    fig, ax = plt.subplots(figsize=(7.2, 4.0), dpi=140)
    apply_theme(fig, ax, t)

    a, b = 2.0, 5.0
    x = np.linspace(-0.5, 6.0, 600)
    A = np.sqrt(3.0 / b)

    psi = np.zeros_like(x)
    for i, xi in enumerate(x):
        if 0 <= xi <= a:
            psi[i] = A * (xi / a)
        elif a < xi <= b:
            psi[i] = A * (b - xi) / (b - a)

    psi_sq = psi**2
    ax.plot(x, psi, color=t['c1'], lw=2.2, label=r'$\Psi(x,0)$ (Triangular Wave)')
    ax.plot(x, psi_sq, color=t['c2'], lw=2.0, ls='--', label=r'$|\Psi(x,0)|^2$ (Density)')
    ax.fill_between(x, 0, psi_sq, color=t['c2'], alpha=0.2)

    ax.axvline(a, color=t['c3'], ls=':', lw=1.4)
    ax.axvline(b, color=t['c3'], ls=':', lw=1.4)
    ax.text(a, -0.08, '$a$', color=t['c3'], fontsize=11, ha='center', fontweight='bold')
    ax.text(b, -0.08, '$b$', color=t['c3'], fontsize=11, ha='center', fontweight='bold')
    ax.text(a, A + 0.04, r'Peak $A = \sqrt{3/b}$', color=t['c1'], fontsize=10.5, ha='center')

    ax.set_title(r'Griffiths Problem 1.4: Triangular Wave Packet Normalization', fontsize=11, pad=12)
    ax.set_xlabel('$x$', fontsize=11)
    ax.legend(loc='upper right', framealpha=0.85, facecolor=t['bg'], edgecolor=t['grid'], fontsize=9.5)
    ax.set_ylim(-0.12, 1.1)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.1.4.1_triangular_wave_packet.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 8. Exponential Wave Function (c.1.5.1 / Griffiths 1.5) ───────────────────
def make_exponential(theme_name, t):
    fig, ax = plt.subplots(figsize=(7.2, 4.0), dpi=140)
    apply_theme(fig, ax, t)

    lam = 1.2
    x = np.linspace(-3.5, 3.5, 600)
    psi = np.sqrt(lam) * np.exp(-lam * np.abs(x))
    psi_sq = lam * np.exp(-2 * lam * np.abs(x))

    ax.plot(x, psi, color=t['c5'], lw=2.2, label=r'$\Psi(x) = \sqrt{\lambda} e^{-\lambda |x|}$')
    ax.plot(x, psi_sq, color=t['c1'], lw=2.0, ls='--', label=r'$|\Psi(x)|^2 = \lambda e^{-2\lambda |x|}$')
    ax.fill_between(x, 0, psi_sq, color=t['c1'], alpha=0.2)

    sigma = 1 / (np.sqrt(2) * lam)
    ax.axvline(-sigma, color=t['c3'], ls=':', lw=1.4)
    ax.axvline(sigma, color=t['c3'], ls=':', lw=1.4)
    ax.text(sigma + 0.1, 0.4, r'$\sigma_x = \frac{1}{\sqrt{2}\lambda}$', color=t['c3'], fontsize=10.5)

    ax.set_title(r'Griffiths Problem 1.5: Symmetric Exponential Wave Function', fontsize=11, pad=12)
    ax.set_xlabel('$x$', fontsize=11)
    ax.legend(loc='upper right', framealpha=0.85, facecolor=t['bg'], edgecolor=t['grid'], fontsize=9.5)
    ax.set_ylim(-0.08, 1.4)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.1.5.1_exponential_wave_function.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


def main():
    for name, t in THEMES.items():
        print(f"Generating {name} diagrams...")
        make_born_density(name, t)
        make_collapse(name, t)
        make_variance(name, t)
        make_preservation(name, t)
        make_current(name, t)
        make_uncertainty(name, t)
        make_triangular(name, t)
        make_exponential(name, t)
    print("All diagrams generated successfully!")


if __name__ == '__main__':
    main()
