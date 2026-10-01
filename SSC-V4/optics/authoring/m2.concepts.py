# Module II — Interference.  Ghatak 6e §13.5, 14.1, 14.3–14.12, 15.1–15.4, 15.8–15.11.

# ── 2.1  Superposition of two sinusoidal waves ─────────────────────────────────
C('c.2.1.1', '2.1', 'theorem', "Superposition of Two Sinusoidal Waves",
  "Two same-frequency oscillations add to one with a² = a₁² + a₂² + 2a₁a₂cos δ, so I = I₁ + I₂ + 2√(I₁I₂) cos δ.",
  r'''Two disturbances of the same frequency and direction, $x_1=a_1\cos(\omega t-\phi_1)$ and $x_2=a_2\cos(\omega t-\phi_2)$, superpose to
$$x=a\cos(\omega t-\phi),\qquad a^{2}=a_1^{2}+a_2^{2}+2a_1a_2\cos\delta,\quad \delta=\phi_1-\phi_2 .$$
Since intensity is proportional to $a^2$,
$$\boxed{I=I_1+I_2+2\sqrt{I_1I_2}\,\cos\delta}$$
The last term is the <b>interference term</b>.''',
  r'''Add the two oscillations as arrows (phasors) of length $a_1,a_2$ that rotate together: the resultant is fixed in shape and simply rotates too, with length given by the cosine rule. Energy is not created or destroyed — $I$ redistributes between $(\sqrt{I_1}-\sqrt{I_2})^2$ and $(\sqrt{I_1}+\sqrt{I_2})^2$, while the average over $\delta$ is $I_1+I_2$.''',
  needs=[],
  traps=[r'Adding intensities instead of amplitudes: $I\neq I_1+I_2$ unless the interference term averages to zero (incoherent sources).',
         r'Using $\delta$ for the path difference: $\delta=(2\pi/\lambda)\Delta$ is a <i>phase</i>.'],
  cards=[('State the resultant amplitude and intensity of two superposed same-frequency waves.',
          r'$a^2=a_1^2+a_2^2+2a_1a_2\cos\delta$ and $I=I_1+I_2+2\sqrt{I_1I_2}\cos\delta$.'),
         ('Two waves of equal intensity $I_0$ meet with phase difference $\\delta$. Find $I$.',
          r'$I=2I_0(1+\cos\delta)=4I_0\cos^2(\delta/2)$.'),
         ('Why does interference not violate energy conservation?',
          r'The average of $I$ over $\delta$ is $I_1+I_2$: energy is only redistributed from dark to bright places.')],
  proof=dict(
      idea="Expand both cosines, collect the $\\cos\\omega t$ and $\\sin\\omega t$ parts, then square and add.",
      why="A sum of same-frequency sinusoids is always a sinusoid; the two coefficients give amplitude and phase.",
      rungs=[
        ("Write $x_1+x_2$ and expand $\\cos(\\omega t-\\phi_i)$.",
         r'$$x=(a_1\cos\phi_1+a_2\cos\phi_2)\cos\omega t+(a_1\sin\phi_1+a_2\sin\phi_2)\sin\omega t$$',
         "The $\\cos\\omega t$ and $\\sin\\omega t$ coefficients define one new sinusoid."),
        ("Define the resultant $a\\cos(\\omega t-\\phi)=a\\cos\\phi\\cos\\omega t+a\\sin\\phi\\sin\\omega t$ and compare coefficients.",
         r'$$a\cos\phi=a_1\cos\phi_1+a_2\cos\phi_2,\qquad a\sin\phi=a_1\sin\phi_1+a_2\sin\phi_2$$',
         "Two equations for $a$ and $\\phi$."),
        ("Square and add.",
         r'$$a^{2}=a_1^{2}+a_2^{2}+2a_1a_2\cos(\phi_1-\phi_2)$$',
         "$\\cos^2+\\sin^2=1$ and the cross terms combine to $\\cos(\\phi_1-\\phi_2)$."),
        ("Intensity is proportional to $a^2$: $I\\propto a^2$, $I_i\\propto a_i^2$.",
         r'$$I=I_1+I_2+2\sqrt{I_1I_2}\cos\delta$$',
         "Maximum $(\\sqrt{I_1}+\\sqrt{I_2})^2$ at $\\delta=2m\\pi$; minimum $(\\sqrt{I_1}-\\sqrt{I_2})^2$ at $\\delta=(2m+1)\\pi$.")],
      ends="The two-wave intensity formula."))

C('c.2.1.2', '2.1', 'definition', "Constructive, Destructive Interference and Visibility",
  "Bright when the path difference is mλ, dark when it is (m+½)λ; visibility V = (I_max − I_min)/(I_max + I_min).",
  r'''With $\delta=\dfrac{2\pi}{\lambda}\Delta$ (path difference $\Delta$):
$$\text{constructive: }\Delta=m\lambda\ (\delta=2m\pi),\qquad \text{destructive: }\Delta=(m+\tfrac12)\lambda\ (\delta=(2m+1)\pi).$$
The <b>visibility</b> (contrast) of the fringes is
$$V=\frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}}=\frac{2\sqrt{I_1I_2}}{I_1+I_2},$$
so $V=1$ for equal intensities and $V\to0$ when one beam dominates.''',
  r'''Visibility measures how deep the dark fringes go. Equal beams can cancel perfectly ($I_{\min}=0$, $V=1$); a strong beam plus a weak one only ripples ($V$ small). Partial coherence also lowers $V$ by shrinking the effective $\cos\delta$ term.''',
  needs=['c.2.1.1'],
  traps=[r'Quoting the conditions in terms of phase without the $2\pi/\lambda$: $\Delta=m\lambda$ corresponds to $\delta=2\pi m$.',
         r'Thinking $V$ is the ratio $I_{\max}/I_{\min}$.'],
  cards=[('Write the conditions for constructive and destructive interference in terms of path difference.',
          r'Constructive $\Delta=m\lambda$; destructive $\Delta=(m+\tfrac12)\lambda$, $m=0,\pm1,\ldots$.'),
         ('Define fringe visibility.',
          r'$V=(I_{\max}-I_{\min})/(I_{\max}+I_{\min})=2\sqrt{I_1I_2}/(I_1+I_2)$.'),
         (r'Find $V$ if $I_{\max}=53$ and $I_{\min}=2$ (arbitrary units).',
          r'$V=(53-2)/(53+2)=51/55\approx0.93$.')])

