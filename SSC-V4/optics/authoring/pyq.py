# Level-4 PYQ items from Calicut University PHY5B08 examinations.
# Generated from study question bank items (Topics 1-3: Interference, Diffraction, Polarisation).

# ── Topic 1: Interference of Light ─────────────────────────────────────────────

P('p.cu.op.01', 2021, 'CU Nov', 1, 2, '2.1', ['c.2.1.2'],
  "Conditions for Interference",
  r'''<p>State the condition for constructive and destructive interference in terms of path difference.</p>''',
  r'''Relate the phase difference $\delta=2\pi\Delta/\lambda$ to integral or half-integral multiples of $\pi$.''',
  r'''<p>For two coherent waves of wavelength $\lambda$ meeting with an optical path difference $\Delta$:</p>
<ul>
<li><b>Constructive interference (bright fringe):</b> The path difference must be an integral multiple of $\lambda$:
$$\Delta = m\lambda,\qquad m = 0, \pm 1, \pm 2, \ldots$$
corresponding to a phase difference $\delta = 2m\pi$.</li>
<li><b>Destructive interference (dark fringe):</b> The path difference must be an odd half-integral multiple of $\lambda$:
$$\Delta = (m + \tfrac{1}{2})\lambda,\qquad m = 0, \pm 1, \pm 2, \ldots$$
corresponding to a phase difference $\delta = (2m + 1)\pi$.</li>
</ul>''',
  trap=r'''Quoting conditions in terms of phase difference without converting via $\delta = (2\pi/\lambda)\Delta$.''')

P('p.cu.op.02', 2022, 'CU Nov', 2, 2, '2.2', ['c.2.2.2'],
  "Spatial and Temporal Coherence",
  r'''<p>Define spatial and temporal coherence.</p>''',
  r'''Distinguish correlation along the direction of propagation (time/path difference) from correlation across the wavefront (source size).''',
  r'''<p><b>Temporal coherence:</b> The measure of the correlation between the phases of a light wave at the same point in space at two different times. It characterizes how long a wave train stays sinusoidal ($\tau_c \simeq 1/\Delta\nu$), corresponding to a coherence length $L_c = c\tau_c \simeq \lambda^2/\Delta\lambda$.</p>
<p><b>Spatial coherence:</b> The measure of the correlation between the phases of a light wave at two different points across the wavefront at the same instant of time. For a source of angular width $\theta$, the spatial coherence width is of the order of $\lambda/\theta$.</p>''',
  trap=r'''Confusing the physical roles: temporal coherence limits path difference, whereas spatial coherence limits source dimensions.''')

P('p.cu.op.03', 2024, 'CU Nov', 3, 2, '2.2', ['c.2.2.1'],
  "Coherent Sources",
  r'''<p>What are coherent sources? Why two independent light sources cannot produce interference?</p>''',
  r'''Recall that coherence requires a time-invariant phase difference between interfering waves.''',
  r'''<p>Two sources are <b>coherent</b> if the phase difference between the light waves they emit remains constant in time.</p>
<p>Two independent light sources cannot produce an observable interference pattern because light is emitted by independent atoms in random wavetrains lasting only about $10^{-8}\text{ s}$. The initial phase of each source fluctuates randomly millions of times per second. Consequently, the phase difference $\delta$ varies rapidly and randomly, causing the interference term $2\sqrt{I_1I_2}\cos\delta$ to average to zero over any practical observation time, leaving only the sum of intensities $I_1 + I_2$.</p>''',
  trap=r'''Claiming independent sources do not emit waves simultaneously; they do emit, but their relative phase fluctuates randomly.''')

P('p.cu.op.04', 2025, 'CU Nov', 4, 2, '2.6', ['c.2.6.1'],
  "Cosine Law in Thin Films",
  r'''<p>What is cosine law in thin film interference?</p>''',
  r'''State the geometric optical path difference between rays reflected from top and bottom surfaces of a parallel film.''',
  r'''<p>The <b>cosine law</b> states that for a plane-parallel thin film of thickness $t$ and refractive index $\mu$, illuminated by light at an angle of incidence $i$ giving angle of refraction $r$, the geometric optical path difference $\Delta$ between the beams reflected from the upper and lower surfaces is:
$$\Delta = 2\mu t\cos r$$
Accounting for the phase change of $\pi$ (equivalent to $\lambda/2$) occurring upon reflection at the rarer-to-denser interface, the effective optical path difference in reflected light is $2\mu t\cos r \pm \lambda/2$.</p>''',
  trap=r'''Using the angle of incidence $i$ instead of the angle of refraction $r$ inside the film.''')

P('p.cu.op.05', 2024, 'CU Nov', 5, 2, '2.1', ['c.2.1.2'],
  "Visibility of Fringes",
  r'''<p>What is visibility of fringes? Write its formula.</p>''',
  r'''Define visibility as the contrast of an interference pattern in terms of intensity extrema.''',
  r'''<p><b>Visibility</b> (or contrast) of interference fringes measures the clarity or sharpness of the fringe pattern, comparing the intensity difference between bright and dark fringes to their sum.</p>
<p>It is defined by Michelson as:
$$V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}}$$
For two interfering beams of intensities $I_1$ and $I_2$, this becomes:
$$V = \frac{2\sqrt{I_1 I_2}}{I_1 + I_2}$$
$V = 1$ when $I_1 = I_2$ ($I_{\min} = 0$, maximum contrast), and $V \to 0$ when one beam is much stronger than the other.</p>''',
  trap=r'''Mistaking fringe visibility for the simple intensity ratio $I_{\max}/I_{\min}$.''')

P('p.cu.op.06', 2023, 'CU Nov', 6, 2, '2.5', ['c.2.5.3'],
  "Stokes' Relations and Phase Change on Reflection",
  r'''<p>What is phase change on reflection (Stokes' relations)?</p>''',
  r'''Apply the principle of optical reversibility to a wave reflected and refracted at an interface.''',
  r'''<p>By the principle of optical reversibility, Stokes showed that for an interface between two media with amplitude reflection and transmission coefficients $r, t$ (from medium 1 to 2) and $r', t'$ (from medium 2 to 1):
$$r' = -r,\qquad tt' = 1 - r^2$$
The relation $r' = -r$ indicates that the reflection coefficients from the two sides have opposite signs. Thus, if reflection from one medium involves no phase change, reflection from the other side entails an abrupt phase change of $\pi$ radians (equivalent to a path difference of $\lambda/2$). Experiment shows that this $\pi$ phase change occurs when light reflects from the boundary of an optically denser medium.</p>''',
  trap=r'''Applying the $\pi$ phase change to reflections at both boundaries of a film instead of only the rarer-to-denser boundary.''')

P('p.cu.op.07', 2023, 'CU Nov', 31, 5, '2.3', ['c.2.3.1'],
  "Fringe Width in Young's Experiment",
  r'''<p>Derive the expression for the fringe width in Young's double slit experiment.</p>''',
  r'''Calculate the path difference to a point on a distant screen and find the spacing between consecutive maxima.''',
  r'''<p><b>Experimental arrangement:</b> Two narrow parallel slits $S_1$ and $S_2$, separated by distance $d$, are illuminated coherently by a monochromatic source of wavelength $\lambda$. A screen is placed parallel to the slits at a distance $D \gg d$. Let $O$ be the central point on the screen equidistant from $S_1$ and $S_2$, and consider a point $P$ at distance $x$ from $O$.</p>
<p>From the geometry of the setup, the distances from $S_1$ and $S_2$ to $P$ are:
$$S_1P^2 = D^2 + \big(x - \tfrac{d}{2}\big)^2,\qquad S_2P^2 = D^2 + \big(x + \tfrac{d}{2}\big)^2$$
Subtracting these two expressions:
$$S_2P^2 - S_1P^2 = 2xd \implies (S_2P - S_1P)(S_2P + S_1P) = 2xd$$
For $D \gg d$ and $D \gg x$, we approximate $S_2P + S_1P \simeq 2D$. Thus the optical path difference is:
$$\Delta = S_2P - S_1P \simeq \frac{xd}{D}$$
<b>Bright fringe condition:</b> Constructive interference occurs when $\Delta = m\lambda$:
$$\frac{x_m d}{D} = m\lambda \implies x_m = \frac{m\lambda D}{d}\quad (m = 0, \pm 1, \pm 2, \ldots)$$
<b>Fringe width $\beta$:</b> The fringe width $\beta$ is the separation between any two successive bright (or dark) fringes:
$$\beta = x_{m+1} - x_m = \frac{(m+1)\lambda D}{d} - \frac{m\lambda D}{d} = \frac{\lambda D}{d}$$
Hence, the fringes are equally spaced straight lines with width $\beta = \lambda D/d$.</p>''',
  trap=r'''Measuring fringe width as the distance between adjacent bright and dark fringes instead of two successive bright fringes.''')

