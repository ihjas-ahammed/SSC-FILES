import React, { useState, useEffect } from 'react';

export const renderModernPhysicsAtomic3 = (id: string): React.ReactElement | null => {
  switch (id) {
    // ── Franck-Hertz Graph ──────────────────────────────────────────
    case 'franck-hertz-graph': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full max-w-[320px]" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="axArr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#94a3b8" />
              </marker>
            </defs>
            
            {/* Axes */}
            <line x1="30" y1="170" x2="300" y2="170" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#axArr)"/>
            <line x1="30" y1="170" x2="30" y2="10" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#axArr)"/>
            
            <text x="250" y="185" fill="#cbd5e1" fontSize="10">Voltage (V)</text>
            <text x="5" y="90" fill="#cbd5e1" fontSize="10" transform="rotate(-90, 10, 90)">Current (I)</text>
            
            {/* Grid Lines */}
            <line x1="90" y1="165" x2="90" y2="175" stroke="#94a3b8" strokeWidth="1" />
            <text x="80" y="185" fill="#60a5fa" fontSize="10">4.9 V</text>

            <line x1="150" y1="165" x2="150" y2="175" stroke="#94a3b8" strokeWidth="1" />
            <text x="140" y="185" fill="#60a5fa" fontSize="10">9.8 V</text>

            <line x1="210" y1="165" x2="210" y2="175" stroke="#94a3b8" strokeWidth="1" />
            <text x="195" y="185" fill="#60a5fa" fontSize="10">14.7 V</text>

            {/* Simulated Data Curve */}
            <path 
              d="M 30 170 Q 70 80 85 40 Q 95 140 100 120 Q 130 50 145 20 Q 155 120 160 100 Q 190 30 205 10 Q 215 100 220 80" 
              fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinejoin="round"
            />

            {/* Explanatory Annotations */}
            <circle cx="85" cy="40" r="4" fill="#f43f5e" />
            <circle cx="145" cy="20" r="4" fill="#f43f5e" />
            <circle cx="205" cy="10" r="4" fill="#f43f5e" />

            <text x="95" y="30" fill="#f43f5e" fontSize="9">1st Inelastic Collision</text>
            <text x="155" y="10" fill="#f43f5e" fontSize="9">2nd Collision</text>
          </svg>
        </div>
      );
    }

    // ── Correspondence Principle ────────────────────────────────────
    case 'correspondence-principle': {
      const SpiralOrbits = () => {
        const [phase, setPhase] = useState(0);
        
        useEffect(() => {
          const id = setInterval(() => setPhase(p => (p + 0.05) % (2 * Math.PI)), 30);
          return () => clearInterval(id);
        }, []);

        const cx = 150;
        const cy = 75;
        
        // Classical continuous spiral position
        const radius = 50 + 20 * Math.cos(phase * 0.5); // fake spiral
        const cx1 = cx - 80 + radius * Math.cos(phase * 2);
        const cy1 = cy + radius * Math.sin(phase * 2);

        // Quantum discrete jump position
        const qRadius = Math.cos(phase * 0.5) > 0 ? 70 : 50; 
        const cx2 = cx + 80 + qRadius * Math.cos(phase * 2);
        const cy2 = cy + qRadius * Math.sin(phase * 2);

        return (
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <svg className="w-full" viewBox="0 0 320 150" preserveAspectRatio="xMidYMid meet">
              
              {/* Left Side: Classical Spiral */}
              <text x="70" y="15" fill="#f43f5e" fontSize="10" textAnchor="middle" fontWeight="bold">Classical Atom</text>
              <circle cx={cx - 80} cy={cy} r="3" fill="#facc15" />
              <path d={`M ${cx-80} ${cy} m 0 -70 a 70 70 0 1 1 0 140 a 70 70 0 1 1 0 -140`} fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
              <path d={`M ${cx-80} ${cy} m 0 -50 a 50 50 0 1 1 0 100 a 50 50 0 1 1 0 -100`} fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
              
              {/* Spiral path trace */}
              <path d={`M ${cx-80+70} ${cy} Q ${cx-80+60} ${cy+60} ${cx-80} ${cy+50} T ${cx-80-40} ${cy}`} fill="none" stroke="#f43f5e" strokeWidth="1.5" />
              
              <circle cx={cx1} cy={cy1} r="3" fill="#60a5fa" />
              <text x="70" y="145" fill="#cbd5e1" fontSize="8" textAnchor="middle">Continuous radiation</text>


              {/* Right Side: Quantum Jumps */}
              <text x="230" y="15" fill="#4ade80" fontSize="10" textAnchor="middle" fontWeight="bold">Quantum Atom (large n)</text>
              <circle cx={cx + 80} cy={cy} r="3" fill="#facc15" />
              <circle cx={cx + 80} cy={cy} r="70" fill="none" stroke="#4ade80" strokeWidth="1.5" />
              <circle cx={cx + 80} cy={cy} r="50" fill="none" stroke="#4ade80" strokeWidth="1.5" />
              
              <circle cx={cx2} cy={cy2} r="3" fill="#60a5fa" />
              <text x="230" y="145" fill="#cbd5e1" fontSize="8" textAnchor="middle">Discrete jumps approach spiral</text>
              
              {/* Jump photon indicator */}
              {Math.cos(phase * 0.5) <= 0 && Math.cos(phase * 0.5) > -0.1 && (
                 <path d={`M ${cx+80} ${cy-60} L ${cx+120} ${cy-80}`} fill="none" stroke="#facc15" strokeWidth="2" strokeDasharray="3 2" />
              )}
            </svg>
          </div>
        );
      }
      return <SpiralOrbits />;
    }

    default:
      return null;
  }
};