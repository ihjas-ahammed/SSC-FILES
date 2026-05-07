import React from 'react';

export const renderWaveCanvasArt = (id: string) => {
  switch (id) {
    case 'wave-traveling-definition':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid meet">
            <line x1="0" y1="50" x2="400" y2="50" stroke="#334155" strokeWidth="1" strokeDasharray="4" />
            <path d="M 0 50 Q 50 10 100 50 T 200 50 T 300 50 T 400 50" fill="none" stroke="#60a5fa" strokeWidth="3">
              <animateTransform attributeName="transform" type="translate" from="0 0" to="200 0" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M -200 50 Q -150 10 -100 50 T 0 50 T 100 50 T 200 50" fill="none" stroke="#60a5fa" strokeWidth="3">
              <animateTransform attributeName="transform" type="translate" from="0 0" to="200 0" dur="2s" repeatCount="indefinite" />
            </path>
            
            {/* Medium Particle Oscillating in Place */}
            <circle cx="200" cy="50" r="5" fill="#facc15">
              <animate attributeName="cy" values="50; 10; 50; 90; 50" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
          <p className="absolute bottom-2 text-[10px] text-slate-400 font-bold">The medium (yellow dot) oscillates vertically, while the wave travels horizontally.</p>
        </div>
      );

    case 'wave-parameters':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 120">
            <line x1="20" y1="60" x2="280" y2="60" stroke="#475569" strokeWidth="1" />
            <path d="M 40 60 Q 70 10 100 60 T 160 60 T 220 60 T 280 60" fill="none" stroke="#c084fc" strokeWidth="2" />
            
            {/* Amplitude Arrow */}
            <line x1="130" y1="60" x2="130" y2="10" stroke="#facc15" strokeWidth="1.5" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
            <text x="135" y="40" fill="#facc15" fontSize="10">A</text>
            
            {/* Wavelength Arrow */}
            <line x1="70" y1="20" x2="190" y2="20" stroke="#4ade80" strokeWidth="1.5" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
            <text x="125" y="15" fill="#4ade80" fontSize="10">λ</text>
            
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse">
                <polygon points="0 0, 6 3, 0 6" fill="currentColor" />
              </marker>
            </defs>
          </svg>
        </div>
      );

    case 'wave-phase-velocity':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 300 100">
            <line x1="20" y1="60" x2="280" y2="60" stroke="#334155" strokeWidth="1" />
            <g>
              <animateTransform attributeName="transform" type="translate" values="0 0; 100 0" dur="2s" repeatCount="indefinite" />
              <path d="M -50 60 Q -20 20 10 60 T 70 60 T 130 60 T 190 60" fill="none" stroke="#38bdf8" strokeWidth="2" />
              
              {/* Velocity Vector on a peak */}
              <line x1="10" y1="20" x2="40" y2="20" stroke="#f87171" strokeWidth="3" markerEnd="url(#red-arrow)" />
              <text x="20" y="15" fill="#f87171" fontSize="10" fontWeight="bold">v</text>
            </g>
            <defs>
              <marker id="red-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#f87171" />
              </marker>
            </defs>
          </svg>
        </div>
      );

    case 'string-wavelength-visual':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 120">
            <line x1="30" y1="60" x2="270" y2="60" stroke="#475569" strokeWidth="2" />
            <circle cx="30" cy="60" r="4" fill="#facc15" />
            <circle cx="270" cy="60" r="4" fill="#facc15" />
            <text x="145" y="110" fill="#94a3b8" fontSize="10">L</text>
            <line x1="30" y1="95" x2="270" y2="95" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2" />
            
            {/* Standing wave envelope */}
            <path d="M 30 60 Q 90 10 150 60 T 270 60" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.6" />
            <path d="M 30 60 Q 90 110 150 60 T 270 60" fill="none" stroke="#a78bfa" strokeWidth="2" strokeDasharray="4" opacity="0.4" />
            
            {/* Node */}
            <circle cx="150" cy="60" r="3" fill="#f87171" />
            <text x="140" y="50" fill="#f87171" fontSize="10">Node</text>
          </svg>
        </div>
      );

    case 'segment-forces':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 150">
            {/* Curved String Segment */}
            <path d="M 50 100 Q 150 50 250 80" fill="none" stroke="#60a5fa" strokeWidth="4" />
            
            {/* Left Tension */}
            <line x1="50" y1="100" x2="20" y2="120" stroke="#facc15" strokeWidth="2" markerEnd="url(#yellow-arrow)" />
            <text x="15" y="135" fill="#facc15" fontSize="10">F(x)</text>
            <path d="M 50 100 L 90 100" stroke="#475569" strokeWidth="1" strokeDasharray="2" />
            <text x="60" y="112" fill="#94a3b8" fontSize="8">θ</text>
            
            {/* Right Tension */}
            <line x1="250" y1="80" x2="290" y2="90" stroke="#facc15" strokeWidth="2" markerEnd="url(#yellow-arrow)" />
            <text x="280" y="105" fill="#facc15" fontSize="10">F(x+dx)</text>
            <path d="M 210 80 L 250 80" stroke="#475569" strokeWidth="1" strokeDasharray="2" />
            <text x="235" y="88" fill="#94a3b8" fontSize="8">φ</text>

            <text x="140" y="60" fill="#38bdf8" fontSize="10">dm = ρ dx</text>
            
            <defs>
              <marker id="yellow-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#facc15" />
              </marker>
            </defs>
          </svg>
        </div>
      );

    case 'newtons-law-string':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 150">
            <path d="M 80 100 Q 150 40 220 70" fill="none" stroke="#64748b" strokeWidth="4" opacity="0.5" />
            
            {/* Vertical Force Components */}
            <line x1="80" y1="100" x2="80" y2="130" stroke="#f87171" strokeWidth="2" markerEnd="url(#red-arrow)" />
            <text x="85" y="125" fill="#f87171" fontSize="10">F sin θ</text>
            
            <line x1="220" y1="70" x2="220" y2="30" stroke="#4ade80" strokeWidth="2" markerEnd="url(#green-arrow)" />
            <text x="225" y="45" fill="#4ade80" fontSize="10">F sin φ</text>
            
            {/* Net Acceleration */}
            <line x1="150" y1="65" x2="150" y2="40" stroke="#facc15" strokeWidth="3" markerEnd="url(#yellow-arrow)" />
            <text x="160" y="55" fill="#facc15" fontSize="10" fontWeight="bold">a_y</text>

            <defs>
              <marker id="green-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#4ade80" />
              </marker>
            </defs>
          </svg>
        </div>
      );

    case 'small-angle-approx':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 120">
            <path d="M 50 100 Q 150 20 250 80" fill="none" stroke="#334155" strokeWidth="2" />
            
            {/* Tangent Line */}
            <line x1="100" y1="90" x2="200" y2="30" stroke="#60a5fa" strokeWidth="2" />
            
            {/* Triangle for Slope */}
            <line x1="150" y1="60" x2="200" y2="60" stroke="#facc15" strokeWidth="1" strokeDasharray="2" />
            <line x1="200" y1="60" x2="200" y2="30" stroke="#facc15" strokeWidth="1" strokeDasharray="2" />
            
            <text x="165" y="72" fill="#facc15" fontSize="10">dx</text>
            <text x="205" y="50" fill="#facc15" fontSize="10">dy</text>
            <text x="120" y="70" fill="#60a5fa" fontSize="10">tan θ = dy/dx</text>
          </svg>
        </div>
      );

    case 'linear-wave-equation':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 120">
            {/* Highly curved string -> High acceleration */}
            <path d="M 30 80 Q 70 10 110 80" fill="none" stroke="#f87171" strokeWidth="3" />
            <line x1="70" y1="45" x2="70" y2="85" stroke="#facc15" strokeWidth="3" markerEnd="url(#yellow-arrow)" />
            <text x="35" y="110" fill="#f87171" fontSize="10">High Curvature</text>
            <text x="50" y="125" fill="#facc15" fontSize="10">High Acceleration</text>

            {/* Slightly curved string -> Low acceleration */}
            <path d="M 190 80 Q 230 60 270 80" fill="none" stroke="#60a5fa" strokeWidth="3" />
            <line x1="230" y1="70" x2="230" y2="85" stroke="#facc15" strokeWidth="2" markerEnd="url(#yellow-arrow)" />
            <text x="195" y="110" fill="#60a5fa" fontSize="10">Low Curvature</text>
            <text x="205" y="125" fill="#facc15" fontSize="10">Low Accel</text>
          </svg>
        </div>
      );

    case 'separation-ansatz':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 120">
            <line x1="20" y1="60" x2="280" y2="60" stroke="#475569" strokeWidth="1" />
            {/* Spatial Envelope X(x) */}
            <path d="M 40 60 Q 100 10 160 60 T 280 60" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4" />
            <path d="M 40 60 Q 100 110 160 60 T 280 60" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4" />
            <text x="165" y="25" fill="#64748b" fontSize="10">Envelope X(x)</text>
            
            {/* Oscillating Function T(t) */}
            <path d="M 40 60 Q 100 10 160 60 T 280 60" fill="none" stroke="#4ade80" strokeWidth="3">
              <animate attributeName="d" 
                values="
                  M 40 60 Q 100 10 160 60 T 280 60;
                  M 40 60 Q 100 60 160 60 T 280 60;
                  M 40 60 Q 100 110 160 60 T 280 60;
                  M 40 60 Q 100 60 160 60 T 280 60;
                  M 40 60 Q 100 10 160 60 T 280 60" 
                dur="3s" repeatCount="indefinite" />
            </path>
            <text x="10" y="110" fill="#4ade80" fontSize="10">T(t) scales the shape</text>
          </svg>
        </div>
      );

    case 'oscillator-odes':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <div className="flex w-full justify-around mt-4">
             {/* Box 1: Spatial */}
             <div className="flex flex-col items-center p-3 border-2 border-[#38bdf8] rounded-2xl bg-[#38bdf8]/10 shadow-lg">
                <span className="text-[#38bdf8] font-bold text-sm mb-2">Space: X(x)</span>
                <svg width="80" height="40" viewBox="0 0 80 40">
                   <path d="M 0 20 Q 20 0 40 20 T 80 20" fill="none" stroke="#38bdf8" strokeWidth="2" />
                </svg>
                <span className="text-[#38bdf8] text-[10px] mt-2">X'' + k²X = 0</span>
             </div>
             
             {/* Box 2: Time */}
             <div className="flex flex-col items-center p-3 border-2 border-[#f472b6] rounded-2xl bg-[#f472b6]/10 shadow-lg">
                <span className="text-[#f472b6] font-bold text-sm mb-2">Time: T(t)</span>
                <svg width="80" height="40" viewBox="0 0 80 40">
                   <path d="M 0 20 Q 20 40 40 20 T 80 20" fill="none" stroke="#f472b6" strokeWidth="2" />
                </svg>
                <span className="text-[#f472b6] text-[10px] mt-2">T'' + ω²T = 0</span>
             </div>
          </div>
          <p className="mt-4 text-[10px] text-slate-400 font-bold">The single PDE separates into two independent ODEs.</p>
        </div>
      );

    case 'standing-wave-math':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
           <div className="text-center bg-black/40 p-4 rounded-xl border border-white/10 shadow-inner w-full max-w-[280px]">
              <p className="text-white text-sm font-bold mb-2">y(x,t) = X(x) · T(t)</p>
              <div className="flex justify-center items-center gap-2 mb-2">
                 <div className="bg-[#38bdf8]/20 text-[#38bdf8] px-2 py-1 rounded text-xs font-mono">
                    (A cos kx + B sin kx)
                 </div>
                 <span className="text-white text-xs">×</span>
                 <div className="bg-[#f472b6]/20 text-[#f472b6] px-2 py-1 rounded text-xs font-mono">
                    (C cos ωt + D sin ωt)
                 </div>
              </div>
              <p className="text-slate-400 text-[10px] italic mt-3">Expansion yields 4 separate standing wave components.</p>
           </div>
        </div>
      );

    case 'standing-wave-modes':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 120">
            <line x1="30" y1="60" x2="270" y2="60" stroke="#475569" strokeWidth="1" />
            <circle cx="30" cy="60" r="3" fill="#facc15" />
            <circle cx="270" cy="60" r="3" fill="#facc15" />
            
            {/* n=1 mode */}
            <path d="M 30 60 Q 150 10 270 60" fill="none" stroke="#4ade80" strokeWidth="2" opacity="0.8" />
            <text x="140" y="25" fill="#4ade80" fontSize="10">n=1 (λ = 2L)</text>

            {/* n=2 mode */}
            <path d="M 30 60 Q 90 20 150 60 T 270 60" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.6" />
            <text x="200" y="45" fill="#38bdf8" fontSize="10">n=2 (λ = L)</text>
            
            {/* n=3 mode */}
            <path d="M 30 60 Q 70 30 110 60 T 190 60 T 270 60" fill="none" stroke="#c084fc" strokeWidth="2" opacity="0.5" />
            <text x="80" y="80" fill="#c084fc" fontSize="10">n=3</text>
          </svg>
        </div>
      );

    case 'phase-constant-circle':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 200 150">
            {/* Axes */}
            <line x1="100" y1="30" x2="100" y2="130" stroke="#475569" strokeWidth="1" />
            <line x1="40" y1="80" x2="160" y2="80" stroke="#475569" strokeWidth="1" />
            
            {/* Triangle */}
            <path d="M 100 80 L 140 80 L 140 40 Z" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" strokeWidth="2" />
            
            <text x="115" y="90" fill="#94a3b8" fontSize="10">B</text>
            <text x="145" y="65" fill="#94a3b8" fontSize="10">-A</text>
            
            <text x="105" y="55" fill="#facc15" fontSize="12" fontWeight="bold">C</text>
            
            <path d="M 115 80 A 15 15 0 0 0 110 70" fill="none" stroke="#f87171" strokeWidth="1.5" />
            <text x="120" y="75" fill="#f87171" fontSize="10">α</text>
            
            <text x="10" y="145" fill="#a78bfa" fontSize="10">C = √(A² + B²)   tan(α) = -A/B</text>
          </svg>
        </div>
      );

    case 'square-wave-approx':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 150">
            {/* Top panel: Square Wave */}
            <g transform="translate(0, 10)">
               <line x1="20" y1="20" x2="280" y2="20" stroke="#475569" strokeWidth="1" strokeDasharray="2" />
               <path d="M 20 20 L 20 30 L 150 30 L 150 10 L 280 10 L 280 20" fill="none" stroke="#f87171" strokeWidth="2" />
            </g>
            
            {/* Middle panel: 1st Harmonic */}
            <g transform="translate(0, 60)">
               <line x1="20" y1="20" x2="280" y2="20" stroke="#475569" strokeWidth="1" strokeDasharray="2" />
               <path d="M 20 20 L 20 30 L 150 30 L 150 10 L 280 10 L 280 20" fill="none" stroke="#f87171" strokeWidth="1" opacity="0.3" />
               <path d="M 20 20 Q 85 40 150 20 T 280 20" fill="none" stroke="#60a5fa" strokeWidth="2" />
            </g>

            {/* Bottom panel: 1st + 3rd Harmonic */}
            <g transform="translate(0, 110)">
               <line x1="20" y1="20" x2="280" y2="20" stroke="#475569" strokeWidth="1" strokeDasharray="2" />
               <path d="M 20 20 L 20 30 L 150 30 L 150 10 L 280 10 L 280 20" fill="none" stroke="#f87171" strokeWidth="1" opacity="0.3" />
               <path d="M 20 20 C 40 40, 60 20, 85 35 C 110 50, 130 10, 150 20 C 170 30, 190 -10, 215 5 C 240 20, 260 0, 280 20" fill="none" stroke="#4ade80" strokeWidth="2" />
            </g>
          </svg>
        </div>
      );

    case 'plucked-string-geometry':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 120">
            <line x1="30" y1="90" x2="270" y2="90" stroke="#475569" strokeWidth="2" />
            <text x="25" y="105" fill="#94a3b8" fontSize="10">x=0</text>
            <text x="140" y="105" fill="#94a3b8" fontSize="10">x=L/2</text>
            <text x="260" y="105" fill="#94a3b8" fontSize="10">x=L</text>
            
            <line x1="150" y1="90" x2="150" y2="30" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
            <text x="155" y="60" fill="#facc15" fontSize="12">b</text>

            <path d="M 30 90 L 150 30 L 270 90" fill="none" stroke="#f87171" strokeWidth="3" />
            <circle cx="150" cy="30" r="4" fill="#facc15" />
          </svg>
        </div>
      );

    case 'fixed-end-string':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 120">
            <line x1="30" y1="60" x2="270" y2="60" stroke="#475569" strokeWidth="2" strokeDasharray="4" />
            <circle cx="30" cy="60" r="4" fill="#f87171" />
            <circle cx="270" cy="60" r="4" fill="#f87171" />
            <text x="15" y="65" fill="#f87171" fontSize="10">x=0</text>
            <text x="275" y="65" fill="#f87171" fontSize="10">x=L</text>
            <path d="M 30 60 Q 150 -20 270 60" fill="none" stroke="#60a5fa" strokeWidth="3">
              <animate attributeName="d" values="M 30 60 Q 150 -20 270 60; M 30 60 Q 150 60 270 60; M 30 60 Q 150 140 270 60; M 30 60 Q 150 60 270 60; M 30 60 Q 150 -20 270 60" dur="2s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      );

    case 'nodes-antinodes-vis':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 120">
            <line x1="30" y1="60" x2="270" y2="60" stroke="#475569" strokeWidth="1" />
            {/* Mode n=2 */}
            <path d="M 30 60 Q 90 10 150 60 T 270 60" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.6" />
            <path d="M 30 60 Q 90 110 150 60 T 270 60" fill="none" stroke="#a78bfa" strokeWidth="2" strokeDasharray="4" opacity="0.4" />
            
            <circle cx="30" cy="60" r="3" fill="#f87171" />
            <circle cx="150" cy="60" r="3" fill="#f87171" />
            <circle cx="270" cy="60" r="3" fill="#f87171" />
            <text x="140" y="50" fill="#f87171" fontSize="10">Node</text>
            
            <circle cx="90" cy="35" r="3" fill="#4ade80" />
            <circle cx="210" cy="85" r="3" fill="#4ade80" />
            <text x="75" y="25" fill="#4ade80" fontSize="10">Antinode</text>
          </svg>
        </div>
      );

    case 'quantized-harmonics':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 150">
            {/* n=1 */}
            <path d="M 30 30 Q 150 0 270 30" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 30 30 Q 150 60 270 30" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2" opacity="0.5"/>
            <text x="10" y="35" fill="#38bdf8" fontSize="10">n=1</text>
            {/* n=2 */}
            <path d="M 30 80 Q 90 50 150 80 T 270 80" fill="none" stroke="#4ade80" strokeWidth="2" />
            <path d="M 30 80 Q 90 110 150 80 T 270 80" fill="none" stroke="#4ade80" strokeWidth="2" strokeDasharray="2" opacity="0.5"/>
            <text x="10" y="85" fill="#4ade80" fontSize="10">n=2</text>
            {/* n=3 */}
            <path d="M 30 130 Q 70 100 110 130 T 190 130 T 270 130" fill="none" stroke="#facc15" strokeWidth="2" />
            <path d="M 30 130 Q 70 160 110 130 T 190 130 T 270 130" fill="none" stroke="#facc15" strokeWidth="2" strokeDasharray="2" opacity="0.5"/>
            <text x="10" y="135" fill="#facc15" fontSize="10">n=3</text>
          </svg>
        </div>
      );

    case 'pulse-propagation':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 100">
            <line x1="0" y1="70" x2="400" y2="70" stroke="#334155" strokeWidth="2" />
            <g>
              <animateTransform attributeName="transform" type="translate" from="-100 0" to="400 0" dur="3s" repeatCount="indefinite" />
              {/* Bell curve approximation */}
              <path d="M 0 70 C 30 70 40 20 50 20 C 60 20 70 70 100 70" fill="none" stroke="#f472b6" strokeWidth="3" />
              <line x1="50" y1="20" x2="80" y2="20" stroke="#facc15" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="60" y="15" fill="#facc15" fontSize="12" fontWeight="bold">v</text>
            </g>
          </svg>
        </div>
      );

    case 'traveling-wave-form':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
            <line x1="0" y1="50" x2="400" y2="50" stroke="#475569" strokeWidth="1" strokeDasharray="4" />
            <path d="M -100 50 Q -50 0 0 50 T 100 50 T 200 50 T 300 50 T 400 50 T 500 50" fill="none" stroke="#60a5fa" strokeWidth="3">
              <animateTransform attributeName="transform" type="translate" from="0 0" to="200 0" dur="2s" repeatCount="indefinite" />
            </path>
            <text x="150" y="20" fill="#facc15" fontSize="14" fontWeight="bold">f(x - vt)</text>
          </svg>
        </div>
      );

    case 'traveling-standing-superposition':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
             {/* Left traveling wave (Red) */}
             <g transform="translate(0, 30)">
                 <path d="M -100 0 Q -50 -40 0 0 T 100 0 T 200 0 T 300 0 T 400 0 T 500 0" fill="none" stroke="#f87171" strokeWidth="2" opacity="0.6">
                    <animateTransform attributeName="transform" type="translate" from="0 0" to="-200 0" dur="2s" repeatCount="indefinite" />
                 </path>
             </g>
             {/* Right traveling wave (Blue) */}
             <g transform="translate(0, 30)">
                 <path d="M -100 0 Q -50 -40 0 0 T 100 0 T 200 0 T 300 0 T 400 0 T 500 0" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.6">
                    <animateTransform attributeName="transform" type="translate" from="-200 0" to="0 0" dur="2s" repeatCount="indefinite" />
                 </path>
             </g>
             {/* Standing wave (Sum) */}
             <g transform="translate(0, 100)">
                <path d="M 0 0 Q 50 -40 100 0 T 200 0 T 300 0 T 400 0" fill="none" stroke="#c084fc" strokeWidth="3">
                   <animateTransform attributeName="transform" type="scale" values="1 1; 1 -1; 1 1" dur="1s" repeatCount="indefinite" />
                </path>
             </g>
             <text x="10" y="15" fill="#f87171" fontSize="10">Left Traveling</text>
             <text x="320" y="15" fill="#60a5fa" fontSize="10">Right Traveling</text>
             <text x="10" y="85" fill="#c084fc" fontSize="10">Superposition (Standing)</text>
          </svg>
        </div>
      );

    case 'wave-energy-stretch':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 200 150">
            {/* Horizontal dx line */}
            <line x1="50" y1="100" x2="150" y2="100" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4" />
            <text x="95" y="115" fill="#94a3b8" fontSize="10">dx</text>
            
            {/* Vertical dy line */}
            <line x1="150" y1="100" x2="150" y2="40" stroke="#facc15" strokeWidth="2" strokeDasharray="4" />
            <text x="160" y="75" fill="#facc15" fontSize="10">dy</text>
            
            {/* Hypotenuse ds */}
            <path d="M 50 100 Q 100 80 150 40" fill="none" stroke="#60a5fa" strokeWidth="3" />
            <text x="80" y="60" fill="#60a5fa" fontSize="12" fontWeight="bold">ds</text>
            
            <text x="50" y="20" fill="white" fontSize="10">ds = √(dx² + dy²)</text>
          </svg>
        </div>
      );

    case 'joined-strings-reflection':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 150">
            {/* Interface boundary */}
            <line x1="200" y1="20" x2="200" y2="130" stroke="#64748b" strokeWidth="1" strokeDasharray="4" />
            <text x="195" y="15" fill="#94a3b8" fontSize="10">x=0</text>
            
            {/* Left string (heavy) */}
            <line x1="0" y1="75" x2="200" y2="75" stroke="#475569" strokeWidth="4" />
            <text x="20" y="95" fill="#94a3b8" fontSize="10">ρ₁ (Heavy)</text>
            
            {/* Right string (light) */}
            <line x1="200" y1="75" x2="400" y2="75" stroke="#475569" strokeWidth="1" />
            <text x="340" y="95" fill="#94a3b8" fontSize="10">ρ₂ (Light)</text>
            
            {/* Incident wave */}
            <path d="M 50 75 C 75 75 80 40 100 40 C 120 40 125 75 150 75" fill="none" stroke="#60a5fa" strokeWidth="4">
              <animateTransform attributeName="transform" type="translate" from="-100 0" to="100 0" dur="2s" repeatCount="indefinite" />
            </path>
            <text x="10" y="30" fill="#60a5fa" fontSize="10">Incident (vi)</text>

            {/* Transmitted wave (Taller, wider, moving right fast) */}
            <path d="M 220 75 C 250 75 260 20 280 20 C 300 20 310 75 340 75" fill="none" stroke="#4ade80" strokeWidth="1" opacity="0">
              <animate attributeName="opacity" values="0; 0; 1; 1; 0" dur="2s" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="translate" from="-100 0" to="150 0" dur="2s" repeatCount="indefinite" />
            </path>

            {/* Reflected wave (Smaller, moving left) */}
            <path d="M 50 75 C 75 75 80 50 100 50 C 120 50 125 75 150 75" fill="none" stroke="#f87171" strokeWidth="4" opacity="0">
              <animate attributeName="opacity" values="0; 0; 1; 1; 0" dur="2s" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="translate" from="100 0" to="-100 0" dur="2s" repeatCount="indefinite" />
            </path>
            
          </svg>
          <p className="absolute bottom-1 text-[10px] text-slate-400 font-bold">A pulse hitting a lighter string reflects upright and transmits larger.</p>
        </div>
      );

    default:
      return null;
  }
};