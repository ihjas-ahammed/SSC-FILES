# Module I Extra — Fermat Stationarity and Second Derivative. Ghatak 6e §3.2.

C('c.1.1.5', '1.1', 'theorem', "Fermat Stationarity and the Second Derivative of Optical Path",
  "The second derivative d²L/dθ² = r²n₂(1/y − 1/y₀) shows Fermat's path is a minimum for y < y₀, maximum for y > y₀, and stationary at the image y = y₀.",
  r'''Fermat's principle states that the actual ray path between two points makes the optical path length stationary ($\delta L = 0$). For a spherical refracting surface of radius $r$ separating media $n_1$ and $n_2$, the second derivative of the optical path with respect to the paraxial ray angle $\theta$ is
$$\boxed{\frac{d^2 L}{d\theta^2} = r^2 n_2 \left(\frac{1}{y} - \frac{1}{y_0}\right)},$$
where $y_0$ is the paraxial image distance given by $\frac{n_2}{y_0} + \frac{n_1}{x} = \frac{n_2 - n_1}{r}$.
<ul>
<li>If $y < y_0$ (observation point before the image), $\frac{d^2 L}{d\theta^2} > 0$: the actual path is a <b>minimum</b>.</li>
<li>If $y > y_0$ (observation point beyond the image), $\frac{d^2 L}{d\theta^2} < 0$: the actual path is a <b>maximum</b>.</li>
<li>If $y = y_0$ (at the paraxial image), $\frac{d^2 L}{d\theta^2} = 0$: the optical path is <b>stationary</b> to second order, so all paraxial rays take exactly the same travel time.</li>
</ul>''',
  r'''Between conjugate image points, every ray takes the same time to travel from object to image. If you test an observation point placed before the focus, the straight axial path is quicker than any slanted alternative, making it a minimum. But if you test a point placed beyond the focus, where the rays have already crossed, the axial path is actually longer than the detour, making it a local maximum. At the exact image point, all nearby paths balance perfectly.''',
  needs=['c.1.1.1', 'c.1.2.1'],
  traps=[r'Assuming Fermat\'s principle always requires a minimum optical path: between conjugate foci all rays take identical time (stationarity), and beyond the focus the axial ray is a local maximum.'],
  cards=[(r'State the second derivative condition of Fermat\'s principle for a spherical refracting surface.',
          r'$\frac{d^2 L}{d\theta^2} = r^2 n_2 \left(\frac{1}{y} - \frac{1}{y_0}\right)$, where $y_0$ is the paraxial image distance.'),
         (r'When does the ray path between an object and an observation point correspond to a maximum optical path?',
          r'When the observation point lies beyond the paraxial image ($y > y_0$), so $\frac{d^2 L}{d\theta^2} < 0$.'),
         (r'What is the value of $d^2 L/d\theta^2$ at the paraxial image point and what does it signify?',
          r'Zero ($\frac{d^2 L}{d\theta^2} = 0$), signifying that the optical path is stationary and all paraxial rays take identical travel times.')],
  proof=dict(
      idea="Express optical path length as a function of the angle at the center of curvature and compute its first two derivatives.",
      why="The first derivative locates stationary ray paths, and the second derivative classifies whether the path is a minimum, maximum, or stationary.",
      rungs=[
        ("From the geometry of a spherical surface, express the optical path length $L = n_1 OS + n_2 SQ$ in the paraxial approximation $\\cos\\theta \\approx 1 - \\theta^2/2$.",
         r'$$L(\theta) = (n_1 x + n_2 y) + \frac{1}{2}r^2\Big(\frac{n_1}{x} + \frac{n_2}{y} - \frac{n_2 - n_1}{r}\Big)\theta^2$$',
         "Second-order expansion in the ray angle $\\theta$."),
        ("Differentiate with respect to $\\theta$ and set to zero to find the condition for an extremum.",
         r'$$\frac{dL}{d\theta} = r^2\Big(\frac{n_1}{x} + \frac{n_2}{y} - \frac{n_2 - n_1}{r}\Big)\theta = 0$$',
         "For an arbitrary off-axis ray $\\theta \\neq 0$, the bracket must vanish."),
        ("Define the paraxial image position $y_0$ where the bracket vanishes, and compute the second derivative.",
         r'$$\frac{n_2}{y_0} + \frac{n_1}{x} = \frac{n_2 - n_1}{r} \implies \frac{d^2 L}{d\theta^2} = r^2 n_2\Big(\frac{1}{y} - \frac{1}{y_0}\Big)$$',
         "Substitute $y_0$ into the second derivative."),
        ("Classify the extremum by the sign of the second derivative.",
         r'$$\frac{d^2 L}{d\theta^2} > 0 \ (y < y_0, \text{min}),\quad \frac{d^2 L}{d\theta^2} < 0 \ (y > y_0, \text{max}),\quad \frac{d^2 L}{d\theta^2} = 0 \ (y = y_0, \text{stat})$$',
         "Conjugate image points correspond to exact stationarity.")],
      ends="Fermat stationarity and second-derivative test."))