P('p.cu.op.08', 2020, 'CU Nov', 32, 5, '2.7', ['c.2.7.3', 'c.2.5.3'],
  "Newton's Rings in Reflected Light",
  r'''<p>Explain the formation of Newton's rings in reflected light. Why is the central spot dark?</p>''',
  r'''Describe the wedge-like circular air film formed by a convex lens on a flat glass plate and relate thickness to radius.''',
  r'''<p><b>Formation of Newton's rings:</b> A plano-convex lens of large radius of curvature $R$ is placed with its convex spherical surface on an optically flat glass plate. This traps a thin air film of circular symmetry whose thickness $t$ increases from zero at the point of contact outward according to:
$$t \simeq \frac{r^2}{2R}$$
where $r$ is the radial distance from the point of contact.</p>
<p>When illuminated from above by monochromatic light of wavelength $\lambda$ at near-normal incidence, light reflects from the bottom surface of the lens (glass-to-air) and the top surface of the plate (air-to-glass). These two coherent wave fronts interfere by division of amplitude. Since the locus of constant thickness $t$ is a circle centered at the contact point, the resulting fringes are concentric circular rings (fringes of equal thickness).</p>
<p><b>Path difference:</b> The optical path difference in reflection includes an extra $\lambda/2$ phase shift at the lower air-glass boundary:
$$\Delta = 2t + \frac{\lambda}{2} = \frac{r^2}{R} + \frac{\lambda}{2}$$
<b>Condition for dark rings:</b> Destructive interference requires $\Delta = (n + \tfrac{1}{2})\lambda$:
$$\frac{r_n^2}{R} + \frac{\lambda}{2} = (n + \tfrac{1}{2})\lambda \implies r_n^2 = n\lambda R \implies D_n^2 = 4n\lambda R\quad (n = 0, 1, 2, \ldots)$$
<b>Why the central spot is dark:</b> At the point of contact ($r = 0$), the air film thickness vanishes ($t = 0$). The only contribution to the path difference is the phase change of $\pi$ ($\lambda/2$) occurring upon reflection at the rarer-to-denser interface (air-plate). The two reflected waves are therefore exactly $180^\circ$ out of phase and destructively interfere, producing a dark central spot.</p>''',
  trap=r'''Forgetting that the $\pi$ phase flip occurs only at the air-to-glass reflection, not at the glass-to-air boundary.''')

P('p.cu.op.09', 2022, 'CU Nov', 33, 5, '2.6', ['c.2.6.1', 'c.2.2.1'],
  "Thin Film Path Difference (Cosine Law)",
  r'''<p>Explain the interference of light due to division of amplitude. Derive the path difference for light reflected from a thin parallel film.</p>''',
  r'''Trace two rays split at the top surface and compute their optical path difference up to a common wavefront.''',
  r'''<p><b>Interference by division of amplitude:</b> When an incident light wave strikes a boundary between two media, its amplitude is partially reflected and partially transmitted. The two resulting waves travel along different paths and can subsequently be recombined to produce interference. Since both beams originate from the same incident wavefront, they are mutually coherent.</p>
<p><b>Derivation for a thin parallel film:</b> Consider a plane-parallel film of refractive index $\mu$ and thickness $t$ bounded by air. A ray of monochromatic light is incident at angle $i$ at point $B$ on the upper surface. Part reflects as ray 1 along $BD$; part refracts at angle $r$, reflects at point $C$ on the lower surface, and re-emerges at $D$ into air as ray 2 parallel to ray 1.</p>
<p>From $D$, drop a perpendicular $DN$ onto ray 1. Beyond the wavefront $DN$, the rays travel identical optical distances. The optical path difference $\Delta$ between ray 2 and ray 1 is:
$$\Delta = \mu(BC + CD) - BN$$
From the geometry of the film:
$$BC = CD = \frac{t}{\cos r} \implies BC + CD = \frac{2t}{\cos r}$$
The distance $BD$ across the top surface is $BD = 2t\tan r$. Thus in air:
$$BN = BD\sin i = (2t\tan r)\sin i$$
Using Snell's law, $\sin i = \mu\sin r$:
$$BN = 2t\,\frac{\sin r}{\cos r}(\mu\sin r) = \frac{2\mu t\sin^2 r}{\cos r}$$
Substituting these into the path difference:
$$\Delta = \frac{2\mu t}{\cos r} - \frac{2\mu t\sin^2 r}{\cos r} = \frac{2\mu t(1 - \sin^2 r)}{\cos r} = 2\mu t\cos r$$
Accounting for the phase change of $\pi$ (equivalent to path $\lambda/2$) at reflection $B$ (rarer-to-denser medium), the effective path difference is $\Delta_{\text{eff}} = 2\mu t\cos r \pm \lambda/2$.</p>''',
  trap=r'''Using geometric path difference without multiplying the distance inside the film by refractive index $\mu$.''')

P('p.cu.op.10', 2023, 'CU Nov', 34, 5, '2.3', ['c.2.3.4', 'c.2.4.2'],
  "Measuring Sheet Thickness with Biprism",
  r'''<p>How can the thickness of a thin transparent sheet be measured using a biprism?</p>''',
  r'''Determine the optical path delay introduced by the sheet in one interfering beam and equate it to fringe shift.''',
  r'''<p><b>Principle:</b> When a thin transparent sheet of thickness $t$ and refractive index $\mu$ is introduced into the path of one of the two interfering beams in a Fresnel biprism setup, it introduces an extra optical path length without altering the fringe width.</p>
<p><b>Extra optical path:</b> The sheet replaces a thickness $t$ of air (refractive index 1) with thickness $t$ of the medium:
$$\Delta L_{\text{op}} = \mu t - t = (\mu - 1)t$$
<b>Fringe displacement:</b> The central zero-order fringe shifts from the geometric centre to a new position $x_0$ on the screen where the two optical paths are once again equal. Since a path difference of $\lambda$ corresponds to one fringe width $\beta = \lambda D/d$, the geometric path difference must compensate the plate delay:
$$\frac{d\,x_0}{D} = (\mu - 1)t \implies x_0 = \frac{(\mu - 1)t D}{d}$$
In terms of fringe width $\beta = \lambda D/d$, the number of fringes $N$ by which the central fringe shifts is:
$$N = \frac{x_0}{\beta} = \frac{(\mu - 1)t}{\lambda}$$
<b>Experimental procedure:</b>
<ol>
<li>The biprism is illuminated with white light to clearly locate the central achromatic (white) fringe with the crosswire of a micrometer eyepiece.</li>
<li>Monochromatic light is restored, and the thin transparent sheet is introduced into one beam. The central fringe shifts laterally by a distance $x_0$.</li>
<li>Using the measured fringe width $\beta$ and shift $x_0$ (or number of shifted fringes $N = x_0/\beta$), the thickness $t$ is calculated by:
$$t = \frac{N\lambda}{\mu - 1} = \frac{x_0 d}{(\mu - 1)D}$$
provided $\mu$ and $\lambda$ are known.</li>
</ol></p>''',
  trap=r'''Writing $\mu t$ instead of $(\mu - 1)t$ for the extra optical path introduced by the sheet.''')

P('p.cu.op.11', 2021, 'CU Nov', 35, 5, '2.7', ['c.2.7.1'],
  "Wedge-Shaped Thin Film",
  r'''<p>Describe the fringe system produced in a wedge-shaped thin film. Write the formula for fringe width.</p>''',
  r'''Analyze the varying thickness $t = x\alpha$ of a wedge film and derive the dark fringe positions.''',
  r'''<p><b>Fringe system in a wedge-shaped film:</b> A wedge-shaped film is formed between two plane glass plates inclined at a small angle $\alpha$. At distance $x$ from the apex (line of contact), the film thickness is $t = x\alpha$. When illuminated by monochromatic light of wavelength $\lambda$ at near-normal incidence, interference occurs between rays reflected from the upper and lower surfaces of the film.</p>
<p>Because the thickness is constant along any line parallel to the edge of the wedge, the fringes are straight, equally spaced bands parallel to the apex. These are <i>fringes of equal thickness</i> (Fizeau fringes), localised in or near the film.</p>
<p><b>Condition for dark fringes:</b> Including the $\pi$ phase flip on reflection at the lower interface, the path difference for normal incidence in a film of index $\mu$ is $\Delta = 2\mu t + \lambda/2$. Destructive interference occurs when:
$$2\mu t = m\lambda \implies 2\mu(x_m\alpha) = m\lambda \implies x_m = \frac{m\lambda}{2\mu\alpha}\quad (m = 0, 1, 2, \ldots)$$
At the edge of contact ($x = 0, t = 0$), $m = 0$, so the edge is <b>dark</b> in reflected light.</p>
<p><b>Fringe width formula:</b> The separation $\beta$ between successive dark fringes is:
$$\beta = x_{m+1} - x_m = \frac{\lambda}{2\mu\alpha}$$
For an air wedge ($\mu = 1$), the fringe width is:
$$\beta = \frac{\lambda}{2\alpha}$$</p>''',
  trap=r'''Assuming the apex of the wedge is bright in reflected light; it is dark due to the $\pi$ phase change on reflection.''')

