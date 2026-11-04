import React, { useState, useEffect } from 'react';

export const renderModernPhysicsRelativity4 = (id: string): React.ReactElement | null => {
  switch (id) {

    // ── Energy-Momentum Triangle ───────────────────────────────────────────
    case 'energy-momentum-triangle': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4">
          <svg className="w-full max-w-[250px]" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet">
            {/* Triangle base (mc^2) */}
            <line x1="20" y1="130" x2="160" y2="130" stroke="#60a5fa" strokeWidth="3" />
            <text x="75" y="145" fill="#60a5fa" fontSize="12" fontWeight="bold">mc²</text>
            
            {/* Triangle height (pc) */}
            <line x1="160" y1="130" x2="160" y2="30" stroke="#f97316" strokeWidth="3" />
            <text x="170" y="85" fill="#f97316" fontSize="12" fontWeight="bold">pc</text>

            {/* Triangle hypotenuse (E) */}
            <line x1="20" y1="130" x2="160" y2="30" stroke="#4ade80" strokeWidth="3" />
            <text x="65" y="70" fill="#4ade80" fontSize="12" fontWeight="bold">E</text>

            {/* Right angle square */}
            <rect x="150" y="120" width="10" height="10" fill="none" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Angle \theta representing velocity v/c */}
            <path d="M 50 130 A 30 30 0 0 0 44 113" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="52" y="122" fill="#cbd5e1" fontSize="10">θ</text>
            
            <text x="0" y="15" fill="#e2e8f0" fontSize="10" className="font-mono">sin(θ) = v/c</text>
            <text x="0" y="30" fill="#e2e8f0" fontSize="10" className="font-mono">E² = (pc)² + (mc²)²</text>
          </svg>
        </div>
      );
    }

    // ── 2D Collision (Ex 2.20) ─────────────────────────────────────────────
    case 'collision-2d': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="k-arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#60a5fa" />
              </marker>
              <marker id="lam-arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#4ade80" />
              </marker>
              <marker id="pi-arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
              </marker>
            </defs>

            {/* Axes */}
            <line x1="100" y1="75" x2="280" y2="75" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 2" />
            
            {/* Before Collision */}
            <circle cx="30" cy="75" r="8" fill="#60a5fa" />
            <text x="25" y="60" fill="#60a5fa" fontSize="10">K⁻</text>
            <line x1="40" y1="75" x2="80" y2="75" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#k-arr)" />
            
            <circle cx="100" cy="75" r="8" fill="#cbd5e1" />
            <text x="96" y="60" fill="#cbd5e1" fontSize="10">p</text>

            {/* After Collision */}
            {/* Lambda */}
            <line x1="100" y1="75" x2="160" y2="120" stroke="#4ade80" strokeWidth="2" markerEnd="url(#lam-arr)" />
            <circle cx="170" cy="127" r="8" fill="#4ade80" />
            <text x="185" y="130" fill="#4ade80" fontSize="10">Λ⁰</text>
            
            {/* Pi Zero */}
            <line x1="100" y1="75" x2="150" y2="30" stroke="#f97316" strokeWidth="2" markerEnd="url(#pi-arr)" />
            <circle cx="160" cy="21" r="6" fill="#f97316" />
            <text x="172" y="25" fill="#f97316" fontSize="10">π⁰</text>

            {/* Angles */}
            <path d="M 125 75 A 25 25 0 0 1 120 93" fill="none" stroke="#94a3b8" strokeWidth="1" />
            <text x="130" y="90" fill="#94a3b8" fontSize="10">φ</text>

            <path d="M 120 57 A 25 25 0 0 1 125 75" fill="none" stroke="#94a3b8" strokeWidth="1" />
            <text x="130" y="65" fill="#94a3b8" fontSize="10">θ</text>
          </svg>
        </div>
      );
    }

    // ── Particle Creation (Ex 2.21) ─────────────────────────────────────────
    case 'particle-creation': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="p-arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#60a5fa" />
              </marker>
            </defs>

            {/* Before */}
            <text x="10" y="20" fill="#94a3b8" fontSize="10">Before: p + p</text>
            <circle cx="40" cy="60" r="8" fill="#60a5fa" />
            <line x1="50" y1="60" x2="80" y2="60" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#p-arr)" />
            <text x="60" y="50" fill="#60a5fa" fontSize="10">v</text>
            
            <circle cx="100" cy="60" r="8" fill="#cbd5e1" />
            <text x="96" y="45" fill="#cbd5e1" fontSize="10">p (rest)</text>

            <line x1="140" y1="10" x2="140" y2="110" stroke="#475569" strokeWidth="1" strokeDasharray="4 2" />

            {/* After */}
            <text x="150" y="20" fill="#94a3b8" fontSize="10">After: p + p + p + p̄ (Threshold)</text>
            {/* Clump of 4 particles moving together */}
            <circle cx="200" cy="53" r="7" fill="#60a5fa" />
            <circle cx="214" cy="53" r="7" fill="#60a5fa" />
            <circle cx="200" cy="67" r="7" fill="#60a5fa" />
            <circle cx="214" cy="67" r="7" fill="#f43f5e" /> {/* Anti-proton */}
            
            <line x1="225" y1="60" x2="260" y2="60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#p-arr)" />
            <text x="235" y="50" fill="#94a3b8" fontSize="10">v'</text>
          </svg>
        </div>
      );
    }

    default:
      return null;
  }
};