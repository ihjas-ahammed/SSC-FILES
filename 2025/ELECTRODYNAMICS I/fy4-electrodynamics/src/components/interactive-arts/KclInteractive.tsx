import React, { useState } from 'react';

const KclInteractive: React.FC = () => {
  const [i1, setI1] = useState(5);
  const [i2, setI2] = useState(3);
  const [i3, setI3] = useState(4);

  // I1, I2 enter; I3 leaves; I4 auto-balances (leaves)
  const i4 = i1 + i2 - i3;
  const sum = i1 + i2 - i3 - i4;

  return (
    <div className="flex flex-col items-center w-full pb-4">
      <div className="w-full max-w-[320px] h-[200px] bg-black/30 rounded-xl mb-4 border border-white/10 relative flex flex-col items-center justify-center p-4 overflow-hidden">
        <svg width="300" height="180" viewBox="0 0 300 180">
          {/* Junction node */}
          <circle cx="150" cy="90" r="8" fill="#3b82f6" stroke="#fff" strokeWidth="2" />

          {/* I1 — entering from left */}
          <line x1="30" y1="60" x2="142" y2="86" stroke="#10b981" strokeWidth="2" />
          <polygon points="135,82 142,86 135,90" fill="#10b981" />
          <text x="60" y="50" fill="#10b981" fontSize="12" fontWeight="bold">I₁ = {i1.toFixed(1)} A</text>

          {/* I2 — entering from top */}
          <line x1="100" y1="20" x2="146" y2="82" stroke="#10b981" strokeWidth="2" />
          <polygon points="142,76 146,82 150,78" fill="#10b981" />
          <text x="40" y="20" fill="#10b981" fontSize="12" fontWeight="bold">I₂ = {i2.toFixed(1)} A</text>

          {/* I3 — leaving right */}
          <line x1="158" y1="86" x2="270" y2="60" stroke="#ef4444" strokeWidth="2" />
          <polygon points="270,60 262,58 264,68" fill="#ef4444" />
          <text x="215" y="50" fill="#ef4444" fontSize="12" fontWeight="bold">I₃ = {i3.toFixed(1)} A</text>

          {/* I4 — leaving bottom (auto-balance) */}
          <line x1="154" y1="98" x2="200" y2="160" stroke="#f59e0b" strokeWidth="2" />
          <polygon points="200,160 192,158 196,150" fill="#f59e0b" />
          <text x="180" y="175" fill="#f59e0b" fontSize="12" fontWeight="bold">I₄ = {i4.toFixed(1)} A</text>
        </svg>

        <div className="absolute bottom-1 right-2 text-[10px] font-mono text-blue-300 bg-black/50 px-1 rounded">
          ΣI = {sum.toFixed(2)} A
        </div>
      </div>

      <div className="w-full px-4 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-green-400 w-12">I₁ in</span>
          <input type="range" min="0" max="10" step="0.5" value={i1} onChange={(e) => setI1(parseFloat(e.target.value))} className="flex-grow accent-green-500" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-green-400 w-12">I₂ in</span>
          <input type="range" min="0" max="10" step="0.5" value={i2} onChange={(e) => setI2(parseFloat(e.target.value))} className="flex-grow accent-green-500" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-red-400 w-12">I₃ out</span>
          <input type="range" min="0" max="10" step="0.5" value={i3} onChange={(e) => setI3(parseFloat(e.target.value))} className="flex-grow accent-red-500" />
        </div>
      </div>

      <p className="text-center text-[11px] text-slate-400 mt-3 px-4">
        I₄ adjusts automatically so that algebraic sum at junction = 0.
      </p>
    </div>
  );
};

export default KclInteractive;
