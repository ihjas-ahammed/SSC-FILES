import React from 'react';

export const renderModule6CarbonylsArt = (id: string) => {
  switch (id) {
    case 'carbonyl-structure':
      return (
        <div className="flex items-center justify-center h-full w-full">
           <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 flex items-center justify-center">
                 <div className="text-2xl font-bold text-gray-400 z-20 bg-black/50 px-2 rounded">C</div>
                 <div className="absolute w-12 h-2 bg-gradient-to-r from-gray-500 to-white -rotate-30 translate-x-8 -translate-y-6"></div>
                 <div className="absolute w-12 h-2 bg-gradient-to-r from-gray-500 to-white rotate-30 translate-x-8 translate-y-6"></div>
                 <div className="absolute w-16 h-4 bg-gradient-to-r from-gray-500 to-red-500 -translate-x-10"></div>
                 <div className="absolute -translate-x-20 text-2xl font-bold text-red-500 bg-black/50 px-2 rounded">O</div>
                 {/* Pi bond representation */}
                 <div className="absolute w-16 h-8 border-2 border-dashed border-red-400 rounded-full -translate-x-10"></div>
              </div>
              <div className="flex gap-16 mt-2 text-xs font-bold tracking-widest">
                 <span className="text-red-400">Nucleophile (δ-)</span>
                 <span className="text-gray-300">Electrophile (δ+)</span>
              </div>
           </div>
        </div>
      );

    case 'nu-addition-mech':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full gap-4 p-2">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white">Nu⁻</div>
              <span className="text-xl">→</span>
              <div className="px-2 py-1 bg-white/10 rounded border border-white/20 text-sm">sp² C=O (Planar)</div>
           </div>
           <div className="w-1 h-6 bg-white/30"></div>
           <div className="px-4 py-2 bg-green-900/40 rounded-xl border border-green-500/50 text-center">
              <div className="text-sm font-bold text-green-300">Tetrahedral Intermediate</div>
              <div className="text-[10px] text-slate-400 mt-1">sp³ Carbon, O⁻</div>
           </div>
           <div className="w-1 h-6 bg-white/30"></div>
           <div className="flex items-center gap-2">
              <span className="text-xl text-yellow-400">+ H⁺</span>
              <span className="text-xl">→</span>
              <div className="px-3 py-1 bg-white/10 rounded border border-white/20 text-sm font-bold">Addition Product</div>
           </div>
        </div>
      );

    case 'aldol-mech':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2 gap-3 text-xs">
           <div className="flex items-center gap-2">
              <div className="bg-slate-800 px-2 py-1 rounded">R-CH₂-CHO</div>
              <span className="text-red-400">+ OH⁻</span>
              <span>→</span>
              <div className="bg-blue-900/50 border border-blue-500 px-2 py-1 rounded">R-CH⁻-CHO</div>
           </div>
           <span className="text-[8px] text-slate-400 -mt-2">Enolate Ion (Resonance Stabilized)</span>
           
           <div className="text-lg">↓</div>
           
           <div className="flex items-center gap-2">
              <div className="bg-blue-900/50 border border-blue-500 px-2 py-1 rounded">R-CH⁻-CHO</div>
              <span>attacks</span>
              <div className="bg-slate-800 px-2 py-1 rounded">R-CH₂-CHO</div>
           </div>
           
           <div className="text-lg">↓ H₂O</div>
           
           <div className="bg-green-900/50 border border-green-500 px-3 py-2 rounded text-center">
              <div className="font-bold text-green-300">Aldol (β-hydroxy aldehyde)</div>
              <span className="text-[8px] text-slate-400 block mt-1">Heating loses H2O -{">"} α,β-unsaturated</span>
           </div>
        </div>
      );

    case 'clemmensen-wolff':
      return (
        <div className="flex items-center justify-center h-full w-full p-2 gap-4">
           <div className="flex flex-col items-center bg-white/5 p-3 rounded-xl border border-white/10 w-1/2">
              <span className="font-bold text-blue-400 mb-2">Clemmensen</span>
              <div className="text-xs text-center text-slate-300 mb-2">Zn(Hg) + conc. HCl</div>
              <div className="flex items-center gap-1 text-sm font-black">
                 <span>C=O</span> <span>→</span> <span className="text-green-400">-CH₂-</span>
              </div>
              <span className="text-[8px] mt-2 text-slate-500">(Acidic medium)</span>
           </div>
           <div className="flex flex-col items-center bg-white/5 p-3 rounded-xl border border-white/10 w-1/2">
              <span className="font-bold text-pink-400 mb-2">Wolff-Kishner</span>
              <div className="text-xs text-center text-slate-300 mb-2">NH₂NH₂ then KOH/Δ</div>
              <div className="flex items-center gap-1 text-sm font-black">
                 <span>C=O</span> <span>→</span> <span className="text-green-400">-CH₂-</span>
              </div>
              <span className="text-[8px] mt-2 text-slate-500">(Basic medium)</span>
           </div>
        </div>
      );

    case 'acidity-ewg':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-4 gap-6">
           <div className="flex items-center w-full justify-between px-4">
              <div className="flex flex-col items-center">
                 <div className="flex items-center gap-1">
                    <span className="text-red-400 font-bold text-sm">F←</span>
                    <span className="bg-slate-700 px-2 py-1 rounded text-xs">-CH₂-COO⁻</span>
                 </div>
                 <span className="text-[8px] mt-1 text-green-400">Charge Dispersed (Stable)</span>
              </div>
              <div className="text-xl text-green-500 font-bold">VS</div>
              <div className="flex flex-col items-center">
                 <div className="flex items-center gap-1">
                    <span className="text-blue-400 font-bold text-sm">CH₃→</span>
                    <span className="bg-slate-700 px-2 py-1 rounded text-xs">-CH₂-COO⁻</span>
                 </div>
                 <span className="text-[8px] mt-1 text-red-400">Charge Intensified (Unstable)</span>
              </div>
           </div>
           <div className="text-xs bg-white/10 px-4 py-2 rounded-full text-slate-300 border border-white/20">
              EWG <span className="text-green-400">Increases</span> Acidity | EDG <span className="text-red-400">Decreases</span> Acidity
           </div>
        </div>
      );

    default:
      return null;
  }
};