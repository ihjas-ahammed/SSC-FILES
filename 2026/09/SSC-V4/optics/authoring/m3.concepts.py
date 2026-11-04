# Module III — Diffraction.  Ghatak 6e §18.1–18.2, 18.6–18.8, 20.1–20.3, 20.6.

# ── 3.1  Single-slit Fraunhofer diffraction ────────────────────────────────────
C('c.3.1.1', '3.1', 'definition', "Diffraction: Huygens–Fresnel Principle, Fresnel and Fraunhofer Types",
  "Every point of a wavefront is a secondary source; Fraunhofer diffraction is the far-field (plane-wave) case, Fresnel the near-field case.",
  r'''<b>Diffraction</b> is the bending of light around the edge of an obstacle or aperture, with the appearance of bright and dark bands in the shadow region.
<b>Huygens–Fresnel principle.</b> Every point of a wavefront is a source of secondary spherical wavelets; the field beyond is the superposition of all wavelets with their phases.
<ul><li><b>Fraunhofer diffraction</b>: source and screen effectively at infinity (or lenses used), so the wavefronts are plane; the diffraction integral reduces to a Fourier transform of the aperture.</li>
<li><b>Fresnel diffraction</b>: source or screen at a finite distance; wavefronts are curved and the pattern depends strongly on distance.</li></ul>
The Fresnel number $N_F=a^2/(\lambda L)$ decides: $N_F\ll1$ Fraunhofer, $N_F\gtrsim1$ Fresnel.''',
  r'''If light were made of straight rays, the shadow of a slit would be as wide as the slit. Diffraction shows that a wave passing through an opening of size $a\sim\lambda$ spreads out; the smaller the opening, the greater the spread ($\theta\sim\lambda/a$). Fraunhofer is the simpler limit because a lens or a great distance means every wavelet arrives with a plane-wave phase.''',
  needs=['c.2.2.1'],
  traps=[r'Saying diffraction and interference are different physics. Diffraction is interference of infinitely many wavelets from one wavefront.',
         r'Calling any diffraction "Fresnel" because it is near a slit. The classification depends on whether the wavefronts arriving at the aperture and at the screen are plane.'],
  cards=[('State the Huygens–Fresnel principle.',
          r'Every point on a wavefront acts as a source of secondary wavelets; the field at any later point is the superposition of these wavelets with their proper phases.'),
         ('Distinguish Fresnel from Fraunhofer diffraction.',
          r'Fraunhofer: plane wavefronts, source and screen at infinity (or via lenses), small Fresnel number. Fresnel: curved wavefronts, finite distances.')])

C('c.3.1.2', '3.1', 'theorem', "Single-Slit Fraunhofer Pattern",
  "For a slit of width b, I(θ) = I₀ (sin β/β)² with β = πb sin θ/λ; minima at b sin θ = mλ.",
  r'''A slit of width $b$ illuminated by a plane wave produces, in the far field at angle $\theta$,
$$\boxed{I(\theta)=I_0\Big(\frac{\sin\beta}{\beta}\Big)^{2}},\qquad\beta=\frac{\pi b\sin\theta}{\lambda}.$$
Minima: $b\sin\theta=m\lambda$ ($m=\pm1,\pm2,\ldots$). The central maximum has angular half-width $\sin\theta\simeq\lambda/b$ and linear width $2\lambda D/b$ on a screen at distance $D$ (twice the width of the other maxima).''',
  r'''Split the slit into many strips; each contributes a phasor and neighbours differ by a fixed phase step. The phasors curl into an arc: at $\theta=0$ they line up and give the maximum; when the arc closes into a full circle ($\beta=m\pi$) the resultant vanishes. A narrower slit means a larger $\theta$ is needed to close the circle — the pattern widens.''',
  needs=['c.3.1.1', 'c.2.1.3'],
  traps=[r'Confusing $b$ (slit width) with $d$ (slit separation) in $b\sin\theta=m\lambda$, which locates <i>minima</i>, not maxima.',
         r'Expecting $m=0$ to be a minimum. At $\beta=0$, $\sin\beta/\beta\to1$: the central maximum.',
         r'Forgetting that $\lambda/b\ll1$ is needed for the small-angle form $\theta\simeq\lambda/b$.'],
  cards=[(r'Give the intensity distribution and the positions of the minima for single-slit Fraunhofer diffraction.',
          r'$I=I_0(\sin\beta/\beta)^2$ with $\beta=\pi b\sin\theta/\lambda$; minima at $b\sin\theta=m\lambda$, $m\neq0$.'),
         (r'Light of $\lambda=600$ nm falls on a slit $0.2$ mm wide; screen at $2$ m. Find the width of the central maximum.',
          r'$2\lambda D/b=2\times600\times10^{-9}\times2/(2\times10^{-4})=1.2\times10^{-2}$ m $=12$ mm.'),
         (r'Why is the central maximum twice as wide as the others?',
          r'It extends from $m=-1$ to $m=+1$ (width $2\lambda D/b$) while the others span one order ($\lambda D/b$).')],
  proof=dict(
      idea="Integrate the wavelets across the slit, each with its far-field phase.",
      why="In the far field the only difference between wavelets from different points of the slit is their extra path $x\\sin\\theta$.",
      rungs=[
        ("Divide the slit ($-b/2\\le x\\le b/2$) into strips of width $dx$. A strip at $x$ has an extra path $x\\sin\\theta$ relative to the centre, i.e. phase $kx\\sin\\theta$.",
         r'$$E(\theta)\propto\int_{-b/2}^{b/2}e^{ikx\sin\theta}\,dx$$',
         "$k=2\\pi/\\lambda$."),
        ("Integrate.",
         r'$$\int_{-b/2}^{b/2}e^{ikx\sin\theta}dx=\frac{e^{ikb\sin\theta/2}-e^{-ikb\sin\theta/2}}{ik\sin\theta}=b\,\frac{\sin\beta}{\beta}$$',
         "With $\\beta=\\tfrac12kb\\sin\\theta=\\pi b\\sin\\theta/\\lambda$."),
        ("Intensity is the modulus squared; normalise by the value at $\\beta=0$.",
         r'$$I=I_0\Big(\frac{\sin\beta}{\beta}\Big)^{2}$$',
         "$\\lim_{\\beta\\to0}\\sin\\beta/\\beta=1$."),
        ("Zeros of $\\sin\\beta$ with $\\beta\\neq0$.",
         r'$$\beta=m\pi\;\Rightarrow\;b\sin\theta=m\lambda$$',
         "The condition for the dark bands.")],
      ends="The single-slit intensity and its minima."))

