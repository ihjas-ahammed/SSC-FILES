import React, { useState, useEffect, useRef } from 'react';

export const renderModernPhysicsRelativity2 = (id: string): React.ReactElement | null => {
  switch (id) {

    // ── Postulate 2: Light clock in two frames ─────────────────────────────
    case 'light-clock-diagram': {
      const LightClock = () => {
        const [t, setT] = useState(0);
        useEffect(() => {
          const iv = setInterval(() => setT(prev => (prev + 0.012) % 1), 30);
          return () => clearInterval(iv);
        }, []);

        const bounce = Math.abs(Math.sin(t * Math.PI));
        const ballY = 20 + bounce * 80;
        const movingBallX = 160 + t * 110;
        const movingBallY = 20 + bounce * 80;

        return (
          <svg className="w-full h-full" viewBox="0 0 320 160" preserveAspectRatio="xMidYMid meet">
            <text x="10" y="13" fill="#94a3b8" fontSize="9" fontWeight="bold">REST FRAME (S)</text>
            <rect x="30" y="18" width="20" height="90" rx="3" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 2" />
            <line x1="30" y1="18" x2="50" y2="18" stroke="#60a5fa" strokeWidth="2" />
            <line x1="30" y1="108" x2="50" y2="108" stroke="#60a5fa" strokeWidth="2" />
            <circle cx="40" cy={ballY} r="4" fill="#facc15" />
            <text x="30" y="125" fill="#94a3b8" fontSize="8">t₀ = 2d/c</text>
            <line x1="40" y1="18" x2="40" y2="108" stroke="#facc15" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />

            <text x="150" y="13" fill="#94a3b8" fontSize="9" fontWeight="bold">MOVING FRAME (S′) — seen from S</text>
            <line x1="160" y1="18" x2="270" y2="18" stroke="#a78bfa" strokeWidth="2" />
            <line x1="160" y1="108" x2="270" y2="108" stroke="#a78bfa" strokeWidth="2" />
            <polyline points="160,108 215,18 270,108" fill="none" stroke="#facc15" strokeWidth="1.5" strokeDasharray="3 1" opacity="0.5" />
            <circle cx={Math.min(movingBallX, 270)} cy={movingBallY} r="4" fill="#facc15" />
            <defs>
              <marker id="mv" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#4ade80" />
              </marker>
            </defs>
            <line x1="160" y1="130" x2="225" y2="130" stroke="#4ade80" strokeWidth="1.5" markerEnd="url(#mv)" />
            <text x="175" y="142" fill="#4ade80" fontSize="8">v</text>
            <text x="150" y="155" fill="#e2e8f0" fontSize="8">t = 2d/c · γ  &gt;  t₀  (time dilation!)</text>
          </svg>
        );
      };
      return <LightClock />;
    }

    case 'time-dilation-spacetime': {
      const TimeDilationSpacetime = () => {
        const [gamma, setGamma] = useState(1.5);
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-2">
            <svg className="w-full" viewBox="0 0 300 140" preserveAspectRatio="xMidYMid meet">
              <defs>
                <marker id="ax1" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                  <path d="M0,0 L5,2.5 L0,5 Z" fill="#94a3b8" />
                </marker>
              </defs>
              <line x1="40" y1="120" x2="280" y2="120" stroke="#475569" strokeWidth="1.5" markerEnd="url(#ax1)" />
              <line x1="40" y1="120" x2="40" y2="10" stroke="#475569" strokeWidth="1.5" markerEnd="url(#ax1)" />
              <text x="282" y="124" fill="#94a3b8" fontSize="9">x</text>
              <text x="32" y="9" fill="#94a3b8" fontSize="9">ct</text>
              <line x1="100" y1="120" x2="100" y2="20" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 2" />
              <text x="83" y="15" fill="#60a5fa" fontSize="8">clock at rest</text>
              <text x="83" y="24" fill="#60a5fa" fontSize="8">(proper time τ)</text>
              <line x1="100" y1="120" x2={100 + 60} y2={120 - 60 * gamma * 0.8} stroke="#a78bfa" strokeWidth="2.5" />
              <text x={108 + 60} y={120 - 60 * gamma * 0.8 + 10} fill="#a78bfa" fontSize="8">moving clock</text>
              <text x={108 + 60} y={120 - 60 * gamma * 0.8 + 19} fill="#a78bfa" fontSize="8">(dilated t = γτ)</text>
              <text x="150" y="115" fill="#fbbf24" fontSize="9" fontWeight="bold">γ = {gamma.toFixed(1)}</text>
            </svg>
            <div className="flex items-center gap-3 mt-1 w-full px-6">
              <span className="text-slate-400 text-xs">γ = 1</span>
              <input type="range" min="1" max="3" step="0.1" value={gamma}
                onChange={e => setGamma(Number(e.target.value))}
                className="flex-grow accent-violet-500" />
              <span className="text-slate-400 text-xs">γ = 3</span>
            </div>
            <p className="text-slate-500 text-[10px] mt-1">Drag slider: steeper world line = faster motion = more time dilation</p>
          </div>
        );
      };
      return <TimeDilationSpacetime />;
    }

    case 'length-contraction-visual': {
      const LengthContraction = () => {
        const [beta, setBeta] = useState(0.6);
        const gamma = 1 / Math.sqrt(1 - beta * beta);
        const restLen = 160;
        const contractedLen = restLen / gamma;
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-3">
            <svg className="w-full" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet">
              <text x="10" y="28" fill="#94a3b8" fontSize="9">Frame S (rest): Proper length L₀</text>
              <rect x="70" y="32" width={restLen} height="14" rx="4" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" />
              <text x="70" y="63" fill="#60a5fa" fontSize="9">L₀ = {restLen} (units)</text>
              <text x="10" y="82" fill="#94a3b8" fontSize="9">Frame S′ (moving at v = {(beta * 100).toFixed(0)}%c): L = L₀/γ</text>
              <rect x="70" y="87" width={contractedLen} height="14" rx="4" fill="#3b1a5f" stroke="#a78bfa" strokeWidth="2" />
              <text x="70" y="114" fill="#a78bfa" fontSize="9">L = {contractedLen.toFixed(1)} (γ = {gamma.toFixed(2)})</text>
            </svg>
            <div className="flex items-center gap-3 w-full px-5">
              <span className="text-slate-400 text-xs">v=0</span>
              <input type="range" min="0.1" max="0.95" step="0.05" value={beta}
                onChange={e => setBeta(Number(e.target.value))}
                className="flex-grow accent-violet-500" />
              <span className="text-slate-400 text-xs">v→c</span>
            </div>
          </div>
        );
      };
      return <LengthContraction />;
    }

    case 'relativistic-velocity-addition': {
      const RelVelocity = () => {
        const [u, setU] = useState(0.7);
        const v = 0.8;
        const classical = u + v;
        const relativistic = (u + v) / (1 + u * v);
        return (
          <div className="w-full h-full flex flex-col items-center p-3">
            <svg className="w-full" viewBox="0 0 300 100" preserveAspectRatio="xMidYMid meet">
              <defs>
                <marker id="ra1" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#4ade80" /></marker>
                <marker id="ra2" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" /></marker>
              </defs>
              <text x="10" y="15" fill="#94a3b8" fontSize="8">Rocket at v=0.8c · Ball fired at u′={( u*100).toFixed(0)}%c from rocket</text>
              <line x1="20" y1="50" x2={20 + v * 130} y2="50" stroke="#4ade80" strokeWidth="2" markerEnd="url(#ra1)" />
              <text x="25" y="45" fill="#4ade80" fontSize="8">v = 0.8c</text>
              <line x1="20" y1="65" x2={20 + u * 130} y2="65" stroke="#f97316" strokeWidth="2" markerEnd="url(#ra2)" />
              <text x="25" y="79" fill="#f97316" fontSize="8">u′ = {u.toFixed(2)}c</text>
              <text x="10" y="93" fill="#94a3b8" fontSize="7">Classical: {Math.min(classical, 2).toFixed(3)}c  |  Relativistic: {relativistic.toFixed(3)}c  (never exceeds c!)</text>
              <line x1="20" y1="42" x2="150" y2="42" stroke="#facc15" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
              <text x="152" y="46" fill="#facc15" fontSize="7">c</text>
            </svg>
            <div className="flex items-center gap-3 w-full px-5">
              <span className="text-slate-400 text-xs">u′=0</span>
              <input type="range" min="0.05" max="0.95" step="0.05" value={u}
                onChange={e => setU(Number(e.target.value))}
                className="flex-grow accent-orange-500" />
              <span className="text-slate-400 text-xs">u′→c</span>
            </div>
          </div>
        );
      };
      return <RelVelocity />;
    }

    case 'relativistic-doppler-diagram': {
      const DopplerDiagram = () => {
        const [t, setT] = useState(0);
        useEffect(() => {
          const iv = setInterval(() => setT(prev => (prev + 0.01) % 1), 30);
          return () => clearInterval(iv);
        }, []);
        return (
          <svg className="w-full h-full" viewBox="0 0 300 140" preserveAspectRatio="xMidYMid meet">
            <text x="10" y="14" fill="#94a3b8" fontSize="9">Relativistic Doppler Effect</text>
            <circle cx={80 + t * 60} cy="60" r="8" fill="#f97316" />
            <defs>
              <marker id="dv" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#4ade80" />
              </marker>
            </defs>
            <line x1={88 + t * 60} y1="60" x2={100 + t * 60} y2="60" stroke="#4ade80" strokeWidth="1.5" markerEnd="url(#dv)" />
            {[10, 22, 34, 46, 58].map((r, i) => (
              <circle key={`a${i}`} cx={80 + t * 60 + r * 0.55} cy="60" r={r * 0.55}
                fill="none" stroke="#60a5fa" strokeWidth="1" opacity={0.7 - i * 0.1} />
            ))}
            {[10, 22, 38, 58, 82].map((r, i) => (
              <circle key={`b${i}`} cx={80 + t * 60 - r * 0.8} cy="60" r={r * 0.8}
                fill="none" stroke="#a78bfa" strokeWidth="1" opacity={0.7 - i * 0.1} />
            ))}
            <text x="20" y="100" fill="#60a5fa" fontSize="8">← Approaching: blueshift (higher f)</text>
            <text x="20" y="112" fill="#a78bfa" fontSize="8">Receding → redshift (lower f)</text>
            <text x="20" y="128" fill="#e2e8f0" fontSize="8">f_obs = f_s × √[(1±β)/(1∓β)]</text>
          </svg>
        );
      };
      return <DopplerDiagram />;
    }

    case 'inertial-frames-equivalence': {
      const InertialFrames = () => {
        const [t, setT] = useState(0);
        useEffect(() => {
          const iv = setInterval(() => setT(prev => (prev + 0.008) % 1), 30);
          return () => clearInterval(iv);
        }, []);
        const x1 = 50 + t * 200;
        const x2 = 240 - t * 200;
        return (
          <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
            <text x="50" y="14" fill="#e2e8f0" fontSize="10" fontWeight="bold">Postulate 1: All Inertial Frames Equivalent</text>
            <line x1="0" y1="110" x2="300" y2="110" stroke="#334155" strokeWidth="2" />
            <text x="10" y="125" fill="#94a3b8" fontSize="8">Ground Observer (S)</text>
            <rect x={Math.max(10, Math.min(x1 - 20, 260))} y="75" width="40" height="22" rx="5" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" />
            <text x={Math.max(10, Math.min(x1 - 20, 260)) + 5} y="90" fill="#60a5fa" fontSize="8">A →</text>
            <rect x={Math.max(10, Math.min(x2 - 20, 260))} y="55" width="40" height="22" rx="5" fill="#3b1a5f" stroke="#a78bfa" strokeWidth="2" />
            <text x={Math.max(10, Math.min(x2 - 20, 260)) + 5} y="70" fill="#a78bfa" fontSize="8">← B</text>
            <text x="20" y="140" fill="#e2e8f0" fontSize="8">Physics inside A and B are identical — neither is 'really' moving.</text>
          </svg>
        );
      };
      return <InertialFrames />;
    }

    case 'muon-decay-diagram': {
      return (
        <svg className="w-full h-full" viewBox="0 0 300 155" preserveAspectRatio="xMidYMid meet">
          <defs>
            <marker id="md1" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
              <path d="M0,0 L5,2.5 L0,5 Z" fill="#f97316" />
            </marker>
          </defs>
          <text x="10" y="14" fill="#94a3b8" fontSize="9" fontWeight="bold">Muon Decay: Earth Frame vs Muon Frame</text>
          <text x="10" y="30" fill="#60a5fa" fontSize="8">Earth Frame (S): Muon travels ~10 km</text>
          <line x1="20" y1="45" x2="270" y2="45" stroke="#334155" strokeWidth="1.5" />
          <line x1="20" y1="40" x2="20" y2="50" stroke="#60a5fa" strokeWidth="2" />
          <text x="14" y="60" fill="#60a5fa" fontSize="7">Creation</text>
          <line x1="270" y1="40" x2="270" y2="50" stroke="#4ade80" strokeWidth="2" />
          <text x="256" y="60" fill="#4ade80" fontSize="7">Detection</text>
          <circle cx="100" cy="45" r="5" fill="#f97316" />
          <line x1="105" y1="45" x2="130" y2="45" stroke="#f97316" strokeWidth="1.5" markerEnd="url(#md1)" />
          <text x="95" y="38" fill="#f97316" fontSize="7">μ⁻  v≈0.998c</text>
          <text x="60" y="72" fill="#e2e8f0" fontSize="8">t = γ·τ₀ = 15.8×2.2 μs ≈ 35 μs  ✓ survives</text>
          <text x="10" y="95" fill="#a78bfa" fontSize="8">Muon Frame (S′): Earth approaches, length contracted</text>
          <line x1="20" y1="110" x2="120" y2="110" stroke="#334155" strokeWidth="1.5" />
          <text x="22" y="107" fill="#94a3b8" fontSize="7">L = L₀/γ ≈ 570 m</text>
          <rect x="20" y="104" width="100" height="8" rx="2" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="60" y="130" fill="#e2e8f0" fontSize="8">τ = τ₀ = 2.2 μs → 660 m range ✓</text>
          <text x="20" y="148" fill="#fbbf24" fontSize="8">Both frames agree: muon reaches the ground!</text>
        </svg>
      );
    }

    case 'spacetime-simultaneity': {
      return (
        <svg className="w-full h-full" viewBox="0 0 300 155" preserveAspectRatio="xMidYMid meet">
          <defs>
            <marker id="sa1" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
              <path d="M0,0 L5,2.5 L0,5 Z" fill="#94a3b8" />
            </marker>
          </defs>
          <line x1="70" y1="140" x2="280" y2="140" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa1)" />
          <line x1="70" y1="140" x2="70" y2="10" stroke="#475569" strokeWidth="1.5" markerEnd="url(#sa1)" />
          <text x="283" y="143" fill="#94a3b8" fontSize="9">x</text>
          <text x="62" y="9" fill="#94a3b8" fontSize="9">ct</text>
          <line x1="70" y1="140" x2="200" y2="10" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="204" y="14" fill="#facc15" fontSize="8">light cone</text>
          <line x1="70" y1="90" x2="260" y2="90" stroke="#60a5fa" strokeWidth="2" strokeDasharray="5 3" />
          <text x="183" y="86" fill="#60a5fa" fontSize="8">t = const (frame S)</text>
          <line x1="70" y1="140" x2="250" y2="65" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="252" y="70" fill="#a78bfa" fontSize="8">t′=const (S′)</text>
          <circle cx="110" cy="90" r="5" fill="#4ade80" />
          <text x="115" y="88" fill="#4ade80" fontSize="8">A</text>
          <circle cx="200" cy="90" r="5" fill="#4ade80" />
          <text x="205" y="88" fill="#4ade80" fontSize="8">B</text>
          <text x="10" y="150" fill="#e2e8f0" fontSize="8">A & B simultaneous in S, but NOT in S′</text>
        </svg>
      );
    }

    default:
      return null;
  }
};