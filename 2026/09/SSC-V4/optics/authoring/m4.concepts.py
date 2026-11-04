# Module IV — Polarisation.  Subrahmanyam, Brij Lal & Avadhanulu (Book 2) §20.1–20.9, 20.17–20.20.

# ── 4.1  Introduction ──────────────────────────────────────────────────────────
C('c.4.1.1', '4.1', 'definition', "Polarisation: Transverse Waves and States of Polarisation",
  "Light is a transverse wave; the direction of E fixes its polarisation — linear, circular, elliptical, unpolarised or partial.",
  r'''Light is a <b>transverse</b> electromagnetic wave: $\mathbf E\perp\mathbf B\perp\mathbf k$. The way $\mathbf E$ moves in the plane perpendicular to $\mathbf k$ defines the state of polarisation:
<ul><li><b>Linear (plane) polarised</b>: $\mathbf E$ oscillates along a fixed line (the <i>plane of vibration</i>; the plane containing $\mathbf B$ and $\mathbf k$ is the <i>plane of polarisation</i>).</li>
<li><b>Circular</b>: $\mathbf E$ has constant length and rotates uniformly.</li>
<li><b>Elliptical</b>: the tip of $\mathbf E$ traces an ellipse.</li>
<li><b>Unpolarised (natural)</b>: $\mathbf E$ points randomly, varying in time faster than a detector can follow.</li>
<li><b>Partially polarised</b>: a mixture of unpolarised and polarised light.</li></ul>
That light can be polarised proves it is transverse: longitudinal waves cannot be.''',
  r'''A stretched rope waved through a picket fence passes only if it vibrates in the plane of the slots: a picture of a polariser. Sound cannot be polarised because it vibrates along its direction of travel. Ordinary sources emit from independent atoms, each with its own direction, so their sum is unpolarised.''',
  needs=[],
  traps=[r'Confusing the plane of vibration ($\mathbf E$) with the plane of polarisation (containing $\mathbf B$): historically the plane of polarisation is defined perpendicular to the vibration plane of $\mathbf E$.',
         r'Treating unpolarised light as a "circular" mix. Unpolarised light has no fixed relation between its components.'],
  cards=[('Why does polarisation prove light is a transverse wave?',
          r'Only transverse vibrations (perpendicular to the propagation direction) can have a preferred orientation; longitudinal waves cannot be polarised.'),
         ('List the states of polarisation.',
          r'Linear, circular, elliptical, unpolarised (natural) and partially polarised.')])

C('c.4.1.2', '4.1', 'theorem', "Superposition of Two Perpendicular Vibrations: the Polarisation Ellipse",
  "x = a cos ωt, y = b cos(ωt + δ) trace x²/a² + y²/b² − 2xy cos δ/(ab) = sin²δ; δ = 0, π/2, π give line, ellipse/circle, line.",
  r'''Two perpendicular oscillations $x=a\cos\omega t$ and $y=b\cos(\omega t+\delta)$ combine to the ellipse
$$\boxed{\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}-\frac{2xy}{ab}\cos\delta=\sin^{2}\delta}$$
<ul><li>$\delta=0$ or $\pi$: a straight line $y=\pm(b/a)x$ (linear polarisation).</li>
<li>$\delta=\pm\pi/2$: the ellipse $x^2/a^2+y^2/b^2=1$; with $a=b$ a <b>circle</b>.</li>
<li>other $\delta$: an inclined ellipse.</li></ul>
$\delta=+\pi/2$ or $-\pi/2$ fixes the sense of rotation (left- or right-handed).''',
  r'''This is the Lissajous figure of two equal frequencies. The phase difference $\delta$ between the two components is the only dial that turns a line into an ellipse and into a circle: everything about wave plates and the analysis of polarised light is a way of producing or measuring $\delta$.''',
  needs=['c.4.1.1', 'c.2.1.1'],
  traps=[r'Assuming $\delta=\pi/2$ always gives a circle. It gives a circle only when $a=b$.'],
  cards=[('Write the general polarisation ellipse for $x=a\\cos\\omega t$, $y=b\\cos(\\omega t+\\delta)$.',
          r'$\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}-\dfrac{2xy}{ab}\cos\delta=\sin^2\delta$.'),
         ('What phase difference and amplitudes give circular polarisation?',
          r'$\delta=\pm\pi/2$ and $a=b$.')],
  proof=dict(
      idea="Eliminate $t$ between the two oscillations.",
      why="The curve traced by $(x,y)$ is the relation between $x$ and $y$ with time removed.",
      rungs=[
        ("Expand $y$.",
         r'$$\frac yb=\cos\omega t\cos\delta-\sin\omega t\sin\delta,\qquad\frac xa=\cos\omega t$$',
         "$\\cos\\omega t=x/a$, $\\sin\\omega t=\\sqrt{1-x^2/a^2}$."),
        ("Isolate $\\sin\\omega t\\sin\\delta$.",
         r'$$\frac yb-\frac xa\cos\delta=-\sin\omega t\sin\delta$$',
         "Move the $\\cos$ term."),
        ("Square and use $\\sin^2\\omega t=1-x^2/a^2$.",
         r'$$\Big(\frac yb-\frac xa\cos\delta\Big)^{2}=\Big(1-\frac{x^{2}}{a^{2}}\Big)\sin^{2}\delta$$',
         "Eliminates time."),
        ("Expand and collect.",
         r'$$\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}-\frac{2xy}{ab}\cos\delta=\sin^{2}\delta$$',
         "The polarisation ellipse; the cases follow by inspection.")],
      ends="The polarisation ellipse and its special cases."))

