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
      
    default:
      return null;
  }
};