C('c.2.1.3', '2.1', 'theorem', "Superposition of N Waves: the Phasor Method",
  "N equal phasors with successive phase step δ add to a = a₀ sin(Nδ/2)/sin(δ/2) — the seed of the grating pattern.",
  r'''$N$ oscillations of equal amplitude $a_0$ whose phases increase by a constant step $\delta$ have resultant amplitude
$$\boxed{a=a_0\,\frac{\sin(N\delta/2)}{\sin(\delta/2)}},\qquad I=I_0\,\frac{\sin^2(N\delta/2)}{\sin^2(\delta/2)}.$$
Principal maxima occur at $\delta=2m\pi$ with $a=Na_0$; there are $N-1$ zeros between adjacent principal maxima.''',
  r'''Chain the $N$ arrows head to tail: they trace part of a regular polygon (a circle arc if the steps are small). The resultant is a chord of that circle, $2\rho\sin(N\delta/2)$, and $a_0=2\rho\sin(\delta/2)$. Dividing gives the formula, and the chord vanishes each time the arrows close the polygon.''',
  needs=['c.2.1.1'],
  traps=[r'Forgetting the zeros: $I=0$ when $N\delta/2=p\pi$ except when $\delta/2$ is also a multiple of $\pi$ (there the ratio tends to $N$, not $0/0$).'],
  cards=[('Give the amplitude of $N$ equal waves with phase step $\\delta$.',
          r'$a=a_0\dfrac{\sin(N\delta/2)}{\sin(\delta/2)}$.'),
         ('What is the value of the intensity at a principal maximum?',
          r'$I=N^2I_0$ (amplitude $Na_0$), reached at $\delta=2m\pi$.')],
  proof=dict(
      idea="Sum the geometric series of complex exponentials.",
      why="Each wave is $a_0e^{j(\\omega t-k\\delta)}$; their sum is geometric with ratio $e^{-j\\delta}$.",
      rungs=[
        ("Represent the $k$-th oscillation as the real part of $a_0e^{j(\\omega t-k\\delta)}$ and add.",
         r'$$z=a_0e^{j\omega t}\sum_{k=0}^{N-1}e^{-jk\delta}$$',
         "A geometric series."),
        ("Sum it.",
         r'$$\sum_{k=0}^{N-1}e^{-jk\delta}=\frac{1-e^{-jN\delta}}{1-e^{-j\delta}}=e^{-j(N-1)\delta/2}\,\frac{\sin(N\delta/2)}{\sin(\delta/2)}$$',
         "Factor $e^{-jN\\delta/2}$ from the numerator and $e^{-j\\delta/2}$ from the denominator."),
        ("Read off the amplitude, the modulus.",
         r'$$a=a_0\frac{\sin(N\delta/2)}{\sin(\delta/2)},\qquad I\propto a^2$$',
         "The leftover phase $-(N-1)\\delta/2$ is just the phase of the centre of the array.")],
      ends="The $N$-wave amplitude $a_0\\sin(N\\delta/2)/\\sin(\\delta/2)$."))

# ── 2.2  Division of wavefront: coherence ──────────────────────────────────────
C('c.2.2.1', '2.2', 'definition', "Coherence and the Two Ways of Splitting a Beam",
  "Stable fringes need a constant phase difference; two independent sources cannot give it, so one beam is split in two.",
  r'''Two beams are <b>coherent</b> if the phase difference between them stays constant in time long enough to be observed. A conventional source emits from about $10^{8}$ atoms, each for $\sim10^{-8}$ s with random phase, so two separate sources are <b>incoherent</b>: $\cos\delta$ averages to zero and only $I_1+I_2$ remains.
Coherent beams are made by dividing <i>one</i> beam:
<ul><li><b>division of wavefront</b> — different points of one wavefront act as sources (Young, Fresnel mirrors, biprism, Lloyd's mirror);</li>
<li><b>division of amplitude</b> — partial reflection and transmission splits the wave itself (thin films, Newton's rings, Michelson).</li></ul>''',
  r'''If both beams come from the same atomic emission event, whatever random phase that event has, both copies share it, so the <i>difference</i> stays fixed. That is the entire trick behind every interferometer.''',
  needs=['c.2.1.1'],
  traps=[r'Saying two lamps "interfere but too fast to see". They do not interfere at all in the time-average sense: the interference term averages to zero.',
         r'Assuming a laser makes independent lasers coherent. Coherence is a property of one source, not something two lasers share.'],
  cards=[('Why can two independent sources not produce a stable interference pattern?',
          r'The phase difference between them changes randomly every $\sim10^{-8}$ s, so $\cos\delta$ averages to zero and only $I_1+I_2$ is seen.'),
         ('Name the two ways of obtaining coherent beams and give one example of each.',
          r'Division of wavefront (Young\'s slits) and division of amplitude (thin film / Michelson).')])

C('c.2.2.2', '2.2', 'definition', "Temporal and Spatial Coherence; Coherence Length",
  "Coherence time τ_c ≈ 1/Δν, length L_c = cτ_c = λ²/Δλ; spatial coherence limits the source size.",
  r'''<b>Temporal coherence.</b> A wave train stays sinusoidal for a time $\tau_c$, the <b>coherence time</b>, and for a length
$$L_c=c\,\tau_c ,\qquad \tau_c\simeq\frac1{\Delta\nu},\qquad L_c\simeq\frac{\lambda^{2}}{\Delta\lambda}.$$
Fringes vanish when the path difference exceeds $L_c$.
<b>Spatial coherence.</b> Points across a wavefront are coherent if they lie within the <b>coherence area</b>; for a source of angular width $\theta$ this width is $\sim\lambda/\theta$. A pinhole or slit enlarges it.''',
  r'''A wave that is a clean sinusoid for only a short train has a wide band of frequencies: monochromatic means long-lived. A laser ($\Delta\nu\sim10^{6}$ Hz) has coherence length of hundreds of metres; a sodium lamp only millimetres. Spatial coherence is the same idea sideways: an extended source is many independent point sources, each throwing its own fringe pattern.''',
  needs=['c.2.2.1'],
  traps=[r'Mixing up the roles: temporal coherence limits the <i>path difference</i> you can use; spatial coherence limits the <i>size of the source</i> or the <i>slit separation</i>.'],
  cards=[('Give the relations between coherence time, coherence length and bandwidth.',
          r'$L_c=c\tau_c$, $\tau_c\simeq1/\Delta\nu$, $L_c\simeq\lambda^2/\Delta\lambda$.'),
         ('A source of $\\lambda=600$ nm has coherence length $10$ cm. Find $\\Delta\\lambda$.',
          r'$\Delta\lambda=\lambda^2/L_c=(600\times10^{-9})^2/0.1=3.6\times10^{-12}$ m $=0.0036$ nm.'),
         ('What does spatial coherence limit in Young\'s experiment?',
          r'The size of the source (or the slit separation): a wider source washes out the fringes.')])

