# Complete Python script to generate the entire HTML document with all sections, examples, problems, mathjax, and SVG diagrams.

import json
import re

svg_fig_2_1 = """
<div class="diagram-container">
  <svg class="diagram-svg" viewBox="0 0 420 200" width="420" height="200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="hatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="10" stroke="#94a3b8" stroke-width="1.5" />
      </pattern>
    </defs>
    <!-- Background shaded regions for V = infinity -->
    <rect x="30" y="20" width="90" height="130" fill="url(#hatch)" opacity="0.6" />
    <rect x="300" y="20" width="90" height="130" fill="url(#hatch)" opacity="0.6" />
    <!-- Axes -->
    <line x1="20" y1="150" x2="400" y2="150" stroke="#334155" stroke-width="2" />
    <line x1="120" y1="170" x2="120" y2="20" stroke="#334155" stroke-width="2" />
    <line x1="300" y1="170" x2="300" y2="20" stroke="#334155" stroke-width="2" />
    <!-- Potential walls -->
    <line x1="120" y1="150" x2="120" y2="30" stroke="#0f172a" stroke-width="3" />
    <line x1="300" y1="150" x2="300" y2="30" stroke="#0f172a" stroke-width="3" />
    <!-- Labels -->
    <text x="120" y="170" font-family="Cambria, serif" font-size="16" text-anchor="middle" fill="#0f172a">0</text>
    <text x="300" y="170" font-family="Cambria, serif" font-size="16" text-anchor="middle" fill="#0f172a">a</text>
    <text x="395" y="145" font-family="Cambria, serif" font-size="16" fill="#0f172a">x</text>
    <text x="210" y="135" font-family="Cambria, serif" font-size="16" text-anchor="middle" fill="#2563eb" font-weight="bold">V(x) = 0</text>
    <text x="75" y="80" font-family="Cambria, serif" font-size="15" text-anchor="middle" fill="#475569">V = ∞</text>
    <text x="345" y="80" font-family="Cambria, serif" font-size="15" text-anchor="middle" fill="#475569">V = ∞</text>
  </svg>
  <div class="diagram-caption"><strong>Figure 2.1:</strong> The infinite square well potential: $V(x) = 0$ for $0 \le x \le a$, and $V(x) = \infty$ elsewhere.</div>
</div>
"""

svg_fig_2_3 = """
<div class="diagram-container">
  <svg class="diagram-svg" viewBox="0 0 420 190" width="420" height="190" xmlns="http://www.w3.org/2000/svg">
    <!-- Axes -->
    <line x1="50" y1="150" x2="370" y2="150" stroke="#334155" stroke-width="2" />
    <line x1="80" y1="165" x2="80" y2="25" stroke="#334155" stroke-width="2" />
    <line x1="320" y1="165" x2="320" y2="25" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
    <!-- Parabola curve: starts at (80,150), vertex at (200,45), ends at (320,150) -->
    <path d="M 80 150 Q 200 -60 320 150" fill="none" stroke="#2563eb" stroke-width="2.5" />
    <!-- Vertex dashed lines -->
    <line x1="80" y1="45" x2="200" y2="45" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />
    <line x1="200" y1="150" x2="200" y2="45" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />
    <!-- Labels -->
    <text x="80" y="170" font-family="Cambria, serif" font-size="15" text-anchor="middle" fill="#0f172a">0</text>
    <text x="200" y="170" font-family="Cambria, serif" font-size="15" text-anchor="middle" fill="#0f172a">a/2</text>
    <text x="320" y="170" font-family="Cambria, serif" font-size="15" text-anchor="middle" fill="#0f172a">a</text>
    <text x="365" y="145" font-family="Cambria, serif" font-size="15" fill="#0f172a">x</text>
    <text x="70" y="48" font-family="Cambria, serif" font-size="14" text-anchor="end" fill="#2563eb">Aa²/4</text>
    <text x="75" y="25" font-family="Cambria, serif" font-size="15" text-anchor="end" fill="#0f172a">Ψ(x, 0)</text>
  </svg>
  <div class="diagram-caption"><strong>Figure 2.3:</strong> The starting wave function $\Psi(x, 0) = Ax(a - x)$ in Example 2.2.</div>
</div>
"""