C('c.3.1.3', '3.1', 'theorem', "Secondary Maxima of the Single-Slit Pattern",
  "The secondary maxima lie where tan β = β (near β = 1.43π, 2.46π, …) with intensities 4.7%, 1.6%, 0.8% of I₀.",
  r'''The maxima of $(\sin\beta/\beta)^2$ satisfy $\tan\beta=\beta$, whose roots are $\beta\simeq1.43\pi,\ 2.46\pi,\ 3.47\pi,\dots$ (close to $(m+\tfrac12)\pi$ for large $m$). Their relative intensities are
$$I/I_0\simeq0.047,\ 0.016,\ 0.008,\ \ldots$$
Almost all ($\sim90\%$) of the energy is in the central maximum.''',
  r'''The side maxima are just where the falling $1/\beta^2$ envelope meets the oscillating $\sin^2\beta$: near the peaks of $\sin^2$, but pulled slightly toward the centre by the slope of the envelope. That is why the roots of $\tan\beta=\beta$ sit below $(m+\tfrac12)\pi$.''',
  needs=['c.3.1.2'],
  traps=[r'Assuming the secondary maxima are exactly at $\beta=(m+\tfrac12)\pi$. That is a good estimate for large $m$ but not exact.'],
  cards=[('What equation gives the positions of the secondary maxima in a single-slit pattern and how strong is the first?',
          r'$\tan\beta=\beta$; the first secondary maximum at $\beta\approx1.43\pi$ has intensity $\approx4.7\%$ of the central maximum.')],
  proof=dict(
      idea="Differentiate $(\\sin\\beta/\\beta)^2$ and set the derivative to zero.",
      why="The extrema of the intensity are the zeros of its derivative.",
      rungs=[
        ("Differentiate.",
         r'$$\frac{d}{d\beta}\Big(\frac{\sin\beta}{\beta}\Big)^{2}=\frac{2\sin\beta\,(\beta\cos\beta-\sin\beta)}{\beta^{3}}$$',
         "Product/quotient rule."),
        ("Set to zero: either $\\sin\\beta=0$ (the minima) or",
         r'$$\beta\cos\beta=\sin\beta\;\Longleftrightarrow\;\tan\beta=\beta$$',
         "The secondary maxima."),
        ("The first non-trivial root is $\\beta_1\\approx4.493=1.43\\pi$; evaluate the intensity there.",
         r'$$\frac{I}{I_0}=\Big(\frac{\sin4.493}{4.493}\Big)^{2}\approx0.047$$',
         "About 4.7% of the central maximum.")],
      ends="Secondary maxima at $\\tan\\beta=\\beta$."))