# ── 4.2  Production of linearly polarised light ────────────────────────────────
C('c.4.2.1', '4.2', 'theorem', "Polarisation by Reflection: Brewster's Law",
  "At the polarising angle θ_B (or i_p), tan θ_B = tan i_p = n and the reflected and refracted rays are at 90°; the reflected light is fully polarised.",
  r'''Light incident at the <b>polarising (Brewster) angle</b> $\theta_B$ (also denoted $i_p$ or $\theta_p$) on a transparent medium of refractive index $n$ is reflected as completely plane-polarised light, with $\mathbf E$ perpendicular to the plane of incidence (the reflected light has no component in the plane of incidence). This occurs when
$$\boxed{\tan\theta_B=\tan i_p=n},\qquad\text{and then }\ \theta_B+\theta_r=90^\circ$$
(the reflected and refracted rays are perpendicular). For an interface between media of indices $n_1$ and $n_2$, $\tan\theta_p=n_2/n_1$. For glass in air ($n=1.5$), $\theta_B\approx56.3^\circ$.''',
  r'''The reflected light comes from the oscillating charges in the second medium, and they radiate as dipoles: none is emitted along the dipole's axis. When the refracted ray is perpendicular to the reflected direction, the component of $\mathbf E$ in the plane of incidence would have to make dipoles that vibrate along the reflected ray — and dipoles cannot radiate along their own axis.''',
  needs=['c.1.1.3', 'c.4.1.1'],
  traps=[r'Saying <i>all</i> the light is reflected at $\theta_B$. Only the perpendicular component is reflected (a few percent for glass), and the reflected beam is weak but fully polarised.',
         r'Reversing $\tan\theta_B=n$ to $\tan\theta_B=1/n$: the angle is measured from the normal in the <i>lower</i>-index medium.'],
  cards=[("State Brewster's law and the relation between the reflected and refracted rays at $\\theta_B$.",
          r'$\tan\theta_B=\tan i_p=n$; the reflected and refracted rays are at $90^\circ$ to each other.'),
         ('Find the Brewster angle for water ($n=1.33$).',
          r'$\theta_B=\tan^{-1}1.33\approx53.1^\circ$.')],
  proof=dict(
      idea="Impose the perpendicularity of the reflected and refracted rays and use Snell's law.",
      why="The dipole argument says the reflected in-plane component vanishes exactly when the two rays are at $90^\\circ$.",
      rungs=[
        ("Reflected angle equals $\\theta_B$; the refracted angle is $\\theta_r$; the perpendicular condition is",
         r'$$\theta_B+90^{\circ}+\theta_r=180^{\circ}\;\Rightarrow\;\theta_r=90^{\circ}-\theta_B$$',
         "Angles on a straight line at the point of incidence."),
        ("Snell's law from air into the medium.",
         r'$$\sin\theta_B=n\sin\theta_r=n\sin(90^{\circ}-\theta_B)=n\cos\theta_B$$',
         "Substitute $\\theta_r$."),
        ("Divide.",
         r'$$\tan\theta_B=n$$',
         "Brewster's law.")],
      ends="Brewster's law."))

