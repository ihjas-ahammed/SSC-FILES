import React, { useState } from 'react';

export const renderModule2Zener = (id: string) => {
  switch (id) {
    case 'zener-symbol-curve':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 gap-4">
           {/* Symbol */}
           <div className="flex items-center gap-2">
              <div className="w-16 h-[2px] bg-slate-400"></div>
              <div className="relative w-8 h-8 flex items-center justify-center">
                 <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-slate-400 transform rotate-90"></div>
                 <div className="absolute right-0 top-0 h-full w-4 border-r-2 border-slate-400 transform skew-y-12"></div> {/* Z shape approx */}
                 <div className="absolute right-[2px] h-full w-[2px] bg-slate-400"></div>
                 <div className="absolute right-0 top-0 w-2 h-[2px] bg-slate-400"></div>
                 <div className="absolute right-0 bottom-0 w-2 h-[2px] bg-slate-400"></div>
              </div>
              <div className="w-16 h-[2px] bg-slate-400"></div>
           </div>
           
           {/* Curve */}
           <div className="relative w-48 h-32 border-l border-b border-slate-500">
              <span className="absolute -top-4 right-0 text-[8px] text-slate-400">V_F</span>
              <span className="absolute -left-6 bottom-0 text-[8px] text-slate-400">I_R</span>
              
              <svg className="absolute inset-0 w-full h-full overflow-visible">
                 {/* Forward */}
                 <path d="M 0 100 Q 50 100 80 50" stroke="#4ade80" fill="none" strokeWidth="1" opacity="0.5" />
                 {/* Reverse Breakdown */}
                 <path d="M 0 100 L -50 100 L -50 150" stroke="#c084fc" fill="none" strokeWidth="3" transform="translate(50, -20)"/>
                 <text x="-40" y="140" fill="#c084fc" fontSize="10" transform="translate(50, -20)">V_Z</text>
              </svg>
           </div>
        </div>
      );

    case 'zener-regulator-circuit':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 relative">
           <div className="border-2 border-slate-600 rounded-lg p-4 w-full max-w-xs relative bg-slate-900/50">
              <div className="flex justify-between items-center mb-4">
                 <div className="flex flex-col items-center">
                    <span className="text-xs text-blue-400 font-bold">Vin</span>
                    <span className="text-lg font-black animate-pulse">12V-15V</span>
                 </div>
                 <div className="w-8 h-[2px] bg-slate-500"></div>
                 <div className="border border-slate-500 px-2 py-1 text-xs text-yellow-400">R</div>
                 <div className="w-8 h-[2px] bg-slate-500"></div>
                 <div className="flex flex-col items-center relative">
                    <div className="w-[2px] h-8 bg-slate-500"></div>
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center text-[10px] font-bold text-purple-300 bg-purple-900/20">Z</div>
                    <div className="w-[2px] h-8 bg-slate-500"></div>
                 </div>
                 <div className="w-8 h-[2px] bg-slate-500"></div>
                 <div className="flex flex-col items-center">
                    <span className="text-xs text-green-400 font-bold">Vout</span>
                    <span className="text-lg font-black text-white">9V</span>
                 </div>
              </div>
              <div className="w-full h-[2px] bg-slate-500 absolute bottom-4 left-0"></div>
           </div>
           <p className="mt-4 text-xs text-slate-400 text-center">Zener holds voltage steady by adjusting its current</p>
        </div>
      );

    case 'zener-line-reg-anim':
       return (
         <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <div className="flex items-center gap-4">
               <div className="flex flex-col items-center">
                  <span className="text-2xl font-black text-blue-400">&uarr;</span>
                  <span className="text-[10px] text-slate-400">Vin</span>
               </div>
               <span className="text-xl text-white">&rarr;</span>
               <div className="p-2 border border-yellow-500/50 rounded bg-yellow-900/10 text-center">
                  <div className="text-[10px] text-yellow-200">Current in R</div>
                  <div className="text-lg font-bold text-white">&uarr;</div>
               </div>
               <span className="text-xl text-white">&rarr;</span>
               <div className="p-2 border border-purple-500/50 rounded bg-purple-900/10 text-center">
                  <div className="text-[10px] text-purple-200">Zener Current</div>
                  <div className="text-lg font-bold text-white">&uarr;</div>
               </div>
               <span className="text-xl text-white">&rarr;</span>
               <div className="p-2 border border-green-500/50 rounded bg-green-900/10 text-center">
                  <div className="text-[10px] text-green-200">Load Voltage</div>
                  <div className="text-lg font-bold text-white">=</div>
               </div>
            </div>
         </div>
       );

    default: return null;
  }
};