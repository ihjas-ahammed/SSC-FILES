import React, { useState, useEffect } from 'react';

export const renderModernPhysicsEM1 = (id: string): React.ReactElement | null => {
  switch (id) {

    // ── EM Wave E and B fields ─────────────────────────────────────────────
    case 'em-wave-diagram': {
      const EMWave = () => {
        const [phase, setPhase] = useState(0);
        useEffect(() => {
          const id = setInterval(() => setPhase(p => (p - 0.05) % (2 * Math.PI)), 30);
          return () => clearInterval(id);
        }, []);

        // Generate points for E (y-axis) and B (z-axis, rendered as slanted lines)
        const ePoints = [];
        const bLines = [];
        for (let x = 0; x <= 250; x += 5) {
          const k = 0.05;
          const y = Math.sin(k * x + phase) * 40;
          ePoints.push(`${x + 20},${75 - y}`);
          
          // B field is perpendicular (drawn at an angle for 3D effect)
          if (x % 15 === 0) {
            bLines.push(
              <line 
                key={`b${x}`}
                x1={x + 20} y1={75} 
                x2={x + 20 - y * 0.4} y2={75 + y * 0.4} 
                stroke="#facc15" strokeWidth="1.5" opacity="0.8"
              />
            );
            // E field vectors
            bLines.push(
              <line 
                key={`e${x}`}
                x1={x + 20} y1={75} 
                x2={x + 20} y2={75 - y} 
                stroke="#60a5fa" strokeWidth="1.5" opacity="0.8"
              />
            );
          }
        }

        return (
          <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
            {/* Axis */}
            <line x1="10" y1="75" x2="280" y2="75" stroke="#475569" strokeWidth="1.5" />
            <text x="285" y="79" fill="#94a3b8" fontSize="10">z</text>

            {/* B field lines */}
            {bLines}

            {/* E field envelope */}
            <polyline points={ePoints.join(' ')} fill="none" stroke="#60a5fa" strokeWidth="2" />
            
            <text x="20" y="20" fill="#60a5fa" fontSize="10" fontWeight="bold">Electric Field (E)</text>
            <text x="20" y="140" fill="#facc15" fontSize="10" fontWeight="bold">Magnetic Field (B)</text>
          </svg>
        );
      };
      return <EMWave />;
    }

    // ── Double Slit Interference ───────────────────────────────────────────
    case 'double-slit-diagram': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid meet">
            {/* Incoming waves */}
            {[20, 35, 50].map(x => (
              <line key={x} x1={x} y1="30" x2={x} y2="130" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5" />
            ))}
            
            {/* Barrier */}
            <rect x="70" y="10" width="4" height="60" fill="#cbd5e1" />
            <rect x="70" y="90" width="4" height="60" fill="#cbd5e1" />
            <rect x="70" y="76" width="4" height="8" fill="#cbd5e1" />
            
            {/* Circular waves from slits */}
            {[20, 40, 60, 80].map(r => (
              <g key={`w1_${r}`}>
                <path d={`M 74 ${73 - r} A ${r} ${r} 0 0 1 74 ${73 + r}`} fill="none" stroke="#a78bfa" strokeWidth="1.5" opacity={1 - r/100} />
                <path d={`M 74 ${87 - r} A ${r} ${r} 0 0 1 74 ${87 + r}`} fill="none" stroke="#a78bfa" strokeWidth="1.5" opacity={1 - r/100} />
              </g>
            ))}

            {/* Screen */}
            <line x1="240" y1="10" x2="240" y2="150" stroke="#cbd5e1" strokeWidth="3" />
            
            {/* Intensity pattern (approximate) */}
            <path d="M 240 10 Q 280 25 240 40 Q 290 55 240 70 Q 300 80 240 90 Q 290 105 240 120 Q 280 135 240 150" fill="none" stroke="#facc15" strokeWidth="2" />
            
            <text x="245" y="83" fill="#facc15" fontSize="9">Max (n=0)</text>
            <text x="245" y="53" fill="#facc15" fontSize="9">Max (n=1)</text>
            <text x="245" y="113" fill="#facc15" fontSize="9">Max (n=1)</text>
          </svg>
        </div>
      );
    }

    // ── Bragg Diffraction Planes ───────────────────────────────────────────
    case 'bragg-diffraction': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="ray" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#60a5fa" />
              </marker>
            </defs>

            {/* Crystal Lattice Points */}
            {[50, 100].map(y => (
              <g key={`row${y}`}>
                <line x1="20" y1={y} x2="280" y2={y} stroke="#334155" strokeWidth="1" strokeDasharray="4 2" />
                {[60, 100, 140, 180, 220].map(x => (
                  <circle key={`pt${x}${y}`} cx={x} cy={y} r="4" fill="#cbd5e1" />
                ))}
              </g>
            ))}

            <line x1="260" y1="50" x2="260" y2="100" stroke="#facc15" strokeWidth="1.5" />
            <text x="265" y="80" fill="#facc15" fontSize="10">d</text>

            {/* Ray 1 */}
            <line x1="40" y1="10" x2="140" y2="50" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#ray)" />
            <line x1="140" y1="50" x2="240" y2="10" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#ray)" />

            {/* Ray 2 */}
            <line x1="0" y1="10" x2="140" y2="100" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#ray)" />
            <line x1="140" y1="100" x2="280" y2="10" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#ray)" />

            {/* Path difference markers */}
            <line x1="140" y1="50" x2="102" y2="76" stroke="#f97316" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="140" y1="50" x2="178" y2="76" stroke="#f97316" strokeWidth="1.5" strokeDasharray="2 2" />
            
            <text x="110" y="95" fill="#f97316" fontSize="9">d sin θ</text>
            <text x="150" y="95" fill="#f97316" fontSize="9">d sin θ</text>

            <path d="M 60 50 A 20 20 0 0 1 78 44" fill="none" stroke="#4ade80" strokeWidth="1.5" />
            <text x="82" y="44" fill="#4ade80" fontSize="10">θ</text>
            
            <text x="10" y="140" fill="#e2e8f0" fontSize="10" fontWeight="bold">Bragg's Law: 2d sin θ = nλ</text>
          </svg>
        </div>
      );
    }

    default:
      return null;
  }
};