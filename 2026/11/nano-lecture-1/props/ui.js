// Floating "UI" cards: speech bubbles, tables, approval dialogs, logs, code, comments.
// Each is a card() with a canvas-drawn face, so restyling = editing a draw function.
import * as THREE from 'three';
import { card, pill, rbox, clay, C, FONT } from '../engine/geo.js';

const mono = (ctx, px, w = 500) => (ctx.font = `${w} ${px}px ${FONT.mono}`);
const sans = (ctx, px, w = 600) => (ctx.font = `${w} ${px}px ${FONT.sans}`);

export const bubble = (text, o = {}) => pill(`“${text}”`, { bg: '#f1ede7', fg: '#8e867d', h: 0.5, size: 0.36, d: 0.2, ...o });

// generic table: rows = [[...cells]], header title + tag
export function tableCard({ title = 'table: users', tag = 'real rows', cols = ['email', 'plan', 'joined'], rows = [] } = {}) {
  return card({ w: 2.6, h: 1.6, d: 0.08, r: 0.05, color: '#f2eee8', px: 300, draw: (ctx, W, H) => {
    ctx.fillStyle = '#3a312b'; ctx.fillRect(0, 0, W, H * 0.14);
    mono(ctx, H * 0.07); ctx.textBaseline = 'middle'; ctx.fillStyle = '#f4a576'; ctx.fillText(title, W * 0.04, H * 0.07);
    ctx.fillStyle = '#d6cdc4'; ctx.textAlign = 'right'; ctx.fillText(tag, W * 0.96, H * 0.07); ctx.textAlign = 'left';
    const cx = [0.04, 0.45, 0.72];
    mono(ctx, H * 0.06, 400); ctx.fillStyle = '#b3aaa1'; cols.forEach((c, i) => ctx.fillText(c, W * cx[i], H * 0.23));
    ctx.fillStyle = '#6d645c';
    rows.forEach((r, j) => { r.forEach((c, i) => ctx.fillText(c, W * cx[i], H * (0.36 + j * 0.13))); ctx.fillStyle = '#e4ddd5'; ctx.fillRect(W * 0.03, H * (0.42 + j * 0.13), W * 0.94, 2); ctx.fillStyle = '#6d645c'; });
  } });
}

export function readOnlyBadge() {
  return card({ w: 2.3, h: 0.78, d: 0.2, r: 0.2, color: '#ee8e5f', px: 260, draw: (ctx, W, H) => {
    ctx.fillStyle = '#e3b24a'; ctx.beginPath(); ctx.roundRect(W * 0.07, H * 0.42, W * 0.08, H * 0.32, 4); ctx.fill();
    ctx.strokeStyle = '#e3b24a'; ctx.lineWidth = W * 0.015; ctx.beginPath(); ctx.arc(W * 0.11, H * 0.42, W * 0.028, Math.PI, 0); ctx.stroke();
    ctx.fillStyle = '#2a1a10'; mono(ctx, H * 0.4, 700); ctx.textBaseline = 'middle'; ctx.textAlign = 'center'; ctx.fillText('READ ONLY', W * 0.57, H * 0.54);
  } });
}

export function receiptDevice() {
  const g = new THREE.Group();
  const dev = card({ w: 0.95, h: 1.05, d: 0.55, r: 0.12, color: '#2e2925', px: 300, draw: (ctx, W, H) => {
    ctx.fillStyle = '#3b3530'; ctx.beginPath(); ctx.roundRect(W * 0.1, H * 0.1, W * 0.8, H * 0.6, 12); ctx.fill();
    ctx.textAlign = 'center'; mono(ctx, H * 0.07); ctx.fillStyle = '#a69d93'; ctx.fillText('this week', W / 2, H * 0.24);
    ctx.fillStyle = '#f39a62'; mono(ctx, H * 0.085, 700); ctx.fillText('✓ live data', W / 2, H * 0.42);
    ctx.fillStyle = '#d9d0c6'; mono(ctx, H * 0.06); ctx.fillText('your account', W / 2, H * 0.57);
  } });
  dev.position.y = 0.52; g.add(dev);
  const paper = card({ w: 0.8, h: 2.0, d: 0.02, r: 0.01, color: '#f6f3ee', px: 260, draw: (ctx, W, H) => {
    ctx.textAlign = 'center'; mono(ctx, W * 0.07); ctx.fillStyle = '#b5ada4'; ctx.fillText('RECEIPTS', W / 2, H * 0.06);
    ['Pro plan', 'Pro plan', 'Starter', 'Pro plan'].forEach((p, i) => { ctx.fillStyle = '#c2b9b0'; ctx.fillText(`✓ paid · ${p}`, W / 2, H * (0.15 + i * 0.09)); });
  } });
  g.add(paper); g.userData.paper = paper;
  g.setPrint = (k) => { paper.position.y = 1.05 + (k - 1) * 1.0 + 1.0 * k * 0; paper.scale.y = Math.max(0.001, k); paper.position.y = 1.0 + k * 1.0; paper.visible = k > 0.01; };
  g.setPrint(0);
  return g;
}

