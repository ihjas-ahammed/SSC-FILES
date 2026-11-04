import React, { useState } from 'react';

const CareyFosterInteractive: React.FC = () => {
  const[r, setR] = useState(5);
  const [s, setS] = useState(4);
  const [isSwapped, setIsSwapped] = useState(false);

  // Constants
  const rho = 0.1; // resistance per cm of the wire
  const L = 100; // 100 cm wire
  
  // Calculate balance points
  // For P=Q, Balance condition: R + l*rho = S + (100-l)*rho
  // 2*l*rho = S - R + 100*rho => l = (S - R + 100*rho) / (2*rho)
  const l1 = (s - r + L * rho) / (2 * rho);
  const l2 = (r - s + L * rho) / (2 * rho); // If swapped
  
  const currentL = isSwapped ? l2 : l1;
  const shift = l2 - l1;
  const calculatedDiff = shift * rho;

  return (
    <div className="flex flex-col items-center w-full pb-4">
      <div className="w-full max-w-[320px] h-[180px] bg-black/30 rounded-xl mb-4 border border-white/10 relative flex flex-col items-center justify-center p-4 overflow-hidden">
        {/* Bridge Circuit Diagram */}
        <svg width="300" height="150" viewBox="0 0 300 150" className="absolute top-2">
           {/* Top Resistors (P and Q) */}
           <path d="M 50 30 L 150 30 L 250 30" stroke="#64748b" strokeWidth="2" fill="none" />
           <rect x="80" y="20" width="40" height="20" fill="#0b0f19" stroke="#3b82f6" strokeWidth="2" />
           <text x="100" y="34" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">P</text>
           
           <rect x="180" y="20" width="40" height="20" fill="#0b0f19" stroke="#3b82f6" strokeWidth="2" />
           <text x="200" y="34" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">Q</text>
           
           {/* Connecting wires to gaps */}
           <path d="M 50 30 L 50 70" stroke="#64748b" strokeWidth="2" fill="none" />
           <path d="M 150 30 L 150 70" stroke="#64748b" strokeWidth="2" fill="none" />
           <path d="M 250 30 L 250 70" stroke="#64748b" strokeWidth="2" fill="none" />

           {/* Gap Resistors (R and S) */}
           <rect x="70" y="60" width="60" height="20" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" />
           <text x="100" y="74" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">{isSwapped ? `S=${s}Ω` : `R=${r}Ω`}</text>

           <rect x="170" y="60" width="60" height="20" fill="#0b0f19" stroke="#10b981" strokeWidth="2" />
           <text x="200" y="74" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">{isSwapped ? `R=${r}Ω` : `S=${s}Ω`}</text>

           {/* Galvanometer */}
           <circle cx="150" cy="100" r="12" fill="#0b0f19" stroke="#fff" strokeWidth="2" />
           <text x="150" y="104" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">G</text>
           <path d="M 150 70 L 150 88" stroke="#64748b" strokeWidth="2" />
           
           {/* Galvanometer to Jockey */}
           <path d={`M 150 112 L ${50 + currentL * 2} 125`} stroke="#ef4444" strokeWidth="2" strokeDasharray="4" />
           <polygon points={`${50 + currentL * 2},130 ${45 + currentL * 2},120 ${55 + currentL * 2},120`} fill="#ef4444" />
           
           {/* Slide Wire */}
           <line x1="50" y1="130" x2="250" y2="130" stroke="#94a3b8" strokeWidth="4" />
           <text x="50" y="145" fill="#94a3b8" fontSize="10" textAnchor="middle">0cm</text>
           <text x="250" y="145" fill="#94a3b8" fontSize="10" textAnchor="middle">100cm</text>
        </svg>

        <div className="absolute bottom-1 right-2 text-[10px] font-mono text-blue-300 bg-black/50 px-1 rounded">
           Balance: {currentL.toFixed(1)} cm
        </div>
      </div>

      <div className="text-center mb-4 flex gap-4 w-full px-4">
         <div className="flex-1 bg-white/5 p-2 rounded-xl text-center border border-white/10">
            <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Shift (l₂ - l₁)</span>
            <span className="text-sm font-black text-amber-400">{isSwapped ? shift.toFixed(1) : 0} cm</span>
         </div>
         <div className="flex-1 bg-white/5 p-2 rounded-xl text-center border border-white/10">
            <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Calculated R - S</span>
            <span className="text-sm font-black text-green-400">{isSwapped ? calculatedDiff.toFixed(2) : 0} Ω</span>
         </div>
      </div>

      <div className="w-full px-4 space-y-4">
         <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 w-8">R (Ω)</span>
            <input type="range" min="1" max="10" step="0.5" value={r} onChange={(e) => {setR(parseFloat(e.target.value)); setIsSwapped(false);}} className="flex-grow accent-amber-500" />
         </div>
         <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 w-8">S (Ω)</span>
            <input type="range" min="1" max="10" step="0.5" value={s} onChange={(e) => {setS(parseFloat(e.target.value)); setIsSwapped(false);}} className="flex-grow accent-green-500" />
         </div>
         
         <button 
           onClick={() => setIsSwapped(!isSwapped)}
           className={`w-full py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all border-b-4 ${isSwapped ? 'bg-blue-600 border-blue-800 text-white' : 'bg-slate-700 border-slate-900 text-slate-300'}`}
         >
           {isSwapped ? 'Reset Positions' : 'Swap R and S (Take l₂)'}
         </button>
      </div>
    </div>
  );
};

export default CareyFosterInteractive;