C('c.4.2.2', '4.2', 'definition', "Other Methods of Producing Polarised Light",
  "Reflection, a pile of plates, dichroism (Polaroid), scattering and double refraction each produce linearly polarised light.",
  r'''<ul><li><b>Reflection</b> at $\theta_B$ (weak, fully polarised).</li>
<li><b>Pile of plates</b>: several glass plates at $\theta_B$; each reflects part of the perpendicular component, so the transmitted beam becomes progressively more polarised (with $E$ in the plane of incidence).</li>
<li><b>Dichroism</b>: some crystals or oriented polymer molecules (tourmaline, <i>Polaroid</i>) absorb one component of $\mathbf E$ strongly and pass the perpendicular one.</li>
<li><b>Scattering</b>: light scattered at $90^\circ$ is plane-polarised (blue sky).</li>
<li><b>Double refraction</b> through calcite or a Nicol prism splits light into two orthogonally polarised beams.</li></ul>''',
  r'''Every method breaks the symmetry between two perpendicular directions: reflection and scattering through geometry, dichroism through absorption, double refraction through a difference in refractive index.''',
  needs=['c.4.2.1'],
  traps=[r'Forgetting that a pile of plates gives polarised <i>transmitted</i> light (in the plane of incidence) as a by-product of removing the perpendicular component by reflection.'],
  cards=[('Name four ways of producing linearly polarised light.',
          r'Reflection at the Brewster angle, a pile of plates, dichroic absorption (Polaroid, tourmaline), scattering, double refraction (Nicol prism).')])

C('c.4.2.3', '4.2', 'theorem', "The Nicol Prism",
  "A calcite crystal cut and cemented with Canada balsam (n = 1.55) removes the ordinary ray by total internal reflection, leaving the e-ray polarised.",
  r'''A <b>Nicol prism</b> is a calcite rhombohedron cut in two along a diagonal plane and cemented with Canada balsam of index $n_b=1.55$. Since
$$n_e=1.486<n_b=1.55<n_o=1.658,$$
the ordinary ray meets the balsam layer from a denser medium at an angle exceeding the critical angle $\theta_c=\sin^{-1}(n_b/n_o)\approx69^{\circ}$ and is totally reflected to the blackened side face; the extraordinary ray, for which the balsam is <i>denser</i>, is transmitted. The emerging beam is plane-polarised with vibrations in the principal section. The <b>field of view</b> is limited by the range of angles for which the o-ray is still totally reflected and the e-ray still enters.''',
  r'''Balsam sits between the two indices of calcite, so it is a "denser" medium for the e-ray (which passes) and a "rarer" one for the o-ray (which reflects). A single crystal makes two beams and a smart cement throws one away — a polariser without absorption.''',
  needs=['c.4.4.2', 'c.4.2.2'],
  traps=[r'Saying both rays are totally reflected. Only the o-ray is; for the e-ray $n_e<n_b$ there is no total reflection.'],
  cards=[('Explain how a Nicol prism removes the ordinary ray.',
          r'Canada balsam ($n=1.55$) is rarer than calcite for the o-ray ($n_o=1.658$), so the o-ray is totally reflected beyond $\theta_c\approx69^\circ$; for the e-ray ($n_e=1.486$) balsam is denser and it is transmitted.')])

# ── 4.3  Polariser and analyser ────────────────────────────────────────────────
C('c.4.3.1', '4.3', 'theorem', "Malus' Law",
  "Plane-polarised light of intensity I₀ through an analyser at angle θ to its axis gives I = I₀ cos²θ.",
  r'''If linearly polarised light of intensity $I_0$ falls on an analyser whose transmission axis makes an angle $\theta$ with the plane of vibration, the transmitted intensity is
$$\boxed{I=I_0\cos^{2}\theta}.$$
Unpolarised light of intensity $I_u$ through an ideal polariser emerges with $I_u/2$; a second (analyser) then gives $\tfrac12I_u\cos^{2}\theta$.''',
  r'''Only the component of $\mathbf E$ along the transmission axis, $E_0\cos\theta$, gets through, and intensity goes as $E^2$. At $\theta=90^\circ$ (crossed) nothing is transmitted; rotating the analyser through $360^\circ$ gives two maxima and two extinctions.''',
  needs=['c.4.1.1'],
  traps=[r'Applying $I_0\cos^2\theta$ to unpolarised light before the polariser: unpolarised light halves in intensity, whatever the axis angle.',
         r'Mixing amplitude and intensity: the amplitude falls as $\cos\theta$, the intensity as $\cos^2\theta$.'],
  cards=[("State Malus' law.",
          r'$I=I_0\cos^2\theta$ for plane-polarised light of intensity $I_0$ through an analyser at angle $\theta$.'),
         ('Unpolarised light of intensity $I_0$ passes through two polarisers at $60^\\circ$. Find the emerging intensity.',
          r'$I=\tfrac12I_0\cos^260^\circ=I_0/8$.'),
         ('At what angles between the axes does the emerging intensity vanish?',
          r'At $\theta=90^\circ,270^\circ$ (crossed), by $\cos\theta=0$.')],
  proof=dict(
      idea="Resolve the electric field along and across the analyser axis.",
      why="The analyser passes only the component of $\\mathbf E$ along its transmission axis.",
      rungs=[
        ("Let the incident vibration be $E_0\\cos\\omega t$ along $\\hat p$, and the analyser axis $\\hat a$ at angle $\\theta$ to $\\hat p$.",
         r'$$E_\parallel=E_0\cos\theta\ \cos\omega t$$',
         "Component along $\\hat a$."),
        ("The perpendicular component $E_0\\sin\\theta\\cos\\omega t$ is blocked. Intensity goes as the square.",
         r'$$I\propto E_\parallel^{2}=E_0^{2}\cos^{2}\theta\cos^{2}\omega t$$',
         "Time-average $\\cos^2\\omega t=\\tfrac12$ in both $I$ and $I_0$."),
        ("Divide by the incident intensity.",
         r'$$I=I_0\cos^{2}\theta$$',
         "Malus' law.")],
      ends="Malus' law."))

