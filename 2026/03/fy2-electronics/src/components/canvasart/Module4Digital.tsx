import React from 'react';

export const renderModule4Digital = (id: string) => {
  switch (id) {
    case 'analog-vs-digital-waves':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4 gap-4">
            <div className="flex items-center gap-4 w-full h-full">
                {/* Analog */}
                <div className="flex-1 flex flex-col items-center h-full justify-center border border-blue-500/30 rounded p-2 bg-blue-900/10">
                    <span className="text-[10px] text-blue-400 mb-1 font-bold">Analog (Continuous)</span>
                    <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
                        <line x1="0" y1="30" x2="100" y2="30" stroke="gray" strokeWidth="0.5" />
                        <line x1="50" y1="0" x2="50" y2="60" stroke="gray" strokeWidth="0.5" />
                        <path d="M 0 30 Q 25 0 50 30 T 100 30" stroke="#60a5fa" fill="none" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
                        <text x="5" y="10" fill="#94a3b8" fontSize="6">Infinite Values</text>
                    </svg>
                </div>
                
                {/* Digital */}
                <div className="flex-1 flex flex-col items-center h-full justify-center border border-green-500/30 rounded p-2 bg-green-900/10">
                    <span className="text-[10px] text-green-400 mb-1 font-bold">Digital (Discrete)</span>
                    <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
                        <line x1="0" y1="50" x2="100" y2="50" stroke="gray" strokeWidth="0.5" />
                        <line x1="50" y1="0" x2="50" y2="60" stroke="gray" strokeWidth="0.5" />
                        {/* Square wave */}
                        <path d="M 0 50 L 25 50 L 25 10 L 50 10 L 50 50 L 75 50 L 75 10 L 100 10" stroke="#4ade80" fill="none" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
                        <text x="28" y="8" fill="#4ade80" fontSize="8">+5V (1)</text>
                        <text x="55" y="45" fill="#f87171" fontSize="8">0V (0)</text>
                    </svg>
                </div>
            </div>
        </div>
      );

    case 'digital-states-visual':
        return (
            <div className="flex items-center justify-center w-full h-full gap-8">
                {/* OFF State */}
                <div className="flex flex-col items-center opacity-50">
                    <div className="w-12 h-12 rounded-full border-4 border-slate-600 bg-slate-800 flex items-center justify-center shadow-inner">
                        <span className="text-xl font-bold text-slate-500">0</span>
                    </div>
                    <span className="mt-2 text-xs font-bold text-slate-500">LOW (0V)</span>
                    <span className="text-[10px] text-slate-600">Cut-off</span>
                </div>

                {/* Arrow */}
                <div className="h-1 w-10 bg-slate-600 rounded-full"></div>

                {/* ON State */}
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-4 border-green-500 bg-green-900 flex items-center justify-center shadow-[0_0_20px_rgba(74,222,128,0.5)]">
                        <span className="text-xl font-bold text-white">1</span>
                    </div>
                    <span className="mt-2 text-xs font-bold text-green-400">HIGH (+5V)</span>
                    <span className="text-[10px] text-green-200">Saturation</span>
                </div>
            </div>
        );

    default: return null;
  }
};