P('p.cu.op.12', 2023, 'CU Nov', 40, 5, '2.6', ['c.2.6.2'],
  "Antireflection Coatings",
  r'''<p>Explain the working of antireflection coatings in thin films.</p>''',
  r'''Require destructive interference between reflections from the two boundaries with equal reflection amplitudes.''',
  r'''<p><b>Principle of antireflection coating:</b> A transparent thin dielectric film of refractive index $n_f$ and thickness $t$ is deposited onto a glass substrate of index $n_g$, where $1 < n_f < n_g$ (e.g., magnesium fluoride $\text{MgF}_2$, $n_f = 1.38$ on crown glass $n_g = 1.52$). Its purpose is to eliminate unwanted surface reflection by destructive interference.</p>
<p><b>Phase cancellation condition:</b> Light is incident from air ($n_0 = 1$). Both reflections—at the air-film boundary ($1 \to n_f$) and at the film-glass boundary ($n_f \to n_g$)—occur at a boundary from a rarer to a denser medium. Both reflections therefore undergo an identical phase change of $\pi$ radians. The net phase change from reflection is zero ($\pi - \pi = 0$).</p>
<p>Destructive interference between the two reflected beams at normal incidence requires their round-trip optical path difference $2n_f t$ to equal an odd half-wavelength:
$$2n_f t = \frac{\lambda}{2} \implies t = \frac{\lambda}{4n_f}$$
Thus, the optical thickness of the coating must be one quarter-wavelength.</p>
<p><b>Amplitude cancellation condition:</b> For complete cancellation, the amplitudes of the two reflected beams must be equal. At normal incidence, the Fresnel reflection coefficients are:
$$r_1 = \frac{n_f - 1}{n_f + 1},\qquad r_2 = \frac{n_g - n_f}{n_g + n_f}$$
Equating $r_1 = r_2$ gives:
$$n_f^2 = n_g \implies n_f = \sqrt{n_g}$$
When both conditions ($t = \lambda/4n_f$ and $n_f = \sqrt{n_g}$) are satisfied, the reflected intensity is zero, and by energy conservation, all incident energy is transmitted into the glass.</p>''',
  trap=r'''Assuming an antireflection coating works for all wavelengths; $t = \lambda/(4n_f)$ is exact only for the design wavelength.''')

P('p.cu.op.13', 2023, 'CU Nov', 44, 5, '2.7', ['c.2.7.4'],
  "Michelson Interferometer and Sodium Doublet",
  r'''<p>Describe the construction of Michelson's interferometer. Explain how it can be used to measure the difference in wavelength of Sodium $D$ lines.</p>''',
  r'''Describe the beam splitter, compensator, and two mirrors; use the periodic disappearance of fringes to find $\Delta\lambda$.''',
  r'''<p><b>Construction:</b> Michelson's interferometer consists of an extended monochromatic source, a half-silvered beam-splitter glass plate $G_1$, an identical compensating plate $G_2$, and two mutually perpendicular plane mirrors $M_1$ and $M_2$. $M_1$ is mounted on a precision micrometer carriage allowing it to translate along the beam axis, while $M_2$ is fixed. Light from the source strikes $G_1$ at $45^\circ$, dividing into a reflected beam directed toward $M_1$ and a transmitted beam directed through $G_2$ toward $M_2$. After normal reflection from the mirrors, both beams return to $G_1$ and recombine toward an observing telescope. Plate $G_2$ ensures equal optical paths in glass for both arms.</p>
<p>The fringes are equivalent to those formed by a virtual air film of thickness $d$ between $M_1$ and the virtual image $M_2'$ of $M_2$. At inclination $\theta$, the path difference is $\Delta = 2d\cos\theta$. Circular fringes of equal inclination satisfy $2d\cos\theta = m\lambda$.</p>
<p><b>Measuring wavelength difference of Sodium $D$ lines:</b> Sodium light contains two closely spaced wavelengths $\lambda_1$ and $\lambda_2$ ($\lambda_1 \approx 589.6\text{ nm}, \lambda_2 \approx 589.0\text{ nm}$, with average $\lambda$). Each wavelength generates its own set of circular fringes.</p>
<p>When the bright fringes of $\lambda_1$ coincide with the bright fringes of $\lambda_2$, maximum visibility is observed. As $M_1$ is moved, the order of interference changes at different rates for $\lambda_1$ and $\lambda_2$. When bright rings of $\lambda_1$ fall on dark rings of $\lambda_2$, the fringes become indistinct (minimum visibility). When $M_1$ is moved further by distance $\Delta d$, the patterns coincide again.</p>
<p>At successive positions of maximum (or minimum) clarity, the order difference changes by 1:
$$\frac{2\Delta d}{\lambda_2} - \frac{2\Delta d}{\lambda_1} = 1 \implies 2\Delta d\left(\frac{\lambda_1 - \lambda_2}{\lambda_1\lambda_2}\right) = 1$$
Setting $\Delta\lambda = \lambda_1 - \lambda_2$ and $\lambda_1\lambda_2 \simeq \lambda^2$:
$$\Delta\lambda = \frac{\lambda^2}{2\Delta d}$$
Measuring the distance $\Delta d$ between successive disappearances yields $\Delta\lambda$.</p>''',
  trap=r'''Omitting the factor of 2 in $2\Delta d$: the light traverses the distance $\Delta d$ twice (forward and backward).''')


# ── Topic 2: Diffraction of Light ──────────────────────────────────────────────

P('p.cu.op.14', 2021, 'CU Nov', 61, 2, '3.1', ['c.3.1.1'],
  "Fresnel vs Fraunhofer Diffraction",
  r'''<p>Distinguish between Fresnel and Fraunhofer diffraction.</p>''',
  r'''Compare the geometry of wavefronts and source/screen distances in the two classes of diffraction.''',
  r'''<p><b>1. Fresnel diffraction:</b> The light source, the diffracting aperture, and the screen are at finite distances from each other. The incident and diffracted wavefronts are spherical or cylindrical (curved). No lenses are required to observe the pattern, and the Fresnel number satisfies $N_F = a^2/(\lambda L) \gtrsim 1$.</p>
<p><b>2. Fraunhofer diffraction:</b> The light source and the screen are effectively at infinite distances from the aperture, or collimating and focusing lenses are placed before and after the aperture. The incident and diffracted wavefronts are strictly planar, and $N_F \ll 1$. The diffraction pattern is the Fourier transform of the aperture.</p>''',
  trap=r'''Stating that lenses create diffraction; lenses simply project the far-field (Fraunhofer) pattern onto a finite screen.''')

P('p.cu.op.15', 2022, 'CU Nov', 62, 2, '3.4', ['c.3.4.1'],
  "Fresnel Half-Period Zone",
  r'''<p>Define a half-period zone in Fresnel's diffraction.</p>''',
  r'''Describe how a wavefront is divided into concentric annular zones differing in distance to the observation point by $\lambda/2$.''',
  r'''<p>A <b>Fresnel half-period zone</b> is an annular concentric strip into which a primary wavefront is divided, such that the distance from the outer boundary of any zone to an observation point $P$ is greater by half a wavelength ($\lambda/2$) than the distance from its inner boundary.</p>
<p>For a plane wave at distance $b$ from $P$, the radius of the $n$-th zone is $r_n = \sqrt{n b\lambda}$. Each zone has nearly equal area $\pi b\lambda$, and wavelets from any two consecutive zones arrive at $P$ with an optical path difference of $\lambda/2$ (a phase difference of $\pi$), thereby destructively interfering with each other.</p>''',
  trap=r'''Believing the zone areas depend strongly on $n$; they are equal to first order in $\lambda/b$.''')

P('p.cu.op.16', 2024, 'CU Nov', 63, 2, '3.3', ['c.3.3.2'],
  "Prism vs Grating Spectrum",
  r'''<p>What is the difference between a prism spectrum and a grating spectrum?</p>''',
  r'''Compare the physical mechanism, order of deviation of colors, and dispersion uniformity.''',
  r'''<p><b>1. Physical mechanism:</b> A prism spectrum is produced by <i>refraction</i> (dispersion $dn/d\lambda$), whereas a grating spectrum is produced by <i>diffraction and interference</i>.</p>
<p><b>2. Order of deviation:</b> In a prism, violet light is deviated most and red light least ($n_{\text{violet}} > n_{\text{red}}$). In a grating ($d\sin\theta = m\lambda$), red light is deviated most and violet least ($\theta \propto \lambda$).</p>
<p><b>3. Dispersion uniformity & spectra:</b> A grating produces multiple symmetric orders ($m = \pm 1, \pm 2, \ldots$) with nearly uniform (normal) angular dispersion ($d\theta/d\lambda \approx m/d$), while a prism produces only one spectrum with non-uniform dispersion compressed in the red.</p>''',
  trap=r'''Thinking red is deviated most in both; red is deviated most in a grating but least in a prism.''')

