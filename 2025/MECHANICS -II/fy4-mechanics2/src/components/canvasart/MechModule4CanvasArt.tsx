import React from 'react';

export const renderMechModule4CanvasArt = (id: string) => {
  switch (id) {
    case 'accelerated-frame-fig15-1':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 200">
            <defs>
              <marker id="pink-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#f472b6" />
              </marker>
              <marker id="green-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#4ade80" />
              </marker>
              <marker id="blue-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#60a5fa" />
              </marker>
            </defs>

            {/* O axes (Static) */}
            <line x1="40" y1="160" x2="100" y2="160" stroke="#94a3b8" strokeWidth="2" />
            <line x1="40" y1="160" x2="40" y2="100" stroke="#94a3b8" strokeWidth="2" />
            <text x="30" y="175" fill="#f8fafc" fontSize="14" fontWeight="bold">O</text>

            {/* Mass m (Static) */}
            <circle cx="240" cy="50" r="4" fill="#facc15" />
            <text x="250" y="55" fill="#facc15" fontSize="14" fontWeight="bold">m</text>

            {/* Vector r_O from O to m (Static) */}
            <line x1="40" y1="160" x2="240" y2="50" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#blue-arrow)" />
            <text x="120" y="150" fill="#60a5fa" fontSize="14" fontWeight="bold">r_O</text>

            {/* Animated O' and Vectors with direct coordinate animation so endpoints match */}
            <line x1="40" y1="160" x2="100" y2="130" stroke="#4ade80" strokeWidth="2" markerEnd="url(#green-arrow)">
               <animate attributeName="x2" values="100; 140; 100" dur="4s" repeatCount="indefinite" />
               <animate attributeName="y2" values="130; 100; 130" dur="4s" repeatCount="indefinite" />
            </line>
            <text x="60" y="135" fill="#4ade80" fontSize="14" fontWeight="bold">
               <animate attributeName="x" values="60; 80; 60" dur="4s" repeatCount="indefinite" />
               <animate attributeName="y" values="135; 120; 135" dur="4s" repeatCount="indefinite" />
               r
            </text>

            <line x1="100" y1="130" x2="240" y2="50" stroke="#f472b6" strokeWidth="2" markerEnd="url(#pink-arrow)">
               <animate attributeName="x1" values="100; 140; 100" dur="4s" repeatCount="indefinite" />
               <animate attributeName="y1" values="130; 100; 130" dur="4s" repeatCount="indefinite" />
            </line>
            <text x="180" y="100" fill="#f472b6" fontSize="14" fontWeight="bold">
               <animate attributeName="x" values="180; 200; 180" dur="4s" repeatCount="indefinite" />
               <animate attributeName="y" values="100; 80; 100" dur="4s" repeatCount="indefinite" />
               r_O'
            </text>

            <g>
               <animateTransform attributeName="transform" type="translate" values="0 0; 40 -30; 0 0" dur="4s" repeatCount="indefinite" />
               <line x1="100" y1="130" x2="160" y2="130" stroke="#94a3b8" strokeWidth="2" />
               <line x1="100" y1="130" x2="100" y2="70" stroke="#94a3b8" strokeWidth="2" />
               <text x="105" y="145" fill="#f8fafc" fontSize="14" fontWeight="bold">O'</text>
            </g>
          </svg>
        </div>
      );

    case 'rotating-earth-fig15-2':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#f8fafc" />
              </marker>
              <marker id="red-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#f87171" />
              </marker>
            </defs>

            {/* Earth Sphere */}
            <circle cx="100" cy="100" r="50" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="4" />
            <ellipse cx="100" cy="100" rx="50" ry="15" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="4" />
            
            {/* Z axis (Fixed & Rotating align) */}
            <line x1="100" y1="100" x2="100" y2="30" stroke="#f8fafc" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="90" y="25" fill="#f8fafc" fontSize="10">z, z'</text>

            {/* Fixed axes x, y */}
            <line x1="100" y1="100" x2="40" y2="140" stroke="#f8fafc" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="30" y="150" fill="#f8fafc" fontSize="10">x</text>
            <line x1="100" y1="100" x2="170" y2="100" stroke="#f8fafc" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="175" y="105" fill="#f8fafc" fontSize="10">y</text>

            {/* Rotating axes x', y' */}
            <g>
              <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="8s" repeatCount="indefinite" />
              <line x1="100" y1="100" x2="100" y2="170" stroke="#f87171" strokeWidth="2" markerEnd="url(#red-arrow)" />
              <text x="105" y="180" fill="#f87171" fontSize="10">x'</text>
              <line x1="100" y1="100" x2="170" y2="100" stroke="#f87171" strokeWidth="2" markerEnd="url(#red-arrow)" />
              <text x="175" y="105" fill="#f87171" fontSize="10">y'</text>
            </g>
            
            {/* Omega rotation arrow */}
            <path d="M 90 40 A 10 10 0 0 1 110 40" fill="none" stroke="#facc15" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="75" y="45" fill="#facc15" fontSize="10">Ω</text>
          </svg>
        </div>
      );

    case 'centrifugal-force-vector':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <marker id="pink-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#f87171" />
              </marker>
              <marker id="green-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#4ade80" />
              </marker>
              <marker id="blue-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#f8fafc" />
              </marker>
            </defs>
             {/* Earth Sphere */}
            <circle cx="100" cy="100" r="60" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="4" />
            <ellipse cx="100" cy="100" rx="60" ry="15" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="4" />
            
            {/* Z axis */}
            <line x1="100" y1="180" x2="100" y2="20" stroke="#f8fafc" strokeWidth="2" markerEnd="url(#blue-arrow)" />
            <text x="90" y="15" fill="#f8fafc" fontSize="10">Ω</text>
            
            {/* Position r */}
            <line x1="100" y1="100" x2="140" y2="60" stroke="#4ade80" strokeWidth="2" markerEnd="url(#green-arrow)" />
            <text x="110" y="70" fill="#4ade80" fontSize="10">r</text>
            
            {/* Distance from axis */}
            <line x1="100" y1="60" x2="140" y2="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2" />
            
            {/* Centrifugal force */}
            <line x1="140" y1="60" x2="180" y2="60" stroke="#f87171" strokeWidth="2" markerEnd="url(#pink-arrow)" />
            <text x="135" y="50" fill="#f87171" fontSize="10">-Ω × (Ω × r)</text>
          </svg>
        </div>
      );

    case 'bug-on-record':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <marker id="blue-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#facc15" />
              </marker>
            </defs>
            {/* Record */}
            <circle cx="100" cy="100" r="80" fill="#1e293b" />
            <circle cx="100" cy="100" r="5" fill="#0f172a" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="#334155" strokeWidth="1" />
            
            {/* Rotating reference mark on record */}
            <g>
               <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="6s" repeatCount="indefinite" />
               <line x1="100" y1="100" x2="100" y2="20" stroke="#475569" strokeWidth="2" />
            </g>
            
            {/* Bug moving along groove at radius 50 */}
            <g>
               {/* Bug moves FASTER than record to show relative velocity */}
               <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="3s" repeatCount="indefinite" />
               <circle cx="100" cy="50" r="4" fill="#facc15" />
               <path d="M 100 50 A 10 10 0 0 1 120 50" fill="none" stroke="#facc15" strokeWidth="2" markerEnd="url(#blue-arrow)"/>
               <text x="125" y="55" fill="#facc15" fontSize="10">v_b</text>
            </g>
          </svg>
        </div>
      );

    case 'plumb-bob-forces':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="currentColor" />
              </marker>
              <marker id="pink-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#f87171" />
              </marker>
              <marker id="yellow-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#facc15" />
              </marker>
              <marker id="green-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#4ade80" />
              </marker>
            </defs>
            
            {/* Earth Sphere */}
            <circle cx="100" cy="100" r="80" fill="none" stroke="#475569" strokeWidth="1" />
            <line x1="100" y1="10" x2="100" y2="190" stroke="#475569" strokeWidth="1" strokeDasharray="4" />
            
            {/* Bob at latitude ~30 degrees North */}
            <circle cx="150" cy="40" r="4" fill="#38bdf8" />
            
            {/* True Gravity */}
            <line x1="150" y1="40" x2="115" y2="82" stroke="#4ade80" strokeWidth="2" markerEnd="url(#green-arrow)" />
            <text x="125" y="70" fill="#4ade80" fontSize="10">mg</text>
            
            {/* Centrifugal Force */}
            <line x1="150" y1="40" x2="185" y2="40" stroke="#f87171" strokeWidth="2" markerEnd="url(#pink-arrow)" />
            <text x="190" y="45" fill="#f87171" fontSize="10">F_c</text>
            
            {/* Tension */}
            <line x1="150" y1="40" x2="125" y2="10" stroke="#facc15" strokeWidth="2" markerEnd="url(#yellow-arrow)" />
            <text x="120" y="25" fill="#facc15" fontSize="10">T</text>
          </svg>
        </div>
      );

    case 'effective-gravity-vector':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <marker id="green-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#4ade80" />
              </marker>
              <marker id="pink-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#f87171" />
              </marker>
              <marker id="purple-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#c084fc" />
              </marker>
            </defs>

            {/* Earth outline piece */}
            <path d="M 180 100 A 80 80 0 0 0 100 20" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="4" />
            <circle cx="100" cy="100" r="3" fill="#475569" />
            <text x="105" y="105" fill="#475569" fontSize="10">Center</text>

            <circle cx="160" cy="48" r="4" fill="#38bdf8" />
            
            {/* True gravity */}
            <line x1="160" y1="48" x2="110" y2="92" stroke="#4ade80" strokeWidth="2" markerEnd="url(#green-arrow)" />
            <text x="130" y="80" fill="#4ade80" fontSize="10">g</text>

            {/* Centrifugal acceleration */}
            <line x1="160" y1="48" x2="185" y2="48" stroke="#f87171" strokeWidth="2" markerEnd="url(#pink-arrow)" />
            <text x="190" y="52" fill="#f87171" fontSize="10">a_c</text>

            {/* Effective gravity (resultant) */}
            {/* To show g_e = g + a_c, we can draw a_c at the tip of g */}
            <line x1="110" y1="92" x2="135" y2="92" stroke="#f87171" strokeWidth="1" strokeDasharray="2" markerEnd="url(#pink-arrow)" />
            <line x1="160" y1="48" x2="135" y2="92" stroke="#c084fc" strokeWidth="3" markerEnd="url(#purple-arrow)" />
            <text x="145" y="75" fill="#c084fc" fontSize="12" fontWeight="bold">g_e</text>
          </svg>
        </div>
      );

    case 'reference-frame-latitude':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#f8fafc" />
              </marker>
              <marker id="blue-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#60a5fa" />
              </marker>
            </defs>

            {/* Earth Sphere */}
            <circle cx="100" cy="100" r="60" fill="none" stroke="#475569" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="60" ry="15" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="4" />
            
            {/* Rotation Axis */}
            <line x1="100" y1="160" x2="100" y2="20" stroke="#f8fafc" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="105" y="25" fill="#f8fafc" fontSize="12" fontWeight="bold">Ω</text>

            {/* Local Frame Origin */}
            <circle cx="142" cy="58" r="3" fill="#facc15" />
            
            {/* Local z-axis (Up) */}
            <line x1="142" y1="58" x2="170" y2="30" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#blue-arrow)" />
            <text x="175" y="30" fill="#60a5fa" fontSize="10">z (Up)</text>

            {/* Local y-axis (North) */}
            <line x1="142" y1="58" x2="114" y2="30" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#blue-arrow)" />
            <text x="90" y="30" fill="#60a5fa" fontSize="10">y (North)</text>

            {/* Local x-axis (East, into screen) */}
            <circle cx="142" cy="58" r="6" fill="none" stroke="#60a5fa" strokeWidth="1" />
            <line x1="139" y1="55" x2="145" y2="61" stroke="#60a5fa" strokeWidth="1" />
            <line x1="145" y1="55" x2="139" y2="61" stroke="#60a5fa" strokeWidth="1" />
            <text x="150" y="65" fill="#60a5fa" fontSize="10">x (East)</text>

            {/* Colatitude Angle */}
            <path d="M 100 40 Q 120 40 130 50" fill="none" stroke="#facc15" strokeWidth="1" />
            <text x="110" y="55" fill="#facc15" fontSize="10">λ</text>
            <line x1="100" y1="100" x2="142" y2="58" stroke="#475569" strokeWidth="1" strokeDasharray="2" />
          </svg>
        </div>
      );

    case 'falling-body-deflection':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            {/* Tower */}
            <rect x="90" y="40" width="10" height="140" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            
            {/* Ground */}
            <line x1="20" y1="180" x2="180" y2="180" stroke="#94a3b8" strokeWidth="3" />
            
            {/* True Plumb Line */}
            <line x1="105" y1="40" x2="105" y2="180" stroke="#4ade80" strokeWidth="1" strokeDasharray="4" />
            <text x="110" y="170" fill="#4ade80" fontSize="8">True Plumb</text>

            {/* Deflected Path */}
            <path d="M 105 40 Q 105 120 135 180" fill="none" stroke="#f87171" strokeWidth="2" />
            
            {/* Falling Ball */}
            <circle cx="120" cy="120" r="4" fill="#facc15">
               <animateMotion dur="2s" repeatCount="indefinite" path="M 105 40 Q 105 120 135 180" />
            </circle>

            <text x="140" y="175" fill="#f87171" fontSize="10">Deflects East</text>
          </svg>
        </div>
      );

    case 'projectile-east-north':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <marker id="axis-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#94a3b8" />
              </marker>
              <marker id="v-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#facc15" />
              </marker>
            </defs>

            {/* Axes */}
            {/* y-axis (North) */}
            <line x1="100" y1="150" x2="170" y2="150" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#axis-arrow)" />
            <text x="175" y="155" fill="#94a3b8" fontSize="10">y (North)</text>

            {/* z-axis (Up) */}
            <line x1="100" y1="150" x2="100" y2="50" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#axis-arrow)" />
            <text x="95" y="45" fill="#94a3b8" fontSize="10">z (Up)</text>

            {/* x-axis (East, drawn diagonally downwards) */}
            <line x1="100" y1="150" x2="40" y2="180" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#axis-arrow)" />
            <text x="25" y="190" fill="#94a3b8" fontSize="10">x (East)</text>

            {/* Velocity Vector */}
            <line x1="100" y1="150" x2="140" y2="80" stroke="#facc15" strokeWidth="2" markerEnd="url(#v-arrow)" />
            <text x="145" y="75" fill="#facc15" fontSize="12" fontWeight="bold">v_0</text>

            {/* Projection on xy plane */}
            <line x1="100" y1="150" x2="140" y2="130" stroke="#475569" strokeWidth="1" strokeDasharray="4" />
            <line x1="140" y1="130" x2="140" y2="80" stroke="#475569" strokeWidth="1" strokeDasharray="4" />

            {/* Azimuth angle phi */}
            <path d="M 130 150 A 30 30 0 0 0 120 140" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="135" y="145" fill="#38bdf8" fontSize="10">φ</text>

            {/* Elevation angle theta */}
            <path d="M 120 140 A 40 40 0 0 0 115 125" fill="none" stroke="#f87171" strokeWidth="1.5" />
            <text x="125" y="125" fill="#f87171" fontSize="10">θ</text>
          </svg>
        </div>
      );

    case 'foucault-pendulum-frame':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <marker id="axis-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#94a3b8" />
              </marker>
              <marker id="force-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#f87171" />
              </marker>
            </defs>

            {/* Axes */}
            <line x1="100" y1="150" x2="170" y2="150" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#axis-arrow)" />
            <text x="175" y="155" fill="#94a3b8" fontSize="10">y</text>
            <line x1="100" y1="150" x2="100" y2="50" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#axis-arrow)" />
            <text x="95" y="45" fill="#94a3b8" fontSize="10">z</text>
            <line x1="100" y1="150" x2="40" y2="180" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#axis-arrow)" />
            <text x="25" y="190" fill="#94a3b8" fontSize="10">x</text>

            {/* Pendulum */}
            <line x1="100" y1="70" x2="140" y2="120" stroke="#facc15" strokeWidth="2" />
            <circle cx="140" cy="120" r="5" fill="#38bdf8" />
            
            {/* Projection */}
            <line x1="140" y1="120" x2="140" y2="160" stroke="#475569" strokeWidth="1" strokeDasharray="4" />
            <line x1="100" y1="150" x2="140" y2="160" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#axis-arrow)" />
            
            {/* Precession Angle */}
            <path d="M 80 160 Q 90 165 110 152" fill="none" stroke="#c084fc" strokeWidth="1.5" />
            <text x="115" y="165" fill="#c084fc" fontSize="12">ψ</text>

            {/* Forces */}
            <line x1="140" y1="120" x2="110" y2="82" stroke="#f87171" strokeWidth="1" markerEnd="url(#force-arrow)" />
            <text x="115" y="75" fill="#f87171" fontSize="10">T</text>
            <line x1="140" y1="120" x2="140" y2="150" stroke="#f87171" strokeWidth="1" markerEnd="url(#force-arrow)" />
            <text x="145" y="140" fill="#f87171" fontSize="10">mg</text>
          </svg>
        </div>
      );

    case 'foucault-amplitude-plots':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 300 200">
            {/* X Plot */}
            <g transform="translate(0, 50)">
               <line x1="20" y1="0" x2="280" y2="0" stroke="#475569" strokeWidth="1" />
               <text x="10" y="5" fill="#94a3b8" fontSize="10">x</text>
               {/* Envelope */}
               <path d="M 20 40 Q 150 -40 280 40" fill="none" stroke="#c084fc" strokeWidth="1" strokeDasharray="4" opacity="0.6" />
               <path d="M 20 -40 Q 150 40 280 -40" fill="none" stroke="#c084fc" strokeWidth="1" strokeDasharray="4" opacity="0.6" />
               {/* Fast wave */}
               <path d="M 20 40 Q 25 -40 30 35 Q 35 -35 40 30 Q 45 -30 50 25 Q 55 -25 60 20 Q 65 -20 70 15 Q 75 -15 80 10 Q 85 -10 90 5 Q 95 -5 100 0 Q 105 0 110 -5 Q 115 5 120 -10 Q 125 10 130 -15 Q 135 15 140 -20 Q 145 20 150 -25 Q 155 25 160 -30 Q 165 30 170 -35 Q 175 35 180 -40 Q 185 40 190 -35 Q 195 35 200 -30 Q 205 30 210 -25 Q 215 25 220 -20 Q 225 20 230 -15 Q 235 15 240 -10 Q 245 10 250 -5 Q 255 5 260 0" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
            </g>

            {/* Y Plot */}
            <g transform="translate(0, 150)">
               <line x1="20" y1="0" x2="280" y2="0" stroke="#475569" strokeWidth="1" />
               <text x="10" y="5" fill="#94a3b8" fontSize="10">y</text>
               {/* Envelope */}
               <path d="M 20 0 Q 150 80 280 0" fill="none" stroke="#c084fc" strokeWidth="1" strokeDasharray="4" opacity="0.6" />
               <path d="M 20 0 Q 150 -80 280 0" fill="none" stroke="#c084fc" strokeWidth="1" strokeDasharray="4" opacity="0.6" />
               {/* Fast wave (Starts at 0, grows as x dies) */}
               <path d="M 20 0 Q 25 5 30 -5 Q 35 10 40 -10 Q 45 15 50 -15 Q 55 20 60 -20 Q 65 25 70 -25 Q 75 30 80 -30 Q 85 35 90 -35 Q 95 40 100 -40 Q 105 40 110 -35 Q 115 35 120 -30 Q 125 30 130 -25 Q 135 25 140 -20 Q 145 20 150 -15 Q 155 15 160 -10 Q 165 10 170 -5 Q 175 5 180 0" fill="none" stroke="#f87171" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      );

    case 'foucault-starred-system':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <marker id="axis-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#94a3b8" />
              </marker>
              <marker id="star-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#facc15" />
              </marker>
            </defs>

            {/* Earth axes */}
            <line x1="100" y1="150" x2="100" y2="50" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#axis-arrow)" />
            <text x="90" y="55" fill="#94a3b8" fontSize="12">y</text>
            <line x1="50" y1="100" x2="150" y2="100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#axis-arrow)" />
            <text x="145" y="90" fill="#94a3b8" fontSize="12">x</text>

            {/* Starred axes */}
            <g>
               <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite" />
               <line x1="65" y1="135" x2="135" y2="65" stroke="#facc15" strokeWidth="2" markerEnd="url(#star-arrow)" />
               <text x="140" y="65" fill="#facc15" fontSize="12">x*</text>
               <line x1="65" y1="65" x2="135" y2="135" stroke="#facc15" strokeWidth="2" markerEnd="url(#star-arrow)" />
               <text x="140" y="140" fill="#facc15" fontSize="12">y*</text>
               
               {/* Pendulum bob on x* axis */}
               <line x1="100" y1="100" x2="120" y2="80" stroke="#4ade80" strokeWidth="2" strokeDasharray="2" />
               <circle cx="120" cy="80" r="4" fill="#4ade80" />
               <text x="110" y="75" fill="#4ade80" fontSize="10">s</text>
            </g>

            {/* Rotation indicator */}
            <path d="M 120 100 A 20 20 0 0 0 114 86" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="125" y="95" fill="#38bdf8" fontSize="10">Kt</text>
          </svg>
        </div>
      );

    default:
      return null;
  }
};