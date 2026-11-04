import React from 'react';

export const renderModernPhysicsAtomic1 = (id: string): React.ReactElement | null => {
  switch (id) {
    case 'thomson-plum-pudding': {
       return (
         <div className="flex flex-col items-center justify-center w-full h-full p-2">
           <svg className="w-full" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
             <circle cx="150" cy="100" r="80" fill="rgba(250, 204, 21, 0.2)" stroke="#facc15" strokeWidth="2" strokeDasharray="4 4" />
             <text x="150" y="40" fill="#facc15" fontSize="14" textAnchor="middle" fontWeight="bold">+Ze (Uniform Sphere)</text>
             {/* Electrons */}
             <circle cx="120" cy="80" r="5" fill="#60a5fa" />
             <text x="120" y="84" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">-</text>
             <circle cx="170" cy="70" r="5" fill="#60a5fa" />
             <text x="170" y="74" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">-</text>
             <circle cx="140" cy="130" r="5" fill="#60a5fa" />
             <text x="140" y="134" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">-</text>
             <circle cx="180" cy="120" r="5" fill="#60a5fa" />
             <text x="180" y="124" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">-</text>
             <circle cx="100" cy="110" r="5" fill="#60a5fa" />
             <text x="100" y="114" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">-</text>
           </svg>
         </div>
       );
    }
    case 'alpha-scattering-thomson': {
       return (
         <div className="flex flex-col items-center justify-center w-full h-full p-2">
           <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
             {/* Atoms */}
             <circle cx="100" cy="75" r="40" fill="rgba(250, 204, 21, 0.1)" stroke="#facc15" strokeWidth="1" />
             <circle cx="200" cy="75" r="40" fill="rgba(250, 204, 21, 0.1)" stroke="#facc15" strokeWidth="1" />
             {/* Alpha tracks */}
             <path d="M 0 50 L 300 52" fill="none" stroke="#4ade80" strokeWidth="2" />
             <path d="M 0 75 L 300 75" fill="none" stroke="#4ade80" strokeWidth="2" />
             <path d="M 0 100 L 300 98" fill="none" stroke="#4ade80" strokeWidth="2" />
             <text x="150" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle">Alpha particles experience virtually no deflection.</text>
           </svg>
         </div>
       );
    }
    case 'alpha-scattering-rutherford': {
       return (
         <div className="flex flex-col items-center justify-center w-full h-full p-2">
           <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
             {/* Nucleus */}
             <circle cx="150" cy="75" r="4" fill="#facc15" />
             {/* Alpha tracks */}
             {/* Top passing */}
             <path d="M 0 40 Q 150 40 300 30" fill="none" stroke="#4ade80" strokeWidth="2" />
             {/* Mid passing */}
             <path d="M 0 65 Q 120 65 140 20" fill="none" stroke="#4ade80" strokeWidth="2" />
             {/* Head on */}
             <path d="M 0 76 L 140 76 L 0 82" fill="none" stroke="#4ade80" strokeWidth="2" />
             {/* Bottom passing */}
             <path d="M 0 85 Q 120 85 140 130" fill="none" stroke="#4ade80" strokeWidth="2" />
             
             <text x="150" y="145" fill="#cbd5e1" fontSize="10" textAnchor="middle">Dense nucleus causes extreme hyperbolic deflections.</text>
           </svg>
         </div>
       );
    }
    case 'closest-approach-diagram': {
       return (
         <div className="flex flex-col items-center justify-center w-full h-full p-2">
           <svg className="w-full" viewBox="0 0 300 150" preserveAspectRatio="xMidYMid meet">
             {/* Nucleus */}
             <circle cx="250" cy="75" r="15" fill="#facc15" />
             <text x="250" y="79" fill="#000" fontSize="10" fontWeight="bold" textAnchor="middle">+Ze</text>
             
             {/* Alpha Particle */}
             <circle cx="50" cy="75" r="6" fill="#4ade80" />
             <text x="50" y="78" fill="#000" fontSize="8" fontWeight="bold" textAnchor="middle">+ze</text>
             <line x1="60" y1="75" x2="110" y2="75" stroke="#4ade80" strokeWidth="2" markerEnd="url(#arrow)" />
             <text x="85" y="65" fill="#4ade80" fontSize="10" textAnchor="middle">v</text>

             {/* Stop point */}
             <line x1="180" y1="50" x2="180" y2="100" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 2" />
             <text x="180" y="40" fill="#cbd5e1" fontSize="10" textAnchor="middle">v = 0 (K = 0)</text>

             {/* Distance d */}
             <line x1="180" y1="110" x2="250" y2="110" stroke="#f43f5e" strokeWidth="1.5" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
             <text x="215" y="125" fill="#f43f5e" fontSize="12" fontWeight="bold" textAnchor="middle">d</text>
             
             <defs>
               <marker id="arrow" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                 <path d="M0,0 L5,2.5 L0,5 Z" fill="currentColor" />
               </marker>
             </defs>
           </svg>
         </div>
       );
    }
    default:
      return null;
  }
};