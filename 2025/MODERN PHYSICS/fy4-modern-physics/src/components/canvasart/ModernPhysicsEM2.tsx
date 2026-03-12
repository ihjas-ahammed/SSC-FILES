import React, { useState, useEffect } from 'react';

export const renderModernPhysicsEM2 = (id: string): React.ReactElement | null => {
  switch (id) {

    // ── Photoelectric Apparatus ───────────────────────────────────────────
    case 'photoelectric-setup': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full max-w-[320px]" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#facc15" />
              </marker>
              <marker id="earr" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                <path d="M0,0 L4,2 L0,4 Z" fill="#60a5fa" />
              </marker>
            </defs>
            
            {/* Light beam */}
            <path d="M 20 20 Q 40 40 60 70" fill="none" stroke="#facc15" strokeWidth="2" markerEnd="url(#arr)"/>
            <path d="M 40 20 Q 60 40 70 85" fill="none" stroke="#facc15" strokeWidth="2" markerEnd="url(#arr)"/>
            <text x="20" y="15" fill="#facc15" fontSize="11" fontWeight="bold">Light (intensity I)</text>

            {/* Vacuum tube */}
            <rect x="50" y="40" width="220" height="120" rx="60" fill="rgba(255,255,255,0.05)" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 2"/>
            
            {/* Emitter plate */}
            <rect x="70" y="70" width="10" height="60" rx="3" fill="#cbd5e1" />
            <text x="60" y="145" fill="#cbd5e1" fontSize="10">Emitter</text>
            
            {/* Collector plate */}
            <rect x="240" y="70" width="10" height="60" rx="3" fill="#cbd5e1" />
            <text x="235" y="145" fill="#cbd5e1" fontSize="10">Collector</text>

            {/* Electrons jumping across */}
            {['#60a5fa', '#93c5fd', '#3b82f6'].map((color, i) => (
               <g key={i} className={i % 2 === 0 ? "animate-pulse" : ""} style={{ animationDelay: `${i * 300}ms`}}>
                 <circle cx={90 + i*15} cy={85 + i*15} r="4" fill={color} />
                 <line x1={95 + i*15} y1={85 + i*15} x2={220} y2={85 + i*15} stroke={color} strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#earr)"/>
                 <text x={84 + i*15} y={80 + i*15} fill="#fff" fontSize="8">-</text>
               </g>
            ))}

            {/* Wires */}
            <polyline points="75,70 75,20 160,20 160,30" fill="none" stroke="#94a3b8" strokeWidth="2" />
            <polyline points="245,70 245,20 180,20" fill="none" stroke="#94a3b8" strokeWidth="2" />
            
            {/* Ammeter */}
            <circle cx="170" cy="20" r="10" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
            <text x="166" y="24" fill="#cbd5e1" fontSize="11" fontWeight="bold">A</text>
            
            {/* Potentiometer area */}
            <polyline points="75,180 75,130" fill="none" stroke="#94a3b8" strokeWidth="2" />
            <polyline points="245,180 245,130" fill="none" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 75 180 L 140 180" fill="none" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 180 180 L 245 180" fill="none" stroke="#94a3b8" strokeWidth="2" />
            
            <circle cx="160" cy="180" r="20" fill="#3b82f6" opacity="0.3"/>
            <text x="135" y="195" fill="#60a5fa" fontSize="9">Variable Voltage (Vs)</text>
            <rect x="140" y="170" width="40" height="20" fill="none" stroke="#e2e8f0" strokeWidth="2" />
            
          </svg>
        </div>
      );
    }

    // ── Photoelectric I vs V graph (Fig 3.10 and Ex 3.5 base) ───────────────
    case 'photoelectric-iv': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid meet">
             <defs>
              <marker id="axisArrow" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#94a3b8" />
              </marker>
            </defs>
            {/* Axes */}
            <line x1="20" y1="130" x2="280" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#axisArrow)"/>
            <line x1="90" y1="140" x2="90" y2="10" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#axisArrow)"/>
            
            <text x="240" y="142" fill="#cbd5e1" fontSize="10">Voltage V</text>
            <text x="20" y="20" fill="#cbd5e1" fontSize="10">Current i</text>
            
            {/* Grid/Marks */}
            <line x1="50" y1="127" x2="50" y2="133" stroke="#e2e8f0" strokeWidth="1.5"/>
            <text x="40" y="145" fill="#f43f5e" fontSize="10">-Vs</text>

            <text x="88" y="142" fill="#94a3b8" fontSize="8">0</text>
            
            {/* Curve 1 (High Intensity) */}
            <path d="M 50 130 C 51 130, 80 40, 110 40 L 260 40" fill="none" stroke="#4ade80" strokeWidth="2.5" />
            <text x="210" y="32" fill="#4ade80" fontSize="10" fontWeight="bold">I₂ = 2x Intensity</text>

            {/* Curve 2 (Low Intensity) */}
            <path d="M 50 130 C 51 130, 80 85, 110 85 L 260 85" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="5 3"/>
            <text x="220" y="78" fill="#60a5fa" fontSize="10" fontWeight="bold">I₁=Base Int.</text>

            <text x="20" y="110" fill="#f43f5e" fontSize="8">Intercept ==</text>
            <text x="20" y="120" fill="#f43f5e" fontSize="8">Same K_max!</text>
          </svg>
        </div>
      );
    }

    // ── Millikan Pot-Freq Plot ─────────────────────────────────────────────
    case 'millikan-plot': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="axisArr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#94a3b8" />
              </marker>
            </defs>
            <line x1="30" y1="130" x2="280" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#axisArr)"/>
            <line x1="50" y1="140" x2="50" y2="20" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#axisArr)"/>
            
            <text x="200" y="143" fill="#cbd5e1" fontSize="10">Frequency (f)</text>
            <text x="12" y="25" fill="#cbd5e1" fontSize="10">Vs</text>

            {/* Threshold feq intercept */}
            <circle cx="110" cy="130" r="4" fill="#f97316"/>
            <text x="100" y="145" fill="#f97316" fontSize="12" fontWeight="bold">fc</text>

            {/* Millikan's line */}
            <line x1="110" y1="130" x2="260" y2="30" stroke="#60a5fa" strokeWidth="2.5"/>
            
            {/* Slopes and dots */}
            <circle cx="140" cy="110" r="3" fill="#fff" />
            <circle cx="170" cy="90" r="3" fill="#fff" />
            <circle cx="200" cy="70" r="3" fill="#fff" />

            {/* Text labeling */}
            <text x="150" y="60" fill="#4ade80" fontSize="11" fontWeight="bold">Slope = h/e</text>
            <path d="M 140 110 L 170 110 L 170 90" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="3 3"/>
            
            {/* Downward imaginary dashed line defining Phi */}
            <line x1="110" y1="130" x2="50" y2="170" stroke="#f43f5e" strokeWidth="1" strokeDasharray="4 2"/>
            <text x="18" y="158" fill="#f43f5e" fontSize="9">-φ/e</text>
          </svg>
        </div>
      );
    }

    default:
      return null;
  }
};