# ── 2.3  Young's experiment ────────────────────────────────────────────────────
C('c.2.3.1', '2.3', 'theorem', "Young's Double-Slit: Fringe Positions and Width",
  "For slits d apart and a screen D away, fringes are β = λD/d wide with maxima at x = mλD/d.",
  r'''Two narrow coherent slits $S_1,S_2$ a distance $d$ apart illuminate a screen at distance $D\gg d$. At a point $P$ a height $x$ above the axis, the path difference is $\Delta\simeq dx/D$. Hence
$$x_m^{\rm bright}=\frac{m\lambda D}{d},\qquad x_m^{\rm dark}=\frac{(m+\tfrac12)\lambda D}{d},\qquad \boxed{\beta=\frac{\lambda D}{d}}$$
The fringes are equally spaced straight lines parallel to the slits.''',
  r'''Move $x$ up the screen and $S_2P$ pulls ahead of $S_1P$ by $d\sin\theta\approx d\,x/D$; every extra $\lambda$ of lead makes another bright fringe. Narrow slits (small $d$) or a distant screen (large $D$) spread the pattern out and make it easy to see.''',
  needs=['c.2.1.2', 'c.2.2.1'],
  traps=[r'Using the formula when $D$ is not much larger than $d$, or when $x$ is comparable to $D$ (the small-angle approximation fails).',
         r'Reading $\beta$ as the distance between a bright and dark fringe. It is between two <i>successive bright</i> (or two dark) fringes.'],
  cards=[("State Young's fringe width and the positions of the bright fringes.",
          r'$\beta=\lambda D/d$, with bright fringes at $x=m\lambda D/d$.'),
         ("Young's slits $d=1$ mm, $D=1$ m, $\\lambda=600$ nm. Find $\\beta$.",
          r'$\beta=600\times10^{-9}\times1/10^{-3}=6\times10^{-4}$ m $=0.6$ mm.'),
         ('What happens to the fringe width if the whole apparatus is immersed in water?',
          r'The wavelength becomes $\lambda/n$, so $\beta\to\beta/n$: the fringes shrink.')],
  proof=dict(
      idea="Compute the path difference from $S_1$ and $S_2$ to a screen point using the far-field approximation.",
      why="The intensity depends only on the path difference, so the fringe geometry follows from $\\Delta(x)$.",
      rungs=[
        ("Slits at $y=\\pm d/2$ on the plane $z=0$; screen at $z=D$; $P=(0,x)$.",
         r'$$S_1P^{2}=D^{2}+\big(x-\tfrac d2\big)^{2},\qquad S_2P^{2}=D^{2}+\big(x+\tfrac d2\big)^{2}$$',
         "$S_2$ is the lower slit."),
        ("Subtract and factor.",
         r'$$S_2P^{2}-S_1P^{2}=2xd\;\Rightarrow\;\Delta=S_2P-S_1P=\frac{2xd}{S_2P+S_1P}$$',
         "Exact expression for the path difference."),
        ("For $D\\gg x,d$ the denominator is $\\simeq2D$.",
         r'$$\Delta\simeq\frac{xd}{D}$$',
         "Small-angle (paraxial) approximation."),
        ("Impose $\\Delta=m\\lambda$ and take the spacing between neighbouring $m$.",
         r'$$x_m=\frac{m\lambda D}{d},\qquad\beta=x_{m+1}-x_m=\frac{\lambda D}{d}$$',
         "Uniform spacing: a series of equally spaced bright bands.")],
      ends=r"The fringe width $\beta=\lambda D/d$."))

C('c.2.3.2', '2.3', 'theorem', "Intensity Distribution in Young's Pattern",
  "With equal slits, I = 4I₀ cos²(πdx/λD): maxima 4I₀, minima 0, average 2I₀.",
  r'''For slits of equal intensity $I_0$ each, the intensity at $x$ is
$$\boxed{I(x)=4I_0\cos^{2}\!\Big(\frac{\pi d\,x}{\lambda D}\Big)}$$
with maxima $4I_0$, exact zeros, and an average of $2I_0=I_0+I_0$: energy is only redistributed.''',
  r'''Two equal-amplitude waves whose phase difference is $\delta=2\pi\Delta/\lambda=2\pi dx/(\lambda D)$ give $I=2I_0(1+\cos\delta)=4I_0\cos^2(\delta/2)$. Unequal slits keep the same shape but lift the minima off zero.''',
  needs=['c.2.3.1', 'c.2.1.1'],
  traps=[r'Reading the average as $4I_0$ instead of $2I_0$.',
         r'Ignoring that real slits have finite width, which multiplies this pattern by the single-slit envelope (see Module III).'],
  cards=[("Give the intensity in Young's pattern for equal slits.",
          r'$I=4I_0\cos^2(\pi dx/\lambda D)$.'),
         ('What is the average intensity over many fringes?',
          r'$2I_0$.')],
  proof=dict(
      idea="Insert the phase difference into the two-wave intensity law.",
      why="Everything reduces to $\\delta(x)=2\\pi\\Delta/\\lambda$.",
      rungs=[
        ("Phase difference at $x$.",
         r'$$\delta=\frac{2\pi}{\lambda}\Delta=\frac{2\pi d\,x}{\lambda D}$$',
         "From $\\Delta=dx/D$."),
        ("Equal intensities $I_1=I_2=I_0$ in $I=I_1+I_2+2\\sqrt{I_1I_2}\\cos\\delta$.",
         r'$$I=2I_0(1+\cos\delta)=4I_0\cos^{2}\frac\delta2$$',
         "Half-angle identity."),
        ("Substitute $\\delta/2=\\pi dx/(\\lambda D)$.",
         r'$$I(x)=4I_0\cos^{2}\Big(\frac{\pi dx}{\lambda D}\Big)$$',
         "Maxima at $x=m\\lambda D/d$, exact zeros halfway between.")],
      ends="The $\\cos^2$ intensity distribution."))

C('c.2.3.3', '2.3', 'theorem', "Hyperbolic Nature of the Fringes",
  "The locus S₂P − S₁P = constant is a hyperbola, so the fringes on a plane screen are hyperbolas that look straight far from the axis.",
  r'''A point $P$ for which $S_2P-S_1P=\Delta$ is fixed lies on a hyperbola with foci $S_1,S_2$. Each bright fringe ($\Delta=m\lambda$) is where such a hyperboloid of revolution cuts the screen. Far from the slits, with $D\gg d$, the section is so nearly straight that the fringes appear as parallel lines; a screen placed <i>between</i> the slits parallel to the axis shows curved hyperbolic fringes.''',
  r'''A hyperbola is exactly the set of points with a constant difference of distances from two foci. Every "path difference = $m\lambda$" surface in space is a hyperboloid; the screen merely samples it.''',
  needs=['c.2.3.1'],
  traps=[r'Calling the fringes "straight lines" without qualification: they are hyperbolas that are approximately straight only when the screen is far away.'],
  cards=[('What is the shape of the loci of constant path difference from two slits?',
          r'Hyperboloids of revolution about the line joining the slits (hyperbolas in a plane section); they look straight only far from the slits.')])

