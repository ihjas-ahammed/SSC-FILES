// Pure, time-based animation helpers. Everything is a function of t (seconds),
// so any frame can be rendered in any order (scrubbing + offline export).

export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, k) => a + (b - a) * k;
export const inv = (a, b, x) => clamp((x - a) / (b - a));

export const ease = {
  linear: k => k,
  in: k => k * k * k,
  out: k => 1 - Math.pow(1 - k, 3),
  inOut: k => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2),
  outQuint: k => 1 - Math.pow(1 - k, 5),
  outExpo: k => (k >= 1 ? 1 : 1 - Math.pow(2, -10 * k)),
  back: k => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(k - 1, 3) + c1 * Math.pow(k - 1, 2); },
  backSoft: k => { const c1 = 0.9, c3 = c1 + 1; return 1 + c3 * Math.pow(k - 1, 3) + c1 * Math.pow(k - 1, 2); },
  elastic: k => (k === 0 || k === 1 ? k : Math.pow(2, -10 * k) * Math.sin((k * 10 - 0.75) * (2 * Math.PI) / 3) + 1),
};

// 0..1 progress of t through [t0, t0+dur] with easing
export const prog = (t, t0, dur, e = ease.out) => e(inv(t0, t0 + dur, t));

// Animate between a and b over [t0, t0+dur]
export const tween = (t, t0, dur, a, b, e = ease.out) => lerp(a, b, prog(t, t0, dur, e));

// Keyframes: [[time, value], ...]; value may be number or array. Optional per-key easing as 3rd item.
export function kf(t, keys, e = ease.inOut) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    const [t1, v1, e1] = keys[i];
    const [t0, v0] = keys[i - 1];
    if (t <= t1) {
      const k = (e1 || e)(inv(t0, t1, t));
      return Array.isArray(v0) ? v0.map((v, j) => lerp(v, v1[j], k)) : lerp(v0, v1, k);
    }
  }
  return keys[keys.length - 1][1];
}

// Scale "pop" in: 0 -> overshoot -> 1
export const pop = (t, t0, dur = 0.45) => (t < t0 ? 0 : ease.back(inv(t0, t0 + dur, t)));
// Visible between in/out with fades
export const fadeWin = (t, tin, tout, f = 0.2) => Math.min(inv(tin, tin + f, t), 1 - inv(tout - f, tout, t));

// Deterministic noise / wobble
export const wobble = (t, freq = 1, amp = 1, seed = 0) =>
  amp * (Math.sin(t * freq * 6.283 + seed) * 0.6 + Math.sin(t * freq * 2.31 * 6.283 + seed * 1.7) * 0.4);

export function rng(seed = 1) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

// Blink: returns 1 when eyes should be closed
export const blink = (t, period = 3.3, offset = 0) => ((t + offset) % period) < 0.11 ? 1 : 0;
