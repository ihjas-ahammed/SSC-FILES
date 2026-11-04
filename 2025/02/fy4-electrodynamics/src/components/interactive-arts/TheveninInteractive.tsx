import React, { useState } from 'react';

const TheveninInteractive: React.FC = () => {
  const [vs, setVs] = useState(12);
  const[r1, setR1] = useState(6);
  const [r2, setR2] = useState(3);
  const [rl, setRl] = useState(4);
  const[showEquivalent, setShowEquivalent] = useState(false);

  // Thevenin calculations
  const vth = vs * (r2 / (r1 + r2));
  const rth = (r1 * r2) / (r1 + r2);
  const il = vth / (rth + rl);
  const vl = il * rl;

  return (
    <div className="flex flex-col items-center w-full pb-4">
      <div className="w-full max-w-[320px] h-[200px] bg-black/30 rounded-xl mb-4 border border-white/10 relative flex flex-col items-center justify-center p-4 transition-all duration-500">
        
        <svg width="280" height="150" viewBox="0 0 280 150" className="absolute top-2">
           {showEquivalent ? (
             // Thevenin Equivalent Circuit
             <>
               <path d="M 60 40 L 220 40 L 220 110 L 60 110 Z" stroke="#64748b" strokeWidth="3" fill="none" />
               
               {/* Vth Source */}
               <rect x="45" y="65" width="30" height="20" fill="#0b0f19" />
               <line x1="45" y1="75" x2="75" y2="75" stroke="#22c55e" strokeWidth="2" />
               <line x1="50" y1="65" x2="50" y2="85" stroke="#22c55e" strokeWidth="2" />
               <line x1="60" y1="55" x2="60" y2="95" stroke="#22c55e" strokeWidth="4" />
               <text x="35" y="80" fill="#22c55e" fontSize="12" textAnchor="end" fontWeight="bold">V_th = {vth.toFixed(1)}V</text>

               {/* Rth Resistor */}
               <rect x="120" y="30" width="40" height="20" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" />
               <text x="140" y="44" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">R_th={rth.toFixed(1)}Ω</text>

               {/* RL Resistor */}
               <rect x="210" y="55" width="20" height="40" fill="#0b0f19" stroke="#3b82f6" strokeWidth="2" />
               <text x="235" y="75" fill="#3b82f6" fontSize="10" textAnchor="start" fontWeight="bold">R_L={rl}Ω</text>
               
               {/* Current Arrow */}
               <text x="140" y="20" fill="#3b82f6" fontSize="12" textAnchor="middle" fontWeight="bold">I_L = {il.toFixed(2)}A →</text>
             </>
           ) : (
             // Original Circuit
             <>
               <path d="M 60 40 L 220 40 L 220 110 L 60 110 Z" stroke="#64748b" strokeWidth="3" fill="none" />
               <path d="M 140 40 L 140 110" stroke="#64748b" strokeWidth="3" fill="none" />
               
               {/* Vs Source */}
               <rect x="45" y="65" width="30" height="20" fill="#0b0f19" />
               <line x1="45" y1="75" x2="75" y2="75" stroke="#22c55e" strokeWidth="2" />
               <line x1="50" y1="65" x2="50" y2="85" stroke="#22c55e" strokeWidth="2" />
               <line x1="60" y1="55" x2="60" y2="95" stroke="#22c55e" strokeWidth="4" />
               <text x="35" y="80" fill="#22c55e" fontSize="12" textAnchor="end" fontWeight="bold">{vs}V</text>

               {/* R1 Resistor */}
               <rect x="80" y="30" width="40" height="20" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" />
               <text x="100" y="44" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">R₁={r1}Ω</text>

               {/* R2 Resistor */}
               <rect x="130" y="55" width="20" height="40" fill="#0b0f19" stroke="#f59e0b" strokeWidth="2" />
               <text x="155" y="75" fill="#fff" fontSize="10" textAnchor="start" fontWeight="bold">R₂={r2}Ω</text>

               {/* RL Resistor */}
               <rect x="210" y="55" width="20" height="40" fill="#0b0f19" stroke="#3b82f6" strokeWidth="2" />
               <text x="235" y="75" fill="#3b82f6" fontSize="10" textAnchor="start" fontWeight="bold">R_L={rl}Ω</text>
               
               {/* Current Arrow */}
               <text x="180" y="30" fill="#3b82f6" fontSize="10" textAnchor="middle" fontWeight="bold">I_L = {il.toFixed(2)}A →</text>
             </>
           )}
        </svg>

      </div>

      <div className="text-center mb-4 flex gap-4 w-full px-4">
         <button 
           onClick={() => setShowEquivalent(false)}
           className={`flex-1 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all border-b-4 ${!showEquivalent ? 'bg-amber-600 border-amber-800 text-white' : 'bg-slate-700 border-slate-900 text-slate-300'}`}
         >
           Original Circuit
         </button>
         <button 
           onClick={() => setShowEquivalent(true)}
           className={`flex-1 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all border-b-4 ${showEquivalent ? 'bg-amber-600 border-amber-800 text-white' : 'bg-slate-700 border-slate-900 text-slate-300'}`}
         >
           Thevenin Equivalent
         </button>
      </div>

      <div className="w-full px-4 space-y-4">
         <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 w-8">R₁</span>
            <input type="range" min="1" max="20" step="1" value={r1} onChange={(e) => setR1(parseFloat(e.target.value))} className="flex-grow accent-amber-500" />
         </div>
         <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 w-8">R₂</span>
            <input type="range" min="1" max="20" step="1" value={r2} onChange={(e) => setR2(parseFloat(e.target.value))} className="flex-grow accent-amber-500" />
         </div>
         <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 w-8">R_L</span>
            <input type="range" min="1" max="20" step="1" value={rl} onChange={(e) => setRl(parseFloat(e.target.value))} className="flex-grow accent-blue-500" />
         </div>
      </div>
    </div>
  );
};

export default TheveninInteractive;