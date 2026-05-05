import React, { useState, useEffect } from 'react';

export const renderModernPhysicsWaveParticle3 = (id: string): React.ReactElement | null => {
  switch (id) {

    // ── Phase vs Group Velocity ─────────────────────────────────────────────
    case 'wave-packet-motion': {
      const WaveMotion = () => {
        const [time, setTime] = useState(0);
        
        useEffect(() => {
          let animationId: number;
          let lastTime = performance.now();
          const animate = (t: number) => {
            const dt = t - lastTime;
            lastTime = t;
            setTime(prev => (prev + dt * 0.005));
            animationId = requestAnimationFrame(animate);
          };
          animationId = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(animationId);
        }, []);

        const points = [];
        // Two waves: cos(k1 x - w1 t) + cos(k2 x - w2 t)
        // Let's set up so Phase Velocity > Group Velocity
        const k1 = 0.5, w1 = 1.0; 
        const k2 = 0.6, w2 = 1.1; 

        // Envelope speed (Group velocity) = dw/dk = 0.1 / 0.1 = 1.0
        // Phase velocity (average) = w/k = 1.05 / 0.55 = 1.9

        for (let x = 0; x <= 300; x += 1) {
            const y1 = Math.cos(k1 * x - w1 * time);
            const y2 = Math.cos(k2 * x - w2 * time);
            const y = 75 - (y1 + y2) * 20;
            points.push(`${x},${y}`);
        }

        // Track the center of the envelope
        const groupV = (w2 - w1) / (k2 - k1);
        const centerEnv = (groupV * time) % 300;

        return (
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
              {/* Axes */}
              <line x1="10" y1="75" x2="290" y2="75" stroke="#475569" strokeWidth="1" strokeDasharray="4 2" />
              
              {/* Waveform */}
              <polyline points={points.join(' ')} fill="none" stroke="#60a5fa" strokeWidth="2" />
              
              {/* Group Velocity Marker */}
              <line x1={centerEnv} y1="20" x2={centerEnv} y2="130" stroke="#facc15" strokeWidth="2" strokeDasharray="5 5" />
              <text x={centerEnv + 5} y="30" fill="#facc15" fontSize="10" fontWeight="bold">Envelope (Group Vel)</text>

              <text x="10" y="140" fill="#94a3b8" fontSize="9">Phase velocity (peaks) moves FASTER than the envelope here.</text>
            </svg>
          </div>
        );
      }
      return <WaveMotion />;
    }

    // ── Probability Density |psi|^2 ─────────────────────────────────────────
    case 'probability-density': {
      const ProbabilityDensity = () => {
        const [showSquared, setShowSquared] = useState(false);

        const psiPoints = [];
        const psiSqPoints = [];
        
        for (let x = 0; x <= 300; x += 2) {
          // A wave packet with positive and negative amplitudes
          const envelope = Math.exp(-Math.pow(x - 150, 2) / (2 * Math.pow(40, 2)));
          const psi = envelope * Math.sin(x * 0.15);
          
          psiPoints.push(`${x},${75 - psi * 50}`);
          
          // Probability density is purely positive and bounded
          const psiSq = Math.pow(psi, 2);
          psiSqPoints.push(`${x},${130 - psiSq * 50}`);
        }

        return (
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
              
              {/* Top Graph: Psi */}
              <line x1="10" y1="75" x2="290" y2="75" stroke="#475569" strokeWidth="1" strokeDasharray="4 2" />
              <polyline points={psiPoints.join(' ')} fill="none" stroke="#60a5fa" strokeWidth="2" opacity={showSquared ? 0.3 : 1} />
              <text x="10" y="20" fill="#60a5fa" fontSize="10" fontWeight="bold">Wave Function ψ(x)</text>
              <text x="10" y="32" fill="#60a5fa" fontSize="8">(Can be negative)</text>

              {/* Bottom Graph: |Psi|^2 */}
              <line x1="10" y1="130" x2="290" y2="130" stroke="#475569" strokeWidth="1" strokeDasharray="4 2" />
              
              {showSquared && (
                <>
                  <path d={`M 10 130 L ${psiSqPoints.join(' L ')} L 290 130 Z`} fill="rgba(244, 114, 182, 0.3)" />
                  <polyline points={psiSqPoints.join(' ')} fill="none" stroke="#f472b6" strokeWidth="2" />
                  
                  {/* Highlight a dx slice */}
                  <rect x="170" y={130 - Math.pow(Math.exp(-Math.pow(170 - 150, 2) / (2 * Math.pow(40, 2))) * Math.sin(170 * 0.15), 2) * 50} width="6" height={Math.pow(Math.exp(-Math.pow(170 - 150, 2) / (2 * Math.pow(40, 2))) * Math.sin(170 * 0.15), 2) * 50} fill="#facc15" />
                  <text x="180" y="115" fill="#facc15" fontSize="9">P(x) dx</text>
                </>
              )}
              
              <text x="10" y="145" fill="#f472b6" fontSize="10" fontWeight="bold">Probability Density |ψ(x)|²</text>
            </svg>
            
            <button 
              onClick={() => setShowSquared(!showSquared)}
              className="mt-2 px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
            >
              {showSquared ? "Hide |ψ|²" : "Show |ψ|²"}
            </button>
          </div>
        );
      }
      return <ProbabilityDensity />;
    }

    default:
      return null;
  }
};