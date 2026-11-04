# 11 — 3D explorer cards (`type: "scene"`)

Use a scene card where the physics is 3D and a flat figure misleads: polarisation states (E-vector
traces), Huygens' wavelets in uniaxial crystals, o/e rays and the optic axis, wave plates, optical rotation.
The learner drags to turn, pinches to zoom, plays time and moves sliders. Engine: `study-match/src/components/02-scene3d.js`.

```json
{ "type": "scene", "label": "3D explorer", "title": "Huygens' wavelets inside calcite",
  "points": ["Two wavelets from one point: <b>o</b> sphere, <b>e</b> spheroid.", "They touch along the optic axis."],
  "scene": {
    "camera": { "position": [5.5, 3.6, 6.5], "target": [0, 0, 0] },
    "time":   { "duration": 5, "loop": true, "label": "Time" },
    "params": [ { "name": "phi", "label": "Optic axis tilt", "min": 0, "max": 90, "value": 35, "step": 1, "unit": "°" } ],
    "axes": false,
    "objects": [
      { "type": "box", "center": [0,0,0], "size": [5,3.2,3.2], "style": "glass" },
      { "type": "line", "points": [["-2.6*cos(phi*deg)","-2.6*sin(phi*deg)",0], ["2.6*cos(phi*deg)","2.6*sin(phi*deg)",0]], "style": "hl", "dash": true },
      { "type": "label", "at": [0, 2, 0], "text": "optic axis", "style": "hl" },
      { "type": "sphere", "center": [0,0,0], "r": "1.2*t+0.02", "style": "wave", "label": "o" },
      { "type": "ellipsoid", "center": [0,0,0], "radii": ["1.2*t+0.02","1.55*t+0.02","1.55*t+0.02"], "rotate": [0,0,"phi"], "style": "coral" },
      { "type": "arrow", "from": [0,0,0], "to": ["cos(2*pi*t)", "sin(2*pi*t)", 0], "style": "ray" },
      { "type": "curve", "s": [0, 12.56], "x": "0.3*s-2", "y": "cos(s)", "z": "sin(s)", "style": "ray" },
      { "type": "plane", "center": [0,0,0], "size": [4,3], "rotate": [90,0,0], "style": "glass" },
      { "type": "point", "at": [0,0,0], "style": "ink" }
    ] } }
```
- Any number can be an expression in `t` (0 → 1 over `duration` s), slider names, and `s` (curves).
  Functions: sin cos tan asin acos atan atan2 sqrt abs exp log min max pow floor sign; constants `pi`, `deg` (= π/180).
- `rotate` is [rx, ry, rz] in **degrees**. `ellipsoid.radii` are along x, y, z before rotation.
- `"show": "t > 0.4"` reveals an object only when the expression is non-zero.
- Styles: `ray` (violet), `ink`, `axis`, `hl` (amber), `wave` (translucent violet), `glass`, `sage`, `coral`.
- y is up. Keep the scene within about ±3 units; 4–14 objects. Every object needs a purpose named in `points`.
- `points`: 3–5 short lines telling the learner what to do and see ("Drag the slider to 0°: the two wavelets coincide.").
- Physics must match the source pages; no invented numbers. Validate with `build.py --check`.