svg_fig_2_15 = """
<div class="diagram-container">
  <svg class="diagram-svg" viewBox="0 0 420 180" width="420" height="180" xmlns="http://www.w3.org/2000/svg">
    <!-- Axes -->
    <line x1="40" y1="130" x2="380" y2="130" stroke="#334155" stroke-width="2" />
    <line x1="210" y1="145" x2="210" y2="30" stroke="#334155" stroke-width="1.5" />
    <!-- Delta spike (arrow pointing up) -->
    <line x1="210" y1="130" x2="210" y2="40" stroke="#dc2626" stroke-width="3.5" />
    <polygon points="210,25 204,42 216,42" fill="#dc2626" />
    <!-- Wave arrows -->
    <!-- Incident -->
    <path d="M 70 90 Q 95 75 120 90 T 170 90" fill="none" stroke="#2563eb" stroke-width="2" />
    <polygon points="175,90 165,85 165,95" fill="#2563eb" />
    <text x="115" y="70" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#2563eb">Incident: Ae^{ikx}</text>
    <!-- Reflected -->
    <path d="M 160 115 Q 135 125 110 115 T 70 115" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
    <polygon points="65,115 75,110 75,120" fill="#64748b" />
    <text x="115" y="145" font-family="Cambria, serif" font-size="12" text-anchor="middle" fill="#64748b">Reflected: Be^{-ikx}</text>
    <!-- Transmitted -->
    <path d="M 250 90 Q 275 75 300 90 T 350 90" fill="none" stroke="#059669" stroke-width="2" />
    <polygon points="355,90 345,85 345,95" fill="#059669" />
    <text x="300" y="70" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#059669">Transmitted: Fe^{ikx}</text>
    <!-- Labels -->
    <text x="210" y="160" font-family="Cambria, serif" font-size="15" text-anchor="middle" fill="#0f172a">0</text>
    <text x="375" y="125" font-family="Cambria, serif" font-size="15" fill="#0f172a">x</text>
    <text x="220" y="35" font-family="Cambria, serif" font-size="14" fill="#dc2626" font-weight="bold">V(x) = αδ(x)</text>
  </svg>
  <div class="diagram-caption"><strong>Figure 2.15:</strong> The Dirac delta-function barrier $V(x) = \alpha \delta(x)$.</div>
</div>
"""

svg_fig_2_16 = """
<div class="diagram-container">
  <svg class="diagram-svg" viewBox="0 0 440 190" width="440" height="190" xmlns="http://www.w3.org/2000/svg">
    <!-- Axes -->
    <line x1="30" y1="60" x2="410" y2="60" stroke="#334155" stroke-width="2" />
    <line x1="220" y1="165" x2="220" y2="30" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />
    <!-- Potential Profile -->
    <line x1="30" y1="60" x2="140" y2="60" stroke="#2563eb" stroke-width="2.5" />
    <line x1="140" y1="60" x2="140" y2="140" stroke="#2563eb" stroke-width="2.5" />
    <line x1="140" y1="140" x2="300" y2="140" stroke="#2563eb" stroke-width="2.5" />
    <line x1="300" y1="140" x2="300" y2="60" stroke="#2563eb" stroke-width="2.5" />
    <line x1="300" y1="60" x2="410" y2="60" stroke="#2563eb" stroke-width="2.5" />
    <!-- Shading inside well -->
    <rect x="140" y="60" width="160" height="80" fill="#2563eb" opacity="0.08" />
    <!-- Labels -->
    <text x="140" y="50" font-family="Cambria, serif" font-size="15" text-anchor="middle" fill="#0f172a">-a</text>
    <text x="220" y="50" font-family="Cambria, serif" font-size="15" text-anchor="middle" fill="#0f172a">0</text>
    <text x="300" y="50" font-family="Cambria, serif" font-size="15" text-anchor="middle" fill="#0f172a">+a</text>
    <text x="405" y="55" font-family="Cambria, serif" font-size="15" fill="#0f172a">x</text>
    <text x="130" y="145" font-family="Cambria, serif" font-size="14" text-anchor="end" fill="#2563eb">-V₀</text>
    <text x="220" y="105" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#2563eb">V = -V₀</text>
    <text x="80" y="45" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#64748b">V = 0</text>
    <text x="360" y="45" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#64748b">V = 0</text>
  </svg>
  <div class="diagram-caption"><strong>Figure 2.16:</strong> The finite square well of width $2a$ and depth $-V_0$.</div>
</div>
"""