# ── 3.2  Double-slit Fraunhofer ────────────────────────────────────────────────
C('c.3.2.1', '3.2', 'theorem', "Two-Slit Fraunhofer Pattern and Missing Orders",
  "Two slits of width b and center spacing d = a+b give I = 4I₀(sin β/β)² cos²γ, with γ = πd sin θ/λ; orders with d/b = m/p are missing.",
  r'''Two identical slits of width $b$ separated by an opaque interval $a$ have center-to-center separation $d = a+b$ and produce
$$\boxed{I(\theta)=4I_0\Big(\frac{\sin\beta}{\beta}\Big)^{2}\cos^{2}\gamma},\qquad\beta=\frac{\pi b\sin\theta}{\lambda},\ \ \gamma=\frac{\pi d\sin\theta}{\lambda}=\frac{\pi(a+b)\sin\theta}{\lambda}.$$
The $\cos^2\gamma$ factor is the two-slit interference fringes (bright at $d\sin\theta=m\lambda$); the $(\sin\beta/\beta)^2$ factor is the single-slit <b>diffraction envelope</b> (zeros at $b\sin\theta=p\lambda$).
<b>Missing orders</b> occur whenever an interference maximum coincides with a diffraction minimum:
$$\frac{d}{b}=\frac{a+b}{b}=\frac{m}{p}.$$
If $d/b$ is an integer, every $m = p(d/b)$-th interference order is completely absent. The central diffraction maximum contains $2(d/b)-1$ interference fringes.''',
  r'''Each slit throws out the same diffraction envelope; the two beams from the slits then interfere inside it, exactly as in Young's experiment. Young's simplification "infinitely narrow slits" corresponds to $b\to0$, where the envelope is flat.''',
  needs=['c.3.1.2', 'c.2.3.2'],
  traps=[r'Applying the Young pattern without the envelope for slits of finite width.',
         r'Counting the fringes in the central maximum as $d/b$. It is $2(d/b)-1$ (from $-m$ to $+m$ excluding the first missing order).'],
  cards=[('Give the intensity for two slits of width $b$ and separation $d=a+b$.',
          r'$I=4I_0(\sin\beta/\beta)^2\cos^2\gamma$, $\beta=\pi b\sin\theta/\lambda$, $\gamma=\pi d\sin\theta/\lambda$.'),
         ('For $d=3b$, which orders are missing and how many fringes are in the central maximum?',
          r'Orders $\pm3,\pm6,\dots$ are missing; the central maximum holds $2(d/b)-1=5$ fringes.')],
  proof=dict(
      idea="Add the fields from two slit apertures, one shifted by $d$, using the single-slit result.",
      why="Each slit's contribution has the single-slit amplitude; shifting a slit only adds a phase $kd\\sin\\theta$.",
      rungs=[
        ("Slit 1 centred at $-d/2$, slit 2 at $+d/2$. By the shift theorem each contributes the single-slit field with phase $\\mp\\gamma$.",
         r'$$E=E_0\frac{\sin\beta}{\beta}\big(e^{-i\gamma}+e^{i\gamma}\big)=2E_0\frac{\sin\beta}{\beta}\cos\gamma$$',
         "$\\gamma=\\tfrac12kd\\sin\\theta$."),
        ("Intensity.",
         r'$$I=4I_0\Big(\frac{\sin\beta}{\beta}\Big)^{2}\cos^{2}\gamma$$',
         "Where $I_0$ is the single-slit central intensity."),
        ("Missing orders: an interference maximum $d\\sin\\theta=m\\lambda$ that coincides with an envelope zero $b\\sin\\theta=p\\lambda$.",
         r'$$\frac{d}{b}=\frac{a+b}{b}=\frac{m}{p}\;\Rightarrow\;m=\frac{d}{b}\,p$$',
         "For $d/b$ an integer, orders $m=(d/b)p$ vanish.")],
      ends="The two-slit intensity and the missing-order rule."))

