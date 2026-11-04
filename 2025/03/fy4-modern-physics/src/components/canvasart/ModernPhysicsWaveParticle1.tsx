import React, { useState, useEffect, useRef } from 'react';

export const renderModernPhysicsWaveParticle1 = (id: string): React.ReactElement | null => {
  switch (id) {

    // ── De Broglie Wave Packet ─────────────────────────────────────────────
    case 'de-broglie-wave': {
      const DeBroglieWave = () => {
        const [phase, setPhase] = useState(0);
        const [momentum, setMomentum] = useState(2); // controls frequency / wavelength

        useEffect(() => {
          let animationId: number;
          let lastTime = performance.now();
          const animate = (time: number) => {
            const dt = time - lastTime;
            lastTime = time;
            setPhase(prev => (prev - dt * 0.003 * momentum) % (2 * Math.PI));
            animationId = requestAnimationFrame(animate);
          };
          animationId = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(animationId);
        }, [momentum]);

        const points = [];
        const packetWidth = 80;
        for (let x = 0; x <= 300; x += 2) {
          // Gaussian envelope centered at 150
          const envelope = Math.exp(-Math.pow(x - 150, 2) / (2 * Math.pow(packetWidth, 2)));
          // High frequency oscillation based on momentum
          const wave = Math.cos((x * momentum * 0.05) + phase);
          const y = 60 - envelope * wave * 40;
          points.push(`${x},${y}`);
        }

        return (
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <svg className="w-full" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet">
              {/* Center Axis */}
              <line x1="10" y1="60" x2="290" y2="60" stroke="#334155" strokeWidth="1" strokeDasharray="4 2" />

              {/* Envelope Guide */}
              <path d={`M 10 60 Q 150 -10 290 60`} fill="none" stroke="#475569" strokeWidth="1" opacity="0.3" />
              <path d={`M 10 60 Q 150 130 290 60`} fill="none" stroke="#475569" strokeWidth="1" opacity="0.3" />

              {/* Wave */}
              <polyline points={points.join(' ')} fill="none" stroke="#f472b6" strokeWidth="2.5" />

              {/* Particle Core */}
              <circle cx="150" cy="60" r="8" fill="rgba(244, 114, 182, 0.4)" stroke="#f472b6" strokeWidth="2" />
              <text x="150" y="64" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">e⁻</text>
              
              <text x="20" y="20" fill="#f472b6" fontSize="10" fontWeight="bold">Matter Wave (Wave Packet)</text>
              
              {/* Dynamic Wavelength Display */}
              <text x="20" y="105" fill="#cbd5e1" fontSize="10" fontFamily="monospace">
                Momentum p ∝ {momentum.toFixed(1)}
              </text>
              <text x="200" y="105" fill="#cbd5e1" fontSize="10" fontFamily="monospace">
                λ ∝ {(10 / momentum).toFixed(1)}
              </text>
            </svg>

            <div className="flex items-center gap-3 w-full px-5 mt-2">
              <span className="text-slate-400 text-[10px] uppercase">Slow</span>
              <input type="range" min="1" max="5" step="0.1" value={momentum}
                onChange={e => setMomentum(Number(e.target.value))}
                className="flex-grow accent-pink-400" />
              <span className="text-slate-400 text-[10px] uppercase">Fast</span>
            </div>
          </div>
        );
      };
      return <DeBroglieWave />;
    }

    // ── Davisson-Germer Polar Plot ─────────────────────────────────────────
    case 'davisson-germer-plot': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="beam-arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#60a5fa" />
              </marker>
            </defs>

            {/* Crystal Surface */}
            <rect x="20" y="120" width="120" height="20" fill="#334155" rx="2" />
            <text x="80" y="133" fill="#94a3b8" fontSize="10" textAnchor="middle">Ni Crystal</text>
            {[40, 60, 80, 100, 120].map(x => (
              <circle key={x} cx={x} cy="120" r="4" fill="#cbd5e1" />
            ))}

            {/* Incident Beam */}
            <line x1="80" y1="20" x2="80" y2="105" stroke="#60a5fa" strokeWidth="2.5" markerEnd="url(#beam-arr)" />
            <text x="85" y="40" fill="#60a5fa" fontSize="10" fontWeight="bold">54 V e⁻</text>

            {/* Scattered Beam (50 deg) */}
            <line x1="80" y1="120" x2="140" y2="50" stroke="#f472b6" strokeWidth="2.5" markerEnd="url(#beam-arr)" strokeDasharray="4 2" />
            <path d="M 80 80 A 40 40 0 0 1 106 89" fill="none" stroke="#cbd5e1" strokeWidth="1" />
            <text x="88" y="75" fill="#cbd5e1" fontSize="10">φ=50°</text>

            {/* Polar Graph Box */}
            <rect x="170" y="20" width="110" height="110" fill="rgba(255,255,255,0.05)" rx="8" stroke="#475569" strokeWidth="1" />
            
            {/* Polar Axes */}
            <line x1="170" y1="120" x2="270" y2="120" stroke="#475569" strokeWidth="1" />
            <line x1="180" y1="130" x2="180" y2="30" stroke="#475569" strokeWidth="1" />
            
            <path d="M 180 120 A 80 80 0 0 1 260 40" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />

            {/* The famous "bump" */}
            <path d="M 180 120 C 190 110, 200 100, 210 90 C 240 60, 260 80, 220 110 C 200 115, 190 120, 180 120" fill="rgba(244, 114, 182, 0.4)" stroke="#f472b6" strokeWidth="2" />
            
            <line x1="180" y1="120" x2="245" y2="65" stroke="#f8fafc" strokeWidth="1" strokeDasharray="2 2" />
            <text x="250" y="60" fill="#f472b6" fontSize="10" fontWeight="bold">Peak at 50°</text>

            <text x="175" y="15" fill="#94a3b8" fontSize="9">Intensity vs Angle</text>
          </svg>
        </div>
      );
    }

    // ── Electron Double Slit Build-up ──────────────────────────────────────
    case 'electron-double-slit': {
      const ElectronDoubleSlit = () => {
        const canvasRef = useRef<HTMLCanvasElement>(null);
        const [active, setActive] = useState(true);

        useEffect(() => {
          if (!active) return;
          const canvas = canvasRef.current;
          if (!canvas) return;
          const ctx = canvas.getContext('2d');
          if (!ctx) return;

          let animationId = 0;
          let count = 0;
          const hits: {x: number, y: number}[] = [];

          const draw = () => {
            const w = canvas.width;
            const h = canvas.height;

            // Generate a random hit based on interference distribution
            for(let i=0; i<6; i++){
                let hitAccept = false;
                let rx = 0;
                while(!hitAccept) {
                    rx = Math.random() * w;
                    const normX = (rx - w/2) / (w/2); 
                    // Single slit envelope * double slit fringes
                    const env = Math.pow(Math.sin(normX * 6) / (normX * 6 || 1), 2);
                    const fringes = Math.pow(Math.cos(normX * 25), 2);
                    const P_x = env * fringes;
                    
                    if (Math.random() < P_x * 1.5) {
                        hitAccept = true;
                    }
                }
                const ry = Math.random() * h;
                hits.push({ x: rx, y: ry });
                count++;
            }

            ctx.clearRect(0,0,w,h);
            ctx.fillStyle = '#0b0f19';
            ctx.fillRect(0,0,w,h);

            // Draw electron hits in vibrant blue
            ctx.fillStyle = '#60a5fa';
            hits.forEach(pt => {
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, 1, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.fillStyle = '#f8fafc';
            ctx.font = '12px Courier';
            ctx.fillText(`Electrons Detected: ${count}`, 10, 20);

            if (count < 3000) {
              animationId = requestAnimationFrame(draw);
            }
          };

          animationId = requestAnimationFrame(draw);
          return () => { cancelAnimationFrame(animationId); };
        }, [active]);

        return (
          <div className="w-full h-full flex flex-col items-center p-2 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setActive(!active)}>
              <canvas ref={canvasRef} width={280} height={140} className="rounded-lg border border-blue-900/50 shadow-xl bg-[#0b0f19]" />
              <p className="text-[9px] text-blue-400/50 mt-1 uppercase tracking-widest font-bold">Tap Canvas to Pause/Play</p>
          </div>
        );
      }
      return <ElectronDoubleSlit />;
    }

    default:
      return null;
  }
};