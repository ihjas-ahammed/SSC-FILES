import React, { useState, useEffect } from 'react';

export const renderModernPhysicsAtomic2 = (id: string): React.ReactElement | null => {
  switch (id) {

    // ── Hydrogen Line Spectra ──────────────────────────────────────────
    case 'hydrogen-line-spectra': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet">
            {/* Background */}
            <rect x="10" y="30" width="280" height="40" fill="#0f172a" stroke="#334155" strokeWidth="2" rx="4" />
            <text x="150" y="20" fill="#cbd5e1" fontSize="12" fontWeight="bold" textAnchor="middle">Hydrogen Balmer Series (Visible)</text>
            
            {/* Spectral Lines */}
            {/* H-alpha (656 nm) - Red */}
            <rect x="230" y="30" width="3" height="40" fill="#ef4444" />
            <text x="231" y="85" fill="#ef4444" fontSize="9" textAnchor="middle">656 nm</text>
            
            {/* H-beta (486 nm) - Blue-Green */}
            <rect x="140" y="30" width="2" height="40" fill="#0ea5e9" />
            <text x="141" y="85" fill="#0ea5e9" fontSize="9" textAnchor="middle">486 nm</text>

            {/* H-gamma (434 nm) - Blue-Violet */}
            <rect x="100" y="30" width="1.5" height="40" fill="#8b5cf6" />
            <text x="101" y="85" fill="#8b5cf6" fontSize="9" textAnchor="middle">434 nm</text>

            {/* H-delta (410 nm) - Violet */}
            <rect x="80" y="30" width="1" height="40" fill="#a78bfa" />
            <text x="81" y="85" fill="#a78bfa" fontSize="9" textAnchor="middle">410 nm</text>

            {/* Series limit indicator */}
            <line x1="50" y1="25" x2="50" y2="75" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
            <text x="50" y="85" fill="#94a3b8" fontSize="8" textAnchor="middle">Limit (365nm)</text>
            
            <text x="150" y="110" fill="#64748b" fontSize="9" textAnchor="middle">Lines converge towards the series limit</text>
          </svg>
        </div>
      );
    }

    // ── Bohr Model Orbits ──────────────────────────────────────────────
    case 'bohr-model-orbits': {
      const BohrOrbit = () => {
        const [phase, setPhase] = useState(0);
        
        useEffect(() => {
          const id = setInterval(() => setPhase(p => (p + 0.05) % (2 * Math.PI)), 30);
          return () => clearInterval(id);
        }, []);

        const cx = 150;
        const cy = 75;
        
        // n=2 orbit electron position
        const ex = cx + 40 * Math.cos(phase);
        const ey = cy + 40 * Math.sin(phase);

        return (
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
              {/* Nucleus */}
              <circle cx={cx} cy={cy} r="6" fill="#facc15" />
              <text x={cx} y={cy+3} fill="#000" fontSize="8" fontWeight="bold" textAnchor="middle">+</text>

              {/* Orbits */}
              <circle cx={cx} cy={cy} r="20" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x={cx+14} y={cy-14} fill="#64748b" fontSize="8">n=1</text>

              <circle cx={cx} cy={cy} r="40" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x={cx+30} y={cy-30} fill="#64748b" fontSize="8">n=2</text>

              <circle cx={cx} cy={cy} r="70" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x={cx+52} y={cy-52} fill="#64748b" fontSize="8">n=3</text>

              {/* Electron */}
              <circle cx={ex} cy={ey} r="4" fill="#60a5fa" />
              <text x={ex} y={ey+2} fill="#fff" fontSize="6" textAnchor="middle">-</text>

              {/* Transition arrow (n=3 to n=2) */}
              <defs>
                <marker id="jump" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                  <path d="M0,0 L5,2.5 L0,5 Z" fill="#4ade80" />
                </marker>
                <marker id="photon" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                  <path d="M0,0 L5,2.5 L0,5 Z" fill="#f472b6" />
                </marker>
              </defs>
              <line x1={cx-70} y1={cy} x2={cx-45} y2={cy} stroke="#4ade80" strokeWidth="2" markerEnd="url(#jump)" />
              
              {/* Emitted Photon */}
              <path d={`M ${cx-40} ${cy} Q ${cx-50} ${cy+15} ${cx-60} ${cy+10} T ${cx-80} ${cy+20} T ${cx-100} ${cy+10}`} fill="none" stroke="#f472b6" strokeWidth="1.5" markerEnd="url(#photon)" />
              <text x={cx-90} y={cy+5} fill="#f472b6" fontSize="10">hf</text>

            </svg>
          </div>
        );
      }
      return <BohrOrbit />;
    }

    // ── Energy Level Diagram ───────────────────────────────────────────
    case 'energy-level-diagram': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="arr-down" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#60a5fa" />
              </marker>
            </defs>
            
            {/* Energy Levels */}
            {/* n=1 */}
            <line x1="60" y1="140" x2="240" y2="140" stroke="#f8fafc" strokeWidth="2" />
            <text x="35" y="143" fill="#cbd5e1" fontSize="10">n=1</text>
            <text x="250" y="143" fill="#cbd5e1" fontSize="10">-13.6 eV</text>

            {/* n=2 */}
            <line x1="60" y1="80" x2="240" y2="80" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="35" y="83" fill="#cbd5e1" fontSize="10">n=2</text>
            <text x="250" y="83" fill="#cbd5e1" fontSize="10">-3.40 eV</text>

            {/* n=3 */}
            <line x1="60" y1="50" x2="240" y2="50" stroke="#94a3b8" strokeWidth="1" />
            <text x="35" y="53" fill="#94a3b8" fontSize="10">n=3</text>
            <text x="250" y="53" fill="#94a3b8" fontSize="10">-1.51 eV</text>

            {/* n=4 */}
            <line x1="60" y1="35" x2="240" y2="35" stroke="#64748b" strokeWidth="1" />
            <text x="35" y="38" fill="#64748b" fontSize="10">n=4</text>
            <text x="250" y="38" fill="#64748b" fontSize="10">-0.85 eV</text>

            {/* n=inf */}
            <line x1="60" y1="15" x2="240" y2="15" stroke="#facc15" strokeWidth="1" strokeDasharray="4 2" />
            <text x="35" y="18" fill="#facc15" fontSize="10">n=∞</text>
            <text x="250" y="18" fill="#facc15" fontSize="10">0.00 eV</text>

            {/* Transitions */}
            {/* Lyman Alpha */}
            <line x1="100" y1="80" x2="100" y2="135" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#arr-down)" />
            <text x="105" y="115" fill="#60a5fa" fontSize="8">Lyman</text>
            
            {/* Balmer Alpha */}
            <line x1="150" y1="50" x2="150" y2="75" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arr-down)" />
            <text x="155" y="68" fill="#ef4444" fontSize="8">Balmer</text>

            {/* Paschen Alpha */}
            <line x1="200" y1="35" x2="200" y2="45" stroke="#a78bfa" strokeWidth="1.5" markerEnd="url(#arr-down)" />
            <text x="205" y="42" fill="#a78bfa" fontSize="8">Paschen</text>

          </svg>
        </div>
      );
    }

    default:
      return null;
  }
};