# ── 3.3  N slits and the diffraction grating ──────────────────────────────────
C('c.3.3.1', '3.3', 'theorem', "N-Slit Fraunhofer Pattern",
  "N slits give I = I₀(sin β/β)²(sin Nγ/ sin γ)²: principal maxima at d sin θ = mλ, N−1 zeros and N−2 weak maxima between.",
  r'''For $N$ identical slits of width $b$ and spacing $d$,
$$\boxed{I=I_0\Big(\frac{\sin\beta}{\beta}\Big)^{2}\Big(\frac{\sin N\gamma}{\sin\gamma}\Big)^{2}},\qquad\gamma=\frac{\pi d\sin\theta}{\lambda}.$$
<b>Principal maxima</b> at $d\sin\theta=m\lambda$ have $I=N^2I_0(\sin\beta/\beta)^2$. Between neighbours there are $N-1$ zeros ($N\gamma=p\pi$) and $N-2$ weak <b>secondary maxima</b>. Increasing $N$ sharpens the principal maxima (half-width $\propto1/N$).''',
  r'''Two slits give cosine fringes; adding slits makes the fringes narrower and brighter while the light between them is cancelled by ever more phasors pointing in different directions. For large $N$ only the sharp principal maxima survive.''',
  needs=['c.3.2.1', 'c.2.1.3'],
  traps=[r'Thinking the secondary maxima are important for a grating: their intensity is $\lesssim4\%$ of the principal maximum and negligible for large $N$.'],
  cards=[('Give the $N$-slit intensity pattern and the number of zeros between adjacent principal maxima.',
          r'$I=I_0(\sin\beta/\beta)^2(\sin N\gamma/\sin\gamma)^2$; $N-1$ zeros (and $N-2$ secondary maxima).'),
         ('How does the width of a principal maximum vary with $N$?',
          r'Its angular half-width is $\Delta\theta\simeq\lambda/(Nd\cos\theta)$, i.e. $\propto1/N$.')],
  proof=dict(
      idea="Combine the single-slit amplitude with the $N$-phasor sum of a regular array.",
      why="The array's phase step between adjacent slits is $2\\gamma$.",
      rungs=[
        ("Each slit contributes the single-slit amplitude $E_0\\sin\\beta/\\beta$ times a phase that steps by $2\\gamma=kd\\sin\\theta$ from slit to slit.",
         r'$$E=E_0\frac{\sin\beta}{\beta}\sum_{k=0}^{N-1}e^{2ik\gamma}$$',
         "A geometric series."),
        ("Sum using the phasor formula.",
         r'$$\Big|\sum e^{2ik\gamma}\Big|=\Big|\frac{\sin N\gamma}{\sin\gamma}\Big|$$',
         "Same algebra as the $N$-wave superposition."),
        ("Square.",
         r'$$I=I_0\Big(\frac{\sin\beta}{\beta}\Big)^{2}\Big(\frac{\sin N\gamma}{\sin\gamma}\Big)^{2}$$',
         "Principal maxima at $\\gamma=m\\pi$ where the ratio $\\to N$.")],
      ends="The $N$-slit intensity."))

C('c.3.3.2', '3.3', 'theorem', "The Diffraction Grating: Grating Equation and Dispersion",
  "A grating of element (a+b) has maxima at (a+b)(sin θ ± sin i) = mλ, with angular dispersion dθ/dλ = m/[(a+b) cos θ].",
  r'''For a plane transmission grating with transparent slit width $b$ and opaque interval $a$, the <b>grating element</b> is $d = a+b$. At normal incidence, principal maxima satisfy
$$\boxed{(a+b)\sin\theta_m=m\lambda},\qquad m=0,\pm1,\pm2,\dots,\ \ |m|<(a+b)/\lambda.$$
At oblique incidence $(a+b)(\sin\theta_m\pm\sin i)=m\lambda$. Differentiating gives the <b>angular dispersion</b>
$$\frac{d\theta}{d\lambda}=\frac{m}{(a+b)\cos\theta}.$$
White light gives a central white maximum and spectra of increasing order; longer wavelengths are deviated more (opposite to a prism). The number of lines per unit length is $N_g = 1/(a+b)$.''',
  r'''Each order $m$ is a place where the paths from adjacent slits differ by $m$ wavelengths, so every slit is in step. Different $\lambda$ satisfy that at different angles, so the grating sorts colours: the dispersion says how far apart in angle two nearby wavelengths land.''',
  needs=['c.3.3.1'],
  traps=[r'Forgetting the maximum order: $m_{\max}\le(a+b)/\lambda$; beyond that $\sin\theta>1$.',
         r'Dispersion grows with the order and with a finer grating (smaller $a+b$), not with the total number of lines alone.',
         r'Assuming the same order overlaps do not occur: $m\lambda_2=(m+1)\lambda_1$ makes neighbouring orders overlap.'],
  cards=[(r'Write the grating equation at normal incidence and the angular dispersion.',
          r'$(a+b)\sin\theta=m\lambda$; $d\theta/d\lambda=m/[(a+b)\cos\theta]$.'),
         (r'A grating has $5000$ lines/cm. Find the angle of the first order for $\lambda=589$ nm.',
          r'$a+b=1/5000$ cm $=2\ \mu\text{m}$; $\sin\theta=589\times10^{-9}/(2\times10^{-6})=0.2945$, $\theta\approx17.1^\circ$.'),
         (r'What is the highest order visible with $\lambda=589$ nm on a grating with $a+b=2\ \mu\text{m}$?',
          r'$m<(a+b)/\lambda=3.4$, so $m_{\max}=3$.')],
  proof=dict(
      idea="Demand every pair of adjacent slits to be in phase, then differentiate the resulting relation.",
      why="Principal maxima are where all $N$ phasors align.",
      rungs=[
        ("The path difference between light from adjacent slits at angle $\\theta$ is $(a+b)\\sin\\theta$; in phase when it is $m\\lambda$.",
         r'$$(a+b)\sin\theta_m=m\lambda$$',
         "Normal incidence."),
        ("Differentiate at fixed $m$ and grating element $a+b$.",
         r'$$(a+b)\cos\theta\,d\theta=m\,d\lambda$$',
         "Small change of wavelength."),
        ("Solve for the dispersion.",
         r'$$\frac{d\theta}{d\lambda}=\frac{m}{(a+b)\cos\theta}$$',
         "Larger for higher orders and smaller spacing.")],
      ends="The grating equation and the angular dispersion."))