W('q.op.1.21', '1.1', 5,
  "Fermat Stationarity and Extrema for a Spherical Refracting Surface",
  "Ghatak 6e §3.2, Example 3.3",
  r'''Consider a spherical refracting surface $SPM$ of radius $r$ separating media of refractive indices $n_1$ and $n_2$, with center of curvature $C$. An axial object $O$ lies at distance $x$ in medium 1, and an observation point $Q$ lies at distance $y$ in medium 2 on the axis.
<p>(a) Calculate the optical path length $L = n_1 OS + n_2 SQ$ in terms of $x, y, r$ and the angle $\theta = \angle SCP$, assuming $\theta$ is small.</p>
<p>(b) Apply Fermat's principle to determine the ray path and deduce the paraxial image position $y_0$.</p>
<p>(c) Evaluate the second derivative $\frac{d^2 L}{d\theta^2}$ to determine whether the path $OPQ$ corresponds to minimum time, maximum time, or stationarity.</p>''',
  ['c.1.1.5'],
  r'''Use triangle cosine rules for $\triangle SOC$ and $\triangle SCQ$, expand $\cos\theta \approx 1 - \theta^2/2$ to second order in $\theta$, set the first derivative $dL/d\theta = 0$ to find the conjugate condition, and evaluate the sign of $d^2L/d\theta^2$.''',
  r'''<p><b>(a) Optical path length expansion:</b> From $\triangle SOC$, the distance $OS$ is given by</p>
$$OS = \left[(x+r)^2 + r^2 - 2(x+r)r\cos\theta\right]^{1/2}.$$
<p>Using the small-angle approximation $\cos\theta \approx 1 - \theta^2/2$ and expanding binomially:</p>
$$OS \approx x\left[1 + \frac{r(x+r)}{x^2}\theta^2\right]^{1/2} \approx x + \frac{1}{2}r^2\left(\frac{1}{x} + \frac{1}{r}\right)\theta^2.$$
<p>Similarly, from $\triangle SCQ$ for the distance $SQ$ in medium 2:</p>
$$SQ \approx y + \frac{1}{2}r^2\left(\frac{1}{y} - \frac{1}{r}\right)\theta^2.$$
<p>The total optical path length $L = n_1 OS + n_2 SQ$ is therefore</p>
$$L(\theta) = (n_1 x + n_2 y) + \frac{1}{2}r^2\left(\frac{n_1}{x} + \frac{n_2}{y} - \frac{n_2 - n_1}{r}\right)\theta^2.$$

<p><b>(b) Ray path and paraxial image:</b> By Fermat's principle, the optical path must be an extremum with respect to $\theta$:</p>
$$\frac{dL}{d\theta} = r^2\left(\frac{n_1}{x} + \frac{n_2}{y} - \frac{n_2 - n_1}{r}\right)\theta = 0.$$
<p>For an arbitrary ray ($\theta \neq 0$), the quantity in parentheses must vanish identically. Setting $y = y_0$ gives the paraxial image condition:</p>
$$\frac{n_2}{y_0} + \frac{n_1}{x} = \frac{n_2 - n_1}{r},$$
<p>which is the standard Cartesian refraction formula with object distance $u = -x$, image distance $v = +y_0$, and radius $R = +r$.</p>

<p><b>(c) Nature of the extremum:</b> The second derivative of the optical path with respect to $\theta$ is</p>
$$\frac{d^2 L}{d\theta^2} = r^2\left(\frac{n_1}{x} + \frac{n_2}{y} - \frac{n_2 - n_1}{r}\right) = r^2 n_2\left(\frac{1}{y} - \frac{1}{y_0}\right).$$
<ul>
<li>If $y < y_0$ (observation point $Q$ lies to the left of image $I$), $\frac{d^2 L}{d\theta^2} > 0$, so the ray path $OPQ$ corresponds to <b>minimum time</b> compared to adjacent paths.</li>
<li>If $y > y_0$ (observation point $Q$ lies to the right of image $I$), $\frac{d^2 L}{d\theta^2} < 0$, so the ray path $OPQ$ corresponds to <b>maximum time</b>.</li>
<li>If $y = y_0$ (observation point is the paraxial image $I$), $\frac{d^2 L}{d\theta^2} = 0$, so the extremum corresponds to <b>stationarity</b>: all paraxial rays take exactly the same travel time.</li>
</ul>''',
  r'''Assuming optical paths are always minima: between conjugate foci the time is stationary (all rays take equal time), and beyond the focus the axial ray is a local maximum.''')
