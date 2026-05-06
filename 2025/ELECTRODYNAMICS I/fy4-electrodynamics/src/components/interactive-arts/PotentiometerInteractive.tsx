import React, { useState } from 'react';

const PotentiometerInteractive: React.FC = () => {
  const [ex, setEx] = useState(1.5); // Test Cell EMF
  const ed = 5.0; // Driver Cell EMF
  const L = 1000; // Wire length in cm (10m)

  // V is proportional to length: V = (E_d / L) * l
  // Balance: E_x = (E_d / L) * l => l = E_x * L / E_d
  const balanceLength = (ex / ed) * L;
  const balanceMeters = balanceLength / 100;

  return (
    <div className="flex flex-col items-center w-full pb-4">
      <div className="w-full max-w-[320px] h-[160px] bg-black/30 rounded-xl mb-6 border border-white/10 relative p-4 flex flex-col items-center justify-center">
        
        {/* Potentiometer Circuit Diagram */}
        <svg width="300" height="130" viewBox="0 0 300 130" className="absolute top-2">
           {/* Driver Cell Circuit */}
           <path d="M 50 30 L 140 30" stroke="#64748b" strokeWidth="2" />
           {/* Battery symbol */}
           <line x1="140" y1="20" x2="140" y2="40" stroke="#fff" strokeWidth="2" />
           <line x1="150" y1="15" x2="150" y2="45" stroke="#fff" strokeWidth="4" />
           <line x1="160" y1="20" x2="160" y2="40" stroke="#fff" strokeWidth="2" />
           <line x1="170" y1="15" x2="170" y2="45" stroke="#fff" strokeWidth="4" />
           <text x="155" y="10" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">Driver: {ed}V</text>
           
           <path d="M 170 30 L 250 30" stroke="#64748b" strokeWidth="2" />
           <path d="M 50 30 L 50 70" stroke="#64748b" strokeWidth="2" />
           <path d="M 250 30 L 250 70" stroke="#64748b" strokeWidth="2" />
           
           {/* Potentiometer Wire (AB) */}
           <line x1="50" y1="70" x2="250" y2="70" stroke="#94a3b8" strokeWidth="5" />
           <text x="40" y="74" fill="#94a3b8" fontSize="12" fontWeight="bold">A</text>
           <text x="260" y="74" fill="#94a3b8" fontSize="12" fontWeight="bold">B</text>

           {/* Test Cell Circuit */}
           <path d="M 50 70 L 50 110 L 100 110" stroke="#3b82f6" strokeWidth="2" />
           {/* Test cell symbol */}
           <line x1="100" y1="100" x2="100" y2="120" stroke="#3b82f6" strokeWidth="2" />
           <line x1="110" y1="95" x2="110" y2="125" stroke="#3b82f6" strokeWidth="4" />
           <text x="105" y="135" fill="#3b82f6" fontSize="10" textAnchor="middle" fontWeight="bold">Ex: {ex.toFixed(2)}V</text>

           <path d="M 110 110 L 140 110" stroke="#3b82f6" strokeWidth="2" />
           
           {/* Galvanometer */}
           <circle cx="155" cy="110" r="10" fill="#0b0f19" stroke="#fff" strokeWidth="2" />
           <text x="155" y="114" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">G</text>
           
           {/* Jockey line */}
           <path d={`M 165 110 L ${50 + (balanceLength/L)*200} 80`} stroke="#ef4444" strokeWidth="2" strokeDasharray="4" />
           <polygon points={`${50 + (balanceLength/L)*200},80 ${46 + (balanceLength/L)*200},88 ${54 + (balanceLength/L)*200},88`} fill="#ef4444" />
        </svg>

        <div className="absolute top-[85px] left-1/2 -translate-x-1/2 bg-black/60 px-2 py-0.5 rounded text-[10px] text-green-400 font-bold border border-white/10">
           Balance: l = {balanceLength.toFixed(1)} cm
        </div>
      </div>

      <div className="w-full px-4 space-y-4">
         <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 w-16">Eₓ (V)</span>
            <input type="range" min="0.1" max="4.9" step="0.1" value={ex} onChange={(e) => setEx(parseFloat(e.target.value))} className="flex-grow accent-blue-500" />
         </div>
         <div className="bg-blue-900/30 p-3 rounded-xl border border-blue-500/30 text-center">
            <span className="block text-[10px] text-blue-300 uppercase tracking-widest font-bold mb-1">Formula</span>
            <span className="text-sm font-mono text-white">Eₓ = (E_d / L) × l</span>
         </div>
      </div>
    </div>
  );
};

export default PotentiometerInteractive;