C('c.3.3.3', '3.3', 'theorem', "Resolving Power of a Grating",
  "R = λ/Δλ = mN — set by the order and the total number of lines, not by the line spacing.",
  r'''By the Rayleigh criterion two wavelengths $\lambda$ and $\lambda+\Delta\lambda$ are just resolved when the principal maximum of one falls on the first minimum of the other. For a grating with $N$ lines illuminated,
$$\boxed{R=\frac{\lambda}{\Delta\lambda}=mN}.$$
A finer grating spreads the spectrum further but does not by itself improve $R$: what matters is how many lines are lit.''',
  r'''Each principal maximum has a half-width of $\lambda/(Nd\cos\theta)$; the dispersion moves the neighbouring wavelength by $m\Delta\lambda/(d\cos\theta)$. Setting the two equal is Rayleigh's criterion, and the $d\cos\theta$ cancels — a pleasing result.''',
  needs=['c.3.3.2'],
  traps=[r'Confusing dispersion (how far apart) with resolving power (how sharp). Both matter; only $mN$ measures the ability to separate two lines.'],
  cards=[('State the resolving power of a grating.',
          r'$R=\lambda/\Delta\lambda=mN$ ($m$ the order, $N$ the number of illuminated lines).'),
         ('How many lines are needed to resolve the sodium doublet ($589.0$ and $589.6$ nm) in first order?',
          r'$N=\lambda/(m\Delta\lambda)=589.3/0.6\approx982$ lines.')],
  proof=dict(
      idea="Equate the angular half-width of a principal maximum to the angular separation of the two lines.",
      why="Rayleigh: the maximum of $\\lambda+\\Delta\\lambda$ lies on the first zero next to the maximum of $\\lambda$.",
      rungs=[
        ("First zero beside the $m$th maximum: $N\\gamma$ increases by $\\pi$, i.e. $Nd\\sin\\theta=(mN+1)\\lambda$.",
         r'$$d\sin\theta^{\prime}=\Big(m+\frac1N\Big)\lambda$$',
         "Half-width of the maximum."),
        ("The maximum of $\\lambda+\\Delta\\lambda$ in the same order: $d\\sin\\theta^{\\prime}=m(\\lambda+\\Delta\\lambda)$.",
         r'$$m(\lambda+\Delta\lambda)=\Big(m+\frac1N\Big)\lambda$$',
         "Coincidence condition."),
        ("Solve.",
         r'$$\frac{\lambda}{\Delta\lambda}=mN$$',
         "The resolving power.")],
      ends=r"$R=mN$."))

