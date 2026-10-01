# Module II Extra — Spatial Coherence and Slit Width Criterion. Ghatak 6e §14.4–14.6.

C('c.2.2.3', '2.2', 'condition', "Spatial Coherence and the Source Slit Width Criterion",
  "An extended source of width w washes out interference fringes unless w < λDs / (2d), ensuring the path difference between slit edges remains under λ/2.",
  r'''In a Young's double-slit arrangement, the two slits $S_1$ and $S_2$ (separated by distance $d$) must be illuminated by a spatially coherent wavefront. When an illuminated primary source slit $S$ of finite width $w$ is placed at distance $D_s$ from the double slit, each point along $w$ acts as an independent, mutually incoherent emitter.
<ul>
<li>A source point shifted by a transverse distance $s$ from the axis shifts the central fringe on the screen by an amount $\Delta x = \frac{D}{D_s} s$, where $D$ is the double-slit-to-screen distance.</li>
<li>The fringes formed by different points across the source add in intensity, not amplitude.</li>
<li>To prevent the bright fringes of one point from falling onto the dark fringes of another (which washes out visibility), the fringe shift produced across the full source width $w$ must be less than half a fringe width: $\Delta x_{\rm total} < \frac{\beta}{2} = \frac{\lambda D}{2d}$.</li>
</ul>
This yields the fundamental criterion for <b>spatial coherence</b>:
$$\boxed{w < \frac{\lambda D_s}{2d}} \quad\Longleftrightarrow\quad \boxed{\Delta\theta_s = \frac{w}{D_s} < \frac{\lambda}{2d}},$$
where $\Delta\theta_s$ is the angle subtended by the primary source slit at the double slit.''',
  r'''Imagine sliding the light bulb slightly sideways: the entire interference pattern on the screen shifts sideways too. If your source is wide, it is like thousands of bulbs lined up next to each other, each painting its own shifted pattern on the screen. If the shift between the extreme edges reaches half a fringe width, the bright stripes of one bulb fill in the dark valleys of another, and all contrast disappears into uniform glow. Keeping the source slit narrower than this critical width ensures all patterns stay aligned and fringes remain sharp.''',
  needs=['c.2.2.1', 'c.2.3.1'],
  traps=[r'Confusing temporal coherence (coherence length $\Delta l_c \approx c/\Delta\nu$) with spatial coherence (transverse source width $w < \lambda D_s / (2d)$).',
         r'Forgetting that independent points across an extended source add in intensity, so fringes wash out when the phase difference across the source exceeds $\pi$.'],
  cards=[(r'State the condition on source slit width $w$ for sustained interference fringes in Young\'s experiment.',
          r'$w < \frac{\lambda D_s}{2d}$, where $D_s$ is the source-to-slit distance and $d$ is the double-slit separation.'),
         (r'What is the angular criterion for spatial coherence of an extended source?',
          r'$\Delta\theta_s = \frac{w}{D_s} < \frac{\lambda}{2d}$.'),
         (r'Why does an excessively wide source destroy the interference pattern?',
          r'Different points across the source act incoherently; their shifted intensity patterns overlap and fill in the minima when the total shift exceeds half a fringe width.')],
  proof=dict(
      idea="Calculate the fringe displacement produced by an off-axis source point and limit the total displacement to half a fringe width.",
      why="Ensures that independent intensity patterns from opposite edges of the source slit do not mutually destroy fringe visibility.",
      rungs=[
        ("Consider an off-axis source point at transverse distance $s$ from the axis. Calculate the extra path difference between the two slits.",
         r'$$\Delta r = S S_2 - S S_1 \approx \frac{s d}{D_s}$$',
         "Geometry of source slit at distance $D_s$ from double slit."),
        ("Find the position $x_0$ of the central maximum on the observation screen at distance $D$.",
         r'$$\frac{x_0 d}{D} - \frac{s d}{D_s} = 0 \implies x_0 = \frac{D}{D_s} s$$',
         "Total path difference to the central maximum must be zero."),
        ("Express the fringe shift $\\Delta x$ between the extreme edges of a source slit of width $w$.",
         r'$$\Delta x = \frac{D}{D_s} w$$',
         "Each independent source point produces an identical fringe pattern shifted by $x_0$."),
        ("Require the total fringe shift to be strictly less than half the fringe width $\\beta/2 = \\lambda D / (2d)$.",
         r'$$\frac{D}{D_s} w < \frac{\lambda D}{2d} \implies w < \frac{\lambda D_s}{2d} \quad\text{or}\quad \Delta\theta_s < \frac{\lambda}{2d}$$',
         "Visibility condition for sustained interference fringes.")],
      ends="Spatial coherence and source slit width criterion."))