C('c.4.3.2', '4.3', 'technique', "Partially Polarised Light and Multi-Polariser Problems",
  "Degree of polarisation P = (I_max − I_min)/(I_max + I_min); chain Malus' law polariser by polariser.",
  r'''<b>Degree of polarisation.</b> Rotating an analyser in partially polarised light gives $I_{\max}$ and $I_{\min}$; then
$$P=\frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}}.$$
$P=1$ for plane-polarised, $0$ for unpolarised (or circular) light.
<b>Chain rule of polarisers.</b> Start with $I_u/2$ after the first polariser (if the light is unpolarised), then multiply by $\cos^2$ of each successive angle <i>between neighbouring axes</i>. Three polarisers with axes at $0^\circ$, $45^\circ$, $90^\circ$ pass $I_u/8$, even though the first and last are crossed.''',
  r'''Each polariser resets the polarisation direction to its own axis, so only the angle between <i>neighbouring</i> axes matters. Inserting a middle polariser between two crossed ones allows light through, because it re-tilts the polarisation.''',
  needs=['c.4.3.1'],
  traps=[r'Using the angle between the first and last polariser in a chain instead of between consecutive ones.'],
  cards=[('Define the degree of polarisation.',
          r'$P=(I_{\max}-I_{\min})/(I_{\max}+I_{\min})$.'),
         ('Three polarisers at $0^\\circ,45^\\circ,90^\\circ$ are illuminated by unpolarised light $I_u$. Find the output.',
          r'$I=\tfrac12I_u\cos^245^\circ\cos^245^\circ=I_u/8$.')])

# ── 4.4  Double refraction and Huygens' explanation ────────────────────────────
C('c.4.4.1', '4.4', 'definition', "Double Refraction in Uniaxial Crystals",
  "A calcite crystal splits a ray into an ordinary (o) ray and an extraordinary (e) ray, polarised at right angles.",
  r'''In an anisotropic crystal such as calcite or quartz, an unpolarised ray splits into two refracted rays:
<ul><li>the <b>ordinary (o) ray</b> obeys Snell's law with index $n_o$; the same speed $v_o=c/n_o$ in every direction; vibrations <i>perpendicular</i> to the principal section;</li>
<li>the <b>extraordinary (e) ray</b> does not obey Snell's law in general; its speed depends on direction; vibrations <i>in</i> the principal section.</li></ul>
A <b>uniaxial</b> crystal has one direction — the <b>optic axis</b> — along which both rays travel with the same speed; the <b>principal section</b> is the plane containing the optic axis and the normal to the surface. Calcite is <b>negative</b> ($n_e<n_o$: 1.486 vs 1.658), quartz is <b>positive</b> ($n_e>n_o$: 1.553 vs 1.544).''',
  r'''The atoms of a crystal are bound differently along different directions, so the electron's response — and hence the refractive index — depends on which way $\mathbf E$ vibrates. The o-ray always vibrates perpendicular to the optic axis, so it sees one index; the e-ray sees a mix, changing with direction.''',
  needs=['c.4.1.1', 'c.1.1.3'],
  traps=[r'Saying the e-ray "never" obeys Snell\'s law. It does when it propagates perpendicular to the axis; it just uses $n_e$ there.',
         r'Assuming the two rays travel at different speeds along the optic axis: along the axis both have speed $c/n_o$.'],
  cards=[('Define the optic axis and the principal section.',
          r'Optic axis: the direction along which o- and e-rays travel with the same speed. Principal section: the plane containing the optic axis and the normal to the surface.'),
         ('What are the polarisations of the o- and e-rays?',
          r'o-ray: vibrations perpendicular to the principal section; e-ray: vibrations in the principal section.'),
         ('Is calcite a positive or negative crystal and why?',
          r'Negative: $n_e=1.486<n_o=1.658$, so the e-wave is faster than the o-wave.')])