# ── 3.4  Fresnel diffraction: half-period zones and zone plate ─────────────────
C('c.3.4.1', '3.4', 'definition', "Fresnel Half-Period Zones",
  "Circles on the wavefront at r_m² = mλd (plane wave) cut it into zones of equal area whose contributions alternate in sign.",
  r'''For a point $P$ at distance $d$ from a plane wavefront, draw circles about the pole $O$ so that their distance from $P$ increases by $\lambda/2$ each time. The concentric annular zones are <b>Fresnel half-period zones</b>, with radii
$$\boxed{r_m=\sqrt{m\,\lambda\,d}}\qquad\text{(and }r_m^2=\frac{m\lambda a d}{a+d}\text{ for a point source at distance }a).$$
Every zone has (very nearly) the same area $\pi \lambda d$; the wavelets from successive zones arrive with a relative phase difference of $\pi$.''',
  r'''The path from the wavefront to $P$ grows as you move outward; cutting it into half-wavelength slices gives zones that are in antiphase with their neighbours. Equal areas means equal strength, but obliquity makes the contributions fall slowly with $m$, so the amplitudes $u_1>u_2>u_3\dots$ decline.''',
  needs=['c.3.1.1'],
  traps=[r'Saying the zone areas are exactly equal for every $m$: they are equal to first order in $\lambda/d$.'],
  cards=[(r'Give the radii and area of the $m$th half-period zone for a plane wave.',
          r'$r_m=\sqrt{m\lambda d}$; each zone has area $\pi\lambda d$.'),
         (r'Find the radius of the first zone for $d=1$ m and $\lambda=500$ nm.',
          r'$r_1=\sqrt{1\times500\times10^{-9}}=7.1\times10^{-4}$ m $=0.71$ mm.')],
  proof=dict(
      idea="Find where the distance to $P$ has grown by $m\\lambda/2$ and read off the radius.",
      why="A zone boundary is defined by that path increase.",
      rungs=[
        ("A point on the wavefront at radius $r$ is at distance $\\sqrt{d^2+r^2}$ from $P$.",
         r'$$\sqrt{d^{2}+r_m^{2}}=d+\frac{m\lambda}{2}$$',
         "The $m$th boundary."),
        ("Square, neglect $\\lambda^2$.",
         r'$$r_m^{2}=m\lambda d+\frac{m^{2}\lambda^{2}}{4}\simeq m\lambda d$$',
         "$\\lambda\\ll d$."),
        ("Area of each zone.",
         r'$$\pi r_{m+1}^{2}-\pi r_m^{2}=\pi\lambda d$$',
         "Independent of $m$.")],
      ends=r"$r_m=\sqrt{m\lambda d}$; equal-area zones."))

C('c.3.4.2', '3.4', 'theorem', "Zone Construction: Circular Apertures, Discs and Poisson's Spot",
  "The whole open wavefront gives amplitude A₁/2; a circular hole with n zones gives ≈ A₁ (n odd) or ≈ 0 (n even); a disc leaves a bright centre.",
  r'''The zone amplitudes alternate, $A_1-A_2+A_3-\ldots$, and vary slowly, so
$$A=\frac{A_1}{2}\quad(\text{unobstructed wavefront}),\qquad I_0=\frac{A_1^{2}}{4}.$$
<ul><li><b>Circular aperture</b> exposing $n$ zones: $A\simeq A_1$ for $n$ odd ($I\simeq4I_0$), $A\simeq0$ for $n$ even.</li>
<li><b>Opaque disc</b> covering the first $k$ zones: $A\simeq A_{k+1}/2\simeq A_1/2$, so the centre of the shadow is <b>bright</b> (Poisson's spot).</li></ul>''',
  r'''Adding alternating, slowly-shrinking terms, the sum is about half the first term — an old trick (Euler): $A_1-A_2+A_3-\ldots=\tfrac12A_1+\tfrac12(A_1-2A_2+A_3)+\ldots\approx\tfrac12A_1$. Shading alternate zones therefore <i>adds</i> light: that is the zone plate.''',
  needs=['c.3.4.1'],
  traps=[r'Expecting the centre of a disc\'s shadow to be dark. Poisson predicted the bright spot as an objection to the wave theory; Arago found it experimentally.'],
  cards=[('What amplitude does an unobstructed wavefront give in terms of $A_1$?',
          r'$A=A_1/2$, so $I_0=A_1^2/4$.'),
         ('What is seen at the centre of the geometrical shadow of a circular disc?',
          r'A bright spot (Poisson/Arago spot), of intensity nearly $I_0$.')],
  proof=dict(
      idea="Pair up zone amplitudes so each pair of neighbours is small.",
      why="Because $A_n$ varies slowly, $A_n\\approx\\tfrac12(A_{n-1}+A_{n+1})$.",
      rungs=[
        ("Write the total with alternating signs.",
         r'$$A=A_1-A_2+A_3-A_4+\cdots$$',
         "Successive zones are in antiphase."),
        ("Group: $A_1/2+(A_1/2-A_2+A_3/2)+(A_3/2-A_4+A_5/2)+\\cdots$",
         r'$$A=\frac{A_1}{2}+\Big(\frac{A_1}{2}-A_2+\frac{A_3}{2}\Big)+\Big(\frac{A_3}{2}-A_4+\frac{A_5}{2}\Big)+\cdots$$',
         "Each bracket is nearly zero when $A_n\\approx(A_{n-1}+A_{n+1})/2$."),
        ("Drop the brackets.",
         r'$$A\simeq\frac{A_1}{2}$$',
         "The last zone contributes half its (tiny) amplitude, so the series ends smoothly.")],
      ends=r"$A\simeq A_1/2$ for the free wavefront."))

