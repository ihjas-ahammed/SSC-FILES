import React from 'react';

export const renderModule1Art = (id: string) => {
  switch (id) {
    // --- SECTION 1.1: CONCEPTS ---
    case 'chem-molecule-viewer':
      return (
        <div className="flex items-center justify-center h-full text-center p-4">
          <div className="text-slate-300">
            <p className="font-bold text-lg mb-2">Structure Visualization</p>
            <div className="text-4xl">Molecule 3D</div>
            <p className="text-sm mt-2 text-slate-400">(Placeholder for 3D Model)</p>
          </div>
        </div>
      );
    case 'chem-states-matter':
      return (
        <div className="flex justify-around items-center h-full w-full p-4">
          <div className="text-center">
            <div className="w-16 h-16 border border-white/20 grid grid-cols-3 gap-1 p-1">
              {[...Array(9)].map((_, i) => <div key={i} className="bg-blue-500 rounded-full w-full h-full"></div>)}
            </div>
            <p className="text-xs mt-1">Solid</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 border border-white/20 relative">
               {[...Array(9)].map((_, i) => <div key={i} className="bg-blue-400 rounded-full w-4 h-4 absolute" style={{left: Math.random()*40, top: 20 + Math.random()*30}}></div>)}
            </div>
            <p className="text-xs mt-1">Liquid</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 border border-white/20 relative">
               {[...Array(5)].map((_, i) => <div key={i} className="bg-blue-300 rounded-full w-4 h-4 absolute" style={{left: Math.random()*50, top: Math.random()*50}}></div>)}
            </div>
            <p className="text-xs mt-1">Gas</p>
          </div>
        </div>
      );
    case 'chem-matter-chart':
      return (
        <div className="flex flex-col items-center justify-center h-full text-xs">
           <div className="border p-1 mb-2">Matter</div>
           <div className="flex gap-4">
              <div className="flex flex-col items-center">
                 <div className="border p-1 mb-1">Mixtures</div>
                 <div className="flex gap-1"><span className="border p-0.5">Homogeneous</span><span className="border p-0.5">Heterogeneous</span></div>
              </div>
              <div className="flex flex-col items-center">
                 <div className="border p-1 mb-1">Pure</div>
                 <div className="flex gap-1"><span className="border p-0.5">Elements</span><span className="border p-0.5">Compounds</span></div>
              </div>
           </div>
        </div>
      );
    case 'chem-atom-visual':
      return (
        <div className="flex justify-around items-center h-full w-full">
           <div className="text-center">
              <div className="flex gap-1 justify-center"><div className="w-6 h-6 rounded-full bg-gray-200 text-black font-bold flex items-center justify-center">H</div><div className="w-6 h-6 rounded-full bg-gray-200 text-black font-bold flex items-center justify-center">H</div></div>
              <p className="mt-2">Element (H₂)</p>
           </div>
           <div className="text-center">
              <div className="flex gap-0 items-center justify-center">
                 <div className="w-8 h-8 rounded-full bg-red-500 text-white font-bold flex items-center justify-center">O</div>
                 <div className="flex flex-col gap-1 -ml-1">
                    <div className="w-5 h-5 rounded-full bg-gray-200 text-black text-xs flex items-center justify-center">H</div>
                    <div className="w-5 h-5 rounded-full bg-gray-200 text-black text-xs flex items-center justify-center">H</div>
                 </div>
              </div>
              <p className="mt-2">Compound (H₂O)</p>
           </div>
        </div>
      );
    case 'chem-si-units':
      return (
        <div className="flex items-center justify-center h-full overflow-y-auto p-2">
           <table className="table-auto text-xs text-left w-full">
              <thead><tr><th>Qty</th><th>Unit</th><th>Sym</th></tr></thead>
              <tbody>
                 <tr><td>Length</td><td>metre</td><td>m</td></tr>
                 <tr><td>Mass</td><td>kilogram</td><td>kg</td></tr>
                 <tr><td>Time</td><td>second</td><td>s</td></tr>
                 <tr><td>Temp</td><td>kelvin</td><td>K</td></tr>
                 <tr><td>Amount</td><td>mole</td><td>mol</td></tr>
              </tbody>
           </table>
        </div>
      );
    case 'chem-temp-converter':
      return (
        <div className="flex flex-col items-center justify-center h-full text-sm">
           <p>0°C = 32°F = 273.15 K</p>
           <div className="w-3/4 h-2 bg-gradient-to-r from-blue-500 to-red-500 mt-2 rounded-full"></div>
           <p className="mt-1">100°C = 212°F = 373.15 K</p>
        </div>
      );
    case 'chem-sig-figs':
      return (
        <div className="flex items-center justify-center h-full">
           <div className="text-center">
              <p className="text-slate-400 mb-2">Example:</p>
              <p className="text-2xl font-mono">0.0<span className="text-green-400 font-bold">2050</span></p>
              <p className="text-sm mt-2 text-green-400">4 Significant Figures</p>
              <p className="text-xs text-slate-500">(Leading zeros ignored, trailing zero counts)</p>
           </div>
        </div>
      );
    case 'chem-avogadro-box':
      return (
        <div className="flex justify-around items-center h-full w-full p-4">
           <div className="border border-white/30 p-2 w-1/3 aspect-square relative">
              <p className="absolute -top-6 w-full text-center text-xs">Vol V, Gas A</p>
              {[...Array(5)].map((_,i) => <div key={i} className="absolute w-2 h-2 bg-red-400 rounded-full" style={{top: Math.random()*80 + '%', left: Math.random()*80 + '%'}}></div>)}
           </div>
           <div className="text-xl font-bold">=</div>
           <div className="border border-white/30 p-2 w-1/3 aspect-square relative">
              <p className="absolute -top-6 w-full text-center text-xs">Vol V, Gas B</p>
              {[...Array(5)].map((_,i) => <div key={i} className="absolute w-2 h-2 bg-blue-400 rounded-full" style={{top: Math.random()*80 + '%', left: Math.random()*80 + '%'}}></div>)}
           </div>
        </div>
      );
    case 'chem-c12-standard':
      return (
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="w-24 h-24 rounded-full bg-gray-800 border-4 border-duo-blue flex items-center justify-center relative">
            <span className="text-2xl font-black text-white">¹²C</span>
            <div className="absolute top-0 right-0 w-8 h-8 bg-duo-green rounded-full flex items-center justify-center border-2 border-white transform translate-x-1/2 -translate-y-1/2">
              <span className="text-[8px] font-bold text-white">1/12</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-center text-slate-300">
            1 amu = Exact <span className="text-duo-green font-bold">1/12th</span> mass of Carbon-12 atom
          </p>
        </div>
      );
    case 'chem-isotope-avg':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="flex items-end gap-2 mb-2 w-full justify-center">
              <div className="w-12 bg-blue-500 rounded-t-lg flex flex-col justify-end items-center" style={{height: '75%'}}>
                 <span className="text-xs font-bold text-white mb-1">75%</span>
                 <span className="text-[10px] bg-black/30 w-full text-center py-1">³⁵Cl</span>
              </div>
              <div className="w-12 bg-red-500 rounded-t-lg flex flex-col justify-end items-center" style={{height: '25%'}}>
                 <span className="text-xs font-bold text-white mb-1">25%</span>
                 <span className="text-[10px] bg-black/30 w-full text-center py-1">³⁷Cl</span>
              </div>
           </div>
           <p className="text-xs text-center">Average = (35 × 3 + 37 × 1) / 4 = <span className="text-duo-green font-bold text-lg">35.5</span> u</p>
        </div>
      );
    case 'chem-limiting-reagent':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="flex gap-4 mb-4 items-center">
              <div className="flex flex-col items-center">
                 <div className="flex -space-x-1">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                 </div>
                 <span className="text-[10px]">1 mol N₂</span>
              </div>
              <span className="text-lg">+</span>
              <div className="flex flex-col items-center">
                 <div className="grid grid-cols-2 gap-1">
                    {[...Array(6)].map((_,i)=><div key={i} className="w-3 h-3 rounded-full bg-white"></div>)}
                 </div>
                 <span className="text-[10px]">Only 2 mol H₂</span>
              </div>
           </div>
           <div className="text-xs bg-red-500/20 border border-red-500 text-red-300 px-3 py-1 rounded-full mb-2">
              Need 3 mol H₂ for 1 mol N₂!
           </div>
           <p className="text-[10px] text-slate-400">H₂ runs out first → Limiting Reagent</p>
        </div>
      );

    // --- SECTION 1.2: ATOMIC STRUCTURE ---
    case 'chem-rutherford-gold':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="relative w-48 h-48 border border-white/10 rounded-full flex items-center justify-center bg-black/40">
              <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.8)] z-10"></div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                 <path d="M 10 100 L 90 100 Q 110 100 130 60 L 160 10" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" />
                 <path d="M 10 120 L 230 120" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" strokeDasharray="4" />
                 <path d="M 10 80 L 80 80 Q 96 80 85 95 L 40 140" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" />
              </svg>
           </div>
           <p className="text-[10px] mt-2 text-slate-400">α-particles deflected by Nucleus</p>
        </div>
      );
    case 'chem-bohr-orbit':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2">
           <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute w-4 h-4 bg-red-500 rounded-full z-20 text-[8px] flex items-center justify-center font-bold">p+</div>
              <div className="absolute w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute w-32 h-32 border border-white/30 rounded-full"></div>
              <div className="absolute w-44 h-44 border border-white/40 rounded-full"></div>
              
              <div className="absolute top-[28px] left-[50%] w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa] animate-pulse"></div>
              <div className="absolute text-[9px] text-white top-2">n=2</div>
           </div>
           <p className="text-[10px] text-duo-green">Fixed Orbits (Stationary States)</p>
        </div>
      );
    case 'chem-photoelectric':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2 relative overflow-hidden">
           <div className="w-full h-2 bg-slate-500 absolute bottom-10"></div>
           <div className="absolute bottom-10 left-1/4 w-12 h-8 bg-gray-400 rounded-t-lg border-t-2 border-white/50"></div>
           
           <div className="absolute top-4 left-10 text-yellow-300 text-xl font-bold animate-bounce">~~~ hν</div>
           <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_blue] flex items-center justify-center text-[6px]">e-</div>
           <p className="absolute bottom-2 w-full text-center text-[10px] text-slate-400">Metal Surface (Work Function W₀)</p>
        </div>
      );
    case 'chem-orbital-shapes':
      return (
        <div className="flex justify-around items-center h-full w-full p-2">
           <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-80 blur-[1px]"></div>
              <span className="text-xs font-bold mt-1">s (Sphere)</span>
           </div>
           <div className="flex flex-col items-center">
              <div className="flex">
                 <div className="w-8 h-12 rounded-full bg-blue-500 opacity-70 -mr-2 blur-[1px]"></div>
                 <div className="w-8 h-12 rounded-full bg-blue-500 opacity-70 -ml-4 blur-[1px]"></div>
              </div>
              <span className="text-xs font-bold mt-1">p (Dumbbell)</span>
           </div>
        </div>
      );
    case 'chem-periodic-trends':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-4">
           <div className="relative w-48 h-32 border-2 border-white/20 grid grid-cols-4 grid-rows-3 gap-1 p-1 bg-black/40">
              {[...Array(12)].map((_, i) => <div key={i} className="bg-white/10 rounded-sm"></div>)}
              <div className="absolute -top-6 left-0 w-full flex items-center">
                 <div className="w-full h-1 bg-gradient-to-r from-green-500 to-red-500"></div>
                 <span className="text-[8px] ml-1 text-red-400">Size ↓ IE ↑</span>
              </div>
              <div className="absolute top-0 -left-6 h-full flex flex-col items-center justify-center">
                 <div className="h-full w-1 bg-gradient-to-b from-red-500 to-green-500"></div>
                 <span className="text-[8px] mt-1 text-green-400">Size ↑</span>
              </div>
           </div>
           <p className="text-[10px] mt-2 text-slate-400">Trends: Size vs Ionization Energy</p>
        </div>
      );
    case 'chem-isoelectronic-size':
      return (
        <div className="flex items-center justify-around h-full w-full p-2">
           <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/50 border-2 border-blue-400 flex items-center justify-center">
                 <span className="text-xs font-bold">O²⁻</span>
              </div>
              <span className="text-[10px] mt-1">Larger (8p, 10e)</span>
           </div>
           <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-red-500/50 border-2 border-red-400 flex items-center justify-center">
                 <span className="text-xs font-bold">Mg²⁺</span>
              </div>
              <span className="text-[10px] mt-1">Smaller (12p, 10e)</span>
           </div>
        </div>
      );

    // --- SECTION 1.4: BONDING ---
    case 'chem-lewis-dot':
      return (
        <div className="flex items-center justify-center h-full w-full p-4">
           <div className="bg-black/40 p-4 rounded-xl border border-white/10 text-center">
             <div className="text-4xl font-bold mb-2 tracking-widest text-white">
               :Cl <span className="text-slate-500">-</span> Cl:
             </div>
             <div className="text-xs text-slate-400">
               Each Cl shares 1 electron.<br/>Both attain Argon octet.
             </div>
           </div>
        </div>
      );
    case 'chem-ionic-lattice':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-4">
           <div className="grid grid-cols-3 gap-1 mb-2">
             {[...Array(9)].map((_,i) => (
               <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] ${i%2===0 ? 'bg-green-500 text-black' : 'bg-purple-500 text-white'}`}>
                 {i%2===0 ? 'Cl⁻' : 'Na⁺'}
               </div>
             ))}
           </div>
           <p className="text-xs text-slate-400">Crystal Lattice (NaCl)</p>
        </div>
      );
    case 'chem-bond-parameters':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-4 gap-4">
           <div className="flex items-end gap-2">
              <div className="flex flex-col items-center">
                 <div className="w-1 h-12 bg-white/20 relative">
                    <div className="absolute top-0 w-2 h-2 rounded-full bg-red-500 -left-0.5"></div>
                    <div className="absolute bottom-0 w-2 h-2 rounded-full bg-white -left-0.5"></div>
                 </div>
                 <span className="text-[10px] mt-1">Length</span>
              </div>
              <div className="flex flex-col items-center">
                 <svg width="40" height="40" viewBox="0 0 40 40">
                    <line x1="20" y1="20" x2="5" y2="35" stroke="white" strokeWidth="2" />
                    <line x1="20" y1="20" x2="35" y2="35" stroke="white" strokeWidth="2" />
                    <circle cx="20" cy="20" r="4" fill="red" />
                    <path d="M 10 30 Q 20 35 30 30" stroke="yellow" fill="none" />
                 </svg>
                 <span className="text-[10px] mt-1">Angle</span>
              </div>
           </div>
        </div>
      );
    case 'chem-vsepr-shapes':
      return (
        <div className="flex justify-around items-center h-full w-full p-2">
           <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 flex items-center justify-center">
                 <div className="w-4 h-4 bg-red-500 rounded-full z-10"></div>
                 <div className="absolute w-full h-1 bg-white/50 rotate-45"></div>
                 <div className="absolute top-0 right-0 w-3 h-3 bg-blue-400 rounded-full"></div>
                 <div className="absolute bottom-0 left-0 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
              <span className="text-[10px] mt-1">Linear (180°)</span>
           </div>
           <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 flex items-center justify-center">
                 <div className="w-4 h-4 bg-red-500 rounded-full z-10"></div>
                 <div className="absolute w-1 h-8 bg-white/50 -translate-y-4"></div>
                 <div className="absolute w-8 h-1 bg-white/50 translate-y-2"></div>
                 <div className="absolute top-0 w-3 h-3 bg-blue-400 rounded-full"></div>
                 <div className="absolute bottom-2 left-0 w-3 h-3 bg-blue-400 rounded-full"></div>
                 <div className="absolute bottom-2 right-0 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
              <span className="text-[10px] mt-1">Trigonal (120°)</span>
           </div>
        </div>
      );
    case 'chem-orbital-overlap':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-2 gap-4">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 opacity-80"></div>
              <div className="w-8 h-8 rounded-full bg-blue-500 opacity-80 -ml-4 mix-blend-screen"></div>
              <span className="text-[10px] ml-2">s-s overlap (σ)</span>
           </div>
           <div className="flex items-center gap-1">
              <div className="w-4 h-8 bg-green-500 rounded-full opacity-80"></div>
              <div className="w-4 h-8 bg-green-500 rounded-full opacity-80 mix-blend-screen"></div>
              <span className="text-[10px] ml-2">p-p sidewise (π)</span>
           </div>
        </div>
      );
    case 'chem-hybridisation':
      return (
        <div className="flex items-center justify-center h-full p-4">
           <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute w-4 h-4 bg-gray-200 rounded-full z-20">C</div>
              {/* 4 lobes for sp3 */}
              <div className="absolute w-12 h-6 bg-purple-500/50 rounded-full rotate-0 translate-x-6"></div>
              <div className="absolute w-12 h-6 bg-purple-500/50 rounded-full rotate-90 translate-y-6"></div>
              <div className="absolute w-12 h-6 bg-purple-500/50 rounded-full rotate-[135] -translate-x-4 -translate-y-4"></div>
              <div className="absolute w-12 h-6 bg-purple-500/50 rounded-full rotate-[225] -translate-x-4 translate-y-4"></div>
           </div>
           <div className="absolute bottom-2 right-2 text-xs text-purple-300 font-bold">sp³ (Tetrahedral)</div>
        </div>
      );
    case 'chem-mo-diagram':
      return (
        <div className="flex items-center justify-center h-full w-full p-2">
           <svg viewBox="0 0 200 150" className="w-full h-full max-w-[250px]">
              {/* Atomic Orbitals */}
              <line x1="20" y1="80" x2="50" y2="80" stroke="white" strokeWidth="2" />
              <text x="10" y="85" className="fill-white text-[8px]">AO</text>
              <line x1="150" y1="80" x2="180" y2="80" stroke="white" strokeWidth="2" />
              <text x="185" y="85" className="fill-white text-[8px]">AO</text>
              
              {/* Molecular Orbitals */}
              <line x1="85" y1="120" x2="115" y2="120" stroke="lime" strokeWidth="2" />
              <text x="95" y="135" className="fill-lime-400 text-[8px]">σ (Bonding)</text>
              
              <line x1="85" y1="40" x2="115" y2="40" stroke="red" strokeWidth="2" />
              <text x="95" y="30" className="fill-red-400 text-[8px]">σ* (Anti)</text>

              {/* Connecting Lines */}
              <line x1="50" y1="80" x2="85" y2="120" stroke="white" strokeWidth="1" strokeDasharray="2" opacity="0.5" />
              <line x1="150" y1="80" x2="115" y2="120" stroke="white" strokeWidth="1" strokeDasharray="2" opacity="0.5" />
              <line x1="50" y1="80" x2="85" y2="40" stroke="white" strokeWidth="1" strokeDasharray="2" opacity="0.5" />
              <line x1="150" y1="80" x2="115" y2="40" stroke="white" strokeWidth="1" strokeDasharray="2" opacity="0.5" />
           </svg>
        </div>
      );
    case 'chem-h-bonding':
      return (
        <div className="flex flex-col items-center justify-center h-full w-full p-4">
           <div className="flex items-center gap-1">
              <div className="flex items-center">
                 <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] font-bold">O</div>
                 <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center text-[8px] -ml-1">H</div>
              </div>
              <div className="w-8 border-b-2 border-dashed border-yellow-400"></div>
              <div className="flex items-center">
                 <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] font-bold">O</div>
                 <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center text-[8px] -ml-1">H</div>
              </div>
           </div>
           <p className="text-[10px] mt-2 text-yellow-300">Hydrogen Bond (---)</p>
        </div>
      );
    default:
      return null;
  }
};