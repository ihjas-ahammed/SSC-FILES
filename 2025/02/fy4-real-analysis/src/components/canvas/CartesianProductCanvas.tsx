import React, { useState } from 'react';

const CartesianProductCanvas: React.FC = () => {
  const setA = ['1', '2', '3'];
  const setB = ['x', 'y'];
  
  const [activeA, setActiveA] = useState<number | null>(null);
  const [activeB, setActiveB] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
       <div className="grid grid-cols-[auto_1fr] gap-4 max-w-[280px] w-full">
          {/* Empty Top Left */}
          <div className="flex items-end justify-end p-2 text-slate-500 font-bold italic">A \ B</div>
          
          {/* Top Row: Set B */}
          <div className="flex justify-around items-end pb-2 border-b-2 border-white/10">
             {setB.map((b, j) => (
                <div key={b} 
                   onMouseEnter={() => setActiveB(j)} onMouseLeave={() => setActiveB(null)}
                   className={`w-10 h-10 flex items-center justify-center rounded-xl font-black transition-all cursor-pointer ${activeB === j ? 'bg-duo-green text-white scale-110' : 'bg-white/5 text-slate-400'}`}>
                   {b}
                </div>
             ))}
          </div>

          {/* Left Col: Set A */}
          <div className="flex flex-col justify-around items-end pr-4 border-r-2 border-white/10 space-y-2">
             {setA.map((a, i) => (
                <div key={a} 
                   onMouseEnter={() => setActiveA(i)} onMouseLeave={() => setActiveA(null)}
                   className={`w-10 h-10 flex items-center justify-center rounded-xl font-black transition-all cursor-pointer ${activeA === i ? 'bg-duo-blue text-white scale-110' : 'bg-white/5 text-slate-400'}`}>
                   {a}
                </div>
             ))}
          </div>

          {/* Matrix Body */}
          <div className="flex flex-col justify-around space-y-2">
             {setA.map((a, i) => (
                <div key={a} className="flex justify-around">
                   {setB.map((b, j) => {
                      const isActive = (activeA === null && activeB === null) || activeA === i || activeB === j;
                      const isTarget = activeA === i && activeB === j;
                      return (
                         <div key={a+b} 
                            onMouseEnter={() => { setActiveA(i); setActiveB(j); }}
                            onMouseLeave={() => { setActiveA(null); setActiveB(null); }}
                            className={`px-3 py-2 rounded-lg font-bold text-sm transition-all cursor-pointer border-2 
                               ${isTarget ? 'bg-white text-black border-white scale-110 shadow-lg z-10' 
                               : isActive ? 'bg-white/20 text-white border-transparent' 
                               : 'bg-transparent text-slate-600 border-white/5'}`}>
                            ({a},{b})
                         </div>
                      )
                   })}
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default CartesianProductCanvas;