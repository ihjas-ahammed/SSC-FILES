import React from 'react';

export const renderModule1SpecialDiodes = (id: string) => {
  switch (id) {
    case 'led-recombination':
        return (
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="relative w-40 h-24 border-b-2 border-slate-500 flex justify-center items-end">
                    {/* Conduction Band */}
                    <div className="absolute top-0 w-full h-1 bg-slate-600"></div>
                    <span className="absolute top-2 right-0 text-[8px] text-slate-400">Conduction Band</span>
                    
                    {/* Electron drops */}
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce absolute top-0"></div>
                    
                    {/* Photon Emission */}
                    <div className="absolute top-10 right-10">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="yellow" strokeWidth="2">
                            <path d="M12 12 L 20 4 M 16 4 L 20 4 L 20 8" />
                        </svg>
                    </div>
                </div>
                <div className="w-40 h-8 bg-slate-800 flex items-center justify-center">
                    <span className="text-[8px] text-slate-400">Valence Band (Holes)</span>
                </div>
                <p className="text-[10px] mt-2 text-yellow-400">Energy released as Light (Photon)</p>
            </div>
        );

    case 'photodiode-dark-current':
        return (
            <div className="flex items-center justify-center w-full h-full relative">
                 <div className="w-32 h-20 bg-gray-900 border border-gray-700 flex items-center justify-center relative overflow-hidden">
                     {/* Light arrows coming in */}
                     <svg className="absolute top-0 left-0 w-full h-full">
                        <path d="M 10 10 L 30 30" stroke="yellow" strokeWidth="2" />
                        <path d="M 20 5 L 40 25" stroke="yellow" strokeWidth="2" />
                     </svg>
                     
                     {/* Bond breaking */}
                     <div className="w-4 h-4 rounded-full border border-white/20 animate-pulse bg-blue-500/20"></div>
                 </div>
                 <div className="absolute bottom-2 text-[10px] text-slate-400 text-center">
                    Photon breaks bond &rarr; <br/>Reverse Current Increases
                 </div>
            </div>
        );

    default: return null;
  }
};