P('p.cu.op.17', 2025, 'CU Nov', 64, 2, '3.3', ['c.3.3.2'],
  "Dispersive Power of a Grating",
  r'''<p>Define dispersive power of a grating.</p>''',
  r'''Define the rate of change of diffraction angle with wavelength and differentiate the grating equation.''',
  r'''<p>The <b>dispersive power</b> (angular dispersion) of a diffraction grating is the rate of change of the angle of diffraction with wavelength, represented by $d\theta/d\lambda$. It measures the angular separation between two spectral lines differing in wavelength by unit amount.</p>
<p>From the grating equation at normal incidence, $d\sin\theta = m\lambda$, differentiating with respect to $\lambda$ yields:
$$d\cos\theta\,d\theta = m\,d\lambda \implies \frac{d\theta}{d\lambda} = \frac{m}{d\cos\theta}$$
where $m$ is the order of the spectrum, $d$ is the grating element, and $\theta$ is the angle of diffraction.</p>''',
  trap=r'''Confusing angular dispersion $d\theta/d\lambda$ with the resolving power $R = \lambda/\Delta\lambda = mN$.''')

P('p.cu.op.18', 2024, 'CU Nov', 65, 2, '3.2', ['c.3.2.1'],
  "Absent Spectra in Grating",
  r'''<p>What is absent spectra in grating?</p>''',
  r'''Find conditions where an interference principal maximum coincides with a single-slit diffraction minimum.''',
  r'''<p>In a grating or double slit, an <b>absent spectrum</b> (or missing order) occurs when the condition for an interference principal maximum coincides exactly with the condition for a single-slit diffraction zero for the same angle of diffraction $\theta$.</p>
<p>The conditions are:
$$\text{Interference maximum: } d\sin\theta = m\lambda\qquad (m = 1, 2, 3, \ldots)$$
$$\text{Diffraction minimum: } a\sin\theta = p\lambda\qquad (p = 1, 2, 3, \ldots)$$
where $a$ is the slit width and $d$ is the grating element (slit separation). Dividing the two equations:
$$\frac{d}{a} = \frac{m}{p} \implies m = \frac{d}{a}\,p$$
If the ratio $d/a$ is an integer, the interference orders $m = (d/a), 2(d/a), 3(d/a), \ldots$ have zero intensity and are completely absent from the spectrum.</p>''',
  trap=r'''Saying absent orders occur because light is not transmitted; they vanish because the envelope factor $(\sin\beta/\beta)^2$ is zero.''')

P('p.cu.op.19', 2023, 'CU Nov', 91, 5, '3.1', ['c.3.1.2'],
  "Fraunhofer Diffraction at a Single Slit",
  r'''<p>Derive the expression for the intensity distribution in Fraunhofer diffraction at a single slit.</p>''',
  r'''Integrate the secondary wavelets across the width of the slit in the far-field approximation.''',
  r'''<p><b>Geometry:</b> Let a plane monochromatic wave of wavelength $\lambda$ fall normally on a narrow rectangular slit of width $a$ extending from $x = -a/2$ to $x = +a/2$. By the Huygens–Fresnel principle, each strip of width $dx$ acts as a coherent source of secondary wavelets.</p>
<p><b>Resultant field:</b> In the direction making an angle $\theta$ with the normal, the path difference between a wavelet from coordinate $x$ and the wavelet from the centre ($x = 0$) is $x\sin\theta$, corresponding to a phase difference $kx\sin\theta = (2\pi/\lambda)x\sin\theta$. The resultant electric field amplitude $E(\theta)$ is obtained by integrating across the aperture:
$$E(\theta) = C \int_{-a/2}^{a/2} e^{i k x \sin\theta}\,dx = C\left[\frac{e^{i k x \sin\theta}}{i k \sin\theta}\right]_{-a/2}^{a/2} = C a\,\frac{e^{i\beta} - e^{-i\beta}}{2i\beta} = E_0\,\frac{\sin\beta}{\beta}$$
where $E_0 = Ca$ is the central amplitude at $\theta = 0$, and
$$\beta = \frac{1}{2} k a \sin\theta = \frac{\pi a\sin\theta}{\lambda}$$
<b>Intensity distribution:</b> The intensity $I(\theta)$ is proportional to $|E(\theta)|^2$:
$$I(\theta) = I_0\left(\frac{\sin\beta}{\beta}\right)^2$$
where $I_0$ is the intensity at the central maximum ($\beta \to 0, \sin\beta/\beta \to 1$).</p>
<p><b>Minima:</b> Minima occur where $\sin\beta = 0$ with $\beta \neq 0$:
$$\beta = m\pi \implies \frac{\pi a\sin\theta}{\lambda} = m\pi \implies a\sin\theta = m\lambda\quad (m = \pm 1, \pm 2, \ldots)$$
The central maximum spans from $m = -1$ to $m = +1$ with angular width $2\lambda/a$.</p>''',
  trap=r'''Setting $m = 0$ as a minimum; at $\beta = 0$, $\lim_{\beta\to 0}(\sin\beta/\beta) = 1$, giving the central maximum.''')

P('p.cu.op.20', 2020, 'CU Nov', 92, 5, '3.3', ['c.3.3.3'],
  "Resolving Power of a Grating",
  r'''<p>Explain the resolving power of a grating. State Rayleigh's criterion for resolution.</p>''',
  r'''State Rayleigh's criterion and equate the angular position of a principal maximum to the adjacent minimum.''',
  r'''<p><b>Resolving power:</b> The resolving power of a grating measures its ability to form separate, distinguishable spectral lines for two wavelengths that are very close to each other. It is defined as:
$$R = \frac{\lambda}{\Delta\lambda}$$
where $\Delta\lambda$ is the smallest wavelength difference between two lines that can just be resolved at wavelength $\lambda$.</p>
<p><b>Rayleigh's criterion for resolution:</b> Two spectral lines of equal intensity are said to be just resolved if the central maximum of the diffraction pattern of one wavelength falls exactly on the first minimum of the diffraction pattern of the other wavelength.</p>
<p><b>Derivation of $R = mN$:</b> Consider a grating with $N$ lines and grating element $d$ illuminated at normal incidence. The $m$-th order principal maximum for wavelength $\lambda$ occurs at angle $\theta$ given by:
$$d\sin\theta = m\lambda$$
The total path difference across all $N$ lines of the grating is $Nd\sin\theta = Nm\lambda$. The first adjacent minimum occurs when this path difference increases by $\lambda$, corresponding to an angle $\theta'$:
$$Nd\sin\theta' = (Nm + 1)\lambda \implies d\sin\theta' = \left(m + \frac{1}{N}\right)\lambda$$
By Rayleigh's criterion, the principal maximum of wavelength $\lambda + \Delta\lambda$ in the same order $m$ must occur at this exact angle $\theta'$:
$$d\sin\theta' = m(\lambda + \Delta\lambda)$$
Equating the two expressions for $d\sin\theta'$:
$$m(\lambda + \Delta\lambda) = \left(m + \frac{1}{N}\right)\lambda \implies m\,\Delta\lambda = \frac{\lambda}{N} \implies \frac{\lambda}{\Delta\lambda} = mN$$
Thus, the resolving power is $R = mN$, proportional to the spectral order $m$ and the total number of illuminated lines $N$.</p>''',
  trap=r'''Confusing resolving power $R = mN$ with dispersive power $d\theta/d\lambda = m/(d\cos\theta)$.''')

P('p.cu.op.21', 2022, 'CU Nov', 93, 5, '3.4', ['c.3.4.3'],
  "The Zone Plate vs Convex Lens",
  r'''<p>Explain the zone plate. Compare it with a convex lens.</p>''',
  r'''Describe how blocking alternate Fresnel zones focuses light by diffraction, and contrast it with refraction in a lens.''',
  r'''<p><b>The zone plate:</b> A zone plate is a specially prepared optical screen consisting of concentric circular zones with radii proportional to the square roots of natural numbers ($r_n = \sqrt{n f_1\lambda}$), constructed by either completely blocking or phase-shifting alternate half-period zones. When a plane monochromatic wave strikes it, wavelets from all the transparent zones arrive at the axial focal point $P$ in phase (differing by an integral multiple of $2\pi$), constructively interfering to produce an intense focal spot.</p>
<p>Its primary focal length for radius $r_1$ of the first zone is:
$$f_1 = \frac{r_1^2}{\lambda}$$
Because each open zone covers an odd number of zones for closer distances, it exhibits multiple higher-order real foci at $f_p = f_1/p$ ($p = 1, 3, 5, \ldots$) as well as corresponding virtual foci.</p>
<p><b>Comparison between zone plate and convex lens:</b>
<ul>
<li><b>Mechanism:</b> A zone plate focuses light by <i>diffraction</i> and interference, whereas a convex lens focuses light by <i>refraction</i>.</li>
<li><b>Number of foci:</b> A zone plate has multiple foci ($f_1, f_1/3, f_1/5, \ldots$) and virtual foci, whereas a thin lens has a single focal point.</li>
<li><b>Chromatic aberration:</b> For a zone plate, $f \propto 1/\lambda$, so red light has a shorter focal length than violet light. For a convex lens, $f \propto 1/(n-1)$, so violet light (having higher $n$) has a shorter focal length than red light.</li>
<li><b>Intensity:</b> A lens transmits nearly all incident light to a single focus, whereas a zone plate concentrates only a fraction of the incident energy into each order.</li>
</ul></p>''',
  trap=r'''Assuming a zone plate has the same chromatic aberration as a glass lens; their wavelength dependence is opposite ($f \propto 1/\lambda$ vs $f \propto 1/(n(\lambda)-1)$).''')

