import React, { useState, useEffect, useRef } from 'react';

export const renderModernPhysicsRelativity1 = (id: string): React.ReactElement | null => {
  switch (id) {

    // ── Galilean Reference Frames ──────────────────────────────────────────
    case 'galilean-frames': {
      const Frame = () => {
        const [t, setT] = useState(0);
        const vFrame = 0.6; // normalized frame velocity
        useEffect(() => {
          const id = setInterval(() => setT(prev => (prev + 0.01) % 1), 30);
          return () => clearInterval(id);
        }, []);
        const x2 = 20 + t * 160; // S' origin moves right
        return (
          <svg className="w-full h-full" viewBox="0 0 300 140" preserveAspectRatio="xMidYMid meet">
            {/* Ground frame S */}
            <line x1="10" y1="90" x2="290" y2="90" stroke="#475569" strokeWidth="1.5" />
            <line x1="10" y1="90" x2="10" y2="30" stroke="#475569" strokeWidth="1.5" />
            <text x="14" y="27" fill="#94a3b8" fontSize="11" fontWeight="bold">S</text>
            <text x="14" y="100" fill="#94a3b8" fontSize="8">(x, t)</text>

            {/* Moving frame S' */}
            <line x1={x2} y1="90" x2={Math.min(x2 + 90, 290)} y2="90" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 2" />
            <line x1={x2} y1="90" x2={x2} y2="48" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x={x2 + 4} y="45" fill="#60a5fa" fontSize="11" fontWeight="bold">S′</text>
            <text x={x2 + 4} y="100" fill="#60a5fa" fontSize="8">(x′, t′)</text>

            {/* Velocity arrow */}
            <defs>
              <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" />
              </marker>
            </defs>
            <line x1={x2 + 2} y1="68" x2={x2 + 28} y2="68" stroke="#4ade80" strokeWidth="1.5" markerEnd="url(#arr)" />
            <text x={x2 + 6} y="63" fill="#4ade80" fontSize="9" fontWeight="bold">v</text>

            {/* Equations */}
            <text x="14" y="120" fill="#e2e8f0" fontSize="9">x′ = x − vt</text>
            <text x="110" y="120" fill="#e2e8f0" fontSize="9">y′ = y</text>
            <text x="180" y="120" fill="#e2e8f0" fontSize="9">t′ = t</text>

            <text x="10" y="136" fill="#64748b" fontSize="8">Frame S′ moves at velocity v relative to S (Galilean)</text>
          </svg>
        );
      };
      return <Frame />;
    }

    // ── Classical Velocity Addition ────────────────────────────────────────
    case 'velocity-addition-diagram': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-3">
          <svg className="w-full" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="a1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" /></marker>
              <marker id="a2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
              <marker id="a3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#c084fc" /></marker>
            </defs>

            {/* Ground */}
            <line x1="10" y1="80" x2="290" y2="80" stroke="#334155" strokeWidth="2" />
            <text x="10" y="92" fill="#94a3b8" fontSize="9">Ground (S)</text>

            {/* Car */}
            <rect x="60" y="55" width="70" height="22" rx="5" fill="#1e40af" stroke="#60a5fa" strokeWidth="1.5" />
            <circle cx="75" cy="78" r="6" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="120" cy="78" r="6" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
            <text x="82" y="70" fill="#e2e8f0" fontSize="9" fontWeight="bold">Car</text>

            {/* Car velocity arrow */}
            <line x1="95" y1="46" x2="155" y2="46" stroke="#4ade80" strokeWidth="2" markerEnd="url(#a1)" />
            <text x="100" y="42" fill="#4ade80" fontSize="10" fontWeight="bold">v (car)</text>

            {/* Ball velocity relative to car */}
            <circle cx="200" cy="65" r="5" fill="#f97316" />
            <line x1="205" y1="65" x2="245" y2="65" stroke="#f97316" strokeWidth="2" markerEnd="url(#a2)" />
            <text x="200" y="58" fill="#f97316" fontSize="9">u′ (re. car)</text>

            {/* Total velocity */}
            <line x1="200" y1="30" x2="275" y2="30" stroke="#c084fc" strokeWidth="2.5" markerEnd="url(#a3)" />
            <text x="205" y="26" fill="#c084fc" fontSize="10" fontWeight="bold">u = v + u′</text>

            <text x="10" y="110" fill="#e2e8f0" fontSize="10" fontWeight="bold">Galilean Velocity Addition: u = u′ + v</text>
          </svg>
        </div>
      );
    }

    // ── Crosswind Vector Diagram ───────────────────────────────────────────
    case 'crosswind-vector': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-3">
          <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="av" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#60a5fa" /></marker>
              <marker id="aw" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
              <marker id="ar" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" /></marker>
            </defs>

            {/* Origin */}
            <circle cx="80" cy="110" r="4" fill="#e2e8f0" />

            {/* Airplane velocity (airspeed, pointing north) */}
            <line x1="80" y1="110" x2="80" y2="35" stroke="#60a5fa" strokeWidth="2.5" markerEnd="url(#av)" />
            <text x="84" y="72" fill="#60a5fa" fontSize="10">v_air</text>

            {/* Wind velocity (pointing east) */}
            <line x1="80" y1="110" x2="160" y2="110" stroke="#f97316" strokeWidth="2.5" markerEnd="url(#aw)" />
            <text x="105" y="125" fill="#f97316" fontSize="10">v_wind</text>

            {/* Resultant (hypotenuse) */}
            <line x1="80" y1="110" x2="160" y2="35" stroke="#4ade80" strokeWidth="2.5" strokeDasharray="5 3" markerEnd="url(#ar)" />
            <text x="128" y="72" fill="#4ade80" fontSize="10" fontWeight="bold">v_ground</text>

            {/* Completion rectangle */}
            <line x1="80" y1="35" x2="160" y2="35" stroke="#475569" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="160" y1="110" x2="160" y2="35" stroke="#475569" strokeWidth="1" strokeDasharray="3 2" />

            {/* Right angle mark */}
            <path d="M 80 103 L 87 103 L 87 110" fill="none" stroke="#94a3b8" strokeWidth="1" />

            <text x="10" y="140" fill="#94a3b8" fontSize="9">|v_ground|² = |v_air|² + |v_wind|²  (Pythagoras for perpendicular wind)</text>
          </svg>
        </div>
      );
    }

    // ── Swimmer Upstream/Downstream ────────────────────────────────────────
    case 'swimmer-diagram': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-3">
          <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="sr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f97316" /></marker>
              <marker id="sl" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M6,0 L0,3 L6,6 Z" fill="#60a5fa" />
              </marker>
            </defs>

            {/* River banks */}
            <rect x="10" y="30" width="280" height="80" fill="rgba(30,64,175,0.2)" rx="4" />
            <line x1="10" y1="30" x2="290" y2="30" stroke="#60a5fa" strokeWidth="2" />
            <line x1="10" y1="110" x2="290" y2="110" stroke="#60a5fa" strokeWidth="2" />
            <text x="14" y="26" fill="#60a5fa" fontSize="9">Bank A</text>
            <text x="14" y="122" fill="#60a5fa" fontSize="9">Bank B</text>

            {/* River current arrows */}
            {[50, 100, 150, 200, 250].map(x => (
              <g key={x}>
                <line x1={x} y1="70" x2={x + 25} y2="70" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#sr)" />
              </g>
            ))}
            <text x="14" y="74" fill="#38bdf8" fontSize="9">v_river →</text>

            {/* Upstream swim */}
            <circle cx="60" cy="52" r="6" fill="#4ade80" />
            <line x1="60" y1="52" x2="30" y2="52" stroke="#4ade80" strokeWidth="2" markerEnd="url(#sl)" />
            <text x="20" y="46" fill="#4ade80" fontSize="9">Upstream</text>
            <text x="10" y="42" fill="#4ade80" fontSize="8">speed = v_s − v_r</text>

            {/* Downstream swim */}
            <circle cx="200" cy="92" r="6" fill="#c084fc" />
            <line x1="200" y1="92" x2="240" y2="92" stroke="#c084fc" strokeWidth="2" markerEnd="url(#sr)" />
            <text x="205" y="86" fill="#c084fc" fontSize="9">Downstream</text>
            <text x="205" y="78" fill="#c084fc" fontSize="8">speed = v_s + v_r</text>

            <text x="10" y="140" fill="#94a3b8" fontSize="9">Galilean: speeds simply add/subtract when direction is parallel to current</text>
          </svg>
        </div>
      );
    }

    // ── Michelson Interferometer Setup ────────────────────────────────────
    case 'michelson-setup': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid meet">
            {/* Light source */}
            <circle cx="30" cy="100" r="10" fill="rgba(250,204,21,0.3)" stroke="#facc15" strokeWidth="1.5" />
            <text x="14" y="120" fill="#facc15" fontSize="8">Source</text>

            {/* Beamsplitter */}
            <rect x="108" y="88" width="14" height="14" rx="2" fill="rgba(148,163,184,0.2)" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(45,115,95)" />
            <text x="100" y="118" fill="#94a3b8" fontSize="8">BS</text>

            {/* Arm 1 – horizontal (towards Mirror M1) */}
            <line x1="122" y1="95" x2="240" y2="95" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 2" />
            <rect x="240" y="82" width="14" height="26" rx="2" fill="rgba(96,165,250,0.3)" stroke="#60a5fa" strokeWidth="2" />
            <text x="238" y="122" fill="#60a5fa" fontSize="8">M₁</text>
            <text x="155" y="90" fill="#fbbf24" fontSize="8">Arm 1 (∥ ether wind)</text>

            {/* Arm 2 – vertical (towards Mirror M2) */}
            <line x1="115" y1="88" x2="115" y2="25" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="4 2" />
            <rect x="101" y="12" width="28" height="14" rx="2" fill="rgba(74,222,128,0.3)" stroke="#4ade80" strokeWidth="2" />
            <text x="130" y="22" fill="#4ade80" fontSize="8">M₂</text>
            <text x="120" y="62" fill="#4ade80" fontSize="8" transform="rotate(-90,118,62)">Arm 2 (⊥ ether wind)</text>

            {/* Return beams to detector */}
            <line x1="108" y1="95" x2="30" y2="95" stroke="#f97316" strokeWidth="1" strokeDasharray="2 2" />
            <rect x="15" y="78" width="14" height="14" rx="2" fill="rgba(249,115,22,0.3)" stroke="#f97316" strokeWidth="1.5" />
            <text x="8" y="73" fill="#f97316" fontSize="8">Eye</text>

            {/* Ether wind arrow */}
            <defs>
              <marker id="ew" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#c084fc" /></marker>
            </defs>
            <line x1="50" y1="140" x2="200" y2="140" stroke="#c084fc" strokeWidth="2" markerEnd="url(#ew)" />
            <text x="90" y="155" fill="#c084fc" fontSize="9" fontWeight="bold">Expected ether wind →</text>
          </svg>
        </div>
      );
    }

    // ── Null Result Visualization ─────────────────────────────────────────
    case 'michelson-null-result': {
      const NullResult = () => {
        const [phase, setPhase] = useState(0);
        useEffect(() => {
          const id = setInterval(() => setPhase(prev => (prev + 0.04) % (2 * Math.PI)), 40);
          return () => clearInterval(id);
        }, []);

        const points1 = Array.from({ length: 60 }, (_, i) => {
          const x = 10 + i * 4.5;
          const y = 55 + 20 * Math.sin(i * 0.35 + phase);
          return `${x},${y}`;
        }).join(' ');

        const points2 = Array.from({ length: 60 }, (_, i) => {
          const x = 10 + i * 4.5;
          // Expected: shifted by ether travel time difference (non-zero)
          const y = 105 + 20 * Math.sin(i * 0.35 + phase + 2.5);
          return `${x},${y}`;
        }).join(' ');

        const pointsActual = Array.from({ length: 60 }, (_, i) => {
          const x = 10 + i * 4.5;
          // Actual: NO shift at all
          const y = 105 + 20 * Math.sin(i * 0.35 + phase);
          return `${x},${y}`;
        }).join(' ');

        return (
          <svg className="w-full h-full" viewBox="0 0 280 150" preserveAspectRatio="xMidYMid meet">
            <text x="10" y="15" fill="#94a3b8" fontSize="10" fontWeight="bold">Beam 1 (reference)</text>
            <polyline points={points1} fill="none" stroke="#60a5fa" strokeWidth="1.5" />

            <text x="10" y="83" fill="#f97316" fontSize="10">Expected (with ether shift):</text>
            <polyline points={points2} fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />

            <text x="10" y="97" fill="#4ade80" fontSize="10">Observed (no shift — null result!):</text>
            <polyline points={pointsActual} fill="none" stroke="#4ade80" strokeWidth="2" />

            <text x="10" y="140" fill="#e2e8f0" fontSize="9" fontWeight="bold">The two beams arrived IN PHASE — ether drift = 0</text>
          </svg>
        );
      };
      return <NullResult />;
    }

    // ── Ether Wind Analogy (swimmer) ──────────────────────────────────────
    case 'ether-wind-analogy': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-3">
          <svg className="w-full" viewBox="0 0 300 130" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="ea" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#c084fc" /></marker>
            </defs>

            {/* Ether "medium" box */}
            <rect x="40" y="15" width="220" height="100" rx="8" fill="rgba(192,132,252,0.05)" stroke="#c084fc" strokeWidth="1" strokeDasharray="5 3" />
            <text x="115" y="12" fill="#c084fc" fontSize="9">Luminiferous Ether (hypothetical)</text>

            {/* Earth moving through ether */}
            <circle cx="80" cy="65" r="20" fill="rgba(30,64,175,0.4)" stroke="#60a5fa" strokeWidth="2" />
            <text x="65" y="69" fill="#e2e8f0" fontSize="8" fontWeight="bold">Earth</text>

            {/* Ether wind on Earth */}
            {[40, 55, 70, 80].map((y, i) => (
              <line key={i} x1={240 - i * 8} y1={y} x2={200 - i * 8} y2={y}
                stroke="#c084fc" strokeWidth="1.5" markerEnd="url(#ea)" opacity="0.6" />
            ))}
            <text x="155" y="100" fill="#c084fc" fontSize="9">"Ether wind" felt by Earth</text>

            {/* Light rays */}
            <line x1="100" y1="50" x2="200" y2="50" stroke="#facc15" strokeWidth="2" strokeDasharray="3 2" markerEnd="url(#ea)" />
            <text x="140" y="45" fill="#facc15" fontSize="8">Light ∥ to wind</text>

            <line x1="80" y1="44" x2="80" y2="20" stroke="#4ade80" strokeWidth="2" strokeDasharray="3 2" markerEnd="url(#ea)" />
            <text x="84" y="32" fill="#4ade80" fontSize="8">Light ⊥</text>
          </svg>
        </div>
      );
    }

    default:
      return null;
  }
};
