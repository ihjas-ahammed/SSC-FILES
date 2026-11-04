import React from 'react';

export const renderMechModule1CentralForces = (id: string) => {
  switch (id) {
    case 'central-force-vector':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative overflow-hidden">
           <svg className="w-full h-full" viewBox="0 0 200 100">
              {/* Center of Force */}
              <circle cx="100" cy="50" r="4" fill="#facc15" className="shadow-[0_0_10px_yellow]" />
              <text x="95" y="62" fill="#facc15" fontSize="8" fontWeight="bold">Origin</text>
              
              {/* Orbit Path */}
              <path d="M 40 50 Q 100 10 160 50" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
              
              {/* Particle */}
              <circle cx="140" cy="40" r="3" fill="#60a5fa">
                 <animate attributeName="cx" values="140;138;140" dur="2s" repeatCount="indefinite" />
                 <animate attributeName="cy" values="40;42;40" dur="2s" repeatCount="indefinite" />
              </circle>
              
              {/* Radius Vector r */}
              <line x1="100" y1="50" x2="140" y2="40" stroke="#94a3b8" strokeWidth="1" />
              <text x="115" y="42" fill="#94a3b8" fontSize="8" fontStyle="italic">r</text>

              {/* Force Vector F (Central) */}
              <line x1="140" y1="40" x2="110" y2="47.5" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="125" y="55" fill="#ef4444" fontSize="8" fontWeight="bold">F(r)</text>
              
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                </marker>
              </defs>
           </svg>
           <p className="absolute bottom-2 text-[10px] text-slate-400 font-bold">Force is parallel to position vector r</p>
        </div>
      );

    case 'planar-motion-plane':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative overflow-hidden perspective-[800px]">
           {/* 3D Plane Representation using SVG transforms */}
           <svg className="w-full h-full" viewBox="0 0 200 150">
              {/* The Plane Grid */}
              <g transform="translate(100, 100) scale(1, 0.4) rotate(-30)">
                 <rect x="-80" y="-80" width="160" height="160" fill="rgba(30, 41, 59, 0.5)" stroke="#475569" strokeWidth="1" />
                 {/* Orbit on Plane */}
                 <ellipse cx="0" cy="0" rx="60" ry="60" fill="none" stroke="#60a5fa" strokeWidth="2" />
                 {/* Center */}
                 <circle cx="0" cy="0" r="5" fill="#facc15" />
                 
                 {/* Radius Vector */}
                 <line x1="0" y1="0" x2="42" y2="42" stroke="#94a3b8" strokeWidth="2" />
                 
                 {/* Velocity Vector (Tangent) */}
                 <line x1="42" y1="42" x2="20" y2="70" stroke="#4ade80" strokeWidth="2" />
              </g>

              {/* Angular Momentum Vector (Perpendicular to Plane) */}
              {/* Manually calculated perspective approximate */}
              <line x1="100" y1="100" x2="100" y2="40" stroke="#c084fc" strokeWidth="3" markerEnd="url(#arrowhead_L)" />
              <text x="105" y="50" fill="#c084fc" fontSize="12" fontWeight="bold">L = const</text>

              <defs>
                <marker id="arrowhead_L" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#c084fc" />
                </marker>
              </defs>
           </svg>
           <p className="absolute top-2 right-2 text-[10px] text-purple-400 font-bold text-right">L is fixed.<br/>Motion is stuck in the plane ⊥ L.</p>
        </div>
      );

    case 'lennard-jones-potential':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
           <svg className="w-full h-full" viewBox="0 0 200 120">
              {/* Axes */}
              <line x1="20" y1="10" x2="20" y2="100" stroke="#64748b" strokeWidth="1" />
              <line x1="20" y1="60" x2="190" y2="60" stroke="#64748b" strokeWidth="1" />
              <text x="10" y="15" fill="#94a3b8" fontSize="8">V(r)</text>
              <text x="190" y="70" fill="#94a3b8" fontSize="8">r</text>

              {/* The Curve: High repulsion at small r, shallow attraction well, goes to 0 */}
              <path d="M 25 5 Q 35 110 50 110 Q 90 55 190 58" fill="none" stroke="#f472b6" strokeWidth="2" />
              
              {/* Equilibrium point */}
              <circle cx="50" cy="110" r="3" fill="#f472b6" />
              <text x="55" y="115" fill="#f472b6" fontSize="8">Stable Equilibrium</text>

              {/* Zero line annotation */}
              <text x="25" y="55" fill="#64748b" fontSize="6">0 Energy</text>
           </svg>
           <p className="absolute bottom-1 text-[10px] text-pink-400 font-bold">Lennard-Jones Potential: Repulsive close up, Attractive far away</p>
        </div>
      );

    case 'geometric-area-sweep':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
            <svg className="w-full h-full" viewBox="0 0 200 100">
               <path d="M 100 90 L 160 50 L 140 30 Z" fill="rgba(96, 165, 250, 0.3)" stroke="none" />
               <line x1="100" y1="90" x2="160" y2="50" stroke="#94a3b8" strokeWidth="1" />
               <line x1="100" y1="90" x2="140" y2="30" stroke="#94a3b8" strokeWidth="1" />
               <circle cx="100" cy="90" r="3" fill="#facc15" />
               <path d="M 160 50 Q 150 40 140 30" stroke="#60a5fa" strokeWidth="2" fill="none" />
               <text x="165" y="50" fill="#60a5fa" fontSize="8">dr</text>
               <text x="120" y="60" fill="white" fontSize="10">dA = 1/2 |r x dr|</text>
            </svg>
        </div>
      );

    default:
      return null;
  }
};