svg_fig_2_19 = """
<div class="diagram-container">
  <svg class="diagram-svg" viewBox="0 0 440 180" width="440" height="180" xmlns="http://www.w3.org/2000/svg">
    <!-- Axes -->
    <line x1="30" y1="70" x2="410" y2="70" stroke="#334155" stroke-width="1.5" stroke-dasharray="2,2" />
    <line x1="200" y1="160" x2="200" y2="30" stroke="#334155" stroke-width="1.5" />
    <!-- Step down potential -->
    <line x1="30" y1="70" x2="200" y2="70" stroke="#2563eb" stroke-width="3" />
    <line x1="200" y1="70" x2="200" y2="135" stroke="#2563eb" stroke-width="3" />
    <line x1="200" y1="135" x2="410" y2="135" stroke="#2563eb" stroke-width="3" />
    <!-- Incident wave above potential -->
    <line x1="30" y1="40" x2="410" y2="40" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,4" />
    <text x="35" y="35" font-family="Cambria, serif" font-size="14" fill="#0f172a" font-weight="bold">E &gt; 0</text>
    <!-- Labels -->
    <text x="190" y="65" font-family="Cambria, serif" font-size="14" text-anchor="end" fill="#2563eb">V = 0</text>
    <text x="310" y="155" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#2563eb">V = -V₀</text>
    <text x="200" y="170" font-family="Cambria, serif" font-size="15" text-anchor="middle" fill="#0f172a">0</text>
    <text x="405" y="65" font-family="Cambria, serif" font-size="15" fill="#0f172a">x</text>
  </svg>
  <div class="diagram-caption"><strong>Figure 2.19:</strong> Scattering from a "cliff" (abrupt potential drop $-V_0$) in Problem 2.35.</div>
</div>
"""

svg_fig_2_20 = """
<div class="diagram-container">
  <svg class="diagram-svg" viewBox="0 0 480 190" width="480" height="190" xmlns="http://www.w3.org/2000/svg">
    <!-- Axes -->
    <line x1="20" y1="60" x2="460" y2="60" stroke="#334155" stroke-width="2" />
    <line x1="240" y1="165" x2="240" y2="30" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />
    <!-- Double square well profile:
         Left well from x = -b - a (80) to x = -b (160)
         Barrier from x = -b (160) to x = +b (320)
         Right well from x = +b (320) to x = +b + a (400)
    -->
    <line x1="20" y1="60" x2="80" y2="60" stroke="#2563eb" stroke-width="2.5" />
    <line x1="80" y1="60" x2="80" y2="140" stroke="#2563eb" stroke-width="2.5" />
    <line x1="80" y1="140" x2="160" y2="140" stroke="#2563eb" stroke-width="2.5" />
    <line x1="160" y1="140" x2="160" y2="60" stroke="#2563eb" stroke-width="2.5" />
    <line x1="160" y1="60" x2="320" y2="60" stroke="#2563eb" stroke-width="2.5" />
    <line x1="320" y1="60" x2="320" y2="140" stroke="#2563eb" stroke-width="2.5" />
    <line x1="320" y1="140" x2="400" y2="140" stroke="#2563eb" stroke-width="2.5" />
    <line x1="400" y1="140" x2="400" y2="60" stroke="#2563eb" stroke-width="2.5" />
    <line x1="400" y1="60" x2="460" y2="60" stroke="#2563eb" stroke-width="2.5" />
    <!-- Shading inside wells -->
    <rect x="80" y="60" width="80" height="80" fill="#2563eb" opacity="0.08" />
    <rect x="320" y="60" width="80" height="80" fill="#2563eb" opacity="0.08" />
    <!-- Dimension arrows -->
    <line x1="80" y1="155" x2="160" y2="155" stroke="#475569" stroke-width="1.5" />
    <line x1="320" y1="155" x2="400" y2="155" stroke="#475569" stroke-width="1.5" />
    <line x1="160" y1="45" x2="320" y2="45" stroke="#475569" stroke-width="1.5" />
    <text x="120" y="170" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#475569">a</text>
    <text x="360" y="170" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#475569">a</text>
    <text x="240" y="38" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#475569">2b</text>
    <text x="240" y="55" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#0f172a">0</text>
    <text x="70" y="145" font-family="Cambria, serif" font-size="14" text-anchor="end" fill="#2563eb">-V₀</text>
    <text x="455" y="55" font-family="Cambria, serif" font-size="15" fill="#0f172a">x</text>
  </svg>
  <div class="diagram-caption"><strong>Figure 2.20:</strong> The double square well potential in Problem 2.47.</div>
</div>
"""

