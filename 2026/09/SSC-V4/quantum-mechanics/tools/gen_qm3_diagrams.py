#!/usr/bin/env python3
"""Generate high-resolution light and dark diagrams for Quantum Mechanics Module 3.
Topics: Hilbert Space, Dirac Bra-Kets, Hermitian Operators, Commutators,
        Generalized Uncertainty, Unitary Transformations, Diagonalization,
        Position & Momentum Continuous Representations.
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


# ── 1. Dirac Bra-Ket Projection & Completeness (c.3.1.2) ────────────────────
def make_bra_ket_projection(theme_name, t):
    fig, ax = plt.subplots(figsize=(7.5, 5.0), dpi=140)
    apply_theme(fig, ax, t)

    # Basis axes e1 and e2
    ax.arrow(0, 0, 4.5, 0, head_width=0.15, head_length=0.2, fc=t['fg'], ec=t['fg'], lw=1.5)
    ax.arrow(0, 0, 0, 4.0, head_width=0.15, head_length=0.2, fc=t['fg'], ec=t['fg'], lw=1.5)
    ax.text(4.7, -0.1, r'$|\phi_1\rangle$', color=t['fg'], fontsize=12, fontweight='bold')
    ax.text(-0.1, 4.2, r'$|\phi_2\rangle$', color=t['fg'], fontsize=12, fontweight='bold')

    # State vector |psi>
    vx, vy = 3.2, 2.6
    ax.annotate('', xy=(vx, vy), xytext=(0, 0),
                arrowprops=dict(arrowstyle='->', color=t['c1'], lw=3.0))
    ax.text(vx + 0.15, vy + 0.1, r'$|\psi\rangle$', color=t['c1'], fontsize=13, fontweight='bold')

    # Projections onto axes
    ax.plot([vx, vx], [0, vy], color=t['c3'], ls='--', lw=1.6)
    ax.plot([0, vx], [vy, vy], color=t['c3'], ls='--', lw=1.6)

    # Projection vectors
    ax.annotate('', xy=(vx, 0), xytext=(0, 0),
                arrowprops=dict(arrowstyle='->', color=t['c2'], lw=2.2))
    ax.text(vx/2, -0.4, r'$c_1 |\phi_1\rangle = |\phi_1\rangle\langle\phi_1|\psi\rangle$',
            color=t['c2'], fontsize=10.5, ha='center', fontweight='bold')

    ax.annotate('', xy=(0, vy), xytext=(0, 0),
                arrowprops=dict(arrowstyle='->', color=t['c5'], lw=2.2))
    ax.text(-0.35, vy/2, r'$c_2 |\phi_2\rangle = |\phi_2\rangle\langle\phi_2|\psi\rangle$',
            color=t['c5'], fontsize=10.5, ha='right', fontweight='bold')

    # Completeness resolution
    ax.text(2.2, 3.4, r'$\sum_n |\phi_n\rangle\langle\phi_n| = \hat{I}$' '\n'
            r'$|\psi\rangle = \sum_n \langle\phi_n|\psi\rangle |\phi_n\rangle$',
            color=t['fg'], fontsize=11, fontweight='bold',
            bbox=dict(boxstyle='round,pad=0.5', facecolor=t['bg'], edgecolor=t['grid']))

    ax.set_title('Hilbert Space: Dirac Projection and Identity Resolution', fontsize=12, pad=12)
    ax.set_xlim(-1.2, 5.2)
    ax.set_ylim(-0.8, 4.6)
    ax.set_aspect('equal')

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.3.1.2_dirac_bra_ket_projection.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 2. Commutator Geometry & Path Discrepancy (c.3.3.1) ──────────────────────
def make_commutator_geometry(theme_name, t):
    fig, ax = plt.subplots(figsize=(8.0, 4.6), dpi=140)
    apply_theme(fig, ax, t)

    # Initial state |psi>
    p0 = np.array([1.0, 1.0])
    pA = np.array([3.5, 1.2])   # A|psi>
    pBA = np.array([4.2, 3.8])  # B(A|psi>)

    pB = np.array([1.4, 3.4])   # B|psi>
    pAB = np.array([2.5, 4.5])  # A(B|psi>)

    # Path 1: A then B (Blue)
    ax.annotate('', xy=pA, xytext=p0, arrowprops=dict(arrowstyle='->', color=t['c1'], lw=2.2))
    ax.annotate('', xy=pBA, xytext=pA, arrowprops=dict(arrowstyle='->', color=t['c1'], lw=2.2))
    ax.text((p0[0]+pA[0])/2, (p0[1]+pA[1])/2 - 0.35, r'$\hat{A}$', color=t['c1'], fontsize=12, fontweight='bold')
    ax.text((pA[0]+pBA[0])/2 + 0.25, (pA[1]+pBA[1])/2, r'$\hat{B}$', color=t['c1'], fontsize=12, fontweight='bold')

    # Path 2: B then A (Green)
    ax.annotate('', xy=pB, xytext=p0, arrowprops=dict(arrowstyle='->', color=t['c2'], lw=2.2))
    ax.annotate('', xy=pAB, xytext=pB, arrowprops=dict(arrowstyle='->', color=t['c2'], lw=2.2))
    ax.text((p0[0]+pB[0])/2 - 0.35, (p0[1]+pB[1])/2, r'$\hat{B}$', color=t['c2'], fontsize=12, fontweight='bold')
    ax.text((pB[0]+pAB[0])/2, (pB[1]+pAB[1])/2 + 0.3, r'$\hat{A}$', color=t['c2'], fontsize=12, fontweight='bold')

    # Discrepancy arrow [A, B]|psi> (Red)
    ax.annotate('', xy=pAB, xytext=pBA, arrowprops=dict(arrowstyle='<->', color=t['c4'], lw=2.6, ls='--'))
    ax.text((pBA[0]+pAB[0])/2 + 0.1, (pBA[1]+pAB[1])/2 + 0.45,
            r'$[\hat{A}, \hat{B}]|\psi\rangle = (\hat{A}\hat{B} - \hat{B}\hat{A})|\psi\rangle \neq 0$',
            color=t['c4'], fontsize=11, fontweight='bold')

    # Markers
    ax.plot(*p0, 'o', color=t['fg'], markersize=7)
    ax.text(p0[0]-0.25, p0[1]-0.25, r'$|\psi\rangle$', color=t['fg'], fontsize=12, fontweight='bold')

    ax.plot(*pBA, 'o', color=t['c1'], markersize=7)
    ax.text(pBA[0]+0.15, pBA[1]-0.1, r'$\hat{B}\hat{A}|\psi\rangle$', color=t['c1'], fontsize=11, fontweight='bold')

    ax.plot(*pAB, 'o', color=t['c2'], markersize=7)
    ax.text(pAB[0]-0.85, pAB[1]+0.2, r'$\hat{A}\hat{B}|\psi\rangle$', color=t['c2'], fontsize=11, fontweight='bold')

    ax.set_title(r'Commutator Algebra: Geometric Non-Commutativity $[\hat{A}, \hat{B}] \neq 0$', fontsize=12, pad=12)
    ax.set_xlim(0.2, 5.2)
    ax.set_ylim(0.2, 5.4)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.3.3.1_commutator_geometry.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 3. Generalized Uncertainty Relation Hyperbola (c.3.4.1) ─────────────────
def make_generalized_uncertainty(theme_name, t):
    fig, ax = plt.subplots(figsize=(8.2, 4.4), dpi=140)
    apply_theme(fig, ax, t)

    da = np.linspace(0.25, 4.5, 400)
    bound = 1.0  # (1/2)|<[A, B]>|
    db_min = bound / da

    ax.plot(da, db_min, color=t['c4'], lw=2.6, label=r'Boundary: $\Delta A \, \Delta B = \frac{1}{2}|\langle [\hat{A}, \hat{B}] \rangle|$')
    ax.fill_between(da, db_min, 6.0, color=t['shade'], alpha=0.18, label='Physically Allowed States')

    # Selected states
    ax.plot(1.0, 1.0, 'o', color=t['c2'], markersize=7)
    ax.text(1.15, 1.25, r'Minimum Uncertainty ($\Delta A = \Delta B$)', color=t['c2'], fontsize=10.5, fontweight='bold')

    ax.plot(0.4, 2.5, 'o', color=t['c1'], markersize=7)
    ax.text(0.55, 2.7, r'Sharp $A$, Broad $B$', color=t['c1'], fontsize=10.5, fontweight='bold')

    ax.plot(3.0, 0.333, 'o', color=t['c3'], markersize=7)
    ax.text(2.2, 0.65, r'Broad $A$, Sharp $B$', color=t['c3'], fontsize=10.5, fontweight='bold')

    ax.text(2.6, 4.5, r'$\Delta A \, \Delta B \geq \frac{1}{2}|\langle [\hat{A}, \hat{B}] \rangle|$' '\n'
            r'For $[\hat{x}, \hat{p}] = i\hbar \Rightarrow \Delta x \, \Delta p \geq \frac{\hbar}{2}$',
            color=t['fg'], fontsize=11, fontweight='bold',
            bbox=dict(boxstyle='round,pad=0.5', facecolor=t['bg'], edgecolor=t['grid']))

    ax.set_title('Robertson–Schrödinger Generalized Uncertainty Relation', fontsize=12, pad=12)
    ax.set_xlabel(r'Uncertainty $\Delta A$', fontsize=11)
    ax.set_ylabel(r'Uncertainty $\Delta B$', fontsize=11)
    ax.legend(loc='upper right', framealpha=0.88, facecolor=t['bg'], edgecolor=t['grid'], fontsize=9.5)
    ax.set_xlim(0, 4.6)
    ax.set_ylim(0, 5.8)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.3.4.1_generalized_uncertainty.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 4. Unitary Transformation as Rigid Rotation (c.3.5.2) ───────────────────
def make_unitary_rotation(theme_name, t):
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(9.6, 4.4), dpi=140)
    apply_theme(fig, ax1, t)
    apply_theme(fig, ax2, t)

    theta = np.pi / 5
    U = np.array([[np.cos(theta), -np.sin(theta)],
                  [np.sin(theta),  np.cos(theta)]])

    v1 = np.array([2.5, 1.0])
    v2 = np.array([-0.8, 2.2])

    # Left: Original basis and states
    ax1.arrow(0, 0, 3.2, 0, head_width=0.12, fc=t['fg'], ec=t['fg'], lw=1.4)
    ax1.arrow(0, 0, 0, 3.0, head_width=0.12, fc=t['fg'], ec=t['fg'], lw=1.4)
    ax1.annotate('', xy=v1, xytext=(0, 0), arrowprops=dict(arrowstyle='->', color=t['c1'], lw=2.4))
    ax1.annotate('', xy=v2, xytext=(0, 0), arrowprops=dict(arrowstyle='->', color=t['c2'], lw=2.4))
    ax1.text(v1[0]+0.1, v1[1], r'$|\psi\rangle$', color=t['c1'], fontsize=12, fontweight='bold')
    ax1.text(v2[0]-0.2, v2[1]+0.1, r'$|\phi\rangle$', color=t['c2'], fontsize=12, fontweight='bold')
    ax1.set_title(r'Original State Space $\{|\phi_n\rangle\}$', fontsize=11, pad=10)
    ax1.set_xlim(-1.8, 3.6)
    ax1.set_ylim(-0.8, 3.4)
    ax1.set_aspect('equal')

    # Right: Unitary transformed states
    uv1 = U @ v1
    uv2 = U @ v2
    ax2.arrow(0, 0, 3.2, 0, head_width=0.12, fc=t['fg'], ec=t['fg'], lw=1.4)
    ax2.arrow(0, 0, 0, 3.0, head_width=0.12, fc=t['fg'], ec=t['fg'], lw=1.4)
    ax2.annotate('', xy=uv1, xytext=(0, 0), arrowprops=dict(arrowstyle='->', color=t['c1'], lw=2.4))
    ax2.annotate('', xy=uv2, xytext=(0, 0), arrowprops=dict(arrowstyle='->', color=t['c2'], lw=2.4))
    ax2.text(uv1[0]+0.1, uv1[1], r'$\hat{U}|\psi\rangle$', color=t['c1'], fontsize=12, fontweight='bold')
    ax2.text(uv2[0]-0.3, uv2[1]+0.1, r'$\hat{U}|\phi\rangle$', color=t['c2'], fontsize=12, fontweight='bold')
    ax2.set_title(r'Transformed Space: $\langle \hat{U}\phi|\hat{U}\psi\rangle = \langle\phi|\psi\rangle$', fontsize=11, pad=10)
    ax2.set_xlim(-1.8, 3.6)
    ax2.set_ylim(-0.8, 3.4)
    ax2.set_aspect('equal')

    plt.suptitle(r'Unitary Transformation: $\hat{U}^\dagger \hat{U} = \hat{I} \Rightarrow$ Isometry Preserving Inner Products & Norms',
                 color=t['fg'], fontsize=12, y=0.98)
    fig.tight_layout()

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.3.5.2_unitary_transformation_rotation.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 5. Matrix Diagonalization & Spectral Form (c.3.6.1) ──────────────────────
def make_matrix_diagonalization(theme_name, t):
    fig, ax = plt.subplots(figsize=(8.6, 4.4), dpi=140)
    apply_theme(fig, ax, t)
    ax.axis('off')

    # Draw matrix transformation scheme
    ax.text(0.12, 0.70, r'$\mathbf{A} = [A_{ij}] = [\langle\phi_i|\hat{A}|\phi_j\rangle]$',
            color=t['fg'], fontsize=13, ha='center', va='center',
            bbox=dict(boxstyle='round,pad=0.6', facecolor=t['bg'], edgecolor=t['c1'], lw=1.8))
    ax.text(0.12, 0.40, 'Arbitrary Basis:\nCoupled Off-Diagonal Elements', color=t['c1'], fontsize=10.5, ha='center')

    # Arrow with Unitary transformation
    ax.annotate('', xy=(0.48, 0.70), xytext=(0.28, 0.70),
                arrowprops=dict(arrowstyle='->', color=t['c3'], lw=2.6))
    ax.text(0.38, 0.78, r'$\mathbf{U}^\dagger \mathbf{A} \mathbf{U}$', color=t['c3'], fontsize=12, ha='center', fontweight='bold')

    ax.text(0.68, 0.70, r'$\mathbf{D} = \mathrm{diag}(\lambda_1, \lambda_2, \ldots, \lambda_n)$',
            color=t['fg'], fontsize=13, ha='center', va='center',
            bbox=dict(boxstyle='round,pad=0.6', facecolor=t['bg'], edgecolor=t['c2'], lw=1.8))
    ax.text(0.68, 0.40, 'Eigenbasis:\nDecoupled Real Spectrum', color=t['c2'], fontsize=10.5, ha='center')

    # Invariants box
    ax.text(0.50, 0.16, r'Spectral Invariants: $\mathrm{Tr}(\mathbf{A}) = \sum_i \lambda_i, \quad \det(\mathbf{A}) = \prod_i \lambda_i$',
            color=t['fg'], fontsize=11.5, ha='center', fontweight='bold',
            bbox=dict(boxstyle='round,pad=0.5', facecolor=t['bg'], edgecolor=t['grid']))

    ax.set_title('Diagonalization of a Hermitian Observable into its Spectral Eigenbasis',
                 color=t['fg'], fontsize=12.5, pad=12)
    ax.set_xlim(-0.1, 1.0)
    ax.set_ylim(0.0, 1.0)

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.3.6.1_eigenvalue_diagonalization.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 6. Commuting Observables & Common Eigenbasis (c.3.6.3) ───────────────────
def make_compatible_observables(theme_name, t):
    fig, ax = plt.subplots(figsize=(8.4, 4.4), dpi=140)
    apply_theme(fig, ax, t)

    # Overlapping sets illustrating simultaneous diagonalization
    circleA = plt.Circle((2.5, 2.0), 1.5, color=t['c1'], alpha=0.15)
    circleB = plt.Circle((4.0, 2.0), 1.5, color=t['c2'], alpha=0.15)
    ax.add_patch(circleA)
    ax.add_patch(circleB)

    circleA_edge = plt.Circle((2.5, 2.0), 1.5, fill=False, edgecolor=t['c1'], lw=2.0)
    circleB_edge = plt.Circle((4.0, 2.0), 1.5, fill=False, edgecolor=t['c2'], lw=2.0)
    ax.add_patch(circleA_edge)
    ax.add_patch(circleB_edge)

    ax.text(1.8, 2.0, r'$\hat{A}|a_n, b_m\rangle$' '\n' r'$= a_n |a_n, b_m\rangle$',
            color=t['c1'], fontsize=10.5, ha='center', va='center')
    ax.text(4.7, 2.0, r'$\hat{B}|a_n, b_m\rangle$' '\n' r'$= b_m |a_n, b_m\rangle$',
            color=t['c2'], fontsize=10.5, ha='center', va='center')

    ax.text(3.25, 2.0, r'$[\hat{A}, \hat{B}] = 0$' '\n' r'Simultaneous' '\n' r'Eigenstates' '\n' r'$|a_n, b_m\rangle$',
            color=t['fg'], fontsize=10, ha='center', va='center', fontweight='bold')

    ax.text(3.25, 4.0, r'Theorem 2.3: Commuting Hermitian Observables Share a Complete Common Eigenbasis',
            color=t['fg'], fontsize=11, ha='center', fontweight='bold')

    ax.set_xlim(0.5, 6.0)
    ax.set_ylim(0.2, 4.6)
    ax.set_aspect('equal')
    ax.axis('off')

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.3.6.3_compatible_observables_simultaneous_eigenstates.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


# ── 7. Position & Momentum Continuous Representations (c.3.7.2) ─────────────
def make_position_momentum_representation(theme_name, t):
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(9.6, 4.2), dpi=140)
    apply_theme(fig, ax1, t)
    apply_theme(fig, ax2, t)

    x = np.linspace(-3.5, 3.5, 400)
    sigma_x = 0.8
    psi_x = np.exp(-x**2 / (2 * sigma_x**2)) / np.sqrt(np.sqrt(np.pi) * sigma_x)

    ax1.plot(x, psi_x**2, color=t['c1'], lw=2.2, label=r'$|\psi(x)|^2 = |\langle x|\psi\rangle|^2$')
    ax1.fill_between(x, 0, psi_x**2, color=t['c1'], alpha=0.2)
    ax1.set_title(r'Position Basis: $\psi(x) = \langle x|\psi\rangle$', fontsize=11, pad=10)
    ax1.set_xlabel(r'Position $x$', fontsize=10.5)
    ax1.set_ylabel('Probability Density', fontsize=10.5)
    ax1.legend(loc='upper right', framealpha=0.85, facecolor=t['bg'], edgecolor=t['grid'], fontsize=9)
    ax1.set_ylim(-0.05, 0.85)

    p = np.linspace(-3.5, 3.5, 400)
    sigma_p = 1.0 / sigma_x
    phi_p = np.exp(-p**2 / (2 * sigma_p**2)) / np.sqrt(np.sqrt(np.pi) * sigma_p)

    ax2.plot(p, phi_p**2, color=t['c2'], lw=2.2, label=r'$|\phi(p)|^2 = |\langle p|\psi\rangle|^2$')
    ax2.fill_between(p, 0, phi_p**2, color=t['c2'], alpha=0.2)
    ax2.set_title(r'Momentum Basis: $\phi(p) = \langle p|\psi\rangle$', fontsize=11, pad=10)
    ax2.set_xlabel(r'Momentum $p$', fontsize=10.5)
    ax2.set_ylabel('Probability Density', fontsize=10.5)
    ax2.legend(loc='upper right', framealpha=0.85, facecolor=t['bg'], edgecolor=t['grid'], fontsize=9)
    ax2.set_ylim(-0.05, 0.85)

    plt.suptitle(r'Continuous Bases Connection: $\phi(p) = \frac{1}{\sqrt{2\pi\hbar}} \int_{-\infty}^\infty \psi(x) e^{-ipx/\hbar} \, dx$',
                 color=t['fg'], fontsize=11.5, y=0.98)
    fig.tight_layout()

    out_dir = LIGHT_DIR if theme_name == 'light' else DARK_DIR
    fig.savefig(os.path.join(out_dir, 'c.3.7.2_position_momentum_representation.png'),
                bbox_inches='tight', facecolor=fig.get_facecolor(), dpi=140)
    plt.close(fig)


def main():
    generators = [
        make_bra_ket_projection,
        make_commutator_geometry,
        make_generalized_uncertainty,
        make_unitary_rotation,
        make_matrix_diagonalization,
        make_compatible_observables,
        make_position_momentum_representation
    ]

    for name, theme in THEMES.items():
        print(f"Generating diagrams for theme: {name}")
        for gen in generators:
            gen(name, theme)

    print("All Module 3 diagrams generated successfully!")


if __name__ == '__main__':
    main()
