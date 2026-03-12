import React, { useState, useEffect, useRef } from 'react';

export const renderModernPhysicsEM4 = (id: string): React.ReactElement | null => {
  switch (id) {

    // ── Compton Scattering ────────────────────────────────────────────────
    case 'compton-scatter': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="arr-photon" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#facc15" />
              </marker>
              <marker id="arr-elec" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#60a5fa" />
              </marker>
            </defs>

            {/* Path and Axes */}
            <line x1="20" y1="80" x2="280" y2="80" stroke="#475569" strokeWidth="1" strokeDasharray="4 2" />

            {/* Incoming Photon */}
            <path d="M 20 80 Q 30 70 40 80 T 60 80 T 80 80 T 100 80" fill="none" stroke="#facc15" strokeWidth="2" markerEnd="url(#arr-photon)" />
            <text x="30" y="65" fill="#facc15" fontSize="10">E=hc/λ</text>

            <circle cx="120" cy="80" r="4" fill="#60a5fa" />
            <text x="110" y="95" fill="#60a5fa" fontSize="10">e⁻ (Rest)</text>

            {/* Scattered Photon */}
            <path d="M 120 80 Q 140 50 160 30 L 220 -20" fill="none" stroke="#facc15" strokeWidth="2" strokeDasharray="2 1" />
            <line x1="120" y1="80" x2="240" y2="-20" stroke="transparent" /> {/* invisible guide */}
            <text x="180" y="15" fill="#facc15" fontSize="10">E'=hc/λ'</text>

            {/* Scattered Electron */}
            <line x1="120" y1="80" x2="220" y2="130" stroke="#60a5fa" strokeWidth="2.5" markerEnd="url(#arr-elec)" />
            <circle cx="230" cy="135" r="4" fill="#60a5fa" />
            <text x="190" y="145" fill="#60a5fa" fontSize="10">p_e</text>

            {/* Angles */}
            <path d="M 145 80 A 25 25 0 0 0 138 65" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="150" y="70" fill="#cbd5e1" fontSize="10">θ</text>

            <path d="M 140 80 A 20 20 0 0 1 138 90" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="145" y="98" fill="#cbd5e1" fontSize="10">φ</text>

          </svg>
        </div>
      );
    }

    // ── Bremsstrahlung ────────────────────────────────────────────────────
    case 'bremsstrahlung-diagram': {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <svg className="w-full" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid meet">
             <defs>
              <marker id="b-arr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#60a5fa" />
              </marker>
              <marker id="b-ph" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#f43f5e" />
              </marker>
            </defs>

            {/* Target Nucleus ++ */}
            <circle cx="150" cy="110" r="18" fill="rgba(88,204,2,0.3)" stroke="#4ade80" strokeWidth="2" />
            <text x="142" y="114" fill="#4ade80" fontSize="12" fontWeight="bold">+Z</text>

            {/* Incoming Electron Path */}
            <path d="M 20 20 C 100 20, 130 50, 260 90" fill="none" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#b-arr)" />
            <circle cx="95" cy="27" r="4" fill="#60a5fa" />
            <text x="20" y="15" fill="#60a5fa" fontSize="10">Kinetic Energy (K)</text>
            <text x="210" y="110" fill="#60a5fa" fontSize="10">Slowed e⁻ (K')</text>

            {/* Deflection point emission */}
            <path d="M 130 50 Q 150 10 180 0 L 220 -20" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="130" cy="50" r="3" fill="#fff" />
            <polygon points="126,50 140,40 135,53" fill="#f43f5e" transform="translate(45,-38) scale(0.6) rotate(45)" /> 
            <text x="180" y="15" fill="#f43f5e" fontSize="10" fontWeight="bold">X-ray Photon (hf)</text>
            
            {/* Logic text */}
            <text x="10" y="150" fill="#cbd5e1" fontSize="10" fontFamily="monospace">hf = K - K'</text>
          </svg>
        </div>
      );
    }

    // ── Single Photon Double Slit Build-Up ────────────────────────────────
    case 'photon-buildup': {
      const SinglePhotonSim = () => {
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

          // Interference probability mask P(x) ~ cos^2(a*x) * sinc^2(b*x)
          const hits: {x: number, y: number}[] = [];

          const draw = () => {
            const w = canvas.width;
            const h = canvas.height;

            // Generate a random hit based on interference distribution
            for(let i=0; i<8; i++){
                let hitAccept = false;
                let rx = 0;
                while(!hitAccept) {
                    rx = Math.random() * w; // -w/2 to w/2 mapped to 0 to w
                    const normX = (rx - w/2) / (w/2); 
                    // Probability function
                    const env = Math.pow(Math.sin(normX * 8) / (normX * 8 || 1), 2);
                    const fringes = Math.pow(Math.cos(normX * 30), 2);
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

            ctx.fillStyle = '#4ade80';
            hits.forEach(pt => {
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, 1, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.fillStyle = '#f8fafc';
            ctx.font = '12px Courier';
            ctx.fillText(`Photons Detected: ${count}`, 10, 20);

            if (count < 4000) {
              animationId = requestAnimationFrame(draw);
            }
          };

          animationId = requestAnimationFrame(draw);
          return () => { cancelAnimationFrame(animationId); };
        }, [active]);

        return (
          <div className="w-full h-full flex flex-col items-center p-2 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setActive(false)} onDoubleClick={()=>setActive(true)}>
              <canvas ref={canvasRef} width={280} height={140} className="rounded-lg border border-slate-600 shadow-xl" />
              <p className="text-[9px] text-slate-500 mt-1">Tap/Click Canvas to Pause/Reset</p>
          </div>
        );
      }
      return <SinglePhotonSim />;
    }

    default:
      return null;
  }
};