// Expanded notes for the original Module I topics: a worked numeric example and extra FAQ pairs for each.
// Every number here was recomputed before it was written. The generator appends `example` after the
// concept's intuition and adds the FAQ pairs after its traps.
const r = String.raw;

export default {
  "c.1.1.1": {
    example: r`Take 10 cm of air ($n=1$) followed by 10 cm of glass ($n=1.5$). The optical path is $1\times10+1.5\times10=25$ cm, although the geometric length is only 20 cm.`,
    faq: [
      [r`Why integrate $n\,ds$ rather than $ds$?`, r`Light's time is proportional to the optical path, so nature makes that quantity stationary, not the geometric length.`],
      [r`Can the optical path be shorter than the geometric length?`, r`No. For $n\ge1$ the optical path is at least the geometric length, with equality in vacuum.`],
    ],
  },
  "c.1.1.2": {
    example: r`A source 3 cm above a plane mirror and a point 4 cm above it, 7 cm apart horizontally. Stationarity puts the reflection point 3 cm from the foot of the source. Both legs then make $\sin\theta=1/\sqrt2$ with the normal, so $\theta_i=\theta_r=45^\circ$.`,
    faq: [
      [r`Does the reflection point depend on the heights?`, r`Yes, the point moves with the heights, but the angle rule $\theta_i=\theta_r$ holds for every choice.`],
      [r`Why are both angles on the same side of the normal?`, r`The reflected ray returns into the same medium, so both angles are measured from the normal on the same side.`],
    ],
  },
  "c.1.1.3": {
    example: r`Light from air ($n_1=1$) hits water ($n_2=1.33$) at $\theta_1=45^\circ$. Then $\sin\theta_2=\sin45^\circ/1.33\approx0.532$, so $\theta_2\approx32.1^\circ$.`,
    faq: [
      [r`What is the critical angle?`, r`Going from a denser to a rarer medium, $\sin\theta_c=n_2/n_1$. Beyond $\theta_c$ Snell's law has no solution, and the ray is totally reflected.`],
      [r`Does Snell's law depend on wavelength?`, r`The indices depend on wavelength (dispersion), so the bending does too. The law keeps the same form for each colour.`],
    ],
  },
  "c.1.1.4": {
    example: r`An ellipse with $a=5$ cm and foci 6 cm apart (so the centre-to-focus distance is $c=3$ cm and $b=4$ cm). For every point $P$ on it, $F_1P+PF_2=2a=10$ cm, so every reflected path has the same optical length.`,
    faq: [
      [r`What makes an image perfect?`, r`Every ray from an object point meets at one image point with equal optical path, so the image is sharp for all rays.`],
      [r`Why do ordinary spherical surfaces fail?`, r`Their path differences appear at order $h^4$, which is spherical aberration. See Axial Point Image.`],
    ],
  },
  "c.1.1.5": {
    example: r`Near $x=0$, take $L(x)=x^2$. Then $L'(0)=0$ and $L''(0)=2>0$, so the stationary point is a minimum. Take $L(x)=x^3$ instead: $L'(0)=0$ and $L''(0)=0$, the point is an inflection, and $L$ changes sign.`,
    faq: [
      [r`Why does the second derivative matter?`, r`When several paths compete, it tells which stationary path is a local minimum and which is not.`],
      [r`Is a zero first derivative always a stationary path?`, r`Yes. Stationary means the first derivative vanishes, whatever the second derivative is.`],
    ],
  },
  "c.1.2.1": {
    example: r`An object 20 cm in front of a surface has $u=-20$ cm. A real image 30 cm behind it has $v=+30$ cm. A virtual image 10 cm in front of it, on the object side, has $v=-10$ cm.`,
    faq: [
      [r`Why use one sign convention?`, r`One consistent rule covers every case, so a single formula works for real, virtual, converging and diverging systems.`],
      [r`Do all textbooks use the same signs?`, r`No. Check the convention before using a formula, because the same formula can change sign between books.`],
    ],
  },
  "c.1.2.2": {
    example: r`Air to glass ($n_2=1.5$), $R=20$ cm, object 40 cm in front: $\dfrac{1}{-40}+\dfrac{1.5}{v}=\dfrac{0.5}{20}$, so $\dfrac{1.5}{v}=0.05$ and $v=30$ cm.`,
    faq: [
      [r`Why are the terms weighted by the indices?`, r`Each leg of the optical path is weighted by its index, so the balance of the $h^2$ terms involves $n/$distance.`],
      [r`Does a mirror follow this formula?`, r`No. A mirror has its own relation, $1/u+1/v=2/R$, from the same stationarity argument with reflection.`],
    ],
  },
  "c.1.2.3": {
    example: r`Air ($n_1=1$) to glass ($n_2=1.5$), $R=30$ cm: $f_1=-\dfrac{n_1R}{n_2-n_1}=-60$ cm on the object side, and $f_2=\dfrac{n_2R}{n_2-n_1}=90$ cm on the image side.`,
    faq: [
      [r`Why are the two focal lengths different?`, r`The two media have different indices, and the focal lengths scale with $n_1$ and $n_2$.`],
      [r`Which focal length is the surface's focal length?`, r`Both belong to the surface. $f_2$ is the image-side one, and the sign of $f_1$ shows that it lies on the object side.`],
    ],
  },
  "c.1.2.4": {
    example: r`A concave mirror of focal length 10 cm and an object 30 cm away: $\dfrac{1}{30}+\dfrac{1}{v}=\dfrac{1}{10}$ gives $v=15$ cm in front, a real image with magnification $-0.5$, inverted and half size.`,
    faq: [
      [r`Why is the focal length half the radius?`, r`Parallel rays near the axis reflect through the point halfway to the centre, which is the paraxial result.`],
      [r`Why is a real image from a concave mirror inverted?`, r`Rays from an object beyond $f$ cross after reflection, so the image is upside down.`],
    ],
  },
  "c.1.2.5": {
    example: r`Air to glass, $R=30$ cm, object 60 cm in front: the image forms at $v=45$ cm. The magnification is $m=\dfrac{n_1v}{n_2u}=\dfrac{45}{1.5\times(-60)}=-0.5$, so the image is inverted and half size.`,
    faq: [
      [r`Why is the magnification $n_1v/(n_2u)$?`, r`The refracted ray's slope changes by the index ratio, so the height ratio includes $n_1/n_2$. For a thin lens $n_1=n_2$ and it reduces to $v/u$.`],
      [r`Why does the sign of $m$ matter?`, r`A negative $m$ marks an inverted image, which is what a real image from a convex surface usually is.`],
    ],
  },
  "c.1.3.1": {
    example: r`A plano-convex glass lens ($n=1.5$) with $R_1=15$ cm and a plane second face ($1/R_2=0$): $\dfrac{1}{f}=0.5\times\dfrac{1}{15}$, so $f=30$ cm.`,
    faq: [
      [r`Why is $(n-1)$ equal to 0.5 here?`, r`The bracket is $n_{lens}/n_{medium}-1$. In air with $n=1.5$ it is $0.5$.`],
      [r`Does the formula also cover a diverging lens?`, r`Yes. A biconcave lens has $R_1<0$ and $R_2>0$, which makes $1/f$ negative, so the lens diverges.`],
    ],
  },
  "c.1.3.2": {
    example: r`A converging lens with $f=10$ cm and an object 15 cm in front: $\dfrac{1}{v}-\dfrac{1}{-15}=\dfrac{1}{10}$ gives $v=30$ cm. The magnification is $m=v/u=-2$, a real, inverted image twice the size.`,
    faq: [
      [r`Why define the focal points by an image at infinity?`, r`It fixes $f$ unambiguously. Object and image positions then follow from one thin-lens formula.`],
      [r`Are the two foci the same distance from the lens?`, r`In air, yes. Both equal $f$, measured from the optical centre.`],
    ],
  },
  "c.1.3.3": {
    example: r`Lenses $f_1=+10$ cm and $f_2=-20$ cm, separated by $d=5$ cm: $\dfrac{1}{F}=\dfrac{1}{10}-\dfrac{1}{20}+\dfrac{5}{200}=0.075$, so $F\approx13.3$ cm.`,
    faq: [
      [r`Can two thin lenses act as a telescope?`, r`Yes. When $d=f_1+f_2$, parallel light entering the system leaves parallel, which is an afocal system.`],
      [r`Why does the second lens see a different object?`, r`It sees the image formed by the first lens, so its object distance is set by the first lens's image.`],
    ],
  },
  "c.1.3.4": {
    example: r`A converging lens with $f=10$ cm and a 4 cm object 15 cm away: the image forms at $v=30$ cm and is 8 cm tall, inverted. The three rays through the optical centre, parallel to the axis and through $F_1$ all meet at that image point.`,
    faq: [
      [r`Which two rays should I draw?`, r`Any two traced rays from the object tip will do. The three standard rays are the simplest, and they serve as a check.`],
      [r`What if the rays do not meet?`, r`They diverge after the lens. Extend them backwards to find a virtual image on the object side.`],
    ],
  },
  "c.1.4.1": {
    example: r`An object 15 cm from a lens with $f=10$ cm forms its image at 30 cm. Then $x_1=15-10=5$ cm and $x_2=30-10=20$ cm, and $x_1x_2=100=f^2$.`,
    faq: [
      [r`Are $x_1$ and $x_2$ always positive?`, r`In this example yes, because the object is outside $F_1$ and the image outside $F_2$. A virtual image changes the signs.`],
      [r`When is Newton's form easier than the lens formula?`, r`When the distances are already measured from the foci. Otherwise the thin-lens formula with $u$ and $v$ is quicker.`],
    ],
  },
  "c.1.4.2": {
    example: r`With $f=10$ cm and $x_1=5$ cm, $|m|=f/x_1=2$. With $x_2=20$ cm, $|m|=x_2/f=2$ as well. The image is inverted, so $m=-2$.`,
    faq: [
      [r`Why is the magnitude $f/x_1$?`, r`Newton's formula makes $f/x_1=x_2/f$. The minus sign records that a real image is inverted.`],
      [r`When is the image smaller than the object?`, r`When $x_1>f$, which means the object is beyond $2f$. Then $|m|<1$.`],
    ],
  },
  "c.1.4.3": {
    example: r`If $|m|=2$ and the object moves 0.1 cm towards the lens, the image moves about $m^2\times0.1=0.4$ cm. The longitudinal displacement is much larger than the transverse one.`,
    faq: [
      [r`Why are the two displacements in opposite directions?`, r`For a converging lens, moving the object towards $F_1$ moves the image away from the lens, so the displacements oppose each other.`],
      [r`Why is the longitudinal magnification $m^2$?`, r`Locally the image shift along the axis scales with the square of the transverse magnification, which is what the derivative of the lens formula gives.`],
    ],
  },
};