P('p.cu.op.22', 2023, 'CU Nov', 94, 5, '3.2', ['c.3.2.1'],
  "Double-Slit Diffraction and Envelope",
  r'''<p>Discuss the diffraction pattern produced by a double slit. Distinguish between interference maxima and diffraction envelope.</p>''',
  r'''Write the intensity as the product of the single-slit diffraction envelope and two-slit interference factor.''',
  r'''<p><b>Double-slit Fraunhofer diffraction:</b> Consider two parallel slits, each of width $a$, separated by centre-to-centre distance $d$. When illuminated normally by a plane monochromatic wave of wavelength $\lambda$, the resultant intensity distribution in direction $\theta$ is:
$$I(\theta) = 4I_0\left(\frac{\sin\beta}{\beta}\right)^2 \cos^2\gamma$$
where $\beta = \dfrac{\pi a\sin\theta}{\lambda}$ and $\gamma = \dfrac{\pi d\sin\theta}{\lambda}$.</p>
<p>This expression is the product of two distinct physical terms:
<ul>
<li><b>Interference factor ($\cos^2\gamma$):</b> Represents the interference between light from the two slits, producing closely spaced, sharp fringes with maxima at:
$$d\sin\theta = m\lambda\quad (m = 0, \pm 1, \pm 2, \ldots)$$</li>
<li><b>Diffraction envelope $\big(\frac{\sin\beta}{\beta}\big)^2$:</b> Represents the Fraunhofer diffraction pattern of a single slit of width $a$, with diffraction minima at:
$$a\sin\theta = p\lambda\quad (p = \pm 1, \pm 2, \ldots)$$</li>
</ul></p>
<p><b>Distinction and missing orders:</b> The rapid $\cos^2\gamma$ interference fringes are modulated and bound inside the broader single-slit envelope. When a diffraction minimum coincides with an interference maximum ($d\sin\theta = m\lambda$ and $a\sin\theta = p\lambda$), that interference order has zero intensity and is missing ($m = (d/a)p$). The central diffraction maximum contains $(2d/a - 1)$ interference fringes.</p>''',
  trap=r'''Treating double-slit fringes as purely an interference effect, ignoring the modulating single-slit diffraction envelope.''')

P('p.cu.op.23', 2021, 'CU Nov', 95, 5, '3.5', ['c.3.5.1', 'c.3.5.2'],
  "Diffraction by a Straight Edge",
  r'''<p>Describe the Fresnel diffraction due to a straight edge. Explain the occurrence of maxima and minima.</p>''',
  r'''Divide the wavefront into Fresnel zones or use Cornu's spiral to describe illuminated-side oscillations and the shadow region.''',
  r'''<p><b>Experimental arrangement:</b> A straight, sharp opaque edge is placed perpendicular to the path of light from a monochromatic slit source $S$ of wavelength $\lambda$. A screen is placed at distance $b$ behind the edge to observe the diffraction pattern.</p>
<p><b>Diffraction pattern features:</b>
<ol>
<li><b>Geometrical shadow edge:</b> At the edge of the geometrical shadow ($v = 0$), the intensity does not drop abruptly to zero; instead, it is exactly $I_0/4$, where $I_0$ is the unobstructed intensity.</li>
<li><b>Illuminated region:</b> Progressing into the illuminated region, the intensity alternates between maxima and minima:
<ul>
<li>First maximum at $v \approx 1.22$ with peak intensity $\approx 1.37 I_0$.</li>
<li>First minimum at $v \approx 1.87$ with intensity $\approx 0.78 I_0$.</li>
<li>Higher maxima ($1.20 I_0, 1.16 I_0, \ldots$) and minima crowd closer together and gradually damp out to the uniform intensity $I_0$.</li>
</ul></li>
<li><b>Shadow region:</b> Inside the geometrical shadow ($v < 0$), the intensity decreases monotonically and smoothly to zero without exhibiting any fringes.</li>
</ol></p>
<p><b>Occurrence of maxima and minima:</b> By the Cornu spiral formulation, the intensity is proportional to the square of the chord joining $(-\tfrac{1}{2}, -\tfrac{1}{2})$ to the point $(C(v), S(v))$. In the illuminated region, the spiral winds into loops, causing the chord length to alternately overshoot and undershoot the asymptotic value, giving rise to interference-like fringes. In the shadow region, $v$ becomes negative and the point travels into the lower loop toward $(-\tfrac{1}{2}, -\tfrac{1}{2})$, so the chord length continuously decays to zero.</p>''',
  trap=r'''Assuming the edge of the geometrical shadow coincides with a bright or dark fringe; its intensity is exactly $I_0/4$.''')

P('p.cu.op.24', 2023, 'CU Nov', 96, 5, '3.1', ['c.3.1.2'],
  "Width of Central Maximum in Single-Slit",
  r'''<p>Explain why the central maximum in a single slit diffraction has twice the width of secondary maxima.</p>''',
  r'''Find the angular positions of the first and higher minima from $a\sin\theta = m\lambda$.''',
  r'''<p><b>Intensity in single-slit diffraction:</b> For a slit of width $a$ illuminated by wavelength $\lambda$, the intensity distribution is:
$$I(\theta) = I_0\left(\frac{\sin\beta}{\beta}\right)^2,\qquad \beta = \frac{\pi a\sin\theta}{\lambda}$$
Minima occur where $\sin\beta = 0$ with $\beta \neq 0$:
$$a\sin\theta = m\lambda\quad (m = \pm 1, \pm 2, \pm 3, \ldots)$$
For small diffraction angles ($\sin\theta \simeq \theta$):
$$\theta_m = \frac{m\lambda}{a}$$
<b>Angular width of the central maximum:</b> The central maximum is bounded by the first minima on either side of the centre ($m = -1$ and $m = +1$):
$$\theta_{-1} = -\frac{\lambda}{a},\qquad \theta_{+1} = +\frac{\lambda}{a}$$
Therefore, the total angular width of the central maximum is:
$$2\theta_1 = \theta_{+1} - \theta_{-1} = \frac{\lambda}{a} - \left(-\frac{\lambda}{a}\right) = \frac{2\lambda}{a}$$
<b>Angular width of secondary maxima:</b> Any secondary maximum of order $m$ lies between the $m$-th and $(m+1)$-th minima on the same side of the centre:
$$\Delta\theta_{\text{sec}} = \theta_{m+1} - \theta_m = \frac{(m+1)\lambda}{a} - \frac{m\lambda}{a} = \frac{\lambda}{a}$$
<b>Conclusion:</b> Since the central maximum spans between the $+1$ and $-1$ order minima across the origin, its angular width $2\lambda/a$ (and linear width $2\lambda D/a$ on a screen at distance $D$) is exactly twice the width $\lambda/a$ of any secondary maximum.</p>''',
  trap=r'''Confusing half-angular width $\lambda/a$ with the full angular width $2\lambda/a$.''')

P('p.cu.op.25', 2021, 'CU Nov', 98, 5, '3.4', ['c.3.4.2'],
  "Rectilinear Propagation via Fresnel Zones",
  r'''<p>Explain the rectilinear propagation of light using Fresnel's half-period zones.</p>''',
  r'''Sum the alternating contributions of half-period zones to show that the net amplitude is half of the first zone.''',
  r'''<p><b>Fresnel's half-period zone construction:</b> Consider a plane wavefront $WW'$ of monochromatic light of wavelength $\lambda$. Let $P$ be an observation point at distance $b$ along the normal passing through the pole $O$ of the wavefront. The wavefront is divided into concentric annular zones such that the distance from $P$ to the outer boundary of the $n$-th zone is $b + n\lambda/2$.</p>
<p>Each zone has equal area $\pi b\lambda$. Because wavelets from consecutive zones differ in path by $\lambda/2$, their phases differ by $\pi$. Thus, the zone amplitudes $A_1, A_2, A_3, \ldots$ alternate in sign:
$$A = A_1 - A_2 + A_3 - A_4 + \ldots$$
Because of the obliquity factor $(1 + \cos\theta)$ and slight increase in distance, the amplitudes decrease continuously and smoothly: $A_1 > A_2 > A_3 > \ldots$</p>
<p>We can rewrite the series as:
$$A = \frac{A_1}{2} + \left(\frac{A_1}{2} - A_2 + \frac{A_3}{2}\right) + \left(\frac{A_3}{2} - A_4 + \frac{A_5}{2}\right) + \ldots$$
Since each term is very nearly the arithmetic mean of its neighbours, $A_n \approx (A_{n-1} + A_{n+1})/2$, each bracketed term vanishes, leaving:
$$A \simeq \frac{A_1}{2}$$
<b>Rectilinear propagation:</b> The resultant amplitude at $P$ produced by the entire unobstructed wavefront is equal to half the amplitude contributed by the first central zone alone. Since the radius of the first zone $r_1 = \sqrt{b\lambda}$ is exceedingly small (fractions of a millimetre for visible light), light reaching $P$ is effectively confined to a tiny area immediately around the line joining source, pole, and $P$. Any obstacle larger than this small zone casts a distinct shadow, explaining why light appears to travel in straight lines.</p>''',
  trap=r'''Assuming the total amplitude is the direct sum of all zones without accounting for the alternating phase difference of $\pi$.''')

