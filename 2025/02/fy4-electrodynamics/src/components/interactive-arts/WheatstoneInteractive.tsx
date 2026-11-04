import React, { useState } from 'react';

const WheatstoneInteractive: React.FC = () => {
  const [p, setP] = useState(10);
  const [q, setQ] = useState(20);
  const [r, setR] = useState(5);
  const [s, setS] = useState(10);

  // Bridge diagonal voltage from a 1V source
  const V = 1;
  const vB = V * q / (p + q);
  const vD = V * s / (r + s);
  const vBD = vB - vD;
  const balanced = Math.abs(vBD) < 0.005;

  return (
    <div className="flex flex-col items-center w-full pb-4">
      <div className="w-full max-w-[320px] h-[220px] bg-black/30 rounded-xl mb-4 border border-white/10 relative flex flex-col items-center justify-center p-4 overflow-hidden">
        <svg width="300" height="200" viewBox="0 0 300 200">
          {/* Diamond bridge nodes: A(left), B(top), C(right), D(bottom) */}
          {/* Wires */}
          <line x1="40" y1="100" x2="150" y2="40" stroke="#64748b" strokeWidth="2" />
          <line x1="150" y1="40" x2="260" y2="100" stroke="#64748b" strokeWidth="2" />
          <line x1="40" y1="100" x2="150" y2="160" stroke="#64748b" strokeWidth="2" />
          <line x1="150" y1="160" x2="260" y2="100" stroke="#64748b" strokeWidth="2" />

          {/* P (A→B) */}
          <rect x="80" y="55" width="40" height="18" fill="#0b0f19" stroke="#3b82f6" strokeWidth="2" transform="rotate(-28 100 64)" />
          <text x="75" y="50" fill="#3b82f6" fontSize="11" fontWeight="bold">P={p}Ω</text>

          {/* Q (B→C) */}
          <rect x="180" y="55" width="40" height="18" fill="#0b0f19" stroke="#3b82f6" strokeWidth="2" transform="rotate(28 200 64)" />
          <text x="210" y="50" fill="#3b82f6" fontSize="11" fontWeight="bold">Q={q}Ω</text>

          {/* R (A→D) */}
          <rect x="80" y="127" width="40" height="18" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" transform="rotate(28 100 136)" />
          <text x="75" y="170" fill="#f59e0b" fontSize="11" fontWeight="bold">R={r}Ω</text>

          {/* S (D→C) */}
          <rect x="180" y="127" width="40" height="18" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" transform="rotate(-28 200 136)" />
          <text x="210" y="170" fill="#f59e0b" fontSize="11" fontWeight="bold">S={s}Ω</text>

          {/* Galvanometer between B and D */}
          <line x1="150" y1="50" x2="150" y2="85" stroke="#64748b" strokeWidth="2" />
          <line x1="150" y1="115" x2="150" y2="150" stroke="#64748b" strokeWidth="2" />
          <circle cx="150" cy="100" r="14" fill="#0b0f19" stroke={balanced ? '#10b981' : '#ef4444'} strokeWidth="2" />
          <text x="150" y="104" fill="#fff" fontSize="11" textAnchor="middle" fontWeight="bold">G</text>

          {/* Node labels */}
          <text x="28" y="104" fill="#94a3b8" fontSize="11">A</text>
          <text x="148" y="32" fill="#94a3b8" fontSize="11">B</text>
          <text x="266" y="104" fill="#94a3b8" fontSize="11">C</text>
          <text x="146" y="180" fill="#94a3b8" fontSize="11">D</text>
        </svg>

        <div className={`absolute bottom-1 right-2 text-[10px] font-mono px-1 rounded ${balanced ? 'text-green-300 bg-green-900/40' : 'text-red-300 bg-black/50'}`}>
          V_BD = {vBD.toFixed(3)} V {balanced ? '(BALANCED)' : ''}
        </div>
      </div>

      <div className="w-full px-4 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-blue-400 w-8">P</span>
          <input type="range" min="1" max="50" step="1" value={p} onChange={(e) => setP(parseFloat(e.target.value))} className="flex-grow accent-blue-500" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-blue-400 w-8">Q</span>
          <input type="range" min="1" max="50" step="1" value={q} onChange={(e) => setQ(parseFloat(e.target.value))} className="flex-grow accent-blue-500" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-amber-400 w-8">R</span>
          <input type="range" min="1" max="50" step="1" value={r} onChange={(e) => setR(parseFloat(e.target.value))} className="flex-grow accent-amber-500" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-amber-400 w-8">S</span>
          <input type="range" min="1" max="50" step="1" value={s} onChange={(e) => setS(parseFloat(e.target.value))} className="flex-grow accent-amber-500" />
        </div>
      </div>

      <p className="text-center text-[11px] text-slate-400 mt-3 px-4">
        Balance condition: P/Q = R/S → galvanometer reads zero.
      </p>
    </div>
  );
};

export default WheatstoneInteractive;
