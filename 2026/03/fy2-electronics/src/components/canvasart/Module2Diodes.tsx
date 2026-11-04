import React from 'react';

export const renderModule2Diodes = (id: string) => {
  switch (id) {
    case 'rectifier-block-diagram':
      return (
        <div className="flex items-center justify-center w-full h-full gap-4 p-4">
            <div className="flex flex-col items-center">
                <svg width="40" height="40" viewBox="0 0 100 100"><path d="M 10 50 Q 30 10 50 50 T 90 50" stroke="#60a5fa" strokeWidth="5" fill="none"/></svg>
                <span className="text-[10px] text-slate-400 mt-1">AC IN</span>
            </div>
            <div className="text-lg text-white">&rarr;</div>
            <div className="px-4 py-2 bg-blue-900/40 border border-blue-500 rounded text-xs font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                DIODE RECTIFIER
            </div>
            <div className="text-lg text-white">&rarr;</div>
            <div className="flex flex-col items-center">
                <svg width="40" height="40" viewBox="0 0 100 100"><path d="M 10 50 Q 30 10 50 50 Q 70 10 90 50" stroke="#facc15" strokeWidth="5" fill="none"/></svg>
                <span className="text-[10px] text-slate-400 mt-1">DC OUT (Pulsating)</span>
            </div>
        </div>
      );

    case 'hw-waveform':
      return (
        <div className="relative w-full h-full p-4 flex flex-col items-center justify-center gap-6">
            <div className="relative w-full h-12 border-b border-slate-500 flex items-center">
                <span className="absolute -left-2 top-0 text-[8px] text-blue-400">Input AC</span>
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0 50 Q 25 -50 50 50 T 100 50" stroke="#60a5fa" strokeWidth="2" fill="none"/>
                </svg>
            </div>
            <div className="relative w-full h-12 border-b border-slate-500 flex items-center">
                <span className="absolute -left-2 top-0 text-[8px] text-yellow-400">Output DC</span>
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    {/* Positive half passes, negative half is flat */}
                    <path d="M 0 50 Q 25 -50 50 50 L 100 50" stroke="#facc15" strokeWidth="3" fill="none"/>
                </svg>
            </div>
        </div>
      );

    case 'fw-waveform':
      return (
        <div className="relative w-full h-full p-4 flex flex-col items-center justify-center gap-6">
            <div className="relative w-full h-12 border-b border-slate-500 flex items-center">
                <span className="absolute -left-2 top-0 text-[8px] text-blue-400">Input AC</span>
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0 50 Q 25 -50 50 50 T 100 50" stroke="#60a5fa" strokeWidth="2" fill="none"/>
                </svg>
            </div>
            <div className="relative w-full h-12 border-b border-slate-500 flex items-center">
                <span className="absolute -left-2 top-0 text-[8px] text-yellow-400">Output DC</span>
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    {/* Both halves pass (inverted negative) */}
                    <path d="M 0 50 Q 25 -50 50 50 Q 75 -50 100 50" stroke="#facc15" strokeWidth="3" fill="none"/>
                </svg>
            </div>
        </div>
      );

    case 'bridge-path-pos':
        return (
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="w-48 h-32 relative border border-slate-700 bg-slate-900/50 flex items-center justify-center rotate-45 transform scale-75">
                    {/* Nodes */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                    
                    {/* Active Diodes (D1 and D3) - Top Right and Bottom Left */}
                    <div className="absolute top-1/4 right-1/4 w-8 h-1 bg-yellow-400 shadow-[0_0_10px_yellow]"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-8 h-1 bg-yellow-400 shadow-[0_0_10px_yellow]"></div>
                    
                    {/* Inactive Diodes */}
                    <div className="absolute top-1/4 left-1/4 w-8 h-1 bg-slate-600"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-8 h-1 bg-slate-600"></div>
                </div>
                <p className="mt-2 text-[10px] text-yellow-400 font-bold">Positive Half Cycle: D1 & D3 ON</p>
            </div>
        );

    default: return null;
  }
};