P('p.cu.op.26', 2021, 'CU Nov', 111, 10, '3.3', ['c.3.3.1', 'c.3.3.2'],
  "Theory of Plane Transmission Grating",
  r'''<p>Describe the theory of plane transmission grating. Obtain the grating equation and show how it is used to measure the wavelength of spectral lines.</p>''',
  r'''Model the grating as an array of $N$ parallel slits, derive the principal maxima condition $d\sin\theta = m\lambda$, and explain spectrometer measurement.''',
  r'''<p><b>Theory:</b> A plane transmission diffraction grating consists of an array of $N$ parallel, equally spaced slits, each of transparent width $a$ separated by opaque spaces of width $b$. The grating element is $d = a + b$.</p>
<p>When illuminated normally by a plane monochromatic wave of wavelength $\lambda$, each slit produces a diffracted beam with electric field amplitude $E_1 = E_0(\sin\beta/\beta)$, where $\beta = (\pi a\sin\theta)/\lambda$. The path difference between corresponding points of adjacent slits is $d\sin\theta$, giving a constant phase step between successive slits:
$$2\gamma = \frac{2\pi}{\lambda}d\sin\theta$$
The resultant complex field from $N$ slits is the sum of a geometric series:
$$E(\theta) = E_0\left(\frac{\sin\beta}{\beta}\right)\sum_{k=0}^{N-1} e^{2ik\gamma} = E_0\left(\frac{\sin\beta}{\beta}\right) e^{i(N-1)\gamma}\,\frac{\sin N\gamma}{\sin\gamma}$$
Taking the square of the modulus yields the intensity distribution:
$$I(\theta) = I_0\left(\frac{\sin\beta}{\beta}\right)^2 \left(\frac{\sin N\gamma}{\sin\gamma}\right)^2$$
<b>Grating equation for principal maxima:</b> Principal maxima occur where all $N$ wavelets arrive in phase, i.e., $\gamma = m\pi$:
$$\gamma = \frac{\pi d\sin\theta}{\lambda} = m\pi \implies d\sin\theta_m = m\lambda\quad (m = 0, \pm 1, \pm 2, \ldots)$$
At these angles, $\lim_{\gamma\to m\pi}(\sin N\gamma/\sin\gamma) = N$, so $I = N^2 I_0(\sin\beta/\beta)^2$. For oblique incidence at angle $i$, the equation generalizes to $d(\sin\theta \pm \sin i) = m\lambda$.</p>
<p><b>Measuring wavelength of spectral lines:</b>
<ol>
<li>A spectrometer is set up with its collimator and telescope focused for parallel rays. The grating is mounted on the prism table and adjusted for normal incidence using the reflection method.</li>
<li>The telescope is aligned with the undeviated central beam ($m = 0, \theta = 0$) where all wavelengths coincide.</li>
<li>The telescope is rotated to one side to view a spectral line in order $m$ ($m = 1$ or $2$) and its angular position $\theta_{\text{left}}$ is recorded. It is then turned to the other side to record $\theta_{\text{right}}$ for the same order.</li>
<li>The angle of diffraction is $\theta = |\theta_{\text{left}} - \theta_{\text{right}}|/2$.</li>
<li>With grating element $d = 1/N'$ (where $N'$ is lines per unit length), the wavelength is calculated as:
$$\lambda = \frac{d\sin\theta}{m}$$</li>
</ol></p>''',
  trap=r'''Using $m_{\max} > d/\lambda$; the maximum observable order is strictly limited by $\sin\theta \le 1$.''')


# ── Topic 3: Polarization of Light ─────────────────────────────────────────────

P('p.cu.op.27', 2021, 'CU Nov', 121, 2, '4.1', ['c.4.1.1'],
  "Polarization of Light",
  r'''<p>Define polarization of light. Which properties of light does it prove?</p>''',
  r'''Define restriction of the electric field vibrations to a single plane and state that only transverse waves can be polarized.''',
  r'''<p><b>Polarization of light:</b> Polarization is the phenomenon in which the transverse vibrations of the electric field vector $\mathbf{E}$ of an optical wave are confined to a single plane or have a definite, fixed orientation perpendicular to the direction of propagation.</p>
<p><b>Property proved:</b> Polarization conclusively proves that light waves are <b>transverse</b> electromagnetic waves ($\mathbf{E} \perp \mathbf{B} \perp \mathbf{k}$). Longitudinal waves (such as sound waves) vibrate parallel to their direction of propagation and exhibit complete cylindrical symmetry about the ray direction, making them fundamentally incapable of being polarized.</p>''',
  trap=r'''Claiming polarization proves that light is an electromagnetic wave; it proves the wave is transverse, not specifically electromagnetic.''')

P('p.cu.op.28', 2022, 'CU Nov', 122, 2, '4.2', ['c.4.2.1'],
  "Brewster's Law",
  r'''<p>State Brewster's Law and show that when light is incident at polarizing angle, the reflected and refracted rays are perpendicular.</p>''',
  r'''State $\tan\theta_B = n$ and use Snell's law to show $\theta_B + \theta_r = 90^\circ$.''',
  r'''<p><b>Brewster's law:</b> When unpolarized light is incident on a transparent dielectric medium at a specific angle called the polarizing angle $\theta_B$, the reflected light is completely plane-polarized with its electric vector oscillating perpendicular to the plane of incidence. The refractive index $n$ of the medium is:
$$\tan\theta_B = n$$
<b>Perpendicularity proof:</b> By Snell's law at angle of incidence $\theta_B$ and angle of refraction $\theta_r$:
$$\sin\theta_B = n\sin\theta_r$$
Substituting $n = \tan\theta_B = \dfrac{\sin\theta_B}{\cos\theta_B}$:
$$\sin\theta_B = \frac{\sin\theta_B}{\cos\theta_B}\sin\theta_r \implies \cos\theta_B = \sin\theta_r = \cos(90^\circ - \theta_r)$$
Since both angles are acute:
$$\theta_B = 90^\circ - \theta_r \implies \theta_B + \theta_r = 90^\circ$$
The angle between the reflected ray and refracted ray is $180^\circ - (\theta_B + \theta_r) = 180^\circ - 90^\circ = 90^\circ$. Hence, the reflected and refracted rays are mutually perpendicular.</p>''',
  trap=r'''Measuring $\theta_B$ from the surface rather than from the normal.''')

P('p.cu.op.29', 2024, 'CU Nov', 123, 2, '4.3', ['c.4.3.1'],
  "Malus's Law",
  r'''<p>State Malus's Law and write its equation.</p>''',
  r'''Resolve the incident amplitude along the analyzer axis and square the resulting component.''',
  r'''<p><b>Malus's law:</b> When completely plane-polarized light of intensity $I_0$ is incident on an analyzer, the transmitted intensity $I$ varies directly as the square of the cosine of the angle $\theta$ between the transmission axis of the analyzer and the plane of vibration of the incident light.</p>
<p><b>Equation:</b>
$$I = I_0\cos^2\theta$$
If the incident light is unpolarized with intensity $I_u$, the intensity transmitted by an ideal polarizer is $I_0 = I_u/2$, and through a subsequent analyzer at angle $\theta$ it is $I = \tfrac{1}{2}I_u\cos^2\theta$. Transmission is maximum ($I_0$) when $\theta = 0^\circ$ or $180^\circ$ (parallel axes), and zero when $\theta = 90^\circ$ or $270^\circ$ (crossed axes).</p>''',
  trap=r'''Applying $I_0\cos^2\theta$ directly to unpolarized light instead of first halving the intensity.''')

P('p.cu.op.30', 2025, 'CU Nov', 124, 2, '4.6', ['c.4.6.3'],
  "Specific Rotation",
  r'''<p>Define specific rotation and write its unit.</p>''',
  r'''Define specific rotation as optical rotation per unit path length per unit concentration.''',
  r'''<p><b>Specific rotation:</b> The specific rotation $[\alpha]_\lambda^T$ of an optically active substance in solution at a given temperature $T$ and wavelength $\lambda$ is defined as the optical rotation in degrees produced by a column of solution of length 1 decimetre ($1\text{ dm} = 10\text{ cm}$) having a concentration of 1 gram per cubic centimetre ($1\text{ g cm}^{-3}$).</p>
<p>The formula is:
$$[\alpha]_\lambda^T = \frac{\theta}{l \cdot c}$$
where $\theta$ is the angle of rotation in degrees, $l$ is the tube length in decimetres ($\text{dm}$), and $c$ is the concentration in $\text{g cm}^{-3}$.</p>
<p><b>Unit:</b> The unit is $\text{deg}\cdot\text{dm}^{-1}\cdot(\text{g/cm}^3)^{-1}$, often written as $\text{deg}\cdot\text{dm}^{-1}\cdot\text{g}^{-1}\text{cm}^3$.</p>''',
  trap=r'''Expressing tube length $l$ in centimetres rather than decimetres in the standard definition formula.''')

