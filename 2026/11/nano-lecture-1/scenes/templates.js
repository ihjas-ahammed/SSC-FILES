// Reusable scene templates. A template returns a scene object { build, update, camera, env }
// so a video script can stamp out "connector N plugs in" or "service pedestal" in one line.
import * as THREE from 'three';
import { plug, powerStrip, nameplate } from '../props/connectors.js';
import { pedestal, banBadge, icons } from '../props/pedestal.js';
import { prog, pop, ease, kf, wobble, tween, inv } from '../engine/anim.js';
import { glowSprite } from '../engine/geo.js';

export const STRIP = ['database', 'payments', 'live site', 'crashes', 'users'];
const SP = 2.4;

// Connector N (1-based) plugs into its socket. o.nameAt / o.plugAt are local times.
export function plugScene(n, name, { nameAt = 0.75, plugAt = 1.05, extra, labels = STRIP, sub = '', ...rest } = {}) {
  return {
    env: 'dark', zoom: 1.5, lift: 0,
    camera: lt => {
      const x = (n - 1) * SP;
      return { pos: [x + 0.9 - lt * 0.12, 3.55 - lt * 0.06, 9.4 - lt * 0.25], look: [x + 0.15, 2.05, 0], fov: 32 };
    },
    build({ group }) {
      const strip = powerStrip(labels, { spacing: SP });
      group.add(strip);
      const plugs = labels.map((_, i) => { const p = plug(i + 1); p.position.set(i * SP, 0.48, 0); group.add(p); return p; });
      const plate = nameplate(n, name, sub); plate.scale.setScalar(0.78); plate.position.set((n - 1) * SP + 0.35, 3.15, 1.1); plate.rotation.set(-0.05, -0.18, 0.02); group.add(plate);
      const sock = glowSprite('#ffb06b', 3.2, 0); sock.position.set((n - 1) * SP, 0.55, 0.3); group.add(sock);
      const st = { strip, plugs, plate, sock };
      if (extra) Object.assign(st, extra.build(group, (n - 1) * SP) || {});
      return st;
    },
    update(st, lt, ctx) {
      const { plugs, plate, sock } = st;
      plugs.forEach((p, i) => {
        const k = i + 1;
        if (k < n) { p.position.y = 0.48; p.rotation.set(0, 0, 0); p.setGlow(0.35); st.strip.light(i, 0.25); }
        else if (k === n) {
          const d = prog(lt, plugAt, 0.35, ease.in);
          p.position.y = 2.6 - 2.12 * d + (d < 1 ? wobble(lt, 0.7, 0.08, k) : 0);
          p.rotation.z = d < 1 ? wobble(lt, 0.5, 0.06, k) : 0;
          const g = inv(plugAt + 0.35, plugAt + 0.6, lt);
          p.setGlow(g * (1 - 0.5 * inv(plugAt + 0.9, plugAt + 1.6, lt)));
          sock.material.opacity = 0.9 * g * (1 - 0.6 * inv(plugAt + 0.8, plugAt + 1.6, lt));
          st.strip.light(i, g);
        } else { p.position.y = 3.0 + (k - n) * 0.4 + wobble(lt, 0.5, 0.1, k * 3); p.rotation.z = wobble(lt, 0.4, 0.08, k); p.setGlow(0); st.strip.light(i, 0); }
      });
      const s = pop(lt, 0.08, 0.5);
      plate.scale.setScalar(0.001 + s * 0.78);
      plate.position.y = 3.15 + wobble(lt, 0.4, 0.04);
      plate.setReveal(prog(lt, nameAt, 0.32, ease.linear));
      if (extra?.update) extra.update(st, lt, ctx);
    },
    ...rest,
  };
}

// A single service pedestal with icon. alertAt: when it turns pink + "blocked" badge pops.
export function pedestalScene(name, iconName, { alertAt = 0.25, badge = true, ...rest } = {}) {
  return {
    env: 'dark', zoom: 1.0, lift: 0.1,
    camera: lt => ({ pos: [0.35 - lt * 0.25, 3.2, 12.2 - lt * 0.35], look: [0, 2.0, 0], fov: 30 }),
    build({ group }) {
      const p = pedestal(name); group.add(p);
      const ic = icons[iconName](); ic.position.set(0, 1.9, 0.1); group.add(ic);
      const b = banBadge(); b.scale.setScalar(0.55); b.position.set(0.95, 3.3, 0.6); group.add(b);
      return { p, ic, b };
    },
    update({ p, ic, b }, lt) {
      const a = prog(lt, alertAt, 0.3);
      p.setAlert(a);
      ic.position.y = 1.9 + wobble(lt, 0.5, 0.05);
      ic.rotation.y = -0.25 + lt * 0.12;
      const s = badge ? pop(lt, alertAt + 0.05, 0.45) : 0;
      b.scale.setScalar(0.001 + s * 0.55);
      b.position.y = 3.3 + wobble(lt, 0.6, 0.06, 2);
    },
    ...rest,
  };
}
