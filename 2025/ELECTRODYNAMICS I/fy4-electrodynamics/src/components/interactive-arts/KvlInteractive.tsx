import React, { useState } from 'react';

const KvlInteractive: React.FC = () => {
  const [emf, setEmf] = useState(12);
  const [r1, setR1] = useState(4);
  const [r2, setR2] = useState(2);

  const I = emf / (r1 + r2);
  const v1 = I * r1;
  const v2 = I * r2;
  const sum = emf - v1 - v2;

  return (
    <div className="flex flex-col items-center w-full pb-4">
      <div className="w-full max-w-[320px] h-[200px] bg-black/30 rounded-xl mb-4 border border-white/10 relative flex flex-col items-center justify-center p-4 overflow-hidden">
        <svg width="300" height="180" viewBox="0 0 300 180">
          {/* Loop wires */}
          <path d="M 50 40 L 250 40 L 250 140 L 50 140 Z" stroke="#64748b" strokeWidth="2" fill="none" />

          {/* Battery (left) */}
          <line x1="50" y1="80" x2="50" y2="100" stroke="#3b82f6" strokeWidth="4" />
          <line x1="40" y1="90" x2="60" y2="90" stroke="#3b82f6" strokeWidth="2" />
          <text x="20" y="95" fill="#3b82f6" fontSize="11" fontWeight="bold">{emf}V</text>

          {/* R1 (top) */}
          <rect x="125" y="30" width="50" height="20" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" />
          <text x="150" y="44" fill="#fff" fontSize="11" textAnchor="middle" fontWeight="bold">R₁={r1}Ω</text>
          <text x="150" y="20" fill="#f59e0b" fontSize="10" textAnchor="middle">V₁ = {v1.toFixed(2)}V</text>

          {/* R2 (right) */}
          <rect x="240" y="80" width="20" height="40" fill="#0b0f19" stroke="#10b981" strokeWidth="2" />
          <text x="250" y="105" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">R₂={r2}Ω</text>
          <text x="250" y="135" fill="#10b981" fontSize="10" textAnchor="middle">V₂ = {v2.toFixed(2)}V</text>

          {/* Current arrow */}
          <polygon points="160,140 152,135 152,145" fill="#ef4444" />
          <text x="150" y="160" fill="#ef4444" fontSize="11" textAnchor="middle" fontWeight="bold">I = {I.toFixed(2)} A</text>
        </svg>

        <div className="absolute bottom-1 right-2 text-[10px] font-mono text-blue-300 bg-black/50 px-1 rounded">
          ΣΔV = {sum.toFixed(2)} V
        </div>
      </div>

      <div className="w-full px-4 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-blue-400 w-10">EMF</span>
          <input type="range" min="1" max="24" step="0.5" value={emf} onChange={(e) => setEmf(parseFloat(e.target.value))} className="flex-grow accent-blue-500" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-amber-400 w-10">R₁</span>
          <input type="range" min="1" max="10" step="0.5" value={r1} onChange={(e) => setR1(parseFloat(e.target.value))} className="flex-grow accent-amber-500" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-green-400 w-10">R₂</span>
          <input type="range" min="1" max="10" step="0.5" value={r2} onChange={(e) => setR2(parseFloat(e.target.value))} className="flex-grow accent-green-500" />
        </div>
      </div>

      <p className="text-center text-[11px] text-slate-400 mt-3 px-4">
        EMF − V₁ − V₂ ≈ 0. Voltage rises = voltage drops around loop.
      </p>
    </div>
  );
};

export default KvlInteractive;