export function questionScreen() {
  return card({ w: 0.95, h: 1.05, d: 0.55, r: 0.12, color: '#2e2925', px: 220, draw: (ctx, W, H) => {
    ctx.fillStyle = '#3b3530'; ctx.beginPath(); ctx.roundRect(W * 0.12, H * 0.12, W * 0.76, H * 0.55, 10); ctx.fill();
    ctx.fillStyle = '#f39a62'; sans(ctx, H * 0.3, 700); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('?', W / 2, H * 0.4);
  } });
}

export function approvalCard() {
  return card({ w: 2.1, h: 1.2, d: 0.1, r: 0.08, color: '#f4f0eb', px: 300, draw: (ctx, W, H) => {
    mono(ctx, H * 0.065); ctx.fillStyle = '#a79e95'; ctx.fillText('needs your approval', W * 0.07, H * 0.16);
    sans(ctx, H * 0.11, 600); ctx.fillStyle = '#2b241f'; ctx.fillText('Approve refund?', W * 0.07, H * 0.38);
    ctx.fillStyle = '#2b241f'; ctx.beginPath(); ctx.roundRect(W * 0.07, H * 0.55, W * 0.36, H * 0.2, H * 0.1); ctx.fill();
    ctx.fillStyle = '#f4f0eb'; sans(ctx, H * 0.08, 700); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('Approve', W * 0.25, H * 0.65);
    ctx.fillStyle = '#7d746c'; ctx.fillText('Decline', W * 0.62, H * 0.65);
  } });
}

export function browserCard({ w = 2.7, h = 1.9, status = '× Deploy failed', url = 'my-app.com' } = {}) {
  return card({ w, h, d: 0.12, r: 0.08, color: '#f1dcd6', px: 280, draw: (ctx, W, H) => {
    ctx.fillStyle = '#f5e6e1'; ctx.fillRect(0, 0, W, H * 0.1);
    ['#ef6a5e', '#f2b84e', '#7cc06e'].forEach((c, i) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(W * 0.04 + i * W * 0.035, H * 0.05, H * 0.018, 0, 7); ctx.fill(); });
    mono(ctx, H * 0.035); ctx.fillStyle = '#b8aaa4'; ctx.textAlign = 'center'; ctx.fillText(url, W / 2, H * 0.06); ctx.textAlign = 'left';
    ctx.fillStyle = '#4a3f39'; ctx.beginPath(); ctx.roundRect(W * 0.08, H * 0.17, W * 0.42, H * 0.045, 6); ctx.fill();
    ctx.fillStyle = '#ef7462'; ctx.beginPath(); ctx.roundRect(W * 0.1, H * 0.3, W * 0.72, H * 0.2, 8); ctx.fill();
    ctx.fillStyle = '#ffe9e4'; mono(ctx, H * 0.065, 500); ctx.textBaseline = 'middle'; ctx.textAlign = 'center'; ctx.fillText(status, W * 0.46, H * 0.4);
    ctx.fillStyle = '#efd2cb'; ctx.fillRect(W * 0.08, H * 0.62, W * 0.4, H * 0.18); ctx.fillRect(W * 0.52, H * 0.62, W * 0.4, H * 0.18);
  } });
}

export function buildLog() {
  return card({ w: 2.2, h: 2.2, d: 0.03, r: 0.02, color: '#f2ece5', px: 280, draw: (ctx, W, H) => {
    const L = [['build log', '#b4aaa1'], ['› building my-app…', '#7d736a'], ['✓ installed packages', '#7d736a'], ['✓ compiled pages', '#7d736a'], ['✗ Error: module not found', '#ee7a5e', true], ['   at app/checkout/page.js', '#ee9a84'], ['✗ build failed', '#ee7a5e']];
    L.forEach(([s, c, hl], i) => { if (hl) { ctx.fillStyle = '#f8d5c8'; ctx.fillRect(W * 0.04, H * (0.1 + i * 0.12) - H * 0.05, W * 0.92, H * 0.09); } ctx.fillStyle = c; mono(ctx, H * 0.048); ctx.fillText(s, W * 0.07, H * (0.1 + i * 0.12) + H * 0.015); });
  } });
}

