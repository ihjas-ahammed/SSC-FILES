import React from 'react';

export const renderModule4Art = (id: string) => {
  switch (id) {
    // --- GOC ---
    case 'goc-hybridisation':
      return (
        <div className="flex items-center justify-center h-full w-full p-2 gap-2 text-center">
           <div className="bg-white/10 p-2 rounded">
              <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-1"></div>
              <div className="text-[8px]">sp3 (109.5°)</div>
           </div>
           <div className="bg-white/10 p-2 rounded">
              <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-1 relative"><div className="absolute inset-0 border-2 border-white rounded-full"></div></div>
              <div className="text-[8px]">sp2 (120°)</div>
           </div>
           <div className="bg-white/10 p-2 rounded">
              <div className="w-8 h-4 bg-red-500 rounded-full mx-auto mb-1 mt-2"></div>
              <div className="text-[8px]">sp (180°)</div>
           </div>
        </div>
      );
    case 'goc-isomers':
      return (
        <div className="flex items-center justify-center h-full w-full">
           <div className="flex gap-4">
              <div className="flex items-center"><div className="w-4 h-4 bg-white rounded-full"></div><div className="w-8 h-1 bg-white"></div><div className="w-4 h-4 bg-white rounded-full"></div></div>
              <div className="flex flex-col items-center"><div className="w-4 h-4 bg-white rounded-full"></div><div className="h-4 w-1 bg-white"></div><div className="w-4 h-4 bg-white rounded-full"></div></div>
           </div>
           <p className="absolute bottom-2 text-[10px] text-slate-400">Chain Isomers</p>
        </div>
      );
    case 'goc-inductive-effect':
      return (
        <div className="flex items-center justify-center h-full w-full">
           <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-gray-500 text-[8px] flex items-center justify-center text-black">C</div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-gray-500 to-green-500"></div>
              <div className="w-6 h-6 rounded-full bg-gray-500 text-[8px] flex items-center justify-center text-black">C</div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-gray-500 to-green-500"></div>
              <div className="w-6 h-6 rounded-full bg-green-500 text-[8px] flex items-center justify-center text-white">Cl</div>
           </div>
           <div className="absolute top-1/3 w-full text-center text-[10px] text-green-300">δ+ ... δ-</div>
        </div>
      );
    case 'goc-resonance':
      return (
        <div className="flex items-center justify-center h-full w-full">
           <div className="relative w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
              <div className="absolute w-10 h-10 border border-dashed border-white rounded-full animate-spin-slow"></div>
           </div>
           <p className="absolute bottom-2 text-[10px] text-slate-400">Delocalization</p>
        </div>
      );
    case 'goc-lassaigne':
      return (
        <div className="flex justify-around items-center h-full w-full p-2">
           <div className="w-8 h-8 bg-blue-700 rounded-full border-2 border-white shadow-[0_0_10px_blue] flex items-center justify-center text-[8px] font-bold text-white">N</div>
           <div className="w-8 h-8 bg-purple-700 rounded-full border-2 border-white shadow-[0_0_10px_purple] flex items-center justify-center text-[8px] font-bold text-white">S</div>
           <div className="w-8 h-8 bg-red-700 rounded-full border-2 border-white shadow-[0_0_10px_red] flex items-center justify-center text-[8px] font-bold text-white">N+S</div>
        </div>
      );
    case 'goc-chromatography':
      return (
        <div className="flex items-center justify-center h-full w-full p-2">
           <div className="w-16 h-24 bg-white rounded relative overflow-hidden">
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full opacity-20"></div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
              <div className="absolute top-2 w-full border-b border-gray-300"></div>
           </div>
           <div className="ml-4 text-[10px] text-slate-300">
              <p>Rf = dist/solvent</p>
           </div>
        </div>
      );
    case 'goc-purification':
       return (
          <div className="flex items-center justify-center h-full w-full p-2">
             <div className="w-8 h-12 border-2 border-white/50 rounded-b-lg relative">
                <div className="absolute bottom-0 w-full h-1/2 bg-blue-500/30"></div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-4 bg-white/50"></div>
             </div>
             <div className="text-[8px] ml-2 text-slate-300">Distillation</div>
          </div>
       );

    // --- HYDROCARBONS ---
    case 'hydrocarbon-conformations':
      return (
        <div className="flex justify-around items-center h-full w-full p-4">
           <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 flex items-center justify-center">
                 <div className="absolute w-full h-full border border-white/50 rounded-full"></div>
                 <div className="absolute w-1 h-full bg-white/50"></div>
                 <div className="absolute w-full h-1 bg-white/50 rotate-60"></div>
                 <div className="absolute w-full h-1 bg-white/50 -rotate-60"></div>
                 <div className="absolute w-3 h-3 bg-red-500 rounded-full z-10"></div>
              </div>
              <span className="text-[10px] mt-2">Staggered (Stable)</span>
           </div>
           <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 flex items-center justify-center">
                 <div className="absolute w-full h-full border border-white/50 rounded-full"></div>
                 <div className="absolute w-1 h-full bg-white/50"></div>
                 <div className="absolute w-full h-1 bg-white/50 rotate-60"></div>
                 <div className="absolute w-full h-1 bg-white/50 -rotate-60"></div>
                 <div className="absolute w-3 h-3 bg-red-500 rounded-full z-10"></div>
                 {/* Eclipsed shadow effect */}
                 <div className="absolute w-full h-full border-4 border-red-500/30 rounded-full animate-pulse"></div>
              </div>
              <span className="text-[10px] mt-2">Eclipsed (Unstable)</span>
           </div>
        </div>
      );
    case 'hydrocarbon-isomerism':
      return (
        <div className="flex justify-around items-center h-full w-full p-2">
           <div className="flex flex-col items-center">
              <div className="flex flex-col gap-1 items-center">
                 <div className="flex gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                 </div>
                 <div className="w-12 h-1 bg-blue-500"></div>
                 <div className="flex gap-4">
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                 </div>
              </div>
              <span className="text-[10px] mt-2">Cis (Same Side)</span>
           </div>
           <div className="flex flex-col items-center">
              <div className="flex flex-col gap-1 items-center">
                 <div className="flex gap-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                 </div>
                 <div className="w-12 h-1 bg-blue-500"></div>
                 <div className="flex gap-4">
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                 </div>
              </div>
              <span className="text-[10px] mt-2">Trans (Opposite)</span>
           </div>
        </div>
      );
    case 'hydrocarbon-mechanism-markovnikov':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="flex items-center gap-2 mb-2">
              <div className="bg-white/10 px-2 py-1 rounded border border-white/20 text-xs">Propene</div>
              <span className="text-lg">+ H⁺</span>
           </div>
           <div className="flex gap-4 w-full justify-center">
              <div className="flex flex-col items-center p-2 bg-green-900/30 rounded border border-green-500/50">
                 <span className="text-lg font-bold text-green-400">2°</span>
                 <span className="text-[8px] text-slate-300">Carbocation (Stable)</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-red-900/30 rounded border border-red-500/50 opacity-50">
                 <span className="text-lg font-bold text-red-400">1°</span>
                 <span className="text-[8px] text-slate-300">Carbocation (Unstable)</span>
              </div>
           </div>
           <p className="text-[10px] mt-2 text-slate-400">Major Product via 2° Cation</p>
        </div>
      );
    case 'hydrocarbon-benzene-structure':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Hexagon */}
              <div className="absolute w-20 h-20 border-2 border-white transform rotate-90" 
                   style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
              </div>
              {/* Delocalized Ring */}
              <div className="absolute w-12 h-12 border-2 border-dashed border-yellow-400 rounded-full animate-spin-slow"></div>
              {/* Pi clouds */}
              <div className="absolute w-16 h-16 bg-blue-500/20 rounded-full blur-md"></div>
           </div>
           <p className="absolute bottom-2 text-[10px] text-slate-400">Delocalized π-electrons</p>
        </div>
      );
    case 'hydrocarbon-mechanism-eas':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="flex items-center gap-1 mb-2">
              <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-[10px]">Ar-H</div>
              <span>+</span>
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold">E⁺</div>
           </div>
           <div className="w-0.5 h-4 bg-white/30 mb-2"></div>
           <div className="w-10 h-10 border border-dashed border-white rounded-full flex items-center justify-center relative">
              <div className="absolute top-0 right-0 text-[8px]">+</div>
              <span className="text-[8px]">Sigma</span>
           </div>
           <div className="w-0.5 h-4 bg-white/30 mt-2 mb-2"></div>
           <div className="flex items-center gap-1">
              <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-[10px]">Ar-E</div>
              <span>+</span>
              <span className="text-[10px]">H⁺</span>
           </div>
        </div>
      );
    default:
      return null;
  }
};