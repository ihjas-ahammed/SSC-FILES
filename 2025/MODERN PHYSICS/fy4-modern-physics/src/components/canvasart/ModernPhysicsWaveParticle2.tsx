import React, { useState, useEffect, useRef } from 'react';

export const renderModernPhysicsWaveParticle2 = (id: string): React.ReactElement | null => {
  switch (id) {

    // ── Wave Packet Uncertainty Slider ─────────────────────────────────────
    case 'wave-packet-uncertainty': {
      const WavePacket = () => {
        const [spread, setSpread] = useState(50); // represents delta x

        const points = [];
        const kPoints = [];
        
        // Generate space wave packet
        for (let x = 0; x <= 300; x += 1) {
          // Gaussian envelope centered at 150
          const envelope = Math.exp(-Math.pow(x - 150, 2) / (2 * Math.pow(spread, 2)));
          const wave = Math.cos((x * 20 * 0.05));
          const y = 50 - envelope * wave * 30;
          points.push(`${x},${y}`);
        }

        // Generate momentum (k) space packet
        // delta k is inversely proportional to delta x
        const kSpread = 1000 / spread;
        for (let k = 0; k <= 100; k += 1) {
          const envelopeK = Math.exp(-Math.pow(k - 50, 2) / (2 * Math.pow(kSpread, 2)));
          const yK = 140 - envelopeK * 30;
          kPoints.push(`${k + 100},${yK}`);
        }

        return (
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
              
              {/* Space Graph */}
              <text x="10" y="15" fill="#94a3b8" fontSize="10">Position Space: Δx</text>
              <line x1="10" y1="50" x2="290" y2="50" stroke="#334155" strokeWidth="1" strokeDasharray="4 2" />
              <polyline points={points.join(' ')} fill="none" stroke="#60a5fa" strokeWidth="2.5" />
              
              {/* Width indicator X */}
              <line x1={150 - spread} y1="80" x2={150 + spread} y2="80" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1={150 - spread} y1="75" x2={150 - spread} y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1={150 + spread} y1="75" x2={150 + spread} y2="85" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="145" y="90" fill="#cbd5e1" fontSize="9">Δx</text>

              {/* Momentum Graph */}
              <text x="10" y="110" fill="#94a3b8" fontSize="10">Momentum Space: Δpx</text>
              <line x1="100" y1="140" x2="200" y2="140" stroke="#334155" strokeWidth="1" strokeDasharray="4 2" />
              <polyline points={kPoints.join(' ')} fill="none" stroke="#f472b6" strokeWidth="2.5" />
              
              {/* Width indicator P */}
              <line x1={150 - kSpread} y1="100" x2={150 + kSpread} y2="100" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1={150 - kSpread} y1="95" x2={150 - kSpread} y2="105" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1={150 + kSpread} y1="95" x2={150 + kSpread} y2="105" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="145" y="95" fill="#cbd5e1" fontSize="9">Δpx</text>

            </svg>

            <div className="flex items-center gap-3 w-full px-5 mt-2">
              <span className="text-slate-400 text-[10px] uppercase">Narrow Δx</span>
              <input type="range" min="10" max="100" step="1" value={spread}
                onChange={e => setSpread(Number(e.target.value))}
                className="flex-grow accent-blue-400" />
              <span className="text-slate-400 text-[10px] uppercase">Wide Δx</span>
            </div>
            <p className="text-[9px] text-slate-500 mt-1">Squeezing position forces momentum to spread out.</p>
          </div>
        );
      };
      return <WavePacket />;
    }

    // ── Single Slit Uncertainty ───────────────────────────────────────────
    case 'single-slit-uncertainty': {
      const SingleSlit = () => {
        const [slitWidth, setSlitWidth] = useState(20); 

        // calculate diffraction angle roughly inversely proportional to width
        const spreadFactor = 800 / slitWidth; 

        return (
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="beamGrad" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#4ade80" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Incoming Beam */}
              <rect x="20" y={75 - slitWidth/2} width="80" height={slitWidth} fill="rgba(96,165,250,0.3)" />
              <line x1="20" y1="75" x2="80" y2="75" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 2" />
              <text x="25" y="70" fill="#60a5fa" fontSize="9">Δpx = 0</text>
              <text x="25" y="85" fill="#60a5fa" fontSize="9">Δx = ∞</text>

              {/* Barrier */}
              <rect x="100" y="0" width="10" height={75 - slitWidth/2} fill="#334155" />
              <rect x="100" y={75 + slitWidth/2} width="10" height={75 - slitWidth/2} fill="#334155" />
              
              <text x="115" y="15" fill="#e2e8f0" fontSize="10">Slit Width a</text>

              {/* Diffracted Beam */}
              <path d={`M 110 ${75 - slitWidth/2} L 280 ${75 - spreadFactor} L 280 ${75 + spreadFactor} L 110 ${75 + slitWidth/2} Z`} fill="url(#beamGrad)" />
              
              <path d={`M 150 75 A 30 30 0 0 1 146 ${75 - spreadFactor/4}`} fill="none" stroke="#f8fafc" strokeWidth="1" />
              <text x="155" y="65" fill="#f8fafc" fontSize="10">θ</text>
              
              <text x="200" y="70" fill="#4ade80" fontSize="9">Δpx ~ h/a</text>
            </svg>

            <div className="flex items-center gap-3 w-full px-5 mt-2">
              <span className="text-slate-400 text-[10px] uppercase">Narrow</span>
              <input type="range" min="5" max="50" step="1" value={slitWidth}
                onChange={e => setSlitWidth(Number(e.target.value))}
                className="flex-grow accent-green-400" />
              <span className="text-slate-400 text-[10px] uppercase">Wide</span>
            </div>
          </div>
        );
      }
      return <SingleSlit />;
    }

    // ── Energy-Time Uncertainty (Mass Width) ────────────────────────────────
    case 'energy-time-uncertainty': {
      const MassWidth = () => {
        const [lifetime, setLifetime] = useState(50); // relative lifetime parameter

        const points = [];
        // energy width is inversely proportional to lifetime
        const eSpread = 800 / lifetime;
        
        for (let E = 0; E <= 260; E += 2) {
          const envelope = Math.exp(-Math.pow(E - 130, 2) / (2 * Math.pow(eSpread, 2)));
          const y = 130 - envelope * 80;
          points.push(`${E + 20},${y}`);
        }

        return (
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
              {/* Axes */}
              <line x1="20" y1="130" x2="280" y2="130" stroke="#475569" strokeWidth="1.5" />
              <line x1="20" y1="130" x2="20" y2="20" stroke="#475569" strokeWidth="1.5" />
              <text x="200" y="145" fill="#94a3b8" fontSize="10">Rest Energy (Mass) E</text>
              <text x="25" y="30" fill="#94a3b8" fontSize="10">Probability</text>

              {/* Curve */}
              <polyline points={points.join(' ')} fill="none" stroke="#a78bfa" strokeWidth="3" />
              
              {/* Center Line */}
              <line x1="150" y1="130" x2="150" y2="50" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 2" />
              <text x="145" y="145" fill="#cbd5e1" fontSize="9">E₀</text>

              {/* Width indicator */}
              <line x1={150 - eSpread} y1="90" x2={150 + eSpread} y2="90" stroke="#f472b6" strokeWidth="1.5" />
              <line x1={150 - eSpread} y1="85" x2={150 - eSpread} y2="95" stroke="#f472b6" strokeWidth="1.5" />
              <line x1={150 + eSpread} y1="85" x2={150 + eSpread} y2="95" stroke="#f472b6" strokeWidth="1.5" />
              <text x="155" y="85" fill="#f472b6" fontSize="10" fontWeight="bold">ΔE</text>

            </svg>

            <div className="flex items-center gap-3 w-full px-5 mt-2">
              <span className="text-slate-400 text-[10px] uppercase">Short Δt</span>
              <input type="range" min="10" max="150" step="1" value={lifetime}
                onChange={e => setLifetime(Number(e.target.value))}
                className="flex-grow accent-violet-400" />
              <span className="text-slate-400 text-[10px] uppercase">Long Δt</span>
            </div>
            <p className="text-[9px] text-slate-500 mt-1">Short-lived particles have fuzzy, uncertain masses.</p>
          </div>
        );
      }
      return <MassWidth />;
    }

    default:
      return null;
  }
};