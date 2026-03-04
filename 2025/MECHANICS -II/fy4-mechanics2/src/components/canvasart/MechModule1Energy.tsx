import React from 'react';

export const renderMechModule1Energy = (id: string) => {
  switch (id) {
    case 'effective-potential-plot':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
           <svg className="w-full h-full" viewBox="0 0 300 200">
              {/* Axes */}
              <line x1="30" y1="10" x2="30" y2="180" stroke="#64748b" strokeWidth="1" />
              <line x1="30" y1="100" x2="290" y2="100" stroke="#64748b" strokeWidth="1" />
              <text x="20" y="20" fill="#94a3b8" fontSize="10">V_eff</text>
              <text x="280" y="115" fill="#94a3b8" fontSize="10">r</text>

              {/* Centrifugal Term (+1/r^2) */}
              <path d="M 35 10 Q 50 80 100 95" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="4" opacity="0.5"/>
              <text x="50" y="30" fill="#60a5fa" fontSize="8" opacity="0.7">l²/2mr² (Barrier)</text>

              {/* Gravity Term (-1/r) */}
              <path d="M 35 190 Q 60 120 290 105" fill="none" stroke="#f87171" strokeWidth="1" strokeDasharray="4" opacity="0.5"/>
              <text x="150" y="160" fill="#f87171" fontSize="8" opacity="0.7">-k/r (Gravity)</text>

              {/* Total Effective Potential */}
              <path d="M 35 10 C 40 100 45 150 70 150 C 120 150 200 105 290 102" fill="none" stroke="#a78bfa" strokeWidth="3" />
              <text x="90" y="160" fill="#a78bfa" fontSize="10" fontWeight="bold">Total V_eff</text>
              
              {/* Equilibrium Minimum */}
              <circle cx="70" cy="150" r="3" fill="#facc15" />
              <text x="75" y="165" fill="#facc15" fontSize="8">Stable Circular Orbit</text>
           </svg>
           <p className="absolute bottom-1 right-2 text-[10px] text-slate-400">Sum of Centrifugal Barrier + Gravity</p>
        </div>
      );

    case 'energy-levels-conics':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
           <svg className="w-full h-full" viewBox="0 0 300 200">
              <line x1="30" y1="10" x2="30" y2="180" stroke="#64748b" strokeWidth="1" />
              <line x1="30" y1="80" x2="290" y2="80" stroke="#64748b" strokeWidth="1" />
              {/* V_eff curve */}
              <path d="M 35 10 C 40 130 45 160 80 160 C 130 160 200 85 290 82" fill="none" stroke="#334155" strokeWidth="2" />

              {/* E > 0 Hyperbola */}
              <line x1="30" y1="40" x2="290" y2="40" stroke="#f87171" strokeWidth="1.5" strokeDasharray="5" />
              <text x="200" y="35" fill="#f87171" fontSize="10">E {">"} 0 (Hyperbola)</text>

              {/* E = 0 Parabola */}
              <line x1="30" y1="80" x2="290" y2="80" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="200" y="75" fill="#fbbf24" fontSize="10">E = 0 (Parabola)</text>

              {/* E < 0 Ellipse */}
              <line x1="40" y1="120" x2="180" y2="120" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="5" />
              <text x="190" y="125" fill="#4ade80" fontSize="10">E &lt; 0 (Ellipse)</text>

              {/* E min Circle */}
              <circle cx="80" cy="160" r="3" fill="#60a5fa" />
              <text x="90" y="170" fill="#60a5fa" fontSize="10">E min (Circle)</text>
           </svg>
        </div>
      );

    default:
      return null;
  }
};