C('c.2.3.4', '2.3', 'theorem', "Displacement of Fringes by a Transparent Plate",
  "A plate of index n and thickness t over one slit shifts the whole pattern by (n−1)tD/d toward the plate.",
  r'''A thin transparent plate of index $n$ and thickness $t$ placed over one slit adds an optical path $(n-1)t$ to that beam, so the fringe pattern shifts by
$$\boxed{\Delta y=\frac{(n-1)\,t\,D}{d}}\quad\text{toward the covered slit.}$$
The fringe width $\beta=\lambda D/d$ is unchanged, so $\Delta y/\beta=(n-1)t/\lambda$ fringes cross the reference point.''',
  r'''The plate delays one beam, so the point where the two beams are equal in optical path moves to where the other beam's geometric path is longer by the same amount — toward the covered side. This is the standard way to measure the thickness of a film or the index of a plate.''',
  needs=['c.2.3.1'],
  traps=[r'Using $nt$ instead of $(n-1)t$: the plate <i>replaces</i> a thickness $t$ of air, so only the excess counts.'],
  cards=[(r'Give the fringe shift produced by a plate of index $n$ and thickness $t$ over one slit.',
          r'$\Delta y=(n-1)tD/d$ toward the covered slit, i.e. $(n-1)t/\lambda$ fringes.'),
         (r'A mica sheet ($n=1.58$) shifts the central fringe by 7 fringes for $\lambda=590$ nm. Find its thickness.',
          r'$t=7\lambda/(n-1)=7\times590/0.58$ nm $\approx7.1\ \mu\text{m}$.')],
  proof=dict(
      idea="Count the extra optical path the plate inserts and translate it to a screen displacement.",
      why="The new central bright fringe is where the total optical paths are equal again.",
      rungs=[
        ("The plate's optical thickness replaces $t$ of air.",
         r'$$\text{extra optical path}=nt-t=(n-1)t$$',
         "Air has index 1."),
        ("The central bright fringe is now where the uncovered path is longer by exactly that amount.",
         r'$$\frac{d\,\Delta y}{D}=(n-1)t$$',
         "Geometric path difference $dy/D$ compensates the plate."),
        ("Solve.",
         r'$$\Delta y=\frac{(n-1)tD}{d}$$',
         r'In units of fringe width, $\Delta y/\beta=(n-1)t/\lambda$.')],
      ends=r"$\Delta y=(n-1)tD/d$."))

# ── 2.4  Fresnel's two mirrors and biprism ─────────────────────────────────────
C('c.2.4.1', '2.4', 'theorem', "Fresnel's Two-Mirror Arrangement",
  "Two mirrors inclined at a small angle α make two virtual sources 2aα apart, so β = λ(a+b)/(2aα).",
  r'''Two plane mirrors meeting at a small angle $\alpha$ form two virtual images $S_1,S_2$ of a slit $S$ at distance $a$ from the line of intersection $O$. If the screen is at distance $b$ beyond $O$,
$$d=S_1S_2=2a\alpha,\qquad D=a+b,\qquad \boxed{\beta=\frac{\lambda(a+b)}{2a\alpha}}$$''',
  r'''Each mirror reflects one half of the light from $S$; each half looks as if it came from the mirror image of $S$. Both images lie on a circle centred on $O$ (each mirror preserves distance to $O$), and the angle between them is $2\alpha$ — a virtual double slit built from one real slit.''',
  needs=['c.2.3.1', 'c.1.1.2'],
  traps=[r'Using $D=b$: the effective distance to the virtual sources is $a+b$, not $b$.',
         r'The fringes exist only in the region where the two reflected beams overlap.'],
  cards=[("Give the source separation and fringe width in Fresnel's two-mirror experiment.",
          r'$d=2a\alpha$ and $\beta=\lambda(a+b)/(2a\alpha)$.'),
         ('Why are the two virtual sources coherent?',
          r'Both are images of the same slit, so they share whatever phase the slit light has.')],
  proof=dict(
      idea="Locate the two images by reflection; they lie on a circle of radius $a$ about $O$.",
      why="Each mirror preserves the distance from $O$ to the source, so $OS_1=OS_2=OS=a$.",
      rungs=[
        ("Mirror 1 makes an image $S_1$ with $OS_1=a$ and angle $SOS_1=2\\theta_1$; mirror 2 makes $S_2$ with $SOS_2=2\\theta_2$ on the other side.",
         r'$$\angle S_1OS_2=2(\theta_1+\theta_2)=2\alpha$$',
         "The angle between the mirrors is $\\alpha=\\theta_1+\\theta_2$."),
        ("For small $\\alpha$ the chord is",
         r'$$d=S_1S_2\simeq a\cdot2\alpha=2a\alpha$$',
         "Arc $\\approx$ chord."),
        ("The screen is at $D=a+b$ from the virtual sources; use $\\beta=\\lambda D/d$.",
         r'$$\beta=\frac{\lambda(a+b)}{2a\alpha}$$',
         "Young's formula applied to the virtual sources.")],
      ends=r"$\beta=\lambda(a+b)/(2a\alpha)$."))

C('c.2.4.2', '2.4', 'theorem', "Fresnel's Biprism",
  "A biprism of angle α and index n makes two virtual sources 2a(n−1)α apart, so β = λ(a+b)/[2a(n−1)α].",
  r'''A biprism is two thin prisms of small refracting angle $\alpha$ base to base. A slit at distance $a$ in front of it is imaged as two virtual sources, each seen after an angular deviation $\delta_{\rm d}=(n-1)\alpha$:
$$d=2a(n-1)\alpha,\qquad D=a+b,\qquad \boxed{\beta=\frac{\lambda(a+b)}{2a(n-1)\alpha}}$$
Measured $\beta$, $a$, $b$ and $d$ give $\lambda$; inserting a plate over one half gives its thickness (see the fringe-shift result).''',
  r'''A thin prism deviates every ray by the same angle $(n-1)\alpha$ for small angles, so the two halves look as if they came from two points displaced $a(n-1)\alpha$ each side of the slit. Nothing else is needed: it is Young's experiment with virtual slits.''',
  needs=['c.2.3.1', 'c.2.4.1'],
  traps=[r'Using the full prism-deviation formula. It reduces to $(n-1)\alpha$ only for thin prisms and near-normal incidence.'],
  cards=[("Give the source separation and fringe width for Fresnel's biprism.",
          r'$d=2a(n-1)\alpha$, $\beta=\lambda(a+b)/[2a(n-1)\alpha]$.'),
         ('How is $d$ measured in practice?',
          r'By placing a convex lens between biprism and screen at two positions (conjugate foci) and measuring the two image separations $d_1,d_2$: $d=\sqrt{d_1d_2}$.')],
  proof=dict(
      idea="Use the small-angle deviation of a thin prism to place the virtual sources.",
      why=r"Deviation $(n-1)\alpha$ shifts each virtual source sideways by $a(n-1)\alpha$.",
      rungs=[
        ("A ray through a thin prism of angle $\\alpha$ is deviated by",
         r'$$\delta_{\rm d}=(n-1)\alpha$$',
         "Small-angle thin-prism result."),
        ("Each half of the biprism makes a virtual source displaced sideways from $S$ by",
         r'$$a\,\delta_{\rm d}=a(n-1)\alpha$$',
         "Geometry: the ray appears to come from a point that far to the side."),
        ("Separation of the two virtual sources.",
         r'$$d=2a(n-1)\alpha$$',
         "One on each side of $S$."),
        ("Screen at $D=a+b$; use $\\beta=\\lambda D/d$.",
         r'$$\beta=\frac{\lambda(a+b)}{2a(n-1)\alpha}$$',
         "Young's formula.")],
      ends=r"The biprism fringe width."))

