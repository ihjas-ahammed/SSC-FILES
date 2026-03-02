import React from 'react';

export const renderModule1VIGraph = (id: string) => {
  switch (id) {
    case 'vi-curve-interactive':
      return (
        <div className="relative w-full h-full p-4 flex items-center justify-center">
            {/* Axes */}
            <div className="absolute w-[90%] h-[1px] bg-slate-500 top-1/2"></div>
            <div className="absolute h-[90%] w-[1px] bg-slate-500 left-1/2"></div>
            
            {/* Forward Curve */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Forward Bias (Quadrant 1) */}
                <path d="M 50% 50% Q 60% 50% 70% 20%" stroke="#4ade80" strokeWidth="3" fill="none" />
                {/* Reverse Bias (Quadrant 3) */}
                <path d="M 50% 50% L 20% 50% L 20% 80%" stroke="#f87171" strokeWidth="3" fill="none" />
                
                <text x="60%" y="45%" fill="#4ade80" fontSize="10">Forward</text>
                <text x="30%" y="60%" fill="#f87171" fontSize="10">Reverse</text>
            </svg>
        </div>
      );

    case 'knee-voltage-comparison':
      return (
        <div className="relative w-full h-full p-4 flex items-end pb-8 pl-8">
            <div className="absolute bottom-8 left-8 w-[1px] h-[80%] bg-slate-400"></div>
            <div className="absolute bottom-8 left-8 w-[90%] h-[1px] bg-slate-400"></div>
            
            {/* Ge Curve */}
            <svg className="absolute inset-0 w-full h-full overflow-visible">
                <path d="M 10% 80% Q 25% 80% 25% 20%" stroke="#facc15" strokeWidth="2" fill="none" />
                <text x="25%" y="15%" fill="#facc15" fontSize="10">Ge (0.3V)</text>
                
                {/* Si Curve */}
                <path d="M 10% 80% Q 50% 80% 50% 20%" stroke="#60a5fa" strokeWidth="2" fill="none" />
                <text x="50%" y="15%" fill="#60a5fa" fontSize="10">Si (0.7V)</text>
            </svg>
            <span className="absolute bottom-2 right-1/2 text-xs text-slate-500">Voltage (V)</span>
            <span className="absolute top-1/2 left-2 -rotate-90 text-xs text-slate-500">Current (mA)</span>
        </div>
      );
    
    case 'breakdown-avalanche':
      return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex gap-4">
                {/* Electron hits atom */}
                <div className="relative w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full absolute -left-4 animate-bounce"></div>
                    <span className="text-[8px] text-slate-400">Atom</span>
                </div>
                <div className="text-xl text-white">&rarr;</div>
                {/* 2 Electrons leave */}
                <div className="relative w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center">
                     <span className="text-[8px] text-slate-400">Ion+</span>
                     <div className="w-2 h-2 bg-blue-400 rounded-full absolute -right-2 top-0 animate-ping"></div>
                     <div className="w-2 h-2 bg-blue-400 rounded-full absolute -right-2 bottom-0 animate-ping"></div>
                </div>
            </div>
            <p className="mt-4 text-xs text-red-400">Impact Ionization (Avalanche)</p>
        </div>
      );

    default: return null;
  }
};