P('p.cu.op.31', 2023, 'CU Nov', 126, 2, '4.4', ['c.4.4.1'],
  "Optic Axis of a Crystal",
  r'''<p>What is optic axis of a crystal?</p>''',
  r'''Define it as a direction (not a single line) of optical symmetry where ordinary and extraordinary rays travel with identical speed.''',
  r'''<p>The <b>optic axis</b> of a doubly refracting crystal is a specific direction (not a single line) through the crystal along which an unpolarized ray of light propagates without undergoing double refraction.</p>
<p>Along this direction, the ordinary ray (o-ray) and extraordinary ray (e-ray) travel with the exact same velocity ($v_o = v_e = c/n_o$), and the crystal behaves as if it were optically isotropic. Any line parallel to this direction is an optic axis.</p>''',
  trap=r'''Calling the optic axis a specific geometric line rather than a direction of propagation.''')

P('p.cu.op.32', 2023, 'CU Nov', 151, 5, '4.4', ['c.4.4.1', 'c.4.4.2'],
  "Double Refraction and Huygens' Theory",
  r'''<p>What is double refraction? Explain the Huygens' theory of double refraction in uniaxial crystals.</p>''',
  r'''Define birefringence and describe Huygens' spherical o-wavefront and ellipsoidal e-wavefront touching at the optic axis.''',
  r'''<p><b>Double refraction (birefringence):</b> When an unpolarized beam of light enters an anisotropic crystal (such as calcite or quartz), it splits into two refracted rays polarized in mutually perpendicular planes:
<ul>
<li><b>Ordinary (o) ray:</b> Obeys Snell's law of refraction; travels with the same velocity $v_o = c/n_o$ in all directions; electric vibrations are perpendicular to the principal section.</li>
<li><b>Extraordinary (e) ray:</b> Does not in general obey Snell's law; its velocity $v_e$ depends on direction; electric vibrations lie in the principal section.</li>
</ul></p>
<p><b>Huygens' theory of double refraction:</b> Huygens extended his wavelet principle to explain double refraction in uniaxial crystals by postulating that every point on a wavefront inside the crystal acts as the source of two secondary wave surfaces:
<ol>
<li>A <b>spherical wave surface</b> of radius $v_o t$, corresponding to the ordinary ray which travels at speed $v_o$ in all directions.</li>
<li>An <b>ellipsoid of revolution</b> with semi-axes $v_e t$ (perpendicular to the optic axis) and $v_o t$ (along the optic axis), corresponding to the extraordinary ray whose speed varies with direction.</li>
</ol>
The sphere and the ellipsoid touch each other at two points along the direction of the optic axis, because along the optic axis both rays have the same speed $v_o$.</p>
<p><b>Positive and negative crystals:</b>
<ul>
<li><b>Negative crystal (e.g., calcite):</b> $v_e > v_o$ ($n_e < n_o$), so the ellipsoid encloses the sphere.</li>
<li><b>Positive crystal (e.g., quartz):</b> $v_e < v_o$ ($n_e > n_o$), so the sphere encloses the ellipsoid.</li>
</ul>
The envelope (common tangent plane) to these wavelets gives the new o- and e-wavefronts, and lines from the source point to the points of tangency give the o- and e-rays.</p>''',
  trap=r'''Assuming the e-ray always points along the wave normal; the ray points from the source to the tangency point on the ellipsoid.''')

P('p.cu.op.33', 2020, 'CU Nov', 152, 5, '4.2', ['c.4.2.3'],
  "Nicol Prism",
  r'''<p>Describe the construction and working of a Nicol prism. How is it used as a polarizer and analyzer?</p>''',
  r'''Explain the cut calcite rhomb cemented with Canada balsam, total internal reflection of the o-ray, and Malus variation.''',
  r'''<p><b>Construction:</b> A Nicol prism is made from a calcite crystal rhomb whose length is about three times its breadth. The end faces are ground down to modify the corner angles from $71^\circ$ and $109^\circ$ to $68^\circ$ and $112^\circ$. The crystal is cut into two halves along a plane perpendicular to both the principal section and the ground end faces, polished, and cemented back together with an optical layer of Canada balsam ($n_b = 1.55$). The side faces are blackened.</p>
<p><b>Working:</b> The refractive indices for sodium light are:
$$n_o = 1.658,\qquad n_b = 1.55,\qquad n_e = 1.486$$
When an unpolarized ray enters the prism parallel to its long axis, it splits into an o-ray and an e-ray:
<ul>
<li>For the <b>o-ray</b>, Canada balsam is optically rarer ($n_o = 1.658 > n_b = 1.55$). The critical angle at the calcite-balsam interface is $\theta_c = \sin^{-1}(1.55/1.658) \approx 69^\circ$. The prism geometry ensures the o-ray strikes the balsam layer at an angle $> 69^\circ$, undergoing total internal reflection and being absorbed by the blackened side face.</li>
<li>For the <b>e-ray</b>, Canada balsam is optically denser ($n_e = 1.486 < n_b = 1.55$). Total reflection cannot occur; the e-ray is transmitted through the balsam and emerges as completely linearly polarized light with vibrations in the principal section.</li>
</ul></p>
<p><b>Used as a polarizer and analyzer:</b>
<ul>
<li><b>As a polarizer:</b> When unpolarized light passes through a Nicol prism, it emerges linearly polarized.</li>
<li><b>As an analyzer:</b> When a second Nicol prism is placed in the path of the polarized beam, rotating it varies the transmitted intensity according to Malus's law $I = I_0\cos^2\theta$. When the prisms have parallel principal sections ($\theta = 0^\circ$), intensity is maximum; when their principal sections are crossed ($\theta = 90^\circ$), total extinction occurs.</li>
</ul></p>''',
  trap=r'''Stating that the e-ray also undergoes total internal reflection; for the e-ray, balsam is denser so TIR is impossible.''')

P('p.cu.op.34', 2022, 'CU Nov', 153, 5, '4.6', ['c.4.6.3'],
  "Optical Activity and Fresnel's Theory",
  r'''<p>What is optical activity? Explain Fresnel's theory of optical rotation.</p>''',
  r'''Resolve linear light into left and right circular components that travel at different speeds through the medium.''',
  r'''<p><b>Optical activity:</b> Optical activity (rotatory polarization) is the property of certain substances (such as quartz crystals, sugar solutions, and turpentine) to rotate the plane of vibration of linearly polarized light passing through them.</p>
<p><b>Fresnel's theory of optical rotation:</b> Fresnel explained optical activity based on the following postulates:
<ol>
<li>Linearly polarized light can be mathematically resolved into two coherent, opposite circularly polarized components rotating with identical angular frequency: a right-handed circularly polarized (RHCP) component and a left-handed circularly polarized (LHCP) component of equal amplitude $a/2$.</li>
<li>In an optically active medium, the speeds of propagation for RHCP and LHCP light are different ($v_R \neq v_L$), corresponding to different refractive indices $n_R \neq n_L$.</li>
</ol>
<b>Mathematical expression:</b> Let the incident linearly polarized light travel along the $z$-axis with its vibration along the $x$-axis. After traversing a thickness $l$ of the medium, the optical paths of the two circular components are $n_R l$ and $n_L l$. The resulting phase difference $\delta$ between the two circular components upon emergence is:
$$\delta = \frac{2\pi}{\lambda}(n_L - n_R)l$$
Recombining the two circular components with this phase difference produces a resultant linear vibration whose plane has rotated through an angle $\theta$:
$$\theta = \frac{\delta}{2} = \frac{\pi l}{\lambda}(n_L - n_R)$$
If $n_L > n_R$ ($v_R > v_L$), $\theta$ is positive and the rotation is clockwise (dextrorotatory); if $n_R > n_L$ ($v_L > v_R$), the rotation is anticlockwise (laevorotatory).</p>''',
  trap=r'''Forgetting the factor of $1/2$ between relative phase change $\delta$ and the angle of rotation of the plane of vibration $\theta = \delta/2$.''')

