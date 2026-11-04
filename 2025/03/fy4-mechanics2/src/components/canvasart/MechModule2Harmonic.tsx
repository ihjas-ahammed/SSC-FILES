import React from 'react';

export const renderMechModule2Harmonic = (id: string) => {
  switch (id) {
    case 'mass-spring-system':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative overflow-hidden">
           <svg className="w-full h-full" viewBox="0 0 300 100">
              {/* Wall */}
              <rect x="10" y="20" width="10" height="60" fill="#334155" />
              <line x1="20" y1="80" x2="290" y2="80" stroke="#94a3b8" strokeWidth="2" />
              
              {/* Spring */}
              <path d="M 20 50 Q 30 50 35 60 L 45 40 L 55 60 L 65 40 L 75 60 L 85 40 L 95 60 L 105 40 L 115 60 L 125 40 L 135 50 L 150 50" 
                    fill="none" stroke="#94a3b8" strokeWidth="2">
                 <animate attributeName="d" 
                    values="M 20 50 Q 30 50 35 60 L 45 40 L 55 60 L 65 40 L 75 60 L 85 40 L 95 60 L 105 40 L 115 60 L 125 40 L 135 50 L 150 50;
                            M 20 50 Q 30 50 35 60 L 55 40 L 75 60 L 95 40 L 115 60 L 135 40 L 155 60 L 175 40 L 195 60 L 215 40 L 235 50 L 250 50;
                            M 20 50 Q 30 50 35 60 L 45 40 L 55 60 L 65 40 L 75 60 L 85 40 L 95 60 L 105 40 L 115 60 L 125 40 L 135 50 L 150 50" 
                    dur="2s" repeatCount="indefinite" />
              </path>

              {/* Mass Block */}
              <rect x="150" y="30" width="40" height="40" fill="#60a5fa" stroke="#2563eb" strokeWidth="2">
                 <animate attributeName="x" values="150;250;150" dur="2s" repeatCount="indefinite" />
              </rect>
              <text x="165" y="55" fill="white" fontSize="12" fontWeight="bold">m</text>
              <text x="165" y="95" fill="#60a5fa" fontSize="10">x(t)</text>
           </svg>
        </div>
      );

    case 'simple-pendulum-swing':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
           <svg className="w-full h-full" viewBox="0 0 200 150">
              {/* Ceiling */}
              <line x1="70" y1="10" x2="130" y2="10" stroke="#94a3b8" strokeWidth="2" />
              
              {/* Pendulum Group */}
              <g transform="translate(100, 10)">
                 <g>
                    <animateTransform attributeName="transform" type="rotate" values="-30;30;-30" dur="2s" repeatCount="indefinite" />
                    <line x1="0" y1="0" x2="0" y2="100" stroke="#cbd5e1" strokeWidth="2" />
                    <circle cx="0" cy="100" r="8" fill="#f87171" stroke="#ef4444" strokeWidth="2" />
                 </g>
                 <path d="M 0 30 A 30 30 0 0 1 15 26" fill="none" stroke="#94a3b8" strokeDasharray="2" />
                 <text x="10" y="45" fill="#94a3b8" fontSize="10">θ</text>
              </g>
           </svg>
        </div>
      );

    case 'complex-rotation':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
           <svg className="w-full h-full" viewBox="0 0 200 200">
              {/* Axes */}
              <line x1="100" y1="20" x2="100" y2="180" stroke="#475569" strokeWidth="1" />
              <line x1="20" y1="100" x2="180" y2="100" stroke="#475569" strokeWidth="1" />
              <text x="180" y="115" fill="#94a3b8" fontSize="10">Re</text>
              <text x="110" y="30" fill="#94a3b8" fontSize="10">Im</text>

              {/* Circle */}
              <circle cx="100" cy="100" r="60" fill="none" stroke="#334155" strokeDasharray="4" />

              {/* Rotating Vector */}
              <line x1="100" y1="100" x2="142" y2="58" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrow)">
                 <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="-360 100 100" dur="4s" repeatCount="indefinite" />
              </line>
              
              <text x="105" y="190" fill="#fbbf24" fontSize="10">e^(iωt) rotates in Complex Plane</text>
           </svg>
        </div>
      );

    case 'damped-envelope':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
           <svg className="w-full h-full" viewBox="0 0 300 150">
              {/* Axis */}
              <line x1="10" y1="75" x2="290" y2="75" stroke="#475569" strokeWidth="1" />
              
              {/* Envelope Top */}
              <path d="M 10 10 Q 100 70 290 72" fill="none" stroke="#f472b6" strokeWidth="1" strokeDasharray="4" />
              {/* Envelope Bottom */}
              <path d="M 10 140 Q 100 80 290 78" fill="none" stroke="#f472b6" strokeWidth="1" strokeDasharray="4" />

              {/* Damped Wave */}
              <path d="M 10 75 C 20 5 30 145 40 75 C 50 25 60 125 70 75 C 80 40 90 110 100 75 C 150 60 200 90 290 75" 
                    fill="none" stroke="#38bdf8" strokeWidth="2" />
              
              <text x="200" y="30" fill="#f472b6" fontSize="10">Envelope: e^(-γt)</text>
           </svg>
        </div>
      );

    case 'damping-comparison':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
           <svg className="w-full h-full" viewBox="0 0 300 150">
              <line x1="20" y1="140" x2="20" y2="10" stroke="#475569" strokeWidth="1" />
              <line x1="20" y1="140" x2="290" y2="140" stroke="#475569" strokeWidth="1" />
              <text x="10" y="20" fill="#94a3b8" fontSize="10">x</text>
              <text x="280" y="145" fill="#94a3b8" fontSize="10">t</text>

              {/* Start Point */}
              <circle cx="20" cy="20" r="3" fill="#ffffff" />

              {/* Underdamped (Oscillates) */}
              <path d="M 20 20 C 40 140 60 20 80 100 C 100 140 120 120 200 140" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <text x="200" y="130" fill="#38bdf8" fontSize="10">Under</text>

              {/* Critically Damped (Fastest return) */}
              <path d="M 20 20 Q 40 140 100 140 L 290 140" fill="none" stroke="#4ade80" strokeWidth="2" />
              <text x="120" y="130" fill="#4ade80" fontSize="10">Critical</text>

              {/* Overdamped (Slow return) */}
              <path d="M 20 20 Q 150 100 290 135" fill="none" stroke="#fbbf24" strokeWidth="2" />
              <text x="250" y="120" fill="#fbbf24" fontSize="10">Over</text>
           </svg>
        </div>
      );

    default:
      return null;
  }
};