export function errorNote() {
  return card({ w: 1.0, h: 0.6, d: 0.03, r: 0.03, color: '#f4e8e3', px: 260, draw: (ctx, W, H) => {
    mono(ctx, H * 0.13); ctx.fillStyle = '#b0a59c'; ctx.fillText('pasted:', W * 0.08, H * 0.28);
    ctx.fillStyle = '#ef8370'; ctx.fillRect(W * 0.06, H * 0.42, W * 0.88, H * 0.3); ctx.fillStyle = '#fff1ed'; mono(ctx, H * 0.11); ctx.fillText('Error: module not found', W * 0.1, H * 0.6);
  } });
}

export function codePanel(hl = 0) {
  return card({ w: 2.9, h: 1.6, d: 0.08, r: 0.06, color: '#eef0f6', px: 280, emissive: 0.06, draw: (ctx, W, H) => {
    ctx.fillStyle = '#e45a5a'; mono(ctx, H * 0.065, 600); ctx.fillText('TypeError: cart.items[0] is undefined', W * 0.05, H * 0.13);
    ctx.fillStyle = '#9aa0b0'; mono(ctx, H * 0.05); ctx.fillText('checkout.js · line 41 · 1 user', W * 0.05, H * 0.23);
    const lines = [['39', 'function checkout(cart) {'], ['40', '  const total = sum(cart.items)'], ['41', '  return cart.items[0].price'], ['42', '}']];
    lines.forEach(([n, s], i) => {
      const y = H * (0.4 + i * 0.13);
      if (i === 2 && hl) { ctx.fillStyle = `rgba(240,160,150,${0.45 * hl})`; ctx.fillRect(W * 0.03, y - H * 0.06, W * 0.94, H * 0.11); }
      ctx.fillStyle = '#b4b8c4'; mono(ctx, H * 0.05); ctx.fillText(n, W * 0.05, y + H * 0.015);
      ctx.fillStyle = '#4b5060'; ctx.fillText(s, W * 0.13, y + H * 0.015);
    });
  } });
}

export function clock(text = '2:00 AM') {
  return card({ w: 2.2, h: 0.85, d: 0.4, r: 0.12, color: '#1e1916', px: 260, emissive: 1.1, draw: (ctx, W, H) => {
    ctx.fillStyle = '#ff8c45'; mono(ctx, H * 0.5, 700); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, W / 2, H / 2 + 3);
  } });
}

export function commentCard({ handle = '@you', tag = 'pinned', lines } = {}) {
  const cmds = lines || ['claude mcp add supabase · read_only=true', 'claude mcp add stripe · mcp.stripe.com', 'claude mcp add vercel · mcp.vercel.com', 'claude mcp add sentry · mcp.sentry.dev/mcp', 'claude mcp add posthog · mcp.posthog.com/mcp'];
  return card({ w: 4.6, h: 2.6, d: 0.08, r: 0.1, color: '#ece7e1', px: 260, draw: (ctx, W, H) => {
    ctx.fillStyle = '#ee8d5c'; ctx.beginPath(); ctx.arc(W * 0.07, H * 0.13, H * 0.055, 0, 7); ctx.fill();
    sans(ctx, H * 0.065, 600); ctx.fillStyle = '#3b332d'; ctx.textBaseline = 'middle'; ctx.fillText(handle, W * 0.12, H * 0.13);
    ctx.fillStyle = '#f2b58f'; ctx.beginPath(); ctx.roundRect(W * 0.43, H * 0.09, W * 0.1, H * 0.08, H * 0.04); ctx.fill();
    ctx.fillStyle = '#7a3a1a'; mono(ctx, H * 0.04); ctx.fillText(tag, W * 0.445, H * 0.13);
    cmds.forEach((c, i) => { mono(ctx, H * 0.045); ctx.fillStyle = '#ee8d5c'; ctx.fillText(String(i + 1), W * 0.05, H * (0.3 + i * 0.12)); ctx.fillStyle = '#5b524b'; ctx.fillText(c, W * 0.09, H * (0.3 + i * 0.12)); });
  } });
}