P('p.cu.op.35', 2021, 'CU Nov', 155, 5, '4.6', ['c.4.6.1', 'c.4.6.2'],
  "Production and Detection of Polarized Light",
  r'''<p>Explain how circularly and elliptically polarized light are produced and detected.</p>''',
  r'''Use a polarizer and QWP at specific orientations for production, and an analyzer plus QWP for detection.''',
  r'''<p><b>1. Production:</b>
<ul>
<li><b>Circularly polarized light:</b> Unpolarized light is first passed through a Nicol prism (polarizer) to produce plane-polarized light. This light is then directed normally onto a Quarter-Wave Plate (QWP) oriented such that its optic axis makes an angle of $45^\circ$ with the plane of vibration. The incident amplitude resolves into equal o- and e-components ($E_o = E_e$), and the QWP introduces a phase difference of $\delta = \pi/2$, producing circularly polarized light.</li>
<li><b>Elliptically polarized light:</b> Plane-polarized light is directed normally onto a QWP with its optic axis oriented at an angle $\theta$ other than $0^\circ, 45^\circ$, or $90^\circ$ to the plane of vibration. The components have unequal amplitudes ($E_e \neq E_o$) and phase difference $\pi/2$, emerging as elliptically polarized light.</li>
</ul></p>
<p><b>2. Detection:</b>
<ol>
<li><b>First test (analyzer alone):</b> Rotate an analyzer through $180^\circ$:
<ul>
<li>If intensity remains strictly constant, the light is either <i>unpolarized</i> or <i>circularly polarized</i>.</li>
<li>If intensity varies between a maximum and a non-zero minimum, the light is either <i>elliptically polarized</i> or <i>partially polarized</i>.</li>
</ul></li>
<li><b>Second test (inserting a QWP before the analyzer):</b>
<ul>
<li><b>To distinguish circular from unpolarized:</b> Insert a QWP in the path. A circularly polarized beam is converted by the QWP into plane-polarized light, which upon rotating the analyzer shows complete extinction (two zeros) at $90^\circ$ positions. Unpolarized light remains unpolarized and shows constant intensity.</li>
<li><b>To distinguish elliptical from partial:</b> Place the QWP with its optic axis parallel to the direction of maximum intensity. Elliptical light is converted into plane-polarized light and shows two complete extinctions on rotating the analyzer, whereas partially polarized light still shows a non-zero minimum.</li>
</ul></li>
</ol></p>''',
  trap=r'''Assuming an analyzer alone can distinguish between circularly polarized light and unpolarized light; a QWP is required.''')

P('p.cu.op.36', 2021, 'CU Nov', 158, 5, '4.5', ['c.4.5.2', 'c.4.1.2'],
  "Circular Polarization via QWP at 45°",
  r'''<p>Prove that when a plane polarized light is incident on a quarter wave plate such that its vibration direction makes 45 degrees with the optic axis, the emergent light is circularly polarized.</p>''',
  r'''Resolve the incident field along and perpendicular to the optic axis, apply the $\pi/2$ phase retardation, and eliminate $t$.''',
  r'''<p><b>Incident wave:</b> Let linearly polarized light of amplitude $E$ and angular frequency $\omega$ fall normally on a quarter-wave plate (QWP). Let the optic axis of the plate lie along the $x$-axis, and the incident electric vibration make an angle $\theta = 45^\circ$ with the $x$-axis.</p>
<p>At the entrance face ($z = 0$), the electric field resolves into components along the optic axis (extraordinary component) and perpendicular to it (ordinary component):
$$E_x = E\cos 45^\circ\cos\omega t = \frac{E}{\sqrt{2}}\cos\omega t$$
$$E_y = E\sin 45^\circ\cos\omega t = \frac{E}{\sqrt{2}}\cos\omega t$$
Both components enter the plate in phase with equal amplitudes $a = b = E/\sqrt{2}$.</p>
<p><b>Action of the QWP:</b> By definition, a quarter-wave plate introduces an optical path difference of $\lambda/4$, corresponding to a phase difference:
$$\delta = \frac{2\pi}{\lambda}\left(\frac{\lambda}{4}\right) = \frac{\pi}{2}$$
Upon emerging from the plate, a phase lag of $\pi/2$ is introduced between the two components:
$$E_x = a\cos\omega t$$
$$E_y = a\cos\big(\omega t - \tfrac{\pi}{2}\big) = a\sin\omega t$$
<b>Elimination of time $t$:</b>
Squaring and adding the two equations:
$$E_x^2 + E_y^2 = a^2\cos^2\omega t + a^2\sin^2\omega t = a^2$$
which is the standard equation of a circle of radius $a = E/\sqrt{2}$.</p>
<p>Hence, the tip of the electric field vector traces out a circle in the $xy$-plane at constant angular speed $\omega$, proving that the emergent beam is circularly polarized.</p>''',
  trap=r'''Setting the angle to an arbitrary $\theta \neq 45^\circ$; circular polarization requires equal amplitudes ($E_x = E_y$), which occurs only at $\theta = 45^\circ$.''')

P('p.cu.op.37', 2023, 'CU Nov', 160, 5, '4.4', ['c.4.4.1', 'c.4.4.2'],
  "Positive and Negative Uniaxial Crystals",
  r'''<p>Explain the difference between positive and negative uniaxial crystals with examples.</p>''',
  r'''Compare the refractive indices $n_e, n_o$, wave velocities $v_e, v_o$, and the relative positions of Huygens wave surfaces.''',
  r'''<p>Uniaxial crystals are categorized into <b>positive</b> and <b>negative</b> based on the relative velocities and refractive indices of the ordinary and extraordinary waves:</p>
<p><b>1. Negative uniaxial crystals:</b>
<ul>
<li>The extraordinary ray travels faster than the ordinary ray in all directions except along the optic axis: $v_e > v_o$.</li>
<li>Consequently, the extraordinary refractive index is less than the ordinary refractive index:
$$n_e < n_o$$</li>
<li><b>Huygens wave surfaces:</b> The spherical o-wave surface of radius $v_o t$ lies entirely <i>inside</i> the ellipsoidal e-wave surface (major axis $v_e t$), touching at the two points on the optic axis.</li>
<li><b>Example:</b> Calcite ($n_o = 1.658, n_e = 1.486$), tourmaline, ruby.</li>
</ul></p>
<p><b>2. Positive uniaxial crystals:</b>
<ul>
<li>The ordinary ray travels faster than the extraordinary ray in all directions except along the optic axis: $v_o > v_e$.</li>
<li>Consequently, the extraordinary refractive index is greater than the ordinary refractive index:
$$n_e > n_o$$</li>
<li><b>Huygens wave surfaces:</b> The ellipsoidal e-wave surface lies entirely <i>inside</i> the spherical o-wave surface, touching at the two points on the optic axis.</li>
<li><b>Example:</b> Quartz ($n_o = 1.544, n_e = 1.553$), ice, rutile.</li>
</ul></p>''',
  trap=r'''Reversing the velocity relation: higher refractive index implies lower wave velocity ($v = c/n$).''')

P('p.cu.op.38', 2022, 'CU Nov', 163, 5, '4.5', ['c.4.5.1'],
  "Quarter- and Half-Wave Plates",
  r'''<p>Explain how Quarter Wave Plates (QWP) and Half Wave Plates (HWP) are constructed. Derive the formulas for their minimum thickness.</p>''',
  r'''Show how cutting a crystal plate parallel to the optic axis creates an optical path difference $(|n_o - n_e|)t$.''',
  r'''<p><b>Construction:</b> A retardation plate is made by cutting a slice of a doubly refracting uniaxial crystal (such as quartz or calcite) with its refracting faces strictly <b>parallel to the optic axis</b>. When linearly polarized light falls normally on the plate, it splits into o- and e-components that travel along the same physical path through thickness $t$ but with different velocities ($v_o = c/n_o$ and $v_e = c/n_e$).</p>
<p><b>Optical path and phase difference:</b>
The optical paths traversed by the two components across thickness $t$ are $n_o t$ and $n_e t$. The resulting optical path difference is:
$$\Delta = |n_o - n_e|t$$
and the corresponding phase difference $\delta$ is:
$$\delta = \frac{2\pi}{\lambda}|n_o - n_e|t$$
<b>1. Quarter-Wave Plate (QWP):</b> A plate that introduces a path difference of $\lambda/4$ (or phase difference of $\pi/2$) between the o- and e-rays:
$$|n_o - n_e|t = \frac{\lambda}{4} \implies t_{\text{QWP}} = \frac{\lambda}{4|n_o - n_e|}$$
For a positive crystal ($n_e > n_o$), $t = \lambda/[4(n_e - n_o)]$; for a negative crystal ($n_o > n_e$), $t = \lambda/[4(n_o - n_e)]$.</p>
<p><b>2. Half-Wave Plate (HWP):</b> A plate that introduces a path difference of $\lambda/2$ (or phase difference of $\pi$) between the o- and e-rays:
$$|n_o - n_e|t = \frac{\lambda}{2} \implies t_{\text{HWP}} = \frac{\lambda}{2|n_o - n_e|}$$
A half-wave plate rotates the plane of vibration of incident linearly polarized light through an angle $2\theta$, where $\theta$ is the angle between the incident vibration and the optic axis.</p>''',
  trap=r'''Using a plate cut perpendicular to the optic axis; light propagating along the optic axis experiences no double refraction.''')