W('q.op.2.34', '2.2', 5,
  "Maximum Source Slit Width for Sustained Interference Fringes",
  "Ghatak 6e §14.4–14.6, Spatial Coherence",
  r'''In a Young's double-slit experiment, the two slits are separated by $d = 0.5\text{ mm}$ and the primary source slit is placed at a distance $D_s = 20\text{ cm}$ in front of the double slit. Light of wavelength $\lambda = 589\text{ nm}$ illuminates the source slit.
<p>(a) Derive the condition relating the source slit width $w$, distance $D_s$, separation $d$, and wavelength $\lambda$ for sustained, high-contrast interference fringes to be visible on the screen.</p>
<p>(b) Calculate the maximum permissible width $w_{\rm max}$ of the source slit for this setup.</p>''',
  ['c.2.2.3', 'c.2.3.1'],
  r'''Relate the path difference from an off-axis source element to the shift of the fringe pattern on the screen, impose the condition that the shift between extreme edges must not exceed $\beta/2 = \lambda D/(2d)$, and substitute the given values into $w_{\rm max} = \lambda D_s / (2d)$.''',
  r'''<p><b>(a) Derivation of the source width criterion:</b></p>
<p>Let a narrow source slit $S$ be located at distance $D_s$ from the double-slit plane containing $S_1$ and $S_2$, separated by $d$. If the source slit is broadened to a width $w$, each infinitesimal element along the width acts as an independent incoherent light source.</p>
<p>Consider a source point displaced by a distance $s$ above the central axis. The path difference introduced between the rays reaching $S_1$ and $S_2$ from this off-axis point is</p>
$$\Delta r = S S_2 - S S_1 \approx \frac{s\, d}{D_s}.$$
<p>At a point $x$ on the screen at distance $D$, the total path difference is</p>
$$\Delta = (S_2 P - S_1 P) - (S S_1 - S S_2) \approx \frac{x\, d}{D} - \frac{s\, d}{D_s}.$$
<p>The central bright fringe ($\Delta = 0$) for this particular source point is therefore shifted from the optical axis to</p>
$$x_0 = \frac{D}{D_s} s.$$
<p>Because different points across the source emit independently, their individual fringe patterns add in <i>intensity</i>. Across the full source width $w$ (from $s = -w/2$ to $+w/2$), the total displacement between the fringe patterns formed by the extreme edges is</p>
$$\Delta x = \frac{D}{D_s} w.$$
<p>If this shift equals half of a fringe width ($\beta / 2$), the maxima of the pattern from one edge coincide with the minima from the other edge, completely washing out the fringe contrast. For sustained, clearly visible fringes, we must have</p>
$$\Delta x < \frac{\beta}{2} = \frac{\lambda D}{2d} \implies \frac{D}{D_s} w < \frac{\lambda D}{2d}.$$
<p>Cancelling $D$ gives the spatial coherence condition:</p>
$$w < \frac{\lambda D_s}{2d} \quad\text{or}\quad \Delta\theta_s = \frac{w}{D_s} < \frac{\lambda}{2d}.$$

<p><b>(b) Numerical calculation:</b></p>
<p>Given parameters:</p>
<ul>
<li>Wavelength: $\lambda = 589\text{ nm} = 5.89\times 10^{-7}\text{ m}$</li>
<li>Source distance: $D_s = 20\text{ cm} = 0.20\text{ m}$</li>
<li>Slit separation: $d = 0.5\text{ mm} = 0.5\times 10^{-3}\text{ m}$</li>
</ul>
<p>The maximum permissible source slit width is</p>
$$w_{\rm max} = \frac{\lambda D_s}{2d} = \frac{(5.89\times 10^{-7}\text{ m})(0.20\text{ m})}{2(0.5\times 10^{-3}\text{ m})} = \frac{1.178\times 10^{-7}}{1.0\times 10^{-3}}\text{ m} = 1.178\times 10^{-4}\text{ m} \approx 0.118\text{ mm}.$$
<p>Thus, the source slit must be narrower than approximately $0.12\text{ mm}$ for distinct interference fringes to be observed.</p>''',
  r'''Confusing the source slit width $w$ with the double slit separation $d$, or forgetting the factor of 2 in the denominator (which comes from the condition that shift must not exceed half a fringe width $\beta/2$).''')