svg_fig_2_21 = """
<div class="diagram-container">
  <svg class="diagram-svg" viewBox="0 0 520 200" width="520" height="200" xmlns="http://www.w3.org/2000/svg">
    <!-- Boundaries between regions -->
    <line x1="160" y1="20" x2="160" y2="170" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4" />
    <line x1="360" y1="20" x2="360" y2="170" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4" />
    <!-- Axes -->
    <line x1="20" y1="150" x2="500" y2="150" stroke="#334155" stroke-width="2" />
    <!-- Potential curve in Region II -->
    <line x1="20" y1="150" x2="160" y2="150" stroke="#2563eb" stroke-width="2.5" />
    <path d="M 160 150 C 180 80, 210 180, 260 90 C 300 30, 330 170, 360 150" fill="none" stroke="#2563eb" stroke-width="2.5" />
    <line x1="360" y1="150" x2="500" y2="150" stroke="#2563eb" stroke-width="2.5" />
    <!-- Region labels -->
    <text x="90" y="40" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#475569">Region I</text>
    <text x="260" y="40" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#475569">Region II</text>
    <text x="430" y="40" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#475569">Region III</text>
    <!-- Wave Labels -->
    <text x="90" y="80" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#1e40af">Ae^{ikx} →</text>
    <text x="90" y="105" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#64748b">← Be^{-ikx}</text>
    <text x="260" y="115" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#2563eb" font-weight="bold">V(x)</text>
    <text x="430" y="80" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#059669">Fe^{ikx} →</text>
    <text x="430" y="105" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#64748b">← Ge^{-ikx}</text>
    <text x="495" y="145" font-family="Cambria, serif" font-size="15" fill="#0f172a">x</text>
  </svg>
  <div class="diagram-caption"><strong>Figure 2.21:</strong> Scattering from an arbitrary localized potential $V(x)$ ($S$-matrix formalism in Problem 2.53).</div>
</div>
"""

svg_fig_2_22 = """
<div class="diagram-container">
  <svg class="diagram-svg" viewBox="0 0 480 150" width="480" height="150" xmlns="http://www.w3.org/2000/svg">
    <!-- Potential Blocks M1 and M2 -->
    <rect x="110" y="40" width="80" height="60" fill="#f1f5f9" stroke="#334155" stroke-width="2" rx="4" />
    <rect x="290" y="40" width="80" height="60" fill="#f1f5f9" stroke="#334155" stroke-width="2" rx="4" />
    <text x="150" y="75" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#1e293b">M₁</text>
    <text x="330" y="75" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#1e293b">M₂</text>
    <!-- Flat baseline -->
    <line x1="20" y1="100" x2="110" y2="100" stroke="#2563eb" stroke-width="2.5" />
    <line x1="190" y1="100" x2="290" y2="100" stroke="#2563eb" stroke-width="2.5" />
    <line x1="370" y1="100" x2="460" y2="100" stroke="#2563eb" stroke-width="2.5" />
    <!-- Labels -->
    <text x="65" y="125" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#64748b">V = 0</text>
    <text x="240" y="125" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#64748b">V = 0</text>
    <text x="415" y="125" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#64748b">V = 0</text>
    <text x="465" y="95" font-family="Cambria, serif" font-size="15" fill="#0f172a">x</text>
  </svg>
  <div class="diagram-caption"><strong>Figure 2.22:</strong> A potential consisting of two isolated pieces $M_1$ and $M_2$ ($M$-matrix multiplication in Problem 2.54).</div>
</div>
"""

