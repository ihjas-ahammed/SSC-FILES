import React, { useState } from 'react';

const ZMappingCanvas: React.FC = () => {
  const [step, setStep] = useState(0); // 0 to 5
  
  const N_vals = [1, 2, 3, 4, 5];
  const Z_vals = [0, 1, -1, 2, -2];

  return (
    <div className="flex flex-col w-full h-full p-4 items-center justify-center select-none touch-none-canvas" onClick={() => setStep((s) => (s + 1) % 6)}>
       <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest absolute top-4">Tap to map N to Z</p>
       
       <svg viewBox="0 0 300 150" className="w-full max-w-[300px]">
          {/* N Row */}
          <text x="15" y="45" className="fill-duo-blue font-bold text-lg">ℕ</text>
          {N_vals.map((n, i) => (
             <g key={`n-${n}`}>
               <circle cx={60 + i * 45} cy="40" r="14" className="fill-duo-blue/30 stroke-duo-blue" strokeWidth="2" />
               <text x={60 + i * 45} y="45" textAnchor="middle" className="fill-white font-bold">{n}</text>
             </g>
          ))}

          {/* Z Row */}
          <text x="15" y="115" className="fill-duo-violet font-bold text-lg">ℤ</text>
          {Z_vals.map((z, i) => (
             <g key={`z-${z}`}>
               <circle cx={60 + i * 45} cy="110" r="14" className={`transition-all duration-300 stroke-2 ${step > i ? 'fill-duo-violet/30 stroke-duo-violet' : 'fill-slate-800 stroke-slate-600'}`} />
               <text x={60 + i * 45} y="115" textAnchor="middle" className={`font-bold transition-colors ${step > i ? 'fill-white' : 'fill-slate-500'}`}>{z}</text>
             </g>
          ))}

          {/* Mapping Lines */}
          {N_vals.map((_, i) => {
             if (step > i) {
               return <line key={`l-${i}`} x1={60 + i * 45} y1="54" x2={60 + i * 45} y2="96" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="4" className="animate-in fade-in zoom-in-95 duration-300" />;
             }
             return null;
          })}
       </svg>
    </div>
  );
};

export default ZMappingCanvas;