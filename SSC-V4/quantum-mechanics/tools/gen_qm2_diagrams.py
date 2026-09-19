#!/usr/bin/env python3
"""Generate high-resolution light and dark diagrams for Quantum Mechanics Module 2.
Topics: Stationary States, Infinite Square Well, Free Particle & Wave Packets,
        Probability Current Density, Potential Step (E>V0 & E<V0), Potential Barrier Tunneling & Resonances.
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


# ── 1. Stationary States & Complex Phase Rotation (c.2.1.1) ─────────────────
def make_stationary_phase(theme_name, t):
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(9.6, 4.2), dpi=140, gridspec_kw={'width_ratios': [1.3, 1]})
    apply_theme(fig, ax1, t)
    apply_theme(fig, ax2, t)

    x = np.linspace(0, np.pi, 300)
    psi = np.sin(x)
    prob = psi**2

    # Left: Spatial wave function and static probability density
    ax1.plot(x, prob, color=t['c1'], lw=2.4, label=r'Static $|\Psi(x,t)|^2 = |\psi(x)|^2$')
    ax1.plot(x, psi, color=t['c2'], lw=1.6, ls='--', label=r'Spatial mode $\psi(x)$')
    ax1.plot(x, -psi, color=t['c2'], lw=1.0, ls=':', alpha=0.5)
    ax1.fill_between(x, 0, prob, color=t['shade'], alpha=t['shade_alpha'])
    ax1.set_title('Spatial State: Time-Invariant Density', fontsize=11, pad=10)
    ax1.set_xlabel(r'Position $x$', fontsize=10.5)
    ax1.set_ylabel('Amplitude / Density', fontsize=10.5)
    ax1.legend(loc='upper right', framealpha=0.85, facecolor=t['bg'], edgecolor=t['grid'], fontsize=9)
    ax1.set_ylim(-1.1, 1.25)

    # Right: Phase factor rotating in complex plane
    theta = np.linspace(0, 2*np.pi, 200)
    ax2.plot(np.cos(theta), np.sin(theta), color=t['grid'], lw=1.5, ls='--')
    current_angle = -np.pi / 3
    ax2.annotate('', xy=(np.cos(current_angle), np.sin(current_angle)), xytext=(0, 0),
                 arrowprops=dict(arrowstyle='->', color=t['c4'], lw=2.5))
    ax2.plot(0, 0, 'o', color=t['fg'], markersize=4)
    ax2.text(0.55, -0.45, r'$e^{-iEt/\hbar}$', color=t['c4'], fontsize=11, fontweight='bold')
    ax2.text(0.05, 0.85, r'$|\phi(t)| = 1$', color=t['c2'], fontsize=10.5)
    ax2.set_title(r'Harmonic Phase Factor $\phi(t) = e^{-iEt/\hbar}$', fontsize=11, pad=10)
    ax2.set_xlabel(r'$\mathrm{Re}[\phi(t)]$', fontsize=10.5)
    ax2.set_ylabel(r'$\mathrm{Im}[\phi(t)]$', fontsize=10.5)
    ax2.set_xlim(-1.3, 1.3)
    ax2.set_ylim(-1.3, 1.3)
    ax2.set_aspect('equal')

    plt.suptitle(r'Stationary State: $\Psi(x,t) = \psi(x) e^{-iEt/\hbar} \Rightarrow |\Psi(x,t)|^2 = |\psi(x)|^2$',
                 color=t['fg'], fontsize=12, y=0.98)
    fig.tight_layout()

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.2.1.1_stationary_state_phase.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 2. Infinite Square Well Wavefunctions & Energies (c.2.2.2) ───────────────
def make_infinite_well_wavefunctions(theme_name, t):
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 5.0), dpi=140)
    apply_theme(fig, ax1, t)
    apply_theme(fig, ax2, t)

    a = 1.0
    x = np.linspace(0, a, 400)

    # Energies E_n = n^2 * E_1
    levels = [1, 2, 3]
    colors = [t['c1'], t['c2'], t['c3']]

    for n, col in zip(levels, colors):
        En = n**2
        psi = np.sqrt(2/a) * np.sin(n * np.pi * x / a)
        prob = psi**2

        # Plot on ax1 (Wave functions shifted by energy)
        ax1.axhline(En, color=t['grid'], lw=1.2, ls='--')
        scale_psi = 0.8
        ax1.plot(x, En + scale_psi * psi, color=col, lw=2.0, label=f'$n={n}, E_{n}={En}E_1$')
        ax1.text(-0.04, En, f'$E_{n}$', color=col, ha='right', va='center', fontweight='bold', fontsize=10.5)

        # Plot on ax2 (Probability densities shifted by energy)
        ax2.axhline(En, color=t['grid'], lw=1.2, ls='--')
        scale_prob = 0.5
        ax2.plot(x, En + scale_prob * prob, color=col, lw=2.0, label=f'$n={n}$')
        ax2.fill_between(x, En, En + scale_prob * prob, color=col, alpha=0.22)
        ax2.text(-0.04, En, f'$E_{n}$', color=col, ha='right', va='center', fontweight='bold', fontsize=10.5)

    for ax in (ax1, ax2):
        # Potential walls at x=0 and x=a
        ax.axvline(0, color=t['c4'], lw=3.0)
        ax.axvline(a, color=t['c4'], lw=3.0)
        ax.text(0, 10.5, r'$V=\infty$', color=t['c4'], ha='center', fontsize=9.5, fontweight='bold')
        ax.text(a, 10.5, r'$V=\infty$', color=t['c4'], ha='center', fontsize=9.5, fontweight='bold')
        ax.set_xlim(-0.15, a + 0.15)
        ax.set_ylim(-0.5, 11.5)
        ax.set_xlabel(r'Position $x/a$', fontsize=10.5)

    ax1.set_title(r'Eigenfunctions $\psi_n(x) = \sqrt{2/a}\sin(n\pi x/a)$', fontsize=11, pad=10)
    ax1.set_ylabel(r'Energy Level $E_n / E_1$', fontsize=10.5)
    ax1.legend(loc='lower right', framealpha=0.85, facecolor=t['bg'], edgecolor=t['grid'], fontsize=9)

    ax2.set_title(r'Probability Densities $|\psi_n(x)|^2$', fontsize=11, pad=10)
    ax2.set_ylabel(r'Energy Level $E_n / E_1$', fontsize=10.5)

    plt.suptitle(r'Infinite Square Well: Quantized Energies $E_n = \frac{n^2 \pi^2 \hbar^2}{2 m a^2}$',
                 color=t['fg'], fontsize=12.5, y=0.98)
    fig.tight_layout()

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.2.2.2_infinite_square_well_wavefunctions.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 3. Symmetric Well Parity of States (c.2.2.4) ─────────────────────────────
def make_symmetric_well_parity(theme_name, t):
    fig, ax = plt.subplots(figsize=(8.0, 4.4), dpi=140)
    apply_theme(fig, ax, t)

    a = 2.0
    x = np.linspace(-a/2, a/2, 400)

    # Centered at 0: n=1 (cos, even), n=2 (sin, odd), n=3 (cos, even)
    psi1 = np.sqrt(2/a) * np.cos(np.pi * x / a)
    psi2 = np.sqrt(2/a) * np.sin(2 * np.pi * x / a)
    psi3 = np.sqrt(2/a) * np.cos(3 * np.pi * x / a)

    ax.plot(x, psi1 + 1.0, color=t['c1'], lw=2.2, label=r'$n=1$ (Even Parity $\Pi = +1$): $\sqrt{2/a}\cos(\pi x/a)$')
    ax.plot(x, psi2 + 2.5, color=t['c4'], lw=2.2, label=r'$n=2$ (Odd Parity $\Pi = -1$): $\sqrt{2/a}\sin(2\pi x/a)$')
    ax.plot(x, psi3 + 4.2, color=t['c2'], lw=2.2, label=r'$n=3$ (Even Parity $\Pi = +1$): $\sqrt{2/a}\cos(3\pi x/a)$')

    ax.axvline(0, color=t['fg'], ls=':', lw=1.2, alpha=0.6, label='Center of Symmetry $x = 0$')
    ax.axvline(-a/2, color=t['c3'], lw=2.8)
    ax.axvline(a/2, color=t['c3'], lw=2.8)

    ax.set_title(r'Symmetric Well $[-a/2, a/2]$: Inversion Symmetry $\psi(-x) = \pm \psi(x)$', fontsize=11.5, pad=10)
    ax.set_xlabel(r'Position $x$', fontsize=10.5)
    ax.set_ylabel(r'Offset $\psi_n(x)$', fontsize=10.5)
    ax.legend(loc='upper right', framealpha=0.88, facecolor=t['bg'], edgecolor=t['grid'], fontsize=8.5)
    ax.set_xlim(-a/2 - 0.2, a/2 + 0.2)
    ax.set_ylim(0, 5.6)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.2.2.4_symmetric_well_parity.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 4. Wave Packet: Phase Velocity vs Group Velocity (c.2.3.2) ───────────────
def make_wave_packet(theme_name, t):
    fig, ax = plt.subplots(figsize=(8.8, 4.4), dpi=140)
    apply_theme(fig, ax, t)

    x = np.linspace(-6, 6, 800)
    sigma = 1.6
    k0 = 5.0
    envelope = np.exp(-x**2 / (2 * sigma**2))
    carrier = np.cos(k0 * x)
    packet = envelope * carrier

    ax.plot(x, envelope, color=t['c3'], lw=2.2, ls='--', label=r'Envelope: Group Velocity $v_g = \frac{d\omega}{dk} = \frac{p}{m} = v_{\mathrm{classical}}$')
    ax.plot(x, -envelope, color=t['c3'], lw=2.2, ls='--')
    ax.plot(x, packet, color=t['c1'], lw=1.8, label=r'Ripples: Phase Velocity $v_p = \frac{\omega}{k} = \frac{p}{2m} = \frac{v_g}{2}$')
    ax.fill_between(x, -envelope, envelope, color=t['shade'], alpha=0.12)

    # Arrow annotations
    ax.annotate(r'$v_g = 2 v_p$', xy=(1.5, 0.75), xytext=(2.8, 0.95),
                arrowprops=dict(arrowstyle='->', color=t['c3'], lw=1.8),
                fontsize=11, color=t['c3'], fontweight='bold')
    ax.annotate(r'$v_p = \frac{v_g}{2}$', xy=(0.3, 0.4), xytext=(-2.5, 0.8),
                arrowprops=dict(arrowstyle='->', color=t['c1'], lw=1.6),
                fontsize=11, color=t['c1'], fontweight='bold')

    ax.set_title(r'Free Particle Wave Packet: Phase Velocity $v_p$ vs. Group Velocity $v_g$', fontsize=11.5, pad=10)
    ax.set_xlabel(r'Position $x$', fontsize=10.5)
    ax.set_ylabel('Wave Amplitude', fontsize=10.5)
    ax.legend(loc='lower center', framealpha=0.88, facecolor=t['bg'], edgecolor=t['grid'], fontsize=9)
    ax.set_ylim(-1.2, 1.3)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.2.3.2_wave_packet_dispersion.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 5. Probability Current Density & Continuity (c.2.4.2) ───────────────────
def make_current_density_flux(theme_name, t):
    fig, ax = plt.subplots(figsize=(8.6, 4.2), dpi=140)
    apply_theme(fig, ax, t)

    x = np.linspace(-4, 4, 500)
    # A localized density flowing to the right
    rho = np.exp(-(x + 0.5)**2 / 1.8) / np.sqrt(np.pi * 1.8)
    ax.plot(x, rho, color=t['c1'], lw=2.4, label=r'Probability Density $\rho(x,t) = |\Psi(x,t)|^2$')

    x1, x2 = -1.5, 1.8
    idx = (x >= x1) & (x <= x2)
    ax.fill_between(x[idx], 0, rho[idx], color=t['shade'], alpha=t['shade_alpha'],
                    label=r'Interval $[x_1, x_2]$: $P(t) = \int_{x_1}^{x_2} \rho \, dx$')

    ax.axvline(x1, color=t['c3'], ls='--', lw=1.5)
    ax.axvline(x2, color=t['c3'], ls='--', lw=1.5)
    ax.text(x1, -0.05, r'$x_1$', color=t['c3'], ha='center', fontsize=11, fontweight='bold')
    ax.text(x2, -0.05, r'$x_2$', color=t['c3'], ha='center', fontsize=11, fontweight='bold')

    # Flux arrows
    ax.annotate(r'$J(x_1, t)$ (Flux in)', xy=(x1, 0.15), xytext=(x1 - 1.8, 0.28),
                arrowprops=dict(arrowstyle='->', color=t['c2'], lw=2.2),
                fontsize=10.5, color=t['c2'], fontweight='bold')
    ax.annotate(r'$J(x_2, t)$ (Flux out)', xy=(x2 + 0.8, 0.12), xytext=(x2, 0.12),
                arrowprops=dict(arrowstyle='->', color=t['c4'], lw=2.2),
                fontsize=10.5, color=t['c4'], fontweight='bold')

    ax.text(0.15, 0.25, r'$\frac{d P}{d t} = J(x_1,t) - J(x_2,t)$',
            color=t['fg'], fontsize=12, fontweight='bold',
            bbox=dict(boxstyle='round,pad=0.5', facecolor=t['bg'], edgecolor=t['grid']))

    ax.set_title(r'Conservation of Probability: $\frac{\partial \rho}{\partial t} + \frac{\partial J}{\partial x} = 0$',
                 fontsize=12, pad=10)
    ax.set_xlabel(r'Position $x$', fontsize=10.5)
    ax.set_ylabel(r'Probability Density $\rho$', fontsize=10.5)
    ax.legend(loc='upper right', framealpha=0.88, facecolor=t['bg'], edgecolor=t['grid'], fontsize=9)
    ax.set_ylim(-0.08, 0.45)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.2.4.2_probability_current_flux.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 6. Potential Step for E > V0 (c.2.5.1) ───────────────────────────────────
def make_step_above(theme_name, t):
    fig, ax = plt.subplots(figsize=(8.8, 4.4), dpi=140)
    apply_theme(fig, ax, t)

    x_left = np.linspace(-4, 0, 400)
    x_right = np.linspace(0, 4, 400)

    V0 = 2.0
    E = 3.2
    k1 = np.sqrt(E)
    k2 = np.sqrt(E - V0)

    # Potential step profile
    ax.plot([-4, 0, 0, 4], [0, 0, V0, V0], color=t['c4'], lw=2.6, label=r'Potential Step $V(x) = V_0 \Theta(x)$')
    ax.fill_between([0, 4], 0, [V0, V0], color=t['c4'], alpha=0.15)
    ax.axhline(E, color=t['c3'], ls='--', lw=1.6, label=r'Total Energy $E > V_0$')

    # Wave function: Region 1 (incident + reflected interference), Region 2 (transmitted longer wavelength)
    # A = 1, B = (k1 - k2)/(k1 + k2), C = 2*k1/(k1 + k2)
    B = (k1 - k2) / (k1 + k2)
    C = 2 * k1 / (k1 + k2)

    psi_left = np.cos(k1 * x_left) + B * np.cos(-k1 * x_left)
    psi_right = C * np.cos(k2 * x_right)

    scale = 0.55
    ax.plot(x_left, E + scale * psi_left, color=t['c1'], lw=1.8, label=r'Region I: Incident + Reflected ($\lambda_1$)')
    ax.plot(x_right, E + scale * psi_right, color=t['c2'], lw=2.0, label=r'Region II: Transmitted ($\lambda_2 > \lambda_1$)')

    ax.text(-2.5, 0.4, 'Region I ($V = 0$)', color=t['fg'], fontsize=10.5, fontweight='bold')
    ax.text(1.5, 1.2, 'Region II ($V = V_0$)', color=t['fg'], fontsize=10.5, fontweight='bold')
    ax.text(2.2, E + 0.65, r'$R + T = 1$', color=t['c2'], fontsize=11, fontweight='bold',
            bbox=dict(boxstyle='round,pad=0.4', facecolor=t['bg'], edgecolor=t['grid']))

    ax.set_title(r'Potential Step ($E > V_0$): Partial Reflection & Transmission', fontsize=11.5, pad=10)
    ax.set_xlabel(r'Position $x$', fontsize=10.5)
    ax.set_ylabel(r'Energy / Wave Profile', fontsize=10.5)
    ax.legend(loc='lower left', framealpha=0.88, facecolor=t['bg'], edgecolor=t['grid'], fontsize=8.5)
    ax.set_ylim(-0.3, 4.5)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.2.5.1_potential_step_above.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 7. Potential Step for E < V0: Evanescent Decay (c.2.5.3) ─────────────────
def make_step_evanescent(theme_name, t):
    fig, ax = plt.subplots(figsize=(8.8, 4.4), dpi=140)
    apply_theme(fig, ax, t)

    x_left = np.linspace(-4, 0, 400)
    x_right = np.linspace(0, 4, 400)

    V0 = 3.0
    E = 1.5
    k1 = np.sqrt(E)
    kappa = np.sqrt(V0 - E)

    # Potential step profile
    ax.plot([-4, 0, 0, 4], [0, 0, V0, V0], color=t['c4'], lw=2.6, label=r'Potential Step $V(x) = V_0 \Theta(x)$')
    ax.fill_between([0, 4], 0, [V0, V0], color=t['c4'], alpha=0.15)
    ax.axhline(E, color=t['c3'], ls='--', lw=1.6, label=r'Total Energy $E < V_0$')

    # Wave function: Region 1 (standing wave, total reflection R=1), Region 2 (evanescent decay)
    delta = np.arctan(-kappa / k1)
    psi_left = 2 * np.cos(k1 * x_left + delta)
    psi_right = (2 * np.cos(delta)) * np.exp(-kappa * x_right)

    scale = 0.5
    ax.plot(x_left, E + scale * psi_left, color=t['c1'], lw=1.8, label=r'Region I: Standing Wave ($R = 1, T = 0$)')
    ax.plot(x_right, E + scale * psi_right, color=t['c5'], lw=2.2, label=r'Region II: Evanescent Decay $\propto e^{-\kappa x}$')

    # Penetration depth annotation
    skin_depth = 1.0 / kappa
    ax.axvline(skin_depth, color=t['c5'], ls=':', lw=1.5)
    ax.annotate(r'Skin Depth $\delta = \frac{1}{\kappa}$', xy=(skin_depth, E + 0.3), xytext=(skin_depth + 0.6, E + 0.8),
                arrowprops=dict(arrowstyle='->', color=t['c5'], lw=1.6),
                fontsize=10.5, color=t['c5'], fontweight='bold')

    ax.set_title(r'Potential Step ($E < V_0$): Total Reflection & Evanescent Penetration', fontsize=11.5, pad=10)
    ax.set_xlabel(r'Position $x$', fontsize=10.5)
    ax.set_ylabel(r'Energy / Wave Profile', fontsize=10.5)
    ax.legend(loc='lower left', framealpha=0.88, facecolor=t['bg'], edgecolor=t['grid'], fontsize=8.5)
    ax.set_ylim(-0.3, 4.2)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.2.5.3_potential_step_evanescent.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 8. Rectangular Barrier Tunneling for E < V0 (c.2.6.2) ────────────────────
def make_barrier_tunneling(theme_name, t):
    fig, ax = plt.subplots(figsize=(9.2, 4.5), dpi=140)
    apply_theme(fig, ax, t)

    a = 1.2
    x1 = np.linspace(-3.5, 0, 350)
    x2 = np.linspace(0, a, 200)
    x3 = np.linspace(a, 3.5, 350)

    V0 = 3.5
    E = 2.0
    k1 = np.sqrt(E)
    kappa = np.sqrt(V0 - E)

    # Barrier profile
    ax.plot([-3.5, 0, 0, a, a, 3.5], [0, 0, V0, V0, 0, 0], color=t['c4'], lw=2.6, label=r'Potential Barrier $V_0$')
    ax.fill_between([0, a], 0, [V0, V0], color=t['c4'], alpha=0.18)
    ax.axhline(E, color=t['c3'], ls='--', lw=1.6, label=r'Energy $E < V_0$ (Tunneling)')

    # Wave profiles
    psi1 = np.cos(k1 * x1) + 0.5 * np.cos(-k1 * x1)
    psi2 = 1.2 * np.exp(-kappa * x2) + 0.1 * np.exp(kappa * x2)
    psi3 = 0.45 * np.cos(k1 * (x3 - a))

    scale = 0.5
    ax.plot(x1, E + scale * psi1, color=t['c1'], lw=1.8, label=r'Region I: Incident + Reflected')
    ax.plot(x2, E + scale * psi2, color=t['c5'], lw=2.2, label=r'Region II: Exponential Tunneling Tail')
    ax.plot(x3, E + scale * psi3, color=t['c2'], lw=2.0, label=r'Region III: Transmitted Wave ($\propto e^{-2\kappa a}$)')

    ax.annotate(r'Tunneling Leakage $T > 0$', xy=(a + 0.5, E + 0.25), xytext=(a + 0.8, E + 0.9),
                arrowprops=dict(arrowstyle='->', color=t['c2'], lw=1.8),
                fontsize=10.5, color=t['c2'], fontweight='bold')

    ax.set_title(r'Quantum Tunneling: Transmission through a Rectangular Barrier ($E < V_0$)', fontsize=11.5, pad=10)
    ax.set_xlabel(r'Position $x$', fontsize=10.5)
    ax.set_ylabel(r'Energy / Wave Profile', fontsize=10.5)
    ax.legend(loc='lower left', framealpha=0.88, facecolor=t['bg'], edgecolor=t['grid'], fontsize=8.5)
    ax.set_ylim(-0.3, 4.5)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.2.6.2_barrier_tunneling.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 9. Barrier Transmission Resonances for E > V0 (c.2.6.4) ─────────────────
def make_transmission_resonances(theme_name, t):
    fig, ax = plt.subplots(figsize=(8.6, 4.2), dpi=140)
    apply_theme(fig, ax, t)

    # Energy ratio E/V0 from 1.01 to 6.0
    epsilon = np.linspace(1.02, 6.0, 600)
    # T = [1 + (1 / (4*eps*(eps - 1))) * sin^2(gamma * sqrt(eps - 1))]^-1
    gamma = 4.0 * np.pi  # Barrier parameter kappa_0 * a
    denom = 1.0 + (1.0 / (4.0 * epsilon * (epsilon - 1.0))) * (np.sin(gamma * np.sqrt(epsilon - 1.0)))**2
    T = 1.0 / denom

    ax.plot(epsilon, T, color=t['c1'], lw=2.4, label=r'Transmission Coefficient $T(E)$')
    ax.axhline(1.0, color=t['c2'], ls='--', lw=1.4, alpha=0.75, label=r'Perfect Transmission ($T = 1$)')

    # Mark resonance peaks where sin = 0
    ax.text(2.1, 0.45, r'Ramsauer–Townsend Resonances' '\n' r'where $2 a = n \lambda_2$ ($k_2 a = n\pi$)',
            color=t['fg'], fontsize=10.5, fontweight='bold',
            bbox=dict(boxstyle='round,pad=0.5', facecolor=t['bg'], edgecolor=t['grid']))

    ax.set_title(r'Barrier Transmission Resonances ($E > V_0$): Ramsauer–Townsend Effect', fontsize=11.5, pad=10)
    ax.set_xlabel(r'Energy Ratio $E / V_0$', fontsize=10.5)
    ax.set_ylabel(r'Transmission Coefficient $T$', fontsize=10.5)
    ax.legend(loc='lower right', framealpha=0.88, facecolor=t['bg'], edgecolor=t['grid'], fontsize=9)
    ax.set_xlim(1.0, 6.0)
    ax.set_ylim(0.0, 1.08)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.2.6.4_transmission_resonance.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


def main():
    generators = [
        make_stationary_phase,
        make_infinite_well_wavefunctions,
        make_symmetric_well_parity,
        make_wave_packet,
        make_current_density_flux,
        make_step_above,
        make_step_evanescent,
        make_barrier_tunneling,
        make_transmission_resonances
    ]

    for name, theme in THEMES.items():
        print(f"Generating diagrams for theme: {name}")
        for gen in generators:
            gen(name, theme)

    print("All Module 2 diagrams generated successfully!")


if __name__ == '__main__':
    main()
