import React, { useState } from 'react';

const SuperpositionInteractive: React.FC = () => {
  const [v1Active, setV1Active] = useState(true);
  const [v2Active, setV2Active] = useState(true);

  // Constants from Example 1
  const v1 = 7.5; // Left battery
  const v2 = 10;  // Right battery
  const r1 = 6;   // Left resistor
  const r3 = 3;   // Central resistor
  const r2 = 3;   // Right resistor (2 ohm + 1 ohm internal)

  // Calculations
  let i1 = 0; // Current from V1 branch (rightwards)
  let i2 = 0; // Current from V2 branch (leftwards)
  let i3 = 0; // Current through central resistor (downwards)

  if (v1Active && v2Active) {
    // Nodal analysis at top node (V)
    // (V - V1)/R1 + V/R3 + (V - V2)/R2 = 0
    // V * (1/6 + 1/3 + 1/3) = V1/6 + V2/3
    // V * (5/6) = 7.5/6 + 10/3 = 1.25 + 3.333 = 4.5833
    // V = 4.5833 * 6 / 5 = 5.5V
    const vNode = ((v1 / r1) + (v2 / r2)) / ((1 / r1) + (1 / r3) + (1 / r2));
    i1 = (v1 - vNode) / r1;
    i2 = (v2 - vNode) / r2;
    i3 = vNode / r3;
  } else if (v1Active && !v2Active) {
    // V2 is shorted
    const rEq = r1 + (r2 * r3) / (r2 + r3); // 6 + (3*3)/6 = 7.5
    i1 = v1 / rEq; // 1A
    i3 = i1 * (r2 / (r2 + r3)); // 1 * (3/6) = 0.5A
    i2 = -i1 * (r3 / (r2 + r3)); // -0.5A (flows rightwards, so negative leftwards)
  } else if (!v1Active && v2Active) {
    // V1 is shorted
    const rEq = r2 + (r1 * r3) / (r1 + r3); // 3 + (6*3)/9 = 5
    i2 = v2 / rEq; // 2A
    i3 = i2 * (r1 / (r1 + r3)); // 2 * (6/9) = 1.33A
    i1 = -i2 * (r3 / (r1 + r3)); // -2 * (3/9) = -0.67A (flows leftwards)
  }

  return (
    <div className="flex flex-col items-center w-full pb-4">
      <div className="w-full max-w-[320px] h-[200px] bg-black/30 rounded-xl mb-4 border border-white/10 relative flex flex-col items-center justify-center p-4">
        
        {/* Circuit Diagram */}
        <svg width="280" height="140" viewBox="0 0 280 140" className="absolute top-4">
           {/* Top Wire */}
           <path d="M 40 20 L 240 20" stroke="#64748b" strokeWidth="3" fill="none" />
           {/* Bottom Wire */}
           <path d="M 40 120 L 240 120" stroke="#64748b" strokeWidth="3" fill="none" />
           
           {/* Left Branch */}
           <path d="M 40 20 L 40 120" stroke="#64748b" strokeWidth="3" fill="none" />
           {/* V1 Battery */}
           <rect x="25" y="60" width="30" height="20" fill="#0b0f19" />
           {v1Active ? (
             <>
               <line x1="25" y1="70" x2="55" y2="70" stroke="#22c55e" strokeWidth="2" />
               <line x1="30" y1="60" x2="30" y2="80" stroke="#22c55e" strokeWidth="2" />
               <line x1="40" y1="50" x2="40" y2="90" stroke="#22c55e" strokeWidth="4" />
               <text x="20" y="74" fill="#22c55e" fontSize="10" textAnchor="end" fontWeight="bold">7.5V</text>
             </>
           ) : (
             <line x1="40" y1="50" x2="40" y2="90" stroke="#64748b" strokeWidth="3" />
           )}
           {/* R1 Resistor */}
           <rect x="70" y="10" width="40" height="20" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" />
           <text x="90" y="24" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">6Ω</text>
           <text x="90" y="8" fill="#3b82f6" fontSize="10" textAnchor="middle" fontWeight="bold">I₁ = {i1.toFixed(2)}A {i1 >= 0 ? '→' : '←'}</text>

           {/* Center Branch */}
           <path d="M 140 20 L 140 120" stroke="#64748b" strokeWidth="3" fill="none" />
           {/* R3 Resistor */}
           <rect x="130" y="50" width="20" height="40" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" />
           <text x="140" y="74" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">3Ω</text>
           <text x="165" y="74" fill="#3b82f6" fontSize="10" textAnchor="start" fontWeight="bold">I₃ = {i3.toFixed(2)}A ↓</text>

           {/* Right Branch */}
           <path d="M 240 20 L 240 120" stroke="#64748b" strokeWidth="3" fill="none" />
           {/* V2 Battery */}
           <rect x="225" y="60" width="30" height="20" fill="#0b0f19" />
           {v2Active ? (
             <>
               <line x1="225" y1="70" x2="255" y2="70" stroke="#22c55e" strokeWidth="2" />
               <line x1="250" y1="60" x2="250" y2="80" stroke="#22c55e" strokeWidth="2" />
               <line x1="240" y1="50" x2="240" y2="90" stroke="#22c55e" strokeWidth="4" />
               <text x="260" y="74" fill="#22c55e" fontSize="10" textAnchor="start" fontWeight="bold">10V</text>
             </>
           ) : (
             <line x1="240" y1="50" x2="240" y2="90" stroke="#64748b" strokeWidth="3" />
           )}
           {/* R2 Resistor */}
           <rect x="170" y="10" width="40" height="20" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" />
           <text x="190" y="24" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">3Ω</text>
           <text x="190" y="8" fill="#3b82f6" fontSize="10" textAnchor="middle" fontWeight="bold">{i2 >= 0 ? '←' : '→'} I₂ = {i2.toFixed(2)}A</text>
        </svg>
      </div>

      <div className="w-full px-4 flex gap-4">
         <button 
           onClick={() => setV1Active(!v1Active)}
           className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all border-b-4 ${v1Active ? 'bg-green-600 border-green-800 text-white' : 'bg-slate-700 border-slate-900 text-slate-400'}`}
         >
           {v1Active ? 'V1 (7.5V) ON' : 'V1 SHORTED'}
         </button>
         
         <button 
           onClick={() => setV2Active(!v2Active)}
           className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all border-b-4 ${v2Active ? 'bg-green-600 border-green-800 text-white' : 'bg-slate-700 border-slate-900 text-slate-400'}`}
         >
           {v2Active ? 'V2 (10V) ON' : 'V2 SHORTED'}
         </button>
      </div>
      
      <div className="w-full px-4 mt-4">
         <div className="bg-blue-900/30 p-3 rounded-xl border border-blue-500/30 text-center">
            <span className="block text-[10px] text-blue-300 uppercase tracking-widest font-bold mb-1">Central Current (I₃)</span>
            <span className="text-xl font-black text-white">{i3.toFixed(2)} A</span>
            <span className="block text-[10px] text-slate-400 mt-1">Superposition: I₃ = I₃' + I₃''</span>
         </div>
      </div>
    </div>
  );
};

export default SuperpositionInteractive;