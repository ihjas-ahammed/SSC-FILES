import React, { useState, useEffect } from 'react';

export const renderModernPhysicsRelativity3 = (id: string): React.ReactElement | null => {
  switch (id) {

    // ── Spacetime Diagram: Worldlines ──────────────────────────────────────
    case 'spacetime-diagram-basics': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="arrow" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#94a3b8" />
              </marker>
            </defs>
            
            {/* Axes */}
            <line x1="150" y1="150" x2="150" y2="10" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="10" y1="80" x2="290" y2="80" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="155" y="20" fill="#94a3b8" fontSize="10">ct (time)</text>
            <text x="280" y="75" fill="#94a3b8" fontSize="10">x</text>

            {/* Light Cone */}
            <line x1="80" y1="150" x2="220" y2="10" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4 2" />
            <line x1="220" y1="150" x2="80" y2="10" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="200" y="30" fill="#facc15" fontSize="9">Light (v=c)</text>

            {/* Particle Worldline */}
            <line x1="150" y1="130" x2="190" y2="30" stroke="#4ade80" strokeWidth="2" />
            <text x="195" y="40" fill="#4ade80" fontSize="9">Particle (v &lt; c)</text>
            
            {/* Rest Worldline */}
            <line x1="120" y1="130" x2="120" y2="30" stroke="#60a5fa" strokeWidth="2" />
            <text x="105" y="40" fill="#60a5fa" fontSize="9">At Rest</text>
          </svg>
        </div>
      );
    }

    // ── Leading Clock Lags Visualization ───────────────────────────────────
    case 'clock-desync-visual': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-3">
          <svg className="w-full" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet">
            {/* Train / Frame S' */}
            <rect x="20" y="40" width="260" height="40" rx="4" fill="rgba(96,165,250,0.1)" stroke="#60a5fa" strokeWidth="1.5" />
            <text x="140" y="30" fill="#60a5fa" fontSize="10" fontWeight="bold">Frame S′ (Moving Right v)</text>
            
            {/* Velocity Vector */}
            <defs>
              <marker id="v-arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" />
              </marker>
            </defs>
            <line x1="150" y1="60" x2="200" y2="60" stroke="#4ade80" strokeWidth="2" markerEnd="url(#v-arr)" opacity="0.3" />

            {/* Clocks */}
            {/* Rear Clock */}
            <circle cx="50" cy="60" r="12" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="50" y1="60" x2="58" y2="52" stroke="#facc15" strokeWidth="1.5" /> {/* 1:30 approx */}
            <text x="40" y="85" fill="#e2e8f0" fontSize="9">Rear</text>
            <text x="35" y="98" fill="#4ade80" fontSize="9">Ahead</text>

            {/* Front Clock */}
            <circle cx="250" cy="60" r="12" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="250" y1="60" x2="242" y2="52" stroke="#facc15" strokeWidth="1.5" /> {/* 10:30 approx */}
            <text x="240" y="85" fill="#e2e8f0" fontSize="9">Front</text>
            <text x="235" y="98" fill="#f43f5e" fontSize="9">Lags</text>

            <text x="80" y="115" fill="#94a3b8" fontSize="9">Simultaneous in S′ $\neq$ Simultaneous in S</text>
          </svg>
        </div>
      );
    }

    // ── Twin Paradox Worldlines ────────────────────────────────────────────
    case 'twin-paradox-worldlines': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid meet">
            {/* Axes */}
            <line x1="20" y1="150" x2="20" y2="10" stroke="#475569" strokeWidth="1.5" />
            <line x1="20" y1="150" x2="280" y2="150" stroke="#475569" strokeWidth="1.5" />
            <text x="25" y="20" fill="#94a3b8" fontSize="10">ct</text>
            <text x="270" y="145" fill="#94a3b8" fontSize="10">x</text>

            {/* Earth Twin (Casper) */}
            <line x1="20" y1="150" x2="20" y2="30" stroke="#60a5fa" strokeWidth="3" />
            <text x="30" y="40" fill="#60a5fa" fontSize="9">Earth Twin</text>

            {/* Space Twin (Amelia) */}
            <path d="M 20 150 L 120 90 L 20 30" fill="none" stroke="#f97316" strokeWidth="3" strokeLinejoin="round" />
            <text x="125" y="95" fill="#f97316" fontSize="9">Turnaround</text>
            <text x="60" y="110" fill="#f97316" fontSize="9">Outbound</text>
            <text x="60" y="70" fill="#f97316" fontSize="9">Inbound</text>

            {/* Light Signals (Optional visualization of Doppler) */}
            <line x1="20" y1="130" x2="120" y2="90" stroke="#facc15" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
            <line x1="20" y1="110" x2="70" y2="90" stroke="#facc15" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />

            <text x="140" y="130" fill="#e2e8f0" fontSize="8" className="font-mono">
              Path length $\int ds$ is LONGER for Earth twin.
            </text>
            <text x="140" y="142" fill="#e2e8f0" fontSize="8" className="font-mono">
              Proper time $\tau = \int ds/c$ is MAX for inertial path.
            </text>
          </svg>
        </div>
      );
    }

    default:
      return null;
  }
};