# ── 2.5  White light, Lloyd's mirror, phase change on reflection ───────────────
C('c.2.5.1', '2.5', 'theorem', "Interference with White Light",
  "In white light the central fringe is white; a few coloured fringes follow before the colours overlap into uniform white.",
  r'''Each wavelength makes its own pattern with $\beta_\lambda=\lambda D/d$. At the centre ($\Delta=0$) all colours are bright, giving a <b>white central fringe</b>. On either side the violet ($\beta$ smallest) and red ($\beta$ largest) fringes separate, so the first bright fringe is violet-inside, red-outside; after 6–8 fringes the colours overlap and average to white.''',
  r'''The zero-order fringe is the only place where every colour has zero path difference, so it is the reference that identifies the "central" fringe — used to locate it exactly, for instance in the fringe-shift experiment. Higher orders blur because $m\lambda_{\rm red}\approx(m+1)\lambda_{\rm violet}$ for $m\sim2$–4.''',
  needs=['c.2.3.1'],
  traps=[r'Expecting many coloured fringes. Only a handful are visible because of the overlap.'],
  cards=[('Why is the central fringe white in white-light interference and what colour is the edge of the first bright fringe?',
          r'All wavelengths have zero path difference there, so all are bright. Outward, violet fringes lie closer to the centre than red, so the inner edge is violet, outer edge red.')])

C('c.2.5.2', '2.5', 'theorem', "Lloyd's Mirror",
  "A slit and its reflection in a grazing mirror interfere; the fringes are like Young's with d = 2h, but the centre is dark.",
  r'''A slit $S$ at height $h$ above a plane mirror and its virtual image $S^{\prime}$ (depth $h$ below) act as a pair of coherent sources $d=2h$ apart; a screen at distance $D$ gives
$$\beta=\frac{\lambda D}{2h}.$$
At the mirror edge (zero geometric path difference) the fringe is <b>dark</b>: the reflected beam undergoes a phase change of $\pi$.''',
  r'''This is the cleanest evidence that reflection from a denser medium flips the wave. If the reflected beam had no phase change, the zero-path point would be bright as in Young's experiment; it is dark instead, so a hidden $\lambda/2$ separates the two beams.''',
  needs=['c.2.3.1', 'c.1.1.2'],
  traps=[r'Assuming the pattern is the same as Young\'s. The <i>positions</i> are complementary: bright where Young\'s would be dark.'],
  cards=[("What fringe is seen at the edge of Lloyd's mirror and what does it show?",
          r'A dark fringe at zero path difference: a phase change of $\pi$ on reflection from the denser medium.'),
         ("Write the fringe width for Lloyd's mirror.",
          r'$\beta=\lambda D/(2h)$ for slit height $h$ and screen distance $D$.')])

C('c.2.5.3', '2.5', 'theorem', "Stokes' Relations and the Phase Change on Reflection",
  "By reversibility, r′ = −r and tt′ = 1 − r²: the two reflections at an interface differ by a phase π.",
  r'''Let a wave of amplitude $1$ meet an interface. Reflection and transmission from the first medium into the second have amplitude coefficients $r$ and $t$; from the second into the first, $r^{\prime}$ and $t^{\prime}$. <b>Stokes' relations:</b>
$$\boxed{r^{\prime}=-r,\qquad tt^{\prime}=1-r^{2}}$$
So if the reflection from one side has no phase change, that from the other side has phase change $\pi$. Reflection at the interface from the <b>rarer to the denser</b> medium introduces $\pi$.''',
  r'''Run the film backwards in time and the rays retrace themselves. Requiring that the reversed picture give back exactly the original incident wave forces $r^{\prime}=-r$: the two sides cannot both flip, and they cannot both stay. Experiment (Lloyd's mirror, Newton's rings) shows it is the rare→dense reflection that flips.''',
  needs=['c.2.5.2'],
  traps=[r'Applying the phase change to both reflections in a film. Only the reflection at the boundary from the rarer into the denser medium flips.'],
  cards=[("State Stokes' relations.",
          r'$r^{\prime}=-r$ and $tt^{\prime}=1-r^2$.'),
         ('At which interface is there a $\\pi$ phase change on reflection?',
          r'When light goes from the rarer to the denser medium (higher index) and reflects at that boundary.')],
  proof=dict(
      idea="Apply the principle of optical reversibility to a wave that is split and recombined.",
      why="Reversing every ray of a lossless system gives another valid solution.",
      rungs=[
        ("A unit-amplitude wave in medium 1 splits into a reflected ray $r$ and a transmitted ray $t$.",
         r'$$\text{incident }1\;\to\;r\ (\text{back in 1}),\quad t\ (\text{into 2})$$',
         "Two output rays."),
        ("Reverse both. The reversed reflected ray $r$ splits again into $r\\cdot r$ (back) and $r\\cdot t$ (transmitted); the reversed transmitted ray $t$ splits into $t\\,t^{\\prime}$ (into 1) and $t\\,r^{\\prime}$ (reflected inside 2).",
         r'$$\text{outputs in medium 1: }r^{2}+tt^{\prime};\quad\text{in medium 2: }rt+tr^{\prime}$$',
         "Both bookkeeping lines."),
        ("Reversibility says the outcome must be the original single incident wave, so the medium-2 output cancels and the medium-1 output equals 1.",
         r'$$r^{2}+tt^{\prime}=1,\qquad rt+tr^{\prime}=0$$',
         "Two conditions."),
        ("Solve for $r^{\\prime}$ and $tt^{\\prime}$.",
         r'$$r^{\prime}=-r,\qquad tt^{\prime}=1-r^{2}$$',
         "Stokes' relations.")],
      ends="Stokes' relations."))