C('c.3.4.3', '3.4', 'theorem', "The Zone Plate",
  "Blocking alternate zones makes a lens: primary focus f₁ = r₁²/λ, with weaker foci at f₁/3, f₁/5, ….",
  r'''A <b>zone plate</b> blocks every other half-period zone. Light from the open zones arrives in phase at the axial point $P$ at distance $f_m$ and adds constructively:
$$\boxed{f_m=\frac{r_m^{2}}{m\lambda}}\ \ (m=1)\ \Rightarrow\ f_1=\frac{r_1^{2}}{\lambda},\qquad r_m=\sqrt{m f_1\lambda}.$$
It has further real foci at $f_1/3,f_1/5,\dots$ and virtual foci on the source side. Its focal length varies as $1/\lambda$ (strong chromatic aberration).''',
  r'''Any set of concentric rings with radii $\propto\sqrt n$ delivers the open zones to $P$ with phases that differ by whole periods — a diffractive lens. The lens brings a plane wave to a point using diffraction rather than refraction, and $f\propto1/\lambda$ is the opposite of a glass lens.''',
  needs=['c.3.4.2'],
  traps=[r'Assuming a zone plate has one focus: it has several ($f_1,f_1/3,f_1/5,\dots$) plus a virtual one and the undeviated beam.',
         r'Assuming it is achromatic. $f\propto1/\lambda$, so it is strongly chromatic.'],
  cards=[('State the focal length of a zone plate in terms of the first zone radius.',
          r'$f_1=r_1^2/\lambda$.'),
         ('A zone plate has first zone radius $0.5$ mm; find $f_1$ for $\\lambda=500$ nm and the next focus.',
          r'$f_1=(0.5\times10^{-3})^2/(500\times10^{-9})=0.5$ m; next real focus at $f_1/3\approx0.17$ m.')],
  proof=dict(
      idea="Require the wavelets from adjacent open zones to arrive in phase at the focus.",
      why="Open zones are separated by one blocked zone, i.e. by one full wavelength of extra path.",
      rungs=[
        ("Take a point $P$ on the axis at $f$. The $m$th zone boundary of that point satisfies (by definition of a half-period zone)",
         r'$$r_m^{2}=mf\lambda$$',
         "Half-period zones for $P$ at distance $f$."),
        ("The plate is made with radii $r_m$ fixed; then $P$ is at",
         r'$$f_1=\frac{r_1^{2}}{\lambda}$$',
         "First-order focus."),
        ("At $f=f_1/3$ each open zone of the plate covers three half-period zones (odd number), so open zones still add in phase.",
         r'$$f_p=\frac{f_1}{p},\quad p=1,3,5,\dots$$',
         "Higher-order foci, weaker by $1/p^2$.")],
      ends=r"$f_1=r_1^2/\lambda$ and the foci $f_1/p$."))

# ── 3.5  Diffraction by a straight edge ────────────────────────────────────────
C('c.3.5.1', '3.5', 'theorem', "Fresnel Integrals and the Cornu Spiral",
  "Straight-edge diffraction has I = (I₀/2)[(C(v)+½)² + (S(v)+½)²]; the Cornu spiral plots S(v) against C(v).",
  r'''Define the Fresnel integrals
$$C(v)=\int_0^{v}\cos\frac{\pi s^{2}}{2}\,ds,\qquad S(v)=\int_0^{v}\sin\frac{\pi s^{2}}{2}\,ds.$$
The curve $S$ against $C$ is the <b>Cornu spiral</b>, with limit points $(\pm\tfrac12,\pm\tfrac12)$ as $v\to\pm\infty$. The intensity behind a straight edge (relative to the unobstructed value $I_0$) is
$$\boxed{\frac{I}{I_0}=\tfrac12\Big[\big(C(v)+\tfrac12\big)^{2}+\big(S(v)+\tfrac12\big)^{2}\Big]},\qquad v=x\sqrt{\frac{2(a+d)}{ad\lambda}}\quad\Big(\text{or }x\sqrt{\frac{2}{\lambda d}}\text{ for plane waves}\Big).$$''',
  r'''On the Cornu spiral, arc length is the position of the point across the wavefront, and the direction of the tangent is the phase of the wavelet. The field at $P$ is the vector from the "start" of the spiral (the shadowed side) to the point $v$: distance from the lower limit point $(-\tfrac12,-\tfrac12)$.''',
  needs=['c.3.4.2'],
  traps=[r'Reading $x$ as the distance from the edge on the screen and forgetting the scale factor $\sqrt{2(a+d)/(ad\lambda)}$ that converts it to $v$.'],
  cards=[('Write the intensity behind a straight edge in terms of the Fresnel integrals.',
          r'$I/I_0=\tfrac12\{[C(v)+\tfrac12]^2+[S(v)+\tfrac12]^2\}$.'),
         ('What is the intensity at the geometrical edge of the shadow?',
          r'$v=0$: $C=S=0$, so $I=I_0/4$.')],
  proof=dict(
      idea="Sum wavelets across the unobstructed half of the wavefront, expanding the path to second order.",
      why="Near the edge the path to $P$ grows quadratically with the coordinate $x$ across the wavefront.",
      rungs=[
        ("The extra path of a wavelet at coordinate $s$ (in dimensionless units $v$) is $\\tfrac{\\pi}{2}s^{2}$ in phase.",
         r'$$E(v)\propto\int_{-v}^{\infty}e^{i\pi s^{2}/2}\,ds$$',
         "Second-order (parabolic) phase; the shadow side is cut off at $-v$."),
        ("Split into real and imaginary parts and use $\\int_0^\\infty=\\tfrac12$ for both.",
         r'$$E\propto\Big[C(v)+\tfrac12\Big]+i\Big[S(v)+\tfrac12\Big]$$',
         "Since $C(\\infty)=S(\\infty)=\\tfrac12$ and $C,S$ are odd."),
        ("Take the modulus squared; normalise so that $v\\to\\infty$ gives $I_0$.",
         r'$$\frac{I}{I_0}=\tfrac12\Big[\big(C+\tfrac12\big)^{2}+\big(S+\tfrac12\big)^{2}\Big]$$',
         "At $v\\to\\infty$: $\\tfrac12(1+1)=1$.")],
      ends="The straight-edge intensity."))