C('c.4.4.2', '4.4', 'theorem', "Huygens' Explanation of Double Refraction",
  "Inside a uniaxial crystal each point emits a spherical o-wavelet and an ellipsoidal e-wavelet touching at the optic axis; the tangent planes give the two rays.",
  r'''Huygens: from each point of the wavefront in the crystal, there are <b>two</b> secondary wavefronts:
<ul><li>a <b>sphere</b> of radius $v_ot$ (the o-wave);</li>
<li>an <b>ellipsoid of revolution</b> about the optic axis, with semi-axes $v_et$ (perpendicular to the axis) and $v_ot$ (along it), so the two surfaces touch at the optic axis.</li></ul>
The common tangent planes to the sphere and to the ellipsoid give the o- and e-wavefronts; the rays run from the source point to the points of tangency. For a <b>negative</b> crystal ($v_e>v_o$) the ellipsoid encloses the sphere; for a <b>positive</b> crystal ($v_e<v_o$) the sphere encloses the ellipsoid. The e-ray is in general not along the wave normal.''',
  r'''The sphere is what an ordinary isotropic medium would give. The ellipsoid is what you get when the speed changes with direction; the spheres and ellipsoid must touch on the optic axis because along the axis there is no distinction. Where the tangent plane touches the ellipsoid off-axis, the ray direction (from the centre to the tangent point) differs from the normal — the source of the e-ray's odd behaviour.''',
  needs=['c.4.4.1'],
  traps=[r'Forgetting that the e-ray direction is from the source point to the <i>tangency point</i>, not along the normal to the wavefront.',
         r'Reversing which surface is outside for the two crystal types.'],
  cards=[("Describe Huygens' wavefronts in a uniaxial crystal.",
          r'A sphere (o-wave, speed $v_o$) and an ellipsoid of revolution (e-wave, speed $v_e$ perpendicular to the axis, $v_o$ along it) touching on the optic axis.'),
         ('Which surface encloses the other in calcite?',
          r'The ellipsoid encloses the sphere (calcite is negative: $v_e>v_o$).')])

# ── 4.5  Wave plates ───────────────────────────────────────────────────────────
C('c.4.5.1', '4.5', 'theorem', "Retardation (Wave) Plates: Quarter- and Half-Wave",
  "A plate cut parallel to the optic axis introduces a phase δ = 2π(n_o − n_e)t/λ; quarter-wave t = λ/(4|n_o−n_e|), half-wave t = λ/(2|n_o−n_e|).",
  r'''A crystal plate of thickness $t$ cut <b>parallel to the optic axis</b> transmits normally-incident light as two components (o and e) travelling with different speeds and emerging with phase difference
$$\delta=\frac{2\pi}{\lambda}(n_o-n_e)\,t.$$
A <b>quarter-wave plate (QWP)</b> has $\delta=\pi/2$ (path difference $\lambda/4$):
$$t=\frac{\lambda}{4|n_o-n_e|};$$
a <b>half-wave plate (HWP)</b> has $\delta=\pi$ ($t=\lambda/(2|n_o-n_e|)$). For quartz ($n_e-n_o=0.009$) at $589$ nm, $t_{\rm QWP}\approx16\ \mu\text{m}$ (for the lowest order). A plate is exact for one wavelength.''',
  r'''The two components of $\mathbf E$ (along and across the optic axis) are two perpendicular vibrations in step at the entrance. One travels faster, so they emerge with phase difference $\delta$ — exactly the knob that changes the polarisation ellipse. The plate is a $\delta$-generator.''',
  needs=['c.4.4.1', 'c.4.1.2'],
  traps=[r'Assuming a QWP works for every colour. $t$ is fixed by the chosen $\lambda$; for another wavelength $\delta$ differs and the result is elliptical.',
         r'Using the plate at oblique incidence, where the geometry changes the path difference.'],
  cards=[('Give the thickness of a quarter-wave and a half-wave plate.',
          r'$t=\lambda/(4|n_o-n_e|)$ and $t=\lambda/(2|n_o-n_e|)$.'),
         ('Find the minimum thickness of a quartz QWP for $\\lambda=589$ nm ($n_e-n_o=0.0091$).',
          r'$t=589/(4\times0.0091)\approx16.2\ \mu\text{m}$.')],
  proof=dict(
      idea="The two components travel at different speeds through the plate; compare their optical paths.",
      why="Phase difference is $2\\pi/\\lambda$ times the optical-path difference.",
      rungs=[
        ("Optical paths of the two components through a plate of thickness $t$.",
         r'$$L_o=n_ot,\qquad L_e=n_et$$',
         "Normal incidence, cut parallel to the axis."),
        ("Path difference.",
         r'$$\Delta=(n_o-n_e)t$$',
         "Sign tells which component leads."),
        ("Phase difference and the special cases $\\delta=\\pi/2$, $\\pi$.",
         r'$$\delta=\frac{2\pi}{\lambda}(n_o-n_e)t\;\Rightarrow\;t_{\rm QWP}=\frac{\lambda}{4|n_o-n_e|},\ t_{\rm HWP}=\frac{\lambda}{2|n_o-n_e|}$$',
         "For the lowest order plate.")],
      ends="The wave-plate thickness formulae."))