# ── 2.6  Division of amplitude: thin parallel films ────────────────────────────
C('c.2.6.1', '2.6', 'theorem', "Thin Parallel Film: the Cosine Law",
  "A film of thickness d and index n gives an optical path difference 2nd cos r between the first two reflected beams.",
  r'''For a film of thickness $d$ and index $n$ in air, illuminated at angle of incidence $i$ (refraction angle $r$), the two beams reflected from top and bottom differ in optical path by
$$\boxed{\Delta=2nd\cos r}$$
Including the $\pi$ phase change ($\lambda/2$ path difference) at the rarer-to-denser reflection:
$$\text{reflected bright: }2nd\cos r=(m+\tfrac12)\lambda,\qquad\text{reflected dark: }2nd\cos r=m\lambda.$$
The transmitted pattern is complementary (bright: $2nd\cos r=m\lambda$, dark: $2nd\cos r=(m+\tfrac12)\lambda$).''',
  r'''The beam that enters the film pays $2nd/\cos r$ for the round trip, but the other beam, reflected at the top, gets a head start along the wavefront. The head start is $2d\tan r\sin i$, and the net is the neat $2nd\cos r$. The additional $\lambda/2$ is the phase flip on the top reflection.''',
  needs=['c.2.5.3', 'c.1.1.3'],
  traps=[r'Forgetting the $\lambda/2$: the top reflection is rarer→denser (flip), the bottom reflection (film→air) is not.',
         r'Using $\cos i$ instead of $\cos r$, the angle <i>inside</i> the film.',
         r'Applying the same conditions to the transmitted light. They are exchanged: bright in reflection means dark in transmission.'],
  cards=[('State the optical path difference for a thin parallel film and the reflected-light conditions.',
          r'$\Delta=2nd\cos r$; bright when $2nd\cos r=(m+\tfrac12)\lambda$, dark when $=m\lambda$.'),
         ('A soap film ($n=1.33$) appears bright green ($500$ nm) at normal incidence. Find the least thickness.',
          r'$2nd=\lambda/2\Rightarrow d=500/(4\times1.33)\approx94$ nm.')],
  proof=dict(
      idea="Compare the optical path of the two rays from the point where they separate to a common wavefront.",
      why="Two rays are in phase if their optical paths to a common wavefront are equal.",
      rungs=[
        (r"Ray 1 reflects at the top at $B$; ray 2 refracts, reflects at the bottom at $C$ and re-emerges at $D$. Let $BD=2d\tan r$ and $BC+CD=2d/\cos r$.",
         r'$$\text{ray 2: }n\,(BC+CD)=\frac{2nd}{\cos r}$$',
         "Optical path inside the film."),
        (r"Ray 1 travels in air from $B$ to the perpendicular from $D$: $BN=BD\sin i$.",
         r'$$\text{ray 1: }BN=2d\tan r\,\sin i$$',
         "The equal-phase point on the wavefront."),
        (r"Use Snell's law $\sin i=n\sin r$ and subtract.",
         r'$$\Delta=\frac{2nd}{\cos r}-2nd\,\frac{\sin^{2}r}{\cos r}=2nd\cos r$$',
         r"$1-\sin^2r=\cos^2r$."),
        (r"Add the $\pi$ phase change of the top reflection ($\lambda/2$).",
         r'$$\text{bright: }2nd\cos r=(m+\tfrac12)\lambda;\quad\text{dark: }2nd\cos r=m\lambda$$',
         "The cosine law with the phase change included.")],
      ends="The cosine law for a thin film."))

C('c.2.6.2', '2.6', 'theorem', "Non-Reflecting (Anti-Reflection) Coatings",
  "A quarter-wave layer of index √n_g cancels reflection at normal incidence.",
  r'''A film of index $n_f$ and thickness $d$ on glass of index $n_g$ (with $n_f<n_g$) makes the two reflected beams cancel at normal incidence when
$$\boxed{d=\frac{\lambda}{4n_f}},\qquad \boxed{n_f=\sqrt{n_g}}$$
(the second condition equalises the two amplitudes for complete cancellation). Magnesium fluoride ($n_f=1.38$) on crown glass ($n_g=1.52$) is the standard practical choice.''',
  r'''Both reflections (air→film and film→glass) are rarer→denser, so both flip and cancel their own phase changes; the round-trip path difference $2n_fd$ then has to be $\lambda/2$ for destructive interference, giving $d=\lambda/(4n_f)$. Cancelling the reflection sends the energy into the transmitted beam.''',
  needs=['c.2.6.1'],
  traps=[r'Assuming the coating works for every wavelength. $d=\lambda/(4n_f)$ is exact for one design wavelength (green); the residual reflection gives lenses their purple tint.',
         r'Using $n_f>n_g$ (a high-index coating): then the top reflection flips but the bottom does not, and the condition changes.'],
  cards=[('State the conditions for a single-layer non-reflecting coating.',
          r'$d=\lambda/(4n_f)$ (optical thickness a quarter wave) and $n_f=\sqrt{n_g}$.'),
         ('Find the thickness of a MgF$_2$ ($n_f=1.38$) coating for $550$ nm.',
          r'$d=550/(4\times1.38)\approx100$ nm.')],
  proof=dict(
      idea="Both reflections flip phase, so only the double-pass path difference matters.",
      why="Destructive interference of two beams of equal amplitude removes the reflection entirely.",
      rungs=[
        ("Air ($1$) → film ($n_f$) → glass ($n_g$), with $1<n_f<n_g$: both reflections are rarer→denser, each with phase $\\pi$.",
         r'$$\text{net relative phase from reflection}=\pi-\pi=0$$',
         "The reflections' phase changes cancel each other."),
        ("So the two beams cancel if the round-trip optical path is half a wavelength (odd multiple).",
         r'$$2n_fd=\frac\lambda2\;\Rightarrow\;d=\frac{\lambda}{4n_f}$$',
         "Normal incidence, $\\cos r=1$."),
        ("Equal amplitudes: the reflection coefficient at each surface must match.",
         r'$$\frac{n_f-1}{n_f+1}=\frac{n_g-n_f}{n_g+n_f}\;\Rightarrow\;n_f^{2}=n_g$$',
         "Normal-incidence Fresnel amplitudes.")],
      ends=r"$d=\lambda/(4n_f)$ and $n_f=\sqrt{n_g}$."))

C('c.2.6.3', '2.6', 'theorem', "Multiple-Beam Reflectivity of a Dielectric Layer",
  "Summing all internal reflections gives R = (r₁² + r₂² + 2r₁r₂ cos δ)/(1 + r₁²r₂² + 2r₁r₂ cos δ), δ = 4πn_f d cos θ/λ.",
  r'''For a layer with amplitude reflection coefficients $r_1$ (top) and $r_2$ (bottom), the reflectivity including all internal reflections is
$$\boxed{R=\frac{r_1^{2}+r_2^{2}+2r_1r_2\cos\delta}{1+r_1^{2}r_2^{2}+2r_1r_2\cos\delta}},\qquad\delta=\frac{4\pi n_fd\cos\theta}{\lambda}.$$
$R$ oscillates between $\big(\tfrac{r_1-r_2}{1-r_1r_2}\big)^2$ and $\big(\tfrac{r_1+r_2}{1+r_1r_2}\big)^2$; a quarter-wave layer gives an extremum.''',
  r'''Each pass through the film sends another ray out of the top, smaller by a factor $r_2r_1'$, and all those rays add as a geometric series in $e^{i\delta}$. Two-beam theory (only the first two rays) is the $r\ll1$ approximation.''',
  needs=['c.2.6.1', 'c.2.5.3'],
  traps=[r'Treating only two beams for a high-reflectivity coating. When $r_1,r_2$ are not small (multi-layer mirrors) the multiple-beam sum is required.'],
  cards=[('Write the multiple-beam reflectivity of a single dielectric layer.',
          r'$R=(r_1^2+r_2^2+2r_1r_2\cos\delta)/(1+r_1^2r_2^2+2r_1r_2\cos\delta)$ with $\delta=4\pi n_fd\cos\theta/\lambda$.'),
         ('When is the two-beam formula a good approximation?',
          r'When $r_1r_2\ll1$ (low reflectivity), so higher-order internal reflections are negligible.')],
  proof=dict(
      idea="Sum the geometric series of beams that leave the top surface after $0,1,2,\\dots$ internal round trips.",
      why="Each extra round trip multiplies the amplitude by $r_2r_1^{\\prime}e^{-i\\delta}$ with $r_1^{\\prime}=-r_1$.",
      rungs=[
        ("Reflected amplitudes: the first ray $r_1$, then $tt^{\\prime}r_2e^{-i\\delta}$, then $tt^{\\prime}r_2(r_1^{\\prime}r_2)e^{-2i\\delta}\\ldots$",
         r'$$\rho=r_1+tt^{\prime}r_2e^{-i\delta}\sum_{k=0}^{\infty}\big(r_1^{\prime}r_2e^{-i\delta}\big)^{k}$$',
         "A geometric series."),
        ("Use Stokes ($r_1^{\\prime}=-r_1$, $tt^{\\prime}=1-r_1^2$) and sum.",
         r'$$\rho=r_1+\frac{(1-r_1^{2})\,r_2e^{-i\delta}}{1+r_1r_2e^{-i\delta}}=\frac{r_1+r_2e^{-i\delta}}{1+r_1r_2e^{-i\delta}}$$',
         "Algebra: $r_1(1+r_1r_2e^{-i\\delta})+(1-r_1^2)r_2e^{-i\\delta}$."),
        ("Take $R=|\\rho|^2$.",
         r'$$R=\frac{r_1^{2}+r_2^{2}+2r_1r_2\cos\delta}{1+r_1^{2}r_2^{2}+2r_1r_2\cos\delta}$$',
         "Real coefficients: multiply by the complex conjugate.")],
      ends="The multiple-beam reflectivity of a layer."))