C('c.3.5.2', '3.5', 'theorem', "Straight-Edge Pattern: Maxima, Minima and the Shadow",
  "Outside the geometrical shadow the intensity oscillates with a first maximum 1.37 I₀ at v ≈ 1.22; inside it falls smoothly to zero.",
  r'''From the Cornu spiral:
<ul><li>At the edge of the geometrical shadow $I=I_0/4$.</li>
<li>Into the illuminated side: maxima at $v\simeq1.22,\,2.34,\,3.08,\ldots$ with $I/I_0\simeq1.37,\,1.20,\,1.16,\ldots$; minima at $v\simeq1.87,\,2.74,\,\ldots$ with $I/I_0\simeq0.78,\,0.84,\ldots$ (fringes get closer and weaker).</li>
<li>Into the shadow ($v<0$): $I$ falls monotonically toward zero with no fringes.</li></ul>
Light appears to <b>bend into the geometrical shadow</b>.''',
  r'''Following the spiral outward from the shadow side, the resultant vector length first rises past its final value (because the spiral's first loop overshoots the limit point), then oscillates around it with shrinking amplitude — the fringes decay because the spiral tightens around $(\tfrac12,\tfrac12)$.''',
  needs=['c.3.5.1'],
  traps=[r'Reading the geometrical shadow edge as the position of a bright or dark fringe. The edge is at $I_0/4$, between the two.'],
  cards=[('Where is the first maximum outside a straight-edge shadow and how bright is it?',
          r'At $v\approx1.22$, $I\approx1.37I_0$.'),
         ('What happens inside the geometrical shadow?',
          r'The intensity decreases smoothly to zero with no fringes.')],
  proof=dict(
      idea="Read the intensity as the squared distance on the Cornu spiral from the point $(-\\tfrac12,-\\tfrac12)$.",
      why="$I/I_0=\\tfrac12[(C+\\tfrac12)^2+(S+\\tfrac12)^2]$ is half the squared distance to that point.",
      rungs=[
        ("Take $v=0$.",
         r'$$\frac I{I_0}=\tfrac12\big(\tfrac14+\tfrac14\big)=\tfrac14$$',
         "The edge of the shadow."),
        ("Maxima of $I$ are where the tangent to the spiral is perpendicular to the line to $(-\\tfrac12,-\\tfrac12)$, giving $C+S=$ const conditions; numerically $v\\approx1.22$.",
         r'$$C(1.22)\approx0.72,\ S(1.22)\approx0.62\;\Rightarrow\;\frac I{I_0}\approx\tfrac12(1.22^{2}+1.12^{2})\approx1.37$$',
         "First maximum."),
        ("For $v\\to-\\infty$ the point tends to $(-\\tfrac12,-\\tfrac12)$ and the distance to zero.",
         r'$$\frac I{I_0}\to0\ \ (v\to-\infty)$$',
         "Smooth decay into the shadow.")],
      ends="The straight-edge fringe structure."))
