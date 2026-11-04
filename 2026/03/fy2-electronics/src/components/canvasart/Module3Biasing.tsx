import React from 'react';

export const renderModule3Biasing = (id: string) => {
  switch (id) {
    case 'faithful-vs-clipped':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-2">
            <div className="flex items-center gap-4 w-full">
                {/* Faithful */}
                <div className="flex-1 flex flex-col items-center border border-green-500/30 rounded p-1 bg-green-900/10">
                    <span className="text-[8px] text-green-400 mb-1 font-bold">Faithful</span>
                    <svg viewBox="0 0 60 40" className="w-full h-12">
                        <line x1="0" y1="20" x2="60" y2="20" stroke="gray" strokeWidth="0.5" />
                        <path d="M 0 20 Q 15 0 30 20 T 60 20" stroke="#4ade80" fill="none" strokeWidth="1.5"/>
                    </svg>
                </div>
                
                {/* Clipped */}
                <div className="flex-1 flex flex-col items-center border border-red-500/30 rounded p-1 bg-red-900/10">
                    <span className="text-[8px] text-red-400 mb-1 font-bold">Unfaithful (Cut-off)</span>
                    <svg viewBox="0 0 60 40" className="w-full h-12">
                        <line x1="0" y1="20" x2="60" y2="20" stroke="gray" strokeWidth="0.5" />
                        {/* Clipped negative half */}
                        <path d="M 0 20 Q 15 0 30 20 L 60 20" stroke="#f87171" fill="none" strokeWidth="1.5"/>
                    </svg>
                </div>
            </div>
            <p className="text-[10px] text-slate-400 text-center">Bias shifts the signal into the active region.</p>
        </div>
      );

    case 'active-region-plot':
        return (
            <div className="relative w-full h-full p-4 flex items-end">
                <div className="absolute left-8 bottom-8 w-[1px] h-[70%] bg-slate-500"></div>
                <div className="absolute left-8 bottom-8 w-[80%] h-[1px] bg-slate-500"></div>
                
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    {/* Saturation Line */}
                    <line x1="40" y1="180" x2="60" y2="50" stroke="yellow" strokeWidth="1" strokeDasharray="2"/>
                    <text x="35" y="40" fill="yellow" fontSize="8" transform="rotate(-80 35,40)">Saturation</text>

                    {/* Cutoff Line */}
                    <line x1="40" y1="180" x2="250" y2="180" stroke="red" strokeWidth="1" />
                    <text x="200" y="190" fill="red" fontSize="8">Cut-off ($I_B=0$)</text>

                    {/* Active Region */}
                    <rect x="60" y="50" width="180" height="130" fill="cyan" fillOpacity="0.1" />
                    <text x="120" y="120" fill="cyan" fontSize="10" fontWeight="bold">Active Region</text>
                    
                    {/* Q Point */}
                    <circle cx="150" cy="115" r="3" fill="white" />
                    <text x="155" y="115" fill="white" fontSize="8">Q-Point</text>
                </svg>
            </div>
        );

    case 'base-resistor-circuit':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <div className="relative w-48 h-32 border-2 border-slate-700 rounded-xl bg-slate-900/50 flex items-center justify-center">
                {/* VCC Top Line */}
                <div className="absolute top-2 w-32 h-1 bg-red-500"></div>
                <span className="absolute top-0 right-4 text-[10px] text-red-400">+Vcc</span>
                
                {/* Transistor */}
                <div className="w-8 h-8 rounded-full border-2 border-slate-400 absolute top-12 left-20 flex items-center justify-center text-[8px]">T</div>
                
                {/* Rc path */}
                <div className="absolute top-3 right-16 w-1 h-10 bg-slate-500"></div>
                <div className="absolute top-6 right-12 text-[10px] text-yellow-400 border border-yellow-400 px-1 bg-black">Rc</div>
                
                {/* Rb path */}
                <div className="absolute top-3 left-8 w-1 h-14 bg-slate-500"></div>
                <div className="absolute top-16 left-8 w-12 h-1 bg-slate-500"></div>
                <div className="absolute top-6 left-2 text-[10px] text-blue-400 border border-blue-400 px-1 bg-black">Rb</div>
                
                {/* Ground */}
                <div className="absolute bottom-4 right-16 w-1 h-6 bg-slate-500"></div>
                <div className="absolute bottom-4 right-14 w-5 h-1 bg-slate-400"></div>
            </div>
            <p className="text-[10px] mt-2 text-slate-400">Base Resistor Method</p>
        </div>
      );

    case 'voltage-divider-schematic':
        return (
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
              <div className="relative w-48 h-32 border-2 border-slate-700 rounded-xl bg-slate-900/50 flex items-center justify-center">
                  {/* VCC */}
                  <div className="absolute top-2 w-32 h-1 bg-red-500"></div>
                  
                  {/* Transistor */}
                  <div className="w-8 h-8 rounded-full border-2 border-slate-400 absolute top-12 left-24 flex items-center justify-center text-[8px]">T</div>
                  
                  {/* R1 & R2 voltage divider */}
                  <div className="absolute top-3 left-12 w-1 h-24 bg-slate-500"></div>
                  <div className="absolute top-6 left-6 text-[10px] text-blue-400 border border-blue-400 px-1 bg-black">R1</div>
                  <div className="absolute bottom-6 left-6 text-[10px] text-blue-400 border border-blue-400 px-1 bg-black">R2</div>
                  
                  {/* Base connection */}
                  <div className="absolute top-16 left-12 w-12 h-1 bg-slate-500"></div>
                  
                  {/* Rc */}
                  <div className="absolute top-3 right-12 w-1 h-10 bg-slate-500"></div>
                  <div className="absolute top-6 right-6 text-[10px] text-yellow-400 border border-yellow-400 px-1 bg-black">Rc</div>
                  
                  {/* Re */}
                  <div className="absolute bottom-4 right-12 w-1 h-6 bg-slate-500"></div>
                  <div className="absolute bottom-6 right-6 text-[10px] text-green-400 border border-green-400 px-1 bg-black">Re</div>
              </div>
              <p className="text-[10px] mt-2 text-slate-400">Voltage Divider Bias</p>
          </div>
        );

    case 'stabilization-feedback':
       return (
         <div className="flex flex-col items-center justify-center w-full h-full p-4 gap-2">
            <div className="flex items-center gap-2">
               <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-red-400">&uarr;</span>
                  <span className="text-[10px] text-slate-400">Temp</span>
               </div>
               <span className="text-white">&rarr;</span>
               <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-yellow-400">&uarr;</span>
                  <span className="text-[10px] text-slate-400">$I_C$</span>
               </div>
               <span className="text-white">&rarr;</span>
               <div className="border border-green-500 p-2 rounded bg-green-900/20 text-center">
                  <div className="text-[10px] text-green-300">$V_E = I_E R_E$</div>
                  <div className="text-lg font-bold text-white">&uarr;</div>
               </div>
            </div>
            <div className="text-xl text-white">&darr;</div>
            <div className="flex items-center gap-2">
               <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-green-400">&darr;</span>
                  <span className="text-[10px] text-slate-400">$I_C$ (Stabilized)</span>
               </div>
               <span className="text-white">&larr;</span>
               <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-blue-400">&darr;</span>
                  <span className="text-[10px] text-slate-400">$I_B$</span>
               </div>
               <span className="text-white">&larr;</span>
               <div className="border border-blue-500 p-2 rounded bg-blue-900/20 text-center">
                  <div className="text-[10px] text-blue-300">$V_{BE} = V_B - V_E$</div>
                  <div className="text-lg font-bold text-white">&darr;</div>
               </div>
            </div>
         </div>
       );

    default: return null;
  }
};