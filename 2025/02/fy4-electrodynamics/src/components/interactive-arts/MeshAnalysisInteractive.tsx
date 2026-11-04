import React, { useState } from 'react';

const MeshAnalysisInteractive: React.FC = () => {
  const [v, setV] = useState(50);

  // Mesh current calculation based on the textbook example
  // 11*I1 - 5*I2 = V
  // -5*I1 + 27*I2 - 4*I3 = 0
  // -4*I2 + 8*I3 = 0 => I3 = 0.5 * I2
  // -5*I1 + 25*I2 = 0 => I1 = 5 * I2
  // 11(5*I2) - 5*I2 = V => 50*I2 = V => I2 = V / 50
  
  const i2 = v / 50;
  const i1 = 5 * i2;
  const i3 = 0.5 * i2;

  // Voltage drops for specific resistors as in the text example
  const v1 = (i1 - i2) * 5;
  const v2 = (i2 - i3) * 4;
  const v6 = i1 * 6;

  return (
    <div className="flex flex-col items-center w-full pb-4">
      <div className="w-full max-w-[320px] h-[180px] bg-black/30 rounded-xl mb-6 border border-white/10 relative p-2 flex flex-col items-center justify-center">
        
        <svg width="300" height="140" viewBox="0 0 300 140" className="absolute top-2">
           {/* Wires */}
           <line x1="30" y1="20" x2="270" y2="20" stroke="#64748b" strokeWidth="2" />
           <line x1="30" y1="120" x2="270" y2="120" stroke="#64748b" strokeWidth="2" />
           <line x1="30" y1="20" x2="30" y2="120" stroke="#64748b" strokeWidth="2" />
           <line x1="110" y1="20" x2="110" y2="120" stroke="#64748b" strokeWidth="2" />
           <line x1="190" y1="20" x2="190" y2="120" stroke="#64748b" strokeWidth="2" />
           <line x1="270" y1="20" x2="270" y2="120" stroke="#64748b" strokeWidth="2" />

           {/* Source */}
           <rect x="20" y="60" width="20" height="20" fill="#0b0f19" />
           <line x1="20" y1="70" x2="40" y2="70" stroke="#22c55e" strokeWidth="1" />
           <line x1="25" y1="60" x2="25" y2="80" stroke="#22c55e" strokeWidth="2" />
           <line x1="35" y1="50" x2="35" y2="90" stroke="#22c55e" strokeWidth="4" />
           <text x="20" y="45" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="bold">{v}V</text>

           {/* Resistors */}
           {/* 6 ohm */}
           <rect x="50" y="10" width="40" height="20" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" />
           <text x="70" y="24" fill="#fff" fontSize="10" textAnchor="middle">6Ω</text>
           {/* 18 ohm */}
           <rect x="130" y="10" width="40" height="20" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" />
           <text x="150" y="24" fill="#fff" fontSize="10" textAnchor="middle">18Ω</text>
           {/* 5 ohm */}
           <rect x="100" y="50" width="20" height="40" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" />
           <text x="110" y="74" fill="#fff" fontSize="10" textAnchor="middle">5Ω</text>
           {/* 4 ohm (shared) */}
           <rect x="180" y="50" width="20" height="40" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" />
           <text x="190" y="74" fill="#fff" fontSize="10" textAnchor="middle">4Ω</text>
           {/* 4 ohm (right) */}
           <rect x="260" y="50" width="20" height="40" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" />
           <text x="270" y="74" fill="#fff" fontSize="10" textAnchor="middle">4Ω</text>

           {/* Loop Currents (Circular arrows) */}
           {/* I1 */}
           <path d="M 60 70 A 15 15 0 1 1 80 70" stroke="#3b82f6" strokeWidth="2" fill="none" />
           <polygon points="75,70 85,70 80,75" fill="#3b82f6" />
           <text x="70" y="90" fill="#3b82f6" fontSize="12" textAnchor="middle" fontWeight="bold">I₁={i1.toFixed(1)}A</text>
           {/* I2 */}
           <path d="M 140 70 A 15 15 0 1 1 160 70" stroke="#3b82f6" strokeWidth="2" fill="none" />
           <polygon points="155,70 165,70 160,75" fill="#3b82f6" />
           <text x="150" y="90" fill="#3b82f6" fontSize="12" textAnchor="middle" fontWeight="bold">I₂={i2.toFixed(1)}A</text>
           {/* I3 */}
           <path d="M 220 70 A 15 15 0 1 1 240 70" stroke="#3b82f6" strokeWidth="2" fill="none" />
           <polygon points="235,70 245,70 240,75" fill="#3b82f6" />
           <text x="230" y="90" fill="#3b82f6" fontSize="12" textAnchor="middle" fontWeight="bold">I₃={i3.toFixed(2)}A</text>
        </svg>

      </div>

      <div className="w-full px-4 flex gap-4 text-center mb-4">
        <div className="flex-1 bg-blue-900/30 p-2 rounded-xl border border-blue-500/30">
          <span className="block text-[10px] text-blue-300 font-bold">V_6Ω</span>
          <span className="text-sm text-white font-mono">{v6.toFixed(1)}V</span>
        </div>
        <div className="flex-1 bg-blue-900/30 p-2 rounded-xl border border-blue-500/30">
          <span className="block text-[10px] text-blue-300 font-bold">V_5Ω (shared)</span>
          <span className="text-sm text-white font-mono">{v1.toFixed(1)}V</span>
        </div>
        <div className="flex-1 bg-blue-900/30 p-2 rounded-xl border border-blue-500/30">
          <span className="block text-[10px] text-blue-300 font-bold">V_4Ω (shared)</span>
          <span className="text-sm text-white font-mono">{v2.toFixed(1)}V</span>
        </div>
      </div>

      <div className="w-full px-4 space-y-4">
         <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 w-16">Source (V)</span>
            <input type="range" min="0" max="100" step="10" value={v} onChange={(e) => setV(parseFloat(e.target.value))} className="flex-grow accent-green-500" />
         </div>
      </div>
    </div>
  );
};

export default MeshAnalysisInteractive;