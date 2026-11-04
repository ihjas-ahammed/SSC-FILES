import React from 'react';

export const renderMechModule1Orbit = (id: string) => {
  switch (id) {
    case 'harmonic-oscillator-analogy':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
           <svg className="w-full h-full" viewBox="0 0 200 100">
             {/* Left: Orbit Eq */}
             <text x="10" y="30" fill="#94a3b8" fontSize="12" fontFamily="monospace">u'' + u = C</text>
             <path d="M 40 50 Q 70 80 100 50" fill="none" stroke="#60a5fa" strokeWidth="2" />
             <text x="10" y="90" fill="#60a5fa" fontSize="10">Orbit Eq</text>

             {/* Right: SHM Eq */}
             <text x="120" y="30" fill="#94a3b8" fontSize="12" fontFamily="monospace">x'' + x = 0</text>
             <path d="M 120 50 Q 150 20 180 50" fill="none" stroke="#f472b6" strokeWidth="2" />
             <text x="130" y="90" fill="#f472b6" fontSize="10">SHM</text>

             <line x1="100" y1="10" x2="100" y2="90" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
             <text x="70" y="15" fill="white" fontSize="10" fontWeight="bold">Mathematical Twins</text>
           </svg>
           <p className="absolute bottom-1 text-[10px] text-slate-400">The orbit equation is just a Harmonic Oscillator with a constant shift!</p>
        </div>
      );
    default:
      return null;
  }
};