svg_fig_2_23 = """
<div class="diagram-container">
  <svg class="diagram-svg" viewBox="0 0 500 220" width="500" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Subfigure (a): N individual wells -->
    <text x="30" y="45" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">(a)</text>
    <!-- Well 1 -->
    <rect x="70" y="25" width="40" height="50" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
    <text x="90" y="90" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#475569">a</text>
    <!-- Well 2 -->
    <rect x="130" y="25" width="40" height="50" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
    <text x="150" y="90" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#475569">a</text>
    <!-- Dots -->
    <circle cx="200" cy="50" r="2.5" fill="#64748b" />
    <circle cx="215" cy="50" r="2.5" fill="#64748b" />
    <circle cx="230" cy="50" r="2.5" fill="#64748b" />
    <!-- Well N -->
    <rect x="260" y="25" width="40" height="50" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
    <text x="280" y="90" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#475569">a</text>
    <text x="350" y="55" font-family="Cambria, serif" font-size="13" fill="#475569">(N isolated wells)</text>

    <!-- Subfigure (b): Single wide well of width Na -->
    <text x="30" y="155" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">(b)</text>
    <rect x="70" y="130" width="360" height="55" fill="#eff6ff" stroke="#2563eb" stroke-width="2" />
    <line x1="70" y1="200" x2="430" y2="200" stroke="#475569" stroke-width="1.5" />
    <line x1="70" y1="195" x2="70" y2="205" stroke="#475569" stroke-width="1.5" />
    <line x1="430" y1="195" x2="430" y2="205" stroke="#475569" stroke-width="1.5" />
    <text x="250" y="215" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#0f172a">Na</text>
    <text x="250" y="162" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#2563eb">Single combined well of width Na</text>
  </svg>
  <div class="diagram-caption"><strong>Figure 2.23:</strong> (a) $N$ electrons in individual wells of width $a$. (b) $N$ electrons in a single well of width $Na$ (Problem 2.58).</div>
</div>
"""

svg_fig_2_24 = """
<div class="diagram-container">
  <svg class="diagram-svg" viewBox="0 0 460 210" width="460" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Grid and axes -->
    <line x1="60" y1="160" x2="420" y2="160" stroke="#334155" stroke-width="2" />
    <line x1="60" y1="160" x2="60" y2="30" stroke="#334155" stroke-width="2" />
    <!-- Classical horizontal line (Dulong-Petit 3kB) -->
    <line x1="60" y1="50" x2="420" y2="50" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,5" />
    <text x="425" y="55" font-family="Cambria, serif" font-size="12" fill="#dc2626">3k_B (Classical)</text>
    <!-- Quantum Einstein curve: starts at 0 with 0 slope, rises sigmoidally toward asymptote -->
    <path d="M 60 160 C 130 160, 160 145, 220 95 C 270 65, 340 55, 420 52" fill="none" stroke="#2563eb" stroke-width="2.5" />
    <!-- Axis ticks and labels -->
    <text x="60" y="180" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#0f172a">0</text>
    <text x="132" y="180" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#475569">200</text>
    <text x="204" y="180" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#475569">400</text>
    <text x="276" y="180" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#475569">600</text>
    <text x="348" y="180" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#475569">800</text>
    <text x="420" y="180" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#475569">1000</text>
    <text x="240" y="202" font-family="Cambria, serif" font-size="14" text-anchor="middle" fill="#0f172a">Temperature T (K)</text>
    <!-- Y-axis labels -->
    <text x="50" y="164" font-family="Cambria, serif" font-size="13" text-anchor="end" fill="#0f172a">0</text>
    <text x="50" y="110" font-family="Cambria, serif" font-size="13" text-anchor="end" fill="#475569">1.0</text>
    <text x="50" y="55" font-family="Cambria, serif" font-size="13" text-anchor="end" fill="#475569">2.0</text>
    <text x="35" y="30" font-family="Cambria, serif" font-size="13" text-anchor="middle" fill="#0f172a">C</text>
  </svg>
  <div class="diagram-caption"><strong>Figure 2.24:</strong> Specific heat of diamond vs temperature $T$ (Problem 2.63). Shows quantum freeze-out $C \to 0$ as $T \to 0$.</div>
</div>
"""

print("SVG definitions loaded successfully.")