# ── 2.7  Wedges, Newton's rings and the Michelson interferometer ───────────────
C('c.2.7.1', '2.7', 'theorem', "Wedge-Shaped Film: Fringes of Equal Thickness",
  "A thin wedge of angle θ and index n gives straight fringes parallel to the edge with width β = λ/(2nθ).",
  r'''For a thin wedge of small angle $\theta$ and index $n$ viewed near normal incidence, the fringes (of equal thickness) are straight bands parallel to the edge with
$$\boxed{\beta=\frac{\lambda}{2n\theta}}.$$
In reflection the edge (zero thickness) is <b>dark</b>. For an air wedge ($n=1$) holding a wire of diameter $d_{\rm w}$ at distance $L$ from the edge, $\theta=d_{\rm w}/L$, so $\beta=\lambda/(2\theta)$ and
$$d_{\rm w}=\frac{\lambda L}{2\beta}.$$''',
  r'''At each point the film is effectively parallel, so $2nd\,(x)=m\lambda$ picks contours of constant thickness. Because $d=x\theta$ grows linearly from the edge, the contours are equally spaced parallel lines, and one fringe corresponds to a thickness change of $\lambda/2n$.''',
  needs=['c.2.6.1'],
  traps=[r'Using $\lambda$ instead of $\lambda/n$ for a film of index $n$.',
         r'Forgetting that the edge is dark in reflection (the $\pi$ from one reflection remains).'],
  cards=[(r'Give the fringe width for a thin wedge film.',
          r'$\beta=\lambda/(2n\theta)$ (air wedge: $\lambda/2\theta$).'),
         (r'A wire is placed between glass plates to form an air wedge; $L=10$ cm, $\beta=0.5$ mm, $\lambda=590$ nm. Find its diameter.',
          r'$d_{\rm w}=\lambda L/(2\beta)=590\times10^{-9}\times0.1/(2\times5\times10^{-4})=5.9\times10^{-5}$ m $=59\ \mu\text{m}$.')],
  proof=dict(
      idea=r"Locate the dark fringes by $2nd=m\lambda$ with $d=x\theta$ and read off the spacing.",
      why="Thickness is linear in $x$, so the fringe positions are linear in $m$.",
      rungs=[
        (r"At normal incidence the reflected-dark condition (with the $\pi$ change) is",
         r'$$2nd=m\lambda$$',
         "$m=0$ at the edge, which is dark."),
        (r"For a small wedge $d=x\theta$.",
         r'$$x_m=\frac{m\lambda}{2n\theta}$$',
         "Position of the $m$th dark fringe."),
        ("Spacing between successive dark fringes.",
         r'$$\beta=x_{m+1}-x_m=\frac{\lambda}{2n\theta}$$',
         r"Uniform straight fringes. For a wire at distance $L$: $\theta=d_{\rm w}/L$ gives $d_{\rm w}=\lambda L/(2\beta)$.")],
      ends=r"$\beta=\lambda/(2n\theta)$."))

C('c.2.7.2', '2.7', 'theorem', "Colours of Thin Films",
  "A film in white light shows the colours whose wavelength satisfies the reflection condition at that thickness and angle.",
  r'''In white light, a film of thickness $d$ reflects strongly the wavelengths satisfying $2nd\cos r=(m+\tfrac12)\lambda$ and suppresses those with $2nd\cos r=m\lambda$. The reflected colour is what remains: it changes with thickness (soap bubbles, oil on water) and with viewing angle. A film thinner than $\lambda/4$ appears black in reflection because both conditions are dominated by the $\pi$ phase change.''',
  r'''A thin film is a wavelength filter whose passband depends on the thickness. Vary the thickness across the film (a draining bubble) and you see bands of continuously changing colour, ending in black where the film is thinnest.''',
  needs=['c.2.6.1'],
  traps=[r'Expecting colours from a very thick film: with $d\gg L_c$ the fringes wash out because different wavelengths overlap over many orders.'],
  cards=[('Why does a very thin soap film look black in reflected light?',
          r'For $d\ll\lambda$ the path difference $2nd\cos r\to0$ and only the $\pi$ phase change remains, giving destructive interference for all wavelengths.'),
         ('Why do thin-film colours change with viewing angle?',
          r'$\cos r$ in the condition changes, shifting the wavelength that is reinforced.')])