C('c.4.5.2', '4.5', 'theorem', "Action of the QWP and HWP on Polarised Light",
  "A QWP at 45° turns linear light into circular; a HWP turns linear light at θ to the axis into linear light at −θ (rotation by 2θ).",
  r'''Let plane-polarised light make an angle $\theta$ with the optic axis of the plate, giving components $E_e=E\cos\theta$ (along the axis) and $E_o=E\sin\theta$ (across it).
<ul><li><b>QWP</b> ($\delta=\pi/2$): the emerging light is <i>elliptical</i> with axes along and across the optic axis; it is <b>circular</b> for $\theta=45^\circ$ ($E_e=E_o$) and linear for $\theta=0,90^\circ$.</li>
<li><b>HWP</b> ($\delta=\pi$): the emerging light is <i>linear</i>, its plane rotated to $-\theta$, i.e. through $2\theta$ from the incident plane; for right circular input it gives left circular.</li></ul>''',
  r'''In a QWP the ellipse $x^2/a^2+y^2/b^2-\dots=\sin^2\delta$ collapses to the axis-aligned ellipse at $\delta=\pi/2$; with equal amplitudes it is a circle. A half-wave shifts one component by $\pi$, i.e. flips its sign — which mirrors the polarisation direction in the optic axis.''',
  needs=['c.4.5.1', 'c.4.1.2'],
  traps=[r'Expecting circular light from a QWP at any angle. The input must be at $45^\circ$ to the axis so that both components have equal amplitude.'],
  cards=[('What does a half-wave plate do to plane-polarised light at angle $\\theta$ to its axis?',
          r'It outputs plane-polarised light at $-\theta$, i.e. rotated by $2\theta$.'),
         ('How is circularly polarised light produced from linear light?',
          r'By a quarter-wave plate with its axis at $45^\circ$ to the plane of vibration.')],
  proof=dict(
      idea="Apply the phase $\\delta$ to the two components and read off the ellipse.",
      why="A phase difference between two perpendicular components of equal frequency produces the polarisation ellipse.",
      rungs=[
        ("Take the plate's optic axis along $x$. Components at entry:",
         r'$$E_x=E\cos\theta\cos\omega t,\qquad E_y=E\sin\theta\cos\omega t$$',
         "In phase."),
        ("After the plate the $y$-component lags by $\\delta$.",
         r'$$E_x=E\cos\theta\cos\omega t,\qquad E_y=E\sin\theta\cos(\omega t-\delta)$$',
         "Use the ellipse result with $a=E\\cos\\theta$, $b=E\\sin\\theta$."),
        ("QWP: $\\delta=\\pi/2$, so $E_y=E\\sin\\theta\\sin\\omega t$.",
         r'$$\frac{E_x^{2}}{E^{2}\cos^{2}\theta}+\frac{E_y^{2}}{E^{2}\sin^{2}\theta}=1$$',
         "Circle when $\\theta=45^{\\circ}$."),
        ("HWP: $\\delta=\\pi$, so $E_y\\to-E_y$.",
         r'$$\mathbf E:(\cos\theta,\sin\theta)\to(\cos\theta,-\sin\theta)$$',
         "The plane of vibration is reflected in the optic axis: rotated by $2\\theta$.")],
      ends="QWP and HWP actions."))

