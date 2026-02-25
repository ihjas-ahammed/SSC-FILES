import React, { useState, useEffect } from 'react';

const DiagonalCountingCanvas: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  // The first few points of the diagonal traversal (m,n)
  // Sum = 2: (1,1)
  // Sum = 3: (1,2), (2,1)
  // Sum = 4: (1,3), (2,2), (3,1)
  // Sum = 5: (1,4), (2,3), (3,2), (4,1)
  const path = [
    {x: 1, y: 1},
    {x: 1, y: 2}, {x: 2, y: 1},
    {x: 1, y: 3}, {x: 2, y: 2}, {x: 3, y: 1},
    {x: 1, y: 4}, {x: 2, y: 3}, {x: 3, y: 2}, {x: 4, y: 1}
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % path.length);
    }, 800);
    return () => clearInterval(timer);
  }, [path.length]);

  const getCx = (x: number) => 30 + x * 40;
  const getCy = (y: number) => 30 + y * 30;

  return (
    <div className="flex flex-col w-full h-full items-center justify-center p-2 relative">
       <svg viewBox="0 0 250 180" className="w-full h-full max-w-[250px]">
          {/* Grid lines */}
          {[1,2,3,4].map(x => (
             <line key={`vx-${x}`} x1={getCx(x)} y1="40" x2={getCx(x)} y2="160" stroke="rgba(255,255,255,0.05)" />
          ))}
          {[1,2,3,4].map(y => (
             <line key={`vy-${y}`} x1="40" y1={getCy(y)} x2="200" y2={getCy(y)} stroke="rgba(255,255,255,0.05)" />
          ))}

          {/* Axis labels */}
          <text x="15" y="65" className="fill-slate-500 font-bold text-[10px]">n</text>
          <text x="70" y="15" className="fill-slate-500 font-bold text-[10px]">m</text>

          {/* Diagonals background lines */}
          <line x1={getCx(1)-10} y1={getCy(2)+10} x2={getCx(2)+10} y2={getCy(1)-10} stroke="#a855f7" strokeWidth="1" strokeOpacity="0.3" />
          <line x1={getCx(1)-10} y1={getCy(3)+10} x2={getCx(3)+10} y2={getCy(1)-10} stroke="#a855f7" strokeWidth="1" strokeOpacity="0.3" />
          <line x1={getCx(1)-10} y1={getCy(4)+10} x2={getCx(4)+10} y2={getCy(1)-10} stroke="#a855f7" strokeWidth="1" strokeOpacity="0.3" />

          {/* The connecting path up to activeIdx */}
          <path d={`M ${getCx(path[0].x)} ${getCy(path[0].y)} ${path.slice(1, activeIdx + 1).map(p => `L ${getCx(p.x)} ${getCy(p.y)}`).join(' ')}`} 
             fill="none" stroke="#ce82ff" strokeWidth="2" strokeDasharray="4" className="transition-all duration-300" />

          {/* Points */}
          {[1,2,3,4].map(x => (
             [1,2,3,4].map(y => {
                const isActive = path[activeIdx].x === x && path[activeIdx].y === y;
                const isVisited = path.findIndex(p => p.x === x && p.y === y) <= activeIdx && path.findIndex(p => p.x === x && p.y === y) !== -1;
                
                return (
                  <circle key={`${x}-${y}`} cx={getCx(x)} cy={getCy(y)} r={isActive ? 6 : 4} 
                     className={`transition-all duration-300 ${isActive ? 'fill-white shadow-[0_0_10px_#fff]' : isVisited ? 'fill-duo-violet' : 'fill-slate-700'}`} />
                )
             })
          ))}
       </svg>
       <div className="absolute bottom-2 text-xs font-bold text-white bg-black/60 px-3 py-1 rounded-full">
         Counting: ({path[activeIdx].x}, {path[activeIdx].y}) is #{activeIdx + 1}
       </div>
    </div>
  );
};

export default DiagonalCountingCanvas;