import React from 'react';

export const renderModule2Rectifiers = (id: string) => {
  switch (id) {
    case 'rectifier-block-diagram':
      return (
        <div className="flex items-center justify-center w-full h-full gap-2 p-2">
            {/* AC Input */}
            <div className="flex flex-col items-center">
                <svg width="40" height="30" viewBox="0 0 40 30">
                    <path d="M 0 15 Q 10 5 20 15 Q 30 25 40 15" stroke="cyan" fill="none" strokeWidth="2" />
                </svg>
                <span className="text-[8px] text-slate-400">AC</span>
            </div>
            
            <div className="text-white">&rarr;</div>
            
            {/* Rectifier Box */}
            <div className="w-24 h-16 bg-slate-800 border border-slate-600 rounded flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-white transform rotate-90"></div>
                <div className="w-1 h-4 bg-white ml-1"></div>
            </div>

            <div className="text-white">&rarr;</div>

            {/* Pulsating DC Output */}
            <div className="flex flex-col items-center">
                <svg width="40" height="30" viewBox="0 0 40 30">
                    <path d="M 0 25 Q 10 5 20 25 Q 30 5 40 25" stroke="#facc15" fill="none" strokeWidth="2" />
                </svg>
                <span className="text-[8px] text-slate-400">Pulsating DC</span>
            </div>
        </div>
      );

    case 'half-wave-waveform':
      return (
        <div className="relative w-full h-full p-4 flex flex-col justify-center">
             <div className="absolute w-full h-[1px] bg-slate-600 top-1/2"></div>
             {/* Input (Faint) */}
             <svg className="absolute inset-0 w-full h-full opacity-30">
                 <path d="M 0 50% Q 25% 10% 50% 50% Q 75% 90% 100% 50%" stroke="cyan" fill="none" strokeWidth="2" strokeDasharray="4"/>
             </svg>
             {/* Output (Solid) */}
             <svg className="absolute inset-0 w-full h-full">
                 <path d="M 0 50% Q 25% 10% 50% 50% L 100% 50%" stroke="#facc15" fill="none" strokeWidth="3" />
             </svg>
             <div className="absolute bottom-2 right-2 text-[10px] text-yellow-400">Output (Half)</div>
        </div>
      );

    case 'full-wave-waveform':
      return (
        <div className="relative w-full h-full p-4 flex flex-col justify-center">
             <div className="absolute w-full h-[1px] bg-slate-600 top-1/2"></div>
             {/* Input (Faint) */}
             <svg className="absolute inset-0 w-full h-full opacity-30">
                 <path d="M 0 50% Q 25% 10% 50% 50% Q 75% 90% 100% 50%" stroke="cyan" fill="none" strokeWidth="2" strokeDasharray="4"/>
             </svg>
             {/* Output (Solid) */}
             <svg className="absolute inset-0 w-full h-full">
                 <path d="M 0 50% Q 25% 10% 50% 50% Q 75% 10% 100% 50%" stroke="#facc15" fill="none" strokeWidth="3" />
             </svg>
             <div className="absolute bottom-2 right-2 text-[10px] text-yellow-400">Output (Full)</div>
        </div>
      );

    case 'bridge-rectifier-flow':
        return (
            <div className="flex items-center justify-center w-full h-full relative">
                {/* Simplified Bridge Diamond */}
                <div className="w-24 h-24 rotate-45 border-2 border-slate-600 relative flex items-center justify-center">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-slate-400 -translate-x-1 -translate-y-1"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-slate-400 translate-x-1 -translate-y-1"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-slate-400 -translate-x-1 translate-y-1"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-slate-400 translate-x-1 translate-y-1"></div>
                    
                    {/* Active Path Animation */}
                    <div className="absolute inset-0 border-t-2 border-r-2 border-green-400 animate-pulse"></div>
                    <div className="absolute inset-0 border-b-2 border-l-2 border-red-500/30"></div>
                </div>
                <div className="absolute top-2 text-[10px] text-green-400">D1, D3 Conducting</div>
            </div>
        );

    default: return null;
  }
};