# ── 4.6  Production and analysis of polarised light ────────────────────────────
C('c.4.6.1', '4.6', 'technique', "Producing Plane, Circular and Elliptical Light",
  "Polariser → plane; polariser + QWP at 45° → circular; polariser + QWP at any other angle → elliptical.",
  r'''<ul><li><b>Plane-polarised</b>: unpolarised light through a polariser.</li>
<li><b>Circular</b>: plane-polarised light through a QWP whose axis is at $45^\circ$ to the plane of vibration.</li>
<li><b>Elliptical</b>: plane-polarised light through a QWP whose axis is at an angle other than $0^\circ,45^\circ,90^\circ$ (axes of the ellipse along and across the optic axis, with axial ratio $\tan\theta$).</li></ul>
The handedness (right or left) is set by whether the fast axis is at $+45^\circ$ or $-45^\circ$.''',
  r'''All three come from the same two elements: a polariser to make a definite starting line, and a QWP to open the line into an ellipse. The angle between the two decides how open.''',
  needs=['c.4.5.2'],
  traps=[r'Using a HWP to make circular light: it only rotates the plane.'],
  cards=[('How do you produce circularly polarised light?',
          r'Plane-polarised light through a QWP with the axis at $45^\circ$ to the vibration plane.'),
         ('How do you produce elliptically polarised light?',
          r'Plane-polarised light through a QWP with its axis at an angle other than $0$, $45^\circ$, $90^\circ$ to the vibration plane.')])

C('c.4.6.2', '4.6', 'technique', "Analysing an Unknown Beam",
  "Rotate an analyser, then insert a QWP: the behaviour of the intensity tells plane, circular, elliptical, unpolarised or partial light apart.",
  r'''<b>Step 1 — analyser alone.</b> Rotate it through $180^\circ$.
<ul><li>Intensity goes to <i>zero</i> twice: plane-polarised.</li>
<li>Intensity constant: unpolarised or circular.</li>
<li>Intensity varies but never reaches zero: elliptical, partial (or a mix).</li></ul>
<b>Step 2 — QWP in front of the analyser</b> (axis along the position of maximum or minimum from step 1).
<ul><li>Constant beforehand, now <i>two zeros</i>: <b>circular</b> (the QWP made it linear). Still constant: unpolarised.</li>
<li>Varying beforehand, now <i>two zeros</i>: <b>elliptical</b> (axes found from the maximum). Still no zero: partial polarised (elliptical + unpolarised = partial).</li></ul>''',
  r'''Circular light has no preferred direction and unpolarised light has none, so the analyser alone cannot tell them apart. But a QWP turns circular into linear (with a definite plane) while leaving unpolarised light alone: that is the second test.''',
  needs=['c.4.3.2', 'c.4.6.1'],
  traps=[r'Concluding "unpolarised" from a constant intensity with no further test: circular light also gives a constant intensity.'],
  cards=[('Analyser alone shows constant intensity. How do you decide between unpolarised and circular light?',
          r'Insert a QWP before the analyser: circular light becomes linear (two extinctions), unpolarised light stays constant.'),
         ('An analyser shows a maximum and a nonzero minimum. What might the light be, and how do you distinguish?',
          r'Elliptical or partially polarised. A QWP with axis along the maximum turns elliptical light into linear (extinction), but partial light keeps a nonzero minimum.')])

