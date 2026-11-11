// Top HUD: "// daily tip", a counter ("CONNECTED 3/5") and a progress line.
export class Hud {
  constructor(el, { left = '// daily tip', counterLabel = 'CONNECTED', total = 5, counter = [] } = {}) {
    this.el = el;
    this.counter = counter; // [[time, value], ...]
    this.total = total;
    el.innerHTML = `
      <div class="hud-row"><span class="hud-l">${left}</span>
        <span class="hud-r">${counterLabel} <b class="hud-n">0</b>/${total}</span></div>
      <div class="hud-bar"><i class="hud-fill"></i><i class="hud-dot"></i></div>`;
    this.n = el.querySelector('.hud-n');
    this.fill = el.querySelector('.hud-fill');
    this.dot = el.querySelector('.hud-dot');
  }
  update(t, duration, theme) {
    let v = 0, since = 99;
    for (const [tt, val] of this.counter) if (t >= tt) { v = val; since = t - tt; }
    if (this.n.textContent !== String(v)) this.n.textContent = v;
    const pulse = since < 0.5 ? 1 + 0.35 * Math.sin((since / 0.5) * Math.PI) : 1;
    this.n.style.transform = `scale(${pulse})`;
    const p = Math.min(1, t / duration);
    this.fill.style.width = (p * 100).toFixed(3) + '%';
    this.dot.style.left = (p * 100).toFixed(3) + '%';
    this.el.dataset.theme = theme;
  }
}

export const hudCSS = `
.hud{position:absolute;left:48px;right:107px;top:82px;z-index:6;font:500 19px/1 'JetBrains Mono',monospace;pointer-events:none}
.hud-row{display:flex;justify-content:space-between;align-items:center;height:26px}
.hud[data-theme=light]{--fg:#2a231e;--line:rgba(60,45,35,.18)}
.hud[data-theme=dark]{--fg:#f2ece4;--line:rgba(255,240,225,.18)}
.hud-l,.hud-r{color:var(--fg)}
.hud-n{display:inline-block;min-width:21px;height:23px;line-height:23px;text-align:center;border-radius:3px;background:#1d1714;color:#f47b2b;font-weight:500;margin-left:6px}
.hud-bar{position:relative;height:2px;margin-top:16px;background:var(--line)}
.hud-fill{position:absolute;left:0;top:0;bottom:0;background:#f07a3a}
.hud-dot{position:absolute;top:-4px;width:6px;height:6px;margin-left:-5px;border:2px solid #f07a3a;border-radius:50%;background:transparent}
`;
