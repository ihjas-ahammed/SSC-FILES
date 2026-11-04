import React from 'react';

export const renderMechModule1Geometry = (id: string) => {
  switch (id) {
    case 'ellipse-definition':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
           <svg className="w-full h-full" viewBox="0 0 300 200">
              {/* Ellipse */}
              <ellipse cx="150" cy="100" rx="100" ry="70" fill="none" stroke="#60a5fa" strokeWidth="2" />
              
              {/* Foci */}
              <circle cx="90" cy="100" r="3" fill="#facc15" /> {/* Sun/Focus 1 */}
              <text x="85" y="115" fill="#facc15" fontSize="10">F</text>
              <circle cx="210" cy="100" r="3" fill="#94a3b8" /> {/* Focus 2 */}
              <text x="205" y="115" fill="#94a3b8" fontSize="10">F'</text>

              {/* Point P on ellipse */}
              <circle cx="150" cy="30" r="3" fill="white" />
              <text x="150" y="20" fill="white" fontSize="10">P</text>

              {/* String Lines */}
              <line x1="90" y1="100" x2="150" y2="30" stroke="#f87171" strokeWidth="1" strokeDasharray="4" />
              <text x="110" y="60" fill="#f87171" fontSize="10">r</text>
              <line x1="210" y1="100" x2="150" y2="30" stroke="#f87171" strokeWidth="1" strokeDasharray="4" />
              <text x="190" y="60" fill="#f87171" fontSize="10">r'</text>

              {/* Major Axis */}
              <line x1="50" y1="100" x2="250" y2="100" stroke="#334155" strokeWidth="1" />
              <text x="260" y="105" fill="#334155" fontSize="10">Major Axis (2a)</text>

              <text x="100" y="180" fill="white" fontSize="12" fontWeight="bold">r + r' = 2a = Constant</text>
           </svg>
        </div>
      );

    case 'conic-eccentricity':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
           <svg className="w-full h-full" viewBox="0 0 200 120">
              <defs>
                 <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
                 </marker>
              </defs>
              
              {/* Focus */}
              <circle cx="30" cy="60" r="3" fill="#facc15" />

              {/* Circle e=0 */}
              <circle cx="30" cy="60" r="25" fill="none" stroke="#4ade80" strokeWidth="1" opacity="0.5"/>
              <text x="60" y="50" fill="#4ade80" fontSize="8">e=0</text>

              {/* Ellipse e=0.7 */}
              <ellipse cx="45" cy="60" rx="40" ry="25" fill="none" stroke="#60a5fa" strokeWidth="1" />
              <text x="90" y="50" fill="#60a5fa" fontSize="8">0 &lt; e &lt; 1</text>

              {/* Parabola e=1 */}
              <path d="M 30 10 Q 100 60 30 110" fill="none" stroke="#fbbf24" strokeWidth="1" />
              <text x="40" y="100" fill="#fbbf24" fontSize="8">e=1</text>

              {/* Hyperbola e>1 */}
              <path d="M 60 5 Q 80 60 60 115" fill="none" stroke="#f87171" strokeWidth="1" />
              <text x="70" y="10" fill="#f87171" fontSize="8">e &gt; 1</text>
           </svg>
        </div>
      );

    default:
      return null;
  }
};