C('c.4.6.3', '4.6', 'theorem', "Optical Activity and Specific Rotation",
  "Substances rotate the plane of polarisation by θ = (πl/λ)(n_L − n_R); for solutions [α] = θ/(lc).",
  r'''<b>Optical activity</b> (rotatory polarisation) is the rotation of the plane of polarisation by certain substances (such as quartz crystals, turpentine, and sugar solutions).
Fresnel explained this phenomenon by demonstrating that linearly polarised light behaves as a superposition of right-circularly polarised (RCP) and left-circularly polarised (LCP) waves propagating with distinct refractive indices $n_R$ and $n_L$. After traversing a distance $l$, the plane of polarisation rotates through
$$\boxed{\theta = \frac{\pi l}{\lambda_0}(n_L - n_R)}.$$
If $n_L > n_R$, the rotation is clockwise looking toward the source (<b>dextrorotatory</b> or right-handed, e.g. turpentine with $\theta = +37^\circ$ for $l = 10\text{ cm}$); if $n_L < n_R$, the rotation is anticlockwise (<b>laevorotatory</b> or left-handed). In quartz along the optic axis, $n_L - n_R \approx 7\times 10^{-5}$, rotating sodium/orange light ($\lambda_0 = 6000\text{ \AA}$) by $\approx 21.0^\circ$ ($21^\circ 7'$) per millimetre ($l = 0.1\text{ cm}$).
For an optically active solution, the <b>specific rotation</b> is
$$[\alpha]_\lambda^T = \frac{\theta}{l\,c},$$
where $\theta$ is the angle of rotation in degrees, $l$ is the length in decimetres ($1\text{ dm} = 10\text{ cm}$), and $c$ is the concentration in $\text{g cm}^{-3}$.''',
  r'''Plane-polarised light is the vector sum of two counter-rotating circular components of equal amplitude. In an optically isotropic medium both components travel at the same speed and their sum remains on the original line. In an optically active medium one circular mode travels faster than the other, introducing a continuous phase difference that rotates the axis along which the two circular vectors meet, turning the plane of polarisation steadily as the light advances.''',
  needs=['c.4.1.2'],
  traps=[r'Confusing decimetres with centimetres in the specific rotation formula $[\alpha] = \theta/(lc)$: the standard length unit is decimetres ($1\text{ dm} = 10\text{ cm}$).',
         r'Forgetting that the rotation direction (dextro vs laevo) is defined looking toward the source of light.',
         r'Omitting the factor of $1/2$ between the total relative phase difference $\delta = \frac{2\pi l}{\lambda_0}(n_L - n_R)$ and the geometric rotation of the plane of vibration $\theta = \delta/2$.'],
  cards=[('Define specific rotation and state its formula and units.',
          r'$[\alpha]_\lambda^T = \frac{\theta}{l \cdot c}$, where $\theta$ is rotation in degrees, $l$ is path length in decimetres ($\text{dm}$), and $c$ is concentration in $\text{g cm}^{-3}$. Unit: $\text{deg}\cdot\text{dm}^{-1}\cdot\text{g}^{-1}\text{cm}^3$.'),
         ('State Fresnel\'s formula for the angle of optical rotation in terms of circular refractive indices.',
          r'$\theta = \frac{\pi l}{\lambda_0}(n_L - n_R)$; dextrorotatory if $n_L > n_R$ and laevorotatory if $n_L < n_R$.'),
         ('Why does linearly polarised light rotate in an optically active medium according to Fresnel?',
          r'Linear light resolves into equal RCP and LCP components; since $n_L \neq n_R$, they travel at different speeds and accumulate a relative phase difference, rotating their resultant vibration plane.'),
         (r'For quartz along the optic axis, $n_L - n_R \approx 7\times 10^{-5}$ at $\lambda_0 = 6000\text{ \AA}$. What is the rotation per millimetre?',
          r'$\theta = \frac{\pi \times 10^{-3}}{6\times 10^{-7}}\times 7\times 10^{-5}\text{ rad} \approx 0.3665\text{ rad} \approx 21.0^\circ$ ($21^\circ 7\'$).')],
  proof=dict(
      idea=r"Decompose incident linear light into counter-rotating circular modes with wavenumbers $k_R$ and $k_L$, propagate through distance $z$, and recombine.",
      why=r"The modes of an optically active medium are circularly polarised states; their unequal speeds produce a relative phase delay that rotates the resultant linear plane.",
      rungs=[
        (r"Decompose incident linearly polarised light along the $x$-axis into right- and left-circularly polarised components of equal amplitude $E_0$. In the medium they propagate with wavenumbers $k_R = \omega n_R/c$ and $k_L = \omega n_L/c$.",
         r'$$\begin{aligned} E_{xR} &= E_0\cos(k_R z - \omega t), & E_{yR} &= E_0\sin(k_R z - \omega t) \\ E_{xL} &= E_0\cos(k_L z - \omega t), & E_{yL} &= -E_0\sin(k_L z - \omega t) \end{aligned}$$',
         "Counter-rotating circular components."),
        ("Superpose the $x$-components using the cosine sum-to-product identity.",
         r'$$E_x = E_{xR} + E_{xL} = 2E_0\cos\Big[\frac{1}{2}(k_L - k_R)z\Big]\cos\Big[\omega t - \frac{1}{2}(k_R + k_L)z\Big]$$',
         "Modulated along $x$ with mean phase."),
        ("Superpose the $y$-components using the sine difference identity.",
         r'$$E_y = E_{yR} + E_{yL} = 2E_0\sin\Big[\frac{1}{2}(k_L - k_R)z\Big]\cos\Big[\omega t - \frac{1}{2}(k_R + k_L)z\Big]$$',
         "Modulated along $y$ with identical mean time phase."),
        (r"Both components share the exact same time phase $\cos[\omega t - \bar{k} z]$, showing the emergent wave is linearly polarised, with its plane rotated by angle $\theta(z)$.",
         r'$$\tan\theta = \frac{E_y}{E_x} = \tan\Big[\frac{1}{2}(k_L - k_R)z\Big]\;\implies\;\theta = \frac{1}{2}(k_L - k_R)z = \frac{\pi z}{\lambda_0}(n_L - n_R)$$',
         "Fresnel rotation formula.")],
      ends="Fresnel's formula for optical rotation."))


