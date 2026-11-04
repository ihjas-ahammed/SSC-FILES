import React, { useState } from 'react';

const CartesianGridCanvas: React.FC = () => {
  const [hovered, setHovered] = useState<{x: number, y: number} | null>(null);

  const A = [1, 2, 3];
  const B = [1, 5];

  // Map to SVG coordinates: Origin at bottom left
  // x: 1 => 50, 2 => 100, 3 => 150
  // y: 1 => 130, 5 => 50
  
  return (
    <div className="flex w-full h-full p-2 justify-center items-center">
       <svg viewBox="0 0 200 180" className="w-full h-full max-w-[250px]">
          {/* Axes */}
          <line x1="20" y1="160" x2="180" y2="160" stroke="#475569" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="160" stroke="#475569" strokeWidth="2" />
          
          <text x="185" y="165" className="fill-slate-500 text-[10px] font-bold">A</text>
          <text x="10" y="15" className="fill-slate-500 text-[10px] font-bold">B</text>

          {/* Grid lines & Points */}
          {A.map(a => {
            const cx = 20 + a * 40;
            return B.map(b => {
               const cy = 160 - b * 20;
               const isHovered = hovered?.x === a && hovered?.y === b;

               return (
                 <g key={`${a}-${b}`} 
                    onMouseEnter={() => setHovered({x: a, y: b})} 
                    onMouseLeave={() => setHovered(null)}
                    className="cursor-pointer">
                    <line x1={cx} y1="160" x2={cx} y2={cy} stroke="rgba(255,255,255,0.1)" strokeDasharray="2" />
                    <line x1="20" y1={cy} x2={cx} y2={cy} stroke="rgba(255,255,255,0.1)" strokeDasharray="2" />
                    
                    <circle cx={cx} cy={cy} r={isHovered ? "6" : "4"} className={`transition-all ${isHovered ? 'fill-duo-blue' : 'fill-slate-300'}`} />
                    
                    {isHovered && (
                       <rect x={cx - 20} y={cy - 25} width="40" height="18" rx="4" fill="black" stroke="#1cb0f6" strokeWidth="1" />
                    )}
                    {isHovered && (
                       <text x={cx} y={cy - 12} textAnchor="middle" className="fill-white font-bold text-[10px] pointer-events-none">
                          ({a},{b})
                       </text>
                    )}
                 </g>
               )
            });
          })}

          {/* Ticks A */}
          {A.map(a => (
             <text key={`ax-${a}`} x={20 + a * 40} y="175" textAnchor="middle" className="fill-slate-400 text-[10px] font-bold">{a}</text>
          ))}
          {/* Ticks B */}
          {B.map(b => (
             <text key={`bx-${b}`} x="10" y={163 - b * 20} textAnchor="middle" className="fill-slate-400 text-[10px] font-bold">{b}</text>
          ))}

       </svg>
    </div>
  );
};

export default CartesianGridCanvas;