C('c.2.7.3', '2.7', 'theorem', "Newton's Rings",
  "In reflected light the dark rings have radii r_m = √(mλR/n), diameters D_m² = 4mλR/n, with a dark centre.",
  r'''A plano-convex lens of radius of curvature $R$ resting on a flat plate makes a circular film of thickness $d=r^2/(2R)$ at radius $r$. In reflected light in a medium of refractive index $n$ (air: $n=1$),
$$\boxed{r_m=\sqrt{\frac{m\lambda R}{n}}},\qquad D_m^{2}=\frac{4m\lambda R}{n}\quad(\text{dark rings}, m=0,1,2,\dots),$$
and the central point of contact ($m=0$) is dark. Bright rings: $r_m^{2}=(m+\tfrac12)\lambda R/n$. Between two dark rings of orders $m>p$,
$$\lambda=\frac{n\,(D_m^{2}-D_p^{2})}{4(m-p)R}.$$
If the gap is filled with a liquid of index $n$, the ring diameters shrink by $\sqrt{n}$.''',
  r'''This is a wedge with a curved profile, so the fringes are contours of equal air thickness — circles. Because $d\propto r^2$, ring radii grow as $\sqrt{m}$ and the rings crowd together outward. Measuring the diameters gives $\lambda$ (if $R$ is known) or $R$ (if $\lambda$ is known).''',
  needs=['c.2.6.1', 'c.2.7.1'],
  traps=[r'Using radius where the formula is for diameter: $D_m^2=4m\lambda R/n$ and $r_m^2=m\lambda R/n$.',
         r'Counting the centre as ring 1: the central spot is $m=0$.',
         r'Forgetting that ring diameters shrink by a factor of $\sqrt{n}$ when a liquid of index $n$ fills the gap.'],
  cards=[(r"State the diameters of Newton's dark rings in reflected light.",
          r'$D_m^2=4m\lambda R/n$, so $D_m=2\sqrt{m\lambda R/n}$; the centre is dark.'),
         (r'Find the radius of the 10th dark ring for $R=0.68$ m and $\lambda=589$ nm in air ($n=1$).',
          r'$r_{10}=\sqrt{10\times589\times10^{-9}\times0.68}=2.0\times10^{-3}$ m $=2.0$ mm.'),
         (r"How is $\lambda$ found from Newton's rings without knowing the ring order?",
          r'$\lambda=n(D_m^2-D_p^2)/[4(m-p)R]$ from two measured diameters, $m-p$ counted.')],
  proof=dict(
      idea="Find the film thickness at radius $r$ from the lens geometry, then apply the dark-ring condition.",
      why="The film thickness is what sets the path difference at each radius.",
      rungs=[
        ("At radius $r$, the film gap is $d$; from the circle of radius $R$: $r^2=R^2-(R-d)^2=2Rd-d^2\\simeq2Rd$.",
         r'$$d=\frac{r^{2}}{2R}$$',
         "$d\\ll R$."),
        ("Reflected dark condition with the $\\pi$ change: $2nd=m\\lambda$ (normal incidence).",
         r'$$\frac{nr^{2}}{R}=m\lambda\;\Rightarrow\;r_m=\sqrt{\frac{m\lambda R}{n}}$$',
         "$m=0$ (centre) dark."),
        ("Diameters $D=2r$.",
         r'$$D_m^{2}=\frac{4m\lambda R}{n}$$',
         "Order $m$ dark ring."),
        ("Subtract two rings to eliminate the (unknown) offset from imperfect contact.",
         r'$$D_m^{2}-D_p^{2}=\frac{4(m-p)\lambda R}{n}\;\Rightarrow\;\lambda=\frac{n(D_m^{2}-D_p^{2})}{4(m-p)R}$$',
         "Independent of the contact error.")],
      ends="The ring formulae, and the wavelength from two diameters."))

C('c.2.7.4', '2.7', 'theorem', "The Michelson Interferometer",
  "A beam splitter and two mirrors give circular fringes 2d cos θ = mλ; moving one mirror by λ/2 shifts one fringe.",
  r'''A beam splitter sends light to two mirrors $M_1,M_2$ and recombines it. For a virtual air-film of thickness $d$ between $M_1$ and the image of $M_2$, the circular fringes obey
$$2d\cos\theta=m\lambda.$$
Moving one mirror by $\Delta d$ shifts $N=2\Delta d/\lambda$ fringes:
$$\lambda=\frac{2\Delta d}{N}.$$
For a source with two close lines $\lambda_1,\lambda_2$ (sodium D), the fringes vanish and re-appear every mirror shift $\Delta d=\dfrac{\lambda^{2}}{2\,\Delta\lambda}$, so $\Delta\lambda=\lambda^{2}/(2\Delta d)$.''',
  r'''It is a variable-thickness air film, and turning the micrometer screw changes the thickness at the scale of half a wavelength — the most precise ruler in optics. The centre of the pattern goes bright/dark once per $\lambda/2$ of mirror travel: count the fringes, and you have measured a length in wavelengths.''',
  needs=['c.2.6.1', 'c.2.2.2'],
  traps=[r'Saying one fringe = $\lambda$ of mirror movement. The light passes the mirror twice, so one fringe is $\lambda/2$.',
         r'Forgetting the compensating plate: without it, white-light fringes are lost because the two arms have different glass paths.'],
  cards=[('How many fringes cross the field when the mirror of a Michelson interferometer moves by $\\Delta d$?',
          r'$N=2\Delta d/\lambda$.'),
         ('How many fringes shift if the mirror moves 20 µm ($\\lambda=500$ nm)?',
          r'$N=2\times20\times10^{-6}/(500\times10^{-9})=80$ fringes.'),
         ('The sodium D fringes vanish every $0.29$ mm of mirror travel. Estimate $\\Delta\\lambda$ ($\\lambda=589.3$ nm).',
          r'$\Delta\lambda=\lambda^2/(2\Delta d)=(589.3\times10^{-9})^2/(2\times0.29\times10^{-3})=0.60$ nm.')],
  proof=dict(
      idea="Treat the two arms as one equivalent air film and use the parallel-film condition with $n=1$.",
      why="The interferometer is a thin-film interferometer in disguise.",
      rungs=[
        ("Let $M_2^{\\prime}$ be the image of $M_2$ in the beam splitter; the fringes are those of an air film of thickness $d$ between $M_1$ and $M_2^{\\prime}$. At inclination $\\theta$ the path difference is",
         r'$$\Delta=2d\cos\theta$$',
         "Cosine law with $n=1$."),
        ("Bright circular fringes (ignoring the phase constant) satisfy",
         r'$$2d\cos\theta=m\lambda$$',
         "Fringes of equal inclination."),
        ("At the centre $\\theta=0$; changing $d$ by $\\Delta d$ changes the order by $N$.",
         r'$$2\Delta d=N\lambda\;\Rightarrow\;\lambda=\frac{2\Delta d}{N}$$',
         "Each fringe crossing = $\\lambda/2$ of mirror travel."),
        ("For two lines, fringes of $\\lambda_1$ and $\\lambda_2$ coincide again when the orders differ by one: $2d/\\lambda_1-2d/\\lambda_2=1$.",
         r'$$\Delta\lambda=\frac{\lambda^{2}}{2\,\Delta d}$$',
         "Successive disappearances of the fringes are separated by $\\Delta d$.")],
      ends=r"$\lambda=2\Delta d/N$ and the doublet formula."))

C('c.2.7.5', '2.7', 'theorem', "Fringes of Equal Inclination and Equal Thickness",
  "A parallel film gives circular fringes of equal inclination (Haidinger); a wedge gives fringes of equal thickness.",
  r'''<b>Equal inclination (Haidinger fringes):</b> a plane-parallel film ($d$ constant) viewed with an extended source makes rings determined only by $\cos r$; they are formed at infinity and seen with a lens.
<b>Equal thickness:</b> a film whose thickness varies (wedge, Newton's rings) makes fringes following contours of constant $d$, seen localised near the film.''',
  r'''The condition $2nd\cos r=m\lambda$ has two knobs: $d$ and $r$. Fix $d$ and it is a family of cones (rings) in direction; fix $r$ (near normal) and it is a family of contours in thickness. Which one you see is a matter of which of the two changes over the film.''',
  needs=['c.2.6.1', 'c.2.7.1'],
  traps=[r'Assuming both types appear together: a wedge viewed at normal incidence shows equal-thickness fringes; a parallel film shows only inclination fringes.'],
  cards=[('Distinguish fringes of equal inclination from fringes of equal thickness.',
          r'Equal inclination: $t$ fixed, fringes depend on the angle (Haidinger rings, Michelson circles). Equal thickness: angle fixed, fringes follow contours of $t$ (wedge, Newton\'s rings).')])
