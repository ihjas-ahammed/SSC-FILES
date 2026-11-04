import React from 'react';

const CartesianRectangleCanvas: React.FC = () => {
  return (
    <div className="flex w-full h-full p-2 justify-center items-center group">
       <svg viewBox="0 0 200 180" className="w-full h-full max-w-[250px]">
          {/* Axes */}
          <line x1="20" y1="160" x2="180" y2="160" stroke="#475569" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="160" stroke="#475569" strokeWidth="2" />
          
          <text x="185" y="165" className="fill-slate-500 text-[10px] font-bold">x</text>
          <text x="10" y="15" className="fill-slate-500 text-[10px] font-bold">y</text>

          {/* Continuous Region */}
          {/* A = [1, 2] -> x from 60 to 100 */}
          {/* B = [0, 1] -> y from 160 to 120 */}
          
          <rect x="60" y="120" width="40" height="40" 
             className="fill-duo-green/30 stroke-duo-green stroke-[2] transition-all duration-700 group-hover:fill-duo-green/50" />
             
          {/* Projection lines */}
          <line x1="60" y1="160" x2="60" y2="120" stroke="rgba(255,255,255,0.2)" strokeDasharray="2" />
          <line x1="100" y1="160" x2="100" y2="120" stroke="rgba(255,255,255,0.2)" strokeDasharray="2" />
          
          <line x1="20" y1="120" x2="60" y2="120" stroke="rgba(255,255,255,0.2)" strokeDasharray="2" />
          <line x1="20" y1="160" x2="60" y2="160" stroke="rgba(255,255,255,0.2)" strokeDasharray="2" />

          {/* Highlighted Intervals on Axes */}
          <line x1="60" y1="160" x2="100" y2="160" stroke="#1cb0f6" strokeWidth="4" />
          <line x1="20" y1="160" x2="20" y2="120" stroke="#ff4b4b" strokeWidth="4" />

          {/* Ticks */}
          <text x="60" y="175" textAnchor="middle" className="fill-blue-400 text-[10px] font-bold">1</text>
          <text x="100" y="175" textAnchor="middle" className="fill-blue-400 text-[10px] font-bold">2</text>
          
          <text x="10" y="163" textAnchor="middle" className="fill-red-400 text-[10px] font-bold">0</text>
          <text x="10" y="123" textAnchor="middle" className="fill-red-400 text-[10px] font-bold">1</text>
       </svg>
    </div>
  );
};

export default CartesianRectangleCanvas;